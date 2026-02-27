import type { CityDetail, AttractionDetail } from "../city-details";

export const finlandCityDetails: Record<string, CityDetail> = {
  // ===== HELSINKI-SOUTH =====
  "finland/helsinki-south/helsinki": {
    heroGradient: "from-blue-500 to-indigo-800",
    description:
      "발트해에 면한 핀란드의 수도. 알바 알토의 모더니즘 건축, 디자인 디스트릭트, 수오멘린나 해상 요새 등 북유럽 디자인과 자연이 조화를 이루는 도시입니다. 사우나 문화의 본고장답게 곳곳에 공공 사우나가 있습니다.",
    bestTime: "5~9월 (6월 백야, 여름 축제 다수)",
    stayArea: "중앙역 주변 / 디자인 디스트릭트 / 칼리오",
    transport: "트램, 메트로, 버스, 페리 (헬싱키 카드 추천)",
    districts: [
      {
        name: "중앙 시가지",
        nameEn: "City Centre",
        description:
          "헬싱키 대성당, 원로원 광장, 에스플라나디 공원이 위치한 도심 핵심 지구. 관광과 쇼핑의 중심.",
        highlights: [
          "헬싱키 대성당",
          "원로원 광장",
          "에스플라나디 공원",
          "스톡만 백화점",
        ],
      },
      {
        name: "디자인 디스트릭트",
        nameEn: "Design District",
        description:
          "200개 이상의 디자인 숍, 갤러리, 카페가 밀집한 창의적 지구. 마리메꼬, 이딸라 등 핀란드 디자인의 심장.",
        highlights: [
          "디자인 박물관",
          "마리메꼬 매장",
          "이딸라 & 아라비아 매장",
          "부티크 갤러리",
        ],
      },
      {
        name: "칼리오",
        nameEn: "Kallio",
        description:
          "로컬 카페와 바, 빈티지 숍이 모여 있는 헬싱키의 힙스터 지구. 현지인들의 일상을 느낄 수 있는 곳.",
        highlights: [
          "칼리오 교회",
          "헤르네사리 해변",
          "현지 카페 거리",
          "벼룩시장",
        ],
      },
    ],
    attractions: [
      {
        name: "수오멘린나",
        nameEn: "Suomenlinna",
        description:
          "유네스코 세계유산으로 지정된 바다 위의 해상 요새. 6개 섬에 걸쳐 18세기 군사 건축물, 박물관, 카페, 산책로가 펼쳐져 있어 헬싱키 최고의 당일치기 명소입니다.",
        category: "요새",
        tip: "마켓 광장에서 페리로 15분. 겨울에는 바다가 얼면 걸어서 갈 수도 있습니다.",
      },
      {
        name: "헬싱키 대성당",
        nameEn: "Helsinki Cathedral",
        description:
          "원로원 광장 위에 우뚝 솟은 신고전주의 양식의 백색 대성당. 헬싱키의 가장 상징적인 랜드마크로 계단에 앉아 광장을 내려다보는 것이 인기입니다.",
        category: "성당",
        tip: "계단에 앉아 원로원 광장을 내려다보며 휴식하는 것이 현지인 스타일입니다.",
      },
      {
        name: "템펠리아우키오 교회",
        nameEn: "Temppeliaukio Church",
        description:
          "거대한 바위를 파내어 만든 '암석 교회'. 원형 천장 사이로 자연광이 들어오며 뛰어난 음향으로 콘서트 홀로도 사용됩니다.",
        category: "교회",
        tip: "콘서트 일정을 확인하면 교회 음향을 제대로 경험할 수 있습니다.",
      },
      {
        name: "올드 마켓 홀",
        nameEn: "Old Market Hall",
        description:
          "1889년에 문을 연 헬싱키에서 가장 오래된 실내 시장. 로컬 식재료, 핀란드 전통 음식, 카페를 즐길 수 있습니다.",
        category: "시장",
      },
      {
        name: "오디 도서관",
        nameEn: "Oodi Library",
        description:
          "2018년 개관한 헬싱키 중앙 도서관. 핀란드의 혁신적 공공 서비스를 상징하는 건축물로 3D 프린터, 녹음실 등을 무료 이용 가능합니다.",
        category: "건축",
      },
    ],
    dayTrips: [
      {
        name: "포르보",
        nameEn: "Porvoo",
        description:
          "핀란드에서 두 번째로 오래된 도시. 붉은색 강변 창고와 중세 목조 구시가지가 매력적.",
        travelTime: "버스 약 1시간",
        gradient: "from-red-400 to-rose-700",
      },
      {
        name: "누크시오 국립공원",
        nameEn: "Nuuksio National Park",
        description:
          "헬싱키 근교의 핀란드 자연을 만끽할 수 있는 국립공원. 하이킹, 호수 수영, 베리 따기 체험.",
        travelTime: "버스+도보 약 1시간",
        gradient: "from-green-500 to-emerald-800",
      },
    ],
    localFood: [
      {
        name: "카렐리안 파이",
        description:
          "호밀 반죽 위에 쌀 포리지를 채운 핀란드 전통 파이. 에그버터(무나보이)를 올려 먹습니다.",
        emoji: "🥧",
      },
      {
        name: "연어 수프 (로히케이토)",
        description:
          "신선한 연어와 감자, 딜을 넣고 크림으로 끓인 핀란드식 수프. 호밀빵과 함께.",
        emoji: "🍲",
      },
      {
        name: "살미아키",
        description:
          "핀란드인이 사랑하는 짠맛 감초 캔디. 호불호가 강하지만 핀란드 여행의 필수 체험 간식.",
        emoji: "🍬",
      },
    ],
    tips: [
      "헬싱키 카드를 구매하면 대중교통 무제한 + 주요 관광지 무료 입장이 포함됩니다.",
      "사우나는 핀란드 문화의 핵심이므로 공공 사우나(뢰위리, 알라스) 체험을 추천합니다.",
      "현금 없이 카드만으로 거의 모든 곳에서 결제 가능합니다 (EUR).",
      "여름에는 밤 11시까지 해가 지지 않아 관광 시간이 넉넉합니다.",
    ],
  },

  // ===== LAKELAND =====
  "finland/lakeland/tampere": {
    heroGradient: "from-cyan-500 to-blue-800",
    description:
      "두 호수 사이에 위치한 핀란드 제3의 도시이자 '사우나의 수도'. 옛 산업 도시의 붉은 벽돌 공장이 문화 공간으로 재탄생했으며, 핀란드에서 가장 많은 사우나를 보유한 도시입니다.",
    bestTime: "6~8월 (여름 호수 액티비티, 탐메르 축제)",
    stayArea: "중앙 광장 / 피니키 지구",
    transport: "헬싱키에서 기차 약 1시간 40분, 시내는 버스 및 도보",
    districts: [
      {
        name: "피니키",
        nameEn: "Finlayson Area",
        description:
          "옛 핀레이슨 면방직 공장 단지를 재개발한 문화·상업 지구. 극장, 영화관, 레스토랑이 입점.",
        highlights: [
          "핀레이슨 아트 에리어",
          "바프리키 뮤지엄 센터",
          "탐페레 극장",
        ],
      },
      {
        name: "피스팔라",
        nameEn: "Pispala",
        description:
          "두 호수 사이 언덕 위의 컬러풀한 목조 주택 지구. 보헤미안 분위기와 탁 트인 호수 전망이 매력.",
        highlights: [
          "피스팔라 전망대",
          "라야포르티 사우나",
          "목조 주택 거리",
        ],
      },
    ],
    attractions: [
      {
        name: "사우나카피텔리",
        nameEn: "Saunakapiteli",
        description:
          "핀란드 사우나 문화의 정수를 경험할 수 있는 탐페레의 공공 사우나. 전통 연기 사우나부터 현대식 시설까지 다양한 사우나를 체험하고 호수에 뛰어들 수 있습니다.",
        category: "사우나",
        tip: "수건과 수영복을 준비하세요. 사우나 후 호수 수영은 핀란드 전통입니다.",
      },
      {
        name: "바프리키 뮤지엄 센터",
        nameEn: "Vapriikki Museum Centre",
        description:
          "옛 산업 건물을 활용한 복합 박물관. 자연사, 아이스하키, 미디어 등 다양한 테마 전시를 한 곳에서 만날 수 있습니다.",
        category: "박물관",
      },
      {
        name: "무민 박물관",
        nameEn: "Moomin Museum",
        description:
          "토베 얀손의 무민 원화와 3D 디오라마를 전시한 세계 유일의 무민 전문 박물관. 탐페레 홀 지하에 위치.",
        category: "박물관",
        tip: "무민 팬이라면 뮤지엄 숍에서 한정판 무민 굿즈를 꼭 챙기세요.",
      },
      {
        name: "네시네울라 전망탑",
        nameEn: "Nasinneula Tower",
        description:
          "높이 168m의 핀란드에서 가장 높은 전망탑. 회전 레스토랑에서 식사하며 두 호수의 파노라마를 감상할 수 있습니다.",
        category: "전망대",
      },
    ],
    dayTrips: [
      {
        name: "헬싱키",
        nameEn: "Helsinki",
        description:
          "핀란드의 수도. 수오멘린나 요새, 디자인 디스트릭트, 공공 사우나 등 볼거리 풍부.",
        travelTime: "기차 약 1시간 40분",
        gradient: "from-blue-500 to-indigo-800",
      },
    ],
    localFood: [
      {
        name: "무스타마카라",
        description:
          "탐페레 명물 검은 소시지. 링곤베리 잼과 함께 먹는 독특한 향토 음식.",
        emoji: "🌭",
      },
      {
        name: "피라카",
        description:
          "감자 또는 쌀을 채운 호밀 반죽 파이. 핀란드 어디서나 즐길 수 있는 간식.",
        emoji: "🥟",
      },
      {
        name: "코르바푸스티",
        description:
          "시나몬 향이 풍부한 핀란드식 시나몬 롤. 커피와 함께하는 핀란드 카페 문화의 핵심.",
        emoji: "🍥",
      },
    ],
    tips: [
      "탐페레는 '사우나의 수도'로 불리며 라자포르티, 라우하니에미 등 공공 사우나가 많습니다.",
      "헬싱키에서 기차로 1시간 40분이면 당일치기도 가능하지만 1박 추천.",
      "두 호수(네시예르비, 피해예르비) 사이 다리 위 전망이 아름답습니다.",
      "탐페레 시장 홀에서 무스타마카라(검은 소시지)를 꼭 맛보세요.",
    ],
  },

  // ===== LAPLAND =====
  "finland/lapland/rovaniemi": {
    heroGradient: "from-indigo-600 to-purple-900",
    description:
      "북극권 위에 위치한 산타클로스의 공식 고향. 산타클로스 빌리지에서 산타를 만나고, 겨울에는 오로라와 허스키 사파리를 즐기며, 여름에는 백야의 미드나이트 선을 경험할 수 있는 라플란드의 관문 도시입니다.",
    bestTime: "12~3월 (오로라, 겨울 액티비티) / 6~8월 (백야, 하이킹)",
    stayArea: "시내 중심부 / 산타클로스 빌리지 근처",
    transport: "헬싱키에서 비행기 약 1시간 20분 또는 야간 기차, 시내는 버스",
    districts: [
      {
        name: "시내 중심부",
        nameEn: "City Centre",
        description:
          "아르크티쿰 과학 센터, 로르디 광장, 레스토랑이 모여 있는 도심 핵심 지역.",
        highlights: [
          "아르크티쿰",
          "로르디 광장",
          "야트칸퀸틸래 다리",
          "필케 과학 센터",
        ],
      },
      {
        name: "산타클로스 빌리지",
        nameEn: "Santa Claus Village",
        description:
          "북극선 위에 자리한 산타클로스의 공식 고향. 산타의 사무실, 북극권 표시선, 기념품 숍이 위치.",
        highlights: [
          "산타클로스 사무실",
          "북극권 표시선",
          "산타클로스 우체국",
          "스노우맨 월드",
        ],
      },
    ],
    attractions: [
      {
        name: "산타클로스 빌리지",
        nameEn: "Santa Claus Village",
        description:
          "북극선 위에 위치한 산타클로스의 공식 거주지. 연중 산타를 만나고 사진을 찍을 수 있으며, 북극권 횡단 증명서를 발급받을 수 있습니다.",
        category: "테마파크",
        tip: "산타클로스 우체국에서 특별 소인이 찍힌 편지를 보낼 수 있습니다.",
      },
      {
        name: "북극권",
        nameEn: "Arctic Circle",
        description:
          "북위 66도 33분에 위치한 북극권 표시선. 산타클로스 빌리지 바닥에 표시된 선을 넘으며 '북극권 진입' 기념사진을 촬영할 수 있습니다.",
        category: "랜드마크",
        tip: "북극권 횡단 증명서(유료)를 기념으로 구매할 수 있습니다.",
      },
      {
        name: "아르크티쿰",
        nameEn: "Arktikum",
        description:
          "북극 지역의 자연, 문화, 역사를 전시하는 과학 박물관. 유리 터널 건축이 인상적이며 오로라 시뮬레이션을 체험할 수 있습니다.",
        category: "박물관",
        tip: "오로라를 못 볼 경우 대비하여 실내 오로라 시뮬레이션을 경험하세요.",
      },
      {
        name: "허스키 & 순록 사파리",
        nameEn: "Husky & Reindeer Safari",
        description:
          "허스키 썰매와 순록 썰매를 타고 라플란드 설원을 달리는 겨울 체험. 여러 사파리 업체에서 운영합니다.",
        category: "액티비티",
        tip: "사전 예약 필수이며, 방한복은 업체에서 제공합니다.",
      },
    ],
    dayTrips: [
      {
        name: "레비",
        nameEn: "Levi",
        description:
          "핀란드 최대 스키 리조트이자 오로라 관측 명소. 유리 이글루 숙소가 유명.",
        travelTime: "버스 약 2시간 30분",
        gradient: "from-sky-400 to-blue-800",
      },
      {
        name: "라누아 동물원",
        nameEn: "Ranua Zoo",
        description:
          "북극 동물들을 자연 서식지와 유사한 환경에서 만날 수 있는 야외 동물원. 북극곰이 대표.",
        travelTime: "버스 약 1시간",
        gradient: "from-white to-sky-300",
      },
    ],
    localFood: [
      {
        name: "포로 요리 (순록 스튜)",
        description:
          "라플란드 전통 순록 고기 스튜. 감자 퓌레와 링곤베리 잼을 곁들여 먹습니다.",
        emoji: "🦌",
      },
      {
        name: "칼라쿠코",
        description:
          "생선(보통 벤덱스)과 돼지비계를 호밀빵 반죽으로 감싸 구운 핀란드 전통 파이.",
        emoji: "🐟",
      },
      {
        name: "라카 베리 리큐르",
        description:
          "북극 지방에서만 자라는 클라우드베리(라카)로 만든 달콤한 리큐르.",
        emoji: "🍹",
      },
    ],
    tips: [
      "오로라를 보려면 9~3월 사이, 특히 맑은 밤 21시~새벽 2시가 최적입니다.",
      "겨울 방문 시 기온이 -30도까지 내려가므로 방한 장비를 철저히 준비하세요.",
      "산타클로스 빌리지는 연중 개방이지만 겨울 시즌이 가장 분위기 있습니다.",
      "헬싱키에서 야간 기차(산타클로스 익스프레스)를 타면 이동과 숙박을 동시에 해결합니다.",
    ],
  },
};

