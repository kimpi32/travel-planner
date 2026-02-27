import type { CityDetail, AttractionDetail } from "../city-details";

export const tanzaniaCityDetails: Record<string, CityDetail> = {
  // ===== NORTHERN CIRCUIT =====
  "tanzania/northern-circuit/arusha": {
    heroGradient: "from-green-500 to-emerald-900",
    description: "탄자니아 북부 사파리 회로의 관문 도시. 킬리만자로(3시간 거리), 세렝게티, 응고롱고로 사파리를 위한 사파리 투어의 베이스캠프로 탄자니아에서 가장 활기찬 관광 허브입니다.",
    bestTime: "6~10월 (건기, 사파리 최적) / 1~2월 (짧은 건기)",
    stayArea: "아루샤 시내 / 응가이 길 / 올모토니 구역",
    transport: "렌터카·택시 (사파리 차량 포함), 시내 달라달라(미니버스)",
    districts: [
      { name: "아루샤 시내", nameEn: "Arusha Town Centre", description: "클락 타워를 중심으로 한 아루샤의 상업 중심부. 사파리 투어 회사, 숙소, 환전소가 밀집합니다.", highlights: ["아루샤 시계탑", "나이트 마켓", "메인 마켓"] },
      { name: "응가이 로드", nameEn: "Ngai Road", description: "아루샤의 고급 호텔, 레스토랑, 카페가 모여있는 관광객 중심 지구.", highlights: ["부티크 호텔", "인터내셔널 레스토랑", "사파리 부킹 센터"] },
    ],
    attractions: [
      { name: "아루샤 국립공원", nameEn: "Arusha National Park", description: "메루 화산(4,565m)을 품은 소규모이지만 밀도 높은 국립공원. 기린, 물소, 얼룩말, 코끼리가 서식하며 킬리만자로 전망 포인트로도 인기.", category: "국립공원", tip: "세렝게티보다 관광객이 훨씬 적어 야생동물을 더 가까이서 볼 수 있습니다." },
      { name: "아루샤 문화 헤리티지 센터", nameEn: "Arusha Cultural Heritage Centre", description: "탄자니아 최대의 공예·예술품 전시 판매장. 마콘데 조각, 팅가팅가 회화, 마사이 장신구 등 동아프리카 최고의 수공예품 컬렉션.", category: "박물관·쇼핑" },
      { name: "마사이 문화 체험", nameEn: "Masai Cultural Experience", description: "아루샤 인근 마사이 빌리지 방문으로 전통 점프 댄스(아두무), 목걸이 만들기, 불 피우기 등 마사이 전통 문화 체험.", category: "문화체험" },
    ],
    dayTrips: [
      { name: "응고롱고로 분화구", nameEn: "Ngorongoro Crater", description: "세계 최대 칼데라 분화구 안의 완전한 생태계. 빅파이브 관찰 최적.", travelTime: "차량 약 3시간", gradient: "from-teal-500 to-green-800" },
      { name: "타랑기레 국립공원", nameEn: "Tarangire National Park", description: "세계 최대 코끼리 밀집 지역으로 건기에는 수천 마리가 강변에 집결합니다.", travelTime: "차량 약 2시간", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "우갈리와 은야마 차마", description: "옥수수가루 우갈리와 탄자니아식 BBQ 고기. 아루샤 로컬 식당의 기본 메뉴.", emoji: "🌽" },
      { name: "수프 야 피가", description: "소뼈 국물로 끓인 영양 만점 탄자니아 전통 수프. 현지인들의 아침 식사.", emoji: "🍲" },
      { name: "차파티", description: "부드럽고 납작한 탄자니아 빵. 카레나 스튜와 함께 먹는 탄자니아의 일상 음식.", emoji: "🫓" },
    ],
    tips: [
      "아루샤에서 사파리를 예약할 때는 반드시 인가된 사파리 회사(TATO 회원)인지 확인하세요.",
      "사파리 전날 아루샤에서 1박하고 이른 아침에 출발하는 것이 효율적입니다.",
      "황열병 예방접종 증명서와 비자(또는 ETA)를 반드시 준비하세요.",
      "탄자니아 실링과 달러 모두 통용되며 사파리 비용은 달러로 지불합니다.",
    ],
  },

  // ===== ZANZIBAR =====
  "tanzania/zanzibar/zanzibar": {
    heroGradient: "from-cyan-400 to-teal-900",
    description: "인도양의 향신료 섬. 유네스코 세계문화유산 스톤타운의 미로 같은 골목, 순백의 산호 해변, 클로브·계피·바닐라·육두구 향기가 가득한 향신료 농장이 어우러진 '아프리카의 에메랄드'입니다.",
    bestTime: "6~10월 (남동계절풍 후 건기) / 12~2월 (북동계절풍 후 건기)",
    stayArea: "스톤타운 / 눙위 비치 / 프렌드십 비치",
    transport: "달라달라(로컬 버스), 렌터카, 오토바이, 배(섬간 이동)",
    districts: [
      { name: "스톤타운", nameEn: "Stone Town", description: "유네스코 세계문화유산으로 아랍·인도·스와힐리·포르투갈 건축이 혼합된 중세 항구 도시. 데이비드 리빙스턴 박사가 머물렀고 노예 무역의 아픈 역사가 담긴 곳.", highlights: ["프레디 머큐리 생가", "데이비드 리빙스턴 하우스", "노예 시장 기념관"] },
      { name: "눙위", nameEn: "Nungwi", description: "잔지바르 북쪽 끝 해변. 산호초가 없어 조수간만의 영향을 받지 않아 언제든 수영 가능한 최고의 해변.", highlights: ["눙위 비치", "나이트 수산 시장", "스노클링·다이빙"] },
      { name: "팜위 비치", nameEn: "Paje Beach", description: "잔지바르 동쪽 해변으로 카이트서핑의 메카. 얕은 청록색 바다와 새하얀 모래가 인도양 최고의 해변 중 하나.", highlights: ["카이트서핑", "원숭이 산호초 스노클링", "부기 비치 파티"] },
    ],
    attractions: [
      { name: "스톤타운", nameEn: "Stone Town", description: "14세기부터 형성된 잔지바르 문화의 중심지. 로큰롤 전설 프레디 머큐리의 생가, 동아프리카 최대 노예 무역 유적, 압도적인 향신료 시장이 좁은 골목에 얽혀있는 살아있는 세계유산.", category: "역사지구", tip: "골목 탐방은 혼자보다 스톤타운 공인 가이드와 함께하는 것이 역사를 이해하는 데 훨씬 풍부합니다." },
      { name: "향신료 농장 투어", nameEn: "Spice Farm Tour", description: "잔지바르가 '향신료 섬'으로 불리는 이유를 직접 확인하는 투어. 클로브, 계피, 바닐라, 육두구, 후추 등 20종 이상의 향신료를 직접 보고 맡고 맛볼 수 있습니다.", category: "체험", tip: "향신료 코스요리(잔지바르 피자 포함) 점심이 포함된 반나절 투어를 선택하세요." },
      { name: "프레디 머큐리 생가", nameEn: "Freddie Mercury's Birthplace", description: "록 밴드 퀸의 보컬 프레디 머큐리가 1946년 잔지바르 스톤타운에서 태어났습니다. 현재는 카페·기념품 숍으로 운영되는 음악 순례지.", category: "랜드마크" },
      { name: "노예 시장 박물관", nameEn: "Slave Trade Exhibition", description: "19세기 세계 최대 아랍 노예 무역 시장이 있었던 현장. 현재는 앤글리칸 교회와 지하 노예 감금 시설이 보존되어 있습니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "프리즌 섬(창구 아일랜드)", nameEn: "Prison Island (Changuu)", description: "거대한 알다브라 거북이 100마리 이상 서식하는 작은 역사 섬.", travelTime: "보트 약 25분", gradient: "from-amber-400 to-green-700" },
    ],
    localFood: [
      { name: "잔지바르 믹스드 그릴", description: "해산물과 고기를 향신료로 양념해 구운 잔지바르 스타일 그릴. 포로다니 야시장에서 저녁마다 열리는 길거리 음식 축제.", emoji: "🦐" },
      { name: "우루와 우 나시", description: "코코넛 밀크로 지은 밥에 여러 종류의 스튜를 얹어 먹는 잔지바르 전통 점심 문화.", emoji: "🍚" },
      { name: "잔지바르 피자", description: "얇은 도우에 달걀, 고기, 채소, 치즈를 넣고 접어 철판에 구운 잔지바르 독자 창작 요리.", emoji: "🥪" },
    ],
    tips: [
      "스톤타운의 골목은 정말 복잡합니다. 오프라인 지도를 미리 다운로드하세요.",
      "모스크와 교회가 많으니 어깨와 무릎을 가리는 복장이 필수입니다.",
      "포로다니 야시장(잔지바르 가든)은 일몰 후 오픈하며 잔지바르 최고의 먹거리 시장입니다.",
      "바다 조수간만의 영향이 크니 수영 계획은 조수표를 확인해 세우세요.",
    ],
  },

  // ===== KILIMANJARO =====
  "tanzania/kilimanjaro/moshi": {
    heroGradient: "from-slate-600 to-blue-900",
    description: "아프리카 최고봉 킬리만자로(5,895m) 등반의 베이스캠프 타운. 킬리만자로 등반 준비와 브리핑이 이루어지는 조용한 타운으로 맑은 날에는 시내 어디서나 눈 덮인 킬리만자로 정상을 바라볼 수 있습니다.",
    bestTime: "1~3월 / 6~10월 (킬리만자로 등반 최적 시즌)",
    stayArea: "모시 타운 / 마란구(킬리만자로 게이트 인근)",
    transport: "달라달라, 택시, 렌터카 (킬리만자로 공항과 30분 거리)",
    districts: [
      { name: "모시 타운", nameEn: "Moshi Town", description: "킬리만자로 등반 베이스캠프로 등반 장비 대여, 투어 부킹, 사전 고소 적응 트레킹 출발지.", highlights: ["등반 장비 숍", "모시 클락 타워", "인포메이션 센터"] },
      { name: "마란구", nameEn: "Marangu", description: "킬리만자로 국립공원 마란구 게이트 인근 마을. 가장 인기 있는 '코카콜라 루트'의 출발점.", highlights: ["마란구 게이트", "킬리만자로 박물관", "차가 문화 센터"] },
    ],
    attractions: [
      { name: "킬리만자로 등반", nameEn: "Kilimanjaro Climb", description: "아프리카 최고봉이자 세계에서 가장 높은 독립 화산 정상 우후루 피크(5,895m) 등반. 비전문 등산가도 도전할 수 있는 트레킹 루트가 여러 개 있으며 성공률은 루트와 일정에 따라 크게 달라집니다.", category: "트레킹", tip: "마란구 루트(5일)보다 마차메 루트(7일)가 고소 적응이 더 잘 되어 성공률이 높습니다." },
      { name: "킬리만자로 국립공원", nameEn: "Kilimanjaro National Park", description: "1987년 유네스코 세계자연유산으로 지정. 적도 화산 지형, 열대우림, 고산 식물, 빙하까지 5개의 식물 기후대가 수직으로 펼쳐집니다.", category: "국립공원" },
      { name: "차가 문화 체험", nameEn: "Chagga Cultural Tour", description: "킬리만자로 사면에 수천 년간 살아온 차가 부족의 전통 관개 시스템, 커피 농장, 동굴 주거지를 탐방하는 반나절 문화 투어.", category: "문화체험" },
    ],
    dayTrips: [
      { name: "잔지바르", nameEn: "Zanzibar", description: "킬리만자로 등반 후 인도양의 산호 해변에서 완전한 힐링.", travelTime: "킬리만자로 공항에서 비행기 약 1시간", gradient: "from-cyan-400 to-teal-700" },
    ],
    localFood: [
      { name: "차가 전통 커피", description: "킬리만자로 사면에서 재배한 아라비카 커피. 모시 카페에서 마시는 현지 원두 커피는 세계 최고 수준.", emoji: "☕" },
      { name: "킬리만자로 맥주", description: "탄자니아 국민 맥주로 킬리만자로 등반 성공 후 첫 모금의 맛은 인생 최고의 맥주.", emoji: "🍺" },
    ],
    tips: [
      "킬리만자로 등반은 반드시 공인 가이드와 함께해야 합니다. 공원 규정이자 안전을 위한 필수 조건입니다.",
      "등반 준비는 최소 3~6개월 전부터 체력 훈련을 시작하세요.",
      "고산증(AMS) 예방을 위해 '천천히 올라가기(Pole Pole)' 원칙을 지키세요.",
      "등반 장비(방한복, 방수복, 트레킹 폴, 두꺼운 장갑)를 모시에서 대여할 수 있습니다.",
    ],
  },
};

export const tanzaniaAttractionDetails: Record<string, AttractionDetail> = {
  "tanzania/northern-circuit/arusha/serengeti-national-park": {
    heroGradient: "from-amber-500 to-yellow-800",
    description: "세계에서 가장 유명한 야생동물 보호구역. '끝없는 평원'이라는 마사이어 이름 그대로 탁 트인 사바나에 150만 마리의 누, 25만 마리의 얼룩말, 수천 마리의 가젤이 서식합니다. 지구상 가장 위대한 동물 이동쇼인 대이동의 주무대.",
    history: "1951년 국립공원으로 지정되었으며 1981년 유네스코 세계자연유산으로 등재. 케냐 마사이 마라와 함께 지구상 가장 중요한 야생동물 생태계를 형성합니다.",
    visitInfo: {
      hours: "06:00~18:00",
      admission: "비거주자 60달러/일 + 차량 40달러",
      address: "Serengeti National Park, Arusha Region, Tanzania",
      website: "https://www.tanzaniaparks.go.tz",
    },
    highlights: [
      "150만 마리 누·얼룩말의 연간 대이동 (12월~7월: 세렝게티 → 마사이 마라)",
      "그루메티·마라강의 악어 기다리는 강 도하 장면",
      "세렝게티 대평원 한가운데의 열기구 사파리",
      "사자·치타·표범의 사냥 장면",
    ],
    nearbyAttractions: ["응고롱고로 분화구", "마사이 마라(케냐)", "올두바이 협곡"],
    photoTips: "오전 황금 시간대에 넓은 평원을 배경으로 동물 군집을 담는 와이드 샷이 세렝게티만의 풍경입니다. 열기구에서 찍는 조감도 사진이 가장 압도적입니다.",
    tips: [
      "세렝게티는 아루샤에서 약 5~6시간 거리입니다. 최소 2박 이상 체류를 권장합니다.",
      "열기구 사파리는 세렝게티 최고의 경험 중 하나입니다. 새벽 5시 출발하며 약 500달러입니다.",
      "12월~6월은 세렝게티 남쪽(탄자니아 내), 7~10월은 북쪽(케냐 방향)에 누 떼가 위치합니다.",
      "하이드(숨겨진 관찰 천막)에서 워터홀 동물 활동을 기다리는 경험도 추천합니다.",
    ],
  },
  "tanzania/northern-circuit/arusha/ngorongoro-crater": {
    heroGradient: "from-teal-500 to-green-800",
    description: "세계 최대의 무너지지 않은 칼데라 분화구 안에 형성된 완전한 생태계. 지름 19km, 깊이 600m의 분화구 안에 사자, 코끼리, 코뿔소, 들소, 하마 등 3만 마리 이상의 야생동물이 자연적으로 갇혀 서식하여 세계 최고의 빅파이브 관찰 명소입니다.",
    history: "약 200만~300만 년 전 대규모 화산 폭발로 화산 꼭대기가 붕괴되어 형성된 칼데라. 1979년 유네스코 세계자연유산으로 지정. 오마하 비치에서는 최초 인류의 발자국 화석이 발견되었습니다.",
    visitInfo: {
      hours: "06:00~18:00",
      admission: "비거주자 60달러/일 + 차량 40달러 + 분화구 입장료 별도",
      address: "Ngorongoro Conservation Area, Arusha Region, Tanzania",
    },
    highlights: [
      "분화구 바닥의 빅파이브 집중 관찰",
      "탄자니아 최후의 흑코뿔소 서식지",
      "수천 마리의 플라밍고가 서식하는 분화구 호수",
      "분화구 외벽에서 내려다보는 압도적 파노라마",
    ],
    nearbyAttractions: ["올두바이 협곡 박물관", "레마이 전망대", "마사이 문화 탐방"],
    photoTips: "분화구 외벽 도로에서 내려다보는 파노라마 뷰가 최고의 조망 포인트입니다. 분화구 바닥에서는 망원렌즈로 흑코뿔소와 사자 가족을 촬영하세요.",
    tips: [
      "분화구 안으로는 꼭대기에서 4WD 랜드크루저로만 내려갈 수 있습니다. 오전 6시 진입이 경쟁적입니다.",
      "분화구 바닥은 서늘하고 안개가 낄 수 있으니 방풍 재킷을 준비하세요.",
      "세렝게티와 달리 분화구 안에는 표범이 없습니다. 대신 흑코뿔소를 볼 가능성이 세렝게티보다 훨씬 높습니다.",
      "분화구 바닥에서 점심식사 시 솔개(독수리)가 음식을 채 갈 수 있으니 차 안에서 먹거나 덮개를 사용하세요.",
    ],
  },
  "tanzania/zanzibar/zanzibar/stone-town": {
    heroGradient: "from-orange-500 to-amber-900",
    description: "14세기부터 아랍 무역상들이 형성한 잔지바르 문화의 정수. 페르시아·아랍·인도·아프리카·포르투갈 건축 양식이 혼합된 좁은 골목과 700개 이상의 목각 문이 이어지는 유네스코 세계문화유산 구시가지. 프레디 머큐리의 생가와 동아프리카 노예무역의 흔적이 공존합니다.",
    history: "오만 술탄국이 1832년 수도를 무스카트에서 잔지바르 스톤타운으로 이전하면서 전성기를 맞았습니다. 19세기 세계 최대 클로브 향신료 수출항이자 아랍 노예무역의 중심지였으며 1964년 잔지바르 혁명으로 아랍 지배가 종식되었습니다.",
    visitInfo: {
      hours: "24시간 (박물관·관광지 별도)",
      admission: "무료",
      address: "Stone Town, Zanzibar City, Tanzania",
    },
    highlights: [
      "700개 이상의 전통 목각 문 아치 골목 탐방",
      "프레디 머큐리 생가 앞 기념 포토",
      "포로다니 가든 야시장의 잔지바르 먹거리 체험",
      "노예 무역 유적 지하 감금 시설 방문",
    ],
    nearbyAttractions: ["포로다니 야시장", "프레디 머큐리 생가", "잔지바르 박물관"],
    photoTips: "좁은 골목에서 파란 바다를 배경으로 아랍 목각 문을 담는 구도가 스톤타운의 상징적 사진입니다. 오후 늦은 황금 시간대에 낡은 산호 석회암 벽이 황금빛으로 빛납니다.",
    tips: [
      "스톤타운은 좁은 골목이 미로처럼 얽혀 있습니다. 1~2회는 길을 잃는 것을 즐기세요, 그것이 스톤타운의 매력입니다.",
      "공인 가이드를 고용하면 건축 양식의 역사적 배경과 노예무역 이야기를 깊이 이해할 수 있습니다.",
      "포로다니 가든 야시장은 일몰 후부터 열리며 신선한 해산물 그릴과 잔지바르 피자가 절대 맛있습니다.",
      "스톤타운 내 무슬림 지역이므로 모스크 앞에서는 조용히 하고 복장을 단정히 하세요.",
    ],
  },
  "tanzania/kilimanjaro/moshi/kilimanjaro-climb": {
    heroGradient: "from-slate-600 to-blue-900",
    description: "아프리카 최고봉이자 세계 최고의 독립 화산 우후루 피크(5,895m) 등반. '아프리카의 지붕'에서 바라보는 일출과 빙하는 일생 최고의 경험으로 꼽힙니다. 기술적 등반 장비 없이 도전 가능한 세계 7정상 중 가장 접근하기 쉬운 봉우리.",
    history: "1889년 한스 마이어가 첫 등정에 성공. 1987년 유네스코 세계자연유산으로 지정. 지구 온난화로 빙하가 빠르게 줄어들고 있으며 2050년에는 빙하가 완전히 사라질 것으로 예측됩니다.",
    visitInfo: {
      hours: "등반은 연중 가능 (권장: 1~3월, 6~10월)",
      admission: "국립공원 입장료 70달러/일 (5~9일 소요) + 가이드·포터 비용 포함 총 1,500~3,000달러",
      address: "Kilimanjaro National Park, Moshi, Tanzania",
      website: "https://www.tanzaniaparks.go.tz",
    },
    highlights: [
      "우후루 피크(5,895m) 아프리카 최고점 도달",
      "정상에서 바라보는 인도양과 케냐·탄자니아 대평원",
      "킬리만자로의 마지막 빙하 가까이서 관찰",
      "적도에서 열대우림→황야→알파인 사막→설원으로 이어지는 5개 기후대 통과",
    ],
    nearbyAttractions: ["모시 타운", "마란구 폭포", "차가 문화 투어"],
    photoTips: "우후루 피크 표지판과 함께하는 사진이 킬리만자로 등반의 상징적 인증 사진입니다. 정상 도달 직후 맑은 하늘과 빙하를 배경으로 광각으로 찍으세요.",
    tips: [
      "최소 7일(마차메 루트) 이상의 일정을 선택해 고소 적응을 충분히 하면 정상 도달 성공률이 크게 높아집니다.",
      "고산증 예방을 위해 '천천히, 천천히(Pole, Pole)'를 꼭 기억하세요.",
      "가이드, 쿡, 포터는 필수이며 공인 가이드 회사 선택이 안전에 직결됩니다.",
      "다이아목스(고산증 약) 복용 여부는 반드시 의사와 상담하세요.",
    ],
  },
};
