import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { users } from "@/lib/db/schema";
import { count, or, like, desc } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";

// GET /api/admin/users
export async function GET(request: NextRequest) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
    const limit = Math.min(Math.max(1, Number(searchParams.get("limit") ?? "20")), 100);
    const search = searchParams.get("search")?.trim() || null;
    const offset = (page - 1) * limit;

    const whereClause = search
      ? or(
          like(users.name, `%${search}%`),
          like(users.email, `%${search}%`),
        )
      : undefined;

    const [[totalRow], userRows] = await Promise.all([
      db.select({ count: count() }).from(users).where(whereClause),
      db
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
        .where(whereClause)
        .orderBy(desc(users.createdAt))
        .limit(limit)
        .offset(offset),
    ]);

    return ok({
      users: userRows.map((u) => ({
        ...u,
        createdAt: u.createdAt.toISOString(),
        updatedAt: u.updatedAt.toISOString(),
      })),
      total: totalRow.count,
      page,
      limit,
    });
  } catch (e) {
    console.error("[GET /api/admin/users]", e);
    return err("사용자 목록을 불러오는 중 오류가 발생했습니다.", 500);
  }
}
