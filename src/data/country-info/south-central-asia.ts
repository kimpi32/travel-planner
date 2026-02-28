import type { CountryDetail } from "../country-details";

export const southCentralAsiaDetails: Record<string, CountryDetail> = {
  india: {
    heroGradient: "from-orange-500 via-amber-500 to-green-600",
    intro:
      "인도는 수천 년의 문명과 다양한 종교·문화가 공존하는 거대한 아대륙입니다. 타지마할의 순백 대리석, 갠지스강의 성스러운 의식, 라자스탄의 화려한 궁전, 케랄라의 열대 수로까지 — 어디서나 압도적인 감동을 선사하는 나라입니다.",
    capital: "뉴델리 (New Delhi)",
    currency: "인도 루피 (INR, ₹)",
    timezone: "한국보다 3시간 30분 느림 (IST)",
    bestSeason: "10월 ~ 3월",
    flightTime: "직항 약 8~9시간",
    visa: "e-비자 신청 필요 (도착 전 온라인 발급)",
    recommendedDays: "10~21일",
    dailyBudget: "약 3~8만원 (여행 스타일에 따라 큰 차이)",
    regions: [
      {
        slug: "delhi-north",
        name: "델리 & 북인도",
        nameEn: "Delhi & North India",
        icon: "🕌",
        gradient: "from-orange-500 to-red-700",
        description:
          "무굴 제국의 유산이 집중된 인도 여행의 출발점. 레드 포트, 타지마할, 핑크시티 자이푸르를 잇는 황금 삼각 루트가 핵심입니다.",
        cities: [
          {
            name: "델리",
            nameEn: "Delhi",
            description:
              "인도의 수도. 올드 델리의 무굴 유산과 뉴 델리의 현대적 면모가 공존하는 거대 도시.",
            gradient: "from-orange-500 to-red-700",
            highlights: ["레드 포트", "쿠뚭 미나르", "후마윤의 묘", "자마 마스지드", "인디아 게이트"],
          },
          {
            name: "아그라",
            nameEn: "Agra",
            description:
              "세계 7대 불가사의 타지마할이 있는 무굴 제국의 옛 수도.",
            gradient: "from-amber-300 to-orange-600",
            highlights: ["타지마할", "아그라 포트", "이티마드 웃 다울라", "파테푸르 시크리"],
          },
          {
            name: "자이푸르",
            nameEn: "Jaipur",
            description:
              "핑크시티로 불리는 라자스탄의 주도. 화려한 궁전과 요새의 도시.",
            gradient: "from-pink-400 to-rose-700",
            highlights: ["암베르 포트", "하와 마할", "시티 팰리스", "잔타르 만타르"],
          },
        ],
        tips: [
          "황금 삼각(델리-아그라-자이푸르) 루트는 기차로 이동하는 것이 가장 효율적입니다.",
          "타지마할은 금요일 휴무이며 일출 입장 티켓을 미리 예약하세요.",
          "여름(4~6월)은 45°C 이상의 극심한 더위로 방문을 피하는 것이 좋습니다.",
        ],
      },
      {
        slug: "rajasthan",
        name: "라자스탄",
        nameEn: "Rajasthan",
        icon: "🏯",
        gradient: "from-amber-500 to-orange-800",
        description:
          "사막과 요새의 땅. 블루시티 조드푸르, 레이크시티 우다이푸르 등 색으로 불리는 개성 넘치는 도시들이 모여 있습니다.",
        cities: [
          {
            name: "조드푸르",
            nameEn: "Jodhpur",
            description:
              "파란 건물이 가득한 블루시티. 메헤랑가르 요새가 도시를 내려다봅니다.",
            gradient: "from-blue-500 to-indigo-800",
            highlights: ["메헤랑가르 요새", "재스완트 타다", "클록 타워 시장", "블루시티 골목"],
          },
          {
            name: "우다이푸르",
            nameEn: "Udaipur",
            description:
              "호수 위의 궁전으로 유명한 라자스탄에서 가장 낭만적인 도시.",
            gradient: "from-teal-400 to-blue-700",
            highlights: ["시티 팰리스", "피촐라 호수", "레이크 팰리스 호텔", "자그디시 사원"],
          },
        ],
        tips: [
          "라자스탄 도시들 간 이동은 야간 기차나 버스를 활용하면 시간을 절약할 수 있습니다.",
          "낙타 사파리는 자이살메르에서 가장 정통적인 체험이 가능합니다.",
        ],
      },
      {
        slug: "varanasi-east",
        name: "바라나시 & 동인도",
        nameEn: "Varanasi & East India",
        icon: "🪔",
        gradient: "from-yellow-500 to-orange-700",
        description:
          "힌두교 최고의 성지 바라나시와 갠지스강이 있는 영적인 인도의 심장부.",
        cities: [
          {
            name: "바라나시",
            nameEn: "Varanasi",
            description:
              "세계에서 가장 오래된 도시 중 하나. 갠지스강 가트에서 펼쳐지는 힌두 의식은 인도 여행의 압권입니다.",
            gradient: "from-yellow-500 to-orange-700",
            highlights: ["갠지스강 가트", "가이 아라티 의식", "사르나트", "비슈와나트 사원"],
          },
        ],
        tips: [
          "새벽 보트 투어로 갠지스강 일출을 감상하는 것이 바라나시 최고의 경험입니다.",
          "화장 가트 방문 시 촬영에 특히 예의를 갖추세요.",
        ],
      },
      {
        slug: "mumbai-west",
        name: "뭄바이 & 서인도",
        nameEn: "Mumbai & West India",
        icon: "🎬",
        gradient: "from-cyan-500 to-blue-800",
        description:
          "인도의 경제 수도 뭄바이와 열대 해변 고아가 있는 서인도 지역.",
        cities: [
          {
            name: "뭄바이",
            nameEn: "Mumbai",
            description:
              "인도 최대의 도시이자 볼리우드의 본고장. 게이트웨이 오브 인디아와 다라비 슬럼이 공존합니다.",
            gradient: "from-cyan-500 to-blue-800",
            highlights: ["게이트웨이 오브 인디아", "다라비 투어", "콜라바 코즈웨이", "엘리판타 섬"],
          },
          {
            name: "고아",
            nameEn: "Goa",
            description:
              "포르투갈 식민지 시절 교회와 열대 해변이 공존하는 인도의 해변 낙원.",
            gradient: "from-emerald-400 to-teal-700",
            highlights: ["봄 지저스 대성당", "칼란구트 해변", "아람볼 해변", "올드 고아 교회군"],
          },
        ],
        tips: [
          "뭄바이는 로컬 기차로 이동하는 것이 가장 빠르지만, 러시아워(8~10시, 17~20시)는 매우 혼잡합니다.",
          "고아는 11~3월이 최적 여행 시기입니다. 몬순 시즌(6~9월)은 해변 접근이 어렵습니다.",
        ],
      },
      {
        slug: "south",
        name: "남인도",
        nameEn: "South India",
        icon: "🌴",
        gradient: "from-green-500 to-emerald-800",
        description:
          "드라비다 문화와 열대 자연이 살아있는 인도의 또 다른 얼굴. 케랄라 수로와 방갈로르의 IT 도시가 공존합니다.",
        cities: [
          {
            name: "케랄라",
            nameEn: "Kerala",
            description:
              "하우스보트로 유명한 수로의 땅. 아유르베다 마사지와 열대 자연이 가득한 '신의 땅'.",
            gradient: "from-green-500 to-emerald-800",
            highlights: ["앨러피 수로 하우스보트", "문나르 차 농장", "코치 구시가지", "페리야르 야생동물 보호구"],
          },
          {
            name: "방갈로르",
            nameEn: "Bangalore",
            description:
              "인도의 실리콘밸리. 쾌적한 기후와 현대적 카페·레스토랑이 발달한 IT 도시.",
            gradient: "from-purple-500 to-indigo-800",
            highlights: ["룰랄 바그 식물원", "방갈로르 궁전", "엠지 로드", "큐비콘 파크"],
          },
        ],
        tips: [
          "케랄라 하우스보트는 앨러피(알라푸자)에서 예약하며, 최소 1박은 해야 수로의 진수를 느낄 수 있습니다.",
          "남인도 요리는 북인도와 달리 쌀 기반이며, 채식 메뉴가 풍부합니다.",
        ],
      },
    ],
    foods: [
      {
        name: "버터 치킨 (마카니 치킨)",
        emoji: "🍗",
        description: "델리에서 탄생한 크리미한 토마토·버터 기반 치킨 커리. 전 세계에서 사랑받는 인도 요리의 대표주자.",
      },
      {
        name: "비리야니",
        emoji: "🍛",
        description: "향신료와 함께 조리한 바스마티 쌀 요리. 하이데라바드, 럭나우, 콜카타 등 지역마다 고유한 스타일이 있습니다.",
      },
      {
        name: "탄두리 치킨",
        emoji: "🔥",
        description: "탄두르 화덕에서 구운 향신료 마리네이드 치킨. 붉은 색과 스모키한 풍미가 특징.",
      },
      {
        name: "모모",
        emoji: "🥟",
        description: "북인도와 히말라야 지역의 인기 만두 간식. 물소고기, 닭고기, 채소 속을 넣어 찐 것.",
      },
      {
        name: "마살라 도사",
        emoji: "🫓",
        description: "쌀과 렌틸콩 반죽을 얇게 펴 구운 남인도 크레페. 감자 마살라를 싸서 삼바르(채소 수프)와 함께 먹습니다.",
      },
      {
        name: "라씨",
        emoji: "🥛",
        description: "요거트에 물, 설탕, 과일을 섞은 인도의 전통 음료. 망고 라씨가 가장 유명합니다.",
      },
    ],
    tips: [
      "인도 여행 전 장티푸스, A형 간염, 말라리아 예방접종을 고려하세요.",
      "물은 반드시 생수(실 확인)만 마시고, 얼음이 들어간 음료는 주의하세요.",
      "오토릭샤·택시 이용 시 미터기 사용을 주장하거나 사전에 요금을 협상하세요.",
      "사원 방문 시 신발을 벗어야 하므로 탈착이 편한 신발이 좋습니다.",
      "힌두교 사원은 비힌두 교도 입장이 금지된 곳이 많습니다.",
      "현금(루피)을 충분히 준비하세요. 소도시나 시장에서는 카드가 안 되는 경우가 많습니다.",
      "인도 SIM 카드(Jio, Airtel)는 공항에서 구입 가능하며 데이터가 매우 저렴합니다.",
      "기차 예약은 최소 2~4주 전 IRCTC 앱이나 웹사이트에서 미리 하세요.",
    ],
  },

  nepal: {
    heroGradient: "from-red-700 via-blue-800 to-white",
    intro:
      "세계 최고봉 에베레스트를 품은 히말라야의 나라. 카트만두의 유네스코 세계유산 사원들, 포카라의 아름다운 호수, 에베레스트 트레킹 루트까지 — 자연과 정신적 문화가 완벽하게 어우러진 여행자의 천국입니다.",
    capital: "카트만두 (Kathmandu)",
    currency: "네팔 루피 (NPR, Rs)",
    timezone: "한국보다 3시간 15분 느림 (NST)",
    bestSeason: "10월 ~ 11월, 3월 ~ 4월",
    flightTime: "직항 없음 (경유 약 7~10시간)",
    visa: "도착 비자 발급 가능 (15/30/90일 옵션)",
    recommendedDays: "7~21일",
    dailyBudget: "약 3~6만원",
    regions: [
      {
        slug: "kathmandu-valley",
        name: "카트만두 밸리",
        nameEn: "Kathmandu Valley",
        icon: "🕌",
        gradient: "from-orange-500 to-red-800",
        description:
          "카트만두, 박타푸르, 파탄 세 개의 고대 왕도가 모여 있는 유네스코 세계유산 지역. 힌두교와 불교 문화가 공존하는 신비로운 분위기.",
        cities: [
          {
            name: "카트만두",
            nameEn: "Kathmandu",
            description:
              "네팔의 수도이자 히말라야 트레킹의 관문. 보드나트 스투파와 파슈파티나트 사원이 있는 문화 도시.",
            gradient: "from-orange-500 to-red-800",
            highlights: ["보드나트 스투파", "파슈파티나트 사원", "더르바르 광장", "스와얌부나트", "타멜 거리"],
          },
          {
            name: "박타푸르",
            nameEn: "Bhaktapur",
            description:
              "중세 네와르 건축이 가장 잘 보존된 '신의 도시'. 도자기 광장과 55창문 궁전이 유명.",
            gradient: "from-amber-600 to-red-700",
            highlights: ["더르바르 광장", "냐타폴라 사원", "도자기 광장", "55창문 궁전"],
          },
          {
            name: "파탄",
            nameEn: "Patan",
            description:
              "금속 공예와 불교 예술의 도시. 카트만두에서 가장 가까운 고대 도시.",
            gradient: "from-yellow-500 to-amber-800",
            highlights: ["파탄 더르바르 광장", "황금 사원", "쿰베스와르 사원", "파탄 박물관"],
          },
        ],
        tips: [
          "박타푸르는 별도 입장료(USD 15)가 있으며, 이틀 이상 체류 시 연장 가능합니다.",
          "카트만두 공기 오염이 심하므로 마스크를 챙기면 좋습니다.",
          "택시 이용 시 미터기 사용 또는 사전 요금 협상을 하세요.",
        ],
      },
      {
        slug: "pokhara",
        name: "포카라",
        nameEn: "Pokhara",
        icon: "🏔️",
        gradient: "from-blue-400 to-cyan-700",
        description:
          "안나푸르나 연봉이 반영되는 페와 호수의 도시. 트레킹의 베이스캠프이자 패러글라이딩의 메카로 히말라야와 호수를 동시에 즐길 수 있습니다.",
        cities: [
          {
            name: "포카라",
            nameEn: "Pokhara",
            description:
              "안나푸르나 트레킹의 출발점이자 네팔 제2의 도시. 페와 호수에서의 보트 투어가 아름답습니다.",
            gradient: "from-blue-400 to-cyan-700",
            highlights: ["페와 호수", "패러글라이딩", "사랑코트 일출 전망대", "국제산악박물관", "데비스 폭포"],
          },
        ],
        tips: [
          "사랑코트 일출 전망에서 안나푸르나 연봉을 보려면 새벽 4시 출발이 필요합니다.",
          "패러글라이딩은 페디(Phedi)에서 출발해 페와 호수 위에 착지하는 코스가 인기입니다.",
          "레이크사이드(Lakeside) 지구에 숙소와 레스토랑이 집중되어 있습니다.",
        ],
      },
      {
        slug: "everest-region",
        name: "에베레스트 지역",
        nameEn: "Everest Region",
        icon: "⛰️",
        gradient: "from-slate-600 to-blue-900",
        description:
          "세계 최고봉 에베레스트(8,849m)와 그 주변을 트레킹하는 세계 최고의 산악 여행지. 남체 바자르를 거쳐 에베레스트 베이스캠프(EBC)까지 이어지는 루트가 핵심입니다.",
        cities: [
          {
            name: "남체 바자르",
            nameEn: "Namche Bazaar",
            description:
              "에베레스트 트레킹의 허브. 해발 3,440m에 위치한 셰르파족의 마을로 고소 적응의 거점.",
            gradient: "from-slate-600 to-blue-900",
            highlights: ["에베레스트 전망대", "셰르파 문화 박물관", "힐러리 학교", "토요 시장"],
          },
        ],
        tips: [
          "에베레스트 지역 진입은 루클라(Lukla) 소형 비행기로 이동합니다. 날씨에 따라 결항이 잦으므로 일정에 여유를 두세요.",
          "남체 바자르에서 최소 2일 고소 적응 후 상부로 이동하는 것을 권장합니다.",
          "에베레스트 트레킹은 가이드+포터와 함께하는 것이 안전하고 현지 경제에도 도움이 됩니다.",
        ],
      },
    ],
    foods: [
      {
        name: "달밧 (Dal Bhat)",
        emoji: "🍛",
        description: "렌틸콩 수프(달), 밥(밧), 채소 반찬으로 구성된 네팔 국민 식사. 대부분의 식당에서 리필이 무한입니다.",
      },
      {
        name: "모모",
        emoji: "🥟",
        description: "네팔식 만두. 물소고기, 닭고기, 채소 속을 넣어 찐 후 매콤한 소스와 함께 먹는 국민 간식.",
      },
      {
        name: "툭파",
        emoji: "🍜",
        description: "티베트에서 유래한 국수 요리. 고산 지대 트레킹 중 몸을 따뜻하게 해주는 든든한 한 끼.",
      },
      {
        name: "세쿠와",
        emoji: "🍖",
        description: "숯불에 구운 네팔식 고기 구이. 닭고기와 양고기 버전이 인기입니다.",
      },
      {
        name: "차이 (마살라 차이)",
        emoji: "☕",
        description: "밀크티에 생강, 카다멈, 계피 등 향신료를 넣은 달콤한 차. 네팔 어디서나 마실 수 있습니다.",
      },
    ],
    tips: [
      "네팔 입국 시 도착 비자(USD 25/15일, USD 40/30일)를 현장에서 받을 수 있습니다.",
      "카트만두 공항(TIA)에서 시내까지 공식 택시를 이용하고, 미리 요금을 정하세요.",
      "트레킹 전 TIMS(트레킹 정보 관리 시스템) 카드와 해당 지역 입장 퍼밋을 준비하세요.",
      "고산병(AMS) 예방을 위해 충분한 수분 섭취와 천천히 고도를 높이는 것이 중요합니다.",
      "네팔 전기 사정이 불안정하므로 보조배터리와 어댑터를 챙기세요.",
      "사원에서는 시계 방향으로 돌아야 하며, 사진 촬영 전 허가를 확인하세요.",
      "계절성 정전(로드쉐딩)이 있으므로 헤드랜턴을 항상 준비하세요.",
    ],
  },

  "sri-lanka": {
    heroGradient: "from-amber-500 via-emerald-600 to-teal-700",
    intro:
      "인도양의 눈물 방울이라 불리는 스리랑카는 고대 불교 문명, 열대 해변, 야생동물 사파리가 작은 섬에 모두 담겨 있습니다. 시기리야 바위 요새, 캔디 불치사, 갈레 포트의 독특한 매력이 여행자를 사로잡습니다.",
    capital: "스리자야와르데네푸라 코테 (Sri Jayawardenepura Kotte) / 행정: 콜롬보",
    currency: "스리랑카 루피 (LKR, Rs)",
    timezone: "한국보다 3시간 30분 느림 (SLST)",
    bestSeason: "11월 ~ 4월 (서부·남부 해안 건기)",
    flightTime: "경유 약 8~12시간",
    visa: "전자 비자 (ETA) 사전 신청 필요 (USD 35, 30일)",
    recommendedDays: "7~14일",
    dailyBudget: "약 5~10만원",
    regions: [
      {
        slug: "colombo-west",
        name: "콜롬보 & 서부 해안",
        nameEn: "Colombo & West Coast",
        icon: "🌊",
        gradient: "from-emerald-500 to-teal-800",
        description:
          "스리랑카의 경제 수도 콜롬보와 네곰보 등 서부 해안 도시들. 식민지 건축과 현대적 카페, 다문화 음식 문화가 어우러집니다.",
        cities: [
          {
            name: "콜롬보",
            nameEn: "Colombo",
            description:
              "스리랑카 최대 도시. 포르투갈·네덜란드·영국 식민지 건축과 불교·힌두·이슬람 사원이 공존합니다.",
            gradient: "from-emerald-500 to-teal-800",
            highlights: ["간가라마야 사원", "갈레 페이스 그린", "페타 시장", "국립박물관", "콜롬보 포트"],
          },
          {
            name: "네곰보",
            nameEn: "Negombo",
            description:
              "콜롬보 공항 인근의 어촌 해변 도시. 스리랑카 여행의 시작점으로 많이 이용됩니다.",
            gradient: "from-sky-400 to-blue-700",
            highlights: ["네곰보 해변", "어시장", "더치 운하", "성 메리 교회"],
          },
        ],
        tips: [
          "콜롬보에서 투크투크(삼륜 오토바이)는 PickMe 또는 Uber 앱으로 부르면 바가지를 피할 수 있습니다.",
          "갈레 페이스 그린에서 석양을 보며 길거리 음식(오토스)을 먹는 것이 현지 문화입니다.",
        ],
      },
      {
        slug: "cultural-triangle",
        name: "문화 삼각 지대",
        nameEn: "Cultural Triangle",
        icon: "🏛️",
        gradient: "from-amber-500 to-red-700",
        description:
          "시기리야, 담불라, 캔디를 잇는 스리랑카 불교 문명의 심장부. 유네스코 세계유산이 집중된 지역입니다.",
        cities: [
          {
            name: "시기리야",
            nameEn: "Sigiriya",
            description:
              "200m 높이의 바위 꼭대기에 세워진 고대 왕의 궁전. 5세기 프레스코화와 물의 정원이 경이롭습니다.",
            gradient: "from-amber-500 to-red-700",
            highlights: ["시기리야 바위 요새", "물의 정원", "5세기 프레스코화", "사자 발 관문"],
          },
          {
            name: "담불라",
            nameEn: "Dambulla",
            description:
              "바위 동굴 안에 조성된 세계 최대의 동굴 사원군. 150개 이상의 불상이 모셔져 있습니다.",
            gradient: "from-yellow-400 to-amber-700",
            highlights: ["담불라 동굴 사원", "황금 사원", "담불라 경제 센터"],
          },
          {
            name: "캔디",
            nameEn: "Kandy",
            description:
              "스리랑카 마지막 왕국의 수도. 부처의 치아 사리가 모셔진 불치사와 아름다운 캔디 호수가 있습니다.",
            gradient: "from-orange-400 to-rose-700",
            highlights: ["불치사 (Temple of the Tooth)", "캔디 호수", "왕립식물원 페라데니야", "에살라 페라헤라 축제"],
          },
        ],
        tips: [
          "시기리야는 아침 일찍(7시 개장) 방문해야 인파와 더위를 피할 수 있습니다.",
          "문화 삼각 지대 콤보 티켓(USD 35)이 개별 입장권보다 훨씬 저렴합니다.",
          "불치사 방문 시 어깨와 무릎을 가리는 복장이 필수입니다.",
        ],
      },
      {
        slug: "south-coast",
        name: "남부 해안",
        nameEn: "South Coast",
        icon: "🐢",
        gradient: "from-teal-500 to-emerald-800",
        description:
          "갈레 포트의 식민지 역사와 미리사의 고래 관찰, 야라 사파리까지 — 자연과 역사가 공존하는 스리랑카 남부 해안.",
        cities: [
          {
            name: "갈레",
            nameEn: "Galle",
            description:
              "1663년 네덜란드가 건설한 요새 도시. 유네스코 세계유산인 갈레 포트 안에 카페, 부티크 호텔, 갤러리가 들어서 있습니다.",
            gradient: "from-teal-500 to-blue-800",
            highlights: ["갈레 포트", "더치 개혁 교회", "등대", "성벽 일몰 산책", "포트 내 카페 거리"],
          },
          {
            name: "미리사",
            nameEn: "Mirissa",
            description:
              "고래 관찰과 돌고래 투어로 유명한 반달 모양의 아름다운 해변.",
            gradient: "from-blue-400 to-cyan-700",
            highlights: ["고래 관찰 투어 (12~4월)", "미리사 해변", "코코넛 트리 힐", "서핑"],
          },
        ],
        tips: [
          "갈레 포트 안은 걸어서 충분히 돌아볼 수 있으며, 골목 탐방이 매력입니다.",
          "미리사 고래 관찰 투어는 새벽 5시 30분~6시 출발이 일반적입니다. 멀미약을 꼭 준비하세요.",
          "남부 해안은 11~4월이 건기이며, 5~10월은 서퍼들의 시즌입니다.",
        ],
      },
    ],
    foods: [
      {
        name: "라이스 앤 커리",
        emoji: "🍛",
        description: "스리랑카 국민 음식. 쌀밥에 여러 가지 커리(생선, 채소, 달)를 곁들여 먹는 전통 식사 방식.",
      },
      {
        name: "코투 로티",
        emoji: "🥘",
        description: "납작 빵(고다 로티)을 채소, 달걀, 고기와 함께 철판에 잘게 썰어 볶은 스리랑카 길거리 음식.",
      },
      {
        name: "호퍼 (아파)",
        emoji: "🫓",
        description: "발효 쌀 반죽으로 만든 그릇 모양의 크레페. 에그 호퍼는 안에 달걀을 넣어 구운 아침 식사의 정석.",
      },
      {
        name: "스트링 호퍼",
        emoji: "🍝",
        description: "쌀가루 반죽을 국수 모양으로 짜서 쪄낸 것. 달, 코코넛 삼볼과 함께 먹습니다.",
      },
      {
        name: "콜롬보 피시 커리",
        emoji: "🐟",
        description: "고르카(타마린드)를 넣어 새콤한 맛이 나는 스리랑카 전통 생선 커리. 코코넛 밀크와 강황이 풍부하게 들어갑니다.",
      },
    ],
    tips: [
      "스리랑카 전자 비자(ETA)는 출발 최소 3일 전 eta.gov.lk에서 신청하세요.",
      "기차 여행이 일품입니다. 특히 캔디-엘라 구간은 세계에서 가장 아름다운 기차 노선 중 하나입니다.",
      "투크투크 가격은 항상 흥정이 필요하며, PickMe 앱을 이용하면 편리합니다.",
      "불교 사원 방문 시 어깨와 무릎을 가리는 옷 필수. 사롱(천)을 빌려주는 곳도 있습니다.",
      "서부·남부 건기(11~4월), 동부·북부 건기(5~9월)로 시즌이 나뉩니다.",
      "음식은 대체로 매우 맵습니다. 주문 시 '낫 스파이시(not spicy)'를 명확히 말하세요.",
      "스리랑카 통화는 해외 송금이 어려우므로 ATM(비자/마스터 가능)을 활용하세요.",
    ],
  },

  uzbekistan: {
    heroGradient: "from-blue-600 via-cyan-500 to-amber-500",
    intro:
      "실크로드의 심장. 사마르칸트의 황금빛 레기스탄 광장, 부하라의 중세 이슬람 도시, 히바의 이치칸 칼라 요새도시가 고스란히 살아있는 중앙아시아의 문명 보고입니다. 티무르 제국의 찬란한 유산을 따라가는 여행은 시간여행 그 자체입니다.",
    capital: "타슈켄트 (Tashkent)",
    currency: "우즈베키스탄 숨 (UZS, сум)",
    timezone: "한국보다 4시간 느림 (UZT)",
    bestSeason: "4월 ~ 5월, 9월 ~ 10월",
    flightTime: "직항 약 7시간",
    visa: "한국 무비자 30일",
    recommendedDays: "7~12일",
    dailyBudget: "약 4~8만원",
    regions: [
      {
        slug: "tashkent",
        name: "타슈켄트",
        nameEn: "Tashkent",
        icon: "🏙️",
        gradient: "from-blue-500 to-cyan-800",
        description:
          "중앙아시아 최대 도시이자 우즈베키스탄의 수도. 소련 시대 모더니즘 건축과 전통 이슬람 건축, 화려한 지하철 역사가 독특하게 공존합니다.",
        cities: [
          {
            name: "타슈켄트",
            nameEn: "Tashkent",
            description:
              "중앙아시아의 현관문. 초르수 바자르, 하즈라티 이맘 광장, 아름다운 지하철 역사가 볼거리입니다.",
            gradient: "from-blue-500 to-cyan-800",
            highlights: ["초르수 바자르", "하즈라티 이맘 광장", "타슈켄트 지하철 역사", "아미르 티무르 광장", "나보이 극장"],
          },
        ],
        tips: [
          "타슈켄트 지하철 역사는 각각 다른 테마로 꾸며진 지하 예술 갤러리입니다. 모든 역을 둘러보세요.",
          "초르수 바자르는 오전에 방문해야 가장 활기차고 신선한 상품을 볼 수 있습니다.",
        ],
      },
      {
        slug: "silk-road",
        name: "실크로드 삼대 도시",
        nameEn: "Silk Road Cities",
        icon: "🕌",
        gradient: "from-amber-500 to-orange-800",
        description:
          "사마르칸트, 부하라, 히바 — 실크로드 시대 이슬람 문명의 진수를 보여주는 세 도시. 각각 유네스코 세계유산으로 지정되어 있습니다.",
        cities: [
          {
            name: "사마르칸트",
            nameEn: "Samarkand",
            description:
              "티무르 제국의 수도. 레기스탄 광장의 세 마드라사와 샤히 진다 영묘군은 이슬람 건축의 절정입니다.",
            gradient: "from-blue-500 to-indigo-800",
            highlights: ["레기스탄 광장", "샤히 진다 영묘군", "구르 에미르 묘", "비비하눔 모스크", "울루그베크 천문대"],
          },
          {
            name: "부하라",
            nameEn: "Bukhara",
            description:
              "2,500년 역사의 살아있는 이슬람 도시. 아르크 요새에서 포이 칼얀 광장까지 중세 분위기가 그대로 남아 있습니다.",
            gradient: "from-amber-500 to-red-700",
            highlights: ["아르크 요새", "포이 칼얀 광장", "칼얀 미나렛", "라비 하우즈 광장", "이스마일 사마니 묘"],
          },
          {
            name: "히바",
            nameEn: "Khiva",
            description:
              "이치칸 칼라(내성) 전체가 유네스코 세계유산. 성벽 안 미로 같은 골목과 이슬람 건축물이 중세 도시국가를 재현합니다.",
            gradient: "from-yellow-400 to-amber-700",
            highlights: ["이치칸 칼라 (내성 요새도시)", "칼타 미나르", "파흘라반 마흐무드 영묘", "주마 모스크"],
          },
        ],
        tips: [
          "레기스탄 광장은 밤에도 조명이 아름다우니 주간과 야간 모두 방문하세요.",
          "사마르칸트-부하라-히바 이동은 기차(아프로시아브 고속열차 등)와 장거리 버스를 활용하세요.",
          "히바는 규모가 작아 하루 이상이면 충분히 둘러볼 수 있습니다.",
        ],
      },
    ],
    foods: [
      {
        name: "플로프 (오쉬)",
        emoji: "🍚",
        description: "우즈베키스탄 국민 음식. 커다란 솥에 쌀, 당근, 양고기를 넣어 지은 중앙아시아식 필라프. 사마르칸트식이 가장 유명합니다.",
      },
      {
        name: "쉬슐릭",
        emoji: "🍢",
        description: "숯불에 구운 양고기·닭고기 꼬치. 향신료와 식초에 재운 고기를 꼬치에 꿰어 굽는 중앙아시아 바베큐.",
      },
      {
        name: "논 (전통 빵)",
        emoji: "🫓",
        description: "탄두르 화덕에서 구운 둥근 전통 빵. 겉은 바삭하고 속은 촉촉하며, 지역마다 무늬와 크기가 다릅니다.",
      },
      {
        name: "라그만",
        emoji: "🍜",
        description: "수제 국수에 채소와 고기를 넣은 볶음면 또는 국물 요리. 실크로드 교역 문화의 영향을 받은 중앙아시아 면 요리.",
      },
      {
        name: "삼사",
        emoji: "🥟",
        description: "양고기와 양파를 넣어 탄두르에 구운 삼각형 파이. 길거리에서 언제든 맛볼 수 있는 국민 간식.",
      },
    ],
    tips: [
      "한국 여권 소지자는 30일 무비자로 입국 가능합니다 (2024년 기준 확인 권장).",
      "우즈베키스탄 숨은 고액권이 두꺼워 공항·공인 환전소에서 환전하세요. 암시장 환전은 법적으로 불법입니다.",
      "여름(6~8월)은 40°C를 웃도는 극심한 더위입니다. 봄(4~5월)과 가을(9~10월)이 최적 방문 시기입니다.",
      "도시 간 이동은 아프로시아브 고속열차(타슈켄트-사마르칸트, 2시간)가 편리합니다.",
      "사원·모스크 방문 시 복장 규정(여성은 머리 스카프, 어깨·무릎 가리기)을 지키세요.",
      "카드 사용이 점차 늘고 있지만 현금(숨)을 충분히 준비하는 것이 안전합니다.",
      "물은 생수를 구입하여 마시세요. 수돗물은 음용하지 마세요.",
    ],
  },

  kazakhstan: {
    heroGradient: "from-sky-500 via-blue-600 to-yellow-400",
    intro:
      "세계 9위의 광활한 영토를 가진 중앙아시아의 경제 강국. 천산산맥이 병풍처럼 둘러싼 알마티의 도시 트레킹, 미래 도시 아스타나의 독특한 건축, 차른 캐니언의 장엄한 협곡까지 — 예상을 뛰어넘는 다채로운 매력을 가진 나라입니다.",
    capital: "아스타나 (Astana, 구 누르술탄)",
    currency: "카자흐스탄 텡게 (KZT, ₸)",
    timezone: "한국보다 3시간 느림 (ALMT / 알마티 기준)",
    bestSeason: "5월 ~ 6월, 9월 ~ 10월",
    flightTime: "직항 약 5~6시간",
    visa: "한국 무비자 30일",
    recommendedDays: "5~10일",
    dailyBudget: "약 5~10만원",
    regions: [
      {
        slug: "almaty",
        name: "알마티",
        nameEn: "Almaty",
        icon: "🏔️",
        gradient: "from-emerald-500 to-teal-800",
        description:
          "천산산맥 자락에 위치한 카자흐스탄 최대 도시. '사과의 도시'라는 뜻으로 소련 시대 건축과 현대적 카페, 그리고 도심 근처의 산악 액티비티를 동시에 즐길 수 있습니다.",
        cities: [
          {
            name: "알마티",
            nameEn: "Almaty",
            description:
              "카자흐스탄의 문화·경제 중심지. 메데우 스케이트장, 침불락 스키장, 그린 바자르가 있는 코스모폴리탄 도시.",
            gradient: "from-emerald-500 to-teal-800",
            highlights: ["메데우 스케이트장", "침불락 스키 리조트", "그린 바자르", "젠코프 대성당", "콕토베 언덕 전망대"],
          },
        ],
        tips: [
          "알마티에서 침불락 스키장까지 케이블카(3단계)로 해발 3,163m까지 올라갈 수 있습니다.",
          "빅 알마티 호수(Big Almaty Lake)는 차량 약 40분으로 접근 가능한 절경입니다.",
          "Yandex Go 앱으로 택시를 부르면 합리적인 요금에 이용할 수 있습니다.",
        ],
      },
      {
        slug: "astana",
        name: "아스타나",
        nameEn: "Astana",
        icon: "🏙️",
        gradient: "from-sky-400 to-blue-700",
        description:
          "1997년 수도로 이전된 계획도시. 바이테렉 타워, 칸 샤티르 쇼핑센터 등 미래지향적 건축물이 가득한 21세기 신도시의 표본입니다.",
        cities: [
          {
            name: "아스타나",
            nameEn: "Astana",
            description:
              "광활한 초원 위에 건설된 미래 도시. 이탈리아·영국 등 세계적인 건축가들이 설계한 독특한 건물들이 스카이라인을 채웁니다.",
            gradient: "from-sky-400 to-blue-700",
            highlights: ["바이테렉 타워", "칸 샤티르 엔터테인먼트 센터", "국립박물관", "하즈렛 술탄 모스크", "아크 오르다 대통령궁"],
          },
        ],
        tips: [
          "아스타나 겨울은 영하 30~40°C까지 떨어집니다. 11~3월 방문 시 극한 방한 준비가 필수입니다.",
          "바이테렉 타워 전망대에서 아스타나 전경을 내려다보는 것이 필수 코스입니다.",
        ],
      },
      {
        slug: "nature",
        name: "자연 명소",
        nameEn: "Nature Sites",
        icon: "🏜️",
        gradient: "from-amber-500 to-orange-800",
        description:
          "차른 캐니언의 '미국 그랜드캐니언 축소판'으로 불리는 장엄한 협곡과 카자흐스탄의 광활한 초원 자연.",
        cities: [
          {
            name: "차른 캐니언",
            nameEn: "Charyn Canyon",
            description:
              "알마티에서 약 200km 거리에 있는 장엄한 협곡. 붉은 사암이 깎여 만들어진 '성의 계곡'이 하이라이트입니다.",
            gradient: "from-amber-500 to-orange-800",
            highlights: ["성의 계곡 트레킹", "차른 강 래프팅", "협곡 일몰 촬영", "캠핑"],
          },
        ],
        tips: [
          "차른 캐니언은 알마티에서 당일치기 투어로 많이 방문합니다. 투어 상품을 이용하면 편리합니다.",
          "여름철 협곡 내부는 매우 뜨거우므로 충분한 물과 모자를 준비하세요.",
        ],
      },
    ],
    foods: [
      {
        name: "베스바르막",
        emoji: "🍖",
        description: "카자흐스탄 최고의 전통 음식. 양고기 또는 말고기를 손으로 뜯어 넓적한 국수와 함께 먹는 국빈용 요리. 이름은 '다섯 손가락'이라는 뜻.",
      },
      {
        name: "쿠르닥",
        emoji: "🥘",
        description: "양고기의 내장(심장, 간, 폐)을 양파와 함께 볶은 전통 음식. 진한 풍미가 특징.",
      },
      {
        name: "쿠미스",
        emoji: "🥛",
        description: "암말의 젖을 발효시킨 카자흐 전통 음료. 알코올 도수가 낮으며 유목민 문화의 상징입니다.",
      },
      {
        name: "쉬슐릭",
        emoji: "🍢",
        description: "중앙아시아 공통의 숯불 양고기 꼬치. 카자흐스탄에서도 가장 대중적인 외식 메뉴.",
      },
      {
        name: "바우르삭",
        emoji: "🍩",
        description: "기름에 튀긴 도넛형 반죽. 손님 접대나 명절에 빠지지 않는 카자흐 전통 과자.",
      },
    ],
    tips: [
      "한국 여권은 카자흐스탄에 30일 무비자 입국이 가능합니다.",
      "알마티-아스타나 간 국내 항공편이 기차보다 시간이 훨씬 절약됩니다 (기차는 약 12시간).",
      "텡게(KZT) 환전은 공항보다 시내 환전소가 유리합니다. Kaspi Gold 앱(현지 금융 앱)도 외국인 등록 후 사용 가능.",
      "러시아어가 카자흐어와 함께 널리 통용됩니다. 구글 번역 앱을 활용하세요.",
      "카자흐스탄은 광활한 나라이므로 도시 간 이동에 항공 이용을 적극 고려하세요.",
      "알마티의 고급 레스토랑은 카드 결제가 가능하지만, 시장이나 소규모 식당은 현금만 받는 경우가 많습니다.",
      "겨울 여행(12~2월)은 아스타나 기준 영하 30°C 이하로 극도로 춥습니다.",
    ],
  },

  georgia: {
    heroGradient: "from-red-700 via-white to-red-700",
    intro:
      "유럽과 아시아의 경계, 코카서스의 보석. 세계에서 가장 오래된 와인 생산국으로 8,000년 역사를 자랑합니다. 트빌리시의 유황 온천과 고대 요새, 카즈베기의 웅장한 코카서스 산맥, 바투미의 흑해 해변까지 — 소박하고 따뜻한 환대로 여행자를 맞이하는 나라입니다.",
    capital: "트빌리시 (Tbilisi)",
    currency: "조지아 라리 (GEL, ₾)",
    timezone: "한국보다 5시간 느림 (GET)",
    bestSeason: "5월 ~ 6월, 9월 ~ 10월",
    flightTime: "경유 약 9~13시간",
    visa: "한국 무비자 1년 체류 가능",
    recommendedDays: "7~14일",
    dailyBudget: "약 5~10만원",
    regions: [
      {
        slug: "tbilisi",
        name: "트빌리시",
        nameEn: "Tbilisi",
        icon: "🏛️",
        gradient: "from-amber-600 to-rose-800",
        description:
          "조지아의 수도이자 코카서스의 문화 수도. 유황 온천 지구와 나리칼라 요새, 유리와 강철의 현대적 평화의 다리가 공존하는 역사와 현대의 도시.",
        cities: [
          {
            name: "트빌리시",
            nameEn: "Tbilisi",
            description:
              "코카서스의 보석. 구시가지의 유황 온천과 발코니 달린 전통 가옥, 세계적인 와인 바와 카페가 어우러진 매력적인 수도.",
            gradient: "from-amber-600 to-rose-800",
            highlights: ["올드 타운 & 유황 온천", "나리칼라 요새", "루스타벨리 대로", "평화의 다리", "드라이 브리지 벼룩시장"],
          },
        ],
        tips: [
          "트빌리시 유황 온천(아바노투바니 지구)의 크로마 바스는 개인실 사전 예약을 추천합니다.",
          "나리칼라 요새는 케이블카로 올라가 일몰 후 구시가지 야경을 감상하는 것이 압권입니다.",
          "드라이 브리지 마켓은 주말에 소련 시대 골동품과 수공예품을 흥정하기 좋습니다.",
        ],
      },
      {
        slug: "countryside",
        name: "조지아 지방",
        nameEn: "Georgian Countryside",
        icon: "⛪",
        gradient: "from-emerald-500 to-slate-700",
        description:
          "트빌리시 근교의 고대 수도 므츠헤타, 코카서스 산맥의 카즈베기, 흑해 해변 도시 바투미까지 — 조지아의 진정한 매력은 수도 밖에서도 빛납니다.",
        cities: [
          {
            name: "므츠헤타",
            nameEn: "Mtskheta",
            description:
              "조지아의 고대 수도이자 유네스코 세계유산 도시. 즈바리 수도원과 스베티츠호벨리 대성당이 있는 조지아 정교회의 성지.",
            gradient: "from-emerald-500 to-green-800",
            highlights: ["즈바리 수도원", "스베티츠호벨리 대성당", "삼타브로 수도원", "전통 조지아 와인 시음"],
          },
          {
            name: "카즈베기",
            nameEn: "Kazbegi",
            description:
              "코카서스 산맥 해발 2,170m의 산악 마을. 게르게티 삼위일체 교회와 카즈베크 산(5,047m)의 장엄한 풍경이 압도적입니다.",
            gradient: "from-sky-500 to-slate-800",
            highlights: ["게르게티 삼위일체 교회", "카즈베크 산 조망", "트레킹 루트", "군용 도로(조지아 군사 도로)"],
          },
          {
            name: "바투미",
            nameEn: "Batumi",
            description:
              "흑해 연안의 리조트 도시. 현대적 고층 호텔과 조지아 전통 건축이 섞인 독특한 항구 도시.",
            gradient: "from-blue-400 to-cyan-700",
            highlights: ["바투미 불바르 해변 산책로", "알리 & 니노 조각상", "바투미 구시가지", "흑해 일몰"],
          },
        ],
        tips: [
          "카즈베기는 트빌리시에서 마슈룻카(미니버스)로 약 3시간. 조지아 군사 도로를 지나는 경치가 장엄합니다.",
          "므츠헤타는 트빌리시에서 마슈룻카 30분 거리로 반나절 당일치기로 충분합니다.",
          "게르게티 삼위일체 교회까지는 4x4 차량으로 올라가거나 도보 약 2시간이 소요됩니다.",
        ],
      },
    ],
    foods: [
      {
        name: "힌칼리",
        emoji: "🥟",
        description: "고기 육즙이 가득 찬 조지아식 만두. 꼭지를 잡고 한 입 베어 먹어 국물부터 마시는 것이 정석입니다.",
      },
      {
        name: "하차푸리",
        emoji: "🧀",
        description: "치즈가 가득 들어간 조지아 전통 빵. 아자리아식(배 모양에 달걀+버터 추가)이 가장 인기입니다.",
      },
      {
        name: "조지아 와인",
        emoji: "🍷",
        description: "8,000년 역사의 세계 최초 와인 생산국. 항아리(크베브리)에서 발효시킨 앰버 와인(오렌지 와인)이 독특합니다.",
      },
      {
        name: "음체바디",
        emoji: "🫓",
        description: "조지아식 치즈 구이 빵. 술구니 치즈가 녹아드는 고소한 맛이 힌칼리와 함께 조지아 식탁의 필수품.",
      },
      {
        name: "차카풀리",
        emoji: "🍲",
        description: "봄에 먹는 조지아 전통 양고기 스튜. 타라곤(청향) 허브와 화이트 와인이 들어가 상큼하고 향긋합니다.",
      },
    ],
    tips: [
      "한국 국적자는 조지아에 비자 없이 1년까지 체류 가능합니다 (세계 최고 수준의 비자 정책).",
      "조지아 라리(GEL)는 국내에서 환전이 어렵습니다. 트빌리시 공항 ATM 또는 시내 환전소를 이용하세요.",
      "트빌리시 대중교통(지하철+버스)은 메트로머니 카드로 이용. 1회 승차 1 GEL(약 480원)입니다.",
      "조지아 식당은 대체로 저렴합니다. 와인 한 병이 약 5~15 GEL 수준.",
      "카즈베기 방문 시 날씨 변화가 심하므로 방한 레이어 의류와 우비를 꼭 챙기세요.",
      "조지아어는 독자적인 문자 체계를 가져 영어와 러시아어가 보조 소통 수단으로 활용됩니다.",
      "트빌리시 공항에서 시내까지 익스프레스 버스(37번)가 약 0.5 GEL로 매우 저렴하게 운행됩니다.",
    ],
  },
};
