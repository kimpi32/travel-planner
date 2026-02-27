"use client";

import Link from "next/link";
import { CalendarDays, Users, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trip, TripStatus } from "@/types/planner";
import { usePlannerStore } from "@/hooks/use-planner-store";

const STATUS_CONFIG: Record<TripStatus, { label: string; variant: "default" | "secondary" | "outline" }> = {
  planning: { label: "계획 중", variant: "secondary" },
  active: { label: "여행 중", variant: "default" },
  completed: { label: "완료", variant: "outline" },
};

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
  return `${fmt(s)} ~ ${fmt(e)}`;
}

function formatKRW(amount: number): string {
  if (amount >= 10000) {
    return `${Math.round(amount / 10000)}만원`;
  }
  return `${amount.toLocaleString()}원`;
}

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  const getTripBudgetSummary = usePlannerStore((s) => s.getTripBudgetSummary);
  const summary = getTripBudgetSummary(trip.id);
  const statusConfig = STATUS_CONFIG[trip.status];
  const nights = trip.days.length - 1;

  return (
    <Link href={`/planner/${trip.id}`} className="block group">
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base truncate group-hover:text-primary transition-colors">
                {trip.title}
              </h3>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" />
                <span className="truncate">{trip.destination}</span>
              </div>
            </div>
            <Badge variant={statusConfig.variant} className="shrink-0">
              {statusConfig.label}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              <span>{formatDateRange(trip.startDate, trip.endDate)}</span>
            </div>
            <span className="text-xs">
              {nights > 0 ? `${nights}박 ${nights + 1}일` : "당일치기"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="size-3.5" />
            <span>{trip.travelers}명</span>
          </div>

          {summary && summary.totalEstimated > 0 && (
            <div className="border-t pt-3 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">예상 경비</span>
              <div className="text-right">
                <p className="font-medium">{formatKRW(summary.totalEstimated)}</p>
                {trip.travelers > 1 && (
                  <p className="text-xs text-muted-foreground">
                    1인 {formatKRW(summary.perPersonEstimated)}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-end text-xs text-muted-foreground gap-1 group-hover:text-primary transition-colors">
            <span>자세히 보기</span>
            <ArrowRight className="size-3" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
