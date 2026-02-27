import type { CityDetail, AttractionDetail } from "../city-details";

export const peruCityDetails: Record<string, CityDetail> = {
  // ===== LIMA COAST =====
  "peru/lima-coast/lima": {
    heroGradient: "from-amber-500 to-red-700",
    description: "태평양을 바라보는 잉카 제국의 관문이자 남미 미식의 수도, 리마. 세계 최고 수준의 레스토랑들이 모여드는 미식 도시로, 식민지 시대 유적과 현대적 미라플로레스가 공존합니다. 페루 요리의 다양성과 깊이는 세계를 놀라게 합니다.",
    bestTime: "12~4월 (여름, 맑은 날씨) / 6~11월은 가리아(안개) 계절",
    stayArea: "미라플로레스 / 바랑코 / 산 이시드로",
    transport: "메트로폴리타노 BRT, 택시, 우버, 인버",
    districts: [
      { name: "미라플로레스", nameEn: "Miraflores", description: "태평양 절벽 위에 자리한 고급 지구. 라르코마르 쇼핑몰과 케네디 공원이 중심.", highlights: ["라르코마르 쇼핑몰", "케네디 공원", "말레콘 절벽 산책로"] },
      { name: "바랑코", nameEn: "Barranco", description: "19세기 별장 지구가 보헤미안 예술 동네로 변신. 갤러리, 바, 고급 레스토랑이 집중.", highlights: ["라몬 카스티야 다리", "마리오 바르가스 요사 다리", "예술 갤러리 거리"] },
      { name: "리마 역사 지구", nameEn: "Lima Historic Center", description: "스페인 식민지 시대 건축이 집약된 유네스코 세계유산 지구. 총독 광장을 중심으로 성당과 수도원이 밀집.", highlights: ["플라사 마요르", "리마 대성당", "산 프란시스코 성당·카타콤"] },
    ],
    attractions: [
      { name: "라르코 박물관", nameEn: "Larco Museum", description: "잉카·모체·치무 등 페루 고대 문명의 황금 유물 5,000점을 소장한 세계 최고의 선콜럼비아 박물관.", category: "박물관", tip: "에로틱 토기 전시실은 충격적일 수 있습니다. 입장 전 안내판을 확인하세요." },
      { name: "산 프란시스코 카타콤", nameEn: "San Francisco Catacombs", description: "리마 대성당 지하의 미로 같은 납골당. 7만 명의 유해가 안치된 식민지 시대의 지하 묘지.", category: "역사", tip: "가이드 투어로만 입장 가능합니다. 폐소공포증이 있다면 주의하세요." },
      { name: "미라플로레스 말레콘", nameEn: "Miraflores Malecon", description: "태평양을 내려다보는 8km 해안 절벽 산책로. 패러글라이딩을 즐기거나 일몰을 감상하기에 최고.", category: "자연" },
      { name: "와카 풀야나", nameEn: "Huaca Pucllana", description: "미라플로레스 한복판에 있는 기원전 200~700년의 리마 문명 피라미드 신전 유적.", category: "유적", tip: "야간 조명 투어가 더 분위기 있습니다." },
    ],
    dayTrips: [
      { name: "나스카 라인", nameEn: "Nazca Lines", description: "2,000년 전 사막에 그려진 거대한 지상화. 경비행기로만 볼 수 있는 불가사의한 세계유산.", travelTime: "버스 약 8시간 (항공 1시간)", gradient: "from-yellow-500 to-amber-700" },
      { name: "팔로미노 섬", nameEn: "Palomino Islands", description: "리마 앞바다의 섬에서 야생 바다사자·가마우지를 보트로 관람하는 투어.", travelTime: "보트 약 2시간", gradient: "from-blue-400 to-cyan-600" },
    ],
    localFood: [
      { name: "세비체", description: "신선한 생선을 라임 주스에 재운 페루 국민 요리. 옥수수·고구마와 함께 먹습니다.", emoji: "🐟" },
      { name: "로모 살타도", description: "소고기·토마토·양파를 볶은 중화·페루 퓨전 볶음 요리. 밥과 감자튀김을 곁들입니다.", emoji: "🥩" },
      { name: "피스코 사워", description: "포도 증류주 피스코에 라임·달걀 흰자를 넣은 페루 국민 칵테일.", emoji: "🍸" },
    ],
    tips: [
      "리마의 미식 수준은 세계 최고입니다. 센트럴·마이도·아스트리드 이 가스톤 등은 사전 예약 필수.",
      "태평양 연안의 리마는 12~4월이 맑고 따뜻합니다. 나머지 기간은 안개(가리아)가 자욱합니다.",
      "택시는 반드시 미터기나 우버/인버를 이용하세요. 흥정 택시는 바가지 위험이 있습니다.",
      "쿠스코·마추픽추 여행 전후로 리마에서 2~3일 머무는 것을 추천합니다.",
    ],
  },

  // ===== SACRED VALLEY =====
  "peru/sacred-valley/cusco": {
    heroGradient: "from-orange-500 to-amber-800",
    description: "잉카 제국의 영원한 수도, 쿠스코. 해발 3,400m에 자리한 이 도시는 잉카의 정교한 석조 건축물 위에 스페인 식민지 시대 성당이 세워진 독특한 도시 경관을 자랑합니다. 마추픽추와 성스러운 계곡으로 향하는 관문이자 그 자체로 완성된 역사 도시입니다.",
    bestTime: "5~10월 (건기, 쿠스코 최적)",
    stayArea: "플라사 데 아르마스 주변 / 산 블라스",
    transport: "도보, 택시, 버스, 잉카 레일 (마추픽추행)",
    districts: [
      { name: "플라사 데 아르마스", nameEn: "Plaza de Armas", description: "잉카 시대부터 도시의 심장이었던 중앙 광장. 쿠스코 대성당과 라 콤파니아 성당이 마주보고 있습니다.", highlights: ["쿠스코 대성당", "라 콤파니아 성당", "포르탈 데 파네스 식당가"] },
      { name: "산 블라스", nameEn: "San Blas", description: "좁은 골목에 수공예품 가게와 아티스트 아틀리에가 가득한 예술인 동네.", highlights: ["산 블라스 성당 (잉카 두개골 제단)", "수공예 골목", "전망 테라스"] },
    ],
    attractions: [
      { name: "삭사이와만", nameEn: "Sacsayhuaman", description: "쿠스코 북쪽 언덕에 자리한 잉카 요새. 수백 톤짜리 거석이 모르타르 없이 정교하게 맞물린 건축에 고고학자들도 경탄합니다.", category: "유적", tip: "쿠스코 시내에서 도보 30분 또는 택시 10분. 해질 무렵의 전망이 압권입니다." },
      { name: "쿠스코 대성당", nameEn: "Cusco Cathedral", description: "잉카 신전 터 위에 100년에 걸쳐 건축된 스페인 바로크 양식 성당. 잉카의 돌과 스페인 건축이 공존하는 상징적 건물.", category: "성당", tip: "마지막 만찬 그림에서 메인 요리가 기니피그인 것을 찾아보세요." },
      { name: "코리칸차 (태양신전)", nameEn: "Coricancha (Temple of the Sun)", description: "온통 황금으로 덮여 있었다는 잉카 최대의 신전. 현재는 산토 도밍고 성당이 그 위에 세워져 있습니다.", category: "유적", tip: "1950년 지진으로 스페인 건물 일부가 무너지면서 잉카 석조가 드러났습니다." },
      { name: "케추아 시장 (산 페드로)", nameEn: "San Pedro Market", description: "현지인들이 이용하는 쿠스코 최대 재래시장. 치차(옥수수 맥주), 안데스 과일, 약초가 가득합니다.", category: "시장" },
    ],
    dayTrips: [
      { name: "마추픽추", nameEn: "Machu Picchu", description: "잉카 제국의 잃어버린 도시. 기차로 아구아스 칼리엔테스까지 이동 후 버스로 올라갑니다.", travelTime: "기차 + 버스 약 4~5시간", gradient: "from-green-500 to-emerald-800" },
      { name: "성스러운 계곡", nameEn: "Sacred Valley", description: "피삭 유적, 오얀타이탐보, 친체로 등 잉카 유적과 현지 시장이 이어지는 계곡 투어.", travelTime: "차로 약 1~3시간", gradient: "from-yellow-400 to-orange-600" },
    ],
    localFood: [
      { name: "쿠이 (기니피그)", description: "안데스의 전통 식재료인 기니피그 구이. 쿠스코의 특별한 미식 경험.", emoji: "🐾" },
      { name: "치차 모라다", description: "보라색 옥수수로 만든 달콤한 안데스 전통 음료.", emoji: "🍹" },
      { name: "추페 데 카마로네스", description: "안데스 새우로 만든 크리미한 스튜. 쿠스코 전통 가정식.", emoji: "🍲" },
    ],
    tips: [
      "해발 3,400m의 고도에 적응하기 위해 첫날은 무리하지 말고 천천히 쉬세요. 코카 티가 도움이 됩니다.",
      "볼레토 투리스티코(관광 통합 패스)로 삭사이와만·코리칸차 등 여러 유적을 할인 입장할 수 있습니다.",
      "마추픽추 기차는 잉카 레일과 페루 레일 두 회사가 운영. 성수기는 2~3개월 전 예약 필수.",
      "고산증이 심하면 아세타졸라미드(다이아목스) 복용을 의사와 상담하세요.",
    ],
  },
  "peru/sacred-valley/machu-picchu": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "안데스 산맥 해발 2,430m의 구름 위에 숨겨진 잉카의 잃어버린 도시. 1911년 하이럼 빙엄에 의해 세상에 알려진 이 도시는 정교한 석조 건축과 자연의 신비로운 조화로 세계 7대 불가사의이자 유네스코 세계유산입니다.",
    bestTime: "5~10월 (건기, 맑은 하늘)",
    stayArea: "아구아스 칼리엔테스 (마추픽추 산 아래 마을)",
    transport: "쿠스코에서 기차(잉카 레일/페루 레일) + 아구아스 칼리엔테스에서 셔틀버스",
    districts: [
      { name: "마추픽추 유적지", nameEn: "Machu Picchu Ruins", description: "농업 테라스, 사원, 궁전, 주거지 등으로 구성된 완전한 잉카 도시 유적.", highlights: ["태양 신전", "인티와타나 (해시계)", "삼창 모양 창문"] },
    ],
    attractions: [
      { name: "마추픽추 유적 전경", nameEn: "Machu Picchu Main View", description: "와이나픽추 산을 배경으로 한 잉카 도시의 아이코닉한 전망. 여행 사진에서 가장 많이 등장하는 앵글입니다.", category: "유적", tip: "입장 후 왼쪽 테라스로 올라가면 클래식 전망대 포인트입니다." },
      { name: "와이나픽추 산", nameEn: "Huayna Picchu Mountain", description: "마추픽추 뒤에 우뚝 솟은 봉우리. 정상까지 약 1시간 트레킹으로 도시 전체를 내려다보는 파노라마 뷰.", category: "트레킹", tip: "하루 입장 인원이 400명으로 제한됩니다. 최소 3~4개월 전 예약 필수." },
      { name: "인티와타나 (해시계)", nameEn: "Intihuatana Stone", description: "'태양을 묶는 기둥'이라는 뜻의 잉카 천문 기기. 동지에 정확히 태양이 기둥 위에 정렬됩니다.", category: "유적" },
    ],
    dayTrips: [
      { name: "잉카 트레일", nameEn: "Inca Trail", description: "쿠스코에서 마추픽추까지 4일간 잉카 황제도를 걷는 전설의 트레킹.", travelTime: "4일 (사전 라이선스 취득 필수)", gradient: "from-stone-400 to-gray-700" },
    ],
    localFood: [
      { name: "아구아스 칼리엔테스 레스토랑", description: "마추픽추 아래 마을의 레스토랑들. 신선한 송어와 페루 전통 요리를 즐길 수 있습니다.", emoji: "🍽️" },
    ],
    tips: [
      "마추픽추 입장권은 온라인에서만 구매 가능합니다. www.machupicchu.gob.pe에서 예약하세요.",
      "하루 입장 인원이 제한되어 있습니다. 최소 2~3개월 전 예약 필수.",
      "아침 6시 입장권이 인기. 안개가 걷히면서 드라마틱한 뷰를 감상할 수 있습니다.",
      "드론 촬영은 엄격히 금지됩니다. 삼각대도 제한됩니다.",
    ],
  },

  // ===== LAKE TITICACA =====
  "peru/lake-titicaca/puno": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "세계 최고의 항해 가능한 호수, 티티카카 호수의 페루 쪽 관문 도시. 해발 3,800m의 이 도시에서 갈대로 만든 우로스 인공섬과 타킬레 섬, 이슬라 아만타니로 향하는 보트 투어를 즐길 수 있습니다.",
    bestTime: "5~10월 (건기)",
    stayArea: "푸노 시내 (소규모 도시)",
    transport: "도보, 보트 (섬 투어), 버스",
    districts: [
      { name: "티티카카 호수 지구", nameEn: "Lake Titicaca Area", description: "우로스 인공섬과 타킬레 섬이 있는 신성한 호수.", highlights: ["우로스 갈대 인공섬", "타킬레 섬", "아만타니 섬"] },
    ],
    attractions: [
      { name: "우로스 인공섬", nameEn: "Uros Floating Islands", description: "티티카카 호수에 갈대로 인공적으로 만든 섬 위에 사는 우로스 원주민 공동체. 갈대로 만든 집·보트·가구를 사용하는 독특한 생활 방식.", category: "문화", tip: "여행사 투어보다 직접 선착장에서 보트를 타면 더 저렴합니다." },
      { name: "타킬레 섬", nameEn: "Taquile Island", description: "전통 직조 문화로 유네스코 무형유산에 등재된 섬. 남성들이 복잡한 전통 의상을 직접 짜는 문화가 남아있습니다.", category: "문화" },
      { name: "얌파이 협곡", nameEn: "Yampay Canyon", description: "푸노 근처의 아름다운 안데스 협곡. 안데스 콘도르를 관찰할 수 있는 포인트.", category: "자연" },
    ],
    dayTrips: [
      { name: "코파카바나 (볼리비아)", nameEn: "Copacabana Bolivia", description: "국경을 넘어 볼리비아 티티카카 호수 쪽의 태양의 섬을 방문합니다.", travelTime: "버스 약 3시간 (국경 통과)", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "트루차 아 라 플란차", description: "티티카카 호수에서 잡은 신선한 무지개 송어 그릴 요리.", emoji: "🐟" },
      { name: "소파 데 킨오아", description: "안데스의 슈퍼 곡물 퀴노아로 만든 전통 수프.", emoji: "🍲" },
    ],
    tips: [
      "해발 3,800m의 고도로 쿠스코보다 더 높습니다. 고산증 예방을 철저히 하세요.",
      "티티카카 호수 섬 투어는 1박2일이나 2박3일을 추천합니다. 현지 가정 홈스테이도 가능.",
      "우로스 섬 주민들은 관광으로 생계를 유지합니다. 갈대 공예품 구매가 현지 경제에 도움이 됩니다.",
      "리마에서 야간 버스(10~12시간)나 쿠스코에서 버스(6~7시간)로 이동합니다.",
    ],
  },
};

