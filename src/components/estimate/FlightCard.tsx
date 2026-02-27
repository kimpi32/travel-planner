"use client";

import { Plane, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlightOption {
  airline: string;
  airlineCode?: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopCities?: string[];
  price: number;
  currency?: string;
  class?: string;
}

interface FlightCardProps {
  result: {
    outbound?: FlightOption[];
    inbound?: FlightOption[];
    flights?: FlightOption[];
    origin?: string;
    destination?: string;
    date?: string;
    returnDate?: string;
    summary?: string;
  };
}

function StopBadge({ stops }: { stops: number }) {
  if (stops === 0) return (
    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
      직항
    </span>
  );
  return (
    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
      {stops}회 경유
    </span>
  );
}

function SingleFlight({ flight, index }: { flight: FlightOption; index: number }) {
  const currency = flight.currency || "KRW";
  const price = currency === "KRW"
    ? `${flight.price.toLocaleString()}원`
    : `${currency} ${flight.price.toLocaleString()}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        "relative rounded-xl border bg-card p-3 transition-shadow hover:shadow-md",
        index === 0 && "border-primary/30 bg-primary/5"
      )}
    >
      {index === 0 && (
        <span className="absolute -top-2 left-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
          최저가
        </span>
      )}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold">
            {flight.airlineCode || flight.airline.slice(0, 2)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium">{flight.airline}</p>
            {flight.class && (
              <p className="text-[10px] text-muted-foreground">{flight.class}</p>
            )}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 text-center">
          <div>
            <p className="text-sm font-bold tabular-nums">{flight.departureTime}</p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-0.5">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              {flight.duration}
            </div>
            <div className="relative flex w-full items-center">
              <div className="h-px flex-1 bg-border" />
              <Plane className="mx-1 h-3 w-3 -rotate-0 text-muted-foreground" />
              <div className="h-px flex-1 bg-border" />
            </div>
            <StopBadge stops={flight.stops} />
          </div>
          <div>
            <p className="text-sm font-bold tabular-nums">{flight.arrivalTime}</p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <p className="text-sm font-bold text-primary">{price}</p>
          <p className="text-[10px] text-muted-foreground">1인 기준</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlightCard({ result }: FlightCardProps) {
  const [showAll, setShowAll] = useState(false);
  const flights = result.flights || result.outbound || [];
  const displayFlights = showAll ? flights : flights.slice(0, 3);
  const hasMore = flights.length > 3;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Plane className="h-3.5 w-3.5 text-primary" />
        <span className="font-medium text-foreground">항공권 옵션</span>
        {result.origin && result.destination && (
          <span className="flex items-center gap-1">
            {result.origin}
            <ArrowRight className="h-3 w-3" />
            {result.destination}
          </span>
        )}
        {result.date && <span className="ml-auto">{result.date}</span>}
      </div>

      <div className="space-y-2">
        {displayFlights.map((flight, i) => (
          <SingleFlight key={i} flight={flight} index={i} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex w-full items-center justify-center gap-1 rounded-lg border py-2 text-xs text-muted-foreground transition-colors hover:bg-muted"
        >
          {showAll ? (
            <><ChevronUp className="h-3.5 w-3.5" /> 접기</>
          ) : (
            <><ChevronDown className="h-3.5 w-3.5" /> {flights.length - 3}개 더 보기</>
          )}
        </button>
      )}

      {result.inbound && result.inbound.length > 0 && (
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Plane className="h-3.5 w-3.5 rotate-180 text-primary" />
            <span className="font-medium text-foreground">귀국편</span>
            {result.returnDate && <span className="ml-auto">{result.returnDate}</span>}
          </div>
          {result.inbound.slice(0, 2).map((flight, i) => (
            <SingleFlight key={i} flight={flight} index={i} />
          ))}
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
