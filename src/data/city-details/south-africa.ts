import type { CityDetail, AttractionDetail } from "../city-details";

export const southAfricaCityDetails: Record<string, CityDetail> = {
  // ===== WESTERN CAPE =====
  "south-africa/western-cape/cape-town": {
    heroGradient: "from-blue-500 to-teal-800",
    description: "아프리카에서 가장 아름다운 도시로 손꼽히는 케이프타운. 테이블 마운틴이 내려다보는 항구 도시로 다채로운 보카프 지구, 두 대양이 만나는 케이프 포인트, 그리고 아파르트헤이트의 역사를 간직한 로벤 섬이 있습니다.",
    bestTime: "11~4월 (남반구 여름, 건조하고 쾌적)",
    stayArea: "보위 워터프론트 / 가든스 / 드 왓어칸트",
    transport: "MyCiTi 버스, 우버, 렌터카 (와인랜드·케이프 포인트 방문 시 필수)",
    districts: [
      { name: "보카프", nameEn: "Bo-Kaap", description: "케이프 말레이 문화가 살아있는 형형색색의 집들이 늘어선 구릉 지구. 케이프타운에서 가장 인스타그램에 자주 등장하는 동네.", highlights: ["알록달록 페인트 집", "보카프 박물관", "오렌지 스트리트 모스크"] },
      { name: "V&A 워터프론트", nameEn: "V&A Waterfront", description: "빅토리아 앤드 알버트 항구를 중심으로 한 복합 쇼핑·문화 지구. 로벤 섬 페리 승강장이 여기에 있습니다.", highlights: ["넬슨 만델라 게이트웨이", "케이프 휠", "워터프론트 수족관"] },
      { name: "가든스·시티볼", nameEn: "Gardens-City Bowl", description: "케이프타운 도심의 고급 주거·상업 지구. 남아공 의회 건물, 컴퍼니즈 가든 공원, 사우스 아프리카 국립미술관이 있습니다.", highlights: ["컴퍼니즈 가든", "남아공 국립미술관", "테이블 마운틴 케이블카 기점"] },
    ],
    attractions: [
      { name: "테이블 마운틴", nameEn: "Table Mountain", description: "케이프타운의 상징이자 세계 7대 자연경관. 납작한 정상에서 케이프타운 시내와 두 대양이 만나는 파노라마 뷰를 자랑하는 높이 1,086m의 산.", category: "자연", tip: "날씨가 변덕스럽습니다. 구름이 없는 날 케이블카를 타세요. 케이블카 운행 전 날씨 앱 확인 필수." },
      { name: "로벤 섬", nameEn: "Robben Island", description: "넬슨 만델라가 27년 중 18년을 복역한 정치범 수용소. 현재는 유네스코 세계문화유산으로 옛 수감자들이 직접 안내하는 투어가 감동적입니다.", category: "역사", tip: "페리는 V&A 워터프론트 넬슨 만델라 게이트웨이에서 출발합니다. 날씨에 따라 결항 가능성이 있으니 유연하게 일정을 잡으세요." },
      { name: "보카프", nameEn: "Bo-Kaap", description: "케이프 말레이 무슬림 커뮤니티의 전통 동네. 알록달록한 파스텔 컬러 집들이 테이블 마운틴을 배경으로 늘어선 케이프타운 최고의 포토 스폿.", category: "지구" },
      { name: "케이프 포인트", nameEn: "Cape Point", description: "아프리카 최남서단으로 대서양과 인도양이 만나는 절벽. 케이프 오브 굿 호프와 함께 케이프 반도 국립공원의 하이라이트.", category: "자연" },
      { name: "하우트 베이", nameEn: "Hout Bay", description: "케이프 반도 서쪽의 아름다운 만에 자리한 어촌 마을. 바다표범 섬(두이커 섬) 보트 투어가 인기.", category: "마을" },
    ],
    dayTrips: [
      { name: "스텔렌보스·와인랜드", nameEn: "Stellenbosch Wine Lands", description: "케이프타운 외곽의 세계적 와인 산지. 역사적인 케이프 더치 건축과 포도밭 투어.", travelTime: "차량 약 45분", gradient: "from-purple-500 to-red-700" },
      { name: "케이프 반도", nameEn: "Cape Peninsula", description: "채프만스 피크 드라이브와 케이프 포인트를 잇는 드라이브 코스.", travelTime: "차량 약 1.5시간", gradient: "from-teal-400 to-blue-700" },
    ],
    localFood: [
      { name: "보보티에", description: "말레이 향신료를 넣은 달콤·짭짤한 다진 고기 캐서롤 위에 계란 커스터드를 얹어 구운 남아공 대표 음식.", emoji: "🍲" },
      { name: "브라이", description: "남아공식 바비큐. 장작불에 고기를 굽는 남아공 사람들의 최애 주말 활동으로 소시지(보어워스)가 특히 맛있습니다.", emoji: "🥩" },
      { name: "케이프 말레이 카레", description: "달콤하고 향긋한 케이프 말레이 전통 카레. 치킨이나 양고기 카레에 파파담과 사모사가 곁들여집니다.", emoji: "🍛" },
    ],
    tips: [
      "케이프타운은 좁은 지역에 많은 볼거리가 있지만 대중교통이 불편합니다. 렌터카를 추천합니다.",
      "테이블 마운틴 케이블카는 강풍으로 자주 운행 중단됩니다. 일정에 여유를 두세요.",
      "여름(11~4월)에도 저녁에는 서늘하니 겉옷을 준비하세요.",
      "치안 상황을 미리 확인하고 야간 외출 시 특히 주의하세요.",
    ],
  },
  "south-africa/western-cape/stellenbosch": {
    heroGradient: "from-purple-500 to-red-800",
    description: "케이프타운에서 45분 거리의 세계적 와인 산지. 17세기에 조성된 케이프 더치 건축 양식의 흰 벽 건물들과 참나무가 늘어선 메인 거리, 300개 이상의 와이너리가 어우러진 남아공 최고의 고풍스러운 도시.",
    bestTime: "2~4월 (포도 수확 시즌) / 9~11월 (봄 꽃 시즌)",
    stayArea: "스텔렌보스 시내 / 프란슈훅 게스트하우스",
    transport: "렌터카 (와이너리 방문 필수), 호프온합스오프 와인 버스",
    districts: [
      { name: "스텔렌보스 시내", nameEn: "Stellenbosch Town", description: "케이프 더치 건축물이 보존된 대학 도시 중심지. 카페, 레스토랑, 갤러리가 밀집합니다.", highlights: ["도르프스트라트(빌리지 스트리트)", "스텔렌보스 대학", "브랙 스트리트"] },
      { name: "프란슈훅", nameEn: "Franschhoek", description: "17세기 프랑스 위그노 난민들이 정착한 계곡 마을. '프랑스 코너'라는 뜻답게 프랑스 요리 레스토랑과 와이너리로 가득합니다.", highlights: ["프란슈훅 와인 트램", "위그노 기념관", "부티크 레스토랑"] },
    ],
    attractions: [
      { name: "와이너리 투어", nameEn: "Winery Tours", description: "세계적으로 유명한 루스텐버그, 스파이어, 카브리에르 등 300개 이상의 와이너리를 방문해 시음하고 포도밭 풍경을 즐기는 스텔렌보스 최고의 경험.", category: "체험", tip: "와인 시음 후 운전은 절대 금지입니다. 지정 드라이버를 정하거나 와인 버스를 이용하세요." },
      { name: "스텔렌보스 마을", nameEn: "Stellenbosch Village", description: "남아공에서 두 번째로 오래된 도시(1679년 창건)의 역사적 거리와 케이프 더치 건축물.", category: "역사", tip: "스텔렌보스 역사 마을 투어(도보)가 참나무 거리의 케이프 더치 건축물을 이해하는 데 도움이 됩니다." },
    ],
    dayTrips: [
      { name: "케이프타운", nameEn: "Cape Town", description: "테이블 마운틴과 두 대양이 만나는 아프리카 남단 대도시.", travelTime: "차량 약 45분", gradient: "from-blue-500 to-teal-800" },
    ],
    localFood: [
      { name: "케이프 와인", description: "시라즈, 카베르네 소비뇽, 피노타주(남아공 독자 품종)로 만든 세계 수준의 남아공 와인을 와이너리에서 직접 시음하세요.", emoji: "🍷" },
      { name: "브라이 플래터", description: "스텔렌보스 레스토랑의 풍성한 남아공 BBQ 플래터. 보어워스, 갭스, 스파이스드 립이 함께 나옵니다.", emoji: "🥩" },
    ],
    tips: [
      "와인 시음 1곳당 약 100~200랜드이며 일부 와이너리는 사전 예약이 필요합니다.",
      "호프온홉오프 와인 버스(약 200랜드/일)로 주요 와이너리를 편리하게 방문 가능합니다.",
      "2월 포도 수확 시즌에는 와이너리마다 특별 행사가 열립니다.",
    ],
  },

  // ===== GAUTENG =====
  "south-africa/gauteng/johannesburg": {
    heroGradient: "from-yellow-500 to-amber-900",
    description: "남아공 최대 도시이자 경제 수도. 금광 발견으로 탄생한 '황금 도시'로 아파르트헤이트의 역사가 살아있는 소웨토, 넬슨 만델라 관련 유적, 아프리카 최대 금융 중심지가 공존하는 역동적인 메트로폴리탄.",
    bestTime: "4~9월 (건기, 쾌적한 날씨)",
    stayArea: "샌드튼 / 멜빌 / 뉴타운",
    transport: "우버 (필수), 가우트레인(공항-샌드튼 연결), 렌터카",
    districts: [
      { name: "샌드튼", nameEn: "Sandton", description: "남아공 최대 비즈니스·쇼핑 지구로 아프리카에서 가장 부유한 1㎢²라 불립니다. 넬슨 만델라 광장이 중심에 있습니다.", highlights: ["넬슨 만델라 광장", "샌드튼 시티 쇼핑몰", "가우트레인 역"] },
      { name: "소웨토", nameEn: "Soweto", description: "아파르트헤이트 시대 흑인 강제 거주 구역이었던 역사적 타운십. 오늘날 활기찬 문화와 역사 명소가 공존하는 요하네스버그 필수 방문지.", highlights: ["넬슨 만델라 하우스", "올란도 타워", "빌라카지 스트리트"] },
    ],
    attractions: [
      { name: "아파르트헤이트 박물관", nameEn: "Apartheid Museum", description: "남아공 아파르트헤이트(인종격리정책)의 역사를 입체적으로 보여주는 세계 최고 수준의 역사 박물관. 아파르트헤이트의 시작부터 민주화까지를 감동적으로 전달합니다.", category: "박물관", tip: "입장 시 '백인'과 '비백인' 두 가지 입구 중 무작위로 배정받는 체험으로 시작됩니다. 최소 3시간을 할애하세요." },
      { name: "소웨토 투어", nameEn: "Soweto Tour", description: "넬슨 만델라와 데즈먼드 투투 대주교가 살았던 빌라카지 스트리트, 1976년 학생 봉기의 현장 헥터 피터슨 기념관을 돌아보는 역사 투어.", category: "역사", tip: "현지 가이드와 함께하는 투어가 소웨토 문화와 역사를 생생하게 이해하는 최선의 방법입니다." },
      { name: "골드 리프 시티", nameEn: "Gold Reef City", description: "실제 금광 채굴 역사를 체험하는 테마파크. 지하 금광 투어와 놀이기구가 함께 있는 독특한 공간.", category: "테마파크" },
    ],
    dayTrips: [
      { name: "프리토리아", nameEn: "Pretoria", description: "남아공의 행정 수도로 보라색 자카란다 가로수가 10월에 장관을 이룹니다.", travelTime: "차량 약 1시간 / 가우트레인 약 30분", gradient: "from-purple-500 to-violet-800" },
    ],
    localFood: [
      { name: "분니 차우", description: "빵 속을 파내고 카레를 채운 더반 유래의 길거리 음식으로 요하네스버그에서도 인기.", emoji: "🍞" },
      { name: "보어워스", description: "말린 허브와 향신료로 양념한 굵은 소시지. 남아공 브라이의 필수 메뉴.", emoji: "🌭" },
    ],
    tips: [
      "요하네스버그는 치안이 좋지 않습니다. 야간 외출은 반드시 우버를 이용하고 비싼 시계·장신구 착용을 피하세요.",
      "소웨토 투어는 공인 가이드와 함께하는 그룹 투어 형태를 추천합니다.",
      "아파르트헤이트 박물관은 금-골드 리프 시티 복합단지 내에 위치합니다.",
    ],
  },

  // ===== KWAZULU-NATAL =====
  "south-africa/kwazulu-natal/durban": {
    heroGradient: "from-teal-500 to-green-800",
    description: "아프리카 최대 항구를 보유한 도시이자 인도양 연안 최대 리조트 도시. 강력한 인도계 문화의 영향으로 아프리카에서 가장 독특한 음식 문화(분니 차우!)를 자랑하며 서핑과 브레이크 비치로도 유명합니다.",
    bestTime: "5~9월 (건기, 서퍼들의 성수기)",
    stayArea: "더반 노스 비치 / 어멘지무토티 해변",
    transport: "렌터카, 우버, 더반 도시 버스",
    districts: [
      { name: "더반 비치프런트", nameEn: "Durban Beachfront", description: "황금빛 모래사장 3km가 이어지는 인도양 해변과 서핑 명소가 있는 더반의 핵심 관광 지구.", highlights: ["노스 비치", "뱀 파크", "우샤카 마린 월드"] },
      { name: "빅토리아 스트리트 마켓", nameEn: "Victoria Street Market", description: "더반의 인도·줄루 문화가 혼합된 활기찬 시장. 향신료, 섬유, 전통 의약품, 맞춤 의류가 가득합니다.", highlights: ["향신료 시장", "더반 카레 레스토랑", "빅토리아 스트리트"] },
    ],
    attractions: [
      { name: "우샤카 마린 월드", nameEn: "uShaka Marine World", description: "아프리카 최대 해양 테마파크로 수족관, 워터파크, 돌핀 쇼가 한 곳에 있는 더반 최고의 가족 명소.", category: "테마파크", tip: "수족관과 워터파크는 별도 티켓이므로 원하는 시설을 사전에 결정하세요." },
      { name: "더반 비치", nameEn: "Durban Beach", description: "연중 수영 가능한 따뜻한 인도양 해변. 상어 그물이 설치되어 안전하게 수영할 수 있습니다.", category: "해변" },
      { name: "드라켄즈버그 산맥(액세스)", nameEn: "Drakensberg Mountains", description: "더반에서 차로 3~4시간 거리의 드라켄즈버그 암벽화와 하이킹 국립공원 진입로.", category: "자연" },
    ],
    dayTrips: [
      { name: "세인트 루시아 습지", nameEn: "iSimangaliso Wetland Park", description: "유네스코 세계자연유산으로 하마, 악어, 고래 관찰이 가능한 더반 인근 최고의 자연 명소.", travelTime: "차량 약 2.5시간", gradient: "from-green-500 to-teal-700" },
    ],
    localFood: [
      { name: "분니 차우", description: "더반에서 탄생한 남아공 국민 음식. 반으로 자른 빵을 파내고 진한 양고기 또는 콩 카레로 채운 더반의 정체성.", emoji: "🍞" },
      { name: "더반 카레", description: "인도계 이민자들이 수백 년에 걸쳐 현지화한 매콤한 더반식 카레. 다른 어느 나라의 카레와도 다른 독특한 맛.", emoji: "🍛" },
    ],
    tips: [
      "더반 비치는 상어 그물로 보호되지만 지정 수영 구역 내에서만 수영하세요.",
      "인도양 해변이라 남아공의 다른 해변보다 수온이 따뜻합니다.",
      "더반 시내는 치안에 주의가 필요합니다. 야간 이동 시 우버를 이용하세요.",
    ],
  },
};

