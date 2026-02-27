"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface FollowStatus {
  following: boolean;
  followerCount?: number;
}

interface FollowUser {
  id: string;
  displayName: string;
  avatarUrl?: string | null;
  bio?: string | null;
}

interface FollowListItem {
  followId: string;
  followedAt: string;
  user: FollowUser;
}

async function checkFollowStatus(userId: string): Promise<{ following: boolean }> {
  const res = await fetch(`/api/community/follow/${userId}`);
  if (!res.ok) throw new Error("팔로우 상태 확인에 실패했습니다.");
  return res.json();
}

async function toggleFollow(userId: string): Promise<FollowStatus> {
  const res = await fetch(`/api/community/follow/${userId}`, { method: "POST" });
  if (!res.ok) throw new Error("팔로우 처리에 실패했습니다.");
  return res.json();
}

async function fetchFollowList(
  userId: string,
  type: "followers" | "following"
): Promise<FollowListItem[]> {
  const res = await fetch(
    `/api/community/follow?userId=${encodeURIComponent(userId)}&type=${type}`
  );
  if (!res.ok) throw new Error("목록을 불러오지 못했습니다.");
  const json = await res.json();
  return json.data ?? [];
}

export function useFollow(targetUserId: string) {
  const queryClient = useQueryClient();

  const statusQuery = useQuery({
    queryKey: ["follow-status", targetUserId],
    queryFn: () => checkFollowStatus(targetUserId),
    enabled: !!targetUserId,
  });

  const toggleMutation = useMutation({
    mutationFn: () => toggleFollow(targetUserId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["follow-status", targetUserId] });
      const previous = queryClient.getQueryData<{ following: boolean }>(["follow-status", targetUserId]);

      // Optimistic update
      if (previous !== undefined) {
        queryClient.setQueryData(["follow-status", targetUserId], {
          following: !previous.following,
        });
      }

      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous !== undefined) {
        queryClient.setQueryData(["follow-status", targetUserId], context.previous);
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["follow-status", targetUserId], { following: data.following });
      // 프로필 캐시 무효화 (followerCount 변경)
      queryClient.invalidateQueries({ queryKey: ["profile", targetUserId] });
      queryClient.invalidateQueries({ queryKey: ["followers", targetUserId] });
    },
  });

  return {
    isFollowing: statusQuery.data?.following ?? false,
    isLoading: statusQuery.isLoading,
    toggle: toggleMutation.mutate,
    isPending: toggleMutation.isPending,
    followerCount: toggleMutation.data?.followerCount,
  };
}

export function useFollowers(userId: string) {
  return useQuery({
    queryKey: ["followers", userId],
    queryFn: () => fetchFollowList(userId, "followers"),
    enabled: !!userId,
  });
}

export function useFollowing(userId: string) {
  return useQuery({
    queryKey: ["following", userId],
    queryFn: () => fetchFollowList(userId, "following"),
    enabled: !!userId,
  });
}
