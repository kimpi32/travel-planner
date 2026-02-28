import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { users, posts, trips } from "@/lib/db/schema";
import { eq, count } from "drizzle-orm";
import { ok, err } from "@/lib/api/response";

// GET /api/community/profiles/[userId]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, userId));

    if (!user) {
      return err("사용자를 찾을 수 없습니다.", 404);
    }

    const [postCountRow] = await db
      .select({ count: count() })
      .from(posts)
      .where(eq(posts.userId, user.id));

    const [tripCountRow] = await db
      .select({ count: count() })
      .from(trips)
      .where(eq(trips.userId, user.id));

    const userTrips = await db
      .select({ destination: trips.destination })
      .from(trips)
      .where(eq(trips.userId, user.id));

    const visitedCountries = new Set(
      userTrips.map((t) => t.destination).filter(Boolean)
    ).size;

    // 이메일은 공개하지 않음
    return ok({
      id: user.id,
      displayName: user.name,
      bio: user.bio ?? undefined,
      avatarUrl: user.profileImage ?? undefined,
      visitedCountries,
      tripCount: tripCountRow.count,
      postCount: postCountRow.count,
      createdAt: user.createdAt.toISOString(),
    });
  } catch (e) {
    console.error("[GET /api/community/profiles/[userId]]", e);
    return err("프로필을 불러오지 못했습니다.", 500);
  }
}
