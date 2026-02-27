import type { CityDetail, AttractionDetail } from "../city-details";

export const mexicoCityDetails: Record<string, CityDetail> = {
  // ===== CENTRAL =====
  "mexico/central/mexico-city": {
    heroGradient: "from-green-500 to-red-700",
    description: "해발 2,240m에 위치한 세계 최대급 도시권. 아즈텍 문명의 유산과 스페인 식민지 건축, 현대 예술이 공존하는 멕시코의 심장. 세계 최다 박물관 보유 도시 중 하나로 문화적 밀도가 놀라운 곳입니다.",
    bestTime: "11월~4월 (건기, 맑은 날씨) / 우기(5~10월)는 오후 소나기 주의",
    stayArea: "콜로니아 폴랑코 / 콘데사 / 로마 / 역사 지구",
    transport: "메트로(12개 노선, 저렴), 메트로버스, 우버(안전하고 저렴), 에코비시(자전거)",
    districts: [
      { name: "역사 지구(소칼로)", nameEn: "Centro Histórico (Zócalo)", description: "아즈텍 수도 테노치티틀란 위에 세워진 스페인 식민지 시대 역사 중심지. 소칼로 광장이 핵심.", highlights: ["소칼로 광장", "대성당", "테노치티틀란 유적"] },
      { name: "폴랑코", nameEn: "Polanco", description: "고급 호텔, 레스토랑, 명품 부티크가 밀집한 멕시코시티 최고급 주거 지구.", highlights: ["차풀테펙 공원", "소우마야 박물관", "링컨 에비뉴"] },
      { name: "콘데사·로마", nameEn: "Condesa / Roma", description: "아르데코 건축물과 트렌디한 카페, 갤러리가 공존하는 보헤미안 동네. 멕시코시티 힙스터의 성지.", highlights: ["파르케 멕시코", "아르데코 건물", "타코 레스토랑"] },
      { name: "코요아칸", nameEn: "Coyoacán", description: "프리다 칼로가 살았던 역사 동네. 코발트 블루의 카사 아술(파란 집)과 예술가 커뮤니티.", highlights: ["카사 아술(프리다 칼로 박물관)", "히론 광장", "시장"] },
    ],
    attractions: [
      { name: "테오티와칸", nameEn: "Teotihuacan", description: "세계 최대 피라미드 단지 중 하나. 태양의 피라미드(높이 65m)와 달의 피라미드, 죽은 자의 거리가 있는 BC 100년~AD 550년경 고대 도시.", category: "유적", tip: "오전 8시 개장과 동시에 방문해 인파와 더위를 피하세요. 정상 등반이 가능합니다." },
      { name: "프리다 칼로 박물관 (카사 아술)", nameEn: "Frida Kahlo Museum (Casa Azul)", description: "화가 프리다 칼로가 태어나고 사망한 코발트 블루의 집. 그녀의 작품과 개인 소장품이 전시.", category: "박물관", tip: "온라인 사전 예약 필수. 주말은 2~3주 전 예약이 필요할 정도로 인기입니다." },
      { name: "국립 인류학 박물관", nameEn: "Museo Nacional de Antropología", description: "세계 최고 수준의 고고학 박물관. 아즈텍, 마야, 테오티와칸 등 멕시코 고대 문명 유물 60만 점 소장.", category: "박물관", tip: "하루 이상 소요될 정도의 방대한 규모. 태양력 돌(아즈텍 달력)이 가장 유명한 전시물." },
      { name: "차풀테펙 성/공원", nameEn: "Chapultepec Castle / Park", description: "해발 2,325m 언덕 위의 19세기 황제 별궁과 멕시코 최대 도심 공원.", category: "공원", tip: "성 내부 국립 역사 박물관도 함께 관람하세요. 일요일은 공원 입장 무료." },
      { name: "소우마야 박물관", nameEn: "Museo Soumaya", description: "알루미늄 패널 16,000장으로 덮인 현대적 외관의 사립 박물관. 오귀스트 로댕 조각 최다 소장.", category: "박물관", tip: "입장 무료. 폴랑코 지구의 쇼핑과 연계해 방문하기 좋습니다." },
    ],
    dayTrips: [
      { name: "테오티와칸", nameEn: "Teotihuacan", description: "아즈텍 이전 고대 문명의 웅장한 피라미드 단지. 멕시코시티에서 가장 인기 있는 당일치기.", travelTime: "버스 약 1시간 (북부 터미널)", gradient: "from-amber-400 to-orange-700" },
      { name: "푸에블라", nameEn: "Puebla", description: "몰레 소스의 발원지이자 타일 장식 건축으로 유명한 식민지 시대 도시. UNESCO 세계유산.", travelTime: "버스 약 2시간", gradient: "from-red-400 to-rose-700" },
    ],
    localFood: [
      { name: "타코 알 파스토르", description: "수직 꼬치에 양념 돼지고기를 구운 멕시코시티 최고의 타코. 아나나스(파인애플)가 포인트.", emoji: "🌮" },
      { name: "탐알레스", description: "옥수수 반죽을 바나나 잎이나 옥수수 껍질에 싸서 찐 전통 음식.", emoji: "🫔" },
      { name: "몰레", description: "30가지 이상의 재료로 만든 초콜릿 풍미의 진한 소스 요리. 멕시코 국민 음식.", emoji: "🍫" },
      { name: "참발라나 루체떼", description: "소칼로 주변 카페에서 즐기는 시나몬 향 카페 드레진느.", emoji: "☕" },
    ],
    tips: [
      "우버가 일반 택시보다 안전하고 가격이 투명합니다. 앱 설치 필수.",
      "고지대(2,240m)이므로 도착 첫날은 휴식을 취하고 물을 충분히 마시세요.",
      "수돗물은 마시지 마세요. 생수를 구입하거나 정수 필터 사용.",
      "7월~10월은 오후 2~5시에 소나기가 자주 오므로 우산 지참.",
    ],
  },

  // ===== YUCATAN =====
  "mexico/yucatan/cancun": {
    heroGradient: "from-cyan-400 to-blue-600",
    description: "카리브해의 에메랄드 빛 바다와 새하얀 모래 해변이 펼쳐지는 세계 최고의 리조트 도시. 치첸이트사, 코바, 툴룸 등 마야 유적지 탐방의 베이스캠프이자 스노클링·스쿠버 다이빙의 천국.",
    bestTime: "12월~4월 (건기, 허리케인 없음) / 5~11월은 허리케인 시즌",
    stayArea: "호텔 존(Hotel Zone / Zona Hotelera) / 다운타운 칸쿤",
    transport: "R1·R2 버스(저렴), ADO 버스, 택시(미터기 없음, 가격 협상 필수), 렌터카",
    districts: [
      { name: "호텔 존", nameEn: "Hotel Zone (Zona Hotelera)", description: "라구나와 카리브해 사이 모래언덕에 대형 리조트들이 줄지어 있는 칸쿤의 핵심 관광 지구.", highlights: ["플라야 돌핀(쿠쿠르쿠쿠)", "라구나 니쿱테", "포럼 바이 더 씨"] },
      { name: "다운타운 칸쿤", nameEn: "Downtown Cancún", description: "현지인들의 삶이 담긴 진짜 멕시코 분위기. 저렴한 식당, 시장, 아파트가 있는 로컬 지역.", highlights: ["메르카도 23", "파르케 라스 팔라파스", "아베니다 이살라마르"] },
    ],
    attractions: [
      { name: "플라야 델피네스", nameEn: "Playa Delfines", description: "칸쿤에서 가장 큰 공공 비치. 리조트 없이 사람이 적고 파도가 강해 서퍼들에게 인기 있는 해변.", category: "해변", tip: "무료 공공 해변으로 주차도 무료. 칸쿤 사인 포토 스팟이 있습니다." },
      { name: "수중 박물관 (MUSA)", nameEn: "Underwater Museum of Art (MUSA)", description: "500점 이상의 조각상이 카리브해 수중에 설치된 세계 최대 수중 미술관. 스노클링·다이빙으로 관람.", category: "미술관", tip: "스노클링 투어($50~80)나 글래스바텀 보트($30~40)로 관람 가능합니다." },
      { name: "세노테(Cenote) 수영", nameEn: "Cenote Swimming", description: "유카탄 반도 특유의 석회암 천연 수영장. 이크킬, 그란 세노테, 세노테 도스 오호스가 인기.", category: "자연", tip: "세노테는 선크림 금지(산호초 보호). 리조트에서 제공하는 리프 세이프 제품 사용." },
      { name: "이슬라 무헤레스", nameEn: "Isla Mujeres", description: "칸쿤에서 페리로 20분 거리의 작은 섬. 가장 투명한 카리브해 물과 느긋한 분위기가 매력.", category: "섬", tip: "고프로나 방수 카메라 지참 필수. 골프카트 렌탈로 섬 전체를 2시간에 탐방 가능." },
    ],
    dayTrips: [
      { name: "치첸이트사", nameEn: "Chichén Itzá", description: "세계 7대 불가사의 중 하나인 엘 카스티요 피라미드가 있는 마야 고대 도시. 춘분·추분에 뱀 그림자 현상이 유명.", travelTime: "버스 약 3~4시간", gradient: "from-amber-400 to-orange-700" },
      { name: "툴룸", nameEn: "Tulum", description: "카리브해 절벽 위에 세워진 마야 유적지와 에코 리조트, 트렌디한 레스토랑이 공존하는 보헤미안 비치 타운.", travelTime: "버스 약 2시간", gradient: "from-teal-400 to-cyan-700" },
      { name: "플라야 델 카르멘", nameEn: "Playa del Carmen", description: "5번가(킨타 아베니다) 쇼핑 거리와 유럽 스타일 비치 클럽이 있는 활기찬 리비에라 마야 도시.", travelTime: "버스 약 1시간", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "세비체", description: "신선한 생선·해산물을 라임즙에 절인 카리브해 스타일의 시원한 해산물 요리.", emoji: "🐟" },
      { name: "타코 데 칸그레호", description: "카리브해 신선 게살 타코. 칸쿤 해산물 식당에서 꼭 맛보세요.", emoji: "🦀" },
      { name: "마르가리타", description: "테킬라, 라임주스, 트리플 섹의 황금 칵테일. 해변에서 마시면 별미.", emoji: "🍹" },
    ],
    tips: [
      "호텔 존 버스(R1·R2)는 편도 12페소(약 800원)로 시내~해변 이동이 가능합니다.",
      "택시는 미터기가 없으므로 탑승 전 반드시 가격을 흥정하세요.",
      "허리케인 시즌(6~11월)에는 여행자보험 가입이 필수입니다.",
      "세노테에서는 환경 보호를 위해 방수 자외선 차단제(미네랄 선크림)만 사용하세요.",
    ],
  },

  "mexico/yucatan/merida": {
    heroGradient: "from-yellow-400 to-orange-600",
    description: "마야 문명의 중심이었던 유카탄 반도의 주도. '하얀 도시'라 불리는 스페인 식민지 시대 건축의 보고. 세계에서 가장 안전한 멕시코 도시 중 하나로 진정한 유카탄 문화를 체험할 수 있는 곳.",
    bestTime: "11월~2월 (시원한 건기) / 10월 죽은 자의 날 축제",
    stayArea: "산타아나 광장 주변 / 그란 플라사 주변 / 콜로니아 산티아고",
    transport: "도보(구시가지), 집합 택시(콜렉티보), 씨클로(인력거), 일반 택시",
    districts: [
      { name: "역사 지구", nameEn: "Historic District", description: "카테드랄, 그란 플라사, 시청이 있는 메리다의 심장부로 마야-스페인 융합 건축이 인상적.", highlights: ["그란 플라사", "메리다 대성당", "총독부 건물"] },
      { name: "파세오 데 몬테호", nameEn: "Paseo de Montejo", description: "19세기 말 부유한 유카탄 귀족들이 세운 프랑스풍 저택이 늘어선 대로.", highlights: ["칸톤 궁전 박물관", "프랑스풍 저택", "벽화 미술관"] },
    ],
    attractions: [
      { name: "우스말", nameEn: "Uxmal", description: "메리다 근교의 마야 후기 고전기(700~1000년) 유적지. 치첸이트사보다 덜 유명하지만 건축 완성도가 더 높다는 평가.", category: "유적", tip: "야간 빛 쇼(noche de luz)가 월~토요일 저녁에 진행됩니다." },
      { name: "메리다 대성당", nameEn: "Mérida Cathedral", description: "1598년 완공된 아메리카 대륙에서 가장 오래된 성당 중 하나. 마야 신전 석재를 재사용해 건축.", category: "성당", tip: "일요일에는 그란 플라사에서 무료 공연과 지역 축제가 열립니다." },
      { name: "산타 루치아 공원", nameEn: "Parque Santa Lucía", description: "목요일 저녁 무료 세레나타(세레나데) 공연이 열리는 메리다의 생활 광장.", category: "공원" },
    ],
    dayTrips: [
      { name: "치첸이트사", nameEn: "Chichén Itzá", description: "세계 7대 불가사의 마야 피라미드 도시로 메리다에서도 가까운 거리.", travelTime: "버스 약 2시간", gradient: "from-amber-400 to-orange-700" },
      { name: "칼라크물 생물권 보호구역", nameEn: "Celestún Biosphere Reserve", description: "홍학(플라밍고) 수천 마리가 서식하는 습지 보호구역 보트 투어.", travelTime: "차로 약 1.5시간", gradient: "from-pink-400 to-rose-600" },
    ],
    localFood: [
      { name: "코치니타 피빌", description: "아치오테 양념 돼지고기를 바나나 잎에 싸서 땅속에서 구운 유카탄 전통 요리.", emoji: "🐷" },
      { name: "판 데 카솔라", description: "유카탄 전통 빵으로 코치니타 타코와 함께 먹는 것이 현지 스타일.", emoji: "🍞" },
      { name: "아구아 데 차야", description: "유카탄 허브(차야)로 만든 시원한 건강 음료.", emoji: "🌿" },
    ],
    tips: [
      "그란 플라사 주변에서 일요일 오전에 열리는 무료 지역 행사와 음악 공연을 꼭 경험하세요.",
      "메리다는 멕시코에서 치안이 좋은 편입니다. 밤 산책도 구시가지 내에서는 비교적 안전.",
      "10월 말 디아 데 로스 무에르토스(죽은 자의 날) 축제는 메리다가 특히 화려합니다.",
    ],
  },
};

