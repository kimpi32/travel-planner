"use client";

import { PostCard } from "@/components/community/PostCard";
import { usePostList } from "@/hooks/use-posts";
import { FileText, Loader2 } from "lucide-react";

interface UserPostsProps {
  userId: string;
}

export function UserPosts({ userId }: UserPostsProps) {
  const { data, isLoading, isError } = usePostList({ userId, limit: 20 });
  const posts = data?.pages.flatMap((p) => p.items) ?? [];

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
        게시글을 불러오지 못했습니다.
      </p>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3 text-muted-foreground">
        <FileText className="h-10 w-10 opacity-20" />
        <p className="text-sm">아직 작성한 게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
