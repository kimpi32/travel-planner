import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { reports, users } from "@/lib/db/schema";
import { count, eq, desc } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";

// GET /api/admin/reports
export async function GET(request: NextRequest) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
    const limit = Math.min(Math.max(1, Number(searchParams.get("limit") ?? "20")), 100);
    const status = searchParams.get("status") as "pending" | "reviewed" | "dismissed" | null;
    const offset = (page - 1) * limit;

    const whereClause = status ? eq(reports.status, status) : undefined;

    const [[totalRow], reportRows] = await Promise.all([
      db.select({ count: count() }).from(reports).where(whereClause),
      db
        .select({
          id: reports.id,
          reporterId: reports.reporterId,
          reporterName: users.name,
          reporterEmail: users.email,
          targetType: reports.targetType,
          targetId: reports.targetId,
          reason: reports.reason,
          status: reports.status,
          createdAt: reports.createdAt,
        })
        .from(reports)
        .innerJoin(users, eq(reports.reporterId, users.id))
        .where(whereClause)
        .orderBy(desc(reports.createdAt))
        .limit(limit)
        .offset(offset),
    ]);

    return ok({
      reports: reportRows.map((r) => ({
        id: r.id,
        reporter: {
          id: r.reporterId,
          name: r.reporterName,
          email: r.reporterEmail,
        },
        targetType: r.targetType,
        targetId: r.targetId,
        reason: r.reason,
        status: r.status,
        createdAt: r.createdAt.toISOString(),
      })),
      total: totalRow.count,
      page,
      limit,
    });
  } catch (e) {
    console.error("[GET /api/admin/reports]", e);
    return err("신고 목록을 불러오는 중 오류가 발생했습니다.", 500);
  }
}
