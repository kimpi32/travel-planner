import type { CityDetail, AttractionDetail } from "../city-details";

export const moroccoCityDetails: Record<string, CityDetail> = {
  // ===== IMPERIAL CITIES =====
  "morocco/imperial-cities/marrakech": {
    heroGradient: "from-red-600 to-orange-800",
    description: "붉은 도시라 불리는 모로코 최대 관광 도시. 중세 메디나의 미로 같은 골목, 활기찬 제마 엘프나 광장, 호화로운 리야드 숙소가 어우러진 북아프리카의 보석입니다.",
    bestTime: "3~5월 / 9~11월 (봄·가을 온화한 날씨)",
    stayArea: "메디나 내 리야드 / 구엘리즈 신시가지",
    transport: "마차(칼레슈), 택시, 도보 (메디나 내부는 도보만 가능)",
    districts: [
      { name: "메디나", nameEn: "Medina", description: "세계문화유산으로 지정된 구시가지. 수천 개의 골목과 수크(시장)가 미로처럼 얽혀있습니다.", highlights: ["제마 엘프나 광장", "수크 지구", "크사바아 모스크"] },
      { name: "구엘리즈", nameEn: "Gueliz", description: "프랑스 식민지 시대에 조성된 신시가지로 레스토랑, 카페, 쇼핑몰이 밀집한 현대적 지역.", highlights: ["무하마드 5세 거리", "마조렐 정원 인근", "루이 기유 광장"] },
      { name: "팔름라야", nameEn: "Palmeraie", description: "마라케시 외곽의 종려나무 숲 지역으로 호화 리조트와 낙타 투어가 유명.", highlights: ["낙타 트레킹", "럭셔리 리조트", "종려나무 숲 산책"] },
    ],
    attractions: [
      { name: "제마 엘프나 광장", nameEn: "Jemaa el-Fnaa", description: "마라케시의 심장부. 낮에는 오렌지 주스 노점과 뱀 조련사, 밤에는 야시장과 음악으로 가득한 유네스코 무형문화유산 광장.", category: "광장", tip: "카페 드 프랑스 테라스에서 광장 전경을 내려다보는 뷰가 최고입니다." },
      { name: "마조렐 정원", nameEn: "Majorelle Garden", description: "화가 자크 마조렐이 조성하고 이브 생로랑이 복원한 비비드 블루 색상의 이국적 정원.", category: "정원", tip: "이른 아침 오픈 시간에 방문하면 인파를 피해 조용히 감상할 수 있습니다." },
      { name: "바히아 궁전", nameEn: "Bahia Palace", description: "19세기 술탄의 재상이 건축한 화려한 이슬람 건축의 정수. 繁縟한 타일 장식과 아치형 회랑이 인상적.", category: "궁전", tip: "무료 가이드는 없으니 오디오 가이드를 대여하세요." },
      { name: "쿠투비아 모스크", nameEn: "Koutoubia Mosque", description: "70m 높이의 첨탑이 마라케시 스카이라인을 지배하는 12세기 최대 모스크. 비무슬림은 내부 출입 불가.", category: "모스크" },
      { name: "사디앙 왕릉", nameEn: "Saadian Tombs", description: "16세기 사디안 왕조의 화려한 묘역. 수백 년간 봉인되어 있다가 1917년 재발견된 비밀의 공간.", category: "유적", tip: "오전 이른 시간 방문 시 대기 시간이 훨씬 짧습니다." },
      { name: "마라케시 수크", nameEn: "Marrakech Souks", description: "가죽, 향신료, 도자기, 직물 등 전문 수크가 미로처럼 이어지는 전통 시장 지구.", category: "시장" },
    ],
    dayTrips: [
      { name: "아틀라스 산맥", nameEn: "Atlas Mountains", description: "눈 덮인 아틀라스 산맥과 베르베르 마을을 탐방하는 당일 하이킹.", travelTime: "차량 약 1시간", gradient: "from-slate-500 to-gray-800" },
      { name: "에사우이라", nameEn: "Essaouira", description: "대서양 연안의 하얀 성벽 도시로 바람이 강해 윈드서핑의 메카.", travelTime: "버스 약 2.5시간", gradient: "from-blue-400 to-cyan-700" },
    ],
    localFood: [
      { name: "타진", description: "원뿔형 도기에 고기, 채소, 올리브를 넣어 천천히 조린 모로코 전통 요리.", emoji: "🫕" },
      { name: "쿠스쿠스", description: "금요일의 전통 음식. 세몰리나 위에 고기와 채소를 풍성하게 올린 대표 가정식.", emoji: "🍲" },
      { name: "모로코 민트 차", description: "진한 녹차에 신선한 민트와 설탕을 듬뿍 넣어 높은 곳에서 따르는 환대의 음료.", emoji: "🍵" },
    ],
    tips: [
      "메디나의 골목은 처음에는 길을 잃기 쉬우니 구글 맵을 다운로드해 두세요.",
      "수크에서 흥정은 필수! 처음 제시 가격의 30~40% 수준을 목표로 하세요.",
      "라마단 기간에는 낮 동안 식당이 문을 닫는 경우가 많으니 일정 확인이 필요합니다.",
      "사진 촬영 전 반드시 동의를 구하세요. 뱀 조련사나 광대 등은 사진 후 팁을 요구합니다.",
    ],
  },
  "morocco/imperial-cities/fez": {
    heroGradient: "from-amber-600 to-yellow-800",
    description: "세계에서 가장 잘 보존된 중세 도시 중 하나인 모로코의 정신적 수도. 9,000개의 골목이 얽힌 페스 메디나는 유네스코 세계문화유산으로 시간이 멈춘 듯한 신비로움이 가득합니다.",
    bestTime: "3~5월 / 9~11월",
    stayArea: "페스 엘발리 메디나 내 리야드 / 페스 엘제디드",
    transport: "도보 (메디나 내부), 택시 (구역 간 이동)",
    districts: [
      { name: "페스 엘발리", nameEn: "Fes el-Bali", description: "9세기에 조성된 구도심으로 세계 최대의 자동차 없는 도시 지역. 페스 메디나의 핵심 지구.", highlights: ["카라우이인 대학", "슈아라 태너리", "페스 수크"] },
      { name: "페스 엘제디드", nameEn: "Fes el-Jdid", description: "13세기 마리니드 왕조가 조성한 신도심으로 유대인 거주 지역(멜라흐)이 포함된 역사 지구.", highlights: ["로열 팔레스", "멜라흐 유대인 지구", "무와시네 분수"] },
    ],
    attractions: [
      { name: "페스 메디나", nameEn: "Fes Medina", description: "유네스코 세계유산으로 지정된 중세 이슬람 도시의 원형 보존 지구. 9,000개의 골목과 수백 개의 모스크, 마드라사가 미로를 형성합니다.", category: "역사지구", tip: "공식 가이드 없이는 길을 잃기 매우 쉬우니 공인 가이드 고용을 강력 권장합니다." },
      { name: "슈아라 태너리", nameEn: "Chouara Tannery", description: "11세기부터 이어온 전통 가죽 염색 공장. 형형색색의 염색 통이 마치 팔레트처럼 펼쳐진 페스 최고의 포토 스폿.", category: "공장", tip: "인근 가죽 가게 2층 테라스에서 무료로 내려다볼 수 있으며, 악취를 위한 민트 잎을 무료로 제공합니다." },
      { name: "카라우이인 대학", nameEn: "University of al-Qarawiyyin", description: "859년에 설립된 세계에서 가장 오래된 현존 대학교. 비무슬림은 내부 입장 불가하나 외부 관람 가능.", category: "유적" },
      { name: "부이나니아 마드라사", nameEn: "Bou Inania Madrasa", description: "14세기 마리니드 왕조의 걸작. 세밀한 스투코 장식과 삼나무 목공예가 압도적인 이슬람 신학교.", category: "유적", tip: "비무슬림도 입장 가능한 메디나의 몇 안 되는 이슬람 건축 내부입니다." },
    ],
    dayTrips: [
      { name: "메크네스", nameEn: "Meknes", description: "이스마일 술탄의 웅장한 왕궁과 대문이 있는 황제의 도시.", travelTime: "버스 약 1시간", gradient: "from-stone-500 to-amber-700" },
      { name: "볼루빌리스", nameEn: "Volubilis", description: "모로코 최대의 로마 시대 유적지로 유네스코 세계문화유산.", travelTime: "택시 약 1시간", gradient: "from-orange-400 to-red-700" },
    ],
    localFood: [
      { name: "브스테이야", description: "비둘기 고기(현대에는 닭고기)와 아몬드, 계란을 페이스트리로 감싼 달콤·짭짤 파이.", emoji: "🥧" },
      { name: "하리라 수프", description: "라마단 금식 해제 시 먹는 렌틸콩, 토마토, 향신료 수프. 언제든 즐길 수 있는 영양 만점 국물요리.", emoji: "🍜" },
      { name: "음세멘", description: "모로코 전통 납작 빵으로 꿀이나 아르간 오일을 찍어 아침식사로 먹습니다.", emoji: "🫓" },
    ],
    tips: [
      "공인 가이드는 페스 관광청에서 예약 가능하며 하루 약 200~300디르함입니다.",
      "메디나 지도를 다운로드하되, GPS가 미로 골목에선 부정확할 수 있습니다.",
      "슈아라 태너리는 오전이 햇빛이 좋아 사진 촬영에 최적입니다.",
      "물은 반드시 생수를 구매해 마시고, 길거리 음식은 신중하게 선택하세요.",
    ],
  },
  "morocco/imperial-cities/casablanca": {
    heroGradient: "from-blue-600 to-indigo-800",
    description: "모로코 최대 경제 도시이자 현대적 항구 도시. 영화 '카사블랑카'로 유명해졌지만 실제로는 활기찬 비즈니스 허브와 세계 3대 규모를 자랑하는 하산2세 모스크가 있는 도시입니다.",
    bestTime: "4~6월 / 9~11월",
    stayArea: "메디나 인근 / 에인 디아브 해변 지구",
    transport: "트램, 택시, 버스",
    districts: [
      { name: "구도심(메디나)", nameEn: "Old Medina", description: "카사블랑카의 원래 구시가지로 다른 임페리얼 시티에 비해 소규모이지만 전통 시장과 모스크가 있습니다.", highlights: ["무하마드 베시네 모스크", "전통 수크", "하바우스 지구"] },
      { name: "에인 디아브", nameEn: "Ain Diab", description: "대서양을 따라 펼쳐진 현대식 해변 지구로 레스토랑과 나이트클럽이 즐비합니다.", highlights: ["코르니쉬 해변 산책로", "유럽풍 레스토랑", "해변 클럽"] },
    ],
    attractions: [
      { name: "하산2세 모스크", nameEn: "Hassan II Mosque", description: "세계에서 세 번째로 큰 모스크로 200m 높이의 첨탑은 세계 최고. 대서양 위에 절반이 세워진 경이로운 건축물로 비무슬림도 투어로 입장 가능.", category: "모스크", tip: "공식 가이드 투어(약 120디르함)로만 내부 입장 가능하며 복장 규정(머리 가림, 긴 옷)을 준수해야 합니다." },
      { name: "리카 광장", nameEn: "Place Mohammed V", description: "카사블랑카 도심의 중심 광장으로 식민지 시대 건축물에 둘러싸인 아름다운 분수 광장.", category: "광장" },
      { name: "빌라 데 조르(구시가)", nameEn: "Art Deco Quarter", description: "1930~40년대 프랑스 식민지 시대 아르데코 건축물이 밀집한 독특한 건축 투어 코스.", category: "건축" },
    ],
    dayTrips: [
      { name: "라바트", nameEn: "Rabat", description: "모로코의 수도로 깔끔한 메디나와 카스바 데 우다야가 있는 세련된 도시.", travelTime: "기차 약 55분", gradient: "from-teal-500 to-green-700" },
    ],
    localFood: [
      { name: "생선 타진", description: "대서양의 신선한 생선과 채소를 타진 도기에 조린 카사블랑카 특선 해산물 요리.", emoji: "🐟" },
      { name: "카사블랑카 슈림프", description: "대서양에서 갓 잡은 새우를 버터와 마늘로 볶은 항구 도시의 명물.", emoji: "🦐" },
    ],
    tips: [
      "하산2세 모스크는 오전 9시, 10시, 11시, 오후 2시 정각에 가이드 투어가 출발합니다.",
      "카사블랑카는 모로코의 경제 수도로 다른 관광 도시보다 바쁘고 현대적입니다.",
      "에인 디아브 해변은 여름(6~9월)에는 매우 붐빕니다.",
    ],
  },

  // ===== ATLANTIC COAST =====
  "morocco/atlantic-coast/essaouira": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "대서양 연안의 하얀 벽과 파란 창문이 어우러진 낭만적인 항구 도시. 강한 바람 덕에 윈드서핑의 메카로 알려져 있으며, 지미 헨드릭스가 사랑한 히피 감성이 흐르는 예술가의 도시입니다.",
    bestTime: "4~6월 / 9~10월 (여름은 바람이 매우 강함)",
    stayArea: "메디나 내부 / 항구 인근",
    transport: "도보 (메디나), 자전거",
    districts: [
      { name: "메디나", nameEn: "Medina", description: "유네스코 세계유산으로 지정된 16~18세기 포르투갈-모로코 혼합 양식의 요새 도시.", highlights: ["에스칼라 성채", "항구 지구", "목공예 수크"] },
    ],
    attractions: [
      { name: "에스칼라 요새", nameEn: "Skala de la Ville", description: "16세기 포르투갈이 건설한 바닷가 요새. 오래된 대포가 놓인 성벽에서 대서양 파도와 갈매기를 감상하는 낭만적인 명소.", category: "요새", tip: "석양 시간대에 성벽 위에서 바라보는 노을이 특히 아름답습니다." },
      { name: "에사우이라 해변", nameEn: "Essaouira Beach", description: "강한 바람이 부는 넓은 모래 해변으로 윈드서핑과 카이트서핑을 즐기는 사람들로 가득한 역동적인 해변.", category: "해변" },
      { name: "에사우이라 수크", nameEn: "Essaouira Souks", description: "투야 나무로 만든 독특한 목공예품과 아르간 오일 제품이 특산물인 소규모 전통 시장.", category: "시장" },
    ],
    dayTrips: [
      { name: "마라케시", nameEn: "Marrakech", description: "붉은 도시 마라케시로의 이동은 모로코 여행의 핵심 루트.", travelTime: "버스 약 2.5시간", gradient: "from-red-500 to-orange-700" },
    ],
    localFood: [
      { name: "생선 그릴", description: "항구에서 갓 잡은 신선한 생선을 즉석에서 구워주는 에사우이라 최고의 로컬 음식.", emoji: "🐠" },
      { name: "아르간 오일", description: "모로코산 아르간 나무 열매로 만든 황금빛 기름. 요리와 피부 관리에 모두 사용되는 귀한 식재료.", emoji: "🫒" },
    ],
    tips: [
      "에사우이라는 마라케시보다 훨씬 서늘하고 바람이 강하니 겉옷을 꼭 챙기세요.",
      "항구 어시장에서 직접 생선을 고른 뒤 인근 식당에서 조리해 먹을 수 있습니다.",
      "지미 헨드릭스가 머물렀다는 카스텔 베레이르 호텔이 음악 순례지로 유명합니다.",
    ],
  },

  // ===== SAHARA =====
  "morocco/sahara/merzouga": {
    heroGradient: "from-yellow-500 to-orange-800",
    description: "모로코 남동쪽 알제리 국경 인근에 위치한 사하라 사막의 관문 마을. 에르그 슈비 사구는 최대 높이 150m에 달하는 황금빛 모래언덕으로 낙타 트레킹과 사막 캠핑의 출발점입니다.",
    bestTime: "10~4월 (여름은 50°C 이상으로 방문 불가)",
    stayArea: "메르주가 마을 내 게스트하우스 / 사막 캠프",
    transport: "4WD 차량 필수 (대부분 마라케시·페스에서 투어로 방문)",
    districts: [
      { name: "에르그 슈비", nameEn: "Erg Chebbi", description: "메르주가 인근의 광활한 모래 사구 지대. 모로코 최대 에르그(모래 사구 군집)로 면적 22km × 5km의 장관을 이룹니다.", highlights: ["낙타 트레킹", "4WD 사막 투어", "별빛 캠핑"] },
    ],
    attractions: [
      { name: "에르그 슈비 사구", nameEn: "Erg Chebbi Dunes", description: "황금빛 모래언덕이 물결처럼 펼쳐지는 사하라의 진수. 일출과 일몰 시 빛의 각도에 따라 시시각각 변하는 색감이 압도적입니다.", category: "자연", tip: "일출 1시간 전 낙타를 타고 사구 꼭대기에 오르면 장관의 일출 사진을 찍을 수 있습니다." },
      { name: "사막 야영", nameEn: "Desert Camping", description: "베르베르 전통 텐트(하이마)에서 보내는 별빛 가득한 사막의 밤. 전통 음악과 타격 드럼 퍼포먼스가 포함됩니다.", category: "체험" },
      { name: "메르주가 마을", nameEn: "Merzouga Village", description: "베르베르 문화가 살아있는 소박한 사막 마을. 아틸리에서 전통 카펫과 사막 기념품을 구입할 수 있습니다.", category: "마을" },
    ],
    dayTrips: [
      { name: "에르푸드", nameEn: "Erfoud", description: "드라아 계곡을 따라 이어지는 오아시스 마을과 화석 발굴지.", travelTime: "차량 약 50분", gradient: "from-stone-500 to-amber-700" },
    ],
    localFood: [
      { name: "베르베르 오믈렛", description: "토마토, 피망, 달걀로 만든 베르베르식 아침 오믈렛. 사막 여행자의 든든한 아침 식사.", emoji: "🍳" },
      { name: "민트 차", description: "사막의 혹독한 환경에서 열사를 달래주는 달콤하고 진한 모로코 민트 차.", emoji: "🍵" },
    ],
    tips: [
      "마라케시에서 메르주가까지 편도 약 9~10시간으로 2박 3일 투어로 방문하는 것이 일반적입니다.",
      "사막 캠핑 시 밤에는 기온이 급격히 내려가니 따뜻한 침낭과 겉옷을 준비하세요.",
      "모래가 카메라 렌즈에 들어가지 않도록 방진 케이스를 준비하세요.",
      "낙타 1마리 기준 1시간 트레킹 약 150~200디르함, 협상 필수.",
    ],
  },
};

