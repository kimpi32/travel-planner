import type { CityDetail, AttractionDetail } from "../city-details";

export const australiaCityDetails: Record<string, CityDetail> = {
  // ===== NEW SOUTH WALES =====
  "australia/new-south-wales/sydney": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "시드니 오페라하우스와 하버 브리지가 만들어내는 세계에서 가장 아름다운 항구 경관. 보니 비치의 서퍼들, 더록스의 역사, 블루 마운틴의 자연이 공존하는 오세아니아 최대 도시입니다.",
    bestTime: "9~11월 (봄) / 3~5월 (가을) / 12~2월은 더워도 해변이 활기",
    stayArea: "CBD(시내) / 서큘러 키 / 킹스 크로스 / 본다이",
    transport: "오팔 카드 (기차·버스·페리·라이트레일 통합), 페리, 우버",
    districts: [
      { name: "서큘러 키·더록스", nameEn: "Circular Quay / The Rocks", description: "오페라하우스와 하버 브리지가 보이는 시드니의 관광 핵심. 1788년 영국 최초 정착지인 더록스의 역사 골목.", highlights: ["시드니 오페라하우스", "하버 브리지", "더록스 마켓"] },
      { name: "본다이 비치", nameEn: "Bondi Beach", description: "세계 최고의 도심 인접 해변. 서퍼들의 성지이자 스코마란 클리프 워크의 출발점.", highlights: ["본다이 비치", "본다이 아이스버그 풀", "클리프 워크"] },
      { name: "달링 허버", nameEn: "Darling Harbour", description: "해양 박물관, 수족관, 카지노, 레스토랑이 모여있는 시드니의 워터프론트 엔터테인먼트 지구.", highlights: ["씨라이프 수족관", "해양 박물관", "바랑가루 리저브"] },
      { name: "뉴타운·서리 힐즈", nameEn: "Newtown / Surry Hills", description: "카페 문화와 빈티지 상점, 예술가 커뮤니티가 공존하는 시드니 힙스터 동네.", highlights: ["킹 스트리트 카페", "독립 서점", "스트리트 아트"] },
    ],
    attractions: [
      { name: "시드니 오페라하우스", nameEn: "Sydney Opera House", description: "덴마크 건축가 요른 웃손이 설계한 20세기 최고의 건축물. 1973년 완공, 2007년 유네스코 세계유산 등재. 조개껍데기 모양 지붕이 상징.", category: "건축", tip: "내부 가이드 투어(AUD$45, 약 1시간)로 공연장 내부를 볼 수 있습니다. 공연 예약도 추천." },
      { name: "하버 브리지 등반", nameEn: "Sydney Harbour Bridge Climb", description: "1932년 완공된 132m 높이의 세계 최대 강철 아치 교량. 다리 위를 걸어서 올라가는 브리지클라임이 독특한 체험.", category: "어드벤처", tip: "브리지클라임(AUD$288~, 3.5시간)은 사전 예약 필수. 알코올 검사를 통과해야 합니다." },
      { name: "본다이 비치", nameEn: "Bondi Beach", description: "시드니에서 가장 유명한 1km 길이의 모래 해변. 아이코닉한 파란색·빨간색 라이프가드 타워와 강한 파도가 특징.", category: "해변", tip: "수영은 깃발 사이에서만 하세요(라이프가드 보호 구역). 언더토우(역파도)를 주의하세요." },
      { name: "블루 마운틴", nameEn: "Blue Mountains", description: "유칼리 나무에서 발산되는 오일이 만드는 신비로운 파란 안개. 에코 포인트에서 보는 세 자매 바위가 명물.", category: "자연", tip: "세계 최대 경사를 자랑하는 시닉 레일웨이(84도 경사)를 꼭 타보세요." },
      { name: "더록스", nameEn: "The Rocks", description: "1788년 영국 최초 정착지. 조약돌 골목, 19세기 펍, 주말 마켓이 식민지 시대 분위기를 살린 역사 지구.", category: "역사" },
    ],
    dayTrips: [
      { name: "블루 마운틴", nameEn: "Blue Mountains", description: "유네스코 세계유산으로 등재된 블루 마운틴 국립공원. 3자매 바위, 카툼바 폭포, 제놀란 동굴이 명소.", travelTime: "기차 약 2시간", gradient: "from-blue-400 to-indigo-700" },
      { name: "헌터 밸리 와이너리", nameEn: "Hunter Valley", description: "호주 최고의 와인 생산지. 세미용과 쉬라즈로 유명하며 200개 이상의 와이너리가 분포.", travelTime: "차로 약 2시간", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "피시 앤 칩스", description: "달링 허버나 매클리 에비뉴에서 신선한 바라문디로 만든 호주식 피시 앤 칩스.", emoji: "🐟" },
      { name: "팀탐", description: "호주 국민 초콜릿 비스킷. 팀탐 슬러프(빨대로 빨아먹기)는 현지 문화.", emoji: "🍫" },
      { name: "아보카도 토스트", description: "시드니 카페 문화의 상징. 본다이·뉴타운 카페에서 브런치로 즐기세요.", emoji: "🥑" },
    ],
    tips: [
      "오팔 카드를 사용하면 대중교통 요금이 현금보다 훨씬 저렴합니다.",
      "뉴타운에서 서큘러 키까지 페리를 이용하면 하버 뷰를 즐길 수 있습니다.",
      "12~2월 여름에는 자외선 지수 11~12로 극히 강합니다. 선크림 SPF50+ 필수.",
      "시드니 에어포트에서 시티레일로 시내까지 약 13분이면 도착합니다.",
    ],
  },

  // ===== VICTORIA =====
  "australia/victoria/melbourne": {
    heroGradient: "from-indigo-500 to-purple-800",
    description: "커피와 예술, 스포츠의 도시 멜버른. 유니언 레인의 스트리트 아트, 퀸 빅토리아 마켓, 그레이트 오션 로드 드라이브의 베이스캠프. 세계에서 가장 살기 좋은 도시 상위권에 항상 오르는 문화 수도.",
    bestTime: "3~5월 (가을) / 9~11월 (봄) / 1월 호주 오픈(테니스)",
    stayArea: "CBD / 피츠로이 / 세인트 킬다 / 프라란",
    transport: "미키(myki) 카드 (트램·버스·기차 통합), 무료 CBD 트램, 자전거",
    districts: [
      { name: "CBD·플린더스 스트리트", nameEn: "CBD / Flinders Street", description: "멜버른의 심장. 플린더스 스트리트 역, 페더레이션 스퀘어, 이안 포터 미술관이 있는 도심.", highlights: ["플린더스 스트리트 역", "페더레이션 스퀘어", "야라강 산책로"] },
      { name: "피츠로이·콜링우드", nameEn: "Fitzroy / Collingwood", description: "빈티지 상점, 독립 카페, 갤러리가 밀집한 멜버른 예술·반문화의 중심지.", highlights: ["브런스윅 스트리트", "스미스 스트리트", "스트리트 아트"] },
      { name: "세인트 킬다", nameEn: "St Kilda", description: "해변, 유원지, 젠틀우먼 펭귄 서식지가 있는 멜버른의 보헤미안 해변 동네.", highlights: ["세인트 킬다 비치", "루나 파크", "페어리 펭귄"] },
    ],
    attractions: [
      { name: "그레이트 오션 로드", nameEn: "Great Ocean Road", description: "1차 세계대전 참전용사들이 건설한 해안 절경 도로. 12사도 석주, 런던 아치, 포트 캠벨 국립공원이 하이라이트.", category: "자연", tip: "렌터카로 이동하는 것이 가장 자유롭습니다. 왕복 약 11시간, 1박 2일 추천." },
      { name: "12사도 석주", nameEn: "Twelve Apostles", description: "그레이트 오션 로드의 하이라이트. 포트 캠벨 국립공원 해안가의 석회암 기둥들로 현재 8개만 남아있음.", category: "자연", tip: "일출과 일몰 시 황금빛으로 물드는 석주가 가장 아름답습니다. 헬기 투어도 인기." },
      { name: "유니언 레인", nameEn: "Hosier Lane", description: "멜버른 스트리트 아트의 성지. 24시간 새로운 작품으로 교체되는 살아있는 야외 미술관.", category: "예술", tip: "주말이 가장 예술가들이 많이 모입니다. 자유롭게 위에 덧그리는 레이어드 아트가 특징." },
      { name: "퀸 빅토리아 마켓", nameEn: "Queen Victoria Market", description: "1878년 개장한 남반구 최대 야외 마켓. 신선 식품, 가공식품, 의류, 기념품 등 700여 개 상점.", category: "시장", tip: "화·목·금·토·일 오픈. 수요일은 야간 썸머 마켓이 운영됩니다." },
    ],
    dayTrips: [
      { name: "그레이트 오션 로드", nameEn: "Great Ocean Road", description: "세계 최고의 해안 드라이브 도로. 12사도 석주를 포함한 240km 해안 절경.", travelTime: "차로 약 2~3시간 (토르키 기준)", gradient: "from-teal-400 to-emerald-700" },
      { name: "필립 아일랜드", nameEn: "Phillip Island", description: "매일 저녁 바다에서 돌아오는 꼬마펭귄(리틀 펭귄) 행렬을 보는 펭귄 퍼레이드.", travelTime: "차로 약 1시간 30분", gradient: "from-blue-400 to-navy-700" },
    ],
    localFood: [
      { name: "플랫 화이트", description: "멜버른이 발명한 커피 음료. 에스프레소에 벨벳처럼 부드러운 미세 거품 우유를 얹은 것.", emoji: "☕" },
      { name: "딤섬", description: "멜버른 차이나타운의 딤섬 문화는 호주 최고 수준. 리틀 버크 스트리트 일대." , emoji: "🥟" },
      { name: "ANZAC 비스킷", description: "1차 세계대전 때 군인 가족들이 보낸 귀리 쿠키. 호주·뉴질랜드 전통 과자.", emoji: "🍪" },
    ],
    tips: [
      "CBD 내 모든 트램은 무료입니다. 존 1 이상은 미키 카드 필요.",
      "멜버른 날씨는 하루에 사계절이 있다고 할 만큼 변덕스럽습니다. 레이어드 의상 필수.",
      "호주 오픈(1월) 기간에는 숙박비가 3~4배 급등합니다.",
      "페더레이션 스퀘어 방문자 센터에서 무료 지도와 정보를 얻을 수 있습니다.",
    ],
  },

  // ===== QUEENSLAND =====
  "australia/queensland/brisbane": {
    heroGradient: "from-yellow-400 to-orange-600",
    description: "2032년 올림픽 개최 도시로 빠르게 성장 중인 퀸즐랜드 주도. 골드 코스트와 선샤인 코스트의 가운데에 위치해 여행 거점으로 최적이며, 사우스 뱅크의 인공 비치가 독특한 도시입니다.",
    bestTime: "4~9월 (건기, 온화한 날씨) / 12~2월은 고온 다습",
    stayArea: "CBD / 포티튜드 밸리 / 웨스트 엔드",
    transport: "고카드(go card) (버스·기차·페리 통합), 시티캣 페리",
    districts: [
      { name: "사우스 뱅크", nameEn: "South Bank Parklands", description: "브리즈번 강변의 도심 공원. 인공 모래 비치 스트리트스 비치, 갤러리 오브 모던 아트, 레스토랑 거리.", highlights: ["스트리트스 비치", "갤러리 오브 모던 아트", "브리즈번 아이"] },
      { name: "포티튜드 밸리", nameEn: "Fortitude Valley", description: "차이나타운과 클럽, 라이브 뮤직 바가 밀집한 브리즈번의 엔터테인먼트·나이트라이프 중심지.", highlights: ["차이나타운", "제임스 스트리트", "라이브 뮤직 클럽"] },
    ],
    attractions: [
      { name: "론 파인 코알라 보호구역", nameEn: "Lone Pine Koala Sanctuary", description: "1927년 설립된 세계 최초·최대 코알라 보호구역. 130마리 이상의 코알라를 직접 안고 사진 찍을 수 있음.", category: "동물원", tip: "코알라 안기 체험($22 추가)은 오전에 마감될 수 있으니 오전 중 방문을 권장합니다." },
      { name: "마운트 쿠사 전망대", nameEn: "Mt. Coot-tha Lookout", description: "브리즈번 시내를 360도 파노라마로 조망하는 전망 명소. 식물원도 함께 있음.", category: "전망대" },
    ],
    dayTrips: [
      { name: "골드 코스트", nameEn: "Gold Coast", description: "서퍼스 파라다이스, 씨월드, 무비월드 등 테마파크와 70km 해안이 있는 호주 최고의 휴양지.", travelTime: "기차 약 1시간", gradient: "from-yellow-400 to-orange-600" },
      { name: "선샤인 코스트", nameEn: "Sunshine Coast", description: "노사 헤즈의 한적한 해변과 유리 하우스 마운틴 국립공원이 있는 자연 휴양지.", travelTime: "차로 약 1시간", gradient: "from-cyan-400 to-sky-600" },
    ],
    localFood: [
      { name: "모톤베이 버그", description: "퀸즐랜드 특산 갑각류 모톤베이 버그(작은 랍스터). 브리즈번 해산물 레스토랑의 명물.", emoji: "🦞" },
      { name: "라밍턴 케이크", description: "스펀지 케이크를 초콜릿과 코코넛으로 코팅한 호주·뉴질랜드 전통 디저트.", emoji: "🍰" },
    ],
    tips: [
      "시티캣 페리는 브리즈번 강을 따라 운행하는 대중교통으로 관광 유람선 역할도 합니다.",
      "사우스 뱅크의 인공 비치(스트리트스 비치)는 바다가 없는 내륙에서 해변 문화를 즐길 수 있는 독특한 명소.",
    ],
  },

  "australia/queensland/cairns": {
    heroGradient: "from-cyan-500 to-teal-700",
    description: "그레이트 배리어 리프와 열대 우림의 관문 도시. 세계 최대의 산호초 지대를 스노클링·스쿠버 다이빙으로 탐험하고, 쿠란다 열대 우림과 어설턴 고원을 탐방하는 최고의 베이스캠프.",
    bestTime: "6~10월 (건기, 맑은 바다) / 11~4월은 우기(해파리 시즌)",
    stayArea: "케언즈 시내 / 에스플러네이드",
    transport: "버스, 트랜스링크, 투어 셔틀, 렌터카",
    districts: [
      { name: "케언즈 에스플러네이드", nameEn: "Cairns Esplanade", description: "라군(인공 수영장), 레스토랑, 마켓이 있는 케언즈의 핵심 관광 지구.", highlights: ["케언즈 라군", "나이트 마켓", "에스플러네이드 보드워크"] },
    ],
    attractions: [
      { name: "그레이트 배리어 리프", nameEn: "Great Barrier Reef", description: "2,900개 이상의 산호초와 900개 섬으로 구성된 세계 최대 산호초 지대. 유네스코 세계유산. 그린 아일랜드, 미코마스 케이에서 스노클링.", category: "자연", tip: "6~10월 건기에 바다 시야(투명도)가 가장 좋습니다. 인증 다이빙 강좌도 케언즈에서 가능." },
      { name: "쿠란다 열대 우림", nameEn: "Kuranda Rainforest", description: "케언즈에서 스카이레일 로프웨이로 7.5km 열대 우림 위를 날아 쿠란다 마을에 도착하는 독특한 체험.", category: "자연", tip: "스카이레일(케이블카) + 쿠란다 시닉 레일웨이(기차) 왕복 콤보 패키지가 경제적입니다." },
      { name: "딘트리 국립공원", nameEn: "Daintree National Park", description: "지구에서 가장 오래된 열대 우림(1억 3,500만 년). 악어, 카수아리 새가 서식하는 UN 세계유산 숲.", category: "자연" },
    ],
    dayTrips: [
      { name: "그린 아일랜드", nameEn: "Green Island", description: "케언즈에서 페리로 45분 거리의 산호초 섬. 해변, 반수중 보트, 스노클링이 가능.", travelTime: "페리 약 45분", gradient: "from-teal-400 to-emerald-600" },
      { name: "포트 더글라스", nameEn: "Port Douglas", description: "한적한 해변과 고급 리조트가 있는 케언즈 북쪽 작은 마을. 4마일 비치가 아름다움.", travelTime: "차로 약 1시간", gradient: "from-sky-400 to-blue-600" },
    ],
    localFood: [
      { name: "바라문디", description: "호주 대표 생선 바라문디. 케언즈 레스토랑에서 그릴 또는 튀김으로 즐기세요.", emoji: "🐠" },
      { name: "열대 과일", description: "망고, 파파야, 잭프루트 등 케언즈의 신선한 열대 과일은 꼭 맛보세요.", emoji: "🥭" },
    ],
    tips: [
      "11~4월 우기(우기 및 해파리 시즌)에는 바다에서 해파리 스팅거 수트 착용 필수.",
      "그레이트 배리어 리프는 지구 온난화로 빠르게 훼손되고 있습니다. 지금이 볼 수 있는 마지막 기회일 수 있습니다.",
      "스쿠버 다이빙 자격증이 없어도 체험 다이빙 코스를 당일 수강 후 바로 리프에서 다이빙 가능.",
    ],
  },
};

