import type { CityDetail, AttractionDetail } from "../city-details";

export const mongoliaCityDetails: Record<string, CityDetail> = {
  // ===== ULAANBAATAR =====
  "mongolia/ulaanbaatar/ulaanbaatar": {
    heroGradient: "from-sky-500 to-blue-900",
    description:
      "몽골의 수도이자 전체 인구의 절반이 거주하는 유일한 대도시. 칭기즈 칸 광장을 중심으로 현대적 건물과 소비에트 시대 건축이 공존하며, 간단테그칠렌 사원의 장엄한 불교 문화와 국립박물관의 유목 문명 유산을 만날 수 있습니다.",
    bestTime: "6~9월 (7월 나담 축제, 여름 초원이 가장 아름다운 시기)",
    stayArea: "칭기즈 칸 광장 / 서울 거리 주변",
    transport: "버스, 택시 (교통 체증이 심하므로 러시아워 피하기 권장)",
    districts: [
      {
        name: "칭기즈 칸 광장 일대",
        nameEn: "Chinggis Khaan Square Area",
        description:
          "울란바토르의 정치·문화 중심지. 정부 청사, 국립박물관, 오페라극장이 밀집한 도심 핵심 구역.",
        highlights: ["칭기즈 칸 광장", "국립박물관", "국립 오페라극장", "서울 거리"],
      },
      {
        name: "간단 사원 지구",
        nameEn: "Gandan District",
        description:
          "몽골 최대의 불교 사원인 간단테그칠렌 사원이 위치한 종교·문화 지구. 전통 게르 주거지도 인근에 남아 있습니다.",
        highlights: ["간단테그칠렌 사원", "초이진 라마 사원", "복드 칸 겨울궁전"],
      },
      {
        name: "자이승 전망대 일대",
        nameEn: "Zaisan Memorial Area",
        description:
          "도시 남쪽 언덕 위의 소비에트 전쟁 기념비. 울란바토르 시내와 투울 강, 주변 산맥의 파노라마 전망이 펼쳐집니다.",
        highlights: ["자이승 전쟁 기념비", "부처 공원", "투울 강변 산책로"],
      },
    ],
    attractions: [
      {
        name: "칭기즈 칸 광장",
        nameEn: "Chinggis Khaan Square",
        description:
          "울란바토르의 심장부. 정부 청사 앞 칭기즈 칸 좌상과 수흐바타르 동상이 세워진 몽골의 상징적인 중앙 광장입니다.",
        category: "광장",
        tip: "7월 나담 축제 기간에는 광장에서 개막식이 열리며 축제 분위기가 절정입니다.",
      },
      {
        name: "간단테그칠렌 사원",
        nameEn: "Gandantegchinlen Monastery",
        description:
          "1835년 건립된 몽골 최대의 티베트 불교 사원. 26.5m 높이의 금도금 관세음보살 입상이 본전에 모셔져 있습니다.",
        category: "사원",
        tip: "오전에 방문하면 승려들의 독경 의식을 참관할 수 있습니다.",
      },
      {
        name: "몽골 국립박물관",
        nameEn: "National Museum of Mongolia",
        description:
          "선사시대부터 사회주의 시대까지 몽골 역사와 유목 문화를 총망라하는 국립박물관. 칭기즈 칸 제국의 유물이 풍부합니다.",
        category: "박물관",
        tip: "전시 해설은 영어로도 제공되며, 관람에 약 2시간이 소요됩니다.",
      },
      {
        name: "자이승 전망대",
        nameEn: "Zaisan Memorial",
        description:
          "2차 세계대전 소비에트-몽골 동맹을 기념하는 언덕 위 전망대. 울란바토르 시내 전체를 360도로 조망할 수 있습니다.",
        category: "전망대",
        tip: "석양 무렵에 방문하면 도시와 산맥이 붉게 물드는 장관을 볼 수 있습니다.",
      },
      {
        name: "복드 칸 겨울궁전",
        nameEn: "Bogd Khan Winter Palace",
        description:
          "몽골 마지막 왕(복드 칸 8세)의 겨울 궁전. 티베트 불교 예술품과 왕실 유물이 전시되어 있습니다.",
        category: "궁전",
      },
      {
        name: "초이진 라마 사원",
        nameEn: "Choijin Lama Temple",
        description:
          "1908년에 건립된 불교 사원으로 현재는 박물관으로 운영. 정교한 불교 조각과 탈춤 가면이 전시되어 있습니다.",
        category: "사원",
      },
    ],
    dayTrips: [
      {
        name: "테를지 국립공원",
        nameEn: "Terelj National Park",
        description:
          "거대한 기암괴석과 초원이 어우러진 자연 공원. 게르 숙박과 승마 체험이 가능합니다.",
        travelTime: "차량 약 1시간 30분",
        gradient: "from-emerald-500 to-green-800",
      },
      {
        name: "칭기즈 칸 기마상",
        nameEn: "Chinggis Khaan Statue Complex",
        description:
          "높이 40m의 세계 최대 기마상. 전망대에서 주변 초원을 한눈에 조망할 수 있습니다.",
        travelTime: "차량 약 1시간",
        gradient: "from-amber-500 to-yellow-800",
      },
    ],
    localFood: [
      {
        name: "허르헉",
        description:
          "달군 돌로 양고기를 쪄내는 몽골 전통 바비큐. 유목민의 대표 음식입니다.",
        emoji: "🍖",
      },
      {
        name: "보즈",
        description: "양고기 소를 넣고 찐 몽골식 만두. 나담 축제의 필수 음식입니다.",
        emoji: "🥟",
      },
      {
        name: "수테 차이",
        description:
          "소금을 넣은 몽골식 밀크티. 유목민의 일상 음료로 게르에서 환대의 상징입니다.",
        emoji: "🍵",
      },
    ],
    tips: [
      "7월 나담 축제(씨름, 활쏘기, 경마)는 몽골 최대 행사이므로 숙소를 일찍 예약하세요.",
      "울란바토르 교통 체증이 심하므로 러시아워(8~10시, 17~19시)를 피해 이동하세요.",
      "현금(MNT)을 충분히 준비하세요. 시외 지역에서는 카드 결제가 어려울 수 있습니다.",
      "고도가 약 1,350m이므로 자외선이 강합니다. 선크림과 모자를 챙기세요.",
    ],
  },

  // ===== COUNTRYSIDE =====
  "mongolia/countryside/terelj": {
    heroGradient: "from-emerald-500 to-green-800",
    description:
      "울란바토르에서 가장 가까운 대자연 관문. 거북바위 등 기암괴석과 끝없이 펼쳐지는 초원, 맑은 투울 강이 어우러진 국립공원으로, 게르 캠프에서의 숙박과 승마 트레킹이 하이라이트입니다.",
    bestTime: "6~9월 (여름 초록 초원, 가을 단풍도 아름다움)",
    stayArea: "테를지 게르 캠프 (공원 입구~중심부)",
    transport: "울란바토르에서 차량 약 1시간 30분 (투어 이용 권장)",
    districts: [
      {
        name: "테를지 공원 입구",
        nameEn: "Terelj Park Entrance",
        description:
          "게르 캠프와 관광 시설이 밀집한 공원 초입 지역. 거북바위와 아리아발 명상사원이 위치합니다.",
        highlights: ["거북바위", "아리아발 명상사원", "게르 캠프촌"],
      },
      {
        name: "투울 강 계곡",
        nameEn: "Tuul River Valley",
        description:
          "공원 안쪽으로 흐르는 투울 강변의 계곡 지역. 승마 트레킹과 래프팅의 출발점입니다.",
        highlights: ["투울 강변 승마 코스", "래프팅 포인트", "야생화 초원"],
      },
    ],
    attractions: [
      {
        name: "거북바위",
        nameEn: "Turtle Rock",
        description:
          "자연 풍화로 거대한 거북이 형상을 이룬 테를지의 상징적인 기암괴석. 주변에서 승마 체험도 가능합니다.",
        category: "자연",
        tip: "바위 위에 올라갈 수 있으며, 주변 초원의 파노라마 전경이 훌륭합니다.",
      },
      {
        name: "아리아발 명상사원",
        nameEn: "Aryabal Meditation Temple",
        description:
          "산 중턱에 자리한 불교 명상 사원. 108개의 계단을 오르며 불교 격언을 읽을 수 있습니다.",
        category: "사원",
        tip: "계단이 가파르므로 편한 신발을 신고 천천히 오르세요.",
      },
      {
        name: "테를지 국립공원",
        nameEn: "Terelj National Park",
        description:
          "초원, 타이가 숲, 기암괴석이 어우러진 광활한 자연 공원. 게르 숙박, 승마, 하이킹 등 다양한 액티비티를 즐길 수 있습니다.",
        category: "국립공원",
        tip: "1박 이상 게르 캠프에서 숙박하며 별밤을 감상하는 것을 강력 추천합니다.",
      },
    ],
    dayTrips: [
      {
        name: "칭기즈 칸 기마상",
        nameEn: "Chinggis Khaan Statue Complex",
        description:
          "세계 최대 40m 높이의 칭기즈 칸 기마상. 내부 전망대와 유물 전시관이 있습니다.",
        travelTime: "차량 약 40분",
        gradient: "from-amber-500 to-yellow-800",
      },
    ],
    localFood: [
      {
        name: "허르헉",
        description:
          "달군 돌로 양고기를 익히는 유목민 전통 바비큐. 게르 캠프에서 직접 체험 가능합니다.",
        emoji: "🍖",
      },
      {
        name: "아이락",
        description:
          "발효 마유주(馬乳酒). 몽골 초원에서만 맛볼 수 있는 유목민의 전통 발효 음료입니다.",
        emoji: "🥛",
      },
      {
        name: "쿠르트",
        description: "말린 요구르트 치즈로 유목민의 휴대 간식. 새콤하고 단단합니다.",
        emoji: "🧀",
      },
    ],
    tips: [
      "게르 캠프는 성수기(7~8월)에 빠르게 마감되므로 미리 예약하세요.",
      "밤낮 기온차가 크므로(여름에도 밤 5~10°C) 방한복을 반드시 준비하세요.",
      "승마 초보자도 가이드 동반 트레킹이 가능하지만 장시간 승마 시 근육통에 대비하세요.",
    ],
  },
  "mongolia/countryside/gobi": {
    heroGradient: "from-amber-600 to-orange-900",
    description:
      "세계에서 가장 광활한 사막 중 하나인 고비 사막. 타는 듯한 붉은 절벽 '플레이밍 클리프스', 노래하는 모래언덕 '홍고린 엘스', 얼음 계곡 '욜린 암' 등 극적인 자연경관이 펼쳐지는 몽골 여행의 하이라이트입니다.",
    bestTime: "5~10월 (6~9월이 최적, 겨울은 극한의 추위)",
    stayArea: "달란자드가드 / 고비 게르 캠프",
    transport: "울란바토르에서 국내선 약 1시간 30분 (달란자드가드), 차량 약 8~10시간",
    districts: [
      {
        name: "바양작 일대",
        nameEn: "Bayanzag Area",
        description:
          "플레이밍 클리프스로 유명한 고비 사막 남부 지역. 공룡 화석 최초 발견지로서 고생물학적 가치가 높습니다.",
        highlights: ["플레이밍 클리프스", "공룡 화석 발굴지", "낙타 트레킹"],
      },
      {
        name: "홍고린 엘스",
        nameEn: "Khongoriin Els",
        description:
          "길이 100km, 높이 최대 300m에 달하는 거대한 모래언덕. 바람에 소리가 나 '노래하는 모래언덕'으로 불립니다.",
        highlights: ["노래하는 모래언덕", "낙타 캐러밴", "일출/일몰 감상"],
      },
      {
        name: "욜린 암 계곡",
        nameEn: "Yolyn Am Valley",
        description:
          "구르반사이한 국립공원 내 협곡. 여름에도 얼음이 남아 있는 독특한 사막 속 빙하 계곡입니다.",
        highlights: ["만년빙 협곡", "수리부엉이 서식지", "야생 염소 관찰"],
      },
    ],
    attractions: [
      {
        name: "플레이밍 클리프스",
        nameEn: "Flaming Cliffs",
        description:
          "석양에 불타는 듯한 붉은 사암 절벽. 1920년대 로이 채프먼 앤드류스가 최초로 공룡 알 화석을 발견한 고생물학의 성지입니다.",
        category: "자연",
        tip: "석양 직전 1~2시간이 절벽이 가장 붉게 타오르는 최고의 감상 시간입니다.",
      },
      {
        name: "홍고린 엘스 모래언덕",
        nameEn: "Khongoriin Els Sand Dunes",
        description:
          "고비 사막 최대의 모래언덕으로 바람이 불면 노래하는 소리가 납니다. 낙타를 타고 모래언덕 기슭을 이동할 수 있습니다.",
        category: "자연",
        tip: "모래언덕 정상까지 등반은 약 1시간 소요. 일출 때 오르면 황금빛 사막을 볼 수 있습니다.",
      },
      {
        name: "욜린 암 협곡",
        nameEn: "Yolyn Am Valley",
        description:
          "독수리 계곡이라는 뜻의 협곡으로, 사막 한가운데 여름에도 얼음이 남아 있는 신비로운 자연경관입니다.",
        category: "자연",
        tip: "입구에서 협곡 안쪽까지 왕복 약 2시간 하이킹입니다. 미끄러우니 주의하세요.",
      },
    ],
    dayTrips: [
      {
        name: "달란자드가드",
        nameEn: "Dalanzadgad",
        description:
          "고비 여행의 거점 도시. 남고비 박물관에서 공룡 화석과 유목 문화를 살펴볼 수 있습니다.",
        travelTime: "플레이밍 클리프스에서 차량 약 2시간",
        gradient: "from-red-500 to-rose-800",
      },
      {
        name: "바양작 유목민 가정 방문",
        nameEn: "Bayanzag Nomad Family Visit",
        description:
          "고비 사막의 유목민 게르를 방문하여 전통 생활과 문화를 직접 체험합니다.",
        travelTime: "게르 캠프에서 차량 약 30분",
        gradient: "from-yellow-500 to-amber-800",
      },
    ],
    localFood: [
      {
        name: "보독",
        description:
          "염소 뱃속에 달군 돌과 야채를 넣어 통째로 익히는 고비 유목민의 특별 요리.",
        emoji: "🐐",
      },
      {
        name: "낙타유 차",
        description: "고비 사막 유목민이 낙타젖으로 끓이는 진한 밀크티.",
        emoji: "🐫",
      },
    ],
    tips: [
      "고비 투어는 최소 3박 4일 이상의 일정을 권장합니다. 이동 거리가 매우 깁니다.",
      "사막이라도 밤에는 매우 춥습니다. 여름에도 방한 재킷을 반드시 가져가세요.",
      "자외선이 극도로 강하므로 선크림(SPF50+), 선글라스, 모자는 필수입니다.",
      "물을 충분히 준비하세요. 일 최소 2~3리터 이상 권장합니다.",
    ],
  },
};

