import type { CityDetail, AttractionDetail } from "../city-details";

export const czechiaCityDetails: Record<string, CityDetail> = {
  // ===== PRAGUE REGION =====
  "czechia/prague/prague": {
    heroGradient: "from-red-600 to-amber-800",
    description: "백탑의 도시라 불리는 체코의 수도. 블타바 강변으로 펼쳐진 고딕·바로크·아르누보 건축이 조화를 이루며, 카를교와 프라하 성, 구시가 광장의 천문시계가 세계적으로 유명합니다.",
    bestTime: "4~6월, 9~10월 (여름은 관광객 매우 많음)",
    stayArea: "구시가지 (스타레 메스토) / 말라 스트라나",
    transport: "메트로, 트램, 버스 (리타체카 교통카드)",
    districts: [
      { name: "스타레 메스토", nameEn: "Stare Mesto", description: "구시가 광장과 천문시계, 유대인 지구가 있는 프라하의 역사적 중심지.", highlights: ["구시가 광장", "천문시계", "틴 성모 교회", "유대인 지구"] },
      { name: "말라 스트라나", nameEn: "Mala Strana", description: "프라하 성 아래 바로크 양식의 건물과 아늑한 카페가 가득한 지역.", highlights: ["카를교 서쪽", "성 미쿨라시 교회", "레논 벽", "캄파 섬"] },
      { name: "흐라드차니", nameEn: "Hradcany", description: "프라하 성과 성 비투스 대성당이 위치한 언덕 위 왕궁 지구.", highlights: ["프라하 성", "성 비투스 대성당", "황금 소로", "스트라호프 수도원"] },
    ],
    attractions: [
      { name: "카를교", nameEn: "Charles Bridge", description: "1357년 건설된 프라하의 상징. 30개의 바로크 성인상이 늘어선 블타바 강 위의 보행자 전용 다리.", category: "다리", tip: "일출 시간에 방문하면 인파 없이 아름다운 사진을 찍을 수 있습니다." },
      { name: "프라하 성", nameEn: "Prague Castle", description: "세계 최대 규모의 고성 단지. 체코 대통령 관저이자 성 비투스 대성당이 자리한 프라하의 랜드마크.", category: "고성", tip: "서킷 B 티켓이 가성비 최고입니다." },
      { name: "구시가 광장 & 천문시계", nameEn: "Old Town Square & Astronomical Clock", description: "600년 역사의 천문시계가 매시 정각 12사도 행렬을 보여주는 프라하의 심장부.", category: "광장", tip: "천문시계는 매시 정각 작동하며 9~21시에 볼 수 있습니다." },
      { name: "성 비투스 대성당", nameEn: "St. Vitus Cathedral", description: "프라하 성 내에 위치한 고딕 양식의 걸작. 알폰스 무하의 스테인드글라스가 유명합니다.", category: "성당" },
      { name: "유대인 지구", nameEn: "Jewish Quarter", description: "유럽에서 가장 잘 보존된 유대인 유적지 중 하나. 6개의 시나고그와 구유대인 묘지가 남아있습니다.", category: "역사지구", tip: "통합 티켓으로 모든 시나고그와 묘지를 방문하세요." },
      { name: "레논 벽", nameEn: "Lennon Wall", description: "존 레논에게 헌정된 그래피티 벽으로 평화와 자유의 상징.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "쿠트나 호라", nameEn: "Kutna Hora", description: "해골 교회(세들레츠 납골당)와 성 바르바라 대성당이 있는 UNESCO 도시.", travelTime: "기차 약 1시간", gradient: "from-gray-500 to-slate-800" },
      { name: "체스키 크룸로프", nameEn: "Cesky Krumlov", description: "블타바 강이 감싸는 동화 같은 중세 마을. UNESCO 세계유산.", travelTime: "버스 약 2시간 45분", gradient: "from-orange-400 to-rose-700" },
    ],
    localFood: [
      { name: "스비치코바", description: "크림소스에 조린 쇠고기 안심과 크네들리키(빵 만두), 체코 국민 음식.", emoji: "🥩" },
      { name: "뜨르들로", description: "원통형으로 구운 달콤한 빵. 구시가지 곳곳에서 만날 수 있는 거리 간식.", emoji: "🍩" },
      { name: "꼴레노", description: "체코식 돼지 무릎(족발). 바삭한 껍질과 부드러운 속살이 맥주와 완벽한 조합.", emoji: "🍖" },
    ],
    tips: [
      "카를교는 일출 시간(오전 6시 전후)에 방문해야 인파 없이 즐길 수 있습니다.",
      "프라하 성은 오전에 방문하고 말라 스트라나로 내려오는 동선이 효율적입니다.",
      "대중교통 30분/90분 티켓을 상황에 맞게 구매하세요. 메트로·트램·버스 통합입니다.",
      "체코 맥주는 세계 최고 수준! 필스너 우르켈, 코젤, 스타로프라멘 등을 꼭 맛보세요.",
    ],
  },
  "czechia/prague/kutna-hora": {
    heroGradient: "from-gray-500 to-slate-800",
    description: "중세 은광 도시로 번영했던 UNESCO 세계유산 도시. 4만 구의 인골로 장식된 세들레츠 납골당(해골 교회)과 고딕 걸작 성 바르바라 대성당이 유명합니다.",
    bestTime: "4~10월",
    stayArea: "구시가지 중심부",
    transport: "프라하에서 기차 약 1시간 (당일치기 추천)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "성 바르바라 대성당과 이탈리안 궁정이 있는 역사적 중심지.", highlights: ["성 바르바라 대성당", "이탈리안 궁정", "예수회 대학"] },
      { name: "세들레츠", nameEn: "Sedlec", description: "유명한 해골 교회와 세들레츠 성모 승천 대성당이 있는 기차역 인근 지역.", highlights: ["세들레츠 납골당", "성모 승천 대성당"] },
    ],
    attractions: [
      { name: "세들레츠 납골당", nameEn: "Sedlec Ossuary", description: "약 4만 구의 인골로 내부를 장식한 세계에서 가장 독특한 교회.", category: "교회", tip: "기차역에서 도보 10분, 구시가지보다 먼저 방문하세요." },
      { name: "성 바르바라 대성당", nameEn: "St. Barbara's Cathedral", description: "광부의 수호성인에게 헌정된 후기 고딕 양식의 걸작. UNESCO 세계유산.", category: "성당" },
      { name: "이탈리안 궁정", nameEn: "Italian Court", description: "중세 왕립 조폐소였던 건물로 쿠트나 호라의 은광 역사를 보여줍니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "프라하", nameEn: "Prague", description: "체코의 수도, 카를교와 프라하 성의 도시.", travelTime: "기차 약 1시간", gradient: "from-red-600 to-amber-800" },
    ],
    localFood: [
      { name: "스비치코바", description: "크림소스 쇠고기와 크네들리키, 체코 전통 요리.", emoji: "🥩" },
      { name: "체코 맥주", description: "지역 소규모 양조장의 수제 맥주를 맛보세요.", emoji: "🍺" },
    ],
    tips: [
      "프라하에서 당일치기가 가장 효율적입니다. 프라하 중앙역에서 직행 기차 이용.",
      "세들레츠 납골당과 성 바르바라 대성당 통합 티켓(300 CZK)이 저렴합니다.",
      "구시가지와 세들레츠 사이는 도보 약 30분, 미니버스도 운행합니다.",
    ],
  },

  // ===== BOHEMIA =====
  "czechia/bohemia/cesky-krumlov": {
    heroGradient: "from-orange-400 to-rose-700",
    description: "블타바 강이 S자로 감싸 안은 동화 같은 중세 마을. 체코에서 프라하 다음으로 많은 관광객이 찾는 UNESCO 세계유산으로, 르네상스 양식의 성과 알록달록한 구시가지가 매력적입니다.",
    bestTime: "5~9월 (여름 축제 시즌)",
    stayArea: "구시가지 내 (라트란 / 내부 도시)",
    transport: "프라하에서 버스 약 2시간 45분 (Student Agency/RegioJet)",
    districts: [
      { name: "내부 도시", nameEn: "Inner Town", description: "블타바 강으로 둘러싸인 구시가지 핵심. 스보르노스티 광장 중심으로 상점과 레스토랑이 밀집.", highlights: ["스보르노스티 광장", "성 비투스 교회", "에곤 실레 아트 센터"] },
      { name: "라트란", nameEn: "Latran", description: "성으로 올라가는 길목의 지역. 수도원과 극장이 위치.", highlights: ["체스키 크룸로프 성 입구", "바로크 극장", "수도원 정원"] },
    ],
    attractions: [
      { name: "체스키 크룸로프 성", nameEn: "Cesky Krumlov Castle", description: "체코에서 프라하 성 다음으로 큰 성 단지. 르네상스 탑에서 마을 전체를 조망할 수 있습니다.", category: "고성", tip: "성탑 전망대(150 CZK)에서 블타바 강과 마을의 파노라마를 촬영하세요." },
      { name: "구시가지", nameEn: "Old Town", description: "중세 거리와 르네상스·바로크 건축이 어우러진 UNESCO 세계유산 구시가지.", category: "역사지구", tip: "미로 같은 골목을 천천히 산책하며 숨은 카페를 발견해 보세요." },
      { name: "에곤 실레 아트 센터", nameEn: "Egon Schiele Art Centrum", description: "오스트리아 표현주의 화가 에곤 실레와 관련된 기획 전시를 개최하는 미술관.", category: "미술관" },
      { name: "블타바 강 래프팅", nameEn: "Vltava River Rafting", description: "도시를 감싸는 블타바 강에서 카누·래프팅으로 색다르게 마을을 즐기는 체험.", category: "액티비티" },
    ],
    dayTrips: [
      { name: "할슈타트", nameEn: "Hallstatt", description: "오스트리아의 보석 같은 호수 마을.", travelTime: "자동차 약 2시간 30분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "뜨르들로", description: "원통형 구운 빵에 시나몬과 설탕을 묻힌 체코 전통 간식.", emoji: "🍩" },
      { name: "꼴레노", description: "바삭하게 구운 돼지 무릎 요리, 체코 맥주와 함께.", emoji: "🍖" },
      { name: "체코 맥주", description: "에겐베르크 양조장의 지역 수제 맥주를 꼭 맛보세요.", emoji: "🍺" },
    ],
    tips: [
      "여름에는 블타바 강 래프팅·카누가 인기입니다. 사전 예약 추천!",
      "1박 이상 머물면 관광객이 빠진 저녁·아침의 고즈넉한 분위기를 만끽할 수 있습니다.",
      "체스키 크룸로프 카드로 성, 박물관 할인 혜택을 받으세요.",
      "프라하에서 RegioJet(Student Agency) 버스가 가장 편리합니다.",
    ],
  },
  "czechia/bohemia/karlovy-vary": {
    heroGradient: "from-amber-400 to-emerald-700",
    description: "유럽 왕족과 예술가들이 사랑한 체코 최고의 온천 도시. 12개의 주요 온천수가 솟아나는 콜로나데(회랑)와 화려한 아르누보·네오바로크 건축이 어우러진 우아한 도시입니다.",
    bestTime: "5~9월 (7월 국제영화제 기간)",
    stayArea: "그랜드호텔 풀 주변 / 밀 콜로나데 인근",
    transport: "프라하에서 버스 약 2시간 15분",
    districts: [
      { name: "온천 지구", nameEn: "Spa District", description: "테플라 강을 따라 콜로나데와 온천 호텔이 늘어선 도시의 핵심 지역.", highlights: ["밀 콜로나데", "뜨거운 온천(브르지들로)", "마켓 콜로나데"] },
      { name: "언덕 지구", nameEn: "Hill District", description: "디아나 전망대와 숲 산책로가 있는 도시 위쪽 지역.", highlights: ["디아나 전망대", "푸니쿨라", "사슴 점프 전망대"] },
    ],
    attractions: [
      { name: "온천 콜로나데", nameEn: "Hot Springs Colonnade", description: "72°C 온천수가 12m 높이로 솟아오르는 브르지들로 간헐천과 5개의 콜로나데 회랑.", category: "온천", tip: "전용 온천컵(라젠스키 포하르)을 기념품 가게에서 구입해 온천수를 마셔보세요." },
      { name: "밀 콜로나데", nameEn: "Mill Colonnade", description: "124개의 코린트식 기둥이 늘어선 가장 크고 우아한 콜로나데.", category: "건축" },
      { name: "디아나 전망대", nameEn: "Diana Lookout Tower", description: "푸니쿨라로 올라가 카를로비 바리 전경을 내려다볼 수 있는 전망대.", category: "전망대", tip: "푸니쿨라는 그랜드호텔 풀 뒤편에서 탑승합니다." },
      { name: "모세르 유리 박물관", nameEn: "Moser Glass Museum", description: "150년 전통의 모세르 크리스탈 공장 투어와 유리공예 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "로케트 나드 오흐르지", nameEn: "Loket nad Ohri", description: "동화 같은 고성과 마을이 있는 소도시. 카를로비 바리에서 가까운 당일치기 명소.", travelTime: "버스 약 20분", gradient: "from-stone-400 to-amber-700" },
    ],
    localFood: [
      { name: "오플라트키", description: "카를로비 바리 특산 얇은 웨이퍼 과자. 다양한 맛이 있습니다.", emoji: "🧇" },
      { name: "베헤로프카", description: "카를로비 바리에서 탄생한 허브 리큐르. 13번째 온천이라 불립니다.", emoji: "🥃" },
      { name: "체코 온천 음식", description: "온천수로 끓인 스프와 지역 특산 요리를 즐겨보세요.", emoji: "🍲" },
    ],
    tips: [
      "온천컵(라젠스키 포하르)은 50~200 CZK 정도로, 실용적인 기념품입니다.",
      "온천수는 각 콜로나데마다 온도와 맛이 다르니 비교 음미해 보세요.",
      "7월 카를로비 바리 국제영화제 기간에는 숙소 예약이 매우 어렵습니다.",
      "베헤로프카 박물관에서 시음 포함 투어(200 CZK)를 체험할 수 있습니다.",
    ],
  },
  "czechia/bohemia/plzen": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "필스너 맥주의 탄생지로 전 세계 라거 맥주의 원조 도시. 1842년 최초의 필스너가 양조된 필스너 우르켈 양조장을 방문할 수 있으며, 세계 최대의 시나고그도 이곳에 있습니다.",
    bestTime: "5~9월 (10월 필스너 페스트)",
    stayArea: "공화국 광장 주변",
    transport: "프라하에서 기차 약 1시간 30분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "공화국 광장을 중심으로 펼쳐진 플젠의 역사적 중심지.", highlights: ["공화국 광장", "성 바르톨로메오 대성당", "대시나고그"] },
    ],
    attractions: [
      { name: "필스너 우르켈 양조장", nameEn: "Pilsner Urquell Brewery", description: "1842년 세계 최초의 필스너 라거가 탄생한 양조장. 지하 저장고에서 비살균 생맥주를 시음합니다.", category: "양조장", tip: "영어 투어는 하루 2~3회, 온라인 사전 예약을 추천합니다." },
      { name: "공화국 광장", nameEn: "Republic Square", description: "유럽에서 가장 큰 광장 중 하나로, 성 바르톨로메오 대성당이 중앙에 우뚝 서 있습니다.", category: "광장" },
      { name: "플젠 지하 터널", nameEn: "Pilsen Historical Underground", description: "중세 시대에 건설된 14km에 달하는 지하 통로 네트워크.", category: "역사", tip: "내부 온도가 낮으니 여름에도 겉옷을 챙기세요." },
    ],
    dayTrips: [
      { name: "프라하", nameEn: "Prague", description: "체코의 수도, 기차로 1시간 30분.", travelTime: "기차 약 1시간 30분", gradient: "from-red-600 to-amber-800" },
    ],
    localFood: [
      { name: "필스너 우르켈", description: "이곳에서만 맛볼 수 있는 비살균 탱크 생맥주(네필트로바네).", emoji: "🍺" },
      { name: "우토페네츠", description: "식초에 절인 소시지, 체코 맥주 안주의 정석.", emoji: "🌭" },
    ],
    tips: [
      "필스너 우르켈 양조장 투어(350 CZK)는 반드시 사전 예약하세요.",
      "양조장 투어 마지막의 지하 저장고 비살균 맥주는 이곳에서만 가능한 경험입니다.",
      "프라하에서 당일치기 가능하지만, 오후에 여유롭게 맥주를 즐기려면 1박 추천.",
    ],
  },

  // ===== MORAVIA =====
  "czechia/moravia/brno": {
    heroGradient: "from-violet-500 to-indigo-800",
    description: "체코 제2의 도시이자 모라비아의 수도. 프라하보다 한적하면서도 활기찬 대학 도시로, 기능주의 건축의 걸작 투겐트하트 빌라(UNESCO)와 카푸친 수도원 지하 묘지가 유명합니다.",
    bestTime: "4~10월 (6월 이그니스 브루넨시스 불꽃축제)",
    stayArea: "자유 광장(나메스티 스보보디) 주변",
    transport: "프라하에서 기차 약 2시간 30분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "자유 광장과 채소 시장, 주요 교회가 밀집한 도심 핵심 지역.", highlights: ["자유 광장", "채소 시장", "구시청사"] },
      { name: "슈필베르크 언덕", nameEn: "Spilberk Hill", description: "슈필베르크 성이 자리한 언덕으로 시내 전체를 조망할 수 있습니다.", highlights: ["슈필베르크 성", "성 공원", "전망대"] },
      { name: "체르나 폴레", nameEn: "Cerna Pole", description: "투겐트하트 빌라가 위치한 주거 지역.", highlights: ["투겐트하트 빌라", "루자노비 공원"] },
    ],
    attractions: [
      { name: "슈필베르크 성", nameEn: "Spilberk Castle", description: "13세기에 건설된 성채로 한때 합스부르크의 감옥으로 사용되었습니다. 현재는 브르노 시립 박물관.", category: "고성", tip: "성 전망대에서 브르노 시내 전경을 감상하세요." },
      { name: "성 베드로와 바오로 대성당", nameEn: "Cathedral of St. Peter and Paul", description: "페트로프 언덕 위에 우뚝 선 브르노의 상징. 네오고딕 쌍탑이 인상적입니다.", category: "성당", tip: "매일 11시에 12번 종을 치는 전통이 있습니다. 실제로는 11시가 맞습니다." },
      { name: "투겐트하트 빌라", nameEn: "Villa Tugendhat", description: "미스 반 데어 로에가 설계한 기능주의 건축의 걸작. UNESCO 세계유산.", category: "건축", tip: "인기가 매우 높아 최소 1~2개월 전 온라인 예약이 필수입니다." },
      { name: "카푸친 수도원 지하 묘지", nameEn: "Capuchin Monastery Crypt", description: "자연 미라화된 수도사들의 유해가 보존된 지하 묘지.", category: "역사" },
      { name: "구시청사", nameEn: "Old Town Hall", description: "고딕 양식의 출입구와 비뚤어진 첨탑이 유명한 브르노의 역사적 건물.", category: "건축" },
    ],
    dayTrips: [
      { name: "레드니체-발티체 문화경관", nameEn: "Lednice-Valtice Cultural Landscape", description: "UNESCO 세계유산. 리히텐슈타인 가문의 궁전과 정원이 펼쳐진 광활한 문화경관.", travelTime: "기차+버스 약 1시간 30분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "모라비아 와인", description: "체코 와인 생산의 96%를 차지하는 모라비아 지역의 화이트 와인.", emoji: "🍷" },
      { name: "스비치코바", description: "크림소스 쇠고기와 크네들리키, 체코를 대표하는 전통 요리.", emoji: "🥩" },
      { name: "트바루슈키", description: "올로모우츠 지역 특산 숙성 치즈. 강한 향이 특징.", emoji: "🧀" },
    ],
    tips: [
      "투겐트하트 빌라는 매우 인기가 높으니 반드시 사전 온라인 예약(tugendhat.eu)하세요.",
      "성 베드로와 바오로 대성당의 종은 11시에 12번 울립니다(30년 전쟁 유래 전통).",
      "프라하보다 물가가 저렴하고 관광객이 적어 여유롭게 체코를 즐기기에 좋습니다.",
      "6월 이그니스 브루넨시스 국제 불꽃축제는 슈필베르크 성에서 열립니다.",
    ],
  },
  "czechia/moravia/olomouc": {
    heroGradient: "from-emerald-500 to-teal-800",
    description: "모라비아의 역사적 수도이자 체코에서 두 번째로 많은 문화재를 보유한 도시. UNESCO 세계유산인 삼위일체 기둥이 중심 광장에 서 있으며, 대학 도시 특유의 젊은 활기가 넘칩니다.",
    bestTime: "4~10월",
    stayArea: "호르니 광장 주변",
    transport: "프라하에서 기차 약 2시간 15분",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "호르니 광장과 돌니 광장을 중심으로 바로크 분수와 교회가 즐비한 역사 중심지.", highlights: ["호르니 광장", "삼위일체 기둥", "천문시계", "시청사"] },
      { name: "성곽 지구", nameEn: "Castle Quarter", description: "성 바츨라프 대성당과 대주교 궁전이 위치한 종교·문화 중심지.", highlights: ["성 바츨라프 대성당", "프르제미슬 궁전", "대주교 박물관"] },
    ],
    attractions: [
      { name: "삼위일체 기둥", nameEn: "Holy Trinity Column", description: "높이 35m의 바로크 양식 기둥으로 중앙유럽 최대 규모. UNESCO 세계유산.", category: "기념물", tip: "호르니 광장 중앙에 위치하며, 야간 조명이 특히 아름답습니다." },
      { name: "호르니 광장 & 천문시계", nameEn: "Upper Square & Astronomical Clock", description: "올로모우츠의 중심 광장. 공산주의 시대에 재건된 독특한 모자이크 천문시계가 있습니다.", category: "광장" },
      { name: "성 바츨라프 대성당", nameEn: "St. Wenceslas Cathedral", description: "올로모우츠에서 가장 큰 교회로 100m 높이의 첨탑이 도시 스카이라인을 지배합니다.", category: "성당" },
      { name: "바로크 분수들", nameEn: "Baroque Fountains", description: "구시가지 곳곳에 흩어진 6개의 바로크 분수. 각각 로마 신화를 주제로 합니다.", category: "분수" },
    ],
    dayTrips: [
      { name: "브르노", nameEn: "Brno", description: "체코 제2의 도시, 기능주의 건축과 활기찬 카페 문화.", travelTime: "기차 약 1시간 30분", gradient: "from-violet-500 to-indigo-800" },
      { name: "보우조프 성", nameEn: "Bouzov Castle", description: "동화 같은 외관의 고딕-르네상스 성.", travelTime: "버스 약 40분", gradient: "from-stone-500 to-green-800" },
    ],
    localFood: [
      { name: "트바루슈키", description: "올로모우츠 특산 숙성 치즈(올로모우츠케 트바루슈키). 강렬한 향이 중독적.", emoji: "🧀" },
      { name: "모라비아 와인", description: "모라비아의 화이트·로제 와인, 와인바에서 시음해보세요.", emoji: "🍷" },
    ],
    tips: [
      "프라하에 비해 관광객이 매우 적어 진정한 체코를 느낄 수 있는 도시입니다.",
      "올로모우츠 천문시계는 프라하와 달리 사회주의 리얼리즘 양식으로 독특합니다.",
      "올로모우츠케 트바루슈키(숙성 치즈)는 호불호가 갈리지만 꼭 한 번 도전해보세요.",
      "대학 도시답게 학기 중에는 저렴하고 활기찬 카페·바가 많습니다.",
    ],
  },
};

