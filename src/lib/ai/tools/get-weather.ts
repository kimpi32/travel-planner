import { tool } from "ai";
import { getWeatherSchema } from "./schemas";

// 국가/지역별 월별 기후 데이터 (평균 기온 °C, 강수 확률 %)
const WEATHER_DATA: Record<
  string,
  {
    monthly: Array<{ avgTemp: number; minTemp: number; maxTemp: number; rainfall: number; condition: string }>;
    climate: string;
  }
> = {
  JP: {
    climate: "온대 계절풍",
    monthly: [
      { avgTemp: 5, minTemp: 1, maxTemp: 10, rainfall: 30, condition: "맑음/쌀쌀" },
      { avgTemp: 6, minTemp: 2, maxTemp: 11, rainfall: 30, condition: "맑음/쌀쌀" },
      { avgTemp: 10, minTemp: 5, maxTemp: 15, rainfall: 35, condition: "벚꽃 시즌/온화" },
      { avgTemp: 16, minTemp: 10, maxTemp: 22, rainfall: 45, condition: "벚꽃/따뜻" },
      { avgTemp: 21, minTemp: 15, maxTemp: 27, rainfall: 50, condition: "따뜻/맑음" },
      { avgTemp: 24, minTemp: 19, maxTemp: 30, rainfall: 60, condition: "장마" },
      { avgTemp: 28, minTemp: 23, maxTemp: 33, rainfall: 40, condition: "더위/맑음" },
      { avgTemp: 29, minTemp: 24, maxTemp: 34, rainfall: 55, condition: "더위/태풍 주의" },
      { avgTemp: 25, minTemp: 20, maxTemp: 30, rainfall: 60, condition: "단풍 시작/온화" },
      { avgTemp: 19, minTemp: 13, maxTemp: 25, rainfall: 40, condition: "단풍/쾌청" },
      { avgTemp: 13, minTemp: 7, maxTemp: 18, rainfall: 35, condition: "서늘/맑음" },
      { avgTemp: 8, minTemp: 3, maxTemp: 13, rainfall: 30, condition: "쌀쌀/맑음" },
    ],
  },
  FR: {
    climate: "온대 해양성/지중해성",
    monthly: [
      { avgTemp: 5, minTemp: 1, maxTemp: 9, rainfall: 45, condition: "서늘/흐림" },
      { avgTemp: 6, minTemp: 2, maxTemp: 10, rainfall: 40, condition: "서늘/가끔 비" },
      { avgTemp: 10, minTemp: 5, maxTemp: 15, rainfall: 40, condition: "온화/변덕" },
      { avgTemp: 14, minTemp: 8, maxTemp: 20, rainfall: 45, condition: "봄/쾌청" },
      { avgTemp: 18, minTemp: 12, maxTemp: 24, rainfall: 50, condition: "따뜻/맑음" },
      { avgTemp: 22, minTemp: 16, maxTemp: 28, rainfall: 40, condition: "여름/쾌청" },
      { avgTemp: 24, minTemp: 18, maxTemp: 30, rainfall: 30, condition: "성수기/맑음" },
      { avgTemp: 24, minTemp: 18, maxTemp: 30, rainfall: 35, condition: "여름/맑음" },
      { avgTemp: 20, minTemp: 14, maxTemp: 26, rainfall: 45, condition: "가을/쾌청" },
      { avgTemp: 15, minTemp: 9, maxTemp: 21, rainfall: 55, condition: "가을/가끔 비" },
      { avgTemp: 9, minTemp: 4, maxTemp: 14, rainfall: 55, condition: "서늘/흐림" },
      { avgTemp: 6, minTemp: 2, maxTemp: 10, rainfall: 50, condition: "쌀쌀/흐림" },
    ],
  },
  DE: {
    climate: "온대 대륙성",
    monthly: [
      { avgTemp: 2, minTemp: -2, maxTemp: 6, rainfall: 45, condition: "겨울/흐림" },
      { avgTemp: 3, minTemp: -1, maxTemp: 7, rainfall: 40, condition: "겨울/흐림" },
      { avgTemp: 8, minTemp: 2, maxTemp: 13, rainfall: 40, condition: "봄/변덕" },
      { avgTemp: 13, minTemp: 7, maxTemp: 19, rainfall: 45, condition: "봄/맑음" },
      { avgTemp: 18, minTemp: 11, maxTemp: 24, rainfall: 50, condition: "초여름/쾌청" },
      { avgTemp: 21, minTemp: 14, maxTemp: 27, rainfall: 60, condition: "여름/소나기" },
      { avgTemp: 23, minTemp: 16, maxTemp: 29, rainfall: 55, condition: "여름/맑음" },
      { avgTemp: 23, minTemp: 16, maxTemp: 29, rainfall: 50, condition: "여름/소나기" },
      { avgTemp: 18, minTemp: 11, maxTemp: 25, rainfall: 45, condition: "가을/쾌청" },
      { avgTemp: 13, minTemp: 7, maxTemp: 18, rainfall: 50, condition: "가을/흐림" },
      { avgTemp: 7, minTemp: 3, maxTemp: 11, rainfall: 50, condition: "초겨울/흐림" },
      { avgTemp: 3, minTemp: -1, maxTemp: 7, rainfall: 45, condition: "겨울/흐림" },
    ],
  },
  TH: {
    climate: "열대 몬순",
    monthly: [
      { avgTemp: 27, minTemp: 22, maxTemp: 32, rainfall: 10, condition: "건기/맑음" },
      { avgTemp: 29, minTemp: 24, maxTemp: 34, rainfall: 10, condition: "건기/덥고 맑음" },
      { avgTemp: 31, minTemp: 25, maxTemp: 36, rainfall: 20, condition: "더위/맑음" },
      { avgTemp: 33, minTemp: 27, maxTemp: 39, rainfall: 30, condition: "매우 더움" },
      { avgTemp: 32, minTemp: 26, maxTemp: 37, rainfall: 50, condition: "우기 시작" },
      { avgTemp: 31, minTemp: 26, maxTemp: 35, rainfall: 70, condition: "우기/소나기" },
      { avgTemp: 30, minTemp: 25, maxTemp: 34, rainfall: 75, condition: "우기/소나기" },
      { avgTemp: 30, minTemp: 25, maxTemp: 34, rainfall: 80, condition: "우기" },
      { avgTemp: 30, minTemp: 25, maxTemp: 34, rainfall: 80, condition: "우기" },
      { avgTemp: 29, minTemp: 24, maxTemp: 33, rainfall: 70, condition: "우기 후반" },
      { avgTemp: 28, minTemp: 23, maxTemp: 32, rainfall: 30, condition: "건기 시작" },
      { avgTemp: 27, minTemp: 22, maxTemp: 31, rainfall: 10, condition: "건기/맑음" },
    ],
  },
  SG: {
    climate: "적도 열대",
    monthly: [
      { avgTemp: 26, minTemp: 23, maxTemp: 30, rainfall: 65, condition: "열대/소나기" },
      { avgTemp: 27, minTemp: 23, maxTemp: 31, rainfall: 55, condition: "열대/소나기" },
      { avgTemp: 27, minTemp: 24, maxTemp: 31, rainfall: 55, condition: "열대/맑음" },
      { avgTemp: 28, minTemp: 24, maxTemp: 32, rainfall: 60, condition: "열대/더움" },
      { avgTemp: 28, minTemp: 24, maxTemp: 32, rainfall: 65, condition: "열대/소나기" },
      { avgTemp: 28, minTemp: 24, maxTemp: 32, rainfall: 60, condition: "열대/소나기" },
      { avgTemp: 28, minTemp: 24, maxTemp: 32, rainfall: 55, condition: "열대/맑음" },
      { avgTemp: 28, minTemp: 24, maxTemp: 32, rainfall: 55, condition: "열대/맑음" },
      { avgTemp: 28, minTemp: 24, maxTemp: 32, rainfall: 60, condition: "열대/소나기" },
      { avgTemp: 27, minTemp: 24, maxTemp: 31, rainfall: 65, condition: "열대/소나기" },
      { avgTemp: 27, minTemp: 23, maxTemp: 31, rainfall: 70, condition: "열대/소나기" },
      { avgTemp: 26, minTemp: 23, maxTemp: 30, rainfall: 70, condition: "열대/소나기" },
    ],
  },
  GB: {
    climate: "온대 해양성",
    monthly: [
      { avgTemp: 5, minTemp: 2, maxTemp: 8, rainfall: 60, condition: "겨울/흐림" },
      { avgTemp: 5, minTemp: 2, maxTemp: 9, rainfall: 55, condition: "겨울/흐림" },
      { avgTemp: 8, minTemp: 4, maxTemp: 12, rainfall: 50, condition: "봄/변덕" },
      { avgTemp: 11, minTemp: 6, maxTemp: 16, rainfall: 45, condition: "봄/맑음" },
      { avgTemp: 15, minTemp: 9, maxTemp: 20, rainfall: 45, condition: "따뜻/맑음" },
      { avgTemp: 18, minTemp: 12, maxTemp: 23, rainfall: 45, condition: "여름/맑음" },
      { avgTemp: 20, minTemp: 14, maxTemp: 25, rainfall: 40, condition: "성수기/맑음" },
      { avgTemp: 20, minTemp: 14, maxTemp: 25, rainfall: 45, condition: "여름/맑음" },
      { avgTemp: 17, minTemp: 11, maxTemp: 22, rainfall: 50, condition: "가을/쾌청" },
      { avgTemp: 13, minTemp: 8, maxTemp: 18, rainfall: 60, condition: "가을/비" },
      { avgTemp: 8, minTemp: 4, maxTemp: 13, rainfall: 60, condition: "초겨울/흐림" },
      { avgTemp: 6, minTemp: 2, maxTemp: 9, rainfall: 60, condition: "겨울/흐림" },
    ],
  },
  KR: {
    climate: "온대 계절풍",
    monthly: [
      { avgTemp: -2, minTemp: -7, maxTemp: 3, rainfall: 25, condition: "겨울/건조" },
      { avgTemp: 1, minTemp: -5, maxTemp: 6, rainfall: 30, condition: "겨울/건조" },
      { avgTemp: 7, minTemp: 1, maxTemp: 13, rainfall: 35, condition: "봄/맑음" },
      { avgTemp: 14, minTemp: 7, maxTemp: 20, rainfall: 50, condition: "봄/맑음" },
      { avgTemp: 20, minTemp: 13, maxTemp: 26, rainfall: 60, condition: "초여름" },
      { avgTemp: 24, minTemp: 18, maxTemp: 30, rainfall: 70, condition: "장마" },
      { avgTemp: 27, minTemp: 22, maxTemp: 33, rainfall: 65, condition: "폭염/소나기" },
      { avgTemp: 27, minTemp: 22, maxTemp: 33, rainfall: 60, condition: "폭염/소나기" },
      { avgTemp: 22, minTemp: 15, maxTemp: 28, rainfall: 50, condition: "가을/맑음" },
      { avgTemp: 15, minTemp: 8, maxTemp: 22, rainfall: 40, condition: "가을/쾌청" },
      { avgTemp: 7, minTemp: 1, maxTemp: 13, rainfall: 35, condition: "초겨울" },
      { avgTemp: 1, minTemp: -5, maxTemp: 7, rainfall: 20, condition: "겨울/건조" },
    ],
  },
  IT: {
    climate: "지중해성",
    monthly: [
      { avgTemp: 8, minTemp: 3, maxTemp: 13, rainfall: 50, condition: "겨울/흐림" },
      { avgTemp: 9, minTemp: 4, maxTemp: 14, rainfall: 45, condition: "겨울/맑음" },
      { avgTemp: 12, minTemp: 7, maxTemp: 17, rainfall: 45, condition: "봄/쾌청" },
      { avgTemp: 16, minTemp: 10, maxTemp: 22, rainfall: 50, condition: "봄/맑음" },
      { avgTemp: 21, minTemp: 14, maxTemp: 27, rainfall: 45, condition: "초여름/맑음" },
      { avgTemp: 25, minTemp: 18, maxTemp: 31, rainfall: 30, condition: "여름/맑음" },
      { avgTemp: 28, minTemp: 21, maxTemp: 34, rainfall: 15, condition: "성수기/덥고 맑음" },
      { avgTemp: 27, minTemp: 20, maxTemp: 33, rainfall: 20, condition: "여름/맑음" },
      { avgTemp: 23, minTemp: 16, maxTemp: 29, rainfall: 40, condition: "가을/쾌청" },
      { avgTemp: 18, minTemp: 11, maxTemp: 24, rainfall: 55, condition: "가을/가끔 비" },
      { avgTemp: 13, minTemp: 7, maxTemp: 18, rainfall: 55, condition: "가을/흐림" },
      { avgTemp: 9, minTemp: 4, maxTemp: 13, rainfall: 55, condition: "겨울/흐림" },
    ],
  },
  VN: {
    climate: "열대 몬순 (남/북 차이)",
    monthly: [
      { avgTemp: 17, minTemp: 13, maxTemp: 22, rainfall: 15, condition: "건기/서늘(북)/더움(남)" },
      { avgTemp: 19, minTemp: 15, maxTemp: 24, rainfall: 15, condition: "건기/맑음" },
      { avgTemp: 22, minTemp: 17, maxTemp: 27, rainfall: 20, condition: "따뜻/맑음" },
      { avgTemp: 26, minTemp: 21, maxTemp: 31, rainfall: 30, condition: "더움/맑음" },
      { avgTemp: 29, minTemp: 24, maxTemp: 34, rainfall: 50, condition: "더움/소나기" },
      { avgTemp: 30, minTemp: 25, maxTemp: 34, rainfall: 70, condition: "우기/소나기" },
      { avgTemp: 29, minTemp: 24, maxTemp: 33, rainfall: 70, condition: "우기" },
      { avgTemp: 29, minTemp: 24, maxTemp: 33, rainfall: 75, condition: "우기" },
      { avgTemp: 28, minTemp: 23, maxTemp: 32, rainfall: 65, condition: "우기 후반" },
      { avgTemp: 26, minTemp: 21, maxTemp: 30, rainfall: 50, condition: "건기 시작" },
      { avgTemp: 23, minTemp: 18, maxTemp: 28, rainfall: 25, condition: "건기/쾌청" },
      { avgTemp: 19, minTemp: 14, maxTemp: 24, rainfall: 15, condition: "건기/맑음" },
    ],
  },
};

