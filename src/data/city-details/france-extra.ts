import type { CityDetail, AttractionDetail } from "../city-details";

export const franceCityDetails2: Record<string, CityDetail> = {
  // ===== PROVENCE & CÔTE D'AZUR =====
  "france/provence-cote-dazur/cannes": {
    heroGradient: "from-yellow-400 to-amber-600",
    description: "칸 영화제의 도시 칸은 크루아제트 대로를 중심으로 펼쳐지는 화려한 해안 도시입니다. 매년 5월 세계 영화인이 모이는 팔레 데 페스티발, 고급 부티크와 해변 레스토랑이 즐비한 크루아제트, 그리고 배로 20분이면 닿는 레랭 제도의 자연까지 럭셔리와 여유가 공존합니다.",
    bestTime: "5~10월 (5월 칸 영화제 / 여름 해변 시즌)",
    stayArea: "크루아제트 대로 주변 / 르 쉬케 (Le Suquet) 구시가지",
    transport: "버스, 도보 (시내 컴팩트) / 니스에서 TER 기차 약 30분",
    districts: [
      { name: "크루아제트", nameEn: "La Croisette", description: "칸의 상징인 2km 해안 산책로. 고급 호텔, 명품 부티크, 프라이빗 해변이 줄지어 있습니다.", highlights: ["팔레 데 페스티발", "칼튼 호텔", "마르티네즈 호텔", "해변 레스토랑"] },
      { name: "르 쉬케", nameEn: "Le Suquet", description: "칸의 구시가지로 언덕 꼭대기에서 구항구와 크루아제트의 파노라마를 감상할 수 있습니다.", highlights: ["에스페랑스 성모 성당", "카스트르 박물관", "좁은 골목 산책", "구항구 전망"] },
      { name: "구항구", nameEn: "Vieux Port", description: "요트와 어선이 정박한 활기찬 항구로 레랭 제도행 페리가 출발합니다.", highlights: ["포르빌 시장", "레랭 제도 페리", "해산물 레스토랑"] },
    ],
    attractions: [
      { name: "크루아제트 대로", nameEn: "La Croisette", description: "칸의 대표적인 해안 산책로로 야자수와 지중해가 어우러진 2km 거리. 럭셔리 호텔과 해변 클럽이 즐비합니다.", category: "산책로", tip: "이른 아침이나 석양 무렵 산책이 가장 운치 있으며, 크루아제트 동쪽 끝 팜 비치까지 걸어보세요." },
      { name: "팔레 데 페스티발", nameEn: "Palais des Festivals", description: "칸 영화제가 열리는 상징적인 건물. 입구에는 스타들의 손도장이 새겨진 명예의 광장이 있습니다.", category: "랜드마크", tip: "영화제 기간이 아니더라도 건물 앞 레드 카펫 계단에서 기념사진을 찍을 수 있습니다." },
      { name: "레랭 제도", nameEn: "Îles de Lérins", description: "칸 앞바다의 두 섬으로, 생트마르그리트 섬에는 철가면의 감옥이, 생토노라 섬에는 5세기 수도원이 있습니다.", category: "섬", tip: "구항구에서 페리로 15분. 생트마르그리트 섬의 유칼립투스 숲 트레일을 걸어보세요." },
      { name: "르 쉬케 구시가지", nameEn: "Le Suquet Old Town", description: "칸에서 가장 오래된 지구로 좁은 계단길을 올라가면 구항구와 크루아제트를 내려다보는 전망이 펼쳐집니다.", category: "구시가지" },
      { name: "포르빌 시장", nameEn: "Marché Forville", description: "현지인과 셰프가 찾는 칸 최대의 실내 시장. 신선한 해산물, 프로방스 올리브, 치즈가 가득합니다.", category: "시장", tip: "화~일요일 오전 7시부터 오후 1시까지 운영. 월요일은 벼룩시장이 열립니다." },
    ],
    dayTrips: [
      { name: "니스", nameEn: "Nice", description: "코트다쥐르의 중심 도시로 프롬나드 데 장글레와 구시가지가 매력적.", travelTime: "기차 약 30분", gradient: "from-cyan-400 to-blue-600" },
      { name: "앙티브", nameEn: "Antibes", description: "피카소 미술관과 중세 성벽이 있는 해안 도시.", travelTime: "기차 약 10분", gradient: "from-teal-400 to-emerald-600" },
    ],
    localFood: [
      { name: "소카", description: "병아리콩 가루를 얇게 펴서 구운 코트다쥐르 전통 팬케이크. 포르빌 시장 근처에서 맛볼 수 있습니다.", emoji: "🥞" },
      { name: "부야베스", description: "지중해 생선과 사프란으로 끓인 남프랑스 전통 해물 스튜.", emoji: "🍲" },
      { name: "팡 바냐", description: "참치, 안초비, 올리브, 토마토를 넣은 니스풍 샌드위치.", emoji: "🥪" },
    ],
    tips: [
      "5월 칸 영화제 기간에는 숙소 가격이 3~5배 이상 오르므로 최소 6개월 전 예약이 필수입니다.",
      "크루아제트의 프라이빗 해변은 유료(선베드 €20~50)이지만, 공공 해변도 곳곳에 있습니다.",
      "레랭 제도 방문 시 물과 간식을 챙기세요. 섬에는 상점이 거의 없습니다.",
      "구항구에서 출발하는 석양 보트 투어로 바다에서 칸의 스카이라인을 감상해보세요.",
    ],
  },
  "france/provence-cote-dazur/arles": {
    heroGradient: "from-orange-400 to-yellow-600",
    description: "고흐가 가장 왕성하게 작품 활동을 했던 도시 아를은 로마 시대 원형 경기장과 프로방스의 따뜻한 빛이 공존하는 곳입니다. 고흐는 이곳에서 '별이 빛나는 밤의 카페 테라스', '해바라기' 등 200여 점의 걸작을 남겼으며, 매년 여름 아를 사진 축제(Les Rencontres de la Photographie)가 열려 세계 사진 예술의 중심지로도 유명합니다.",
    bestTime: "4~10월 (7월 아를 사진 축제 / 6~7월 라벤더 시즌)",
    stayArea: "구시가지 내 (원형 경기장 주변)",
    transport: "도보 (구시가지 컴팩트) / 아비뇽에서 기차 약 20분",
    districts: [
      { name: "원형 경기장 지구", nameEn: "Amphitheatre Quarter", description: "로마 시대 원형 경기장을 중심으로 한 아를의 핵심 관광 지구.", highlights: ["원형 경기장", "고대 극장", "생트로핌 성당", "콩스탕탱 욕장"] },
      { name: "포럼 광장", nameEn: "Place du Forum", description: "고흐의 '밤의 카페 테라스'를 그린 장소로 카페와 레스토랑이 밀집한 활기찬 광장.", highlights: ["카페 반 고흐", "포럼 광장 테라스", "고흐 산책로"] },
      { name: "론 강변", nameEn: "Rhône Riverside", description: "고흐가 '론 강의 별이 빛나는 밤'을 그린 강변 산책로.", highlights: ["론 강변 야경", "고흐 그림 포인트", "콩스탕탱 다리"] },
    ],
    attractions: [
      { name: "아를 원형 경기장", nameEn: "Arles Amphitheatre", description: "1세기에 건설된 로마 시대 원형 경기장으로 2만 명을 수용. 현재도 투우와 콘서트가 열립니다.", category: "유적", tip: "꼭대기 아치에서 아를 구시가지와 프로방스 평원의 파노라마를 감상하세요." },
      { name: "고흐 재단 미술관", nameEn: "Fondation Vincent van Gogh Arles", description: "고흐의 아를 시기 작품과 고흐에게 영감을 받은 현대 작가들의 전시를 볼 수 있는 미술관.", category: "미술관", tip: "고흐의 원작은 상설 전시가 아니므로 방문 전 전시 일정을 확인하세요." },
      { name: "뤼마 아를", nameEn: "LUMA Arles", description: "프랭크 게리가 설계한 56m 높이의 알루미늄 타워가 랜드마크인 현대 예술 복합 단지.", category: "미술관", tip: "타워 옥상 전망대에서 아를 전경과 카마르그 습지를 조망할 수 있습니다." },
      { name: "포럼 광장 카페", nameEn: "Café Terrace, Place du Forum", description: "고흐의 '밤의 카페 테라스'(1888)의 실제 배경이 된 장소. 노란색으로 칠해진 카페가 그림 속 그대로입니다.", category: "랜드마크" },
      { name: "생트로핌 성당", nameEn: "Church of St. Trophime", description: "12세기 로마네스크 양식의 성당으로 정교한 조각이 돋보이는 정문과 아름다운 회랑이 유네스코 세계유산.", category: "성당", tip: "회랑은 별도 입장료가 필요하지만 로마네스크와 고딕 조각의 걸작을 볼 수 있습니다." },
    ],
    dayTrips: [
      { name: "카마르그", nameEn: "Camargue", description: "야생마, 플라밍고, 소금 평원이 펼쳐지는 론 강 삼각주의 자연보호구역.", travelTime: "차량 약 30분", gradient: "from-pink-300 to-rose-500" },
      { name: "레보드프로방스", nameEn: "Les Baux-de-Provence", description: "석회암 절벽 위의 중세 마을. 카리에르 드 뤼미에르(빛의 채석장) 몰입형 전시가 유명.", travelTime: "차량 약 30분", gradient: "from-stone-400 to-amber-600" },
    ],
    localFood: [
      { name: "소시송 다를", description: "아를 전통 건조 소시지로 허브와 향신료가 들어간 프로방스 특산 살라미.", emoji: "🥩" },
      { name: "가르디안 스튜", description: "카마르그 소고기를 레드 와인과 올리브로 푹 끓인 프로방스 전통 스튜.", emoji: "🍲" },
      { name: "타프나드", description: "올리브, 케이퍼, 안초비를 갈아 만든 프로방스 스프레드. 바게트에 곁들여 먹습니다.", emoji: "🫒" },
    ],
    tips: [
      "아를 시내 곳곳에 고흐가 그림을 그린 장소를 표시한 안내판이 있어 '고흐 산책로'를 따라 걸을 수 있습니다.",
      "7월 아를 사진 축제 기간에는 도시 전체가 갤러리로 변하며, 입장권 하나로 모든 전시를 관람합니다.",
      "로마 유적 통합 입장권(Pass Liberté)을 구매하면 원형 경기장, 고대 극장, 욕장 등을 저렴하게 볼 수 있습니다.",
      "여름에는 기온이 40도 가까이 오르므로 모자, 선크림, 물을 반드시 챙기세요.",
    ],
  },

  // ===== NORMANDY & BRITTANY =====
  "france/normandy-brittany/rennes": {
    heroGradient: "from-emerald-500 to-teal-700",
    description: "브르타뉴의 수도 렌은 중세 목골 건물과 현대적인 대학 문화가 조화를 이루는 활기찬 도시입니다. 프랑스에서 가장 큰 토요 시장 중 하나인 리스 시장, 색색의 콜롱바주(목골) 건물이 늘어선 구시가지, 그리고 브르타뉴 의회 건물이 도시의 역사와 자부심을 보여줍니다.",
    bestTime: "5~9월 (여름 야외 축제 시즌 / 해양성 기후로 연중 온화)",
    stayArea: "구시가지 (리스 광장 주변) / 생탄 지구",
    transport: "메트로, 버스 / 파리에서 TGV 약 1시간 30분",
    districts: [
      { name: "구시가지", nameEn: "Vieux Rennes", description: "중세 목골 건물이 밀집한 렌의 역사 중심지. 좁은 골목마다 크레프리(크레페 전문점)와 시드르 바가 있습니다.", highlights: ["리스 광장", "모르들레즈 문", "생피에르 대성당", "슈목 거리"] },
      { name: "타보르 공원 지구", nameEn: "Thabor Park Area", description: "렌에서 가장 아름다운 공원이 있는 주거 지역. 프랑스식 정원과 영국식 정원이 공존합니다.", highlights: ["타보르 공원", "장미 정원", "온실"] },
      { name: "생탄 거리", nameEn: "Rue Saint-Anne", description: "바와 레스토랑이 밀집한 렌의 나이트라이프 중심지. 학생들로 활기가 넘칩니다.", highlights: ["크래프트 비어 바", "라이브 음악 바", "브르타뉴 시드르 바"] },
    ],
    attractions: [
      { name: "리스 토요 시장", nameEn: "Marché des Lices", description: "매주 토요일 리스 광장에서 열리는 프랑스 최대 규모의 노천 시장. 300개 이상의 노점이 펼쳐집니다.", category: "시장", tip: "오전 7시부터 오후 1시 30분까지. 갈레트 소시스(소시지 갈레트)를 꼭 맛보세요." },
      { name: "브르타뉴 의회", nameEn: "Parlement de Bretagne", description: "17세기에 건설된 브르타뉴 지방의회 건물로 내부의 금박 장식과 천장화가 화려합니다.", category: "건축", tip: "내부 가이드 투어(프랑스어)를 통해서만 관람 가능하며, 관광안내소에서 예약합니다." },
      { name: "타보르 공원", nameEn: "Parc du Thabor", description: "10헥타르 규모의 아름다운 공원으로 프랑스식 정원, 장미원, 온실이 조화를 이룹니다.", category: "공원", tip: "6월 장미 만개 시기가 가장 아름다우며, 일요일 오후 피크닉이 현지인의 일상입니다." },
      { name: "모르들레즈 문", nameEn: "Portes Mordelaises", description: "15세기 렌 성벽의 주요 출입문으로, 브르타뉴 공작들의 대관식 행렬이 통과하던 역사적 문.", category: "유적" },
    ],
    dayTrips: [
      { name: "몽생미셸", nameEn: "Mont-Saint-Michel", description: "바다 위에 솟은 중세 수도원 섬으로 유네스코 세계유산.", travelTime: "버스 약 1시간 30분", gradient: "from-blue-400 to-slate-600" },
      { name: "생말로", nameEn: "Saint-Malo", description: "해적과 탐험가의 도시로 성벽에 둘러싸인 해안 요새 도시.", travelTime: "기차 약 1시간", gradient: "from-sky-400 to-blue-600" },
    ],
    localFood: [
      { name: "갈레트", description: "메밀 가루로 만든 브르타뉴 전통 짭짤한 크레페. 햄, 치즈, 달걀을 넣은 콩플레트가 기본.", emoji: "🥞" },
      { name: "시드르", description: "사과를 발효시킨 브르타뉴 전통 발포주. 갈레트와 함께 볼 잔(도자기 잔)에 마십니다.", emoji: "🍎" },
      { name: "쿠인 아만", description: "버터와 설탕을 겹겹이 넣어 구운 브르타뉴식 페이스트리. 캐러멜 풍미가 일품.", emoji: "🧈" },
    ],
    tips: [
      "토요 리스 시장은 렌 여행의 하이라이트이므로 토요일 일정에 반드시 포함하세요.",
      "렌은 프랑스에서 대학생 비율이 가장 높은 도시 중 하나로 저렴한 맛집이 많습니다.",
      "생탄 거리의 바에서 브르타뉴 크래프트 시드르와 쿠셴(Kouchenns, 브르타뉴 벌꿀주)을 맛보세요.",
      "렌에서 몽생미셸 당일치기가 가능하므로 브르타뉴 여행의 거점으로 좋습니다.",
    ],
  },
  "france/normandy-brittany/caen": {
    heroGradient: "from-slate-500 to-gray-700",
    description: "노르망디의 중심 도시 카앙은 정복왕 윌리엄(기욤)이 세운 두 개의 수도원과 성이 있는 역사 도시입니다. 제2차 세계대전 D-Day 상륙 작전의 역사를 간직한 카앙 메모리얼 평화박물관은 전쟁과 평화에 대한 깊은 성찰을 제공하며, 오마하 비치를 비롯한 D-Day 해변으로의 관문 역할을 합니다.",
    bestTime: "5~9월 (6월 6일 D-Day 기념행사 / 여름 쾌적한 기후)",
    stayArea: "구시가지 (성 주변) / 생피에르 거리",
    transport: "트램, 버스 / 파리에서 기차 약 2시간",
    districts: [
      { name: "카앙 성 지구", nameEn: "Château de Caen Quarter", description: "윌리엄 정복왕이 건설한 성과 두 개의 미술관이 있는 카앙의 핵심 지역.", highlights: ["카앙 성", "노르망디 미술관", "성벽 산책로", "생피에르 교회"] },
      { name: "바상 생피에르", nameEn: "Bassin Saint-Pierre", description: "요트 항구와 카페가 있는 수변 지구로 현대적인 카앙의 모습을 볼 수 있습니다.", highlights: ["요트 항구", "카페 테라스", "수변 산책로"] },
    ],
    attractions: [
      { name: "카앙 메모리얼 평화박물관", nameEn: "Mémorial de Caen", description: "제2차 세계대전과 냉전, 평화를 주제로 한 세계적인 박물관. D-Day 상륙 작전의 전 과정을 생생하게 보여줍니다.", category: "박물관", tip: "관람에 최소 3시간이 필요합니다. 박물관에서 D-Day 해변 가이드 투어도 운영합니다." },
      { name: "남성 수도원", nameEn: "Abbaye aux Hommes", description: "윌리엄 정복왕이 건립한 로마네스크 양식의 수도원. 정복왕의 무덤이 이곳에 있습니다.", category: "수도원", tip: "가이드 투어를 통해 내부 회랑과 정복왕의 묘소를 관람할 수 있습니다." },
      { name: "여성 수도원", nameEn: "Abbaye aux Dames", description: "정복왕의 왕비 마틸드가 건립한 수도원으로 우아한 로마네스크 건축이 돋보입니다.", category: "수도원" },
      { name: "카앙 성", nameEn: "Château de Caen", description: "유럽 최대 규모의 중세 성채 중 하나로, 성벽 위를 걸으며 카앙 시내 전경을 조망합니다.", category: "성", tip: "성 내부의 노르망디 미술관과 카앙 박물관도 함께 관람하세요." },
    ],
    dayTrips: [
      { name: "오마하 비치 & D-Day 해변", nameEn: "Omaha Beach & D-Day Beaches", description: "1944년 6월 6일 노르망디 상륙 작전이 벌어진 역사적 해변과 미군 묘지.", travelTime: "차량 약 45분", gradient: "from-blue-400 to-gray-600" },
      { name: "바이외", nameEn: "Bayeux", description: "11세기 바이외 태피스트리(노르만 정복 서사)가 보존된 중세 도시.", travelTime: "기차 약 20분", gradient: "from-amber-400 to-red-600" },
    ],
    localFood: [
      { name: "트리프 알라 모드 드 카앙", description: "카앙의 대표 요리로 소 내장을 사과주와 함께 10시간 이상 푹 끓인 전통 스튜.", emoji: "🍲" },
      { name: "카망베르 치즈", description: "카앙에서 가까운 노르망디 카망베르 마을 원산의 부드러운 흰곰팡이 치즈.", emoji: "🧀" },
      { name: "시드르 & 칼바도스", description: "노르망디 사과주(시드르)와 이를 증류한 사과 브랜디(칼바도스).", emoji: "🍏" },
    ],
    tips: [
      "카앙 메모리얼에서 출발하는 D-Day 해변 가이드 투어(영어 가능)가 가장 편리한 방법입니다.",
      "6월 6일 D-Day 기념일 전후에는 특별 행사와 재현 이벤트가 열립니다.",
      "카앙은 2차대전 폭격으로 크게 파괴되어 구시가지 규모가 작지만, 재건된 도시 자체가 역사입니다.",
      "노르망디 시드르 루트(Route du Cidre)를 따라 사과주 농장을 방문해보세요.",
    ],
  },

  // ===== ALSACE & EAST =====
  "france/alsace-east/annecy": {
    heroGradient: "from-cyan-400 to-sky-600",
    description: "'알프스의 베니스'라 불리는 안시는 유럽에서 가장 맑은 호수와 구시가지를 가로지르는 운하가 만드는 동화 같은 풍경으로 유명합니다. 티우 강 위에 떠 있는 듯한 팔레 드 릴(섬의 궁전), 알록달록한 건물이 늘어선 운하변, 그리고 호수 너머로 펼쳐지는 알프스 산맥의 파노라마가 여행자를 매료시킵니다.",
    bestTime: "5~9월 (여름 호수 수영 / 6월 안시 애니메이션 영화제)",
    stayArea: "구시가지 (운하 주변) / 호수 북쪽 해변 근처",
    transport: "도보 (구시가지 컴팩트) / 리옹에서 기차 약 2시간, 제네바에서 약 1시간",
    districts: [
      { name: "구시가지", nameEn: "Vieille Ville", description: "운하를 따라 중세 아케이드와 파스텔 톤 건물이 이어지는 안시의 핵심 지역.", highlights: ["팔레 드 릴", "생클레르 거리", "안시 성", "티우 운하"] },
      { name: "안시 호수 해변", nameEn: "Lake Annecy Beach Area", description: "유럽에서 가장 깨끗한 호수 주변의 공원과 해변이 있는 휴양 지구.", highlights: ["유럽 정원", "사랑의 다리", "알비니 해변", "호수 유람선"] },
      { name: "세므노즈 산", nameEn: "Semnoz Mountain", description: "안시 남쪽의 산으로 패러글라이딩 출발지이자 겨울 스키장.", highlights: ["패러글라이딩", "하이킹 트레일", "안시 호수 전망대"] },
    ],
    attractions: [
      { name: "팔레 드 릴", nameEn: "Palais de l'Île", description: "12세기에 건설된 삼각형 모양의 섬 궁전으로 안시의 상징. 티우 운하 한가운데에 떠 있는 듯한 독특한 외관이 포토 스팟입니다.", category: "유적", tip: "내부는 작은 역사 박물관으로 운영됩니다. 외부에서 운하와 함께 사진을 찍는 것이 포인트." },
      { name: "안시 호수", nameEn: "Lake Annecy", description: "유럽에서 가장 깨끗한 호수로 에메랄드빛 물이 투명하게 빛납니다. 수영, 카약, 페달 보트 등 수상 활동이 가능.", category: "자연", tip: "호수 한 바퀴 자전거 투어(약 40km)가 인기이며, 대여소가 곳곳에 있습니다." },
      { name: "안시 성", nameEn: "Château d'Annecy", description: "12~16세기에 걸쳐 건설된 제네바 백작의 거성으로 현재 지역 박물관으로 운영됩니다.", category: "성", tip: "성에서 내려다보는 안시 구시가지의 지붕과 호수 풍경이 아름답습니다." },
      { name: "사랑의 다리", nameEn: "Pont des Amours", description: "안시 호수와 바시 운하가 만나는 지점의 철제 다리. 연인들이 키스하면 영원히 함께한다는 전설이 있습니다.", category: "랜드마크" },
      { name: "세므노즈 패러글라이딩", nameEn: "Semnoz Paragliding", description: "세므노즈 산에서 안시 호수를 내려다보며 비행하는 탠덤 패러글라이딩. 알프스의 장관을 하늘에서 감상합니다.", category: "액티비티", tip: "사전 예약 필수이며, 비행 시간은 약 15~25분입니다. 바람이 좋은 오전이 최적." },
    ],
    dayTrips: [
      { name: "샤모니 몽블랑", nameEn: "Chamonix-Mont-Blanc", description: "유럽 최고봉 몽블랑의 관문 도시. 에귀뒤미디 케이블카로 3,842m까지 올라갑니다.", travelTime: "차량 약 1시간 30분", gradient: "from-white to-blue-400" },
    ],
    localFood: [
      { name: "타르티플레트", description: "르블로숑 치즈, 감자, 라르동, 양파를 겹겹이 쌓아 오븐에 구운 사부아 전통 요리.", emoji: "🧀" },
      { name: "라클렛", description: "녹인 치즈를 감자, 샤르퀴트리, 피클과 함께 먹는 알프스 전통 요리.", emoji: "🫕" },
      { name: "폰듀 사부아야르", description: "그뤼에르, 보포르, 에멘탈 치즈를 화이트 와인에 녹여 빵을 찍어 먹는 사부아 명물.", emoji: "🍲" },
    ],
    tips: [
      "여름에는 호수에서 수영이 가능하며 수온이 22~24도로 쾌적합니다. 수영복을 챙기세요.",
      "구시가지 운하변 사진은 이른 아침 관광객이 없을 때 가장 아름답게 담을 수 있습니다.",
      "매월 마지막 토요일 구시가지에서 대규모 벼룩시장이 열립니다.",
      "안시에서 제네바(스위스)까지 기차로 약 1시간이므로 국경을 넘는 당일치기도 가능합니다.",
    ],
  },
  "france/alsace-east/reims": {
    heroGradient: "from-amber-300 to-yellow-600",
    description: "샴페인의 수도 랭스는 프랑스 역대 왕들의 대관식이 거행된 노트르담 대성당과 세계적인 샴페인 하우스 셀러가 공존하는 도시입니다. '미소 짓는 천사' 조각으로 유명한 대성당의 고딕 건축, 뵈브 클리코와 테탱제 등 유명 메종의 지하 셀러 투어, 그리고 아르데코 양식의 시내 건축이 매력적입니다.",
    bestTime: "5~10월 (9~10월 포도 수확 시즌 / 12월 크리스마스 마켓)",
    stayArea: "대성당 주변 / 드로에 데를롱 광장",
    transport: "트램, 도보 / 파리에서 TGV 약 45분",
    districts: [
      { name: "대성당 지구", nameEn: "Cathedral Quarter", description: "노트르담 대성당과 토 궁전을 중심으로 한 랭스의 역사적 핵심 지역.", highlights: ["노트르담 대성당", "토 궁전", "카네기 도서관", "생레미 바실리카"] },
      { name: "샴페인 하우스 지구", nameEn: "Champagne Houses Quarter", description: "뵈브 클리코, 테탱제, 포므리 등 유명 샴페인 메종이 밀집한 남동쪽 지역.", highlights: ["뵈브 클리코", "테탱제", "포므리", "루이나르"] },
      { name: "드로에 데를롱 광장", nameEn: "Place Drouet-d'Erlon", description: "레스토랑, 카페, 바가 밀집한 랭스의 중심 번화가.", highlights: ["노천 카페", "분수 광장", "쇼핑 거리"] },
    ],
    attractions: [
      { name: "랭스 노트르담 대성당", nameEn: "Reims Cathedral", description: "13세기 고딕 건축의 걸작으로 클로비스 1세부터 샤를 10세까지 프랑스 왕 25명의 대관식이 거행된 장소. '미소 짓는 천사' 조각이 서쪽 파사드를 장식합니다.", category: "성당", tip: "샤갈이 디자인한 스테인드글라스(1974)를 놓치지 마세요. 야간 조명 쇼도 여름에 열립니다." },
      { name: "뵈브 클리코 셀러", nameEn: "Veuve Clicquot Cellars", description: "1772년 설립된 세계적인 샴페인 하우스. 갈로-로마 시대 석회암 지하 터널에서 숙성되는 와인을 볼 수 있습니다.", category: "와이너리", tip: "셀러 투어는 사전 온라인 예약 필수이며, 시음 포함 약 1시간 소요됩니다." },
      { name: "테탱제 셀러", nameEn: "Taittinger Cellars", description: "4세기 갈로-로마 석회암 채석장과 13세기 생니케즈 수도원 지하 크립트에서 진행되는 셀러 투어가 인상적입니다.", category: "와이너리", tip: "가이드 투어 후 프레스티지 큐베 시음이 포함됩니다." },
      { name: "토 궁전", nameEn: "Palais du Tau", description: "대성당 옆에 위치한 대주교 궁전으로 대관식 보물과 중세 태피스트리를 전시합니다. 유네스코 세계유산.", category: "박물관" },
      { name: "생레미 바실리카", nameEn: "Basilique Saint-Rémi", description: "11세기 로마네스크 양식의 성당으로 프랑크 왕국의 클로비스 1세에게 세례를 베푼 성 레미의 유해가 안치되어 있습니다.", category: "성당" },
    ],
    dayTrips: [
      { name: "에페르네", nameEn: "Épernay", description: "모엣 & 샹동, 페리에 주에 등 샴페인 대로(Avenue de Champagne)가 있는 도시.", travelTime: "기차 약 30분", gradient: "from-yellow-400 to-amber-600" },
    ],
    localFood: [
      { name: "샴페인", description: "세계에서 가장 유명한 스파클링 와인. 메종에서 직접 시음하며 브뤼, 로제, 블랑 드 블랑의 차이를 경험하세요.", emoji: "🥂" },
      { name: "비스퀴 로제 드 랭스", description: "분홍빛 비스킷으로 샴페인에 살짝 적셔 먹는 랭스 전통 과자. 메종 포실에가 원조.", emoji: "🍪" },
      { name: "앙두예트", description: "돼지 내장으로 만든 소시지를 머스타드와 함께 먹는 샹파뉴 전통 요리.", emoji: "🌭" },
    ],
    tips: [
      "샴페인 셀러 투어는 인기 메종의 경우 수주 전에 예약이 마감되므로 일찍 예약하세요.",
      "파리 동역(Gare de l'Est)에서 TGV로 45분이면 도착하여 파리에서 당일치기가 가능합니다.",
      "랭스 대성당 야간 조명 쇼 'Régalia'는 여름 시즌에 무료로 관람할 수 있습니다.",
      "에페르네의 샴페인 대로까지 방문한다면 하루를 온전히 샴페인에 할애하는 것을 추천합니다.",
    ],
  },

  // ===== SOUTHWEST & BORDEAUX =====
  "france/southwest-bordeaux/lourdes": {
    heroGradient: "from-sky-300 to-blue-600",
    description: "루르드는 1858년 성모 마리아가 발현했다고 전해지는 가톨릭 세계 최대의 순례지입니다. 매년 600만 명 이상의 순례자가 마사비엘 동굴의 성수를 찾아 이곳을 방문하며, 웅장한 바실리카와 촛불 행렬이 깊은 감동을 줍니다. 피레네 산맥의 관문이기도 하여 픽 뒤 미디 전망대로의 케이블카 여행도 가능합니다.",
    bestTime: "5~10월 (8월 15일 성모승천 대축일 전후 최대 규모 / 봄·가을 비교적 한산)",
    stayArea: "성지 주변 호텔 지구 / 시내 중심가",
    transport: "도보 (성지 내) / 버스 / 파리에서 TGV 약 5시간, 툴루즈에서 기차 약 2시간",
    districts: [
      { name: "성지 지구", nameEn: "Sanctuary Area", description: "마사비엘 동굴과 세 개의 바실리카가 있는 루르드의 핵심 순례 지역.", highlights: ["마사비엘 동굴", "로사리오 바실리카", "무염시태 바실리카", "지하 성 비오 10세 바실리카"] },
      { name: "루르드 시내", nameEn: "Lourdes Town", description: "성지와 인접한 시내 중심가로 종교 기념품 상점과 레스토랑이 즐비합니다.", highlights: ["루르드 성", "재래시장", "종교 기념품 거리"] },
    ],
    attractions: [
      { name: "마사비엘 동굴", nameEn: "Grotto of Massabielle", description: "1858년 14세 소녀 베르나데트 수비루에게 성모 마리아가 18차례 발현한 장소. 동굴 안 성모상 앞에서 기도하는 순례자의 줄이 끊이지 않습니다.", category: "성지", tip: "이른 아침이나 늦은 저녁에 방문하면 비교적 조용하게 기도할 수 있습니다." },
      { name: "루르드 바실리카", nameEn: "Basilica of Our Lady of the Immaculate Conception", description: "마사비엘 동굴 위에 세워진 네오고딕 양식의 상부 바실리카. 아래에 로사리오 바실리카, 지하에 25,000명 수용 가능한 성 비오 10세 바실리카가 있습니다.", category: "성당", tip: "지하 비오 10세 바실리카는 세계에서 가장 큰 지하 성당으로 꼭 방문하세요." },
      { name: "촛불 행렬", nameEn: "Torchlight Marian Procession", description: "매일 밤 21시에 성지에서 출발하는 촛불 순례 행렬. 수천 명이 촛불을 들고 아베 마리아를 부르며 행진합니다.", category: "의식", tip: "매일 저녁 진행되며, 특별한 종교적 신앙 없이도 감동적인 경험입니다." },
      { name: "픽 뒤 미디 전망대", nameEn: "Pic du Midi Observatory", description: "해발 2,877m 피레네 산맥 정상의 천문대. 케이블카로 올라가 360도 파노라마와 별 관측을 즐길 수 있습니다.", category: "전망대", tip: "루르드에서 차량 약 35분 거리의 라 몽지(La Mongie)에서 케이블카 탑승. 날씨를 확인하세요." },
    ],
    dayTrips: [
      { name: "가바르니 폭포", nameEn: "Cirque de Gavarnie", description: "피레네 산맥의 유네스코 세계유산으로 유럽 최대 낙차(423m)의 폭포가 있는 빙하 권곡.", travelTime: "차량 약 1시간", gradient: "from-emerald-400 to-teal-600" },
    ],
    localFood: [
      { name: "가르뷔르", description: "양배추, 감자, 콩, 오리 기름으로 끓인 피레네 산간 지방의 든든한 전통 수프.", emoji: "🥣" },
      { name: "가토 알라 브로슈", description: "꼬치에 반죽을 층층이 발라 장작불에 구운 피레네 전통 케이크. 나이테 모양의 단면이 특징.", emoji: "🎂" },
    ],
    tips: [
      "성지 내에서는 조용히 행동하고 적절한 복장(반바지, 민소매 자제)을 권장합니다.",
      "마사비엘 동굴의 성수는 무료로 받을 수 있으며, 성지 입구에 수도꼭지가 있습니다.",
      "촛불 행렬에 참가하려면 성지 입구에서 촛불(약 €2)을 구입하세요.",
      "픽 뒤 미디 케이블카는 날씨에 따라 운행이 중단될 수 있으므로 사전 확인이 필수입니다.",
    ],
  },
  "france/southwest-bordeaux/pau": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "피레네 산맥의 관문 도시 포는 부르봉 왕가의 시조 앙리 4세의 탄생지로 프랑스 왕실의 역사가 깃든 곳입니다. 포 성에서 내려다보는 피레네 산맥의 설산 파노라마는 '세상에서 가장 아름다운 땅의 풍경'으로 불리며, 블루바르 데 피레네 산책로에서 150km에 걸친 산맥 전경을 한눈에 감상할 수 있습니다.",
    bestTime: "5~10월 (여름 하이킹 / 봄·가을 쾌적한 날씨)",
    stayArea: "구시가지 (포 성 주변) / 블루바르 데 피레네 근처",
    transport: "푸니쿨라, 버스 / 파리에서 TGV 약 4시간 30분, 보르도에서 기차 약 2시간",
    districts: [
      { name: "포 성 지구", nameEn: "Château de Pau Quarter", description: "앙리 4세의 성과 주변 정원이 있는 포의 역사적 핵심 지역.", highlights: ["포 성", "앙리 4세 동상", "성 정원", "국립 성 박물관"] },
      { name: "블루바르 데 피레네", nameEn: "Boulevard des Pyrénées", description: "피레네 산맥의 파노라마를 즐길 수 있는 1.8km 산책로.", highlights: ["피레네 전망대", "보몽 공원", "팔레 보몽", "푸니쿨라 역"] },
    ],
    attractions: [
      { name: "포 성", nameEn: "Château de Pau", description: "앙리 4세가 1553년에 태어난 르네상스 성. 거대한 거북이 등껍질로 만든 요람과 고블랭 태피스트리가 전시되어 있습니다.", category: "성", tip: "가이드 투어로만 내부 관람이 가능하며, 프랑스어와 영어 투어가 있습니다." },
      { name: "블루바르 데 피레네", nameEn: "Boulevard des Pyrénées", description: "포 시내와 기차역을 잇는 1.8km의 산책로로 날씨가 맑은 날 피레네 산맥의 만년설 봉우리들이 파노라마로 펼쳐집니다.", category: "산책로", tip: "일출 시간에 방문하면 피레네 봉우리가 붉게 물드는 장관을 볼 수 있습니다." },
      { name: "보몽 공원", nameEn: "Parc Beaumont", description: "블루바르 데 피레네 동쪽 끝에 위치한 영국식 정원. 레바논 삼나무, 세쿼이아 등 이국적 수목이 가득합니다.", category: "공원" },
      { name: "포 푸니쿨라", nameEn: "Funiculaire de Pau", description: "1908년에 개통된 무료 케이블카로 기차역에서 블루바르 데 피레네까지 올라갑니다.", category: "교통", tip: "무료로 이용 가능하며, 포 시내와 피레네 전경을 동시에 조망합니다." },
    ],
    dayTrips: [
      { name: "루르드", nameEn: "Lourdes", description: "세계 최대 가톨릭 순례지로 마사비엘 동굴과 바실리카가 있는 성지.", travelTime: "기차 약 30분", gradient: "from-sky-300 to-blue-600" },
      { name: "피레네 국립공원", nameEn: "Pyrenees National Park", description: "해발 3,000m급 봉우리와 빙하 호수, 야생 동식물이 있는 프랑스 국립공원.", travelTime: "차량 약 1시간", gradient: "from-green-400 to-teal-600" },
    ],
    localFood: [
      { name: "풀 오 포", description: "닭, 소고기, 채소를 큰 냄비에 함께 푹 끓인 앙리 4세가 사랑했다는 전통 스튜.", emoji: "🍲" },
      { name: "가토 바스크", description: "아몬드 크림이나 블랙 체리 잼이 들어간 바스크 지방의 전통 타르트.", emoji: "🥧" },
      { name: "쥐랑송 와인", description: "포 남쪽 쥐랑송 지역의 달콤한 화이트 와인. 앙리 4세 탄생 시 입술에 적셨다는 전설.", emoji: "🍷" },
    ],
    tips: [
      "블루바르 데 피레네에서 피레네 전망을 즐기려면 맑은 날을 택하세요. 방향 안내판에 각 봉우리 이름이 표시되어 있습니다.",
      "포 성은 가이드 투어 시간이 정해져 있으므로 도착 후 먼저 시간을 확인하세요.",
      "포에서 루르드까지 기차로 30분이므로 두 도시를 연계한 일정이 효율적입니다.",
      "무료 푸니쿨라로 기차역에서 시내 중심으로 올라갈 수 있어 짐이 많을 때 편리합니다.",
    ],
  },
};

