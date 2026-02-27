import type { CityDetail, AttractionDetail } from "../city-details";

export const luxembourgCityDetails: Record<string, CityDetail> = {
  // ===== LUXEMBOURG CITY =====
  "luxembourg/luxembourg-city/luxembourg-city": {
    heroGradient: "from-sky-500 to-indigo-800",
    description:
      "유럽연합의 주요 기관이 위치한 대공국의 수도. 유네스코 세계유산으로 지정된 구시가지와 보크 케이스메이트, 아름다운 그룬트 계곡이 어우러진 요새 도시로, 소국이지만 풍부한 역사와 세련된 다국적 문화를 경험할 수 있습니다.",
    bestTime: "5~9월 (6월 국경일 축제, 여름 야외 행사 다수)",
    stayArea: "빌 오트 / 가르 상트랄(중앙역) 주변",
    transport: "버스, 트램 (전국 대중교통 무료)",
    districts: [
      {
        name: "빌 오트",
        nameEn: "Ville Haute",
        description:
          "구시가지 상부 지역으로 대공 궁전, 노트르담 대성당, 기욤 광장이 위치한 역사적 핵심 지구.",
        highlights: ["대공 궁전", "노트르담 대성당", "기욤 광장", "헌법 광장"],
      },
      {
        name: "그룬트",
        nameEn: "Grund",
        description:
          "알제트 강변의 아래쪽 계곡 지역. 아기자기한 카페와 레스토랑이 늘어선 로맨틱한 분위기의 지구.",
        highlights: [
          "알제트 강변 산책로",
          "노이뮌스터 수도원",
          "그룬트 엘리베이터",
        ],
      },
      {
        name: "키르히베르크",
        nameEn: "Kirchberg",
        description:
          "유럽연합 기관과 현대 건축물이 밀집한 신시가지. 필하모니, 무담(현대미술관) 등 문화 시설이 풍부.",
        highlights: ["유럽재판소", "무담 현대미술관", "필하모니 룩셈부르크"],
      },
    ],
    attractions: [
      {
        name: "보크 케이스메이트",
        nameEn: "Bock Casemates",
        description:
          "963년 룩셈부르크 건국의 기원이 된 보크 절벽 아래 17km에 달하는 지하 요새 터널. 유네스코 세계유산.",
        category: "유적",
        tip: "내부는 서늘하므로 여름에도 가벼운 겉옷을 챙기세요.",
      },
      {
        name: "그룬트 지구",
        nameEn: "Grund District",
        description:
          "알제트 강이 흐르는 아래쪽 계곡의 그림 같은 구시가지. 성벽과 어우러진 풍경이 룩셈부르크에서 가장 아름답습니다.",
        category: "지구",
        tip: "빌 오트에서 무료 엘리베이터를 타고 내려갈 수 있습니다.",
      },
      {
        name: "대공 궁전",
        nameEn: "Grand Ducal Palace",
        description:
          "룩셈부르크 대공의 공식 관저. 르네상스-무어 양식의 아름다운 외관으로 여름에만 내부 투어가 가능합니다.",
        category: "궁전",
        tip: "내부 가이드 투어는 7~8월에만 운영되며 사전 예약이 필수입니다.",
      },
      {
        name: "노트르담 대성당",
        nameEn: "Notre-Dame Cathedral",
        description:
          "17세기에 건립된 고딕과 르네상스 양식이 혼합된 대성당. 성모 마리아 위안자 상이 유명합니다.",
        category: "성당",
      },
      {
        name: "헌법 광장",
        nameEn: "Place de la Constitution",
        description:
          "골든 레이디 전쟁 기념비가 서 있는 광장으로 페트뤼스 계곡과 아돌프 다리의 탁 트인 전망을 감상할 수 있습니다.",
        category: "광장",
      },
      {
        name: "아돌프 다리",
        nameEn: "Adolphe Bridge",
        description:
          "1903년 완공된 룩셈부르크의 상징적인 석조 아치교. 페트뤼스 계곡 위로 놓인 아름다운 다리입니다.",
        category: "랜드마크",
      },
    ],
    dayTrips: [
      {
        name: "비안덴",
        nameEn: "Vianden",
        description:
          "우르 강변의 중세 마을에 웅장한 비안덴 성이 자리한 동화 같은 소도시.",
        travelTime: "버스 약 1시간 30분",
        gradient: "from-amber-500 to-orange-700",
      },
      {
        name: "에히터나흐",
        nameEn: "Echternach",
        description:
          "룩셈부르크에서 가장 오래된 도시. 뮐러탈 트레일의 출발점.",
        travelTime: "버스 약 45분",
        gradient: "from-green-500 to-emerald-800",
      },
      {
        name: "모젤 밸리",
        nameEn: "Moselle Valley",
        description:
          "모젤강을 따라 포도밭이 펼쳐지는 와인 산지. 시음 투어가 인기.",
        travelTime: "버스 약 40분",
        gradient: "from-purple-400 to-violet-700",
      },
    ],
    localFood: [
      {
        name: "쥬드 맛 가르데보우넨",
        description:
          "훈제 돼지목살에 잠두콩과 감자를 곁들인 룩셈부르크 국민 요리.",
        emoji: "🍖",
      },
      {
        name: "크네이델",
        description: "간 또는 빵으로 만든 룩셈부르크식 만두, 수프와 함께 제공.",
        emoji: "🥟",
      },
      {
        name: "그롬페레키셸셰르",
        description:
          "감자 팬케이크를 바삭하게 튀긴 룩셈부르크 전통 간식. 사과 소스와 곁들임.",
        emoji: "🥔",
      },
      {
        name: "모젤 와인",
        description:
          "모젤 강변에서 생산되는 리슬링, 피노 그리 등 고품질 화이트 와인.",
        emoji: "🍷",
      },
    ],
    tips: [
      "룩셈부르크는 2020년부터 전국 대중교통이 완전 무료입니다.",
      "빌 오트에서 그룬트까지 무료 파노라마 엘리베이터를 이용하세요.",
      "도시가 컴팩트하여 주요 관광지는 도보로 충분히 둘러볼 수 있습니다.",
      "영어, 프랑스어, 독일어가 모두 통용되어 의사소통이 편리합니다.",
      "보크 케이스메이트는 11~2월 동절기에 폐쇄되므로 방문 시기를 확인하세요.",
    ],
  },

  // ===== COUNTRYSIDE =====
  "luxembourg/countryside/vianden": {
    heroGradient: "from-amber-500 to-orange-700",
    description:
      "우르 강변의 그림 같은 중세 마을. 언덕 위에 우뚝 솟은 비안덴 성은 라인란트 지역에서 가장 아름다운 고성 중 하나로, 빅토르 위고가 사랑했던 도시이기도 합니다.",
    bestTime: "5~9월 (8월 중세 축제)",
    stayArea: "비안덴 구시가지",
    transport: "룩셈부르크 시티에서 버스 약 1시간 30분 (무료)",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town",
        description:
          "우르 강을 따라 형성된 중세 마을. 좁은 골목과 석조 건물, 카페가 아기자기하게 늘어서 있습니다.",
        highlights: [
          "비안덴 성",
          "빅토르 위고 하우스",
          "삼위일체 교회",
          "체어리프트",
        ],
      },
    ],
    attractions: [
      {
        name: "비안덴 성",
        nameEn: "Vianden Castle",
        description:
          "11~14세기에 걸쳐 건축된 로마네스크와 고딕 양식의 웅장한 고성. 라인란트 지역 최고의 성 중 하나로 꼽힙니다.",
        category: "고성",
        tip: "체어리프트를 타고 올라가면 성과 마을의 파노라마 전경을 감상할 수 있습니다.",
      },
      {
        name: "빅토르 위고 하우스",
        nameEn: "Victor Hugo House",
        description:
          "프랑스 문호 빅토르 위고가 망명 중 머물렀던 집을 박물관으로 개조한 곳.",
        category: "박물관",
      },
      {
        name: "체어리프트",
        nameEn: "Vianden Chairlift",
        description:
          "우르 강변에서 440m 높이의 산꼭대기까지 올라가는 리프트. 비안덴 마을과 성의 전경을 한눈에 담을 수 있습니다.",
        category: "액티비티",
        tip: "4~10월에만 운행하며, 편도 또는 왕복 이용이 가능합니다.",
      },
    ],
    dayTrips: [
      {
        name: "에히터나흐",
        nameEn: "Echternach",
        description:
          "룩셈부르크에서 가장 오래된 도시로 뮐러탈 트레일의 거점.",
        travelTime: "버스 약 50분",
        gradient: "from-green-500 to-emerald-800",
      },
      {
        name: "클레르보",
        nameEn: "Clervaux",
        description:
          "Family of Man 사진 전시로 유명한 클레르보 성이 있는 아르덴 소도시.",
        travelTime: "버스 약 40분",
        gradient: "from-slate-500 to-gray-800",
      },
    ],
    localFood: [
      {
        name: "트라우트 요리",
        description:
          "우르 강에서 잡은 신선한 송어를 버터에 구운 비안덴 향토 요리.",
        emoji: "🐟",
      },
      {
        name: "비안덴 호두 케이크",
        description: "비안덴 특산 호두로 만든 전통 케이크.",
        emoji: "🥜",
      },
    ],
    tips: [
      "룩셈부르크 시티에서 당일치기로 충분히 다녀올 수 있습니다.",
      "체어리프트와 성 입장을 합한 콤비 티켓이 더 저렴합니다.",
      "매년 8월 첫째 주말 중세 축제가 열리며 기사 시합 등을 볼 수 있습니다.",
      "마을이 작으므로 2~3시간이면 주요 관광지를 둘러볼 수 있습니다.",
    ],
  },
  "luxembourg/countryside/echternach": {
    heroGradient: "from-green-500 to-emerald-800",
    description:
      "698년에 세워진 룩셈부르크에서 가장 오래된 도시. 성 빌리브로드 수도원을 중심으로 형성된 역사 도시이자, 기암괴석과 이끼 낀 숲이 환상적인 뮐러탈 트레일(룩셈부르크의 작은 스위스)의 관문입니다.",
    bestTime: "4~10월 (5월 성령강림절 춤 행진 축제)",
    stayArea: "에히터나흐 시내 중심부",
    transport: "룩셈부르크 시티에서 버스 약 45분 (무료)",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town",
        description:
          "수도원과 마르크트 광장을 중심으로 한 소규모 역사 지구. 로마 시대 유적도 일부 남아 있습니다.",
        highlights: [
          "성 빌리브로드 바실리카",
          "마르크트 광장",
          "수도원 정원",
          "로마 빌라",
        ],
      },
      {
        name: "뮐러탈 지역",
        nameEn: "Mullerthal Region",
        description:
          "'룩셈부르크의 작은 스위스'로 불리는 기암괴석과 울창한 숲이 펼쳐지는 하이킹 천국.",
        highlights: [
          "뮐러탈 트레일",
          "셰스바흐 폭포",
          "페레클로즈 암석",
          "볼프스슐루흐트 협곡",
        ],
      },
    ],
    attractions: [
      {
        name: "뮐러탈 트레일",
        nameEn: "Mullerthal Trail",
        description:
          "총 112km의 하이킹 코스. 이끼 낀 사암 기둥, 동굴, 폭포를 지나는 3개 루트로 구성되어 있으며 '룩셈부르크의 작은 스위스'로 불립니다.",
        category: "하이킹",
        tip: "루트 2가 가장 인기 있으며, 셰스바흐 폭포 구간은 필수 코스입니다.",
      },
      {
        name: "성 빌리브로드 바실리카",
        nameEn: "Basilica of Saint Willibrord",
        description:
          "698년 성 빌리브로드가 세운 수도원에서 기원한 바실리카. 지하 성당에 성인의 유해가 안치되어 있습니다.",
        category: "성당",
      },
      {
        name: "에히터나흐 호수",
        nameEn: "Echternach Lake",
        description:
          "마을 가장자리의 인공 호수로 산책로, 놀이터, 보트 대여 등 가족 나들이에 적합한 휴식 공간.",
        category: "자연",
        tip: "호수 주변 산책로는 평탄하여 유모차나 휠체어도 이용 가능합니다.",
      },
    ],
    dayTrips: [
      {
        name: "비안덴",
        nameEn: "Vianden",
        description:
          "우르 강변에 웅장한 비안덴 성이 자리한 동화 같은 중세 마을.",
        travelTime: "버스 약 50분",
        gradient: "from-amber-500 to-orange-700",
      },
      {
        name: "트리어 (독일)",
        nameEn: "Trier",
        description:
          "독일에서 가장 오래된 도시. 로마 유적 포르타 니그라가 유명.",
        travelTime: "버스 약 40분",
        gradient: "from-red-400 to-rose-700",
      },
    ],
    localFood: [
      {
        name: "퀘체타르트",
        description:
          "자두로 만든 룩셈부르크 전통 타르트. 가을 자두 시즌에 특히 인기.",
        emoji: "🥧",
      },
      {
        name: "바운에슈루프",
        description: "진한 그린빈 수프에 감자와 베이컨을 넣은 가정식.",
        emoji: "🥣",
      },
    ],
    tips: [
      "뮐러탈 트레일은 구간별로 나눠 걸을 수 있어 반나절 코스도 가능합니다.",
      "매년 성령강림절 화요일에 열리는 춤 행진(Springprozession)은 유네스코 무형유산입니다.",
      "하이킹 시 방수 등산화를 착용하세요. 바위 구간이 미끄러울 수 있습니다.",
      "에히터나흐에서 트리어(독일)까지 버스로 약 40분이면 갈 수 있습니다.",
    ],
  },
  "luxembourg/countryside/moselle-valley": {
    heroGradient: "from-purple-400 to-violet-700",
    description:
      "룩셈부르크 동쪽 국경을 따라 흐르는 모젤 강변의 와인 산지. 급경사 포도밭과 아기자기한 와인 마을이 이어지며, 리슬링과 크레망 드 룩셈부르크 등 고품질 와인 시음을 즐길 수 있습니다.",
    bestTime: "5~10월 (9월 포도 수확 축제)",
    stayArea: "레미히 / 그레벤마허 중심부",
    transport: "룩셈부르크 시티에서 버스 약 40분 (무료)",
    districts: [
      {
        name: "레미히",
        nameEn: "Remich",
        description:
          "모젤 강변의 중심 와인 마을. 강변 산책로와 와인 셀러, 레스토랑이 밀집한 관광 거점.",
        highlights: [
          "모젤 강변 산책로",
          "생마르탱 와인 셀러",
          "유람선 선착장",
        ],
      },
      {
        name: "그레벤마허",
        nameEn: "Grevenmacher",
        description:
          "모젤 밸리 북쪽의 와인 마을. 나비 정원과 협동조합 와이너리가 유명.",
        highlights: [
          "나비 정원",
          "베르나르-마사르 와이너리",
          "성 로랑 교회",
        ],
      },
    ],
    attractions: [
      {
        name: "생마르탱 와인 셀러",
        nameEn: "Caves St Martin",
        description:
          "석회암 동굴을 활용한 와인 저장고로 크레망 드 룩셈부르크 생산 과정을 견학하고 시음할 수 있습니다.",
        category: "와이너리",
        tip: "가이드 투어를 예약하면 셀러 내부와 시음이 포함됩니다.",
      },
      {
        name: "모젤 유람선",
        nameEn: "Moselle River Cruise",
        description:
          "레미히에서 출발하는 유람선을 타고 포도밭과 와인 마을을 감상하는 코스.",
        category: "액티비티",
      },
      {
        name: "나비 정원",
        nameEn: "Butterfly Garden",
        description:
          "그레벤마허의 열대 온실에서 전 세계 나비와 이국적 식물을 만날 수 있는 정원.",
        category: "자연",
        tip: "4~10월에만 개장하며 오전에 방문하면 나비가 가장 활발합니다.",
      },
    ],
    dayTrips: [
      {
        name: "룩셈부르크 시티",
        nameEn: "Luxembourg City",
        description:
          "유네스코 세계유산 구시가지와 보크 케이스메이트가 있는 대공국의 수도.",
        travelTime: "버스 약 40분",
        gradient: "from-sky-500 to-indigo-800",
      },
      {
        name: "쉥겐",
        nameEn: "Schengen",
        description:
          "1985년 쉥겐 조약이 체결된 역사적인 모젤강변 마을. 유럽 박물관이 있습니다.",
        travelTime: "버스 약 25분",
        gradient: "from-blue-400 to-sky-700",
      },
    ],
    localFood: [
      {
        name: "크레망 드 룩셈부르크",
        description:
          "모젤 밸리에서 전통 샴페인 방식으로 만드는 고품질 스파클링 와인.",
        emoji: "🥂",
      },
      {
        name: "리슬링 와인",
        description:
          "모젤 강변 급경사 포도밭에서 재배한 아로마 풍부한 화이트 와인.",
        emoji: "🍷",
      },
      {
        name: "프리튀르 드 라 모젤",
        description: "모젤강에서 잡은 작은 민물고기를 바삭하게 튀긴 요리.",
        emoji: "🐟",
      },
    ],
    tips: [
      "포도 수확기(9월)에 방문하면 각 마을에서 열리는 와인 축제를 즐길 수 있습니다.",
      "모젤 강변 자전거 도로가 잘 정비되어 있어 자전거 여행도 추천합니다.",
      "와인 시음 투어 후에는 대중교통(무료)을 이용하세요.",
      "쉥겐 마을의 유럽 박물관에서 유럽 통합의 역사를 배울 수 있습니다.",
    ],
  },
};

