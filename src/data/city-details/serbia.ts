import type { CityDetail, AttractionDetail } from "../city-details";

export const serbiaCityDetails: Record<string, CityDetail> = {
  // ===== BELGRADE REGION =====
  "serbia/belgrade-region/belgrade": {
    heroGradient: "from-red-600 to-rose-900",
    description:
      "다뉴브 강과 사바 강이 합류하는 지점에 위치한 세르비아의 수도이자 발칸 반도 최대 도시. '하얀 도시'라는 뜻의 이름처럼 역사적 성채와 현대적 도시가 공존하며, 유럽 최고 수준의 나이트라이프와 리버사이드 클럽(스플라브) 문화가 전 세계 파티 피플을 끌어모읍니다.",
    bestTime: "4~6월, 9~10월 (여름 축제 시즌도 좋음)",
    stayArea: "크네즈 미하일로바 거리 주변 / 도르치올 지구",
    transport: "버스, 트램 / 구시가지 도보",
    districts: [
      {
        name: "크네즈 미하일로바",
        nameEn: "Knez Mihailova",
        description:
          "베오그라드의 메인 보행자 거리로 19세기 건축물, 브랜드 숍, 카페가 늘어선 도심의 심장.",
        highlights: ["크네즈 미하일로바 거리", "공화국 광장", "국립극장", "국립박물관"],
      },
      {
        name: "도르치올",
        nameEn: "Dorćol",
        description:
          "베오그라드에서 가장 오래된 지구로 오스만 시대 유적과 현대적 카페, 갤러리가 공존하는 힙스터 지역.",
        highlights: ["스트리트 아트", "스페셜티 커피숍", "갤러리", "다뉴브 강변"],
      },
      {
        name: "스카다를리야",
        nameEn: "Skadarlija",
        description:
          "베오그라드의 몽마르트르로 불리는 보헤미안 거리. 자갈 골목에 전통 레스토랑(카파나)과 라이브 음악이 어우러집니다.",
        highlights: ["전통 카파나", "라이브 민속음악", "보헤미안 분위기", "세르비아 전통 요리"],
      },
      {
        name: "사비나크/뉴 베오그라드",
        nameEn: "Savamala / New Belgrade",
        description:
          "사바 강변의 창고 지대를 재개발한 문화·나이트라이프 지구. 리버 클럽(스플라브)이 밀집.",
        highlights: ["스플라브(리버 클럽)", "미크서 하우스", "베오그라드 워터프론트"],
      },
    ],
    attractions: [
      {
        name: "칼레메그단 요새",
        nameEn: "Kalemegdan Fortress",
        description:
          "다뉴브 강과 사바 강이 합류하는 지점에 위치한 고대 요새로 베오그라드의 상징. 공원, 박물관, 전망대가 있습니다.",
        category: "역사",
        tip: "일몰 시간에 방문하면 강 합류 지점의 황금빛 풍경이 환상적입니다.",
      },
      {
        name: "성 사바 대성당",
        nameEn: "Church of Saint Sava",
        description:
          "세계에서 가장 큰 정교회 성당 중 하나로 높이 79m의 거대한 돔이 인상적입니다. 내부 금색 모자이크가 장관입니다.",
        category: "종교",
        tip: "지하 예배당의 금색 모자이크를 반드시 관람하세요. 무료 입장입니다.",
      },
      {
        name: "크네즈 미하일로바 거리",
        nameEn: "Knez Mihailova Street",
        description:
          "베오그라드의 메인 보행자 전용 거리로 19세기 유럽풍 건축물, 카페, 상점이 늘어서 있습니다.",
        category: "거리",
      },
      {
        name: "스카다를리야 거리",
        nameEn: "Skadarlija Street",
        description:
          "19세기 보헤미안 거리로 자갈 골목에 전통 세르비아 레스토랑(카파나)과 라이브 민속 음악이 어우러집니다.",
        category: "거리",
        tip: "저녁에 방문하면 라이브 밴드가 테이블 사이를 돌며 세르비아 전통 음악을 연주합니다.",
      },
      {
        name: "니콜라 테슬라 박물관",
        nameEn: "Nikola Tesla Museum",
        description:
          "세르비아 출신 천재 발명가 니콜라 테슬라의 유품, 발명품, 문서를 전시하는 박물관. 번개 시연이 하이라이트.",
        category: "박물관",
        tip: "영어 가이드 투어 시간에 맞춰 방문하면 번개 시연을 볼 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "노비사드",
        nameEn: "Novi Sad",
        description: "다뉴브 강변의 문화 수도로 페트로바라딘 요새와 EXIT 페스티벌의 도시.",
        travelTime: "버스/열차 약 1.5시간",
        gradient: "from-violet-400 to-purple-700",
      },
      {
        name: "스메데레보 요새",
        nameEn: "Smederevo Fortress",
        description: "다뉴브 강변에 위치한 유럽 최대 규모의 평지 요새. 중세 세르비아의 마지막 수도.",
        travelTime: "버스 약 1시간",
        gradient: "from-amber-500 to-stone-700",
      },
    ],
    localFood: [
      { name: "체바프치치", description: "다진 고기를 손가락 크기로 성형해 숯불에 구운 발칸의 소울 푸드. 레프냐(빵)와 양파, 카이막과 함께.", emoji: "🥙" },
      { name: "플레스카비차", description: "거대한 세르비아식 미트 패티 버거로 카이막 치즈를 올려 먹습니다.", emoji: "🍔" },
      { name: "라키야", description: "자두(슬리보비차) 또는 과일로 만든 세르비아 전통 증류주. 식전에 반드시 한 잔.", emoji: "🥃" },
      { name: "카라조르제바 슈니첼라", description: "카이막을 넣고 말아 튀긴 세르비아식 슈니첼, 타르타르 소스와 함께.", emoji: "🥩" },
    ],
    tips: [
      "베오그라드 나이트라이프는 유럽 최고 수준입니다. 사바 강변 스플라브(플로팅 클럽)는 필수 체험.",
      "세르비아 화폐는 디나르(RSD)이며, 유로는 일부 관광지에서만 통용됩니다.",
      "스카다를리야에서 저녁 식사 시 라이브 음악 밴드에 팁을 주는 것이 관례입니다.",
      "택시는 미터기 사용을 확인하거나 Car:Go 앱을 사용하세요.",
      "베오그라드에서 노비사드까지 열차가 자주 운행하며, 세르비아 철도 앱으로 예매 가능합니다.",
    ],
  },
  // ===== VOJVODINA =====
  "serbia/vojvodina/novi-sad": {
    heroGradient: "from-violet-500 to-purple-800",
    description:
      "세르비아 제2의 도시이자 '세르비아의 아테네'로 불리는 문화 수도. 다뉴브 강 건너편의 거대한 페트로바라딘 요새와 아기자기한 구시가지가 매력적이며, 매년 7월에는 세계 4대 음악 페스티벌 중 하나인 EXIT 페스티벌이 요새에서 개최됩니다. 2022년 유럽 문화 수도로 선정되었습니다.",
    bestTime: "4~10월 (7월 EXIT 페스티벌)",
    stayArea: "자유의 광장(트르그 슬로보데) 주변",
    transport: "시내버스 / 도보 (구시가지 컴팩트)",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town",
        description:
          "자유의 광장을 중심으로 오스트리아-헝가리 시대 건축물, 카페, 레스토랑이 밀집한 노비사드의 심장.",
        highlights: ["자유의 광장", "시청사", "자유의 대성당", "즈마이 요비나 거리"],
      },
      {
        name: "페트로바라딘",
        nameEn: "Petrovaradin",
        description:
          "다뉴브 강 건너편에 위치한 요새 지구. 거대한 페트로바라딘 요새와 예술가 아틀리에, 갤러리가 있는 지역.",
        highlights: ["페트로바라딘 요새", "시계탑", "지하 터널", "예술가 마을"],
      },
    ],
    attractions: [
      {
        name: "페트로바라딘 요새",
        nameEn: "Petrovaradin Fortress",
        description:
          "다뉴브 강변에 위치한 유럽 최대 규모의 요새 중 하나로 '다뉴브의 지브롤터'로 불립니다. 지하 16km 터널과 시계탑이 명물.",
        category: "역사",
        tip: "시계탑의 시침과 분침이 바뀌어 있어 멀리서도 시간을 읽을 수 있게 한 독특한 설계입니다.",
      },
      {
        name: "자유의 광장",
        nameEn: "Liberty Square (Trg Slobode)",
        description:
          "노비사드의 중앙 광장으로 시청사와 대성당이 마주 보고 있으며, 카페와 레스토랑이 둘러싸고 있습니다.",
        category: "광장",
      },
      {
        name: "즈마이 요비나 거리",
        nameEn: "Zmaj Jovina Street",
        description:
          "구시가지의 보행자 전용 거리로 카페, 아이스크림 가게, 부티크가 늘어선 노비사드의 메인 산책로.",
        category: "거리",
        tip: "거리 끝에서 다뉴브 강변으로 이어지며, 석양이 아름답습니다.",
      },
      {
        name: "노비사드 시나고그",
        nameEn: "Novi Sad Synagogue",
        description:
          "1909년 건설된 헝가리 아르누보 양식의 시나고그로 현재 콘서트홀과 전시 공간으로 사용됩니다.",
        category: "역사",
      },
    ],
    dayTrips: [
      {
        name: "스렘스키 카를로브치",
        nameEn: "Sremski Karlovci",
        description: "프루슈카 고라 산기슭의 와인 마을. 바로크 건축과 와이너리 투어가 유명합니다.",
        travelTime: "버스 약 20분",
        gradient: "from-rose-400 to-red-700",
      },
      {
        name: "프루슈카 고라 국립공원",
        nameEn: "Fruška Gora National Park",
        description: "세르비아의 '성스러운 산'으로 16개 정교회 수도원이 산재한 국립공원. 하이킹과 수도원 탐방.",
        travelTime: "차량 약 30분",
        gradient: "from-green-500 to-emerald-800",
      },
    ],
    localFood: [
      { name: "체바프치치", description: "세르비아 전역에서 사랑받는 숯불 고기 꼬치. 카이막과 레프냐 빵과 함께.", emoji: "🥙" },
      { name: "프루슈카 고라 와인", description: "프루슈카 고라 산기슭 와이너리의 리슬링, 그라세비나 등 화이트 와인이 유명.", emoji: "🍷" },
      { name: "피츠알레", description: "세르비아식 피자·파이로 스트리트 푸드의 대표격.", emoji: "🍕" },
    ],
    tips: [
      "EXIT 페스티벌(7월)은 페트로바라딘 요새에서 4일간 개최되며, 사전 티켓 구매가 필수입니다.",
      "페트로바라딘 요새 지하 터널 투어는 가이드 동반으로만 가능하며, 요새 입구에서 예약합니다.",
      "다뉴브 강변 '슈트란드(Štrand)' 해변은 여름에 현지인들의 피서지로 무료입니다.",
      "베오그라드에서 열차로 약 1.5시간이며, 당일치기 여행으로도 충분합니다.",
    ],
  },
};

