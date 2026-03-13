import type { CityDetail, AttractionDetail } from "../city-details";

export const costaRicaCityDetails: Record<string, CityDetail> = {
  // ===== GUANACASTE & NORTH PACIFIC =====
  "costa-rica/guanacaste/tamarindo": {
    heroGradient: "from-amber-400 to-orange-600",
    description:
      "코스타리카 태평양 북서부 해안의 서핑 천국, 타마린도. 연중 따뜻한 날씨와 일정한 파도가 세계 서퍼들을 끌어들이며, 황금빛 석양이 물드는 해변은 중미에서 가장 아름다운 노을 명소로 꼽힙니다. 낮에는 서핑과 카약, 밤에는 활기찬 해변 바에서 '푸라 비다'의 정수를 느낄 수 있습니다.",
    bestTime: "12~4월 (건기, 파도 안정적)",
    stayArea: "타마린도 해변 중심가 / 플라야 랑고스타",
    transport: "렌터카(4WD 권장), 셔틀 서비스, 자전거, ATV",
    districts: [
      {
        name: "타마린도 비치 센터",
        nameEn: "Tamarindo Beach Center",
        description:
          "해변을 따라 서핑숍, 레스토랑, 바가 늘어선 타마린도의 중심. 초보자도 즐길 수 있는 부드러운 파도와 서핑 레슨이 다양합니다.",
        highlights: ["서핑 레슨", "해변 레스토랑", "석양 바", "야시장"],
      },
      {
        name: "플라야 랑고스타",
        nameEn: "Playa Langosta",
        description:
          "타마린도 남쪽의 조용하고 고급스러운 해변. 대형 가죽등거북 산란지로 유명하며 로맨틱한 분위기의 리조트가 모여 있습니다.",
        highlights: ["가죽등거북 산란 관찰(10~3월)", "조용한 해변", "고급 리조트"],
      },
    ],
    attractions: [
      {
        name: "타마린도 해변",
        nameEn: "Tamarindo Beach",
        description:
          "코스타리카에서 가장 유명한 서핑 해변. 초보자부터 중급자까지 즐길 수 있는 균일한 파도와 따뜻한 수온이 매력입니다.",
        category: "자연",
        tip: "서핑 레슨은 아침 7~9시가 파도 컨디션이 가장 좋습니다.",
      },
      {
        name: "라스 바울라스 국립해양공원",
        nameEn: "Las Baulas National Marine Park",
        description:
          "세계 최대 대형 가죽등거북 산란지. 10~3월 밤에 체중 700kg에 달하는 거대 바다거북이 해변에 올라와 알을 낳는 장관을 볼 수 있습니다.",
        category: "자연",
        tip: "가이드 동반 야간 투어만 허용됩니다. 플래시 사용은 절대 금지.",
      },
      {
        name: "석양 보트 투어",
        nameEn: "Sunset Sailing Tour",
        description:
          "쌍동선이나 요트를 타고 태평양 위에서 감상하는 코스타리카의 황금빛 일몰. 돌고래와 바다거북을 만날 확률이 높습니다.",
        category: "액티비티",
        tip: "출발 1~2일 전에 예약하세요. 건기(12~4월)에 석양이 가장 선명합니다.",
      },
    ],
    dayTrips: [
      {
        name: "린콘 데 라 비에하 화산",
        nameEn: "Rincon de la Vieja Volcano",
        description:
          "부글부글 끓는 진흙 웅덩이, 유황 온천, 울창한 열대우림이 공존하는 활화산 국립공원.",
        travelTime: "차로 약 1시간 30분",
        gradient: "from-red-400 to-orange-700",
      },
      {
        name: "파파가요 반도",
        nameEn: "Papagayo Peninsula",
        description:
          "에메랄드빛 바다와 화이트 샌드 비치가 어우러진 럭셔리 리조트 지구. 스노클링과 다이빙 명소.",
        travelTime: "차로 약 1시간",
        gradient: "from-cyan-400 to-blue-600",
      },
    ],
    localFood: [
      {
        name: "세비체",
        description:
          "신선한 해산물을 라임즙에 절여 만든 코스타리카식 세비체. 타마린도 해변 식당에서 맛보는 것이 최고.",
        emoji: "🐟",
      },
      {
        name: "카사도",
        description:
          "코스타리카 국민 정식. 밥, 검은콩, 바나나 튀김, 샐러드, 고기가 한 접시에 담긴 가정식.",
        emoji: "🍽️",
      },
      {
        name: "피파",
        description:
          "코코넛 워터에 과일을 섞은 열대 전통 음료. 더운 날씨에 갈증 해소에 최고.",
        emoji: "🥥",
      },
    ],
    tips: [
      "서핑 초보자도 2~3일이면 기본기를 익힐 수 있습니다. 보드 대여비는 하루 약 $10~15.",
      "건기(12~4월)가 최적이지만 우기(5~11월)에도 서핑은 가능합니다. 파도가 더 큰 날이 많습니다.",
      "원숭이가 가방이나 음식을 채가므로 해변에서 소지품을 방치하지 마세요.",
      "타마린도에서 렌터카를 빌릴 때는 반드시 4WD를 선택하세요. 비포장 도로가 많습니다.",
    ],
  },

  // ===== CENTRAL VALLEY & VOLCANOES =====
  "costa-rica/central-valley/arenal-volcano-area": {
    heroGradient: "from-red-500 to-orange-700",
    description:
      "코스타리카의 상징이자 중미에서 가장 활동적인 화산 중 하나인 아레날 화산. 완벽한 원추형 실루엣을 자랑하는 해발 1,670m의 이 화산을 중심으로 천연 온천, 열대우림 트레킹, 집라인, 래프팅 등 모험 액티비티가 집중되어 있습니다. 아레날 호수의 잔잔한 수면에 비친 화산 풍경은 코스타리카를 대표하는 절경입니다.",
    bestTime: "2~4월 (건기, 화산 전망 가장 맑음)",
    stayArea: "라 포르투나 시내 / 아레날 호수변 리조트",
    transport: "렌터카(4WD 권장), 투어 셔틀, 보트 택시(호수 횡단)",
    districts: [
      {
        name: "라 포르투나",
        nameEn: "La Fortuna",
        description:
          "아레날 화산 기슭의 작은 마을이자 모든 투어의 거점. 레스토랑, 숙소, 투어 에이전시가 밀집해 있습니다.",
        highlights: ["라 포르투나 폭포", "투어 에이전시 거리", "로컬 레스토랑", "야시장"],
      },
      {
        name: "아레날 호수 지구",
        nameEn: "Lake Arenal Area",
        description:
          "코스타리카 최대 인공호수인 아레날 호수 주변. 카약, 패들보드, 윈드서핑 등 수상 액티비티와 호수변 에코 로지가 매력입니다.",
        highlights: ["카약", "패들보드", "윈드서핑", "에코 로지"],
      },
    ],
    attractions: [
      {
        name: "아레날 화산 국립공원",
        nameEn: "Arenal Volcano National Park",
        description:
          "완벽한 원추형 아레날 화산을 중심으로 조성된 국립공원. 1968년 대분화 이후 형성된 용암 지대 트레킹과 전망대에서 화산을 감상할 수 있습니다.",
        category: "자연",
        tip: "오전에 구름이 적어 화산 전경이 잘 보입니다. 오후에는 구름에 가려지는 날이 많습니다.",
      },
      {
        name: "라 포르투나 폭포",
        nameEn: "La Fortuna Waterfall",
        description:
          "열대우림 속 70m 높이에서 쏟아지는 장엄한 폭포. 500개의 계단을 내려가면 에메랄드빛 폭포 웅덩이에서 수영할 수 있습니다.",
        category: "자연",
        tip: "계단이 가파르므로 편한 운동화를 신으세요. 올라올 때 체력이 많이 소모됩니다.",
      },
      {
        name: "타바콘 온천 리조트",
        nameEn: "Tabacon Hot Springs",
        description:
          "아레날 화산의 지열로 데워진 천연 온천수가 열대 정원을 흐르는 세계적 수준의 온천 리조트. 화산을 바라보며 온천욕을 즐기는 로맨틱한 경험.",
        category: "액티비티",
        tip: "저녁 입장이 더 저렴하고 분위기도 좋습니다. 사전 예약 필수.",
      },
      {
        name: "미스티코 행잉 브릿지",
        nameEn: "Mistico Hanging Bridges",
        description:
          "열대우림 캐노피를 가로지르는 15개의 현수교와 트레일. 나무늘보, 큰부리새 등 야생동물을 눈높이에서 관찰합니다.",
        category: "자연",
        tip: "가이드 투어를 선택하면 야생동물을 훨씬 많이 발견할 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "리오 셀레스테",
        nameEn: "Rio Celeste",
        description:
          "화학 반응으로 인해 믿을 수 없을 만큼 선명한 하늘색을 띠는 신비로운 강과 폭포.",
        travelTime: "차로 약 2시간 30분",
        gradient: "from-sky-300 to-blue-600",
      },
      {
        name: "몬테베르데",
        nameEn: "Monteverde",
        description:
          "세계적인 운무림 보호구역. 보트+밴 코스(아레날 호수 횡단)로 이동하면 경치도 즐기고 시간도 단축.",
        travelTime: "보트+밴 약 3시간",
        gradient: "from-emerald-400 to-green-700",
      },
    ],
    localFood: [
      {
        name: "갈로 핀토",
        description:
          "밥과 검은콩을 볶아 살사 리사노 소스로 맛을 낸 코스타리카 국민 아침 식사.",
        emoji: "🍳",
      },
      {
        name: "치프리아니",
        description:
          "바나나 잎에 싸서 찐 코스타리카식 타말. 명절과 축제에 즐기는 전통 음식.",
        emoji: "🫔",
      },
      {
        name: "프레스코 나투랄",
        description:
          "신선한 열대 과일로 만든 천연 주스. 파파야, 마라쿠야, 망고 등 다양한 맛.",
        emoji: "🧃",
      },
    ],
    tips: [
      "아레날 화산은 오전 6~10시에 구름 없이 맑게 보일 확률이 가장 높습니다.",
      "무료 온천은 '엘 쵸요'(El Choyo) 같은 강변 온천 스폿이 있습니다. 현지인에게 물어보세요.",
      "아레날에서 몬테베르데로 이동 시 '보트+밴(Jeep-Boat-Jeep)' 코스가 경치도 좋고 편리합니다.",
      "우기에도 오전에는 맑은 날이 많습니다. 오전에 야외 액티비티, 오후에 온천이 최적 동선입니다.",
    ],
  },

  "costa-rica/central-valley/monteverde": {
    heroGradient: "from-emerald-500 to-green-800",
    description:
      "해발 1,400m의 구름 속에 자리한 몬테베르데 운무림은 지구상에서 가장 생물다양성이 풍부한 숲 중 하나입니다. 1950년대 퀘이커 교도들이 평화를 찾아 이주하며 시작된 이 마을은, 지금은 세계적인 생태관광의 성지가 되었습니다. 안개에 싸인 숲속에서 전설의 새 퀘찰을 만나는 것은 코스타리카 여행의 하이라이트입니다.",
    bestTime: "1~5월 (건기, 퀘찰 관찰 최적기)",
    stayArea: "산타 엘레나 마을 / 몬테베르데 보호구역 입구",
    transport: "렌터카(4WD 필수), 셔틀 버스, 투어 밴",
    districts: [
      {
        name: "산타 엘레나",
        nameEn: "Santa Elena",
        description:
          "몬테베르데의 중심 마을. 숙소, 식당, 투어 에이전시, 기념품 가게가 모여 있는 여행자 거점입니다.",
        highlights: ["산타 엘레나 운무림 보호구역", "투어 에이전시", "로컬 카페"],
      },
      {
        name: "몬테베르데 보호구역 주변",
        nameEn: "Monteverde Reserve Area",
        description:
          "세계적인 몬테베르데 운무림 생물보전지역 입구 주변. 에코 로지와 자연 센터가 밀집해 있습니다.",
        highlights: ["몬테베르데 운무림", "난초 정원", "나비 온실", "뱀 전시관"],
      },
    ],
    attractions: [
      {
        name: "몬테베르데 운무림 생물보전지역",
        nameEn: "Monteverde Cloud Forest Reserve",
        description:
          "2,500종 이상의 식물, 400종의 조류, 100종의 포유류가 서식하는 세계적인 운무림. 이끼와 착생식물로 뒤덮인 숲속 트레일을 걸으며 퀘찰을 찾는 것이 가장 특별한 경험입니다.",
        category: "자연",
        tip: "새벽 6시 가이드 투어가 퀘찰을 만날 확률이 가장 높습니다.",
      },
      {
        name: "스카이 어드벤처 (집라인 & 스카이워크)",
        nameEn: "Sky Adventures",
        description:
          "운무림 캐노피 위를 날아가는 집라인과 현수교 트레일. 길이 750m의 슈퍼맨 집라인은 울창한 숲 위를 내려다보며 비행하는 짜릿한 경험입니다.",
        category: "액티비티",
        tip: "스카이워크(현수교)와 집라인을 결합한 콤보 패키지가 가성비 최고.",
      },
      {
        name: "난초 정원",
        nameEn: "Orchid Garden",
        description:
          "400종 이상의 난초를 보유한 미니어처 난초 전문 정원. 세계에서 가장 작은 난초를 포함해 놀라운 다양성을 선보입니다.",
        category: "자연",
        tip: "돋보기를 빌려 미세 난초를 관찰하세요. 가이드 설명이 매우 유익합니다.",
      },
      {
        name: "야간 생태 투어",
        nameEn: "Night Tour",
        description:
          "손전등 하나로 운무림 밤의 세계를 탐험합니다. 붉은 눈 청개구리, 타란튤라, 킨카주 등 낮에는 만날 수 없는 야행성 동물들의 세계.",
        category: "자연",
        tip: "투어 시작 전 방충제를 꼭 바르세요. 장화를 빌려주는 업체를 선택하면 편리합니다.",
      },
    ],
    dayTrips: [
      {
        name: "아레날 화산",
        nameEn: "Arenal Volcano",
        description:
          "코스타리카의 상징적인 원추형 활화산. 보트+밴 코스로 경치를 즐기며 이동 가능.",
        travelTime: "보트+밴 약 3시간",
        gradient: "from-red-400 to-orange-600",
      },
      {
        name: "산타 엘레나 운무림",
        nameEn: "Santa Elena Cloud Forest",
        description:
          "몬테베르데보다 방문객이 적어 더 조용히 운무림을 탐방할 수 있는 커뮤니티 보호구역.",
        travelTime: "차로 약 20분",
        gradient: "from-green-400 to-emerald-700",
      },
    ],
    localFood: [
      {
        name: "카사도",
        description:
          "밥, 검은콩, 바나나 튀김, 샐러드, 고기(닭/소/생선)가 한 접시에 담긴 코스타리카 가정식.",
        emoji: "🍛",
      },
      {
        name: "코스타리카 커피",
        description:
          "몬테베르데 고산지대에서 재배되는 고품질 아라비카 커피. 현지 카페에서 핸드드립으로 맛보세요.",
        emoji: "☕",
      },
      {
        name: "트레스 레체스",
        description:
          "세 종류의 우유에 적신 스펀지 케이크. 코스타리카에서 가장 인기 있는 디저트.",
        emoji: "🍰",
      },
    ],
    tips: [
      "몬테베르데는 연중 구름과 안개가 많습니다. 방수 재킷과 가벼운 우비는 필수입니다.",
      "퀘찰(Quetzal)은 3~5월이 번식기로 관찰 확률이 높습니다. 새벽 투어를 신청하세요.",
      "산타 엘레나에서 보호구역까지는 약 6km. 택시나 셔틀을 이용하세요.",
      "몬테베르데까지의 도로는 대부분 비포장입니다. 4WD 렌터카가 필수이며, 야간 운전은 피하세요.",
    ],
  },

  // ===== CARIBBEAN & SOUTH PACIFIC =====
  "costa-rica/caribbean-south-pacific/manuel-antonio": {
    heroGradient: "from-teal-500 to-cyan-700",
    description:
      "코스타리카에서 가장 방문객이 많은 국립공원이 있는 마누엘 안토니오. 열대우림과 하얀 모래 해변이 만나는 곳에서 4종의 원숭이, 나무늘보, 이구아나가 관광객 바로 옆에서 자유롭게 생활합니다. '정글 속 해변'이라는 표현이 가장 잘 어울리는 코스타리카 생태관광의 대표 명소입니다.",
    bestTime: "12~4월 (건기, 맑고 화창)",
    stayArea: "마누엘 안토니오 해변 주변 / 케포스 마을",
    transport: "렌터카, 지역 버스, 택시, 셔틀",
    districts: [
      {
        name: "마누엘 안토니오 국립공원 지구",
        nameEn: "Manuel Antonio National Park Area",
        description:
          "국립공원 입구 주변의 숙소와 레스토랑이 밀집한 지역. 정글 속 부티크 호텔과 오션뷰 레스토랑이 매력입니다.",
        highlights: ["국립공원 입구", "정글 속 호텔", "오션뷰 레스토랑"],
      },
      {
        name: "케포스",
        nameEn: "Quepos",
        description:
          "마누엘 안토니오에서 7km 거리의 로컬 마을. 현지 식당과 시장이 있어 가성비 좋은 식사와 숙박이 가능합니다.",
        highlights: ["로컬 시장", "마리나(스포츠 피싱)", "야시장", "현지 식당"],
      },
    ],
    attractions: [
      {
        name: "마누엘 안토니오 국립공원",
        nameEn: "Manuel Antonio National Park",
        description:
          "코스타리카에서 가장 작지만 가장 생물다양성이 풍부한 국립공원. 흰얼굴 카푸친원숭이, 다람쥐원숭이, 나무늘보가 해변까지 내려오며, 트레일을 따라 걸으면 각종 야생동물을 눈앞에서 만납니다.",
        category: "자연",
        tip: "하루 1,500명 입장 제한입니다. 온라인 사전 예약 필수. 가이드를 고용하면 동물을 10배 더 많이 발견합니다.",
      },
      {
        name: "플라야 에스파디야",
        nameEn: "Playa Espadilla",
        description:
          "국립공원 바로 앞의 공공 해변. 부드러운 모래와 따뜻한 물에서 수영과 서핑을 즐길 수 있습니다.",
        category: "자연",
        tip: "국립공원 해변보다 자유롭게 이용 가능합니다. 선크림과 물을 충분히 챙기세요.",
      },
      {
        name: "나이트 투어 (맹그로브 & 정글)",
        nameEn: "Night Mangrove Tour",
        description:
          "맹그로브 습지와 열대 정글에서 진행되는 야간 생태 투어. 악어, 보아뱀, 형광 개구리 등 밤에만 활동하는 동물들을 관찰합니다.",
        category: "액티비티",
        tip: "맹그로브 보트 투어와 정글 워킹 투어를 결합한 콤보가 가장 풍성한 경험을 줍니다.",
      },
    ],
    dayTrips: [
      {
        name: "나우야카 폭포",
        nameEn: "Nauyaca Waterfalls",
        description:
          "2단으로 떨어지는 웅장한 폭포. 하이킹이나 말을 타고 접근하며, 하단 웅덩이에서 수영이 가능합니다.",
        travelTime: "차로 약 40분 + 도보 1시간",
        gradient: "from-blue-400 to-teal-600",
      },
      {
        name: "다마스 맹그로브 보트 투어",
        nameEn: "Damas Island Mangrove Tour",
        description:
          "맹그로브 수로를 카약이나 보트로 탐험하며 원숭이, 악어, 각종 수조류를 관찰하는 에코 투어.",
        travelTime: "케포스에서 차로 15분",
        gradient: "from-green-400 to-teal-700",
      },
    ],
    localFood: [
      {
        name: "갈로 핀토",
        description:
          "밥과 검은콩을 볶아 살사 리사노로 맛을 낸 코스타리카의 대표 아침 식사.",
        emoji: "🍳",
      },
      {
        name: "파타코네스",
        description:
          "덜 익은 플랜테인 바나나를 납작하게 눌러 바삭하게 튀긴 사이드 디시. 세비체와 함께 먹으면 환상.",
        emoji: "🍌",
      },
      {
        name: "임페리얼 맥주",
        description:
          "코스타리카 국민 맥주. 열대 더위에 시원하게 마시는 라거로, 해변의 필수 동반자.",
        emoji: "🍺",
      },
    ],
    tips: [
      "마누엘 안토니오 국립공원은 월요일 휴무입니다. 일정을 확인하세요.",
      "가이드를 고용하면 망원경과 전문 지식으로 야생동물을 훨씬 많이 발견할 수 있습니다.",
      "원숭이에게 절대 먹이를 주거나 가방을 방치하지 마세요. 음식을 빼앗깁니다.",
      "케포스 마을에서 식사하면 국립공원 주변보다 훨씬 저렴합니다.",
    ],
  },
};

