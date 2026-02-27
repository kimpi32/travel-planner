import type { CityDetail, AttractionDetail } from "../city-details";

export const chinaCityDetails: Record<string, CityDetail> = {
  // ===== BEIJING & NORTH =====
  "china/beijing-north/beijing": {
    heroGradient: "from-red-600 to-amber-700",
    description: "중국의 수도이자 3천 년 역사의 고도. 자금성, 만리장성, 천단공원 등 세계적인 문화유산이 밀집해 있으며, 현대적인 올림픽 시설과 전통 후통 골목이 공존하는 대륙의 심장입니다.",
    bestTime: "3~5월, 9~11월 (봄·가을이 가장 쾌적, 여름은 무덥고 겨울은 매우 추움)",
    stayArea: "왕푸징 / 첸먼 / 구러우 후통 지역",
    transport: "지하철, 버스, 디디추싱 (교통카드 이카통 권장)",
    districts: [
      { name: "동청구", nameEn: "Dongcheng", description: "자금성, 천안문 광장, 왕푸징 거리가 있는 베이징의 핵심 관광 지구.", highlights: ["자금성", "천안문 광장", "왕푸징 거리", "난뤄구샹 후통"] },
      { name: "시청구", nameEn: "Xicheng", description: "베이하이 공원, 징산 공원이 있는 황실 정원 밀집 지역.", highlights: ["베이하이 공원", "징산 공원", "스차하이 호수", "궈쯔지엔"] },
      { name: "하이뎬구", nameEn: "Haidian", description: "이허위안(이화원)과 베이징대, 칭화대가 있는 서북쪽 지역.", highlights: ["이허위안", "위안밍위안", "베이징대학교", "중관춘"] },
    ],
    attractions: [
      { name: "자금성", nameEn: "Forbidden City", description: "명·청 황제 24명이 거주한 세계 최대의 궁전 단지로 9,999칸의 방이 있습니다.", category: "궁전", tip: "온라인 사전 예약 필수! 월요일 휴관이며 오전 8시 개장 직후가 가장 한적합니다." },
      { name: "만리장성 (바다링)", nameEn: "Great Wall (Badaling)", description: "가장 잘 정비된 만리장성 구간으로 케이블카가 있어 접근성이 좋습니다.", category: "세계유산", tip: "성수기 인파를 피하려면 무톈위 구간을 추천합니다." },
      { name: "천단공원", nameEn: "Temple of Heaven", description: "명·청 황제가 하늘에 제사를 올리던 원형 제단으로 기년전의 건축미가 압도적입니다.", category: "사원", tip: "이른 아침 현지인들의 태극권, 합창단 풍경을 놓치지 마세요." },
      { name: "이허위안", nameEn: "Summer Palace", description: "청나라 황실의 여름 별궁으로 쿤밍호와 만수산이 빚어내는 조경이 아름답습니다.", category: "궁전", tip: "쿤밍호에서 유람선을 타면 궁전 전체 경관을 감상할 수 있습니다." },
      { name: "난뤄구샹", nameEn: "Nanluoguxiang", description: "800년 역사의 후통 골목으로 카페, 공예품점, 길거리 음식이 가득합니다.", category: "거리" },
      { name: "천안문 광장", nameEn: "Tiananmen Square", description: "세계 최대의 도심 광장으로 마오쩌둥 기념관과 인민영웅기념비가 있습니다.", category: "광장" },
    ],
    dayTrips: [
      { name: "만리장성 (무톈위)", nameEn: "Great Wall (Mutianyu)", description: "바다링보다 한적하고 자연경관이 수려한 만리장성 구간.", travelTime: "차량 약 1.5시간", gradient: "from-emerald-500 to-green-800" },
      { name: "명십삼릉", nameEn: "Ming Tombs", description: "명나라 13명 황제의 능묘로 장릉과 정릉이 공개.", travelTime: "차량 약 1시간", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "베이징 카오야 (북경오리)", description: "바삭한 껍질의 오리구이를 밀전병에 싸 먹는 베이징의 대표 요리.", emoji: "🦆" },
      { name: "자장면", description: "된장 소스에 비벼 먹는 베이징 서민 음식의 원조.", emoji: "🍜" },
      { name: "탕후루", description: "산사과에 설탕을 입힌 전통 길거리 간식으로 겨울 별미.", emoji: "🍬" },
    ],
    tips: [
      "주요 관광지는 여권 지참 및 온라인 사전 예약이 필수입니다.",
      "VPN을 미리 설치해야 구글, 카카오톡 등 해외 앱을 사용할 수 있습니다.",
      "위챗페이/알리페이 외국인 등록을 하면 현금 없이 결제가 가능합니다.",
      "대기오염이 심한 날이 있으므로 마스크를 준비하세요.",
    ],
  },
  "china/beijing-north/great-wall": {
    heroGradient: "from-emerald-600 to-stone-700",
    description: "인류 역사상 가장 거대한 건축물로 총 길이 약 21,196km에 달합니다. 베이징 근교의 바다링, 무톈위, 쓰마타이 등 다양한 구간에서 각기 다른 매력을 느낄 수 있으며, 끝없이 이어지는 성벽과 산세가 압도적입니다.",
    bestTime: "4~5월, 9~10월 (봄·가을 날씨가 가장 좋음)",
    stayArea: "베이징 시내 숙박 후 당일치기",
    transport: "베이징에서 전용 버스 / 택시 / 투어 차량",
    districts: [
      { name: "바다링", nameEn: "Badaling", description: "가장 유명하고 잘 정비된 구간으로 케이블카가 있어 접근이 편리합니다.", highlights: ["북팔루 전망대", "케이블카", "만리장성 박물관"] },
      { name: "무톈위", nameEn: "Mutianyu", description: "바다링보다 한적하고 자연경관이 수려하며, 토보건 하산이 인기.", highlights: ["23개 망루", "케이블카", "토보건 슬라이드"] },
    ],
    attractions: [
      { name: "바다링 장성", nameEn: "Badaling Great Wall", description: "가장 잘 복원된 구간으로 경사가 완만해 가족 여행에 적합합니다.", category: "세계유산", tip: "S2선 열차로 베이징 북역에서 저렴하게 갈 수 있습니다." },
      { name: "무톈위 장성", nameEn: "Mutianyu Great Wall", description: "울창한 숲으로 둘러싸인 구간으로 사계절 아름다운 경관을 자랑합니다.", category: "세계유산", tip: "하산 시 토보건 슬라이드가 재미있고 시간도 절약됩니다." },
      { name: "쓰마타이 장성", nameEn: "Simatai Great Wall", description: "야간 개방되는 유일한 구간으로 구베이수이전 마을과 함께 방문 가능.", category: "세계유산", tip: "야간 조명이 켜진 장성 위를 걸으며 별을 감상하세요." },
    ],
    dayTrips: [
      { name: "베이징 시내", nameEn: "Beijing City", description: "자금성, 천단공원 등 베이징 핵심 명소로 돌아가세요.", travelTime: "차량 약 1~2시간", gradient: "from-red-600 to-amber-700" },
    ],
    localFood: [
      { name: "장성 부근 농가 요리", description: "만리장성 입구 마을에서 맛보는 소박한 중국 가정식.", emoji: "🥘" },
      { name: "훠궈", description: "추운 날 장성 관광 후 따뜻한 훠궈로 몸을 녹이세요.", emoji: "🍲" },
    ],
    tips: [
      "편한 운동화와 충분한 물을 준비하세요. 계단이 매우 가파릅니다.",
      "성수기(국경절, 노동절 연휴)에는 바다링이 극도로 붐비니 무톈위를 추천합니다.",
      "장성 위에서는 화장실이 거의 없으므로 입구에서 미리 해결하세요.",
    ],
  },

  // ===== SHANGHAI & EAST =====
  "china/shanghai-east/shanghai": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "동양의 파리라 불리는 중국 최대의 경제 도시. 와이탄의 유럽풍 건축과 푸둥의 초현대적 스카이라인이 대비를 이루며, 전통 정원과 프렌치 콘세션의 레트로한 거리가 매력적입니다.",
    bestTime: "3~5월, 10~11월 (봄·가을이 온화하고 쾌적)",
    stayArea: "와이탄 / 난징루 / 구 프렌치 콘세션",
    transport: "지하철, 버스, 마글레브 열차 (교통카드 이카통)",
    districts: [
      { name: "와이탄 & 푸둥", nameEn: "The Bund & Pudong", description: "황푸강을 사이에 두고 유럽풍 건축과 현대 스카이라인이 마주보는 상하이의 상징적 지역.", highlights: ["와이탄 야경", "동방명주탑", "상하이타워", "루자쭈이 금융지구"] },
      { name: "구 프렌치 콘세션", nameEn: "Former French Concession", description: "플라타너스 가로수와 유럽풍 건물이 어우러진 트렌디한 카페·바 밀집 지역.", highlights: ["우캉루", "톈쯔팡", "쑨중산 고거", "안푸루 카페 거리"] },
      { name: "난징루 & 런민광장", nameEn: "Nanjing Road & People's Square", description: "중국 최대의 상업 거리로 백화점과 쇼핑몰이 즐비한 번화가.", highlights: ["난징루 보행가", "상하이 박물관", "런민광장", "상하이 대극장"] },
    ],
    attractions: [
      { name: "와이탄", nameEn: "The Bund", description: "황푸강변 1.5km 산책로로 1920년대 유럽풍 건축물 52동이 늘어서 있습니다.", category: "거리", tip: "야경이 압도적이므로 해 질 무렵부터 방문하세요. 황푸강 크루즈도 추천!" },
      { name: "위위안 (예원)", nameEn: "Yu Garden", description: "400년 역사의 명대 정원으로 정교한 누각, 연못, 가산이 어우러진 강남 정원의 걸작.", category: "정원", tip: "예원상장(바자르)에서 샤오롱바오를 맛보세요. 오전 일찍 방문하면 한적합니다." },
      { name: "상하이타워", nameEn: "Shanghai Tower", description: "높이 632m의 중국 최고층 빌딩으로 118층 전망대에서 상하이 전역을 한눈에 조망.", category: "전망대", tip: "맑은 날 방문해야 뷰가 좋고, 오후 4시쯤 가면 일몰과 야경을 모두 볼 수 있습니다." },
      { name: "톈쯔팡", nameEn: "Tianzifang", description: "옛 골목을 개조한 예술 거리로 갤러리, 공예품 가게, 카페가 밀집.", category: "거리" },
      { name: "동방명주탑", nameEn: "Oriental Pearl Tower", description: "상하이의 상징적 랜드마크로 전망대와 역사 박물관이 있습니다.", category: "전망대" },
      { name: "난징루", nameEn: "Nanjing Road", description: "100년 역사의 중국 최대 상업 거리로 밤이면 네온사인이 화려합니다.", category: "거리" },
    ],
    dayTrips: [
      { name: "항저우 (서호)", nameEn: "Hangzhou (West Lake)", description: "세계유산 서호의 빼어난 경관과 용정차 산지를 즐기세요.", travelTime: "고속열차 약 45분", gradient: "from-emerald-400 to-green-700" },
      { name: "쑤저우", nameEn: "Suzhou", description: "동양의 베네치아로 불리는 수향 마을과 세계유산 정원.", travelTime: "고속열차 약 25분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "샤오롱바오 (소룡포)", description: "얇은 피 속에 뜨거운 육즙이 가득한 상하이 대표 딤섬.", emoji: "🥟" },
      { name: "셩지엔만터우", description: "바닥이 바삭하게 구워진 상하이식 군만두.", emoji: "🥟" },
      { name: "홍샤오로우", description: "간장 소스에 부드럽게 졸인 동파육 스타일의 돼지고기 요리.", emoji: "🍖" },
    ],
    tips: [
      "와이탄 야경은 날씨가 맑은 날 방문해야 푸둥 스카이라인이 선명하게 보입니다.",
      "지하철이 매우 발달해 있어 시내 이동은 지하철이 가장 편리합니다.",
      "위챗페이/알리페이 외국인 등록을 미리 해두면 결제가 편합니다.",
      "마글레브 열차로 푸둥 공항에서 시내까지 8분 만에 이동할 수 있습니다.",
    ],
  },
  "china/shanghai-east/hangzhou": {
    heroGradient: "from-emerald-400 to-green-700",
    description: "마르코 폴로가 '세상에서 가장 아름다운 도시'라 극찬한 도시. 세계유산 서호의 빼어난 경관과 용정차 산지, 영은사 등 자연과 문화가 조화롭습니다. 상하이에서 고속열차로 45분 거리의 당일치기 명소입니다.",
    bestTime: "3~5월 (벚꽃, 연꽃), 9~11월 (단풍)",
    stayArea: "서호 동쪽 / 허팡제 거리 주변",
    transport: "지하철, 버스, 공유자전거 (서호 주변)",
    districts: [
      { name: "서호 주변", nameEn: "West Lake Area", description: "서호를 중심으로 사원, 정원, 찻집이 밀집한 항저우의 핵심 지역.", highlights: ["서호 유람선", "뇌봉탑", "단교잔설", "화항관어"] },
    ],
    attractions: [
      { name: "서호", nameEn: "West Lake", description: "유네스코 세계유산에 등재된 항저우의 상징. 호수 주변 산책, 유람선, 자전거 등 다양하게 즐길 수 있습니다.", category: "자연", tip: "소영주(삼담인월)와 뇌봉탑 일몰이 특히 아름답습니다." },
      { name: "영은사", nameEn: "Lingyin Temple", description: "동진 시대(326년) 창건된 중국 10대 사찰로 비래봉 석굴 불상이 유명.", category: "사원" },
      { name: "용정차 마을", nameEn: "Longjing Tea Village", description: "중국 최고급 녹차 용정차의 산지로 차밭 산책과 시음이 가능합니다.", category: "마을", tip: "봄(4월)에 방문하면 갓 딴 햇차를 시음할 수 있습니다." },
    ],
    dayTrips: [
      { name: "상하이", nameEn: "Shanghai", description: "동양의 파리 상하이로 고속열차 45분 만에 이동.", travelTime: "고속열차 약 45분", gradient: "from-cyan-500 to-blue-800" },
    ],
    localFood: [
      { name: "동파육", description: "삼겹살을 간장 소스에 부드럽게 졸인 항저우 대표 요리.", emoji: "🍖" },
      { name: "용정하인", description: "용정차잎으로 볶은 새우 요리, 담백하고 향긋합니다.", emoji: "🦐" },
    ],
    tips: [
      "서호 공유자전거로 호수 한 바퀴(약 15km)를 도는 것을 추천합니다.",
      "주말에는 중국 내 관광객으로 매우 붐비므로 평일 방문을 권장합니다.",
      "서호 유람선은 소영주 코스가 가장 인기이며 약 1시간 소요됩니다.",
    ],
  },
  "china/shanghai-east/suzhou": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "동양의 베네치아로 불리는 수향 도시. 세계유산에 등재된 9개 고전 정원과 실크 전통으로 유명하며, 운하를 따라 펼쳐지는 백색 벽과 검은 기와의 풍경이 그림 같습니다.",
    bestTime: "3~5월, 9~11월 (온화한 봄·가을이 최적)",
    stayArea: "평강루 역사거리 / 관전제 주변",
    transport: "지하철, 버스, 인력거 (구시가 관광)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "운하로 둘러싸인 전통 정원과 수향 마을이 밀집한 쑤저우의 핵심 지역.", highlights: ["졸정원", "평강루", "사자림", "관전제"] },
    ],
    attractions: [
      { name: "졸정원", nameEn: "Humble Administrator's Garden", description: "쑤저우 최대의 정원이자 중국 4대 명원 중 하나. 연못, 정자, 회랑이 조화로운 강남 정원의 백미.", category: "정원", tip: "오전 개장 직후 방문하면 인파 없이 고즈넉한 정원을 즐길 수 있습니다." },
      { name: "호구산", nameEn: "Tiger Hill", description: "쑤저우 제일의 명승지로 기울어진 운암사탑(호구탑)이 유명.", category: "유적" },
      { name: "평강루", nameEn: "Pingjiang Road", description: "800년 역사의 운하변 거리로 전통 찻집, 공예품 가게가 즐비.", category: "거리" },
    ],
    dayTrips: [
      { name: "상하이", nameEn: "Shanghai", description: "고속열차 25분 거리의 대도시 상하이.", travelTime: "고속열차 약 25분", gradient: "from-cyan-500 to-blue-800" },
    ],
    localFood: [
      { name: "쑹슈꾸이위", description: "소나무 다람쥐 모양으로 튀긴 쏘가리에 새콤달콤한 소스를 끼얹은 요리.", emoji: "🐟" },
      { name: "양춘면", description: "맑은 국물의 소박한 쑤저우식 국수.", emoji: "🍜" },
    ],
    tips: [
      "졸정원과 사자림은 도보 10분 거리이므로 함께 방문하세요.",
      "평강루 운하에서 작은 배를 타면 수향 마을의 정취를 느낄 수 있습니다.",
      "상하이에서 당일치기로 충분히 다녀올 수 있는 거리입니다.",
    ],
  },

  // ===== XI'AN & CENTRAL =====
  "china/xian-central/xian": {
    heroGradient: "from-amber-600 to-red-800",
    description: "13개 왕조의 수도였던 중국 문명의 요람. 진시황의 병마용, 고대 성벽, 이슬람 지구의 회민가 등 3천 년 역사가 살아 숨 쉬는 도시로, 실크로드의 출발점이기도 합니다.",
    bestTime: "3~5월, 9~11월 (봄·가을 날씨가 온화)",
    stayArea: "종루·고루 / 회민가 주변",
    transport: "지하철, 버스, 택시 (시내 교통 편리)",
    districts: [
      { name: "성벽 안 구시가", nameEn: "Inside City Wall", description: "명대 성벽으로 둘러싸인 시안의 중심부로 종루, 고루, 회민가가 있습니다.", highlights: ["종루", "고루", "시안 성벽", "회민가"] },
      { name: "린퉁구", nameEn: "Lintong District", description: "병마용과 화청지가 있는 시안 동쪽 교외 지역.", highlights: ["병마용 박물관", "화청지", "리산"] },
    ],
    attractions: [
      { name: "병마용 박물관", nameEn: "Terracotta Warriors", description: "진시황의 무덤을 지키는 8,000여 개의 실물 크기 병사·말 토용으로 20세기 최대의 고고학적 발견.", category: "박물관", tip: "1호갱이 가장 크고 인상적이니 먼저 방문하세요. 가이드 설명을 꼭 들으세요." },
      { name: "회민가 (무슬림 지구)", nameEn: "Muslim Quarter", description: "이슬람 문화와 중국 문화가 융합된 먹자골목으로 양꼬치, 뱡뱡면 등 시안 대표 길거리 음식이 모여 있습니다.", category: "거리", tip: "저녁에 가면 더욱 활기차며, 자팡원라우즈모 (고기빵)를 꼭 맛보세요." },
      { name: "시안 성벽", nameEn: "Xi'an City Wall", description: "중국에서 가장 잘 보존된 명대 성벽으로 둘레 약 14km. 성벽 위에서 자전거를 탈 수 있습니다.", category: "유적", tip: "남문에서 자전거를 빌려 한 바퀴 도는 데 약 1.5시간이 걸립니다." },
      { name: "대안탑 (대자은사)", nameEn: "Giant Wild Goose Pagoda", description: "당나라 현장법사가 인도에서 가져온 경전을 보관하기 위해 세운 7층 석탑.", category: "사원" },
    ],
    dayTrips: [
      { name: "화산", nameEn: "Mount Hua", description: "중국 5대 명산 중 하나로 아찔한 절벽 길이 유명한 모험가의 산.", travelTime: "고속열차 약 30분 + 셔틀", gradient: "from-slate-500 to-stone-700" },
    ],
    localFood: [
      { name: "뱡뱡면", description: "허리띠처럼 넓은 면에 고추기름을 뿌린 시안 대표 면 요리.", emoji: "🍜" },
      { name: "양로우파오모", description: "양고기 국물에 밀전병을 찢어 넣어 먹는 시안 전통 음식.", emoji: "🍲" },
      { name: "로우자모", description: "바삭한 빵에 간장 조림 돼지고기를 끼운 중국식 햄버거.", emoji: "🥙" },
    ],
    tips: [
      "병마용은 시안 시내에서 약 1시간 거리이므로 반나절 일정을 잡으세요.",
      "회민가에서는 돼지고기를 사용하지 않으며, 할랄 음식을 판매합니다.",
      "성벽 자전거 대여는 남문(永宁门)이 가장 편리합니다.",
      "시안은 서안이라고도 표기하며, 고속열차로 베이징에서 약 4.5시간 소요됩니다.",
    ],
  },

  // ===== SICHUAN & SOUTHWEST =====
  "china/sichuan-southwest/chengdu": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "자이언트 판다의 고향이자 쓰촨 요리의 본고장. 유네스코 미식 도시로 선정된 청두는 매콤한 훠궈, 여유로운 찻집 문화, 진리 고거리의 전통 풍경이 매력적입니다.",
    bestTime: "3~6월, 9~11월 (여름은 무덥고 겨울은 흐린 날이 많음)",
    stayArea: "춘시루 / 콴자이샹쯔 / 진리 주변",
    transport: "지하철, 버스, 디디추싱",
    districts: [
      { name: "시내 중심", nameEn: "City Center", description: "춘시루 상업거리와 콴자이샹쯔 골목이 있는 청두의 번화가.", highlights: ["춘시루", "콴자이샹쯔", "인민공원 찻집", "IFS 판다 조각상"] },
      { name: "무후구", nameEn: "Wuhou District", description: "삼국지의 무후사와 진리 고거리가 있는 역사 문화 지구.", highlights: ["무후사", "진리 거리", "쓰촨 박물관"] },
    ],
    attractions: [
      { name: "청두 판다 번식연구기지", nameEn: "Giant Panda Base", description: "100마리 이상의 자이언트 판다와 레서 판다를 가까이에서 관찰할 수 있는 세계적 보호시설.", category: "자연", tip: "오전 9시 이전에 도착해야 활발하게 먹는 판다를 볼 수 있습니다. 오후엔 대부분 잠을 잡니다." },
      { name: "진리 거리", nameEn: "Jinli Street", description: "청나라 스타일로 복원된 보행 거리로 전통 공예, 길거리 음식, 찻집이 밀집합니다.", category: "거리", tip: "밤에 홍등이 켜지면 분위기가 한층 좋아집니다." },
      { name: "콴자이샹쯔", nameEn: "Kuanzhai Alley", description: "청대 골목을 개조한 세 개의 병행 골목으로 카페, 레스토랑, 갤러리가 공존.", category: "거리" },
      { name: "무후사", nameEn: "Wuhou Shrine", description: "삼국지의 제갈량을 기리는 사당으로 유비의 묘도 함께 있습니다.", category: "사원" },
      { name: "두보초당", nameEn: "Du Fu Thatched Cottage", description: "당나라 대시인 두보가 3년간 거주하며 240수의 시를 지은 곳.", category: "유적" },
    ],
    dayTrips: [
      { name: "러산대불", nameEn: "Leshan Giant Buddha", description: "높이 71m의 세계 최대 석조 불상으로 유네스코 세계유산.", travelTime: "고속열차 약 1시간", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "쓰촨 훠궈", description: "얼얼한 마라 맛의 매운 육수에 각종 재료를 데쳐 먹는 청두 대표 음식.", emoji: "🍲" },
      { name: "마파두부", description: "두반장과 산초가 어우러진 매콤하고 얼얼한 두부 요리.", emoji: "🫕" },
      { name: "단단면", description: "고추기름, 땅콩, 깨가 어우러진 쓰촨식 비빔면.", emoji: "🍜" },
    ],
    tips: [
      "판다기지는 오전에만 방문하세요. 오후에는 판다가 잠을 자서 볼거리가 줄어듭니다.",
      "매운 음식에 약하다면 '부라(不辣)'나 '웨이라(微辣)'를 주문하세요.",
      "인민공원 찻집에서 현지인처럼 가이완차를 마시며 여유를 즐겨보세요.",
      "청두에서 쥬자이거우(구채구) 항공편은 약 1시간이면 닿습니다.",
    ],
  },
  "china/sichuan-southwest/guilin": {
    heroGradient: "from-lime-500 to-green-800",
    description: "'구이린 산수가 천하에 으뜸이다(桂林山水甲天下)'라는 말처럼 카르스트 지형이 빚어낸 기암괴석과 리강(漓江)의 수묵화 같은 풍경이 압도적인 자연 명소입니다.",
    bestTime: "4~10월 (리강 유람은 수량이 풍부한 여름이 최적)",
    stayArea: "시내 중심 / 양숴(리강 유람 후 숙박 추천)",
    transport: "시내 버스, 리강 유람선, 양숴까지 차량",
    districts: [
      { name: "시내", nameEn: "City Center", description: "상비산, 일월쌍탑 등 구이린 핵심 명소가 있는 도심.", highlights: ["상비산", "일월쌍탑", "정장왕성"] },
    ],
    attractions: [
      { name: "리강 유람", nameEn: "Li River Cruise", description: "구이린에서 양숴까지 약 83km의 리강 유람으로, 카르스트 봉우리와 대나무 숲이 수묵화처럼 펼쳐집니다.", category: "자연", tip: "구이린~양숴 전 구간 유람(약 4시간)을 추천합니다. 20위안 지폐 뒷면 풍경이 보입니다." },
      { name: "상비산", nameEn: "Elephant Trunk Hill", description: "코끼리가 물을 마시는 형상의 구이린 상징 바위산.", category: "자연" },
      { name: "양숴", nameEn: "Yangshuo", description: "리강 유람의 종착점으로 자전거 타기, 대나무 뗏목 체험 등 액티비티가 풍부.", category: "마을", tip: "시싱가를 기준으로 밤 시장과 먹거리 골목이 형성됩니다." },
    ],
    dayTrips: [
      { name: "룽지 다랭이 논", nameEn: "Longji Rice Terraces", description: "산비탈을 계단식으로 개간한 장관의 다랭이 논.", travelTime: "차량 약 2시간", gradient: "from-yellow-400 to-green-600" },
    ],
    localFood: [
      { name: "구이린 미펀", description: "쌀국수에 볶은 고기와 채소 고명을 올린 구이린 대표 아침 식사.", emoji: "🍜" },
      { name: "피지우위 (맥주고기)", description: "맥주로 졸인 리강산 잉어 요리.", emoji: "🐟" },
    ],
    tips: [
      "리강 유람은 오전에 출발하며 약 4~5시간 소요됩니다. 간식을 준비하세요.",
      "양숴에서 자전거를 빌려 시골 풍경을 달리는 것을 강력 추천합니다.",
      "장마철(6~7월)에는 수위 상승으로 유람이 취소될 수 있으니 확인하세요.",
    ],
  },

  // ===== GUANGDONG & SOUTH =====
  "china/guangdong-south/hong-kong": {
    heroGradient: "from-pink-500 to-purple-700",
    description: "동양과 서양이 만나는 아시아의 세계도시. 빅토리아 피크에서 내려다보는 스카이라인, 스타페리의 낭만적인 항구 야경, 미슐랭 맛집부터 포장마차까지 미식의 천국입니다.",
    bestTime: "10~12월 (맑고 선선한 가을·초겨울이 최적)",
    stayArea: "침사추이 / 센트럴 / 완차이",
    transport: "MTR (지하철), 트램, 스타페리, 옥토퍼스 카드",
    districts: [
      { name: "홍콩섬 센트럴", nameEn: "Central, Hong Kong Island", description: "금융 중심지이자 소호, 미드레벨 에스컬레이터, 란콰이펑이 있는 핵심 지역.", highlights: ["빅토리아 피크", "소호", "란콰이펑", "미드레벨 에스컬레이터"] },
      { name: "침사추이", nameEn: "Tsim Sha Tsui", description: "빅토리아 하버를 마주한 구룡반도의 중심으로 박물관과 쇼핑몰이 밀집.", highlights: ["스타의 거리", "홍콩문화센터", "하버시티", "1881 헤리티지"] },
      { name: "몽콕", nameEn: "Mong Kok", description: "세계에서 인구밀도가 가장 높은 지역 중 하나로 야시장과 로컬 문화의 중심지.", highlights: ["템플스트리트 야시장", "레이디스 마켓", "금붕어 거리", "꽃시장 거리"] },
    ],
    attractions: [
      { name: "빅토리아 피크", nameEn: "Victoria Peak", description: "해발 552m에서 바라보는 홍콩 스카이라인과 빅토리아 하버의 파노라마 뷰가 세계적으로 유명합니다.", category: "전망대", tip: "피크트램으로 올라가세요. 야경이 더 아름다우며, 루가드 로드 산책도 추천!" },
      { name: "스타페리", nameEn: "Star Ferry", description: "130년 역사의 녹색·흰색 페리로 침사추이와 센트럴 사이 빅토리아 하버를 왕복합니다.", category: "교통", tip: "2층 야외석에 앉아 HKD 5 미만으로 최고의 야경 크루즈를 즐기세요." },
      { name: "템플스트리트 야시장", nameEn: "Temple Street Night Market", description: "매일 저녁 펼쳐지는 구룡반도의 대표 야시장으로 기념품, 길거리 음식, 점술 체험이 가능합니다.", category: "시장", tip: "저녁 7시 이후부터 활기가 넘치며, 흥정은 필수입니다." },
      { name: "란콰이펑", nameEn: "Lan Kwai Fong", description: "홍콩 최대의 나이트라이프 거리로 100여 개의 바와 레스토랑이 밀집.", category: "거리" },
      { name: "빅 부다 (천단대불)", nameEn: "Big Buddha (Tian Tan)", description: "란타우섬의 높이 34m 야외 청동 좌불상으로 응핑 케이블카로 접근.", category: "사원", tip: "응핑360 케이블카 크리스탈 캐빈(바닥 투명)을 추천합니다." },
    ],
    dayTrips: [
      { name: "마카오", nameEn: "Macau", description: "동양의 라스베이거스이자 포르투갈 문화유산이 남아있는 도시.", travelTime: "페리 약 1시간", gradient: "from-amber-400 to-yellow-600" },
    ],
    localFood: [
      { name: "딤섬", description: "새우 하가우, 차슈 바오 등 한입 크기의 광둥식 요리를 차와 함께.", emoji: "🥟" },
      { name: "완탕면", description: "탱글한 새우 완탕과 쫄깃한 계란면의 조합.", emoji: "🍜" },
      { name: "에그타르트", description: "바삭한 페이스트리 속 부드러운 커스터드가 매력적인 홍콩 간식.", emoji: "🥧" },
    ],
    tips: [
      "옥토퍼스 카드 하나로 MTR, 버스, 페리, 편의점 결제가 모두 가능합니다.",
      "피크트램은 줄이 매우 기므로 오전 일찍 또는 밤 8시 이후에 방문하세요.",
      "홍콩에서는 HKD(홍콩달러)를 사용하며, 대부분의 가게에서 신용카드가 통합니다.",
      "에어컨이 매우 강하므로 실내용 긴팔 옷을 꼭 챙기세요.",
    ],
  },
  "china/guangdong-south/macau": {
    heroGradient: "from-amber-400 to-yellow-600",
    description: "동양의 라스베이거스이자 400년 포르투갈 식민지 역사가 남긴 유럽풍 건축물이 독특한 도시. 세계유산 역사지구, 화려한 카지노, 포르투갈-중국 퓨전 요리(마카니즈)가 매력적입니다.",
    bestTime: "10~12월 (맑고 시원한 가을·초겨울이 최적)",
    stayArea: "세나도 광장 / 코타이 스트립",
    transport: "버스, 카지노 무료 셔틀, 도보",
    districts: [
      { name: "마카오 반도", nameEn: "Macau Peninsula", description: "세계유산 역사지구가 밀집한 구시가지 지역.", highlights: ["성 바울 성당 유적", "세나도 광장", "몬테 요새", "관음사"] },
      { name: "코타이", nameEn: "Cotai", description: "대형 카지노 리조트가 밀집한 화려한 신도시.", highlights: ["베네시안 마카오", "시티 오브 드림스", "파리지앵 마카오"] },
    ],
    attractions: [
      { name: "성 바울 성당 유적", nameEn: "Ruins of St Paul's", description: "1602년 건립된 성 바울 대성당의 전면 파사드만 남은 마카오의 상징적 유적.", category: "유적", tip: "뒤편 박물관에서 성당의 역사를 배울 수 있고, 야간 조명도 아름답습니다." },
      { name: "세나도 광장", nameEn: "Senado Square", description: "파스텔 색상의 포르투갈식 건물과 물결 모양 타일이 유럽 느낌을 자아내는 광장.", category: "광장" },
      { name: "마카오 타워", nameEn: "Macau Tower", description: "높이 338m의 타워에서 번지점프(233m, 세계 최고 높이)를 체험할 수 있습니다.", category: "전망대", tip: "번지점프는 사전 예약을 권장하며, 전망대만 방문도 가능합니다." },
    ],
    dayTrips: [
      { name: "홍콩", nameEn: "Hong Kong", description: "페리로 1시간이면 도착하는 아시아의 세계도시.", travelTime: "페리 약 1시간", gradient: "from-pink-500 to-purple-700" },
    ],
    localFood: [
      { name: "에그타르트 (파스텔 드 나타)", description: "포르투갈식 에그타르트로 마카오의 대표 간식. 로드 스토우 베이커리가 원조.", emoji: "🥧" },
      { name: "포크찹번", description: "뼈 있는 돈까스를 바삭한 빵에 끼운 마카오식 샌드위치.", emoji: "🥪" },
    ],
    tips: [
      "카지노 호텔의 무료 셔틀버스를 활용하면 교통비를 크게 절약할 수 있습니다.",
      "MOP(마카오 파타카)를 사용하지만 HKD도 대부분의 가게에서 1:1로 통용됩니다.",
      "세계유산 역사지구는 도보로 충분히 둘러볼 수 있는 규모입니다.",
    ],
  },
};

