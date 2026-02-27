import type { CityDetail, AttractionDetail } from "../city-details";

export const israelCityDetails: Record<string, CityDetail> = {
  // ===== JERUSALEM =====
  "israel/jerusalem/jerusalem": {
    heroGradient: "from-amber-500 to-yellow-800",
    description: "세계 3대 종교의 성지이자 3,000년 역사의 도시. 구시가지의 통곡의 벽, 성묘교회, 바위의 돔이 한 공간에 공존하며, 야드바셈 홀로코스트 기념관 등 깊은 역사와 감동을 선사합니다.",
    bestTime: "3~5월, 9~11월 (여름은 매우 더움)",
    stayArea: "야포 게이트 주변 / 마미야 아베뉴",
    transport: "경전철, 버스 (라브카브 교통카드)",
    districts: [
      { name: "구시가지", nameEn: "Old City", description: "유대, 기독교, 무슬림, 아르메니아 4개 구역으로 나뉜 성벽 안 역사 지구.", highlights: ["통곡의 벽", "성묘교회", "바위의 돔", "비아 돌로로사"] },
      { name: "서예루살렘", nameEn: "West Jerusalem", description: "현대적인 시가지로 야드바셈, 이스라엘 박물관 등 주요 문화시설 밀집.", highlights: ["야드바셈", "이스라엘 박물관", "마하네 예후다 시장"] },
      { name: "감람산", nameEn: "Mount of Olives", description: "예수의 승천 전설이 깃든 언덕으로 구시가지 최고의 파노라마 전망.", highlights: ["겟세마네 동산", "만국교회", "유대인 묘지"] },
    ],
    attractions: [
      { name: "통곡의 벽", nameEn: "Western Wall", description: "제2성전의 유일한 잔존 벽으로 유대교 최고의 성지.", category: "성지", tip: "남녀 구역이 분리되어 있으며, 입장 시 모자(남성)를 착용하세요." },
      { name: "성묘교회", nameEn: "Church of the Holy Sepulchre", description: "예수의 십자가 처형과 부활 장소에 세워진 기독교 최고의 성지.", category: "성당", tip: "새벽 시간대에 방문하면 조용히 참배할 수 있습니다." },
      { name: "바위의 돔", nameEn: "Dome of the Rock", description: "황금 돔이 상징적인 이슬람 3대 성지. 무슬림만 내부 입장 가능합니다.", category: "성지", tip: "비무슬림은 성전산 방문 시간이 제한적이니 사전 확인 필수." },
      { name: "야드바셈", nameEn: "Yad Vashem", description: "홀로코스트 600만 희생자를 추모하는 세계 최대 규모의 기념관.", category: "기념관", tip: "최소 2~3시간 소요. 무료 입장이지만 감정적으로 힘들 수 있으니 준비하세요." },
      { name: "마하네 예후다 시장", nameEn: "Mahane Yehuda Market", description: "250개 이상의 상점이 모인 예루살렘 최대 재래시장.", category: "시장" },
      { name: "비아 돌로로사", nameEn: "Via Dolorosa", description: "예수가 십자가를 지고 걸었다고 전해지는 14개 고난의 길.", category: "역사" },
    ],
    dayTrips: [
      { name: "베들레헴", nameEn: "Bethlehem", description: "예수 탄생지인 성탄교회가 있는 팔레스타인 도시.", travelTime: "버스 약 30분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "후무스", description: "병아리콩 페이스트에 올리브유와 타히니를 곁들인 중동 대표 요리.", emoji: "🫘" },
      { name: "팔라펠", description: "병아리콩 튀김볼을 피타 빵에 넣은 이스라엘 국민 간식.", emoji: "🧆" },
      { name: "샥슈카", description: "토마토 소스에 달걀을 풀어 끓인 이스라엘식 아침 요리.", emoji: "🍳" },
    ],
    tips: [
      "금요일 오후~토요일(안식일)에는 대부분의 상점과 대중교통이 운행을 멈춥니다.",
      "구시가지 방문 시 어깨와 무릎을 덮는 단정한 복장이 필요합니다.",
      "마하네 예후다 시장은 목요일 밤에 바와 레스토랑이 열려 색다른 분위기를 즐길 수 있습니다.",
      "수돗물은 마실 수 있지만 생수를 구매하는 것이 일반적입니다.",
    ],
  },

  // ===== TEL AVIV =====
  "israel/tel-aviv/tel-aviv": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "지중해 해변과 바우하우스 건축의 '화이트 시티'가 공존하는 이스라엘의 경제·문화 수도. 활기찬 나이트라이프, 트렌디한 카페, 그리고 고대 항구도시 야포의 매력까지 함께 즐길 수 있습니다.",
    bestTime: "4~6월, 9~11월 (여름은 습하고 더움)",
    stayArea: "로스차일드 대로 / 해변가 호텔 지구",
    transport: "버스, 공유 자전거(텔오펀), 경전철",
    districts: [
      { name: "야포 구시가지", nameEn: "Old Jaffa", description: "4,000년 역사의 고대 항구도시로 갤러리와 레스토랑이 가득한 아름다운 골목.", highlights: ["야포 시계탑", "성 베드로 교회", "소원의 다리", "야포 벼룩시장"] },
      { name: "화이트 시티", nameEn: "White City", description: "UNESCO 세계유산인 4,000여 채의 바우하우스 건축물이 밀집한 지역.", highlights: ["로스차일드 대로", "디젠고프 광장", "바우하우스 센터"] },
      { name: "카르멜 시장 주변", nameEn: "Carmel Market Area", description: "텔아비브 최대 재래시장과 나할라트 빈야민 공예 거리가 있는 활기찬 지역.", highlights: ["카르멜 시장", "나할라트 빈야민", "네베 체덱"] },
    ],
    attractions: [
      { name: "야포 구시가지", nameEn: "Jaffa Old City", description: "세계에서 가장 오래된 항구 중 하나로 예술 갤러리와 레스토랑이 가득합니다.", category: "역사 지구", tip: "일몰 시간에 방문하면 지중해의 환상적인 석양을 볼 수 있습니다." },
      { name: "카르멜 시장", nameEn: "Carmel Market", description: "텔아비브 최대 재래시장으로 신선한 과일, 향신료, 길거리 음식의 천국.", category: "시장", tip: "화~금 오전이 가장 활기찬 시간대입니다." },
      { name: "로스차일드 대로", nameEn: "Rothschild Boulevard", description: "바우하우스 건축과 카페가 줄지어 선 텔아비브의 대표 산책로.", category: "거리" },
      { name: "텔아비브 해변", nameEn: "Tel Aviv Beaches", description: "지중해를 따라 이어지는 아름다운 백사장 해변.", category: "해변", tip: "고든 비치, 프리시만 비치가 관광객에게 인기입니다." },
    ],
    dayTrips: [
      { name: "카이사리아", nameEn: "Caesarea", description: "로마 시대 원형극장과 수로가 남아있는 지중해 연안 유적지.", travelTime: "기차+버스 약 1시간", gradient: "from-amber-400 to-orange-600" },
      { name: "예루살렘", nameEn: "Jerusalem", description: "3대 종교의 성지, 텔아비브에서 당일치기 가능.", travelTime: "버스 약 1시간", gradient: "from-amber-500 to-yellow-800" },
    ],
    localFood: [
      { name: "사비흐", description: "구운 가지와 삶은 달걀을 피타 빵에 넣은 이라크계 유대인 샌드위치.", emoji: "🥙" },
      { name: "말라비", description: "장미수 향의 우유 푸딩에 피스타치오를 올린 중동 디저트.", emoji: "🍮" },
      { name: "후무스", description: "텔아비브 스타일의 크리미한 후무스, 피타와 함께.", emoji: "🫘" },
    ],
    tips: [
      "안식일(금요일 오후~토요일)에도 텔아비브는 다른 도시보다 활동적이지만 대중교통은 멈춥니다.",
      "텔오펀 공유 자전거가 시내 이동에 매우 편리합니다.",
      "야포 벼룩시장은 화~토요일에만 열립니다.",
    ],
  },

  // ===== DEAD SEA & MASADA =====
  "israel/dead-sea-south/dead-sea": {
    heroGradient: "from-teal-400 to-emerald-800",
    description: "해수면보다 430m 아래에 위치한 지구상 가장 낮은 지점. 염분 농도 34%의 물에서 자연스럽게 떠오르는 독특한 체험과 미네랄 머드 팩으로 유명한 세계적인 자연 명소입니다.",
    bestTime: "10~4월 (여름은 50°C 이상 극심한 더위)",
    stayArea: "에인 보켁 리조트 지구",
    transport: "예루살렘/텔아비브에서 버스 (자가용 추천)",
    districts: [
      { name: "에인 보켁", nameEn: "Ein Bokek", description: "사해 남쪽의 주요 리조트 지구로 무료 공공 해변과 호텔 밀집.", highlights: ["공공 해변", "리조트 호텔", "미네랄 스파"] },
    ],
    attractions: [
      { name: "사해 부유 체험", nameEn: "Dead Sea Float", description: "세계에서 가장 염분이 높은 호수에서 신문을 읽으며 떠오르는 버킷리스트 체험.", category: "자연", tip: "얼굴에 물이 닿지 않게 주의하고, 면도한 피부에 매우 따갑습니다." },
      { name: "미네랄 머드 스파", nameEn: "Dead Sea Mud Spa", description: "사해 진흙을 온몸에 바르는 천연 미네랄 스파 체험.", category: "스파" },
      { name: "에인 게디 자연보호구역", nameEn: "Ein Gedi Nature Reserve", description: "사막 한가운데 오아시스 협곡으로 폭포와 야생 아이벡스를 만날 수 있습니다.", category: "자연", tip: "충분한 물을 준비하고 이른 아침에 출발하세요." },
    ],
    dayTrips: [
      { name: "마사다 요새", nameEn: "Masada Fortress", description: "헤롯 왕의 산 위 요새, 일출 등반이 유명.", travelTime: "차량 약 20분", gradient: "from-orange-500 to-red-700" },
    ],
    localFood: [
      { name: "이스라엘식 조식 뷔페", description: "신선한 샐러드, 치즈, 달걀 요리가 풍성한 리조트 아침식사.", emoji: "🥗" },
      { name: "대추야자", description: "사해 인근 키부츠에서 재배한 달콤한 메줄 대추야자.", emoji: "🌴" },
    ],
    tips: [
      "사해 물에 15~20분 이상 들어가지 마세요. 피부에 자극이 될 수 있습니다.",
      "눈과 입에 물이 들어가지 않도록 각별히 주의하세요.",
      "에인 보켁 공공 해변은 무료이며 샤워 시설이 있습니다.",
      "여름(6~8월)에는 기온이 50°C에 육박하므로 봄/가을 방문을 추천합니다.",
    ],
  },

  "israel/dead-sea-south/masada": {
    heroGradient: "from-orange-500 to-red-700",
    description: "유대 사막의 절벽 위에 세워진 헤롯 왕의 고대 요새. 로마군에 맞서 유대인 967명이 최후 항전을 벌인 비극적 역사의 현장으로, UNESCO 세계유산이자 이스라엘의 상징입니다.",
    bestTime: "10~4월 (일출 등반은 새벽 4~5시 출발)",
    stayArea: "에인 보켁 또는 아라드",
    transport: "사해에서 차량 약 20분 / 예루살렘에서 버스 약 1.5시간",
    districts: [
      { name: "마사다 정상", nameEn: "Masada Summit", description: "헤롯 왕의 궁전 유적과 360도 사막 파노라마가 펼쳐지는 요새 정상.", highlights: ["북쪽 궁전", "로마식 목욕탕", "저장고", "비잔틴 교회"] },
    ],
    attractions: [
      { name: "마사다 요새", nameEn: "Masada Fortress", description: "해발 450m 절벽 위의 고대 요새. 케이블카 또는 뱀의 길(Snake Path)로 등반 가능합니다.", category: "유적", tip: "뱀의 길 일출 등반은 새벽 4시에 시작하여 약 45분 소요. 충분한 물 필수!" },
      { name: "마사다 케이블카", nameEn: "Masada Cable Car", description: "정상까지 3분 만에 도달하는 케이블카.", category: "교통", tip: "하절기 08:00, 동절기 08:00 운행 시작." },
      { name: "마사다 사운드 & 라이트 쇼", nameEn: "Sound & Light Show", description: "마사다 서쪽에서 3~10월 화·목 밤에 열리는 멀티미디어 쇼.", category: "공연" },
    ],
    dayTrips: [
      { name: "에인 게디", nameEn: "Ein Gedi", description: "사막 속 오아시스 자연보호구역.", travelTime: "차량 약 15분", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "피타 & 후무스", description: "등반 후 든든하게 먹는 중동 기본 식사.", emoji: "🥙" },
      { name: "민트 레모네이드", description: "사막의 더위를 식혀주는 상쾌한 민트 레모네이드.", emoji: "🍋" },
    ],
    tips: [
      "일출 등반(뱀의 길)은 이스라엘 여행 최고의 경험 중 하나입니다. 반드시 체험하세요.",
      "물을 최소 2L 이상 준비하고, 모자와 선크림은 필수입니다.",
      "국립공원 입장료에 케이블카 비용은 별도입니다.",
    ],
  },

  // ===== NORTH =====
  "israel/north/haifa": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "카르멜 산 경사면을 따라 펼쳐진 이스라엘 제3의 도시. 바하이 정원의 장엄한 계단식 테라스가 지중해까지 이어지는 절경이 유명하며, 유대인·아랍인·기독교인이 조화롭게 공존하는 다문화 도시입니다.",
    bestTime: "3~5월, 9~11월",
    stayArea: "카르멜 센터 / 독일 식민지 거리",
    transport: "카르멜릿 지하 케이블카, 버스",
    districts: [
      { name: "독일 식민지", nameEn: "German Colony", description: "19세기 독일 템플러 이주민이 조성한 거리로 레스토랑과 카페가 밀집.", highlights: ["벤 구리온 대로", "바하이 정원 하단 입구"] },
      { name: "카르멜 센터", nameEn: "Carmel Center", description: "카르멜 산 정상부의 주거·상업 지역으로 전망 좋은 레스토랑이 많음.", highlights: ["루이스 산책로", "스텔라 마리스 수도원"] },
    ],
    attractions: [
      { name: "바하이 정원", nameEn: "Baha'i Gardens", description: "카르멜 산 경사면에 조성된 19단 계단식 테라스 정원. 바하이교의 성지이자 UNESCO 세계유산.", category: "정원", tip: "상단 테라스에서 시작하는 무료 가이드 투어를 예약하세요 (영어 매일 12:00)." },
      { name: "카르멜릿", nameEn: "Carmelite", description: "세계에서 가장 짧은 지하철(6개 역)로 카르멜 산을 오르내리는 독특한 교통수단.", category: "교통" },
      { name: "스텔라 마리스 수도원", nameEn: "Stella Maris Monastery", description: "카르멜 산 꼭대기의 아름다운 수도원으로 하이파 항구 전망.", category: "수도원" },
    ],
    dayTrips: [
      { name: "아코(아크레)", nameEn: "Acre (Akko)", description: "십자군 시대의 지하 도시가 남아있는 UNESCO 항구 도시.", travelTime: "기차 약 30분", gradient: "from-blue-400 to-indigo-700" },
      { name: "로쉬 하니크라", nameEn: "Rosh Hanikra", description: "레바논 국경의 하얀 석회암 해식 동굴, 케이블카로 방문.", travelTime: "차량 약 40분", gradient: "from-cyan-300 to-blue-600" },
    ],
    localFood: [
      { name: "크나페", description: "치즈를 넣은 달콤한 카다이프 디저트, 하이파의 명물.", emoji: "🧁" },
      { name: "샤와르마", description: "양고기 또는 닭고기를 회전 그릴에 구운 중동 대표 길거리 음식.", emoji: "🥙" },
      { name: "바클라바", description: "피스타치오와 꿀 시럽의 겹겹이 쌓인 페이스트리.", emoji: "🍯" },
    ],
    tips: [
      "바하이 정원은 상단에서 하단으로만 관람 가능합니다. 카르멜릿으로 올라간 후 걸어 내려오세요.",
      "금요일 오후~토요일에는 카르멜릿이 운행하지 않습니다.",
      "독일 식민지 벤 구리온 대로는 저녁에 특히 분위기 있는 레스토랑 거리입니다.",
    ],
  },
};

