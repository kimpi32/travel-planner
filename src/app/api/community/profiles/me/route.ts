import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { users, posts, trips } from "@/lib/db/schema";
import { eq, count } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

const updateProfileSchema = z.object({
  displayName: z.string().min(1).max(50).optional(),
  bio: z.string().max(200).optional(),
  avatarUrl: z.string().url().optional(),
});

// GET /api/community/profiles/me
export async function GET() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const [postCountRow] = await db
      .select({ count: count() })
      .from(posts)
      .where(eq(posts.userId, currentUser.id));

    const [tripCountRow] = await db
      .select({ count: count() })
      .from(trips)
      .where(eq(trips.userId, currentUser.id));

    // 방문한 국가 수: completed 여행 중 destination 기준 distinct
    const completedTrips = await db
      .select({ destination: trips.destination })
      .from(trips)
      .where(eq(trips.userId, currentUser.id));

    const visitedCountries = new Set(
      completedTrips
        .map((t) => t.destination)
        .filter(Boolean)
    ).size;

    return ok({
      id: currentUser.id,
      authId: currentUser.authId,
      displayName: currentUser.name,
      bio: currentUser.bio ?? undefined,
      avatarUrl: currentUser.profileImage ?? undefined,
      email: currentUser.email,
      visitedCountries,
      tripCount: tripCountRow.count,
      postCount: postCountRow.count,
      createdAt: currentUser.createdAt.toISOString(),
    });
  } catch (e) {
    console.error("[GET /api/community/profiles/me]", e);
    return err("프로필을 불러오지 못했습니다.", 500);
  }
}

// PATCH /api/community/profiles/me
export async function PATCH(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    const body = await req.json();
    const parsed = updateProfileSchema.safeParse(body);
    if (!parsed.success) {
      return err(parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.", 400);
    }

    const { displayName, bio, avatarUrl } = parsed.data;

    const updateData: Partial<typeof users.$inferInsert> = {
      updatedAt: new Date(),
    };
    if (displayName !== undefined) updateData.name = displayName;
    if (bio !== undefined) updateData.bio = bio;
    if (avatarUrl !== undefined) updateData.profileImage = avatarUrl;

    await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, currentUser.id));

    const [updated] = await db
      .select()
      .from(users)
      .where(eq(users.id, currentUser.id));

    const [postCountRow] = await db
      .select({ count: count() })
      .from(posts)
      .where(eq(posts.userId, updated.id));

    const [tripCountRow] = await db
      .select({ count: count() })
      .from(trips)
      .where(eq(trips.userId, updated.id));

    const completedTrips = await db
      .select({ destination: trips.destination })
      .from(trips)
      .where(eq(trips.userId, updated.id));

    const visitedCountries = new Set(
      completedTrips.map((t) => t.destination).filter(Boolean)
    ).size;

    return ok({
      id: updated.id,
      authId: updated.authId,
      displayName: updated.name,
      bio: updated.bio ?? undefined,
      avatarUrl: updated.profileImage ?? undefined,
      email: updated.email,
      visitedCountries,
      tripCount: tripCountRow.count,
      postCount: postCountRow.count,
      createdAt: updated.createdAt.toISOString(),
    });
  } catch (e) {
    console.error("[PATCH /api/community/profiles/me]", e);
    return err("프로필 수정에 실패했습니다.", 500);
  }
}
