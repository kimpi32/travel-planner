import type { CityDetail, AttractionDetail } from "../city-details";

export const belgiumCityDetails: Record<string, CityDetail> = {
  // ===== BRUSSELS-FLANDERS =====
  "belgium/brussels-flanders/brussels": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "벨기에의 수도이자 유럽연합의 본부가 위치한 국제도시. 그랑 플라스를 중심으로 아르누보 건축, 벨기에 와플, 초콜릿, 맥주 문화가 어우러진 매력적인 도시입니다.",
    bestTime: "4~10월 (꽃 카펫 축제: 짝수 해 8월)",
    stayArea: "그랑 플라스 / 생 카트린 주변",
    transport: "메트로, 트램, 버스 (STIB/MIVB 네트워크)",
    districts: [
      { name: "그랑 플라스 지구", nameEn: "Grand Place District", description: "유네스코 세계유산 그랑 플라스를 중심으로 한 구시가지 핵심 지역.", highlights: ["그랑 플라스", "오줌싸개 동상", "갤러리 생 위베르", "일로 사크레"] },
      { name: "유럽 지구", nameEn: "European Quarter", description: "유럽연합 본부와 현대적 건축물이 밀집한 국제 업무 지구.", highlights: ["유럽의회", "쥐벨레 공원", "개선문"] },
      { name: "생 질 지구", nameEn: "Saint-Gilles", description: "아르누보 건축과 트렌디한 카페, 다문화가 공존하는 활기찬 지역.", highlights: ["오르타 박물관", "파르비 광장", "아르누보 건축 투어"] },
    ],
    attractions: [
      { name: "그랑 플라스", nameEn: "Grand Place", description: "유네스코 세계유산으로 지정된 벨기에에서 가장 아름다운 광장. 화려한 길드 건물과 시청사가 둘러싸고 있습니다.", category: "광장", tip: "야간 조명이 켜지면 더욱 환상적입니다." },
      { name: "아토미움", nameEn: "Atomium", description: "1958년 브뤼셀 만국박람회를 위해 건설된 철 원자 구조의 상징적 건축물.", category: "랜드마크", tip: "최상층 전망대에서 브뤼셀 전경을 감상하세요." },
      { name: "오줌싸개 동상", nameEn: "Manneken Pis", description: "브뤼셀의 마스코트인 61cm 높이의 작은 청동 분수 동상.", category: "랜드마크", tip: "계절과 이벤트에 따라 다른 의상을 입습니다." },
      { name: "갤러리 생 위베르", nameEn: "Royal Galleries of Saint-Hubert", description: "1847년에 개장한 유럽에서 가장 오래된 쇼핑 아케이드 중 하나.", category: "쇼핑" },
      { name: "벨기에 왕립 미술관", nameEn: "Royal Museums of Fine Arts", description: "브뤼헬, 루벤스, 마그리트 등 벨기에 거장들의 걸작을 소장한 미술관.", category: "미술관" },
      { name: "오르타 박물관", nameEn: "Horta Museum", description: "아르누보 건축의 거장 빅토르 오르타의 자택을 개조한 유네스코 세계유산 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "브뤼헤", nameEn: "Bruges", description: "중세 건축이 완벽히 보존된 '북유럽의 베네치아'.", travelTime: "기차 약 1시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "겐트", nameEn: "Ghent", description: "중세 건축과 현대 예술이 조화를 이루는 대학도시.", travelTime: "기차 약 30분", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "벨기에 와플", description: "브뤼셀식 직사각형 와플은 가볍고 바삭하며 다양한 토핑을 올립니다.", emoji: "🧇" },
      { name: "물 프리트", description: "홍합을 화이트 와인으로 찐 벨기에 국민 요리, 감자튀김 필수.", emoji: "🦪" },
      { name: "벨기에 초콜릿", description: "고디바, 노이하우스, 피에르 마르콜리니 등 세계 최고의 쇼콜라티에.", emoji: "🍫" },
    ],
    tips: [
      "Brussels Card(24/48/72시간)로 40개 이상의 박물관 무료입장 + 대중교통 무료.",
      "그랑 플라스 주변의 관광객용 레스토랑보다 생 카트린 지구의 현지 식당을 추천합니다.",
      "브뤼셀은 프랑스어/네덜란드어 이중 언어 도시이나, 영어도 잘 통합니다.",
      "일로 사크레 거리의 호객 행위 식당은 피하는 것이 좋습니다.",
    ],
  },
  "belgium/brussels-flanders/bruges": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "중세 건축이 완벽하게 보존된 유네스코 세계유산 도시. 운하를 따라 늘어선 벽돌 건물, 종탑, 레이스 공예, 초콜릿 등으로 '북유럽의 베네치아'로 불리는 낭만적인 도시입니다.",
    bestTime: "4~10월 (겨울 크리스마스 마켓도 인기)",
    stayArea: "마르크트 광장 / 구시가지 중심",
    transport: "도보 (구시가지 전체 도보 가능) / 운하 보트",
    districts: [
      { name: "마르크트 광장 지구", nameEn: "Markt Square District", description: "종탑과 길드 건물이 둘러싼 브뤼헤의 중심 광장 지역.", highlights: ["마르크트 광장", "종탑", "주정부 청사", "역사박물관"] },
      { name: "베긴회 수녀원 지구", nameEn: "Begijnhof District", description: "고요한 수녀원과 미네워터 공원이 있는 남쪽 지역.", highlights: ["베긴회 수녀원", "사랑의 호수", "미네워터 공원"] },
    ],
    attractions: [
      { name: "마르크트 광장과 종탑", nameEn: "Markt Square & Belfry", description: "브뤼헤의 중심 광장과 83m 높이의 중세 종탑. 366개 계단을 올라 시내 전경을 감상할 수 있습니다.", category: "광장", tip: "종탑은 한 번에 입장 인원이 제한되어 대기 시간이 길 수 있습니다." },
      { name: "성혈 예배당", nameEn: "Basilica of the Holy Blood", description: "12세기 십자군 원정 때 가져온 그리스도의 성혈 유물을 보관하는 예배당.", category: "성당", tip: "매년 승천일에 열리는 성혈 행렬은 유네스코 무형유산입니다." },
      { name: "운하 보트 투어", nameEn: "Canal Boat Tour", description: "브뤼헤의 중세 건축물을 수상에서 감상하는 30분 운하 투어.", category: "투어", tip: "3~11월 운행, 오전 일찍 타면 대기가 짧습니다." },
      { name: "초콜릿 박물관", nameEn: "Choco-Story Museum", description: "벨기에 초콜릿의 역사와 제조 과정을 체험하는 박물관.", category: "박물관" },
      { name: "베긴회 수녀원", nameEn: "Begijnhof", description: "13세기에 설립된 고요한 수녀원으로 하얀 건물과 정원이 평화로운 분위기.", category: "유적지" },
    ],
    dayTrips: [
      { name: "겐트", nameEn: "Ghent", description: "브뤼헤에서 가까운 활기찬 대학도시.", travelTime: "기차 약 25분", gradient: "from-emerald-400 to-teal-700" },
      { name: "이프르", nameEn: "Ypres", description: "제1차 세계대전 격전지이자 메닌 게이트 추모지.", travelTime: "기차 약 1시간 20분", gradient: "from-gray-400 to-slate-700" },
    ],
    localFood: [
      { name: "브뤼헤 와플", description: "리에주식 둥근 와플에 펄슈거가 카라멜화되어 달콤하고 쫄깃합니다.", emoji: "🧇" },
      { name: "플랑드르 스튜", description: "벨기에 맥주로 끓인 소고기 스튜(카르보나드 플라망드).", emoji: "🍲" },
      { name: "브뤼헤 초콜릿", description: "50개 이상의 초콜릿 가게가 밀집한 초콜릿 천국.", emoji: "🍫" },
    ],
    tips: [
      "구시가지 전체가 보행자 친화적이라 도보 관광이 최적입니다.",
      "종탑 입장은 오전 9시 개장 직후가 대기 시간이 가장 짧습니다.",
      "겨울 크리스마스 마켓(11월 말~1월 초)도 분위기가 좋습니다.",
      "자전거 대여가 가능하며 운하를 따라 담므(Damme)까지 사이클링도 추천합니다.",
    ],
  },
  "belgium/brussels-flanders/ghent": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "중세 건축과 현대 예술이 조화를 이루는 플랑드르의 숨은 보석. 브뤼헤보다 현지인 비율이 높고, 대학도시의 활기와 미식 문화가 매력적인 도시입니다.",
    bestTime: "4~10월 (겐트 축제: 7월 셋째 주)",
    stayArea: "그라슬레이 / 코렌마르크트 주변",
    transport: "트램, 버스 (De Lijn) / 도보",
    districts: [
      { name: "역사 중심지", nameEn: "Historic Center", description: "그라슬레이 부두와 성 바보 대성당을 중심으로 한 중세 도심.", highlights: ["그라슬레이", "성 바보 대성당", "종탑", "성 니콜라스 교회"] },
      { name: "파테르스홀", nameEn: "Patershol", description: "좁은 골목과 레스토랑이 밀집한 중세 분위기의 미식 지구.", highlights: ["그라벤스텐 성", "골목 레스토랑", "중세 건축물"] },
    ],
    attractions: [
      { name: "성 바보 대성당", nameEn: "St Bavo's Cathedral", description: "반 에이크 형제의 걸작 '신비한 어린양의 경배' 제단화가 있는 고딕 대성당.", category: "성당", tip: "제단화 관람은 별도 입장권이 필요합니다." },
      { name: "그라벤스텐 성", nameEn: "Gravensteen Castle", description: "12세기 플랑드르 백작의 성으로 도심 한가운데 우뚝 선 중세 요새.", category: "고성", tip: "옥상에서 겐트 시내 파노라마를 감상하세요." },
      { name: "그라슬레이 부두", nameEn: "Graslei Waterfront", description: "레이에 강변의 중세 길드 건물이 늘어선 겐트에서 가장 아름다운 수변 산책로.", category: "수변", tip: "해질 무렵이 가장 아름답습니다." },
      { name: "디자인 뮤지엄 겐트", nameEn: "Design Museum Ghent", description: "벨기에 디자인의 역사와 현대 디자인 전시가 열리는 박물관.", category: "박물관" },
      { name: "성 미카엘 다리", nameEn: "St Michael's Bridge", description: "겐트의 3대 탑(성당, 종탑, 성 니콜라스 교회)을 한눈에 볼 수 있는 최고의 뷰 포인트.", category: "전망대" },
    ],
    dayTrips: [
      { name: "브뤼헤", nameEn: "Bruges", description: "중세 도시 전체가 유네스코 세계유산.", travelTime: "기차 약 25분", gradient: "from-cyan-400 to-blue-700" },
      { name: "안트베르펜", nameEn: "Antwerp", description: "패션과 다이아몬드의 도시, 루벤스의 고향.", travelTime: "기차 약 50분", gradient: "from-rose-400 to-red-700" },
    ],
    localFood: [
      { name: "워터조이", description: "겐트가 발상지인 크림 치킨(또는 생선) 스튜.", emoji: "🍲" },
      { name: "겐트 노이즈예스", description: "겐트 전통 자주색 사탕(바이올렛 향), 선물용으로 인기.", emoji: "🍬" },
      { name: "스토프블레스", description: "벨기에식 감자튀김 위에 스튜를 올린 겐트 스트리트 푸드.", emoji: "🍟" },
    ],
    tips: [
      "겐트 시티카드(48시간)로 트램 + 박물관 + 보트 투어 포함입니다.",
      "매주 목요일은 '채식의 날'로 채식 메뉴를 제공하는 식당이 많습니다.",
      "야간 조명 투어로 건물들이 조명에 비치는 장관을 감상하세요.",
      "브뤼셀에서 기차 30분이면 당일치기로 방문 가능합니다.",
    ],
  },
  "belgium/brussels-flanders/antwerp": {
    heroGradient: "from-rose-500 to-red-800",
    description: "패션, 다이아몬드, 루벤스의 도시. 벨기에 제2의 도시로 세계적인 패션 디자이너를 배출한 안트베르펜은 역사와 트렌드가 공존하는 활기찬 항구도시입니다.",
    bestTime: "4~10월",
    stayArea: "중앙역 / 마이르 쇼핑 거리 주변",
    transport: "트램, 버스, 프리 바이크 (De Lijn)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "그로테 마르크트와 대성당을 중심으로 한 역사적 도심.", highlights: ["그로테 마르크트", "대성당", "시청사", "플란틴-모레투스 박물관"] },
      { name: "남역 지구", nameEn: "Het Zuid", description: "갤러리, 레스토랑, 트렌디한 카페가 밀집한 문화 지구.", highlights: ["왕립 미술관", "사진 박물관", "레스토랑 거리"] },
      { name: "다이아몬드 지구", nameEn: "Diamond Quarter", description: "세계 다이아몬드 거래의 80%가 이루어지는 중앙역 주변 지역.", highlights: ["다이아몬드 박물관", "보석 상점", "중앙역"] },
    ],
    attractions: [
      { name: "안트베르펜 중앙역", nameEn: "Antwerp Central Station", description: "세계에서 가장 아름다운 기차역으로 꼽히는 네오바로크 양식의 건축 걸작.", category: "건축", tip: "역사 내부는 무료 관람이 가능합니다." },
      { name: "루벤스 하우스", nameEn: "Rubens House", description: "바로크 거장 페테르 파울 루벤스가 25년간 거주하며 작품을 창작한 아틀리에 겸 저택.", category: "박물관", tip: "화요일 휴관, 오전에 방문하면 여유롭습니다." },
      { name: "성모 대성당", nameEn: "Cathedral of Our Lady", description: "벨기에 최대의 고딕 대성당으로 루벤스의 대작 4점을 소장.", category: "성당" },
      { name: "MAS 박물관", nameEn: "Museum aan de Stroom", description: "항구 지구에 위치한 현대적 건축의 시립 박물관. 옥상 전망대 무료.", category: "박물관" },
      { name: "플란틴-모레투스 박물관", nameEn: "Plantin-Moretus Museum", description: "유네스코 세계유산으로 등재된 세계 최초의 산업용 인쇄소.", category: "박물관" },
    ],
    dayTrips: [
      { name: "메헬렌", nameEn: "Mechelen", description: "벨기에의 숨은 보석, 아름다운 중세 소도시.", travelTime: "기차 약 15분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "안트베르펜 핸드쿠키", description: "안트베르펜 명물 손 모양 초콜릿/쿠키(도시 전설에서 유래).", emoji: "🤚" },
      { name: "볼라방", description: "풍선처럼 부풀어 오르는 벨기에 전통 빵 요리.", emoji: "🍞" },
      { name: "벨기에 맥주", description: "데 코닝크 등 안트베르펜 현지 양조장 맥주.", emoji: "🍺" },
    ],
    tips: [
      "안트베르펜 시티카드로 무료 대중교통과 박물관 입장이 가능합니다.",
      "마이르(Meir) 거리는 벨기에 최대 쇼핑 거리로 주말에 붐빕니다.",
      "MAS 박물관 옥상 전망대는 무료이며 항구와 도시 전경이 멋집니다.",
    ],
  },
  "belgium/brussels-flanders/leuven": {
    heroGradient: "from-indigo-500 to-violet-800",
    description: "벨기에에서 가장 오래된 대학도시로 KU Leuven(1425년 설립)이 자리한 학술의 도시. 고딕 양식의 시청사와 활기찬 학생 문화, 세계적인 맥주 AB InBev 본사가 위치합니다.",
    bestTime: "4~10월 (학기 중이 더 활기참)",
    stayArea: "그로테 마르크트 / 올드 마켓 주변",
    transport: "도보 / 버스 (De Lijn)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "고딕 시청사와 성 베드로 교회를 중심으로 한 역사적 도심.", highlights: ["그로테 마르크트", "고딕 시청사", "성 베드로 교회", "대학 도서관"] },
      { name: "올드 마켓", nameEn: "Oude Markt", description: "'유럽에서 가장 긴 바 카운터'로 불리는 카페와 바 밀집 광장.", highlights: ["올드 마켓 광장", "카페 거리", "학생 문화"] },
    ],
    attractions: [
      { name: "고딕 시청사", nameEn: "Gothic Town Hall", description: "1439~1469년에 건설된 플랑드르 후기 고딕 건축의 최고 걸작. 236개의 조각상이 외벽을 장식합니다.", category: "건축", tip: "내부 가이드 투어는 사전 예약이 필요합니다." },
      { name: "성 베드로 교회", nameEn: "St. Peter's Church", description: "15세기 고딕 교회로 디르크 바우츠의 '최후의 만찬' 걸작을 소장.", category: "성당" },
      { name: "대학 도서관", nameEn: "University Library", description: "두 차례 세계대전에서 파괴 후 재건된 상징적인 KU Leuven 도서관.", category: "건축" },
      { name: "스텔라 아르투아 양조장", nameEn: "Stella Artois Brewery", description: "세계적 맥주 브랜드 스텔라 아르투아의 본고장 양조장 투어.", category: "체험", tip: "투어는 온라인 사전 예약 필수입니다." },
    ],
    dayTrips: [
      { name: "브뤼셀", nameEn: "Brussels", description: "벨기에 수도, 그랑 플라스와 아토미움.", travelTime: "기차 약 25분", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "스텔라 아르투아", description: "루번이 본고장인 세계적 필스너 맥주.", emoji: "🍺" },
      { name: "플랑드르 감자튀김", description: "두 번 튀겨 바삭한 벨기에 정통 프릿(frites).", emoji: "🍟" },
    ],
    tips: [
      "시청사 내부는 가이드 투어로만 입장 가능하니 관광 안내소에서 예약하세요.",
      "올드 마켓(Oude Markt)은 금요일 저녁이 가장 활기찹니다.",
      "브뤼셀에서 기차 25분으로 당일치기에 최적입니다.",
      "AB InBev(스텔라 아르투아) 양조장 투어는 맥주 시음을 포함합니다.",
    ],
  },

  // ===== WALLONIA =====
  "belgium/wallonia/namur": {
    heroGradient: "from-stone-500 to-zinc-800",
    description: "왈로니아 지방의 수도이자 뫼즈강과 삼브르강이 합류하는 전략적 요충지. 거대한 시타델 요새에서 바라보는 강과 도시 전경이 인상적이며, 아르덴 여행의 관문입니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 / 기차역 주변",
    transport: "버스 (TEC) / 도보",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "보행자 전용 거리와 바로크 교회가 있는 도심.", highlights: ["성 오뱅 대성당", "페리시앙 롭스 박물관", "쇼핑 거리"] },
      { name: "시타델 지구", nameEn: "Citadel Hill", description: "뫼즈강이 내려다보이는 거대한 요새와 공원 지역.", highlights: ["나뮈르 시타델", "테라 노바 전시관", "전망대"] },
    ],
    attractions: [
      { name: "나뮈르 시타델", nameEn: "Namur Citadel", description: "유럽에서 가장 큰 요새 중 하나로 2,000년 역사를 가진 전략적 성채.", category: "요새", tip: "꼬마 기차(Petit Train)를 타고 올라가면 편합니다." },
      { name: "성 오뱅 대성당", nameEn: "St. Aubain Cathedral", description: "18세기 이탈리아 바로크 양식의 우아한 대성당.", category: "성당" },
      { name: "페리시앙 롭스 박물관", nameEn: "Félicien Rops Museum", description: "나뮈르 출신 상징주의 화가의 도발적 작품을 전시하는 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "디낭", nameEn: "Dinant", description: "뫼즈강변 절벽 위의 시타델과 색색 건물이 인상적인 소도시.", travelTime: "기차 약 30분", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "에스카르고", description: "마늘 버터에 구운 왈로니아식 달팽이 요리.", emoji: "🐌" },
      { name: "플라메슈", description: "왈로니아 전통 치즈 타르트(플라미쉬).", emoji: "🥧" },
    ],
    tips: [
      "시타델까지 도보 20분, 꼬마 기차 또는 케이블카를 이용해도 됩니다.",
      "뫼즈강변 산책로가 잘 정비되어 있어 산책에 좋습니다.",
      "브뤼셀에서 기차 약 1시간, 아르덴으로 가는 관문 도시입니다.",
    ],
  },
  "belgium/wallonia/dinant": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "뫼즈강변 절벽 위에 자리한 시타델과 양파 모양 돔의 교회가 만드는 극적인 경관으로 유명한 소도시. 색소폰 발명가 아돌프 삭스의 고향이기도 합니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 / 강변",
    transport: "도보 (소도시)",
    districts: [
      { name: "강변 구시가지", nameEn: "Riverside Old Town", description: "뫼즈강변을 따라 늘어선 색색의 건물과 명소가 밀집한 중심가.", highlights: ["디낭 시타델", "노트르담 교회", "색소폰 거리", "샤를 드 골 다리"] },
    ],
    attractions: [
      { name: "디낭 시타델", nameEn: "Dinant Citadel", description: "절벽 위 100m 높이에 자리한 11세기 요새로 케이블카로 올라갈 수 있습니다.", category: "요새", tip: "케이블카와 시타델 결합 티켓을 구매하세요." },
      { name: "노트르담 교회", nameEn: "Collegiate Church of Notre-Dame", description: "뫼즈강변에서 올려다보이는 독특한 양파 모양 첨탑의 13세기 교회.", category: "성당" },
      { name: "아돌프 삭스 하우스", nameEn: "Adolphe Sax House", description: "색소폰 발명가 아돌프 삭스의 생가를 개조한 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "나뮈르", nameEn: "Namur", description: "왈로니아의 수도, 거대한 시타델 요새.", travelTime: "기차 약 30분", gradient: "from-stone-400 to-zinc-700" },
    ],
    localFood: [
      { name: "쿠크 드 디낭", description: "디낭 전통 단단한 꿀 비스킷으로 다양한 조각 무늬가 특징.", emoji: "🍪" },
      { name: "플라미쉬 카르보나드", description: "벨기에 흑맥주로 장시간 조린 소고기 스튜.", emoji: "🍲" },
    ],
    tips: [
      "강 건너편에서 바라보는 시타델과 교회의 전경이 가장 아름답습니다.",
      "샤를 드 골 다리에 색소폰 조형물이 전시되어 있어 사진 명소입니다.",
      "카약으로 뫼즈강을 내려오는 액티비티도 인기입니다.",
    ],
  },
  "belgium/wallonia/li-ge": {
    heroGradient: "from-orange-500 to-red-800",
    description: "왈로니아 최대의 도시이자 뫼즈강변의 활기찬 산업·문화도시. 칼라트라바가 설계한 미래지향적 기차역, 374개 계단의 뷰렌 산, 일요일 벼룩시장 등 독특한 매력의 도시입니다.",
    bestTime: "5~9월 (일요일 벼룩시장은 연중)",
    stayArea: "구시가지 / 카레 지구",
    transport: "버스 (TEC) / 도보",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "성 바르텔레미 교회와 왕자주교 궁전이 있는 역사 지구.", highlights: ["왕자주교 궁전", "성 바르텔레미 교회", "뷰렌 산"] },
      { name: "카레 지구", nameEn: "Le Carré", description: "바, 레스토랑, 나이트라이프가 밀집한 활기찬 유흥 지구.", highlights: ["카페 거리", "라이브 음악", "벨기에 맥주 바"] },
    ],
    attractions: [
      { name: "뷰렌 산 계단", nameEn: "Montagne de Bueren", description: "374개의 가파른 계단을 올라가면 리에주 시내 전경이 펼쳐지는 명소.", category: "랜드마크", tip: "일출이나 일몰 시간에 방문하면 특히 아름답습니다." },
      { name: "라 바트 일요 시장", nameEn: "La Batte Sunday Market", description: "매주 일요일 뫼즈강변 1.5km에 펼쳐지는 벨기에 최대의 노천시장.", category: "시장", tip: "아침 일찍(8시경) 가야 여유롭게 구경할 수 있습니다." },
      { name: "리에주-기유맹 역", nameEn: "Liège-Guillemins Station", description: "산티아고 칼라트라바가 설계한 미래지향적 유리·철골 구조의 기차역.", category: "건축" },
      { name: "왕자주교 궁전", nameEn: "Palace of the Prince-Bishops", description: "16세기 르네상스 양식의 웅장한 궁전으로 현재 법원으로 사용.", category: "궁전" },
    ],
    dayTrips: [
      { name: "스파", nameEn: "Spa", description: "'스파'라는 단어의 어원이 된 온천 도시.", travelTime: "기차 약 1시간", gradient: "from-sky-400 to-cyan-700" },
    ],
    localFood: [
      { name: "리에주 와플", description: "진한 펄슈거가 카라멜화된 달콤하고 쫄깃한 리에주식 와플.", emoji: "🧇" },
      { name: "부레트", description: "리에주 전통 미트볼로 뫼즈강변 시장에서 맛볼 수 있습니다.", emoji: "🍖" },
      { name: "리에주 시럽", description: "사과와 배를 장시간 졸인 진한 과일 시럽, 빵에 발라 먹습니다.", emoji: "🍯" },
    ],
    tips: [
      "뷰렌 산 계단은 체력이 필요하지만 정상에서의 뷰가 보상해줍니다.",
      "일요일에 방문하면 라 바트 시장과 함께 도시를 즐길 수 있습니다.",
      "리에주-기유맹 역 자체가 건축 명소이니 기차로 도착하면 역을 먼저 감상하세요.",
      "카레 지구는 벨기에 맥주를 다양하게 맛볼 수 있는 바가 많습니다.",
    ],
  },
  "belgium/wallonia/mons": {
    heroGradient: "from-purple-500 to-fuchsia-800",
    description: "2015년 유럽 문화 수도로 선정된 왈로니아의 역사도시. 바로크 종탑(유네스코 세계유산)과 뒤카스 축제(유네스코 무형유산)로 유명하며 예술과 역사가 풍부합니다.",
    bestTime: "5~9월 (뒤카스 축제: 성삼위일체 주일)",
    stayArea: "그랑 플라스 주변",
    transport: "도보 (소도시) / 버스",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "그랑 플라스와 종탑을 중심으로 한 역사적 도심.", highlights: ["그랑 플라스", "종탑", "성 발트뤼드 교회", "BAM 미술관"] },
    ],
    attractions: [
      { name: "몽스 종탑", nameEn: "Belfry of Mons", description: "유네스코 세계유산으로 등재된 87m 높이의 바로크 종탑. 49개 종으로 구성된 카리용.", category: "랜드마크" },
      { name: "뒤카스 축제", nameEn: "Ducasse de Mons", description: "유네스코 무형유산으로 등재된 중세 기원의 성 조지와 용 퇴치 축제.", category: "축제" },
      { name: "BAM 미술관", nameEn: "BAM - Beaux-Arts Mons", description: "현대미술과 고전미술을 아우르는 몽스의 대표 미술관.", category: "미술관" },
    ],
    dayTrips: [
      { name: "브뤼셀", nameEn: "Brussels", description: "벨기에 수도, 기차로 빠르게 이동 가능.", travelTime: "기차 약 50분", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "타르트 알 주트", description: "몽스 전통 허브 치즈 타르트.", emoji: "🥧" },
      { name: "에노 맥주", description: "에노주 지역 수도원 맥주(쉬메이 등).", emoji: "🍺" },
    ],
    tips: [
      "종탑은 내부 가이드 투어로 방문 가능하니 관광 안내소에서 예약하세요.",
      "뒤카스 축제 기간(5~6월)에 방문하면 몽스의 진정한 열기를 체험할 수 있습니다.",
      "원숭이 동상(Singe du Grand Garde)의 머리를 쓸어주면 행운이 온다는 전설이 있습니다.",
    ],
  },

  // ===== ARDENNES =====
  "belgium/ardennes/spa": {
    heroGradient: "from-sky-500 to-cyan-800",
    description: "'스파(Spa)'라는 단어의 어원이 된 세계 최초의 온천 휴양지. 로마 시대부터 유명한 광천수와 온천으로 유럽 왕족과 귀족의 휴양지였으며, F1 벨기에 그랑프리가 열리는 도시입니다.",
    bestTime: "연중 (온천은 사계절, 자연은 5~10월)",
    stayArea: "시내 중심 / 테르마 드 스파 근처",
    transport: "버스 / 도보 (소도시)",
    districts: [
      { name: "시내 중심", nameEn: "Town Center", description: "광천수 분수와 카지노, 온천 시설이 밀집한 중심가.", highlights: ["피에르 르 그랑 분수", "카지노", "포우옹 분수", "공원"] },
    ],
    attractions: [
      { name: "테르마 드 스파", nameEn: "Thermes de Spa", description: "언덕 위에 자리한 현대적 온천 시설로 실내외 풀, 사우나, 하맘을 갖춘 세계적 스파.", category: "온천", tip: "주중 오전이 가장 한적하며, 수영복 필수입니다." },
      { name: "스파-프랑코샹 서킷", nameEn: "Circuit de Spa-Francorchamps", description: "F1 벨기에 그랑프리가 열리는 전설적인 레이싱 서킷.", category: "스포츠" },
      { name: "스파 광천수 분수", nameEn: "Pouhon Pierre le Grand", description: "도심 한가운데서 무료로 광천수를 마셔볼 수 있는 분수.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "오트 팡 자연보호구역", nameEn: "Hautes Fagnes", description: "벨기에 최고봉과 광활한 이탄 습지를 거닐 수 있는 자연보호구역.", travelTime: "버스 약 30분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "아르덴 햄", description: "아르덴 지방의 훈제 생햄으로 진한 풍미가 특징.", emoji: "🥓" },
      { name: "스파 광천수", description: "세계적으로 유명한 천연 탄산 광천수 SPA.", emoji: "💧" },
    ],
    tips: [
      "테르마 드 스파는 온라인 사전 예약이 권장되며 3시간/반일/종일 패키지가 있습니다.",
      "케이블카(funicular)를 타고 테르마 드 스파까지 올라갈 수 있습니다.",
      "스파-프랑코샹 서킷은 레이스 없는 날에도 트랙 투어가 가능합니다.",
    ],
  },
  "belgium/ardennes/durbuy": {
    heroGradient: "from-lime-500 to-green-800",
    description: "'세계에서 가장 작은 도시'라는 별명을 가진 아르덴의 보석. 우르트강변 중세 돌담 골목, 성, 토피어리 공원 등 동화 같은 분위기의 미식 소도시입니다.",
    bestTime: "5~10월 (가을 단풍도 아름다움)",
    stayArea: "구시가지 내",
    transport: "자동차 추천 (대중교통 제한적)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "중세 돌담 건물과 좁은 골목, 레스토랑이 밀집한 미니어처 같은 도심.", highlights: ["뒤르뷔 성", "토피어리 공원", "반 레시앙 골목", "우르트 강변"] },
    ],
    attractions: [
      { name: "뒤르뷔 성과 구시가지", nameEn: "Durbuy Castle & Old Town", description: "11세기 기원의 성을 배경으로 한 중세 돌담 골목과 아기자기한 상점, 레스토랑이 어우러진 동화 같은 마을.", category: "고성/마을", tip: "성 내부는 비공개이나 외관과 구시가지 산책만으로도 충분합니다." },
      { name: "토피어리 공원", nameEn: "Topiary Park", description: "250개 이상의 정교하게 다듬어진 회양목 조각 공원.", category: "공원" },
      { name: "앙티-아틀라스 바위", nameEn: "Anti-Atlas Rock", description: "기울어진 독특한 지질 구조의 자연 암석.", category: "자연" },
    ],
    dayTrips: [
      { name: "라 로슈-앙-아르덴", nameEn: "La Roche-en-Ardenne", description: "아르덴 한가운데 성곽 폐허가 있는 소도시.", travelTime: "자동차 약 30분", gradient: "from-emerald-400 to-green-700" },
    ],
    localFood: [
      { name: "아르덴 송어", description: "아르덴 맑은 강에서 잡은 신선한 송어 구이.", emoji: "🐟" },
      { name: "아르덴 치즈", description: "지역 농장에서 만드는 수제 치즈.", emoji: "🧀" },
      { name: "벨기에 수도원 맥주", description: "오르발, 쉬메이 등 아르덴 지역 트라피스트 맥주.", emoji: "🍺" },
    ],
    tips: [
      "대중교통이 제한적이므로 자동차 또는 투어를 이용하는 것이 편합니다.",
      "구시가지는 매우 작아 1~2시간이면 충분히 둘러볼 수 있습니다.",
      "우르트강 카약 체험은 뒤르뷔 방문의 하이라이트입니다.",
    ],
  },
  "belgium/ardennes/bouillon": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "제1차 십자군 원정의 지도자 부용의 고드프루아가 태어난 중세 성곽 도시. 스무아강이 휘감아 도는 절벽 위의 성에서 바라보는 아르덴 숲 전경이 장관입니다.",
    bestTime: "5~10월",
    stayArea: "구시가지 / 성 근처",
    transport: "자동차 추천 (대중교통 제한적)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "부용 성 아래 스무아강변에 형성된 작은 마을.", highlights: ["부용 성", "스무아강 산책로", "고드프루아 동상"] },
    ],
    attractions: [
      { name: "부용 성", nameEn: "Bouillon Castle", description: "8세기에 건설된 벨기에에서 가장 오래된 봉건 성으로, 스무아강이 내려다보이는 절벽 위에 위치합니다.", category: "고성", tip: "매일 열리는 매사냥 시범 공연을 놓치지 마세요." },
      { name: "스무아강 카약", nameEn: "Semois Kayaking", description: "아르덴 숲을 관통하는 스무아강에서 즐기는 카약 체험.", category: "액티비티" },
      { name: "고드프루아 박물관", nameEn: "Godefroid Museum", description: "십자군 원정의 역사를 다루는 부용의 역사 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "오르발 수도원", nameEn: "Orval Abbey", description: "세계적 트라피스트 맥주를 양조하는 수도원.", travelTime: "자동차 약 30분", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "아르덴 멧돼지 스튜", description: "아르덴 숲에서 잡은 멧돼지 고기를 진하게 조린 전통 스튜.", emoji: "🐗" },
      { name: "오르발 맥주", description: "근처 오르발 수도원에서 양조하는 세계적 트라피스트 맥주.", emoji: "🍺" },
    ],
    tips: [
      "성의 매사냥 시범 공연 시간을 미리 확인하세요 (보통 11시, 14시, 15시30분).",
      "스무아강 카약은 반일~종일 코스가 있으며 초보자도 가능합니다.",
      "대중교통이 거의 없으므로 자동차가 필수입니다.",
    ],
  },
  "belgium/ardennes/la-roche-en-ardenne": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "아르덴의 심장부에 위치한 소도시로 우르트강변 언덕 위의 성곽 폐허와 울창한 숲이 어우러진 자연 휴양지. 제2차 세계대전 벌지 전투의 주요 격전지이기도 합니다.",
    bestTime: "5~10월 (가을 단풍 시즌 추천)",
    stayArea: "구시가지 / 강변",
    transport: "자동차 추천 / 버스 (제한적)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "우르트강변 작은 마을로 성곽과 박물관이 위치.", highlights: ["성곽 폐허", "벌지 전투 박물관", "우르트강 산책로"] },
    ],
    attractions: [
      { name: "라 로슈 성곽", nameEn: "La Roche Castle", description: "9세기 기원의 성곽 폐허에서 마을과 아르덴 숲의 파노라마 뷰를 즐길 수 있습니다.", category: "고성" },
      { name: "벌지 전투 박물관", nameEn: "Battle of the Bulge Museum", description: "1944년 아르덴 대공세의 유물과 기록을 전시하는 역사 박물관.", category: "박물관" },
      { name: "우르트강 카약", nameEn: "Ourthe River Kayaking", description: "아르덴 자연 속에서 즐기는 카약과 래프팅 체험.", category: "액티비티" },
    ],
    dayTrips: [
      { name: "뒤르뷔", nameEn: "Durbuy", description: "'세계에서 가장 작은 도시'로 불리는 아기자기한 소도시.", travelTime: "자동차 약 30분", gradient: "from-lime-400 to-green-700" },
    ],
    localFood: [
      { name: "아르덴 사슴고기", description: "가을 사냥 시즌에 맛볼 수 있는 신선한 사슴고기 요리.", emoji: "🦌" },
      { name: "쉬메이 치즈", description: "쉬메이 수도원에서 만드는 수도원 전통 치즈.", emoji: "🧀" },
    ],
    tips: [
      "크리스마스 시즌의 라 로슈 마켓은 분위기가 좋습니다.",
      "하이킹 코스가 다양하니 관광 안내소에서 지도를 받으세요.",
      "여름에는 카약, 가을에는 단풍 하이킹이 하이라이트입니다.",
    ],
  },
};

