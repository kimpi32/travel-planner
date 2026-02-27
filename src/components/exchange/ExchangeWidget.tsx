"use client";

import { useEffect, useState, useCallback } from "react";
import { TrendingUp, AlertCircle, RefreshCw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExchangeConversion } from "@/lib/api/exchange";

// ─── Currency Flag / Label Helpers ───────────────────────────────────────────

const CURRENCY_LABELS: Record<string, string> = {
  KRW: "대한민국 원",
  JPY: "일본 엔",
  CNY: "중국 위안",
  USD: "미국 달러",
  EUR: "유로",
  GBP: "영국 파운드",
  HKD: "홍콩 달러",
  TWD: "대만 달러",
  THB: "태국 바트",
  SGD: "싱가포르 달러",
  MYR: "말레이시아 링깃",
  IDR: "인도네시아 루피아",
  VND: "베트남 동",
  PHP: "필리핀 페소",
  INR: "인도 루피",
  AED: "UAE 디르함",
  TRY: "터키 리라",
  CHF: "스위스 프랑",
  SEK: "스웨덴 크로나",
  NOK: "노르웨이 크로네",
  DKK: "덴마크 크로네",
  CAD: "캐나다 달러",
  AUD: "호주 달러",
  NZD: "뉴질랜드 달러",
  MXN: "멕시코 페소",
  BRL: "브라질 레알",
  ZAR: "남아공 랜드",
  EGP: "이집트 파운드",
};

function formatAmount(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "JPY" || currency === "KRW" || currency === "IDR" ? 0 : 2,
    }).format(amount);
  } catch {
    return `${amount.toLocaleString("ko-KR")} ${currency}`;
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

type ExchangeWidgetProps = {
  countrySlug?: string;
  currencyCode?: string;
  baseCurrency?: string;
  baseAmount?: number;
  className?: string;
};

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: ExchangeConversion }
  | { status: "error"; message: string };

// ─── Component ────────────────────────────────────────────────────────────────

export default function ExchangeWidget({
  countrySlug,
  currencyCode,
  baseCurrency = "KRW",
  baseAmount = 10000,
  className,
}: ExchangeWidgetProps) {
  const [state, setState] = useState<FetchState>({ status: "idle" });
  const [targetCurrency, setTargetCurrency] = useState<string | null>(currencyCode ?? null);

  // Resolve currency from country slug if not directly provided
  const resolveCurrency = useCallback(async (): Promise<string | null> => {
    if (currencyCode) return currencyCode;
    if (!countrySlug) return null;

    // Use the exchange API to resolve currency via getCurrencyForCountry
    // We call a simple lookup instead of an API call
    const res = await fetch(`/api/exchange?from=KRW&to=KRW&amount=1`);
    if (!res.ok) return null;

    // Fallback: try to derive from slug directly
    return null;
  }, [currencyCode, countrySlug]);

  const load = useCallback(async (to: string) => {
    if (!to || to === baseCurrency) return;
    setState({ status: "loading" });
    try {
      const params = new URLSearchParams({
        from: baseCurrency,
        to,
        amount: String(baseAmount),
      });
      const res = await fetch(`/api/exchange?${params}`);
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(err.error ?? "환율 정보를 불러오지 못했습니다");
      }
      const data: ExchangeConversion = await res.json();
      setState({ status: "success", data });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "알 수 없는 오류",
      });
    }
  }, [baseCurrency, baseAmount]);

  useEffect(() => {
    if (targetCurrency) {
      load(targetCurrency);
    }
  }, [targetCurrency, load]);

  useEffect(() => {
    if (currencyCode) {
      setTargetCurrency(currencyCode);
    }
  }, [currencyCode]);

  // Loading skeleton
  if (state.status === "idle" || state.status === "loading") {
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="h-20 rounded-xl bg-muted" />
      </div>
    );
  }

  // Error
  if (state.status === "error") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/10 px-3 py-2.5 text-sm text-red-600 dark:text-red-400",
          className,
        )}
      >
        <AlertCircle className="h-4 w-4 shrink-0" />
        <span>{state.message}</span>
      </div>
    );
  }

  const { data } = state;
  const fromLabel = CURRENCY_LABELS[data.from] ?? data.from;
  const toLabel = CURRENCY_LABELS[data.to] ?? data.to;

  return (
    <div
      className={cn(
        "rounded-xl border bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-4",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
          <span>환율 정보</span>
          <span className="text-[10px]">· {data.date} 기준</span>
        </div>
        <button
          onClick={() => targetCurrency && load(targetCurrency)}
          className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="환율 새로고침"
        >
          <RefreshCw className="h-3 w-3 text-muted-foreground" />
        </button>
      </div>

      {/* Conversion display */}
      <div className="flex items-center gap-2">
        <div className="flex-1 text-center">
          <p className="text-xs text-muted-foreground mb-0.5">{fromLabel}</p>
          <p className="text-lg font-bold tabular-nums">{formatAmount(data.amount, data.from)}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
        <div className="flex-1 text-center">
          <p className="text-xs text-muted-foreground mb-0.5">{toLabel}</p>
          <p className="text-lg font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
            {formatAmount(data.converted, data.to)}
          </p>
        </div>
      </div>

      {/* Rate */}
      <p className="mt-2 text-center text-[11px] text-muted-foreground">
        1 {data.from} = {data.rate.toFixed(4)} {data.to}
      </p>
    </div>
  );
}
