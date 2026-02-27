import { tool } from "ai";
import { getVisaInfoSchema } from "./schemas";
import { countryDetails } from "@/data/country-details";
import { findCountrySlug } from "./utils";

// 한국 여권 기준 비자 정책 보완 데이터 (countryDetails.visa가 없거나 짧을 때)
const VISA_SUPPLEMENT: Record<string, {
  visaType: string;
  stayLimit: string;
  requirements: string[];
  applicationProcess?: string;
  fee?: string;
  processingTime?: string;
  notes: string[];
}> = {
  japan: {
    visaType: "무비자",
    stayLimit: "90일",
    requirements: ["유효 여권 (6개월 이상 잔여)", "귀국 항공권 또는 여행 일정"],
    notes: [
      "2024년 현재 한국 여권은 비자 없이 90일 체류 가능합니다.",
      "관광·출장·단기 어학연수 목적에 한합니다.",
      "취업, 장기 어학연수는 별도 비자가 필요합니다.",
    ],
  },
  france: {
    visaType: "무비자 (셍겐 조약)",
    stayLimit: "90일 (180일 중)",
    requirements: ["유효 여권 (출국일로부터 3개월 이상)", "숙소 예약 확인서", "귀국 항공권", "여행자 보험"],
    notes: [
      "셍겐 협약 가입국 전체에서 90일 무비자 체류 가능합니다.",
      "2025년부터 ETIAS(유럽여행정보허가시스템) 시행 예정. 사전 신청 필요.",
      "입국심사 시 숙소, 여행 일정, 자금 증명을 요청받을 수 있습니다.",
    ],
  },
  germany: {
    visaType: "무비자 (셍겐 조약)",
    stayLimit: "90일 (180일 중)",
    requirements: ["유효 여권", "여행 일정 증빙", "숙소 예약서", "여행자 보험"],
    notes: [
      "셍겐 지역(26개국) 내 90일 무비자 체류.",
      "독일 단독 90일이 아닌 셍겐 전체 기준 180일 중 90일 한도입니다.",
      "프랑크푸르트, 뮌헨 공항 등에서 자동 입국심사(eGate) 이용 가능.",
    ],
  },
  uk: {
    visaType: "전자여행허가 (ETA) 필요",
    stayLimit: "최대 6개월",
    requirements: ["유효 여권", "ETA 사전 신청 (온라인)", "귀국 항공권", "충분한 여행 경비"],
    applicationProcess: "UK ETA 앱 또는 공식 웹사이트에서 신청",
    fee: "약 10파운드(약 17,000원)",
    processingTime: "즉시~3영업일",
    notes: [
      "영국은 2024년부터 한국 여권 소지자도 ETA 필요합니다.",
      "ETA는 최대 2년 유효하며 복수 방문 가능합니다.",
      "브렉시트 이후 영국은 셍겐 조약 미적용. 별도 ETA 필요.",
    ],
  },
  usa: {
    visaType: "ESTA (전자여행허가)",
    stayLimit: "90일",
    requirements: ["전자여권 (칩 포함)", "ESTA 신청 (여행 72시간 전까지)", "귀국 항공권"],
    applicationProcess: "https://esta.cbp.dhs.gov 에서 신청",
    fee: "21 USD (약 28,000원)",
    processingTime: "즉시~72시간",
    notes: [
      "한국은 비자면제프로그램(VWP) 대상국입니다. ESTA 신청 필수.",
      "ESTA 유효기간은 2년 또는 여권 만료일 중 짧은 날까지.",
      "입국심사 시 지문 등록과 사진 촬영이 있습니다.",
    ],
  },
  china: {
    visaType: "무비자 (한시적 정책, 2025년 기준)",
    stayLimit: "30일 (무비자 입국 시)",
    requirements: ["유효 여권", "귀국 항공권", "호텔 예약 확인서"],
    notes: [
      "중국은 2024년부터 한국 포함 일부 국가에 15일→30일 무비자 정책 시행 (변경 가능).",
      "비자 정책은 변동이 잦으므로 출발 전 반드시 주한 중국대사관에 확인하세요.",
      "홍콩, 마카오는 별도 정책 적용 (홍콩 90일 무비자).",
    ],
  },
  thailand: {
    visaType: "무비자",
    stayLimit: "30일",
    requirements: ["유효 여권 (6개월 이상 잔여)", "귀국 항공권", "2만 바트 상당의 여행 경비"],
    notes: [
      "공항 입국 시 30일 체류 가능합니다.",
      "장기 체류 시 태국 이민국에서 연장(30일) 가능.",
      "육로 입국 시 체류 기간이 다를 수 있습니다.",
    ],
  },
  vietnam: {
    visaType: "무비자 (e-visa 선택 가능)",
    stayLimit: "45일 (무비자) / 90일 (e-visa)",
    requirements: ["유효 여권", "귀국 항공권"],
    applicationProcess: "e-visa: https://evisa.xuatnhapcanh.gov.vn",
    fee: "e-visa 25 USD",
    processingTime: "e-visa 3영업일",
    notes: [
      "2023년부터 한국인 45일 무비자 입국 가능.",
      "장기 체류나 업무 방문 시 e-visa(90일 단수) 또는 visa letter 추천.",
      "호치민·하노이·다낭 공항 입국 시 빠른 심사.",
    ],
  },
  indonesia: {
    visaType: "도착비자 (VoA) 또는 전자비자 (e-VOA)",
    stayLimit: "30일 (1회 연장 가능)",
    requirements: ["유효 여권 (6개월 이상)", "귀국 항공권", "충분한 여행 경비"],
    fee: "500,000 루피아 (약 40,000원)",
    processingTime: "도착비자: 즉시 | e-VOA: 사전 신청",
    notes: [
      "발리, 자카르타 등 주요 공항에서 도착비자 발급 가능.",
      "e-VOA는 온라인으로 사전 신청하면 공항에서 줄 서지 않아도 됩니다.",
      "30일 연장 시 이민국 방문 필요. 연장 비용 추가.",
    ],
  },
  singapore: {
    visaType: "무비자",
    stayLimit: "30일",
    requirements: ["유효 여권", "귀국 항공권", "충분한 여행 경비"],
    notes: [
      "한국 여권 소지자는 입국 시 자동으로 30일 체류 허가.",
      "연장 시 이민청(ICA) 방문 또는 온라인 신청.",
      "창이 공항의 자동 입국 게이트 이용 가능 (전자여권 소지 시).",
    ],
  },
};

