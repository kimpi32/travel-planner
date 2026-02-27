"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, RefreshCw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExchangePair {
  from: string;
  to: string;
  rate: number;
  change?: number;
  changePercent?: number;
  lastUpdated?: string;
}

interface ExchangeRateBarProps {
  result: {
    pairs?: ExchangePair[];
    rates?: Record<string, number>;
    baseCurrency?: string;
    lastUpdated?: string;
    summary?: string;
    travelTip?: string;
    conversions?: Array<{
      krw: number;
      foreign: number;
      currency: string;
    }>;
  };
}

function TrendIcon({ change }: { change?: number }) {
  if (change === undefined || change === 0) return <Minus className="h-3 w-3 text-muted-foreground" />;
  if (change > 0) return <TrendingUp className="h-3 w-3 text-red-500" />;
  return <TrendingDown className="h-3 w-3 text-emerald-500" />;
}

const CURRENCY_FLAGS: Record<string, string> = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  JPY: "🇯🇵",
  CNY: "🇨🇳",
  GBP: "🇬🇧",
  THB: "🇹🇭",
  VND: "🇻🇳",
  CZK: "🇨🇿",
  HUF: "🇭🇺",
  PLN: "🇵🇱",
  AUD: "🇦🇺",
  CAD: "🇨🇦",
  CHF: "🇨🇭",
  HKD: "🇭🇰",
  SGD: "🇸🇬",
  MYR: "🇲🇾",
  IDR: "🇮🇩",
  INR: "🇮🇳",
  TRY: "🇹🇷",
};

function PairCard({ pair, index }: { pair: ExchangePair; index: number }) {
  const isPositive = (pair.change || 0) > 0;
  const isNegative = (pair.change || 0) < 0;
  const changeColor = isPositive ? "text-red-500" : isNegative ? "text-emerald-500" : "text-muted-foreground";
  const flagFrom = CURRENCY_FLAGS[pair.from] || "💱";
  const flagTo = CURRENCY_FLAGS[pair.to] || "💱";

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07 }}
      className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3"
    >
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-lg">{flagFrom}</span>
        <div>
          <p className="text-xs font-semibold">{pair.from}</p>
        </div>
        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground mx-0.5" />
        <span className="text-lg">{flagTo}</span>
        <div>
          <p className="text-xs font-semibold">{pair.to}</p>
        </div>
      </div>

      <div className="flex-1 text-right">
        <p className="text-base font-bold tabular-nums">
          {pair.rate >= 100
            ? pair.rate.toLocaleString("ko-KR", { maximumFractionDigits: 0 })
            : pair.rate.toFixed(4)}
        </p>
        {pair.change !== undefined && (
          <div className={cn("flex items-center justify-end gap-0.5 text-[10px]", changeColor)}>
            <TrendIcon change={pair.change} />
            {pair.changePercent !== undefined
              ? `${pair.changePercent > 0 ? "+" : ""}${pair.changePercent.toFixed(2)}%`
              : `${pair.change > 0 ? "+" : ""}${pair.change.toFixed(2)}`}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExchangeRateBar({ result }: ExchangeRateBarProps) {
  const pairs: ExchangePair[] = result.pairs || [];

  // Convert rates dict to pairs
  const ratePairs: ExchangePair[] = result.rates
    ? Object.entries(result.rates).map(([to, rate]) => ({
        from: result.baseCurrency || "KRW",
        to,
        rate,
      }))
    : [];

  const allPairs = [...pairs, ...ratePairs];

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-base">💱</span>
          <span className="font-medium text-foreground">환율 정보</span>
          {result.baseCurrency && <span>기준: {result.baseCurrency}</span>}
        </div>
        {result.lastUpdated && (
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <RefreshCw className="h-2.5 w-2.5" />
            {result.lastUpdated}
          </div>
        )}
      </div>

      {allPairs.length > 0 && (
        <div className="space-y-2">
          {allPairs.map((pair, i) => (
            <PairCard key={i} pair={pair} index={i} />
          ))}
        </div>
      )}

      {/* Quick conversion */}
      {result.conversions && result.conversions.length > 0 && (
        <div className="rounded-xl border bg-muted/30 p-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">빠른 환산</p>
          <div className="space-y-1.5">
            {result.conversions.map((conv, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{conv.krw.toLocaleString()}원</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <span className="font-semibold">
                  {CURRENCY_FLAGS[conv.currency] || "💱"} {conv.foreign.toLocaleString()} {conv.currency}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {result.travelTip && (
        <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
          💡 {result.travelTip}
        </div>
      )}

      {result.summary && (
        <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {result.summary}
        </p>
      )}
    </div>
  );
}
