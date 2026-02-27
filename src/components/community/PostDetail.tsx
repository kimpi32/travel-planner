"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Star,
  Bookmark,
  BookmarkCheck,
  Pencil,
  Trash2,
  ChevronLeft,
  CalendarDays,
  Users,
  Phone,
  Sparkles,
  Clock,
  Utensils,
  Car,
  Hotel,
  ShoppingBag,
  Landmark,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LikeButton } from "./LikeButton";
import { CommentList } from "./CommentList";
import { usePostLike } from "@/hooks/use-likes";
import { useToggleBookmark } from "@/hooks/use-bookmarks";
import { useDeletePost } from "@/hooks/use-posts";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import type { Post, BuddyMeta, ItineraryMeta, TravelStyle } from "@/types/community";

const TYPE_LABEL: Record<Post["type"], string> = {
  review: "후기",
  tip: "팁",
  itinerary: "여행 일정",
  question: "Q&A",
  buddy: "동행 구함",
  general: "일반",
};

// ── 날짜 포맷 ────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatShortDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
}

// ── Buddy 파싱 ───────────────────────────────────────────────────────
function parseBuddyBody(body: string): { meta: BuddyMeta | null; text: string } {
  try {
    const p = JSON.parse(body);
    if (p.__buddy__) return { meta: p.__buddy__ as BuddyMeta, text: p.text ?? "" };
  } catch { /* plain text */ }
  return { meta: null, text: body };
}

const BUDDY_STYLE_LABEL: Record<TravelStyle, string> = {
  budget: "알뜰",
  balanced: "균형",
  comfort: "편안",
  luxury: "럭셔리",
};

// ── Itinerary 파싱 ───────────────────────────────────────────────────
function parseItineraryBody(body: string): { meta: ItineraryMeta | null; summary: string } {
  try {
    const p = JSON.parse(body);
    if (p.__itinerary__) return { meta: p.__itinerary__ as ItineraryMeta, summary: p.summary ?? "" };
  } catch { /* plain text */ }
  return { meta: null, summary: body };
}

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  transport: <Car className="h-3.5 w-3.5" />,
  accommodation: <Hotel className="h-3.5 w-3.5" />,
  food: <Utensils className="h-3.5 w-3.5" />,
  attraction: <Landmark className="h-3.5 w-3.5" />,
  shopping: <ShoppingBag className="h-3.5 w-3.5" />,
  activity: <Sparkles className="h-3.5 w-3.5" />,
  other: <MoreHorizontal className="h-3.5 w-3.5" />,
};

const CATEGORY_COLOR: Record<string, string> = {
  transport: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400",
  accommodation: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
  food: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  attraction: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  shopping: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
  activity: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  other: "bg-muted text-muted-foreground",
};

// ── 동행 상세 섹션 ────────────────────────────────────────────────────
function BuddyDetail({ meta, text }: { meta: BuddyMeta; text: string }) {
  return (
    <div className="flex flex-col gap-4">
      {/* 모집 정보 카드 */}
      <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">동행 모집 정보</span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">여행 날짜</span>
            <span className="font-medium flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              {formatShortDate(meta.startDate)} ~ {formatShortDate(meta.endDate)}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">모집 인원</span>
            <span className="font-medium flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              {meta.headcount}명
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">여행 스타일</span>
            <span className="font-medium">{BUDDY_STYLE_LABEL[meta.travelStyle]}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">성별 선호</span>
            <span className="font-medium">
              {meta.genderPreference === "any" ? "무관" : "동성만"}
            </span>
          </div>
        </div>

        <div className="border-t pt-3 flex flex-col gap-1">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Phone className="h-3 w-3" />
            연락 방법
          </span>
          <span className="text-sm font-medium break-all">{meta.contact}</span>
        </div>
      </div>

      {/* 자기소개 */}
      {text && (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{text}</p>
        </div>
      )}
    </div>
  );
}

