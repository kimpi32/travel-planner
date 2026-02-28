import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { users, posts, trips } from "@/lib/db/schema";
import { eq, count } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

type RouteContext = { params: Promise<{ userId: string }> };

const updateUserSchema = z.object({
  role: z.enum(["user", "admin"]).optional(),
});

// GET /api/admin/users/[userId]
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { userId } = await context.params;

    const [userRow] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        profileImage: users.profileImage,
        bio: users.bio,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
      })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!userRow) {
      return err("사용자를 찾을 수 없습니다.", 404);
    }

    const [[postCount], [tripCount]] = await Promise.all([
      db.select({ count: count() }).from(posts).where(eq(posts.userId, userId)),
      db.select({ count: count() }).from(trips).where(eq(trips.userId, userId)),
    ]);

    return ok({
      ...userRow,
      createdAt: userRow.createdAt.toISOString(),
      updatedAt: userRow.updatedAt.toISOString(),
      postCount: postCount.count,
      tripCount: tripCount.count,
    });
  } catch (e) {
    console.error("[GET /api/admin/users/[userId]]", e);
    return err("사용자 정보를 불러오는 중 오류가 발생했습니다.", 500);
  }
}

// PATCH /api/admin/users/[userId]
export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { userId } = await context.params;

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return err("요청 본문을 파싱할 수 없습니다.", 400);
    }

    const parsed = updateUserSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "입력값을 확인해 주세요.";
      return err(firstError, 400);
    }

    const data = parsed.data;
    if (!data.role) {
      return err("수정할 필드가 없습니다.", 400);
    }

    // 사용자 존재 여부 확인
    const [existing] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!existing) {
      return err("사용자를 찾을 수 없습니다.", 404);
    }

    await db
      .update(users)
      .set({ role: data.role, updatedAt: new Date() })
      .where(eq(users.id, userId));

    const [updatedUser] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        profileImage: users.profileImage,
        bio: users.bio,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
      })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    return ok({
      ...updatedUser,
      createdAt: updatedUser.createdAt.toISOString(),
      updatedAt: updatedUser.updatedAt.toISOString(),
    });
  } catch (e) {
    console.error("[PATCH /api/admin/users/[userId]]", e);
    return err("사용자 정보 수정 중 오류가 발생했습니다.", 500);
  }
}

// DELETE /api/admin/users/[userId]
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { userId } = await context.params;

    const [existing] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!existing) {
      return err("사용자를 찾을 수 없습니다.", 404);
    }

    await db.delete(users).where(eq(users.id, userId));

    return ok({ message: "사용자가 삭제되었습니다." });
  } catch (e) {
    console.error("[DELETE /api/admin/users/[userId]]", e);
    return err("사용자 삭제 중 오류가 발생했습니다.", 500);
  }
}