export const mexicoAttractionDetails: Record<string, AttractionDetail> = {
  // ===== MEXICO CITY =====
  "mexico/central/mexico-city/teotihuacan": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "BC 100년~AD 550년경 번성했던 고대 메소아메리카의 최대 도시. '신들이 창조된 곳'이라는 의미의 나우아틀어 이름을 가진 이 유적지는 전성기에 인구 15만 명을 자랑하는 당시 세계 6위 도시였습니다.",
    history: "누가 건설했는지 아직도 불명확한 신비로운 도시. AD 6세기경 갑자기 붕괴된 것으로 추정됩니다. 아즈텍인들은 이 폐허를 발견하고 '신들이 사는 곳'이라 이름 붙였습니다. 1987년 유네스코 세계유산 등재.",
    visitInfo: {
      hours: "09:00~17:00 (연중무휴)",
      admission: "성인 MXN$90 / 일요일 무료 (멕시코 시민 한정)",
      address: "San Juan Teotihuacan, State of Mexico",
      website: "https://www.inah.gob.mx",
    },
    highlights: [
      "태양의 피라미드(Pirámide del Sol) - 높이 65m, 정상 등반 가능",
      "달의 피라미드(Pirámide de la Luna) - 태양의 피라미드보다 약간 낮지만 전망 우수",
      "죽은 자의 거리(Calzada de los Muertos) - 4km 의식용 대로",
      "케찰파팔로틀 궁전의 벽화",
    ],
    nearbyAttractions: ["아즈텍 박물관(현장 내)", "산후안 테오티와칸 마을", "멕시코시티"],
    photoTips: "태양의 피라미드 정상에서 달의 피라미드와 죽은 자의 거리를 한 프레임에 담을 수 있습니다. 일출 방문 시(개장 직후) 사람 없는 드라마틱한 사진이 가능합니다.",
    tips: [
      "오전 9시 개장 직후 방문해야 강한 더위와 인파를 피할 수 있습니다.",
      "입장권 구입 줄이 길 수 있으므로 온라인 구매를 권장합니다.",
      "고지대(2,300m)에 있어 자외선이 강합니다. 선크림, 모자, 물 필수.",
      "멕시코시티 북부 버스 터미널에서 '피라미데스' 행 버스가 자주 출발합니다.",
    ],
  },
  "mexico/central/mexico-city/frida-kahlo-museum": {
    heroGradient: "from-blue-500 to-indigo-700",
    description: "세계 최고의 여성 예술가 중 한 명인 프리다 칼로(1907~1954)가 태어나고 사망한 코발트 블루의 집. 그녀의 작품 20여 점과 개인 소지품, 의류, 도자기 컬렉션이 전시됩니다.",
    history: "1904년 지어진 이 집에서 프리다 칼로가 태어났고, 디에고 리베라와 결혼 후 함께 살다 1954년 사망했습니다. 사후 디에고 리베라의 유언에 따라 박물관으로 공개됐습니다. 코발트 블루 색상은 프리다의 멕시코 원주민 문화에 대한 애정을 상징합니다.",
    visitInfo: {
      hours: "화~일 10:00~17:45 (월요일 휴관)",
      admission: "성인 MXN$270 / 학생 MXN$135",
      address: "Londres 247, Del Carmen, Coyoacán, CDMX 04100",
      website: "https://www.museofridakahlo.org.mx",
    },
    highlights: [
      "프리다 칼로의 자화상 작품들",
      "그녀가 실제 사용한 휠체어와 보조기구",
      "전통 테우아나 의상 컬렉션",
      "디에고 리베라의 벽화",
      "프리다의 재가 모셔진 다이닝룸",
    ],
    nearbyAttractions: ["디에고 리베라 아나우아카이 박물관", "코요아칸 중앙 광장", "프란세스카 가스파 시장"],
    photoTips: "파란 벽과 정원의 선인장이 어우러진 중정(파티오)이 가장 인기 있는 포토 스팟. 프리다의 침실과 스튜디오도 사진 찍기 좋습니다.",
    tips: [
      "온라인 사전 예약 필수 (museofridakahlo.org.mx). 주말은 2주 전 이상 예약 권장.",
      "코요아칸 마켓과 광장을 함께 묶어 반나절 코스로 방문하세요.",
      "가이드 투어(스페인어·영어)를 이용하면 작품 이해도가 훨씬 높아집니다.",
    ],
  },

  // ===== CANCUN =====
  "mexico/yucatan/cancun/chichen-itza": {
    heroGradient: "from-amber-500 to-yellow-700",
    description: "세계 7대 불가사의에 선정된 마야 문명의 정수. 쿠쿨칸의 피라미드(엘 카스티요)는 365일을 나타내는 365개의 계단과 춘분·추분에 뱀 그림자가 내려오는 천문학적 설계로 경이로운 유산입니다.",
    history: "AD 600~1200년에 번성한 마야-톨텍 혼합 문화 도시. 강력한 군사·무역 중심지였으며 전성기 인구는 5만 명에 달했습니다. 1988년 유네스코 세계유산, 2007년 세계 7대 불가사의로 선정됐습니다.",
    visitInfo: {
      hours: "08:00~17:00 (연중무휴)",
      admission: "성인 MXN$597 (연방 입장료 MXN$80 + 주 세금 MXN$517)",
      address: "Chichén Itzá, Yucatán, Mexico",
      website: "https://www.inah.gob.mx",
    },
    highlights: [
      "쿠쿨칸 피라미드(엘 카스티요) - 춘분·추분 뱀 그림자 현상",
      "메소아메리카 최대 규모의 볼코트(tlachtli)",
      "세노테 사그라도 - 마야인이 제물을 바친 신성한 우물",
      "전사의 신전(Temple of the Warriors)",
    ],
    nearbyAttractions: ["세노테 이크킬", "바야돌리드", "코바 마야 유적"],
    photoTips: "피라미드는 동쪽(오전)과 서쪽(오후) 방향에서 빛이 달라집니다. 인파가 몰리는 정면보다 측면에서 찍으면 덜 붐빈 사진을 얻을 수 있습니다.",
    tips: [
      "현재 피라미드 등반은 금지되어 있습니다(2006년 이후).",
      "춘분(3월 20일경)·추분(9월 22일경) 뱀 그림자 현상을 보려면 매우 일찍 방문해야 합니다.",
      "오전 8시 개장 직후 방문이 가장 좋습니다. 오전 11시 이후는 더위와 인파로 매우 힘듭니다.",
      "현장 판매 가이드 투어($30~50)를 이용하면 역사를 훨씬 풍부하게 이해할 수 있습니다.",
    ],
  },
  "mexico/yucatan/cancun/tulum": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "카리브해를 내려다보는 절벽 위에 세워진 마야 후기 유적지(AD 1200~1500년). '울타리'를 의미하는 툴룸은 마야 상업 항구도시였으며, 현재는 보헤미안 에코 리조트와 트렌디한 레스토랑으로 유명한 비치 타운입니다.",
    history: "15세기 마야 문명의 무역 중심지로 흑요석, 코팔, 꿀 등을 교역했습니다. 1518년 스페인 탐험가 후안 데 그리할바가 처음 발견했으며 원주민들은 1550년대까지 이 도시에 거주했습니다.",
    visitInfo: {
      hours: "08:00~17:00 (연중무휴)",
      admission: "MXN$95 (유적지) / 해변 비치 무료",
      address: "Zona Arqueológica Tulum, Quintana Roo",
      website: "https://www.inah.gob.mx",
    },
    highlights: [
      "카리브해 절벽 위의 엘 카스티요 신전",
      "유적지 내 해변에서 수영",
      "이구아나가 돌아다니는 고대 도시",
      "툴룸 비치 클럽(유적지 남쪽)",
    ],
    nearbyAttractions: ["그란 세노테", "코바 마야 피라미드", "플라야 파라이소", "아킬"],
    photoTips: "절벽 위 엘 카스티요와 카리브해를 배경으로 담는 각도가 가장 아름답습니다. 오전 8시 방문 시 빛이 좋고 인파도 적습니다.",
    tips: [
      "유적지와 비치 클럽은 별개 구역. 유적 관람 후 남쪽 해변에서 수영이 가능합니다.",
      "칸쿤·플라야 델 카르멘에서 ADO 버스로 편리하게 이동 가능.",
      "툴룸 비치 클럽은 음식·음료 최소 구매 조건이 있는 경우가 많습니다.",
    ],
  },
};
