import { db } from "@/lib/db/drizzle";
import { users, posts, trips, reports } from "@/lib/db/schema";
import { count, gte, eq, sql } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";

// GET /api/admin/stats
export async function GET() {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const [
      [userCount],
      [postCount],
      [tripCount],
      [pendingReportCount],
      [newUsersMonth],
      [newPostsMonth],
    ] = await Promise.all([
      db.select({ count: count() }).from(users),
      db.select({ count: count() }).from(posts),
      db.select({ count: count() }).from(trips),
      db.select({ count: count() }).from(reports).where(eq(reports.status, "pending")),
      db.select({ count: count() }).from(users).where(gte(users.createdAt, sql`DATE_FORMAT(NOW(), '%Y-%m-01')`)),
      db.select({ count: count() }).from(posts).where(gte(posts.createdAt, sql`DATE_FORMAT(NOW(), '%Y-%m-01')`)),
    ]);

    return ok({
      totalUsers: userCount.count,
      totalPosts: postCount.count,
      totalTrips: tripCount.count,
      pendingReports: pendingReportCount.count,
      newUsersThisMonth: newUsersMonth.count,
      newPostsThisMonth: newPostsMonth.count,
    });
  } catch (e) {
    console.error("[GET /api/admin/stats]", e);
    return err("통계를 불러오는 중 오류가 발생했습니다.", 500);
  }
}
