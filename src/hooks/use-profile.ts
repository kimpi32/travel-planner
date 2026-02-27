"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserProfile } from "@/types/community";

async function fetchProfile(userId: string): Promise<UserProfile> {
  const res = await fetch(`/api/community/profiles/${userId}`);
  if (!res.ok) throw new Error("프로필을 불러오지 못했습니다.");
  return res.json();
}

async function updateProfile(
  userId: string,
  data: Partial<Pick<UserProfile, "displayName" | "bio" | "avatarUrl">>
): Promise<UserProfile> {
  const res = await fetch(`/api/community/profiles/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("프로필 수정에 실패했습니다.");
  return res.json();
}

export function useProfile(userId: string) {
  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => fetchProfile(userId),
    enabled: !!userId,
  });
}

export function useUpdateProfile(userId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<Pick<UserProfile, "displayName" | "bio" | "avatarUrl">>) =>
      updateProfile(userId, data),
    onSuccess: (updated) => {
      queryClient.setQueryData(["profile", userId], updated);
    },
  });
}
