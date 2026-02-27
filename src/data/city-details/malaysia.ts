import type { CityDetail, AttractionDetail } from "../city-details";

export const malaysiaCityDetails: Record<string, CityDetail> = {
  // ===== KUALA LUMPUR =====
  "malaysia/kuala-lumpur/kuala-lumpur": {
    heroGradient: "from-sky-400 to-indigo-800",
    description: "말레이시아의 수도이자 동남아시아의 대표 대도시. 페트로나스 트윈 타워가 상징하는 현대적 스카이라인과 바투 동굴, 잘란 알로르 야시장 등 다채로운 문화가 공존하는 도시입니다.",
    bestTime: "3~9월 (건기, 특히 5~7월이 가장 쾌적)",
    stayArea: "부킷 빈탕 / KLCC 주변",
    transport: "LRT, MRT, 모노레일, Grab (통합 교통카드 Touch 'n Go)",
    districts: [
      { name: "KLCC", nameEn: "KLCC", description: "페트로나스 트윈 타워와 수리아 KLCC 쇼핑몰이 있는 도심 핵심 지역.", highlights: ["페트로나스 트윈 타워", "KLCC 공원", "수리아 KLCC", "아쿠아리아 KLCC"] },
      { name: "부킷 빈탕", nameEn: "Bukit Bintang", description: "쇼핑, 맛집, 나이트라이프가 밀집한 번화가. 잘란 알로르 야시장이 유명합니다.", highlights: ["잘란 알로르", "파빌리온 KL", "로트 10", "창캇 부킷 빈탕"] },
      { name: "차이나타운", nameEn: "Chinatown", description: "페탈링 거리를 중심으로 한 역사적 중국인 거주지역. 힌두 사원과 이슬람 사원이 공존합니다.", highlights: ["페탈링 거리", "스리 마하마리암만 사원", "관디 사원", "중앙시장"] },
    ],
    attractions: [
      { name: "페트로나스 트윈 타워", nameEn: "Petronas Twin Towers", description: "452m 높이의 쌍둥이 빌딩으로 말레이시아의 상징. 스카이브릿지와 전망대에서 도시 전경을 감상할 수 있습니다.", category: "랜드마크", tip: "온라인 사전 예약 필수! 당일권은 오전에 매진됩니다." },
      { name: "바투 동굴", nameEn: "Batu Caves", description: "272개 계단 위의 힌두 사원이 있는 석회암 동굴로 거대한 무루간 신상이 인상적입니다.", category: "사원", tip: "아침 일찍 방문하면 원숭이와 인파를 피할 수 있습니다." },
      { name: "잘란 알로르 야시장", nameEn: "Jalan Alor Night Market", description: "말레이시아 최고의 길거리 음식 거리. 사테, 나시르막, 로티 차나이 등 다양한 현지 음식을 맛볼 수 있습니다.", category: "야시장", tip: "저녁 6시 이후에 노점이 본격적으로 열립니다." },
      { name: "KL 타워", nameEn: "KL Tower", description: "421m 통신 타워로 회전 레스토랑과 스카이덱 전망대 운영.", category: "전망대" },
      { name: "이슬람 예술 박물관", nameEn: "Islamic Arts Museum", description: "동남아 최대 규모의 이슬람 예술 박물관으로 정교한 건축 모형과 공예품 소장.", category: "박물관" },
      { name: "메르데카 광장", nameEn: "Merdeka Square", description: "1957년 말레이시아 독립이 선언된 역사적 광장. 무어 양식의 술탄 압둘 사마드 빌딩이 인상적입니다.", category: "광장" },
    ],
    dayTrips: [
      { name: "말라카", nameEn: "Malacca", description: "UNESCO 세계유산 도시로 포르투갈·네덜란드·영국 식민지 유산이 공존.", travelTime: "버스 약 2시간", gradient: "from-rose-400 to-red-700" },
      { name: "겐팅 하이랜드", nameEn: "Genting Highlands", description: "해발 1,800m의 고원 리조트로 테마파크, 카지노, 쇼핑몰 보유.", travelTime: "버스 약 1시간", gradient: "from-emerald-400 to-green-700" },
    ],
    localFood: [
      { name: "나시르막", description: "코코넛 밀크로 지은 밥에 삼발, 멸치, 땅콩을 곁들인 말레이시아 국민 음식.", emoji: "🍚" },
      { name: "사테", description: "땅콩 소스와 함께 먹는 숯불 꼬치구이, 닭고기와 양고기가 인기.", emoji: "🍢" },
      { name: "로티 차나이", description: "바삭한 인도식 납작빵으로 달 커리에 찍어 먹는 아침 메뉴.", emoji: "🫓" },
    ],
    tips: [
      "Grab 앱은 택시보다 저렴하고 안전하니 필수 설치하세요.",
      "페트로나스 트윈 타워 티켓은 최소 일주일 전 온라인 예약이 안전합니다.",
      "모노레일·LRT·MRT를 아우르는 Touch 'n Go 카드를 구매하면 편리합니다.",
      "바투 동굴 방문 시 무릎 아래 길이의 옷을 입어야 입장 가능합니다.",
    ],
  },

  // ===== PENANG & LANGKAWI =====
  "malaysia/penang-langkawi/penang": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "동양의 진주라 불리는 페낭. 조지타운은 UNESCO 세계유산으로 식민지 시대 건축물과 스트리트 아트, 그리고 말레이시아 최고의 길거리 음식이 어우러진 미식의 수도입니다.",
    bestTime: "12~3월 (건기)",
    stayArea: "조지타운 구시가지 / 거니 드라이브 주변",
    transport: "Rapid Penang 버스, Grab, 자전거",
    districts: [
      { name: "조지타운", nameEn: "George Town", description: "UNESCO 세계유산 구시가지로 식민지 건축, 스트리트 아트, 족집게 맛집이 가득.", highlights: ["스트리트 아트", "클랜 제티", "카피탄 클링 모스크", "청팟지 맨션"] },
      { name: "거니 드라이브", nameEn: "Gurney Drive", description: "해안가 산책로와 호커센터가 있는 현대적 지역.", highlights: ["거니 드라이브 호커센터", "거니 플라자", "해안 산책로"] },
    ],
    attractions: [
      { name: "조지타운 스트리트 아트", nameEn: "George Town Street Art", description: "어니스트 자카레빅의 벽화를 비롯해 구시가지 전체에 퍼진 거리 예술 작품. 보물찾기처럼 골목골목 작품을 찾아다니는 재미가 있습니다.", category: "거리예술", tip: "아르메니안 거리와 아체 거리 주변에 작품이 밀집해 있습니다." },
      { name: "페낭 힐", nameEn: "Penang Hill", description: "해발 833m의 전망대로 케이블카(퓨니큘러)를 타고 올라가며 페낭 섬 전체를 조망할 수 있습니다.", category: "전망대", tip: "일몰 시간에 맞춰 올라가면 야경까지 감상 가능합니다." },
      { name: "켁록시 사원", nameEn: "Kek Lok Si Temple", description: "동남아 최대 규모의 불교 사원으로 7층 만불탑과 거대한 관음상이 장관.", category: "사원" },
      { name: "클랜 제티", nameEn: "Clan Jetties", description: "바다 위에 지어진 중국계 수상 마을로 19세기부터 씨족별로 형성된 독특한 거주지.", category: "문화유산" },
    ],
    dayTrips: [
      { name: "랑카위", nameEn: "Langkawi", description: "면세 섬으로 에메랄드빛 바다와 맹그로브 투어가 유명.", travelTime: "페리 약 2시간 45분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "차궤티아오", description: "새우, 조개, 숙주와 함께 볶은 넓적한 쌀국수. 페낭의 대표 음식.", emoji: "🍜" },
      { name: "아삼 락사", description: "생선 육수에 타마린드 소스를 넣은 새콤한 쌀국수.", emoji: "🍲" },
      { name: "나시칸다르", description: "인도 무슬림식 커리 뷔페로 다양한 반찬을 골라 밥 위에 얹어 먹는 스타일.", emoji: "🍛" },
    ],
    tips: [
      "조지타운 스트리트 아트는 비가 오면 벽화가 훼손될 수 있으니 맑은 날 방문 추천.",
      "호커센터에서 현금 결제가 기본이니 소액 링깃을 준비하세요.",
      "페낭 힐 케이블카는 주말에 대기 시간이 길어 평일 방문이 좋습니다.",
    ],
  },
  "malaysia/penang-langkawi/langkawi": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "99개 섬으로 이루어진 면세 휴양지. 에메랄드빛 바다, 울창한 맹그로브 숲, 그리고 하늘 위를 걷는 듯한 스카이 브릿지로 유명한 말레이시아 대표 리조트 섬입니다.",
    bestTime: "11~3월 (건기, 특히 12~2월 최적)",
    stayArea: "판타이 체낭 / 판타이 텡아",
    transport: "렌터카 또는 Grab (대중교통 미비)",
    districts: [
      { name: "판타이 체낭", nameEn: "Pantai Cenang", description: "랑카위 최고의 해변으로 레스토랑, 바, 면세점이 밀집한 메인 관광지.", highlights: ["체낭 비치", "언더워터 월드", "면세 쇼핑몰", "야시장"] },
      { name: "킬림 지오포레스트 파크", nameEn: "Kilim Geoforest Park", description: "유네스코 지질공원으로 맹그로브 카약과 독수리 먹이주기 체험이 가능.", highlights: ["맹그로브 투어", "독수리 먹이주기", "동굴 탐험", "수상 양식장 레스토랑"] },
    ],
    attractions: [
      { name: "랑카위 스카이 브릿지", nameEn: "Langkawi Sky Bridge", description: "해발 660m에 설치된 125m 길이의 곡선형 보행 다리. 케이블카를 타고 올라가 열대우림과 안다만해를 한눈에 조망합니다.", category: "전망대", tip: "오전 10시 이전에 방문하면 구름이 적어 시야가 좋습니다." },
      { name: "킬림 맹그로브 투어", nameEn: "Kilim Mangrove Tour", description: "보트를 타고 맹그로브 숲을 탐험하며 독수리, 원숭이, 수달을 관찰.", category: "자연투어" },
      { name: "탄중 루 해변", nameEn: "Tanjung Rhu Beach", description: "랑카위에서 가장 아름답고 한적한 백사장 해변.", category: "해변" },
    ],
    dayTrips: [
      { name: "다양 분팅 섬", nameEn: "Dayang Bunting Island", description: "임신한 여인의 전설이 있는 담수 호수 섬. 수영과 카약 가능.", travelTime: "보트 약 20분", gradient: "from-teal-400 to-emerald-700" },
    ],
    localFood: [
      { name: "이칸 바카르", description: "바나나 잎에 싸서 숯불에 구운 생선, 삼발 소스 곁들임.", emoji: "🐟" },
      { name: "미 고렝", description: "말레이식 볶음면으로 달콤매콤한 소스가 특징.", emoji: "🍝" },
    ],
    tips: [
      "렌터카가 가장 편리한 교통수단입니다 (국제운전면허증 필요).",
      "면세 섬이므로 초콜릿, 주류 쇼핑이 매우 저렴합니다.",
      "스카이 브릿지는 강풍·폭우 시 운행 중단되니 날씨를 확인하세요.",
    ],
  },

  // ===== BORNEO =====
  "malaysia/borneo/kota-kinabalu": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "사바주의 주도이자 동남아시아 최고봉 키나발루산(4,095m)의 관문 도시. 선셋이 아름다운 해변, 섬 호핑, 그리고 보르네오 열대우림 탐험의 거점입니다.",
    bestTime: "3~9월 (건기, 키나발루산 등반은 3~4월 최적)",
    stayArea: "시내 워터프론트 / 제셀턴 포인트 주변",
    transport: "Grab, 미니버스, 택시",
    districts: [
      { name: "시내 워터프론트", nameEn: "City Waterfront", description: "선셋이 유명한 해변과 야시장, 쇼핑몰이 있는 도심 지역.", highlights: ["제셀턴 포인트", "워터프론트 야시장", "필리피노 마켓", "시그널 힐 전망대"] },
    ],
    attractions: [
      { name: "키나발루산", nameEn: "Mount Kinabalu", description: "해발 4,095m의 동남아 최고봉. 2일 등반 코스가 일반적이며 산 정상에서의 일출이 장관입니다.", category: "산", tip: "등반 허가증은 수개월 전 예약 필수. 하루 입산 인원이 제한됩니다." },
      { name: "뚠꾸 압둘 라만 해양공원", nameEn: "Tunku Abdul Rahman Marine Park", description: "5개 섬으로 구성된 해양공원으로 스노클링과 다이빙 명소.", category: "해양공원", tip: "사피 섬과 마누칸 섬 콤보 투어가 인기입니다." },
      { name: "필리피노 마켓", nameEn: "Filipino Market", description: "진주 공예품, 기념품, 해산물을 파는 활기 넘치는 재래시장.", category: "시장" },
    ],
    dayTrips: [
      { name: "키나발루 국립공원", nameEn: "Kinabalu National Park", description: "UNESCO 세계유산으로 다양한 열대 동식물과 캐노피 워크웨이.", travelTime: "차로 약 2시간", gradient: "from-green-400 to-teal-700" },
      { name: "쿤다상", nameEn: "Kundasang", description: "키나발루산 자락의 고원 마을로 딸기 농장과 전쟁 기념비.", travelTime: "차로 약 2시간", gradient: "from-lime-400 to-green-700" },
    ],
    localFood: [
      { name: "씨푸드 BBQ", description: "워터프론트 야시장에서 갓 잡은 해산물을 숯불에 구워 먹는 로컬 스타일.", emoji: "🦐" },
      { name: "히누바", description: "사바 전통 생선 샐러드로 라임즙에 절인 신선한 생선 요리.", emoji: "🐟" },
      { name: "뚜아란 미", description: "사바식 수제 계란면으로 차슈와 함께 제공.", emoji: "🍜" },
    ],
    tips: [
      "키나발루산 등반은 체력 준비와 사전 허가증 예약이 필수입니다.",
      "선셋 감상은 탄중아루 비치가 최고의 포인트입니다.",
      "섬 호핑 투어는 제셀턴 포인트에서 출발하며 오전에 출발하는 것이 좋습니다.",
      "우기(10~2월)에도 오전은 맑은 경우가 많으니 오전 활동을 추천합니다.",
    ],
  },
  "malaysia/borneo/kuching": {
    heroGradient: "from-teal-500 to-green-800",
    description: "사라왁주의 주도로 '고양이의 도시'라는 뜻을 가진 보르네오의 문화 중심지. 사라왁 강변의 아름다운 워터프론트, 원주민 문화, 오랑우탄 재활 센터로 유명합니다.",
    bestTime: "4~9월 (건기)",
    stayArea: "워터프론트 / 카펜터 거리 주변",
    transport: "Grab, 시내버스, 보트",
    districts: [
      { name: "워터프론트", nameEn: "Waterfront", description: "사라왁 강변 산책로와 주의회 건물, 레스토랑이 늘어선 도심 중심지.", highlights: ["워터프론트 산책로", "사라왁 주의회 건물", "광장 탑", "카펜터 거리"] },
      { name: "인디아 스트리트", nameEn: "India Street", description: "인도계 상인들이 모인 전통 상가 지역으로 직물과 향신료를 판매.", highlights: ["인디아 거리 재래시장", "텍스타일 숍", "향신료 가게"] },
    ],
    attractions: [
      { name: "사라왁 문화 마을", nameEn: "Sarawak Cultural Village", description: "사라왁 원주민 7개 부족의 전통 가옥과 문화를 체험하는 리빙 뮤지엄. 전통 무용 공연과 공예 체험이 가능합니다.", category: "문화체험", tip: "오전 11시와 오후 4시에 전통 무용 공연이 있습니다." },
      { name: "세멩고 야생동물 센터", nameEn: "Semenggoh Wildlife Centre", description: "반야생 상태의 오랑우탄을 관찰할 수 있는 재활 센터.", category: "야생동물", tip: "먹이 시간(오전 9시, 오후 3시)에 맞춰 방문하세요." },
      { name: "바코 국립공원", nameEn: "Bako National Park", description: "보르네오 코주부원숭이를 야생에서 만날 수 있는 사라왁 최초의 국립공원.", category: "국립공원" },
      { name: "고양이 박물관", nameEn: "Cat Museum", description: "쿠칭의 상징인 고양이를 주제로 한 독특한 박물관으로 4,000점 이상 전시.", category: "박물관" },
    ],
    dayTrips: [
      { name: "바코 국립공원", nameEn: "Bako National Park", description: "코주부원숭이, 은엽원숭이, 카펫뱀 등 희귀 야생동물의 보고.", travelTime: "버스+보트 약 1시간", gradient: "from-green-400 to-lime-700" },
    ],
    localFood: [
      { name: "사라왁 락사", description: "코코넛 밀크와 삼발 기반의 매콤한 쌀국수. 쿠칭의 소울푸드.", emoji: "🍜" },
      { name: "콜로미", description: "사라왁식 비빔면으로 돼지기름 소스와 차슈가 특징.", emoji: "🍝" },
      { name: "마낭 투악", description: "사라왁 원주민의 전통 쌀술(라이스 와인).", emoji: "🍶" },
    ],
    tips: [
      "워터프론트에서 삼팬(나무 보트)을 타고 강 건너 마을을 방문해보세요 (MYR 1).",
      "세멩고 센터는 과일 시즌(11~2월)에 오랑우탄이 센터에 잘 나타나지 않을 수 있습니다.",
      "바코 국립공원은 당일치기 가능하지만 1박 하면 야행성 동물도 관찰할 수 있습니다.",
    ],
  },
};

