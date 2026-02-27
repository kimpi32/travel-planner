import { countryDetails } from "@/data/country-details";
import { cityDetails } from "@/data/city-details";

// ── IATA 공항 코드 맵 (도시 → IATA 코드) ──────────────────────────────────
export const IATA_CODES: Record<string, string> = {
  // 한국
  서울: "ICN",
  인천: "ICN",
  김포: "GMP",
  부산: "PUS",
  제주: "CJU",
  // 일본
  도쿄: "NRT",
  Tokyo: "NRT",
  오사카: "KIX",
  Osaka: "KIX",
  삿포로: "CTS",
  후쿠오카: "FUK",
  나고야: "NGO",
  오키나와: "OKA",
  // 중국
  베이징: "PEK",
  Beijing: "PEK",
  상하이: "PVG",
  Shanghai: "PVG",
  광저우: "CAN",
  청두: "CTU",
  // 동남아시아
  방콕: "BKK",
  Bangkok: "BKK",
  싱가포르: "SIN",
  Singapore: "SIN",
  쿠알라룸푸르: "KUL",
  "Kuala Lumpur": "KUL",
  하노이: "HAN",
  Hanoi: "HAN",
  호치민: "SGN",
  "Ho Chi Minh": "SGN",
  발리: "DPS",
  Bali: "DPS",
  세부: "CEB",
  마닐라: "MNL",
  Manila: "MNL",
  프놈펜: "PNH",
  씨엠립: "REP",
  // 대만
  타이베이: "TPE",
  Taipei: "TPE",
  // 인도
  뉴델리: "DEL",
  "New Delhi": "DEL",
  뭄바이: "BOM",
  Mumbai: "BOM",
  // 유럽
  파리: "CDG",
  Paris: "CDG",
  런던: "LHR",
  London: "LHR",
  암스테르담: "AMS",
  Amsterdam: "AMS",
  프랑크푸르트: "FRA",
  Frankfurt: "FRA",
  뮌헨: "MUC",
  Munich: "MUC",
  베를린: "BER",
  Berlin: "BER",
  로마: "FCO",
  Rome: "FCO",
  바르셀로나: "BCN",
  Barcelona: "BCN",
  마드리드: "MAD",
  Madrid: "MAD",
  취리히: "ZRH",
  Zurich: "ZRH",
  비엔나: "VIE",
  Wien: "VIE",
  Vienna: "VIE",
  이스탄불: "IST",
  Istanbul: "IST",
  // 중동
  두바이: "DXB",
  Dubai: "DXB",
  도하: "DOH",
  아부다비: "AUH",
  // 미주
  뉴욕: "JFK",
  "New York": "JFK",
  로스앤젤레스: "LAX",
  "Los Angeles": "LAX",
  시카고: "ORD",
  시드니: "SYD",
  Sydney: "SYD",
  멜버른: "MEL",
  Melbourne: "MEL",
};

// ── 국가명 → slug 매핑 ────────────────────────────────────────────────────
const COUNTRY_NAME_MAP: Record<string, string> = {
  // 동아시아
  일본: "japan",
  Japan: "japan",
  중국: "china",
  China: "china",
  대만: "taiwan",
  Taiwan: "taiwan",
  몽골: "mongolia",
  Mongolia: "mongolia",
  // 동남아시아
  태국: "thailand",
  Thailand: "thailand",
  베트남: "vietnam",
  Vietnam: "vietnam",
  인도네시아: "indonesia",
  Indonesia: "indonesia",
  필리핀: "philippines",
  Philippines: "philippines",
  말레이시아: "malaysia",
  Malaysia: "malaysia",
  싱가포르: "singapore",
  Singapore: "singapore",
  캄보디아: "cambodia",
  Cambodia: "cambodia",
  // 남아시아
  인도: "india",
  India: "india",
  네팔: "nepal",
  Nepal: "nepal",
  스리랑카: "sri-lanka",
  "Sri Lanka": "sri-lanka",
  // 중앙아시아
  우즈베키스탄: "uzbekistan",
  Uzbekistan: "uzbekistan",
  카자흐스탄: "kazakhstan",
  Kazakhstan: "kazakhstan",
  // 서유럽
  프랑스: "france",
  France: "france",
  영국: "uk",
  UK: "uk",
  "United Kingdom": "uk",
  네덜란드: "netherlands",
  Netherlands: "netherlands",
  벨기에: "belgium",
  Belgium: "belgium",
  아일랜드: "ireland",
  Ireland: "ireland",
  룩셈부르크: "luxembourg",
  Luxembourg: "luxembourg",
  // 중부유럽
  독일: "germany",
  Germany: "germany",
  오스트리아: "austria",
  Austria: "austria",
  스위스: "switzerland",
  Switzerland: "switzerland",
  체코: "czechia",
  Czechia: "czechia",
  폴란드: "poland",
  Poland: "poland",
  헝가리: "hungary",
  Hungary: "hungary",
  // 남부유럽
  이탈리아: "italy",
  Italy: "italy",
  스페인: "spain",
  Spain: "spain",
  포르투갈: "portugal",
  Portugal: "portugal",
  그리스: "greece",
  Greece: "greece",
  몰타: "malta",
  Malta: "malta",
  // 북부유럽
  노르웨이: "norway",
  Norway: "norway",
  스웨덴: "sweden",
  Sweden: "sweden",
  핀란드: "finland",
  Finland: "finland",
  덴마크: "denmark",
  Denmark: "denmark",
  아이슬란드: "iceland",
  Iceland: "iceland",
  // 발칸
  크로아티아: "croatia",
  Croatia: "croatia",
  슬로베니아: "slovenia",
  Slovenia: "slovenia",
  // 중동
  터키: "turkey",
  Turkey: "turkey",
  조지아: "georgia",
  Georgia: "georgia",
  UAE: "uae",
  "아랍에미리트": "uae",
  두바이: "uae",
  이스라엘: "israel",
  Israel: "israel",
  요르단: "jordan",
  Jordan: "jordan",
  오만: "oman",
  Oman: "oman",
};

