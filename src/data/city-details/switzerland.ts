import type { CityDetail, AttractionDetail } from "../city-details";

export const switzerlandCityDetails: Record<string, CityDetail> = {
  // ===== BERNESE OBERLAND =====
  "switzerland/bernese-oberland/bern": {
    heroGradient: "from-red-500 to-red-800",
    description: "스위스의 수도이자 UNESCO 세계유산 구시가지를 품은 도시. 아레 강이 감싸 흐르는 중세 도시 풍경과 아인슈타인이 상대성이론을 구상한 역사적인 장소입니다.",
    bestTime: "5~10월 (6~8월 야외 수영 시즌)",
    stayArea: "구시가지 (알트슈타트) 내",
    transport: "트램, 버스 (Libero 통합 티켓)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "UNESCO 세계유산으로 등재된 중세 구시가지. 6km에 달하는 아케이드가 유럽에서 가장 긴 쇼핑 산책로를 이룹니다.", highlights: ["치트글로게 시계탑", "뮌스터 대성당", "아케이드 상점가", "연방 의사당"] },
      { name: "마테 지구", nameEn: "Matte Quarter", description: "아레 강변의 옛 노동자 지구로 현재는 트렌디한 카페와 바가 모인 지역.", highlights: ["아레 강변 산책로", "운터토어 다리", "마테 엘리베이터"] },
      { name: "키르헨펠트", nameEn: "Kirchenfeld", description: "박물관이 밀집한 문화 지구로 아레 강 남쪽에 위치.", highlights: ["베른 역사박물관", "스위스 알프스 박물관", "통신박물관"] },
    ],
    attractions: [
      { name: "베른 구시가지", nameEn: "Bern Old Town", description: "UNESCO 세계유산으로 등재된 중세 도시 구조가 완벽하게 보존된 구시가지.", category: "세계유산", tip: "아케이드 지하의 켈러(Keller) 상점들도 꼭 둘러보세요." },
      { name: "치트글로게 시계탑", nameEn: "Zytglogge Clock Tower", description: "1218년에 세워진 베른의 상징으로, 매 시 정각 4분 전에 인형 시계가 작동합니다.", category: "랜드마크", tip: "내부 투어(가이드)를 통해 시계 메커니즘을 볼 수 있습니다." },
      { name: "뮌스터 대성당", nameEn: "Bern Minster", description: "스위스에서 가장 높은 교회 첨탑(100m)으로 344개 계단을 올라 알프스 파노라마를 감상합니다.", category: "성당", tip: "마지막 심판 부조가 인상적입니다." },
      { name: "아인슈타인 하우스", nameEn: "Einstein House", description: "아인슈타인이 1903~1905년 살며 특수상대성이론을 구상한 아파트.", category: "박물관" },
      { name: "베렌그라벤", nameEn: "BaerenPark", description: "베른의 상징 동물인 곰을 아레 강변 자연 환경에서 만날 수 있는 공원.", category: "공원" },
    ],
    dayTrips: [
      { name: "투른 호수", nameEn: "Lake Thun", description: "알프스를 배경으로 한 그림 같은 호수 마을과 유람선.", travelTime: "기차 약 25분", gradient: "from-cyan-400 to-blue-700" },
      { name: "에멘탈", nameEn: "Emmental", description: "에멘탈 치즈의 본고장에서 치즈 공장 견학과 목가적 풍경.", travelTime: "기차+버스 약 40분", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "베르너 플라테", description: "베른 전통 고기 모듬 접시로 소시지, 훈제 고기, 소혀 등을 자우어크라우트와 함께.", emoji: "🥩" },
      { name: "뢰슈티", description: "바삭하게 구운 감자 팬케이크, 스위스 독일어권의 소울 푸드.", emoji: "🥔" },
      { name: "치벨레바에", description: "양파 타르트로 11월 양파 시장(치벨레메리트)의 명물.", emoji: "🧅" },
    ],
    tips: [
      "여름에는 아레 강에서 수영하는 현지인들과 함께 강 수영을 즐겨보세요.",
      "베른 뮤지엄 패스로 주요 박물관 무료 입장이 가능합니다.",
      "매주 화요일과 토요일 연방 광장에서 시장이 열립니다.",
      "구시가지 전체가 아케이드로 연결되어 비 오는 날에도 쾌적하게 관광 가능합니다.",
    ],
  },
  "switzerland/bernese-oberland/interlaken": {
    heroGradient: "from-cyan-500 to-teal-800",
    description: "투른 호수와 브리엔츠 호수 사이에 위치한 알프스 어드벤처의 수도. 융프라우, 쉴트호른 등 고봉 여행의 관문이자 패러글라이딩, 스카이다이빙 등 액티비티의 메카입니다.",
    bestTime: "6~9월 (겨울 스키: 12~3월)",
    stayArea: "인터라켄 서역(West) / 회에베크 메인 거리",
    transport: "BOB 등산열차, 버스, 유람선",
    districts: [
      { name: "운터젠", nameEn: "Unterseen", description: "아레 강 건너편의 고즈넉한 구시가지로 목조 건물과 교회가 아름다운 지역.", highlights: ["운터젠 교회", "목조 주택 거리", "아레 강 다리"] },
      { name: "회에마테", nameEn: "Hoehematte", description: "인터라켄 중심의 드넓은 잔디 광장으로 융프라우를 바라보는 전망 명소.", highlights: ["회에마테 공원", "패러글라이딩 착륙장", "카지노 쿨잘"] },
    ],
    attractions: [
      { name: "인터라켄 어드벤처 캐피탈", nameEn: "Interlaken Adventure Capital", description: "패러글라이딩, 캐녀닝, 스카이다이빙, 번지점프 등 100가지 이상의 액티비티가 가능한 세계적 모험 여행지.", category: "액티비티", tip: "패러글라이딩은 날씨에 따라 취소될 수 있으니 여유 일정을 잡으세요." },
      { name: "하더 쿨름", nameEn: "Harder Kulm", description: "인터라켄 전망대로 푸니쿨라를 타고 올라 두 호수와 융프라우 3봉을 한눈에.", category: "전망대", tip: "일몰 시간에 방문하면 황금빛 알프스를 볼 수 있습니다." },
      { name: "브리엔츠 호수 유람선", nameEn: "Lake Brienz Cruise", description: "에메랄드빛 브리엔츠 호수를 유람선으로 가로지르는 황홀한 경험.", category: "유람선" },
      { name: "성 베아투스 동굴", nameEn: "St. Beatus Caves", description: "투른 호수변 석회암 동굴로 전설과 자연이 어우러진 관광지.", category: "자연", tip: "동굴 내부는 여름에도 서늘하니 겉옷을 챙기세요." },
    ],
    dayTrips: [
      { name: "융프라우요흐", nameEn: "Jungfraujoch", description: "유럽의 지붕(3,454m), 만년설과 알레치 빙하를 만나는 정상.", travelTime: "등산열차 약 2시간", gradient: "from-blue-300 to-indigo-700" },
      { name: "쉴트호른", nameEn: "Schilthorn", description: "007 영화 촬영지로 유명한 회전 레스토랑 전망대.", travelTime: "버스+케이블카 약 1.5시간", gradient: "from-slate-400 to-slate-800" },
    ],
    localFood: [
      { name: "퐁뒤", description: "녹인 치즈에 빵을 찍어 먹는 스위스 대표 요리.", emoji: "🫕" },
      { name: "브리엔츠 소시지", description: "브리엔츠 지역의 훈제 소시지로 호수변에서 즐기기 좋은 간식.", emoji: "🌭" },
    ],
    tips: [
      "융프라우 VIP 패스를 구매하면 지역 내 교통과 전망대를 할인받을 수 있습니다.",
      "패러글라이딩은 인터라켄의 필수 경험! 여러 업체를 비교하세요.",
      "서역(West)과 동역(Ost) 사이 메인 거리가 중심 번화가입니다.",
      "여름에는 아레 강에서 래프팅도 인기입니다.",
    ],
  },
  "switzerland/bernese-oberland/grindelwald": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "아이거 북벽 아래 펼쳐진 알프스 산악 마을. 피르스트 클리프 워크, 융프라우요흐 가는 길목의 베이스캠프이자 겨울 스키와 여름 하이킹의 천국입니다.",
    bestTime: "6~9월 (하이킹) / 12~3월 (스키)",
    stayArea: "그린델발트 마을 중심 / 터미널 역 주변",
    transport: "WAB 등산열차, 곤돌라, 버스",
    districts: [
      { name: "도르프", nameEn: "Dorf", description: "그린델발트 메인 거리로 호텔, 레스토랑, 상점이 모인 마을 중심.", highlights: ["메인 스트리트", "그린델발트 교회", "스위스 기념품점"] },
    ],
    attractions: [
      { name: "피르스트 클리프 워크", nameEn: "First Cliff Walk", description: "해발 2,168m에 설치된 절벽 위 보행 다리로 아이거 북벽의 경이로운 파노라마를 선사합니다.", category: "전망대", tip: "피르스트 곤돌라 왕복 티켓에 포함되어 있습니다." },
      { name: "아이거 익스프레스", nameEn: "Eiger Express", description: "2020년 개통한 최신 곤돌라로 그린델발트에서 아이거 글레처까지 15분.", category: "교통", tip: "융프라우요흐까지 이동 시간을 대폭 단축합니다." },
      { name: "바흐알프 호수", nameEn: "Bachalpsee", description: "피르스트에서 도보 50분, 알프스 봉우리가 거울처럼 비치는 하이킹 명소.", category: "자연" },
      { name: "글레치어 캐니언", nameEn: "Glacier Canyon", description: "수천 년에 걸쳐 빙하가 깎아낸 깊은 협곡을 따라 걷는 산책로.", category: "자연" },
    ],
    dayTrips: [
      { name: "융프라우요흐", nameEn: "Jungfraujoch", description: "유럽의 지붕, 아이거 익스프레스로 빠르게 접근.", travelTime: "곤돌라+기차 약 1시간", gradient: "from-blue-300 to-indigo-700" },
    ],
    localFood: [
      { name: "라클렛", description: "치즈를 녹여 감자와 피클 위에 긁어내는 스위스 겨울 별미.", emoji: "🧀" },
      { name: "알프스 마카로니", description: "마카로니에 크림, 치즈, 감자를 섞고 바삭한 양파를 올린 산악 요리.", emoji: "🍝" },
    ],
    tips: [
      "아이거 익스프레스 개통으로 융프라우요흐 접근이 훨씬 빨라졌습니다.",
      "피르스트에서 바흐알프 호수까지 왕복 하이킹은 약 2시간 소요됩니다.",
      "여름 시즌 피르스트 플라이어(짚라인)와 마운틴 카트도 인기입니다.",
    ],
  },
  "switzerland/bernese-oberland/jungfrau-region": {
    heroGradient: "from-blue-300 to-indigo-800",
    description: "융프라우(4,158m), 묀히(4,107m), 아이거(3,970m)의 3대 봉우리가 만드는 장엄한 파노라마. 유럽에서 가장 높은 기차역인 융프라우요흐와 007 촬영지 쉴트호른이 있는 세계적 산악 관광지입니다.",
    bestTime: "6~9월 (하이킹) / 12~3월 (스키) / 융프라우요흐는 연중 운행",
    stayArea: "그린델발트 / 라우터브루넨 / 뮈렌",
    transport: "융프라우 철도(JB), WAB, BLM 케이블카",
    districts: [
      { name: "라우터브루넨", nameEn: "Lauterbrunnen", description: "72개의 폭포가 쏟아지는 U자 계곡 마을. 뮈렌과 쉴트호른 가는 관문.", highlights: ["슈타우프바흐 폭포", "트뤼멜바흐 폭포", "뮈렌행 케이블카"] },
      { name: "뮈렌", nameEn: "Muerren", description: "자동차가 없는 절벽 위 마을로 알프스 3대 봉우리의 최고 전망 포인트.", highlights: ["알멘드후벨 전망대", "쉴트호른 케이블카", "노스페이스 트레일"] },
    ],
    attractions: [
      { name: "융프라우요흐", nameEn: "Jungfraujoch Top of Europe", description: "해발 3,454m 유럽 최고 높이 기차역. 알레치 빙하, 스핑크스 전망대, 얼음 궁전을 체험합니다.", category: "전망대", tip: "오전 첫 열차를 타면 맑은 하늘을 볼 확률이 높습니다." },
      { name: "쉴트호른", nameEn: "Schilthorn", description: "해발 2,970m 회전 레스토랑 '피츠 글로리아'에서 360도 알프스 파노라마. 007 여왕폐하 대작전 촬영지.", category: "전망대", tip: "얼리버드 티켓(첫 케이블카)이 훨씬 저렴합니다." },
      { name: "슈타우프바흐 폭포", nameEn: "Staubbach Falls", description: "높이 297m로 스위스에서 가장 높은 자유 낙하 폭포. 괴테가 '물의 노래'를 지은 영감의 장소.", category: "자연" },
      { name: "트뤼멜바흐 폭포", nameEn: "Truemmelbach Falls", description: "빙하 녹은 물이 산 내부를 관통하며 쏟아지는 유럽 유일의 지하 빙하 폭포.", category: "자연", tip: "엘리베이터로 올라가 10개 폭포를 순서대로 내려옵니다." },
    ],
    dayTrips: [
      { name: "브리엔츠", nameEn: "Brienz", description: "목각 공예의 마을과 로트호른 증기 기관차.", travelTime: "기차 약 30분", gradient: "from-orange-400 to-amber-700" },
    ],
    localFood: [
      { name: "퐁뒤", description: "그뤼에르와 에멘탈 치즈를 섞어 녹인 정통 스위스 퐁뒤.", emoji: "🫕" },
      { name: "뢰슈티", description: "알프스 감자로 만든 바삭한 팬케이크에 치즈와 달걀을 토핑.", emoji: "🥔" },
      { name: "메링게 크림", description: "마이링겐 지역이 원조인 머랭과 더블크림 디저트.", emoji: "🍮" },
    ],
    tips: [
      "융프라우요흐 라이브 웹캠으로 날씨를 확인 후 방문하세요 (jungfrau.ch).",
      "스위스 트래블 패스 소지 시 융프라우 철도 25% 할인됩니다.",
      "라우터브루넨~뮈렌~쉴트호른 코스는 융프라우요흐와 별개로 하루를 배정하세요.",
      "고산병 대비: 융프라우요흐에서 천천히 움직이고 수분을 충분히 섭취하세요.",
    ],
  },

  // ===== ZURICH-CENTRAL =====
  "switzerland/zurich-central/zurich": {
    heroGradient: "from-sky-500 to-blue-900",
    description: "스위스 최대 도시이자 글로벌 금융 허브. 리마트 강을 따라 펼쳐진 구시가지, 취리히 호수의 여유로운 풍경, 세계적인 미술관과 트렌디한 서쪽 지구가 공존하는 도시입니다.",
    bestTime: "5~10월 (8월 스트리트 퍼레이드)",
    stayArea: "구시가지 (니더도르프) / 중앙역 주변",
    transport: "트램, S-Bahn, 버스 (ZVV 통합 티켓)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "리마트 강 양쪽으로 펼쳐진 구시가지. 린덴호프 언덕, 교회들, 좁은 골목이 매력적.", highlights: ["린덴호프 전망대", "그로스뮌스터", "프라우뮌스터", "바닌호프 거리"] },
      { name: "니더도르프", nameEn: "Niederdorf", description: "리마트 강 동쪽의 보행자 거리로 레스토랑, 바, 상점이 밀집한 활기찬 지역.", highlights: ["니더도르프 골목", "카바레 볼테르", "슈피겔 골목"] },
      { name: "취리히 서쪽", nameEn: "Zurich West", description: "옛 공장 지대가 트렌디한 문화 공간으로 변모한 힙한 지역.", highlights: ["프라이타그 타워", "임 비아둑트", "쉬프바우 극장"] },
    ],
    attractions: [
      { name: "취리히 구시가지", nameEn: "Old Town Zurich", description: "리마트 강변의 중세 건물과 길드하우스, 린덴호프 언덕에서 내려다보는 구시가지 파노라마가 인상적입니다.", category: "구시가지", tip: "린덴호프는 일몰 시 최고의 전망을 자랑합니다." },
      { name: "취리히 호수", nameEn: "Lake Zurich", description: "알프스를 배경으로 펼쳐진 호수에서 유람선, 수영, 산책을 즐길 수 있습니다.", category: "호수", tip: "뷔르클리 광장 선착장에서 유람선이 출발합니다." },
      { name: "그로스뮌스터", nameEn: "Grossmuenster", description: "취리히의 상징인 쌍둥이 탑 교회. 종교개혁가 츠빙글리의 교회입니다.", category: "성당" },
      { name: "바닌호프 거리", nameEn: "Bahnhofstrasse", description: "중앙역에서 호수까지 이어지는 1.4km의 세계적 명품 쇼핑 거리.", category: "쇼핑" },
      { name: "스위스 국립박물관", nameEn: "Swiss National Museum", description: "스위스의 역사와 문화를 총망라하는 국립박물관으로 중앙역 바로 옆에 위치.", category: "박물관" },
    ],
    dayTrips: [
      { name: "라인 폭포", nameEn: "Rhine Falls", description: "유럽 최대 규모의 폭포로 보트를 타고 폭포 중앙 바위까지 접근 가능.", travelTime: "기차 약 50분", gradient: "from-blue-400 to-cyan-700" },
      { name: "위틀리베르크", nameEn: "Uetliberg", description: "취리히 시내에서 가장 가까운 전망산으로 호수와 알프스를 한눈에.", travelTime: "S-Bahn 약 20분", gradient: "from-green-500 to-emerald-700" },
    ],
    localFood: [
      { name: "취리허 게슈네첼테스", description: "송아지 고기를 크림소스에 조린 취리히 전통 요리, 뢰슈티와 함께.", emoji: "🍽️" },
      { name: "룩셈부르거리", description: "슈프륑글리 본점의 프리미엄 마카롱(룩셈부르거리).", emoji: "🍫" },
      { name: "비르허 뮈슬리", description: "취리히에서 탄생한 오리지널 뮈슬리, 건강한 아침식사.", emoji: "🥣" },
    ],
    tips: [
      "취리히 카드(24/72시간)로 대중교통 + 박물관 무료/할인 혜택을 받으세요.",
      "여름에는 호수변 '바디(Badi)'에서 현지인처럼 수영을 즐겨보세요.",
      "슈프륑글리 본점(바닌호프 거리)에서 룩셈부르거리는 당일 한정 생산입니다.",
      "일요일 대부분의 상점이 문을 닫으니 쇼핑은 평일에 하세요.",
    ],
  },
  "switzerland/zurich-central/lucerne": {
    heroGradient: "from-indigo-500 to-purple-800",
    description: "루체른 호수와 필라투스, 리기 산에 둘러싸인 스위스 중부의 보석. 카펠교, 빈사의 사자상 등 중세 유적과 알프스 파노라마가 완벽한 조화를 이루는 도시입니다.",
    bestTime: "5~10월 (2월 카니발 축제)",
    stayArea: "구시가지 / 호수변 (제방 산책로)",
    transport: "버스, 유람선, 등산열차 (Tell-Pass 추천)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "카펠교 주변으로 프레스코 벽화와 길드하우스가 늘어선 중세 구시가지.", highlights: ["카펠교", "바인마르크트 광장", "무제크 성벽", "예수회 교회"] },
      { name: "호수변", nameEn: "Lakefront", description: "루체른 호수를 따라 이어지는 산책로와 고급 호텔이 자리한 지역.", highlights: ["호프 교회", "KKL 문화센터", "슈바넨 광장"] },
    ],
    attractions: [
      { name: "카펠교", nameEn: "Chapel Bridge", description: "1333년 건설된 유럽에서 가장 오래된 목조 지붕 다리. 내부 삼각형 패널화 112점과 팔각형 바서투름(수탑)이 인상적입니다.", category: "다리", tip: "이른 아침이나 야간 조명 시간에 방문하면 인파 없이 촬영 가능합니다." },
      { name: "빈사의 사자상", nameEn: "Lion Monument", description: "1792년 프랑스 혁명 때 전사한 스위스 용병을 추모하는 바위 조각. 마크 트웨인이 '세계에서 가장 슬프고 감동적인 석조물'이라 평한 기념비.", category: "기념비" },
      { name: "필라투스 산", nameEn: "Mount Pilatus", description: "세계에서 가장 가파른 톱니바퀴 열차와 케이블카로 오르는 해발 2,132m 전망봉.", category: "산", tip: "골든 라운드 트립(유람선→톱니열차→케이블카)을 추천합니다." },
      { name: "리기 산", nameEn: "Mount Rigi", description: "유럽 최초의 등산 철도로 오르는 산의 여왕. 일출이 특히 유명합니다.", category: "산" },
      { name: "무제크 성벽", nameEn: "Musegg Wall", description: "루체른 구시가지를 둘러싼 중세 성벽으로 9개의 탑 중 4개에 올라갈 수 있습니다.", category: "성벽" },
    ],
    dayTrips: [
      { name: "필라투스 골든 라운드 트립", nameEn: "Pilatus Golden Round Trip", description: "유람선→톱니열차→케이블카로 필라투스를 한 바퀴 도는 코스.", travelTime: "전체 약 5~6시간", gradient: "from-amber-400 to-red-700" },
      { name: "엥겔베르크/티틀리스", nameEn: "Engelberg/Titlis", description: "만년설의 티틀리스(3,238m)와 회전 곤돌라, 빙하 동굴 체험.", travelTime: "기차 약 50분", gradient: "from-sky-400 to-indigo-700" },
    ],
    localFood: [
      { name: "루체른 퀴겔리파스테테", description: "바삭한 파이 속에 송아지 고기와 버섯 라구를 채운 루체른 전통 요리.", emoji: "🥧" },
      { name: "퐁뒤", description: "스위스 전통 치즈 퐁뒤, 겨울 루체른의 필수 메뉴.", emoji: "🫕" },
      { name: "초콜릿", description: "루체른 시내 초콜릿 공방에서 수제 스위스 초콜릿 체험.", emoji: "🍫" },
    ],
    tips: [
      "텔-패스(Tell-Pass)로 루체른 지역 교통, 유람선, 산악 교통을 무제한 이용하세요.",
      "카펠교는 1993년 화재 후 복원되었으며, 일부 원본 패널화는 소실되었습니다.",
      "필라투스 톱니열차는 5~11월만 운행합니다 (겨울에는 케이블카만 가능).",
      "2월 파스나흐트(카니발)는 루체른 최대 축제로 색다른 경험을 선사합니다.",
    ],
  },

  // ===== GENEVA-LAKE =====
  "switzerland/geneva-lake/geneva": {
    heroGradient: "from-blue-600 to-slate-900",
    description: "레만 호수변의 국제 도시이자 유엔 유럽 본부, 적십자 본부가 있는 외교의 수도. 140m 높이의 제트 도(대분수)가 상징이며, 프랑스어권 스위스의 세련된 문화를 경험할 수 있습니다.",
    bestTime: "5~9월 (8월 제네바 축제)",
    stayArea: "구시가지 / 호수변 (에글롱띠에) / 파키 지구",
    transport: "트램, 버스, 무슈(수상 택시) (TPG 통합 티켓, 호텔 투숙 시 무료 교통카드)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "성 피에르 대성당과 바스티옹 공원이 있는 언덕 위의 역사 지구.", highlights: ["성 피에르 대성당", "바스티옹 공원", "메종 타벨", "그랑 뤼"] },
      { name: "호수변", nameEn: "Lakefront", description: "제트 도를 중심으로 펼쳐진 호수변 산책 지역.", highlights: ["제트 도", "영국 공원의 꽃시계", "몽블랑 다리"] },
    ],
    attractions: [
      { name: "제트 도", nameEn: "Jet d'Eau", description: "레만 호수에서 140m 높이로 솟구치는 세계적으로 유명한 대분수. 초속 200km로 물을 쏘아 올립니다.", category: "랜드마크", tip: "방파제 위에서 가까이 다가갈 수 있지만 바람 방향에 따라 물벼락을 맞을 수 있습니다." },
      { name: "구시가지 & 성 피에르 대성당", nameEn: "Old Town & St. Pierre Cathedral", description: "제네바의 역사가 응축된 구시가지. 대성당 탑에서 레만 호수와 몽블랑을 조망합니다.", category: "성당" },
      { name: "유엔 유럽 본부", nameEn: "Palais des Nations", description: "유엔 유럽 본부로 가이드 투어를 통해 내부를 관람할 수 있습니다.", category: "국제기구" },
      { name: "적십자 박물관", nameEn: "Red Cross Museum", description: "국제 적십자 운동의 역사를 생생하게 전시하는 감동적인 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "몽블랑 & 샤모니", nameEn: "Mont Blanc & Chamonix", description: "유럽 최고봉 몽블랑(4,808m) 기슭의 프랑스 산악 마을.", travelTime: "버스 약 1.5시간", gradient: "from-slate-400 to-blue-800" },
    ],
    localFood: [
      { name: "필레 드 뻬르쉬", description: "레만 호수산 농어 필레 요리, 제네바 레스토랑의 시그니처.", emoji: "🐟" },
      { name: "카르동 그라탕", description: "제네바 특산 채소 카르동(엉겅퀴과)의 치즈 그라탕.", emoji: "🥘" },
      { name: "롱졸 소시지", description: "제네바 특산 소시지로 에스칼라드 축제의 명물.", emoji: "🌭" },
    ],
    tips: [
      "호텔 체크인 시 제네바 트랜스포트 카드를 받으면 대중교통이 무료입니다.",
      "유엔 본부 투어는 반드시 사전 온라인 예약이 필요합니다.",
      "제트 도는 바람 강한 날에는 운행이 중단됩니다.",
      "프랑스 국경이 바로 옆이므로 프랑스 쪽 슈퍼마켓 쇼핑도 현지인의 일상입니다.",
    ],
  },
  "switzerland/geneva-lake/lausanne": {
    heroGradient: "from-violet-500 to-purple-900",
    description: "레만 호수변 언덕 위에 펼쳐진 올림픽의 수도. IOC(국제올림픽위원회) 본부와 올림픽 박물관이 있으며, 활기찬 대학 도시 분위기와 미식 문화가 매력적입니다.",
    bestTime: "5~10월 (7월 재즈 축제)",
    stayArea: "플롱(Flon) 지구 / 우시(Ouchy) 호수변",
    transport: "메트로(M2), 버스, TL 네트워크",
    districts: [
      { name: "시테", nameEn: "Cité", description: "대성당이 있는 언덕 위 구시가지로 로잔의 역사적 중심지.", highlights: ["노트르담 대성당", "에스칼리에 뒤 마르셰", "성", "팔뤼 광장"] },
      { name: "우시", nameEn: "Ouchy", description: "레만 호수변의 산책 지구로 올림픽 박물관이 위치.", highlights: ["올림픽 박물관", "우시 성", "호수변 산책로"] },
    ],
    attractions: [
      { name: "올림픽 박물관", nameEn: "Olympic Museum", description: "올림픽 역사와 정신을 인터랙티브 전시로 체험하는 세계 최대의 올림픽 전문 박물관. 레만 호수변에 위치하며 정원의 올림픽 조각 공원도 아름답습니다.", category: "박물관", tip: "모든 올림픽 메달을 볼 수 있는 전시실이 하이라이트입니다." },
      { name: "노트르담 대성당", nameEn: "Lausanne Cathedral", description: "스위스에서 가장 아름다운 고딕 성당. 밤 10시에 야경꾼이 탑에서 시간을 외치는 전통이 이어집니다.", category: "성당" },
      { name: "플롱 지구", nameEn: "Flon District", description: "옛 창고 지대가 갤러리, 레스토랑, 클럽으로 변신한 로잔의 힙한 지구.", category: "지구" },
    ],
    dayTrips: [
      { name: "라보 포도밭", nameEn: "Lavaux Vineyards", description: "UNESCO 세계유산 테라스 포도밭에서 와인 테이스팅과 호수 전망.", travelTime: "기차 약 15분", gradient: "from-green-500 to-yellow-600" },
      { name: "그뤼에르", nameEn: "Gruyères", description: "그뤼에르 치즈의 본고장, 중세 마을과 치즈 공장 방문.", travelTime: "기차 약 1시간", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "포 소시스", description: "보주 지방 전통 양배추 소시지 요리.", emoji: "🌭" },
      { name: "라보 와인", description: "UNESCO 유산 라보 포도밭에서 생산되는 샤슬라 화이트 와인.", emoji: "🍷" },
    ],
    tips: [
      "로잔은 언덕 도시이므로 메트로 M2가 필수 교통수단입니다.",
      "올림픽 박물관은 반나절 이상 여유를 두고 방문하세요.",
      "로잔-비비행 유람선으로 레만 호수 건너편 프랑스 에비앙까지 갈 수 있습니다.",
    ],
  },
  "switzerland/geneva-lake/montreux": {
    heroGradient: "from-rose-500 to-pink-900",
    description: "레만 호수변의 '스위스 리비에라'. 세계적인 몽트뢰 재즈 페스티벌, 중세 시용 성, 프레디 머큐리의 동상이 있는 낭만적인 호반 도시입니다.",
    bestTime: "5~10월 (7월 재즈 페스티벌)",
    stayArea: "호수변 프롬나드 / 몽트뢰 역 주변",
    transport: "버스, 유람선, MOB 파노라마 열차",
    districts: [
      { name: "호수변", nameEn: "Lakefront", description: "레만 호수를 따라 꽃이 만발한 산책로와 프레디 머큐리 동상이 있는 지역.", highlights: ["프레디 머큐리 동상", "호수변 프롬나드", "몽트뢰 마르셰"] },
    ],
    attractions: [
      { name: "시용 성", nameEn: "Chateau de Chillon", description: "레만 호수 위에 떠 있는 듯한 중세 고성. 바이런 경의 시 '시용의 죄수'로 유명하며, 스위스에서 가장 많이 방문되는 역사 유적입니다.", category: "고성", tip: "몽트뢰에서 호수변 산책로를 따라 도보 45분, 또는 버스 10분입니다." },
      { name: "프레디 머큐리 동상", nameEn: "Freddie Mercury Statue", description: "퀸의 보컬리스트 프레디 머큐리를 기리는 호수변 동상. 그는 몽트뢰에 스튜디오를 두고 마지막 앨범을 녹음했습니다.", category: "기념비" },
      { name: "몽트뢰 재즈 페스티벌", nameEn: "Montreux Jazz Festival", description: "매년 7월 개최되는 세계 3대 재즈 페스티벌. 호수변 무료 공연부터 대형 공연장까지.", category: "축제" },
      { name: "로셰드네 전망대", nameEn: "Rochers-de-Naye", description: "해발 2,042m 전망대에서 레만 호수와 알프스를 조망. 산 위의 마멋 공원.", category: "전망대" },
    ],
    dayTrips: [
      { name: "골든 패스 라인", nameEn: "GoldenPass Line", description: "몽트뢰~인터라켄 구간의 파노라마 열차 노선.", travelTime: "약 3시간", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "퐁뒤 프리부르주아즈", description: "보 주와 프리부르 주 스타일의 진한 치즈 퐁뒤.", emoji: "🫕" },
      { name: "말라쿠프", description: "그뤼에르 치즈를 듬뿍 올린 감자 크로켓.", emoji: "🥔" },
    ],
    tips: [
      "재즈 페스티벌 기간(7월)에는 숙소를 몇 달 전에 예약하세요.",
      "시용 성까지 호수변 산책은 플라타너스 가로수길이 아름답습니다.",
      "골든 패스 라인으로 몽트뢰~인터라켄 이동이 차창 관광과 이동을 겸합니다.",
    ],
  },

  // ===== ZERMATT-VALAIS =====
  "switzerland/zermatt-valais/zermatt": {
    heroGradient: "from-slate-600 to-gray-900",
    description: "마터호른(4,478m)이 우뚝 솟은 자동차 없는 알프스 산악 마을. 유럽 최고 높이의 케이블카(3,883m)와 고르너그라트 전망대, 365일 스키 가능한 세계적 리조트입니다.",
    bestTime: "7~9월 (하이킹) / 12~4월 (스키) / 연중 가능",
    stayArea: "반호프 거리 / 마을 중심",
    transport: "전기 택시, 도보 (자동차 진입 금지, 테쉬에서 셔틀 열차 이용)",
    districts: [
      { name: "도르프", nameEn: "Dorf", description: "체르마트 메인 거리(반호프 거리)를 중심으로 호텔, 레스토랑, 상점이 밀집.", highlights: ["반호프 거리", "마터호른 박물관", "교회 광장"] },
      { name: "힌터도르프", nameEn: "Hinterdorf", description: "100~400년 된 전통 목조 가옥이 보존된 체르마트의 옛 마을 지구.", highlights: ["전통 발레 목조 가옥", "염소 행렬(여름 오후)"] },
    ],
    attractions: [
      { name: "마터호른", nameEn: "Matterhorn", description: "해발 4,478m, 피라미드 형상의 알프스 상징. 체르마트 어디서든 그 위용을 감상할 수 있으며, 일출 시 붉게 물드는 '마터호른 알펜글뤼엔'이 장관입니다.", category: "산", tip: "리펠 호수(Riffelsee)에서 마터호른 반영 사진을 찍을 수 있습니다." },
      { name: "고르너그라트 전망대", nameEn: "Gornergrat Railway", description: "해발 3,089m 전망대까지 톱니바퀴 열차로 33분. 마터호른과 몬테로사를 포함한 29개의 4,000m급 봉우리와 고르너 빙하가 펼쳐집니다.", category: "전망대", tip: "일출 특별 열차(여름)를 놓치지 마세요." },
      { name: "마터호른 글래시어 파라다이스", nameEn: "Matterhorn Glacier Paradise", description: "해발 3,883m, 유럽 최고 높이 케이블카 전망대. 빙하 궁전과 이탈리아/프랑스 알프스까지 보이는 360도 파노라마.", category: "전망대" },
      { name: "5개 호수 하이킹", nameEn: "5-Seenweg", description: "마터호른을 바라보며 5개의 산상 호수를 잇는 약 2.5시간의 하이킹 코스.", category: "하이킹", tip: "블라우헤르드에서 출발해 순네가로 하산하는 코스가 편합니다." },
      { name: "순네가 전망대", nameEn: "Sunnegga", description: "마터호른 촬영 베스트 포인트 중 하나로 라이 호수(Leisee)에서 수영도 가능.", category: "전망대" },
    ],
    dayTrips: [
      { name: "글래시어 익스프레스", nameEn: "Glacier Express", description: "체르마트~생모리츠를 잇는 '세계에서 가장 느린 특급열차' 8시간 파노라마.", travelTime: "편도 약 8시간", gradient: "from-red-500 to-orange-700" },
      { name: "이탈리아 체르비니아", nameEn: "Cervinia, Italy", description: "마터호른 글래시어 파라다이스에서 이탈리아 쪽으로 넘어가는 국경 스키.", travelTime: "케이블카 약 30분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "라클렛", description: "발레 주 원조 라클렛. 반 바퀴 치즈를 녹여 감자·피클 위에 긁어냄.", emoji: "🧀" },
      { name: "발레 플라테", description: "발레 주의 건조 고기(분트너플라이쉬), 치즈, 호밀빵 모듬.", emoji: "🥩" },
      { name: "뢰슈티", description: "바삭한 감자 팬케이크 위에 치즈와 베이컨을 올린 스위스 산악 소울 푸드.", emoji: "🥔" },
    ],
    tips: [
      "체르마트는 자동차 진입 금지! 테쉬(Täsch)에서 셔틀 열차(12분)로 이동합니다.",
      "피크 패스(Peak Pass)로 모든 산악 교통을 무제한 이용할 수 있습니다.",
      "마터호른 일출(알펜글뤼엔)을 보려면 고르너그라트 일출 열차를 예약하세요.",
      "여름에도 3,000m 이상은 기온이 낮으니 방풍 재킷을 챙기세요.",
    ],
  },
};