export const mongoliaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ULAANBAATAR ATTRACTIONS =====
  "mongolia/ulaanbaatar/ulaanbaatar/chinggis-khaan-square": {
    heroGradient: "from-sky-600 to-blue-900",
    description:
      "울란바토르의 정치·문화적 중심지이자 몽골의 상징적인 광장. 2013년 칭기즈 칸 광장으로 개칭되었으며, 정부 청사 앞 거대한 칭기즈 칸 좌상과 수흐바타르 기마상이 몽골의 과거와 현재를 상징합니다.",
    history:
      "1921년 수흐바타르가 이 광장에서 몽골의 독립을 선언한 역사적 장소입니다. 오랫동안 수흐바타르 광장으로 불렸으나, 2013년 칭기즈 칸 광장으로 공식 개칭되었습니다. 주변으로 정부 청사, 국회의사당, 국립 오페라극장이 둘러싸고 있습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 광장)",
      admission: "무료",
      address: "Chinggis Khaan Square, Ulaanbaatar, Mongolia",
    },
    highlights: [
      "정부 청사 앞 칭기즈 칸 좌상과 양쪽의 기마 무장상",
      "광장 중앙의 수흐바타르 기마 동상",
      "나담 축제 개막식 및 각종 국가 행사의 주무대",
      "주변 현대식 건물과 소비에트 양식 건축의 대비",
    ],
    nearbyAttractions: [
      "몽골 국립박물관 (도보 5분)",
      "국립 오페라극장 (도보 3분)",
      "초이진 라마 사원 (도보 10분)",
    ],
    photoTips:
      "정부 청사를 배경으로 수흐바타르 동상을 촬영하는 구도가 가장 대표적입니다. 야간 조명도 인상적입니다.",
    tips: [
      "나담 축제(7월 11~13일) 기간에는 개막식이 열려 광장이 축제 분위기로 가득합니다.",
      "광장 주변에 환전소와 기념품 가게가 밀집해 있어 여행 초반에 방문하기 좋습니다.",
      "겨울(-30°C 이하)에는 극한의 추위이므로 충분한 방한 장비가 필요합니다.",
      "광장에서 서울 거리까지 도보 5분 거리로 카페와 레스토랑이 많습니다.",
    ],
  },
  "mongolia/ulaanbaatar/ulaanbaatar/gandantegchinlen-monastery": {
    heroGradient: "from-amber-500 to-red-800",
    description:
      "1835년 건립된 몽골 최대이자 가장 중요한 티베트 불교 사원. '위대한 환희의 장소'라는 뜻으로, 26.5m 높이의 금도금 관세음보살 입상(메그지드 자나라이삭)이 본전에 모셔져 있어 몽골 불교의 정수를 체험할 수 있습니다.",
    history:
      "1835년 복드 칸 5세에 의해 설립되었으며, 사회주의 시기(1930년대) 대대적인 종교 탄압 속에서도 유일하게 존속한 사원입니다. 원래의 관세음보살 입상은 1938년 소비에트에 의해 반출되었고, 1996년 일본과 몽골 불자들의 기부로 현재의 26.5m 금도금 입상이 새로 조성되었습니다.",
    visitInfo: {
      hours: "09:00~17:00 (연중 개방)",
      admission: "무료 (본전 사진 촬영 시 별도 요금 약 5,000 MNT)",
      address: "Gandantegchinlen Monastery, Ulaanbaatar, Mongolia",
      website: "https://www.ثرgandan.mn",
    },
    highlights: [
      "26.5m 금도금 관세음보살 입상 (메그지드 자나라이삭)",
      "승려들의 아침 독경 의식 참관",
      "전통 티베트 불교 건축 양식의 본전과 부속 건물",
      "몽골 전통 마니차(기도 바퀴) 돌리기 체험",
    ],
    nearbyAttractions: [
      "칭기즈 칸 광장 (차량 10분)",
      "복드 칸 겨울궁전 (차량 15분)",
      "초이진 라마 사원 (차량 10분)",
    ],
    photoTips:
      "본전 외관은 정면에서 양쪽 탑을 함께 담는 구도가 좋습니다. 내부 관세음보살 상은 촬영 허가가 필요합니다.",
    tips: [
      "오전 9~10시에 방문하면 승려들의 독경 의식을 참관할 수 있습니다.",
      "본전 내부에서 사진 촬영 시 별도의 촬영 허가 비용(약 5,000 MNT)을 지불해야 합니다.",
      "사원 경내에서 시계 방향으로 마니차를 돌리는 것이 전통 예법입니다.",
      "어깨와 무릎을 가리는 단정한 복장을 권장합니다.",
    ],
  },
  "mongolia/ulaanbaatar/ulaanbaatar/national-museum-of-mongolia": {
    heroGradient: "from-indigo-500 to-purple-800",
    description:
      "선사시대 석기부터 몽골제국, 사회주의 시대를 거쳐 현대까지 몽골 역사 전체를 아우르는 국립박물관. 유목 문화 전시실에서는 게르, 전통 의상, 마구 등 유목민의 생활상을 생생하게 체험할 수 있습니다.",
    history:
      "1924년 설립된 몽골의 대표 국립박물관으로, 5만 점 이상의 소장품을 보유하고 있습니다. 2008년 전면 리모델링을 거쳐 현대적인 전시 환경을 갖추었으며, 흉노 시대 금관부터 칭기즈 칸 시대 갑옷, 사회주의 시대 선전물까지 다양한 유물을 소장하고 있습니다.",
    visitInfo: {
      hours: "09:00~18:00 (하절기), 10:00~17:00 (동절기), 월요일 휴관",
      admission: "성인 10,000 MNT, 학생 5,000 MNT, 사진 촬영 10,000 MNT 추가",
      address:
        "Juulchin Street, Chingeltei District, Ulaanbaatar 15160, Mongolia",
    },
    highlights: [
      "흉노 시대 금관과 몽골제국 시대 전사 갑옷",
      "유목 문화 전시실 - 게르 내부 재현, 전통 의상, 마구",
      "칭기즈 칸 관련 유물 및 제국 확장 역사 전시",
      "사회주의 시대부터 민주화까지의 근현대사 섹션",
    ],
    nearbyAttractions: [
      "칭기즈 칸 광장 (도보 5분)",
      "국립 오페라극장 (도보 3분)",
      "서울 거리 상점가 (도보 5분)",
    ],
    photoTips:
      "전시실 내 촬영은 별도 요금을 지불해야 합니다. 3층 유목 문화 전시실의 게르 내부 재현이 가장 인기 있는 촬영 포인트입니다.",
    tips: [
      "관람에 약 2시간이 소요되므로 여유를 두고 방문하세요.",
      "영어 해설 패널이 있어 외국인도 이해하기 쉽습니다.",
      "월요일은 휴관이므로 방문 요일을 확인하세요.",
      "칭기즈 칸 광장과 인접하여 함께 일정을 잡으면 효율적입니다.",
    ],
  },

  // ===== TERELJ ATTRACTIONS =====
  "mongolia/countryside/terelj/terelj-national-park": {
    heroGradient: "from-emerald-600 to-green-900",
    description:
      "울란바토르에서 가장 가까운 대자연 체험지. 광활한 초원 위로 우뚝 솟은 거북바위와 기암괴석, 투울 강이 어우러진 국립공원으로, 게르 숙박, 승마 트레킹, 하이킹 등 몽골 유목 문화와 자연을 동시에 체험할 수 있는 최고의 장소입니다.",
    history:
      "1993년 국립공원으로 지정되었으며, 총면적 2,868km²에 달합니다. 13세기 칭기즈 칸이 이 지역에서 사냥과 휴식을 즐겼다는 기록이 있으며, 근대 이후 몽골 초원 생태계를 보전하는 주요 보호 구역으로 관리되고 있습니다.",
    visitInfo: {
      hours: "상시 개방 (자연 공원)",
      admission: "입장료 약 3,000 MNT",
      address: "Terelj National Park, Nalaikh District, Ulaanbaatar, Mongolia",
    },
    highlights: [
      "거북바위(Turtle Rock) - 자연 풍화로 형성된 거대한 거북이 형상 기암",
      "아리아발 명상사원 - 산중턱 108계단 위의 불교 명상 사원",
      "투울 강변 승마 트레킹과 래프팅",
      "게르 캠프에서의 유목민 문화 체험과 별밤 감상",
    ],
    nearbyAttractions: [
      "칭기즈 칸 기마상 (차량 40분)",
      "울란바토르 시내 (차량 1시간 30분)",
    ],
    photoTips:
      "거북바위는 오후 사광이 들 때 가장 입체적으로 촬영됩니다. 바위 위에서 주변 초원을 내려다보는 구도도 인기입니다.",
    tips: [
      "1박 이상 게르 캠프에서 숙박하며 몽골 유목 문화를 체험하는 것을 추천합니다.",
      "여름에도 밤 기온이 5~10°C로 떨어지므로 방한복을 반드시 준비하세요.",
      "승마 초보자도 가이드 동반 트레킹(1~3시간)이 가능합니다.",
      "울란바토르에서 투어를 통해 방문하는 것이 교통편이 가장 편리합니다.",
      "공원 내 휴대폰 신호가 약하므로 오프라인 지도를 미리 다운로드하세요.",
    ],
  },

  // ===== GOBI ATTRACTIONS =====
  "mongolia/countryside/gobi/flaming-cliffs": {
    heroGradient: "from-red-600 to-orange-900",
    description:
      "고비 사막 남부의 거대한 붉은 사암 절벽. 석양 무렵 절벽이 불타오르는 듯한 장관을 연출하며 '플레이밍 클리프스'라는 이름을 얻었습니다. 1920년대 미국 탐험가 로이 채프먼 앤드류스가 세계 최초로 공룡 알 화석을 발견한 고생물학의 성지이기도 합니다.",
    history:
      "1922년 미국 자연사박물관의 로이 채프먼 앤드류스 탐험대가 이곳에서 프로토케라톱스, 벨로키랍토르 화석과 함께 세계 최초의 공룡 알 화석을 발견하여 세계를 놀라게 했습니다. 몽골어로 '바양작(Bayanzag)'이라 하며, '풍요로운 삭사울 나무'라는 뜻입니다.",
    visitInfo: {
      hours: "상시 개방 (자연 유적지)",
      admission: "무료 (별도 입장료 없음)",
      address: "Bayanzag, Umnugovi Province, Mongolia",
    },
    highlights: [
      "석양에 불타오르는 듯한 붉은 사암 절벽의 장관",
      "세계 최초 공룡 알 화석 발견지의 역사적 현장",
      "절벽 가장자리에서 바라보는 끝없는 고비 사막 파노라마",
      "주변 삭사울 숲과 낙타 트레킹",
    ],
    nearbyAttractions: [
      "달란자드가드 (차량 약 2시간)",
      "욜린 암 협곡 (차량 약 3시간)",
      "홍고린 엘스 모래언덕 (차량 약 5시간)",
    ],
    photoTips:
      "일몰 1~2시간 전이 절벽이 가장 붉게 물드는 최적의 촬영 시간입니다. 절벽 가장자리에서 광각으로 사막과 함께 담는 구도가 인상적입니다.",
    tips: [
      "석양 시간대에 맞춰 방문하는 것이 핵심입니다. 일몰 2시간 전 도착을 권장합니다.",
      "절벽 가장자리에 안전 난간이 없으므로 가까이 가지 마세요.",
      "바람이 강하고 모래가 날리므로 카메라 보호 커버를 준비하세요.",
      "물과 간식을 충분히 챙기세요. 주변에 매점이 없습니다.",
      "화석 채집은 법적으로 금지되어 있습니다. 눈으로만 감상하세요.",
    ],
  },
};
