import type { CityDetail, AttractionDetail } from "../city-details";

export const portugalCityDetails: Record<string, CityDetail> = {
  // ===== LISBON REGION =====
  "portugal/lisbon-region/lisbon": {
    heroGradient: "from-yellow-500 to-red-700",
    description: "포르투갈의 수도이자 유럽에서 가장 오래된 도시 중 하나. 7개의 언덕 위에 세워진 도시로, 파두 음악과 아줄레주 타일, 에그타르트의 본고장입니다.",
    bestTime: "4~10월 (6~9월 축제 시즌)",
    stayArea: "바이샤 / 시아두 지구",
    transport: "메트로, 트램(28번), 엘리베이터 (비바 비아젬 카드)",
    districts: [
      { name: "알파마", nameEn: "Alfama", description: "리스본에서 가장 오래된 지구로 좁은 골목과 파두 하우스가 가득한 곳.", highlights: ["상 조르제 성", "파두 박물관", "산타 루지아 전망대", "벼룩시장(화·토)"] },
      { name: "벨렝", nameEn: "Belém", description: "대항해시대의 유산이 집중된 역사 지구.", highlights: ["벨렝 탑", "제로니무스 수도원", "발견의 기념비", "파스테이스 드 벨렝"] },
      { name: "바이샤-시아두", nameEn: "Baixa-Chiado", description: "리스본의 상업·문화 중심지로 쇼핑과 카페가 밀집.", highlights: ["산타 주스타 엘리베이터", "코메르시우 광장", "카페 아 브라질레이라"] },
    ],
    attractions: [
      { name: "벨렝 탑", nameEn: "Belem Tower", description: "대항해시대의 상징적 요새로 유네스코 세계유산. 마누엘 양식의 걸작입니다.", category: "탑/요새", tip: "오전 일찍 방문하면 대기 시간을 줄일 수 있습니다." },
      { name: "제로니무스 수도원", nameEn: "Jeronimos Monastery", description: "바스쿠 다 가마의 인도 항해를 기념해 건설된 마누엘 양식의 대수도원.", category: "수도원", tip: "일요일 오전 14시까지 무료 입장입니다." },
      { name: "알파마 지구", nameEn: "Alfama District", description: "무어인 시대부터 이어진 리스본 최고(最古)의 지구. 파두 음악의 발상지.", category: "역사지구", tip: "28번 트램을 타고 언덕을 오르세요." },
      { name: "LX 팩토리", nameEn: "LX Factory", description: "19세기 방직 공장을 개조한 크리에이티브 허브. 카페, 갤러리, 서점이 밀집.", category: "문화단지", tip: "주말 브런치 타임이 가장 활기찹니다." },
      { name: "산타 주스타 엘리베이터", nameEn: "Santa Justa Lift", description: "1902년 건설된 네오고딕 양식의 철제 엘리베이터. 시내 전망이 훌륭합니다.", category: "전망대" },
      { name: "코메르시우 광장", nameEn: "Praça do Comércio", description: "타주 강변의 웅장한 광장으로 리스본의 관문 역할.", category: "광장" },
    ],
    dayTrips: [
      { name: "신트라", nameEn: "Sintra", description: "동화 같은 궁전과 성이 숲속에 흩어져 있는 유네스코 마을.", travelTime: "기차 약 40분", gradient: "from-purple-400 to-pink-700" },
      { name: "카스카이스", nameEn: "Cascais", description: "리스본 근교의 해변 휴양도시로 해안 절벽 산책로가 유명.", travelTime: "기차 약 35분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "파스텔 드 나타", description: "바삭한 페이스트리에 커스터드 크림을 채운 에그타르트의 원조.", emoji: "🥧" },
      { name: "바칼랴우 아 브라스", description: "소금 대구와 감자, 계란을 볶은 포르투갈 국민 요리.", emoji: "🐟" },
      { name: "진자", description: "포르투갈식 체리 리큐르, 리스본의 대표 술.", emoji: "🍒" },
    ],
    tips: [
      "리스보아 카드(24/48/72시간)로 대중교통 무료 + 주요 관광지 할인.",
      "28번 트램은 소매치기가 많으니 소지품에 주의하세요.",
      "파두 공연은 알파마 지구의 소규모 레스토랑이 가장 정통입니다.",
      "언덕이 매우 가파르니 편한 신발은 필수입니다.",
    ],
  },
  "portugal/lisbon-region/sintra": {
    heroGradient: "from-purple-400 to-pink-700",
    description: "리스본 근교의 유네스코 세계유산 도시. 울창한 숲속에 동화 같은 궁전과 성이 흩어져 있어 '에덴의 동산'이라 불립니다.",
    bestTime: "4~6월, 9~10월 (여름 성수기 혼잡)",
    stayArea: "신트라 빌라 (구시가지)",
    transport: "리스본에서 기차 40분 + 434번 버스",
    districts: [
      { name: "신트라 빌라", nameEn: "Sintra Vila", description: "기차역과 왕궁이 있는 구시가지 중심부.", highlights: ["신트라 국립궁전", "전통 과자점", "관광안내소"] },
      { name: "산악 지대", nameEn: "Serra de Sintra", description: "페나 궁전과 무어인 성이 위치한 숲속 언덕 지대.", highlights: ["페나 궁전", "무어인 성", "호카 곶"] },
    ],
    attractions: [
      { name: "페나 궁전", nameEn: "Pena Palace", description: "알록달록한 색채의 낭만주의 궁전으로 유럽에서 가장 아름다운 궁전 중 하나.", category: "궁전", tip: "오전 9시 30분 개장 직후 방문하면 인파를 피할 수 있습니다." },
      { name: "킨타 다 레갈레이라", nameEn: "Quinta da Regaleira", description: "연금술과 프리메이슨 상징이 가득한 신비로운 저택과 정원. 나선형 우물(이니시에이션 웰)이 하이라이트.", category: "저택/정원", tip: "지하 터널 탐험은 방수 신발을 준비하세요." },
      { name: "신트라 국립궁전", nameEn: "Sintra National Palace", description: "두 개의 거대한 굴뚝이 특징인 중세 왕궁.", category: "궁전" },
    ],
    dayTrips: [
      { name: "호카 곶", nameEn: "Cabo da Roca", description: "유라시아 대륙 최서단 지점. 대서양 절벽 위 등대가 인상적.", travelTime: "버스 약 30분", gradient: "from-blue-500 to-indigo-800" },
    ],
    localFood: [
      { name: "트라베세이루", description: "아몬드 크림이 가득한 신트라 전통 페이스트리.", emoji: "🥐" },
      { name: "케이자다", description: "시나몬 향의 치즈 타르트, 신트라의 대표 디저트.", emoji: "🧁" },
    ],
    tips: [
      "페나 궁전과 무어인 성 콤보 티켓을 구매하면 할인됩니다.",
      "434번 버스 왕복 티켓(€6.90)을 미리 구매하세요.",
      "당일치기 시 아침 일찍 출발해야 주요 궁전을 모두 볼 수 있습니다.",
    ],
  },
  "portugal/lisbon-region/cascais": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "리스본 근교의 우아한 해변 휴양도시. 19세기 왕실의 여름 별장지였으며, 해안 절벽 산책로와 신선한 해산물로 유명합니다.",
    bestTime: "5~9월 (해변 시즌)",
    stayArea: "카스카이스 구시가지 / 해변 근처",
    transport: "리스본 카이스 두 소드레에서 기차 35분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "카스카이스의 보행자 중심 거리로 레스토랑과 상점이 밀집.", highlights: ["시타델라", "해안 산책로", "어시장"] },
    ],
    attractions: [
      { name: "보카 두 인페르누", nameEn: "Boca do Inferno", description: "'지옥의 입'이라 불리는 해안 절벽 동굴로 파도가 부딪히며 장관을 연출.", category: "자연경관", tip: "파도가 높은 날 방문하면 더 극적인 광경을 볼 수 있습니다." },
      { name: "기마랑이스 해변", nameEn: "Guincho Beach", description: "서퍼들에게 사랑받는 대서양 해변으로 바람이 강하고 파도가 큽니다.", category: "해변" },
      { name: "카스트루 기마랑이스 박물관", nameEn: "Castro Guimarães Museum", description: "고딕-무어 양식의 아름다운 저택을 개조한 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "호카 곶", nameEn: "Cabo da Roca", description: "유라시아 대륙 최서단 지점.", travelTime: "버스 약 25분", gradient: "from-blue-500 to-indigo-800" },
    ],
    localFood: [
      { name: "해산물 밥솥", description: "아로즈 드 마리스쿠, 포르투갈식 해산물 리조또.", emoji: "🦐" },
      { name: "그릴드 정어리", description: "사르디냐스 아사다스, 숯불에 구운 포르투갈 국민 생선.", emoji: "🐟" },
    ],
    tips: [
      "리스본에서 기차로 쉽게 당일치기가 가능합니다.",
      "해안 산책로(카스카이스~기슈 해변, 약 8km)는 꼭 걸어보세요.",
      "여름 주말에는 해변이 매우 혼잡하니 평일 방문을 추천합니다.",
    ],
  },

  // ===== PORTO & NORTH =====
  "portugal/porto-north/porto": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "포르투갈 제2의 도시이자 포트 와인의 본고장. 도우루 강변의 다채로운 건물들과 아줄레주 타일로 장식된 건축물이 매력적인 유네스코 세계유산 도시입니다.",
    bestTime: "5~10월 (6월 상 주앙 축제)",
    stayArea: "리베이라 / 알리아두스 지구",
    transport: "메트로, 버스, 트램 (안단치 카드)",
    districts: [
      { name: "리베이라", nameEn: "Ribeira", description: "도우루 강변의 유네스코 세계유산 지구로 다채로운 건물이 늘어선 곳.", highlights: ["동 루이스 1세 다리", "리베이라 광장", "강변 레스토랑"] },
      { name: "알리아두스", nameEn: "Aliados", description: "시청사와 상벤투 역이 있는 포르투의 중심부.", highlights: ["상벤투 기차역", "클레리구스 탑", "렐루 서점"] },
      { name: "빌라 노바 드 가이아", nameEn: "Vila Nova de Gaia", description: "포트 와인 셀러가 밀집한 도우루 강 남쪽 지역.", highlights: ["포트 와인 셀러 투어", "텔레페리쿠", "강변 전망"] },
    ],
    attractions: [
      { name: "렐루 서점", nameEn: "Livraria Lello", description: "1906년 개점한 세계에서 가장 아름다운 서점. 빨간 나선 계단과 네오고딕 인테리어가 장관.", category: "서점", tip: "온라인 사전 구매 티켓(€8)은 서적 구매 시 차감됩니다." },
      { name: "동 루이스 1세 다리", nameEn: "Dom Luis I Bridge", description: "에펠의 제자 테오필 세이리그가 설계한 2층 철제 아치교. 상층에서 포르투 전경 조망.", category: "다리", tip: "일몰 시간에 상층 보행로를 걸으면 최고의 전망을 즐길 수 있습니다." },
      { name: "리베이라 지구", nameEn: "Ribeira District", description: "도우루 강변의 유네스코 세계유산 지구로 중세부터 이어진 포르투의 심장부.", category: "역사지구" },
      { name: "상벤투 기차역", nameEn: "São Bento Station", description: "2만 장의 아줄레주 타일 벽화로 장식된 기차역. 포르투갈 역사가 타일 위에 펼쳐집니다.", category: "건축물", tip: "입장 무료. 기차를 타지 않아도 내부 관람이 가능합니다." },
      { name: "클레리구스 탑", nameEn: "Clérigos Tower", description: "포르투의 상징적 바로크 종탑. 240개 계단을 올라가면 도시 전체가 보입니다.", category: "탑" },
    ],
    dayTrips: [
      { name: "도우루 밸리", nameEn: "Douro Valley", description: "계단식 포도밭과 와이너리가 펼쳐진 유네스코 세계유산 와인 산지.", travelTime: "기차/차량 약 1.5시간", gradient: "from-amber-500 to-orange-800" },
      { name: "브라가", nameEn: "Braga", description: "포르투갈에서 가장 오래된 도시 중 하나로 봉 제수스 두 몬치 성지가 유명.", travelTime: "기차 약 1시간", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "프란세지냐", description: "포르투 명물 샌드위치. 고기, 치즈, 소시지를 쌓고 맥주 소스를 부은 거대한 토스트.", emoji: "🥪" },
      { name: "트리파스 아 모다 두 포르투", description: "내장 스튜, 포르투 시민을 '트리페이루스(내장먹는 사람들)'라 부르는 유래.", emoji: "🍲" },
      { name: "포트 와인", description: "빌라 노바 드 가이아의 셀러에서 시음하는 달콤한 포르투갈 강화 와인.", emoji: "🍷" },
    ],
    tips: [
      "포르투 카드(1~4일)로 대중교통 + 관광지 할인을 받으세요.",
      "렐루 서점은 온라인 사전 예약이 필수입니다.",
      "6월 상 주앙 축제에는 밤새 거리 파티가 펼쳐집니다.",
      "빌라 노바 드 가이아의 포트 와인 셀러는 무료 시음 포함 투어가 많습니다.",
    ],
  },
  "portugal/porto-north/douro-valley": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "세계 최초의 공식 와인 산지(1756년 지정). 도우루 강을 따라 계단식 포도밭이 끝없이 펼쳐지는 유네스코 세계유산 지역으로, 와인 크루즈와 퀸타(와이너리) 투어가 하이라이트입니다.",
    bestTime: "9~10월 (포도 수확철) / 5~6월",
    stayArea: "피냥 / 레구아 / 퀸타 숙소",
    transport: "포르투에서 기차(도우루 라인) 약 2시간 또는 크루즈",
    districts: [
      { name: "레구아", nameEn: "Peso da Régua", description: "도우루 와인 산지의 관문 도시로 도우루 박물관이 위치.", highlights: ["도우루 박물관", "강변 산책로", "와이너리"] },
      { name: "피냥", nameEn: "Pinhão", description: "도우루 밸리의 중심 마을로 아줄레주 기차역과 최고급 퀸타가 밀집.", highlights: ["피냥 기차역 아줄레주", "퀸타 투어", "강변 전망"] },
    ],
    attractions: [
      { name: "도우루 밸리 와인 크루즈", nameEn: "Douro Valley Wine Cruise", description: "도우루 강을 따라 계단식 포도밭과 퀸타를 감상하는 크루즈. 와인 시음이 포함됩니다.", category: "크루즈", tip: "포르투에서 출발하는 1일 크루즈가 가장 인기 있습니다." },
      { name: "퀸타 와이너리 투어", nameEn: "Quinta Winery Tour", description: "현지 와이너리에서 포트 와인과 도우루 와인 생산 과정을 배우고 시음합니다.", category: "와이너리" },
      { name: "피냥 기차역", nameEn: "Pinhão Station", description: "도우루 밸리의 풍경을 담은 아줄레주 타일로 장식된 소박한 기차역.", category: "건축물" },
    ],
    dayTrips: [
      { name: "라메구", nameEn: "Lamego", description: "노사 세뇨라 두스 레메디우스 성지와 600계단이 유명한 소도시.", travelTime: "차량 약 20분", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "포트 와인", description: "도우루 밸리에서 생산되는 세계적인 강화 와인. 루비, 토니, 빈티지 등 다양한 종류.", emoji: "🍷" },
      { name: "카브리투 아사두", description: "숯불에 구운 새끼 염소 요리, 도우루 지방의 전통 음식.", emoji: "🍖" },
    ],
    tips: [
      "도우루 라인 기차는 포르투 상벤투역에서 출발하며, 좌석 우측이 강변 뷰입니다.",
      "렌터카가 있으면 N222 도로(세계에서 가장 아름다운 도로)를 드라이브하세요.",
      "수확철(9~10월)에는 포도밟기 체험도 가능합니다.",
    ],
  },
  "portugal/porto-north/braga": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "포르투갈에서 가장 오래된 도시 중 하나이자 종교의 중심지. 봉 제수스 두 몬치의 장엄한 바로크 계단과 활기찬 대학도시 분위기가 공존합니다.",
    bestTime: "4~10월 (부활절 행사 성대)",
    stayArea: "구시가지 중심",
    transport: "포르투에서 기차 약 1시간",
    districts: [
      { name: "구시가지", nameEn: "Historic Center", description: "브라가 대성당과 보행자 거리가 있는 역사 중심지.", highlights: ["브라가 대성당", "공화국 광장", "아르쿠 다 포르타 노바"] },
    ],
    attractions: [
      { name: "봉 제수스 두 몬치", nameEn: "Bom Jesus do Monte", description: "581개 계단과 분수, 예배당이 이어지는 장엄한 바로크 성지. 유네스코 세계유산.", category: "성지", tip: "계단을 오르기 힘들면 1882년에 만들어진 수력 푸니쿨라를 이용하세요." },
      { name: "브라가 대성당", nameEn: "Braga Cathedral", description: "포르투갈에서 가장 오래된 대성당(11세기). 다양한 건축 양식이 혼재.", category: "성당" },
      { name: "사메이루 성소", nameEn: "Sameiro Sanctuary", description: "봉 제수스 맞은편 언덕의 신고전주의 성소로 도시 전체 조망이 가능.", category: "성지" },
    ],
    dayTrips: [
      { name: "기마랑이스", nameEn: "Guimarães", description: "'포르투갈의 탄생지'로 불리는 유네스코 세계유산 도시.", travelTime: "기차/버스 약 30분", gradient: "from-red-500 to-rose-800" },
    ],
    localFood: [
      { name: "바칼랴우 아 브라가", description: "브라가식 대구 요리, 올리브오일과 감자를 곁들여 오븐에 구운 것.", emoji: "🐟" },
      { name: "푸딩 아바드 드 프리스쿠스", description: "브라가 전통 카라멜 푸딩, 달걀과 설탕으로 만든 진한 디저트.", emoji: "🍮" },
    ],
    tips: [
      "봉 제수스와 사메이루를 같은 날 묶어 방문하면 효율적입니다.",
      "부활절 기간에는 성대한 종교 행사가 열립니다.",
      "포르투에서 당일치기로 충분하지만, 여유가 있다면 1박을 추천합니다.",
    ],
  },

  // ===== ALGARVE =====
  "portugal/algarve/faro": {
    heroGradient: "from-teal-400 to-blue-700",
    description: "알가르브 지방의 수도이자 관문 도시. 리아 포르모사 자연공원의 석호와 습지가 펼쳐지며, 중세 성벽 안의 구시가지가 잘 보존되어 있습니다.",
    bestTime: "5~10월 (해변 시즌)",
    stayArea: "구시가지 / 마리나 근처",
    transport: "리스본에서 기차 약 2.5시간, 시내 버스",
    districts: [
      { name: "시다드 벨랴", nameEn: "Cidade Velha", description: "무어인 시대의 성벽으로 둘러싸인 구시가지.", highlights: ["파루 대성당", "시립 박물관", "아르쿠 다 빌라"] },
      { name: "마리나", nameEn: "Marina", description: "레스토랑과 바가 밀집한 항구 지구.", highlights: ["리아 포르모사 보트 투어", "해산물 레스토랑"] },
    ],
    attractions: [
      { name: "리아 포르모사 자연공원", nameEn: "Ria Formosa Natural Park", description: "60km에 걸친 석호·습지 자연공원으로 플라밍고와 바다새의 서식지. 보트 투어로 섬 해변을 방문합니다.", category: "자연공원", tip: "보트 투어로 데세르타 섬의 한적한 해변을 방문하세요." },
      { name: "파루 대성당", nameEn: "Faro Cathedral", description: "13세기에 건설된 고딕-바로크 양식의 대성당. 옥상에서 리아 포르모사 전경이 보입니다.", category: "성당" },
      { name: "뼈 예배당", nameEn: "Chapel of Bones", description: "1,200구 이상의 수도사 유골로 벽과 천장을 장식한 독특한 예배당.", category: "역사", tip: "카르무 교회 뒤편에 있으며 입장료가 저렴합니다." },
    ],
    dayTrips: [
      { name: "라구스", nameEn: "Lagos", description: "황금빛 절벽과 동굴이 장관인 알가르브의 보석.", travelTime: "기차 약 1.5시간", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "카타플라나", description: "해산물과 소시지를 구리 냄비에 찐 알가르브 전통 요리.", emoji: "🦞" },
      { name: "돔 로드리구", description: "아몬드, 무화과, 계란으로 만든 알가르브 전통 디저트.", emoji: "🍰" },
    ],
    tips: [
      "파루 공항은 알가르브 여행의 기점으로 렌터카를 빌리면 편리합니다.",
      "리아 포르모사 보트 투어는 반나절이면 충분합니다.",
      "구시가지는 소규모로 도보 1~2시간이면 둘러볼 수 있습니다.",
    ],
  },
  "portugal/algarve/lagos": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "알가르브에서 가장 아름다운 해안 도시. 황금빛 석회암 절벽, 숨겨진 동굴, 투명한 바다가 어우러진 자연 경관이 압도적이며, 활기찬 구시가지도 매력적입니다.",
    bestTime: "5~10월 (해변 및 보트 투어 시즌)",
    stayArea: "구시가지 / 마리나 근처",
    transport: "파루에서 기차 약 1.5시간, 라구스 시내 도보 가능",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "성벽 안의 보행자 중심 거리로 레스토랑, 바, 상점이 밀집.", highlights: ["노예 시장 박물관", "산타 마리아 교회", "포르타 드 상 곤살루"] },
      { name: "해안 절벽", nameEn: "Coastal Cliffs", description: "폰타 다 피에다드를 비롯한 황금빛 석회암 절벽 지대.", highlights: ["폰타 다 피에다드", "카밀루 해변", "동굴 보트 투어"] },
    ],
    attractions: [
      { name: "폰타 다 피에다드", nameEn: "Ponta da Piedade", description: "알가르브를 대표하는 황금빛 석회암 절벽과 해식 동굴. 보트 투어와 절벽 위 산책로 모두 놓칠 수 없습니다.", category: "자연경관", tip: "절벽 위 산책로(무료)와 보트 동굴 투어(€20 내외)를 모두 체험하세요." },
      { name: "카밀루 해변", nameEn: "Praia do Camilo", description: "200개의 나무 계단을 내려가면 만나는 절벽 사이 숨겨진 해변.", category: "해변", tip: "성수기에는 이른 아침에 자리를 잡아야 합니다." },
      { name: "동굴 보트 투어", nameEn: "Grottos Boat Tour", description: "해안 절벽의 해식 동굴과 아치를 가까이서 탐험하는 보트 투어.", category: "투어" },
    ],
    dayTrips: [
      { name: "사그레스", nameEn: "Sagres", description: "유럽 대륙 남서쪽 끝 요새와 거친 대서양 풍광.", travelTime: "버스 약 1시간", gradient: "from-blue-600 to-slate-800" },
    ],
    localFood: [
      { name: "그릴드 해산물 모듬", description: "신선한 새우, 문어, 생선을 숯불에 구운 알가르브식 해산물 플래터.", emoji: "🦐" },
      { name: "아메이조아스 아 불랴웅 파투", description: "마늘과 고수를 넣고 찐 조개 요리, 알가르브의 대표 전채.", emoji: "🦪" },
      { name: "메드로네이루 술", description: "딸기나무 열매로 만든 전통 증류주.", emoji: "🍶" },
    ],
    tips: [
      "폰타 다 피에다드 보트 투어는 마리나에서 출발하며 사전 예약을 권장합니다.",
      "해안 절벽 산책로는 난간이 없는 구간이 있으니 주의하세요.",
      "여름 저녁에는 구시가지 바 거리가 매우 활기찹니다.",
      "렌터카가 없으면 파루에서 기차로 이동이 편리합니다.",
    ],
  },
};

