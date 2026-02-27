import type { CityDetail, AttractionDetail } from "../city-details";

export const spainCityDetails: Record<string, CityDetail> = {
  // ===== BARCELONA & CATALONIA =====
  "spain/barcelona-catalonia/barcelona": {
    heroGradient: "from-red-500 to-orange-700",
    description: "가우디의 건축과 지중해 해변이 공존하는 카탈루냐의 수도. 사그라다 파밀리아, 구엘 공원, 람블라스 거리 등 세계적인 명소와 함께 타파스, 해산물 요리 등 미식의 천국입니다.",
    bestTime: "4~6월, 9~10월 (여름은 관광객 많고 더움)",
    stayArea: "고딕 지구 / 에이샴플라 / 바르셀로네타",
    transport: "메트로, 버스, 트램 (T-Casual 교통카드)",
    districts: [
      { name: "고딕 지구", nameEn: "Gothic Quarter", description: "2,000년 역사의 미로 같은 골목길. 바르셀로나 대성당과 왕의 광장이 위치.", highlights: ["바르셀로나 대성당", "왕의 광장", "비스베 다리", "보케리아 시장"] },
      { name: "에이샴플라", nameEn: "Eixample", description: "가우디 건축이 밀집한 모더니즘 건축의 보고. 격자형 도시 계획이 특징.", highlights: ["사그라다 파밀리아", "카사 바트요", "카사 밀라", "불화의 블록"] },
      { name: "바르셀로네타", nameEn: "Barceloneta", description: "지중해 해변과 해산물 레스토랑이 즐비한 해변 지구.", highlights: ["바르셀로네타 해변", "해산물 레스토랑 거리", "W 호텔"] },
    ],
    attractions: [
      { name: "사그라다 파밀리아", nameEn: "Sagrada Familia", description: "가우디의 미완성 걸작으로 1882년 착공, 2026년 완공 목표의 대성당.", category: "성당", tip: "온라인 사전 예약 필수! 타워 입장은 별도 티켓입니다." },
      { name: "구엘 공원", nameEn: "Park Guell", description: "가우디가 설계한 동화 같은 공원으로 모자이크 도마뱀 분수가 상징.", category: "공원", tip: "오전 첫 타임(08:00) 입장이 인파가 적습니다." },
      { name: "람블라스 거리", nameEn: "La Rambla", description: "카탈루냐 광장에서 항구까지 이어지는 1.2km 보행자 거리.", category: "거리", tip: "소매치기 주의! 귀중품은 앞주머니에 넣으세요." },
      { name: "고딕 지구", nameEn: "Gothic Quarter", description: "로마 시대부터 이어진 바르셀로나의 역사적 심장부. 좁은 골목 사이로 광장과 교회가 숨어 있습니다.", category: "역사지구" },
      { name: "카사 바트요", nameEn: "Casa Batllo", description: "가우디의 모더니즘 건축 걸작으로 '뼈의 집'이라는 별명. 용의 등뼈 같은 지붕이 인상적.", category: "건축", tip: "야간 입장(저녁 이벤트)은 옥상에서 칵테일 포함입니다." },
      { name: "보케리아 시장", nameEn: "La Boqueria", description: "람블라스 거리에 위치한 바르셀로나 최대 재래시장. 신선한 과일주스와 해산물 타파스.", category: "시장" },
    ],
    dayTrips: [
      { name: "몬세라트", nameEn: "Montserrat", description: "톱니 모양 바위산의 베네딕트 수도원. 검은 성모상으로 유명.", travelTime: "기차+등산열차 약 1.5시간", gradient: "from-stone-500 to-stone-800" },
      { name: "지로나", nameEn: "Girona", description: "왕좌의 게임 촬영지, 색색의 강변 건물이 아름다운 중세 도시.", travelTime: "고속열차 약 40분", gradient: "from-amber-400 to-red-600" },
    ],
    localFood: [
      { name: "타파스", description: "다양한 소량 접시 요리, 바르셀로나 바 문화의 핵심.", emoji: "🍢" },
      { name: "피데우아", description: "파스타 면으로 만든 해산물 빠에야, 카탈루냐 해안 특산.", emoji: "🍝" },
      { name: "크레마 카탈라나", description: "카탈루냐식 크렘 브륄레, 시나몬과 레몬향이 특징.", emoji: "🍮" },
    ],
    tips: [
      "사그라다 파밀리아는 최소 2주 전에 온라인 예약하세요.",
      "메트로 T-Casual(10회권)이 단일 티켓보다 훨씬 경제적입니다.",
      "람블라스 거리는 소매치기가 많으니 항상 소지품에 주의하세요.",
      "일요일 오후에는 많은 상점이 문을 닫으니 참고하세요.",
    ],
  },
  "spain/barcelona-catalonia/montserrat": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "바르셀로나 근교의 톱니 모양 바위산에 자리한 베네딕트 수도원. 12세기 검은 성모상(라 모레네타)과 소년 합창단 에스콜라니아의 공연이 유명하며, 등산 코스와 전망대에서의 절경이 압도적입니다.",
    bestTime: "4~6월, 9~11월",
    stayArea: "바르셀로나에서 당일치기 권장",
    transport: "FGC 기차 + 등산열차 또는 케이블카",
    districts: [
      { name: "수도원 지구", nameEn: "Monastery Area", description: "산타 마리아 대성당과 검은 성모상, 박물관이 위치한 핵심 지역.", highlights: ["산타 마리아 대성당", "검은 성모상", "몬세라트 박물관"] },
    ],
    attractions: [
      { name: "몬세라트 수도원", nameEn: "Montserrat Monastery", description: "11세기에 설립된 베네딕트 수도원으로 검은 성모상(라 모레네타)이 모셔져 있습니다.", category: "수도원", tip: "검은 성모상 관람은 오전 일찍 가야 줄이 짧습니다." },
      { name: "산 호안 전망대", nameEn: "Sant Joan Viewpoint", description: "푸니쿨라를 타고 올라가면 몬세라트 산 정상의 파노라마 뷰.", category: "전망대" },
      { name: "산타 코바", nameEn: "Santa Cova", description: "검은 성모상이 발견된 동굴로 가는 순례길.", category: "순례길", tip: "왕복 약 1시간, 경사가 있으니 편한 신발 필수." },
    ],
    dayTrips: [
      { name: "바르셀로나", nameEn: "Barcelona", description: "가우디의 도시로 돌아가 남은 명소 탐방.", travelTime: "기차+등산열차 약 1.5시간", gradient: "from-red-500 to-orange-700" },
    ],
    localFood: [
      { name: "멜 이 마토", description: "몬세라트 전통 치즈에 꿀을 곁들인 디저트.", emoji: "🍯" },
      { name: "코카", description: "카탈루냐 전통 플랫브레드, 달콤한 버전과 짭짤한 버전.", emoji: "🥧" },
    ],
    tips: [
      "에스콜라니아 소년 합창단 공연은 월~금 13:00에 무료로 감상 가능합니다.",
      "Tot Montserrat 패키지(교통+박물관+식사)가 가성비 좋습니다.",
      "오전 일찍 출발해야 여유롭게 관람할 수 있습니다.",
    ],
  },
  "spain/barcelona-catalonia/girona": {
    heroGradient: "from-amber-400 to-red-600",
    description: "오냐르 강변의 색색 건물이 엽서 같은 중세 도시. 왕좌의 게임 촬영지로 유명해졌으며, 유대인 거리, 대성당, 아랍 목욕탕 등 역사 유적과 세계 최고의 레스토랑 엘 셀레르 데 칸 로카가 있습니다.",
    bestTime: "4~6월, 9~10월",
    stayArea: "구시가지 (바리 벨)",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "바리 벨", nameEn: "Barri Vell", description: "중세 성벽과 대성당, 유대인 거리가 있는 구시가지.", highlights: ["지로나 대성당", "유대인 거리", "아랍 목욕탕"] },
    ],
    attractions: [
      { name: "지로나 대성당", nameEn: "Girona Cathedral", description: "세계에서 가장 넓은 고딕 본당(23m)을 보유한 대성당.", category: "성당", tip: "90개 계단을 올라야 하지만 전망이 훌륭합니다." },
      { name: "유대인 거리", nameEn: "Jewish Quarter", description: "유럽에서 가장 잘 보존된 유대인 거리 중 하나.", category: "역사지구" },
      { name: "오냐르 강변", nameEn: "Onyar Riverfront", description: "색색의 건물이 강에 비치는 지로나의 대표 풍경.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "바르셀로나", nameEn: "Barcelona", description: "가우디 건축의 도시로 고속열차 이동.", travelTime: "고속열차 약 40분", gradient: "from-red-500 to-orange-700" },
    ],
    localFood: [
      { name: "수케트 데 페이시", description: "카탈루냐 전통 생선 스튜.", emoji: "🐟" },
      { name: "슈로스", description: "스페인식 츄러스, 초콜릿 소스에 찍어 먹는 간식.", emoji: "🥨" },
    ],
    tips: [
      "바르셀로나에서 고속열차 40분으로 당일치기가 완벽합니다.",
      "에이펠 다리(Pont de les Peixateries Velles)에서 강변 사진이 가장 예쁩니다.",
      "왕좌의 게임 워킹 투어가 팬이라면 필수입니다.",
    ],
  },

  // ===== MADRID & CENTRAL =====
  "spain/madrid-central/madrid": {
    heroGradient: "from-red-600 to-red-900",
    description: "스페인의 수도이자 유럽 최고 수준의 미술관과 밤문화를 자랑하는 도시. 프라도 미술관, 왕궁, 레티로 공원 등 왕실의 유산과 함께 산 미겔 시장의 타파스, 솔 광장의 활기가 넘칩니다.",
    bestTime: "3~5월, 9~11월 (여름은 40°C 이상으로 매우 더움)",
    stayArea: "솔 / 그란 비아 / 라 라티나",
    transport: "메트로, 버스, 세르카니아스 (Abono 교통카드)",
    districts: [
      { name: "솔-그란 비아", nameEn: "Sol-Gran Via", description: "마드리드의 중심부. 푸에르타 델 솔 광장과 그란 비아 대로가 교차.", highlights: ["푸에르타 델 솔", "그란 비아", "마요르 광장"] },
      { name: "마드리드 데 로스 아우스트리아스", nameEn: "Madrid de los Austrias", description: "합스부르크 왕가 시대의 유산이 남아있는 구시가지.", highlights: ["왕궁", "알무데나 대성당", "마요르 광장"] },
      { name: "레티로-프라도", nameEn: "Retiro-Prado", description: "프라도 미술관과 레티로 공원을 중심으로 한 문화 예술 지구.", highlights: ["프라도 미술관", "레이나 소피아", "레티로 공원"] },
    ],
    attractions: [
      { name: "프라도 미술관", nameEn: "Prado Museum", description: "벨라스케스, 고야, 엘 그레코 등 스페인 거장들의 작품을 소장한 세계 3대 미술관.", category: "미술관", tip: "월~토 18:00~20:00 무료 입장 (줄이 길어요)." },
      { name: "왕궁", nameEn: "Royal Palace", description: "유럽 최대 규모의 왕궁으로 3,418개의 방. 현재는 박물관으로 공개.", category: "궁전", tip: "공식 행사 시 폐관하니 사전 확인하세요." },
      { name: "레티로 공원", nameEn: "Retiro Park", description: "마드리드 시민의 안식처. 크리스탈 궁전과 보트 호수가 인기.", category: "공원" },
      { name: "마요르 광장", nameEn: "Plaza Mayor", description: "17세기 합스부르크 왕가가 건설한 마드리드의 대표 광장.", category: "광장" },
      { name: "산 미겔 시장", nameEn: "Mercado de San Miguel", description: "유리 지붕 아래 고급 타파스와 와인을 즐기는 미식 시장.", category: "시장", tip: "점심시간(14:00~16:00)이 가장 활기찹니다." },
    ],
    dayTrips: [
      { name: "톨레도", nameEn: "Toledo", description: "세 종교가 공존했던 '세 문화의 도시', UNESCO 세계유산.", travelTime: "고속열차 약 30분", gradient: "from-amber-600 to-amber-900" },
      { name: "세고비아", nameEn: "Segovia", description: "로마 수도교와 디즈니 성의 모델 알카사르가 있는 도시.", travelTime: "고속열차 약 30분", gradient: "from-stone-500 to-blue-800" },
    ],
    localFood: [
      { name: "코시도 마드릴레뇨", description: "병아리콩과 고기, 채소를 넣은 마드리드 전통 스튜.", emoji: "🍲" },
      { name: "칼라마레스 보카디요", description: "오징어 튀김 샌드위치, 마드리드 대표 길거리 음식.", emoji: "🥖" },
      { name: "초콜라테 콘 추로스", description: "진한 핫초코에 추로스를 찍어 먹는 마드리드의 아침 간식.", emoji: "🍫" },
    ],
    tips: [
      "프라도 미술관은 최소 3시간, 제대로 보려면 반나절이 필요합니다.",
      "여름(7~8월)은 40°C를 넘기므로 시에스타 시간(14:00~17:00)에는 실내에 머무세요.",
      "마드리드의 저녁 식사는 21:00~22:00에 시작하는 것이 현지 문화입니다.",
      "일요일 엘 라스트로 벼룩시장은 꼭 가보세요.",
    ],
  },
  "spain/madrid-central/toledo": {
    heroGradient: "from-amber-600 to-amber-900",
    description: "마드리드 남쪽 30분, 타호 강이 감싸 흐르는 언덕 위의 요새 도시. 기독교·이슬람·유대교 세 문화가 공존했던 흔적이 대성당, 모스크, 시나고그에 고스란히 남아있는 UNESCO 세계유산 도시입니다.",
    bestTime: "3~5월, 10~11월",
    stayArea: "구시가지 (카스코 히스토리코)",
    transport: "도보 (구시가지는 걸어서 이동)",
    districts: [
      { name: "카스코 히스토리코", nameEn: "Casco Historico", description: "소코도베르 광장을 중심으로 대성당, 알카사르가 밀집한 역사 지구.", highlights: ["톨레도 대성당", "알카사르", "소코도베르 광장"] },
    ],
    attractions: [
      { name: "톨레도 대성당", nameEn: "Toledo Cathedral", description: "스페인 고딕 건축의 최고봉. 엘 그레코의 작품을 포함한 방대한 예술 소장품.", category: "성당", tip: "투명인간 성가대석과 보물실을 놓치지 마세요." },
      { name: "알카사르", nameEn: "Alcazar of Toledo", description: "도시 최고점에 위치한 요새로 현재 군사박물관.", category: "요새" },
      { name: "산토 토메 교회", nameEn: "Iglesia de Santo Tome", description: "엘 그레코의 걸작 '오르가스 백작의 매장'이 있는 교회.", category: "교회" },
    ],
    dayTrips: [
      { name: "마드리드", nameEn: "Madrid", description: "스페인의 수도로 돌아가 미술관과 시장 탐방.", travelTime: "고속열차 약 30분", gradient: "from-red-600 to-red-900" },
    ],
    localFood: [
      { name: "카르카무사", description: "톨레도식 돼지고기 토마토 스튜.", emoji: "🍖" },
      { name: "마사판", description: "아몬드와 설탕으로 만든 톨레도 전통 과자, 수녀원에서 제조.", emoji: "🍬" },
    ],
    tips: [
      "마드리드에서 고속열차 30분으로 당일치기가 완벽합니다.",
      "톨레도 팔찌(Pulsera Turística)로 주요 7개 명소 할인 입장 가능.",
      "미라도르 델 바예(Mirador del Valle) 전망대에서 톨레도 전경을 보세요.",
    ],
  },
  "spain/madrid-central/segovia": {
    heroGradient: "from-stone-500 to-blue-800",
    description: "2,000년 된 로마 수도교가 도시 입구에서 맞이하는 카스티야의 보석. 디즈니 성의 모델이 된 알카사르와 고딕 대성당, 그리고 새끼 돼지 통구이(코치니요)로 유명한 미식 도시입니다.",
    bestTime: "3~6월, 9~11월",
    stayArea: "구시가지 (카스코 안티구오)",
    transport: "도보 (구시가지 전체 도보 가능)",
    districts: [
      { name: "구시가지", nameEn: "Casco Antiguo", description: "로마 수도교에서 알카사르까지 이어지는 역사 중심지.", highlights: ["로마 수도교", "마요르 광장", "세고비아 대성당"] },
    ],
    attractions: [
      { name: "세고비아 수도교", nameEn: "Segovia Aqueduct", description: "서기 1세기에 건설된 로마 수도교. 시멘트 없이 화강암 블록만으로 167개 아치 구성.", category: "유적", tip: "수도교 위로 올라가면 시내 전경을 볼 수 있습니다." },
      { name: "알카사르", nameEn: "Alcazar of Segovia", description: "디즈니 백설공주 성의 모델. 절벽 위에 세워진 동화 같은 성.", category: "고성", tip: "탑 꼭대기까지 올라가면 360도 파노라마 뷰!" },
      { name: "세고비아 대성당", nameEn: "Segovia Cathedral", description: "'대성당의 귀부인'이라 불리는 스페인 마지막 고딕 대성당.", category: "성당" },
    ],
    dayTrips: [
      { name: "마드리드", nameEn: "Madrid", description: "스페인의 수도로 미술관과 왕궁 탐방.", travelTime: "고속열차 약 30분", gradient: "from-red-600 to-red-900" },
    ],
    localFood: [
      { name: "코치니요 아사도", description: "새끼 돼지 통구이, 세고비아의 대표 요리. 접시로 자를 만큼 바삭.", emoji: "🐷" },
      { name: "폰체 세고비아노", description: "세고비아 전통 에그노그 스타일 음료.", emoji: "🥛" },
    ],
    tips: [
      "마드리드에서 고속열차 30분, 당일치기 필수 코스입니다.",
      "코치니요는 메손 데 칸디도(Meson de Candido)가 100년 전통 명소.",
      "수도교는 새벽이나 야간 조명 시간대가 가장 아름답습니다.",
    ],
  },

  // ===== ANDALUSIA =====
  "spain/andalusia/seville": {
    heroGradient: "from-orange-500 to-red-700",
    description: "안달루시아의 수도이자 플라멩코의 본고장. 알카사르 궁전, 세비야 대성당, 스페인 광장 등 이슬람과 기독교 문화가 융합된 건축물과 오렌지나무 거리, 타파스 바 문화가 매력적인 도시입니다.",
    bestTime: "3~5월, 10~11월 (여름은 45°C 이상 극한 더위)",
    stayArea: "산타 크루스 / 트리아나 / 센트로",
    transport: "트램, 버스, 메트로 (도보로 충분)",
    districts: [
      { name: "산타 크루스", nameEn: "Santa Cruz", description: "옛 유대인 거리로 좁은 골목과 파티오, 오렌지나무가 어우러진 지구.", highlights: ["알카사르", "세비야 대성당", "히랄다 탑"] },
      { name: "트리아나", nameEn: "Triana", description: "과달키비르 강 건너편의 플라멩코와 도자기(세라믹) 전통 지구.", highlights: ["트리아나 다리", "세라믹 골목", "트리아나 시장"] },
    ],
    attractions: [
      { name: "알카사르", nameEn: "Real Alcazar", description: "무데하르 양식의 왕궁으로 왕좌의 게임 도른 촬영지. 아름다운 정원이 압권.", category: "궁전", tip: "온라인 사전 예약 필수! 월요일 저녁 무료 입장(줄이 길어요)." },
      { name: "세비야 대성당 & 히랄다", nameEn: "Seville Cathedral & Giralda", description: "세계에서 가장 큰 고딕 성당. 히랄다 탑은 옛 미나렛을 개조한 종탑.", category: "성당", tip: "히랄다 탑은 계단이 아닌 경사로여서 올라가기 수월합니다." },
      { name: "스페인 광장", nameEn: "Plaza de Espana", description: "1929년 박람회를 위해 건설된 반원형 광장. 타일 장식과 운하 보트가 인기.", category: "광장", tip: "해질 무렵이 가장 아름답고 무료입니다." },
      { name: "메트로폴 파라솔", nameEn: "Metropol Parasol", description: "세계 최대 목조 구조물로 옥상 전망대에서 세비야 전경 조망.", category: "건축" },
    ],
    dayTrips: [
      { name: "코르도바", nameEn: "Cordoba", description: "메스키타(모스크-대성당)로 유명한 이슬람 문화의 꽃.", travelTime: "고속열차 약 45분", gradient: "from-red-600 to-amber-700" },
    ],
    localFood: [
      { name: "살모레호", description: "코르도바 원조이나 안달루시아 전역에서 즐기는 냉수프. 가스파초보다 진함.", emoji: "🍅" },
      { name: "하몽 이베리코", description: "도토리 먹여 키운 이베리코 돼지의 생햄, 스페인 미식의 정수.", emoji: "🥓" },
      { name: "에스피나카스 콘 가르반소스", description: "시금치와 병아리콩 스튜, 세비야 전통 타파스.", emoji: "🥬" },
    ],
    tips: [
      "알카사르와 대성당은 온라인 예약이 필수입니다.",
      "여름(6~8월)은 45°C 이상이므로 이른 아침과 저녁에 활동하세요.",
      "트리아나 지구의 플라멩코 쇼가 관광지보다 더 진정성 있습니다.",
      "타파스 바 호핑은 현지인처럼 1곳에서 1~2잔만 마시고 이동하세요.",
    ],
  },
  "spain/andalusia/granada": {
    heroGradient: "from-red-700 to-amber-600",
    description: "시에라네바다 산맥을 배경으로 한 알함브라 궁전의 도시. 이슬람 문화의 최고 걸작 알함브라와 알바이신 언덕의 미로 골목, 무료 타파스 문화가 여행자를 매료시킵니다.",
    bestTime: "3~5월, 9~11월",
    stayArea: "알바이신 / 센트로 / 레알레호",
    transport: "도보, 미니버스 (구시가지 경사 많음)",
    districts: [
      { name: "알바이신", nameEn: "Albaicin", description: "UNESCO 세계유산의 무어인 거주지. 하얀 집과 미로 골목, 미라도르 산 니콜라스 전망대.", highlights: ["미라도르 산 니콜라스", "아랍 목욕탕", "카르멘(정원 주택)"] },
      { name: "사크로몬테", nameEn: "Sacromonte", description: "동굴 집에서 펼쳐지는 집시 플라멩코의 본거지.", highlights: ["동굴 플라멩코", "사크로몬테 수도원", "동굴 박물관"] },
    ],
    attractions: [
      { name: "알함브라", nameEn: "Alhambra", description: "이슬람 건축의 최고 걸작으로 나스르 궁전, 헤네랄리페 정원, 알카사바 요새로 구성.", category: "궁전", tip: "최소 2개월 전 온라인 예약 필수! 나스르 궁전은 지정 시간 엄수." },
      { name: "알바이신", nameEn: "Albaicin", description: "알함브라 맞은편 언덕의 무어인 거주지. 미라도르 산 니콜라스에서 알함브라 석양 뷰가 일품.", category: "역사지구", tip: "해질 무렵 미라도르 산 니콜라스에 가면 잊을 수 없는 뷰를 만납니다." },
      { name: "그라나다 대성당", nameEn: "Granada Cathedral", description: "르네상스 양식의 대성당과 인접한 왕실 예배당(카필라 레알).", category: "성당" },
      { name: "사크로몬테 동굴 플라멩코", nameEn: "Sacromonte Flamenco", description: "동굴에서 펼쳐지는 진정한 플라멩코 공연.", category: "공연" },
    ],
    dayTrips: [
      { name: "시에라네바다", nameEn: "Sierra Nevada", description: "유럽 최남단 스키 리조트이자 여름 트레킹 명소.", travelTime: "버스 약 45분", gradient: "from-blue-500 to-white" },
    ],
    localFood: [
      { name: "무료 타파스", description: "음료를 주문하면 타파스가 무료! 그라나다만의 독특한 문화.", emoji: "🍻" },
      { name: "피오노노", description: "산타페 마을 원조의 작은 롤 케이크, 그라나다 대표 디저트.", emoji: "🍰" },
      { name: "토르티야 데 사크로몬테", description: "사크로몬테식 내장 오믈렛, 향토 요리.", emoji: "🥚" },
    ],
    tips: [
      "알함브라 티켓은 2개월 전에 매진되니 여행 확정 즉시 예약하세요.",
      "나스르 궁전은 지정 시간 30분 전부터만 입장 가능합니다.",
      "알바이신은 길이 좁고 경사가 심하니 편한 신발을 신으세요.",
    ],
  },
  "spain/andalusia/cordoba": {
    heroGradient: "from-red-600 to-amber-700",
    description: "이슬람 문화의 꽃이 피었던 안달루시아의 보석. 856개 기둥의 메스키타(모스크-대성당)가 압도적이며, 꽃으로 장식된 파티오와 유대인 거리가 아름다운 UNESCO 세계유산 도시입니다.",
    bestTime: "3~5월 (5월 파티오 축제), 10~11월",
    stayArea: "후데리아 / 센트로",
    transport: "도보 (구시가지 컴팩트)",
    districts: [
      { name: "후데리아", nameEn: "Juderia", description: "옛 유대인 거리로 하얀 벽과 꽃 화분이 아름다운 미로 골목.", highlights: ["메스키타", "꽃의 골목", "시나고그"] },
    ],
    attractions: [
      { name: "메스키타", nameEn: "Mezquita", description: "856개의 이중 아치 기둥이 만드는 숲 같은 공간. 이슬람 모스크 안에 기독교 성당이 공존하는 독특한 건축.", category: "성당/모스크", tip: "월~토 08:30~09:30 무료 입장! 일찍 가세요." },
      { name: "알카사르", nameEn: "Alcazar de los Reyes Cristianos", description: "기독교 왕들의 요새로 아름다운 정원과 모자이크가 볼거리.", category: "궁전" },
      { name: "로마 다리", nameEn: "Roman Bridge", description: "과달키비르 강 위 2,000년 된 로마 시대 다리. 왕좌의 게임 촬영지.", category: "유적" },
    ],
    dayTrips: [
      { name: "세비야", nameEn: "Seville", description: "안달루시아의 수도, 플라멩코와 알카사르의 도시.", travelTime: "고속열차 약 45분", gradient: "from-orange-500 to-red-700" },
    ],
    localFood: [
      { name: "살모레호", description: "토마토와 빵으로 만든 코르도바 원조 냉수프. 하몽과 달걀 토핑.", emoji: "🍅" },
      { name: "플라멩킨", description: "하몽과 치즈를 감싼 돼지고기 튀김 롤, 코르도바 명물.", emoji: "🥩" },
    ],
    tips: [
      "메스키타 무료 입장은 월~토 08:30~09:30, 30분 전에 줄을 서세요.",
      "5월 파티오 축제 기간에는 일반 가정집의 아름다운 파티오를 구경할 수 있습니다.",
      "세비야에서 기차 45분, 당일치기가 완벽합니다.",
    ],
  },
  "spain/andalusia/malaga": {
    heroGradient: "from-blue-400 to-amber-600",
    description: "코스타 델 솔의 관문이자 피카소의 고향. 알카사바와 히브랄파로 성에서 지중해를 내려다보며, 피카소 미술관과 해변 산책로, 활기찬 타파스 바가 매력적인 항구 도시입니다.",
    bestTime: "3~6월, 9~11월 (연중 온화한 기후)",
    stayArea: "센트로 / 말라게타 해변 주변",
    transport: "도보, 버스 (센트로는 도보 가능)",
    districts: [
      { name: "센트로", nameEn: "Centro", description: "대성당, 피카소 미술관, 알카사바가 밀집한 역사 중심지.", highlights: ["알카사바", "피카소 미술관", "말라가 대성당"] },
    ],
    attractions: [
      { name: "알카사바", nameEn: "Alcazaba of Malaga", description: "11세기 무어인이 건설한 요새 궁전. 정원과 성벽에서 항구와 시내 전경.", category: "요새", tip: "히브랄파로 성과 통합 티켓이 경제적입니다." },
      { name: "피카소 미술관", nameEn: "Picasso Museum Malaga", description: "피카소의 고향에 위치한 미술관으로 285점의 작품 소장.", category: "미술관" },
      { name: "히브랄파로 성", nameEn: "Castillo de Gibralfaro", description: "14세기 요새로 말라가 최고의 전망 포인트.", category: "고성" },
    ],
    dayTrips: [
      { name: "네르하", nameEn: "Nerja", description: "'유럽의 발코니'로 불리는 해안 절벽 전망대와 동굴.", travelTime: "버스 약 1시간", gradient: "from-blue-400 to-cyan-600" },
    ],
    localFood: [
      { name: "에스페토스", description: "대나무 꼬치에 꿴 정어리 숯불구이, 말라가 해변 명물.", emoji: "🐟" },
      { name: "프리투라 말라게냐", description: "다양한 해산물 튀김 모듬, 해변 치링기토(포장마차)에서.", emoji: "🦐" },
    ],
    tips: [
      "알카사바+히브랄파로 통합 티켓(€5.50)이 경제적입니다.",
      "해변 치링기토에서 에스페토스를 꼭 맛보세요.",
      "센트로는 도보로 충분하며 반나절이면 주요 명소를 둘러볼 수 있습니다.",
    ],
  },

  // ===== BASQUE & NORTH =====
  "spain/basque-north/san-sebastian": {
    heroGradient: "from-teal-500 to-blue-800",
    description: "인구 대비 미슐랭 스타 밀도 세계 최고의 미식 도시. 라 콘차 해변의 완벽한 곡선, 구시가지(파르테 비에하)의 핀초스 바, 산 세바스티안 국제 영화제로 유명합니다.",
    bestTime: "6~9월 (7월 재즈 페스티벌, 9월 영화제)",
    stayArea: "파르테 비에하 / 센트로",
    transport: "도보, 버스 (시내 컴팩트)",
    districts: [
      { name: "파르테 비에하", nameEn: "Parte Vieja", description: "핀초스 바가 밀집한 구시가지. 미식 투어의 시작점.", highlights: ["헌법 광장", "산 비센테 교회", "핀초스 바 거리"] },
    ],
    attractions: [
      { name: "라 콘차 해변", nameEn: "La Concha Beach", description: "유럽에서 가장 아름다운 도시 해변 중 하나. 완벽한 조개 모양 만.", category: "해변", tip: "몬테 우르굴 또는 몬테 이겔도에서 내려다보는 뷰가 최고입니다." },
      { name: "몬테 이겔도", nameEn: "Monte Igueldo", description: "푸니쿨라를 타고 올라가면 라 콘차 만 전경이 펼쳐지는 전망대.", category: "전망대" },
      { name: "산 텔모 박물관", nameEn: "San Telmo Museum", description: "바스크 문화와 역사를 소개하는 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "빌바오", nameEn: "Bilbao", description: "구겐하임 미술관의 도시로 버스 이동.", travelTime: "버스 약 1.5시간", gradient: "from-gray-500 to-gray-800" },
    ],
    localFood: [
      { name: "핀초스", description: "바스크식 타파스, 빵 위에 다양한 토핑. 바마다 1~2개씩 이동하며 즐김.", emoji: "🍢" },
      { name: "체울레톤", description: "바스크산 소고기 숯불 스테이크, 부드러운 지방 마블링이 일품.", emoji: "🥩" },
      { name: "차콜리", description: "바스크 지방의 미세 발포 화이트 와인, 높이 따라야 제맛.", emoji: "🍷" },
    ],
    tips: [
      "핀초스 바 호핑은 파르테 비에하에서 시작하세요. 한 곳에서 1~2개만!",
      "라 콘차 해변 산책로는 일몰 시간에 가장 아름답습니다.",
      "예약이 필요한 미슐랭 레스토랑은 최소 1개월 전에 예약하세요.",
    ],
  },
  "spain/basque-north/bilbao": {
    heroGradient: "from-gray-500 to-gray-800",
    description: "구겐하임 미술관 하나로 도시 전체가 변모한 '빌바오 효과'의 주인공. 프랭크 게리의 티타늄 건축물과 함께 구시가지 카스코 비에호의 핀초스, 네르비온 강변 산책이 매력적입니다.",
    bestTime: "5~9월",
    stayArea: "카스코 비에호 / 아반도",
    transport: "메트로, 트램, 버스",
    districts: [
      { name: "카스코 비에호", nameEn: "Casco Viejo", description: "7개의 골목(시에테 칼레스)으로 이루어진 구시가지. 핀초스 바와 리베라 시장.", highlights: ["리베라 시장", "산티아고 대성당", "누에바 광장"] },
      { name: "아반도이바라", nameEn: "Abando-Indautxu", description: "구겐하임 미술관과 현대적 건축이 있는 신시가지.", highlights: ["구겐하임 미술관", "이비르드로라 타워", "도냐 카시르다 공원"] },
    ],
    attractions: [
      { name: "구겐하임 미술관", nameEn: "Guggenheim Museum Bilbao", description: "프랭크 게리 설계의 티타늄 건축 걸작. 현대 미술 전시와 건물 자체가 예술.", category: "미술관", tip: "외부의 퍼피(꽃 강아지)와 거미 조각 마만은 무료 관람 가능." },
      { name: "리베라 시장", nameEn: "Mercado de la Ribera", description: "유럽 최대 실내 시장으로 바스크 식재료와 핀초스 바.", category: "시장" },
      { name: "비스카야 다리", nameEn: "Vizcaya Bridge", description: "세계 최초의 운반교(1893). UNESCO 세계유산.", category: "유적", tip: "곤돌라(도보 탑승)와 상부 전망대 두 가지 체험 가능." },
    ],
    dayTrips: [
      { name: "산 세바스티안", nameEn: "San Sebastian", description: "미식의 도시로 핀초스 바 호핑.", travelTime: "버스 약 1.5시간", gradient: "from-teal-500 to-blue-800" },
    ],
    localFood: [
      { name: "바칼라오 알 필필", description: "올리브오일 소스의 대구 요리, 바스크 전통 레시피.", emoji: "🐟" },
      { name: "마르미타코", description: "참치와 감자 스튜, 바스크 어부의 전통 요리.", emoji: "🍲" },
    ],
    tips: [
      "구겐하임 미술관은 화요일 무료(비수기), 월요일 휴관입니다.",
      "카스코 비에호의 핀초스 바는 목~토 저녁이 가장 활기찹니다.",
      "아르티산데 트램으로 구겐하임까지 편하게 이동 가능합니다.",
    ],
  },

  // ===== VALENCIA & EAST =====
  "spain/valencia-east/valencia": {
    heroGradient: "from-orange-400 to-blue-600",
    description: "빠에야의 원조 도시이자 미래지향적 건축의 도시. 예술과학도시(Ciudad de las Artes y las Ciencias)의 초현대식 건축과 구시가지의 실크 거래소, 중앙시장이 과거와 미래를 잇습니다.",
    bestTime: "3~5월 (3월 라스 파야스 축제), 9~11월",
    stayArea: "시우타트 벨라 / 루사파",
    transport: "메트로, 버스, 트램, 발렌비시(공유자전거)",
    districts: [
      { name: "시우타트 벨라", nameEn: "Ciutat Vella", description: "대성당, 실크 거래소, 중앙시장이 있는 역사 중심지.", highlights: ["발렌시아 대성당", "실크 거래소", "중앙시장"] },
      { name: "투리아 정원", nameEn: "Turia Gardens", description: "옛 강바닥을 공원으로 조성한 9km 녹지대. 예술과학도시까지 이어짐.", highlights: ["예술과학도시", "걸리버 놀이터", "왕립 정원"] },
    ],
    attractions: [
      { name: "예술과학도시", nameEn: "City of Arts and Sciences", description: "칼라트라바 설계의 미래지향적 건축 단지. 수족관, 과학관, 오페라하우스로 구성.", category: "건축", tip: "오세아노그라픽(수족관) 단일 입장 또는 통합 티켓 선택 가능." },
      { name: "중앙시장", nameEn: "Central Market", description: "유럽 최대 규모의 재래시장. 모더니즘 건축 안에 1,000개 이상의 가판대.", category: "시장", tip: "오전 중 방문이 가장 활기차고 신선합니다." },
      { name: "실크 거래소", nameEn: "La Lonja de la Seda", description: "15세기 고딕 양식의 실크 교역소. UNESCO 세계유산.", category: "유적" },
      { name: "발렌시아 대성당", nameEn: "Valencia Cathedral", description: "성배(산토 칼리스)가 보관된 것으로 알려진 대성당. 미겔레테 탑 전망.", category: "성당" },
    ],
    dayTrips: [
      { name: "알부페라", nameEn: "Albufera", description: "발렌시아 빠에야의 원산지, 석양 보트 투어가 유명한 습지.", travelTime: "버스 약 30분", gradient: "from-amber-400 to-orange-600" },
    ],
    localFood: [
      { name: "빠에야 발렌시아나", description: "토끼, 닭, 채소로 만드는 정통 발렌시아 빠에야. 해산물이 아닌 게 원조!", emoji: "🥘" },
      { name: "오르차타", description: "타이거넛으로 만든 달콤한 음료, 파르톤(빵)과 함께.", emoji: "🥛" },
      { name: "피데우아", description: "파스타 면으로 만든 해산물 빠에야 변형 요리.", emoji: "🍝" },
    ],
    tips: [
      "3월 라스 파야스 축제는 발렌시아 최대 행사로 숙소를 미리 예약하세요.",
      "정통 빠에야는 해산물이 아닌 토끼+닭+채소 버전이 원조입니다.",
      "발렌비시(공유자전거)로 투리아 정원을 달리는 코스를 추천합니다.",
      "예술과학도시는 야간 조명이 켜진 후가 가장 포토제닉합니다.",
    ],
  },
};

