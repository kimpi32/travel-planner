import { tool } from "ai";
import { searchFlightsSchema } from "./schemas";
import { IATA_CODES } from "./utils";

// 주요 노선별 기본 항공권 가격(원) 및 비행시간 (편도 기준)
const ROUTE_DATA: Record<
  string,
  { basePrice: number; flightHours: number; airlines: string[] }
> = {
  // 아시아 단거리
  "ICN-NRT": { basePrice: 180_000, flightHours: 2.5, airlines: ["대한항공", "아시아나", "진에어", "피치항공"] },
  "ICN-KIX": { basePrice: 160_000, flightHours: 2, airlines: ["대한항공", "아시아나", "제주항공"] },
  "ICN-FUK": { basePrice: 150_000, flightHours: 1.5, airlines: ["진에어", "제주항공", "에어부산"] },
  "ICN-CTS": { basePrice: 200_000, flightHours: 3, airlines: ["대한항공", "에어서울"] },
  "ICN-TPE": { basePrice: 250_000, flightHours: 2.5, airlines: ["대한항공", "에바항공", "중화항공"] },
  "ICN-BKK": { basePrice: 350_000, flightHours: 6, airlines: ["대한항공", "타이항공", "에어아시아"] },
  "ICN-SIN": { basePrice: 400_000, flightHours: 6.5, airlines: ["싱가포르항공", "대한항공", "스쿠트"] },
  "ICN-KUL": { basePrice: 380_000, flightHours: 6.5, airlines: ["에어아시아X", "말레이시아항공"] },
  "ICN-HAN": { basePrice: 280_000, flightHours: 4.5, airlines: ["베트남항공", "뱀부항공"] },
  "ICN-SGN": { basePrice: 300_000, flightHours: 5, airlines: ["베트남항공", "제주항공"] },
  "ICN-DPS": { basePrice: 420_000, flightHours: 7, airlines: ["가루다인도네시아", "에어아시아X"] },
  "ICN-MNL": { basePrice: 350_000, flightHours: 4, airlines: ["필리핀항공", "세부퍼시픽"] },
  "ICN-REP": { basePrice: 320_000, flightHours: 5, airlines: ["에어아시아", "캄보디아앙코르에어"] },
  "ICN-DEL": { basePrice: 550_000, flightHours: 8.5, airlines: ["에어인디아", "대한항공"] },
  "ICN-PEK": { basePrice: 250_000, flightHours: 2, airlines: ["중국국제항공", "대한항공"] },
  "ICN-PVG": { basePrice: 240_000, flightHours: 2, airlines: ["중국동방항공", "아시아나"] },
  // 유럽 장거리
  "ICN-CDG": { basePrice: 750_000, flightHours: 12.5, airlines: ["대한항공", "에어프랑스", "아시아나"] },
  "ICN-LHR": { basePrice: 780_000, flightHours: 12, airlines: ["대한항공", "영국항공", "아시아나"] },
  "ICN-AMS": { basePrice: 720_000, flightHours: 11.5, airlines: ["대한항공", "KLM"] },
  "ICN-FRA": { basePrice: 700_000, flightHours: 11, airlines: ["대한항공", "루프트한자", "아시아나"] },
  "ICN-MUC": { basePrice: 710_000, flightHours: 11.5, airlines: ["루프트한자", "대한항공"] },
  "ICN-FCO": { basePrice: 750_000, flightHours: 12, airlines: ["대한항공", "아시아나", "알이탈리아"] },
  "ICN-BCN": { basePrice: 760_000, flightHours: 12.5, airlines: ["대한항공", "에어유럽"] },
  "ICN-MAD": { basePrice: 770_000, flightHours: 13, airlines: ["대한항공", "이베리아항공"] },
  "ICN-IST": { basePrice: 600_000, flightHours: 10, airlines: ["터키항공"] },
  "ICN-DXB": { basePrice: 550_000, flightHours: 9, airlines: ["에미레이트항공", "대한항공"] },
  "ICN-ZRH": { basePrice: 720_000, flightHours: 12, airlines: ["스위스항공", "대한항공"] },
  "ICN-VIE": { basePrice: 700_000, flightHours: 11.5, airlines: ["오스트리아항공"] },
};

const CABIN_MULTIPLIER: Record<string, number> = {
  economy: 1,
  premiumEconomy: 2.2,
  business: 4.5,
  first: 9.0,
};

function getRouteKey(origin: string, dest: string): string {
  return `${origin}-${dest}`;
}

function getReverseKey(origin: string, dest: string): string {
  return `${dest}-${origin}`;
}

function formatTime(hour: number, minute: number = 0): string {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function addHours(baseHour: number, hours: number): { h: number; m: number } {
  const total = baseHour * 60 + hours * 60;
  return { h: Math.floor(total / 60) % 24, m: Math.round(total % 60) };
}

export const searchFlightsTool = tool({
  description:
    "인천/김포 출발 항공권을 검색합니다. 목적지, 날짜, 탑승객 수, 좌석 등급을 입력하면 항공편 옵션과 가격을 반환합니다.",
  inputSchema: searchFlightsSchema,
  execute: async ({ origin, destination, departureDate, returnDate, passengers, cabinClass }) => {
    const originIATA = IATA_CODES[origin] ?? origin.toUpperCase();
    const destIATA = IATA_CODES[destination] ?? destination.toUpperCase();

    const routeKey = getRouteKey(originIATA, destIATA);
    const reverseKey = getReverseKey(originIATA, destIATA);
    const routeData =
      ROUTE_DATA[routeKey] ??
      ROUTE_DATA[reverseKey] ??
      // 기본값: 장거리
      { basePrice: 600_000, flightHours: 10, airlines: ["대한항공", "아시아나", "외항사"] };

    const multiplier = CABIN_MULTIPLIER[cabinClass] ?? 1;
    const isRoundTrip = !!returnDate;

    const flights = routeData.airlines.slice(0, 3).map((airline, idx) => {
      // 가격 변동 ±15%
      const variance = 0.85 + idx * 0.1;
      const oneWayPrice = Math.round(routeData.basePrice * multiplier * variance / 1000) * 1000;
      const totalPrice = isRoundTrip
        ? oneWayPrice * 2 * passengers
        : oneWayPrice * passengers;

      const depHour = 8 + idx * 4; // 08:00, 12:00, 16:00
      const { h: arrH, m: arrM } = addHours(depHour, routeData.flightHours);
      const stops = routeData.flightHours > 8 && idx === 2 ? 1 : 0;

      return {
        airline,
        flightNumber: `${airline.substring(0, 2).toUpperCase()}${200 + idx * 100}`,
        origin: originIATA,
        destination: destIATA,
        departureDate,
        departureTime: formatTime(depHour),
        arrivalTime: formatTime(arrH, arrM),
        flightDuration: `${Math.floor(routeData.flightHours)}시간 ${Math.round((routeData.flightHours % 1) * 60)}분`,
        stops,
        stopInfo: stops > 0 ? "1회 경유" : "직항",
        cabinClass,
        pricePerPerson: oneWayPrice,
        totalPrice,
        currency: "KRW",
        isRoundTrip,
        returnDate: returnDate ?? null,
      };
    });

    return {
      searchParams: { origin: originIATA, destination: destIATA, departureDate, returnDate, passengers, cabinClass },
      flights,
      cheapestPrice: Math.min(...flights.map((f) => f.totalPrice)),
      note: "실제 가격과 다를 수 있습니다. 최종 예약 전 항공사/OTA에서 확인하세요.",
    };
  },
});