export const portugalAttractionDetails: Record<string, AttractionDetail> = {
  // ===== LISBON =====
  "portugal/lisbon-region/lisbon/belem-tower": {
    heroGradient: "from-yellow-500 to-red-700",
    description: "1515~1521년에 건설된 마누엘 양식의 요새 탑으로, 대항해시대 선원들이 마지막으로 보던 리스본의 풍경이었습니다. 타주 강변에 우뚝 솟은 유네스코 세계유산입니다.",
    history: "마누엘 1세의 명으로 1515년 착공, 1521년 완공되었습니다. 본래 타주 강 한가운데 세워진 방어 요새였으나, 1755년 대지진으로 강의 흐름이 바뀌어 현재는 강변에 위치합니다.",
    visitInfo: {
      hours: "화~일 10:00~17:30 (월요일 휴관)",
      admission: "성인 €10, 콤보 티켓(제로니무스 수도원) €18",
      address: "Av. Brasília, 1400-038 Lisboa",
      website: "https://www.torrebelem.gov.pt",
    },
    highlights: [
      "마누엘 양식의 정교한 석조 장식 (밧줄, 십자가, 코뿔소 조각)",
      "탑 꼭대기에서 타주 강과 벨렝 지구 전경 조망",
      "지하 창고(포탄 저장소)의 독특한 분위기",
      "강변 산책로에서 바라본 탑의 석양 풍경",
    ],
    nearbyAttractions: ["제로니무스 수도원", "발견의 기념비", "MAAT 미술관", "파스테이스 드 벨렝"],
    photoTips: "석양 시간에 강변에서 촬영하면 황금빛으로 물든 벨렝 탑의 가장 아름다운 모습을 담을 수 있습니다.",
    tips: [
      "오전 10시 개장 직후 방문하면 대기줄이 짧습니다.",
      "제로니무스 수도원과 콤보 티켓을 구매하면 €2 할인됩니다.",
      "내부 계단이 매우 좁으니 짐을 최소화하세요.",
      "월요일은 휴관이니 주의하세요.",
    ],
  },
  "portugal/lisbon-region/lisbon/jeronimos-monastery": {
    heroGradient: "from-amber-400 to-yellow-800",
    description: "바스쿠 다 가마의 인도 항해 성공을 기념해 건설된 마누엘 양식의 대수도원. 포르투갈 대항해시대의 영광을 상징하는 유네스코 세계유산입니다.",
    history: "마누엘 1세가 1501년 착공하여 약 100년에 걸쳐 완성되었습니다. 향신료 무역의 수익금으로 건설되었으며, 바스쿠 다 가마와 시인 카몽이스의 석관이 안치되어 있습니다.",
    visitInfo: {
      hours: "화~일 10:00~17:30 (월요일 휴관)",
      admission: "성인 €10, 일요일 14시까지 무료",
      address: "Praça do Império, 1400-206 Lisboa",
      website: "https://www.patrimoniocultural.gov.pt",
    },
    highlights: [
      "마누엘 양식의 남쪽 출입구 조각 장식",
      "중정 회랑의 정교한 석조 아치와 기둥",
      "바스쿠 다 가마와 카몽이스의 석관",
      "산타 마리아 교회의 별 모양 볼트 천장",
    ],
    nearbyAttractions: ["벨렝 탑", "발견의 기념비", "파스테이스 드 벨렝", "해양 박물관"],
    photoTips: "중정 회랑은 2층에서 내려다보며 촬영하면 기하학적 아름다움을 잘 담을 수 있습니다.",
    tips: [
      "일요일 오전에 무료 입장이 가능하지만 대기줄이 매우 깁니다.",
      "교회 입장은 무료이니 시간이 부족하면 교회만이라도 방문하세요.",
      "벨렝 탑과 콤보 티켓이 경제적입니다.",
      "15번 트램 또는 버스 727/728번으로 접근합니다.",
    ],
  },
  "portugal/lisbon-region/lisbon/alfama-district": {
    heroGradient: "from-orange-500 to-red-800",
    description: "리스본에서 가장 오래된 지구로 무어인 시대(8세기)부터의 미로 같은 골목이 남아있습니다. 파두 음악의 발상지이자 리스본 서민 문화의 본거지입니다.",
    history: "무어인 지배 시기부터 형성된 리스본 최고(最古)의 지구입니다. 1755년 대지진에서도 비교적 피해가 적어 중세의 골목 구조가 그대로 남아있습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 지구)",
      admission: "무료",
      address: "Alfama, Lisboa",
    },
    highlights: [
      "상 조르제 성에서 내려다본 리스본 파노라마",
      "산타 루지아 & 포르타스 두 솔 전망대",
      "좁은 골목 사이의 파두 하우스에서 라이브 공연",
      "화요일·토요일 벼룩시장(페이라 다 라드라)",
    ],
    nearbyAttractions: ["상 조르제 성", "파두 박물관", "리스본 대성당", "산타 아폴로니아역"],
    photoTips: "산타 루지아 전망대에서 붉은 지붕과 타주 강을 함께 담으면 리스본의 상징적인 사진을 얻을 수 있습니다.",
    tips: [
      "28번 트램을 타고 알파마를 관통하는 것이 클래식한 경험입니다.",
      "파두 공연은 저녁 식사와 함께 예약하는 것이 일반적입니다.",
      "골목이 매우 가파르니 편한 신발을 신으세요.",
      "소매치기에 주의하세요, 특히 트램과 전망대 주변.",
    ],
  },
  "portugal/lisbon-region/lisbon/lx-factory": {
    heroGradient: "from-gray-600 to-slate-900",
    description: "1846년에 설립된 방직 공장을 개조한 리스본 최대의 크리에이티브 허브. 독립 서점, 디자인 갤러리, 카페, 레스토랑이 산업 유산 건물 안에 모여 있습니다.",
    history: "1846년 Companhia de Fiação e Tecidos Lisbonense 방직 공장으로 시작했습니다. 2008년 크리에이티브 공간으로 재탄생하며 리스본의 대안 문화 중심지가 되었습니다.",
    visitInfo: {
      hours: "상점/카페 10:00~24:00 (주말 브런치 11:00~), 일부 바 심야 영업",
      admission: "무료 입장",
      address: "R. Rodrigues de Faria 103, 1300-501 Lisboa",
      website: "https://www.lxfactory.com",
    },
    highlights: [
      "Ler Devagar 서점 (세계에서 가장 아름다운 서점 중 하나)",
      "벽면 그라피티와 스트리트 아트",
      "주말 브런치 문화",
      "일요일 크리에이티브 마켓",
    ],
    nearbyAttractions: ["벨렝 탑", "4월 25일 다리", "MAAT 미술관", "산투 아마루 부두"],
    photoTips: "공장 건물 사이의 좁은 통로에서 그라피티를 배경으로 촬영하면 인스타그램에 딱 맞는 사진을 얻을 수 있습니다.",
    tips: [
      "주말 브런치 타임(11:00~14:00)이 가장 활기찹니다.",
      "Ler Devagar 서점은 사진 촬영 가능하니 꼭 들러보세요.",
      "저녁에는 루프탑 바에서 타주 강 뷰를 즐기세요.",
    ],
  },

  // ===== SINTRA =====
  "portugal/lisbon-region/sintra/pena-palace": {
    heroGradient: "from-purple-400 to-pink-700",
    description: "19세기 낭만주의 건축의 걸작으로, 빨강·노랑·파랑의 알록달록한 외관이 숲속 언덕 위에서 빛납니다. 포르투갈 7대 불가사의 중 하나로 유네스코 세계유산입니다.",
    history: "페르난두 2세가 1854년에 완공한 여름 궁전입니다. 무어, 고딕, 마누엘, 이슬람 양식을 혼합한 독특한 건축으로, 본래 15세기 수도원 터 위에 세워졌습니다.",
    visitInfo: {
      hours: "매일 09:30~18:30 (입장 마감 18:00)",
      admission: "궁전+정원 €14, 정원만 €7.50",
      address: "Estrada da Pena, 2710-609 Sintra",
      website: "https://www.parquesdesintra.pt",
    },
    highlights: [
      "알록달록한 외벽과 아줄레주 타일 장식",
      "아랍의 방 (트롱프뢰유 벽화)",
      "테라스에서 대서양까지 보이는 파노라마 전망",
      "200헥타르 규모의 낭만주의 정원",
    ],
    nearbyAttractions: ["무어인 성", "킨타 다 레갈레이라", "신트라 국립궁전", "몬세라트 궁전"],
    photoTips: "궁전 입구의 테라스에서 성벽 전체를 담을 수 있으며, 안개 낀 아침에 방문하면 몽환적인 분위기를 연출합니다.",
    tips: [
      "오전 9시 30분 개장 직후 방문하면 인파를 피할 수 있습니다.",
      "434번 버스로 이동하거나 건강하다면 도보(40분 오르막)도 가능합니다.",
      "무어인 성과 콤보 티켓을 구매하면 할인됩니다.",
      "비가 올 수 있으니 우비를 준비하세요.",
    ],
  },
  "portugal/lisbon-region/sintra/quinta-da-regaleira": {
    heroGradient: "from-emerald-500 to-green-900",
    description: "연금술, 프리메이슨, 템플 기사단의 상징이 곳곳에 숨겨진 신비로운 저택과 정원. 27m 깊이의 나선형 이니시에이션 웰(우물)이 가장 유명한 하이라이트입니다.",
    history: "브라질 커피 재벌 카르발류 몬테이루가 1904~1910년에 이탈리아 건축가 루이지 마니니와 함께 건설했습니다. 연금술과 비밀결사의 상징을 건축에 반영한 독특한 공간입니다.",
    visitInfo: {
      hours: "매일 09:30~18:00 (계절에 따라 변동)",
      admission: "성인 €10",
      address: "R. Barbosa du Bocage 5, 2710-567 Sintra",
      website: "https://www.regaleira.pt",
    },
    highlights: [
      "이니시에이션 웰 - 27m 깊이의 나선형 지하 우물",
      "지하 터널 네트워크 탐험",
      "고딕 양식의 본관 저택",
      "폭포와 동굴이 있는 신비로운 정원",
    ],
    nearbyAttractions: ["신트라 국립궁전", "페나 궁전", "무어인 성", "세테아이스 궁전"],
    photoTips: "이니시에이션 웰은 위에서 내려다보며 나선형 계단을 담는 것이 가장 인상적입니다.",
    tips: [
      "지하 터널은 어둡고 미끄러우니 손전등(휴대폰)과 방수 신발을 준비하세요.",
      "오전 개장 직후 또는 오후 늦게 방문하면 인파가 적습니다.",
      "정원 전체를 둘러보려면 최소 1.5~2시간이 필요합니다.",
      "페나 궁전보다 먼저 방문하는 일정이 효율적입니다.",
    ],
  },

  // ===== PORTO =====
  "portugal/porto-north/porto/livraria-lello": {
    heroGradient: "from-red-600 to-amber-800",
    description: "1906년 개점한 네오고딕 양식의 서점으로, 빨간 나선형 계단과 스테인드글라스 천장이 장관입니다. 론리 플래닛이 선정한 세계에서 가장 아름다운 서점입니다.",
    history: "1881년 국제서점으로 시작, 1906년 현재의 엔지니어 사비에르 에스테베스가 설계한 건물로 이전했습니다. J.K. 롤링이 포르투에서 영어 교사로 일하던 시절 영감을 받은 곳으로 알려져 있습니다.",
    visitInfo: {
      hours: "매일 09:00~19:00",
      admission: "입장 바우처 €8 (서적 구매 시 차감)",
      address: "R. das Carmelitas 144, 4050-161 Porto",
      website: "https://www.livrarialello.pt",
    },
    highlights: [
      "빨간 나선형 계단 (인스타그램 명소)",
      "네오고딕 양식의 정면 파사드",
      "스테인드글라스 천장",
      "해리 포터 관련 전시 코너",
    ],
    nearbyAttractions: ["클레리구스 탑", "카르무 교회", "포르투 대학교", "알리아두스 광장"],
    photoTips: "2층 난간에서 아래를 내려다보며 나선 계단을 촬영하는 것이 가장 인기 있는 앵글입니다.",
    tips: [
      "온라인 사전 예약이 필수입니다 (현장 구매 불가 시 있음).",
      "오전 9시 개장 직후가 가장 한산합니다.",
      "입장 바우처 €8은 서적 구매 시 할인으로 적용됩니다.",
      "포르투갈어·영어 서적 모두 구비되어 있습니다.",
    ],
  },
  "portugal/porto-north/porto/dom-luis-i-bridge": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "1886년 완공된 2층 구조의 철제 아치교로, 에펠의 제자 테오필 세이리그가 설계했습니다. 상층은 메트로와 보행자, 하층은 차량이 통행하며, 포르투의 가장 상징적인 랜드마크입니다.",
    history: "1881~1886년에 건설되었으며, 총 길이 395m, 높이 44.6m의 철제 아치교입니다. 구스타브 에펠의 제자 테오필 세이리그가 설계하여 당시 세계 최대 규모의 철제 아치교였습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Ponte Luís I, Porto / Vila Nova de Gaia",
    },
    highlights: [
      "상층 보행로에서 도우루 강과 리베이라 전경 조망",
      "일몰 시 황금빛으로 물드는 포르투 스카이라인",
      "가이아 쪽에서 바라본 다리와 포르투 구시가 전경",
      "야간 조명이 켜진 다리의 낭만적인 풍경",
    ],
    nearbyAttractions: ["리베이라 지구", "빌라 노바 드 가이아 와인 셀러", "세라 두 필라르 수도원 전망대"],
    photoTips: "일몰 시 가이아 쪽 강변에서 다리와 포르투 구시가를 함께 담으면 최고의 사진을 얻을 수 있습니다.",
    tips: [
      "상층 보행로는 바람이 강할 수 있으니 주의하세요.",
      "일몰 30분 전에 상층에 자리 잡으면 최고의 뷰를 즐길 수 있습니다.",
      "상층은 메트로 D라인이 지나가므로 보행 시 주의하세요.",
    ],
  },
  "portugal/porto-north/porto/ribeira-district": {
    heroGradient: "from-orange-500 to-rose-700",
    description: "도우루 강변의 유네스코 세계유산 지구로, 다채로운 색상의 중세 건물들이 강변을 따라 늘어서 있습니다. 포르투의 역사적 심장부이자 가장 포토제닉한 지역입니다.",
    history: "중세부터 포르투의 상업 중심지였으며, 와인 운반선(라벨루)이 도우루 강을 오가던 곳입니다. 1996년 유네스코 세계유산으로 등재되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 지구)",
      admission: "무료",
      address: "Cais da Ribeira, Porto",
    },
    highlights: [
      "다채로운 중세 건물이 늘어선 강변 풍경",
      "리베이라 광장의 야외 카페와 레스토랑",
      "전통 라벨루(와인 운반선) 전시",
      "동 루이스 1세 다리를 배경으로 한 야경",
    ],
    nearbyAttractions: ["동 루이스 1세 다리", "상 프란시스쿠 교회", "볼사 궁전", "빌라 노바 드 가이아"],
    photoTips: "도우루 강 건너편 가이아에서 리베이라 전체를 파노라마로 담을 수 있습니다.",
    tips: [
      "강변 레스토랑은 관광지 가격이니 골목 안쪽의 현지 식당을 추천합니다.",
      "야경이 아름다우니 저녁 산책을 꼭 하세요.",
      "여름 저녁에는 거리 공연이 펼쳐집니다.",
    ],
  },

  // ===== DOURO VALLEY =====
  "portugal/porto-north/douro-valley/douro-valley-wine-cruise": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "도우루 강을 따라 계단식 포도밭과 퀸타(와이너리)를 감상하는 크루즈입니다. 세계 최초의 공식 와인 산지의 아름다운 풍경 속에서 포트 와인을 시음하는 특별한 경험입니다.",
    history: "도우루 강은 수세기 동안 포트 와인을 포르투로 운반하는 교역로였습니다. 과거 라벨루 배가 오가던 이 수로는 현재 관광 크루즈의 명소가 되었습니다.",
    visitInfo: {
      hours: "대부분 오전 8~9시 출발, 1일 투어 (계절별 상이)",
      admission: "1일 크루즈 €60~120 (와인 시음 포함)",
      address: "출발: Porto Ribeira 또는 Peso da Régua",
      website: "https://www.visitportoandnorth.travel",
    },
    highlights: [
      "계단식 포도밭 사이를 유유히 흐르는 크루즈",
      "퀸타(와이너리) 방문 및 포트 와인 시음",
      "피냥, 레구아 등 도우루 마을 정차",
      "수문(댐) 통과 체험",
    ],
    nearbyAttractions: ["피냥 기차역", "퀸타 와이너리", "레구아 도우루 박물관"],
    photoTips: "크루즈 갑판에서 양쪽 계단식 포도밭을 파노라마로 담으세요. 오후 빛이 가장 아름답습니다.",
    tips: [
      "포르투에서 출발하는 1일 투어가 가장 편리합니다.",
      "크루즈+기차 왕복 콤보가 경제적이고 효율적입니다.",
      "수확철(9~10월)에 방문하면 포도밭이 가장 아름답습니다.",
    ],
  },

  // ===== LAGOS =====
  "portugal/algarve/lagos/ponta-da-piedade": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "알가르브 해안을 대표하는 황금빛 석회암 절벽과 해식 동굴 군락입니다. 투명한 에메랄드빛 바다와 기묘한 암석 아치가 어우러져 포르투갈에서 가장 장관인 자연경관으로 꼽힙니다.",
    history: "수백만 년에 걸친 파도와 바람의 침식으로 형성된 석회암 해안 지형입니다. 대항해시대에는 선원들의 항해 이정표 역할을 했습니다.",
    visitInfo: {
      hours: "절벽 산책로: 24시간, 보트 투어: 09:00~18:00 (계절별 변동)",
      admission: "절벽 산책로 무료, 보트 동굴 투어 €20~25",
      address: "Ponta da Piedade, Lagos, Algarve",
    },
    highlights: [
      "황금빛 석회암 절벽과 해식 아치",
      "보트로 탐험하는 숨겨진 동굴과 그로토",
      "절벽 위 산책로에서 내려다본 에메랄드빛 바다",
      "등대와 계단을 통해 내려가는 해변",
    ],
    nearbyAttractions: ["카밀루 해변", "라구스 구시가지", "도나 아나 해변", "마리나 드 라구스"],
    photoTips: "오전 빛이 절벽의 황금빛을 가장 잘 살려줍니다. 보트 위에서 아치 사이로 올려다보며 촬영하면 극적인 사진을 얻을 수 있습니다.",
    tips: [
      "절벽 위 산책로는 울타리가 없는 구간이 있으니 안전에 주의하세요.",
      "보트 투어는 마리나에서 출발하며 약 1시간 소요됩니다.",
      "파도가 높은 날에는 보트 투어가 취소될 수 있습니다.",
      "카약 투어도 가능하며, 동굴 안까지 들어갈 수 있습니다.",
    ],
  },

  // ===== FARO =====
  "portugal/algarve/faro/ria-formosa-natural-park": {
    heroGradient: "from-teal-400 to-blue-700",
    description: "알가르브 해안을 따라 60km에 걸쳐 펼쳐진 석호와 습지 자연공원입니다. 플라밍고, 카멜레온 등 다양한 야생동물이 서식하며, 보트 투어로 한적한 섬 해변을 방문할 수 있습니다.",
    history: "1987년 자연공원으로 지정되었으며, 포르투갈 7대 자연경관 중 하나입니다. 5개의 방파섬(barrier island)이 석호를 대서양으로부터 보호하고 있습니다.",
    visitInfo: {
      hours: "공원 24시간, 보트 투어 09:00~17:00 (계절별 변동)",
      admission: "공원 입장 무료, 보트 투어 €15~30",
      address: "Ria Formosa, Faro, Algarve",
      website: "https://www.natural.pt",
    },
    highlights: [
      "플라밍고와 다양한 바다새 관찰",
      "데세르타 섬의 한적한 백사장 해변",
      "조개잡이 체험과 해산물 시식",
      "석호의 잔잔한 수면 위 카약 투어",
    ],
    nearbyAttractions: ["파루 대성당", "파루 구시가지", "올량 해변", "타비라"],
    photoTips: "일출이나 일몰 시간에 석호 위의 플라밍고를 촬영하면 환상적인 사진을 얻을 수 있습니다.",
    tips: [
      "보트 투어는 파루 마리나에서 출발하며 반나절이면 충분합니다.",
      "데세르타 섬 해변은 시설이 없으니 물과 간식을 준비하세요.",
      "조류 관찰은 이른 아침이 가장 좋습니다.",
    ],
  },

  // ===== CASCAIS =====
  "portugal/lisbon-region/cascais/boca-do-inferno": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "'지옥의 입'이라는 이름의 해안 절벽 동굴로, 거센 파도가 좁은 동굴에 부딪히며 굉음과 물보라를 일으킵니다. 카스카이스에서 도보로 접근 가능한 자연 명소입니다.",
    history: "수천 년간 대서양 파도의 침식으로 형성된 해안 동굴입니다. 19세기 알리스터 크로울리가 이곳에서 자신의 죽음을 위장한 에피소드로도 유명합니다.",
    visitInfo: {
      hours: "24시간 개방 (야외)",
      admission: "무료",
      address: "Boca do Inferno, Cascais",
    },
    highlights: [
      "파도가 동굴에 부딪히며 일으키는 물보라와 굉음",
      "절벽 위에서 내려다보는 대서양 전경",
      "주변 해안 산책로",
      "기념품 가판대와 카페",
    ],
    nearbyAttractions: ["카스카이스 구시가지", "기슈 해변", "카스트루 기마랑이스 박물관"],
    photoTips: "파도가 높은 날 방문하면 물보라가 절벽 위까지 솟아오르는 극적인 장면을 담을 수 있습니다.",
    tips: [
      "카스카이스 중심부에서 해안 산책로를 따라 도보 약 20분입니다.",
      "파도가 높은 날이 가장 장관이지만 안전 거리를 유지하세요.",
      "무료 관람이니 카스카이스 방문 시 꼭 들러보세요.",
    ],
  },

  // ===== BRAGA =====
  "portugal/porto-north/braga/bom-jesus-do-monte": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "581개 바로크 계단이 산 정상의 성당까지 이어지는 장엄한 성지입니다. 계단 곳곳의 분수, 예배당, 조각상이 '오감'과 '덕목'을 상징하며, 2019년 유네스코 세계유산으로 등재되었습니다.",
    history: "14세기부터 순례지였으며, 현재의 바로크 계단은 1722년부터 건설되기 시작했습니다. 1882년에는 세계에서 가장 오래된 수력 푸니쿨라가 설치되었습니다.",
    visitInfo: {
      hours: "공원: 24시간, 성당: 08:00~18:00, 푸니쿨라: 09:00~19:00",
      admission: "계단/성당 무료, 푸니쿨라 편도 €2",
      address: "Bom Jesus do Monte, 4715-056 Braga",
      website: "https://www.bomjesus.pt",
    },
    highlights: [
      "581개 지그재그 바로크 계단과 분수",
      "오감의 계단 (시각, 청각, 후각, 미각, 촉각 분수)",
      "정상 성당과 브라가 시내 파노라마 전망",
      "1882년 수력 푸니쿨라 (현존 세계 최고(最古))",
    ],
    nearbyAttractions: ["사메이루 성소", "브라가 대성당", "비스카인호스 궁전"],
    photoTips: "계단 아래에서 올려다보며 지그재그 전체를 담는 앵글이 가장 인상적입니다. 드론 촬영도 허용됩니다.",
    tips: [
      "581개 계단이 힘들면 수력 푸니쿨라(€2)를 이용하세요.",
      "정상에서 내려오면서 계단을 감상하는 것도 좋은 방법입니다.",
      "사메이루 성소와 묶어서 방문하면 효율적입니다.",
      "부활절 기간에는 성대한 종교 행사가 열립니다.",
    ],
  },
};