export const chinaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== BEIJING =====
  "china/beijing-north/beijing/forbidden-city": {
    heroGradient: "from-red-600 to-amber-700",
    description: "명·청 24명의 황제가 거주한 세계 최대의 궁전 단지. 72만㎡ 부지에 9,999칸의 방, 황금빛 지붕의 전각이 남북 중심축을 따라 장엄하게 배치되어 있으며, 유네스코 세계유산으로 연간 1,900만 명이 방문합니다.",
    history: "1406년 명나라 영락제가 건설을 시작해 1420년 완공. 이후 약 500년간 황실의 정궁으로 사용되었으며, 1925년 고궁박물원으로 개방되었습니다.",
    visitInfo: {
      hours: "4~10월 08:30~17:00 / 11~3월 08:30~16:30 (월요일 휴관)",
      admission: "성수기(4~10월) ¥60 / 비수기(11~3월) ¥40",
      address: "北京市东城区景山前街4号",
      website: "https://www.dpm.org.cn",
    },
    highlights: [
      "태화전(금란전) - 황제 즉위식이 열린 중국 최대의 목조 전각",
      "건청궁 - 황제의 침전으로 정무를 보던 곳",
      "구궁진보관 - 황실 보물과 시계 컬렉션",
      "어화원 - 황실 정원으로 기이한 모양의 가산과 고목이 아름다움",
    ],
    nearbyAttractions: ["천안문 광장", "징산 공원", "베이하이 공원", "왕푸징 거리"],
    photoTips: "오문(정문)에서 입장 후 태화전을 정면에서 촬영하세요. 징산 공원 정상에서 자금성 전체 파노라마를 담을 수 있습니다.",
    tips: [
      "온라인 사전 예약(신분증/여권 필수)이 의무이며, 현장 구매는 불가합니다.",
      "남문(오문)으로 입장, 북문(신무문)으로만 퇴장하는 일방통행입니다.",
      "최소 3~4시간을 잡으세요. 보물관과 시계관은 별도 입장료가 있습니다.",
      "월요일 휴관이니 일정에 주의하세요.",
    ],
  },
  "china/beijing-north/beijing/great-wall": {
    heroGradient: "from-emerald-600 to-stone-700",
    description: "인류 역사상 가장 거대한 건축물로 총 연장 약 21,196km. 베이징 근교에서 접근 가능한 바다링, 무톈위, 쓰마타이 구간이 대표적이며, 험준한 산세를 따라 끝없이 이어지는 성벽이 장관입니다.",
    history: "기원전 7세기부터 축조가 시작되어 진시황이 통일 후 연결했으며, 현재 남아있는 대부분은 명나라(1368~1644) 시기에 재건된 것입니다.",
    visitInfo: {
      hours: "바다링: 4~10월 06:30~19:00 / 11~3월 07:30~18:00",
      admission: "바다링 ¥40 / 무톈위 ¥40 + 케이블카 ¥120 왕복",
      address: "北京市延庆区八达岭镇 (바다링)",
      website: "https://www.badaling.cn",
    },
    highlights: [
      "바다링 북팔루 - 가장 높은 망루에서 만리장성이 산맥을 타고 뻗어가는 절경",
      "무톈위 - 울창한 숲에 둘러싸인 23개 망루의 장관",
      "쓰마타이 야간 개방 - 조명이 켜진 성벽을 걷는 특별 체험",
      "가을 단풍 시즌의 화려한 색감",
    ],
    nearbyAttractions: ["명십삼릉", "바다링 야생동물원", "구베이수이전 마을"],
    photoTips: "무톈위 20~23번 망루 구간에서 성벽이 산등성이를 따라 구불구불 이어지는 장면을 촬영할 수 있습니다.",
    tips: [
      "편한 운동화와 충분한 물(최소 1L)을 반드시 준비하세요.",
      "바다링은 S2선 열차(베이징 북역)로 저렴하게 갈 수 있습니다.",
      "국경절(10월 1~7일), 노동절(5월 1~5일) 연휴는 극도로 붐비니 피하세요.",
      "무톈위 토보건 하산은 재미있고 시간도 절약됩니다.",
    ],
  },
  "china/beijing-north/beijing/temple-of-heaven": {
    heroGradient: "from-blue-600 to-indigo-800",
    description: "명·청 황제가 하늘에 풍년을 기원하던 제천 단지. 원형의 기년전은 못을 사용하지 않고 지은 28m 높이의 목조 건축 걸작으로, 넓은 공원에서 태극권과 합창을 즐기는 현지인들의 모습도 볼 수 있습니다.",
    history: "1420년 명 영락제 때 건립되어 매년 동지와 정월에 황제가 직접 제사를 올렸습니다. 기년전은 1889년 낙뢰로 소실되어 1890년에 재건되었습니다.",
    visitInfo: {
      hours: "공원 06:00~21:00 / 전각 구역 08:00~17:00",
      admission: "성수기 ¥34 / 비수기 ¥28 (전각 포함 통합권)",
      address: "北京市东城区天坛内东里7号",
      website: "https://www.tiantanpark.com",
    },
    highlights: [
      "기년전 - 삼층 원형 건축의 걸작, 못 없이 지어진 목조 구조",
      "원구단 - 황제가 동지에 제사를 올린 원형 제단",
      "황궁우 - 회음벽의 음향 효과가 신비로운 원형 건물",
      "이른 아침 현지인들의 태극권, 서예, 합창 풍경",
    ],
    nearbyAttractions: ["자금성", "천안문 광장", "판자위안 골동품 시장"],
    photoTips: "기년전은 남쪽의 단비교(丹陛桥)에서 정면으로 촬영하면 대칭미가 극대화됩니다.",
    tips: [
      "오전 일찍 방문하면 태극권, 합창 등 현지인의 일상을 체험할 수 있습니다.",
      "공원이 매우 넓으므로 최소 2시간을 잡으세요.",
      "회음벽에서 벽에 귀를 대고 반대편 사람의 속삭임을 들어보세요.",
    ],
  },
  "china/beijing-north/beijing/summer-palace": {
    heroGradient: "from-teal-500 to-blue-700",
    description: "청나라 황실의 여름 별궁으로 중국 최대의 황실 정원. 쿤밍호(전체 면적의 3/4)와 만수산이 빚어내는 장대한 조경은 중국 조원 예술의 정수로, 유네스코 세계유산에 등재되어 있습니다.",
    history: "1750년 건륭제가 조성했으며, 1860년 영불연합군에 파괴된 후 서태후가 해군 예산으로 재건하여 논란이 되었습니다.",
    visitInfo: {
      hours: "4~10월 06:30~18:00 / 11~3월 07:00~17:00",
      admission: "성수기 ¥30 / 비수기 ¥20 (전각 포함 통합권 ¥60/50)",
      address: "北京市海淀区新建宫门路19号",
      website: "https://www.summerpalace-china.com",
    },
    highlights: [
      "쿤밍호 유람선 - 호수에서 바라보는 만수산과 불향각의 절경",
      "장랑(긴 회랑) - 728m 길이에 14,000점의 그림이 장식된 세계 최장 회랑",
      "불향각 - 만수산 정상의 팔각 3층 누각에서 쿤밍호 전경 조망",
      "17공교 - 쿤밍호 위 아름다운 17개 아치 다리",
    ],
    nearbyAttractions: ["위안밍위안(원명원)", "베이징대학교", "중관춘"],
    photoTips: "17공교는 일몰 시간에 촬영하면 금빛 호수와 다리의 실루엣이 환상적입니다.",
    tips: [
      "면적이 매우 넓어 최소 3~4시간이 필요합니다.",
      "쿤밍호 유람선은 왕복보다 편도로 타고 반대편에서 도보 관람하세요.",
      "겨울에 쿤밍호가 얼면 현지인들이 스케이트를 타는 진풍경을 볼 수 있습니다.",
    ],
  },

  // ===== SHANGHAI =====
  "china/shanghai-east/shanghai/the-bund": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "황푸강 서안 1.5km 산책로를 따라 1920~30년대 건축된 유럽풍 건물 52동이 늘어서 있는 상하이의 상징. 강 건너편 푸둥의 초현대적 스카이라인과 대비되는 야경이 세계적으로 유명합니다.",
    history: "1844년 개항 이후 각국 조계지의 은행, 상사가 들어서며 '동양의 월스트리트'로 불렸습니다. 현재 건축물 대부분이 1920~30년대에 건설되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (야간 조명: 18:00~22:00, 주말 ~23:00)",
      admission: "무료",
      address: "上海市黄浦区中山东一路",
    },
    highlights: [
      "야경 - 푸둥 스카이라인의 네온사인이 황푸강에 비치는 장관",
      "역사 건축 - 화평반점, HSBC 빌딩, 해관대루 등 52동의 클래식 건물",
      "황푸강 크루즈 - 강 위에서 와이탄과 푸둥 양쪽 뷰를 한눈에",
      "와이탄 황푸공원 - 가든브리지 근처의 전망 포인트",
    ],
    nearbyAttractions: ["예원", "난징루 보행가", "동방명주탑", "상하이타워"],
    photoTips: "해 질 무렵(17:30~18:30)에 와이탄에서 푸둥 방향으로 촬영하면 황금빛 하늘과 스카이라인의 조합이 환상적입니다.",
    tips: [
      "야경을 보려면 해 질 녘에 도착하여 일몰부터 야경까지 즐기세요.",
      "황푸강 크루즈는 저녁 타임이 가장 인기이며 약 50분 소요됩니다.",
      "주말 저녁에는 매우 혼잡하므로 평일을 추천합니다.",
    ],
  },
  "china/shanghai-east/shanghai/yu-garden": {
    heroGradient: "from-green-600 to-emerald-800",
    description: "1559년 명대에 조성된 400년 역사의 강남 전통 정원. 정교한 누각, 가산(假山), 용벽(龍壁), 연못이 조화를 이루며, 주변 예원상장(바자르)은 전통 먹거리와 기념품의 보고입니다.",
    history: "명나라 관리 반윤단이 아버지를 위해 18년에 걸쳐 조성(1559~1577). 청대에 황폐했다가 1961년 복원 후 일반에 공개되었습니다.",
    visitInfo: {
      hours: "08:30~17:00 (16:45 입장 마감)",
      admission: "성수기(4~6월, 9~11월) ¥40 / 비수기 ¥30",
      address: "上海市黄浦区安仁街137号",
      website: "https://www.yugarden.com.cn",
    },
    highlights: [
      "옥링롱 - 높이 3.3m의 태호석 기석, 예원의 보물",
      "점춘당 - 소도회 봉기 사령부로 쓰인 역사적 건물",
      "대가산 - 명대 조원 명장 장남양의 작품",
      "예원상장 바자르에서 난상샤오롱바오(남상소롱포) 맛보기",
    ],
    nearbyAttractions: ["와이탄", "도성황묘", "난징루", "톈쯔팡"],
    photoTips: "구룡벽(九龍壁)과 호심정(호수 한가운데 찻집)이 가장 포토제닉한 포인트입니다.",
    tips: [
      "오전 개장 직후(8:30)에 방문하면 인파 없이 고즈넉하게 관람 가능합니다.",
      "예원상장의 난상만터우뎬에서 샤오롱바오를 꼭 맛보세요.",
      "정원 관람 약 1.5시간 + 바자르 쇼핑 약 1시간 예상하세요.",
    ],
  },
  "china/shanghai-east/shanghai/shanghai-tower": {
    heroGradient: "from-blue-700 to-indigo-900",
    description: "높이 632m, 128층의 중국 최고층 빌딩이자 세계에서 세 번째로 높은 건물. 나선형으로 회전하는 외관이 특징이며, 118층 전망대(Top of Shanghai)에서 상하이 전역을 360도로 조망할 수 있습니다.",
    history: "2008년 착공, 2015년 완공. 9개 원통형 구역을 나선 형태로 감싼 독특한 구조는 풍압을 24% 줄이도록 설계되었습니다.",
    visitInfo: {
      hours: "08:30~21:30 (21:00 입장 마감)",
      admission: "¥180 (118층 전망대)",
      address: "上海市浦东新区陆家嘴环路479号",
      website: "https://www.shanghaitower.com",
    },
    highlights: [
      "118층 전망대(Top of Shanghai) - 지상 546m에서 360도 파노라마 뷰",
      "세계에서 가장 빠른 엘리베이터 중 하나 (초속 18m, 55초 만에 도착)",
      "맑은 날 와이탄, 황푸강, 상하이 전역이 한눈에",
      "일몰 시간대 방문 시 황금빛 스카이라인과 야경을 모두 감상",
    ],
    nearbyAttractions: ["와이탄", "동방명주탑", "상하이 세계금융센터", "루자쭈이 중심녹지"],
    photoTips: "일몰 30분 전에 입장하면 황금빛 일몰과 뒤이어 펼쳐지는 야경을 모두 촬영할 수 있습니다.",
    tips: [
      "맑은 날 방문해야 뷰가 좋습니다. 미세먼지가 심한 날은 피하세요.",
      "오후 4시쯤 입장하면 일몰과 야경을 모두 볼 수 있어 가성비 최고입니다.",
      "주말은 줄이 길므로 평일 방문을 추천합니다.",
    ],
  },

  // ===== XI'AN =====
  "china/xian-central/xian/terracotta-warriors": {
    heroGradient: "from-amber-600 to-red-800",
    description: "1974년 우물을 파다 우연히 발견된 20세기 최대의 고고학적 발견. 진시황제의 무덤을 호위하는 약 8,000개의 실물 크기 병사, 130대의 전차, 670마리의 말 토용이 전투 대형으로 배치되어 있습니다.",
    history: "기원전 246년~기원전 208년, 약 70만 명의 노동력으로 38년간 제작. 1974년 현지 농민이 우물을 파다 발견했으며, 1987년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "3~11월 08:30~18:00 / 12~2월 08:30~17:30",
      admission: "¥120 (1·2·3호갱 + 진시황릉 포함)",
      address: "陕西省西安市临潼区秦陵北路",
      website: "https://www.bmy.com.cn",
    },
    highlights: [
      "1호갱 - 가장 크고 인상적인 갱으로 6,000여 개의 병사 토용이 전투 대형으로 배치",
      "2호갱 - 기병, 궁수, 전차병 등 다양한 병종이 혼합된 군사 대형",
      "청동마차 전시관 - 실물 1/2 크기의 정교한 청동 마차 2기",
      "각 토용의 얼굴 표정과 머리 모양이 모두 다른 디테일",
    ],
    nearbyAttractions: ["화청지", "진시황릉", "리산", "시안 시내"],
    photoTips: "1호갱 입구 2층 발코니에서 전체 대형을 한 장에 담을 수 있습니다. 오전 빛이 좋습니다.",
    tips: [
      "가이드(한국어/영어) 설명을 들으면 이해도가 배가 됩니다.",
      "1호갱 → 2호갱 → 3호갱 → 청동마차관 순서로 관람하세요.",
      "시안 시내에서 306번(游5) 버스로 약 1시간 소요됩니다.",
      "최소 2~3시간을 잡으세요.",
    ],
  },
  "china/xian-central/xian/muslim-quarter": {
    heroGradient: "from-orange-500 to-red-700",
    description: "약 1,300년 역사의 이슬람 문화 지구로 시안 최대의 먹자골목. 실크로드를 통해 정착한 무슬림 후이족의 문화가 중국 문화와 융합되어 독특한 음식, 건축, 생활 양식을 형성하고 있습니다.",
    history: "당나라 시기 실크로드 교역을 위해 정착한 아랍·페르시아 상인들이 형성한 커뮤니티로, 현재 약 3만 명의 회족이 거주합니다.",
    visitInfo: {
      hours: "대부분의 가게 10:00~22:00 (먹거리 골목은 밤 10시까지 활발)",
      admission: "무료 (대청진사 입장 ¥25)",
      address: "陕西省西安市莲湖区北院门",
    },
    highlights: [
      "양꼬치 골목 - 숯불에 구운 양꼬치의 향이 가득한 먹자골목",
      "대청진사(大清真寺) - 중국 4대 모스크 중 하나로 중국식 건축의 이슬람 사원",
      "자팡원라우즈모 - 납작한 빵에 간장 조림 고기를 넣은 시안 명물",
      "류시샹위안쭈팡 - 석류주스, 찹쌀떡 등 전통 간식 거리",
    ],
    nearbyAttractions: ["종루", "고루", "시안 성벽", "비림 박물관"],
    photoTips: "저녁 7시 이후 골목에 홍등이 켜지면 활기찬 야시장 분위기를 촬영할 수 있습니다.",
    tips: [
      "이슬람 지구이므로 돼지고기를 사용하지 않습니다(할랄 음식).",
      "저녁 시간대가 가장 활기차며, 먹거리는 현금(위챗페이)으로 결제합니다.",
      "대청진사는 예배 시간에는 비무슬림 입장이 제한될 수 있습니다.",
    ],
  },

  // ===== HONG KONG =====
  "china/guangdong-south/hong-kong/victoria-peak": {
    heroGradient: "from-pink-500 to-purple-700",
    description: "해발 552m 빅토리아 피크에서 내려다보는 홍콩 스카이라인과 빅토리아 하버의 파노라마 야경은 세계 3대 야경 중 하나로 꼽힙니다. 피크트램으로 올라가는 과정 자체도 홍콩의 상징적 체험입니다.",
    history: "1888년 피크트램 개통 이후 홍콩 최고의 전망 명소가 되었습니다. 식민지 시대에는 총독과 상류층만 거주할 수 있었던 고급 주거지였습니다.",
    visitInfo: {
      hours: "피크트램: 07:00~00:00 / 스카이 테라스 428: 10:00~23:00",
      admission: "피크트램 왕복 HKD 88 / 스카이 테라스 428 HKD 75",
      address: "Peak Tower, 128 Peak Road, Hong Kong",
      website: "https://www.thepeak.com.hk",
    },
    highlights: [
      "스카이 테라스 428 - 아시아 최고 높이의 360도 전망대",
      "루가드 로드 - 피크를 돌아보는 약 3.5km 산책로에서 탁 트인 뷰",
      "피크트램 - 1888년부터 운행한 세계에서 가장 오래된 푸니쿨라 중 하나",
      "야경 - 일몰 후 수백만 개의 불빛이 수놓는 스카이라인",
    ],
    nearbyAttractions: ["소호", "란콰이펑", "센트럴 미드레벨 에스컬레이터", "홍콩공원"],
    photoTips: "스카이 테라스보다 루가드 로드의 사자정(Lion's Pavilion) 근처가 무료이면서 더 탁 트인 뷰를 제공합니다.",
    tips: [
      "일몰 30분 전에 도착하면 일몰과 야경을 모두 즐길 수 있습니다.",
      "피크트램은 줄이 매우 기므로 오전 이른 시간 또는 밤 8시 이후를 추천합니다.",
      "15번 버스로도 피크에 갈 수 있으며 2층 앞좌석에서 경치가 좋습니다.",
    ],
  },
  "china/guangdong-south/hong-kong/star-ferry": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "1888년부터 운항한 홍콩의 상징적 페리로, 녹색·흰색의 클래식한 선체가 침사추이와 센트럴·완차이 사이 빅토리아 하버를 왕복합니다. HKD 5 미만의 요금으로 세계 최고의 항구 뷰를 즐길 수 있습니다.",
    history: "1888년 개인 사업자가 시작한 페리 서비스로, 130년 이상 홍콩 시민의 발이자 관광 명물이 되어왔습니다.",
    visitInfo: {
      hours: "침사추이~센트럴: 06:30~23:30 (매 6~12분 간격)",
      admission: "평일 HKD 3.7~5.0 / 주말 HKD 5.2~6.5 (2층 기준)",
      address: "Star Ferry Pier, Tsim Sha Tsui, Kowloon",
      website: "https://www.starferry.com.hk",
    },
    highlights: [
      "야경 크루즈 - 저녁 시간 2층 야외석에서 양안의 스카이라인 감상",
      "심포니 오브 라이츠 - 매일 밤 8시 빛과 음악의 쇼를 페리에서 감상",
      "130년 역사의 클래식한 녹색·흰색 선체",
      "세계에서 가장 저렴하면서 로맨틱한 항구 크루즈",
    ],
    nearbyAttractions: ["스타의 거리", "홍콩문화센터", "하버시티", "빅토리아 피크"],
    photoTips: "2층 야외 뒷좌석에서 페리가 출발한 후 점점 멀어지는 부두와 스카이라인을 촬영하세요.",
    tips: [
      "2층 야외석에 앉으세요. 1층보다 뷰가 훨씬 좋습니다.",
      "저녁 8시 전후로 타면 심포니 오브 라이츠 쇼를 배 위에서 볼 수 있습니다.",
      "옥토퍼스 카드로 탑승하면 편리합니다.",
    ],
  },
  "china/guangdong-south/hong-kong/temple-street-night-market": {
    heroGradient: "from-orange-500 to-red-700",
    description: "매일 저녁 펼쳐지는 구룡반도의 대표 야시장. 의류, 전자기기, 기념품 노점이 줄지어 있고, 광둥식 해산물 포장마차, 점술가의 텐트까지 홍콩의 로컬 문화를 가장 생생하게 체험할 수 있는 곳입니다.",
    history: "1920년대부터 자연발생적으로 형성된 시장으로, 이름은 인근의 천후묘(天后廟)에서 유래했습니다.",
    visitInfo: {
      hours: "매일 16:00~24:00 (가장 활발한 시간 19:00~23:00)",
      admission: "무료",
      address: "Temple Street, Yau Ma Tei, Kowloon",
    },
    highlights: [
      "길거리 음식 - 완탕면, 커리 피쉬볼, 계란와플(지단자이) 등",
      "흥정 문화 - 기념품, 의류, 액세서리를 흥정하는 재미",
      "점술·손금 텐트 - 광둥어·영어로 운세를 봐주는 점술가",
      "광둥식 해산물 포장마차에서 현지인처럼 식사",
    ],
    nearbyAttractions: ["레이디스 마켓", "옥 시장", "천후묘", "몽콕"],
    photoTips: "시장 입구에서 양쪽으로 늘어선 노점의 조명이 터널처럼 이어지는 장면이 인상적입니다.",
    tips: [
      "흥정은 표시 가격의 50~60%부터 시작하세요.",
      "전자기기는 품질이 보장되지 않으니 주의하세요.",
      "저녁 7시 이후부터 가장 활기차며, 가볍게 구경하는 데 약 1~2시간 소요됩니다.",
    ],
  },

  // ===== HANGZHOU =====
  "china/shanghai-east/hangzhou/west-lake": {
    heroGradient: "from-emerald-400 to-green-700",
    description: "유네스코 세계유산에 등재된 항저우의 상징. 호수 주변 산, 사원, 누각, 다리가 빚어내는 풍광은 중국 역대 시인·화가의 영감의 원천이었으며, '서호 10경'으로 불리는 전통 경관이 유명합니다.",
    history: "2,000년 이상의 역사를 가진 인공호로 당나라 백거이, 송나라 소동파가 제방을 쌓아 현재의 모습을 갖추었습니다. 2011년 유네스코 세계유산에 등재.",
    visitInfo: {
      hours: "24시간 개방 (유람선 08:00~17:00)",
      admission: "호수 무료 / 유람선 ¥55~70 / 뇌봉탑 ¥40",
      address: "浙江省杭州市西湖区龙井路1号",
    },
    highlights: [
      "소영주(三潭印月) - 호수 위 작은 섬에서 바라보는 삼담인월(세 탑에 비친 달) 경관",
      "단교잔설 - 겨울 눈이 녹을 때 다리 위의 잔설 풍경이 환상적",
      "뇌봉탑 - 백사전 전설의 배경이 된 탑에서 서호 전경 조망",
      "용정차 마을에서 갓 딴 녹차 시음",
    ],
    nearbyAttractions: ["영은사", "용정차 마을", "허팡제 거리", "중국 실크 박물관"],
    photoTips: "소영주에서 삼담인월 방향으로 촬영하면 서호의 대표 사진을 얻을 수 있습니다. 안개 낀 아침이 가장 아름답습니다.",
    tips: [
      "공유자전거로 호수 한 바퀴(약 15km) 돌기를 추천합니다.",
      "유람선은 소영주(삼담인월) 코스가 가장 인기이며 약 1시간 소요.",
      "주말에는 매우 붐비므로 평일 방문을 권장합니다.",
    ],
  },

  // ===== CHENGDU =====
  "china/sichuan-southwest/chengdu/giant-panda-base": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "100마리 이상의 자이언트 판다와 레서 판다를 자연에 가까운 환경에서 관찰할 수 있는 세계적인 판다 보호·번식 연구 기지. 대나무 숲 속에서 뒹구는 아기 판다의 모습은 잊을 수 없는 감동을 선사합니다.",
    history: "1987년 야생에서 구조된 6마리의 판다를 시작으로 설립. 현재 200마리 이상으로 번식에 성공하며 세계적인 판다 보호 기관이 되었습니다.",
    visitInfo: {
      hours: "07:30~18:00 (17:00 입장 마감)",
      admission: "¥55",
      address: "成都市成华区熊猫大道1375号",
      website: "https://www.panda.org.cn",
    },
    highlights: [
      "아기 판다관 - 갓 태어난 아기 판다를 볼 수 있는 가장 인기 있는 구역",
      "성체 판다 사육장 - 대나무를 먹거나 놀이하는 성체 판다 관찰",
      "레서 판다 구역 - 귀여운 레서 판다도 놓치지 마세요",
      "판다 영화관 - 판다 보호 활동 다큐멘터리 상영",
    ],
    nearbyAttractions: ["쟈오와이산 자연공원", "청두 시내 관광지"],
    photoTips: "오전 9시 이전이 판다가 가장 활동적이며 먹이 시간에 가까이서 촬영할 수 있습니다.",
    tips: [
      "오전 8시 이전에 도착하세요! 판다는 오전에 활동하고 오후에 잠을 잡니다.",
      "기지가 넓으므로 원내 전동차(¥10)를 이용해 먼 구역부터 방문하세요.",
      "아기 판다관은 줄이 길므로 개장 직후 바로 향하세요.",
    ],
  },
  "china/sichuan-southwest/chengdu/jinli-street": {
    heroGradient: "from-red-500 to-amber-600",
    description: "무후사 옆에 위치한 청나라 스타일의 보행 거리로, 전통 건축물, 찻집, 공예품 가게, 쓰촨 길거리 음식이 밀집한 청두의 대표 관광 거리입니다. 밤에 홍등이 켜지면 더욱 분위기가 살아납니다.",
    history: "진나라 시기 직물 시장에서 유래한 이름으로, 2004년 청대 건축 양식으로 복원 개장하여 청두의 대표 관광지가 되었습니다.",
    visitInfo: {
      hours: "대부분의 가게 09:00~22:00 (먹거리 골목은 밤까지 운영)",
      admission: "무료",
      address: "成都市武侯区武侯祠大街231号",
    },
    highlights: [
      "전통 공예 체험 - 설탕 인형 만들기, 변검(얼굴 변신) 공연",
      "쓰촨 길거리 음식 - 탕마지(마라 떡꼬치), 보보지, 두부푸딩",
      "홍등 야경 - 밤에 홍등이 켜지면 고풍스러운 분위기 극대화",
      "쓰촨 오페라(변검) - 순식간에 얼굴 가면을 바꾸는 전통 공연",
    ],
    nearbyAttractions: ["무후사", "쓰촨 박물관", "두보초당", "콴자이샹쯔"],
    photoTips: "밤에 홍등이 켜진 골목 전경이 가장 포토제닉합니다. 입구의 진리 간판과 함께 촬영하세요.",
    tips: [
      "무후사 관람 후 옆문으로 바로 연결되므로 함께 방문하세요.",
      "저녁에 방문하면 홍등 야경과 함께 길거리 음식을 즐길 수 있습니다.",
      "주말 저녁에는 매우 혼잡하므로 평일 오후를 추천합니다.",
    ],
  },

  // ===== GUILIN =====
  "china/sichuan-southwest/guilin/li-river-cruise": {
    heroGradient: "from-lime-500 to-green-800",
    description: "구이린에서 양숴까지 약 83km의 리강(漓江) 유람은 중국에서 가장 아름다운 수상 관광 코스입니다. 카르스트 봉우리, 대나무 숲, 어부의 뗏목이 수묵화 같은 풍경을 연출하며, 20위안 지폐 뒷면의 풍경이 바로 이곳입니다.",
    history: "리강 유람은 1970년대 관광용으로 개발되었으나, 이 풍경은 수천 년간 중국 시인과 화가의 영감의 원천이었습니다. 당나라 한유는 '강이 비단을 펼친 듯 하다'고 읊었습니다.",
    visitInfo: {
      hours: "유람선 출발 08:30~10:00 (약 4~5시간 소요)",
      admission: "¥210~270 (구간 및 선박에 따라 상이)",
      address: "桂林市竹江码头 (주장 부두 출발)",
    },
    highlights: [
      "구필봉 - 아홉 마리 말이 숨어있는 기암 찾기 놀이",
      "20위안 지폐 풍경 - 황부탄 부근에서 지폐 속 풍경과 실물 비교",
      "흥평 어촌 - 가마우지 어업의 전통 풍경",
      "양숴 도착 후 시싱가 거리의 활기찬 분위기",
    ],
    nearbyAttractions: ["양숴", "상비산", "첩채산", "룽지 다랭이 논"],
    photoTips: "갑판 위에서 양쪽 봉우리 사이로 강이 굽이치는 장면을 촬영하세요. 안개 낀 날은 수묵화 같은 분위기를 연출합니다.",
    tips: [
      "오전 일찍 출발하는 유람선을 예약하세요. 간식과 물을 준비하세요.",
      "4~10월이 수량이 풍부해 유람에 적합합니다.",
      "양숴에서 자전거 대여 후 시골 풍경을 달리는 것을 추천합니다.",
    ],
  },

  // ===== MACAU =====
  "china/guangdong-south/macau/ruins-of-st-pauls": {
    heroGradient: "from-amber-400 to-yellow-600",
    description: "1602년 건립된 동양 최대의 가톨릭 성당이었으나 1835년 화재로 전면 파사드(정면벽)만 남은 마카오의 상징적 유적. 정교한 석조 조각에는 기독교, 불교, 중국 전통 문양이 혼합되어 동서양 문화 융합의 상징입니다.",
    history: "1602~1640년 일본인 기독교 신자와 중국인 장인이 함께 건설. 1835년 태풍 후 화재로 성당 본체가 소실되고 정면 파사드, 계단, 지하 납골당만 남았습니다.",
    visitInfo: {
      hours: "파사드: 24시간 / 뒷편 박물관: 09:00~18:00 (화요일 휴관)",
      admission: "무료",
      address: "Rua de São Paulo, Macau",
    },
    highlights: [
      "정면 파사드 - 4층 구조의 바로크 양식 석조 조각",
      "동서양 문양 융합 - 성모상, 용, 국화, 해골 등 다양한 문화 상징",
      "뒷편 박물관 - 성당 역사와 발굴 유물 전시",
      "68개 계단 위에서 내려다보는 세나도 광장 전경",
    ],
    nearbyAttractions: ["몬테 요새", "세나도 광장", "대삼파 거리", "관음사"],
    photoTips: "낮에는 정면에서 파사드 전체를 담고, 밤에는 조명이 켜진 파사드가 더욱 웅장합니다.",
    tips: [
      "세나도 광장에서 도보 5분 거리이므로 함께 방문하세요.",
      "대삼파 거리의 육포 시식과 에그타르트를 함께 즐기세요.",
      "야간 조명이 아름다우므로 낮과 밤 두 번 방문해도 좋습니다.",
    ],
  },

  // ===== SUZHOU =====
  "china/shanghai-east/suzhou/humble-administrators-garden": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "중국 4대 명원 중 하나이자 쑤저우 최대의 정원. 5.2ha 부지에 연못, 섬, 정자, 회랑, 가산이 자연스럽게 조화된 강남 원림 예술의 최고 걸작으로, 유네스코 세계유산에 등재되어 있습니다.",
    history: "1509년 명대 관리 왕헌신이 관직에서 물러난 후 조성. 이름은 서진 시대 반악의 '졸자지위정(어리석은 자의 정무는 정원을 가꾸는 것)'에서 유래했습니다.",
    visitInfo: {
      hours: "3~11월 07:30~17:30 / 12~2월 07:30~17:00",
      admission: "성수기(3~6월, 9~11월) ¥80 / 비수기 ¥60",
      address: "江苏省苏州市姑苏区东北街178号",
      website: "https://www.szzzy.cn",
    },
    highlights: [
      "중원(中園) - 넓은 연못을 중심으로 정자와 회랑이 둘러싼 핵심 구역",
      "향저우정(香洲亭) - 배 모양의 정자로 물 위에 떠 있는 듯한 디자인",
      "원향당(遠香堂) - 정원의 중심 건물에서 연못과 연꽃 조망",
      "여름 연꽃 시즌(6~8월)의 화려한 연꽃 풍경",
    ],
    nearbyAttractions: ["사자림", "쑤저우 박물관(베이밍 설계)", "평강루", "호구산"],
    photoTips: "원향당에서 연못 방향으로 촬영하면 전형적인 강남 정원 사진을 얻을 수 있습니다. 이른 아침 안개 낀 정원이 가장 아름답습니다.",
    tips: [
      "오전 개장 직후(7:30)에 방문하면 인파 없이 고즈넉하게 관람할 수 있습니다.",
      "바로 옆 쑤저우 박물관(베이밍 설계, 무료)도 함께 방문하세요.",
      "관람에 약 1.5~2시간이 필요하며, 오디오 가이드를 추천합니다.",
    ],
  },
};
