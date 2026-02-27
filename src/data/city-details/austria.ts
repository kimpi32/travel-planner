import type { CityDetail, AttractionDetail } from "../city-details";

export const austriaCityDetails: Record<string, CityDetail> = {
  // ===== VIENNA =====
  "austria/vienna/vienna": {
    heroGradient: "from-amber-500 to-rose-700",
    description: "합스부르크 제국의 수도이자 음악의 도시. 쇤브룬 궁전, 슈테판 대성당, 호프부르크 궁전 등 화려한 제국 유산과 함께 비엔나 커피하우스 문화, 오페라, 클래식 음악이 살아 숨 쉬는 유럽 문화의 심장부입니다.",
    bestTime: "4~10월 (크리스마스 마켓: 11월 중순~12월)",
    stayArea: "1구역 이너슈타트 / 마리아힐퍼 거리 주변",
    transport: "U-Bahn, 트램, 버스 (비엔나 시티카드)",
    districts: [
      { name: "이너슈타트", nameEn: "Innere Stadt", description: "링슈트라세 안쪽의 구시가지로 슈테판 대성당, 호프부르크 궁전, 국립 오페라극장이 위치한 핵심 지역.", highlights: ["슈테판 대성당", "호프부르크 궁전", "케른트너 거리", "그라벤 거리"] },
      { name: "노이바우", nameEn: "Neubau", description: "트렌디한 카페, 부티크, 갤러리가 밀집한 젊은 감각의 지역.", highlights: ["마리아힐퍼 거리", "뮤지엄스쿼터", "슈피텔베르크 골목"] },
      { name: "히칭", nameEn: "Hietzing", description: "쇤브룬 궁전과 궁전 정원이 자리한 우아한 주거 지역.", highlights: ["쇤브룬 궁전", "궁전 정원", "글로리에테 전망대", "티어가르텐 동물원"] },
    ],
    attractions: [
      { name: "쇤브룬 궁전", nameEn: "Schoenbrunn Palace", description: "합스부르크 왕가의 여름 궁전으로 1,441개의 방을 가진 유네스코 세계유산.", category: "궁전", tip: "그랜드투어(40실)보다 임페리얼투어(22실)가 시간 대비 효율적입니다." },
      { name: "슈테판 대성당", nameEn: "St Stephen's Cathedral", description: "비엔나의 상징인 고딕 양식 대성당으로 화려한 모자이크 지붕이 인상적입니다.", category: "성당", tip: "남탑 전망대(343계단)에서 비엔나 시내 파노라마를 감상하세요." },
      { name: "호프부르크 궁전", nameEn: "Hofburg Palace", description: "합스부르크 왕가의 겨울 궁전이자 현재 오스트리아 대통령 관저.", category: "궁전", tip: "시시 박물관, 황실 은기 컬렉션, 황실 아파트 통합 티켓이 가성비 좋습니다." },
      { name: "벨베데레 궁전", nameEn: "Belvedere Palace", description: "클림트의 '키스'를 소장한 바로크 궁전 미술관으로 정원에서 비엔나 스카이라인 조망이 가능합니다.", category: "궁전/미술관" },
      { name: "나슈마르크트", nameEn: "Naschmarkt", description: "16세기부터 이어진 비엔나 최대 재래시장으로 120개 이상의 노점에서 세계 각국 음식을 맛볼 수 있습니다.", category: "시장", tip: "토요일 벼룩시장이 함께 열려 더욱 활기찹니다." },
      { name: "국립 오페라극장", nameEn: "Vienna State Opera", description: "세계 최고의 오페라 하우스 중 하나로, 매일 다른 공연이 올라갑니다.", category: "극장" },
    ],
    dayTrips: [
      { name: "바하우 계곡", nameEn: "Wachau Valley", description: "도나우강을 따라 포도밭과 중세 성이 이어지는 유네스코 세계유산 지역.", travelTime: "기차 약 1시간", gradient: "from-emerald-400 to-green-700" },
      { name: "할슈타트", nameEn: "Hallstatt", description: "호수와 알프스에 둘러싸인 세계에서 가장 아름다운 호반 마을.", travelTime: "기차+페리 약 3.5시간", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "비너 슈니첼", description: "송아지 고기를 얇게 두드려 바삭하게 튀긴 비엔나의 대표 요리.", emoji: "🍽️" },
      { name: "자허토르테", description: "살구잼과 초콜릿 글레이즈의 비엔나 정통 초콜릿 케이크.", emoji: "🍫" },
      { name: "아펠슈트루델", description: "얇은 페이스트리에 사과를 감싼 전통 디저트, 바닐라소스와 함께.", emoji: "🍎" },
    ],
    tips: [
      "비엔나 시티카드(24/48/72시간)로 대중교통 무료 + 주요 관광지 할인을 받으세요.",
      "국립 오페라극장 스탠딩 티켓(€4~)은 공연 80분 전부터 판매합니다.",
      "일요일에는 대부분의 상점이 문을 닫으니 쇼핑은 평일에 하세요.",
      "비엔나 커피하우스(카페 첸트랄, 카페 자허 등)에서 멜랑주 한 잔은 필수입니다.",
    ],
  },

  // ===== SALZBURG REGION =====
  "austria/salzburg-region/salzburg": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "모차르트의 탄생지이자 '사운드 오브 뮤직'의 배경. 호엔잘츠부르크 요새 아래 바로크 양식의 구시가지가 유네스코 세계유산으로 지정되어 있으며, 매년 여름 잘츠부르크 페스티벌이 열립니다.",
    bestTime: "6~9월 (잘츠부르크 페스티벌: 7~8월)",
    stayArea: "구시가지 (알트슈타트) / 중앙역 주변",
    transport: "트롤리버스, 버스 (잘츠부르크 카드)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "잘차흐강 서쪽의 구시가지로 게트라이데 거리, 대성당, 모차르트 생가가 밀집.", highlights: ["게트라이데 거리", "잘츠부르크 대성당", "모차르트 생가", "레지덴츠 광장"] },
      { name: "노이슈타트", nameEn: "Neustadt", description: "잘차흐강 동쪽의 신시가지로 미라벨 정원과 링크 거리가 위치.", highlights: ["미라벨 정원", "모차르트 주거지", "링크 거리", "카푸치너베르크 전망대"] },
    ],
    attractions: [
      { name: "호엔잘츠부르크 요새", nameEn: "Hohensalzburg Fortress", description: "유럽에서 가장 크고 완벽하게 보존된 중세 요새로 도시 전체가 한눈에 내려다보입니다.", category: "요새", tip: "푸니쿨라(케이블카)로 편하게 올라갈 수 있습니다." },
      { name: "미라벨 정원", nameEn: "Mirabell Gardens", description: "'사운드 오브 뮤직'의 '도레미 송' 촬영지로 유명한 바로크 정원.", category: "정원", tip: "요새를 배경으로 한 사진 포인트가 계단 위에 있습니다." },
      { name: "모차르트 생가", nameEn: "Mozart's Birthplace", description: "모차르트가 1756년 태어나 17세까지 살았던 게트라이데 거리 9번지의 노란 건물.", category: "박물관" },
      { name: "게트라이데 거리", nameEn: "Getreidegasse", description: "화려한 철제 간판이 줄지어 걸린 잘츠부르크의 대표 쇼핑 거리.", category: "거리" },
    ],
    dayTrips: [
      { name: "할슈타트", nameEn: "Hallstatt", description: "알프스 호반 마을, 세계에서 가장 아름다운 마을 중 하나.", travelTime: "기차+버스 약 2.5시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "베르히테스가덴", nameEn: "Berchtesgaden", description: "독일 바이에른 알프스의 쾨니히스제 호수와 독수리 둥지 전망대.", travelTime: "버스 약 1시간", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "잘츠부르거 노케를", description: "잘츠부르크 전통 수플레 디저트로 3개 봉우리 모양이 특징.", emoji: "🍮" },
      { name: "카세노켄", description: "치즈를 듬뿍 얹은 오스트리아식 수제비, 양파 튀김과 함께.", emoji: "🧀" },
      { name: "모차르트쿠겔", description: "마지팬, 피스타치오, 누가를 초콜릿으로 감싼 잘츠부르크 명물 초콜릿.", emoji: "🍬" },
    ],
    tips: [
      "잘츠부르크 카드(24/48/72시간)로 주요 관광지 무료 입장 + 대중교통 무료입니다.",
      "사운드 오브 뮤직 투어는 반나절 코스로 주요 촬영지를 돌아봅니다.",
      "뮌헨에서 기차로 1.5시간이라 독일 여행과 연계하기 좋습니다.",
    ],
  },
  "austria/salzburg-region/hallstatt": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "할슈타트 호수 위에 알프스 절벽을 배경으로 자리 잡은 세계에서 가장 아름다운 호반 마을. 7,000년 역사의 소금 광산과 함께 유네스코 세계유산으로 지정되어 있습니다.",
    bestTime: "5~10월 (겨울에는 일부 시설 폐쇄)",
    stayArea: "할슈타트 마을 내 (숙소가 한정적이니 조기 예약 필수)",
    transport: "기차+페리 또는 버스 (자가용은 마을 내 진입 제한)",
    districts: [
      { name: "마르크트 광장", nameEn: "Marktplatz", description: "할슈타트의 중심 광장으로 파스텔 색상 건물과 호수가 어우러진 포토 스폿.", highlights: ["삼위일체 기둥", "호숫가 카페", "프로테스탄트 교회"] },
    ],
    attractions: [
      { name: "할슈타트 스카이워크", nameEn: "Hallstatt Skywalk", description: "해발 350m 높이의 전망대에서 할슈타트 호수와 마을 전경을 감상하는 절경 포인트.", category: "전망대", tip: "푸니쿨라로 올라가 소금 광산 투어와 함께 방문하세요." },
      { name: "소금 광산", nameEn: "Salt Mine", description: "세계에서 가장 오래된 소금 광산(7,000년). 미끄럼틀 타며 내려가는 체험이 하이라이트.", category: "광산/체험", tip: "스카이워크 전망대와 통합 티켓을 구매하면 할인됩니다." },
      { name: "할슈타트 호수 유람선", nameEn: "Lake Hallstatt Cruise", description: "호수 위에서 마을 전경을 감상하는 유람선 투어.", category: "유람선" },
    ],
    dayTrips: [
      { name: "다흐슈타인 얼음 동굴", nameEn: "Dachstein Ice Cave", description: "만년 빙하와 얼음 동굴, 파이브핑거스 전망대.", travelTime: "버스 약 30분", gradient: "from-slate-400 to-blue-700" },
    ],
    localFood: [
      { name: "자이블링", description: "할슈타트 호수에서 잡은 민물 송어 구이, 신선한 맛이 일품.", emoji: "🐟" },
      { name: "카이저슈마른", description: "찢어진 팬케이크에 가루설탕을 뿌린 알프스 디저트.", emoji: "🥞" },
    ],
    tips: [
      "마을이 작아 2~3시간이면 도보로 충분히 둘러볼 수 있습니다.",
      "이른 아침이나 늦은 오후에 방문하면 인파를 피할 수 있습니다.",
      "잘츠부르크에서 당일치기가 가능하지만 1박을 추천합니다.",
    ],
  },

  // ===== TYROL =====
  "austria/tyrol/innsbruck": {
    heroGradient: "from-sky-500 to-indigo-800",
    description: "알프스 한가운데 자리한 티롤주의 주도. 황금 지붕으로 유명한 구시가지와 2,300m 노르트케테 산이 도심에서 케이블카 한 번이면 닿는 독특한 도시입니다. 두 차례 동계올림픽(1964, 1976)을 개최했습니다.",
    bestTime: "6~9월 (하이킹) / 12~3월 (스키)",
    stayArea: "구시가지 (알트슈타트) / 중앙역 주변",
    transport: "트램, 버스 (인스브루크 카드)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "황금 지붕을 중심으로 색색의 건물이 줄지어 선 구시가지.", highlights: ["황금 지붕", "헬블링하우스", "슈타트투름 전망탑", "마리아 테레지아 거리"] },
      { name: "빌텐", nameEn: "Wilten", description: "빌텐 대성당과 베르기젤 스키점프대가 있는 남쪽 지역.", highlights: ["베르기젤 스키점프대", "빌텐 대성당", "암브라스 성"] },
    ],
    attractions: [
      { name: "황금 지붕", nameEn: "Golden Roof", description: "2,657장의 금박 구리 타일로 장식된 발코니로 인스브루크의 상징. 막시밀리안 1세가 15세기에 건설했습니다.", category: "랜드마크", tip: "건물 내부 박물관에서 황금 지붕의 역사를 자세히 볼 수 있습니다." },
      { name: "노르트케테 케이블카", nameEn: "Nordkette Cable Car", description: "도심에서 20분 만에 해발 2,334m 알프스 정상에 도달하는 케이블카.", category: "케이블카/전망", tip: "인스브루크 카드에 왕복 1회가 포함되어 있습니다." },
      { name: "암브라스 성", nameEn: "Ambras Castle", description: "르네상스 양식의 성으로 합스부르크 왕가의 예술 컬렉션이 전시되어 있습니다.", category: "성" },
      { name: "스와로브스키 크리스탈 월드", nameEn: "Swarovski Crystal Worlds", description: "스와로브스키 본사 옆에 위치한 크리스탈 테마파크.", category: "테마파크", tip: "인스브루크에서 셔틀버스가 운행합니다." },
    ],
    dayTrips: [
      { name: "슈투바이 빙하", nameEn: "Stubai Glacier", description: "연중 스키가 가능한 알프스 빙하, 여름 하이킹도 인기.", travelTime: "버스 약 1시간", gradient: "from-slate-400 to-sky-700" },
    ],
    localFood: [
      { name: "티롤러 그뢰스틀", description: "감자, 소고기, 양파를 볶은 티롤 전통 팬 요리.", emoji: "🍳" },
      { name: "카세슈페츨레", description: "치즈를 듬뿍 올린 오스트리아식 수제비, 양파 튀김 토핑.", emoji: "🧀" },
      { name: "아펠슈트루델", description: "얇은 반죽에 사과 필링을 감싼 티롤 디저트.", emoji: "🍎" },
    ],
    tips: [
      "인스브루크 카드(24/48/72시간)는 노르트케테 케이블카 포함이라 매우 가성비 좋습니다.",
      "알트슈타트는 30분이면 걸어서 둘러볼 수 있는 아담한 규모입니다.",
      "노르트케테 정상은 여름에도 춥습니다. 겉옷을 꼭 챙기세요.",
      "뮌헨에서 기차로 1시간 45분이라 독일 여행과 연계하기 좋습니다.",
    ],
  },

  // ===== OTHER REGIONS =====
  "austria/other-regions/graz": {
    heroGradient: "from-rose-500 to-purple-800",
    description: "오스트리아 제2의 도시이자 슈타이어마르크주의 주도. 유네스코 세계유산인 구시가지와 현대 건축이 조화를 이루며, 미식의 도시로도 유명합니다. 슐로스베르크 언덕 위의 시계탑이 도시의 상징입니다.",
    bestTime: "5~10월",
    stayArea: "구시가지 (이너슈타트) / 하우프트 광장 주변",
    transport: "트램, 버스 (그라츠 시내 대중교통)",
    districts: [
      { name: "이너슈타트", nameEn: "Innere Stadt", description: "하우프트 광장과 슐로스베르크를 중심으로 한 유네스코 세계유산 구시가지.", highlights: ["하우프트 광장", "슐로스베르크", "란트하우스", "헤르렌가세"] },
    ],
    attractions: [
      { name: "슐로스베르크 & 시계탑", nameEn: "Schlossberg & Clock Tower", description: "해발 473m 언덕 위의 시계탑(우어투름)은 그라츠의 상징. 리프트, 계단, 또는 슐로스베르크 동굴 엘리베이터로 올라갈 수 있습니다.", category: "전망대/랜드마크", tip: "무료 엘리베이터(동굴 통과)로 올라가 리프트(유료)로 내려오는 루트가 효율적입니다." },
      { name: "쿤스트하우스", nameEn: "Kunsthaus Graz", description: "외계 생물 같은 독특한 외관의 현대미술관으로 '친화적 외계인'이라는 별명을 가지고 있습니다.", category: "미술관" },
      { name: "에겐베르크 성", nameEn: "Eggenberg Palace", description: "유네스코 세계유산인 바로크 궁전으로 365개의 창문이 1년을 상징합니다.", category: "궁전" },
    ],
    dayTrips: [
      { name: "남부 슈타이어마르크 와인루트", nameEn: "South Styrian Wine Road", description: "오스트리아 최고의 와인 산지를 따라 달리는 드라이브 코스.", travelTime: "차량 약 1시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "슈타이리셰스 바켈", description: "슈타이어마르크식 프라이드 치킨, 바삭한 빵가루 튀김.", emoji: "🍗" },
      { name: "퀴르비스크렌외일", description: "슈타이어마르크 특산 호박씨 오일, 샐러드와 아이스크림에 뿌려 먹습니다.", emoji: "🎃" },
    ],
    tips: [
      "그라츠는 비엔나에서 기차로 2.5시간이면 도착합니다.",
      "슐로스베르크 동굴 통로와 무료 엘리베이터는 꼭 이용해보세요.",
      "대학 도시라 저녁에 활기찬 바와 레스토랑이 많습니다.",
    ],
  },
};

