import { db } from "@/lib/db/drizzle";
import { posts, comments, users, userBadges, likes } from "@/lib/db/schema";
import { eq, count, sql, and } from "drizzle-orm";
import { BADGE_DEFINITIONS } from "./definitions";

interface UserStats {
  userId: string;
  postCount: number;
  commentCount: number;
  totalLikesReceived: number;
  countriesReviewed: number;
  postsWithImages: number;
  joinedAt: Date;
  firstPostAt: Date | null;
}

async function getUserStats(userId: string): Promise<UserStats | null> {
  // 사용자 기본 정보
  const [user] = await db
    .select({ createdAt: users.createdAt })
    .from(users)
    .where(eq(users.id, userId));

  if (!user) return null;

  // 게시글 수
  const [postCountRow] = await db
    .select({ count: count() })
    .from(posts)
    .where(eq(posts.userId, userId));

  // 댓글 수
  const [commentCountRow] = await db
    .select({ count: count() })
    .from(comments)
    .where(eq(comments.userId, userId));

  // 받은 좋아요 수 (자신의 게시글에 달린 좋아요 합산)
  const userPosts = await db
    .select({ likeCount: posts.likeCount })
    .from(posts)
    .where(eq(posts.userId, userId));

  const totalLikesReceived = userPosts.reduce(
    (sum, p) => sum + p.likeCount,
    0
  );

  // 5개국 여행 후기: type="review" 게시글의 destinationId 고유 국가 코드 수
  // destinationId 형식: "country-city" → 앞 부분이 국가
  const reviewPosts = await db
    .select({ destinationId: posts.destinationId })
    .from(posts)
    .where(and(eq(posts.userId, userId), eq(posts.type, "review")));

  const uniqueCountries = new Set(
    reviewPosts
      .map((p) => {
        if (!p.destinationId) return null;
        const parts = p.destinationId.split("-");
        return parts[0];
      })
      .filter(Boolean)
  );

  // 사진 포함 게시글 수: body에 ![이나 imageUrls 필드가 없으므로 body에 마크다운 이미지 패턴 포함 여부로 판단
  const allPosts = await db
    .select({ body: posts.body })
    .from(posts)
    .where(eq(posts.userId, userId));

  const postsWithImages = allPosts.filter(
    (p) => /!\[.*?\]\(.*?\)/.test(p.body) || /<img/i.test(p.body)
  ).length;

  // 첫 게시글 날짜
  const firstPostRows = await db
    .select({ createdAt: posts.createdAt })
    .from(posts)
    .where(eq(posts.userId, userId))
    .orderBy(posts.createdAt)
    .limit(1);

  const firstPostAt = firstPostRows.length > 0 ? firstPostRows[0].createdAt : null;

  return {
    userId,
    postCount: postCountRow.count,
    commentCount: commentCountRow.count,
    totalLikesReceived,
    countriesReviewed: uniqueCountries.size,
    postsWithImages,
    joinedAt: user.createdAt,
    firstPostAt,
  };
}

function checkCondition(badgeId: string, stats: UserStats): boolean {
  switch (badgeId) {
    case "first-post":
      return stats.postCount >= 1;

    case "active-writer":
      return stats.postCount >= 10;

    case "popular":
      return stats.totalLikesReceived >= 50;

    case "globetrotter":
      return stats.countriesReviewed >= 5;

    case "helpful":
      return stats.commentCount >= 20;

    case "early-bird": {
      if (!stats.firstPostAt) return false;
      const diffMs =
        stats.firstPostAt.getTime() - stats.joinedAt.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      return diffDays <= 7;
    }

    case "photographer":
      return stats.postsWithImages >= 5;

    case "travel-guru":
      return stats.postCount >= 50 && stats.totalLikesReceived >= 200;

    default:
      return false;
  }
}

/**
 * 사용자의 통계를 확인하고 조건을 충족한 배지를 부여합니다.
 * 게시글 작성, 좋아요 수신 등의 이벤트 이후 호출합니다.
 *
 * @returns 새로 획득한 배지 ID 목록
 */
export async function checkAndAwardBadges(userId: string): Promise<string[]> {
  const stats = await getUserStats(userId);
  if (!stats) return [];

  // 이미 획득한 배지 목록
  const existingBadges = await db
    .select({ badgeId: userBadges.badgeId })
    .from(userBadges)
    .where(eq(userBadges.userId, userId));

  const existingSet = new Set(existingBadges.map((b) => b.badgeId));

  // 조건 충족 + 미보유 배지 필터링
  const newBadgeIds = BADGE_DEFINITIONS.filter(
    (def) => !existingSet.has(def.id) && checkCondition(def.id, stats)
  ).map((def) => def.id);

  if (newBadgeIds.length === 0) return [];

  // 새 배지 일괄 삽입 (충돌 시 무시)
  await db
    .insert(userBadges)
    .values(
      newBadgeIds.map((badgeId) => ({
        userId,
        badgeId,
      }))
    )
    .onConflictDoNothing();

  return newBadgeIds;
}
