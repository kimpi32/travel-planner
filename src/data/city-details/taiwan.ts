import type { CityDetail, AttractionDetail } from "../city-details";

export const taiwanCityDetails: Record<string, CityDetail> = {
  // ===== TAIPEI & NORTH =====
  "taiwan/taipei-north/taipei": {
    heroGradient: "from-red-500 to-orange-700",
    description: "대만의 수도이자 최대 도시. 타이베이 101, 고궁박물원, 룽산사 등 전통과 현대가 공존하며, 야시장 문화와 활기찬 먹거리로 여행자를 사로잡는 아시아 대표 관광 도시입니다.",
    bestTime: "10~12월 (가을·초겨울이 가장 쾌적)",
    stayArea: "시먼딩 / 중산 / 다안 지구",
    transport: "MRT, 버스, YouBike (이지카드 EasyCard)",
    districts: [
      { name: "시먼딩", nameEn: "Ximending", description: "타이베이의 하라주쿠로 불리는 젊은이들의 거리. 쇼핑, 먹거리, 거리 공연이 가득합니다.", highlights: ["시먼 홍러우", "영화의 거리", "타투 거리"] },
      { name: "다안 지구", nameEn: "Da'an District", description: "영강제 쇠고기면과 딘타이펑 본점이 있는 미식의 중심지.", highlights: ["딘타이펑 본점", "용캉제", "다안 삼림공원"] },
      { name: "신이 지구", nameEn: "Xinyi District", description: "타이베이 101과 대형 백화점이 밀집한 현대적 상업 지구.", highlights: ["타이베이 101", "쑨원기념관", "신광 미츠코시"] },
    ],
    attractions: [
      { name: "타이베이 101", nameEn: "Taipei 101", description: "508m 높이의 대나무 모양 초고층 빌딩으로 89층 전망대에서 시내 전경을 조망할 수 있습니다.", category: "랜드마크", tip: "일몰 시간대에 방문하면 낮과 야경을 동시에 즐길 수 있습니다." },
      { name: "룽산사", nameEn: "Longshan Temple", description: "1738년 창건된 타이베이 최고의 사찰로 정교한 석조·목조 장식이 압권입니다.", category: "사찰", tip: "저녁 조명이 켜진 모습이 특히 아름답습니다." },
      { name: "스린 야시장", nameEn: "Shilin Night Market", description: "대만 최대 규모의 야시장으로 수백 개의 먹거리 노점과 게임, 쇼핑이 가득합니다.", category: "시장", tip: "지하 미식광장에서 대왕 치킨, 굴전, 취두부를 꼭 맛보세요." },
      { name: "국립고궁박물원", nameEn: "National Palace Museum", description: "70만 점 이상의 중화문명 유물을 소장한 세계 4대 박물관. 옥배추와 육형석이 대표 소장품입니다.", category: "박물관", tip: "오후 3시 이후 방문하면 단체 관광객이 줄어 쾌적합니다." },
      { name: "중정기념당", nameEn: "Chiang Kai-shek Memorial Hall", description: "장제스를 기리는 기념관으로 매시 정각 위병 교대식이 열립니다.", category: "기념관" },
      { name: "양밍산 국립공원", nameEn: "Yangmingshan National Park", description: "타이베이 근교의 화산 지형 국립공원으로 온천과 꽃축제로 유명합니다.", category: "자연" },
    ],
    dayTrips: [
      { name: "지우펀", nameEn: "Jiufen", description: "센과 치히로의 행방불명 모델로 알려진 산중 마을.", travelTime: "버스 약 1시간 30분", gradient: "from-amber-500 to-red-700" },
      { name: "베이터우 온천", nameEn: "Beitou Hot Springs", description: "MRT로 쉽게 갈 수 있는 시내 온천 마을.", travelTime: "MRT 약 40분", gradient: "from-teal-400 to-cyan-600" },
    ],
    localFood: [
      { name: "쇠고기면 (牛肉麵)", description: "진한 사골 국물에 부드러운 쇠고기를 올린 대만의 국민 음식.", emoji: "🍜" },
      { name: "샤오롱바오", description: "딘타이펑이 세계에 알린 대만식 육즙 가득 소롱포.", emoji: "🥟" },
      { name: "망고빙수", description: "신선한 애플망고와 부드러운 우유 얼음의 열대 디저트.", emoji: "🧊" },
    ],
    tips: [
      "이지카드(EasyCard)를 구매하면 MRT, 버스, YouBike, 편의점 결제까지 가능합니다.",
      "야시장은 보통 오후 5~6시부터 자정까지 운영되니 저녁 일정에 포함하세요.",
      "MRT 내 음식물 섭취가 금지되어 있으며 벌금이 부과됩니다.",
      "우기(5~9월)에는 접이식 우산을 꼭 챙기세요.",
    ],
  },
  "taiwan/taipei-north/jiufen": {
    heroGradient: "from-amber-500 to-red-700",
    description: "산비탈에 계단식으로 형성된 옛 금광 마을. 좁은 골목과 홍등이 어우러진 풍경이 '센과 치히로의 행방불명'의 모델로 알려져 있으며, 토란볼과 차 문화가 유명합니다.",
    bestTime: "9~11월 (가을 날씨가 가장 쾌적)",
    stayArea: "지우펀 올드스트리트 주변 민박",
    transport: "타이베이에서 버스 1062번 (약 1시간 30분)",
    districts: [
      { name: "지산제", nameEn: "Jishan Street", description: "지우펀의 메인 먹거리 골목으로 토란볼, 어묵, 초풀떡 등 간식이 가득합니다.", highlights: ["토란볼 가게", "초풀떡", "지우펀 어묵"] },
      { name: "수치루", nameEn: "Shuqi Road", description: "홍등이 늘어선 계단 거리로 지우펀의 상징적 포토스팟.", highlights: ["아메이차주관", "홍등 계단", "해안 전망대"] },
    ],
    attractions: [
      { name: "지우펀 올드스트리트", nameEn: "Jiufen Old Street", description: "좁은 골목과 계단, 홍등이 만들어내는 환상적인 야경으로 유명한 전통 거리.", category: "거리", tip: "해질녘 홍등이 켜지는 시간에 방문하면 가장 아름다운 풍경을 볼 수 있습니다." },
      { name: "아메이차주관", nameEn: "A-Mei Tea House", description: "지우펀 계단 위의 전통 찻집으로 바다 전경과 함께 대만 차를 즐길 수 있습니다.", category: "찻집" },
      { name: "금광박물관", nameEn: "Gold Museum", description: "일제시대 금광 채굴의 역사를 보여주는 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "스펀", nameEn: "Shifen", description: "하늘로 날리는 천등(스카이 랜턴)의 마을.", travelTime: "버스+기차 약 40분", gradient: "from-orange-400 to-pink-600" },
    ],
    localFood: [
      { name: "토란볼 (芋圓)", description: "쫄깃한 토란과 고구마 경단을 팥빙수에 올린 지우펀 대표 간식.", emoji: "🍡" },
      { name: "초풀떡 (草仔粿)", description: "쑥으로 만든 초록색 떡 안에 달콤한 팥소가 들어간 전통 간식.", emoji: "🍵" },
    ],
    tips: [
      "주말과 공휴일에는 극심한 인파가 몰리므로 평일 방문을 추천합니다.",
      "해질녘(오후 4~5시)에 도착하면 낮과 야경을 모두 즐길 수 있습니다.",
      "스펀과 묶어서 당일치기 코스로 많이 다닙니다.",
    ],
  },
  "taiwan/taipei-north/beitou": {
    heroGradient: "from-teal-400 to-cyan-600",
    description: "타이베이 시내에서 MRT로 쉽게 갈 수 있는 온천 마을. 일제시대부터 발전한 온천 문화가 남아있으며, 유황 냄새가 나는 지열 계곡과 다양한 온천 시설이 도심 속 힐링을 선사합니다.",
    bestTime: "11~3월 (겨울 온천이 제격)",
    stayArea: "신베이터우 MRT역 주변",
    transport: "MRT 신베이터우역 (타이베이역에서 약 40분)",
    districts: [
      { name: "신베이터우", nameEn: "Xinbeitou", description: "MRT역에서 도보로 온천 거리, 지열 계곡, 온천 박물관 등이 이어지는 핵심 지역.", highlights: ["베이터우 온천 박물관", "지열 계곡", "온천 노천탕"] },
    ],
    attractions: [
      { name: "베이터우 온천", nameEn: "Beitou Hot Springs", description: "100년 역사의 온천 마을로 공공 노천탕부터 고급 리조트까지 다양한 온천 체험이 가능합니다.", category: "온천", tip: "무료 공공 족욕탕에서 먼저 체험해 보세요." },
      { name: "지열 계곡", nameEn: "Thermal Valley", description: "80~100도의 유황 온천수가 솟구치는 신비로운 녹색 호수.", category: "자연" },
      { name: "베이터우 온천 박물관", nameEn: "Beitou Hot Spring Museum", description: "일제시대 공중목욕탕을 개조한 무료 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "양밍산", nameEn: "Yangmingshan", description: "화산 지형과 꽃밭이 아름다운 국립공원.", travelTime: "버스 약 30분", gradient: "from-green-400 to-emerald-600" },
    ],
    localFood: [
      { name: "온천 계란", description: "온천수에 삶아 특유의 풍미가 나는 온천 명물.", emoji: "🥚" },
      { name: "약선 요리", description: "한방 재료로 만든 건강식으로 온천 후 즐기기 좋습니다.", emoji: "🍲" },
    ],
    tips: [
      "공공 온천은 수영복 착용 필수, 일부 사설 탕은 나체 입욕입니다.",
      "지열 계곡은 무료 입장이지만 물에 직접 들어갈 수 없습니다.",
      "평일 오전이 한적하게 온천을 즐길 수 있는 최적 시간입니다.",
    ],
  },

  // ===== CENTRAL =====
  "taiwan/central/taichung": {
    heroGradient: "from-orange-400 to-pink-600",
    description: "대만 제3의 도시로 예술과 문화가 넘치는 활기찬 도시. 무지개 마을, 궁원안과, 펑자 야시장 등 개성 있는 볼거리와 버블티의 발상지로 유명합니다.",
    bestTime: "10~4월 (온화하고 건조한 날씨)",
    stayArea: "타이중역 주변 / 궁원 지구",
    transport: "시내버스 (이지카드 10km 내 무료), 타이중 MRT",
    districts: [
      { name: "서구", nameEn: "West District", description: "궁원안과와 재래시장이 있는 타이중의 전통 중심가.", highlights: ["궁원안과", "제2시장", "타이중 문학관"] },
      { name: "난툰 구", nameEn: "Nantun District", description: "무지개 마을과 대형 쇼핑몰이 있는 남쪽 지역.", highlights: ["무지개 마을", "이케아 타이중", "가오메이 습지"] },
    ],
    attractions: [
      { name: "무지개 마을", nameEn: "Rainbow Village", description: "97세 할아버지 황용푸가 마을 전체를 알록달록한 벽화로 채운 예술 마을. 철거 위기에서 보존된 감동적인 이야기를 담고 있습니다.", category: "예술", tip: "오전 일찍 방문하면 인파 없이 사진 촬영이 가능합니다." },
      { name: "궁원안과", nameEn: "Miyahara", description: "일제시대 안과 건물을 개조한 디저트 가게로 화려한 인테리어와 아이스크림이 유명합니다.", category: "카페", tip: "아이스크림 위에 펑리수(파인애플 케이크)를 토핑으로 올려보세요." },
      { name: "펑자 야시장", nameEn: "Fengjia Night Market", description: "대만 최대 규모의 야시장으로 의류, 먹거리, 게임 등 1,000개 이상의 노점이 펼쳐집니다.", category: "시장" },
      { name: "가오메이 습지", nameEn: "Gaomei Wetlands", description: "석양이 아름다운 해안 습지로 나무 산책로를 따라 갯벌 체험이 가능합니다.", category: "자연" },
    ],
    dayTrips: [
      { name: "르웨탄", nameEn: "Sun Moon Lake", description: "대만에서 가장 아름다운 고산 호수.", travelTime: "버스 약 1시간 30분", gradient: "from-blue-400 to-indigo-600" },
    ],
    localFood: [
      { name: "버블티 (珍珠奶茶)", description: "타이중이 원조인 진주 밀크티, 춘수이탕이 발상지.", emoji: "🧋" },
      { name: "타이양빙", description: "타이중 명물 해 모양 파인애플 케이크.", emoji: "🌞" },
      { name: "대장 소시지 쌈", description: "큰 소시지를 찹쌀 소시지에 끼워 먹는 야시장 인기 간식.", emoji: "🌭" },
    ],
    tips: [
      "타이중 시내버스는 이지카드 사용 시 10km 이내 무료이므로 적극 활용하세요.",
      "무지개 마을은 오전 8시부터 오후 6시까지만 개방됩니다.",
      "펑자 야시장은 목~일요일이 가장 활발합니다.",
      "가오메이 습지는 해질녘에 방문해야 최고의 경치를 볼 수 있습니다.",
    ],
  },
  "taiwan/central/sun-moon-lake": {
    heroGradient: "from-blue-400 to-indigo-600",
    description: "해발 748m에 위치한 대만 최대의 고산 호수. 호수를 중심으로 원주민 문화, 사원, 자전거 도로가 어우러진 대만 대표 자연 관광지로, 일출과 안개 낀 호수 풍경이 환상적입니다.",
    bestTime: "9~11월 (맑고 선선한 가을이 최적)",
    stayArea: "수이서 마을 / 이다사오 부두",
    transport: "타이중에서 버스 (난터우 버스 약 1시간 30분)",
    districts: [
      { name: "수이서", nameEn: "Shuishe", description: "르웨탄의 관문으로 버스 터미널, 숙소, 자전거 대여소가 밀집한 마을.", highlights: ["수이서 부두", "메이허위안 산책로", "자전거 도로"] },
      { name: "이다사오", nameEn: "Ita Thao", description: "사오족 원주민 마을로 먹거리 골목과 부두가 있는 활기찬 지역.", highlights: ["이다사오 먹거리 골목", "부두", "사오족 문화 센터"] },
    ],
    attractions: [
      { name: "르웨탄", nameEn: "Sun Moon Lake", description: "대만 8경 중 하나로 호수 주변 자전거 도로가 '세계에서 가장 아름다운 자전거길'로 선정되었습니다.", category: "호수", tip: "이른 아침 안개 낀 호수 위로 해가 뜨는 장면이 가장 아름답습니다." },
      { name: "문무묘", nameEn: "Wenwu Temple", description: "호수가 내려다보이는 웅장한 중국식 사원으로 공자와 관우를 모시고 있습니다.", category: "사찰" },
      { name: "츠언탑", nameEn: "Ci'en Pagoda", description: "장제스가 어머니를 기리기 위해 세운 9층 탑으로 호수 전경이 한눈에 들어옵니다.", category: "탑" },
    ],
    dayTrips: [
      { name: "칭징 농장", nameEn: "Cingjing Farm", description: "해발 1,750m의 고산 목장으로 양 떼 쇼가 유명합니다.", travelTime: "버스 약 1시간", gradient: "from-green-400 to-emerald-600" },
    ],
    localFood: [
      { name: "총통어", description: "르웨탄 특산 민물고기 요리, 바삭하게 튀겨 제공.", emoji: "🐟" },
      { name: "산돼지 소시지", description: "원주민 풍미의 훈제 소시지로 이다사오 먹거리 골목 인기 메뉴.", emoji: "🌭" },
      { name: "아쌈 홍차", description: "르웨탄 주변에서 재배하는 대만 대표 홍차.", emoji: "🍵" },
    ],
    tips: [
      "자전거로 호수 일주(약 30km)는 반나절이면 충분하며 전동 자전거도 대여 가능합니다.",
      "유람선 1일 패스로 수이서, 이다사오, 쉬안광사 세 부두를 오가며 관광하세요.",
      "주말에는 숙소 가격이 크게 오르므로 평일 방문을 권장합니다.",
    ],
  },

  // ===== SOUTH =====
  "taiwan/south/tainan": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "대만에서 가장 오래된 도시로 300년 역사와 문화유산이 가득합니다. 옛 수도답게 사찰과 고적이 곳곳에 남아있으며, '대만의 먹거리 수도'로 불릴 만큼 미식 문화가 뛰어납니다.",
    bestTime: "10~4월 (건조하고 온화한 시기)",
    stayArea: "타이난역 주변 / 안핑 지구",
    transport: "시내버스, T-Bike (이지카드 이용)",
    districts: [
      { name: "중서구", nameEn: "West Central District", description: "적감루, 공자묘 등 역사 유적이 밀집한 타이난의 구도심.", highlights: ["적감루", "공자묘", "신농가"] },
      { name: "안핑 지구", nameEn: "Anping District", description: "네덜란드 식민시대 요새와 옛 거리가 남아있는 항구 마을.", highlights: ["안핑고보", "안핑 올드스트리트", "안핑 수옥"] },
    ],
    attractions: [
      { name: "적감루", nameEn: "Chihkan Tower", description: "1653년 네덜란드인이 세운 프로빈시아성 위에 건설된 대만 대표 역사 유적으로 대만의 식민지 역사를 상징합니다.", category: "유적", tip: "야간 조명이 아름다우니 저녁에도 방문해 보세요." },
      { name: "안핑고보", nameEn: "Anping Fort", description: "1624년 네덜란드 동인도회사가 건설한 대만 최초의 서양식 요새. 전망대에서 안핑 항구 전경을 조망할 수 있습니다.", category: "요새", tip: "안핑 올드스트리트의 새우과자와 두부푸딩을 함께 즐기세요." },
      { name: "공자묘", nameEn: "Confucius Temple", description: "1665년 건립된 대만 최초의 공자묘로 '전대수학(全臺首學)'의 역사적 가치를 지닙니다.", category: "사찰" },
      { name: "신농가", nameEn: "Shennong Street", description: "알록달록한 벽과 전통 가옥이 어우러진 복고풍 거리로 카페와 잡화점이 매력적입니다.", category: "거리" },
    ],
    dayTrips: [
      { name: "가오슝", nameEn: "Kaohsiung", description: "연지담과 치진섬이 유명한 대만 제2의 도시.", travelTime: "고속철도(HSR) 약 15분 / 기차 약 30분", gradient: "from-cyan-500 to-blue-700" },
    ],
    localFood: [
      { name: "담자면 (擔仔麵)", description: "새우 육수에 간고기를 올린 타이난 원조의 국민 면요리.", emoji: "🍜" },
      { name: "관차이반 (棺材板)", description: "두꺼운 토스트 안에 크림 스튜를 넣은 타이난 명물 간식.", emoji: "🍞" },
      { name: "두화 (豆花)", description: "부드러운 두부 푸딩에 팥, 땅콩, 시럽을 곁들인 전통 디저트.", emoji: "🍨" },
    ],
    tips: [
      "타이난은 도보와 자전거로 둘러보기 좋은 규모입니다.",
      "사찰이 300개 이상 있어 '사찰의 도시'라는 별명이 있습니다.",
      "가게들이 일찍 문을 닫으므로(오후 6~7시) 계획을 미리 세우세요.",
      "여름(6~9월)은 매우 덥고 습하므로 수분 보충에 신경 쓰세요.",
    ],
  },
  "taiwan/south/kaohsiung": {
    heroGradient: "from-cyan-500 to-blue-700",
    description: "대만 남부 최대의 항구도시로 따뜻한 열대 기후와 개방적인 분위기가 매력적입니다. 연지담의 용호탑, 치진섬의 해산물, 보얼예술특구 등 문화와 자연이 조화로운 여행지입니다.",
    bestTime: "10~4월 (건조하고 쾌적한 시기)",
    stayArea: "메이리다오역 주변 / 옌청 지구",
    transport: "MRT (2개 노선), LRT 경전철, 버스 (이지카드)",
    districts: [
      { name: "줘잉 지구", nameEn: "Zuoying District", description: "연지담과 용호탑이 있는 가오슝의 대표 관광 지역.", highlights: ["연지담", "용호탑", "춘추각"] },
      { name: "치진 지구", nameEn: "Cijin District", description: "페리로 5분이면 도착하는 해변 섬마을로 해산물과 해수욕장이 유명합니다.", highlights: ["치진 등대", "치진 해수욕장", "해산물 거리"] },
      { name: "옌청 지구", nameEn: "Yancheng District", description: "보얼예술특구와 독립 서점, 카페가 밀집한 문화 예술 지구.", highlights: ["보얼예술특구", "다궁 아이스크림", "하마싱 기차역"] },
    ],
    attractions: [
      { name: "연지담", nameEn: "Lotus Pond", description: "용호탑과 춘추각이 호수 위에 자리한 가오슝의 상징적 명소. 아침저녁으로 현지인들이 산책하며 여유를 즐깁니다.", category: "호수", tip: "용호탑은 용 입에서 들어가 호랑이 입으로 나오는 게 전통입니다." },
      { name: "치진섬", nameEn: "Cijin Island", description: "구산 페리 터미널에서 5분이면 도착하는 섬으로 등대, 해수욕장, 해산물 골목이 있습니다.", category: "섬", tip: "페리는 이지카드로 TWD 25 (약 1,000원)이면 왕복 가능합니다." },
      { name: "보얼예술특구", nameEn: "Pier-2 Art Center", description: "옛 항구 창고를 리모델링한 예술 특구로 거리 예술과 전시가 풍성합니다.", category: "예술" },
      { name: "메이리다오역", nameEn: "Formosa Boulevard Station", description: "세계에서 가장 아름다운 지하철역 중 하나로 거대한 유리 돔 '빛의 궁전'이 유명합니다.", category: "건축" },
    ],
    dayTrips: [
      { name: "컨딩", nameEn: "Kenting", description: "대만 최남단의 열대 해변 리조트 타운.", travelTime: "버스 약 2시간 30분", gradient: "from-yellow-400 to-orange-600" },
      { name: "타이난", nameEn: "Tainan", description: "대만 옛 수도로 역사 유적과 미식의 도시.", travelTime: "고속철도 약 15분", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "치진 해산물", description: "갓 잡은 해산물을 즉석에서 조리해주는 치진섬 해산물 거리.", emoji: "🦐" },
      { name: "파파야 밀크", description: "가오슝 명물 신선한 파파야 우유 쉐이크.", emoji: "🥛" },
    ],
    tips: [
      "메이리다오역 '빛의 궁전'은 MRT 이용 시 무료로 감상할 수 있습니다.",
      "치진섬은 자전거 대여가 TWD 100 정도로 섬 일주에 최적입니다.",
      "MRT와 LRT를 조합하면 주요 관광지를 효율적으로 돌 수 있습니다.",
      "여름에는 자외선이 강하므로 선크림과 모자는 필수입니다.",
    ],
  },

  // ===== EAST =====
  "taiwan/east/hualien": {
    heroGradient: "from-emerald-500 to-teal-700",
    description: "태평양과 중앙산맥 사이에 위치한 동부 해안의 관문 도시. 타로코 협곡의 거점이자 원주민 문화가 살아 숨 쉬는 곳으로, 칠성담 해변의 자갈 해변과 고래 관광이 유명합니다.",
    bestTime: "3~5월, 9~11월 (태풍 시즌인 7~9월 주의)",
    stayArea: "화롄역 주변 / 동다먼 야시장 근처",
    transport: "시내버스, 택시, 렌터카 (대중교통이 제한적)",
    districts: [
      { name: "시내 중심", nameEn: "Hualien City Center", description: "동다먼 야시장과 맛집이 밀집한 화롄의 중심 지역.", highlights: ["동다먼 야시장", "중산로 먹자골목", "화롄 문화창의단지"] },
      { name: "칠성담 해변", nameEn: "Qixingtan Area", description: "새하얀 자갈 해변과 태평양의 푸른 바다가 어우러진 해안 지역.", highlights: ["칠성담 해변", "화롄 해양공원", "쓰칸 해안"] },
    ],
    attractions: [
      { name: "칠성담 해변", nameEn: "Qixingtan Beach", description: "초승달 모양의 자갈 해변으로 맑은 태평양 바다와 기암괴석이 만들어내는 경관이 아름답습니다.", category: "해변", tip: "일출 명소이니 이른 아침에 방문하세요." },
      { name: "동다먼 야시장", nameEn: "Dongdamen Night Market", description: "화롄 최대의 야시장으로 원주민 요리와 해산물 BBQ가 인기입니다.", category: "시장" },
      { name: "청수 절벽", nameEn: "Qingshui Cliff", description: "태평양 위로 1,000m 이상 솟아오른 수직 절벽으로 대만 8경 중 하나.", category: "자연" },
    ],
    dayTrips: [
      { name: "타로코 협곡", nameEn: "Taroko Gorge", description: "대리석 절벽이 만든 세계적인 협곡 국립공원.", travelTime: "버스 약 40분", gradient: "from-gray-500 to-slate-700" },
    ],
    localFood: [
      { name: "편당 (扁食)", description: "화롄 명물 수제 완탕으로 투명한 피에 돼지고기 소가 가득.", emoji: "🥟" },
      { name: "공정빵뻬이", description: "화롄 원조 크림 빵으로 줄 서서 사먹는 명물.", emoji: "🍞" },
    ],
    tips: [
      "타로코 협곡 방문 시 안전모는 입구에서 무료로 대여 가능합니다.",
      "동부 해안은 대중교통이 불편하므로 렌터카나 택시 투어를 추천합니다.",
      "태풍 시즌(7~9월)에는 타로코 협곡 도로가 폐쇄될 수 있으니 확인하세요.",
    ],
  },
  "taiwan/east/taroko-gorge": {
    heroGradient: "from-gray-500 to-slate-700",
    description: "대리석 협곡이 만들어낸 세계적인 절경의 국립공원. 리우강 강이 수천만 년에 걸쳐 깎아낸 수직 대리석 절벽과 트레킹 코스가 대만 동부 여행의 하이라이트입니다.",
    bestTime: "10~4월 (건기, 태풍 시즌 7~9월 회피)",
    stayArea: "화롄 시내 (타로코에서 약 40분)",
    transport: "화롄에서 타로코 버스 1133번 / 택시·투어 차량",
    districts: [
      { name: "협곡 입구", nameEn: "Gorge Entrance", description: "타로코 국립공원 방문자센터와 중국식 패루(牌樓)가 있는 입구 지역.", highlights: ["타로코 패루", "방문자센터", "사카당 트레일 입구"] },
      { name: "협곡 내부", nameEn: "Inner Gorge", description: "연자구, 구곡동 등 핵심 볼거리가 이어지는 협곡 심부.", highlights: ["연자구", "구곡동", "장춘사"] },
    ],
    attractions: [
      { name: "타로코 국립공원", nameEn: "Taroko National Park", description: "총 면적 92,000ha의 대리석 협곡 국립공원으로 대만에서 가장 장엄한 자연경관을 자랑합니다. 사카당, 연자구, 바이양 등 다양한 트레일이 있습니다.", category: "국립공원", tip: "사카당 트레일(왕복 약 2시간)은 난이도가 낮아 초보자에게 추천합니다." },
      { name: "연자구", nameEn: "Swallow Grotto", description: "수직 대리석 절벽 사이의 좁은 협곡으로 타로코의 핵심 볼거리.", category: "협곡", tip: "낙석 위험이 있으니 반드시 안전모를 착용하세요." },
      { name: "장춘사", nameEn: "Changchun Shrine", description: "절벽 위에 세워진 사원으로 폭포와 어우러진 풍경이 아름답습니다.", category: "사찰" },
    ],
    dayTrips: [
      { name: "화롄", nameEn: "Hualien", description: "동다먼 야시장과 칠성담 해변이 있는 동부 해안 도시.", travelTime: "버스 약 40분", gradient: "from-emerald-500 to-teal-700" },
    ],
    localFood: [
      { name: "원주민 요리", description: "아미족, 타로코족의 전통 산채 요리와 훈제 고기.", emoji: "🍖" },
      { name: "죽통밥", description: "대나무통에 찹쌀과 고기를 넣어 쪄낸 원주민 전통 음식.", emoji: "🎋" },
    ],
    tips: [
      "안전모는 입구 방문자센터에서 무료로 대여하며 반드시 착용해야 합니다.",
      "우기(5~9월)와 태풍 후에는 트레일이 폐쇄될 수 있으니 사전 확인하세요.",
      "이른 아침(8시 이전)에 출발하면 단체 관광버스를 피할 수 있습니다.",
    ],
  },
};

export const taiwanAttractionDetails: Record<string, AttractionDetail> = {
  // ===== TAIPEI =====
  "taiwan/taipei-north/taipei/taipei-101": {
    heroGradient: "from-red-500 to-orange-700",
    description: "508m 높이의 초고층 빌딩으로 2004년 완공 당시 세계 최고층이었습니다. 대나무 마디를 형상화한 독특한 외관과 89층 전망대에서의 360도 파노라마 뷰가 압권이며, 매년 새해 불꽃놀이의 무대이기도 합니다.",
    history: "2004년 완공 시 세계 최고층 빌딩(2010년 부르즈 할리파에 기록 양보). 대나무 8마디 구조는 아시아 문화에서 발전과 번영을 상징합니다. 660톤의 풍 댐퍼(진자)가 건물 안정성을 유지합니다.",
    visitInfo: {
      hours: "일~목 11:00~21:00, 금·토 11:00~22:00",
      admission: "일반 TWD 600, 패스트패스 TWD 1,200",
      address: "No. 7, Section 5, Xinyi Road, Xinyi District, Taipei",
      website: "https://www.taipei-101.com.tw",
    },
    highlights: [
      "89층 실내 전망대에서 타이베이 시내 360도 파노라마",
      "91층 야외 전망대 (날씨에 따라 개방)",
      "660톤 윈드 댐퍼(세계 최대 규모) 직접 관람",
      "매년 1월 1일 자정 대형 불꽃놀이",
    ],
    nearbyAttractions: ["쑨원기념관", "신광 미츠코시", "상산 전망대(상산보도)"],
    photoTips: "상산(象山) 전망대에서 타이베이 101 전체를 담을 수 있으며, 특히 야경 촬영에 최적입니다.",
    tips: [
      "일몰 1시간 전에 입장하면 낮과 야경을 모두 즐길 수 있습니다.",
      "온라인 사전 예약 시 약 TWD 50 할인됩니다.",
      "지하 1층 푸드코트 딘타이펑에서 식사 후 전망대 관람을 추천합니다.",
    ],
  },
  "taiwan/taipei-north/taipei/longshan-temple": {
    heroGradient: "from-red-600 to-amber-700",
    description: "1738년 푸젠성 출신 이민자들이 건립한 타이베이 최고(最古)의 사찰. 정교한 석조·목조 장식과 용 기둥 조각이 뛰어나며, 관세음보살을 주존으로 모시는 대만 민간 신앙의 중심지입니다.",
    history: "1738년 창건 이후 여러 차례 재건되었으며, 2차 세계대전 중 미군 폭격에도 관세음보살 상만 무사했다는 전설이 있습니다. 현재 건물은 1957년 재건된 것입니다.",
    visitInfo: {
      hours: "06:00~22:00 (연중무휴)",
      admission: "무료",
      address: "No. 211, Guangzhou Street, Wanhua District, Taipei",
      website: "https://www.lungshan.org.tw",
    },
    highlights: [
      "정교한 용 기둥 석조 조각과 세밀한 지붕 장식",
      "붉은 반달 점괘(筊杯)로 운세 보기 체험",
      "저녁 조명 아래 황금빛으로 빛나는 사찰 외관",
      "매월 음력 보름 대형 법회",
    ],
    nearbyAttractions: ["화시제 야시장(뱀골목)", "보피랴오 역사거리", "시먼딩"],
    tips: [
      "입구에서 무료로 향 1개를 받을 수 있으며 참배 순서를 따라 돌면 됩니다.",
      "반바지, 민소매 차림은 피하는 것이 예의입니다.",
      "인접한 화시제 야시장과 함께 저녁 일정으로 묶으면 효율적입니다.",
    ],
  },
  "taiwan/taipei-north/taipei/shilin-night-market": {
    heroGradient: "from-yellow-500 to-red-600",
    description: "대만 최대 규모의 야시장으로 수백 개의 먹거리 노점, 게임, 의류 가게가 밀집해 있습니다. 지하 미식광장에서는 대왕 치킨, 굴전, 취두부 등 대만 대표 야시장 음식을 한자리에서 즐길 수 있습니다.",
    visitInfo: {
      hours: "15:00~01:00 (일부 가게 17:00 오픈, 주말은 더 늦게까지)",
      admission: "무료 (음식·쇼핑은 개별 결제)",
      address: "No. 101, Jihe Road, Shilin District, Taipei",
    },
    highlights: [
      "지하 미식광장의 대왕 치킨·굴전·취두부",
      "큰 솜사탕, 과일 빙수 등 SNS 인기 간식",
      "사격, 마작 등 전통 게임 노점",
      "양밍 극장 주변 의류·액세서리 쇼핑 골목",
    ],
    nearbyAttractions: ["국립고궁박물원", "스린 관저(장제스 관저)", "양밍산 국립공원"],
    tips: [
      "MRT 젠탄역(劍潭站)에서 하차하면 야시장 입구와 가장 가깝습니다.",
      "현금을 충분히 준비하세요. 소규모 노점은 카드 결제가 안 됩니다.",
      "평일 저녁이 주말보다 한적하게 즐길 수 있습니다.",
    ],
  },
  "taiwan/taipei-north/taipei/national-palace-museum": {
    heroGradient: "from-green-600 to-emerald-800",
    description: "70만 점 이상의 중화문명 유물을 소장한 세계 4대 박물관 중 하나. 옥배추(翠玉白菜)와 육형석(肉形石)이 대표 소장품이며, 5,000년 중국 문명사를 아우르는 방대한 컬렉션을 보유하고 있습니다.",
    history: "1925년 베이징 자금성의 소장품을 기반으로 설립되었으며, 국공내전 후 1949년 주요 유물이 대만으로 이전되었습니다. 현재 건물은 1965년 타이베이 외쌍계에 건립되었습니다.",
    visitInfo: {
      hours: "화~일 09:00~17:00 (월요일 휴관)",
      admission: "일반 TWD 350, 만 18세 이하 무료",
      address: "No. 221, Section 2, Zhishan Road, Shilin District, Taipei",
      website: "https://www.npm.gov.tw",
    },
    highlights: [
      "옥배추(翠玉白菜) - 옥을 배추와 메뚜기 모양으로 조각한 걸작",
      "육형석(肉形石) - 동파육처럼 보이는 자연석",
      "모공정(毛公鼎) - 500자 금문이 새겨진 청동 솥",
      "송·원대 서화 및 도자기 컬렉션",
    ],
    nearbyAttractions: ["스린 야시장", "스린 관저 공원", "양밍산 국립공원"],
    photoTips: "실내 촬영은 플래시 없이 가능합니다. 옥배추와 육형석 전시실은 항상 인파가 많으니 개장 직후 방문하세요.",
    tips: [
      "오후 3시 이후 단체 관광객이 줄어들어 쾌적하게 관람할 수 있습니다.",
      "오디오 가이드(한국어 제공)를 대여하면 훨씬 유익합니다.",
      "소장품이 방대하므로 주요 작품 위주로 2~3시간 동선을 미리 계획하세요.",
    ],
  },

  // ===== JIUFEN =====
  "taiwan/taipei-north/jiufen/jiufen-old-street": {
    heroGradient: "from-amber-500 to-red-700",
    description: "산비탈 계단을 따라 홍등이 늘어선 지우펀의 핵심 거리. 좁은 골목마다 토란볼, 초풀떡, 어묵 등 전통 간식 가게와 찻집이 빼곡하며, 해질녘 홍등이 켜지면 환상적인 야경이 펼쳐집니다.",
    history: "19세기 금광 채굴로 번성했다가 폐광 후 쇠퇴, 1989년 영화 '비정성시' 촬영지로 재조명되었습니다. 미야자키 하야오 감독의 '센과 치히로의 행방불명' 배경으로 알려지며 세계적 관광지가 되었습니다.",
    visitInfo: {
      hours: "대부분 가게 10:00~19:00 (주말·공휴일 ~20:00)",
      admission: "무료 (개별 가게에서 구매)",
      address: "Jishan Street, Ruifang District, New Taipei City",
    },
    highlights: [
      "수치루(竪崎路) 홍등 계단의 야경",
      "아메이차주관에서 차와 바다 전망 즐기기",
      "토란볼(芋圓)과 초풀떡 먹방",
      "해안가 전망대에서 기룡산 일대 조망",
    ],
    nearbyAttractions: ["금광박물관", "스펀(천등 날리기)", "기룡 항구"],
    photoTips: "해질녘(오후 5시경) 홍등이 켜지는 순간이 촬영 최적 타이밍입니다. 수치루 계단 위에서 아래를 내려다보는 구도가 가장 인기 있습니다.",
    tips: [
      "주말은 좁은 골목이 극심한 인파로 걷기 힘드니 평일 방문을 권장합니다.",
      "타이베이 시내에서 1062번 버스로 직행 가능 (약 1시간 30분).",
      "스펀(천등)과 묶어 당일치기 코스로 계획하면 효율적입니다.",
    ],
  },

  // ===== TAROKO GORGE =====
  "taiwan/east/taroko-gorge/taroko-national-park": {
    heroGradient: "from-gray-500 to-slate-700",
    description: "리우강 강이 수천만 년에 걸쳐 대리석을 깎아 만든 세계적인 협곡 국립공원. 수직 절벽 사이로 이어지는 트레킹 코스와 터널, 현수교가 대만 동부 여행의 압도적 하이라이트입니다.",
    history: "타로코(太魯閣)는 원주민 타로코족의 이름에서 유래했습니다. 1937년 일제시대에 국립공원으로 지정되었고, 1986년 대만 정부가 국립공원으로 재지정했습니다. 중횡공로(中橫公路)는 1960년 퇴역 군인들이 수작업으로 건설한 산악 도로입니다.",
    visitInfo: {
      hours: "24시간 개방 (방문자센터 08:30~17:00)",
      admission: "무료 (일부 트레일은 입산 허가 필요)",
      address: "Xiulin Township, Hualien County",
      website: "https://www.taroko.gov.tw",
    },
    highlights: [
      "사카당 트레일 - 에메랄드빛 계곡을 따라 걷는 초급 코스",
      "연자구(燕子口) - 수직 대리석 절벽 사이 협곡 산책",
      "바이양 트레일 - 터널을 지나 폭포 동굴에 도착하는 코스",
      "구곡동(九曲洞) - 아홉 번 구부러지는 대리석 터널 산책로",
    ],
    nearbyAttractions: ["칠성담 해변", "청수 절벽", "화롄 시내"],
    photoTips: "연자구 입구에서 협곡 안쪽을 향해 촬영하면 수직 절벽의 규모감이 잘 표현됩니다. 이른 아침 빛이 협곡 안으로 들어오는 시간이 최적입니다.",
    tips: [
      "안전모는 입구 방문자센터에서 무료 대여하며 반드시 착용해야 합니다.",
      "우기(5~9월)와 태풍 후에는 트레일이 폐쇄될 수 있으니 사전에 확인하세요.",
      "주요 트레일만 돌아도 반나절~하루가 소요되니 여유 있게 일정을 잡으세요.",
    ],
  },

  // ===== KAOHSIUNG =====
  "taiwan/south/kaohsiung/lotus-pond": {
    heroGradient: "from-cyan-500 to-blue-700",
    description: "가오슝 줘잉 지구의 인공 호수로 호수 위에 세워진 용호탑, 춘추각, 공자묘 등 화려한 중국식 건축물이 줄지어 있습니다. 아침저녁 현지인들의 산책·조깅 코스이기도 합니다.",
    visitInfo: {
      hours: "용호탑 08:00~17:00, 호수 산책로 24시간",
      admission: "무료",
      address: "Liantan Road, Zuoying District, Kaohsiung",
    },
    highlights: [
      "용호탑 - 용 입으로 들어가 호랑이 입으로 나오는 7층 탑",
      "춘추각 - 봄과 가을을 상징하는 기마 용 위의 누각",
      "공자묘 - 대만 최대 규모의 공자 사당",
      "호수 위 지그재그 다리 산책",
    ],
    nearbyAttractions: ["줘잉 구시가지", "한신아레나 쇼핑몰", "보얼예술특구"],
    tips: [
      "전통에 따라 용 입에서 들어가 호랑이 입으로 나오면 행운이 온다고 합니다.",
      "이른 아침이나 해질녘에 방문하면 조명이 켜진 아름다운 풍경을 볼 수 있습니다.",
      "MRT 줘잉역에서 도보 약 10분 거리입니다.",
    ],
  },
  "taiwan/south/kaohsiung/cijin-island": {
    heroGradient: "from-sky-400 to-cyan-600",
    description: "가오슝 항구 앞에 위치한 좁고 긴 모래섬으로 페리 5분이면 도착하는 섬 여행지. 등대, 해수욕장, 해산물 거리가 있어 반나절 코스로 인기이며, 자전거로 섬 전체를 둘러볼 수 있습니다.",
    visitInfo: {
      hours: "페리 05:00~02:00 (약 5~15분 간격), 해수욕장 일출~일몰",
      admission: "페리 TWD 25 (이지카드), 해수욕장 무료",
      address: "Cijin District, Kaohsiung",
    },
    highlights: [
      "치진 등대 - 1883년 건설된 가오슝 최초의 등대에서 항구 전망",
      "치진 해수욕장 - 검은 모래사장의 해변과 파도",
      "해산물 거리 - 갓 잡은 해산물을 즉석에서 조리",
      "치진 천후궁 - 350년 역사의 마조 사원",
    ],
    nearbyAttractions: ["구산 페리 터미널", "하마싱 기차역", "영국 영사관"],
    tips: [
      "구산 페리 터미널에서 이지카드로 탑승하면 TWD 25로 왕복 가능합니다.",
      "섬 입구에서 자전거를 대여(TWD 100 내외)하면 효율적으로 둘러볼 수 있습니다.",
      "해산물 거리에서는 가격을 미리 확인하고 주문하세요.",
    ],
  },

  // ===== TAINAN =====
  "taiwan/south/tainan/chihkan-tower": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "1653년 네덜란드인이 건설한 프로빈시아성(普羅民遮城) 터 위에 세워진 대만 대표 역사 유적. 네덜란드 식민, 정성공의 수복, 청나라 통치의 역사가 겹겹이 쌓인 문화재입니다.",
    history: "1653년 네덜란드 동인도회사가 프로빈시아성으로 건설했고, 1661년 정성공(鄭成功)이 네덜란드군을 몰아내며 접수했습니다. 이후 청나라 시대에 현재의 중국식 누각 형태로 재건되었습니다.",
    visitInfo: {
      hours: "08:30~21:30 (연중무휴)",
      admission: "TWD 70",
      address: "No. 212, Section 2, Minzu Road, West Central District, Tainan",
    },
    highlights: [
      "해신묘와 문창각 등 청대 누각 건축",
      "네덜란드 시대 성벽 유적",
      "정성공 항복 수락 역사 조각상",
      "9마리 거북이 비석(贔屭碑) 조형물",
    ],
    nearbyAttractions: ["공자묘", "신농가", "타이난 대천후궁"],
    tips: [
      "야간 조명이 아름다우니 낮과 저녁 모두 방문할 가치가 있습니다.",
      "주변 도보 거리에 공자묘, 신농가 등 유적이 밀집해 있어 함께 둘러보세요.",
      "한국어 오디오 가이드는 없지만 영어 안내판이 잘 설치되어 있습니다.",
    ],
  },
  "taiwan/south/tainan/anping-fort": {
    heroGradient: "from-orange-500 to-red-700",
    description: "1624년 네덜란드 동인도회사가 건설한 대만 최초의 서양식 요새로, 원래 이름은 질란디아성(Fort Zeelandia)입니다. 대만 역사의 시작점이라 할 수 있으며 전망대에서 안핑 항구를 조망할 수 있습니다.",
    history: "1624년 네덜란드인이 건설한 질란디아성으로 대만 최초의 행정 중심지였습니다. 1661년 정성공에 의해 함락된 후 안핑성으로 개명되었고, 현재 유적은 원래 성벽의 일부만 남아있습니다.",
    visitInfo: {
      hours: "08:30~17:30 (연중무휴)",
      admission: "TWD 70",
      address: "No. 82, Guosheng Road, Anping District, Tainan",
    },
    highlights: [
      "네덜란드 시대 원래 성벽 유적",
      "전망대에서 안핑 항구와 시내 조망",
      "안핑고보 역사관의 대만 식민사 전시",
      "요새 주변 반얀나무(榕樹)가 감싼 옛 벽",
    ],
    nearbyAttractions: ["안핑 올드스트리트", "안핑 수옥(나무집)", "적감루"],
    tips: [
      "안핑 올드스트리트에서 새우과자, 두부푸딩 등 명물 간식을 함께 즐기세요.",
      "안핑 수옥(나무에 감싸인 집)은 도보 5분 거리에 있으니 함께 방문하세요.",
      "적감루와 안핑고보 통합권(TWD 120)을 이용하면 할인됩니다.",
    ],
  },

  // ===== TAICHUNG =====
  "taiwan/central/taichung/rainbow-village": {
    heroGradient: "from-orange-400 to-pink-600",
    description: "퇴역 군인 황용푸(黃永阜) 할아버지가 마을 철거를 막기 위해 건물 벽과 바닥을 알록달록한 그림으로 채운 예술 마을. 동물, 인물, 추상 패턴 등 강렬한 원색 벽화가 가득합니다.",
    history: "타이중 난툰 지구의 군인 마을(眷村)이 재개발로 철거될 위기에 처하자, 2008년 당시 86세의 황용푸 할아버지가 독학으로 벽화를 그리기 시작했습니다. SNS를 통해 세계적으로 알려지며 보존이 결정되었습니다.",
    visitInfo: {
      hours: "08:00~18:00 (연중무휴)",
      admission: "무료",
      address: "No. 56, Chun'an Road, Nantun District, Taichung",
    },
    highlights: [
      "마을 전체를 뒤덮은 강렬한 원색 벽화",
      "황용푸 할아버지의 수공 페인팅 작품",
      "바닥까지 이어지는 그림 위에서 포토타임",
      "기념품 가게에서 무지개 마을 엽서와 굿즈",
    ],
    nearbyAttractions: ["궁원안과", "펑자 야시장", "가오메이 습지"],
    photoTips: "오전 이른 시간에 방문하면 인파 없이 벽화와 함께 사진을 찍을 수 있습니다. 바닥 그림과 벽면을 함께 담는 넓은 화각이 좋습니다.",
    tips: [
      "마을이 작아 30분이면 충분히 둘러볼 수 있습니다.",
      "고속철도(HSR) 타이중역에서 택시로 약 5분 거리입니다.",
      "무료이지만 기부금 함이 있으니 마음이 동한다면 기부를 해주세요.",
    ],
  },

  // ===== SUN MOON LAKE =====
  "taiwan/central/sun-moon-lake/sun-moon-lake": {
    heroGradient: "from-blue-400 to-indigo-600",
    description: "해발 748m에 위치한 대만 최대의 자연 호수로, 동쪽은 해(日) 모양, 서쪽은 달(月) 모양이라 '일월담'이라 불립니다. 자전거 도로, 유람선, 원주민 문화가 어우러진 대만 대표 자연 관광지입니다.",
    history: "원래 사오족(邵族) 원주민의 터전이었으며, 일제시대 수력발전 댐 건설로 호수가 현재 크기로 확장되었습니다. CNN이 선정한 '세계에서 가장 아름다운 자전거 도로'가 호수를 감싸고 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (유람선 09:00~17:00)",
      admission: "입장 무료, 유람선 1일 패스 TWD 300",
      address: "Yuchi Township, Nantou County",
      website: "https://www.sunmoonlake.gov.tw",
    },
    highlights: [
      "향산 자전거 도로 - CNN 선정 세계에서 가장 아름다운 자전거 길",
      "유람선으로 수이서·이다사오·쉬안광사 3개 부두 순회",
      "이른 아침 안개 낀 호수 위 일출",
      "이다사오 원주민 마을의 먹거리 골목",
    ],
    nearbyAttractions: ["문무묘", "츠언탑", "칭징 농장"],
    photoTips: "이른 아침 안개가 호수 위에 피어오르는 시간이 가장 신비로운 풍경을 담을 수 있습니다. 츠언탑에 올라가면 호수 전경을 한눈에 볼 수 있습니다.",
    tips: [
      "자전거 호수 일주(약 30km)는 반나절이면 충분하며 전동 자전거도 대여 가능합니다.",
      "유람선 1일 패스로 하루 종일 세 부두를 자유롭게 오갈 수 있습니다.",
      "매년 만월 수영 대회(日月潭萬人泳渡)가 9월에 열려 장관을 이룹니다.",
    ],
  },

  // ===== HUALIEN =====
  "taiwan/east/hualien/qixingtan-beach": {
    heroGradient: "from-emerald-500 to-teal-700",
    description: "화롄 북쪽에 위치한 초승달 모양의 자갈 해변으로, 맑고 투명한 태평양 바다와 기암괴석이 어우러진 경관이 일품입니다. 일출 명소로 이른 아침 붉게 물드는 바다가 특히 아름답습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Xincheng Township, Hualien County",
    },
    highlights: [
      "초승달 모양 자갈 해변에서 태평양 일출 감상",
      "맑은 날 쿠로시오 해류의 짙푸른 바다 색감",
      "해변 뒤 자전거 도로에서 해안 라이딩",
      "기암괴석과 파도가 만드는 자연 풍경",
    ],
    nearbyAttractions: ["타로코 국립공원 입구", "치싱탄 자전거도로", "화롄 시내"],
    photoTips: "일출 시간에 방문하면 하늘과 바다가 붉게 물드는 장관을 담을 수 있습니다. 자갈 해변의 질감을 살린 로우앵글 촬영도 추천합니다.",
    tips: [
      "자갈 해변이므로 맨발보다 운동화 착용을 권장합니다.",
      "해류가 강하므로 수영은 금지되어 있습니다.",
      "화롄 시내에서 자전거로 약 20분, 택시로 약 10분 거리입니다.",
    ],
  },

  // ===== BEITOU =====
  "taiwan/taipei-north/beitou/beitou-hot-springs": {
    heroGradient: "from-teal-400 to-cyan-600",
    description: "타이베이 시내에서 MRT로 40분이면 도착하는 100년 역사의 온천 마을. 일제시대부터 발전한 온천 문화가 남아있으며, 공공 노천탕부터 고급 온천 리조트까지 다양한 온천 체험이 가능합니다.",
    history: "1894년 독일 유황 무역상에 의해 온천이 발견되었고, 일제시대(1896년) 첫 공공 목욕탕이 설립되었습니다. 일본 관료와 군인의 휴양지로 발전했으며, 현재 베이터우 온천 박물관이 된 건물은 1913년 건설된 공중목욕탕입니다.",
    visitInfo: {
      hours: "공공 노천탕: 05:30~21:00 (월요일 청소 휴무), 사설 온천: 업소별 상이",
      admission: "공공 족욕탕 무료, 밀레니엄 노천탕 TWD 40, 사설 개인탕 TWD 200~1,500",
      address: "Beitou District, Taipei (MRT 신베이터우역)",
    },
    highlights: [
      "지열 계곡(地熱谷) - 80~100도 유황 온천수가 솟는 녹색 호수",
      "밀레니엄 노천탕 - TWD 40으로 즐기는 대형 공공 온천",
      "베이터우 온천 박물관 - 일제시대 건축물을 개조한 무료 박물관",
      "무료 공공 족욕탕에서 가볍게 온천 체험",
    ],
    nearbyAttractions: ["양밍산 국립공원", "베이터우 도서관(친환경 건축)", "린위안 온천"],
    tips: [
      "공공 온천은 수영복과 수영모 필수이며, 잊었다면 주변 가게에서 구매 가능합니다.",
      "겨울(11~2월)이 온천 체험에 가장 좋은 계절입니다.",
      "지열 계곡은 무료 관람이지만 직접 입수는 금지되어 있습니다.",
    ],
  },
};
