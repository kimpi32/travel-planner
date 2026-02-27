import type { CityDetail, AttractionDetail } from "../city-details";

export const brazilCityDetails: Record<string, CityDetail> = {
  // ===== SOUTHEAST =====
  "brazil/southeast/rio-de-janeiro": {
    heroGradient: "from-green-500 to-yellow-600",
    description: "삼바와 카니발의 도시, 리우데자네이루. 코르코바도 언덕의 예수상과 슈가로프 산이 내려다보는 코파카바나 해변은 세계에서 가장 아름다운 도시 경관 중 하나입니다. 열정적인 문화와 자연이 완벽하게 어우러진 브라질의 상징.",
    bestTime: "12~3월 (카니발 시즌) / 4~6월 (날씨 온화)",
    stayArea: "이파네마 / 코파카바나 / 산타테레사",
    transport: "지하철 2개 노선, 버스, 택시, 우버 (공항에서 시내까지 약 40~60분)",
    districts: [
      { name: "코파카바나", nameEn: "Copacabana", description: "4km의 황금빛 해변이 펼쳐지는 리우의 상징적 해변 지구. 고급 호텔과 식당이 즐비합니다.", highlights: ["코파카바나 해변", "포르테 코파카바나", "아틀란티카 대로"] },
      { name: "이파네마", nameEn: "Ipanema", description: "보사노바 명곡 '이파네마의 소녀'의 배경이 된 세련된 해변 지구. 상점과 카페가 가득합니다.", highlights: ["이파네마 해변", "가로타 데 이파네마 공원", "페이라 이파네마 시장"] },
      { name: "산타테레사", nameEn: "Santa Teresa", description: "예술가와 보헤미안이 모이는 언덕 위 예술촌. 식민지 시대 건물과 갤러리가 가득합니다.", highlights: ["본지아르딩 문화 센터", "차론가 트램", "벡코 도 프로그레소 벽화"] },
    ],
    attractions: [
      { name: "코르코바도 산 (예수상)", nameEn: "Corcovado (Christ the Redeemer)", description: "710m 높이에 우뚝 선 38m의 거대한 예수 그리스도 상. 유네스코 세계유산이자 세계 7대 불가사의.", category: "랜드마크", tip: "트레인으로 오르거나 반 호이겐 전망대에서 올려다보세요. 흐린 날에는 구름에 가려집니다." },
      { name: "슈가로프 산", nameEn: "Sugarloaf Mountain", description: "396m 높이에서 구아나바라만과 리우 전경을 감상하는 케이블카 명소. 일몰 시간이 압권입니다.", category: "자연", tip: "오전보다 오후 늦게 방문하면 황금빛 일몰과 야경을 함께 즐길 수 있습니다." },
      { name: "코파카바나 해변", nameEn: "Copacabana Beach", description: "4km의 황금빛 모래사장으로 리우 시민들의 삶의 터전. 비치 발리볼, 풋살, 선탠을 즐기는 사람들로 가득합니다.", category: "해변", tip: "귀중품은 호텔에 두고 가세요. 비치 근처 허가된 노점상의 카이피리냐를 꼭 마셔보세요." },
      { name: "티주카 국립공원", nameEn: "Tijuca National Park", description: "도심 한복판에 자리한 세계 최대의 도시 열대우림. 폭포와 하이킹 코스가 있습니다.", category: "자연" },
      { name: "셀라론 계단", nameEn: "Escadaria Selarón", description: "칠레 예술가 셀라론이 215개 계단을 2,000개 이상의 타일로 장식한 예술 작품.", category: "예술" },
      { name: "국립자연사박물관", nameEn: "Museu Nacional", description: "200년 역사의 브라질 최대 자연사박물관 (현재 재건 중).", category: "박물관" },
    ],
    dayTrips: [
      { name: "페트로폴리스", nameEn: "Petropolis", description: "브라질 황제의 여름 궁전이 있는 산악 도시. 시원한 기후와 유럽풍 건물이 매력.", travelTime: "버스 약 1시간 30분", gradient: "from-blue-400 to-indigo-700" },
      { name: "파라티", nameEn: "Paraty", description: "잘 보존된 포르투갈 식민지 시대 역사 지구와 아름다운 만이 공존하는 보석 같은 해안 마을.", travelTime: "버스 약 4시간", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "페이조아다", description: "검은콩과 돼지고기를 넣은 브라질의 국민 스튜. 쌀·콜라드·파로파와 함께 먹습니다.", emoji: "🫘" },
      { name: "카이피리냐", description: "카샤사(사탕수수 증류주)에 라임과 설탕을 넣은 브라질 국민 칵테일.", emoji: "🍹" },
      { name: "아사이", description: "신선한 아사이 베리를 갈아 만든 보울. 해변 가판대에서 즐기세요.", emoji: "🫐" },
    ],
    tips: [
      "택시보다 우버가 안전하고 저렴합니다. 공항 공식 택시는 정해진 요금이 있습니다.",
      "해변에서는 귀중품을 들고 다니지 마세요. 슬리퍼와 약간의 현금만 가져가세요.",
      "카니발(2~3월)은 세계 최대의 축제이지만 숙소는 6개월 전에 예약해야 합니다.",
      "예수상 방문은 이른 아침(8시 개장)이 구름도 적고 인파도 덜합니다.",
    ],
  },
  "brazil/southeast/sao-paulo": {
    heroGradient: "from-gray-600 to-slate-800",
    description: "남미 최대의 메트로폴리스, 상파울루. 인구 2,200만의 거대 도시는 브라질 경제의 심장이자 미식과 예술의 중심지입니다. 세계 최고 수준의 레스토랑과 박물관, 다양한 이민자 문화가 공존합니다.",
    bestTime: "4~6월 / 8~10월 (건기, 온화한 날씨)",
    stayArea: "파울리스타 대로 / 자르딩 / 이타임 비비",
    transport: "지하철 6개 노선, CPTM 광역철도, 버스 (빌헤테 우니코 교통카드)",
    districts: [
      { name: "리베르다지", nameEn: "Liberdade", description: "일본계 이민자의 정착지로 형성된 아시아 문화 지구. 매주 일요일 동양 시장이 열립니다.", highlights: ["리베르다지 광장", "일요 동양 시장", "이민 박물관"] },
      { name: "빌라 마달레나", nameEn: "Vila Madalena", description: "예술가와 힙스터가 모이는 보헤미안 지구. 형형색색의 벽화와 바, 갤러리가 가득합니다.", highlights: ["베코 도 바트만 벽화 골목", "핀네로스 시장", "예술 갤러리들"] },
      { name: "파울리스타 대로", nameEn: "Avenida Paulista", description: "상파울루의 주요 비즈니스 대로. MASP(상파울루 미술관)를 중심으로 문화시설이 밀집.", highlights: ["MASP", "이비라푸에라 공원", "트리아농 공원"] },
    ],
    attractions: [
      { name: "상파울루 미술관 (MASP)", nameEn: "Museu de Arte de São Paulo", description: "유럽 명화를 포함한 세계적 컬렉션을 자랑하는 파울리스타 대로의 상징적 건물.", category: "박물관", tip: "화요일은 무료입장. 지하 갤러리의 유리 이젤 전시 방식이 인상적입니다." },
      { name: "이비라푸에라 공원", nameEn: "Ibirapuera Park", description: "브라질 건축의 거장 오스카 니에마이어가 설계한 상파울루의 허파. 넓은 호수와 박물관들이 있습니다.", category: "공원", tip: "주말 아침에는 조깅과 자전거를 즐기는 시민들로 가득합니다." },
      { name: "파울리스타 대로", nameEn: "Avenida Paulista", description: "3km의 대로가 일요일마다 보행자 전용 도로로 바뀌며 문화 행사가 열립니다.", category: "거리" },
      { name: "베코 도 바트만", nameEn: "Beco do Batman", description: "빌라 마달레나에 있는 벽화 골목으로 브라질 그래피티 아트의 성지.", category: "예술" },
    ],
    dayTrips: [
      { name: "캄피나스", nameEn: "Campinas", description: "기술 혁신의 도시로 유명한 상파울루 주의 제2도시. 브라질 최대 인큐베이터 허브.", travelTime: "버스 약 1시간 30분", gradient: "from-blue-500 to-indigo-700" },
      { name: "일랴 벨라", nameEn: "Ilhabela", description: "상파울루 주 북쪽의 아름다운 섬으로 트래킹과 다이빙 명소.", travelTime: "버스 + 페리 약 3시간", gradient: "from-cyan-400 to-teal-700" },
    ],
    localFood: [
      { name: "상파울루 피자", description: "이탈리아 이민자들이 가져온 전통이 현지화된 브라질식 피자. 세계 최대 피자 소비 도시.", emoji: "🍕" },
      { name: "파스텔", description: "얇은 반죽에 치즈·고기·새우 등을 채워 튀긴 브라질식 만두. 재래시장의 필수 간식.", emoji: "🥟" },
      { name: "비냐리냐 나 살사", description: "토마토 소스에 양파와 파프리카를 넣은 상파울루식 소고기 스튜.", emoji: "🥩" },
    ],
    tips: [
      "상파울루는 브라질 최고의 레스토랑이 밀집한 미식 도시입니다. 일본식 요리부터 미슐랭 레스토랑까지 다양합니다.",
      "일요일 파울리스타 대로는 차 없는 거리로 변신합니다.",
      "지하철은 안전하고 효율적이지만 피크타임(7~9시, 17~19시)은 매우 혼잡합니다.",
      "브라질 레알(BRL)은 현지 환전이 더 유리합니다.",
    ],
  },

  // ===== NORTHEAST =====
  "brazil/northeast/salvador": {
    heroGradient: "from-yellow-500 to-orange-700",
    description: "아프리카 문화와 포르투갈 식민지 유산이 융합된 도시, 살바도르. 펠로리뉴 역사 지구의 색채로운 바로크 건축, 카포에이라, 칸돔블레 종교, 세계 최고의 카니발이 이 도시를 독특하게 만듭니다.",
    bestTime: "6~9월 (건기) / 2월 (카니발)",
    stayArea: "펠로리뉴 / 바라 / 리투라우 노르치",
    transport: "버스, 페리(이타파리카 섬), 택시, 우버",
    districts: [
      { name: "펠로리뉴", nameEn: "Pelourinho", description: "유네스코 세계유산으로 지정된 식민지 시대 역사 지구. 화려한 색상의 바로크 건물과 조약돌 거리.", highlights: ["카테드랄 바실리카", "상 프란시스코 성당", "팔라시오 리우 브랑코"] },
      { name: "바라", nameEn: "Barra", description: "등대와 해변이 어우러진 살바도르의 대표 해변 지구. 카니발 코스가 지나는 곳입니다.", highlights: ["바라 등대", "바라 해변", "해양 박물관"] },
    ],
    attractions: [
      { name: "펠로리뉴 역사 지구", nameEn: "Pelourinho", description: "17세기 포르투갈 식민지 건축의 정수. 파란색·노란색·분홍색으로 칠해진 건물들이 언덕길을 따라 늘어선 아름다운 구시가지.", category: "역사", tip: "화요일 밤에는 무료 야외 공연이 펼쳐집니다." },
      { name: "상 프란시스코 성당", nameEn: "Igreja de São Francisco", description: "브라질 바로크 건축의 정수로 꼽히는 성당. 내부의 황금 장식이 압도적입니다.", category: "성당", tip: "내부 사진 촬영이 허용되지만 엄숙함을 유지하세요." },
      { name: "카포에이라 퍼포먼스", nameEn: "Capoeira Performance", description: "아프리카 노예들이 발전시킨 전통 무술이자 예술. 펠로리뉴 광장에서 일상적으로 공연됩니다.", category: "문화" },
    ],
    dayTrips: [
      { name: "이타파리카 섬", nameEn: "Ilha de Itaparica", description: "살바도르에서 페리로 45분 거리의 청정 해변 섬.", travelTime: "페리 약 45분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "아카라제", description: "검은눈콩을 갈아 덴데 오일에 튀긴 반죽에 새우 스튜를 채운 바이안 음식.", emoji: "🧆" },
      { name: "무케카 바이아나", description: "코코넛 밀크와 덴데 오일로 만든 바이아 스타일의 해산물 스튜.", emoji: "🍲" },
      { name: "카이피리냐 데 카샤사", description: "살바도르 스타일의 카이피리냐. 카샤사 품질이 각별합니다.", emoji: "🍹" },
    ],
    tips: [
      "펠로리뉴는 낮에는 안전하지만 밤에는 그룹으로 다니세요.",
      "카포에이라 학교(아카데미아)에서 체험 클래스를 들어볼 수 있습니다.",
      "살바도르 카니발(2월)은 리우보다 더 활발하고 참여적입니다.",
      "덴데 오일(팜유)이 많이 사용되므로 위장이 약하다면 양을 조절하세요.",
    ],
  },

  // ===== SOUTH =====
  "brazil/south/foz-do-iguacu": {
    heroGradient: "from-emerald-500 to-teal-700",
    description: "세계에서 가장 넓고 장대한 이과수 폭포가 있는 도시. 275개의 폭포가 2.7km에 걸쳐 쏟아지는 장관은 아르헨티나 쪽과 브라질 쪽에서 각각 다른 시각으로 감상할 수 있습니다.",
    bestTime: "3~5월 / 8~11월 (수량 풍부, 날씨 좋음)",
    stayArea: "폭포 주변 호텔 / 포스 도 이과수 시내",
    transport: "시내버스 (국립공원 내 셔틀), 택시, 우버, 렌터카",
    districts: [
      { name: "이과수 국립공원 (브라질)", nameEn: "Iguacu National Park Brazil", description: "유네스코 세계유산인 이과수 폭포 브라질 쪽. 악마의 목구멍을 정면에서 바라보는 전망이 일품.", highlights: ["악마의 목구멍 전망", "보트 투어", "새 공원"] },
    ],
    attractions: [
      { name: "이과수 폭포 (브라질 쪽)", nameEn: "Iguacu Falls Brazil Side", description: "폭포 전체를 파노라마로 조망할 수 있는 브라질 쪽 전망대. 레인보우도 자주 출현합니다.", category: "자연", tip: "우기(3~4월)에는 수량이 최대. 우비를 챙기세요." },
      { name: "악마의 목구멍", nameEn: "Devil's Throat", description: "이과수 폭포 중 가장 강렬한 구간. 82m 높이에서 폭포수가 쏟아지는 U자 형태의 협곡.", category: "자연", tip: "아르헨티나 쪽에서 더 가까이 체험할 수 있습니다." },
      { name: "포즈 도 이과수 새 공원", nameEn: "Parque das Aves", description: "이과수 국립공원 입구의 조류 공원. 800여 종의 브라질 새를 가까이 볼 수 있습니다.", category: "자연" },
    ],
    dayTrips: [
      { name: "이과수 폭포 (아르헨티나 쪽)", nameEn: "Iguazu Falls Argentina Side", description: "악마의 목구멍에 더 가까이 다가갈 수 있는 아르헨티나 쪽. 트레일이 더 길고 풍성합니다.", travelTime: "국경 버스 약 30~45분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "파란야 쪽탕", description: "이과수 지역 특산 파란야강 물고기로 만든 브라질식 생선 수프.", emoji: "🐟" },
      { name: "브라질 슈하스코", description: "다양한 고기를 꼬치에 꿰어 화롯불에 굽는 브라질 바베큐.", emoji: "🍖" },
    ],
    tips: [
      "브라질 쪽과 아르헨티나 쪽을 각각 하루씩 배정하는 것이 이상적입니다.",
      "국경을 넘을 때 여권이 필요합니다. 비자 요건을 사전에 확인하세요.",
      "보트 투어(마크코 투어)는 폭포 바로 아래까지 접근합니다. 완전히 젖으니 준비하세요.",
      "이른 아침(8~9시) 방문이 관광객이 적고 무지개 보기에도 좋습니다.",
    ],
  },
};

export const brazilAttractionDetails: Record<string, AttractionDetail> = {
  // ===== RIO DE JANEIRO =====
  "brazil/southeast/rio-de-janeiro/corcovado": {
    heroGradient: "from-green-500 to-yellow-600",
    description: "710m 높이의 코르코바도 산 정상에 팔을 벌리고 서 있는 38m 높이의 예수 그리스도 상. 1931년 완공된 이 조각상은 유네스코 세계유산이자 세계 7대 불가사의 중 하나로, 리우데자네이루의 영원한 상징입니다.",
    visitInfo: {
      hours: "08:00~19:00 (마지막 입장 18:00)",
      admission: "성인 R$87 (트레인 포함) / 아동 R$44",
      address: "Parque Nacional da Tijuca, Rio de Janeiro",
      website: "https://www.corcovado.com.br",
    },
    highlights: [
      "팔 너비 28m의 거대한 예수 그리스도 조각상",
      "리우데자네이루 전경을 360도로 조망하는 파노라마 전망",
      "코르코바도 산악 트레인 탑승 경험",
      "구아나바라만과 코파카바나 해변의 항공 뷰",
      "티주카 국립공원 열대우림 통과",
    ],
    nearbyAttractions: ["티주카 국립공원", "슈가로프 산", "라르고 두 보티코지로 광장"],
    photoTips: "구름 없는 맑은 날 오전에 방문하면 예수상과 리우 전경을 함께 담을 수 있습니다. 발 아래 플랫폼 끝에서 팔을 벌리는 인증샷이 인기입니다.",
    tips: [
      "온라인 사전 예약 필수. 현장 구매 시 대기 시간이 2~3시간이 될 수 있습니다.",
      "흐린 날에는 예수상이 구름에 완전히 가릴 수 있으니 날씨를 반드시 확인하세요.",
      "등산로로도 올라갈 수 있습니다 (왕복 약 2시간). 체력과 날씨를 고려하세요.",
      "정상에서 간단한 음식과 기념품을 판매합니다.",
    ],
  },
  "brazil/southeast/rio-de-janeiro/sugarloaf-mountain": {
    heroGradient: "from-orange-400 to-red-600",
    description: "구아나바라만 입구에 우뚝 솟은 396m 화강암 봉우리. 두 번의 케이블카를 타고 정상에 오르면 리우데자네이루 전경과 해안선, 예수상까지 한눈에 담을 수 있습니다. 세계에서 가장 아름다운 도시 뷰 중 하나입니다.",
    visitInfo: {
      hours: "08:00~21:00 (케이블카 운행)",
      admission: "성인 R$149 / 아동 R$74",
      address: "Praia Vermelha, Urca, Rio de Janeiro",
      website: "https://bondinho.com.br",
    },
    highlights: [
      "케이블카에서 바라보는 리우 항구와 코파카바나 해변",
      "정상 전망대에서 코르코바도 예수상과 마주보는 파노라마",
      "일몰 후 리우 야경 감상",
      "우르카 언덕(중간 정차) 에서의 전망",
      "구아나바라만의 함대와 니테로이 다리 조망",
    ],
    nearbyAttractions: ["우르카 해변", "베르멜랴 해변", "코르코바도 산"],
    photoTips: "오후 4~5시에 방문하면 황금빛 일몰과 야경을 동시에 즐길 수 있습니다. 케이블카 내부에서 리우 항구를 향해 촬영하면 인상적입니다.",
    tips: [
      "오후 늦게 방문해 일몰과 야경을 함께 즐기는 것이 가장 좋습니다.",
      "케이블카는 날씨에 따라 운행이 중단될 수 있으니 공식 사이트에서 확인하세요.",
      "정상에 레스토랑과 바가 있어 식사하며 야경을 즐길 수 있습니다.",
      "온라인 예약 시 줄 서는 시간을 절약할 수 있습니다.",
    ],
  },
  "brazil/southeast/rio-de-janeiro/copacabana-beach": {
    heroGradient: "from-yellow-400 to-amber-600",
    description: "4km에 걸쳐 펼쳐지는 황금빛 모래사장으로 리우데자네이루의 심장. 코르코바도 산과 슈가로프 산이 내려다보는 이 해변은 도시 문화와 자연이 완벽하게 융합된 세계에서 가장 유명한 해변 중 하나입니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Copacabana, Rio de Janeiro",
    },
    highlights: [
      "4km의 황금빛 모래사장과 파도",
      "해변 비치 발리볼, 풋살, 서핑",
      "파베카(파라솔) 아래 카이피리냐 즐기기",
      "아틀란티카 대로 바다 쪽 파도 모자이크 보도",
      "새해 전날 300만 명이 모이는 세계 최대 야외 콘서트",
    ],
    nearbyAttractions: ["이파네마 해변", "포르테 코파카바나", "리우 카니발 삼보드로무"],
    photoTips: "포르테 코파카바나 요새 전망대나 아베니다 아틀란티카 보도에서 해변 전체를 담을 수 있습니다. 일출 시간이 특히 아름답습니다.",
    tips: [
      "귀중품은 절대 해변에 두지 마세요. 도난 사건이 빈번합니다.",
      "공식 구명대 포스토(posto)별로 분위기가 다릅니다. 포스토 9(이파네마 경계)가 가장 화려합니다.",
      "선크림은 SPF 50 이상을 꼭 바르세요. 브라질 태양은 강렬합니다.",
      "해변 근처 허가된 노점상의 마테차(마테 차)와 비스코이토가 현지 경험입니다.",
    ],
  },
  "brazil/south/foz-do-iguacu/iguacu-falls": {
    heroGradient: "from-emerald-500 to-teal-700",
    description: "275개의 폭포가 2.7km에 걸쳐 쏟아지는 세계에서 가장 넓은 폭포군. 아르헨티나와 브라질 국경에 걸쳐 있으며, 유네스코 세계유산으로 지정된 이 경이로운 자연은 나이아가라 폭포를 '작게' 만든다는 루즈벨트 부인의 말로 유명합니다.",
    visitInfo: {
      hours: "09:00~17:00 (국립공원)",
      admission: "성인 R$102 / 아동 R$51",
      address: "Rodovia das Cataratas, Foz do Iguacu, Parana",
      website: "https://www.cataratasdoiguacu.com.br",
    },
    highlights: [
      "악마의 목구멍(Garganta del Diablo) - 가장 강렬한 폭포 구간",
      "1.2km 트레일을 따라 이어지는 전망대",
      "폭포 바로 아래까지 접근하는 보트 투어",
      "폭포에서 생성되는 무지개 (오전이 더 선명)",
      "열대우림 속 다양한 야생동물",
    ],
    nearbyAttractions: ["포즈 도 이과수 새 공원", "이과수 폭포 아르헨티나 쪽", "이타이푸 댐"],
    photoTips: "폭포를 정면으로 바라보는 전망대에서 광각 렌즈 사용을 추천합니다. 오전에는 브라질 쪽에서 무지개가 잘 보입니다. 보트 투어 시 방수 케이스를 준비하세요.",
    tips: [
      "우비나 방수 재킷을 챙기세요. 폭포 스프레이로 상당히 젖습니다.",
      "브라질 쪽은 파노라마 뷰, 아르헨티나 쪽은 근접 체험이 특징입니다.",
      "오전 9~10시가 관광객이 가장 적은 시간입니다.",
      "국립공원 셔틀버스를 이용해 트레일 입구까지 이동하세요.",
    ],
  },
};
