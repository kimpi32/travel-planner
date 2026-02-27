import type { CityDetail, AttractionDetail } from "../city-details";

export const irelandCityDetails: Record<string, CityDetail> = {
  // ===== DUBLIN & EAST =====
  "ireland/dublin-east/dublin": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "아일랜드의 수도이자 최대 도시. 천년의 역사와 문학적 전통이 살아 숨 쉬는 도시로, 트리니티 칼리지, 기네스 스토어하우스, 템플 바 등 풍부한 볼거리와 활기찬 펍 문화가 매력입니다.",
    bestTime: "5~9월 (여름 평균 15~20°C, 일조량 최대)",
    stayArea: "템플 바 / 그래프턴 스트리트 주변",
    transport: "루아스(트램), 더블린 버스, DART (근교 열차)",
    districts: [
      { name: "템플 바", nameEn: "Temple Bar", description: "더블린의 문화·예술 중심지로 펍, 갤러리, 거리 공연이 가득한 지역.", highlights: ["템플 바 펍 거리", "아이리시 필름 센터", "미팅하우스 스퀘어", "갤러리 & 빈티지 숍"] },
      { name: "조지안 더블린", nameEn: "Georgian Dublin", description: "18세기 조지안 양식 건축물이 줄지어 선 우아한 지역.", highlights: ["메리온 스퀘어", "피츠윌리엄 스퀘어", "아일랜드 국립미술관", "오스카 와일드 동상"] },
      { name: "더블린 도클랜즈", nameEn: "Dublin Docklands", description: "리피 강변의 현대적 재개발 지역으로 IT기업과 컨벤션센터가 위치.", highlights: ["사무엘 베켓 다리", "CHQ 빌딩", "그랜드 캐널 독"] },
    ],
    attractions: [
      { name: "트리니티 칼리지 & 켈스의 서", nameEn: "Trinity College & Book of Kells", description: "1592년 설립된 아일랜드 최고 명문대학교와 9세기 켈트 필사본.", category: "대학·박물관", tip: "온라인 사전 예약 시 줄을 서지 않고 입장할 수 있습니다." },
      { name: "기네스 스토어하우스", nameEn: "Guinness Storehouse", description: "기네스 맥주의 역사를 체험하고 옥상 그래비티 바에서 더블린 전경을 감상.", category: "체험·박물관", tip: "마지막 층 그래비티 바에서 무료 파인트 한 잔이 포함됩니다." },
      { name: "템플 바 지구", nameEn: "Temple Bar District", description: "더블린의 심장부로 전통 아이리시 펍과 라이브 음악의 중심지.", category: "거리·문화" },
      { name: "더블린 성", nameEn: "Dublin Castle", description: "800년 역사의 더블린 성으로 현재 대통령 취임식 등 국가 행사에 사용.", category: "성·역사", tip: "가이드 투어를 통해 스테이트 아파트먼트를 관람하세요." },
      { name: "성 패트릭 대성당", nameEn: "St Patrick's Cathedral", description: "1191년에 세워진 아일랜드 최대의 성당으로 걸리버 여행기의 작가 스위프트가 사제장을 역임.", category: "성당" },
      { name: "킬메인햄 감옥", nameEn: "Kilmainham Gaol", description: "아일랜드 독립운동의 상징적 장소로 1916년 부활절 봉기 지도자들이 수감된 곳.", category: "역사", tip: "가이드 투어만 가능하며 온라인 예약 필수입니다." },
    ],
    dayTrips: [
      { name: "위클로 산악지대", nameEn: "Wicklow Mountains", description: "더블린의 정원이라 불리는 아름다운 산악 지대와 글렌달로흐 수도원.", travelTime: "버스 약 1.5시간", gradient: "from-green-400 to-emerald-700" },
      { name: "하우스", nameEn: "Howth", description: "신선한 해산물과 절벽 산책로가 유명한 더블린 근교 어촌 마을.", travelTime: "DART 약 30분", gradient: "from-blue-400 to-cyan-700" },
    ],
    localFood: [
      { name: "아이리시 스튜", description: "양고기와 감자, 당근을 넣고 오래 끓인 아일랜드 전통 스튜.", emoji: "🍲" },
      { name: "피시 앤 칩스", description: "바삭한 생선 튀김과 감자 칩, 펍의 대표 메뉴.", emoji: "🐟" },
      { name: "소다 브레드", description: "베이킹 소다로 발효시킨 아일랜드 전통 빵.", emoji: "🍞" },
    ],
    tips: [
      "리프 카드(Leap Card)를 구매하면 대중교통 요금을 20~30% 절약할 수 있습니다.",
      "펍에서 라이브 음악은 보통 저녁 9시 이후에 시작됩니다.",
      "더블린 패스로 주요 관광지 30곳 이상 무료 입장이 가능합니다.",
      "비가 자주 오므로 방수 재킷과 접이식 우산은 필수입니다.",
    ],
  },
  "ireland/dublin-east/wicklow": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "더블린의 정원이라 불리는 위클로는 아일랜드에서 가장 아름다운 산악 경관을 자랑합니다. 파워스코트 가든, 글렌달로흐 등 자연과 역사가 조화를 이루는 곳입니다.",
    bestTime: "5~9월 (하이킹 최적기)",
    stayArea: "위클로 타운 / 브레이",
    transport: "더블린에서 버스 또는 렌터카",
    districts: [
      { name: "위클로 타운", nameEn: "Wicklow Town", description: "위클로 카운티의 중심 마을로 해안 산책과 역사 유적이 있는 곳.", highlights: ["위클로 감옥", "해안 산책로", "블랙 캐슬"] },
    ],
    attractions: [
      { name: "파워스코트 가든", nameEn: "Powerscourt Gardens", description: "47에이커에 달하는 유럽 최고의 정원 중 하나.", category: "정원", tip: "파워스코트 폭포도 함께 방문하세요(별도 입장)." },
      { name: "위클로 웨이", nameEn: "Wicklow Way", description: "더블린에서 카를로까지 이어지는 127km의 장거리 하이킹 코스.", category: "하이킹" },
      { name: "브레이 해안", nameEn: "Bray Seafront", description: "DART로 쉽게 접근 가능한 해안 마을로 브레이 헤드 절벽 산책이 유명.", category: "해안" },
    ],
    dayTrips: [
      { name: "글렌달로흐", nameEn: "Glendalough", description: "6세기 수도원 유적과 두 개의 호수가 어우러진 신비로운 계곡.", travelTime: "차로 약 40분", gradient: "from-emerald-500 to-green-800" },
    ],
    localFood: [
      { name: "위클로 양고기", description: "위클로 산에서 자란 양으로 만든 구이와 스튜.", emoji: "🐑" },
      { name: "스콘 & 클로티드 크림", description: "갓 구운 스콘에 클로티드 크림과 잼을 곁들인 티타임.", emoji: "🫖" },
    ],
    tips: [
      "위클로 산악 지대는 날씨 변화가 심하니 레이어드 복장을 준비하세요.",
      "렌터카 없이는 이동이 제한적이므로 더블린 출발 당일 투어를 추천합니다.",
      "글렌달로흐는 주말에 매우 혼잡하므로 평일 방문이 좋습니다.",
    ],
  },
  "ireland/dublin-east/kilkenny": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "중세 유산이 잘 보존된 내륙 도시로 킬케니 성과 좁은 골목, 수제 맥주 양조장이 매력적인 곳입니다. 아일랜드의 중세 수도라 불립니다.",
    bestTime: "5~9월 / 8월 킬케니 아트 페스티벌",
    stayArea: "킬케니 성 주변 시내 중심",
    transport: "더블린에서 기차 약 1.5시간",
    districts: [
      { name: "중세 마일", nameEn: "Medieval Mile", description: "킬케니 성에서 성 캐니스 대성당까지 이어지는 중세 역사 거리.", highlights: ["킬케니 성", "성 캐니스 대성당", "루스 하우스", "스미딕스 익스피리언스"] },
    ],
    attractions: [
      { name: "킬케니 성", nameEn: "Kilkenny Castle", description: "12세기에 건설된 노르만 양식의 성으로 아름다운 정원과 갤러리를 보유.", category: "성", tip: "정원은 무료이며 성 내부는 가이드 투어로 관람합니다." },
      { name: "성 캐니스 대성당", nameEn: "St Canice's Cathedral", description: "13세기 고딕 양식 대성당으로 원형 탑에 올라 시내를 조망.", category: "성당" },
      { name: "스미딕스 익스피리언스", nameEn: "Smithwick's Experience", description: "킬케니 대표 에일 맥주 스미딕스의 역사를 배우는 체험 투어.", category: "체험" },
    ],
    dayTrips: [
      { name: "제롤드포인트 수도원", nameEn: "Jerpoint Abbey", description: "12세기 시토회 수도원 유적으로 아름다운 조각이 남아있는 곳.", travelTime: "차로 약 20분", gradient: "from-stone-400 to-amber-700" },
    ],
    localFood: [
      { name: "스미딕스 에일", description: "킬케니의 대표 레드 에일 맥주, 1710년부터 양조.", emoji: "🍺" },
      { name: "블라 캐슬 치즈", description: "킬케니 인근에서 생산되는 수제 아이리시 치즈.", emoji: "🧀" },
    ],
    tips: [
      "중세 마일 뮤지엄에서 킬케니의 역사를 한눈에 파악할 수 있습니다.",
      "8월 킬케니 아트 페스티벌 기간에는 숙소 예약이 빨리 마감됩니다.",
      "킬케니 디자인 센터에서 아일랜드 수공예품 쇼핑을 즐기세요.",
    ],
  },
  "ireland/dublin-east/glendalough": {
    heroGradient: "from-emerald-600 to-green-900",
    description: "두 개의 호수(글렌달로흐 = '두 호수의 계곡') 사이에 자리한 6세기 초기 기독교 수도원 유적지. 위클로 산맥의 깊은 빙하 계곡 속에서 신비로운 분위기를 자아냅니다.",
    bestTime: "5~9월 (하이킹과 관광 최적기)",
    stayArea: "라라 / 글렌달로흐 호텔",
    transport: "더블린에서 세인트 케빈스 버스 약 1.5시간",
    districts: [
      { name: "수도원 지구", nameEn: "Monastic City", description: "원형 탑과 켈트 십자가, 석조 교회가 모여있는 수도원 유적 중심지.", highlights: ["원형 탑", "성 케빈 교회", "켈트 십자가", "대성당 유적"] },
    ],
    attractions: [
      { name: "글렌달로흐 수도원 유적", nameEn: "Glendalough Monastic Site", description: "6세기 성 케빈이 설립한 초기 기독교 수도원으로 원형 탑과 켈트 십자가가 남아있습니다.", category: "유적", tip: "비지터 센터에서 영상을 먼저 보면 유적 이해에 도움이 됩니다." },
      { name: "어퍼 레이크", nameEn: "Upper Lake", description: "빙하가 만든 깊은 호수로 주변 하이킹 코스가 아름답습니다.", category: "자연" },
      { name: "스피닉 산책로", nameEn: "Spinc Walk", description: "글렌달로흐를 위에서 내려다보는 9km 원형 하이킹 코스.", category: "하이킹" },
    ],
    dayTrips: [
      { name: "위클로 타운", nameEn: "Wicklow Town", description: "해안가의 작은 마을로 위클로 감옥 박물관이 유명.", travelTime: "차로 약 30분", gradient: "from-blue-400 to-green-700" },
    ],
    localFood: [
      { name: "브라운 브레드", description: "통밀로 만든 아일랜드 전통 갈색 빵, 수프와 함께.", emoji: "🍞" },
      { name: "아이리시 스튜", description: "양고기와 뿌리채소로 만든 따뜻한 전통 스튜.", emoji: "🍲" },
    ],
    tips: [
      "주차장이 빨리 차므로 오전 일찍 도착하는 것을 권장합니다.",
      "비지터 센터는 10월~3월에는 오후 5시에 닫으니 시간을 확인하세요.",
      "하이킹 시 방수 등산화와 여분의 옷을 꼭 준비하세요.",
    ],
  },

  // ===== WEST & ATLANTIC =====
  "ireland/west-atlantic/galway": {
    heroGradient: "from-violet-500 to-indigo-800",
    description: "아일랜드 서부의 문화 수도로 보헤미안 분위기, 전통 음악, 축제의 도시입니다. 컬러풀한 거리와 활기찬 펍, 코네마라와 아란 제도로의 관문입니다.",
    bestTime: "5~9월 / 7월 골웨이 아트 페스티벌",
    stayArea: "라틴 쿼터 / 에어 스퀘어 주변",
    transport: "더블린에서 기차 약 2.5시간, 시내는 도보",
    districts: [
      { name: "라틴 쿼터", nameEn: "Latin Quarter", description: "골웨이의 심장부로 컬러풀한 상점, 펍, 레스토랑이 밀집한 보행자 거리.", highlights: ["퀘이 스트리트", "하이 스트리트", "키르완스 레인", "찰리 번 펍"] },
      { name: "솔트힐", nameEn: "Salthill", description: "골웨이만을 따라 이어지는 해안 산책로와 해수욕장.", highlights: ["솔트힐 프롬나드", "블랙록 다이빙 타워", "아쿠아리움"] },
    ],
    attractions: [
      { name: "라틴 쿼터", nameEn: "Latin Quarter", description: "중세 거리를 따라 펍, 갤러리, 버스커가 가득한 골웨이의 핵심 지역.", category: "거리·문화", tip: "주말 저녁에는 거리 공연이 특히 활발합니다." },
      { name: "에어 스퀘어", nameEn: "Eyre Square", description: "골웨이 중심의 공원 광장으로 존 F. 케네디 기념 공원이라고도 불립니다.", category: "광장" },
      { name: "스페인 아치", nameEn: "Spanish Arch", description: "16세기 스페인과의 교역 시절 항구 방어용으로 건설된 아치.", category: "역사" },
      { name: "클라다 링 박물관", nameEn: "Claddagh Ring Museum", description: "아일랜드의 사랑과 우정의 상징 클라다 링의 역사를 전시.", category: "박물관" },
    ],
    dayTrips: [
      { name: "아란 제도", nameEn: "Aran Islands", description: "게일어가 살아있는 전통 섬마을로 선사시대 석조 요새가 유명.", travelTime: "페리 약 40분~1.5시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "코네마라", nameEn: "Connemara", description: "황야와 호수, 산이 어우러진 아일랜드 서부의 야생 자연.", travelTime: "버스 약 1.5시간", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "골웨이 오이스터", description: "골웨이만의 신선한 굴, 기네스와 함께 즐기는 별미.", emoji: "🦪" },
      { name: "시푸드 차우더", description: "크림 베이스의 진한 해산물 수프, 소다 브레드와 함께.", emoji: "🍲" },
      { name: "박싱", description: "감자, 양배추, 버터로 만든 아일랜드 전통 으깬 감자 요리.", emoji: "🥔" },
    ],
    tips: [
      "골웨이 오이스터 페스티벌은 매년 9월 말에 열립니다.",
      "아란 제도 페리는 성수기에 조기 매진되니 미리 예약하세요.",
      "라틴 쿼터의 펍에서 매일 밤 라이브 아이리시 음악을 즐길 수 있습니다.",
      "솔트힐 산책로를 걸으면서 '킥 더 월' 전통에 참여해보세요.",
    ],
  },
  "ireland/west-atlantic/cliffs-of-moher": {
    heroGradient: "from-slate-600 to-blue-900",
    description: "대서양 위로 214m 높이로 솟아오른 아일랜드의 상징적 절벽. 약 8km에 걸쳐 이어지는 장엄한 해안 절벽으로 연간 150만 명이 방문하는 아일랜드 최고의 자연 명소입니다.",
    bestTime: "5~9월 (맑은 날 아란 제도 조망 가능)",
    stayArea: "두린(Doolin) / 리스칸노르",
    transport: "골웨이에서 버스 약 2시간, 렌터카 추천",
    districts: [
      { name: "클리프 워크", nameEn: "Cliff Walk", description: "절벽을 따라 이어지는 해안 산책로로 오브라이언 타워를 중심으로 남북으로 펼쳐짐.", highlights: ["오브라이언 타워", "비지터 센터", "남쪽 절벽 트레일", "해그스 헤드"] },
    ],
    attractions: [
      { name: "모허 절벽 비지터 센터", nameEn: "Cliffs of Moher Visitor Centre", description: "절벽의 지질학, 생태계를 소개하는 전시관과 절벽 산책로 출발점.", category: "관광·자연", tip: "오후보다 오전에 방문하면 역광 없이 사진을 찍기 좋습니다." },
      { name: "오브라이언 타워", nameEn: "O'Brien's Tower", description: "1835년에 세워진 전망탑으로 절벽의 가장 높은 지점에서 360도 파노라마 제공.", category: "전망대" },
      { name: "해그스 헤드", nameEn: "Hag's Head", description: "절벽 남쪽 끝 지점으로 인파 없이 절벽을 감상할 수 있는 숨은 명소.", category: "자연" },
    ],
    dayTrips: [
      { name: "두린", nameEn: "Doolin", description: "전통 음악의 성지로 불리는 작은 마을, 아란 제도 페리 출발점.", travelTime: "차로 약 10분", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "버렌 스모크 연어", description: "버렌 지역에서 전통 방식으로 훈제한 아틀란틱 연어.", emoji: "🐟" },
      { name: "아이리시 크랩 샌드위치", description: "신선한 게살을 넣은 브라운 브레드 샌드위치.", emoji: "🦀" },
    ],
    tips: [
      "바람이 매우 강하므로 모자와 가벼운 소지품에 주의하세요.",
      "두린에서 절벽까지 해안 트레일로 걸어갈 수 있습니다 (약 2시간).",
      "성수기(6~8월)에는 오전 9시 이전이나 오후 5시 이후 방문이 한적합니다.",
    ],
  },
  "ireland/west-atlantic/aran-islands": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "골웨이만 입구에 위치한 세 개의 섬(이니시모어, 이니시만, 이니시어)으로 게일어가 일상 언어인 전통 문화의 보고. 선사시대 석조 요새 둔 앵거스가 대표 명소입니다.",
    bestTime: "5~9월 (페리 운항 빈번, 날씨 온화)",
    stayArea: "이니시모어 킬로난 마을",
    transport: "골웨이/두린에서 페리 (아란 아일랜드 페리즈)",
    districts: [
      { name: "이니시모어", nameEn: "Inis Mór", description: "아란 제도에서 가장 큰 섬으로 둔 앵거스 요새와 전통 마을이 있는 곳.", highlights: ["둔 앵거스", "킬로난 항구", "성 엔다 수도원 유적", "폴라 피어"] },
    ],
    attractions: [
      { name: "둔 앵거스", nameEn: "Dún Aonghasa", description: "90m 절벽 위에 세워진 청동기 시대 반원형 석조 요새.", category: "유적", tip: "절벽 끝에 안전 난간이 없으니 극도로 조심하세요." },
      { name: "7개의 교회", nameEn: "Na Seacht dTeampaill", description: "중세 수도원과 교회 유적이 모여있는 고고학 유적지.", category: "유적" },
      { name: "웜홀", nameEn: "Poll na bPéist", description: "자연이 만든 완벽한 직사각형 바닷물 웅덩이, 클리프 다이빙 명소.", category: "자연" },
    ],
    dayTrips: [
      { name: "이니시만", nameEn: "Inishmaan", description: "세 섬 중 가장 전통적이고 조용한 섬으로 작가 J.M. 싱의 영감의 원천.", travelTime: "페리 약 20분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "아란 게살 요리", description: "섬 주변 바다에서 잡은 신선한 게로 만든 요리.", emoji: "🦀" },
      { name: "아란 고트 치즈", description: "이니시모어에서 수제 생산하는 염소 치즈.", emoji: "🧀" },
    ],
    tips: [
      "자전거 대여가 섬 관광의 가장 좋은 방법입니다 (항구에서 대여 가능).",
      "날씨에 따라 페리가 결항될 수 있으니 여유 있는 일정을 잡으세요.",
      "아란 스웨터(니트)는 섬에서 직접 사면 정통 제품을 구할 수 있습니다.",
    ],
  },
  "ireland/west-atlantic/connemara": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "아일랜드 서부의 야생 자연이 펼쳐지는 광활한 지역. 황무지, 산, 호수, 해안이 어우러진 극적인 풍경과 게일어 문화가 살아있는 곳입니다.",
    bestTime: "5~9월 (8월 코네마라 포니 쇼)",
    stayArea: "클리프든 타운",
    transport: "골웨이에서 버스 약 1.5시간, 렌터카 강력 추천",
    districts: [
      { name: "클리프든", nameEn: "Clifden", description: "코네마라의 비공식 수도로 컬러풀한 상점과 레스토랑이 있는 마을.", highlights: ["스카이 로드", "클리프든 성 유적", "마켓 스퀘어"] },
    ],
    attractions: [
      { name: "카일모어 수도원", nameEn: "Kylemore Abbey", description: "호수에 비친 네오고딕 양식의 수도원으로 아일랜드에서 가장 사진이 많이 찍히는 건물.", category: "수도원", tip: "빅토리안 월드 가든도 꼭 함께 관람하세요." },
      { name: "코네마라 국립공원", nameEn: "Connemara National Park", description: "다이아몬드 힐 하이킹 코스로 유명한 2,000헥타르의 국립공원.", category: "국립공원" },
      { name: "스카이 로드", nameEn: "Sky Road", description: "클리프든 주변의 드라이브 코스로 대서양의 환상적인 해안 경치.", category: "드라이브" },
    ],
    dayTrips: [
      { name: "골웨이", nameEn: "Galway", description: "코네마라 여행의 거점 도시로 활기찬 펍과 음식이 매력.", travelTime: "차로 약 1.5시간", gradient: "from-violet-400 to-indigo-700" },
    ],
    localFood: [
      { name: "코네마라 양고기", description: "황무지에서 자란 코네마라 양의 고기, 아일랜드 최고로 꼽힘.", emoji: "🐑" },
      { name: "크림 홍합", description: "와인과 크림 소스에 조린 신선한 홍합 요리.", emoji: "🦪" },
    ],
    tips: [
      "코네마라는 렌터카 없이는 관광이 매우 어렵습니다. 골웨이에서 당일 투어를 이용하세요.",
      "스카이 로드는 약 12km의 원형 코스로 자전거나 차로 1시간이면 충분합니다.",
      "기상 변화가 극심하므로 하루에 사계절을 경험할 수 있습니다.",
    ],
  },

  // ===== SOUTH =====
  "ireland/south/cork": {
    heroGradient: "from-red-500 to-rose-800",
    description: "아일랜드 제2의 도시로 '진짜 아일랜드의 수도'라 자부하는 미식의 도시. 잉글리시 마켓, 크래프트 맥주, 활기찬 펍 문화가 매력이며 남부 아일랜드 여행의 거점입니다.",
    bestTime: "5~9월 / 10월 코크 재즈 페스티벌",
    stayArea: "시내 중심부 세인트 패트릭 스트리트 주변",
    transport: "더블린에서 기차 약 2.5시간, 시내 버스",
    districts: [
      { name: "시내 중심", nameEn: "City Centre", description: "리 강 사이의 섬 위에 형성된 코크의 핵심 상업·문화 지역.", highlights: ["세인트 패트릭 스트리트", "잉글리시 마켓", "성 핀 바르 대성당", "코크 시청"] },
      { name: "샨돈", nameEn: "Shandon", description: "코크 북쪽 언덕 위의 역사 지구로 샨돈 종탑이 상징.", highlights: ["샨돈 종탑", "코크 버터 박물관", "퍼프스 골목"] },
    ],
    attractions: [
      { name: "잉글리시 마켓", nameEn: "English Market", description: "1788년 개장한 역사적 실내 시장으로 코크 미식 문화의 중심.", category: "시장", tip: "2층 파머스턴 카페에서 시장을 내려다보며 식사할 수 있습니다." },
      { name: "성 핀 바르 대성당", nameEn: "St Fin Barre's Cathedral", description: "코크의 수호성인 핀 바르에게 헌정된 프랑스 고딕 부흥 양식의 대성당.", category: "성당" },
      { name: "샨돈 종탑", nameEn: "Shandon Bells Tower", description: "코크의 상징으로 직접 종을 울려볼 수 있는 18세기 교회 종탑.", category: "랜드마크", tip: "종을 직접 쳐볼 수 있습니다!" },
      { name: "크로포드 아트 갤러리", nameEn: "Crawford Art Gallery", description: "무료 입장 가능한 코크의 대표 미술관으로 아일랜드 현대미술 소장.", category: "미술관" },
    ],
    dayTrips: [
      { name: "코브", nameEn: "Cobh", description: "타이타닉호의 마지막 기항지로 컬러풀한 항구 마을.", travelTime: "기차 약 25분", gradient: "from-blue-400 to-indigo-600" },
      { name: "블라니", nameEn: "Blarney", description: "블라니 성과 유명한 블라니 스톤이 있는 마을.", travelTime: "버스 약 30분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "블랙 푸딩 & 화이트 푸딩", description: "아일랜드식 전통 소시지로 풀 아이리시 브렉퍼스트의 핵심.", emoji: "🍳" },
      { name: "드리셴", description: "돼지 피와 오트밀로 만든 코크 전통 혈순대.", emoji: "🥘" },
      { name: "버터 밀크 팬케이크", description: "코크 버터 문화에서 비롯된 버터밀크 팬케이크.", emoji: "🥞" },
    ],
    tips: [
      "잉글리시 마켓은 일요일에 문을 닫으니 월~토에 방문하세요.",
      "코크 재즈 페스티벌(10월)은 숙소가 빨리 차므로 일찍 예약하세요.",
      "리 강을 따라 걷는 것만으로도 코크의 매력을 느낄 수 있습니다.",
      "코크에서 코브와 블라니를 당일치기로 모두 방문할 수 있습니다.",
    ],
  },
  "ireland/south/killarney": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "킬라니 국립공원의 관문 도시로 호수와 산, 고성이 어우러진 아일랜드 남서부의 관광 중심지. 링 오브 케리 순환 코스의 출발점이기도 합니다.",
    bestTime: "5~9월 (야외 활동 최적기)",
    stayArea: "킬라니 타운 중심부",
    transport: "코크에서 기차 약 1.5시간, 더블린에서 기차 약 3.5시간",
    districts: [
      { name: "킬라니 타운", nameEn: "Killarney Town", description: "컬러풀한 상점과 펍이 모여있는 활기찬 관광 마을.", highlights: ["메인 스트리트", "킬라니 대성당", "전통 펍 거리"] },
      { name: "머크로스", nameEn: "Muckross", description: "킬라니 국립공원 내의 역사 유산 지역으로 머크로스 하우스와 정원이 위치.", highlights: ["머크로스 하우스", "머크로스 수도원", "토크 폭포"] },
    ],
    attractions: [
      { name: "킬라니 국립공원", nameEn: "Killarney National Park", description: "102km²의 광대한 국립공원으로 세 개의 호수, 오크숲, 산이 어우러진 곳.", category: "국립공원", tip: "징거 카(마차)를 타고 갭 오브 던로를 통과하는 코스를 추천합니다." },
      { name: "로스 성", nameEn: "Ross Castle", description: "15세기 로스 호수변에 세워진 타워 하우스로 보트 투어 출발점.", category: "성", tip: "호수 보트 투어와 결합하면 성과 이니스폴렌 섬을 함께 즐길 수 있습니다." },
      { name: "머크로스 하우스", nameEn: "Muckross House", description: "빅토리아 양식의 저택과 아름다운 정원으로 1861년 빅토리아 여왕이 방문한 곳.", category: "저택" },
      { name: "토크 폭포", nameEn: "Torc Waterfall", description: "킬라니 국립공원 내 18m 높이의 아름다운 폭포.", category: "자연" },
    ],
    dayTrips: [
      { name: "링 오브 케리", nameEn: "Ring of Kerry", description: "이베라 반도를 일주하는 179km의 아일랜드 대표 드라이브 코스.", travelTime: "1일 순환 코스", gradient: "from-teal-400 to-green-700" },
      { name: "딩글 반도", nameEn: "Dingle Peninsula", description: "슬리 헤드 드라이브와 전통 어촌 마을 딩글이 있는 반도.", travelTime: "차로 약 1.5시간", gradient: "from-blue-400 to-purple-700" },
    ],
    localFood: [
      { name: "케리 램", description: "케리 지역 산악에서 방목한 양고기 요리.", emoji: "🐑" },
      { name: "아이리시 커피", description: "위스키, 커피, 생크림이 어우러진 아일랜드 전통 음료.", emoji: "☕" },
      { name: "씨푸드 파이", description: "크림 소스에 연어, 새우, 대구를 넣은 파이.", emoji: "🥧" },
    ],
    tips: [
      "징거 카(말이 끄는 마차) 가격은 사전에 흥정하세요.",
      "킬라니 국립공원은 자전거로 둘러보는 것이 가장 좋습니다.",
      "링 오브 케리는 반시계 방향으로 도는 것이 관광 버스와 겹치지 않습니다.",
      "날씨가 변덕스러우므로 야외 활동 시 레인 기어를 반드시 준비하세요.",
    ],
  },
  "ireland/south/ring-of-kerry": {
    heroGradient: "from-teal-500 to-green-800",
    description: "이베라 반도를 일주하는 179km의 순환 도로로 아일랜드에서 가장 유명한 드라이브 코스. 대서양 해안, 산악, 호수, 전통 마을이 번갈아 펼쳐지는 환상적인 풍경입니다.",
    bestTime: "5~9월 (도로 상태 양호, 일조량 충분)",
    stayArea: "킬라니 / 케니어 / 스님",
    transport: "킬라니에서 출발, 렌터카 또는 투어 버스",
    districts: [
      { name: "이베라 반도", nameEn: "Iveragh Peninsula", description: "링 오브 케리가 둘러싸는 반도로 해안 마을과 산악 경관이 교차.", highlights: ["케니어", "스님", "와터빌", "발린스켈릭스 비치"] },
    ],
    attractions: [
      { name: "스켈리그 마이클", nameEn: "Skellig Michael", description: "대서양 위 218m 절벽의 6세기 수도원 유적, 유네스코 세계유산이자 스타워즈 촬영지.", category: "세계유산", tip: "보트 투어는 5~10월에만 운행하며 날씨에 따라 결항됩니다. 최소 2~3주 전 예약 필수." },
      { name: "레이디스 뷰", nameEn: "Ladies' View", description: "킬라니 호수들을 한눈에 내려다보는 전망 포인트로 빅토리아 여왕 시녀들이 감탄한 곳.", category: "전망대" },
      { name: "데리넌 자연보호구역", nameEn: "Derrynane", description: "아일랜드 해방가 다니엘 오코넬의 저택과 아름다운 해변이 있는 곳.", category: "역사·자연" },
    ],
    dayTrips: [
      { name: "스켈리그 마이클", nameEn: "Skellig Michael", description: "거친 대서양 위의 유네스코 세계유산 섬 수도원.", travelTime: "포트마기에서 보트 약 50분", gradient: "from-gray-500 to-blue-800" },
    ],
    localFood: [
      { name: "케리 씨푸드", description: "대서양에서 잡은 신선한 해산물 플래터.", emoji: "🦞" },
      { name: "아이리시 브라운 브레드", description: "통밀과 버터밀크로 만든 전통 갈색 빵.", emoji: "🍞" },
    ],
    tips: [
      "관광버스는 반시계 방향으로 운행하므로 시계 방향 드라이브가 덜 혼잡합니다.",
      "전체 코스를 여유 있게 즐기려면 1박 2일이 이상적입니다.",
      "스켈리그 마이클은 성수기에 예약이 매우 어려우니 일찍 확인하세요.",
      "도로가 좁은 구간이 많으므로 대형 차량은 피하세요.",
    ],
  },
  "ireland/south/blarney": {
    heroGradient: "from-green-500 to-lime-800",
    description: "블라니 성과 전설의 블라니 스톤으로 유명한 코크 근교의 작은 마을. 스톤에 키스하면 달변의 재능을 얻는다는 전설이 전 세계 관광객을 끌어들입니다.",
    bestTime: "4~10월 (정원이 특히 아름다운 시기)",
    stayArea: "코크 시내 (블라니는 코크에서 당일치기)",
    transport: "코크에서 버스 약 30분",
    districts: [
      { name: "블라니 빌리지", nameEn: "Blarney Village", description: "성 주변에 형성된 작은 마을로 기념품 가게와 울렌밀이 있는 곳.", highlights: ["블라니 성", "블라니 울렌밀스", "블라니 마을 광장"] },
    ],
    attractions: [
      { name: "블라니 성", nameEn: "Blarney Castle", description: "1446년 건설된 중세 성으로 꼭대기의 블라니 스톤에 키스하면 달변을 얻는다는 전설이 유명.", category: "성", tip: "개장 직후에 방문하면 블라니 스톤 대기 시간을 줄일 수 있습니다." },
      { name: "록 클로스", nameEn: "Rock Close", description: "블라니 성 정원 내의 신비로운 드루이드 유적 정원.", category: "정원" },
      { name: "블라니 울렌밀스", nameEn: "Blarney Woollen Mills", description: "아일랜드 전통 의류와 수공예품을 판매하는 대형 쇼핑몰.", category: "쇼핑" },
    ],
    dayTrips: [
      { name: "코크", nameEn: "Cork", description: "잉글리시 마켓과 다양한 미식 문화의 아일랜드 제2 도시.", travelTime: "버스 약 30분", gradient: "from-red-400 to-rose-700" },
    ],
    localFood: [
      { name: "아이리시 스튜", description: "양고기와 감자로 만든 푸짐한 전통 스튜.", emoji: "🍲" },
      { name: "스콘", description: "갓 구운 따뜻한 스콘에 버터와 잼을 곁들여.", emoji: "🧁" },
    ],
    tips: [
      "블라니 스톤 키스를 위해 꼭대기까지 좁은 계단을 올라야 합니다.",
      "정원이 매우 넓으므로 최소 2~3시간을 계획하세요.",
      "독가든(Poison Garden)에서 독성 식물들을 볼 수 있는 독특한 경험을 즐기세요.",
    ],
  },
  "ireland/south/cobh": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "코크 항구의 컬러풀한 해안 마을로 타이타닉호가 마지막으로 정박한 항구. 화려한 색상의 테라스 하우스와 성 콜먼 대성당이 인상적인 그림 같은 마을입니다.",
    bestTime: "5~9월 (항구 산책 최적기)",
    stayArea: "코브 타운 센터",
    transport: "코크에서 기차 약 25분",
    districts: [
      { name: "코브 워터프론트", nameEn: "Cobh Waterfront", description: "컬러풀한 테라스 하우스가 늘어선 항구변 지역.", highlights: ["덱 오브 카드 하우스", "타이타닉 경험관", "코브 항구", "성 콜먼 대성당"] },
    ],
    attractions: [
      { name: "타이타닉 경험관", nameEn: "Titanic Experience Cobh", description: "타이타닉호의 마지막 기항지에서 당시 승객들의 이야기를 재현한 체험관.", category: "박물관" },
      { name: "성 콜먼 대성당", nameEn: "St Colman's Cathedral", description: "코브를 상징하는 네오고딕 양식의 대성당으로 47개의 카리용 종이 유명.", category: "성당" },
      { name: "덱 오브 카드", nameEn: "Deck of Cards Houses", description: "언덕 위로 줄지어 선 컬러풀한 테라스 하우스, 코브의 대표 포토 스팟.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "스파이크 아일랜드", nameEn: "Spike Island", description: "코크 항구의 섬으로 1,300년의 역사를 가진 요새 섬.", travelTime: "페리 약 15분", gradient: "from-slate-400 to-gray-700" },
    ],
    localFood: [
      { name: "코브 씨푸드 차우더", description: "신선한 해산물로 만든 크리미한 아이리시 차우더.", emoji: "🍲" },
      { name: "피시 앤 칩스", description: "항구에서 갓 잡은 생선으로 만든 바삭한 피시 앤 칩스.", emoji: "🐟" },
    ],
    tips: [
      "타이타닉 트레일 워킹 투어로 타이타닉 관련 장소를 모두 둘러볼 수 있습니다.",
      "덱 오브 카드 사진은 웨스트 뷰 언덕 아래에서 찍는 것이 가장 좋습니다.",
      "코크에서 기차로 25분이면 올 수 있어 당일치기에 완벽합니다.",
    ],
  },

  // ===== NORTH & NORTHERN IRELAND =====
  "ireland/north-ni/belfast": {
    heroGradient: "from-orange-500 to-red-800",
    description: "북아일랜드의 수도로 타이타닉호 건조지이자 격동의 역사를 간직한 도시. 최근 미식과 문화 씬이 급성장하며 유럽의 떠오르는 여행지로 주목받고 있습니다.",
    bestTime: "5~9월 (일조량 최대, 축제 시즌)",
    stayArea: "카테드럴 쿼터 / 시청 주변",
    transport: "더블린에서 기차 약 2시간, 시내 메트로 버스",
    districts: [
      { name: "카테드럴 쿼터", nameEn: "Cathedral Quarter", description: "벨파스트의 문화 중심지로 펍, 갤러리, 거리 예술이 가득한 곳.", highlights: ["커머셜 코트", "듀크 오브 요크 펍", "세인트 앤 대성당", "MAC 아트센터"] },
      { name: "타이타닉 쿼터", nameEn: "Titanic Quarter", description: "타이타닉호가 건조된 도크 지역의 현대적 재개발 지구.", highlights: ["타이타닉 벨파스트", "SS 노매딕", "타이타닉 도크", "하플랜드 & 울프 크레인"] },
      { name: "퀸스 쿼터", nameEn: "Queen's Quarter", description: "퀸스 대학교 주변의 학생 문화 지역으로 얼스터 박물관이 위치.", highlights: ["퀸스 대학교", "얼스터 박물관", "보타닉 가든"] },
    ],
    attractions: [
      { name: "타이타닉 벨파스트", nameEn: "Titanic Belfast", description: "세계 최대의 타이타닉 전시관으로 건조부터 침몰까지의 이야기를 체험.", category: "박물관", tip: "최소 2~3시간을 할애하세요. 콤보 티켓으로 SS 노매딕도 함께 관람 가능." },
      { name: "피스 월 & 블랙 택시 투어", nameEn: "Peace Walls & Black Taxi Tour", description: "벨파스트 분쟁의 역사를 생생하게 전하는 평화의 벽과 벽화 투어.", category: "역사·투어", tip: "블랙 택시 투어 기사가 양쪽 커뮤니티의 관점을 모두 설명해줍니다." },
      { name: "세인트 조지 마켓", nameEn: "St George's Market", description: "1890년대에 지어진 빅토리아 양식 실내 시장으로 주말 마켓이 특히 인기.", category: "시장", tip: "토요일 아침이 가장 활기차며 라이브 음악도 즐길 수 있습니다." },
      { name: "벨파스트 시청", nameEn: "Belfast City Hall", description: "1906년 완공된 바로크 부흥 양식 시청으로 무료 가이드 투어 제공.", category: "건축" },
      { name: "크럼린 로드 감옥", nameEn: "Crumlin Road Gaol", description: "150년간 운영된 빅토리아 시대 감옥으로 역사와 유령 투어가 유명.", category: "역사" },
    ],
    dayTrips: [
      { name: "자이언츠 코즈웨이", nameEn: "Giant's Causeway", description: "4만 개의 현무암 기둥으로 이루어진 유네스코 세계유산.", travelTime: "차로 약 1.5시간", gradient: "from-gray-500 to-slate-800" },
      { name: "다크 헤지스", nameEn: "Dark Hedges", description: "왕좌의 게임 킹스로드 촬영지로 유명한 너도밤나무 터널.", travelTime: "차로 약 1시간", gradient: "from-emerald-600 to-gray-800" },
    ],
    localFood: [
      { name: "얼스터 프라이", description: "소다 브레드와 감자 빵이 추가된 북아일랜드식 풀 브렉퍼스트.", emoji: "🍳" },
      { name: "벨파스트 번", description: "달콤한 빵으로 버터를 듬뿍 발라 먹는 벨파스트 명물.", emoji: "🍞" },
      { name: "차우더", description: "세인트 조지 마켓에서 맛보는 진한 해산물 차우더.", emoji: "🍲" },
    ],
    tips: [
      "벨파스트의 화폐는 파운드(£)입니다. 유로가 아닙니다.",
      "블랙 택시 투어는 벨파스트 역사를 이해하는 최고의 방법입니다.",
      "카테드럴 쿼터에서 매일 밤 라이브 음악을 무료로 즐길 수 있습니다.",
      "타이타닉 벨파스트는 온라인 예약이 현장 구매보다 저렴합니다.",
    ],
  },
  "ireland/north-ni/giant-s-causeway": {
    heroGradient: "from-gray-500 to-slate-800",
    description: "약 6천만 년 전 화산 활동으로 생성된 4만 개의 현무암 기둥이 바다를 향해 펼쳐진 유네스코 세계유산. 거인 핀 맥쿨의 전설이 깃든 북아일랜드 최고의 자연 경관입니다.",
    bestTime: "4~10월 (날씨 온화, 일조량 충분)",
    stayArea: "부쉬밀스 / 포트러시",
    transport: "벨파스트에서 차로 약 1.5시간 또는 울스터버스",
    districts: [
      { name: "코즈웨이 코스트", nameEn: "Causeway Coast", description: "자이언츠 코즈웨이를 포함한 북아일랜드 해안 지역으로 절벽, 성, 증류소가 위치.", highlights: ["자이언츠 코즈웨이", "카릭아레드 로프 브리지", "부쉬밀스 증류소", "던루스 성"] },
    ],
    attractions: [
      { name: "자이언츠 코즈웨이", nameEn: "Giant's Causeway", description: "4만 개의 육각형 현무암 기둥이 만든 경이로운 자연 조형물.", category: "세계유산", tip: "비지터 센터 개장 전 아침 일찍 도착하면 인파 없이 감상할 수 있습니다." },
      { name: "카릭아레드 로프 브리지", nameEn: "Carrick-a-Rede Rope Bridge", description: "30m 아래 바다 위의 20m 밧줄 다리로 스릴 만점의 체험.", category: "자연·체험" },
      { name: "던루스 성", nameEn: "Dunluce Castle", description: "절벽 위에 위태롭게 서 있는 중세 성 유적.", category: "성" },
    ],
    dayTrips: [
      { name: "부쉬밀스 증류소", nameEn: "Bushmills Distillery", description: "1608년 면허를 받은 세계에서 가장 오래된 위스키 증류소.", travelTime: "차로 약 5분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "부쉬밀스 위스키", description: "400년 역사의 아일랜드 대표 위스키.", emoji: "🥃" },
      { name: "시푸드 차우더", description: "북아일랜드 해안의 신선한 재료로 만든 크리미한 차우더.", emoji: "🍲" },
    ],
    tips: [
      "주차장에서 기둥까지 약 15~20분 걸어야 합니다 (셔틀 버스 운행).",
      "카릭아레드 로프 브리지는 사전 온라인 예약이 필요합니다.",
      "코즈웨이 코스트 드라이브로 자이언츠 코즈웨이, 카릭아레드, 던루스 성을 하루에 모두 볼 수 있습니다.",
    ],
  },
  "ireland/north-ni/derry": {
    heroGradient: "from-rose-500 to-red-800",
    description: "17세기 성벽이 완벽하게 보존된 아일랜드 유일의 성곽 도시. 최근 TV 시리즈 '데리 걸스'로 유명세를 탄 도시로 문화·예술이 활발하게 발전 중입니다.",
    bestTime: "5~9월 / 10월 핼러윈 축제 (유럽 최대)",
    stayArea: "성벽 도시(Walled City) 내부",
    transport: "벨파스트에서 기차 약 2.5시간, 버스 약 1.5시간",
    districts: [
      { name: "성벽 도시", nameEn: "Walled City", description: "17세기 성벽으로 둘러싸인 데리의 역사 중심지.", highlights: ["길드홀", "타워 뮤지엄", "성벽 산책로", "더 다이아몬드"] },
      { name: "보그사이드", nameEn: "Bogside", description: "피의 일요일 사건의 현장으로 유명한 벽화 지구.", highlights: ["프리 데리 벽화", "피의 일요일 기념관", "피플스 갤러리 벽화"] },
    ],
    attractions: [
      { name: "데리 성벽", nameEn: "Derry City Walls", description: "1613~1619년에 건설된 아일랜드에서 가장 완벽하게 보존된 성벽, 전체 일주 약 1.5km.", category: "역사", tip: "성벽 위를 걸으면 도시 전체를 조망할 수 있습니다." },
      { name: "길드홀", nameEn: "Guildhall", description: "네오고딕 양식의 시청 건물로 스테인드글라스 창이 아름다운 무료 관광지.", category: "건축" },
      { name: "피스 브리지", nameEn: "Peace Bridge", description: "2011년 개통된 보행자 다리로 양쪽 커뮤니티를 연결하는 화해의 상징.", category: "건축" },
    ],
    dayTrips: [
      { name: "도네갈", nameEn: "Donegal", description: "야생적인 해안 풍경과 슬리브 리그 절벽이 있는 아일랜드 최북단.", travelTime: "차로 약 1.5시간", gradient: "from-teal-400 to-blue-700" },
    ],
    localFood: [
      { name: "포테이토 파를", description: "으깬 감자와 파를 섞은 북아일랜드 전통 요리.", emoji: "🥔" },
      { name: "소다 팔", description: "삼각형 모양의 소다 빵으로 얼스터 프라이의 필수 구성요소.", emoji: "🍞" },
    ],
    tips: [
      "데리/런던데리 두 이름이 모두 사용되며, 정치적 맥락이 있으니 참고하세요.",
      "핼러윈 축제(10월 말)는 유럽 최대 규모로 도시 전체가 축제 분위기입니다.",
      "성벽 투어는 무료 가이드 투어가 매일 운영됩니다.",
    ],
  },
  "ireland/north-ni/dark-hedges": {
    heroGradient: "from-emerald-600 to-gray-800",
    description: "18세기에 심어진 너도밤나무들이 터널을 이루는 환상적인 가로수 길. HBO 왕좌의 게임에서 킹스로드로 등장하며 세계적으로 유명해진 북아일랜드의 포토 스팟입니다.",
    bestTime: "연중 가능 (가을 단풍, 겨울 안개 시 특히 몽환적)",
    stayArea: "발리머니 / 벨파스트에서 당일치기",
    transport: "벨파스트에서 차로 약 1시간",
    districts: [
      { name: "브레글 로드", nameEn: "Bregagh Road", description: "다크 헤지스가 위치한 좁은 시골 도로로 현재 차량 통행이 제한됨.", highlights: ["다크 헤지스 가로수길", "주변 농촌 풍경"] },
    ],
    attractions: [
      { name: "다크 헤지스", nameEn: "The Dark Hedges", description: "스튜어트 가문이 1775년에 심은 너도밤나무들이 만든 신비로운 나무 터널.", category: "자연·랜드마크" },
      { name: "그레이스힐 하우스", nameEn: "Gracehill House", description: "다크 헤지스 바로 옆의 조지안 양식 게스트하우스.", category: "숙소" },
      { name: "던루스 성", nameEn: "Dunluce Castle", description: "근처의 절벽 위 중세 성 유적으로 함께 방문하기 좋은 곳.", category: "성" },
    ],
    dayTrips: [
      { name: "자이언츠 코즈웨이", nameEn: "Giant's Causeway", description: "유네스코 세계유산인 4만 개의 현무암 기둥.", travelTime: "차로 약 30분", gradient: "from-gray-500 to-slate-800" },
    ],
    localFood: [
      { name: "아이리시 소다 브레드", description: "북아일랜드 농촌의 전통 방식으로 구운 소다 빵.", emoji: "🍞" },
      { name: "부쉬밀스 위스키", description: "인근 부쉬밀스 증류소의 프리미엄 아이리시 위스키.", emoji: "🥃" },
    ],
    tips: [
      "이른 아침(8시 이전)에 방문하면 관광객 없이 사진을 찍을 수 있습니다.",
      "차량 통행이 제한되어 인근 주차장에 주차 후 도보로 접근해야 합니다.",
      "코즈웨이 코스트 드라이브와 함께 일정을 짜면 효율적입니다.",
    ],
  },
};

