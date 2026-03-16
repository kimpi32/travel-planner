import type { CityDetail, AttractionDetail } from "../city-details";

export const ghanaCityDetails: Record<string, CityDetail> = {
  // ===== ACCRA =====
  "ghana/accra/accra": {
    heroGradient: "from-orange-500 to-red-700",
    description: "서아프리카에서 가장 빠르게 성장하는 현대 도시이자 가나의 수도. 노예 무역의 아픈 역사를 간직한 제임스타운 항구, 독립 기념 광장의 자부심, 활기찬 마카올라 시장의 에너지가 어우러진 역동적인 도시입니다. 서아프리카 최고의 나이트라이프와 현대 미술 씬도 빠르게 성장하고 있습니다.",
    bestTime: "11~3월 (건기, 하마탄 바람이 부는 시기)",
    stayArea: "오수 / 라본 비치 / 공항 인근 이스트 레곤",
    transport: "우버, 트로트로(미니버스), 택시, 볼트(라이드쉐어링)",
    districts: [
      { name: "오수", nameEn: "Osu", description: "레스토랑, 바, 부티크 숍이 밀집한 아크라 최대의 엔터테인먼트 지구. '옥스포드 스트리트'라 불리는 카나시에 스트리트가 중심.", highlights: ["옥스포드 스트리트(카나시에)", "아크라 최고 레스토랑", "나이트라이프"] },
      { name: "제임스타운", nameEn: "Jamestown", description: "아크라에서 가장 오래된 지구로 17세기 영국 식민지 시대의 성채와 어부 마을이 공존하는 역사적 해안 지역.", highlights: ["제임스타운 등대", "어부 마을", "복싱 체육관(가나 복싱의 성지)"] },
      { name: "라본 비치", nameEn: "Labadi Beach", description: "아크라 시민들의 주말 해변 놀이터. 주말에는 라이브 음악과 레겔, 하이라이프 비트가 울려 퍼지는 서아프리카 최고의 비치 파티 스폿.", highlights: ["라본 비치 호텔", "주말 비치 파티", "코코넛 그로브"] },
    ],
    attractions: [
      { name: "독립 광장", nameEn: "Independence Square", description: "1957년 가나의 독립을 선언한 역사적 장소. 블랙 스타 게이트(독립문)와 자유·정의의 아치 아래에서 아프리카 최초 독립국의 자부심을 느낄 수 있습니다.", category: "역사", tip: "아크라의 랜드마크인 블랙 스타 게이트는 가나 독립의 상징으로 사진 촬영에 최적입니다." },
      { name: "국립박물관", nameEn: "Ghana National Museum", description: "가나의 역사, 고고학, 미술 유물을 소장한 박물관. 아샨티 왕국의 금 장식품과 켄테 직물의 역사가 전시되어 있습니다.", category: "박물관" },
      { name: "마카올라 시장", nameEn: "Makola Market", description: "아크라 최대의 전통 시장으로 아프리카 직물, 비즈 장신구, 향신료, 식료품이 넘쳐나는 서아프리카의 활기를 온몸으로 느낄 수 있는 곳.", category: "시장", tip: "시장은 매우 복잡합니다. 귀중품을 최소화하고 큰 가방은 지참하지 마세요." },
      { name: "크와메 은크루마 기념관", nameEn: "Kwame Nkrumah Memorial Park", description: "아프리카 최초의 독립 지도자이자 가나 초대 대통령 크와메 은크루마의 묘역과 기념 공원. 아프리카 독립 운동의 역사를 배울 수 있습니다.", category: "기념관" },
    ],
    dayTrips: [
      { name: "케이프코스트", nameEn: "Cape Coast", description: "유네스코 세계유산 케이프코스트 성과 엘미나 성. 노예 무역의 역사 현장.", travelTime: "버스 약 3시간", gradient: "from-stone-600 to-gray-800" },
      { name: "아브리 식물원", nameEn: "Aburi Botanical Gardens", description: "아크라 북쪽 고지대의 아열대 식물원. 시원한 기후와 아름다운 정원 산책.", travelTime: "차량 약 1시간", gradient: "from-green-500 to-emerald-700" },
    ],
    localFood: [
      { name: "조롤로프 라이스", description: "토마토 소스에 쌀을 넣어 지은 서아프리카 대표 요리. 가나식은 약간 매콤하고 담백한 것이 특징.", emoji: "🍚" },
      { name: "후푸와 라이트 수프", description: "카사바와 얌을 빻아 만든 끈적한 후푸를 매콤한 닭고기 수프에 찍어 먹는 가나 전통 음식.", emoji: "🥘" },
      { name: "켄키와 생선", description: "발효 옥수수 반죽을 잎에 싸서 찐 켄키에 구운 생선과 매운 고추 소스를 곁들인 가나 해안 지방 음식.", emoji: "🐟" },
    ],
    tips: [
      "가나 사람들은 서아프리카에서 가장 친절하기로 유명합니다. 현지인과의 교류를 적극 즐기세요.",
      "우버와 볼트(Bolt)가 아크라에서 운영됩니다. 일반 택시보다 안전하고 편리합니다.",
      "마카올라 시장에서 흥정은 필수! 처음 제시 가격의 50~60%를 목표로 하세요.",
      "황열병 예방접종 증명서가 입국 시 필수입니다. 말라리아 예방약도 복용하세요.",
      "켄테 직물은 가나의 전통 직물로 의미 있는 기념품입니다. 진품 여부를 확인하고 구입하세요.",
    ],
  },

  // ===== CENTRAL REGION =====
  "ghana/central-region/cape-coast": {
    heroGradient: "from-stone-600 to-gray-800",
    description: "아프리카 노예 무역의 가장 아픈 역사가 서린 가나 중부의 해안 도시. 유네스코 세계문화유산 케이프코스트 성과 엘미나 성에서는 수백만 명의 아프리카인이 대서양 너머로 끌려간 '귀환 없는 문'을 마주하게 됩니다. 열대우림의 카쿰 국립공원 캐노피 워크도 놓칠 수 없는 명소입니다.",
    bestTime: "11~3월 (건기)",
    stayArea: "케이프코스트 시내 / 엘미나 어촌 마을 인근",
    transport: "트로트로, 택시, 도보",
    districts: [
      { name: "케이프코스트 시내", nameEn: "Cape Coast Town", description: "케이프코스트 성을 중심으로 한 해안 마을. 대학 도시답게 활기찬 청년 문화가 있습니다.", highlights: ["케이프코스트 성", "케이프코스트 대학교", "중앙 시장"] },
      { name: "엘미나", nameEn: "Elmina", description: "사하라 이남 아프리카에서 가장 오래된 유럽 건축물(엘미나 성)이 있는 어촌 마을. 형형색색 어선이 늘어선 항구 풍경이 인상적.", highlights: ["엘미나 성", "포르투갈식 어촌 마을", "어부 시장"] },
    ],
    attractions: [
      { name: "케이프코스트 성", nameEn: "Cape Coast Castle", description: "1653년 스웨덴이 건설한 성채로 이후 영국이 서아프리카 노예 무역의 중심지로 사용. 어두운 지하 감옥과 '귀환 없는 문(Door of No Return)'은 인류 역사의 가장 어두운 페이지를 증언합니다.", category: "세계유산", tip: "가이드 투어는 약 1시간이며 매우 감동적이고 무거운 경험입니다. 마음의 준비를 하고 방문하세요." },
      { name: "엘미나 성", nameEn: "Elmina Castle", description: "1482년 포르투갈이 건설한 사하라 이남 아프리카 최초의 유럽 건축물. 금 교역에서 시작해 후에 노예 무역의 거점이 된 비극의 성채.", category: "세계유산" },
      { name: "카쿰 국립공원", nameEn: "Kakum National Park", description: "열대우림 수관층(캐노피) 위 40m 높이에 설치된 350m 길이의 출렁다리 캐노피 워크가 유명. 원숭이, 새, 나비 등 열대우림 생태계를 체험합니다.", category: "국립공원", tip: "이른 아침(06:00~08:00)에 방문하면 야생동물 활동이 활발하고 인파도 적습니다." },
    ],
    dayTrips: [
      { name: "아크라", nameEn: "Accra", description: "가나의 수도이자 서아프리카 최대 도시로의 귀환.", travelTime: "버스 약 3시간", gradient: "from-orange-500 to-red-700" },
      { name: "카카오 농장 투어", nameEn: "Cocoa Farm Tour", description: "세계 최대 카카오 생산국 가나의 카카오 농장에서 초콜릿 원료 채취 과정을 체험.", travelTime: "케이프코스트 인근 차량 약 30분", gradient: "from-amber-600 to-yellow-800" },
    ],
    localFood: [
      { name: "팜넛 수프와 후푸", description: "기름야자 열매로 만든 걸쭉한 팜넛 수프에 후푸를 찍어 먹는 가나 중부 지방의 전통 요리.", emoji: "🥘" },
      { name: "그릴드 피시", description: "대서양에서 갓 잡은 생선을 숯불에 구운 케이프코스트 해안의 신선한 해산물 요리.", emoji: "🐟" },
      { name: "반쿠와 옥라 스튜", description: "발효 옥수수 반죽 반쿠에 오크라(여주) 스튜를 곁들인 가나 남부의 인기 가정식.", emoji: "🍲" },
    ],
    tips: [
      "케이프코스트 성과 엘미나 성 투어는 정서적으로 무거운 경험입니다. 충분한 마음의 준비를 하세요.",
      "카쿰 캐노피 워크는 높이 공포증이 있다면 도전적일 수 있습니다. 무리하지 마세요.",
      "아크라에서 케이프코스트까지 에어컨 버스(STC, VIP)를 이용하면 편안합니다.",
      "엘미나 어부 시장에서는 사진 촬영 전 반드시 허가를 구하세요.",
      "케이프코스트와 엘미나 성 모두 하루에 방문할 수 있으며 콤보 투어를 권장합니다.",
    ],
  },
};

