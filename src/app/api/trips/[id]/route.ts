import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { trips, tripDays, tripItems, budgetItems } from "@/lib/db/schema";
import { eq, and, inArray } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { updateTripSchema } from "@/lib/validations/trips";

type Params = { params: Promise<{ id: string }> };

// 여행 소유권 확인 헬퍼
async function getTripWithOwnerCheck(tripId: string, userId: string) {
  const [trip] = await db
    .select()
    .from(trips)
    .where(and(eq(trips.id, tripId), eq(trips.userId, userId)));
  return trip ?? null;
}

// GET /api/trips/[id] - days, items, budgetItems 포함 상세 조회
export async function GET(
  _req: NextRequest,
  { params }: Params
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const { id } = await params;

    const trip = await getTripWithOwnerCheck(id, currentUser.id);
    if (!trip) {
      return err("여행을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    // days 조회
    const days = await db
      .select()
      .from(tripDays)
      .where(eq(tripDays.tripId, trip.id))
      .orderBy(tripDays.dayNumber);

    // items 조회 (day별로 그룹핑)
    const dayIds = days.map((d) => d.id);
    const items =
      dayIds.length > 0
        ? await db
            .select()
            .from(tripItems)
            .where(inArray(tripItems.tripDayId, dayIds))
            .orderBy(tripItems.tripDayId, tripItems.sortOrder)
        : [];

    // budgetItems 조회
    const budget = await db
      .select()
      .from(budgetItems)
      .where(eq(budgetItems.tripId, trip.id));

    // items를 dayId로 그룹핑
    const itemsByDay = new Map<string, typeof items>();
    for (const item of items) {
      const existing = itemsByDay.get(item.tripDayId) ?? [];
      existing.push(item);
      itemsByDay.set(item.tripDayId, existing);
    }

    const daysWithItems = days.map((day) => ({
      id: day.id,
      tripId: day.tripId,
      dayNumber: day.dayNumber,
      date: day.date,
      title: day.title,
      notes: day.notes,
      createdAt: day.createdAt.toISOString(),
      updatedAt: day.updatedAt.toISOString(),
      items: (itemsByDay.get(day.id) ?? []).map((item) => ({
        id: item.id,
        tripDayId: item.tripDayId,
        category: item.category,
        title: item.title,
        description: item.description,
        location: item.location,
        address: item.address,
        startTime: item.startTime,
        endTime: item.endTime,
        cost: item.cost,
        currency: item.currency,
        reservationNumber: item.reservationNumber,
        url: item.url,
        notes: item.notes,
        sortOrder: item.sortOrder,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
      })),
    }));

    return ok({
      id: trip.id,
      userId: trip.userId,
      title: trip.title,
      destination: trip.destination,
      destinationId: trip.destinationId,
      coverImage: trip.coverImage,
      status: trip.status,
      startDate: trip.startDate,
      endDate: trip.endDate,
      notes: trip.notes,
      isPublic: trip.isPublic,
      days: daysWithItems,
      budgetItems: budget.map((b) => ({
        id: b.id,
        tripId: b.tripId,
        category: b.category,
        title: b.title,
        amount: b.amount,
        currency: b.currency,
        isPaid: b.isPaid,
        notes: b.notes,
        createdAt: b.createdAt.toISOString(),
        updatedAt: b.updatedAt.toISOString(),
      })),
      createdAt: trip.createdAt.toISOString(),
      updatedAt: trip.updatedAt.toISOString(),
    });
  } catch (e) {
    console.error("[GET /api/trips/[id]]", e);
    return err("여행 정보를 불러오지 못했습니다.", 500);
  }
}

// PUT /api/trips/[id]
export async function PUT(
  req: NextRequest,
  { params }: Params
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const { id } = await params;

    const existingTrip = await getTripWithOwnerCheck(id, currentUser.id);
    if (!existingTrip) {
      return err("여행을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    const body = await req.json();
    const parsed = updateTripSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const { title, destination, startDate, endDate, coverImage, isPublic } = parsed.data;

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return err("출발일이 도착일보다 늦을 수 없습니다.", 400);
    }

    await db
      .update(trips)
      .set({
        ...(title !== undefined && { title }),
        ...(destination !== undefined && { destination }),
        ...(startDate !== undefined && { startDate: new Date(startDate) }),
        ...(endDate !== undefined && { endDate: new Date(endDate) }),
        ...(coverImage !== undefined && { coverImage }),
        ...(isPublic !== undefined && { isPublic }),
        updatedAt: new Date(),
      })
      .where(eq(trips.id, id));

    const [updated] = await db
      .select()
      .from(trips)
      .where(eq(trips.id, id));

    return ok({
      id: updated.id,
      userId: updated.userId,
      title: updated.title,
      destination: updated.destination,
      destinationId: updated.destinationId,
      coverImage: updated.coverImage,
      status: updated.status,
      startDate: updated.startDate,
      endDate: updated.endDate,
      notes: updated.notes,
      isPublic: updated.isPublic,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    });
  } catch (e) {
    console.error("[PUT /api/trips/[id]]", e);
    return err("여행 수정에 실패했습니다.", 500);
  }
}

// DELETE /api/trips/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: Params
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const { id } = await params;

    const existingTrip = await getTripWithOwnerCheck(id, currentUser.id);
    if (!existingTrip) {
      return err("여행을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    // onDelete: cascade 설정으로 tripDays, tripItems, budgetItems 자동 삭제
    await db.delete(trips).where(eq(trips.id, id));

    return ok({ id });
  } catch (e) {
    console.error("[DELETE /api/trips/[id]]", e);
    return err("여행 삭제에 실패했습니다.", 500);
  }
}
