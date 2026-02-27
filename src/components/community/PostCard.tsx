"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Post } from "@/types/community";

const TYPE_LABEL: Record<Post["type"], string> = {
  review: "후기",
  tip: "팁",
  qna: "Q&A",
};

const TYPE_COLOR: Record<Post["type"], string> = {
  review: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  tip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  qna: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

function formatDate(dateStr: string) {
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

interface PostCardProps {
  post: Post;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  return (
    <Link href={`/community/${post.id}`}>
      <Card
        className={cn(
          "overflow-hidden hover:shadow-md transition-shadow cursor-pointer py-0 gap-0",
          className
        )}
      >
        {post.thumbnailUrl && (
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardContent className="p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                TYPE_COLOR[post.type]
              )}
            >
              {TYPE_LABEL[post.type]}
            </span>
            {post.type === "review" && post.rating !== undefined && (
              <span className="flex items-center gap-0.5 text-xs text-amber-500">
                <Star className="h-3 w-3 fill-amber-500" />
                {post.rating.toFixed(1)}
              </span>
            )}
          </div>

          <h3 className="font-semibold text-sm line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
            {post.body}
          </p>

          {post.destination && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{post.destination}</span>
            </div>
          )}

          <div className="flex items-center justify-between mt-1 pt-2 border-t">
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
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
