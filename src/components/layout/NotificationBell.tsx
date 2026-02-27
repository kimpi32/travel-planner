"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Heart, MessageCircle, UserPlus, AtSign, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  useNotifications,
  useMarkRead,
  type Notification,
  type NotificationType,
} from "@/hooks/use-notifications";

function formatRelativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}일 전`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}주 전`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}개월 전`;
  return `${Math.floor(months / 12)}년 전`;
}

function NotificationIcon({ type }: { type: NotificationType }) {
  const icons: Record<NotificationType, React.ReactNode> = {
    like: <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />,
    comment: <MessageCircle className="h-3.5 w-3.5 text-blue-500" />,
    follow: <UserPlus className="h-3.5 w-3.5 text-green-500" />,
    mention: <AtSign className="h-3.5 w-3.5 text-purple-500" />,
  };
  return <>{icons[type] ?? null}</>;
}

function notificationText(n: Notification): string {
  const actor = n.actor.displayName;
  switch (n.type) {
    case "like":
      return n.postTitle
        ? `${actor}님이 "${n.postTitle}" 글을 좋아합니다.`
        : `${actor}님이 댓글을 좋아합니다.`;
    case "comment":
      return n.postTitle
        ? `${actor}님이 "${n.postTitle}"에 댓글을 남겼습니다.`
        : `${actor}님이 댓글을 남겼습니다.`;
    case "follow":
      return `${actor}님이 팔로우하기 시작했습니다.`;
    case "mention":
      return `${actor}님이 글에서 언급했습니다.`;
    default:
      return `${actor}님의 새 알림`;
  }
}

function NotificationItem({
  notification,
  onRead,
}: {
  notification: Notification;
  onRead: (id: string) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => !notification.read && onRead(notification.id)}
      className={cn(
        "flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors hover:bg-accent",
        !notification.read && "bg-primary/5"
      )}
    >
      {/* 아바타 + 타입 아이콘 */}
      <div className="relative shrink-0">
        <Avatar className="h-9 w-9">
          <AvatarImage src={notification.actor.avatarUrl ?? undefined} />
          <AvatarFallback className="text-xs">
            {notification.actor.displayName.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-1 ring-border shadow-sm">
          <NotificationIcon type={notification.type} />
        </span>
      </div>

      {/* 텍스트 */}
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-snug text-foreground">
          {notificationText(notification)}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {formatRelativeTime(notification.createdAt)}
        </p>
      </div>

      {/* 읽음 표시 */}
      {!notification.read && (
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
      )}
    </motion.div>
  );
}

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useNotifications(1);
  const markRead = useMarkRead();

  const notifications = data?.items ?? [];
  const unreadCount = data?.unreadCount ?? 0;

  // 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function handleRead(id: string) {
    markRead.mutate({ id });
  }

  function handleMarkAll() {
    markRead.mutate({ all: true });
  }

  return (
    <div ref={containerRef} className="relative">
      {/* 벨 버튼 */}
      <Button
        variant="ghost"
        size="icon"
        className="relative h-9 w-9"
        aria-label="알림"
        onClick={() => setOpen((v) => !v)}
      >
        <Bell className="h-5 w-5" />
        <AnimatePresence>
          {unreadCount > 0 && (
            <motion.span
              key="badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      {/* 드롭다운 */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-80 rounded-xl border bg-popover shadow-lg overflow-hidden z-50"
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h3 className="text-sm font-semibold">알림</h3>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 gap-1 px-2 text-xs text-muted-foreground hover:text-foreground"
                  onClick={handleMarkAll}
                  disabled={markRead.isPending}
                >
                  <CheckCheck className="h-3.5 w-3.5" />
                  모두 읽음
                </Button>
              )}
            </div>

            {/* 알림 목록 */}
            <div className="max-h-[400px] overflow-y-auto">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <span className="text-sm text-muted-foreground">불러오는 중...</span>
                </div>
              ) : notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-2 py-10">
                  <Bell className="h-8 w-8 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">알림이 없습니다.</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {notifications.map((n) => (
                    <NotificationItem
                      key={n.id}
                      notification={n}
                      onRead={handleRead}
                    />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* 푸터 */}
            {notifications.length > 0 && (
              <div className="border-t px-4 py-2 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-full text-xs text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  닫기
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
