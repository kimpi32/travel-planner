import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { trips, tripDays, tripItems } from "@/lib/db/schema";
import { eq, and, max } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

type Params = { params: Promise<{ id: string }> };

const addItemSchema = z.object({
  tripDayId: z.string().uuid("올바른 day ID를 입력해주세요."),
  category: z
    .enum(["accommodation", "transportation", "attraction", "restaurant", "activity", "other"])
    .default("other"),
  title: z.string().min(1, "항목 제목을 입력해주세요.").max(200),
  description: z.string().max(500).optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  cost: z.number().int().min(0).optional(),
  currency: z.string().length(3).default("KRW"),
  reservationNumber: z.string().optional(),
  url: z.string().url().optional(),
  notes: z.string().max(500).optional(),
  sortOrder: z.number().int().min(0).optional(),
});

const updateItemSchema = z.object({
  itemId: z.string().uuid("올바른 항목 ID를 입력해주세요."),
  tripDayId: z.string().uuid().optional(),
  category: z
    .enum(["accommodation", "transportation", "attraction", "restaurant", "activity", "other"])
    .optional(),
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(500).optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  cost: z.number().int().min(0).optional(),
  currency: z.string().length(3).optional(),
  reservationNumber: z.string().optional(),
  url: z.string().url().optional(),
  notes: z.string().max(500).optional(),
  sortOrder: z.number().int().min(0).optional(),
});

const deleteItemSchema = z.object({
  itemId: z.string().uuid("올바른 항목 ID를 입력해주세요."),
});

// trip 소유권 + day 소속 확인 헬퍼
async function verifyTripDayAccess(tripId: string, dayId: string, userId: string) {
  const [trip] = await db
    .select()
    .from(trips)
    .where(and(eq(trips.id, tripId), eq(trips.userId, userId)));
  if (!trip) return null;

  const [day] = await db
    .select()
    .from(tripDays)
    .where(and(eq(tripDays.id, dayId), eq(tripDays.tripId, tripId)));
  return day ?? null;
}

// POST /api/trips/[id]/items - 항목 추가
export async function POST(req: NextRequest, { params }: Params) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const { id: tripId } = await params;

    // trip 소유권 확인
    const [trip] = await db
      .select()
      .from(trips)
      .where(and(eq(trips.id, tripId), eq(trips.userId, currentUser.id)));
    if (!trip) {
      return err("여행을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    const body = await req.json();
    const parsed = addItemSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const data = parsed.data;

    // day가 해당 trip 소속인지 확인
    const [day] = await db
      .select()
      .from(tripDays)
      .where(and(eq(tripDays.id, data.tripDayId), eq(tripDays.tripId, tripId)));
    if (!day) {
      return err("유효하지 않은 Day ID입니다.", 400);
    }

    // sortOrder가 없으면 해당 day의 최대값 + 1
    let sortOrder = data.sortOrder;
    if (sortOrder === undefined) {
      const [maxRow] = await db
        .select({ max: max(tripItems.sortOrder) })
        .from(tripItems)
        .where(eq(tripItems.tripDayId, data.tripDayId));
      sortOrder = (maxRow?.max ?? -1) + 1;
    }

    const itemInsert = await db
      .insert(tripItems)
      .values({
        tripDayId: data.tripDayId,
        category: data.category,
        title: data.title,
        description: data.description ?? null,
        location: data.location ?? null,
        address: data.address ?? null,
        startTime: data.startTime ?? null,
        endTime: data.endTime ?? null,
        cost: data.cost ?? null,
        currency: data.currency,
        reservationNumber: data.reservationNumber ?? null,
        url: data.url ?? null,
        notes: data.notes ?? null,
        sortOrder,
      })
      .$returningId();

    const [newItem] = await db
      .select()
      .from(tripItems)
      .where(eq(tripItems.id, itemInsert[0].id));

    return ok(
      {
        id: newItem.id,
        tripDayId: newItem.tripDayId,
        category: newItem.category,
        title: newItem.title,
        description: newItem.description,
        location: newItem.location,
        address: newItem.address,
        startTime: newItem.startTime,
        endTime: newItem.endTime,
        cost: newItem.cost,
        currency: newItem.currency,
        reservationNumber: newItem.reservationNumber,
        url: newItem.url,
        notes: newItem.notes,
        sortOrder: newItem.sortOrder,
        createdAt: newItem.createdAt.toISOString(),
        updatedAt: newItem.updatedAt.toISOString(),
      },
      201
    );
  } catch (e) {
    console.error("[POST /api/trips/[id]/items]", e);
    return err("항목 추가에 실패했습니다.", 500);
  }
}