export const moroccoAttractionDetails: Record<string, AttractionDetail> = {
  "morocco/imperial-cities/marrakech/jemaa-el-fnaa": {
    heroGradient: "from-red-600 to-orange-800",
    description: "마라케시의 심장이자 모로코 문화의 용광로. 2001년 유네스코 인류무형문화유산으로 등재된 이 광장은 낮과 밤이 완전히 다른 두 가지 얼굴을 가집니다. 뱀 조련사, 원숭이 조련사, 점쟁이, 헤나 화가들이 낮을 수놓고, 밤에는 100여 개의 야시장 포장마차와 음악가들이 거대한 야외 파티를 엽니다.",
    history: "제마 엘프나는 '죄인들의 집합소'라는 뜻으로, 과거 공개 처형이 이루어지던 장소였습니다. 11세기 알모라비드 왕조 시대에 조성되었으며 현재는 모로코 무형문화유산의 상징입니다.",
    visitInfo: {
      hours: "24시간 개방 (야시장 일몰~23:00)",
      admission: "무료",
      address: "Place Jemaa el-Fnaa, Medina, Marrakech",
    },
    highlights: [
      "일몰 후 100여 개의 야시장 포장마차가 한꺼번에 문을 여는 장관",
      "구나와 음악가들의 전통 모로코 타악기 퍼포먼스",
      "생오렌지 주스 노점 (약 4디르함)",
      "뱀 조련사와 원숭이 조련사의 거리 공연",
    ],
    nearbyAttractions: ["쿠투비아 모스크", "마라케시 수크", "바히아 궁전", "카페 드 프랑스"],
    photoTips: "카페 드 프랑스 또는 카페 글라시에 테라스에서 광장을 내려다보는 구도가 최고입니다. 황혼 시간대(마법의 시간)의 사진이 가장 아름답습니다.",
    tips: [
      "야시장 포장마차에서 식사 전 반드시 가격을 확인하고 동의하세요. 나중에 바가지를 씌우는 경우가 있습니다.",
      "사진 촬영 시 반드시 먼저 양해를 구하고 공연자에게 작은 팁(5~10디르함)을 드리세요.",
      "광장 주변 테라스 카페들은 뷰는 좋지만 음료 가격이 매우 비쌉니다.",
      "소매치기가 많으니 귀중품 관리에 주의하고 크로스백을 앞으로 메세요.",
    ],
  },
  "morocco/imperial-cities/marrakech/majorelle-garden": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "프랑스 화가 자크 마조렐이 1923년부터 1962년까지 조성한 1헥타르 규모의 정원. 독특한 코발트 블루 색상의 빌라와 다채로운 식물이 어우러진 마라케시 최고의 포토 스폿입니다. 1980년 이브 생로랑과 피에르 베르제가 매입해 복원했습니다.",
    history: "자크 마조렐이 40년에 걸쳐 5개 대륙에서 수집한 희귀 식물로 조성. 1980년 유산으로 매각될 위기에 이브 생로랑과 피에르 베르제가 구입해 복원했으며, 이브 생로랑의 유해가 이 정원에 안장되어 있습니다.",
    visitInfo: {
      hours: "08:00~17:30 (여름 08:00~18:00)",
      admission: "정원 70디르함 / 베르베르 박물관 포함 100디르함",
      address: "Rue Yves Saint Laurent, Marrakech 40090",
      website: "https://www.jardinmajorelle.com",
    },
    highlights: [
      "'마조렐 블루'라 불리는 독특한 코발트 블루 색상의 빌라",
      "400여 종의 희귀 선인장과 열대 식물 컬렉션",
      "이브 생로랑 메모리얼과 로즈 가든",
      "베르베르 박물관의 북아프리카 전통 공예품 컬렉션",
    ],
    nearbyAttractions: ["이브 생로랑 박물관", "제마 엘프나 광장", "구엘리즈 쇼핑 지구"],
    photoTips: "파란 빌라 앞 선인장 정원 구도가 가장 인기 있는 포토 스폿입니다. 오전 9시 오픈 직후가 인파가 가장 적습니다.",
    tips: [
      "오픈 시간인 8시에 맞춰 방문하면 인파 없이 촬영 가능합니다.",
      "인근 이브 생로랑 박물관과 함께 방문하면 더욱 알찬 관람이 됩니다.",
      "정원 내 카페에서 모로코 민트 차를 마시며 쉬어가기 좋습니다.",
    ],
  },
  "morocco/imperial-cities/fez/chouara-tannery": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "11세기부터 지금까지 같은 방법으로 가죽을 염색하는 페스의 살아있는 세계유산. 비둘기 배설물, 소 오줌, 소금 등으로 가죽을 무두질한 뒤 천연 식물 염료로 물들이는 전통 공정이 그대로 유지되고 있습니다.",
    history: "11세기에 설립된 것으로 추정되는 세계에서 가장 오래된 태너리 중 하나. 현재도 동일한 전통적 무두질 방식을 사용하며 수백 개의 염색 구덩이에서 30~40개의 색상으로 가죽을 염색합니다.",
    visitInfo: {
      hours: "09:00~18:00 (금요일 단축 영업)",
      admission: "무료 (인근 가죽 가게 2층 테라스에서 무료 관람)",
      address: "Quartier des Tanneurs, Fes el-Bali, Fez",
    },
    highlights: [
      "수백 개의 형형색색 염색 구덩이가 만드는 팔레트 같은 조감도",
      "11세기부터 이어온 전통 천연 염색 공정 관찰",
      "비둘기 배설물·소 오줌을 이용한 전통 무두질 과정",
      "태너리 주변 가죽 제품 쇼핑 (지갑·가방·신발 등)",
    ],
    nearbyAttractions: ["카라우이인 대학", "부이나니아 마드라사", "페스 수크"],
    photoTips: "인근 가죽 가게 2층 테라스에서 전체 태너리를 내려다보는 조감도 사진이 가장 유명합니다. 오전 햇빛이 가장 좋은 조명 조건을 만들어냅니다.",
    tips: [
      "가죽 가게 직원이 '태너리 뷰 테라스'로 안내해 줄 테지만 구매 압박이 있을 수 있습니다.",
      "악취를 중화하기 위한 민트 잎 다발을 무료로 나눠줍니다. 꼭 받아서 코에 대세요.",
      "가죽 제품 구매 시 가격 흥정은 필수이며, 처음 제시 가격의 절반을 목표로 하세요.",
      "금요일 낮에는 근로자들이 기도를 위해 작업을 멈추므로 다른 날 방문을 권장합니다.",
    ],
  },
  "morocco/imperial-cities/casablanca/hassan-ii-mosque": {
    heroGradient: "from-blue-600 to-teal-800",
    description: "세계에서 세 번째로 큰 모스크로 200m 높이의 첨탑은 세계에서 가장 높습니다. 대서양 위에 절반이 세워진 경이로운 공학적 건축물로, 하산2세 왕이 10억 달러를 들여 1993년에 완공했습니다. 비무슬림도 정해진 시간에 가이드 투어로 내부를 관람할 수 있는 모로코의 몇 안 되는 모스크입니다.",
    history: "하산2세 국왕이 1987년 착공해 1993년 완공. 3만 명을 수용하는 모스크 본당과 10만 명을 수용하는 광장을 갖춥니다. 이탈리아 대리석, 모로코 삼나무, 금박 장식으로 6년에 걸쳐 1만 5천 명의 장인이 건설했습니다.",
    visitInfo: {
      hours: "가이드 투어: 09:00, 10:00, 11:00, 14:00 (금요일 제외)",
      admission: "120디르함 (비무슬림 가이드 투어)",
      address: "Boulevard Sidi Mohammed Ben Abdallah, Casablanca",
      website: "https://www.fmh2.ma",
    },
    highlights: [
      "세계에서 가장 높은 200m 첨탑과 레이저 메카 방향 조명",
      "유리 바닥을 통해 보이는 대서양 파도",
      "2만 5천 명이 동시에 예배하는 거대한 기도 홀",
      "손으로 조각한 모로코 삼나무 천장과 이탈리아 대리석 기둥",
    ],
    nearbyAttractions: ["코르니쉬 해변", "올드 메디나", "무하마드 5세 광장"],
    photoTips: "모스크 광장 정면에서 전체 건물을 담는 사진이 가장 웅장합니다. 일몰 시간대에는 황금빛 첨탑이 특히 아름답습니다.",
    tips: [
      "반바지, 민소매, 여성의 경우 히잡 미착용 시 입장이 거부됩니다. 긴 옷과 머리 가리개를 준비하세요.",
      "가이드 투어는 현장 구매보다 공식 홈페이지 사전 예약이 안전합니다.",
      "모스크 외부는 언제든 무료로 관람 가능합니다.",
    ],
  },
  "morocco/sahara/merzouga/erg-chebbi-dunes": {
    heroGradient: "from-yellow-500 to-orange-800",
    description: "모로코 최대 에르그(모래 사구 군집)로 면적 22km × 5km에 달하는 황금빛 모래 세계. 최대 높이 150m의 사구가 연속으로 이어지며, 일출과 일몰 시 빛의 각도에 따라 오렌지·빨강·자주 빛으로 시시각각 변하는 장관이 펼쳐집니다.",
    history: "에르그 슈비는 수백만 년에 걸쳐 사하라의 바람에 의해 퇴적된 모래로 형성된 자연 사구 군집입니다. 이 지역 베르베르족은 수천 년 동안 사막 무역로(낙타 카라반)를 따라 생활해왔습니다.",
    visitInfo: {
      hours: "연중 개방",
      admission: "무료 (낙타 트레킹 별도 비용)",
      address: "Erg Chebbi, Merzouga, Errachidia Province",
    },
    highlights: [
      "황금빛 일출과 일몰의 사구 실루엣",
      "낙타 트레킹 (1~3시간 코스)",
      "베르베르 전통 텐트에서의 별빛 캠핑",
      "4WD 사막 투어와 샌드보딩",
    ],
    nearbyAttractions: ["메르주가 마을", "에르푸드", "리시아니"],
    photoTips: "일출 30분 전 사구 능선에 올라서면 빛이 서서히 사구를 물들이는 매직아워 사진을 찍을 수 있습니다. 낙타와 함께하는 실루엣 사진은 동쪽 하늘을 배경으로 일출 직전이 가장 극적입니다.",
    tips: [
      "여름(6~9월)은 낮 기온이 50°C를 넘어 방문이 매우 위험합니다. 10월~4월 사이에 방문하세요.",
      "모래 폭풍에 대비해 스카프와 선글라스를 반드시 준비하세요.",
      "사막 캠핑 시 밤 기온은 겨울에 0°C 이하로 떨어질 수 있으니 침낭을 챙기세요.",
      "사진 촬영 후 카메라 렌즈와 바디에 들어간 모래를 꼼꼼히 청소하세요.",
    ],
  },
};