export const czechiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== PRAGUE =====
  "czechia/prague/prague/charles-bridge": {
    heroGradient: "from-amber-500 to-stone-800",
    description: "1357년 카를 4세의 명으로 건설이 시작된 프라하의 상징. 블타바 강 위 516m 길이의 석조 다리 양옆에 30개의 바로크 성인상이 늘어서 있으며, 프라하 성과 구시가지를 연결합니다.",
    history: "1357년 7월 9일 오전 5시 31분, 카를 4세가 점성술적으로 길한 시각에 맞추어 초석을 놓았다고 전해집니다. 건축가 페트르 파를레르슈가 설계했으며, 약 45년에 걸쳐 완공되었습니다. 30개의 바로크 성인상은 1683~1714년에 추가되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (보행자 전용)",
      admission: "무료",
      address: "Karlův most, 110 00 Praha 1",
      website: "https://www.prague.eu",
    },
    highlights: [
      "30개의 바로크 성인상 (특히 성 얀 네포무츠키 동상의 금빛 부조)",
      "다리 위에서 바라보는 프라하 성 전경",
      "구시가지 쪽 다리탑 전망대 (올라갈 수 있음)",
      "거리 예술가들의 음악과 초상화 그림",
    ],
    nearbyAttractions: ["프라하 성", "말라 스트라나", "캄파 섬", "구시가 광장"],
    photoTips: "일출 시간(오전 5~6시)에 동쪽에서 서쪽(프라하 성 방향)을 촬영하면 황금빛 아침 빛이 성과 다리를 아름답게 물들입니다.",
    tips: [
      "일출 시간(오전 5~6시)이 인파 없이 다리를 즐길 수 있는 유일한 시간대입니다.",
      "성 얀 네포무츠키 동상 아래 금빛 부조를 만지면 행운이 온다는 전설이 있습니다.",
      "구시가지 쪽 다리탑(100 CZK)에 올라가면 다리 전체를 내려다볼 수 있습니다.",
      "소매치기가 빈번하니 소지품 관리에 주의하세요.",
    ],
  },
  "czechia/prague/prague/prague-castle": {
    heroGradient: "from-red-600 to-slate-800",
    description: "기네스북에 등재된 세계 최대의 고성 단지(약 7만㎡). 9세기부터 체코 통치자들의 거주지였으며, 현재도 대통령 관저로 사용됩니다. 성 비투스 대성당, 구왕궁, 황금 소로 등이 내부에 있습니다.",
    history: "870년경 보르지보이 공작이 첫 성채를 건설한 이래 1,000년 넘게 증축되었습니다. 로마네스크, 고딕, 르네상스, 바로크 등 다양한 건축 양식이 공존하며, 카를 4세 시대에 성 비투스 대성당이 증축되었습니다.",
    visitInfo: {
      hours: "성 단지: 06:00~22:00 / 전시공간: 09:00~17:00 (동절기 ~16:00)",
      admission: "서킷 B(추천): 250 CZK / 서킷 A: 350 CZK",
      address: "Hradčany, 119 08 Praha 1",
      website: "https://www.hrad.cz",
    },
    highlights: [
      "성 비투스 대성당의 무하 스테인드글라스",
      "황금 소로(골든 레인)의 알록달록한 소형 가옥들",
      "구왕궁의 블라디슬라프 홀 (후기 고딕 볼트 천장)",
      "정오 근위병 교대식",
    ],
    nearbyAttractions: ["성 비투스 대성당", "황금 소로", "스트라호프 수도원", "말라 스트라나"],
    photoTips: "성 정문 앞 광장에서 근위병과 함께 촬영하거나, 성 내부 전망대에서 프라하 시내를 한눈에 담을 수 있습니다.",
    tips: [
      "서킷 B 티켓(250 CZK)이면 주요 명소를 모두 볼 수 있어 가성비 최고입니다.",
      "정오(12시) 근위병 교대식은 놓치지 마세요. 팡파르와 함께 진행됩니다.",
      "오전 9시 개장 직후 방문하면 성 비투스 대성당 내부를 여유롭게 관람할 수 있습니다.",
      "트램 22번을 타고 프라하스키 흐라드(Pražský hrad)역에서 하차하면 편리합니다.",
    ],
  },
  "czechia/prague/prague/old-town-square": {
    heroGradient: "from-orange-500 to-red-800",
    description: "12세기부터 프라하의 중심이었던 광장. 600년 역사의 천문시계가 매시 정각 12사도 퍼레이드를 보여주며, 고딕 양식의 틴 성모 교회와 바로크 양식의 성 미쿨라시 교회가 광장을 둘러싸고 있습니다.",
    history: "12세기 시장터로 시작되어 프라하의 정치·상업·문화의 중심지가 되었습니다. 천문시계(오를로이)는 1410년에 설치되어 세계에서 가장 오래된 작동하는 천문시계입니다. 1915년 얀 후스 동상이 광장 중앙에 세워졌습니다.",
    visitInfo: {
      hours: "광장: 24시간 개방 / 천문시계탑: 09:00~21:00 (월 11:00~)",
      admission: "광장 무료 / 시계탑 전망대 300 CZK",
      address: "Staroměstské nám., 110 00 Praha 1",
      website: "https://www.prague.eu",
    },
    highlights: [
      "천문시계(오를로이)의 매시 정각 12사도 퍼레이드 (09~21시)",
      "틴 성모 교회의 고딕 쌍탑",
      "얀 후스 기념 동상",
      "시계탑 전망대에서 구시가지 360° 파노라마",
    ],
    nearbyAttractions: ["카를교", "유대인 지구", "화약탑", "체코 국립 갤러리"],
    photoTips: "시계탑 전망대에서 틴 교회 쌍탑과 붉은 지붕이 펼쳐지는 파노라마를 촬영하세요. 해질녘이 가장 아름답습니다.",
    tips: [
      "천문시계는 매시 정각 약 45초간 작동합니다. 5분 전에 자리를 잡으세요.",
      "시계탑 전망대(300 CZK)에 올라가면 구시가지 최고의 뷰를 만끽할 수 있습니다.",
      "12월 크리스마스 마켓 시즌에는 광장이 화려한 장식으로 가득 찹니다.",
      "광장 주변 레스토랑은 관광지 가격이므로 골목 안쪽 식당이 훨씬 저렴합니다.",
    ],
  },
  "czechia/prague/prague/st-vitus-cathedral": {
    heroGradient: "from-indigo-600 to-purple-900",
    description: "프라하 성 내에 자리한 체코 최대의 고딕 대성당. 600년에 걸쳐 완공되었으며, 알폰스 무하의 아르누보 스테인드글라스와 성 바츨라프 예배당의 보석 장식이 특히 유명합니다.",
    history: "1344년 카를 4세의 명으로 프랑스 건축가 마티아스 아라스가 착공했으며, 이후 페트르 파를레르슈가 이어받았습니다. 종교 전쟁과 재정난으로 중단과 재개를 반복하다 1929년에야 최종 완공되었습니다.",
    visitInfo: {
      hours: "월~토 09:00~17:00, 일 12:00~17:00 (동절기 ~16:00)",
      admission: "프라하 성 서킷 B 티켓 포함 (250 CZK)",
      address: "III. nádvoří 48/2, 119 01 Praha 1-Hradčany",
      website: "https://www.katedralasvatehovita.cz",
    },
    highlights: [
      "알폰스 무하의 아르누보 스테인드글라스 (북쪽 3번째 창)",
      "성 바츨라프 예배당 - 1,300개 이상의 반보석으로 장식",
      "대성당 남쪽 탑 전망대 (287계단, 프라하 최고의 뷰)",
      "체코 왕관 보석 보관소 (특별 공개 시에만)",
    ],
    nearbyAttractions: ["구왕궁", "황금 소로", "성 이르지 바실리카", "로브코비츠 궁전"],
    photoTips: "성당 내부의 무하 스테인드글라스는 오전에 햇빛이 들어올 때 가장 아름답습니다. 외부 전경은 성 앞 광장에서 광각으로 담으세요.",
    tips: [
      "무하의 스테인드글라스는 북쪽 3번째 창에 위치합니다. 오전 빛이 가장 좋습니다.",
      "남쪽 탑 전망대(287계단)는 별도 티켓(150 CZK)이지만 프라하 최고의 뷰를 선사합니다.",
      "프라하 성 서킷 B 티켓으로 입장하며, 성당 앞부분은 무료 구역입니다.",
      "미사 시간(일요일 오전)에는 관광 입장이 제한될 수 있습니다.",
    ],
  },
  "czechia/prague/prague/jewish-quarter": {
    heroGradient: "from-stone-600 to-gray-900",
    description: "유럽에서 가장 잘 보존된 유대인 유적지 중 하나인 요제포프. 6개의 역사적 시나고그와 구유대인 묘지가 남아있으며, 수세기에 걸친 프라하 유대인 공동체의 역사를 생생하게 전합니다.",
    history: "10세기부터 유대인 거주지로 형성되었으며, 13세기 유대인 게토로 공식화되었습니다. 1890년대 도시 재개발로 많은 건물이 철거되었으나 시나고그와 묘지는 보존되었습니다. 나치 점령기에는 역설적으로 '멸절된 민족의 박물관'으로 보존되었습니다.",
    visitInfo: {
      hours: "일~금 09:00~18:00 (동절기 ~16:30), 토요일·유대교 공휴일 휴관",
      admission: "통합 티켓 500 CZK (구신 시나고그 포함 시 700 CZK)",
      address: "Josefov, 110 00 Praha 1",
      website: "https://www.jewishmuseum.cz",
    },
    highlights: [
      "구유대인 묘지 - 12,000개의 묘비가 겹겹이 쌓인 독특한 경관",
      "구신 시나고그 - 유럽에서 가장 오래된 현존 시나고그(1270년)",
      "핀카스 시나고그 - 홀로코스트 희생자 77,297명의 이름이 벽에 새겨짐",
      "마이젤 시나고그의 유대 역사 전시",
    ],
    nearbyAttractions: ["구시가 광장", "카를교", "파리 거리(명품 쇼핑)", "루돌피눔 콘서트홀"],
    photoTips: "구유대인 묘지의 겹겹이 쌓인 묘비는 넓은 화각으로 담으면 압도적인 분위기를 전합니다. 내부 촬영은 일부 제한이 있으니 확인하세요.",
    tips: [
      "통합 티켓으로 6곳을 모두 방문할 수 있으며, 최소 2~3시간을 계획하세요.",
      "토요일(안식일)과 유대교 공휴일에는 문을 닫으니 일정 계획 시 주의하세요.",
      "핀카스 시나고그의 벽에 새겨진 희생자 이름은 매우 감동적인 경험입니다.",
      "구신 시나고그는 별도 티켓(700 CZK 통합)이 필요하지만 강력 추천합니다.",
    ],
  },

  // ===== CESKY KRUMLOV =====
  "czechia/bohemia/cesky-krumlov/cesky-krumlov-castle": {
    heroGradient: "from-orange-500 to-rose-800",
    description: "체코에서 프라하 성 다음으로 큰 성 단지. 13세기에 건설이 시작되어 고딕·르네상스·바로크 양식이 혼재합니다. 채색된 르네상스 탑이 마을의 상징이며, 성에서 내려다보는 블타바 강과 붉은 지붕의 마을 전경이 압권입니다.",
    history: "1240년경 비트코프 가문이 처음 건설했으며, 이후 로젠베르크, 에겐베르크, 슈바르첸베르크 가문이 차례로 소유하며 확장했습니다. 바로크 극장(1682년)은 세계에서 가장 잘 보존된 바로크 극장 중 하나입니다.",
    visitInfo: {
      hours: "4~10월 09:00~17:00, 6~8월 ~18:00 (동절기 휴관)",
      admission: "투어 I (내부): 260 CZK / 탑 전망대: 150 CZK / 바로크 극장: 380 CZK",
      address: "Zámek 59, 381 01 Český Krumlov",
      website: "https://www.zamek-ceskykrumlov.cz",
    },
    highlights: [
      "르네상스 탑 전망대에서 마을 전체 파노라마",
      "채색 벽화(스그라피토)가 인상적인 성벽",
      "세계에서 가장 잘 보존된 바로크 극장",
      "클로크(성 다리)에서 바라보는 블타바 강 전경",
    ],
    nearbyAttractions: ["구시가지", "에곤 실레 아트 센터", "수도원 정원", "블타바 강"],
    photoTips: "성탑에서 블타바 강이 S자로 감싸는 마을 전체를 내려다보는 구도가 가장 아이코닉합니다. 오전 빛이 좋습니다.",
    tips: [
      "성탑 전망대(150 CZK)는 체스키 크룸로프 필수 코스입니다.",
      "성 내부 투어(I 또는 II)는 가이드 동반으로만 가능하며 시간이 정해져 있습니다.",
      "바로크 극장은 보존을 위해 연간 관람 인원이 제한되니 사전 확인하세요.",
      "성 해자에서 사육 중인 곰을 볼 수 있습니다 (13세기부터의 전통).",
    ],
  },
  "czechia/bohemia/cesky-krumlov/old-town": {
    heroGradient: "from-rose-400 to-orange-700",
    description: "블타바 강이 감싸 안은 중세 도시 전체가 UNESCO 세계유산. 13~14세기 골목 구조가 그대로 남아있으며, 르네상스·바로크 건축의 알록달록한 건물들이 동화 속 풍경을 연출합니다.",
    history: "13세기 체스키 크룸로프 성 아래에 형성된 마을로, 로젠베르크 가문의 통치 아래 14~16세기에 전성기를 누렸습니다. 근대화의 물결에서 비껴나 중세 거리 구조가 거의 완벽하게 보존되었습니다.",
    visitInfo: {
      hours: "24시간 개방 (상점·레스토랑은 개별 영업시간)",
      admission: "무료 (개별 박물관·갤러리 유료)",
      address: "Vnitřní Město, 381 01 Český Krumlov",
      website: "https://www.ckrumlov.info",
    },
    highlights: [
      "스보르노스티 광장의 페스트 기둥과 르네상스 건물",
      "미로 같은 중세 골목길 산책",
      "블타바 강변 테라스에서 즐기는 식사",
      "에곤 실레 아트 센터의 기획 전시",
    ],
    nearbyAttractions: ["체스키 크룸로프 성", "성 비투스 교회", "블타바 강 래프팅", "수도원 정원"],
    photoTips: "성 위에서 내려다보는 구시가지 전경이 가장 유명하지만, 강변 산책로에서 올려다보는 성과 마을 풍경도 훌륭합니다.",
    tips: [
      "1박 이상 머물면 아침·저녁의 고즈넉한 분위기를 온전히 즐길 수 있습니다.",
      "여름에는 블타바 강 래프팅·카누 체험이 인기입니다.",
      "골목 안쪽의 작은 레스토랑과 카페가 광장보다 분위기 있고 저렴합니다.",
      "12월에는 크리스마스 마켓이 열려 중세 마을에 더욱 동화 같은 분위기를 더합니다.",
    ],
  },

  // ===== KARLOVY VARY =====
  "czechia/bohemia/karlovy-vary/hot-springs-colonnade": {
    heroGradient: "from-amber-400 to-teal-700",
    description: "카를로비 바리의 핵심인 온천 콜로나데 지구. 72°C의 뜨거운 온천수가 12m 높이로 솟아오르는 브르지들로 간헐천을 중심으로, 밀 콜로나데·마켓 콜로나데 등 5개의 회랑에서 다양한 온도의 온천수를 마실 수 있습니다.",
    history: "전설에 따르면 카를 4세가 사냥 중 뜨거운 온천을 발견하여 도시가 시작되었습니다. 18~19세기에 유럽 왕족·귀족의 요양지로 전성기를 누렸으며, 베토벤, 괴테, 카프카 등이 이곳을 찾았습니다.",
    visitInfo: {
      hours: "콜로나데: 24시간 개방 / 브르지들로 홀: 매일 06:00~19:00",
      admission: "무료 (온천컵 별도 구매 50~200 CZK)",
      address: "Divadelní nám. 2036/2, 360 01 Karlovy Vary",
      website: "https://www.karlovyvary.cz",
    },
    highlights: [
      "브르지들로 간헐천 - 72°C 온천수가 12m 높이로 분출",
      "밀 콜로나데 - 124개 코린트식 기둥의 우아한 회랑",
      "마켓 콜로나데 - 스위스 양식의 흰색 목조 회랑",
      "각 콜로나데별 온도가 다른 온천수 음미 체험",
    ],
    nearbyAttractions: ["디아나 전망대", "모세르 유리 박물관", "그랜드호텔 풀", "베헤로프카 박물관"],
    photoTips: "밀 콜로나데의 기둥 사이로 보이는 원근감 있는 구도가 인상적입니다. 브르지들로 간헐천의 수증기는 겨울에 더욱 극적입니다.",
    tips: [
      "전용 온천컵(라젠스키 포하르)을 기념품 가게에서 구입하세요 (50~200 CZK).",
      "온천수는 30~72°C까지 다양하니 낮은 온도부터 시작해 보세요.",
      "브르지들로 간헐천(72°C)의 물은 매우 뜨거우니 주의하세요.",
      "5개 콜로나데를 모두 걸어서 둘러보는 데 약 1~2시간이면 충분합니다.",
    ],
  },

  // ===== KUTNA HORA =====
  "czechia/prague/kutna-hora/sedlec-ossuary": {
    heroGradient: "from-gray-600 to-slate-900",
    description: "약 4만 구의 인골로 내부를 장식한 세계에서 가장 독특한 교회. 해골로 만든 샹들리에, 문장, 십자가 등이 경외심과 함께 삶과 죽음에 대한 깊은 묵상을 불러일으킵니다.",
    history: "1278년 세들레츠 수도원 원장이 예루살렘에서 가져온 성지의 흙을 뿌린 후 이곳은 유럽 전역에서 인기 있는 매장지가 되었습니다. 14세기 흑사병과 후스 전쟁으로 유골이 급증했고, 1870년 목각가 프란티셰크 린트가 현재의 뼈 장식을 완성했습니다.",
    visitInfo: {
      hours: "4~9월 09:00~18:00, 10~3월 09:00~17:00 (월 10:00~)",
      admission: "성인 160 CZK / 통합 티켓(+성 바르바라 대성당) 300 CZK",
      address: "Zámecká 127, 284 03 Kutná Hora-Sedlec",
      website: "https://www.sedlec.info",
    },
    highlights: [
      "인골로 만든 거대한 샹들리에 (인체의 모든 뼈가 사용됨)",
      "슈바르첸베르크 가문 문장을 인골로 재현한 작품",
      "피라미드 형태로 쌓인 유골 더미 4개",
      "뼈로 장식된 십자가와 성배",
    ],
    nearbyAttractions: ["세들레츠 성모 승천 대성당", "성 바르바라 대성당", "이탈리안 궁정"],
    photoTips: "2020년부터 내부 사진 촬영이 허용되었습니다. 샹들리에를 아래에서 올려다보는 구도가 가장 인상적입니다.",
    tips: [
      "기차역에서 도보 10분으로 접근이 편리합니다. 구시가지보다 먼저 방문하세요.",
      "통합 티켓(300 CZK)으로 성 바르바라 대성당까지 함께 보는 것이 저렴합니다.",
      "내부가 좁아 성수기에는 대기 시간이 길 수 있으니 오전 일찍 방문 추천.",
      "옆에 위치한 세들레츠 성모 승천 대성당(바로크 고딕)도 함께 둘러보세요.",
    ],
  },

  // ===== BRNO =====
  "czechia/moravia/brno/spilberk-castle": {
    heroGradient: "from-violet-600 to-indigo-900",
    description: "브르노 시내를 내려다보는 언덕 위의 13세기 성채. 체코 왕의 거처에서 합스부르크 제국의 악명 높은 감옥으로, 그리고 현재의 브르노 시립 박물관으로 변모한 파란만장한 역사를 간직하고 있습니다.",
    history: "1270년경 보헤미아 왕 오타카르 2세에 의해 건설되었습니다. 17~18세기에는 합스부르크 제국에서 가장 가혹한 감옥으로 악명을 떨쳤으며, '유럽의 민족들의 감옥'이라 불렸습니다. 현재는 브르노시 박물관으로 사용되고 있습니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00 (동절기 ~17:00), 월요일 휴관",
      admission: "상설전시 150 CZK / 감옥투어(카세마트) 120 CZK / 전망탑 70 CZK",
      address: "Špilberk 210/1, 662 24 Brno-střed",
      website: "https://www.spilberk.cz",
    },
    highlights: [
      "카세마트(지하 감옥) 투어 - 합스부르크 시대 감옥의 참혹한 역사",
      "성 전망대에서 브르노 시내 360° 파노라마",
      "브르노 시립 박물관 상설전시",
      "여름 야외 콘서트와 문화 이벤트",
    ],
    nearbyAttractions: ["자유 광장", "성 베드로와 바오로 대성당", "채소 시장", "구시청사"],
    photoTips: "성 전망대에서 성 베드로와 바오로 대성당의 쌍탑과 브르노 시가지를 한 프레임에 담을 수 있습니다.",
    tips: [
      "카세마트(지하 감옥) 투어는 가이드 동반으로만 가능하니 시간을 확인하세요.",
      "성 주변 공원은 무료이며 산책과 피크닉에 좋습니다.",
      "여름 저녁에는 성 안뜰에서 야외 영화 상영과 콘서트가 열립니다.",
      "도보로 시내에서 15분, 언덕길이지만 경치가 좋아 걸어 올라가는 것을 추천합니다.",
    ],
  },
  "czechia/moravia/brno/cathedral-of-st-peter-and-paul": {
    heroGradient: "from-rose-500 to-purple-800",
    description: "페트로프 언덕 위에 우뚝 선 브르노의 상징. 11세기에 기원하여 여러 차례 재건된 후 현재의 네오고딕 양식(20세기 초)이 되었습니다. 84m 높이의 쌍탑은 브르노 어디에서나 보입니다.",
    history: "11~12세기 로마네스크 교회로 시작되어 고딕, 바로크를 거쳐 1904~1909년 네오고딕으로 재건되었습니다. 30년 전쟁 중 스웨덴군 포위 때 종지기가 11시에 12번 종을 울려 적을 속인 전설이 전해집니다.",
    visitInfo: {
      hours: "월~토 08:15~18:30, 일 07:00~18:30 / 탑: 4~10월 10:00~18:30",
      admission: "성당 무료 / 지하 묘지 60 CZK / 탑 전망대 70 CZK",
      address: "Petrov 9, 602 00 Brno-střed",
      website: "https://www.katedrala-petrov.cz",
    },
    highlights: [
      "84m 높이의 네오고딕 쌍탑",
      "매일 11시에 12번 울리는 종 (30년 전쟁 전설)",
      "탑 전망대에서 브르노 시내와 모라비아 평원 조망",
      "지하 묘지(크립트)의 역사적 유해",
    ],
    nearbyAttractions: ["데니스 정원", "슈필베르크 성", "자유 광장", "채소 시장"],
    photoTips: "데니스 정원(Denisovy sady)에서 대성당 쌍탑의 옆모습을 담을 수 있으며, 야간 조명 때 특히 아름답습니다.",
    tips: [
      "매일 11시에 12번 종이 울립니다. 정각에 맞춰 방문해 보세요.",
      "탑 전망대(70 CZK)에서 브르노 시내 전경을 한눈에 볼 수 있습니다.",
      "성당은 무료이지만 미사 시간에는 관광 입장이 제한될 수 있습니다.",
      "페트로프 언덕 자체가 좋은 전망 포인트이니 주변도 산책해 보세요.",
    ],
  },

  // ===== PLZEN =====
  "czechia/bohemia/plzen/pilsner-urquell-brewery": {
    heroGradient: "from-yellow-500 to-amber-900",
    description: "1842년 세계 최초의 필스너 라거가 탄생한 전설적인 양조장. 바이에른 양조사 요제프 그롤이 혁신적인 하면발효 기법으로 만든 황금빛 맥주가 전 세계 라거의 원형이 되었습니다.",
    history: "1839년 플젠 시민들이 기존 맥주의 품질에 불만을 품고 시민 양조장을 설립, 바이에른에서 요제프 그롤을 초빙했습니다. 1842년 10월 5일, 그롤이 양조한 최초의 필스너가 세상에 공개되어 맥주 역사를 바꾸었습니다.",
    visitInfo: {
      hours: "매일 투어 운영: 영어 투어 10:00, 12:30, 14:15, 16:15 (시즌별 상이)",
      admission: "성인 350 CZK (시음 포함)",
      address: "U Prazdroje 64/7, 304 97 Plzeň 3",
      website: "https://www.prazdrojvisit.cz",
    },
    highlights: [
      "9km에 달하는 지하 저장고(라거 켈러)에서 비살균 생맥주 시음",
      "구리 양조 가마가 줄지어 선 역사적 양조 홀",
      "현대 양조 시설과 맥주 제조 과정 견학",
      "기프트숍에서 한정판 필스너 우르켈 굿즈 구매",
    ],
    nearbyAttractions: ["공화국 광장", "성 바르톨로메오 대성당", "플젠 지하 터널", "양조 박물관"],
    photoTips: "구리 양조 가마가 줄지어 선 양조 홀이 가장 포토제닉합니다. 지하 저장고에서의 시음 장면도 기억에 남는 사진이 됩니다.",
    tips: [
      "영어 투어는 하루 수 회, 온라인 사전 예약(prazdrojvisit.cz)을 강력 추천합니다.",
      "지하 저장고의 비살균(네필트로바네) 맥주는 이곳에서만 맛볼 수 있는 특별한 경험입니다.",
      "투어 소요 시간은 약 100분이며, 마지막에 맥주 시음이 포함됩니다.",
      "근처 '나 스피이체' 레스토랑에서 탱크 직송 필스너 우르켈을 즐길 수 있습니다.",
    ],
  },

  // ===== OLOMOUC =====
  "czechia/moravia/olomouc/holy-trinity-column": {
    heroGradient: "from-emerald-500 to-teal-900",
    description: "호르니 광장 중앙에 우뚝 선 높이 35m의 바로크 기념물. 중앙유럽 최대 규모의 바로크 조각 기둥으로, 삼위일체와 성인들의 조각이 정교하게 장식되어 있으며 2000년 UNESCO 세계유산에 등재되었습니다.",
    history: "1716~1754년 약 38년에 걸쳐 건설되었으며, 1716년 흑사병 종식을 감사하며 봉헌되었습니다. 1754년 마리아 테레지아 여제가 직접 방문하여 축성하였고, 내부 소예배당에서는 실제 미사가 거행되었습니다.",
    visitInfo: {
      hours: "외부: 24시간 개방 / 내부 예배당: 특별 공개 시에만",
      admission: "무료",
      address: "Horní nám., 779 00 Olomouc",
      website: "https://www.olomouc.eu",
    },
    highlights: [
      "높이 35m의 중앙유럽 최대 바로크 기둥",
      "18개의 성인 조각상과 정교한 부조",
      "기둥 내부의 소예배당 (특별 공개 시)",
      "야간 조명으로 빛나는 기둥의 장엄한 모습",
    ],
    nearbyAttractions: ["호르니 광장 천문시계", "시청사 전망대", "바로크 분수들", "성 바츨라프 대성당"],
    photoTips: "광장 코너에서 대각선으로 기둥 전체를 담거나, 가까이에서 올려다보며 디테일을 촬영하세요. 야간 조명 때 가장 극적입니다.",
    tips: [
      "호르니 광장 중앙에 위치하여 접근이 매우 편리합니다.",
      "광장 주변 카페 테라스에서 기둥을 감상하며 여유롭게 즐기세요.",
      "올로모우츠 천문시계도 같은 광장에 있으니 함께 관람하세요.",
      "내부 예배당은 매년 9월 문화유산의 날 등 특별 행사 시에만 공개됩니다.",
    ],
  },
};
