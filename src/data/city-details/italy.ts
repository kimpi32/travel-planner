import type { CityDetail, AttractionDetail } from "../city-details";

export const italyCityDetails: Record<string, CityDetail> = {
  // ===== ROME & LAZIO =====
  "italy/rome-lazio/rome": {
    heroGradient: "from-amber-600 to-red-800",
    description: "영원의 도시 로마. 콜로세움, 판테온, 트레비 분수 등 2,000년 역사의 유적이 도시 곳곳에 살아 숨 쉬며, 바티칸 시국을 품은 세계 문명의 중심지입니다.",
    bestTime: "4~6월, 9~10월 (여름 성수기 회피)",
    stayArea: "테르미니역 주변 / 나보나 광장 근처",
    transport: "메트로 A·B·C선, 버스, 트램 (Roma Pass 활용)",
    districts: [
      { name: "역사 중심지", nameEn: "Centro Storico", description: "나보나 광장, 판테온, 트레비 분수가 밀집한 로마의 핵심 관광 지역.", highlights: ["나보나 광장", "판테온", "트레비 분수", "캄포 데 피오리"] },
      { name: "콜로세움 지구", nameEn: "Colosseo", description: "고대 로마 유적이 집중된 포로 로마노와 콜로세움 일대.", highlights: ["콜로세움", "포로 로마노", "팔라티노 언덕", "콘스탄티누스 개선문"] },
      { name: "트라스테베레", nameEn: "Trastevere", description: "좁은 골목과 담쟁이 덮인 건물이 매력적인 로마의 보헤미안 지구.", highlights: ["산타 마리아 교회", "로마 맛집 골목", "야니쿨룸 언덕 전망대"] },
    ],
    attractions: [
      { name: "콜로세움", nameEn: "Colosseum", description: "서기 80년 완공된 고대 로마 최대의 원형 경기장으로 5만 명을 수용했습니다.", category: "유적", tip: "온라인 사전 예약 필수. 포로 로마노·팔라티노 통합 티켓을 구매하세요." },
      { name: "바티칸 미술관 & 시스티나 예배당", nameEn: "Vatican Museums & Sistine Chapel", description: "미켈란젤로의 천지창조 천장화와 최후의 심판이 있는 세계 최고의 미술관.", category: "미술관", tip: "금요일 야간 개방(~22:30)을 이용하면 인파가 적습니다." },
      { name: "트레비 분수", nameEn: "Trevi Fountain", description: "바로크 양식의 로마 최대 분수로, 동전을 던지면 로마에 돌아온다는 전설이 있습니다.", category: "분수", tip: "이른 아침(07:00 이전)에 방문하면 한적하게 감상할 수 있습니다." },
      { name: "판테온", nameEn: "Pantheon", description: "서기 125년 하드리아누스 황제가 재건한 고대 신전으로, 세계 최대의 비보강 콘크리트 돔입니다.", category: "유적", tip: "입장 무료이지만 2023년부터 예약제(€5)가 도입되었습니다." },
      { name: "포로 로마노", nameEn: "Roman Forum", description: "고대 로마의 정치·경제·종교 중심지였던 광장 유적.", category: "유적" },
      { name: "스페인 계단", nameEn: "Spanish Steps", description: "트리니타 데이 몬티 교회로 이어지는 135개 계단으로 로마의 상징적 랜드마크.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "티볼리", nameEn: "Tivoli", description: "하드리아누스 별장과 에스테 별장의 분수 정원으로 유명한 교외 도시.", travelTime: "기차 약 1시간", gradient: "from-green-400 to-emerald-700" },
      { name: "나폴리 & 폼페이", nameEn: "Naples & Pompeii", description: "고속열차로 당일치기 가능한 남부 이탈리아의 핵심 도시.", travelTime: "고속열차 약 1시간 10분", gradient: "from-orange-400 to-red-700" },
    ],
    localFood: [
      { name: "카르보나라", description: "계란, 페코리노 치즈, 관찰레, 후추로 만드는 로마 정통 파스타.", emoji: "🍝" },
      { name: "카초 에 페페", description: "페코리노 치즈와 후추만으로 완성하는 심플한 로마 파스타.", emoji: "🧀" },
      { name: "수플리", description: "모차렐라 치즈가 들어간 로마식 튀긴 라이스볼.", emoji: "🍙" },
    ],
    tips: [
      "Roma Pass(48시간/72시간)로 대중교통 무료 + 주요 관광지 할인을 받으세요.",
      "콜로세움, 바티칸 미술관은 반드시 온라인 사전 예약이 필요합니다.",
      "소매치기가 잦으니 메트로와 관광지에서 소지품에 주의하세요.",
      "레스토랑에서 코페르토(자릿세, €1~3)는 정상적인 관행입니다.",
    ],
  },
  "italy/rome-lazio/vatican-city": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "세계에서 가장 작은 독립국이자 가톨릭의 총본산. 성 베드로 대성당, 바티칸 미술관, 시스티나 예배당 등 인류 최고의 예술 유산이 집약된 곳입니다.",
    bestTime: "4~6월, 9~10월 (수요일 교황 알현 가능)",
    stayArea: "로마 프라티 지구 / 바티칸 근처",
    transport: "메트로 A선 오타비아노역 또는 치프로역",
    districts: [
      { name: "성 베드로 광장", nameEn: "St. Peter's Square", description: "베르니니가 설계한 거대한 타원형 광장으로 바티칸의 관문.", highlights: ["성 베드로 대성당", "오벨리스크", "베르니니 열주랑"] },
      { name: "바티칸 미술관 구역", nameEn: "Vatican Museums Area", description: "미술관 입구에서 시스티나 예배당까지 이어지는 방대한 전시 공간.", highlights: ["시스티나 예배당", "라파엘로의 방", "지도 갤러리"] },
    ],
    attractions: [
      { name: "성 베드로 대성당", nameEn: "St. Peter's Basilica", description: "세계 최대의 성당으로 미켈란젤로의 피에타와 베르니니의 발다키노가 있습니다.", category: "성당", tip: "쿠폴라(돔) 전망대는 551개 계단이지만 로마 최고의 전망을 제공합니다." },
      { name: "시스티나 예배당", nameEn: "Sistine Chapel", description: "미켈란젤로의 천지창조 천장화와 최후의 심판 벽화가 있는 교황 선출 장소.", category: "예배당", tip: "바티칸 미술관 티켓에 포함되어 있으며, 내부 촬영은 금지입니다." },
      { name: "바티칸 정원", nameEn: "Vatican Gardens", description: "23헥타르 규모의 르네상스·바로크 정원으로 가이드 투어로만 입장 가능.", category: "정원" },
    ],
    dayTrips: [
      { name: "카스텔 간돌포", nameEn: "Castel Gandolfo", description: "교황의 여름 별장이 있는 알바노 호수 변의 아름다운 마을.", travelTime: "기차 약 40분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "피자 알 탈리오", description: "네모나게 잘라 무게로 파는 로마식 사각 피자.", emoji: "🍕" },
      { name: "젤라토", description: "이탈리아 전통 아이스크림, 바티칸 주변에 명소가 많습니다.", emoji: "🍨" },
    ],
    tips: [
      "바티칸 미술관은 온라인 사전 예약(€4 추가)으로 긴 줄을 피하세요.",
      "성 베드로 대성당 입장은 무료이지만 복장 규정(어깨·무릎 가림)이 엄격합니다.",
      "매주 수요일 오전 교황 알현은 무료이며 온라인으로 티켓을 신청할 수 있습니다.",
    ],
  },
  "italy/rome-lazio/tivoli": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "로마 동쪽 교외의 고대 휴양 도시. UNESCO 세계유산인 하드리아누스 별장과 에스테 별장의 환상적인 분수 정원이 유명합니다.",
    bestTime: "4~10월 (분수 정원 감상에 최적)",
    stayArea: "로마에서 당일치기 추천",
    transport: "로마 티부르티나역에서 기차 약 1시간",
    districts: [
      { name: "티볼리 구시가지", nameEn: "Tivoli Centro", description: "에스테 별장이 위치한 언덕 위의 중세 마을.", highlights: ["에스테 별장", "그레고리아나 별장", "로카 피아"] },
    ],
    attractions: [
      { name: "에스테 별장", nameEn: "Villa d'Este", description: "르네상스 추기경의 별장으로 500개 이상의 분수가 있는 경이로운 정원.", category: "정원", tip: "오후 늦게 방문하면 분수에 햇빛이 비쳐 무지개가 생깁니다." },
      { name: "하드리아누스 별장", nameEn: "Villa Adriana", description: "2세기 로마 황제의 별장 유적으로 30동 이상의 건물이 있었던 대규모 단지.", category: "유적" },
      { name: "그레고리아나 별장", nameEn: "Villa Gregoriana", description: "깊은 협곡과 폭포가 인상적인 자연 공원.", category: "공원" },
    ],
    dayTrips: [
      { name: "로마 시내", nameEn: "Rome City Center", description: "기차로 쉽게 복귀 가능한 영원의 도시.", travelTime: "기차 약 1시간", gradient: "from-amber-400 to-red-700" },
    ],
    localFood: [
      { name: "포르게타", description: "통돼지구이를 얇게 썰어 빵에 끼워 먹는 라치오 전통 음식.", emoji: "🥖" },
      { name: "올리브 오일", description: "사비나 지역의 DOP 인증 엑스트라 버진 올리브 오일.", emoji: "🫒" },
    ],
    tips: [
      "에스테 별장과 하드리아누스 별장은 거리가 있으니 택시 또는 버스를 이용하세요.",
      "하드리아누스 별장은 넓으므로 최소 2시간을 잡으세요.",
      "월요일에 에스테 별장이 휴관일 수 있으니 사전에 확인하세요.",
    ],
  },

  // ===== TUSCANY =====
  "italy/tuscany/florence": {
    heroGradient: "from-rose-500 to-amber-700",
    description: "르네상스의 발상지 피렌체. 우피치 미술관, 두오모, 베키오 다리 등 도시 전체가 야외 미술관이며, 메디치 가문의 유산이 살아 숨 쉬는 예술의 도시입니다.",
    bestTime: "4~6월, 9~10월",
    stayArea: "두오모 주변 / 산타 크로체 지구",
    transport: "도보 (구시가지 전체 도보 가능) + ATAF 버스",
    districts: [
      { name: "두오모 지구", nameEn: "Duomo District", description: "피렌체의 상징 두오모 대성당을 중심으로 한 역사 핵심 지역.", highlights: ["두오모", "지오토 종탑", "산 조반니 세례당"] },
      { name: "올트라르노", nameEn: "Oltrarno", description: "아르노 강 남쪽의 장인 공방과 로컬 레스토랑이 밀집한 지역.", highlights: ["피티 궁전", "보볼리 정원", "산토 스피리토 광장"] },
      { name: "산타 크로체", nameEn: "Santa Croce", description: "산타 크로체 성당 주변의 활기찬 지역으로 가죽 시장이 유명.", highlights: ["산타 크로체 성당", "가죽 시장", "미켈란젤로 광장"] },
    ],
    attractions: [
      { name: "우피치 미술관", nameEn: "Uffizi Gallery", description: "보티첼리의 비너스의 탄생, 카라바조 등 르네상스 걸작을 소장한 세계적 미술관.", category: "미술관", tip: "화요일~일요일 운영, 온라인 예약 필수입니다." },
      { name: "두오모 (산타 마리아 델 피오레)", nameEn: "Florence Cathedral (Duomo)", description: "브루넬레스키의 거대한 붉은 돔이 상징적인 피렌체 대성당.", category: "성당", tip: "돔 등반(463계단)은 반드시 사전 예약이 필요합니다." },
      { name: "베키오 다리", nameEn: "Ponte Vecchio", description: "아르노 강 위의 중세 다리로 금세공 상점이 양쪽으로 늘어서 있습니다.", category: "다리" },
      { name: "아카데미아 미술관 (다비드 상)", nameEn: "Accademia Gallery", description: "미켈란젤로의 다비드 상 원본이 있는 미술관.", category: "미술관", tip: "오전 개관 직후가 가장 한적합니다." },
      { name: "피티 궁전", nameEn: "Pitti Palace", description: "메디치 가문의 거대한 궁전으로 여러 미술관과 보볼리 정원을 포함.", category: "궁전" },
    ],
    dayTrips: [
      { name: "시에나", nameEn: "Siena", description: "중세 분위기가 완벽히 보존된 토스카나의 보석 같은 도시.", travelTime: "버스 약 1시간 15분", gradient: "from-orange-400 to-red-700" },
      { name: "산 지미냐노", nameEn: "San Gimignano", description: "중세 탑의 도시로 불리는 토스카나의 작은 마을.", travelTime: "버스 약 1시간 30분", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "비스테카 알라 피오렌티나", description: "두께 5cm 이상의 티본 스테이크, 토스카나의 대표 요리.", emoji: "🥩" },
      { name: "리볼리타", description: "빵과 채소로 만든 토스카나 전통 농가 수프.", emoji: "🍲" },
      { name: "람프레도토", description: "소 위를 삶아 빵에 끼운 피렌체 길거리 음식.", emoji: "🥖" },
    ],
    tips: [
      "피렌체 카드(€85, 72시간)로 주요 미술관 우선 입장이 가능합니다.",
      "미켈란젤로 광장에서 일몰을 보는 것은 피렌체 필수 코스입니다.",
      "우피치와 아카데미아는 반드시 온라인 사전 예약하세요.",
      "트리파(소 내장 샌드위치) 노점은 중앙 시장 근처에서 찾을 수 있습니다.",
    ],
  },
  "italy/tuscany/siena": {
    heroGradient: "from-orange-500 to-red-800",
    description: "중세 시대에 멈춘 듯한 토스카나의 보석. 조개 모양의 캄포 광장과 팔리오 경마 축제로 유명하며, 피렌체와는 또 다른 매력의 예술 도시입니다.",
    bestTime: "4~10월 (팔리오: 7/2, 8/16)",
    stayArea: "캄포 광장 주변 구시가지",
    transport: "도보 (구시가지 전체 도보 가능)",
    districts: [
      { name: "캄포 광장 지구", nameEn: "Piazza del Campo", description: "시에나의 심장부로 세계에서 가장 아름다운 광장 중 하나.", highlights: ["캄포 광장", "만자의 탑", "푸블리코 궁전"] },
    ],
    attractions: [
      { name: "캄포 광장", nameEn: "Piazza del Campo", description: "조개 모양의 독특한 광장으로 팔리오 경마가 열리는 시에나의 심장.", category: "광장", tip: "광장에 앉아 와인 한 잔과 함께 여유를 즐기세요." },
      { name: "시에나 두오모", nameEn: "Siena Cathedral", description: "고딕 양식의 웅장한 대성당으로 대리석 바닥 모자이크가 유명합니다.", category: "성당" },
      { name: "만자의 탑", nameEn: "Torre del Mangia", description: "높이 102m의 시청사 탑으로 시에나 전경을 조망할 수 있습니다.", category: "전망대", tip: "400개 계단, 인원 제한이 있으니 오전에 방문하세요." },
    ],
    dayTrips: [
      { name: "산 지미냐노", nameEn: "San Gimignano", description: "중세 탑의 도시로 토스카나 와인과 함께.", travelTime: "버스 약 1시간", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "판포르테", description: "시에나 전통 과일·견과류 케이크, 크리스마스 특산품.", emoji: "🍰" },
      { name: "피치", description: "시에나 지역 수제 파스타로 두툼한 면발이 특징.", emoji: "🍝" },
    ],
    tips: [
      "팔리오 경마(7월 2일, 8월 16일)는 무료 관람 가능하지만 극도로 혼잡합니다.",
      "시에나-피렌체 간 버스(SITA)가 기차보다 빠르고 편리합니다.",
      "구시가지 진입 시 ZTL(교통 제한 구역)에 주의하세요.",
    ],
  },
  "italy/tuscany/pisa": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "기울어진 탑으로 세계적으로 유명한 도시. 기적의 광장에 대성당, 세례당, 캄포산토가 함께 어우러진 UNESCO 세계유산입니다.",
    bestTime: "4~10월",
    stayArea: "피사 중앙역 주변 또는 기적의 광장 근처",
    transport: "도보 + 버스 LAM Rossa (역↔탑)",
    districts: [
      { name: "기적의 광장", nameEn: "Piazza dei Miracoli", description: "피사의 사탑, 대성당, 세례당이 모여 있는 UNESCO 유산 광장.", highlights: ["피사의 사탑", "피사 대성당", "세례당"] },
    ],
    attractions: [
      { name: "피사의 사탑", nameEn: "Leaning Tower of Pisa", description: "1173년 착공 후 기울어지기 시작한 세계에서 가장 유명한 탑. 현재 약 3.97도 기울어져 있습니다.", category: "탑", tip: "계단 251개, 8세 미만 입장 불가. 온라인 예약 필수입니다." },
      { name: "피사 대성당", nameEn: "Pisa Cathedral", description: "로마네스크 양식의 걸작으로 갈릴레오가 진자의 등시성을 발견한 곳.", category: "성당" },
      { name: "세례당", nameEn: "Pisa Baptistery", description: "이탈리아 최대의 세례당으로 놀라운 음향 효과가 유명합니다.", category: "성당" },
    ],
    dayTrips: [
      { name: "루카", nameEn: "Lucca", description: "완벽한 성벽이 남아있는 토스카나의 숨겨진 보석.", travelTime: "기차 약 30분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "체치나", description: "병아리콩 가루로 만든 바삭한 팬케이크, 피사 길거리 음식.", emoji: "🫓" },
      { name: "토르타 코이 베치", description: "병아리콩과 리코타 치즈를 넣은 피사 전통 파이.", emoji: "🥧" },
    ],
    tips: [
      "피렌체에서 기차로 1시간이라 당일치기로 많이 방문합니다.",
      "사탑 입장은 30분 단위 시간제이므로 예약 시간을 지키세요.",
      "사탑을 미는 포즈 사진은 광장 남쪽 잔디밭에서 찍는 것이 좋습니다.",
    ],
  },
  "italy/tuscany/san-gimignano": {
    heroGradient: "from-amber-500 to-yellow-800",
    description: "중세 맨해튼이라 불리는 탑의 도시. 한때 72개였던 타워 중 14개가 남아 독특한 스카이라인을 형성하며, 토스카나 언덕 위의 동화 같은 풍경을 선사합니다.",
    bestTime: "4~10월",
    stayArea: "성벽 안쪽 구시가지 (숙소 한정적)",
    transport: "시에나 또는 피렌체에서 버스",
    districts: [
      { name: "구시가지", nameEn: "Centro Storico", description: "14개의 중세 탑이 우뚝 솟은 성벽 안의 작은 마을.", highlights: ["치스테르나 광장", "두오모 광장", "그로사 탑"] },
    ],
    attractions: [
      { name: "그로사 탑", nameEn: "Torre Grossa", description: "산 지미냐노에서 가장 높은 탑(54m)으로 토스카나 전경을 조망.", category: "전망대", tip: "200개 계단, 맑은 날에는 시에나까지 보입니다." },
      { name: "치스테르나 광장", nameEn: "Piazza della Cisterna", description: "13세기 우물이 중앙에 있는 삼각형 모양의 아름다운 광장.", category: "광장" },
      { name: "산 지미냐노 1300", nameEn: "San Gimignano 1300", description: "중세 도시의 정교한 미니어처 재현 전시.", category: "박물관" },
    ],
    dayTrips: [
      { name: "볼테라", nameEn: "Volterra", description: "에트루리아 유적과 알라바스터 공예로 유명한 언덕 마을.", travelTime: "버스 약 1시간", gradient: "from-stone-400 to-stone-700" },
    ],
    localFood: [
      { name: "베르나차 와인", description: "산 지미냐노 DOCG 화이트 와인, 단테가 극찬한 와인.", emoji: "🍷" },
      { name: "사프란 요리", description: "산 지미냐노 특산 사프란을 사용한 다양한 요리.", emoji: "🌾" },
    ],
    tips: [
      "세계 최고의 젤라토로 유명한 Gelateria Dondoli에서 꼭 맛보세요.",
      "당일치기 관광객이 떠난 저녁이 가장 로맨틱합니다.",
      "주차장은 성벽 밖에 있으며, 셔틀버스를 이용할 수 있습니다.",
    ],
  },

  // ===== VENICE & VENETO =====
  "italy/venice-veneto/venice": {
    heroGradient: "from-blue-400 to-cyan-800",
    description: "물의 도시 베네치아. 118개의 섬, 150개의 운하, 400개의 다리로 이루어진 세상에 둘도 없는 도시로, 산 마르코 광장과 곤돌라가 상징적입니다.",
    bestTime: "4~6월, 9~10월 (아쿠아 알타 주의: 11~1월)",
    stayArea: "산 마르코 / 리알토 다리 주변",
    transport: "바포레토(수상버스), 곤돌라, 수상택시",
    districts: [
      { name: "산 마르코", nameEn: "San Marco", description: "산 마르코 대성당과 두칼레 궁전이 있는 베네치아의 중심.", highlights: ["산 마르코 대성당", "두칼레 궁전", "종탑", "카페 플로리안"] },
      { name: "리알토", nameEn: "Rialto", description: "리알토 다리와 활기찬 수산 시장이 있는 상업 중심지.", highlights: ["리알토 다리", "리알토 시장", "폰다코 데이 테데스키"] },
      { name: "도르소두로", nameEn: "Dorsoduro", description: "아카데미아 미술관과 페기 구겐하임이 있는 예술 지구.", highlights: ["아카데미아 미술관", "페기 구겐하임 컬렉션", "푼타 델라 도가나"] },
    ],
    attractions: [
      { name: "산 마르코 대성당", nameEn: "St. Mark's Basilica", description: "비잔틴 양식의 걸작으로 황금 모자이크 장식이 압도적인 베네치아의 상징.", category: "성당", tip: "입장 무료이지만 줄이 길므로 온라인 예약(€3)을 추천합니다." },
      { name: "두칼레 궁전", nameEn: "Doge's Palace", description: "베네치아 공화국의 총독 관저로 틴토레토의 천국이 있는 대평의회실이 압권.", category: "궁전", tip: "시크릿 투어로 카사노바가 탈출한 감옥을 볼 수 있습니다." },
      { name: "리알토 다리", nameEn: "Rialto Bridge", description: "대운하를 가로지르는 베네치아의 가장 오래된 돌다리(1591년 완공).", category: "다리" },
      { name: "부라노 섬", nameEn: "Burano Island", description: "알록달록 페인트칠한 집들과 레이스 공예로 유명한 작은 섬.", category: "섬", tip: "바포레토 12번으로 약 40분, 오전에 방문하면 한적합니다." },
    ],
    dayTrips: [
      { name: "무라노 섬", nameEn: "Murano Island", description: "유리 공예의 본고장으로 유리 공방 견학이 가능.", travelTime: "바포레토 약 15분", gradient: "from-red-400 to-orange-700" },
      { name: "베로나", nameEn: "Verona", description: "로미오와 줄리엣의 도시, 로마 원형 경기장이 남아있는 도시.", travelTime: "기차 약 1시간 10분", gradient: "from-rose-400 to-pink-700" },
    ],
    localFood: [
      { name: "치케티", description: "베네치아식 타파스로 바카로(선술집)에서 와인과 함께.", emoji: "🍤" },
      { name: "세피에 인 네로", description: "오징어 먹물 리조토 또는 파스타, 베네치아 대표 요리.", emoji: "🦑" },
      { name: "스프리츠", description: "아페롤 또는 캄파리로 만드는 베네치아 발 칵테일.", emoji: "🍹" },
    ],
    tips: [
      "바포레토 1일/2일/3일 패스로 수상버스를 무제한 이용하세요.",
      "곤돌라는 공식 요금(낮 €80, 야간 €100, 30분)이 정해져 있습니다.",
      "산 마르코 광장은 아쿠아 알타(만조) 시 침수되니 방수 신발을 준비하세요.",
      "식당에서 관광객 바가지 주의, 메뉴판 가격을 꼭 확인하세요.",
    ],
  },
  "italy/venice-veneto/verona": {
    heroGradient: "from-rose-500 to-pink-800",
    description: "셰익스피어의 로미오와 줄리엣의 배경이 된 사랑의 도시. 로마 시대 원형 경기장(아레나)에서 열리는 오페라 축제와 중세 구시가지가 매력적입니다.",
    bestTime: "6~8월 (아레나 오페라 시즌) / 4~10월",
    stayArea: "브라 광장 / 에르베 광장 주변",
    transport: "도보 (구시가지 전체 도보 가능)",
    districts: [
      { name: "구시가지", nameEn: "Centro Storico", description: "아디제 강이 감싸는 중세 성벽 안의 역사 지구.", highlights: ["베로나 아레나", "에르베 광장", "줄리엣의 집", "람베르티 탑"] },
    ],
    attractions: [
      { name: "베로나 아레나", nameEn: "Verona Arena", description: "서기 30년에 건설된 로마 원형 경기장으로 현재도 오페라 공연장으로 사용.", category: "유적", tip: "여름 오페라 축제 티켓은 수개월 전에 예약하세요." },
      { name: "줄리엣의 집", nameEn: "Juliet's House", description: "셰익스피어 작품의 줄리엣 발코니로 유명한 13세기 건물.", category: "랜드마크", tip: "발코니에서 사진을 찍으려면 입장료(€6)가 필요합니다." },
      { name: "에르베 광장", nameEn: "Piazza delle Erbe", description: "로마 포럼 자리에 형성된 베로나의 중심 광장으로 시장이 열립니다.", category: "광장" },
      { name: "람베르티 탑", nameEn: "Torre dei Lamberti", description: "84m 높이의 중세 탑으로 베로나와 알프스 전경을 조망.", category: "전망대" },
    ],
    dayTrips: [
      { name: "가르다 호수", nameEn: "Lake Garda", description: "이탈리아 최대의 호수로 시르미오네 마을이 특히 아름답습니다.", travelTime: "기차+버스 약 40분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "리지 에 비시", description: "쌀과 완두콩으로 만든 베네토 전통 리조토.", emoji: "🍚" },
      { name: "판도로", description: "베로나가 원산지인 별 모양 크리스마스 빵.", emoji: "🍞" },
      { name: "아마로네 와인", description: "발폴리첼라 지역의 풀바디 레드 와인, 세계적 명성.", emoji: "🍷" },
    ],
    tips: [
      "베로나 카드(24/48시간)로 주요 관광지 입장과 버스 이용이 가능합니다.",
      "아레나 오페라는 6~9월에만 열리며 석양 시작 시간에 맞춰 시작합니다.",
      "베네치아에서 기차로 1시간 10분, 당일치기도 가능합니다.",
    ],
  },

  // ===== MILAN & LOMBARDY =====
  "italy/milan-lombardy/milan": {
    heroGradient: "from-slate-500 to-gray-900",
    description: "이탈리아의 경제·패션 수도 밀라노. 두오모 대성당, 레오나르도 다 빈치의 최후의 만찬, 라 스칼라 극장 등 문화와 쇼핑이 공존하는 세련된 대도시입니다.",
    bestTime: "4~6월, 9~10월 (패션위크: 2월, 9월)",
    stayArea: "두오모 주변 / 브레라 지구",
    transport: "메트로 M1~M5, 트램, 버스",
    districts: [
      { name: "두오모 지구", nameEn: "Duomo District", description: "밀라노의 상징 두오모 대성당과 갤러리아가 있는 도심 핵심 지역.", highlights: ["두오모", "갤러리아 비토리오 에마누엘레 2세", "왕궁"] },
      { name: "브레라", nameEn: "Brera", description: "갤러리와 부티크, 카페가 밀집한 밀라노의 예술 지구.", highlights: ["브레라 미술관", "브레라 식물원", "안티크 거리"] },
      { name: "나빌리", nameEn: "Navigli", description: "운하를 따라 바와 레스토랑이 늘어선 밀라노의 나이트라이프 중심.", highlights: ["나빌리오 그란데", "빈티지 마켓", "아페리티보 바"] },
    ],
    attractions: [
      { name: "두오모 디 밀라노", nameEn: "Duomo di Milano", description: "135개 첨탑과 3,400개 조각상으로 장식된 세계 최대의 고딕 성당 중 하나.", category: "성당", tip: "옥상 테라스 입장권을 별도 구매하면 밀라노 시내를 조망할 수 있습니다." },
      { name: "최후의 만찬", nameEn: "The Last Supper", description: "산타 마리아 델레 그라치에 교회에 있는 레오나르도 다 빈치의 걸작 벽화.", category: "미술", tip: "2~3개월 전 예약 필수! 관람 시간은 15분으로 제한됩니다." },
      { name: "갤러리아 비토리오 에마누엘레 2세", nameEn: "Galleria Vittorio Emanuele II", description: "19세기에 건설된 화려한 유리 아케이드 쇼핑몰.", category: "건축", tip: "바닥의 황소 모자이크 위에서 발뒤꿈치로 세 바퀴 돌면 행운이 옵니다." },
      { name: "라 스칼라 극장", nameEn: "Teatro alla Scala", description: "세계 최고의 오페라 극장 중 하나로 베르디, 푸치니 작품의 초연 무대.", category: "극장" },
    ],
    dayTrips: [
      { name: "코모 호수", nameEn: "Lake Como", description: "알프스 산자락의 아름다운 호수로 조지 클루니 별장으로도 유명.", travelTime: "기차 약 1시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "베르가모", nameEn: "Bergamo", description: "성벽으로 둘러싸인 치타 알타(상부 도시)가 아름다운 중세 도시.", travelTime: "기차 약 50분", gradient: "from-stone-400 to-stone-700" },
    ],
    localFood: [
      { name: "리조토 알라 밀라네제", description: "사프란으로 노랗게 물든 밀라노 대표 리조토.", emoji: "🍚" },
      { name: "코톨레타 알라 밀라네제", description: "밀라노식 송아지 커틀릿, 오스트리아 슈니첼의 원조 논쟁.", emoji: "🥩" },
      { name: "파네토네", description: "밀라노가 원산지인 크리스마스 전통 빵 케이크.", emoji: "🍞" },
    ],
    tips: [
      "최후의 만찬은 최소 2개월 전 예약이 필수입니다 (cenacolovinciano.org).",
      "아페리티보(저녁 6~9시) 문화를 즐기세요 — 음료 한 잔에 뷔페가 포함됩니다.",
      "나빌리 지구의 일요일 앤티크 마켓(매월 마지막 일요일)은 볼거리가 풍부합니다.",
      "두오모 옥상은 계단(€10)과 엘리베이터(€14)를 선택할 수 있습니다.",
    ],
  },
  "italy/milan-lombardy/lake-como": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "알프스 산자락에 자리한 이탈리아에서 세 번째로 큰 호수. 빌라와 정원이 점점이 떠 있는 호수 풍경은 유럽 귀족들의 오랜 휴양지로 사랑받아 왔습니다.",
    bestTime: "4~10월 (빌라 정원 개방 시기)",
    stayArea: "벨라지오 / 바렌나 / 코모 시내",
    transport: "코모에서 페리·유람선 / 밀라노에서 기차",
    districts: [
      { name: "벨라지오", nameEn: "Bellagio", description: "코모 호수의 진주로 불리는 Y자 호수 중앙의 아름다운 마을.", highlights: ["빌라 멜치", "빌라 세르벨로니", "호수변 산책로"] },
      { name: "바렌나", nameEn: "Varenna", description: "알록달록한 건물이 호수변에 늘어선 조용한 어촌 마을.", highlights: ["빌라 모나스테로", "베치아 성", "연인의 산책로"] },
    ],
    attractions: [
      { name: "빌라 칼로타", nameEn: "Villa Carlotta", description: "18세기 빌라와 아름다운 식물원으로 진달래·동백 컬렉션이 유명.", category: "정원", tip: "4~5월 진달래 시즌이 가장 아름답습니다." },
      { name: "빌라 델 발비아넬로", nameEn: "Villa del Balbianello", description: "스타워즈·007 촬영지로 유명한 호수 위 반도의 빌라.", category: "빌라", tip: "화·수 휴관, 보트로만 접근 가능한 날도 있으니 확인하세요." },
      { name: "코모 대성당", nameEn: "Como Cathedral", description: "14~18세기에 걸쳐 완성된 고딕-르네상스 혼합 양식 성당.", category: "성당" },
    ],
    dayTrips: [
      { name: "스위스 루가노", nameEn: "Lugano, Switzerland", description: "국경을 넘어 스위스의 이탈리아어권 도시를 방문.", travelTime: "기차 약 1시간", gradient: "from-red-400 to-red-700" },
    ],
    localFood: [
      { name: "미솔틴", description: "코모 호수산 건조 민물고기, 전통 방식으로 보존.", emoji: "🐟" },
      { name: "폴렌타", description: "옥수수 가루로 만든 북이탈리아 전통 음식, 치즈와 함께.", emoji: "🌽" },
    ],
    tips: [
      "벨라지오-바렌나-메나지오를 페리로 연결하는 삼각 코스가 인기입니다.",
      "밀라노에서 당일치기 가능하지만 1박을 추천합니다.",
      "호수 페리 1일 패스로 여러 마을을 자유롭게 이동할 수 있습니다.",
    ],
  },

  // ===== NAPLES & SOUTH =====
  "italy/naples-south/naples": {
    heroGradient: "from-orange-500 to-red-800",
    description: "혼돈과 열정이 공존하는 남부 이탈리아의 중심 도시. 피자의 본고장이자 폼페이·아말피 해안으로 가는 관문으로, 거친 매력 속에 깊은 문화가 숨어 있습니다.",
    bestTime: "4~6월, 9~10월",
    stayArea: "스파카나폴리 / 키아이아 해변 지구",
    transport: "메트로 1·2호선, 버스, 푸니콜라레(케이블카)",
    districts: [
      { name: "스파카나폴리", nameEn: "Spaccanapoli", description: "나폴리를 둘로 가르는 직선 거리로 구시가지의 심장부.", highlights: ["산 세베로 예배당", "나폴리 두오모", "산 그레고리오 거리"] },
      { name: "키아이아", nameEn: "Chiaia", description: "해변 산책로와 고급 레스토랑이 있는 우아한 해안 지구.", highlights: ["룽고마레 산책로", "카스텔 델 오보", "빌라 코무날레"] },
    ],
    attractions: [
      { name: "나폴리 국립 고고학 박물관", nameEn: "Naples National Archaeological Museum", description: "폼페이·헤르쿨라네움 출토 유물과 파르네세 컬렉션을 소장한 세계적 고고학 박물관.", category: "박물관", tip: "폼페이 방문 전에 이곳을 먼저 보면 유적 이해가 깊어집니다." },
      { name: "스파카나폴리", nameEn: "Spaccanapoli", description: "그리스-로마 시대 도시 축을 따라 형성된 구시가지 핵심 거리로 나폴리의 일상이 펼쳐집니다.", category: "거리", tip: "소매치기에 주의하고, 오전~낮 시간대가 가장 활기찹니다." },
      { name: "산 세베로 예배당", nameEn: "Cappella Sansevero", description: "베일 덮인 그리스도(Cristo Velato) 조각상이 있는 바로크 걸작 예배당.", category: "예배당" },
      { name: "카스텔 델 오보", nameEn: "Castel dell'Ovo", description: "나폴리 만에 우뚝 선 해안 성채로 나폴리에서 가장 오래된 요새.", category: "성채" },
    ],
    dayTrips: [
      { name: "폼페이", nameEn: "Pompeii", description: "서기 79년 베수비오 화산 폭발로 매몰된 고대 도시.", travelTime: "치르쿰베수비아나 기차 약 35분", gradient: "from-stone-400 to-stone-700" },
      { name: "아말피 해안", nameEn: "Amalfi Coast", description: "절벽 위 알록달록한 마을들이 이어지는 세계적 해안 절경.", travelTime: "페리 또는 버스 약 1시간 30분", gradient: "from-blue-400 to-cyan-700" },
    ],
    localFood: [
      { name: "피자 마르게리타", description: "나폴리가 원조인 세계에서 가장 유명한 피자, 토마토·모차렐라·바질.", emoji: "🍕" },
      { name: "스폴리아텔라", description: "조개 모양의 바삭한 나폴리 페이스트리, 리코타 크림 필링.", emoji: "🥐" },
      { name: "프리타티나", description: "파스타를 튀긴 나폴리식 길거리 음식.", emoji: "🍜" },
    ],
    tips: [
      "나폴리는 안전에 주의가 필요합니다 — 귀중품은 최소한으로 휴대하세요.",
      "피자는 반드시 L'Antica Pizzeria da Michele 또는 Sorbillo에서 맛보세요.",
      "치르쿰베수비아나 기차로 폼페이·소렌토까지 쉽게 이동할 수 있습니다.",
      "나폴리 지하 도시(Napoli Sotterranea) 투어도 인상적입니다.",
    ],
  },
  "italy/naples-south/amalfi-coast": {
    heroGradient: "from-blue-400 to-cyan-700",
    description: "지중해의 보석이라 불리는 아말피 해안. 가파른 절벽 위에 알록달록한 마을이 매달려 있는 환상적인 경관으로, UNESCO 세계유산에 등재된 이탈리아 최고의 해안 절경입니다.",
    bestTime: "5~9월 (수영: 6~9월)",
    stayArea: "포지타노 / 아말피 / 라벨로",
    transport: "SITA 버스, 페리, 렌터카 (좁은 도로 주의)",
    districts: [
      { name: "포지타노", nameEn: "Positano", description: "파스텔 컬러 건물이 절벽을 타고 내려오는 아말피 해안의 대표 마을.", highlights: ["스피아지아 그란데 해변", "산타 마리아 아순타 교회", "패션 부티크"] },
      { name: "아말피", nameEn: "Amalfi", description: "한때 해양 공화국이었던 해안 도시로 대성당이 인상적.", highlights: ["아말피 대성당", "천국의 회랑", "리몬첼로 상점"] },
      { name: "라벨로", nameEn: "Ravello", description: "해안 위 높은 곳에 자리한 음악과 정원의 마을.", highlights: ["빌라 루폴로", "빌라 침브로네", "라벨로 음악제"] },
    ],
    attractions: [
      { name: "포지타노", nameEn: "Positano", description: "절벽 위의 파스텔 건물과 지중해가 어우러진 아말피 해안의 상징적 마을.", category: "마을", tip: "계단이 매우 많으니 편한 신발을 꼭 신으세요." },
      { name: "신들의 길", nameEn: "Path of the Gods", description: "아말피 해안을 따라 걷는 약 7km의 절경 트레킹 코스.", category: "트레킹", tip: "봄볼라레~노체라 방향이 내리막이라 수월합니다." },
      { name: "아말피 대성당", nameEn: "Amalfi Cathedral", description: "9세기에 창건된 아랍-노르만 양식의 인상적인 대성당.", category: "성당" },
      { name: "에메랄드 동굴", nameEn: "Emerald Grotto", description: "에메랄드빛 바닷물이 빛나는 해안 동굴.", category: "자연" },
    ],
    dayTrips: [
      { name: "카프리 섬", nameEn: "Capri Island", description: "파란 동굴로 유명한 나폴리 만의 보석 같은 섬.", travelTime: "페리 약 40분 (포지타노에서)", gradient: "from-blue-500 to-indigo-700" },
    ],
    localFood: [
      { name: "리몬첼로", description: "아말피 해안 특산 레몬으로 만든 이탈리아 대표 리큐어.", emoji: "🍋" },
      { name: "스칼라티엘리", description: "아말피 해안 전통 수제 납작 파스타, 해산물과 함께.", emoji: "🍝" },
    ],
    tips: [
      "성수기(7~8월)에는 숙소와 페리를 반드시 사전 예약하세요.",
      "SITA 버스는 절벽 도로를 달리므로 멀미약을 준비하세요.",
      "렌터카보다 페리+버스 조합이 편리합니다 (주차 매우 어려움).",
    ],
  },
  "italy/naples-south/pompeii": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "서기 79년 베수비오 화산 폭발로 순식간에 매몰된 고대 로마 도시. 2,000년 전의 거리, 주택, 상점, 목욕탕이 놀라울 정도로 원형 그대로 보존되어 있습니다.",
    bestTime: "4~6월, 9~10월 (여름 매우 더움)",
    stayArea: "나폴리 또는 소렌토에서 당일치기",
    transport: "나폴리에서 치르쿰베수비아나 기차",
    districts: [
      { name: "유적지", nameEn: "Archaeological Site", description: "66헥타르의 광대한 고대 도시 유적으로 주요 구역이 나뉘어 있습니다.", highlights: ["포럼", "원형 극장", "비밀의 별장", "목욕탕"] },
    ],
    attractions: [
      { name: "폼페이 고고학 공원", nameEn: "Pompeii Archaeological Park", description: "66헥타르에 달하는 고대 로마 도시 유적으로, 포럼·원형 극장·주택·상점이 원형 그대로 보존.", category: "유적", tip: "최소 3~4시간 필요. 물과 모자를 반드시 준비하세요." },
      { name: "포럼", nameEn: "Forum", description: "폼페이의 정치·종교·상업 중심지였던 광장.", category: "유적" },
      { name: "비밀의 별장", nameEn: "Villa of the Mysteries", description: "디오니소스 비의(秘儀)를 묘사한 프레스코화가 유명한 교외 별장.", category: "유적" },
    ],
    dayTrips: [
      { name: "베수비오 산", nameEn: "Mount Vesuvius", description: "폼페이를 매몰시킨 활화산, 분화구 트레킹이 가능.", travelTime: "셔틀버스 약 30분 + 도보 30분", gradient: "from-red-400 to-orange-700" },
    ],
    localFood: [
      { name: "나폴리 피자", description: "화덕에서 구운 정통 나폴리 피자, 유적 주변에도 맛집이 있습니다.", emoji: "🍕" },
      { name: "라크리마 크리스티 와인", description: "베수비오 산 경사면에서 재배한 포도로 만든 와인.", emoji: "🍷" },
    ],
    tips: [
      "오전 일찍(09:00 개장) 방문하면 인파와 더위를 피할 수 있습니다.",
      "오디오 가이드 또는 가이드 투어를 강력 추천합니다.",
      "편한 신발과 자외선 차단제는 필수입니다.",
    ],
  },

  // ===== SICILY =====
  "italy/sicily/palermo": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "시칠리아의 수도이자 아랍·노르만·비잔틴 문화가 융합된 독특한 도시. 화려한 대성당, 활기찬 재래시장, 풍부한 길거리 음식이 오감을 사로잡습니다.",
    bestTime: "4~6월, 9~10월",
    stayArea: "콰트로 칸티 주변 / 칼사 지구",
    transport: "도보 + 버스 AMAT",
    districts: [
      { name: "칼사", nameEn: "Kalsa", description: "아랍 시대 요새에서 발전한 해변 지구로 갤러리와 바가 밀집.", highlights: ["팔레르모 식물원", "산타 마리아 교회", "해변 산책로"] },
      { name: "발라로 시장", nameEn: "Ballarò Market", description: "팔레르모에서 가장 오래되고 활기찬 재래시장.", highlights: ["길거리 음식", "신선한 해산물", "현지인의 일상"] },
    ],
    attractions: [
      { name: "팔레르모 대성당", nameEn: "Palermo Cathedral", description: "12세기에 건축된 아랍-노르만 양식의 대성당으로 다양한 건축 양식이 혼합.", category: "성당", tip: "옥상 전망대에서 팔레르모 시내와 바다를 조망할 수 있습니다." },
      { name: "노르만 궁전 & 팔라티나 예배당", nameEn: "Norman Palace & Palatine Chapel", description: "금빛 비잔틴 모자이크로 장식된 12세기 왕궁 예배당.", category: "궁전" },
      { name: "콰트로 칸티", nameEn: "Quattro Canti", description: "17세기 바로크 양식의 사거리 광장으로 팔레르모의 중심.", category: "광장" },
      { name: "카푸친 카타콤베", nameEn: "Capuchin Catacombs", description: "8,000구 이상의 미라가 보존된 독특하고 으스스한 지하 묘지.", category: "역사" },
    ],
    dayTrips: [
      { name: "몬레알레", nameEn: "Monreale", description: "황금 모자이크가 빛나는 노르만 대성당이 있는 언덕 마을.", travelTime: "버스 약 30분", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "아란치니", description: "고기 라구 또는 치즈를 넣어 튀긴 시칠리아식 라이스볼.", emoji: "🍙" },
      { name: "칸놀로", description: "리코타 크림을 채운 바삭한 튀긴 반죽, 시칠리아 대표 디저트.", emoji: "🧁" },
      { name: "판넬레", description: "병아리콩 가루를 튀긴 팔레르모 길거리 음식.", emoji: "🫓" },
    ],
    tips: [
      "발라로·부치리아 시장에서 길거리 음식 투어를 꼭 해보세요.",
      "시칠리아는 본토보다 물가가 저렴하고 양이 푸짐합니다.",
      "오후 1~4시는 시에스타로 많은 상점이 문을 닫습니다.",
    ],
  },
  "italy/sicily/taormina": {
    heroGradient: "from-indigo-400 to-blue-800",
    description: "에트나 산과 이오니아 해가 동시에 보이는 절벽 위의 휴양 도시. 그리스 극장과 중세 거리, 아름다운 해변이 어우러진 시칠리아 최고의 관광지입니다.",
    bestTime: "5~10월 (수영: 6~9월)",
    stayArea: "코르소 움베르토 거리 주변",
    transport: "타오르미나-지아르디니역에서 버스 / 카타니아에서 버스",
    districts: [
      { name: "구시가지", nameEn: "Centro Storico", description: "코르소 움베르토를 중심으로 한 보행자 전용 구역.", highlights: ["그리스 극장", "4월 9일 광장", "코르소 움베르토"] },
    ],
    attractions: [
      { name: "타오르미나 그리스 극장", nameEn: "Greek Theatre of Taormina", description: "기원전 3세기에 건설된 그리스 극장으로 에트나 산과 바다가 배경인 세계 최고의 극장 전망.", category: "유적", tip: "여름에는 영화제·음악제가 열려 공연 관람도 가능합니다." },
      { name: "이솔라 벨라", nameEn: "Isola Bella", description: "작은 다리로 연결된 아름다운 소섬으로 해수욕과 스노클링 명소.", category: "해변", tip: "케이블카로 해변까지 내려갈 수 있습니다." },
      { name: "4월 9일 광장", nameEn: "Piazza IX Aprile", description: "에트나 산과 바다를 동시에 조망하는 타오르미나 최고의 전망 광장.", category: "광장" },
    ],
    dayTrips: [
      { name: "에트나 산", nameEn: "Mount Etna", description: "유럽 최대 활화산으로 케이블카와 4WD로 분화구 근처까지 접근 가능.", travelTime: "버스 약 1시간", gradient: "from-stone-500 to-red-700" },
    ],
    localFood: [
      { name: "그라니타", description: "시칠리아식 빙수로 아몬드·레몬·커피 맛이 인기, 브리오슈와 함께.", emoji: "🍧" },
      { name: "카포나타", description: "가지를 기본으로 한 시칠리아식 달콤새콤한 채소 스튜.", emoji: "🍆" },
    ],
    tips: [
      "타오르미나는 물가가 시칠리아에서 가장 비싸니 예산에 유의하세요.",
      "이솔라 벨라 해변은 이른 오전에 가야 자리를 잡을 수 있습니다.",
      "카타니아 공항에서 버스로 약 1시간 15분 소요됩니다.",
    ],
  },
};

