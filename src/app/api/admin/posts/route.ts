import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { posts, users } from "@/lib/db/schema";
import { count, like, eq, desc } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";

// GET /api/admin/posts
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
      ? like(posts.title, `%${search}%`)
      : undefined;

    const [[totalRow], postRows] = await Promise.all([
      db.select({ count: count() }).from(posts).where(whereClause),
      db
        .select({
          id: posts.id,
          userId: posts.userId,
          authorName: users.name,
          authorEmail: users.email,
          type: posts.type,
          title: posts.title,
          body: posts.body,
          destinationId: posts.destinationId,
          rating: posts.rating,
          likeCount: posts.likeCount,
          commentCount: posts.commentCount,
          createdAt: posts.createdAt,
          updatedAt: posts.updatedAt,
        })
        .from(posts)
        .innerJoin(users, eq(posts.userId, users.id))
        .where(whereClause)
        .orderBy(desc(posts.createdAt))
        .limit(limit)
        .offset(offset),
    ]);

    return ok({
      posts: postRows.map((p) => ({
        id: p.id,
        type: p.type,
        title: p.title,
        body: p.body,
        destinationId: p.destinationId,
        rating: p.rating,
        likeCount: p.likeCount,
        commentCount: p.commentCount,
        author: {
          id: p.userId,
          name: p.authorName,
          email: p.authorEmail,
        },
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      })),
      total: totalRow.count,
      page,
      limit,
    });
  } catch (e) {
    console.error("[GET /api/admin/posts]", e);
    return err("게시글 목록을 불러오는 중 오류가 발생했습니다.", 500);
  }
}
