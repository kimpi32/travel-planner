"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Wallet, Plane, Hotel, Utensils, Ticket, ShoppingBag, Bus, MoreHorizontal } from "lucide-react";

interface BudgetCategory {
  name: string;
  amount: number;
  color?: string;
  icon?: string;
}

interface BudgetSummaryProps {
  result: {
    total?: number;
    perPerson?: number;
    currency?: string;
    categories?: BudgetCategory[];
    breakdown?: Record<string, number>;
    nights?: number;
    travelers?: number;
    style?: string;
    notes?: string;
  };
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  항공: <Plane className="h-3.5 w-3.5" />,
  숙소: <Hotel className="h-3.5 w-3.5" />,
  식비: <Utensils className="h-3.5 w-3.5" />,
  관광: <Ticket className="h-3.5 w-3.5" />,
  쇼핑: <ShoppingBag className="h-3.5 w-3.5" />,
  교통: <Bus className="h-3.5 w-3.5" />,
  기타: <MoreHorizontal className="h-3.5 w-3.5" />,
};

const PALETTE = [
  "#6366f1", // indigo
  "#22d3ee", // cyan
  "#f59e0b", // amber
  "#10b981", // emerald
  "#f43f5e", // rose
  "#a78bfa", // violet
  "#fb923c", // orange
  "#34d399", // green
];

function formatAmount(amount: number, currency: string) {
  if (currency === "KRW" || !currency) {
    return `${(amount / 10000).toFixed(0)}만원`;
  }
  return `${currency} ${amount.toLocaleString()}`;
}

export default function BudgetSummary({ result }: BudgetSummaryProps) {
  const currency = result.currency || "KRW";

  const categories: BudgetCategory[] = useMemo(() => {
    if (result.categories) return result.categories;
    if (result.breakdown) {
      return Object.entries(result.breakdown).map(([name, amount]) => ({ name, amount }));
    }
    return [];
  }, [result]);

  const total = result.total || categories.reduce((s, c) => s + c.amount, 0);
  const perPerson = result.perPerson || (result.travelers ? total / result.travelers : total);

  // Build conic-gradient segments
  const conicGradient = useMemo(() => {
    if (!total || categories.length === 0) return "conic-gradient(#e5e7eb 0deg 360deg)";
    let cum = 0;
    const stops = categories.map((c, i) => {
      const pct = (c.amount / total) * 360;
      const color = c.color || PALETTE[i % PALETTE.length];
      const start = cum;
      cum += pct;
      return `${color} ${start.toFixed(1)}deg ${cum.toFixed(1)}deg`;
    });
    return `conic-gradient(${stops.join(", ")})`;
  }, [categories, total]);

  return (
    <div className="mt-2 space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Wallet className="h-3.5 w-3.5 text-primary" />
        <span className="font-medium text-foreground">예산 분석</span>
        {result.nights && <span>{result.nights}박</span>}
        {result.travelers && <span>· {result.travelers}인</span>}
        {result.style && <span>· {result.style}</span>}
      </div>

      {/* Totals */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-primary/10 p-3 text-center">
          <p className="text-[10px] text-muted-foreground">총 예산</p>
          <p className="mt-1 text-lg font-bold text-primary">
            {formatAmount(total, currency)}
          </p>
        </div>
        <div className="rounded-xl bg-muted/60 p-3 text-center">
          <p className="text-[10px] text-muted-foreground">1인 예산</p>
          <p className="mt-1 text-lg font-bold">
            {formatAmount(perPerson, currency)}
          </p>
        </div>
      </div>

      {/* Donut chart + legend */}
      {categories.length > 0 && (
        <div className="flex items-center gap-4">
          {/* Donut */}
          <div className="relative shrink-0">
            <div
              className="h-24 w-24 rounded-full"
              style={{ background: conicGradient }}
            />
            {/* Center hole */}
            <div className="absolute inset-[14px] rounded-full bg-card" />
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-1.5">
            {categories.map((c, i) => {
              const pct = total > 0 ? Math.round((c.amount / total) * 100) : 0;
              const color = c.color || PALETTE[i % PALETTE.length];
              return (
                <div key={c.name} className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: color }} />
                  <div className="flex flex-1 items-center gap-1 min-w-0">
                    <span className="text-muted-foreground">
                      {CATEGORY_ICONS[c.name] || <MoreHorizontal className="h-3 w-3" />}
                    </span>
                    <span className="truncate text-xs font-medium">{c.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{pct}%</span>
                  <span className="text-xs font-semibold tabular-nums">{formatAmount(c.amount, currency)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Category bars */}
      {categories.length > 0 && (
        <div className="space-y-2">
          {categories.map((c, i) => {
            const pct = total > 0 ? (c.amount / total) * 100 : 0;
            const color = c.color || PALETTE[i % PALETTE.length];
            return (
              <div key={c.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{c.name}</span>
                  <span className="font-medium">{formatAmount(c.amount, currency)}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {result.notes && (
        <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {result.notes}
        </p>
      )}
    </div>
  );
}
