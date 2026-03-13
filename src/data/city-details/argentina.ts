import type { CityDetail, AttractionDetail } from "../city-details";

export const argentinaCityDetails: Record<string, CityDetail> = {
  // ===== BUENOS AIRES REGION =====
  "argentina/buenos-aires-region/buenos-aires": {
    heroGradient: "from-sky-500 to-blue-800",
    description: "탱고가 태어난 도시, 부에노스아이레스. '남미의 파리'로 불리는 이 도시는 유럽풍 건축, 열정적인 탱고 문화, 세계적 수준의 미식, 활기찬 예술 씬이 공존합니다. 라 보카의 화려한 색깔부터 팔레르모의 세련된 카페까지, 끝없이 매력적인 수도입니다.",
    bestTime: "3~5월 (가을) / 9~11월 (봄)",
    stayArea: "팔레르모 / 레콜레타 / 산 텔모",
    transport: "지하철(수브테) 6개 노선, 버스(콜렉티보), SUBE 교통카드",
    districts: [
      { name: "라 보카", nameEn: "La Boca", description: "이탈리아 이민자들이 형성한 항구 지구. 카미니토 거리의 알록달록한 철제 건물이 상징.", highlights: ["카미니토 거리", "봄보네라 경기장", "탱고 거리 공연"] },
      { name: "산 텔모", nameEn: "San Telmo", description: "부에노스아이레스에서 가장 오래된 지구. 매주 일요일 골동품 시장이 열리는 보헤미안 동네.", highlights: ["플라사 도레고 일요 시장", "산 텔모 시장", "탱고 바(밀롱가)"] },
      { name: "팔레르모", nameEn: "Palermo", description: "세련된 레스토랑과 부티크 숍, 공원이 어우러진 부에노스아이레스 최대의 지구.", highlights: ["팔레르모 소호", "팔레르모 우드 공원", "MALBA 미술관"] },
    ],
    attractions: [
      { name: "라 보카 카미니토", nameEn: "La Boca Caminito", description: "이탈리아 이민자들이 선박 페인트로 집을 칠하기 시작한 전통이 남아있는 화려한 색깔의 골목. 탱고 공연과 아트 갤러리가 가득합니다.", category: "거리", tip: "낮에만 방문하세요. 카미니토 주변 지역은 저녁에 위험할 수 있습니다." },
      { name: "레콜레타 묘지", nameEn: "Recoleta Cemetery", description: "에비타(에바 페론)를 포함한 아르헨티나 유명 인사들이 잠든 화려한 영묘 묘지. 도시 같은 구조의 독특한 묘지 건축.", category: "역사", tip: "에비타 무덤은 두아르테 가문 묘지에 있습니다. 지도를 꼭 챙기세요." },
      { name: "플로리다 거리", nameEn: "Florida Street", description: "부에노스아이레스 중심부의 보행자 전용 쇼핑 거리. 탱고 공연과 길거리 공연자들이 활기를 더합니다.", category: "거리" },
      { name: "MALBA 미술관", nameEn: "MALBA Museum", description: "프리다 칼로, 디에고 리베라 등 라틴 아메리카 현대 미술의 대가들을 소장한 세계적 미술관.", category: "박물관", tip: "수요일은 오후 8시까지 개관하며 더 조용합니다." },
      { name: "카사 로사다", nameEn: "Casa Rosada", description: "에비타가 연설을 했던 분홍빛 대통령 관저. 플라사 데 마요 광장을 마주하고 있습니다.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "콜로니아 델 사크라멘토", nameEn: "Colonia del Sacramento", description: "포르투갈이 건설한 유네스코 세계유산 도시. 페리로 1시간 거리의 우루과이 역사 도시.", travelTime: "페리 1시간", gradient: "from-amber-400 to-orange-700" },
      { name: "루한", nameEn: "Lujan", description: "아르헨티나 가톨릭 순례의 성지. 신고딕 양식의 루한 대성당이 있습니다.", travelTime: "버스 약 1시간 30분", gradient: "from-purple-400 to-indigo-700" },
    ],
    localFood: [
      { name: "아사도", description: "아르헨티나식 바베큐. 소갈비, 초리조 등을 장작불에 천천히 굽는 문화 그 자체.", emoji: "🥩" },
      { name: "엠파나다", description: "고기·치즈·옥수수 등을 채운 반달 모양 구운 만두. 각 지역마다 독특한 레시피가 있습니다.", emoji: "🥟" },
      { name: "둘세 데 레체", description: "카라멜화된 우유로 만든 아르헨티나 국민 스프레드. 크로아상이나 아이스크림과 함께.", emoji: "🍮" },
    ],
    tips: [
      "아르헨티나 페소(ARS)는 공식 환율과 블루 달러 환율 차이가 큽니다. 합법적인 환전소(카사 데 캄비오)를 이용하세요.",
      "탱고 쇼(밀롱가)는 자정 이후가 진짜 시작입니다. 일찍 자는 여행자에게는 고역일 수 있습니다.",
      "부에노스아이레스의 소고기는 세계 최고 수준. 파릴랴(그릴 레스토랑)에서 꼭 드세요.",
      "카페 문화가 발달해 있어 유명한 카페에서 커피 한 잔을 즐기는 것도 경험입니다.",
    ],
  },

  // ===== PATAGONIA =====
  "argentina/patagonia/el-calafate": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "아르헨티나 파타고니아의 게이트웨이. 세계 3대 담수 빙하 중 하나인 페리토 모레노 빙하를 보기 위해 전 세계 여행자들이 모여드는 도시입니다. 빙하의 장엄한 붕괴 소리와 새파란 빙하 절벽은 평생 잊지 못할 경험을 선사합니다.",
    bestTime: "10~4월 (파타고니아 여름 시즌)",
    stayArea: "엘 칼라파테 시내 (소규모 도시)",
    transport: "투어 버스 (빙하 방문), 택시, 렌터카",
    districts: [
      { name: "빙하 국립공원", nameEn: "Los Glaciares National Park", description: "페리토 모레노 빙하가 있는 유네스코 세계유산. 파타고니아의 심장.", highlights: ["페리토 모레노 빙하", "빙하 트레킹", "보트 투어"] },
    ],
    attractions: [
      { name: "페리토 모레노 빙하", nameEn: "Perito Moreno Glacier", description: "너비 5km, 높이 60~70m의 거대한 빙하가 아르헨티노 호수로 천천히 이동하는 세계 3대 빙하 중 하나. 빙하의 붕괴(칼빙) 소리와 광경은 압도적입니다.", category: "자연", tip: "목제 트레일(보에드가스)을 따라 여러 전망대에서 다양한 각도로 감상하세요." },
      { name: "빙하 트레킹 (미니 트레킹)", nameEn: "Mini Trekking on Glacier", description: "실제 빙하 표면을 아이젠을 신고 걷는 투어. 빙하의 크레바스와 파란 얼음 동굴을 가까이에서 탐험합니다.", category: "어드벤처", tip: "체력이 좋다면 '빙하 트레킹 빅'을 선택하세요. 더 깊은 빙하 내부를 탐험합니다." },
      { name: "아르헨티노 호수", nameEn: "Lake Argentino", description: "아르헨티나 최대의 호수로 페리토 모레노 빙하와 접해 있습니다. 보트 투어로 거대한 빙산들 사이를 유람할 수 있습니다.", category: "자연" },
    ],
    dayTrips: [
      { name: "엘 찰텐 (피츠로이)", nameEn: "El Chalten (Fitz Roy)", description: "세계 최고 난이도의 클라이밍 명소 피츠로이가 있는 트레킹 성지.", travelTime: "버스 약 3시간", gradient: "from-slate-400 to-stone-700" },
    ],
    localFood: [
      { name: "파타고니아 양고기", description: "파타고니아의 드넓은 초원에서 자란 신선한 양고기. 아사도(바베큐)로 즐깁니다.", emoji: "🐑" },
      { name: "송어 요리", description: "파타고니아 청정 강에서 잡은 무지개 송어 요리.", emoji: "🐟" },
    ],
    tips: [
      "파타고니아 날씨는 변덕스럽습니다. 방풍·방수 재킷은 필수입니다.",
      "빙하 방문 투어는 여러 회사에서 운영하며 공원 입장료가 별도입니다.",
      "성수기(12~2월)에는 숙소를 3개월 전에 예약하세요.",
      "엘 칼라파테는 소규모 도시라 물가가 높습니다. 슈퍼마켓에서 식재료를 준비하면 절약됩니다.",
    ],
  },
  "argentina/patagonia/ushuaia": {
    heroGradient: "from-slate-500 to-gray-800",
    description: "세계 최남단 도시, 우수아이아. '세상의 끝'이라 불리는 이 도시는 비글 해협과 안데스 산맥 사이에 자리하며, 남극 탐험의 출발지이자 최남단 열차와 국립공원을 품은 독특한 여행지입니다.",
    bestTime: "11~3월 (남반구 여름, 화이트나이트 경험 가능)",
    stayArea: "우수아이아 시내",
    transport: "도보, 택시, 렌터카",
    districts: [
      { name: "우수아이아 시내", nameEn: "Ushuaia Downtown", description: "작은 항구 도시. 세상의 끝 박물관과 레스토랑, 남극 크루즈 출발지.", highlights: ["세상의 끝 박물관", "항구", "아르헨티나 남극 연구소"] },
    ],
    attractions: [
      { name: "티에라 델 푸에고 국립공원", nameEn: "Tierra del Fuego National Park", description: "세상의 끝에 있는 아르헨티나 최남단 국립공원. 비글 해협 해안을 따라 하이킹 트레일이 이어집니다.", category: "자연", tip: "세상의 끝 우체국에서 스탬프를 찍어보세요." },
      { name: "비글 해협", nameEn: "Beagle Channel", description: "찰스 다윈이 비글호를 타고 탐험한 역사적 해협. 보트 투어로 펭귄 섬과 물개 바위를 방문합니다.", category: "자연" },
      { name: "세상의 끝 기차", nameEn: "End of the World Train", description: "세계 최남단 협궤철도. 과거 죄수들이 국립공원의 나무를 벌목하는 데 사용한 역사적 열차.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "남극 크루즈", nameEn: "Antarctica Cruise", description: "우수아이아에서 출발하는 남극 반도 크루즈. 드레이크 해협을 거쳐 펭귄 서식지와 빙산을 탐험합니다.", travelTime: "최소 10박 11일", gradient: "from-blue-200 to-cyan-600" },
    ],
    localFood: [
      { name: "센토야 (킹크랩)", description: "비글 해협에서 잡은 남극 킹크랩. 우수아이아 명물로 다양한 방식으로 즐깁니다.", emoji: "🦀" },
      { name: "파타고니아 강꼬치고기", description: "파타고니아 청정 강의 신선한 강꼬치고기 요리.", emoji: "🐟" },
    ],
    tips: [
      "여름(12~2월)에도 기온이 10~15°C에 불과합니다. 따뜻한 옷을 준비하세요.",
      "1월 21일경 최장 하지 일몰 시간(22시 이후)을 경험할 수 있습니다.",
      "남극 크루즈는 가격이 매우 높습니다. 출발 직전 할인 상품을 노려볼 수 있습니다.",
      "세상의 끝 우체국에서 가족·친구에게 엽서를 보내는 것이 여행자들의 전통입니다.",
    ],
  },

  // ===== NORTHWEST =====
  "argentina/northwest/mendoza": {
    heroGradient: "from-purple-500 to-red-700",
    description: "안데스 산맥 기슭에 자리한 아르헨티나 최대의 와인 산지. 세계적으로 유명한 말벡 와인의 고향으로, 포도밭 사이를 자전거로 달리며 와이너리 투어를 즐기는 최고의 와인 여행지입니다. 아콩카과 등반의 베이스캠프이기도 합니다.",
    bestTime: "3~5월 (포도 수확 시즌) / 9~11월 (봄)",
    stayArea: "멘도사 시내 / 마이푸 / 루한 데 쿠요",
    transport: "자전거 (마이푸), 택시, 렌터카",
    districts: [
      { name: "마이푸 와인 지구", nameEn: "Maipú Wine District", description: "자전거를 빌려 와이너리를 순회하기에 완벽한 포도밭 지역.", highlights: ["루타 델 비노", "와이너리 투어", "올리브 오일 시음"] },
    ],
    attractions: [
      { name: "와이너리 투어 (루타 델 비노)", nameEn: "Ruta del Vino", description: "마이푸와 루한 데 쿠요 지역의 세계적인 와이너리들을 자전거나 차로 투어합니다. 말벡 와인 시음과 포도밭 풍경이 일품입니다.", category: "체험", tip: "자전거 투어는 당일 예약도 가능하지만, 와이너리 예약은 미리 하세요." },
      { name: "아콩카과 주립공원", nameEn: "Aconcagua Provincial Park", description: "해발 6,961m로 아메리카 최고봉 아콩카과를 품은 공원. 등반가의 성지이며 비등반 트레킹도 가능합니다.", category: "자연" },
      { name: "멘도사 중심 광장", nameEn: "Plaza Independencia", description: "멘도사 시내 중심의 광장으로 주말 야외 시장과 공연이 열립니다.", category: "광장" },
    ],
    dayTrips: [
      { name: "안데스 산맥 국경 투어", nameEn: "Andes Mountain Pass", description: "칠레 국경까지 이어지는 안데스 산맥 드라이브 투어. 크리스토 레덴토르 국경 동상과 아콩카과 조망.", travelTime: "차로 약 3시간", gradient: "from-stone-400 to-gray-700" },
    ],
    localFood: [
      { name: "말벡 와인", description: "세계 최고의 말벡 와인 산지. 직접 와이너리를 방문해 현지에서 즐기세요.", emoji: "🍷" },
      { name: "초리판", description: "아르헨티나식 초리조 핫도그. 와인과 함께 먹는 현지 간식.", emoji: "🌭" },
    ],
    tips: [
      "포도 수확 시즌(3월 초~4월)의 '벤디미아 포도 수확 축제'는 멘도사 최대 행사입니다.",
      "마이푸에서 자전거를 빌리면 하루에 3~4곳의 와이너리를 방문할 수 있습니다.",
      "와이너리 시음은 보통 무료~저렴하지만 고급 와이너리는 예약과 시음료가 필요합니다.",
      "멘도사는 햇빛이 강렬합니다. 선크림과 모자를 꼭 챙기세요.",
    ],
  },
};

export const argentinaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BUENOS AIRES =====
  "argentina/buenos-aires-region/buenos-aires/la-boca-caminito": {
    heroGradient: "from-yellow-400 to-red-600",
    description: "이탈리아 이민자들이 선박에 남은 페인트로 집을 칠하기 시작한 데서 유래한 라 보카의 화려한 골목. 파란·노란·빨간 물결 모양의 철제 건물들이 늘어선 카미니토는 아르헨티나의 대표 관광 명소이자 탱고의 발상지입니다.",
    visitInfo: {
      hours: "24시간 (낮 방문 권장)",
      admission: "무료",
      address: "Caminito, La Boca, Buenos Aires",
    },
    highlights: [
      "알록달록한 물결 모양 철제 건물들",
      "카미니토 거리의 탱고 공연",
      "보카 주니어스 봄보네라 경기장",
      "야외 아트 갤러리와 조각상",
      "전통 아르헨티나 레스토랑",
    ],
    nearbyAttractions: ["봄보네라 경기장", "라 보카 박물관", "리아추엘로 강"],
    photoTips: "카미니토 골목 끝에서 건물들을 배경으로 촬영하면 색깔이 가장 잘 살아납니다. 탱고 공연자들과 함께하는 사진은 팁(ARS 500~1,000)을 드리는 것이 에티켓입니다.",
    tips: [
      "카미니토는 낮에만 방문하세요. 라 보카 지역은 해질 후 위험합니다.",
      "탱고 공연자들은 사진 촬영 후 팁을 기대합니다. 거절하기 어려우니 각오하세요.",
      "주변 레스토랑은 관광객용이 많습니다. 골목 안쪽으로 들어가면 더 현지스러운 곳이 있습니다.",
      "봄보네라 경기장 투어는 별도 예약이 필요합니다.",
    ],
  },
  "argentina/buenos-aires-region/buenos-aires/recoleta-cemetery": {
    heroGradient: "from-stone-400 to-gray-700",
    description: "마치 도시처럼 설계된 유럽풍 묘지. 4,691개의 영묘(마우솔레오)가 미로처럼 이어진 이곳에는 에바 페론(에비타), 아르헨티나 대통령들, 노벨상 수상자 등 유명 인사들이 잠들어 있습니다. 건축과 역사, 예술이 어우러진 독특한 명소입니다.",
    visitInfo: {
      hours: "07:00~18:00",
      admission: "무료 (가이드 투어 유료)",
      address: "Junin 1760, Recoleta, Buenos Aires",
    },
    highlights: [
      "에바 페론(에비타) 두아르테 가문 영묘",
      "프랑스·이탈리아 바로크 양식의 화려한 영묘들",
      "아르헨티나 역사 인물들의 무덤",
      "야외 도시 같은 구조의 통로와 계단",
      "독특한 건축 양식의 조각과 석재 장식",
    ],
    nearbyAttractions: ["레콜레타 문화센터", "MALBA 미술관", "아르테 데코 건물들"],
    photoTips: "에비타 무덤 근처의 좁은 골목과 화려한 영묘들이 극적인 사진 배경이 됩니다. 역광이 있는 오후보다 오전에 방문하세요.",
    tips: [
      "지도 없이는 미로 같은 구조에서 길을 잃기 쉽습니다. 입구에서 무료 지도를 받으세요.",
      "에비타 무덤은 항상 꽃이 놓여 있습니다. 지도의 두아르테 영묘를 찾으세요.",
      "가이드 투어(영어 가능)를 이용하면 역사적 배경을 깊이 이해할 수 있습니다.",
      "고양이들이 많이 살고 있어 고양이를 좋아하는 여행자에게 특별한 경험입니다.",
    ],
  },
  "argentina/buenos-aires-region/buenos-aires/casa-rosada": {
    heroGradient: "from-pink-400 to-rose-700",
    description: "아르헨티나 대통령 관저이자 행정부의 상징인 분홍색 궁전. 1898년 완공된 이탈리아 르네상스 양식의 건물로, 이름 그대로 '분홍색 집'이라는 뜻입니다. 에바 페론이 플라사 데 마요 광장을 향해 유명한 연설을 했던 발코니가 바로 이곳에 있으며, 아르헨티나 독립과 민주주의의 역사가 서린 장소입니다.",
    history: "카사 로사다의 분홍색은 19세기 대통령 사르미엔토가 당시 대립하던 두 정치 세력(연방주의 빨강, 단일주의 하양)의 화합을 상징하기 위해 두 색을 섞었다는 설이 전해집니다. 실제로는 당시 건물 외벽에 소의 피와 기름을 섞어 바르는 전통 도료를 사용한 것이 분홍빛을 띠게 된 것으로 알려져 있습니다.",
    visitInfo: {
      hours: "토·일·공휴일 10:00~18:00 (무료 가이드 투어, 사전 예약 필수)",
      admission: "무료 (사전 온라인 예약 필수)",
      address: "Balcarce 50, C1064AAB, Buenos Aires",
      website: "https://www.casarosada.gob.ar",
    },
    highlights: [
      "에바 페론이 연설한 역사적 발코니",
      "플라사 데 마요 광장의 장엄한 전경",
      "대통령 집무실과 역대 대통령 유물 전시",
      "이탈리아 르네상스 양식의 화려한 내부 장식",
      "카사 로사다 박물관 (지하 전시관)",
    ],
    nearbyAttractions: ["플라사 데 마요 광장", "카빌도(구 시청사)", "메트로폴리탄 대성당"],
    photoTips: "플라사 데 마요 광장 중앙의 5월 혁명 기념탑과 카사 로사다를 함께 담으면 상징적인 구도가 됩니다. 석양 무렵 분홍색 외벽이 황금빛으로 물드는 시간대가 가장 아름답습니다.",
    tips: [
      "내부 투어는 주말과 공휴일에만 가능하며, 공식 웹사이트에서 사전 예약이 필수입니다.",
      "여권 또는 신분증을 반드시 지참하세요. 보안 검색이 있습니다.",
      "플라사 데 마요에서는 매주 목요일 오후 '5월 광장의 어머니회' 행진이 열립니다.",
      "주변에 카빌도와 메트로폴리탄 대성당이 있어 함께 둘러보기 좋습니다.",
    ],
  },
  "argentina/buenos-aires-region/buenos-aires/malba-museum": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "라틴 아메리카 현대 미술의 보고, MALBA(Museo de Arte Latinoamericano de Buenos Aires). 2001년 개관한 이 미술관은 프리다 칼로, 디에고 리베라, 타르실라 도 아마랄, 안토니오 베르니 등 라틴 아메리카를 대표하는 현대·근대 미술 거장들의 작품을 소장하고 있습니다. 기하학적인 현대 건축물 자체도 예술 작품입니다.",
    visitInfo: {
      hours: "목~월 12:00~20:00, 수 12:00~21:00 (화요일 휴관)",
      admission: "일반 ARS 약 3,000 / 수요일 할인 적용",
      address: "Av. Pres. Figueroa Alcorta 3415, C1425CLA Buenos Aires",
      website: "https://www.malba.org.ar",
    },
    highlights: [
      "프리다 칼로 '디에고와 나(Diego y yo)' 등 대표작",
      "디에고 리베라, 타르실라 도 아마랄의 걸작들",
      "안토니오 베르니의 사회적 리얼리즘 작품",
      "기획 전시와 라틴 아메리카 영화 상영 프로그램",
      "기하학적 현대 건축의 외관과 자연광 갤러리",
    ],
    nearbyAttractions: ["레콜레타 묘지", "국립미술관(MNBA)", "팔레르모 우드 공원"],
    photoTips: "미술관 1층 로비의 대형 유리창에서 자연광이 들어오는 시간대에 촬영하면 건축미를 살릴 수 있습니다. 일부 전시실은 촬영이 제한되니 표시를 확인하세요.",
    tips: [
      "수요일은 할인된 가격으로 입장 가능하며, 21시까지 연장 운영합니다.",
      "미술관 내 서점과 카페도 훌륭합니다. 라틴 아메리카 아트북을 기념품으로 추천합니다.",
      "오디오 가이드(영어·스페인어)를 대여하면 작품 이해가 깊어집니다.",
      "팔레르모 지구에 위치해 있어 주변 레스토랑과 카페에서 식사를 겸하기 좋습니다.",
    ],
  },
  "argentina/patagonia/el-calafate/perito-moreno-glacier": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "지구상에서 얼마 남지 않은 성장하는 빙하 중 하나. 너비 5km, 높이 60~70m, 길이 30km에 달하는 페리토 모레노 빙하는 새파란 얼음이 아르헨티노 호수에 맞닿아 주기적으로 거대한 빙하 붕괴를 일으킵니다. 유네스코 세계유산입니다.",
    visitInfo: {
      hours: "09:00~20:00 (계절에 따라 변동)",
      admission: "공원 입장료 외국인 ARS 포함 약 USD 35",
      address: "Los Glaciares National Park, Santa Cruz Province",
      website: "https://www.losglaciares.com",
    },
    highlights: [
      "빙하 절벽 붕괴(칼빙)의 굉음과 장관",
      "새파란 색의 거대한 빙하 절벽",
      "목제 트레일을 따라 이어지는 다양한 전망대",
      "빙하 위 트레킹(미니 트레킹·빅 아이스)",
      "호수 위 부유하는 빙산들",
    ],
    nearbyAttractions: ["아르헨티노 호수 보트 투어", "엘 칼라파테 시내", "닌도 데 콘도르 전망대"],
    photoTips: "전망 갑판에서 망원 렌즈로 빙하 절벽 디테일을 촬영하거나, 광각으로 전체 빙하를 담으세요. 맑은 날 오전이 파란 빙하색이 가장 선명합니다.",
    tips: [
      "따뜻하고 방수되는 재킷을 꼭 챙기세요. 빙하 근처는 바람이 매우 강합니다.",
      "빙하 위 트레킹은 투어 회사를 통해 예약해야 합니다. 아이젠과 장비는 포함됩니다.",
      "빙하 붕괴는 예측할 수 없지만 오후에 더 자주 발생하는 경향이 있습니다.",
      "공원 입장 후 셔틀버스로 빙하 트레일까지 이동합니다.",
    ],
  },
  "argentina/patagonia/el-calafate/lake-argentino": {
    heroGradient: "from-sky-400 to-indigo-700",
    description: "아르헨티나 최대의 담수호이자 파타고니아의 보석. 면적 1,415km²에 달하는 아르헨티노 호수는 빙하가 녹아 만들어진 유백색과 에메랄드색 물빛이 특징입니다. 페리토 모레노를 비롯한 여러 빙하가 이 호수로 흘러들며, 보트 투어를 통해 거대한 빙산들 사이를 유람하는 경험은 엘 칼라파테 여행의 백미입니다.",
    visitInfo: {
      hours: "투어 출발 시간에 따라 상이 (보통 09:00~10:00 출발)",
      admission: "보트 투어 USD 80~150 (시즌·코스에 따라 변동)",
      address: "Puerto Bajo de las Sombras, El Calafate, Santa Cruz Province",
    },
    highlights: [
      "빙하에서 분리된 거대한 빙산들 사이 유람",
      "우프살라 빙하와 스페가치니 빙하 보트 투어",
      "유백색과 에메랄드빛이 공존하는 신비로운 호수색",
      "호수 주변 안데스 산맥의 장엄한 파노라마",
      "호수 위에서 바라보는 페리토 모레노 빙하 전경",
    ],
    nearbyAttractions: ["페리토 모레노 빙하", "우프살라 빙하", "닌도 데 콘도르 전망대"],
    photoTips: "보트 위에서 빙산을 촬영할 때는 셔터 속도를 높여 흔들림을 방지하세요. 빙산의 푸른빛은 흐린 날이 오히려 더 선명하게 표현됩니다.",
    tips: [
      "보트 투어는 성수기에 빨리 마감됩니다. 최소 하루 전에 예약하세요.",
      "호수 위는 바람이 매우 강하고 춥습니다. 방풍 재킷과 장갑은 필수입니다.",
      "'토도 글라시아레스(Todo Glaciares)' 투어는 우프살라·스페가치니·페리토 모레노를 하루에 모두 볼 수 있는 풀코스입니다.",
      "보트에서 멀미가 심한 분은 출발 30분 전에 멀미약을 복용하세요.",
    ],
  },
  // ===== USHUAIA =====
  "argentina/patagonia/ushuaia/tierra-del-fuego-national-park": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "세계 최남단 국립공원, 티에라 델 푸에고. '불의 땅'이라는 이름의 이 공원은 안데스 산맥의 끝자락이 비글 해협과 만나는 곳에 자리합니다. 남극 너도밤나무 숲, 이탄 습지, 빙하 호수, 해안 절벽이 어우러진 원시적 자연 속에서 하이킹을 즐길 수 있으며, 세상의 끝 우체국과 판아메리칸 하이웨이의 종점 표지판이 여행자들의 필수 방문지입니다.",
    history: "1960년 국립공원으로 지정되었으며, 원래 이 땅의 주인이었던 야간(Yaghan) 원주민들이 수천 년간 해안가에서 불을 피워 생활했던 것이 '불의 땅(Tierra del Fuego)'이라는 이름의 유래입니다. 페르디난드 마젤란이 1520년 해협을 통과할 때 원주민들의 불빛을 보고 이렇게 명명했습니다.",
    visitInfo: {
      hours: "09:00~18:00 (겨울철 단축 운영)",
      admission: "외국인 약 ARS 15,000 (USD 약 15, 시즌에 따라 변동)",
      address: "Ruta Nacional 3 km 3079, Tierra del Fuego",
      website: "https://www.argentina.gob.ar/parquesnacionales/tierradelfuego",
    },
    highlights: [
      "세상의 끝 우체국(Estafeta del Fin del Mundo)에서 엽서 발송",
      "판아메리칸 하이웨이 종점(Ruta 3) 표지판",
      "라파타이아 만(Bahía Lapataia)의 해안 트레일",
      "남극 너도밤나무(레인가) 원시림 하이킹",
      "비버 댐과 이탄 습지의 독특한 생태계",
    ],
    nearbyAttractions: ["세상의 끝 기차", "비글 해협 보트 투어", "우수아이아 시내"],
    photoTips: "라파타이아 만의 판아메리칸 종점 표지판은 필수 인증샷 포인트입니다. 코스탈 트레일(Senda Costera)에서 비글 해협과 숲이 함께 담기는 구도가 매우 아름답습니다.",
    tips: [
      "세상의 끝 우체국에서 여권에 기념 스탬프를 찍고, 가족에게 엽서를 보내는 것이 전통입니다.",
      "공원 내 트레일은 난이도가 다양합니다. 센다 코스테라(Senda Costera, 6.5km)가 경치 대비 난이도 밸런스가 가장 좋습니다.",
      "비버 댐 지역은 외래종 비버가 만든 것으로 생태계 교란의 현장이기도 합니다.",
      "세상의 끝 기차를 타고 공원에 입장한 후 하이킹으로 둘러보는 코스를 추천합니다.",
      "날씨가 급변하므로 우비와 방풍 재킷을 반드시 챙기세요.",
    ],
  },
  "argentina/patagonia/ushuaia/beagle-channel": {
    heroGradient: "from-blue-500 to-slate-700",
    description: "찰스 다윈이 HMS 비글호를 타고 탐험한 역사적 해협. 우수아이아 남쪽으로 펼쳐진 비글 해협은 남미 대륙의 최남단 수로로, 보트 투어를 통해 마젤란 펭귄 서식지, 바다사자 바위, 세상의 끝 등대(Les Eclaireurs Lighthouse)를 방문할 수 있습니다. 설산과 바다가 만나는 파타고니아의 원시적 풍경이 압도적입니다.",
    history: "비글 해협은 찰스 다윈의 비글호 탐험(1831~1836)으로 유명해진 해협입니다. 이 항해에서 다윈은 이곳의 야간(Yaghan) 원주민들과 조우했으며, 갈라파고스와 함께 진화론의 토대가 된 관찰을 수행했습니다. 해협 이름은 탐험선 HMS 비글(Beagle)에서 유래했습니다.",
    visitInfo: {
      hours: "투어 출발: 09:30 / 15:00 (계절별 변동)",
      admission: "보트 투어 USD 50~100 (코스·시즌에 따라 변동)",
      address: "Puerto Turístico, Ushuaia, Tierra del Fuego",
    },
    highlights: [
      "Les Eclaireurs 등대 (일명 '세상의 끝 등대') 조망",
      "이슬라 데 로스 로보스(바다사자 서식지) 방문",
      "마르티요 섬의 마젤란 펭귄·젠투 펭귄 서식지",
      "설산과 빙하가 병풍처럼 둘러싼 해협 파노라마",
      "가마우지(코르모란) 군락지 관찰",
    ],
    nearbyAttractions: ["티에라 델 푸에고 국립공원", "세상의 끝 기차", "우수아이아 항구"],
    photoTips: "등대와 바다사자를 촬영할 때는 망원 렌즈(200mm 이상)가 유리합니다. 펭귄 섬에서는 하선이 가능한 투어를 선택하면 가까이에서 촬영할 수 있습니다. 오전 투어가 역광을 피하기 좋습니다.",
    tips: [
      "펭귄 서식지(마르티요 섬)에 상륙하는 투어와 보트에서만 관찰하는 투어가 있으니, 예약 시 확인하세요.",
      "비글 해협은 파도가 있을 수 있습니다. 멀미에 약한 분은 약을 준비하세요.",
      "투어 중 뜨거운 음료(커피·초콜릿)를 제공하는 업체를 선택하면 추위에 도움이 됩니다.",
      "펭귄 서식지는 10~3월이 가장 활발합니다. 겨울에는 펭귄이 떠나있을 수 있습니다.",
      "방수·방풍 재킷과 모자, 장갑은 필수입니다. 해협 위 바람은 매우 차갑습니다.",
    ],
  },
  // ===== MENDOZA =====
  "argentina/northwest/mendoza/ruta-del-vino": {
    heroGradient: "from-purple-500 to-rose-700",
    description: "아르헨티나 와인의 심장, 멘도사 루타 델 비노(와인 루트). 안데스 산맥의 만년설을 배경으로 끝없이 펼쳐진 포도밭 사이를 자전거나 차로 이동하며 세계적인 와이너리를 순회하는 투어입니다. 말벡(Malbec) 품종의 본고장으로, 시음·포도밭 산책·와인 제조 과정 견학까지 와인 애호가의 꿈이 실현되는 곳입니다.",
    visitInfo: {
      hours: "와이너리별 상이 (대부분 10:00~17:00, 일요일 휴무 다수)",
      admission: "무료~ARS 10,000 (와이너리별 시음 요금 상이)",
      address: "Maipú / Luján de Cuyo, Mendoza Province",
      website: "https://www.mendoza.travel",
    },
    highlights: [
      "안데스 산맥을 배경으로 한 포도밭 풍경",
      "세계적 말벡 와인 시음과 와이너리 셀러 투어",
      "자전거로 와이너리 간 이동하는 마이푸 코스",
      "올리브 오일·초콜릿 공장 방문 겸 투어",
      "와인 메이커와의 대화 및 블렌딩 체험",
    ],
    nearbyAttractions: ["멘도사 중심 광장", "아콩카과 주립공원", "안데스 산맥 국경 투어"],
    photoTips: "포도밭 사이 길에서 안데스 산맥을 배경으로 촬영하면 멘도사다운 구도가 완성됩니다. 수확 시즌(3~4월)에는 포도가 주렁주렁 매달린 포도밭 사진을 담을 수 있습니다.",
    tips: [
      "마이푸 지역은 자전거 투어가 인기입니다. 숙소나 자전거 대여점에서 당일 대여가 가능합니다.",
      "루한 데 쿠요 지역의 고급 와이너리(카테나 사파타, 아체이발 페레르 등)는 사전 예약이 필수입니다.",
      "와이너리 시음 후 자전거를 타야 하므로 음주량을 조절하세요. 뱉어내는 것도 예의에 어긋나지 않습니다.",
      "포도 수확 축제(벤디미아, 2~3월)에 맞춰 방문하면 축제 분위기를 함께 즐길 수 있습니다.",
      "점심식사를 와이너리 레스토랑에서 즐기세요. 와인과 음식의 페어링이 최고입니다.",
    ],
  },
};
