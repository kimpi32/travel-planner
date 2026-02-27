import type { CityDetail, AttractionDetail } from "../city-details";

export const ukCityDetails: Record<string, CityDetail> = {
  // ===== LONDON =====
  "uk/london/westminster": {
    heroGradient: "from-amber-600 to-red-800",
    description:
      "영국 정치의 심장부이자 런던 대표 관광지가 밀집한 지역입니다. 빅벤과 국회의사당, 웨스트민스터 사원, 버킹엄 궁전이 모두 이곳에 자리하고 있으며, 세인트 제임스 공원에서의 여유로운 산책과 함께 왕실의 위엄을 느낄 수 있습니다.",
    bestTime: "5~9월 (여름철, 긴 일조시간)",
    stayArea: "빅토리아 / 웨스트민스터 주변",
    transport: "지하철 (Jubilee, District, Circle 라인), 버스",
    districts: [
      {
        name: "화이트홀",
        nameEn: "Whitehall",
        description: "국회의사당에서 트라팔가 광장까지 이어지는 영국 정부 청사 밀집 거리.",
        highlights: ["다우닝 스트리트 10번지", "전쟁 기념관", "호스 가즈 퍼레이드"],
      },
      {
        name: "세인트 제임스",
        nameEn: "St James",
        description: "버킹엄 궁전과 세인트 제임스 궁전이 자리한 왕실의 핵심 구역.",
        highlights: ["버킹엄 궁전", "세인트 제임스 공원", "클래런스 하우스"],
      },
      {
        name: "트라팔가 광장 주변",
        nameEn: "Trafalgar Square Area",
        description: "내셔널 갤러리와 넬슨 기념탑이 있는 런던의 대표 광장 지역.",
        highlights: ["내셔널 갤러리", "넬슨 기념탑", "레스터 스퀘어"],
      },
    ],
    attractions: [
      { name: "빅벤", nameEn: "Big Ben", description: "런던의 상징적 시계탑으로 정식 명칭은 엘리자베스 타워입니다. 1859년부터 울린 종소리는 런던의 대명사입니다.", category: "랜드마크", tip: "야간 조명이 켜진 빅벤이 가장 아름다우니 저녁에도 방문하세요." },
      { name: "버킹엄 궁전", nameEn: "Buckingham Palace", description: "영국 왕실의 공식 거주지로, 근위병 교대식은 런던 필수 볼거리입니다.", category: "궁전", tip: "근위병 교대식은 4~7월 매일, 그 외 격일 11시에 진행됩니다." },
      { name: "웨스트민스터 사원", nameEn: "Westminster Abbey", description: "영국 왕실의 대관식과 결혼식이 거행되는 고딕 양식의 교회로 천 년의 역사를 자랑합니다.", category: "교회" },
      { name: "런던 아이", nameEn: "London Eye", description: "템스강변의 대관람차로 런던 시내 360도 파노라마 전망을 제공합니다.", category: "전망대", tip: "온라인 사전 예약 시 할인 혜택과 대기 시간 단축이 가능합니다." },
      { name: "세인트 제임스 공원", nameEn: "St James Park", description: "버킹엄 궁전과 국회의사당 사이에 위치한 왕실 공원으로 펠리컨 서식지로도 유명합니다.", category: "공원" },
    ],
    dayTrips: [
      { name: "윈저 성", nameEn: "Windsor Castle", description: "현존하는 가장 오래된 왕실 거주 성으로 엘리자베스 2세 여왕이 사랑한 곳.", travelTime: "기차 약 50분", gradient: "from-amber-500 to-yellow-700" },
      { name: "햄프턴 코트 궁전", nameEn: "Hampton Court Palace", description: "헨리 8세의 궁전으로 유명한 미로 정원이 인기.", travelTime: "기차 약 35분", gradient: "from-rose-500 to-red-700" },
    ],
    localFood: [
      { name: "피시 앤 칩스", description: "바삭한 생선 튀김과 감자 튀김, 식초를 뿌려 먹는 영국 국민 음식.", emoji: "🐟" },
      { name: "애프터눈 티", description: "핑거 샌드위치, 스콘, 케이크와 함께 즐기는 우아한 차 문화.", emoji: "🫖" },
      { name: "파이 앤 매시", description: "고기 파이와 으깬 감자, 그레이비 소스를 곁들인 런던 전통 서민 음식.", emoji: "🥧" },
    ],
    tips: [
      "오이스터 카드 또는 컨택리스 결제로 교통비를 절약하세요. 일일 상한 요금이 적용됩니다.",
      "근위병 교대식은 30분 전에 도착해야 좋은 자리를 잡을 수 있습니다.",
      "웨스트민스터 사원은 일요일 예배 시간에 무료 입장이 가능하지만 관광은 제한됩니다.",
      "저녁 빅벤과 국회의사당 야경은 웨스트민스터 브리지에서 감상하세요.",
    ],
  },
  "uk/london/city-of-london": {
    heroGradient: "from-gray-700 to-blue-900",
    description:
      "로마 시대부터 이어진 런던의 역사적 핵심 지역으로, 현재는 세계 금융의 중심지입니다. 런던탑과 타워 브리지 같은 역사 유적과 현대적 마천루가 공존하며, 세인트 폴 대성당의 웅장한 돔은 런던 스카이라인의 상징입니다.",
    bestTime: "5~9월",
    stayArea: "리버풀 스트리트 / 타워 힐 주변",
    transport: "지하철 (Central, Circle, District 라인), DLR",
    districts: [
      {
        name: "타워 힐",
        nameEn: "Tower Hill",
        description: "런던탑과 타워 브리지가 위치한 역사 관광의 핵심 지역.",
        highlights: ["런던탑", "타워 브리지", "세인트 캐서린 독"],
      },
      {
        name: "바비칸",
        nameEn: "Barbican",
        description: "유럽 최대의 복합 예술 센터인 바비칸 센터가 있는 문화 지구.",
        highlights: ["바비칸 센터", "런던 심포니 오케스트라", "런던 뮤지엄"],
      },
    ],
    attractions: [
      { name: "런던탑", nameEn: "Tower of London", description: "천 년 역사의 왕실 요새로 왕관 보석이 전시되어 있습니다. 까마귀(레이븐)가 떠나면 왕국이 무너진다는 전설이 있습니다.", category: "고성", tip: "오전 일찍 방문하면 왕관 보석 관람 대기 시간이 짧습니다." },
      { name: "세인트 폴 대성당", nameEn: "St Pauls Cathedral", description: "크리스토퍼 렌이 설계한 바로크 양식의 대성당으로, 속삭임의 갤러리와 돔 전망대가 유명합니다.", category: "성당", tip: "돔 꼭대기 골든 갤러리(528계단)에서의 런던 파노라마는 필수입니다." },
      { name: "타워 브리지", nameEn: "Tower Bridge", description: "1894년 완공된 빅토리아 양식의 개폐식 다리로 런던의 대표 랜드마크입니다.", category: "랜드마크", tip: "유리 바닥 전시관에서 아래를 내려다보는 스릴을 즐기세요." },
    ],
    dayTrips: [
      { name: "그리니치", nameEn: "Greenwich", description: "세계 표준시의 기준점, 본초 자오선이 지나는 역사적 지역.", travelTime: "DLR 약 20분", gradient: "from-green-600 to-teal-800" },
    ],
    localFood: [
      { name: "레든홀 마켓 음식", description: "빅토리아 양식 지붕 아래 다양한 미식을 즐길 수 있는 역사적 마켓.", emoji: "🏛️" },
      { name: "젤리드 일", description: "전통 런던 이스트엔드 음식으로 젤리에 담근 장어 요리.", emoji: "🐍" },
    ],
    tips: [
      "런던탑은 최소 2~3시간이 필요하며, 비프이터 투어(무료)에 참여하면 역사 해설을 들을 수 있습니다.",
      "스카이 가든(월키토키 빌딩 꼭대기)은 무료 입장이지만 사전 예약이 필수입니다.",
      "주말에는 금융 지구가 한적해져 사진 촬영에 좋습니다.",
    ],
  },
  "uk/london/south-bank": {
    heroGradient: "from-purple-600 to-indigo-800",
    description:
      "템스 강 남쪽 강변을 따라 문화 예술 시설이 밀집한 활기찬 지역입니다. 테이트 모던, 셰익스피어 글로브 극장 등이 자리하고 있으며, 강변 산책로를 따라 걸으며 버스커 공연과 거리 예술을 즐길 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "워털루 / 서더크 주변",
    transport: "지하철 (Jubilee, Northern, Bakerloo 라인), 버스",
    districts: [
      {
        name: "뱅크사이드",
        nameEn: "Bankside",
        description: "테이트 모던과 셰익스피어 글로브 극장이 있는 예술 지구.",
        highlights: ["테이트 모던", "밀레니엄 브리지", "셰익스피어 글로브"],
      },
      {
        name: "버러",
        nameEn: "Borough",
        description: "런던에서 가장 오래된 식품 시장인 버러 마켓이 있는 미식 지역.",
        highlights: ["버러 마켓", "서더크 대성당", "더 샤드 전망대"],
      },
    ],
    attractions: [
      { name: "테이트 모던", nameEn: "Tate Modern", description: "옛 화력발전소를 개조한 세계적인 현대미술관으로, 피카소, 워홀, 달리 등의 작품을 무료로 감상할 수 있습니다.", category: "미술관", tip: "무료 입장이며 특별 전시만 유료입니다. 10층 전망대에서 세인트 폴 대성당 뷰가 압권입니다." },
      { name: "셰익스피어 글로브", nameEn: "Shakespeares Globe", description: "셰익스피어 시대의 극장을 충실히 재현한 야외 극장으로 실제 공연이 열립니다.", category: "극장", tip: "스탠딩석(그라운들링) 티켓은 5파운드로 가장 저렴합니다." },
    ],
    dayTrips: [
      { name: "큐 가든", nameEn: "Kew Gardens", description: "유네스코 세계유산으로 지정된 왕립 식물원.", travelTime: "지하철 약 40분", gradient: "from-green-500 to-lime-700" },
    ],
    localFood: [
      { name: "버러 마켓 음식", description: "런던 최고의 식품 시장에서 세계 각국의 길거리 음식을 맛볼 수 있습니다.", emoji: "🧑‍🍳" },
      { name: "스티키 토피 푸딩", description: "대추야자 케이크에 토피 소스를 뿌린 영국 전통 디저트.", emoji: "🍮" },
    ],
    tips: [
      "템스 강변 산책로(사우스 뱅크 워크)를 따라 런던 아이에서 타워 브리지까지 걸으면 런던의 주요 명소를 한눈에 볼 수 있습니다.",
      "버러 마켓은 목~토요일이 가장 활발하며, 월~화요일은 휴장입니다.",
      "테이트 모던에서 밀레니엄 브리지를 건너면 세인트 폴 대성당이 바로 연결됩니다.",
    ],
  },
  "uk/london/camden": {
    heroGradient: "from-pink-600 to-purple-800",
    description:
      "런던의 대안 문화와 예술의 중심지로, 독특한 개성이 넘치는 지역입니다. 캠던 마켓은 빈티지 의류, 수공예품, 세계 각국의 길거리 음식으로 유명하며, 리젠트 운하를 따라 산책하며 보헤미안 분위기를 만끽할 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "캠던 타운 / 킹스 크로스 주변",
    transport: "지하철 (Northern 라인), 버스",
    districts: [
      {
        name: "캠던 타운",
        nameEn: "Camden Town",
        description: "캠던 마켓과 캠던 록 마켓이 밀집한 쇼핑과 먹거리의 중심지.",
        highlights: ["캠던 마켓", "캠던 록 마켓", "스테이블스 마켓"],
      },
      {
        name: "프림로즈 힐",
        nameEn: "Primrose Hill",
        description: "런던 스카이라인이 한눈에 보이는 언덕 전망대와 고급 주택가.",
        highlights: ["프림로즈 힐 전망", "리젠트 파크", "런던 동물원"],
      },
    ],
    attractions: [
      { name: "캠던 마켓", nameEn: "Camden Market", description: "빈티지 패션, 수공예품, 세계 음식이 모인 런던 최대 규모의 스트리트 마켓.", category: "시장", tip: "주말이 가장 붐비며, 평일 오전이 여유롭게 구경하기 좋습니다." },
      { name: "리젠트 운하", nameEn: "Regents Canal", description: "리틀 베니스에서 캠던까지 이어지는 수상 산책로로 수상 버스도 운행합니다.", category: "산책" },
      { name: "대영 도서관", nameEn: "British Library", description: "마그나 카르타, 구텐베르크 성경, 비틀즈 원본 가사 등 인류 문화유산을 소장한 세계 최대 도서관.", category: "도서관" },
    ],
    dayTrips: [
      { name: "해리 포터 스튜디오", nameEn: "Warner Bros Studio Tour", description: "해리 포터 영화 촬영 세트를 체험하는 스튜디오 투어.", travelTime: "기차+셔틀 약 1시간", gradient: "from-amber-600 to-red-800" },
    ],
    localFood: [
      { name: "캠던 마켓 길거리 음식", description: "태국 팟타이부터 아르헨티나 스테이크까지 세계 각국 음식을 한곳에서.", emoji: "🌮" },
      { name: "젤라토", description: "캠던 거리의 수제 젤라토 가게들이 유명합니다.", emoji: "🍦" },
    ],
    tips: [
      "캠던 마켓은 매일 열리지만, 주말에 가장 많은 상점이 운영됩니다.",
      "프림로즈 힐에서 일몰을 감상하면 런던 스카이라인의 실루엣이 장관입니다.",
      "리젠트 운하를 따라 리틀 베니스까지 약 45분 산책 코스가 추천입니다.",
    ],
  },
  "uk/london/greenwich": {
    heroGradient: "from-green-600 to-teal-800",
    description:
      "세계 표준시의 기준점인 본초 자오선이 지나는 역사적인 지역입니다. 그리니치 천문대에서 동서반구에 동시에 발을 딛는 특별한 경험과 함께, 해양 역사의 중심지로서 커티삭 범선과 국립해양박물관을 만날 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "그리니치 타운 센터",
    transport: "DLR, 템스 클리퍼 보트, 기차",
    districts: [
      {
        name: "그리니치 파크",
        nameEn: "Greenwich Park",
        description: "왕립 천문대가 위치한 언덕 위 공원으로 런던 시내 파노라마 전망을 제공.",
        highlights: ["왕립 천문대", "본초 자오선", "파노라마 전망대"],
      },
      {
        name: "그리니치 타운",
        nameEn: "Greenwich Town",
        description: "커티삭 범선과 그리니치 마켓이 있는 활기찬 타운 센터.",
        highlights: ["커티삭 범선", "그리니치 마켓", "올드 로열 네이벌 칼리지"],
      },
    ],
    attractions: [
      { name: "왕립 그리니치 천문대", nameEn: "Royal Observatory Greenwich", description: "본초 자오선(경도 0도)이 지나는 곳으로 세계 표준시(GMT)의 기준점입니다.", category: "천문대", tip: "본초 자오선 위에 서서 동서반구에 동시에 발을 딛는 사진을 남기세요." },
      { name: "커티삭 범선", nameEn: "Cutty Sark", description: "1869년 건조된 세계에서 가장 빠른 차 무역 범선으로 현재 박물관으로 운영됩니다.", category: "박물관" },
      { name: "국립해양박물관", nameEn: "National Maritime Museum", description: "세계 최대의 해양 박물관으로 영국 해양 역사를 한눈에 볼 수 있습니다. 무료 입장.", category: "박물관" },
    ],
    dayTrips: [
      { name: "템스 배리어", nameEn: "Thames Barrier", description: "세계에서 두 번째로 큰 홍수 방지 시설.", travelTime: "버스 약 20분", gradient: "from-blue-500 to-cyan-700" },
    ],
    localFood: [
      { name: "그리니치 마켓 음식", description: "그리니치 마켓 안의 다양한 수제 음식과 디저트.", emoji: "🥘" },
      { name: "피시 앤 칩스", description: "템스강변에서 즐기는 바삭한 전통 피시 앤 칩스.", emoji: "🐟" },
    ],
    tips: [
      "템스 클리퍼 보트를 타고 오면 템스강 경치를 즐기며 이동할 수 있습니다.",
      "그리니치 파크 언덕 꼭대기에서 카나리 워프와 런던 시내 스카이라인을 한눈에 감상하세요.",
      "올드 로열 네이벌 칼리지의 페인티드 홀은 '영국의 시스티나 성당'으로 불립니다.",
    ],
  },

  // ===== SOUTHERN ENGLAND =====
  "uk/southern-england/bath": {
    heroGradient: "from-amber-500 to-yellow-700",
    description:
      "로마 시대부터 이어진 온천 도시로, 조지안 양식의 우아한 건축물이 도시 전체를 감싸고 있는 유네스코 세계문화유산 도시입니다. 로마 목욕탕 유적, 로열 크레센트 등 2천 년의 역사가 살아 숨 쉬며, 제인 오스틴이 사랑한 도시로도 유명합니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 (로마 목욕탕 주변)",
    transport: "도보 (시내 중심부 컴팩트), 버스",
    districts: [
      {
        name: "시내 중심부",
        nameEn: "City Centre",
        description: "로마 목욕탕, 바스 수도원, 펄트니 다리가 있는 핵심 관광 지역.",
        highlights: ["로마 목욕탕", "바스 수도원", "펄트니 다리"],
      },
      {
        name: "로열 크레센트 지구",
        nameEn: "Royal Crescent Area",
        description: "조지안 건축의 걸작인 로열 크레센트와 서커스가 위치한 우아한 지역.",
        highlights: ["로열 크레센트", "더 서커스", "로열 빅토리아 파크"],
      },
    ],
    attractions: [
      { name: "로마 목욕탕", nameEn: "Roman Baths", description: "기원전 1세기 로마인들이 건설한 온천 시설로 영국에서 가장 잘 보존된 로마 유적입니다.", category: "유적", tip: "오디오 가이드(한국어 제공)가 포함되어 있으니 꼭 이용하세요." },
      { name: "로열 크레센트", nameEn: "Royal Crescent", description: "1774년 완공된 초승달 모양의 조지안 건축 걸작으로 30채의 연립주택이 아름다운 곡선을 이룹니다.", category: "건축", tip: "No.1 로열 크레센트는 박물관으로 공개되어 내부를 관람할 수 있습니다." },
      { name: "바스 수도원", nameEn: "Bath Abbey", description: "7세기에 창건된 고딕 양식의 수도원으로 아름다운 부채꼴 천장이 특징입니다.", category: "교회" },
      { name: "펄트니 다리", nameEn: "Pulteney Bridge", description: "양쪽에 상점이 늘어선 다리로, 피렌체의 베키오 다리와 비교되는 아름다운 명소.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "스톤헨지", nameEn: "Stonehenge", description: "약 5천 년 전의 선사 시대 거석 기념물.", travelTime: "버스 약 1.5시간", gradient: "from-stone-500 to-gray-700" },
      { name: "코츠월드", nameEn: "Cotswolds", description: "꿀빛 돌집이 아름다운 영국 전원의 정수.", travelTime: "버스 약 1시간", gradient: "from-amber-400 to-lime-600" },
    ],
    localFood: [
      { name: "바스 번", description: "설탕 시럽을 바른 둥근 빵으로 바스의 전통 간식.", emoji: "🍞" },
      { name: "샐리 런 번", description: "1680년부터 이어진 바스의 전통 브리오슈 빵.", emoji: "🥐" },
      { name: "서머셋 사이다", description: "서머셋 지방 특산 사과 발효주.", emoji: "🍎" },
    ],
    tips: [
      "로마 목욕탕은 저녁 시간대 방문 시 횃불 조명 아래 분위기 있게 관람할 수 있습니다.",
      "서멀 바스 스파에서 실제 온천수를 이용한 스파를 즐겨보세요. 루프탑 풀에서 바스 시내가 내려다보입니다.",
      "런던 패딩턴역에서 기차로 약 1시간 30분이면 도착합니다.",
    ],
  },
  "uk/southern-england/oxford": {
    heroGradient: "from-blue-700 to-indigo-900",
    description:
      "영어권에서 가장 오래된 대학 도시로, 800년 이상의 학문적 전통을 자랑합니다. 크라이스트 처치 칼리지는 해리 포터 영화 촬영지로도 유명하며, 보들리안 도서관과 래드클리프 카메라 등 고풍스러운 건축물들이 도시 곳곳에 자리하고 있습니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 (하이 스트리트 주변)",
    transport: "도보, 버스",
    districts: [
      {
        name: "시내 중심부",
        nameEn: "City Centre",
        description: "보들리안 도서관, 래드클리프 카메라 등 주요 대학 건물이 밀집한 학문의 핵심 구역.",
        highlights: ["보들리안 도서관", "래드클리프 카메라", "셀도니안 극장"],
      },
      {
        name: "제리코",
        nameEn: "Jericho",
        description: "카페, 레스토랑, 독립 서점이 모인 옥스퍼드의 트렌디한 지역.",
        highlights: ["리틀 클래런든 스트리트", "피닉스 극장", "옥스포드 운하"],
      },
    ],
    attractions: [
      { name: "보들리안 도서관", nameEn: "Bodleian Library", description: "1602년 설립된 유럽에서 가장 오래된 도서관 중 하나로 해리 포터 촬영지이기도 합니다. 화려한 고딕 천장의 디비니티 스쿨이 압권입니다.", category: "도서관", tip: "가이드 투어를 통해서만 내부 관람이 가능하니 사전 예약하세요." },
      { name: "크라이스트 처치 칼리지", nameEn: "Christ Church College", description: "해리 포터 식당 장면의 모델이 된 그레이트 홀과 아름다운 성당이 있는 명문 칼리지.", category: "대학" },
      { name: "래드클리프 카메라", nameEn: "Radcliffe Camera", description: "원형 돔 모양의 18세기 도서관으로 옥스퍼드의 상징적 건물입니다.", category: "건축" },
      { name: "애슈몰린 박물관", nameEn: "Ashmolean Museum", description: "1683년 개관한 세계 최초의 대학 박물관으로 무료 입장.", category: "박물관" },
    ],
    dayTrips: [
      { name: "블레넘 궁전", nameEn: "Blenheim Palace", description: "윈스턴 처칠의 출생지이자 유네스코 세계유산 바로크 궁전.", travelTime: "버스 약 30분", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "옥스퍼드 치즈", description: "바논 오브 옥스퍼드 등 지역 수제 치즈.", emoji: "🧀" },
      { name: "펍 음식", description: "역사적인 옥스퍼드 펍에서 에일 맥주와 선데이 로스트를 즐기세요.", emoji: "🍺" },
    ],
    tips: [
      "런던 패딩턴역에서 기차로 약 1시간이면 도착합니다.",
      "대학 칼리지들은 학기 중 방문이 제한될 수 있으니 사전 확인하세요.",
      "커버드 마켓에서 현지인처럼 쇼핑과 식사를 즐겨보세요.",
      "옥스퍼드 유니언 디베이트도 관광객에게 가끔 공개됩니다.",
    ],
  },
  "uk/southern-england/cambridge": {
    heroGradient: "from-cyan-600 to-blue-800",
    description:
      "캠 강변에 자리한 세계적인 대학 도시로, 뉴턴과 다윈, 호킹이 거닐던 학문의 전당입니다. 킹스 칼리지 채플의 화려한 고딕 건축과 캠 강에서의 펀팅(뱃놀이)이 필수 코스이며, 수학의 다리와 탄식의 다리 등 이야기가 깃든 명소가 가득합니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 (킹스 퍼레이드 주변)",
    transport: "도보, 자전거, 버스",
    districts: [
      {
        name: "올드 타운",
        nameEn: "Old Town",
        description: "킹스 칼리지, 트리니티 칼리지 등 핵심 칼리지가 밀집한 역사 중심지.",
        highlights: ["킹스 칼리지 채플", "그레이트 세인트 메리 교회", "마켓 스퀘어"],
      },
      {
        name: "더 백스",
        nameEn: "The Backs",
        description: "캠 강변 칼리지 후원(뒷정원)으로 펀팅의 하이라이트 구간.",
        highlights: ["킹스 칼리지 채플 뷰", "수학의 다리", "클레어 브리지"],
      },
    ],
    attractions: [
      { name: "킹스 칼리지", nameEn: "Kings College", description: "1441년 헨리 6세가 설립한 칼리지로, 세계에서 가장 아름다운 고딕 예배당인 킹스 칼리지 채플이 있습니다.", category: "대학", tip: "크리스마스 이브 캐롤 서비스는 전 세계에 중계되는 유명한 행사입니다." },
      { name: "캠 강 펀팅", nameEn: "Punting on the Cam", description: "긴 장대로 배를 젓는 전통 뱃놀이로 캠브리지 여행의 하이라이트입니다.", category: "체험", tip: "직접 조종하거나 가이드 펀팅을 선택할 수 있습니다. 초보자는 가이드 추천." },
      { name: "트리니티 칼리지", nameEn: "Trinity College", description: "뉴턴이 만유인력을 발견한 사과나무가 있는 캠브리지 최대의 칼리지.", category: "대학" },
      { name: "피츠윌리엄 박물관", nameEn: "Fitzwilliam Museum", description: "이집트 유물부터 인상파 회화까지 소장한 무료 대학 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "일리 대성당", nameEn: "Ely Cathedral", description: "습지 위에 솟은 장엄한 중세 대성당, '펜랜드의 배'로 불림.", travelTime: "기차 약 20분", gradient: "from-amber-400 to-stone-600" },
    ],
    localFood: [
      { name: "첼시 번", description: "건포도와 시나몬이 들어간 달콤한 소용돌이 빵.", emoji: "🍞" },
      { name: "영국식 크림 티", description: "스콘에 클로티드 크림과 잼을 곁들인 전통 차 세트.", emoji: "☕" },
    ],
    tips: [
      "런던 킹스크로스역에서 기차로 약 50분이면 도착합니다.",
      "펀팅은 여름철 주말에 매우 혼잡하므로 평일 오전을 추천합니다.",
      "자전거로 도시를 둘러보는 것이 현지인 방식입니다. 대여소가 곳곳에 있습니다.",
    ],
  },
  "uk/southern-england/stonehenge": {
    heroGradient: "from-stone-500 to-gray-700",
    description:
      "약 5천 년 전에 세워진 선사 시대 거석 기념물로, 세계에서 가장 유명한 고대 유적 중 하나입니다. 거대한 돌기둥들이 원형으로 배열된 모습은 여전히 많은 미스터리를 간직하고 있으며, 솔즈베리 평원의 광활한 풍경이 인상적입니다.",
    bestTime: "5~9월 (하지 일출 행사: 6월 21일경)",
    stayArea: "솔즈베리 시내",
    transport: "솔즈베리에서 셔틀버스 (자가 차량 불가)",
    districts: [
      {
        name: "스톤헨지 유적지",
        nameEn: "Stonehenge Site",
        description: "거석 원형 유적과 방문자 센터가 있는 핵심 구역.",
        highlights: ["거석 원형 유적", "방문자 센터", "신석기 시대 주거지 전시"],
      },
      {
        name: "솔즈베리",
        nameEn: "Salisbury",
        description: "스톤헨지의 관문 도시로 장엄한 솔즈베리 대성당이 있는 중세 도시.",
        highlights: ["솔즈베리 대성당", "마그나 카르타", "중세 마켓 스퀘어"],
      },
    ],
    attractions: [
      { name: "스톤헨지 거석", nameEn: "Stonehenge Stones", description: "청동기 시대에 세워진 거대한 돌기둥 원형 배열로 용도에 대한 다양한 학설이 존재합니다.", category: "유적", tip: "사전 온라인 예약 필수이며, 일출/일몰 시간대가 가장 분위기 있습니다." },
      { name: "방문자 센터", nameEn: "Visitor Centre", description: "스톤헨지의 역사와 건설 과정을 인터랙티브 전시로 체험할 수 있습니다.", category: "전시관" },
      { name: "솔즈베리 대성당", nameEn: "Salisbury Cathedral", description: "영국에서 가장 높은 첨탑(123m)을 가진 대성당으로 마그나 카르타 원본을 소장.", category: "성당" },
    ],
    dayTrips: [
      { name: "에이브버리", nameEn: "Avebury", description: "스톤헨지보다 큰 규모의 고대 스톤 서클로 돌 사이를 걸을 수 있음.", travelTime: "차로 약 40분", gradient: "from-green-500 to-stone-600" },
    ],
    localFood: [
      { name: "월트셔 햄", description: "전통 방식으로 절인 월트셔 지방의 유명한 햄.", emoji: "🥓" },
      { name: "스콘과 크림 티", description: "솔즈베리 카페에서 즐기는 전통 크림 티 세트.", emoji: "☕" },
    ],
    tips: [
      "반드시 온라인 사전 예약이 필요합니다. 현장 구매는 매진되는 경우가 많습니다.",
      "솔즈베리에서 스톤헨지까지 셔틀버스가 30분 간격으로 운행됩니다.",
      "바람이 강하므로 방풍 재킷을 준비하세요.",
      "하지(6월 21일경) 특별 일출 행사 시에는 거석 가까이 접근이 허용됩니다.",
    ],
  },
  "uk/southern-england/canterbury": {
    heroGradient: "from-rose-600 to-red-800",
    description:
      "영국 성공회의 총본산인 캔터베리 대성당이 있는 중세 도시입니다. 초서의 '캔터베리 이야기'의 배경으로, 중세 순례자들의 발자취를 따라가볼 수 있습니다. 로마 시대 성벽과 중세 골목길이 잘 보존되어 역사 도시의 매력이 가득합니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 (대성당 주변)",
    transport: "도보 (시내 컴팩트), 버스",
    districts: [
      {
        name: "대성당 구역",
        nameEn: "Cathedral Quarter",
        description: "캔터베리 대성당을 중심으로 한 유네스코 세계유산 구역.",
        highlights: ["캔터베리 대성당", "성 어거스틴 수도원", "성 마틴 교회"],
      },
      {
        name: "킹스 마일",
        nameEn: "Kings Mile",
        description: "웨스트게이트에서 대성당까지 이어지는 쇼핑과 먹거리 거리.",
        highlights: ["웨스트게이트 타워", "로마 박물관", "캔터베리 이야기 체험관"],
      },
    ],
    attractions: [
      { name: "캔터베리 대성당", nameEn: "Canterbury Cathedral", description: "영국 성공회의 총본산으로 토머스 베켓 암살의 현장이기도 한 유네스코 세계유산 성당.", category: "성당", tip: "가이드 투어에 참여하면 대성당의 역사를 깊이 이해할 수 있습니다." },
      { name: "캔터베리 이야기 체험관", nameEn: "Canterbury Tales", description: "초서의 캔터베리 이야기를 체험형 전시로 재현한 박물관.", category: "박물관" },
      { name: "웨스트게이트 타워", nameEn: "Westgate Towers", description: "영국에 현존하는 가장 큰 중세 성문으로 도시 전경을 내려다볼 수 있습니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "도버 백색 절벽", nameEn: "White Cliffs of Dover", description: "영국 해협을 마주한 새하얀 석회암 절벽, 영국의 상징.", travelTime: "기차 약 25분", gradient: "from-white to-blue-400" },
    ],
    localFood: [
      { name: "켄트 사과주", description: "영국의 정원이라 불리는 켄트 지방의 전통 사과 발효주.", emoji: "🍎" },
      { name: "휘트스터블 굴", description: "인근 해안 마을 휘트스터블의 신선한 굴.", emoji: "🦪" },
    ],
    tips: [
      "런던 세인트 판크라스역에서 고속열차로 약 1시간이면 도착합니다.",
      "캔터베리 대성당은 일요일 예배 시간에 무료 입장이 가능합니다.",
      "도보로 충분히 둘러볼 수 있는 규모이며, 성벽 산책로도 추천합니다.",
    ],
  },

  // ===== NORTHERN ENGLAND =====
  "uk/northern-england/manchester": {
    heroGradient: "from-red-700 to-red-900",
    description:
      "산업혁명의 발상지이자 현재는 음악, 예술, 축구로 유명한 활기찬 도시입니다. 올드 트래포드와 에티하드 스타디움에서 세계적인 축구를 관람하고, 노던 쿼터의 독립 상점과 활기찬 나이트라이프에서 젊은 에너지를 느낄 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 / 노던 쿼터",
    transport: "메트로링크 트램, 버스",
    districts: [
      {
        name: "노던 쿼터",
        nameEn: "Northern Quarter",
        description: "독립 상점, 빈티지 가게, 카페, 바가 밀집한 맨체스터의 힙한 지역.",
        highlights: ["어플릭티드 아케이드", "스티비아나 바", "독립 레코드 숍"],
      },
      {
        name: "캐슬필드",
        nameEn: "Castlefield",
        description: "로마 시대 요새 유적과 운하가 어우러진 역사적 지역.",
        highlights: ["로마 요새 유적", "캐슬필드 운하", "과학산업박물관"],
      },
    ],
    attractions: [
      { name: "올드 트래포드", nameEn: "Old Trafford", description: "맨체스터 유나이티드의 홈구장으로 '꿈의 극장'이라 불리는 세계적 축구 성지.", category: "스타디움", tip: "경기 없는 날에도 스타디움 투어와 박물관을 이용할 수 있습니다." },
      { name: "과학산업박물관", nameEn: "Science and Industry Museum", description: "산업혁명 발상지답게 증기기관부터 현대 기술까지 체험할 수 있는 무료 박물관.", category: "박물관" },
      { name: "존 라이랜즈 도서관", nameEn: "John Rylands Library", description: "네오 고딕 양식의 아름다운 도서관으로 구텐베르크 성경 등 귀중한 필사본 소장.", category: "도서관" },
      { name: "맨체스터 미술관", nameEn: "Manchester Art Gallery", description: "라파엘 전파와 현대 미술 컬렉션이 뛰어난 무료 갤러리.", category: "미술관" },
    ],
    dayTrips: [
      { name: "리버풀", nameEn: "Liverpool", description: "비틀즈의 고향이자 항구 도시.", travelTime: "기차 약 1시간", gradient: "from-red-600 to-amber-700" },
      { name: "레이크 디스트릭트", nameEn: "Lake District", description: "영국에서 가장 아름다운 호수 지방.", travelTime: "기차 약 2시간", gradient: "from-teal-600 to-emerald-800" },
    ],
    localFood: [
      { name: "맨체스터 타트", description: "코코넛과 라즈베리 잼이 들어간 맨체스터 전통 타르트.", emoji: "🥧" },
      { name: "랭커셔 핫팟", description: "양고기와 감자를 겹겹이 쌓아 오래 끓인 북잉글랜드 스튜.", emoji: "🍲" },
      { name: "커리 마일 음식", description: "러숄름의 커리 마일에서 즐기는 정통 남아시아 요리.", emoji: "🍛" },
    ],
    tips: [
      "축구 경기 티켓은 최소 한 달 전에 예매하세요. 프리미어리그 경기는 빠르게 매진됩니다.",
      "노던 쿼터는 주말 밤에 가장 활기차며 라이브 음악 공연이 많습니다.",
      "런던 유스턴역에서 기차로 약 2시간이면 도착합니다.",
    ],
  },
  "uk/northern-england/liverpool": {
    heroGradient: "from-red-600 to-amber-700",
    description:
      "비틀즈의 고향이자 유네스코 세계문화유산 항구 도시입니다. 매튜 스트리트의 캐번 클럽에서 비틀즈의 음악적 유산을 직접 체험하고, 앨버트 독의 재개발된 항구 지역에서 박물관과 갤러리를 즐길 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 / 앨버트 독 주변",
    transport: "버스, 메르시레일 (지하철)",
    districts: [
      {
        name: "앨버트 독",
        nameEn: "Albert Dock",
        description: "재개발된 19세기 항구 창고 지역으로 박물관과 레스토랑이 밀집.",
        highlights: ["비틀즈 스토리 박물관", "테이트 리버풀", "머시사이드 해양박물관"],
      },
      {
        name: "캐번 쿼터",
        nameEn: "Cavern Quarter",
        description: "비틀즈가 데뷔한 캐번 클럽이 있는 음악의 성지.",
        highlights: ["캐번 클럽", "매튜 스트리트", "비틀즈 동상"],
      },
    ],
    attractions: [
      { name: "비틀즈 스토리", nameEn: "The Beatles Story", description: "앨버트 독에 위치한 세계 최대의 비틀즈 전시관으로 밴드의 역사를 총망라합니다.", category: "박물관", tip: "오디오 가이드가 매우 상세하니 시간 여유를 갖고 방문하세요." },
      { name: "캐번 클럽", nameEn: "The Cavern Club", description: "비틀즈가 292회 공연한 전설적인 라이브 클럽으로 현재도 공연이 이어지고 있습니다.", category: "음악" },
      { name: "앨버트 독", nameEn: "Albert Dock", description: "영국 최대 규모의 1등급 보존 건물군으로 박물관, 갤러리, 레스토랑이 모여 있습니다.", category: "역사" },
      { name: "리버풀 대성당", nameEn: "Liverpool Cathedral", description: "세계에서 5번째로 큰 성당으로 타워 전망대에서 리버풀 시내와 강 전경을 볼 수 있습니다.", category: "성당" },
    ],
    dayTrips: [
      { name: "체스터", nameEn: "Chester", description: "로마 시대 성벽이 완벽히 보존된 중세 도시.", travelTime: "기차 약 45분", gradient: "from-amber-600 to-red-700" },
    ],
    localFood: [
      { name: "스카우스", description: "양고기 또는 소고기와 감자, 채소를 끓인 리버풀의 전통 스튜.", emoji: "🍲" },
      { name: "칩 바티", description: "감자 튀김을 빵에 끼운 소박한 영국 북부식 샌드위치.", emoji: "🥪" },
    ],
    tips: [
      "비틀즈 팬이라면 매지컬 미스터리 투어 버스를 타고 페니 레인, 스트로베리 필드 등을 방문하세요.",
      "캐번 클럽은 매일 라이브 공연이 열리며 입장료가 저렴합니다.",
      "맨체스터에서 기차로 약 1시간이므로 함께 여행하기 좋습니다.",
    ],
  },
  "uk/northern-england/york": {
    heroGradient: "from-amber-700 to-stone-700",
    description:
      "로마, 바이킹, 중세 시대의 역사가 겹겹이 쌓인 영국 최고의 역사 도시입니다. 요크 민스터 대성당은 북유럽 최대의 고딕 성당으로 장엄한 스테인드글라스가 압도적이며, 셰임블즈 거리는 해리 포터 다이애건 앨리의 영감이 된 중세 골목입니다.",
    bestTime: "5~9월 (12월 크리스마스 마켓도 인기)",
    stayArea: "시내 중심부 (성벽 안쪽)",
    transport: "도보 (시내 중심부 컴팩트)",
    districts: [
      {
        name: "성벽 안 구시가지",
        nameEn: "Old Town",
        description: "중세 성벽으로 둘러싸인 요크의 역사적 핵심 구역.",
        highlights: ["요크 민스터", "셰임블즈 거리", "클리포드 타워"],
      },
      {
        name: "요르빅",
        nameEn: "Jorvik",
        description: "바이킹 시대 요크의 유적이 발견된 역사적 지역.",
        highlights: ["요르빅 바이킹 센터", "코퍼게이트 쇼핑", "디그 체험관"],
      },
    ],
    attractions: [
      { name: "요크 민스터", nameEn: "York Minster", description: "북유럽 최대의 고딕 대성당으로 중세 스테인드글라스의 보고입니다. 특히 대동창(Great East Window)은 테니스 코트 크기의 세계 최대 중세 스테인드글라스입니다.", category: "성당", tip: "타워(275계단)에 올라가면 요크 시내 전경을 360도로 볼 수 있습니다." },
      { name: "셰임블즈 거리", nameEn: "The Shambles", description: "14세기 목조 건물이 기울어져 있는 중세 골목으로 해리 포터 다이애건 앨리의 영감이 된 곳.", category: "거리" },
      { name: "요크 성벽", nameEn: "York City Walls", description: "약 3.4km에 달하는 중세 성벽으로 영국에서 가장 잘 보존된 도시 성벽입니다.", category: "역사", tip: "전체 일주 약 2시간. 부분 구간만 걸어도 좋습니다." },
      { name: "국립철도박물관", nameEn: "National Railway Museum", description: "세계 최대 규모의 철도 박물관으로 무료 입장. 역사적 기관차와 왕실 열차 전시.", category: "박물관" },
    ],
    dayTrips: [
      { name: "요크셔 데일즈", nameEn: "Yorkshire Dales", description: "석회암 지형과 목가적 전원 풍경의 국립공원.", travelTime: "차로 약 1시간", gradient: "from-green-600 to-lime-800" },
      { name: "휘트비", nameEn: "Whitby", description: "드라큘라 소설의 배경이 된 해안 마을.", travelTime: "버스 약 1.5시간", gradient: "from-slate-500 to-blue-700" },
    ],
    localFood: [
      { name: "요크셔 푸딩", description: "로스트 비프에 곁들이는 부풀어 오른 밀가루 반죽 푸딩.", emoji: "🍞" },
      { name: "요크셔 파킨", description: "오트밀과 당밀로 만든 진저브레드 케이크.", emoji: "🍰" },
      { name: "베티스 카페 티룸", description: "1936년 개업한 요크의 전설적인 티룸에서의 애프터눈 티.", emoji: "🫖" },
    ],
    tips: [
      "런던 킹스크로스역에서 기차로 약 2시간이면 도착합니다.",
      "요크 패스를 구매하면 주요 관광지 입장료를 절약할 수 있습니다.",
      "셰임블즈 거리는 이른 아침이 인파 없이 사진 찍기 좋습니다.",
      "유령 투어(Ghost Walk)는 요크의 명물이니 저녁에 참여해 보세요.",
    ],
  },
  "uk/northern-england/lake-district": {
    heroGradient: "from-teal-600 to-emerald-800",
    description:
      "영국에서 가장 아름다운 국립공원으로, 워즈워스와 비어트릭스 포터가 사랑한 호수 지방입니다. 윈더미어 호수를 비롯한 수십 개의 호수와 잉글랜드 최고봉 스카펠 파이크가 장관을 이루며, 하이킹, 보트 여행, 아기자기한 마을 산책 등 자연 속 힐링 여행의 정수를 경험할 수 있습니다.",
    bestTime: "5~9월 (7~8월이 가장 온화)",
    stayArea: "윈더미어 / 앰블사이드 / 케즈윅",
    transport: "렌터카 추천, 버스 (555번 등)",
    districts: [
      {
        name: "윈더미어",
        nameEn: "Windermere",
        description: "잉글랜드에서 가장 긴 호수가 있는 레이크 디스트릭트의 관문 마을.",
        highlights: ["윈더미어 호수 크루즈", "보네스 마을", "피터 래빗 박물관"],
      },
      {
        name: "케즈윅",
        nameEn: "Keswick",
        description: "더웬트워터 호수변의 매력적인 마을로 북부 레이크 디스트릭트의 거점.",
        highlights: ["더웬트워터 호수", "캐슬릭 스톤 서클", "연필 박물관"],
      },
      {
        name: "그래스미어",
        nameEn: "Grasmere",
        description: "워즈워스가 살았던 마을로 진저브레드 가게가 유명.",
        highlights: ["도브 코티지", "그래스미어 호수", "사라 넬슨 진저브레드"],
      },
    ],
    attractions: [
      { name: "윈더미어 호수", nameEn: "Lake Windermere", description: "잉글랜드에서 가장 긴 호수(약 17km)로 크루즈와 보트 대여가 인기입니다.", category: "자연", tip: "윈더미어-앰블사이드-레이크사이드 구간 크루즈가 가장 인기 있습니다." },
      { name: "헬벨린 산", nameEn: "Helvellyn", description: "잉글랜드에서 세 번째로 높은 산(950m)으로 스트라이딩 에지 능선이 유명한 하이킹 명소.", category: "하이킹", tip: "스트라이딩 에지는 경험 있는 하이커에게 추천. 초보자는 레드 탄 루트를 이용하세요." },
      { name: "피터 래빗 박물관", nameEn: "World of Beatrix Potter", description: "비어트릭스 포터의 동화 세계를 재현한 체험형 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "요크", nameEn: "York", description: "중세 역사 도시로 요크 민스터와 셰임블즈 거리가 유명.", travelTime: "차로 약 2시간", gradient: "from-amber-700 to-stone-700" },
    ],
    localFood: [
      { name: "그래스미어 진저브레드", description: "1854년부터 이어진 레시피의 진저브레드, 그래스미어 마을 필수 간식.", emoji: "🍪" },
      { name: "컴벌랜드 소시지", description: "허브를 넣어 나선형으로 감은 레이크 디스트릭트 전통 소시지.", emoji: "🌭" },
      { name: "댐슨 잼", description: "레이크 디스트릭트 자생 댐슨 자두로 만든 잼.", emoji: "🫐" },
    ],
    tips: [
      "대중교통이 불편하므로 렌터카를 강력히 추천합니다.",
      "방수 재킷과 등산화는 날씨에 관계없이 필수 준비물입니다.",
      "여름 성수기에는 숙소 사전 예약이 필수입니다.",
      "호수마다 분위기가 다르니 여러 호수를 방문해 보세요.",
    ],
  },

  // ===== SCOTLAND =====
  "uk/scotland/edinburgh": {
    heroGradient: "from-violet-700 to-indigo-900",
    description:
      "스코틀랜드의 수도로, 에든버러 성이 내려다보는 장엄한 중세 도시입니다. 로열 마일을 따라 걸으며 올드타운의 역사를 느끼고, 뉴타운의 우아한 조지안 건축을 감상할 수 있습니다. 매년 8월 세계 최대의 예술 축제인 에든버러 페스티벌이 열려 도시 전체가 무대가 됩니다.",
    bestTime: "5~9월 (8월 에든버러 페스티벌)",
    stayArea: "올드타운 / 뉴타운",
    transport: "도보, 트램, 버스 (로디안 버스)",
    districts: [
      {
        name: "올드타운",
        nameEn: "Old Town",
        description: "에든버러 성에서 홀리루드 궁전까지 이어지는 중세 역사 지구.",
        highlights: ["에든버러 성", "로열 마일", "세인트 자일스 대성당"],
      },
      {
        name: "뉴타운",
        nameEn: "New Town",
        description: "18세기 조지안 양식의 우아한 건축물이 늘어선 유네스코 세계유산 지역.",
        highlights: ["프린시스 스트리트", "조지 스트리트", "스코틀랜드 국립 갤러리"],
      },
      {
        name: "그래스마켓",
        nameEn: "Grassmarket",
        description: "올드타운 아래 위치한 역사적 광장으로 펍과 레스토랑이 밀집.",
        highlights: ["그래스마켓 광장", "빅토리아 스트리트", "그레이프라이어즈 바비 동상"],
      },
    ],
    attractions: [
      { name: "에든버러 성", nameEn: "Edinburgh Castle", description: "화산 바위 위에 세워진 스코틀랜드의 상징으로 천 년의 역사를 간직한 요새입니다. 스코틀랜드 왕관 보석과 운명의 돌이 전시되어 있습니다.", category: "고성", tip: "오후보다 오전에 방문하면 대기 시간이 짧습니다. 온라인 예매 시 할인 적용." },
      { name: "로열 마일", nameEn: "Royal Mile", description: "에든버러 성에서 홀리루드 궁전까지 약 1.6km 이어지는 올드타운의 중심 거리로 역사적 건물, 상점, 펍이 줄지어 있습니다.", category: "거리", tip: "좁은 골목(클로즈)으로 들어가면 숨겨진 안뜰과 역사를 발견할 수 있습니다." },
      { name: "아서스 시트", nameEn: "Arthurs Seat", description: "도심 속 251m 높이의 고대 화산으로 에든버러와 바다를 한눈에 조망하는 최고의 전망 하이킹 코스입니다.", category: "하이킹", tip: "왕복 약 2시간. 일몰 시간에 맞춰 오르면 환상적인 뷰를 감상할 수 있습니다." },
      { name: "스카치 위스키 체험관", nameEn: "Scotch Whisky Experience", description: "스코틀랜드 위스키의 역사와 제조 과정을 배우고 시음할 수 있는 체험관.", category: "체험" },
      { name: "칼튼 힐", nameEn: "Calton Hill", description: "에든버러 시내 전체와 성을 바라보는 전망 명소로 '북방의 아테네' 기념탑이 있습니다.", category: "전망대" },
    ],
    dayTrips: [
      { name: "스코틀랜드 하이랜드", nameEn: "Scottish Highlands", description: "네스호, 글렌코 등 장엄한 자연을 만나는 당일 투어.", travelTime: "투어 버스 종일 코스", gradient: "from-green-800 to-emerald-950" },
      { name: "세인트 앤드루스", nameEn: "St Andrews", description: "골프의 성지이자 영국 왕세자비가 만난 대학 도시.", travelTime: "버스 약 2시간", gradient: "from-blue-500 to-green-700" },
    ],
    localFood: [
      { name: "해기스", description: "양의 내장에 오트밀과 허브를 넣어 조리한 스코틀랜드 국민 음식.", emoji: "🏴" },
      { name: "컬렌 스킹크", description: "훈제 대구와 감자를 넣은 크림 수프, 스코틀랜드 전통 요리.", emoji: "🍲" },
      { name: "스카치 위스키", description: "스코틀랜드의 자부심으로 지역마다 특색이 다른 싱글 몰트 위스키.", emoji: "🥃" },
    ],
    tips: [
      "에든버러 페스티벌(8월)을 방문할 계획이라면 최소 3~6개월 전에 숙소를 예약하세요.",
      "프리 워킹 투어(팁 기반)로 올드타운의 역사를 배우는 것을 추천합니다.",
      "런던 킹스크로스역에서 기차로 약 4시간 30분이면 도착합니다.",
      "여름에도 기온이 낮으므로 재킷을 준비하세요.",
    ],
  },
  "uk/scotland/glasgow": {
    heroGradient: "from-orange-600 to-red-800",
    description:
      "스코틀랜드 최대의 도시로, 빅토리아 시대 건축과 현대 예술이 어우러진 문화 도시입니다. 찰스 레니 매킨토시의 아르누보 건축물과 켈빈그로브 미술관이 대표적인 볼거리이며, 활기찬 음악 씬과 미식 문화로 스코틀랜드의 문화 수도라 불립니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 / 웨스트엔드",
    transport: "지하철 (서클 라인), 버스, 기차",
    districts: [
      {
        name: "시내 중심부",
        nameEn: "City Centre",
        description: "조지 광장과 뷰캐넌 스트리트가 있는 상업과 문화의 중심지.",
        highlights: ["조지 광장", "뷰캐넌 스트리트", "글래스고 대성당"],
      },
      {
        name: "웨스트엔드",
        nameEn: "West End",
        description: "글래스고 대학과 켈빈그로브 미술관이 있는 학문과 문화의 지역.",
        highlights: ["켈빈그로브 미술관", "글래스고 대학", "바이레스 로드"],
      },
    ],
    attractions: [
      { name: "켈빈그로브 미술관", nameEn: "Kelvingrove Art Gallery", description: "스코틀랜드에서 가장 인기 있는 박물관으로 달리의 십자가의 성 요한을 비롯한 8,000점 이상의 작품을 무료로 감상할 수 있습니다.", category: "미술관", tip: "무료 입장이며 파이프 오르간 연주가 매일 열립니다." },
      { name: "글래스고 대성당", nameEn: "Glasgow Cathedral", description: "12세기에 건설된 스코틀랜드에서 가장 오래된 대성당으로 지하 크립트가 인상적입니다.", category: "성당" },
      { name: "리버사이드 교통박물관", nameEn: "Riverside Museum", description: "자하 하디드가 설계한 건물에 3,000점 이상의 교통 수단이 전시된 무료 박물관.", category: "박물관" },
      { name: "조지 광장", nameEn: "George Square", description: "글래스고의 중심 광장으로 시청사와 역사적 동상들이 둘러싸고 있습니다.", category: "광장" },
    ],
    dayTrips: [
      { name: "로크 로몬드", nameEn: "Loch Lomond", description: "글래스고 근교의 아름다운 호수로 하이킹과 보트를 즐길 수 있음.", travelTime: "기차 약 50분", gradient: "from-blue-600 to-green-700" },
    ],
    localFood: [
      { name: "딥프라이드 마스 바", description: "초콜릿 바를 튀긴 글래스고의 독특한 간식(용감한 자만 도전!).", emoji: "🍫" },
      { name: "이른 브루", description: "스코틀랜드의 국민 음료로 주황색 탄산 음료.", emoji: "🥤" },
      { name: "해기스 너겟", description: "해기스를 튀김옷에 입혀 간편하게 즐기는 스코틀랜드식 간식.", emoji: "🍗" },
    ],
    tips: [
      "에든버러에서 기차로 약 50분이므로 함께 방문하기 좋습니다.",
      "무료 박물관과 갤러리가 많아 예산 여행에 적합합니다.",
      "매킨토시 트레일을 따라 아르누보 건축물을 둘러보세요.",
      "바이레스 로드에서의 브런치와 빈티지 쇼핑을 추천합니다.",
    ],
  },
  "uk/scotland/highlands": {
    heroGradient: "from-green-800 to-emerald-950",
    description:
      "스코틀랜드 북부의 광활한 고원 지대로, 유럽에서 가장 드라마틱한 자연 풍경을 자랑합니다. 네스호의 전설, 글렌코의 장엄한 계곡, 벤네비스 산 등 숨 막히는 경관이 끝없이 펼쳐지며, 해리 포터 영화에 등장한 글렌피넌 고가교가 여행의 하이라이트입니다.",
    bestTime: "5~9월 (6~8월 최적, 미지 방지)",
    stayArea: "인버네스 / 포트 윌리엄",
    transport: "렌터카 필수 (대중교통 매우 불편)",
    districts: [
      {
        name: "인버네스",
        nameEn: "Inverness",
        description: "하이랜드의 수도이자 네스호 관광의 거점 도시.",
        highlights: ["인버네스 성", "네스강 산책로", "빅토리안 마켓"],
      },
      {
        name: "글렌코",
        nameEn: "Glencoe",
        description: "영국에서 가장 드라마틱한 계곡으로 영화 촬영지로도 유명.",
        highlights: ["글렌코 계곡", "쓰리 시스터즈", "비지터 센터"],
      },
      {
        name: "포트 윌리엄",
        nameEn: "Fort William",
        description: "벤네비스 산 등반의 거점 도시이자 웨스트 하이랜드 웨이의 종점.",
        highlights: ["벤네비스 산", "글렌피넌 고가교", "네비스 레인지"],
      },
    ],
    attractions: [
      { name: "네스호", nameEn: "Loch Ness", description: "전설의 괴물 네시로 유명한 스코틀랜드 최대 담수호로 어쿼트 성과 함께 방문합니다.", category: "자연", tip: "보트 투어를 통해 호수 위에서 어쿼트 성과 주변 경관을 감상하세요." },
      { name: "글렌코 계곡", nameEn: "Glen Coe", description: "빙하가 만든 장엄한 U자형 계곡으로 스카이폴, 해리 포터 등 영화 촬영지.", category: "자연" },
      { name: "벤네비스 산", nameEn: "Ben Nevis", description: "영국 제도 최고봉(1,345m)으로 매년 수만 명의 하이커가 도전하는 명산.", category: "하이킹", tip: "왕복 7~9시간 소요. 날씨 변화에 대비해 완전한 등산 장비를 준비하세요." },
      { name: "글렌피넌 고가교", nameEn: "Glenfinnan Viaduct", description: "해리 포터 호그와트 익스프레스가 달린 21개 아치의 철도 교량.", category: "랜드마크", tip: "자코바이트 증기기관차가 통과하는 시간에 맞춰 전망대에서 촬영하세요." },
    ],
    dayTrips: [
      { name: "스카이 섬", nameEn: "Isle of Skye", description: "초현실적 자연 경관의 섬으로 스카이 브리지를 건너 접근 가능.", travelTime: "포트 윌리엄에서 차로 약 2시간", gradient: "from-sky-600 to-slate-800" },
    ],
    localFood: [
      { name: "해기스", description: "양의 내장을 오트밀과 허브로 조리한 스코틀랜드의 전통 음식.", emoji: "🏴" },
      { name: "스코틀랜드 연어", description: "하이랜드 청정 수역에서 양식한 신선한 연어.", emoji: "🐟" },
      { name: "클래나챈", description: "라즈베리, 오트밀, 크림, 위스키를 섞은 스코틀랜드 전통 디저트.", emoji: "🍨" },
    ],
    tips: [
      "렌터카 여행이 필수이며, 단차선 도로에서는 패싱 플레이스를 이용해 양보하세요.",
      "여름에도 기온이 낮고 비가 잦으므로 방풍 방수 재킷은 필수입니다.",
      "미지(작은 날벌레)가 5~9월에 극성이므로 방충제를 준비하세요.",
      "위스키 증류소 투어는 스페이사이드 지역이 가장 유명합니다.",
    ],
  },
  "uk/scotland/isle-of-skye": {
    heroGradient: "from-sky-600 to-slate-800",
    description:
      "스코틀랜드 서해안의 보석 같은 섬으로, 초현실적인 자연 경관이 펼쳐지는 곳입니다. 올드 맨 오브 스토르, 퀴랭, 페어리 풀 등 마치 다른 세계에 온 듯한 지형이 압도적이며, 극적인 해안 절벽과 중세 성곽, 맑은 날의 환상적인 일몰이 여행자를 사로잡습니다.",
    bestTime: "6~8월 (일조시간이 길고 상대적으로 온화)",
    stayArea: "포트리 / 브로드포드",
    transport: "렌터카 필수 (대중교통 극히 제한적)",
    districts: [
      {
        name: "포트리",
        nameEn: "Portree",
        description: "스카이 섬의 수도로 알록달록한 항구 건물과 레스토랑이 있는 중심 마을.",
        highlights: ["포트리 항구", "아로스 체험 센터", "쿨린스 뷰"],
      },
      {
        name: "트로터니시 반도",
        nameEn: "Trotternish Peninsula",
        description: "올드 맨 오브 스토르와 퀴랭이 위치한 섬의 하이라이트 구역.",
        highlights: ["올드 맨 오브 스토르", "퀴랭", "킬트 록"],
      },
    ],
    attractions: [
      { name: "올드 맨 오브 스토르", nameEn: "Old Man of Storr", description: "하늘을 찌르는 바위 기둥이 장관인 스카이 섬의 상징적 랜드마크.", category: "하이킹", tip: "주차장에서 왕복 약 2시간. 이른 아침 방문이 인파가 적고 빛이 아름답습니다." },
      { name: "퀴랭", nameEn: "The Quiraing", description: "초현실적 산악 지형으로 '테이블'이라 불리는 숨겨진 고원이 인상적입니다.", category: "하이킹" },
      { name: "페어리 풀", nameEn: "Fairy Pools", description: "맑고 청록색 물이 흐르는 마법 같은 천연 수영장 시리즈.", category: "자연", tip: "주차장에서 도보 약 30분. 물에 발을 담글 수 있지만 매우 차갑습니다." },
      { name: "던베건 성", nameEn: "Dunvegan Castle", description: "맥클라우드 씨족의 800년 된 성으로 스코틀랜드에서 가장 오래 거주 중인 성.", category: "고성" },
    ],
    dayTrips: [
      { name: "네스트 포인트 등대", nameEn: "Neist Point Lighthouse", description: "스카이 섬 서쪽 끝의 등대로 일몰 명소.", travelTime: "포트리에서 차로 약 50분", gradient: "from-orange-500 to-pink-700" },
    ],
    localFood: [
      { name: "스카이 섬 해산물", description: "랍스터, 가리비, 랑구스틴 등 청정 해역의 신선한 해산물.", emoji: "🦞" },
      { name: "탈리스커 위스키", description: "스카이 섬 유일의 증류소에서 생산하는 피트향 강한 싱글 몰트.", emoji: "🥃" },
    ],
    tips: [
      "렌터카가 필수이며 성수기에는 주차 공간이 부족하니 이른 아침 출발을 권장합니다.",
      "날씨가 하루에도 여러 번 바뀌므로 방수 장비를 항상 지참하세요.",
      "미지(작은 날벌레) 대비 방충제와 헤드넷을 준비하세요.",
      "탈리스커 증류소 투어는 사전 예약을 권장합니다.",
    ],
  },

  // ===== WALES =====
  "uk/wales/cardiff": {
    heroGradient: "from-red-600 to-green-700",
    description:
      "웨일스의 수도로, 카디프 성과 현대적 베이 지구가 어우러진 활기찬 도시입니다. 프린시팔리티 스타디움에서 럭비와 축구 국제 경기를 관람하고, 카디프 베이의 웨일스 밀레니엄 센터에서 현대 웨일스의 문화적 자신감을 느낄 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 / 카디프 베이",
    transport: "버스, 기차, 도보",
    districts: [
      {
        name: "시내 중심부",
        nameEn: "City Centre",
        description: "카디프 성과 프린시팔리티 스타디움이 있는 도시의 핵심 구역.",
        highlights: ["카디프 성", "프린시팔리티 스타디움", "카디프 아케이드"],
      },
      {
        name: "카디프 베이",
        nameEn: "Cardiff Bay",
        description: "재개발된 항구 지역으로 웨일스 밀레니엄 센터와 레스토랑이 밀집.",
        highlights: ["웨일스 밀레니엄 센터", "노르웨이 교회", "로알드 달 플라스"],
      },
    ],
    attractions: [
      { name: "카디프 성", nameEn: "Cardiff Castle", description: "2천 년 역사의 성으로 로마 요새 위에 노르만 양식과 빅토리아 고딕 양식이 겹겹이 쌓여 있습니다.", category: "고성", tip: "하우스 투어에 참여하면 화려한 빅토리아 인테리어를 볼 수 있습니다." },
      { name: "프린시팔리티 스타디움", nameEn: "Principality Stadium", description: "개폐식 지붕을 갖춘 74,000석 규모의 스타디움으로 웨일스 럭비의 성지.", category: "스타디움" },
      { name: "웨일스 밀레니엄 센터", nameEn: "Wales Millennium Centre", description: "웨일스 공연 예술의 중심지로 오페라, 발레, 뮤지컬이 공연됩니다.", category: "공연장" },
      { name: "카디프 아케이드", nameEn: "Cardiff Arcades", description: "빅토리아와 에드워드 시대의 아름다운 쇼핑 아케이드 7개가 모인 독특한 쇼핑 구역.", category: "쇼핑" },
    ],
    dayTrips: [
      { name: "브레콘 비컨스", nameEn: "Brecon Beacons", description: "별 관측과 하이킹으로 유명한 국립공원.", travelTime: "차로 약 50분", gradient: "from-emerald-700 to-teal-900" },
    ],
    localFood: [
      { name: "웰시 레어빗", description: "맥주와 머스타드를 섞은 치즈 소스를 토스트에 얹어 구운 웨일스 대표 음식.", emoji: "🧀" },
      { name: "웰시 케이크", description: "건포도와 향신료가 들어간 동그란 전통 팬케이크.", emoji: "🍪" },
      { name: "라버브레드", description: "해초를 으깨어 오트밀과 함께 튀긴 웨일스 전통 아침 식사.", emoji: "🌿" },
    ],
    tips: [
      "런던 패딩턴역에서 기차로 약 2시간이면 도착합니다.",
      "럭비 식스 네이션스 시즌(2~3월)에는 도시 전체가 축제 분위기입니다.",
      "카디프 아케이드에서 독립 상점과 카페를 둘러보는 것을 추천합니다.",
    ],
  },
  "uk/wales/snowdonia": {
    heroGradient: "from-gray-600 to-green-800",
    description:
      "웨일스 북부의 국립공원으로, 웨일스 최고봉 스노든 산(1,085m)을 품고 있습니다. 하이킹 외에도 스노든 마운틴 레일웨이를 타고 정상까지 올라갈 수 있어 누구나 장관을 즐길 수 있으며, 고대 슬레이트 광산과 깊은 호수들이 야생의 풍경을 만듭니다.",
    bestTime: "5~9월 (스노든 마운틴 레일웨이 3~10월 운행)",
    stayArea: "란베리스 / 벳위스이코에드 / 돌겔라우",
    transport: "렌터카 추천, 스노든 셰르파 버스",
    districts: [
      {
        name: "란베리스",
        nameEn: "Llanberis",
        description: "스노든 산 등반의 관문 마을로 산악 레일웨이 출발점.",
        highlights: ["스노든 마운틴 레일웨이", "슬레이트 박물관", "파다른 호수"],
      },
      {
        name: "벳위스이코에드",
        nameEn: "Betws-y-Coed",
        description: "스노도니아의 관문으로 아기자기한 돌집 마을.",
        highlights: ["스완로 폭포", "폰티피어 다리", "아웃도어 장비 상점"],
      },
    ],
    attractions: [
      { name: "스노든 산", nameEn: "Mount Snowdon", description: "웨일스 최고봉(1,085m)으로 여러 등반 루트가 있으며, 정상에서 아일랜드까지 보이는 날도 있습니다.", category: "하이킹", tip: "초보자에게는 란베리스 패스 루트를, 경험자에게는 크리브 고흐 루트를 추천합니다." },
      { name: "스노든 마운틴 레일웨이", nameEn: "Snowdon Mountain Railway", description: "1896년부터 운행된 산악 열차로 정상까지 편안하게 올라갈 수 있습니다.", category: "교통", tip: "성수기에는 사전 예약 필수이며 기상 조건에 따라 운행이 중단될 수 있습니다." },
      { name: "짚 월드", nameEn: "Zip World", description: "세계에서 가장 빠른 짚라인(시속 160km)을 체험할 수 있는 어드벤처 파크.", category: "체험" },
    ],
    dayTrips: [
      { name: "콘위", nameEn: "Conwy", description: "에드워드 1세의 중세 성곽 도시, 유네스코 세계유산.", travelTime: "차로 약 30분", gradient: "from-stone-600 to-amber-800" },
    ],
    localFood: [
      { name: "웨일스 양고기", description: "산악 지대에서 방목한 웨일스 양고기는 풍미가 뛰어납니다.", emoji: "🐑" },
      { name: "바라 브리스", description: "차에 적신 과일빵으로 웨일스 전통 티타임 간식.", emoji: "🍞" },
    ],
    tips: [
      "산악 날씨는 급변하므로 방수 재킷, 따뜻한 옷, 등산화를 반드시 준비하세요.",
      "스노든 산 등반은 날씨가 좋은 날로 일정을 유동적으로 잡으세요.",
      "런던에서 기차와 버스를 이용해 약 4~5시간이 소요됩니다.",
    ],
  },
  "uk/wales/brecon-beacons": {
    heroGradient: "from-emerald-700 to-teal-900",
    description:
      "웨일스 남부의 국립공원으로, 완만한 산악 지형과 폭포, 동굴이 어우러진 자연의 보고입니다. 국제 밤하늘 보호구역으로 지정되어 맑은 밤이면 은하수를 관측할 수 있으며, 펜이판 산 하이킹과 네 개의 폭포 트레일이 가장 인기 있는 코스입니다.",
    bestTime: "5~9월 (별 관측: 10~3월 겨울 밤)",
    stayArea: "브레콘 타운 / 크릭하웰",
    transport: "렌터카 필수",
    districts: [
      {
        name: "브레콘",
        nameEn: "Brecon",
        description: "국립공원의 관문 도시로 대성당과 전통 마켓이 있는 소도시.",
        highlights: ["브레콘 대성당", "타운 센터 마켓", "에산 유흐 저수지"],
      },
      {
        name: "폭포 지대",
        nameEn: "Waterfall Country",
        description: "여러 개의 폭포가 밀집한 하이킹 트레일 구역.",
        highlights: ["네 개의 폭포 트레일", "스구드 이르 에이라 폭포", "폰트 네드 페찬 계곡"],
      },
    ],
    attractions: [
      { name: "펜이판 산", nameEn: "Pen y Fan", description: "남웨일스 최고봉(886m)으로 왕복 약 4시간의 인기 하이킹 코스입니다.", category: "하이킹", tip: "스토리 암스 주차장에서 출발하는 루트가 가장 인기가 있습니다." },
      { name: "네 개의 폭포 트레일", nameEn: "Four Waterfalls Walk", description: "4개의 아름다운 폭포를 연속으로 만나는 약 4km의 트레일.", category: "하이킹" },
      { name: "밤하늘 관측", nameEn: "Dark Sky Stargazing", description: "국제 밤하늘 보호구역에서 맨눈으로 은하수와 수천 개의 별을 관측할 수 있습니다.", category: "체험", tip: "새달(그믐달) 전후가 가장 별 관측에 좋으며, 방문자 센터에서 이벤트를 확인하세요." },
    ],
    dayTrips: [
      { name: "카디프", nameEn: "Cardiff", description: "웨일스의 수도로 카디프 성과 베이 지구가 볼거리.", travelTime: "차로 약 50분", gradient: "from-red-600 to-green-700" },
    ],
    localFood: [
      { name: "웨일스 양고기 스튜", description: "현지 양고기와 근채류를 오래 끓인 따뜻한 전통 스튜.", emoji: "🍲" },
      { name: "크릭하웰 수제 치즈", description: "브레콘 비컨스 인근 마을에서 생산하는 수제 치즈.", emoji: "🧀" },
    ],
    tips: [
      "렌터카가 필수이며 시골 도로 운전에 주의하세요.",
      "별 관측을 위해서는 겨울 방문이 좋지만 방한 장비를 철저히 준비하세요.",
      "폭포 트레일은 비 온 후 수량이 많아져 더 장관입니다.",
    ],
  },
  "uk/wales/conwy": {
    heroGradient: "from-stone-600 to-amber-800",
    description:
      "에드워드 1세가 건설한 웅장한 중세 성곽 도시로, 유네스코 세계문화유산입니다. 완벽하게 보존된 성벽을 따라 걸으며 중세 시대로 시간 여행을 하는 듯한 기분을 느낄 수 있으며, 아기자기한 항구 풍경과 영국에서 가장 작은 집이 소도시의 매력을 더합니다.",
    bestTime: "5~9월",
    stayArea: "콘위 타운 내 (성벽 안쪽)",
    transport: "도보 (타운 내 컴팩트), 기차",
    districts: [
      {
        name: "성벽 안 구시가지",
        nameEn: "Walled Town",
        description: "13세기 성벽으로 둘러싸인 중세 타운 전체가 관광 구역.",
        highlights: ["콘위 성", "성벽 산책로", "하이 스트리트"],
      },
      {
        name: "콘위 키",
        nameEn: "Conwy Quay",
        description: "콘위강변의 항구 지역으로 머슬(홍합) 요리로 유명.",
        highlights: ["영국에서 가장 작은 집", "콘위 항구", "머슬 보트"],
      },
    ],
    attractions: [
      { name: "콘위 성", nameEn: "Conwy Castle", description: "에드워드 1세가 1283년 건설한 웅장한 중세 성으로 8개의 원형 탑이 인상적인 유네스코 세계유산.", category: "고성", tip: "성벽 위에서 내려다보는 콘위 마을과 강 전경이 아름답습니다." },
      { name: "콘위 성벽 산책", nameEn: "Conwy Town Walls", description: "약 1.3km에 달하는 완벽하게 보존된 중세 성벽 위를 걸을 수 있습니다.", category: "역사" },
      { name: "영국에서 가장 작은 집", nameEn: "Smallest House in Britain", description: "높이 3m, 너비 1.8m의 영국에서 가장 작은 집으로 19세기까지 실제 거주했습니다.", category: "명소" },
      { name: "보드난트 가든", nameEn: "Bodnant Garden", description: "80에이커 규모의 아름다운 정원으로 특히 라버넘 아치(5~6월)가 장관.", category: "정원" },
    ],
    dayTrips: [
      { name: "스노도니아", nameEn: "Snowdonia", description: "웨일스 최고봉 스노든 산이 있는 국립공원.", travelTime: "차로 약 30분", gradient: "from-gray-600 to-green-800" },
    ],
    localFood: [
      { name: "콘위 머슬(홍합)", description: "콘위강 하구에서 채취한 신선한 홍합 요리.", emoji: "🦪" },
      { name: "웰시 레어빗", description: "치즈와 맥주 소스를 토스트에 올린 웨일스 전통 요리.", emoji: "🧀" },
    ],
    tips: [
      "캐드우 웨일스 문화재청에서 관리하는 성곽으로, 익스플로러 패스를 구매하면 웨일스 내 여러 성을 할인 방문할 수 있습니다.",
      "런던에서 기차로 약 3시간 30분이면 도착합니다.",
      "보드난트 가든의 라버넘 아치는 5월 말~6월 초가 절정입니다.",
    ],
  },
};

export const ukAttractionDetails: Record<string, AttractionDetail> = {
  // ===== WESTMINSTER (5) =====
  "uk/london/westminster/big-ben": {
    heroGradient: "from-amber-600 to-red-800",
    description:
      "런던의 상징적인 시계탑으로, 정식 명칭은 엘리자베스 타워입니다. 1859년부터 울린 종소리는 BBC를 통해 전 세계에 방송되며 런던의 대명사가 되었습니다. 네오 고딕 양식의 96m 높이 탑은 국회의사당(웨스트민스터 궁전)의 북쪽 끝에 서 있습니다.",
    history:
      "1858년 완공되어 1859년 5월 31일 처음으로 종이 울렸습니다. '빅벤'은 원래 탑 안의 13.5톤 종의 이름이었으나, 이제는 탑 전체를 가리키는 별칭이 되었습니다. 2012년 엘리자베스 2세 여왕 즉위 60주년을 기념해 공식 명칭이 엘리자베스 타워로 변경되었습니다.",
    visitInfo: {
      hours: "외부 관람 상시 가능, 내부 투어는 영국 거주자만 신청 가능 (의원 추천 필요)",
      admission: "외부 관람 무료",
      address: "Houses of Parliament, Westminster, London SW1A 0AA",
      website: "https://www.parliament.uk/bigben",
    },
    highlights: [
      "네오 고딕 양식의 96m 높이 시계탑",
      "4면의 직경 7m 시계 문자판",
      "매시 정각에 울리는 종소리",
      "야간 조명으로 빛나는 황금빛 탑",
      "웨스트민스터 브리지에서 바라보는 전경",
    ],
    nearbyAttractions: ["웨스트민스터 사원", "국회의사당", "런던 아이", "세인트 제임스 공원"],
    photoTips: "웨스트민스터 브리지 중앙에서 빅벤과 국회의사당을 함께 담을 수 있습니다. 야경은 일몰 직후 블루 아워에 가장 아름답습니다.",
    tips: [
      "야경이 특히 아름다우니 저녁 시간대에 방문하는 것을 추천합니다.",
      "웨스트민스터역 출구에서 바로 보이며, 국회의사당과 함께 촬영하세요.",
      "빅벤 종소리를 직접 듣고 싶다면 정각 근처에 웨스트민스터 브리지에 서 있으세요.",
    ],
  },
  "uk/london/westminster/buckingham-palace": {
    heroGradient: "from-amber-500 to-red-700",
    description:
      "영국 왕실의 공식 거주지이자 행정 본부로, 1837년 빅토리아 여왕 즉위 이래 영국 군주의 런던 거주지입니다. 775개의 방을 갖춘 궁전 앞에서 열리는 근위병 교대식은 런던에서 가장 인기 있는 볼거리 중 하나입니다.",
    history:
      "1703년 버킹엄 공작을 위해 건설된 저택이 1761년 조지 3세에 의해 왕실 소유가 되었습니다. 이후 존 내쉬와 에드워드 블로어에 의해 대대적으로 확장되어 현재의 모습을 갖추었습니다. 궁전 발코니에서의 왕실 행사는 영국의 대표적 전통입니다.",
    visitInfo: {
      hours: "스테이트 룸 공개: 7~9월 09:30~19:30 (매년 변동), 근위병 교대식: 4~7월 매일 11:00, 그 외 격일 11:00",
      admission: "스테이트 룸: 성인 £33, 학생 £21 / 근위병 교대식 관람 무료",
      address: "Buckingham Palace, London SW1A 1AA",
      website: "https://www.rct.uk/visit/buckingham-palace",
    },
    highlights: [
      "근위병 교대식의 화려한 의식",
      "여름 한정 스테이트 룸 공개",
      "궁전 앞 빅토리아 메모리얼 분수",
      "왕실 깃발로 확인하는 왕의 재궁 여부",
      "가든 파티와 왕실 행사의 무대",
    ],
    nearbyAttractions: ["세인트 제임스 공원", "빅벤", "웨스트민스터 사원", "그린 파크"],
    photoTips: "정문 앞 빅토리아 메모리얼에서 궁전 전면을 담을 수 있습니다. 근위병 교대식 촬영은 궁전 정문 왼쪽이 좋은 위치입니다.",
    tips: [
      "근위병 교대식을 관람하려면 최소 30분 전에 도착해 좋은 자리를 확보하세요.",
      "궁전 위 왕실 깃발(로열 스탠다드)이 걸리면 왕이 궁전에 계신다는 뜻입니다.",
      "스테이트 룸은 여름(7~9월)에만 공개되니 일정을 맞추세요.",
      "세인트 제임스 공원을 경유하면 아름다운 산책 코스가 됩니다.",
    ],
  },
  "uk/london/westminster/westminster-abbey": {
    heroGradient: "from-gray-700 to-amber-900",
    description:
      "영국 왕실의 대관식, 결혼식, 장례식이 거행되는 천 년 역사의 고딕 양식 교회입니다. 뉴턴, 다윈, 디킨스 등 영국 역사 속 위인 3,300명 이상이 이곳에 묻혀 있으며, 영국 역사 그 자체라 할 수 있는 장소입니다.",
    history:
      "960년경 베네딕트 수도원으로 시작되어, 1245년 헨리 3세에 의해 현재의 고딕 양식으로 재건되었습니다. 1066년 윌리엄 정복왕의 대관식 이래 거의 모든 영국 군주의 대관식이 이곳에서 거행되었습니다. 2023년 찰스 3세 국왕의 대관식도 이 사원에서 치러졌습니다.",
    visitInfo: {
      hours: "월~금 09:30~15:30, 토 09:00~15:00 (시즌별 변동), 일요일은 예배만 가능",
      admission: "성인 £27, 학생 £24 (온라인 예매 시 할인)",
      address: "20 Deans Yd, Westminster, London SW1P 3PA",
      website: "https://www.westminster-abbey.org",
    },
    highlights: [
      "헨리 7세 레이디 채플의 화려한 부채꼴 천장",
      "시인의 코너(셰익스피어, 디킨스 기념비)",
      "과학자 코너(뉴턴, 다윈, 호킹의 묘)",
      "대관식 의자(킹 에드워드 의자)",
      "스테인드글라스 장미창",
    ],
    nearbyAttractions: ["빅벤", "버킹엄 궁전", "세인트 제임스 공원", "런던 아이"],
    photoTips: "서쪽 정문의 고딕 파사드가 가장 상징적인 촬영 포인트입니다. 내부는 사진 촬영이 제한될 수 있으니 안내를 확인하세요.",
    tips: [
      "오디오 가이드가 입장료에 포함되어 있으니 꼭 이용하세요.",
      "일요일 예배 시간에는 무료 입장이 가능하지만 관광 목적의 방문은 제한됩니다.",
      "베르셀 가든(중정)에서 잠시 쉬어가는 것을 추천합니다.",
      "온라인 사전 예매 시 할인과 빠른 입장이 가능합니다.",
    ],
  },
  "uk/london/westminster/london-eye": {
    heroGradient: "from-blue-500 to-sky-700",
    description:
      "템스강 남쪽 강변에 위치한 높이 135m의 대관람차로, 2000년 밀레니엄을 기념해 건설되었습니다. 32개의 유리 캡슐에서 런던 시내를 360도로 조망할 수 있으며, 맑은 날에는 약 40km 밖까지 보입니다.",
    visitInfo: {
      hours: "매일 10:00~20:30 (시즌별 변동, 성수기 연장 운영)",
      admission: "성인 £32~36, 어린이 £27~31 (온라인 사전 구매 시 할인)",
      address: "Riverside Building, County Hall, London SE1 7PB",
      website: "https://www.londoneye.com",
    },
    highlights: [
      "런던 시내 360도 파노라마 전망",
      "빅벤과 국회의사당의 근접 뷰",
      "한 바퀴 약 30분 소요",
      "야간 탑승 시 런던의 화려한 야경",
      "맑은 날 윈저 성까지 보이는 시야",
    ],
    nearbyAttractions: ["빅벤", "웨스트민스터 사원", "테이트 모던", "셰익스피어 글로브"],
    photoTips: "캡슐 안에서 빅벤 방향으로 촬영하면 최고의 앵글을 얻을 수 있습니다. 외부에서 런던 아이를 촬영하려면 건너편 웨스트민스터 부두 주변이 좋습니다.",
    tips: [
      "온라인 사전 예매 시 현장 구매보다 약 10% 저렴하고 대기 시간도 단축됩니다.",
      "일몰 전 탑승하면 낮과 밤 풍경을 모두 볼 수 있습니다.",
      "바람이 강한 날에는 운행이 중단될 수 있으니 미리 확인하세요.",
      "콤보 티켓(런던 아이 + 다른 관광지)을 구매하면 비용을 절약할 수 있습니다.",
    ],
  },
  "uk/london/westminster/st-james-park": {
    heroGradient: "from-green-500 to-emerald-700",
    description:
      "런던에서 가장 오래된 왕실 공원으로, 버킹엄 궁전과 국회의사당 사이에 위치한 도심 속 오아시스입니다. 호수에 서식하는 펠리컨은 1664년부터 이어진 전통이며, 다리 위에서 바라보는 버킹엄 궁전의 전경은 런던의 숨은 명장면입니다.",
    history:
      "원래 헨리 8세의 사슴 사냥터였던 곳이 찰스 2세에 의해 1660년대 공원으로 조성되었습니다. 1828년 존 내쉬가 자연주의 정원 양식으로 재설계하여 현재의 모습을 갖추게 되었습니다.",
    visitInfo: {
      hours: "매일 05:00~자정",
      admission: "무료",
      address: "London SW1A 2BJ",
      website: "https://www.royalparks.org.uk/parks/st-jamess-park",
    },
    highlights: [
      "버킹엄 궁전을 배경으로 한 호수 전망",
      "펠리컨 먹이주기 (매일 14:30~15:00)",
      "블루 브리지에서의 파노라마 뷰",
      "다양한 수생 조류와 다람쥐",
      "봄 수선화와 여름 장미 화단",
    ],
    nearbyAttractions: ["버킹엄 궁전", "빅벤", "웨스트민스터 사원", "트라팔가 광장"],
    photoTips: "블루 브리지(호수 중앙 다리) 위에서 동쪽을 바라보면 런던 아이와 빅벤이, 서쪽을 보면 버킹엄 궁전이 보이는 최고의 촬영 포인트입니다.",
    tips: [
      "펠리컨 먹이주기는 매일 오후 2시 30분~3시경 덕 아일랜드 근처에서 진행됩니다.",
      "근위병 교대식 전후로 공원을 산책하면 효율적인 동선입니다.",
      "덱체어 대여가 가능하며, 여름에 잔디밭에서 피크닉을 즐기는 것도 좋습니다.",
    ],
  },

  // ===== CITY OF LONDON (3) =====
  "uk/london/city-of-london/tower-of-london": {
    heroGradient: "from-gray-700 to-red-900",
    description:
      "천 년의 역사를 지닌 런던의 상징적 왕실 요새로, 왕관 보석(크라운 주얼)이 전시되어 있습니다. 감옥, 궁전, 무기고, 보물 창고 등 다양한 역할을 해 온 이곳에서는 비프이터(요먼 워더)의 가이드 투어로 피의 역사를 생생하게 들을 수 있습니다.",
    history:
      "1066년 윌리엄 정복왕이 런던 정복 후 건설을 시작한 요새입니다. 이후 왕실 거주지, 감옥, 조폐소, 동물원 등으로 사용되었습니다. 앤 불린, 캐서린 하워드 등 왕비들이 이곳에서 처형되었으며, 런던탑의 까마귀(레이븐)가 떠나면 왕국이 무너진다는 전설이 전해집니다.",
    visitInfo: {
      hours: "화~토 09:00~17:30, 일~월 10:00~17:30 (동절기 16:30까지)",
      admission: "성인 £33.60, 어린이 £16.80 (온라인 예매 시 할인)",
      address: "Tower of London, London EC3N 4AB",
      website: "https://www.hrp.org.uk/tower-of-london",
    },
    highlights: [
      "왕관 보석(크라운 주얼) 전시관",
      "비프이터(요먼 워더) 가이드 투어",
      "화이트 타워의 중세 무기 전시",
      "레이븐(까마귀) 관찰",
      "블러디 타워와 왕자들의 방",
    ],
    nearbyAttractions: ["타워 브리지", "세인트 폴 대성당", "스카이 가든", "레든홀 마켓"],
    photoTips: "타워 브리지를 배경으로 런던탑을 촬영하려면 템스강변 산책로에서 찍으면 좋습니다. 내부에서는 화이트 타워 앞 잔디밭이 인기 포인트입니다.",
    tips: [
      "오전 개장 직후 방문하면 왕관 보석 관람 대기 시간이 짧습니다.",
      "비프이터 가이드 투어(무료, 약 1시간)는 매우 재미있으니 꼭 참여하세요.",
      "최소 2~3시간은 충분히 잡으세요.",
      "런던 패스에 포함되어 있으므로 여러 관광지를 방문한다면 패스 구매를 고려하세요.",
    ],
  },
  "uk/london/city-of-london/st-pauls-cathedral": {
    heroGradient: "from-gray-500 to-blue-800",
    description:
      "크리스토퍼 렌 경이 설계한 바로크 양식의 대성당으로, 1710년 완공 이래 런던 스카이라인의 상징입니다. 다이애나 왕세자비의 결혼식이 열린 곳으로, 속삭임의 갤러리와 돔 꼭대기 골든 갤러리에서의 런던 파노라마가 압권입니다.",
    history:
      "현재 건물은 1666년 런던 대화재로 소실된 이전 성당 자리에 크리스토퍼 렌이 1675~1710년에 걸쳐 건설했습니다. 2차 세계대전 런던 대공습에서도 살아남아 영국 국민의 저항 정신의 상징이 되었습니다.",
    visitInfo: {
      hours: "월~토 08:30~16:30 (마지막 입장 16:00)",
      admission: "성인 £23, 학생 £20 (온라인 예매 시 할인)",
      address: "St Paul's Churchyard, London EC4M 8AD",
      website: "https://www.stpauls.co.uk",
    },
    highlights: [
      "속삭임의 갤러리(소리가 돔을 따라 전달)",
      "골든 갤러리(528계단)에서의 런던 360도 파노라마",
      "돔 내부의 프레스코화",
      "지하 크립트(웰링턴 공작, 넬슨 제독의 묘)",
      "밀레니엄 브리지에서 바라보는 파사드",
    ],
    nearbyAttractions: ["런던탑", "타워 브리지", "테이트 모던", "밀레니엄 브리지"],
    photoTips: "밀레니엄 브리지 중앙에서 세인트 폴 대성당 정면을 촬영하면 완벽한 대칭 구도를 얻을 수 있습니다.",
    tips: [
      "돔 꼭대기 골든 갤러리(528계단)는 체력이 필요하지만 런던 최고의 전망을 선사합니다.",
      "속삭임의 갤러리에서 벽에 귀를 대면 반대편 속삭임이 들립니다.",
      "일요일은 예배를 위해 관광 방문이 제한되므로 평일 방문을 추천합니다.",
    ],
  },
  "uk/london/city-of-london/tower-bridge": {
    heroGradient: "from-blue-600 to-gray-800",
    description:
      "1894년 완공된 빅토리아 양식의 개폐식 다리로, 런던탑 옆 템스강을 가로지르는 런던의 대표 랜드마크입니다. 높은 곳의 유리 바닥 통로에서 42m 아래 템스강을 내려다보는 스릴과 함께 런던 시내 전경을 감상할 수 있습니다.",
    history:
      "19세기 후반 런던 이스트엔드의 교통 혼잡을 해소하기 위해 건설되었습니다. 1,000톤의 다리 상판이 들어 올려져 대형 선박이 통과할 수 있도록 설계되었으며, 현재도 연간 약 800회 개폐됩니다.",
    visitInfo: {
      hours: "매일 09:30~18:00 (동절기 17:00까지)",
      admission: "전시관: 성인 £12.30, 어린이 £6.20 / 다리 통행 무료",
      address: "Tower Bridge Rd, London SE1 2UP",
      website: "https://www.towerbridge.org.uk",
    },
    highlights: [
      "유리 바닥 통로(42m 높이에서 아래를 내려다보기)",
      "빅토리아 양식 엔진룸 전시",
      "다리 개폐 장면 (웹사이트에서 일정 확인 가능)",
      "타워 브리지에서 바라보는 런던탑과 시티 스카이라인",
    ],
    nearbyAttractions: ["런던탑", "세인트 폴 대성당", "버러 마켓", "더 샤드"],
    photoTips: "타워 브리지 전체를 촬영하려면 시청 옆 포터스 필드 파크나 템스강 남쪽 산책로가 최적입니다. 다리가 열리는 순간을 촬영하면 특별한 사진을 얻을 수 있습니다.",
    tips: [
      "다리 개폐 일정은 공식 웹사이트에서 확인할 수 있으니 시간을 맞춰 방문하세요.",
      "유리 바닥 통로는 고소공포증이 있다면 도전적일 수 있습니다.",
      "야간 조명이 켜진 타워 브리지의 야경도 매우 아름답습니다.",
    ],
  },

  // ===== SOUTH BANK (2) =====
  "uk/london/south-bank/tate-modern": {
    heroGradient: "from-purple-600 to-gray-800",
    description:
      "옛 뱅크사이드 화력발전소를 개조한 세계적인 현대미술관으로, 2000년 개관 이래 연간 500만 명 이상이 방문합니다. 피카소, 달리, 워홀, 로스코 등 20세기 이후 현대미술의 걸작을 무료로 감상할 수 있는 런던 필수 방문지입니다.",
    visitInfo: {
      hours: "일~목 10:00~18:00, 금~토 10:00~22:00",
      admission: "상설 전시 무료, 특별 전시 유료 (£13~22)",
      address: "Bankside, London SE1 9TG",
      website: "https://www.tate.org.uk/visit/tate-modern",
    },
    highlights: [
      "터빈 홀의 대규모 설치 미술",
      "피카소, 달리, 마티스, 워홀 등 상설 전시",
      "10층 전망대에서의 세인트 폴 대성당 뷰",
      "블라바트닉 빌딩(스위치 하우스) 확장관",
      "밀레니엄 브리지와 연결된 접근성",
    ],
    nearbyAttractions: ["셰익스피어 글로브", "버러 마켓", "밀레니엄 브리지", "세인트 폴 대성당"],
    photoTips: "10층 무료 전망대에서 세인트 폴 대성당과 템스강을 배경으로 촬영할 수 있습니다. 터빈 홀의 거대한 설치 작품도 인상적인 사진을 제공합니다.",
    tips: [
      "상설 전시는 무료이므로 부담 없이 방문할 수 있습니다.",
      "금~토요일은 밤 10시까지 운영되어 저녁에 여유롭게 관람 가능합니다.",
      "2층 레스토랑에서 템스강 뷰를 즐기며 식사할 수 있습니다.",
      "밀레니엄 브리지를 건너 세인트 폴 대성당까지 도보로 이동하세요.",
    ],
  },
  "uk/london/south-bank/shakespeares-globe": {
    heroGradient: "from-amber-700 to-red-900",
    description:
      "셰익스피어 시대(1599년)의 글로브 극장을 충실히 재현한 야외 원형 극장으로, 1997년 개관했습니다. 실제로 셰익스피어 작품이 공연되며, 원래 극장처럼 지붕 없는 스탠딩석에서 관람하는 독특한 경험을 할 수 있습니다.",
    history:
      "원래 글로브 극장은 1599년 셰익스피어의 극단이 건설했으나 1613년 화재로 소실되었습니다. 미국인 배우 겸 감독 샘 워너메이커의 주도로 원형에 가깝게 재건되어 1997년 개관했습니다. 떡갈나무와 갈대 지붕 등 당시 건축 방식을 그대로 따랐습니다.",
    visitInfo: {
      hours: "가이드 투어: 매일 09:30~17:00 (30분 간격), 공연: 4~10월",
      admission: "가이드 투어: 성인 £17, 어린이 £10 / 공연 스탠딩석: £5~",
      address: "21 New Globe Walk, Bankside, London SE1 9DT",
      website: "https://www.shakespearesglobe.com",
    },
    highlights: [
      "야외 원형 극장에서의 셰익스피어 공연 관람",
      "스탠딩석(그라운들링) 체험 (£5)",
      "가이드 투어로 배우는 엘리자베스 시대 극장 문화",
      "떡갈나무와 갈대 지붕의 전통 건축",
      "템스강변의 아름다운 위치",
    ],
    nearbyAttractions: ["테이트 모던", "버러 마켓", "밀레니엄 브리지", "서더크 대성당"],
    photoTips: "템스강변에서 극장 외관을 촬영하거나, 내부 투어 시 무대와 객석을 함께 담을 수 있습니다.",
    tips: [
      "스탠딩석(그라운들링) 티켓은 5파운드로 가장 저렴하며 독특한 경험을 제공합니다.",
      "야외 극장이므로 비가 와도 공연은 계속됩니다. 우비를 준비하세요.",
      "공연 시즌은 4~10월이며, 그 외 기간에는 가이드 투어만 운영됩니다.",
      "공연 전 버러 마켓에서 식사하고 오는 것을 추천합니다.",
    ],
  },

  // ===== EDINBURGH (3) =====
  "uk/scotland/edinburgh/edinburgh-castle": {
    heroGradient: "from-violet-700 to-gray-900",
    description:
      "캐슬 록(화산 바위) 위에 세워진 스코틀랜드의 상징으로, 천 년 이상의 역사를 간직한 위풍당당한 요새입니다. 스코틀랜드 왕관 보석과 운명의 돌(스톤 오브 스쿤)이 전시되어 있으며, 성에서 내려다보는 에든버러 시내 전경이 압권입니다.",
    history:
      "12세기 이래 왕실 거주지로 사용되었으며, 스코틀랜드 역사의 핵심 무대였습니다. 메리 여왕이 제임스 6세를 출산한 곳이기도 합니다. 매일 오후 1시에 발사되는 원오클락 건(대포)은 1861년부터 이어진 전통입니다.",
    visitInfo: {
      hours: "매일 09:30~17:00 (동절기 16:00까지, 여름 18:00까지)",
      admission: "성인 £19.50, 어린이(5~15세) £11.50 (온라인 사전 예매 시 할인)",
      address: "Castlehill, Edinburgh EH1 2NG",
      website: "https://www.edinburghcastle.scot",
    },
    highlights: [
      "스코틀랜드 왕관 보석(Honours of Scotland)",
      "운명의 돌(스톤 오브 스쿤)",
      "원오클락 건 (매일 오후 1시 대포 발사)",
      "성 마가렛 채플 (에든버러에서 가장 오래된 건물)",
      "성벽에서 바라보는 에든버러 시내 파노라마",
    ],
    nearbyAttractions: ["로열 마일", "스카치 위스키 체험관", "그래스마켓", "카메라 옵스큐라"],
    photoTips: "프린시스 스트리트 가든에서 올려다보는 성의 전경이 가장 인상적입니다. 성 안에서는 아거일 배터리 전망대가 최고의 촬영 포인트입니다.",
    tips: [
      "온라인 사전 예매 시 할인과 빠른 입장이 가능합니다.",
      "오전에 방문하면 오후보다 대기 시간이 짧습니다.",
      "오후 1시 원오클락 건(대포 발사)을 놓치지 마세요.",
      "오디오 가이드를 이용하면 풍부한 역사 해설을 들을 수 있습니다.",
    ],
  },
  "uk/scotland/edinburgh/royal-mile": {
    heroGradient: "from-amber-700 to-indigo-900",
    description:
      "에든버러 성에서 홀리루드 궁전까지 약 1.6km 이어지는 올드타운의 중심 거리입니다. 캐슬힐, 론마켓, 하이 스트리트, 캐논게이트의 4구간으로 나뉘며, 수백 년 된 건물들과 좁은 골목(클로즈)이 중세의 분위기를 간직하고 있습니다.",
    history:
      "중세 시대부터 에든버러의 중심 도로로, 성과 궁전을 연결하는 왕의 행렬이 지나던 길입니다. 좁은 골목길(클로즈)과 높은 건물(랜드)은 중세 에든버러의 인구 과밀을 보여주는 건축 유산입니다.",
    visitInfo: {
      hours: "거리 자체는 24시간 개방, 개별 명소는 영업시간 상이",
      admission: "거리 관람 무료",
      address: "Royal Mile, Edinburgh EH1",
    },
    highlights: [
      "세인트 자일스 대성당의 화려한 내부",
      "리얼 메리 킹스 클로즈 지하 투어",
      "존 녹스 하우스",
      "좁은 골목(클로즈) 탐험",
      "홀리루드 궁전(현 왕실 스코틀랜드 거주지)",
    ],
    nearbyAttractions: ["에든버러 성", "아서스 시트", "스카치 위스키 체험관", "그래스마켓"],
    photoTips: "존스턴 테라스에서 로열 마일을 내려다보거나, 좁은 클로즈 안에서 골목 사진을 찍으면 분위기 있는 결과물을 얻을 수 있습니다.",
    tips: [
      "좁은 골목(클로즈)으로 들어가보면 숨겨진 안뜰과 이야기를 발견할 수 있습니다.",
      "8월 페스티벌 기간에는 거리 전체가 공연장이 됩니다.",
      "프리 워킹 투어(팁 기반)가 매일 출발하며 역사를 깊이 알 수 있습니다.",
      "쇼핑은 캐시미어, 위스키, 타탄 제품이 인기입니다.",
    ],
  },
  "uk/scotland/edinburgh/arthurs-seat": {
    heroGradient: "from-green-700 to-emerald-900",
    description:
      "에든버러 도심 속 251m 높이의 고대 화산으로, 홀리루드 공원 내에 위치한 자연 하이킹 명소입니다. 정상에서 에든버러 시내, 포스만, 하이랜드까지 360도 파노라마 전망을 즐길 수 있으며, 약 3억 5천만 년 전 화산 활동으로 형성된 지질학적 경이입니다.",
    visitInfo: {
      hours: "홀리루드 공원 24시간 개방 (야간 등반 주의)",
      admission: "무료",
      address: "Holyrood Park, Edinburgh EH8 8AX",
    },
    highlights: [
      "정상에서의 에든버러 시내 360도 파노라마",
      "포스만과 파이프 해안선 조망",
      "고대 화산 지형 관찰",
      "새벽 일출 또는 일몰 하이킹",
      "살리스버리 크래그스 절벽 산책로",
    ],
    nearbyAttractions: ["로열 마일", "홀리루드 궁전", "에든버러 성", "다이내믹 어스"],
    photoTips: "정상에서 에든버러 성 방향으로 촬영하면 도시 전체를 담을 수 있습니다. 일출 직후의 황금빛 빛이 가장 아름답습니다.",
    tips: [
      "왕복 약 2시간 소요되며, 홀리루드 궁전 옆에서 출발하는 루트가 가장 인기 있습니다.",
      "일몰 시간에 맞춰 오르면 환상적인 뷰를 감상할 수 있습니다.",
      "바람이 매우 강할 수 있으니 방풍 재킷을 준비하세요.",
      "등산화를 신는 것을 권장하며, 비 온 후에는 미끄러울 수 있습니다.",
    ],
  },

  // ===== BATH (2) =====
  "uk/southern-england/bath/roman-baths": {
    heroGradient: "from-amber-600 to-yellow-800",
    description:
      "기원전 1세기 로마인들이 건설한 온천 시설로, 영국에서 가장 잘 보존된 로마 유적입니다. 천연 온천수가 하루 125만 리터 솟아오르며, 로마 신전, 목욕탕, 박물관을 통해 2천 년 전 로마인들의 생활을 생생하게 체험할 수 있습니다.",
    history:
      "켈트족이 숭배하던 온천 위에 로마인들이 기원전 1세기에 광대한 목욕 시설을 건설했습니다. 온천의 여신 수리스 미네르바에게 바친 신전이 함께 세워졌으며, 중세에는 매몰되어 잊혀졌다가 18세기에 재발견되었습니다.",
    visitInfo: {
      hours: "매일 09:00~18:00 (여름 21:00~22:00 연장, 11~2월 09:30~17:00)",
      admission: "성인 £18~27 (시즌별 변동), 어린이 £11.25~17.25",
      address: "Abbey Churchyard, Bath BA1 1LZ",
      website: "https://www.romanbaths.co.uk",
    },
    highlights: [
      "대목욕탕(Great Bath)의 녹색 온천수",
      "수리스 미네르바 신전 유적",
      "저주의 서판(Curse Tablets) 전시",
      "다양한 로마 시대 유물과 동전",
      "오디오 가이드(한국어 포함) 제공",
    ],
    nearbyAttractions: ["바스 수도원", "로열 크레센트", "펄트니 다리", "서멀 바스 스파"],
    photoTips: "대목욕탕은 밤에 횃불 조명 아래 촬영하면 더욱 분위기 있습니다. 테라스에서 바스 수도원을 배경으로 한 컷도 추천합니다.",
    tips: [
      "오디오 가이드(한국어 제공)가 포함되어 있으니 반드시 이용하세요.",
      "여름 저녁 시간대 방문 시 횃불 조명 아래 신비로운 분위기를 즐길 수 있습니다.",
      "온천수 시음 분수에서 45도의 미네랄 온천수를 맛볼 수 있습니다.",
      "인근 서멀 바스 스파에서 실제로 온천을 즐길 수 있습니다.",
    ],
  },
  "uk/southern-england/bath/royal-crescent": {
    heroGradient: "from-amber-400 to-stone-600",
    description:
      "1774년 존 우드 2세가 설계한 초승달 모양의 조지안 건축 걸작으로, 30채의 연립주택이 아름다운 곡선을 이루고 있습니다. 영국 조지안 건축의 최고 걸작으로 꼽히며, 앞에 펼쳐진 넓은 잔디밭이 그 장엄함을 더합니다.",
    history:
      "1767~1774년 건설된 이 건물은 바스의 건축가 존 우드 부자가 설계한 도시 계획의 정점입니다. 더 서커스(원형)에서 로열 크레센트(초승달)로 이어지는 구조는 해와 달을 상징한다는 해석이 있습니다.",
    visitInfo: {
      hours: "No. 1 로열 크레센트 박물관: 화~일 10:00~17:00 (월요일 휴무)",
      admission: "No. 1 박물관: 성인 £12, 어린이 £6 / 외부 관람 무료",
      address: "1 Royal Crescent, Bath BA1 2LR",
      website: "https://no1royalcrescent.org.uk",
    },
    highlights: [
      "114개 이오니아식 기둥이 늘어선 곡선형 파사드",
      "No. 1 로열 크레센트 박물관 (조지안 시대 생활상 재현)",
      "앞 잔디밭에서의 피크닉",
      "더 서커스(원형 광장)와의 건축적 연결",
      "조지안 건축의 완벽한 대칭미",
    ],
    nearbyAttractions: ["더 서커스", "로마 목욕탕", "바스 수도원", "로열 빅토리아 파크"],
    photoTips: "건물 앞 잔디밭 중앙에서 전체 곡선을 담을 수 있습니다. 드론 촬영이 불가하므로 높은 곳에서의 촬영은 로열 빅토리아 파크 쪽에서 시도하세요.",
    tips: [
      "No. 1 로열 크레센트 박물관에서 조지안 시대의 생활상을 엿볼 수 있습니다.",
      "잔디밭에서 피크닉을 즐기며 건축물을 감상하는 것을 추천합니다.",
      "더 서커스에서 로열 크레센트까지 도보 5분이므로 함께 방문하세요.",
      "아침 이른 시간이 관광객이 적어 사진 촬영에 좋습니다.",
    ],
  },

  // ===== OXFORD (1) =====
  "uk/southern-england/oxford/bodleian-library": {
    heroGradient: "from-blue-800 to-amber-900",
    description:
      "1602년 토머스 보들리 경에 의해 재설립된 유럽에서 가장 오래된 도서관 중 하나로, 영국에서 대영 도서관 다음으로 큰 도서관입니다. 화려한 고딕 천장의 디비니티 스쿨은 해리 포터 촬영지로도 유명하며, 1,300만 권 이상의 장서를 보유하고 있습니다.",
    history:
      "14세기에 설립된 도서관이 쇠퇴한 후, 1602년 토머스 보들리 경이 사재를 투자하여 재설립했습니다. 영국에서 출판되는 모든 책의 한 부를 받을 권리(법정 납본)를 갖고 있으며, 올리버 크롬웰도 이 도서관의 장서를 대출하지 못했다는 일화가 있습니다.",
    visitInfo: {
      hours: "가이드 투어: 월~토 여러 시간대 출발 (사전 예약 필수)",
      admission: "투어: 성인 £10~16 (투어 종류에 따라 상이)",
      address: "Broad Street, Oxford OX1 3BG",
      website: "https://visit.bodleian.ox.ac.uk",
    },
    highlights: [
      "디비니티 스쿨 (해리 포터 호그와트 의무실 촬영지)",
      "듀크 험프리 도서관 (15세기 열람실)",
      "래드클리프 카메라 (원형 돔 도서관)",
      "1,300만 권 이상의 장서",
      "고딕과 르네상스 양식의 건축미",
    ],
    nearbyAttractions: ["래드클리프 카메라", "크라이스트 처치 칼리지", "셀도니안 극장", "애슈몰린 박물관"],
    photoTips: "디비니티 스쿨의 부채꼴 천장은 가이드 투어 중 촬영 가능합니다. 래드클리프 카메라는 외부에서 다양한 각도로 촬영해 보세요.",
    tips: [
      "가이드 투어를 통해서만 내부 관람이 가능하니 반드시 사전 예약하세요.",
      "미니 투어(30분)와 확장 투어(90분) 중 선택 가능합니다.",
      "래드클리프 카메라는 일반 공개되지 않으므로 외부에서 감상하세요.",
      "학기 중(특히 시험 기간)에는 일부 구역 접근이 제한될 수 있습니다.",
    ],
  },

  // ===== CAMBRIDGE (1) =====
  "uk/southern-england/cambridge/kings-college": {
    heroGradient: "from-cyan-700 to-blue-900",
    description:
      "1441년 헨리 6세가 설립한 캠브리지 대학의 명문 칼리지로, 킹스 칼리지 채플은 세계에서 가장 아름다운 고딕 건축물 중 하나로 꼽힙니다. 세계 최대의 부채꼴 천장과 루벤스의 제단화, 크리스마스 이브 캐롤 서비스로 유명합니다.",
    history:
      "헨리 6세가 1441년 이튼 칼리지 졸업생을 위해 설립했습니다. 킹스 칼리지 채플은 1446년에 착공하여 약 100년에 걸쳐 완공되었으며, 세계 최대의 부채꼴(팬 볼트) 천장은 건축 공학의 경이로 평가됩니다.",
    visitInfo: {
      hours: "학기 중: 월~금 09:30~15:30, 토 09:30~15:15, 일 11:15~14:30 (시즌별 변동)",
      admission: "성인 £11, 어린이 무료 (성인 동반)",
      address: "King's Parade, Cambridge CB2 1ST",
      website: "https://www.kings.cam.ac.uk/chapel",
    },
    highlights: [
      "세계 최대의 부채꼴(팬 볼트) 천장",
      "루벤스의 제단화 '동방박사의 경배'",
      "25개의 스테인드글라스 창",
      "크리스마스 이브 캐롤 서비스 (BBC 전 세계 중계)",
      "캠 강변에서 바라보는 채플 전경",
    ],
    nearbyAttractions: ["캠 강 펀팅", "트리니티 칼리지", "피츠윌리엄 박물관", "그레이트 세인트 메리 교회"],
    photoTips: "캠 강변 더 백스에서 바라보는 채플 후면이 가장 아름다우며, 펀팅을 하며 촬영하면 독특한 앵글을 얻을 수 있습니다.",
    tips: [
      "학기 중과 방학 중 개방 시간이 크게 다르니 사전에 확인하세요.",
      "채플 내부 합창단 공연(이븐송)은 무료로 감상할 수 있습니다.",
      "시험 기간에는 칼리지 전체가 폐쇄될 수 있습니다.",
      "크리스마스 이브 캐롤 서비스 입장권은 매우 일찍 매진되므로 서둘러 신청하세요.",
    ],
  },

  // ===== YORK (1) =====
  "uk/northern-england/york/york-minster": {
    heroGradient: "from-amber-700 to-stone-800",
    description:
      "북유럽 최대의 고딕 대성당으로 1220년 착공하여 약 250년에 걸쳐 완공되었습니다. 테니스 코트 크기의 대동창(Great East Window)은 세계 최대의 중세 스테인드글라스이며, 지하에서는 로마 시대와 바이킹 시대의 유적을 볼 수 있습니다.",
    history:
      "627년 에드윈 왕의 세례를 위해 목조 교회로 시작되었습니다. 현재 건물은 1220~1472년에 건설된 것으로, 잉글리시 고딕 양식의 세 시기(초기, 장식기, 수직기)를 모두 보여주는 건축사의 교과서입니다. 1984년 화재로 남쪽 트랜셉트가 손상되었으나 성공적으로 복원되었습니다.",
    visitInfo: {
      hours: "월~토 09:30~16:00, 일 12:45~15:00 (시즌별 변동)",
      admission: "성인 £16, 어린이 무료 / 타워: 성인 추가 £8",
      address: "Deangate, York YO1 7HH",
      website: "https://yorkminster.org",
    },
    highlights: [
      "대동창 (Great East Window) - 세계 최대 중세 스테인드글라스",
      "타워 전망대(275계단)에서의 요크 시내 360도 전경",
      "챕터 하우스의 정교한 석조 장식",
      "지하 운딩(Undercroft) 로마 유적 전시",
      "파이브 시스터즈 윈도우(5개의 좁고 긴 창)",
    ],
    nearbyAttractions: ["셰임블즈 거리", "요크 성벽", "요르빅 바이킹 센터", "국립철도박물관"],
    photoTips: "서쪽 정면 파사드는 딘게이트에서, 탑 전체 모습은 민스터 야드 북쪽에서 촬영하면 좋습니다. 내부 스테인드글라스는 밝은 날 오전에 가장 아름답게 빛납니다.",
    tips: [
      "타워(275계단)에 올라가면 요크 시내 전경을 360도로 볼 수 있습니다.",
      "지하 운딩에서 로마 시대와 바이킹 시대 유적을 꼭 관람하세요.",
      "이븐송(저녁 합창 예배)은 무료이며 성당의 음향을 체험하기 좋습니다.",
      "요크 패스에 포함되어 있어 여러 관광지와 함께 방문 시 절약할 수 있습니다.",
    ],
  },

  // ===== REMAINING CITIES (1 each) =====
  "uk/london/south-bank/borough-market": {
    heroGradient: "from-green-600 to-amber-700",
    description:
      "1,000년 이상의 역사를 자랑하는 런던에서 가장 오래되고 유명한 식품 시장입니다. 100개 이상의 푸드 스톨에서 영국 전통 음식부터 세계 각국의 요리까지 다양한 미식을 경험할 수 있으며, 셰프들이 직접 찾는 프리미엄 식재료의 보고입니다.",
    visitInfo: {
      hours: "월~목 10:00~17:00, 금 10:00~18:00, 토 08:00~17:00, 일 휴장",
      admission: "무료",
      address: "8 Southwark St, London SE1 1TL",
      website: "https://boroughmarket.org.uk",
    },
    highlights: [
      "세계 각국의 길거리 음식 스톨",
      "영국 수제 치즈와 빵 전문점",
      "신선한 해산물과 정육점",
      "아티산 커피와 디저트",
      "빅토리아 양식의 철제 지붕 구조",
    ],
    nearbyAttractions: ["테이트 모던", "셰익스피어 글로브", "서더크 대성당", "더 샤드"],
    photoTips: "아침 일찍 방문하면 활기찬 시장 분위기를 인파 없이 촬영할 수 있습니다.",
    tips: [
      "목~토요일이 가장 활발하며, 특히 토요일 아침이 최고입니다.",
      "월~화요일은 일부 스톨만 운영하고, 일요일은 휴장입니다.",
      "점심시간에는 매우 혼잡하므로 오전에 방문하는 것을 추천합니다.",
    ],
  },
  "uk/northern-england/manchester/old-trafford": {
    heroGradient: "from-red-700 to-red-900",
    description:
      "맨체스터 유나이티드의 홈구장으로 '꿈의 극장(Theatre of Dreams)'이라는 별명을 가진 세계에서 가장 유명한 축구 경기장 중 하나입니다. 74,310석 규모로 영국에서 두 번째로 큰 축구장이며, 100년 이상의 축구 역사가 살아 숨 쉬는 성지입니다.",
    history:
      "1910년 2월 19일 개장한 이래 맨체스터 유나이티드의 홈구장으로 사용되고 있습니다. 2차 세계대전 중 폭격으로 파괴된 후 1949년 재건되었으며, 이후 여러 차례 확장되어 현재의 모습을 갖추었습니다.",
    visitInfo: {
      hours: "스타디움 투어: 매일 09:40~16:30 (경기일 제외), 박물관: 09:30~17:00",
      admission: "투어+박물관: 성인 £29, 어린이 £20",
      address: "Sir Matt Busby Way, Old Trafford, Manchester M16 0RA",
      website: "https://www.manutd.com/museum-tour",
    },
    highlights: [
      "선수 터널과 덕아웃 체험",
      "트로피 룸과 역대 우승 기록",
      "뮌헨 메모리얼(1958년 항공 사고 추모)",
      "맷 버스비 동상",
      "메가 스토어에서의 기념품 쇼핑",
    ],
    nearbyAttractions: ["과학산업박물관", "노던 쿼터", "존 라이랜즈 도서관", "맨체스터 미술관"],
    photoTips: "동쪽 스탠드 앞 맷 버스비 동상과 홀리 트리니티 동상이 인기 촬영 포인트입니다.",
    tips: [
      "경기 티켓은 최소 한 달 전에 구매하세요. 프리미어리그 경기는 빠르게 매진됩니다.",
      "경기가 없는 날에도 스타디움 투어와 박물관을 즐길 수 있습니다.",
      "시내에서 메트로링크 트램으로 약 15분이면 도착합니다.",
    ],
  },
  "uk/northern-england/liverpool/the-beatles-story": {
    heroGradient: "from-red-600 to-amber-700",
    description:
      "앨버트 독에 위치한 세계 최대의 비틀즈 상설 전시관으로, 밴드의 탄생부터 해체, 그리고 솔로 활동까지 비틀즈의 모든 것을 만날 수 있습니다. 캐번 클럽과 애비 로드 스튜디오를 재현한 공간에서 전설적인 음악 역사를 체험합니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (여름 연장 운영)",
      admission: "성인 £19.95, 어린이(5~15세) £11",
      address: "Britannia Vaults, Albert Dock, Liverpool L3 4AD",
      website: "https://www.beatlesstory.com",
    },
    highlights: [
      "캐번 클럽 실물 크기 재현",
      "존 레논의 상상(Imagine) 흰 방 재현",
      "비틀즈 악기와 의상 원본 전시",
      "애비 로드 스튜디오 재현",
      "상세한 오디오 가이드(한국어 포함)",
    ],
    nearbyAttractions: ["캐번 클럽", "앨버트 독", "테이트 리버풀", "머시사이드 해양박물관"],
    photoTips: "캐번 클럽 재현 공간과 애비 로드 재현 세트에서 기념 사진을 찍을 수 있습니다.",
    tips: [
      "오디오 가이드가 매우 상세하니 최소 2시간은 잡으세요.",
      "비틀즈 팬이라면 매지컬 미스터리 투어 버스와 함께 방문하면 완벽합니다.",
      "앨버트 독의 다른 박물관들과 함께 하루 일정으로 계획하세요.",
    ],
  },
  "uk/northern-england/lake-district/lake-windermere": {
    heroGradient: "from-teal-600 to-blue-800",
    description:
      "잉글랜드에서 가장 길고(약 17km) 가장 큰 자연 호수로, 레이크 디스트릭트 국립공원의 중심입니다. 증기선과 크루즈로 호수를 유람하며 주변의 산과 숲의 아름다운 풍경을 감상할 수 있으며, 워즈워스와 비어트릭스 포터가 사랑한 호수입니다.",
    visitInfo: {
      hours: "크루즈: 매일 운행 (시즌별 시간표 상이)",
      admission: "크루즈: 성인 £8~14 (구간별 상이), 호수변 산책 무료",
      address: "Windermere, Cumbria LA23",
      website: "https://www.windermere-lakecruises.co.uk",
    },
    highlights: [
      "윈더미어-앰블사이드-레이크사이드 크루즈",
      "보네스 항구 마을 산책",
      "오릭스 헤드 전망대에서의 호수 조망",
      "카약과 보트 대여",
      "호수변 산책로와 피크닉",
    ],
    nearbyAttractions: ["피터 래빗 박물관", "그래스미어", "앰블사이드", "헬벨린 산"],
    photoTips: "보네스 항구에서 호수와 배를 함께 담을 수 있으며, 오릭스 헤드 전망대에서의 파노라마 뷰가 최고입니다.",
    tips: [
      "윈더미어-앰블사이드-레이크사이드 전체 구간 크루즈를 추천합니다.",
      "여름 성수기에는 크루즈가 만석이 될 수 있으니 일찍 방문하세요.",
      "호수변 산책은 무료이며, 보네스에서 앰블사이드까지 걷는 코스가 인기입니다.",
    ],
  },
  "uk/scotland/glasgow/kelvingrove-art-gallery": {
    heroGradient: "from-orange-600 to-amber-800",
    description:
      "1901년 개관한 스코틀랜드에서 가장 인기 있는 무료 박물관으로, 8,000점 이상의 예술 작품과 자연사 전시물을 보유하고 있습니다. 살바도르 달리의 '십자가의 성 요한'을 비롯한 세계적 걸작들을 무료로 감상할 수 있으며, 스페인 바로크 양식의 건물 자체도 아름답습니다.",
    visitInfo: {
      hours: "월~목, 토 10:00~17:00, 금·일 11:00~17:00",
      admission: "무료",
      address: "Argyle St, Glasgow G3 8AG",
      website: "https://www.glasgowlife.org.uk/museums/kelvingrove",
    },
    highlights: [
      "살바도르 달리 '십자가의 성 요한'",
      "찰스 레니 매킨토시 컬렉션",
      "스피트파이어 전투기 실물 전시",
      "파이프 오르간 매일 연주",
      "자연사 및 고고학 전시관",
    ],
    nearbyAttractions: ["글래스고 대학", "리버사이드 교통박물관", "바이레스 로드", "글래스고 식물원"],
    photoTips: "건물 외관은 켈빈 공원에서, 내부는 중앙 홀의 파이프 오르간 앞에서 촬영하면 인상적인 사진을 얻을 수 있습니다.",
    tips: [
      "무료 입장이므로 부담 없이 여러 번 방문할 수 있습니다.",
      "매일 열리는 파이프 오르간 연주 시간을 확인하고 방문하세요.",
      "켈빈그로브 공원에서의 산책과 함께 일정을 잡으면 좋습니다.",
    ],
  },
  "uk/scotland/highlands/loch-ness": {
    heroGradient: "from-blue-800 to-green-900",
    description:
      "전설의 괴물 네시(Nessie)로 세계적으로 유명한 스코틀랜드 최대의 담수호입니다. 길이 37km, 최대 깊이 230m에 달하며, 호수변의 어쿼트 성 유적과 함께 스코틀랜드 하이랜드 여행의 하이라이트입니다.",
    history:
      "네시의 전설은 565년 성 콜럼바의 기록까지 거슬러 올라갑니다. 1933년 현대적 목격담 이후 전 세계의 관심을 받았으며, 수차례의 과학적 탐사에도 불구하고 네시의 존재는 미스터리로 남아 있습니다.",
    visitInfo: {
      hours: "보트 투어: 매일 운행 (시즌별 상이), 네스호 전시관: 매일 09:30~17:00",
      admission: "보트 투어: 성인 £15~25, 네스호 전시관: 성인 £9",
      address: "Loch Ness, Inverness-shire, Scottish Highlands",
      website: "https://www.visitinvernesslochness.com",
    },
    highlights: [
      "어쿼트 성에서의 호수 파노라마",
      "네시 사냥 보트 투어",
      "드럼나드로킷 네스호 전시관",
      "포트 어거스터스 운하 수문 관찰",
      "그레이트 글렌 웨이 하이킹",
    ],
    nearbyAttractions: ["글렌코 계곡", "인버네스", "글렌피넌 고가교", "벤네비스 산"],
    photoTips: "어쿼트 성 전망대에서 호수를 내려다보는 각도가 가장 상징적인 촬영 포인트입니다.",
    tips: [
      "보트 투어를 통해 호수 위에서 어쿼트 성과 주변 경관을 감상하세요.",
      "에든버러 또는 인버네스에서 출발하는 당일 투어가 편리합니다.",
      "날씨가 급변하므로 방수 재킷을 준비하세요.",
      "네시를 찾지 못해도 주변 자연 경관만으로 충분히 가치 있는 방문입니다.",
    ],
  },
  "uk/scotland/isle-of-skye/old-man-of-storr": {
    heroGradient: "from-sky-700 to-slate-900",
    description:
      "스카이 섬의 상징적 랜드마크로, 하늘을 찌르는 바위 기둥이 초현실적 풍경을 만듭니다. 트로터니시 반도의 산악 능선에서 솟아오른 49m 높이의 바위 첨탑은 수백만 년의 지질학적 역사를 간직하고 있으며, 프로메테우스, 매크베스 등 영화 촬영지로도 유명합니다.",
    visitInfo: {
      hours: "24시간 개방 (주차장 이용 가능 시간 제한 있음)",
      admission: "무료 (주차 유료: £5)",
      address: "Storr, Isle of Skye IV51 9HX",
    },
    highlights: [
      "49m 높이의 올드 맨 바위 기둥",
      "주변 바위 첨탑과 기암괴석",
      "정상에서의 라사이 섬과 본토 조망",
      "변화무쌍한 구름과 빛의 연출",
      "영화 촬영지(프로메테우스 등) 방문",
    ],
    nearbyAttractions: ["퀴랭", "킬트 록", "포트리 항구", "리치 폭포"],
    photoTips: "이른 아침 또는 일몰 시간대에 방문하면 극적인 빛과 그림자를 촬영할 수 있습니다. 안개가 끼면 더욱 신비로운 분위기를 연출합니다.",
    tips: [
      "주차장에서 왕복 약 2시간 소요되는 하이킹입니다.",
      "이른 아침 방문이 인파가 적고 빛이 가장 아름답습니다.",
      "날씨가 급변하므로 방수 재킷과 등산화는 필수입니다.",
      "성수기에는 주차장이 빨리 차므로 일찍 출발하세요.",
    ],
  },
  "uk/wales/cardiff/cardiff-castle": {
    heroGradient: "from-red-700 to-green-800",
    description:
      "2천 년 역사를 품은 카디프의 상징으로, 로마 요새 위에 노르만 성채가 세워지고, 19세기 빅토리아 고딕 양식으로 화려하게 개조된 독특한 다층 역사 유적입니다. 뷰트 후작 가문의 부로 꾸며진 화려한 실내 장식이 동화 속 궁전을 연상시킵니다.",
    history:
      "1세기 로마인들이 요새를 건설한 것이 시초이며, 11세기 노르만 정복 이후 성채가 세워졌습니다. 19세기 세계 최대의 석탄 수출항을 소유한 뷰트 후작 가문이 건축가 윌리엄 버지스에게 의뢰하여 고딕 리바이벌 양식의 화려한 실내로 개조했습니다.",
    visitInfo: {
      hours: "매일 09:00~18:00 (동절기 17:00까지)",
      admission: "성인 £16, 어린이 £11 / 하우스 투어 추가 £4",
      address: "Castle St, Cardiff CF10 3RB",
      website: "https://www.cardiffcastle.com",
    },
    highlights: [
      "화려한 빅토리아 고딕 실내 장식 (하우스 투어)",
      "노르만 킵(성루)에서의 카디프 시내 전망",
      "로마 시대 요새 벽 유적",
      "성 내 넓은 잔디밭과 공작새",
      "계절별 특별 이벤트와 야간 프로그램",
    ],
    nearbyAttractions: ["프린시팔리티 스타디움", "카디프 아케이드", "카디프 베이", "부트 파크"],
    photoTips: "성 정문 앞 동물 벽(Animal Wall)과 함께 촬영하거나, 노르만 킵 꼭대기에서 시내 전경을 담으세요.",
    tips: [
      "하우스 투어에 참여하면 화려한 빅토리아 인테리어를 볼 수 있으니 꼭 추가 요금을 내세요.",
      "노르만 킵(성루)까지 계단이 가파르니 편한 신발을 착용하세요.",
      "동물 벽(Animal Wall)은 카디프의 유명한 포토 포인트입니다.",
    ],
  },
  "uk/wales/snowdonia/mount-snowdon": {
    heroGradient: "from-gray-700 to-green-900",
    description:
      "웨일스 최고봉(1,085m)으로 웨일스어로 이르 위드파(Yr Wyddfa)라 불립니다. 6개의 공식 등반 루트가 있으며, 스노든 마운틴 레일웨이를 이용하면 등산 없이도 정상에 오를 수 있습니다. 맑은 날에는 아일랜드, 잉글랜드, 스코틀랜드까지 보이는 360도 전망을 선사합니다.",
    visitInfo: {
      hours: "24시간 개방, 스노든 마운틴 레일웨이: 3~10월 09:00~17:00 (날씨에 따라 변동)",
      admission: "등반 무료, 레일웨이: 성인 왕복 £40, 편도 £30",
      address: "Snowdon/Yr Wyddfa, Snowdonia National Park, Gwynedd",
      website: "https://www.snowdonrailway.co.uk",
    },
    highlights: [
      "정상 하프웨이 카페(영국에서 가장 높은 카페)",
      "6개 공식 등반 루트 (난이도별 선택 가능)",
      "스노든 마운틴 레일웨이 증기열차 체험",
      "맑은 날 아일랜드까지 보이는 전망",
      "크리브 고흐 나이프 에지 능선 (상급자용)",
    ],
    nearbyAttractions: ["란베리스 슬레이트 박물관", "짚 월드", "벳위스이코에드", "콘위 성"],
    photoTips: "정상에서 일출을 촬영하면 환상적이며, 란베리스 패스 중간 지점에서 뒤돌아보는 호수 전경도 멋집니다.",
    tips: [
      "초보자에게는 란베리스 패스 루트(왕복 약 6시간)를 추천합니다.",
      "크리브 고흐 루트는 경험 있는 하이커에게만 권장합니다.",
      "산 정상은 여름에도 춥고 바람이 강하므로 방한 장비를 준비하세요.",
      "스노든 마운틴 레일웨이는 성수기 매진이 잦으니 사전 예약 필수입니다.",
      "날씨가 급변하므로 등반 전 기상 예보를 반드시 확인하세요.",
    ],
  },
  "uk/wales/brecon-beacons/pen-y-fan": {
    heroGradient: "from-emerald-700 to-teal-800",
    description:
      "남웨일스 최고봉(886m)으로 브레콘 비컨스 국립공원의 상징적인 산입니다. 비교적 접근이 쉬워 웨일스에서 가장 인기 있는 하이킹 코스이며, 정상에서의 파노라마 전망은 노력에 대한 최고의 보상입니다. 영국 특수부대(SAS) 선발 시험 코스로도 유명합니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료 (주차 유료: £5)",
      address: "Pen y Fan, Brecon Beacons National Park, Powys",
    },
    highlights: [
      "정상에서의 브레콘 비컨스 360도 파노라마",
      "평탄한 정상 테이블 모양의 지형",
      "콘사발리스 능선 산책",
      "영국 특수부대 선발 시험 코스",
      "겨울 눈 덮인 산의 장엄한 풍경",
    ],
    nearbyAttractions: ["네 개의 폭포 트레일", "브레콘 타운", "밤하늘 관측", "카디프"],
    photoTips: "정상의 평탄한 바위 위에서 360도 파노라마를 촬영하세요. 일출 시간대가 가장 극적인 빛을 제공합니다.",
    tips: [
      "스토리 암스 주차장에서 출발하는 루트가 가장 인기 있고 짧습니다(왕복 약 4시간).",
      "날씨가 급변하므로 방수 재킷, 따뜻한 옷, 등산화를 필수로 준비하세요.",
      "여름 주말에는 주차장이 빨리 차므로 일찍 출발하세요.",
      "겨울에는 눈과 얼음이 있을 수 있어 아이젠과 등산 스틱을 지참하세요.",
    ],
  },
  "uk/wales/conwy/conwy-castle": {
    heroGradient: "from-stone-700 to-amber-900",
    description:
      "에드워드 1세가 1283~1287년에 건설한 웅장한 중세 성으로, 유네스코 세계문화유산에 등재된 웨일스의 대표적 중세 군사 건축물입니다. 8개의 거대한 원형 탑과 두 개의 바비칸(외성문)이 완벽한 상태로 보존되어 있습니다.",
    history:
      "에드워드 1세의 웨일스 정복 과정에서 건설된 '철의 고리(Iron Ring)' 성곽 중 하나입니다. 4년 만에 완공된 이 성은 당시 영국 왕실 연간 수입에 맞먹는 비용이 투입된 대규모 프로젝트였으며, 제임스 오브 세인트 조지가 설계했습니다.",
    visitInfo: {
      hours: "매일 09:30~17:00 (동절기 10:00~16:00, 시즌별 변동)",
      admission: "성인 £11.50, 어린이 £8.20",
      address: "Rose Hill St, Conwy LL32 8AY",
      website: "https://cadw.gov.wales/visit/places-to-visit/conwy-castle",
    },
    highlights: [
      "8개의 웅장한 원형 탑 등반",
      "성벽 위에서의 콘위 마을과 강 전경",
      "그레이트 홀 유적",
      "왕의 탑과 왕비의 탑 내부",
      "콘위 성벽과 연결된 도시 방어 체계",
    ],
    nearbyAttractions: ["콘위 성벽", "영국에서 가장 작은 집", "보드난트 가든", "스노도니아"],
    photoTips: "콘위 강 건너편에서 성 전체와 강, 마을을 함께 담을 수 있습니다. 탑 위에서 내려다보는 전경도 아름답습니다.",
    tips: [
      "캐드우 익스플로러 패스를 구매하면 웨일스 내 여러 성을 할인 방문할 수 있습니다.",
      "성벽 위를 걸을 수 있으므로 편한 신발을 착용하세요.",
      "런던에서 기차로 약 3시간 30분, 체스터에서 약 1시간입니다.",
      "인접한 콘위 타운 성벽과 함께 둘러보면 중세 도시 방어 체계를 이해할 수 있습니다.",
    ],
  },
};
