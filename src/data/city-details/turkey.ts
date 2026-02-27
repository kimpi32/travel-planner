import type { CityDetail, AttractionDetail } from "../city-details";

export const turkeyCityDetails: Record<string, CityDetail> = {
  // ===== ISTANBUL & MARMARA =====
  "turkey/istanbul-marmara/istanbul": {
    heroGradient: "from-red-500 to-amber-700",
    description: "동서양이 만나는 세계 유일의 대륙 횡단 도시. 비잔틴과 오스만 제국의 유산이 공존하며, 보스포루스 해협의 아름다운 풍경과 활기찬 바자르가 매력적입니다.",
    bestTime: "4~6월, 9~11월 (여름은 매우 덥고 혼잡)",
    stayArea: "술탄아흐메트 / 베이올루 (탁심) 주변",
    transport: "메트로, 트램, 페리, 이스탄불카르트 교통카드",
    districts: [
      { name: "술탄아흐메트", nameEn: "Sultanahmet", description: "아야 소피아, 블루 모스크, 톱카프 궁전이 밀집한 구시가지 핵심 지역.", highlights: ["아야 소피아", "블루 모스크", "톱카프 궁전", "히포드롬"] },
      { name: "베이올루", nameEn: "Beyoglu", description: "이스티클랄 거리와 갈라타 탑이 있는 신시가지의 문화·예술 중심지.", highlights: ["이스티클랄 거리", "갈라타 탑", "탁심 광장"] },
      { name: "그랜드 바자르 지구", nameEn: "Grand Bazaar District", description: "세계에서 가장 크고 오래된 실내 시장을 품은 상업 지구.", highlights: ["그랜드 바자르", "이집션 바자르", "수레이마니예 모스크"] },
    ],
    attractions: [
      { name: "아야 소피아", nameEn: "Hagia Sophia", description: "537년 건립된 비잔틴 건축의 걸작. 대성당에서 모스크로, 다시 박물관을 거쳐 현재 모스크로 운영 중입니다.", category: "모스크/유적", tip: "금요일 예배 시간을 피해 방문하세요. 입장 무료입니다." },
      { name: "블루 모스크", nameEn: "Blue Mosque", description: "6개의 미나렛과 2만 개 이상의 푸른 이즈닉 타일로 장식된 오스만 제국의 대표 모스크.", category: "모스크", tip: "예배 시간에는 관광객 입장이 제한됩니다. 긴 옷과 스카프를 준비하세요." },
      { name: "그랜드 바자르", nameEn: "Grand Bazaar", description: "4,000개 이상의 상점이 모인 세계 최대 실내 시장으로 560년의 역사를 자랑합니다.", category: "시장", tip: "흥정은 필수! 처음 제시 가격의 50~60%부터 시작하세요." },
      { name: "톱카프 궁전", nameEn: "Topkapi Palace", description: "400년간 오스만 술탄의 거처이자 정치의 중심지. 보스포루스 해협의 절경을 조망할 수 있습니다.", category: "궁전", tip: "하렘 별도 티켓이 필요합니다. 뮤지엄 패스 이스탄불 추천." },
      { name: "보스포루스 크루즈", nameEn: "Bosphorus Cruise", description: "유럽과 아시아 대륙을 가르는 해협을 배로 유람하며 궁전, 요새, 해안 마을을 감상합니다.", category: "크루즈", tip: "에미뇌뉘 선착장에서 출발하는 공영 페리가 가성비 최고입니다." },
      { name: "갈라타 탑", nameEn: "Galata Tower", description: "14세기 제노바인이 세운 탑으로 이스탄불 360도 파노라마 전망을 제공합니다.", category: "전망대" },
    ],
    dayTrips: [
      { name: "프린스 제도", nameEn: "Princes' Islands", description: "자동차 없는 평화로운 섬으로 마차와 자전거로 둘러봅니다.", travelTime: "페리 약 1.5시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "에디르네", nameEn: "Edirne", description: "오스만 제국의 두 번째 수도, 셀리미예 모스크(UNESCO)가 있는 도시.", travelTime: "버스 약 2.5시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "케밥", description: "이스탄불식 되네르 케밥부터 이스켄데르 케밥까지 다양한 구이 요리.", emoji: "🥙" },
      { name: "발릭 에크멕", description: "에미뇌뉘 갈라타 다리 근처에서 맛보는 생선 샌드위치.", emoji: "🐟" },
      { name: "바클라바", description: "피스타치오와 꿀 시럽을 겹겹이 넣은 터키 대표 디저트.", emoji: "🍯" },
    ],
    tips: [
      "이스탄불카르트(교통카드)를 구입하면 메트로·트램·페리를 할인 요금으로 이용할 수 있습니다.",
      "모스크 방문 시 긴 바지와 스카프(여성)를 꼭 준비하세요.",
      "그랜드 바자르는 일요일 휴무입니다.",
      "택시는 미터기 사용을 확인하거나 BiTaksi 앱을 이용하세요.",
    ],
  },

  // ===== CAPPADOCIA & CENTRAL =====
  "turkey/cappadocia-central/cappadocia": {
    heroGradient: "from-orange-400 to-rose-700",
    description: "기암괴석과 동굴 마을이 만들어낸 초현실적 풍경의 땅. 열기구에서 내려다보는 요정 굴뚝과 바위 교회들은 세계 어디에서도 볼 수 없는 장관입니다.",
    bestTime: "4~6월, 9~11월 (열기구는 연중 가능하나 겨울엔 취소율 높음)",
    stayArea: "괴레메 마을 (동굴 호텔 추천)",
    transport: "카이세리 공항에서 셔틀 약 1시간, 지역 내 투어 또는 렌터카",
    districts: [
      { name: "괴레메", nameEn: "Goreme", description: "카파도키아 관광의 중심지로 동굴 호텔과 레스토랑이 밀집.", highlights: ["괴레메 야외 박물관", "선셋 포인트", "로즈 밸리"] },
      { name: "위르귑", nameEn: "Urgup", description: "와이너리와 세련된 부티크 호텔이 있는 조용한 마을.", highlights: ["위시 힐", "터키 와인 시음", "소금 호수 근교"] },
      { name: "우치히사르", nameEn: "Uchisar", description: "카파도키아에서 가장 높은 요새 바위가 있는 전망 마을.", highlights: ["우치히사르 성채", "피전 밸리"] },
    ],
    attractions: [
      { name: "열기구 투어", nameEn: "Hot Air Balloon Ride", description: "일출과 함께 수백 개의 열기구가 하늘을 수놓는 카파도키아의 상징적 체험.", category: "체험", tip: "새벽 4시 픽업. 최소 2~3일 전 예약 필수이며, 기상 취소에 대비해 여유 일정을 잡으세요." },
      { name: "괴레메 야외 박물관", nameEn: "Goreme Open Air Museum", description: "UNESCO 세계유산으로 10~12세기 비잔틴 시대 프레스코화가 남아있는 바위 교회군.", category: "유적", tip: "어둠의 교회(카란르크 킬리세)는 별도 입장료가 있지만 프레스코화 보존 상태가 최고입니다." },
      { name: "로즈 밸리 하이킹", nameEn: "Rose Valley Hike", description: "붉은 빛의 기암괴석 사이를 걷는 카파도키아 최고의 트레킹 코스.", category: "자연", tip: "일몰 시간에 맞춰 하이킹하면 장관입니다." },
    ],
    dayTrips: [
      { name: "데린쿠유 지하도시", nameEn: "Derinkuyu Underground City", description: "지하 8층 규모로 2만 명을 수용할 수 있었던 고대 지하 도시.", travelTime: "차량 약 30분", gradient: "from-stone-400 to-stone-700" },
    ],
    localFood: [
      { name: "테스티 케밥", description: "항아리를 깨뜨려 먹는 카파도키아 전통 도자기 케밥.", emoji: "🏺" },
      { name: "만트", description: "터키식 만두에 요거트와 고춧가루 버터를 얹은 요리.", emoji: "🥟" },
    ],
    tips: [
      "열기구 투어는 기상 조건에 따라 취소될 수 있으니 첫날에 예약하고 여유 일정을 두세요.",
      "동굴 호텔 체험은 카파도키아 여행의 하이라이트입니다. 테라스에서 열기구를 감상하세요.",
      "ATV 투어, 승마 투어 등 다양한 액티비티가 가능합니다.",
    ],
  },
  "turkey/cappadocia-central/ankara": {
    heroGradient: "from-red-600 to-red-900",
    description: "터키의 수도이자 정치·행정 중심지. 아타튀르크의 유산이 깃든 도시로, 아나톨리아 문명 박물관과 아느트카비르(아타튀르크 영묘)가 주요 볼거리입니다.",
    bestTime: "5~6월, 9~10월",
    stayArea: "크즐라이 / 울루스 주변",
    transport: "앙카라 메트로, 버스 (앙카라카르트)",
    districts: [
      { name: "울루스", nameEn: "Ulus", description: "앙카라 성채와 아나톨리아 문명 박물관이 있는 구시가지.", highlights: ["앙카라 성채", "아나톨리아 문명 박물관", "로마 목욕탕"] },
    ],
    attractions: [
      { name: "아느트카비르", nameEn: "Anitkabir", description: "터키 건국의 아버지 무스타파 케말 아타튀르크의 영묘. 장엄한 건축과 넓은 광장이 인상적입니다.", category: "기념관", tip: "매시 정각 위병 교대식을 볼 수 있습니다. 입장 무료." },
      { name: "아나톨리아 문명 박물관", nameEn: "Museum of Anatolian Civilizations", description: "히타이트부터 오스만까지 아나톨리아 1만 년 역사를 한눈에 볼 수 있는 박물관.", category: "박물관" },
      { name: "앙카라 성채", nameEn: "Ankara Castle", description: "도시 전경을 조망할 수 있는 고대 요새로 주변에 전통 가옥이 남아있습니다.", category: "유적" },
    ],
    dayTrips: [
      { name: "카파도키아", nameEn: "Cappadocia", description: "열기구와 기암괴석의 땅. 당일치기보다 1박 이상 추천.", travelTime: "차량 약 3.5시간", gradient: "from-orange-400 to-rose-700" },
    ],
    localFood: [
      { name: "이스켄데르 케밥", description: "얇게 썬 되네르 고기에 토마토 소스와 요거트를 얹은 요리.", emoji: "🥩" },
      { name: "앙카라 타바", description: "양고기와 채소를 넣고 오븐에 구운 앙카라 전통 요리.", emoji: "🍲" },
    ],
    tips: [
      "앙카라는 이스탄불에서 고속열차(YHT)로 약 4시간이면 도착합니다.",
      "아느트카비르는 터키 국경일에 방문하면 특별한 의식을 볼 수 있습니다.",
      "크즐라이 주변은 쇼핑과 식사 옵션이 풍부합니다.",
    ],
  },

  // ===== AEGEAN & MEDITERRANEAN =====
  "turkey/aegean-mediterranean/antalya": {
    heroGradient: "from-cyan-500 to-blue-700",
    description: "터키 리비에라의 중심 도시. 지중해의 투명한 바다와 칼레이치 구시가지의 매력이 공존하며, 해변 리조트와 고대 유적을 함께 즐길 수 있습니다.",
    bestTime: "4~6월, 9~11월 (여름은 매우 덥지만 해변 시즌)",
    stayArea: "칼레이치 (구시가지) / 라라 해변",
    transport: "트램, 버스 (안탈야카르트)",
    districts: [
      { name: "칼레이치", nameEn: "Kaleici", description: "로마 시대 성벽으로 둘러싸인 구시가지로 오스만풍 목조 가옥과 부티크 호텔이 가득.", highlights: ["하드리아누스 문", "구항구", "이블리 미나렛"] },
      { name: "라라 해변", nameEn: "Lara Beach", description: "안탈야 동쪽의 고급 리조트 해변 지구.", highlights: ["라라 비치", "뒤덴 폭포(하류)"] },
    ],
    attractions: [
      { name: "칼레이치 구시가지", nameEn: "Kaleici Old Town", description: "2,000년 역사의 구시가지로 하드리아누스 문, 구항구, 좁은 골목의 카페와 상점이 매력적입니다.", category: "구시가지", tip: "해질녘 구항구에서 일몰 감상이 로맨틱합니다." },
      { name: "뒤덴 폭포", nameEn: "Duden Waterfalls", description: "상류 폭포(공원)와 하류 폭포(바다로 떨어지는 절벽 폭포) 두 곳 모두 장관입니다.", category: "자연", tip: "하류 폭포는 보트 투어로 바다에서 감상하면 더 인상적입니다." },
      { name: "안탈야 박물관", nameEn: "Antalya Museum", description: "터키 최고 수준의 고고학 박물관으로 페르게, 아스펜도스 출토 유물을 소장.", category: "박물관" },
    ],
    dayTrips: [
      { name: "아스펜도스", nameEn: "Aspendos", description: "세계에서 가장 잘 보존된 로마 극장(15,000석).", travelTime: "차량 약 45분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "피데", description: "터키식 보트 모양 피자로 다진 고기와 채소 토핑.", emoji: "🫓" },
      { name: "쉬시 케밥", description: "꼬치에 꿴 양고기 또는 닭고기 숯불 구이.", emoji: "🍢" },
      { name: "도네르마", description: "쫀득한 터키 전통 아이스크림, 난초 뿌리로 만듦.", emoji: "🍦" },
    ],
    tips: [
      "안탈야 뮤지엄 패스로 주요 유적지를 할인 입장할 수 있습니다.",
      "여름(7~8월)은 40°C를 넘기도 하니 충분한 수분 섭취와 자외선 차단에 유의하세요.",
      "올 인클루시브 리조트가 많아 해변 휴양 목적이라면 리조트 이용도 좋습니다.",
    ],
  },
  "turkey/aegean-mediterranean/ephesus": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "고대 로마 시대 아시아 속주의 수도이자 세계에서 가장 잘 보존된 고대 도시 유적 중 하나. 셀수스 도서관과 대극장이 압도적인 규모를 자랑합니다.",
    bestTime: "3~5월, 9~11월 (여름은 극도로 더움)",
    stayArea: "셀축 (에페소스 인접 마을)",
    transport: "이즈미르에서 기차 약 1.5시간, 셀축에서 유적지까지 도보 또는 돌무쉬",
    districts: [
      { name: "셀축", nameEn: "Selcuk", description: "에페소스 유적의 관문 마을로 성 요한 교회와 아르테미스 신전 터가 위치.", highlights: ["에페소스 유적", "성 요한 대성당", "아르테미스 신전 터"] },
    ],
    attractions: [
      { name: "에페소스 고대 도시", nameEn: "Ephesus Ancient City", description: "셀수스 도서관, 25,000석 대극장, 대리석 거리 등 고대 로마의 위용이 살아있는 유적지.", category: "유적", tip: "오전 일찍(개장 직후) 방문하면 인파를 피할 수 있습니다. 상부 입구에서 시작하면 내리막이라 편합니다." },
      { name: "셀수스 도서관", nameEn: "Library of Celsus", description: "서기 117년 건립된 로마 시대 도서관으로 에페소스의 상징적 건축물.", category: "유적" },
      { name: "테라스 하우스", nameEn: "Terrace Houses", description: "로마 시대 부유층의 주거지로 정교한 모자이크와 프레스코화가 남아있습니다.", category: "유적", tip: "별도 입장료가 있지만 로마인의 실제 생활상을 볼 수 있어 꼭 추천합니다." },
    ],
    dayTrips: [
      { name: "파묵칼레", nameEn: "Pamukkale", description: "새하얀 석회 테라스의 온천 마을.", travelTime: "차량 약 3시간", gradient: "from-sky-300 to-cyan-600" },
    ],
    localFood: [
      { name: "체프", description: "터키식 미트볼로 빵과 함께 제공되는 간단한 한 끼.", emoji: "🧆" },
      { name: "괴즐레메", description: "시금치, 치즈, 감자 등을 넣은 터키식 전병.", emoji: "🫓" },
    ],
    tips: [
      "에페소스 유적은 그늘이 거의 없으니 모자, 선크림, 물을 반드시 준비하세요.",
      "뮤지엄 패스 에게해로 에페소스 + 테라스 하우스를 할인 방문 가능합니다.",
      "셀축 기차역에서 에페소스까지 도보 약 20분이면 도착합니다.",
    ],
  },
  "turkey/aegean-mediterranean/pamukkale": {
    heroGradient: "from-sky-300 to-cyan-600",
    description: "터키어로 '목화의 성'이라는 뜻의 파묵칼레. 석회암 테라스에서 흘러내리는 온천수가 만든 새하얀 계단식 풍경은 자연이 빚어낸 경이로운 예술 작품입니다.",
    bestTime: "4~6월, 9~11월 (여름은 매우 덥고 겨울엔 수량 적음)",
    stayArea: "파묵칼레 마을",
    transport: "데니즐리 공항 또는 버스터미널에서 미니버스 약 20분",
    districts: [
      { name: "파묵칼레 마을", nameEn: "Pamukkale Village", description: "트래버틴 테라스 아래 위치한 소박한 마을로 온천 호텔이 밀집.", highlights: ["트래버틴 테라스", "히에라폴리스", "온천 풀"] },
    ],
    attractions: [
      { name: "파묵칼레 석회 테라스", nameEn: "Pamukkale Travertines", description: "수천 년간 석회암 온천수가 만들어낸 새하얀 계단식 테라스. UNESCO 세계유산.", category: "자연", tip: "맨발로 걸어야 합니다. 일몰 시간에 방문하면 황금빛으로 물든 테라스를 볼 수 있습니다." },
      { name: "히에라폴리스", nameEn: "Hierapolis", description: "고대 로마의 온천 도시 유적으로 대극장, 네크로폴리스(공동묘지)가 인상적입니다.", category: "유적" },
      { name: "클레오파트라 풀", nameEn: "Cleopatra's Pool", description: "고대 로마 기둥이 잠겨있는 천연 온천 수영장으로 36°C의 탄산 온천수.", category: "온천", tip: "별도 입장료(₺150 내외)가 있으며 수건과 수영복을 준비하세요." },
    ],
    dayTrips: [
      { name: "에페소스", nameEn: "Ephesus", description: "고대 로마 도시 유적의 백미.", travelTime: "차량 약 3시간", gradient: "from-amber-500 to-stone-700" },
    ],
    localFood: [
      { name: "귀베치", description: "도자기 그릇에 고기와 채소를 넣고 오븐에 구운 터키 전통 스튜.", emoji: "🍲" },
      { name: "아이란", description: "소금을 넣은 터키식 요거트 음료, 케밥과 찰떡 궁합.", emoji: "🥛" },
    ],
    tips: [
      "트래버틴 테라스에서는 신발을 벗어야 하므로 비닐백을 가져가세요.",
      "파묵칼레 + 히에라폴리스 통합 입장권을 구매하세요.",
      "이스탄불에서 데니즐리까지 국내선 항공편이 운행됩니다 (약 1시간).",
      "온천 호텔에 숙박하면 프라이빗 온천을 즐길 수 있습니다.",
    ],
  },
};

