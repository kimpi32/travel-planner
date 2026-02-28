"use client";

import { useState, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Plane,
  Calendar,
  Users,
  ChevronDown,
  RotateCcw,
} from "lucide-react";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import SuggestedPrompts from "@/components/chat/SuggestedPrompts";

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

const STYLE_COLORS: Record<string, string> = {
  budget: "bg-green-500/10 text-green-600 dark:text-green-400",
  balanced: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  comfort: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  luxury: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export default function EstimatePage() {
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState("balanced");
  const [destination, setDestination] = useState("");
  const [chatStarted, setChatStarted] = useState(false);

  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const estimatedBudget = days * (STYLE_MULTIPLIERS[style] || 13);

  const buildPrompt = useCallback(() => {
    const styleLabel = STYLE_LABELS[style] || style;
    const dest = destination.trim() || "원하는 여행지";
    return `${dest} ${days}박${days + 1}일 ${travelers}인 ${styleLabel} 스타일 여행 견적을 부탁드려요. 예상 예산은 1인 ${estimatedBudget.toLocaleString()}만원 정도입니다. 항공권, 숙소, 일정, 예산 분석을 포함해 주세요.`;
  }, [destination, days, travelers, style, estimatedBudget]);

  const handleEstimate = () => {
    setChatStarted(true);
    const prompt = buildPrompt();
    sendMessage({ text: prompt });
  };

  const handleSend = (content: string) => {
    setChatStarted(true);
    sendMessage({ text: content });
  };

  const handlePromptSelect = (prompt: string) => {
    setChatStarted(true);
    sendMessage({ text: prompt });
  };

  const handleReset = () => {
    setChatStarted(false);
    // messages는 useChat 내부 상태라 직접 초기화 불가,
    // 페이지 새로고침 없이는 리셋이 어려우므로 reload 활용
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI 여행 견적
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              AI가 만드는 나만의 여행 견적
            </h1>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              여행지, 인원, 기간, 스타일을 설정하면 항공권부터 일정까지 자동으로 산출해드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* 설정 패널 */}
        <AnimatePresence>
          {!chatStarted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 rounded-2xl border bg-card shadow-sm"
            >
              <div className="border-b px-5 py-4">
                <h2 className="font-semibold">여행 조건 설정</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  조건을 설정하고 견적을 받아보세요
                </p>
              </div>

              <div className="grid gap-5 p-5 sm:grid-cols-2">
                {/* 여행지 */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Plane className="h-3.5 w-3.5" /> 여행지 (선택)
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="예: 도쿄, 파리, 방콕... (비우면 AI가 추천)"
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-1 focus:ring-ring/40"
                  />
                </div>

                {/* 인원 */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Users className="h-3.5 w-3.5" /> 인원
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{travelers}</span>
                    <button
                      onClick={() => setTravelers(Math.min(10, travelers + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
                    >
                      +
                    </button>
                    <span className="text-xs text-muted-foreground">명</span>
                  </div>
                </div>

                {/* 여행 기간 */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> 여행 기간
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDays(Math.max(2, days - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{days}</span>
                    <button
                      onClick={() => setDays(Math.min(30, days + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-muted"
                    >
                      +
                    </button>
                    <span className="text-xs text-muted-foreground">일</span>
                  </div>
                </div>

                {/* 여행 스타일 */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    여행 스타일
                  </label>
                  <div className="relative">
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="w-full appearance-none rounded-lg border bg-background px-3 py-2.5 pr-8 text-sm outline-none transition-colors hover:bg-muted focus:ring-1 focus:ring-ring/40"
                    >
                      <option value="budget">가성비 (배낭여행)</option>
                      <option value="balanced">밸런스 (중급)</option>
                      <option value="comfort">편안한 (프리미엄)</option>
                      <option value="luxury">럭셔리</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                {/* 예상 예산 미리보기 */}
                <div className="sm:col-span-2">
                  <div className={`flex items-center justify-between rounded-xl px-4 py-3 ${STYLE_COLORS[style]}`}>
                    <div>
                      <p className="text-xs font-medium opacity-80">예상 총 예산 (1인, 항공 포함)</p>
                      <p className="mt-0.5 text-2xl font-bold">
                        ~{estimatedBudget.toLocaleString()}만원
                      </p>
                    </div>
                    <div className="text-right text-xs opacity-70">
                      <p>{travelers}명 총</p>
                      <p className="font-semibold">
                        ~{(estimatedBudget * travelers).toLocaleString()}만원
                      </p>
                    </div>
                  </div>
                </div>

                {/* 견적 CTA */}
                <div className="sm:col-span-2">
                  <button
                    onClick={handleEstimate}
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Sparkles className="h-4 w-4" />
                    AI 여행 견적 받기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 채팅 시작 전: 추천 프롬프트 */}
        {!chatStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <SuggestedPrompts onSelect={handlePromptSelect} />
          </motion.div>
        )}

        {/* 채팅 영역 */}
        <div className="flex flex-col">
          {/* 채팅 시작 후 상단 요약 바 */}
          <AnimatePresence>
            {chatStarted && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 flex items-center justify-between rounded-xl border bg-card px-4 py-3 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-medium">
                    {destination || "여행지 미정"}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{travelers}인</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{days}일</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{STYLE_LABELS[style]}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STYLE_COLORS[style]}`}>
                    ~{estimatedBudget.toLocaleString()}만원
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="ml-2 flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <RotateCcw className="h-3 w-3" />
                  초기화
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 메시지 목록 */}
          {messages.length > 0 ? (
            <div className="mb-4 rounded-2xl border bg-card shadow-sm">
              <div className="px-4">
                <ChatMessages messages={messages} isLoading={isLoading} />
              </div>
            </div>
          ) : (
            !chatStarted && (
              <div className="mb-6 flex flex-col items-center justify-center rounded-2xl border bg-card/50 py-14 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  조건을 설정하고 견적을 받거나
                </p>
                <p className="text-sm text-muted-foreground">
                  추천 질문을 눌러 바로 시작해보세요
                </p>
              </div>
            )
          )}

          {/* 입력창 */}
          <div className="sticky bottom-16 md:bottom-4">
            <ChatInput
              onSend={handleSend}
              onStop={stop}
              status={status}
              placeholder="여행에 대해 무엇이든 물어보세요..."
            />
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              AI가 항공권, 숙소, 일정, 예산을 자동으로 산출합니다 · 실제 예약과 다를 수 있습니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
