"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Bookmark } from "@/types/community";

async function fetchBookmarks(): Promise<Bookmark[]> {
  const res = await fetch("/api/community/bookmarks");
  if (!res.ok) throw new Error("북마크를 불러오지 못했습니다.");
  return res.json();
}

async function toggleBookmark(postId: string): Promise<{ bookmarked: boolean }> {
  const res = await fetch(`/api/community/bookmarks/${postId}`, { method: "POST" });
  if (!res.ok) throw new Error("북마크 처리에 실패했습니다.");
  return res.json();
}

export function useBookmarks() {
  return useQuery({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
  });
}

export function useToggleBookmark(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleBookmark(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
