"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { UIMessage } from "ai";
import { isTextUIPart, isToolOrDynamicToolUIPart } from "ai";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import ToolLoadingSkeleton from "./ToolLoadingSkeleton";
import dynamic from "next/dynamic";

// Lazy-load estimate components
const FlightCard = dynamic(() => import("@/components/estimate/FlightCard"));
const BudgetSummary = dynamic(() => import("@/components/estimate/BudgetSummary"));
const ItineraryTimeline = dynamic(() => import("@/components/estimate/ItineraryTimeline"));
const WeatherBadge = dynamic(() => import("@/components/estimate/WeatherBadge"));
const ExchangeRateBar = dynamic(() => import("@/components/estimate/ExchangeRateBar"));
const RestaurantList = dynamic(() => import("@/components/estimate/RestaurantList"));
const VisaInfoCard = dynamic(() => import("@/components/estimate/VisaInfoCard"));

interface ToolResultRendererProps {
  toolName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any;
}

function ToolResultRenderer({ toolName, result }: ToolResultRendererProps) {
  switch (toolName) {
    case "searchFlights":
      return <FlightCard result={result} />;
    case "estimateBudget":
      return <BudgetSummary result={result} />;
    case "createItinerary":
      return <ItineraryTimeline result={result} />;
    case "getWeather":
      return <WeatherBadge result={result} />;
    case "getExchangeRate":
      return <ExchangeRateBar result={result} />;
    case "searchRestaurants":
      return <RestaurantList result={result} />;
    case "getVisaInfo":
      return <VisaInfoCard result={result} />;
    default:
      return (
        <div className="mt-2 rounded-lg bg-muted/50 px-3 py-2">
          <pre className="text-xs whitespace-pre-wrap break-all text-muted-foreground">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      );
  }
}

function UserBubble({ parts }: { parts: UIMessage["parts"] }) {
  const text = parts
    .filter(isTextUIPart)
    .map((p) => p.text)
    .join("");

  return (
    <div className="flex items-end justify-end gap-2">
      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground">
        <p className="whitespace-pre-wrap break-words">{text}</p>
      </div>
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
        <User className="h-3.5 w-3.5 text-primary" />
      </div>
    </div>
  );
}

function AssistantBubble({ message }: { message: UIMessage }) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
        <Bot className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <div className="max-w-[90%] space-y-1">
        {message.parts.map((part, partIdx) => {
          // Text part
          if (isTextUIPart(part)) {
            if (!part.text) return null;
            return (
              <div
                key={partIdx}
                className="rounded-2xl rounded-bl-sm border bg-card px-3.5 py-2.5 text-sm shadow-sm"
              >
                <p className="whitespace-pre-wrap break-words leading-relaxed">{part.text}</p>
              </div>
            );
          }

          // Tool part (static or dynamic)
          if (isToolOrDynamicToolUIPart(part)) {
            // For static typed tool parts: type is "tool-{name}"
            // For dynamic tool parts: type is "dynamic-tool" and has .toolName
            const toolName =
              part.type === "dynamic-tool"
                ? part.toolName
                : part.type.replace(/^tool-/, "");

            const isResult = part.state === "output-available";

            return (
              <div
                key={partIdx}
                className="rounded-2xl rounded-bl-sm border bg-card px-3.5 py-2.5 shadow-sm"
              >
                {isResult ? (
                  <ToolResultRenderer
                    toolName={toolName}
                    result={(part as { state: "output-available"; output: unknown }).output}
                  />
                ) : (
                  <ToolLoadingSkeleton toolName={toolName} />
                )}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

interface ChatMessagesProps {
  messages: UIMessage[];
  isLoading?: boolean;
}

export default function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 py-4">
      <AnimatePresence initial={false}>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {message.role === "user" ? (
              <UserBubble parts={message.parts} />
            ) : (
              <AssistantBubble message={message} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Typing indicator */}
      {isLoading && messages[messages.length - 1]?.role === "user" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
            <Bot className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <div className="rounded-2xl rounded-bl-sm border bg-card px-4 py-3 shadow-sm">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
