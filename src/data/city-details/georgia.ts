import type { CityDetail, AttractionDetail } from "../city-details";

export const georgiaCityDetails: Record<string, CityDetail> = {
  // ===== TBILISI =====
  "georgia/tbilisi/tbilisi": {
    heroGradient: "from-amber-600 to-rose-800",
    description:
      "코카서스의 보석이라 불리는 조지아의 수도. 구시가지의 유황 온천, 나리칼라 요새, 현대적 평화의 다리가 공존하며, 독특한 와인 문화와 따뜻한 환대로 전 세계 여행자를 매료시키는 도시입니다.",
    bestTime: "5~6월, 9~10월 (여름은 무더울 수 있음)",
    stayArea: "올드 타운 / 루스타벨리 대로 주변",
    transport: "지하철 2개 노선, 버스, 케이블카",
    districts: [
      {
        name: "올드 타운",
        nameEn: "Old Town",
        description:
          "유황 온천 지구와 나리칼라 요새 아래로 펼쳐진 구시가지. 좁은 골목과 발코니 달린 전통 가옥이 매력적입니다.",
        highlights: ["유황 온천 지구", "나리칼라 요새", "시오니 대성당", "메테히 교회"],
      },
      {
        name: "루스타벨리",
        nameEn: "Rustaveli",
        description:
          "조지아의 샹젤리제로 불리는 메인 대로. 오페라 하우스, 국립 박물관, 의회 건물이 위치한 문화 중심지.",
        highlights: ["루스타벨리 대로", "오페라 하우스", "조지아 국립박물관", "자유 광장"],
      },
      {
        name: "마르자니시빌리",
        nameEn: "Marjanishvili",
        description:
          "쿠라 강 서쪽의 트렌디한 지역. 현지인이 즐겨 찾는 카페, 와인 바, 레스토랑이 밀집해 있습니다.",
        highlights: ["드라이 브리지 벼룩시장", "파브리카 호스텔", "현지 와인 바 거리"],
      },
    ],
    attractions: [
      {
        name: "올드 타운 & 유황 온천",
        nameEn: "Old Town & Sulfur Baths",
        description:
          "트빌리시의 이름 자체가 '따뜻한 샘'이란 뜻. 벽돌 돔 모양의 전통 온천에서 유황 목욕을 즐길 수 있습니다.",
        category: "온천/지구",
        tip: "크로마 바스가 가장 유명하며 개인실 사전 예약을 추천합니다.",
      },
      {
        name: "나리칼라 요새",
        nameEn: "Narikala Fortress",
        description:
          "4세기에 건설된 고대 요새로 트빌리시 구시가지와 쿠라 강의 전경을 한눈에 담을 수 있는 최고의 전망 포인트.",
        category: "요새",
        tip: "케이블카로 쉽게 올라갈 수 있으며 일몰 시간대가 가장 아름답습니다.",
      },
      {
        name: "루스타벨리 대로",
        nameEn: "Rustaveli Avenue",
        description:
          "트빌리시의 중심 대로로 오페라 하우스, 국립 미술관, 의회 건물 등 주요 건축물이 늘어서 있습니다.",
        category: "거리",
        tip: "자유 광장에서 시작해 걸으며 양쪽 건물을 감상하세요.",
      },
      {
        name: "평화의 다리",
        nameEn: "Bridge of Peace",
        description:
          "이탈리아 건축가가 설계한 유리와 강철의 현대적 보행 다리. 야간 LED 조명이 쿠라 강 위에 아름답게 반사됩니다.",
        category: "랜드마크",
      },
      {
        name: "시오니 대성당",
        nameEn: "Sioni Cathedral",
        description:
          "6세기에 건립된 조지아 정교회의 역사적 대성당. 성 니노의 포도나무 십자가가 보관되어 있습니다.",
        category: "성당",
      },
      {
        name: "드라이 브리지 마켓",
        nameEn: "Dry Bridge Market",
        description:
          "소련 시대 유물, 골동품, 그림, 수공예품을 판매하는 야외 벼룩시장. 독특한 기념품을 찾기 좋습니다.",
        category: "시장",
        tip: "가격 흥정이 가능하며 주말에 물건이 더 풍부합니다.",
      },
    ],
    dayTrips: [
      {
        name: "므츠헤타",
        nameEn: "Mtskheta",
        description:
          "조지아의 고대 수도이자 유네스코 세계유산 도시. 즈바리 수도원과 스베티츠호벨리 대성당이 유명.",
        travelTime: "마슈룻카(미니버스) 약 30분",
        gradient: "from-emerald-500 to-green-800",
      },
      {
        name: "카즈베기",
        nameEn: "Kazbegi",
        description:
          "코카서스 산맥의 장엄한 자연과 게르게티 삼위일체 교회가 있는 산악 마을.",
        travelTime: "마슈룻카 약 3시간 (군용도로 경유)",
        gradient: "from-sky-500 to-slate-800",
      },
    ],
    localFood: [
      {
        name: "힌칼리",
        description:
          "고기 육즙 가득한 조지아식 만두. 꼭지를 잡고 먹는 것이 정석입니다.",
        emoji: "🥟",
      },
      {
        name: "하차푸리",
        description:
          "치즈를 듬뿍 넣은 조지아식 치즈빵. 아자리안 스타일(계란+버터)이 가장 인기.",
        emoji: "🧀",
      },
      {
        name: "므츠바디",
        description:
          "포도나무 숯불에 구운 조지아식 꼬치구이(샤슬릭). 와인과 최고의 궁합.",
        emoji: "🍖",
      },
    ],
    tips: [
      "조지아 와인은 8,000년 역사를 가진 세계 최고(最古) 와인으로, 크베브리(토기) 와인을 꼭 맛보세요.",
      "택시는 Bolt 앱을 이용하면 바가지 걱정 없이 저렴하게 이동 가능합니다.",
      "유황 온천은 밤에도 영업하니 저녁 관광 후 방문하기 좋습니다.",
      "영어가 잘 통하지 않는 곳이 많으니 구글 번역 앱을 미리 준비하세요.",
    ],
  },

  // ===== COUNTRYSIDE =====
  "georgia/countryside/kazbegi": {
    heroGradient: "from-sky-500 to-slate-800",
    description:
      "코카서스 산맥 해발 1,750m에 자리한 산악 마을(정식 명칭 스텝판츠민다). 만년설 덮인 카즈베기 산(5,047m)을 배경으로 한 게르게티 삼위일체 교회의 풍경은 조지아 여행의 하이라이트입니다.",
    bestTime: "6~9월 (겨울엔 군용도로 폐쇄 가능)",
    stayArea: "스텝판츠민다 마을 중심부",
    transport: "트빌리시 디두베 버스터미널에서 마슈룻카 약 3시간",
    districts: [
      {
        name: "스텝판츠민다",
        nameEn: "Stepantsminda",
        description:
          "게스트하우스와 카페가 모여 있는 마을 중심부. 카즈베기 산을 바라보며 트레킹의 출발지.",
        highlights: ["게르게티 삼위일체 교회", "카즈베기 산 전망", "지역 박물관"],
      },
    ],
    attractions: [
      {
        name: "게르게티 삼위일체 교회",
        nameEn: "Gergeti Trinity Church",
        description:
          "해발 2,170m 산꼭대기에 홀로 서 있는 14세기 교회. 카즈베기 산을 배경으로 한 장면은 조지아를 대표하는 아이콘입니다.",
        category: "교회",
        tip: "도보 약 1.5~2시간 또는 4WD 차량으로 올라갈 수 있습니다. 오전에 구름이 적어 전망이 좋습니다.",
      },
      {
        name: "트루소 계곡",
        nameEn: "Truso Valley",
        description:
          "미네랄 호수와 폐허 마을이 있는 비경의 트레킹 코스. 남오세티아 국경 근처의 숨겨진 보석.",
        category: "자연",
        tip: "왕복 약 5~6시간 트레킹이며 물과 간식을 넉넉히 챙기세요.",
      },
      {
        name: "군용도로 전망 포인트",
        nameEn: "Georgian Military Highway Viewpoints",
        description:
          "트빌리시에서 카즈베기로 향하는 군용도로는 그 자체가 절경. 구다우리 전망대와 우정의 기념비가 유명합니다.",
        category: "전망대",
      },
    ],
    dayTrips: [
      {
        name: "구다우리",
        nameEn: "Gudauri",
        description: "코카서스의 대표 스키 리조트. 겨울엔 스키, 여름엔 패러글라이딩 명소.",
        travelTime: "차량 약 1시간",
        gradient: "from-blue-400 to-indigo-700",
      },
    ],
    localFood: [
      {
        name: "쿠다리 힌칼리",
        description:
          "카즈베기 지방 스타일의 힌칼리. 산악 지역 특유의 향신료가 더해집니다.",
        emoji: "🥟",
      },
      {
        name: "카즈베기 맥주",
        description: "조지아 대표 맥주 브랜드. 산 경치를 보며 마시는 한 잔은 특별합니다.",
        emoji: "🍺",
      },
    ],
    tips: [
      "게르게티 교회까지 도보 트레킹 시 운동화 이상의 등산 신발을 준비하세요.",
      "날씨 변화가 심하므로 여름에도 방풍 재킷과 겹쳐 입을 옷을 챙기세요.",
      "마을에 ATM이 적으므로 현금(GEL)을 미리 준비하세요.",
    ],
  },
  "georgia/countryside/mtskheta": {
    heroGradient: "from-emerald-500 to-green-800",
    description:
      "기원전 3세기부터 조지아의 수도였던 고대 도시. 유네스코 세계유산으로 지정된 스베티츠호벨리 대성당과 즈바리 수도원은 조지아 기독교 역사의 중심지이며, 트빌리시에서 30분 거리로 당일치기 여행지로 최적입니다.",
    bestTime: "4~10월",
    stayArea: "므츠헤타 구시가지 (당일치기 추천)",
    transport: "트빌리시 디두베역에서 마슈룻카 약 20~30분",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town",
        description:
          "스베티츠호벨리 대성당을 중심으로 한 유서 깊은 마을. 기념품 상점과 카페가 늘어선 아담한 거리.",
        highlights: ["스베티츠호벨리 대성당", "기념품 거리", "아라그비 강변"],
      },
      {
        name: "즈바리 언덕",
        nameEn: "Jvari Hill",
        description:
          "므츠헤타 마을이 한눈에 내려다보이는 언덕 위의 즈바리 수도원. 두 강의 합류 지점 전망이 압권.",
        highlights: ["즈바리 수도원", "아라그비-쿠라 강 합류 전망"],
      },
    ],
    attractions: [
      {
        name: "즈바리 수도원",
        nameEn: "Jvari Monastery",
        description:
          "6세기에 건립된 조지아 초기 기독교 건축의 걸작. 언덕 위에서 므츠헤타 시가지와 두 강의 합류를 내려다보는 전망이 장관입니다.",
        category: "수도원",
        tip: "택시 또는 투어로 방문해야 하며 도보로는 올라가기 어렵습니다.",
      },
      {
        name: "스베티츠호벨리 대성당",
        nameEn: "Svetitskhoveli Cathedral",
        description:
          "11세기에 재건된 조지아 정교회 최고의 성당. 예수의 겉옷이 묻혔다는 전설이 전해집니다.",
        category: "성당",
        tip: "노출이 심한 복장은 입장이 제한되니 스카프를 준비하세요.",
      },
      {
        name: "삼타브로 수도원",
        nameEn: "Samtavro Monastery",
        description:
          "조지아에 기독교를 전파한 성 니노와 미리안 왕이 묻힌 역사적 수도원.",
        category: "수도원",
      },
    ],
    dayTrips: [
      {
        name: "트빌리시",
        nameEn: "Tbilisi",
        description: "조지아의 수도. 올드 타운, 유황 온천, 나리칼라 요새 등 볼거리 풍부.",
        travelTime: "마슈룻카 약 30분",
        gradient: "from-amber-600 to-rose-800",
      },
      {
        name: "고리",
        nameEn: "Gori",
        description:
          "스탈린의 고향으로 스탈린 박물관과 우플리스치케 동굴 도시가 유명.",
        travelTime: "마슈룻카 약 40분",
        gradient: "from-stone-400 to-stone-700",
      },
    ],
    localFood: [
      {
        name: "로비아니",
        description: "강낭콩 페이스트를 넣은 조지아식 빵. 므츠헤타 길거리 간식으로 인기.",
        emoji: "🫘",
      },
      {
        name: "츠쿠알리 소스",
        description:
          "덜 익은 자두로 만든 새콤한 조지아 전통 소스. 고기 요리에 곁들여 먹습니다.",
        emoji: "🍖",
      },
    ],
    tips: [
      "트빌리시에서 당일치기로 방문하기 가장 좋은 여행지입니다.",
      "즈바리 수도원은 대중교통이 없으므로 택시(왕복 약 20~30 GEL)를 이용하세요.",
      "교회 입장 시 여성은 머리 스카프, 남성은 긴바지를 착용해야 합니다.",
    ],
  },
  "georgia/countryside/batumi": {
    heroGradient: "from-cyan-500 to-blue-800",
    description:
      "흑해 연안의 아열대 휴양 도시. 현대적 건축물과 야자수 해변, 화려한 야경이 어우러진 조지아 제2의 도시로, 올드 타운의 매력과 해변 리조트의 여유를 동시에 즐길 수 있습니다.",
    bestTime: "6~9월 (해수욕 시즌)",
    stayArea: "바투미 불바드 / 올드 타운 주변",
    transport: "트빌리시에서 기차 약 5시간 또는 비행기 약 1시간",
    districts: [
      {
        name: "올드 타운",
        nameEn: "Old Town",
        description:
          "좁은 골목과 색색의 건물, 카페와 레스토랑이 밀집한 바투미의 역사적 중심지.",
        highlights: ["피아짜 광장", "천문시계탑", "메데아 동상"],
      },
      {
        name: "뉴 불바드",
        nameEn: "New Boulevard",
        description:
          "해안선을 따라 조성된 현대적 해변 산책로. 기발한 조형물과 야간 분수쇼가 명물.",
        highlights: ["알파벳 타워", "바투미 불바드", "야간 분수쇼"],
      },
    ],
    attractions: [
      {
        name: "바투미 불바드",
        nameEn: "Batumi Boulevard",
        description:
          "7km에 걸쳐 흑해 해안을 따라 조성된 해변 산책로. 자전거 도로, 카페, 조형물이 늘어서 있으며 바투미의 상징입니다.",
        category: "해변/산책로",
        tip: "자전거 대여(약 5 GEL/시간)로 전 구간을 편하게 둘러볼 수 있습니다.",
      },
      {
        name: "알파벳 타워",
        nameEn: "Alphabet Tower",
        description:
          "조지아 고유 알파벳 33자를 형상화한 130m 높이의 타워. 전망대와 회전 레스토랑이 있습니다.",
        category: "랜드마크",
      },
      {
        name: "피아짜 광장",
        nameEn: "Piazza Square",
        description:
          "이탈리아 건축 양식으로 꾸며진 아담한 광장. 모자이크 장식과 카페가 유럽 분위기를 자아냅니다.",
        category: "광장",
        tip: "저녁에 조명이 켜지면 가장 분위기가 좋습니다.",
      },
      {
        name: "알리와 니노 동상",
        nameEn: "Ali and Nino Statue",
        description:
          "매일 저녁 움직이며 만났다 헤어지는 남녀 동상. 바투미 해변의 낭만적 랜드마크.",
        category: "조형물",
      },
    ],
    dayTrips: [
      {
        name: "바투미 식물원",
        nameEn: "Batumi Botanical Garden",
        description:
          "흑해가 내려다보이는 언덕 위의 아열대 식물원. 9개 테마 구역으로 구성.",
        travelTime: "마슈룻카 약 30분",
        gradient: "from-green-400 to-emerald-700",
      },
    ],
    localFood: [
      {
        name: "아자리안 하차푸리",
        description:
          "배 모양 빵에 치즈, 계란, 버터를 올린 바투미 대표 음식. 빵을 찢어 비벼 먹습니다.",
        emoji: "🍳",
      },
      {
        name: "보르자키",
        description: "겉은 바삭하고 속은 치즈가 가득한 조지아식 튀김빵. 아차르 지방 간식.",
        emoji: "🫓",
      },
      {
        name: "흑해 생선구이",
        description:
          "흑해에서 잡은 신선한 생선을 숯불에 구운 바투미 해변 별미.",
        emoji: "🐟",
      },
    ],
    tips: [
      "바투미는 아열대 기후로 여름에 습도가 높으니 가벼운 옷차림을 준비하세요.",
      "올드 타운에서 불바드까지 도보로 이동 가능하며 대부분의 명소가 걸어서 닿는 거리입니다.",
      "야간에 해변 산책로의 조명과 분수쇼가 특히 아름다우니 꼭 저녁 산책을 즐기세요.",
      "터키 국경(사르피)까지 30분 거리로 당일 국경 넘기도 가능합니다.",
    ],
  },
};

