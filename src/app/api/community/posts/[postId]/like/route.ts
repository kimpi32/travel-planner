import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { likes, posts } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { eq, and, sql } from "drizzle-orm";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { postId } = await params;

  try {
    const result = await db.transaction(async (tx) => {
      const [existing] = await tx
        .select()
        .from(likes)
        .where(
          and(
            eq(likes.userId, user.id),
            eq(likes.targetType, "post"),
            eq(likes.targetId, postId)
          )
        );

      if (existing) {
        // 이미 좋아요 → 취소
        await tx.delete(likes).where(eq(likes.id, existing.id));

        const [updated] = await tx
          .update(posts)
          .set({ likeCount: sql`GREATEST(${posts.likeCount} - 1, 0)` })
          .where(eq(posts.id, postId))
          .returning({ likeCount: posts.likeCount });

        return { liked: false, likeCount: updated.likeCount };
      } else {
        // 좋아요 추가
        await tx.insert(likes).values({
          userId: user.id,
          targetType: "post",
          targetId: postId,
        });

        const [updated] = await tx
          .update(posts)
          .set({ likeCount: sql`${posts.likeCount} + 1` })
          .where(eq(posts.id, postId))
          .returning({ likeCount: posts.likeCount });

        return { liked: true, likeCount: updated.likeCount };
      }
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[posts/like] Error:", error);
    return NextResponse.json({ error: "좋아요 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
