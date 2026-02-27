"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PostCard } from "./PostCard";
import { usePostList } from "@/hooks/use-posts";
import type { PostType } from "@/types/community";

type SortOption = "latest" | "popular" | "comments";

interface PostListProps {
  type: PostType;
  userId?: string;
  destination?: string;
}

export function PostList({ type, userId, destination }: PostListProps) {
  const [sort, setSort] = useState<SortOption>("latest");
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    usePostList({ type, sort, userId, destination, limit: 12 });

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const posts = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
          <SelectTrigger className="w-32 h-8 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">최신순</SelectItem>
            <SelectItem value="popular">인기순</SelectItem>
            <SelectItem value="comments">댓글순</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card h-52 animate-pulse"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-2">
          <FileText className="h-10 w-10 opacity-30" />
          <p className="text-sm">게시글을 불러오지 못했습니다.</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
          <FileText className="h-12 w-12 opacity-20" />
          <p className="text-sm font-medium">아직 게시글이 없습니다.</p>
          <p className="text-xs">첫 번째로 여행 이야기를 남겨보세요!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div ref={loadMoreRef} className="flex justify-center py-4">
            {isFetchingNextPage && (
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            )}
          </div>
        </>
      )}
    </div>
  );
}