export const costaRicaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ARENAL VOLCANO =====
  "costa-rica/central-valley/arenal-volcano-area/arenal-volcano": {
    heroGradient: "from-red-500 to-orange-700",
    description:
      "해발 1,670m의 완벽한 원추형 실루엣을 자랑하는 아레날 화산은 코스타리카의 상징입니다. 1968년 대분화 이후 2010년까지 간헐적으로 활동했으며, 분화구에서 흘러내린 용암 지대를 걷는 트레킹은 지구의 살아있는 에너지를 체감하는 경험입니다. 화산 기슭에서 솟아나는 천연 온천은 모험과 휴식을 동시에 선사합니다.",
    history:
      "아레날 화산은 약 7,000년 전부터 활동해왔으며, 1968년 7월 29일 대분화로 3개 마을이 매몰되어 87명이 사망했습니다. 이후 2010년까지 꾸준히 활동하다가 현재는 휴면 상태에 접어들었습니다. 1994년 국립공원으로 지정되어 코스타리카 생태관광의 핵심 명소가 되었습니다.",
    visitInfo: {
      hours: "매일 08:00~16:00 (마지막 입장 14:00)",
      admission: "성인 $15 / 아동 $5",
      address: "Arenal Volcano National Park, La Fortuna, Alajuela, Costa Rica",
      website: "https://www.sinac.go.cr",
    },
    highlights: [
      "완벽한 원추형 화산 실루엣과 아레날 호수의 파노라마 전망",
      "1968년 분화 용암 지대 트레킹 (1.7km 센데로 콜라다스 트레일)",
      "전망대에서 바라보는 화산과 열대우림의 대비",
      "화산 기슭의 천연 온천 (타바콘, 에코테르말레스, 바디 아레날)",
      "투칸, 앵무새 등 다양한 열대 조류 관찰",
    ],
    nearbyAttractions: [
      "라 포르투나 폭포",
      "타바콘 온천 리조트",
      "미스티코 행잉 브릿지",
      "아레날 호수",
    ],
    photoTips:
      "이른 아침(6~8시)에 구름이 없어 화산 전체가 드러나는 사진을 찍을 수 있습니다. 아레날 호수 건너편에서 호수 수면에 반사된 화산 사진이 가장 인상적입니다. 석양 시간에는 화산 뒤로 붉은 노을이 물드는 실루엣 사진도 훌륭합니다.",
    tips: [
      "오전에 방문하면 구름에 가려지기 전 화산 전경을 감상할 확률이 높습니다.",
      "센데로 콜라다스(용암 트레일)와 센데로 엘 세이보(열대우림 트레일) 두 코스를 모두 걸어보세요.",
      "국립공원 내 화산 등정은 금지되어 있습니다. 트레일만 이용 가능합니다.",
      "물과 간식을 충분히 챙기세요. 공원 내 매점이 없습니다.",
      "국립공원 방문 후 온천에서 피로를 푸는 것이 완벽한 하루 코스입니다.",
    ],
  },

  // ===== MANUEL ANTONIO NATIONAL PARK =====
  "costa-rica/caribbean-south-pacific/manuel-antonio/manuel-antonio-national-park": {
    heroGradient: "from-teal-500 to-cyan-700",
    description:
      "면적은 코스타리카에서 가장 작지만, 단위 면적당 생물다양성은 세계 최고 수준인 마누엘 안토니오 국립공원. 울창한 열대우림 트레일을 걷다 보면 흰얼굴 카푸친원숭이가 나뭇가지를 건너고, 나무늘보가 세발가락으로 매달려 잠을 자고, 해변에서는 이구아나가 일광욕을 합니다. 정글과 백사장 해변이 만나는 꿈같은 장소입니다.",
    history:
      "1972년에 국립공원으로 지정되었으며, 면적은 약 20km²에 불과하지만 코스타리카에서 가장 많은 방문객이 찾는 공원입니다. 하루 입장 인원을 1,500명으로 제한하고, 매주 월요일 휴무를 두어 자연 회복 시간을 보장하는 등 지속 가능한 관광의 모범 사례로 평가받고 있습니다.",
    visitInfo: {
      hours: "화~일 07:00~16:00 (월요일 휴무)",
      admission: "외국인 성인 $18 / 아동 $5",
      address: "Manuel Antonio National Park, Quepos, Puntarenas, Costa Rica",
      website: "https://www.sinac.go.cr",
    },
    highlights: [
      "4종의 원숭이 (흰얼굴 카푸친, 다람쥐원숭이, 거미원숭이, 고함원숭이)",
      "나무늘보를 바로 눈앞에서 관찰",
      "열대우림 속 백사장 해변 (플라야 마누엘 안토니오, 플라야 에스파디야 수르)",
      "다양한 도마뱀, 이구아나, 뱀 등 파충류",
      "트레일을 따라 만나는 너구리, 아구티 등 포유류",
    ],
    nearbyAttractions: [
      "플라야 에스파디야 (공공 해변)",
      "다마스 맹그로브 투어",
      "나우야카 폭포",
      "레이니 메이커 자연보호구역",
    ],
    photoTips:
      "가이드가 망원경으로 찾아주는 나무늘보와 원숭이를 줌렌즈(200mm 이상)로 촬영하세요. 해변의 이구아나는 사람을 전혀 무서워하지 않아 가까이서 촬영 가능합니다. 플라야 마누엘 안토니오에서 정글과 해변이 만나는 풍경을 광각으로 담으면 이곳만의 독특한 사진을 얻을 수 있습니다.",
    tips: [
      "온라인 사전 예약이 필수입니다. 당일 현장 구매는 불가능한 날이 많습니다.",
      "가이드를 고용하면($25~40/인) 망원경으로 동물을 찾아주어 경험의 질이 완전히 달라집니다.",
      "월요일은 휴무입니다. 화요일이 가장 한산합니다.",
      "개장 시간(07:00)에 입장하면 인파가 적고 동물 활동이 활발합니다.",
      "물, 선크림, 수영복을 챙기세요. 공원 내 해변에서 수영이 가능합니다.",
      "원숭이에게 먹이를 주거나 가방을 방치하면 안 됩니다. 지퍼를 꼭 닫아두세요.",
    ],
  },

  // ===== MONTEVERDE CLOUD FOREST =====
  "costa-rica/central-valley/monteverde/monteverde-cloud-forest": {
    heroGradient: "from-emerald-500 to-green-800",
    description:
      "해발 1,400m에서 안개와 구름에 둘러싸인 몬테베르데 운무림은 지구상에서 가장 경이로운 생태계 중 하나입니다. 이끼와 착생식물로 뒤덮인 고목 사이를 걸으면 마치 다른 행성의 숲에 들어온 느낌을 받습니다. 2,500종 이상의 식물, 400종의 조류, 100종의 포유류가 서식하며, 특히 중미의 전설적인 새 '찬란한 퀘찰(Resplendent Quetzal)'을 만나는 것이 전 세계 탐조가들의 꿈입니다.",
    history:
      "1951년 미국 앨라배마에서 양심적 병역거부를 선택한 퀘이커 교도 44명이 평화로운 삶을 찾아 이 지역에 정착했습니다. 이들은 산림의 3분의 1을 자발적으로 보전지역으로 지정했고, 1972년 생물학자 조지 파월과 지역 주민의 노력으로 공식 보호구역이 설립되었습니다. 현재는 코스타리카 생태관광의 성지이자 열대 운무림 연구의 중심지입니다.",
    visitInfo: {
      hours: "매일 07:00~16:00",
      admission: "외국인 성인 $25 / 학생 $18 / 아동 $18",
      address:
        "Monteverde Cloud Forest Biological Reserve, Puntarenas, Costa Rica",
      website: "https://www.reservamonteverde.com",
    },
    highlights: [
      "찬란한 퀘찰(Resplendent Quetzal) - 중미의 전설적인 신비의 새",
      "이끼와 착생식물로 뒤덮인 환상적인 운무림 트레일",
      "2,500종 이상의 식물과 500종의 난초",
      "캐노피 레벨의 현수교에서 바라보는 숲 전경",
      "붉은 눈 청개구리, 유리 개구리 등 희귀 양서류",
      "야간 투어에서 만나는 야행성 동물의 세계",
    ],
    nearbyAttractions: [
      "산타 엘레나 운무림 보호구역",
      "스카이 어드벤처 (집라인 & 스카이워크)",
      "난초 정원",
      "몬테베르데 나비 온실",
    ],
    photoTips:
      "운무림은 빛이 부족하므로 높은 ISO와 밝은 렌즈가 필요합니다. 퀘찰은 새벽 투어에서 만날 확률이 높으며, 긴 꼬리 깃털의 초록빛이 안개 속에서 빛나는 순간이 최고의 사진입니다. 현수교 위에서 운무 사이로 드러나는 숲의 층위를 촬영하면 운무림의 신비로운 분위기를 잘 담을 수 있습니다.",
    tips: [
      "새벽 6시 가이드 투어가 퀘찰을 만날 확률이 가장 높습니다. 사전 예약 필수.",
      "연중 비와 안개가 잦으므로 방수 재킷, 방수 가방 커버, 카메라 비닐이 필수입니다.",
      "하루 최대 입장객 수가 제한되어 있으므로 온라인 사전 예약을 추천합니다.",
      "가이드 없이도 트레일 탐방이 가능하지만, 가이드와 함께하면 동물 발견 확률이 크게 높아집니다.",
      "쌍안경을 가져가면 조류 관찰이 훨씬 풍성해집니다.",
      "산타 엘레나 운무림은 방문객이 적어 더 고요한 숲 체험이 가능합니다.",
    ],
  },
};
