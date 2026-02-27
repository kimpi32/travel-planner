import type { CityDetail, AttractionDetail } from "../city-details";

export const newZealandCityDetails: Record<string, CityDetail> = {
  // ===== NORTH ISLAND =====
  "new-zealand/north-island/auckland": {
    heroGradient: "from-sky-500 to-blue-800",
    description: "두 개의 바다(태즈먼해·태평양)와 수십 개의 항구, 50개 이상의 화산이 공존하는 '항해의 도시'. 뉴질랜드 인구의 1/3이 모여 사는 최대 도시이자 태평양 폴리네시아 문화의 중심지.",
    bestTime: "12월~2월 (여름) / 3~5월 (가을, 쾌청)",
    stayArea: "CBD / 폰슨비 / 타카푸나 / 데번포트",
    transport: "AT HOP 카드 (버스·기차·페리), AT Metro, 우버",
    districts: [
      { name: "CBD·와이테마타 항구", nameEn: "CBD / Waitematā Harbour", description: "스카이타워, 브리토마트, 페리 빌딩이 있는 오클랜드의 심장. 와이테마타 항구에 요트와 페리가 가득.", highlights: ["스카이타워", "퀸 스트리트", "페리 빌딩"] },
      { name: "폰슨비", nameEn: "Ponsonby", description: "트렌디한 카페, 레스토랑, 빈티지 상점이 밀집한 오클랜드의 힙스터 동네.", highlights: ["폰슨비 로드", "카페 문화", "독립 부티크"] },
      { name: "데번포트", nameEn: "Devonport", description: "페리로 12분이면 도착하는 빅토리아 시대 해안 마을. 노스 헤드 화산과 넬슨 스트리트 빅토리아 양식 건물.", highlights: ["노스 헤드", "빅토리아 여왕 시대 건물", "블록 하우스 베이"] },
      { name: "오클랜드 와이너리", nameEn: "Waiheke Island", description: "페리로 35분 거리의 와인 섬. 세계적 수준의 올리브 오일과 와인 생산지.", highlights: ["와이너리 투어", "올리브 오일", "해변"] },
    ],
    attractions: [
      { name: "스카이타워", nameEn: "Sky Tower", description: "높이 328m로 남반구에서 가장 높은 독립 구조물. 전망대에서 오클랜드 360도 파노라마와 뉴질랜드 최초 번지 점프(스카이점프)를 즐길 수 있음.", category: "전망대", tip: "스카이점프(192m 자유낙하, NZD$225)는 세계에서 가장 독특한 도심 번지 체험입니다." },
      { name: "와이헤케 섬", nameEn: "Waiheke Island", description: "오클랜드 최고의 당일치기 목적지. 페리 35분 거리에 세계 수준의 와이너리, 올리브 오일 농장, 아름다운 해변이 있음.", category: "섬", tip: "와이헤케 패스포트(페리+버스)로 섬 내 이동이 편리합니다." },
      { name: "오클랜드 박물관", nameEn: "Auckland War Memorial Museum", description: "마오리 문화 유물, 자연사, 전쟁 기념관이 통합된 뉴질랜드 최대 박물관. 마오리 공연(kapa haka)도 볼 수 있음.", category: "박물관", tip: "마오리 전통 공연은 오전 11시·12시 두 차례 진행됩니다. 꼭 관람하세요." },
      { name: "레인보우스 엔드", nameEn: "Rainbow's End", description: "뉴질랜드 최대 테마파크. 롤러코스터, 워터라이드, 패밀리 어트랙션.", category: "테마파크" },
    ],
    dayTrips: [
      { name: "로토루아", nameEn: "Rotorua", description: "지열 지대와 마오리 문화의 심장. 와이오타푸, 와카레와레와 마오리 마을이 있는 뉴질랜드 북섬의 필수 여행지.", travelTime: "버스·차로 약 3시간", gradient: "from-orange-400 to-red-700" },
      { name: "코로만델 반도", nameEn: "Coromandel Peninsula", description: "화이티앙가 비치, 핫워터 비치(모래밑 온천), 카테드랄 코브가 있는 에메랄드빛 해안.", travelTime: "차로 약 2시간", gradient: "from-teal-400 to-cyan-600" },
    ],
    localFood: [
      { name: "한지(Hangi)", description: "마오리 전통 땅속 돌솥 요리. 고기와 채소를 뜨거운 돌로 덮어 찐 진통 방식.", emoji: "🍖" },
      { name: "파블로바", description: "머랭 베이스에 생크림과 열대 과일을 얹은 뉴질랜드·호주 전통 디저트.", emoji: "🍰" },
      { name: "피시 앤 칩스", description: "뉴질랜드 남해의 싱싱한 타라키히, 스나퍼로 만든 피시 앤 칩스.", emoji: "🐟" },
    ],
    tips: [
      "AT HOP 카드로 버스·기차·페리를 통합 이용할 수 있습니다.",
      "와이헤케 섬은 당일치기 최고의 코스. 페리 왕복 약 NZD$45.",
      "뉴질랜드는 자외선이 매우 강합니다. SPF50+ 선크림 필수(오존층이 얇아 자외선 위험).",
      "오클랜드 날씨는 변덕스러우므로 방수 재킷을 항상 지참하세요.",
    ],
  },

  "new-zealand/north-island/rotorua": {
    heroGradient: "from-orange-400 to-red-700",
    description: "유황 냄새와 지열 온천, 간헐천이 공존하는 '지구의 창자'. 마오리 문화의 중심지로 와카레와레와 마오리 마을, 와이오타푸 지열 원더랜드, 테 푸이아 간헐천이 세계적 명소. 뉴질랜드 어드벤처 스포츠의 발상지 중 하나.",
    bestTime: "연중 (지열 명소는 계절 영향 적음) / 12~3월 여름이 야외 활동 최적",
    stayArea: "파우아무아 거리 인근 / 레이크 로토루아 호텔 지구",
    transport: "버스, 렌터카 (지열 명소 접근에 필수), 투어 셔틀",
    districts: [
      { name: "로토루아 시내", nameEn: "Rotorua CBD", description: "유황 냄새가 풍기는 로토루아 호수 변 도심. 쿠이라우 파크(도심 지열 공원)가 시내에 있음.", highlights: ["쿠이라우 파크", "로토루아 박물관", "이 호수 주변 산책로"] },
      { name: "와카레와레와 마오리 마을", nameEn: "Whakarewarewa", description: "실제 마오리 사람들이 살고 있는 지열 마을. 간헐천 포후투와 마오리 문화 공연.", highlights: ["포후투 간헐천", "마오리 전통 공연", "지열 쿠킹"] },
    ],
    attractions: [
      { name: "와이오타푸 지열 원더랜드", nameEn: "Wai-O-Tapu Thermal Wonderland", description: "레이디 녹스 간헐천, 샴페인 풀, 악마의 목욕탕 등 형형색색의 지열 지형이 만드는 환상적 색의 향연. 세계 최고의 지열 명소 중 하나.", category: "자연", tip: "레이디 녹스 간헐천은 매일 오전 10시 15분에 비누로 자극해 폭발시킵니다." },
      { name: "테 푸이아 (Te Puia)", nameEn: "Te Puia", description: "와카레와레와 지열 계곡의 포후투 간헐천과 마오리 아트 센터, 키위 조류 보호구역이 있는 문화·자연 복합 단지.", category: "문화", tip: "마오리 뼈 조각과 목공예 장인들의 작업 과정을 직접 볼 수 있습니다." },
      { name: "조빌 포레스트 파크", nameEn: "Whakarewarewa Forest Park", description: "자이언트 레드우드 숲속 산악 자전거 코스로 세계적으로 유명한 공원. 무료 입장.", category: "자연" },
    ],
    dayTrips: [
      { name: "호비튼 영화 세트장", nameEn: "Hobbiton Movie Set", description: "반지의 제왕·호빗 촬영지. 마타마타 인근 농장에 실제 건설된 홉빗 마을.", travelTime: "차로 약 1시간 (마타마타)", gradient: "from-green-500 to-emerald-700" },
      { name: "타우포", nameEn: "Taupo & Huka Falls", description: "세계 최대 번지 점프와 와이라케이 지열발전소, 후카 폭포가 있는 타우포 호수.", travelTime: "차로 약 1시간", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "항이(Hangi)", description: "마오리 전통 땅속 요리. 뜨거운 돌 위에 고기와 채소를 얹어 덮어 찌는 전통 방식.", emoji: "🍖" },
      { name: "파우아 쉘 초콜릿", description: "뉴질랜드 전복(파우아) 껍데기 모양의 기념품 초콜릿. 마오리 공예품과 함께 선물용.", emoji: "🍫" },
    ],
    tips: [
      "로토루아 시내에서 유황 냄새가 납니다. 처음에는 강하지만 곧 적응됩니다.",
      "와이오타푸는 로토루아에서 약 30km 거리로 렌터카가 필수입니다.",
      "마오리 문화 공연 + 항이 저녁 식사 패키지($80~120)가 로토루아 최고의 문화 체험.",
    ],
  },

  // ===== SOUTH ISLAND =====
  "new-zealand/south-island/queenstown": {
    heroGradient: "from-indigo-500 to-purple-800",
    description: "세계 어드벤처 스포츠의 수도. 번지 점프의 발상지이자 스카이다이빙, 제트보트, 파라글라이딩이 모두 가능한 곳. 와카티푸 호수와 리마커블스 산맥의 환상적인 경관 속에서 아드레날린을 분출합니다.",
    bestTime: "6~9월 (스키 시즌) / 12~3월 (어드벤처 스포츠 최성수)",
    stayArea: "퀸즈타운 CBD / 아로우타운 / 프랭크튼",
    transport: "오르버스(Orbus) 버스, 택시, 스카이라인 곤돌라, 렌터카",
    districts: [
      { name: "퀸즈타운 CBD", nameEn: "Queenstown CBD", description: "레이크프런트의 카페, 레스토랑, 투어 에이전시가 밀집한 퀸즈타운의 심장부.", highlights: ["리조트 타운 상가", "스카이라인 곤돌라 출발지", "스팀쉽 와카티푸"] },
      { name: "리마커블스", nameEn: "The Remarkables", description: "퀸즈타운을 배경으로 우뚝 솟은 2,100m급 산맥. 겨울 스키장, 여름 하이킹의 성지.", highlights: ["리마커블스 스키 필드", "여름 하이킹 코스", "전망대"] },
    ],
    attractions: [
      { name: "번지 점프 (카와라우 브리지)", nameEn: "Kawarau Bridge Bungee", description: "1988년 세계 최초로 상업 번지 점프가 시작된 성지. 47m 높이의 카와라우 강 위 다리에서 뛰어내리는 스릴.", category: "어드벤처", tip: "세계 번지 점프의 성지라는 상징성 때문에 퀸즈타운 방문자라면 꼭 한 번 시도해 보세요. NZD$175~" },
      { name: "밀포드 사운드 크루즈", nameEn: "Milford Sound Cruise", description: "루디야드 키플링이 '세계 8번째 불가사의'라고 극찬한 피오르드. 퀸즈타운에서 당일 투어 또는 테아나우에서 접근.", category: "자연", tip: "퀸즈타운 출발 당일 버스 투어는 총 12~13시간. 테아나우에서 1박 후 방문을 추천합니다." },
      { name: "스카이라인 곤돌라", nameEn: "Skyline Gondola", description: "퀸즈타운 시내에서 450m 위 밥스 피크까지 올라가는 곤돌라. 와카티푸 호수와 리마커블스의 파노라마.", category: "전망대", tip: "루지(중력 카트)를 타고 내려오는 것이 더 재밌습니다. 곤돌라+루지 패키지 추천." },
      { name: "아로우타운", nameEn: "Arrowtown", description: "1860년대 골드러시 시대 건물이 보존된 아기자기한 역사 마을. 가을 단풍으로 유명.", category: "역사", tip: "퀸즈타운에서 차로 20분. 레이크 헤이스(Lake Hayes)를 거쳐 드라이브로 이동하는 코스가 인기." },
    ],
    dayTrips: [
      { name: "밀포드 사운드", nameEn: "Milford Sound", description: "세계에서 가장 아름다운 피오르드로 꼽히는 뉴질랜드 최고의 자연 명소. 미트레 피크(1,692m)가 장관.", travelTime: "차·버스로 약 4시간 30분", gradient: "from-slate-500 to-blue-800" },
      { name: "와나카", nameEn: "Wanaka", description: "퀸즈타운보다 조용하고 아름다운 호수 마을. 와나카 나무(호수 속 나무) 사진이 인스타그램 명소.", travelTime: "차로 약 1시간", gradient: "from-cyan-400 to-teal-700" },
    ],
    localFood: [
      { name: "세릭스 번거", description: "퀸즈타운의 유명 버거 가게 '퍼그버거'의 블루 치즈 버거가 명물.", emoji: "🍔" },
      { name: "피노 누아르 와인", description: "센트럴 오타고의 피노 누아르는 세계 최고 수준. 퀸즈타운 와이너리에서 시음.", emoji: "🍷" },
      { name: "양고기 스테이크", description: "뉴질랜드 목초지에서 자란 양고기 스테이크는 세계 최고의 맛을 자랑합니다.", emoji: "🐑" },
    ],
    tips: [
      "번지 점프는 당일 예약도 가능하지만 성수기(12~2월)에는 사전 예약 권장.",
      "밀포드 사운드는 비 오는 날에도 폭포가 더 많아져 또 다른 아름다움이 있습니다.",
      "겨울(6~9월) 스키 시즌에는 코로넷 피크·리마커블스 2개 스키장이 모두 운영됩니다.",
      "렌터카는 왼쪽 통행이며 도로 곳곳에 양 떼가 나타날 수 있으니 주의하세요.",
    ],
  },
};

