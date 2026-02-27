import type { CityDetail, AttractionDetail } from "../city-details";

export const denmarkCityDetails: Record<string, CityDetail> = {
  // ===== COPENHAGEN REGION =====
  "denmark/copenhagen-region/copenhagen": {
    heroGradient: "from-sky-500 to-blue-800",
    description:
      "스칸디나비아의 매력을 고스란히 담은 덴마크의 수도. 알록달록한 뉘하운 운하, 세계에서 가장 오래된 놀이공원 티볼리, 자유도시 크리스티아니아 등 전통과 현대가 조화를 이루는 북유럽 대표 도시입니다.",
    bestTime: "5~9월 (6~8월 백야에 가까운 긴 낮, 여름 축제 다수)",
    stayArea: "시청 광장 / 뉘하운 / 베스테르브로 주변",
    transport: "메트로, S-트레인, 버스, 시티 바이크 (코펜하겐 카드 추천)",
    districts: [
      {
        name: "인드레 뷔",
        nameEn: "Indre By",
        description:
          "코펜하겐 구시가지 중심부. 스트뢰에 보행자 거리, 시청 광장, 라운 타워 등 주요 명소가 밀집한 핵심 지구.",
        highlights: ["스트뢰에 거리", "시청 광장", "라운 타워", "뉘토르브 광장"],
      },
      {
        name: "뉘하운 / 크리스티안스하운",
        nameEn: "Nyhavn / Christianshavn",
        description:
          "알록달록한 운하변 건물이 상징적인 뉘하운과 자유도시 크리스티아니아가 있는 크리스티안스하운 지구.",
        highlights: [
          "뉘하운 운하",
          "크리스티아니아",
          "구세주 교회 나선 첨탑",
          "운하 보트 투어",
        ],
      },
      {
        name: "베스테르브로",
        nameEn: "Vesterbro",
        description:
          "트렌디한 카페, 레스토랑, 빈티지 숍이 모여 있는 힙한 지구. 미트패킹 디스트릭트가 대표 명소.",
        highlights: [
          "미트패킹 디스트릭트",
          "티볼리 가든",
          "칼스버그 박물관",
        ],
      },
    ],
    attractions: [
      {
        name: "티볼리 가든",
        nameEn: "Tivoli Gardens",
        description:
          "1843년 개장한 세계에서 가장 오래된 놀이공원 중 하나. 아름다운 정원, 놀이기구, 야간 조명이 동화 같은 분위기를 연출합니다.",
        category: "테마파크",
        tip: "야간에 방문하면 수만 개의 조명이 켜져 더욱 환상적입니다.",
      },
      {
        name: "뉘하운",
        nameEn: "Nyhavn",
        description:
          "17세기에 조성된 코펜하겐의 상징적인 운하. 알록달록한 건물과 정박한 목선이 어우러진 포토 스폿으로 안데르센이 살았던 집도 있습니다.",
        category: "랜드마크",
        tip: "운하 남쪽(짝수 번호) 편이 햇빛이 잘 들어 카페 야외 좌석이 인기입니다.",
      },
      {
        name: "인어공주 동상",
        nameEn: "Little Mermaid",
        description:
          "1913년 안데르센 동화를 기념하여 세워진 코펜하겐의 상징. 랑엘리니에 해변 바위 위에 앉아 있는 소박하지만 사랑받는 동상입니다.",
        category: "동상",
        tip: "이른 아침에 방문하면 관광객 없이 조용히 감상할 수 있습니다.",
      },
      {
        name: "아말리엔보르 궁전",
        nameEn: "Amalienborg Palace",
        description:
          "덴마크 왕실의 겨울 궁전. 4개의 로코코 양식 건물이 팔각형 광장을 둘러싸고 있으며 매일 정오 근위병 교대식이 열립니다.",
        category: "궁전",
        tip: "정오 근위병 교대식은 약 30분 소요되며 무료로 관람 가능합니다.",
      },
      {
        name: "크리스티아니아",
        nameEn: "Freetown Christiania",
        description:
          "1971년 설립된 자치 공동체. 예술적 벽화와 독특한 건축물, 자유로운 분위기가 코펜하겐의 대안 문화를 대표합니다.",
        category: "지구",
      },
      {
        name: "라운 타워",
        nameEn: "Round Tower",
        description:
          "1642년 크리스티안 4세가 세운 유럽에서 가장 오래된 천문대. 나선형 경사로를 올라가면 구시가지 파노라마를 감상할 수 있습니다.",
        category: "전망대",
        tip: "나선형 경사로는 계단이 아니라 경사면이므로 유모차도 올라갈 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "헬싱외르",
        nameEn: "Helsingor",
        description:
          "셰익스피어 '햄릿'의 무대 크론보르 성이 있는 해안 도시. 스웨덴 헬싱보리와 마주보고 있습니다.",
        travelTime: "기차 약 45분",
        gradient: "from-teal-500 to-cyan-800",
      },
      {
        name: "로스킬데",
        nameEn: "Roskilde",
        description:
          "덴마크 왕들의 묘소인 로스킬데 대성당(유네스코)과 바이킹 선박 박물관이 있는 고도.",
        travelTime: "기차 약 25분",
        gradient: "from-amber-500 to-orange-700",
      },
    ],
    localFood: [
      {
        name: "스뫼레브뢰드",
        description:
          "호밀빵 위에 생선, 고기, 치즈 등 다양한 토핑을 올린 덴마크식 오픈 샌드위치.",
        emoji: "🥪",
      },
      {
        name: "플레스케스타이",
        description:
          "바삭한 껍질을 살린 덴마크식 통삼겹 로스트. 적양배추 절임과 함께 제공.",
        emoji: "🥩",
      },
      {
        name: "위너브뢰드",
        description:
          "겹겹이 쌓인 버터 페이스트리로 '데니시 페이스트리'의 원조. 커피와 함께 필수.",
        emoji: "🥐",
      },
    ],
    tips: [
      "코펜하겐 카드를 구매하면 대중교통 무제한 + 주요 관광지 무료 입장이 가능합니다.",
      "자전거 도시답게 시티 바이크(Bycyklen)를 대여하면 효율적으로 관광할 수 있습니다.",
      "물가가 비싸므로 슈퍼마켓(Netto, Irma)에서 식재료를 사서 절약하세요.",
      "현금 없이 카드만으로 대부분 결제 가능합니다 (DKK 또는 외국 카드).",
    ],
  },

  // ===== HELSINGOR =====
  "denmark/copenhagen-region/helsingor": {
    heroGradient: "from-teal-500 to-cyan-800",
    description:
      "셰익스피어의 '햄릿' 무대로 유명한 크론보르 성이 자리한 해안 도시. 외레순 해협 건너편 스웨덴이 보이는 전략적 요충지로, 중세부터 해양 무역의 중심지였습니다.",
    bestTime: "5~9월 (여름 셰익스피어 축제)",
    stayArea: "구시가지 / 크론보르 성 주변",
    transport: "코펜하겐에서 기차 약 45분, 시내는 도보 이동",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town",
        description:
          "중세 거리와 컬러풀한 목조 건물이 남아 있는 역사 지구. 카르멜리터 수도원과 성 올라이 교회가 위치.",
        highlights: [
          "스텐가데 거리",
          "성 올라이 교회",
          "카르멜리터 수도원",
          "항구 산책로",
        ],
      },
    ],
    attractions: [
      {
        name: "크론보르 성",
        nameEn: "Kronborg Castle",
        description:
          "유네스코 세계유산이자 셰익스피어 '햄릿'의 무대. 르네상스 양식의 웅장한 해안 성곽으로 덴마크의 상징적인 고성입니다.",
        category: "고성",
        tip: "여름에는 성 안에서 셰익스피어 연극 공연이 열립니다.",
      },
      {
        name: "덴마크 해양박물관",
        nameEn: "M/S Maritime Museum of Denmark",
        description:
          "옛 건선거(드라이 도크)를 활용한 지하 박물관. 비야게 잉겔스(BIG)가 설계한 혁신적 건축으로 유명합니다.",
        category: "박물관",
      },
      {
        name: "성 올라이 교회",
        nameEn: "St. Olai Church",
        description:
          "15세기에 세워진 헬싱외르의 주요 교회. 고딕 양식의 붉은 벽돌 건축이 인상적입니다.",
        category: "교회",
      },
    ],
    dayTrips: [
      {
        name: "코펜하겐",
        nameEn: "Copenhagen",
        description:
          "덴마크의 수도. 티볼리, 뉘하운, 인어공주 동상 등 볼거리가 풍부한 북유럽 대표 도시.",
        travelTime: "기차 약 45분",
        gradient: "from-sky-500 to-blue-800",
      },
      {
        name: "헬싱보리 (스웨덴)",
        nameEn: "Helsingborg",
        description:
          "외레순 해협 건너편 스웨덴 도시. 페리로 불과 20분이면 다른 나라를 경험할 수 있습니다.",
        travelTime: "페리 약 20분",
        gradient: "from-yellow-400 to-blue-600",
      },
    ],
    localFood: [
      {
        name: "스틸드 실드",
        description:
          "다양한 방식으로 절인 청어 요리. 덴마크 전통 점심의 핵심 메뉴.",
        emoji: "🐟",
      },
      {
        name: "뢰드그뢰드 메드 플뢰데",
        description:
          "딸기, 라즈베리 등 붉은 과일 콩포트에 생크림을 곁들인 덴마크 전통 디저트.",
        emoji: "🍓",
      },
    ],
    tips: [
      "코펜하겐에서 당일치기로 충분히 다녀올 수 있습니다.",
      "크론보르 성과 해양박물관 콤비 티켓이 별도 구매보다 저렴합니다.",
      "헬싱보리(스웨덴)행 페리가 20분마다 출발하니 부담 없이 다녀오세요.",
    ],
  },

  // ===== JUTLAND =====
  "denmark/jutland/aarhus": {
    heroGradient: "from-rose-500 to-red-800",
    description:
      "덴마크 제2의 도시이자 유틀란트 반도의 문화 중심지. 2017년 유럽 문화 수도로 선정되었으며, ARoS 미술관의 무지개 파노라마, 덴 감레 뷔(야외 박물관), 활기찬 라틴 쿼터가 젊고 역동적인 도시 분위기를 만들어냅니다.",
    bestTime: "5~9월 (8월 오르후스 축제)",
    stayArea: "라틴 쿼터 / 중앙역 주변",
    transport: "코펜하겐에서 기차 약 3시간, 시내는 버스 및 도보",
    districts: [
      {
        name: "라틴 쿼터",
        nameEn: "Latin Quarter",
        description:
          "오르후스의 구시가지. 좁은 자갈길, 부티크 숍, 카페가 밀집한 가장 분위기 있는 지구.",
        highlights: [
          "오르후스 대성당",
          "뫼세고르 박물관",
          "자갈길 카페 거리",
        ],
      },
      {
        name: "오르후스 외",
        nameEn: "Aarhus O",
        description:
          "구 항구 지역을 재개발한 현대적 워터프런트. 아이스버그 주거단지 등 혁신적 건축물이 돋보이는 신흥 지구.",
        highlights: [
          "아이스버그 주거단지",
          "도크란트 빌딩",
          "항구 산책로",
        ],
      },
    ],
    attractions: [
      {
        name: "ARoS 미술관",
        nameEn: "ARoS Art Museum",
        description:
          "옥상의 '무지개 파노라마(Your Rainbow Panorama)'로 유명한 북유럽 최대 규모 미술관. 올라퍼 엘리아슨의 설치 작품을 통해 무지개빛으로 오르후스 시내를 감상할 수 있습니다.",
        category: "미술관",
        tip: "무지개 파노라마는 일몰 시간대에 방문하면 가장 아름답습니다.",
      },
      {
        name: "덴 감레 뷔",
        nameEn: "Den Gamle By",
        description:
          "덴마크 각지에서 이축한 75개 이상의 역사적 건물로 구성된 야외 박물관. 16세기부터 1970년대까지 덴마크 생활상을 재현합니다.",
        category: "박물관",
        tip: "시간대별로 코스튬을 입은 배우들의 퍼포먼스가 있으니 일정표를 확인하세요.",
      },
      {
        name: "오르후스 대성당",
        nameEn: "Aarhus Cathedral",
        description:
          "덴마크에서 가장 긴 성당(93m). 15세기 프레스코화와 높이 솟은 고딕 첨탑이 인상적입니다.",
        category: "성당",
      },
      {
        name: "뫼세고르 박물관",
        nameEn: "Moesgaard Museum",
        description:
          "잔디 지붕이 덮인 독특한 건축의 선사시대·바이킹 역사 박물관. 그라우발레 남자(보존된 습지 미라)가 대표 전시물입니다.",
        category: "박물관",
        tip: "잔디 지붕 위로 올라갈 수 있으며 겨울에는 썰매도 탈 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "레고랜드 빌룬",
        nameEn: "Legoland Billund",
        description:
          "전 세계 레고 팬의 성지. 6천만 개 이상의 레고 블록으로 만든 미니랜드가 하이라이트.",
        travelTime: "기차+버스 약 1시간 30분",
        gradient: "from-yellow-400 to-red-600",
      },
      {
        name: "에벨토프트",
        nameEn: "Ebeltoft",
        description:
          "반짝이는 자갈길과 반목조 건물이 남아 있는 유틀란트 동부 해안의 동화 같은 소도시.",
        travelTime: "버스 약 1시간",
        gradient: "from-cyan-400 to-blue-700",
      },
    ],
    localFood: [
      {
        name: "프리카델러",
        description:
          "돼지고기와 양파로 만든 납작한 덴마크식 미트볼. 감자와 함께 제공되는 가정 요리.",
        emoji: "🍖",
      },
      {
        name: "호트도그",
        description:
          "바삭한 소시지에 리무라드 소스, 피클, 생양파를 올린 덴마크식 길거리 핫도그.",
        emoji: "🌭",
      },
      {
        name: "에블레스키버",
        description:
          "둥글게 구운 덴마크 전통 팬케이크 볼. 잼과 슈거 파우더를 곁들여 먹는 간식.",
        emoji: "🍩",
      },
    ],
    tips: [
      "코펜하겐에서 기차로 약 3시간이며 DSB 조기 할인(Orange) 티켓이 저렴합니다.",
      "오르후스 카드를 구매하면 대중교통과 주요 관광지 입장이 포함됩니다.",
      "라틴 쿼터의 카페 거리에서 현지 분위기를 느끼며 휴식하세요.",
      "ARoS 미술관은 화요일이 야간 개장(~22:00)으로 여유롭게 관람 가능합니다.",
    ],
  },

  // ===== LEGOLAND BILLUND =====
  "denmark/jutland/legoland-billund": {
    heroGradient: "from-yellow-400 to-red-600",
    description:
      "전 세계 레고 팬의 성지이자 레고의 발상지. 6천만 개 이상의 레고 블록으로 세계 유명 건축물을 재현한 미니랜드, 50개 이상의 놀이기구, 레고 닌자고 월드 등 온 가족이 즐길 수 있는 테마파크입니다.",
    bestTime: "4~10월 (여름 성수기, 10월 할로윈 이벤트)",
    stayArea: "레고랜드 리조트 호텔 / 빌룬 시내",
    transport: "빌룬 공항에서 셔틀버스, 오르후스에서 기차+버스 약 1시간 30분",
    districts: [
      {
        name: "미니랜드",
        nameEn: "Miniland",
        description:
          "세계 유명 건축물과 도시를 레고 블록으로 정밀하게 재현한 야외 전시 구역. 레고랜드의 핵심.",
        highlights: [
          "레고 미니 코펜하겐",
          "레고 스타워즈 존",
          "레고 자유의 여신상",
        ],
      },
    ],
    attractions: [
      {
        name: "미니랜드",
        nameEn: "Miniland",
        description:
          "6천만 개의 레고 블록으로 세계 유명 도시와 건축물을 축소 재현한 레고랜드의 심장. 움직이는 기차, 배, 비행기가 디테일을 더합니다.",
        category: "테마파크",
        tip: "꼼꼼히 보면 숨겨진 재미있는 디테일이 많으니 천천히 둘러보세요.",
      },
      {
        name: "닌자고 월드",
        nameEn: "NINJAGO World",
        description:
          "레고 닌자고 테마의 4D 다크 라이드. 손동작으로 적을 무찌르는 인터랙티브 어트랙션입니다.",
        category: "놀이기구",
      },
      {
        name: "레고 하우스 (빌룬)",
        nameEn: "LEGO House",
        description:
          "비야게 잉겔스(BIG)가 설계한 체험형 레고 센터. 레고랜드와는 별도 시설로 창의적 레고 놀이 체험이 가능합니다.",
        category: "체험관",
        tip: "레고랜드와 별도 시설이므로 각각 입장권이 필요합니다.",
      },
    ],
    dayTrips: [
      {
        name: "오르후스",
        nameEn: "Aarhus",
        description:
          "덴마크 제2의 도시. ARoS 미술관의 무지개 파노라마와 라틴 쿼터가 매력적.",
        travelTime: "기차+버스 약 1시간 30분",
        gradient: "from-rose-500 to-red-800",
      },
    ],
    localFood: [
      {
        name: "스뫼레브뢰드",
        description:
          "호밀빵 위에 다양한 토핑을 올린 덴마크식 오픈 샌드위치. 어디서든 맛볼 수 있는 국민 음식.",
        emoji: "🥪",
      },
      {
        name: "플뢰데볼러",
        description:
          "초콜릿으로 감싼 크림 볼. 덴마크 어린이와 어른 모두 사랑하는 간식.",
        emoji: "🍫",
      },
    ],
    tips: [
      "레고랜드는 4~10월에만 운영되며 성수기에는 온라인 사전 예약이 필수입니다.",
      "레고 하우스는 연중 개방이므로 겨울에도 방문 가능합니다.",
      "이른 아침 개장 직후 인기 놀이기구를 먼저 타면 대기 시간을 줄일 수 있습니다.",
    ],
  },
};

