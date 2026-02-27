import type { CityDetail, AttractionDetail } from "../city-details";

export const polandCityDetails: Record<string, CityDetail> = {
  // ===== KRAKOW SOUTH =====
  "poland/krakow-south/krakow": {
    heroGradient: "from-red-600 to-amber-800",
    description: "폴란드의 옛 수도이자 문화 중심지. 중세 구시가지가 완벽하게 보존되어 있으며 바벨 성, 중앙 시장 광장, 카지미에시 유대인 지구 등 유네스코 세계유산이 가득합니다.",
    bestTime: "5~9월 (여름 축제 시즌)",
    stayArea: "구시가지 / 카지미에시 지구",
    transport: "트램, 버스 (크라쿠프 시내 통합 티켓)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "중앙 시장 광장을 중심으로 중세 건축물이 밀집한 크라쿠프의 심장부.", highlights: ["중앙 시장 광장", "성 마리아 성당", "직물회관", "플로리안 성문"] },
      { name: "바벨 언덕", nameEn: "Wawel Hill", description: "폴란드 왕궁과 대성당이 자리한 역사의 중심지.", highlights: ["바벨 성", "바벨 대성당", "용의 동굴"] },
      { name: "카지미에시", nameEn: "Kazimierz", description: "유대인 역사 유적과 힙한 카페, 바가 공존하는 문화 지구.", highlights: ["올드 시나고그", "쉰들러 공장", "플라츠 노비 시장"] },
    ],
    attractions: [
      { name: "바벨 성", nameEn: "Wawel Castle", description: "폴란드 왕들의 거처였던 르네상스 양식의 왕궁으로 폴란드 역사의 상징입니다.", category: "궁전", tip: "왕실 전시실은 인원 제한이 있으니 온라인 사전 예약하세요." },
      { name: "중앙 시장 광장", nameEn: "Main Market Square", description: "유럽 최대의 중세 광장으로 직물회관과 성 마리아 성당이 자리하고 있습니다.", category: "광장", tip: "광장 주변 카페에서 여유롭게 분위기를 즐기세요." },
      { name: "성 마리아 성당", nameEn: "St Mary's Basilica", description: "고딕 양식의 쌍탑 성당으로 매 정시 나팔수의 헤이나우 연주가 유명합니다.", category: "성당", tip: "매 정시 탑에서 울려 퍼지는 나팔 소리를 꼭 들어보세요." },
      { name: "카지미에시 유대인 지구", nameEn: "Kazimierz Jewish Quarter", description: "600년 역사의 유대인 지구로 시나고그, 박물관, 트렌디한 카페가 어우러집니다.", category: "역사 지구" },
      { name: "쉰들러 공장", nameEn: "Schindler's Factory", description: "영화 '쉰들러 리스트'의 실제 배경이 된 공장을 박물관으로 개조한 곳.", category: "박물관", tip: "인기가 매우 높으니 최소 3일 전 온라인 예약 필수입니다." },
      { name: "직물회관", nameEn: "Cloth Hall", description: "중앙 시장 광장 한복판의 르네상스 건물로 1층은 기념품, 2층은 미술관.", category: "역사 건물" },
    ],
    dayTrips: [
      { name: "비엘리치카 소금 광산", nameEn: "Wieliczka Salt Mine", description: "지하 소금 광산 속 예배당과 조각상이 경이로운 유네스코 유산.", travelTime: "버스/기차 약 30분", gradient: "from-slate-400 to-slate-700" },
      { name: "아우슈비츠-비르케나우", nameEn: "Auschwitz-Birkenau", description: "제2차 세계대전 나치 수용소 추모관. 인류 역사의 비극을 기억하는 장소.", travelTime: "버스 약 1.5시간", gradient: "from-gray-600 to-gray-900" },
    ],
    localFood: [
      { name: "오비아르키", description: "크라쿠프식 베이글로 광장 노점에서 갓 구운 것을 맛볼 수 있습니다.", emoji: "🥯" },
      { name: "피에로기", description: "폴란드 전통 만두로 고기, 감자치즈, 과일 등 다양한 속 재료.", emoji: "🥟" },
      { name: "주렉", description: "호밀 발효 수프에 소시지와 삶은 달걀을 넣은 폴란드 전통 수프.", emoji: "🍲" },
    ],
    tips: [
      "구시가지는 도보로 충분히 둘러볼 수 있으며 트램을 활용하면 카지미에시까지 편리합니다.",
      "여름 성수기에는 바벨 성과 쉰들러 공장 티켓이 빠르게 매진되니 온라인 예약 필수입니다.",
      "환전은 시내 칸토르(Kantor)에서 하면 공항보다 좋은 환율을 받을 수 있습니다.",
      "크라쿠프 카드를 구매하면 대중교통 + 주요 박물관 무료 입장이 가능합니다.",
    ],
  },
  "poland/krakow-south/wieliczka": {
    heroGradient: "from-slate-400 to-slate-700",
    description: "크라쿠프 근교의 소도시로 700년 역사의 비엘리치카 소금 광산이 유네스코 세계유산에 등재되어 있습니다. 지하 135m에 펼쳐진 소금 예배당과 조각은 경이롭습니다.",
    bestTime: "연중 가능 (지하이므로 날씨 무관)",
    stayArea: "크라쿠프에서 당일치기 추천",
    transport: "크라쿠프에서 버스/기차 약 30분",
    districts: [
      { name: "광산 입구 지구", nameEn: "Mine Entrance Area", description: "소금 광산 입구와 박물관, 기념품점이 모여 있는 구역.", highlights: ["비엘리치카 소금 광산", "소금 광산 박물관", "졸업탑"] },
    ],
    attractions: [
      { name: "비엘리치카 소금 광산", nameEn: "Wieliczka Salt Mine", description: "지하 327m, 총연장 287km의 거대한 소금 광산으로 소금으로 조각된 예배당과 성상이 압도적입니다.", category: "유네스코 유산", tip: "관광 루트(Tourist Route)와 광부 루트(Miners' Route) 중 선택 가능합니다." },
      { name: "성 킹가 예배당", nameEn: "Chapel of St. Kinga", description: "지하 101m에 있는 소금 예배당으로 샹들리에까지 모두 소금으로 제작되었습니다.", category: "지하 예배당" },
      { name: "소금 광산 박물관", nameEn: "Salt Mine Museum", description: "광산의 역사와 소금 채굴 과정을 보여주는 전시관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "크라쿠프", nameEn: "Krakow", description: "폴란드의 문화 수도로 바벨 성과 구시가지 탐방.", travelTime: "버스/기차 약 30분", gradient: "from-red-600 to-amber-800" },
    ],
    localFood: [
      { name: "피에로기 루스키에", description: "감자와 농부 치즈를 넣은 가장 전통적인 피에로기.", emoji: "🥟" },
      { name: "키엘바사", description: "폴란드 전통 훈제 소시지, 겨자와 함께 즐기세요.", emoji: "🌭" },
    ],
    tips: [
      "광산 내부 온도가 14°C 정도이므로 겉옷을 꼭 챙기세요.",
      "관광 루트는 약 2~3시간 소요되며 800개 이상의 계단을 걸어야 합니다.",
      "온라인 예약 시 할인이 있으며 성수기에는 필수입니다.",
    ],
  },
  "poland/krakow-south/auschwitz-birkenau": {
    heroGradient: "from-gray-600 to-gray-900",
    description: "제2차 세계대전 당시 나치 독일이 운영한 최대 규모의 강제수용소. 110만 명 이상이 희생된 이곳은 현재 유네스코 세계유산이자 추모관으로 인류의 비극을 기억하는 장소입니다.",
    bestTime: "4~10월 (겨울에도 방문 가능하나 일조 시간 짧음)",
    stayArea: "크라쿠프에서 당일치기 추천",
    transport: "크라쿠프에서 버스 약 1.5시간",
    districts: [
      { name: "아우슈비츠 1", nameEn: "Auschwitz I", description: "원래 수용소로 전시관과 가스실이 보존되어 있는 구역.", highlights: ["'노동이 자유를 준다' 정문", "수용소 전시관", "총살 벽"] },
      { name: "비르케나우", nameEn: "Birkenau", description: "대규모 학살이 자행된 확장 수용소로 철도 선로와 유적이 남아 있습니다.", highlights: ["철도 입구", "가스실 유적", "국제 추모비"] },
    ],
    attractions: [
      { name: "아우슈비츠-비르케나우 추모관", nameEn: "Auschwitz-Birkenau Memorial", description: "나치 강제수용소의 참상을 보존하고 전시하는 국제 추모관. 전시관, 가스실, 수용 막사 등을 관람할 수 있습니다.", category: "추모관", tip: "4~10월 10시 이후에는 가이드 투어로만 입장 가능하니 아침 일찍 도착하세요." },
      { name: "수용소 전시관", nameEn: "Camp Exhibition", description: "수용자들의 유품과 사진, 문서를 통해 역사를 기록하고 있는 상설 전시.", category: "전시관" },
      { name: "국제 추모비", nameEn: "International Monument", description: "비르케나우 수용소 끝에 있는 추모 기념비로 여러 언어의 추모문이 새겨져 있습니다.", category: "기념비" },
    ],
    dayTrips: [
      { name: "크라쿠프", nameEn: "Krakow", description: "폴란드의 문화 수도, 바벨 성과 구시가지.", travelTime: "버스 약 1.5시간", gradient: "from-red-600 to-amber-800" },
    ],
    localFood: [
      { name: "바르시치", description: "비트 뿌리로 만든 붉은 수프, 폴란드의 대표적인 전통 요리.", emoji: "🍲" },
      { name: "플라츠키", description: "바삭하게 튀긴 감자 팬케이크에 사워크림을 곁들여 먹습니다.", emoji: "🥞" },
    ],
    tips: [
      "입장은 무료이나 가이드 투어는 유료(PLN 75~)이며 온라인 사전 예약이 필수입니다.",
      "방문 시 경건한 태도와 적절한 복장을 갖추세요.",
      "전체 관람에 최소 3~4시간이 소요됩니다.",
      "사진 촬영 시 플래시와 셀카봉 사용은 금지됩니다.",
    ],
  },

  // ===== WARSAW CENTRAL =====
  "poland/warsaw-central/warsaw": {
    heroGradient: "from-rose-600 to-red-900",
    description: "폴란드의 수도이자 최대 도시. 제2차 세계대전 후 완벽히 복원된 구시가지는 유네스코 세계유산이며, 현대적 스카이라인과 역사가 공존하는 역동적인 도시입니다.",
    bestTime: "5~9월 (여름 문화 행사 풍부)",
    stayArea: "구시가지 / 크라쿠프스키에 프셰드미에시치에 거리 주변",
    transport: "메트로, 트램, 버스 (바르샤바 시내 통합 티켓 ZTM)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "전후 완벽히 복원된 유네스코 세계유산 지구로 왕궁과 시장 광장이 있습니다.", highlights: ["왕궁 광장", "구시가지 시장 광장", "바르비칸"] },
      { name: "왕의 길", nameEn: "Royal Route", description: "왕궁에서 비라누프 궁전까지 이어지는 역사적 대로.", highlights: ["크라쿠프스키에 프셰드미에시치에", "코페르니쿠스 동상", "성 십자가 교회"] },
      { name: "프라가", nameEn: "Praga", description: "비스와 강 동쪽의 예술적이고 대안적인 분위기의 신흥 문화 지구.", highlights: ["네온 박물관", "소호 팩토리", "스카시셰프스키 공원"] },
    ],
    attractions: [
      { name: "바르샤바 구시가지", nameEn: "Warsaw Old Town", description: "제2차 세계대전 후 시민들의 노력으로 완벽히 복원된 유네스코 세계유산 구시가지.", category: "유네스코 유산", tip: "구시가지 시장 광장 주변 카페에서 여유로운 시간을 보내세요." },
      { name: "왕궁", nameEn: "Royal Castle", description: "폴란드 왕들의 공식 거처로 전후 재건된 화려한 바로크·르네상스 인테리어가 인상적입니다.", category: "궁전", tip: "수요일은 무료 입장! 대신 줄이 길 수 있습니다." },
      { name: "바르샤바 봉기 박물관", nameEn: "Warsaw Uprising Museum", description: "1944년 바르샤바 봉기의 역사를 생생하게 재현한 인터랙티브 박물관.", category: "박물관", tip: "관람에 최소 2~3시간이 필요하니 충분한 시간을 확보하세요." },
      { name: "바지엔키 공원", nameEn: "Lazienki Park", description: "바르샤바 최대의 공원으로 물 위의 궁전과 쇼팽 동상이 있습니다.", category: "공원", tip: "여름 일요일에 쇼팽 동상 앞에서 무료 야외 피아노 콘서트가 열립니다." },
      { name: "비라누프 궁전", nameEn: "Wilanow Palace", description: "바로크 양식의 아름다운 궁전으로 '폴란드의 베르사유'로 불립니다.", category: "궁전" },
      { name: "코페르니쿠스 과학센터", nameEn: "Copernicus Science Centre", description: "체험형 과학 전시관으로 가족 여행객에게 인기가 높습니다.", category: "과학관" },
    ],
    dayTrips: [
      { name: "젤라조바 볼라", nameEn: "Zelazowa Wola", description: "쇼팽의 생가가 있는 마을로 여름에는 야외 피아노 리사이틀 개최.", travelTime: "버스 약 1시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "피에로기", description: "폴란드 전통 만두, 바르샤바에서도 다양한 전문점이 있습니다.", emoji: "🥟" },
      { name: "폰치키", description: "장미잼이나 커스터드를 넣은 폴란드식 도넛, 목요일이 전통 폰치키 데이.", emoji: "🍩" },
      { name: "비고스", description: "양배추와 고기를 오래 끓인 폴란드 전통 스튜 '사냥꾼의 스튜'.", emoji: "🥘" },
    ],
    tips: [
      "바르샤바 시티카드로 대중교통 + 주요 박물관 무료/할인 혜택을 받으세요.",
      "메트로는 2개 노선으로 단순하며 트램과 함께 이용하면 편리합니다.",
      "구시가지에서 프라가 지구까지 비스와 강변 산책이 추천 코스입니다.",
      "수요일에 많은 박물관이 무료 개방하니 일정에 참고하세요.",
    ],
  },

  // ===== GDANSK NORTH =====
  "poland/gdansk-north/gdansk": {
    heroGradient: "from-cyan-600 to-blue-900",
    description: "발트해 연안의 항구 도시로 한자동맹의 번영했던 역사가 화려한 건축으로 남아 있습니다. 자유노조 연대 운동의 발상지이기도 한 폴란드 북부의 보석 같은 도시입니다.",
    bestTime: "6~9월 (발트해 여름 시즌)",
    stayArea: "주요 도시 / 드우기 타르그 주변",
    transport: "트램, 버스, SKM 도시철도",
    districts: [
      { name: "주요 도시", nameEn: "Main Town", description: "화려한 한자동맹 시대 건축물이 줄지어 선 그단스크의 핵심 관광 지구.", highlights: ["드우기 타르그", "녹색 문", "해양 박물관"] },
      { name: "올리바", nameEn: "Oliwa", description: "올리바 대성당과 공원이 있는 북쪽의 조용한 지구.", highlights: ["올리바 대성당", "올리바 공원", "그단스크 동물원"] },
    ],
    attractions: [
      { name: "드우기 타르그", nameEn: "Long Market", description: "그단스크의 중심 광장으로 넵튠 분수와 아르투스 코트 등 화려한 건축물이 밀집해 있습니다.", category: "광장", tip: "야간 조명이 켜진 저녁에 방문하면 더욱 아름답습니다." },
      { name: "유럽연대센터", nameEn: "European Solidarity Centre", description: "폴란드 자유노조 연대 운동의 역사를 기록한 현대식 박물관. 민주주의와 인권의 가치를 되새기는 곳.", category: "박물관", tip: "상설 전시는 약 2시간 소요, 옥상 전망대는 무료입니다." },
      { name: "성 마리아 교회", nameEn: "St. Mary's Church", description: "세계 최대의 벽돌 교회로 400개의 계단을 올라 탑 꼭대기에서 도시 전경을 감상할 수 있습니다.", category: "성당", tip: "탑 계단이 좁으니 편한 신발을 신으세요." },
      { name: "해양 박물관", nameEn: "National Maritime Museum", description: "발트해 해양 역사와 그단스크 조선 산업의 역사를 전시하는 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "말보르크 성", nameEn: "Malbork Castle", description: "세계 최대의 벽돌 성으로 유네스코 세계유산.", travelTime: "기차 약 45분", gradient: "from-orange-600 to-red-800" },
      { name: "소포트", nameEn: "Sopot", description: "유럽에서 가장 긴 목재 부두가 있는 발트해 해변 휴양지.", travelTime: "SKM 약 25분", gradient: "from-sky-400 to-cyan-700" },
    ],
    localFood: [
      { name: "골롱카", description: "천천히 익힌 돼지 족발, 겨자와 양배추 절임을 곁들여 먹습니다.", emoji: "🍖" },
      { name: "훈제 생선", description: "발트해에서 잡은 신선한 생선을 훈제한 그단스크의 특산물.", emoji: "🐟" },
      { name: "골드바서", description: "금가루가 들어간 그단스크 전통 허브 리큐어.", emoji: "🥃" },
    ],
    tips: [
      "3도시(그단스크-소포트-그디니아)를 연결하는 SKM 도시철도가 매우 편리합니다.",
      "주요 도시는 도보로 충분히 둘러볼 수 있는 규모입니다.",
      "호박(Amber) 제품이 그단스크의 대표 기념품이며 마리아츠카 거리에서 구매하세요.",
      "여름에는 모트와바 강에서 유람선 투어를 추천합니다.",
    ],
  },
  "poland/gdansk-north/malbork": {
    heroGradient: "from-orange-600 to-red-800",
    description: "세계 최대의 벽돌 성인 말보르크 성이 있는 도시. 13세기 튜턴 기사단이 건설한 이 거대한 성채는 유네스코 세계유산으로 중세 군사 건축의 걸작입니다.",
    bestTime: "5~9월 (여름에 야간 조명 쇼 개최)",
    stayArea: "그단스크에서 당일치기 추천",
    transport: "그단스크에서 기차 약 45분",
    districts: [
      { name: "성 주변 지구", nameEn: "Castle District", description: "말보르크 성과 노가트 강변을 따라 형성된 관광 지구.", highlights: ["말보르크 성", "노가트 강변", "성 주변 공원"] },
    ],
    attractions: [
      { name: "말보르크 성", nameEn: "Malbork Castle", description: "유네스코 세계유산. 21만㎡ 면적의 세계 최대 벽돌 성으로 튜턴 기사단의 본부였습니다.", category: "고성", tip: "전체 관람에 3~4시간 소요되니 오전에 도착하는 것을 추천합니다." },
      { name: "상성", nameEn: "High Castle", description: "기사단 수도회의 핵심 구역으로 예배당과 식당이 보존되어 있습니다.", category: "고성" },
      { name: "중성", nameEn: "Middle Castle", description: "대식당과 기사의 방이 있는 구역으로 호박 컬렉션 전시관이 유명.", category: "고성" },
    ],
    dayTrips: [
      { name: "그단스크", nameEn: "Gdansk", description: "한자동맹의 항구 도시, 화려한 구시가지 탐방.", travelTime: "기차 약 45분", gradient: "from-cyan-600 to-blue-900" },
    ],
    localFood: [
      { name: "피에로기", description: "폴란드 전통 만두, 성 근처 레스토랑에서 맛볼 수 있습니다.", emoji: "🥟" },
      { name: "주렉", description: "호밀 발효 수프, 빵 그릇에 담겨 나오는 버전이 인기.", emoji: "🍲" },
    ],
    tips: [
      "성 입장은 가이드 투어(PLN 50~) 또는 자유 관람 모두 가능합니다.",
      "여름 시즌에는 야간 조명 쇼(Sound & Light Show)가 인상적입니다.",
      "노가트 강 건너편에서 성 전체를 한눈에 담을 수 있는 포토 스팟이 있습니다.",
    ],
  },

  // ===== WROCLAW WEST =====
  "poland/wroclaw-west/wroclaw": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "12개의 섬과 130개 이상의 다리로 연결된 '폴란드의 베네치아'. 도시 곳곳에 숨겨진 350개 이상의 청동 난쟁이 조각상을 찾는 재미가 특별하며, 활기찬 대학 도시 분위기가 매력적입니다.",
    bestTime: "5~9월 (여름 축제 시즌)",
    stayArea: "리넥 시장 광장 주변",
    transport: "트램, 버스 (브로츠와프 시내 통합 티켓)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "리넥 시장 광장을 중심으로 화려한 바로크 건축물이 즐비한 도심 핵심 지구.", highlights: ["리넥 시장 광장", "구시청사", "소금 광장"] },
      { name: "오스트루프 툼스키", nameEn: "Ostrow Tumski", description: "브로츠와프 발상지인 대성당 섬으로 고딕 성당과 가스등이 낭만적.", highlights: ["세례자 요한 대성당", "성 십자가 교회", "가스등 거리"] },
      { name: "대학 지구", nameEn: "University Quarter", description: "브로츠와프 대학교와 바로크 양식의 아울라 레오폴디나가 있는 학문의 중심지.", highlights: ["브로츠와프 대학교", "아울라 레오폴디나", "수학 탑 전망대"] },
    ],
    attractions: [
      { name: "리넥 시장 광장", nameEn: "Market Square", description: "유럽에서 가장 큰 광장 중 하나로 화려한 색상의 건축물과 구시청사가 자리한 브로츠와프의 심장부.", category: "광장", tip: "저녁에 조명이 켜지면 한층 더 아름다운 야경을 감상하세요." },
      { name: "브로츠와프 난쟁이들", nameEn: "Wroclaw Dwarfs", description: "도시 곳곳에 숨겨진 350개 이상의 작은 청동 난쟁이 조각상. 난쟁이 찾기는 브로츠와프만의 독특한 즐거움.", category: "공공 예술", tip: "난쟁이 지도 앱을 다운받으면 체계적으로 찾을 수 있습니다." },
      { name: "세례자 요한 대성당", nameEn: "Cathedral of St. John the Baptist", description: "오스트루프 툼스키의 고딕 대성당으로 엘리베이터로 전망대에 오를 수 있습니다.", category: "성당", tip: "엘리베이터 전망대에서 오데르 강과 도시 전경을 감상하세요." },
      { name: "백년홀", nameEn: "Centennial Hall", description: "1913년 건축된 콘크리트 돔 건물로 유네스코 세계유산. 옆 분수 쇼가 유명합니다.", category: "유네스코 유산" },
      { name: "아울라 레오폴디나", nameEn: "Aula Leopoldina", description: "브로츠와프 대학교 내 바로크 양식의 대강당으로 화려한 천장화와 조각이 압도적.", category: "역사 건물" },
    ],
    dayTrips: [
      { name: "크시옹슈 성", nameEn: "Ksiaz Castle", description: "실레지아 최대의 성으로 아름다운 정원과 지하 터널 탐험이 가능.", travelTime: "기차+버스 약 1.5시간", gradient: "from-amber-500 to-orange-700" },
      { name: "스비드니차 평화교회", nameEn: "Church of Peace in Swidnica", description: "유네스코 세계유산인 목조 교회로 바로크 인테리어가 인상적.", travelTime: "기차 약 1시간", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "실레지안 만두", description: "감자 반죽으로 만든 실레지아 전통 만두, 고기 롤라다와 함께.", emoji: "🥟" },
      { name: "피에로기", description: "브로츠와프의 피에로기 전문점에서 다양한 창작 피에로기를 맛보세요.", emoji: "🥟" },
      { name: "마코비에츠", description: "양귀비씨를 넣은 폴란드 전통 롤케이크.", emoji: "🍰" },
    ],
    tips: [
      "난쟁이 찾기 앱(Wroclaw Dwarfs)을 설치하면 도시 탐방이 더 재미있습니다.",
      "오스트루프 툼스키에서 매일 저녁 가스등을 직접 켜는 점등사를 만날 수 있습니다.",
      "여름에는 백년홀 앞 멀티미디어 분수 쇼가 무료로 열립니다.",
      "트램 0번은 관광 트램으로 주요 명소를 순환합니다.",
    ],
  },
};

