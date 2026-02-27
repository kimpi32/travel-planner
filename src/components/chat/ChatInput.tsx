"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, Square } from "lucide-react";
import { cn } from "@/lib/utils";

// ChatStatus from ai package: 'submitted' | 'streaming' | 'ready' | 'error' | 'idle'
type ChatStatus = "idle" | "submitted" | "streaming" | "ready" | "error";

interface ChatInputProps {
  onSend: (content: string) => void;
  onStop?: () => void;
  status?: ChatStatus;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  onStop,
  status = "ready",
  placeholder = "메시지를 입력하세요...",
  disabled = false,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isLoading = status === "submitted" || status === "streaming";
  const isDisabled = disabled || isLoading;

  const adjustHeight = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const handleSend = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    const content = el.value.trim();
    if (!content || isLoading) return;
    onSend(content);
    el.value = "";
    el.style.height = "auto";
  }, [onSend, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isLoading) return;
      handleSend();
    }
  };

  const handleStop = () => {
    onStop?.();
  };

  return (
    <div className="flex items-end gap-2 rounded-2xl border bg-card p-2 shadow-sm transition-shadow focus-within:shadow-md focus-within:ring-1 focus-within:ring-ring/30">
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder={isLoading ? "응답 생성 중..." : placeholder}
        disabled={isDisabled}
        onKeyDown={handleKeyDown}
        onInput={adjustHeight}
        className={cn(
          "flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground/60",
          "min-h-[36px] max-h-[160px]",
          isDisabled && "cursor-not-allowed opacity-50"
        )}
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={isLoading ? handleStop : handleSend}
        disabled={isDisabled && !onStop}
        aria-label={isLoading ? "중지" : "전송"}
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
          isLoading
            ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isLoading ? (
          <Square className="h-3.5 w-3.5 fill-current" />
        ) : (
          <Send className="h-3.5 w-3.5" />
        )}
      </motion.button>
    </div>
  );
}
