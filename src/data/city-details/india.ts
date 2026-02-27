import type { CityDetail, AttractionDetail } from "../city-details";

export const indiaCityDetails: Record<string, CityDetail> = {
  // ===== DELHI-NORTH =====
  "india/delhi-north/delhi": {
    heroGradient: "from-orange-500 to-red-700",
    description: "인도의 수도이자 정치·문화의 중심지. 무굴 제국의 유산인 레드 포트, 쿠뚭 미나르, 후마윤의 묘 등 유네스코 세계유산이 도시 곳곳에 자리하며, 올드 델리의 혼돈과 뉴 델리의 질서가 공존하는 매력적인 대도시입니다.",
    bestTime: "10~3월 (건조하고 선선한 겨울 시즌)",
    stayArea: "코넛 플레이스 / 파하르간지 / 뉴델리 중심부",
    transport: "델리 메트로, 오토릭샤, 우버/올라",
    districts: [
      { name: "올드 델리", nameEn: "Old Delhi", description: "무굴 시대의 유산이 살아있는 역사 지구. 좁은 골목과 거대한 시장, 향신료 향이 가득합니다.", highlights: ["레드 포트", "자마 마스지드", "찬드니 촉 시장", "파라타 골목"] },
      { name: "뉴 델리", nameEn: "New Delhi", description: "영국 식민지 시절 설계된 넓은 대로와 정부 청사가 있는 현대적 중심부.", highlights: ["인디아 게이트", "코넛 플레이스", "라즈파트", "로디 가든"] },
      { name: "남델리", nameEn: "South Delhi", description: "쿠뚭 미나르와 하우즈 카스 등 중세 유적과 트렌디한 카페가 공존하는 지역.", highlights: ["쿠뚭 미나르", "하우즈 카스 빌리지", "로터스 템플"] },
    ],
    attractions: [
      { name: "레드 포트", nameEn: "Red Fort", description: "무굴 제국의 궁전으로 붉은 사암으로 지어진 유네스코 세계유산. 매년 독립기념일에 총리가 연설합니다.", category: "유적", tip: "저녁 사운드 & 라이트 쇼를 놓치지 마세요." },
      { name: "쿠뚭 미나르", nameEn: "Qutub Minar", description: "높이 72.5m의 세계에서 가장 높은 벽돌 미나렛으로 12세기에 건설된 유네스코 세계유산.", category: "유적", tip: "일몰 시간에 방문하면 사진이 아름답습니다." },
      { name: "후마윤의 묘", nameEn: "Humayun's Tomb", description: "타지마할의 영감이 된 무굴 건축의 걸작. 아름다운 무굴 정원 속 대칭적 묘소입니다.", category: "유적", tip: "타지마할의 원형을 여기서 먼저 감상하세요." },
      { name: "자마 마스지드", nameEn: "Jama Masjid", description: "인도 최대의 모스크로 2만 5천명을 수용할 수 있으며 올드 델리의 랜드마크입니다.", category: "종교", tip: "미나렛 전망대(별도 요금)에서 올드 델리 전경을 볼 수 있습니다." },
      { name: "인디아 게이트", nameEn: "India Gate", description: "제1차 세계대전 전사자를 추모하는 42m 높이의 아치형 전쟁 기념물.", category: "기념물" },
      { name: "로터스 템플", nameEn: "Lotus Temple", description: "연꽃 모양의 바하이 사원으로 종교에 관계없이 누구나 명상할 수 있는 공간.", category: "종교" },
    ],
    dayTrips: [
      { name: "아그라 (타지마할)", nameEn: "Agra (Taj Mahal)", description: "세계 7대 불가사의 타지마할이 있는 도시.", travelTime: "기차(가티만 익스프레스) 약 1시간 40분", gradient: "from-amber-300 to-orange-600" },
      { name: "자이푸르", nameEn: "Jaipur", description: "핑크시티로 불리는 라자스탄의 주도.", travelTime: "기차 약 4~5시간", gradient: "from-pink-400 to-rose-700" },
    ],
    localFood: [
      { name: "파라타", description: "올드 델리 파라타 골목의 각종 속재료를 넣은 인도식 부침개.", emoji: "🫓" },
      { name: "버터 치킨", description: "델리에서 탄생한 크리미한 토마토 기반 치킨 커리.", emoji: "🍗" },
      { name: "촐레 바투레", description: "병아리콩 커리와 튀긴 빵의 조합, 델리의 대표 아침 식사.", emoji: "🥘" },
    ],
    tips: [
      "델리 메트로는 깨끗하고 효율적이며, 여성 전용 칸이 있습니다.",
      "오토릭샤 이용 시 미터기 사용을 확인하거나 사전에 요금을 협상하세요.",
      "올드 델리는 도보 또는 사이클 릭샤 투어가 가장 좋습니다.",
      "여름(4~6월)은 45°C 이상의 극심한 더위로 피하는 것이 좋습니다.",
    ],
  },
  "india/delhi-north/agra": {
    heroGradient: "from-amber-300 to-orange-600",
    description: "무굴 제국의 수도였던 도시로, 세계 7대 불가사의 타지마할을 품고 있습니다. 아그라 포트와 이티마드 웃 다울라 등 무굴 건축의 보고이며, 델리에서 당일치기 또는 1박 여행으로 적합합니다.",
    bestTime: "10~3월 (건조하고 선선한 시기)",
    stayArea: "타지마할 동문 / 남문 인근",
    transport: "오토릭샤, 프리페이드 택시, 전동 릭샤",
    districts: [
      { name: "타지 간지", nameEn: "Taj Ganj", description: "타지마할 남문 앞의 좁은 골목 지역으로 저렴한 숙소와 루프탑 카페가 밀집.", highlights: ["타지마할 남문", "루프탑 레스토랑", "기념품 상점"] },
      { name: "사다르 바자르", nameEn: "Sadar Bazaar", description: "아그라의 주요 시장 지역으로 대리석 공예품과 가죽 제품이 유명.", highlights: ["대리석 공예 공방", "아그라 포트 인근", "무굴 요리 식당"] },
    ],
    attractions: [
      { name: "타지마할", nameEn: "Taj Mahal", description: "무굴 황제 샤자한이 아내를 위해 건설한 순백의 대리석 영묘. 세계에서 가장 아름다운 건축물로 불립니다.", category: "유적", tip: "일출 시간에 방문하면 인파가 적고 사진이 가장 아름답습니다." },
      { name: "아그라 포트", nameEn: "Agra Fort", description: "붉은 사암의 거대한 무굴 성채로 야무나 강 건너편 타지마할 전경이 보입니다.", category: "유적", tip: "무삼만 부르즈에서 바라본 타지마할 뷰가 압권입니다." },
      { name: "이티마드 웃 다울라", nameEn: "Itimad-ud-Daulah", description: "타지마할의 초안이라 불리는 정교한 대리석 세공의 소규모 영묘.", category: "유적" },
    ],
    dayTrips: [
      { name: "파테푸르 시크리", nameEn: "Fatehpur Sikri", description: "무굴 제국의 버려진 수도로 완벽하게 보존된 16세기 도시.", travelTime: "차량 약 1시간", gradient: "from-red-400 to-amber-600" },
    ],
    localFood: [
      { name: "페타", description: "아그라 특산 달콤한 과자로, 호박으로 만든 전통 디저트.", emoji: "🍬" },
      { name: "무글라이 파라타", description: "속에 키마(다진 고기)를 넣어 구운 무굴 스타일 파라타.", emoji: "🫓" },
    ],
    tips: [
      "타지마할은 금요일 휴무입니다. 일출 입장이 가장 좋습니다.",
      "타지마할 입장 시 삼각대, 음식물 반입이 금지됩니다.",
      "가이드 고용 시 정부 공인 가이드(ID 확인)를 이용하세요.",
    ],
  },
  "india/delhi-north/jaipur": {
    heroGradient: "from-pink-400 to-rose-700",
    description: "핑크시티로 불리는 라자스탄의 주도. 1727년 마하라자 자이 싱 2세가 건설한 계획도시로, 분홍빛 구시가지와 웅장한 요새, 화려한 궁전이 어우러진 왕의 도시입니다.",
    bestTime: "10~3월 (건조하고 선선한 시기)",
    stayArea: "구시가지 (핑크시티) / 미 로드 주변",
    transport: "오토릭샤, 우버/올라, 시내버스",
    districts: [
      { name: "핑크시티", nameEn: "Pink City", description: "분홍빛 건물들이 늘어선 자이푸르의 역사적 구시가지.", highlights: ["하와 마할", "시티 팰리스", "잔타르 만타르", "조하리 바자르"] },
      { name: "아메르", nameEn: "Amer", description: "자이푸르 북쪽 11km에 위치한 옛 수도로 암베르 포트가 있는 지역.", highlights: ["암베르 포트", "마오타 호수", "자이가르 포트"] },
    ],
    attractions: [
      { name: "암베르 포트", nameEn: "Amber Fort", description: "산 위에 지어진 거대한 라자푸트-무굴 혼합 양식의 궁전 요새. 거울의 방(쉬시 마할)이 유명합니다.", category: "요새", tip: "코끼리 대신 지프를 타고 올라가면 빠르고 동물 복지에도 좋습니다." },
      { name: "하와 마할", nameEn: "Hawa Mahal", description: "953개의 작은 창문이 있는 벌집 모양의 분홍색 궁전. 자이푸르의 상징적인 건축물입니다.", category: "궁전", tip: "맞은편 카페 루프탑에서 정면 사진을 찍는 것이 최고입니다." },
      { name: "시티 팰리스", nameEn: "City Palace", description: "현재까지 왕족이 거주하는 라자스탄 최대의 궁전 복합체.", category: "궁전" },
      { name: "잔타르 만타르", nameEn: "Jantar Mantar", description: "18세기에 건설된 세계 최대의 석조 천문 관측소. 유네스코 세계유산.", category: "유적" },
      { name: "나하르가르 포트", nameEn: "Nahargarh Fort", description: "아라발리 산맥 위에서 자이푸르 시내를 내려다보는 요새. 일몰 명소.", category: "요새", tip: "일몰에 맞춰 방문하면 핑크시티의 환상적인 야경을 볼 수 있습니다." },
    ],
    dayTrips: [
      { name: "푸시카르", nameEn: "Pushkar", description: "신성한 호수와 브라마 신전이 있는 힌두교 성지.", travelTime: "차량 약 3시간", gradient: "from-blue-400 to-indigo-600" },
    ],
    localFood: [
      { name: "달 바티 추르마", description: "라자스탄의 대표 요리. 렌틸콩 커리, 구운 밀빵, 달콤한 밀가루 부스러기.", emoji: "🍲" },
      { name: "라씨", description: "자이푸르 라씨왈라의 진하고 크리미한 요거트 음료.", emoji: "🥛" },
      { name: "겨와르", description: "라자스탄 전통 디저트로 벌집 모양의 바삭한 과자에 시럽을 적신 것.", emoji: "🍯" },
    ],
    tips: [
      "자이푸르 컴포짓 티켓으로 주요 관광지 5곳 통합 입장이 가능합니다.",
      "조하리 바자르에서 보석과 직물 쇼핑 시 흥정은 필수입니다.",
      "암베르 포트는 오전 일찍 방문해야 더위와 인파를 피할 수 있습니다.",
      "핑크시티 구시가지 도보 투어를 추천합니다.",
    ],
  },

  // ===== RAJASTHAN =====
  "india/rajasthan/udaipur": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "동양의 베네치아로 불리는 호수의 도시. 피촐라 호수 위에 떠 있는 듯한 레이크 팰리스, 웅장한 시티 팰리스, 그리고 아라발리 산맥으로 둘러싸인 낭만적인 풍경이 라자스탄에서 가장 로맨틱한 도시로 만듭니다.",
    bestTime: "9~3월 (우기 후 호수가 가득 찬 가을~겨울이 최적)",
    stayArea: "피촐라 호수 동쪽 (라크 가트 / 간가우르 가트)",
    transport: "오토릭샤, 도보, 보트",
    districts: [
      { name: "레이크사이드", nameEn: "Lakeside", description: "피촐라 호수변의 좁은 골목과 게스트하우스, 루프탑 카페가 밀집한 여행자 중심 지역.", highlights: ["피촐라 호수", "간가우르 가트", "루프탑 레스토랑"] },
      { name: "시티 팰리스 주변", nameEn: "City Palace Area", description: "우다이푸르 시티 팰리스와 재규어 사원이 있는 역사 중심부.", highlights: ["시티 팰리스", "재그디쉬 사원", "바고레 키 하벨리"] },
    ],
    attractions: [
      { name: "시티 팰리스 우다이푸르", nameEn: "City Palace Udaipur", description: "피촐라 호수변에 400년에 걸쳐 건설된 라자스탄 최대의 궁전 복합체. 호수와 도시의 파노라마 전경이 숨막힙니다.", category: "궁전", tip: "일몰 시간에 최상층 전망대에서 호수 뷰를 감상하세요." },
      { name: "피촐라 호수", nameEn: "Lake Pichola", description: "우다이푸르의 심장으로 호수 위의 레이크 팰리스와 잭 만디르가 보이는 아름다운 인공 호수.", category: "호수" },
      { name: "재그디쉬 사원", nameEn: "Jagdish Temple", description: "1651년에 건립된 인도아리아 양식의 비슈누 사원으로 정교한 조각이 돋보입니다.", category: "종교" },
    ],
    dayTrips: [
      { name: "쿰발가르 포트", nameEn: "Kumbhalgarh Fort", description: "만리장성에 이어 세계에서 두 번째로 긴 성벽을 가진 요새.", travelTime: "차량 약 2시간 30분", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "달 바파", description: "우다이푸르 스타일의 찐 렌틸콩 요리로 부드럽고 향긋합니다.", emoji: "🍲" },
      { name: "게바르", description: "라자스탄식 벌집 과자에 설탕 시럽을 적신 전통 디저트.", emoji: "🍯" },
    ],
    tips: [
      "피촐라 호수 보트 투어는 일몰 시간대가 가장 아름답습니다.",
      "바고레 키 하벨리에서 매일 저녁 라자스탄 전통 춤 공연이 있습니다.",
      "시티 팰리스는 반나절 이상 여유롭게 둘러보세요.",
    ],
  },
  "india/rajasthan/jodhpur": {
    heroGradient: "from-blue-600 to-indigo-800",
    description: "블루시티로 불리는 라자스탄 제2의 도시. 거대한 메헤랑가르 요새가 내려다보는 파란색 구시가지의 풍경은 인도에서 가장 인상적인 스카이라인 중 하나입니다.",
    bestTime: "10~3월 (선선한 겨울 시즌)",
    stayArea: "구시가지 (메헤랑가르 포트 주변)",
    transport: "오토릭샤, 도보",
    districts: [
      { name: "블루시티", nameEn: "Blue City", description: "메헤랑가르 포트 아래 파란색으로 칠해진 브라만 가옥이 밀집한 구시가지.", highlights: ["파란 골목", "스텝 웰", "사르다르 시장"] },
    ],
    attractions: [
      { name: "메헤랑가르 포트", nameEn: "Mehrangarh Fort", description: "125m 절벽 위에 세워진 인도에서 가장 웅장한 요새 중 하나. 내부 박물관과 블루시티 전경이 압도적입니다.", category: "요새", tip: "오디오 가이드(한국어 없음, 영어 추천)가 매우 훌륭합니다." },
      { name: "자스완트 타다", nameEn: "Jaswant Thada", description: "하얀 대리석으로 지어진 왕족 추모 사원으로 메헤랑가르 포트와 함께 방문하기 좋습니다.", category: "유적" },
      { name: "사르다르 시장", nameEn: "Sardar Market", description: "시계탑 아래 펼쳐진 활기찬 재래시장으로 향신료와 직물이 유명합니다.", category: "시장" },
    ],
    dayTrips: [
      { name: "오시안 사원", nameEn: "Osian Temples", description: "타르 사막의 오아시스에 위치한 8~11세기 자이나교·힌두교 사원군.", travelTime: "차량 약 1시간", gradient: "from-yellow-400 to-amber-600" },
    ],
    localFood: [
      { name: "미르치 바다", description: "고추에 감자 속을 넣고 베산(병아리콩 가루)으로 튀긴 조드푸르의 대표 간식.", emoji: "🌶️" },
      { name: "마와 카초리", description: "우유를 졸인 속을 넣어 튀기고 설탕 시럽을 적신 달콤한 과자.", emoji: "🥟" },
    ],
    tips: [
      "메헤랑가르 포트에서 집라인 체험이 가능합니다.",
      "블루시티 골목 탐험은 이른 아침이 가장 분위기 있습니다.",
      "포트에서 내려다보는 일몰이 조드푸르 최고의 뷰입니다.",
    ],
  },

  // ===== MUMBAI-WEST =====
  "india/mumbai-west/mumbai": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "인도의 경제 수도이자 볼리우드의 본고장. 영국 식민지 시절의 빅토리아 고딕 건축물과 아라비아해의 스카이라인, 다라비의 활력이 공존하는 대도시. 게이트웨이 오브 인디아에서 시작되는 인도 여행의 관문입니다.",
    bestTime: "11~2월 (건조한 겨울 시즌)",
    stayArea: "콜라바 / 포트 지역 / 반드라",
    transport: "뭄바이 로컬 트레인, 택시, 우버/올라",
    districts: [
      { name: "콜라바", nameEn: "Colaba", description: "게이트웨이 오브 인디아와 타지마할 팰리스 호텔이 있는 남뭄바이의 관광 중심지.", highlights: ["게이트웨이 오브 인디아", "타지마할 팰리스", "콜라바 코즈웨이"] },
      { name: "포트", nameEn: "Fort", description: "빅토리아 고딕 건축물과 아트데코 건물이 밀집한 비즈니스 & 유산 지구.", highlights: ["차트라파티 시바지 터미너스", "크로포드 마켓", "봄베이 대학교"] },
      { name: "반드라", nameEn: "Bandra", description: "볼리우드 스타들의 거주지이자 트렌디한 카페와 바가 즐비한 서부 교외 지역.", highlights: ["반드라 워리 시링크", "반드라 포트", "카터 로드"] },
    ],
    attractions: [
      { name: "게이트웨이 오브 인디아", nameEn: "Gateway of India", description: "1924년 완공된 뭄바이의 상징적인 아치형 기념물. 영국 국왕 조지 5세의 방문을 기념해 건설되었습니다.", category: "기념물", tip: "일몰에 방문하고, 엘레판타 섬행 페리도 여기서 출발합니다." },
      { name: "다라비 투어", nameEn: "Dharavi Tour", description: "아시아 최대 규모의 슬럼이자 연간 10억 달러 이상의 경제를 창출하는 산업 허브. 사회적 기업이 운영하는 워킹 투어가 인기입니다.", category: "투어", tip: "Reality Tours 등 수익을 지역에 환원하는 단체의 투어를 이용하세요." },
      { name: "차트라파티 시바지 터미너스", nameEn: "Chhatrapati Shivaji Terminus", description: "빅토리아 고딕 양식의 유네스코 세계유산 기차역으로 뭄바이에서 가장 화려한 건축물.", category: "건축" },
      { name: "엘레판타 동굴", nameEn: "Elephanta Caves", description: "뭄바이 항에서 페리로 1시간 거리의 섬에 있는 힌두교 석굴 사원군.", category: "유적" },
      { name: "마린 드라이브", nameEn: "Marine Drive", description: "아라비아해를 따라 이어지는 3km의 해안 산책로로 밤에는 '여왕의 목걸이'로 불리는 야경이 유명합니다.", category: "산책로" },
    ],
    dayTrips: [
      { name: "엘레판타 섬", nameEn: "Elephanta Island", description: "7세기 힌두교 석굴 사원이 있는 유네스코 세계유산.", travelTime: "게이트웨이 오브 인디아에서 페리 약 1시간", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "바다 파우", description: "뭄바이의 대표 길거리 음식. 감자 튀김을 빵에 끼운 인도식 버거.", emoji: "🍔" },
      { name: "파우 바지", description: "매콤한 야채 커리를 버터에 구운 빵과 함께 먹는 뭄바이 소울푸드.", emoji: "🍞" },
      { name: "봄빌 프라이", description: "봄베이덕(봄빌)을 바삭하게 튀긴 뭄바이 해산물 요리.", emoji: "🐟" },
    ],
    tips: [
      "뭄바이 로컬 트레인은 러시아워(8~10시, 17~20시)를 피하세요. 매우 혼잡합니다.",
      "콜라바에서 엘레판타 섬 페리는 월요일 운휴입니다.",
      "거리 음식은 현지인이 많은 곳에서 드세요. 위생 상태가 더 좋습니다.",
      "택시/릭샤 미터기 사용을 반드시 확인하세요.",
    ],
  },
  "india/mumbai-west/goa": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "인도의 대표 해변 휴양지이자 포르투갈 식민지 유산이 남아있는 독특한 주. 올드 고아의 바로크 교회군(유네스코 세계유산)과 아름다운 해변, 여유로운 분위기가 매력입니다.",
    bestTime: "11~2월 (건조하고 선선한 시기)",
    stayArea: "파나지 / 칼랑구트 / 안주나 (북고아)",
    transport: "스쿠터 렌트, 택시, 로컬 버스",
    districts: [
      { name: "올드 고아", nameEn: "Old Goa", description: "포르투갈 식민지 시절의 바로크 교회군이 밀집한 유네스코 세계유산 지역.", highlights: ["봄 제수스 성당", "세 성당", "성 프란시스 아시시 교회"] },
      { name: "북고아 해변", nameEn: "North Goa Beaches", description: "칼랑구트, 바가, 안주나 등 활기찬 해변과 나이트라이프가 있는 지역.", highlights: ["안주나 플리 마켓", "바가 비치", "칼랑구트 비치"] },
    ],
    attractions: [
      { name: "올드 고아 교회군", nameEn: "Old Goa Churches", description: "16~17세기 포르투갈 시절에 건설된 바로크·마누엘 양식의 교회군. 봄 제수스 성당에는 성 프란시스 하비에르의 유해가 안치되어 있습니다.", category: "유적", tip: "봄 제수스 성당과 세 성당은 도보 거리이니 함께 방문하세요." },
      { name: "안주나 플리 마켓", nameEn: "Anjuna Flea Market", description: "매주 수요일 열리는 히피 문화의 상징적 벼룩시장.", category: "시장" },
      { name: "두드사가르 폭포", nameEn: "Dudhsagar Falls", description: "높이 310m의 장엄한 폭포로 기차가 바로 옆을 지나갑니다.", category: "자연" },
    ],
    dayTrips: [
      { name: "두드사가르 폭포", nameEn: "Dudhsagar Falls", description: "인도에서 가장 높은 폭포 중 하나로 우기에 장관을 이룹니다.", travelTime: "차량+지프 약 2시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "피쉬 커리 라이스", description: "코코넛 기반의 매콤한 생선 커리와 밥. 고아의 대표 식사.", emoji: "🐟" },
      { name: "비빙카", description: "코코넛 밀크와 달걀로 만든 고아식 레이어 케이크.", emoji: "🍰" },
    ],
    tips: [
      "스쿠터 렌트(₹300~500/일)가 고아 여행의 가장 편리한 이동 수단입니다.",
      "국제 운전면허증을 지참하세요.",
      "몬순 시즌(6~9월)에는 해변 레스토랑 대부분이 문을 닫습니다.",
    ],
  },

  // ===== SOUTH =====
  "india/south/kerala": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "신의 나라(God's Own Country)로 불리는 인도 남서부의 주. 야자수가 늘어선 백워터 수로, 향신료 농장, 아유르베다 스파, 아름다운 해변이 어우러진 열대 낙원. 코치와 알레피를 거점으로 여행합니다.",
    bestTime: "9~3월 (몬순 후 ~ 겨울)",
    stayArea: "코치 포트 코치 / 알레피 하우스보트",
    transport: "KSRTC 버스, 오토릭샤, 하우스보트, 페리",
    districts: [
      { name: "포트 코치", nameEn: "Fort Kochi", description: "포르투갈·네덜란드·영국 식민지 유산이 남아있는 코치의 역사 지구. 갤러리와 카페가 밀집.", highlights: ["중국식 어망", "성 프란시스 교회", "유대인 거리", "마탄체리 궁전"] },
      { name: "알레피", nameEn: "Alleppey", description: "케랄라 백워터의 관문 도시로 하우스보트 투어의 출발지.", highlights: ["백워터 크루즈", "알레피 비치", "암발라푸자 사원"] },
    ],
    attractions: [
      { name: "케랄라 백워터", nameEn: "Kerala Backwaters", description: "900km에 걸친 호수, 운하, 강의 네트워크. 전통 하우스보트(케투발람)에서 1박하며 야자수 숲과 논, 마을을 지나는 것이 케랄라 최고의 체험입니다.", category: "자연", tip: "알레피~쿨란 구간이 가장 아름다우며, 성수기에는 사전 예약 필수입니다." },
      { name: "중국식 어망", nameEn: "Chinese Fishing Nets", description: "14세기 중국 상인이 전한 독특한 어망으로 포트 코치의 상징적 풍경.", category: "문화" },
      { name: "문나르 차 농장", nameEn: "Munnar Tea Plantations", description: "서가츠 산맥 1600m 고지대에 펼쳐진 광활한 차밭과 시원한 기후.", category: "자연" },
    ],
    dayTrips: [
      { name: "문나르", nameEn: "Munnar", description: "고산 차 농장과 국립공원이 있는 힐스테이션.", travelTime: "코치에서 차량 약 4시간", gradient: "from-green-400 to-lime-600" },
      { name: "페리야르 국립공원", nameEn: "Periyar National Park", description: "야생 코끼리와 호랑이가 서식하는 열대 우림 국립공원.", travelTime: "코치에서 차량 약 5시간", gradient: "from-emerald-500 to-green-800" },
    ],
    localFood: [
      { name: "아빠무 & 스튜", description: "쌀가루 팬케이크와 코코넛 밀크 야채/치킨 스튜. 케랄라의 아침 식사.", emoji: "🥞" },
      { name: "피시 몰리", description: "코코넛 밀크 기반의 부드러운 케랄라식 생선 커리.", emoji: "🐟" },
      { name: "파로타 & 비프 프라이", description: "층층이 쌓인 납작한 빵과 매콤한 소고기 볶음의 조합.", emoji: "🫓" },
    ],
    tips: [
      "백워터 하우스보트는 성수기(12~1월)에 최소 1주 전 예약하세요.",
      "아유르베다 마사지는 최소 3일 이상 연속으로 받아야 효과가 있습니다.",
      "우기(6~8월)의 케랄라도 독특한 매력이 있으나 홍수 위험에 주의하세요.",
    ],
  },
  "india/south/bangalore": {
    heroGradient: "from-purple-500 to-violet-800",
    description: "인도의 실리콘밸리로 불리는 IT 수도이자 카르나타카 주의 주도. 쾌적한 기후, 다양한 공원, 활기찬 펍 문화, 그리고 인도의 미래를 이끄는 스타트업 생태계가 공존하는 현대적인 대도시입니다.",
    bestTime: "10~2월 (연중 쾌적하지만 겨울이 최적)",
    stayArea: "MG 로드 / 이디라 나가르 / 코라망갈라",
    transport: "뱅갈루루 메트로(나마 메트로), 우버/올라, 버스",
    districts: [
      { name: "MG 로드 & 브리게이드 로드", nameEn: "MG Road & Brigade Road", description: "쇼핑, 레스토랑, 펍이 밀집한 방갈로르의 번화가.", highlights: ["MG 로드", "브리게이드 로드", "UB 시티 몰"] },
      { name: "말레슈와람", nameEn: "Malleshwaram", description: "전통 시장과 사원이 있는 올드 방갈로르의 분위기를 간직한 주거 지역.", highlights: ["불 사원", "산키 탱크", "전통 시장 거리"] },
    ],
    attractions: [
      { name: "방갈로르 궁전", nameEn: "Bangalore Palace", description: "영국 튜더 양식으로 지어진 방갈로르의 랜드마크 궁전으로 현재 마이소르 왕가가 소유.", category: "궁전" },
      { name: "랄바그 식물원", nameEn: "Lalbagh Botanical Garden", description: "240에이커의 광활한 식물원으로 글래스 하우스와 1000종 이상의 식물이 있습니다.", category: "공원", tip: "일요일 아침에 방문하면 꽃 시장도 볼 수 있습니다." },
      { name: "비다나 소우다", nameEn: "Vidhana Soudha", description: "카르나타카 주 의사당으로 네오 드라비다 양식의 인상적인 화강암 건물.", category: "건축" },
    ],
    dayTrips: [
      { name: "마이소르", nameEn: "Mysore", description: "화려한 마이소르 궁전과 향신료 시장의 왕국 도시.", travelTime: "기차/차량 약 3시간", gradient: "from-amber-400 to-yellow-600" },
    ],
    localFood: [
      { name: "마살라 도사", description: "바삭한 쌀 크레이프에 감자 커리를 넣은 남인도 대표 음식.", emoji: "🫓" },
      { name: "비시 벨레 바스", description: "렌틸콩, 쌀, 야채를 함께 조리한 카르나타카식 한 그릇 요리.", emoji: "🍲" },
      { name: "필터 커피", description: "남인도식 스테인리스 필터로 내린 진한 밀크 커피.", emoji: "☕" },
    ],
    tips: [
      "방갈로르는 교통 체증이 심합니다. 메트로를 적극 활용하세요.",
      "IT 허브답게 카페 문화가 발달했으니 코라망갈라의 카페 호핑을 추천합니다.",
      "주말에 난디 힐스(차량 1시간) 일출 트레킹이 인기입니다.",
    ],
  },

  // ===== VARANASI-EAST =====
  "india/varanasi-east/varanasi": {
    heroGradient: "from-orange-600 to-red-900",
    description: "세계에서 가장 오래된 살아있는 도시 중 하나이자 힌두교 최고의 성지. 갠지스강변의 가트(계단식 강변)에서 매일 펼쳐지는 삶과 죽음의 의식은 인도 여행의 가장 강렬하고 영적인 경험입니다.",
    bestTime: "10~3월 (선선한 겨울 시즌)",
    stayArea: "아씨 가트 / 다샤슈와메드 가트 근처",
    transport: "보트, 도보, 오토릭샤 (가트 구간은 도보만 가능)",
    districts: [
      { name: "가트 지역", nameEn: "Ghats Area", description: "갠지스강변을 따라 80개 이상의 가트가 이어지는 바라나시의 심장부.", highlights: ["다샤슈와메드 가트", "마니카르니카 가트", "아씨 가트", "갠지스 아르띠 의식"] },
      { name: "구시가지", nameEn: "Old City", description: "미로 같은 좁은 골목 사이로 사원, 실크 공방, 라씨 가게가 밀집한 지역.", highlights: ["카시 비슈와나트 사원", "실크 공방", "블루 라씨 가게"] },
    ],
    attractions: [
      { name: "갠지스 가트", nameEn: "Ganges Ghats", description: "갠지스강변의 80개 이상의 계단식 강변(가트)으로 힌두교도의 목욕 의식, 화장 의식, 그리고 매일 저녁 수천 개의 불꽃이 타오르는 장엄한 갠가 아르띠 의식이 펼쳐집니다.", category: "종교", tip: "새벽 보트 투어(5~6시)로 일출과 목욕 의식을, 저녁에는 다샤슈와메드 가트의 아르띠를 감상하세요." },
      { name: "카시 비슈와나트 사원", nameEn: "Kashi Vishwanath Temple", description: "시바 신에게 봉헌된 힌두교 최고의 성지 중 하나. 최근 대규모 복원 사업(코리도르)이 완료되었습니다.", category: "종교" },
      { name: "사르나트", nameEn: "Sarnath", description: "석가모니가 최초로 설법한 불교 4대 성지. 다메크 스투파와 고고학 박물관이 있습니다.", category: "유적", tip: "바라나시에서 오토릭샤로 약 30분 거리이니 반나절 일정으로 방문하세요." },
    ],
    dayTrips: [
      { name: "사르나트", nameEn: "Sarnath", description: "부처가 첫 설법을 한 불교 성지.", travelTime: "오토릭샤 약 30분", gradient: "from-yellow-400 to-orange-600" },
    ],
    localFood: [
      { name: "바라나시 라씨", description: "두꺼운 크림층이 올라간 진하고 달콤한 전통 요거트 음료.", emoji: "🥛" },
      { name: "카초리 사브지", description: "렌틸콩 속을 넣어 튀긴 빵과 매콤한 감자 커리.", emoji: "🥘" },
      { name: "타마타르 차트", description: "토마토 기반의 새콤달콤한 바라나시 스타일 길거리 간식.", emoji: "🍅" },
    ],
    tips: [
      "새벽 보트 투어는 바라나시 여행의 필수 체험입니다. 숙소에서 예약 가능합니다.",
      "마니카르니카 가트(화장터)에서는 사진 촬영이 금지되어 있으니 존중하세요.",
      "구시가지 골목은 미로처럼 복잡하니 구글맵보다 현지인에게 길을 물어보세요.",
      "바라나시는 채식주의 도시입니다. 대부분의 식당에서 고기를 판매하지 않습니다.",
    ],
  },
};

