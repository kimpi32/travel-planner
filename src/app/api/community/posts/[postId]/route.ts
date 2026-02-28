import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { posts, users, likes, bookmarks } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { parseBody } from "@/lib/api/validate";
import { updatePostSchema } from "@/lib/validations/posts";
import { eq, and } from "drizzle-orm";

// POST 타입 매핑
const CATEGORY_TO_TYPE: Record<string, string> = {
  review: "review",
  tip: "tip",
  question: "question",
  share: "general",
};

const TYPE_TO_CATEGORY: Record<string, string> = {
  review: "review",
  tip: "tip",
  question: "question",
  general: "general",
  itinerary: "itinerary",
};

function mapDbPostToResponse(
  row: {
    post: typeof posts.$inferSelect;
    user: typeof users.$inferSelect;
  },
  isLiked: boolean,
  isBookmarked: boolean,
) {
  return {
    id: row.post.id,
    type: TYPE_TO_CATEGORY[row.post.type] ?? row.post.type,
    title: row.post.title,
    body: row.post.body,
    destination: row.post.destinationId ?? undefined,
    rating: row.post.rating ?? undefined,
    authorId: row.post.userId,
    author: {
      id: row.user.id,
      displayName: row.user.name,
      avatarUrl: row.user.profileImage ?? undefined,
    },
    likeCount: row.post.likeCount,
    commentCount: row.post.commentCount,
    isLiked,
    isBookmarked,
    createdAt: row.post.createdAt.toISOString(),
    updatedAt: row.post.updatedAt.toISOString(),
  };
}

type RouteContext = { params: Promise<{ postId: string }> };

// GET /api/community/posts/[postId]
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { postId } = await context.params;

    const rows = await db
      .select({ post: posts, user: users })
      .from(posts)
      .innerJoin(users, eq(posts.userId, users.id))
      .where(eq(posts.id, postId))
      .limit(1);

    if (rows.length === 0) {
      return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
    }

    const row = rows[0];
    const currentUser = await getCurrentUser();

    let isLiked = false;
    let isBookmarked = false;

    if (currentUser) {
      const [likeRow, bookmarkRow] = await Promise.all([
        db
          .select({ id: likes.id })
          .from(likes)
          .where(
            and(
              eq(likes.userId, currentUser.id),
              eq(likes.targetType, "post"),
              eq(likes.targetId, postId),
            ),
          )
          .limit(1),
        db
          .select({ id: bookmarks.id })
          .from(bookmarks)
          .where(
            and(
              eq(bookmarks.userId, currentUser.id),
              eq(bookmarks.targetType, "post"),
              eq(bookmarks.targetId, postId),
            ),
          )
          .limit(1),
      ]);

      isLiked = likeRow.length > 0;
      isBookmarked = bookmarkRow.length > 0;
    }

    const responsePost = mapDbPostToResponse(row, isLiked, isBookmarked);
    return NextResponse.json(responsePost);
  } catch (error) {
    console.error("[GET /api/community/posts/[postId]]", error);
    return NextResponse.json(
      { error: "게시글을 불러오는 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}

// PATCH /api/community/posts/[postId]
export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { postId } = await context.params;

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    // 게시글 존재 및 소유권 확인
    const existing = await db
      .select({ userId: posts.userId })
      .from(posts)
      .where(eq(posts.id, postId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
    }

    if (existing[0].userId !== currentUser.id) {
      return NextResponse.json({ error: "수정 권한이 없습니다." }, { status: 403 });
    }

    const parseResult = await parseBody(request, updatePostSchema);
    if (parseResult.error) {
      return NextResponse.json({ error: parseResult.error }, { status: 400 });
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = parseResult.data!;

    // 업데이트할 필드만 추출
    const updateValues: Partial<typeof posts.$inferInsert> = {
      updatedAt: new Date(),
    };

    if (data.title !== undefined) updateValues.title = data.title;
    if (data.content !== undefined) updateValues.body = data.content;
    if (data.destination !== undefined) updateValues.destinationId = data.destination;
    if (data.category !== undefined) {
      updateValues.type = (CATEGORY_TO_TYPE[data.category] ?? data.category) as typeof posts.type._.data;
    }

    await db
      .update(posts)
      .set(updateValues)
      .where(eq(posts.id, postId));

    // 업데이트된 게시글 + 작성자 정보 조회
    const [updatedRow] = await db
      .select({ post: posts, user: users })
      .from(posts)
      .innerJoin(users, eq(posts.userId, users.id))
      .where(eq(posts.id, postId))
      .limit(1);

    const responsePost = mapDbPostToResponse(
      updatedRow,
      false,
      false,
    );

    return NextResponse.json(responsePost);
  } catch (error) {
    console.error("[PATCH /api/community/posts/[postId]]", error);
    return NextResponse.json(
      { error: "게시글 수정 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}

// DELETE /api/community/posts/[postId]
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { postId } = await context.params;

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    // 게시글 존재 및 소유권 확인
    const existing = await db
      .select({ userId: posts.userId })
      .from(posts)
      .where(eq(posts.id, postId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
    }

    if (existing[0].userId !== currentUser.id) {
      return NextResponse.json({ error: "삭제 권한이 없습니다." }, { status: 403 });
    }

    // 삭제 (comments, likes는 DB cascade로 처리됨)
    await db.delete(posts).where(eq(posts.id, postId));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[DELETE /api/community/posts/[postId]]", error);
    return NextResponse.json(
      { error: "게시글 삭제 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
