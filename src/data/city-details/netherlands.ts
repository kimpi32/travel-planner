import type { CityDetail, AttractionDetail } from "../city-details";

export const netherlandsCityDetails: Record<string, CityDetail> = {
  // ===== AMSTERDAM & NORTH HOLLAND =====
  "netherlands/amsterdam-north-holland/amsterdam": {
    heroGradient: "from-orange-500 to-red-700",
    description: "네덜란드의 수도이자 최대 도시. 165개의 운하와 1,500개 이상의 다리가 만드는 아름다운 수로 도시로, 렘브란트와 반 고흐의 예술 유산, 자유로운 분위기, 자전거 문화가 매력적입니다.",
    bestTime: "4~10월 (튤립 시즌: 4월 중순~5월 초)",
    stayArea: "담 광장 / 요르단 지구 / 더 파이프 주변",
    transport: "트램, 메트로, 버스, 페리 (GVB 교통카드 또는 I amsterdam City Card)",
    districts: [
      { name: "요르단", nameEn: "Jordaan", description: "17세기 운하를 따라 갤러리, 카페, 빈티지 숍이 늘어선 보헤미안 분위기의 지구.", highlights: ["안네 프랑크의 집", "서교회", "9거리 쇼핑", "노르더마르크트 시장"] },
      { name: "담 광장 & 구시가지", nameEn: "Dam Square & Old Centre", description: "왕궁과 신교회가 있는 암스테르담의 중심부.", highlights: ["왕궁", "신교회", "마담 투소", "칼베르 거리 쇼핑"] },
      { name: "뮤지엄 광장", nameEn: "Museumplein", description: "네덜란드 3대 미술관이 모여있는 문화 중심지.", highlights: ["국립미술관", "반 고흐 미술관", "시립미술관", "콘세르트헤바우"] },
    ],
    attractions: [
      { name: "국립미술관", nameEn: "Rijksmuseum", description: "렘브란트의 '야경'을 비롯한 네덜란드 황금시대 걸작을 소장한 세계적 미술관.", category: "미술관", tip: "온라인 사전 예약 필수, 오전 일찍 방문하면 여유롭습니다." },
      { name: "안네 프랑크의 집", nameEn: "Anne Frank House", description: "안네 프랑크 가족이 2년간 은신했던 실제 공간을 보존한 역사 박물관.", category: "역사", tip: "티켓은 6주 전 온라인에서만 구매 가능합니다." },
      { name: "반 고흐 미술관", nameEn: "Van Gogh Museum", description: "반 고흐의 작품 200점 이상을 소장한 세계 최대의 반 고흐 컬렉션.", category: "미술관", tip: "시간대별 입장이므로 반드시 사전 예약하세요." },
      { name: "요르단 운하 지구", nameEn: "Jordaan Canal District", description: "프린센흐라흐트와 헤렌흐라흐트를 따라 펼쳐지는 17세기 운하 경관.", category: "지구", tip: "운하 보트 투어로 수상에서 감상하는 것을 추천합니다." },
      { name: "담 광장 & 왕궁", nameEn: "Dam Square & Royal Palace", description: "암스테르담의 중심 광장으로 17세기에 지어진 웅장한 왕궁이 위치.", category: "광장" },
      { name: "하이네컨 체험관", nameEn: "Heineken Experience", description: "하이네컨 맥주의 역사와 양조 과정을 체험하는 인터랙티브 투어.", category: "체험", tip: "투어 마지막에 맥주 2잔 시음이 포함됩니다." },
    ],
    dayTrips: [
      { name: "잔세스칸스", nameEn: "Zaanse Schans", description: "전통 풍차 마을과 나막신·치즈 공방을 체험할 수 있는 야외 박물관.", travelTime: "버스 약 40분", gradient: "from-green-400 to-emerald-700" },
      { name: "볼렌담 & 마르켄", nameEn: "Volendam & Marken", description: "전통 어촌 마을의 정취를 느낄 수 있는 에이설 호수변 마을.", travelTime: "버스 약 30분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "헤링 (하링)", description: "생청어에 양파와 피클을 곁들인 네덜란드 대표 길거리 음식.", emoji: "🐟" },
      { name: "스트롭와플", description: "두 장의 얇은 와플 사이에 캐러멜 시럽을 넣은 달콤한 간식.", emoji: "🧇" },
      { name: "크로켓", description: "고기 라구를 빵가루로 감싸 튀긴 네덜란드식 고로케.", emoji: "🍘" },
    ],
    tips: [
      "I amsterdam City Card로 대중교통 + 주요 미술관 무료 입장이 가능합니다.",
      "자전거 대여 시 전용 도로를 이용하고 트램 레일에 주의하세요.",
      "운하 보트 투어는 저녁 시간대가 조명이 아름답습니다.",
      "소매치기가 잦으니 관광지에서 소지품을 주의하세요.",
    ],
  },
  "netherlands/amsterdam-north-holland/haarlem": {
    heroGradient: "from-rose-400 to-pink-700",
    description: "암스테르담에서 기차로 15분 거리의 아름다운 중세 도시. 프란스 할스 미술관과 그로터 마르크트 광장, 아늑한 카페와 부티크 쇼핑이 매력적인 소도시입니다.",
    bestTime: "4~9월 (튤립 시즌: 4월)",
    stayArea: "그로터 마르크트 광장 주변",
    transport: "도보 (구시가지 컴팩트) / 암스테르담에서 기차 15분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "그로터 마르크트 광장을 중심으로 중세 건축물과 쇼핑거리가 밀집.", highlights: ["그로터 마르크트", "성 바보 교회", "프란스 할스 미술관"] },
    ],
    attractions: [
      { name: "프란스 할스 미술관", nameEn: "Frans Hals Museum", description: "네덜란드 황금시대 초상화의 대가 프란스 할스의 걸작을 소장.", category: "미술관", tip: "뮤지엄카드 소지자 무료 입장." },
      { name: "성 바보 대교회", nameEn: "Grote Kerk", description: "하를렘의 랜드마크, 모차르트가 연주했던 뮐러 오르간으로 유명.", category: "교회" },
      { name: "테일러스 박물관", nameEn: "Teylers Museum", description: "네덜란드에서 가장 오래된 박물관으로 과학과 예술 컬렉션.", category: "박물관" },
    ],
    dayTrips: [
      { name: "큐켄호프 정원", nameEn: "Keukenhof Gardens", description: "세계 최대의 튤립 정원으로 매년 3월 말~5월만 개장.", travelTime: "버스 약 40분", gradient: "from-pink-400 to-fuchsia-700" },
    ],
    localFood: [
      { name: "하를렘 소시지", description: "하를렘 전통 방식으로 만든 훈제 소시지.", emoji: "🌭" },
      { name: "애플타르트", description: "네덜란드식 사과 파이, 카페에서 휘핑크림과 함께.", emoji: "🥧" },
    ],
    tips: [
      "암스테르담 숙소에서 당일치기로 방문하기 최적의 도시입니다.",
      "토요일 그로터 마르크트 시장에서 현지 치즈와 빵을 맛보세요.",
      "큐켄호프 방문 시 하를렘을 거점으로 이용하면 편리합니다.",
    ],
  },
  "netherlands/amsterdam-north-holland/zaanse-schans": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "네덜란드 전통 풍차 마을을 재현한 야외 박물관 마을. 실제 작동하는 풍차, 나막신 공방, 치즈 공장 등을 체험할 수 있어 네덜란드의 전원 풍경을 한눈에 볼 수 있습니다.",
    bestTime: "4~10월",
    stayArea: "암스테르담 숙소 (당일치기 추천)",
    transport: "암스테르담 중앙역에서 버스 약 40분 / 기차+도보 약 30분",
    districts: [
      { name: "풍차 마을", nameEn: "Windmill Village", description: "잔 강변에 전통 풍차와 목조 가옥이 늘어선 야외 박물관 구역.", highlights: ["풍차 내부 견학", "나막신 공방", "치즈 농장", "잔스 박물관"] },
    ],
    attractions: [
      { name: "잔세스칸스 풍차", nameEn: "Zaanse Schans Windmills", description: "겨자, 페인트, 목재를 생산하는 실제 작동 풍차군. 내부 견학이 가능합니다.", category: "풍차", tip: "잔세스칸스 카드로 모든 풍차와 박물관 입장이 가능합니다." },
      { name: "나막신 공방", nameEn: "Clog Workshop", description: "전통 나막신 제작 시연을 볼 수 있는 공방.", category: "체험" },
      { name: "치즈 농장", nameEn: "Cheese Farm", description: "전통 방식의 치즈 제조 과정을 견학하고 시식할 수 있습니다.", category: "체험" },
    ],
    dayTrips: [
      { name: "볼렌담", nameEn: "Volendam", description: "에이설 호수변의 전통 어촌 마을.", travelTime: "버스 약 30분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "판넨쿠켄", description: "네덜란드식 팬케이크, 달콤한 토핑부터 짭짤한 토핑까지 다양.", emoji: "🥞" },
      { name: "하우다 치즈", description: "잔세스칸스 치즈 농장에서 직접 시식하는 신선한 치즈.", emoji: "🧀" },
    ],
    tips: [
      "마을 입장은 무료이나 개별 풍차와 박물관은 입장료가 있습니다.",
      "잔세스칸스 카드(€17.50)로 모든 시설 입장이 가능합니다.",
      "오전 일찍 방문하면 단체 관광객을 피할 수 있습니다.",
    ],
  },
  "netherlands/amsterdam-north-holland/volendam": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "에이설 호수변의 전통 어촌 마을. 알록달록한 목조 가옥과 항구 풍경이 그림 같으며, 전통 의상 체험과 신선한 해산물이 매력적입니다.",
    bestTime: "5~9월",
    stayArea: "암스테르담 숙소 (당일치기 추천)",
    transport: "암스테르담 중앙역에서 버스 약 30분",
    districts: [
      { name: "항구 지구", nameEn: "Harbour District", description: "볼렌담의 중심부로 항구를 따라 레스토랑과 기념품 가게가 늘어선 지구.", highlights: ["볼렌담 항구", "전통 의상 사진관", "볼렌담 박물관"] },
    ],
    attractions: [
      { name: "볼렌담 항구", nameEn: "Volendam Harbour", description: "알록달록한 목조 가옥이 늘어선 그림 같은 어항 풍경.", category: "항구" },
      { name: "볼렌담 박물관", nameEn: "Volendam Museum", description: "마을의 역사와 전통 의상, 모자이크 아트를 전시.", category: "박물관" },
      { name: "마르켄 페리", nameEn: "Marken Ferry", description: "볼렌담에서 마르켄 섬까지 운항하는 페리로 호수 위 풍경 감상.", category: "교통", tip: "편도 약 30분, 왕복 티켓 구매가 유리합니다." },
    ],
    dayTrips: [
      { name: "마르켄", nameEn: "Marken", description: "에이설 호수의 전통 섬 마을, 페리로 연결.", travelTime: "페리 약 30분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "키벨링", description: "대구살을 튀긴 네덜란드 전통 해산물 간식.", emoji: "🐟" },
      { name: "훈제 장어", description: "볼렌담 특산 훈제 장어, 항구에서 바로 구매 가능.", emoji: "🐍" },
    ],
    tips: [
      "전통 의상을 입고 사진을 찍는 체험이 인기입니다.",
      "마르켄행 페리와 결합하면 반나절 코스로 충분합니다.",
      "잔세스칸스와 함께 하루 코스로 묶어 방문하세요.",
    ],
  },

  // ===== SOUTH HOLLAND =====
  "netherlands/south-holland/the-hague": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "네덜란드의 행정 수도이자 국제사법재판소 소재지. 마우리츠하위스 미술관의 '진주 귀걸이를 한 소녀', 비넨호프 국회의사당, 스헤베닝언 해변이 매력적인 도시입니다.",
    bestTime: "5~9월 (해변 시즌: 6~8월)",
    stayArea: "시내 중심부 / 스헤베닝언 해변",
    transport: "트램, 버스 (HTM) / 자전거",
    districts: [
      { name: "시내 중심부", nameEn: "City Centre", description: "비넨호프와 마우리츠하위스, 쇼핑거리가 있는 정치·문화 중심지.", highlights: ["비넨호프", "마우리츠하위스", "노르데인데 궁전", "파사지 쇼핑 아케이드"] },
      { name: "스헤베닝언", nameEn: "Scheveningen", description: "북해에 면한 네덜란드 최대의 해변 리조트 지구.", highlights: ["스헤베닝언 해변", "쿠어하우스", "시라이프 수족관", "스헤베닝언 부두"] },
    ],
    attractions: [
      { name: "마우리츠하위스", nameEn: "Mauritshuis", description: "베르메르의 '진주 귀걸이를 한 소녀'와 렘브란트 작품을 소장한 왕립 미술관.", category: "미술관", tip: "규모가 작아 1~2시간이면 충분합니다." },
      { name: "스헤베닝언 해변", nameEn: "Scheveningen Beach", description: "북해에 면한 네덜란드 최대의 해변으로 서핑과 해산물이 유명.", category: "해변", tip: "트램 1번으로 시내에서 15분이면 도착합니다." },
      { name: "비넨호프", nameEn: "Binnenhof", description: "13세기부터 사용된 네덜란드 국회의사당 건물군.", category: "정치" },
      { name: "마드로담", nameEn: "Madurodam", description: "네덜란드의 유명 건축물을 1:25 축소 모형으로 재현한 미니어처 테마파크.", category: "테마파크" },
    ],
    dayTrips: [
      { name: "델프트", nameEn: "Delft", description: "델프트 블루 도자기의 본고장, 운하가 아름다운 대학 도시.", travelTime: "트램 약 20분", gradient: "from-blue-400 to-sky-700" },
    ],
    localFood: [
      { name: "키벨링", description: "바삭하게 튀긴 대구살, 마요네즈 소스와 함께.", emoji: "🐟" },
      { name: "하링 브루제", description: "생청어 샌드위치, 스헤베닝언 해변에서 맛보기.", emoji: "🥪" },
      { name: "파닷 오를로흐", description: "감자튀김에 땅콩소스, 마요네즈, 양파를 올린 네덜란드식 감자튀김.", emoji: "🍟" },
    ],
    tips: [
      "헤이그 1일 시내+스헤베닝언 해변 코스로 하루를 계획하세요.",
      "마우리츠하위스는 온라인 예약 시 시간대를 지정할 수 있습니다.",
      "에셔 미술관(Escher in Het Paleis)도 방문할 가치가 있습니다.",
      "자전거 대여로 시내와 해변을 오가면 편리합니다.",
    ],
  },
  "netherlands/south-holland/rotterdam": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "제2차 세계대전 폭격 후 재건된 유럽 최대 항구 도시. 큐브하우스, 마르크트할, 에라스무스 다리 등 대담한 현대 건축과 다문화 미식이 매력적인 혁신 도시입니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 / 쿨싱얼 주변",
    transport: "메트로, 트램, 버스, 수상택시",
    districts: [
      { name: "시내 중심부", nameEn: "City Centre", description: "큐브하우스와 마르크트할 등 현대 건축의 보고.", highlights: ["큐브하우스", "마르크트할", "쿨싱얼 쇼핑거리", "블라크 광장"] },
      { name: "코프 판 자위드", nameEn: "Kop van Zuid", description: "에라스무스 다리 남쪽의 재개발 지구로 호텔과 레스토랑이 밀집.", highlights: ["에라스무스 다리", "호텔 뉴욕", "네덜란드 사진 미술관"] },
    ],
    attractions: [
      { name: "큐브하우스", nameEn: "Cube Houses", description: "건축가 피에트 블롬이 설계한 45도로 기울어진 독특한 큐브형 주거 건물.", category: "건축", tip: "쇼큐브(Show Cube)에서 내부를 관람할 수 있습니다." },
      { name: "마르크트할", nameEn: "Markthal", description: "거대한 아치형 건물 안에 식품 시장과 레스토랑이 들어선 미식 명소.", category: "시장", tip: "천장의 거대한 벽화 '풍요의 뿔'이 인상적입니다." },
      { name: "에라스무스 다리", nameEn: "Erasmus Bridge", description: "마스강 위의 백조 모양 사장교로 로테르담의 상징.", category: "랜드마크" },
      { name: "보이만스 반 뵈닝언 미술관 창고", nameEn: "Depot Boijmans Van Beuningen", description: "세계 최초의 공개형 미술품 수장고 건물.", category: "미술관", tip: "옥상 테라스에서 로테르담 시내 전경을 감상하세요." },
      { name: "유로마스트", nameEn: "Euromast", description: "185m 높이의 전망탑으로 로테르담 최고의 파노라마 뷰.", category: "전망대" },
    ],
    dayTrips: [
      { name: "킨더다이크", nameEn: "Kinderdijk", description: "19기의 풍차가 늘어선 UNESCO 세계유산 풍차 마을.", travelTime: "수상버스 약 35분", gradient: "from-green-400 to-teal-700" },
      { name: "델프트", nameEn: "Delft", description: "델프트 블루 도자기와 베르메르의 고향.", travelTime: "기차 약 12분", gradient: "from-blue-400 to-sky-700" },
    ],
    localFood: [
      { name: "수리나메 로티", description: "로테르담 다문화의 상징, 수리나메식 커리 로티.", emoji: "🫓" },
      { name: "키벨링", description: "바삭한 대구 튀김, 항구 도시의 대표 간식.", emoji: "🐟" },
      { name: "파타트 스페셜", description: "감자튀김에 마요네즈, 커리 케첩, 다진 양파를 올린 것.", emoji: "🍟" },
    ],
    tips: [
      "로테르담 웰컴 카드로 대중교통과 주요 관광지 할인 혜택을 받으세요.",
      "수상택시로 마스강을 건너는 것도 특별한 경험입니다.",
      "매년 9월 세계 항구의 날(World Port Days)에 항구 투어가 무료입니다.",
      "현대 건축 투어는 도보로 시내 중심부에서 모두 가능합니다.",
    ],
  },
  "netherlands/south-holland/delft": {
    heroGradient: "from-blue-400 to-sky-700",
    description: "델프트 블루 도자기와 화가 베르메르의 고향. 운하를 따라 늘어선 아름다운 건물들과 신교회 탑에서 바라보는 전경이 인상적인 아늑한 대학 도시입니다.",
    bestTime: "4~9월",
    stayArea: "마르크트 광장 주변",
    transport: "도보 (구시가지 컴팩트) / 헤이그에서 트램 20분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "마르크트 광장을 중심으로 운하와 역사 건물이 어우러진 아늑한 지구.", highlights: ["마르크트 광장", "신교회", "구교회", "프린센호프 박물관"] },
    ],
    attractions: [
      { name: "로열 델프트", nameEn: "Royal Delft", description: "1653년부터 이어진 유일한 정통 델프트 블루 도자기 공장. 제작 과정을 견학할 수 있습니다.", category: "공방", tip: "직접 도자기에 그림을 그리는 체험도 가능합니다." },
      { name: "신교회", nameEn: "Nieuwe Kerk", description: "마르크트 광장에 우뚝 솟은 고딕 교회로 오라녜 왕가의 묘소.", category: "교회", tip: "376개 계단을 올라 전망대에서 델프트 전경을 감상하세요." },
      { name: "프린센호프 박물관", nameEn: "Prinsenhof Museum", description: "오라녜 공 빌렘 1세가 암살된 역사적 장소이자 델프트 역사 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "헤이그", nameEn: "The Hague", description: "마우리츠하위스와 스헤베닝언 해변의 행정 수도.", travelTime: "트램 약 20분", gradient: "from-blue-600 to-indigo-900" },
    ],
    localFood: [
      { name: "델프츠 브루하위스 맥주", description: "델프트 현지 양조장의 수제 맥주.", emoji: "🍺" },
      { name: "네덜란드 팬케이크", description: "얇고 큰 네덜란드식 팬케이크에 다양한 토핑.", emoji: "🥞" },
    ],
    tips: [
      "매주 목요일 마르크트 광장에서 꽃시장이 열립니다.",
      "로열 델프트는 반나절 정도 소요되므로 일정에 여유를 두세요.",
      "헤이그, 라이덴과 함께 남홀란드 삼각 코스로 묶어 방문하세요.",
    ],
  },
  "netherlands/south-holland/leiden": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "렘브란트의 출생지이자 네덜란드 최초의 대학 도시. 28km에 달하는 운하와 900개 이상의 기념 건물이 있으며, 라이덴 대학과 시볼트 하우스 등 학문 도시의 면모가 돋보입니다.",
    bestTime: "4~9월 (10월 3일: 라이덴 해방 축제)",
    stayArea: "시내 중심부 / 라펜부르크 운하 주변",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "라이덴 대학과 운하, 박물관이 밀집한 학문 도시의 중심.", highlights: ["라펜부르크 운하", "피터스 교회", "뷔르흐트 성채", "라이덴 대학교"] },
    ],
    attractions: [
      { name: "국립 고대유물 박물관", nameEn: "Rijksmuseum van Oudheden", description: "이집트 미라와 고대 유물을 소장한 네덜란드 최고의 고고학 박물관.", category: "박물관" },
      { name: "시볼트 하우스", nameEn: "SieboldHuis", description: "일본학의 아버지 시볼트의 수집품을 전시하는 일본 문화 박물관.", category: "박물관" },
      { name: "뷔르흐트 성채", nameEn: "Burcht van Leiden", description: "언덕 위의 중세 성채로 라이덴 시내를 360도 조망.", category: "성채", tip: "무료 입장, 일몰 시간이 특히 아름답습니다." },
    ],
    dayTrips: [
      { name: "큐켄호프 정원", nameEn: "Keukenhof Gardens", description: "세계 최대의 튤립 정원 (3월 말~5월 개장).", travelTime: "버스 약 30분", gradient: "from-pink-400 to-fuchsia-700" },
    ],
    localFood: [
      { name: "허치스팟", description: "감자와 당근을 으깨어 만든 전통 요리, 10월 3일 축제 음식.", emoji: "🥘" },
      { name: "라이덴 치즈", description: "커민 씨를 넣은 라이덴 특산 치즈.", emoji: "🧀" },
    ],
    tips: [
      "벽면 시(Wall Poems)를 찾아 다니는 도보 투어가 독특합니다.",
      "10월 3일 라이덴 해방 축제에는 허치스팟과 청어를 무료로 나눠줍니다.",
      "암스테르담에서 기차로 35분이면 도착합니다.",
    ],
  },
  "netherlands/south-holland/kinderdijk": {
    heroGradient: "from-green-400 to-teal-700",
    description: "19기의 풍차가 일렬로 늘어선 UNESCO 세계유산. 18세기에 건설된 배수용 풍차군으로, 네덜란드의 물과의 싸움 역사를 상징하는 가장 인상적인 풍경입니다.",
    bestTime: "4~10월 (풍차 내부 공개: 4~10월)",
    stayArea: "로테르담 숙소 (당일치기 추천)",
    transport: "로테르담에서 수상버스 약 35분",
    districts: [
      { name: "풍차 지구", nameEn: "Windmill Area", description: "알블라세르담 간척지에 19기의 풍차가 늘어선 세계유산 구역.", highlights: ["19기 풍차군", "풍차 내부 견학", "방문자 센터", "자전거·도보 산책로"] },
    ],
    attractions: [
      { name: "킨더다이크 풍차", nameEn: "Kinderdijk Windmills", description: "1740년경 건설된 19기의 배수 풍차군. 네덜란드에서 가장 상징적인 풍차 풍경입니다.", category: "세계유산", tip: "자전거를 빌려 풍차 사이를 달리는 것을 추천합니다." },
      { name: "방문자 센터", nameEn: "Visitor Centre", description: "킨더다이크의 역사와 물 관리 시스템을 소개하는 멀티미디어 전시.", category: "전시" },
      { name: "박물관 풍차", nameEn: "Museum Windmill", description: "풍차 내부를 직접 들어가 풍차지기의 생활을 체험할 수 있는 풍차.", category: "박물관" },
    ],
    dayTrips: [
      { name: "로테르담", nameEn: "Rotterdam", description: "현대 건축의 도시, 큐브하우스와 마르크트할.", travelTime: "수상버스 약 35분", gradient: "from-cyan-500 to-blue-800" },
    ],
    localFood: [
      { name: "스트롭와플", description: "캐러멜 시럽이 들어간 얇은 와플, 커피와 함께.", emoji: "🧇" },
      { name: "판넨쿠켄", description: "네덜란드식 팬케이크, 방문자 센터 근처 레스토랑에서.", emoji: "🥞" },
    ],
    tips: [
      "봄~가을 토요일 오후에 풍차 날개가 회전하는 모습을 볼 수 있습니다.",
      "자전거 대여로 풍차 사이를 달리는 것이 가장 좋은 감상법입니다.",
      "일몰 시간에 방문하면 황금빛 풍차 풍경을 촬영할 수 있습니다.",
    ],
  },

  // ===== UTRECHT & CENTRAL =====
  "netherlands/utrecht-central/utrecht": {
    heroGradient: "from-red-500 to-rose-800",
    description: "네덜란드에서 네 번째로 큰 도시이자 지리적 중심지. 독특한 2층 구조의 운하(와프)와 돔탑이 상징이며, 대학 도시 특유의 활기찬 분위기와 카페 문화가 매력적입니다.",
    bestTime: "4~10월",
    stayArea: "운하 지구 / 중앙역 주변",
    transport: "버스, 트램 / 도보·자전거 (시내 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "돔탑과 2층 구조 운하를 중심으로 한 역사 지구.", highlights: ["돔탑", "운하 와프", "돔 광장", "돔 교회"] },
      { name: "뮤지엄 지구", nameEn: "Museum Quarter", description: "중앙 박물관과 철도 박물관이 있는 문화 지구.", highlights: ["중앙 박물관", "철도 박물관", "미피 박물관"] },
    ],
    attractions: [
      { name: "돔탑", nameEn: "Dom Tower", description: "네덜란드에서 가장 높은 교회탑(112m)으로 465개 계단을 올라 위트레흐트 전경 조망.", category: "랜드마크", tip: "가이드 투어로만 입장 가능, 사전 예약 권장합니다." },
      { name: "운하 와프", nameEn: "Canal Wharves", description: "수면보다 낮은 독특한 2층 구조의 운하변으로 카페와 레스토랑이 즐비.", category: "운하", tip: "아우더흐라흐트(Oudegracht) 운하변 테라스에서 식사를 즐기세요." },
      { name: "미피 박물관", nameEn: "Miffy Museum", description: "딕 브루너의 캐릭터 미피(나인체)를 테마로 한 어린이 박물관.", category: "박물관" },
      { name: "철도 박물관", nameEn: "Railway Museum", description: "네덜란드 철도 역사를 체험하는 가족 친화적 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "아메르스포르트", nameEn: "Amersfoort", description: "중세 성벽이 남아있는 아기자기한 도시.", travelTime: "기차 약 15분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "위트레흐트 브루어리 맥주", description: "도심 수제 맥주 양조장의 신선한 맥주.", emoji: "🍺" },
      { name: "스펙쿨라스", description: "시나몬과 향신료가 들어간 네덜란드 전통 쿠키.", emoji: "🍪" },
      { name: "애플볼", description: "통사과를 파이 반죽으로 감싸 구운 네덜란드 디저트.", emoji: "🍎" },
    ],
    tips: [
      "암스테르담에서 기차로 27분이면 도착합니다.",
      "돔탑 투어는 영어 가이드 시간을 확인하세요.",
      "운하변 와프 테라스는 점심시간에 자리를 잡기 어려우니 일찍 방문하세요.",
      "자전거 대여로 시내를 돌아보는 것이 가장 효율적입니다.",
    ],
  },
  "netherlands/utrecht-central/amersfoort": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "중세 성벽과 성문이 잘 보존된 아기자기한 도시. 화가 몬드리안의 출생지이며, 아늑한 구시가지와 카페 문화가 매력적입니다.",
    bestTime: "4~9월",
    stayArea: "구시가지 (호프 광장 주변)",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "중세 성벽과 운하로 둘러싸인 아늑한 역사 지구.", highlights: ["코펠포르트", "호프 광장", "성모 탑", "몬드리안 하우스"] },
    ],
    attractions: [
      { name: "코펠포르트", nameEn: "Koppelpoort", description: "15세기 수문과 성문이 결합된 독특한 중세 방어 시설.", category: "역사" },
      { name: "몬드리안 하우스", nameEn: "Mondrian House", description: "추상 화가 피에트 몬드리안이 태어난 집을 복원한 박물관.", category: "박물관" },
      { name: "성모 탑", nameEn: "Onze Lieve Vrouwetoren", description: "98m 높이의 고딕 탑으로 아메르스포르트의 상징.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "위트레흐트", nameEn: "Utrecht", description: "돔탑과 운하 와프의 활기찬 대학 도시.", travelTime: "기차 약 15분", gradient: "from-red-500 to-rose-800" },
    ],
    localFood: [
      { name: "보스코펠 맥주", description: "아메르스포르트 인근 수도원 양조장의 트라피스트 맥주.", emoji: "🍺" },
      { name: "암스테르담스 위트스미터", description: "치즈, 햄, 달걀을 올린 네덜란드식 오픈 샌드위치.", emoji: "🍳" },
    ],
    tips: [
      "위트레흐트에서 기차로 15분, 당일치기로 적합합니다.",
      "구시가지 운하를 따라 도보로 2~3시간이면 충분합니다.",
      "토요일 호프 광장에서 열리는 시장을 놓치지 마세요.",
    ],
  },
  "netherlands/utrecht-central/gouda": {
    heroGradient: "from-yellow-400 to-amber-700",
    description: "세계적으로 유명한 하우다 치즈의 본고장. 매주 목요일 전통 치즈 시장이 열리며, 고딕 양식의 성 야곱 교회와 시청사가 아름다운 소도시입니다.",
    bestTime: "4~9월 (치즈 시장: 4~8월 매주 목요일)",
    stayArea: "마르크트 광장 주변",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "마르크트 광장과 시청사를 중심으로 한 치즈 도시의 핵심.", highlights: ["마르크트 광장", "시청사", "성 야곱 교회", "치즈 시장"] },
    ],
    attractions: [
      { name: "하우다 치즈 시장", nameEn: "Gouda Cheese Market", description: "4~8월 매주 목요일 아침 마르크트 광장에서 열리는 전통 치즈 거래 시장.", category: "시장", tip: "오전 10시~12시 30분, 전통 의상을 입은 상인들의 치즈 거래를 볼 수 있습니다." },
      { name: "성 야곱 교회", nameEn: "Sint-Janskerk", description: "네덜란드에서 가장 긴 교회(123m)로 16세기 스테인드글라스가 유명.", category: "교회" },
      { name: "하우다 시청사", nameEn: "Gouda Town Hall", description: "15세기에 지어진 고딕 양식의 시청사로 마르크트 광장의 중심.", category: "건축" },
    ],
    dayTrips: [
      { name: "위트레흐트", nameEn: "Utrecht", description: "돔탑과 독특한 2층 운하의 활기찬 도시.", travelTime: "기차 약 20분", gradient: "from-red-500 to-rose-800" },
    ],
    localFood: [
      { name: "하우다 치즈", description: "숙성 기간에 따라 다양한 맛을 즐기는 네덜란드 대표 치즈.", emoji: "🧀" },
      { name: "시럽 와플", description: "하우다식 스트롭와플, 갓 구워 따뜻한 것이 최고.", emoji: "🧇" },
    ],
    tips: [
      "치즈 시장은 4~8월 매주 목요일 오전에만 열립니다.",
      "12월에는 촛불 축제(Gouda bij Kaarslicht)로 마을 전체가 촛불로 빛납니다.",
      "암스테르담에서 기차로 약 1시간이면 도착합니다.",
    ],
  },

  // ===== NORTH & FRIESLAND =====
  "netherlands/north-friesland/groningen": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "네덜란드 북부의 대학 도시. 인구의 25%가 대학생으로 젊고 활기찬 분위기가 넘치며, 흐로닝어 박물관과 마르티니 탑이 도시의 상징입니다.",
    bestTime: "5~9월",
    stayArea: "그로터 마르크트 광장 주변",
    transport: "버스, 자전거 (네덜란드에서 자전거 이용률 1위 도시)",
    districts: [
      { name: "시내 중심부", nameEn: "City Centre", description: "그로터 마르크트와 비스마르크트를 중심으로 한 활기찬 상업 지구.", highlights: ["그로터 마르크트", "마르티니 탑", "비스마르크트", "대학 건물군"] },
    ],
    attractions: [
      { name: "흐로닝어 박물관", nameEn: "Groninger Museum", description: "알레산드로 멘디니가 설계한 독특한 외관의 현대미술 박물관.", category: "미술관", tip: "건물 자체가 예술 작품이니 외관도 꼭 감상하세요." },
      { name: "마르티니 탑", nameEn: "Martinitoren", description: "97m 높이의 중세 교회탑으로 흐로닝언 시내 전경 조망.", category: "랜드마크" },
      { name: "프린센호프 정원", nameEn: "Prinsentuin", description: "17세기 르네상스 양식의 숨겨진 정원.", category: "정원", tip: "무료 입장, 장미가 피는 여름이 최적입니다." },
    ],
    dayTrips: [
      { name: "바덴 제도", nameEn: "Wadden Islands", description: "유네스코 세계유산 바덴해의 섬들, 갯벌 걷기 체험.", travelTime: "버스+페리 약 2.5시간", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "머스터드 수프", description: "흐로닝언 전통 겨자 수프, 겨울에 특히 인기.", emoji: "🥣" },
      { name: "에이어발", description: "삶은 달걀을 고기로 감싸 튀긴 네덜란드식 스카치 에그.", emoji: "🥚" },
    ],
    tips: [
      "암스테르담에서 기차로 약 2시간 10분 소요됩니다.",
      "네덜란드에서 자전거 인프라가 가장 좋은 도시로 자전거 대여를 추천합니다.",
      "매주 화요일, 금요일, 토요일에 비스마르크트에서 시장이 열립니다.",
    ],
  },
  "netherlands/north-friesland/leeuwarden": {
    heroGradient: "from-purple-500 to-violet-800",
    description: "프리슬란트주의 주도이자 2018년 유럽 문화 수도. 프리슬란트 고유의 언어와 문화를 간직한 도시로, 마타 하리의 출생지이기도 합니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 중심부",
    transport: "도보, 버스",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "올더호프 궁전과 운하를 중심으로 한 프리슬란트의 역사 지구.", highlights: ["올더호프 탑", "프리슬란트 박물관", "마타 하리 동상"] },
    ],
    attractions: [
      { name: "프리슬란트 박물관", nameEn: "Fries Museum", description: "프리슬란트 지방의 역사, 예술, 문화를 소개하는 종합 박물관.", category: "박물관" },
      { name: "올더호프 탑", nameEn: "Oldehove Tower", description: "건설 중 기울어진 '네덜란드의 피사의 사탑'으로 불리는 미완성 탑.", category: "랜드마크", tip: "탑 꼭대기에서 레이우아르던 전경을 볼 수 있습니다." },
      { name: "마타 하리 하우스", nameEn: "Mata Hari House", description: "제1차 세계대전 시기 유명 스파이 마타 하리의 출생지.", category: "역사" },
    ],
    dayTrips: [
      { name: "바덴 제도", nameEn: "Wadden Islands", description: "테르스헬링, 아멜란트 등 프리슬란트 해안의 섬들.", travelTime: "버스+페리 약 2시간", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "쉬케볼", description: "풍차 모양 초콜릿이 장식된 프리슬란트 전통 케이크.", emoji: "🎂" },
      { name: "수켈라데", description: "프리슬란트식 핫초콜릿, 진하고 풍부한 맛.", emoji: "☕" },
    ],
    tips: [
      "암스테르담에서 기차로 약 2시간 15분 소요됩니다.",
      "프리슬란트어 간판을 볼 수 있는 이중 언어 지역입니다.",
      "매년 여름 프리슬란트 11개 도시 도보 투어 이벤트가 열립니다.",
    ],
  },
  "netherlands/north-friesland/wadden-islands": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "유네스코 세계유산 바덴해에 위치한 프리슬란트 섬들. 텍셀, 테르스헬링, 아멜란트 등 자연 그대로의 해변과 갯벌, 자전거 도로가 펼쳐진 네덜란드의 숨겨진 보석입니다.",
    bestTime: "5~9월",
    stayArea: "텍셀 또는 테르스헬링 (섬 내 숙박 추천)",
    transport: "페리 + 섬 내 자전거",
    districts: [
      { name: "텍셀", nameEn: "Texel", description: "바덴 제도에서 가장 큰 섬으로 양 목장, 해변, 자연보호구역이 풍부.", highlights: ["텍셀 해변", "에코마레 자연센터", "양 농장", "텍셀 맥주 양조장"] },
      { name: "테르스헬링", nameEn: "Terschelling", description: "크랜베리와 등대로 유명한 아름다운 자연 섬.", highlights: ["브란다리스 등대", "크랜베리 축제", "보스플라이트 해변"] },
    ],
    attractions: [
      { name: "갯벌 걷기", nameEn: "Wadlopen", description: "바덴해 갯벌 위를 걷는 독특한 체험 활동.", category: "체험", tip: "반드시 공인 가이드와 함께 참가하세요. 조류에 따라 위험할 수 있습니다." },
      { name: "에코마레", nameEn: "Ecomare", description: "물범 보호소와 바덴해 자연 센터가 결합된 교육 시설.", category: "자연" },
      { name: "브란다리스 등대", nameEn: "Brandaris Lighthouse", description: "네덜란드에서 가장 오래된 등대(1594년)로 테르스헬링의 상징.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "흐로닝언", nameEn: "Groningen", description: "네덜란드 북부의 활기찬 대학 도시.", travelTime: "페리+버스 약 2.5시간", gradient: "from-emerald-500 to-green-800" },
    ],
    localFood: [
      { name: "텍셀 양고기", description: "해풍을 맞고 자란 텍셀산 양으로 만든 요리.", emoji: "🐑" },
      { name: "크랜베리 디저트", description: "테르스헬링 특산 크랜베리로 만든 디저트.", emoji: "🍒" },
    ],
    tips: [
      "페리 예약은 성수기에 미리 해두세요, 특히 차량 탑승 시.",
      "섬에서는 자전거가 주요 교통수단이니 도착 즉시 대여하세요.",
      "갯벌 걷기(Wadlopen)는 체력이 필요하니 운동화와 여벌 옷을 준비하세요.",
    ],
  },

  // ===== SOUTHERN NETHERLANDS =====
  "netherlands/southern-netherlands/maastricht": {
    heroGradient: "from-violet-500 to-purple-800",
    description: "네덜란드 최남단의 도시로 벨기에, 독일 국경에 인접. 부르고뉴 문화의 영향을 받은 미식, 성 피터스베르크 동굴, 서점으로 변신한 도미니카넨 교회가 매력적입니다.",
    bestTime: "4~10월 (카니발: 2~3월)",
    stayArea: "프라이트호프 광장 / 비커 지구",
    transport: "도보 (구시가지 컴팩트) / 시내 버스",
    districts: [
      { name: "비커", nameEn: "Wyck", description: "마스강 동쪽의 트렌디한 지구로 부티크, 카페, 레스토랑이 밀집.", highlights: ["셀렉시즈 도미니카넨 서점", "비커 쇼핑거리", "마스강변 산책로"] },
      { name: "프라이트호프", nameEn: "Vrijthof", description: "마스트리흐트의 중심 광장으로 성 세르바스 대성당과 카페 테라스.", highlights: ["프라이트호프 광장", "성 세르바스 대성당", "성 얀 교회"] },
    ],
    attractions: [
      { name: "도미니카넨 서점", nameEn: "Dominicanen Bookshop", description: "13세기 도미니크 교단 교회를 개조한 세계에서 가장 아름다운 서점.", category: "서점", tip: "카페에서 커피를 마시며 교회 천장을 감상하세요." },
      { name: "성 피터스베르크 동굴", nameEn: "St. Pietersberg Caves", description: "2,000년에 걸쳐 석회암을 채굴하며 만들어진 미로 같은 지하 동굴 시스템.", category: "동굴", tip: "가이드 투어로만 입장 가능, 동굴 내부는 연중 10°C이니 겉옷을 준비하세요." },
      { name: "성 세르바스 대성당", nameEn: "Basilica of Saint Servatius", description: "네덜란드에서 가장 오래된 교회로 로마네스크 양식의 걸작.", category: "교회" },
      { name: "마스강변", nameEn: "Maas River Banks", description: "마스강을 따라 펼쳐지는 산책로와 카페 테라스.", category: "산책" },
    ],
    dayTrips: [
      { name: "아헨", nameEn: "Aachen", description: "카를 대제의 도시, 독일 국경 바로 너머의 온천 도시.", travelTime: "버스 약 30분", gradient: "from-blue-400 to-indigo-700" },
      { name: "리에주", nameEn: "Liège", description: "벨기에 왈로니아 지방의 와플과 맥주의 도시.", travelTime: "기차 약 30분", gradient: "from-red-400 to-rose-700" },
    ],
    localFood: [
      { name: "플라이", description: "마스트리흐트 전통 과일 파이, 특히 체리와 살구 맛이 유명.", emoji: "🥧" },
      { name: "조어블레이", description: "맥주로 조린 스튜, 감자튀김과 함께.", emoji: "🍲" },
      { name: "림뷔르흐 치즈", description: "강한 향의 림뷔르흐 지방 전통 워시드 린드 치즈.", emoji: "🧀" },
    ],
    tips: [
      "카니발 시즌(2~3월)에는 도시 전체가 축제 분위기입니다.",
      "벨기에, 독일과의 삼국 국경 지점(Drielandenpunt) 방문도 추천합니다.",
      "부르고뉴 문화의 영향으로 미식 수준이 높으니 레스토랑을 미리 예약하세요.",
      "암스테르담에서 기차로 약 2시간 30분 소요됩니다.",
    ],
  },
  "netherlands/southern-netherlands/eindhoven": {
    heroGradient: "from-orange-500 to-red-700",
    description: "필립스의 고향이자 네덜란드의 디자인·테크 수도. 스트레이프-S 지구의 산업 유산과 현대 디자인이 공존하며, 매년 10월 글로우 빛 축제가 열립니다.",
    bestTime: "연중 (글로우 축제: 10~11월)",
    stayArea: "시내 중심부 / 스트레이프-S 주변",
    transport: "버스, 자전거",
    districts: [
      { name: "스트레이프-S", nameEn: "Strijp-S", description: "옛 필립스 공장 부지를 재개발한 문화·디자인 지구.", highlights: ["어반 스포츠 파크", "라디오 로얄", "빈티지 마켓", "디자인 스튜디오"] },
      { name: "시내 중심부", nameEn: "City Centre", description: "쇼핑과 레스토랑이 밀집한 에인트호번의 상업 중심지.", highlights: ["18 셉템버 광장", "필립스 박물관", "반 아베 미술관"] },
    ],
    attractions: [
      { name: "반 아베 미술관", nameEn: "Van Abbemuseum", description: "현대 미술 컬렉션으로 유명한 네덜란드 주요 현대미술관.", category: "미술관" },
      { name: "필립스 박물관", nameEn: "Philips Museum", description: "필립스의 역사와 혁신을 소개하는 기업 박물관.", category: "박물관" },
      { name: "글로우 에인트호번", nameEn: "GLOW Eindhoven", description: "매년 10~11월 도시 전체를 빛으로 물들이는 국제 빛 축제.", category: "축제", tip: "무료 이벤트로, 도보로 루트를 따라 감상합니다." },
    ],
    dayTrips: [
      { name: "스헤르토헨보스", nameEn: "'s-Hertogenbosch", description: "히에로니무스 보스의 고향, 고딕 대성당과 지하 수로.", travelTime: "기차 약 25분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "보수체 볼", description: "초콜릿으로 감싼 크림 페이스트리, 스헤르토헨보스 특산품이지만 에인트호번에서도 인기.", emoji: "🍫" },
      { name: "브라반트 소시지 롤", description: "프리칸델 브루제(소시지 빵), 남부 네덜란드 간식.", emoji: "🌭" },
    ],
    tips: [
      "글로우 축제(10~11월)에 맞춰 방문하면 독특한 경험을 할 수 있습니다.",
      "스트레이프-S 지구는 주말에 특히 활기찹니다.",
      "디자인에 관심이 있다면 더치 디자인 위크(10월)를 놓치지 마세요.",
    ],
  },
  "netherlands/southern-netherlands/s-hertogenbosch": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "히에로니무스 보스의 고향으로 고딕 양식의 성 얀 대성당과 지하 수로(빈넨디에즈)가 독특한 도시. 보수체 볼(초콜릿 페이스트리)의 원조 도시입니다.",
    bestTime: "4~10월 (카니발: 2~3월)",
    stayArea: "마르크트 광장 주변",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "고딕 대성당과 지하 수로를 중심으로 한 역사 지구.", highlights: ["성 얀 대성당", "빈넨디에즈 보트 투어", "마르크트 광장", "보스 미술관"] },
    ],
    attractions: [
      { name: "성 얀 대성당", nameEn: "St. John's Cathedral", description: "네덜란드에서 가장 아름다운 고딕 대성당으로 천사상 조각이 유명.", category: "성당" },
      { name: "빈넨디에즈 보트 투어", nameEn: "Binnendieze Boat Tour", description: "건물 아래 지하 수로를 보트로 탐험하는 독특한 투어.", category: "투어", tip: "사전 예약 필수, 영어 투어도 가능합니다." },
      { name: "히에로니무스 보스 아트센터", nameEn: "Jheronimus Bosch Art Center", description: "중세 화가 히에로니무스 보스의 작품 세계를 소개하는 전시 공간.", category: "미술관" },
    ],
    dayTrips: [
      { name: "에인트호번", nameEn: "Eindhoven", description: "디자인과 테크놀로지의 도시.", travelTime: "기차 약 25분", gradient: "from-orange-500 to-red-700" },
    ],
    localFood: [
      { name: "보수체 볼", description: "초콜릿으로 감싼 크림 페이스트리, 스헤르토헨보스의 대표 디저트.", emoji: "🍫" },
      { name: "브라반트 커피", description: "커피에 브랜디와 휘핑크림을 올린 남부 네덜란드 전통 커피.", emoji: "☕" },
    ],
    tips: [
      "보수체 볼은 잔 드 그로트(Jan de Groot) 카페가 원조입니다.",
      "빈넨디에즈 보트 투어는 성수기에 빨리 매진되니 미리 예약하세요.",
      "카니발 시즌에는 도시 이름이 '오에텔동크(Oeteldonk)'로 바뀝니다.",
    ],
  },
};

