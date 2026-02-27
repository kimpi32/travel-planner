"use client";

import {
  useInfiniteQuery,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { Post, PostListParams, PaginatedResponse } from "@/types/community";

async function fetchPosts(params: PostListParams): Promise<PaginatedResponse<Post>> {
  const searchParams = new URLSearchParams();
  if (params.type && params.type !== "all") searchParams.set("type", params.type);
  if (params.sort) searchParams.set("sort", params.sort);
  if (params.destination) searchParams.set("destination", params.destination);
  if (params.userId) searchParams.set("userId", params.userId);
  if (params.cursor) searchParams.set("cursor", params.cursor);
  if (params.limit) searchParams.set("limit", String(params.limit));

  const res = await fetch(`/api/community/posts?${searchParams.toString()}`);
  if (!res.ok) throw new Error("게시글을 불러오지 못했습니다.");
  return res.json();
}

async function fetchPost(postId: string): Promise<Post> {
  const res = await fetch(`/api/community/posts/${postId}`);
  if (!res.ok) throw new Error("게시글을 불러오지 못했습니다.");
  return res.json();
}

export type CreatePostInput = Omit<Post, "id" | "author" | "likeCount" | "commentCount" | "isLiked" | "isBookmarked" | "createdAt" | "updatedAt">;

async function createPost(data: CreatePostInput): Promise<Post> {
  const res = await fetch("/api/community/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("게시글 작성에 실패했습니다.");
  return res.json();
}

async function updatePost(id: string, data: Partial<Post>): Promise<Post> {
  const res = await fetch(`/api/community/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("게시글 수정에 실패했습니다.");
  return res.json();
}

async function deletePost(id: string): Promise<void> {
  const res = await fetch(`/api/community/posts/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("게시글 삭제에 실패했습니다.");
}

export function usePostList(params: Omit<PostListParams, "cursor">) {
  return useInfiniteQuery({
    queryKey: ["posts", params],
    queryFn: ({ pageParam }) =>
      fetchPosts({ ...params, cursor: pageParam as string | undefined }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

export function usePost(postId: string) {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    enabled: !!postId,
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Post> }) =>
      updatePost(id, data),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
