import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { trips, tripDays, tripItems } from "@/lib/db/schema";
import { eq, desc, count, inArray } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { createTripSchema } from "@/lib/validations/trips";

// 날짜 범위로 day 목록 생성 (YYYY-MM-DD 문자열 반환)
function generateDateRange(startDate: string, endDate: string): string[] {
  const dates: string[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);

  const current = new Date(start);
  while (current <= end) {
    dates.push(current.toISOString().slice(0, 10));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

// GET /api/trips
export async function GET() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    // 여행 목록 조회 (최신순)
    const userTrips = await db
      .select()
      .from(trips)
      .where(eq(trips.userId, currentUser.id))
      .orderBy(desc(trips.updatedAt));

    if (userTrips.length === 0) {
      return ok([]);
    }

    const tripIds = userTrips.map((t) => t.id);

    // 각 trip의 days 조회
    const allDays = await db
      .select()
      .from(tripDays)
      .where(inArray(tripDays.tripId, tripIds))
      .orderBy(tripDays.tripId, tripDays.dayNumber);

    // 각 day의 items 수 집계
    const dayIds = allDays.map((d) => d.id);
    const itemCounts =
      dayIds.length > 0
        ? await db
            .select({ tripDayId: tripItems.tripDayId, count: count() })
            .from(tripItems)
            .where(inArray(tripItems.tripDayId, dayIds))
            .groupBy(tripItems.tripDayId)
        : [];

    const itemCountMap = new Map(itemCounts.map((r) => [r.tripDayId, r.count]));

    // days를 tripId로 그룹핑
    const daysMap = new Map<string, typeof allDays>();
    for (const day of allDays) {
      const existing = daysMap.get(day.tripId) ?? [];
      existing.push(day);
      daysMap.set(day.tripId, existing);
    }

    const result = userTrips.map((trip) => {
      const days = (daysMap.get(trip.id) ?? []).map((day) => ({
        id: day.id,
        dayNumber: day.dayNumber,
        date: day.date,
        title: day.title,
        notes: day.notes,
        itemCount: itemCountMap.get(day.id) ?? 0,
      }));

      return {
        id: trip.id,
        title: trip.title,
        destination: trip.destination,
        destinationId: trip.destinationId,
        coverImage: trip.coverImage,
        status: trip.status,
        startDate: trip.startDate,
        endDate: trip.endDate,
        notes: trip.notes,
        isPublic: trip.isPublic,
        days,
        createdAt: trip.createdAt.toISOString(),
        updatedAt: trip.updatedAt.toISOString(),
      };
    });

    return ok(result);
  } catch (e) {
    console.error("[GET /api/trips]", e);
    return err("여행 목록을 불러오지 못했습니다.", 500);
  }
}

// POST /api/trips
export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const body = await req.json();
    const parsed = createTripSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const { title, destination, startDate, endDate, coverImage, isPublic } = parsed.data;

    // 날짜 유효성 검사
    if (new Date(startDate) > new Date(endDate)) {
      return err("출발일이 도착일보다 늦을 수 없습니다.", 400);
    }

    // 트랜잭션으로 trip + tripDays 생성
    const result = await db.transaction(async (tx) => {
      const tripInsert = await tx
        .insert(trips)
        .values({
          userId: currentUser.id,
          title,
          destination,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          coverImage: coverImage ?? null,
          isPublic: isPublic ?? false,
          status: "planning",
        })
        .$returningId();

      const [newTrip] = await tx
        .select()
        .from(trips)
        .where(eq(trips.id, tripInsert[0].id));

      // startDate ~ endDate 날짜 범위로 tripDays 자동 생성
      const dateRange = generateDateRange(startDate, endDate);
      const dayInserts = await tx
        .insert(tripDays)
        .values(
          dateRange.map((date, index) => ({
            tripId: newTrip.id,
            dayNumber: index + 1,
            date: new Date(date),
            title: `Day ${index + 1}`,
          }))
        )
        .$returningId();

      const newDays = await tx
        .select()
        .from(tripDays)
        .where(inArray(tripDays.id, dayInserts.map((d: { id: string }) => d.id)));

      return { trip: newTrip, days: newDays };
    });

    return ok(
      {
        id: result.trip.id,
        title: result.trip.title,
        destination: result.trip.destination,
        destinationId: result.trip.destinationId,
        coverImage: result.trip.coverImage,
        status: result.trip.status,
        startDate: result.trip.startDate,
        endDate: result.trip.endDate,
        notes: result.trip.notes,
        isPublic: result.trip.isPublic,
        days: result.days.map((day: typeof tripDays.$inferSelect) => ({
          id: day.id,
          dayNumber: day.dayNumber,
          date: day.date,
          title: day.title,
          notes: day.notes,
          itemCount: 0,
        })),
        createdAt: result.trip.createdAt.toISOString(),
        updatedAt: result.trip.updatedAt.toISOString(),
      },
      201
    );
  } catch (e) {
    console.error("[POST /api/trips]", e);
    return err("여행 생성에 실패했습니다.", 500);
  }
}
