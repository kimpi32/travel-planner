import type { CityDetail, AttractionDetail } from "../city-details";

export const thailandCityDetails: Record<string, CityDetail> = {
  // ===== BANGKOK-CENTRAL =====
  "thailand/bangkok-central/bangkok": {
    heroGradient: "from-amber-500 to-red-700",
    description: "태국의 수도이자 동남아시아 최대 도시. 화려한 왕궁과 사원, 활기찬 길거리 음식 문화, 거대한 쇼핑몰과 전통 수상시장이 공존하는 매력적인 대도시입니다.",
    bestTime: "11~2월 (건기, 선선한 시기)",
    stayArea: "수쿰빗 / 실롬 / 카오산 로드 주변",
    transport: "BTS 스카이트레인, MRT 지하철, 수상보트 (THB 16~59)",
    districts: [
      { name: "라따나꼬신", nameEn: "Rattanakosin", description: "왕궁, 왓포, 왓아룬 등 방콕의 핵심 역사 유적이 밀집한 구시가지.", highlights: ["왕궁", "왓포", "왓아룬", "카오산 로드"] },
      { name: "수쿰빗", nameEn: "Sukhumvit", description: "현대적 쇼핑몰, 레스토랑, 나이트라이프가 밀집한 번화가.", highlights: ["터미널21", "엠쿼티에", "나나 플라자"] },
      { name: "짜뚜짝", nameEn: "Chatuchak", description: "세계 최대 규모의 주말 시장이 있는 북부 지역.", highlights: ["짜뚜짝 주말시장", "오또꼬 시장", "짜뚜짝 공원"] },
    ],
    attractions: [
      { name: "왕궁", nameEn: "Grand Palace", description: "1782년 건립된 태국 왕실의 공식 거주지로 에메랄드 불상이 모셔진 왓 프라깨우가 있습니다.", category: "궁전", tip: "긴 바지·소매 착용 필수, 오전 일찍 방문하세요." },
      { name: "왓포", nameEn: "Wat Pho", description: "길이 46m의 거대한 와불상으로 유명한 방콕에서 가장 오래된 사원.", category: "사원", tip: "태국 전통 마사지의 발상지로 경내에서 마사지를 받을 수 있습니다." },
      { name: "짜뚜짝 주말시장", nameEn: "Chatuchak Weekend Market", description: "15,000개 이상의 상점이 모인 세계 최대 규모의 주말 시장.", category: "시장", tip: "토·일요일만 운영, 코코넛 아이스크림을 꼭 맛보세요." },
      { name: "왓아룬", nameEn: "Wat Arun", description: "짜오프라야 강변에 우뚝 솟은 새벽사원으로 도자기 조각으로 장식된 79m 높이의 프랑(탑)이 상징입니다.", category: "사원", tip: "일몰 시간대에 강 건너편에서 바라보는 실루엣이 절경입니다." },
      { name: "카오산 로드", nameEn: "Khao San Road", description: "세계 배낭여행자들의 성지로 길거리 음식과 야시장이 활기찬 거리.", category: "거리" },
      { name: "짜오프라야 강 보트투어", nameEn: "Chao Phraya River Cruise", description: "방콕의 주요 사원과 야경을 강 위에서 감상하는 크루즈.", category: "체험" },
    ],
    dayTrips: [
      { name: "아유타야", nameEn: "Ayutthaya", description: "UNESCO 세계유산 고대 왕국의 유적지.", travelTime: "기차/미니밴 약 1.5시간", gradient: "from-orange-400 to-amber-700" },
      { name: "담넌사두악 수상시장", nameEn: "Damnoen Saduak Floating Market", description: "보트 위에서 음식과 과일을 사고파는 전통 수상시장.", travelTime: "차량 약 1.5시간", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "팟타이", description: "볶음 쌀국수에 새우, 두부, 숙주, 땅콩을 곁들인 태국 대표 요리.", emoji: "🍜" },
      { name: "똠얌꿍", description: "새우를 넣은 매콤 신 수프로 태국 요리의 정수.", emoji: "🍲" },
      { name: "카오 팟", description: "태국식 볶음밥, 거리 어디에서든 THB 40~60에 즐길 수 있습니다.", emoji: "🍚" },
    ],
    tips: [
      "사원 방문 시 어깨와 무릎을 덮는 복장을 준비하세요.",
      "BTS·MRT 래빗카드를 구매하면 교통비를 절약할 수 있습니다.",
      "택시는 반드시 미터기 사용을 요청하세요 (미터기 거부 시 다른 택시 이용).",
      "길거리 음식은 현지인이 많은 곳이 맛있고 안전합니다.",
    ],
  },
  "thailand/bangkok-central/ayutthaya": {
    heroGradient: "from-orange-400 to-amber-700",
    description: "1351~1767년 시암 왕국의 수도였던 고대 도시. UNESCO 세계유산으로 지정된 유적공원에 거대한 사원과 탑, 불상이 즐비하며 방콕에서 당일치기로 방문할 수 있습니다.",
    bestTime: "11~2월 (건기, 선선한 시기)",
    stayArea: "아유타야 역사공원 주변",
    transport: "방콕에서 기차/미니밴 약 1.5시간, 현지 툭툭·자전거 대여",
    districts: [
      { name: "역사공원 지구", nameEn: "Historical Park Area", description: "왓 마하탓, 왓 프라시산펫 등 주요 유적이 밀집한 섬 안쪽 지역.", highlights: ["왓 마하탓", "왓 프라시산펫", "위한 프라 몽콘 보핏"] },
    ],
    attractions: [
      { name: "아유타야 역사공원", nameEn: "Ayutthaya Historical Park", description: "UNESCO 세계유산으로 400년 시암 왕국의 웅장한 유적을 품은 공원.", category: "유적", tip: "자전거를 대여하면 넓은 공원을 효율적으로 둘러볼 수 있습니다." },
      { name: "왓 마하탓", nameEn: "Wat Mahathat", description: "나무뿌리에 감싸인 불두상으로 유명한 아유타야의 상징적 사원.", category: "사원", tip: "불두상 촬영 시 머리를 불상보다 낮추는 것이 예의입니다." },
      { name: "왓 프라시산펫", nameEn: "Wat Phra Si Sanphet", description: "왕궁 내 가장 중요한 사원으로 3개의 체디(탑)가 상징입니다.", category: "사원" },
    ],
    dayTrips: [
      { name: "방빠인 여름궁전", nameEn: "Bang Pa-In Royal Palace", description: "아유타야 근처의 아름다운 왕실 여름 궁전.", travelTime: "차량 약 20분", gradient: "from-emerald-400 to-green-700" },
    ],
    localFood: [
      { name: "꾸어이띠아우 루아", description: "아유타야 전통 보트 국수, 진한 육수가 특징.", emoji: "🍜" },
      { name: "로띠 사이마이", description: "솜사탕을 로띠에 말아 먹는 아유타야 명물 간식.", emoji: "🍬" },
    ],
    tips: [
      "자전거 대여(THB 50~100/일)가 유적 탐방에 가장 효율적입니다.",
      "햇볕이 매우 강하므로 모자, 선크림, 물을 충분히 준비하세요.",
      "방콕에서 당일치기 시 오전 일찍 출발하는 것이 좋습니다.",
    ],
  },

  // ===== NORTHERN =====
  "thailand/northern/chiang-mai": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "태국 북부의 문화 수도이자 란나 왕국의 옛 도시. 300개 이상의 사원, 야시장 문화, 산악 트레킹, 코끼리 보호소 등 다채로운 체험이 가능한 여행자들의 사랑받는 도시입니다.",
    bestTime: "11~2월 (건기, 선선한 시기)",
    stayArea: "올드시티 내 / 님만해민 거리",
    transport: "쏭태우(빨간 트럭) THB 30~40, 그랩 택시",
    districts: [
      { name: "올드시티", nameEn: "Old City", description: "사각형 해자로 둘러싸인 역사 지구로 사원과 게스트하우스가 밀집.", highlights: ["왓 체디루앙", "왓 프라싱", "선데이 워킹스트리트"] },
      { name: "님만해민", nameEn: "Nimmanhaemin", description: "트렌디한 카페, 부티크 숍, 갤러리가 모인 힙한 거리.", highlights: ["원 님만", "아트 갤러리", "카페 거리"] },
    ],
    attractions: [
      { name: "도이수텝", nameEn: "Doi Suthep", description: "치앙마이를 내려다보는 산 위의 황금빛 사원으로 309개 계단 또는 케이블카로 올라갑니다.", category: "사원", tip: "오전에 방문하면 맑은 날 치앙마이 시내까지 조망됩니다." },
      { name: "올드시티 사원군", nameEn: "Old City Temples", description: "왓 체디루앙, 왓 프라싱, 왓 치앙만 등 란나 양식의 아름다운 사원이 밀집.", category: "사원", tip: "수요일 저녁 몽크 챗에 참여하면 승려와 영어로 대화할 수 있습니다." },
      { name: "나이트 바자", nameEn: "Night Bazaar", description: "매일 저녁 열리는 대규모 야시장으로 수공예품, 의류, 길거리 음식이 가득.", category: "시장", tip: "가격 흥정은 기본! 제시 가격의 60~70%부터 시작하세요." },
      { name: "코끼리 자연공원", nameEn: "Elephant Nature Park", description: "윤리적 코끼리 체험이 가능한 보호소로 먹이주기와 목욕 체험을 할 수 있습니다.", category: "체험" },
      { name: "선데이 워킹스트리트", nameEn: "Sunday Walking Street", description: "라차담넌 로드를 따라 펼쳐지는 치앙마이 최대 규모의 주말 시장.", category: "시장" },
    ],
    dayTrips: [
      { name: "치앙라이", nameEn: "Chiang Rai", description: "백색사원(왓 롱쿤)과 블루 템플이 유명한 최북단 도시.", travelTime: "버스 약 3시간", gradient: "from-slate-300 to-white" },
      { name: "빠이", nameEn: "Pai", description: "히피 분위기의 산간 소도시로 폭포, 온천, 뷰포인트가 매력적.", travelTime: "미니밴 약 3시간", gradient: "from-lime-400 to-green-600" },
    ],
    localFood: [
      { name: "카오소이", description: "코코넛 커리 국수 위에 바삭한 면을 올린 북부 대표 요리.", emoji: "🍜" },
      { name: "싸이우아", description: "허브와 향신료가 가득한 치앙마이 전통 소시지.", emoji: "🌭" },
      { name: "깹무", description: "돼지껍데기 튀김, 맥주 안주로 최고.", emoji: "🥓" },
    ],
    tips: [
      "쏭태우(빨간 트럭)는 합승 택시로 올드시티 내 THB 30이면 이동 가능합니다.",
      "매년 11월 이펭(러이끄라통) 축제 시 수천 개의 등불이 하늘을 수놓습니다.",
      "코끼리 체험은 반드시 윤리적 보호소를 선택하세요 (타기 체험은 피하세요).",
      "3~4월은 산불 연무가 심하므로 피하는 것이 좋습니다.",
    ],
  },
  "thailand/northern/chiang-rai": {
    heroGradient: "from-slate-300 to-gray-600",
    description: "태국 최북단에 위치한 예술과 문화의 도시. 순백의 백색사원과 푸른빛 블루 템플 등 독창적인 현대 사원 건축으로 유명하며, 골든 트라이앵글의 거점 도시입니다.",
    bestTime: "11~2월 (건기, 선선한 시기)",
    stayArea: "시계탑 주변 / 나이트 바자 근처",
    transport: "치앙마이에서 버스 약 3시간, 현지 툭툭·그랩",
    districts: [
      { name: "시내 중심가", nameEn: "City Center", description: "시계탑, 나이트 바자, 레스토랑이 밀집한 중심 지역.", highlights: ["시계탑", "나이트 바자", "토요시장"] },
    ],
    attractions: [
      { name: "백색사원", nameEn: "White Temple (Wat Rong Khun)", description: "예술가 찰름차이가 설계한 순백색의 현대 사원으로 천국과 지옥을 표현한 독특한 건축.", category: "사원", tip: "오전 이른 시간에 방문하면 인파를 피할 수 있습니다." },
      { name: "블루 템플", nameEn: "Blue Temple (Wat Rong Suea Ten)", description: "선명한 파란색 내외부가 인상적인 현대 사원.", category: "사원" },
      { name: "골든 트라이앵글", nameEn: "Golden Triangle", description: "태국·라오스·미얀마 3국 국경이 만나는 메콩강 전망 지점.", category: "전망대" },
    ],
    dayTrips: [
      { name: "골든 트라이앵글", nameEn: "Golden Triangle", description: "3국 국경 지대와 아편박물관 방문.", travelTime: "차량 약 1.5시간", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "카오소이", description: "북부 태국의 대표 코코넛 커리 국수.", emoji: "🍜" },
      { name: "쏨땀", description: "그린 파파야 샐러드, 매콤새콤한 동북부 스타일.", emoji: "🥗" },
    ],
    tips: [
      "백색사원은 시내에서 약 13km 떨어져 있으므로 교통편을 미리 확보하세요.",
      "블루 템플은 무료 입장이며 사진 촬영이 자유롭습니다.",
      "치앙마이에서 당일치기도 가능하지만 1박하면 여유롭게 즐길 수 있습니다.",
    ],
  },

  // ===== SOUTHERN-ISLANDS =====
  "thailand/southern-islands/phuket": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "안다만 해의 진주로 불리는 태국 최대의 섬. 에메랄드빛 바다와 백사장 해변, 고급 리조트부터 배낭여행자 거리까지 다양한 숙박 옵션이 공존하는 세계적 휴양지입니다.",
    bestTime: "11~4월 (건기, 맑은 날씨)",
    stayArea: "빠통 비치 / 까론 비치 / 까따 비치",
    transport: "툭툭, 그랩 택시, 스쿠터 대여 (THB 200~300/일)",
    districts: [
      { name: "빠통", nameEn: "Patong", description: "푸켓 최대의 번화가로 해변, 나이트라이프, 쇼핑이 집중된 지역.", highlights: ["빠통 비치", "방글라 로드", "정실론 쇼핑몰"] },
      { name: "올드타운", nameEn: "Old Town", description: "시노-포르투기스 건축양식의 컬러풀한 거리와 카페가 있는 역사 지구.", highlights: ["탈랑 로드", "선데이 워킹스트리트", "카페 거리"] },
    ],
    attractions: [
      { name: "빠통 비치", nameEn: "Patong Beach", description: "푸켓에서 가장 유명하고 활기찬 해변으로 수상 스포츠와 나이트라이프의 중심지.", category: "해변", tip: "해변 의자 대여비는 THB 100~200, 흥정하세요." },
      { name: "빅 부다", nameEn: "Big Buddha", description: "나카드 언덕 꼭대기에 위치한 높이 45m의 대리석 불상으로 섬 전체 조망이 가능합니다.", category: "사원", tip: "일몰 시간에 방문하면 황금빛 파노라마를 감상할 수 있습니다." },
      { name: "올드타운 거리", nameEn: "Phuket Old Town", description: "알록달록한 시노-포르투기스 건축물이 늘어선 인스타그램 명소.", category: "거리" },
      { name: "팡아만 투어", nameEn: "Phang Nga Bay Tour", description: "007 제임스 본드 섬으로 유명한 석회암 카르스트 지형의 만.", category: "투어" },
    ],
    dayTrips: [
      { name: "피피섬", nameEn: "Phi Phi Islands", description: "영화 '더 비치' 촬영지로 유명한 에메랄드빛 섬.", travelTime: "스피드보트 약 1시간", gradient: "from-teal-400 to-cyan-700" },
      { name: "팡아만", nameEn: "Phang Nga Bay", description: "석회암 기둥이 솟은 환상적인 만을 카누로 탐험.", travelTime: "차량+보트 약 1.5시간", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "뿌짜 팟퐁커리", description: "게살 카레 볶음, 달걀과 함께 볶아 부드럽고 풍미가 진합니다.", emoji: "🦀" },
      { name: "호깬", description: "푸켓식 후꾸이엔(복건) 볶음 국수, 해산물 맛이 일품.", emoji: "🍜" },
    ],
    tips: [
      "5~10월 우기에는 서쪽 해변의 파도가 높으니 주의하세요.",
      "스쿠터 대여 시 국제운전면허증이 필요하며 헬멧 미착용 시 벌금 THB 500입니다.",
      "해변 호객꾼의 호가보다 2~3배 싸게 흥정 가능합니다.",
    ],
  },
  "thailand/southern-islands/krabi": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "수직 석회암 절벽과 맹그로브 숲으로 둘러싸인 안다만 해안의 보석. 라일레이 비치, 4개 섬 호핑투어 등 자연 그대로의 아름다움을 간직한 해양 휴양지입니다.",
    bestTime: "11~4월 (건기)",
    stayArea: "아오낭 비치 / 라일레이 비치",
    transport: "롱테일 보트, 쏭태우, 그랩",
    districts: [
      { name: "아오낭", nameEn: "Ao Nang", description: "레스토랑, 숙소, 투어 업체가 밀집한 끄라비의 관광 중심지.", highlights: ["아오낭 비치", "나이트 마켓", "투어 선착장"] },
    ],
    attractions: [
      { name: "라일레이 비치", nameEn: "Railay Beach", description: "석회암 절벽으로 둘러싸인 보트로만 접근 가능한 천혜의 해변으로 암벽등반 명소로도 유명합니다.", category: "해변", tip: "아오낭에서 롱테일 보트로 15분, THB 100~200입니다." },
      { name: "4개 섬 호핑투어", nameEn: "4 Islands Tour", description: "치킨 아일랜드, 뽀다섬, 뜹섬 등을 돌아보는 스노클링 투어.", category: "투어" },
      { name: "에메랄드 풀", nameEn: "Emerald Pool", description: "열대 우림 속 천연 에메랄드빛 온천 수영장.", category: "자연" },
    ],
    dayTrips: [
      { name: "피피섬", nameEn: "Phi Phi Islands", description: "끄라비에서도 스피드보트로 방문 가능한 에메랄드빛 섬.", travelTime: "스피드보트 약 1.5시간", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "쏨땀", description: "매콤한 그린 파파야 샐러드, 해산물과 함께 즐기는 남부 스타일.", emoji: "🥗" },
      { name: "팟타이 꿍솟", description: "큼직한 새우가 올라간 해변가 팟타이.", emoji: "🍤" },
    ],
    tips: [
      "라일레이는 도로가 없어 보트로만 접근 가능합니다 (짐을 가볍게!).",
      "우기(5~10월)에는 일부 섬 투어가 운영되지 않을 수 있습니다.",
      "암벽등반 초보자도 라일레이에서 반일 클래스를 수강할 수 있습니다.",
    ],
  },
  "thailand/southern-islands/koh-samui": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "태국만에 위치한 코코넛 나무로 뒤덮인 열대 섬. 고급 리조트와 스파, 풀문파티로 유명한 인근 코팡안, 앙통 해양국립공원 등 다양한 매력을 지닌 허니문 인기 여행지입니다.",
    bestTime: "1~3월 (건기, 맑은 날씨)",
    stayArea: "차웡 비치 / 라마이 비치 / 보풋 피셔맨스 빌리지",
    transport: "쏭태우, 택시, 스쿠터 대여",
    districts: [
      { name: "차웡", nameEn: "Chaweng", description: "코사무이 최대 해변으로 쇼핑, 나이트라이프가 활발한 중심 지역.", highlights: ["차웡 비치", "센트럴 페스티벌", "차웡 야시장"] },
      { name: "보풋", nameEn: "Bophut", description: "피셔맨스 빌리지의 금요 야시장으로 유명한 조용한 해변 마을.", highlights: ["피셔맨스 빌리지", "금요 나이트마켓", "보풋 비치"] },
    ],
    attractions: [
      { name: "앙통 해양국립공원", nameEn: "Ang Thong Marine Park", description: "42개 섬으로 이루어진 해양 국립공원으로 에메랄드 라군, 카약, 스노클링 등 다채로운 해양 체험이 가능합니다.", category: "국립공원", tip: "1일 투어(THB 1,500~2,500)로 주요 스폿을 돌아볼 수 있습니다." },
      { name: "빅 부다 사원", nameEn: "Big Buddha Temple", description: "코사무이 북동쪽 작은 섬에 위치한 12m 높이의 황금 좌불상.", category: "사원" },
      { name: "나무앙 폭포", nameEn: "Namuang Waterfall", description: "열대 우림 속 2단 폭포로 천연 수영장에서 수영이 가능합니다.", category: "자연" },
    ],
    dayTrips: [
      { name: "코팡안", nameEn: "Koh Phangan", description: "풀문파티와 한적한 비치로 유명한 인접 섬.", travelTime: "스피드보트 약 30분", gradient: "from-violet-400 to-purple-700" },
    ],
    localFood: [
      { name: "뿌짜 팟퐁커리", description: "게살 카레 볶음, 코사무이 해산물 레스토랑의 필수 메뉴.", emoji: "🦀" },
      { name: "코코넛 아이스크림", description: "갓 딴 코코넛 안에 담긴 수제 아이스크림.", emoji: "🥥" },
    ],
    tips: [
      "코사무이는 공항 독점으로 항공권이 비싼 편이니 일찍 예약하세요.",
      "앙통 해양국립공원은 11~12월 우기에 폐쇄될 수 있습니다.",
      "스쿠터 대여 시 도로가 경사가 심하므로 운전 경험이 필요합니다.",
      "보풋 피셔맨스 빌리지 금요 야시장은 분위기가 좋아 필수 방문입니다.",
    ],
  },

  // ===== EASTERN =====
  "thailand/eastern/pattaya": {
    heroGradient: "from-rose-400 to-pink-700",
    description: "방콕에서 가장 가까운 비치 리조트 도시. 워킹스트리트의 화려한 나이트라이프부터 수상 스포츠, 산호섬 투어, 농눅빌리지 등 다양한 엔터테인먼트를 즐길 수 있는 휴양 도시입니다.",
    bestTime: "11~2월 (건기, 선선한 시기)",
    stayArea: "비치로드 / 센트럴 파타야 / 좀티엔 비치",
    transport: "쏭태우(THB 10~20), 그랩 택시, 바이크 택시",
    districts: [
      { name: "센트럴 파타야", nameEn: "Central Pattaya", description: "쇼핑몰, 레스토랑, 워킹스트리트가 있는 파타야의 핵심 번화가.", highlights: ["워킹스트리트", "센트럴 페스티벌", "비치로드"] },
      { name: "좀티엔", nameEn: "Jomtien", description: "센트럴 파타야보다 조용한 해변 지역으로 장기 체류자에게 인기.", highlights: ["좀티엔 비치", "수상 스포츠", "야시장"] },
    ],
    attractions: [
      { name: "산호섬", nameEn: "Coral Island (Koh Larn)", description: "파타야 앞바다의 산호섬으로 맑은 바다에서 스노클링과 해양 스포츠를 즐길 수 있습니다.", category: "섬", tip: "발리하이 선착장에서 페리 THB 30, 스피드보트 THB 150~200." },
      { name: "농눅 트로피컬 가든", nameEn: "Nong Nooch Tropical Garden", description: "태국 전통 공연과 코끼리 쇼를 볼 수 있는 대규모 열대 정원.", category: "정원" },
      { name: "진실의 성소", nameEn: "Sanctuary of Truth", description: "못을 사용하지 않고 나무로만 조각한 105m 높이의 거대 건축물.", category: "건축", tip: "헬멧 착용 필수, 내부 목조각의 디테일이 압도적입니다." },
    ],
    dayTrips: [
      { name: "방콕", nameEn: "Bangkok", description: "방콕 쇼핑·관광 후 파타야로 복귀하는 당일치기.", travelTime: "버스 약 2시간", gradient: "from-amber-500 to-red-700" },
    ],
    localFood: [
      { name: "해산물 구이", description: "좀티엔 해변가 레스토랑에서 즐기는 싱싱한 해산물 바비큐.", emoji: "🦐" },
      { name: "쏨땀", description: "매콤한 그린 파파야 샐러드, 해산물 토핑 추가 추천.", emoji: "🥗" },
      { name: "망고 스티키라이스", description: "달콤한 망고와 코코넛 찹쌀밥의 태국 대표 디저트.", emoji: "🥭" },
    ],
    tips: [
      "쏭태우(파란 트럭)는 비치로드·세컨드로드를 순환하며 THB 10입니다.",
      "산호섬은 페리가 스피드보트보다 훨씬 저렴하고 안전합니다.",
      "방콕 수완나품 공항에서 파타야 직행 버스가 운행됩니다 (THB 143).",
    ],
  },
};

