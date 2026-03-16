import type { CityDetail, AttractionDetail } from "../city-details";

export const romaniaCityDetails: Record<string, CityDetail> = {
  // ===== TRANSYLVANIA =====
  "romania/transylvania/brasov": {
    heroGradient: "from-slate-600 to-slate-900",
    description: "카르파티아 산맥에 둘러싸인 트란실바니아 여행의 거점 도시. 13세기 독일 상인들이 건설한 중세 요새 도시로, 고딕 양식의 흑교회와 아름다운 스파톨루이 광장이 중심에 있습니다. 브란 성(드라큘라 성)과 시나이아 펠레슈 성 방문의 기점이기도 합니다.",
    bestTime: "5~9월 (12~2월 스키 시즌)",
    stayArea: "스파톨루이 광장 주변 구시가지",
    transport: "도보 (구시가지) / 시내버스 / 렌터카",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "성벽으로 둘러싸인 중세 상인 도시의 중심부. 흑교회, 스파톨루이 광장, 로프 거리 등 주요 명소가 밀집.", highlights: ["흑교회", "스파톨루이 광장", "로프 거리", "구시청사"] },
      { name: "스케이 지구", nameEn: "Schei", description: "독일 상인이 지배한 구시가지 밖에 루마니아인이 거주하던 역사적 지구.", highlights: ["성 니콜라에 교회", "최초의 루마니아어 학교", "스케이 문"] },
      { name: "탐파 산", nameEn: "Tampa Mountain", description: "구시가지를 내려다보는 해발 960m의 산. 케이블카 또는 하이킹으로 정상에 오를 수 있습니다.", highlights: ["케이블카", "정상 전망대", "브라쇼프 사인(헐리우드 스타일)"] },
    ],
    attractions: [
      { name: "흑교회", nameEn: "Black Church", description: "트란실바니아 최대의 고딕 양식 교회. 1689년 대화재로 외벽이 그을려 '흑교회'라는 이름이 붙었습니다. 119개의 아나톨리아 카펫 컬렉션이 유명합니다.", category: "종교", tip: "여름에는 주 3회 파이프 오르간 콘서트가 열립니다." },
      { name: "브란 성 (드라큘라 성)", nameEn: "Bran Castle", description: "브람 스토커의 드라큘라 소설에 영감을 준 것으로 알려진 14세기 산성. 카르파티아 산맥 고갯길을 지키는 요새입니다.", category: "역사", tip: "브라쇼프에서 버스로 약 30분. 아침 일찍 방문하면 인파를 피할 수 있습니다." },
      { name: "탐파 산", nameEn: "Tampa Mountain", description: "구시가지를 감싸는 석회암 산으로 정상에서 브라쇼프와 카르파티아 산맥의 장관을 감상할 수 있습니다.", category: "자연", tip: "케이블카(10분)를 타거나 도보(약 40분)로 올라갈 수 있습니다." },
      { name: "스파톨루이 광장", nameEn: "Piața Sfatului", description: "브라쇼프 구시가지의 중심 광장. 구시청사, 흑교회, 레스토랑과 카페가 둘러싸고 있습니다.", category: "광장" },
      { name: "펠레슈 성", nameEn: "Peleș Castle", description: "시나이아에 위치한 네오르네상스 양식의 왕궁. 루마니아에서 가장 아름다운 성으로 160개 방의 호화로운 내부가 인상적입니다.", category: "궁전", tip: "브라쇼프에서 기차로 약 45분. 화요일 휴관." },
    ],
    dayTrips: [
      { name: "브란 성", nameEn: "Bran Castle", description: "드라큘라 전설의 성. 14세기 산성으로 중세 무기와 갑옷이 전시되어 있습니다.", travelTime: "버스 약 30분", gradient: "from-slate-700 to-red-900" },
      { name: "시나이아 (펠레슈 성)", nameEn: "Sinaia (Peleș Castle)", description: "카르파티아의 진주로 불리는 산악 리조트 마을. 펠레슈 성은 루마니아 최고의 궁전.", travelTime: "기차 약 45분", gradient: "from-emerald-500 to-green-800" },
      { name: "시기쇼아라", nameEn: "Sighișoara", description: "유네스코 세계유산 중세 요새 도시. 드라큘라 블라드 체페슈의 생가가 있습니다.", travelTime: "기차 약 2.5시간", gradient: "from-amber-600 to-red-800" },
    ],
    localFood: [
      { name: "사르말레", description: "양배추잎에 고기와 쌀을 넣어 말아 끓인 루마니아 대표 음식. 사워크림과 함께.", emoji: "🥬" },
      { name: "미티테이", description: "향신료를 넣은 구운 다진 고기 소시지. 머스타드와 함께 먹습니다.", emoji: "🌭" },
      { name: "코조낙", description: "건포도와 견과류를 넣은 달콤한 전통 빵.", emoji: "🍞" },
      { name: "팔린카", description: "자두, 배 등 과일로 만든 루마니아 전통 증류주.", emoji: "🥃" },
    ],
    tips: [
      "브라쇼프는 트란실바니아 여행의 최적의 거점입니다. 3~4박 머물며 주변을 탐방하세요.",
      "브란 성은 관광지화되어 있으므로 실제 역사적 가치는 펠레슈 성이 더 높습니다.",
      "겨울에는 포이아나 브라쇼프 스키장이 근처에 있어 스키 여행도 가능합니다.",
      "탐파 산 케이블카는 월요일에 정비로 운휴할 수 있으니 확인하세요.",
      "루마니아 물가는 서유럽의 1/2~1/3 수준으로 매우 합리적입니다.",
    ],
  },
  "romania/transylvania/sighisoara": {
    heroGradient: "from-amber-600 to-red-800",
    description: "유네스코 세계유산으로 지정된 유럽에서 가장 잘 보존된 중세 요새 도시 중 하나. 드라큘라의 실제 모델인 블라드 3세(블라드 체페슈)가 1431년에 태어난 곳으로, 성벽과 9개의 감시탑이 14세기 모습 그대로 남아 있습니다.",
    bestTime: "5~9월 (7월 중세 축제)",
    stayArea: "요새 내부 (성채 지구)",
    transport: "도보 (성채 내부)",
    districts: [
      { name: "성채 (요새 도시)", nameEn: "Citadel", description: "성벽으로 둘러싸인 중세 상부 도시. 시계탑, 블라드 드라큘라 생가, 교회가 밀집.", highlights: ["시계탑", "블라드 드라큘라 생가", "학자의 계단", "산 위 교회"] },
      { name: "하부 도시", nameEn: "Lower Town", description: "요새 아래의 구시가지로 루마니아인 거주 지역이었던 곳.", highlights: ["정교회 성당", "전통 시장", "강변 산책로"] },
    ],
    attractions: [
      { name: "시계탑", nameEn: "Clock Tower", description: "시기쇼아라의 상징인 64m 높이의 14세기 탑. 매시 정각에 나무 인형이 나와 움직이며 내부에 역사 박물관이 있습니다.", category: "역사", tip: "꼭대기 전망대에서 요새 전체와 트란실바니아 평원이 한눈에 보입니다." },
      { name: "블라드 드라큘라 생가", nameEn: "Vlad Dracula's Birthplace", description: "블라드 3세(체페슈)가 1431년에 태어난 집. 현재는 레스토랑으로 운영되며 2층에 작은 전시가 있습니다.", category: "역사", tip: "건물 외벽의 플라크를 확인하세요. 내부 레스토랑에서 식사도 가능합니다." },
      { name: "학자의 계단", nameEn: "Scholars' Stairway", description: "1642년에 만들어진 175개 목조 계단으로 겨울에 눈이 쌓여도 학생들이 산 위 학교에 다닐 수 있도록 지붕을 덮었습니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "비에르탄 요새 교회", nameEn: "Biertan Fortified Church", description: "유네스코 세계유산 색소니아인 요새 교회. 3겹 성벽으로 둘러싸여 있습니다.", travelTime: "차량 약 30분", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "치오르바 데 부르타", description: "소 위(트리프)로 만든 루마니아 전통 사워 수프.", emoji: "🍲" },
      { name: "마마리가", description: "옥수수 가루로 만든 폴렌타. 치즈와 사워크림을 곁들입니다.", emoji: "🌽" },
    ],
    tips: [
      "매년 7월 마지막 주에 열리는 중세 축제(Medieval Festival)가 하이라이트입니다.",
      "성채 내부에 숙소를 잡으면 야간의 고요한 중세 분위기를 즐길 수 있습니다.",
      "시기쇼아라는 소도시이므로 반나절~하루면 충분히 둘러볼 수 있습니다.",
      "브라쇼프에서 기차로 약 2.5시간, 시비우에서 약 2시간 거리입니다.",
    ],
  },
  // ===== BUCHAREST =====
  "romania/bucharest/bucharest": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "한때 '발칸의 작은 파리'로 불린 루마니아의 수도. 세계에서 두 번째로 큰 행정 건물인 국민의 궁전, 벨에포크 시대의 건축, 활기찬 구시가지 나이트라이프가 공존하는 역동적인 도시입니다.",
    bestTime: "4~10월",
    stayArea: "구시가지(리포바니 지구) 또는 유니리이 대로 주변",
    transport: "지하철 / 버스 / 트램",
    districts: [
      { name: "구시가지", nameEn: "Old Town (Lipscani)", description: "부쿠레슈티의 나이트라이프와 레스토랑 중심지. 좁은 골목에 바, 클럽, 레스토랑이 밀집.", highlights: ["리포바니 거리", "스타브로폴레오스 교회", "카루쿠베레 맥주홀", "마네스터레 인 골목"] },
      { name: "유니리이", nameEn: "Unirii", description: "국민의 궁전과 유니리이 대로가 있는 사회주의 시대 건축의 중심지.", highlights: ["국민의 궁전", "유니리이 광장", "유니리이 분수 쇼"] },
      { name: "북부 (헤러스트러우)", nameEn: "Northern Bucharest", description: "헤러스트러우 공원과 마을 박물관이 있는 녹지 지역. 고급 레스토랑과 카페도 밀집.", highlights: ["헤러스트러우 공원", "마을 박물관", "개선문", "자연사 박물관"] },
    ],
    attractions: [
      { name: "국민의 궁전", nameEn: "Palace of the Parliament", description: "세계에서 두 번째로 큰 행정 건물(미 펜타곤 다음). 차우셰스쿠가 1984년 착공한 거대한 사회주의 건축물로 1,100개의 방이 있습니다.", category: "건축", tip: "내부 투어는 사전 예약 필수이며 여권 지참이 필요합니다." },
      { name: "마을 박물관", nameEn: "Village Museum", description: "헤러스트러우 공원 내에 위치한 야외 민속 박물관. 루마니아 전국의 전통 가옥 300여 채가 재현되어 있습니다.", category: "박물관", tip: "봄~가을에 방문하면 야외에서 전통 행사를 체험할 수 있습니다." },
      { name: "스타브로폴레오스 교회", nameEn: "Stavropoleos Church", description: "1724년 건축된 브란코비아 양식의 소교회. 구시가지 한가운데에서 고요한 아름다움을 간직하고 있습니다.", category: "종교" },
      { name: "구시가지 (리포바니)", nameEn: "Old Town (Lipscani)", description: "18~19세기 상인 거리를 복원한 부쿠레슈티의 유흥 지구. 저녁이면 바와 레스토랑이 활기를 띱니다.", category: "거리", tip: "주말 저녁에 가장 활기찹니다. 카루쿠베레(Caru' cu Bere)는 1879년 개업한 전설적 맥주홀입니다." },
      { name: "헤러스트러우 공원", nameEn: "Herăstrău Park", description: "부쿠레슈티 북부의 대형 호수 공원. 보트, 산책, 자전거를 즐길 수 있는 시민의 휴식처.", category: "자연" },
    ],
    dayTrips: [
      { name: "시나이아", nameEn: "Sinaia", description: "카르파티아의 진주. 네오르네상스 양식의 펠레슈 성이 루마니아에서 가장 아름다운 궁전.", travelTime: "기차 약 1.5시간", gradient: "from-emerald-500 to-green-800" },
      { name: "스나고프 수도원", nameEn: "Snagov Monastery", description: "블라드 체페슈(드라큘라)가 묻혀 있다고 전해지는 호수 위의 수도원.", travelTime: "차량 약 40분", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "치오르바 데 부르타", description: "소 위로 만든 루마니아식 사워 수프. 신맛과 매운맛이 조화롭습니다.", emoji: "🍲" },
      { name: "미치 (미티테이)", description: "다진 고기에 향신료를 넣어 구운 소시지형 그릴. 머스타드와 빵과 함께.", emoji: "🌭" },
      { name: "마마리가", description: "옥수수 가루로 만든 루마니아식 폴렌타. 치즈와 사워크림을 곁들입니다.", emoji: "🌽" },
      { name: "팔린카", description: "과일(자두, 배, 살구)로 만든 전통 증류주. 식전주로 즐깁니다.", emoji: "🥃" },
    ],
    tips: [
      "국민의 궁전 투어는 사전 예약 필수입니다. 여권을 꼭 지참하세요.",
      "부쿠레슈티 교통은 혼잡하므로 지하철 이용을 추천합니다.",
      "구시가지(리포바니) 주변은 낮에는 조용하지만 저녁부터 활기를 띱니다.",
      "루마니아 레이(RON) 환전은 시내 환전소가 은행보다 유리한 경우가 많습니다.",
      "부쿠레슈티에서 브라쇼프까지 기차로 약 2.5시간이며 트란실바니아 여행의 관문입니다.",
    ],
  },
};