export const getVisaInfoTool = tool({
  description:
    "한국 여권 기준 여행지 비자 정보를 안내합니다. 무비자 여부, 체류 기간, 필요 서류, 신청 방법 등을 상세히 알려줍니다.",
  inputSchema: getVisaInfoSchema,
  execute: async ({ nationality, destination }) => {
    const slug = findCountrySlug(destination) ?? destination.toLowerCase();
    const country = countryDetails[slug];

    const supplement = VISA_SUPPLEMENT[slug];
    const visaFromData = country?.visa ?? "";

    // 비자 분류 판단
    let visaType = "정보 없음";
    let isFreeVisa = false;
    let hasETA = false;

    if (visaFromData.includes("무비자") || supplement?.visaType?.includes("무비자")) {
      visaType = "무비자";
      isFreeVisa = true;
    } else if (visaFromData.includes("ESTA") || visaFromData.includes("ETA") || supplement?.visaType?.includes("ETA")) {
      visaType = "전자여행허가 (ETA/ESTA)";
      hasETA = true;
    } else if (visaFromData.includes("도착비자") || supplement?.visaType?.includes("도착비자")) {
      visaType = "도착비자 (VoA)";
    } else if (visaFromData.length > 0) {
      visaType = visaFromData;
    } else if (supplement?.visaType) {
      visaType = supplement.visaType;
    }

    return {
      nationality,
      destination: slug,
      destinationName: country ? (slug.charAt(0).toUpperCase() + slug.slice(1)) : destination,
      visaType: supplement?.visaType ?? visaType,
      stayLimit: supplement?.stayLimit ?? (country?.visa.match(/\d+일/))?.[0] ?? "확인 필요",
      isFreeVisa,
      hasETA,
      requirements: supplement?.requirements ?? [
        "유효한 대한민국 여권",
        "귀국 항공권",
        "충분한 여행 경비 증빙",
      ],
      applicationProcess: supplement?.applicationProcess,
      fee: supplement?.fee ?? (isFreeVisa ? "무료" : "현지 확인 필요"),
      processingTime: supplement?.processingTime,
      officialVisaText: visaFromData || undefined,
      importantNotes: supplement?.notes ?? [
        "출발 전 반드시 주한 해당 국가 대사관 또는 영사관에서 최신 비자 정책을 확인하세요.",
        "비자 정책은 수시로 변경될 수 있습니다.",
      ],
      embassyWebsite: `https://www.google.com/search?q=주한+${destination}+대사관+비자`,
      disclaimer: "본 정보는 참고용입니다. 실제 비자 정책은 변경될 수 있으므로 공식 채널을 통해 반드시 확인하세요.",
    };
  },
});
