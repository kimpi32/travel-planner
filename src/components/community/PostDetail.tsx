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
import type { Post } from "@/types/community";

const TYPE_LABEL: Record<Post["type"], string> = {
  review: "후기",
  tip: "팁",
  qna: "Q&A",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
              {post.body}
            </p>
          </div>

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
