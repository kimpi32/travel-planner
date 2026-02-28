import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { trips, tripDays, tripItems } from "@/lib/db/schema";
import { eq, and, inArray } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

type Params = { params: Promise<{ id: string }> };

const reorderSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string().uuid("올바른 항목 ID를 입력해주세요."),
        tripDayId: z.string().uuid("올바른 day ID를 입력해주세요."),
        orderIndex: z.number().int().min(0, "순서는 0 이상이어야 합니다."),
      })
    )
    .min(1, "재정렬할 항목이 없습니다."),
});

// PATCH /api/trips/[id]/items/reorder - 드래그앤드롭 순서 일괄 업데이트
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
    const parsed = reorderSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const { items } = parsed.data;

    // 요청된 item ID들이 모두 해당 trip에 속하는지 확인
    const itemIds = items.map((i) => i.id);
    const dayIds = [...new Set(items.map((i) => i.tripDayId))];

    // 요청된 dayId들이 모두 해당 trip 소속인지 검증
    const validDays = await db
      .select({ id: tripDays.id })
      .from(tripDays)
      .where(and(inArray(tripDays.id, dayIds), eq(tripDays.tripId, tripId)));

    if (validDays.length !== dayIds.length) {
      return err("유효하지 않은 Day ID가 포함되어 있습니다.", 400);
    }

    const validDayIds = new Set(validDays.map((d) => d.id));

    // item들이 유효한 day에 속하는지 검증
    const existingItems = await db
      .select({ id: tripItems.id, tripDayId: tripItems.tripDayId })
      .from(tripItems)
      .where(inArray(tripItems.id, itemIds));

    if (existingItems.length !== itemIds.length) {
      return err("존재하지 않는 항목이 포함되어 있습니다.", 400);
    }

    for (const item of existingItems) {
      if (!validDayIds.has(item.tripDayId)) {
        // 현재 day가 이 trip 소속이 아닌 경우
        // (이동 대상 dayId는 별도 검증 완료)
        const requestedItem = items.find((i) => i.id === item.id);
        if (requestedItem && !validDayIds.has(requestedItem.tripDayId)) {
          return err("접근 권한이 없는 항목이 포함되어 있습니다.", 403);
        }
      }
    }

    // 트랜잭션으로 일괄 업데이트
    await db.transaction(async (tx) => {
      await Promise.all(
        items.map((item) =>
          tx
            .update(tripItems)
            .set({
              tripDayId: item.tripDayId,
              sortOrder: item.orderIndex,
              updatedAt: new Date(),
            })
            .where(eq(tripItems.id, item.id))
        )
      );
    });

    // 업데이트된 항목 조회
    const updatedItems = await db
      .select({
        id: tripItems.id,
        tripDayId: tripItems.tripDayId,
        sortOrder: tripItems.sortOrder,
      })
      .from(tripItems)
      .where(inArray(tripItems.id, itemIds));

    return ok({
      updated: updatedItems.length,
      items: updatedItems,
    });
  } catch (e) {
    console.error("[PATCH /api/trips/[id]/items/reorder]", e);
    return err("순서 변경에 실패했습니다.", 500);
  }
}
