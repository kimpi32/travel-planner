import type { CityDetail, AttractionDetail } from "../city-details";

export const usaCityDetails: Record<string, CityDetail> = {
  // ===== EAST COAST =====
  "usa/east-coast/new-york": {
    heroGradient: "from-sky-500 to-blue-900",
    description: "잠들지 않는 도시, 뉴욕. 자유의 여신상, 센트럴 파크, 타임스스퀘어가 상징인 세계 금융·문화의 중심지. 5개 자치구에 걸쳐 8백만 명이 살아가는 다양성의 도시입니다.",
    bestTime: "4~6월 (봄) / 9~11월 (가을)",
    stayArea: "미드타운 맨해튼 / 로어 이스트 사이드",
    transport: "지하철(메트로카드/OMNY), 버스, 페리, 도보",
    districts: [
      { name: "미드타운", nameEn: "Midtown", description: "타임스스퀘어, 엠파이어 스테이트 빌딩, 5번가 쇼핑 등 뉴욕의 상징이 집중된 도심.", highlights: ["타임스스퀘어", "엠파이어 스테이트 빌딩", "록펠러 센터"] },
      { name: "로어 맨해튼", nameEn: "Lower Manhattan", description: "월가, 9/11 메모리얼, 자유의 여신상 페리 터미널이 있는 역사적 지구.", highlights: ["월가", "9/11 메모리얼", "배터리 파크"] },
      { name: "센트럴 파크·어퍼 웨스트", nameEn: "Central Park / Upper West", description: "340헥타르 도심 녹지와 세계적인 박물관이 위치한 고급 주거지구.", highlights: ["센트럴 파크", "메트로폴리탄 미술관", "자연사 박물관"] },
      { name: "브루클린", nameEn: "Brooklyn", description: "윌리엄스버그, 덤보 등 힙스터 문화와 맨해튼 야경을 즐길 수 있는 지역.", highlights: ["브루클린 브리지", "DUMBO", "브루클린 프로미나드"] },
    ],
    attractions: [
      { name: "자유의 여신상", nameEn: "Statue of Liberty", description: "1886년 프랑스가 선물한 높이 93m의 자유의 상징. 리버티섬에 위치하며 왕관 전망대까지 입장 가능.", category: "랜드마크", tip: "왕관 투어는 6개월 전 사전 예약 필수. 페리 자체에서 보는 뷰도 충분히 훌륭합니다." },
      { name: "센트럴 파크", nameEn: "Central Park", description: "843에이커 크기의 도심 속 오아시스. 보트 호수, 스트로베리 필즈, 다크니스 분수가 명소.", category: "공원", tip: "자전거 렌탈($15/시간)로 공원 전체를 2시간 만에 둘러볼 수 있습니다." },
      { name: "메트로폴리탄 미술관", nameEn: "Metropolitan Museum of Art", description: "300만 점 이상 소장한 세계 최대급 미술관. 이집트관 덴두르 신전이 압권.", category: "미술관", tip: "모든 컬렉션을 보려면 최소 3일이 필요합니다. 관심 분야를 사전에 정하세요." },
      { name: "타임스스퀘어", nameEn: "Times Square", description: "24시간 빛나는 네온 광고판과 브로드웨이 뮤지컬 극장이 밀집한 뉴욕의 심장부.", category: "랜드마크", tip: "낮보다 밤이 훨씬 화려합니다. 12월 31일 볼 드롭 행사는 세계적 명물." },
      { name: "엠파이어 스테이트 빌딩", nameEn: "Empire State Building", description: "1931년 완공된 102층 마천루로 86층·102층 전망대에서 뉴욕 전경 조망.", category: "전망대", tip: "86층 야외 전망대가 가장 인기. 일몰 1시간 전이 황금 빛 사진의 타이밍." },
      { name: "9/11 메모리얼 & 뮤지엄", nameEn: "9/11 Memorial & Museum", description: "2001년 테러 희생자를 추모하는 쌍둥이 반영 폭포와 지하 박물관.", category: "기념관", tip: "박물관 내부는 감정적으로 무거울 수 있으니 충분한 시간을 두고 방문하세요." },
    ],
    dayTrips: [
      { name: "나이아가라 폭포 (버스)", nameEn: "Niagara Falls", description: "뉴욕주 쪽 폭포와 캐나다 쪽 전망을 모두 즐길 수 있는 당일치기 투어.", travelTime: "버스 약 8시간 / 비행기 약 1시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "필라델피아", nameEn: "Philadelphia", description: "독립 선언서를 채택한 역사도시와 자유의 종이 있는 인접 도시.", travelTime: "암트랙 약 1시간 30분", gradient: "from-amber-400 to-red-700" },
    ],
    localFood: [
      { name: "뉴욕 피자", description: "얇고 넓은 뉴욕 스타일 피자. 조각(슬라이스)으로 접어서 먹는 것이 정통.", emoji: "🍕" },
      { name: "베이글", description: "크림치즈와 훈제연어를 얹은 뉴욕 베이글은 아침 식사의 정석.", emoji: "🥯" },
      { name: "핫도그", description: "거리 카트의 핫도그는 뉴욕의 상징. 머스터드와 케첩을 얹어서.", emoji: "🌭" },
      { name: "치즈케이크", description: "주니어스의 뉴욕 스타일 진한 치즈케이크는 꼭 맛보세요.", emoji: "🍰" },
    ],
    tips: [
      "지하철 OMNY(컨택리스 카드)로 결제 시 하루 최대 $34 자동 캡이 적용됩니다.",
      "뮤지엄 패스(뉴욕 패스)로 주요 박물관을 할인 입장할 수 있습니다.",
      "브루클린 브리지 도보 횡단은 30분 소요, 이른 아침이 사진 명소.",
      "브로드웨이 뮤지컬은 TKTS 부스에서 당일권을 최대 50% 할인 구매 가능.",
      "팁 문화가 강해 식당은 18~22%, 택시·우버는 15~20%가 일반적입니다.",
    ],
  },

  "usa/east-coast/washington-dc": {
    heroGradient: "from-slate-500 to-gray-800",
    description: "미국의 수도이자 민주주의의 상징. 링컨 기념관, 스미스소니언 박물관군, 백악관이 있는 정치·문화의 중심지. 국립 몰(National Mall)을 따라 세계 최고의 무료 박물관들이 늘어서 있습니다.",
    bestTime: "3월 말~4월 (벚꽃) / 9~10월 (가을)",
    stayArea: "내셔널 몰 주변 / 조지타운 / 뒤퐁 서클",
    transport: "메트로(스마트립 카드), 버스, 씨티바이크",
    districts: [
      { name: "내셔널 몰", nameEn: "National Mall", description: "링컨 기념관부터 국회의사당까지 이어지는 3km 녹지 공간과 스미스소니언 박물관군.", highlights: ["링컨 기념관", "워싱턴 기념탑", "스미스소니언"] },
      { name: "조지타운", nameEn: "Georgetown", description: "빅토리아 양식 건물과 트렌디한 카페, 레스토랑이 가득한 고급 동네.", highlights: ["조지타운 대학교", "C&O 운하", "M 스트리트 쇼핑"] },
      { name: "뒤퐁 서클", nameEn: "Dupont Circle", description: "외교 공관과 세련된 레스토랑, 갤러리가 모여있는 활기찬 동네.", highlights: ["뒤퐁 서클 공원", "필립스 컬렉션", "레스토랑 로우"] },
    ],
    attractions: [
      { name: "링컨 기념관", nameEn: "Lincoln Memorial", description: "링컨 대통령을 기리는 그리스 신전 양식 기념관. 마틴 루터 킹 연설 장소로도 유명.", category: "기념관", tip: "야간 방문 시 반영 연못의 조명이 장관입니다. 24시간 무료 개방." },
      { name: "스미스소니언 국립 항공우주박물관", nameEn: "National Air and Space Museum", description: "라이트 형제의 비행기부터 아폴로 11호까지 인류 비행의 역사를 담은 세계 최대 항공우주박물관.", category: "박물관", tip: "완전 무료 입장. 오전 일찍 방문해야 주요 전시물을 여유롭게 볼 수 있습니다." },
      { name: "백악관", nameEn: "White House", description: "미국 대통령의 관저이자 집무실. 외관 관람만 가능하며 내부 투어는 의원 신청 필요.", category: "랜드마크", tip: "펜스 밖에서 외관 촬영만 가능합니다. 엘립스 공원에서 사진 촬영이 가장 좋습니다." },
      { name: "국립 자연사 박물관", nameEn: "National Museum of Natural History", description: "45.52캐럿 호프 다이아몬드를 비롯한 자연사 유물 1억 4,600만 점을 소장한 세계 최대 자연사박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "버지니아 알링턴", nameEn: "Arlington, Virginia", description: "알링턴 국립묘지와 이오지마 기념비가 있는 워싱턴 인접 도시.", travelTime: "메트로 약 15분", gradient: "from-green-500 to-emerald-800" },
      { name: "애나폴리스", nameEn: "Annapolis", description: "미국 해군사관학교와 18세기 식민지 건축물이 남아있는 메릴랜드 주도.", travelTime: "차로 약 45분", gradient: "from-blue-400 to-sky-700" },
    ],
    localFood: [
      { name: "크랩 케이크", description: "체사피크만의 신선한 블루 크랩으로 만든 게살 케이크는 DC 명물.", emoji: "🦀" },
      { name: "하프 스모크", description: "DC 특유의 반쪽 훈제 소시지 핫도그. 벤스 칠리 볼에서 반드시 맛보세요.", emoji: "🌭" },
      { name: "에티오피아 음식", description: "인제라(발효 빵)와 다양한 스튜를 손으로 먹는 에티오피아 요리 - DC에서 가장 유명.", emoji: "🫓" },
    ],
    tips: [
      "스미스소니언 소속 19개 박물관 모두 무료입니다.",
      "벚꽃 축제(3월 말~4월 초)기간에는 조기 예약이 필수입니다.",
      "국회의사당 투어는 의원실 신청 또는 온라인 예약이 필요합니다.",
      "메트로는 출퇴근 시간대(7~9시, 17~19시)에 요금이 인상됩니다.",
    ],
  },

  // ===== WEST COAST =====
  "usa/west-coast/los-angeles": {
    heroGradient: "from-orange-400 to-pink-700",
    description: "영화와 음악, 서핑 문화의 도시 LA. 할리우드, 베니스 비치, 게티 센터가 상징인 캘리포니아 최대 도시. 사계절 온화한 기후와 다양한 음식 문화가 매력입니다.",
    bestTime: "3~5월 / 9~11월 (봄·가을, 안개 없는 맑은 날씨)",
    stayArea: "산타모니카 / 할리우드 / 웨스트 할리우드",
    transport: "자동차 필수 (우버/리프트), 메트로 라인, 버스",
    districts: [
      { name: "할리우드", nameEn: "Hollywood", description: "할리우드 대로, 명예의 거리, 돌비 극장이 있는 엔터테인먼트의 중심지.", highlights: ["할리우드 사인", "명예의 거리", "유니버설 스튜디오"] },
      { name: "산타모니카·베니스", nameEn: "Santa Monica / Venice", description: "퍼시픽 파크 놀이공원, 서퍼들의 천국 베니스 비치, 세련된 퍼시픽 팰리세이즈.", highlights: ["산타모니카 피어", "베니스 비치", "로드아일랜드 에비뉴"] },
      { name: "다운타운 LA", nameEn: "Downtown LA", description: "브로드 뮤지엄, 리틀 도쿄, 그랜드 센트럴 마켓이 있는 재개발 중심지.", highlights: ["브로드 뮤지엄", "리틀 도쿄", "그랜드 센트럴 마켓"] },
      { name: "비벌리 힐스·웨스트 LA", nameEn: "Beverly Hills / West LA", description: "로데오 드라이브 명품 쇼핑과 할리우드 스타들의 저택이 있는 부유층 지역.", highlights: ["로데오 드라이브", "게티 센터", "멀홀랜드 드라이브"] },
    ],
    attractions: [
      { name: "유니버설 스튜디오 할리우드", nameEn: "Universal Studios Hollywood", description: "해리 포터 마법 세계, 미니언즈, 쥬라기 공원 등 인기 영화 테마파크.", category: "테마파크", tip: "익스프레스 패스 구매 시 대기 시간을 크게 줄일 수 있습니다. 해리 포터 구역은 오전 일찍 방문." },
      { name: "게티 센터", nameEn: "The Getty Center", description: "리처드 마이어 설계의 현대식 건물에 유럽 회화, 조각, 사진을 소장한 세계적 미술관.", category: "미술관", tip: "입장 무료이지만 주차비 $20 필요. 메트로 익스프레스 버스로 방문 권장." },
      { name: "그리피스 천문대", nameEn: "Griffith Observatory", description: "LA 시내와 할리우드 사인을 가장 잘 볼 수 있는 전망 명소이자 천문관.", category: "전망대", tip: "주차가 매우 어려우니 트롤리 버스나 하이킹으로 방문하세요." },
      { name: "산타모니카 피어", nameEn: "Santa Monica Pier", description: "루트 66의 종점이자 퍼시픽 파크 놀이공원과 수족관이 있는 목조 부두.", category: "랜드마크" },
      { name: "할리우드 명예의 거리", nameEn: "Hollywood Walk of Fame", description: "2,700개 이상의 별 모양 표지가 새겨진 할리우드 대로 1.5km 구간.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "샌디에이고", nameEn: "San Diego", description: "발보아 공원, 샌디에이고 동물원, 멕시코 국경 가까운 남부 캘리포니아 도시.", travelTime: "차로 약 2시간", gradient: "from-cyan-400 to-sky-700" },
      { name: "조슈아 트리 국립공원", nameEn: "Joshua Tree National Park", description: "독특한 조슈아 트리와 거대한 화강암 바위의 사막 국립공원.", travelTime: "차로 약 2.5시간", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "타코", description: "로레체로에서 먹는 정통 멕시칸 스타일 타코. LA는 멕시코 음식 문화가 매우 발달.", emoji: "🌮" },
      { name: "인앤아웃 버거", description: "캘리포니아 아이콘 버거. 더블 더블 애니멀 스타일을 주문하세요.", emoji: "🍔" },
      { name: "아사이 보울", description: "해변가 카페에서 먹는 아사이 보울은 LA 라이프스타일의 상징.", emoji: "🫐" },
    ],
    tips: [
      "LA는 대중교통이 불편하므로 렌터카 또는 우버를 활용하세요.",
      "스모그가 심한 날(AQI 100+)에는 실외 활동을 줄이세요.",
      "할리우드 사인 하이킹은 그리피스 파크 코스(왕복 6km)가 가장 접근하기 쉽습니다.",
      "식당 팁은 최소 18~20%, LA는 식비가 비싼 편입니다.",
    ],
  },

  "usa/west-coast/san-francisco": {
    heroGradient: "from-orange-500 to-red-800",
    description: "금문교와 케이블카, 알카트라즈가 상징인 언덕의 도시. 실리콘밸리의 관문이자 히피 문화의 발상지로 자유롭고 진보적인 문화가 살아있습니다.",
    bestTime: "9~11월 (가장 맑고 온화) / 여름은 안개 주의",
    stayArea: "유니언 스퀘어 / 피셔맨스 워프 / 마켓 스트리트",
    transport: "케이블카, 뮤니 버스/트램, BART, 페리",
    districts: [
      { name: "피셔맨스 워프·노스 비치", nameEn: "Fisherman's Wharf / North Beach", description: "씰(물범) 부두, 클램 차우더, 알카트라즈 페리가 출발하는 관광 중심지.", highlights: ["피어 39", "알카트라즈 페리", "길라델리 초콜릿"] },
      { name: "차이나타운·노브 힐", nameEn: "Chinatown / Nob Hill", description: "북미 최대 차이나타운과 케이블카 노선이 지나는 언덕 지구.", highlights: ["차이나타운 그랜트 에비뉴", "케이블카 파웰-메이슨 라인", "노브 힐 전망"] },
      { name: "미션 디스트릭트", nameEn: "Mission District", description: "라틴 문화와 벽화 예술, 맛집이 밀집한 활기차고 다양한 동네.", highlights: ["벽화 골목", "돌로레스 파크", "정통 멕시코 음식"] },
      { name: "헤이트-애시버리", nameEn: "Haight-Ashbury", description: "1967년 썸머 오브 러브의 발상지로 히피 문화 유산이 남아있는 동네.", highlights: ["빈티지 상점", "골든 게이트 파크 입구", "히피 문화 박물관"] },
    ],
    attractions: [
      { name: "금문교", nameEn: "Golden Gate Bridge", description: "1937년 완공된 2,737m 현수교. 세계에서 가장 많이 사진에 담기는 다리 중 하나.", category: "랜드마크", tip: "배터리 스펜서 전망대(마린 헤드랜즈)에서 정면 뷰가 최고. 안개 없는 날 오전이 최적." },
      { name: "알카트라즈", nameEn: "Alcatraz Island", description: "1963년까지 운영된 연방 교도소가 있는 섬. 오디오 투어로 탈옥 사건을 생생하게 경험.", category: "역사", tip: "페리 티켓은 2~3주 전 온라인 예약 필수. 특히 야간 투어는 빨리 매진됩니다." },
      { name: "피어 39", nameEn: "Pier 39", description: "해양 야생동물인 물범 떼와 수족관, 상점이 가득한 어부 부두 명소.", category: "랜드마크" },
      { name: "케이블카", nameEn: "Cable Car", description: "1873년부터 운행 중인 세계 유일의 운영 케이블카. 파웰-하이드 라인이 가장 경치 좋음.", category: "교통", tip: "편도 $8(캐시). 하루 이상 체류 시 뮤니 패스(1일 $24)가 경제적." },
      { name: "골든 게이트 파크", nameEn: "Golden Gate Park", description: "센트럴 파크보다 넓은 1,017에이커 도심 공원. 드 영 미술관, 일본 정원이 내부에 있음.", category: "공원" },
    ],
    dayTrips: [
      { name: "나파 밸리", nameEn: "Napa Valley", description: "세계 최고의 와인 산지 중 하나로 와이너리 투어와 고급 레스토랑이 매력적.", travelTime: "차로 약 1시간 30분", gradient: "from-purple-400 to-red-700" },
      { name: "뮤어 우즈", nameEn: "Muir Woods", description: "수령 800년 이상의 레드우드 거목 숲. 샌프란시스코에서 가장 가까운 고대 숲.", travelTime: "차로 약 30분", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "클램 차우더 (사워도우 볼)", description: "샌프란시스코 명물. 사워도우 빵 그릇에 담긴 뜨끈한 조개 차우더.", emoji: "🍲" },
      { name: "던전레스 크랩", description: "11~6월 제철 던전레스 크랩을 피셔맨스 워프에서 신선하게.", emoji: "🦀" },
      { name: "미션 스타일 부리토", description: "미션 지구의 거대한 포일 포장 부리토는 SF 독자 문화.", emoji: "🌯" },
    ],
    tips: [
      "SF의 여름(6~8월)은 안개가 자욱해 춥습니다. 레이어드 의상 필수.",
      "케이블카는 종점에서 타야 착석이 가능합니다. 파웰역에서 출발.",
      "우버풀보다 무니(Muni) 대중교통이 도심에서 훨씬 빠릅니다.",
      "알카트라즈 페리는 피어 33에서 출발합니다.",
    ],
  },

  // ===== HAWAII =====
  "usa/hawaii/honolulu": {
    heroGradient: "from-cyan-400 to-blue-600",
    description: "태평양의 낙원, 오아후섬의 주도. 와이키키 비치, 다이아몬드 헤드, 진주만 추모관이 공존하는 하와이 최대 도시. 폴리네시아 문화와 미국 문화가 독특하게 융합된 곳입니다.",
    bestTime: "4~6월 / 9~11월 (혼잡하지 않고 날씨 최적)",
    stayArea: "와이키키 / 알라 모아나",
    transport: "더 버스(The Bus), 우버, 렌터카",
    districts: [
      { name: "와이키키", nameEn: "Waikiki", description: "세계 최고의 도심 비치 리조트 지구. 쇼핑과 서핑, 선셋 크루즈를 즐길 수 있는 곳.", highlights: ["와이키키 비치", "다이아몬드 헤드", "와이키키 쇼핑 플라자"] },
      { name: "다운타운 호놀룰루", nameEn: "Downtown Honolulu", description: "이올라니 궁전, 카메하메하 대왕 동상이 있는 하와이 역사 중심지.", highlights: ["이올라니 궁전", "카메하메하 동상", "알로하 타워"] },
      { name: "노스 쇼어", nameEn: "North Shore", description: "세계 최고 서퍼들의 성지. 겨울(11~3월)에 8m 이상 파도가 치는 거대한 파도가 명물.", highlights: ["파이프라인", "선셋 비치", "새우 트럭"] },
    ],
    attractions: [
      { name: "다이아몬드 헤드", nameEn: "Diamond Head", description: "와이키키 해안선과 호놀룰루 전경을 조망할 수 있는 사화산 분화구. 왕복 하이킹 약 3km.", category: "자연", tip: "오전 7시 전에 출발하면 더위와 인파를 피할 수 있습니다. 예약 필수." },
      { name: "진주만 추모관", nameEn: "Pearl Harbor / USS Arizona Memorial", description: "1941년 일본 공습으로 침몰한 USS 애리조나 위에 세워진 추모관. 무료 운항 보트로 방문.", category: "기념관", tip: "무료이지만 온라인 예약($1 예약 수수료)이 필수. 당일 입장권은 매진되기 쉽습니다." },
      { name: "하나우마 베이", nameEn: "Hanauma Bay", description: "화산 분화구가 만든 자연 수족관. 투명한 물속에서 스노클링으로 열대어를 만날 수 있음.", category: "자연", tip: "사전 예약 필수($25). 수요일 휴무." },
      { name: "알라 모아나 비치 파크", nameEn: "Ala Moana Beach Park", description: "와이키키 옆에 위치한 현지인 선호 비치. 알라 모아나 쇼핑센터와 인접.", category: "해변" },
    ],
    dayTrips: [
      { name: "노스 쇼어 새우 트럭", nameEn: "North Shore Shrimp Trucks", description: "카후쿠 새우 농장의 마늘 버터 새우 트럭은 오아후 필수 미식 체험.", travelTime: "차로 약 1시간", gradient: "from-orange-400 to-red-600" },
      { name: "폴리네시안 문화센터", nameEn: "Polynesian Cultural Center", description: "하와이, 사모아, 통가 등 6개 폴리네시아 섬 문화를 체험하는 테마파크.", travelTime: "차로 약 1시간 (라이에)", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "포케 보울", description: "신선한 참치(아히)를 기반으로 한 하와이 원조 포케 보울.", emoji: "🐟" },
      { name: "로코 모코", description: "흰 쌀밥 위에 햄버거 패티, 달걀 프라이, 그레이비 소스를 얹은 하와이 소울 푸드.", emoji: "🍳" },
      { name: "말라사다", description: "포르투갈에서 전해진 뜨끈한 도넛. 레오나드 베이커리가 원조.", emoji: "🍩" },
      { name: "카후쿠 갈릭 쉬림프", description: "노스 쇼어 새우 트럭의 마늘 버터 새우는 오아후 최고의 음식.", emoji: "🍤" },
    ],
    tips: [
      "하나우마 베이는 화요일에 개방하지 않습니다. 사전 예약이 매우 중요합니다.",
      "선크림은 산호초 보호를 위해 리프 세이프(무기 자외선 차단제) 사용 필수.",
      "와이키키에서 더 버스 52번으로 노스 쇼어까지 약 2시간 무료 이동 가능.",
      "8월 오봉 축제, 9월 하와이 필름 페스티벌 등 로컬 이벤트를 체크하세요.",
    ],
  },

  // ===== NATIONAL PARKS =====
  "usa/national-parks/las-vegas": {
    heroGradient: "from-yellow-400 to-red-600",
    description: "네바다 사막 위에 세워진 세계 엔터테인먼트의 수도. 카지노와 쇼, 뷔페, 그리고 그랜드 캐니언 등 국립공원 투어의 베이스캠프. 잠들지 않는 도시가 선사하는 화려한 스펙터클.",
    bestTime: "3~5월 / 9~11월 (극심한 여름 더위 회피)",
    stayArea: "더 스트립 (라스베이거스 대로) / 프리몬트 스트리트",
    transport: "더 스트립 트램, 우버/리프트, 렌터카 (국립공원 투어 시 필수)",
    districts: [
      { name: "더 스트립", nameEn: "The Strip", description: "벨라지오, MGM 그랜드, 씨저스 팰리스 등 거대 호텔 카지노가 늘어선 라스베이거스 대로 6.7km.", highlights: ["벨라지오 분수 쇼", "에펠탑(파리스)", "뉴욕뉴욕 롤러코스터"] },
      { name: "프리몬트 스트리트", nameEn: "Fremont Street", description: "라스베이거스 올드 타운. LED 캐노피 조명 쇼와 집라인이 있는 실내 보행자 거리.", highlights: ["프리몬트 스트리트 익스피리언스", "집라인", "골든 너겟"] },
    ],
    attractions: [
      { name: "벨라지오 분수 쇼", nameEn: "Bellagio Fountains", description: "1,200개 분사구에서 클래식·팝 음악에 맞춰 연출되는 세계 최대 수상 쇼. 완전 무료.", category: "쇼", tip: "저녁 7시~자정까지 15~30분 간격으로 진행. 분수 맞은편 빌라지오 브릿지에서 최적 관람." },
      { name: "라스베이거스 사인", nameEn: "Welcome to Las Vegas Sign", description: "1959년 세워진 라스베이거스의 상징 네온 사인. 더 스트립 남쪽에 위치.", category: "랜드마크" },
      { name: "스트래토스피어 타워", nameEn: "STRAT Tower", description: "350m 높이 전망대와 세계 최고도 놀이기구가 있는 라스베이거스 전망탑.", category: "전망대", tip: "엑스-스크림(하늘로 돌출되는 시소 라이드)은 무서운 놀이기구 중에서도 최상급." },
    ],
    dayTrips: [
      { name: "그랜드 캐니언 사우스 림", nameEn: "Grand Canyon South Rim", description: "세계 7대 자연 경관 중 하나인 1.6km 깊이의 거대한 협곡. 버스 투어 또는 자가 운전.", travelTime: "차로 약 4.5시간", gradient: "from-orange-500 to-red-800" },
      { name: "앤텔로프 캐니언", nameEn: "Antelope Canyon", description: "나바호 부족 영토의 슬롯 캐니언으로 빛기둥(Light Beam)이 장관인 포토 스팟.", travelTime: "차로 약 4시간 (페이지)", gradient: "from-amber-400 to-orange-700" },
      { name: "자이언 국립공원", nameEn: "Zion National Park", description: "붉은 사암 절벽 사이를 걷는 나로우스(Narrows) 하이킹으로 유명한 유타주 국립공원.", travelTime: "차로 약 2.5시간", gradient: "from-red-400 to-rose-700" },
    ],
    localFood: [
      { name: "스테이크 뷔페", description: "씨저스 팰리스, MGM 그랜드의 프리미엄 뷔페는 라스베이거스 식문화의 상징.", emoji: "🥩" },
      { name: "쉬림프 칵테일", description: "골든 게이트 카지노의 99센트 쉬림프 칵테일은 라스베이거스 전통.", emoji: "🍤" },
    ],
    tips: [
      "그랜드 캐니언 투어는 라스베이거스 출발 버스 투어($80~200)가 편리합니다.",
      "더 스트립 카지노들은 24시간 운영, 입장은 21세 이상만 가능합니다.",
      "여름(6~8월)에는 낮 기온이 45°C를 넘으므로 야외 활동은 이른 아침에.",
      "숙박 중 리조트 피($30~50/박)가 별도 부과되는 경우가 많으니 확인하세요.",
    ],
  },
};

export const usaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== NEW YORK =====
  "usa/east-coast/new-york/statue-of-liberty": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "프랑스가 미국 독립 100주년을 기념해 선물한 높이 93m의 동상. 1886년 제막 이후 자유와 민주주의의 세계적 상징이 되었습니다. 뉴욕항에서 리버티섬까지 페리로 이동합니다.",
    history: "프랑스 조각가 프레데리크 오귀스트 바르톨디가 설계하고 귀스타브 에펠(에펠탑 설계자)이 내부 철골 구조를 담당했습니다. 1886년 10월 28일 그로버 클리블랜드 대통령이 제막식을 거행했으며, 1984년 유네스코 세계유산으로 등재됐습니다.",
    visitInfo: {
      hours: "페리 09:00~15:30 출발 (마지막 복귀 약 17:00), 연중무휴",
      admission: "페리 + 접지 티켓 $24.50 / 페데스탈 티켓 $26.50 / 왕관 티켓 $24.50 별도",
      address: "Liberty Island, New York, NY 10004",
      website: "https://www.nps.gov/stli",
    },
    highlights: [
      "왕관(Crown) 전망대에서 바라보는 뉴욕항과 맨해튼 스카이라인",
      "동상 내부 박물관의 원본 횃불 전시",
      "자유의 여신상 역사와 제작 과정을 담은 전시",
      "일리스 섬 이민 박물관(동일 페리 이용 가능)",
    ],
    nearbyAttractions: ["엘리스 아일랜드 이민 박물관", "배터리 파크", "월가", "9/11 메모리얼"],
    photoTips: "맨해튼 배터리 파크나 뉴저지 리버티 주립공원에서 무료로 여신상을 배경 삼아 촬영할 수 있습니다. 페리 위에서 옆면 뷰도 훌륭합니다.",
    tips: [
      "왕관 투어(354계단)는 6개월 전 예약 필수이며 어린이는 제한이 있습니다.",
      "무료 스태튼 아일랜드 페리에서도 여신상을 가까이 볼 수 있습니다.",
      "이민 박물관 방문을 같이 계획하면 하루 코스로 딱 맞습니다.",
    ],
  },
  "usa/east-coast/new-york/central-park": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "프레드릭 로 옴스테드가 설계한 843에이커의 도심 공원. 빌딩 숲 속 자연의 오아시스로 연간 4천만 명이 방문하는 세계에서 가장 유명한 도시 공원입니다.",
    history: "1857년 설계 공모에서 옴스테드와 캘버트 복스의 그린스워드 플랜이 선정되어 1876년 완성됐습니다. 원래 이 자리에는 빈민촌이 있었으며, 1,600명을 이주시키고 조성한 인공 자연입니다.",
    visitInfo: {
      hours: "06:00~01:00 (연중무휴)",
      admission: "무료 (보트 렌탈 $20~40/시간)",
      address: "Central Park, New York, NY 10024",
      website: "https://www.centralparknyc.org",
    },
    highlights: [
      "베데스다 분수(Bethesda Fountain)와 테라스",
      "스트로베리 필즈(존 레논 추모 지구)",
      "클레오파트라의 바늘(이집트 오벨리스크)",
      "센트럴 파크 동물원",
      "보트 호수(더 레이크)에서 보트 타기",
    ],
    nearbyAttractions: ["메트로폴리탄 미술관", "자연사 박물관", "구겐하임 미술관", "링컨 센터"],
    photoTips: "베데스다 분수는 공원 중앙부에서 가장 아름다운 포토 스팟. 가을 단풍(10월 중순)에는 말 타기 코스가 황금빛으로 물듭니다.",
    tips: [
      "자전거 렌탈($15~25/시간)이 공원 전체를 2시간 내 돌아볼 수 있는 가장 효율적 방법입니다.",
      "매주 토~일 무료 콘서트와 공연이 많으니 공원 캘린더를 확인하세요.",
      "저녁 늦게 외진 곳은 피하고 밝은 길을 이용하세요.",
    ],
  },
  "usa/east-coast/new-york/metropolitan-museum": {
    heroGradient: "from-stone-400 to-neutral-700",
    description: "1870년 개관한 세계 3대 박물관 중 하나. 5,000년 인류 문명의 300만 점 소장품을 17개 컬렉션으로 나눠 전시합니다. 이집트관의 덴두르 신전이 가장 유명한 전시물입니다.",
    history: "1866년 파리에서 미국 사업가들이 설립을 결의하고 1870년 개관했습니다. 현재 건물은 1880년 5번가에 세워졌으며 이후 증축을 거듭해 현재 면적 18만m²에 달합니다.",
    visitInfo: {
      hours: "일~목 10:00~17:00 / 금·토 10:00~21:00 (추수감사절, 크리스마스 휴관)",
      admission: "성인 $30 / 65세 이상 $22 / 12세 이하 무료 (뉴욕주 거주자 자유 기부)",
      address: "1000 Fifth Ave, New York, NY 10028",
      website: "https://www.metmuseum.org",
    },
    highlights: [
      "이집트관 덴두르 신전(BC 15년 로마 황제 아우구스투스 건립)",
      "유럽 회화관 렘브란트, 베르메르, 모네 컬렉션",
      "무기 갑주관 (중세 기사 갑옷과 동양 무구)",
      "루프 가든에서 바라보는 센트럴 파크 전경",
    ],
    nearbyAttractions: ["센트럴 파크", "구겐하임 미술관", "프릭 컬렉션", "이스트 사이드"],
    photoTips: "덴두르 신전은 오전 개관 직후 빛이 좋고 인파가 적습니다. 루프 가든(5~10월 개방)에서 센트럴 파크 파노라마 사진을 꼭 남기세요.",
    tips: [
      "1일에 모든 것을 보는 것은 불가능합니다. 관심 컬렉션을 3~4개로 좁혀서 방문하세요.",
      "뮤지엄 앱을 다운받으면 무료 오디오 가이드를 이용할 수 있습니다.",
      "매주 금·토 야간 개관(~21시)은 낮보다 훨씬 한산합니다.",
    ],
  },

  // ===== SAN FRANCISCO =====
  "usa/west-coast/san-francisco/golden-gate-bridge": {
    heroGradient: "from-orange-500 to-red-800",
    description: "1937년 완공된 국제 오렌지 색상의 2,737m 현수교. 샌프란시스코만 입구를 가로지르는 공학적 걸작으로, 세계에서 가장 많이 사진에 담기는 다리 중 하나입니다.",
    history: "조셉 스트라우스 수석 엔지니어가 설계, 1933년 착공해 1937년 5월 27일 개통했습니다. 건설 당시 11명의 작업자가 안전망 덕분에 목숨을 구했으며, 안전망 없이는 사망자가 25명 이상이었을 것으로 추정됩니다.",
    visitInfo: {
      hours: "차량 통행 24시간 / 보행자 06:00~21:00 / 자전거 24시간",
      admission: "보행자·자전거 무료 / 남행 차량 통행료 $9.75",
      address: "Golden Gate Bridge, San Francisco, CA 94129",
      website: "https://www.goldengate.org",
    },
    highlights: [
      "배터리 스펜서 전망대(마린 헤드랜즈)에서 정면 뷰",
      "다리 위 보행자 도로 왕복 4.8km 산책",
      "포트 포인트에서 다리 하부 앵글 촬영",
      "크리시 필드 잔디밭에서 다리 전경",
    ],
    nearbyAttractions: ["마린 헤드랜즈", "뮤어 우즈", "사우살리토", "베이커 비치"],
    photoTips: "배터리 스펜서(마린 헤드랜즈)는 이른 아침 안개 위로 솟은 탑 부분만 보이는 신비로운 사진이 가능합니다. 맑은 날 저녁 노을 시간에는 포트 포인트가 최적의 위치입니다.",
    tips: [
      "안개(칼리 그레이)는 특히 여름(6~8월) 오전에 자욱하게 낍니다. 인내심을 가지고 기다리면 걷힙니다.",
      "다리 위 바람이 매우 강하므로 바람막이 자켓 필수.",
      "자전거 대여 후 다리 건너 사우살리토에서 페리로 돌아오는 코스가 인기입니다.",
    ],
  },
  "usa/west-coast/san-francisco/alcatraz": {
    heroGradient: "from-gray-500 to-slate-800",
    description: "1934~1963년 운영된 연방 교도소. 알 카포네, 머신 건 켈리 등 악명 높은 범죄자들이 수감된 '탈출 불가능' 섬. 현재는 국립 레크리에이션 지구로 오디오 투어를 운영합니다.",
    history: "본래 군사 요새였다가 1934년 연방 교도소로 전환됐습니다. 1963년 유지비 문제로 폐쇄될 때까지 약 1,545명이 수감됐으며 14차례의 탈옥 시도가 있었으나 공식적으로 성공한 사례는 없습니다. 1969~1971년 아메리카 원주민 단체가 점거 시위를 벌이기도 했습니다.",
    visitInfo: {
      hours: "09:00~14:30 (마지막 페리, 복귀는 18:30까지), 크리스마스 휴무",
      admission: "페리+오디오 투어 성인 $47.95 / 야간 투어 $47.00",
      address: "Alcatraz Island, San Francisco, CA 94133",
      website: "https://www.alcatrazcruises.com",
    },
    highlights: [
      "셀하우스 오디오 투어 (전직 간수·수감자 증언)",
      "독방 감옥 D-블록 견학",
      "1962년 '탈옥 불가능' 극적 탈옥 시도 현장",
      "섬에서 바라보는 샌프란시스코 스카이라인",
    ],
    nearbyAttractions: ["피어 39", "피셔맨스 워프", "피어 33(페리 출발지)", "엠바카데로"],
    photoTips: "페리에서 섬으로 접근하는 순간 감옥 건물과 SF 스카이라인을 배경으로 함께 담을 수 있습니다.",
    tips: [
      "2~3주 전 온라인 예약 필수, 특히 야간 투어는 더 빨리 매진됩니다.",
      "오디오 투어는 한국어도 지원합니다.",
      "야간 투어는 조명과 분위기가 독특해 낮 투어보다 인기가 더 많습니다.",
    ],
  },

  // ===== HONOLULU =====
  "usa/hawaii/honolulu/diamond-head": {
    heroGradient: "from-lime-400 to-green-700",
    description: "30만 년 전 화산 폭발로 형성된 사화산 분화구(해발 232m). 와이키키 비치 동쪽 끝에 우뚝 솟은 오아후의 상징으로 정상에서 바라보는 호놀룰루 전경이 장관입니다.",
    history: "하와이어로 '르아에아에아(Lēʻahi)'라고 불리며 '참치의 이마'를 의미합니다. 19세기 영국 선원들이 분화구 절벽의 방해석 결정을 다이아몬드로 오인해 '다이아몬드 헤드'라 불렀습니다. 2차 세계대전 당시 군사 벙커가 설치됐습니다.",
    visitInfo: {
      hours: "06:00~18:00 (마지막 입장 16:30), 연중무휴",
      admission: "1인 $5 / 차량 $10 (온라인 사전 예약 필수)",
      address: "Diamond Head Rd, Honolulu, HI 96816",
      website: "https://dlnr.hawaii.gov/dsp/parks/oahu/diamond-head-state-monument",
    },
    highlights: [
      "정상에서 바라보는 와이키키 해안선 파노라마",
      "2차 세계대전 군사 터널과 벙커 통과",
      "정상 등대와 270도 전망",
      "분화구 내부의 열대 식생",
    ],
    nearbyAttractions: ["와이키키 비치", "카피올라니 공원", "호놀룰루 동물원", "카할라"],
    photoTips: "정상 전망대에서 와이키키 해안선을 향해 찍는 사진이 정석. 오전 7시 이전 방문 시 빛이 부드럽고 인파도 적습니다.",
    tips: [
      "왕복 약 3km, 1.5~2시간 소요. 계단 구간이 있어 운동화 필수.",
      "물 500ml 이상 지참, 하와이 햇볕은 매우 강합니다.",
      "예약 없이 가면 입장이 거부될 수 있으니 반드시 사전 예약하세요.",
    ],
  },
  "usa/hawaii/honolulu/pearl-harbor": {
    heroGradient: "from-blue-600 to-navy-900",
    description: "1941년 12월 7일 일본 기습 공격으로 2,403명이 전사한 역사적 장소. USS 애리조나 잔해 위에 세워진 순백의 추모관과 전함 미주리 박물관이 있습니다.",
    history: "1941년 12월 7일 일본 제국 해군이 기습 공격해 미국의 태평양 함대를 기습했습니다. 이 사건으로 미국이 2차 세계대전에 참전하게 됩니다. USS 애리조나는 탄약고 폭발로 9분 만에 침몰해 1,177명이 전사했습니다.",
    visitInfo: {
      hours: "07:00~17:00 (월요일 휴관), 연방 공휴일 일부 휴관",
      admission: "추모관 보트 무료 (예약 수수료 $1) / 전함 미주리 $29.99",
      address: "1 Arizona Memorial Pl, Honolulu, HI 96818",
      website: "https://www.nps.gov/valr",
    },
    highlights: [
      "USS 애리조나 추모관 - 침몰 전함 위의 흰 대리석 구조물",
      "기름 방울(Oil Tears) - 지금도 기름이 새어나오는 USS 애리조나",
      "전함 USS 미주리 (일본의 항복 조인식이 거행된 전함)",
      "태평양 항공 박물관 내 제로 전투기 전시",
    ],
    nearbyAttractions: ["전함 미주리 박물관", "태평양 항공 박물관", "USS 보우핀 잠수함 박물관"],
    photoTips: "추모관 내부에서는 사진을 자제하는 것이 예의입니다. 추모관으로 가는 보트 위에서 진주만 전체를 배경으로 촬영하세요.",
    tips: [
      "추모관 방문은 완전 무료이지만 예약 사이트에서 $1 수수료를 내고 시간 지정 예약이 필수입니다.",
      "반바지·샌들 착용 가능하지만 경건한 장소인 만큼 복장에 신경 써 주세요.",
      "전체 관람(4개 시설)은 반나절 이상 소요됩니다.",
    ],
  },

  // ===== LAS VEGAS =====
  "usa/national-parks/las-vegas/grand-canyon-south-rim": {
    heroGradient: "from-orange-500 to-red-800",
    description: "콜로라도 강이 수백만 년에 걸쳐 깎아만든 깊이 1.6km, 길이 446km의 웅장한 협곡. 세계 7대 자연 경관 중 하나로 유네스코 세계유산에 등재된 미국 최고의 국립공원입니다.",
    history: "콜로라도 강이 약 500만 년에 걸쳐 침식·퇴적을 반복하며 형성됐습니다. 협곡 벽면에 노출된 지층은 약 20억 년 전까지 거슬러 올라갑니다. 1919년 국립공원으로 지정됐습니다.",
    visitInfo: {
      hours: "사우스 림: 연중무휴 24시간 (방문자 센터 08:00~18:00)",
      admission: "차량 $35 / 개인(도보·자전거) $20 (7일 유효)",
      address: "Grand Canyon South Rim, AZ 86023",
      website: "https://www.nps.gov/grca",
    },
    highlights: [
      "마더 포인트(Mather Point)에서 첫 번째 그랜드 캐니언 조망",
      "야바파이 포인트 일출·일몰 명소",
      "밝은 천사 트레일(하이킹, 1.5마일~왕복 가능)",
      "서쪽 림 버스 투어로 허밋 레스트까지",
    ],
    nearbyAttractions: ["호스슈 밴드", "앤텔로프 캐니언", "파월 호수", "자이언 국립공원"],
    photoTips: "일출(마더 포인트)과 일몰(야바파이 포인트)이 황금빛 협곡을 만들어냅니다. 날씨가 좋으면 협곡 너머 지평선까지 담을 수 있는 광각 렌즈를 권장합니다.",
    tips: [
      "여름(6~8월)에 림 하단 트레일 하이킹은 열사병 위험이 매우 높습니다. 오전 10시 이후 하강 금지.",
      "방문자 센터에서 무료 셔틀버스로 전망 포인트를 이동할 수 있습니다.",
      "라스베이거스에서 당일치기 버스 투어가 편리합니다($80~200).",
    ],
  },
};
