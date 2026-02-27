import type { CityDetail, AttractionDetail } from "../city-details";

export const singaporeCityDetails: Record<string, CityDetail> = {
  // ===== CITY CENTER =====
  "singapore/city-center/marina-bay": {
    heroGradient: "from-blue-500 to-indigo-800",
    description:
      "싱가포르의 상징적인 워터프런트 지구. 마리나 베이 샌즈, 가든스 바이 더 베이, 머라이언 파크가 모여 있는 미래도시 싱가포르의 스카이라인을 대표하는 핵심 관광 지역입니다.",
    bestTime: "연중 가능 (2~4월 비교적 건조, 11~1월 우기)",
    stayArea: "마리나 베이 / 클락 키 주변",
    transport: "MRT (마리나 베이역, 베이프론트역), 버스",
    districts: [
      {
        name: "마리나 베이",
        nameEn: "Marina Bay",
        description:
          "마리나 베이 샌즈, 아트사이언스 뮤지엄, 에스플러네이드 등 싱가포르 대표 랜드마크가 밀집한 워터프런트 지구.",
        highlights: ["마리나 베이 샌즈", "아트사이언스 뮤지엄", "에스플러네이드", "헬릭스 브릿지"],
      },
      {
        name: "가든스 바이 더 베이",
        nameEn: "Gardens by the Bay",
        description:
          "슈퍼트리 그로브와 클라우드 포레스트, 플라워 돔이 자리한 101헥타르 규모의 미래형 정원.",
        highlights: ["슈퍼트리 그로브", "클라우드 포레스트", "플라워 돔"],
      },
      {
        name: "머라이언 파크",
        nameEn: "Merlion Park",
        description:
          "사자 머리에 물고기 몸통을 가진 싱가포르 상징 머라이언 동상이 서 있는 워터프런트 공원.",
        highlights: ["머라이언 동상", "풀러턴 호텔 전경", "마리나 베이 야경"],
      },
    ],
    attractions: [
      {
        name: "가든스 바이 더 베이",
        nameEn: "Gardens by the Bay",
        description:
          "슈퍼트리 그로브의 야간 조명쇼와 세계 최대 실내 폭포가 있는 클라우드 포레스트로 유명한 미래형 정원.",
        category: "정원",
        tip: "매일 19:45, 20:45 슈퍼트리 그로브 라이트쇼는 무료입니다.",
      },
      {
        name: "마리나 베이 샌즈 스카이파크",
        nameEn: "Marina Bay Sands SkyPark",
        description:
          "지상 57층, 200m 높이에서 싱가포르 도심 전경을 360도로 감상할 수 있는 전망대.",
        category: "전망대",
        tip: "일몰 시간대에 방문하면 낮과 밤의 스카이라인을 모두 감상할 수 있습니다.",
      },
      {
        name: "머라이언 파크",
        nameEn: "Merlion Park",
        description:
          "사자 머리와 물고기 몸통의 머라이언 동상이 물을 뿜는 싱가포르 대표 포토 스폿. 마리나 베이 건너편 스카이라인을 배경으로 기념사진 촬영이 필수입니다.",
        category: "랜드마크",
        tip: "야경이 아름다우니 해질녘~저녁 시간대 방문을 추천합니다.",
      },
      {
        name: "아트사이언스 뮤지엄",
        nameEn: "ArtScience Museum",
        description:
          "연꽃 모양의 독특한 건축물로 예술과 과학의 융합 전시를 선보이는 뮤지엄.",
        category: "박물관",
      },
      {
        name: "헬릭스 브릿지",
        nameEn: "Helix Bridge",
        description:
          "DNA 이중나선 구조에서 영감을 받은 보행자 전용 다리. 야간 조명이 특히 아름답습니다.",
        category: "랜드마크",
      },
      {
        name: "에스플러네이드",
        nameEn: "Esplanade – Theatres on the Bay",
        description:
          "두리안 모양의 독특한 외관으로 유명한 싱가포르 최대 공연 예술 센터.",
        category: "공연장",
      },
    ],
    dayTrips: [
      {
        name: "센토사 섬",
        nameEn: "Sentosa Island",
        description:
          "유니버설 스튜디오, S.E.A. 아쿠아리움 등 테마파크와 해변이 모인 리조트 섬.",
        travelTime: "MRT + 모노레일 약 30분",
        gradient: "from-orange-400 to-red-600",
      },
      {
        name: "주롱 새 공원",
        nameEn: "Bird Paradise",
        description:
          "아시아 최대 규모의 조류 공원으로 400종 이상의 새를 만날 수 있는 만다이 야생동물 보호구역.",
        travelTime: "MRT 약 45분",
        gradient: "from-green-400 to-emerald-700",
      },
    ],
    localFood: [
      {
        name: "칠리크랩",
        description: "달콤 매콤한 칠리 소스에 볶은 싱가포르 대표 요리. 만터우(찐빵)와 함께 소스를 찍어 먹습니다.",
        emoji: "🦀",
      },
      {
        name: "하이난 치킨라이스",
        description: "부드러운 삶은 닭고기에 닭 육수로 지은 향긋한 밥을 곁들인 국민 음식.",
        emoji: "🍗",
      },
      {
        name: "락사",
        description: "코코넛 밀크와 향신료 기반의 진한 국물에 쌀국수를 넣은 페라나칸 대표 면 요리.",
        emoji: "🍜",
      },
    ],
    tips: [
      "가든스 바이 더 베이 야외 정원과 슈퍼트리 라이트쇼는 무료입니다.",
      "마리나 베이 샌즈 스카이파크 전망대 입장료는 성인 SGD 26입니다.",
      "우기(11~1월)에도 스콜성 소나기가 짧게 내리므로 우산만 있으면 관광에 큰 지장은 없습니다.",
      "MRT 투어리스트 패스(1/2/3일권)를 구매하면 대중교통을 무제한 이용할 수 있습니다.",
    ],
  },
  "singapore/city-center/chinatown": {
    heroGradient: "from-red-500 to-rose-800",
    description:
      "19세기 중국 이민자들의 역사가 살아 숨 쉬는 거리. 화려한 숍하우스, 전통 사원, 호커 센터가 어우러져 싱가포르의 다문화 유산을 가장 생생하게 체험할 수 있는 지구입니다.",
    bestTime: "연중 가능 (1~2월 설날 기간 특별 장식)",
    stayArea: "차이나타운 / 텔록 에이어 주변",
    transport: "MRT (차이나타운역), 버스",
    districts: [
      {
        name: "파고다 스트리트",
        nameEn: "Pagoda Street",
        description:
          "차이나타운의 메인 거리로 기념품 가게, 전통 약재상, 숍하우스가 늘어선 보행자 전용 거리.",
        highlights: ["차이나타운 헤리티지 센터", "기념품 가게 거리", "야시장"],
      },
      {
        name: "텔록 에이어",
        nameEn: "Telok Ayer",
        description:
          "역사적 사원과 트렌디한 카페, 바가 공존하는 지역. 티안혹켕 사원 등 다양한 종교 건축물이 밀집.",
        highlights: ["티안혹켕 사원", "나겔 시나고그", "앤 시앙 힐"],
      },
    ],
    attractions: [
      {
        name: "차이나타운 헤리티지 센터",
        nameEn: "Chinatown Heritage Centre",
        description:
          "1950년대 중국 이민자들의 생활상을 복원한 박물관. 좁은 숍하우스 내부를 재현하여 초기 이민 역사를 생생하게 전달합니다.",
        category: "박물관",
        tip: "오디오 가이드(영어)가 포함되어 있으니 꼭 이용하세요.",
      },
      {
        name: "불아사 용화원",
        nameEn: "Buddha Tooth Relic Temple",
        description:
          "2007년에 건립된 당나라 양식의 불교 사원으로 부처의 치아 사리를 모신 곳. 4층 옥상 정원에서 차이나타운 전경을 조망할 수 있습니다.",
        category: "사원",
        tip: "무료 입장이며 복장 규정이 있으니 노출이 심한 옷은 피하세요.",
      },
      {
        name: "맥스웰 푸드 센터",
        nameEn: "Maxwell Food Centre",
        description:
          "천천 하이난 치킨라이스 등 유명 호커 스톨이 모여 있는 차이나타운의 대표 호커 센터.",
        category: "호커센터",
        tip: "천천 치킨라이스는 점심시간 전에 매진되므로 일찍 방문하세요.",
      },
    ],
    dayTrips: [
      {
        name: "센토사 섬",
        nameEn: "Sentosa Island",
        description:
          "유니버설 스튜디오와 해변 리조트가 있는 레저 아일랜드.",
        travelTime: "MRT + 모노레일 약 25분",
        gradient: "from-orange-400 to-red-600",
      },
    ],
    localFood: [
      {
        name: "바쿠테",
        description: "후추와 한약재로 우린 진한 국물에 돼지갈비를 넣어 끓인 보양식. 유조우(유탕)와 함께.",
        emoji: "🍖",
      },
      {
        name: "차궤테오",
        description: "숯불에 볶은 납작한 쌀국수에 달콤 짭짤한 간장 소스를 더한 볶음면.",
        emoji: "🍝",
      },
      {
        name: "카야 토스트",
        description: "코코넛 잼(카야)과 버터를 바른 바삭한 토스트에 반숙 달걀과 커피(코피)를 곁들이는 전통 아침 식사.",
        emoji: "🍞",
      },
    ],
    tips: [
      "차이나타운 야시장(금~일)에서 저렴한 기념품과 길거리 음식을 즐길 수 있습니다.",
      "맥스웰 푸드 센터는 현금과 카드 모두 사용 가능하지만 일부 스톨은 현금만 받습니다.",
      "설날(1~2월) 기간에는 화려한 장식과 특별 행사로 거리가 더욱 활기를 띱니다.",
    ],
  },
  "singapore/city-center/little-india": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "향신료 향과 알록달록한 건물이 이국적인 분위기를 자아내는 인도계 싱가포르인의 문화 중심지. 스리 비라마칼리아만 사원, 무스타파 센터, 테카 센터 등에서 활기 넘치는 인도 문화를 체험할 수 있습니다.",
    bestTime: "연중 가능 (10~11월 디파발리 축제 기간 특별 장식)",
    stayArea: "리틀 인디아 / 파러 파크 주변",
    transport: "MRT (리틀 인디아역, 파러 파크역), 버스",
    districts: [
      {
        name: "세랑군 로드",
        nameEn: "Serangoon Road",
        description:
          "리틀 인디아의 메인 도로로 인도 의류점, 금은방, 향신료 가게, 꽃 가판대가 늘어선 핵심 거리.",
        highlights: ["스리 비라마칼리아만 사원", "무스타파 센터", "꽃 가판대 거리"],
      },
      {
        name: "테카 센터",
        nameEn: "Tekka Centre",
        description:
          "리틀 인디아의 대표 호커 센터 겸 재래시장. 인도식 음식부터 말레이 요리까지 다양한 먹거리와 신선한 식재료를 만날 수 있습니다.",
        highlights: ["테카 마켓", "호커 센터", "인도 직물 상점"],
      },
    ],
    attractions: [
      {
        name: "스리 비라마칼리아만 사원",
        nameEn: "Sri Veeramakaliamman Temple",
        description:
          "1855년에 건립된 리틀 인디아의 대표 힌두교 사원. 칼리 여신에게 봉헌된 곳으로 화려한 고푸람(탑문)의 조각이 압도적입니다.",
        category: "사원",
        tip: "사원 내부는 신발을 벗고 입장하며, 노출이 심한 복장은 피해주세요.",
      },
      {
        name: "무스타파 센터",
        nameEn: "Mustafa Centre",
        description:
          "24시간 운영되는 거대한 쇼핑몰로 전자제품, 의류, 금, 향신료, 식품 등 없는 것이 없는 리틀 인디아의 랜드마크.",
        category: "쇼핑",
        tip: "가격 비교 후 구매하세요. 금 장신구는 상대적으로 저렴한 편입니다.",
      },
      {
        name: "탄 텡 니아 거리",
        nameEn: "Tan Teng Niah House",
        description:
          "1900년에 건축된 알록달록한 색채의 중국 빌라. 리틀 인디아에서 가장 포토제닉한 건물로 인스타그램 명소입니다.",
        category: "건축물",
      },
    ],
    dayTrips: [
      {
        name: "싱가포르 동물원",
        nameEn: "Singapore Zoo",
        description:
          "개방형 전시로 유명한 세계적 수준의 동물원. 나이트 사파리도 함께 체험 가능.",
        travelTime: "MRT + 버스 약 40분",
        gradient: "from-green-500 to-teal-700",
      },
    ],
    localFood: [
      {
        name: "피쉬 헤드 커리",
        description: "큼직한 생선 머리를 매콤한 커리 소스에 끓인 싱가포르식 인도 요리. 밥이나 난과 함께.",
        emoji: "🐟",
      },
      {
        name: "로티 프라타",
        description: "바삭하게 구운 인도식 납작빵. 커리 소스에 찍어 먹으며 달콤한 버전도 인기.",
        emoji: "🫓",
      },
      {
        name: "테타릭",
        description: "높은 곳에서 부어 거품을 만드는 달콤한 밀크티. 싱가포르 국민 음료.",
        emoji: "🍵",
      },
    ],
    tips: [
      "디파발리(10~11월) 기간에는 세랑군 로드에 화려한 조명 장식이 설치됩니다.",
      "테카 센터 호커에서 SGD 5 이하로 맛있는 한 끼를 해결할 수 있습니다.",
      "무스타파 센터는 24시간 운영되지만 주말 저녁에는 매우 붐빕니다.",
      "리틀 인디아 헤리티지 트레일 지도를 관광안내소에서 무료로 받을 수 있습니다.",
    ],
  },

  // ===== SENTOSA SOUTH =====
  "singapore/sentosa-south/sentosa": {
    heroGradient: "from-orange-400 to-red-700",
    description:
      "싱가포르 본섬 남쪽에 위치한 리조트 아일랜드. 유니버설 스튜디오 싱가포르, S.E.A. 아쿠아리움, 실로소 해변 등 테마파크, 해양 레저, 해변 리조트가 한곳에 모여 있는 가족 여행 최적지입니다.",
    bestTime: "연중 가능 (2~4월 비교적 건조)",
    stayArea: "리조트 월드 센토사 / 실로소 비치 주변",
    transport: "MRT 하버프론트역 → 센토사 익스프레스 모노레일 (약 5분)",
    districts: [
      {
        name: "리조트 월드 센토사",
        nameEn: "Resorts World Sentosa",
        description:
          "유니버설 스튜디오, S.E.A. 아쿠아리움, 카지노, 호텔이 밀집한 센토사의 핵심 엔터테인먼트 구역.",
        highlights: ["유니버설 스튜디오 싱가포르", "S.E.A. 아쿠아리움", "어드벤처 코브 워터파크"],
      },
      {
        name: "실로소 비치",
        nameEn: "Siloso Beach",
        description:
          "센토사에서 가장 활기 넘치는 해변. 메가 어드벤처 파크, 비치 바, 케이블카 등 액티비티가 풍부한 곳.",
        highlights: ["메가 어드벤처 파크", "스카이라인 루지", "실로소 비치 바"],
      },
      {
        name: "팔라완 비치",
        nameEn: "Palawan Beach",
        description:
          "가족 단위 여행객에게 인기 있는 해변으로 아시아 대륙 최남단 포인트와 연결되는 출렁다리가 특징.",
        highlights: ["아시아 대륙 최남단 포인트", "출렁다리", "키즈 클럽"],
      },
    ],
    attractions: [
      {
        name: "유니버설 스튜디오 싱가포르",
        nameEn: "Universal Studios Singapore",
        description:
          "동남아시아 유일의 유니버설 스튜디오. 7개 테마존에 24개 이상의 어트랙션이 있으며, 트랜스포머 3D 라이드와 배틀스타 갤럭티카 롤러코스터가 인기입니다.",
        category: "테마파크",
        tip: "평일 오전 개장 시간에 맞춰 입장하면 대기 시간을 크게 줄일 수 있습니다.",
      },
      {
        name: "S.E.A. 아쿠아리움",
        nameEn: "S.E.A. Aquarium",
        description:
          "1,000종 이상, 10만 마리 이상의 해양 생물을 만날 수 있는 세계 최대급 수족관. 폭 36m의 거대한 메인 수조가 압도적입니다.",
        category: "수족관",
        tip: "오후보다 오전에 관람객이 적어 여유롭게 관람할 수 있습니다.",
      },
      {
        name: "스카이라인 루지 센토사",
        nameEn: "Skyline Luge Sentosa",
        description:
          "스카이라이드(리프트)를 타고 올라가서 카트형 루지를 타고 내려오는 액티비티. 열대 숲과 바다를 바라보며 내려오는 짜릿한 경험.",
        category: "액티비티",
        tip: "3회 이상 탑승 패키지가 1회보다 가성비 좋습니다.",
      },
      {
        name: "메가 어드벤처 파크",
        nameEn: "Mega Adventure Park",
        description:
          "450m 길이의 메가짚(집라인)을 타고 정글 위를 날아 해변으로 착지하는 스릴 만점 액티비티.",
        category: "액티비티",
      },
    ],
    dayTrips: [
      {
        name: "마리나 베이",
        nameEn: "Marina Bay",
        description:
          "가든스 바이 더 베이, 마리나 베이 샌즈 등 싱가포르 도심의 랜드마크 지구.",
        travelTime: "모노레일 + MRT 약 30분",
        gradient: "from-blue-500 to-indigo-800",
      },
      {
        name: "싱가포르 동물원 & 나이트 사파리",
        nameEn: "Singapore Zoo & Night Safari",
        description:
          "낮에는 개방형 동물원, 저녁에는 세계 최초의 나이트 사파리를 체험.",
        travelTime: "MRT + 버스 약 50분",
        gradient: "from-green-500 to-teal-700",
      },
    ],
    localFood: [
      {
        name: "사테",
        description: "달콤한 땅콩 소스를 곁들인 동남아식 꼬치구이. 치킨, 양고기, 소고기 등 다양한 종류.",
        emoji: "🍢",
      },
      {
        name: "아이스 카창",
        description: "곱게 간 얼음 위에 팥, 젤리, 옥수수, 시럽을 올린 열대 빙수 디저트.",
        emoji: "🍧",
      },
    ],
    tips: [
      "유니버설 스튜디오 입장권은 온라인 사전 구매 시 SGD 5~10 할인됩니다.",
      "센토사 섬 입장은 무료이며, MRT 하버프론트역에서 센토사 익스프레스(SGD 4)로 이동합니다.",
      "도보 보드워크(무료)를 이용해 비보시티에서 센토사까지 걸어갈 수도 있습니다.",
      "실로소 비치의 선셋 타임에 비치 바에서 칵테일을 즐기는 것을 추천합니다.",
    ],
  },
};

