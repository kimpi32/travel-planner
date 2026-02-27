import type { CityDetail, AttractionDetail } from "../city-details";

export const philippinesCityDetails: Record<string, CityDetail> = {
  // ===== MANILA-LUZON =====
  "philippines/manila-luzon/manila": {
    heroGradient: "from-red-500 to-yellow-600",
    description: "필리핀의 수도이자 정치·경제·문화 중심지. 스페인 식민 시대의 유산이 남아있는 인트라무로스, 국민 영웅 호세 리살을 기리는 리살 공원 등 역사와 현대가 공존하는 메트로폴리스입니다.",
    bestTime: "12~2월 (건기, 선선한 시기)",
    stayArea: "마카티 / BGC (보니파시오 글로벌 시티)",
    transport: "LRT, MRT, 지프니, 그랩 택시",
    districts: [
      { name: "인트라무로스", nameEn: "Intramuros", description: "스페인 식민 시대 성벽 도시로 마닐라 역사의 핵심 지역.", highlights: ["산티아고 요새", "마닐라 대성당", "카사 마닐라 박물관"] },
      { name: "마카티", nameEn: "Makati", description: "필리핀 최대의 비즈니스·쇼핑 중심지로 현대적인 도시 풍경.", highlights: ["아얄라 센터", "그린벨트 몰", "마카티 야시장"] },
      { name: "BGC", nameEn: "Bonifacio Global City", description: "신도시 개발 지구로 트렌디한 레스토랑과 카페가 밀집.", highlights: ["하이 스트리트", "마인드 뮤지엄", "베니스 그랜드 캐널 몰"] },
    ],
    attractions: [
      { name: "인트라무로스", nameEn: "Intramuros", description: "16세기 스페인이 건설한 성벽 도시로 마닐라 역사 탐방의 필수 코스.", category: "역사", tip: "대나무 자전거 투어로 효율적으로 둘러보세요." },
      { name: "리살 공원", nameEn: "Rizal Park", description: "국민 영웅 호세 리살을 기리는 58헥타르 규모의 도심 공원.", category: "공원", tip: "일몰 시간에 방문하면 마닐라 만의 노을을 감상할 수 있습니다." },
      { name: "산티아고 요새", nameEn: "Fort Santiago", description: "인트라무로스 내 스페인 시대 군사 요새로 리살의 마지막 감옥이 있는 곳.", category: "역사" },
      { name: "마닐라 대성당", nameEn: "Manila Cathedral", description: "필리핀 가톨릭의 중심 성당으로 화려한 스테인드글라스와 파이프 오르간이 인상적.", category: "성당" },
      { name: "마닐라 오션 파크", nameEn: "Manila Ocean Park", description: "마닐라 만에 위치한 해양 테마파크로 가족 여행객에게 인기.", category: "테마파크" },
      { name: "SM 몰 오브 아시아", nameEn: "SM Mall of Asia", description: "세계 최대 규모 쇼핑몰 중 하나로 쇼핑·식사·엔터테인먼트를 한자리에서.", category: "쇼핑" },
    ],
    dayTrips: [
      { name: "따가이따이", nameEn: "Tagaytay", description: "따알 화산을 품은 호수가 내려다보이는 고원 도시.", travelTime: "차량 약 1.5~2시간", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "아도보", description: "간장과 식초, 마늘로 조린 필리핀 국민 요리.", emoji: "🍖" },
      { name: "시니강", description: "타마린드로 새콤하게 끓인 필리핀 전통 수프.", emoji: "🍲" },
      { name: "할로할로", description: "얼음 갈아 만든 필리핀식 빙수에 다양한 토핑을 올린 디저트.", emoji: "🍧" },
    ],
    tips: [
      "그랩(Grab) 앱을 설치하면 택시보다 안전하고 편리하게 이동할 수 있습니다.",
      "인트라무로스는 오전에 방문해야 더위를 피할 수 있습니다.",
      "마닐라 만 일몰은 SM 몰 오브 아시아 베이 에어리어에서 감상하세요.",
      "소매치기에 주의하고, 귀중품은 호텔 금고에 보관하세요.",
    ],
  },
  "philippines/manila-luzon/banaue": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "2000년 이상의 역사를 가진 세계적인 계단식 논이 있는 산악 마을. 이푸가오 원주민의 놀라운 엔지니어링이 만들어낸 UNESCO 세계유산으로, '세계 8대 불가사의'로 불립니다.",
    bestTime: "3~5월 (논에 물 차는 시기) / 6~8월 (녹색 논)",
    stayArea: "바나웨 타운 프로퍼",
    transport: "마닐라에서 야간 버스 8~9시간 / 트라이시클",
    districts: [
      { name: "바나웨 타운", nameEn: "Banaue Town", description: "계단식 논 전망대와 숙소, 레스토랑이 모여있는 중심 마을.", highlights: ["바나웨 뷰포인트", "바나웨 박물관", "지역 시장"] },
    ],
    attractions: [
      { name: "바나웨 라이스 테라스", nameEn: "Banaue Rice Terraces", description: "해발 1,500m에 조성된 2,000년 역사의 계단식 논으로 이푸가오족의 걸작.", category: "유네스코", tip: "바나웨 뷰포인트에서 전체 파노라마를 감상할 수 있습니다." },
      { name: "바탓 라이스 테라스", nameEn: "Batad Rice Terraces", description: "원형 극장 모양의 더 보존이 잘 된 계단식 논으로 트레킹이 필요합니다.", category: "유네스코", tip: "편도 45분 트레킹이 필요하니 트레킹화를 준비하세요." },
      { name: "탑피야 폭포", nameEn: "Tappiya Falls", description: "바탓에서 트레킹으로 만나는 시원한 폭포.", category: "자연" },
    ],
    dayTrips: [
      { name: "사가다", nameEn: "Sagada", description: "절벽에 매달린 관(행잉 코핀)과 동굴 탐험으로 유명한 산악 마을.", travelTime: "차량 약 4~5시간", gradient: "from-stone-400 to-stone-700" },
    ],
    localFood: [
      { name: "피니핏", description: "이푸가오 전통 쌀떡으로 대나무 잎에 싸서 쪄낸 간식.", emoji: "🍙" },
      { name: "이푸가오 커피", description: "해발 고지대에서 재배한 향이 진한 현지 원두 커피.", emoji: "☕" },
    ],
    tips: [
      "마닐라에서 야간 버스(오하요스, 또는 큐러너)를 이용하면 아침에 도착합니다.",
      "우기(7~10월)에는 산사태 위험이 있으니 현지 상황을 확인하세요.",
      "현지 가이드를 고용하면 숨은 뷰포인트를 방문할 수 있습니다.",
    ],
  },

  // ===== VISAYAS =====
  "philippines/visayas/cebu": {
    heroGradient: "from-cyan-500 to-blue-700",
    description: "필리핀에서 가장 오래된 도시이자 비사야 제도의 중심. 마젤란의 십자가, 산토 니뇨 성당 등 스페인 식민 역사의 시작점이며, 주변 해양 액티비티의 거점 도시입니다.",
    bestTime: "1~5월 (건기)",
    stayArea: "세부 시티 다운타운 / 막탄 섬 리조트 지역",
    transport: "지프니, 택시, 그랩, 막탄 섬은 페리/다리",
    districts: [
      { name: "다운타운 세부", nameEn: "Downtown Cebu", description: "마젤란의 십자가, 산토 니뇨 성당 등 역사 유적이 모인 구시가.", highlights: ["마젤란의 십자가", "산토 니뇨 성당", "콜론 거리"] },
      { name: "막탄 섬", nameEn: "Mactan Island", description: "고급 리조트와 다이빙 포인트가 밀집한 해양 리조트 지역.", highlights: ["막탄 신사", "해양 생태공원", "리조트 비치"] },
    ],
    attractions: [
      { name: "마젤란의 십자가", nameEn: "Magellan's Cross", description: "1521년 마젤란이 세운 십자가로 필리핀 기독교 역사의 시작점.", category: "역사", tip: "산토 니뇨 성당 바로 옆에 있으니 함께 방문하세요." },
      { name: "산토 니뇨 성당", nameEn: "Basilica del Santo Niño", description: "필리핀에서 가장 오래된 가톨릭 성당으로 산토 니뇨 상이 모셔져 있습니다.", category: "성당" },
      { name: "오슬롭 고래상어 투어", nameEn: "Oslob Whale Shark Watching", description: "고래상어와 함께 수영하는 독특한 체험 프로그램.", category: "해양", tip: "새벽 일찍(5~6시) 출발해야 대기 시간을 줄일 수 있습니다." },
      { name: "카와산 폭포", nameEn: "Kawasan Falls", description: "3단 폭포와 에메랄드빛 물빛이 아름다운 세부 남부의 명소.", category: "자연" },
      { name: "시마라 섬", nameEn: "Simala Shrine", description: "언덕 위에 지어진 거대한 성 모양의 성당으로 기적의 성모상이 유명.", category: "성당" },
    ],
    dayTrips: [
      { name: "보홀", nameEn: "Bohol", description: "초콜릿 힐스와 안경원숭이(타르시어)로 유명한 인근 섬.", travelTime: "페리 약 2시간", gradient: "from-amber-400 to-brown-700" },
      { name: "모알보알", nameEn: "Moalboal", description: "사르딘 런과 바다거북 스노클링으로 유명한 다이빙 포인트.", travelTime: "차량 약 3시간", gradient: "from-blue-400 to-cyan-700" },
    ],
    localFood: [
      { name: "레촌", description: "숯불에 통째로 구운 돼지 바비큐, 세부의 대표 음식.", emoji: "🐷" },
      { name: "수만", description: "코코넛 밀크와 찹쌀로 만든 전통 떡.", emoji: "🍡" },
      { name: "망고 셰이크", description: "세부산 달콤한 망고로 만든 시원한 셰이크.", emoji: "🥭" },
    ],
    tips: [
      "세부 시티와 막탄 섬을 나눠서 일정을 짜면 효율적입니다.",
      "오슬롭 고래상어는 환경 논란이 있으니 사전에 정보를 확인하세요.",
      "시눌로그 축제(1월 셋째 주 일요일)에 방문하면 필리핀 최대 축제를 즐길 수 있습니다.",
      "막탄 공항에서 그랩 택시를 바로 이용할 수 있습니다.",
    ],
  },
  "philippines/visayas/bohol": {
    heroGradient: "from-amber-500 to-brown-800",
    description: "1,200개 이상의 원뿔형 언덕 '초콜릿 힐스'와 세계에서 가장 작은 영장류 안경원숭이(타르시어)의 서식지. 로복 강 크루즈와 아름다운 해변까지 갖춘 비사야 제도의 보석입니다.",
    bestTime: "1~5월 (건기, 초콜릿 힐스가 갈색으로 물드는 시기)",
    stayArea: "탁빌라란 시티 / 팡라오 섬",
    transport: "세부에서 페리 2시간 / 섬 내 렌터카·트라이시클",
    districts: [
      { name: "탁빌라란", nameEn: "Tagbilaran", description: "보홀의 주도로 페리 터미널과 숙소가 위치한 관문 도시.", highlights: ["보홀 박물관", "성 요셉 대성당", "재래시장"] },
      { name: "팡라오 섬", nameEn: "Panglao Island", description: "보홀과 다리로 연결된 리조트 섬으로 알로나 비치가 유명.", highlights: ["알로나 비치", "힌다간 동굴", "바다거북 스노클링"] },
    ],
    attractions: [
      { name: "초콜릿 힐스", nameEn: "Chocolate Hills", description: "1,200개 이상의 대칭적인 원뿔형 언덕으로 건기에 갈색으로 변해 초콜릿처럼 보입니다.", category: "자연", tip: "카르멘 전망대에서 214계단을 올라가면 360도 파노라마 뷰를 볼 수 있습니다." },
      { name: "타르시어 보호구역", nameEn: "Tarsier Sanctuary", description: "세계에서 가장 작은 영장류 안경원숭이를 자연 상태에서 관찰하는 보호 구역.", category: "자연", tip: "플래시 사용은 금지! 야행성 동물이라 조용히 관찰하세요." },
      { name: "로복 강 크루즈", nameEn: "Loboc River Cruise", description: "열대 정글 사이로 흐르는 강에서 뷔페 점심을 즐기는 리버 크루즈.", category: "체험" },
    ],
    dayTrips: [
      { name: "발리카삭 섬", nameEn: "Balicasag Island", description: "스노클링·다이빙 명소로 바다거북과 수중 절벽이 유명.", travelTime: "팡라오에서 보트 약 30분", gradient: "from-teal-400 to-blue-700" },
    ],
    localFood: [
      { name: "카라마이", description: "코코넛 밀크로 만든 보홀 전통 캐러멜 과자.", emoji: "🍬" },
      { name: "레촌 보홀", description: "보홀식 통돼지 바비큐로 허브 스터핑이 특징.", emoji: "🍖" },
    ],
    tips: [
      "보홀 시골길 투어(초콜릿 힐스 + 타르시어 + 로복 강)는 하루 코스로 가능합니다.",
      "팡라오 섬의 알로나 비치에서 스노클링 장비를 저렴하게 빌릴 수 있습니다.",
      "오토바이 렌탈(₱300~500/일)이 가장 자유로운 이동 수단입니다.",
    ],
  },
  "philippines/visayas/boracay": {
    heroGradient: "from-sky-400 to-cyan-700",
    description: "세계적으로 유명한 4km 길이의 화이트 비치가 있는 작은 열대 섬. 파우더 같은 하얀 모래와 투명한 바닷물, 환상적인 일몰이 어우러진 필리핀 최고의 해변 휴양지입니다.",
    bestTime: "11~5월 (건기, 특히 1~3월 최적)",
    stayArea: "화이트 비치 스테이션 1~3 (스테이션 1이 가장 고급)",
    transport: "칼리보/카티클란 공항 → 보트 → 섬 내 트라이시클",
    districts: [
      { name: "스테이션 1", nameEn: "Station 1", description: "가장 넓고 고운 모래사장으로 고급 리조트가 밀집한 지역.", highlights: ["윌리스 록", "디몰", "파라세일링"] },
      { name: "스테이션 2", nameEn: "Station 2", description: "보라카이의 중심 번화가로 레스토랑, 바, 쇼핑이 밀집.", highlights: ["디몰", "야시장", "비치 바"] },
      { name: "불라복 비치", nameEn: "Bulabog Beach", description: "카이트서핑과 윈드서핑의 메카로 11~4월 바람이 최적.", highlights: ["카이트서핑", "윈드서핑", "SUP"] },
    ],
    attractions: [
      { name: "화이트 비치", nameEn: "White Beach", description: "4km 길이의 파우더 화이트 샌드 비치로 세계 최고의 해변으로 선정된 바 있습니다.", category: "해변", tip: "일몰 시간에 스테이션 1 근처에서 감상하면 최고의 뷰를 볼 수 있습니다." },
      { name: "아일랜드 호핑", nameEn: "Island Hopping", description: "크리스탈 코브, 매직 아일랜드 등 주변 작은 섬을 보트로 둘러보는 투어.", category: "해양" },
      { name: "푸카 셸 비치", nameEn: "Puka Shell Beach", description: "섬 북쪽의 조용한 해변으로 독특한 푸카 조개껍데기가 유명.", category: "해변" },
      { name: "윌리스 록", nameEn: "Willy's Rock", description: "화이트 비치 해변에 솟은 바위 위에 성모상이 있는 보라카이의 랜드마크.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "크리스탈 코브 아일랜드", nameEn: "Crystal Cove Island", description: "아름다운 동굴과 투명한 바다를 자랑하는 작은 섬.", travelTime: "보트 약 15분", gradient: "from-cyan-300 to-blue-600" },
    ],
    localFood: [
      { name: "초리 버거", description: "보라카이 명물 초리소 패티 버거.", emoji: "🍔" },
      { name: "코코넛 쉐이크", description: "신선한 코코넛으로 만든 트로피컬 음료.", emoji: "🥥" },
      { name: "시식", description: "식초에 재운 해산물 세비체 스타일의 필리핀 전통 요리.", emoji: "🐟" },
    ],
    tips: [
      "환경세(₱300)와 보트 터미널비를 현금으로 준비하세요.",
      "우기(6~10월)에는 화이트 비치 쪽 파도가 높아져 불라복 비치가 더 적합합니다.",
      "보라카이는 플라스틱 빨대 사용이 금지되어 있습니다.",
      "일몰 세일링 투어(파라우 보트)는 보라카이의 하이라이트입니다.",
    ],
  },

  // ===== PALAWAN =====
  "philippines/palawan/el-nido": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "석회암 절벽과 에메랄드빛 라군으로 둘러싸인 필리핀 최고의 자연 경관. 아일랜드 호핑 투어(A/B/C/D)로 비밀 해변과 숨겨진 라군을 탐험하는 천국 같은 여행지입니다.",
    bestTime: "12~3월 (건기, 맑은 날씨)",
    stayArea: "엘니도 타운 프로퍼 / 코롱코롱 비치",
    transport: "푸에르토 프린세사에서 밴 5~6시간 / 마닐라 직항",
    districts: [
      { name: "엘니도 타운", nameEn: "El Nido Town", description: "레스토랑, 투어 예약, 숙소가 모인 중심 마을.", highlights: ["리오 비치", "투어 보트 선착장", "아트 카페"] },
      { name: "코롱코롱 비치", nameEn: "Corong-Corong Beach", description: "엘니도 타운 남쪽의 한적한 해변으로 일몰 명소.", highlights: ["일몰 카약", "비치 바", "라스 카바나스 비치"] },
    ],
    attractions: [
      { name: "엘니도 아일랜드 호핑", nameEn: "El Nido Island Hopping", description: "투어 A~D까지 각기 다른 섬과 라군, 비밀 해변을 방문하는 엘니도의 핵심 액티비티.", category: "해양", tip: "투어 A(빅 라군·스몰 라군)와 투어 C(시크릿 비치·헬리콥터 아일랜드)가 가장 인기입니다." },
      { name: "빅 라군", nameEn: "Big Lagoon", description: "석회암 절벽 사이 에메랄드빛 라군에서 카약을 즐기는 투어 A의 하이라이트.", category: "자연" },
      { name: "시크릿 비치", nameEn: "Secret Beach", description: "바위틈을 헤엄쳐 들어가야 만날 수 있는 숨겨진 백사장.", category: "해변" },
      { name: "나크판 비치", nameEn: "Nacpan Beach", description: "4km 길이의 야자수 해변으로 '필리핀에서 가장 아름다운 해변'으로 선정.", category: "해변", tip: "오토바이로 약 40분 거리, 일몰이 특히 아름답습니다." },
    ],
    dayTrips: [
      { name: "코론", nameEn: "Coron", description: "난파선 다이빙과 카얀간 호수로 유명한 팔라완 북부의 섬.", travelTime: "보트 약 3~4시간", gradient: "from-blue-500 to-indigo-700" },
    ],
    localFood: [
      { name: "킬라윈", description: "식초와 코코넛 밀크에 재운 신선한 해산물 요리.", emoji: "🦐" },
      { name: "팬싯 칸톤", description: "볶음면 요리로 현지 식당에서 저렴하게 즐길 수 있는 서민 음식.", emoji: "🍜" },
    ],
    tips: [
      "아일랜드 호핑 투어는 전날 예약하면 충분합니다 (₱1,200~1,500/인).",
      "엘니도에는 ATM이 적으니 현금을 충분히 준비하세요.",
      "방수 가방과 아쿠아슈즈는 필수 준비물입니다.",
      "성수기(12~3월)에는 숙소를 미리 예약하세요.",
    ],
  },
  "philippines/palawan/puerto-princesa": {
    heroGradient: "from-teal-500 to-green-800",
    description: "팔라완의 주도이자 세계 7대 자연경관 중 하나인 지하 강(Underground River)이 있는 도시. 맹그로브 숲과 석회암 지형이 어우러진 자연의 보고로, 팔라완 여행의 관문입니다.",
    bestTime: "12~5월 (건기)",
    stayArea: "시티 센터 / 리살 애비뉴 주변",
    transport: "트라이시클, 밴, 그랩 (제한적)",
    districts: [
      { name: "시티 센터", nameEn: "City Center", description: "리살 애비뉴를 중심으로 레스토랑과 숙소가 밀집한 중심부.", highlights: ["리살 애비뉴", "베이워크", "이머큘레이트 성당"] },
    ],
    attractions: [
      { name: "지하 강", nameEn: "Underground River", description: "8.2km 길이의 세계에서 가장 긴 지하 항해 가능 강으로 UNESCO 세계유산이자 세계 7대 자연경관.", category: "유네스코", tip: "사전 허가증이 필요하며 투어 업체를 통해 예약하세요. 배에서 입을 닫으세요(박쥐 배설물)!" },
      { name: "혼다 베이 호핑", nameEn: "Honda Bay Island Hopping", description: "스타피시 아일랜드, 카우리 아일랜드 등 맑은 바다를 돌아보는 아일랜드 호핑.", category: "해양" },
      { name: "이와힉 반딧불 투어", nameEn: "Iwahig Firefly Watching", description: "맹그로브 숲에서 보트를 타고 수천 마리 반딧불이를 감상하는 야간 투어.", category: "자연", tip: "해질 녘에 출발하며 우기에는 반딧불이 더 많습니다." },
      { name: "베이커스 힐", nameEn: "Baker's Hill", description: "빵집과 정원, 전망대가 있는 가족 친화적 관광지.", category: "관광" },
    ],
    dayTrips: [
      { name: "엘니도", nameEn: "El Nido", description: "석회암 절벽과 비밀 라군의 천국.", travelTime: "밴 약 5~6시간", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "크로커다일 시식", description: "팔라완 특산 악어 고기 요리로 담백한 맛이 특징.", emoji: "🐊" },
      { name: "투투", description: "코코넛과 찹쌀로 만든 팔라완 전통 간식.", emoji: "🥥" },
      { name: "치킨 이나살", description: "레몬그라스와 식초로 양념한 필리핀식 그릴 치킨.", emoji: "🍗" },
    ],
    tips: [
      "지하 강 투어는 하루 입장객이 제한되므로 최소 2~3일 전에 예약하세요.",
      "푸에르토 프린세사에서 엘니도까지 밴은 오전에 출발하는 것이 좋습니다.",
      "베이워크에서 저녁 식사를 하며 일몰을 감상하세요.",
    ],
  },
};

