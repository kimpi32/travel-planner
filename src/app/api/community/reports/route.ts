import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { reports } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

const reportSchema = z.object({
  targetType: z.enum(["post", "comment"]),
  targetId: z.string().min(1, "신고 대상 ID가 필요합니다."),
  reason: z
    .string()
    .min(10, "신고 사유는 최소 10자 이상 입력해 주세요.")
    .max(1000, "신고 사유는 1000자 이하로 입력해 주세요."),
});

// POST /api/community/reports
export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return err("로그인이 필요합니다.", 401);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return err("요청 본문을 파싱할 수 없습니다.", 400);
    }

    const parsed = reportSchema.safeParse(body);
    if (!parsed.success) {
      const issues = parsed.error.issues;
      const firstError = issues[0]?.message ?? "입력값을 확인해 주세요.";
      return err(firstError, 400);
    }

    const { targetType, targetId, reason } = parsed.data;

    const [newReport] = await db
      .insert(reports)
      .values({
        reporterId: currentUser.id,
        targetType,
        targetId,
        reason,
        status: "pending",
      })
      .returning();

    return ok(
      {
        id: newReport.id,
        targetType: newReport.targetType,
        targetId: newReport.targetId,
        status: newReport.status,
        createdAt: newReport.createdAt.toISOString(),
        message: "신고가 접수되었습니다. 검토 후 조치하겠습니다.",
      },
      201
    );
  } catch (e) {
    console.error("[POST /api/community/reports]", e);
    return err("신고 접수 중 오류가 발생했습니다.", 500);
  }
}