export const australiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== SYDNEY =====
  "australia/new-south-wales/sydney/sydney-opera-house": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "덴마크 건축가 요른 웃손이 설계한 20세기 최고의 건축적 걸작. 1973년 완공, 2007년 유네스코 세계유산으로 등재됐으며 시드니 항구의 베이(Bennelong Point)에 위치합니다. 하루 약 8,800명, 연간 약 140만 명이 공연을 관람합니다.",
    history: "1957년 국제 설계 공모에서 요른 웃손의 설계안이 당선됐으나 기술적·정치적 이유로 건설 기간이 길어졌습니다. 1958년 착공해 1973년 완공까지 15년이 소요됐으며 예산도 16배 초과됐습니다. 웃손은 분쟁으로 완공 전 프로젝트에서 하차해 완공된 건물을 끝내 보지 못했습니다.",
    visitInfo: {
      hours: "방문자 센터 09:00~17:00 / 공연 일정에 따라 다름",
      admission: "외관 무료 / 가이드 투어 성인 AUD$45 / 공연 AUD$50~300",
      address: "Bennelong Point, Sydney NSW 2000",
      website: "https://www.sydneyoperahouse.com",
    },
    highlights: [
      "조개껍데기 모양의 독특한 지붕 타일(스웨덴산 세라믹)",
      "콘서트 홀 (세계 최대 파이프 오르간 중 하나)",
      "오페라 극장과 드라마 시어터",
      "페리에서 보는 야경(가장 아름다운 뷰 포인트)",
    ],
    nearbyAttractions: ["시드니 하버 브리지", "더록스", "서큘러 키 페리 터미널", "왕립 식물원"],
    photoTips: "맞은편 밀슨스 포인트(미스 맥쿼리 포인트)에서 하버 브리지와 오페라하우스를 함께 담을 수 있습니다. 블루아워(일몰 직후)가 가장 아름다운 시간입니다.",
    tips: [
      "가이드 투어는 이른 아침(첫 타임)이 한산하고 빛도 좋습니다.",
      "공연 예약은 시드니 오페라하우스 공식 사이트에서 최소 1개월 전 권장.",
      "옥상 바(Opera Bar)에서 하버 뷰를 감상하며 식사하는 것도 좋은 선택입니다.",
    ],
  },
  "australia/new-south-wales/sydney/harbour-bridge": {
    heroGradient: "from-gray-500 to-slate-800",
    description: "1932년 완공된 세계에서 가장 넓은 강철 아치 교량(폭 49m). 시드니 CBD와 노스 쇼어를 연결하는 길이 1,149m의 다리로, 브리지클라임으로 정상(132m)까지 오를 수 있습니다.",
    history: "1924년 설계, 1923~1932년 건설되어 9년 공사 끝에 완공됐습니다. 건설에 사용된 강철은 1,400톤에 달하며, 공사 중 16명이 사망했습니다. 2003년 새해 폭죽 쇼의 상징이 되어 전 세계적으로 유명해졌습니다.",
    visitInfo: {
      hours: "브리지클라임: 07:45~19:30 (매일)",
      admission: "브리지클라임 성인 AUD$288 (낮) / AUD$178 (새벽) / 파일런 전망대 AUD$19",
      address: "Sydney Harbour Bridge, Sydney NSW 2060",
      website: "https://www.bridgeclimb.com",
    },
    highlights: [
      "정상(132m)에서 바라보는 오페라하우스와 시드니 항구",
      "파일런 전망대(탑 꼭대기)의 파노라마 뷰",
      "도보·자전거로 교량 횡단(무료, 도보 약 20분)",
      "새해 폭죽 쇼의 중심 무대",
    ],
    nearbyAttractions: ["시드니 오페라하우스", "밀슨스 포인트", "더록스", "루나 파크 시드니"],
    photoTips: "미스 맥쿼리 포인트에서 다리와 오페라하우스를 모두 담는 앵글이 시드니 최고의 사진 명소입니다. 일출 또는 블루아워가 가장 아름다운 빛을 만들어냅니다.",
    tips: [
      "브리지클라임은 바람이 강한 날에도 운영됩니다. 방풍 점프수트를 제공합니다.",
      "알코올·음식은 다리 위에 반입 불가합니다.",
      "무료 도보 횡단(20분)만으로도 충분히 아름다운 경험입니다.",
    ],
  },

  // ===== MELBOURNE =====
  "australia/victoria/melbourne/great-ocean-road": {
    heroGradient: "from-teal-400 to-emerald-700",
    description: "1차 세계대전 참전용사들이 1919~1932년에 손으로 건설한 해안 도로. 토르키에서 알라스포드까지 243km 구간에 석회암 절벽, 열대 우림, 세계 최고의 해안 경관이 펼쳐집니다.",
    history: "전쟁에서 돌아온 3,000명의 참전용사들이 공사에 참여한 '살아있는 전쟁 기념비'입니다. 1936년 일반에 공개됐으며 2019~2020년 산불로 일부 구간이 피해를 입었습니다.",
    visitInfo: {
      hours: "연중무휴 24시간 (도로)",
      admission: "무료 (일부 국립공원 주차 요금 부과)",
      address: "Great Ocean Road, Victoria, Australia",
      website: "https://www.visitgreatoceanroad.org.au",
    },
    highlights: [
      "12사도 석주(Twelve Apostles) - 포트 캠벨 국립공원",
      "런던 아치(London Arch)",
      "로크 아드 협곡(Loch Ard Gorge)",
      "아폴로 베이 해산물 레스토랑",
      "오트웨이 국립공원 코알라 자연 서식지",
    ],
    nearbyAttractions: ["포트 캠벨 국립공원", "오트웨이 국립공원", "아폴로 베이", "워남불"],
    photoTips: "12사도 석주는 일출(동쪽 빛)과 일몰(서쪽 빛) 모두 아름답습니다. 헬기 투어($165/15분)에서 내려다보는 뷰가 가장 압도적입니다.",
    tips: [
      "렌터카로 2일(1박) 여행이 가장 자유롭습니다. 당일 투어 버스($60~120)도 있지만 여유가 부족합니다.",
      "왼쪽 통행 국가이므로 운전 시 각별히 주의하세요.",
      "12사도 석주는 현재 8개만 남아있으며 매년 침식으로 줄어들고 있습니다.",
    ],
  },

  // ===== CAIRNS =====
  "australia/queensland/cairns/great-barrier-reef": {
    heroGradient: "from-cyan-500 to-teal-700",
    description: "지구에서 우주에서 볼 수 있는 유일한 생물 구조물. 2,900개 이상의 산호초와 900개 섬, 10,000종 이상의 해양 생물이 서식하는 세계 최대 생태계. 유네스코 세계자연유산, 세계 최대 해양 공원.",
    history: "약 2만 년 전 마지막 빙하기 이후 현재 형태가 형성되기 시작했습니다. 1975년 해양 공원으로 지정됐으며 1981년 유네스코 세계유산으로 등재됐습니다. 최근 지구 온난화로 인한 산호 백화 현상이 심각한 문제로 대두되고 있습니다.",
    visitInfo: {
      hours: "연중무휴 (투어 업체 운영 시간은 약 07:00~17:00)",
      admission: "케언즈 출발 당일 투어 AUD$80~250 (교통·스노클링 장비 포함)",
      address: "Great Barrier Reef Marine Park, Queensland",
      website: "https://www.greatbarrierreef.org",
    },
    highlights: [
      "그린 아일랜드·미코마스 케이 스노클링",
      "체험 다이빙 (무자격자 당일 수강 가능)",
      "반수중 보트로 바닷속 관람",
      "케언즈 아쿠아리움의 리프 전시 (날씨 불량 시 대안)",
    ],
    nearbyAttractions: ["그린 아일랜드", "딘트리 국립공원", "케언즈 에스플러네이드", "쿠란다"],
    photoTips: "수중 카메라(고프로) 없이는 리프의 아름다움을 담기 어렵습니다. 투어 업체에서 수중 카메라 렌탈 가능($30~50). 물 위에서 보는 것과 물속에서 보는 색감이 완전히 다릅니다.",
    tips: [
      "리프 세이프 선크림(미네랄 성분)만 사용하세요. 일반 화학 선크림은 산호를 파괴합니다.",
      "다이빙 자격증이 없어도 체험 다이빙 코스로 당일 리프 다이빙이 가능합니다.",
      "7~10월 건기에 물 투명도가 가장 높고 날씨도 안정적입니다.",
      "태풍 시즌(12~4월)에는 투어가 취소되는 경우가 있으니 여행 보험 가입을 권장합니다.",
    ],
  },
};