export const israelAttractionDetails: Record<string, AttractionDetail> = {
  // ===== JERUSALEM =====
  "israel/jerusalem/jerusalem/western-wall": {
    heroGradient: "from-amber-500 to-yellow-800",
    description: "제2성전 서쪽 외벽의 잔존 부분으로, 유대교 최고의 성지입니다. 수천 년간 유대인들이 성전 파괴를 슬퍼하며 기도해왔기에 '통곡의 벽'이라 불립니다. 돌 틈새에 소원 쪽지를 넣는 전통이 유명합니다.",
    history: "기원전 19년 헤롯 대왕이 제2성전을 확장하며 축조한 옹벽입니다. 서기 70년 로마군의 성전 파괴 후 유일하게 남은 구조물로, 유대인의 정체성과 신앙의 핵심 상징이 되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (안식일에도 방문 가능)",
      admission: "무료",
      address: "Western Wall Plaza, Old City, Jerusalem",
      website: "https://www.thekotel.org",
    },
    highlights: [
      "통곡의 벽 앞에서의 기도 체험",
      "돌 틈새에 소원 쪽지 넣기",
      "서쪽 벽 터널 가이드 투어 (사전 예약)",
      "안식일 맞이 금요일 저녁의 감동적인 기도 장면",
    ],
    nearbyAttractions: ["바위의 돔", "성묘교회", "비아 돌로로사", "유대인 구역"],
    photoTips: "광장에서 벽 전체를 촬영하거나, 기도하는 사람들의 경건한 모습을 담을 수 있습니다. 안식일에는 촬영이 제한됩니다.",
    tips: [
      "남녀 기도 구역이 분리되어 있습니다. 남성은 키파(모자)를 착용해야 하며 무료 대여 가능합니다.",
      "서쪽 벽 터널 투어는 사전 온라인 예약이 필수입니다.",
      "안식일(금요일 저녁~토요일)에는 촬영과 전자기기 사용이 제한됩니다.",
      "보안 검색을 통과해야 하므로 시간 여유를 두세요.",
    ],
  },
  "israel/jerusalem/jerusalem/church-of-the-holy-sepulchre": {
    heroGradient: "from-stone-400 to-amber-800",
    description: "예수 그리스도의 십자가 처형과 매장, 부활이 이루어진 장소에 세워진 기독교 최고의 성지. 여러 기독교 종파가 공동으로 관리하며, 성유물과 모자이크 장식이 장엄합니다.",
    history: "326년 콘스탄티누스 대제의 어머니 헬레나가 예수의 무덤을 발견하고, 335년 최초의 교회가 건립되었습니다. 이후 파괴와 재건을 반복하며 현재의 건물은 주로 12세기 십자군 시대의 구조입니다.",
    visitInfo: {
      hours: "4~9월: 05:00~21:00 / 10~3월: 04:00~19:00",
      admission: "무료",
      address: "Church of the Holy Sepulchre, Old City, Jerusalem",
      website: "https://www.custodia.org",
    },
    highlights: [
      "골고다 십자가 제단 (예수 처형 장소)",
      "에디쿨라 (예수의 무덤 위에 세워진 작은 성당)",
      "도유석 (예수의 몸에 향유를 바른 돌판)",
      "아담의 채플과 고대 채석장 유적",
    ],
    nearbyAttractions: ["비아 돌로로사", "무리스탄 광장", "알렉산드르 네프스키 교회", "에티오피아 수도원"],
    photoTips: "내부는 어두우므로 ISO를 높이거나 삼각대 없이 촬영해야 합니다. 에디쿨라 앞은 대기줄이 길 수 있습니다.",
    tips: [
      "에디쿨라(예수의 무덤) 입장은 줄이 매우 길 수 있으니 아침 일찍 방문하세요.",
      "조용하고 경건한 분위기를 유지해주세요. 복장은 어깨와 무릎이 가려져야 합니다.",
      "6개 기독교 종파가 공동 관리하며 각 구역이 다르게 장식되어 있어 다양한 전통을 체험할 수 있습니다.",
    ],
  },
  "israel/jerusalem/jerusalem/dome-of-the-rock": {
    heroGradient: "from-yellow-400 to-amber-700",
    description: "예루살렘 구시가지 성전산 위에 우뚝 솟은 황금 돔의 이슬람 성지. 이슬람 전통에서 무함마드가 승천한 바위를 보호하며, 기독교와 유대교에서도 중요한 성스러운 장소입니다.",
    history: "691년 우마이야 왕조의 칼리프 압둘 말릭이 건설했으며, 이슬람 건축의 가장 오래된 걸작 중 하나입니다. 황금 돔은 1994년 요르단 후세인 국왕이 기부한 금으로 복원되었습니다.",
    visitInfo: {
      hours: "비무슬림 방문: 일~목 07:30~10:30, 12:30~13:30 (변동 가능, 사전 확인 필수)",
      admission: "무료 (비무슬림은 내부 입장 불가, 외부 관람만 가능)",
      address: "Temple Mount, Old City, Jerusalem",
      website: "https://www.jerusalem.com",
    },
    highlights: [
      "장엄한 황금 돔과 타일 장식 외관",
      "성전산 광장에서의 구시가지 전망",
      "알아크사 모스크와 함께 관람",
      "이슬람 캘리그래피와 모자이크 장식",
    ],
    nearbyAttractions: ["통곡의 벽", "알아크사 모스크", "성묘교회", "이슬람 박물관"],
    photoTips: "아침 햇살에 황금 돔이 가장 빛나며, 감람산에서 전체 전경을 촬영하면 좋습니다.",
    tips: [
      "비무슬림 방문 시간이 매우 제한적이며, 이슬람 공휴일에는 폐쇄될 수 있습니다.",
      "입장 시 복장 규정이 엄격합니다. 긴 바지, 긴 소매를 착용하세요.",
      "코란이나 종교 서적을 반입할 수 없으며, 기도 행위도 금지됩니다.",
      "무기한 입구는 통곡의 벽 옆 무그라비 게이트(Mughrabi Gate)뿐입니다.",
    ],
  },
  "israel/jerusalem/jerusalem/yad-vashem": {
    heroGradient: "from-slate-500 to-gray-900",
    description: "홀로코스트에서 희생된 600만 유대인을 추모하는 세계 최대 규모의 기념관. 생존자의 증언, 유물, 사진, 영상을 통해 인류 역사상 가장 어두운 시기를 기록하고 기억합니다.",
    history: "1953년 이스라엘 정부가 설립한 국립 홀로코스트 추모기관입니다. 2005년 캐나다 건축가 모쉐 사프디가 설계한 새 역사박물관이 개관하여 삼각 프리즘 형태의 혁신적 전시 공간을 갖추었습니다.",
    visitInfo: {
      hours: "일~수 09:00~17:00 / 목 09:00~20:00 / 금 09:00~14:00 / 토 휴관",
      admission: "무료 (사전 온라인 예약 권장)",
      address: "Yad Vashem, Har HaZikaron, Jerusalem",
      website: "https://www.yadvashem.org",
    },
    highlights: [
      "역사박물관 삼각 프리즘 통로의 연대기적 전시",
      "이름의 전당 (확인된 희생자 이름 기록)",
      "어린이 추모관 (촛불이 반사되는 어둠 속 공간)",
      "바르샤바 게토 광장과 기억의 기둥",
    ],
    nearbyAttractions: ["헤르츨 산 국립묘지", "이스라엘 박물관", "성서 사본관"],
    photoTips: "박물관 내부는 촬영이 제한되는 구역이 있습니다. 외부 조형물과 기념비는 촬영 가능합니다.",
    tips: [
      "최소 2~3시간이 소요되며, 감정적으로 매우 강렬한 경험입니다.",
      "10세 미만 어린이는 역사박물관 입장이 제한됩니다.",
      "오디오 가이드(ILS 30)를 이용하면 더 깊이 있는 관람이 가능합니다.",
      "경전철 '야드바셈/헤르츨 산' 역에서 무료 셔틀이 운행됩니다.",
    ],
  },

  // ===== TEL AVIV =====
  "israel/tel-aviv/tel-aviv/jaffa-old-city": {
    heroGradient: "from-orange-400 to-amber-700",
    description: "4,000년 역사의 세계에서 가장 오래된 항구 도시 중 하나. 돌골목 사이로 갤러리, 공방, 레스토랑이 들어서 고대와 현대가 조화롭게 공존하며, 지중해 석양의 명소입니다.",
    history: "기원전 2000년부터 항구로 사용되었으며, 이집트·페니키아·로마·십자군·오스만 등 수많은 문명이 거쳐간 역사의 교차점입니다. 성서에서 요나가 배를 탄 항구로 알려져 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (상점/레스토랑 영업시간 개별 상이)",
      admission: "무료",
      address: "Old Jaffa, Tel Aviv-Yafo",
      website: "https://www.oldjaffa.co.il",
    },
    highlights: [
      "소원의 다리와 12궁도 골목",
      "야포 항구에서의 지중해 석양",
      "성 베드로 교회와 시계탑",
      "야포 벼룩시장 (화~토)",
    ],
    nearbyAttractions: ["야포 벼룩시장", "야포 항구", "네베 체덱", "텔아비브 해변"],
    photoTips: "일몰 시간에 항구 방파제에서 텔아비브 스카이라인과 석양을 함께 담을 수 있습니다.",
    tips: [
      "돌바닥이므로 편한 신발을 신으세요.",
      "야포 벼룩시장은 화~토에만 열리며, 금요일이 가장 활발합니다.",
      "아비스 레스토랑가 인근에 유명 해산물 레스토랑이 많습니다.",
    ],
  },
  "israel/tel-aviv/tel-aviv/carmel-market": {
    heroGradient: "from-red-400 to-orange-700",
    description: "텔아비브에서 가장 크고 활기찬 재래시장. 신선한 과일, 채소, 향신료, 견과류, 길거리 음식이 가득하며, 이스라엘의 다양한 먹거리 문화를 한자리에서 체험할 수 있습니다.",
    history: "1920년대에 시작된 텔아비브의 대표 시장으로, 100년간 시민들의 생활 중심지 역할을 해왔습니다. 최근에는 미식 투어의 명소로도 인기를 얻고 있습니다.",
    visitInfo: {
      hours: "일~목 08:00~일몰 / 금 08:00~안식일 전 / 토 휴장",
      admission: "무료",
      address: "HaCarmel Street, Tel Aviv",
      website: "https://www.carmelmarket.co.il",
    },
    highlights: [
      "갓 짜낸 석류 주스와 열대과일",
      "할바·바클라바 등 중동 디저트 시식",
      "향신료 가게에서의 향기 체험",
      "나할라트 빈야민 공예 시장 (화·금)",
    ],
    nearbyAttractions: ["나할라트 빈야민 공예 시장", "네베 체덱", "야포 구시가지", "로스차일드 대로"],
    photoTips: "컬러풀한 과일과 향신료 좌판이 가장 포토제닉합니다. 오전 중이 조명과 활기 면에서 최적.",
    tips: [
      "흥정은 가능하지만 식품 가격은 대체로 고정입니다.",
      "인접한 나할라트 빈야민 공예 시장(화·금)과 함께 방문하세요.",
      "소매치기에 주의하고 귀중품을 잘 관리하세요.",
    ],
  },

  // ===== DEAD SEA =====
  "israel/dead-sea-south/dead-sea/dead-sea-float": {
    heroGradient: "from-teal-400 to-emerald-800",
    description: "해수면 430m 아래, 염분 농도 34%의 사해에서 자연스럽게 떠오르는 세계적 버킷리스트 체험. 미네랄이 풍부한 진흙 팩과 함께 지구상 가장 독특한 자연 현상을 온몸으로 느낄 수 있습니다.",
    history: "사해는 약 300만 년 전 아프리카-아라비아 지구대의 형성과 함께 만들어졌습니다. 고대부터 클레오파트라가 이곳의 미네랄을 미용에 활용했다고 전해지며, 현재 수면은 매년 약 1m씩 낮아지고 있습니다.",
    visitInfo: {
      hours: "에인 보켁 공공 해변: 일출~일몰",
      admission: "에인 보켁 공공 해변 무료",
      address: "Ein Bokek, Dead Sea, Israel",
      website: "https://www.deadsea.com",
    },
    highlights: [
      "세계에서 가장 짠 물에서 신문 읽으며 떠있기",
      "사해 미네랄 머드 팩 체험",
      "지구상 가장 낮은 지점에서의 기념 사진",
      "사막과 바다가 만나는 초현실적 풍경",
    ],
    nearbyAttractions: ["에인 게디 자연보호구역", "마사다 요새", "쿰란 동굴(사해문서 발견지)"],
    photoTips: "떠있는 모습 촬영 시 방수 케이스를 사용하세요. 사해 소금 결정이 보이는 해안가도 좋은 피사체입니다.",
    tips: [
      "물에 15~20분 이상 들어가지 마세요. 높은 염분이 피부를 자극합니다.",
      "얼굴에 물이 절대 닿지 않게 주의하세요. 눈에 들어가면 매우 아픕니다.",
      "상처나 면도 부위에 극심한 따가움이 있으니 사전 확인하세요.",
      "금속 액세서리는 부식될 수 있으므로 미리 빼두세요.",
    ],
  },

  // ===== MASADA =====
  "israel/dead-sea-south/masada/masada-fortress": {
    heroGradient: "from-orange-500 to-red-700",
    description: "유대 사막 절벽 위 450m 높이에 세워진 헤롯 왕의 고대 요새. 서기 73년 로마 제10군단에 맞서 967명의 유대인이 자유를 위해 집단 자결한 비극적 역사의 현장으로, 이스라엘 국가 정체성의 상징입니다.",
    history: "기원전 37년 헤롯 대왕이 건설한 요새 궁전입니다. 서기 66년 유대 대반란 당시 열심당원들이 점거하여 로마군에 대항했으며, 3년간의 포위 끝에 서기 73년 967명이 노예가 되느니 죽음을 택했다고 요세푸스가 기록했습니다.",
    visitInfo: {
      hours: "하절기(4~9월): 08:00~17:00 / 동절기(10~3월): 08:00~16:00 / 뱀의 길: 새벽부터 개방",
      admission: "성인 ILS 31 / 케이블카 왕복 ILS 83",
      address: "Masada National Park, Dead Sea Region",
      website: "https://www.parks.org.il",
    },
    highlights: [
      "뱀의 길 일출 등반 (약 45분~1시간)",
      "헤롯 왕의 북쪽 3단 궁전 유적",
      "로마군 포위 캠프와 공성 경사로 조망",
      "고대 로마식 목욕탕과 모자이크 바닥",
    ],
    nearbyAttractions: ["사해 부유 체험", "에인 게디 자연보호구역", "쿰란 동굴"],
    photoTips: "일출 시 사해와 요르단 산맥이 붉게 물드는 장면은 최고의 포토 스팟입니다. 광각 렌즈를 추천합니다.",
    tips: [
      "뱀의 길 일출 등반은 새벽 4~5시에 출발합니다. 헤드램프를 준비하세요.",
      "물을 최소 2L 이상 가져가세요. 정상에서 구매할 수 없습니다.",
      "서쪽(로마 경사로) 루트는 15분이면 올라가지만, 사해 전망은 동쪽(뱀의 길)이 훨씬 좋습니다.",
      "이스라엘 국립공원 통합 패스를 구매하면 할인됩니다.",
    ],
  },

  // ===== HAIFA =====
  "israel/north/haifa/bahai-gardens": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "카르멜 산 경사면에 조성된 19단 계단식 테라스 정원으로, 바하이교의 창시자 바브(Bab)의 성묘를 중심으로 지중해까지 완벽한 대칭으로 펼쳐집니다. UNESCO 세계유산으로 등재된 세계에서 가장 아름다운 정원 중 하나입니다.",
    history: "바하이교의 중심 성지로, 바브(1819~1850)의 유해가 1909년 이곳에 안치되었습니다. 현재의 테라스 정원은 2001년에 완공되었으며, 기하학적 완벽함과 식물의 조화가 바하이교의 질서와 아름다움의 가치를 상징합니다.",
    visitInfo: {
      hours: "외부 정원: 매일 09:00~17:00 / 내부 테라스 가이드 투어: 매일 12:00 (영어)",
      admission: "무료 (가이드 투어 사전 예약 권장)",
      address: "80 Hatzionut Avenue, Haifa",
      website: "https://www.ganbahai.org.il",
    },
    highlights: [
      "상단 테라스에서 지중해까지 이어지는 19단 계단식 정원 전경",
      "황금 돔의 바브 성묘",
      "완벽한 대칭과 기하학적 조경 디자인",
      "야간 조명이 켜진 정원 (외부에서 조망)",
    ],
    nearbyAttractions: ["독일 식민지 거리", "스텔라 마리스 수도원", "카르멜릿 지하철", "하이파 미술관"],
    photoTips: "상단 테라스에서 아래를 내려다보는 구도가 가장 상징적입니다. 오전 빛이 정원의 초록과 황금 돔을 가장 아름답게 비춥니다.",
    tips: [
      "상단에서 하단으로만 관람 가능합니다. 카르멜릿으로 올라간 후 내려오는 코스를 추천합니다.",
      "가이드 투어(영어 매일 12:00)를 통해서만 테라스 내부를 걸을 수 있습니다.",
      "음식, 음료 반입이 금지되며 단정한 복장이 필요합니다.",
      "우기(12~2월)에는 정원이 더욱 푸르지만 비가 잦을 수 있습니다.",
    ],
  },
};
