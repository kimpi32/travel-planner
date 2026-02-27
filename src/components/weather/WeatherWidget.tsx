"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  CloudFog,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { WeatherResponse, WeatherForecastDay, WeatherCurrent } from "@/lib/api/weather";

// ─── Weather Icon ─────────────────────────────────────────────────────────────

function WeatherIcon({
  condition,
  className,
}: {
  condition: WeatherCurrent["condition"];
  className?: string;
}) {
  const iconMap = {
    clear: <Sun className={cn("text-amber-400", className)} />,
    partly_cloudy: <Cloud className={cn("text-slate-400", className)} />,
    cloudy: <Cloud className={cn("text-slate-500", className)} />,
    rainy: <CloudRain className={cn("text-blue-500", className)} />,
    snowy: <CloudSnow className={cn("text-sky-400", className)} />,
    foggy: <CloudFog className={cn("text-slate-400", className)} />,
  };

  return iconMap[condition] ?? <Sun className={cn("text-amber-400", className)} />;
}

// ─── Forecast Day Card ────────────────────────────────────────────────────────

function ForecastDayCard({ day, isFirst }: { day: WeatherForecastDay; isFirst: boolean }) {
  const dateLabel = isFirst
    ? "오늘"
    : new Date(day.date + "T12:00:00").toLocaleDateString("ko-KR", {
        weekday: "short",
        month: "numeric",
        day: "numeric",
      });

  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-white/50 dark:bg-white/5 px-2 py-2 min-w-0 flex-1">
      <span className="text-[10px] font-medium text-muted-foreground truncate w-full text-center">
        {dateLabel}
      </span>
      <WeatherIcon condition={day.condition} className="h-5 w-5" />
      {day.precipProbability !== undefined && day.precipProbability > 20 && (
        <span className="text-[10px] text-blue-500 font-medium">{day.precipProbability}%</span>
      )}
      <div className="flex flex-col items-center gap-0">
        <span className="text-xs font-semibold tabular-nums">{Math.round(day.tempMax)}°</span>
        <span className="text-[10px] text-muted-foreground tabular-nums">
          {Math.round(day.tempMin)}°
        </span>
      </div>
    </div>
  );
}

// ─── Compact Widget ───────────────────────────────────────────────────────────

function CompactWeather({ data }: { data: WeatherResponse }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border border-sky-100 dark:border-sky-800">
      <WeatherIcon condition={data.current.condition} className="h-5 w-5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold tabular-nums">{Math.round(data.current.temp)}°C</p>
        <p className="text-[10px] text-muted-foreground truncate">{data.cityName}</p>
      </div>
      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <Droplets className="h-3 w-3 text-blue-400" />
        {data.current.humidity}%
      </div>
    </div>
  );
}

// ─── Full Widget ──────────────────────────────────────────────────────────────

function FullWeather({ data, onRefresh }: { data: WeatherResponse; onRefresh: () => void }) {
  const updatedTime = new Date(data.updatedAt).toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-2xl border bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-sky-900/20 dark:via-background dark:to-blue-900/10 overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground">
            {data.source === "kma" ? "기상청" : "OpenWeatherMap"} · {updatedTime} 기준
          </p>
          <h3 className="text-base font-semibold mt-0.5">{data.cityName}</h3>
        </div>
        <button
          onClick={onRefresh}
          className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="날씨 새로고침"
        >
          <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>

      {/* Current */}
      <div className="px-4 pb-3 flex items-center gap-4">
        <WeatherIcon condition={data.current.condition} className="h-14 w-14 shrink-0" />
        <div>
          <p className="text-4xl font-bold tabular-nums">{Math.round(data.current.temp)}°C</p>
          <p className="text-sm text-muted-foreground capitalize">{data.current.description}</p>
          <p className="text-xs text-muted-foreground">체감 {Math.round(data.current.feelsLike)}°C</p>
        </div>
        <div className="ml-auto flex flex-col gap-1 text-right">
          <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            <Droplets className="h-3.5 w-3.5 text-blue-400" />
            <span className="tabular-nums">{data.current.humidity}%</span>
          </div>
          <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            <Wind className="h-3.5 w-3.5" />
            <span className="tabular-nums">{data.current.windSpeed.toFixed(1)}m/s</span>
          </div>
        </div>
      </div>

      {/* Forecast */}
      {data.forecast.length > 0 && (
        <div className="px-3 pb-3">
          <div className="flex gap-1">
            {data.forecast.slice(0, 5).map((day, i) => (
              <ForecastDayCard key={day.date} day={day} isFirst={i === 0} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type WeatherWidgetProps = {
  citySlug: string;
  isDomestic?: boolean;
  compact?: boolean;
  className?: string;
};

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: WeatherResponse }
  | { status: "error"; message: string };

export default function WeatherWidget({
  citySlug,
  isDomestic = false,
  compact = false,
  className,
}: WeatherWidgetProps) {
  const [state, setState] = useState<FetchState>({ status: "idle" });

  const load = useCallback(async () => {
    setState({ status: "loading" });
    try {
      const params = new URLSearchParams({ city: citySlug, domestic: isDomestic ? "true" : "false" });
      const res = await fetch(`/api/weather?${params}`);
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(err.error ?? "날씨 정보를 불러오지 못했습니다");
      }
      const data: WeatherResponse = await res.json();
      setState({ status: "success", data });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "알 수 없는 오류",
      });
    }
  }, [citySlug, isDomestic]);

  useEffect(() => {
    load();
  }, [load]);

  if (state.status === "idle" || state.status === "loading") {
    return (
      <div className={cn("animate-pulse", className)}>
        {compact ? (
          <div className="h-10 rounded-xl bg-muted" />
        ) : (
          <div className="rounded-2xl border bg-muted h-48" />
        )}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/10 px-3 py-2 text-sm text-red-600 dark:text-red-400",
          className,
        )}
      >
        <AlertCircle className="h-4 w-4 shrink-0" />
        <span>{state.message}</span>
      </div>
    );
  }

  return (
    <div className={className}>
      {compact ? (
        <CompactWeather data={state.data} />
      ) : (
        <FullWeather data={state.data} onRefresh={load} />
      )}
    </div>
  );
}
