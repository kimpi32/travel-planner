"use client";

import { motion } from "framer-motion";

const SUGGESTED_PROMPTS = [
  "🇨🇿 프라하 3박4일 2인 150만원 견적",
  "🇯🇵 도쿄 5일 혼자 가성비 여행",
  "🇮🇹 이탈리아 10일 신혼여행 럭셔리",
  "🇹🇭 방콕 4박 친구 4명 맛집 투어",
];

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
  className?: string;
}

export default function SuggestedPrompts({ onSelect, className }: SuggestedPromptsProps) {
  return (
    <div className={className}>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        추천 질문
      </p>
      <div className="flex flex-wrap gap-1.5">
        {SUGGESTED_PROMPTS.map((prompt, i) => (
          <motion.button
            key={prompt}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelect(prompt)}
            className="rounded-full border bg-muted/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
