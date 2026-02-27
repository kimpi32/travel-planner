"use client";

import { useState } from "react";
import Link from "next/link";
import { PenSquare } from "lucide-react";
import { PostTypeFilter } from "@/components/community/PostTypeFilter";
import { PostList } from "@/components/community/PostList";
import type { PostType } from "@/types/community";

export default function CommunityPage() {
  const [postType, setPostType] = useState<PostType>("all");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">커뮤니티</h1>
          <p className="text-muted-foreground text-sm mt-1">
            여행자들의 생생한 이야기를 나눠보세요
          </p>
        </div>
      </div>

      <PostTypeFilter value={postType} onChange={setPostType} />

      <PostList type={postType} />

      <Link
        href="/community/write"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        <PenSquare className="h-4 w-4" />
        글쓰기
      </Link>
    </div>
  );
}
