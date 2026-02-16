"use client";

import { useState } from "react";
import { Plane, Calendar, Users, Sparkles, ChevronDown } from "lucide-react";

interface AiEstimateSidebarProps {
  countryName: string;
  countryNameEn: string;
}

export default function AiEstimateSidebar({ countryName, countryNameEn }: AiEstimateSidebarProps) {
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState("balanced");

  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      <div className="border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-bold">AI 여행 견적</h3>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {countryName} 맞춤 견적을 받아보세요
        </p>
      </div>

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
            {style === "budget" && `~${(days * 8).toLocaleString()}만원`}
            {style === "balanced" && `~${(days * 13).toLocaleString()}만원`}
            {style === "comfort" && `~${(days * 20).toLocaleString()}만원`}
            {style === "luxury" && `~${(days * 35).toLocaleString()}만원`}
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">항공권 포함 추정치</p>
        </div>

        {/* CTA */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          <Sparkles className="h-4 w-4" />
          상세 견적 받기
          <span className="rounded bg-primary-foreground/20 px-1.5 py-0.5 text-[10px]">준비중</span>
        </button>

        <p className="text-center text-[10px] text-muted-foreground">
          AI가 항공권, 숙소, 일정, 예산을 자동으로 산출합니다
        </p>
      </div>
    </div>
  );
}