export const denmarkAttractionDetails: Record<string, AttractionDetail> = {
  // ===== COPENHAGEN ATTRACTIONS =====
  "denmark/copenhagen-region/copenhagen/tivoli-gardens": {
    heroGradient: "from-purple-500 to-indigo-800",
    description:
      "1843년 개장한 세계에서 두 번째로 오래된 놀이공원. 아름다운 정원, 빈티지 놀이기구, 수만 개의 야간 조명이 만들어내는 동화 같은 분위기로 월트 디즈니에게 영감을 준 곳으로도 유명합니다.",
    history:
      "1843년 게오르크 카르스텐센이 크리스티안 8세의 허가를 받아 개장했습니다. '사람들이 즐거우면 정치를 논하지 않는다'는 설득으로 왕의 승인을 얻었다는 일화가 전해집니다. 2차 세계대전 중 나치에 의해 일부 파괴되었으나 시민들이 힘을 모아 재건했습니다.",
    visitInfo: {
      hours: "11:00~22:00 (시즌별 상이, 동절기 할로윈·크리스마스 시즌 한정 개장)",
      admission: "입장권 성인 155 DKK, 3~7세 70 DKK (놀이기구 별도 또는 올인클루시브 티켓)",
      address: "Vesterbrogade 3, 1630 København V",
      website: "https://www.tivoli.dk",
    },
    highlights: [
      "10만 개 이상의 야간 조명이 만드는 환상적인 야경",
      "1914년부터 운행 중인 클래식 롤러코스터",
      "무어풍 극장에서 열리는 판토마임 공연",
      "사계절 테마 이벤트: 할로윈, 크리스마스 마켓",
    ],
    nearbyAttractions: [
      "코펜하겐 시청 광장 (도보 2분)",
      "글립토텍 미술관 (도보 5분)",
      "코펜하겐 중앙역 (도보 3분)",
    ],
    photoTips:
      "야간에 호수에 반사되는 조명이 가장 포토제닉합니다. 파고다 건물과 호수가 함께 나오는 앵글을 추천합니다.",
    tips: [
      "야간 입장이 가능한 저녁 시간대에 방문하면 조명이 켜진 환상적인 분위기를 즐길 수 있습니다.",
      "금요일 밤에는 야외 콘서트가 열리며 입장료에 포함됩니다.",
      "코펜하겐 카드에 티볼리 입장이 포함되어 있습니다 (놀이기구 별도).",
      "크리스마스 시즌(11~12월)의 티볼리도 특별한 매력이 있습니다.",
    ],
  },
  "denmark/copenhagen-region/copenhagen/nyhavn": {
    heroGradient: "from-orange-400 to-red-600",
    description:
      "알록달록한 17~18세기 건물과 역사적인 목선이 정박한 코펜하겐의 가장 상징적인 운하. 한스 크리스티안 안데르센이 20번지, 67번지, 18번지에서 거주하며 작품을 집필했던 곳이기도 합니다.",
    history:
      "1671년 크리스티안 5세의 명으로 굴착된 운하로, 원래 상업 항구로 사용되었습니다. 18세기에는 선원들의 유흥가로 유명했으나, 20세기 중반 이후 레스토랑과 카페 거리로 변모하여 코펜하겐 최고의 관광 명소가 되었습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 운하)",
      admission: "무료 (운하 보트 투어 별도: 약 100 DKK~)",
      address: "Nyhavn, 1051 København K",
    },
    highlights: [
      "17~18세기 알록달록한 건물이 늘어선 운하 풍경",
      "안데르센이 거주했던 18번, 20번, 67번 건물",
      "운하 보트 투어 출발점 (주요 명소 순회)",
      "정박한 클래식 목선과 함께하는 포토존",
    ],
    nearbyAttractions: [
      "아말리엔보르 궁전 (도보 10분)",
      "왕립 덴마크 극장 (도보 5분)",
      "스트뢰에 보행자 거리 (도보 3분)",
    ],
    photoTips:
      "운하 남쪽 끝(앵커 기념비 근처)에서 북쪽을 바라보며 촬영하면 알록달록한 건물과 정박 선박이 모두 프레임에 담깁니다. 오전 햇빛이 건물 정면을 비춥니다.",
    tips: [
      "운하 남쪽(짝수 번호) 편은 '맑은 쪽(Sunny Side)'으로 야외 카페 좌석이 인기입니다.",
      "운하 보트 투어는 뉘하운에서 출발하며 인어공주 동상 등 주요 명소를 순회합니다.",
      "레스토랑 가격이 비싸므로 분위기만 즐기고 식사는 주변 골목에서 하는 것도 방법입니다.",
      "겨울에는 운하변에서 글뢰그(덴마크식 멀드 와인)를 마시며 분위기를 즐기세요.",
    ],
  },
  "denmark/copenhagen-region/copenhagen/little-mermaid": {
    heroGradient: "from-teal-400 to-blue-700",
    description:
      "한스 크리스티안 안데르센의 동화 '인어공주'를 기념하여 1913년 세워진 코펜하겐의 상징적 동상. 카를스버그 맥주 창업자의 아들 카를 야콥센이 의뢰하여 조각가 에드바르드 에릭센이 제작했습니다.",
    history:
      "카를 야콥센이 덴마크 왕립 발레단의 '인어공주' 공연에 감동을 받아 조각을 의뢰했습니다. 1913년 8월 23일 랑엘리니에 해변에 설치되었으며, 이후 여러 차례 훼손·복원을 거쳤습니다. 높이 1.25m의 소박한 크기에도 불구하고 매년 100만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "상시 개방 (야외 동상)",
      admission: "무료",
      address: "Langelinie, 2100 København Ø",
    },
    highlights: [
      "바위 위에 앉아 바다를 바라보는 상징적인 포즈",
      "랑엘리니에 해안 산책로와 함께 즐기는 해변 풍경",
      "1913년 이후 100년 넘게 코펜하겐을 지켜온 역사",
      "주변 카스텔렛 성채와 연계 산책 코스",
    ],
    nearbyAttractions: [
      "카스텔렛 성채 (도보 5분)",
      "게피온 분수 (도보 3분)",
      "아말리엔보르 궁전 (도보 15분)",
    ],
    photoTips:
      "동상이 작으므로 가까이 다가가서 바다를 배경으로 촬영하세요. 이른 아침(7시 이전)에 방문하면 관광객 없이 촬영할 수 있습니다.",
    tips: [
      "동상이 생각보다 작아 실망할 수 있으나 주변 해안 산책로와 함께 즐기면 좋습니다.",
      "카스텔렛 성채 → 게피온 분수 → 인어공주 동상 → 랑엘리니에 순서로 산책하세요.",
      "이른 아침이나 늦은 저녁에 방문하면 한적하게 감상할 수 있습니다.",
      "근처 디자인 박물관(Designmuseum Danmark)과 연계 방문을 추천합니다.",
    ],
  },

  // ===== HELSINGOR ATTRACTIONS =====
  "denmark/copenhagen-region/helsingor/kronborg-castle": {
    heroGradient: "from-stone-500 to-slate-800",
    description:
      "셰익스피어의 '햄릿'의 배경 '엘시노어 성'으로 세계적으로 알려진 유네스코 세계유산. 외레순 해협의 전략적 요충지에 자리한 르네상스 해안 성곽으로, 수세기 동안 해협을 통과하는 모든 선박에 통행세를 징수했습니다.",
    history:
      "1420년대 에리크 7세가 해협 통행세 징수를 위해 '크로겐' 요새를 세운 것이 시작입니다. 1585년 프레데릭 2세가 현재의 르네상스 양식으로 재건하며 '크론보르'로 개명했습니다. 1629년 화재 후 크리스티안 4세가 복원했으며, 이후 군사 시설로도 활용되었습니다.",
    visitInfo: {
      hours: "10:00~17:00 (6~9월 ~18:00), 동절기 화~일만 개장",
      admission: "성인 145 DKK, 18세 이하 무료",
      address: "Kronborg 2 C, 3000 Helsingør",
      website: "https://www.kronborg.dk",
    },
    highlights: [
      "셰익스피어 '햄릿'의 실제 무대로 여름 야외 공연",
      "기사의 홀 - 북유럽 최대의 르네상스 무도회장",
      "홀게르 단스케 - 지하 동굴에 잠든 전설의 바이킹 전사 석상",
      "해협 전망대에서 바라보는 스웨덴 헬싱보리 풍경",
    ],
    nearbyAttractions: [
      "덴마크 해양박물관 (도보 5분)",
      "헬싱외르 구시가지 (도보 10분)",
      "헬싱보리행 페리 터미널 (도보 10분)",
    ],
    photoTips:
      "해안 산책로에서 성 전체를 담을 수 있습니다. 내부에서는 기사의 홀과 지하 홀게르 단스케 석상이 주요 촬영 포인트입니다.",
    tips: [
      "매년 여름 성 안에서 열리는 셰익스피어 연극 축제를 놓치지 마세요.",
      "지하 케이스메이트(홀게르 단스케)는 어둡고 좁으니 주의하세요.",
      "코펜하겐 카드로 무료 입장 + 기차 포함이므로 당일치기에 적합합니다.",
      "해양박물관과 콤비 티켓을 구매하면 할인됩니다.",
    ],
  },

  // ===== AARHUS ATTRACTIONS =====
  "denmark/jutland/aarhus/aros-art-museum": {
    heroGradient: "from-rose-500 to-fuchsia-800",
    description:
      "옥상의 '무지개 파노라마(Your Rainbow Panorama)'로 세계적 명성을 얻은 북유럽 최대 규모의 미술관. 올라퍼 엘리아슨이 설계한 지름 52m의 무지개빛 원형 통로에서 오르후스 시내를 360도로 감상할 수 있습니다.",
    history:
      "1859년 설립된 덴마크에서 가장 오래된 공공 미술관 중 하나입니다. 2004년 현재 건물로 이전했으며, 2011년 올라퍼 엘리아슨의 '무지개 파노라마' 설치로 세계적 랜드마크가 되었습니다. 론 뮤엑의 거대 조각 'Boy' 등 현대미술 컬렉션이 유명합니다.",
    visitInfo: {
      hours: "화~일 10:00~21:00, 월요일 휴관",
      admission: "성인 150 DKK, 18세 이하 무료, 화요일 야간(17시 이후) 할인",
      address: "Aros Allé 2, 8000 Aarhus C",
      website: "https://www.aros.dk",
    },
    highlights: [
      "올라퍼 엘리아슨의 '무지개 파노라마' - 무지개빛 유리 통로에서 도시 전망",
      "론 뮤엑의 초대형 조각 'Boy' (5m 높이 웅크린 소년)",
      "단테의 신곡을 모티브로 한 9개 층 구성 (천국~지옥)",
      "연간 특별 전시와 북유럽 현대미술 상설 전시",
    ],
    nearbyAttractions: [
      "라틴 쿼터 (도보 5분)",
      "오르후스 대성당 (도보 8분)",
      "덴 감레 뷔 야외 박물관 (도보 15분)",
    ],
    photoTips:
      "무지개 파노라마 내부에서 컬러 유리를 통해 도시를 촬영하면 환상적인 컬러 사진을 얻을 수 있습니다. 일몰 시간이 가장 인기 있습니다.",
    tips: [
      "화요일 17시 이후 방문하면 할인된 가격으로 입장할 수 있습니다.",
      "무지개 파노라마는 날씨가 좋은 날 방문해야 전망을 즐길 수 있습니다.",
      "9개 층을 신곡의 '지옥 → 연옥 → 천국'으로 올라가며 경험하는 구조입니다.",
      "뮤지엄 숍에서 북유럽 디자인 관련 기념품을 구매할 수 있습니다.",
    ],
  },
};
