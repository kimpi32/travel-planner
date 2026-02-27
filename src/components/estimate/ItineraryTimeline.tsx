"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin, Clock, DollarSign, Utensils, Hotel, Camera, Bus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  time?: string;
  name: string;
  description?: string;
  cost?: number;
  currency?: string;
  type?: "meal" | "sightseeing" | "transport" | "accommodation" | "activity" | string;
  duration?: string;
  location?: string;
}

interface ItineraryDay {
  day: number;
  date?: string;
  title?: string;
  city?: string;
  activities: Activity[];
  totalCost?: number;
  accommodation?: string;
  tips?: string;
}

interface ItineraryTimelineProps {
  result: {
    days?: ItineraryDay[];
    itinerary?: ItineraryDay[];
    destination?: string;
    duration?: string;
    summary?: string;
    totalCost?: number;
    currency?: string;
  };
}

const ACTIVITY_ICONS: Record<string, React.ReactNode> = {
  meal: <Utensils className="h-3 w-3" />,
  accommodation: <Hotel className="h-3 w-3" />,
  sightseeing: <Camera className="h-3 w-3" />,
  transport: <Bus className="h-3 w-3" />,
  activity: <MapPin className="h-3 w-3" />,
};

const ACTIVITY_COLORS: Record<string, string> = {
  meal: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  accommodation: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  sightseeing: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  transport: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
  activity: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
};

function ActivityItem({ activity }: { activity: Activity }) {
  const type = activity.type || "activity";
  const iconColor = ACTIVITY_COLORS[type] || ACTIVITY_COLORS.activity;
  const icon = ACTIVITY_ICONS[type] || ACTIVITY_ICONS.activity;
  const currency = activity.currency || "KRW";

  return (
    <div className="flex gap-3">
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full", iconColor)}>
          {icon}
        </div>
        <div className="w-px flex-1 bg-border mt-1" />
      </div>

      <div className="pb-3 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {activity.time && (
                <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground tabular-nums">
                  <Clock className="h-2.5 w-2.5" />
                  {activity.time}
                </span>
              )}
              {activity.duration && (
                <span className="text-[10px] text-muted-foreground">({activity.duration})</span>
              )}
            </div>
            <p className="text-sm font-medium leading-snug">{activity.name}</p>
            {activity.description && (
              <p className="mt-0.5 text-xs text-muted-foreground">{activity.description}</p>
            )}
            {activity.location && (
              <p className="mt-0.5 flex items-center gap-0.5 text-[10px] text-muted-foreground">
                <MapPin className="h-2.5 w-2.5" />
                {activity.location}
              </p>
            )}
          </div>
          {activity.cost !== undefined && activity.cost > 0 && (
            <span className="shrink-0 text-xs font-semibold text-primary tabular-nums">
              {currency === "KRW"
                ? `${activity.cost.toLocaleString()}원`
                : `${currency} ${activity.cost.toLocaleString()}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function DayAccordion({ day, isOpen, onToggle }: {
  day: ItineraryDay;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {day.day}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {day.date && (
              <span className="text-[10px] text-muted-foreground">{day.date}</span>
            )}
            {day.city && (
              <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                <MapPin className="h-2.5 w-2.5" />
                {day.city}
              </span>
            )}
          </div>
          <p className="truncate text-sm font-semibold">
            {day.title || `${day.day}일차`}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {day.totalCost !== undefined && (
            <span className="flex items-center gap-0.5 text-xs font-medium text-primary">
              <DollarSign className="h-3 w-3" />
              {day.totalCost.toLocaleString()}원
            </span>
          )}
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="border-t px-4 pt-3">
              <div className="space-y-0">
                {day.activities.map((activity, i) => (
                  <ActivityItem key={i} activity={activity} />
                ))}
              </div>
              {day.accommodation && (
                <div className="mb-3 flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-2 text-xs dark:bg-blue-900/20">
                  <Hotel className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-blue-700 dark:text-blue-300">숙소:</span>
                  <span className="text-blue-600 dark:text-blue-400">{day.accommodation}</span>
                </div>
              )}
              {day.tips && (
                <div className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
                  💡 {day.tips}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ItineraryTimeline({ result }: ItineraryTimelineProps) {
  const days = result.days || result.itinerary || [];
  const [openDays, setOpenDays] = useState<Set<number>>(() => new Set([days[0]?.day || 1]));

  const toggle = (dayNum: number) => {
    setOpenDays(prev => {
      const next = new Set(prev);
      if (next.has(dayNum)) next.delete(dayNum);
      else next.add(dayNum);
      return next;
    });
  };

  const expandAll = () => setOpenDays(new Set(days.map(d => d.day)));
  const collapseAll = () => setOpenDays(new Set());

  if (days.length === 0) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground">여행 일정</span>
          {result.destination && <span>{result.destination}</span>}
          {result.duration && <span>· {result.duration}</span>}
        </div>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="text-[10px] text-muted-foreground hover:text-foreground"
          >
            전체 펼치기
          </button>
          <span className="text-[10px] text-muted-foreground">|</span>
          <button
            onClick={collapseAll}
            className="text-[10px] text-muted-foreground hover:text-foreground"
          >
            전체 접기
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {days.map((day, i) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <DayAccordion
              day={day}
              isOpen={openDays.has(day.day)}
              onToggle={() => toggle(day.day)}
            />
          </motion.div>
        ))}
      </div>

      {result.totalCost !== undefined && (
        <div className="flex items-center justify-between rounded-xl bg-primary/10 px-4 py-3">
          <span className="text-sm font-medium">총 예상 비용</span>
          <span className="text-base font-bold text-primary">
            {result.currency === "KRW" || !result.currency
              ? `${result.totalCost.toLocaleString()}원`
              : `${result.currency} ${result.totalCost.toLocaleString()}`}
          </span>
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
