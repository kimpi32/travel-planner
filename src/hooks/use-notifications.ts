"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export type NotificationType = "like" | "comment" | "follow" | "mention";

export interface NotificationActor {
  id: string;
  displayName: string;
  avatarUrl?: string | null;
}

export interface Notification {
  id: string;
  type: NotificationType;
  read: boolean;
  createdAt: string;
  postId?: string | null;
  commentId?: string | null;
  postTitle?: string | null;
  actor: NotificationActor;
}

export interface NotificationsResponse {
  items: Notification[];
  page: number;
  pageSize: number;
  unreadCount: number;
}

async function fetchNotifications(page = 1): Promise<NotificationsResponse> {
  const res = await fetch(`/api/notifications?page=${page}`);
  if (!res.ok) throw new Error("알림을 불러오지 못했습니다.");
  const json = await res.json();
  return json.data;
}

async function markRead(payload: { id?: string; all?: boolean }): Promise<void> {
  const res = await fetch("/api/notifications", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("알림 처리에 실패했습니다.");
}

export function useNotifications(page = 1) {
  return useQuery({
    queryKey: ["notifications", page],
    queryFn: () => fetchNotifications(page),
    refetchInterval: 30_000, // 30초마다 폴링
    refetchOnWindowFocus: true,
  });
}

export function useUnreadCount() {
  const { data } = useNotifications(1);
  return data?.unreadCount ?? 0;
}

export function useMarkRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}
