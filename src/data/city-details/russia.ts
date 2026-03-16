import type { CityDetail, AttractionDetail } from "../city-details";

export const russiaCityDetails: Record<string, CityDetail> = {
  // ===== MOSCOW =====
  "russia/moscow/moscow": {
    heroGradient: "from-red-700 to-red-900",
    description: "러시아의 수도이자 정치, 문화, 경제의 중심지. 붉은 광장과 성 바실리 대성당의 화려한 양파 돔, 크렘린 궁전의 웅장함, 세계에서 가장 아름다운 지하철역까지 - 러시아의 과거와 현재가 공존하는 거대 도시입니다.",
    bestTime: "6~9월 (겨울 12~2월도 설경이 아름다움)",
    stayArea: "트베르스카야 거리 주변 또는 키타이고로드",
    transport: "지하철 (메트로) / 버스 / 트램",
    districts: [
      { name: "크렘린 & 붉은 광장", nameEn: "Kremlin & Red Square", description: "러시아 권력의 심장부. 크렘린 성벽 안의 궁전과 성당, 붉은 광장의 성 바실리 대성당과 굼 백화점이 위치.", highlights: ["붉은 광장", "성 바실리 대성당", "크렘린 궁전", "레닌 묘"] },
      { name: "아르바트 거리", nameEn: "Arbat Street", description: "모스크바에서 가장 오래된 보행자 전용 거리로 거리 예술가, 카페, 기념품 상점이 밀집.", highlights: ["아르바트 거리", "푸시킨 동상", "스트리트 뮤지션", "기념품 상점"] },
      { name: "트베르스카야", nameEn: "Tverskaya", description: "모스크바의 메인 스트리트로 고급 호텔, 레스토랑, 극장이 늘어선 번화가.", highlights: ["볼쇼이 극장", "푸시킨 광장", "엘리세예프 식품점", "모스크바 시청"] },
    ],
    attractions: [
      { name: "붉은 광장", nameEn: "Red Square", description: "러시아 역사의 무대이자 세계에서 가장 유명한 광장 중 하나. 성 바실리 대성당, 굼 백화점, 레닌 묘가 둘러싸고 있습니다.", category: "광장", tip: "야간에 조명이 켜진 성 바실리 대성당이 가장 아름답습니다." },
      { name: "크렘린 궁전", nameEn: "Moscow Kremlin", description: "러시아 대통령 관저이자 중세 성채. 무기고, 다이아몬드 기금, 우스펜스키 대성당 등 다양한 볼거리가 있습니다.", category: "역사", tip: "크렘린 내부 입장은 온라인 사전 예매를 추천합니다." },
      { name: "성 바실리 대성당", nameEn: "St. Basil's Cathedral", description: "1555~1561년 이반 뇌제의 명으로 건축된 러시아를 상징하는 건축물. 9개의 다채로운 양파 돔이 특징입니다.", category: "종교", tip: "내부도 관람 가능하며, 각 예배당의 프레스코화가 인상적입니다." },
      { name: "볼쇼이 극장", nameEn: "Bolshoi Theatre", description: "세계 최고 수준의 발레와 오페라를 공연하는 러시아의 상징적 극장. 1776년 설립.", category: "공연장", tip: "공연 티켓은 수개월 전에 매진되므로 일찍 예매하세요." },
      { name: "모스크바 지하철", nameEn: "Moscow Metro", description: "세계에서 가장 아름다운 지하철 시스템. 마야콥스카야, 콤소몰스카야 등의 역은 궁전 같은 장식으로 유명합니다.", category: "건축", tip: "지하철 역 투어는 무료이며 약 2~3시간이면 주요 역을 돌아볼 수 있습니다." },
    ],
    dayTrips: [
      { name: "세르기예프 포사드", nameEn: "Sergiev Posad", description: "러시아 정교회의 영적 중심지. 트로이체-세르기예프 수도원이 유네스코 세계유산.", travelTime: "기차 약 1.5시간", gradient: "from-blue-500 to-indigo-800" },
      { name: "콜로멘스코예", nameEn: "Kolomenskoye", description: "모스크바 남부의 옛 차르 여름 별장. 유네스코 세계유산인 예수 승천 교회가 있는 공원.", travelTime: "지하철 약 30분", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "보르시", description: "비트를 기반으로 한 전통 수프. 사워크림을 곁들여 먹습니다.", emoji: "🍲" },
      { name: "블리니", description: "러시아식 팬케이크. 캐비어, 훈제연어, 사워크림 등과 함께 즐깁니다.", emoji: "🥞" },
      { name: "펠메니", description: "고기 속을 넣은 러시아식 만두. 버터와 사워크림을 곁들입니다.", emoji: "🥟" },
      { name: "비프 스트로가노프", description: "소고기를 사워크림 소스에 조린 러시아 대표 요리.", emoji: "🥩" },
    ],
    tips: [
      "러시아 여행 전 외교부 여행 경보 및 최신 비자 요건을 반드시 확인하세요.",
      "모스크바 지하철은 역 이름이 키릴 문자로만 표기되므로 알파벳 대조표를 준비하세요.",
      "크렘린 무기고와 다이아몬드 기금은 별도 티켓이 필요합니다.",
      "겨울(-20도 이하)에는 방한 장비를 철저히 준비하세요. 실내는 난방이 매우 잘 되어 있습니다.",
      "모스크바-상트페테르부르크 구간은 고속철도 사프산(약 4시간)이 가장 편리합니다.",
    ],
  },
  // ===== SAINT PETERSBURG =====
  "russia/saint-petersburg/saint-petersburg": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "표트르 대제가 '유럽을 향한 창'으로 건설한 제국 도시. 네바 강 삼각주에 세워진 도시 전체가 유네스코 세계유산이며, 에르미타주 미술관, 겨울 궁전, 백야 현상으로 유명한 '북방의 베니스'입니다.",
    bestTime: "6~8월 (6월 백야 기간이 최고)",
    stayArea: "넵스키 대로 주변 또는 바실리예프스키 섬",
    transport: "지하철 / 트롤리버스 / 수상 택시",
    districts: [
      { name: "넵스키 대로", nameEn: "Nevsky Prospect", description: "상트페테르부르크의 메인 스트리트로 4.5km에 걸쳐 궁전, 교회, 극장, 카페가 늘어서 있습니다.", highlights: ["카잔 대성당", "싱어 하우스", "고스티니 드보르", "아니치코프 다리"] },
      { name: "궁전 광장", nameEn: "Palace Square", description: "겨울 궁전(에르미타주)이 위치한 대광장. 알렉산드르 기둥이 중심에 서 있습니다.", highlights: ["겨울 궁전", "에르미타주 미술관", "알렉산드르 기둥", "일반참모본부"] },
      { name: "페트로그라드 지구", nameEn: "Petrogradsky", description: "표트르-파블로프스크 요새와 모스크가 있는 역사적 지구.", highlights: ["표트르-파블로프스크 요새", "모스크", "식물원", "오로라 순양함"] },
    ],
    attractions: [
      { name: "에르미타주 미술관", nameEn: "Hermitage Museum", description: "세계 3대 박물관 중 하나로 300만 점 이상의 소장품을 보유. 겨울 궁전을 포함한 6개 건물로 구성되어 있습니다.", category: "미술관", tip: "하루에 다 볼 수 없으므로 관심 분야를 미리 정해 동선을 계획하세요." },
      { name: "표트르호프 궁전", nameEn: "Peterhof Palace", description: "표트르 대제가 베르사유를 본떠 만든 '분수의 궁전'. 150개 이상의 분수와 금박 조각상이 장관입니다.", category: "궁전", tip: "수중 페리를 타고 가면 핀란드 만의 경치도 함께 즐길 수 있습니다." },
      { name: "성 이삭 대성당", nameEn: "St. Isaac's Cathedral", description: "세계에서 가장 큰 정교회 성당 중 하나. 황금 돔 전망대에서 도시 전경을 조망할 수 있습니다.", category: "종교", tip: "돔 전망대(콜로네이드)는 별도 입장권이 필요하며 362개 계단을 올라야 합니다." },
      { name: "피의 구세주 성당", nameEn: "Church of the Savior on Spilled Blood", description: "알렉산드르 2세 암살 현장에 세워진 러시아 양식의 화려한 성당. 7,500m2의 모자이크로 내부가 장식되어 있습니다.", category: "종교" },
      { name: "마린스키 극장", nameEn: "Mariinsky Theatre", description: "차이콥스키의 백조의 호수가 초연된 세계적 발레·오페라 극장.", category: "공연장", tip: "공연 티켓은 공식 사이트에서 미리 예매하세요." },
    ],
    dayTrips: [
      { name: "표트르호프", nameEn: "Peterhof", description: "러시아의 베르사유. 분수 시즌(5~10월)에 방문하면 150개 이상의 분수가 가동됩니다.", travelTime: "수중 페리 약 30분 / 버스 약 1시간", gradient: "from-amber-400 to-yellow-700" },
      { name: "차르스코예 셀로", nameEn: "Tsarskoye Selo", description: "예카테리나 궁전과 호박방으로 유명한 제정 러시아의 여름 별궁.", travelTime: "기차 약 30분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "피로시키", description: "고기, 양배추, 감자 등을 넣은 러시아 전통 구운 만두빵.", emoji: "🥐" },
      { name: "샤슬릭", description: "러시아식 꼬치 바비큐. 양고기나 돼지고기를 숯불에 구워 먹습니다.", emoji: "🍢" },
      { name: "크바스", description: "호밀빵을 발효시켜 만든 전통 음료. 약간의 알코올이 있습니다.", emoji: "🍺" },
    ],
    tips: [
      "에르미타주 미술관은 온라인 사전 예매로 긴 줄을 피하세요. 매주 목요일 야간 개관합니다.",
      "6월 백야 기간에는 밤 11시에도 밝아 독특한 분위기를 경험할 수 있습니다.",
      "네바 강 도개교는 여름 밤 1~5시경 열리므로 숙소 위치를 확인하세요.",
      "겨울 궁전 앞 궁전 광장에서 넵스키 대로까지 산책하는 것이 기본 코스입니다.",
      "수상 택시(보트)로 운하를 따라 도시를 둘러보는 것도 추천합니다.",
    ],
  },
};

