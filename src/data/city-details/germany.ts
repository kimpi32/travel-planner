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

  // ===== RHINELAND-WEST =====
  "germany/rhineland-west/cologne": {
    heroGradient: "from-red-600 to-rose-900",
    description: "라인강변의 2,000년 역사를 가진 대도시. 유네스코 세계유산 쾰른 대성당이 우뚝 솟은 스카이라인과 활기찬 카니발 축제, 쾰시 맥주 문화가 매력적입니다.",
    bestTime: "5~9월 / 11~12월 (크리스마스 마켓) / 2월 (카니발)",
    stayArea: "알트슈타트 / 중앙역 주변",
    transport: "U-Bahn, S-Bahn, 트램, 버스 (KVB)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "쾰른 대성당과 구시가지, 라인강 산책로가 있는 핵심 관광 지역.", highlights: ["쾰른 대성당", "호엔촐레른 다리", "구시청사"] },
      { name: "벨기셰스 피어텔", nameEn: "Belgisches Viertel", description: "트렌디한 카페, 부티크, 갤러리가 모인 젊은 감각의 지역.", highlights: ["브뤼셀러 광장", "독립 서점", "빈티지 숍"] },
      { name: "에렌펠트", nameEn: "Ehrenfeld", description: "스트리트 아트와 다문화 음식점이 많은 힙한 지역.", highlights: ["헬리오스 등대", "스트리트 아트", "클럽 문화"] },
    ],
    attractions: [
      { name: "쾰른 대성당", nameEn: "Cologne Cathedral", description: "632년 만에 완공된 고딕 건축의 걸작. 157m 높이의 쌍둥이 첨탑이 인상적입니다.", category: "성당", tip: "533개 계단을 올라 남쪽 탑 전망대에서 라인강 조망을 즐기세요." },
      { name: "호엔촐레른 다리", nameEn: "Hohenzollern Bridge", description: "수만 개의 사랑의 자물쇠로 유명한 라인강 위의 철교.", category: "랜드마크", tip: "대성당과 함께 야경 촬영 포인트입니다." },
      { name: "초콜릿 박물관", nameEn: "Chocolate Museum", description: "초콜릿의 역사와 제조 과정을 체험하는 라인강변의 인기 박물관.", category: "박물관", tip: "3m 높이 초콜릿 분수에서 시식이 가능합니다." },
      { name: "로마-게르만 박물관", nameEn: "Romano-Germanic Museum", description: "로마 시대 쾰른의 유적과 디오니소스 모자이크를 전시.", category: "박물관" },
    ],
    dayTrips: [
      { name: "본", nameEn: "Bonn", description: "베토벤의 생가와 옛 서독 수도의 역사가 있는 도시.", travelTime: "기차 약 20분", gradient: "from-blue-400 to-blue-700" },
      { name: "뒤셀도르프", nameEn: "Düsseldorf", description: "패션과 예술의 도시, 알트비어와 쾨니히스알레 쇼핑 거리.", travelTime: "기차 약 25분", gradient: "from-cyan-400 to-teal-700" },
    ],
    localFood: [
      { name: "쾰시", description: "쾰른 전용 200ml 작은 잔으로 마시는 상면발효 라거 맥주.", emoji: "🍺" },
      { name: "히멜 운 에어드", description: "'하늘과 땅'이라는 뜻의 사과-감자 퓌레에 블루트부어스트를 곁들인 요리.", emoji: "🍎" },
      { name: "라이베쿠헨", description: "바삭한 감자전, 사과소스와 함께 먹는 라인강 지방 전통 음식.", emoji: "🥔" },
    ],
    tips: [
      "쾰른카드로 대중교통 무제한 + 박물관 할인 혜택을 받으세요.",
      "카니발 시즌(2월)에는 도시 전체가 축제 분위기로 숙소를 미리 예약하세요.",
      "라인강변 산책은 일몰 시간에 특히 아름답습니다.",
      "구시가지 양조장(Brauhaus)에서 쾰시 맥주 체험은 필수입니다.",
    ],
  },
  "germany/rhineland-west/duesseldorf": {
    heroGradient: "from-cyan-500 to-teal-800",
    description: "패션과 예술, 일본 문화가 공존하는 라인강변의 세련된 도시. 쾨니히스알레 쇼핑 거리와 알트슈타트의 활기찬 맥주 문화가 대조적인 매력을 선사합니다.",
    bestTime: "5~9월",
    stayArea: "알트슈타트 / 중앙역 주변",
    transport: "U-Bahn, S-Bahn, 트램, 버스 (Rheinbahn)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "세계에서 가장 긴 바(Bar) 카운터라 불리는 260개 이상의 바와 레스토랑이 밀집한 구시가지.", highlights: ["볼커 거리", "라인강 산책로", "성 람베르투스 교회"] },
      { name: "쾨니히스알레", nameEn: "Koenigsallee", description: "운하를 따라 명품 부티크와 갤러리가 늘어선 쇼핑 거리.", highlights: ["명품 부티크", "트리톤 분수", "쾨 갤러리아"] },
      { name: "메디엔하펜", nameEn: "Medienhafen", description: "프랑크 게리의 건축물이 있는 현대적인 미디어 항구 지역.", highlights: ["게리 건물", "라인 타워", "레스토랑"] },
    ],
    attractions: [
      { name: "쾨니히스알레", nameEn: "Koenigsallee", description: "독일 최고의 럭셔리 쇼핑 거리로 아름다운 운하를 따라 산책하기 좋습니다.", category: "쇼핑" },
      { name: "라인 타워", nameEn: "Rhine Tower", description: "240m 높이의 전망대에서 뒤셀도르프와 라인강 파노라마를 감상.", category: "전망대", tip: "회전 레스토랑에서 식사하며 전망을 즐길 수 있습니다." },
      { name: "K21 현대미술관", nameEn: "K21 Museum", description: "현대미술 컬렉션을 소장한 뒤셀도르프의 대표 미술관.", category: "미술관" },
      { name: "일본 거리", nameEn: "Japanese Quarter", description: "유럽 최대의 일본인 커뮤니티가 형성된 지역으로 정통 일식 레스토랑이 밀집.", category: "지역" },
    ],
    dayTrips: [
      { name: "쾰른", nameEn: "Cologne", description: "쾰른 대성당과 활기찬 구시가지가 있는 라인강의 대도시.", travelTime: "기차 약 25분", gradient: "from-red-400 to-rose-700" },
    ],
    localFood: [
      { name: "알트비어", description: "뒤셀도르프 전통 상면발효 흑맥주, 쾰른의 쾰시와는 라이벌.", emoji: "🍺" },
      { name: "라인강 사우어브라텐", description: "와인 식초에 절인 후 천천히 익힌 소고기 로스트.", emoji: "🥩" },
      { name: "일본 라멘", description: "임머만 거리의 정통 일본식 라멘으로 현지인에게도 인기.", emoji: "🍜" },
    ],
    tips: [
      "알트슈타트의 양조장 투어로 알트비어 다양한 브랜드를 맛보세요.",
      "메디엔하펜의 게리 건축물은 일몰 시간에 촬영하면 더 아름답습니다.",
      "뒤셀도르프카드로 대중교통과 박물관 할인을 받을 수 있습니다.",
    ],
  },
  "germany/rhineland-west/bonn": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "베토벤의 생가이자 옛 서독의 수도. 대학도시의 활기와 박물관 마일의 문화적 깊이가 조화로운 라인강변의 소도시입니다.",
    bestTime: "4~9월 (4월 벚꽃 거리 필수)",
    stayArea: "시내 중심부 / 중앙역 주변",
    transport: "U-Bahn, 버스, 트램",
    districts: [
      { name: "시내 중심부", nameEn: "Innenstadt", description: "베토벤 생가와 대학, 마르크트 광장이 있는 구시가지.", highlights: ["베토벤 생가", "본 대학교", "구시청사"] },
      { name: "박물관 마일", nameEn: "Museumsmeile", description: "독일 역사의 집, 본 미술관 등 주요 박물관이 밀집한 거리.", highlights: ["독일 역사의 집", "본 미술관", "연방 우체국 박물관"] },
    ],
    attractions: [
      { name: "베토벤 생가", nameEn: "Beethoven House", description: "루트비히 판 베토벤이 태어난 집으로 그의 악기와 자필 악보 전시.", category: "박물관", tip: "오디오 가이드가 한국어를 지원합니다." },
      { name: "본 대학교", nameEn: "University of Bonn", description: "옛 선제후 궁전을 활용한 아름다운 대학교 건물.", category: "건축" },
      { name: "벚꽃 거리", nameEn: "Cherry Blossom Avenue", description: "4월에 만개하는 벚꽃 터널이 장관을 이루는 헤어슈트라세.", category: "자연", tip: "4월 중순이 가장 아름답습니다." },
    ],
    dayTrips: [
      { name: "드라헨펠스", nameEn: "Drachenfels", description: "라인강이 내려다보이는 고성 유적과 등산 코스.", travelTime: "기차+도보 약 40분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "라인강 와인", description: "본 주변 라인가우 지역에서 생산되는 리슬링 화이트 와인.", emoji: "🍷" },
      { name: "할베 한", description: "반 마리 닭구이, 본과 쾰른 지역의 전통 음식.", emoji: "🍗" },
    ],
    tips: [
      "쾰른에서 기차로 20분으로 당일치기에 최적입니다.",
      "벚꽃 시즌(4월)에는 헤어슈트라세가 인스타그램 명소가 됩니다.",
      "박물관 마일은 화요일이 대부분 휴관이니 주의하세요.",
    ],
  },
  "germany/rhineland-west/rhine-valley": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "유네스코 세계유산에 등재된 라인강 계곡의 절경. 포도밭으로 뒤덮인 언덕과 중세 고성, 아기자기한 와인 마을이 이어지는 독일에서 가장 낭만적인 지역입니다.",
    bestTime: "5~10월 (9~10월 포도 수확 축제)",
    stayArea: "바하라흐 / 장크트 고아르",
    transport: "라인강 유람선, 기차 (좌안·우안 철도)",
    districts: [
      { name: "바하라흐", nameEn: "Bacharach", description: "중세 성벽과 목조 건물이 보존된 라인강의 보석 같은 와인 마을.", highlights: ["슈탈엑 성", "포도밭 산책로", "와인 선술집"] },
      { name: "장크트 고아르", nameEn: "St. Goar", description: "라인펠스 성과 로렐라이 전설의 중심지.", highlights: ["라인펠스 성", "로렐라이 바위", "유람선 선착장"] },
    ],
    attractions: [
      { name: "로렐라이", nameEn: "Lorelei", description: "하인리히 하이네의 시로 유명한 라인강의 전설적인 바위.", category: "자연", tip: "유람선에서 보는 로렐라이가 가장 인상적입니다." },
      { name: "라인펠스 성", nameEn: "Rheinfels Castle", description: "라인강 최대 규모의 고성 유적으로 지하 통로 탐험이 가능합니다.", category: "고성" },
      { name: "마르크스부르크 성", nameEn: "Marksburg Castle", description: "라인강에서 파괴되지 않고 원형이 보존된 유일한 중세 성.", category: "고성", tip: "가이드 투어로만 내부 관람 가능합니다." },
    ],
    dayTrips: [
      { name: "뤼데스하임", nameEn: "Rüdesheim", description: "드로셀가세 골목과 케이블카 포도밭 전망이 유명한 와인 마을.", travelTime: "유람선 약 2시간", gradient: "from-purple-400 to-violet-700" },
    ],
    localFood: [
      { name: "리슬링 와인", description: "라인강 계곡의 가파른 포도밭에서 생산되는 세계적인 화이트 와인.", emoji: "🍷" },
      { name: "플람쿠헨", description: "얇은 도우에 사워크림, 양파, 베이컨을 올린 독일식 피자.", emoji: "🍕" },
    ],
    tips: [
      "KD 라인 유람선은 유레일패스 소지자 무료(또는 할인)입니다.",
      "코블렌츠~마인츠 구간이 가장 아름다운 핵심 구간입니다.",
      "좌안 철도가 고성과 마을을 더 가깝게 지나갑니다.",
      "와인 축제 시즌(8~10월)에는 마을마다 행사가 열립니다.",
    ],
  },

  // ===== NORTH =====
  "germany/north/hamburg": {
    heroGradient: "from-sky-600 to-blue-900",
    description: "독일 제2의 도시이자 유럽 최대의 항구도시. 엘베 필하모닉, 미니어처 원더랜드, 슈파이허슈타트 창고지구 등 바다와 문화가 어우러진 매력적인 도시입니다.",
    bestTime: "5~9월",
    stayArea: "시내 중심부 / 하펜시티 / 장크트 파울리",
    transport: "U-Bahn, S-Bahn, 버스, 항구 페리 (HVV)",
    districts: [
      { name: "하펜시티", nameEn: "HafenCity", description: "엘프필하모니와 슈파이허슈타트가 있는 재개발된 항구 지역.", highlights: ["엘프필하모니", "슈파이허슈타트", "미니어처 원더랜드"] },
      { name: "장크트 파울리", nameEn: "St. Pauli", description: "레퍼반 유흥가와 라이브 음악 클럽이 밀집한 활기찬 지역.", highlights: ["레퍼반", "비틀즈 광장", "항구 피쉬마르크트"] },
      { name: "알토나", nameEn: "Altona", description: "엘베강변 전망과 피쉬마르크트가 있는 다문화 지역.", highlights: ["알토나 발코니", "일요 피쉬마르크트", "오트텐센"] },
    ],
    attractions: [
      { name: "엘프필하모니", nameEn: "Elbphilharmonie", description: "파도 모양 유리 지붕이 인상적인 세계적 콘서트홀. 무료 전망대 '플라자'에서 항구 전경 조망.", category: "건축", tip: "플라자 무료 입장도 온라인 사전 예약이 필요합니다." },
      { name: "미니어처 원더랜드", nameEn: "Miniatur Wunderland", description: "세계 최대의 철도 모형 전시관으로 정교한 미니어처 세계가 경이로운 곳.", category: "박물관", tip: "온라인 사전 예약 필수! 당일 매진이 잦습니다." },
      { name: "슈파이허슈타트", nameEn: "Speicherstadt", description: "유네스코 세계유산에 등재된 세계 최대의 창고 지구. 붉은 벽돌 건물이 운하를 따라 이어집니다.", category: "역사", tip: "야간 조명이 아름다우니 저녁 산책도 추천합니다." },
      { name: "레퍼반", nameEn: "St. Pauli/Reeperbahn", description: "함부르크의 유흥·문화 거리로 비틀즈가 초기 활동을 했던 전설적인 지역.", category: "문화", tip: "비틀즈 워킹 투어로 그들의 흔적을 따라가 보세요." },
      { name: "항구 피쉬마르크트", nameEn: "Fish Market", description: "일요일 새벽 5시부터 열리는 300년 전통의 수산 시장.", category: "시장" },
    ],
    dayTrips: [
      { name: "뤼베크", nameEn: "Lübeck", description: "한자동맹의 여왕, 마르치판의 본고장인 UNESCO 도시.", travelTime: "기차 약 45분", gradient: "from-rose-400 to-red-700" },
      { name: "브레멘", nameEn: "Bremen", description: "브레멘 음악대 동화로 유명한 한자동맹 도시.", travelTime: "기차 약 1시간", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "피쉬브뢰첸", description: "신선한 생선(청어, 새우 등)을 넣은 북독일식 생선 빵.", emoji: "🐟" },
      { name: "라프스카우스", description: "소금에 절인 고기, 감자, 비트를 으깬 선원들의 전통 음식.", emoji: "🥘" },
      { name: "프란츠브뢰첸", description: "계피향이 가득한 함부르크 전통 페이스트리.", emoji: "🥐" },
    ],
    tips: [
      "함부르크카드로 대중교통 + 주요 관광지 할인이 가능합니다.",
      "HVV 페리 62번 노선은 대중교통 요금으로 항구 유람이 가능한 꿀팁!",
      "일요 피쉬마르크트는 이른 아침(5~9:30)에만 운영하니 일찍 일어나세요.",
      "엘프필하모니 콘서트 티켓은 최소 한 달 전에 예매하세요.",
    ],
  },
  "germany/north/bremen": {
    heroGradient: "from-green-500 to-teal-800",
    description: "그림 형제의 '브레멘 음악대' 동화로 유명한 한자동맹 도시. 마르크트 광장의 중세 건축과 베저강변의 아기자기한 슈노어 지구가 매력적입니다.",
    bestTime: "5~9월",
    stayArea: "마르크트 광장 / 중앙역 주변",
    transport: "트램, 버스 (BSAG)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "시청사, 롤란트 상, 브레멘 음악대 동상이 있는 구시가지 중심.", highlights: ["마르크트 광장", "시청사", "롤란트 상"] },
      { name: "슈노어", nameEn: "Schnoor", description: "15~16세기 좁은 골목과 목조 건물이 남아있는 가장 오래된 지구.", highlights: ["공예품 가게", "카페", "갤러리"] },
    ],
    attractions: [
      { name: "마르크트 광장", nameEn: "Market Square", description: "유네스코 세계유산인 시청사와 롤란트 상이 있는 브레멘의 심장부.", category: "광장" },
      { name: "브레멘 음악대 동상", nameEn: "Town Musicians Statue", description: "당나귀, 개, 고양이, 수탉이 탑을 이룬 동화 속 동상. 당나귀 앞발을 만지면 소원이 이루어진다는 전설.", category: "랜드마크", tip: "당나귀 두 앞발을 모두 잡아야 소원이 이루어집니다." },
      { name: "뵈트허 거리", nameEn: "Böttcherstraße", description: "표현주의 건축 양식의 독특한 골목으로 갤러리와 공방이 밀집.", category: "건축" },
    ],
    dayTrips: [
      { name: "브레머하펜", nameEn: "Bremerhaven", description: "독일 이민 박물관과 기후의 집이 있는 항구 도시.", travelTime: "기차 약 40분", gradient: "from-blue-400 to-sky-700" },
    ],
    localFood: [
      { name: "크노프", description: "브레멘 전통 스튜로 양고기, 감자, 배를 넣어 만든 푸짐한 요리.", emoji: "🥘" },
      { name: "벡스 맥주", description: "브레멘의 대표 필스너 맥주, 세계적으로 유명.", emoji: "🍺" },
    ],
    tips: [
      "함부르크에서 기차로 약 1시간, 당일치기로 적합합니다.",
      "마르크트 광장~슈노어 지구~뵈트허 거리는 도보 코스로 반나절이면 충분합니다.",
      "크리스마스 마켓 시즌(11~12월)에는 광장이 더욱 아름답습니다.",
    ],
  },
  "germany/north/luebeck": {
    heroGradient: "from-rose-500 to-red-800",
    description: "한자동맹의 여왕으로 불렸던 발트해 연안의 UNESCO 세계유산 도시. 홀슈텐 문과 고딕 벽돌 건축, 마르치판의 본고장으로 중세의 영화를 간직하고 있습니다.",
    bestTime: "5~9월 / 12월 (크리스마스 마켓)",
    stayArea: "구시가지 (알트슈타트) 내",
    transport: "도보 (구시가지 컴팩트), 버스",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "트라베강으로 둘러싸인 섬 위의 UNESCO 세계유산 구시가지.", highlights: ["홀슈텐 문", "마리엔 교회", "시청사"] },
    ],
    attractions: [
      { name: "홀슈텐 문", nameEn: "Holstentor", description: "뤼베크의 상징인 15세기 고딕 양식의 성문. 2유로 동전에 새겨져 있습니다.", category: "랜드마크" },
      { name: "마리엔 교회", nameEn: "St. Mary's Church", description: "세계에서 가장 높은 벽돌 교회로 2차대전의 흔적이 남아 있는 종이 감동적.", category: "교회" },
      { name: "니더에거 마르치판 살롱", nameEn: "Niederegger Marzipan", description: "200년 전통의 마르치판 전문점으로 2층 박물관에서 마르치판 역사를 전시.", category: "박물관", tip: "카페에서 마르치판 토르테를 꼭 맛보세요." },
    ],
    dayTrips: [
      { name: "트라베뮌데", nameEn: "Travemünde", description: "뤼베크의 발트해 해변 휴양지로 등대와 해안 산책로.", travelTime: "버스 약 30분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "마르치판", description: "뤼베크의 명물, 아몬드와 설탕으로 만든 전통 과자.", emoji: "🍬" },
      { name: "발트해 훈제 생선", description: "갓 잡은 청어와 고등어를 훈제한 북독일 해산물.", emoji: "🐟" },
    ],
    tips: [
      "함부르크에서 기차로 약 45분, 반나절~하루 코스로 적합합니다.",
      "구시가지 전체가 UNESCO 유산이니 골목골목 걸어보세요.",
      "토마스 만, 빌리 브란트 등 노벨상 수상자의 도시이기도 합니다.",
    ],
  },

  // ===== SOUTHWEST =====
  "germany/southwest/heidelberg": {
    heroGradient: "from-rose-500 to-purple-800",
    description: "네카어강변의 독일에서 가장 낭만적인 대학도시. 붉은 사암으로 된 고성 유적과 아름다운 구시가지, 철학자의 길 산책로가 시적인 풍경을 만들어냅니다.",
    bestTime: "4~10월",
    stayArea: "구시가지 (알트슈타트) / 비스마르크 광장 주변",
    transport: "트램, 버스, 도보 (구시가지 컴팩트)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "하우프트 거리를 중심으로 한 바로크 양식의 구시가지. 성으로 가는 푸니쿨라 탑승 지점.", highlights: ["하우프트 거리", "성령 교회", "구 다리", "하이델베르크 대학교"] },
      { name: "노이엔하임", nameEn: "Neuenheim", description: "철학자의 길이 있는 네카어강 건너편의 조용한 주거 지역.", highlights: ["철학자의 길", "네카어강변 산책로"] },
    ],
    attractions: [
      { name: "하이델베르크 성", nameEn: "Heidelberg Castle", description: "네카어강이 내려다보이는 붉은 사암의 르네상스 고성 유적. 세계에서 가장 큰 와인통이 있습니다.", category: "고성", tip: "푸니쿨라 또는 도보(약 15분)로 올라갈 수 있습니다." },
      { name: "철학자의 길", nameEn: "Philosophers Walk", description: "네카어강 건너편 언덕의 산책로로, 괴테와 철학자들이 사색하던 곳. 성과 구시가지 최고의 전망.", category: "산책", tip: "일몰 시간에 방문하면 성과 구시가지가 황금빛으로 물듭니다." },
      { name: "구 다리", nameEn: "Old Bridge", description: "카를 테오도어 다리라고도 불리는 바로크 양식의 아름다운 다리. 원숭이 동상이 명물.", category: "랜드마크" },
      { name: "하이델베르크 대학교", nameEn: "Heidelberg University", description: "1386년 설립된 독일 최고(最古)의 대학교. 학생 감옥이 유명합니다.", category: "대학", tip: "학생 감옥(Studentenkarzer)은 꼭 방문하세요." },
    ],
    dayTrips: [
      { name: "슈투트가르트", nameEn: "Stuttgart", description: "메르세데스-벤츠와 포르쉐 박물관이 있는 자동차의 도시.", travelTime: "기차 약 40분", gradient: "from-gray-500 to-slate-800" },
      { name: "슈파이어", nameEn: "Speyer", description: "로마네스크 양식의 대성당이 유네스코 유산인 역사 도시.", travelTime: "S-Bahn 약 25분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "쿠어팔츠 요리", description: "팔츠 지방의 전통 요리로 자우마겐(돼지 위 요리)이 대표적.", emoji: "🥘" },
      { name: "팔츠 와인", description: "독일 최대 와인 산지인 팔츠의 리슬링과 피노 누아.", emoji: "🍷" },
    ],
    tips: [
      "하이델베르크카드(1~4일)로 성 입장, 푸니쿨라, 대중교통 포함.",
      "구 다리에서 보는 성의 야경이 특히 아름답습니다.",
      "프랑크푸르트에서 기차로 약 50분, 당일치기 인기 코스입니다.",
      "하우프트 거리는 독일에서 가장 긴 보행자 전용 거리(1.6km)입니다.",
    ],
  },
  "germany/southwest/stuttgart": {
    heroGradient: "from-gray-600 to-slate-900",
    description: "메르세데스-벤츠와 포르쉐의 본사가 있는 자동차 산업의 수도. 슈바벤 문화와 주변 와인 산지, 세계적인 자동차 박물관이 매력적인 도시입니다.",
    bestTime: "5~9월 (9~10월 칸슈타터 바젠 축제)",
    stayArea: "중앙역 주변 / 쾨니히 거리",
    transport: "U-Bahn, S-Bahn, 버스 (VVS)",
    districts: [
      { name: "시내 중심", nameEn: "Stadtmitte", description: "쾨니히 거리 쇼핑가와 궁전 광장이 있는 도심 핵심 지역.", highlights: ["쾨니히 거리", "궁전 광장", "신궁전", "구궁전"] },
      { name: "바트 칸슈타트", nameEn: "Bad Cannstatt", description: "메르세데스-벤츠 박물관과 온천, 축제장이 있는 지역.", highlights: ["메르세데스-벤츠 박물관", "빌헬마 동물원", "미네랄 온천"] },
    ],
    attractions: [
      { name: "메르세데스-벤츠 박물관", nameEn: "Mercedes-Benz Museum", description: "자동차 역사 130년을 9개 층에 걸쳐 전시하는 세계적인 자동차 박물관.", category: "박물관", tip: "오디오 가이드가 한국어를 지원하며, 관람 소요 약 2~3시간." },
      { name: "포르쉐 박물관", nameEn: "Porsche Museum", description: "80대 이상의 포르쉐 차량을 전시하는 미래지향적 건축의 박물관.", category: "박물관", tip: "메르세데스-벤츠 박물관과 같은 날 방문하면 효율적입니다." },
      { name: "궁전 광장", nameEn: "Schlossplatz", description: "신궁전과 유빌레움 기둥이 있는 슈투트가르트 중심 광장.", category: "광장" },
      { name: "빌헬마", nameEn: "Wilhelma", description: "유럽 유일의 궁전 양식 동식물원으로 1만종 이상의 동식물 보유.", category: "동물원" },
    ],
    dayTrips: [
      { name: "하이델베르크", nameEn: "Heidelberg", description: "낭만적인 고성과 대학도시.", travelTime: "기차 약 40분", gradient: "from-rose-400 to-purple-700" },
      { name: "튀빙엔", nameEn: "Tübingen", description: "네카어강변의 아름다운 중세 대학도시.", travelTime: "기차 약 45분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "마울타셴", description: "슈바벤 전통 대형 만두로 '슈바벤의 라비올리'라 불림.", emoji: "🥟" },
      { name: "슈페츨레", description: "달걀 반죽으로 만든 슈바벤 전통 파스타, 치즈를 올린 케제슈페츨레가 인기.", emoji: "🍝" },
      { name: "뷔르템베르크 와인", description: "슈투트가르트 주변 포도밭에서 생산되는 레드·화이트 와인.", emoji: "🍷" },
    ],
    tips: [
      "슈투트가르트카드(StuttCard)로 대중교통 + 박물관 무료 입장.",
      "메르세데스-벤츠와 포르쉐 박물관은 각각 반나절씩 여유롭게 관람하세요.",
      "칸슈타터 바젠(9~10월)은 뮌헨 옥토버페스트에 버금가는 맥주 축제입니다.",
    ],
  },
  "germany/southwest/freiburg": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "흑림(슈바르츠발트)의 관문이자 독일에서 가장 햇살이 좋은 도시. 중세 대성당과 친환경 도시계획, 대학도시의 활기가 어우러진 매력적인 소도시입니다.",
    bestTime: "5~10월",
    stayArea: "구시가지 (알트슈타트)",
    transport: "트램, 버스 (VAG), 도보",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "뮌스터 대성당과 수로(베힐레)가 흐르는 아기자기한 구시가지.", highlights: ["뮌스터 대성당", "뮌스터 광장 시장", "베힐레 수로"] },
    ],
    attractions: [
      { name: "프라이부르크 뮌스터", nameEn: "Freiburg Minster", description: "116m 고딕 첨탑이 인상적인 대성당으로, 첨탑 전망대에서 흑림과 도시 조망.", category: "성당", tip: "첨탑 전망대(217계단)는 월요일 휴무입니다." },
      { name: "베힐레", nameEn: "Bächle", description: "구시가지 골목을 흐르는 중세 수로로 프라이부르크만의 독특한 풍경.", category: "랜드마크" },
      { name: "슐로스베르크", nameEn: "Schlossberg", description: "도심 바로 옆 언덕으로 케이블카나 도보로 올라가 도시 전경 조망.", category: "전망대" },
    ],
    dayTrips: [
      { name: "흑림(슈바르츠발트)", nameEn: "Black Forest", description: "뻐꾸기시계와 흑림 케이크의 본고장인 울창한 산림 지대.", travelTime: "버스 약 1시간", gradient: "from-green-600 to-green-900" },
      { name: "콜마르", nameEn: "Colmar", description: "프랑스 알자스의 동화 같은 마을 (국경 바로 너머).", travelTime: "기차 약 40분", gradient: "from-pink-400 to-rose-700" },
    ],
    localFood: [
      { name: "슈바르츠발트 키르슈토르테", description: "체리, 생크림, 초콜릿 시트의 흑림 케이크.", emoji: "🍰" },
      { name: "랑게 로테", description: "프라이부르크 전통 긴 소시지, 뮌스터 광장 시장에서.", emoji: "🌭" },
      { name: "바덴 와인", description: "독일에서 가장 따뜻한 바덴 지역의 풍미 좋은 와인.", emoji: "🍷" },
    ],
    tips: [
      "뮌스터 광장 아침 시장(월~토)에서 랑게 로테 소시지를 맛보세요.",
      "베힐레에 발을 빠뜨리면 프라이부르크 사람과 결혼한다는 전설이 있습니다.",
      "프라이부르크는 흑림 여행의 최적 거점입니다.",
    ],
  },
  "germany/southwest/black-forest": {
    heroGradient: "from-green-700 to-green-950",
    description: "독일 남서부의 울창한 산림 지대로 뻐꾸기시계와 흑림 케이크의 본고장. 그림 형제 동화의 배경이 된 깊은 숲과 전통 농가, 온천 마을이 있는 자연 여행지입니다.",
    bestTime: "5~10월 (겨울 스키도 가능)",
    stayArea: "티티제 / 트리베르크 / 바덴바덴",
    transport: "기차 + 버스 (KONUS 카드 무료 교통)",
    districts: [
      { name: "티티제", nameEn: "Titisee", description: "흑림에서 가장 유명한 호수 마을로 보트, 하이킹, 기념품 쇼핑.", highlights: ["티티제 호수", "보트 투어", "뻐꾸기시계 가게"] },
      { name: "트리베르크", nameEn: "Triberg", description: "독일에서 가장 높은 폭포와 뻐꾸기시계 공방이 있는 마을.", highlights: ["트리베르크 폭포", "뻐꾸기시계 공방", "흑림 박물관"] },
      { name: "바덴바덴", nameEn: "Baden-Baden", description: "유럽 상류층이 사랑한 온천 휴양 도시.", highlights: ["프리드리히 온천", "카라칼라 온천", "카지노"] },
    ],
    attractions: [
      { name: "트리베르크 폭포", nameEn: "Triberg Waterfalls", description: "163m 높이의 독일 최대 폭포로 7단 계단식으로 떨어집니다.", category: "자연" },
      { name: "뻐꾸기시계 공방", nameEn: "Cuckoo Clock Workshop", description: "흑림 전통 뻐꾸기시계의 제작 과정을 견학하고 구매할 수 있는 공방.", category: "문화" },
      { name: "바덴바덴 온천", nameEn: "Baden-Baden Spa", description: "2,000년 역사의 프리드리히 온천과 현대식 카라칼라 온천.", category: "온천", tip: "프리드리히 온천은 혼욕이며 수영복 착용 불가, 카라칼라는 수영복 필수." },
    ],
    dayTrips: [
      { name: "프라이부르크", nameEn: "Freiburg", description: "흑림의 관문 도시, 뮌스터 대성당과 아름다운 구시가지.", travelTime: "기차 약 40분~1시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "슈바르츠발트 키르슈토르테", description: "체리, 키르슈(체리술), 초콜릿, 생크림의 전설적인 흑림 케이크.", emoji: "🍰" },
      { name: "슈바르츠발트 햄", description: "전나무 연기로 훈제한 흑림 전통 생햄.", emoji: "🥓" },
      { name: "슈페츨레", description: "수제 달걀 면에 치즈와 양파를 올린 산간 지방 전통 요리.", emoji: "🍝" },
    ],
    tips: [
      "KONUS 카드(숙박 시 무료 제공)로 흑림 지역 대중교통이 무료입니다.",
      "뻐꾸기시계는 VdS 인증 마크가 있는 것이 정품입니다.",
      "바덴바덴 프리드리히 온천은 독특한 경험이지만 혼욕 문화를 미리 알아두세요.",
    ],
  },

  // ===== CENTRAL =====
  "germany/central/frankfurt": {
    heroGradient: "from-slate-600 to-gray-900",
    description: "유럽 금융의 중심지이자 '마인해튼'이라 불리는 스카이라인의 도시. 괴테의 생가, 뢰머 광장의 중세 건축과 현대적 마천루가 공존하는 독일의 관문입니다.",
    bestTime: "5~9월",
    stayArea: "뢰머 / 중앙역 주변 / 작센하우젠",
    transport: "U-Bahn, S-Bahn, 트램, 버스 (RMV)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "뢰머 광장과 대성당, 새롭게 복원된 구시가지(노이에 알트슈타트).", highlights: ["뢰머", "프랑크푸르트 대성당", "노이에 알트슈타트"] },
      { name: "작센하우젠", nameEn: "Sachsenhausen", description: "마인강 남쪽의 아펠바인(사과주) 지구와 박물관 강변.", highlights: ["아펠바인 선술집", "박물관 강변", "플로서 다리"] },
      { name: "반호프스피어텔", nameEn: "Bahnhofsviertel", description: "중앙역 주변으로 다문화 음식점과 바가 밀집한 트렌디한 지역.", highlights: ["다국적 레스토랑", "바", "카페"] },
    ],
    attractions: [
      { name: "뢰머", nameEn: "Roemer", description: "600년 역사의 프랑크푸르트 구시청사로 계단 모양 파사드가 상징적. 황제 대관식이 열렸던 역사적 건물.", category: "건축", tip: "뢰머 광장의 카페에서 아펠바인을 마시며 쉬어가세요." },
      { name: "마인 타워", nameEn: "Main Tower", description: "200m 높이의 전망대에서 프랑크푸르트 스카이라인과 마인강을 360도 조망하는 유일한 개방 전망대.", category: "전망대", tip: "일몰 시간에 방문하면 야경과 석양을 동시에 즐길 수 있습니다." },
      { name: "박물관 강변", nameEn: "Museumsufer", description: "마인강변을 따라 13개 박물관이 밀집한 독일 최대의 박물관 단지.", category: "박물관", tip: "뮤제움수퍼 티켓(2일)으로 모든 박물관 입장이 가능합니다." },
      { name: "괴테 하우스", nameEn: "Goethe House", description: "대문호 괴테가 태어나고 자란 집으로 당시의 가구와 서재가 보존.", category: "박물관" },
      { name: "아이제르너 슈테크", nameEn: "Eiserner Steg", description: "1869년 건설된 보행자 전용 철교로 마인강 위의 사랑의 자물쇠 다리.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "하이델베르크", nameEn: "Heidelberg", description: "고성과 네카어강의 낭만적인 대학도시.", travelTime: "기차 약 50분", gradient: "from-rose-400 to-purple-700" },
      { name: "라인강 계곡", nameEn: "Rhine Valley", description: "유네스코 세계유산 라인강 유람과 고성 투어.", travelTime: "기차 약 1시간~1.5시간", gradient: "from-emerald-400 to-green-700" },
    ],
    localFood: [
      { name: "아펠바인", description: "프랑크푸르트 전통 사과주, 도자기 주전자(벰벨)에 담겨 나옴.", emoji: "🍎" },
      { name: "그뤼네 조세", description: "7가지 허브를 넣은 프랑크푸르트 전통 초록색 소스, 달걀과 감자에 곁들임.", emoji: "🌿" },
      { name: "한트케제 미트 무지크", description: "양파와 식초 소스를 곁들인 사워 치즈, 아펠바인과 찰떡궁합.", emoji: "🧀" },
    ],
    tips: [
      "프랑크푸르트카드로 대중교통 + 박물관 할인이 가능합니다.",
      "작센하우젠의 아펠바인 선술집 골목은 현지인 분위기를 느끼기 좋습니다.",
      "프랑크푸르트 공항은 유럽 허브로, 입출국 거점으로 최적입니다.",
      "매년 10월 프랑크푸르트 도서전은 세계 최대 규모입니다.",
    ],
  },
  "germany/central/wuerzburg": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "로만틱 가도의 시작점이자 프랑켄 와인의 수도. 유네스코 세계유산 레지덴츠 궁전과 마인강 위의 구 다리, 마리엔베르크 요새가 아름다운 바로크 도시입니다.",
    bestTime: "5~10월 (와인 축제: 5~6월)",
    stayArea: "구시가지 / 중앙역 주변",
    transport: "트램, 버스, 도보",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "레지덴츠 궁전, 대성당, 마르크트 광장이 있는 핵심 관광 지역.", highlights: ["레지덴츠 궁전", "대성당", "마르크트 광장", "노이뮌스터 교회"] },
      { name: "마인강변", nameEn: "Mainufer", description: "알테 마인 다리와 마리엔베르크 요새를 잇는 강변 산책 코스.", highlights: ["알테 마인 다리", "와인 선술집", "마리엔베르크 요새"] },
    ],
    attractions: [
      { name: "레지덴츠 궁전", nameEn: "Würzburg Residence", description: "유네스코 세계유산 바로크 궁전으로 티에폴로의 세계 최대 천장 프레스코화가 압권.", category: "궁전", tip: "가이드 투어(영어)에 참여하면 역사를 깊이 이해할 수 있습니다." },
      { name: "알테 마인 다리", nameEn: "Alte Mainbrücke", description: "성인 동상들이 줄지어 선 마인강 위의 바로크 다리. 다리 위에서 와인을 마시는 것이 전통.", category: "랜드마크", tip: "다리 위 와인 가판대에서 프랑켄 와인 한 잔은 필수!" },
      { name: "마리엔베르크 요새", nameEn: "Marienberg Fortress", description: "마인강 건너편 언덕 위의 중세 요새로 도시 전체 조망 포인트.", category: "요새" },
    ],
    dayTrips: [
      { name: "로텐부르크", nameEn: "Rothenburg ob der Tauber", description: "로만틱 가도의 하이라이트, 완벽한 중세 마을.", travelTime: "기차 약 1시간", gradient: "from-orange-400 to-rose-700" },
      { name: "밤베르크", nameEn: "Bamberg", description: "훈제 맥주로 유명한 UNESCO 세계유산 도시.", travelTime: "기차 약 50분", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "프랑켄 와인", description: "독특한 복스보이텔 병에 담긴 드라이 화이트 와인, 실바너 품종이 대표.", emoji: "🍷" },
      { name: "브라트부어스트", description: "뷔르츠부르크식 구운 소시지, 구시가지 가판대에서 즐기는 간식.", emoji: "🌭" },
    ],
    tips: [
      "프랑크푸르트에서 기차로 약 1시간, 로만틱 가도 여행의 출발점입니다.",
      "알테 마인 다리 위의 와인 가판대는 일몰 시간이 가장 붐빕니다.",
      "레지덴츠 궁전은 내부 사진 촬영이 금지되어 있으니 참고하세요.",
    ],
  },
  "germany/central/weimar": {
    heroGradient: "from-emerald-600 to-teal-900",
    description: "괴테와 실러, 바우하우스의 도시. 독일 문학과 예술, 건축의 정수가 집약된 작지만 깊이 있는 문화도시로 유네스코 세계유산이 곳곳에 있습니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 / 마르크트 광장 주변",
    transport: "도보 (시내 컴팩트), 버스",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "괴테 하우스, 실러 하우스, 바우하우스 박물관이 있는 문화 밀집 지역.", highlights: ["괴테 하우스", "실러 하우스", "마르크트 광장", "독일 국립극장"] },
      { name: "일름 공원", nameEn: "Park an der Ilm", description: "괴테의 정원 별장이 있는 일름강변의 영국식 풍경 정원.", highlights: ["괴테 정원 별장", "로마의 집", "산책로"] },
    ],
    attractions: [
      { name: "괴테 하우스", nameEn: "Goethe House", description: "괴테가 50년간 살았던 바로크 양식의 저택으로 그의 서재와 수집품 전시.", category: "박물관" },
      { name: "바우하우스 박물관", nameEn: "Bauhaus Museum", description: "2019년 개관한 현대적 건물에서 바우하우스 디자인 운동의 역사와 작품을 전시.", category: "박물관", tip: "건축·디자인에 관심이 있다면 반나절은 필요합니다." },
      { name: "독일 국립극장", nameEn: "German National Theatre", description: "괴테와 실러 동상이 앞에 서있는 극장으로 바이마르 헌법이 선포된 역사적 장소.", category: "극장" },
      { name: "부헨발트 기념관", nameEn: "Buchenwald Memorial", description: "나치 강제수용소 기념관으로 역사적 교훈을 전하는 추모의 장소.", category: "기념관", tip: "무료 입장이며 오디오 가이드 대여 가능합니다." },
    ],
    dayTrips: [
      { name: "에어푸르트", nameEn: "Erfurt", description: "튀링엔주의 주도로 크래머 다리와 대성당이 인상적인 중세 도시.", travelTime: "기차 약 15분", gradient: "from-red-400 to-rose-700" },
      { name: "라이프치히", nameEn: "Leipzig", description: "바흐의 도시이자 독일의 뉴 베를린.", travelTime: "기차 약 1시간", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "튀링거 브라트부어스트", description: "튀링엔 전통 구운 소시지, 마조람 허브 향이 특징.", emoji: "🌭" },
      { name: "튀링거 클뢰세", description: "감자 반죽으로 만든 튀링엔식 크뇌델(감자 경단).", emoji: "🥔" },
      { name: "츠비벨쿠헨", description: "양파, 베이컨, 사워크림을 올린 양파 타르트.", emoji: "🧅" },
    ],
    tips: [
      "바이마르카드로 주요 박물관과 대중교통을 커버할 수 있습니다.",
      "라이프치히에서 기차로 1시간, 당일치기 가능합니다.",
      "괴테와 실러의 흔적을 따라가는 도보 투어가 인기 있습니다.",
      "부헨발트 기념관 방문 시 충분한 시간(2~3시간)을 확보하세요.",
    ],
  },
};

