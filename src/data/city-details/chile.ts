import type { CityDetail, AttractionDetail } from "../city-details";

export const chileCityDetails: Record<string, CityDetail> = {
  // ===== SANTIAGO CENTRAL =====
  "chile/santiago-central/santiago": {
    heroGradient: "from-red-500 to-blue-800",
    description: "안데스 산맥이 배경으로 펼쳐지는 칠레의 수도, 산티아고. 현대적인 마천루와 식민지 시대 유적이 공존하며, 세계 최고 수준의 와인 산지와 태평양 해변, 스키장을 모두 당일치기로 즐길 수 있는 놀라운 접근성을 자랑합니다.",
    bestTime: "9~11월 (봄) / 3~5월 (가을, 포도 수확)",
    stayArea: "프로비덴시아 / 라스 콘데스 / 벨라비스타",
    transport: "지하철(메트로) 7개 노선, 버스(트랜산티아고), BIP 카드",
    districts: [
      { name: "벨라비스타", nameEn: "Bellavista", description: "시인 파블로 네루다의 집이 있는 예술·나이트라이프 지구. 보헤미안 바와 레스토랑이 밀집.", highlights: ["라 차스코나(네루다 하우스)", "벨라비스타 거리 벽화", "파티오 벨라비스타 쇼핑몰"] },
      { name: "산티아고 역사 중심", nameEn: "Santiago Historic Center", description: "아르마스 광장을 중심으로 식민지 시대 건물과 모던 건축이 공존하는 도심.", highlights: ["플라사 데 아르마스", "산티아고 대성당", "차 이 차 (라틴 아메리카 기억 박물관)"] },
      { name: "비타쿠라·라스 콘데스", nameEn: "Vitacura-Las Condes", description: "고급 쇼핑몰과 레스토랑, 갤러리가 모인 현대적 지구.", highlights: ["알론소 데 코르도바 쇼핑 거리", "무세오 데 라 모다", "파르케 아라우코"] },
    ],
    attractions: [
      { name: "산 크리스토발 언덕", nameEn: "Cerro San Cristóbal", description: "해발 880m에서 산티아고 시내와 맑은 날 안데스 산맥의 설봉들을 조망하는 산티아고 최고의 전망대. 케이블카나 도보로 오를 수 있습니다.", category: "자연", tip: "겨울(6~8월)에 안데스 산맥의 눈 덮인 봉우리들이 더욱 선명하게 보입니다." },
      { name: "라 차스코나 (네루다 하우스)", nameEn: "La Chascona", description: "노벨상 수상 시인 파블로 네루다가 설계한 미로 같은 집. 이상한 나라의 앨리스를 연상시키는 독특한 건축이 매력적입니다.", category: "박물관", tip: "영어 가이드 투어를 추천합니다. 네루다의 세 채 집 모두 박물관으로 운영됩니다." },
      { name: "프레 콜롬비노 박물관", nameEn: "Pre-Columbian Art Museum", description: "칠레 최고의 선콜럼비아 미술 컬렉션. 안데스 문명의 도자기·직물·황금 공예품이 가득.", category: "박물관" },
      { name: "메르카도 센트럴", nameEn: "Mercado Central", description: "산티아고 최대 수산 시장. 신선한 해산물 요리를 즐길 수 있는 활기찬 전통 시장.", category: "시장", tip: "중앙 레스토랑보다 주변 소규모 식당이 더 저렴합니다." },
    ],
    dayTrips: [
      { name: "발파라이소", nameEn: "Valparaiso", description: "유네스코 세계유산으로 지정된 항구 도시. 형형색색의 계단식 주택과 벽화가 가득합니다.", travelTime: "버스 약 1시간 30분", gradient: "from-purple-400 to-pink-600" },
      { name: "카사블랑카 밸리", nameEn: "Casablanca Valley", description: "칠레 최고의 소비뇽 블랑과 피노 누아 와인 산지. 와이너리 투어와 시음.", travelTime: "차로 약 1시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "세비체 칠레노", description: "페루식과 다른 칠레만의 세비체. 코리안더(고수)와 칠레 고추가 가미됩니다.", emoji: "🐟" },
      { name: "파스텔 데 초클로", description: "옥수수 퓌레로 덮은 소고기·닭고기 파이. 칠레 전통 가정식.", emoji: "🥧" },
      { name: "피스코 사워 (칠레판)", description: "칠레 피스코에 라임을 넣은 국민 칵테일. 페루 것과 비슷하지만 칠레인들은 별개라고 주장합니다.", emoji: "🍸" },
    ],
    tips: [
      "산티아고에서 안데스 스키장(발레 네바도, 라 파르바)까지 차로 1시간. 겨울(6~9월) 스키 여행 가능.",
      "지하철이 안전하고 효율적입니다. BIP 카드로 편하게 이용하세요.",
      "와인을 좋아한다면 산티아고 근교 마이포 밸리나 카사블랑카 밸리 투어를 추천합니다.",
      "체감 물가는 남미 다른 국가보다 높습니다. 예산을 넉넉히 준비하세요.",
    ],
  },
  "chile/santiago-central/valparaiso": {
    heroGradient: "from-purple-500 to-pink-700",
    description: "태평양을 바라보는 43개 언덕 위에 형형색색의 계단식 주택들이 펼쳐지는 유네스코 세계유산 항구 도시. '라틴 아메리카의 보석'으로 불리는 발파라이소는 파블로 네루다의 사랑을 받은 도시이자 칠레 최고의 벽화 예술의 성지입니다.",
    bestTime: "10~4월 (봄~가을, 날씨 좋음)",
    stayArea: "세로 알레그레 / 세로 콘셉시온",
    transport: "아센소르(케이블카식 계단 전차), 도보",
    districts: [
      { name: "세로 알레그레", nameEn: "Cerro Alegre", description: "발파라이소에서 가장 화려하고 관광화된 언덕 지구. 화려한 색의 건물과 아기자기한 카페가 가득.", highlights: ["파세오 디아즈 가나", "아센소르 엘 피노", "벽화 예술 거리"] },
      { name: "세로 콘셉시온", nameEn: "Cerro Concepción", description: "영국 이민자들의 흔적이 남아있는 빅토리아 시대풍 건물과 현지 예술가들의 갤러리.", highlights: ["파세오 아탁아마 전망대", "에클레시아스티코 광장", "영국 성당"] },
    ],
    attractions: [
      { name: "세로 알레그레 벽화 거리", nameEn: "Cerro Alegre Street Art", description: "골목마다 펼쳐지는 화려한 대형 벽화들. 세계적인 그래피티 아티스트들이 발파라이소를 도화지 삼아 작업한 야외 갤러리.", category: "예술", tip: "발파라이소 벽화 투어(스트리트 아트 워킹 투어)에 참가하면 각 작품의 이야기를 들을 수 있습니다." },
      { name: "아센소르 (언덕 전차)", nameEn: "Ascensors (Cable Cars)", description: "발파라이소의 상징, 19세기부터 운행 중인 케이블카식 언덕 전차. 현재 일부만 운행 중이며 탑승 자체가 역사 체험입니다.", category: "교통", tip: "아센소르 엘 피노, 부엔 파스토르 등이 현재 운행 중입니다." },
      { name: "라 세발로스 (네루다 하우스)", nameEn: "La Sebastiana", description: "파블로 네루다의 세 번째 집. 항구가 보이는 언덕 위에 자리하며 네루다의 수집품들이 가득합니다.", category: "박물관" },
    ],
    dayTrips: [
      { name: "비냐 델 마르", nameEn: "Vina del Mar", description: "발파라이소 옆 해변 휴양 도시. '꽃의 도시'로 불리며 고급 호텔과 카지노가 있습니다.", travelTime: "버스 20분", gradient: "from-sky-400 to-cyan-600" },
    ],
    localFood: [
      { name: "칼도 데 마리스코", description: "발파라이소 항구의 신선한 해산물로 만든 진한 해물 국물 요리.", emoji: "🦞" },
      { name: "촐가 (홍합)", description: "칠레 바다의 거대한 홍합 요리. 화이트 와인 소스나 그라탱으로 즐깁니다.", emoji: "🦪" },
    ],
    tips: [
      "발파라이소는 치안이 상대적으로 낮습니다. 언덕 지구는 낮에만, 그룹으로 다니세요.",
      "아센소르를 타면 200~500 칠레 페소 정도의 소액을 냅니다.",
      "카르나발 문화 가득한 2월의 발파라이소 새해 불꽃놀이는 남미 최대 규모 중 하나입니다.",
      "세로 알레그레와 세로 콘셉시온 사이를 연결하는 파세오 거리를 산책하세요.",
    ],
  },

  // ===== PATAGONIA =====
  "chile/patagonia/torres-del-paine": {
    heroGradient: "from-blue-400 to-slate-700",
    description: "세계 트레킹의 성지, 토레스 델 파이네 국립공원. 화강암 탑(토레), 빙하, 에메랄드 빛 호수, 파타고니아 바람이 만들어내는 극적인 경관은 세계 트레커들의 꿈의 목적지입니다. W 트레킹과 O 트레킹(서킷)으로 유명합니다.",
    bestTime: "10~4월 (파타고니아 여름 시즌)",
    stayArea: "국립공원 내 캠프·산장 / 푸에르토 나탈레스",
    transport: "렌터카, 버스 투어, 하이킹",
    districts: [
      { name: "토레스 전망대", nameEn: "Torres Viewpoint", description: "세 개의 화강암 탑(토레스)이 반영되는 에메랄드 호수가 있는 공원의 하이라이트.", highlights: ["토레스 델 파이네 3봉", "밀로돈 동굴", "미라도르 라스 토레스"] },
    ],
    attractions: [
      { name: "토레스 델 파이네 (세 탑)", nameEn: "Torres del Paine Towers", description: "해발 2,500m의 세 개 화강암 탑. 왕복 8~10시간의 트레킹을 마치고 만나는 빙하 호수와 탑의 조합은 평생 기억에 남습니다.", category: "트레킹", tip: "일출(5~6시)에 탑이 황금빛으로 물드는 장면을 보려면 새벽 2시에 출발해야 합니다." },
      { name: "그레이 빙하", nameEn: "Grey Glacier", description: "그레이 호수와 접한 거대한 빙하. 카약이나 보트로 빙하 근처까지 접근하거나 W 트레킹으로 전망대까지 걸어갑니다.", category: "자연", tip: "그레이 빙하 카약 투어는 가이드 동반이 필수입니다." },
      { name: "프란세스 계곡", nameEn: "Valle del Frances", description: "W 트레킹 중간 구간. 세 면이 벽으로 둘러싸인 원형 분지에서 빙하와 폭포를 동시에 감상합니다.", category: "트레킹" },
    ],
    dayTrips: [
      { name: "페리토 모레노 빙하 (아르헨티나)", nameEn: "Perito Moreno Glacier", description: "국경을 넘어 엘 칼라파테에서 세계 3대 빙하를 방문합니다.", travelTime: "버스 약 4~5시간", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "파타고니아 양고기 아사도", description: "파타고니아 드넓은 목장의 신선한 양고기를 장작불에 통으로 구운 아사도.", emoji: "🐑" },
      { name: "칼라파테 베리 잼", description: "파타고니아 자생 식물 칼라파테 열매로 만든 달콤한 잼.", emoji: "🍓" },
    ],
    tips: [
      "공원 입장은 사전 온라인 예약이 필요합니다. www.parquetorresdelpaine.cl에서 예약하세요.",
      "파타고니아 날씨는 변덕스럽습니다. 방풍·방수 재킷, 레이어링이 필수입니다.",
      "캠핑 사이트와 산장(레푸지오)은 최소 6개월~1년 전에 예약이 필요합니다.",
      "W 트레킹은 4~5일, 전체 서킷(O)은 8~10일이 소요됩니다.",
    ],
  },

  // ===== ATACAMA =====
  "chile/atacama/san-pedro-de-atacama": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "세계에서 가장 건조한 사막, 아타카마의 심장. 해발 2,400m에 자리한 이 작은 오아시스 마을에서 달의 계곡, 타티오 간헐천, 아타카마 소금 사막, 세계 최고의 별하늘을 경험할 수 있습니다. 지구상에서 화성과 가장 비슷한 풍경으로 유명합니다.",
    bestTime: "3~11월 (건기) / 12~2월은 우기로 간헐천 등 일부 제한",
    stayArea: "산 페드로 데 아타카마 시내",
    transport: "투어 버스, 렌터카, 자전거",
    districts: [
      { name: "아타카마 사막 지구", nameEn: "Atacama Desert Area", description: "달의 계곡, 간헐천, 소금 사막 등 극적인 풍경이 펼쳐지는 지구.", highlights: ["달의 계곡", "타티오 간헐천", "아타카마 소금 사막"] },
    ],
    attractions: [
      { name: "달의 계곡 (발레 데 라 루나)", nameEn: "Valle de la Luna (Moon Valley)", description: "화성이나 달 표면을 연상시키는 기괴한 소금·모래·점토 지형. 일몰 시간에 주황·빨강·보라로 물드는 색의 향연이 압도적입니다.", category: "자연", tip: "일몰 1시간 전에 도착해 좋은 자리를 잡으세요. 일몰 후 칠레 삼각기 모양 사구에서 별을 감상하세요." },
      { name: "타티오 간헐천", nameEn: "El Tatio Geysers", description: "해발 4,320m에 있는 세계에서 가장 높은 간헐천 지대. 새벽 6~7시에 최대 70개의 간헐천이 동시에 분출합니다.", category: "자연", tip: "투어는 새벽 4시에 출발합니다. 기온이 영하이므로 따뜻한 옷이 필수입니다." },
      { name: "아타카마 소금 사막 (살라르 데 아타카마)", nameEn: "Salar de Atacama", description: "칠레 최대의 소금 사막으로 안데스 화산들의 반영이 아름다운 호수. 홍학 무리를 가까이 볼 수 있습니다.", category: "자연" },
      { name: "아타카마 천문 투어", nameEn: "Atacama Stargazing", description: "세계에서 가장 맑은 하늘 중 하나인 아타카마에서 즐기는 천문 투어. 망원경으로 은하수와 별자리를 생생하게 관찰합니다.", category: "체험" },
    ],
    dayTrips: [
      { name: "볼리비아 국경 투어", nameEn: "Bolivian Altiplano Tour", description: "국경을 넘어 볼리비아의 형형색색 알티플라노 호수와 에두아르도 아바로아 공원을 방문합니다.", travelTime: "1박2일~3박4일", gradient: "from-red-400 to-orange-600" },
    ],
    localFood: [
      { name: "퀴노아 알무에르소", description: "아타카마 지역 전통 점심. 퀴노아와 안데스 야채가 들어간 건강한 식사.", emoji: "🥗" },
      { name: "코카 티", description: "고산증 예방에 좋다는 코카 잎으로 끓인 안데스 전통 차.", emoji: "🍵" },
    ],
    tips: [
      "모든 어트랙션은 투어를 통해 방문하는 것이 편리합니다. 여러 투어 회사들이 시내에 있습니다.",
      "자외선이 매우 강합니다. SPF 50+ 선크림과 선글라스·모자는 필수입니다.",
      "달의 계곡 일몰 투어, 타티오 새벽 투어, 야간 천문 투어를 각각 하루씩 배정하세요.",
      "아타카마의 고도(2,400m)와 강한 자외선에 주의하고 물을 충분히 마시세요.",
    ],
  },
};

