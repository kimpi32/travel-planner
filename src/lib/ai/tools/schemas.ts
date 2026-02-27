import { z } from "zod";

export const searchFlightsSchema = z.object({
  origin: z.string().describe("출발지 IATA 공항 코드 (예: ICN, GMP)"),
  destination: z.string().describe("도착지 IATA 공항 코드 (예: NRT, CDG)"),
  departureDate: z.string().describe("출발일 (YYYY-MM-DD 형식)"),
  returnDate: z.string().optional().describe("귀국일 (YYYY-MM-DD 형식, 왕복인 경우)"),
  passengers: z.number().int().min(1).max(9).default(1).describe("탑승객 수"),
  cabinClass: z
    .enum(["economy", "premiumEconomy", "business", "first"])
    .default("economy")
    .describe("좌석 등급"),
});

export const estimateBudgetSchema = z.object({
  destination: z.string().describe("여행지 (국가명 또는 도시명, 한국어 또는 영어)"),
  days: z.number().int().min(1).max(365).describe("여행 일수"),
  travelers: z.number().int().min(1).max(20).default(1).describe("여행자 수"),
  style: z
    .enum(["budget", "balanced", "comfort", "luxury"])
    .default("balanced")
    .describe("여행 스타일 (budget=절약, balanced=보통, comfort=편안, luxury=럭셔리)"),
  includeFlights: z.boolean().default(true).describe("항공권 비용 포함 여부"),
});

export const createItinerarySchema = z.object({
  destination: z.string().describe("여행지 도시명 (한국어 또는 영어)"),
  countrySlug: z.string().describe("국가 슬러그 (예: japan, france, germany)"),
  days: z.number().int().min(1).max(30).describe("여행 일수"),
  travelers: z.number().int().min(1).max(20).default(1).describe("여행자 수"),
  style: z
    .enum(["budget", "balanced", "comfort", "luxury"])
    .default("balanced")
    .describe("여행 스타일"),
  interests: z
    .array(z.string())
    .optional()
    .describe("관심사 (예: ['역사', '음식', '자연', '쇼핑', '예술'])"),
});

export const getWeatherSchema = z.object({
  city: z.string().describe("도시명 (영어)"),
  country: z.string().describe("국가 ISO 2자리 코드 (예: JP, FR, DE)"),
  month: z.number().int().min(1).max(12).optional().describe("월 (1~12, 없으면 현재 월)"),
});

export const getExchangeRateSchema = z.object({
  from: z.string().default("KRW").describe("기준 통화 코드 (기본값: KRW)"),
  to: z.string().describe("변환할 통화 코드 (예: JPY, EUR, USD)"),
  amount: z.number().optional().describe("변환할 금액 (없으면 1 기준으로 반환)"),
});

export const searchRestaurantsSchema = z.object({
  city: z.string().describe("도시명 (한국어 또는 영어)"),
  countrySlug: z.string().describe("국가 슬러그 (예: japan, france)"),
  cuisine: z.string().optional().describe("음식 종류 필터 (예: 라멘, 스시, 파스타)"),
  priceRange: z
    .enum(["budget", "mid", "upscale", "fine"])
    .default("mid")
    .describe("가격대 (budget=저렴, mid=보통, upscale=고급, fine=파인다이닝)"),
  count: z.number().int().min(1).max(10).default(5).describe("추천 레스토랑 수"),
});

export const getVisaInfoSchema = z.object({
  nationality: z.string().default("KR").describe("여권 국적 ISO 코드 (기본값: KR, 한국)"),
  destination: z.string().describe("방문할 국가 슬러그 (예: japan, france, usa)"),
});