export const italyAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ROME =====
  "italy/rome-lazio/rome/colosseum": {
    heroGradient: "from-amber-600 to-red-800",
    description: "서기 72~80년에 건설된 고대 로마 최대의 원형 경기장으로 최대 5만 명의 관중을 수용했습니다. 검투사 경기와 맹수 사냥이 펼쳐졌던 이곳은 로마 제국의 권력과 엔지니어링의 상징입니다.",
    history: "플라비우스 왕조의 베스파시아누스 황제가 서기 72년에 착공하여 아들 티투스 황제 때인 80년에 완공했습니다. 100일간의 개장 축제에서 수천 마리의 맹수가 동원되었으며, 중세 이후 채석장으로 사용되며 훼손되었습니다.",
    visitInfo: {
      hours: "08:30~일몰 1시간 전 (시기별 변동, 최종 입장 폐장 1시간 전)",
      admission: "통합 티켓(콜로세움+포로 로마노+팔라티노) 성인 €16, 아레나 플로어·지하층 추가 €9",
      address: "Piazza del Colosseo, 1, 00184 Roma RM",
      website: "https://www.colosseumrome.it",
    },
    highlights: [
      "아레나 플로어에서 검투사의 시점으로 바라보는 관중석",
      "지하층(히포지움)의 동물 우리와 리프트 시스템",
      "2층·3층 관람석에서 바라보는 내부 전경",
      "야간 특별 투어(시즌 한정)로 보는 조명 속 콜로세움",
    ],
    nearbyAttractions: ["포로 로마노", "팔라티노 언덕", "콘스탄티누스 개선문", "첼리오 언덕"],
    photoTips: "외부 전경은 메트로 B선 콜로세오역 출구에서 정면으로 찍는 것이 좋습니다. 내부는 2층에서 아레나 전체를 담을 수 있습니다.",
    tips: [
      "온라인 사전 예약이 필수입니다 — 현장 구매 시 2~3시간 대기할 수 있습니다.",
      "포로 로마노·팔라티노 통합 티켓은 2일간 유효합니다.",
      "아레나 플로어와 지하층은 별도 예약(풀 익스피리언스 티켓)이 필요합니다.",
      "오전 8:30 개장 직후 또는 오후 늦게 방문하면 인파가 적습니다.",
    ],
  },
  "italy/rome-lazio/rome/vatican-museums": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "1506년 교황 율리우스 2세가 설립한 세계 최대 규모의 미술관 중 하나로, 미켈란젤로의 시스티나 예배당 천장화와 라파엘로의 방 등 인류 예술의 정수를 소장하고 있습니다.",
    history: "1506년 라오콘 군상의 발견을 계기로 교황 율리우스 2세가 컬렉션을 시작했습니다. 이후 500년간 역대 교황들이 수집한 예술품이 54개 갤러리에 걸쳐 전시되어 있으며, 연간 600만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "월~토 08:00~19:00 (최종 입장 17:00), 매월 마지막 일요일 09:00~14:00 무료",
      admission: "성인 €17, 온라인 예약 수수료 €4 추가",
      address: "Viale Vaticano, 00165 Roma RM",
      website: "https://www.museivaticani.va",
    },
    highlights: [
      "시스티나 예배당 — 미켈란젤로의 천지창조와 최후의 심판",
      "라파엘로의 방 — 아테네 학당",
      "지도 갤러리 — 이탈리아 40개 지역의 16세기 지도 프레스코",
      "피나코테카 — 카라바조, 라파엘로 회화 컬렉션",
    ],
    nearbyAttractions: ["성 베드로 대성당", "성 베드로 광장", "산탄젤로 성", "바티칸 정원"],
    photoTips: "시스티나 예배당 내부는 촬영 금지입니다. 지도 갤러리의 천장 프레스코는 광각 렌즈로 담으면 장관입니다.",
    tips: [
      "온라인 예약은 필수 — 현장에서 2~4시간 대기 줄이 생깁니다.",
      "금요일 야간 개방(19:00~22:30, 4~10월)은 인파가 훨씬 적습니다.",
      "전체 관람에 최소 3~4시간이 소요됩니다.",
      "시스티나 예배당 내에서는 조용히 해야 하며 촬영이 금지됩니다.",
    ],
  },
  "italy/rome-lazio/rome/trevi-fountain": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "높이 26m, 너비 49m의 로마 최대이자 세계에서 가장 유명한 바로크 분수입니다. 오른손으로 왼쪽 어깨 너머로 동전을 던지면 로마에 다시 돌아온다는 전설이 있습니다.",
    history: "1762년 니콜라 살비의 설계로 완성되었으며, 고대 로마 수도교 비르고 수도의 종착점에 세워졌습니다. 매일 약 €3,000의 동전이 수거되어 자선단체에 기부됩니다.",
    visitInfo: {
      hours: "24시간 개방 (야간 조명이 특히 아름다움)",
      admission: "무료",
      address: "Piazza di Trevi, 00187 Roma RM",
      website: "https://www.rome.net/trevi-fountain",
    },
    highlights: [
      "넵튠(포세이돈) 중앙 조각상과 해마·트리톤 조각",
      "야간 조명 아래의 환상적인 분위기",
      "동전 던지기 전통 (로마 재방문 기원)",
      "주변 좁은 골목의 젤라토 가게",
    ],
    nearbyAttractions: ["스페인 계단", "판테온", "퀴리날레 궁전", "바르베리니 광장"],
    photoTips: "이른 아침(07:00 이전)에 방문하면 인파 없이 분수 전체를 담을 수 있습니다. 야간 촬영은 조명이 켜지는 일몰 직후가 최적입니다.",
    tips: [
      "이른 아침이나 늦은 밤에 방문하면 한적하게 감상할 수 있습니다.",
      "소매치기가 매우 잦은 장소이니 소지품에 각별히 주의하세요.",
      "분수 안에 들어가는 것은 금지이며 벌금(최대 €500)이 부과됩니다.",
      "근처 San Crispino 젤라토를 함께 즐기세요.",
    ],
  },
  "italy/rome-lazio/rome/pantheon": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "서기 125년 하드리아누스 황제가 재건한 고대 신전으로, 직경 43.3m의 세계 최대 비보강 콘크리트 돔은 2,000년이 지난 지금도 건재합니다. 라파엘로와 이탈리아 왕가의 무덤이 있습니다.",
    history: "기원전 27년 마르쿠스 아그리파가 최초 건립했으며, 현재 건물은 서기 125년경 하드리아누스 황제가 재건한 것입니다. 609년 교황 보니파시오 4세가 기독교 성당으로 전환하여 보존되었습니다.",
    visitInfo: {
      hours: "월~토 09:00~19:00, 일 09:00~18:00 (공휴일 단축 운영)",
      admission: "€5 (온라인 예약 권장)",
      address: "Piazza della Rotonda, 00186 Roma RM",
      website: "https://www.pantheonroma.com",
    },
    highlights: [
      "직경 43.3m 돔 중앙의 오쿨루스(지름 8.9m 원형 개구부)",
      "비 오는 날 오쿨루스로 들어오는 빗줄기",
      "라파엘로의 무덤",
      "코린트 양식 화강암 기둥 16개의 포르티코",
    ],
    nearbyAttractions: ["나보나 광장", "트레비 분수", "캄포 데 피오리", "산타 마리아 소프라 미네르바"],
    photoTips: "오쿨루스에서 들어오는 빛줄기는 정오 전후에 가장 극적입니다. 광각 렌즈로 돔 전체를 담으세요.",
    tips: [
      "2023년부터 유료 입장(€5)으로 전환되었으며 온라인 예약이 권장됩니다.",
      "비 오는 날 방문하면 오쿨루스로 빗물이 들어오는 장면을 볼 수 있습니다.",
      "내부 바닥의 미세한 배수 구멍으로 빗물이 빠져나갑니다.",
      "광장의 카페에서 에스프레소를 마시며 외관을 감상하세요.",
    ],
  },
  "italy/rome-lazio/rome/roman-forum": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "고대 로마 제국의 정치·종교·상업 중심지였던 광장 유적입니다. 원로원, 신전, 개선문의 잔해가 로마 문명의 위대함을 증언하며, 콜로세움과 함께 고대 로마 탐방의 핵심입니다.",
    history: "기원전 7세기부터 로마의 중심 광장으로 발전했으며, 공화정과 제정 시대 정치·종교·상업의 중심지였습니다. 카이사르의 화장터, 원로원 의사당 등 로마사의 핵심 장소가 모여 있습니다.",
    visitInfo: {
      hours: "08:30~일몰 1시간 전 (시기별 변동)",
      admission: "콜로세움 통합 티켓에 포함 (성인 €16)",
      address: "Via della Salara Vecchia, 5/6, 00186 Roma RM",
      website: "https://www.colosseumrome.it",
    },
    highlights: [
      "셉티미우스 세베루스 개선문",
      "사투르누스 신전의 8개 기둥",
      "카이사르의 화장터(봉헌 신전)",
      "팔라티노 언덕에서 내려다보는 포로 로마노 전경",
    ],
    nearbyAttractions: ["콜로세움", "팔라티노 언덕", "캄피돌리오 광장", "베네치아 광장"],
    photoTips: "팔라티노 언덕 전망대에서 포로 로마노 전체를 내려다보며 촬영하는 것이 최고의 구도입니다.",
    tips: [
      "콜로세움 통합 티켓으로 입장하며, 2일간 유효합니다.",
      "무료 오디오 가이드 앱을 다운로드하면 각 유적의 역사를 들을 수 있습니다.",
      "그늘이 거의 없으므로 모자와 물을 준비하세요.",
      "비아 사크라(성스러운 길)를 따라 걸으며 관람하는 것이 효율적입니다.",
    ],
  },
  "italy/rome-lazio/rome/spanish-steps": {
    heroGradient: "from-rose-400 to-pink-700",
    description: "135개의 계단이 트리니타 데이 몬티 교회로 이어지는 로마의 상징적 랜드마크입니다. 18세기 바로크 양식으로 건설되었으며, 패션 거리 비아 콘도티와 연결되어 쇼핑의 중심지이기도 합니다.",
    history: "1723~1725년 프란체스코 데 산크티스가 설계하여 완성했습니다. 프랑스 대사관이 스페인 광장 근처에 있어 프랑스 자금으로 건설되었으나, 광장 이름을 따 '스페인 계단'으로 불립니다.",
    visitInfo: {
      hours: "24시간 개방 (계단에 앉기 금지, 위반 시 벌금)",
      admission: "무료",
      address: "Piazza di Spagna, 00187 Roma RM",
      website: "https://www.rome.net/spanish-steps",
    },
    highlights: [
      "계단 위 트리니타 데이 몬티 교회와 오벨리스크",
      "계단 아래 바르카차 분수(베르니니 父 작품)",
      "봄철(4~5월) 진달래 장식",
      "비아 콘도티의 명품 브랜드 쇼핑 거리",
    ],
    nearbyAttractions: ["트레비 분수", "비아 콘도티", "보르게세 공원", "바르베리니 광장"],
    photoTips: "이른 아침에 계단 전체를 사람 없이 담을 수 있습니다. 계단 위에서 로마 시내를 배경으로 찍는 것도 좋습니다.",
    tips: [
      "2019년부터 계단에 앉는 것이 금지되며 벌금(최대 €400)이 부과됩니다.",
      "비아 콘도티에서 명품 쇼핑을 즐기거나 윈도우 쇼핑만 해도 즐겁습니다.",
      "근처 Antico Caffè Greco(1760년 개업)에서 에스프레소를 즐겨보세요.",
      "메트로 A선 스파냐역에서 바로 연결됩니다.",
    ],
  },

  // ===== FLORENCE =====
  "italy/tuscany/florence/uffizi-gallery": {
    heroGradient: "from-rose-500 to-amber-700",
    description: "보티첼리의 비너스의 탄생과 봄, 카라바조, 레오나르도 다 빈치, 라파엘로 등 르네상스 걸작을 소장한 세계 최고의 미술관 중 하나입니다. 메디치 가문의 컬렉션이 핵심을 이룹니다.",
    history: "1560년 코시모 1세 데 메디치의 명으로 조르조 바사리가 설계한 관공서(우피치=사무실) 건물로, 1765년 일반에 공개되어 세계 최초의 근대적 미술관 중 하나가 되었습니다.",
    visitInfo: {
      hours: "화~일 08:15~18:30 (월요일 휴관, 최종 입장 17:30)",
      admission: "성인 €20 (3~10월), €12 (11~2월), 온라인 예약 수수료 €4",
      address: "Piazzale degli Uffizi, 6, 50122 Firenze FI",
      website: "https://www.uffizi.it",
    },
    highlights: [
      "보티첼리의 <비너스의 탄생>과 <봄(프리마베라)>",
      "카라바조의 <메두사>와 <바쿠스>",
      "레오나르도 다 빈치의 <수태고지>",
      "회랑에서 바라보는 아르노 강과 베키오 다리 전경",
    ],
    nearbyAttractions: ["베키오 궁전", "베키오 다리", "시뇨리아 광장", "바사리 회랑"],
    photoTips: "2층 회랑 창문에서 베키오 다리와 아르노 강을 배경으로 촬영하면 아름답습니다. 전시실 내부 촬영은 플래시 없이 가능합니다.",
    tips: [
      "온라인 사전 예약은 필수 — 성수기에는 수시간 대기합니다.",
      "화요일 개관 직후(08:15)가 가장 한적한 시간입니다.",
      "전체 관람에 3~4시간이 필요하며, 주요 작품 위주로 2시간 코스도 가능합니다.",
      "매월 첫째 일요일은 무료 입장(사전 예약 필요)입니다.",
    ],
  },
  "italy/tuscany/florence/duomo": {
    heroGradient: "from-red-500 to-orange-700",
    description: "브루넬레스키가 설계한 거대한 붉은 벽돌 돔이 피렌체 스카이라인을 지배합니다. 1436년에 완공된 이 돔은 당시 기술로는 불가능하다고 여겨졌던 건축의 기적이며, 지금도 석조 돔 중 세계 최대입니다.",
    history: "1296년 아르놀포 디 캄비오가 착공했으며, 브루넬레스키가 1420~1436년에 걸쳐 혁신적인 이중 벽 구조로 돔을 완성했습니다. 크레인 없이 400만 개 이상의 벽돌을 쌓아올린 건축 공학의 걸작입니다.",
    visitInfo: {
      hours: "성당 10:00~16:30, 돔 08:15~19:00 (일요일 단축), 지오토 종탑 08:15~19:00",
      admission: "성당 무료 / 브루넬레스키 패스(돔+종탑+세례당+박물관) €30",
      address: "Piazza del Duomo, 50122 Firenze FI",
      website: "https://www.duomofirenze.it",
    },
    highlights: [
      "브루넬레스키 돔 내부의 최후의 심판 프레스코화(바사리·주카리)",
      "돔 정상(463계단)에서의 피렌체 360도 파노라마",
      "지오토 종탑(414계단) 전망대",
      "세례당의 기베르티 '천국의 문' 청동문",
    ],
    nearbyAttractions: ["지오토 종탑", "산 조반니 세례당", "두오모 박물관", "시뇨리아 광장"],
    photoTips: "돔 외관은 미켈란젤로 광장에서 피렌체 전경과 함께 찍는 것이 최고입니다. 근접 촬영은 세례당 앞에서 정면으로 담으세요.",
    tips: [
      "돔 등반은 반드시 사전 온라인 예약이 필요합니다.",
      "엘리베이터가 없으므로 463계단을 걸어 올라가야 합니다.",
      "지오토 종탑에서 돔을 배경으로 사진을 찍을 수 있어 인기가 높습니다.",
      "성당 입장은 무료이지만 줄이 길 수 있으니 오전 일찍 방문하세요.",
    ],
  },
  "italy/tuscany/florence/ponte-vecchio": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "1345년에 건설된 아르노 강 위의 중세 다리로, 양쪽에 금세공 상점이 빼곡히 들어서 있습니다. 2층에는 메디치 가문의 비밀 통로인 바사리 회랑이 지나갑니다.",
    history: "현재의 석조 다리는 1345년 타데오 가디가 설계했으며, 원래 정육점이 있었으나 1593년 페르디난도 1세가 금세공상으로 교체시켰습니다. 2차 대전 중 히틀러의 명으로 유일하게 폭파를 면한 피렌체의 다리입니다.",
    visitInfo: {
      hours: "24시간 통행 가능 / 상점 10:00~19:00 (일요일 대부분 휴무)",
      admission: "무료 (통행)",
      address: "Ponte Vecchio, 50125 Firenze FI",
      website: "https://www.firenzeturismo.it",
    },
    highlights: [
      "양쪽으로 늘어선 금세공·보석 상점",
      "다리 중앙 전망 포인트에서 아르노 강 조망",
      "벤벤누토 첼리니 흉상",
      "야간 조명에 비친 다리 모습",
    ],
    nearbyAttractions: ["우피치 미술관", "피티 궁전", "시뇨리아 광장", "산타 트리니타 다리"],
    photoTips: "베키오 다리 전체 모습은 산타 트리니타 다리 또는 우피치 회랑에서 찍는 것이 좋습니다. 일몰 시 황금빛이 물드는 다리가 장관입니다.",
    tips: [
      "일몰 전후에 다리 위에서 아르노 강을 바라보는 것이 가장 로맨틱합니다.",
      "금세공 상점은 가격대가 높으니 예산을 미리 정하세요.",
      "밤에는 상점이 닫히지만 다리 야경이 아름답습니다.",
      "산타 트리니타 다리에서 베키오 다리 전경 사진을 찍을 수 있습니다.",
    ],
  },
  "italy/tuscany/florence/accademia-gallery": {
    heroGradient: "from-indigo-400 to-blue-700",
    description: "미켈란젤로의 다비드 상 원본이 소장된 피렌체의 대표 미술관입니다. 5.17m 높이의 대리석 걸작 외에도 미켈란젤로의 미완성 노예 연작과 중세·르네상스 회화 컬렉션을 보유하고 있습니다.",
    history: "1784년 토스카나 대공 피에트로 레오폴도가 미술 학생들의 교육을 위해 설립했습니다. 다비드 상은 1873년 시뇨리아 광장에서 이곳으로 옮겨졌으며, 현재 원본은 이곳에만 있습니다.",
    visitInfo: {
      hours: "화~일 08:15~18:50 (월요일 휴관, 최종 입장 18:20)",
      admission: "성인 €12 (특별전 시 €16), 온라인 예약 수수료 €4",
      address: "Via Ricasoli, 58/60, 50122 Firenze FI",
      website: "https://www.galleriaaccademiafirenze.it",
    },
    highlights: [
      "미켈란젤로의 다비드 상 원본 (높이 5.17m)",
      "미켈란젤로의 미완성 '노예' 연작 4점",
      "중세 악기 컬렉션",
      "13~16세기 토스카나 회화 갤러리",
    ],
    nearbyAttractions: ["두오모", "산 마르코 수도원", "메디치 리카르디 궁전", "산 로렌초 시장"],
    photoTips: "다비드 상 촬영은 플래시 없이 가능합니다. 정면보다 약간 측면에서 찍으면 근육의 디테일이 잘 드러납니다.",
    tips: [
      "온라인 예약 필수 — 성수기에는 수시간 대기합니다.",
      "오전 개관 직후(08:15)가 가장 한적합니다.",
      "다비드 상에 집중하면 1시간, 전체 관람은 2시간이면 충분합니다.",
      "시뇨리아 광장의 다비드 상은 복제품이며, 원본은 오직 이곳에만 있습니다.",
    ],
  },

  // ===== VENICE =====
  "italy/venice-veneto/venice/st-marks-basilica": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "비잔틴 건축의 걸작으로 황금빛 모자이크가 8,000㎡에 걸쳐 장식된 베네치아의 대성당입니다. 성 마르코의 유해를 모시기 위해 건설되었으며, '황금의 교회'라는 별칭을 가지고 있습니다.",
    history: "828년 이집트 알렉산드리아에서 성 마르코의 유해를 가져온 후 첫 번째 성당이 건설되었습니다. 현재 건물은 1063년에 착공되어 수세기에 걸쳐 완성되었으며, 십자군 전쟁 전리품으로 장식되었습니다.",
    visitInfo: {
      hours: "월~토 09:30~17:15, 일·공휴일 14:00~17:15 (시즌별 변동)",
      admission: "기본 입장 무료(온라인 예약 €3 권장), 팔라 도로 €5, 박물관+로지아 €7",
      address: "Piazza San Marco, 328, 30124 Venezia VE",
      website: "https://www.basilicasanmarco.it",
    },
    highlights: [
      "8,000㎡의 황금 모자이크 — 구약·신약 성경 이야기",
      "팔라 도로(Pala d'Oro) — 보석으로 장식된 비잔틴 금세공 제단화",
      "로지아에서 바라보는 산 마르코 광장 전경",
      "4마리의 청동 말(원본은 내부 박물관, 외부는 복제)",
    ],
    nearbyAttractions: ["두칼레 궁전", "산 마르코 종탑", "카페 플로리안", "시계탑(토레 델 오롤로지오)"],
    photoTips: "외관 전체는 광장 중앙에서 광각으로 담으세요. 내부 모자이크는 자연광이 들어오는 오전에 가장 빛납니다.",
    tips: [
      "큰 가방은 반입 금지이며 무료 보관소(왼쪽 골목)를 이용하세요.",
      "반바지·민소매 등 노출 복장은 입장이 거부됩니다.",
      "온라인 예약(€3)으로 긴 대기줄을 건너뛸 수 있습니다.",
      "아쿠아 알타(만조) 시 성당 바닥이 침수될 수 있습니다.",
    ],
  },
  "italy/venice-veneto/venice/doges-palace": {
    heroGradient: "from-pink-400 to-rose-700",
    description: "베네치아 공화국 총독(도제)의 관저이자 정부 청사, 법원, 감옥이 결합된 고딕 양식의 걸작입니다. 틴토레토의 세계 최대 유화 '천국'이 있는 대평의회실이 하이라이트입니다.",
    history: "9세기에 최초 건설된 후 14~15세기에 현재의 고딕 양식으로 재건되었습니다. 1,000년간 베네치아 공화국의 심장부 역할을 했으며, 카사노바가 이곳 감옥에서 탈출한 일화가 유명합니다.",
    visitInfo: {
      hours: "4~10월 09:00~19:00, 11~3월 09:00~18:00 (최종 입장 1시간 전)",
      admission: "성인 €25 (산 마르코 광장 박물관 통합), 시크릿 투어 추가 €22",
      address: "Piazza San Marco, 1, 30124 Venezia VE",
      website: "https://www.palazzoducale.visitmuve.it",
    },
    highlights: [
      "대평의회실 — 틴토레토의 '천국' (세계 최대 유화, 22m x 7m)",
      "탄식의 다리 — 감옥으로 연결되는 석회석 다리",
      "황금 계단(스칼라 도로)",
      "시크릿 투어 — 카사노바 탈출 감옥과 고문실",
    ],
    nearbyAttractions: ["산 마르코 대성당", "산 마르코 종탑", "탄식의 다리", "코레르 박물관"],
    photoTips: "탄식의 다리는 궁전 옆 작은 다리(파글리아 다리)에서 찍을 수 있습니다. 대평의회실의 천국은 광각 렌즈가 필수입니다.",
    tips: [
      "시크릿 투어(별도 예약)로 카사노바 감옥과 비공개 구역을 볼 수 있습니다.",
      "오전 일찍 방문하면 대평의회실을 여유롭게 감상할 수 있습니다.",
      "산 마르코 광장 박물관 통합 티켓으로 코레르 박물관도 입장 가능합니다.",
      "오디오 가이드(€5)를 이용하면 역사적 맥락을 이해하기 좋습니다.",
    ],
  },
  "italy/venice-veneto/venice/rialto-bridge": {
    heroGradient: "from-stone-400 to-amber-700",
    description: "대운하를 가로지르는 베네치아에서 가장 오래된 돌다리로 1591년에 완공되었습니다. 단일 아치 구조 위에 상점이 늘어선 독특한 형태로 베네치아의 대표적 랜드마크입니다.",
    history: "원래 목조 다리였으나 1524년 붕괴 후 안토니오 다 폰테의 설계로 1588~1591년에 석조 다리로 재건되었습니다. 미켈란젤로와 팔라디오도 설계 공모에 참여했으나 탈락한 것으로 유명합니다.",
    visitInfo: {
      hours: "24시간 통행 가능 / 상점 10:00~19:00",
      admission: "무료",
      address: "Sestiere San Polo, 30125 Venezia VE",
      website: "https://www.veneziaunica.it",
    },
    highlights: [
      "다리 위 양쪽 상점 사이 중앙 아치에서의 대운하 전망",
      "리알토 시장의 신선한 해산물과 과일",
      "대운하를 오가는 곤돌라와 바포레토 풍경",
      "야간 조명 아래의 다리 전경",
    ],
    nearbyAttractions: ["리알토 시장", "폰다코 데이 테데스키 전망대", "산 자코모 교회", "대운하"],
    photoTips: "다리 전체 모습은 대운하 바포레토에서 찍는 것이 최고입니다. 폰다코 데이 테데스키(DFS) 옥상 무료 전망대에서도 멋진 각도로 촬영 가능합니다.",
    tips: [
      "폰다코 데이 테데스키(DFS) 옥상 전망대는 무료이지만 온라인 예약이 필요합니다.",
      "리알토 시장은 오전에만 운영되니 일찍 방문하세요 (일요일 휴무).",
      "다리 위 상점은 관광객 가격이니 기념품 구매 시 주의하세요.",
      "바포레토 1번 라인이 대운하를 따라 다리 아래를 지나갑니다.",
    ],
  },

  // ===== MILAN =====
  "italy/milan-lombardy/milan/duomo-di-milano": {
    heroGradient: "from-slate-400 to-gray-800",
    description: "135개의 첨탑과 3,400개의 조각상으로 장식된 세계 최대의 고딕 성당 중 하나입니다. 600년에 걸쳐 완성된 핑크빛 칸도글리아 대리석 외관이 장엄하며, 옥상 테라스에서 밀라노 시내를 조망할 수 있습니다.",
    history: "1386년 잔 갈레아초 비스콘티 공작의 명으로 착공하여 1965년에 최종 완공되었습니다. 나폴레옹이 1805년 이곳에서 이탈리아 왕으로 대관식을 올렸으며, 마돈니나 금동상이 최고 첨탑(108.5m)을 장식합니다.",
    visitInfo: {
      hours: "성당 08:00~19:00, 옥상 09:00~19:00 (최종 입장 18:10)",
      admission: "성당 €5 / 옥상 계단 €10, 엘리베이터 €14 / 두오모 패스(전체) €20",
      address: "Piazza del Duomo, 20122 Milano MI",
      website: "https://www.duomomilano.it",
    },
    highlights: [
      "옥상 테라스에서 135개 첨탑 사이로 바라보는 밀라노 전경",
      "성당 내부 스테인드글라스 — 이탈리아 최대 규모",
      "성 바르톨로메오 순교자 조각상 (피부가 벗겨진 사실적 표현)",
      "맑은 날 옥상에서 알프스 조망 가능",
    ],
    nearbyAttractions: ["갤러리아 비토리오 에마누엘레 2세", "왕궁", "라 스칼라 극장", "메르칸티 광장"],
    photoTips: "외관 전체는 광장 남쪽에서 정면으로 찍으세요. 옥상에서는 첨탑을 전경으로 두고 밀라노 시내를 배경으로 담으면 독특한 사진을 얻을 수 있습니다.",
    tips: [
      "옥상 테라스는 밀라노 최고의 전망 포인트이니 반드시 방문하세요.",
      "계단(약 250개)과 엘리베이터 중 선택 가능합니다.",
      "복장 규정(어깨·무릎 가림)이 적용됩니다.",
      "메트로 M1·M3 두오모역에서 바로 연결됩니다.",
    ],
  },
  "italy/milan-lombardy/milan/last-supper": {
    heroGradient: "from-amber-500 to-stone-700",
    description: "산타 마리아 델레 그라치에 교회 식당 벽면에 그려진 레오나르도 다 빈치의 걸작 벽화입니다. 예수가 '너희 중 하나가 나를 배신하리라'고 말하는 순간의 12제자 반응을 포착한 르네상스 미술의 정점입니다.",
    history: "1495~1498년 루도비코 스포르차 공작의 의뢰로 레오나르도 다 빈치가 제작했습니다. 전통적인 프레스코가 아닌 템페라 기법으로 마른 벽에 그려 일찍부터 훼손이 시작되었으며, 20년간의 대규모 복원을 거쳐 1999년 재공개되었습니다.",
    visitInfo: {
      hours: "화~일 08:15~18:45 (월요일 휴관, 관람 시간 15분 엄수)",
      admission: "성인 €15 + 예약 수수료 €2",
      address: "Piazza di Santa Maria delle Grazie, 2, 20123 Milano MI",
      website: "https://www.cenacolovinciano.org",
    },
    highlights: [
      "레오나르도 다 빈치의 원근법과 빛의 처리",
      "12제자 각각의 개성 있는 표정과 제스처",
      "유다가 그림자 속에서 돈주머니를 쥐고 있는 디테일",
      "맞은편 벽의 도나토 몬토르파노 '십자가형' 프레스코",
    ],
    nearbyAttractions: ["산타 마리아 델레 그라치에 교회", "스포르체스코 성", "셈피오네 공원", "레오나르도 다 빈치 과학기술 박물관"],
    photoTips: "실내 촬영이 가능하지만 플래시는 금지입니다. 전체 벽화를 담으려면 광각 렌즈가 필요합니다.",
    tips: [
      "최소 2~3개월 전 온라인 예약이 필수입니다 — 항상 매진입니다.",
      "관람 시간은 엄격하게 15분으로 제한됩니다.",
      "한 번에 최대 25명만 입장하므로 조용히 감상할 수 있습니다.",
      "오전 첫 시간대(08:15)가 가장 차분한 분위기입니다.",
    ],
  },

  // ===== NAPLES =====
  "italy/naples-south/naples/archaeological-museum": {
    heroGradient: "from-orange-500 to-red-800",
    description: "폼페이와 헤르쿨라네움에서 출토된 유물, 파르네세 컬렉션의 거대 조각상, 고대 모자이크 등을 소장한 세계 최고의 고고학 박물관입니다. 고대 로마 일상생활을 가장 생생히 보여주는 곳입니다.",
    history: "1777년 부르봉 왕가의 페르디난도 4세가 설립했으며, 파르네세 가문에서 상속받은 컬렉션과 폼페이·헤르쿨라네움 발굴 유물이 핵심입니다. 나폴리 대학교 건물을 개조하여 박물관으로 사용합니다.",
    visitInfo: {
      hours: "수~월 09:00~19:30 (화요일 휴관, 최종 입장 19:00)",
      admission: "성인 €18, 매월 첫째 일요일 무료",
      address: "Piazza Museo, 19, 80135 Napoli NA",
      website: "https://www.museoarcheologiconapoli.it",
    },
    highlights: [
      "알렉산드로스 모자이크 — 폼페이 출토 세계적 걸작 모자이크",
      "파르네세 황소 — 고대 세계 최대의 단일 대리석 조각",
      "비밀의 방(가비네토 세크레토) — 고대 로마 에로틱 아트 컬렉션",
      "폼페이 벽화 컬렉션 — 고대 로마 일상을 보여주는 프레스코화",
    ],
    nearbyAttractions: ["스파카나폴리", "나폴리 두오모", "카포디몬테 미술관", "지하 나폴리"],
    photoTips: "모자이크 작품은 정면에서 촬영해야 디테일이 살아납니다. 내부 촬영은 플래시 없이 가능합니다.",
    tips: [
      "폼페이 방문 전에 이곳을 먼저 보면 유적지 이해가 깊어집니다.",
      "비밀의 방(에로틱 아트)은 별도 구역으로 자유 입장 가능합니다.",
      "전체 관람에 2~3시간이 필요합니다.",
      "메트로 1·2호선 무세오역(카보우르 광장)에서 바로 연결됩니다.",
    ],
  },
  "italy/naples-south/naples/spaccanapoli": {
    heroGradient: "from-yellow-500 to-orange-700",
    description: "나폴리를 동서로 가르는 직선 거리로 '나폴리를 쪼개다'라는 뜻입니다. 그리스-로마 시대 도시 축(데쿠마노)을 따라 형성된 구시가지의 심장부로, 교회·상점·피체리아가 빼곡합니다.",
    history: "기원전 5세기 그리스 식민도시 네아폴리스의 주요 도로(데쿠마노 인페리오레)에서 시작되었습니다. 2,500년 역사를 가진 이 거리는 로마·비잔틴·노르만·앙주·아라곤 시대의 층위가 고스란히 남아 있습니다.",
    visitInfo: {
      hours: "24시간 통행 가능 (상점·교회 개별 운영시간)",
      admission: "무료 (거리 통행)",
      address: "Via Benedetto Croce ~ Via San Biagio dei Librai, 80134 Napoli NA",
      website: "https://www.visitnaples.eu",
    },
    highlights: [
      "산 세베로 예배당의 '베일 덮인 그리스도' 조각",
      "나폴리 두오모와 산 젠나로 피 액화 기적",
      "프레세페(나폴리 전통 성탄 인형) 공방 거리",
      "길거리 피자 프리타(튀긴 피자)와 스폴리아텔라",
    ],
    nearbyAttractions: ["산 세베로 예배당", "나폴리 두오모", "나폴리 지하 도시", "산 그레고리오 아르메노"],
    photoTips: "좁은 골목에 빨래가 널린 전형적인 나폴리 풍경은 산 그레고리오 아르메노 거리에서 잘 담을 수 있습니다.",
    tips: [
      "소매치기가 잦은 지역이니 귀중품에 주의하세요.",
      "산 그레고리오 아르메노 거리의 프레세페 공방은 크리스마스 시즌이 아니어도 볼거리입니다.",
      "길거리 음식을 맛보며 걷는 것이 스파카나폴리 탐방의 핵심입니다.",
      "디 마테오(Di Matteo) 피체리아의 피자 프리타(€1)는 꼭 맛보세요.",
    ],
  },

  // ===== AMALFI COAST =====
  "italy/naples-south/amalfi-coast/positano": {
    heroGradient: "from-pink-400 to-blue-600",
    description: "아말피 해안에서 가장 포토제닉한 마을로, 파스텔 컬러 건물이 가파른 절벽을 타고 바다까지 내려오는 수직적 풍경이 압도적입니다. 좁은 계단 골목, 부티크, 해변 레스토랑이 어우러진 지중해의 보석입니다.",
    history: "중세 아말피 공화국의 항구 도시로 번영했으나 16세기 이후 쇠퇴했습니다. 1953년 존 스타인벡의 에세이로 세계적으로 알려지면서 할리우드 스타와 유럽 귀족의 휴양지가 되었습니다.",
    visitInfo: {
      hours: "24시간 (마을 자유 통행)",
      admission: "무료",
      address: "84017 Positano SA",
      website: "https://www.positano.com",
    },
    highlights: [
      "절벽 위에서 내려다보는 파스텔 건물과 지중해 파노라마",
      "스피아지아 그란데 해변에서 일광욕",
      "산타 마리아 아순타 교회의 마졸리카 타일 돔",
      "수공예 샌들과 리넨 옷 쇼핑",
    ],
    nearbyAttractions: ["신들의 길 트레킹", "아말피", "라벨로", "카프리 섬(페리)"],
    photoTips: "마을 전체를 담으려면 해안 도로 상부 전망대 또는 페리에서 바다 쪽에서 촬영하세요. 일몰 시 건물이 분홍빛으로 물드는 순간이 최고입니다.",
    tips: [
      "계단이 극도로 많으니 편한 운동화를 필수로 신으세요.",
      "숙소를 잡을 때는 해변까지의 계단 수를 꼭 확인하세요.",
      "성수기(7~8월) 해변은 매우 혼잡하며 선베드 비용이 €20~30입니다.",
      "SITA 버스나 페리로 다른 아말피 마을로 이동할 수 있습니다.",
    ],
  },

  // ===== POMPEII =====
  "italy/naples-south/pompeii/archaeological-park": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "서기 79년 8월 24일 베수비오 화산 폭발로 6m 두께의 화산재 아래 매몰된 고대 로마 도시입니다. 66헥타르의 유적지에 거리, 주택, 상점, 목욕탕, 원형 극장이 2,000년 전 모습 그대로 보존되어 있습니다.",
    history: "기원전 8세기에 건설된 도시로 로마 제국 시대에는 약 2만 명이 거주했습니다. 서기 79년 베수비오 화산 폭발로 순식간에 매몰되었으며, 1748년부터 본격적인 발굴이 시작되어 현재도 진행 중입니다.",
    visitInfo: {
      hours: "4~10월 09:00~19:00 (최종 입장 17:30), 11~3월 09:00~17:00 (최종 입장 15:30)",
      admission: "성인 €18, 폼페이+헤르쿨라네움 통합 €22",
      address: "Via Villa dei Misteri, 2, 80045 Pompei NA",
      website: "https://www.pompeiisites.org",
    },
    highlights: [
      "포럼 — 도시의 정치·종교·상업 중심지",
      "비밀의 별장(Villa dei Misteri) — 디오니소스 비의 프레스코화",
      "원형 극장 — 로마에서 가장 오래된 석조 원형 극장",
      "석고 캐스팅 — 화산재 속에서 발견된 희생자들의 형상",
    ],
    nearbyAttractions: ["베수비오 산", "헤르쿨라네움", "나폴리 고고학 박물관", "소렌토"],
    photoTips: "포럼에서 베수비오 산을 배경으로 찍는 것이 상징적인 구도입니다. 오전에 방문하면 역광 없이 촬영할 수 있습니다.",
    tips: [
      "최소 3~4시간을 잡으세요 — 전체를 보려면 하루도 부족합니다.",
      "물(최소 1L)과 자외선 차단제, 모자를 반드시 준비하세요.",
      "오디오 가이드 또는 가이드 투어(€15~30)를 강력 추천합니다.",
      "나폴리 고고학 박물관의 출토 유물을 먼저 보면 이해가 깊어집니다.",
    ],
  },

  // ===== PISA =====
  "italy/tuscany/pisa/leaning-tower": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "세계에서 가장 유명한 건축 실수. 1173년 착공 후 토양 불균형으로 기울어지기 시작했으며, 200년에 걸쳐 완공되었습니다. 현재 약 3.97도 기울어져 있으며 251개 계단으로 정상에 오를 수 있습니다.",
    history: "1173년 보나노 피사노의 설계로 착공되었으나 3층 건설 중 기울어지기 시작했습니다. 이후 100년의 중단과 보정 시도를 거쳐 1372년에 완공되었습니다. 1990~2001년 대규모 보정 공사로 붕괴 위험을 해소했습니다.",
    visitInfo: {
      hours: "3~10월 08:30~20:30, 11~2월 09:00~17:00 (시기별 변동)",
      admission: "€20 (온라인 예약 필수, 30분 단위 시간제)",
      address: "Piazza del Duomo, 56126 Pisa PI",
      website: "https://www.opapisa.it",
    },
    highlights: [
      "정상(56m)에서 바라보는 기적의 광장과 피사 시내 전경",
      "기울어진 계단을 오르며 느끼는 기묘한 균형감",
      "갈릴레오의 낙하 실험 전설의 무대",
      "7개 종이 울리는 종탑의 원래 기능",
    ],
    nearbyAttractions: ["피사 대성당", "세례당", "캄포산토 기념묘지", "시노피에 박물관"],
    photoTips: "탑을 미는 포즈는 광장 남쪽 잔디밭에서 찍는 것이 가장 좋습니다. 대성당과 함께 담으려면 북서쪽 모서리가 좋은 각도입니다.",
    tips: [
      "온라인 예약은 필수 — 성수기에는 당일 매진됩니다.",
      "30분 단위 시간제이므로 예약 시간 10분 전에 도착하세요.",
      "8세 미만 어린이는 입장 불가, 18세 미만은 보호자 동반 필수입니다.",
      "가방 등 소지품은 무료 보관소에 맡겨야 합니다.",
    ],
  },

  // ===== SIENA =====
  "italy/tuscany/siena/piazza-del-campo": {
    heroGradient: "from-orange-500 to-red-800",
    description: "유럽에서 가장 아름다운 중세 광장 중 하나로 독특한 조개(부채) 모양의 기울어진 광장입니다. 해마다 7월과 8월에 열리는 팔리오 경마가 이 광장에서 펼쳐지며, 시에나 시민 생활의 중심지입니다.",
    history: "13~14세기에 현재 모습으로 조성되었으며, 9개의 구획은 시에나를 통치한 9인 의회를 상징합니다. 1656년부터 시작된 팔리오 경마는 시에나 17개 콘트라다(구역) 간의 전통 경쟁으로 현재까지 이어집니다.",
    visitInfo: {
      hours: "24시간 개방 (만자의 탑: 10:00~19:00, 시기별 변동)",
      admission: "광장 무료 / 만자의 탑 €10, 시민 박물관 통합 €15",
      address: "Piazza del Campo, 53100 Siena SI",
      website: "https://www.comune.siena.it",
    },
    highlights: [
      "조개 모양의 9구획 광장에서 일광욕하는 관광객과 시민들",
      "만자의 탑(102m) 정상에서 토스카나 전경 조망",
      "푸블리코 궁전의 시에나 시민 박물관",
      "팔리오 경마(7/2, 8/16) — 세계에서 가장 흥분되는 경마",
    ],
    nearbyAttractions: ["시에나 두오모", "만자의 탑", "산 도메니코 성당", "메디치 요새"],
    photoTips: "만자의 탑에서 광장 전체를 내려다보며 촬영하면 조개 모양이 잘 드러납니다. 광장 가장자리 카페에서 와인을 마시며 찍는 사진도 좋습니다.",
    tips: [
      "광장 기울기가 있으니 바닥에 앉을 때 음료가 쏟아지지 않게 주의하세요.",
      "팔리오 경마 당일은 무료 입장이지만 극도로 혼잡합니다(5시간+ 대기).",
      "주변 카페에서 에스프레소나 와인을 마시며 광장의 분위기를 즐기세요.",
      "만자의 탑은 400개 계단이며, 인원 제한으로 대기가 있을 수 있습니다.",
    ],
  },

  // ===== VERONA =====
  "italy/venice-veneto/verona/verona-arena": {
    heroGradient: "from-rose-500 to-pink-800",
    description: "서기 30년경에 건설된 로마 원형 경기장으로 콜로세움, 카푸아에 이어 이탈리아에서 세 번째로 큰 규모입니다. 현재도 2만 2천 석 규모의 야외 오페라 극장으로 사용되며, 여름 오페라 축제가 세계적으로 유명합니다.",
    history: "서기 30년경 로마 시대에 3만 명을 수용하는 원형 경기장으로 건설되었습니다. 1913년 베르디 탄생 100주년을 기념한 아이다 공연 이래 세계적인 야외 오페라 극장으로 자리매김했습니다.",
    visitInfo: {
      hours: "월 13:30~19:30, 화~일 08:30~19:30 (오페라 시즌 변동)",
      admission: "성인 €10 / 오페라 공연 €30~250 (좌석별 상이)",
      address: "Piazza Bra, 1, 37121 Verona VR",
      website: "https://www.arena.it",
    },
    highlights: [
      "여름 오페라 축제(6~9월) — 일몰과 함께 시작되는 야외 공연",
      "2,000년 된 관중석 계단에 앉아보는 체험",
      "아레나 내부에서 바라보는 베로나 스카이라인",
      "아이다 등 대규모 오페라의 웅장한 무대 세트",
    ],
    nearbyAttractions: ["에르베 광장", "줄리엣의 집", "브라 광장", "카스텔베키오"],
    photoTips: "브라 광장에서 아레나 전체를 정면으로 담을 수 있습니다. 오페라 시즌에는 야간 조명 아래의 아레나가 장관입니다.",
    tips: [
      "여름 오페라 티켓은 수개월 전에 예약하세요 — 인기 공연은 빨리 매진됩니다.",
      "석조 계단석(가장 저렴, €30 내외) 관람 시 방석을 준비하세요.",
      "오페라 공연 시 관객들이 촛불을 켜는 전통이 감동적입니다.",
      "비가 오면 공연이 취소될 수 있으니 날씨를 확인하세요.",
    ],
  },

  // ===== PALERMO =====
  "italy/sicily/palermo/palermo-cathedral": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "12세기에 건축된 팔레르모의 대표 건축물로 아랍-노르만-고딕-바로크 양식이 혼합된 독특한 외관이 시칠리아의 복잡한 역사를 상징합니다. 왕실 무덤과 성 로잘리아의 유해가 모셔져 있습니다.",
    history: "1185년 팔레르모 대주교 구알테리오 오파밀리오가 착공했으며, 원래 이 자리에는 모스크가 있었습니다. 이전에는 비잔틴 성당, 그 이전에는 로마 신전이 있었던 곳으로, 팔레르모의 다층적 역사를 보여줍니다.",
    visitInfo: {
      hours: "월~토 07:00~19:00, 일 08:00~13:00 & 16:00~19:00",
      admission: "성당 무료 / 왕실 무덤+보물실+옥상 통합 €7",
      address: "Via Vittorio Emanuele, 490, 90134 Palermo PA",
      website: "https://www.cattedrale.palermo.it",
    },
    highlights: [
      "아랍·노르만·고딕·바로크 양식이 혼합된 독특한 외관",
      "왕실 무덤 — 프리드리히 2세와 노르만 왕들의 석관",
      "성 로잘리아 예배당과 은관(銀棺)",
      "옥상 전망대에서 팔레르모 시내와 바다 조망",
    ],
    nearbyAttractions: ["노르만 궁전", "콰트로 칸티", "프레토리아 분수", "발레르모 마르토라나 교회"],
    photoTips: "성당 남측 외관이 가장 복잡한 건축 양식을 보여줍니다. 옥상에서 도시 전경과 함께 촬영하세요.",
    tips: [
      "옥상 전망대는 추가 요금(€5)이지만 팔레르모 최고의 전망을 제공합니다.",
      "미사 시간에는 관광이 제한되니 사전에 확인하세요.",
      "7월 성 로잘리아 축제 기간에는 특별한 종교 행사가 열립니다.",
      "콰트로 칸티까지 도보 10분으로 연계 관광이 편리합니다.",
    ],
  },

  // ===== TAORMINA =====
  "italy/sicily/taormina/greek-theatre": {
    heroGradient: "from-indigo-400 to-blue-800",
    description: "기원전 3세기에 그리스인이 건설하고 로마인이 확장한 고대 극장으로, 에트나 산과 이오니아 해를 배경으로 한 전망이 세계에서 가장 아름다운 극장 뷰로 꼽힙니다. 현재도 여름 공연장으로 사용됩니다.",
    history: "기원전 3세기 시라쿠사의 그리스인이 건설했으며, 서기 2세기 로마인이 검투사 경기를 위해 확장했습니다. 직경 109m로 시칠리아에서 두 번째로 큰 고대 극장이며, 5,400석 규모입니다.",
    visitInfo: {
      hours: "4~10월 09:00~19:00, 11~3월 09:00~16:00",
      admission: "성인 €10",
      address: "Via del Teatro Greco, 1, 98039 Taormina ME",
      website: "https://www.parconaxostaormina.com",
    },
    highlights: [
      "객석에서 바라보는 에트나 산과 이오니아 해의 파노라마",
      "여름 영화제·음악제·연극제 공연 관람(Taormina Arte)",
      "로마 시대 확장 흔적 — 검투사 경기를 위한 구조 변경",
      "일몰 시 에트나 산이 붉게 물드는 장관",
    ],
    nearbyAttractions: ["코르소 움베르토", "4월 9일 광장", "이솔라 벨라", "나우마키에(로마 체육관)"],
    photoTips: "오후 늦게 방문하면 에트나 산에 석양이 물드는 장면을 배경으로 촬영할 수 있습니다. 객석 중앙 상단이 전경을 담기에 최적의 위치입니다.",
    tips: [
      "여름 공연 티켓은 사전 예약하세요 — 고대 극장에서의 공연은 특별한 경험입니다.",
      "오후 늦은 시간 방문이 빛이 가장 아름답습니다.",
      "맑은 날에는 에트나 산 정상의 연기까지 볼 수 있습니다.",
      "극장 입구까지 오르막이 있으니 편한 신발을 신으세요.",
    ],
  },
};