export const germanyAttractionDetails: Record<string, AttractionDetail> = {
  // ===== MUNICH (Bavaria) =====
  "germany/bavaria/munich/marienplatz": {
    heroGradient: "from-blue-500 to-blue-800",
    description: "뮌헨의 중심 광장으로 신시청사의 글로켄슈필 시계탑이 매일 정해진 시간에 32개 인형이 춤추며 종을 울립니다. 1158년부터 뮌헨의 중심이었으며, 크리스마스 마켓 시즌에는 화려한 장식으로 가득합니다.",
    history: "1158년 뮌헨의 시장터로 시작된 이래 도시의 심장부 역할을 해왔습니다. 현재의 신시청사(네오고딕 양식)는 1867~1909년에 건설되었으며, 글로켄슈필은 1908년에 설치되었습니다.",
    visitInfo: {
      hours: "광장: 24시간 개방 / 시청사 전망대: 월~금 10:00~19:00 (동절기 ~17:00)",
      admission: "광장 무료 / 시청사 전망대 엘리베이터 €6.50",
      address: "Marienplatz, 80331 München",
      website: "https://www.muenchen.de",
    },
    highlights: [
      "글로켄슈필 시계 공연 (11:00, 12:00, 여름 17:00 추가)",
      "신시청사 전망대에서 뮌헨 시내와 알프스 조망",
      "금색 마리아 기둥(마리엔줄레)",
      "크리스마스 마켓 시즌의 화려한 장식",
    ],
    nearbyAttractions: ["빅투알리엔 시장", "프라우엔 교회", "성 페터 교회 전망대", "레지덴츠 궁전"],
    photoTips: "글로켄슈필 촬영은 광장 동쪽에서 정면으로 잡는 것이 좋습니다. 망원 렌즈가 있으면 인형 디테일을 담을 수 있습니다.",
    tips: [
      "글로켄슈필은 11시 정각에 시작하므로 10~15분 전에 자리를 잡으세요.",
      "바로 옆 성 페터 교회 전망대(€5)에서 마리엔 광장 전체를 내려다볼 수 있습니다.",
      "지하에 S-Bahn/U-Bahn 마리엔 광장역이 있어 접근이 매우 편리합니다.",
      "12월 크리스마스 마켓 시즌이 가장 분위기 있지만 인파도 최고조입니다.",
    ],
  },
  "germany/bavaria/munich/bmw-museum": {
    heroGradient: "from-blue-600 to-slate-900",
    description: "BMW의 100년 역사와 미래 기술을 한자리에서 체험할 수 있는 미래지향적 박물관입니다. 보울 형태의 독특한 건축과 함께 인접한 BMW Welt(무료)에서 최신 차량을 직접 만져볼 수 있습니다.",
    history: "1973년 뮌헨 올림픽을 계기로 개관하였으며, 2008년 대규모 리모델링을 거쳐 현재의 모습이 되었습니다. BMW 본사 '4기통' 빌딩 옆에 위치합니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00 (월요일 휴관)",
      admission: "성인 €10, 학생 €7, 가족 티켓 €24",
      address: "Am Olympiapark 2, 80809 München",
      website: "https://www.bmw-welt.com",
    },
    highlights: [
      "클래식 BMW 차량부터 미래 컨셉카까지 연대기 전시",
      "BMW 아트카 컬렉션",
      "인터랙티브 미래 모빌리티 체험존",
      "BMW Welt 쇼룸(무료)에서 최신 모델 체험",
    ],
    nearbyAttractions: ["올림피아 공원", "올림피아 타워", "BMW Welt", "영국 정원"],
    photoTips: "박물관 내부의 나선형 경사로에서 아래를 내려다보며 찍으면 독특한 구도의 사진을 얻을 수 있습니다.",
    tips: [
      "BMW Welt(무료)를 먼저 방문한 후 박물관으로 이동하면 동선이 효율적입니다.",
      "오디오 가이드가 한국어를 지원하니 꼭 이용하세요.",
      "U3 올림피아첸트룸역에서 도보 5분입니다.",
      "자동차에 관심이 많다면 공장 투어(별도 예약)도 가능합니다.",
    ],
  },
  "germany/bavaria/munich/nymphenburg-palace": {
    heroGradient: "from-amber-400 to-amber-800",
    description: "바이에른 왕가의 여름 궁전으로 베르사유에 비견되는 아름다운 바로크·로코코 정원이 인상적입니다. 본궁과 4개의 별궁, 그리고 200헥타르에 달하는 광대한 정원이 뮌헨 시내에 자리잡고 있습니다.",
    history: "1664년 바이에른 선제후 페르디난트 마리아가 아들(후일 막시밀리안 2세)의 탄생을 기념하여 건축을 시작했습니다. 이후 150년에 걸쳐 확장되어 현재의 웅장한 규모가 되었으며, 루트비히 2세가 이곳에서 태어났습니다.",
    visitInfo: {
      hours: "4~10월 09:00~18:00, 11~3월 10:00~16:00",
      admission: "통합 티켓 €15 (4~10월), €12 (11~3월)",
      address: "Schloss Nymphenburg 1, 80638 München",
      website: "https://www.schloss-nymphenburg.de",
    },
    highlights: [
      "미인 갤러리(Schönheitengalerie) - 루트비히 1세가 수집한 36명의 미인 초상화",
      "아말리엔부르크 별궁의 화려한 로코코 내부",
      "200헥타르 영국식·프랑스식 혼합 정원",
      "마르슈탈 박물관의 왕실 마차 컬렉션",
    ],
    nearbyAttractions: ["식물원", "마르슈탈 박물관", "도자기 박물관"],
    photoTips: "궁전 앞 운하에 반영이 비치는 모습이 대칭 구도로 아름답습니다. 오전에 역광이 적어 촬영에 좋습니다.",
    tips: [
      "트램 17번으로 쉽게 접근할 수 있습니다.",
      "정원은 무료이며 산책만으로도 충분히 가치가 있습니다.",
      "별궁(아말리엔부르크 등)은 본궁보다 오히려 더 아름다우니 꼭 방문하세요.",
      "여름 시즌에는 운하에서 곤돌라 타기가 가능합니다.",
    ],
  },
  "germany/bavaria/munich/english-garden": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "뉴욕 센트럴 파크보다 큰 세계 최대급 도심 공원입니다. 아이스바흐의 서핑, 중국 탑 비어가르텐, 넓은 잔디밭에서 일광욕하는 뮌헨 시민들의 여유로운 일상을 만날 수 있습니다.",
    history: "1789년 카를 테오도어 선제후의 명으로 군사 정원에서 시민 공원으로 전환되었습니다. 미국 출신 벤저민 톰슨(럼포드 백작)이 설계하여 영국 풍경식 정원으로 조성되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (비어가르텐 등 시설별 운영시간 상이)",
      admission: "무료",
      address: "Englischer Garten, 80538 München",
    },
    highlights: [
      "아이스바흐 서핑 - 도심 한복판에서 서핑하는 독특한 광경",
      "중국 탑 비어가르텐(7,000석) - 뮌헨 최대 야외 맥주 정원",
      "자이하우스 비어가르텐 - 호수 옆의 분위기 좋은 맥주 정원",
      "모노프테로스 신전 - 뮌헨 스카이라인 조망 포인트",
    ],
    nearbyAttractions: ["레지덴츠 궁전", "바이에른 국립박물관", "하우스 데어 쿤스트"],
    photoTips: "아이스바흐 서퍼들은 다리 위에서 촬영하면 역동적인 사진을 얻을 수 있습니다. 모노프테로스에서 뮌헨 스카이라인 촬영도 추천합니다.",
    tips: [
      "아이스바흐 서핑은 공원 남쪽 입구(Prinzregentenstraße) 근처에서 볼 수 있습니다.",
      "비어가르텐에는 음식 지참이 가능하며, 음료만 구매하면 됩니다.",
      "자전거 대여가 공원 탐방에 가장 효율적입니다.",
      "여름에는 누드 일광욕 구역이 있으니 놀라지 마세요(독일 문화입니다).",
    ],
  },
  "germany/bavaria/munich/viktualienmarkt": {
    heroGradient: "from-orange-500 to-red-700",
    description: "200년 역사를 자랑하는 뮌헨 최대의 전통 식품 시장입니다. 140개 이상의 상점에서 바이에른 특산 치즈, 소시지, 빵, 과일, 허브 등 최고급 식재료와 먹거리를 판매합니다.",
    history: "1807년 막시밀리안 1세의 칙령으로 마리엔 광장에서 현재 위치로 이전하여 개장했습니다. 이래로 200년 이상 뮌헨 시민의 부엌 역할을 하며 전통을 이어오고 있습니다.",
    visitInfo: {
      hours: "월~금 08:00~20:00, 토 08:00~18:00 (일요일·공휴일 휴무)",
      admission: "무료 (개별 구매)",
      address: "Viktualienmarkt 3, 80331 München",
      website: "https://www.viktualienmarkt-muenchen.de",
    },
    highlights: [
      "중앙 비어가르텐에서 뮌헨 6대 양조장 맥주를 번갈아 맛보기",
      "바이에른 전통 치즈·소시지 시식",
      "계절 과일과 꽃 상점의 다채로운 풍경",
      "마이바움(5월 기둥)과 전통 분수대",
    ],
    nearbyAttractions: ["마리엔 광장", "성 페터 교회", "아삼 교회", "이자르 문"],
    photoTips: "알록달록한 과일·채소 가판대와 마이바움을 배경으로 촬영하면 활기찬 시장 분위기를 담을 수 있습니다.",
    tips: [
      "일요일에는 시장이 닫으니 반드시 평일이나 토요일에 방문하세요.",
      "시장 중앙의 비어가르텐은 음식 지참이 가능합니다(시장에서 사온 음식 OK).",
      "오전 이른 시간이 신선한 재료도 풍부하고 인파도 적습니다.",
      "겨울에는 따뜻한 글뤼바인(멀드 와인) 한 잔이 제격입니다.",
    ],
  },

  // ===== BERLIN (Berlin-East) =====
  "germany/berlin-east/berlin/brandenburg-gate": {
    heroGradient: "from-yellow-600 to-amber-900",
    description: "베를린과 독일 통일의 상징인 18세기 신고전주의 양식의 개선문입니다. 아테네 아크로폴리스의 프로필라이아를 모델로 건설되었으며, 6개의 도리아식 기둥 위에 승리의 여신 빅토리아가 4두 마차를 모는 조각상이 올라서 있습니다.",
    history: "1788~1791년 프로이센 왕 프리드리히 빌헬름 2세의 명으로 카를 고트하르트 랑한스가 건설했습니다. 냉전 시기에는 동서 베를린을 나누는 장벽의 일부였으며, 1989년 장벽 붕괴 후 통일 독일의 상징이 되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 기념물)",
      admission: "무료",
      address: "Pariser Platz, 10117 Berlin",
      website: "https://www.visitberlin.de",
    },
    highlights: [
      "쿼드리가(4두 마차) 청동 조각상 - 나폴레옹이 파리로 가져갔다가 돌아온 역사",
      "파리저 광장의 대사관과 호텔 아들론",
      "야간 조명으로 빛나는 브란덴부르크 문",
      "12월 31일 대규모 새해 카운트다운 행사",
    ],
    nearbyAttractions: ["홀로코스트 기념관", "국회의사당(라이히스탁)", "운터 덴 린덴 거리", "티어가르텐 공원"],
    photoTips: "서쪽(티어가르텐)에서 동쪽을 향해 촬영하면 파리저 광장과 함께 클래식한 구도를 잡을 수 있습니다. 야경이 특히 아름답습니다.",
    tips: [
      "S-Bahn/U-Bahn 브란덴부르거 토어역에서 바로 접근 가능합니다.",
      "주변 홀로코스트 기념관, 국회의사당과 함께 도보로 둘러보세요.",
      "국회의사당 유리 돔(무료)은 온라인 사전 예약이 필요합니다.",
      "야간에 조명이 켜진 브란덴부르크 문이 더 인상적이니 저녁에도 방문하세요.",
    ],
  },
  "germany/berlin-east/berlin/museum-island": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "슈프레강 위의 섬에 5개의 세계적 박물관이 모여있는 유네스코 세계유산입니다. 고대 이집트부터 19세기까지 인류 문명의 보물을 소장하고 있으며, 네페르티티 흉상과 이슈타르 문이 대표 소장품입니다.",
    history: "1824년 프리드리히 빌헬름 3세가 알테스 박물관 건립을 시작으로 약 100년에 걸쳐 5개 박물관이 완성되었습니다. 2차대전으로 크게 파괴되었으나 통일 후 대규모 복원 사업이 진행 중입니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00, 목 10:00~20:00 (월요일 휴관, 박물관마다 다소 상이)",
      admission: "개별 €12~14, 뮤지엄패스(3일) €32",
      address: "Bodestraße 1-3, 10178 Berlin",
      website: "https://www.smb.museum",
    },
    highlights: [
      "네페르티티 흉상 (노이에스 박물관) - 3,300년 전 이집트 왕비의 흉상",
      "이슈타르 문 (페르가몬 박물관) - 바빌론 성문 실물 복원",
      "페르가몬 제단 (복원 중이나 주요 전시는 관람 가능)",
      "카스파 다비드 프리드리히 등 19세기 독일 낭만주의 회화 (알테 나치오날갈레리)",
    ],
    nearbyAttractions: ["베를린 대성당", "DDR 박물관", "TV 타워", "운터 덴 린덴 거리"],
    photoTips: "베를린 대성당을 배경으로 박물관 섬 전경을 촬영하세요. 슈프레강 유람선에서도 멋진 사진을 얻을 수 있습니다.",
    tips: [
      "뮤지엄패스(3일, €32)를 구매하면 5개 박물관 자유 입장이 가능합니다.",
      "모든 박물관을 보려면 최소 이틀이 필요합니다. 시간이 부족하면 노이에스+페르가몬을 우선하세요.",
      "목요일 야간 개관(~20:00)을 활용하면 여유롭게 관람 가능합니다.",
      "페르가몬 박물관은 부분 보수 중이니 사전에 개방 구역을 확인하세요.",
    ],
  },
  "germany/berlin-east/berlin/east-side-gallery": {
    heroGradient: "from-pink-500 to-purple-800",
    description: "베를린 장벽의 남아있는 1.3km 구간에 21개국 118명의 예술가가 그린 세계 최대의 야외 갤러리입니다. '형제의 키스', '테스트 더 베스트' 등 냉전 시대와 자유를 상징하는 벽화가 역사적 감동을 전합니다.",
    history: "1989년 베를린 장벽 붕괴 직후인 1990년, 전 세계 예술가들이 동독 쪽 장벽에 평화와 자유를 주제로 벽화를 그렸습니다. 2009년 대규모 복원이 이루어졌으며, 현재 기념물로 보호되고 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 갤러리)",
      admission: "무료",
      address: "Mühlenstraße 3-100, 10243 Berlin",
      website: "https://www.eastsidegallery-berlin.de",
    },
    highlights: [
      "'형제의 키스' (드미트리 브루벨) - 브레즈네프와 호네커의 키스 장면",
      "'테스트 더 베스트' (비르기트 킨더) - 장벽을 돌파하는 트라반트 자동차",
      "'세상을 비추다' - 일본 작가의 평화 메시지",
      "장벽 원본의 콘크리트 질감과 역사적 흔적",
    ],
    nearbyAttractions: ["오버바움 다리", "RAW 겔렌데", "베를린 장벽 기록센터", "슈프레강 산책로"],
    photoTips: "오전 이른 시간(8시 이전)에 방문하면 인파 없이 벽화 전체를 담을 수 있습니다. '형제의 키스' 앞은 항상 사람이 많으니 인내심이 필요합니다.",
    tips: [
      "S-Bahn 오스트반호프역이나 바르샤우어 거리역에서 접근 가능합니다.",
      "전체 1.3km를 걸으며 감상하는 데 약 30~45분 소요됩니다.",
      "벽화에 낙서하거나 만지지 마세요. 법적으로 보호되는 기념물입니다.",
      "인근 오버바움 다리도 멋진 사진 포인트이니 함께 방문하세요.",
    ],
  },
  "germany/berlin-east/berlin/checkpoint-charlie": {
    heroGradient: "from-gray-600 to-gray-900",
    description: "냉전 시대 동서 베를린을 잇던 유명한 국경 검문소입니다. 1961년 미국과 소련 탱크가 대치했던 긴장의 현장으로, 현재는 장벽 박물관과 함께 냉전 역사를 생생히 전하고 있습니다.",
    history: "1961년 베를린 장벽 설치 후 연합국 군인과 외교관이 동서 베를린을 오가던 세 곳의 검문소 중 하나(알파, 브라보, 찰리)였습니다. 1961년 10월 미소 탱크 대치 사건으로 세계적 주목을 받았습니다.",
    visitInfo: {
      hours: "검문소 야외 전시: 24시간 / 장벽 박물관(Mauermuseum): 매일 09:00~22:00",
      admission: "야외 전시 무료 / 장벽 박물관 성인 €17.50, 학생 €12.50",
      address: "Friedrichstraße 43-45, 10117 Berlin",
      website: "https://www.mauermuseum.de",
    },
    highlights: [
      "복원된 국경 검문소와 경비초소",
      "장벽 박물관의 탈출 시도 기록과 실물 도구 전시",
      "'You are leaving the American sector' 표지판",
      "냉전 시대 동서독 대치의 긴장감을 느끼는 역사 현장",
    ],
    nearbyAttractions: ["유대인 박물관", "젠다르멘 광장", "프리드리히 거리 쇼핑가", "홀로코스트 기념관"],
    photoTips: "검문소 표지판과 미군 초소를 배경으로 촬영하세요. 군복 입은 사진 배우와의 촬영은 유료(€3~5)입니다.",
    tips: [
      "U-Bahn 코흐 거리역(Kochstraße)에서 도보 2분입니다.",
      "장벽 박물관(Mauermuseum)은 내부가 매우 빽빽하니 시간 여유를 두세요.",
      "블랙박스 콜드워(BlackBox Cold War) 야외 전시도 함께 관람하세요.",
      "주변 관광 함정에 주의하세요. 군복 입은 사람과의 사진은 유료입니다.",
    ],
  },
  "germany/berlin-east/berlin/holocaust-memorial": {
    heroGradient: "from-stone-600 to-stone-900",
    description: "유럽에서 학살된 유대인을 추모하는 기념관으로, 2,711개의 콘크리트 석비가 물결치듯 배열되어 있습니다. 피터 아이젠만이 설계한 이 공간은 상실과 혼란, 고독의 감정을 건축으로 표현하고 있습니다.",
    history: "17년간의 논의 끝에 2005년 5월 개관했습니다. 건축가 피터 아이젠만이 설계하였으며, 19,000㎡ 부지에 높이가 제각각인 2,711개의 콘크리트 석비가 격자 패턴으로 배열되어 있습니다.",
    visitInfo: {
      hours: "야외 기념물: 24시간 / 지하 정보센터: 화~일 10:00~20:00 (10~3월 ~19:00), 월요일 휴관",
      admission: "무료",
      address: "Cora-Berliner-Straße 1, 10117 Berlin",
      website: "https://www.stiftung-denkmal.de",
    },
    highlights: [
      "2,711개 콘크리트 석비가 만드는 미로 같은 공간 체험",
      "지하 정보센터의 홀로코스트 희생자 개인 이야기",
      "석비 사이를 걸으며 느끼는 고독과 상실의 감정",
      "베를린 정치 중심부(브란덴부르크 문, 국회의사당) 근처에 위치한 상징성",
    ],
    nearbyAttractions: ["브란덴부르크 문", "티어가르텐 공원", "포츠다머 광장", "국회의사당"],
    photoTips: "석비 사이에서 아래에서 위를 올려다보며 촬영하면 공간의 압도감을 표현할 수 있습니다. 이곳은 추모 공간이므로 경건한 태도로 촬영하세요.",
    tips: [
      "지하 정보센터는 무료이지만 매우 감동적이니 꼭 방문하세요.",
      "석비 사이에서 뛰거나 위에 올라서는 행위는 삼가세요.",
      "S-Bahn 브란덴부르거 토어역이나 포츠다머 광장역에서 도보 접근 가능합니다.",
      "최소 30분 이상 여유를 두고 석비 사이를 천천히 걸어보세요.",
    ],
  },

  // ===== HAMBURG (North) =====
  "germany/north/hamburg/elbphilharmonie": {
    heroGradient: "from-sky-500 to-blue-900",
    description: "파도 모양의 유리 지붕이 올려진 엘베강변의 세계적 콘서트홀입니다. 옛 창고 건물 위에 현대 건축을 얹은 독특한 디자인으로, 무료 전망대 '플라자'에서 함부르크 항구 전경을 감상할 수 있습니다.",
    history: "스위스 건축사무소 헤어초크 & 드 뫼롱이 설계하여 2017년 1월 개관했습니다. 1963년에 지어진 카이스파이허 A 창고 건물 위에 유리 파도 구조물을 올린 것으로, 건설비가 당초 예상의 10배인 약 8억 유로로 논란이 있었지만 현재는 함부르크의 상징이 되었습니다.",
    visitInfo: {
      hours: "플라자(전망대): 매일 10:00~24:00 / 콘서트: 공연 일정에 따라 상이",
      admission: "플라자 무료 (온라인 사전 예약 권장) / 콘서트 €15~200",
      address: "Platz der Deutschen Einheit 4, 20457 Hamburg",
      website: "https://www.elbphilharmonie.de",
    },
    highlights: [
      "길이 82m의 곡선형 에스컬레이터 '튜브'",
      "37m 높이 플라자 전망대에서 항구와 도시 파노라마",
      "대형 홀의 10,000개 음향 패널('하얀 피부') 디자인",
      "야간 조명으로 빛나는 외관",
    ],
    nearbyAttractions: ["슈파이허슈타트", "미니어처 원더랜드", "하펜시티", "국제해양박물관"],
    photoTips: "맞은편 마르코폴로 테라스에서 전체 외관을 촬영하면 물 반영까지 담을 수 있습니다. 플라자에서 내려다보는 항구 사진도 훌륭합니다.",
    tips: [
      "플라자 입장은 무료지만 온라인 사전 예약(elbphilharmonie.de)을 강력 추천합니다.",
      "콘서트 티켓은 수개월 전에 매진되니 일찍 예매하세요.",
      "U-Bahn 바움발(Baumwall)역에서 도보 10분입니다.",
      "건물 외관은 야간 조명이 더 아름다우니 저녁에도 방문하세요.",
    ],
  },
  "germany/north/hamburg/miniatur-wunderland": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "세계 최대의 철도 모형 전시관으로 1,000대 이상의 기차와 정교한 미니어처 도시, 공항이 경이로운 디테일로 재현되어 있습니다. 함부르크에서 가장 인기 있는 관광지로, 연간 100만 명 이상이 방문합니다.",
    history: "쌍둥이 형제 프레데릭과 게릿 브라운이 2001년에 개관했습니다. 꾸준한 확장을 거쳐 현재 1,500㎡ 이상의 전시 면적에 독일, 오스트리아, 이탈리아, 스칸디나비아, 미국 등이 미니어처로 재현되어 있습니다.",
    visitInfo: {
      hours: "매일 09:30~18:00 (금~토 ~21:00, 시즌별 변동 있음)",
      admission: "성인 €20, 학생 €15, 어린이(1m 미만) 무료",
      address: "Kehrwieder 2, Block D, 20457 Hamburg",
      website: "https://www.miniatur-wunderland.de",
    },
    highlights: [
      "크누핑엔 공항의 자동 이착륙 미니어처 비행기",
      "15분마다 바뀌는 낮-밤 조명 효과",
      "100,000개 이상의 미니 피규어와 숨겨진 이스터에그",
      "실시간으로 움직이는 1,000대 이상의 기차",
    ],
    nearbyAttractions: ["슈파이허슈타트", "엘프필하모니", "함부르크 던전", "독일 세관 박물관"],
    photoTips: "미니어처 세계를 눈높이에서 촬영하면 실제 도시처럼 보이는 착시 사진을 얻을 수 있습니다. 야간 모드에서의 조명 사진도 아름답습니다.",
    tips: [
      "반드시 온라인으로 시간대를 예약하세요. 당일 매진이 매우 빈번합니다.",
      "관람 소요 시간은 약 2~3시간입니다.",
      "숨겨진 재미있는 장면(이스터에그)을 찾아보는 것도 큰 재미입니다.",
      "U-Bahn 바움발역에서 도보 5분, 슈파이허슈타트 내에 위치합니다.",
    ],
  },
  "germany/north/hamburg/speicherstadt": {
    heroGradient: "from-red-700 to-red-950",
    description: "유네스코 세계유산에 등재된 세계 최대의 창고 지구입니다. 네오고딕 양식의 붉은 벽돌 건물이 운하를 따라 이어지며, 현재는 박물관, 카페, 사무실 등으로 활용되고 있습니다.",
    history: "1885~1927년에 걸쳐 건설된 항만 자유무역지대의 창고 단지입니다. 커피, 차, 향신료, 카펫 등을 보관하던 곳으로, 2015년 유네스코 세계유산에 등재되었습니다. 현재도 세계 최대의 카펫 저장소가 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외) / 내부 시설은 각 박물관별 상이",
      admission: "야외 산책 무료 / 내부 박물관 개별 입장료",
      address: "Speicherstadt, 20457 Hamburg",
    },
    highlights: [
      "붉은 벽돌 건물과 운하가 어우러진 유네스코 세계유산 경관",
      "야간 조명으로 빛나는 환상적인 운하 풍경",
      "슈파이허슈타트 커피 박물관에서 커피 시음",
      "함부르크 던전과 다이얼로그 인 더 다크 체험",
    ],
    nearbyAttractions: ["미니어처 원더랜드", "엘프필하모니", "하펜시티", "국제해양박물관"],
    photoTips: "포갈렌브뤼케(Poggenmuehlenbrücke) 다리에서 워서슐로스(Wasserschloss) 건물을 촬영하면 슈파이허슈타트의 아이코닉한 사진을 얻을 수 있습니다. 야간 촬영도 강력 추천합니다.",
    tips: [
      "야간에 조명이 켜진 슈파이허슈타트는 낮과 전혀 다른 분위기이니 꼭 저녁에도 방문하세요.",
      "미니어처 원더랜드와 함께 방문하면 반나절 코스가 됩니다.",
      "운하 보트 투어로 건물을 수상에서 감상하는 것도 추천합니다.",
      "U-Bahn 메스베르크(Meßberg)역에서 도보 5분입니다.",
    ],
  },
  "germany/north/hamburg/st-pauli-reeperbahn": {
    heroGradient: "from-purple-600 to-fuchsia-900",
    description: "함부르크의 유흥·문화 거리로 '세계에서 가장 죄 많은 1마일'이라 불립니다. 비틀즈가 데뷔 전 무대에 섰던 전설적인 장소이며, 라이브 음악, 클럽, 뮤지컬 극장이 밤새 활기를 띱니다.",
    history: "17세기부터 선원들의 유흥가로 발전했으며, 1960년대 비틀즈가 인드라 클럽과 스타 클럽에서 활동하며 세계적 명성을 얻었습니다. 현재는 유흥가를 넘어 라이브 음악, 뮤지컬, 문화의 중심지로 변모하고 있습니다.",
    visitInfo: {
      hours: "거리: 24시간 / 클럽·바: 주로 21:00~새벽 (주말은 더 늦게까지)",
      admission: "거리 무료 / 개별 클럽·공연 입장료 상이",
      address: "Reeperbahn, 20359 Hamburg",
    },
    highlights: [
      "비틀즈 광장과 비틀즈 워킹 투어",
      "인드라 클럽 - 비틀즈가 함부르크에서 처음 공연한 장소",
      "그로세 프라이하이트(Große Freiheit) 거리의 라이브 음악 클럽",
      "일요일 새벽 피쉬마르크트의 활기찬 분위기",
    ],
    nearbyAttractions: ["항구 피쉬마르크트", "함부르크 항구", "리케머 리크머스 박물관", "란둥스브뤼켄"],
    photoTips: "네온사인이 켜지는 야간에 레퍼반 거리 사진이 가장 분위기 있습니다. 비틀즈 광장의 실루엣 동상도 좋은 포토 포인트입니다.",
    tips: [
      "비틀즈의 흔적을 따라가는 워킹 투어(영어)를 추천합니다.",
      "일요일 새벽 피쉬마르크트(5:00~9:30)는 토요일 밤 유흥 후 방문하는 것이 함부르크 스타일입니다.",
      "S-Bahn 레퍼반역에서 바로 접근 가능합니다.",
      "주중보다 주말 밤이 더 활기차며, 새벽까지 영업하는 곳이 많습니다.",
    ],
  },

  // ===== COLOGNE (Rhineland-West) =====
  "germany/rhineland-west/cologne/cologne-cathedral": {
    heroGradient: "from-gray-700 to-gray-950",
    description: "632년에 걸쳐 완공된 고딕 건축의 최고 걸작으로 157m 높이의 쌍둥이 첨탑이 쾰른의 스카이라인을 지배합니다. 동방박사 세 왕의 유해를 모신 금관이 가장 귀중한 보물이며, 연간 600만 명이 방문하는 독일 최고 인기 관광지입니다.",
    history: "1248년 착공하여 1880년에야 완공된 세계 최대의 고딕 성당입니다. 중세에는 300년간 공사가 중단되었다가 19세기에 재개되었습니다. 2차대전 폭격에도 기적적으로 살아남았으며, 1996년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "매일 06:00~21:00 (11~4월 ~19:30) / 탑 전망대: 매일 09:00~18:00 (동절기 ~16:00)",
      admission: "대성당 무료 / 탑 전망대 €6, 보물실 €6, 통합 €9",
      address: "Domkloster 4, 50667 Köln",
      website: "https://www.koelner-dom.de",
    },
    highlights: [
      "157m 쌍둥이 첨탑 - 1884~1890년 세계에서 가장 높은 건축물이었음",
      "동방박사 세 왕의 황금 유해함(Dreikönigsschrein)",
      "남쪽 탑 전망대(533계단)에서 라인강과 쾰른 시내 조망",
      "리히터 창(게르하르트 리히터 디자인의 현대적 스테인드글라스)",
    ],
    nearbyAttractions: ["호엔촐레른 다리", "로마-게르만 박물관", "루트비히 미술관", "라인강 산책로"],
    photoTips: "호엔촐레른 다리 건너편에서 대성당과 다리를 함께 담으면 클래식한 쾰른 사진을 얻을 수 있습니다. 야간 조명도 매우 아름답습니다.",
    tips: [
      "쾰른 중앙역 바로 앞에 위치해 접근이 매우 편리합니다.",
      "탑 전망대 533계단은 엘리베이터가 없으니 체력을 고려하세요.",
      "미사 시간에는 관광 관람이 제한되니 시간을 확인하세요.",
      "무료 입장이지만 기부를 권장합니다. 보물실과 탑은 별도 입장료가 있습니다.",
    ],
  },
  "germany/rhineland-west/cologne/hohenzollern-bridge": {
    heroGradient: "from-slate-600 to-slate-900",
    description: "쾰른 대성당 바로 옆 라인강을 건너는 철교로, 수만 개의 사랑의 자물쇠가 걸려 있는 로맨틱한 명소입니다. 보행자 전용 통로에서 대성당과 라인강을 동시에 감상할 수 있으며, 야경이 특히 아름답습니다.",
    history: "1907~1911년에 건설된 철도교로 원래는 4개 아치 구조였으나 2차대전 중 파괴되어 1948년 재건되었습니다. 2000년대부터 연인들이 자물쇠를 걸기 시작하여 현재 수만 개의 사랑의 자물쇠가 다리를 덮고 있습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Hohenzollernbrücke, 50679 Köln",
    },
    highlights: [
      "수만 개의 사랑의 자물쇠가 만드는 독특한 풍경",
      "다리 위에서 바라보는 쾰른 대성당과 라인강 파노라마",
      "매 2분마다 지나가는 기차와의 포토 찬스",
      "야간 조명에 빛나는 대성당과 다리의 환상적 야경",
    ],
    nearbyAttractions: ["쾰른 대성당", "트라이앵글 전망대", "라인강 유람선", "뮤지컬 돔"],
    photoTips: "다리 동쪽 끝(도이츠 쪽)에서 서쪽을 향해 촬영하면 대성당을 배경으로 다리 전체를 담을 수 있습니다. 일몰~야경 시간이 최고의 촬영 타이밍입니다.",
    tips: [
      "쾰른 중앙역에서 도보 3분 거리입니다.",
      "자물쇠를 걸고 싶다면 미리 자물쇠를 준비하세요(근처 기념품 가게에서도 구매 가능).",
      "다리 건너편(도이츠) 라인강변에서 바라보는 쾰른 스카이라인이 최고의 전망입니다.",
      "KölnTriangle 전망대(도이츠 쪽)와 함께 방문하면 좋습니다.",
    ],
  },
  "germany/rhineland-west/cologne/chocolate-museum": {
    heroGradient: "from-amber-600 to-amber-900",
    description: "라인강 위에 떠 있는 듯한 유리 건물에서 초콜릿의 역사와 제조 과정을 체험하는 인기 박물관입니다. 3m 높이의 초콜릿 분수에서 따뜻한 초콜릿을 시식할 수 있으며, 카카오 농장부터 완제품까지 전 과정을 보여줍니다.",
    history: "1993년 린트(Lindt) 초콜릿의 후원으로 개관했습니다. 라인강변의 옛 세관 항구에 위치한 유리 건물로, 연간 65만 명이 방문하는 쾰른의 인기 관광지입니다.",
    visitInfo: {
      hours: "화~금 10:00~18:00, 토·일·공휴일 11:00~19:00 (월요일 휴관)",
      admission: "성인 €14.50, 학생 €10, 가족 티켓 €39",
      address: "Am Schokoladenmuseum 1a, 50678 Köln",
      website: "https://www.schokoladenmuseum.de",
    },
    highlights: [
      "3m 높이 초콜릿 분수에서 린트 초콜릿 시식",
      "열대 온실의 카카오 나무 관찰",
      "실제 초콜릿 생산 라인 견학",
      "나만의 초콜릿 바 만들기 체험(별도 예약)",
    ],
    nearbyAttractions: ["라인강 유람선 선착장", "말라코프 타워", "쾰른 대성당", "이마호프 스톨베르크 박물관"],
    photoTips: "초콜릿 분수 앞에서의 시식 장면이 인기 포토 포인트입니다. 라인강변 테라스에서 대성당을 배경으로 한 사진도 추천합니다.",
    tips: [
      "온라인 사전 예약 시 약간의 할인이 있습니다.",
      "초콜릿 만들기 워크숍은 인기가 높으니 미리 예약하세요.",
      "박물관 숍에서 특별 에디션 초콜릿을 기념품으로 구매할 수 있습니다.",
      "라인강변 산책과 함께 방문하면 좋은 반나절 코스입니다.",
    ],
  },

  // ===== FRANKFURT (Central) =====
  "germany/central/frankfurt/roemer": {
    heroGradient: "from-amber-600 to-red-800",
    description: "프랑크푸르트의 역사적 심장부인 뢰머 광장에 자리한 600년 역사의 구시청사입니다. 특징적인 세 개의 계단 모양 파사드가 상징적이며, 신성로마제국 황제 대관식 연회가 열렸던 카이저잘이 내부에 있습니다.",
    history: "1405년부터 프랑크푸르트 시청으로 사용되어 온 독일에서 가장 중요한 시청사 중 하나입니다. 1562~1792년 사이 신성로마제국 황제 10명의 대관식 연회가 이곳 카이저잘에서 열렸습니다. 2차대전으로 파괴된 후 복원되었습니다.",
    visitInfo: {
      hours: "카이저잘: 매일 10:00~13:00, 14:00~17:00 (행사 시 폐쇄)",
      admission: "카이저잘 €2",
      address: "Römerberg 27, 60311 Frankfurt am Main",
      website: "https://www.frankfurt-tourismus.de",
    },
    highlights: [
      "세 개의 계단 모양 파사드(독일에서 가장 유명한 시청 외관)",
      "카이저잘의 52명 역대 황제 초상화",
      "뢰머 광장의 정의의 여신 분수(유스티치아 분수)",
      "새롭게 복원된 노이에 알트슈타트(신 구시가지) 건물들",
    ],
    nearbyAttractions: ["프랑크푸르트 대성당", "노이에 알트슈타트", "아이제르너 슈테크 다리", "괴테 하우스"],
    photoTips: "뢰머 광장 동쪽의 오스트차일레(Ostzeile) 목조 건물들을 배경으로 시청사를 촬영하면 전형적인 프랑크푸르트 사진이 됩니다.",
    tips: [
      "U-Bahn 뢰머(Römer)역에서 바로 접근 가능합니다.",
      "크리스마스 마켓 시즌(11~12월)에는 광장 전체가 축제 분위기입니다.",
      "바로 옆 노이에 알트슈타트(2018년 복원)도 함께 둘러보세요.",
      "카이저잘은 행사로 폐쇄되는 경우가 있으니 사전 확인이 좋습니다.",
    ],
  },
  "germany/central/frankfurt/main-tower": {
    heroGradient: "from-slate-600 to-slate-900",
    description: "프랑크푸르트 스카이라인 한복판에서 200m 높이의 야외 전망대를 개방하는 유일한 고층 빌딩입니다. 금융 중심지의 마천루와 마인강, 타우누스 산맥까지 360도 파노라마를 감상할 수 있습니다.",
    history: "2000년에 완공된 56층, 200m 높이의 복합 오피스 빌딩입니다. 프랑크푸르트 금융지구의 중심에 위치하며, 독일에서 대중에게 개방된 전망대 중 가장 높은 곳 중 하나입니다.",
    visitInfo: {
      hours: "일~목 10:00~21:00, 금~토 10:00~23:00 (동절기 단축 운영, 악천후 시 폐쇄)",
      admission: "성인 €9, 학생 €6",
      address: "Neue Mainzer Str. 52-58, 60311 Frankfurt am Main",
      website: "https://www.maintower.de",
    },
    highlights: [
      "200m 높이 야외 전망대에서 360도 파노라마",
      "마인강과 프랑크푸르트 금융지구 마천루 조망",
      "일몰 시간의 황금빛 스카이라인",
      "맑은 날 타우누스 산맥까지 시야가 확장",
    ],
    nearbyAttractions: ["뢰머 광장", "오페라 하우스", "프레스가세", "자일 쇼핑거리"],
    photoTips: "일몰 시간에 방문하면 금융지구의 유리 빌딩에 반사된 석양과 야경을 동시에 촬영할 수 있습니다. 삼각대는 반입 불가합니다.",
    tips: [
      "악천후(강풍, 뇌우)에는 전망대가 폐쇄되니 날씨를 확인하세요.",
      "금~토요일 야간 개장(~23:00)으로 야경을 즐기기 좋습니다.",
      "S-Bahn 타우누스안라게역 또는 U-Bahn 빌리 브란트 광장역에서 도보 5분입니다.",
      "엘리베이터가 초고속이라 45초 만에 꼭대기에 도착합니다.",
    ],
  },
  "germany/central/frankfurt/museumsufer": {
    heroGradient: "from-teal-600 to-blue-800",
    description: "마인강 남쪽 강변을 따라 13개 박물관이 밀집한 독일 최대의 박물관 단지입니다. 영화 박물관, 건축 박물관, 슈테델 미술관 등 다양한 장르의 세계적 박물관을 한 곳에서 만날 수 있습니다.",
    history: "1980년대 프랑크푸르트 시가 마인강변의 옛 빌라들을 박물관으로 전환하는 정책을 시행하면서 형성되었습니다. 매년 8월 마지막 주말에 '뮤제움수퍼페스트(박물관 강변 축제)'가 열려 300만 명이 방문합니다.",
    visitInfo: {
      hours: "박물관마다 상이, 대부분 화~일 10:00~18:00 (수요일 ~20:00 연장)",
      admission: "개별 €7~16 / 뮤제움수퍼 티켓(2일) €21로 전 박물관 입장",
      address: "Schaumainkai, 60594 Frankfurt am Main",
      website: "https://www.museumsufer.de",
    },
    highlights: [
      "슈테델 미술관 - 렘브란트, 모네, 피카소 등 700년 유럽 미술 소장",
      "독일 영화 박물관 - 영화 역사와 특수효과 체험",
      "독일 건축 박물관 - 건축 역사와 현대 건축 기획전",
      "응용미술 박물관(MAK) - 리처드 마이어 설계 건물 자체가 작품",
    ],
    nearbyAttractions: ["아이제르너 슈테크 다리", "작센하우젠 아펠바인 지구", "뢰머 광장", "마인강변 산책로"],
    photoTips: "마인강 북쪽(아이제르너 슈테크 다리)에서 남쪽 박물관 강변 전체를 촬영하면 프랑크푸르트의 문화적 면모를 담을 수 있습니다.",
    tips: [
      "뮤제움수퍼 티켓(2일, €21)이 개별 입장보다 훨씬 경제적입니다.",
      "수요일 연장 개관을 활용하면 여유롭게 관람 가능합니다.",
      "슈테델 미술관은 최소 2시간 이상 필요합니다.",
      "8월 말 뮤제움수퍼페스트 기간에는 야외 공연과 불꽃놀이도 열립니다.",
    ],
  },

  // ===== HEIDELBERG (Southwest) =====
  "germany/southwest/heidelberg/heidelberg-castle": {
    heroGradient: "from-rose-600 to-purple-900",
    description: "네카어강 위 80m 언덕에 자리한 독일에서 가장 유명한 고성 유적입니다. 르네상스 건축의 정수를 보여주는 오토하인리히 궁전과 세계에서 가장 큰 와인통(22만 리터)이 있으며, 독일 낭만주의의 상징입니다.",
    history: "13세기에 처음 건설되어 팔츠 선제후의 거성으로 사용되었습니다. 17세기 30년 전쟁과 팔츠 계승전쟁으로 파괴되었으나, 폐허 그 자체가 낭만주의 예술가들에게 영감을 주어 독일 낭만주의의 상징이 되었습니다.",
    visitInfo: {
      hours: "매일 08:00~18:00 (마지막 입장 17:30)",
      admission: "성+푸니쿨라 왕복 €9, 성 내부 가이드 투어 추가 €6",
      address: "Schlosshof 1, 69117 Heidelberg",
      website: "https://www.schloss-heidelberg.de",
    },
    highlights: [
      "오토하인리히 궁전 - 독일 르네상스 건축의 최고 걸작",
      "대형 와인통(Großes Fass) - 22만 리터 용량의 세계 최대급",
      "독일 약학 박물관 - 성 내부에 위치한 약학 역사 전시",
      "성 테라스에서 네카어강과 하이델베르크 구시가지 파노라마",
    ],
    nearbyAttractions: ["하이델베르크 구시가지", "구 다리", "하우프트 거리", "성령 교회"],
    photoTips: "철학자의 길에서 성 전체를 담을 수 있으며, 구 다리에서 성을 올려다보며 촬영하면 클래식한 하이델베르크 사진을 얻을 수 있습니다.",
    tips: [
      "푸니쿨라(Bergbahn)로 편하게 올라가거나 도보(약 15분)로 오를 수 있습니다.",
      "하이델베르크카드로 성 입장, 푸니쿨라, 대중교통이 모두 포함됩니다.",
      "야간에 조명이 켜진 성도 아름다우니 구 다리에서 감상하세요.",
      "가이드 투어(영어)에 참여하면 역사를 더 깊이 이해할 수 있습니다.",
    ],
  },
  "germany/southwest/heidelberg/philosophers-walk": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "네카어강 건너편 하일리겐베르크 언덕의 산책로로, 괴테를 비롯한 철학자와 시인들이 사색하며 걸었던 곳입니다. 하이델베르크 성과 구시가지, 네카어강을 한눈에 담을 수 있는 최고의 전망 포인트입니다.",
    history: "18~19세기 하이델베르크 대학의 교수들과 철학자들이 산책하며 사색하던 길입니다. 괴테, 아이헨도르프, 횔덜린 등 독일 낭만주의 문인들이 이 길을 거닐며 영감을 받았다고 전해집니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 산책로)",
      admission: "무료",
      address: "Philosophenweg, 69120 Heidelberg",
    },
    highlights: [
      "하이델베르크 성과 구시가지를 한눈에 담는 파노라마 전망",
      "일몰 시간 네카어강에 비치는 황금빛 성의 풍경",
      "산책로 주변의 지중해풍 식물원과 벤치",
      "하일리겐베르크 정상의 비스마르크 타워와 고대 켈트 유적",
    ],
    nearbyAttractions: ["구 다리", "하이델베르크 성", "노이엔하임 지구", "하일리겐베르크"],
    photoTips: "산책로 중간의 철학자 정원(Philosophengärtchen) 벤치 근처가 가장 유명한 촬영 포인트입니다. 일몰 시간에 방문하면 성이 황금빛으로 물드는 장관을 담을 수 있습니다.",
    tips: [
      "구 다리를 건너 노이엔하임 쪽에서 슐랑겐베크(Schlangenweg)로 올라가면 됩니다.",
      "오르막이 꽤 가파르니 편한 신발을 신으세요(약 20분 소요).",
      "일몰 1시간 전에 출발하면 산책과 일몰 감상을 동시에 즐길 수 있습니다.",
      "정상의 비스마르크 타워까지 올라가면 더 넓은 전망을 볼 수 있습니다.",
    ],
  },

  // ===== DRESDEN (Berlin-East) =====
  "germany/berlin-east/dresden/frauenkirche": {
    heroGradient: "from-amber-500 to-amber-800",
    description: "2차대전 연합군 폭격으로 폐허가 된 후 시민 모금으로 2005년 복원된 바로크 건축의 걸작입니다. 복원 과정에서 원래의 검은 돌과 새 돌이 모자이크처럼 어우러져, 파괴와 화해의 역사를 건축으로 보여줍니다.",
    history: "1726~1743년에 건설된 프로테스탄트 교회로, 1945년 2월 드레스덴 대공습으로 완전히 파괴되었습니다. 동독 시절 폐허 그대로 전쟁 기념물로 보존되다가, 통일 후 시민 모금과 국제 후원으로 2005년 복원·재개관되었습니다.",
    visitInfo: {
      hours: "월~금 10:00~12:00, 13:00~18:00 (미사·행사 시 변동) / 돔 전망대: 3~10월 10:00~18:00, 11~2월 10:00~16:00",
      admission: "교회 내부 무료 (기부 권장) / 돔 전망대 €8",
      address: "Neumarkt, 01067 Dresden",
      website: "https://www.frauenkirche-dresden.de",
    },
    highlights: [
      "원래의 검은 돌과 새 돌이 어우러진 외벽의 '화해의 모자이크'",
      "67m 높이 돔 전망대에서 드레스덴 시내와 엘베강 조망",
      "교회 내부의 바로크 양식 제단과 오르간",
      "노이마르크트 광장의 복원된 바로크 건물군",
    ],
    nearbyAttractions: ["츠빙거 궁전", "젬퍼 오페라", "브뤼흘의 테라스", "레지덴츠 궁전"],
    photoTips: "노이마르크트 광장에서 교회 전체를 담을 수 있으며, 브뤼흘의 테라스에서 엘베강과 함께 촬영하면 드레스덴의 바로크 스카이라인을 담을 수 있습니다.",
    tips: [
      "무료 입장이지만 기부(€5 정도)를 권장합니다.",
      "돔 전망대는 좁은 계단이므로 편한 신발이 좋습니다.",
      "정오 오르간 콘서트(화~토, 무료)가 특별한 경험입니다.",
      "외벽의 검은 돌(원래 돌)과 밝은 돌(새 돌)의 대비를 자세히 살펴보세요.",
    ],
  },
  "germany/berlin-east/dresden/zwinger-palace": {
    heroGradient: "from-amber-600 to-orange-800",
    description: "드레스덴 바로크 건축의 꽃으로, 아우구스트 강왕이 건설한 화려한 궁전 단지입니다. 내부의 고전거장 갤러리에는 라파엘로의 '시스틴 마돈나'를 비롯한 르네상스·바로크 걸작이 소장되어 있습니다.",
    history: "1709~1728년 작센 선제후 아우구스트 강왕의 명으로 건축가 다니엘 뵈팔만이 설계했습니다. 원래 오렌지 온실과 축제 공간으로 사용되었으며, 19세기 젬퍼 갤러리가 추가되어 현재의 모습이 되었습니다.",
    visitInfo: {
      hours: "정원: 매일 06:00~22:00 / 갤러리: 화~일 10:00~18:00 (월요일 휴관)",
      admission: "정원 무료 / 고전거장 갤러리 €14, 통합 티켓 €21",
      address: "Theaterplatz 1, 01067 Dresden",
      website: "https://www.der-dresdner-zwinger.de",
    },
    highlights: [
      "고전거장 갤러리(Gemäldegalerie Alte Meister) - 라파엘로의 시스틴 마돈나",
      "크로넨 문(왕관 문)의 황금 장식",
      "수학·물리학 살롱의 역사적 과학 기구 컬렉션",
      "도자기 컬렉션 - 아우구스트 강왕의 마이센 도자기",
    ],
    nearbyAttractions: ["젬퍼 오페라", "프라우엔 교회", "레지덴츠 궁전", "브뤼흘의 테라스"],
    photoTips: "크로넨 문을 정면에서 촬영하면 츠빙거의 상징적 이미지를 얻을 수 있습니다. 중정의 분수와 건물 대칭을 활용한 사진도 아름답습니다.",
    tips: [
      "정원은 무료이며 이른 아침 산책만으로도 바로크 건축을 충분히 감상할 수 있습니다.",
      "고전거장 갤러리는 최소 2시간 이상 여유를 두세요.",
      "월요일 휴관에 주의하세요.",
      "젬퍼 오페라와 함께 방문하면 드레스덴 바로크 투어가 완성됩니다.",
    ],
  },

  // ===== NUREMBERG (Bavaria) =====
  "germany/bavaria/nuremberg/kaiserburg": {
    heroGradient: "from-amber-600 to-red-800",
    description: "뉘른베르크 구시가지 위 언덕에 우뚝 솟은 황제의 성으로, 1000년간 신성로마제국의 중요한 거성이었습니다. 성탑에서 내려다보는 붉은 지붕의 구시가지 파노라마가 장관이며, 독일에서 가장 중요한 중세 성 중 하나입니다.",
    history: "11세기에 건설이 시작되어 신성로마제국 황제들이 정기적으로 머물렀던 제국의 성입니다. 1050~1571년 사이 모든 신성로마제국 황제가 이 성에서 시간을 보냈으며, 제국의 보물이 보관되기도 했습니다.",
    visitInfo: {
      hours: "4~9월 09:00~18:00, 10~3월 10:00~16:00",
      admission: "성 전체(팔라스+깊은 우물+진넬 탑) €7, 학생 €6",
      address: "Auf der Burg 13, 90403 Nürnberg",
      website: "https://www.kaiserburg-nuernberg.de",
    },
    highlights: [
      "진넬 탑(Sinwellturm) 전망대에서 뉘른베르크 구시가지 360도 조망",
      "깊은 우물(Tiefer Brunnen) - 깊이 50m의 중세 우물, 촛불 데모 관람",
      "팔라스(황제 거처) 내부의 고딕 기사의 방과 이중 예배당",
      "카이저부르크 정원에서 도시 북쪽 전망",
    ],
    nearbyAttractions: ["뒤러의 집", "성 제발트 교회", "하우프트마르크트", "게르만 국립박물관"],
    photoTips: "성 아래 티어게르트너토어 광장에서 올려다보며 촬영하면 성의 위용을 담을 수 있습니다. 성탑 전망대에서 붉은 지붕의 파노라마도 훌륭합니다.",
    tips: [
      "구시가지에서 도보로 올라갈 수 있으며 약 10~15분 소요됩니다.",
      "깊은 우물 가이드 투어(약 10분)는 촛불로 우물 깊이를 보여주는 인상적인 체험입니다.",
      "성 관람 후 성벽 산책로를 따라 내려오면 구시가지 전경을 즐길 수 있습니다.",
      "오디오 가이드가 역사를 이해하는 데 큰 도움이 됩니다.",
    ],
  },
  "germany/bavaria/nuremberg/nuremberg-christmas-market": {
    heroGradient: "from-red-600 to-red-900",
    description: "1628년부터 이어진 유럽에서 가장 유명한 크리스마스 마켓입니다. 하우프트마르크트 광장을 가득 채운 180개 이상의 나무 부스에서 전통 공예품, 글뤼바인, 뉘른베르크 소시지, 레브쿠헨을 즐길 수 있습니다.",
    history: "최초의 기록은 1628년이며, 매년 '크리스트킨트(아기 예수)'로 분한 소녀가 개막을 선언하는 전통이 이어지고 있습니다. 크리스마스 이브까지 약 4주간 열리며, 연간 200만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "11월 마지막 금요일~12월 24일, 매일 10:00~21:00 (12/24 10:00~14:00)",
      admission: "무료 (개별 구매)",
      address: "Hauptmarkt, 90403 Nürnberg",
      website: "https://www.christkindlesmarkt.de",
    },
    highlights: [
      "크리스트킨트 개막 선언 행사",
      "전통 골드와 레드 장식의 나무 부스들",
      "뉘른베르크 소시지 (3개 세트 im Weckla)",
      "글뤼바인(따뜻한 와인)과 레브쿠헨(진저브레드)",
      "어린이 크리스마스 마켓(한스 작스 광장)",
    ],
    nearbyAttractions: ["카이저부르크", "성모 교회", "아름다운 분수(쉐너 브루넨)", "성 제발트 교회"],
    photoTips: "성모 교회 앞 계단에서 광장 전체를 내려다보며 촬영하면 마켓의 규모를 담을 수 있습니다. 야간 조명이 켜진 후가 가장 분위기 있습니다.",
    tips: [
      "주말과 저녁 시간은 매우 혼잡하니 평일 오전을 추천합니다.",
      "뉘른베르크 글뤼바인 머그컵은 보증금제(€4)로, 기념품으로 가져갈 수 있습니다.",
      "프라우엔 교회의 매시 정각 종소리와 함께하는 마켓 분위기가 특별합니다.",
      "12월 초~중순이 가장 분위기 있으면서도 인파가 적당합니다.",
    ],
  },

  // ===== STUTTGART (Southwest) =====
  "germany/southwest/stuttgart/mercedes-benz-museum": {
    heroGradient: "from-gray-600 to-gray-900",
    description: "자동차 역사 130년을 9개 층에 걸쳐 전시하는 세계적인 자동차 박물관입니다. DNA 이중나선 구조를 모방한 독특한 건축 안에 160대 이상의 차량과 1,500점의 전시품이 자동차의 과거-현재-미래를 보여줍니다.",
    history: "2006년 UN Studio(벤 판 베르켈)가 설계한 현재 건물로 개관했습니다. 세계 최초의 자동차(1886년 벤츠 페이턴트 모터바겐)부터 최신 F1 머신까지, 메르세데스-벤츠의 전체 역사가 담겨 있습니다.",
    visitInfo: {
      hours: "화~일 09:00~18:00 (월요일 휴관)",
      admission: "성인 €16, 학생·시니어 €8, 17세 이하 무료",
      address: "Mercedesstraße 100, 70372 Stuttgart",
      website: "https://www.mercedes-benz.com/museum",
    },
    highlights: [
      "세계 최초의 자동차 - 1886년 벤츠 페이턴트 모터바겐",
      "300SL 걸윙 - 세계에서 가장 아름다운 자동차 중 하나",
      "은빛 화살(Silver Arrow) F1 레이싱카 컬렉션",
      "DNA 이중나선 구조의 혁신적 건축 동선",
    ],
    nearbyAttractions: ["메르세데스-벤츠 아레나", "빌헬마 동물원", "바트 칸슈타트 온천", "네카어 공원"],
    photoTips: "건물 외관의 미래지향적 곡선은 다양한 각도에서 촬영해 보세요. 내부의 나선형 동선에서 차량을 배경으로 한 사진도 훌륭합니다.",
    tips: [
      "오디오 가이드가 한국어를 지원하며 무료입니다.",
      "위에서 아래로 내려가는 동선이므로 9층부터 시작하세요.",
      "S-Bahn 네카어파크역에서 도보 8분입니다.",
      "관람 소요 약 2~3시간, 자동차 매니아라면 반나절을 잡으세요.",
    ],
  },
  "germany/southwest/stuttgart/porsche-museum": {
    heroGradient: "from-slate-600 to-slate-900",
    description: "80대 이상의 포르쉐 차량이 하늘에 떠 있는 듯한 미래지향적 건축의 박물관입니다. 포르쉐의 역사부터 레이싱 전설, 그리고 미래 비전까지 스포츠카의 진수를 한자리에서 만날 수 있습니다.",
    history: "2009년 빈 건축사무소 델루간 마이슬이 설계한 건물로 개관했습니다. 지면에서 들어올려진 듯한 독특한 외관이 특징이며, 페르디난트 포르쉐가 1948년 만든 첫 포르쉐 356부터 최신 모델까지 전시합니다.",
    visitInfo: {
      hours: "화~일 09:00~18:00 (월요일 휴관)",
      admission: "성인 €10, 학생 €5, 14세 이하 무료",
      address: "Porscheplatz 1, 70435 Stuttgart-Zuffenhausen",
      website: "https://www.porsche.com/museum",
    },
    highlights: [
      "포르쉐 356 No.1 - 최초의 포르쉐 스포츠카",
      "포르쉐 911 역대 모델 라인업",
      "르망 24시 우승차 포르쉐 917 등 레이싱카 컬렉션",
      "공중에 떠 있는 듯한 차량 전시 방식",
    ],
    nearbyAttractions: ["포르쉐 본사", "쿤스트뮤제움 슈투트가르트", "궁전 광장", "메르세데스-벤츠 박물관"],
    photoTips: "건물 외관의 캔틸레버 구조를 아래에서 올려다보며 촬영하면 건축의 역동성을 담을 수 있습니다. 내부의 흰색 공간과 차량 대비도 포토제닉합니다.",
    tips: [
      "메르세데스-벤츠 박물관과 같은 날 방문하면 효율적입니다(S-Bahn으로 약 20분).",
      "S-Bahn 노이뷔르커/포르쉐(Neuwirtshaus/Porscheplatz)역에서 도보 5분입니다.",
      "뮤지엄 숍에서 포르쉐 미니카 등 기념품 구매가 가능합니다.",
      "레스토랑 크리스토포루스에서 고급 식사를 즐길 수도 있습니다.",
    ],
  },
};