// PATCH /api/trips/[id]/items - 항목 수정
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const { id: tripId } = await params;

    // trip 소유권 확인
    const [trip] = await db
      .select()
      .from(trips)
      .where(and(eq(trips.id, tripId), eq(trips.userId, currentUser.id)));
    if (!trip) {
      return err("여행을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    const body = await req.json();
    const parsed = updateItemSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const { itemId, tripDayId, ...updateFields } = parsed.data;

    // item이 해당 trip의 day에 속하는지 확인
    const [existingItem] = await db
      .select({ id: tripItems.id, tripDayId: tripItems.tripDayId })
      .from(tripItems)
      .innerJoin(tripDays, eq(tripItems.tripDayId, tripDays.id))
      .where(and(eq(tripItems.id, itemId), eq(tripDays.tripId, tripId)));
    if (!existingItem) {
      return err("항목을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    // tripDayId 변경 시 대상 day가 동일 trip 소속인지 확인
    if (tripDayId) {
      const [targetDay] = await db
        .select()
        .from(tripDays)
        .where(and(eq(tripDays.id, tripDayId), eq(tripDays.tripId, tripId)));
      if (!targetDay) {
        return err("유효하지 않은 Day ID입니다.", 400);
      }
    }

    await db
      .update(tripItems)
      .set({
        ...(tripDayId !== undefined && { tripDayId }),
        ...(updateFields.category !== undefined && { category: updateFields.category }),
        ...(updateFields.title !== undefined && { title: updateFields.title }),
        ...(updateFields.description !== undefined && { description: updateFields.description }),
        ...(updateFields.location !== undefined && { location: updateFields.location }),
        ...(updateFields.address !== undefined && { address: updateFields.address }),
        ...(updateFields.startTime !== undefined && { startTime: updateFields.startTime }),
        ...(updateFields.endTime !== undefined && { endTime: updateFields.endTime }),
        ...(updateFields.cost !== undefined && { cost: updateFields.cost }),
        ...(updateFields.currency !== undefined && { currency: updateFields.currency }),
        ...(updateFields.reservationNumber !== undefined && {
          reservationNumber: updateFields.reservationNumber,
        }),
        ...(updateFields.url !== undefined && { url: updateFields.url }),
        ...(updateFields.notes !== undefined && { notes: updateFields.notes }),
        ...(updateFields.sortOrder !== undefined && { sortOrder: updateFields.sortOrder }),
        updatedAt: new Date(),
      })
      .where(eq(tripItems.id, itemId));

    const [updated] = await db
      .select()
      .from(tripItems)
      .where(eq(tripItems.id, itemId));

    return ok({
      id: updated.id,
      tripDayId: updated.tripDayId,
      category: updated.category,
      title: updated.title,
      description: updated.description,
      location: updated.location,
      address: updated.address,
      startTime: updated.startTime,
      endTime: updated.endTime,
      cost: updated.cost,
      currency: updated.currency,
      reservationNumber: updated.reservationNumber,
      url: updated.url,
      notes: updated.notes,
      sortOrder: updated.sortOrder,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    });
  } catch (e) {
    console.error("[PATCH /api/trips/[id]/items]", e);
    return err("항목 수정에 실패했습니다.", 500);
  }
}

// DELETE /api/trips/[id]/items - 항목 삭제
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const { id: tripId } = await params;

    // trip 소유권 확인
    const [trip] = await db
      .select()
      .from(trips)
      .where(and(eq(trips.id, tripId), eq(trips.userId, currentUser.id)));
    if (!trip) {
      return err("여행을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    const body = await req.json();
    const parsed = deleteItemSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const { itemId } = parsed.data;

    // item이 해당 trip에 속하는지 확인
    const [existingItem] = await db
      .select({ id: tripItems.id })
      .from(tripItems)
      .innerJoin(tripDays, eq(tripItems.tripDayId, tripDays.id))
      .where(and(eq(tripItems.id, itemId), eq(tripDays.tripId, tripId)));
    if (!existingItem) {
      return err("항목을 찾을 수 없거나 접근 권한이 없습니다.", 404);
    }

    await db.delete(tripItems).where(eq(tripItems.id, itemId));

    return ok({ id: itemId });
  } catch (e) {
    console.error("[DELETE /api/trips/[id]/items]", e);
    return err("항목 삭제에 실패했습니다.", 500);
  }
}