export const newZealandAttractionDetails: Record<string, AttractionDetail> = {
  // ===== AUCKLAND =====
  "new-zealand/north-island/auckland/sky-tower": {
    heroGradient: "from-sky-500 to-blue-800",
    description: "높이 328m로 남반구에서 가장 높은 독립 구조물. 오클랜드 CBD에 위치해 360도 뷰에서 도심, 두 개의 바다(태즈먼해·태평양), 화산 지대를 동시에 볼 수 있습니다. 스카이점프(자유낙하)와 스카이워크(외부 링 걷기)가 특징적인 체험.",
    history: "1994~1997년에 건설됐습니다. 설계 및 건설에 1,200명이 참여했으며 기초 공사에만 200개의 콘크리트 지지대가 사용됐습니다. 2.4m 두께의 콘크리트 구조로 리히터 8.0 규모의 지진과 강풍 200km/h를 견딜 수 있도록 설계됐습니다.",
    visitInfo: {
      hours: "08:30~22:30 (연중무휴)",
      admission: "성인 NZD$32 / 스카이점프 NZD$225 / 스카이워크 NZD$150",
      address: "Corner of Victoria and Federal Streets, Auckland CBD",
      website: "https://www.skycityauckland.co.nz/attractions/sky-tower",
    },
    highlights: [
      "186m 유리 바닥 전망대에서 발 아래 내려다보기",
      "스카이점프 - 192m 자유낙하 (번지 코드 연결)",
      "스카이워크 - 192m 높이 외부 링 위 산책",
      "야간 LED 조명 (행사별 색 변경)",
    ],
    nearbyAttractions: ["퀸 스트리트", "브리토마트", "오클랜드 하버 브리지", "페리 빌딩"],
    photoTips: "데번포트 쪽 페리에서 오클랜드 스카이라인과 스카이타워를 배경으로 촬영하는 것이 가장 넓은 뷰를 담을 수 있습니다.",
    tips: [
      "스카이점프는 무게 제한(45~130kg)이 있으며 우천·강풍 시 취소될 수 있습니다.",
      "스카이시티 카지노 고객은 할인 혜택이 있습니다.",
      "일몰 30분 전 방문이 가장 아름다운 빛을 볼 수 있는 타이밍입니다.",
    ],
  },

  // ===== ROTORUA =====
  "new-zealand/north-island/rotorua/wai-o-tapu": {
    heroGradient: "from-yellow-400 to-orange-600",
    description: "마오리어로 '신성한 물'을 의미하는 와이오타푸는 세계에서 가장 색채가 풍부한 지열 지역입니다. 황, 이산화규소, 산화철 등 다양한 광물이 만들어내는 빨강·노랑·초록·파랑의 풀이 마치 다른 행성에 온 것 같은 느낌을 줍니다.",
    history: "수십만 년에 걸쳐 지열 활동이 형성한 자연 현상입니다. 1991년 지역 보전 공원으로 지정됐습니다. 레이디 녹스 간헐천은 1901년 죄수들이 빨래를 하다가 비누를 집어넣었을 때 처음 폭발한 것이 발견됐습니다.",
    visitInfo: {
      hours: "08:30~17:00 (마지막 입장 16:15), 연중무휴",
      admission: "성인 NZD$32.50 / 어린이 NZD$13",
      address: "201 Waiotapu Loop Rd, Rotorua 3073",
      website: "https://www.waiotapu.co.nz",
    },
    highlights: [
      "샴페인 풀(Champagne Pool) - 73°C 온천수에 거품이 올라오는 오렌지·노랑 웅덩이",
      "레이디 녹스 간헐천 - 매일 10:15am 15~20m 분출",
      "악마의 목욕탕(Devil's Bath) - 형광 노랑-초록의 황산 웅덩이",
      "아티스트 팔레트 - 다양한 색상의 소규모 풀 전시",
    ],
    nearbyAttractions: ["테 와이레와 동굴", "와이오타푸 마을", "로토루아 시내"],
    photoTips: "샴페인 풀은 오전 햇살에 오렌지 색이 가장 선명합니다. 드론 촬영은 금지되어 있습니다. 넓각 렌즈로 샴페인 풀 전체를 담는 구도가 가장 인상적입니다.",
    tips: [
      "레이디 녹스 간헐천은 매일 오전 10:15에 시작합니다. 10분 전 도착 권장.",
      "황산·황 성분이 있어 수중에 들어가는 것은 절대 금지됩니다.",
      "걷기 편한 신발이 필수. 지면이 젖어있고 경사가 있는 구간이 있습니다.",
      "로토루아 시내에서 약 30km로 렌터카 또는 투어 셔틀로 접근하세요.",
    ],
  },

  // ===== QUEENSTOWN =====
  "new-zealand/south-island/queenstown/milford-sound": {
    heroGradient: "from-slate-500 to-blue-800",
    description: "루디야드 키플링이 '세계 8번째 불가사의'라 극찬한 피오르드랜드 국립공원의 핵심. 1,692m 미트레 피크를 비롯한 절벽에서 쏟아지는 폭포와 돌고래·물개·펭귄이 서식하는 세계 최고의 자연 경관입니다.",
    history: "약 1,200만 년에 걸쳐 빙하가 침식해 만든 피오르드 지형입니다. 마오리인들에게는 '테 아나우아우(반짝이는 물)'로 불렸으며 1820년 영국 포경선 선원 존 그로노가 유럽인으로서 처음 발견했습니다. 1990년 유네스코 세계유산 등재.",
    visitInfo: {
      hours: "보트 투어 연중 운영 (날씨에 따라 변동)",
      admission: "크루즈 성인 NZD$85~150 / 퀸즈타운 출발 버스+크루즈 투어 NZD$200~250",
      address: "Milford Sound, Fiordland National Park, Southland",
      website: "https://www.milford-sound.co.nz",
    },
    highlights: [
      "미트레 피크(Mitre Peak, 1,692m) - 피오르드랜드의 상징",
      "스털링 폭포(Stirling Falls, 151m)와 레이디 본험 폭포에 보트 접근",
      "보트에서 만나는 돌고래, 물개, 피오르드랜드 펭귄",
      "빗물로 만들어진 담수층이 떠있는 사운드의 색층 현상",
    ],
    nearbyAttractions: ["더불릿 사운드", "테아나우 반딧불이 동굴", "키-와이포이마 국립공원"],
    photoTips: "비 오는 날에는 절벽에서 폭포가 수백 개 생겨 오히려 더 극적인 사진을 찍을 수 있습니다. 맑은 날은 미트레 피크 반영 사진이 가능합니다. 폴라라이즈드 렌즈 필터 권장.",
    tips: [
      "비가 올수록 폭포가 많아져 오히려 더 장관입니다. 악천후를 두려워하지 마세요.",
      "퀸즈타운 출발 당일 투어는 왕복 12~13시간. 체력 소모가 크니 전날 충분한 휴식 필수.",
      "카약 투어는 좀 더 가까이에서 폭포와 절벽을 체험할 수 있는 방법입니다.",
      "테아나우에서 1박 후 방문하면 여유 있게 즐길 수 있습니다.",
    ],
  },
  "new-zealand/south-island/queenstown/kawarau-bungee": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "1988년 AJ 해킷과 헨리 반 애쉬가 세계 최초로 상업 번지 점프를 시작한 역사적 장소. 카와라우 강 47m 위의 빨간 철교에서 뛰어내리는 번지 점프의 성지. 전 세계 번지 점프 문화의 발상지.",
    history: "1988년 11월 12일 AJ 해킷과 헨리 반 애쉬가 세계 최초 상업 번지 점프를 이 다리에서 시작했습니다. 영감은 바누아투의 원주민 '사이드 다이빙' 의식에서 얻었으며, 이후 번지 점프가 전 세계로 퍼져나갔습니다.",
    visitInfo: {
      hours: "09:00~17:00 (연중무휴, 악천후 시 운영 조정)",
      admission: "번지 점프 NZD$175~275 / 번지 점프 관람(다리) 무료",
      address: "Kawarau Bridge, SH6, Queenstown 9371",
      website: "https://www.bungy.co.nz",
    },
    highlights: [
      "세계 번지 점프 발상지의 상징성",
      "47m 높이에서 카와라우 강으로 뛰어내리기",
      "수면 터치 옵션 (물에 손이 닿도록 조정 가능)",
      "번지 점프 뮤지엄과 역사 전시",
    ],
    nearbyAttractions: ["아로우타운", "퀸즈타운", "와나카", "크롬웰 과일 마을"],
    photoTips: "번지 점프 중 사진과 영상 촬영 서비스를 업체에서 제공합니다(NZD$30~50 추가). 관중석에서 무료 관람과 사진 촬영이 가능합니다.",
    tips: [
      "최소 체중 35kg, 최대 체중 제한이 있으므로 예약 전 확인하세요.",
      "심장 질환, 고혈압, 임산부는 참여가 불가능합니다.",
      "뛰어내리기 직전의 공포가 가장 어렵습니다. 주저하면 더 힘들어지므로 카운트다운에 맞춰 과감하게.",
      "점프 후 줄에 매달려 보트로 건져지는 방식이므로 옷이 젖을 수 있습니다.",
    ],
  },
  "new-zealand/south-island/queenstown/milford-track": {
    heroGradient: "from-teal-400 to-emerald-700",
    description: "세계에서 가장 아름다운 트레킹 코스 중 하나로 꼽히는 53.5km 4일 코스. 피오르드랜드 국립공원 클린턴 밸리에서 밀포드 사운드까지 이어지며 산악 고개, 빙하 계곡, 폭포가 연속으로 펼쳐집니다.",
    history: "1888년 퀸즐랜드 여성 퀸틴 맥키넌이 개척한 트레일입니다. 1908년 런던 스펙테이터 지는 이 트레일을 '세계에서 가장 좋은 트레킹 코스'라 소개했으며 이 수식어가 지금까지 이어지고 있습니다.",
    visitInfo: {
      hours: "10월 말~4월 말 운영 (DOC 가이드 시즌)",
      admission: "자유 트레킹(허트) NZD$70/박 (DOC 예약) / 가이드 투어 NZD$2,295~",
      address: "Fiordland National Park, Southland, New Zealand",
      website: "https://www.doc.govt.nz/milford-track",
    },
    highlights: [
      "맥키넌 고개(MacKinnon Pass, 1,073m)의 360도 파노라마",
      "서덜랜드 폭포(580m - 뉴질랜드 최고 폭포)",
      "거울처럼 맑은 클린턴 강 계곡",
      "밀포드 사운드 피오르드 도착의 감동",
    ],
    nearbyAttractions: ["밀포드 사운드", "테아나우 호수", "케플러 트랙"],
    photoTips: "맥키넌 고개에서 양방향(테아나우 쪽·밀포드 쪽) 계곡을 모두 담을 수 있습니다. 비 온 후에는 서덜랜드 폭포가 가장 웅장합니다.",
    tips: [
      "DOC 허트(산장) 예약은 최소 1~2년 전 필수(10월 말 예약 오픈과 동시에 매진).",
      "뉴질랜드 날씨는 예측 불가능합니다. 방수 장비와 여분 옷이 필수.",
      "체력이 충분하지 않으면 가이드 투어 참가를 권장합니다.",
      "10월 말~4월 말 외 시즌에는 산장이 운영되지 않아 텐트 캠핑이 필요합니다.",
    ],
  },
};
