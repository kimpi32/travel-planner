import type { CityDetail, AttractionDetail } from "../city-details";

export const madagascarCityDetails: Record<string, CityDetail> = {
  // ===== NATIONAL PARKS (ANTANANARIVO) =====
  "madagascar/national-parks/antananarivo": {
    heroGradient: "from-red-600 to-rose-800",
    description: "마다가스카르의 수도이자 고원지대(해발 1,276m)에 위치한 '천의 전사의 도시'라는 뜻의 안타나나리보. 말라가시 왕국의 역사가 서린 루오바 왕궁, 프랑스 식민지 시대의 유럽풍 건축물, 형형색색의 중앙 시장이 어우러진 독특한 도시입니다. 여우원숭이(레무르) 탐방의 베이스캠프이기도 합니다.",
    bestTime: "4~11월 (건기, 쾌적한 날씨)",
    stayArea: "이소라카 / 아날라켈리 / 상위 안타나나리보",
    transport: "택시-브루스(미니버스), 택시, 도보",
    districts: [
      { name: "상위 도시(오트빌)", nameEn: "Upper Town (Haute Ville)", description: "언덕 꼭대기에 위치한 역사적 중심 지구. 루오바 왕궁, 대성당, 총리 궁전 등 말라가시 왕국의 유적이 밀집.", highlights: ["루오바 왕궁", "안다피아바라트라 궁전", "마하마시나 경기장 조망"] },
      { name: "아날라켈리", nameEn: "Analakely", description: "안타나나리보의 상업 중심지. 독립 대로(Avenue de l'Independance)를 따라 시장, 상점, 레스토랑이 늘어선 활기찬 지구.", highlights: ["독립 대로", "아날라켈리 시장", "졸라 마켓"] },
      { name: "이소라카", nameEn: "Isoraka", description: "외국인과 현지 중산층이 거주하는 주거·상업 혼합 지구. 좋은 레스토랑과 카페가 밀집해 여행자 숙소로 인기.", highlights: ["현대 레스토랑", "아트 갤러리", "부티크 숍"] },
    ],
    attractions: [
      { name: "루오바 왕궁", nameEn: "Rova of Antananarivo", description: "17세기부터 말라가시 왕국의 왕과 여왕이 거주한 언덕 위 왕궁 단지. 안타나나리보 전체를 내려다보는 파노라마 조망이 일품이며 2020년 복원 후 재개장.", category: "왕궁", tip: "왕궁 테라스에서 안타나나리보 시내와 주변 논밭의 파노라마 전경을 감상할 수 있습니다." },
      { name: "안드리아메나 중앙 시장", nameEn: "Analakely Market", description: "안타나나리보 최대 시장으로 신선한 과일, 향신료, 바닐라, 라피아 공예품 등 마다가스카르의 특산물을 한눈에 볼 수 있는 곳.", category: "시장", tip: "소매치기에 주의하고 사진 촬영 전 허가를 구하세요." },
      { name: "렘르스 파크", nameEn: "Lemurs' Park", description: "안타나나리보 외곽의 여우원숭이 보호구역으로 10여 종의 레무르를 가까이서 관찰할 수 있는 반야생 공원. 본격적인 국립공원 방문이 어려운 일정에 적합.", category: "자연공원", tip: "오전이 레무르 활동이 가장 활발한 시간대입니다." },
      { name: "아놉시 호수", nameEn: "Lake Anosy", description: "시내 중심부에 위치한 하트 모양의 인공 호수. 자카란다 나무가 만개하는 10~11월이면 보랏빛으로 물드는 낭만적 산책 명소.", category: "공원" },
    ],
    dayTrips: [
      { name: "안다시베-만타디아 국립공원", nameEn: "Andasibe-Mantadia National Park", description: "세계 최대 레무르인 인드리인드리를 만날 수 있는 열대우림 국립공원. 독특한 울음소리가 숲 전체에 울려 퍼집니다.", travelTime: "차량 약 3~4시간", gradient: "from-green-600 to-emerald-800" },
      { name: "암볼리마니 왕의 언덕", nameEn: "Ambohimanga Royal Hill", description: "유네스코 세계문화유산. 말라가시 왕국의 성지로 원형 성벽과 왕궁이 보존된 신성한 언덕.", travelTime: "차량 약 40분", gradient: "from-blue-500 to-indigo-700" },
    ],
    localFood: [
      { name: "로마자바", description: "돼지고기와 잎채소를 넣어 끓인 마다가스카르 국민 스튜. 쌀밥(고미)과 함께 먹는 가정식의 정수.", emoji: "🍲" },
      { name: "고미(쌀밥)", description: "세계에서 1인당 쌀 소비량이 가장 많은 마다가스카르의 주식. 하루 세 끼 빠지지 않는 필수 음식.", emoji: "🍚" },
      { name: "바닐라 디저트", description: "세계 최고 품질의 마다가스카르산 바닐라로 만든 크림, 푸딩, 아이스크림 등 달콤한 디저트.", emoji: "🍦" },
    ],
    tips: [
      "안타나나리보는 교통 체증이 매우 심합니다. 주요 일정 간 이동 시간을 넉넉하게 잡으세요.",
      "해발 1,276m 고원 도시로 열대 기후임에도 아침저녁은 서늘합니다. 겉옷을 챙기세요.",
      "마다가스카르 현지 화폐(아리아리)를 미리 환전하거나 ATM에서 인출하세요. 카드 결제가 제한적입니다.",
      "택시 이용 시 반드시 출발 전 요금을 협상하세요. 미터기가 없습니다.",
      "파디(fady, 터부)라 불리는 현지 금기 사항을 존중하세요. 가이드에게 미리 확인하면 좋습니다.",
    ],
  },

  // ===== BAOBAB AVENUE (MORONDAVA) =====
  "madagascar/baobab/morondava": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "마다가스카르 서해안의 바오밥 가로수 길(Allée des Baobabs) 관문 도시. 800년 수령의 거대한 바오밥 나무들이 일몰 빛에 황금색 실루엣으로 빛나는 장면은 전 세계 여행자들이 마다가스카르를 찾는 가장 큰 이유입니다. 인근 키린디 숲에서는 다양한 여우원숭이를 관찰할 수 있습니다.",
    bestTime: "5~10월 (건기, 도로 통행 가능)",
    stayArea: "모론다바 시내 해변가 / 바오밥 가로수 길 인근 롯지",
    transport: "4WD 렌터카 필수, 택시-브루스 (시내)",
    districts: [
      { name: "모론다바 시내", nameEn: "Morondava Town", description: "모잠비크 해협에 면한 소박한 해안 도시. 어부 마을과 해변 리조트가 공존하는 바오밥 관광의 베이스캠프.", highlights: ["노시 키하라 해변", "어부 마을", "현지 해산물 레스토랑"] },
      { name: "바오밥 지구", nameEn: "Baobab District", description: "모론다바 북쪽 약 20km에 위치한 바오밥 나무 군집 지역. 가로수 길과 사랑의 바오밥 등 다양한 바오밥 명소가 분포.", highlights: ["바오밥 가로수 길", "사랑의 바오밥", "바오밥 사크레"] },
    ],
    attractions: [
      { name: "바오밥 가로수 길", nameEn: "Avenue of the Baobabs", description: "약 260m 도로 양쪽으로 800년 수령의 거대한 그랑디에 바오밥(Adansonia grandidieri) 20여 그루가 늘어선 세계적 포토 스폿. 일몰 시 황금빛 하늘을 배경으로 한 바오밥 실루엣은 마다가스카르의 아이콘.", category: "자연", tip: "일몰 1시간 전에 도착해 자리를 잡으세요. 일몰 직전 15분간 하늘이 오렌지빛으로 물드는 순간이 최고의 촬영 타이밍입니다." },
      { name: "사랑의 바오밥", nameEn: "Baobab Amoureux", description: "두 그루의 바오밥 나무가 서로 얽혀 하나로 자란 신비로운 자연 조각품. 현지 전설에 따르면 서로 사랑했던 두 연인의 영혼이 바오밥으로 다시 태어난 것이라고 합니다.", category: "자연" },
      { name: "키린디 숲", nameEn: "Kirindy Forest", description: "건조 낙엽수림에 서식하는 다양한 여우원숭이(시파카, 붉은이마레무르 등)와 세계에서 가장 작은 영장류 마담 베르테 쥐여우원숭이를 관찰할 수 있는 생태 관광지.", category: "자연", tip: "야간 투어에서 야행성 여우원숭이와 카멜레온을 더 많이 관찰할 수 있습니다." },
    ],
    dayTrips: [
      { name: "베마라하 팅기 국립공원", nameEn: "Tsingy de Bemaraha National Park", description: "유네스코 세계자연유산. 날카로운 석회암 침봉(팅기)이 숲을 이루는 초현실적 풍경.", travelTime: "4WD 차량 약 7~10시간 (도로 사정에 따라)", gradient: "from-gray-500 to-stone-700" },
    ],
    localFood: [
      { name: "해산물 모둠", description: "모잠비크 해협의 신선한 새우, 랍스터, 생선을 숯불에 구운 모론다바 해안의 특선 요리.", emoji: "🦐" },
      { name: "라비토토", description: "카사바 잎을 잘게 다져 돼지고기와 코코넛 밀크로 조린 마다가스카르 전통 요리.", emoji: "🥘" },
      { name: "바오밥 주스", description: "바오밥 열매로 만든 새콤달콤한 음료. 비타민 C가 풍부하고 독특한 맛이 특징.", emoji: "🧃" },
    ],
    tips: [
      "바오밥 가로수 길은 일몰 시간에 방문하는 것이 가장 아름답습니다. 일몰 시간을 미리 확인하세요.",
      "우기(12~3월)에는 도로가 진흙으로 막혀 모론다바 접근이 매우 어려울 수 있습니다. 건기에 방문하세요.",
      "안타나나리보에서 모론다바까지 국내선 항공편(약 1시간)이 가장 편리합니다. 육로는 10시간 이상 소요됩니다.",
      "현지 가이드 고용이 필수적입니다. 키린디 숲 등 야생 관찰 시 전문 가이드 없이는 동물을 찾기 어렵습니다.",
      "모기 퇴치제와 말라리아 예방약을 반드시 준비하세요.",
    ],
  },
};

