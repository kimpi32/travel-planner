import type { CityDetail, AttractionDetail } from "../city-details";

export const canadaCityDetails: Record<string, CityDetail> = {
  // ===== ONTARIO =====
  "canada/ontario/toronto": {
    heroGradient: "from-red-500 to-rose-800",
    description: "캐나다 최대 도시이자 금융·문화의 중심지. CN 타워, 멀티문화적 음식, 나이아가라 폭포 투어의 베이스캠프. 북미에서 가장 다양한 민족이 공존하는 '세계 속의 세계'입니다.",
    bestTime: "6~8월 (여름 축제) / 9~10월 (단풍)",
    stayArea: "다운타운 / 킹 웨스트 / 요크빌",
    transport: "TTC 지하철·버스 (프레스토 카드), 스트리트카, 우버",
    districts: [
      { name: "다운타운 코어", nameEn: "Downtown Core", description: "CN 타워, 로저스 센터, 토론토 컨벤션 센터가 집중된 도심부.", highlights: ["CN 타워", "리플리스 아쿠아리움", "로저스 센터"] },
      { name: "킹 웨스트·엔터테인먼트 디스트릭트", nameEn: "King West / Entertainment District", description: "나이트클럽, 레스토랑, 극장이 밀집한 토론토 유흥의 중심지.", highlights: ["TIFF 벨 라이트박스", "세컨드 시티", "루프탑 바"] },
      { name: "켄싱턴 마켓·차이나타운", nameEn: "Kensington Market / Chinatown", description: "빈티지 상점, 스트리트 푸드, 벽화 예술이 살아있는 다문화 동네.", highlights: ["켄싱턴 마켓", "차이나타운", "스파다이나 에비뉴"] },
      { name: "디스틸러리 디스트릭트", nameEn: "Distillery District", description: "빅토리아 시대 위스키 양조장을 개조한 예술·레스토랑·갤러리 복합 지구.", highlights: ["빅토리아 양조장 건물", "아트 갤러리", "크래프트 브루어리"] },
    ],
    attractions: [
      { name: "CN 타워", nameEn: "CN Tower", description: "높이 553m로 세계에서 가장 높은 자유로운 구조물 중 하나. 유리 바닥 전망대와 에지워크 체험이 유명.", category: "전망대", tip: "에지워크(외벽 걷기)는 세계 최고 높이의 익스트림 어트랙션. 사전 예약 필수." },
      { name: "온타리오 왕립 박물관", nameEn: "Royal Ontario Museum", description: "캐나다 최대 박물관으로 이집트 미라, 공룡 화석, 한국관 등 600만 점 소장.", category: "박물관", tip: "한국 문화관이 있어 한국인 방문객에게 특별히 의미 있는 박물관입니다." },
      { name: "나이아가라 폭포 (당일치기)", nameEn: "Niagara Falls", description: "토론토에서 차로 1.5시간 거리. 세계에서 가장 유량이 많은 폭포로 안개 속의 여인(Maid of the Mist) 보트 투어가 명물.", category: "자연", tip: "캐나다 쪽 전망대가 미국 쪽보다 훨씬 웅장한 뷰를 제공합니다." },
      { name: "세인트 로렌스 마켓", nameEn: "St. Lawrence Market", description: "1803년 개장한 토론토의 식품 명소. 내셔널 지오그래픽 선정 세계 최고 식품 시장.", category: "시장", tip: "토요일 파머스 마켓(오전)이 평일보다 더 활기찹니다." },
      { name: "토론토 아일랜즈", nameEn: "Toronto Islands", description: "온타리오 호수 속 군도로 자동차 없이 자전거와 도보로만 이동. 도심 스카이라인을 조망하기 최고의 명소.", category: "공원", tip: "센터 아일랜드 페리는 주말에 긴 줄이 생기니 평일 방문이 좋습니다." },
    ],
    dayTrips: [
      { name: "나이아가라 폭포", nameEn: "Niagara Falls", description: "세계에서 가장 유명한 폭포 중 하나로 캐나다·미국 국경에 위치한 세계적 관광지.", travelTime: "차로 약 1시간 30분 / 버스 약 2시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "알곤킨 주립공원", nameEn: "Algonquin Provincial Park", description: "무스, 비버, 흑곰이 서식하는 7,600km² 자연보호구역. 카누와 하이킹의 천국.", travelTime: "차로 약 3시간", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "피시 앤 칩스", description: "토론토의 피어 원 등 클래식 캐나다 스타일의 피시 앤 칩스.", emoji: "🐟" },
      { name: "푸틴(Poutine)", description: "감자튀김에 그레이비 소스와 치즈 커드를 얹은 캐나다 국민 음식.", emoji: "🍟" },
      { name: "버터 타르트", description: "설탕, 버터, 달걀로 만든 달콤한 미니 타르트는 캐나다 베이커리의 정수.", emoji: "🥧" },
    ],
    tips: [
      "TTC 프레스토 카드는 지하철·버스·스트리트카 모두 사용 가능합니다.",
      "나이아가라 폭포 당일치기는 토론토에서 고속버스 투어($60~80)가 편리합니다.",
      "7월 캐나다 데이(7/1) 축제 기간에는 CN 타워 주변이 인산인해를 이룹니다.",
      "팁 문화는 미국과 유사하게 식당 15~20%가 일반적입니다.",
    ],
  },

  // ===== ONTARIO (나이아가라는 온타리오주) =====
  "canada/ontario/niagara-falls": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "캐나다·미국 국경에 위치한 세계 최고 유량의 폭포. 캐나다 쪽 호스슈 폭포는 너비 792m로 웅장한 곡선형 폭포이며, 안개 속의 여인 보트가 폭포 바로 아래까지 접근합니다.",
    bestTime: "6~8월 (여름) / 12월~2월 (겨울 빛 축제)",
    stayArea: "나이아가라 폴스 시내 (클리프턴 힐 주변)",
    transport: "위고(WEGO) 버스, 도보, 렌터카",
    districts: [
      { name: "폭포 전망 지구", nameEn: "Falls View District", description: "호스슈 폭포와 아메리칸 폭포를 가장 가까이서 볼 수 있는 테이블 록 부근.", highlights: ["테이블 록 전망대", "테이블 록 웰컴 센터", "저니 비하인드 더 폴스"] },
      { name: "클리프턴 힐", nameEn: "Clifton Hill", description: "오락 시설, 레스토랑, 기념품 상점이 밀집한 나이아가라의 엔터테인먼트 지구.", highlights: ["스카이론 타워", "리플리스 믿거나 말거나", "나이아가라 카지노"] },
    ],
    attractions: [
      { name: "테이블 록 전망대", nameEn: "Table Rock Lookout", description: "호스슈 폭포 바로 옆에서 폭포의 굉음과 물보라를 온몸으로 느끼는 무료 전망대.", category: "전망대", tip: "우비 지참 필수. 무료이지만 물보라로 흠뻑 젖을 수 있습니다." },
      { name: "안개 속의 여인 보트 투어", nameEn: "Hornblower/Niagara City Cruises", description: "폭포 바로 아래까지 접근하는 보트 투어로 폭포의 파워를 온몸으로 체험.", category: "투어", tip: "제공되는 폰초(비옷)를 반드시 착용하세요. 완전히 젖습니다." },
      { name: "스카이론 타워", nameEn: "Skylon Tower", description: "해발 236m에서 폭포와 이리 호수를 360도 조망하는 전망타워. 회전 레스토랑도 있음.", category: "전망대" },
    ],
    dayTrips: [
      { name: "나이아가라온더레이크", nameEn: "Niagara-on-the-Lake", description: "나이아가라 와인 루트의 중심이자 빅토리아 시대 건축물이 보존된 아름다운 소도시.", travelTime: "차로 약 20분", gradient: "from-purple-400 to-red-700" },
    ],
    localFood: [
      { name: "나이아가라 아이스와인", description: "나이아가라 반도의 아이스와인은 세계 최고 품질로 유명합니다.", emoji: "🍷" },
      { name: "비프 온 웩", description: "나이아가라 지역 명물 로스트비프 샌드위치.", emoji: "🥪" },
    ],
    tips: [
      "캐나다 쪽이 미국 쪽보다 폭포 정면 뷰가 훨씬 뛰어납니다.",
      "야간 폭포 조명 쇼(5~10월)는 무료로 볼 수 있습니다.",
      "겨울(12~2월)에는 윈터 페스티벌 오브 라이트(빛 축제)가 열립니다.",
    ],
  },

  // ===== BRITISH COLUMBIA =====
  "canada/british-columbia/vancouver": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "산과 바다, 도심이 공존하는 세계에서 가장 살기 좋은 도시 중 하나. 스탠리 파크, 그란빌 아일랜드, 가스타운이 상징인 캐나다 태평양 연안의 관문 도시.",
    bestTime: "6~9월 (맑은 날씨) / 12~3월 (스키 시즌)",
    stayArea: "다운타운 / 로브슨 스트리트 / 예일타운",
    transport: "스카이트레인, 버스, 씨버스, 렌터카 (자전거 친화적)",
    districts: [
      { name: "스탠리 파크", nameEn: "Stanley Park", description: "400헥타르 규모의 도심 숲 공원. 해변 산책로, 토템 폴, 수족관이 있는 밴쿠버의 녹색 폐.", highlights: ["시월 자전거 도로", "토템 폴 지구", "밴쿠버 아쿠아리움"] },
      { name: "그란빌 아일랜드", nameEn: "Granville Island", description: "공공 마켓, 수제 맥주, 예술가 작업실이 공존하는 밴쿠버 최고의 로컬 마켓 지구.", highlights: ["그란빌 아일랜드 퍼블릭 마켓", "아트 갤러리", "브루어리"] },
      { name: "가스타운", nameEn: "Gastown", description: "1867년 밴쿠버 최초 정착지로 증기시계와 빅토리아 양식 건물이 있는 역사 지구.", highlights: ["가스타운 증기시계", "워터 스트리트", "레스토랑 거리"] },
      { name: "노스 밴쿠버·그라우스 마운틴", nameEn: "North Vancouver / Grouse Mountain", description: "캐필라노 서스펜션 브리지, 그라우스 마운틴 스키장·전망대가 있는 자연의 보물창고.", highlights: ["캐필라노 서스펜션 브리지", "그라우스 그라인드", "린 캐니언 공원"] },
    ],
    attractions: [
      { name: "스탠리 파크", nameEn: "Stanley Park", description: "도심 접경의 400헥타르 원시림. 8.8km 시월 자전거 도로에서 스카이라인과 바다를 동시에 감상.", category: "공원", tip: "자전거 렌탈($10~15/시간)로 시월 루프를 도는 것이 가장 인기 있는 코스입니다." },
      { name: "캐필라노 서스펜션 브리지", nameEn: "Capilano Suspension Bridge", description: "협곡 70m 위를 가로지르는 140m 흔들다리. 나무 꼭대기 보행로(트리탑스 어드벤처)도 함께 즐길 수 있음.", category: "자연", tip: "티켓이 비싼 편($60)이지만 밴쿠버 최고의 어드벤처 체험. 온라인 예약 시 할인." },
      { name: "그란빌 아일랜드 퍼블릭 마켓", nameEn: "Granville Island Public Market", description: "신선한 수산물, 수제 빵, 로컬 치즈가 가득한 밴쿠버 최고의 실내 마켓.", category: "시장", tip: "토요일 오전이 가장 활기차지만 주차가 어렵습니다. 페리로 방문을 권장합니다." },
      { name: "그라우스 마운틴", nameEn: "Grouse Mountain", description: "해발 1,250m에서 밴쿠버 시내와 바다를 조망하는 사계절 관광지. 겨울에는 스키장.", category: "자연", tip: "그라우스 그라인드 하이킹(2.9km, 경사 급함)으로 올라가면 곤돌라 하산 티켓($20)만 구입하면 됩니다." },
    ],
    dayTrips: [
      { name: "휘슬러", nameEn: "Whistler", description: "북미 최고의 스키 리조트이자 여름에도 산악 자전거·하이킹으로 유명한 사계절 리조트.", travelTime: "차로 약 2시간 (씨투스카이 하이웨이)", gradient: "from-sky-400 to-blue-700" },
      { name: "빅토리아", nameEn: "Victoria", description: "영국 식민지 시대의 유산이 남아있는 브리티시 컬럼비아 주도. 고풍스러운 부차트 가든으로 유명.", travelTime: "페리 약 1시간 35분", gradient: "from-purple-400 to-indigo-700" },
    ],
    localFood: [
      { name: "스시·사시미", description: "밴쿠버는 일본인 이민자들의 영향으로 세계 최고 수준의 스시를 저렴하게 즐길 수 있습니다.", emoji: "🍣" },
      { name: "클램 차우더", description: "신선한 태평양 조개로 만든 클램 차우더는 밴쿠버 해산물 문화의 정수.", emoji: "🍲" },
      { name: "피스토 크랩", description: "두터운 껍데기의 던저니스 크랩을 통째로 요리한 밴쿠버 해산물 명물.", emoji: "🦀" },
    ],
    tips: [
      "컴퍼스 카드로 스카이트레인, 버스, 씨버스를 모두 이용할 수 있습니다.",
      "여름(7~9월) 밴쿠버는 세계 최고의 도시 날씨를 자랑합니다. 절대 놓치지 마세요.",
      "가스타운 증기시계는 15분마다 증기를 내뿜으니 타이밍을 맞춰 방문하세요.",
      "씨투스카이 하이웨이(99번 도로)는 밴쿠버-휘슬러 구간이 세계적 드라이브 코스입니다.",
    ],
  },

  // ===== QUEBEC =====
  "canada/quebec/montreal": {
    heroGradient: "from-purple-500 to-indigo-800",
    description: "북미 최대 프랑스어권 도시. 올드 몬트리올의 유럽풍 건축, 세계 수준의 미식, 생동감 넘치는 예술 문화가 공존합니다. 캐나다에서 두 번째로 큰 도시이자 창의적 문화의 중심지.",
    bestTime: "6~8월 (재즈 페스티벌, 코미디 페스티벌) / 2월 (겨울 축제)",
    stayArea: "올드 몬트리올 / 플라토 몽루아얄 / 다운타운",
    transport: "STM 메트로(오퍼스 카드), 버스, 빅시(Bixi) 자전거",
    districts: [
      { name: "올드 몬트리올", nameEn: "Old Montreal (Vieux-Montréal)", description: "17세기 프랑스 식민지 시대 건축물이 보존된 역사 지구. 자갈길, 부티크 호텔, 레스토랑이 가득.", highlights: ["노트르담 성당", "플라스 자크 카르티에", "올드 포트"] },
      { name: "플라토 몽루아얄", nameEn: "Plateau Mont-Royal", description: "몬트리올 로컬 문화의 심장부. 트렌디한 카페, 독립 서점, 벽화 예술이 넘치는 동네.", highlights: ["아불로 스트리트", "몽루아얄 공원", "세인트 로랑 대로"] },
      { name: "다운타운·골든 스퀘어 마일", nameEn: "Downtown / Golden Square Mile", description: "몬트리올 대학교, 박물관, 쇼핑몰이 밀집한 도시 중심부.", highlights: ["맥길 대학교", "몬트리올 미술관", "생트 카트린 스트리트"] },
    ],
    attractions: [
      { name: "노트르담 대성당", nameEn: "Notre-Dame Basilica", description: "1829년 완공된 고딕 부흥 양식의 웅장한 성당. 파리 노트르담보다 내부가 화려하다는 평가.", category: "성당", tip: "오딧세이 극장(레이저 쇼)은 사전 예약 권장. 낮 방문은 입장료 CAD$12." },
      { name: "올드 포트", nameEn: "Old Port of Montreal", description: "세인트 로렌스 강변의 역사적 항구를 재개발한 복합 문화 공간. 아이스 스케이트, 집라인, 수상 카약.", category: "문화", tip: "여름에는 야외 영화제와 불꽃축제가 자주 열립니다." },
      { name: "몽루아얄 공원", nameEn: "Mont Royal Park", description: "프레드릭 로 옴스테드(센트럴 파크 설계자)가 설계한 도심 산 공원. 정상에서 몬트리올 전경 조망.", category: "공원", tip: "겨울에는 크로스컨트리 스키, 여름에는 하이킹이 인기. 무료 입장." },
      { name: "몬트리올 지하도시", nameEn: "RÉSO (Underground City)", description: "겨울 혹한을 피해 발달한 세계 최대 지하 복합 네트워크. 33km에 쇼핑몰·호텔·지하철역 연결.", category: "건축" },
    ],
    dayTrips: [
      { name: "퀘벡시티", nameEn: "Quebec City", description: "북미 유일의 성벽 도시로 유네스코 세계유산. 유럽을 그대로 옮겨놓은 듯한 샤토 프롱트낙과 올드 퀘벡.", travelTime: "버스·기차 약 3시간", gradient: "from-blue-400 to-indigo-700" },
      { name: "로렌시안 고원", nameEn: "Laurentians", description: "몬트리올 북쪽의 스키·하이킹·단풍으로 유명한 산악 지대.", travelTime: "차로 약 1~2시간", gradient: "from-red-400 to-orange-700" },
    ],
    localFood: [
      { name: "푸틴(Poutine)", description: "퀘벡 발원지. 감자튀김에 진한 그레이비와 스퀴키 치즈 커드를 얹은 명물.", emoji: "🍟" },
      { name: "베이글", description: "뉴욕 베이글보다 작고 달달한 몬트리올 스타일 베이글은 페어마운트 베이글이 원조.", emoji: "🥯" },
      { name: "스모크드 미트 샌드위치", description: "슈워츠 델리의 훈제 소고기 샌드위치는 몬트리올에서 절대 빠질 수 없는 명물.", emoji: "🥪" },
    ],
    tips: [
      "몬트리올은 공식적으로 프랑스어 도시이지만 영어도 광범위하게 통합니다.",
      "7월 재즈 페스티벌(몬트리올 인터내셔널 재즈 페스티벌)은 세계 최대 규모입니다.",
      "겨울 영하 20°C 혹한에도 지하도시를 통해 따뜻하게 이동할 수 있습니다.",
      "빅시(Bixi) 자전거 쉐어링으로 여름 몬트리올을 탐험하는 것이 가장 효율적입니다.",
    ],
  },

  "canada/quebec/quebec-city": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "북미 유일의 성벽 도시이자 유네스코 세계유산. 1608년 프랑스 탐험가 사뮈엘 드 샹플랭이 건설한 '뉴 프랑스'의 심장. 샤토 프롱트낙과 올드 퀘벡의 유럽풍 거리가 캐나다에서 가장 유럽스러운 도시입니다.",
    bestTime: "6~9월 (여름 축제) / 1~2월 (윈터 카니발)",
    stayArea: "올드 퀘벡 (상부 시가지) / 생 로슈 지구",
    transport: "도보, RTC 버스, 케이블카(푸니쿨레르)",
    districts: [
      { name: "올드 퀘벡 상부(어퍼 타운)", nameEn: "Old Quebec - Upper Town", description: "성채와 샤토 프롱트낙이 있는 퀘벡시티의 심장부.", highlights: ["샤토 프롱트낙", "다름 광장", "퀘벡 성채"] },
      { name: "올드 퀘벡 하부(로어 타운)", nameEn: "Old Quebec - Lower Town", description: "뻬띠 샹플랭 거리와 로얄 광장이 있는 17~18세기 상업 지구.", highlights: ["뻬띠 샹플랭 거리", "플라스 로얄", "문명 박물관"] },
    ],
    attractions: [
      { name: "샤토 프롱트낙", nameEn: "Château Frontenac", description: "세인트 로렌스 강을 내려다보는 절벽 위의 웅장한 고성 형 호텔. 세계에서 가장 많이 사진 찍히는 호텔 중 하나.", category: "랜드마크", tip: "내부 관람은 숙박객이 아니어도 라운지에서 티를 마시며 가능합니다." },
      { name: "뻬띠 샹플랭 거리", nameEn: "Rue du Petit-Champlain", description: "꽃으로 장식된 북미에서 가장 오래된 상업 거리. 퀘벡 공예품, 갤러리, 레스토랑이 밀집.", category: "거리", tip: "크리스마스 시즌에는 동화 같은 조명 장식이 가장 아름답습니다." },
      { name: "플랭즈 달브람 공원", nameEn: "Plains of Abraham", description: "1759년 영국-프랑스 운명의 전투가 벌어진 역사적 벌판이자 현재는 도심 공원.", category: "공원" },
    ],
    dayTrips: [
      { name: "몽모렌시 폭포", nameEn: "Montmorency Falls", description: "나이아가라 폭포보다 30m나 높은 83m 폭포. 집라인과 현수교로 폭포를 체험.", travelTime: "차로 약 15분", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "크레이프", description: "뻬띠 샹플랭 거리의 프렌치 크레이프 가게에서 달달한 크레이프를.", emoji: "🥞" },
      { name: "메이플 시럽 타피", description: "눈 위에 메이플 시럽을 부어 굳힌 전통 간식. 겨울 카니발의 명물.", emoji: "🍁" },
    ],
    tips: [
      "1월 말~2월의 퀘벡 겨울 카니발은 세계 최대 겨울 축제 중 하나입니다.",
      "올드 퀘벡 내 도보 관광이 가능하며 케이블카(푸니쿨레르)로 상하부를 쉽게 이동합니다.",
      "프랑스어가 공용어이지만 관광지에서는 영어도 통합니다. 'Bonjour!'로 인사하면 환영받습니다.",
    ],
  },
};