// 기본 기후 데이터 (국가 코드 미지원 시)
const DEFAULT_WEATHER = {
  avgTemp: 20,
  minTemp: 15,
  maxTemp: 25,
  rainfall: 40,
  condition: "온화",
  climate: "미지원 지역",
};

const MONTH_NAMES = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

export const getWeatherTool = tool({
  description:
    "여행지의 날씨 정보를 조회합니다. 도시명과 국가 코드, 방문 예정 월을 입력하면 기온, 강수 확률, 여행 적합성 등을 알려줍니다.",
  inputSchema: getWeatherSchema,
  execute: async ({ city, country, month }) => {
    const targetMonth = month ?? new Date().getMonth() + 1;
    const monthIndex = targetMonth - 1;

    const countryData = WEATHER_DATA[country.toUpperCase()];
    const monthData = countryData?.monthly?.[monthIndex];

    if (!monthData) {
      return {
        city,
        country,
        month: MONTH_NAMES[monthIndex],
        ...DEFAULT_WEATHER,
        travelTip: "현지 날씨 예보를 출발 전 확인하세요.",
        packingTips: ["편한 복장", "우산 또는 우비"],
        source: "기본 데이터 (실제 날씨와 다를 수 있음)",
      };
    }

    // 여행 추천도 계산
    const travelScore = computeTravelScore(monthData.avgTemp, monthData.rainfall);

    const packingTips = buildPackingTips(monthData.avgTemp, monthData.rainfall);

    return {
      city,
      country,
      month: MONTH_NAMES[monthIndex],
      climate: countryData.climate,
      avgTemp: monthData.avgTemp,
      minTemp: monthData.minTemp,
      maxTemp: monthData.maxTemp,
      rainfallProbability: monthData.rainfall,
      condition: monthData.condition,
      travelScore: travelScore.score,
      travelScoreLabel: travelScore.label,
      packingTips,
      source: "기상 통계 데이터 (실제 날씨와 다를 수 있음)",
    };
  },
});