/**
 * 한국어/영어 여행지 명칭 → 국가 slug 반환
 */
export function findCountrySlug(destination: string): string | undefined {
  // 직접 매핑 확인
  if (COUNTRY_NAME_MAP[destination]) return COUNTRY_NAME_MAP[destination];

  // 대소문자 무시 검색
  const lower = destination.toLowerCase();
  for (const [key, slug] of Object.entries(COUNTRY_NAME_MAP)) {
    if (key.toLowerCase() === lower) return slug;
  }

  // countryDetails 키에서 검색
  if (countryDetails[lower]) return lower;

  // 부분 매칭 (예: "도쿄" → "japan")
  const partial = Object.entries(COUNTRY_NAME_MAP).find(([key]) =>
    key.toLowerCase().includes(lower) || lower.includes(key.toLowerCase())
  );
  return partial?.[1];
}

/**
 * 국가 slug와 도시명으로 cityDetails 키 찾기
 * cityDetails key 형식: "countrySlug/regionSlug/citySlug"
 */
export function findCityKey(countrySlug: string, cityName: string): string | undefined {
  const lower = cityName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  // cityDetails 키 탐색
  const keys = Object.keys(cityDetails);
  const prefix = `${countrySlug}/`;

  // 정확한 도시 slug 매칭
  for (const key of keys) {
    if (!key.startsWith(prefix)) continue;
    const parts = key.split("/");
    if (parts.length < 3) continue;
    const citySlug = parts[2];
    if (citySlug === lower || citySlug.includes(lower) || lower.includes(citySlug)) {
      return key;
    }
  }

  // 한국어 도시명으로 countryDetails.regions.cities 검색
  const country = countryDetails[countrySlug];
  if (!country) return undefined;

  for (const region of country.regions) {
    for (const city of region.cities) {
      const nameMatch =
        city.name === cityName ||
        city.nameEn.toLowerCase() === cityName.toLowerCase() ||
        city.nameEn.toLowerCase().replace(/\s+/g, "-") === lower;
      if (nameMatch) {
        // 슬러그 생성
        const citySlug = city.nameEn
          .toLowerCase()
          .replace(/ä/g, "ae")
          .replace(/ö/g, "oe")
          .replace(/ü/g, "ue")
          .replace(/ß/g, "ss")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        const candidateKey = `${countrySlug}/${region.slug}/${citySlug}`;
        if (cityDetails[candidateKey]) return candidateKey;
      }
    }
  }
  return undefined;
}

/**
 * 금액을 "만원" 단위로 포맷
 */
export function formatKRW(amount: number): string {
  if (amount >= 100_000_000) {
    const uk = amount / 100_000_000;
    return `${uk % 1 === 0 ? uk : uk.toFixed(1)}억원`;
  }
  if (amount >= 10_000) {
    const man = amount / 10_000;
    return `${man % 1 === 0 ? man : man.toFixed(1)}만원`;
  }
  return `${amount.toLocaleString("ko-KR")}원`;
}

/**
 * dailyBudget 문자열에서 평균값(원) 추출
 * 예: "약 10~15만원" → 125000
 */
export function parseDailyBudget(budgetStr: string): number {
  // 숫자 추출
  const nums = budgetStr.match(/[\d.]+/g);
  if (!nums || nums.length === 0) return 100_000; // 기본값

  const values = nums.map(Number);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  // "만원" 포함 여부 확인
  if (budgetStr.includes("만원") || budgetStr.includes("만 원")) {
    return avg * 10_000;
  }
  return avg;
}