export const romaniaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BRAN CASTLE =====
  "romania/transylvania/brasov/bran-castle": {
    heroGradient: "from-slate-700 to-red-900",
    description: "트란실바니아의 카르파티아 산맥 고갯길을 지키는 14세기 산성. 브람 스토커의 소설 <드라큘라>에 영감을 준 것으로 알려져 '드라큘라 성'이라는 별명이 붙었습니다. 실제로는 블라드 체페슈와의 역사적 연관은 제한적이지만, 중세 루마니아 건축과 산악 풍경이 인상적입니다.",
    history: "1377년 트란실바니아의 색소니아인들이 오스만 제국의 침입을 방어하기 위해 건설했습니다. 1920~1948년 루마니아 왕실의 여름 별궁으로 사용되었으며, 현재 마리아 왕비의 유품이 전시되어 있습니다.",
    visitInfo: { hours: "09:00~18:00 (계절별 변동, 월요일 12:00~)", admission: "50 RON (약 $11)", address: "Strada General Traian Moșoiu 24, Bran 507025", website: "https://www.bfrmuseum.ro" },
    highlights: ["미로 같은 좁은 계단과 비밀 통로", "마리아 왕비의 왕실 유품 전시", "성 꼭대기에서 카르파티아 산맥 전경", "드라큘라 테마 기념품 시장"],
    nearbyAttractions: ["브라쇼프 구시가지", "라슈노프 요새", "포이아나 브라쇼프 스키장", "제르네슈티 곰 보호소"],
    photoTips: "성 아래 기념품 시장 쪽에서 올려다보는 앵글이 가장 드라마틱합니다. 내부 좁은 계단과 창을 통해 보이는 산 풍경도 촬영 포인트.",
    tips: [
      "브라쇼프에서 버스(autobuz)로 약 30분. 오전 9시 개장 직후 방문을 추천합니다.",
      "실제 '드라큘라'보다는 마리아 왕비 관련 역사가 중심이므로 기대치를 조정하세요.",
      "성 주변 기념품 시장에서 루마니아 전통 공예품을 저렴하게 구입할 수 있습니다.",
      "할로윈 시즌(10월)에는 특별 야간 이벤트가 열립니다.",
    ],
  },
  // ===== PELES CASTLE =====
  "romania/transylvania/brasov/peles-castle": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "카르파티아 산맥의 시나이아에 위치한 루마니아에서 가장 아름다운 궁전. 네오르네상스 양식으로 1873~1914년에 건축되었으며, 160개 방에 걸쳐 무라노 유리, 독일 스테인드글라스, 터키 카펫 등 유럽 각지의 최고급 장식이 펼쳐집니다.",
    history: "루마니아 초대 왕 카롤 1세가 1873년부터 건설을 시작한 여름 별궁입니다. 중앙 유럽에서 최초로 전기와 중앙 난방이 설치된 성으로, 루마니아 왕실의 자부심이었습니다.",
    visitInfo: { hours: "09:15~17:00 (수~일) / 화요일 휴관, 월요일 일부 기간 휴관", admission: "50 RON (1층) / 100 RON (1+2층)", address: "Aleea Peleșului 2, Sinaia 106100", website: "https://pfrmuseum.ro" },
    highlights: ["대홀의 호두나무 조각과 무라노 유리 천장", "무어 양식 연기실(흡연실)", "무기 전시실 (4,000점 이상)", "프레스코화가 가득한 극장홀", "카르파티아 산맥 배경의 궁전 외관"],
    nearbyAttractions: ["펠리쇼르 성 (인접)", "시나이아 수도원", "부체지 산맥 하이킹", "브라쇼프 구시가지"],
    photoTips: "궁전 정면 정원에서 산을 배경으로 찍는 전경이 엽서 같은 완벽한 사진입니다. 내부 대홀의 호두나무 계단도 인기 촬영 포인트.",
    tips: [
      "화요일 휴관이므로 방문일을 반드시 확인하세요.",
      "내부 사진 촬영은 추가 요금(35 RON)이 있습니다.",
      "브라쇼프에서 기차로 약 45분. 시나이아역에서 도보 약 20분입니다.",
      "펠레슈 성 방문 후 바로 옆 펠리쇼르 성도 함께 보세요 (아르누보 양식).",
    ],
  },
  // ===== PALACE OF THE PARLIAMENT =====
  "romania/bucharest/bucharest/palace-of-the-parliament": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "세계에서 두 번째로 큰 행정 건물(미국 펜타곤 다음)이자 세계에서 가장 무거운 건물. 니콜라에 차우셰스쿠가 1984년 착공하여 약 20,000명의 노동자가 동원되었으며, 1,100개의 방, 12층(지하 8층 포함), 면적 365,000m2에 달합니다.",
    history: "1984~1997년 건설된 사회주의 시대의 거대주의 건축물입니다. 부쿠레슈티 역사 지구의 1/5이 이 건물을 위해 철거되었으며, 루마니아 대리석과 호두나무만을 사용하여 건축되었습니다.",
    visitInfo: { hours: "09:00~17:00 (연중무휴, 가이드 투어만 가능)", admission: "40 RON (일반) / 사진 촬영 30 RON 추가", address: "Strada Izvor 2-4, Bucharest 050563", website: "https://cfrmuseum.ro" },
    highlights: ["대회의장 (2,000석, 유럽 최대)", "유니온 홀의 거대한 크리스탈 샹들리에 (무게 5톤)", "루마니아 대리석으로 마감된 끝없는 복도", "옥상 테라스에서 유니리이 대로 전경"],
    nearbyAttractions: ["유니리이 광장", "구시가지 (리포바니)", "이즈보르 공원", "스타브로폴레오스 교회"],
    photoTips: "건물 정면에서 유니리이 대로를 함께 담는 앵글과 옥상 테라스에서 내려다보는 부쿠레슈티 전경이 압권입니다.",
    tips: [
      "가이드 투어(약 1시간)로만 입장 가능하며, 사전 예약을 강력 추천합니다.",
      "여권 지참이 필수이며 보안 검색을 받습니다.",
      "건물의 약 70%만 사용되고 있으며 나머지는 아직 미완성 상태입니다.",
      "옥상 테라스 투어는 별도 요금이지만 부쿠레슈티 전경이 탁월합니다.",
    ],
  },
};