export const finlandAttractionDetails: Record<string, AttractionDetail> = {
  // ===== HELSINKI ATTRACTIONS =====
  "finland/helsinki-south/helsinki/suomenlinna": {
    heroGradient: "from-stone-500 to-slate-800",
    description:
      "6개 섬에 걸쳐 조성된 유네스코 세계유산 해상 요새. 18세기 스웨덴 통치 시절 러시아 방어를 위해 건설되었으며, 현재는 박물관, 카페, 산책로가 어우러진 헬싱키 최고의 당일치기 명소입니다.",
    history:
      "1748년 스웨덴 왕국이 러시아 방어를 위해 건설을 시작했으며, 건축 감독 아우구스틴 에렌스베르드의 이름을 따 '스베아보리(Sveaborg)'로 불렸습니다. 1809년 핀란드가 러시아 지배하에 들어간 뒤 러시아 수비대가 주둔했으며, 1918년 핀란드 독립 후 '수오멘린나(핀란드의 요새)'로 개명되었습니다.",
    visitInfo: {
      hours: "섬 자체는 상시 개방, 박물관 10:00~18:00 (시즌별 상이)",
      admission: "섬 입장 무료, 개별 박물관 유료 (수오멘린나 박물관 성인 8 EUR)",
      address: "Suomenlinna, 00190 Helsinki (마켓 광장에서 페리 15분)",
      website: "https://www.suomenlinna.fi",
    },
    highlights: [
      "킹스 게이트 - 섬 입구의 상징적인 석조 문",
      "요새 성벽 위 파노라마 산책로",
      "수오멘린나 교회 - 등대 역할도 하는 독특한 교회",
      "건선거(드라이 도크) - 세계에서 가장 오래된 건선거 중 하나",
    ],
    nearbyAttractions: [
      "마켓 광장 (페리 15분)",
      "우스펜스키 대성당 (페리+도보 20분)",
      "디자인 디스트릭트 (페리+도보 25분)",
    ],
    photoTips:
      "킹스 게이트에서 바다를 배경으로 촬영하는 것이 정석. 요새 성벽 위에서 바다와 섬 풍경을 담는 파노라마 앵글도 추천합니다.",
    tips: [
      "HSL 대중교통 티켓 또는 헬싱키 카드로 페리 이용이 가능합니다.",
      "섬에서 최소 2~3시간은 잡아야 주요 명소를 둘러볼 수 있습니다.",
      "카페와 레스토랑이 있으나 여름 성수기에 붐비므로 도시락을 준비해도 좋습니다.",
      "겨울에는 바다가 얼면 도보로 건너갈 수도 있지만 안전 확인이 필수입니다.",
    ],
  },
  "finland/helsinki-south/helsinki/helsinki-cathedral": {
    heroGradient: "from-white to-sky-400",
    description:
      "1852년 완공된 헬싱키의 가장 상징적인 랜드마크. 칼 루드비그 엥겔이 설계한 신고전주의 양식의 순백 대성당은 원로원 광장 위에 우뚝 서 있으며, 초록색 돔과 사도 동상이 인상적입니다.",
    history:
      "1830년 핀란드 건축가 칼 루드비그 엥겔의 설계로 착공하여 1852년에 완공되었습니다. 원래 '니콜라이 교회'로 불렸으나 핀란드 독립 후 현재 이름으로 변경되었습니다. 루터교 대성당으로 매년 50만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "09:00~18:00 (6~8월 ~24:00), 예배 시간 관광 제한",
      admission: "무료",
      address: "Unioninkatu 29, 00170 Helsinki",
      website: "https://www.helsingintuomiokirkko.fi",
    },
    highlights: [
      "원로원 광장에서 올려다보는 순백 성당의 웅장한 모습",
      "초록색 중앙 돔과 4개의 작은 돔",
      "지붕 위 12사도 아연 동상",
      "간결하고 엄숙한 루터교 내부 인테리어",
    ],
    nearbyAttractions: [
      "원로원 광장 (바로 앞)",
      "우스펜스키 대성당 (도보 10분)",
      "에스플라나디 공원 (도보 5분)",
    ],
    photoTips:
      "원로원 광장 아래에서 계단 전체와 성당을 올려다보는 구도가 가장 클래식합니다. 야간 조명도 아름답습니다.",
    tips: [
      "입장 무료이며 내부는 루터교답게 간결한 인테리어입니다.",
      "계단에 앉아 광장을 내려다보며 휴식하는 것이 현지인 스타일입니다.",
      "여름에는 밤 12시까지 개방되어 백야에 방문하기 좋습니다.",
    ],
  },
  "finland/helsinki-south/helsinki/temppeliaukio-church": {
    heroGradient: "from-amber-500 to-stone-700",
    description:
      "거대한 화강암 바위를 파내어 만든 독특한 '암석 교회'. 티모 & 투오모 수오말라이넨 형제가 설계하여 1969년 완공했으며, 구리 코일로 감싼 원형 천장 사이로 들어오는 자연광과 뛰어난 음향이 특징입니다.",
    history:
      "1930년대부터 교회 건립이 논의되었으나 전쟁 등으로 지연되었습니다. 1961년 수오말라이넨 형제의 설계가 당선되어 1968~1969년에 걸쳐 완공되었습니다. 바위를 폭파하여 공간을 만든 독창적 설계로 헬싱키의 대표 건축물이 되었습니다.",
    visitInfo: {
      hours: "월~토 10:00~17:00, 일 12:00~17:00 (시즌·행사에 따라 변동)",
      admission: "성인 4 EUR",
      address: "Lutherinkatu 3, 00100 Helsinki",
      website: "https://www.temppeliaukionkirkko.fi",
    },
    highlights: [
      "화강암 벽면의 자연 그대로의 질감과 색감",
      "구리 코일 천장 사이로 들어오는 자연광 연출",
      "콘서트 홀로도 사용되는 뛰어난 자연 음향",
      "바위와 현대 건축이 조화된 독창적 디자인",
    ],
    nearbyAttractions: [
      "캄피 예배당 (도보 10분)",
      "국립 박물관 (도보 8분)",
      "에스플라나디 공원 (도보 15분)",
    ],
    photoTips:
      "내부에서 천장을 올려다보며 촬영하면 구리 코일과 자연광의 조화를 담을 수 있습니다. 외부는 별다른 건물이 보이지 않아 입구 표지판과 바위면을 함께 촬영하세요.",
    tips: [
      "행사나 예배로 갑작스럽게 닫히는 경우가 있으니 방문 전 일정을 확인하세요.",
      "콘서트 일정이 있으면 암석 교회의 음향을 제대로 경험할 수 있습니다.",
      "관광객이 많으므로 오전 개장 직후 방문을 추천합니다.",
      "교회 위쪽 바위 언덕에서 주변 풍경을 감상할 수 있습니다.",
    ],
  },

  // ===== ROVANIEMI ATTRACTIONS =====
  "finland/lapland/rovaniemi/santa-claus-village": {
    heroGradient: "from-red-500 to-green-700",
    description:
      "북극선 위에 위치한 산타클로스의 공식 고향. 연중 산타를 만나고, 산타클로스 우체국에서 전 세계로 편지를 보내고, 북극권 횡단 증명서를 받을 수 있는 세계에서 가장 유명한 크리스마스 테마 명소입니다.",
    history:
      "1985년 핀란드 정부가 로바니에미를 산타클로스의 공식 고향으로 선언하고 산타클로스 빌리지를 조성했습니다. 매년 전 세계에서 50만 통 이상의 산타 앞 편지가 도착하며, 2010년 현재의 확장된 빌리지가 완성되었습니다.",
    visitInfo: {
      hours: "10:00~17:00 (성수기 연장 운영, 산타 면회 별도 시간)",
      admission: "빌리지 입장 무료, 산타 사진 촬영 유료 (약 30~40 EUR)",
      address: "Tähtikuja 1, 96930 Rovaniemi (시내에서 버스 약 15분)",
      website: "https://santaclausvillage.info",
    },
    highlights: [
      "산타클로스 사무실에서 산타와 직접 만나 사진 촬영",
      "산타클로스 우체국에서 특별 소인이 찍힌 크리스마스 편지 발송",
      "북극권 표시선 위를 걸으며 기념 사진",
      "겨울 액티비티: 허스키 썰매, 순록 썰매, 스노모빌",
    ],
    nearbyAttractions: [
      "아르크티쿰 박물관 (버스 15분)",
      "스노우맨 월드 (인접)",
      "산타파크 (지하 동굴 테마파크, 인접)",
    ],
    photoTips:
      "북극권 표시선(Arctic Circle Line) 위에서 양발을 벌리고 서 있는 포즈가 가장 인기 있는 촬영입니다. 겨울에는 설경이 더해져 환상적입니다.",
    tips: [
      "산타 면회는 무료이지만 공식 사진은 유료입니다 (개인 촬영 불가).",
      "크리스마스 시즌(12월)에는 매우 혼잡하므로 아침 일찍 방문하세요.",
      "우체국에서 '크리스마스에 도착' 옵션을 선택하면 12월 25일에 편지가 배달됩니다.",
      "여름에도 산타를 만날 수 있지만 겨울 눈 덮인 빌리지가 더 분위기 있습니다.",
    ],
  },
  "finland/lapland/rovaniemi/arctic-circle": {
    heroGradient: "from-sky-300 to-indigo-900",
    description:
      "북위 66도 33분, 북극권이 시작되는 지구상의 경계선. 로바니에미 산타클로스 빌리지 바닥에 표시되어 있으며, 이 선을 넘으면 공식적으로 북극 지역에 진입하게 됩니다.",
    visitInfo: {
      hours: "상시 개방 (야외)",
      admission: "무료 (횡단 증명서 유료: 약 5 EUR)",
      address: "Santa Claus Village, Tähtikuja 1, 96930 Rovaniemi",
    },
    highlights: [
      "바닥에 표시된 북극권 라인을 밟으며 기념 촬영",
      "공식 북극권 횡단 증명서 발급",
      "여름 지점(6월 21일 전후) 24시간 태양이 지지 않는 백야 체험",
      "겨울 지점(12월 21일 전후) 해가 뜨지 않는 극야와 오로라",
    ],
    nearbyAttractions: [
      "산타클로스 사무실 (바로 옆)",
      "산타클로스 우체국 (도보 2분)",
      "아르크티쿰 박물관 (버스 15분)",
    ],
    photoTips:
      "북극권 라인 위에 양발을 벌리고 서서 'Welcome to the Arctic Circle' 표지판과 함께 촬영하세요.",
    tips: [
      "북극권 횡단 증명서는 산타클로스 빌리지 기념품 숍에서 구매할 수 있습니다.",
      "겨울에는 기온이 매우 낮으므로 야외 촬영 시 방한에 주의하세요.",
      "여름 백야 시기에 방문하면 자정에도 밝은 독특한 경험을 할 수 있습니다.",
    ],
  },

  // ===== TAMPERE ATTRACTIONS =====
  "finland/lakeland/tampere/saunakapiteli": {
    heroGradient: "from-orange-500 to-red-800",
    description:
      "'사우나의 수도' 탐페레에서 핀란드 사우나 문화의 정수를 경험할 수 있는 공공 사우나. 전통 연기 사우나(사부사우나)부터 현대식 사우나까지 다양한 타입을 갖추고 있으며, 사우나 후 호수에 뛰어드는 핀란드 전통 체험이 가능합니다.",
    visitInfo: {
      hours: "수~일 14:00~21:00 (월·화 휴무, 시즌별 변동)",
      admission: "성인 약 15~20 EUR",
      address: "Tampere (호수변 위치, 구체적 주소는 업체별 상이)",
    },
    highlights: [
      "전통 연기 사우나(사부사우나) 체험",
      "사우나 후 차가운 호수에 뛰어드는 핀란드 전통",
      "비히타(자작나무 가지) 마사지 체험",
      "다양한 온도와 스타일의 사우나 선택 가능",
    ],
    nearbyAttractions: [
      "네시네울라 전망탑 (도보 15분)",
      "바프리키 뮤지엄 센터 (도보 20분)",
      "피스팔라 전망 지구 (버스 10분)",
    ],
    photoTips:
      "사우나 내부는 촬영이 제한되므로 외부 호수변에서 건물과 호수를 배경으로 촬영하세요.",
    tips: [
      "수건과 수영복을 준비하세요 (대여 가능한 곳도 있습니다).",
      "사우나 에티켓: 핀란드에서는 사우나 내 대화가 조용한 편입니다.",
      "사우나 후 호수 수영은 겨울에도 하는 전통이지만 무리하지 마세요.",
      "사전 예약을 권장하며, 혼욕/남녀분리 시간을 확인하세요.",
    ],
  },
};
