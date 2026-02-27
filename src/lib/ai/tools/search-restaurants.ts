import { tool } from "ai";
import { searchRestaurantsSchema } from "./schemas";
import { countryDetails } from "@/data/country-details";
import { cityDetails } from "@/data/city-details";
import { findCountrySlug, findCityKey } from "./utils";

interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  priceRangeKRW: string;
  description: string;
  mustOrder: string;
  tip?: string;
  rating?: string;
}

const PRICE_RANGE_LABELS: Record<string, string> = {
  budget: "1만원 이하",
  mid: "1~3만원",
  upscale: "3~7만원",
  fine: "7만원 이상",
};

// 국가별 대표 레스토랑 스타일 (실제 데이터가 없을 때 생성용)
const CUISINE_TEMPLATES: Record<string, Array<{ type: string; name: string; description: string; mustOrder: string }>> = {
  japan: [
    { type: "스시", name: "에도마에 스시", description: "신선한 제철 재료로 만든 전통 에도마에 스시 레스토랑", mustOrder: "오마카세 코스" },
    { type: "라멘", name: "토리유 라멘", description: "진한 닭고기 육수 기반의 정통 도쿄 스타일 라멘 전문점", mustOrder: "쇼유 라멘" },
    { type: "이자카야", name: "현지 이자카야", description: "일본식 술집 겸 식당으로 다양한 안주와 사케를 즐기는 곳", mustOrder: "야키토리, 에다마메" },
    { type: "텐동", name: "텐동 전문점", description: "바삭한 튀김을 얹은 덮밥 전문점", mustOrder: "새우 텐동" },
    { type: "야키니쿠", name: "야키니쿠 하우스", description: "일본식 고기구이 전문점", mustOrder: "와규 카루비" },
  ],
  france: [
    { type: "브라스리", name: "파리지앵 브라스리", description: "파리 전통 스타일의 프랑스 가정식 레스토랑", mustOrder: "스테이크 타르타르, 크렘 브륄레" },
    { type: "비스트로", name: "로컬 비스트로", description: "합리적인 가격의 파리 전통 비스트로", mustOrder: "크로크 무슈, 오 뇨뇨" },
    { type: "파티스리", name: "아르티잔 파티스리", description: "현지 장인이 만드는 수제 케이크와 페이스트리", mustOrder: "에클레어, 크로와상" },
    { type: "카페", name: "파리 카페", description: "테라스에서 커피와 함께 파리 일상을 즐기는 곳", mustOrder: "카페 오 레, 크루아상" },
  ],
  germany: [
    { type: "비어가르텐", name: "바이에른 비어가르텐", description: "야외에서 맥주와 전통 안주를 즐기는 바이에른 스타일", mustOrder: "바이스부어스트, 브레첼" },
    { type: "레스토랑", name: "독일 전통 레스토랑", description: "돼지 슈바인스학세와 감자 요리를 즐기는 전통 음식점", mustOrder: "슈바인스학세, 자우어크라우트" },
    { type: "소시지 전문점", name: "뷔르스텔 전문점", description: "독일 각 지역의 다양한 소시지를 파는 전문점", mustOrder: "뮌헨 소시지, 부어스트" },
  ],
  thailand: [
    { type: "태국 레스토랑", name: "로컬 타이 레스토랑", description: "현지인이 즐겨 찾는 진짜 태국 음식점", mustOrder: "팟타이, 그린커리" },
    { type: "길거리 음식", name: "나이트마켓 푸드코트", description: "다양한 태국 길거리 음식을 한곳에서 즐기는 야시장", mustOrder: "카오만카이, 마사만 커리" },
    { type: "씨푸드", name: "해산물 레스토랑", description: "신선한 해산물을 태국 스타일로 즐기는 곳", mustOrder: "쪽 새우 버터구이" },
  ],
  italy: [
    { type: "트라토리아", name: "이탈리아 트라토리아", description: "가족이 운영하는 전통 이탈리아 가정식 레스토랑", mustOrder: "까르보나라, 마르게리타 피자" },
    { type: "젤라테리아", name: "아르티잔 젤라테리아", description: "수제 젤라토 전문점", mustOrder: "피스타치오 젤라토" },
    { type: "피체리아", name: "나폴리탄 피체리아", description: "나폴리 전통 방식의 장작 화덕 피자 전문점", mustOrder: "마르게리타, 마리나라" },
  ],
};

