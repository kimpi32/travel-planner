"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Comment } from "@/types/community";

async function fetchComments(postId: string): Promise<Comment[]> {
  const res = await fetch(`/api/community/posts/${postId}/comments`);
  if (!res.ok) throw new Error("댓글을 불러오지 못했습니다.");
  return res.json();
}

async function createComment(postId: string, body: string): Promise<Comment> {
  const res = await fetch(`/api/community/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
  if (!res.ok) throw new Error("댓글 작성에 실패했습니다.");
  return res.json();
}

async function deleteComment(postId: string, commentId: string): Promise<void> {
  const res = await fetch(`/api/community/posts/${postId}/comments/${commentId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("댓글 삭제에 실패했습니다.");
}

export function useComments(postId: string) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
    enabled: !!postId,
  });
}

export function useCreateComment(postId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: string) => createComment(postId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
}

export function useDeleteComment(postId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId: string) => deleteComment(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
}