export const serbiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BELGRADE =====
  "serbia/belgrade-region/belgrade/kalemegdan-fortress": {
    heroGradient: "from-red-600 to-rose-900",
    description:
      "다뉴브 강과 사바 강이 합류하는 전략적 지점에 자리한 고대 요새로 2,000년 이상의 역사를 품고 있습니다. 현재는 넓은 공원으로 조성되어 베오그라드 시민들의 휴식처이자 관광 명소입니다. 요새 내에 군사 박물관, 로마 우물, 전시관, 동물원이 있습니다.",
    history:
      "켈트족, 로마, 비잔틴, 오스만, 오스트리아 등 수많은 세력이 115번 이상 전투를 벌인 유럽에서 가장 많이 공격받은 요새입니다. 현재 모습은 주로 18세기 오스트리아와 오스만 시대의 것입니다.",
    visitInfo: {
      hours: "공원 24시간 / 군사 박물관 10:00~17:00 (월요일 휴무)",
      admission: "공원 무료 / 군사 박물관 200 RSD (약 €2)",
      address: "Kalemegdan Park, 11000 Belgrade",
    },
    highlights: [
      "다뉴브·사바 강 합류 지점 전망 (포베드닉 기념비)",
      "포베드닉(승리자) 기념비 - 베오그라드의 상징",
      "군사 박물관 (야외 전차·대포 전시 포함)",
      "로마 우물과 중세 지하 통로",
    ],
    nearbyAttractions: ["크네즈 미하일로바 거리", "도르치올 지구", "국립박물관", "사바 강변 스플라브"],
    photoTips:
      "포베드닉 기념비 앞에서 두 강의 합류 지점을 배경으로 찍는 사진이 베오그라드의 상징적 이미지입니다. 일몰 시간이 최고.",
    tips: [
      "공원 자체는 24시간 개방이며 무료이지만, 내부 박물관은 별도 입장료가 있습니다.",
      "일몰 시간에 포베드닉 기념비 주변에서 바라보는 강 풍경이 환상적입니다.",
      "크네즈 미하일로바 거리 끝에서 바로 연결되어 도보 관광 코스로 자연스럽습니다.",
      "여름 저녁에는 공원에서 야외 공연과 전시가 열리기도 합니다.",
    ],
  },
  // ===== NOVI SAD =====
  "serbia/vojvodina/novi-sad/petrovaradin-fortress": {
    heroGradient: "from-violet-500 to-purple-800",
    description:
      "다뉴브 강 오른쪽 암석 위에 세워진 유럽 최대 규모의 요새 중 하나로 '다뉴브의 지브롤터'라는 별명을 가지고 있습니다. 지상에는 시계탑, 박물관, 예술가 아틀리에가 있고, 지하에는 총 길이 16km에 달하는 터널 미로가 펼쳐져 있습니다. 매년 7월 EXIT 뮤직 페스티벌이 요새 내에서 개최됩니다.",
    history:
      "현재의 요새는 오스트리아 합스부르크 제국이 오스만 제국에 대항하기 위해 1692~1780년에 88년에 걸쳐 건설했습니다. 최대 1만 명의 병사를 수용할 수 있었으며, 지하 터널은 전략적 방어 목적으로 만들어졌습니다.",
    visitInfo: {
      hours: "요새 공원 24시간 / 시계탑·박물관 09:00~17:00",
      admission: "요새 무료 / 지하 터널 투어 400 RSD (약 €3.50)",
      address: "Petrovaradin Fortress, 21131 Novi Sad",
      website: "https://www.petrovaradinfortress.com",
    },
    highlights: [
      "시침과 분침이 바뀐 독특한 시계탑",
      "16km 지하 터널 가이드 투어",
      "요새에서 내려다보는 다뉴브 강과 노비사드 시가지 파노라마",
      "EXIT 뮤직 페스티벌 (매년 7월)",
      "예술가 아틀리에와 갤러리",
    ],
    nearbyAttractions: ["노비사드 구시가지", "다뉴브 강변 슈트란드 해변", "스렘스키 카를로브치"],
    photoTips:
      "시계탑과 다뉴브 강을 함께 담는 앵글이 가장 인기 있습니다. 맞은편 노비사드 시가지에서 요새 전체를 조망하는 사진도 추천합니다.",
    tips: [
      "시계탑의 시침과 분침이 바뀌어 있어 멀리서도 시간을 읽을 수 있게 한 독특한 설계를 확인해보세요.",
      "지하 터널 투어는 가이드 동반으로만 가능하며, 시간을 맞춰 방문해야 합니다.",
      "EXIT 페스티벌 기간(7월)에는 노비사드 숙소가 매우 빨리 찬므로 사전 예약이 필수입니다.",
      "요새 내 카페에서 다뉴브 강을 바라보며 커피를 마시는 것도 좋은 경험입니다.",
    ],
  },
  "serbia/belgrade-region/belgrade/church-of-saint-sava": {
    heroGradient: "from-sky-500 to-indigo-800",
    description:
      "세계에서 가장 큰 정교회 성당 중 하나로 이스탄불의 아야 소피아를 모델로 설계되었습니다. 높이 79m의 거대한 돔 아래 금색 모자이크로 장식된 내부가 압도적인 장관을 이루며, 특히 지하 예배당의 금빛 모자이크는 발칸 반도 최대 규모입니다.",
    history:
      "1935년 착공하여 전쟁과 공산주의 시대의 중단을 거쳐 2021년 내부 장식이 거의 완성되었습니다. 세르비아 정교회 초대 대주교 성 사바의 유해가 1595년 오스만에 의해 불태워진 장소에 세워졌습니다.",
    visitInfo: {
      hours: "07:00~20:00 (매일)",
      admission: "무료",
      address: "Krušedolska 2a, 11000 Belgrade",
      website: "https://hramsvetegsave.rs",
    },
    highlights: [
      "높이 79m 거대 돔과 금색 모자이크 내부",
      "지하 예배당의 금빛 모자이크 (발칸 최대 규모)",
      "외부에서 바라보는 네오비잔틴 양식 전체 조망",
      "야간 조명에 빛나는 성당",
    ],
    nearbyAttractions: ["니콜라 테슬라 박물관", "타슈마이단 공원", "스카다를리야 거리"],
    photoTips:
      "정면에서 성당 전체를 담는 클래식한 구도와 내부 돔 아래에서 올려다보는 모자이크 사진이 압권입니다.",
    tips: [
      "지하 예배당의 금색 모자이크는 반드시 관람하세요. 지상 성당보다 더 인상적이라는 평이 많습니다.",
      "무료 입장이며, 복장 규정은 느슨하지만 지나치게 노출된 복장은 삼가세요.",
      "야간에 조명이 켜진 성당 외관이 매우 아름다우므로 저녁 산책 코스에 포함하세요.",
      "니콜라 테슬라 박물관과 도보 10분 거리이므로 함께 방문하기 좋습니다.",
    ],
  },
};
