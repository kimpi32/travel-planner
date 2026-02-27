import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { follows, notifications, users } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { eq, and, count } from "drizzle-orm";

// POST /api/community/follow/[userId] - Toggle follow
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId: targetUserId } = await params;

  if (currentUser.id === targetUserId) {
    return NextResponse.json({ error: "자신을 팔로우할 수 없습니다." }, { status: 400 });
  }

  try {
    const result = await db.transaction(async (tx) => {
      // 대상 유저 존재 확인
      const [targetUser] = await tx
        .select({ id: users.id })
        .from(users)
        .where(eq(users.id, targetUserId));

      if (!targetUser) {
        throw new Error("USER_NOT_FOUND");
      }

      // 기존 팔로우 확인
      const [existing] = await tx
        .select()
        .from(follows)
        .where(
          and(
            eq(follows.followerId, currentUser.id),
            eq(follows.followingId, targetUserId)
          )
        );

      let isFollowing: boolean;

      if (existing) {
        // 언팔로우
        await tx.delete(follows).where(eq(follows.id, existing.id));
        isFollowing = false;
      } else {
        // 팔로우
        await tx.insert(follows).values({
          followerId: currentUser.id,
          followingId: targetUserId,
        });

        // 팔로우 알림 생성 (자기 자신이 아닐 때만)
        await tx.insert(notifications).values({
          userId: targetUserId,
          type: "follow",
          actorId: currentUser.id,
        });

        isFollowing = true;
      }

      // 팔로워 수 조회
      const [followerCountRow] = await tx
        .select({ count: count() })
        .from(follows)
        .where(eq(follows.followingId, targetUserId));

      return {
        following: isFollowing,
        followerCount: Number(followerCountRow.count),
      };
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Error && error.message === "USER_NOT_FOUND") {
      return NextResponse.json({ error: "사용자를 찾을 수 없습니다." }, { status: 404 });
    }
    console.error("[POST /api/community/follow/[userId]]", error);
    return NextResponse.json({ error: "팔로우 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}

// GET /api/community/follow/[userId] - Check follow status
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ following: false });
  }

  const { userId: targetUserId } = await params;

  try {
    const [existing] = await db
      .select({ id: follows.id })
      .from(follows)
      .where(
        and(
          eq(follows.followerId, currentUser.id),
          eq(follows.followingId, targetUserId)
        )
      );

    return NextResponse.json({ following: !!existing });
  } catch (error) {
    console.error("[GET /api/community/follow/[userId]]", error);
    return NextResponse.json({ error: "상태 확인 중 오류가 발생했습니다." }, { status: 500 });
  }
}
