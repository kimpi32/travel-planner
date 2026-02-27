import { type NextRequest } from "next/server";
import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db/drizzle";
import { comments, posts, likes } from "@/lib/db/schema";
import { requireUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

// DELETE /api/community/posts/[postId]/comments/[commentId]
// 댓글 삭제 (인증 필요, 본인 댓글만), commentCount 트랜잭션으로 감소
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ postId: string; commentId: string }> }
) {
  const { postId, commentId } = await params;

  const uuidSchema = z.string().uuid();
  if (!uuidSchema.safeParse(postId).success || !uuidSchema.safeParse(commentId).success) {
    return err("올바른 ID를 입력해주세요.", 400);
  }

  let currentUser;
  try {
    currentUser = await requireUser();
  } catch {
    return err("로그인이 필요합니다.", 401);
  }

  // 댓글 조회
  const [comment] = await db
    .select()
    .from(comments)
    .where(and(eq(comments.id, commentId), eq(comments.postId, postId)));

  if (!comment) {
    return err("댓글을 찾을 수 없습니다.", 404);
  }

  // 본인 댓글인지 확인
  if (comment.userId !== currentUser.id) {
    return err("본인의 댓글만 삭제할 수 있습니다.", 403);
  }

  // 게시글 조회 (commentCount 감소용)
  const [post] = await db.select().from(posts).where(eq(posts.id, postId));
  if (!post) {
    return err("게시글을 찾을 수 없습니다.", 404);
  }

  // 트랜잭션: 관련 좋아요 삭제 + 댓글 삭제 + commentCount 감소
  await db.transaction(async (tx) => {
    // 댓글에 달린 좋아요 삭제
    await tx
      .delete(likes)
      .where(and(eq(likes.targetType, "comment"), eq(likes.targetId, commentId)));

    // 댓글 삭제
    await tx.delete(comments).where(eq(comments.id, commentId));

    // commentCount 감소 (0 미만으로 내려가지 않도록)
    const newCount = Math.max(0, post.commentCount - 1);
    await tx
      .update(posts)
      .set({ commentCount: newCount })
      .where(eq(posts.id, postId));
  });

  return ok({ deleted: true });
}
