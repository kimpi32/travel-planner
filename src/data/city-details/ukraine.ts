import type { CityDetail, AttractionDetail } from "../city-details";

export const ukraineCityDetails: Record<string, CityDetail> = {
  // ===== KYIV =====
  "ukraine/kyiv/kyiv": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "드니프로 강변에 위치한 1,500년 역사의 우크라이나 수도. 황금빛 돔의 정교회 성당, 유네스코 세계유산인 성 소피아 대성당과 키이우-페체르스크 수도원, 그리고 독립을 상징하는 마이단 광장이 깊은 역사적 서사를 품고 있습니다.",
    bestTime: "5~6월, 9월 (밤나무 꽃이 피는 5월이 최고)",
    stayArea: "흐레샤티크 거리 주변 또는 포딜 지구",
    transport: "지하철 / 마슈루트카 (미니버스) / 트램",
    districts: [
      { name: "페체르스크", nameEn: "Pechersk", description: "키이우-페체르스크 수도원과 조국의 어머니 동상이 있는 역사적 언덕 지구.", highlights: ["키이우-페체르스크 수도원", "조국의 어머니 동상", "제2차 세계대전 박물관", "드니프로 강 전망"] },
      { name: "구시가지", nameEn: "Old Town", description: "성 소피아 대성당, 성 미하일 수도원, 안드리이우스키 우즈비즈 거리가 있는 역사의 중심.", highlights: ["성 소피아 대성당", "성 미하일 수도원", "안드리이우스키 우즈비즈", "황금 문"] },
      { name: "포딜", nameEn: "Podil", description: "드니프로 강 하류의 역사적 상업 지구. 현재는 트렌디한 카페와 레스토랑, 갤러리가 밀집.", highlights: ["콘트랙토바 광장", "키릴 문자 공원", "힙스터 카페 거리", "강변 산책로"] },
    ],
    attractions: [
      { name: "성 소피아 대성당", nameEn: "St. Sophia's Cathedral", description: "1037년 야로슬라프 현명공이 건립한 유네스코 세계유산. 11세기 비잔틴 모자이크와 프레스코화가 원형 그대로 보존되어 있습니다.", category: "종교", tip: "종탑에 올라가면 성 미하일 수도원과 키이우 스카이라인이 한눈에 보입니다." },
      { name: "키이우-페체르스크 수도원", nameEn: "Kyiv-Pechersk Lavra", description: "1051년 설립된 동방정교회 수도원으로 유네스코 세계유산. 지하 동굴에 미라화된 수도사들의 유해가 안치되어 있습니다.", category: "종교", tip: "지하 동굴 관람 시 양초를 들고 입장하며, 반바지/민소매 착용 금지입니다." },
      { name: "마이단 광장", nameEn: "Maidan Nezalezhnosti", description: "우크라이나 독립과 오렌지 혁명, 유로마이단 혁명의 무대였던 독립 광장. 우크라이나 현대사의 상징입니다.", category: "광장" },
      { name: "안드리이우스키 우즈비즈", nameEn: "Andriyivskyy Descent", description: "키이우의 몽마르트로 불리는 가파른 골목길. 갤러리, 공예품 상점, 카페가 늘어서 있으며 성 안드리이 교회가 정상에 위치합니다.", category: "거리", tip: "언덕 위 성 안드리이 교회에서 시작해 아래로 내려가며 구경하세요." },
      { name: "조국의 어머니 동상", nameEn: "Motherland Monument", description: "높이 62m의 거대한 스테인리스 스틸 동상. 제2차 세계대전 박물관 위에 서 있으며 전망대에서 키이우 전경을 볼 수 있습니다.", category: "기념물" },
    ],
    dayTrips: [
      { name: "체르노빌 투어", nameEn: "Chernobyl Tour", description: "1986년 원전 사고 현장과 유령 도시 프리피야트를 방문하는 당일 투어. 공인 가이드 동행 필수.", travelTime: "버스 약 2시간", gradient: "from-gray-500 to-gray-800" },
      { name: "피로고보 야외 민속 박물관", nameEn: "Pyrohiv Folk Museum", description: "우크라이나 전통 마을을 재현한 야외 박물관. 지역별 전통 가옥과 생활 문화를 체험할 수 있습니다.", travelTime: "버스 약 40분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "보르시", description: "비트 기반의 우크라이나 전통 수프. 사워크림과 팜푸시키(마늘빵)를 곁들입니다.", emoji: "🍲" },
      { name: "바레니키", description: "감자, 체리, 코티지 치즈 등을 넣은 우크라이나 전통 만두.", emoji: "🥟" },
      { name: "치킨 키이우", description: "버터를 감싼 닭가슴살 커틀릿. 키이우에서 유래된 세계적으로 유명한 요리.", emoji: "🍗" },
      { name: "살로", description: "소금에 절인 돼지비계. 흑빵과 마늘을 곁들여 먹는 전통 음식.", emoji: "🥩" },
    ],
    tips: [
      "여행 전 외교부 우크라이나 여행 경보를 반드시 확인하세요.",
      "키이우 지하철은 세계에서 가장 깊은 역(아르세날나, 지하 105.5m)이 있습니다.",
      "성 소피아 대성당과 페체르스크 수도원은 각각 반나절 이상 소요됩니다.",
      "우크라이나 흐리브냐는 현지에서 ATM 인출이 가장 편리합니다.",
      "안드리이우스키 우즈비즈에서 수공예 기념품을 구입할 수 있습니다.",
    ],
  },
  // ===== LVIV =====
  "ukraine/lviv/lviv": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "우크라이나 서부의 문화 수도이자 유네스코 세계유산 구시가지를 품은 도시. 오스트리아-헝가리 제국의 영향을 받은 르네상스, 바로크, 아르누보 건축이 혼재하며, 유럽 최고 수준의 커피 문화로 유명합니다.",
    bestTime: "5~9월 (12월 크리스마스 마켓도 매력적)",
    stayArea: "리노크 광장 주변 구시가지",
    transport: "트램 / 도보 (구시가지 대부분 도보 가능)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "유네스코 세계유산으로 지정된 역사 지구. 리노크 광장을 중심으로 르네상스·바로크 건축물이 밀집.", highlights: ["리노크 광장", "시청 전망대", "아르메니아 거리", "도미니코 교회"] },
      { name: "성 유르 언덕", nameEn: "St. George's Hill", description: "구시가지 서쪽 언덕에 위치한 그리스 가톨릭 대성당과 정원 지구.", highlights: ["성 유르 대성당", "리비우 전경", "정원 산책"] },
    ],
    attractions: [
      { name: "리노크 광장", nameEn: "Rynok Square", description: "리비우 구시가지의 심장부. 르네상스 양식의 시청이 중앙에 서 있고, 주변에 역사적 저택과 카페가 늘어서 있습니다.", category: "광장", tip: "시청 전망대(65m)에서 리비우 구시가지 전경을 한눈에 볼 수 있습니다." },
      { name: "리비우 오페라 하우스", nameEn: "Lviv Opera House", description: "1900년 개관한 네오르네상스·네오바로크 양식의 극장. 유럽에서 가장 아름다운 오페라 하우스 중 하나로 꼽힙니다.", category: "공연장", tip: "공연 티켓이 매우 저렴하므로 오페라나 발레를 감상해보세요." },
      { name: "성 유르 대성당", nameEn: "St. George's Cathedral", description: "18세기 로코코 양식의 그리스 가톨릭 대성당. 황금빛 파사드와 조각이 인상적이며 리비우의 상징 중 하나입니다.", category: "종교" },
      { name: "리비우 커피 마인", nameEn: "Lviv Coffee Mining Manufacture", description: "커피를 '채굴'하는 컨셉의 독특한 카페. 지하 광산 테마로 꾸며져 있으며 리비우 커피 문화를 대표합니다.", category: "카페", tip: "지하로 내려가면 실제 광산처럼 꾸며진 공간에서 커피를 즐길 수 있습니다." },
      { name: "고르코 포르코 약국", nameEn: "Masoch Cafe / Lviv themed cafes", description: "리비우는 테마 레스토랑·카페의 도시로 무기고, 약국, 감옥 등 다양한 콘셉트의 장소가 있습니다.", category: "카페" },
    ],
    dayTrips: [
      { name: "올레스코 성", nameEn: "Olesko Castle", description: "17세기 바로크 양식의 성으로 리비우 미술관의 분관이 있습니다.", travelTime: "버스 약 1.5시간", gradient: "from-slate-500 to-slate-800" },
    ],
    localFood: [
      { name: "리비우 초콜릿", description: "리비우 핸드메이드 초콜릿 공방은 도시 곳곳에 있으며 직접 만들기 체험도 가능합니다.", emoji: "🍫" },
      { name: "리비우 커피", description: "오스트리아-헝가리 전통의 커피 문화. 다양한 테마 카페에서 즐기세요.", emoji: "☕" },
      { name: "시르니키", description: "코티지 치즈로 만든 팬케이크. 사워크림과 잼을 곁들입니다.", emoji: "🥞" },
    ],
    tips: [
      "여행 전 외교부 우크라이나 여행 경보를 반드시 확인하세요.",
      "리비우는 테마 카페·레스토랑의 도시입니다. 커피 마인, 크라이브카(지하 비밀 바), 가솔린 펍 등을 체험해보세요.",
      "리비우 시청 전망대(65m)는 리비우 전경을 보는 최고의 장소입니다.",
      "폴란드 크라쿠프에서 버스로 약 3~4시간으로 연계 여행이 가능합니다.",
      "리비우의 물가는 서유럽의 1/3~1/4 수준으로 매우 저렴합니다.",
      "12월에는 리노크 광장에서 크리스마스 마켓이 열립니다.",
    ],
  },
};

