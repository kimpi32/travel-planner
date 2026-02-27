import type { CityDetail, AttractionDetail } from "../city-details";

export const norwayCityDetails: Record<string, CityDetail> = {
  // ===== OSLO-EAST =====
  "norway/oslo-east/oslo": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "노르웨이의 수도이자 최대 도시. 오슬로 피오르드에 면한 아름다운 항구 도시로, 뭉크 미술관, 비겔란 조각공원, 오페라하우스 등 북유럽 문화의 정수를 경험할 수 있습니다.",
    bestTime: "6~8월 (백야 시즌) / 12월 (크리스마스 마켓)",
    stayArea: "칼 요한 거리 / 아케르 브리게 주변",
    transport: "T-bane(지하철), 트램, 버스 (Ruter 통합 티켓)",
    districts: [
      { name: "센트룸", nameEn: "Sentrum", description: "칼 요한 거리와 왕궁, 오페라하우스가 있는 도심 핵심 지역.", highlights: ["칼 요한 거리", "왕궁", "오슬로 대성당", "아케르 브리게"] },
      { name: "프로그네르", nameEn: "Frogner", description: "비겔란 조각공원과 고급 주거지역이 자리한 서쪽 지구.", highlights: ["비겔란 조각공원", "프로그네르 공원", "노벨 평화센터"] },
      { name: "비게뢰이", nameEn: "Bjørvika", description: "오페라하우스와 뭉크 미술관이 있는 워터프론트 재개발 지역.", highlights: ["오슬로 오페라하우스", "뭉크 미술관", "바코드 빌딩"] },
    ],
    attractions: [
      { name: "비겔란 조각공원", nameEn: "Vigeland Park", description: "구스타프 비겔란의 212점 조각 작품이 전시된 세계 최대 규모의 단일 작가 조각공원.", category: "공원", tip: "인생의 순환을 표현한 모놀리텐(기둥)이 하이라이트입니다." },
      { name: "오슬로 오페라하우스", nameEn: "Oslo Opera House", description: "빙하를 형상화한 대리석 지붕 위를 걸으며 오슬로 피오르드 전경을 감상할 수 있습니다.", category: "건축", tip: "지붕 위 산책은 무료이며 일몰 시간대가 특히 아름답습니다." },
      { name: "뭉크 미술관", nameEn: "Munch Museum", description: "에드바르 뭉크의 대표작 '절규'를 포함한 2만 8천여 점의 작품을 소장한 미술관.", category: "미술관", tip: "온라인 사전 예약 시 할인 혜택이 있습니다." },
      { name: "아케르스후스 요새", nameEn: "Akershus Fortress", description: "13세기에 건설된 중세 요새로 오슬로 피오르드의 전경이 인상적입니다.", category: "요새" },
      { name: "왕궁", nameEn: "Royal Palace", description: "노르웨이 국왕의 공식 거주지로 매일 13시 30분 근위병 교대식이 열립니다.", category: "궁전", tip: "여름(6~8월)에만 내부 가이드 투어가 가능합니다." },
      { name: "노르웨이 민속박물관", nameEn: "Norwegian Folk Museum", description: "160채 이상의 전통 건물이 야외에 전시된 비그되이 반도의 민속촌.", category: "박물관" },
    ],
    dayTrips: [
      { name: "오슬로 피오르드 크루즈", nameEn: "Oslo Fjord Cruise", description: "오슬로 피오르드의 섬과 해안선을 감상하는 유람선 투어.", travelTime: "아케르 브리게에서 출발 2~3시간", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "스몰브뢰드", description: "노르웨이식 오픈 샌드위치. 연어, 새우, 치즈 등 다양한 토핑.", emoji: "🥪" },
      { name: "브루노스트", description: "캐러멜 풍미의 갈색 치즈, 노르웨이 국민 치즈.", emoji: "🧀" },
      { name: "라크피스크", description: "발효 송어 요리, 노르웨이 전통 별미.", emoji: "🐟" },
    ],
    tips: [
      "오슬로 패스(24/48/72시간)로 대중교통 무료 + 30개 이상 박물관 무료 입장이 가능합니다.",
      "여름에는 밤 10시까지 해가 지지 않아 관광 시간을 넉넉히 활용하세요.",
      "물가가 매우 비싸므로 슈퍼마켓(Rema 1000, Kiwi)을 활용하면 식비를 절약할 수 있습니다.",
      "일요일에는 대부분의 상점이 문을 닫으니 쇼핑은 평일에 하세요.",
    ],
  },

  // ===== BERGEN-FJORDS =====
  "norway/bergen-fjords/bergen": {
    heroGradient: "from-teal-500 to-emerald-800",
    description: "노르웨이 제2의 도시이자 피오르드의 관문. 유네스코 세계유산 브뤼겐 목조 건물과 7개의 산으로 둘러싸인 항구 도시로, 피오르드 탐험의 거점입니다.",
    bestTime: "5~9월 (6~8월 최적)",
    stayArea: "브뤼겐 / 어시장 주변",
    transport: "경전철, 버스 (Skyss 통합 티켓)",
    districts: [
      { name: "브뤼겐", nameEn: "Bryggen", description: "한자동맹 시대의 목조 상가 건물이 즐비한 유네스코 세계유산 지구.", highlights: ["브뤼겐 목조 건물", "한자 박물관", "로제크란츠 타워"] },
      { name: "베르겐 센트룸", nameEn: "Bergen Sentrum", description: "어시장과 쇼핑가가 밀집한 도심 상업 지구.", highlights: ["어시장(피스케토르게)", "올레 불 광장", "베르겐 대성당"] },
    ],
    attractions: [
      { name: "브뤼겐 부두", nameEn: "Bryggen Wharf", description: "14세기 한자동맹 시대의 목조 건물군으로 유네스코 세계유산에 등재된 베르겐의 상징.", category: "세계유산", tip: "건물 뒤편 좁은 골목길에 숨은 공방과 카페를 탐험하세요." },
      { name: "플뢰위엔 산", nameEn: "Floyen Mountain", description: "플뢰위바넨 푸니쿨라로 6분 만에 오르면 베르겐 시내와 피오르드 전경이 한눈에.", category: "전망대", tip: "도보 하산(약 45분)하면 숲길 트레킹을 즐길 수 있습니다." },
      { name: "어시장", nameEn: "Fish Market", description: "1200년대부터 이어진 전통 어시장. 신선한 해산물과 노르웨이 별미를 맛볼 수 있습니다.", category: "시장" },
      { name: "에드바르 그리그 박물관", nameEn: "Edvard Grieg Museum", description: "노르웨이 대표 작곡가 에드바르 그리그의 생가이자 작곡 공간 트롤하우겐.", category: "박물관", tip: "여름에는 매일 점심 콘서트가 열립니다." },
    ],
    dayTrips: [
      { name: "송네피오르드", nameEn: "Sognefjord", description: "노르웨이 최장(205km) 피오르드로 장엄한 자연 경관의 극치.", travelTime: "버스+페리 약 3시간", gradient: "from-blue-500 to-teal-800" },
      { name: "하당에르피오르드", nameEn: "Hardangerfjord", description: "과수원과 폭포가 어우러진 '과일의 피오르드'.", travelTime: "버스 약 2시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "피스케수페", description: "크림 베이스의 노르웨이 전통 생선 수프.", emoji: "🍲" },
      { name: "훈제 연어", description: "노르웨이산 프리미엄 훈제 연어, 딜과 함께.", emoji: "🐟" },
      { name: "크랍베클로르", description: "게살로 만든 노르웨이식 크로켓.", emoji: "🦀" },
    ],
    tips: [
      "베르겐은 연간 강수일이 200일 이상이므로 방수 자켓은 필수입니다.",
      "베르겐 카드로 플뢰위바넨 + 주요 박물관 무료 이용이 가능합니다.",
      "어시장에서 킹크랩 다리와 연어 시식은 꼭 해보세요.",
    ],
  },
  "norway/bergen-fjords/flam": {
    heroGradient: "from-green-600 to-teal-900",
    description: "송네피오르드 끝자락에 위치한 작은 마을로, 세계에서 가장 아름다운 철도 노선 중 하나인 플롬 철도의 출발지입니다. 노르웨이 인 어 넛셸 투어의 하이라이트.",
    bestTime: "5~9월 (6~8월 최적)",
    stayArea: "플롬 마을 중심",
    transport: "플롬 철도, 페리",
    districts: [
      { name: "플롬 마을", nameEn: "Flam Village", description: "피오르드와 산으로 둘러싸인 아담한 항구 마을.", highlights: ["플롬 철도 역", "플롬 마리나", "프레트하임 호텔"] },
    ],
    attractions: [
      { name: "플롬 철도", nameEn: "Flam Railway", description: "해발 0m에서 867m까지 20km를 오르는 세계에서 가장 가파른 일반 철도 중 하나.", category: "철도", tip: "좌석은 왼쪽에 앉아야 쇼스포센 폭포를 정면으로 볼 수 있습니다." },
      { name: "쇼스포센 폭포", nameEn: "Kjosfossen Waterfall", description: "플롬 철도가 잠시 멈추는 93m 높이의 장엄한 폭포. 여름에는 훌드라 공연이 펼쳐집니다.", category: "폭포" },
      { name: "스테그슈타인 전망대", nameEn: "Stegastein Viewpoint", description: "아우를란드피오르드 위 650m에서 돌출된 전망대. 아찔한 피오르드 전경을 선사합니다.", category: "전망대", tip: "플롬에서 셔틀버스로 약 20분 소요됩니다." },
    ],
    dayTrips: [
      { name: "네뢰이피오르드 크루즈", nameEn: "Naeroyfjord Cruise", description: "유네스코 세계유산 네뢰이피오르드를 가로지르는 2시간 크루즈.", travelTime: "플롬 출발 왕복 4시간", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "플롬 맥주", description: "피오르드의 깨끗한 물로 빚은 플롬 브루어리 크래프트 맥주.", emoji: "🍺" },
      { name: "사슴고기 스튜", description: "산악 지역 전통 요리, 부드러운 사슴고기와 베리 소스.", emoji: "🍖" },
    ],
    tips: [
      "플롬 철도는 성수기에 매진되므로 반드시 사전 예약하세요 (visitflam.com).",
      "노르웨이 인 어 넛셸 패키지로 베르겐~오슬로 구간을 편리하게 이동할 수 있습니다.",
      "여름에도 산 위는 쌀쌀하므로 겉옷을 챙기세요.",
    ],
  },
  "norway/bergen-fjords/geirangerfjord": {
    heroGradient: "from-blue-700 to-slate-900",
    description: "유네스코 세계유산에 등재된 노르웨이의 대표 피오르드. '일곱 자매 폭포'와 절벽 위 버려진 농장 등 자연의 위대함이 압도적인 경관을 연출합니다.",
    bestTime: "5~9월 (크루즈 운항 시즌)",
    stayArea: "게이랑에르 마을",
    transport: "크루즈, 버스 (자가 운전 추천)",
    districts: [
      { name: "게이랑에르 마을", nameEn: "Geiranger Village", description: "피오르드 끝자락의 작은 항구 마을로 크루즈 기항지.", highlights: ["게이랑에르 항구", "노르스크 피오르드센터", "플뤼달스유베 전망대"] },
    ],
    attractions: [
      { name: "게이랑에르피오르드 크루즈", nameEn: "Geirangerfjord Cruise", description: "15km 길이의 피오르드를 따라 일곱 자매 폭포, 구혼자 폭포, 버려진 농장을 감상하는 크루즈.", category: "크루즈", tip: "헬레쉴트~게이랑에르 구간 페리(약 1시간)가 가장 인기 있는 코스입니다." },
      { name: "플뤼달스유베 전망대", nameEn: "Flydalsjuvet Viewpoint", description: "게이랑에르피오르드의 가장 상징적인 사진을 찍을 수 있는 절벽 전망대.", category: "전망대" },
      { name: "달스니바 전망대", nameEn: "Dalsnibba Viewpoint", description: "해발 1,500m에서 게이랑에르피오르드 전체를 조망하는 최고 높이 전망대.", category: "전망대", tip: "톨게이트 통과 필요(NOK 150). 6~10월만 개방됩니다." },
    ],
    dayTrips: [
      { name: "트롤스티겐", nameEn: "Trollstigen", description: "11개의 급커브 헤어핀으로 이루어진 노르웨이의 전설적 산악 도로.", travelTime: "차량 약 1.5시간", gradient: "from-slate-500 to-gray-800" },
    ],
    localFood: [
      { name: "브루노스트 와플", description: "갈색 치즈를 올린 노르웨이식 와플, 산뜻한 사워크림 곁들임.", emoji: "🧇" },
      { name: "대구 요리", description: "노르웨이 전통 방식으로 조리한 신선한 대구.", emoji: "🐟" },
    ],
    tips: [
      "크루즈 시즌(5~9월)에만 페리가 운항하므로 일정 확인이 필수입니다.",
      "렌터카 여행 시 이글 로드(외르네베겐)를 드라이브하면 절경을 만끽할 수 있습니다.",
      "게이랑에르 마을은 매우 작으므로 숙소를 일찍 예약하세요.",
    ],
  },

  // ===== ARCTIC-NORTH =====
  "norway/arctic-north/tromso": {
    heroGradient: "from-purple-600 to-indigo-900",
    description: "북극권 위 350km에 위치한 '북극의 관문'. 오로라 관측의 최적지이자 백야의 도시로, 북극 대성당과 함께 북극 문화의 중심지입니다.",
    bestTime: "9~3월 (오로라) / 5~7월 (백야)",
    stayArea: "트롬쇠 섬 시내 중심",
    transport: "버스 (Troms 통합 티켓)",
    districts: [
      { name: "트롬쇠 센트룸", nameEn: "Tromsø Sentrum", description: "컬러풀한 목조 건물과 카페, 레스토랑이 밀집한 북극 도심.", highlights: ["스토르토르게 광장", "폴라리아 수족관", "트롬쇠 대성당"] },
      { name: "트롬스달렌", nameEn: "Tromsdalen", description: "북극 대성당과 피엘하이센 케이블카가 있는 본토 쪽 지구.", highlights: ["북극 대성당", "피엘하이센 전망대", "트롬스달렌 식물원"] },
    ],
    attractions: [
      { name: "북극 대성당", nameEn: "Arctic Cathedral", description: "삼각형 형태의 건축이 인상적인 트롬쇠의 랜드마크 교회. 스테인드글라스가 아름답습니다.", category: "건축", tip: "여름에는 자정 태양 콘서트가 열립니다." },
      { name: "오로라 투어", nameEn: "Northern Lights", description: "9월~3월 트롬쇠 교외에서 오로라를 관측하는 가이드 투어. 맑은 밤 확률이 높은 최적의 관측지입니다.", category: "자연", tip: "최소 3일 체류해야 오로라를 볼 확률이 높아집니다. 카메라 삼각대 필수!" },
      { name: "피엘하이센 전망대", nameEn: "Fjellheisen Viewpoint", description: "케이블카로 해발 421m에 올라 트롬쇠 섬과 주변 피오르드, 산맥 전경을 감상합니다.", category: "전망대", tip: "오로라 시즌에는 전망대에서 오로라 관측도 가능합니다." },
      { name: "폴라리아 수족관", nameEn: "Polaria Aquarium", description: "북극 해양 생태계를 체험하는 수족관. 턱수염물범이 인기 스타입니다.", category: "수족관" },
      { name: "폴라 박물관", nameEn: "Polar Museum", description: "북극 탐험의 역사와 트롬쇠의 사냥·모피 무역 역사를 전시합니다.", category: "박물관" },
    ],
    dayTrips: [
      { name: "크발뢰야 섬", nameEn: "Kvaløya Island", description: "트롬쇠 인근의 '고래 섬'으로 해안 드라이브와 트레킹이 매력적.", travelTime: "버스 약 30분", gradient: "from-indigo-400 to-blue-800" },
    ],
    localFood: [
      { name: "킹크랩", description: "바렌츠해산 대왕 킹크랩. 트롬쇠의 최고 별미.", emoji: "🦀" },
      { name: "순록 스튜", description: "사미족 전통 요리, 부드러운 순록고기와 뿌리채소.", emoji: "🍖" },
      { name: "스톡피스크", description: "전통 방식으로 건조한 대구, 노르웨이 북부의 소울 푸드.", emoji: "🐟" },
    ],
    tips: [
      "오로라를 보려면 9~3월 방문하되, 11~1월은 극야(폴라나이트)로 낮이 거의 없습니다.",
      "방한복, 방수 부츠, 핫팩은 겨울 필수 준비물입니다.",
      "여름(5~7월) 백야 시즌에는 한밤에도 해가 지지 않는 신비로운 경험을 할 수 있습니다.",
      "트롬쇠 시내는 도보로 충분하지만 오로라 투어는 교외로 나가야 합니다.",
    ],
  },
  "norway/arctic-north/lofoten-islands": {
    heroGradient: "from-cyan-600 to-blue-900",
    description: "북극권 내 위치한 세계에서 가장 아름다운 섬 군도. 뾰족한 산봉우리, 청록빛 바다, 빨간 어부의 오두막(로르부)이 만드는 풍경은 내셔널 지오그래픽 선정 세계 3대 절경입니다.",
    bestTime: "6~8월 (트레킹) / 9~3월 (오로라)",
    stayArea: "레이네 / 스볼베르 / 헨닝스베르",
    transport: "렌터카 추천 (E10 도로) / 보되에서 페리",
    districts: [
      { name: "레이네·모스케네스", nameEn: "Reine-Moskenesøy", description: "로포텐의 가장 상징적인 마을로 엽서 같은 풍경이 펼쳐지는 남쪽 끝.", highlights: ["레이네브링엔 전망대", "레이네 어항", "오 마을"] },
      { name: "스볼베르", nameEn: "Svolvær", description: "로포텐의 행정·교통 중심지로 게스트하우스와 레스토랑이 밀집.", highlights: ["매직 아이스 바", "스볼베르게이타 산", "로포텐 전쟁기념관"] },
      { name: "함뇌이·사크리쇠이", nameEn: "Hamnøy-Sakrisøy", description: "빨간 로르부와 험준한 산봉우리가 어우러진 사진작가들의 성지.", highlights: ["함뇌이 다리 전망", "사크리쇠이 어항", "노르웨이 건어 건조대"] },
    ],
    attractions: [
      { name: "레이네", nameEn: "Reine", description: "로포텐에서 가장 아름다운 마을로 내셔널 지오그래픽이 선정한 노르웨이 최고의 경관.", category: "마을", tip: "레이네브링엔 트레킹(왕복 3시간)에서 마을 전경을 내려다보는 것이 하이라이트." },
      { name: "함뇌이", nameEn: "Hamnoy", description: "빨간 로르부 오두막이 바다 위에 떠있는 듯한 로포텐의 아이코닉한 풍경.", category: "마을", tip: "다리에서 촬영하는 구도가 가장 유명합니다. 새벽이나 일몰이 최고의 빛입니다." },
      { name: "로르부 숙박 체험", nameEn: "Rorbuer Stay", description: "전통 어부 오두막을 개조한 숙소에서 바다 위에서 잠드는 특별한 경험.", category: "체험" },
      { name: "해안 카약", nameEn: "Coastal Kayaking", description: "청록빛 피오르드를 카약으로 탐험하며 독수리와 바다표범을 만나는 모험.", category: "액티비티" },
      { name: "로포텐 바이킹 박물관", nameEn: "Lofotr Viking Museum", description: "83m 길이의 복원된 바이킹 롱하우스에서 바이킹 문화를 체험합니다.", category: "박물관", tip: "여름에는 바이킹 축제와 롱보트 체험이 가능합니다." },
    ],
    dayTrips: [
      { name: "오 마을", nameEn: "Å Village", description: "E10 도로의 최남단 종점 마을로 전통 대구 건조 방식을 볼 수 있습니다.", travelTime: "레이네에서 차량 약 10분", gradient: "from-amber-400 to-orange-700" },
      { name: "헨닝스베르", nameEn: "Henningsvær", description: "'로포텐의 베네치아'로 불리는 어촌 마을. 축구장이 유명합니다.", travelTime: "스볼베르에서 차량 약 25분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "스크레이", description: "로포텐 전통 방식으로 잡은 대구 요리. 1월~4월이 제철.", emoji: "🐟" },
      { name: "피스케카케", description: "노르웨이식 생선 케이크, 크림 소스와 함께.", emoji: "🍥" },
      { name: "크벤나비크 초콜릿", description: "로포텐 현지 수제 초콜릿, 바다소금 카라멜 맛이 인기.", emoji: "🍫" },
    ],
    tips: [
      "렌터카가 필수입니다. E10 도로를 따라 섬 전체를 종주할 수 있습니다.",
      "로르부(어부 오두막) 숙소는 성수기 수 개월 전에 예약하세요.",
      "여름에도 방풍 자켓과 겹겹이 입을 옷이 필요합니다.",
      "겨울(9~3월)에는 오로라 관측이 가능하지만 트레킹은 어렵습니다.",
    ],
  },
};

export const norwayAttractionDetails: Record<string, AttractionDetail> = {
  // ===== OSLO =====
  "norway/oslo-east/oslo/vigeland-park": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "구스타프 비겔란이 평생을 바쳐 만든 212점의 청동·화강암·철 조각 작품이 32만㎡ 공원에 전시되어 있습니다. 인간의 삶·사랑·죽음을 주제로 한 세계 최대 단일 작가 조각공원입니다.",
    history: "1924~1943년 구스타프 비겔란이 조각 작업을 진행했으며, 오슬로시와의 협약으로 자신의 모든 작품을 기증하는 대가로 이 공원을 조성하게 되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (야외 공원)",
      admission: "무료",
      address: "Nobels gate 32, 0268 Oslo",
      website: "https://www.vigeland.museum.no",
    },
    highlights: [
      "모놀리텐 - 121명의 인체가 엉켜 하늘을 향하는 17m 화강암 기둥",
      "생명의 다리 - 58개 청동 조각이 놓인 100m 다리",
      "성난 아이(Sinnataggen) - 공원의 마스코트 격인 화난 소년 동상",
      "생명의 수레바퀴 - 인간의 순환을 상징하는 화강암 조각",
    ],
    nearbyAttractions: ["오슬로 시립박물관", "노르웨이 민속박물관", "바이킹 선박 박물관", "프로그네르 공원 장미원"],
    photoTips: "모놀리텐은 아침 역광보다 오후 순광에서 디테일이 잘 살아납니다. 생명의 다리는 일출·일몰 시간대에 실루엣이 아름답습니다.",
    tips: [
      "24시간 개방이므로 한여름 백야 시즌 밤 산책이 환상적입니다.",
      "공원 면적이 넓으므로 최소 1~2시간은 잡으세요.",
      "T-bane(지하철) 마요르스투엔역에서 도보 10분입니다.",
    ],
  },
  "norway/oslo-east/oslo/oslo-opera-house": {
    heroGradient: "from-slate-400 to-blue-800",
    description: "빙하가 바다에 미끄러져 내리는 형상을 표현한 대리석·화강암 건축물로, 지붕 위를 자유롭게 걸으며 오슬로 피오르드와 도시 전경을 감상할 수 있습니다.",
    history: "2008년 개관한 노르웨이 국립 오페라·발레 극장으로, 건축사무소 Snøhetta가 설계했습니다. 바다에서 솟아오르는 빙하를 형상화한 디자인으로 2009년 EU 미스 반 데어 로에상을 수상했습니다.",
    visitInfo: {
      hours: "로비: 월~금 10:00~21:00, 토 11:00~21:00, 일 12:00~18:00 / 지붕: 상시 개방",
      admission: "지붕 산책 무료 / 가이드 투어 NOK 150 / 공연 NOK 200~1,200",
      address: "Kirsten Flagstads Plass 1, 0150 Oslo",
      website: "https://operaen.no",
    },
    highlights: [
      "대리석 지붕 위 산책과 피오르드 전망",
      "크리스토퍼 에켈베르그의 LED 조명 설치 작품",
      "오페라·발레 공연 관람",
      "올라퓨르 엘리아손의 '다른 벽' 유리 작품",
    ],
    nearbyAttractions: ["뭉크 미술관", "비요르비카 바코드 빌딩", "중앙역", "아케르스후스 요새"],
    photoTips: "일몰 시간 지붕 위에서 피오르드 방향으로 촬영하면 황금빛 파노라마를 담을 수 있습니다.",
    tips: [
      "지붕 산책은 무료이며 24시간 가능합니다. 일몰이 가장 아름답습니다.",
      "가이드 투어에서 무대 뒤편과 오케스트라 피트를 볼 수 있습니다.",
      "겨울에는 지붕이 미끄러울 수 있으니 주의하세요.",
    ],
  },
  "norway/oslo-east/oslo/munch-museum": {
    heroGradient: "from-orange-500 to-red-800",
    description: "에드바르 뭉크의 대표작 '절규'를 포함한 2만 8천여 점의 작품을 소장한 세계 최대 뭉크 컬렉션입니다. 2021년 비요르비카에 신축 개관한 13층 건물은 오슬로의 새로운 랜드마크입니다.",
    history: "뭉크가 사망(1944년) 후 오슬로시에 기증한 작품을 기반으로 1963년 개관했습니다. 2021년 비요르비카 워터프론트에 새 건물(스페인 건축사무소 에스투디오 에레로 설계)로 이전했습니다.",
    visitInfo: {
      hours: "매일 10:00~21:00 (월요일 ~18:00)",
      admission: "성인 NOK 160 / 18세 미만 무료 / 오슬로 패스 포함",
      address: "Edvard Munchs Plass 1, 0194 Oslo",
      website: "https://www.munchmuseet.no",
    },
    highlights: [
      "'절규'(The Scream) - 4개 버전 중 2점을 소장",
      "'마돈나', '생명의 춤', '사춘기' 등 뭉크의 대표작",
      "13층 전망 라운지에서 오슬로 파노라마",
      "기획 전시와 현대미술 특별전",
    ],
    nearbyAttractions: ["오슬로 오페라하우스", "비요르비카 바코드 빌딩", "중세 공원", "아케르스후스 요새"],
    photoTips: "'절규' 앞은 항상 혼잡합니다. 개관 직후(10시)에 가면 여유롭게 감상·촬영할 수 있습니다.",
    tips: [
      "온라인 예매 시 약 NOK 20 할인됩니다.",
      "'절규'는 빛에 민감해 별도 전시실에서 관리됩니다. 위치를 안내데스크에 확인하세요.",
      "13층 레스토랑에서 피오르드 전망과 함께 식사할 수 있습니다.",
      "오슬로 패스에 포함되어 있으니 활용하세요.",
    ],
  },

  // ===== BERGEN =====
  "norway/bergen-fjords/bergen/bryggen-wharf": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "14세기 한자동맹 시대부터 이어진 목조 상가 건물군으로, 1979년 유네스코 세계유산에 등재되었습니다. 화재와 복원을 반복하며 600년 이상 베르겐의 상징으로 자리 잡았습니다.",
    history: "1360년대 한자동맹 상인들이 대구 교역의 거점으로 건설했습니다. 여러 차례 대화재를 겪었지만 원래의 건축 기법으로 복원되어 중세 목조 건축의 보고로 평가받습니다.",
    visitInfo: {
      hours: "외부: 24시간 / 한자 박물관: 5~9월 10:00~17:00, 10~4월 11:00~15:00",
      admission: "외부 무료 / 한자 박물관 성인 NOK 120",
      address: "Bryggen, 5003 Bergen",
      website: "https://www.hanseaticmuseum.museumvest.no",
    },
    highlights: [
      "컬러풀한 목조 건물 파사드 - 베르겐의 상징적 풍경",
      "건물 뒤편 좁은 골목길의 공방과 아틀리에",
      "한자 박물관에서 한자동맹 상인의 생활상 체험",
      "스코르슈타인스 하게네 - 중세 골목의 아늑한 카페",
    ],
    nearbyAttractions: ["어시장(피스케토르게)", "로제크란츠 타워", "호콘스 홀", "플뢰위바넨 탑승장"],
    photoTips: "오후 늦은 시간(16~18시)에 정면에서 촬영하면 따뜻한 빛의 목조 건물 사진을 얻을 수 있습니다.",
    tips: [
      "뒤편 골목길 탐험이 핵심입니다. 숨은 공방과 카페를 찾아보세요.",
      "비 오는 날에도 목조 건물이 젖은 채 빛나는 모습이 운치 있습니다.",
      "한자 박물관은 가이드 투어(영어)를 추천합니다. 당시 생활이 생생합니다.",
    ],
  },
  "norway/bergen-fjords/bergen/floyen-mountain": {
    heroGradient: "from-green-500 to-teal-800",
    description: "플뢰위바넨 푸니쿨라를 타고 6분 만에 해발 320m 정상에 오르면 베르겐 시내, 항구, 주변 산과 피오르드가 한눈에 들어오는 장엄한 파노라마가 펼쳐집니다.",
    history: "플뢰위바넨 푸니쿨라는 1918년 운행을 시작해 노르웨이에서 가장 오래된 관광 교통수단 중 하나입니다. 연간 200만 명 이상이 방문하는 베르겐 최고의 전망 포인트입니다.",
    visitInfo: {
      hours: "푸니쿨라: 월~금 07:30~23:00, 토~일 08:00~23:00 (계절별 변동)",
      admission: "왕복 성인 NOK 135 / 편도 NOK 75 / 베르겐 카드 포함",
      address: "Vetrlidsallmenningen 21, 5014 Bergen",
      website: "https://www.floyen.no",
    },
    highlights: [
      "베르겐 시내와 7개 산, 피오르드를 아우르는 360도 파노라마",
      "정상 주변 숲길 트레킹 코스 (다양한 난이도)",
      "트롤의 숲 - 아이들과 함께하기 좋은 숲속 놀이터",
      "정상 레스토랑에서 전망과 함께 식사",
    ],
    nearbyAttractions: ["브뤼겐 부두", "어시장", "베르겐 대성당", "울리켄 산"],
    photoTips: "정상 전망대에서 브뤼겐 방향을 촬영하면 목조 건물과 항구, 산이 모두 담기는 클래식 뷰를 얻을 수 있습니다.",
    tips: [
      "도보 하산(약 45분)을 추천합니다. 울창한 숲길이 아름답습니다.",
      "성수기에는 푸니쿨라 대기가 길어지니 아침 일찍 방문하세요.",
      "날씨가 수시로 변하므로 방수 자켓을 항상 소지하세요.",
    ],
  },

  // ===== FLAM =====
  "norway/bergen-fjords/flam/flam-railway": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "뮈르달(해발 867m)에서 플롬(해발 2m)까지 20km를 약 1시간에 걸쳐 내려오는 세계에서 가장 가파른 표준 궤간 철도 중 하나입니다. 20개 터널, 깊은 계곡, 장엄한 폭포를 지나는 환상적인 열차 여행입니다.",
    history: "1924~1940년 약 16년에 걸쳐 건설된 엔지니어링의 걸작입니다. 20개 터널 중 18개는 수작업으로 뚫었으며, 높이 차이 864m를 극복하기 위해 최대 55‰ 경사로를 운행합니다.",
    visitInfo: {
      hours: "연중 운행 / 하루 4~10회 (시즌별 상이)",
      admission: "편도 성인 NOK 510 / 왕복 NOK 730",
      address: "Flåm Station, 5742 Flåm",
      website: "https://www.visitflam.com/flamsbana",
    },
    highlights: [
      "쇼스포센 폭포 정차 - 93m 폭포와 훌드라 공연 (여름)",
      "20개 터널과 깎아지른 계곡의 파노라마",
      "랄 계곡의 아찔한 절벽 사이 주행",
      "뮈르달역에서 베르겐선 열차와의 환승 연결",
    ],
    nearbyAttractions: ["스테그슈타인 전망대", "네뢰이피오르드 크루즈", "플롬 브루어리", "오테르네스 농가 마을"],
    photoTips: "플롬 방향(하행)은 좌측 좌석, 뮈르달 방향(상행)은 우측 좌석에 앉으면 쇼스포센 폭포와 주요 경관을 정면으로 촬영할 수 있습니다.",
    tips: [
      "성수기(6~8월)에는 반드시 온라인 사전 예약이 필요합니다.",
      "노르웨이 인 어 넛셸 패키지에 포함되어 있어 통합 구매가 편리합니다.",
      "쇼스포센 폭포에서 약 5분 정차하므로 내려서 사진 촬영이 가능합니다.",
      "겨울에는 눈 덮인 설경 속 운행도 매력적입니다.",
    ],
  },

  // ===== GEIRANGERFJORD =====
  "norway/bergen-fjords/geirangerfjord/geirangerfjord-cruise": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "유네스코 세계유산 게이랑에르피오르드를 따라 운항하는 크루즈로, 일곱 자매 폭포, 구혼자 폭포, 절벽 위 버려진 농장 등 숨막히는 자연 경관을 수면에서 올려다봅니다.",
    history: "게이랑에르피오르드는 2005년 네뢰이피오르드와 함께 유네스코 세계유산에 등재되었습니다. 수백 년간 사람들이 정착했던 절벽 위 농장들은 현재 대부분 버려져 자연의 위대함을 더욱 실감하게 합니다.",
    visitInfo: {
      hours: "5~10월 운항 / 하루 여러 편 (시즌별 상이)",
      admission: "헬레쉴트~게이랑에르 편도 성인 NOK 315 / 차량 추가 NOK 560",
      address: "Geiranger Harbour, 6216 Geiranger",
      website: "https://www.geirangerfjord.no",
    },
    highlights: [
      "일곱 자매 폭포(De syv søstrene) - 7줄기가 동시에 쏟아지는 장관",
      "구혼자 폭포(Friaren) - 일곱 자매를 바라보는 맞은편 단일 폭포",
      "절벽 위 버려진 농장(크니브스플로 등)",
      "피오르드 양쪽의 깎아지른 1,000m+ 절벽",
    ],
    nearbyAttractions: ["플뤼달스유베 전망대", "달스니바 전망대", "트롤스티겐", "노르스크 피오르드센터"],
    photoTips: "폭포 촬영을 위해 갑판 전면에 일찍 자리를 잡으세요. 일곱 자매 폭포는 좌현(왼쪽), 구혼자 폭포는 우현(오른쪽)에서 촬영됩니다.",
    tips: [
      "헬레쉴트~게이랑에르 구간(약 1시간)이 가장 인기 있는 코스입니다.",
      "갑판에서 감상하는 것이 최고이므로 방풍 자켓을 꼭 입으세요.",
      "렌터카 이용 시 차량 페리로 이동하면 양쪽 모두 드라이브를 즐길 수 있습니다.",
      "성수기(7~8월)에는 대형 크루즈선이 기항해 혼잡합니다.",
    ],
  },

  // ===== TROMSO =====
  "norway/arctic-north/tromso/arctic-cathedral": {
    heroGradient: "from-slate-300 to-blue-800",
    description: "삼각형의 대담한 건축이 북극의 빙하와 오로라를 형상화한 트롬쇠의 랜드마크 교회입니다. 23m 높이의 스테인드글라스 창이 북극의 빛을 아름답게 표현합니다.",
    history: "1965년 건축가 얀 잉게 호빅이 설계하여 개관했습니다. 공식 명칭은 트롬스달렌 교회이며, 독특한 삼각형 형태로 '북극 대성당'이라는 별명을 얻었습니다.",
    visitInfo: {
      hours: "6~8월 09:00~19:00 / 기타 시즌 단축 운영 (14:00~18:00)",
      admission: "성인 NOK 70",
      address: "Hans Nilsens vei 41, 9020 Tromsdalen",
      website: "https://www.ishavskatedralen.no",
    },
    highlights: [
      "23m 높이 스테인드글라스 - 북극의 빛을 표현한 빅토르 스파레의 걸작",
      "삼각형 콘크리트 구조의 독특한 건축미",
      "자정 태양 콘서트 (6~8월, 23:30)",
      "트롬쇠 다리와 함께 어우러진 야경",
    ],
    nearbyAttractions: ["피엘하이센 케이블카", "트롬쇠 다리", "폴라리아 수족관", "트롬쇠 센트룸"],
    photoTips: "건물 전면은 오후에 순광입니다. 트롬쇠 다리와 함께 촬영하면 트롬쇠의 상징적 구도를 만들 수 있습니다.",
    tips: [
      "자정 태양 콘서트(6~8월)는 사전 예약을 추천합니다.",
      "내부 스테인드글라스는 오후 햇살이 들어올 때 가장 아름답습니다.",
      "트롬쇠 시내에서 다리를 건너 도보 약 15분입니다.",
    ],
  },
  "norway/arctic-north/tromso/northern-lights": {
    heroGradient: "from-green-400 to-purple-900",
    description: "트롬쇠는 북극권 내에서도 오로라 관측 최적지로 꼽힙니다. 9월~3월 맑은 밤이면 녹색·보라색·분홍색 빛의 커튼이 하늘을 수놓는 장관을 목격할 수 있습니다.",
    history: "고대 바이킹은 오로라를 발할라로 이끄는 빛의 다리라 믿었습니다. 현대 과학적으로는 태양풍의 하전 입자가 지구 대기와 충돌하여 발생하는 자연 현상으로, 자기 극점 근처에서 가장 잘 관측됩니다.",
    visitInfo: {
      hours: "9~3월 (21:00~01:00 최적 관측 시간대)",
      admission: "가이드 투어 NOK 1,200~2,500 / 직접 관측은 무료",
      address: "트롬쇠 교외 각 관측 포인트",
    },
    highlights: [
      "녹색·보라색·분홍색 오로라의 역동적 움직임",
      "설원과 피오르드를 배경으로 한 환상적 풍경",
      "가이드 투어에서 사미족 전통 천막(라보) 체험",
      "핫초코·모닥불과 함께하는 오로라 대기",
    ],
    nearbyAttractions: ["북극 대성당", "피엘하이센 전망대", "크발뢰야 섬", "폴라 박물관"],
    photoTips: "삼각대 필수. ISO 3200~6400, 셔터 스피드 8~15초, 광각 렌즈(14~24mm) 설정이 기본입니다. 전경에 나무나 산을 넣으면 구도가 살아납니다.",
    tips: [
      "최소 3일 체류해야 오로라를 볼 확률이 높아집니다.",
      "가이드 투어는 구름 없는 지역을 찾아 이동하므로 직접 관측보다 성공률이 높습니다.",
      "방한복, 핫팩, 보온 수통은 필수입니다. 영하 15도 이하가 흔합니다.",
      "오로라 예보 앱(Norway Lights, Aurora)을 활용하세요.",
    ],
  },

  // ===== LOFOTEN =====
  "norway/arctic-north/lofoten-islands/reine": {
    heroGradient: "from-red-500 to-cyan-800",
    description: "내셔널 지오그래픽이 선정한 노르웨이에서 가장 아름다운 마을. 뾰족한 산봉우리에 둘러싸인 청록빛 바다 위에 빨간 로르부(어부 오두막)가 떠있는 풍경은 로포텐의 상징입니다.",
    history: "수백 년간 대구잡이 어부들의 마을이었으며, 전통 로르부(어부 오두막)를 개조한 관광 숙소가 로포텐 관광의 시초가 되었습니다.",
    visitInfo: {
      hours: "마을: 24시간 / 레이네브링엔 트레킹: 일출~일몰 권장",
      admission: "무료 (트레킹 무료)",
      address: "Reine, 8390 Reine, Lofoten",
    },
    highlights: [
      "레이네브링엔 트레킹 - 해발 448m에서 마을 전경 조망 (왕복 약 3시간)",
      "빨간 로르부와 청록빛 바다의 색채 대비",
      "레이네 항구의 고요한 일출·일몰",
      "카약·보트 투어로 해안선 탐험",
    ],
    nearbyAttractions: ["함뇌이", "사크리쇠이", "오 마을", "로르부 숙박"],
    photoTips: "레이네브링엔 정상에서 내려다보는 구도가 가장 유명합니다. 일출·일몰 시 붉은 하늘과 로르부의 붉은 지붕이 어우러져 환상적입니다.",
    tips: [
      "레이네브링엔 트레킹은 체력이 필요합니다. 등산화와 물을 준비하세요.",
      "여름에도 정상은 바람이 강하므로 방풍 자켓이 필수입니다.",
      "로르부 숙소는 수 개월 전 예약이 필수입니다.",
    ],
  },
  "norway/arctic-north/lofoten-islands/hamnoy": {
    heroGradient: "from-red-600 to-blue-900",
    description: "레이네 바로 옆에 위치한 작은 어촌으로, 다리 위에서 바라보는 빨간 로르부와 험준한 산봉우리의 조화는 세계에서 가장 많이 촬영되는 노르웨이 풍경 중 하나입니다.",
    history: "중세부터 대구잡이 어부들이 살았던 마을로, 현재도 전통 어업이 이어지고 있습니다. 다리가 놓이면서 접근성이 좋아졌고, SNS를 통해 세계적 사진 명소가 되었습니다.",
    visitInfo: {
      hours: "24시간 (야외 마을)",
      admission: "무료",
      address: "Hamnøy, 8390 Reine, Lofoten",
    },
    highlights: [
      "다리 위에서 촬영하는 아이코닉 뷰 - 빨간 로르부 + 산봉우리",
      "새벽·일몰의 드라마틱한 빛",
      "겨울 눈 덮인 로르부와 오로라의 조합",
      "전통 건어(스톡피스크) 건조대 풍경",
    ],
    nearbyAttractions: ["레이네", "사크리쇠이", "오 마을", "네스란 해변"],
    photoTips: "다리 중앙에서 마을 방향으로 촬영하는 것이 클래식 구도입니다. 새벽 블루아워나 일몰 골든아워에 최고의 빛을 얻을 수 있습니다.",
    tips: [
      "다리 위에서 촬영 시 차량 통행에 주의하세요.",
      "겨울(11~2월)에는 눈 덮인 풍경과 오로라를 동시에 촬영할 수 있습니다.",
      "마을이 매우 작으므로 주민들의 사생활을 존중해주세요.",
    ],
  },
};
