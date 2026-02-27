import type { CityDetail, AttractionDetail } from "../city-details";

export const indonesiaCityDetails: Record<string, CityDetail> = {
  // ===== BALI =====
  "indonesia/bali/ubud": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "발리 내륙의 예술·문화 중심지. 울창한 계단식 논과 힌두 사원, 전통 예술 마을이 어우러져 영적인 힐링 여행지로 세계적 명성을 얻고 있습니다.",
    bestTime: "4~10월 (건기)",
    stayArea: "우붓 중심가 / 뜨갈랄랑 방면",
    transport: "오토바이 렌트, 전용 차량 (대중교통 미비)",
    districts: [
      { name: "우붓 중심가", nameEn: "Ubud Center", description: "우붓 왕궁과 전통 시장, 갤러리가 밀집한 핵심 지역.", highlights: ["우붓 왕궁", "우붓 전통시장", "사라스와티 사원"] },
      { name: "뜨갈랄랑", nameEn: "Tegallalang", description: "유네스코 수박(관개 시스템)이 적용된 아름다운 계단식 논 지역.", highlights: ["뜨갈랄랑 라이스 테라스", "정글 스윙"] },
      { name: "고아 가자", nameEn: "Goa Gajah", description: "9세기 유적이 있는 코끼리 동굴 사원 지역.", highlights: ["고아 가자 사원", "성스러운 샘"] },
    ],
    attractions: [
      { name: "뜨갈랄랑 라이스 테라스", nameEn: "Tegallalang Rice Terraces", description: "수백 년 전통 수박(Subak) 관개로 조성된 장엄한 계단식 논 풍경.", category: "자연", tip: "오전 일찍 방문하면 인파를 피할 수 있습니다." },
      { name: "신성한 원숭이 숲", nameEn: "Sacred Monkey Forest", description: "700마리 이상의 긴꼬리원숭이가 서식하는 힌두 사원 숲.", category: "자연/사원", tip: "음식과 선글라스는 꼭 가방에 넣으세요. 원숭이가 빼앗습니다." },
      { name: "우붓 왕궁", nameEn: "Ubud Royal Palace", description: "푸리 사렌 아궁, 매일 저녁 전통 무용 공연이 열립니다.", category: "문화" },
      { name: "사라스와티 사원", nameEn: "Saraswati Temple", description: "연꽃 연못으로 둘러싸인 아름다운 힌두 물의 사원.", category: "사원" },
    ],
    dayTrips: [
      { name: "끼나마니 화산", nameEn: "Kintamani Volcano", description: "바투르 화산과 칼데라 호수를 한눈에 조망하는 절경.", travelTime: "차량 약 1시간", gradient: "from-orange-500 to-red-700" },
      { name: "띠르타 엠풀 사원", nameEn: "Tirta Empul Temple", description: "성스러운 샘물에서 정화 의식을 체험할 수 있는 사원.", travelTime: "차량 약 30분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "바비 굴링", description: "발리 전통 돼지 통구이, 바삭한 껍질과 향신료가 일품.", emoji: "🐷" },
      { name: "나시 짬뿌르", description: "밥 위에 다양한 반찬을 곁들인 인도네시아식 백반.", emoji: "🍚" },
      { name: "루왁 커피", description: "사향고양이 원두로 유명한 발리 특산 커피.", emoji: "☕" },
    ],
    tips: [
      "우붓은 발리 남부보다 고도가 높아 아침저녁으로 선선합니다.",
      "전통 무용 공연은 우붓 왕궁에서 매일 19:30에 시작합니다 (IDR 100,000).",
      "오토바이 렌트 시 국제면허증 확인이 필수입니다.",
      "사원 방문 시 사롱(천) 착용이 필수이며 대부분 입구에서 대여 가능합니다.",
    ],
  },
  "indonesia/bali/seminyak": {
    heroGradient: "from-orange-400 to-pink-700",
    description: "발리 남서부 해안의 트렌디한 리조트 지역. 세련된 비치 클럽, 부티크 쇼핑, 화려한 선셋으로 유명하며 발리의 '힙'한 분위기를 대표합니다.",
    bestTime: "4~10월 (건기)",
    stayArea: "스미냑 비치 / 꾸따 북쪽 해안",
    transport: "택시(Grab/GoJek), 오토바이 렌트",
    districts: [
      { name: "스미냑 비치", nameEn: "Seminyak Beach", description: "비치 클럽과 선셋 바가 줄지어 있는 메인 해변.", highlights: ["포테이토 헤드 비치클럽", "더블식스 비치", "선셋 포인트"] },
      { name: "오버로이 거리", nameEn: "Jalan Oberoi", description: "부티크 숍과 레스토랑이 밀집한 스미냑의 핵심 거리.", highlights: ["부티크 쇼핑", "현지 디자이너 숍"] },
    ],
    attractions: [
      { name: "스미냑 비치 & 선셋", nameEn: "Seminyak Beach & Sunset", description: "인도양으로 지는 황금빛 선셋이 장관인 발리 대표 해변.", category: "해변", tip: "선셋 타임(17:30~18:30)에 비치 클럽에서 감상하세요." },
      { name: "포테이토 헤드 비치클럽", nameEn: "Potato Head Beach Club", description: "발리 최고의 비치클럽으로 풀, 레스토랑, 아트가 결합된 공간.", category: "엔터테인먼트" },
      { name: "빠뚜 발롱 사원", nameEn: "Petitenget Temple", description: "해변가에 위치한 중요한 힌두 바다 사원.", category: "사원" },
    ],
    dayTrips: [
      { name: "따나롯 사원", nameEn: "Tanah Lot Temple", description: "바다 위 바위에 세워진 발리의 상징적 사원.", travelTime: "차량 약 40분", gradient: "from-amber-500 to-orange-800" },
    ],
    localFood: [
      { name: "시푸드 바베큐", description: "짐바란 스타일 해변 시푸드 그릴.", emoji: "🦐" },
      { name: "미 고렝", description: "인도네시아식 볶음면, 달콤짭짤한 간장 소스.", emoji: "🍜" },
    ],
    tips: [
      "비치 클럽은 사전 예약이 필수이며 드레스코드를 확인하세요.",
      "Grab/GoJek 앱을 미리 설치하면 이동이 편리합니다.",
      "해변의 이안류(Rip Current)에 주의하고 빨간 깃발 지역에서는 수영을 피하세요.",
    ],
  },
  "indonesia/bali/uluwatu": {
    heroGradient: "from-cyan-500 to-blue-900",
    description: "발리 최남단 부킷 반도의 절벽 위 명소. 70m 절벽 위의 울루와뚜 사원과 세계적 서핑 포인트, 장엄한 인도양 석양이 여행자를 매료시킵니다.",
    bestTime: "4~10월 (건기, 서핑 시즌)",
    stayArea: "울루와뚜 절벽 지역 / 빠당빠당 비치 인근",
    transport: "전용 차량 또는 오토바이 (대중교통 없음)",
    districts: [
      { name: "울루와뚜 사원 지역", nameEn: "Uluwatu Temple Area", description: "70m 절벽 위 사원과 께짝 댄스 공연장이 있는 관광 핵심 지역.", highlights: ["울루와뚜 사원", "께짝 댄스", "절벽 전망대"] },
      { name: "빠당빠당 비치", nameEn: "Padang Padang Beach", description: "석회암 절벽 사이의 숨겨진 비치로 서퍼들의 성지.", highlights: ["서핑 포인트", "절벽 계단 비치"] },
    ],
    attractions: [
      { name: "울루와뚜 사원", nameEn: "Uluwatu Temple", description: "인도양이 내려다보이는 70m 절벽 위의 11세기 힌두 사원. 일몰과 함께 열리는 께짝 댄스가 압권.", category: "사원", tip: "께짝 댄스는 18:00 시작, 30분 전 도착해 좋은 자리를 잡으세요." },
      { name: "빠당빠당 비치", nameEn: "Padang Padang Beach", description: "영화 '먹고 기도하고 사랑하라'의 촬영지로 유명한 절벽 해변.", category: "해변" },
      { name: "싱글 핀 비치클럽", nameEn: "Single Fin Beach Club", description: "절벽 위에서 서퍼와 석양을 감상하는 인기 바.", category: "엔터테인먼트" },
    ],
    dayTrips: [
      { name: "누사 두아", nameEn: "Nusa Dua", description: "고급 리조트가 밀집한 발리 남부 해변 지구.", travelTime: "차량 약 30분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "사떼 릴릿", description: "발리식 다진 해산물/고기 꼬치구이.", emoji: "🍢" },
      { name: "라와르", description: "다진 고기와 코코넛, 향신료를 섞은 발리 전통 요리.", emoji: "🥘" },
    ],
    tips: [
      "울루와뚜 사원의 원숭이들이 안경, 모자, 소지품을 빼앗으니 주의하세요.",
      "께짝 댄스 티켓은 현장 구매 (IDR 150,000).",
      "서핑 초보자는 빠당빠당보다는 꾸따 비치에서 시작하세요.",
      "절벽 산책로는 난간이 없는 곳이 많으니 안전에 유의하세요.",
    ],
  },

  // ===== JAVA =====
  "indonesia/java/yogyakarta": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "자바 문화의 중심지이자 고대 왕국의 수도. 세계 최대 불교 유적 보로부두르와 힌두 사원 쁘람바난을 품고 있으며, 바틱과 전통 예술의 본고장입니다.",
    bestTime: "4~10월 (건기)",
    stayArea: "말리오보로 거리 주변",
    transport: "트랜스족자 버스, 안돈(마차), 오토바이",
    districts: [
      { name: "말리오보로", nameEn: "Malioboro", description: "족자카르타의 메인 스트리트로 바틱 숍과 노점이 즐비한 쇼핑 거리.", highlights: ["말리오보로 거리", "브링하르조 시장", "포트 브레더부르크"] },
      { name: "끄라톤", nameEn: "Kraton", description: "술탄 왕궁이 있는 전통 중심 지구.", highlights: ["끄라톤 왕궁", "따만 사리 물의 궁전"] },
      { name: "쁘라위소따만", nameEn: "Prawirotaman", description: "게스트하우스와 카페가 밀집한 여행자 거리.", highlights: ["카페 거리", "아트 갤러리"] },
    ],
    attractions: [
      { name: "보로부두르 사원", nameEn: "Borobudur Temple", description: "9세기에 건설된 세계 최대의 불교 유적으로 유네스코 세계문화유산. 504개의 불상과 정교한 부조가 압권.", category: "유적", tip: "일출 투어(04:30 출발)를 강력 추천합니다." },
      { name: "쁘람바난 사원", nameEn: "Prambanan Temple", description: "9세기 힌두 사원군으로 47m 높이의 시바 신전이 중심. 유네스코 세계문화유산.", category: "유적", tip: "야간 라마야나 발레 공연(5~10월)과 함께 방문하세요." },
      { name: "끄라톤 왕궁", nameEn: "Kraton Palace", description: "현 술탄이 거주하는 자바 전통 왕궁으로 가믈란 연주와 무용 공연.", category: "왕궁" },
      { name: "따만 사리", nameEn: "Taman Sari", description: "18세기 술탄의 물의 궁전으로 수영장과 지하 통로가 있는 독특한 유적.", category: "유적" },
      { name: "말리오보로 거리", nameEn: "Malioboro Street", description: "바틱 쇼핑과 길거리 음식의 중심가.", category: "거리" },
    ],
    dayTrips: [
      { name: "디엥 고원", nameEn: "Dieng Plateau", description: "2,000m 고원의 고대 힌두 사원군과 색깔 호수.", travelTime: "차량 약 3시간", gradient: "from-green-500 to-teal-800" },
    ],
    localFood: [
      { name: "구덱", description: "잭프루트를 코코넛 밀크로 오래 조린 족자 대표 요리.", emoji: "🥘" },
      { name: "바크미 자와", description: "자바식 닭고기 국수, 달콤한 간장 소스.", emoji: "🍜" },
      { name: "앙끄링안", description: "노점 포장마차에서 즐기는 저렴한 현지 식사.", emoji: "🏮" },
    ],
    tips: [
      "보로부두르 일출 투어는 숙소에서 새벽 3:30 픽업이 일반적입니다.",
      "바틱 체험 클래스(반나절)를 꼭 해보세요 (IDR 100,000~200,000).",
      "말리오보로에서 흥정은 필수, 제시 가격의 40~50%부터 시작하세요.",
      "쁘람바난 라마야나 공연은 온라인 예약이 안전합니다.",
    ],
  },
  "indonesia/java/jakarta": {
    heroGradient: "from-slate-600 to-gray-900",
    description: "인도네시아의 수도이자 동남아 최대 메트로폴리탄. 1000만 인구의 활기찬 도시에서 식민지 역사, 현대적 쇼핑, 다양한 문화가 공존합니다.",
    bestTime: "5~9월 (건기)",
    stayArea: "멘텡 / 떠벳 지역 (중심부)",
    transport: "MRT, TransJakarta 버스, Grab/GoJek",
    districts: [
      { name: "꼬따 뚜아", nameEn: "Kota Tua", description: "네덜란드 식민지 시대의 건축물이 남아있는 올드타운.", highlights: ["파타힐라 광장", "역사박물관", "카페 바타비아"] },
      { name: "멘텡", nameEn: "Menteng", description: "대사관가와 고급 레스토랑이 밀집한 중심 업무 지구.", highlights: ["국립 모나스 기념탑", "국립박물관"] },
    ],
    attractions: [
      { name: "모나스 (국립 기념탑)", nameEn: "National Monument", description: "132m 높이의 인도네시아 독립 기념탑. 꼭대기 전망대에서 자카르타 전경을 조망.", category: "기념물", tip: "전망대는 오전에 방문해야 대기 시간이 짧습니다." },
      { name: "꼬따 뚜아 (올드타운 바타비아)", nameEn: "Old Town Batavia", description: "네덜란드 동인도회사 시절의 건축물과 박물관이 모인 역사 지구.", category: "역사", tip: "자전거를 대여해 광장 주변을 둘러보세요." },
      { name: "이스띠끌랄 모스크", nameEn: "Istiqlal Mosque", description: "동남아 최대 모스크로 12만 명 수용, 자카르타 대성당과 마주하고 있습니다.", category: "종교" },
      { name: "국립박물관", nameEn: "National Museum", description: "인도네시아 역사·문화 유물 14만 점을 소장한 최대 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "풀라우 세리부", nameEn: "Thousand Islands", description: "자카르타 앞바다의 열대 섬 군도로 스노클링과 해변 휴양.", travelTime: "보트 약 1~2시간", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "나시 우둑", description: "코코넛 밀크로 지은 밥에 각종 반찬을 곁들인 자카르타식 아침.", emoji: "🍚" },
      { name: "소또 버따위", description: "코코넛 밀크 기반의 자카르타 전통 소고기 수프.", emoji: "🍲" },
      { name: "끄락 뜰로르", description: "계란으로 만든 자카르타식 바삭한 크래커.", emoji: "🥚" },
    ],
    tips: [
      "자카르타 교통 체증은 악명 높으니 MRT/TransJakarta를 적극 활용하세요.",
      "Grab/GoJek 오토바이 택시가 교통 체증 시 가장 빠른 이동 수단입니다.",
      "꼬따 뚜아는 주말에 활기차지만 인파가 많으니 평일 방문도 좋습니다.",
    ],
  },

  // ===== OTHERS =====
  "indonesia/others/komodo-island": {
    heroGradient: "from-yellow-600 to-red-900",
    description: "세계 유일의 코모도 드래곤 서식지이자 유네스코 세계자연유산. 코모도 국립공원은 코모도·린차·파다르 섬으로 구성되며, 세계 최고 수준의 다이빙 스팟을 보유하고 있습니다.",
    bestTime: "4~12월 (건기, 다이빙 최적)",
    stayArea: "라부안 바조 (플로레스 섬)",
    transport: "라부안 바조에서 보트 투어",
    districts: [
      { name: "라부안 바조", nameEn: "Labuan Bajo", description: "코모도 국립공원의 관문 도시로 투어 보트가 출발하는 항구.", highlights: ["항구", "일몰 포인트", "어시장"] },
    ],
    attractions: [
      { name: "코모도 국립공원", nameEn: "Komodo National Park", description: "코모도 드래곤을 야생에서 관찰하고 파다르 섬 트레킹, 핑크 비치 스노클링을 즐기는 세계적 명소.", category: "자연/유산", tip: "반드시 공인 레인저와 동행해야 합니다. 단독 행동은 위험합니다." },
      { name: "파다르 섬", nameEn: "Padar Island", description: "3색 해변이 내려다보이는 정상 트레킹이 코모도 투어의 하이라이트.", category: "자연" },
      { name: "핑크 비치", nameEn: "Pink Beach", description: "붉은 산호 조각이 섞여 분홍빛을 띠는 세계적으로 희귀한 해변.", category: "해변" },
    ],
    dayTrips: [
      { name: "만타 포인트", nameEn: "Manta Point", description: "대형 만타 레이와 함께 스노클링/다이빙하는 포인트.", travelTime: "보트 약 2시간", gradient: "from-blue-500 to-indigo-800" },
    ],
    localFood: [
      { name: "이깐 바카르", description: "숯불에 구운 신선한 생선구이, 삼발 소스와 함께.", emoji: "🐟" },
      { name: "자구응 구이", description: "플로레스 특산 옥수수구이.", emoji: "🌽" },
    ],
    tips: [
      "코모도 입장료가 IDR 3,750,000 (외국인)으로 인상되었으니 예산에 반영하세요.",
      "2일 이상 리브어보드 투어를 추천합니다 (1박 기준 IDR 2,000,000~5,000,000).",
      "파다르 섬 트레킹은 이른 아침이 덜 덥고 사진도 좋습니다.",
      "건기에도 보트 위 자외선이 강하니 선크림·래시가드를 준비하세요.",
    ],
  },
  "indonesia/others/lombok": {
    heroGradient: "from-teal-400 to-blue-800",
    description: "발리 동쪽의 조용한 자매 섬으로, 때 묻지 않은 자연과 린자니 화산, 그리고 길리 3섬(트라왕안·메노·아이르)의 에메랄드빛 바다로 유명합니다.",
    bestTime: "5~9월 (건기)",
    stayArea: "셍기기 / 길리 트라왕안",
    transport: "보트(길리), 오토바이, 전용 차량",
    districts: [
      { name: "셍기기", nameEn: "Senggigi", description: "롬복 서해안의 주요 관광 거점으로 리조트와 레스토랑이 밀집.", highlights: ["셍기기 비치", "일몰 포인트"] },
      { name: "길리 아일랜드", nameEn: "Gili Islands", description: "차량 없는 3개 소섬으로 스노클링·다이빙의 천국.", highlights: ["길리 트라왕안", "길리 메노", "바다거북 스노클링"] },
    ],
    attractions: [
      { name: "길리 아일랜드", nameEn: "Gili Islands", description: "바다거북과 함께 스노클링하고 자전거로 섬을 일주하는 열대 파라다이스. 자동차 없는 평화로운 섬.", category: "해변/자연", tip: "길리 트라왕안은 파티, 길리 메노는 허니문, 길리 아이르는 로컬 분위기." },
      { name: "린자니 산", nameEn: "Mount Rinjani", description: "3,726m 인도네시아 제2의 활화산으로 칼데라 호수가 장관.", category: "자연" },
      { name: "꾸따 롬복 비치", nameEn: "Kuta Lombok Beach", description: "발리 꾸따와 이름만 같은, 한적하고 아름다운 남부 해변.", category: "해변" },
    ],
    dayTrips: [
      { name: "린자니 트레킹", nameEn: "Mount Rinjani Trek", description: "2박 3일 본격 트레킹으로 칼데라 호수까지 하산.", travelTime: "등산 입구까지 차량 약 2.5시간", gradient: "from-emerald-500 to-green-900" },
    ],
    localFood: [
      { name: "아얌 딸리왕", description: "롬복 전통 매운 닭고기 요리, 삼발 소스가 화끈합니다.", emoji: "🍗" },
      { name: "쁠레씽", description: "바나나 잎에 싸서 구운 생선 요리.", emoji: "🐟" },
      { name: "사떼 불라약", description: "롬복식 소고기 꼬치구이와 매운 소스.", emoji: "🍢" },
    ],
    tips: [
      "길리 섬 간 보트(Island Hopping)는 IDR 50,000~100,000 정도입니다.",
      "린자니 트레킹은 반드시 공인 가이드와 함께해야 합니다.",
      "길리 트라왕안 동쪽 해변에서 바다거북 스노클링이 거의 100% 가능합니다.",
    ],
  },
};

export const indonesiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== UBUD =====
  "indonesia/bali/ubud/tegallalang-rice-terraces": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "발리 우붓 북쪽에 펼쳐진 장엄한 계단식 논으로, 1,000년 이상의 전통 수박(Subak) 관개 시스템이 유네스코 세계문화유산으로 등재되었습니다. 야자수 사이로 층층이 이어지는 초록빛 논은 발리에서 가장 상징적인 풍경입니다.",
    history: "수박(Subak)은 9세기부터 발리 힌두 철학 '뜨리 히따 까라나(Tri Hita Karana)'에 기반한 협동적 물 관리 시스템으로, 2012년 유네스코 세계문화유산에 등재되었습니다.",
    visitInfo: {
      hours: "06:00~18:00 (매일)",
      admission: "IDR 15,000 (입장) + 정글 스윙 별도 IDR 150,000~350,000",
      address: "Jl. Raya Tegallalang, Tegallalang, Gianyar, Bali",
    },
    highlights: [
      "층층이 이어지는 에메랄드빛 계단식 논 파노라마",
      "정글 스윙에서 계곡을 가로지르는 짜릿한 체험",
      "야자수와 논을 배경으로 한 인스타그램 포토스팟",
      "전통 수박 관개 시스템 견학",
    ],
    nearbyAttractions: ["신성한 원숭이 숲", "띠르타 엠풀 사원", "구눙 까위 사원"],
    photoTips: "오전 9시 이전이 빛이 부드럽고 인파가 적어 촬영 최적입니다. 계단을 따라 내려가면 다양한 앵글을 확보할 수 있습니다.",
    tips: [
      "오전 8시 이전에 도착하면 관광객 없이 사진을 찍을 수 있습니다.",
      "논둑길은 미끄러우니 운동화를 신으세요.",
      "현지인이 사진을 찍어주겠다고 하면 팁(IDR 10,000~20,000)을 준비하세요.",
      "정글 스윙 업체마다 가격과 높이가 다르니 비교 후 선택하세요.",
    ],
  },
  "indonesia/bali/ubud/sacred-monkey-forest": {
    heroGradient: "from-green-600 to-gray-900",
    description: "우붓 중심부에 위치한 12.5헥타르의 울창한 숲에 700마리 이상의 발리 긴꼬리원숭이(마카크)가 서식합니다. 3개의 힌두 사원과 이끼 낀 고대 석상, 거대한 반얀 나무가 신비로운 분위기를 자아냅니다.",
    history: "14세기부터 발리 힌두교 공동체의 신성한 장소로 보존되어 왔으며, 달렘 아궁 빠다능뜨갈(Dalem Agung Padangtegal) 사원이 중심입니다.",
    visitInfo: {
      hours: "08:30~17:00 (매일, 마지막 입장 16:30)",
      admission: "성인 IDR 80,000, 어린이 IDR 60,000",
      address: "Jl. Monkey Forest, Ubud, Gianyar, Bali 80571",
      website: "https://www.monkeyforestubud.com",
    },
    highlights: [
      "700마리 이상의 야생 마카크 원숭이 관찰",
      "이끼 낀 석상과 고대 반얀 나무의 신비로운 숲길",
      "달렘 아궁 빠다능뜨갈 힌두 사원",
      "용 다리(Dragon Bridge)와 성스러운 샘",
    ],
    nearbyAttractions: ["우붓 왕궁", "우붓 전통시장", "사라스와티 사원"],
    photoTips: "원숭이가 어깨에 올라온 사진을 원하면 바나나(IDR 20,000)를 구입하세요. 단, 카메라를 단단히 잡고 있어야 합니다.",
    tips: [
      "선글라스, 모자, 귀걸이 등 원숭이가 뺏을 수 있는 것은 가방에 넣으세요.",
      "음식을 보이게 들고 있으면 원숭이가 공격적으로 달려듭니다.",
      "오전 개장 직후가 원숭이들이 가장 온순하고 인파도 적습니다.",
      "원숭이에게 물리면 즉시 공원 내 응급 키트로 소독하세요.",
    ],
  },

  // ===== ULUWATU =====
  "indonesia/bali/uluwatu/uluwatu-temple": {
    heroGradient: "from-cyan-500 to-blue-900",
    description: "인도양 70m 절벽 위에 세워진 11세기 발리 6대 사원 중 하나로, 매일 일몰 시 펼쳐지는 전통 께짝(Kecak) 댄스 공연이 세계적으로 유명합니다. 절벽 위에서 바라보는 인도양 석양은 발리 최고의 장관입니다.",
    history: "10~11세기 자바의 성인 드위자 마르까난디야가 발리 영적 방어를 위해 건립한 6대 사원(Sad Kahyangan) 중 하나로, 남서쪽 바다의 악령을 막는 역할을 합니다.",
    visitInfo: {
      hours: "09:00~19:00 (께짝 댄스 18:00~19:00)",
      admission: "사원 입장 IDR 50,000, 께짝 댄스 IDR 150,000",
      address: "Pecatu, South Kuta, Badung, Bali",
    },
    highlights: [
      "70m 절벽 위 고대 힌두 사원의 극적인 경관",
      "일몰과 함께하는 께짝 댄스 공연 (150명 남성 합창)",
      "절벽 산책로의 인도양 파노라마 전망",
      "사원 주변의 야생 원숭이 서식지",
    ],
    nearbyAttractions: ["빠당빠당 비치", "싱글 핀 비치클럽", "가루다 위스누 켄짜나 공원"],
    photoTips: "께짝 댄스 사진은 무대 왼쪽에서 촬영하면 배경으로 석양이 들어옵니다. 사원 전경은 입구 왼쪽 절벽 전망대에서 가장 잘 담깁니다.",
    tips: [
      "께짝 댄스 좌석은 선착순이므로 17:30까지 도착하세요.",
      "사원 입장 시 사롱을 반드시 착용해야 합니다 (무료 대여).",
      "원숭이들이 소지품을 빼앗으니 주머니를 잠그고 안경을 주의하세요.",
      "일몰 후 주차장이 혼잡하니 여유를 두고 출발하세요.",
    ],
  },

  // ===== SEMINYAK =====
  "indonesia/bali/seminyak/seminyak-beach-sunset": {
    heroGradient: "from-orange-400 to-pink-700",
    description: "발리 남서부 해안에서 인도양으로 지는 장엄한 선셋을 즐기는 발리 대표 해변. 세련된 비치 클럽과 선셋 바가 해변을 따라 늘어서 있어, 낮에는 서핑과 일광욕, 저녁에는 황금빛 석양과 함께 칵테일을 즐길 수 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (비치 클럽: 보통 10:00~24:00)",
      admission: "해변 무료 / 비치 클럽 최소 소비 IDR 200,000~500,000",
      address: "Seminyak Beach, North Kuta, Badung, Bali",
    },
    highlights: [
      "인도양으로 지는 황금빛~보랏빛 선셋 파노라마",
      "포테이토 헤드, 더블식스 등 세계적 비치 클럽",
      "서퍼들의 실루엣이 만드는 석양 풍경",
      "해변 곳곳의 빈백과 선셋 바에서 칵테일",
    ],
    nearbyAttractions: ["포테이토 헤드 비치클럽", "빠뚜 발롱 사원", "더블식스 비치"],
    photoTips: "선셋 시간(17:30~18:30)에 해변 남쪽에서 북쪽을 향해 촬영하면 서퍼와 비치 클럽 실루엣이 함께 담깁니다.",
    tips: [
      "선셋 명당 자리는 17:00 이전에 확보하세요.",
      "비치 클럽 선셋 좌석은 사전 예약 필수입니다.",
      "해변 호객 행위(마사지, 기념품)는 가볍게 거절하면 됩니다.",
      "이안류에 주의하고 빨간 깃발이 있는 구역은 수영 금지입니다.",
    ],
  },

  // ===== YOGYAKARTA =====
  "indonesia/java/yogyakarta/borobudur-temple": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "9세기에 건설된 세계 최대의 불교 유적으로, 6층의 사각형 기단과 3층의 원형 단 위에 72개의 종 모양 스투파가 놓여 있습니다. 504개의 불상과 2,672개의 부조 패널이 불교 우주관을 표현하며, 안개 속에서 떠오르는 일출은 일생에 한 번의 경험입니다.",
    history: "8~9세기 사일렌드라 왕조에 의해 건설되었으며, 약 200만 개의 화산석 블록이 사용되었습니다. 1000년간 화산재에 묻혀 있다가 1814년 영국 래플스 총독에 의해 재발견, 1991년 유네스코 세계문화유산으로 등재되었습니다.",
    visitInfo: {
      hours: "06:00~17:00 (일출 투어 04:30~)",
      admission: "외국인 성인 IDR 350,000 (일출 투어 IDR 450,000)",
      address: "Jl. Badrawati, Borobudur, Magelang, Central Java",
      website: "https://borobudurpark.com",
    },
    highlights: [
      "일출 시 안개 속에서 드러나는 장엄한 실루엣",
      "72개의 종 모양 스투파와 내부 불상",
      "2,672개의 정교한 부조 패널 (부처의 생애와 가르침)",
      "메라피 화산을 배경으로 한 파노라마 전망",
    ],
    nearbyAttractions: ["쁘람바난 사원", "므라피 화산", "무눌 사원"],
    photoTips: "일출 투어 시 최상층에서 동쪽(메라피 화산 방향)으로 촬영하면 스투파와 화산이 함께 담깁니다. 삼각대 사용 가능.",
    tips: [
      "일출 투어는 전날 밤 숙소 예약 시 함께 신청하세요.",
      "사원은 시계 방향으로 아래층부터 올라가며 부조를 감상하는 것이 정석입니다.",
      "맨발로 입장하며 미끄러울 수 있으니 조심하세요.",
      "건기(5~9월) 일출이 가장 선명합니다.",
    ],
  },
  "indonesia/java/yogyakarta/prambanan-temple": {
    heroGradient: "from-orange-600 to-red-900",
    description: "9세기에 건설된 동남아 최대의 힌두 사원군으로, 47m 높이의 시바 신전을 중심으로 브라흐마, 비슈누 신전이 나란히 서 있습니다. 240개 이상의 사원이 있었으나 지진으로 대부분 붕괴, 현재 주요 8개 사원이 복원되었습니다.",
    history: "856년 산자야 왕조의 발리뚱 마하 삼부왕이 건설. 보로부두르(불교)에 대응하는 힌두 사원으로, 두 왕조의 종교적 경쟁이 건축으로 표현된 것입니다. 1991년 유네스코 세계문화유산 등재.",
    visitInfo: {
      hours: "06:00~17:00 (라마야나 발레: 19:30~21:30, 5~10월)",
      admission: "외국인 성인 IDR 350,000 (라마야나 별도 IDR 150,000~400,000)",
      address: "Jl. Raya Solo-Yogyakarta, Prambanan, Sleman, DIY",
      website: "https://borobudurpark.com/temple/prambanan",
    },
    highlights: [
      "47m 시바 신전의 위압적인 규모와 정교한 조각",
      "라마야나 서사시를 표현한 부조 패널",
      "야외 라마야나 발레 공연 (5~10월 보름달 전후)",
      "석양에 물드는 사원 실루엣",
    ],
    nearbyAttractions: ["보로부두르 사원", "라뚜 보꼬 궁전", "쎄우 사원"],
    photoTips: "오후 늦게 방문하면 서쪽에서 비추는 황금빛 조명으로 사원이 가장 아름답게 보입니다.",
    tips: [
      "보로부두르와 세트 할인 티켓(IDR 550,000)을 이용하세요.",
      "라마야나 발레 공연은 온라인 예약이 안전합니다.",
      "사원 내부는 가파른 계단이므로 편한 신발을 신으세요.",
      "오전에 보로부두르, 오후에 쁘람바난 방문이 효율적인 동선입니다.",
    ],
  },

  // ===== JAKARTA =====
  "indonesia/java/jakarta/national-monument": {
    heroGradient: "from-slate-600 to-gray-900",
    description: "인도네시아 독립을 상징하는 132m 높이의 국립 기념탑으로, 꼭대기 35kg 순금 화염 장식이 햇빛에 빛납니다. 지하에는 독립 역사 디오라마 박물관, 전망대에서는 자카르타 전경을 360도로 조망할 수 있습니다.",
    history: "1961~1975년 수카르노 대통령의 지시로 건설. 꼭대기 화염 장식은 독립의 불꽃을 상징하며, 35kg의 순금으로 도금되었습니다. 모나스 광장(므르데카 광장)은 인도네시아 독립 선언이 이루어진 역사적 장소입니다.",
    visitInfo: {
      hours: "08:00~16:00 (월요일 휴관, 마지막 입장 15:00)",
      admission: "전망대 IDR 15,000 (외국인), 디오라마 IDR 10,000",
      address: "Gambir, Central Jakarta, DKI Jakarta 10110",
    },
    highlights: [
      "132m 전망대에서 자카르타 360도 파노라마 조망",
      "35kg 순금 화염 장식",
      "지하 독립사 디오라마 박물관 51개 장면",
      "므르데카 광장의 거대한 녹지 공간",
    ],
    nearbyAttractions: ["이스띠끌랄 모스크", "자카르타 대성당", "국립박물관", "감비르 역"],
    photoTips: "전체 탑 사진은 북서쪽 광장에서 촬영하는 것이 좋습니다. 전망대에서는 광각 렌즈가 필수.",
    tips: [
      "전망대 엘리베이터 대기 시간이 1~2시간이므로 개장 직후 방문하세요.",
      "주말보다 평일이 대기 시간이 훨씬 짧습니다.",
      "광장이 넓어 걷는 거리가 상당하니 편한 신발을 신으세요.",
      "인근 감비르 역에서 도보 10분으로 접근 가능합니다.",
    ],
  },
  "indonesia/java/jakarta/old-town-batavia": {
    heroGradient: "from-amber-700 to-stone-900",
    description: "17~18세기 네덜란드 동인도회사(VOC) 시절의 건축물이 밀집한 자카르타의 역사 지구. 파타힐라 광장을 중심으로 식민지 시대 건물, 박물관, 카페가 모여 있어 자카르타의 과거와 현재를 잇는 문화 공간입니다.",
    history: "1619년 네덜란드 동인도회사가 '바타비아'로 명명한 식민지 수도. 파타힐라 광장(옛 시청 광장)은 행정·무역의 중심이었으며, 현재 자카르타 역사박물관으로 사용되는 건물은 1710년에 건설된 옛 시청입니다.",
    visitInfo: {
      hours: "광장 24시간 / 박물관 09:00~15:00 (월요일 휴관)",
      admission: "광장 무료 / 자카르타 역사박물관 IDR 5,000",
      address: "Taman Fatahillah, Kota Tua, West Jakarta",
    },
    highlights: [
      "파타힐라 광장과 네덜란드 식민지 건축물",
      "자카르타 역사박물관 (옛 시청사)",
      "카페 바타비아에서 식민지 시대 분위기의 식사",
      "와양 박물관 (인도네시아 전통 인형극)",
    ],
    nearbyAttractions: ["순다 끌라파 항구", "해양박물관", "차이나타운 글로독"],
    photoTips: "컬러풀한 자전거를 배경으로 광장 사진을 찍으면 포토제닉합니다. 카페 바타비아 2층 발코니에서 광장 전경도 좋습니다.",
    tips: [
      "주말에는 길거리 공연과 이벤트가 열려 활기가 넘칩니다.",
      "자전거 대여(IDR 20,000)로 광장 주변을 둘러보세요.",
      "낮 시간 더위가 심하니 카페 바타비아에서 휴식을 겸하세요.",
      "순다 끌라파 옛 항구까지 도보 15분, 함께 방문 추천.",
    ],
  },

  // ===== KOMODO =====
  "indonesia/others/komodo-island/komodo-national-park": {
    heroGradient: "from-yellow-600 to-red-900",
    description: "세계에서 유일하게 코모도 드래곤(코모도왕도마뱀)을 야생에서 관찰할 수 있는 유네스코 세계자연유산. 코모도, 린차, 파다르 3개 주요 섬과 수십 개의 소섬으로 구성되며, 세계 최고 수준의 해양 생태계를 보유하고 있습니다.",
    history: "1980년 코모도 드래곤 보호를 위해 국립공원 지정, 1991년 유네스코 세계자연유산 등재. 약 3,000마리의 코모도 드래곤이 서식하며, 최대 3m, 70kg에 달하는 세계 최대 도마뱀입니다.",
    visitInfo: {
      hours: "06:00~17:00 (연중무휴)",
      admission: "외국인 IDR 3,750,000 (2023년 인상), 레인저 동행 필수",
      address: "Komodo National Park, West Manggarai, East Nusa Tenggara",
      website: "https://www.komodonationalpark.org",
    },
    highlights: [
      "야생 코모도 드래곤 근접 관찰 (레인저 동행)",
      "파다르 섬 정상에서 3색 해변 조망 트레킹",
      "핑크 비치의 분홍빛 산호 모래 해변",
      "만타 레이, 바다거북과 스노클링/다이빙",
    ],
    nearbyAttractions: ["파다르 섬", "핑크 비치", "만타 포인트", "라부안 바조 항구"],
    photoTips: "코모도 드래곤은 저자세로 촬영하면 박력 있게 담깁니다. 파다르 섬 정상은 일출/일몰 모두 환상적입니다.",
    tips: [
      "레인저 없이 섬 탐방은 절대 불가능하며 위험합니다.",
      "생리 중인 여성은 코모도 섬 방문 전 레인저에게 고지해야 합니다 (피 냄새 감지).",
      "2일 이상 리브어보드 투어가 모든 명소를 효율적으로 둘러볼 수 있습니다.",
      "선크림, 래시가드, 충분한 식수를 반드시 준비하세요.",
    ],
  },

  // ===== LOMBOK =====
  "indonesia/others/lombok/gili-islands": {
    heroGradient: "from-teal-400 to-blue-800",
    description: "롬복 북서쪽의 3개 작은 섬(길리 트라왕안, 길리 메노, 길리 아이르)으로, 자동차와 오토바이가 없는 청정 열대 파라다이스입니다. 터키석빛 바다에서 바다거북과 스노클링하고, 자전거나 마차(시도모)로 섬을 일주할 수 있습니다.",
    history: "원래 부기스족 어부들의 정착지였으며, 1980년대 배낭여행자들이 발견하면서 관광지로 발전했습니다. 길리(Gili)는 사삭어로 '작은 섬'을 의미합니다.",
    visitInfo: {
      hours: "24시간 (섬 전체가 관광지)",
      admission: "무료 (스노클링 장비 대여 IDR 50,000~100,000)",
      address: "Gili Islands, North Lombok, West Nusa Tenggara",
    },
    highlights: [
      "바다거북과 함께하는 스노클링 (거의 100% 확률)",
      "자전거로 섬 일주 (트라왕안 1.5시간, 메노 1시간)",
      "수중 조각상(NEST) 스노클링/다이빙",
      "트라왕안 서쪽 해변의 장엄한 선셋과 나이트라이프",
    ],
    nearbyAttractions: ["린자니 산", "셍기기 비치", "사삭 전통 마을"],
    photoTips: "수중 카메라로 바다거북과 셀피가 길리 여행의 필수 사진. 트라왕안 서쪽 그네(Swing)에서 선셋 사진도 인기입니다.",
    tips: [
      "길리 트라왕안은 파티 섬, 길리 메노는 조용한 허니문, 길리 아이르는 로컬 분위기.",
      "섬 간 보트(Island Hopping)는 IDR 50,000~100,000, 출발 시간이 유동적이니 여유를 두세요.",
      "ATM이 제한적이고 수수료가 높으니 현금을 넉넉히 준비하세요.",
      "우기(12~3월)에는 바다가 거칠어 보트가 결항될 수 있습니다.",
    ],
  },
};
