"use client";

import { motion } from "framer-motion";
import { Thermometer, Droplets, Wind, Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherDay {
  date?: string;
  day?: string;
  condition?: string;
  tempHigh?: number;
  tempLow?: number;
  temp?: number;
  humidity?: number;
  wind?: number;
  icon?: string;
}

interface WeatherBadgeProps {
  result: {
    city?: string;
    country?: string;
    current?: {
      condition?: string;
      temp?: number;
      feelsLike?: number;
      humidity?: number;
      wind?: number;
    };
    forecast?: WeatherDay[];
    month?: string;
    season?: string;
    summary?: string;
    advice?: string;
  };
}

function WeatherIcon({ condition = "", className }: { condition?: string; className?: string }) {
  const lower = condition.toLowerCase();
  if (lower.includes("rain") || lower.includes("비")) {
    return <CloudRain className={cn("text-blue-500", className)} />;
  }
  if (lower.includes("snow") || lower.includes("눈")) {
    return <CloudSnow className={cn("text-sky-400", className)} />;
  }
  if (lower.includes("thunder") || lower.includes("번개") || lower.includes("뇌우")) {
    return <Zap className={cn("text-yellow-500", className)} />;
  }
  if (lower.includes("cloud") || lower.includes("흐") || lower.includes("구름")) {
    return <Cloud className={cn("text-gray-400", className)} />;
  }
  return <Sun className={cn("text-amber-400", className)} />;
}

function TempBadge({ temp, label }: { temp: number; label?: string }) {
  const color =
    temp >= 30 ? "text-red-500"
    : temp >= 20 ? "text-orange-500"
    : temp >= 10 ? "text-emerald-600"
    : temp >= 0 ? "text-blue-500"
    : "text-indigo-600";

  return (
    <div className="text-center">
      {label && <p className="text-[10px] text-muted-foreground">{label}</p>}
      <p className={cn("text-sm font-bold tabular-nums", color)}>{temp}°</p>
    </div>
  );
}

export default function WeatherBadge({ result }: WeatherBadgeProps) {
  const { city, current, forecast, season, summary, advice } = result;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Sun className="h-3.5 w-3.5 text-amber-400" />
        <span className="font-medium text-foreground">날씨 정보</span>
        {city && <span>{city}</span>}
        {season && <span>· {season}</span>}
        {result.month && <span>· {result.month}</span>}
      </div>

      {/* Current weather */}
      {current && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 rounded-xl border bg-gradient-to-br from-sky-50 to-blue-50 p-4 dark:from-sky-900/20 dark:to-blue-900/20"
        >
          <WeatherIcon condition={current.condition} className="h-10 w-10" />
          <div className="flex-1">
            {current.condition && (
              <p className="text-sm font-semibold">{current.condition}</p>
            )}
            {current.temp !== undefined && (
              <p className="text-2xl font-bold tabular-nums">{current.temp}°C</p>
            )}
            {current.feelsLike !== undefined && (
              <p className="text-xs text-muted-foreground">체감 {current.feelsLike}°C</p>
            )}
          </div>
          <div className="space-y-1 text-right">
            {current.humidity !== undefined && (
              <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                <Droplets className="h-3 w-3 text-blue-400" />
                {current.humidity}%
              </div>
            )}
            {current.wind !== undefined && (
              <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                <Wind className="h-3 w-3" />
                {current.wind}m/s
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Forecast */}
      {forecast && forecast.length > 0 && (
        <div className="grid grid-cols-5 gap-1">
          {forecast.slice(0, 5).map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center gap-1 rounded-lg bg-muted/50 py-2 px-1"
            >
              <p className="text-[10px] font-medium text-muted-foreground">
                {day.day || day.date}
              </p>
              <WeatherIcon condition={day.condition} className="h-5 w-5" />
              {day.tempHigh !== undefined && day.tempLow !== undefined ? (
                <div className="flex flex-col items-center gap-0">
                  <span className="text-xs font-semibold tabular-nums">{day.tempHigh}°</span>
                  <span className="text-[10px] text-muted-foreground tabular-nums">{day.tempLow}°</span>
                </div>
              ) : day.temp !== undefined ? (
                <span className="text-xs font-semibold tabular-nums">{day.temp}°</span>
              ) : null}
            </motion.div>
          ))}
        </div>
      )}

      {/* No current/forecast – simple badge row */}
      {!current && (!forecast || forecast.length === 0) && result.summary && (
        <div className="flex items-center gap-3 rounded-xl border bg-muted/30 p-3">
          <Sun className="h-8 w-8 text-amber-400 shrink-0" />
          <p className="text-sm">{result.summary}</p>
        </div>
      )}

      {advice && (
        <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
          💡 {advice}
        </div>
      )}

      {summary && (current || (forecast && forecast.length > 0)) && (
        <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {summary}
        </p>
      )}
    </div>
  );
}
