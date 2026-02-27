import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { userBadges } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth/get-user";
import { checkAndAwardBadges } from "@/lib/badges/check-badges";
import { BADGE_DEFINITIONS, getBadge } from "@/lib/badges/definitions";
import { ok, err } from "@/lib/api/response";

// GET /api/community/badges?userId=...
// 특정 사용자(또는 현재 로그인 사용자)의 배지 목록 반환
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let targetUserId = searchParams.get("userId");

    // userId 미지정 시 현재 로그인 사용자
    if (!targetUserId) {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        return err("userId 파라미터가 필요하거나 로그인이 필요합니다.", 400);
      }
      targetUserId = currentUser.id;
    }

    // 획득한 배지 조회
    const earnedRows = await db
      .select({ badgeId: userBadges.badgeId, earnedAt: userBadges.earnedAt })
      .from(userBadges)
      .where(eq(userBadges.userId, targetUserId));

    const earnedMap = new Map(
      earnedRows.map((r) => [r.badgeId, r.earnedAt.toISOString()])
    );

    // 전체 배지 목록에 획득 여부 병합
    const badges = BADGE_DEFINITIONS.map((def) => ({
      ...def,
      earned: earnedMap.has(def.id),
      earnedAt: earnedMap.get(def.id) ?? null,
    }));

    return ok({ badges, userId: targetUserId });
  } catch (e) {
    console.error("[GET /api/community/badges]", e);
    return err("배지 정보를 불러오는 중 오류가 발생했습니다.", 500);
  }
}

// POST /api/community/badges
// 배지 조건 재검사 트리거 (내부 용도, 로그인 필요)
export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    // body에 userId가 있으면 해당 사용자(관리자 용도), 없으면 본인
    let body: { userId?: string } = {};
    try {
      body = await request.json();
    } catch {
      // body 없음 허용
    }

    const targetUserId = body.userId ?? currentUser.id;

    const newBadgeIds = await checkAndAwardBadges(targetUserId);

    const newBadges = newBadgeIds.map((id) => getBadge(id)).filter(Boolean);

    return ok({
      awarded: newBadges,
      count: newBadges.length,
      message:
        newBadges.length > 0
          ? `${newBadges.length}개의 새로운 배지를 획득했습니다!`
          : "새로 획득한 배지가 없습니다.",
    });
  } catch (e) {
    console.error("[POST /api/community/badges]", e);
    return err("배지 확인 중 오류가 발생했습니다.", 500);
  }
}
