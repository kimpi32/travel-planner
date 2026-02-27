"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LikeButton } from "./LikeButton";
import { useCommentLike } from "@/hooks/use-likes";
import type { Comment } from "@/types/community";

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

interface CommentItemProps {
  comment: Comment;
  postId: string;
  currentUserId?: string;
  onDelete: (commentId: string) => void;
}

export function CommentItem({
  comment,
  postId,
  currentUserId,
  onDelete,
}: CommentItemProps) {
  const likeMutation = useCommentLike(postId, comment.id);

  return (
    <div className="flex gap-3 py-3">
      <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium">
        {comment.author.displayName[0]?.toUpperCase()}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm font-medium">{comment.author.displayName}</span>
          <span className="text-xs text-muted-foreground">
            {formatDate(comment.createdAt)}
          </span>
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed">{comment.body}</p>

        <div className="flex items-center gap-1 mt-1">
          <LikeButton
            isLiked={comment.isLiked ?? false}
            count={comment.likeCount}
            onToggle={() => likeMutation.mutate()}
            size="sm"
          />
          {currentUserId === comment.authorId && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive"
              onClick={() => onDelete(comment.id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