export const irelandAttractionDetails: Record<string, AttractionDetail> = {
  // ===== DUBLIN =====
  "ireland/dublin-east/dublin/trinity-college-book-of-kells": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "1592년 엘리자베스 1세에 의해 설립된 아일랜드 최고의 명문 대학교. 올드 라이브러리의 롱 룸과 9세기 켈트 복음서 '켈스의 서'가 세계적으로 유명합니다.",
    history: "트리니티 칼리지는 1592년 설립 이후 오스카 와일드, 사무엘 베켓 등 수많은 문학가를 배출했습니다. 켈스의 서는 약 800년경 켈트 수도승들이 제작한 4대 복음서 필사본입니다.",
    visitInfo: {
      hours: "월~토 09:30~17:00, 일 12:00~16:30 (계절별 변동)",
      admission: "성인 €18, 학생 €14, 온라인 사전 예약 시 €16",
      address: "College Green, Dublin 2, Ireland",
      website: "https://www.tcd.ie/visitors/book-of-kells/",
    },
    highlights: [
      "켈스의 서 - 9세기 켈트 장식 필사본의 걸작",
      "롱 룸 - 65m 길이의 장엄한 오크 서가 도서관",
      "브라이언 보루의 하프 - 아일랜드의 국가 상징",
      "프론트 스퀘어 - 코발트스톤이 깔린 대학 중앙 광장",
    ],
    nearbyAttractions: [
      "그래프턴 스트리트 (도보 1분)",
      "아일랜드 국립미술관 (도보 5분)",
      "메리온 스퀘어 (도보 5분)",
      "더블린 성 (도보 10분)",
    ],
    photoTips: "롱 룸 내부는 사진 촬영이 허용되지만 플래시는 금지됩니다. 프론트 스퀘어에서 캠퍼닐리 종탑을 배경으로 찍으면 좋습니다.",
    tips: [
      "온라인 사전 예약으로 긴 대기줄을 피할 수 있습니다.",
      "오전 개장 직후가 가장 한적합니다.",
      "켈스의 서 전시실은 조명이 어두우므로 눈이 적응할 시간이 필요합니다.",
      "대학 캠퍼스는 무료로 산책할 수 있습니다.",
    ],
  },
  "ireland/dublin-east/dublin/guinness-storehouse": {
    heroGradient: "from-stone-700 to-amber-900",
    description: "1759년부터 기네스 맥주를 양조해온 세인트 제임스 게이트 양조장의 체험형 박물관. 7층 건물 전체가 기네스의 역사, 양조 과정, 광고 아카이브를 전시하며 옥상 그래비티 바에서 더블린 360도 전경과 함께 무료 파인트를 즐길 수 있습니다.",
    history: "아서 기네스가 1759년 연간 45파운드에 9,000년 임대 계약을 체결한 전설적인 양조장입니다. 현재 건물은 1904년 발효 공장을 리노베이션한 것으로 2000년 관광 시설로 개장했습니다.",
    visitInfo: {
      hours: "매일 09:30~19:00 (7~8월은 21:00까지, 마지막 입장 폐관 2시간 전)",
      admission: "성인 €26, 학생 €22, 온라인 예약 시 €20부터",
      address: "St James's Gate, Dublin 8, Ireland",
      website: "https://www.guinness-storehouse.com/",
    },
    highlights: [
      "그래비티 바 - 옥상에서 더블린 360도 파노라마와 무료 파인트",
      "양조 과정 체험 - 기네스의 4가지 재료와 양조 비법",
      "퍼펙트 파인트 - 직접 기네스를 따르는 체험",
      "기네스 광고 아카이브 - 역사적인 광고 포스터와 영상",
    ],
    nearbyAttractions: [
      "킬메인햄 감옥 (도보 15분)",
      "아이리시 현대미술관 IMMA (도보 10분)",
      "성 패트릭 대성당 (도보 15분)",
      "크라이스트 처치 대성당 (도보 20분)",
    ],
    photoTips: "그래비티 바에서 석양 시간에 방문하면 더블린 스카이라인과 함께 기네스 파인트를 찍을 수 있습니다.",
    tips: [
      "오후보다 오전에 방문하면 덜 혼잡합니다.",
      "온라인 예약이 현장 구매보다 저렴합니다.",
      "그래비티 바에서 파인트를 받기 전 퍼펙트 파인트 체험을 먼저 하세요.",
      "콤보 티켓으로 기네스 아카데미 체험을 추가할 수 있습니다.",
    ],
  },
  "ireland/dublin-east/dublin/temple-bar-district": {
    heroGradient: "from-red-500 to-orange-700",
    description: "더블린의 문화·엔터테인먼트 중심지로 좁은 자갈길을 따라 전통 아이리시 펍, 라이브 음악 바, 갤러리, 빈티지 숍이 밀집한 지역. 매일 밤 거리 공연과 라이브 음악이 활기를 더합니다.",
    visitInfo: {
      hours: "24시간 개방 (펍은 보통 23:30~00:30 마감)",
      admission: "무료 (거리 자체 관람)",
      address: "Temple Bar, Dublin 2, Ireland",
      website: "https://www.visittemplebar.com/",
    },
    highlights: [
      "더 템플 바 펍 - 1840년부터 운영된 아이콘적인 펍",
      "미팅하우스 스퀘어 - 주말 푸드마켓과 야외 공연",
      "아이리시 필름 인스티튜트 - 독립 영화와 아카이브",
      "거리 공연 - 매일 밤 라이브 음악과 버스킹",
    ],
    nearbyAttractions: [
      "트리니티 칼리지 (도보 3분)",
      "더블린 성 (도보 5분)",
      "하페니 브리지 (도보 3분)",
      "크라이스트 처치 대성당 (도보 10분)",
    ],
    photoTips: "템플 바 펍의 빨간 외관은 낮에 촬영하는 것이 색감이 더 잘 나옵니다. 저녁에는 네온 불빛과 인파로 활기찬 분위기를 담을 수 있습니다.",
    tips: [
      "템플 바 지역의 펍은 다른 지역보다 가격이 비싼 편입니다.",
      "토요일 아침 푸드마켓(미팅하우스 스퀘어)은 꼭 방문해보세요.",
      "주말 밤에는 매우 혼잡하므로 소지품에 주의하세요.",
      "라이브 음악은 보통 저녁 9시 이후에 시작됩니다.",
    ],
  },
  "ireland/dublin-east/dublin/dublin-castle": {
    heroGradient: "from-stone-500 to-gray-800",
    description: "1204년 존 왕에 의해 건설된 더블린 성은 700년간 영국 통치의 중심지였으며, 현재는 아일랜드 대통령 취임식과 국가 행사에 사용되는 역사적 건물입니다.",
    history: "노르만 정복 이후 1204년에 건설을 시작한 더블린 성은 바이킹 요새 위에 세워졌습니다. 1922년 아일랜드 자유국 수립 시 영국으로부터 인수되었으며, 현재 EU 정상회의 등 주요 행사가 열립니다.",
    visitInfo: {
      hours: "매일 09:45~17:15 (마지막 입장 16:45)",
      admission: "성인 €8, 학생/시니어 €6, 12세 이하 무료",
      address: "Dame Street, Dublin 2, Ireland",
      website: "https://www.dublincastle.ie/",
    },
    highlights: [
      "스테이트 아파트먼트 - 화려한 조지안 양식의 국빈 접견실",
      "채플 로열 - 네오고딕 양식의 아름다운 예배당",
      "바이킹 발굴터 - 성 아래에서 발견된 바이킹 시대 유적",
      "더블니아 - 중세 더블린의 역사를 체험하는 인근 전시관",
    ],
    nearbyAttractions: [
      "템플 바 (도보 3분)",
      "크라이스트 처치 대성당 (도보 5분)",
      "시티 홀 (바로 옆)",
      "체스터 비티 도서관 (성 내부)",
    ],
    photoTips: "성 안뜰에서 올려다본 시계탑과 채플 로열이 좋은 구도입니다.",
    tips: [
      "가이드 투어(약 70분)가 스스로 둘러보는 것보다 훨씬 유익합니다.",
      "체스터 비티 도서관(성 내부, 무료)은 숨은 명소입니다.",
      "국가 행사 시 일반 관람이 불가하므로 사전 확인을 권장합니다.",
    ],
  },
  "ireland/dublin-east/dublin/st-patrick-s-cathedral": {
    heroGradient: "from-emerald-600 to-stone-800",
    description: "1191년에 세워진 아일랜드에서 가장 크고 가장 긴 역사를 가진 대성당. 걸리버 여행기의 작가 조나단 스위프트가 1713~1745년 사제장을 지낸 곳으로 그의 무덤과 기념물이 성당 내에 있습니다.",
    history: "성 패트릭이 개종자들에게 세례를 베풀었다는 우물 근처에 세워진 성당으로, 현재의 석조 건물은 1220년경에 완성되었습니다. 올리버 크롬웰 시대에 마구간으로 사용되는 수모를 겪기도 했습니다.",
    visitInfo: {
      hours: "월~금 09:30~17:00, 토 09:00~18:00, 일 13:00~15:00 (예배 시간 제한)",
      admission: "성인 €9, 학생 €8",
      address: "St Patrick's Close, Dublin 8, Ireland",
      website: "https://www.stpatrickscathedral.ie/",
    },
    highlights: [
      "조나단 스위프트의 무덤과 기념물",
      "중세 타일 바닥과 스테인드글라스 창",
      "성가대석 - 아일랜드에서 가장 오래된 합창단",
      "마쉬 도서관 - 성당 옆 아일랜드 최초의 공공 도서관",
    ],
    nearbyAttractions: [
      "마쉬 도서관 (바로 옆)",
      "크라이스트 처치 대성당 (도보 5분)",
      "더블린 성 (도보 10분)",
      "기네스 스토어하우스 (도보 15분)",
    ],
    photoTips: "성당 서쪽 정면의 첨탑은 패트릭 공원에서 촬영하면 전체를 담을 수 있습니다.",
    tips: [
      "일요일 예배 시간에는 관광 입장이 제한됩니다.",
      "성당 정원의 성 패트릭 공원에서 잠시 쉬어가기 좋습니다.",
      "오디오 가이드(€5 추가)가 성당의 역사를 이해하는 데 도움이 됩니다.",
    ],
  },

  // ===== GALWAY =====
  "ireland/west-atlantic/galway/latin-quarter": {
    heroGradient: "from-violet-500 to-purple-800",
    description: "골웨이의 심장부인 라틴 쿼터는 컬러풀한 건물, 전통 아이리시 펍, 거리 버스커, 수공예 상점이 밀집한 보행자 거리입니다. 매일 밤 라이브 아이리시 전통 음악이 펍에서 흘러나오며 보헤미안 분위기가 넘칩니다.",
    visitInfo: {
      hours: "24시간 개방 (상점 보통 09:00~18:00, 펍 ~00:30)",
      admission: "무료",
      address: "Quay Street & High Street, Galway, Ireland",
    },
    highlights: [
      "퀘이 스트리트 - 골웨이 라틴 쿼터의 메인 보행자 거리",
      "키르완스 레인 - 중세 시대 골목길로 카페와 상점이 즐비",
      "라이브 아이리시 음악 펍 - 찰리 번, 타이 네흐틴, 탈리 등",
      "주말 거리 공연 - 골웨이만의 버스킹 문화",
    ],
    nearbyAttractions: [
      "에어 스퀘어 (도보 3분)",
      "스페인 아치 (도보 5분)",
      "클라다 링 박물관 (도보 2분)",
      "골웨이 대성당 (도보 10분)",
    ],
    photoTips: "컬러풀한 상점 앞에서 찍으면 골웨이 특유의 분위기를 담을 수 있습니다. 거리 공연자들을 촬영할 때는 동의를 구하세요.",
    tips: [
      "주말 저녁에 가장 활기차며 라이브 음악을 즐기기 좋습니다.",
      "클라다 링 정통 제품은 토마스 딜런 숍(1750년~)에서 구매하세요.",
      "골웨이 오이스터와 기네스 조합을 펍에서 꼭 시도해보세요.",
    ],
  },
  "ireland/west-atlantic/galway/eyre-square": {
    heroGradient: "from-green-500 to-teal-700",
    description: "골웨이 시내 중심의 공원 광장으로 공식 명칭은 존 F. 케네디 기념 공원입니다. 1963년 JFK 방문을 기념해 명명되었으며, 시민들의 휴식 공간이자 축제의 중심지입니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Eyre Square, Galway, Ireland",
    },
    highlights: [
      "브라운 도어웨이 - 1627년 건축된 문으로 광장의 역사적 기념물",
      "골웨이 후커 분수 - 전통 범선을 형상화한 청동 분수",
      "JFK 기념 공원 - 케네디 대통령의 아일랜드 방문 기념",
      "골웨이 크리스마스 마켓 - 11~12월 유럽식 크리스마스 마켓",
    ],
    nearbyAttractions: [
      "라틴 쿼터 (도보 2분)",
      "골웨이 기차역 (도보 3분)",
      "쇼핑센터 에어 스퀘어 (바로 옆)",
    ],
    photoTips: "광장 중앙의 후커 분수와 컬러풀한 주변 건물을 함께 담으면 골웨이의 분위기가 잘 전달됩니다.",
    tips: [
      "골웨이 여행의 시작점으로 기차역과 버스정류장이 바로 옆에 있습니다.",
      "7~8월 아트 페스티벌 시즌에는 광장에서 각종 공연이 열립니다.",
      "크리스마스 마켓(11~12월)은 골웨이의 겨울 대표 행사입니다.",
    ],
  },

  // ===== CLIFFS OF MOHER =====
  "ireland/west-atlantic/cliffs-of-moher/cliffs-of-moher-visitor-centre": {
    heroGradient: "from-slate-600 to-blue-900",
    description: "모허 절벽을 안전하게 관람하고 그 지질학적, 생태학적 가치를 이해할 수 있는 비지터 센터. 절벽 아래 땅속에 건설되어 경관을 해치지 않는 친환경 건축물로, 전시관과 절벽 산책로 출발점 역할을 합니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (성수기 08:00~21:00)",
      admission: "성인 €8, 학생 €6 (주차 포함)",
      address: "Cliffs of Moher, Lislorkan North, Liscannor, Co. Clare, Ireland",
      website: "https://www.cliffsofmoher.ie/",
    },
    highlights: [
      "절벽 산책로 - 오브라이언 타워를 중심으로 남북으로 이어지는 절벽 길",
      "오브라이언 타워 - 1835년 건설된 절벽 최고점 전망탑",
      "해양 생태 전시 - 절벽에 서식하는 퍼핀 등 해조류 정보",
      "지질학 전시 - 3억 년 전 석탄기의 지층 구조 설명",
    ],
    nearbyAttractions: [
      "두린 마을 (차로 10분)",
      "버렌 국립공원 (차로 20분)",
      "아란 제도 페리 (두린에서 출발)",
    ],
    photoTips: "오전에 방문하면 절벽이 순광이 되어 사진이 잘 나옵니다. 오브라이언 타워 위에서 남쪽을 바라보면 해그스 헤드까지 이어지는 절벽 라인이 장관입니다.",
    tips: [
      "바람이 매우 강하므로 안전 펜스 밖으로 나가지 마세요.",
      "맑은 날에는 아란 제도까지 보입니다.",
      "성수기에는 오전 9시 이전이나 오후 5시 이후가 한적합니다.",
      "두린에서 절벽까지 해안 트레일(약 8km)로 걸어올 수도 있습니다.",
    ],
  },

  // ===== CORK =====
  "ireland/south/cork/english-market": {
    heroGradient: "from-red-400 to-amber-700",
    description: "1788년부터 운영되어온 코크의 역사적 실내 식품 시장으로 아일랜드 미식 문화의 심장부. 2011년 엘리자베스 2세 여왕이 방문하며 세계적으로 주목받았습니다. 신선한 해산물, 치즈, 육류, 제과류 등 코크 최고의 식재료를 한곳에서 만날 수 있습니다.",
    history: "1788년 코크 시의회에 의해 설립되었으며, 1980년 화재 후 재건되었습니다. 200년 넘는 역사 동안 코크 시민의 식탁을 책임져온 곳으로, 2011년 영국 여왕 방문 이후 국제적 명성을 얻었습니다.",
    visitInfo: {
      hours: "월~토 08:00~18:00 (일요일 휴무)",
      admission: "무료 입장",
      address: "Princes Street, Cork, Ireland",
      website: "https://www.englishmarket.ie/",
    },
    highlights: [
      "해산물 코너 - 코크 해안의 신선한 굴, 게, 연어",
      "파머스턴 카페 - 2층에서 시장 전체를 내려다보며 식사",
      "치즈 가판대 - 아일랜드 수제 치즈 시식과 구매",
      "전통 정육점 - 트라이프 & 드리셴 등 코크 전통 음식",
    ],
    nearbyAttractions: [
      "세인트 패트릭 스트리트 (도보 1분)",
      "성 핀 바르 대성당 (도보 10분)",
      "크로포드 아트 갤러리 (도보 5분)",
      "코크 시청 (도보 5분)",
    ],
    photoTips: "시장 입구의 아치와 내부 빅토리아 양식 철골 지붕이 인상적인 구도를 만듭니다.",
    tips: [
      "일요일에는 문을 닫으니 월~토에 방문하세요.",
      "2층 파머스턴 카페에서 브런치를 즐기며 시장을 내려다보세요.",
      "현지인처럼 트라이프 & 드리셴을 맛보는 것을 도전해보세요.",
    ],
  },
  "ireland/south/cork/st-fin-barre-s-cathedral": {
    heroGradient: "from-stone-500 to-indigo-800",
    description: "코크의 수호성인 성 핀 바르에게 헌정된 프랑스 고딕 부흥 양식의 대성당. 건축가 윌리엄 버지스가 설계하여 1879년에 완공되었으며, 화려한 모자이크와 스테인드글라스로 유명합니다.",
    history: "7세기 성 핀 바르가 이곳에 수도원을 세운 것이 시초이며, 현재의 석조 대성당은 1865~1879년에 건설되었습니다. 3개의 첨탑과 1,260개의 조각상이 외관을 장식합니다.",
    visitInfo: {
      hours: "월~토 09:30~17:30, 일 13:00~17:00 (동절기 단축)",
      admission: "성인 €6, 학생 €4.50",
      address: "Bishop Street, Cork, Ireland",
      website: "https://www.cathedral.cork.anglican.org/",
    },
    highlights: [
      "스테인드글라스 - 버지스가 디자인한 화려한 색유리 창",
      "모자이크 바닥 - 300종 이상의 대리석으로 만든 정교한 모자이크",
      "3개의 첨탑 - 코크 스카이라인을 형성하는 상징적 탑",
      "부활의 천사 - 지붕 꼭대기의 황금 천사상",
    ],
    nearbyAttractions: [
      "잉글리시 마켓 (도보 10분)",
      "엘리자베스 포트 (도보 5분)",
      "코크 시립 박물관 (도보 15분)",
    ],
    photoTips: "리 강 남쪽 둑에서 성당 전체를 담을 수 있으며, 3개 첨탑이 모두 보이는 구도가 가장 좋습니다.",
    tips: [
      "일요일 예배 시간에는 관광 입장이 제한될 수 있습니다.",
      "지붕 꼭대기의 황금 천사상을 놓치지 마세요.",
      "내부 모자이크 바닥의 세밀함에 주목하세요.",
    ],
  },

  // ===== KILLARNEY =====
  "ireland/south/killarney/killarney-national-park": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "아일랜드 최초의 국립공원(1932년 지정)으로 102km²에 걸쳐 세 개의 호수, 오크숲, 산악 지대가 펼쳐집니다. 머크로스 하우스, 로스 성, 토크 폭포 등이 공원 내에 위치하며 아일랜드 유일의 토종 붉은 사슴 무리가 서식합니다.",
    visitInfo: {
      hours: "24시간 개방 (비지터 센터: 매일 09:00~17:30)",
      admission: "국립공원 무료, 머크로스 하우스 성인 €9",
      address: "Muckross, Killarney, Co. Kerry, Ireland",
      website: "https://www.killarneynationalpark.ie/",
    },
    highlights: [
      "머크로스 호수 - 중세 수도원 유적이 호수변에 위치",
      "갭 오브 던로 - 빙하가 깎은 산악 고갯길의 드라마틱한 풍경",
      "토크 폭포 - 18m 높이의 아름다운 폭포, 쉬운 산책로",
      "이니스폴렌 섬 - 로스 호수 위의 수도원 유적이 있는 작은 섬",
    ],
    nearbyAttractions: [
      "킬라니 타운 (도보/자전거 10분)",
      "로스 성 (공원 내)",
      "머크로스 하우스 (공원 내)",
      "링 오브 케리 출발점 (킬라니에서)",
    ],
    photoTips: "갭 오브 던로의 좁은 협곡을 마차 위에서 찍으면 독특한 구도를 얻을 수 있습니다. 토크 폭포는 비 온 뒤 수량이 풍부할 때 가장 장관입니다.",
    tips: [
      "자전거 대여로 공원을 둘러보는 것이 가장 효율적입니다.",
      "징거 카(마차)는 갭 오브 던로 코스를 추천합니다.",
      "붉은 사슴은 이른 아침이나 해질 무렵에 볼 확률이 높습니다.",
      "날씨 변화에 대비해 레인 재킷을 항상 준비하세요.",
    ],
  },
  "ireland/south/killarney/ross-castle": {
    heroGradient: "from-stone-500 to-green-800",
    description: "15세기 오도노휴 가문이 건설한 전형적인 아이리시 타워 하우스. 로스 호수(킬라니 하부 호수) 변에 자리하여 호수와 산을 배경으로 한 경관이 아름답습니다. 보트 투어의 출발점이기도 합니다.",
    history: "15세기 후반 오도노휴 모르 족장이 건설했으며, 1652년 올리버 크롬웰 군대에 의해 함락된 먼스터 지방 최후의 거점입니다. 전설에 따르면 '물 위의 배가 올 때만 성이 함락된다'는 예언이 있었습니다.",
    visitInfo: {
      hours: "매일 09:30~17:45 (3~10월), 동절기 제한 운영",
      admission: "성인 €5, 학생/시니어 €3",
      address: "Ross Road, Killarney, Co. Kerry, Ireland",
      website: "https://www.heritageireland.ie/",
    },
    highlights: [
      "타워 하우스 - 전형적인 아이리시 중세 성 구조 관람",
      "호수 보트 투어 - 로스 성에서 이니스폴렌 섬까지 유람",
      "호수변 산책로 - 성 주변의 평화로운 호숫가 산책",
      "중세 가구 재현 - 15~17세기 아이리시 귀족 생활 엿보기",
    ],
    nearbyAttractions: [
      "킬라니 국립공원 (공원 내 위치)",
      "머크로스 하우스 (차로 5분)",
      "이니스폴렌 섬 (보트 투어)",
      "킬라니 타운 (도보 30분 / 자전거 10분)",
    ],
    photoTips: "호수 쪽에서 성을 바라보면 맥길리커디 릭스 산맥이 배경으로 들어옵니다. 호수 위 보트에서 찍은 사진이 가장 인상적입니다.",
    tips: [
      "가이드 투어로만 내부 관람이 가능합니다.",
      "보트 투어는 날씨에 따라 운항이 취소될 수 있습니다.",
      "킬라니 타운에서 자전거로 약 10분이면 도착합니다.",
    ],
  },

  // ===== BELFAST =====
  "ireland/north-ni/belfast/titanic-belfast": {
    heroGradient: "from-blue-600 to-gray-800",
    description: "타이타닉호가 건조된 바로 그 자리에 세워진 세계 최대 규모의 타이타닉 전시관. 건물 외관은 타이타닉호 선수의 형상을 본뜬 것으로, 9개 갤러리에서 설계부터 침몰까지의 이야기를 첨단 기술로 체험할 수 있습니다.",
    history: "하플랜드 & 울프 조선소에서 1909~1911년 건조된 RMS 타이타닉의 역사를 기리기 위해 2012년 개관했습니다. 건물 높이는 타이타닉호 선체와 동일한 38.5m입니다.",
    visitInfo: {
      hours: "매일 10:00~17:00 (6~8월 09:00~18:00)",
      admission: "성인 £24.50, 학생 £18, 5세 이하 무료",
      address: "1 Olympic Way, Queen's Road, Belfast BT3 9EP",
      website: "https://www.titanicbelfast.com/",
    },
    highlights: [
      "조선소 체험 라이드 - 1900년대 조선소의 작업 환경을 체험",
      "해저 탐사 극장 - 해저에 잠든 타이타닉호 잔해 영상",
      "SS 노매딕 - 타이타닉호의 자매 텐더선으로 마지막 남은 화이트스타 라인 선박",
      "슬립웨이 - 타이타닉호가 실제로 진수된 경사로",
    ],
    nearbyAttractions: [
      "SS 노매딕 (바로 옆)",
      "타이타닉 도크 (도보 5분)",
      "HMS 캐롤라인 (도보 10분)",
      "벨파스트 시내 중심 (택시 10분)",
    ],
    photoTips: "건물 외관은 해 질 무렵 금빛으로 물들 때 가장 인상적입니다. 건물 앞 타이타닉 사인과 함께 촬영하세요.",
    tips: [
      "최소 2~3시간을 계획하세요. 전시가 매우 방대합니다.",
      "콤보 티켓으로 SS 노매딕과 함께 방문하면 할인됩니다.",
      "온라인 예약이 현장 구매보다 저렴합니다.",
      "오디오 가이드를 추가하면 더 깊이 있는 관람이 가능합니다.",
    ],
  },
  "ireland/north-ni/belfast/peace-walls-black-taxi-tour": {
    heroGradient: "from-orange-500 to-gray-700",
    description: "벨파스트 분쟁(The Troubles)의 역사를 가장 생생하게 체험할 수 있는 투어. 가톨릭 폴스 로드와 개신교 샨킬 로드를 가르는 평화의 벽과 양측의 정치적 벽화를 블랙 택시를 타고 현지 가이드의 설명으로 둘러봅니다.",
    visitInfo: {
      hours: "투어 업체별 상이 (보통 09:00~17:00 출발)",
      admission: "1인 약 £30~40 (택시 1대당 £50~70, 1~3인 탑승)",
      address: "출발: 벨파스트 시청 또는 호텔 픽업",
    },
    highlights: [
      "평화의 벽 - 두 커뮤니티를 가르는 벽과 게이트",
      "폴스 로드 벽화 - 가톨릭 내셔널리스트 커뮤니티의 정치적 벽화",
      "샨킬 로드 벽화 - 개신교 유니어니스트 커뮤니티의 벽화",
      "벽에 메시지 남기기 - 평화의 벽에 직접 평화 메시지를 적을 수 있음",
    ],
    nearbyAttractions: [
      "벨파스트 시청 (투어 출발점)",
      "카테드럴 쿼터 (택시 5분)",
      "크럼린 로드 감옥 (근처)",
    ],
    photoTips: "벽화는 햇빛이 비치는 시간대에 색감이 잘 나옵니다. 평화의 벽에 메시지를 쓰는 장면도 좋은 기념 사진이 됩니다.",
    tips: [
      "가이드 기사는 양쪽 커뮤니티의 관점을 모두 설명해줍니다.",
      "민감한 역사이므로 존중하는 태도를 유지해주세요.",
      "투어는 약 1.5~2시간 소요됩니다.",
      "팁은 별도이며 서비스에 만족하셨다면 관례적으로 드립니다.",
    ],
  },
  "ireland/north-ni/belfast/st-george-s-market": {
    heroGradient: "from-amber-500 to-red-700",
    description: "1890년대에 건설된 빅토리아 양식의 실내 시장으로 벨파스트에서 가장 오래되고 사랑받는 시장. 금~일요일 마켓이 열리며 신선한 식재료, 스트리트 푸드, 수공예품, 라이브 음악이 어우러진 벨파스트 문화의 중심지입니다.",
    visitInfo: {
      hours: "금 06:00~14:00, 토 09:00~15:00, 일 10:00~16:00 (월~목 휴무)",
      admission: "무료 입장",
      address: "12-20 East Bridge Street, Belfast BT1 3NQ",
      website: "https://www.belfastcity.gov.uk/stgeorgesmarket",
    },
    highlights: [
      "금요일 바라이어티 마켓 - 신선한 생선, 해산물, 꽃, 의류",
      "토요일 시티 푸드 마켓 - 세계 각국 음식과 라이브 음악",
      "일요일 크래프트 마켓 - 수공예품, 앤티크, 거리 음식",
      "빅토리아 시대 건축 - 주철 기둥과 유리 지붕의 역사적 건물",
    ],
    nearbyAttractions: [
      "빅 피시 조형물 (도보 5분)",
      "워터프론트 홀 (도보 5분)",
      "벨파스트 시청 (도보 10분)",
      "카테드럴 쿼터 (도보 10분)",
    ],
    photoTips: "토요일 오전에 방문하면 활기찬 시장 분위기와 라이브 음악 장면을 함께 담을 수 있습니다.",
    tips: [
      "토요일이 가장 활기차고 라이브 음악도 즐길 수 있습니다.",
      "벨파스트 번(Belfast Bun)과 해산물 차우더를 꼭 맛보세요.",
      "금요일 아침에 가면 신선한 해산물을 가장 좋은 가격에 살 수 있습니다.",
    ],
  },

  // ===== GIANT'S CAUSEWAY =====
  "ireland/north-ni/giant-s-causeway/giant-s-causeway": {
    heroGradient: "from-gray-600 to-slate-900",
    description: "약 6천만 년 전 화산 폭발로 생성된 약 4만 개의 육각형 현무암 기둥이 바다를 향해 펼쳐진 유네스코 세계유산(1986년 등재). 아일랜드의 대표적 자연 명소로 거인 핀 맥쿨이 스코틀랜드로 건너가기 위해 만들었다는 전설이 전해집니다.",
    history: "과학적으로는 약 5천~6천만 년 전 대규모 화산 활동으로 용암이 급속 냉각되며 육각형 기둥 형태로 굳어진 것입니다. 1693년 더블린 대학 학자가 학계에 보고하며 알려졌고 1986년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (성수기 연장 운영)",
      admission: "성인 £15 (내셔널 트러스트 회원 무료), 주차 포함",
      address: "44 Causeway Road, Bushmills, Co. Antrim BT57 8SU",
      website: "https://www.nationaltrust.org.uk/giants-causeway",
    },
    highlights: [
      "그랜드 코즈웨이 - 가장 많은 기둥이 밀집한 메인 지역",
      "자이언츠 부트 - 거인 핀 맥쿨의 부츠 모양 바위",
      "오르간 파이프 - 12m 높이의 현무암 기둥이 파이프오르간처럼 배열",
      "셰퍼드스 스텝스 - 162개 계단으로 절벽 위에서 코즈웨이를 내려다보는 전망",
    ],
    nearbyAttractions: [
      "카릭아레드 로프 브리지 (차로 15분)",
      "부쉬밀스 증류소 (차로 5분)",
      "던루스 성 (차로 10분)",
      "다크 헤지스 (차로 30분)",
    ],
    photoTips: "오전 이른 시간(09:00 이전)에 도착하면 관광객 없이 기둥 위에서 사진을 찍을 수 있습니다. 셰퍼드스 스텝스에서 내려다보는 전체 구도도 좋습니다.",
    tips: [
      "비지터 센터에서 기둥까지 약 15~20분 걸어야 합니다 (셔틀 £1).",
      "바위가 미끄러우니 그립 좋은 신발을 신으세요.",
      "내셔널 트러스트 회원이면 무료 입장입니다.",
      "날씨가 빨리 변하므로 방수 재킷을 꼭 챙기세요.",
    ],
  },

  // ===== RING OF KERRY =====
  "ireland/south/ring-of-kerry/skellig-michael": {
    heroGradient: "from-gray-500 to-blue-900",
    description: "대서양 위 218m 높이의 바위섬에 세워진 6세기 초기 기독교 수도원 유적. 유네스코 세계유산이자 스타워즈 '깨어난 포스' 및 '라스트 제다이'에서 루크 스카이워커의 은신처로 등장하며 전 세계적으로 유명해졌습니다.",
    history: "6세기경 수도승들이 대서양의 고립된 바위섬에 수도원을 설립하고 극단적 금욕 생활을 했습니다. 바이킹 공격에도 수세기 동안 유지되다 12세기 본토로 이전했습니다. 1996년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "5월 중순~10월 초 (날씨 허락 시에만 상륙 가능)",
      admission: "보트 투어 약 €80~100 (입장료 포함)",
      address: "Skellig Michael, Co. Kerry, Ireland (포트마기에서 보트 출발)",
      website: "https://www.heritageireland.ie/",
    },
    highlights: [
      "618개의 돌계단 - 정상까지 이어지는 1,400년 된 돌계단",
      "벌집형 석조 움막(클로한) - 수도승들의 원형 석조 주거지",
      "크리스트 새들 - 섬의 두 봉우리 사이 안장 지형",
      "퍼핀 서식지 - 5~8월 귀여운 퍼핀 새를 가까이서 관찰",
    ],
    nearbyAttractions: [
      "스몰 스켈리그 (바다에서 조망 - 상륙 불가)",
      "발린스켈릭스 (포트마기 근처 해안 마을)",
      "링 오브 케리 (순환 코스 일부)",
    ],
    photoTips: "정상의 수도원에서 대서양을 배경으로 찍은 사진이 가장 인상적입니다. 퍼핀은 5~7월에 가장 많으며 가까이 다가가도 잘 도망가지 않습니다.",
    tips: [
      "보트 투어는 최소 2~3주 전 예약이 필수입니다.",
      "날씨 때문에 결항률이 높으므로 여유 있는 일정을 잡으세요.",
      "멀미약을 미리 준비하고, 방수 재킷과 등산화는 필수입니다.",
      "618개 계단은 경사가 급하고 난간이 없으므로 체력과 주의가 필요합니다.",
    ],
  },

  // ===== BLARNEY =====
  "ireland/south/blarney/blarney-castle": {
    heroGradient: "from-green-500 to-lime-800",
    description: "1446년 데즈먼드 가문의 코맥 맥카시가 건설한 중세 성으로, 꼭대기에 있는 블라니 스톤에 키스하면 '말재주(Gift of the Gab)'를 얻는다는 전설로 세계적으로 유명합니다. 60에이커의 아름다운 정원도 볼거리입니다.",
    history: "원래 10세기 목조 성이 있었던 자리에 1210년 석조 성이 건설되었고, 현재의 탑은 1446년에 건축되었습니다. '블라니'라는 말이 영어에서 '감언이설'을 뜻하게 된 유래가 엘리자베스 1세와 맥카시 가문의 일화에서 비롯되었습니다.",
    visitInfo: {
      hours: "월~토 09:00~17:00, 일 09:00~16:00 (계절별 변동)",
      admission: "성인 €20, 학생 €16, 가족 €52",
      address: "Blarney, Co. Cork, Ireland",
      website: "https://www.blarneycastle.ie/",
    },
    highlights: [
      "블라니 스톤 - 성 꼭대기에서 몸을 뒤로 젖혀 키스하는 전통",
      "록 클로스 - 드루이드 유적과 마녀의 돌이 있는 신비로운 정원",
      "독 가든 - 벨라도나, 독미나리 등 독성 식물을 전시한 정원",
      "패른 가든 & 레이크 워크 - 아름다운 호수변 산책로",
    ],
    nearbyAttractions: [
      "블라니 울렌밀스 (도보 3분)",
      "블라니 마을 (도보 5분)",
      "코크 시내 (버스 30분)",
    ],
    photoTips: "성 뒤쪽 정원에서 탑 전체를 배경으로 찍는 구도가 좋습니다. 블라니 스톤 키스 장면은 성 위에서 직원이 찍어줍니다 (유료 구매 가능).",
    tips: [
      "블라니 스톤은 개장 직후(09:00)에 가면 대기 시간이 짧습니다.",
      "꼭대기까지 좁고 가파른 나선 계단을 올라야 합니다.",
      "정원이 매우 넓으므로 성과 정원 합쳐 최소 2~3시간을 계획하세요.",
      "록 클로스의 위싱 스텝스(소원 계단)에서 소원을 빌어보세요.",
    ],
  },

  // ===== KILKENNY =====
  "ireland/dublin-east/kilkenny/kilkenny-castle": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "1195년 노르만 기사 윌리엄 마샬이 건설한 킬케니의 상징적 성. 버틀러 가문이 1391년부터 1935년까지 약 600년간 소유했으며, 현재는 아일랜드 국가 기념물로 복원되어 공개 중입니다.",
    history: "12세기 노르만 침공 시기에 세워졌으며, 버틀러 가문(오몬드 공작)이 수백 년간 소유했습니다. 1967년 6대 오몬드 후작이 £50에 국가에 매각하여 대대적 복원이 이루어졌습니다.",
    visitInfo: {
      hours: "매일 09:30~17:30 (동절기 09:30~16:30)",
      admission: "성인 €8, 학생/시니어 €4, 정원 무료",
      address: "The Parade, Kilkenny, Ireland",
      website: "https://www.kilkennycastle.ie/",
    },
    highlights: [
      "롱 갤러리 - 사전 라파엘 양식의 천장화와 버틀러 가문 초상화",
      "로즈 가든 - 성 앞의 아름다운 장미 정원 (무료)",
      "버틀러 갤러리 - 현대미술 전시관 (무료)",
      "중세 타워 - 원형 노르만 탑에서 킬케니 시내 조망",
    ],
    nearbyAttractions: [
      "킬케니 디자인 센터 (바로 옆)",
      "성 캐니스 대성당 (도보 15분)",
      "스미딕스 익스피리언스 (도보 10분)",
      "중세 마일 뮤지엄 (도보 10분)",
    ],
    photoTips: "성 앞 잔디밭에서 성 전체를 담을 수 있으며, 정원의 장미와 함께 찍으면 로맨틱한 구도를 얻을 수 있습니다.",
    tips: [
      "가이드 투어(약 50분)로 내부를 관람하며 역사 설명을 들을 수 있습니다.",
      "정원과 공원은 무료이며 피크닉하기 좋은 곳입니다.",
      "킬케니 디자인 센터에서 아일랜드 수공예품 쇼핑을 즐기세요.",
      "성수기에는 투어 대기 시간이 길어질 수 있으니 일찍 방문하세요.",
    ],
  },

  // ===== GLENDALOUGH =====
  "ireland/dublin-east/glendalough/glendalough-monastic-site": {
    heroGradient: "from-emerald-600 to-green-900",
    description: "6세기 성 케빈(St. Kevin)이 설립한 초기 기독교 수도원 유적으로, 위클로 산맥의 깊은 빙하 계곡 속 두 호수 사이에 자리합니다. 33m 높이의 원형 탑, 켈트 십자가, 석조 교회 유적이 천년의 시간을 간직하고 있습니다.",
    history: "498년경 성 케빈이 은둔 수행을 위해 이곳에 들어와 수도원을 설립했습니다. 이후 아일랜드의 대표적 학문·수도 중심지로 성장했으나, 바이킹의 공격과 1398년 영국군의 침략으로 쇠퇴했습니다.",
    visitInfo: {
      hours: "유적지 24시간 개방, 비지터 센터 09:30~17:00 (동절기 ~16:00)",
      admission: "유적지 무료, 비지터 센터 성인 €5, 학생 €3",
      address: "Derrybawn, Glendalough, Co. Wicklow, Ireland",
      website: "https://www.heritageireland.ie/",
    },
    highlights: [
      "원형 탑(라운드 타워) - 33m 높이의 10세기 망루 겸 피난처",
      "켈트 하이 크로스 - 정교한 문양이 새겨진 중세 석조 십자가",
      "성 케빈 교회(Kevin's Kitchen) - 종탑이 굴뚝처럼 보여 '케빈의 부엌'이라 불림",
      "대성당 유적 - 수도원 단지 중 가장 큰 건물의 벽체 유적",
    ],
    nearbyAttractions: [
      "어퍼 레이크 (도보 20분)",
      "스피닉 워크 하이킹 코스 (유적지에서 출발)",
      "마이너스 빌리지 (광산촌 유적)",
    ],
    photoTips: "원형 탑과 묘지의 켈트 십자가를 한 프레임에 담는 구도가 가장 상징적입니다. 아침 안개가 낀 날에는 신비로운 분위기의 사진을 찍을 수 있습니다.",
    tips: [
      "비지터 센터에서 15분 영상을 먼저 보면 유적 이해에 큰 도움이 됩니다.",
      "주차장이 빨리 차므로 오전 일찍(10시 이전) 도착하는 것이 좋습니다.",
      "하이킹까지 계획한다면 방수 등산화와 레인 기어를 준비하세요.",
      "더블린에서 세인트 케빈스 버스로 접근 가능합니다 (사전 예약 추천).",
    ],
  },
};
