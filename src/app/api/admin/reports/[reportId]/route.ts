import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { reports } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

type RouteContext = { params: Promise<{ reportId: string }> };

const updateReportSchema = z.object({
  status: z.enum(["reviewed", "dismissed"]),
});

// PATCH /api/admin/reports/[reportId]
export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { reportId } = await context.params;

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return err("요청 본문을 파싱할 수 없습니다.", 400);
    }

    const parsed = updateReportSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "입력값을 확인해 주세요.";
      return err(firstError, 400);
    }

    const { status } = parsed.data;

    const [existing] = await db
      .select({ id: reports.id })
      .from(reports)
      .where(eq(reports.id, reportId))
      .limit(1);

    if (!existing) {
      return err("신고를 찾을 수 없습니다.", 404);
    }

    await db
      .update(reports)
      .set({ status })
      .where(eq(reports.id, reportId));

    const [updatedReport] = await db
      .select()
      .from(reports)
      .where(eq(reports.id, reportId))
      .limit(1);

    return ok({
      id: updatedReport.id,
      reporterId: updatedReport.reporterId,
      targetType: updatedReport.targetType,
      targetId: updatedReport.targetId,
      reason: updatedReport.reason,
      status: updatedReport.status,
      createdAt: updatedReport.createdAt.toISOString(),
    });
  } catch (e) {
    console.error("[PATCH /api/admin/reports/[reportId]]", e);
    return err("신고 상태 수정 중 오류가 발생했습니다.", 500);
  }
}
