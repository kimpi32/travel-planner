"use client";

import { useState, useCallback, useTransition } from "react";
import { ArrowLeftRight, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SUPPORTED_CURRENCIES } from "@/lib/api/exchange";
import type { ExchangeConversion } from "@/lib/api/exchange";

// ─── Currency Label Map ───────────────────────────────────────────────────────

const CURRENCY_LABELS: Record<string, string> = {
  AUD: "호주 달러 (AUD)",
  BGN: "불가리아 레프 (BGN)",
  BRL: "브라질 레알 (BRL)",
  CAD: "캐나다 달러 (CAD)",
  CHF: "스위스 프랑 (CHF)",
  CNY: "중국 위안 (CNY)",
  CZK: "체코 코루나 (CZK)",
  DKK: "덴마크 크로네 (DKK)",
  EUR: "유로 (EUR)",
  GBP: "영국 파운드 (GBP)",
  HKD: "홍콩 달러 (HKD)",
  HUF: "헝가리 포린트 (HUF)",
  IDR: "인도네시아 루피아 (IDR)",
  ILS: "이스라엘 세켈 (ILS)",
  INR: "인도 루피 (INR)",
  ISK: "아이슬란드 크로나 (ISK)",
  JPY: "일본 엔 (JPY)",
  KRW: "대한민국 원 (KRW)",
  MXN: "멕시코 페소 (MXN)",
  MYR: "말레이시아 링깃 (MYR)",
  NOK: "노르웨이 크로네 (NOK)",
  NZD: "뉴질랜드 달러 (NZD)",
  PHP: "필리핀 페소 (PHP)",
  PLN: "폴란드 즐로티 (PLN)",
  RON: "루마니아 레우 (RON)",
  SEK: "스웨덴 크로나 (SEK)",
  SGD: "싱가포르 달러 (SGD)",
  THB: "태국 바트 (THB)",
  TRY: "터키 리라 (TRY)",
  USD: "미국 달러 (USD)",
  ZAR: "남아공 랜드 (ZAR)",
};

function formatAmount(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency,
      maximumFractionDigits:
        ["JPY", "KRW", "IDR", "VND", "HUF", "ISK"].includes(currency) ? 0 : 2,
    }).format(amount);
  } catch {
    return `${amount.toLocaleString("ko-KR")} ${currency}`;
  }
}

// ─── Currency Select ──────────────────────────────────────────────────────────

function CurrencySelect({
  value,
  onChange,
  id,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  id: string;
  label: string;
}) {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="block text-xs font-medium text-muted-foreground mb-1.5">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {SUPPORTED_CURRENCIES.map((code) => (
          <option key={code} value={code}>
            {CURRENCY_LABELS[code] ?? code}
          </option>
        ))}
      </select>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type CurrencyConverterProps = {
  defaultFrom?: string;
  defaultTo?: string;
  defaultAmount?: number;
  className?: string;
};

type ConversionState =
  | { status: "idle" }
  | { status: "success"; data: ExchangeConversion }
  | { status: "error"; message: string };

export default function CurrencyConverter({
  defaultFrom = "KRW",
  defaultTo = "JPY",
  defaultAmount = 100000,
  className,
}: CurrencyConverterProps) {
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [amount, setAmount] = useState(String(defaultAmount));
  const [result, setResult] = useState<ConversionState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();

  const convert = useCallback(
    async (fromCurrency: string, toCurrency: string, amountValue: string) => {
      const numAmount = parseFloat(amountValue.replace(/,/g, ""));
      if (isNaN(numAmount) || numAmount <= 0) return;

      startTransition(async () => {
        try {
          const params = new URLSearchParams({
            from: fromCurrency,
            to: toCurrency,
            amount: String(numAmount),
          });
          const res = await fetch(`/api/exchange?${params}`);
          if (!res.ok) {
            const err = await res.json().catch(() => ({ error: res.statusText }));
            throw new Error(err.error ?? "환율 변환 실패");
          }
          const data: ExchangeConversion = await res.json();
          setResult({ status: "success", data });
        } catch (error) {
          setResult({
            status: "error",
            message: error instanceof Error ? error.message : "알 수 없는 오류",
          });
        }
      });
    },
    [],
  );

  const handleSwap = () => {
    const newFrom = to;
    const newTo = from;
    setFrom(newFrom);
    setTo(newTo);
    convert(newFrom, newTo, amount);
  };

  const handleConvert = () => {
    convert(from, to, amount);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(raw);
  };

  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-5 shadow-sm space-y-4",
        className,
      )}
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-emerald-500" />
        <h3 className="text-sm font-semibold">환율 계산기</h3>
      </div>

      {/* Currency Selectors */}
      <div className="flex items-end gap-2">
        <CurrencySelect value={from} onChange={setFrom} id="from-currency" label="보내는 통화" />

        <button
          onClick={handleSwap}
          className="mb-0.5 p-2 rounded-lg border hover:bg-muted transition-colors shrink-0"
          aria-label="통화 교환"
          title="통화 교환"
        >
          <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
        </button>

        <CurrencySelect value={to} onChange={setTo} id="to-currency" label="받는 통화" />
      </div>

      {/* Amount Input */}
      <div>
        <label htmlFor="amount-input" className="block text-xs font-medium text-muted-foreground mb-1.5">
          금액
        </label>
        <div className="relative">
          <input
            id="amount-input"
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={handleAmountChange}
            onKeyDown={(e) => e.key === "Enter" && handleConvert()}
            placeholder="금액 입력"
            className="w-full rounded-lg border bg-background px-3 py-2 text-sm pr-12 focus:outline-none focus:ring-2 focus:ring-ring tabular-nums"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
            {from}
          </span>
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        disabled={isPending}
        className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 transition-colors"
      >
        {isPending ? "계산 중..." : "환율 계산"}
      </button>

      {/* Result */}
      {result.status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 px-3 py-2.5 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{result.message}</span>
        </div>
      )}

      {result.status === "success" && (
        <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-800 p-4 space-y-2">
          {/* Main result */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">
              {formatAmount(result.data.amount, result.data.from)} =
            </p>
            <p className="text-3xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
              {formatAmount(result.data.converted, result.data.to)}
            </p>
          </div>

          {/* Rate details */}
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground pt-1 border-t border-emerald-100 dark:border-emerald-800">
            <span className="tabular-nums">
              1 {result.data.from} = {result.data.rate.toFixed(4)} {result.data.to}
            </span>
            <span>·</span>
            <span>{result.data.date} 기준</span>
          </div>

          {/* Reverse rate */}
          <p className="text-center text-[11px] text-muted-foreground">
            1 {result.data.to} = {(1 / result.data.rate).toFixed(4)} {result.data.from}
          </p>
        </div>
      )}
    </div>
  );
}
