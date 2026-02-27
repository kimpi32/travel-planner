import type { CityDetail, AttractionDetail } from "../city-details";

export const hungaryCityDetails: Record<string, CityDetail> = {
  // ===== BUDAPEST =====
  "hungary/budapest/budapest": {
    heroGradient: "from-red-500 to-orange-700",
    description: "다뉴브 강이 가르는 부다와 페스트, 두 도시의 합작품. 세계적인 온천 문화, 화려한 의회 건물, 폐허 위에 꽃핀 루인바 문화까지, 동유럽의 보석으로 불리는 헝가리의 수도입니다.",
    bestTime: "4~10월 (크리스마스 마켓: 11월 말~12월)",
    stayArea: "페스트 시내 중심 (5~7구역)",
    transport: "메트로, 트램, 버스 (BKK 교통카드)",
    districts: [
      { name: "부다 성 지구", nameEn: "Buda Castle District", description: "다뉴브 강 서쪽 언덕 위의 역사 지구로 왕궁과 어부의 요새가 위치.", highlights: ["부다 왕궁", "어부의 요새", "마차시 성당", "세체니 다리"] },
      { name: "벨바로시", nameEn: "Belváros", description: "페스트 쪽 도심 핵심 지역으로 쇼핑과 레스토랑이 밀집.", highlights: ["버치 거리", "성 이슈트반 대성당", "다뉴브 강변 산책로"] },
      { name: "유대인 지구", nameEn: "Jewish Quarter", description: "7구역에 위치한 루인바 문화의 발상지로 밤문화와 카페가 활기찬 지역.", highlights: ["심플라 케르트", "대시너고그", "고즈두 우드바르"] },
    ],
    attractions: [
      { name: "부다 왕궁", nameEn: "Buda Castle", description: "13세기에 건설된 헝가리 왕들의 궁전으로 현재 국립미술관과 역사박물관이 입주.", category: "궁전", tip: "왕궁의 언덕 케이블카(시클로)를 타고 올라가면 다뉴브 강 전망이 훌륭합니다." },
      { name: "어부의 요새", nameEn: "Fisherman's Bastion", description: "네오 로마네스크-고딕 양식의 전망 테라스로 다뉴브 강과 의회 건물의 파노라마 뷰.", category: "전망대", tip: "일출·야경 시간대가 가장 아름답습니다. 상층 테라스는 유료." },
      { name: "헝가리 국회의사당", nameEn: "Hungarian Parliament", description: "네오고딕 양식의 압도적 건축물로 다뉴브 강변의 상징. 내부 가이드 투어로만 관람 가능.", category: "건축물", tip: "EU 시민 외에는 온라인 사전 예약 필수. 영어 투어를 선택하세요." },
      { name: "세체니 온천", nameEn: "Szechenyi Thermal Bath", description: "유럽 최대 규모의 공공 온천으로 네오바로크 양식의 노란 건물이 인상적.", category: "온천", tip: "주말은 매우 혼잡하니 평일 오전 방문을 추천합니다. 수영복·슬리퍼 지참!" },
      { name: "심플라 케르트", nameEn: "Szimpla Kert", description: "세계적으로 유명한 루인바의 원조. 폐건물을 개조한 독특한 분위기의 복합문화공간.", category: "루인바", tip: "일요일 오전에는 파머스 마켓이 열립니다." },
      { name: "성 이슈트반 대성당", nameEn: "St. Stephen's Basilica", description: "부다페스트 최대 성당으로 돔 전망대에서 시내 360도 조망이 가능.", category: "성당" },
    ],
    dayTrips: [
      { name: "센텐드레", nameEn: "Szentendre", description: "다뉴브 강변의 예술가 마을로 아기자기한 갤러리와 카페가 가득.", travelTime: "HÉV 교외열차 약 40분", gradient: "from-pink-400 to-rose-600" },
      { name: "에게르", nameEn: "Eger", description: "바로크 건축과 와인으로 유명한 역사 도시.", travelTime: "기차 약 1.5시간", gradient: "from-red-400 to-red-700" },
    ],
    localFood: [
      { name: "굴라시", description: "파프리카 베이스의 헝가리 대표 스튜로 진한 맛이 일품.", emoji: "🍲" },
      { name: "란고시", description: "튀긴 반죽 위에 사워크림과 치즈를 얹은 헝가리 길거리 음식.", emoji: "🫓" },
      { name: "키메시 칼라치", description: "굴뚝 모양으로 구운 달콤한 빵, 시나몬이나 초콜릿 토핑.", emoji: "🍩" },
    ],
    tips: [
      "부다페스트 카드(24/48/72시간)로 대중교통 + 주요 관광지 무료/할인 입장이 가능합니다.",
      "트램 2번 노선은 다뉴브 강변을 따라 달리는 '세계에서 가장 아름다운 트램' 노선입니다.",
      "환전은 시내 환전소에서 하되 공항·관광지 주변은 수수료가 높으니 주의하세요.",
      "야경 크루즈는 의회 건물과 부다 왕궁을 한 번에 감상할 수 있는 필수 코스입니다.",
    ],
  },

  // ===== LAKE BALATON =====
  "hungary/lake-balaton/balaton": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "중앙유럽 최대의 호수로 '헝가리의 바다'라 불립니다. 여름이면 수영과 요트, 겨울이면 얼어붙은 호수 위 스케이트를 즐기는 헝가리인의 대표 휴양지입니다.",
    bestTime: "6~9월 (수영 시즌)",
    stayArea: "시오포크 또는 바라톤퓌레드",
    transport: "부다페스트에서 기차 약 1.5~2시간, 호수 주변 버스·페리",
    districts: [
      { name: "시오포크", nameEn: "Siófok", description: "발라톤 남쪽 해안의 파티 타운으로 여름 나이트라이프의 중심지.", highlights: ["시오포크 비치", "페토피 산책로", "워터파크"] },
      { name: "바라톤퓌레드", nameEn: "Balatonfüred", description: "북쪽 해안의 우아한 휴양 도시로 온천과 요트 항구가 유명.", highlights: ["타고레 산책로", "요트 클럽", "로짜 칼만 심장병원"] },
    ],
    attractions: [
      { name: "발라톤 호수", nameEn: "Lake Balaton", description: "길이 77km의 중앙유럽 최대 담수호로 아름다운 일몰과 다양한 수상 레저가 가능.", category: "자연", tip: "남쪽 해안은 얕아서 가족 여행에, 북쪽은 깊고 조용하여 힐링에 적합합니다." },
      { name: "바라톤퓌레드 산책로", nameEn: "Balatonfüred Promenade", description: "호수변을 따라 이어지는 아름다운 산책로로 타고레 기념 나무가 있습니다.", category: "산책로" },
      { name: "발라톤 와인 지역", nameEn: "Balaton Wine Region", description: "화산 토양에서 자란 포도로 빚은 헝가리 와인의 대표 산지.", category: "와이너리", tip: "바다치 와인 지역의 셀러 투어를 추천합니다." },
    ],
    dayTrips: [
      { name: "티하니", nameEn: "Tihany", description: "발라톤 호수로 돌출된 반도 마을로 라벤더밭과 수도원이 유명.", travelTime: "페리 약 20분 / 버스 약 30분", gradient: "from-purple-400 to-indigo-600" },
    ],
    localFood: [
      { name: "발라톤 포가치", description: "발라톤 호수산 민물고기로 만든 튀김 요리.", emoji: "🐟" },
      { name: "란고시", description: "호수가 포장마차에서 즐기는 갓 튀긴 란고시.", emoji: "🫓" },
    ],
    tips: [
      "여름 성수기에는 숙소 조기 예약이 필수입니다.",
      "북쪽 해안의 와이너리 투어와 남쪽 해안의 해변 휴양을 조합하면 완벽한 여행이 됩니다.",
      "발라톤 호수 주변 자전거 도로가 잘 정비되어 있어 자전거 여행도 추천합니다.",
    ],
  },
  "hungary/lake-balaton/tihany": {
    heroGradient: "from-purple-400 to-indigo-600",
    description: "발라톤 호수에 돌출된 아름다운 반도 마을. 1055년에 세워진 베네딕트 수도원은 헝가리어가 최초로 기록된 역사적 장소이며, 라벤더 밭과 호수 전경이 그림 같습니다.",
    bestTime: "6~9월 (라벤더: 6월 말~7월)",
    stayArea: "티하니 마을 중심",
    transport: "바라톤퓌레드에서 버스 약 30분 / 페리 이용 가능",
    districts: [
      { name: "티하니 마을", nameEn: "Tihany Village", description: "수도원을 중심으로 형성된 작은 마을로 공예품 가게와 카페가 늘어서 있습니다.", highlights: ["티하니 수도원", "에코 힐", "라벤더 하우스"] },
    ],
    attractions: [
      { name: "티하니 수도원", nameEn: "Tihany Abbey", description: "1055년 설립된 베네딕트 수도원으로 헝가리 최초의 문서가 작성된 곳. 바로크 양식의 교회와 호수 전망이 인상적.", category: "수도원", tip: "수도원 뒤쪽 전망대에서 발라톤 호수 파노라마를 감상하세요." },
      { name: "라벤더 밭", nameEn: "Lavender Fields", description: "6~7월이면 보랏빛으로 물드는 티하니의 라벤더 밭.", category: "자연", tip: "라벤더 축제(6월 말)에 맞춰 방문하면 더욱 특별합니다." },
      { name: "내호수", nameEn: "Inner Lake", description: "화산 활동으로 형성된 티하니 반도 내부의 작은 호수.", category: "자연" },
    ],
    dayTrips: [
      { name: "바라톤퓌레드", nameEn: "Balatonfüred", description: "우아한 호수변 휴양 도시로 산책로와 요트 항구가 매력적.", travelTime: "버스 약 30분", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "라벤더 아이스크림", description: "티하니 특산 라벤더로 만든 향긋한 아이스크림.", emoji: "🍦" },
      { name: "발라톤 호수 생선 수프", description: "파프리카를 넣어 매콤하게 끓인 헝가리 전통 생선 수프.", emoji: "🍲" },
    ],
    tips: [
      "반도 전체를 도보로 둘러볼 수 있으니 편한 신발을 준비하세요.",
      "라벤더 관련 기념품은 라벤더 하우스에서 구입할 수 있습니다.",
      "여름 성수기에는 페리 시간표를 미리 확인하세요.",
    ],
  },

  // ===== COUNTRYSIDE =====
  "hungary/countryside/eger": {
    heroGradient: "from-red-600 to-rose-800",
    description: "바로크 건축의 보석이자 헝가리 와인의 중심지. 오스만 제국에 맞선 영웅적 항전의 역사가 깃든 에게르 성과, '미녀의 계곡'이라 불리는 와인 셀러 거리가 유명합니다.",
    bestTime: "5~10월 (포도 수확기: 9~10월)",
    stayArea: "도보시 이슈트반 광장 주변",
    transport: "부다페스트에서 기차 약 1.5시간",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "바로크 양식 건물이 줄지어 선 아름다운 도심 지역.", highlights: ["에게르 성", "도보시 광장", "미나렛"] },
      { name: "미녀의 계곡", nameEn: "Valley of the Beautiful Women", description: "수십 개의 와인 셀러가 모여 있는 에게르의 와인 천국.", highlights: ["와인 셀러 투어", "에그리 비카베르"] },
    ],
    attractions: [
      { name: "에게르 성", nameEn: "Eger Castle", description: "1552년 오스만 대군에 맞서 영웅적으로 방어한 역사적 요새. 성벽 위에서 에게르 시내 전경을 감상할 수 있습니다.", category: "성", tip: "성 내부 박물관과 지하 요새도 함께 둘러보세요." },
      { name: "미녀의 계곡", nameEn: "Valley of the Beautiful Women", description: "언덕에 파놓은 와인 셀러들이 늘어선 거리로, 셀러마다 다른 와인을 시음할 수 있습니다.", category: "와이너리", tip: "에그리 비카베르(황소의 피)는 에게르 대표 레드 와인으로 꼭 맛보세요." },
      { name: "에게르 미나렛", nameEn: "Eger Minaret", description: "오스만 시대의 유산으로 유럽 최북단 미나렛. 좁은 나선형 계단을 올라 전망을 즐길 수 있습니다.", category: "역사" },
      { name: "에게르 대성당", nameEn: "Eger Basilica", description: "헝가리에서 두 번째로 큰 성당으로 신고전주의 양식의 웅장한 건축물.", category: "성당" },
    ],
    dayTrips: [
      { name: "부다페스트", nameEn: "Budapest", description: "헝가리의 수도로 다뉴브 강변의 화려한 명소들.", travelTime: "기차 약 1.5시간", gradient: "from-red-500 to-orange-700" },
    ],
    localFood: [
      { name: "에그리 비카베르", description: "'황소의 피'라 불리는 에게르 대표 레드 블렌드 와인.", emoji: "🍷" },
      { name: "굴라시 수프", description: "파프리카와 소고기로 끓인 헝가리 전통 수프.", emoji: "🍲" },
    ],
    tips: [
      "미녀의 계곡 셀러 투어는 오후 늦게 시작하여 저녁까지 즐기는 것이 현지 스타일입니다.",
      "에게르 성은 오전에 방문하면 한적하게 둘러볼 수 있습니다.",
      "에게르 터키식 목욕탕(온천)도 색다른 체험입니다.",
    ],
  },
  "hungary/countryside/pecs": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "지중해 분위기가 물씬 풍기는 헝가리 남부의 문화 도시. 2000년 역사의 로마 유적과 오스만 유산, 그리고 현대 미술이 공존하며 2010년 유럽 문화수도로 선정되었습니다.",
    bestTime: "4~10월",
    stayArea: "세체니 광장 주변",
    transport: "부다페스트에서 기차 약 3시간",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "세체니 광장을 중심으로 로마, 오스만, 바로크 시대의 유산이 공존하는 역사 지구.", highlights: ["페치 대성당", "세체니 광장", "카시 파샤 모스크"] },
    ],
    attractions: [
      { name: "페치 대성당", nameEn: "Pecs Cathedral", description: "11세기에 건설된 4개의 탑이 특징적인 로마네스크 양식 대성당. 지하 묘지의 초기 기독교 벽화는 UNESCO 세계유산.", category: "성당", tip: "지하 초기 기독교 묘지(UNESCO)도 함께 방문하세요." },
      { name: "세체니 광장", nameEn: "Széchenyi Square", description: "페치의 중심 광장으로 가지 카시 파샤 모스크와 분수가 있는 아름다운 공간.", category: "광장" },
      { name: "초손트바리 박물관", nameEn: "Csontváry Museum", description: "헝가리의 천재 화가 초손트바리 코슈토커의 대작들을 소장한 미술관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "빌라니", nameEn: "Villány", description: "헝가리 최고급 레드 와인 산지로 와이너리 투어가 인기.", travelTime: "버스 약 40분", gradient: "from-red-500 to-red-800" },
    ],
    localFood: [
      { name: "페치 마르치판", description: "페치 전통 아몬드 과자로 정교한 장식이 특징.", emoji: "🍬" },
      { name: "메체키 와인", description: "페치 인근 메체크 산맥에서 생산되는 지역 와인.", emoji: "🍷" },
    ],
    tips: [
      "페치는 도보로 충분히 둘러볼 수 있는 아담한 도시입니다.",
      "지하 초기 기독교 묘지는 별도 티켓이 필요합니다.",
      "빌라니 와인 지역 당일치기를 강력 추천합니다.",
    ],
  },
  "hungary/countryside/szentendre": {
    heroGradient: "from-pink-400 to-rose-600",
    description: "부다페스트에서 가장 가까운 예술가 마을. 다뉴브 강변의 알록달록한 바로크 건물들 사이로 갤러리, 공예품 가게, 카페가 줄지어 있어 반나절 산책하기에 완벽합니다.",
    bestTime: "4~10월",
    stayArea: "포 광장 주변 (당일치기 추천)",
    transport: "부다페스트에서 HÉV 교외열차 약 40분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "포 광장을 중심으로 갤러리와 박물관이 밀집한 예술의 거리.", highlights: ["포 광장", "블라고베슈텐스카 교회", "마르치판 박물관"] },
    ],
    attractions: [
      { name: "센텐드레 예술가 마을", nameEn: "Szentendre Artists' Village", description: "20세기 초부터 화가들이 모여든 예술 마을로 수십 개의 갤러리와 아틀리에가 골목마다 가득.", category: "예술", tip: "포 광장에서 시작해 골목골목을 누비며 갤러리 탐방하세요." },
      { name: "마르치판 박물관", nameEn: "Marzipan Museum", description: "마르치판으로 만든 놀라운 예술 작품을 전시하는 이색 박물관.", category: "박물관", tip: "마르치판 기념품을 구입할 수 있는 숍도 있습니다." },
      { name: "블라고베슈텐스카 교회", nameEn: "Blagovestenska Church", description: "18세기 세르비아 정교회 양식의 아름다운 교회로 이콘 벽화가 인상적.", category: "교회" },
    ],
    dayTrips: [
      { name: "비셰그라드", nameEn: "Visegrád", description: "다뉴브 강변의 중세 요새로 환상적인 강 전경.", travelTime: "버스 약 30분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "마르치판 과자", description: "센텐드레 명물 아몬드 마르치판으로 만든 각종 과자.", emoji: "🍬" },
      { name: "헝가리 팔라친타", description: "달콤한 소스를 채운 헝가리식 크레이프.", emoji: "🥞" },
    ],
    tips: [
      "부다페스트에서 HÉV 교외열차로 40분이면 도착, 반나절 당일치기가 완벽합니다.",
      "주말에는 관광객이 몰리니 평일 오전 방문이 한적합니다.",
      "다뉴브 강변 산책로에서 아이스크림 먹으며 여유를 즐기세요.",
    ],
  },
};