export const thailandAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BANGKOK =====
  "thailand/bangkok-central/bangkok/grand-palace": {
    heroGradient: "from-amber-500 to-red-700",
    description: "1782년 라마 1세에 의해 건립된 태국 왕실의 공식 거주지. 에메랄드 불상이 모셔진 왓 프라깨우(Wat Phra Kaew)를 포함하며, 태국 건축의 정수를 보여주는 화려한 금빛 건축물들이 21만㎡의 부지에 펼쳐져 있습니다.",
    history: "1782년 짜끄리 왕조의 라마 1세가 방콕 천도와 함께 건립했습니다. 라마 5세가 두싯 궁전으로 이전하기 전까지 왕실 거주지였으며, 현재는 왕실 행사와 국빈 접대에 사용됩니다.",
    visitInfo: {
      hours: "매일 08:30~15:30 (입장 마감 15:30)",
      admission: "THB 500 (외국인, 왓 프라깨우 포함)",
      address: "Na Phra Lan Rd, Phra Borom Maha Ratchawang, Bangkok 10200",
      website: "https://www.royalgrandpalace.th",
    },
    highlights: [
      "에메랄드 불상 (왓 프라깨우) - 태국에서 가장 신성한 불상",
      "짜끄리 마하쁘라삿 전각 - 유럽과 태국 건축의 융합",
      "벽화 회랑 - 라마끼엔(태국판 라마야나) 서사시 묘사",
      "두싯 마하쁘라삿 전각 - 태국 전통 건축의 걸작",
    ],
    nearbyAttractions: ["왓포", "왓아룬", "카오산 로드", "사남루앙 광장"],
    photoTips: "오전 8:30 개장 직후가 인파가 적어 촬영에 최적입니다. 짜끄리 전각은 정면에서, 왓 프라깨우 황금탑은 넓은 앵글로 담으세요.",
    tips: [
      "긴 바지, 소매 있는 상의 필수 (반바지·민소매 입장 불가).",
      "개장 시간(08:30)에 맞춰 방문하면 관광객이 적어 쾌적합니다.",
      "가이드 투어(THB 200 추가)를 이용하면 역사적 설명을 들을 수 있습니다.",
      "왕궁 주변 호객꾼의 '오늘 왕궁 닫았다' 사기에 주의하세요.",
    ],
  },
  "thailand/bangkok-central/bangkok/wat-pho": {
    heroGradient: "from-yellow-500 to-orange-700",
    description: "길이 46m, 높이 15m의 거대한 황금 와불상으로 유명한 방콕에서 가장 크고 오래된 사원. 태국 전통 마사지의 발상지이며, 1,000개 이상의 불상을 보유한 태국 최대의 불교 유물 컬렉션을 자랑합니다.",
    history: "16세기에 건립되어 라마 1세에 의해 대대적으로 확장되었습니다. 라마 3세 시기에 태국 최초의 대학 역할을 했으며, 전통 의학과 마사지 교육의 중심지였습니다.",
    visitInfo: {
      hours: "매일 08:00~18:30",
      admission: "THB 300 (외국인)",
      address: "2 Sanam Chai Rd, Phra Borom Maha Ratchawang, Bangkok 10200",
      website: "https://www.watpho.com",
    },
    highlights: [
      "와불상 (Reclining Buddha) - 황금빛 46m 거대 불상",
      "108개 청동 발바닥 상감 - 길상문양의 자개 장식",
      "태국 전통 마사지 스쿨",
      "91개의 체디(소탑)가 늘어선 경내 풍경",
    ],
    nearbyAttractions: ["왕궁", "왓아룬", "꽃시장 (빡클롱 딸랏)", "타마하랏 선착장"],
    photoTips: "와불상은 발쪽에서 촬영하면 원근감이 살아납니다. 광각 렌즈 추천.",
    tips: [
      "왕궁 방문 후 도보 5분 거리이므로 함께 방문하세요.",
      "경내 마사지 (THB 260/30분, THB 420/60분)는 줄이 길므로 일찍 방문하세요.",
      "와불상 뒤쪽에서 동전을 108개 그릇에 넣는 체험(THB 20)을 할 수 있습니다.",
    ],
  },
  "thailand/bangkok-central/bangkok/chatuchak-weekend-market": {
    heroGradient: "from-green-500 to-lime-700",
    description: "27개 섹션에 15,000개 이상의 상점이 모인 세계 최대 규모의 주말 시장. 의류, 수공예품, 골동품, 반려동물, 식물, 아트 등 없는 것이 없는 방콕 쇼핑의 성지입니다.",
    visitInfo: {
      hours: "토·일 09:00~18:00 (일부 금요일 18:00~24:00 야시장)",
      admission: "무료",
      address: "Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900",
    },
    highlights: [
      "15,000개 이상의 상점에서 의류, 수공예품, 예술품 쇼핑",
      "코코넛 아이스크림, 팟타이 등 다양한 길거리 음식",
      "빈티지 의류와 핸드메이드 액세서리 보물찾기",
      "섹션 7 주변 아트·갤러리 구역",
    ],
    nearbyAttractions: ["짜뚜짝 공원", "오또꼬 시장", "MRT 짜뚜짝 역"],
    photoTips: "좁은 골목과 컬러풀한 상품들이 포토제닉합니다. 높은 곳에서 내려다보는 시장 전경도 인기 구도.",
    tips: [
      "지도 앱(Chatuchak Guide)을 설치하면 미로 같은 시장에서 길을 잃지 않습니다.",
      "오전 일찍 방문하면 인파를 피하고 여유롭게 둘러볼 수 있습니다.",
      "가격 흥정은 기본이며, 제시 가격의 60~70%를 목표로 하세요.",
      "현금을 넉넉히 준비하세요 (ATM은 있지만 카드 결제 불가 상점이 많음).",
    ],
  },
  "thailand/bangkok-central/bangkok/wat-arun": {
    heroGradient: "from-orange-400 to-rose-600",
    description: "짜오프라야 강 서안에 우뚝 솟은 새벽사원. 도자기 조각과 유리 모자이크로 장식된 79m 높이의 프랑(크메르 양식 탑)이 상징이며, 일출과 일몰 시 강물에 반사되는 실루엣이 방콕의 아이콘입니다.",
    history: "아유타야 시대에 건립된 사원으로, 탁신 왕이 방콕 천도 전 이곳에서 새벽에 도착하여 '새벽사원'이라는 이름을 얻었습니다. 라마 2세와 라마 3세에 의해 현재의 웅장한 프랑이 완성되었습니다.",
    visitInfo: {
      hours: "매일 08:00~18:00",
      admission: "THB 100",
      address: "158 Wang Doem Rd, Wat Arun, Bangkok Yai, Bangkok 10600",
      website: "https://www.watarun.net",
    },
    highlights: [
      "79m 높이의 중앙 프랑 - 도자기 모자이크 장식의 크메르 양식 탑",
      "프랑 중간 테라스에서 바라보는 짜오프라야 강 조망",
      "일몰 시 강 건너편(왓포 쪽)에서 바라보는 실루엣",
      "야간 조명이 켜진 왓아룬의 환상적인 야경",
    ],
    nearbyAttractions: ["왓포", "왕궁", "왕랑 시장", "아이콘시암"],
    photoTips: "가장 유명한 촬영 포인트는 강 건너편 타 마하랏 선착장 부근입니다. 일몰 직전~직후가 베스트 타임.",
    tips: [
      "왓포에서 페리(THB 4)를 타고 강을 건너면 바로 도착합니다.",
      "프랑 계단이 매우 가파르니 편한 신발을 신으세요.",
      "야간 조명(18:00~21:00)은 강 건너편에서 감상하는 것이 좋습니다.",
    ],
  },

  // ===== AYUTTHAYA =====
  "thailand/bangkok-central/ayutthaya/ayutthaya-historical-park": {
    heroGradient: "from-orange-400 to-amber-700",
    description: "1351~1767년 시암 왕국의 수도였던 아유타야의 UNESCO 세계유산 유적공원. 왓 마하탓의 나무뿌리 불두상, 왓 프라시산펫의 3체디, 왓 차이와따나람 등 수십 개의 사원 유적이 섬 전체에 펼쳐져 있습니다.",
    history: "1350년 우통 왕에 의해 건국된 아유타야 왕국은 417년간 33명의 왕을 거치며 동남아시아 최대의 무역 도시로 번영했습니다. 1767년 버마 침공으로 멸망하며 대부분의 사원이 파괴되었습니다.",
    visitInfo: {
      hours: "매일 08:00~18:00 (일부 사원 06:30~)",
      admission: "개별 사원 THB 50 / 통합 패스 THB 220 (6개 사원)",
      address: "Pratuchai, Phra Nakhon Si Ayutthaya 13000",
    },
    highlights: [
      "왓 마하탓 - 보리수 나무뿌리에 감싸인 불두상",
      "왓 프라시산펫 - 3개의 거대한 종형 체디(탑)",
      "왓 차이와따나람 - 크메르 양식의 강변 사원 (일몰 명소)",
      "위한 프라 몽콘 보핏 - 태국 최대의 청동 좌불상",
    ],
    nearbyAttractions: ["방빠인 여름궁전", "아유타야 수상시장", "일본인 마을 유적"],
    photoTips: "왓 마하탓 불두상 촬영 시 낮은 앵글에서 나무뿌리를 함께 담으세요. 왓 차이와따나람은 일몰 시간이 황금빛으로 빛납니다.",
    tips: [
      "자전거 대여(THB 50~100/일)로 유적 간 이동이 가장 효율적입니다.",
      "통합 패스(THB 220)가 개별 입장권보다 경제적입니다.",
      "불두상 앞에서 사진 촬영 시 불상보다 머리를 낮추는 것이 예의입니다.",
      "한낮에는 매우 더우므로 오전 또는 늦은 오후에 방문하세요.",
    ],
  },

  // ===== CHIANG MAI =====
  "thailand/northern/chiang-mai/doi-suthep": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "치앙마이 서쪽 수텝산(해발 1,676m) 꼭대기에 위치한 황금빛 사원. 309개의 나가 계단을 올라가면 도금된 체디와 치앙마이 시내를 한눈에 내려다보는 장관이 펼쳐집니다.",
    history: "1383년 란나 왕국의 꾸에나 왕에 의해 건립되었습니다. 전설에 따르면 하얀 코끼리가 부처의 사리를 등에 싣고 산을 올라 자리를 잡은 곳에 사원을 세웠다고 합니다.",
    visitInfo: {
      hours: "매일 06:00~18:00",
      admission: "THB 30",
      address: "Su Thep, Mueang Chiang Mai District, Chiang Mai 50200",
    },
    highlights: [
      "황금 체디(탑)와 부처의 사리 봉안",
      "309개 나가(뱀신) 계단 오르기 체험",
      "테라스에서 치앙마이 시내 파노라마 조망",
      "저녁 예불 시간의 승려 독경 체험",
    ],
    nearbyAttractions: ["몽족 마을 (도이푸이)", "수텝산 국립공원", "푸핑 궁전"],
    photoTips: "맑은 오전에 방문하면 치앙마이 시내까지 선명하게 보입니다. 체디 앞 넓은 테라스가 베스트 포인트.",
    tips: [
      "쏭태우(빨간 트럭)를 차터하면 왕복 THB 100~150입니다.",
      "계단이 힘들면 케이블카(THB 50)를 이용할 수 있습니다.",
      "종교 시설이므로 어깨와 무릎을 덮는 복장이 필요합니다.",
    ],
  },
  "thailand/northern/chiang-mai/old-city-temples": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "치앙마이 올드시티 내에 밀집한 란나 왕국 시대의 사원군. 왓 체디루앙의 거대한 반파된 탑, 왓 프라싱의 금빛 법당, 왓 치앙만의 수정불상 등 걸어서 돌아볼 수 있는 사원 투어 코스입니다.",
    visitInfo: {
      hours: "대부분 매일 06:00~17:00",
      admission: "왓 체디루앙 THB 40 / 왓 프라싱 THB 20 / 왓 치앙만 무료",
      address: "Old City, Mueang Chiang Mai, Chiang Mai 50200",
    },
    highlights: [
      "왓 체디루앙 - 1411년 건립된 높이 60m의 반파된 거대 체디",
      "왓 프라싱 - 란나 양식의 아름다운 금빛 법당",
      "왓 치앙만 - 치앙마이에서 가장 오래된 사원(1296년)",
      "수요일 저녁 몽크 챗 프로그램",
    ],
    nearbyAttractions: ["선데이 워킹스트리트", "타패 문", "3왕 기념비"],
    photoTips: "왓 체디루앙의 거대한 체디는 아래에서 올려다보는 앵글이 웅장함을 살립니다.",
    tips: [
      "올드시티는 걸어서 2~3시간이면 주요 사원을 모두 돌아볼 수 있습니다.",
      "왓 체디루앙의 수요일 몽크 챗(17:00~)은 승려와 영어 대화가 가능합니다.",
      "사원 입장 시 신발을 벗어야 하니 벗기 쉬운 신발이 편리합니다.",
    ],
  },
  "thailand/northern/chiang-mai/night-bazaar": {
    heroGradient: "from-purple-500 to-indigo-800",
    description: "매일 저녁 창클란 로드를 따라 펼쳐지는 치앙마이의 대표 야시장. 북부 수공예품, 직물, 그림, 기념품부터 길거리 음식까지 다양한 상품을 흥정하며 쇼핑할 수 있는 활기찬 시장입니다.",
    visitInfo: {
      hours: "매일 17:00~24:00",
      admission: "무료",
      address: "Chang Khlan Rd, Chang Khlan, Mueang Chiang Mai, Chiang Mai 50100",
    },
    highlights: [
      "란나 스타일 수공예품과 직물 쇼핑",
      "길거리 음식 노점에서 카오소이, 망고 스티키라이스 맛보기",
      "갤러리아 나이트바자 쇼핑몰 내 무에타이 경기 관람",
      "라이브 음악과 거리 공연",
    ],
    nearbyAttractions: ["왓 체디루앙", "핑강 산책로", "안뜨라깃 나이트 마켓"],
    tips: [
      "가격 흥정은 제시가의 60~70%부터 시작하세요.",
      "토요 워킹스트리트(왓 게이트 주변)와 선데이 워킹스트리트도 추천합니다.",
      "같은 상품이 상점마다 가격이 다르니 비교 후 구매하세요.",
    ],
  },

  // ===== CHIANG RAI =====
  "thailand/northern/chiang-rai/white-temple": {
    heroGradient: "from-slate-200 to-white",
    description: "태국 예술가 찰름차이 꼬싯피빳이 1997년부터 건축 중인 순백색의 현대 사원. 전통 사원 양식을 재해석한 독창적 건축으로 '천국으로 가는 다리'를 건너면 순백의 법당 내부에 현대적 벽화가 펼쳐집니다.",
    history: "찰름차이 꼬싯피빳이 사재를 털어 1997년 착공한 이래 지금도 건축이 진행 중입니다. 2014년 지진으로 손상되었으나 복구되었으며, 완공까지 수십 년이 더 필요할 것으로 예상됩니다.",
    visitInfo: {
      hours: "매일 08:00~17:00 (주말 ~17:30)",
      admission: "THB 100 (외국인)",
      address: "Pa O Don Chai, Mueang Chiang Rai, Chiang Rai 57000",
      website: "https://www.watrongkhun.org",
    },
    highlights: [
      "지옥의 손이 뻗어 나오는 '윤회의 다리'",
      "법당 내부 현대 벽화 - 슈퍼히어로, 매트릭스 등 팝컬처 요소",
      "순백의 외관에 반짝이는 유리 조각 장식",
      "황금빛 화장실 건물 (예술 작품급의 화장실)",
    ],
    nearbyAttractions: ["블루 템플", "블랙 하우스 (반담 뮤지엄)", "치앙라이 시계탑"],
    photoTips: "정면에서 다리와 법당을 함께 담는 앵글이 가장 인기 있습니다. 오전에 방문하면 역광을 피할 수 있습니다.",
    tips: [
      "법당 내부는 촬영 금지이니 눈으로 감상하세요.",
      "오전 8시 개장 직후가 가장 한산합니다.",
      "치앙마이에서 당일치기 투어(THB 800~1,500)를 이용하면 편리합니다.",
    ],
  },

  // ===== PHUKET =====
  "thailand/southern-islands/phuket/patong-beach": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "푸켓에서 가장 유명하고 활기찬 3.5km 길이의 백사장 해변. 수상 스포츠, 해변 마사지, 나이트라이프의 중심지로 방글라 로드의 화려한 야경과 맞닿아 있습니다.",
    visitInfo: {
      hours: "24시간 (해변)",
      admission: "무료 (해변 의자 대여 THB 100~200)",
      address: "Patong Beach, Kathu, Phuket 83150",
    },
    highlights: [
      "3.5km 백사장에서 수영과 일광욕",
      "제트스키, 파라세일링 등 다양한 수상 스포츠",
      "방글라 로드의 나이트라이프",
      "해변 마사지 (THB 300~500)",
    ],
    nearbyAttractions: ["방글라 로드", "정실론 쇼핑몰", "빠통 복싱 스타디움"],
    tips: [
      "우기(5~10월)에는 파도가 높아 적기(Red Flag) 시 수영 금지입니다.",
      "수상 스포츠 가격은 흥정 가능합니다 (제시가의 50~60%).",
      "귀중품은 숙소에 보관하고 해변에 가져가지 마세요.",
    ],
  },
  "thailand/southern-islands/phuket/big-buddha": {
    heroGradient: "from-sky-400 to-blue-600",
    description: "나카드 언덕(해발 400m) 꼭대기에 위치한 높이 45m, 폭 25m의 백색 대리석 좌불상. 푸켓 남부 어디에서든 보이는 랜드마크로, 정상에서 짜롱 만과 빠통 해변까지 360도 파노라마를 감상할 수 있습니다.",
    visitInfo: {
      hours: "매일 06:00~19:30",
      admission: "무료 (기부 환영)",
      address: "Soi Yot Sane 1, Chao Fah Tawan Tok Rd, Karon, Phuket 83100",
    },
    highlights: [
      "45m 높이의 백색 대리석 좌불상",
      "360도 파노라마 전망 - 짜롱만, 빠통, 까따 비치",
      "일몰 시 황금빛으로 물드는 대불상",
      "종 치기 체험과 소원 타일 기부",
    ],
    nearbyAttractions: ["짜롱 사원", "까따 비치", "까론 뷰포인트"],
    photoTips: "일몰 직전 방문하면 대불상이 황금빛으로 빛나며, 배경의 바다와 하늘이 어우러진 드라마틱한 사진을 얻을 수 있습니다.",
    tips: [
      "언덕길이 가파르고 구불구불하므로 스쿠터 운전에 자신 없으면 택시를 이용하세요.",
      "종교 시설이므로 어깨와 무릎을 가리는 복장이 필요합니다.",
      "정상에서 바람이 강하니 모자를 단단히 고정하세요.",
    ],
  },

  // ===== KRABI =====
  "thailand/southern-islands/krabi/railay-beach": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "수직 석회암 절벽으로 삼면이 둘러싸여 보트로만 접근 가능한 천혜의 비치. 웨스트 라일레이의 백사장, 프라낭 동굴 비치, 세계적 수준의 암벽등반 코스까지 갖춘 끄라비의 보석입니다.",
    visitInfo: {
      hours: "24시간 (해변)",
      admission: "무료 (롱테일 보트 아오낭→라일레이 THB 100~200)",
      address: "Railay Beach, Ao Nang, Krabi 81000",
    },
    highlights: [
      "웨스트 라일레이 - 일몰이 아름다운 백사장 해변",
      "프라낭 동굴 비치 - 석회암 동굴과 에메랄드빛 바다",
      "세계적 수준의 석회암 암벽등반 코스 (초~고급)",
      "라일레이 뷰포인트 - 정글 트레킹 후 섬 전체 조망",
    ],
    nearbyAttractions: ["똠사이 비치", "프라낭 동굴", "치킨 아일랜드"],
    photoTips: "웨스트 라일레이에서 석회암 절벽을 배경으로 한 일몰 사진이 시그니처 샷입니다.",
    tips: [
      "아오낭에서 롱테일 보트로 15분, 마지막 보트 시간(18:00경)을 확인하세요.",
      "만조 시 이스트 라일레이 해변은 진흙이 드러나니 웨스트 라일레이로 가세요.",
      "암벽등반 반일 코스(THB 800~1,200)는 초보자도 도전 가능합니다.",
    ],
  },

  // ===== KOH SAMUI =====
  "thailand/southern-islands/koh-samui/ang-thong-marine-park": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "코사무이 서쪽에 위치한 42개 섬으로 이루어진 해양 국립공원. 에메랄드 라군, 석회암 절벽, 원시 열대 우림이 어우러진 자연의 보고로 카약, 스노클링, 하이킹을 즐길 수 있습니다.",
    visitInfo: {
      hours: "매일 08:00~17:00 (11~12월 폐장 가능)",
      admission: "THB 300 (외국인) + 투어비 별도",
      address: "Ang Thong National Marine Park, Surat Thani 84140",
    },
    highlights: [
      "에메랄드 레이크 (따래 나이) - 산 정상의 에메랄드빛 내호",
      "카약으로 석회암 동굴과 라군 탐험",
      "맑은 바다에서 스노클링과 열대어 감상",
      "우아 따랍 섬 전망대에서 42개 섬 파노라마",
    ],
    nearbyAttractions: ["코매 비치", "코웨 탈랍 캠핑장", "빠이 플루악 동굴"],
    photoTips: "에메랄드 레이크는 전망대 위에서 촬영하면 호수의 색감이 가장 선명하게 담깁니다.",
    tips: [
      "코사무이에서 1일 투어(THB 1,500~2,500)가 가장 일반적입니다.",
      "멀미약을 미리 복용하세요 (보트 이동 약 1시간).",
      "에메랄드 레이크까지 계단 약 500개를 올라야 하니 운동화를 신으세요.",
      "11~12월 몬순 시즌에는 공원이 폐쇄될 수 있으니 확인하세요.",
    ],
  },

  // ===== PATTAYA =====
  // Note: Pattaya의 주요 명소(산호섬 등)는 cityDetails에 포함
};