export const peruAttractionDetails: Record<string, AttractionDetail> = {
  // ===== MACHU PICCHU =====
  "peru/sacred-valley/machu-picchu/machu-picchu-ruins": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "잉카 제국이 남긴 가장 경이로운 유적. 해발 2,430m 안데스 산맥 정상부에 자리한 이 도시는 약 15세기에 건설되어 스페인 정복자들에게도 발견되지 않았습니다. 수백 개의 건물이 테라스와 함께 완벽한 도시 계획으로 배치되어 있습니다.",
    visitInfo: {
      hours: "06:00~17:30",
      admission: "성인 USD 45 ~ 65 (구역·시간대에 따라 상이)",
      address: "Machu Picchu, Cusco Region, Peru",
      website: "https://www.machupicchu.gob.pe",
    },
    highlights: [
      "태양 신전(인티 와타나)과 정교한 잉카 석조 건축",
      "와이나픽추 산을 배경으로 한 아이코닉 전망",
      "농업 테라스와 수로 시스템",
      "컨도르 신전과 왕의 거주 구역",
      "안데스 원시림과 야생 라마·비쿠냐",
    ],
    nearbyAttractions: ["와이나픽추 산", "인티푼쿠 (태양의 문)", "아구아스 칼리엔테스"],
    photoTips: "입장 후 왼쪽 테라스 높이에서 와이나픽추를 배경으로 도시 전체를 담으세요. 아침 안개가 걷히는 7~8시가 가장 드라마틱합니다. 라마가 주변을 자유롭게 돌아다니므로 라마와 함께하는 사진도 가능합니다.",
    tips: [
      "입장권은 반드시 공식 사이트(machupicchu.gob.pe)에서 사전 구매하세요. 현장 판매 없음.",
      "하루에 두 번 시간대를 나눠 입장하며 각 구역 이동에 제한이 있습니다.",
      "우기(11~4월)에도 방문 가능하지만 시야가 제한될 수 있습니다. 우비 필수.",
      "일출 시간(6시)에 입장하면 안개와 빛이 연출하는 신비로운 풍경을 즐길 수 있습니다.",
    ],
  },
  "peru/sacred-valley/cusco/sacsayhuaman": {
    heroGradient: "from-stone-500 to-amber-700",
    description: "쿠스코 북쪽 언덕에 펼쳐진 잉카 제국의 거대 요새. 수백 톤에 달하는 거석을 모르타르 없이 칼날 하나 들어갈 틈 없이 정교하게 쌓아올린 기술은 현대 공학자들도 경탄합니다. 6월 24일 인티 라이미(태양의 축제)가 이곳에서 열립니다.",
    visitInfo: {
      hours: "07:00~17:30",
      admission: "볼레토 투리스티코 포함 (약 USD 25~45)",
      address: "Sacsayhuaman, Cusco, Peru",
    },
    highlights: [
      "수백 톤짜리 지그재그 배열의 거석 성벽",
      "쿠스코 시내와 안데스를 조망하는 파노라마",
      "세 개의 계단식 석조 테라스",
      "태양의 축제(인티 라이미) 개최 장소",
      "로돈도 원형 탑 유적",
    ],
    nearbyAttractions: ["코리칸차", "킨코 유적", "탐보마차이 유적"],
    photoTips: "오후에 방문하면 황금빛 태양 아래 돌의 질감이 살아납니다. 거석 성벽을 배경으로 아래에서 올려다보는 구도가 인상적입니다.",
    tips: [
      "쿠스코 시내에서 도보 30~40분 또는 택시 10분 거리입니다.",
      "고도가 3,700m로 쿠스코보다 높습니다. 천천히 움직이세요.",
      "볼레토 투리스티코(관광 통합 패스)로 입장할 수 있습니다.",
      "6월 24일 인티 라이미 축제에는 전통 의상을 입은 수천 명의 퍼포머들이 공연합니다.",
    ],
  },
  "peru/lake-titicaca/puno/uros-islands": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "세계에서 유일하게 갈대로 만든 인공섬 위에 사는 우로스 원주민 공동체. 수천 년 전 잉카의 지배를 피해 호수 위에 섬을 만들어 살기 시작했으며, 현재 약 1,200명이 60여 개의 인공섬에 거주합니다. 모든 것이 토토라 갈대로 만들어진 독특한 생활 방식이 살아있습니다.",
    visitInfo: {
      hours: "08:00~17:00",
      admission: "입장료 약 USD 10 + 보트 요금",
      address: "Lake Titicaca, Puno, Peru",
    },
    highlights: [
      "토토라 갈대로 만든 섬, 집, 보트",
      "우로스 원주민의 전통 생활 방식 체험",
      "갈대 배(토토라 배) 탑승",
      "전통 자수와 수공예품 판매",
      "티티카카 호수의 신비로운 파란 빛",
    ],
    nearbyAttractions: ["타킬레 섬", "아만타니 섬", "푸노 항구"],
    photoTips: "갈대 섬 위에서 넓은 티티카카 호수를 배경으로 촬영하면 독특한 사진을 얻을 수 있습니다. 원주민들과 사진을 찍을 때는 허락을 구하세요.",
    tips: [
      "투어 보트를 이용해야 합니다. 푸노 항구에서 출발하는 당일 투어나 여행사 패키지를 이용하세요.",
      "우로스 섬 주민들의 수공예품 구매가 현지 경제에 직접 도움이 됩니다.",
      "1박2일 타킬레 섬 홈스테이 투어는 더 깊은 문화 체험을 원하는 분께 추천합니다.",
      "해발 3,800m이므로 고산증 예방을 철저히 하세요.",
    ],
  },
};