function computeTravelScore(avgTemp: number, rainfall: number): { score: number; label: string } {
  // 기온 점수: 15~25도가 최적
  const tempScore = avgTemp >= 15 && avgTemp <= 25
    ? 10
    : avgTemp >= 10 && avgTemp < 15
    ? 7
    : avgTemp > 25 && avgTemp <= 32
    ? 7
    : avgTemp >= 5 && avgTemp < 10
    ? 5
    : 3;

  // 강수 점수: 낮을수록 좋음
  const rainScore = rainfall <= 20 ? 10 : rainfall <= 40 ? 8 : rainfall <= 60 ? 6 : rainfall <= 75 ? 4 : 2;

  const score = Math.round((tempScore + rainScore) / 2);
  const label = score >= 9 ? "최고" : score >= 7 ? "좋음" : score >= 5 ? "보통" : "비추천";
  return { score, label };
}

function buildPackingTips(avgTemp: number, rainfall: number): string[] {
  const tips: string[] = [];
  if (avgTemp < 5) tips.push("두꺼운 패딩/코트", "장갑과 모자", "방한 속옷");
  else if (avgTemp < 12) tips.push("가벼운 패딩/재킷", "긴 바지");
  else if (avgTemp < 20) tips.push("가디건/얇은 재킷", "레이어드 복장");
  else if (avgTemp < 28) tips.push("반소매/반바지", "가벼운 겉옷");
  else tips.push("통기성 좋은 여름옷", "선크림/선글라스", "물통");

  if (rainfall > 50) tips.push("우산 또는 우비 필수");
  else if (rainfall > 30) tips.push("접이식 우산 추천");

  return tips;
}
