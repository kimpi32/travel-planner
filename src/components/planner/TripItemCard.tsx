"use client";

import { GripVertical, MapPin, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TripActivity, ActivityCategory } from "@/types/planner";
import { cn } from "@/lib/utils";

const CATEGORY_CONFIG: Record<
  ActivityCategory,
  { emoji: string; label: string; color: string }
> = {
  [ActivityCategory.Transport]: {
    emoji: "✈️",
    label: "교통",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  [ActivityCategory.Accommodation]: {
    emoji: "🏨",
    label: "숙박",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  [ActivityCategory.Food]: {
    emoji: "🍽️",
    label: "식비",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  [ActivityCategory.Attraction]: {
    emoji: "🏛️",
    label: "관광",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  [ActivityCategory.Shopping]: {
    emoji: "🛍️",
    label: "쇼핑",
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  },
  [ActivityCategory.Activity]: {
    emoji: "🎯",
    label: "액티비티",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  [ActivityCategory.Other]: {
    emoji: "📌",
    label: "기타",
    color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
  },
};

function formatKRW(amount: number): string {
  if (amount >= 10000) return `${Math.round(amount / 10000)}만원`;
  if (amount > 0) return `${amount.toLocaleString()}원`;
  return "무료";
}

interface TripItemCardProps {
  activity: TripActivity;
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>;
  isDragging?: boolean;
  onRemove?: () => void;
}

export function TripItemCard({
  activity,
  dragHandleProps,
  isDragging,
  onRemove,
}: TripItemCardProps) {
  const catConfig = CATEGORY_CONFIG[activity.category];

  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-lg border bg-card p-3 shadow-sm transition-shadow",
        isDragging && "opacity-50 shadow-lg ring-2 ring-primary/20"
      )}
    >
      {/* Drag handle */}
      <div
        {...dragHandleProps}
        className="mt-0.5 cursor-grab touch-none text-muted-foreground/50 hover:text-muted-foreground active:cursor-grabbing"
      >
        <GripVertical className="size-4" />
      </div>

      {/* Time */}
      <div className="flex shrink-0 flex-col items-center gap-0.5 pt-0.5">
        <Clock className="size-3 text-muted-foreground" />
        <span className="text-xs font-mono font-medium text-muted-foreground">
          {activity.time}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-1.5 flex-wrap">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-xs font-medium",
              catConfig.color
            )}
          >
            <span>{catConfig.emoji}</span>
            <span>{catConfig.label}</span>
          </span>
          <span className="text-sm font-medium leading-tight">{activity.title}</span>
        </div>

        {activity.place && (
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3 shrink-0" />
            {activity.placeHref ? (
              <a
                href={activity.placeHref}
                className="hover:underline hover:text-foreground truncate"
                onClick={(e) => e.stopPropagation()}
              >
                {activity.place}
              </a>
            ) : (
              <span className="truncate">{activity.place}</span>
            )}
          </div>
        )}

        {activity.description && (
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {activity.description}
          </p>
        )}
      </div>

      {/* Cost + actions */}
      <div className="flex shrink-0 flex-col items-end gap-1">
        <span className="text-xs font-medium text-foreground">
          {formatKRW(activity.estimatedCost)}
        </span>
        {activity.duration && (
          <span className="text-xs text-muted-foreground">{activity.duration}분</span>
        )}
        {onRemove && (
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={onRemove}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-3" />
          </Button>
        )}
      </div>
    </div>
  );
}

export { CATEGORY_CONFIG };