export const luxembourgAttractionDetails: Record<string, AttractionDetail> = {
  // ===== LUXEMBOURG CITY ATTRACTIONS =====
  "luxembourg/luxembourg-city/luxembourg-city/bock-casemates": {
    heroGradient: "from-stone-500 to-stone-800",
    description:
      "963년 지그프리트 백작이 세운 보크 성곽에서 시작된 룩셈부르크 요새의 핵심. 17km에 달하는 지하 터널은 한때 수만 명의 병사를 수용했으며, 유네스코 세계유산으로 지정되어 있습니다.",
    history:
      "963년 아르덴의 지그프리트 백작이 보크 절벽 위에 성을 쌓은 것이 룩셈부르크의 기원입니다. 이후 부르고뉴, 스페인, 프랑스, 오스트리아 등의 지배를 거치며 요새가 확장되어 '북방의 지브롤터'로 불렸습니다. 1867년 런던 조약으로 요새가 해체되었으나 지하 케이스메이트 부분은 보존되었습니다.",
    visitInfo: {
      hours: "10:00~17:00 (3~10월 개방, 동절기 휴관)",
      admission: "성인 8유로, 학생/시니어 6유로, 4세 이하 무료",
      address: "10 Montée de Clausen, 1343 Luxembourg",
      website: "https://www.luxembourg-city.com/en/place/fortress/bock-casemates",
    },
    highlights: [
      "17km에 달하는 미로 같은 지하 터널 탐험",
      "보크 절벽에서 바라보는 알제트 강과 그룬트 지구의 파노라마 전망",
      "고고학 지하실(Crypt)의 고대 성곽 유적",
      "페트뤼스 계곡과 구시가지를 연결하는 역사적 방어 시스템",
    ],
    nearbyAttractions: [
      "그룬트 지구 (도보 5분)",
      "노이뮌스터 수도원 (도보 10분)",
      "대공 궁전 (도보 8분)",
    ],
    photoTips:
      "보크 케이스메이트 입구 위에서 그룬트 계곡과 알제트 강을 내려다보는 앵글이 가장 인기 있는 촬영 포인트입니다. 오전 빛이 가장 좋습니다.",
    tips: [
      "내부 터널은 서늘하고 습하므로 여름에도 가벼운 겉옷을 준비하세요.",
      "계단이 많고 바닥이 미끄러울 수 있으니 편한 신발을 착용하세요.",
      "동절기(11~2월)에는 폐쇄되므로 방문 전 운영 여부를 확인하세요.",
      "가이드 투어 없이 셀프 투어로 약 35~45분 소요됩니다.",
    ],
  },
  "luxembourg/luxembourg-city/luxembourg-city/grund-district": {
    heroGradient: "from-emerald-500 to-teal-800",
    description:
      "알제트 강이 흐르는 아래쪽 계곡에 자리한 구시가지 지구. 중세 성벽 아래로 옹기종기 모인 석조 건물, 아기자기한 카페와 레스토랑이 유럽에서 가장 아름다운 도시 풍경 중 하나를 만들어 냅니다.",
    history:
      "그룬트는 룩셈부르크 요새 도시의 하부 지역으로, 중세 시대부터 장인과 상인들이 모여 살던 곳입니다. 알제트 강을 중심으로 발달했으며, 19세기 이후 한때 쇠퇴했으나 최근 복원을 통해 룩셈부르크에서 가장 매력적인 지구로 거듭났습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 지구)",
      admission: "무료 (개별 시설 요금 별도)",
      address: "Grund, Luxembourg City",
    },
    highlights: [
      "알제트 강변 산책로와 석조 다리",
      "빌 오트에서 무료 파노라마 엘리베이터로 연결",
      "노이뮌스터 수도원 문화센터",
      "저녁 시간 조명이 켜진 성벽과 건물의 야경",
    ],
    nearbyAttractions: [
      "보크 케이스메이트 (도보 5분)",
      "성 요한 교회 (도보 3분)",
      "노이뮌스터 수도원 (도보 5분)",
    ],
    photoTips:
      "코르니쉬 산책로(Chemin de la Corniche)에서 내려다보는 그룬트 전경이 최고의 촬영 포인트입니다. 유럽에서 가장 아름다운 발코니라 불리는 곳입니다.",
    tips: [
      "빌 오트(상부 시가지)에서 무료 엘리베이터를 타고 내려올 수 있습니다.",
      "저녁에 조명이 켜지면 성벽과 함께 로맨틱한 분위기가 됩니다.",
      "강변 레스토랑에서 식사하며 야경을 감상하는 것을 추천합니다.",
      "코르니쉬 산책로(유럽에서 가장 아름다운 발코니)에서 전경을 감상하세요.",
    ],
  },
  "luxembourg/luxembourg-city/luxembourg-city/grand-ducal-palace": {
    heroGradient: "from-amber-400 to-yellow-700",
    description:
      "룩셈부르크 대공의 공식 관저이자 국가 행사의 중심지. 16세기 스페인-무어 양식의 우아한 외관이 돋보이며, 여름 한정 내부 가이드 투어를 통해 화려한 내부를 관람할 수 있습니다.",
    history:
      "1573년 시청사로 건립되었으나, 1890년 대공 가문이 이전하면서 공식 관저가 되었습니다. 2차 세계대전 중 나치 점령기에는 콘서트홀과 술집으로 사용되기도 했습니다. 전후 복원을 거쳐 현재 앙리 대공의 공식 관저로 사용되고 있습니다.",
    visitInfo: {
      hours: "가이드 투어만 가능: 7~8월, 화~일 (약 45분 소요)",
      admission: "성인 14유로, 학생 7유로, 4세 이하 무료",
      address: "17 Rue du Marché-aux-Herbes, 1728 Luxembourg",
      website: "https://www.luxembourg-city.com/en/place/castle-702/grand-ducal-palace",
    },
    highlights: [
      "16세기 스페인-무어 양식의 아름다운 르네상스 파사드",
      "왕실 접견실과 무도회장의 화려한 인테리어",
      "근위병 교대식 (여름 시즌)",
      "기욤 광장에서 바라보는 궁전 전면의 웅장한 모습",
    ],
    nearbyAttractions: [
      "노트르담 대성당 (도보 3분)",
      "기욤 광장 (바로 앞)",
      "보크 케이스메이트 (도보 8분)",
    ],
    photoTips:
      "기욤 광장에서 궁전 정면을 촬영하는 것이 정석입니다. 근위병이 서 있는 입구 앞도 인기 있는 포토 스폿입니다.",
    tips: [
      "내부 투어는 7~8월에만 운영되며 사전 온라인 예약이 필수입니다.",
      "투어 시즌이 아닌 때에도 외관 감상과 근위병 교대식 관람이 가능합니다.",
      "투어는 영어, 프랑스어, 독일어, 룩셈부르크어로 진행됩니다.",
      "궁전 앞 기욤 광장에서 자주 문화 행사와 마켓이 열립니다.",
    ],
  },

  // ===== VIANDEN ATTRACTIONS =====
  "luxembourg/countryside/vianden/vianden-castle": {
    heroGradient: "from-amber-600 to-orange-800",
    description:
      "11세기에서 14세기 사이 건축된 로마네스크-고딕 양식의 웅장한 성. 라인란트 지방에서 가장 아름다운 고성 중 하나로, 우르 강이 내려다보이는 언덕 위에 자리하고 있습니다.",
    history:
      "11세기 로마네스크 양식으로 시작되어 14세기까지 고딕 양식으로 확장되었습니다. 나사우-비안덴 백작 가문의 거처였으며, 15세기 이후 점차 쇠퇴하여 19세기에는 폐허가 되었습니다. 1977년 국가 소유로 이관된 후 대대적인 복원을 거쳐 현재의 모습을 되찾았습니다.",
    visitInfo: {
      hours: "10:00~18:00 (4~9월), 10:00~17:00 (10~3월), 연중 개방",
      admission: "성인 10유로, 학생(12~25세) 5유로, 6세 이하 무료",
      address: "Montée du Château, 9408 Vianden, Luxembourg",
      website: "https://castle-vianden.lu",
    },
    highlights: [
      "비잔틴풍 예배당과 기사의 홀 등 중세 인테리어",
      "성 꼭대기에서 바라보는 우르 강 계곡의 파노라마 전경",
      "역대 성주의 가계도와 중세 무기 전시실",
      "매년 8월에 열리는 중세 축제와 기사 시합 재현",
    ],
    nearbyAttractions: [
      "빅토르 위고 하우스 (도보 10분)",
      "비안덴 체어리프트 (도보 5분)",
      "삼위일체 교회 (도보 7분)",
    ],
    photoTips:
      "성 아래 우르 강변 다리에서 성 전체를 올려다보는 구도가 가장 유명한 촬영 포인트입니다. 체어리프트 정상에서 내려다보는 전경도 인상적입니다.",
    tips: [
      "체어리프트 + 성 입장 콤비 티켓이 따로 사는 것보다 저렴합니다.",
      "성까지 마을에서 도보 약 15분이며 경사가 있으니 편한 신발을 착용하세요.",
      "오디오 가이드(한국어 미지원, 영어 가능)를 대여하면 역사를 더 깊이 이해할 수 있습니다.",
      "여름 시즌 주말에는 관광객이 많으니 오전 개장 직후 방문을 추천합니다.",
    ],
  },

  // ===== ECHTERNACH ATTRACTIONS =====
  "luxembourg/countryside/echternach/mullerthal-trail": {
    heroGradient: "from-green-600 to-emerald-900",
    description:
      "'룩셈부르크의 작은 스위스'로 불리는 뮐러탈 지역을 관통하는 총 112km의 프리미엄 하이킹 트레일. 이끼 낀 사암 기둥, 좁은 암석 틈새, 폭포, 동굴 등 환상적인 자연경관을 걸으며 체험합니다.",
    history:
      "뮐러탈 지역의 독특한 사암 지형은 약 2억 년 전 중생대 삼첩기에 형성되었습니다. 오랜 세월 풍화와 침식을 거쳐 기이한 바위 형상이 만들어졌으며, 2014년 유럽 최우수 하이킹 트레일 중 하나로 인증되었습니다.",
    visitInfo: {
      hours: "상시 개방 (자연 트레일)",
      admission: "무료",
      address: "출발점: Echternach Bus Station 또는 Mullerthal Village 주차장",
      website: "https://www.mullerthal-trail.lu",
    },
    highlights: [
      "셰스바흐 폭포 (Schiessentümpel) - 3줄기로 갈라지는 상징적인 폭포",
      "페레클로즈 (Perekop) - 사람 한 명이 겨우 지나가는 좁은 암석 틈새",
      "볼프스슐루흐트 (Wolfsschlucht) - 높은 사암 절벽 사이의 협곡",
      "루트 1, 2, 3으로 구성된 다양한 난이도의 코스 선택 가능",
    ],
    nearbyAttractions: [
      "성 빌리브로드 바실리카 (에히터나흐 시내, 도보 10분)",
      "에히터나흐 호수 (도보 15분)",
      "보몽 성 (Beaufort Castle, 차량 15분)",
    ],
    photoTips:
      "셰스바흐 폭포는 비 온 다음 날 수량이 풍부할 때 가장 포토제닉합니다. 석조 다리와 함께 넓은 화각으로 촬영하세요.",
    tips: [
      "루트 2 (약 37km)가 가장 인기 있으며, 셰스바흐 폭포 구간만 걷는 반나절 코스도 가능합니다.",
      "방수 등산화를 반드시 착용하세요. 바위와 뿌리가 많아 미끄러울 수 있습니다.",
      "트레일 표지판(노란 삼각형 마크)이 잘 되어 있어 길 잃을 걱정은 적습니다.",
      "에히터나흐 관광안내소에서 상세 지도를 무료로 받을 수 있습니다.",
      "여름에도 숲속은 서늘하므로 가벼운 긴팔을 준비하세요.",
    ],
  },
};
