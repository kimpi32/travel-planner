import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ok, err } from "@/lib/api/response";

type RouteContext = { params: Promise<{ postId: string }> };

// DELETE /api/admin/posts/[postId]
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { postId } = await context.params;

    const [existing] = await db
      .select({ id: posts.id })
      .from(posts)
      .where(eq(posts.id, postId))
      .limit(1);

    if (!existing) {
      return err("게시글을 찾을 수 없습니다.", 404);
    }

    await db.delete(posts).where(eq(posts.id, postId));

    return ok({ message: "게시글이 삭제되었습니다." });
  } catch (e) {
    console.error("[DELETE /api/admin/posts/[postId]]", e);
    return err("게시글 삭제 중 오류가 발생했습니다.", 500);
  }
}