export const ukraineAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ST. SOPHIA'S CATHEDRAL =====
  "ukraine/kyiv/kyiv/st-sophias-cathedral": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "1037년 야로슬라프 현명공이 비잔틴 제국에서 승리한 것을 기념하여 건립한 키이우 최고의 역사적 건축물. 11세기 비잔틴 모자이크와 프레스코화가 거의 원형 그대로 보존되어 있으며, 동유럽 정교회 건축의 최고 걸작으로 평가됩니다.",
    history: "1037년 건립되어 키이우 루스의 종교적·정치적 중심지 역할을 했습니다. 1934년 박물관으로 전환되었으며, 1990년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: { hours: "10:00~18:00 (수~일) / 월·화 휴관", admission: "300 UAH (약 $8)", address: "Volodymyrska St, 24, Kyiv 01001", website: "https://st-sophia.org.ua" },
    highlights: ["11세기 비잔틴 모자이크 <성모 오란타>", "800m2에 달하는 원본 프레스코화", "76m 종탑 전망대", "야로슬라프 현명공의 석관"],
    nearbyAttractions: ["성 미하일 황금 돔 수도원", "안드리이우스키 우즈비즈", "황금 문", "마이단 광장"],
    photoTips: "정문에서 바라본 대성당 전경과 종탑 위에서 내려다보는 키이우 파노라마가 최고의 촬영 포인트입니다.",
    tips: [
      "내부 모자이크와 프레스코화가 핵심이므로 충분한 관람 시간(약 1.5시간)을 잡으세요.",
      "종탑 전망대는 별도 티켓이 필요하며, 성 미하일 수도원의 파란 돔이 한눈에 보입니다.",
      "오디오 가이드(영어)를 대여하면 11세기 역사를 더 깊이 이해할 수 있습니다.",
    ],
  },
  // ===== KYIV-PECHERSK LAVRA =====
  "ukraine/kyiv/kyiv/kyiv-pechersk-lavra": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "1051년 설립된 동방정교회 최고의 수도원 중 하나. 언덕 위에 황금빛 돔의 성당과 종탑이 늘어서 있으며, 지하 동굴에는 미라화된 수도사들의 유해가 안치되어 있습니다. 상부 수도원과 하부 수도원으로 나뉘어 있습니다.",
    history: "1051년 두 수도사(안토니와 테오도시우스)가 동굴에서 수행을 시작한 것이 기원입니다. 1990년 유네스코 세계유산에 등재되었으며, 우크라이나 정교회의 영적 중심지입니다.",
    visitInfo: { hours: "09:00~19:00 (4~10월) / 09:00~17:00 (11~3월)", admission: "상부 수도원 무료 / 동굴·박물관 유료", address: "Lavrska St, 15, Kyiv 01015", website: "https://lavra.ua" },
    highlights: ["지하 동굴의 미라화된 수도사 유해", "대종탑(96.5m) 전망대", "우스펜스키 대성당 (재건)", "보석 박물관", "미니어처 박물관 (쌀알 위 초상화)"],
    nearbyAttractions: ["조국의 어머니 동상", "제2차 세계대전 박물관", "식물원", "드니프로 강 전경"],
    photoTips: "대종탑에서 내려다보는 황금빛 돔의 파노라마와 드니프로 강 전경이 압권입니다.",
    tips: [
      "지하 동굴은 좁고 어두우며 양초를 들고 입장합니다. 폐소공포증이 있으면 주의하세요.",
      "반바지, 민소매 착용 금지이며 여성은 머리를 가려야 합니다 (스카프 대여 가능).",
      "상부 수도원(박물관 구역)과 하부 수도원(종교 시설)을 모두 방문하면 3~4시간 소요됩니다.",
      "대종탑 전망대에서 드니프로 강과 키이우 좌안 전경이 한눈에 보입니다.",
    ],
  },
  // ===== RYNOK SQUARE =====
  "ukraine/lviv/lviv/rynok-square": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "14세기에 조성된 리비우 구시가지의 중심 광장으로 유네스코 세계유산의 핵심입니다. 르네상스 양식의 시청이 광장 중앙에 서 있고, 사방으로 역사적 저택(카미아니차)들이 늘어서 있습니다. 각 건물마다 고유한 역사와 건축 양식을 갖고 있어 야외 건축 박물관이라 불립니다.",
    history: "1356년 폴란드 왕 카지미에시 대왕이 도시에 마그데부르크 권리를 부여하면서 광장이 조성되었습니다. 이후 르네상스, 바로크, 로코코 양식의 건물들이 들어서며 현재의 모습을 갖추었습니다.",
    visitInfo: { hours: "24시간 (야외 광장) / 시청 전망대 10:00~19:00", admission: "광장 무료 / 시청 전망대 150 UAH", address: "Rynok Square, Lviv 79008" },
    highlights: ["시청 전망대(65m)에서 360도 파노라마", "코르냑트 저택 (르네상스 정원)", "검은 저택 (검은 석재 파사드)", "4개의 분수 조각상 (넵튠, 다이아나, 아도니스, 앰피트리테)"],
    nearbyAttractions: ["리비우 오페라 하우스", "아르메니아 거리", "도미니코 교회", "약국 박물관"],
    photoTips: "시청 전망대에서 내려다보는 광장 전경과 교회 탑들의 스카이라인이 최고의 앵글입니다.",
    tips: [
      "시청 전망대(65m)는 좁은 나선형 계단을 올라야 하므로 체력을 준비하세요.",
      "광장 주변 테마 카페(커피 마인, 크라이브카 등)는 리비우 필수 체험입니다.",
      "광장의 각 건물에는 번호와 역사 안내판이 있으니 천천히 둘러보세요.",
    ],
  },
};