function generateRestaurants(
  country: (typeof countryDetails)[string] | undefined,
  cityKey: string | undefined,
  countrySlug: string,
  priceRange: string,
  cuisineFilter: string | undefined,
  count: number
): Restaurant[] {
  const results: Restaurant[] = [];

  // 도시 localFood 데이터 활용
  const cityDetail = cityKey ? cityDetails[cityKey] : undefined;
  const localFoods = cityDetail?.localFood ?? [];

  for (const food of localFoods) {
    if (results.length >= count) break;
    if (cuisineFilter && !food.name.includes(cuisineFilter) && !food.description.includes(cuisineFilter)) {
      continue;
    }

    results.push({
      name: `${food.emoji} ${food.name} 전문점`,
      cuisine: food.name,
      priceRange: PRICE_RANGE_LABELS[priceRange] ?? priceRange,
      priceRangeKRW: PRICE_RANGE_LABELS[priceRange],
      description: food.description,
      mustOrder: food.name,
      rating: `${(4.0 + Math.random() * 0.8).toFixed(1)}/5.0`,
    });
  }

  // countryDetails.foods 활용
  const countryFoods = country?.foods ?? [];
  for (const food of countryFoods) {
    if (results.length >= count) break;
    if (cuisineFilter && !food.name.includes(cuisineFilter) && !food.description.includes(cuisineFilter)) {
      continue;
    }

    results.push({
      name: `${food.emoji} ${food.name} 레스토랑`,
      cuisine: food.name,
      priceRange: PRICE_RANGE_LABELS[priceRange] ?? priceRange,
      priceRangeKRW: PRICE_RANGE_LABELS[priceRange],
      description: food.description,
      mustOrder: food.name,
      rating: `${(4.0 + Math.random() * 0.8).toFixed(1)}/5.0`,
    });
  }

  // 부족하면 템플릿 사용
  const templates = CUISINE_TEMPLATES[countrySlug] ?? [];
  for (const tmpl of templates) {
    if (results.length >= count) break;
    if (cuisineFilter && !tmpl.type.includes(cuisineFilter) && !tmpl.description.includes(cuisineFilter)) {
      continue;
    }

    results.push({
      name: tmpl.name,
      cuisine: tmpl.type,
      priceRange: PRICE_RANGE_LABELS[priceRange] ?? priceRange,
      priceRangeKRW: PRICE_RANGE_LABELS[priceRange],
      description: tmpl.description,
      mustOrder: tmpl.mustOrder,
      rating: `${(4.0 + Math.random() * 0.8).toFixed(1)}/5.0`,
    });
  }

  // 여전히 부족하면 기본 추천 추가
  if (results.length === 0) {
    results.push({
      name: "현지 맛집 탐방",
      cuisine: "현지식",
      priceRange: PRICE_RANGE_LABELS[priceRange],
      priceRangeKRW: PRICE_RANGE_LABELS[priceRange],
      description: "현지인이 즐겨 찾는 골목 맛집. 구글 지도나 트립어드바이저로 찾아보세요.",
      mustOrder: "오늘의 추천 메뉴",
    });
  }

  return results.slice(0, count);
}

export const searchRestaurantsTool = tool({
  description:
    "여행지의 맛집과 현지 음식을 추천합니다. 도시 고유의 로컬 푸드 데이터를 기반으로 음식 종류, 가격대에 맞는 레스토랑을 안내합니다.",
  inputSchema: searchRestaurantsSchema,
  execute: async ({ city, countrySlug, cuisine, priceRange, count }) => {
    const country = countryDetails[countrySlug];
    const cityKey = findCityKey(countrySlug, city);

    const restaurants = generateRestaurants(country, cityKey, countrySlug, priceRange, cuisine, count);

    // 음식 관련 팁
    const foodTips = [
      ...(country?.tips?.filter((t) =>
        t.includes("음식") || t.includes("식당") || t.includes("맥주") || t.includes("팁") || t.includes("현금")
      ) ?? []),
    ].slice(0, 3);

    return {
      city,
      countrySlug,
      priceRange: PRICE_RANGE_LABELS[priceRange],
      cuisine: cuisine ?? "전체",
      restaurants,
      generalFoodTips: foodTips.length > 0 ? foodTips : [
        "현지 시장이나 야시장에서 길거리 음식을 즐겨보세요.",
        "구글 지도 리뷰와 별점을 참고하면 좋습니다.",
        "점심 세트메뉴를 이용하면 저렴하게 현지 음식을 즐길 수 있습니다.",
      ],
      note: "레스토랑 정보는 참고용입니다. 실제 방문 전 영업 여부를 확인하세요.",
    };
  },
});
