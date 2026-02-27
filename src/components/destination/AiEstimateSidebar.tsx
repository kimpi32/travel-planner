"use client";

import { useState, useRef, useCallback } from "react";
import { Plane, Calendar, Users, Sparkles, ChevronDown, MessageSquare, X } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import SuggestedPrompts from "@/components/chat/SuggestedPrompts";

interface AiEstimateSidebarProps {
  countryName: string;
  countryNameEn: string;
}

const STYLE_LABELS: Record<string, string> = {
  budget: "가성비 (배낭여행)",
  balanced: "밸런스 (중급)",
  comfort: "편안한 (프리미엄)",
  luxury: "럭셔리",
};

const STYLE_MULTIPLIERS: Record<string, number> = {
  budget: 8,
  balanced: 13,
  comfort: 20,
  luxury: 35,
};

export default function AiEstimateSidebar({ countryName, countryNameEn }: AiEstimateSidebarProps) {
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState("balanced");
  const [chatOpen, setChatOpen] = useState(false);

  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const buildPrompt = useCallback(() => {
    const styleLabel = STYLE_LABELS[style] || style;
    const estimatedBudget = (days * (STYLE_MULTIPLIERS[style] || 13)).toLocaleString();
    return `${countryName} ${days}박${days + 1}일 ${travelers}인 ${styleLabel} 스타일 여행 견적을 부탁드려요. 예상 예산은 1인 ${estimatedBudget}만원 정도입니다. 항공권, 숙소, 일정, 예산 분석을 포함해 주세요.`;
  }, [countryName, days, travelers, style]);

  const handleEstimate = () => {
    setChatOpen(true);
    const prompt = buildPrompt();
    sendMessage({ text: prompt });
  };

  const handleSend = (content: string) => {
    sendMessage({ text: content });
  };

  const handlePromptSelect = (prompt: string) => {
    setChatOpen(true);
    sendMessage({ text: prompt });
  };

  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      {/* Header */}
      <div className="border-b px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-bold">AI 여행 견적</h3>
          </div>
          {chatOpen && (
            <button
              onClick={() => setChatOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="채팅 닫기"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {countryName} 맞춤 견적을 받아보세요
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 p-5">
        {/* 인원 */}
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Users className="h-3.5 w-3.5" /> 인원
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTravelers(Math.max(1, travelers - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
            >
              -
            </button>
            <span className="w-8 text-center text-sm font-semibold">{travelers}</span>
            <button
              onClick={() => setTravelers(Math.min(10, travelers + 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
            >
              +
            </button>
            <span className="text-xs text-muted-foreground">명</span>
          </div>
        </div>

        {/* 일정 */}
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> 여행 기간
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDays(Math.max(2, days - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
            >
              -
            </button>
            <span className="w-8 text-center text-sm font-semibold">{days}</span>
            <button
              onClick={() => setDays(Math.min(30, days + 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
            >
              +
            </button>
            <span className="text-xs text-muted-foreground">일</span>
          </div>
        </div>

        {/* 여행 스타일 */}
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Plane className="h-3.5 w-3.5" /> 여행 스타일
          </label>
          <div className="relative">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full appearance-none rounded-lg border bg-background px-3 py-2 pr-8 text-sm transition-colors hover:bg-muted"
            >
              <option value="budget">가성비 (배낭여행)</option>
              <option value="balanced">밸런스 (중급)</option>
              <option value="comfort">편안한 (프리미엄)</option>
              <option value="luxury">럭셔리</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* 예상 금액 미리보기 */}
        <div className="rounded-xl bg-muted/50 p-3">
          <p className="text-xs text-muted-foreground">예상 총 예산 (1인)</p>
          <p className="mt-1 text-lg font-bold text-primary">
            ~{(days * (STYLE_MULTIPLIERS[style] || 13)).toLocaleString()}만원
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">항공권 포함 추정치</p>
        </div>

        {/* CTA */}
        <button
          onClick={handleEstimate}
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              AI가 견적 생성 중...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              상세 견적 받기
            </>
          )}
        </button>

        {/* Suggested prompts (only when chat is not open) */}
        {!chatOpen && (
          <SuggestedPrompts onSelect={handlePromptSelect} />
        )}

        <p className="text-center text-[10px] text-muted-foreground">
          AI가 항공권, 숙소, 일정, 예산을 자동으로 산출합니다
        </p>
      </div>

      {/* Chat area */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t overflow-hidden"
          >
            <div className="flex flex-col">
              {/* Messages */}
              <div className="max-h-[600px] overflow-y-auto px-4">
                <ChatMessages
                  messages={messages}
                  isLoading={isLoading}
                />
                {messages.length === 0 && !isLoading && (
                  <div className="py-6 text-center">
                    <MessageSquare className="mx-auto h-8 w-8 text-muted-foreground/40" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      아직 대화가 없습니다.
                      <br />
                      견적을 요청하거나 질문을 입력해 보세요.
                    </p>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t p-3">
                <ChatInput
                  onSend={handleSend}
                  onStop={stop}
                  status={status}
                  placeholder={`${countryName} 여행에 대해 질문하세요...`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