export const chileAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ATACAMA =====
  "chile/atacama/san-pedro-de-atacama/moon-valley": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "수백만 년의 침식과 화산 활동으로 형성된 초현실적인 소금·모래·점토 지형. 달 표면처럼 기괴한 풍경으로 '달의 계곡'이라는 이름이 붙었습니다. 일몰 시 주황·빨강·보라·핑크로 물드는 색의 향연은 아타카마 여행의 하이라이트입니다.",
    visitInfo: {
      hours: "08:00~22:00 (일몰 투어 가장 인기)",
      admission: "입장료 약 CLP 3,000 (투어 포함 시 별도)",
      address: "Valle de la Luna, San Pedro de Atacama, Antofagasta",
    },
    highlights: [
      "달 표면 같은 소금·점토·모래 지형",
      "일몰 시 황금빛·주황빛으로 물드는 극적인 색 변화",
      "소금 동굴 (쿠에바 데 살)",
      "칠레 삼각기 모양의 거대한 사구",
      "밤하늘 별 관측 (투어 후)",
    ],
    nearbyAttractions: ["죽음의 계곡 (발레 데 라 무에르테)", "아타카마 소금 사막", "산 페드로 데 아타카마 오아시스"],
    photoTips: "일몰 1시간 전부터 빛이 변하기 시작합니다. 광각 렌즈로 거대한 지형과 하늘을 함께 담으세요. 사구 정상에서 사막 전체를 파노라마로 촬영하면 인상적입니다.",
    tips: [
      "일몰 시간에 맞춰 투어가 운영됩니다. 1~2시간 전에 도착해야 좋은 자리를 잡을 수 있습니다.",
      "바람이 강하고 모래가 날립니다. 카메라와 렌즈를 보호할 방진 장비를 준비하세요.",
      "소금 결정 위를 걷는 트레일이 있습니다. 발목을 보호하는 트레킹화를 신으세요.",
      "방문 후 야간 천문 투어(stargazing tour)와 연계하면 완벽한 하루가 됩니다.",
    ],
  },
  "chile/atacama/san-pedro-de-atacama/el-tatio-geysers": {
    heroGradient: "from-gray-500 to-blue-800",
    description: "해발 4,320m에 위치한 세계에서 가장 높은 간헐천 지대. 80개 이상의 간헐천과 열수구가 있으며 새벽 6~7시에 기온과 열의 차이로 증기가 최대로 분출합니다. 화성을 연상시키는 풍경 속에서 펄펄 끓는 열수와 냉동 같은 공기를 동시에 경험합니다.",
    visitInfo: {
      hours: "연중 운영 (투어 새벽 4~4:30 출발)",
      admission: "입장료 포함 투어 약 CLP 30,000~50,000",
      address: "El Tatio, San Pedro de Atacama, Antofagasta Region",
    },
    highlights: [
      "새벽 80개 이상의 간헐천 동시 분출",
      "끓는 열수 웅덩이와 증기 기둥",
      "해발 4,320m의 안데스 화산 배경",
      "안데스 화산과 눈 덮인 봉우리들의 파노라마",
      "인근 천연 온천에서의 수영 (일부 투어 포함)",
    ],
    nearbyAttractions: ["타티오 온천", "마추카 마을", "아타카마 소금 사막"],
    photoTips: "새벽 6시의 간헐천 분출 시 증기와 빛이 만들어내는 장면이 압권입니다. 배경에 안데스 화산을 넣으면 더욱 인상적입니다. 역광을 활용해 증기를 실루엣으로 촬영하세요.",
    tips: [
      "새벽 4시에 출발하므로 전날 일찍 잠자리에 드세요.",
      "기온이 영하 10도~영하 20도까지 내려갑니다. 두꺼운 패딩과 장갑, 모자를 준비하세요.",
      "해발 4,320m이므로 고산증에 취약한 분은 사전에 의사와 상담하세요.",
      "투어에 포함된 경우 인근 자연 온천에서 수영이 가능합니다. 수영복을 챙기세요.",
    ],
  },
  "chile/patagonia/torres-del-paine/w-trekking": {
    heroGradient: "from-blue-400 to-slate-700",
    description: "세계 10대 트레킹 루트 중 하나인 토레스 델 파이네의 W 트레킹. 토레스 탑, 프란세스 계곡, 그레이 빙하 세 구간을 W자 모양으로 연결하는 4~5일 일정입니다. 매일 달라지는 파타고니아의 극적인 자연 경관이 펼쳐집니다.",
    visitInfo: {
      hours: "트레킹 루트는 일출~일몰",
      admission: "공원 입장료 외국인 CLP 21,000 (성수기 CLP 35,000)",
      address: "Torres del Paine National Park, Magallanes Region",
      website: "https://www.parquetorresdelpaine.cl",
    },
    highlights: [
      "미라도르 라스 토레스 - 세 화강암 탑 반영 호수",
      "프란세스 계곡 - 빙하·폭포·산 전망 원형 분지",
      "그레이 빙하 전망대 - 파란 빙하 절벽과 빙산",
      "파타고니아 고유 동식물 (과나코, 콘도르, 네안데르탈 여우)",
      "황금빛 파타고니아 풀밭과 에메랄드 호수",
    ],
    nearbyAttractions: ["그레이 빙하 카약", "페오에 호수", "페루아르다 호텔"],
    photoTips: "토레스 탑은 새벽 일출에 황금빛으로 물듭니다. 밤새 트레킹해서 일출을 맞이하는 것이 최고의 사진 기회입니다. 드론은 국립공원 내 금지됩니다.",
    tips: [
      "캠핑 사이트와 산장(레푸지오)은 반드시 사전 예약이 필요합니다. 성수기는 1년 전 예약도 필요합니다.",
      "파타고니아 바람은 예측 불가입니다. 방풍·방수 3겹 레이어링이 생존 필수 장비입니다.",
      "쓰레기는 모두 배낭에 넣어 나오세요. 자연 보호가 최우선입니다.",
      "토레스 탑 일출을 보려면 새벽 2~3시에 베이스 캠프를 출발해야 합니다.",
    ],
  },
};
