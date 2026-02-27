"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PostType } from "@/types/community";

const TABS: { value: PostType; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "review", label: "후기" },
  { value: "tip", label: "팁" },
  { value: "itinerary", label: "여행 일정" },
  { value: "question", label: "Q&A" },
  { value: "buddy", label: "동행 구함" },
  { value: "general", label: "일반" },
];

interface PostTypeFilterProps {
  value: PostType;
  onChange: (type: PostType) => void;
}

export function PostTypeFilter({ value, onChange }: PostTypeFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
            value === tab.value
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {value === tab.value && (
            <motion.span
              layoutId="post-type-pill"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
