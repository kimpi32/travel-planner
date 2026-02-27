"use client";

import Link from "next/link";
import { Loader2, Bookmark, BookmarkX, FileText, MessageCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookmarks, useToggleBookmark } from "@/hooks/use-bookmarks";
import type { Post } from "@/types/community";
import { cn } from "@/lib/utils";

const TYPE_ICON: Record<Post["type"], React.ComponentType<{ className?: string }>> = {
  review: Bookmark,
  tip: Lightbulb,
  itinerary: FileText,
  question: MessageCircle,
  buddy: MessageCircle,
  general: FileText,
};

const TYPE_LABEL: Record<Post["type"], string> = {
  review: "후기",
  tip: "팁",
  itinerary: "여행 일정",
  question: "Q&A",
  buddy: "동행 구함",
  general: "일반",
};

function BookmarkItem({ postId, post }: { postId: string; post: Post }) {
  const toggleMutation = useToggleBookmark(postId);
  const Icon = TYPE_ICON[post.type];

  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:shadow-sm transition-shadow">
      <div className="shrink-0 h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>

      <Link href={`/community/${post.id}`} className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xs text-muted-foreground">{TYPE_LABEL[post.type]}</span>
          {post.destination && (
            <span className="text-xs text-muted-foreground">· {post.destination}</span>
          )}
        </div>
        <p className="text-sm font-medium line-clamp-1">{post.title}</p>
      </Link>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
        onClick={() => toggleMutation.mutate()}
        disabled={toggleMutation.isPending}
      >
        <BookmarkX className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function BookmarkList() {
  const { data: bookmarks, isLoading, isError } = useBookmarks();

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-sm text-muted-foreground text-center py-10">
        북마크를 불러오지 못했습니다.
      </p>
    );
  }

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3 text-muted-foreground">
        <Bookmark className="h-10 w-10 opacity-20" />
        <p className="text-sm">저장한 게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark.id}
          postId={bookmark.postId}
          post={bookmark.post}
        />
      ))}
    </div>
  );
}