export const indiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== DELHI =====
  "india/delhi-north/delhi/red-fort": {
    heroGradient: "from-red-600 to-red-900",
    description: "1639~1648년에 무굴 황제 샤자한이 건설한 붉은 사암의 거대한 궁전 요새. 유네스코 세계유산으로 매년 8월 15일 독립기념일에 인도 총리가 이곳에서 연설합니다.",
    history: "무굴 제국의 수도를 아그라에서 델리로 옮기며 건설된 황제의 거처입니다. 약 200년간 무굴 제국의 정치 중심이었으며, 1857년 세포이 항쟁 후 영국군이 접수했습니다.",
    visitInfo: {
      hours: "화~일 09:30~16:30 (월요일 휴무)",
      admission: "외국인 ₹600, 인도인 ₹35",
      address: "Netaji Subhash Marg, Chandni Chowk, New Delhi",
      website: "https://www.asi.nic.in",
    },
    highlights: [
      "디완이암(공적 알현실)의 붉은 사암 기둥 회랑",
      "디완이카스(사적 알현실)의 정교한 대리석 세공",
      "나하르이코나(코끼리 문) 입구의 웅장한 규모",
      "저녁 사운드 & 라이트 쇼 (힌디어/영어)",
    ],
    nearbyAttractions: ["자마 마스지드", "찬드니 촉 시장", "시스 간지 사원"],
    photoTips: "라호리 문 앞에서 정면 사진이 가장 인상적입니다. 오전 10시 이전이 역광을 피할 수 있습니다.",
    tips: [
      "월요일 휴무이니 일정을 확인하세요.",
      "오디오 가이드를 대여하면 역사를 더 깊이 이해할 수 있습니다.",
      "보안 검색이 엄격하니 큰 가방은 숙소에 두세요.",
    ],
  },
  "india/delhi-north/delhi/qutub-minar": {
    heroGradient: "from-amber-600 to-orange-800",
    description: "높이 72.5m의 세계에서 가장 높은 벽돌 미나렛. 1192년 쿠뚭 앗 딘 아이바크가 건설을 시작해 수대에 걸쳐 완성되었습니다. 유네스코 세계유산으로, 힌두·이슬람 건축이 혼합된 독특한 양식이 특징입니다.",
    history: "델리 술탄국의 첫 무슬림 통치자 쿠뚭 앗 딘 아이바크가 1192년 건설을 시작했으며, 이후 여러 술탄에 의해 증축·보수되었습니다. 인도에서 이슬람 지배의 시작을 상징하는 기념물입니다.",
    visitInfo: {
      hours: "매일 07:00~17:00",
      admission: "외국인 ₹600, 인도인 ₹40",
      address: "Mehrauli, New Delhi, 110030",
      website: "https://www.asi.nic.in",
    },
    highlights: [
      "72.5m 높이의 5층 미나렛 (내부 입장 불가)",
      "쿠와뚤 이슬람 모스크 (인도 최초의 모스크)",
      "녹슬지 않는 철 기둥 (1600년 이상 부식 없음)",
      "알라이 미나르 (미완성 탑)",
    ],
    nearbyAttractions: ["메흐라울리 고고학 공원", "가든 오브 파이브 센시스", "로터스 템플"],
    photoTips: "미나렛 전체를 넣으려면 광각 렌즈가 필요합니다. 일몰 시간에 황금빛 사암이 특히 아름답습니다.",
    tips: [
      "미나렛 내부 진입은 현재 금지되어 있습니다.",
      "복합 단지 내 다른 유적도 꼼꼼히 둘러보세요.",
      "남델리 메트로 역에서 오토릭샤로 약 10분 거리입니다.",
    ],
  },
  "india/delhi-north/delhi/humayuns-tomb": {
    heroGradient: "from-rose-500 to-red-700",
    description: "1570년 완공된 무굴 제국 2대 황제 후마윤의 영묘. 타지마할의 건축적 영감이 된 무굴 정원 묘소의 원형으로, 유네스코 세계유산입니다. 아가 칸 트러스트의 복원 사업으로 아름답게 재정비되었습니다.",
    history: "후마윤의 페르시아 출신 왕비 하미다 바누 베굼이 1565년 건설을 명령했으며, 페르시아 건축가 미라크 미르자 기야스가 설계했습니다. 무굴 정원 묘소의 시초이자 이후 타지마할에 영향을 준 건축물입니다.",
    visitInfo: {
      hours: "매일 일출~일몰",
      admission: "외국인 ₹600, 인도인 ₹40",
      address: "Mathura Road, Nizamuddin East, New Delhi, 110013",
    },
    highlights: [
      "차르바그(사분 정원) 양식의 무굴 정원",
      "대칭적인 붉은 사암과 백색 대리석의 조화",
      "중앙 돔에서 바라본 정원 전경",
      "이사 칸의 묘 등 주변 부속 건축물",
    ],
    nearbyAttractions: ["니잠웃딘 다르가", "로디 가든", "국립 공예 박물관"],
    photoTips: "남쪽 문에서 들어오면 정면에서 영묘 전체가 보이는 완벽한 대칭 사진을 찍을 수 있습니다.",
    tips: [
      "이른 아침이 인파가 적고 빛이 좋습니다.",
      "인근 니잠웃딘 다르가에서 목요일 저녁 카왈리(수피 음악) 공연도 체험해 보세요.",
      "로디 가든과 함께 반나절 코스로 묶으면 좋습니다.",
    ],
  },

  // ===== AGRA =====
  "india/delhi-north/agra/taj-mahal": {
    heroGradient: "from-amber-200 to-orange-500",
    description: "무굴 황제 샤자한이 사랑하는 아내 뭄타즈 마할을 위해 22년(1632~1653)에 걸쳐 건설한 순백의 대리석 영묘. 세계 7대 불가사의이자 유네스코 세계유산으로, 인류 역사상 가장 아름다운 건축물로 평가받습니다.",
    history: "1631년 뭄타즈 마할이 14번째 출산 중 사망하자, 샤자한은 그녀를 위한 영묘 건설을 명령했습니다. 2만명 이상의 장인이 22년에 걸쳐 완성했으며, 대리석은 라자스탄에서, 보석은 스리랑카·중국 등 전 세계에서 가져왔습니다.",
    visitInfo: {
      hours: "일출 30분 전~일몰 30분 전 (금요일 휴무, 무슬림 예배일)",
      admission: "외국인 ₹1,100, 인도인 ₹50 (메인 묘실 추가 ₹200)",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, 282001",
      website: "https://www.tajmahal.gov.in",
    },
    highlights: [
      "일출 시 황금빛에서 순백으로 변하는 대리석 외관",
      "정교한 피에트라 두라(보석 상감) 세공",
      "완벽한 좌우 대칭의 무굴 정원(차르바그)",
      "야무나 강에 비친 타지마할 반영",
      "메흐탑 바그(달빛 정원)에서 바라본 야경",
    ],
    nearbyAttractions: ["아그라 포트", "이티마드 웃 다울라", "메흐탑 바그"],
    photoTips: "일출 직후가 가장 아름답습니다. 동문 입구에서 들어가면 정면 대칭 사진을, 야무나 강 건너 메흐탑 바그에서는 반영 사진을 찍을 수 있습니다.",
    tips: [
      "금요일은 휴무입니다. 반드시 일정에서 제외하세요.",
      "일출 입장이 인파가 가장 적고 빛이 가장 아름답습니다.",
      "삼각대, 음식물, 큰 가방은 반입 금지입니다.",
      "정문 가이드는 공인 여부(ID)를 확인 후 고용하세요.",
    ],
  },

  // ===== JAIPUR =====
  "india/delhi-north/jaipur/amber-fort": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "자이푸르 북쪽 11km, 아라발리 산맥 위에 세워진 웅장한 라자푸트-무굴 혼합 양식의 궁전 요새. 16세기에 건설이 시작되어 150년에 걸쳐 완성되었으며, 거울의 방(쉬시 마할)은 인도에서 가장 아름다운 궁전 내부 중 하나입니다.",
    history: "1592년 마하라자 만 싱 1세가 건설을 시작했으며, 이후 자이 싱 1세, 사와이 자이 싱 2세가 증축했습니다. 1727년 수도가 자이푸르로 옮겨지기 전까지 카치와하 라자푸트 왕조의 궁전이었습니다.",
    visitInfo: {
      hours: "매일 08:00~17:30",
      admission: "외국인 ₹550, 인도인 ₹100 (컴포짓 티켓 ₹900)",
      address: "Devisinghpura, Amer, Jaipur, 302001",
    },
    highlights: [
      "쉬시 마할(거울의 방) - 수천 개의 작은 거울이 촛불 하나로 별하늘을 만듦",
      "가네시 폴(코끼리 문) - 정교한 프레스코 벽화",
      "마오타 호수와 요새의 반영",
      "성벽에서 바라본 자이가르 포트와 아라발리 산맥 전경",
    ],
    nearbyAttractions: ["자이가르 포트", "나하르가르 포트", "마오타 호수"],
    photoTips: "오전에 방문하면 정면이 순광이 됩니다. 마오타 호수에 비친 반영 사진은 입구 도로에서 촬영하세요.",
    tips: [
      "컴포짓 티켓으로 자이가르 포트와 함께 방문하면 할인됩니다.",
      "코끼리 대신 지프(₹500)를 이용하면 빠르고 동물 복지에도 기여합니다.",
      "쉬시 마할에서 손전등을 켜면 거울 효과를 체험할 수 있습니다.",
    ],
  },
  "india/delhi-north/jaipur/hawa-mahal": {
    heroGradient: "from-pink-400 to-rose-600",
    description: "1799년 마하라자 사와이 프라탑 싱이 건설한 '바람의 궁전'. 953개의 작은 창문(자로카)이 있는 벌집 모양의 5층 분홍색 사암 건축물로, 궁중 여성들이 거리를 내려다볼 수 있도록 설계되었습니다.",
    history: "라자푸트 전통에 따라 궁중 여성(제나나)이 바깥세상을 구경하되 외부에서 보이지 않도록 건설되었습니다. 건물 두께는 불과 1피트로, 실제 궁전이라기보다 정교한 스크린에 가깝습니다.",
    visitInfo: {
      hours: "매일 09:00~16:30",
      admission: "외국인 ₹200, 인도인 ₹50",
      address: "Hawa Mahal Rd, Badi Choupad, Pink City, Jaipur, 302002",
    },
    highlights: [
      "953개의 벌집 모양 창문(자로카)",
      "분홍색 사암의 정면 파사드 (두께 1피트)",
      "최상층에서 시티 팰리스와 잔타르 만타르 조망",
      "맞은편 카페에서 바라본 전체 정면 뷰",
    ],
    nearbyAttractions: ["시티 팰리스", "잔타르 만타르", "조하리 바자르"],
    photoTips: "건물 정면 사진은 맞은편 Wind View Cafe 루프탑에서 찍는 것이 최고입니다. 오전이 순광입니다.",
    tips: [
      "건물 내부보다 정면 외관이 핵심이니 맞은편에서 사진을 먼저 찍으세요.",
      "시티 팰리스, 잔타르 만타르와 도보 거리이니 함께 방문하세요.",
      "이른 아침 거리가 한산할 때 정면 사진이 가장 좋습니다.",
    ],
  },

  // ===== MUMBAI =====
  "india/mumbai-west/mumbai/gateway-of-india": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "1924년 완공된 뭄바이의 상징적 기념물. 영국 국왕 조지 5세와 메리 왕비의 1911년 인도 방문을 기념해 건설된 26m 높이의 아치형 구조물로, 인도-사라센 양식의 걸작입니다.",
    history: "1911년 영국 국왕 조지 5세의 방문을 기념해 건설이 시작되어 1924년 완공되었습니다. 아이러니하게도 1948년 마지막 영국군이 인도를 떠날 때 이 문을 통과했습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Apollo Bandar, Colaba, Mumbai, 400001",
    },
    highlights: [
      "26m 높이의 아치형 현무암 구조물",
      "아라비아해를 바라보는 탁 트인 전망",
      "인접한 타지마할 팰리스 호텔과의 조화",
      "엘레판타 섬행 페리 출발점",
    ],
    nearbyAttractions: ["타지마할 팰리스 호텔", "콜라바 코즈웨이", "뭄바이 국립 박물관"],
    photoTips: "일몰 시간에 아라비아해를 배경으로 촬영하면 가장 아름답습니다. 타지마할 팰리스 호텔과 함께 넣으면 뭄바이의 아이코닉한 사진이 됩니다.",
    tips: [
      "저녁에 조명이 켜진 모습도 아름다우니 일몰~야간에 방문을 추천합니다.",
      "엘레판타 섬 페리(₹200)는 이곳에서 출발하니 함께 일정을 잡으세요.",
      "주말과 공휴일에는 매우 혼잡합니다.",
    ],
  },
  "india/mumbai-west/mumbai/dharavi-tour": {
    heroGradient: "from-gray-500 to-slate-700",
    description: "아시아 최대 규모의 비공식 정착촌(약 100만명 거주)이자 연간 10억 달러 이상의 경제를 창출하는 산업 허브. 사회적 기업이 운영하는 워킹 투어를 통해 인도 도시 경제의 이면을 깊이 있게 이해할 수 있습니다.",
    visitInfo: {
      hours: "투어: 매일 09:00~17:00 (여러 시간대)",
      admission: "투어 비용 약 ₹1,000~2,000 (단체에 따라 상이)",
      address: "Dharavi, Mumbai, 400017",
      website: "https://www.realitytoursandtravel.com",
    },
    highlights: [
      "가죽, 도자기, 재활용 등 다양한 소규모 산업 관찰",
      "지역 주민들의 기업가 정신과 커뮤니티 연대",
      "투어 수익이 지역 교육·의료 프로그램에 환원",
      "미디어가 보여주지 않는 실제 다라비의 활력",
    ],
    nearbyAttractions: ["마힘 요새", "시온 포트", "다라비 로컬 마켓"],
    tips: [
      "Reality Tours & Travel 등 수익을 지역사회에 환원하는 단체를 이용하세요.",
      "사진 촬영은 투어 가이드 지시에 따르세요. 일부 구역은 촬영 금지입니다.",
      "편한 신발과 가벼운 복장을 추천합니다.",
    ],
  },

  // ===== VARANASI =====
  "india/varanasi-east/varanasi/ganges-ghats": {
    heroGradient: "from-orange-500 to-amber-800",
    description: "갠지스강변을 따라 7km에 걸쳐 80개 이상의 가트(계단식 강변)가 이어지는 바라나시의 심장부. 힌두교도의 목욕 의식, 화장 의식, 그리고 매일 저녁 수천 개의 불꽃이 타오르는 장엄한 갠가 아르띠 의식이 펼쳐지는 인도에서 가장 영적인 장소입니다.",
    history: "3000년 이상의 역사를 가진 세계에서 가장 오래된 살아있는 도시의 핵심입니다. 힌두교에서 갠지스강은 천상에서 내려온 신성한 강으로, 이곳에서 죽으면 윤회에서 벗어난다고 믿습니다.",
    visitInfo: {
      hours: "24시간 (아르띠 의식: 매일 저녁 18:30~19:30)",
      admission: "무료 (보트 투어 ₹200~500)",
      address: "Dashashwamedh Ghat, Varanasi, 221001",
    },
    highlights: [
      "갠가 아르띠 의식 - 다샤슈와메드 가트에서 매일 저녁 거행되는 불의 의식",
      "새벽 보트 투어 - 일출과 함께 목욕 의식을 관람",
      "마니카르니카 가트 - 24시간 화장이 이루어지는 힌두교 최고의 해탈 장소",
      "아씨 가트 - 남쪽 끝의 평화로운 가트로 여행자에게 인기",
    ],
    nearbyAttractions: ["카시 비슈와나트 사원", "사르나트", "라므나가르 포트"],
    photoTips: "새벽 보트에서 촬영하면 안개 속 가트와 일출의 신비로운 사진을 담을 수 있습니다. 화장터(마니카르니카 가트)에서는 절대 사진을 찍지 마세요.",
    tips: [
      "새벽 5시 보트 투어(₹200~300)는 바라나시 여행의 하이라이트입니다.",
      "아르띠 의식은 30분 전에 도착해야 좋은 자리를 잡을 수 있습니다.",
      "화장터에서는 사진 촬영 금지이며, 현지 관습을 존중하세요.",
      "자칭 '가이드'의 호객행위에 주의하세요. 공인 가이드만 이용하세요.",
    ],
  },

  // ===== UDAIPUR =====
  "india/rajasthan/udaipur/city-palace-udaipur": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "피촐라 호수변에 400년에 걸쳐(1559~1959) 건설된 라자스탄 최대의 궁전 복합체. 11개의 소궁전이 하나로 연결된 거대한 구조물로, 호수와 아라발리 산맥의 파노라마 전경이 압도적입니다.",
    history: "1559년 우다이 싱 2세가 건설을 시작한 이래 22대에 걸친 메와르 왕조의 마하라나들이 증축했습니다. 인도에서 가장 오래 존속한 왕조의 거처이자, 현재까지 메와르 왕가가 일부를 거주지로 사용하고 있습니다.",
    visitInfo: {
      hours: "매일 09:30~17:30",
      admission: "외국인 ₹300, 인도인 ₹30 (박물관 추가 ₹250)",
      address: "City Palace Complex, Old City, Udaipur, 313001",
      website: "https://www.eternalmewar.in",
    },
    highlights: [
      "피촐라 호수와 레이크 팰리스의 파노라마 전망",
      "모르 촉(공작 마당) - 유리 모자이크 공작 벽화",
      "크리시나 빌라스 - 세밀화 컬렉션",
      "아마르 빌라스 - 거울과 타일로 장식된 호화로운 방",
    ],
    nearbyAttractions: ["피촐라 호수", "재그디쉬 사원", "바고레 키 하벨리"],
    photoTips: "최상층 테라스에서 일몰 시간에 피촐라 호수와 레이크 팰리스를 바라보는 사진이 최고입니다.",
    tips: [
      "최소 2~3시간은 여유를 갖고 둘러보세요.",
      "궁전 내부 가이드 투어(영어)가 매우 유익합니다.",
      "일몰 전에 최상층 테라스에 올라가면 호수의 황금빛 뷰를 감상할 수 있습니다.",
    ],
  },

  // ===== GOA =====
  "india/mumbai-west/goa/old-goa-churches": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "16~17세기 포르투갈 식민지 시절에 건설된 바로크·마누엘 양식의 교회 및 수도원군. 유네스코 세계유산으로, 봄 제수스 성당에는 예수회 선교사 성 프란시스 하비에르의 유해가 안치되어 있습니다.",
    history: "1510년 포르투갈이 고아를 점령한 후 동양 선교의 거점으로 삼았습니다. 전성기에는 '동양의 로마'로 불리며 리스본을 능가하는 화려한 도시였으나, 17세기 전염병으로 쇠락하여 수도가 파나지로 이전되었습니다.",
    visitInfo: {
      hours: "매일 09:00~17:00 (세 성당: 월~토 07:30~18:00)",
      admission: "무료",
      address: "Old Goa, North Goa, 403402",
    },
    highlights: [
      "봄 제수스 성당 - 성 프란시스 하비에르의 은관 속 유해",
      "세 성당(Se Cathedral) - 아시아 최대의 교회 중 하나",
      "성 프란시스 아시시 교회 - 포르투갈 마누엘 양식의 걸작",
      "성 카예탄 교회 - 로마 성 베드로 성당을 모방한 건축",
    ],
    nearbyAttractions: ["파나지 라틴 쿼터", "만도비 강 크루즈", "스파이스 플랜테이션"],
    photoTips: "봄 제수스 성당의 붉은 외관은 오전 순광에서 가장 아름답습니다.",
    tips: [
      "봄 제수스 성당과 세 성당은 도보 5분 거리이니 함께 방문하세요.",
      "교회 내부에서는 조용히 하고 복장 규정(어깨·무릎 가리기)을 지키세요.",
      "파나지에서 버스로 약 30분이면 올드 고아에 도착합니다.",
    ],
  },

  // ===== KERALA =====
  "india/south/kerala/kerala-backwaters": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "케랄라 남서부에 900km에 걸쳐 펼쳐진 호수, 운하, 강, 석호의 네트워크. 전통 하우스보트(케투발람)에서 1박하며 야자수 숲, 논, 작은 마을을 지나는 것은 인도 여행 최고의 체험 중 하나입니다.",
    history: "고대부터 향신료 무역의 수로로 사용되었으며, 현재까지 지역 주민의 생활과 교통의 핵심입니다. 전통 벼농사와 코이어(코코넛 섬유) 산업이 백워터 주변에서 이어지고 있습니다.",
    visitInfo: {
      hours: "하우스보트: 보통 12:00 체크인~다음날 09:00 체크아웃",
      admission: "하우스보트 1박 ₹6,000~15,000 (시즌·등급에 따라 상이)",
      address: "Alleppey (Alappuzha), Kerala, 688012",
    },
    highlights: [
      "전통 하우스보트(케투발람) 1박 크루즈",
      "야자수 숲 사이 좁은 운하 통과",
      "벰바나드 호수의 광활한 수면",
      "카누 투어로 좁은 수로의 마을 생활 체험",
      "선상에서 즐기는 신선한 케랄라 해산물 식사",
    ],
    nearbyAttractions: ["알레피 비치", "마리 비치", "쿠마라콤 조류 보호구역"],
    photoTips: "새벽과 일몰 시간에 물 위에 비친 야자수 실루엣이 가장 아름답습니다. 카누 투어에서 좁은 수로의 생활상을 담을 수 있습니다.",
    tips: [
      "성수기(12~1월)에는 최소 1~2주 전에 하우스보트를 예약하세요.",
      "알레피~쿨란 구간이 가장 풍경이 아름답습니다.",
      "프라이빗 하우스보트보다 공동 보트가 훨씬 저렴합니다.",
      "카누/카약 투어(반나절)도 하우스보트만큼 추천합니다.",
    ],
  },

  // ===== JODHPUR =====
  "india/rajasthan/jodhpur/mehrangarh-fort": {
    heroGradient: "from-blue-600 to-indigo-800",
    description: "125m 높이의 수직 절벽 위에 세워진 인도에서 가장 웅장하고 잘 보존된 요새 중 하나. 1459년 라오 조다가 건설을 시작했으며, 요새 아래로 파란색 구시가지(블루시티)가 펼쳐지는 전경은 인도에서 가장 인상적인 스카이라인입니다.",
    history: "1459년 조드푸르를 건설한 라오 조다가 기존 만도르에서 수도를 옮기며 건설했습니다. 500년 이상 메와르 왕조의 난공불락 요새로 기능했으며, 7개의 문에는 당시 전투의 흔적이 남아있습니다.",
    visitInfo: {
      hours: "매일 09:00~17:00",
      admission: "외국인 ₹600, 인도인 ₹100 (오디오 가이드 포함)",
      address: "The Fort, Jodhpur, 342006",
      website: "https://www.mehrangarh.org",
    },
    highlights: [
      "블루시티 파노라마 전망 - 요새 성벽에서 내려다보는 파란색 구시가지",
      "푸울 마할(꽃의 방) - 금박과 세밀화로 장식된 방",
      "쉬시 마할(거울의 방) - 벽면의 거울 장식",
      "요새 박물관 - 왕가의 가마, 무기, 의상 컬렉션",
      "집라인 체험 - 요새 성벽을 따라 6개 구간 비행",
    ],
    nearbyAttractions: ["자스완트 타다", "사르다르 시장", "움메이드 바완 궁전"],
    photoTips: "일몰 시간에 성벽에서 블루시티를 내려다보는 사진이 조드푸르 최고의 뷰입니다. 반대로 도시에서 올려다보는 요새 사진은 자스완트 타다 근처가 좋습니다.",
    tips: [
      "입장료에 오디오 가이드가 포함되어 있으니 반드시 받으세요. 매우 훌륭합니다.",
      "집라인(Flying Fox)은 별도 예약이 필요합니다.",
      "오전 이른 시간이 인파가 적고 역광도 피할 수 있습니다.",
    ],
  },
};
