import { NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { bookmarks, posts, users } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { eq, and } from "drizzle-orm";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const rows = await db
      .select({
        id: bookmarks.id,
        userId: bookmarks.userId,
        targetId: bookmarks.targetId,
        createdAt: bookmarks.createdAt,
        postId: posts.id,
        postType: posts.type,
        postTitle: posts.title,
        postBody: posts.body,
        postRating: posts.rating,
        postDestinationId: posts.destinationId,
        postLikeCount: posts.likeCount,
        postCommentCount: posts.commentCount,
        postCreatedAt: posts.createdAt,
        postUpdatedAt: posts.updatedAt,
        authorId: users.id,
        authorName: users.name,
        authorAvatar: users.profileImage,
      })
      .from(bookmarks)
      .innerJoin(posts, eq(posts.id, bookmarks.targetId))
      .innerJoin(users, eq(users.id, posts.userId))
      .where(
        and(
          eq(bookmarks.userId, user.id),
          eq(bookmarks.targetType, "post")
        )
      )
      .orderBy(bookmarks.createdAt);

    const result = rows.map((row) => ({
      id: row.id,
      userId: row.userId,
      postId: row.postId,
      createdAt: row.createdAt.toISOString(),
      post: {
        id: row.postId,
        type: row.postType,
        title: row.postTitle,
        body: row.postBody,
        rating: row.postRating ?? undefined,
        destination: row.postDestinationId ?? undefined,
        authorId: row.authorId,
        author: {
          id: row.authorId,
          displayName: row.authorName,
          avatarUrl: row.authorAvatar ?? undefined,
        },
        likeCount: row.postLikeCount,
        commentCount: row.postCommentCount,
        isBookmarked: true,
        createdAt: row.postCreatedAt.toISOString(),
        updatedAt: row.postUpdatedAt.toISOString(),
      },
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("[bookmarks] GET Error:", error);
    return NextResponse.json({ error: "북마크를 불러오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