export const hungaryAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BUDAPEST =====
  "hungary/budapest/budapest/buda-castle": {
    heroGradient: "from-red-500 to-orange-700",
    description: "13세기 벨러 4세가 건설을 시작해 수백 년간 증축된 헝가리 왕궁. 현재 국립미술관과 부다페스트 역사박물관이 입주해 있으며, 다뉴브 강과 페스트 시가지의 탁 트인 전망을 자랑합니다.",
    history: "1265년 최초 건설 이후 오스만 점령, 합스부르크 재건, 2차 대전 폭격 등 파란만장한 역사를 거쳤습니다.",
    visitInfo: {
      hours: "외부 영역: 24시간 / 박물관: 10:00-18:00 (월요일 휴관)",
      admission: "궁전 외부 무료 / 국립미술관: 3,200 HUF",
      address: "Szent György tér 2, 1014 Budapest",
    },
    highlights: [
      "국립미술관의 헝가리 회화 컬렉션",
      "다뉴브 강과 페스트 시가지 파노라마 전망",
      "시클로(케이블카)에서 감상하는 세체니 다리",
      "왕궁 지하 미궁(Labyrinth) 탐험",
    ],
    nearbyAttractions: ["어부의 요새", "마차시 성당", "세체니 다리", "부다페스트 역사박물관"],
    photoTips: "세체니 다리 방향으로 다뉴브 강을 배경으로 촬영하면 야경 사진이 특히 인상적입니다.",
    tips: [
      "시클로(케이블카)를 타고 올라가면 다뉴브 강 전경이 펼쳐집니다.",
      "야경이 매우 아름다우니 일몰 후에도 방문해 보세요.",
      "왕궁 지하 미궁(Labyrinth)도 독특한 체험입니다.",
    ],
  },
  "hungary/budapest/budapest/fishermans-bastion": {
    heroGradient: "from-stone-300 to-stone-600",
    description: "1902년 완성된 네오 로마네스크-고딕 양식의 전망 테라스. 7개의 탑은 헝가리를 세운 마자르 7부족을 상징하며, 다뉴브 강 너머 국회의사당의 전망이 압권입니다.",
    history: "중세 어부 길드가 이 구간의 성벽을 방어한 데서 이름이 유래했습니다.",
    visitInfo: {
      hours: "24시간 (상층 테라스: 9:00-19:00, 계절별 변동)",
      admission: "하층 무료 / 상층 테라스: 1,200 HUF",
      address: "Szentháromság tér, 1014 Budapest",
    },
    highlights: [
      "7개 탑에서 감상하는 다뉴브 강 파노라마",
      "국회의사당 정면 뷰",
      "마차시 성당과 이어지는 산책 동선",
      "야간 조명이 비추는 환상적인 야경",
    ],
    nearbyAttractions: ["마차시 성당", "부다 왕궁", "세체니 다리", "부다 성 지구 골목"],
    photoTips: "일출 시간에 방문하면 인파 없이 국회의사당을 배경으로 최고의 사진을 남길 수 있습니다.",
    tips: [
      "일출 시간에 방문하면 인파 없이 최고의 사진을 남길 수 있습니다.",
      "바로 옆 마차시 성당도 함께 방문하세요.",
      "야경 시간대에는 무료로 개방됩니다.",
    ],
  },
  "hungary/budapest/budapest/hungarian-parliament": {
    heroGradient: "from-amber-400 to-amber-700",
    description: "691개의 방과 길이 268m의 압도적인 네오고딕 건축물. 다뉴브 강변에 우뚝 선 헝가리 민주주의의 상징으로, 내부의 황금 장식과 성 이슈트반 왕관이 볼거리입니다.",
    history: "1885~1904년 건설. 영국 웨스트민스터 궁전에서 영감을 받았으나 규모는 더 큽니다.",
    visitInfo: {
      hours: "가이드 투어: 8:00-18:00 (회기 중 변동)",
      admission: "비EU 시민: 6,000 HUF",
      address: "Kossuth Lajos tér 1-3, 1055 Budapest",
      website: "https://www.jfrfrgy.hu",
    },
    highlights: [
      "황금 장식의 중앙 계단과 돔 홀",
      "성 이슈트반 왕관 전시",
      "691개 방을 가진 네오고딕 내부 장식",
      "다뉴브 강변에서 바라본 268m 외관",
    ],
    nearbyAttractions: ["다뉴브 강변의 신발 조형물", "세체니 다리", "성 이슈트반 대성당", "자유 광장"],
    photoTips: "건물 맞은편 다뉴브 강변에서 전체 외관 촬영이 가능하며, 트램 2번 차창에서도 멋진 앵글을 잡을 수 있습니다.",
    tips: [
      "온라인 사전 예약 필수 (jfrfrgy.hu). 현장 매진이 잦습니다.",
      "건물 맞은편 다뉴브 강변에서 전체 외관 촬영이 가능합니다.",
      "야경이 특히 아름다우니 트램 2번에서 감상하세요.",
    ],
  },
  "hungary/budapest/budapest/szechenyi-thermal-bath": {
    heroGradient: "from-yellow-400 to-amber-600",
    description: "1913년 개장한 유럽 최대 규모의 공공 온천. 네오바로크 양식의 노란 건물 안에 18개의 풀(실내 3, 실외 15)과 다양한 사우나가 갖춰져 있습니다.",
    history: "1879년 시추로 발견된 76도 온천수를 활용하여 건설되었습니다.",
    visitInfo: {
      hours: "6:00-22:00 (매일)",
      admission: "일일 이용권: 7,500~9,500 HUF (캐빈/로커 선택)",
      address: "Állatkerti krt. 9-11, 1146 Budapest",
      website: "https://www.szechenyibath.hu",
    },
    highlights: [
      "네오바로크 양식의 노란 건물과 야외 온천풀",
      "18개 풀에서 다양한 온도의 온천 체험",
      "체스를 두며 온천을 즐기는 현지인들의 모습",
      "토요일 밤 스파 파티 이벤트",
    ],
    nearbyAttractions: ["버이더후녀드 성", "부다페스트 동물원", "시 공원", "영웅 광장"],
    photoTips: "야외 온천풀의 증기가 피어오르는 겨울 아침이 가장 포토제닉한 순간입니다.",
    tips: [
      "수영복과 슬리퍼는 필수 지참! 현장 대여도 가능하나 비쌉니다.",
      "평일 오전이 가장 한적합니다.",
      "토요일 밤 '스파 파티' 이벤트도 인기입니다.",
    ],
  },
  "hungary/budapest/budapest/ruin-bars": {
    heroGradient: "from-violet-500 to-purple-700",
    description: "2002년 문을 연 세계 최초의 루인바. 7구역의 폐건물을 개조하여 빈티지 가구, 그래피티 아트, 식물로 꾸민 독특한 복합문화공간으로, 부다페스트 나이트라이프의 상징입니다.",
    history: "유대인 지구의 버려진 건물을 창의적으로 재활용한 문화 운동에서 시작되었습니다.",
    visitInfo: {
      hours: "12:00-04:00 (매일), 일요일 파머스 마켓: 9:00-14:00",
      admission: "무료 입장",
      address: "Kazinczy utca 14, 1075 Budapest",
      website: "https://www.szimpla.hu",
    },
    highlights: [
      "빈티지 가구와 그래피티 아트로 채워진 독특한 인테리어",
      "일요일 오전 파머스 마켓",
      "2층의 다양한 설치 미술 작품",
      "라이브 음악과 다채로운 이벤트",
    ],
    nearbyAttractions: ["대시너고그", "고즈두 우드바르", "Instant 루인바", "유대인 지구 거리 예술"],
    tips: [
      "일요일 오전 파머스 마켓은 로컬 식재료와 수공예품을 만날 수 있습니다.",
      "2층까지 꼼꼼히 둘러보면 독특한 설치 미술들을 발견할 수 있습니다.",
      "주변에 Instant, Fogas Ház 등 다른 루인바도 함께 탐방해 보세요.",
    ],
  },

  // ===== EGER =====
  "hungary/countryside/eger/eger-castle": {
    heroGradient: "from-red-600 to-rose-800",
    description: "1552년 이슈트반 도보가 이끄는 2,000명의 수비대가 4만 오스만 대군을 물리친 영웅적 항전의 무대. 헝가리 민족 자부심의 상징으로, 성벽 위에서 에게르 시내를 한눈에 조망할 수 있습니다.",
    history: "13세기 건설, 1552년 오스만 포위전에서의 영웅적 방어는 헝가리 문학 '에게르의 별'로 유명합니다.",
    visitInfo: {
      hours: "10:00-18:00 (4~10월) / 10:00-16:00 (11~3월)",
      admission: "성인: 2,400 HUF (통합 티켓)",
      address: "Vár 1, 3300 Eger",
    },
    highlights: [
      "성벽 위에서 감상하는 에게르 시내 파노라마",
      "1552년 포위전 역사를 다룬 이슈트반 도보 박물관",
      "지하 요새(카제마타) 탐험 투어",
      "성 내부 무기 전시와 화폐 박물관",
    ],
    nearbyAttractions: ["에게르 미나렛", "에게르 대성당", "도보시 이슈트반 광장", "터키식 목욕탕"],
    tips: [
      "지하 요새(카제마타) 투어는 별도 시간에 진행되니 미리 확인하세요.",
      "성벽 산책은 무료로 가능합니다.",
      "성 내 박물관에서 1552년 포위전 역사를 상세히 배울 수 있습니다.",
    ],
  },
  "hungary/countryside/eger/valley-of-beautiful-women": {
    heroGradient: "from-rose-400 to-red-700",
    description: "에게르 시내에서 도보 15분 거리의 와인 셀러 골짜기. U자형 계곡을 따라 수십 개의 셀러가 늘어서 있으며, 각 셀러에서 에게르 와인을 저렴하게 시음할 수 있습니다.",
    history: "전설에 따르면 아름다운 여인들이 이 계곡에서 목욕을 했다 하여 이름이 붙었습니다.",
    visitInfo: {
      hours: "대부분 셀러: 10:00-20:00 (계절별 변동)",
      admission: "무료 입장 / 와인 시음: 200~500 HUF/잔",
      address: "Szépasszonyvölgy, 3300 Eger",
    },
    highlights: [
      "U자형 계곡을 따라 늘어선 수십 개의 와인 셀러",
      "에그리 비카베르(황소의 피) 레드 와인 시음",
      "셀러마다 다른 분위기와 고유한 와인",
      "여름 저녁의 라이브 음악 공연",
    ],
    nearbyAttractions: ["에게르 성", "에게르 미나렛", "에게르 대성당", "도보시 광장"],
    tips: [
      "에그리 비카베르(황소의 피) 레드 와인은 반드시 맛보세요.",
      "셀러마다 분위기와 와인이 다르니 여러 곳을 비교해 보세요.",
      "오후 늦게 방문하여 저녁까지 즐기는 것이 현지인 스타일입니다.",
    ],
  },

  // ===== SZENTENDRE =====
  "hungary/countryside/szentendre/artists-village": {
    heroGradient: "from-pink-400 to-rose-600",
    description: "20세기 초 인상파 화가들이 모여들면서 시작된 다뉴브 강변의 예술가 마을. 알록달록한 바로크 건물 사이 좁은 골목마다 갤러리, 아틀리에, 공예품 가게가 가득합니다.",
    history: "18세기 세르비아 상인들이 정착하면서 형성되었고, 20세기 초부터 예술가들의 안식처가 되었습니다.",
    visitInfo: {
      hours: "대부분 갤러리: 10:00-18:00",
      admission: "거리 산책 무료 / 개별 갤러리: 500~2,000 HUF",
      address: "Fő tér, 2000 Szentendre",
    },
    highlights: [
      "알록달록한 바로크 건물 사이 골목 산책",
      "포 광장 주변의 갤러리와 아틀리에",
      "다뉴브 강변 산책로의 여유로운 풍경",
      "핸드메이드 공예품과 기념품 쇼핑",
    ],
    nearbyAttractions: ["마르치판 박물관", "블라고베슈텐스카 교회", "세르비아 정교회 박물관", "다뉴브 강변 산책로"],
    tips: [
      "포 광장에서 출발하여 골목골목을 탐험해 보세요.",
      "핸드메이드 공예품은 독특한 기념품이 됩니다.",
      "다뉴브 강변 산책로에서 아이스크림과 여유를 즐기세요.",
    ],
  },

  // ===== PECS =====
  "hungary/countryside/pecs/pecs-cathedral": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "4개의 탑이 특징적인 11세기 로마네스크 양식 대성당. 지하에는 4세기 로마 시대 초기 기독교 묘지(UNESCO 세계유산)가 보존되어 있어 2000년의 역사를 한자리에서 만날 수 있습니다.",
    history: "1009년 이슈트반 1세에 의해 주교좌로 설립. 오스만 시대에 모스크로 사용된 후 18세기에 재건.",
    visitInfo: {
      hours: "9:00-17:00 (월~토) / 13:00-17:00 (일)",
      admission: "성당: 2,000 HUF / 초기 기독교 묘지: 2,400 HUF",
      address: "Szent István tér 23, 7621 Pécs",
    },
    highlights: [
      "4개의 탑이 특징적인 로마네스크 양식 외관",
      "지하 초기 기독교 묘지(UNESCO 세계유산)",
      "오스만 시대와 바로크 재건의 역사적 층위",
      "대성당 앞 광장에서의 구시가지 전경",
    ],
    nearbyAttractions: ["세체니 광장", "카시 파샤 모스크", "초손트바리 박물관", "비숍 팰리스"],
    tips: [
      "지하 초기 기독교 묘지(UNESCO)는 별도 티켓으로 반드시 방문하세요.",
      "대성당 앞 광장에서 페치 구시가지 전경을 감상할 수 있습니다.",
      "인근 비숍 팰리스와 바르바칸도 함께 둘러보세요.",
    ],
  },

  // ===== TIHANY =====
  "hungary/lake-balaton/tihany/tihany-abbey": {
    heroGradient: "from-purple-400 to-indigo-600",
    description: "1055년 안드라시 1세가 건립한 베네딕트 수도원으로, 헝가리어가 최초로 기록된 설립 문서가 이곳에서 작성되었습니다. 바로크 양식으로 재건된 교회 내부와 발라톤 호수의 파노라마 전망이 인상적입니다.",
    history: "1055년 설립 문서에 헝가리어 단어가 최초로 기록되어 헝가리 언어사에서 중요한 위치를 차지합니다.",
    visitInfo: {
      hours: "9:00-17:30 (4~10월) / 10:00-16:00 (11~3월)",
      admission: "성인: 2,000 HUF",
      address: "I. András tér 1, 8237 Tihany",
    },
    highlights: [
      "바로크 양식으로 재건된 교회 내부 장식",
      "수도원 뒤쪽 전망대의 발라톤 호수 파노라마",
      "헝가리 최초의 문서(1055년 설립 칙서)",
      "지하의 중세 유물 전시",
    ],
    nearbyAttractions: ["라벤더 밭", "내호수", "에코 힐", "티하니 마을 공예품 가게"],
    photoTips: "수도원 뒤쪽 전망대에서 발라톤 호수를 배경으로 촬영하면 최고의 파노라마 사진을 얻을 수 있습니다.",
    tips: [
      "수도원 뒤쪽 전망대에서 발라톤 호수 파노라마를 놓치지 마세요.",
      "6~7월이면 주변 라벤더 밭과 함께 방문하면 완벽합니다.",
      "수도원 지하의 중세 유물 전시도 관람하세요.",
    ],
  },

  // ===== BALATON =====
  "hungary/lake-balaton/balaton/lake-balaton": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "길이 77km, 면적 594km²의 중앙유럽 최대 담수호. '헝가리의 바다'로 불리며 여름이면 수영, 요트, 윈드서핑, 겨울이면 빙상 스포츠를 즐기는 국민 휴양지입니다.",
    history: "약 500만 년 전 지각 변동으로 형성되었으며, 19세기부터 본격적인 관광지로 발전했습니다.",
    visitInfo: {
      hours: "24시간 (해변 시설: 8:00-20:00, 6~9월)",
      admission: "공용 해변 무료~1,000 HUF / 사설 해변: 1,500~3,000 HUF",
      address: "Balaton, 8600 Siófok / 8230 Balatonfüred",
    },
    highlights: [
      "77km에 걸친 아름다운 호수 일몰",
      "여름 수영, 요트, 윈드서핑 등 수상 레저",
      "북쪽 해안 바다치 와인 지역의 화산 토양 와인",
      "호수 일주 자전거 도로(약 200km)",
    ],
    nearbyAttractions: ["티하니 반도", "바라톤퓌레드 산책로", "바다치 와인 지역", "시오포크 비치"],
    tips: [
      "남쪽 해안은 수심이 얕아(최대 1.5m) 어린이 동반 가족에게 적합합니다.",
      "북쪽 해안의 바다치 와인 지역에서 화산 토양 와인을 맛보세요.",
      "호수 일주 자전거 도로(약 200km)는 자전거 여행자의 버킷리스트입니다.",
    ],
  },
};