export const southAfricaAttractionDetails: Record<string, AttractionDetail> = {
  "south-africa/western-cape/cape-town/table-mountain": {
    heroGradient: "from-blue-500 to-teal-800",
    description: "케이프타운의 수호자이자 세계 7대 자연경관 중 하나. 해발 1,086m의 납작한 정상에서 케이프타운 시내, V&A 워터프론트, 두 대양이 만나는 케이프 반도가 360도 파노라마로 펼쳐집니다.",
    history: "유럽인들이 케이프 항로를 개척한 15세기부터 항해의 이정표로 사용되었습니다. 테이블 마운틴은 세계에서 가장 오래된 산 중 하나로 약 6억 년의 지질 역사를 간직합니다.",
    visitInfo: {
      hours: "08:00~18:00 (날씨에 따라 변동 많음, 케이블카 운행 확인 필수)",
      admission: "케이블카 왕복 약 480랜드 (성인) / 등산은 무료",
      address: "Table Mountain, Cape Town",
      website: "https://www.tablemountain.net",
    },
    highlights: [
      "정상에서의 360도 케이프타운·대서양·인도양 파노라마",
      "테이블 마운틴 국립공원의 독특한 핀보스 식물군",
      "인디아 벤스터(악마의 이빨) 조망 포인트",
      "맑은 날 로벤 섬까지 보이는 조망",
    ],
    nearbyAttractions: ["시그널 힐", "라이언스 헤드", "보카프", "케이프 타운 시내"],
    photoTips: "케이블카 도착 후 좌측(남쪽)으로 걸어가면 케이프 포인트와 두 대양이 보이는 최고의 뷰 포인트가 나옵니다. 일몰 시 케이블카를 탑승하면 황혼의 케이프타운을 촬영할 수 있습니다.",
    tips: [
      "케이블카 티켓은 온라인 사전 예약을 강력 권장합니다. 성수기에는 2~3시간 대기가 일반적입니다.",
      "정상의 날씨는 도심과 완전히 다를 수 있습니다. 방수 재킷과 따뜻한 옷을 반드시 챙기세요.",
      "등산 코스(플라텡클립 협곡 코스, 왕복 약 2.5시간)로 올라가고 내려올 때 케이블카를 이용하는 방법도 추천합니다.",
    ],
  },
  "south-africa/western-cape/cape-town/robben-island": {
    heroGradient: "from-gray-600 to-slate-900",
    description: "넬슨 만델라가 27년 수감 중 18년을 보낸 정치범 수용소 섬. 1999년 유네스코 세계문화유산으로 지정되었으며 옛 수감자들이 직접 안내하는 투어를 통해 아파르트헤이트의 역사와 자유의 의미를 생생하게 전달받을 수 있습니다.",
    history: "17세기부터 나환자 수용소, 정신병원으로 사용되다 1960년대 남아공 정부가 정치범 수용소로 전환. 1964년 넬슨 만델라가 수감되었고, 1991년 폐쇄 후 1999년 세계문화유산이 되었습니다.",
    visitInfo: {
      hours: "08:00~17:00 (V&A 워터프론트 출발, 날씨에 따라 취소 가능)",
      admission: "약 750랜드 (페리 왕복 + 투어 포함)",
      address: "Nelson Mandela Gateway, V&A Waterfront, Cape Town",
      website: "https://www.robben-island.org.za",
    },
    highlights: [
      "넬슨 만델라가 실제 수감되었던 독방 방문",
      "옛 정치범 수감자의 직접 안내 투어",
      "아파르트헤이트 시대 수용소 생활 재현",
      "케이프타운 시내와 테이블 마운틴 조망",
    ],
    nearbyAttractions: ["V&A 워터프론트", "아파르트헤이트 박물관(요하네스버그)", "넬슨 만델라 광장"],
    photoTips: "페리에서 테이블 마운틴을 배경으로 한 케이프타운 스카이라인 사진이 아름답습니다.",
    tips: [
      "페리 운항은 날씨(바람·파도) 상황에 따라 취소될 수 있습니다. 일정에 여유를 두세요.",
      "투어 시간은 약 3.5시간이므로 편안한 신발을 착용하세요.",
      "온라인 사전 예약이 매우 중요합니다. 현장 구매 시 매진될 수 있습니다.",
    ],
  },
  "south-africa/gauteng/johannesburg/apartheid-museum": {
    heroGradient: "from-yellow-500 to-amber-900",
    description: "남아공 아파르트헤이트(1948~1994)의 역사를 세계에서 가장 종합적이고 감동적으로 기록한 박물관. 입장부터 인종 분리 체험으로 시작해 관람자 스스로 그 시대의 공포와 저항을 느끼게 합니다.",
    history: "2001년 개관. 아파르트헤이트 시작부터 1994년 넬슨 만델라의 대통령 당선까지의 역사를 22개의 전시 구역에서 방대한 사진·영상·유물로 전시합니다.",
    visitInfo: {
      hours: "09:00~17:00 (월요일 휴관)",
      admission: "180랜드 (성인)",
      address: "Northern Parkway & Gold Reef Road, Johannesburg",
      website: "https://www.apartheidmuseum.org",
    },
    highlights: [
      "입장 시 무작위 배정하는 '백인'/'비백인' 분리 입장 체험",
      "만델라의 27년 수감 생활 재현",
      "1976년 소웨토 학생 봉기의 역사 기록",
      "아파르트헤이트 종식과 민주화 과정",
    ],
    nearbyAttractions: ["골드 리프 시티", "소웨토 투어", "조벅 동물원"],
    photoTips: "박물관 외부의 철창 우리 구조물이 상징적인 사진 포인트입니다.",
    tips: [
      "최소 3시간, 가능하면 반나절을 할애하세요. 전시량이 매우 많습니다.",
      "오디오 가이드(100랜드) 없이도 영어 설명이 잘 되어 있습니다.",
      "인근 골드 리프 시티 카지노 단지 내에 위치해 있어 함께 방문하기 편리합니다.",
    ],
  },
  "south-africa/western-cape/cape-town/bo-kaap": {
    heroGradient: "from-pink-500 to-orange-700",
    description: "케이프타운 도심 언덕에 위치한 케이프 말레이 무슬림 커뮤니티의 전통 동네. 18세기에 동남아시아와 인도에서 온 노예들과 그 후손들이 형성한 지역으로, 각 집의 알록달록한 파스텔 컬러 페인트가 케이프타운의 상징적 이미지가 되었습니다.",
    history: "17~18세기 네덜란드 동인도회사가 인도, 말레이시아, 인도네시아, 동아프리카에서 데려온 노예들이 집을 형성한 지역입니다. 이들의 후손인 '케이프 말레이'는 독특한 요리와 이슬람 문화를 유지해오고 있습니다.",
    visitInfo: {
      hours: "24시간 (박물관 10:00~17:00, 월요일 휴관)",
      admission: "무료 (보카프 박물관 30랜드)",
      address: "Bo-Kaap, Cape Town",
    },
    highlights: [
      "알록달록한 파스텔 컬러 집들이 테이블 마운틴을 배경으로 늘어선 포토 스폿",
      "보카프 박물관의 케이프 말레이 역사",
      "아침 아잔(예배 소리)과 함께 시작되는 동네 분위기",
      "케이프 말레이 쿠킹 클래스",
    ],
    nearbyAttractions: ["테이블 마운틴 케이블카 기점", "보울플라츠", "케이프타운 시청"],
    photoTips: "치호텔 스트리트나 웰링턴 스트리트에서 테이블 마운틴을 배경으로 컬러풀한 집들을 담는 구도가 가장 인기 있는 포토 스폿입니다.",
    tips: [
      "지역 주민들의 프라이버시를 존중하고 집 앞에서 오랜 사진 촬영은 삼가세요.",
      "케이프 말레이 쿠킹 클래스를 통해 이 지역의 음식 문화를 직접 체험해보세요.",
      "이른 아침 태양이 집들을 직접 비출 때가 사진 촬영에 가장 좋은 시간입니다.",
    ],
  },
};
