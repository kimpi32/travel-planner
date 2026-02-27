import { tool } from "ai";
import { estimateBudgetSchema } from "./schemas";
import { countryDetails } from "@/data/country-details";
import { findCountrySlug, formatKRW, parseDailyBudget } from "./utils";

// 여행 스타일별 일일 예산 배수
const STYLE_MULTIPLIER: Record<string, number> = {
  budget: 0.6,
  balanced: 1.0,
  comfort: 1.6,
  luxury: 2.8,
};

// 예산 카테고리 비율
const CATEGORY_RATIOS = {
  accommodation: 0.35,
  food: 0.25,
  transport: 0.15,
  activities: 0.15,
  shopping: 0.05,
  misc: 0.05,
};

// 한국→목적지 왕복 항공권 기본 가격 (1인)
const FLIGHT_BASE_PRICES: Record<string, number> = {
  japan: 400_000,
  china: 500_000,
  taiwan: 550_000,
  mongolia: 600_000,
  thailand: 700_000,
  vietnam: 600_000,
  indonesia: 850_000,
  philippines: 700_000,
  malaysia: 760_000,
  singapore: 800_000,
  cambodia: 640_000,
  india: 1_100_000,
  nepal: 1_200_000,
  "sri-lanka": 1_100_000,
  uzbekistan: 900_000,
  kazakhstan: 800_000,
  france: 1_500_000,
  uk: 1_560_000,
  germany: 1_400_000,
  netherlands: 1_440_000,
  belgium: 1_450_000,
  ireland: 1_550_000,
  luxembourg: 1_450_000,
  austria: 1_400_000,
  switzerland: 1_440_000,
  czechia: 1_350_000,
  poland: 1_380_000,
  hungary: 1_380_000,
  italy: 1_500_000,
  spain: 1_520_000,
  portugal: 1_540_000,
  greece: 1_480_000,
  malta: 1_500_000,
  norway: 1_550_000,
  sweden: 1_520_000,
  finland: 1_500_000,
  denmark: 1_510_000,
  iceland: 1_600_000,
  croatia: 1_450_000,
  slovenia: 1_440_000,
  turkey: 1_200_000,
  georgia: 900_000,
  uae: 1_100_000,
  israel: 1_300_000,
  jordan: 1_250_000,
  oman: 1_200_000,
};

export const estimateBudgetTool = tool({
  description:
    "여행 예산을 산출합니다. 목적지, 여행 일수, 인원, 여행 스타일을 입력하면 숙박·식비·교통·관광 등 항목별 상세 예산을 원화(KRW)로 계산합니다.",
  inputSchema: estimateBudgetSchema,
  execute: async ({ destination, days, travelers, style, includeFlights }) => {
    // 국가 슬러그 찾기
    const slug = findCountrySlug(destination);
    const country = slug ? countryDetails[slug] : undefined;

    // 일일 기본 예산 파싱 (현지 데이터 활용)
    let baseDailyBudgetKRW = 120_000; // 기본값
    if (country?.dailyBudget) {
      baseDailyBudgetKRW = parseDailyBudget(country.dailyBudget);
    }

    const multiplier = STYLE_MULTIPLIER[style] ?? 1.0;
    const dailyBudget = Math.round(baseDailyBudgetKRW * multiplier);

    // 항목별 계산 (1인 기준 총액)
    const totalLocal = dailyBudget * days;
    const accommodation = Math.round(totalLocal * CATEGORY_RATIOS.accommodation);
    const food = Math.round(totalLocal * CATEGORY_RATIOS.food);
    const transport = Math.round(totalLocal * CATEGORY_RATIOS.transport);
    const activities = Math.round(totalLocal * CATEGORY_RATIOS.activities);
    const shopping = Math.round(totalLocal * CATEGORY_RATIOS.shopping);
    const misc = Math.round(totalLocal * CATEGORY_RATIOS.misc);

    // 항공권
    const flightPerPerson = includeFlights
      ? (FLIGHT_BASE_PRICES[slug ?? ""] ?? 1_000_000) * (multiplier > 1.5 ? 2.5 : multiplier > 0.8 ? 1 : 0.7)
      : 0;
    const flightTotal = Math.round(flightPerPerson * travelers);

    // 전체 합계
    const perPersonTotal = accommodation + food + transport + activities + shopping + misc + Math.round(flightPerPerson);
    const grandTotal = perPersonTotal * travelers;

    const styleLabels: Record<string, string> = {
      budget: "절약형",
      balanced: "일반형",
      comfort: "편안형",
      luxury: "럭셔리",
    };

    return {
      destination,
      countrySlug: slug ?? "unknown",
      days,
      travelers,
      style: styleLabels[style] ?? style,
      currency: "KRW",
      perPerson: {
        daily: dailyBudget,
        accommodation,
        food,
        transport,
        activities,
        shopping,
        misc,
        flights: Math.round(flightPerPerson),
        subtotal: perPersonTotal,
      },
      total: {
        accommodation: accommodation * travelers,
        food: food * travelers,
        transport: transport * travelers,
        activities: activities * travelers,
        shopping: shopping * travelers,
        misc: misc * travelers,
        flights: flightTotal,
        grandTotal,
      },
      formatted: {
        perPersonDaily: formatKRW(dailyBudget),
        perPersonTotal: formatKRW(perPersonTotal),
        grandTotal: formatKRW(grandTotal),
        flights: formatKRW(flightTotal),
      },
      countryInfo: country
        ? {
            currency: country.currency,
            visa: country.visa,
            recommendedDays: country.recommendedDays,
            bestSeason: country.bestSeason,
          }
        : null,
      note: "예산은 참고용 추정치입니다. 시즌, 예약 시기, 환율에 따라 달라질 수 있습니다.",
    };
  },
});
