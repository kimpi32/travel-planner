"use client";

import { MessageCircle, Loader2 } from "lucide-react";
import { CommentItem } from "./CommentItem";
import { CommentForm } from "./CommentForm";
import { useComments, useCreateComment, useDeleteComment } from "@/hooks/use-comments";
import { useAuth } from "@/hooks/use-auth";

interface CommentListProps {
  postId: string;
}

export function CommentList({ postId }: CommentListProps) {
  const { user } = useAuth();
  const { data: comments, isLoading } = useComments(postId);
  const createMutation = useCreateComment(postId);
  const deleteMutation = useDeleteComment(postId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <MessageCircle className="h-4 w-4 text-muted-foreground" />
        <span className="font-semibold text-sm">
          댓글 {comments?.length ?? 0}개
        </span>
      </div>

      <CommentForm
        onSubmit={(body) => createMutation.mutate(body)}
        isSubmitting={createMutation.isPending}
        isAuthenticated={!!user}
      />

      {isLoading ? (
        <div className="flex justify-center py-6">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : comments && comments.length > 0 ? (
        <div className="divide-y">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              postId={postId}
              currentUserId={user?.id}
              onDelete={(id) => deleteMutation.mutate(id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground text-center py-6">
          첫 번째 댓글을 작성해보세요!
        </p>
      )}
    </div>
  );
}
