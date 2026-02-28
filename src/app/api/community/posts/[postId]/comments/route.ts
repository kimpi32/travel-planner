import { type NextRequest } from "next/server";
import { eq, and, asc } from "drizzle-orm";
import { db } from "@/lib/db/drizzle";
import { comments, posts, users, likes } from "@/lib/db/schema";
import { getCurrentUser, requireUser } from "@/lib/auth/get-user";
import { ok, err } from "@/lib/api/response";
import { z } from "zod";

// POST body 스키마 (use-comments.ts는 { body } 형태로 전송)
const createCommentBodySchema = z.object({
  body: z
    .string()
    .min(1, "댓글 내용을 입력해주세요.")
    .max(1000, "댓글은 1000자 이내로 입력해주세요."),
  parentCommentId: z.string().uuid().optional(),
});

// GET /api/community/posts/[postId]/comments
// 특정 게시글의 댓글 목록 반환 (작성자 정보, isLiked 포함)
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;

  if (!z.string().uuid().safeParse(postId).success) {
    return err("올바른 게시글 ID를 입력해주세요.", 400);
  }

  // 현재 로그인 사용자 (비로그인도 조회 가능)
  const currentUser = await getCurrentUser();

  // 댓글 + 작성자 join
  const rows = await db
    .select({
      id: comments.id,
      postId: comments.postId,
      body: comments.body,
      parentCommentId: comments.parentCommentId,
      likeCount: comments.likeCount,
      createdAt: comments.createdAt,
      authorId: users.id,
      authorName: users.name,
      authorAvatar: users.profileImage,
    })
    .from(comments)
    .innerJoin(users, eq(comments.userId, users.id))
    .where(eq(comments.postId, postId))
    .orderBy(asc(comments.createdAt));

  // 현재 사용자가 좋아요한 댓글 ID 목록 조회
  let likedCommentIds = new Set<string>();
  if (currentUser) {
    const userLikes = await db
      .select({ targetId: likes.targetId })
      .from(likes)
      .where(
        and(
          eq(likes.userId, currentUser.id),
          eq(likes.targetType, "comment")
        )
      );
    likedCommentIds = new Set(userLikes.map((l) => l.targetId));
  }

  const result = rows.map((row) => ({
    id: row.id,
    postId: row.postId,
    body: row.body,
    parentCommentId: row.parentCommentId ?? null,
    likeCount: row.likeCount,
    isLiked: likedCommentIds.has(row.id),
    createdAt: row.createdAt.toISOString(),
    authorId: row.authorId,
    author: {
      id: row.authorId,
      displayName: row.authorName,
      avatarUrl: row.authorAvatar ?? undefined,
    },
  }));

  return ok(result);
}

// POST /api/community/posts/[postId]/comments
// 댓글 작성 (인증 필요), commentCount 트랜잭션으로 증가
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;

  if (!z.string().uuid().safeParse(postId).success) {
    return err("올바른 게시글 ID를 입력해주세요.", 400);
  }

  let currentUser;
  try {
    currentUser = await requireUser();
  } catch {
    return err("로그인이 필요합니다.", 401);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return err("요청 형식이 올바르지 않습니다.", 400);
  }

  const parsed = createCommentBodySchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다.";
    return err(message, 400);
  }

  const { body: commentBody, parentCommentId } = parsed.data;

  // 게시글 존재 여부 확인
  const [post] = await db.select().from(posts).where(eq(posts.id, postId));
  if (!post) {
    return err("게시글을 찾을 수 없습니다.", 404);
  }

  // parentCommentId가 있는 경우 해당 댓글 존재 여부 확인
  if (parentCommentId) {
    const [parentComment] = await db
      .select()
      .from(comments)
      .where(and(eq(comments.id, parentCommentId), eq(comments.postId, postId)));
    if (!parentComment) {
      return err("부모 댓글을 찾을 수 없습니다.", 404);
    }
  }

  // 트랜잭션: 댓글 삽입 + commentCount 증가
  const newComment = await db.transaction(async (tx) => {
    const insertResult = await tx
      .insert(comments)
      .values({
        postId,
        userId: currentUser.id,
        body: commentBody,
        parentCommentId: parentCommentId ?? null,
      })
      .$returningId();

    await tx
      .update(posts)
      .set({ commentCount: post.commentCount + 1 })
      .where(eq(posts.id, postId));

    const [inserted] = await tx
      .select()
      .from(comments)
      .where(eq(comments.id, insertResult[0].id));

    return inserted;
  });

  // 작성자 정보 포함하여 응답
  const response = {
    id: newComment.id,
    postId: newComment.postId,
    body: newComment.body,
    parentCommentId: newComment.parentCommentId ?? null,
    likeCount: newComment.likeCount,
    isLiked: false,
    createdAt: newComment.createdAt.toISOString(),
    authorId: currentUser.id,
    author: {
      id: currentUser.id,
      displayName: currentUser.name,
      avatarUrl: currentUser.profileImage ?? undefined,
    },
  };

  return ok(response, 201);
}