export const austriaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== VIENNA =====
  "austria/vienna/vienna/schoenbrunn-palace": {
    heroGradient: "from-amber-500 to-rose-700",
    description: "합스부르크 왕가의 여름 궁전으로 1,441개의 방을 가진 바로크 건축의 걸작입니다. 마리아 테레지아 옐로로 칠해진 궁전과 광대한 정원, 글로리에테 전망대, 세계에서 가장 오래된 동물원이 함께 자리하고 있습니다.",
    history: "1696년 레오폴트 1세의 명으로 건축이 시작되어 마리아 테레지아 시대에 현재의 규모로 확장되었습니다. 나폴레옹이 두 차례 이곳을 점령했으며, 마지막 황제 카를 1세가 1918년 이곳에서 퇴위했습니다.",
    visitInfo: {
      hours: "4~10월 08:30~17:30, 11~3월 08:30~17:00",
      admission: "임페리얼 투어(22실) €24, 그랜드 투어(40실) €29, 정원 무료",
      address: "Schönbrunner Schloßstraße 47, 1130 Wien",
      website: "https://www.schoenbrunn.at",
    },
    highlights: [
      "그레이트 갤러리 - 금박 장식과 천장 프레스코화의 바로크 연회장",
      "거울의 방 - 6살 모차르트가 마리아 테레지아 앞에서 연주한 곳",
      "글로리에테 전망대에서 궁전과 비엔나 시내 조망",
      "세계에서 가장 오래된 동물원(티어가르텐, 1752년 설립)",
    ],
    nearbyAttractions: ["글로리에테 전망대", "궁전 정원", "티어가르텐 동물원", "궁전 미로 정원"],
    photoTips: "궁전 정면은 오전에 순광이며, 정원에서 글로리에테를 배경으로 촬영하면 웅장한 구도를 얻을 수 있습니다.",
    tips: [
      "오전 일찍(개장 직후) 방문하면 단체 관광객을 피할 수 있습니다.",
      "U4 쇤브룬역에서 도보 5분입니다.",
      "정원과 글로리에테 전망대는 무료이니 시간이 없으면 정원만이라도 꼭 방문하세요.",
      "오디오 가이드가 한국어를 지원합니다.",
    ],
  },
  "austria/vienna/vienna/st-stephens-cathedral": {
    heroGradient: "from-slate-600 to-amber-800",
    description: "비엔나의 심장부에 우뚝 선 고딕 양식의 대성당으로, 다이아몬드 패턴의 모자이크 지붕과 136.4m 남탑이 도시의 스카이라인을 지배합니다. 12세기에 건축이 시작되어 수백 년에 걸쳐 완성되었습니다.",
    history: "1137년 로마네스크 양식으로 건축이 시작되어 14~15세기에 고딕 양식으로 재건되었습니다. 제2차 세계대전 중 화재로 큰 피해를 입었으나 오스트리아 국민의 성금으로 1952년 복원되었습니다.",
    visitInfo: {
      hours: "월~토 06:00~22:00, 일/공휴일 07:00~22:00 (관광 시간: 09:00~11:30, 13:00~16:30)",
      admission: "성당 내부 무료, 남탑 전망대 €7, 카타콤 투어 €7, 올인클루시브 티켓 €20",
      address: "Stephansplatz 3, 1010 Wien",
      website: "https://www.stephanskirche.at",
    },
    highlights: [
      "남탑 전망대(343계단) - 비엔나 시내 360도 파노라마",
      "23만 장 이상의 유약 타일로 만든 모자이크 지붕",
      "푸멀린 대종(오스트리아 최대, 20톤)",
      "카타콤(지하 납골당)의 합스부르크 왕가 장기 보관소",
    ],
    nearbyAttractions: ["그라벤 거리", "케른트너 거리", "호프부르크 궁전", "페터 교회"],
    photoTips: "슈테판 광장 북서쪽 모서리에서 전체 파사드를 담을 수 있습니다. 야경도 아름다우니 저녁 방문도 추천합니다.",
    tips: [
      "남탑은 엘리베이터가 없어 343계단을 걸어 올라가야 합니다. 체력에 자신 있다면 도전하세요.",
      "U1/U3 슈테판스플라츠역에서 바로 연결됩니다.",
      "미사 시간(일요일 오전 등)에는 관광이 제한되니 시간을 확인하세요.",
      "카타콤 투어는 가이드 동행으로만 가능하며 30분 간격으로 출발합니다.",
    ],
  },
  "austria/vienna/vienna/hofburg-palace": {
    heroGradient: "from-yellow-600 to-amber-900",
    description: "합스부르크 왕가가 600년 이상 거주한 겨울 궁전이자 현재 오스트리아 대통령 관저입니다. 시시 박물관, 황실 아파트, 황실 은기 컬렉션, 스페인 승마학교, 국립도서관 등이 포함된 거대한 궁전 복합단지입니다.",
    history: "13세기 중세 요새로 시작하여 합스부르크 왕조가 권력을 키움에 따라 계속 확장되었습니다. 마리아 테레지아, 프란츠 요제프 1세, 엘리자베트(시시) 등 역대 황제와 황후가 이곳에서 생활했습니다.",
    visitInfo: {
      hours: "매일 09:00~17:30 (7~8월 ~18:00)",
      admission: "시시 티켓(시시 박물관+황실 아파트+은기 컬렉션) €19.50",
      address: "Michaelerkuppel, 1010 Wien",
      website: "https://www.hofburg-wien.at",
    },
    highlights: [
      "시시 박물관 - 엘리자베트 황후의 삶과 유품 전시",
      "황실 아파트 - 프란츠 요제프와 시시의 실제 거주 공간",
      "황실 은기 컬렉션 - 7,000점 이상의 왕실 식기와 테이블 세팅",
      "스페인 승마학교의 리피차너 백마 공연",
    ],
    nearbyAttractions: ["슈테판 대성당", "국립 오페라극장", "알베르티나 미술관", "국립도서관 프룬크잘"],
    photoTips: "미하엘러 광장에서 미하엘러 문을 통한 궁전 진입 장면이 가장 인상적입니다.",
    tips: [
      "시시 티켓은 온라인 사전 구매 시 줄을 건너뛸 수 있습니다.",
      "스페인 승마학교 공연은 별도 티켓이 필요하며 조기 매진됩니다.",
      "오디오 가이드가 한국어를 지원합니다.",
      "인접한 국립도서관 프룬크잘(€10)도 꼭 방문할 가치가 있습니다.",
    ],
  },
  "austria/vienna/vienna/belvedere-palace": {
    heroGradient: "from-rose-500 to-pink-800",
    description: "바로크 건축의 걸작인 상궁과 하궁으로 이루어진 궁전 미술관입니다. 구스타프 클림트의 '키스'를 비롯한 오스트리아 최고의 미술 컬렉션을 소장하고 있으며, 정원에서 비엔나 스카이라인을 감상할 수 있습니다.",
    history: "18세기 초 사보이의 외젠 공이 여름 별궁으로 건설했습니다. 1955년 오스트리아 국가조약이 이곳에서 서명되어 역사적으로도 중요한 장소입니다.",
    visitInfo: {
      hours: "매일 09:00~18:00 (금요일 ~21:00)",
      admission: "상궁 €18.50, 하궁 €16, 통합 티켓 €27",
      address: "Prinz-Eugen-Straße 27, 1030 Wien",
      website: "https://www.belvedere.at",
    },
    highlights: [
      "구스타프 클림트의 '키스' - 세계에서 가장 유명한 그림 중 하나",
      "클림트의 '유디트', 에곤 실레의 작품들",
      "바로크 정원에서 바라보는 비엔나 스카이라인",
      "대리석 홀의 천장 프레스코화",
    ],
    nearbyAttractions: ["비엔나 중앙역", "카를스 교회", "비엔나 시립공원"],
    photoTips: "하궁 쪽에서 상궁을 배경으로 정원의 대칭 구도를 잡으면 완벽한 사진을 얻을 수 있습니다.",
    tips: [
      "클림트의 '키스'는 상궁 2층에 전시되어 있습니다.",
      "금요일 야간 개장(~21:00)을 이용하면 여유롭게 관람할 수 있습니다.",
      "트램 D 또는 18번으로 접근이 편리합니다.",
      "정원은 무료이며 산책만으로도 가치가 있습니다.",
    ],
  },
  "austria/vienna/vienna/naschmarkt": {
    heroGradient: "from-orange-500 to-red-700",
    description: "16세기부터 이어진 비엔나 최대의 재래시장으로 약 120개의 노점과 레스토랑이 500m에 걸쳐 늘어서 있습니다. 신선한 과일, 향신료, 치즈, 올리브부터 중동, 아시아, 이탈리아 음식까지 세계 각국의 맛을 한곳에서 만날 수 있습니다.",
    history: "1793년 공식 시장으로 기록되었으나 그 역사는 16세기까지 거슬러 올라갑니다. 원래 우유 시장으로 시작하여 현재는 비엔나에서 가장 다채로운 식문화 공간이 되었습니다.",
    visitInfo: {
      hours: "월~금 06:00~19:30, 토 06:00~18:00 (일요일 휴무), 벼룩시장: 토 06:30~14:00",
      admission: "무료 (개별 구매)",
      address: "Naschmarkt, 1060 Wien",
      website: "https://www.naschmarkt-vienna.com",
    },
    highlights: [
      "신선한 과일, 향신료, 올리브, 치즈 등 다양한 식재료",
      "중동, 터키, 인도, 이탈리아 등 세계 각국 레스토랑",
      "토요일 벼룩시장 - 골동품, 빈티지 의류, 레코드판",
      "시장 양쪽의 아르누보 건축물(오토 바그너 건물)",
    ],
    nearbyAttractions: ["제체시온 미술관", "마요리카하우스", "비엔나 국립 오페라극장", "카를스 교회"],
    photoTips: "시장 입구에서 전체 노점이 이어지는 모습을 원근감 있게 촬영하면 활기찬 시장 분위기를 담을 수 있습니다.",
    tips: [
      "토요일 오전이 벼룩시장과 함께 가장 활기찬 시간입니다.",
      "일요일에는 문을 닫으니 주의하세요.",
      "U4 케텐브뤼켄가세역에서 바로 접근 가능합니다.",
      "시장 끝쪽 레스토랑들이 상대적으로 가성비가 좋습니다.",
    ],
  },

  // ===== SALZBURG =====
  "austria/salzburg-region/salzburg/hohensalzburg-fortress": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "유럽에서 가장 크고 완벽하게 보존된 중세 요새로, 해발 506m 언덕 위에서 잘츠부르크 전체를 내려다봅니다. 1077년에 건축이 시작되어 한 번도 함락된 적이 없는 난공불락의 요새입니다.",
    history: "1077년 대주교 게프하르트가 서임권 투쟁 중 방어 목적으로 건축을 시작했습니다. 이후 수백 년에 걸쳐 확장되었으며, 대주교들의 거주지이자 군사 요새, 감옥으로도 사용되었습니다.",
    visitInfo: {
      hours: "1~4월, 10~12월 09:30~17:00 / 5~9월 08:30~20:00",
      admission: "푸니쿨라 포함 성인 €17.40, 도보 입장 €13.20",
      address: "Mönchsberg 34, 5020 Salzburg",
      website: "https://www.hohensalzburgcastle.com",
    },
    highlights: [
      "황금 홀(Goldene Stube) - 화려한 후기 고딕 양식의 방",
      "잘츠부르크 불(Salzburg Bull) - 매일 정해진 시간에 울리는 파이프 오르간",
      "요새 전망대에서 잘츠부르크 구시가지와 알프스 파노라마",
      "요새 박물관의 중세 무기와 갑옷 컬렉션",
    ],
    nearbyAttractions: ["잘츠부르크 대성당", "성 페터 수도원", "논베르크 수녀원", "레지덴츠 광장"],
    photoTips: "미라벨 정원 계단 위에서 요새를 배경으로 촬영하면 사운드 오브 뮤직의 명장면을 재현할 수 있습니다.",
    tips: [
      "푸니쿨라(경사 철도)를 이용하면 편하게 올라갈 수 있습니다.",
      "내려올 때는 도보로 성벽을 따라 걸으면 풍경이 훌륭합니다.",
      "잘츠부르크 카드에 요새 입장과 푸니쿨라가 포함되어 있습니다.",
      "여름 시즌에는 요새에서 야간 콘서트가 열립니다.",
    ],
  },
  "austria/salzburg-region/salzburg/mirabell-gardens": {
    heroGradient: "from-pink-400 to-rose-700",
    description: "잘츠부르크에서 가장 아름다운 바로크 정원으로, 영화 '사운드 오브 뮤직'에서 마리아와 아이들이 '도레미 송'을 부른 장소로 유명합니다. 호엔잘츠부르크 요새를 배경으로 한 경관이 세계적으로 사랑받습니다.",
    history: "1606년 대주교 볼프 디트리히가 연인 살로메 알트를 위해 조성했습니다. 현재의 바로크 정원은 18세기에 재정비된 것이며, 미라벨 궁전(현재 시청)과 함께 유네스코 세계유산에 포함됩니다.",
    visitInfo: {
      hours: "매일 06:00~일몰 (연중무휴)",
      admission: "무료",
      address: "Mirabellplatz 4, 5020 Salzburg",
      website: "https://www.salzburg.info",
    },
    highlights: [
      "'도레미 송' 촬영지 - 페가수스 분수 앞 계단",
      "드워프 정원(Zwerglgarten) - 17세기 대리석 난쟁이 조각들",
      "장미 정원의 계절별 꽃",
      "미라벨 궁전 대리석 홀 - 모차르트가 연주한 콘서트홀",
    ],
    nearbyAttractions: ["모차르트 주거지", "링크 거리", "카푸치너베르크 전망대", "잘차흐강 산책로"],
    photoTips: "정원 계단 위에서 분수와 대성당, 호엔잘츠부르크 요새를 한 프레임에 담을 수 있는 잘츠부르크 최고의 포토 스폿입니다.",
    tips: [
      "오전 이른 시간에 방문하면 인파 없이 사진을 찍을 수 있습니다.",
      "미라벨 궁전 대리석 홀에서 열리는 모차르트 콘서트는 잊을 수 없는 경험입니다.",
      "잘츠부르크 중앙역에서 도보 10분 거리입니다.",
      "봄~여름에 장미가 만개할 때 가장 아름답습니다.",
    ],
  },
  "austria/salzburg-region/salzburg/mozarts-birthplace": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "볼프강 아마데우스 모차르트가 1756년 1월 27일 태어나 17세까지 살았던 게트라이데 거리 9번지의 노란 건물입니다. 3개 층에 걸쳐 모차르트의 어린 시절 악기, 초상화, 가족 관련 유물이 전시되어 있습니다.",
    history: "모차르트 가족은 1747년부터 이 건물 3층에서 거주했습니다. 모차르트는 이곳에서 태어나 성장하며 어린 시절의 대부분의 작품을 이곳에서 작곡했습니다. 1880년부터 박물관으로 운영되고 있습니다.",
    visitInfo: {
      hours: "매일 09:00~17:30 (7~8월 08:30~19:00)",
      admission: "성인 €14, 학생 €11, 가족 티켓 €29",
      address: "Getreidegasse 9, 5020 Salzburg",
      website: "https://mozarteum.at",
    },
    highlights: [
      "모차르트가 어린 시절 사용한 바이올린",
      "모차르트 가족의 초상화와 편지",
      "18세기 잘츠부르크의 생활상 재현",
      "오페라 무대 세트 미니어처 컬렉션",
    ],
    nearbyAttractions: ["게트라이데 거리", "잘츠부르크 대성당", "레지덴츠 광장", "모차르트 광장"],
    photoTips: "건물 외관의 노란 파사드와 'Mozarts Geburtshaus' 간판을 함께 담으면 좋습니다.",
    tips: [
      "게트라이데 거리 쇼핑과 함께 방문하면 동선이 효율적입니다.",
      "잘차흐강 건너 모차르트 주거지(Wohnhaus)와 통합 티켓이 가능합니다.",
      "오디오 가이드가 한국어를 지원합니다.",
      "성수기에는 입장 대기가 있을 수 있으니 오전에 방문하세요.",
    ],
  },

  // ===== HALLSTATT =====
  "austria/salzburg-region/hallstatt/hallstatt-skywalk": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "해발 약 350m 높이의 전망 플랫폼에서 할슈타트 호수와 마을 전경, 그리고 다흐슈타인 산맥의 장엄한 파노라마를 감상할 수 있는 절경 포인트입니다. 소금 광산 투어와 연계하여 방문합니다.",
    history: "2013년에 개장한 전망대로, 고대 소금 광산의 입구 인근에 위치합니다. 할슈타트의 역사적 소금 채굴 루트를 따라 올라가며 7,000년 소금 역사를 체험할 수 있습니다.",
    visitInfo: {
      hours: "4~10월 09:30~16:30 (시즌에 따라 변동)",
      admission: "소금 광산+스카이워크 통합 티켓 성인 €40, 어린이 €20",
      address: "Salzbergstraße 21, 4830 Hallstatt",
      website: "https://www.salzwelten.at",
    },
    highlights: [
      "삼각형 전망 플랫폼에서 할슈타트 호수 360도 조망",
      "발 아래 유리 패널을 통해 내려다보는 아찔한 체험",
      "다흐슈타인 산맥의 웅장한 배경",
      "소금 광산 투어와 연계 방문",
    ],
    nearbyAttractions: ["소금 광산", "할슈타트 호수", "할슈타트 납골당", "루터교 교회"],
    photoTips: "전망대 끝에서 아래를 내려다보며 호수와 마을을 함께 담으면 할슈타트의 상징적인 사진을 얻을 수 있습니다.",
    tips: [
      "푸니쿨라로 올라가면 편하고 빠릅니다(도보 약 1시간).",
      "소금 광산 통합 티켓이 개별 구매보다 저렴합니다.",
      "날씨가 좋은 날 방문해야 전망을 제대로 즐길 수 있습니다.",
      "성수기(7~8월)에는 오전 일찍 방문하세요.",
    ],
  },
  "austria/salzburg-region/hallstatt/salt-mine": {
    heroGradient: "from-amber-600 to-stone-800",
    description: "세계에서 가장 오래된 소금 광산으로 약 7,000년의 역사를 자랑합니다. 광부 복장을 입고 나무 미끄럼틀을 타며 지하 깊숙이 내려가는 체험이 하이라이트이며, 지하 소금 호수와 멀티미디어 쇼가 환상적입니다.",
    history: "기원전 5000년경부터 소금이 채굴되었으며, 할슈타트라는 이름 자체가 '소금의 장소'를 뜻합니다. 1734년 광산에서 발견된 선사시대 광부의 유해가 초기 고고학 연구에 중요한 자료가 되었습니다.",
    visitInfo: {
      hours: "4~10월 09:30~16:00 (시즌에 따라 변동)",
      admission: "소금 광산+스카이워크 통합 티켓 성인 €40, 어린이 €20",
      address: "Salzbergstraße 21, 4830 Hallstatt",
      website: "https://www.salzwelten.at",
    },
    highlights: [
      "64m 나무 미끄럼틀 - 광부들이 사용하던 이동 수단 체험",
      "지하 소금 호수의 멀티미디어 빛 쇼",
      "세계에서 가장 오래된 나무 계단(기원전 1344년)",
      "광부 복장 체험",
    ],
    nearbyAttractions: ["할슈타트 스카이워크", "할슈타트 호수", "할슈타트 박물관"],
    photoTips: "광산 내부 미끄럼틀 타는 순간이 가장 인기 있는 포토 포인트입니다. 카메라를 단단히 잡으세요.",
    tips: [
      "광산 내부 온도가 약 8°C로 여름에도 긴 옷을 준비하세요.",
      "4세 미만 어린이는 입장이 불가합니다.",
      "스카이워크와 통합 코스를 추천합니다.",
      "투어는 약 70분 소요되며 가이드 동행입니다.",
    ],
  },

  // ===== INNSBRUCK =====
  "austria/tyrol/innsbruck/golden-roof": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "2,657장의 금박 구리 타일로 장식된 발코니 지붕으로 인스브루크의 상징입니다. 신성로마제국 황제 막시밀리안 1세가 15세기 말에 광장에서 열리는 축제와 대회를 관람하기 위해 건설했습니다.",
    history: "1500년경 막시밀리안 1세의 명으로 건설되었습니다. 발코니의 부조에는 막시밀리안 1세와 두 부인(마리아 폰 부르군트, 비앙카 마리아 스포르차)의 모습이 새겨져 있습니다.",
    visitInfo: {
      hours: "5~9월 화~일 10:00~17:00, 10~4월 화~일 10:00~17:00 (월요일 휴관)",
      admission: "성인 €6, 학생 €3",
      address: "Herzog-Friedrich-Straße 15, 6020 Innsbruck",
      website: "https://www.innsbruck.info",
    },
    highlights: [
      "2,657장의 금박 구리 타일 장식",
      "발코니 부조의 막시밀리안 1세와 두 부인",
      "박물관 내 막시밀리안 1세 관련 전시",
      "알트슈타트의 색채 풍부한 건물들과 어우러진 풍경",
    ],
    nearbyAttractions: ["헬블링하우스", "슈타트투름 전망탑", "호프부르크 궁전(인스브루크)", "대성당"],
    photoTips: "맞은편 건물에서 정면으로 촬영하거나, 약간 측면에서 거리의 원근감을 살려 찍으면 좋습니다.",
    tips: [
      "외관 감상은 무료이며, 박물관 입장료는 별도입니다.",
      "바로 옆 슈타트투름(시탑, €4)에 올라가면 알트슈타트 전경을 볼 수 있습니다.",
      "겨울 크리스마스 마켓 시즌에 황금 지붕 앞이 특히 분위기 있습니다.",
      "인스브루크 카드에 박물관 입장이 포함되어 있습니다.",
    ],
  },
  "austria/tyrol/innsbruck/nordkette-cable-car": {
    heroGradient: "from-sky-500 to-indigo-800",
    description: "인스브루크 도심에서 20분 만에 해발 2,334m 알프스 정상에 도달하는 3단계 케이블카입니다. 자하 하디드가 디자인한 도심 정거장에서 출발하여, 노르트케테 산맥의 장엄한 알프스 파노라마를 만끽할 수 있습니다.",
    history: "1928년 처음 개통되었으며 2007년 자하 하디드의 설계로 정거장이 현대적으로 재건되었습니다. 도심에서 2,000m 이상의 고산 지대에 도달할 수 있는 세계에서 몇 안 되는 케이블카 시스템입니다.",
    visitInfo: {
      hours: "첫차 08:30, 막차 17:00 (시즌에 따라 변동, 여름 연장 운행)",
      admission: "하펠레카 왕복(전 구간) 성인 €41.50, 인스브루크 카드 소지 시 무료",
      address: "Rennweg 3, 6020 Innsbruck",
      website: "https://www.nordkette.com",
    },
    highlights: [
      "하펠레카(2,334m) 정상에서 360도 알프스 파노라마",
      "자하 하디드 디자인의 미래적 정거장 건축",
      "제그루베(1,905m) 테라스에서의 알프스 카페 체험",
      "여름 하이킹, 겨울 스키의 출발점",
    ],
    nearbyAttractions: ["알펜 동물원", "호프가르텐 정원", "황금 지붕", "인스브루크 호프부르크"],
    photoTips: "제그루베 테라스에서 인스브루크 시내를 내려다보며 촬영하면 도심과 알프스의 극적인 대비를 담을 수 있습니다.",
    tips: [
      "인스브루크 카드에 왕복 1회가 포함되어 있어 반드시 활용하세요.",
      "산 정상은 여름에도 기온이 낮으니 방풍 재킷을 준비하세요.",
      "제그루베까지만 가도 충분히 멋진 전망을 즐길 수 있습니다.",
      "구름이 많은 날에는 전망이 제한될 수 있으니 날씨를 확인하고 방문하세요.",
    ],
  },

  // ===== GRAZ =====
  "austria/other-regions/graz/schlossberg-clock-tower": {
    heroGradient: "from-rose-500 to-purple-800",
    description: "그라츠의 상징인 시계탑(우어투름)은 해발 473m 슐로스베르크 언덕 정상에 서 있습니다. 1561년에 건설된 이 탑은 시침과 분침이 뒤바뀌어 있는 독특한 시계로 유명하며, 그라츠 구시가지와 알프스의 탁 트인 전망을 선사합니다.",
    history: "슐로스베르크의 요새는 중세 시대부터 존재했으며, 나폴레옹 전쟁(1809년) 때 대부분 파괴되었으나 시계탑과 종탑만은 시민들이 몸값을 지불하여 보존했습니다. 시계탑의 큰 바늘이 시침, 작은 바늘이 분침으로 일반 시계와 반대입니다.",
    visitInfo: {
      hours: "슐로스베르크: 24시간 개방 / 리프트: 매일 08:00~24:00 / 동굴 엘리베이터: 매일 08:00~24:00",
      admission: "슐로스베르크 & 시계탑 무료 / 리프트 왕복 €2.50 / 슐로스베르크 슬라이드 €2.20",
      address: "Am Schlossberg, 8010 Graz",
      website: "https://www.graztourismus.at",
    },
    highlights: [
      "시침과 분침이 뒤바뀐 독특한 시계",
      "슐로스베르크 정상에서 그라츠 구시가지 360도 조망",
      "260계단 또는 동굴 엘리베이터로 올라가는 재미",
      "슐로스베르크 슬라이드 - 동굴 내부 미끄럼틀 체험",
    ],
    nearbyAttractions: ["하우프트 광장", "쿤스트하우스", "란트하우스", "무르인젤"],
    photoTips: "시계탑과 그라츠 시내를 함께 담으려면 탑 바로 앞 전망 테라스에서 촬영하세요. 일몰 시간대가 가장 아름답습니다.",
    tips: [
      "무료 동굴 엘리베이터로 올라가고 계단으로 내려오면 동선이 효율적입니다.",
      "슐로스베르크 슬라이드(유료)는 동굴 내부를 미끄럼틀로 내려오는 독특한 체험입니다.",
      "야경이 아름다우니 저녁 방문도 추천합니다.",
      "트램 1, 3, 6, 7번 하우프트 광장 하차 후 도보 5분입니다.",
    ],
  },
};
