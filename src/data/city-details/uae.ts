import type { CityDetail, AttractionDetail } from "../city-details";

export const uaeCityDetails: Record<string, CityDetail> = {
  // ===== DUBAI =====
  "uae/dubai/dubai": {
    heroGradient: "from-amber-400 to-sky-700",
    description: "세계에서 가장 높은 빌딩 부르즈 할리파와 인공 섬 팜 주메이라로 대표되는 미래 도시. 전통 수크부터 초현대적 쇼핑몰까지 과거와 미래가 공존하는 중동 최대 관광지입니다.",
    bestTime: "11~3월 (여름은 40°C 이상으로 극심한 더위)",
    stayArea: "다운타운 두바이 / 마리나 지역",
    transport: "두바이 메트로, 트램, 워터버스 (Nol 카드 통합)",
    districts: [
      { name: "다운타운 두바이", nameEn: "Downtown Dubai", description: "부르즈 할리파와 두바이 몰이 위치한 도시의 핵심 지역.", highlights: ["부르즈 할리파", "두바이 몰", "두바이 분수쇼", "수크 알 바하르"] },
      { name: "두바이 마리나", nameEn: "Dubai Marina", description: "초고층 타워와 요트 항구가 어우러진 현대적 해안 지구.", highlights: ["마리나 워크", "JBR 비치", "아인 두바이(관람차)"] },
      { name: "올드 두바이", nameEn: "Old Dubai", description: "두바이 크릭을 중심으로 전통 수크와 역사 지구가 남아있는 곳.", highlights: ["골드 수크", "스파이스 수크", "알 파히디 역사 지구"] },
    ],
    attractions: [
      { name: "부르즈 할리파", nameEn: "Burj Khalifa", description: "828m 높이의 세계 최고층 건물로 124층·148층 전망대에서 도시를 조망합니다.", category: "랜드마크", tip: "일몰 시간대 티켓이 인기이므로 최소 2주 전 예약하세요." },
      { name: "두바이 몰 & 분수", nameEn: "Dubai Mall & Fountain", description: "세계 최대 쇼핑몰과 매일 저녁 화려한 음악 분수쇼가 펼쳐집니다.", category: "쇼핑/공연", tip: "분수쇼는 저녁 6시부터 30분 간격, 수변 레스토랑에서 감상하세요." },
      { name: "팜 주메이라", nameEn: "Palm Jumeirah", description: "야자수 모양으로 조성된 세계 최대의 인공 섬으로 아틀란티스 리조트가 있습니다.", category: "랜드마크", tip: "모노레일을 타고 섬 전체를 조망할 수 있습니다." },
      { name: "두바이 크릭 & 골드 수크", nameEn: "Dubai Creek & Gold Souk", description: "아브라(전통 목선)를 타고 크릭을 건너 세계 최대 금 시장을 만나보세요.", category: "전통시장", tip: "아브라 요금은 AED 1, 금 구매 시 반드시 흥정하세요." },
      { name: "두바이 프레임", nameEn: "Dubai Frame", description: "150m 높이의 액자 모양 전망대로 올드 두바이와 뉴 두바이를 동시에 조망합니다.", category: "전망대" },
      { name: "두바이 박물관", nameEn: "Dubai Museum", description: "알 파히디 요새 내에 위치한 두바이 역사 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "아부다비", nameEn: "Abu Dhabi", description: "셰이크 자이드 대모스크와 루브르 아부다비가 있는 UAE 수도.", travelTime: "차량 약 1.5시간", gradient: "from-emerald-400 to-teal-700" },
      { name: "사막 사파리", nameEn: "Desert Safari", description: "듄 배싱, 낙타 타기, 전통 바베큐 디너를 즐기는 사막 체험.", travelTime: "차량 약 45분", gradient: "from-orange-400 to-amber-700" },
    ],
    localFood: [
      { name: "알 마끄부스", description: "향신료 밥 위에 양고기 또는 생선을 올린 에미리트 전통 요리.", emoji: "🍚" },
      { name: "샤와르마", description: "회전 그릴에 구운 고기를 플랫브레드에 싸 먹는 중동 대표 길거리 음식.", emoji: "🌯" },
      { name: "루가이맛", description: "카다멈 향 도넛에 대추야자 시럽을 뿌린 전통 디저트.", emoji: "🍩" },
    ],
    tips: [
      "라마단 기간(매년 변동)에는 낮 시간 공공장소 음식 섭취가 금지됩니다.",
      "메트로 여성 전용칸과 골드 클래스칸에 주의하세요 (벌금 부과).",
      "실내 관광지 위주로 일정을 짜면 여름에도 여행이 가능합니다.",
      "택시보다 메트로+트램 조합이 저렴하고 편리합니다.",
    ],
  },

  // ===== ABU DHABI =====
  "uae/abu-dhabi/abu-dhabi": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "UAE의 수도이자 최대 에미리트. 세계에서 가장 아름다운 모스크로 꼽히는 셰이크 자이드 대모스크와 루브르 아부다비, 야스 섬 등 문화와 레저를 동시에 즐길 수 있는 도시입니다.",
    bestTime: "11~3월 (건기, 20~30°C로 쾌적)",
    stayArea: "코르니쉬 해안가 / 사디야트 섬",
    transport: "버스, 택시 (메트로 공사 중)",
    districts: [
      { name: "코르니쉬", nameEn: "Corniche", description: "8km 해안 산책로를 따라 공원과 비치가 이어지는 도심 해안 지구.", highlights: ["코르니쉬 비치", "에미리츠 팰리스", "해리티지 빌리지"] },
      { name: "사디야트 섬", nameEn: "Saadiyat Island", description: "루브르 아부다비 등 세계적 문화 시설이 집중된 문화 예술의 섬.", highlights: ["루브르 아부다비", "사디야트 비치", "만랏 알 사디야트"] },
      { name: "야스 섬", nameEn: "Yas Island", description: "페라리 월드, 워터파크 등 테마파크가 밀집한 엔터테인먼트 섬.", highlights: ["페라리 월드", "야스 워터월드", "야스 마리나 서킷"] },
    ],
    attractions: [
      { name: "셰이크 자이드 대모스크", nameEn: "Sheikh Zayed Grand Mosque", description: "82개의 돔과 1,000개의 기둥으로 이루어진 세계에서 가장 아름다운 모스크 중 하나.", category: "종교건축", tip: "무료 입장이지만 복장 규정(긴 소매, 긴 바지/치마, 여성 스카프)을 지켜야 합니다." },
      { name: "루브르 아부다비", nameEn: "Louvre Abu Dhabi", description: "장 누벨이 설계한 '빛의 비' 돔 아래 동서양 예술을 아우르는 세계적 미술관.", category: "미술관", tip: "토요일은 가족 행사로 붐비니 평일 오전 방문을 추천합니다." },
      { name: "야스 섬", nameEn: "Yas Island", description: "페라리 월드, 야스 워터월드, 워너브라더스 월드 등 테마파크의 집합체.", category: "테마파크", tip: "2~3개 파크 조합 패스를 구매하면 할인됩니다." },
      { name: "에미리츠 팰리스", nameEn: "Emirates Palace", description: "황금빛 궁전 호텔로 로비 투어와 24K 금박 카푸치노가 유명합니다.", category: "건축" },
      { name: "카스르 알 와탄", nameEn: "Qasr Al Watan", description: "UAE 대통령궁으로 이슬람 건축의 정수를 보여주는 화려한 궁전.", category: "궁전" },
    ],
    dayTrips: [
      { name: "알 아인", nameEn: "Al Ain", description: "유네스코 세계유산 오아시스 도시로 자벨 하핏 산이 있습니다.", travelTime: "차량 약 1.5시간", gradient: "from-lime-400 to-green-700" },
    ],
    localFood: [
      { name: "하리스", description: "밀과 양고기를 장시간 끓여 만든 걸쭉한 에미리트 전통 죽.", emoji: "🥣" },
      { name: "매쉬부스", description: "바스마티 쌀에 향신료와 고기를 넣어 지은 UAE 국민 요리.", emoji: "🍛" },
    ],
    tips: [
      "셰이크 자이드 모스크는 일몰 시간대가 가장 아름답습니다.",
      "택시가 주요 교통수단이며 미터기 사용을 반드시 확인하세요.",
      "금요일은 모스크 예배로 관광객 입장 시간이 제한될 수 있습니다.",
    ],
  },

  // ===== OTHER EMIRATES =====
  "uae/other-emirates/sharjah": {
    heroGradient: "from-rose-400 to-purple-700",
    description: "2019년 유네스코 세계 도서 수도로 선정된 UAE의 문화 수도. 두바이에서 차로 20분 거리에 있으며 20개 이상의 박물관과 미술관, 전통 수크가 밀집한 예술 도시입니다.",
    bestTime: "11~3월 (건기, 쾌적한 기온)",
    stayArea: "알 마자즈 워터프론트 주변",
    transport: "버스, 택시 (두바이 메트로 연결 버스 이용 가능)",
    districts: [
      { name: "아트 디스트릭트", nameEn: "Art District", description: "샤르자 미술관과 갤러리들이 모여 있는 문화 예술 지구.", highlights: ["샤르자 미술관", "샤르자 서예 박물관", "바리엘 아트 파운데이션"] },
    ],
    attractions: [
      { name: "샤르자 미술관", nameEn: "Sharjah Art Museum", description: "중동 최대 규모의 미술관으로 아랍 현대미술 컬렉션이 인상적입니다.", category: "미술관", tip: "무료 입장이며 샤르자 비엔날레 기간에 방문하면 더욱 풍성합니다." },
      { name: "블루 수크", nameEn: "Blue Souk", description: "600개 이상의 상점이 있는 아름다운 블루 타일 장식의 전통 시장.", category: "전통시장", tip: "카펫과 금 보석이 유명하며 반드시 흥정하세요." },
      { name: "알 노르 섬", nameEn: "Al Noor Island", description: "빛의 예술 설치물과 나비 정원이 있는 칼리드 호수의 아름다운 섬.", category: "공원" },
    ],
    dayTrips: [
      { name: "두바이", nameEn: "Dubai", description: "부르즈 할리파와 두바이 몰이 있는 중동 최대 도시.", travelTime: "차량 약 20분", gradient: "from-amber-400 to-sky-700" },
    ],
    localFood: [
      { name: "바알라밧", description: "대추야자 속에 아몬드를 넣고 참깨를 묻힌 에미리트 전통 간식.", emoji: "🌰" },
      { name: "차바브", description: "얇은 에미리트식 크레이프에 치즈나 꿀을 곁들여 먹는 아침 음식.", emoji: "🫓" },
    ],
    tips: [
      "샤르자는 UAE에서 가장 보수적인 에미리트로 복장에 더 신경 쓰세요.",
      "금요일 오전은 대부분의 관광지가 휴무이므로 오후에 방문하세요.",
      "두바이와 샤르자 사이 출퇴근 시간(7~9시, 17~20시) 교통 정체가 심합니다.",
    ],
  },
};