export const switzerlandAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ZURICH =====
  "switzerland/zurich-central/zurich/old-town-zurich": {
    heroGradient: "from-sky-500 to-blue-900",
    description: "리마트 강 양쪽에 펼쳐진 취리히의 역사적 심장부. 린덴호프 언덕에서 내려다보는 구시가지와 알프스 전망, 중세 길드하우스가 늘어선 골목, 그리고 츠빙글리의 종교개혁 역사가 살아 숨 쉬는 거리입니다.",
    history: "로마 시대 세관 초소에서 시작된 취리히는 중세 시대 길드 도시로 발전했습니다. 1519년 츠빙글리가 그로스뮌스터에서 종교개혁을 시작한 역사적 장소이며, 이후 상업과 금융의 중심지로 성장했습니다.",
    visitInfo: {
      hours: "24시간 개방 (개별 명소는 영업시간 상이)",
      admission: "무료 (개별 박물관 유료)",
      address: "Lindenhof, 8001 Zürich",
      website: "https://www.zuerich.com",
    },
    highlights: [
      "린덴호프 언덕에서 리마트 강과 구시가지 파노라마",
      "그로스뮌스터 쌍둥이 탑 전망 (CHF 5)",
      "프라우뮌스터 샤갈 스테인드글라스",
      "어거스티너 골목(Augustinergasse)의 색색 건물과 창문 장식",
    ],
    nearbyAttractions: ["바닌호프 거리", "스위스 국립박물관", "취리히 호수", "니더도르프"],
    photoTips: "린덴호프에서 그로스뮌스터와 리마트 강을 함께 담는 구도가 가장 클래식합니다. 일몰 무렵이 빛이 가장 아름답습니다.",
    tips: [
      "린덴호프는 관광객보다 현지인이 더 많은 조용한 전망 포인트입니다.",
      "무료 워킹 투어(팁 기반)가 매일 출발하며 구시가지 역사를 깊이 알 수 있습니다.",
      "프라우뮌스터 내부의 샤갈 스테인드글라스는 촬영이 가능합니다 (CHF 5).",
      "어거스티너 골목은 인스타그램 인기 포인트입니다.",
    ],
  },
  "switzerland/zurich-central/zurich/lake-zurich": {
    heroGradient: "from-cyan-400 to-blue-800",
    description: "알프스를 배경으로 취리히 도심에서 바로 이어지는 초승달 모양의 호수. 유람선, 호수 수영, 호반 산책을 통해 도시와 자연이 어우러진 취리히의 삶을 체험할 수 있습니다.",
    history: "빙하기에 형성된 길이 40km의 호수로, 취리히의 교통과 상업 발전에 핵심적인 역할을 했습니다. 현재는 시민들의 여가 공간이자 취리히 최고의 자연 자산입니다.",
    visitInfo: {
      hours: "24시간 개방 / 유람선: 4~10월 수시 운항",
      admission: "호수 무료 / 유람선 짧은 코스 CHF 8.80~, 긴 코스 CHF 26~",
      address: "Bürkliplatz, 8001 Zürich",
      website: "https://www.zsg.ch",
    },
    highlights: [
      "뷔르클리 광장에서 출발하는 호수 유람선",
      "여름 바디(Badi) 수영장에서 호수 수영",
      "호수변 산책로와 벤치에서 여유로운 오후",
      "라퍼스빌행 유람선에서 바라보는 알프스 파노라마",
    ],
    nearbyAttractions: ["뷔르클리 광장", "오페라하우스", "중국 정원", "바닌호프 거리"],
    photoTips: "일몰 시간 뷔르클리 광장에서 호수와 알프스를 배경으로 찍으면 황금빛 풍경을 담을 수 있습니다.",
    tips: [
      "스위스 트래블 패스 소지자는 유람선 무료 탑승 가능합니다.",
      "여름(6~9월) 호수변 바디에서 수영하는 것은 현지 문화입니다.",
      "퀴스나흐트 방면 단거리 유람이 시간 대비 가성비가 좋습니다.",
      "자전거 대여(무료: Züri Velo)로 호수 일주 코스를 즐길 수 있습니다.",
    ],
  },

  // ===== LUCERNE =====
  "switzerland/zurich-central/lucerne/chapel-bridge": {
    heroGradient: "from-amber-500 to-red-800",
    description: "1333년 건설된 유럽에서 가장 오래된 목조 지붕 다리이자 루체른의 상징. 지붕 아래 17세기 삼각형 패널화 112점이 루체른의 역사를 전하며, 다리 중간에 팔각형 바서투름(수탑)이 서 있습니다.",
    history: "1333년 루체른의 방어 시설 일부로 건설되었습니다. 내부 패널화는 1611년에 그려져 스위스 역사와 수호성인의 이야기를 담고 있습니다. 1993년 화재로 다리 대부분이 소실되었으나 빠르게 복원되어 현재의 모습을 되찾았습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Kapellbrücke, 6002 Luzern",
      website: "https://www.luzern.com",
    },
    highlights: [
      "지붕 아래 17세기 삼각형 패널화 감상",
      "팔각형 바서투름(수탑) 외관",
      "야간 조명에 비치는 다리와 호수 반영",
      "다리 위에서 바라보는 필라투스 산 전경",
    ],
    nearbyAttractions: ["바인마르크트 광장", "예수회 교회", "무제크 성벽", "빈사의 사자상"],
    photoTips: "로이스 강 남쪽 제방에서 다리 전체와 바서투름, 뒤의 필라투스 산을 한 프레임에 담을 수 있습니다. 새벽이나 야간 조명 시간이 최적입니다.",
    tips: [
      "1993년 화재 흔적이 일부 패널에 남아 있어 역사를 생생히 느낄 수 있습니다.",
      "아침 일찍 방문하면 관광객 없이 다리를 독차지할 수 있습니다.",
      "바로 옆 슈프로이어 다리(Spreuerbrücke)도 패널화가 있는 목조 다리입니다.",
      "루체른의 야경 명소 1순위 - 야간에 조명이 비치는 모습이 환상적입니다.",
    ],
  },
  "switzerland/zurich-central/lucerne/lion-monument": {
    heroGradient: "from-gray-500 to-slate-800",
    description: "바위에 새겨진 빈사의 사자상으로, 1792년 프랑스 대혁명 당시 루이 16세를 지키다 전사한 786명의 스위스 용병을 추모합니다. 마크 트웨인이 '세계에서 가장 슬프고 감동적인 석조물'이라 극찬한 기념비입니다.",
    history: "1821년 덴마크 조각가 베르텔 토르발센이 디자인하고 루카스 아호른이 자연 사암 벽면에 직접 조각했습니다. 창에 찔린 사자가 부르봉 왕가의 백합 문양이 새겨진 방패를 감싸 안고 쓰러지는 모습은 충성과 희생을 상징합니다.",
    visitInfo: {
      hours: "24시간 개방 (공원 내 위치)",
      admission: "무료",
      address: "Denkmalstrasse 4, 6002 Luzern",
    },
    highlights: [
      "자연 사암 벽면에 직접 조각된 10m 길이의 거대한 사자상",
      "창에 찔린 사자의 고통스러운 표정과 섬세한 조각 디테일",
      "연못에 비치는 사자상의 반영",
      "주변 공원의 고요한 분위기에서 묵념",
    ],
    nearbyAttractions: ["빙하공원", "카펠교", "부르바키 파노라마", "무제크 성벽"],
    photoTips: "연못 앞에서 수면에 비치는 반영과 함께 촬영하면 더욱 감동적인 사진을 얻을 수 있습니다.",
    tips: [
      "조용히 감상하는 장소이므로 소란스러운 행동은 삼가세요.",
      "바로 옆 빙하공원(Glacier Garden)과 함께 방문하면 좋습니다.",
      "카펠교에서 도보 5분 거리이니 동선을 함께 잡으세요.",
      "마크 트웨인의 '유럽 방랑기'에서 이 사자상에 대한 감상을 읽어보면 더 감동적입니다.",
    ],
  },

  // ===== BERN =====
  "switzerland/bernese-oberland/bern/bern-old-town": {
    heroGradient: "from-red-500 to-red-800",
    description: "아레 강이 감싸 흐르는 반도 위에 자리한 UNESCO 세계유산 구시가지. 6km에 달하는 아케이드 상점가, 중세 분수탑 11개, 치트글로게 시계탑이 800년 역사를 고스란히 간직하고 있는 유럽에서 가장 잘 보존된 중세 도시입니다.",
    history: "1191년 체링겐 공작 베르톨트 5세가 건설한 도시로, 전설에 따르면 처음 사냥한 곰(Bär)에서 도시 이름이 유래했습니다. 1983년 UNESCO 세계문화유산으로 등재되었으며, 아인슈타인이 1903~1905년 이곳에서 특수상대성이론을 발표했습니다.",
    visitInfo: {
      hours: "24시간 개방 (상점: 월~토 09:00~18:30, 목 ~21:00)",
      admission: "무료",
      address: "Kramgasse, 3011 Bern",
      website: "https://www.bern.com",
    },
    highlights: [
      "6km 유럽 최장 아케이드 쇼핑 산책로",
      "11개의 르네상스 분수탑(브루넨)",
      "아레 강변 장미 공원(Rosengarten)에서 구시가지 전경",
      "아케이드 지하 켈러(Keller) 상점과 바",
    ],
    nearbyAttractions: ["치트글로게 시계탑", "뮌스터 대성당", "아인슈타인 하우스", "연방 의사당"],
    photoTips: "장미 공원(Rosengarten)에서 아레 강과 구시가지, 뮌스터 대성당 첨탑을 한 프레임에 담을 수 있습니다.",
    tips: [
      "크람가세(Kramgasse)~게레히티그카이트 가세를 따라 걸으면 주요 분수탑을 모두 볼 수 있습니다.",
      "장미 공원은 구시가지 전경 촬영의 베스트 포인트입니다.",
      "아케이드 지하에 숨겨진 독립 상점과 카페를 발견하는 재미가 있습니다.",
      "매주 토요일 연방 광장 앞 시장은 현지 분위기를 느끼기에 최고입니다.",
    ],
  },
  "switzerland/bernese-oberland/bern/zytglogge-clock-tower": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "1218년에 세워진 베른의 상징적 시계탑. 매 시 정각 4분 전에 곰, 수탉, 광대 인형이 움직이는 천문시계가 800년 넘게 작동하고 있으며, 아인슈타인이 이 탑을 보며 시간의 상대성에 대한 영감을 얻었다고 알려져 있습니다.",
    history: "1218~1220년경 서쪽 성문의 일부로 건설되었으며, 1405년 대화재 후 재건되었습니다. 천문시계는 1530년 카스파르 브루너가 제작한 것으로, 500년 가까이 원래 메커니즘이 작동하고 있습니다. 아인슈타인이 매일 이 탑 앞을 지나며 시간에 대한 사고 실험의 영감을 받았다고 전해집니다.",
    visitInfo: {
      hours: "외관: 24시간 / 내부 투어: 4~10월 매일 14:30 (영어·독일어)",
      admission: "외관 무료 / 내부 가이드 투어 CHF 20",
      address: "Zytglogge 1, 3011 Bern",
      website: "https://www.bern.com/en/detail/zytglogge",
    },
    highlights: [
      "매 시 정각 4분 전 인형 퍼포먼스 (곰, 수탉, 광대, 아버지 시간)",
      "500년 된 원본 시계 메커니즘(내부 투어)",
      "천문 다이얼: 달의 위상, 요일, 월, 황도 12궁",
      "동쪽 면의 정교한 천문시계 문자판",
    ],
    nearbyAttractions: ["아인슈타인 하우스", "베른 구시가지 분수탑", "뮌스터 대성당", "연방 의사당"],
    photoTips: "동쪽에서 천문시계 문자판을 정면으로 촬영하세요. 정각 직전에 준비하면 인형 움직임을 동영상으로 담을 수 있습니다.",
    tips: [
      "정각 4분 전부터 인형이 움직이므로 5분 전에 자리를 잡으세요.",
      "내부 가이드 투어를 통해 500년 된 시계 메커니즘을 직접 볼 수 있습니다.",
      "바로 옆 크람가세 49번지가 아인슈타인이 살았던 집입니다.",
      "밤에 조명이 켜진 시계탑도 아름다우니 야경도 놓치지 마세요.",
    ],
  },

  // ===== INTERLAKEN =====
  "switzerland/bernese-oberland/interlaken/interlaken-adventure-capital": {
    heroGradient: "from-cyan-500 to-teal-800",
    description: "인터라켄은 알프스 어드벤처의 세계적 중심지로, 패러글라이딩, 캐녀닝, 스카이다이빙, 번지점프, 래프팅 등 100가지 이상의 아웃도어 액티비티를 즐길 수 있습니다. 융프라우 3봉을 바라보며 하늘을 나는 경험은 일생일대의 추억입니다.",
    history: "19세기 영국 관광객들이 알프스 등반 베이스캠프로 사용하면서 모험 여행의 전통이 시작되었습니다. 1990년대부터 어드벤처 스포츠의 메카로 성장하여 현재 세계에서 가장 다양한 아웃도어 액티비티를 제공하는 도시가 되었습니다.",
    visitInfo: {
      hours: "업체별 상이 (대부분 08:00~18:00, 여름 성수기 연장)",
      admission: "패러글라이딩 CHF 170~200, 스카이다이빙 CHF 380~430, 캐녀닝 CHF 120~180, 번지점프 CHF 195~",
      address: "Höheweg 37, 3800 Interlaken (관광안내소)",
      website: "https://www.interlaken.ch",
    },
    highlights: [
      "융프라우를 배경으로 한 패러글라이딩 탠덤 비행",
      "해발 4,000m에서 뛰어내리는 스카이다이빙",
      "그림젤 협곡 캐녀닝 (협곡 수영·다이빙·암벽)",
      "아레 강 래프팅과 제트 보트",
    ],
    nearbyAttractions: ["하더 쿨름", "회에마테 공원", "브리엔츠 호수", "융프라우요흐"],
    photoTips: "패러글라이딩 중 GoPro 촬영 서비스를 이용하면 융프라우와 호수를 배경으로 한 인생 사진을 얻을 수 있습니다.",
    tips: [
      "패러글라이딩은 날씨에 민감하므로 여유 일정을 두고 예약하세요.",
      "여러 업체를 비교하되, 안전 인증(SHV) 보유 업체를 선택하세요.",
      "비행 전 과식은 금물! 가벼운 식사 후 참가하는 것이 좋습니다.",
      "겨울에도 스키, 아이스 클라이밍 등 겨울 액티비티가 풍부합니다.",
    ],
  },

  // ===== JUNGFRAU REGION =====
  "switzerland/bernese-oberland/jungfrau-region/jungfraujoch-top-of-europe": {
    heroGradient: "from-blue-300 to-indigo-800",
    description: "해발 3,454m, 유럽에서 가장 높은 기차역이자 UNESCO 세계유산. 알레치 빙하(유럽 최장 23km)와 스핑크스 전망대에서 프랑스·독일까지 보이는 360도 파노라마, 얼음 궁전을 체험할 수 있습니다.",
    history: "스위스 산업가 아돌프 구이어-젤러가 1896년 구상을 시작해 16년의 난공사 끝에 1912년 개통했습니다. 아이거와 묀히의 산 내부를 관통하는 9.3km의 터널을 뚫어 만든 경이로운 철도 공학의 결정체입니다. 2001년 UNESCO 세계자연유산으로 등재되었습니다.",
    visitInfo: {
      hours: "첫 열차 06:35 ~ 마지막 하산 열차 17:35 (시즌별 상이)",
      admission: "인터라켄 OST 출발 왕복 CHF 214.40 (스위스 트래블 패스 25% 할인, 하프 페어 카드 50% 할인)",
      address: "Jungfraujoch, 3801 Jungfrau Region",
      website: "https://www.jungfrau.ch",
    },
    highlights: [
      "스핑크스 전망대(3,571m)에서 360도 알프스 파노라마",
      "알레치 빙하(유럽 최장 23km) 조망",
      "얼음 궁전(Eispalast): 빙하 내부에 조각된 환상적인 공간",
      "만년설 위 '알파인 센세이션' 체험 공간",
    ],
    nearbyAttractions: ["아이거 글레처", "클라이네 샤이덱", "그린델발트", "라우터브루넨"],
    photoTips: "스핑크스 전망대에서 알레치 빙하를 배경으로 촬영하세요. 오전이 구름이 적어 최적입니다. 강한 자외선에 대비해 선글라스 필수.",
    tips: [
      "라이브 웹캠(jungfrau.ch)으로 날씨를 확인한 후 방문하세요 - 구름이 끼면 전망이 없습니다.",
      "오전 첫 열차가 맑은 하늘 확률이 가장 높습니다.",
      "고산병 증상(두통, 어지러움)이 나타나면 천천히 움직이고 수분을 섭취하세요.",
      "스위스 트래블 패스 또는 하프 페어 카드로 큰 할인을 받을 수 있습니다.",
    ],
  },
  "switzerland/bernese-oberland/jungfrau-region/schilthorn": {
    heroGradient: "from-slate-400 to-slate-800",
    description: "해발 2,970m 정상의 회전 레스토랑 '피츠 글로리아'에서 200개 이상의 알프스 봉우리를 조망하는 전망대. 1969년 007 영화 '여왕 폐하 대작전'의 촬영지로 세계적으로 유명해졌습니다.",
    history: "1967년 케이블카가 건설되면서 관광지로 개발되었습니다. 건설 비용의 상당 부분을 007 영화 제작사가 촬영 대가로 지불했으며, 정상 레스토랑은 영화 속 악당의 비밀 기지 '피츠 글로리아'로 사용되었습니다.",
    visitInfo: {
      hours: "첫 케이블카 07:25 ~ 마지막 하산 17:25 (시즌별 상이)",
      admission: "뮈렌 출발 왕복 CHF 105 (얼리버드: 첫 케이블카 CHF 75)",
      address: "Schilthornbahn AG, 3825 Mürren",
      website: "https://www.schilthorn.ch",
    },
    highlights: [
      "360도 회전 레스토랑 '피츠 글로리아'에서 식사와 전망",
      "아이거, 묀히, 융프라우 3봉의 완벽한 파노라마",
      "007 본드 월드 인터랙티브 전시관",
      "스릴 워크: 절벽 위 유리 바닥 전망대",
    ],
    nearbyAttractions: ["뮈렌 마을", "알멘드후벨", "라우터브루넨 계곡", "비르그 스카이라인 워크"],
    photoTips: "아이거·묀히·융프라우를 한 프레임에 담으려면 레스토랑 테라스 남쪽이 최적 포인트입니다.",
    tips: [
      "얼리버드 티켓(첫 케이블카)이 30% 이상 저렴합니다.",
      "피츠 글로리아 레스토랑에서 '007 브런치'를 즐기면 입장료가 포함됩니다.",
      "뮈렌~쉴트호른은 융프라우요흐와 별개로 하루를 배정하세요.",
      "비르그(Birg) 중간역의 스카이라인 워크(유리 바닥)도 스릴 만점입니다.",
    ],
  },

  // ===== GRINDELWALD =====
  "switzerland/bernese-oberland/grindelwald/first-cliff-walk": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "해발 2,168m 피르스트 정상에 설치된 절벽 위 보행 다리로, 아이거 북벽의 경이로운 파노라마를 눈앞에서 감상합니다. 짚라인(피르스트 플라이어), 마운틴 카트, 트로티바이크 등 산 위의 다양한 액티비티도 즐길 수 있습니다.",
    history: "2015년 티쏜 관광이 피르스트 전망대를 확장하며 절벽 위에 금속 보행 다리를 설치했습니다. 인도 가로 약 1m, 절벽 아래 수백 미터의 아찔한 높이에서 알프스 파노라마를 즐기는 새로운 관광 명소가 되었습니다.",
    visitInfo: {
      hours: "피르스트 곤돌라: 5~10월 08:30~17:00, 겨울 시즌 별도",
      admission: "피르스트 곤돌라 왕복 CHF 60 (클리프 워크 무료 포함), 피르스트 플라이어 CHF 29, 마운틴 카트 CHF 19",
      address: "First, 3818 Grindelwald",
      website: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
    },
    highlights: [
      "절벽 위 보행 다리에서 아이거 북벽 파노라마",
      "피르스트 플라이어(짚라인): 시속 84km로 활강",
      "바흐알프 호수까지 하이킹(편도 50분)",
      "마운틴 카트와 트로티바이크로 산 내려가기",
    ],
    nearbyAttractions: ["바흐알프 호수", "그린델발트 마을", "아이거 익스프레스", "글레치어 캐니언"],
    photoTips: "클리프 워크 끝 지점에서 발 아래 절벽과 아이거를 배경으로 찍으면 아찔하면서도 장대한 사진을 얻습니다.",
    tips: [
      "피르스트 곤돌라 왕복 티켓에 클리프 워크가 무료로 포함됩니다.",
      "바흐알프 호수 하이킹은 피르스트에서 출발, 왕복 약 2시간 소요됩니다.",
      "피르스트 플라이어와 마운틴 카트는 별도 요금이지만 재미가 보장됩니다.",
      "날씨가 맑은 오전에 방문하면 아이거 북벽이 가장 선명합니다.",
    ],
  },

  // ===== ZERMATT =====
  "switzerland/zermatt-valais/zermatt/matterhorn": {
    heroGradient: "from-slate-600 to-gray-900",
    description: "해발 4,478m의 완벽한 피라미드형 봉우리로 알프스를 대표하는 산. 스위스와 이탈리아 국경에 걸쳐 있으며, 일출 시 봉우리가 붉게 물드는 '알펜글뤼엔'은 세계에서 가장 아름다운 자연 현상 중 하나입니다.",
    history: "1865년 7월 14일 에드워드 윔퍼가 이끄는 영국 등반대가 최초로 정상 등정에 성공했으나, 하산 중 4명이 추락 사망하는 비극이 발생했습니다. 이 드라마틱한 초등정 이야기는 등산 역사에서 가장 유명한 사건으로 남아 있습니다.",
    visitInfo: {
      hours: "고르너그라트 전망대: 첫 열차 07:00 ~ 마지막 19:24 (시즌별 상이)",
      admission: "고르너그라트 왕복 CHF 98, 마터호른 글래시어 파라다이스 왕복 CHF 100",
      address: "Zermatt, Valais, Switzerland",
      website: "https://www.zermatt.ch",
    },
    highlights: [
      "알펜글뤼엔: 일출 시 마터호른이 붉게 물드는 장관",
      "리펠 호수(Riffelsee)에 비친 마터호른 반영",
      "고르너그라트에서 29개 4,000m급 봉우리 조망",
      "마터호른 박물관에서 초등정의 드라마틱한 역사",
    ],
    nearbyAttractions: ["고르너그라트 전망대", "마터호른 글래시어 파라다이스", "순네가", "5개 호수 하이킹"],
    photoTips: "리펠 호수(Riffelsee)는 마터호른 반영 촬영의 베스트 포인트입니다. 고르너그라트에서 도보 약 20분. 바람이 없는 이른 아침이 반영이 가장 선명합니다.",
    tips: [
      "알펜글뤼엔을 보려면 고르너그라트 일출 특별 열차(여름 한정)를 예약하세요.",
      "마터호른이 구름에 가려지는 날이 많으므로 맑은 날을 기다려 방문하세요.",
      "리펠 호수는 여름(7~9월)에만 물이 차며, 그 외 시즌에는 건조할 수 있습니다.",
      "마터호른 박물관(Zermatlantis)에서 초등정 역사를 미리 공부하면 감동이 배가됩니다.",
    ],
  },
  "switzerland/zermatt-valais/zermatt/gornergrat-railway": {
    heroGradient: "from-orange-500 to-red-800",
    description: "체르마트에서 해발 3,089m 고르너그라트 전망대까지 33분간 오르는 톱니바퀴 열차. 1898년 개통된 유럽 최초의 전동 톱니바퀴 철도로, 창밖으로 마터호른과 몬테로사가 점점 가까워지는 경이로운 여정입니다.",
    history: "1898년 개통된 스위스 최초의 완전 전동 톱니바퀴 철도입니다. 체르마트(1,620m)에서 고르너그라트(3,089m)까지 9.3km를 33분에 주파하며, 최대 경사 20%를 올라갑니다. 125년 넘게 운행 중인 살아있는 철도 유산입니다.",
    visitInfo: {
      hours: "첫 열차 07:00 ~ 마지막 하산 19:24 (시즌별 상이, 여름 일출 열차 별도)",
      admission: "왕복 CHF 98 (스위스 트래블 패스 50% 할인, 하프 페어 카드 50% 할인)",
      address: "Bahnhofplatz 7, 3920 Zermatt",
      website: "https://www.gornergrat.ch",
    },
    highlights: [
      "정상에서 마터호른과 29개 4,000m급 봉우리 360도 파노라마",
      "고르너 빙하(스위스 제2의 빙하) 조망",
      "열차 창밖으로 점점 다가오는 마터호른",
      "3,100m 클룸 호텔: 유럽에서 가장 높은 호텔에서 별 관측",
    ],
    nearbyAttractions: ["리펠 호수", "리펠베르크", "마터호른", "5개 호수 하이킹"],
    photoTips: "열차 오른쪽 좌석(올라갈 때)에 앉으면 마터호른이 창밖으로 보입니다. 정상에서는 남쪽 테라스가 마터호른 정면 촬영 최적 포인트입니다.",
    tips: [
      "올라갈 때 오른쪽 좌석을 확보하면 마터호른을 창밖으로 감상할 수 있습니다.",
      "중간역(로텐보덴~리펠베르크) 구간을 하이킹하면 리펠 호수를 경유합니다.",
      "일출 특별 열차(여름)는 사전 예약이 필수이며, 일생일대의 경험입니다.",
      "피크 패스를 구매하면 무제한 탑승이 가능하여 여러 번 올라갈 수 있습니다.",
    ],
  },

  // ===== GENEVA =====
  "switzerland/geneva-lake/geneva/jet-deau": {
    heroGradient: "from-blue-600 to-slate-900",
    description: "레만 호수에서 140m 높이로 솟구치는 제네바의 상징적인 대분수. 초속 200km의 속도로 물 7톤을 공중에 띄우며, 제네바 어디서든 보이는 도시의 랜드마크입니다. 방파제 위에서 가까이 다가가 물안개를 맞을 수 있습니다.",
    history: "1886년 수력 발전소의 압력 조절 밸브로 시작된 것이 관광 명소로 발전했습니다. 처음에는 높이 30m에 불과했으나, 1951년 현재 위치로 이전하며 140m까지 높이를 올렸습니다. 현재 제네바를 대표하는 상징이 되었습니다.",
    visitInfo: {
      hours: "3~10월: 월~목 10:00~일몰, 금~일 10:00~22:30 / 11~2월: 날씨에 따라 운행",
      admission: "무료",
      address: "Quai Gustave-Ador, 1207 Genève",
      website: "https://www.geneve.com",
    },
    highlights: [
      "140m 높이로 솟구치는 세계적 대분수",
      "방파제 위에서 물안개를 맞으며 근접 체험",
      "야간 조명에 비치는 환상적인 분수 (금~일)",
      "몽블랑 다리에서 호수와 분수를 한 프레임에",
    ],
    nearbyAttractions: ["영국 공원 꽃시계", "몽블랑 다리", "구시가지", "바텍스 박물관"],
    photoTips: "몽블랑 다리에서 분수 전체와 호수를 한 프레임에 담을 수 있습니다. 야간 조명(금~일)에 장노출 촬영하면 환상적입니다.",
    tips: [
      "방파제 위에서 가까이 다가갈 수 있지만, 바람 방향에 따라 물벼락을 맞습니다!",
      "겨울과 강풍 시에는 운행이 중단되니 확인 후 방문하세요.",
      "야간 조명은 금~일요일에만 켜집니다.",
      "유람선을 타면 호수 위에서 분수를 다른 각도로 감상할 수 있습니다.",
    ],
  },

  // ===== MONTREUX =====
  "switzerland/geneva-lake/montreux/chateau-de-chillon": {
    heroGradient: "from-rose-500 to-pink-900",
    description: "레만 호수 위 바위 섬에 자리한 스위스에서 가장 많이 방문되는 역사 유적. 1000년의 역사를 가진 중세 수상 성으로, 바이런 경의 시 '시용의 죄수'로 세계적으로 유명해졌습니다. 호수와 알프스를 배경으로 한 동화 같은 풍경이 인상적입니다.",
    history: "11세기경 사보이 가문이 요새로 건설을 시작하여 13세기에 현재의 규모로 확장되었습니다. 1530년까지 사보이 공작의 여름 거처이자 감옥으로 사용되었으며, 제네바 독립 운동가 보니바르가 6년간 지하 감옥에 갇혔던 실화를 바이런이 1816년 시로 남겼습니다.",
    visitInfo: {
      hours: "4~9월 09:00~19:00, 10월·3월 09:30~18:00, 11~2월 10:00~17:00",
      admission: "성인 CHF 13.50, 학생 CHF 7, 6세 미만 무료",
      address: "Avenue de Chillon 21, 1820 Veytaux",
      website: "https://www.chillon.ch",
    },
    highlights: [
      "보니바르가 갇혔던 지하 감옥과 바이런이 새긴 서명",
      "대연회장의 중세 인테리어와 호수 전망",
      "성벽 위에서 바라보는 레만 호수와 알프스 파노라마",
      "중세 무기와 갑옷 전시실",
    ],
    nearbyAttractions: ["몽트뢰 호수변", "프레디 머큐리 동상", "로셰드네 전망대", "라보 포도밭"],
    photoTips: "성의 남동쪽 호수변에서 찍으면 성 전체와 호수, 산을 한 프레임에 담을 수 있습니다. 일몰 시 성이 황금빛으로 물듭니다.",
    tips: [
      "몽트뢰에서 호수변 산책로를 따라 도보 45분 - 경치가 아름다운 추천 코스입니다.",
      "오디오 가이드(한국어 없음, 영어 가능)를 이용하면 역사를 깊이 이해할 수 있습니다.",
      "스위스 뮤지엄 패스 소지 시 무료 입장 가능합니다.",
      "여름 저녁에는 특별 이벤트(콘서트, 야간 관람)가 열리기도 합니다.",
    ],
  },

  // ===== LAUSANNE =====
  "switzerland/geneva-lake/lausanne/olympic-museum": {
    heroGradient: "from-violet-500 to-purple-900",
    description: "IOC 본부가 있는 로잔의 레만 호수변에 자리한 세계 최대 올림픽 전문 박물관. 고대 올림피아부터 최신 올림픽까지의 역사를 인터랙티브 전시로 체험하며, 올림픽 정신과 스포츠의 감동을 느낄 수 있습니다.",
    history: "1993년 IOC 주도로 개관하였으며, 2013년 대규모 리노베이션을 거쳐 현재의 모습이 되었습니다. 올림픽 운동의 역사와 가치를 보존·전파하기 위해 설립되었으며, 연간 25만 명 이상이 방문합니다.",
    visitInfo: {
      hours: "5~10월: 매일 09:00~18:00 / 11~4월: 화~일 10:00~18:00 (월요일 휴관)",
      admission: "성인 CHF 20, 학생 CHF 10, 6세 미만 무료, 가족 CHF 50",
      address: "Quai d'Ouchy 1, 1006 Lausanne",
      website: "https://www.olympics.com/museum",
    },
    highlights: [
      "역대 모든 올림픽 메달 전시",
      "올림픽 성화 봉송 체험 인터랙티브 존",
      "유명 올림픽 순간들의 멀티미디어 상영관",
      "정원의 올림픽 조각 공원과 레만 호수 전망",
    ],
    nearbyAttractions: ["우시 호수변", "노트르담 대성당", "플롱 지구", "라보 포도밭"],
    photoTips: "박물관 정원에서 올림픽 오륜과 레만 호수를 함께 담을 수 있는 포인트가 있습니다.",
    tips: [
      "최소 2~3시간은 여유를 두고 방문하세요 - 인터랙티브 전시가 많습니다.",
      "박물관 카페(TOM Café)에서 레만 호수 전망과 함께 식사할 수 있습니다.",
      "메트로 M2 우시-올림피크역에서 도보 5분입니다.",
      "뮤지엄숍에서 올림픽 공식 기념품을 구매할 수 있습니다.",
    ],
  },
};