export const ghanaAttractionDetails: Record<string, AttractionDetail> = {
  "ghana/central-region/cape-coast/cape-coast-castle": {
    heroGradient: "from-stone-600 to-gray-800",
    description: "1653년 스웨덴이 건설하고 이후 네덜란드, 영국이 차례로 점령해 서아프리카 노예 무역의 중심지로 사용한 세계문화유산. 지하 감옥에 최대 1,000명의 아프리카인이 한꺼번에 갇혔으며, '귀환 없는 문(Door of No Return)'을 통해 노예선에 실려 아메리카 대륙으로 끌려갔습니다. 인류 역사의 가장 어두운 장을 증언하는 이 성채는 2009년 오바마 대통령이 가족과 함께 방문해 세계적 주목을 받았습니다.",
    history: "1653년 스웨덴이 카롤루스보르그(Carolusborg)라는 이름으로 건설. 1664년 영국이 탈취해 왕립 아프리카 회사(Royal African Company)의 서아프리카 본부로 사용하며 대서양 노예 무역의 핵심 거점이 되었습니다. 1844년 영국 식민 정부 청사가 되었고 1957년 가나 독립 이후 유적지로 보존. 1979년 유네스코 세계문화유산으로 등재되었습니다.",
    visitInfo: {
      hours: "09:00~17:00 (연중무휴)",
      admission: "외국인 40세디 (약 5,000원)",
      address: "Cape Coast Castle, Victoria Road, Cape Coast",
      website: "https://www.ghanamuseums.org",
    },
    highlights: [
      "어둡고 좁은 지하 노예 감옥에서 느끼는 역사의 무게",
      "'귀환 없는 문(Door of No Return)'을 통해 바라보는 대서양",
      "2009년 오바마 대통령 방문 기념 전시",
      "성채 옥상에서 바라보는 케이프코스트 해안과 어촌 풍경",
    ],
    nearbyAttractions: ["엘미나 성", "카쿰 국립공원 캐노피 워크", "케이프코스트 대학교"],
    photoTips: "'귀환 없는 문' 안에서 바깥 대서양을 프레이밍하는 구도가 가장 상징적입니다. 성채 옥상에서 해안 마을 전경도 좋은 사진 포인트입니다.",
    tips: [
      "가이드 투어는 약 1시간이며 매우 감정적인 경험입니다. 사전에 마음의 준비를 하세요.",
      "지하 감옥은 매우 어둡고 좁습니다. 폐소공포증이 있다면 미리 가이드에게 알려주세요.",
      "노예 무역의 역사를 다룬 박물관 전시실도 함께 관람하세요.",
      "아프리카계 미국인 방문자들을 위한 특별 '홈커밍' 투어도 운영됩니다.",
    ],
  },

  "ghana/central-region/cape-coast/kakum-national-park": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "375km² 면적의 열대우림 국립공원으로 수관층(캐노피) 위 40m 높이에 설치된 350m 길이의 출렁다리 캐노피 워크가 가나 최고의 자연 체험 명소입니다. 아프리카에서 몇 안 되는 캐노피 워크웨이 중 하나로, 열대우림의 꼭대기에서 원숭이, 새, 나비 등 다양한 생물을 관찰할 수 있습니다.",
    history: "1931년 산림 보호구역으로 지정되었으나 불법 벌채와 밀렵으로 훼손 위기에 처한 후 1992년 정식 국립공원으로 승격되었습니다. 1995년 캐나다 정부의 지원으로 캐노피 워크가 건설되어 가나 최고의 에코 투어리즘 명소가 되었습니다.",
    visitInfo: {
      hours: "06:00~16:00 (연중무휴)",
      admission: "외국인 60세디 (약 7,500원) + 캐노피 워크 별도",
      address: "Kakum National Park, Central Region, Ghana",
    },
    highlights: [
      "지상 40m 높이의 7개 출렁다리를 걸어가는 캐노피 워크 스릴",
      "400여 종의 나비와 200여 종의 조류 관찰",
      "다이애나 원숭이, 보노보 등 희귀 영장류 서식지",
      "가이드와 함께하는 열대우림 트레일 하이킹",
    ],
    nearbyAttractions: ["케이프코스트 성", "엘미나 성", "한스 보아텡 아트 센터"],
    photoTips: "캐노피 워크 위에서 열대우림 파노라마를 촬영할 때 광각 렌즈가 효과적입니다. 안개 낀 이른 아침에 방문하면 신비로운 열대우림 분위기를 담을 수 있습니다.",
    tips: [
      "이른 아침(06:00~08:00) 방문 시 야생동물 활동이 가장 활발하고 인파도 적습니다.",
      "출렁다리는 안전하지만 높이 공포증이 있다면 도전적일 수 있습니다. 무리하지 마세요.",
      "방충제를 충분히 바르고 긴 소매, 긴 바지를 착용하세요. 모기와 곤충이 많습니다.",
      "케이프코스트 성 방문과 함께 하루 일정으로 계획하면 효율적입니다.",
    ],
  },
};