export const belgiumAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BRUSSELS =====
  "belgium/brussels-flanders/brussels/grand-place": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "유네스코 세계유산으로 지정된 브뤼셀의 심장. 화려한 바로크 양식의 길드 건물과 고딕 양식의 시청사가 둘러싼 유럽에서 가장 아름다운 광장 중 하나입니다.",
    history: "1695년 프랑스군의 포격으로 대부분 파괴된 후 길드들이 경쟁적으로 재건하여 현재의 화려한 모습이 되었습니다. 1998년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (광장 자체)",
      admission: "무료 (브뤼셀 시립박물관 별도: 성인 €8)",
      address: "Grand Place, 1000 Bruxelles",
      website: "https://www.brussels.be/grand-place",
    },
    highlights: [
      "바로크 양식 길드 건물의 금장식 외관 감상",
      "고딕 양식의 시청사와 96m 탑",
      "짝수 해 8월에 열리는 꽃 카펫 축제",
      "야간 조명 쇼 (여름/겨울 시즌)",
      "브뤼셀 시립박물관 (왕의 집) 관람",
    ],
    nearbyAttractions: [
      "오줌싸개 동상 (도보 3분)",
      "갤러리 생 위베르 (도보 2분)",
      "브뤼셀 시립박물관 (광장 내)",
      "일로 사크레 거리 (도보 5분)",
    ],
    photoTips: "야간 조명이 켜진 후(일몰 후 30분)에 촬영하면 금빛 건물이 가장 아름답게 담깁니다. 광각 렌즈로 광장 전체를 담아보세요.",
    tips: [
      "꽃 카펫 축제(짝수 해 8월)에는 시청사 발코니에서 내려다보는 뷰가 최고입니다.",
      "크리스마스 시즌에는 대형 트리와 조명으로 장식됩니다.",
      "광장 주변의 초콜릿 가게에서 시식을 즐기세요.",
      "레스토랑은 광장 바로 옆보다 한 블록 안쪽이 가격 대비 품질이 좋습니다.",
    ],
  },
  "belgium/brussels-flanders/brussels/atomium": {
    heroGradient: "from-slate-400 to-blue-700",
    description: "1958년 브뤼셀 만국박람회를 위해 건설된 철 원자 결정 구조를 1650억 배 확대한 높이 102m의 건축물. 벨기에의 에펠탑이라 불리는 국가 상징물입니다.",
    history: "앙드레 워터케인이 설계하여 1958년 만국박람회의 상징물로 건설되었습니다. 원래 박람회 후 철거 예정이었으나 시민들의 사랑으로 영구 보존되었고, 2006년 대대적으로 리노베이션되었습니다.",
    visitInfo: {
      hours: "매일 10:00~18:00 (마지막 입장 17:30)",
      admission: "성인 €16, 학생/시니어 €14, 어린이(6~11세) €8.50",
      address: "Place de l'Atomium 1, 1020 Bruxelles",
      website: "https://www.atomium.be",
    },
    highlights: [
      "최상층 구체의 360도 파노라마 전망대",
      "에스컬레이터로 연결된 구체 간 이동 체험",
      "1958년 만국박람회 역사 전시",
      "야간 LED 조명쇼 감상",
      "인접한 미니 유럽 파크 동시 방문",
    ],
    nearbyAttractions: [
      "미니 유럽 (도보 5분)",
      "라켄 왕궁 온실 (도보 15분, 봄에만 공개)",
      "엑셀 공원 (도보 10분)",
    ],
    photoTips: "아토미움 앞 잔디밭에서 약간 낮은 각도로 촬영하면 건물 전체가 하늘과 함께 잘 담깁니다. 야간 조명 시간대도 추천합니다.",
    tips: [
      "온라인 사전 예약 시 대기 시간을 크게 줄일 수 있습니다.",
      "아토미움 + 미니 유럽 콤보 티켓이 할인됩니다.",
      "레스토랑이 최상층에 있으며 예약이 필요합니다.",
      "메트로 6호선 Heysel역에서 도보 5분입니다.",
    ],
  },
  "belgium/brussels-flanders/brussels/manneken-pis": {
    heroGradient: "from-amber-400 to-yellow-700",
    description: "브뤼셀의 마스코트이자 가장 유명한 랜드마크. 61cm 높이의 소년 청동 분수 동상으로, 수백 벌의 의상 컬렉션과 함께 브뤼셀의 유머와 자유정신을 상징합니다.",
    history: "1619년 조각가 제롬 뒤케스노이가 제작한 청동상으로, 다양한 도난과 파손 사건을 겪었습니다. 각국 정상이 의상을 선물하는 전통이 있어 현재 1,000벌 이상의 의상을 보유하고 있습니다.",
    visitInfo: {
      hours: "24시간 (야외 동상)",
      admission: "무료",
      address: "Rue de l'Étuve 46, 1000 Bruxelles",
    },
    highlights: [
      "계절과 이벤트에 따라 달라지는 의상 감상",
      "브뤼셀 시립박물관에서 의상 컬렉션 관람",
      "여성 버전 '잔네케 피스'도 찾아보기",
      "동상 주변 와플·초콜릿 가게 탐방",
    ],
    nearbyAttractions: [
      "그랑 플라스 (도보 3분)",
      "갤러리 생 위베르 (도보 5분)",
      "잔네케 피스 (도보 10분)",
      "델리리움 카페 (도보 7분)",
    ],
    photoTips: "동상이 작아 가까이 다가가야 합니다. 의상을 입은 날은 특별한 사진을 남길 수 있으니 일정 확인을 추천합니다.",
    tips: [
      "동상이 매우 작아(61cm) 실망하는 관광객이 많으니 기대치를 조절하세요.",
      "의상 일정은 브뤼셀 시 공식 사이트에서 확인 가능합니다.",
      "주변 와플 가게의 호객에 현혹되지 말고 평점 확인 후 구매하세요.",
      "잔네케 피스(여성 버전)와 제케 피스(강아지 버전)도 찾아보세요.",
    ],
  },
  "belgium/brussels-flanders/brussels/royal-galleries-of-saint-hubert": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "1847년에 개장한 유럽에서 가장 오래된 유리 지붕 쇼핑 아케이드. 네오르네상스 양식의 우아한 갤러리로 고급 초콜릿 가게, 카페, 극장이 입점해 있습니다.",
    history: "건축가 장-피에르 클뤼세네르가 설계하여 1847년 레오폴드 1세 국왕이 개장했습니다. 왕의 갤러리, 여왕의 갤러리, 왕자의 갤러리 3개 구간으로 나뉘며 총 길이 213m입니다.",
    visitInfo: {
      hours: "갤러리 자체: 24시간 / 개별 상점: 보통 10:00~19:00",
      admission: "무료 (통행 자유)",
      address: "Galerie du Roi 5, 1000 Bruxelles",
      website: "https://www.grfrb.be",
    },
    highlights: [
      "네오르네상스 양식의 유리 지붕 아케이드 건축",
      "노이하우스, 마리 등 벨기에 프리미엄 초콜릿 가게",
      "시네마 갤러리 (아트하우스 영화관)",
      "역사적 카페와 레스토랑",
    ],
    nearbyAttractions: [
      "그랑 플라스 (도보 1분)",
      "오줌싸개 동상 (도보 5분)",
      "일로 사크레 (도보 3분)",
      "벨기에 만화 센터 (도보 7분)",
    ],
    photoTips: "갤러리 중앙에서 양쪽 끝을 향해 촬영하면 대칭적인 유리 지붕 구조가 아름답게 담깁니다.",
    tips: [
      "노이하우스 본점에서 프랄린 초콜릿을 시식해보세요.",
      "비 오는 날 방문하기 좋은 실내 명소입니다.",
      "갤러리 내 카페에서 벨기에 핫초콜릿을 즐기세요.",
    ],
  },

  // ===== BRUGES =====
  "belgium/brussels-flanders/bruges/markt-square-belfry": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "브뤼헤의 심장부인 마르크트 광장과 83m 높이의 중세 종탑. 366개 계단을 올라가면 브뤼헤 전체와 플랑드르 평야의 탁 트인 전망이 펼쳐집니다.",
    history: "종탑은 13세기에 건설이 시작되어 15세기에 완성되었으며, 시장의 자유와 자치를 상징합니다. 47개의 종으로 구성된 카리용이 매 15분마다 울려 퍼집니다.",
    visitInfo: {
      hours: "매일 09:30~18:00 (마지막 입장 17:00)",
      admission: "종탑: 성인 €14, 청소년(6~25세) €12",
      address: "Markt 7, 8000 Brugge",
      website: "https://www.museabrugge.be",
    },
    highlights: [
      "366개 계단 올라 브뤼헤 파노라마 뷰 감상",
      "47개 종의 카리용 연주 청취",
      "광장의 다채로운 길드 건물 외관 감상",
      "매주 수요일 오전 광장 시장 방문",
    ],
    nearbyAttractions: [
      "성혈 예배당 (도보 3분, 부르그 광장)",
      "운하 보트 투어 승선장 (도보 5분)",
      "브뤼헤 역사박물관 (광장 내)",
    ],
    photoTips: "광장 남쪽에서 종탑 전체를 올려다보며 촬영하면 좋습니다. 종탑 꼭대기에서는 브뤼헤의 붉은 지붕 전경을 담을 수 있습니다.",
    tips: [
      "한 번에 70명만 입장 가능하여 대기 시간이 길 수 있으니 오전 일찍 방문하세요.",
      "계단이 좁고 가파르니 편안한 신발을 착용하세요.",
      "카리용 연주는 매주 수·토·일 11:00~12:00에 라이브로 들을 수 있습니다.",
    ],
  },
  "belgium/brussels-flanders/bruges/basilica-of-the-holy-blood": {
    heroGradient: "from-red-600 to-purple-800",
    description: "12세기에 봉헌된 예배당으로 제2차 십자군 원정에서 가져온 그리스도의 성혈 유물을 보관하고 있습니다. 로마네스크 양식과 고딕 양식이 공존하는 독특한 이중 예배당 구조입니다.",
    history: "1134년 플랑드르 백작 디데릭이 하층 예배당을 건설했으며, 1150년 예루살렘에서 가져온 성혈 유물이 안치되었습니다. 매년 승천일에 열리는 성혈 행렬은 2009년 유네스코 무형유산에 등재되었습니다.",
    visitInfo: {
      hours: "매일 09:30~12:00, 14:00~17:00",
      admission: "예배당 무료 / 보물실: 성인 €4",
      address: "Burg 13, 8000 Brugge",
      website: "https://www.holyblood.com",
    },
    highlights: [
      "성혈 유물 직접 참배 (매일 공개)",
      "12세기 로마네스크 하층 예배당",
      "15세기 네오고딕 상층 예배당",
      "보물실의 중세 성물 컬렉션",
    ],
    nearbyAttractions: [
      "마르크트 광장과 종탑 (도보 3분)",
      "브뤼헤 시청사 (부르그 광장 내)",
      "운하 보트 투어 (도보 5분)",
    ],
    photoTips: "상층 예배당의 화려한 벽화와 스테인드글라스가 포토 포인트입니다. 내부 촬영이 가능하니 자연광이 들어오는 시간을 노리세요.",
    tips: [
      "성혈 유물 공개 시간을 확인하고 방문하세요.",
      "승천일의 성혈 행렬은 5월에 열리며 미리 자리를 잡아야 합니다.",
      "하층 예배당은 브뤼헤에서 가장 오래된 건축물 중 하나입니다.",
    ],
  },
  "belgium/brussels-flanders/bruges/canal-boat-tour": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "브뤼헤의 중세 건축물과 숨겨진 정원을 수상에서 감상하는 30분 운하 보트 투어. 도보로는 볼 수 없는 각도에서 건물 뒷면과 다리 아래를 지나는 독특한 경험을 제공합니다.",
    visitInfo: {
      hours: "3~11월: 10:00~18:00 (매 20분 간격 출발)",
      admission: "성인 €14, 어린이(4~11세) €7",
      address: "여러 승선장 (Rozenhoedkaai, Dijver 등)",
    },
    highlights: [
      "중세 건물과 수면에 비친 반영 감상",
      "도보로는 접근 불가한 숨겨진 정원 구경",
      "역사적인 돌다리 아래 통과 체험",
      "가이드의 브뤼헤 역사·전설 해설",
    ],
    nearbyAttractions: [
      "마르크트 광장 (도보 5분)",
      "베긴회 수녀원 (도보 10분)",
      "그루닝 박물관 (도보 3분)",
    ],
    photoTips: "로젠후드카이(Rozenhoedkaai) 승선장 주변이 브뤼헤에서 가장 사진이 잘 나오는 장소입니다. 보트에서는 낮은 각도에서 건물을 촬영하세요.",
    tips: [
      "오전 10시 첫 보트를 타면 대기 시간이 거의 없습니다.",
      "11월 중순~2월은 운행하지 않으니 방문 시기를 확인하세요.",
      "비 오는 날에도 운행하지만 우산보다 방수 재킷이 편합니다.",
    ],
  },

  // ===== GHENT =====
  "belgium/brussels-flanders/ghent/st-bavo-s-cathedral": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "반 에이크 형제의 걸작 '신비한 어린양의 경배'(겐트 제단화)를 소장한 고딕 대성당. 서양 미술사에서 가장 중요한 회화 작품 중 하나를 직접 감상할 수 있는 예술의 성지입니다.",
    history: "10세기 로마네스크 교회에서 시작하여 16세기에 고딕 양식으로 완성되었습니다. 반 에이크 형제의 '신비한 어린양의 경배'(1432년)는 서양 유화의 시초로 평가되며 여러 차례 약탈과 복원을 거쳤습니다.",
    visitInfo: {
      hours: "월~토 08:30~17:00, 일 13:00~17:00",
      admission: "대성당 무료 / 제단화 관람: 성인 €16",
      address: "Sint-Baafsplein, 9000 Gent",
      website: "https://www.sintbaafskathedraal.be",
    },
    highlights: [
      "반 에이크 형제 '신비한 어린양의 경배' 제단화",
      "루벤스의 '성 바보 수도원 입회' 작품",
      "고딕 양식의 웅장한 내부 공간",
      "지하 납골당(크립트) 탐방",
    ],
    nearbyAttractions: [
      "겐트 종탑 (도보 2분)",
      "성 니콜라스 교회 (도보 3분)",
      "그라슬레이 부두 (도보 5분)",
    ],
    photoTips: "대성당 외관은 신트-바프스 광장에서, 내부는 제단화 앞에서 촬영할 수 있습니다 (플래시 금지).",
    tips: [
      "제단화 관람은 별도 입장권이 필요하며 온라인 사전 예약을 권장합니다.",
      "AR 가이드가 제공되어 제단화를 자세히 감상할 수 있습니다.",
      "오전 일찍 방문하면 여유롭게 관람 가능합니다.",
    ],
  },
  "belgium/brussels-flanders/ghent/gravensteen-castle": {
    heroGradient: "from-gray-500 to-slate-800",
    description: "12세기 플랑드르 백작의 성으로 겐트 도심 한가운데 우뚝 서 있는 중세 요새. 해자와 성벽, 망루가 완전하게 보존되어 있으며 옥상에서 겐트 시내 파노라마를 감상할 수 있습니다.",
    history: "1180년 플랑드르 백작 필립이 십자군 원정에서 영감을 받아 시리아 십자군 성을 모방하여 건설했습니다. 이후 법원, 감옥, 면화 공장 등으로 사용되었다가 1885년 복원되었습니다.",
    visitInfo: {
      hours: "4~10월: 10:00~18:00 / 11~3월: 10:00~17:00",
      admission: "성인 €12, 청소년(13~25세) €7, 12세 이하 무료",
      address: "Sint-Veerleplein 11, 9000 Gent",
      website: "https://www.gravensteen.stad.gent",
    },
    highlights: [
      "옥상에서 겐트 도심 360도 파노라마 뷰",
      "중세 무기와 갑옷 전시",
      "유머러스한 오디오 가이드 (다국어 지원)",
      "해자와 성벽 산책",
    ],
    nearbyAttractions: [
      "파테르스홀 미식 지구 (도보 3분)",
      "그라슬레이 부두 (도보 5분)",
      "디자인 뮤지엄 (도보 5분)",
    ],
    photoTips: "성 앞 신트-베를레 광장에서 해자와 함께 성 전체를 촬영할 수 있습니다. 옥상에서는 겐트의 3대 탑을 한 장에 담을 수 있습니다.",
    tips: [
      "오디오 가이드가 유머러스하고 재미있어 꼭 이용하세요.",
      "겐트 시티카드에 입장료가 포함되어 있습니다.",
      "계단이 가파르니 편안한 신발을 착용하세요.",
    ],
  },
  "belgium/brussels-flanders/ghent/graslei-waterfront": {
    heroGradient: "from-teal-400 to-emerald-700",
    description: "레이에 강변의 중세 길드 건물이 늘어선 겐트에서 가장 아름다운 수변 지역. 곡물 상인, 석공, 자유 선원 등의 길드 건물이 로마네스크부터 르네상스까지 다양한 양식으로 보존되어 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외)",
      admission: "무료",
      address: "Graslei, 9000 Gent",
    },
    highlights: [
      "중세 길드 건물의 다양한 건축 양식 감상",
      "강변 테라스에서 벨기에 맥주 즐기기",
      "해 질 녘 건물에 비치는 황금빛 조명",
      "보트 투어로 수상에서 감상",
    ],
    nearbyAttractions: [
      "그라벤스텐 성 (도보 5분)",
      "성 미카엘 다리 (도보 3분)",
      "코렌마르크트 (도보 2분)",
    ],
    photoTips: "맞은편 코렌레이(Korenlei)에서 그라슬레이를 촬영하면 중세 건물 전체가 한 프레임에 담깁니다. 해 질 녘 황금빛이 가장 아름답습니다.",
    tips: [
      "여름 저녁에는 현지인과 학생들이 강변에 앉아 맥주를 즐기는 분위기를 체험하세요.",
      "성 미카엘 다리에서 바라보는 그라슬레이와 코렌레이 양쪽 뷰가 최고입니다.",
      "보트 투어 승선장이 근처에 있어 함께 즐기기 좋습니다.",
    ],
  },

  // ===== ANTWERP =====
  "belgium/brussels-flanders/antwerp/antwerp-central-station": {
    heroGradient: "from-rose-500 to-red-800",
    description: "세계에서 가장 아름다운 기차역으로 꼽히는 네오바로크 양식의 건축 걸작. 대리석, 유리, 철골이 어우러진 웅장한 돔과 대기실은 '철도 대성당'이라는 별명을 가지고 있습니다.",
    history: "건축가 루이 델라상세리가 설계하여 1905년에 개장했습니다. 네오바로크 양식의 역사와 현대적 고속열차 플랫폼이 4개 층에 걸쳐 공존하는 독특한 구조입니다.",
    visitInfo: {
      hours: "역사 24시간 개방",
      admission: "무료",
      address: "Koningin Astridplein 27, 2018 Antwerpen",
    },
    highlights: [
      "네오바로크 양식의 웅장한 돔과 대기실",
      "대리석 장식의 그랜드 홀",
      "4층 구조의 현대적 플랫폼 설계",
      "역사 정면의 시계탑",
    ],
    nearbyAttractions: [
      "안트베르펜 동물원 (바로 옆)",
      "다이아몬드 지구 (도보 3분)",
      "마이르 쇼핑 거리 (도보 5분)",
    ],
    photoTips: "역사 내부 중앙 홀에서 돔을 올려다보며 촬영하면 웅장함이 잘 담깁니다. 플랫폼 층에서 전체 구조를 내려다보는 앵글도 인상적입니다.",
    tips: [
      "기차를 타지 않더라도 역사 내부 관람은 무료이므로 꼭 방문하세요.",
      "역 바로 옆에 안트베르펜 동물원이 있어 함께 방문 가능합니다.",
      "2층 발코니에서 내려다보는 그랜드 홀 뷰를 놓치지 마세요.",
    ],
  },
  "belgium/brussels-flanders/antwerp/rubens-house": {
    heroGradient: "from-amber-500 to-brown-800",
    description: "바로크 미술의 거장 페테르 파울 루벤스가 25년간 거주하며 작품을 창작한 아틀리에 겸 저택. 이탈리아 르네상스 양식의 정원과 함께 루벤스의 삶과 예술 세계를 체험할 수 있습니다.",
    history: "루벤스가 1610년에 구입하여 직접 설계·확장한 저택입니다. 거대한 아틀리에에서 수많은 걸작을 탄생시켰으며, 1946년 시립 박물관으로 개관하여 루벤스와 동시대 작가들의 작품을 전시합니다.",
    visitInfo: {
      hours: "화~일 10:00~17:00 (월요일 휴관)",
      admission: "성인 €12, 청소년(12~25세) €8, 12세 이하 무료",
      address: "Wapper 9-11, 2000 Antwerpen",
      website: "https://www.rubenshuis.be",
    },
    highlights: [
      "루벤스의 원작과 자화상 감상",
      "바로크 양식의 그랜드 아틀리에",
      "이탈리아 르네상스 정원과 포르티코",
      "17세기 부유한 화가의 생활상 체험",
    ],
    nearbyAttractions: [
      "마이르 쇼핑 거리 (도보 3분)",
      "성모 대성당 (도보 10분)",
      "그로테 마르크트 (도보 10분)",
    ],
    photoTips: "정원의 포르티코(바로크 문)가 가장 포토제닉한 장소입니다. 내부에서는 아틀리에의 높은 천장과 자연광이 들어오는 장면이 아름답습니다.",
    tips: [
      "화요일 휴관이니 방문 요일을 확인하세요 (월요일 아닌 화요일!).",
      "안트베르펜 시티카드에 포함되어 있습니다.",
      "오디오 가이드(한국어 미지원, 영어 가능)를 이용하면 더 깊이 이해할 수 있습니다.",
    ],
  },

  // ===== LEUVEN =====
  "belgium/brussels-flanders/leuven/gothic-town-hall": {
    heroGradient: "from-indigo-500 to-violet-800",
    description: "1439~1469년에 건설된 플랑드르 후기 고딕 건축의 최고 걸작. 3층 외벽에 236개의 성인과 역사적 인물 조각상이 촘촘히 장식된 정교한 외관으로 '세계에서 가장 아름다운 시청사'로 불립니다.",
    history: "마테우스 드 라이언스가 설계하여 30년에 걸쳐 완성되었습니다. 원래 탑이 계획되었으나 지반이 약해 포기되었고, 대신 236개의 조각상으로 외벽을 장식했습니다. 조각상은 19세기에 추가 제작되었습니다.",
    visitInfo: {
      hours: "가이드 투어: 매일 15:00 (관광 안내소에서 예약)",
      admission: "가이드 투어: 성인 €6",
      address: "Grote Markt 9, 3000 Leuven",
      website: "https://www.visitleuven.be",
    },
    highlights: [
      "236개 조각상이 장식된 정교한 고딕 외관",
      "내부의 네오고딕 장식과 그림 컬렉션",
      "시청사 맞은편 성 베드로 교회와의 조화",
      "야간 조명에 비친 시청사의 환상적 외관",
    ],
    nearbyAttractions: [
      "성 베드로 교회 (광장 바로 건너편)",
      "올드 마켓 (도보 3분)",
      "대학 도서관 (도보 5분)",
    ],
    photoTips: "그로테 마르크트 광장 정면에서 시청사 전체를 담을 수 있습니다. 야간 조명 시 조각상 디테일이 더 극적으로 드러납니다.",
    tips: [
      "내부는 가이드 투어로만 입장 가능하니 관광 안내소에서 사전 예약하세요.",
      "외관만으로도 충분히 감동적이니 시간이 없으면 외부만 감상해도 좋습니다.",
      "인접한 성 베드로 교회와 함께 방문하세요.",
    ],
  },

  // ===== LIÈGE =====
  "belgium/wallonia/li-ge/montagne-de-bueren": {
    heroGradient: "from-orange-500 to-red-800",
    description: "374개의 가파른 계단으로 이루어진 리에주의 상징적 명소. 계단을 올라 정상에 도달하면 뫼즈강과 리에주 도심의 탁 트인 파노라마가 펼쳐집니다.",
    history: "1881년에 건설된 이 계단은 정상의 시타델 요새를 연결하기 위해 만들어졌습니다. 이름은 15세기 리에주 독립을 위해 싸운 뱅상 드 뷰렌에서 유래했습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Montagne de Bueren, 4000 Liège",
    },
    highlights: [
      "374개 계단 도전과 성취감",
      "정상에서 리에주 도심과 뫼즈강 파노라마 뷰",
      "계단 양옆의 아기자기한 주택가",
      "10월 '촛불의 밤' 축제 시 6,000개 촛불 장식",
    ],
    nearbyAttractions: [
      "왕자주교 궁전 (도보 5분)",
      "성 바르텔레미 교회 (도보 8분)",
      "리에주 시타델 공원 (계단 정상)",
    ],
    photoTips: "계단 아래에서 위를 올려다보며 촬영하면 374개 계단의 웅장함이 잘 드러납니다. 정상에서 내려다보는 뷰도 파노라마로 담아보세요.",
    tips: [
      "체력이 필요하니 편안한 신발과 물을 준비하세요.",
      "10월의 '촛불의 밤(Nocturne des Coteaux)' 행사는 계단이 6,000개 촛불로 장식됩니다.",
      "중간중간 쉬며 올라가도 약 10~15분이면 정상에 도착합니다.",
    ],
  },
  "belgium/wallonia/li-ge/la-batte-sunday-market": {
    heroGradient: "from-orange-400 to-amber-700",
    description: "매주 일요일 뫼즈강변 약 1.5km에 걸쳐 펼쳐지는 벨기에 최대의 노천시장. 식료품, 의류, 골동품, 꽃, 애완동물까지 500개 이상의 노점이 들어서는 리에주의 전통 시장입니다.",
    history: "16세기부터 시작된 리에주의 전통 일요 시장으로 400년 이상의 역사를 가지고 있습니다. 벨기에에서 가장 크고 가장 오래된 노천시장 중 하나로 매주 일요일 약 1만 명이 방문합니다.",
    visitInfo: {
      hours: "매주 일요일 08:00~14:30",
      admission: "무료",
      address: "Quai de la Batte, 4000 Liège",
    },
    highlights: [
      "500개 이상의 다양한 노점 구경",
      "현지 식료품과 왈로니아 특산물 시식",
      "뫼즈강변 산책과 함께 즐기는 시장 투어",
      "리에주 와플과 부레트(미트볼) 길거리 음식",
    ],
    nearbyAttractions: [
      "뷰렌 산 계단 (도보 10분)",
      "왕자주교 궁전 (도보 5분)",
      "리에주-기유맹 역 (도보 20분)",
    ],
    photoTips: "이른 아침(8시경) 시장이 열리며 노점이 설치되는 활기찬 모습을 담을 수 있습니다. 뫼즈강변에서 시장 전경을 촬영해보세요.",
    tips: [
      "이른 아침에 방문해야 여유롭게 구경할 수 있습니다 (10시 이후 매우 혼잡).",
      "리에주 와플과 부레트 시식은 필수입니다.",
      "소매치기에 주의하고 귀중품은 안전하게 보관하세요.",
    ],
  },

  // ===== DINANT =====
  "belgium/wallonia/dinant/dinant-citadel": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "뫼즈강변 100m 높이 절벽 위에 자리한 11세기 요새. 케이블카를 타고 올라가면 디낭 마을과 뫼즈강이 만드는 극적인 경관이 발 아래 펼쳐지며, 요새 내부에서는 디낭의 격동적인 군사 역사를 체험할 수 있습니다.",
    history: "1051년 최초 건설 이후 수백 년간 파괴와 재건을 반복했습니다. 네덜란드 통치기인 1820년에 현재 형태로 재건되었으며, 두 차례 세계대전의 격전지이기도 합니다.",
    visitInfo: {
      hours: "4~9월: 10:00~18:00 / 10~3월: 10:00~16:30 (월요일 휴관, 성수기 제외)",
      admission: "시타델+케이블카: 성인 €13, 어린이(4~12세) €10.50",
      address: "Place Reine Astrid 3, 5500 Dinant",
      website: "https://www.citadellededinant.be",
    },
    highlights: [
      "케이블카로 올라가며 바라보는 뫼즈강 절경",
      "요새 내부 군사 역사 박물관",
      "전망대에서 디낭 마을과 뫼즈강 파노라마",
      "제1·2차 세계대전 관련 전시",
    ],
    nearbyAttractions: [
      "노트르담 교회 (케이블카 탑승장 바로 옆)",
      "아돌프 삭스 하우스 (도보 5분)",
      "샤를 드 골 다리 (도보 3분)",
    ],
    photoTips: "강 건너편에서 시타델과 노트르담 교회, 뫼즈강을 한 프레임에 담으면 디낭의 상징적인 사진을 얻을 수 있습니다.",
    tips: [
      "케이블카와 시타델 결합 티켓을 구매하세요.",
      "408개의 계단으로도 올라갈 수 있지만 케이블카를 추천합니다.",
      "강 건너편 사진 포인트에서 디낭 전경을 먼저 촬영하세요.",
    ],
  },

  // ===== NAMUR =====
  "belgium/wallonia/namur/namur-citadel": {
    heroGradient: "from-stone-500 to-zinc-800",
    description: "뫼즈강과 삼브르강이 합류하는 지점에 우뚝 선 유럽 최대 규모의 요새 중 하나. 2,000년에 걸친 군사 역사를 간직한 성채에서 나뮈르 도시와 두 강의 합류점을 내려다볼 수 있습니다.",
    history: "로마 시대부터 전략적 요충지로 활용되었으며 중세, 스페인, 오스트리아, 프랑스, 네덜란드 통치기를 거치며 끊임없이 확장·강화되었습니다. 나폴레옹이 '유럽의 개미집'이라 불렀던 거대한 지하 통로가 유명합니다.",
    visitInfo: {
      hours: "4~9월: 10:00~18:00 / 10~3월: 10:00~17:00",
      admission: "테라 노바 방문자센터: 성인 €8 / 지하 통로 투어: 성인 €10",
      address: "Route Merveilleuse 64, 5000 Namur",
      website: "https://www.citadelle.namur.be",
    },
    highlights: [
      "테라 노바 방문자센터의 인터랙티브 역사 전시",
      "나폴레옹이 명명한 지하 통로 가이드 투어",
      "두 강의 합류점과 나뮈르 시내 전망",
      "요새 정원과 산책로에서의 여유로운 산책",
    ],
    nearbyAttractions: [
      "성 오뱅 대성당 (도보 15분, 하산 시)",
      "나뮈르 구시가지 (도보 15분)",
      "뫼즈강 유람선 선착장 (하산 후 도보 10분)",
    ],
    photoTips: "강변에서 올려다보며 시타델 전체를 촬영하거나, 시타델 위에서 두 강의 합류점을 내려다보며 촬영하세요.",
    tips: [
      "꼬마 기차(Petit Train)로 편하게 올라갈 수 있습니다 (별도 요금).",
      "지하 통로 투어는 사전 예약이 필요할 수 있으니 확인하세요.",
      "요새가 넓으니 2~3시간 여유를 가지고 방문하세요.",
    ],
  },

  // ===== DURBUY =====
  "belgium/ardennes/durbuy/durbuy-castle-old-town": {
    heroGradient: "from-lime-500 to-green-800",
    description: "'세계에서 가장 작은 도시'의 심장부. 11세기 기원의 뒤르뷔 성을 배경으로 중세 돌담 골목, 아기자기한 상점, 우르트 강변 레스토랑이 어우러진 동화 같은 마을 산책 코스입니다.",
    history: "뒤르뷔는 1331년 룩셈부르크의 요한 왕으로부터 도시 헌장을 받았으나 인구가 적어 '세계에서 가장 작은 도시'라는 별명을 얻었습니다. 성은 11세기에 건설되어 여러 차례 개조되었으며 현재는 비공개입니다.",
    visitInfo: {
      hours: "구시가지: 24시간 / 성 내부: 비공개",
      admission: "무료 (구시가지 산책)",
      address: "Rue Comte Théodule d'Ursel, 6940 Durbuy",
    },
    highlights: [
      "중세 돌담 골목 산책",
      "뒤르뷔 성 외관과 성 주변 전망",
      "우르트 강변 테라스에서 식사",
      "반 레시앙 골목(가장 좁은 골목) 통과 체험",
    ],
    nearbyAttractions: [
      "토피어리 공원 (도보 5분)",
      "앙티-아틀라스 바위 (도보 10분)",
      "우르트강 카약 출발점 (도보 5분)",
    ],
    photoTips: "우르트강 다리에서 성과 구시가지를 함께 담으면 뒤르뷔의 대표 사진을 얻을 수 있습니다.",
    tips: [
      "성 내부는 비공개이나 외관과 주변 경관만으로 충분합니다.",
      "주말에는 관광객이 몰리니 평일 방문을 추천합니다.",
      "구시가지 레스토랑에서 아르덴 전통 요리를 맛보세요.",
    ],
  },

  // ===== BOUILLON =====
  "belgium/ardennes/bouillon/bouillon-castle": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "스무아강이 감싸는 절벽 위에 자리한 벨기에에서 가장 오래되고 인상적인 봉건 성. 제1차 십자군 원정 지도자 부용의 고드프루아가 태어난 성으로 아르덴의 웅장한 자연 속에 위치합니다.",
    history: "8세기에 처음 건설되었으며 11세기 십자군 원정 자금을 마련하기 위해 고드프루아가 리에주 주교에게 매각했습니다. 이후 여러 차례 확장되었으며 현재 벨기에에서 가장 잘 보존된 봉건 성 중 하나입니다.",
    visitInfo: {
      hours: "4~8월: 10:00~18:00 / 3·9·10월: 10:00~17:00 / 11~2월: 주말 13:00~17:00",
      admission: "성인 €10, 어린이(4~12세) €7",
      address: "Rue du Château, 6830 Bouillon",
      website: "https://www.bouillon-initiative.be",
    },
    highlights: [
      "절벽 위 성에서 스무아강과 아르덴 숲 파노라마",
      "매사냥 시범 공연 (매일 11:00, 14:00, 15:30)",
      "지하 통로와 감옥 탐방",
      "십자군 시대 역사 전시",
    ],
    nearbyAttractions: [
      "스무아강 카약 (도보 10분)",
      "고드프루아 박물관 (도보 5분)",
      "부용 구시가지 산책 (도보 5분)",
    ],
    photoTips: "스무아강 건너편 도로에서 성 전체와 강이 함께 담기는 앵글이 최고입니다. 성 위에서는 강이 만드는 S자 곡선을 촬영하세요.",
    tips: [
      "매사냥 시범 공연 시간에 맞춰 방문하세요.",
      "성 내부 통로가 어둡고 미끄러울 수 있으니 조심하세요.",
      "오르발 수도원과 함께 당일 코스로 계획하면 좋습니다.",
    ],
  },

  // ===== SPA =====
  "belgium/ardennes/spa/thermes-de-spa": {
    heroGradient: "from-sky-500 to-cyan-800",
    description: "'스파'라는 단어의 어원이 된 도시에 위치한 현대적 온천 시설. 언덕 위에 자리하여 아르덴 숲을 바라보며 온천욕을 즐길 수 있으며, 실내외 풀, 사우나, 하맘, 스파 트리트먼트를 갖추고 있습니다.",
    history: "스파의 광천수는 로마 시대부터 치유력으로 유명했습니다. 18세기에는 유럽 왕족과 귀족의 필수 휴양지였으며, 2004년 현재의 현대적 시설로 재개장했습니다. 2021년 유네스코 세계유산(유럽의 주요 스파 도시)에 등재되었습니다.",
    visitInfo: {
      hours: "매일 10:00~21:00 (금·토 ~22:00)",
      admission: "3시간: €38 / 반일(5시간): €46 / 종일: €56 (주말·공휴일 할증)",
      address: "Colline d'Annette et Lubin 1, 4900 Spa",
      website: "https://www.thermesdespa.com",
    },
    highlights: [
      "아르덴 숲을 바라보는 야외 온천풀",
      "다양한 테마의 사우나와 스팀룸",
      "터키식 하맘 체험",
      "마사지 및 스파 트리트먼트",
      "케이블카(funicular)로 올라가는 특별한 접근",
    ],
    nearbyAttractions: [
      "스파 광천수 분수 (케이블카로 하산 후 도보 10분)",
      "스파 카지노 (도보 15분, 하산 시)",
      "스파-프랑코샹 서킷 (자동차 약 15분)",
    ],
    photoTips: "야외 풀에서 아르덴 숲을 배경으로 촬영하면 분위기 있는 사진을 얻을 수 있습니다. 시설 내 촬영은 제한될 수 있으니 확인하세요.",
    tips: [
      "수영복 필수! 사우나 구역은 수영복 착용 불가(유럽 방식)이니 참고하세요.",
      "온라인 사전 예약이 권장되며 주말은 특히 빨리 마감됩니다.",
      "케이블카(funicular)를 타고 올라가면 산 정상의 온천에 도착합니다.",
      "평일 오전이 가장 한적하고 여유롭습니다.",
    ],
  },
};