export const netherlandsAttractionDetails: Record<string, AttractionDetail> = {
  // ===== AMSTERDAM =====
  "netherlands/amsterdam-north-holland/amsterdam/rijksmuseum": {
    heroGradient: "from-orange-500 to-red-700",
    description: "네덜란드 황금시대의 걸작을 소장한 세계적인 미술관. 렘브란트의 '야경', 베르메르의 '우유를 따르는 여인' 등 8,000점 이상의 미술품과 공예품을 전시합니다.",
    history: "1800년 헤이그에서 설립되어 1808년 암스테르담으로 이전. 현재 건물은 1885년 피에르 카위퍼스가 설계한 네오고딕·르네상스 양식으로, 2013년 10년간의 대규모 리모델링을 거쳐 재개관했습니다.",
    visitInfo: {
      hours: "매일 09:00~17:00",
      admission: "성인 €22.50, 18세 이하 무료",
      address: "Museumstraat 1, 1071 XX Amsterdam",
      website: "https://www.rijksmuseum.nl",
    },
    highlights: [
      "렘브란트 '야경' - 2층 명예의 갤러리 중앙에 전시",
      "베르메르 '우유를 따르는 여인' - 섬세한 빛의 표현",
      "델프트 블루 도자기 컬렉션",
      "도서관 열람실 - 건물 자체의 건축미",
      "정원 - 무료 개방, 조각 작품 감상",
    ],
    nearbyAttractions: [
      "반 고흐 미술관 (도보 3분)",
      "시립미술관 (도보 5분)",
      "콘세르트헤바우 (도보 5분)",
      "본델 공원 (도보 10분)",
    ],
    photoTips: "건물 정면의 I amsterdam 사인 앞과 건물 통로 아래에서 대칭 구도 촬영이 인상적입니다.",
    tips: [
      "온라인 사전 예약이 필수이며, 오전 9시 개관 직후가 가장 여유롭습니다.",
      "뮤지엄카드(Museumkaart) 소지자는 무료 입장합니다.",
      "오디오 가이드(한국어 포함)는 무료로 제공됩니다.",
      "하이라이트만 보려면 2시간, 전체 관람은 반나절이 필요합니다.",
    ],
  },
  "netherlands/amsterdam-north-holland/amsterdam/anne-frank-house": {
    heroGradient: "from-gray-600 to-gray-900",
    description: "제2차 세계대전 당시 유대인 소녀 안네 프랑크 가족이 2년간 은신했던 실제 공간. 안네의 일기에 담긴 이야기가 살아 숨 쉬는 가슴 아프면서도 의미 깊은 역사 박물관입니다.",
    history: "1942~1944년 프랑크 가족과 4명의 동거인이 이 건물 뒤편 비밀 별관에서 은신 생활을 했습니다. 1960년 박물관으로 개관하여 전 세계에서 연간 130만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "매일 09:00~22:00 (시즌에 따라 변동)",
      admission: "성인 €16, 10~17세 €7, 9세 이하 €1",
      address: "Prinsengracht 263-267, 1016 GV Amsterdam",
      website: "https://www.annefrank.org",
    },
    highlights: [
      "회전 책장 뒤 비밀 입구 - 은신처 접근 통로",
      "안네의 방 - 벽에 붙인 사진과 포스터가 그대로",
      "안네 프랑크의 실제 일기장 원본",
      "비밀 별관(Achterhuis)의 좁은 생활 공간",
    ],
    nearbyAttractions: [
      "서교회(Westerkerk) (바로 옆)",
      "요르단 운하 지구 (도보 1분)",
      "9거리 쇼핑 지구 (도보 5분)",
    ],
    photoTips: "박물관 내부는 촬영이 금지됩니다. 외관과 프린센흐라흐트 운하를 배경으로 촬영하세요.",
    tips: [
      "티켓은 6주 전 온라인에서만 판매되며, 발매 즉시 매진됩니다.",
      "화요일에 소량의 당일 티켓이 추가 발매되기도 합니다.",
      "관람 시간은 약 1시간이며, 내부 사진 촬영은 금지입니다.",
      "방문 전 안네 프랑크의 일기를 읽으면 더 깊은 감동을 받습니다.",
    ],
  },
  "netherlands/amsterdam-north-holland/amsterdam/van-gogh-museum": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "빈센트 반 고흐의 작품 200점과 편지 700통 이상을 소장한 세계 최대의 반 고흐 컬렉션. '해바라기', '아몬드 꽃', '침실' 등 시기별 작품 변화를 한눈에 볼 수 있습니다.",
    history: "1973년 반 고흐의 조카 빌렘(동생 테오의 아들)이 가족 소장품을 기증하며 개관. 헤리트 리트벨트가 설계한 본관과 구로사와 기쇼가 설계한 신관으로 구성됩니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (금요일 ~21:00)",
      admission: "성인 €20, 18세 이하 무료",
      address: "Museumplein 6, 1071 DJ Amsterdam",
      website: "https://www.vangoghmuseum.nl",
    },
    highlights: [
      "'해바라기' - 반 고흐의 가장 상징적인 작품",
      "'아몬드 꽃' - 조카의 탄생을 축하하며 그린 작품",
      "'침실' - 아를 시절의 대표작",
      "'감자 먹는 사람들' - 초기 어두운 시기의 걸작",
      "동생 테오와의 서신 - 예술가의 내면 세계",
    ],
    nearbyAttractions: [
      "국립미술관 (도보 3분)",
      "시립미술관 (도보 2분)",
      "콘세르트헤바우 (도보 5분)",
      "뮤지엄 광장 (바로 앞)",
    ],
    photoTips: "미술관 내부는 플래시 없이 촬영 가능합니다. 뮤지엄 광장에서 건물 외관과 함께 촬영하세요.",
    tips: [
      "시간대별 입장이므로 반드시 온라인 사전 예약이 필요합니다.",
      "금요일 저녁 연장 개관 시 라이브 음악과 특별 이벤트가 있습니다.",
      "무료 멀티미디어 가이드(한국어 포함)를 꼭 이용하세요.",
      "3층부터 시작해 시간순으로 내려오며 관람하면 좋습니다.",
    ],
  },
  "netherlands/amsterdam-north-holland/amsterdam/jordaan-canal-district": {
    heroGradient: "from-teal-500 to-emerald-700",
    description: "프린센흐라흐트, 헤렌흐라흐트, 케이저스흐라흐트 세 주요 운하가 만드는 동심원 형태의 17세기 운하 벨트. 2010년 유네스코 세계유산에 등재된 암스테르담의 상징적 경관입니다.",
    history: "17세기 네덜란드 황금시대에 도시 확장 계획으로 건설된 운하 체계. 원래 노동자 지구였던 요르단은 현재 암스테르담에서 가장 매력적인 주거·문화 지구로 변모했습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 공간)",
      admission: "무료 (운하 보트 투어: €14~€18)",
      address: "Jordaan, Amsterdam (Prinsengracht 일대)",
    },
    highlights: [
      "프린센흐라흐트 운하 - 안네 프랑크의 집이 위치한 운하",
      "헤렌흐라흐트 황금 굽이 - 가장 아름다운 저택들이 늘어선 구간",
      "9거리(De Negen Straatjes) - 부티크와 카페가 밀집한 쇼핑 거리",
      "노르더마르크트 - 월요일 벼룩시장과 토요일 농산물 시장",
    ],
    nearbyAttractions: [
      "안네 프랑크의 집 (요르단 내)",
      "서교회(Westerkerk) (요르단 내)",
      "담 광장 (도보 10분)",
      "뮤지엄 광장 (도보 15분)",
    ],
    photoTips: "운하 위 다리에서 좌우 대칭으로 촬영하면 인상적입니다. 저녁 조명 시간이 가장 아름답습니다.",
    tips: [
      "운하 보트 투어는 여러 업체가 있으니 가격을 비교하세요.",
      "자전거를 빌려 운하를 따라 달리는 것도 좋은 방법입니다.",
      "노르더마르크트 월요일 벼룩시장은 오전에 방문하세요.",
      "운하변 카페 테라스에서 여유롭게 앉아 사람 구경을 즐기세요.",
    ],
  },
  "netherlands/amsterdam-north-holland/amsterdam/dam-square-royal-palace": {
    heroGradient: "from-amber-500 to-yellow-700",
    description: "암스테르담의 중심 광장이자 도시의 발상지. 17세기에 시청사로 건설된 웅장한 왕궁과 신교회, 전쟁기념비가 자리한 네덜란드의 심장부입니다.",
    history: "13세기 암스텔강에 댐(dam)을 쌓으며 형성된 광장으로, 도시 이름 'Amsterdam'의 어원입니다. 왕궁은 1655년 시청사로 건설되어 나폴레옹 시대에 궁전으로 전환되었습니다.",
    visitInfo: {
      hours: "매일 10:00~17:00 (왕궁, 왕실 행사 시 휴관)",
      admission: "왕궁: 성인 €12.50, 18세 이하 무료",
      address: "Dam, 1012 NP Amsterdam",
      website: "https://www.paleisamsterdam.nl",
    },
    highlights: [
      "왕궁 시민의 홀 - 대리석 바닥에 세계 지도가 새겨진 웅장한 공간",
      "왕궁 천장화와 조각 장식",
      "국립 전쟁기념비 - 매년 5월 4일 추모식",
      "신교회(Nieuwe Kerk) - 왕실 대관식 장소이자 전시 공간",
    ],
    nearbyAttractions: [
      "칼베르 거리 쇼핑 (바로 옆)",
      "마담 투소 (바로 옆)",
      "요르단 운하 지구 (도보 10분)",
      "홍등가(De Wallen) (도보 5분)",
    ],
    photoTips: "왕궁 전면을 광각으로 촬영하거나, 전쟁기념비에서 광장 전체를 배경으로 담으세요.",
    tips: [
      "왕궁은 왕실 행사 시 임시 휴관하니 방문 전 일정을 확인하세요.",
      "담 광장 주변은 소매치기가 많으니 소지품에 주의하세요.",
      "신교회는 별도 입장료로 특별전시를 관람할 수 있습니다.",
      "12월에는 광장에 대형 크리스마스 트리가 설치됩니다.",
    ],
  },

  // ===== ROTTERDAM =====
  "netherlands/south-holland/rotterdam/cube-houses": {
    heroGradient: "from-yellow-400 to-orange-600",
    description: "건축가 피에트 블롬이 1984년 설계한 45도 기울어진 큐브형 주거 건물군. 38개의 큐브가 나무 숲을 형상화하며, 로테르담 혁신 건축의 상징입니다.",
    history: "피에트 블롬이 '도시 위의 숲' 컨셉으로 설계했으며, 각 큐브는 나무를 상징합니다. 1984년 완공되어 현재도 실제 주거 공간으로 사용되고 있습니다.",
    visitInfo: {
      hours: "쇼큐브: 매일 10:00~17:00",
      admission: "쇼큐브: 성인 €3, 4~12세 €1.50",
      address: "Overblaak 70, 3011 MH Rotterdam",
      website: "https://www.kubuswoning.nl",
    },
    highlights: [
      "쇼큐브(Show Cube) - 가구가 배치된 큐브 내부 체험",
      "기울어진 벽과 삼각형 창문의 독특한 실내 구조",
      "블라크 역에서 바라본 큐브하우스 전체 모습",
      "스테이큐브 - 큐브하우스에서 실제 숙박 가능한 호스텔",
    ],
    nearbyAttractions: [
      "마르크트할 (바로 옆)",
      "블라크 역 (바로 옆)",
      "구항구(Oude Haven) (도보 2분)",
      "에라스무스 다리 (도보 15분)",
    ],
    photoTips: "블라크 역 방향에서 올려다보는 각도가 가장 인상적입니다. 광각 렌즈 사용을 추천합니다.",
    tips: [
      "쇼큐브 관람은 15~20분이면 충분합니다.",
      "큐브하우스 안에서 실제로 숙박할 수 있는 호스텔(Stayokay)이 있습니다.",
      "마르크트할과 함께 방문하면 효율적입니다.",
    ],
  },
  "netherlands/south-holland/rotterdam/markthal": {
    heroGradient: "from-rose-500 to-pink-800",
    description: "2014년 개장한 거대한 아치형 건물로 내부에 식품 시장과 레스토랑이 들어선 미식 명소. 천장의 11,000㎡ 벽화 '풍요의 뿔'이 압도적인 인상을 줍니다.",
    history: "건축사무소 MVRDV가 설계하여 2014년 10월 개장. 아치형 건물의 양쪽 벽면은 228세대의 아파트이며, 내부에 100개 이상의 식품 상점과 레스토랑이 입점해 있습니다.",
    visitInfo: {
      hours: "월~토 10:00~20:00, 일 12:00~18:00",
      admission: "무료 (개별 음식·상품 구매)",
      address: "Dominee Jan Scharpstraat 298, 3011 GZ Rotterdam",
      website: "https://www.markthal.nl",
    },
    highlights: [
      "'풍요의 뿔(Horn of Plenty)' 천장 벽화 - 과일, 꽃, 곤충의 거대한 디지털 아트",
      "세계 각국 음식을 맛볼 수 있는 100개 이상의 상점",
      "신선한 네덜란드 치즈와 해산물 가판대",
      "건물 외관의 유리 파사드와 독특한 아치 구조",
    ],
    nearbyAttractions: [
      "큐브하우스 (바로 옆)",
      "블라크 역 (도보 2분)",
      "성 라우렌스 교회 (도보 3분)",
      "구항구(Oude Haven) (도보 3분)",
    ],
    photoTips: "내부에서 천장 벽화를 올려다보며 촬영하세요. 광각 렌즈로 아치 전체를 담을 수 있습니다.",
    tips: [
      "점심시간은 매우 혼잡하니 오전이나 오후 늦게 방문하세요.",
      "지하에는 고고학 유적 전시가 있어 무료로 관람 가능합니다.",
      "2층 테라스에서 시장 전체를 내려다볼 수 있습니다.",
    ],
  },
  "netherlands/south-holland/rotterdam/erasmus-bridge": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "마스강 위에 놓인 로테르담의 상징적인 사장교. '백조(De Zwaan)'라는 별명의 139m 비대칭 파일론이 인상적이며, 야간 조명이 특히 아름답습니다.",
    history: "건축가 벤 판 베르켈이 설계하여 1996년 개통. 총 길이 802m의 사장교로, 로테르담 남북을 연결하며 도시 재개발의 상징이 되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (보행자·차량 통행)",
      admission: "무료",
      address: "Erasmusbrug, 3011 BN Rotterdam",
    },
    highlights: [
      "139m 비대칭 파일론 '백조'의 우아한 곡선",
      "야간 LED 조명으로 빛나는 다리",
      "코프 판 자위드 방향의 스카이라인 전망",
      "매년 새해 불꽃놀이의 배경",
    ],
    nearbyAttractions: [
      "코프 판 자위드 (다리 남쪽)",
      "호텔 뉴욕 (도보 10분)",
      "빌럼스부르크 지구 (도보 15분)",
      "큐브하우스 (도보 15분)",
    ],
    photoTips: "남쪽 코프 판 자위드에서 북쪽을 향해 촬영하면 다리와 시내 스카이라인을 함께 담을 수 있습니다. 야경이 특히 추천됩니다.",
    tips: [
      "다리 위를 도보로 건너면 약 15분 소요됩니다.",
      "야간 조명이 아름다우니 저녁 산책을 추천합니다.",
      "수상택시로 다리 아래를 지나는 것도 독특한 경험입니다.",
    ],
  },

  // ===== THE HAGUE =====
  "netherlands/south-holland/the-hague/mauritshuis": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "베르메르의 '진주 귀걸이를 한 소녀', 렘브란트의 '튈프 박사의 해부학 강의' 등 네덜란드 황금시대 걸작을 소장한 왕립 미술관. 소규모이지만 밀도 높은 컬렉션이 매력적입니다.",
    history: "17세기 요한 마우리츠 왕자의 저택으로 건설되어 1822년 왕립 미술관으로 개관. 네덜란드 클래식 양식의 건물 자체도 예술 작품입니다.",
    visitInfo: {
      hours: "월 13:00~18:00, 화~일 10:00~18:00, 목 ~20:00",
      admission: "성인 €19, 18세 이하 무료",
      address: "Plein 29, 2511 CS Den Haag",
      website: "https://www.mauritshuis.nl",
    },
    highlights: [
      "베르메르 '진주 귀걸이를 한 소녀' - 네덜란드의 모나리자",
      "렘브란트 '튈프 박사의 해부학 강의'",
      "파브리티우스 '황금방울새'",
      "야콥 판 라위스달 등 네덜란드 풍경화 컬렉션",
    ],
    nearbyAttractions: [
      "비넨호프 국회의사당 (바로 옆)",
      "에셔 미술관 (도보 10분)",
      "파사지 쇼핑 아케이드 (도보 5분)",
    ],
    photoTips: "호프페이퍼(Hofvijver) 연못에서 마우리츠하위스와 비넨호프를 함께 담는 것이 인기 촬영 포인트입니다.",
    tips: [
      "규모가 작아 1~2시간이면 충분합니다.",
      "목요일 야간 개관 시 여유롭게 관람할 수 있습니다.",
      "뮤지엄카드 소지자 무료 입장합니다.",
      "비넨호프와 함께 방문하면 효율적입니다.",
    ],
  },
  "netherlands/south-holland/the-hague/scheveningen-beach": {
    heroGradient: "from-sky-400 to-blue-600",
    description: "북해에 면한 네덜란드 최대의 해변 리조트. 넓은 모래사장, 부두(Pier), 쿠어하우스 호텔이 어우러진 해변으로, 서핑과 해산물 레스토랑이 유명합니다.",
    history: "19세기부터 해변 리조트로 발전했으며, 1885년에 건설된 그랜드 호텔 아메라트 쿠어하우스는 스헤베닝언의 상징입니다. 현재 네덜란드에서 가장 인기 있는 해변 관광지입니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료 (개별 시설 이용료 별도)",
      address: "Scheveningen, Den Haag",
    },
    highlights: [
      "스헤베닝언 부두(Pier) - 번지점프와 집라인, 전망대",
      "쿠어하우스(Kurhaus) - 19세기 그랜드 호텔의 웅장한 외관",
      "해변 카페와 해산물 레스토랑",
      "서핑과 카이트서핑 포인트",
    ],
    nearbyAttractions: [
      "마드로담 (도보 15분)",
      "시라이프 수족관 (해변 인접)",
      "조각 미술관 (도보 10분)",
    ],
    photoTips: "부두에서 해변 전체를 조망하며 촬영하거나, 일몰 시 쿠어하우스를 배경으로 촬영하세요.",
    tips: [
      "헤이그 시내에서 트램 1번으로 15분이면 도착합니다.",
      "여름에는 해변 파티와 불꽃놀이 이벤트가 있습니다.",
      "겨울에도 해변 산책과 해산물 레스토랑 방문은 매력적입니다.",
    ],
  },

  // ===== DELFT =====
  "netherlands/south-holland/delft/royal-delft": {
    heroGradient: "from-blue-400 to-sky-700",
    description: "1653년부터 이어진 유일한 정통 델프트 블루 도자기 공장. 전통 방식의 도자기 제작 과정을 견학하고, 도자기 페인팅 체험과 쇼핑이 가능합니다.",
    history: "1653년 '데 포르셀라이너 플레스(De Porceleyne Fles)'라는 이름으로 설립. 한때 33개였던 델프트 도자기 공장 중 유일하게 현재까지 운영 중인 정통 공방입니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (11~3월: 월~토 09:00~17:00, 일 12:00~17:00)",
      admission: "성인 €16, 13~18세 €8, 12세 이하 무료",
      address: "Rotterdamseweg 196, 2628 AR Delft",
      website: "https://www.royaldelft.com",
    },
    highlights: [
      "도자기 제작 과정 시연 - 핸드페인팅 장인의 작업 관람",
      "역사 전시실 - 370년 역사의 델프트 블루 컬렉션",
      "페인팅 체험 - 직접 도자기에 그림 그리기",
      "쇼핑 - 정품 델프트 블루 도자기 구매",
    ],
    nearbyAttractions: [
      "마르크트 광장 (버스 또는 도보 20분)",
      "신교회 (도보 20분)",
      "프린센호프 박물관 (도보 20분)",
    ],
    photoTips: "도자기 페인팅 장인의 작업 모습을 클로즈업으로 촬영하면 인상적입니다.",
    tips: [
      "구시가지에서 약간 떨어져 있으니 버스나 자전거를 이용하세요.",
      "페인팅 체험은 별도 예약이 필요하며, 약 1시간 소요됩니다.",
      "정품 로열 델프트에는 뒷면에 고유 마크가 찍혀 있습니다.",
    ],
  },

  // ===== UTRECHT =====
  "netherlands/utrecht-central/utrecht/dom-tower": {
    heroGradient: "from-red-500 to-rose-800",
    description: "네덜란드에서 가장 높은 교회탑(112.32m)으로 위트레흐트의 상징. 465개 계단을 올라 네덜란드 중부의 광활한 평야를 한눈에 볼 수 있습니다.",
    history: "1321년부터 1382년까지 60년에 걸쳐 건설된 고딕 양식의 종탑. 원래 성 마르틴 대성당의 일부였으나, 1674년 대폭풍으로 교회 본당이 붕괴되어 탑만 홀로 남았습니다.",
    visitInfo: {
      hours: "매일 10:00~17:00 (시즌에 따라 변동)",
      admission: "성인 €15, 4~12세 €9",
      address: "Domplein 21, 3512 JC Utrecht",
      website: "https://www.domtoren.nl",
    },
    highlights: [
      "465개 계단을 올라 도달하는 최상층 전망대",
      "13개의 종으로 이루어진 카리용(종탑 악기)",
      "가이드 투어 중 중세 건축 이야기",
      "맑은 날 암스테르담까지 보이는 파노라마 뷰",
    ],
    nearbyAttractions: [
      "돔 광장 (바로 앞)",
      "돔 교회 (바로 옆)",
      "운하 와프 (도보 3분)",
      "위트레흐트 대학교 (도보 5분)",
    ],
    photoTips: "돔 광장에서 탑 전체를 올려다보며 촬영하거나, 운하변에서 탑을 배경으로 촬영하세요.",
    tips: [
      "가이드 투어로만 입장 가능하며 사전 예약을 권장합니다.",
      "계단이 좁고 가파르니 편한 신발을 착용하세요.",
      "영어 가이드 투어 시간을 확인하고 예약하세요.",
      "바람이 강한 날에는 상층부에서 체감 온도가 낮으니 겉옷을 준비하세요.",
    ],
  },
  "netherlands/utrecht-central/utrecht/canal-wharves": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "위트레흐트의 독특한 2층 구조 운하(와프). 수면보다 낮은 지하 층에 카페와 레스토랑이 들어서 있어, 운하 바로 옆에서 식사와 음료를 즐길 수 있는 네덜란드 유일의 공간입니다.",
    history: "12~13세기에 건설된 아우더흐라흐트(Oudegracht) 운하의 독특한 2층 구조. 원래 상품 하역을 위한 창고였던 지하 공간이 현재는 카페, 레스토랑, 부티크로 변신했습니다.",
    visitInfo: {
      hours: "24시간 개방 (개별 상점 영업시간 상이)",
      admission: "무료",
      address: "Oudegracht, 3511 Utrecht",
    },
    highlights: [
      "아우더흐라흐트 - 위트레흐트의 대표 운하",
      "수면 높이의 테라스 카페에서 식사",
      "운하변 산책로와 다리 풍경",
      "저녁 조명으로 빛나는 운하 야경",
    ],
    nearbyAttractions: [
      "돔탑 (도보 3분)",
      "돔 교회 (도보 5분)",
      "중앙 박물관 (도보 10분)",
      "미피 박물관 (도보 8분)",
    ],
    photoTips: "운하 위 다리에서 내려다보며 2층 구조를 함께 촬영하세요. 저녁 조명 시간이 가장 아름답습니다.",
    tips: [
      "날씨가 좋은 날 운하변 테라스에서 식사하는 것이 최고의 경험입니다.",
      "카누를 빌려 운하를 직접 노를 저어 돌아볼 수도 있습니다.",
      "주말에는 테라스 자리가 빨리 차니 일찍 방문하세요.",
    ],
  },

  // ===== MAASTRICHT =====
  "netherlands/southern-netherlands/maastricht/dominicanen-bookshop": {
    heroGradient: "from-violet-500 to-purple-800",
    description: "13세기 도미니크 교단의 고딕 교회를 개조한 서점. 높은 천장과 스테인드글라스 아래 책이 진열된 모습이 장관으로, '세계에서 가장 아름다운 서점'으로 선정되었습니다.",
    history: "1294년 도미니크 교단이 건설한 교회로, 나폴레옹 시대에 세속화된 후 창고, 자전거 보관소 등으로 사용되다 2006년 네덜란드 서점 체인 셀렉시즈(Selexyz)가 서점으로 개조했습니다.",
    visitInfo: {
      hours: "월 10:00~18:00, 화~토 09:00~18:00, 일 12:00~18:00",
      admission: "무료",
      address: "Dominicanerkerkstraat 1, 6211 CZ Maastricht",
      website: "https://www.libris.nl/dominicanen",
    },
    highlights: [
      "고딕 교회 천장 아래 3층 높이의 서가 타워",
      "14세기 프레스코화가 남아있는 천장",
      "제단이 있던 자리에 만든 카페",
      "영어·네덜란드어 서적과 아트 서적 컬렉션",
    ],
    nearbyAttractions: [
      "프라이트호프 광장 (도보 3분)",
      "성 세르바스 대성당 (도보 5분)",
      "마스강변 (도보 5분)",
    ],
    photoTips: "입구에서 서가 타워를 올려다보는 앵글이 가장 인상적입니다. 자연광이 들어오는 오전이 촬영에 좋습니다.",
    tips: [
      "커피를 마시며 교회 분위기를 즐기는 것이 핵심 경험입니다.",
      "일요일에도 영업하지만 12시부터이니 참고하세요.",
      "영어 서적 코너도 있으니 책 구매도 가능합니다.",
    ],
  },
  "netherlands/southern-netherlands/maastricht/st-pietersberg-caves": {
    heroGradient: "from-stone-500 to-gray-800",
    description: "2,000년에 걸쳐 석회암(머글)을 채굴하며 만들어진 미로 같은 지하 동굴 시스템. 총 20,000개 이상의 통로와 방이 있으며, 제2차 세계대전 때는 렘브란트의 '야경'을 숨겨둔 곳이기도 합니다.",
    history: "로마 시대부터 석회암(머글) 채굴이 시작되어 수 세기에 걸쳐 확장. 제2차 세계대전 중에는 시민 대피소와 미술품 보관소로 사용되었으며, 렘브란트의 '야경'도 이곳에 보관되었습니다.",
    visitInfo: {
      hours: "가이드 투어: 매일 (시즌별 시간 상이)",
      admission: "성인 €9.75, 4~11세 €7.25",
      address: "Luikerweg 71, 6212 NH Maastricht",
      website: "https://www.exploremaastricht.nl",
    },
    highlights: [
      "20,000개 이상의 통로와 방으로 이루어진 미로",
      "벽면에 남겨진 숯 그림과 역사적 메시지",
      "제2차 세계대전 대피소 흔적",
      "연중 10°C를 유지하는 동굴 내부 환경",
    ],
    nearbyAttractions: [
      "성 피터스베르크 요새 (인접)",
      "ENCI 채석장 자연공원 (인접)",
      "마스트리흐트 구시가지 (버스 15분)",
    ],
    photoTips: "동굴 내부는 어두우므로 플래시나 손전등 촬영이 필요합니다. 가이드가 포토 스팟을 안내해줍니다.",
    tips: [
      "반드시 가이드 투어로만 입장 가능하며 사전 예약이 권장됩니다.",
      "동굴 내부는 연중 10°C이므로 여름에도 따뜻한 겉옷을 준비하세요.",
      "편한 운동화를 착용하고, 폐소공포증이 있다면 미리 확인하세요.",
      "구시가지에서 약간 떨어져 있으니 버스나 자전거를 이용하세요.",
    ],
  },

  // ===== KINDERDIJK =====
  "netherlands/south-holland/kinderdijk/kinderdijk-windmills": {
    heroGradient: "from-green-400 to-teal-700",
    description: "1740년경 건설된 19기의 배수용 풍차가 일렬로 늘어선 유네스코 세계유산. 네덜란드의 물과의 싸움 역사를 상징하며, 가장 상징적인 풍차 풍경을 선사합니다.",
    history: "알블라세르 간척지의 수위를 관리하기 위해 1738~1740년에 건설. 풍차로 물을 퍼올려 간척지를 건조하게 유지하는 네덜란드 물 관리 기술의 걸작입니다. 1997년 유네스코 세계유산 등재.",
    visitInfo: {
      hours: "매일 09:00~17:30 (동절기 단축)",
      admission: "성인 €16, 4~12세 €6 (온라인 할인)",
      address: "Nederwaard 1, 2961 AS Kinderdijk",
      website: "https://www.kinderdijk.com",
    },
    highlights: [
      "19기 풍차가 일렬로 늘어선 유네스코 세계유산 풍경",
      "풍차 내부 견학 - 풍차지기의 생활 공간 체험",
      "자전거와 도보 산책로를 따라 감상",
      "보트 투어로 수상에서 바라보는 풍차",
    ],
    nearbyAttractions: [
      "로테르담 (수상버스 35분)",
      "도르드레흐트 (수상버스 25분)",
    ],
    photoTips: "일출과 일몰 시간에 풍차가 황금빛으로 물드는 장면이 가장 아름답습니다. 풍차 사이 수로를 따라 대칭 구도로 촬영하세요.",
    tips: [
      "로테르담에서 수상버스(Waterbus)로 접근하는 것이 가장 편리합니다.",
      "자전거를 빌려 풍차 사이를 달리는 것이 최고의 감상법입니다.",
      "봄~가을 토요일 오후에 풍차 날개가 회전하는 모습을 볼 수 있습니다.",
      "온라인 사전 예약 시 할인된 가격으로 입장 가능합니다.",
    ],
  },

  // ===== ZAANSE SCHANS =====
  "netherlands/amsterdam-north-holland/zaanse-schans/zaanse-schans-windmills": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "잔 강변에 위치한 야외 풍차 박물관 마을. 겨자, 페인트, 목재, 기름을 생산하는 실제 작동 풍차를 견학하고, 네덜란드 전통 생활을 체험할 수 있습니다.",
    history: "1960~70년대 잔 지역의 전통 풍차와 목조 가옥을 이 지역으로 이전·복원하여 조성한 야외 박물관. 과거 잔 강 유역에 600기 이상의 산업용 풍차가 있었던 역사를 보존합니다.",
    visitInfo: {
      hours: "마을: 매일 개방 / 풍차: 09:00~17:00 (시즌별 변동)",
      admission: "마을 입장 무료, 잔세스칸스 카드: 성인 €17.50",
      address: "Schansend 7, 1509 AW Zaandam",
      website: "https://www.dezaanseschans.nl",
    },
    highlights: [
      "겨자 풍차 'De Huisman' - 겨자 분쇄 과정 시연",
      "페인트 풍차 'De Kat' - 천연 안료 제조 시연",
      "목재 풍차 'Het Jonge Schaap' - 통나무 제재 시연",
      "나막신 공방과 치즈 농장 체험",
    ],
    nearbyAttractions: [
      "잔스 박물관 (마을 내)",
      "바커스 박물관 (마을 내)",
      "암스테르담 중앙역 (버스 40분)",
    ],
    photoTips: "잔 강 건너편에서 풍차 전체를 파노라마로 촬영하세요. 수면에 비치는 풍차 반영도 아름답습니다.",
    tips: [
      "잔세스칸스 카드(€17.50)로 모든 풍차와 박물관 입장이 가능합니다.",
      "오전 일찍(9시) 방문하면 단체 관광객을 피할 수 있습니다.",
      "암스테르담 중앙역에서 버스 391번으로 직행 가능합니다.",
      "풍차 마을과 볼렌담을 하루 코스로 묶으면 효율적입니다.",
    ],
  },

  // ===== HAARLEM =====
  "netherlands/amsterdam-north-holland/haarlem/frans-hals-museum": {
    heroGradient: "from-rose-400 to-pink-700",
    description: "네덜란드 황금시대 초상화의 대가 프란스 할스의 걸작을 소장한 미술관. 17세기 양로원 건물에 위치하며, 할스의 집단 초상화와 하를렘 화파 작품을 전시합니다.",
    history: "1913년 개관. 프란스 할스가 말년을 보내고 사망한 17세기 양로원 건물에 자리 잡고 있어, 작품과 공간이 하나로 어우러지는 독특한 경험을 제공합니다.",
    visitInfo: {
      hours: "화~토 11:00~17:00, 일·공휴일 12:00~17:00, 월 휴관",
      admission: "성인 €16, 18세 이하 무료",
      address: "Groot Heiligland 62, 2011 ES Haarlem",
      website: "https://www.franshalsmuseum.nl",
    },
    highlights: [
      "프란스 할스의 시민대 집단 초상화 시리즈",
      "하를렘 황금시대 화파의 다양한 작품",
      "17세기 양로원 건물의 중정과 건축미",
      "현대 미술 특별 전시",
    ],
    nearbyAttractions: [
      "그로터 마르크트 광장 (도보 5분)",
      "성 바보 대교회 (도보 5분)",
      "테일러스 박물관 (도보 10분)",
    ],
    photoTips: "중정(안뜰)에서 건물과 함께 촬영하면 17세기 분위기를 담을 수 있습니다.",
    tips: [
      "뮤지엄카드 소지자 무료 입장합니다.",
      "월요일 휴관이니 방문 일정에 주의하세요.",
      "근처 할스 관련 유적지를 함께 도는 워킹 투어도 있습니다.",
    ],
  },

  // ===== GRONINGEN =====
  "netherlands/north-friesland/groningen/groninger-museum": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "이탈리아 디자이너 알레산드로 멘디니가 설계한 독특한 외관의 현대미술 박물관. 흐로닝언 중앙역 바로 앞 운하 위에 떠 있는 듯한 건물 자체가 예술 작품입니다.",
    history: "1994년 개관. 멘디니를 총괄 디자이너로 코프 힘멜브라우, 미셸 드 뤼치, 필리프 스탁 등이 참여한 포스트모던 건축의 걸작입니다.",
    visitInfo: {
      hours: "화~일 10:00~17:00, 월 휴관",
      admission: "성인 €18, 16세 이하 무료",
      address: "Museumeiland 1, 9711 ME Groningen",
      website: "https://www.groningermuseum.nl",
    },
    highlights: [
      "알레산드로 멘디니 설계의 포스트모던 건축",
      "현대 미술과 디자인 전시",
      "패션과 사진 특별 전시",
      "운하 위에 떠 있는 독특한 건물 구조",
    ],
    nearbyAttractions: [
      "흐로닝언 중앙역 (바로 앞)",
      "그로터 마르크트 광장 (도보 10분)",
      "마르티니 탑 (도보 10분)",
    ],
    photoTips: "역 앞 다리에서 건물 전체를 촬영하거나, 운하 수면에 비친 반영을 함께 담으세요.",
    tips: [
      "건물 외관만으로도 충분히 감상할 가치가 있습니다.",
      "월요일 휴관이니 방문 일정에 주의하세요.",
      "뮤지엄카드 소지자 무료 입장합니다.",
    ],
  },

  // ===== GOUDA =====
  "netherlands/utrecht-central/gouda/gouda-cheese-market": {
    heroGradient: "from-yellow-400 to-amber-700",
    description: "하우다(고다) 치즈의 본고장에서 매주 목요일 열리는 전통 치즈 거래 시장. 전통 의상을 입은 상인들이 마르크트 광장에서 치즈를 거래하는 생동감 넘치는 네덜란드 전통 시장입니다.",
    history: "중세 시대부터 이어진 치즈 거래 전통으로, 현재의 치즈 시장은 매년 4~8월 매주 목요일에 재현됩니다. 하우다 치즈는 네덜란드 전체 치즈 생산량의 50% 이상을 차지합니다.",
    visitInfo: {
      hours: "4~8월 매주 목요일 10:00~12:30",
      admission: "무료 (관람)",
      address: "Markt, 2801 JG Gouda",
      website: "https://www.welcometogouda.com",
    },
    highlights: [
      "전통 의상을 입은 상인들의 치즈 거래 시연",
      "치즈 무게 달기와 가격 흥정 퍼포먼스",
      "다양한 숙성도의 하우다 치즈 시식",
      "치즈 계량소(Goudse Waag) 건물",
    ],
    nearbyAttractions: [
      "성 야곱 교회 (마르크트 광장 인접)",
      "하우다 시청사 (마르크트 광장 중앙)",
      "치즈 계량소 박물관 (광장 인접)",
    ],
    photoTips: "치즈가 광장에 쌓여있는 전경과 전통 의상을 입은 상인들을 함께 촬영하세요.",
    tips: [
      "4~8월 매주 목요일 오전에만 열리므로 일정을 맞추세요.",
      "10시 시작 전에 도착하면 좋은 자리를 확보할 수 있습니다.",
      "시장 주변에서 다양한 숙성 치즈를 시식하고 구매할 수 있습니다.",
      "치즈 시장이 없는 날에도 치즈 계량소 박물관은 방문 가능합니다.",
    ],
  },
};