export const canadaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== TORONTO =====
  "canada/ontario/toronto/cn-tower": {
    heroGradient: "from-red-500 to-rose-800",
    description: "1976년 완공, 높이 553.3m로 2009년까지 세계 최고 높이 독립 구조물이었습니다. 유리 바닥 전망대, 외벽 산책 에지워크, 360도 회전 레스토랑을 갖춘 토론토의 상징입니다.",
    history: "캐나다 국영철도(CN)가 TV·라디오 송신탑 용도로 1973~1976년 건설했습니다. 건설 당시 4,000명의 인부가 참여했으며 공사 중 6명이 사망했습니다. 유리 바닥 전망대는 1994년 추가됐습니다.",
    visitInfo: {
      hours: "09:00~22:30 (연중무휴)",
      admission: "성인 CAD$43 / 유리 바닥 포함 CAD$43 / 에지워크 CAD$195",
      address: "290 Bremner Blvd, Toronto, ON M5V 3L9",
      website: "https://www.cntower.ca",
    },
    highlights: [
      "446m 유리 바닥 전망대에서 발아래 내려다보기",
      "에지워크 - 356m 외벽 난간 위를 안전줄에 의지해 걷기",
      "447m 스카이포드 360도 회전 레스토랑 (1회전 72분)",
      "야경 (저녁 LED 조명쇼)",
    ],
    nearbyAttractions: ["리플리스 아쿠아리움", "로저스 센터", "하버프런트 센터", "온타리오 호수"],
    photoTips: "온타리오 호수 변 하버프런트 센터에서 CN 타워와 호수를 배경으로 담을 수 있습니다. 해질녘 조명이 켜지기 시작할 때가 가장 아름다운 시간대입니다.",
    tips: [
      "에지워크는 체중·신장 제한이 있으며 사전 예약 필수입니다.",
      "야경 관람은 저녁 9시 이후가 도시 불빛이 가장 화려합니다.",
      "CN 타워 + 리플리스 아쿠아리움 콤보 티켓이 별도 구매보다 저렴합니다.",
    ],
  },
  "canada/ontario/niagara-falls/horseshoe-falls": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "초당 168,000m³의 물이 57m 아래로 쏟아지는 세계 최대 유량의 폭포. 너비 792m의 반원형 모양이 말발굽(Horseshoe)을 닮아 붙여진 이름으로 캐나다-미국 국경에 위치합니다.",
    history: "약 10,000년 전 마지막 빙하기가 끝나며 형성됐습니다. 현재의 모습은 1950년 이후 전력 생산을 위한 수량 조절로 형성된 것입니다. 매년 약 60cm씩 침식이 일어나고 있습니다.",
    visitInfo: {
      hours: "연중무휴 24시간 (테이블 록 전망대)",
      admission: "외부 관람 무료 / 보트 투어 CAD$35 / 저니 비하인드 더 폴스 CAD$25",
      address: "Table Rock, Niagara Falls, ON L2E 3W1",
      website: "https://www.niagaraparks.com",
    },
    highlights: [
      "테이블 록에서 폭포와 같은 높이에서 바라보는 전망",
      "저니 비하인드 더 폴스 - 폭포 뒤 터널 관람",
      "나이아가라 시티 크루즈(구 안개 속의 여인) 보트 투어",
      "야간 폭포 조명 쇼 (5~10월)",
    ],
    nearbyAttractions: ["스카이론 타워", "클리프턴 힐", "나이아가라온더레이크", "나이아가라 파크웨이"],
    photoTips: "캐나다 쪽 테이블 록에서 촬영하는 것이 정면 전경을 담기에 가장 좋습니다. 일출 직후 무지개가 폭포에 걸리는 장면은 최고의 포토 찬스.",
    tips: [
      "캐나다 쪽 관람이 미국 쪽보다 폭포 전체 뷰를 더 잘 볼 수 있습니다.",
      "야간 조명 쇼(5~10월)는 무료로 볼 수 있습니다.",
      "겨울에는 얼어붙은 폭포 경관도 신비롭고 아름답습니다.",
    ],
  },

  // ===== VANCOUVER =====
  "canada/british-columbia/vancouver/stanley-park": {
    heroGradient: "from-emerald-400 to-green-700",
    description: "1888년 공원으로 지정된 405헥타르의 도심 원시림. 밴쿠버 다운타운 끝자락에 위치해 도시 스카이라인과 자연이 극적으로 공존합니다. 세계에서 가장 많이 방문하는 도시 공원 중 하나입니다.",
    history: "1887년 캐나다 연방 정부가 영구 보존 공원으로 지정했습니다. 2차 세계대전 당시 공원 내 군사 시설이 설치됐으나 전후 원상복구됐습니다. 스콰미시와 츠웨일라쏘크 원주민 부족의 전통 영토입니다.",
    visitInfo: {
      hours: "연중무휴 24시간 (아쿠아리움 09:30~17:00)",
      admission: "공원 무료 / 밴쿠버 아쿠아리움 성인 CAD$45",
      address: "Stanley Park, Vancouver, BC V6G 1Z4",
      website: "https://vancouver.ca/parks-recreation-culture/stanley-park.aspx",
    },
    highlights: [
      "시월 자전거 도로 8.8km (다운타운 스카이라인·바다 조망)",
      "토템 폴 지구 (6개의 토착 원주민 토템 폴)",
      "브로크턴 포인트 등대",
      "세컨드 비치와 서드 비치 (여름 수영장)",
    ],
    nearbyAttractions: ["가스타운", "잉글리시 베이 비치", "웨스트 엔드", "밴쿠버 아쿠아리움"],
    photoTips: "프로스펙트 포인트에서 바라보는 노스 쇼어 산맥과 라이온스 게이트 브리지가 최고의 뷰. 이른 아침 안개가 걷히는 순간의 토템 폴도 신비롭습니다.",
    tips: [
      "자전거 렌탈은 공원 입구 데낼만 에비뉴 인근에서 가능합니다($10~15/시간).",
      "여름 주말에는 시월 인파가 많으니 평일 이른 아침이 쾌적합니다.",
      "피크닉 가능 구역에서 산과 바다를 보며 식사를 즐겨보세요.",
    ],
  },

  // ===== MONTREAL =====
  "canada/quebec/montreal/notre-dame-basilica": {
    heroGradient: "from-purple-500 to-indigo-800",
    description: "1829년 완공된 고딕 부흥 양식의 걸작. 파란색 금박 별이 가득한 내부 장식은 세계에서 가장 화려한 성당 인테리어 중 하나로 꼽힙니다. 셀린 디온의 결혼식이 이곳에서 거행됐습니다.",
    history: "1672년 처음 교회가 세워진 자리에 1824년 아일랜드 건축가 제임스 오도넬이 설계해 1829년 완공됐습니다. 내부 장식은 1870년대 빅토르 바우두인이 대규모 개조를 진행했습니다.",
    visitInfo: {
      hours: "월~금 08:00~16:30 / 토 08:00~16:00 / 일 12:30~16:00",
      admission: "성인 CAD$12 / 오딧세이 야간 쇼 CAD$25",
      address: "110 Notre-Dame St W, Montreal, QC H2Y 1T1",
      website: "https://www.basiliquenotredame.ca",
    },
    highlights: [
      "파란색 금박별 천장의 압도적인 내부 인테리어",
      "5,772개 파이프 오르간",
      "성 예배당(Chapelle du Sacré-Cœur)의 청동 제단",
      "오딧세이 레이저 쇼(야간)",
    ],
    nearbyAttractions: ["플라스 달마 광장", "올드 포트", "올드 몬트리올 거리", "마르셰 보나방튀르"],
    photoTips: "입장 후 중앙 통로에서 제단을 향해 촬영하는 앵글이 가장 웅장합니다. 삼각대는 반입 불가하지만 스마트폰으로도 충분히 훌륭한 사진을 찍을 수 있습니다.",
    tips: [
      "미사 시간(일요일 오전)에는 관광 입장이 제한됩니다.",
      "오딧세이 레이저 쇼는 화~토 저녁에 진행되며 사전 예약 권장.",
      "성 예배당의 청동 제단 조각이 특히 아름다우니 꼭 방문하세요.",
    ],
  },

  // ===== TORONTO (추가) =====
  "canada/ontario/toronto/royal-ontario-museum": {
    heroGradient: "from-amber-500 to-red-800",
    description: "캐나다 최대이자 북미 5대 자연사·문화 박물관 중 하나. 600만 점 이상의 소장품을 40개 갤러리에 전시하며, 공룡 화석, 이집트 미라, 한국관 등이 특히 유명합니다. 다니엘 리베스킨트가 설계한 크리스탈 증축관의 파격적인 외관도 건축 명소로 꼽힙니다.",
    history: "1912년 개관, 원래 토론토 대학교 부속 박물관으로 출발했습니다. 2007년 다니엘 리베스킨트가 설계한 '마이클 리-친 크리스탈' 증축관이 완공되며 현재의 상징적인 외관을 갖추게 됐습니다. 한국관은 1996년 개설돼 삼국시대부터 조선시대까지의 유물을 전시합니다.",
    visitInfo: {
      hours: "화~일 10:00~17:30 (월요일 휴관, 금요일 20:30까지 연장)",
      admission: "성인 CAD$26 / 학생 CAD$21 / 매월 셋째 주 화요일 17:30~20:30 무료",
      address: "100 Queens Park, Toronto, ON M5S 2C6",
      website: "https://www.rom.on.ca",
    },
    highlights: [
      "공룡 갤러리 - 티라노사우루스 렉스 골격 등 대형 공룡 화석 전시",
      "이집트 갤러리 - 미라와 석관, 고대 이집트 유물 컬렉션",
      "한국 문화관 - 한국 도자기, 갑옷, 전통 의복 등 귀중한 유물",
      "마이클 리-친 크리스탈 - 리베스킨트 설계의 해체주의 건축",
      "보석·광물 갤러리 - 세계 각지의 보석과 광물 3,000점 이상",
    ],
    nearbyAttractions: ["퀸즈 파크", "토론토 대학교", "가디너 박물관", "바타 신발 박물관"],
    photoTips: "블루어 스트리트에서 크리스탈 증축관 전체를 올려다보며 촬영하면 역동적인 건축미를 담을 수 있습니다. 내부에서는 공룡 갤러리의 대형 골격 앞이 인기 포토존입니다.",
    tips: [
      "금요일 저녁(17:30~20:30)은 'ROM Friday Night Live'로 DJ, 칵테일과 함께 박물관을 즐길 수 있습니다.",
      "한국관은 3층에 위치하며 한국어 안내 자료도 비치돼 있습니다.",
      "매월 셋째 주 화요일 저녁은 무료 입장이니 일정에 맞추면 좋습니다.",
      "40개 갤러리를 모두 보려면 최소 3~4시간이 필요합니다.",
    ],
  },
  "canada/ontario/toronto/distillery-district": {
    heroGradient: "from-orange-500 to-amber-800",
    description: "1832년 설립된 구달햄 앤 워츠 위스키 양조장을 2003년 예술·문화·미식 복합 지구로 재개발한 토론토의 대표 명소. 47동의 빅토리아 시대 산업 건축물이 보존된 북미 최대 규모의 역사 산업 건축 클러스터입니다.",
    history: "1832년 제임스 와츠와 윌리엄 구달햄이 위스키 양조장을 설립, 1860년대에는 세계 최대 양조장으로 성장했습니다. 1990년 양조장 폐쇄 후 방치됐다가 2003년 보행자 전용 예술·상업 지구로 탈바꿈했습니다. 영화 촬영지로도 자주 사용됩니다.",
    visitInfo: {
      hours: "상점·갤러리 월~토 10:00~19:00, 일 11:00~18:00 (시즌별 상이)",
      admission: "입장 무료 (개별 상점·갤러리 별도)",
      address: "55 Mill Street, Toronto, ON M5A 3C4",
      website: "https://www.thedistillerydistrict.com",
    },
    highlights: [
      "빅토리아 시대 적벽돌 양조장 건물 47동의 건축 유산",
      "아트 갤러리와 조각 작품이 거리 곳곳에 전시",
      "크래프트 브루어리·위스키 바에서 로컬 수제 주류 테이스팅",
      "토론토 크리스마스 마켓 (11~12월, 캐나다 최대 크리스마스 마켓)",
      "독립 디자이너 부티크와 장인 공방",
    ],
    nearbyAttractions: ["세인트 로렌스 마켓", "슈거 비치", "코크타운", "영 던다스 스퀘어"],
    photoTips: "적벽돌 건물 사이 좁은 골목에서 자연광이 비치는 오후 시간대가 가장 포토제닉합니다. 크리스마스 마켓 시즌의 야간 조명은 환상적인 분위기를 만들어줍니다.",
    tips: [
      "자동차 진입이 불가능한 보행자 전용 지구이니 대중교통이나 도보로 방문하세요.",
      "11~12월 크리스마스 마켓은 입장권이 필요하며 사전 예약이 권장됩니다.",
      "밀 스트리트 브루어리에서 크래프트 맥주 시음이 가능합니다.",
      "여름 주말에는 거리 공연과 예술 행사가 자주 열립니다.",
    ],
  },

  // ===== VANCOUVER (추가) =====
  "canada/british-columbia/vancouver/capilano-suspension-bridge": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "노스 밴쿠버 캐필라노 강 협곡 위 70m 높이에 걸린 140m 길이의 흔들다리. 1889년 처음 건설된 이래 밴쿠버에서 가장 스릴 넘치는 자연 체험 명소로 사랑받고 있습니다. 트리탑스 어드벤처와 클리프워크까지 3대 어트랙션을 한 곳에서 즐길 수 있습니다.",
    history: "1889년 스코틀랜드 토목 기사 조지 그랜트 맥케이가 삼나무 판자와 마닐라 삼줄로 최초 건설했습니다. 1903년 와이어 케이블로 교체, 1956년 현재 규격으로 재건됐습니다. 1983년 낸시 스틸만이 인수해 현재의 관광 공원으로 발전시켰습니다.",
    visitInfo: {
      hours: "09:00~18:00 (여름 08:30~20:00, 겨울 11:00~21:00, 시즌별 상이)",
      admission: "성인 CAD$62.95 / 청소년(13~16) CAD$42.95 / 어린이(6~12) CAD$22.95",
      address: "3735 Capilano Rd, North Vancouver, BC V7R 4J1",
      website: "https://www.capbridge.com",
    },
    highlights: [
      "140m 흔들다리 - 협곡 70m 위에서 울창한 온대 우림 조망",
      "트리탑스 어드벤처 - 더글러스 전나무 꼭대기 7개 현수교 연결 보행로",
      "클리프워크 - 화강암 절벽에 매달린 유리 바닥 산책로",
      "캐니언 라이트(겨울 11~1월) - 수십만 개 LED로 빛나는 협곡",
    ],
    nearbyAttractions: ["그라우스 마운틴", "린 캐니언 공원", "딥 코브", "론즈데일 키 마켓"],
    photoTips: "다리 중앙에서 양쪽 협곡을 바라보며 촬영하면 깊이감이 극대화됩니다. 트리탑스 어드벤처에서는 위에서 내려다보는 숲 캐노피 사진이 인상적입니다.",
    tips: [
      "무료 셔틀버스가 다운타운 캐나다 플레이스에서 운행합니다 (20~30분 간격).",
      "온라인 사전 구매 시 티켓 할인이 적용됩니다.",
      "무료 대안으로 린 캐니언 서스펜션 브리지(50m 높이)도 추천합니다.",
      "비 오는 날도 우림 특유의 신비로운 분위기가 있어 나름 매력적입니다.",
      "겨울 캐니언 라이트 시즌에는 조명 장식이 환상적이니 야간 방문도 추천합니다.",
    ],
  },
  "canada/british-columbia/vancouver/granville-island-public-market": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "밴쿠버 폴스 크릭 수변에 위치한 퍼블릭 마켓으로, 150개 이상의 상인이 신선한 해산물, 수제 빵, 로컬 치즈, 과일, 수공예품을 판매합니다. 밴쿠버 로컬 문화의 정수를 경험할 수 있는 실내 시장입니다.",
    history: "그란빌 아일랜드는 1915년 산업용 매립지로 조성됐습니다. 1970년대 연방정부 주도로 쇠퇴한 산업 지구를 예술·문화 복합 공간으로 재개발했으며, 1979년 퍼블릭 마켓이 개장했습니다. 현재 밴쿠버에서 연간 방문객이 가장 많은 관광지 중 하나입니다.",
    visitInfo: {
      hours: "매일 09:00~18:00 (월요일 휴무 없음, 1/1·12/25 휴장)",
      admission: "입장 무료",
      address: "1669 Johnston St, Vancouver, BC V6H 3R9",
      website: "https://granvilleisland.com",
    },
    highlights: [
      "신선한 태평양 연어, 던저니스 크랩 등 해산물 코너",
      "수제 빵·페이스트리 베이커리와 장인 치즈 상점",
      "현지 농산물 직거래 파머스 코너",
      "수공예 갤러리와 아티스트 작업실 투어",
      "마켓 외부 수변 테라스에서 폴스 크릭 조망하며 식사",
    ],
    nearbyAttractions: ["그란빌 아일랜드 브루어리", "에밀리 카 예술대학", "폴스 크릭 페리", "키츨라노 비치"],
    photoTips: "마켓 내부의 과일·꽃 진열대가 다채로운 컬러감으로 좋은 사진 소재입니다. 마켓 외부 수변에서 밴쿠버 다운타운 스카이라인을 배경으로 한 컷도 추천합니다.",
    tips: [
      "주차가 매우 어려우니 다운타운에서 아쿠아버스 미니 페리(CAD$3.75)로 방문하세요.",
      "토요일 오전이 가장 활기차지만 인파도 가장 많습니다.",
      "마켓 2층의 푸드코트에서 다양한 에스닉 요리를 저렴하게 즐길 수 있습니다.",
      "마켓 주변 양조장(그란빌 아일랜드 브루잉)에서 수제 맥주 시음도 필수 코스입니다.",
    ],
  },

  // ===== MONTREAL (추가) =====
  "canada/quebec/montreal/old-port-of-montreal": {
    heroGradient: "from-slate-500 to-blue-800",
    description: "세인트 로렌스 강변 2.5km에 걸친 역사적 항구를 재개발한 몬트리올의 대표적 수변 문화 공간. 올드 몬트리올과 직접 연결되며, 사계절 내내 다양한 야외 활동과 문화 행사가 열리는 시민 휴식 공간입니다.",
    history: "17세기부터 모피 교역항으로 발전했으며 19세기에는 캐나다 최대 항구로 성장했습니다. 1976년 화물항 기능이 이전된 후 1992년 몬트리올 350주년을 기념해 레크리에이션·문화 공간으로 재개발됐습니다. 현재 연간 600만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "연중무휴 24시간 (개별 시설별 운영 시간 상이)",
      admission: "산책 무료 / 사이언스 센터 성인 CAD$24 / 집라인 CAD$22",
      address: "333 Rue de la Commune O, Montréal, QC H2Y 2E2",
      website: "https://www.oldportofmontreal.com",
    },
    highlights: [
      "클락 타워 전망대 - 1922년 건설된 시계탑에서 올드 몬트리올과 강 전경 조망",
      "몬트리올 사이언스 센터 - 인터랙티브 과학 전시와 IMAX 극장",
      "여름 집라인(티롤리엔) - 올드 포트 위를 가로지르는 짜릿한 체험",
      "겨울 아이스 스케이트 링크 (11~3월)",
      "여름 야외 영화 상영과 국제 불꽃축제(6~7월)",
    ],
    nearbyAttractions: ["노트르담 대성당", "플라스 자크 카르티에", "봉스쿠르 마켓", "해비타트 67"],
    photoTips: "클락 타워 전망대에서 올드 몬트리올 전경과 세인트 로렌스 강을 파노라마로 담을 수 있습니다. 여름 저녁 불꽃축제 촬영은 자크 카르티에 부두가 최적 포인트입니다.",
    tips: [
      "클락 타워 전망대는 무료이며 5~10월 개방합니다(192개 계단).",
      "여름(6~7월) 라 롱드 불꽃축제 기간에는 수요일·토요일 밤 강변에서 불꽃놀이를 무료로 감상할 수 있습니다.",
      "겨울 아이스 스케이트는 스케이트 대여 포함 CAD$12~15 정도입니다.",
      "자전거 대여(빅시)로 강변 산책로를 따라 달리는 것도 추천합니다.",
    ],
  },
  "canada/quebec/montreal/mont-royal-park": {
    heroGradient: "from-green-500 to-teal-700",
    description: "해발 233m의 몽루아얄 산 위에 조성된 몬트리올의 상징적 도심 공원. 센트럴 파크를 설계한 프레드릭 로 옴스테드가 1876년 설계했습니다. 정상 전망대에서 몬트리올 도심과 세인트 로렌스 강이 한눈에 내려다보이는 최고의 뷰포인트입니다.",
    history: "1876년 프레드릭 로 옴스테드(뉴욕 센트럴 파크 설계자)가 설계한 공원으로, 몬트리올이라는 도시 이름 자체가 이 산(Mont Royal = Royal Mountain)에서 유래했습니다. 1534년 자크 카르티에가 이 산에 올라 지형을 살펴보며 '왕의 산'이라 명명한 것이 시초입니다.",
    visitInfo: {
      hours: "연중무휴 06:00~자정",
      admission: "무료",
      address: "1260 Chemin Remembrance, Montréal, QC H3H 1A2",
      website: "https://www.lemontroyal.qc.ca",
    },
    highlights: [
      "콩다아르크 전망대(Kondiaronk Belvedere) - 몬트리올 최고의 파노라마 뷰포인트",
      "몽루아얄 십자가 - 산 정상에 세워진 31.4m 높이 조명 십자가(야간 점등)",
      "비버 레이크(Lac aux Castors) - 여름 패들보트, 겨울 스케이트",
      "탐탐 선데이(여름 일요일) - 조지 에티엔느 카르티에 동상 주변 야외 음악·댄스 모임",
    ],
    nearbyAttractions: ["세인트 조지프 성당", "몬트리올 미술관", "플라토 몽루아얄 거리", "맥길 대학교"],
    photoTips: "콩다아르크 전망대에서 해질녘에 촬영하면 도시 스카이라인이 황금빛으로 물드는 장관을 담을 수 있습니다. 가을 단풍 시즌(9~10월)에는 공원 전체가 붉은 캔버스가 됩니다.",
    tips: [
      "정상까지 도보 약 30~40분이며 여러 난이도의 트레일이 있습니다.",
      "11번 버스가 산 중턱까지 운행하므로 체력 절약이 가능합니다.",
      "겨울에는 크로스컨트리 스키와 스노슈잉이 인기입니다.",
      "여름 일요일 '탐탐' 행사는 몬트리올 로컬 문화를 체험하는 좋은 기회입니다.",
    ],
  },

  // ===== QUEBEC CITY (추가) =====
  "canada/quebec/quebec-city/ch-teau-frontenac": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "세인트 로렌스 강이 내려다보이는 절벽 위에 세워진 웅장한 고성 형 호텔. 1893년 개업한 이래 퀘벡시티의 상징이자, 세계에서 가장 많이 사진 찍힌 호텔로 기네스북에 등재돼 있습니다. 현재 페어몬트 호텔 체인이 운영합니다.",
    history: "캐나다 태평양 철도(CPR)가 대륙횡단 철도 여행객을 위해 1893년 건설했습니다. 이름은 17세기 뉴 프랑스 총독 루이 드 프롱트낙에서 유래했습니다. 2차 세계대전 중 1943년과 1944년 영국·미국·캐나다 수뇌들의 퀘벡 회담이 이 호텔에서 개최됐습니다. 2014년 대규모 리노베이션을 완료했습니다.",
    visitInfo: {
      hours: "외부 조망 24시간 / 가이드 투어 10:00~17:00 (매 시간, 시즌별 상이)",
      admission: "외부 무료 / 가이드 투어 성인 CAD$19.50 / 라운지·바 이용 숙박 불필요",
      address: "1 Rue des Carrières, Québec, QC G1R 4P5",
      website: "https://www.fairmont.com/frontenac-quebec",
    },
    highlights: [
      "다름 광장(Terrasse Dufferin)에서 올려다보는 호텔의 웅장한 외관",
      "호텔 가이드 투어 - 역사적 에피소드와 건축 비화를 듣는 1시간 투어",
      "1608 와인 앤 치즈 바 - 숙박하지 않아도 호텔 내부를 경험하는 방법",
      "겨울 호텔 앞 아이스 슬라이드와 크리스마스 장식",
    ],
    nearbyAttractions: ["다름 광장", "퀘벡 성채", "뻬띠 샹플랭 거리", "플라스 달마 광장"],
    photoTips: "로어 타운(하부 시가지)에서 올려다보며 촬영하면 절벽 위 호텔의 위용이 가장 잘 드러납니다. 레비스(강 건너편) 페리에서 바라보는 전경도 포스터급 사진을 만들어냅니다.",
    tips: [
      "숙박하지 않아도 로비, 바, 레스토랑을 방문할 수 있습니다.",
      "가이드 투어는 영어·프랑스어로 진행되며 사전 예약을 권장합니다.",
      "호텔 바로 앞 다름 광장(보드워크)은 무료 산책로로 강변 뷰가 훌륭합니다.",
      "겨울에는 호텔 앞 아이스 슬라이드가 설치되며 어린이와 함께 즐기기 좋습니다.",
    ],
  },
  "canada/quebec/quebec-city/rue-du-petit-champlain": {
    heroGradient: "from-rose-400 to-purple-700",
    description: "북미에서 가장 오래된 상업 거리로 17세기부터 이어져 온 역사가 살아 숨 쉬는 곳. 좁은 자갈길 양쪽에 꽃으로 장식된 퀘벡 전통 상점, 수공예 갤러리, 프렌치 레스토랑이 동화처럼 늘어서 있습니다.",
    history: "1680년대 프랑스 식민지 시대 하역 노동자와 상인들의 거리로 시작됐습니다. 19세기에는 쇠락했으나 1970~80년대 역사 보존 프로젝트로 복원됐습니다. 현재 퀘벡시 올드 타운 유네스코 세계유산 구역의 핵심 거리입니다.",
    visitInfo: {
      hours: "상점 대부분 10:00~17:00 (여름 09:00~21:00, 겨울 일부 단축 운영)",
      admission: "무료 (개별 상점 별도)",
      address: "Rue du Petit-Champlain, Québec, QC G1K 4H4",
      website: "https://www.quartierpetitchamplain.com",
    },
    highlights: [
      "프레스크 뒤 뻬띠 샹플랭(트롱프뢰유 벽화) - 건물 외벽의 대형 속임 그림",
      "푸니쿨레르(케이블카) - 어퍼 타운과 로어 타운을 연결하는 1879년 건설 케이블카",
      "퀘벡 수공예품 부티크 - 메이플 시럽, 퀘벡 도자기, 모피 공예품",
      "유럽풍 프렌치 크레이프·비스트로 레스토랑 거리",
      "크리스마스 시즌(11~1월) 동화 같은 조명 장식",
    ],
    nearbyAttractions: ["플라스 로얄", "문명 박물관", "샤토 프롱트낙", "브레이크넥 계단"],
    photoTips: "브레이크넥 계단(Escalier Casse-Cou) 위에서 거리를 내려다보는 앵글이 가장 아이코닉합니다. 크리스마스 조명 시즌에는 야간 촬영이 동화 속 장면 같은 사진을 만들어줍니다.",
    tips: [
      "푸니쿨레르(CAD$4)로 어퍼 타운에서 내려오면 바로 거리 입구에 도착합니다.",
      "브레이크넥 계단은 이름과 달리 안전하며 가장 인기 있는 사진 명소입니다.",
      "여름 저녁에는 거리 음악가들의 라이브 공연을 즐길 수 있습니다.",
      "크리스마스 시즌(11~1월)이 가장 아름다운 방문 시기입니다.",
      "상점들은 현금보다 카드 결제가 일반적이며 한국 카드도 대부분 사용 가능합니다.",
    ],
  },
};