export const malaysiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== KUALA LUMPUR =====
  "malaysia/kuala-lumpur/kuala-lumpur/petronas-twin-towers": {
    heroGradient: "from-sky-400 to-indigo-800",
    description: "452m 높이의 88층 쌍둥이 빌딩으로 1998년부터 2004년까지 세계 최고층 건물이었습니다. 이슬람 건축 양식에서 영감을 받은 팔각 평면 설계가 특징이며, 41~42층의 스카이브릿지와 86층 전망대에서 쿠알라룸푸르의 파노라마를 감상할 수 있습니다.",
    history: "1992년 착공하여 1998년 완공. 아르헨티나 건축가 세자르 펠리가 설계했으며, 이슬람 기하학 문양의 팔각 평면이 특징입니다. 말레이시아 국영 석유회사 페트로나스가 발주했습니다.",
    visitInfo: {
      hours: "화~일 09:00~21:00 (월요일 휴관, 공휴일 제외)",
      admission: "성인 MYR 98 / 어린이 MYR 52",
      address: "Kuala Lumpur City Centre, 50088 Kuala Lumpur",
      website: "https://www.petronastwintowers.com.my",
    },
    highlights: [
      "41~42층 스카이브릿지에서 두 타워 사이 공중 산책",
      "86층 전망대에서 360도 쿠알라룸푸르 파노라마",
      "야간 조명이 켜진 외관 (19:30~자정)",
      "KLCC 공원 분수쇼와 함께 감상하는 야경",
    ],
    nearbyAttractions: ["KLCC 공원", "수리아 KLCC", "아쿠아리아 KLCC", "KL 타워"],
    photoTips: "야경 촬영은 KLCC 공원 분수대 앞에서, 주간에는 건너편 트레이더스 호텔 스카이바에서 촬영하면 양쪽 타워를 균형 있게 담을 수 있습니다.",
    tips: [
      "티켓은 최소 일주일 전 온라인 예약 권장. 당일권은 오전 8시 30분부터 현장 판매하나 빠르게 매진됩니다.",
      "화~금 오전 시간대가 가장 여유롭습니다.",
      "KLCC 공원 분수쇼(20:00, 21:00, 22:00)와 함께 야경을 즐기세요.",
    ],
  },
  "malaysia/kuala-lumpur/kuala-lumpur/batu-caves": {
    heroGradient: "from-yellow-400 to-amber-700",
    description: "4억 년 된 석회암 동굴 속에 힌두 사원이 있는 말레이시아의 대표 종교·관광 명소. 높이 42.7m의 황금빛 무루간 신상과 무지개색으로 칠해진 272개 계단이 상징적입니다.",
    history: "1891년 인도 상인 탐보사미 필라이가 동굴을 발견하고 사원을 건립했습니다. 매년 1~2월 타이푸삼 축제 때 100만 명 이상의 참배객이 모입니다. 2018년 계단이 무지개색으로 재도장되어 새로운 포토 스팟이 되었습니다.",
    visitInfo: {
      hours: "06:00~21:00 (연중무휴)",
      admission: "무료 (다크 케이브 투어 MYR 35 별도)",
      address: "Gombak, 68100 Batu Caves, Selangor",
    },
    highlights: [
      "42.7m 높이의 황금 무루간 신상",
      "272개 무지개색 계단 오르기",
      "거대한 석회암 동굴 내부의 힌두 사원",
      "다크 케이브 생태 투어 (동굴 거미, 박쥐 관찰)",
    ],
    nearbyAttractions: ["라마야나 동굴", "다크 케이브", "쿠알라룸푸르 시내 (KTM 30분)"],
    photoTips: "계단 하단에서 올려다보며 무루간 신상과 계단 전체를 담는 구도가 가장 인기입니다. 오전 8시 이전이 인파가 적어 깔끔한 사진을 찍을 수 있습니다.",
    tips: [
      "원숭이가 많으니 음식과 빛나는 물건을 주의하세요.",
      "무릎 아래 길이의 옷을 입어야 합니다 (무료 사롱 대여 가능).",
      "KTM 커뮤터 열차로 KL 센트럴에서 30분이면 도착합니다.",
    ],
  },
  "malaysia/kuala-lumpur/kuala-lumpur/jalan-alor-night-market": {
    heroGradient: "from-orange-400 to-red-700",
    description: "부킷 빈탕 중심부에 위치한 쿠알라룸푸르 최대의 길거리 음식 거리. 매일 저녁 수십 개의 노점과 레스토랑이 열리며 말레이, 중국, 인도 등 다양한 말레이시아 음식을 한 거리에서 맛볼 수 있습니다.",
    visitInfo: {
      hours: "17:00~03:00 (매일)",
      admission: "무료 (음식 별도 구매)",
      address: "Jalan Alor, Bukit Bintang, 50200 Kuala Lumpur",
    },
    highlights: [
      "숯불 사테 꼬치 (닭, 양, 소고기)",
      "볶음 짜궤티아오와 호끼엔미",
      "BBQ 치킨 윙과 조개구이",
      "망고 스티키 라이스, 첸돌 등 열대 디저트",
    ],
    nearbyAttractions: ["파빌리온 KL", "로트 10 호커센터", "창캇 부킷 빈탕", "부킷 빈탕 모노레일역"],
    photoTips: "거리 전체를 담으려면 입구 쪽 높은 위치에서 빨간 등불이 켜진 저녁 시간에 촬영하세요.",
    tips: [
      "현금 결제가 기본이니 소액 링깃을 준비하세요.",
      "사테는 10꼬치(MYR 10~15) 단위로 주문합니다.",
      "주말과 공휴일에는 매우 붐비니 평일 저녁이 여유롭습니다.",
    ],
  },

  // ===== PENANG =====
  "malaysia/penang-langkawi/penang/george-town-street-art": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "리투아니아 출신 아티스트 어니스트 자카레빅이 2012년 조지타운 축제를 위해 그린 벽화 시리즈를 시작으로, 구시가지 골목 곳곳에 50여 개의 벽화와 철조 만화가 설치되어 있습니다. 조지타운의 역사적 건물과 어우러져 독특한 야외 갤러리를 형성합니다.",
    visitInfo: {
      hours: "24시간 (야외 설치 작품)",
      admission: "무료",
      address: "George Town Heritage Zone, Penang",
      website: "https://www.penang-street-art.com",
    },
    highlights: [
      "자전거를 탄 아이들 (아르메니안 거리) - 가장 유명한 벽화",
      "의자 위의 소년 (무스타파 거리)",
      "그네를 탄 형제 (스튜어트 레인)",
      "철조 만화 시리즈 - 페낭의 역사를 유머러스하게 표현",
    ],
    nearbyAttractions: ["클랜 제티", "청팟지 맨션", "카피탄 클링 모스크", "페낭 박물관"],
    photoTips: "벽화와 상호작용하는 포즈(자전거 안장에 앉기, 그네 잡기 등)로 촬영하면 재미있는 사진을 얻을 수 있습니다. 오전 시간이 그림자가 적고 인파도 적습니다.",
    tips: [
      "관광안내소에서 스트리트 아트 지도를 받으면 효율적으로 돌아볼 수 있습니다.",
      "도보 또는 자전거 대여(MYR 15~20/일)로 천천히 둘러보세요.",
      "벽화는 비에 훼손되므로 일부 작품은 상태가 변할 수 있습니다.",
    ],
  },
  "malaysia/penang-langkawi/penang/penang-hill": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "해발 833m의 페낭 최고봉으로 1923년부터 운행된 퓨니큘러(케이블카)를 타고 올라갑니다. 정상에서 조지타운, 본토, 랑카위까지 조망 가능하며 식민지 시대 별장과 열대 정원이 남아있습니다.",
    history: "영국 식민지 시대인 18세기 말 더위를 피해 영국인들이 별장을 짓기 시작했습니다. 1923년 스위스 기술로 퓨니큘러가 개통되었으며 2011년 현대식으로 교체되었습니다.",
    visitInfo: {
      hours: "06:30~23:00 (퓨니큘러 운행 시간)",
      admission: "외국인 MYR 30 (왕복) / 패스트레인 MYR 80",
      address: "Penang Hill, 11500 Penang",
      website: "https://www.penanghill.gov.my",
    },
    highlights: [
      "퓨니큘러 탑승 (약 5분, 경사 최대 27도)",
      "정상 전망대에서 조지타운과 안다만해 파노라마",
      "더 해비탯 - 캐노피 워크와 짚라인 체험",
      "일몰과 야경 감상 (일몰 시간 맞춤 추천)",
    ],
    nearbyAttractions: ["켁록시 사원", "페낭 식물원", "에어이탐 호커센터"],
    photoTips: "일몰 30분 전에 도착하여 석양과 야경 두 가지를 모두 촬영하세요. 삼각대를 가져가면 야경 사진 품질이 좋습니다.",
    tips: [
      "패스트레인 티켓(MYR 80)을 구매하면 대기 없이 바로 탑승 가능합니다.",
      "정상은 시내보다 5~8도 시원하니 얇은 겉옷을 준비하세요.",
      "주말과 공휴일은 케이블카 대기 시간이 1시간 이상일 수 있습니다.",
    ],
  },

  // ===== LANGKAWI =====
  "malaysia/penang-langkawi/langkawi/langkawi-sky-bridge": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "마친창산 해발 660m에 설치된 125m 길이의 곡선형 현수교. 단 하나의 지지대로 지탱되는 독특한 엔지니어링이 특징이며, 열대우림 캐노피와 안다만해의 장관을 발밑으로 내려다볼 수 있습니다.",
    history: "2005년 개통된 보행자 전용 현수교로, 말레이시아 정부가 랑카위 관광 활성화를 위해 건설했습니다. 2012년 보수 공사 후 재개장하며 유리 바닥 섹션이 추가되었습니다.",
    visitInfo: {
      hours: "09:30~19:00 (수요일 12:00~19:00)",
      admission: "케이블카+스카이브릿지 콤보 MYR 75 (성인)",
      address: "Machinchang Cambrian Geoforest Park, 07000 Langkawi",
      website: "https://www.panoramalangkawi.com",
    },
    highlights: [
      "125m 곡선형 현수교 위에서 열대우림 조망",
      "스카이캡 케이블카 탑승 (약 15분)",
      "유리 바닥 섹션에서 발 아래 계곡 감상",
      "중간역 SkyDome 3D 체험관",
    ],
    nearbyAttractions: ["오리엔탈 빌리지", "텔라가 투주 폭포", "다타이 베이"],
    photoTips: "스카이브릿지 전경은 중간역 전망대에서 촬영하고, 다리 위에서는 와이드 앵글로 발밑 열대우림까지 담으세요.",
    tips: [
      "오전 10시 이전 방문 시 구름이 적어 시야가 가장 좋습니다.",
      "강풍이나 뇌우 시 운행이 중단되니 사전에 날씨를 확인하세요.",
      "케이블카 대기 시간 단축을 위해 온라인 사전 구매를 추천합니다.",
    ],
  },

  // ===== KOTA KINABALU =====
  "malaysia/borneo/kota-kinabalu/mount-kinabalu": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "해발 4,095m의 동남아시아 최고봉. UNESCO 세계유산 키나발루 국립공원 내에 위치하며, 2일 1박 등반 코스를 통해 정상(로우스 피크)에서의 장엄한 일출을 감상할 수 있습니다.",
    history: "카다잔두순 원주민에게 신성한 산으로 '키나발루'는 '죽은 자의 안식처'를 의미합니다. 2000년 UNESCO 세계유산으로 등재되었으며 5,000종 이상의 식물이 서식합니다.",
    visitInfo: {
      hours: "등반 시작: 오전 7:00~10:00 (2일 1박 필수)",
      admission: "등반 패키지 MYR 450~700 (허가증, 가이드, 산장 숙박 포함)",
      address: "Kinabalu National Park, Ranau, Sabah",
      website: "https://www.mountkinabalu.com",
    },
    highlights: [
      "로우스 피크(4,095m) 정상에서 일출 감상",
      "거대한 화강암 바위와 로프 구간 등반",
      "라반 라타 산장(3,272m)에서의 1박",
      "세계 최대의 라플레시아 꽃 (운이 좋으면 관찰 가능)",
    ],
    nearbyAttractions: ["포링 온천", "키나발루 국립공원 캐노피 워크", "쿤다상 전쟁 기념비"],
    photoTips: "정상 일출은 새벽 5~6시 사이. 삼각대 없이도 바위 위에 카메라를 놓고 촬영 가능합니다. 헤드랜턴은 필수.",
    tips: [
      "등반 허가증은 최소 2~3개월 전 예약 필수 (하루 입산 제한).",
      "가이드 동행이 의무이며 패키지에 포함됩니다.",
      "고산병 예방을 위해 천천히 오르고 충분히 수분을 섭취하세요.",
    ],
  },

  // ===== KUCHING =====
  "malaysia/borneo/kuching/sarawak-cultural-village": {
    heroGradient: "from-teal-500 to-green-800",
    description: "다마이 비치 인근에 위치한 리빙 뮤지엄으로, 사라왁의 7개 원주민 부족(비다유, 이반, 오랑울루, 멜라나우, 말레이, 중국, 인도)의 전통 가옥과 생활 방식을 체험합니다. 각 가옥에서 전통 공예 시연과 체험이 가능합니다.",
    history: "1990년 개장하여 사라왁의 다양한 민족 문화를 보존·전시하는 야외 박물관으로 운영 중입니다. 매년 7월 열리는 사라왁 레인포레스트 월드 뮤직 페스티벌의 개최지이기도 합니다.",
    visitInfo: {
      hours: "09:00~17:15 (연중무휴)",
      admission: "성인 MYR 60 / 어린이 MYR 30",
      address: "Pantai Damai, Santubong, 93762 Kuching, Sarawak",
      website: "https://www.scv.com.my",
    },
    highlights: [
      "7개 부족의 전통 가옥(롱하우스 포함) 탐방",
      "전통 무용 공연 (11:00, 16:00)",
      "대나무 공예, 구슬 세공, 사고야자 가공 체험",
      "비다유 대나무 다리 건너기 체험",
    ],
    nearbyAttractions: ["다마이 비치", "산투봉산 트레킹", "사라왁 주립 박물관"],
    photoTips: "롱하우스 내부는 어두우니 ISO를 높이거나 플래시를 사용하세요. 전통 무용 공연 촬영은 앞줄 좌석을 확보하세요.",
    tips: [
      "전통 무용 공연 시간(11시, 4시)에 맞춰 방문 계획을 세우세요.",
      "쿠칭 시내에서 차로 약 35분 거리입니다. Grab 또는 투어 이용 추천.",
      "7월 레인포레스트 월드 뮤직 페스티벌 기간에는 특별 이벤트가 열립니다.",
    ],
  },
};
