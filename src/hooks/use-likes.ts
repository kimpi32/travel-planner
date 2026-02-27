"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Post, Comment } from "@/types/community";

async function togglePostLike(postId: string): Promise<{ liked: boolean; likeCount: number }> {
  const res = await fetch(`/api/community/posts/${postId}/like`, { method: "POST" });
  if (!res.ok) throw new Error("좋아요 처리에 실패했습니다.");
  return res.json();
}

async function toggleCommentLike(
  postId: string,
  commentId: string
): Promise<{ liked: boolean; likeCount: number }> {
  const res = await fetch(
    `/api/community/posts/${postId}/comments/${commentId}/like`,
    { method: "POST" }
  );
  if (!res.ok) throw new Error("좋아요 처리에 실패했습니다.");
  return res.json();
}

export function usePostLike(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => togglePostLike(postId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["post", postId] });
      const previous = queryClient.getQueryData<Post>(["post", postId]);

      if (previous) {
        queryClient.setQueryData<Post>(["post", postId], {
          ...previous,
          isLiked: !previous.isLiked,
          likeCount: previous.isLiked
            ? previous.likeCount - 1
            : previous.likeCount + 1,
        });
      }

      queryClient.setQueriesData<{ pages: { items: Post[] }[] }>(
        { queryKey: ["posts"] },
        (old) => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              items: page.items.map((p) =>
                p.id === postId
                  ? {
                      ...p,
                      isLiked: !p.isLiked,
                      likeCount: p.isLiked ? p.likeCount - 1 : p.likeCount + 1,
                    }
                  : p
              ),
            })),
          };
        }
      );

      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["post", postId], context.previous);
      }
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
}

export function useCommentLike(postId: string, commentId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleCommentLike(postId, commentId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["comments", postId] });
      const previous = queryClient.getQueryData<Comment[]>(["comments", postId]);

      if (previous) {
        queryClient.setQueryData<Comment[]>(
          ["comments", postId],
          previous.map((c) =>
            c.id === commentId
              ? {
                  ...c,
                  isLiked: !c.isLiked,
                  likeCount: c.isLiked ? c.likeCount - 1 : c.likeCount + 1,
                }
              : c
          )
        );
      }

      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["comments", postId], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
  });
}