export const polandAttractionDetails: Record<string, AttractionDetail> = {
  // ===== KRAKOW =====
  "poland/krakow-south/krakow/wawel-castle": {
    heroGradient: "from-red-600 to-amber-800",
    description: "폴란드 왕들의 거처였던 바벨 성은 크라쿠프의 상징이자 폴란드 역사의 심장부입니다. 비스와 강변 언덕 위에 자리한 르네상스 양식의 궁전과 고딕 대성당이 어우러진 웅장한 건축물입니다.",
    history: "11세기부터 폴란드 왕가의 거처로 사용되었으며, 14~17세기에 걸쳐 고딕, 르네상스, 바로크 양식으로 증축되었습니다. 1609년 수도가 바르샤바로 이전된 후에도 폴란드 왕들의 대관식과 장례가 이곳에서 거행되었습니다.",
    visitInfo: {
      hours: "화~일 09:30~17:00 (월요일 휴관, 계절별 변동)",
      admission: "왕실 전시실 PLN 35, 대성당 무료 (박물관 PLN 14)",
      address: "Wawel 5, 31-001 Kraków",
      website: "https://www.wawel.krakow.pl",
    },
    highlights: [
      "르네상스 양식의 아케이드 중정 (이탈리아 건축가 설계)",
      "왕실 전시실의 플랑드르 태피스트리 컬렉션",
      "바벨 대성당의 왕실 무덤과 지그문트 종",
      "용의 동굴 (전설 속 바벨 용이 살던 동굴)",
    ],
    nearbyAttractions: ["바벨 대성당", "용의 동굴", "중앙 시장 광장", "카지미에시 유대인 지구"],
    photoTips: "비스와 강 건너편에서 바벨 언덕 전체를 담는 파노라마 촬영이 가장 아름답습니다. 석양 무렵이 황금빛 조명으로 최고의 시간대입니다.",
    tips: [
      "왕실 전시실은 1일 입장 인원이 제한되어 있으니 온라인 사전 예약이 필수입니다.",
      "무료 개방일(매월 첫 일요일 등)에는 매우 혼잡하므로 이른 아침에 도착하세요.",
      "용의 동굴은 135개 계단을 내려가야 하며, 출구에 불을 뿜는 용 조각상이 있습니다.",
      "바벨 대성당 종탑의 지그문트 종은 폴란드에서 가장 큰 종입니다.",
    ],
  },
  "poland/krakow-south/krakow/main-market-square": {
    heroGradient: "from-amber-500 to-red-700",
    description: "1257년에 조성된 유럽 최대의 중세 광장(약 200m×200m)으로, 직물회관, 성 마리아 성당, 시청사 탑이 자리한 크라쿠프의 중심이자 유네스코 세계유산의 핵심입니다.",
    history: "1257년 도시 계획에 따라 조성되었으며 중세부터 상업과 문화의 중심지 역할을 해왔습니다. 중앙의 직물회관(수키엔니체)은 14세기부터 직물 무역의 중심이었습니다.",
    visitInfo: {
      hours: "광장: 24시간 개방 / 직물회관 갤러리: 화~일 10:00~18:00",
      admission: "광장 무료 / 시청사 탑 PLN 15 / 지하 박물관 PLN 28",
      address: "Rynek Główny, 31-042 Kraków",
    },
    highlights: [
      "직물회관(수키엔니체) - 1층 기념품 시장, 2층 미술관",
      "매 정시 성 마리아 성당 탑에서의 헤이나우 나팔 연주",
      "시청사 탑 전망대에서 광장 조감",
      "지하 박물관 린넥 언더그라운드 (중세 유적 발굴 전시)",
    ],
    nearbyAttractions: ["성 마리아 성당", "직물회관", "시청사 탑", "성 바르바라 교회"],
    photoTips: "성 마리아 성당 쌍탑을 배경으로 광장을 담으려면 남서쪽 모서리에서 촬영하세요. 야간 조명 사진도 훌륭합니다.",
    tips: [
      "지하 박물관 '린넥 언더그라운드'는 인터랙티브 전시가 훌륭하니 꼭 방문하세요.",
      "광장 주변 레스토랑은 관광지 가격이므로 한 블록 안쪽이 더 합리적입니다.",
      "겨울 크리스마스 마켓 시즌(12월)에는 광장이 화려하게 변신합니다.",
    ],
  },
  "poland/krakow-south/krakow/st-marys-basilica": {
    heroGradient: "from-blue-700 to-indigo-900",
    description: "크라쿠프 중앙 시장 광장의 고딕 쌍탑 성당으로, 매 정시 탑에서 울려 퍼지는 '헤이나우' 나팔 소리는 크라쿠프의 상징입니다. 내부의 비트 스트보시 제단은 유럽 최대의 목조 제단입니다.",
    history: "13세기에 건설이 시작되어 14세기에 현재의 고딕 양식으로 완성되었습니다. 두 탑의 높이가 다른 이유에 대해 형제 건축가의 전설이 전해집니다. 비트 스트보시 제단(1489년)은 12년에 걸쳐 제작되었습니다.",
    visitInfo: {
      hours: "월~토 11:30~18:00, 일 14:00~18:00 (미사 시간 제외)",
      admission: "성당 PLN 15 / 탑 PLN 20",
      address: "Plac Mariacki 5, 31-042 Kraków",
      website: "https://www.mariacki.com",
    },
    highlights: [
      "비트 스트보시 제단 - 유럽 최대의 고딕 목조 제단 (13m×11m)",
      "매 정시 나팔수의 헤이나우 연주 (탑에서 사방으로)",
      "화려한 청색과 금색의 천장 장식",
      "14세기 스테인드글라스 창문",
    ],
    nearbyAttractions: ["중앙 시장 광장", "직물회관", "성 바르바라 교회", "소광장"],
    photoTips: "광장에서 쌍탑을 올려다보는 앵글이 가장 대표적입니다. 내부는 플래시 없이 촬영 가능합니다.",
    tips: [
      "헤이나우 나팔 소리는 매 정시에 울리며 중간에 갑자기 끊기는데, 이는 몽골 침입 때 화살에 맞은 나팔수를 기리는 전통입니다.",
      "내부 관람은 별도 입구(측면)에서 티켓을 구매해야 합니다.",
      "비트 스트보시 제단은 매일 11:50에 개폐식이 진행되며 이때가 가장 감동적입니다.",
      "탑 등반은 인원 제한이 있으니 이른 시간에 방문하세요.",
    ],
  },
  "poland/krakow-south/krakow/kazimierz-jewish-quarter": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "600년 역사의 유대인 지구로 제2차 세계대전의 비극과 문화 부흥의 이야기가 공존합니다. 현재는 시나고그, 박물관과 함께 힙한 카페, 바, 갤러리가 어우러진 크라쿠프에서 가장 트렌디한 지구입니다.",
    history: "1495년 유대인들이 크라쿠프에서 추방되며 이주해 형성된 독립 도시였습니다. 전성기에는 6만5천여 명의 유대인이 거주했으나 홀로코스트로 대부분 희생되었습니다. 1990년대부터 문화 부흥이 시작되어 현재의 활기찬 모습을 되찾았습니다.",
    visitInfo: {
      hours: "시나고그: 일~금 09:00~18:00 (토요일 휴관) / 거리: 24시간",
      admission: "올드 시나고그 PLN 15 / 거리 산책 무료",
      address: "Kazimierz District, Kraków",
    },
    highlights: [
      "올드 시나고그 - 폴란드에서 가장 오래된 시나고그 (15세기)",
      "플라츠 노비 토요 시장 (로컬 푸드 마켓)",
      "영화 '쉰들러 리스트' 촬영 장소들",
      "유대인 문화 축제 (매년 6~7월)",
    ],
    nearbyAttractions: ["쉰들러 공장", "바벨 성", "중앙 시장 광장", "성 요셉 교회"],
    photoTips: "세르카 거리의 컬러풀한 건물들과 플라츠 노비 시장의 활기찬 분위기가 좋은 사진 소재입니다.",
    tips: [
      "토요일에는 시나고그가 문을 닫으니 유대인 유적 관람은 평일에 계획하세요.",
      "플라츠 노비 토요 시장에서 자파칸카(오픈 샌드위치)를 꼭 맛보세요.",
      "무료 워킹 투어를 이용하면 역사적 맥락을 더 깊이 이해할 수 있습니다.",
      "저녁에는 바와 라이브 뮤직 클럽이 활기차니 나이트라이프도 즐겨보세요.",
    ],
  },

  // ===== WIELICZKA =====
  "poland/krakow-south/wieliczka/wieliczka-salt-mine": {
    heroGradient: "from-slate-400 to-slate-700",
    description: "700년 넘게 채굴된 세계에서 가장 오래된 소금 광산 중 하나로, 지하에 소금으로 조각된 예배당, 성상, 샹들리에가 경이로운 지하 세계를 이루고 있습니다. 1978년 유네스코 세계유산 최초 등재 목록 12개 중 하나입니다.",
    history: "13세기부터 채굴이 시작되어 2007년까지 약 700년간 운영되었습니다. 총 9층, 지하 327m 깊이, 총연장 287km에 달하는 거대한 지하 미로로 중세 폴란드 왕국의 주요 수입원이었습니다.",
    visitInfo: {
      hours: "4~10월 07:30~19:30 / 11~3월 08:00~17:00",
      admission: "관광 루트 PLN 120 (외국어 가이드), 광부 루트 PLN 89",
      address: "Daniłowicza 10, 32-020 Wieliczka",
      website: "https://www.wieliczka-saltmine.com",
    },
    highlights: [
      "성 킹가 예배당 - 지하 101m에 있는 소금 예배당, 샹들리에도 소금 결정",
      "코페르니쿠스 방 - 코페르니쿠스가 방문했다는 전설의 방",
      "지하 소금 호수의 신비로운 풍경",
      "소금으로 조각된 종교 성상과 장면들",
    ],
    nearbyAttractions: ["소금 광산 박물관", "졸업탑 (소금 흡입 치료)", "크라쿠프 구시가지"],
    photoTips: "성 킹가 예배당에서의 촬영이 하이라이트입니다. 삼각대 없이 ISO를 높여 촬영하세요 (삼각대 반입 금지).",
    tips: [
      "광산 내부 온도는 연중 14~16°C이므로 가벼운 겉옷을 꼭 챙기세요.",
      "관광 루트는 약 3km를 걸으며 800개 이상의 계단을 오르내려야 합니다.",
      "온라인 예약 시 현장 구매보다 저렴하며 성수기에는 필수입니다.",
      "영어 가이드 투어 시간을 미리 확인하고 예약하세요.",
    ],
  },

  // ===== AUSCHWITZ-BIRKENAU =====
  "poland/krakow-south/auschwitz-birkenau/auschwitz-birkenau-memorial": {
    heroGradient: "from-gray-600 to-gray-900",
    description: "제2차 세계대전 당시 나치 독일이 운영한 최대 규모의 강제수용소이자 학살 현장. 110만 명 이상(대부분 유대인)이 이곳에서 목숨을 잃었습니다. 유네스코 세계유산이자 인류 역사의 비극을 기억하는 가장 중요한 추모 현장입니다.",
    history: "1940년 폴란드 정치범 수용을 위해 개설되었으나 곧 유럽 유대인 학살의 중심지가 되었습니다. 1942년부터 조직적 대량 학살이 자행되었으며, 1945년 1월 27일 소련군에 의해 해방되었습니다. 이 날은 국제 홀로코스트 추모일로 지정되었습니다.",
    visitInfo: {
      hours: "매일 개관 (12월 25일, 1월 1일, 부활절 첫째 날 휴관) / 시즌별 7:30~14:00에서 7:30~19:00",
      admission: "입장 무료 / 가이드 투어 PLN 75~100",
      address: "Więźniów Oświęcimia 20, 32-603 Oświęcim",
      website: "https://www.auschwitz.org",
    },
    highlights: [
      "'Arbeit macht frei(노동이 자유를 준다)' 정문",
      "수용소 전시관 - 수용자 유품, 사진, 문서",
      "비르케나우의 철도 선로와 가스실 유적",
      "국제 추모비와 추모 공간",
    ],
    nearbyAttractions: ["오시비엥침 유대 센터", "크라쿠프 구시가지"],
    tips: [
      "4~10월 10시 이후에는 가이드 투어로만 입장이 가능하니 이른 아침(무료 입장)에 도착하세요.",
      "최소 3.5~4시간을 확보하세요 (아우슈비츠 I + 비르케나우).",
      "경건한 태도와 적절한 복장을 갖추세요. 큰 가방은 반입 금지입니다.",
      "사진 촬영은 가능하나 셀카봉, 플래시, 일부 구역에서 촬영이 금지됩니다.",
      "한국어 가이드북을 입구에서 구매할 수 있습니다.",
    ],
  },

  // ===== WARSAW =====
  "poland/warsaw-central/warsaw/old-town": {
    heroGradient: "from-rose-600 to-red-900",
    description: "제2차 세계대전 당시 85% 이상 파괴된 후 시민들의 헌신적인 노력으로 완벽히 복원된 바르샤바 구시가지. '폐허에서 부활한 도시'로서의 가치를 인정받아 유네스코 세계유산에 등재되었습니다.",
    history: "13세기에 형성된 구시가지는 1944년 바르샤바 봉기 진압 과정에서 나치에 의해 조직적으로 파괴되었습니다. 전후 시민들이 18세기 풍경화를 참고하여 벽돌 하나까지 원형 그대로 복원했으며, 1980년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "거리: 24시간 / 왕궁: 화~일 10:00~18:00 (월요일 휴관)",
      admission: "구시가지 산책 무료 / 왕궁 PLN 30",
      address: "Stare Miasto, Warszawa",
    },
    highlights: [
      "왕궁 광장 - 지그문트 3세 기둥과 왕궁이 자리한 구시가지 입구",
      "구시가지 시장 광장 - 인어상과 컬러풀한 건물들",
      "바르비칸 - 16세기 방어 요새 유적",
      "전후 복원의 상징으로서의 유네스코 세계유산 가치",
    ],
    nearbyAttractions: ["왕궁", "바르비칸", "신시가지", "비스와 강변"],
    photoTips: "시장 광장의 인어상과 컬러풀한 건물을 정면에서 담으세요. 왕궁 광장에서 지그문트 기둥을 전경으로 넣으면 상징적인 사진을 얻을 수 있습니다.",
    tips: [
      "무료 워킹 투어가 매일 운영되며 구시가지의 역사를 깊이 이해할 수 있습니다.",
      "구시가지 시장 광장 주변 레스토랑은 관광지 가격이니 한 골목 안쪽이 합리적입니다.",
      "비스와 강변까지 내려가면 여름에 비치바와 카페가 열립니다.",
      "야간에는 조명이 켜져 낮과는 다른 분위기를 느낄 수 있습니다.",
    ],
  },
  "poland/warsaw-central/warsaw/royal-castle": {
    heroGradient: "from-rose-700 to-amber-800",
    description: "폴란드 왕들의 공식 거처로 바로크와 르네상스 양식이 어우러진 화려한 궁전입니다. 전쟁으로 완전히 파괴된 후 국민 성금으로 재건되어 폴란드인의 불굴의 의지를 상징합니다.",
    history: "14세기에 건설이 시작되어 16세기 수도 이전 이후 왕궁으로 사용되었습니다. 1944년 나치에 의해 완전히 파괴되었으나 시민들이 사전에 빼돌린 예술품과 상세한 기록을 바탕으로 1971~1988년 재건되었습니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00 (월요일 휴관, 목요일 20:00까지)",
      admission: "성인 PLN 30, 학생 PLN 20 / 수요일 무료",
      address: "Plac Zamkowy 4, 00-277 Warszawa",
      website: "https://www.zamek-krolewski.pl",
    },
    highlights: [
      "대의회 홀 - 바로크 양식의 화려한 인테리어",
      "카날레토 방 - 18세기 바르샤바 풍경화 (복원의 기초 자료)",
      "왕좌의 방과 대리석 방",
      "렘브란트 '책상 앞의 학자' 원작 소장",
    ],
    nearbyAttractions: ["구시가지 시장 광장", "성 요한 대성당", "왕의 길", "바르비칸"],
    photoTips: "왕궁 광장에서 지그문트 기둥과 함께 궁전 전면을 담는 것이 클래식한 구도입니다.",
    tips: [
      "수요일은 무료 입장일이지만 대기 줄이 매우 깁니다. 오전 일찍 도착하세요.",
      "한국어 오디오 가이드가 제공되니 꼭 이용하세요.",
      "카날레토의 풍경화는 전후 복원의 핵심 자료였다는 점에서 특별한 의미가 있습니다.",
      "1층 카페에서 왕궁 광장 뷰를 즐기며 쉬어갈 수 있습니다.",
    ],
  },
  "poland/warsaw-central/warsaw/warsaw-uprising-museum": {
    heroGradient: "from-gray-700 to-red-900",
    description: "1944년 바르샤바 봉기의 63일간의 전투를 생생하게 재현한 인터랙티브 박물관입니다. 폴란드인의 저항과 희생을 기리며, 자유를 향한 투쟁의 역사를 깊이 있게 전달합니다.",
    history: "2004년 봉기 60주년을 맞아 개관했습니다. 1944년 8월 1일, 폴란드 저항군(AK)은 나치 점령에 맞서 봉기를 일으켰으나 63일간의 전투 끝에 진압되었고, 약 20만 명이 희생되었습니다.",
    visitInfo: {
      hours: "월·수·금 08:00~18:00, 목 08:00~20:00, 토·일 10:00~18:00 (화요일 휴관)",
      admission: "성인 PLN 25, 학생 PLN 20 / 일요일 무료",
      address: "Grzybowska 79, 00-844 Warszawa",
      website: "https://www.1944.pl",
    },
    highlights: [
      "봉기 63일의 타임라인을 따라가는 인터랙티브 전시",
      "실물 크기의 B-24 리버레이터 폭격기 복제본",
      "봉기 참전자들의 증언 영상",
      "3D 영화관 - 폐허가 된 바르샤바 상공 비행",
    ],
    nearbyAttractions: ["바르샤바 구시가지", "문화과학궁전", "바지엔키 공원"],
    photoTips: "박물관 외벽의 대형 봉기 상징 앵커 마크가 인상적인 포토 스팟입니다.",
    tips: [
      "전시물이 매우 방대하여 최소 2~3시간을 확보하세요.",
      "영어 오디오 가이드를 반드시 이용하세요. 전시의 이해도가 크게 달라집니다.",
      "일요일 무료 입장 시 매우 혼잡하니 평일 방문을 추천합니다.",
      "3D 영화 '폐허의 도시'는 상영 시간을 미리 확인하세요.",
    ],
  },

  // ===== GDANSK =====
  "poland/gdansk-north/gdansk/long-market": {
    heroGradient: "from-cyan-600 to-blue-900",
    description: "그단스크의 중심 광장이자 '왕의 길'의 하이라이트. 한자동맹 시대의 화려한 상인 가옥, 넵튠 분수, 아르투스 코트 등이 줄지어 선 그단스크에서 가장 아름다운 거리입니다.",
    history: "13세기부터 그단스크의 주요 교역 장소이자 공식 행사의 중심지였습니다. 제2차 세계대전으로 파괴된 후 원형을 충실히 복원하여 한자동맹 시대의 영화를 되살렸습니다.",
    visitInfo: {
      hours: "거리: 24시간 / 아르투스 코트: 화~일 10:00~17:00",
      admission: "거리 산책 무료 / 아르투스 코트 PLN 15",
      address: "Długi Targ, 80-831 Gdańsk",
    },
    highlights: [
      "넵튠 분수 - 1633년에 세워진 그단스크의 상징",
      "아르투스 코트 - 한자 상인들의 사교 클럽, 세계 최대의 타일 난로",
      "황금문과 녹색문 사이의 화려한 파사드 건물군",
      "야간 조명으로 빛나는 건물 파사드",
    ],
    nearbyAttractions: ["성 마리아 교회", "해양 박물관", "마리아츠카 거리", "모트와바 강변"],
    photoTips: "녹색문 쪽에서 황금문 방향으로 넵튠 분수를 전경에 넣고 촬영하면 대표적인 구도를 얻을 수 있습니다.",
    tips: [
      "아르투스 코트 내부의 세계 최대 타일 난로(10.64m)는 꼭 보세요.",
      "마리아츠카 거리로 빠지면 호박 보석 상점들이 밀집해 있습니다.",
      "야경이 특히 아름다우니 저녁 산책을 추천합니다.",
      "여름에는 광장에서 야외 공연과 이벤트가 자주 열립니다.",
    ],
  },
  "poland/gdansk-north/gdansk/european-solidarity-centre": {
    heroGradient: "from-orange-500 to-red-800",
    description: "1980년 그단스크 조선소에서 시작된 '연대(Solidarność)' 자유노조 운동의 역사를 기록한 현대식 박물관. 레흐 바웬사가 이끈 민주화 운동은 동유럽 공산주의 체제 붕괴의 시발점이 되었습니다.",
    history: "2014년 개관. 1980년 그단스크 레닌 조선소 파업에서 시작된 연대 노조는 동유럽 최초의 독립 노동조합이 되었으며, 1989년 폴란드 민주화와 이어진 동유럽 체제 전환의 도화선이 되었습니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00 (10~4월 17:00까지, 월요일 휴관)",
      admission: "상설 전시 PLN 25, 학생 PLN 20 / 옥상 전망대 무료",
      address: "Plac Solidarności 1, 80-863 Gdańsk",
      website: "https://www.ecs.gda.pl",
    },
    highlights: [
      "7개 전시실로 구성된 상설 전시 - 연대 운동의 역사",
      "원본 조선소 정문과 21개 요구사항 기념비",
      "레흐 바웬사 관련 전시물",
      "옥상 전망대에서 조선소와 그단스크 시내 전경",
    ],
    nearbyAttractions: ["드우기 타르그", "제2차 세계대전 박물관", "그단스크 조선소"],
    photoTips: "건물 외관의 독특한 녹슨 철판 파사드가 인상적입니다. 옥상에서 조선소 크레인을 배경으로 촬영하세요.",
    tips: [
      "상설 전시는 약 2시간이 소요되며 영어 오디오 가이드를 꼭 이용하세요.",
      "옥상 전망대는 무료이니 날씨가 좋으면 올라가세요.",
      "인근 제2차 세계대전 박물관과 함께 방문하면 좋습니다.",
      "건물 앞 광장의 추모 기념비와 21개 요구사항 동판도 놓치지 마세요.",
    ],
  },

  // ===== MALBORK =====
  "poland/gdansk-north/malbork/malbork-castle": {
    heroGradient: "from-orange-600 to-red-800",
    description: "세계 최대의 벽돌 성으로 유네스코 세계유산. 13세기 튜턴 기사단의 본부로 건설되었으며, 21만㎡의 면적에 상성, 중성, 하성 세 구역으로 이루어진 중세 군사 건축의 걸작입니다.",
    history: "1274년 튜턴 기사단이 건설을 시작하여 14세기에 완성되었습니다. 기사단의 총장 거처이자 군사 요새로 사용되었으며, 이후 폴란드 왕의 거처로도 활용되었습니다. 제2차 세계대전으로 크게 손상된 후 복원되어 현재의 모습에 이르렀습니다.",
    visitInfo: {
      hours: "4~9월 09:00~20:00 / 10~3월 10:00~16:00",
      admission: "성인 PLN 50 (가이드 투어), 자유 관람 PLN 40",
      address: "Starościńska 1, 82-200 Malbork",
      website: "https://www.zamek.malbork.pl",
    },
    highlights: [
      "상성 - 기사단 수도회의 핵심으로 예배당과 회의실",
      "중성 - 대식당(Grand Refectory)과 호박 컬렉션",
      "하성 - 무기고와 생활 시설",
      "노가트 강 건너편에서 바라본 성의 전경",
    ],
    nearbyAttractions: ["노가트 강변 산책로", "그단스크 구시가지"],
    photoTips: "노가트 강 건너편 둑길에서 성 전체를 한 프레임에 담을 수 있습니다. 석양 무렵 붉은 벽돌이 황금빛으로 물드는 시간이 최고입니다.",
    tips: [
      "전체 관람에 3~4시간이 소요되니 오전에 도착하는 것을 추천합니다.",
      "영어 오디오 가이드를 이용하면 역사적 맥락을 더 깊이 이해할 수 있습니다.",
      "여름 야간 조명 쇼(Sound & Light Show)는 특별한 경험입니다.",
      "그단스크에서 기차로 45분이면 도착하며 당일치기로 충분합니다.",
      "성 내부에 카페와 레스토랑이 있으니 에너지 보충이 가능합니다.",
    ],
  },

  // ===== WROCLAW =====
  "poland/wroclaw-west/wroclaw/market-square": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "유럽에서 가장 큰 광장 중 하나(213m×178m)로, 화려한 색상의 바로크·고딕 건축물과 고딕 양식의 구시청사가 자리한 브로츠와프의 중심입니다. 카페, 레스토랑, 상점이 즐비하여 하루 종일 활기가 넘칩니다.",
    history: "13세기에 조성된 이래 브로츠와프의 상업과 사회 활동의 중심지 역할을 해왔습니다. 광장 중앙의 구시청사는 13~16세기에 걸쳐 건설되었으며 고딕·르네상스 양식이 혼합되어 있습니다.",
    visitInfo: {
      hours: "광장: 24시간 / 구시청사 박물관: 수~토 10:00~17:00, 일 10:00~18:00",
      admission: "광장 무료 / 구시청사 박물관 PLN 15",
      address: "Rynek, 50-106 Wrocław",
    },
    highlights: [
      "구시청사 - 고딕·르네상스 양식의 건축 걸작, 천문시계",
      "소금 광장 - 과거 소금 거래소, 현재 꽃 시장",
      "광장 주변 컬러풀한 파사드 건축물",
      "야스와 마우고시아 - 두 건물을 잇는 아치형 통로",
    ],
    nearbyAttractions: ["브로츠와프 난쟁이들", "성 엘리자베스 교회 전망탑", "브로츠와프 대학교", "한젤과 그레텔 건물"],
    photoTips: "구시청사를 중심으로 광장 전체를 담으려면 북서쪽 모서리가 좋습니다. 야간 조명도 매우 아름답습니다.",
    tips: [
      "광장 지하 레스토랑 '피브니차 스비드니츠카'는 1273년부터 영업 중인 유럽 최고 역사의 레스토랑입니다.",
      "성 엘리자베스 교회 탑(PLN 5)에 오르면 광장 전체를 내려다볼 수 있습니다.",
      "크리스마스 마켓 시즌(12월)에는 광장이 화려하게 변신합니다.",
      "광장 곳곳에 난쟁이 조각상이 숨어 있으니 발밑을 주의 깊게 살펴보세요.",
    ],
  },
  "poland/wroclaw-west/wroclaw/wroclaw-dwarfs": {
    heroGradient: "from-amber-500 to-emerald-700",
    description: "브로츠와프 도시 전체에 흩어진 350개 이상의 작은 청동 난쟁이 조각상. 각각 고유한 이름, 직업, 포즈를 가지고 있어 도시 탐험의 재미를 더하는 브로츠와프만의 독특한 공공 예술 프로젝트입니다.",
    history: "2001년 폴란드 대안 예술 운동 '오렌지 얼터너티브(Pomarańczowa Alternatywa)'를 기념하여 시작되었습니다. 1980년대 공산 정권에 대한 평화적 저항의 상징이었던 난쟁이 낙서에서 영감을 받아 청동 조각상으로 발전하였습니다.",
    visitInfo: {
      hours: "24시간 (야외 공공 예술)",
      admission: "무료",
      address: "브로츠와프 시내 전역 (시장 광장 주변 밀집)",
    },
    highlights: [
      "시장 광장 주변에 밀집된 20여 개의 대표 난쟁이들",
      "도살자 난쟁이, ATM 난쟁이, 수면 난쟁이 등 유머러스한 캐릭터",
      "각 난쟁이의 이름과 스토리가 있는 컬렉션",
      "도시 탐험과 결합한 보물찾기 같은 경험",
    ],
    nearbyAttractions: ["리넥 시장 광장", "브로츠와프 대학교", "오스트루프 툼스키", "백년홀"],
    photoTips: "난쟁이들은 20~30cm 크기이므로 낮은 앵글에서 촬영하면 배경과 함께 재미있는 사진을 얻을 수 있습니다.",
    tips: [
      "난쟁이 찾기 전용 앱(Wrocław Dwarfs)을 설치하면 GPS로 위치를 안내받을 수 있습니다.",
      "시장 광장 관광안내소에서 난쟁이 지도를 무료로 받을 수 있습니다.",
      "모든 난쟁이를 찾기는 불가능하니 대표적인 20~30개를 목표로 하세요.",
      "새로운 난쟁이가 계속 추가되고 있어 최신 정보를 확인하세요.",
    ],
  },
};