export const singaporeAttractionDetails: Record<string, AttractionDetail> = {
  // ===== MARINA BAY ATTRACTIONS =====
  "singapore/city-center/marina-bay/gardens-by-the-bay": {
    heroGradient: "from-green-500 to-emerald-800",
    description:
      "101헥타르 규모의 미래형 정원으로, 높이 25~50m의 슈퍼트리 18그루, 세계 최대 유리 온실인 플라워 돔, 실내 폭포가 있는 클라우드 포레스트 등 싱가포르를 대표하는 자연-건축 융합 랜드마크입니다.",
    history:
      "2012년 개장한 가든스 바이 더 베이는 싱가포르 정부의 '도시 속의 정원(City in a Garden)' 비전의 핵심 프로젝트입니다. 매립지 위에 조성되었으며, 영국 건축사무소 그랜트 어소시에이츠와 윌킨슨 아이어가 설계했습니다.",
    visitInfo: {
      hours: "야외 정원 05:00~02:00, 온실 09:00~21:00 (매일)",
      admission: "야외 무료 / 플라워 돔 + 클라우드 포레스트 성인 SGD 32, 어린이 SGD 18",
      address: "18 Marina Gardens Drive, Singapore 018953",
      website: "https://www.gardensbythebay.com.sg",
    },
    highlights: [
      "슈퍼트리 그로브 야간 라이트쇼 (매일 19:45, 20:45 / 무료)",
      "클라우드 포레스트 실내 폭포 (35m 높이, 세계 최대 실내 폭포)",
      "플라워 돔 (세계 최대 유리 온실, 기네스 기록)",
      "OCBC 스카이웨이 (슈퍼트리 사이 22m 높이 공중 산책로)",
    ],
    nearbyAttractions: [
      "마리나 베이 샌즈 (도보 5분)",
      "머라이언 파크 (도보 15분)",
      "아트사이언스 뮤지엄 (도보 10분)",
    ],
    photoTips:
      "슈퍼트리 그로브 아래에서 올려다보는 구도가 가장 인기 있습니다. 라이트쇼 시간에 삼각대를 세우면 멋진 야경 사진을 찍을 수 있습니다.",
    tips: [
      "야외 정원과 슈퍼트리 라이트쇼는 무료이므로 예산이 부족해도 꼭 방문하세요.",
      "OCBC 스카이웨이는 별도 요금(SGD 14)이며 일몰 시간대가 인기여서 빨리 마감됩니다.",
      "온실은 냉방이 잘 되어 있어 가벼운 겉옷을 챙기면 좋습니다.",
      "오전에는 온실, 저녁에는 야외 정원 + 라이트쇼 순서로 방문하는 것을 추천합니다.",
    ],
  },
  "singapore/city-center/marina-bay/marina-bay-sands-skypark": {
    heroGradient: "from-blue-400 to-indigo-700",
    description:
      "마리나 베이 샌즈 호텔 57층 옥상에 위치한 전망대. 지상 200m 높이에서 싱가포르 도심 스카이라인, 가든스 바이 더 베이, 싱가포르 해협을 360도로 감상할 수 있는 프리미엄 전망 스폿입니다.",
    visitInfo: {
      hours: "11:00~21:00 (월~목), 11:00~22:00 (금~일)",
      admission: "성인 SGD 26, 어린이(2~12세) SGD 20, 시니어 SGD 23",
      address: "10 Bayfront Avenue, Singapore 018956",
      website: "https://www.marinabaysands.com/sands-skypark.html",
    },
    highlights: [
      "360도 파노라마 뷰로 싱가포르 전경 조망",
      "가든스 바이 더 베이 슈퍼트리를 위에서 내려다보는 독특한 시점",
      "일몰 시간대 골든아워의 환상적인 스카이라인",
      "야간에는 도시 야경과 가든스 라이트쇼를 동시에 감상",
    ],
    nearbyAttractions: [
      "가든스 바이 더 베이 (도보 5분)",
      "아트사이언스 뮤지엄 (도보 3분)",
      "헬릭스 브릿지 (도보 5분)",
    ],
    photoTips:
      "일몰 30분 전에 입장하면 골든아워와 블루아워, 야경까지 세 가지 분위기를 모두 촬영할 수 있습니다.",
    tips: [
      "숙박객은 무료 입장이 가능한 인피니티 풀을 이용하세요 (비숙박객은 풀 이용 불가).",
      "일몰 시간대가 가장 인기 있어 최소 30분 전 도착을 권장합니다.",
      "바람이 강할 수 있으니 모자나 가벼운 소지품 주의하세요.",
      "스카이파크 옆 CE LA VI 바에서 음료를 주문하면 입장료 없이 전망을 즐길 수 있습니다.",
    ],
  },
  "singapore/city-center/marina-bay/merlion-park": {
    heroGradient: "from-cyan-400 to-blue-700",
    description:
      "싱가포르의 국가 상징인 머라이언(사자 머리 + 물고기 몸통) 동상이 있는 워터프런트 공원. 높이 8.6m의 머라이언이 마리나 베이를 향해 물을 뿜는 모습은 싱가포르 여행의 필수 포토 스폿입니다.",
    history:
      "머라이언은 1964년 싱가포르 관광청의 로고로 처음 디자인되었습니다. 사자 머리는 싱가포르의 옛 이름 '싱가푸라(사자의 도시)'를, 물고기 몸통은 어촌이었던 역사를 상징합니다. 현재의 머라이언 동상은 1972년 완성되어 2002년 현 위치로 이전되었습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "1 Fullerton Road, Singapore 049213",
    },
    highlights: [
      "높이 8.6m의 머라이언 동상과 물줄기",
      "마리나 베이 샌즈를 배경으로 한 대표 포토 스폿",
      "야경 시간대 조명이 켜진 마리나 베이 스카이라인",
      "풀러턴 호텔과 에스플러네이드가 보이는 워터프런트 산책",
    ],
    nearbyAttractions: [
      "풀러턴 호텔 (도보 2분)",
      "에스플러네이드 (도보 8분)",
      "아시안 문명 박물관 (도보 5분)",
    ],
    photoTips:
      "머라이언이 뿜는 물줄기를 손으로 받는 듯한 원근감 트릭 사진이 가장 인기 있습니다. 해질녘~야경 시간대가 조명이 아름답습니다.",
    tips: [
      "24시간 무료 개방이므로 야경 시간대(19:00 이후)에 방문하는 것이 가장 좋습니다.",
      "주말 낮에는 매우 혼잡하므로 이른 아침이나 저녁 방문을 추천합니다.",
      "근처 원 풀러턴에 카페와 레스토랑이 있어 식사를 겸할 수 있습니다.",
      "머라이언 파크에서 마리나 베이 샌즈까지 워터프런트를 따라 산책하기 좋습니다.",
    ],
  },

  // ===== CHINATOWN ATTRACTIONS =====
  "singapore/city-center/chinatown/chinatown-heritage-centre": {
    heroGradient: "from-red-500 to-red-800",
    description:
      "1950년대 초기 중국 이민자들의 생활을 복원한 체험형 박물관. 파고다 스트리트의 실제 숍하우스 3채를 활용하여 비좁은 방, 아편굴, 재봉 공장 등을 사실적으로 재현해 싱가포르 차이나타운의 역사를 생생히 전달합니다.",
    history:
      "19세기 초 영국 식민지 시대, 래플스 경의 도시 계획에 따라 중국인 거주 구역으로 지정된 차이나타운은 수많은 이민자들이 좁은 숍하우스에서 생활했습니다. 2002년 개관한 헤리티지 센터는 이 시대의 생활상을 보존하고 있습니다.",
    visitInfo: {
      hours: "10:00~19:00 (매일, 마지막 입장 18:00)",
      admission: "성인 SGD 18, 어린이(7~12세) SGD 14",
      address: "48 Pagoda Street, Singapore 059207",
      website: "https://chinatownheritagecentre.com.sg",
    },
    highlights: [
      "1950년대 숍하우스 내부를 사실적으로 재현한 생활 공간",
      "초기 이민자들의 고단한 삶을 전하는 인터랙티브 전시",
      "다국어 오디오 가이드 (영어, 중국어, 일본어)",
      "복원된 테일러 숍과 약재상 등 직업별 생활 공간",
    ],
    nearbyAttractions: [
      "불아사 용화원 (도보 3분)",
      "맥스웰 푸드 센터 (도보 5분)",
      "스리 마리암만 사원 (도보 5분)",
    ],
    photoTips:
      "숍하우스 내부의 좁은 방과 재현된 생활 공간이 독특한 사진 소재가 됩니다. 파고다 스트리트의 컬러풀한 숍하우스 외관도 촬영하세요.",
    tips: [
      "오디오 가이드가 포함되어 있으니 꼭 수령하세요. 영어 가이드가 내용이 가장 충실합니다.",
      "관람 소요 시간은 약 45분~1시간입니다.",
      "에어컨이 없는 공간도 있으므로 가벼운 복장을 추천합니다.",
      "관람 후 파고다 스트리트와 스미스 스트리트에서 길거리 음식을 즐겨보세요.",
    ],
  },

  // ===== LITTLE INDIA ATTRACTIONS =====
  "singapore/city-center/little-india/sri-veeramakaliamman-temple": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "1855년에 건립된 리틀 인디아의 가장 오래된 힌두교 사원 중 하나. 파괴의 여신 칼리에게 봉헌된 사원으로, 화려한 색채의 고푸람(탑문)에 힌두 신들의 조각이 빼곡하게 새겨져 있어 시각적으로 압도적입니다.",
    history:
      "1855년 벵골 출신 노동자들이 세운 사원으로, 이름은 '용감한 칼리'를 뜻합니다. 1983년과 2000년대에 대대적인 보수가 이루어졌으며, 현재도 현지 힌두교 신자들의 주요 예배 장소로 활발히 운영되고 있습니다.",
    visitInfo: {
      hours: "05:30~12:15, 16:00~21:00 (매일)",
      admission: "무료",
      address: "141 Serangoon Road, Singapore 218042",
    },
    highlights: [
      "화려한 색채의 고푸람(탑문) 조각 — 힌두 신화 장면을 정교하게 표현",
      "칼리 여신 중앙 신상과 힌두 의식 체험",
      "디파발리(10~11월) 기간 특별 장식과 예배",
      "사원 내부의 정교한 천장 벽화와 조각",
    ],
    nearbyAttractions: [
      "무스타파 센터 (도보 5분)",
      "테카 센터 (도보 8분)",
      "탄 텡 니아 거리 (도보 3분)",
    ],
    photoTips:
      "사원 정면의 고푸람 전체를 담으려면 도로 건너편에서 촬영하는 것이 좋습니다. 내부 촬영은 예배 시간을 피해 조용한 시간대에 하세요.",
    tips: [
      "사원 입장 시 신발을 벗어야 하며, 반바지나 민소매 등 노출이 심한 복장은 피하세요.",
      "예배 시간에 방문하면 실제 힌두 의식을 관람할 수 있습니다.",
      "사원 내부 촬영은 허용되지만 플래시 사용과 소음은 자제해 주세요.",
      "리틀 인디아 헤리티지 트레일과 함께 둘러보면 효율적입니다.",
    ],
  },

  // ===== SENTOSA ATTRACTIONS =====
  "singapore/sentosa-south/sentosa/universal-studios-singapore": {
    heroGradient: "from-purple-500 to-violet-800",
    description:
      "동남아시아 유일의 유니버설 스튜디오 테마파크. 할리우드, 뉴욕, 고대 이집트, 쥬라기 공원 등 7개 테마존에 24개 이상의 어트랙션을 갖추고 있으며, 트랜스포머 3D 라이드와 배틀스타 갤럭티카 롤러코스터가 시그니처입니다.",
    history:
      "2010년 리조트 월드 센토사의 핵심 시설로 개장했습니다. 동남아 최초이자 아시아에서 두 번째 유니버설 스튜디오 테마파크로, 개장 이후 센토사 섬의 방문객 수를 크게 증가시켰습니다.",
    visitInfo: {
      hours: "10:00~19:00 (일반), 10:00~22:00 (주말/성수기, 변동 있음)",
      admission: "성인 SGD 81, 어린이(4~12세) SGD 61, 시니어 SGD 43",
      address: "8 Sentosa Gateway, Singapore 098269",
      website: "https://www.rwsentosa.com/en/attractions/universal-studios-singapore",
    },
    highlights: [
      "트랜스포머 3D 울트라 라이드 — 몰입감 최고의 시뮬레이션 라이드",
      "배틀스타 갤럭티카 — 인간/사이클론 듀얼 롤러코스터",
      "쥬라기 월드 래피즈 어드벤처 — 공룡 테마 급류 타기",
      "슈렉의 4D 어드벤처 & 마다가스카 크레이트 어드벤처",
    ],
    nearbyAttractions: [
      "S.E.A. 아쿠아리움 (도보 3분)",
      "어드벤처 코브 워터파크 (도보 5분)",
      "실로소 비치 (셔틀 10분)",
    ],
    photoTips:
      "입구의 회전하는 유니버설 지구본 앞이 가장 인기 있는 포토 스폿입니다. 할리우드 거리에서 캐릭터와 함께 사진을 찍을 수 있습니다.",
    tips: [
      "평일 오전 개장 시간에 입장하면 인기 어트랙션의 대기 시간을 크게 줄일 수 있습니다.",
      "익스프레스 패스(SGD 50~80)를 구매하면 줄 서지 않고 바로 탑승 가능합니다.",
      "온라인 사전 구매가 현장 구매보다 SGD 5~10 저렴합니다.",
      "쥬라기 월드 래피즈에서는 옷이 젖으니 방수 판초를 준비하거나 여분의 옷을 챙기세요.",
      "싱글 라이더 라인을 이용하면 혼자서도 빠르게 탑승할 수 있습니다.",
    ],
  },
  "singapore/sentosa-south/sentosa/sea-aquarium": {
    heroGradient: "from-blue-500 to-cyan-800",
    description:
      "1,000종 이상, 10만 마리 이상의 해양 생물을 전시하는 세계 최대급 수족관. 폭 36m, 높이 8.3m의 오픈 오션(Open Ocean) 메인 수조 앞에서 만타레이와 상어가 유영하는 장관을 감상할 수 있습니다.",
    history:
      "2012년 리조트 월드 센토사에 개장한 S.E.A. 아쿠아리움은 개장 당시 세계 최대 수족관으로 기네스 기록에 등재되었습니다. 49개 서식지를 재현하여 동남아, 인도양, 대서양 등 전 세계 해양 생태를 한곳에서 체험할 수 있습니다.",
    visitInfo: {
      hours: "10:00~17:00 (매일, 마지막 입장 16:00)",
      admission: "성인 SGD 41, 어린이(4~12세) SGD 30, 시니어 SGD 30",
      address: "8 Sentosa Gateway, Singapore 098269",
      website: "https://www.rwsentosa.com/en/attractions/sea-aquarium",
    },
    highlights: [
      "오픈 오션 수조 (폭 36m) — 만타레이, 상어, 대형 쥐가오리가 유영",
      "49개 해양 서식지 재현 — 산호초, 난파선, 심해 등",
      "해파리 갤러리 — 다양한 종의 해파리를 환상적인 조명과 함께 감상",
      "샤크 시즈 — 200마리 이상의 상어를 가까이에서 관찰",
    ],
    nearbyAttractions: [
      "유니버설 스튜디오 싱가포르 (도보 3분)",
      "어드벤처 코브 워터파크 (도보 5분)",
      "마리타임 익스피리언셜 뮤지엄 (도보 2분)",
    ],
    photoTips:
      "오픈 오션 메인 수조 앞 벤치에서 실루엣 사진을 찍으면 드라마틱한 결과물을 얻을 수 있습니다. 해파리 갤러리의 블루 조명도 포토제닉합니다.",
    tips: [
      "오전 개장 직후(10:00~11:00)가 가장 한적하며, 오후에는 관람객이 크게 늘어납니다.",
      "오픈 오션 수조 앞에 앉아서 쉬며 감상하는 시간을 충분히 확보하세요.",
      "관람 소요 시간은 약 1.5~2시간이며, 유니버설 스튜디오와 함께 방문하면 하루가 빠듯합니다.",
      "내부는 냉방이 강하므로 긴팔이나 가디건을 챙기세요.",
    ],
  },
};