export const georgiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== TBILISI ATTRACTIONS =====
  "georgia/tbilisi/tbilisi/old-town-sulfur-baths": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "트빌리시의 이름 자체가 고대 조지아어로 '따뜻한'이라는 뜻에서 유래했을 만큼, 유황 온천은 이 도시의 정체성 그 자체입니다. 벽돌 돔 모양의 전통 목욕탕이 늘어선 아바노투바니 지구에서 수백 년 이어져 온 온천 문화를 체험할 수 있습니다.",
    history:
      "전설에 따르면 바흐탕 고르가살리 왕이 사냥 중 매가 뜨거운 온천수에 빠져 상처가 나은 것을 보고 이곳에 수도를 건설했다고 합니다. 이후 유황 온천은 트빌리시 사회 문화의 중심이 되었으며, 알렉산드르 뒤마와 알렉산드르 푸시킨도 방문한 기록이 있습니다.",
    visitInfo: {
      hours: "24시간 영업 (시설에 따라 상이)",
      admission: "공용실 약 3~5 GEL, 개인실 약 50~150 GEL",
      address: "Abano Street, Abanotubani, Tbilisi",
    },
    highlights: [
      "벽돌 돔 지붕의 전통 목욕탕 건축 감상",
      "유황 온천수에서의 힐링 목욕 체험",
      "때밀이(마사지) 서비스 체험",
      "아바노투바니 골목의 이국적 분위기 산책",
    ],
    nearbyAttractions: [
      "나리칼라 요새 (도보 10분)",
      "시오니 대성당 (도보 5분)",
      "레기스탄 폭포 (도보 3분)",
    ],
    photoTips:
      "벽돌 돔 지붕이 나란히 보이는 앵글이 가장 인기 있으며, 위쪽 나리칼라 요새에서 내려다보면 돔 전체를 담을 수 있습니다.",
    tips: [
      "크로마 바스(Chreli Abano)가 가장 유명하며 외관의 타일 장식이 아름답습니다.",
      "개인실은 사전 예약을 권장하며, 주말에는 특히 빨리 마감됩니다.",
      "때밀이(마사지) 서비스는 추가 비용(약 10~20 GEL)이며 강도가 셀 수 있습니다.",
      "수건과 슬리퍼를 제공하지 않는 곳도 있으니 챙겨가면 편합니다.",
    ],
  },
  "georgia/tbilisi/tbilisi/narikala-fortress": {
    heroGradient: "from-stone-500 to-stone-800",
    description:
      "4세기에 처음 건설되어 수차례 확장된 트빌리시의 상징적 요새. 쿠라 강 위 가파른 절벽에 서 있으며, 구시가지와 현대 도시의 파노라마를 360도로 감상할 수 있는 트빌리시 최고의 전망 포인트입니다.",
    history:
      "4세기 페르시아 제국 시절 슈리스-츠이케(Shuris-Tsikhe, '부러워할 요새')로 불리며 건설되었습니다. 이후 아랍, 몽골, 페르시아, 오스만 등 수많은 지배 세력에 의해 확장되었으며, 1827년 화약고 폭발로 큰 손상을 입었으나 현재도 성벽과 교회가 남아 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (무료)",
      admission: "무료 (케이블카 왕복 약 2.5 GEL)",
      address: "Narikala Fortress, Old Tbilisi",
    },
    highlights: [
      "트빌리시 구시가지와 쿠라 강의 360도 파노라마 전망",
      "요새 내부의 성 니콜라스 교회 (1996년 복원)",
      "리케 공원에서 출발하는 케이블카 탑승",
      "일몰 시 황금빛으로 물드는 도시 풍경",
    ],
    nearbyAttractions: [
      "유황 온천 지구 (도보 10분)",
      "조지아의 어머니 동상 (도보 5분)",
      "식물원 (도보 5분)",
    ],
    photoTips:
      "일몰 시간에 방문하면 황금빛으로 물드는 트빌리시 전경과 쿠라 강의 반영을 담을 수 있습니다. 케이블카에서도 좋은 앵글을 얻을 수 있습니다.",
    tips: [
      "케이블카는 리케 공원에서 탑승하며 메트로 카드로 결제 가능합니다.",
      "요새까지 도보로도 올라갈 수 있지만 경사가 가파르니 편한 신발을 신으세요.",
      "일몰 시간대가 가장 인기 있으며, 밤에도 야경이 아름답습니다.",
      "요새 성벽에 난간이 없는 구간이 있으니 아이 동반 시 주의하세요.",
    ],
  },
  "georgia/tbilisi/tbilisi/rustaveli-avenue": {
    heroGradient: "from-indigo-500 to-purple-800",
    description:
      "12세기 조지아 시인 쇼타 루스타벨리의 이름을 딴 트빌리시의 중심 대로. 자유 광장에서 루스타벨리 광장까지 약 1.5km에 걸쳐 오페라 하우스, 국립 미술관, 의회 건물 등 조지아의 핵심 문화 기관이 위치해 있습니다.",
    visitInfo: {
      hours: "상시 개방 (개별 시설 운영시간 확인)",
      admission: "무료 (거리 산책)",
      address: "Rustaveli Avenue, Tbilisi",
    },
    highlights: [
      "조지아 국립 오페라 발레 극장의 화려한 외관",
      "조지아 국립박물관의 금세공 유물 컬렉션",
      "자유 광장의 성 게오르기 동상",
      "루스타벨리 거리의 19~20세기 절충주의 건축물",
    ],
    nearbyAttractions: [
      "자유 광장 (대로 동쪽 끝)",
      "조지아 국립박물관 (대로변)",
      "카시베티 교회 (대로변)",
    ],
    photoTips:
      "자유 광장 방향에서 대로를 따라 걸으며 양쪽 건물 파사드를 촬영하기 좋습니다. 오페라 하우스 야간 조명도 놓치지 마세요.",
    tips: [
      "자유 광장에서 시작해 서쪽으로 걸으면 주요 건물을 순서대로 만날 수 있습니다.",
      "조지아 국립박물관은 소련 점령 전시관이 인상적이며 입장료 약 15 GEL입니다.",
      "대로변의 지하 보도에 소규모 상점들이 있으니 둘러보세요.",
    ],
  },

  // ===== COUNTRYSIDE ATTRACTIONS =====
  "georgia/countryside/kazbegi/gergeti-trinity-church": {
    heroGradient: "from-sky-400 to-slate-800",
    description:
      "해발 2,170m 산꼭대기에 홀로 서 있는 14세기 조지아 정교회. 만년설 덮인 카즈베기 산(5,047m)을 배경으로 구름 위에 떠 있는 듯한 이 교회는 조지아를 상징하는 가장 유명한 이미지이며, 내셔널 지오그래픽 선정 세계 10대 절경 중 하나입니다.",
    history:
      "14세기에 건립된 이 교회는 외적의 침입 시 므츠헤타의 스베티츠호벨리 대성당에서 성물을 피신시키던 은신처 역할을 했습니다. 소련 시절 종교 탄압으로 폐쇄되었다가 조지아 독립 후 복원되어 현재도 활발히 운영 중인 수도원입니다.",
    visitInfo: {
      hours: "상시 개방 (내부는 일출~일몰)",
      admission: "무료",
      address: "Gergeti, Stepantsminda, Kazbegi Municipality",
    },
    highlights: [
      "카즈베기 산(5,047m) 배경의 교회 파노라마",
      "해발 2,170m에서 바라보는 코카서스 산맥 절경",
      "14세기 석조 건축과 프레스코 벽화",
      "맑은 날 카즈베기 빙하가 보이는 장엄한 전망",
    ],
    nearbyAttractions: [
      "카즈베기 산 트레킹 루트 (교회에서 출발)",
      "트루소 계곡 (차량 약 30분)",
      "구다우리 스키 리조트 (차량 약 1시간)",
    ],
    photoTips:
      "오전 이른 시간(7~9시)에 구름이 가장 적어 카즈베기 산과 교회를 함께 담기 좋습니다. 교회 동쪽 언덕에서 촬영하면 산과 교회를 한 프레임에 넣을 수 있습니다.",
    tips: [
      "도보 트레킹 시 약 1.5~2시간 소요되며 경사가 가파르니 등산 신발을 준비하세요.",
      "4WD 택시(편도 약 50~70 GEL)로 올라갈 수 있지만 비포장 도로라 흔들릴 수 있습니다.",
      "산 날씨가 급변하므로 방풍 재킷과 여분의 옷을 꼭 챙기세요.",
      "교회 내부 촬영은 금지되어 있으니 외관과 주변 풍경을 즐기세요.",
    ],
  },
  "georgia/countryside/mtskheta/jvari-monastery": {
    heroGradient: "from-emerald-600 to-stone-800",
    description:
      "6세기에 건립된 조지아 초기 기독교 건축의 걸작이자 유네스코 세계유산. 므츠헤타 마을이 내려다보이는 언덕 위에서 아라그비 강과 쿠라 강이 만나는 장엄한 합류 지점을 감상할 수 있습니다.",
    history:
      "4세기에 조지아에 기독교를 전파한 성 니노가 이교도 신전을 허물고 나무 십자가(즈바리)를 세운 자리에 6세기 건축가들이 교회를 건립했습니다. 테트라콘치(사면 반원형) 양식의 이 건축물은 이후 조지아 교회 건축의 표준이 되었습니다.",
    visitInfo: {
      hours: "08:00~20:00 (계절에 따라 변동)",
      admission: "무료",
      address: "Jvari Monastery, Mtskheta, Mtskheta-Mtianeti",
    },
    highlights: [
      "아라그비 강과 쿠라 강의 합류 지점 파노라마 전망",
      "6세기 테트라콘치 양식의 건축미",
      "므츠헤타 마을과 스베티츠호벨리 대성당 조감",
      "성 니노의 십자가 전설이 깃든 역사적 장소",
    ],
    nearbyAttractions: [
      "스베티츠호벨리 대성당 (차량 약 10분)",
      "삼타브로 수도원 (차량 약 15분)",
      "트빌리시 (차량 약 25분)",
    ],
    photoTips:
      "수도원 앞마당에서 아래를 내려다보면 두 강의 합류와 므츠헤타 마을을 한 장에 담을 수 있습니다. 오전 순광이 가장 좋습니다.",
    tips: [
      "대중교통이 닿지 않으므로 트빌리시 또는 므츠헤타에서 택시를 이용하세요 (약 15~20 GEL).",
      "교회 입장 시 여성은 머리 스카프를 착용해야 합니다 (입구에서 대여 가능).",
      "므츠헤타 방문과 함께 반나절 일정으로 묶으면 효율적입니다.",
      "바닥이 고르지 않으니 편한 신발을 착용하세요.",
    ],
  },
  "georgia/countryside/batumi/batumi-boulevard": {
    heroGradient: "from-cyan-400 to-blue-800",
    description:
      "흑해 해안을 따라 7km에 걸쳐 조성된 바투미의 상징적인 해변 산책로. 1881년 독일-폴란드 조경가에 의해 처음 조성되어 140년 이상의 역사를 가지며, 현대적 조형물, 자전거 도로, 카페, 놀이 시설이 어우러진 바투미 시민의 일상과 관광의 중심입니다.",
    history:
      "1881년 독일-폴란드 출신 조경가 레슬러에 의해 처음 설계되었습니다. 소련 시절에도 흑해 최고의 리조트 산책로로 사랑받았으며, 2000년대 대대적인 현대화 프로젝트를 통해 뉴 불바드 구간이 확장되어 총 7km의 해변 산책로가 완성되었습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Batumi Boulevard, Batumi, Adjara",
    },
    highlights: [
      "7km 해안 산책로를 따라 자전거 라이딩",
      "알리와 니노 움직이는 동상의 일몰 퍼포먼스",
      "야간 음악 분수쇼 (뉴 불바드)",
      "알파벳 타워와 흑해 전망",
    ],
    nearbyAttractions: [
      "알파벳 타워 (불바드 내)",
      "피아짜 광장 (도보 5분)",
      "바투미 올드 타운 (도보 10분)",
    ],
    photoTips:
      "일몰 시간에 알리와 니노 동상 근처에서 촬영하면 황금빛 흑해 배경의 인생 사진을 건질 수 있습니다. 뉴 불바드의 야간 분수쇼도 필수 촬영 포인트.",
    tips: [
      "자전거 대여(약 5 GEL/시간)로 전 구간을 편하게 둘러볼 수 있습니다.",
      "여름 주말 저녁에는 현지인과 관광객으로 매우 붐비니 오전 산책을 추천합니다.",
      "뉴 불바드의 야간 분수쇼는 무료이며 여름 저녁 9시경에 시작됩니다.",
      "불바드를 따라 간이 음식 판매대가 많으니 간식을 즐기며 산책하세요.",
    ],
  },
};
