"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface UserBadgeData {
  id: string;
  name: string;
  description: string;
  emoji: string;
  conditionLabel: string;
  earned: boolean;
  earnedAt: string | null;
}

interface BadgeGridProps {
  badges: UserBadgeData[];
  /** 새로 획득한 배지 ID 목록 (팝 애니메이션 적용) */
  newlyEarned?: string[];
  className?: string;
}

function BadgeItem({
  badge,
  isNew,
}: {
  badge: UserBadgeData;
  isNew: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const tooltipText = badge.earned && badge.earnedAt
    ? `${badge.name}\n${badge.description}\n${new Date(badge.earnedAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })} 획득`
    : `${badge.name}\n${badge.description}\n조건: ${badge.conditionLabel}`;

  return (
    <div className="relative">
      <motion.div
        key={badge.id}
        initial={isNew ? { scale: 0, opacity: 0 } : false}
        animate={isNew ? { scale: 1, opacity: 1 } : undefined}
        transition={
          isNew
            ? { type: "spring", stiffness: 400, damping: 15, delay: 0.05 }
            : undefined
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex flex-col items-center gap-1 p-2 rounded-xl border cursor-default select-none transition-colors",
          badge.earned
            ? "bg-card border-border shadow-sm hover:border-primary/40"
            : "bg-muted/40 border-dashed border-muted-foreground/20 opacity-50"
        )}
      >
        {/* 이모지 */}
        <span
          className={cn(
            "text-2xl leading-none",
            !badge.earned && "grayscale"
          )}
        >
          {badge.emoji}
        </span>

        {/* 배지명 */}
        <span
          className={cn(
            "text-[10px] font-medium text-center leading-tight w-16 truncate",
            badge.earned ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {badge.name}
        </span>

        {/* 새로 획득 표시 */}
        {isNew && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[9px] font-bold px-1 py-0.5 rounded-full leading-none"
          >
            NEW
          </motion.span>
        )}
      </motion.div>

      {/* 툴팁 */}
      {hovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none">
          <div className="bg-popover text-popover-foreground border rounded-lg shadow-md px-3 py-2 text-xs w-44 text-center space-y-0.5">
            <p className="font-semibold text-sm">{badge.name}</p>
            <p className="text-muted-foreground">{badge.description}</p>
            {badge.earned && badge.earnedAt ? (
              <p className="text-primary font-medium">
                {new Date(badge.earnedAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                획득
              </p>
            ) : (
              <p className="text-muted-foreground">조건: {badge.conditionLabel}</p>
            )}
          </div>
          {/* 말풍선 화살표 */}
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-popover border-b border-r rotate-45 -mt-1 border-border" />
          </div>
        </div>
      )}
    </div>
  );
}

export function BadgeGrid({ badges, newlyEarned = [], className }: BadgeGridProps) {
  const earnedBadges = badges.filter((b) => b.earned);
  const unearnedBadges = badges.filter((b) => !b.earned);

  return (
    <div className={cn("space-y-3", className)}>
      {earnedBadges.length > 0 && (
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            획득한 배지 ({earnedBadges.length})
          </p>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {earnedBadges.map((badge) => (
                <BadgeItem
                  key={badge.id}
                  badge={badge}
                  isNew={newlyEarned.includes(badge.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {unearnedBadges.length > 0 && (
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            도전 가능한 배지 ({unearnedBadges.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {unearnedBadges.map((badge) => (
              <BadgeItem key={badge.id} badge={badge} isNew={false} />
            ))}
          </div>
        </div>
      )}

      {badges.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          아직 획득한 배지가 없습니다.
        </p>
      )}
    </div>
  );
}
