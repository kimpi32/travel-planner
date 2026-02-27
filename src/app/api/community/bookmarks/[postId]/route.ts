import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { bookmarks } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { eq, and } from "drizzle-orm";

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
    const [existing] = await db
      .select()
      .from(bookmarks)
      .where(
        and(
          eq(bookmarks.userId, user.id),
          eq(bookmarks.targetType, "post"),
          eq(bookmarks.targetId, postId)
        )
      );

    if (existing) {
      // 이미 북마크 → 제거
      await db.delete(bookmarks).where(eq(bookmarks.id, existing.id));
      return NextResponse.json({ bookmarked: false });
    } else {
      // 북마크 추가
      await db.insert(bookmarks).values({
        userId: user.id,
        targetType: "post",
        targetId: postId,
      });
      return NextResponse.json({ bookmarked: true });
    }
  } catch (error) {
    console.error("[bookmarks/[postId]] POST Error:", error);
    return NextResponse.json({ error: "북마크 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
