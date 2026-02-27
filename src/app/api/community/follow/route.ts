import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { follows, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { ok, err } from "@/lib/api/response";

// GET /api/community/follow?userId=xxx&type=followers|following
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const userId = searchParams.get("userId");
    const type = searchParams.get("type") as "followers" | "following" | null;

    if (!userId) {
      return err("userId가 필요합니다.", 400);
    }

    if (type !== "followers" && type !== "following") {
      return err("type은 'followers' 또는 'following'이어야 합니다.", 400);
    }

    if (type === "followers") {
      // 이 유저를 팔로우하는 사람들
      const rows = await db
        .select({
          followId: follows.id,
          createdAt: follows.createdAt,
          userId: users.id,
          name: users.name,
          profileImage: users.profileImage,
          bio: users.bio,
        })
        .from(follows)
        .innerJoin(users, eq(users.id, follows.followerId))
        .where(eq(follows.followingId, userId));

      return ok(
        rows.map((r) => ({
          followId: r.followId,
          followedAt: r.createdAt,
          user: {
            id: r.userId,
            displayName: r.name,
            avatarUrl: r.profileImage,
            bio: r.bio,
          },
        }))
      );
    } else {
      // 이 유저가 팔로우하는 사람들
      const rows = await db
        .select({
          followId: follows.id,
          createdAt: follows.createdAt,
          userId: users.id,
          name: users.name,
          profileImage: users.profileImage,
          bio: users.bio,
        })
        .from(follows)
        .innerJoin(users, eq(users.id, follows.followingId))
        .where(eq(follows.followerId, userId));

      return ok(
        rows.map((r) => ({
          followId: r.followId,
          followedAt: r.createdAt,
          user: {
            id: r.userId,
            displayName: r.name,
            avatarUrl: r.profileImage,
            bio: r.bio,
          },
        }))
      );
    }
  } catch (error) {
    console.error("[GET /api/community/follow]", error);
    return err("목록을 불러오지 못했습니다.", 500);
  }
}
