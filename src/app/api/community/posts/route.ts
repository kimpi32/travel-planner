import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { posts, users, likes, bookmarks } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { parseBody } from "@/lib/api/validate";
import { createPostSchema } from "@/lib/validations/posts";
import { eq, desc, lt, and, sql } from "drizzle-orm";

// POST 타입 매핑: 프론트엔드 category → DB type
const CATEGORY_TO_TYPE: Record<string, string> = {
  review: "review",
  tip: "tip",
  question: "question",
  share: "general",
};

// DB type → 프론트엔드 type 매핑
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

// GET /api/community/posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const sort = searchParams.get("sort") ?? "latest";
    const destination = searchParams.get("destination");
    const userId = searchParams.get("userId");
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit") ?? "12"), 50);

    const currentUser = await getCurrentUser();

    // 필터 조건 구성
    const conditions = [];

    if (type && type !== "all") {
      // 프론트엔드 type → DB type 매핑
      const dbType = CATEGORY_TO_TYPE[type] ?? type;
      conditions.push(eq(posts.type, dbType as typeof posts.type._.data));
    }

    if (destination) {
      conditions.push(eq(posts.destinationId, destination));
    }

    if (userId) {
      conditions.push(eq(posts.userId, userId));
    }

    // 커서 기반 페이지네이션: cursor는 ISO 날짜 문자열 (createdAt 기준)
    if (cursor) {
      const cursorDate = new Date(cursor);
      if (!isNaN(cursorDate.getTime())) {
        conditions.push(lt(posts.createdAt, cursorDate));
      }
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    // 정렬 기준
    let orderBy;
    if (sort === "popular") {
      orderBy = [desc(posts.likeCount), desc(posts.createdAt)];
    } else if (sort === "comments") {
      orderBy = [desc(posts.commentCount), desc(posts.createdAt)];
    } else {
      // latest (default)
      orderBy = [desc(posts.createdAt)];
    }

    // 게시글 + 작성자 JOIN 쿼리
    const rows = await db
      .select({ post: posts, user: users })
      .from(posts)
      .innerJoin(users, eq(posts.userId, users.id))
      .where(whereClause)
      .orderBy(...orderBy)
      .limit(limit + 1); // 다음 페이지 존재 여부 확인을 위해 1개 더 조회

    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;

    // 현재 사용자의 좋아요/북마크 상태 조회
    let likedPostIds = new Set<string>();
    let bookmarkedPostIds = new Set<string>();

    if (currentUser && items.length > 0) {
      const postIds = items.map((r) => r.post.id);

      const [likeRows, bookmarkRows] = await Promise.all([
        db
          .select({ targetId: likes.targetId })
          .from(likes)
          .where(
            and(
              eq(likes.userId, currentUser.id),
              eq(likes.targetType, "post"),
              sql`${likes.targetId} IN (${sql.join(postIds.map((id) => sql`${id}`), sql`, `)})`,
            ),
          ),
        db
          .select({ targetId: bookmarks.targetId })
          .from(bookmarks)
          .where(
            and(
              eq(bookmarks.userId, currentUser.id),
              eq(bookmarks.targetType, "post"),
              sql`${bookmarks.targetId} IN (${sql.join(postIds.map((id) => sql`${id}`), sql`, `)})`,
            ),
          ),
      ]);

      likedPostIds = new Set(likeRows.map((r) => r.targetId));
      bookmarkedPostIds = new Set(bookmarkRows.map((r) => r.targetId));
    }

    const mappedItems = items.map((row) =>
      mapDbPostToResponse(
        row,
        likedPostIds.has(row.post.id),
        bookmarkedPostIds.has(row.post.id),
      ),
    );

    // nextCursor: 마지막 아이템의 createdAt ISO 문자열
    const nextCursor =
      hasMore && items.length > 0
        ? items[items.length - 1].post.createdAt.toISOString()
        : null;

    return NextResponse.json({
      items: mappedItems,
      nextCursor,
      hasMore,
    });
  } catch (error) {
    console.error("[GET /api/community/posts]", error);
    return NextResponse.json(
      { error: "게시글을 불러오는 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}

// POST /api/community/posts
export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    const parseResult = await parseBody(request, createPostSchema);
    if (parseResult.error) {
      return NextResponse.json({ error: parseResult.error }, { status: 400 });
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = parseResult.data!;
    const dbType = (CATEGORY_TO_TYPE[data.category] ?? data.category) as typeof posts.type._.data;

    const insertResult = await db
      .insert(posts)
      .values({
        userId: currentUser.id,
        type: dbType,
        title: data.title,
        body: data.content,
        destinationId: data.destination ?? null,
        rating: null,
      })
      .$returningId();

    const [newPost] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, insertResult[0].id));

    const responsePost = mapDbPostToResponse(
      { post: newPost, user: currentUser },
      false,
      false,
    );

    return NextResponse.json(responsePost, { status: 201 });
  } catch (error) {
    console.error("[POST /api/community/posts]", error);
    return NextResponse.json(
      { error: "게시글 작성 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
