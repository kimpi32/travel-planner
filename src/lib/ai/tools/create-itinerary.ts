import { tool } from "ai";
import { createItinerarySchema } from "./schemas";
import { countryDetails } from "@/data/country-details";
import { cityDetails } from "@/data/city-details";
import { findCityKey } from "./utils";

type TimeSlot = "오전" | "점심" | "오후" | "저녁" | "야간";

interface Activity {
  time: string;
  title: string;
  description: string;
  category: string;
  tip?: string;
}

interface DayPlan {
  day: number;
  theme: string;
  activities: Activity[];
}

const MORNING_SLOTS = ["09:00", "10:00", "10:30"];
const AFTERNOON_SLOTS = ["13:00", "14:30", "16:00"];
const EVENING_SLOTS = ["18:30", "20:00"];

function buildDayPlan(day: number, cityKey: string | undefined, country: any | undefined, dayLabel: string): DayPlan {
  const cityDetail = cityKey ? cityDetails[cityKey] : undefined;

  const activities: Activity[] = [];

  if (day === 1) {
    activities.push({
      time: "13:00",
      title: "도착 & 체크인",
      description: "공항에서 숙소로 이동 후 체크인. 가볍게 주변을 탐색합니다.",
      category: "transport",
    });
    if (cityDetail?.stayArea) {
      activities.push({
        time: "15:00",
        title: `숙소 주변 산책 (${cityDetail.stayArea})`,
        description: `추천 숙박 지역: ${cityDetail.stayArea}. 첫날은 시차 적응을 위해 가볍게 탐방합니다.`,
        category: "activity",
      });
    }
    const firstFood = cityDetail?.localFood?.[0];
    if (firstFood) {
      activities.push({
        time: "19:00",
        title: `현지 저녁 식사: ${firstFood.name} ${firstFood.emoji}`,
        description: firstFood.description,
        category: "food",
      });
    }
    return { day, theme: dayLabel, activities };
  }

  // 주요 명소 배치
  const attractions = cityDetail?.attractions ?? [];
  const attrIdx = (day - 2) * 3;

  const morningAttr = attractions[attrIdx];
  const afternoonAttr = attractions[attrIdx + 1];
  const lateAttr = attractions[attrIdx + 2];

  if (morningAttr) {
    activities.push({
      time: MORNING_SLOTS[0],
      title: morningAttr.name,
      description: morningAttr.description,
      category: "activity",
      tip: morningAttr.tip,
    });
  } else if (cityDetail?.districts?.[day - 2]) {
    const district = cityDetail.districts[day - 2];
    activities.push({
      time: MORNING_SLOTS[0],
      title: `${district.name} 지구 탐방`,
      description: district.description,
      category: "activity",
    });
  }

  // 점심
  const foodIdx = day % (cityDetail?.localFood?.length || 1);
  const lunch = cityDetail?.localFood?.[foodIdx];
  if (lunch) {
    activities.push({
      time: "12:30",
      title: `점심: ${lunch.name} ${lunch.emoji}`,
      description: lunch.description,
      category: "food",
    });
  } else if (country?.foods?.[day % country.foods.length]) {
    const food = country.foods[day % country.foods.length];
    activities.push({
      time: "12:30",
      title: `점심: ${food.name} ${food.emoji}`,
      description: food.description,
      category: "food",
    });
  }

  if (afternoonAttr) {
    activities.push({
      time: AFTERNOON_SLOTS[0],
      title: afternoonAttr.name,
      description: afternoonAttr.description,
      category: "activity",
      tip: afternoonAttr.tip,
    });
  }

  if (lateAttr) {
    activities.push({
      time: AFTERNOON_SLOTS[2],
      title: lateAttr.name,
      description: lateAttr.description,
      category: "activity",
    });
  }

  // 저녁
  const dinnerFood = cityDetail?.localFood?.[(day + 1) % (cityDetail?.localFood?.length || 1)];
  if (dinnerFood) {
    activities.push({
      time: EVENING_SLOTS[0],
      title: `저녁: ${dinnerFood.name} ${dinnerFood.emoji}`,
      description: dinnerFood.description,
      category: "food",
    });
  }

  return { day, theme: dayLabel, activities };
}

export const createItineraryTool = tool({
  description:
    "여행 일정표를 생성합니다. 도시의 실제 명소 데이터를 기반으로 Day-by-Day 상세 일정을 만들어 드립니다.",
  inputSchema: createItinerarySchema,
  execute: async ({ destination, countrySlug, days, travelers, style, interests }) => {
    const country = countryDetails[countrySlug];

    // 도시 키 찾기
    const cityKey = findCityKey(countrySlug, destination);
    const cityDetail = cityKey ? cityDetails[cityKey] : undefined;

    // 일정 테마 생성
    const themes = [
      "도착 & 첫 탐방",
      ...Array.from({ length: days - 2 }, (_, i) => {
        const labels = [
          "역사 & 문화 탐방",
          "자연 & 힐링",
          "음식 & 쇼핑",
          "예술 & 박물관",
          "근교 당일치기",
          "로컬 체험",
          "자유 일정",
        ];
        return labels[i % labels.length];
      }),
      "마지막 날 & 귀국",
    ];

    const itinerary: DayPlan[] = [];

    for (let d = 1; d <= days; d++) {
      if (d === days) {
        // 마지막 날
        itinerary.push({
          day: d,
          theme: "마지막 날 & 귀국",
          activities: [
            {
              time: "08:00",
              title: "체크아웃 & 기념품 쇼핑",
              description: "호텔 체크아웃 후 공항 면세점 또는 현지 기념품 구매.",
              category: "shopping",
            },
            {
              time: "11:00",
              title: "공항 이동",
              description: "국제선은 최소 3시간 전 공항 도착 권장.",
              category: "transport",
            },
          ],
        });
      } else {
        itinerary.push(buildDayPlan(d, cityKey, country, themes[d - 1] ?? `Day ${d}`));
      }
    }

    // 근교 여행 (cityDetail이 있는 경우)
    const dayTrips = cityDetail?.dayTrips ?? [];

    return {
      destination,
      countrySlug,
      days,
      travelers,
      style,
      interests: interests ?? [],
      itinerary,
      cityInfo: cityDetail
        ? {
            description: cityDetail.description,
            bestTime: cityDetail.bestTime,
            stayArea: cityDetail.stayArea,
            transport: cityDetail.transport,
          }
        : null,
      recommendedDayTrips: dayTrips.slice(0, 3).map((dt) => ({
        name: dt.name,
        description: dt.description,
        travelTime: dt.travelTime,
      })),
      travelTips: [
        ...(cityDetail?.tips ?? []).slice(0, 3),
        ...(country?.tips ?? []).slice(0, 2),
      ],
      note: "일정은 현지 상황에 따라 유연하게 조정하세요. 주요 명소는 사전 예약을 권장합니다.",
    };
  },
});