export const spainAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BARCELONA =====
  "spain/barcelona-catalonia/barcelona/sagrada-familia": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "안토니 가우디의 미완성 걸작이자 바르셀로나의 상징. 1882년 착공하여 140년 넘게 건설 중이며, 자연에서 영감을 받은 나무 기둥 형태의 내부와 스테인드글라스의 빛의 향연이 압도적입니다.",
    history: "1882년 건축가 프란시스코 데 비야르가 착공했으나 이듬해 가우디가 인수하여 생애 마지막 43년을 바쳤습니다. 가우디 사후에도 건축이 이어져 2026년 완공을 목표로 하고 있으며, 2005년 UNESCO 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "월~토 09:00~20:00, 일 10:30~20:00 (시즌별 변동)",
      admission: "일반 €26, 타워 포함 €36, 가이드 투어 €40",
      address: "Carrer de Mallorca 401, 08013 Barcelona",
      website: "https://sagradafamilia.org",
    },
    highlights: [
      "나무 형태의 기둥이 만드는 숲 같은 내부 공간",
      "시간대별로 변하는 스테인드글라스의 빛의 향연",
      "탄생의 파사드 vs 수난의 파사드 대비",
      "타워에서 바르셀로나 시내와 지중해 조망",
    ],
    nearbyAttractions: ["산 파우 병원", "아비뇽 거리", "에이샴플라 모더니즘 건축"],
    photoTips: "오전에는 탄생의 파사드(동쪽), 오후에는 수난의 파사드(서쪽)에 빛이 들어 촬영에 좋습니다. 내부 스테인드글라스는 오전 9~10시에 동쪽 빛이 가장 아름답습니다.",
    tips: [
      "최소 2주 전 온라인 예약 필수! 성수기에는 한 달 전에 매진됩니다.",
      "오전 첫 타임(09:00)이 인파가 가장 적습니다.",
      "타워는 탄생의 파사드 쪽이 더 인기 있으나, 수난의 파사드 쪽 뷰도 훌륭합니다.",
      "내부 입장 전 외부 파사드를 충분히 감상하세요.",
    ],
  },
  "spain/barcelona-catalonia/barcelona/park-guell": {
    heroGradient: "from-green-400 to-teal-700",
    description: "가우디가 설계한 바르셀로나 언덕 위의 공원으로 모자이크 도마뱀 분수, 물결치는 벤치의 테라스, 과자집 같은 건물이 동화 속 세계를 만들어냅니다. 바르셀로나 시내와 지중해가 한눈에 들어오는 전망도 일품.",
    history: "1900~1914년 에우세비 구엘의 의뢰로 가우디가 설계한 주거 단지 프로젝트였으나 상업적으로 실패하여 2채만 건설되었습니다. 1926년 공원으로 개방되었고 1984년 UNESCO 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "1~2월 09:30~17:30, 3~10월 09:30~19:30 (시즌별 변동)",
      admission: "일반 €10, 온라인 사전구매 권장",
      address: "Carrer d'Olot, 08024 Barcelona",
      website: "https://parkguell.barcelona",
    },
    highlights: [
      "모자이크 도마뱀(엘 드락) 분수",
      "86개 기둥의 다주실(히포스틸 홀)",
      "트렌카디스 모자이크 물결 벤치 테라스",
      "바르셀로나 시내와 지중해 파노라마 전망",
    ],
    nearbyAttractions: ["가우디 하우스 박물관", "카르멜 벙커 전망대", "발 데브론"],
    photoTips: "도마뱀 분수는 오전 첫 타임에 사람 없이 촬영 가능합니다. 물결 벤치 테라스에서 바르셀로나 시내를 배경으로 찍으면 최고의 사진.",
    tips: [
      "오전 첫 타임(08:00 또는 09:30) 입장이 인파 회피에 최적입니다.",
      "모뉴멘탈 존만 유료이며, 나머지 공원 구역은 무료입니다.",
      "경사가 있으니 편한 신발을 신으세요.",
      "24번 버스 또는 메트로 L3 발카르카역에서 접근 가능합니다.",
    ],
  },
  "spain/barcelona-catalonia/barcelona/la-rambla": {
    heroGradient: "from-green-500 to-yellow-600",
    description: "카탈루냐 광장에서 콜럼버스 기념탑까지 이어지는 1.2km의 보행자 거리. 거리 예술가, 꽃 가판대, 보케리아 시장, 리세우 극장 등이 줄지어 있는 바르셀로나에서 가장 활기찬 거리입니다.",
    history: "18세기까지 성벽 밖의 하천이었으나 매립 후 산책로로 조성되었습니다. '람블라'는 아랍어 '모래 하천'에서 유래했으며, 현재는 바르셀로나의 상징적 거리로 자리잡았습니다.",
    visitInfo: {
      hours: "24시간 개방 (거리 자체)",
      admission: "무료",
      address: "La Rambla, 08002 Barcelona",
    },
    highlights: [
      "카탈루냐 광장에서 항구까지 이어지는 산책",
      "보케리아 시장 (산 호세프 시장)",
      "리세우 극장 (오페라 하우스)",
      "콜럼버스 기념탑과 항구 전망",
    ],
    nearbyAttractions: ["보케리아 시장", "고딕 지구", "레이알 광장", "구엘 궁전"],
    photoTips: "오전 이른 시간에 보행자 없는 거리를 촬영할 수 있습니다. 카탈루냐 광장 방향에서 항구 쪽을 내려다보는 앵글이 좋습니다.",
    tips: [
      "소매치기가 매우 많으니 귀중품은 앞주머니에, 가방은 앞으로 매세요.",
      "람블라스 거리 레스토랑은 관광객 가격이니 한 블록 안쪽이 더 저렴합니다.",
      "보케리아 시장은 월요일 휴무인 가판대가 많으니 화~토 방문 추천.",
      "야간에도 활기차지만 늦은 밤에는 주의가 필요합니다.",
    ],
  },
  "spain/barcelona-catalonia/barcelona/gothic-quarter": {
    heroGradient: "from-stone-600 to-stone-900",
    description: "로마 시대부터 2,000년 역사가 켜켜이 쌓인 바르셀로나의 역사적 심장부. 좁은 미로 골목 사이로 바르셀로나 대성당, 왕의 광장, 중세 건물들이 숨어 있으며, 피카소와 미로가 거닐었던 예술의 거리이기도 합니다.",
    history: "로마인이 바르시노(Barcino)로 건설한 도시의 원점으로, 로마 성벽과 신전 기둥이 남아있습니다. 중세에는 아라곤 왕국의 수도였으며, 14~15세기 고딕 건축이 밀집해 '고딕 지구'라 불립니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 거리)",
      admission: "무료 (개별 명소 유료)",
      address: "Barri Gotic, 08002 Barcelona",
    },
    highlights: [
      "바르셀로나 대성당과 거위 회랑",
      "왕의 광장(Placa del Rei)과 역사 박물관",
      "비스베 다리(Pont del Bisbe)의 네오고딕 아치",
      "레이알 광장의 가우디 가로등",
    ],
    nearbyAttractions: ["람블라스 거리", "보케리아 시장", "피카소 미술관", "산타 마리아 델 마르 성당"],
    photoTips: "비스베 다리는 좁은 골목에서 아치를 올려다보는 앵글이 상징적입니다. 오전 이른 시간 사람이 적을 때가 촬영 적기.",
    tips: [
      "미로 같은 골목이 매력이지만 쉽게 길을 잃을 수 있으니 지도 앱을 활용하세요.",
      "바르셀로나 대성당 회랑의 13마리 거위를 놓치지 마세요.",
      "소매치기 주의! 좁은 골목에서 특히 조심하세요.",
      "무료 워킹 투어를 활용하면 숨겨진 명소를 발견할 수 있습니다.",
    ],
  },
  "spain/barcelona-catalonia/barcelona/casa-batllo": {
    heroGradient: "from-blue-400 to-purple-700",
    description: "가우디의 모더니즘 건축 걸작으로 '뼈의 집'이라는 별명을 가진 주거 건물. 용의 등뼈 같은 지붕, 해골 모양의 발코니, 바다를 연상시키는 내부 장식이 가우디의 천재성을 보여줍니다.",
    history: "1904~1906년 섬유 사업가 호세프 바트요의 의뢰로 기존 건물을 리모델링했습니다. 가우디는 성 조르디(카탈루냐 수호성인)와 용의 전설에서 영감을 받아 설계했으며, 2005년 UNESCO 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "매일 09:00~21:00 (시즌별 변동)",
      admission: "일반 €35, 골드 €45 (패스트트랙), 야간 이벤트 €39~",
      address: "Passeig de Gracia 43, 08007 Barcelona",
      website: "https://www.casabatllo.es",
    },
    highlights: [
      "용의 등뼈 같은 모자이크 지붕",
      "해골과 뼈를 연상시키는 파사드와 발코니",
      "바다를 연상시키는 파란색 타일 계단실",
      "증강현실(AR) 가이드로 가우디의 세계 체험",
    ],
    nearbyAttractions: ["카사 밀라(라 페드레라)", "카사 아마트예르", "카탈루냐 광장", "그라시아 거리"],
    photoTips: "건물 전체를 담으려면 길 건너편에서 촬영하세요. 내부 계단실의 파란 타일 그라데이션이 포토제닉합니다.",
    tips: [
      "온라인 사전 예약이 필수이며, 첫 타임이 가장 여유롭습니다.",
      "AR 가이드가 포함되어 있어 가우디의 영감을 실감나게 체험 가능합니다.",
      "바로 옆 카사 아마트예르와 함께 '불화의 블록'을 구경하세요.",
      "야간 이벤트는 옥상에서 칵테일과 라이브 음악을 즐길 수 있습니다.",
    ],
  },

  // ===== MADRID =====
  "spain/madrid-central/madrid/prado-museum": {
    heroGradient: "from-red-700 to-red-900",
    description: "벨라스케스, 고야, 엘 그레코, 보스 등 유럽 거장들의 작품 8,000점 이상을 소장한 세계 3대 미술관. 특히 벨라스케스의 '시녀들(라스 메니나스)'과 고야의 '검은 그림' 시리즈는 반드시 감상해야 할 걸작입니다.",
    history: "1819년 페르난도 7세가 왕실 컬렉션을 공개하기 위해 개관했습니다. 카를로스 3세가 자연과학 박물관으로 설계했던 건물을 미술관으로 용도 변경하였으며, 200년간 스페인 왕실의 수집품을 기반으로 세계적 미술관이 되었습니다.",
    visitInfo: {
      hours: "월~토 10:00~20:00, 일·공휴일 10:00~19:00",
      admission: "일반 €15, 무료 입장: 월~토 18:00~20:00, 일 17:00~19:00",
      address: "Calle de Ruiz de Alarcon 23, 28014 Madrid",
      website: "https://www.museodelprado.es",
    },
    highlights: [
      "벨라스케스 '시녀들(라스 메니나스)' - 서양 미술사 최고 걸작 중 하나",
      "고야 '검은 그림' 시리즈와 '1808년 5월 3일'",
      "보스 '쾌락의 정원(세속적 환락의 정원)'",
      "엘 그레코 '삼위일체' 및 종교화 컬렉션",
    ],
    nearbyAttractions: ["레이나 소피아 미술관", "레티로 공원", "티센-보르네미사 미술관", "왕립 식물원"],
    photoTips: "내부 촬영은 제한적이므로 건물 외관과 헤로니모스 입구의 확장관을 촬영하세요. 벨라스케스 동상 앞이 좋은 포토 스팟.",
    tips: [
      "월~토 18:00~20:00 무료 입장이지만 줄이 매우 기니 일찍 가세요.",
      "최소 3시간, 제대로 감상하려면 반나절을 잡으세요.",
      "'라스 메니나스'는 12번방, '쾌락의 정원'은 56A방에 있습니다.",
      "오디오 가이드(€6)가 한국어를 지원합니다.",
    ],
  },
  "spain/madrid-central/madrid/royal-palace": {
    heroGradient: "from-amber-400 to-amber-800",
    description: "유럽 최대 규모의 왕궁으로 3,418개의 방을 보유. 현재 국왕은 거주하지 않으며 공식 행사용으로만 사용됩니다. 왕좌의 방, 거울의 방, 스트라디바리 바이올린 컬렉션 등 화려한 왕실 내부가 인상적입니다.",
    history: "1738~1764년 이탈리아 건축가 사케티와 사바티니의 설계로 건설되었습니다. 이전 합스부르크 왕조의 알카사르가 1734년 화재로 소실된 자리에 세워졌으며, 카를로스 3세 때부터 왕실 거주지로 사용되었습니다.",
    visitInfo: {
      hours: "10~3월: 월~토 10:00~18:00, 일 10:00~16:00 / 4~9월: 월~토 10:00~19:00, 일 10:00~16:00",
      admission: "일반 €12, 가이드 투어 €16",
      address: "Calle de Bailen s/n, 28071 Madrid",
      website: "https://www.patrimonionacional.es",
    },
    highlights: [
      "왕좌의 방 - 황금과 벨벳으로 장식된 국왕의 공식 접견실",
      "가스파리니의 방 - 로코코 장식의 극치",
      "왕실 약국과 무기고",
      "사바티니 정원과 캄포 델 모로 정원",
    ],
    nearbyAttractions: ["알무데나 대성당", "오리엔테 광장", "스페인 극장", "마요르 광장"],
    photoTips: "오리엔테 광장에서 궁전 정면을 담는 것이 가장 좋습니다. 석양 시간에 궁전이 황금빛으로 물듭니다.",
    tips: [
      "공식 행사 시 폐관하니 방문 전 홈페이지를 확인하세요.",
      "무기고와 약국은 별도 공간이니 놓치지 마세요.",
      "월~목 16:00~18:00(10~3월) / 18:00~19:00(4~9월) EU시민 무료.",
      "오디오 가이드(€4)로 각 방의 역사를 들으며 관람하세요.",
    ],
  },
  "spain/madrid-central/madrid/retiro-park": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "마드리드 시민의 안식처이자 125헥타르 규모의 왕실 정원. 크리스탈 궁전에서의 예술 전시, 레티로 호수에서의 보트 타기, 장미 정원의 산책이 도시의 번잡함을 잊게 해줍니다.",
    history: "17세기 펠리페 4세가 왕실 전용 정원으로 조성했으며, 1868년 이사벨 2세 퇴위 이후 시민에게 개방되었습니다. 2021년 프라도 대로와 함께 UNESCO 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "4~9월 06:00~00:00, 10~3월 06:00~22:00",
      admission: "무료",
      address: "Plaza de la Independencia 7, 28001 Madrid",
    },
    highlights: [
      "레티로 호수에서 노 젓는 보트 체험",
      "크리스탈 궁전 (팔라시오 데 크리스탈) - 유리 건축의 예술 전시",
      "벨라스케스 궁전 현대미술 전시 (무료)",
      "타락한 천사 동상 - 세계에서 유일한 악마 조각상",
    ],
    nearbyAttractions: ["프라도 미술관", "레이나 소피아 미술관", "왕립 식물원", "시벨레스 광장"],
    photoTips: "크리스탈 궁전은 내부에서 유리를 통해 들어오는 빛이 아름답습니다. 레티로 호수에서 알폰소 12세 기념비를 배경으로 보트 사진이 인기.",
    tips: [
      "보트는 주말에 줄이 기니 평일 방문을 추천합니다.",
      "크리스탈 궁전과 벨라스케스 궁전의 무료 전시를 놓치지 마세요.",
      "일요일 오전에는 엘 라스트로 벼룩시장 후 산책 코스로 좋습니다.",
      "공원이 넓으니 입구를 정해놓고 동선을 짜세요.",
    ],
  },
  "spain/madrid-central/madrid/plaza-mayor": {
    heroGradient: "from-red-600 to-amber-700",
    description: "17세기 합스부르크 왕가가 건설한 마드리드의 대표 광장. 129m x 94m 직사각형 광장을 둘러싼 237개 발코니의 통일된 건축미가 인상적이며, 펠리페 3세 기마상이 중앙에 서있습니다.",
    history: "1619년 펠리페 3세 시절 완공된 후 투우, 종교재판, 왕실 행사, 축제의 무대였습니다. 세 차례 화재 후 재건되었으며, 현재의 모습은 1790년 후안 데 비야누에바의 설계로 복원된 것입니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Plaza Mayor, 28012 Madrid",
    },
    highlights: [
      "237개 발코니와 통일된 합스부르크 건축미",
      "펠리페 3세 기마 동상",
      "카사 데 라 파나데리아의 프레스코 벽화",
      "아르코 데 쿠칠레로스(칼 만드는 사람들의 아치)",
    ],
    nearbyAttractions: ["산 미겔 시장", "푸에르타 델 솔", "산 히네스 추레리아", "왕궁"],
    photoTips: "광장 전체를 담으려면 코너에서 대각선으로 촬영하세요. 야간 조명 아래가 가장 분위기 있습니다.",
    tips: [
      "광장 내 레스토랑은 관광객 가격이니 감상만 하고 산 미겔 시장으로 이동하세요.",
      "12월 크리스마스 마켓이 유명합니다.",
      "아르코 데 쿠칠레로스 아래 라틴 거리로 내려가면 현지인 타파스 바가 많습니다.",
      "일요일 오전에는 우표·동전 수집가 시장이 열립니다.",
    ],
  },

  // ===== SEVILLE =====
  "spain/andalusia/seville/real-alcazar": {
    heroGradient: "from-orange-500 to-amber-700",
    description: "무데하르 양식의 걸작이자 현재까지 스페인 왕실이 세비야 방문 시 사용하는 현역 왕궁. 이슬람 장인이 만든 정교한 아라베스크 장식, 아름다운 정원, 왕좌의 게임 촬영지로도 유명합니다.",
    history: "913년 무어인 통치자가 요새를 건설한 것이 시작이며, 1364년 페드로 1세가 이슬람 장인을 초청하여 무데하르 양식의 궁전을 증축했습니다. 이후 카를로스 5세가 르네상스 양식을 추가하여 다양한 건축 양식이 공존합니다.",
    visitInfo: {
      hours: "4~9월: 09:30~19:00, 10~3월: 09:30~17:00",
      admission: "일반 €14, 위층(쿠아르토 레알 알토) 추가 €6",
      address: "Patio de Banderas s/n, 41004 Sevilla",
      website: "https://www.alcazarsevilla.org",
    },
    highlights: [
      "대사의 방(Salon de Embajadores) - 황금 돔의 무데하르 걸작",
      "소녀들의 파티오(Patio de las Doncellas)",
      "수은 정원(Jardin de Mercurio)과 영국 정원",
      "왕좌의 게임 '도른' 촬영 장소",
    ],
    nearbyAttractions: ["세비야 대성당", "히랄다 탑", "산타 크루스 거리", "인디아스 고문서관"],
    photoTips: "소녀들의 파티오에서 물에 비치는 반영 사진이 상징적입니다. 정원의 공작새도 좋은 피사체.",
    tips: [
      "온라인 사전 예약 필수! 현장 매진이 잦습니다.",
      "오전 첫 타임 입장이 인파를 피하는 최선의 방법입니다.",
      "위층(쿠아르토 레알 알토)은 별도 티켓이며, 가이드 투어로만 관람 가능합니다.",
      "정원만 산책해도 1시간 이상 소요되니 충분한 시간을 확보하세요.",
    ],
  },
  "spain/andalusia/seville/seville-cathedral-giralda": {
    heroGradient: "from-amber-600 to-red-700",
    description: "세계에서 가장 큰 고딕 성당이자 콜럼버스의 묘가 있는 세비야의 상징. 히랄다 탑은 12세기 알모아드 왕조의 미나렛을 개조한 종탑으로, 35개의 경사로를 올라가면 세비야 전경이 펼쳐집니다.",
    history: "1401~1507년 옛 이슬람 모스크를 허물고 건설되었습니다. '후세 사람들이 우리를 미쳤다고 할 만큼 거대한 성당을 짓자'는 모토로 시작되었으며, 히랄다 탑은 1198년 모스크의 미나렛으로 건설된 것을 보존·개조했습니다.",
    visitInfo: {
      hours: "월 11:00~15:30, 화~토 11:00~17:00, 일 14:30~18:00 (시즌별 변동)",
      admission: "일반 €12 (히랄다 탑 포함)",
      address: "Avenida de la Constitucion s/n, 41004 Sevilla",
      website: "https://www.catedraldesevilla.es",
    },
    highlights: [
      "히랄다 탑 꼭대기에서 세비야 360도 전망",
      "콜럼버스의 묘 - 4명의 왕이 관을 메고 있는 조각상",
      "주제단의 황금 제단화(레타블로 마요르)",
      "오렌지 나무 파티오(Patio de los Naranjos)",
    ],
    nearbyAttractions: ["알카사르", "인디아스 고문서관", "산타 크루스 거리", "마요르 광장"],
    photoTips: "히랄다 탑은 오렌지 나무 파티오에서 올려다보는 앵글이 클래식합니다. 탑 위에서 알카사르 정원을 내려다보는 사진도 좋습니다.",
    tips: [
      "히랄다 탑은 계단이 아닌 경사로여서 올라가기 수월합니다.",
      "월요일은 오후만 개방하니 일정 계획에 주의하세요.",
      "알카사르와 통합 방문하려면 오전에 성당, 오후에 알카사르 순서가 효율적.",
      "내부가 매우 넓으니 최소 1.5시간을 잡으세요.",
    ],
  },
  "spain/andalusia/seville/plaza-de-espana": {
    heroGradient: "from-blue-400 to-amber-600",
    description: "1929년 이베로-아메리카 박람회를 위해 건설된 반원형 대광장. 48개 스페인 지방을 타일로 표현한 알코브, 운하와 다리, 르네상스-무데하르 혼합 건축이 어우러진 세비야 최고의 포토 스팟입니다.",
    history: "건축가 아니발 곤살레스가 설계하여 1914~1928년에 건설되었습니다. 스타워즈 에피소드 2의 나부 왕궁 장면이 이곳에서 촬영되었으며, 현재 일부는 정부 청사로 사용됩니다.",
    visitInfo: {
      hours: "24시간 개방 (야외)",
      admission: "무료",
      address: "Av. de Isabel la Catolica, 41004 Sevilla",
    },
    highlights: [
      "48개 스페인 지방을 나타내는 타일 장식 알코브",
      "운하에서 로잉 보트 타기 (€6/35분)",
      "반원형 건축과 중앙 분수의 조화",
      "마리아 루이사 공원과 연결된 산책 코스",
    ],
    nearbyAttractions: ["마리아 루이사 공원", "세비야 대학교", "산 텔모 궁전", "메트로폴 파라솔"],
    photoTips: "해질 무렵 황금빛이 건물에 비칠 때가 최고의 촬영 시간입니다. 다리 위에서 운하와 건물을 함께 담는 구도가 인기.",
    tips: [
      "해질 무렵(golden hour)이 가장 아름다우며 무료입니다.",
      "보트는 현장에서 바로 탈 수 있으며, 낮은 다리 아래를 지날 때 고개를 숙이세요.",
      "자신의 출신 지방(한국 관광객은 관심 있는 지방) 타일을 찾아보는 재미가 있습니다.",
      "오전 이른 시간에 방문하면 사진 찍기 좋은 한적한 광장을 만날 수 있습니다.",
    ],
  },

  // ===== GRANADA =====
  "spain/andalusia/granada/alhambra": {
    heroGradient: "from-red-700 to-amber-600",
    description: "이슬람 건축의 최고 걸작이자 스페인에서 가장 많이 방문하는 기념물. 나스르 궁전의 정교한 아라베스크 장식, 헤네랄리페 정원의 물과 꽃, 알카사바 요새의 위엄이 시에라네바다를 배경으로 펼쳐집니다.",
    history: "9세기 요새로 시작되어 13~14세기 나스르 왕조가 궁전 단지로 확장했습니다. 1492년 기독교 세력의 레콩키스타로 함락되었으며, 이후 카를로스 5세가 르네상스 궁전을 추가 건설했습니다. 1984년 UNESCO 세계유산에 등재.",
    visitInfo: {
      hours: "4~10월: 08:30~20:00 (야간 22:00~23:30), 11~3월: 08:30~18:00 (야간 20:00~21:30)",
      admission: "일반 €14, 정원만 €7, 야간 나스르 궁전 €8",
      address: "Calle Real de la Alhambra s/n, 18009 Granada",
      website: "https://www.alhambra-patronato.es",
    },
    highlights: [
      "나스르 궁전 - 사자의 중정과 아라베스크 천장 장식의 극치",
      "헤네랄리페 정원 - 물과 꽃이 어우러진 이슬람 낙원",
      "알카사바 - 알함브라에서 가장 오래된 요새, 전망탑 비가",
      "카를로스 5세 궁전 - 르네상스 원형 중정",
    ],
    nearbyAttractions: ["알바이신", "미라도르 산 니콜라스", "사크로몬테", "그라나다 대성당"],
    photoTips: "나스르 궁전 사자의 중정은 오전 빛이 가장 아름답습니다. 알바이신의 미라도르 산 니콜라스에서 석양에 물든 알함브라 전경이 최고의 사진.",
    tips: [
      "최소 2개월 전 온라인 예약 필수! 당일 티켓은 거의 없습니다.",
      "나스르 궁전 입장 시간은 티켓에 명시되어 있으며 30분 지나면 입장 불가.",
      "전체 관람에 최소 3시간, 여유롭게 4~5시간 필요합니다.",
      "오전 첫 타임(08:30)이 빛도 좋고 인파도 적어 최적입니다.",
    ],
  },
  "spain/andalusia/granada/albaicin": {
    heroGradient: "from-white to-amber-500",
    description: "알함브라 맞은편 언덕의 무어인 거주지로 UNESCO 세계유산. 하얀 집과 미로 같은 골목, 카르멘(정원이 있는 주택), 아랍 찻집이 이국적인 분위기를 자아내며, 미라도르 산 니콜라스에서의 알함브라 석양은 그라나다 여행의 하이라이트.",
    history: "무어인 통치 시대 그라나다의 주요 주거 지역으로 좁은 골목과 카르멘 양식의 주택이 당시 모습을 간직하고 있습니다. 1994년 알함브라와 함께 UNESCO 세계유산으로 확장 등재되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 거리)",
      admission: "무료",
      address: "Barrio del Albaicin, 18010 Granada",
    },
    highlights: [
      "미라도르 산 니콜라스에서 알함브라 석양 뷰",
      "미로 같은 하얀 골목길 산책",
      "아랍 찻집(테테리아)에서 민트차 한 잔",
      "카르멘(정원 주택) 레스토랑에서 알함브라 뷰 식사",
    ],
    nearbyAttractions: ["알함브라", "사크로몬테", "그라나다 대성당", "누에바 광장"],
    photoTips: "미라도르 산 니콜라스에서 일몰 30분 전부터 자리를 잡으세요. 시에라네바다 산맥을 배경으로 알함브라가 황금빛으로 물드는 순간이 최고입니다.",
    tips: [
      "골목이 매우 좁고 경사가 심하니 편한 신발은 필수입니다.",
      "미라도르 산 니콜라스는 일몰 1시간 전부터 매우 붐빕니다.",
      "소매치기 주의! 인적 드문 골목에서는 조심하세요.",
      "C1 미니버스로 알바이신 꼭대기까지 올라간 후 걸어 내려오는 코스 추천.",
    ],
  },

  // ===== CORDOBA =====
  "spain/andalusia/cordoba/mezquita": {
    heroGradient: "from-red-600 to-amber-700",
    description: "856개의 이중 아치 기둥이 끝없이 이어지는 숲 같은 공간. 이슬람 모스크 위에 기독교 대성당이 건설된 세계 유일의 건축으로, 두 종교의 공존이 만들어낸 신비로운 분위기가 압도적입니다.",
    history: "785년 압드 알라흐만 1세가 서고트 교회를 허물고 모스크를 건설했습니다. 이후 3차례 확장되어 당시 세계 최대 모스크가 되었으며, 1236년 레콩키스타 후 가운데에 기독교 대성당을 건설(16세기)하여 현재의 독특한 형태가 되었습니다.",
    visitInfo: {
      hours: "월~토 10:00~19:00, 일·공휴일 08:30~11:30, 15:00~19:00 (시즌별 변동)",
      admission: "일반 €13, 종탑 추가 €2",
      address: "Calle Cardenal Herrero 1, 14003 Cordoba",
      website: "https://mezquita-catedraldecordoba.es",
    },
    highlights: [
      "856개 대리석·화강암 기둥과 빨간-흰 이중 아치",
      "미흐랍(이슬람 기도 방향 표시) - 비잔틴 모자이크의 걸작",
      "기독교 대성당의 화려한 성가대석과 제단",
      "오렌지나무 파티오(Patio de los Naranjos)",
    ],
    nearbyAttractions: ["로마 다리", "알카사르", "꽃의 골목", "유대인 거리"],
    photoTips: "기둥 숲은 광각 렌즈로 끝없이 이어지는 아치를 담으세요. 미흐랍 앞에서 이슬람 장식의 디테일을 찍는 것도 좋습니다.",
    tips: [
      "월~토 08:30~09:30 무료 입장! 일찍 줄을 서야 합니다.",
      "종탑에 올라가면 코르도바 구시가지 전경을 볼 수 있습니다.",
      "내부가 넓으니 최소 1.5시간을 잡으세요.",
      "미사 시간에는 관광 제한이 있으니 확인하고 방문하세요.",
    ],
  },

  // ===== TOLEDO =====
  "spain/madrid-central/toledo/toledo-cathedral": {
    heroGradient: "from-amber-600 to-amber-900",
    description: "스페인 고딕 건축의 최고봉으로 13세기에 건설이 시작되어 270년에 걸쳐 완성되었습니다. 엘 그레코의 작품을 포함한 방대한 예술 소장품과 투명인간 성가대석(트란스파렌테)의 바로크 빛의 연출이 압도적입니다.",
    history: "1226년 페르난도 3세가 착공하여 1493년에 완공되었습니다. 이전에 서고트 교회와 이슬람 모스크가 있던 자리에 건설되었으며, 스페인 카톨릭 수석 대주교좌가 위치한 스페인 최고의 교회입니다.",
    visitInfo: {
      hours: "월~토 10:00~18:00, 일 14:00~18:00",
      admission: "일반 €12.50 (종탑 포함)",
      address: "Calle Cardenal Cisneros 1, 45002 Toledo",
      website: "https://www.catedralprimada.es",
    },
    highlights: [
      "트란스파렌테 - 천장을 뚫어 자연광이 쏟아지는 바로크 걸작",
      "성기실(Sacristia)의 엘 그레코 걸작 컬렉션",
      "보물실의 500kg 성체현시대(쿠스토디아)",
      "고딕 성가대석의 정교한 목조 조각",
    ],
    nearbyAttractions: ["알카사르", "산토 토메 교회", "소코도베르 광장", "유대인 거리"],
    photoTips: "트란스파렌테는 정오에 천장에서 빛이 쏟아질 때 가장 극적입니다. 외관은 대성당 맞은편 골목에서 전체를 담을 수 있습니다.",
    tips: [
      "톨레도 팔찌(Pulsera Turistica)로 할인 입장이 가능합니다.",
      "내부가 매우 넓으니 최소 1.5시간을 잡으세요.",
      "트란스파렌테는 정오 전후에 빛이 가장 아름답습니다.",
      "일요일은 오후만 개방하니 일정에 주의하세요.",
    ],
  },

  // ===== BILBAO =====
  "spain/basque-north/bilbao/guggenheim-museum-bilbao": {
    heroGradient: "from-gray-500 to-gray-800",
    description: "프랭크 게리가 설계한 해체주의 건축의 걸작으로 33,000장의 티타늄 패널이 빛에 따라 색이 변합니다. 건물 자체가 예술 작품이며, 제프 쿤스의 퍼피(꽃 강아지)와 루이즈 부르주아의 거미 '마만'이 외부를 장식합니다.",
    history: "1997년 개관하여 쇠퇴하던 공업 도시 빌바오를 세계적 관광 도시로 탈바꿈시킨 '빌바오 효과'의 주인공입니다. 솔로몬 구겐하임 재단과 바스크 정부의 협력으로 탄생했습니다.",
    visitInfo: {
      hours: "화~일 10:00~19:00 (월요일 휴관, 7~8월 월요일도 개관)",
      admission: "일반 €16, 학생 €9, 온라인 사전구매 권장",
      address: "Abandoibarra Etorb. 2, 48009 Bilbo",
      website: "https://www.guggenheim-bilbao.eus",
    },
    highlights: [
      "33,000장 티타늄 패널의 해체주의 건축",
      "제프 쿤스 '퍼피' - 꽃으로 덮인 강아지 조각(무료)",
      "루이즈 부르주아 '마만' - 거대 거미 조각(무료)",
      "리처드 세라 '시간의 문제' 철판 조각 설치",
    ],
    nearbyAttractions: ["네르비온 강변 산책로", "이비르드로라 타워", "도냐 카시르다 공원", "카스코 비에호"],
    photoTips: "네르비온 강 건너편(라 살베 다리 방향)에서 건물 전체를 담을 수 있습니다. 퍼피는 정면에서, 마만은 강변에서 건물을 배경으로 촬영.",
    tips: [
      "건물 외관과 야외 조각(퍼피, 마만)은 무료로 관람 가능합니다.",
      "월요일 휴관이지만 7~8월은 매일 개관합니다.",
      "오디오 가이드가 한국어를 지원하니 꼭 이용하세요.",
      "미술관 앞 강변 산책로에서 다양한 각도로 건축미를 감상하세요.",
    ],
  },

  // ===== SAN SEBASTIAN =====
  "spain/basque-north/san-sebastian/la-concha-beach": {
    heroGradient: "from-teal-400 to-blue-700",
    description: "유럽에서 가장 아름다운 도시 해변 중 하나로 완벽한 조개(콘차) 모양의 만. 하얀 모래사장과 잔잔한 파도, 양쪽 끝의 몬테 우르굴과 몬테 이겔도가 만드는 경관이 그림 같습니다.",
    history: "19세기 이사벨 2세 여왕이 피부병 치료를 위해 이곳에서 해수욕을 즐기면서 스페인 왕족과 귀족의 여름 휴양지로 유명해졌습니다. 이후 벨에포크 시대의 우아한 해변 산책로가 조성되었습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Playa de la Concha, 20007 Donostia-San Sebastian",
    },
    highlights: [
      "1.5km 길이의 완벽한 곡선 해변",
      "해변 산책로(Paseo de la Concha)의 상징적 난간",
      "산타 클라라 섬으로의 보트 트립",
      "몬테 우르굴과 몬테 이겔도에서 내려다보는 만 전경",
    ],
    nearbyAttractions: ["몬테 이겔도", "몬테 우르굴", "파르테 비에하", "미라마르 궁전"],
    photoTips: "몬테 이겔도 정상에서 내려다보는 라 콘차 만 전체 뷰가 상징적인 사진입니다. 해변 산책로의 난간을 전경에 넣으면 분위기 있는 사진.",
    tips: [
      "여름(7~8월)에는 매우 붐비니 아침 일찍 방문하세요.",
      "파도가 잔잔해서 어린이도 안전하게 수영할 수 있습니다.",
      "해변 산책로를 따라 걸으며 일몰을 보는 것이 최고의 경험.",
      "산타 클라라 섬까지 여름 시즌 보트가 운행합니다.",
    ],
  },

  // ===== VALENCIA =====
  "spain/valencia-east/valencia/city-of-arts-and-sciences": {
    heroGradient: "from-blue-400 to-cyan-700",
    description: "발렌시아 출신 건축가 산티아고 칼라트라바가 설계한 미래지향적 건축 단지. 투리아 강 옛 하상 위에 세워진 수족관(오세아노그라픽), 과학관(프린시페 펠리페), 오페라하우스(소피아 여왕 예술궁전), 아이맥스 극장 등으로 구성됩니다.",
    history: "1998년부터 단계적으로 개관하여 2005년 완공되었습니다. 1957년 대홍수 이후 우회시킨 투리아 강의 옛 하상을 공원화한 투리아 정원 끝에 위치하며, 발렌시아를 현대 건축의 도시로 탈바꿈시켰습니다.",
    visitInfo: {
      hours: "오세아노그라픽: 10:00~18:00 (시즌별 ~20:00), 과학관: 10:00~18:00 (시즌별 ~21:00)",
      admission: "오세아노그라픽 €37, 과학관 €8, 통합 티켓 €38~",
      address: "Av. del Professor Lopez Pinero 7, 46013 Valencia",
      website: "https://www.cac.es",
    },
    highlights: [
      "오세아노그라픽 - 유럽 최대 수족관, 돌고래 쇼",
      "프린시페 펠리페 과학관 - 인터랙티브 과학 체험",
      "소피아 여왕 예술궁전(팔라우 데 레스 아르츠) - 오페라·공연",
      "헤미스페릭 - 아이맥스 극장과 천문관",
    ],
    nearbyAttractions: ["투리아 정원", "발렌시아 해변(말바로사)", "아쿠아 공원"],
    photoTips: "건물이 물에 비치는 반영 사진이 상징적입니다. 해질 무렵과 야간 조명이 켜진 후가 가장 포토제닉합니다. 헤미스페릭의 '눈' 모양을 정면에서 담으세요.",
    tips: [
      "전체 단지를 둘러보려면 최소 반나절이 필요합니다.",
      "오세아노그라픽은 온라인 사전 구매가 현장보다 저렴합니다.",
      "야간 조명이 아름다우니 해질 무렵에 방문해서 야경까지 즐기세요.",
      "투리아 정원을 따라 자전거로 이동하면 편리합니다.",
    ],
  },

  // ===== SEGOVIA =====
  "spain/madrid-central/segovia/segovia-aqueduct": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "서기 1세기 로마 제국이 건설한 수도교로 시멘트나 접착제 없이 화강암 블록만으로 167개 아치, 최대 높이 28.5m를 쌓아올린 고대 로마 토목 공학의 걸작입니다. 2,000년이 지난 지금도 거의 원형 그대로 보존되어 있습니다.",
    history: "서기 50년경 로마 황제 트라야누스 또는 도미티아누스 시대에 건설된 것으로 추정됩니다. 15km 떨어진 프리오 강에서 도시까지 물을 공급했으며, 20세기까지 실제로 사용되었습니다. 1985년 UNESCO 세계유산에 등재.",
    visitInfo: {
      hours: "24시간 개방 (야외 구조물)",
      admission: "무료",
      address: "Plaza del Azoguejo 1, 40001 Segovia",
    },
    highlights: [
      "167개 아치, 최대 높이 28.5m의 압도적 규모",
      "시멘트 없이 화강암 블록만으로 건설된 공학의 경이",
      "아소게호 광장에서 올려다보는 정면 뷰",
      "수도교 위 전망대에서 세고비아 시내 전경",
    ],
    nearbyAttractions: ["세고비아 대성당", "알카사르", "마요르 광장", "성벽 산책로"],
    photoTips: "아소게호 광장에서 수도교를 올려다보는 앵글이 가장 클래식합니다. 수도교 위로 올라가면 아치 사이로 시내를 내려다보는 독특한 사진을 찍을 수 있습니다.",
    tips: [
      "수도교 옆 계단으로 위까지 올라갈 수 있으며 시내 전경이 보입니다.",
      "야간 조명이 켜지면 또 다른 매력이 있으니 저녁에도 방문하세요.",
      "마드리드에서 고속열차 30분, 세고비아의 첫 번째 관광 포인트입니다.",
      "아소게호 광장의 카페에서 수도교를 바라보며 커피 한 잔 추천.",
    ],
  },

  // ===== MONTSERRAT =====
  "spain/barcelona-catalonia/montserrat/montserrat-monastery": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "톱니 모양 바위산 해발 720m에 자리한 베네딕트 수도원. 12세기 검은 성모상(라 모레네타)이 모셔져 있으며, 에스콜라니아 소년 합창단의 천상의 목소리와 기암절벽의 장엄한 자연경관이 어우러진 카탈루냐의 성지입니다.",
    history: "880년경 목동들이 동굴에서 성모상을 발견한 것이 시작이며, 1025년 베네딕트 수도원이 설립되었습니다. 나폴레옹 전쟁(1811년)으로 파괴된 후 19~20세기에 재건되었으며, 카탈루냐 정체성의 상징으로 중요한 순례지입니다.",
    visitInfo: {
      hours: "대성당: 07:30~20:00, 검은 성모상: 08:00~10:30, 12:00~17:15",
      admission: "수도원 무료, 박물관 €8, 산 호안 푸니쿨라 €12.50 왕복",
      address: "Monestir de Montserrat, 08199 Montserrat",
      website: "https://www.montserratvisita.com",
    },
    highlights: [
      "검은 성모상(라 모레네타) - 카탈루냐의 수호 성모",
      "에스콜라니아 소년 합창단 공연 (월~금 13:00)",
      "톱니 모양 기암절벽의 장엄한 자연경관",
      "몬세라트 박물관 - 카라바조, 모네, 피카소, 달리 작품 소장",
    ],
    nearbyAttractions: ["산 호안 전망대", "산타 코바 순례길", "산 미겔 전망대"],
    photoTips: "수도원 앞 광장에서 기암절벽을 배경으로 한 사진이 상징적입니다. 산 호안 전망대에서 수도원 전체를 내려다보는 파노라마 뷰도 놓치지 마세요.",
    tips: [
      "에스콜라니아 합창단 공연은 월~금 13:00, 무료이며 15분 전에 자리를 잡으세요.",
      "Tot Montserrat 패키지(FGC+등산열차+박물관+카페테리아 식사)가 가성비 최고.",
      "검은 성모상 관람은 오전 일찍(08:00) 가야 대기 시간이 짧습니다.",
      "산 호안 전망대까지 푸니쿨라를 타면 트레킹 코스로 내려올 수 있습니다.",
    ],
  },

  // ===== MALAGA =====
  "spain/andalusia/malaga/alcazaba-of-malaga": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "11세기 무어인이 로마 극장의 석재를 재활용하여 건설한 요새 궁전. 이중 성벽과 정원, 분수가 아름다우며 정상에서 말라가 항구와 지중해, 도시 전경이 한눈에 들어오는 전망 명소입니다.",
    history: "1057년 그라나다 타이파(소왕국)의 바디스왕이 건설했으며, 로마 극장(기원전 1세기)의 기둥과 대리석을 재활용했습니다. 이후 나스르 왕조가 확장하여 궁전 구역을 추가했으며, 위쪽 히브랄파로 성과 성벽으로 연결됩니다.",
    visitInfo: {
      hours: "4~10월: 09:00~20:00, 11~3월: 09:00~18:00",
      admission: "알카사바 €3.50, 알카사바+히브랄파로 통합 €5.50",
      address: "Calle Alcazabilla 2, 29012 Malaga",
      website: "https://www.malagaturismo.com",
    },
    highlights: [
      "이중 성벽 사이의 정원과 분수",
      "나스르 궁전 구역의 무데하르 장식",
      "정상에서 말라가 항구와 지중해 파노라마",
      "아래쪽 로마 극장(무료)과의 역사적 연결",
    ],
    nearbyAttractions: ["로마 극장", "히브랄파로 성", "피카소 미술관", "말라가 대성당"],
    photoTips: "성벽 위에서 항구를 내려다보는 사진이 말라가의 대표 뷰입니다. 아래 로마 극장에서 알카사바 성벽을 올려다보는 앵글도 인상적.",
    tips: [
      "히브랄파로 성과 통합 티켓(€5.50)이 경제적이며, 위에서 아래로 내려오는 동선 추천.",
      "경사가 있으니 편한 신발을 신으세요.",
      "아래 로마 극장은 무료이며 알카사바 방문 전후에 함께 관람하세요.",
      "일요일 14:00 이후 무료 입장(시즌별 확인).",
    ],
  },
};
