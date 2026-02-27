"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CommentFormProps {
  onSubmit: (body: string) => void;
  isSubmitting?: boolean;
  isAuthenticated: boolean;
}

export function CommentForm({
  onSubmit,
  isSubmitting,
  isAuthenticated,
}: CommentFormProps) {
  const [value, setValue] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="rounded-xl border bg-muted/40 px-4 py-3 text-sm text-muted-foreground text-center">
        댓글을 작성하려면{" "}
        <Link href="/auth/login" className="text-primary font-medium hover:underline">
          로그인
        </Link>
        이 필요합니다.
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="댓글을 입력하세요..."
        className="flex-1"
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        size="icon"
        disabled={!value.trim() || isSubmitting}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
