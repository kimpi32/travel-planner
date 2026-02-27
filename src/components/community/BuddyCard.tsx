"use client";

import Link from "next/link";
import {
  CalendarDays,
  Users,
  Heart,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Post, BuddyMeta, TravelStyle } from "@/types/community";

const STYLE_LABEL: Record<TravelStyle, string> = {
  budget: "알뜰",
  balanced: "균형",
  comfort: "편안",
  luxury: "럭셔리",
};

const STYLE_COLOR: Record<TravelStyle, string> = {
  budget: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  balanced: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  comfort: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  luxury: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

function parseBuddyBody(body: string): { meta: BuddyMeta | null; text: string } {
  try {
    const parsed = JSON.parse(body);
    if (parsed.__buddy__) {
      return { meta: parsed.__buddy__ as BuddyMeta, text: parsed.text ?? "" };
    }
  } catch {
    // not JSON
  }
  return { meta: null, text: body };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
}

function formatRelative(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;
  return date.toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
}

function getDday(startDateStr: string): { label: string; isUrgent: boolean } | null {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(startDateStr + "T00:00:00");
  const diff = Math.ceil((start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diff < 0) return null; // 이미 지난 여행
  if (diff === 0) return { label: "D-Day", isUrgent: true };
  if (diff <= 7) return { label: `D-${diff}`, isUrgent: true };
  return { label: `D-${diff}`, isUrgent: false };
}

interface BuddyCardProps {
  post: Post;
  className?: string;
}

export function BuddyCard({ post, className }: BuddyCardProps) {
  const { meta, text } = parseBuddyBody(post.body);
  const dday = meta ? getDday(meta.startDate) : null;

  return (
    <Link href={`/community/${post.id}`}>
      <Card
        className={cn(
          "overflow-hidden hover:shadow-md transition-shadow cursor-pointer py-0 gap-0",
          "border-l-4 border-l-violet-500",
          className
        )}
      >
        <CardContent className="p-4 flex flex-col gap-3">
          {/* 상단 배지 행 */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                <Sparkles className="h-3 w-3" />
                동행 구함
              </span>
              {meta && (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                    STYLE_COLOR[meta.travelStyle]
                  )}
                >
                  {STYLE_LABEL[meta.travelStyle]}
                </span>
              )}
              {meta?.genderPreference === "same" && (
                <Badge variant="outline" className="text-xs px-2 py-0.5 h-auto">
                  동성
                </Badge>
              )}
            </div>
            {dday && (
              <span
                className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full shrink-0",
                  dday.isUrgent
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {dday.label}
              </span>
            )}
          </div>

          {/* 제목 */}
          <h3 className="font-semibold text-sm line-clamp-2 leading-snug">
            {post.title}
          </h3>

          {/* 날짜 및 인원 정보 */}
          {meta && (
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3 w-3 shrink-0" />
                {formatDate(meta.startDate)} ~ {formatDate(meta.endDate)}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3 shrink-0" />
                {meta.headcount}명 모집
              </span>
            </div>
          )}

          {/* 여행지 */}
          {post.destination && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 shrink-0" />
              <span>{post.destination}</span>
            </div>
          )}

          {/* 본문 미리보기 */}
          <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
            {text}
          </p>

          {/* 하단 작성자 + 통계 */}
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-xs text-muted-foreground">
              {post.author.displayName}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Heart
                  className={cn(
                    "h-3 w-3",
                    post.isLiked && "fill-red-500 text-red-500"
                  )}
                />
                {post.likeCount}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                {post.commentCount}
              </span>
              <span>{formatRelative(post.createdAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
