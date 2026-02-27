import { streamText } from "ai";
import type { ModelMessage } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { TRAVEL_SYSTEM_PROMPT } from "@/lib/ai/agent";
import {
  searchFlightsTool,
  estimateBudgetTool,
  createItineraryTool,
  getWeatherTool,
  getExchangeRateTool,
  searchRestaurantsTool,
  getVisaInfoTool,
} from "@/lib/ai/tools";
import { type NextRequest, NextResponse } from "next/server";

// ── In-memory rate limiting (20 req/min per IP) ────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000; // 1분

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);

  if (!existing || now > existing.resetAt) {
    // 새 윈도우 시작
    const entry = { count: 1, resetAt: now + RATE_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return { allowed: true, remaining: RATE_LIMIT - 1, resetAt: entry.resetAt };
  }

  if (existing.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { allowed: true, remaining: RATE_LIMIT - existing.count, resetAt: existing.resetAt };
}

// 오래된 IP 엔트리 정리 (메모리 누수 방지)
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt + RATE_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}

export async function POST(req: NextRequest) {
  // IP 추출
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? req.headers.get("x-real-ip") ?? "127.0.0.1";

  // Rate limit 확인
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      {
        error: "요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.",
        resetAt: new Date(rateCheck.resetAt).toISOString(),
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(rateCheck.resetAt / 1000)),
        },
      }
    );
  }

  // 주기적 정리 (~1% 확률)
  if (Math.random() < 0.01) {
    cleanupRateLimitMap();
  }

  let messages: ModelMessage[];
  try {
    const body = (await req.json()) as { messages: ModelMessage[] };
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json({ error: "messages 배열이 필요합니다." }, { status: 400 });
    }
    messages = body.messages;
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const result = streamText({
    model: anthropic("claude-sonnet-4-5-20250929"),
    system: TRAVEL_SYSTEM_PROMPT,
    messages,
    tools: {
      search_flights: searchFlightsTool,
      estimate_budget: estimateBudgetTool,
      create_itinerary: createItineraryTool,
      get_weather: getWeatherTool,
      get_exchange_rate: getExchangeRateTool,
      search_restaurants: searchRestaurantsTool,
      get_visa_info: getVisaInfoTool,
    },
  });

  const response = result.toUIMessageStreamResponse();

  // Rate limit 헤더 추가
  const headers = new Headers(response.headers);
  headers.set("X-RateLimit-Limit", String(RATE_LIMIT));
  headers.set("X-RateLimit-Remaining", String(rateCheck.remaining));
  headers.set("X-RateLimit-Reset", String(Math.ceil(rateCheck.resetAt / 1000)));

  return new Response(response.body, {
    status: response.status,
    headers,
  });
}
