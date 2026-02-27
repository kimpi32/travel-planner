"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, UserCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFollow } from "@/hooks/use-follow";

interface FollowButtonProps {
  targetUserId: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function FollowButton({
  targetUserId,
  size = "md",
  className,
}: FollowButtonProps) {
  const { isFollowing, isLoading, toggle, isPending } = useFollow(targetUserId);

  const sizeClasses = {
    sm: "h-7 px-3 text-xs",
    md: "h-9 px-4 text-sm",
    lg: "h-10 px-6 text-base",
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      <Button
        variant={isFollowing ? "outline" : "default"}
        onClick={() => toggle()}
        disabled={isLoading || isPending}
        className={cn(
          "relative overflow-hidden transition-all duration-200",
          sizeClasses[size],
          isFollowing && "border-primary text-primary hover:bg-destructive/10 hover:text-destructive hover:border-destructive",
          className
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLoading || isPending ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5"
            >
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>처리 중</span>
            </motion.span>
          ) : isFollowing ? (
            <motion.span
              key="following"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5 group"
            >
              <UserCheck className="h-3.5 w-3.5" />
              <span className="group-hover:hidden">팔로잉</span>
              <span className="hidden group-hover:inline">언팔로우</span>
            </motion.span>
          ) : (
            <motion.span
              key="follow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5"
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>팔로우</span>
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