export const philippinesAttractionDetails: Record<string, AttractionDetail> = {
  // ===== MANILA =====
  "philippines/manila-luzon/manila/intramuros": {
    heroGradient: "from-red-500 to-yellow-600",
    description: "1571년 스페인 총독 레가스피가 건설한 성벽 도시로 마닐라의 역사적 심장부. 산티아고 요새, 마닐라 대성당, 카사 마닐라 박물관 등 스페인 식민 시대의 건축물이 밀집해 있습니다.",
    history: "1571년 스페인 식민 통치의 수도로 건설되었으며, 제2차 세계대전 마닐라 전투에서 대부분 파괴된 후 복원되었습니다. '벽 안의 도시'라는 뜻으로 약 0.67km² 면적에 성벽이 둘러싸여 있습니다.",
    visitInfo: {
      hours: "산티아고 요새: 매일 08:00~18:00",
      admission: "산티아고 요새 ₱75 / 카사 마닐라 ₱75",
      address: "Intramuros, Manila, Metro Manila",
      website: "https://intramuros.gov.ph",
    },
    highlights: [
      "산티아고 요새 – 리살이 마지막으로 수감된 역사적 장소",
      "마닐라 대성당 – 화려한 스테인드글라스와 로마네스크 건축",
      "카사 마닐라 박물관 – 스페인 시대 상류층 가옥 재현",
      "산 아구스틴 교회 – UNESCO 세계유산, 필리핀 최고(最古) 석조 교회",
    ],
    nearbyAttractions: ["리살 공원", "마닐라 오션 파크", "차이나타운"],
    photoTips: "성벽 위에서 촬영하면 인트라무로스 전체를 담을 수 있습니다. 오후 골든아워에 산티아고 요새에서 촬영하세요.",
    tips: [
      "대나무 자전거 투어(₱500~700)가 가장 효율적인 관광 방법입니다.",
      "일요일에는 무료 워킹 투어가 진행됩니다.",
      "인트라무로스 골프장은 세계에서 가장 오래된 골프장 중 하나입니다.",
    ],
  },
  "philippines/manila-luzon/manila/rizal-park": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "필리핀 국민 영웅 호세 리살이 1896년 스페인 식민정부에 의해 처형된 장소에 세워진 58헥타르 규모의 국립공원. 리살 기념비, 국립박물관, 중국 정원, 일본 정원 등이 있는 마닐라 시민의 휴식처입니다.",
    history: "1820년 루네타(Luneta)로 불리며 스페인 시대 산책로로 사용되었습니다. 1896년 12월 30일 호세 리살이 이곳에서 처형된 후, 필리핀 독립의 상징이 되었습니다.",
    visitInfo: {
      hours: "매일 05:00~21:00",
      admission: "무료",
      address: "Ermita, Manila, Metro Manila",
    },
    highlights: [
      "리살 기념비 – 24시간 근위병이 지키는 국민 영웅의 유해 안장지",
      "국립박물관 – 미술, 자연사, 인류학 3개 건물 무료 관람",
      "중국 정원 & 일본 정원 – 조용한 산책로",
      "릴리프 맵 오브 더 필리핀 – 필리핀 지도를 조형물로 재현",
    ],
    nearbyAttractions: ["인트라무로스", "마닐라 오션 파크", "국립박물관"],
    photoTips: "리살 기념비는 오전 빛이 정면에서 비쳐 촬영에 좋습니다. 일몰 시간에 마닐라 만 방향으로 촬영하세요.",
    tips: [
      "국립박물관(미술관, 자연사 박물관, 인류학 박물관) 3곳 모두 무료입니다.",
      "주말에는 현지인들의 피크닉 장소로 활기찹니다.",
      "야간에는 분수 쇼가 진행됩니다.",
    ],
  },

  // ===== CEBU =====
  "philippines/visayas/cebu/magellans-cross": {
    heroGradient: "from-cyan-500 to-blue-700",
    description: "1521년 포르투갈 탐험가 페르디난드 마젤란이 세부에 도착하여 세운 나무 십자가. 필리핀 기독교 역사의 시작을 상징하며, 팔각정(키오스크) 안에 보존되어 있습니다.",
    history: "1521년 4월 라자 후마본 왕과 800여 명의 세부인이 세례를 받은 것을 기념하여 마젤란이 세운 십자가입니다. 현재 보이는 나무 껍질 안에 원래 십자가가 보존되어 있다고 전해집니다.",
    visitInfo: {
      hours: "매일 08:00~18:00",
      admission: "무료",
      address: "P. Burgos St, Cebu City, 6000 Cebu",
    },
    highlights: [
      "팔각정 천장화 – 마젤란의 도착과 세례 장면을 그린 프레스코",
      "원래 십자가 – 나무 껍질 안에 보존된 1521년 원본",
      "양초 기도 – 현지인들이 소원을 비는 종교 의식",
    ],
    nearbyAttractions: ["산토 니뇨 성당", "콜론 거리", "세부 헤리티지 기념비"],
    tips: [
      "산토 니뇨 성당 바로 옆에 있으니 함께 방문하세요.",
      "양초를 사서 기도하는 현지 문화를 체험해보세요 (₱10~20).",
      "관광객이 적은 오전 이른 시간 방문을 추천합니다.",
    ],
  },

  // ===== BOHOL =====
  "philippines/visayas/bohol/chocolate-hills": {
    heroGradient: "from-amber-500 to-brown-800",
    description: "보홀의 상징인 1,200개 이상의 대칭적인 원뿔형 언덕. 건기(2~5월)에 잔디가 갈색으로 변하면 마치 초콜릿을 늘어놓은 것처럼 보여 '초콜릿 힐스'라는 이름이 붙었습니다.",
    history: "산호 석회암이 수백만 년에 걸쳐 풍화와 침식으로 형성된 지질학적 유산으로, 정확한 형성 원인은 아직 과학적으로 완전히 규명되지 않았습니다. 필리핀 국가 지질 기념물로 지정되어 있습니다.",
    visitInfo: {
      hours: "매일 08:00~17:30",
      admission: "₱50",
      address: "Carmen, Bohol",
    },
    highlights: [
      "카르멘 전망대 – 214계단 위 360도 파노라마 전망",
      "초콜릿 힐스 ATV – 언덕 사이를 달리는 사륜 바이크 체험",
      "우기 vs 건기 – 녹색(우기)과 갈색(건기) 두 가지 풍경",
    ],
    nearbyAttractions: ["타르시어 보호구역", "로복 강 크루즈", "힌다간 동굴"],
    photoTips: "오전 빛에서 그림자가 생겨 언덕의 입체감이 살아납니다. 드론 촬영이 가능하면 최고의 결과를 얻을 수 있습니다.",
    tips: [
      "카르멘(Carmen) 전망대와 사구이탄(Sagbayan) 전망대 중 카르멘이 더 유명합니다.",
      "오전 일찍 방문하면 관광 버스가 도착하기 전 여유롭게 감상할 수 있습니다.",
      "ATV 체험(₱300~500)은 건기에 더 쾌적합니다.",
    ],
  },

  // ===== BORACAY =====
  "philippines/visayas/boracay/white-beach": {
    heroGradient: "from-sky-400 to-cyan-700",
    description: "보라카이의 대명사인 4km 길이의 화이트 샌드 비치. 파우더처럼 고운 하얀 모래와 투명한 청록색 바다, 야자수 그늘이 어우러진 세계 최고의 해변 중 하나로, 일몰이 특히 아름답습니다.",
    history: "1970년대까지 소수의 배낭여행자들만 알던 숨겨진 해변이었으나, 1990년대부터 세계적인 관광지로 성장했습니다. 2018년 환경 오염으로 6개월간 폐쇄 후 재개장하여 더욱 깨끗해졌습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료 (환경세 ₱300 별도)",
      address: "White Beach, Boracay Island, Malay, Aklan",
    },
    highlights: [
      "일몰 – 스테이션 1~3에서 바라보는 화려한 일몰",
      "파라세일링 – 해변 위에서 보라카이를 조감하는 액티비티",
      "비치 바 – 해변을 따라 이어지는 바와 레스토랑",
      "파우더 모래 – 맨발로 걸어도 뜨겁지 않은 고운 모래",
    ],
    nearbyAttractions: ["윌리스 록", "디몰", "불라복 비치"],
    photoTips: "일몰 30분 전부터 스테이션 1 방향에서 촬영하면 실루엣 사진이 멋집니다. 윌리스 록을 전경에 넣으면 보라카이의 아이코닉한 사진을 얻을 수 있습니다.",
    tips: [
      "스테이션 1의 모래가 가장 곱고 해변이 가장 넓습니다.",
      "해변에서 음주 및 흡연은 ₱5,000 벌금이 부과될 수 있습니다.",
      "일몰 세일링(파라우 보트, ₱200~300)은 필수 체험입니다.",
    ],
  },

  // ===== EL NIDO =====
  "philippines/palawan/el-nido/island-hopping": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "엘니도의 핵심 액티비티인 아일랜드 호핑 투어. A~D 4가지 코스가 있으며 각각 다른 라군, 비밀 해변, 스노클링 포인트를 방문합니다. 석회암 절벽과 에메랄드빛 바다가 만들어내는 절경을 만끽할 수 있습니다.",
    history: "엘니도는 고대부터 중국 상인들과의 교역이 이루어진 곳으로, 제비집(Bird's Nest)이 유명해 스페인어로 '둥지'라는 뜻의 'El Nido'라는 이름이 붙었습니다.",
    visitInfo: {
      hours: "투어 출발: 보통 09:00 / 복귀: 16:00~17:00",
      admission: "투어 A/C: ₱1,200~1,500 / 투어 B/D: ₱1,200~1,400 (점심 포함)",
      address: "El Nido Boat Terminal, El Nido, Palawan",
    },
    highlights: [
      "투어 A – 빅 라군, 스몰 라군, 시미주 아일랜드, 시크릿 라군",
      "투어 C – 시크릿 비치, 헬리콥터 아일랜드, 마틴록 신사",
      "투어 B – 엔탈루라 비치, 스네이크 아일랜드, 피나부유탄 아일랜드",
      "투어 D – 이피일 비치, 캐드라오 라군, 파라다이스 비치",
    ],
    nearbyAttractions: ["나크판 비치", "라스 카바나스 비치", "코롱코롱 비치"],
    photoTips: "빅 라군에서 카약 위에서 촬영하면 석회암 절벽의 반영 사진을 찍을 수 있습니다. 수중 카메라를 준비하세요.",
    tips: [
      "투어 A와 C가 가장 인기 있으며 경치가 뛰어납니다.",
      "빅 라군 카약 대여비(₱200)는 투어 비용에 포함되지 않습니다.",
      "환경세(₱200)와 빅/스몰 라군 입장료(₱200)가 별도입니다.",
      "방수 가방은 필수! 보트 이동 시 짐이 젖을 수 있습니다.",
    ],
  },

  // ===== PUERTO PRINCESA =====
  "philippines/palawan/puerto-princesa/underground-river": {
    heroGradient: "from-teal-500 to-green-800",
    description: "세계에서 가장 긴 지하 항해 가능한 강(8.2km)으로 UNESCO 세계유산이자 세계 7대 자연경관 중 하나. 사방(Sabang)에서 보트를 타고 석회암 동굴 속 4.3km 구간을 탐험하며 수백만 년에 걸쳐 형성된 종유석과 석순을 감상합니다.",
    history: "수백만 년에 걸쳐 형성된 석회암 카르스트 지형으로, 1971년 과학 탐사로 세상에 알려졌습니다. 1999년 UNESCO 세계유산에 등재되었고, 2012년 세계 7대 자연경관에 선정되었습니다.",
    visitInfo: {
      hours: "매일 08:00~16:00 (마지막 보트 15:30)",
      admission: "₱500 (환경세·보트비 포함) + 오디오 가이드 ₱150",
      address: "Sabang, Puerto Princesa, Palawan",
      website: "https://www.puerto-undergroundriver.com",
    },
    highlights: [
      "종유석·석순 – 수백만 년에 걸쳐 형성된 거대한 석회암 조형물",
      "박쥐 서식지 – 동굴 천장을 가득 메운 수만 마리의 박쥐",
      "지하 대성당 – 높이 60m의 거대한 동굴 공간",
      "석회암 절벽 – 동굴 입구의 웅장한 절벽과 맹그로브 숲",
    ],
    nearbyAttractions: ["사방 비치", "지플라인 투어", "맹그로브 패들보드"],
    photoTips: "동굴 내부는 어두우므로 ISO를 높이고 플래시 없이 촬영하세요. 보트 입구 석회암 절벽이 포토 포인트입니다.",
    tips: [
      "하루 입장 인원이 제한되므로 최소 2~3일 전에 투어 업체를 통해 예약하세요.",
      "푸에르토 프린세사에서 사방까지 밴 약 1.5시간 + 보트 15분 소요됩니다.",
      "보트에서 입을 벌리지 마세요 – 박쥐 배설물이 떨어질 수 있습니다.",
      "멀미약을 준비하면 좋습니다 (사방행 보트가 흔들릴 수 있음).",
    ],
  },

  // ===== BANAUE =====
  "philippines/manila-luzon/banaue/rice-terraces": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "2,000년 이상 이푸가오 원주민이 손으로 깎아 만든 해발 1,500m 계단식 논. 'Stairway to Heaven(하늘로 가는 계단)'이라 불리며, 모두 이으면 지구 반 바퀴를 돌 수 있는 규모입니다. UNESCO 세계유산에 등재되어 있습니다.",
    history: "약 2,000~6,000년 전 이푸가오 원주민이 코르디예라 산맥 경사면을 깎아 계단식 논을 만들었습니다. 무야오 돌담 기술로 물의 흐름을 제어하며, 현재까지 전통 농법이 유지되고 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (뷰포인트)",
      admission: "환경세 ₱50 / 가이드비 별도 (₱500~800)",
      address: "Banaue, Ifugao, Cordillera Administrative Region",
    },
    highlights: [
      "바나웨 뷰포인트 – 도로변에서 감상하는 계단식 논 파노라마",
      "바탓 라이스 테라스 – 원형극장 모양의 더 보존된 계단식 논",
      "탑피야 폭포 – 바탓에서 트레킹으로 도달하는 시원한 폭포",
      "이푸가오 문화 체험 – 전통 의상, 춤, 직조 체험",
    ],
    nearbyAttractions: ["바탓 마을", "방아안 라이스 테라스", "사가다"],
    photoTips: "논에 물이 차는 3~4월이 촬영 최적 시기입니다. 이른 아침 안개가 걷히는 순간이 가장 드라마틱합니다.",
    tips: [
      "바탓까지 트레킹(편도 45분)에는 트레킹화가 필수입니다.",
      "현지 가이드를 고용하면 숨은 뷰포인트와 문화 해설을 들을 수 있습니다.",
      "우기(7~10월)에는 길이 미끄럽고 산사태 위험이 있으니 주의하세요.",
      "마닐라에서 야간 버스로 8~9시간 소요됩니다 (오하요스, 큐러너 버스).",
    ],
  },
};
