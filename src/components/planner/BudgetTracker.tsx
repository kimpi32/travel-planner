"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePlannerStore } from "@/hooks/use-planner-store";
import { Wallet } from "lucide-react";

function formatKRW(amount: number): string {
  if (amount >= 100000000) return `${(amount / 100000000).toFixed(1)}억원`;
  if (amount >= 10000) return `${Math.round(amount / 10000)}만원`;
  if (amount > 0) return `${amount.toLocaleString()}원`;
  return "0원";
}

interface BudgetTrackerProps {
  tripId: string;
}

export function BudgetTracker({ tripId }: BudgetTrackerProps) {
  const getTripBudgetSummary = usePlannerStore((s) => s.getTripBudgetSummary);
  const trips = usePlannerStore((s) => s.trips);
  const trip = trips.find((t) => t.id === tripId);
  const summary = getTripBudgetSummary(tripId);

  if (!trip || !summary) return null;

  const hasSpending = summary.totalEstimated > 0;

  // Build conic-gradient segments
  const nonZeroCategories = summary.categories.filter((c) => c.estimated > 0);
  let conicGradient = "conic-gradient(";
  if (nonZeroCategories.length === 0) {
    conicGradient = "conic-gradient(var(--muted) 0deg 360deg)";
  } else {
    let accumulated = 0;
    const segments = nonZeroCategories.map((cat) => {
      const pct = (cat.estimated / summary.totalEstimated) * 360;
      const from = accumulated;
      accumulated += pct;
      return `${cat.color} ${from.toFixed(1)}deg ${accumulated.toFixed(1)}deg`;
    });
    conicGradient = `conic-gradient(${segments.join(", ")})`;
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Wallet className="size-4" />
          예산 현황
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {/* Pie chart + totals */}
        <div className="flex items-center gap-4">
          <div
            className="size-20 shrink-0 rounded-full"
            style={{
              background: conicGradient,
            }}
          />
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-xs text-muted-foreground">총 예상 경비</p>
              <p className="text-lg font-bold">
                {hasSpending ? formatKRW(summary.totalEstimated) : "—"}
              </p>
            </div>
            {trip.travelers > 1 && hasSpending && (
              <div>
                <p className="text-xs text-muted-foreground">1인당</p>
                <p className="text-sm font-medium">
                  {formatKRW(summary.perPersonEstimated)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Category breakdown */}
        {hasSpending && (
          <div className="flex flex-col gap-2.5">
            {summary.categories
              .filter((c) => c.estimated > 0)
              .sort((a, b) => b.estimated - a.estimated)
              .map((cat) => {
                const pct =
                  summary.totalEstimated > 0
                    ? Math.round((cat.estimated / summary.totalEstimated) * 100)
                    : 0;
                return (
                  <div key={cat.category} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{cat.label}</span>
                      <span className="font-medium">{formatKRW(cat.estimated)}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: cat.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {!hasSpending && (
          <p className="text-sm text-muted-foreground text-center py-2">
            일정을 추가하면 예산이 집계됩니다.
          </p>
        )}

        {/* Actual vs estimated (if any actuals) */}
        {summary.totalActual > 0 && (
          <div className="border-t pt-3 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">실제 지출</span>
            <span
              className={
                summary.totalActual > summary.totalEstimated
                  ? "font-medium text-destructive"
                  : "font-medium text-green-600 dark:text-green-400"
              }
            >
              {formatKRW(summary.totalActual)}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