export const turkeyAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ISTANBUL =====
  "turkey/istanbul-marmara/istanbul/hagia-sophia": {
    heroGradient: "from-amber-500 to-red-700",
    description: "537년 건립된 비잔틴 건축의 최고 걸작이자 세계 건축사의 기념비적 건물. 동로마 제국 유스티니아누스 1세에 의해 완공되었으며, 약 1,000년간 세계 최대의 성당이었습니다. 오스만 정복 후 모스크로, 1934년 박물관으로, 2020년 다시 모스크로 전환되었습니다. 직경 31m의 거대한 돔, 비잔틴 모자이크와 이슬람 캘리그래피가 공존하는 내부는 동서 문명의 만남을 상징합니다.",
    history: "비잔틴 제국 시대인 537년 완공되었습니다. 돔의 무게를 지탱하기 위해 로도스 섬의 가벼운 벽돌을 특별히 제작해 사용했습니다.",
    visitInfo: {
      hours: "매일 09:00~19:00 (금요일 예배 시간 정오~14시경 관광객 제한)",
      admission: "무료",
      address: "Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul",
    },
    highlights: [
      "직경 31m의 거대한 비잔틴 돔",
      "2층 갤러리의 비잔틴 모자이크",
      "이슬람 캘리그래피와 기독교 모자이크의 공존",
      "대리석 기둥과 황금 모자이크 장식",
    ],
    nearbyAttractions: ["블루 모스크", "톱카프 궁전", "바실리카 시스턴"],
    photoTips: "내부 돔을 촬영하려면 광각 렌즈가 필수입니다. 2층 갤러리에서 모자이크를 가까이 담을 수 있습니다.",
    tips: [
      "현재 모스크로 운영 중이며 입장 무료입니다.",
      "금요일 예배 시간(정오~14시경)에는 관광객 입장이 제한됩니다.",
      "여성은 스카프, 남녀 모두 긴 바지를 착용해야 합니다.",
      "2층 갤러리에서 비잔틴 모자이크를 가까이 감상할 수 있습니다.",
    ],
  },
  "turkey/istanbul-marmara/istanbul/blue-mosque": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "6개의 미나렛과 2만 개 이상의 푸른 이즈닉 타일로 유명한 오스만 제국의 걸작. 1616년 술탄 아흐메트 1세에 의해 완공된 이스탄불의 상징적 모스크입니다. 260개의 창문에서 쏟아지는 빛이 내부의 푸른 타일을 비추어 '블루 모스크'라는 이름이 유래했습니다. 아야 소피아 맞은편에 위치하여 두 건물의 장엄한 대비를 감상할 수 있습니다.",
    history: "오스만 제국 시대인 1616년 완공되었습니다. 6개의 미나렛은 당시 메카의 대모스크와 같은 수로, 술탄의 오만함이라는 논란을 일으켜 메카에 7번째 미나렛을 추가하게 했습니다.",
    visitInfo: {
      hours: "매일 08:30~11:30, 13:00~14:30, 15:30~16:45 (예배 시간 외 관광 가능)",
      admission: "무료",
      address: "Sultan Ahmet, Atmeydanı Cd. No:7, 34122 Fatih/İstanbul",
    },
    highlights: [
      "2만 개 이상의 푸른 이즈닉 타일 장식",
      "6개의 미나렛과 거대한 중앙 돔",
      "260개 스테인드글라스 창문의 빛 연출",
      "아야 소피아와 마주보는 장엄한 외관",
    ],
    nearbyAttractions: ["아야 소피아", "히포드롬", "바실리카 시스턴"],
    tips: [
      "예배 시간(하루 5회)에는 관광객 입장이 제한됩니다.",
      "입구에서 신발을 벗고 비닐백에 넣어 들고 다닙니다.",
      "여성은 머리 스카프와 긴 옷이 필요합니다 (입구에서 대여 가능).",
    ],
  },
  "turkey/istanbul-marmara/istanbul/grand-bazaar": {
    heroGradient: "from-amber-400 to-red-600",
    description: "4,000개 이상의 상점이 모인 세계 최대이자 가장 오래된 실내 시장. 1461년 메흐메트 2세 시대에 시작되어 560년 이상의 역사를 지니며, 61개 골목에서 카펫, 보석, 도자기, 향신료, 가죽제품 등을 판매합니다. 하루 방문객이 25만~40만 명에 달하는 터키 상업의 심장입니다.",
    history: "오스만 제국 시대인 1461년부터 운영되었습니다. 연간 방문객이 9,000만 명을 넘어 세계에서 가장 많은 사람이 방문하는 관광지 중 하나입니다.",
    visitInfo: {
      hours: "월~토 08:30~19:00 (일요일 휴무)",
      admission: "입장 무료 (쇼핑 별도)",
      address: "Beyazıt, Kalpakçılar Cd. No:22, 34126 Fatih/İstanbul",
    },
    highlights: [
      "61개 골목과 4,000여 상점의 미로 같은 구조",
      "터키 카펫, 보석, 이즈닉 도자기 등 전통 공예품",
      "560년 전통의 흥정 문화 체험",
      "아치형 천장과 오스만 건축 장식",
    ],
    nearbyAttractions: ["수레이마니예 모스크", "이집션 바자르", "술탄아흐메트"],
    tips: [
      "흥정은 판매자가 제시한 가격의 50~60%부터 시작하는 것이 일반적입니다.",
      "일요일은 휴무입니다.",
      "현금(터키 리라)을 준비하면 더 좋은 가격을 받을 수 있습니다.",
      "길을 잃기 쉬우니 입구 위치를 기억해두세요.",
    ],
  },
  "turkey/istanbul-marmara/istanbul/topkapi-palace": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "400년간 오스만 술탄의 거처이자 제국 통치의 중심지. 1465년부터 약 400년간 술탄의 공식 거처로 사용된 거대한 궁전 단지로, 보스포루스 해협과 골든 혼이 만나는 언덕 위에 자리합니다. 화려한 하렘, 보석 전시관(86캐럿 다이아몬드 포함), 이슬람 성물 전시관 등을 갖추고 있습니다.",
    history: "오스만 제국 시대(1465~1856년)에 술탄의 거처로 사용되었습니다. 하렘에는 최대 300명의 여성이 거주했으며, 별도의 학교와 병원까지 갖추고 있었습니다.",
    visitInfo: {
      hours: "수~월 09:00~18:00 (화요일 휴관, 동절기 ~16:45)",
      admission: "₺750 (하렘 별도 ₺400)",
      address: "Cankurtaran, 34122 Fatih/İstanbul",
      website: "https://www.topkapisarayi.gov.tr",
    },
    highlights: [
      "86캐럿 카쉬크치 다이아몬드를 포함한 보석 전시관",
      "화려한 타일과 장식의 하렘",
      "이슬람 성물 전시관 (예언자 무함마드의 유물)",
      "보스포루스 해협과 골든 혼 파노라마 전망",
    ],
    nearbyAttractions: ["아야 소피아", "고고학 박물관", "귈하네 공원"],
    tips: [
      "뮤지엄 패스 이스탄불을 구매하면 대기줄 없이 입장 가능합니다.",
      "하렘은 별도 티켓이 필요하지만 꼭 방문할 가치가 있습니다.",
      "화요일 휴관입니다.",
      "오디오 가이드(한국어 없음, 영어 가능)를 대여하면 이해가 깊어집니다.",
    ],
  },
  "turkey/istanbul-marmara/istanbul/bosphorus-cruise": {
    heroGradient: "from-blue-400 to-cyan-700",
    description: "유럽과 아시아를 가르는 해협을 유람하며 이스탄불의 스카이라인을 감상. 보스포루스 해협은 약 30km 길이의 수로로, 크루즈를 타면 돌마바흐체 궁전, 루멜리 요새, 해안가 야르 주택들, 보스포루스 대교 등을 수상에서 감상할 수 있습니다. 에미뇌뉘에서 출발하는 공영 페리부터 프라이빗 요트까지 다양한 옵션이 있습니다.",
    history: "고대부터 현재까지 주요 해상 교역로였습니다. 보스포루스 해협의 해류는 표면과 심층이 반대 방향으로 흐르는 이중 해류 구조입니다.",
    visitInfo: {
      hours: "공영 페리: 매일 10:35 출발 (계절별 상이)",
      admission: "₺150~₺500 (공영 페리 기준)",
      address: "Eminönü İskelesi, Rüstem Paşa, 34116 Fatih/İstanbul",
    },
    highlights: [
      "돌마바흐체 궁전과 루멜리 요새의 해안 전경",
      "보스포루스 대교 아래 통과 체험",
      "유럽과 아시아 양 대륙의 스카이라인",
      "해안가 전통 야르(목조 별장) 건축",
    ],
    nearbyAttractions: ["에미뇌뉘 광장", "갈라타 다리", "이집션 바자르"],
    photoTips: "일몰 시간대에 탑승하면 황금빛 모스크 실루엣을 담을 수 있습니다. 갑판 오른쪽(유럽 쪽)이 주요 건축물 촬영에 유리합니다.",
    tips: [
      "에미뇌뉘 선착장에서 출발하는 '숏 보스포루스 투어'(약 2시간)가 가성비 최고입니다.",
      "풀 투어(약 6시간)는 아나돌루 카바으까지 갔다 돌아옵니다.",
      "일몰 시간대 크루즈가 가장 로맨틱합니다.",
      "갑판이 바람이 강하니 가벼운 겉옷을 준비하세요.",
    ],
  },

  // ===== CAPPADOCIA =====
  "turkey/cappadocia-central/cappadocia/hot-air-balloon": {
    heroGradient: "from-orange-400 to-pink-600",
    description: "일출과 함께 하늘을 수놓는 수백 개의 열기구, 카파도키아의 상징. 세계에서 가장 유명한 열기구 체험으로, 새벽에 출발하여 일출과 함께 요정 굴뚝, 바위 교회, 동굴 마을 위를 약 1시간 비행합니다. 하늘을 가득 메운 형형색색의 열기구가 기암괴석 위를 떠다니는 광경은 일생에 한 번 볼 수 있는 장관입니다.",
    history: "카파도키아에서는 하루에 최대 150개의 열기구가 동시에 뜰 수 있으며, 연간 50만 명 이상이 탑승합니다.",
    visitInfo: {
      hours: "매일 새벽 일출 시간 (04:00~05:00 호텔 픽업)",
      admission: "€150~€300 (업체별 상이)",
      address: "Göreme Merkez, 50180 Göreme/Nevşehir",
    },
    highlights: [
      "일출과 함께 수백 개 열기구가 하늘을 수놓는 장관",
      "요정 굴뚝과 기암괴석 위 비행",
      "동굴 마을과 바위 교회의 항공 전경",
      "비행 후 샴페인 토스트와 인증서",
    ],
    nearbyAttractions: ["괴레메 야외 박물관", "로즈 밸리", "파샤바 요정 굴뚝"],
    photoTips: "열기구 안에서 다른 열기구와 지형을 함께 담으면 인생샷을 건질 수 있습니다. 광각 렌즈 추천.",
    tips: [
      "새벽 4~5시에 호텔 픽업이 시작됩니다.",
      "기상 조건에 따라 취소될 수 있으니 여행 첫날에 예약하고 백업 날짜를 확보하세요.",
      "겨울에는 취소율이 높으므로 4~10월 방문이 안전합니다.",
      "비행 후 샴페인 토스트와 인증서가 제공됩니다.",
    ],
  },
  "turkey/cappadocia-central/cappadocia/goreme-open-air-museum": {
    heroGradient: "from-stone-400 to-amber-700",
    description: "UNESCO 세계유산으로 비잔틴 시대 프레스코화가 보존된 바위 교회군. 10~12세기 비잔틴 수도승들이 바위를 깎아 만든 교회, 예배당, 수도원 단지입니다. 1984년 UNESCO 세계유산으로 등재되었으며, 특히 '어둠의 교회(카란르크 킬리세)'의 프레스코화는 가장 생생한 색감을 자랑합니다.",
    history: "비잔틴 제국 시대(10~12세기)에 수도승들이 조성했습니다. 초기 기독교인들이 로마의 박해를 피해 이곳의 바위를 파서 은신처로 사용한 것이 시작입니다.",
    visitInfo: {
      hours: "매일 08:00~19:00 (동절기 ~17:00)",
      admission: "₺600 (어둠의 교회 별도 ₺150)",
      address: "Göreme, Müze Cd., 50180 Göreme/Nevşehir",
    },
    highlights: [
      "어둠의 교회(카란르크 킬리세)의 생생한 프레스코화",
      "바위를 깎아 만든 교회와 예배당 내부 구조",
      "성 바실리우스 교회와 사과 교회(엘말르 킬리세)",
      "수도승들의 식당과 생활 공간",
    ],
    nearbyAttractions: ["괴레메 마을", "엘 나자르 교회", "칼릭라르 교회"],
    tips: [
      "어둠의 교회는 별도 입장료(₺150)가 있지만 프레스코화 보존 상태가 최고입니다.",
      "교회 내부에서는 사진 촬영이 금지되어 있습니다.",
      "오전 일찍 방문하면 단체 관광객을 피할 수 있습니다.",
    ],
  },

  // ===== ANKARA =====
  "turkey/cappadocia-central/ankara/anitkabir": {
    heroGradient: "from-red-600 to-red-900",
    description: "터키 건국의 아버지 무스타파 케말 아타튀르크의 영묘. 1953년 완공된 장엄한 건축물로, 사자의 길(Aslanlı Yol)을 따라 걸으면 영묘 홀에 도달합니다. 아타튀르크와 터키 독립전쟁 관련 박물관이 함께 있으며, 터키인에게 가장 신성한 장소 중 하나로 매년 수백만 명이 방문합니다.",
    history: "터키 공화국 건국 이후 1953년 완공되었습니다. 매년 11월 10일 아타튀르크 서거일 09:05에 전국이 1분간 묵념하며, 아느트카비르에서는 대규모 추모식이 열립니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (여름 ~16:30 마지막 입장)",
      admission: "무료",
      address: "Anıt Cad., Tandoğan, 06570 Çankaya/Ankara",
      website: "https://www.anitkabir.tsk.tr",
    },
    highlights: [
      "사자의 길(Aslanlı Yol)과 24개의 사자 조각상",
      "장엄한 영묘 홀과 아타튀르크의 석관",
      "매시 정각 위병 교대식",
      "터키 독립전쟁과 공화국 건설 역사 박물관",
    ],
    nearbyAttractions: ["앙카라 성채", "아나톨리아 문명 박물관"],
    tips: [
      "입장 무료이며, 보안 검색이 있습니다.",
      "매시 정각에 위병 교대식을 볼 수 있습니다.",
      "경건한 분위기이므로 조용히 관람하세요.",
      "박물관 섹션에서 터키 독립전쟁과 공화국 건설 역사를 배울 수 있습니다.",
    ],
  },

  // ===== ANTALYA =====
  "turkey/aegean-mediterranean/antalya/kaleici": {
    heroGradient: "from-orange-400 to-red-600",
    description: "2,000년 역사의 성벽 안 구시가지로 로마, 비잔틴, 오스만의 흔적이 공존. 하드리아누스 문(130년)을 통해 들어가면 오스만 시대 목조 가옥들이 줄지어 선 좁은 골목, 부티크 호텔, 카페, 기념품점이 이어집니다. 구항구에서는 지중해의 터키석빛 바다를 감상할 수 있으며, 요트 투어도 출발합니다.",
    history: "로마 시대부터 오스만 제국까지 이어진 역사 지구입니다. 하드리아누스 문은 로마 황제 하드리아누스의 안탈야 방문(130년)을 기념하여 세워졌으며, 현재도 도시의 관문 역할을 합니다.",
    visitInfo: {
      hours: "24시간 개방 (상점·카페는 보통 09:00~22:00)",
      admission: "무료 (식사·쇼핑 별도)",
      address: "Kaleiçi, Selçuk Mah., 07100 Muratpaşa/Antalya",
    },
    highlights: [
      "하드리아누스 문(서기 130년)의 로마 건축",
      "오스만풍 목조 가옥이 늘어선 좁은 골목",
      "구항구의 지중해 터키석빛 바다 전망",
      "이블리 미나렛(13세기 셀주크 양식)",
    ],
    nearbyAttractions: ["하드리아누스 문", "안탈야 박물관", "구항구"],
    photoTips: "해질녘 구항구에서 일몰을 배경으로 촬영하면 최고의 사진을 얻을 수 있습니다.",
    tips: [
      "해질녘 구항구에서 일몰 감상이 로맨틱합니다.",
      "좁은 골목을 걸으며 오스만풍 건축을 감상하세요.",
      "구항구에서 출발하는 보트 투어로 뒤덴 폭포를 볼 수 있습니다.",
    ],
  },
  "turkey/aegean-mediterranean/antalya/duden-waterfalls": {
    heroGradient: "from-teal-400 to-blue-700",
    description: "상류와 하류 두 곳의 폭포, 특히 바다로 직접 떨어지는 하류 폭포가 장관. 상류(Düden Şelalesi) 폭포는 공원 안에 위치하며 폭포 뒤편 동굴을 걸을 수 있습니다. 하류 폭포는 40m 절벽에서 지중해로 직접 떨어지는 장관을 연출하며, 보트에서 감상하면 더욱 인상적입니다.",
    history: "하류 뒤덴 폭포는 세계에서 바다로 직접 떨어지는 가장 큰 폭포 중 하나입니다.",
    visitInfo: {
      hours: "상류: 매일 08:00~19:30 / 하류: 24시간 개방",
      admission: "상류 ₺30 / 하류 무료",
      address: "상류: Varsak Fener Mah., Kepez/Antalya / 하류: Çağlayan Mah., Lara Cd., Muratpaşa/Antalya",
    },
    highlights: [
      "40m 절벽에서 지중해로 떨어지는 하류 폭포",
      "상류 폭포 뒤편 동굴 산책",
      "상류 공원의 피크닉 장소와 녹음",
      "보트에서 올려다보는 하류 폭포 전경",
    ],
    nearbyAttractions: ["칼레이치", "라라 비치", "안탈야 박물관"],
    photoTips: "하류 폭포는 보트 투어에서 바다 쪽으로 촬영하면 폭포 전체를 담을 수 있습니다.",
    tips: [
      "상류와 하류 폭포는 약 14km 떨어져 있으니 택시나 버스로 이동하세요.",
      "하류 폭포는 구항구 보트 투어로 바다에서 감상하는 것을 추천합니다.",
      "상류 폭포 공원은 피크닉하기 좋은 장소입니다.",
    ],
  },

  // ===== EPHESUS =====
  "turkey/aegean-mediterranean/ephesus/ephesus-ancient-city": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "셀수스 도서관과 25,000석 대극장이 남아있는 세계 최고 수준의 고대 로마 유적. 기원전 10세기 이오니아인들에 의해 세워지고 로마 시대 아시아 속주의 수도로 번영했던 도시입니다. 한때 인구 25만의 대도시였으며, 대리석 거리, 공중 화장실, 테라스 하우스 등 로마 도시의 모든 요소를 갖추고 있습니다. 사도 바울이 서신을 보낸 에베소서의 그 도시이기도 합니다.",
    history: "고대 그리스~로마 시대(기원전 10세기~서기 6세기)에 번영했습니다. 세계 7대 불가사의 중 하나인 아르테미스 신전이 에페소스에 있었으나, 현재는 기둥 하나만 남아있습니다.",
    visitInfo: {
      hours: "매일 08:00~18:30 (동절기 ~17:00)",
      admission: "₺700 (테라스 하우스 별도 ₺200)",
      address: "Acarlar, Efes Harabeleri, 35920 Selçuk/İzmir",
      website: "https://muze.gov.tr/muze-detay?sectionId=EFS01",
    },
    highlights: [
      "셀수스 도서관 (세계 3대 고대 도서관)",
      "25,000석 규모의 대극장",
      "테라스 하우스의 정교한 모자이크와 프레스코화",
      "대리석 거리와 고대 공중 화장실",
    ],
    nearbyAttractions: ["성 요한 대성당", "아르테미스 신전 터", "셀축 마을"],
    photoTips: "상부 입구에서 시작하면 셀수스 도서관을 정면에서 내려다보며 촬영할 수 있습니다.",
    tips: [
      "상부 입구(Upper Gate)에서 시작하면 내리막길이라 편합니다.",
      "오전 개장 직후(08:00) 방문하면 크루즈 단체 관광객을 피할 수 있습니다.",
      "테라스 하우스는 별도 입장료가 있지만 로마인의 실생활을 볼 수 있어 강추합니다.",
      "그늘이 거의 없으니 모자, 선크림, 물을 꼭 가져가세요.",
    ],
  },

  // ===== PAMUKKALE =====
  "turkey/aegean-mediterranean/pamukkale/travertines": {
    heroGradient: "from-sky-300 to-cyan-600",
    description: "수천 년간 석회암 온천수가 만든 새하얀 계단식 테라스, UNESCO 세계유산. 터키어로 '목화의 성'이라는 뜻으로, 눈이 쌓인 듯한 순백의 계단식 풀이 산비탈을 따라 펼쳐집니다. 1988년 UNESCO 세계유산으로 등재되었으며, 위쪽의 히에라폴리스 고대 도시 유적과 함께 복합유산으로 지정되어 있습니다.",
    history: "수천 년에 걸쳐 자연 형성된 지형이며, 히에라폴리스는 기원전 190년에 건설되었습니다. 파묵칼레의 온천수 온도는 약 36°C이며, 매일 약 6,800리터의 온천수가 흘러나옵니다.",
    visitInfo: {
      hours: "매일 06:30~21:00 (계절별 상이)",
      admission: "₺600 (히에라폴리스 포함)",
      address: "Pamukkale, 20280 Pamukkale/Denizli",
    },
    highlights: [
      "새하얀 석회암 계단식 테라스와 온천 풀",
      "일몰 시 황금빛으로 물드는 테라스 풍경",
      "클레오파트라 풀에서 고대 로마 기둥 사이 온천욕",
      "히에라폴리스 대극장과 네크로폴리스",
    ],
    nearbyAttractions: ["히에라폴리스", "클레오파트라 풀", "파묵칼레 마을"],
    photoTips: "일몰 시간에 방문하면 순백의 테라스가 황금빛으로 물들어 가장 아름다운 사진을 얻을 수 있습니다.",
    tips: [
      "테라스에서는 맨발로 걸어야 합니다. 신발을 넣을 비닐백을 준비하세요.",
      "일몰 시간에 방문하면 황금빛으로 물든 테라스를 볼 수 있습니다.",
      "클레오파트라 풀에서 고대 로마 기둥 사이에서 온천욕을 즐기세요.",
      "바닥이 미끄러울 수 있으니 주의하세요.",
    ],
  },
};
