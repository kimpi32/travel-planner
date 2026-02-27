"use client";

import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface LikeButtonProps {
  isLiked: boolean;
  count: number;
  onToggle: () => void;
  disabled?: boolean;
  size?: "sm" | "md";
}

export function LikeButton({
  isLiked,
  count,
  onToggle,
  disabled,
  size = "md",
}: LikeButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      disabled={disabled}
      className={cn(
        "flex items-center gap-1.5 transition-colors",
        isLiked
          ? "text-red-500 hover:text-red-600"
          : "text-muted-foreground hover:text-red-500",
        size === "sm" && "h-7 px-2 text-xs"
      )}
    >
      <motion.div
        animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Heart
          className={cn(
            size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4",
            isLiked && "fill-red-500"
          )}
        />
      </motion.div>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={count}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="tabular-nums"
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
