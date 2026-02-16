import type { CityDetail, AttractionDetail } from "../city-details";

export const germanyCityDetails: Record<string, CityDetail> = {
  // ===== BAVARIA =====
  "germany/bavaria/munich": {
    heroGradient: "from-blue-500 to-blue-800",
    description: "바이에른주의 주도이자 독일 제3의 도시. 옥토버페스트의 본고장으로, 마리엔 광장, 님펜부르크 궁전, BMW 박물관, 영국 정원 등 볼거리가 풍부하며 알프스 근교 여행의 거점입니다.",
    bestTime: "5~10월 (옥토버페스트: 9월 중순~10월 초)",
    stayArea: "마리엔 광장 / 중앙역 주변",
    transport: "U-Bahn, S-Bahn, 트램 (MVV 통합 티켓)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "마리엔 광장과 시청사, 프라우엔 교회가 있는 구시가지 핵심 지역.", highlights: ["마리엔 광장", "신시청사 글로켄슈필", "프라우엔 교회", "빅투알리엔 시장"] },
      { name: "슈바빙", nameEn: "Schwabing", description: "대학가와 카페, 갤러리가 밀집한 보헤미안 분위기의 지역.", highlights: ["영국 정원", "레오폴트 거리", "뮌헨 대학교"] },
      { name: "님펜부르크", nameEn: "Nymphenburg", description: "바로크 양식의 님펜부르크 궁전과 넓은 정원이 있는 서쪽 지역.", highlights: ["님펜부르크 궁전", "식물원", "마르슈탈 박물관"] },
    ],
    attractions: [
      { name: "마리엔 광장", nameEn: "Marienplatz", description: "뮌헨의 중심 광장으로 신시청사의 글로켄슈필 시계가 매일 11시에 울립니다.", category: "광장", tip: "글로켄슈필은 11시, 12시(여름엔 17시도) 작동합니다." },
      { name: "BMW 박물관", nameEn: "BMW Museum", description: "BMW의 역사와 미래 기술을 체험하는 미래지향적 박물관.", category: "박물관", tip: "BMW Welt(무료)와 함께 방문하세요." },
      { name: "님펜부르크 궁전", nameEn: "Nymphenburg Palace", description: "바이에른 왕가의 여름 궁전으로 아름다운 바로크 정원이 인상적입니다.", category: "궁전" },
      { name: "영국 정원", nameEn: "English Garden", description: "뮌헨 시민의 휴식처이자 세계에서 가장 큰 도심 공원 중 하나.", category: "공원", tip: "아이스바흐 서핑 포인트를 놓치지 마세요." },
      { name: "빅투알리엔 시장", nameEn: "Viktualienmarkt", description: "200년 역사의 전통 식품 시장으로 바이에른 먹거리를 한자리에서.", category: "시장" },
      { name: "레지덴츠 궁전", nameEn: "Munich Residenz", description: "바이에른 왕가의 공식 궁전으로 유럽에서 가장 큰 도심 궁전 단지.", category: "궁전" },
    ],
    dayTrips: [
      { name: "노이슈반슈타인 성", nameEn: "Neuschwanstein Castle", description: "디즈니 성의 모델이 된 동화 같은 고성.", travelTime: "기차+버스 약 2시간", gradient: "from-indigo-400 to-purple-700" },
      { name: "잘츠부르크", nameEn: "Salzburg", description: "모차르트의 도시, 오스트리아 국경 바로 너머.", travelTime: "기차 약 1.5시간", gradient: "from-emerald-400 to-green-700" },
    ],
    localFood: [
      { name: "슈바인스학세", description: "바삭하게 구운 돼지 족발, 맥주와 최고의 궁합.", emoji: "🍖" },
      { name: "바이스부어스트", description: "뮌헨식 흰 소시지, 달콤한 머스타드와 프레첼 곁들임.", emoji: "🌭" },
      { name: "오바츠다", description: "카망베르 치즈 스프레드, 비어가르텐 필수 안주.", emoji: "🧀" },
    ],
    tips: [
      "뮌헨 시티투어카드로 대중교통 + 주요 관광지 할인 혜택을 받으세요.",
      "비어가르텐에서는 음식 지참이 가능합니다(음료만 구매).",
      "영국 정원 아이스바흐에서 서퍼들 구경은 무료 볼거리입니다.",
      "일요일에는 빅투알리엔 시장이 문을 닫으니 평일에 방문하세요.",
    ],
  },
  "germany/bavaria/neuschwanstein-castle": {
    heroGradient: "from-indigo-400 to-purple-700",
    description: "디즈니 성의 모델이 된 세계에서 가장 유명한 고성. 바이에른 알프스를 배경으로 한 환상적인 경관이 세계적으로 유명하며, 뮌헨에서 당일치기가 가능합니다.",
    bestTime: "5~10월 (겨울엔 눈 덮인 성도 아름다움)",
    stayArea: "퓌센 구시가지",
    transport: "뮌헨에서 기차+버스 약 2시간",
    districts: [
      { name: "호엔슈반가우", nameEn: "Hohenschwangau", description: "노이슈반슈타인 성 아래 마을로 티켓센터와 호엔슈반가우 성이 위치.", highlights: ["티켓센터", "호엔슈반가우 성", "알프 호수"] },
      { name: "퓌센", nameEn: "Füssen", description: "로만틱 가도의 끝점으로 중세 구시가지가 아름다운 소도시.", highlights: ["호에스 슐로스", "성 망 수도원", "레히 폭포"] },
    ],
    attractions: [
      { name: "노이슈반슈타인 성", nameEn: "Neuschwanstein Castle", description: "루트비히 2세가 건설한 동화 같은 성으로 연간 140만명이 방문합니다.", category: "고성", tip: "온라인 사전 예약 필수! 현장 매진이 잦습니다." },
      { name: "마리엔 다리", nameEn: "Marienbruecke", description: "노이슈반슈타인 성을 가장 아름답게 촬영할 수 있는 전망 다리.", category: "전망대", tip: "겨울에는 폐쇄될 수 있으니 확인하세요." },
      { name: "호엔슈반가우 성", nameEn: "Hohenschwangau Castle", description: "루트비히 2세가 어린 시절을 보낸 아버지의 성.", category: "고성" },
    ],
    dayTrips: [
      { name: "린더호프 궁전", nameEn: "Linderhof Palace", description: "루트비히 2세의 소규모 로코코 궁전.", travelTime: "버스 약 1시간", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "카이저슈마른", description: "찢어진 팬케이크에 가루설탕을 뿌린 알프스 디저트.", emoji: "🥞" },
      { name: "카세슈페츨레", description: "치즈를 올린 독일식 수제비, 바이에른 컴포트 푸드.", emoji: "🧀" },
    ],
    tips: [
      "티켓은 반드시 온라인으로 사전 예약하세요 (hohenschwangau.de).",
      "성까지 도보 약 30~40분, 마차나 셔틀버스도 이용 가능합니다.",
      "마리엔 다리는 오전 이른 시간이 인파가 적습니다.",
    ],
  },
  "germany/bavaria/nuremberg": {
    heroGradient: "from-amber-600 to-red-800",
    description: "중세 성벽이 남아있는 바이에른 제2의 도시. 유럽 최대의 크리스마스 마켓으로 유명하며, 뉘른베르크 소시지와 진저브레드의 본고장입니다.",
    bestTime: "12월 (크리스마스 마켓) / 5~9월",
    stayArea: "구시가지 (알트슈타트) 내",
    transport: "U-Bahn, 트램, 버스",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "성벽으로 둘러싸인 구시가지로 주요 관광지가 밀집.", highlights: ["카이저부르크", "하우프트마르크트", "성 로렌츠 교회"] },
      { name: "성 제발트 지구", nameEn: "St. Sebald Quarter", description: "페그니츠 강 북쪽의 역사 지구.", highlights: ["성 제발트 교회", "뒤러의 집", "바이스게르버 골목"] },
    ],
    attractions: [
      { name: "카이저부르크", nameEn: "Kaiserburg", description: "언덕 위의 황제의 성으로 뉘른베르크의 상징. 도시 전체 조망이 가능합니다.", category: "고성", tip: "성탑에 올라가면 구시가지 파노라마 뷰!" },
      { name: "크리스마스 마켓", nameEn: "Nuremberg Christmas Market", description: "1628년부터 이어진 유럽 최대 규모의 크리스마스 마켓.", category: "축제", tip: "글뤼바인(따뜻한 와인)과 진저브레드를 꼭 맛보세요." },
      { name: "게르만 국립박물관", nameEn: "Germanisches Nationalmuseum", description: "독일어권 최대의 문화사 박물관으로 100만점 이상의 소장품.", category: "박물관" },
      { name: "뉘른베르크 재판 기념관", nameEn: "Nuremberg Trials Memorial", description: "제2차 세계대전 후 나치 전범 재판이 열렸던 역사적 법정.", category: "역사" },
    ],
    dayTrips: [
      { name: "밤베르크", nameEn: "Bamberg", description: "UNESCO 세계유산 도시, 라우흐비어(훈제맥주)의 본고장.", travelTime: "기차 약 40분", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "뉘른베르크 소시지", description: "손가락 크기의 작은 구운 소시지, 3개~12개 세트.", emoji: "🌭" },
      { name: "렙쿠헨", description: "뉘른베르크 전통 진저브레드 쿠키.", emoji: "🍪" },
    ],
    tips: [
      "뉘른베르크 카드(2일)로 대중교통 + 박물관 무료 입장이 가능합니다.",
      "크리스마스 마켓은 11월 말~12월 24일까지 열립니다.",
      "구시가지는 도보로 충분히 둘러볼 수 있는 규모입니다.",
    ],
  },
  "germany/bavaria/rothenburg-ob-der-tauber": {
    heroGradient: "from-orange-400 to-rose-700",
    description: "로만틱 가도의 하이라이트. 완벽하게 보존된 중세 마을로, 색색의 목조 건물과 성벽 산책로가 동화 속 풍경을 선사합니다.",
    bestTime: "12월 (크리스마스 마켓) / 5~9월",
    stayArea: "구시가지 내 (성벽 안쪽)",
    transport: "도보 (구시가지 전체 도보 가능)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "성벽으로 둘러싸인 중세 마을 전체가 관광지.", highlights: ["플뢴라인", "마르크트 광장", "성 야콥 교회"] },
    ],
    attractions: [
      { name: "플뢴라인", nameEn: "Ploenlein", description: "로텐부르크의 상징적인 포크 모양 골목. 독일에서 가장 많이 촬영되는 장소.", category: "랜드마크" },
      { name: "성벽 산책로", nameEn: "Town Wall Walk", description: "중세 성벽 위를 걸으며 마을 전체를 조망할 수 있는 산책 코스.", category: "산책", tip: "전체 일주 약 2.5km, 40분 소요." },
      { name: "크리스마스 박물관", nameEn: "German Christmas Museum", description: "연중 크리스마스 장식을 전시하는 독특한 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "딩켈스뷜", nameEn: "Dinkelsbühl", description: "로텐부르크와 비슷하지만 더 한적한 중세 마을.", travelTime: "버스 약 50분", gradient: "from-rose-400 to-pink-700" },
    ],
    localFood: [
      { name: "슈네발렌", description: "눈덩이 모양의 튀긴 페이스트리, 로텐부르크 특산품.", emoji: "🍩" },
      { name: "프랑켄 와인", description: "프랑켄 지방 특유의 복스보이텔 병에 담긴 화이트 와인.", emoji: "🍷" },
    ],
    tips: [
      "야간 경비원 투어(Nightwatchman Tour)는 영어로 진행되며 강추입니다.",
      "이른 아침이나 저녁에 방문하면 인파 없이 사진을 찍을 수 있습니다.",
      "로만틱 가도 버스로 뷔르츠부르크나 퓌센까지 이동 가능합니다.",
    ],
  },
  "germany/bavaria/regensburg": {
    heroGradient: "from-teal-500 to-emerald-800",
    description: "도나우강 위의 UNESCO 세계유산 도시. 2,000년 역사를 가진 돌다리와 고딕 대성당, 활기찬 대학도시 분위기가 매력적입니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 (알트슈타트)",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "중세 거리와 이탈리아풍 탑들이 남아있는 UNESCO 세계유산 지구.", highlights: ["슈타이너네 다리", "성 페터 대성당", "구시청사"] },
    ],
    attractions: [
      { name: "슈타이너네 다리", nameEn: "Stone Bridge", description: "12세기에 건설된 도나우강 위의 중세 돌다리. 도시의 상징입니다.", category: "랜드마크" },
      { name: "성 페터 대성당", nameEn: "Regensburg Cathedral", description: "바이에른 고딕 건축의 걸작으로 유명한 소년 합창단 공연.", category: "성당" },
      { name: "발할라 신전", nameEn: "Walhalla", description: "도나우강변 언덕 위의 그리스 신전 양식 기념관.", category: "기념관", tip: "도나우 유람선으로 접근하면 더욱 인상적입니다." },
    ],
    dayTrips: [
      { name: "파사우", nameEn: "Passau", description: "세 강이 합류하는 아름다운 국경 도시.", travelTime: "기차 약 1시간", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "역사적 소시지 식당", description: "슈타이너네 다리 옆 850년 역사의 소시지 구이 전문점.", emoji: "🌭" },
      { name: "크나이팅어 맥주", description: "레겐스부르크 현지 양조장의 전통 맥주.", emoji: "🍺" },
    ],
    tips: [
      "슈타이너네 다리 옆의 Historische Wurstküche는 세계에서 가장 오래된 소시지 식당입니다.",
      "뮌헨에서 기차로 약 1.5시간, 당일치기 가능합니다.",
    ],
  },

  // ===== BERLIN & EAST =====
  "germany/berlin-east/berlin": {
    heroGradient: "from-gray-600 to-gray-900",
    description: "독일의 수도이자 역사와 예술, 클럽 문화의 도시. 브란덴부르크 문부터 박물관 섬, 이스트사이드 갤러리까지 냉전의 역사와 현대 문화가 공존하는 유럽에서 가장 역동적인 도시입니다.",
    bestTime: "5~9월",
    stayArea: "미테 / 크로이츠베르크 / 프리드리히스하인",
    transport: "U-Bahn, S-Bahn, 트램, 버스 (BVG 통합권)",
    districts: [
      { name: "미테", nameEn: "Mitte", description: "베를린의 역사적 중심부. 브란덴부르크 문, 박물관 섬, 운터 덴 린덴 거리.", highlights: ["브란덴부르크 문", "박물관 섬", "운터 덴 린덴"] },
      { name: "크로이츠베르크", nameEn: "Kreuzberg", description: "다문화와 펑크 문화가 살아있는 트렌디한 지역.", highlights: ["마르크트할레 노인", "쿠어퓌르스텐담", "터키 마켓"] },
      { name: "프리드리히스하인", nameEn: "Friedrichshain", description: "이스트사이드 갤러리와 클럽 문화의 중심지.", highlights: ["이스트사이드 갤러리", "RAW 겔렌데", "박스하겐 광장"] },
      { name: "샤를로텐부르크", nameEn: "Charlottenburg", description: "서베를린의 우아한 지역, 쿠담 쇼핑거리와 궁전.", highlights: ["샤를로텐부르크 궁전", "쿠어퓌르스텐담", "KaDeWe 백화점"] },
    ],
    attractions: [
      { name: "브란덴부르크 문", nameEn: "Brandenburg Gate", description: "베를린의 상징이자 독일 통일의 아이콘. 18세기 신고전주의 양식의 개선문.", category: "랜드마크", tip: "야경이 아름다우니 저녁에도 방문하세요." },
      { name: "박물관 섬", nameEn: "Museum Island", description: "슈프레 강 위의 UNESCO 세계유산. 5개 세계적 박물관이 모여있습니다.", category: "박물관", tip: "뮤지엄패스(3일)를 구매하면 5개 박물관 자유 입장." },
      { name: "이스트사이드 갤러리", nameEn: "East Side Gallery", description: "베를린 장벽에 그려진 1.3km 야외 갤러리. 100점 이상의 벽화.", category: "예술", tip: "오전 일찍 방문하면 사람이 적습니다." },
      { name: "체크포인트 찰리", nameEn: "Checkpoint Charlie", description: "냉전 시대 동서 베를린 국경 검문소였던 역사적 장소.", category: "역사" },
      { name: "홀로코스트 기념관", nameEn: "Holocaust Memorial", description: "2,711개 콘크리트 블록으로 구성된 유대인 학살 추모 기념관.", category: "기념관" },
      { name: "베를린 TV 타워", nameEn: "Berlin TV Tower", description: "368m 높이의 베를린 랜드마크로 회전 레스토랑에서 360도 전망.", category: "전망대" },
    ],
    dayTrips: [
      { name: "포츠담", nameEn: "Potsdam", description: "프로이센 왕가의 상수시 궁전이 있는 UNESCO 도시.", travelTime: "S-Bahn 약 40분", gradient: "from-lime-500 to-green-800" },
      { name: "작센하우젠", nameEn: "Sachsenhausen", description: "나치 강제수용소 기념관으로 역사 교육의 현장.", travelTime: "S-Bahn+버스 약 1시간", gradient: "from-gray-500 to-gray-800" },
    ],
    localFood: [
      { name: "커리부어스트", description: "카레 소스를 뿌린 소시지, 베를린 소울푸드.", emoji: "🌭" },
      { name: "되너 케밥", description: "베를린식 터키 케밥, 크로이츠베르크가 원조.", emoji: "🥙" },
      { name: "베를리너 바이세", description: "시럽을 넣어 마시는 베를린 전통 밀맥주.", emoji: "🍺" },
    ],
    tips: [
      "베를린 웰컴카드(AB존)로 대중교통 + 200개 이상 관광지 할인.",
      "박물관 섬은 최소 반나절, 제대로 보려면 하루가 필요합니다.",
      "일요일 마우어파크 벼룩시장은 현지인 분위기를 느끼기 좋습니다.",
      "베를린은 넓으니 지역별로 나눠서 일정을 짜세요.",
    ],
  },
  "germany/berlin-east/dresden": {
    heroGradient: "from-amber-500 to-amber-800",
    description: "엘베 강변의 '엘베 위의 피렌체'. 2차대전 폭격에서 복원된 프라우엔 교회와 츠빙거 궁전 등 바로크 건축의 정수를 보여주는 문화도시입니다.",
    bestTime: "5~9월",
    stayArea: "알트슈타트 / 노이슈타트",
    transport: "트램, 버스 (DVB)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "프라우엔 교회, 츠빙거 궁전 등 바로크 건축의 핵심 지역.", highlights: ["프라우엔 교회", "츠빙거 궁전", "젬퍼 오페라"] },
      { name: "노이슈타트", nameEn: "Neustadt", description: "카페와 바, 갤러리가 모인 베를린 같은 힙한 지역.", highlights: ["쿤스트호프파사주", "외부 노이슈타트", "마르틴 루터 거리"] },
    ],
    attractions: [
      { name: "프라우엔 교회", nameEn: "Frauenkirche", description: "2차대전 폭격으로 파괴된 후 2005년 복원된 바로크 교회의 걸작.", category: "성당", tip: "돔 전망대에 올라가면 드레스덴 시내 전경을 볼 수 있습니다." },
      { name: "츠빙거 궁전", nameEn: "Zwinger Palace", description: "드레스덴 바로크 건축의 꽃. 고전거장 갤러리에 라파엘로의 시스틴 마돈나.", category: "궁전" },
      { name: "그린 볼트", nameEn: "Green Vault", description: "유럽 최대의 보물 전시관으로 작센 왕가의 보석 컬렉션.", category: "박물관", tip: "히스토리컬 그린볼트는 사전 예약 필수." },
    ],
    dayTrips: [
      { name: "작센 스위스", nameEn: "Saxon Switzerland", description: "기암절벽의 바스타이 다리로 유명한 국립공원.", travelTime: "S-Bahn 약 45분", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "드레스너 아이어셰케", description: "3층 구조의 드레스덴 전통 치즈케이크.", emoji: "🍰" },
      { name: "드레스너 슈톨렌", description: "크리스마스 시즌의 전통 과일빵.", emoji: "🍞" },
    ],
    tips: [
      "베를린에서 ICE로 약 2시간, 당일치기 가능합니다.",
      "젬퍼 오페라 공연 티켓은 미리 예매하세요.",
      "엘베강변 테라스 브뤼흘에서의 산책은 필수 코스입니다.",
    ],
  },
  "germany/berlin-east/leipzig": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "바흐와 멘델스존의 도시이자 1989년 평화 혁명의 발원지. 현재는 젊은 예술가들이 모여드는 독일의 뉴 베를린으로 불립니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 (인넨슈타트)",
    transport: "트램, S-Bahn",
    districts: [
      { name: "인넨슈타트", nameEn: "Innenstadt", description: "마르크트 광장과 주요 교회, 쇼핑 아케이드가 있는 중심부.", highlights: ["성 토마스 교회", "니콜라이 교회", "마들러 파사주"] },
    ],
    attractions: [
      { name: "성 토마스 교회", nameEn: "St. Thomas Church", description: "바흐가 27년간 음악감독을 지낸 교회로 바흐의 묘소가 있습니다.", category: "교회" },
      { name: "니콜라이 교회", nameEn: "Nikolaikirche", description: "1989년 평화 혁명의 시작점이 된 역사적 교회.", category: "교회" },
      { name: "슈필네 코튼 공장", nameEn: "Spinnerei", description: "옛 면방직 공장을 개조한 대규모 예술 단지.", category: "예술", tip: "갤러리 라운드(매월 첫째 토요일) 방문 추천." },
    ],
    dayTrips: [
      { name: "바이마르", nameEn: "Weimar", description: "괴테와 실러, 바우하우스의 도시.", travelTime: "기차 약 1시간", gradient: "from-emerald-500 to-green-800" },
    ],
    localFood: [
      { name: "라이프치거 알레알라이", description: "계절 채소 스튜, 라이프치히의 전통 요리.", emoji: "🥘" },
      { name: "고제 맥주", description: "라이프치히 전통 사워 비어, 짭짤하고 상큼한 맛.", emoji: "🍺" },
    ],
    tips: [
      "베를린에서 ICE로 약 1시간 15분으로 당일치기 가능합니다.",
      "아우어바흐 켈러는 괴테의 파우스트에 등장하는 실제 레스토랑입니다.",
    ],
  },
  "germany/berlin-east/potsdam": {
    heroGradient: "from-lime-500 to-green-800",
    description: "베를린 바로 옆의 UNESCO 도시. 프로이센 왕가의 상수시 궁전과 광대한 정원이 있으며, 냉전의 흔적도 남아있는 역사적인 도시입니다.",
    bestTime: "5~9월",
    stayArea: "포츠담 시내 중심부",
    transport: "베를린 S-Bahn 연결, 트램",
    districts: [
      { name: "상수시 공원", nameEn: "Park Sanssouci", description: "상수시 궁전을 중심으로 한 광대한 왕실 정원 단지.", highlights: ["상수시 궁전", "신궁전", "오랑주리"] },
      { name: "네덜란드 지구", nameEn: "Dutch Quarter", description: "18세기 네덜란드 스타일 붉은 벽돌 건물이 모인 아기자기한 거리.", highlights: ["카페", "부티크 숍", "갤러리"] },
    ],
    attractions: [
      { name: "상수시 궁전", nameEn: "Sanssouci Palace", description: "프리드리히 대왕의 여름 궁전. '근심 없는'이란 뜻으로 로코코 양식의 보석.", category: "궁전", tip: "사전 시간 지정 티켓이 필요합니다." },
      { name: "체칠리엔호프", nameEn: "Cecilienhof", description: "1945년 포츠담 회담이 열린 역사적 궁전.", category: "궁전" },
    ],
    dayTrips: [],
    localFood: [
      { name: "브란덴부르크 요리", description: "호수 민물고기와 감자 요리 등 소박한 지방 음식.", emoji: "🐟" },
    ],
    tips: [
      "베를린 ABC존 교통권으로 포츠담까지 이동 가능합니다.",
      "상수시 공원은 넓으므로 자전거 대여를 추천합니다.",
    ],
  },
};

export const germanyAttractionDetails: Record<string, AttractionDetail> = {};