export const madagascarAttractionDetails: Record<string, AttractionDetail> = {
  "madagascar/baobab/morondava/avenue-of-the-baobabs": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "마다가스카르에서 가장 상징적인 풍경이자 세계에서 가장 아름다운 자연 포토 스폿 중 하나. 약 260m 길이의 비포장 도로 양쪽으로 800년 수령, 높이 30m의 거대한 그랑디에 바오밥(Adansonia grandidieri) 20여 그루가 하늘을 향해 솟아있습니다. 일몰 시 황금빛과 주황빛으로 물든 하늘을 배경으로 바오밥의 거대한 실루엣이 만드는 장면은 경이 그 자체입니다.",
    history: "원래 울창한 열대림의 일부였으나 수백 년에 걸친 농지 개간으로 주변 숲이 사라지고 바오밥 나무만 남았습니다. 바오밥은 수분 저장 능력 덕분에 건조한 환경에서도 수백 년을 생존합니다. 2007년 마다가스카르 환경부가 보호 구역으로 지정했으며, 현재 유네스코 잠정 목록에 등재되어 세계유산 등재를 추진 중입니다.",
    visitInfo: {
      hours: "연중 개방 (일출·일몰 시간 방문 권장)",
      admission: "약 10,000아리아리 (약 3,000원)",
      address: "RN8, Morondava District, Menabe Region",
    },
    highlights: [
      "일몰 시 바오밥 나무의 거대한 실루엣과 황금빛 하늘의 조합",
      "높이 30m, 수령 800년의 그랑디에 바오밥 나무의 압도적 규모",
      "현지 주민들의 우마차와 바오밥이 어우러진 마다가스카르 전원 풍경",
      "일출 시 안개 속 바오밥의 신비로운 분위기",
    ],
    nearbyAttractions: ["사랑의 바오밥", "키린디 숲", "모론다바 해변"],
    photoTips: "일몰 1시간 전 도착해 남쪽 도로 끝에서 북쪽을 향해 촬영하면 석양을 배경으로 완벽한 실루엣 사진을 얻을 수 있습니다. 현지 소 우마차가 지나갈 때를 포착하면 더욱 인상적인 사진이 됩니다.",
    tips: [
      "일몰 시간에 가장 아름답습니다. 최소 일몰 1시간 전에 도착해 자리를 잡으세요.",
      "우기(12~3월)에는 도로 상태가 매우 나빠 접근이 불가능할 수 있습니다.",
      "입장료를 현금(아리아리)으로 준비하세요. 카드 결제가 불가합니다.",
      "주변에 화장실이나 매점이 없으므로 물과 간식을 미리 준비하세요.",
    ],
  },

  "madagascar/national-parks/antananarivo/rova-of-antananarivo": {
    heroGradient: "from-red-600 to-rose-800",
    description: "안타나나리보 최고 지점(해발 1,468m)에 자리잡은 말라가시 왕국의 왕궁 단지. 17세기 안드리안자카 왕이 설립한 이래 메리나 왕조의 왕들과 여왕들이 거주한 이 궁전은 1995년 화재로 큰 피해를 입었으나 복원을 거쳐 마다가스카르 역사의 상징으로 다시 태어났습니다. 왕궁 테라스에서 바라보는 안타나나리보 시내와 주변 논밭의 파노라마 전경은 도시 최고의 조망입니다.",
    history: "1610년 안드리안자카 왕이 이 언덕을 수도로 삼은 이래 메리나 왕조의 왕궁으로 사용되었습니다. 라나발로나 1세 여왕 시대(1828~1861)에 프랑스 건축가 장 라보르드가 석조 궁전으로 재건축했습니다. 1995년 대화재로 대부분 소실되었으나 2020년대에 대대적인 복원 사업이 진행되었습니다.",
    visitInfo: {
      hours: "09:00~17:00 (화~일, 월요일 휴관)",
      admission: "외국인 10,000아리아리 (약 3,000원)",
      address: "Rova, Haute Ville, Antananarivo",
    },
    highlights: [
      "안타나나리보 도시 전체를 내려다보는 360도 파노라마 조망",
      "복원된 메리나 왕조 왕궁 건축물과 내부 전시",
      "라나발로나 여왕의 통치 역사와 마다가스카르 왕국 유물",
      "언덕 위 정원에서 바라보는 일몰 풍경",
    ],
    nearbyAttractions: ["안다피아바라트라 궁전", "아날라켈리 시장", "아놉시 호수"],
    photoTips: "왕궁 테라스에서 도시를 내려다보는 파노라마 사진이 가장 좋습니다. 오후 늦은 시간 황금빛 조명이 건물에 비칠 때 촬영하면 가장 아름답습니다.",
    tips: [
      "왕궁은 도시 최고점에 위치해 오르막길이 가파릅니다. 편안한 신발을 착용하세요.",
      "월요일은 휴관이니 일정 계획 시 주의하세요.",
      "현지 가이드를 고용하면 말라가시 왕국의 흥미로운 역사를 상세히 들을 수 있습니다.",
      "왕궁 주변 골목은 미로처럼 복잡합니다. GPS나 지도 앱을 준비하세요.",
    ],
  },
};