export const franceAttractionDetails2: Record<string, AttractionDetail> = {
  // ===== CANNES =====
  "france/provence-cote-dazur/cannes/la-croisette": {
    heroGradient: "from-yellow-400 to-amber-600",
    description: "칸의 대표적인 2km 해안 산책로로 야자수와 지중해가 어우러진 럭셔리의 상징입니다. 칼튼 인터콘티넨탈, 마르티네즈 등 벨 에포크 시대의 호화 호텔, 샤넬·디올 등 명품 부티크, 그리고 프라이빗 해변 클럽이 줄지어 있어 세계 부호와 셀러브리티의 무대가 됩니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료 (프라이빗 해변은 선베드 유료 €20~50)",
      address: "Boulevard de la Croisette, 06400 Cannes",
    },
    highlights: [
      "칼튼 인터콘티넨탈 호텔의 벨 에포크 건축",
      "야자수 가로수길을 따라 지중해 산책",
      "해변 레스토랑에서 즐기는 지중해 식사",
      "크루아제트 동쪽 끝 팜 비치까지 전체 산책",
      "석양 무렵 황금빛으로 물드는 지중해 풍경",
    ],
    nearbyAttractions: ["팔레 데 페스티발", "구항구", "르 쉬케 구시가지"],
    photoTips: "칼튼 호텔을 배경으로 야자수가 프레임에 들어오는 구도가 가장 칸다운 사진입니다. 석양 무렵이 최고의 촬영 시간대입니다.",
    tips: [
      "공공 해변은 크루아제트 양쪽 끝에 위치하며, 프라이빗 해변 사이사이에도 무료 구간이 있습니다.",
      "여름 성수기에는 선베드가 빨리 차므로 오전 일찍 해변에 도착하세요.",
      "크루아제트 서쪽 끝 팔레 데 페스티발에서 동쪽 팜 비치까지 약 40분 소요됩니다.",
      "자전거 대여소가 곳곳에 있어 자전거로 크루아제트를 달리는 것도 추천합니다.",
    ],
  },
  "france/provence-cote-dazur/cannes/palais-des-festivals": {
    heroGradient: "from-red-500 to-rose-700",
    description: "매년 5월 세계 영화인이 모이는 칸 영화제의 무대. 1982년에 완공된 현재 건물은 크루아제트 대로 서쪽 끝에 위치하며, 입구의 레드 카펫 계단과 스타들의 손도장이 새겨진 명예의 광장(Allée des Stars)이 상징적입니다.",
    history: "1946년 첫 칸 영화제가 열린 이래 세계 3대 영화제(칸, 베니스, 베를린)의 하나로 성장했습니다. 현재의 건물은 1982년에 개관했으며, 2000석 규모의 그랑 오디토리엄 루미에르가 핵심 상영관입니다.",
    visitInfo: {
      hours: "외부 24시간 / 내부는 행사 시에만 개방",
      admission: "외부 무료 / 내부는 행사 티켓 소지자만",
      address: "1 Boulevard de la Croisette, 06400 Cannes",
      website: "https://www.palaisdesfestivals.com",
    },
    highlights: [
      "레드 카펫이 깔리는 24단 계단 (Marches)",
      "명예의 광장(Allée des Stars)에서 스타 손도장 찾기",
      "건물 앞 크루아제트와 구항구 풍경",
      "영화제 기간 셀러브리티 사인 행사",
    ],
    nearbyAttractions: ["크루아제트 대로", "구항구", "포르빌 시장"],
    photoTips: "레드 카펫 계단에서 포즈를 취하는 사진이 가장 인기입니다. 영화제 기간이 아닐 때도 계단은 개방되어 있으니 스타가 된 기분을 만끽하세요.",
    tips: [
      "영화제 기간(5월)에는 건물 주변이 통제되므로 계단 접근이 제한될 수 있습니다.",
      "명예의 광장 손도장은 팔레 주변 바닥에 있으며, 좋아하는 배우의 손도장을 찾아보세요.",
      "건물 옥상의 무료 전망대에서 칸 시내와 항구를 조망할 수 있는 날이 있으니 관광안내소에서 확인하세요.",
    ],
  },
  "france/provence-cote-dazur/cannes/iles-de-lerins": {
    heroGradient: "from-teal-400 to-emerald-600",
    description: "칸 앞바다에 떠 있는 두 개의 섬으로, 큰 섬 생트마르그리트(Sainte-Marguerite)에는 알렉상드르 뒤마의 소설로 유명한 철가면의 감옥이, 작은 섬 생토노라(Saint-Honorat)에는 5세기부터 이어진 현역 수도원이 있습니다. 유칼립투스와 소나무 숲, 맑은 바다가 칸의 화려함과는 대조적인 자연을 선사합니다.",
    history: "생토노라 수도원은 410년경 성 호노라투스가 설립한 유럽에서 가장 오래된 수도원 중 하나입니다. 생트마르그리트 섬의 포르 루아얄 요새는 17세기에 건설되었으며, 1687~1698년 미스터리한 철가면 수인이 수감되었던 곳으로 유명합니다.",
    visitInfo: {
      hours: "페리 08:00~18:00 (계절별 변동) / 섬 일출~일몰",
      admission: "페리 왕복 약 €16 / 포르 루아얄 박물관 €6",
      address: "Quai Laubeuf (구항구 페리 터미널), 06400 Cannes",
    },
    highlights: [
      "철가면의 감옥 셀(포르 루아얄 요새 내)",
      "생트마르그리트 섬 유칼립투스 숲 트레일",
      "생토노라 수도원과 수도사가 만든 와인 시음",
      "섬 주변 맑은 바다에서 스노클링",
      "칸 스카이라인을 바라보는 해안 풍경",
    ],
    nearbyAttractions: ["칸 구항구", "크루아제트 대로", "르 쉬케 구시가지"],
    photoTips: "생트마르그리트 섬 남쪽 해안에서 본토 방향으로 찍으면 칸의 스카이라인과 에스테렐 산맥을 배경으로 담을 수 있습니다.",
    tips: [
      "물과 간식을 충분히 챙기세요. 섬에는 상점이 거의 없습니다 (생토노라에 수도원 상점만 있음).",
      "생트마르그리트 섬은 반나절, 두 섬 모두 방문하려면 하루가 필요합니다.",
      "생토노라 수도원 와인은 섬에서만 구매할 수 있으며, 수량이 한정되어 빨리 매진됩니다.",
      "여름에는 섬 해변에서 수영이 가능하니 수영복을 챙기세요.",
    ],
  },

  // ===== ARLES =====
  "france/provence-cote-dazur/arles/arles-amphitheatre": {
    heroGradient: "from-orange-500 to-amber-700",
    description: "기원후 90년경 건설된 로마 시대 원형 경기장으로, 2만 명 이상을 수용할 수 있는 아를에서 가장 큰 고대 유적입니다. 136m x 107m 규모의 타원형 경기장은 2층 60개 아치로 이루어져 있으며, 현재도 투우, 콘서트, 카마르그 축제 등 다양한 행사가 열리는 살아있는 유적입니다.",
    history: "로마 식민도시 아렐라테(Arelate)의 핵심 공공건물로 건설되었습니다. 중세에는 요새와 주거지로 사용되어 내부에 200채 이상의 집과 교회가 들어섰으나, 19세기에 원래 모습으로 복원되었습니다. 1981년 유네스코 세계유산으로 지정되었습니다.",
    visitInfo: {
      hours: "매일 09:00~19:00 (11~2월 10:00~17:00)",
      admission: "성인 €9 / 통합권(Pass Liberté) €12",
      address: "1 Rond-Point des Arènes, 13200 Arles",
      website: "https://www.arenes-arles.com",
    },
    highlights: [
      "2층 아치 위에서 아를 구시가지와 프로방스 평원 파노라마",
      "원형 경기장 아레나에 서서 2,000년 전 검투사의 무대를 체험",
      "부활절과 9월의 전통 카마르그 투우(코르소 카마르게즈)",
      "여름 밤 콘서트와 공연 이벤트",
    ],
    nearbyAttractions: ["고대 극장", "콩스탕탱 욕장", "생트로핌 성당"],
    photoTips: "경기장 꼭대기 아치에서 아를 지붕과 론 강을 배경으로 촬영하면 로마와 프로방스가 결합된 독특한 사진을 얻을 수 있습니다.",
    tips: [
      "통합권(Pass Liberté)을 구매하면 원형 경기장, 고대 극장, 콩스탕탱 욕장, 생트로핌 회랑을 모두 관람할 수 있습니다.",
      "이벤트가 있는 날에는 일반 관람이 제한되므로 사전에 일정을 확인하세요.",
      "오전에 방문하면 햇빛이 경기장 안쪽까지 비추어 사진이 잘 나옵니다.",
      "여름에는 그늘이 없으므로 모자와 물을 준비하세요.",
    ],
  },
  "france/provence-cote-dazur/arles/fondation-vincent-van-gogh-arles": {
    heroGradient: "from-yellow-400 to-orange-600",
    description: "고흐의 아를 시기(1888~1889)를 기리는 현대 미술관으로, 15세기 저택을 리노베이션한 아름다운 건물에 고흐의 원작과 고흐에게 영감을 받은 현대 작가들의 작품을 함께 전시합니다. 고흐가 아를에서 보낸 15개월은 그의 예술 인생에서 가장 생산적인 시기로, 200점 이상의 유화와 100점 이상의 드로잉을 남겼습니다.",
    history: "2014년 개관한 미술관으로, 고흐의 아를 체류를 기념하며 그의 작품 세계와 현대 예술의 대화를 추구합니다. 고흐의 원작은 세계 각지의 미술관에서 대여하여 기획전 형태로 전시됩니다.",
    visitInfo: {
      hours: "화~일 11:00~19:00 (7~9월 10:00~19:00) / 월요일 휴관",
      admission: "성인 €9 / 학생 €4 / 18세 미만 무료",
      address: "35 Rue du Docteur Fanton, 13200 Arles",
      website: "https://www.fondation-vincentvangogh-arles.org",
    },
    highlights: [
      "고흐 원작 기획전 (시즌별 변동)",
      "고흐에 영향을 받은 현대 작가 특별전",
      "15세기 건물의 아름다운 리노베이션 건축",
      "옥상 테라스에서 아를 구시가지 전망",
    ],
    nearbyAttractions: ["포럼 광장 카페 (밤의 카페 테라스)", "아를 원형 경기장", "뤼마 아를"],
    tips: [
      "고흐의 원작 전시 여부는 시즌마다 다르므로 방문 전 웹사이트에서 현재 전시를 확인하세요.",
      "미술관 옥상 테라스는 무료로 접근 가능하며 아를 구시가지 뷰가 좋습니다.",
      "미술관 주변에 고흐가 그림을 그린 장소 표지판이 여러 곳 있으니 함께 산책하세요.",
    ],
  },
  "france/provence-cote-dazur/arles/luma-arles": {
    heroGradient: "from-silver to-zinc-500",
    description: "스위스 미술 컬렉터 마야 호프만이 설립한 현대 예술 복합 단지로, 프랭크 게리가 설계한 56m 높이의 알루미늄 타워가 랜드마크입니다. 1만 1천 개의 스테인리스 스틸 패널로 뒤덮인 타워는 빛에 따라 색이 변하며, 내부에는 전시 공간, 도서관, 카페가 있습니다.",
    history: "2021년 개관한 뤼마 아를은 옛 SNCF 철도 부지를 재생한 문화 프로젝트입니다. 프랭크 게리의 타워 외에도 과거 기관차 정비소를 리노베이션한 전시 홀, 정원이 조성되어 아를의 새로운 문화 랜드마크가 되었습니다.",
    visitInfo: {
      hours: "수~월 10:00~18:00 (여름 10:00~19:30) / 화요일 휴관",
      admission: "성인 €18 / 학생 €6 / 6세 미만 무료",
      address: "35 Avenue Victor Hugo, 13200 Arles",
      website: "https://www.luma.org/arles",
    },
    highlights: [
      "프랭크 게리 타워의 독특한 알루미늄 외관",
      "옥상 전망대에서 아를 전경과 카마르그 습지 조망",
      "대형 설치 미술 전시",
      "옛 철도 부지를 재생한 정원과 야외 공간",
      "건축 자체가 예술 작품인 인테리어 슬라이드(미끄럼틀)",
    ],
    nearbyAttractions: ["고흐 재단 미술관", "아를 원형 경기장", "론 강변"],
    photoTips: "타워의 알루미늄 패널은 시간대에 따라 색이 변합니다. 석양 무렵 금빛으로 빛나는 순간이 가장 포토제닉합니다.",
    tips: [
      "옥상 전망대는 별도 예약 없이 입장권으로 이용 가능합니다.",
      "건물 내부의 35m 슬라이드를 타고 내려올 수 있습니다 (추가 요금).",
      "정원과 카페는 입장료 없이 이용 가능합니다.",
      "사진 축제 기간(7~9월)에는 뤼마에서도 특별 전시가 열립니다.",
    ],
  },

  // ===== RENNES =====
  "france/normandy-brittany/rennes/marche-des-lices": {
    heroGradient: "from-emerald-400 to-green-600",
    description: "매주 토요일 아침 리스 광장에서 열리는 프랑스에서 가장 큰 노천 시장 중 하나입니다. 300개 이상의 노점이 신선한 해산물, 브르타뉴 갈레트, 수제 시드르, 치즈, 꽃 등을 판매하며, 렌 시민과 관광객이 함께 어우러지는 활기찬 현장입니다.",
    visitInfo: {
      hours: "매주 토요일 07:00~13:30",
      admission: "무료",
      address: "Place des Lices, 35000 Rennes",
    },
    highlights: [
      "300개 이상의 노점에서 신선한 식재료와 특산품 쇼핑",
      "현장에서 굽는 갈레트 소시스(소시지 갈레트)로 아침 식사",
      "브르타뉴 굴과 해산물 시식",
      "수제 시드르와 꿀술(쿠셴) 시음",
      "17세기 목골 건물과 시장이 어우러진 풍경",
    ],
    nearbyAttractions: ["브르타뉴 의회", "생피에르 대성당", "모르들레즈 문"],
    photoTips: "시장 초입에서 전체 노점이 펼쳐진 광경을 담고, 개별 식재료 클로즈업 사진도 잊지 마세요. 아침 햇살이 비추는 오전 9시경이 최적입니다.",
    tips: [
      "오전 9~10시가 가장 활기차며, 신선한 식재료를 원한다면 7시 개장에 맞춰 가세요.",
      "현금을 준비하세요. 일부 노점은 카드 결제가 안 됩니다.",
      "갈레트 소시스는 렌 시장의 명물로, 걸어 다니며 먹는 것이 현지 스타일입니다.",
    ],
  },
  "france/normandy-brittany/rennes/parlement-de-bretagne": {
    heroGradient: "from-blue-500 to-indigo-700",
    description: "17세기에 건설된 브르타뉴 지방의회 건물로, 살로몽 드 브로스가 설계한 프랑스 고전주의 건축의 걸작입니다. 1994년 화재 이후 15년에 걸친 복원을 거쳐 내부의 화려한 금박 장식, 천장화, 태피스트리가 원래의 영광을 되찾았습니다.",
    history: "1618~1655년에 건설되어 브르타뉴 지방의회(Parlement)의 본거지로 사용되었습니다. 프랑스 혁명 이후 법원으로 전환되었으며, 1994년 어부 시위 중 발생한 화재로 지붕과 내부가 심각하게 훼손되었으나 2012년 완전히 복원되었습니다.",
    visitInfo: {
      hours: "가이드 투어만 가능 (관광안내소에서 시간 확인)",
      admission: "성인 약 €7",
      address: "Place du Parlement de Bretagne, 35000 Rennes",
    },
    highlights: [
      "그랑 샹브르(대의실)의 금박 천장 장식",
      "17세기 태피스트리와 회화",
      "화재 후 복원된 정교한 금박 세부 장식",
      "프랑스 고전주의 건축의 외관",
    ],
    nearbyAttractions: ["리스 광장 시장", "렌 구시가지 목골 건물", "타보르 공원"],
    tips: [
      "내부는 가이드 투어로만 관람 가능하며, 렌 관광안내소에서 예약하세요.",
      "투어는 주로 프랑스어로 진행되지만, 영어 팸플릿이 제공됩니다.",
      "건물 앞 광장은 렌 시민의 만남의 장소로 저녁에 활기가 넘칩니다.",
    ],
  },
  "france/normandy-brittany/rennes/parc-du-thabor": {
    heroGradient: "from-green-400 to-lime-600",
    description: "10헥타르 규모의 렌에서 가장 아름다운 공원으로, 프랑스식 정형 정원, 영국식 풍경 정원, 식물원, 장미원이 조화를 이루고 있습니다. 옛 생멜랭 수도원의 정원을 19세기 조경가 드니 뷜러와 외젠 뷜러가 현재의 공원으로 조성했습니다.",
    visitInfo: {
      hours: "매일 07:15~20:30 (여름 ~21:30)",
      admission: "무료",
      address: "Place Saint-Mélaine, 35000 Rennes",
    },
    highlights: [
      "프랑스식 정형 정원의 기하학적 화단",
      "1,600종 이상의 장미가 피는 장미원 (6월 절정)",
      "이국적 식물이 가득한 온실",
      "조류 사육장과 놀이터",
      "일요일 오후 현지인의 피크닉 풍경",
    ],
    nearbyAttractions: ["렌 구시가지", "생멜랭 성당", "브르타뉴 의회"],
    tips: [
      "6월 장미 만개 시기에 방문하면 1,600종 이상의 장미를 감상할 수 있습니다.",
      "일요일 오후에 빵과 치즈를 사서 현지인처럼 피크닉을 즐겨보세요.",
      "공원 안 카페에서 간단한 음료와 간식을 구입할 수 있습니다.",
    ],
  },

  // ===== CAEN =====
  "france/normandy-brittany/caen/memorial-de-caen": {
    heroGradient: "from-slate-500 to-gray-700",
    description: "제2차 세계대전, D-Day 상륙 작전, 냉전, 그리고 평화를 주제로 한 세계적인 박물관입니다. 1988년 개관 이래 연간 40만 명이 방문하며, 전쟁의 비극과 평화의 가치를 깊이 있게 전달하는 전시로 유럽 최고의 전쟁 박물관으로 평가받고 있습니다.",
    history: "1988년 6월 6일 D-Day 44주년에 개관했으며, 독일군 지휘 벙커 위에 건설되었습니다. 1944년 카앙 전투로 도시의 70%가 파괴된 역사를 기리며, 전쟁의 원인과 결과, 평화의 소중함을 교육하는 것을 목적으로 합니다.",
    visitInfo: {
      hours: "매일 09:00~19:00 (시즌별 변동)",
      admission: "성인 €21.50 / 학생 €19 / 10세 미만 무료 / D-Day 해변 투어 별도",
      address: "Esplanade Général Eisenhower, 14050 Caen",
      website: "https://www.memorial-caen.fr",
    },
    highlights: [
      "2차대전 발발부터 D-Day까지 시간순 전시",
      "D-Day 상륙 작전 상세 전시 (지도, 영상, 유물)",
      "독일군 지휘 벙커 (지하 견학)",
      "냉전 전시관과 베를린 장벽 조각",
      "노벨 평화상 수상자 정원",
      "D-Day 해변 가이드 버스 투어 (영어 가능)",
    ],
    nearbyAttractions: ["카앙 성", "남성 수도원", "여성 수도원"],
    photoTips: "박물관 정원의 조각 작품과 평화 메시지가 새겨진 벽을 배경으로 의미 있는 사진을 남길 수 있습니다.",
    tips: [
      "전시 관람에 최소 3시간이 필요하며, D-Day 해변 투어까지 하면 하루가 소요됩니다.",
      "영어 오디오 가이드가 포함되어 있으며, 전시 설명도 영어가 병기되어 있습니다.",
      "D-Day 해변 가이드 투어는 사전 예약을 권장하며, 오전과 오후 투어가 있습니다.",
      "감정적으로 강렬한 전시가 많으므로 어린 자녀 동반 시 연령대를 고려하세요.",
    ],
  },
  "france/normandy-brittany/caen/abbaye-aux-hommes": {
    heroGradient: "from-stone-400 to-amber-600",
    description: "1063년 정복왕 윌리엄(기욤 르 콩케랑)이 교황의 파문을 풀기 위해 건립한 남성 수도원으로, 로마네스크 양식의 생테티엔 성당이 핵심입니다. 정복왕의 무덤이 이곳에 안치되어 있으며, 수도원 건물은 현재 카앙 시청으로 사용됩니다.",
    history: "윌리엄 공작이 사촌 마틸드와의 결혼으로 받은 교황의 파문을 속죄하기 위해 건립했습니다. 성당은 1077년 봉헌되었으며, 정복왕은 1087년 이곳에 묻혔습니다. 18세기에 모리스트 수도회가 수도원 건물을 재건하였고, 이 건물이 현재 카앙 시청입니다.",
    visitInfo: {
      hours: "성당 매일 08:15~19:30 / 시청 건물 가이드 투어 (시간 확인)",
      admission: "성당 무료 / 시청 건물 가이드 투어 약 €5",
      address: "Esplanade Jean-Marie Louvel, 14000 Caen",
    },
    highlights: [
      "노르만 로마네스크 양식의 웅장한 성당 내부",
      "정복왕 윌리엄의 묘소",
      "18세기 수도원 건물(현 시청)의 회랑과 정원",
      "성당 파사드의 쌍탑",
    ],
    nearbyAttractions: ["여성 수도원", "카앙 성", "카앙 메모리얼"],
    tips: [
      "성당은 무료로 자유 관람이 가능하지만, 수도원(시청) 건물 내부는 가이드 투어가 필요합니다.",
      "정복왕의 묘소는 성당 제단 앞 바닥에 간소한 석판으로 표시되어 있습니다.",
      "여성 수도원과 함께 방문하면 윌리엄과 마틸드의 이야기를 완성할 수 있습니다.",
    ],
  },
  "france/normandy-brittany/caen/chateau-de-caen": {
    heroGradient: "from-amber-500 to-stone-600",
    description: "정복왕 윌리엄이 1060년경 건설을 시작한 유럽 최대 규모의 중세 성채 중 하나입니다. 5.5헥타르의 성벽 안에 노르망디 미술관과 카앙 박물관이 있으며, 성벽 위를 걸으며 카앙 시내와 수도원의 파노라마를 감상할 수 있습니다.",
    history: "1060년경 윌리엄 공작(후에 잉글랜드 왕 윌리엄 1세)이 건설을 시작했으며, 후대에 걸쳐 확장되었습니다. 백년전쟁과 종교전쟁을 거치며 군사 요새로 사용되었고, 2차대전 중에는 독일군 주둔지였습니다. 현재는 박물관과 공원으로 활용됩니다.",
    visitInfo: {
      hours: "성벽 매일 06:00~21:00 (동절기 ~19:30) / 박물관 수~월 09:30~12:30, 14:00~18:00",
      admission: "성벽 무료 / 노르망디 미술관 €5",
      address: "Château de Caen, 14000 Caen",
    },
    highlights: [
      "성벽 위 산책로에서 카앙 시내 360도 파노라마",
      "12세기 재무부 건물(Échiquier) 유적",
      "노르망디 미술관의 인상파 컬렉션",
      "성 안 잔디밭에서의 휴식",
    ],
    nearbyAttractions: ["남성 수도원", "생피에르 교회", "바상 생피에르"],
    tips: [
      "성벽 산책은 무료이며, 남성 수도원과 여성 수도원 방향의 전망이 특히 좋습니다.",
      "성 내부의 노르망디 미술관에는 페루지노, 루벤스 등의 작품이 소장되어 있습니다.",
      "여름에는 성 안에서 야외 공연과 축제가 열립니다.",
    ],
  },

  // ===== ANNECY =====
  "france/alsace-east/annecy/palais-de-l-ile": {
    heroGradient: "from-cyan-400 to-teal-600",
    description: "안시의 가장 상징적인 건물로, 12세기에 건설된 삼각형 모양의 석조 건축물이 티우 운하 한가운데에 떠 있는 듯 자리하고 있습니다. 옛 감옥, 법원, 행정 건물로 사용되었으며, 현재는 소규모 역사 박물관으로 운영됩니다. 안시의 포스트카드에 가장 많이 등장하는 포토 스팟입니다.",
    history: "12세기에 건설되어 제네바 백작의 행정 건물, 감옥, 법원 등 다양한 용도로 사용되었습니다. 섬 위에 지어진 독특한 위치 때문에 '안시의 바스티유'라는 별명으로 불리기도 했습니다. 1900년에 역사기념물로 지정되었습니다.",
    visitInfo: {
      hours: "수~월 10:30~18:00 (6~9월 매일) / 화요일 휴관 (성수기 제외)",
      admission: "성인 €3.80 / 통합권(안시 성 포함) €7",
      address: "3 Passage de l'Île, 74000 Annecy",
    },
    highlights: [
      "운하 위에 떠 있는 듯한 삼각형 건물 외관",
      "내부 역사 전시 (안시의 건축과 역사)",
      "건물 양쪽으로 흐르는 티우 운하의 투명한 물",
      "페리에르 다리에서 바라보는 클래식 포토 뷰",
    ],
    nearbyAttractions: ["안시 성", "생클레르 거리", "사랑의 다리"],
    photoTips: "페리에르 다리 위에서 운하와 함께 팔레 드 릴을 정면으로 담는 앵글이 가장 클래식합니다. 이른 아침 관광객이 없을 때 촬영하면 잔잔한 수면에 건물이 반사되는 사진을 얻을 수 있습니다.",
    tips: [
      "외부에서 사진을 찍는 것만으로도 충분히 만족스럽지만, 내부 전시도 소규모라 15~20분이면 관람합니다.",
      "안시 성과의 통합권을 구매하면 더 저렴합니다.",
      "주변 운하변 카페에서 커피를 마시며 건물을 감상하는 것이 안시 여행의 정수입니다.",
    ],
  },
  "france/alsace-east/annecy/lake-annecy": {
    heroGradient: "from-sky-400 to-cyan-600",
    description: "유럽에서 가장 깨끗한 호수로 알려진 안시 호수는 알프스 빙하가 녹아 형성된 14.9km² 규모의 호수입니다. 에메랄드빛에서 사파이어빛까지 변하는 투명한 물, 호수 주변을 둘러싼 알프스 산맥의 장관, 그리고 호숫가 공원과 해변이 완벽한 휴식을 제공합니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료 (보트, 자전거 대여 별도)",
      address: "Lake Annecy, 74000 Annecy",
    },
    highlights: [
      "유럽 정원(Jardins de l'Europe)에서 호수와 알프스 조망",
      "호수 한 바퀴 자전거 투어 (약 40km)",
      "여름 호수 수영 (수온 22~24도)",
      "유람선으로 호수 주변 마을 탐방",
      "카약, 패들보드, 페달보트 등 수상 스포츠",
    ],
    nearbyAttractions: ["팔레 드 릴", "사랑의 다리", "안시 구시가지"],
    photoTips: "사랑의 다리(Pont des Amours)에서 호수와 알프스를 배경으로 촬영하면 안시의 정수를 담을 수 있습니다. 일출 시간에 호수 표면이 거울처럼 고요할 때가 최고의 촬영 타이밍입니다.",
    tips: [
      "호수 한 바퀴 자전거 코스(약 40km)는 대부분 평탄하며 4~5시간 소요됩니다.",
      "여름에는 알비니 해변과 유럽 정원 해변에서 무료로 수영할 수 있습니다.",
      "유람선은 안시에서 출발하여 탈루아르, 멘통 등 호수 주변 마을을 연결합니다.",
      "자전거 대여소(Vélonecy)가 호수 주변 곳곳에 있으며 반일 대여가 가능합니다.",
    ],
  },
  "france/alsace-east/annecy/chateau-d-annecy": {
    heroGradient: "from-stone-400 to-slate-600",
    description: "안시 구시가지 위 언덕에 자리한 12~16세기 성으로, 제네바 백작과 사부아 공작의 거성이었습니다. 현재는 안시 지역의 자연사, 고고학, 중세 미술 전시를 볼 수 있는 박물관으로 운영되며, 성에서 내려다보는 안시 구시가지의 알록달록한 지붕과 호수 풍경이 아름답습니다.",
    history: "12세기에 건설이 시작되어 16세기까지 증축된 성으로, 제네바 백작의 본거지였습니다. 17세기에 방치되어 폐허가 되었다가 1953년 안시 시가 매입하여 박물관으로 복원했습니다.",
    visitInfo: {
      hours: "수~월 10:30~18:00 (6~9월 매일) / 화요일 휴관 (성수기 제외)",
      admission: "성인 €5.50 / 통합권(팔레 드 릴 포함) €7",
      address: "1 Place du Château, 74000 Annecy",
    },
    highlights: [
      "성에서 내려다보는 안시 구시가지와 호수 파노라마",
      "중세 무기와 갑옷 전시",
      "알프스 지역 자연사 전시 (광물, 동식물)",
      "기획 전시 (연중 변동)",
    ],
    nearbyAttractions: ["팔레 드 릴", "안시 구시가지", "생클레르 거리"],
    tips: [
      "팔레 드 릴과의 통합권이 경제적이며, 두 곳 모두 반나절이면 관람합니다.",
      "성까지 올라가는 길이 가파르므로 편한 신발을 착용하세요.",
      "성 정원에서 쉬며 안시 구시가지를 내려다보는 시간을 가져보세요.",
    ],
  },

  // ===== REIMS =====
  "france/alsace-east/reims/reims-cathedral": {
    heroGradient: "from-amber-400 to-yellow-700",
    description: "13세기 프랑스 고딕 건축의 최고 걸작으로, 498년 클로비스 1세부터 1825년 샤를 10세까지 프랑스 역대 왕 25명의 대관식이 거행된 성스러운 장소입니다. 서쪽 파사드에는 2,303개의 조각상이 장식되어 있으며, 그 중 '미소 짓는 천사(L'Ange au Sourire)'가 랭스 대성당의 상징입니다.",
    history: "1211년 착공하여 약 80년에 걸쳐 완공되었습니다. 제1차 세계대전 중 독일군 포격으로 지붕과 스테인드글라스가 파괴되었으나, 록펠러 재단의 후원으로 복원되었습니다. 1974년 마르크 샤갈이 디자인한 스테인드글라스가 추가 설치되었습니다.",
    visitInfo: {
      hours: "매일 07:30~19:30 / 타워 투어: 토~일 (계절별 변동)",
      admission: "성당 무료 / 타워 €11",
      address: "Place du Cardinal Luçon, 51100 Reims",
      website: "https://www.cathedrale-reims.fr",
    },
    highlights: [
      "서쪽 파사드의 2,303개 조각상과 '미소 짓는 천사'",
      "마르크 샤갈이 디자인한 블루 스테인드글라스 (1974)",
      "장미 창(Rose Window)의 정교한 트레이서리",
      "대관식의 역사를 보여주는 내부 전시",
      "여름 야간 조명 쇼 'Régalia'",
    ],
    nearbyAttractions: ["토 궁전", "카네기 도서관", "드로에 데를롱 광장"],
    photoTips: "서쪽 파사드 전체를 담으려면 맞은편 광장에서 촬영하세요. '미소 짓는 천사'는 서쪽 파사드 왼쪽 포탈 위에 있으며, 망원렌즈가 필요합니다.",
    tips: [
      "성당 내부는 무료이며 자유 관람이 가능하지만, 타워 투어는 별도 예약이 필요합니다.",
      "샤갈의 스테인드글라스는 축제단(apse) 뒤편에 있으니 놓치지 마세요.",
      "여름 시즌 야간 조명 쇼 'Régalia'는 무료로 성당 파사드에 프로젝션 맵핑을 투사합니다.",
      "일요일 미사 시간에는 관광이 제한될 수 있으니 참고하세요.",
    ],
  },
  "france/alsace-east/reims/veuve-clicquot-cellars": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "1772년 설립된 세계에서 가장 유명한 샴페인 하우스 중 하나로, 노란색 라벨의 아이코닉한 브뤼 샴페인으로 알려져 있습니다. 갈로-로마 시대에 만들어진 크레에르(석회암 지하 터널)에서 수백만 병의 샴페인이 숙성되고 있으며, 셀러 투어를 통해 샴페인 제조 과정과 시음을 경험할 수 있습니다.",
    history: "1772년 필리프 클리코가 설립했으며, 그의 며느리 바르브 니콜 클리코(마담 클리코)가 과부가 된 후 혁신적인 경영으로 하우스를 세계적 브랜드로 성장시켰습니다. 그녀가 발명한 르뮈아주(병목 침전물 제거) 기법은 현대 샴페인 제조의 기초가 되었습니다.",
    visitInfo: {
      hours: "셀러 투어: 화~토 10:00~17:30 (시즌별 변동) / 사전 예약 필수",
      admission: "클래식 투어 + 시음 약 €30~50",
      address: "1 Place des Droits de l'Homme, 51100 Reims",
      website: "https://www.veuveclicquot.com",
    },
    highlights: [
      "갈로-로마 시대 석회암 지하 터널(크레에르) 탐험",
      "수백만 병의 샴페인이 숙성되는 지하 셀러",
      "마담 클리코의 혁신적 르뮈아주 기법 시연",
      "프레스티지 큐베 라 그랑담 시음",
      "브랜드 역사와 노란 라벨의 스토리",
    ],
    nearbyAttractions: ["랭스 대성당", "테탱제 셀러", "포므리 셀러"],
    tips: [
      "투어는 수주 전에 마감되므로 방문 최소 2~3주 전에 온라인 예약하세요.",
      "지하 셀러는 연중 10~12도를 유지하므로 여름에도 겉옷을 챙기세요.",
      "시음 시 침을 뱉는 것도 허용되므로 여러 종류를 맛보세요.",
      "기념품 숍에서 구매하는 샴페인은 시중 가격과 비슷하거나 약간 비쌉니다.",
    ],
  },
  "france/alsace-east/reims/taittinger-cellars": {
    heroGradient: "from-amber-300 to-yellow-600",
    description: "4세기 갈로-로마 시대 석회암 채석장과 13세기 생니케즈 수도원 지하 크립트를 셀러로 사용하는 테탱제는 랭스에서 가장 역사적이고 분위기 있는 셀러 투어를 제공합니다. 4km에 달하는 지하 터널에서 수백만 병의 샴페인이 숙성되는 장관을 볼 수 있습니다.",
    history: "현재의 셀러는 4세기 로마인이 석회암을 채굴한 채석장에서 시작되었으며, 13세기 생니케즈 수도원 수도사들이 이곳에서 와인을 저장했습니다. 1734년에 상파뉴 최초의 와인 하우스 중 하나로 설립되었고, 1932년 피에르 테탱제가 인수하여 현재의 이름이 되었습니다.",
    visitInfo: {
      hours: "셀러 투어: 매일 09:30~17:30 (시즌별 변동) / 사전 예약 권장",
      admission: "클래식 투어 + 시음 약 €25~40",
      address: "9 Place Saint-Nicaise, 51100 Reims",
      website: "https://www.taittinger.com",
    },
    highlights: [
      "4세기 갈로-로마 석회암 채석장의 웅장한 지하 공간",
      "13세기 생니케즈 수도원 크립트의 신비로운 분위기",
      "4km 지하 터널의 샴페인 숙성 광경",
      "꽁트 드 샹파뉴(프레스티지 큐베) 시음",
    ],
    nearbyAttractions: ["뵈브 클리코 셀러", "랭스 대성당", "생레미 바실리카"],
    photoTips: "지하 크립트의 아치형 천장과 샴페인 병이 줄지어 있는 장면이 인상적입니다. 어두운 환경이므로 플래시 없이 느린 셔터 속도로 촬영하거나 스마트폰 야간 모드를 사용하세요.",
    tips: [
      "뵈브 클리코보다 예약이 수월하지만, 성수기에는 사전 예약을 권장합니다.",
      "지하 셀러 온도가 10도 전후이므로 따뜻한 겉옷이 필수입니다.",
      "가이드가 영어로 설명해주며, 샴페인 제조의 전 과정을 상세히 알 수 있습니다.",
      "투어 후 시음 공간에서 여유롭게 2~3종의 샴페인을 비교 시음합니다.",
    ],
  },

  // ===== LOURDES =====
  "france/southwest-bordeaux/lourdes/grotto-of-massabielle": {
    heroGradient: "from-sky-300 to-blue-600",
    description: "1858년 2월 11일부터 7월 16일까지 14세 소녀 베르나데트 수비루에게 성모 마리아가 18차례 발현한 것으로 전해지는 가톨릭 세계 최대의 성지입니다. 동굴 안 성모상 앞에서 기도하는 순례자의 줄이 하루 종일 끊이지 않으며, 동굴 벽에서 나오는 성수는 치유의 능력이 있다고 믿어집니다.",
    history: "1858년 베르나데트 수비루가 가브 강변의 이 동굴에서 '원죄 없이 잉태된 여인'을 보았다고 증언했습니다. 교회는 1862년 이를 공식 인정했으며, 이후 루르드는 세계 최대의 가톨릭 순례지로 성장하여 매년 600만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "매일 05:00~24:00 (미사 및 행사 시간에 따라 변동)",
      admission: "무료",
      address: "1 Avenue Monseigneur Théas, 65100 Lourdes",
      website: "https://www.lourdes-france.org",
    },
    highlights: [
      "동굴 안 성모 발현 장소에서 기도",
      "동굴 벽면을 만지며 지나가는 순례 행렬",
      "무료 성수 수도꼭지에서 성수 받기",
      "바실리카 위에서 내려다보는 성지 전경",
    ],
    nearbyAttractions: ["루르드 바실리카", "촛불 행렬 광장", "루르드 성"],
    tips: [
      "이른 아침(6~7시)이나 늦은 밤(22시 이후)에 방문하면 조용하게 기도할 수 있습니다.",
      "동굴 통과에 30분~1시간 정도 대기할 수 있으니 인내심을 가지세요.",
      "성수는 성지 입구 수도꼭지에서 무료로 받을 수 있으며, 빈 병을 가져가세요.",
      "종교적 공간이므로 조용히 행동하고, 사진 촬영 시 플래시를 사용하지 마세요.",
    ],
  },
  "france/southwest-bordeaux/lourdes/basilica-of-our-lady-of-lourdes": {
    heroGradient: "from-white to-sky-400",
    description: "마사비엘 동굴 위에 세워진 3층 구조의 바실리카로, 위로부터 무염시태 바실리카(1876), 로사리오 바실리카(1889), 그리고 지하의 성 비오 10세 바실리카(1958)로 구성됩니다. 지하 바실리카는 길이 200m, 폭 80m로 25,000명을 수용할 수 있는 세계 최대의 지하 성당입니다.",
    history: "성모 발현 이후 순례자 수가 급증하면서 상부 바실리카(1876)가 먼저 건설되었고, 이어서 로사리오 바실리카(1889)가 추가되었습니다. 1958년에는 교황 비오 10세의 이름을 딴 거대한 지하 바실리카가 완공되어 대규모 순례단을 수용할 수 있게 되었습니다.",
    visitInfo: {
      hours: "매일 06:00~22:00 (미사 시간 확인)",
      admission: "무료",
      address: "1 Avenue Monseigneur Théas, 65100 Lourdes",
    },
    highlights: [
      "네오고딕 양식의 상부 무염시태 바실리카",
      "비잔틴 모자이크로 장식된 로사리오 바실리카",
      "25,000명 수용 가능한 지하 성 비오 10세 바실리카",
      "세 바실리카를 연결하는 경사로와 계단 구조",
    ],
    nearbyAttractions: ["마사비엘 동굴", "촛불 행렬 광장", "루르드 성"],
    tips: [
      "지하 비오 10세 바실리카는 겉보기에 평범해 보이지만 내부의 거대한 규모에 놀라게 됩니다.",
      "로사리오 바실리카의 15개 모자이크 채플은 각각 다른 모자이크로 장식되어 볼거리가 풍부합니다.",
      "국제 미사(영어, 이탈리아어, 독일어 등)가 정기적으로 열리니 일정을 확인하세요.",
    ],
  },
  "france/southwest-bordeaux/lourdes/pic-du-midi-observatory": {
    heroGradient: "from-indigo-500 to-violet-700",
    description: "해발 2,877m 피레네 산맥 정상에 위치한 천문대로, 케이블카로 올라가 360도 피레네 산맥 파노라마와 밤하늘 별 관측을 즐길 수 있습니다. 맑은 날에는 프랑스와 스페인 양쪽의 피레네 봉우리가 한눈에 들어오며, 천문학 박물관과 테라스 전망대가 있습니다.",
    history: "1878년 기상 관측소로 시작하여 1908년 천문대가 설치되었습니다. NASA와 협력하여 달 표면 사진을 촬영한 역사가 있으며, 2000년부터 일반 관광객에게 개방되었습니다. 2013년 국제 암흑 하늘 보호구역으로 지정되었습니다.",
    visitInfo: {
      hours: "케이블카 09:00~19:00 (시즌별 변동) / 야간 관측 프로그램 별도",
      admission: "성인 약 €42 (케이블카 왕복 포함) / 야간 체험 약 €120",
      address: "La Mongie, 65200 Bagnères-de-Bigorre (루르드에서 차량 35분)",
      website: "https://www.picdumidi.com",
    },
    highlights: [
      "해발 2,877m에서 360도 피레네 산맥 파노라마",
      "천문학 박물관과 망원경 전시",
      "맑은 밤하늘 별 관측 프로그램",
      "테라스에서 프랑스-스페인 국경 산맥 조망",
      "겨울 스키 시즌에는 프랑스 최고 고도 스키장",
    ],
    nearbyAttractions: ["루르드 성지", "가바르니 폭포", "피레네 국립공원"],
    photoTips: "정상 테라스에서 파노라마 사진을 촬영하세요. 일출과 일몰 시간대가 가장 극적이며, 야간에는 은하수 촬영이 가능합니다.",
    tips: [
      "날씨에 따라 케이블카 운행이 중단될 수 있으므로 당일 아침에 웹사이트에서 확인하세요.",
      "정상은 평지보다 15~20도 낮으므로 여름에도 두꺼운 겉옷이 필수입니다.",
      "야간 별 관측 체험은 정상에서 1박하는 프로그램으로 매우 인기가 높아 일찍 예약하세요.",
      "고도가 높으므로 천천히 이동하고, 어지러움을 느끼면 휴식을 취하세요.",
    ],
  },

  // ===== PAU =====
  "france/southwest-bordeaux/pau/chateau-de-pau": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "부르봉 왕가의 시조이자 '좋은 왕 앙리'로 불리는 앙리 4세가 1553년 12월 13일 태어난 르네상스 성입니다. 거대한 거북이 등껍질로 만든 아기 요람, 고블랭 태피스트리, 르네상스 가구 컬렉션이 전시되어 있으며, 성에서 바라보는 피레네 산맥의 전경이 장관입니다.",
    history: "10세기에 건설이 시작되어 15~16세기에 베아른 자작과 나바라 왕의 거성으로 확장되었습니다. 나바라의 잔 달브레(앙리 4세의 어머니)가 아들을 이곳에서 낳았으며, 앙리 4세는 후에 프랑스 왕이 되어 부르봉 왕조를 열었습니다. 19세기 루이 필립과 나폴레옹 3세가 대대적으로 복원했습니다.",
    visitInfo: {
      hours: "매일 09:30~12:30, 13:30~17:45 (여름 09:30~18:30, 점심 중단 없음)",
      admission: "성인 €7 / 18세 미만 무료 / 매월 첫째 일요일 무료",
      address: "2 Rue du Château, 64000 Pau",
      website: "https://www.chateau-pau.fr",
    },
    highlights: [
      "앙리 4세의 거북이 등껍질 요람",
      "100점 이상의 고블랭 태피스트리 컬렉션",
      "르네상스 및 19세기 왕실 가구",
      "성에서 바라보는 피레네 산맥 파노라마",
      "앙리 4세 관련 역사 전시",
    ],
    nearbyAttractions: ["블루바르 데 피레네", "보몽 공원", "포 국립미술관"],
    photoTips: "성 앞 광장에서 성 정면 전경을, 성 뒤편 테라스에서 피레네 산맥 배경의 사진을 촬영할 수 있습니다.",
    tips: [
      "가이드 투어로만 내부 관람이 가능하며 프랑스어·영어 투어가 있습니다. 투어 시작 시간을 확인하세요.",
      "매월 첫째 일요일 무료 입장이므로 일정에 맞추면 좋습니다.",
      "성 정원은 무료로 산책할 수 있으며 피레네 전망이 좋습니다.",
      "앙리 4세의 거북이 요람은 실제 유물로 꼭 볼 만합니다.",
    ],
  },
  "france/southwest-bordeaux/pau/boulevard-des-pyrenees": {
    heroGradient: "from-teal-400 to-green-600",
    description: "포 시내와 피레네 산맥을 연결하는 1.8km의 산책로로, 맑은 날에는 피레네 산맥의 만년설 봉우리 150km 파노라마가 펼쳐집니다. 라마르틴이 '나폴리의 바다 전망에 비견될 만한 세상에서 가장 아름다운 땅의 풍경'이라 극찬한 곳입니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Boulevard des Pyrénées, 64000 Pau",
    },
    highlights: [
      "150km에 걸친 피레네 산맥 파노라마",
      "만년설 봉우리(픽 뒤 미디 두소, 픽 다니에 등) 조망",
      "방향 안내판으로 각 봉우리 이름 확인",
      "보몽 공원과 팔레 보몽 전경",
      "무료 푸니쿨라로 연결되는 기차역",
    ],
    nearbyAttractions: ["포 성", "보몽 공원", "포 국립미술관"],
    photoTips: "일출 시 피레네 봉우리가 붉게 물드는 '알펜글로우' 현상을 촬영할 수 있습니다. 맑은 날을 택하는 것이 핵심이며, 겨울~초봄에 만년설이 가장 선명합니다.",
    tips: [
      "피레네 전망은 맑은 날에만 가능하므로 날씨를 확인하고 방문하세요.",
      "방향 안내판이 곳곳에 있어 어느 봉우리가 어느 것인지 알 수 있습니다.",
      "산책로 중간에 카페와 벤치가 있어 여유롭게 전망을 즐길 수 있습니다.",
      "일출 또는 일몰 시간에 방문하면 산맥이 붉게 물드는 장관을 볼 수 있습니다.",
    ],
  },
  "france/southwest-bordeaux/pau/parc-beaumont": {
    heroGradient: "from-lime-400 to-green-600",
    description: "블루바르 데 피레네 동쪽 끝에 위치한 11헥타르 규모의 영국식 풍경 정원으로, 레바논 삼나무, 세쿼이아, 목련 등 이국적 수목과 인공 호수, 폭포가 조화를 이루는 포 시민의 안식처입니다. 공원 안에는 카지노와 팔레 보몽(회의 센터)이 있습니다.",
    visitInfo: {
      hours: "매일 06:30~21:00 (여름 ~22:00)",
      admission: "무료",
      address: "Allées de Morlaàs, 64000 Pau",
    },
    highlights: [
      "100년 이상 된 레바논 삼나무와 세쿼이아 거목",
      "인공 호수와 폭포",
      "장미 정원과 계절별 꽃밭",
      "조깅 및 산책 트레일",
    ],
    nearbyAttractions: ["블루바르 데 피레네", "포 성", "포 시내 중심가"],
    tips: [
      "블루바르 데 피레네 산책 후 공원에서 쉬며 여유를 즐기는 것이 좋습니다.",
      "아이와 함께라면 놀이터와 호수의 오리 구경을 추천합니다.",
      "공원 내 카페에서 간단한 음료를 마시며 휴식할 수 있습니다.",
    ],
  },
};
