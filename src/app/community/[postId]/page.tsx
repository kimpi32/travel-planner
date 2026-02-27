"use client";

import { use } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { PostDetail } from "@/components/community/PostDetail";
import { usePost } from "@/hooks/use-posts";

function PostDetailContent({ postId }: { postId: string }) {
  const { data: post, isLoading, isError } = usePost(postId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <AlertCircle className="h-10 w-10 opacity-30" />
        <p className="text-sm">게시글을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return <PostDetail post={post} />;
}

export default function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = use(params);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <PostDetailContent postId={postId} />
    </div>
  );
}