export const russiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== RED SQUARE =====
  "russia/moscow/moscow/red-square": {
    heroGradient: "from-red-700 to-red-900",
    description: "러시아 역사의 무대이자 세계에서 가장 유명한 광장 중 하나. 면적 약 23,100m2의 광장은 성 바실리 대성당, 크렘린 성벽, 굼 백화점, 레닌 묘에 둘러싸여 있습니다. '붉은'이라는 이름은 러시아어로 '아름다운'이라는 뜻에서 유래했습니다.",
    history: "15세기부터 모스크바의 중심 광장으로 사용되었으며, 수많은 역사적 사건의 무대가 되었습니다. 1990년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: { hours: "24시간 (야외 광장)", admission: "무료 (광장 자체)", address: "Red Square, Moscow, Russia", website: "https://www.kreml.ru" },
    highlights: ["성 바실리 대성당의 다채로운 양파 돔", "레닌 묘 (무료 입장, 줄이 김)", "굼 백화점의 화려한 내부", "크렘린 성벽의 야간 조명"],
    nearbyAttractions: ["크렘린 궁전", "굼 백화점", "알렉산드르 정원", "자르야드예 공원"],
    photoTips: "야간에 조명이 켜진 성 바실리 대성당과 크렘린 성벽이 가장 아름답습니다. 광장 남쪽에서 성 바실리를 배경으로 찍는 것이 정석 앵글입니다.",
    tips: [
      "레닌 묘는 화~토 10:00~13:00에만 개방되며 무료이지만 대기 줄이 깁니다.",
      "광장 내 카메라, 큰 가방 반입 시 보안 검색을 받을 수 있습니다.",
      "겨울에는 광장에 아이스링크가 설치되어 스케이트를 즐길 수 있습니다.",
    ],
  },
  // ===== HERMITAGE MUSEUM =====
  "russia/saint-petersburg/saint-petersburg/hermitage-museum": {
    heroGradient: "from-blue-500 to-indigo-800",
    description: "세계 3대 박물관 중 하나로 300만 점 이상의 소장품을 보유한 에르미타주 미술관. 겨울 궁전을 포함한 6개 건물에 걸쳐 고대 이집트부터 인상파까지 인류 예술의 역사가 펼쳐집니다. 모든 작품을 10초씩만 봐도 완관에 11년이 걸린다고 합니다.",
    history: "1764년 예카테리나 2세가 독일 상인에게서 구입한 225점의 그림으로 시작되었습니다. 겨울 궁전은 1754~1762년에 건축된 바로크 양식의 걸작입니다.",
    visitInfo: { hours: "화~토 10:30~21:00, 일 10:30~18:00 (월요일 휴관)", admission: "700 RUB (약 $8)", address: "Palace Square, 2, St. Petersburg 190000", website: "https://www.hermitagemuseum.org" },
    highlights: ["레오나르도 다빈치 <리타 성모>", "렘브란트 <돌아온 탕자>", "인상파 갤러리 (모네, 르누아르)", "요르단 계단의 화려한 내부 장식", "공작시계 (Peacock Clock)"],
    nearbyAttractions: ["궁전 광장", "넵스키 대로", "성 이삭 대성당", "피의 구세주 성당"],
    photoTips: "요르단 계단의 금빛 내부 장식과 광장에서 바라본 겨울 궁전 파사드가 최고의 촬영 포인트입니다.",
    tips: [
      "온라인 사전 예매로 긴 입장 대기 줄을 피하세요.",
      "하루에 전부 보는 것은 불가능합니다. 2층 서유럽 회화관을 우선 방문하세요.",
      "매월 첫째 목요일은 무료 입장일입니다.",
      "내부가 매우 넓으므로 편한 신발을 신으세요.",
    ],
  },
  // ===== KREMLIN =====
  "russia/moscow/moscow/moscow-kremlin": {
    heroGradient: "from-red-800 to-yellow-700",
    description: "러시아 정치 권력의 상징이자 중세 성채. 총 면적 27.5헥타르의 성벽 안에 대통령 관저, 5개의 궁전, 4개의 성당, 무기고 박물관이 자리하고 있습니다. 유네스코 세계유산으로 등재된 러시아에서 가장 중요한 역사적 건축 복합체입니다.",
    history: "12세기에 처음 목조 요새로 건설되었으며, 15세기 이반 3세 시절 이탈리아 건축가들이 현재의 벽돌 성벽과 탑을 완성했습니다. 이후 러시아 차르와 소비에트 정부의 중심지였습니다.",
    visitInfo: { hours: "10:00~17:00 (목요일 휴관, 계절별 변동)", admission: "700 RUB (성당광장), 무기고 별도", address: "Moscow Kremlin, Moscow, Russia", website: "https://www.kreml.ru" },
    highlights: ["우스펜스키 대성당 (대관식 성당)", "이반 대제 종루 (81m)", "차르 대포와 차르 종", "크렘린 무기고 박물관", "다이아몬드 기금 전시"],
    nearbyAttractions: ["붉은 광장", "알렉산드르 정원", "마네즈 광장", "구세주 그리스도 대성당"],
    photoTips: "모스크바 강 건너편에서 크렘린 성벽 전체를 파노라마로 담을 수 있습니다. 성당 광장에서 이반 대제 종루를 올려다보는 앵글도 인기입니다.",
    tips: [
      "크렘린 무기고와 다이아몬드 기금은 별도 티켓이 필요하며 시간대별 입장입니다.",
      "큰 가방은 반입 불가이며 알렉산드르 정원 근처 보관소에 맡겨야 합니다.",
      "영어 가이드 투어를 이용하면 역사적 맥락을 더 깊이 이해할 수 있습니다.",
      "트로이츠카야 탑 입구로 입장하며, 성당 광장과 무기고를 순서대로 관람합니다.",
    ],
  },
};