export const uaeAttractionDetails: Record<string, AttractionDetail> = {
  // ===== DUBAI =====
  "uae/dubai/dubai/burj-khalifa": {
    heroGradient: "from-amber-400 to-sky-700",
    description: "828m, 163층의 세계 최고층 건물. 124층 '앳 더 톱'과 148층 '앳 더 톱 스카이' 전망대에서 두바이 전경과 아라비아만을 360도로 조망할 수 있습니다. 밤에는 LED 조명쇼가 펼쳐집니다.",
    history: "2004년 착공하여 2010년 1월 4일 개장하였습니다. 한국의 삼성물산이 시공에 참여했으며, 건설에만 15억 달러가 투입되었습니다. 원래 이름은 부르즈 두바이였으나 아부다비의 재정 지원에 감사하여 현 이름으로 변경되었습니다.",
    visitInfo: {
      hours: "매일 09:00~23:00 (라마단 기간 변동)",
      admission: "124층 앳 더 톱: AED 169 / 148층 스카이: AED 399 (일몰 시간대 프리미엄 요금)",
      address: "1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai",
      website: "https://www.burjkhalifa.ae",
    },
    highlights: [
      "124층 전망대에서 두바이 스카이라인과 사막 조망",
      "148층 '앳 더 톱 스카이' 프리미엄 라운지 체험",
      "일몰 시간대 황금빛으로 물드는 도시 전경",
      "매일 저녁 LED 라이트쇼 (외부에서 감상)",
    ],
    nearbyAttractions: ["두바이 몰", "두바이 분수쇼", "수크 알 바하르", "두바이 오페라"],
    photoTips: "일몰 30분 전 전망대에 도착하면 낮과 밤 두 가지 풍경을 모두 담을 수 있습니다. 외부 전경은 비즈니스 베이 쪽에서 촬영하면 수면 반영샷을 얻을 수 있습니다.",
    tips: [
      "일몰 시간대 티켓은 2주 전 매진되므로 일찍 예약하세요.",
      "공식 웹사이트 예약이 현장 구매보다 AED 50 이상 저렴합니다.",
      "124층 티켓으로도 충분한 전망을 즐길 수 있습니다.",
      "두바이 분수쇼 시간에 맞춰 방문하면 위에서 분수를 내려다볼 수 있습니다.",
    ],
  },
  "uae/dubai/dubai/dubai-mall-and-fountain": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "세계 최대 규모의 쇼핑몰(연면적 50만㎡ 이상)과 그 앞에서 매일 저녁 펼쳐지는 두바이 분수쇼. 쇼핑뿐 아니라 수족관, 아이스링크, VR 파크 등 복합 엔터테인먼트 시설을 갖추고 있습니다.",
    visitInfo: {
      hours: "일~수 10:00~00:00 / 목~토 10:00~01:00 | 분수쇼: 저녁 18:00~23:00 매 30분",
      admission: "몰 입장 무료 / 수족관: AED 149 / 아이스링크: AED 100",
      address: "Financial Center Road, Downtown Dubai",
      website: "https://www.thedubaimall.com",
    },
    highlights: [
      "두바이 아쿠아리움 & 언더워터 주 (33,000마리 해양생물)",
      "두바이 분수쇼 (세계 최대 안무 분수)",
      "올림픽 규격 아이스링크",
      "1,200개 이상 매장에서의 쇼핑",
    ],
    nearbyAttractions: ["부르즈 할리파", "수크 알 바하르", "두바이 오페라", "시티워크"],
    photoTips: "분수쇼는 수크 알 바하르 쪽 다리 위에서 촬영하면 부르즈 할리파를 배경으로 담을 수 있습니다. 아브라 보트(AED 65)를 타면 수면에서 촬영이 가능합니다.",
    tips: [
      "분수쇼는 무료이며 수변 곳곳에서 감상 가능합니다.",
      "주말(금~토) 저녁은 극심하게 붐비므로 평일 방문을 추천합니다.",
      "몰 내부가 매우 넓으므로 앱으로 매장 위치를 미리 확인하세요.",
    ],
  },
  "uae/dubai/dubai/palm-jumeirah": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "야자수 모양으로 바다를 매립하여 만든 세계 최대의 인공 섬. 고급 리조트와 주거 단지가 밀집해 있으며, 끝자락에 위치한 아틀란티스 더 로열과 아틀란티스 더 팜이 상징적입니다.",
    visitInfo: {
      hours: "섬 자체는 24시간 접근 가능 / 아틀란티스 워터파크: 10:00~18:00",
      admission: "섬 진입 무료 / 아쿠아벤처 워터파크: AED 349",
      address: "Palm Jumeirah, Dubai",
      website: "https://www.atlantis.com/dubai",
    },
    highlights: [
      "더 뷰 앳 더 팜(전망대)에서 야자수 형태 전체 조망",
      "아쿠아벤처 워터파크 세계적 워터슬라이드",
      "아틀란티스 더 로열의 인피니티 풀",
      "팜 웨스트 비치에서 두바이 마리나 스카이라인 감상",
    ],
    nearbyAttractions: ["아틀란티스 더 팜", "나키엘 몰", "두바이 마리나", "JBR 비치"],
    photoTips: "더 뷰 앳 더 팜 전망대(52층)에서 팜 전체 형태를 촬영할 수 있습니다. 일몰 시 서쪽의 아틀란티스 방향이 최고의 포토스팟입니다.",
    tips: [
      "팜 모노레일(AED 30 왕복)로 섬의 줄기를 따라 이동하며 경치를 감상하세요.",
      "아쿠아벤처는 온라인 사전 예약 시 15~20% 할인됩니다.",
      "비치 액세스가 포함된 데이패스 상품을 잘 비교해보세요.",
    ],
  },
  "uae/dubai/dubai/dubai-creek-and-gold-souk": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "두바이의 기원인 크릭(수로)을 중심으로 전통 아브라(목선)를 타고 건너며 골드 수크, 스파이스 수크를 둘러보는 올드 두바이의 핵심 코스입니다. 근대 두바이의 무역 역사를 느낄 수 있습니다.",
    history: "두바이 크릭은 수천 년 전부터 천연 항구로 사용되었으며, 1830년대 마크툼 가문이 정착하면서 현대 두바이의 시초가 되었습니다. 골드 수크는 1940년대부터 형성되기 시작했습니다.",
    visitInfo: {
      hours: "수크: 토~목 10:00~22:00, 금 16:00~22:00 | 아브라: 06:00~00:00",
      admission: "아브라 편도 AED 1 / 수크 입장 무료",
      address: "Gold Souk, Deira, Dubai",
    },
    highlights: [
      "아브라를 타고 크릭을 건너는 전통 체험",
      "골드 수크에서 세계 최저가 금 쇼핑",
      "스파이스 수크의 향신료와 향 둘러보기",
      "알 파히디 역사 지구 산책",
    ],
    nearbyAttractions: ["두바이 박물관", "알 파히디 역사 지구", "스파이스 수크", "향수 수크"],
    photoTips: "아브라 위에서 크릭 양안의 풍경을 촬영하면 전통과 현대가 공존하는 두바이의 매력을 담을 수 있습니다.",
    tips: [
      "금 순도(캐럿)와 그램 단가를 확인하고 흥정은 표시가의 20~30% 할인부터 시작하세요.",
      "아브라는 정해진 노선(데이라↔부르두바이)을 운행하며 동전을 준비하세요.",
      "금요일 오전에는 많은 상점이 문을 닫으니 오후에 방문하세요.",
      "스파이스 수크에서 사프란은 가짜가 많으니 신뢰할 수 있는 상점에서 구매하세요.",
    ],
  },

  // ===== ABU DHABI =====
  "uae/abu-dhabi/abu-dhabi/sheikh-zayed-grand-mosque": {
    heroGradient: "from-white to-emerald-400",
    description: "82개의 돔, 1,000개 이상의 기둥, 세계 최대의 수제 카펫과 샹들리에를 보유한 UAE 최대의 모스크. 순백의 대리석과 금·보석 장식이 어우러진 이슬람 건축의 걸작으로 4만 명을 수용할 수 있습니다.",
    history: "UAE 건국의 아버지 셰이크 자이드 빈 술탄 알 나흐얀의 비전으로 1996년 착공, 2007년 완공되었습니다. 건설에 약 20억 디르함(약 5억 달러)이 투입되었으며 셰이크 자이드는 이곳에 안장되어 있습니다.",
    visitInfo: {
      hours: "토~목 09:00~22:00, 금 15:00~22:00 (라마단 기간 변동)",
      admission: "무료 (무료 가이드 투어 제공)",
      address: "Sheikh Rashid Bin Saeed Street, Abu Dhabi",
      website: "https://www.szgmc.gov.ae",
    },
    highlights: [
      "메인 기도홀의 세계 최대 수제 카펫 (5,627㎡)",
      "7톤 무게의 스와로브스키 크리스탈 샹들리에",
      "99개의 알라의 이름이 새겨진 키블라 벽",
      "일몰~야간의 환상적인 라이트업",
    ],
    nearbyAttractions: ["카스르 알 와탄", "에미리츠 팰리스", "루브르 아부다비", "마리나 몰"],
    photoTips: "일몰 직후 블루아워에 반사 연못 앞에서 촬영하면 대칭 반영샷을 얻을 수 있습니다. 내부 기둥 회랑은 광각 렌즈로 촬영하세요.",
    tips: [
      "복장 규정: 긴 소매, 긴 바지/치마, 여성은 머리 스카프 필수 (무료 아바야 대여 가능).",
      "무료 가이드 투어는 매 시간 정각에 시작합니다.",
      "금요일은 오후 예배 후 15시부터만 관광객 입장이 가능합니다.",
      "일몰 시간대가 가장 아름다우니 17시쯤 도착하는 것을 추천합니다.",
    ],
  },
  "uae/abu-dhabi/abu-dhabi/louvre-abu-dhabi": {
    heroGradient: "from-slate-400 to-blue-800",
    description: "프랑스 건축가 장 누벨이 설계한 '빛의 비(Rain of Light)' 돔이 상징적인 세계적 미술관. 고대 이집트부터 현대미술까지 동서양 예술을 통합적으로 전시하며, 프랑스 루브르와 30년 라이선스 계약을 맺었습니다.",
    history: "2007년 프랑스-UAE 정부 간 협정으로 시작되어 10년의 건설 끝에 2017년 11월 개관하였습니다. '루브르' 이름 사용료만 5억 2,500만 달러에 달하며, 총 프로젝트 비용은 약 10억 달러입니다.",
    visitInfo: {
      hours: "화~일 10:00~18:30 (목요일 ~21:30) / 월요일 휴관",
      admission: "성인 AED 63 / 13~22세 AED 31.50 / 12세 이하 무료",
      address: "Saadiyat Island, Abu Dhabi",
      website: "https://www.louvreabudhabi.ae",
    },
    highlights: [
      "직경 180m 돔을 통과하는 '빛의 비' 체험",
      "다빈치, 몬드리안, 마그리트 등 명작 감상",
      "동서양 문명을 시대별로 연결하는 독창적 전시 구성",
      "돔 아래 바다 위 산책로",
    ],
    nearbyAttractions: ["사디야트 비치", "만랏 알 사디야트", "셰이크 자이드 대모스크", "팀 랩 아부다비"],
    photoTips: "돔 내부에서 바닥에 비치는 빛의 패턴은 정오 전후가 가장 아름답습니다. 외부는 해질녘 바다 쪽에서 촬영하세요.",
    tips: [
      "목요일 야간 개장(~21:30)을 활용하면 일몰과 야경을 함께 즐길 수 있습니다.",
      "오디오 가이드(AED 20)에 한국어가 지원됩니다.",
      "카약 투어(AED 84)로 건물 외부를 수상에서 감상할 수 있습니다.",
    ],
  },
  "uae/abu-dhabi/abu-dhabi/yas-island": {
    heroGradient: "from-red-500 to-yellow-500",
    description: "아부다비의 엔터테인먼트 허브로 페라리 월드, 야스 워터월드, 워너브라더스 월드, 시월드 등 세계적 테마파크와 F1 아부다비 GP가 열리는 야스 마리나 서킷이 모여 있습니다.",
    visitInfo: {
      hours: "테마파크: 보통 10:00~18:00 (시즌별 변동)",
      admission: "페라리 월드: AED 375 / 야스 워터월드: AED 325 / 멀티파크 패스 할인",
      address: "Yas Island, Abu Dhabi",
      website: "https://www.yasisland.com",
    },
    highlights: [
      "페라리 월드의 포뮬러 로사 (세계 최고속 롤러코스터, 240km/h)",
      "야스 워터월드 40종 이상의 워터 어트랙션",
      "야스 마리나 서킷 F1 체험 드라이빙",
      "야스 베이 워터프론트 레스토랑 & 쇼핑",
    ],
    nearbyAttractions: ["야스 몰", "야스 비치", "시월드 아부다비", "워너브라더스 월드"],
    tips: [
      "2~3개 파크 멀티데이 패스가 개별 티켓보다 30~40% 저렴합니다.",
      "F1 시즌(11~12월)에는 숙박비가 3~5배 상승하니 일찍 예약하세요.",
      "여름에는 야스 워터월드, 겨울에는 페라리 월드가 쾌적합니다.",
    ],
  },

  // ===== SHARJAH =====
  "uae/other-emirates/sharjah/sharjah-art-museum": {
    heroGradient: "from-rose-400 to-purple-700",
    description: "1997년 개관한 중동 최대 규모의 미술관으로, 18세기부터 현대까지의 아랍 미술을 집중적으로 소장·전시합니다. 샤르자 비엔날레의 주요 전시장이며, 아랍 예술 교육의 중심지입니다.",
    history: "샤르자 통치자 술탄 빈 무함마드 알 카시미의 문화 비전으로 설립되었습니다. 샤르자는 1998년 아랍 문화 수도, 2019년 유네스코 세계 도서 수도로 선정된 UAE의 문화 중심지입니다.",
    visitInfo: {
      hours: "토~목 08:00~20:00, 금 16:00~20:00",
      admission: "무료",
      address: "Arts Area, Al Shuwaiheen, Sharjah",
      website: "https://www.sharjahmuseums.ae",
    },
    highlights: [
      "18~20세기 오리엔탈리즘 회화 컬렉션",
      "아랍 현대미술 상설전",
      "샤르자 비엔날레 특별전 (격년)",
      "어린이 예술 교육 프로그램",
    ],
    nearbyAttractions: ["샤르자 서예 박물관", "바리엘 아트 파운데이션", "블루 수크", "알 노르 섬"],
    photoTips: "미술관 내부의 높은 천장과 자연광이 들어오는 갤러리가 촬영하기 좋습니다. 작품 촬영 시 플래시는 금지입니다.",
    tips: [
      "무료 입장이므로 부담 없이 방문할 수 있습니다.",
      "근처의 서예 박물관, 이슬람 문명 박물관도 함께 둘러보세요.",
      "금요일은 오후 4시부터만 개관하니 일정을 미리 확인하세요.",
    ],
  },
};