// ── 일정 상세 섹션 ────────────────────────────────────────────────────
function ItineraryDetail({ meta }: { meta: ItineraryMeta }) {
  const nights = meta.days.length - 1;

  return (
    <div className="flex flex-col gap-4">
      {/* 여행 요약 */}
      <div className="rounded-xl border bg-muted/30 p-4 grid grid-cols-3 gap-3 text-center text-sm">
        <div>
          <div className="text-xs text-muted-foreground mb-1">기간</div>
          <div className="font-semibold">{nights > 0 ? `${nights}박 ${nights + 1}일` : "당일치기"}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground mb-1">인원</div>
          <div className="font-semibold">{meta.travelers}명</div>
        </div>
        {meta.totalBudget != null && meta.totalBudget > 0 && (
          <div>
            <div className="text-xs text-muted-foreground mb-1">예산</div>
            <div className="font-semibold">{meta.totalBudget.toLocaleString()}원</div>
          </div>
        )}
      </div>

      {/* 일별 일정 */}
      <div className="flex flex-col gap-6">
        {meta.days.map((day) => (
          <div key={day.dayNumber} className="flex flex-col gap-3">
            {/* 날짜 헤더 */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                {day.dayNumber}
              </div>
              <div>
                <div className="text-sm font-semibold">
                  {day.title ?? `Day ${day.dayNumber}`}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatShortDate(day.date)}
                </div>
              </div>
            </div>

            {/* 활동 목록 */}
            {day.activities.length > 0 ? (
              <div className="ml-3.5 border-l-2 border-muted pl-5 flex flex-col gap-3">
                {day.activities.map((act, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    {/* 카테고리 아이콘 */}
                    <div
                      className={cn(
                        "h-7 w-7 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                        CATEGORY_COLOR[act.category] ?? CATEGORY_COLOR.other
                      )}
                    >
                      {CATEGORY_ICON[act.category] ?? CATEGORY_ICON.other}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                          <Clock className="h-3 w-3" />
                          {act.time}
                        </span>
                        {act.estimatedCost > 0 && (
                          <span className="text-xs text-muted-foreground">
                            ~{act.estimatedCost.toLocaleString()}원
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-medium">{act.title}</div>
                      {act.place && (
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3 shrink-0" />
                          {act.place}
                        </div>
                      )}
                      {act.notes && (
                        <div className="text-xs text-muted-foreground mt-0.5">{act.notes}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ml-9 text-xs text-muted-foreground">등록된 활동이 없습니다.</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  const router = useRouter();
  const { user } = useAuth();
  const likeMutation = usePostLike(post.id);
  const bookmarkMutation = useToggleBookmark(post.id);
  const deleteMutation = useDeletePost();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const isOwner = user?.id === post.authorId;

  async function handleDelete() {
    if (!confirm("게시글을 삭제하시겠습니까?")) return;
    await deleteMutation.mutateAsync(post.id);
    router.push("/community");
  }

  return (
    <article className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        size="sm"
        className="mb-4 -ml-1"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        목록으로
      </Button>

      <div className="rounded-xl border bg-card overflow-hidden">
        {post.imageUrls && post.imageUrls.length > 0 && (
          <div
            className={cn(
              "grid gap-1",
              post.imageUrls.length === 1 ? "grid-cols-1" : "grid-cols-2"
            )}
          >
            {post.imageUrls.slice(0, 4).map((url, i) => (
              <div
                key={i}
                className="relative cursor-pointer"
                style={{ paddingBottom: post.imageUrls!.length === 1 ? "56.25%" : "100%" }}
                onClick={() => setLightboxIdx(i)}
              >
                <Image src={url} alt={`이미지 ${i + 1}`} fill className="object-cover" />
                {i === 3 && post.imageUrls!.length > 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg">
                    +{post.imageUrls!.length - 4}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">{TYPE_LABEL[post.type]}</Badge>
                {post.type === "review" && post.rating !== undefined && (
                  <span className="flex items-center gap-1 text-sm text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < post.rating! ? "fill-amber-500" : "fill-muted stroke-muted-foreground"
                        )}
                      />
                    ))}
                    <span className="text-muted-foreground text-xs ml-0.5">
                      {post.rating.toFixed(1)}
                    </span>
                  </span>
                )}
              </div>
              <h1 className="text-xl font-bold leading-snug">{post.title}</h1>
            </div>

            {isOwner && (
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => router.push(`/community/${post.id}/edit`)}
                >
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={handleDelete}
                  disabled={deleteMutation.isPending}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium shrink-0">
                {post.author.displayName[0]?.toUpperCase()}
              </div>
              <span className="font-medium text-foreground">{post.author.displayName}</span>
              <span>{formatDate(post.createdAt)}</span>
            </div>
            {post.destination && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{post.destination}</span>
              </div>
            )}
          </div>

          {/* body 렌더링 - 타입별 분기 */}
          {post.type === "buddy" ? (
            (() => {
              const { meta, text } = parseBuddyBody(post.body);
              return meta ? (
                <BuddyDetail meta={meta} text={text} />
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{post.body}</p>
                </div>
              );
            })()
          ) : post.type === "itinerary" ? (
            (() => {
              const { meta } = parseItineraryBody(post.body);
              return meta ? (
                <ItineraryDetail meta={meta} />
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{post.body}</p>
                </div>
              );
            })()
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                {post.body}
              </p>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2 border-t">
            <LikeButton
              isLiked={post.isLiked ?? false}
              count={post.likeCount}
              onToggle={() => likeMutation.mutate()}
              disabled={!user}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => bookmarkMutation.mutate()}
              disabled={!user}
              className={cn(
                "flex items-center gap-1.5",
                post.isBookmarked
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {post.isBookmarked ? (
                <BookmarkCheck className="h-4 w-4" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
              북마크
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border bg-card p-6">
        <CommentList postId={post.id} />
      </div>

      {lightboxIdx !== null && post.imageUrls && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full mx-4">
            <Image
              src={post.imageUrls[lightboxIdx]}
              alt="확대 이미지"
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </article>
  );
}
