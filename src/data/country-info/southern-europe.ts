import type { CountryDetail } from "../country-details";

export const southernEuropeDetails: Record<string, CountryDetail> = {
  italy: {
    heroGradient: "from-green-600 via-white to-red-600",
    intro:
      "이탈리아는 2,000년 역사의 유적, 르네상스 예술, 세계 최고의 미식 문화가 한데 어우러진 나라입니다. 로마의 콜로세움, 피렌체의 우피치 미술관, 베네치아의 운하, 아말피 해안의 절경까지 — 어느 도시를 가도 세계 어디서도 볼 수 없는 풍경이 펼쳐집니다.",
    capital: "로마 (Rome)",
    currency: "유로 (EUR, €)",
    timezone: "한국보다 8시간 느림 (서머타임 시 7시간)",
    bestSeason: "4월 ~ 6월, 9월 ~ 10월",
    flightTime: "직항 약 12시간",
    visa: "무비자 90일",
    recommendedDays: "10~14일",
    dailyBudget: "약 10~20만원",
    regions: [
      {
        slug: "rome-lazio",
        name: "로마 & 라치오",
        nameEn: "Rome & Lazio",
        icon: "🏛️",
        gradient: "from-amber-600 to-red-800",
        description:
          "영원의 도시 로마와 그 주변 라치오 주. 콜로세움, 바티칸, 판테온 등 고대 로마 유적이 집중되어 있으며 세계 가톨릭의 총본산입니다.",
        cities: [
          {
            name: "로마",
            nameEn: "Rome",
            description: "2,000년 역사의 유적이 도시 곳곳에 살아 숨 쉬는 영원의 도시.",
            gradient: "from-amber-600 to-red-800",
            highlights: ["콜로세움", "바티칸 미술관", "트레비 분수", "판테온"],
          },
          {
            name: "바티칸 시국",
            nameEn: "Vatican City",
            description: "세계 최소 독립국이자 가톨릭의 총본산. 성 베드로 대성당과 시스티나 예배당이 있습니다.",
            gradient: "from-yellow-500 to-amber-800",
            highlights: ["성 베드로 대성당", "시스티나 예배당", "바티칸 박물관"],
          },
          {
            name: "티볼리",
            nameEn: "Tivoli",
            description: "로마 근교의 고대 휴양 도시. UNESCO 세계유산 에스테 별장의 분수 정원이 압권입니다.",
            gradient: "from-green-500 to-emerald-800",
            highlights: ["에스테 별장", "하드리아누스 별장"],
          },
        ],
        tips: [
          "콜로세움은 반드시 온라인 사전 예약이 필요합니다.",
          "바티칸 미술관은 오전 개장 직후 또는 금요일 야간 개방을 활용하세요.",
          "로마 패스(Roma Pass)로 대중교통과 주요 관광지 할인을 받을 수 있습니다.",
        ],
      },
      {
        slug: "tuscany",
        name: "토스카나",
        nameEn: "Tuscany",
        icon: "🍷",
        gradient: "from-rose-500 to-amber-700",
        description:
          "르네상스의 발상지 피렌체와 중세 마을이 산재한 이탈리아 문화의 정수. 사이프러스 나무와 포도밭, 언덕 위 성곽 마을이 만드는 풍경은 세계 어디에도 없는 아름다움입니다.",
        cities: [
          {
            name: "피렌체",
            nameEn: "Florence",
            description: "르네상스의 발상지. 우피치 미술관, 두오모, 베키오 다리가 있는 야외 미술관 같은 도시.",
            gradient: "from-rose-500 to-amber-700",
            highlights: ["우피치 미술관", "두오모", "베키오 다리", "미켈란젤로 광장"],
          },
          {
            name: "시에나",
            nameEn: "Siena",
            description: "중세에 멈춘 토스카나의 보석. 조개 모양 캄포 광장과 팔리오 경마로 유명합니다.",
            gradient: "from-orange-500 to-red-800",
            highlights: ["캄포 광장", "시에나 두오모", "만자의 탑"],
          },
          {
            name: "피사",
            nameEn: "Pisa",
            description: "기울어진 탑과 기적의 광장이 있는 UNESCO 세계유산 도시.",
            gradient: "from-sky-400 to-blue-700",
            highlights: ["피사의 사탑", "기적의 광장", "피사 대성당"],
          },
          {
            name: "산 지미냐노",
            nameEn: "San Gimignano",
            description: "'중세 맨해튼'이라 불리는 탑의 도시. 14개 중세 탑이 만드는 독특한 스카이라인.",
            gradient: "from-amber-500 to-yellow-800",
            highlights: ["그로사 탑", "치스테르나 광장", "베르나차 와인"],
          },
        ],
        tips: [
          "피렌체 카드(72시간)로 우피치, 아카데미아 등 주요 미술관을 우선 입장하세요.",
          "투스카니 와인 생산지 키안티 지역 드라이브를 추천합니다.",
          "소도시들은 피렌체 또는 시에나에서 버스·기차로 당일치기가 가능합니다.",
        ],
      },
      {
        slug: "venice-veneto",
        name: "베네치아 & 베네토",
        nameEn: "Venice & Veneto",
        icon: "🚤",
        gradient: "from-blue-400 to-cyan-800",
        description:
          "118개의 섬으로 이루어진 물의 도시 베네치아와 그 주변 베네토 주. 곤돌라, 산 마르코 대성당, 카니발로 세계적으로 유명하며, 로미오와 줄리엣의 도시 베로나도 함께 즐길 수 있습니다.",
        cities: [
          {
            name: "베네치아",
            nameEn: "Venice",
            description: "세상에 둘도 없는 물의 도시. 산 마르코 광장, 리알토 다리, 부라노 섬이 매력적입니다.",
            gradient: "from-blue-400 to-cyan-800",
            highlights: ["산 마르코 대성당", "두칼레 궁전", "리알토 다리", "부라노 섬"],
          },
          {
            name: "베로나",
            nameEn: "Verona",
            description: "로미오와 줄리엣의 배경 도시. 고대 로마 원형 경기장 아레나에서 여름 오페라가 열립니다.",
            gradient: "from-rose-500 to-pink-800",
            highlights: ["베로나 아레나", "줄리엣의 집", "에르베 광장"],
          },
        ],
        tips: [
          "바포레토 1일/2일 패스로 수상버스를 무제한 이용하세요.",
          "성수기(7~8월)에는 하루 5만 명 이상이 방문하므로 이른 아침에 움직이세요.",
          "산 마르코 광장은 겨울철 아쿠아 알타(침수) 시 방수 신발이 필요합니다.",
        ],
      },
      {
        slug: "milan-lombardy",
        name: "밀라노 & 롬바르디아",
        nameEn: "Milan & Lombardy",
        icon: "👔",
        gradient: "from-slate-500 to-gray-900",
        description:
          "이탈리아의 경제·패션 수도 밀라노와 알프스 호수 지대. 레오나르도 다 빈치의 최후의 만찬, 두오모, 코모 호수의 빌라 등 세련된 문화와 자연이 조화를 이룹니다.",
        cities: [
          {
            name: "밀라노",
            nameEn: "Milan",
            description: "패션과 디자인의 수도. 두오모, 최후의 만찬, 나빌리 운하 지구가 인기입니다.",
            gradient: "from-slate-500 to-gray-900",
            highlights: ["두오모 디 밀라노", "최후의 만찬", "갤러리아 비토리오 에마누엘레 2세"],
          },
          {
            name: "코모 호수",
            nameEn: "Lake Como",
            description: "알프스 산자락의 그림 같은 호수. 유럽 귀족들의 오랜 휴양지로 빌라와 정원이 아름답습니다.",
            gradient: "from-cyan-500 to-blue-800",
            highlights: ["벨라지오", "빌라 칼로타", "빌라 델 발비아넬로"],
          },
        ],
        tips: [
          "최후의 만찬은 최소 2개월 전 예약이 필수입니다 (cenacolovinciano.org).",
          "밀라노 패션위크(2월, 9월)에는 숙소 가격이 크게 오릅니다.",
          "아페리티보(저녁 6~9시) 문화를 즐기세요 — 음료 한 잔에 뷔페 포함.",
        ],
      },
      {
        slug: "naples-south",
        name: "나폴리 & 남부",
        nameEn: "Naples & South",
        icon: "🍕",
        gradient: "from-orange-500 to-red-800",
        description:
          "피자의 본고장 나폴리와 세계 최고 해안 절경 아말피, 고대 도시 폼페이가 있는 남부 이탈리아. 혼돈과 열정이 넘치는 거친 매력 속에 깊은 역사와 미식이 숨어 있습니다.",
        cities: [
          {
            name: "나폴리",
            nameEn: "Naples",
            description: "피자 마르게리타의 발상지이자 폼페이·아말피로 가는 관문 도시.",
            gradient: "from-orange-500 to-red-800",
            highlights: ["나폴리 고고학 박물관", "스파카나폴리", "피자 맛집"],
          },
          {
            name: "아말피 해안",
            nameEn: "Amalfi Coast",
            description: "지중해의 보석. 절벽 위 알록달록한 마을과 에메랄드 바다가 UNESCO 세계유산.",
            gradient: "from-blue-400 to-cyan-700",
            highlights: ["포지타노", "아말피", "신들의 길"],
          },
          {
            name: "폼페이",
            nameEn: "Pompeii",
            description: "서기 79년 화산 폭발로 매몰된 고대 로마 도시. 2,000년 전 일상이 그대로 보존.",
            gradient: "from-stone-500 to-stone-800",
            highlights: ["폼페이 고고학 공원", "포럼", "비밀의 별장"],
          },
        ],
        tips: [
          "나폴리는 소매치기가 잦으니 귀중품을 최소화하세요.",
          "피자는 L'Antica Pizzeria da Michele 또는 Sorbillo에서 맛보세요.",
          "아말피 해안은 성수기 페리+버스 조합이 렌터카보다 편리합니다.",
        ],
      },
      {
        slug: "sicily",
        name: "시칠리아",
        nameEn: "Sicily",
        icon: "🌋",
        gradient: "from-amber-500 to-orange-800",
        description:
          "지중해 최대의 섬이자 아랍·노르만·그리스 문화가 융합된 독특한 세계. 팔레르모의 활기찬 시장, 타오르미나의 그리스 극장, 유럽 최대 활화산 에트나까지 시칠리아만의 매력이 넘칩니다.",
        cities: [
          {
            name: "팔레르모",
            nameEn: "Palermo",
            description: "시칠리아의 수도. 아랍·노르만 문화가 융합된 독특한 건축과 활기찬 재래시장이 매력적.",
            gradient: "from-amber-500 to-orange-800",
            highlights: ["팔레르모 대성당", "노르만 궁전", "발라로 시장"],
          },
          {
            name: "타오르미나",
            nameEn: "Taormina",
            description: "에트나 산과 이오니아 해가 동시에 보이는 절벽 위 휴양 도시.",
            gradient: "from-indigo-400 to-blue-800",
            highlights: ["타오르미나 그리스 극장", "이솔라 벨라", "에트나 산 당일치기"],
          },
        ],
        tips: [
          "시칠리아는 본토보다 물가가 저렴하고 음식 양이 풍부합니다.",
          "발라로·부치리아 시장의 길거리 음식 투어를 꼭 해보세요.",
          "오후 1~4시 시에스타에는 많은 상점이 문을 닫습니다.",
        ],
      },
    ],
    foods: [
      {
        name: "피자 마르게리타",
        emoji: "🍕",
        description: "나폴리가 원조인 세계에서 가장 유명한 피자. 토마토·모차렐라·바질의 완벽한 삼위일체.",
      },
      {
        name: "카르보나라",
        emoji: "🍝",
        description: "계란, 페코리노 치즈, 관찰레, 후추만으로 만드는 로마 정통 파스타. 크림은 절대 들어가지 않습니다.",
      },
      {
        name: "젤라토",
        emoji: "🍨",
        description: "이탈리아 전통 아이스크림. 일반 아이스크림보다 유지방이 낮고 밀도가 높아 진한 맛이 특징.",
      },
      {
        name: "리조토 알라 밀라네제",
        emoji: "🍚",
        description: "사프란으로 노랗게 물든 밀라노 대표 리조토. 진한 육수와 버터로 완성하는 이탈리아 북부 음식.",
      },
      {
        name: "아란치니",
        emoji: "🍙",
        description: "고기 라구나 치즈를 넣어 튀긴 시칠리아식 라이스볼. 시칠리아 길거리 음식의 대표 주자.",
      },
      {
        name: "티라미수",
        emoji: "🍰",
        description: "에스프레소에 적신 레이디핑거 비스킷과 마스카르포네 크림으로 만드는 이탈리아 대표 디저트.",
      },
    ],
    tips: [
      "주요 관광지(콜로세움, 바티칸, 우피치 등)는 반드시 온라인 사전 예약이 필요합니다. 현장 구매는 수 시간 대기가 일반적입니다.",
      "이탈리아 레스토랑에는 코페르토(자릿세, €1~3)가 별도로 부과되며, 이는 정상적인 관행입니다.",
      "이탈리아의 진짜 에스프레소는 바 카운터에서 서서 마셔야 가격이 저렴합니다. 앉으면 서비스 요금이 추가됩니다.",
      "소매치기가 로마·나폴리·피렌체 등 대도시에서 자주 발생합니다. 크로스백을 앞으로 메고 핸드폰을 꺼내지 마세요.",
      "여름(7~8월)은 매우 덥고 관광객이 폭발적으로 많습니다. 봄(4~5월)이나 가을(9~10월)이 최적 시즌입니다.",
      "ZTL(교통 제한 구역) 표시가 있는 곳에 렌터카로 진입하면 자동 카메라에 찍혀 벌금이 부과됩니다.",
      "이탈리아에서 좋은 에스프레소를 마시려면 'Bar' 표지판이 있는 곳을 찾으세요. 이탈리아에서 바는 카페입니다.",
      "트레비 분수, 스페인 계단, 나보나 광장 등 관광 명소 근처 음식점은 가격이 비쌉니다. 한 블록 안쪽으로 이동하세요.",
    ],
  },

  spain: {
    heroGradient: "from-red-600 via-yellow-400 to-red-600",
    intro:
      "스페인은 플라멩코의 열정, 가우디의 초현실적 건축, 세계적인 미식 문화가 공존하는 나라입니다. 마드리드의 세계 3대 미술관, 바르셀로나의 가우디 건축, 안달루시아의 이슬람 유산, 바스크의 핀초스까지 — 지역마다 전혀 다른 매력이 기다립니다.",
    capital: "마드리드 (Madrid)",
    currency: "유로 (EUR, €)",
    timezone: "한국보다 8시간 느림 (서머타임 시 7시간)",
    bestSeason: "3월 ~ 5월, 9월 ~ 11월",
    flightTime: "직항 약 13시간",
    visa: "무비자 90일",
    recommendedDays: "7~14일",
    dailyBudget: "약 8~15만원",
    regions: [
      {
        slug: "barcelona-catalonia",
        name: "바르셀로나 & 카탈루냐",
        nameEn: "Barcelona & Catalonia",
        icon: "🏗️",
        gradient: "from-red-500 to-orange-700",
        description:
          "가우디 건축과 지중해 해변의 도시 바르셀로나. 사그라다 파밀리아, 구엘 공원, 고딕 지구의 매력과 함께 카탈루냐 특유의 문화가 풍성합니다.",
        cities: [
          {
            name: "바르셀로나",
            nameEn: "Barcelona",
            description: "가우디의 건축과 지중해 해변, 람블라스 거리의 활기가 공존하는 카탈루냐의 수도.",
            gradient: "from-red-500 to-orange-700",
            highlights: ["사그라다 파밀리아", "구엘 공원", "고딕 지구", "카사 바트요"],
          },
          {
            name: "몬세라트",
            nameEn: "Montserrat",
            description: "톱니 모양 바위산의 베네딕트 수도원. 검은 성모상과 소년 합창단으로 유명한 성지.",
            gradient: "from-stone-500 to-stone-800",
            highlights: ["몬세라트 수도원", "산 호안 전망대"],
          },
          {
            name: "지로나",
            nameEn: "Girona",
            description: "오냐르 강변 색색 건물과 중세 성벽의 도시. 왕좌의 게임 촬영지로 유명합니다.",
            gradient: "from-amber-400 to-red-600",
            highlights: ["지로나 대성당", "유대인 거리", "오냐르 강변"],
          },
        ],
        tips: [
          "사그라다 파밀리아는 최소 2주 전 온라인 예약이 필수입니다.",
          "람블라스 거리에서 소매치기에 특히 주의하세요.",
          "메트로 T-Casual(10회권)이 단일 티켓보다 훨씬 경제적입니다.",
        ],
      },
      {
        slug: "madrid-central",
        name: "마드리드 & 중부",
        nameEn: "Madrid & Central Spain",
        icon: "🎨",
        gradient: "from-red-600 to-red-900",
        description:
          "스페인의 수도이자 세계 최고 수준의 미술관 도시 마드리드. 프라도, 레이나 소피아, 티센 미술관이 모인 '황금 삼각형'과 왕궁, 세고비아·톨레도 근교 여행이 매력적입니다.",
        cities: [
          {
            name: "마드리드",
            nameEn: "Madrid",
            description: "프라도 미술관, 왕궁, 레티로 공원이 있는 스페인의 수도. 활기찬 타파스와 밤문화.",
            gradient: "from-red-600 to-red-900",
            highlights: ["프라도 미술관", "왕궁", "레티로 공원", "산 미겔 시장"],
          },
          {
            name: "톨레도",
            nameEn: "Toledo",
            description: "세 종교가 공존한 '세 문화의 도시'. 타호 강이 감싸는 언덕 위 UNESCO 세계유산 요새 도시.",
            gradient: "from-amber-600 to-amber-900",
            highlights: ["톨레도 대성당", "알카사르", "산토 토메 교회"],
          },
          {
            name: "세고비아",
            nameEn: "Segovia",
            description: "2,000년 된 로마 수도교와 디즈니 성의 모델 알카사르가 있는 카스티야의 보석.",
            gradient: "from-stone-500 to-blue-800",
            highlights: ["세고비아 수도교", "알카사르", "세고비아 대성당"],
          },
        ],
        tips: [
          "프라도 미술관은 월~토 18:00~20:00 무료 입장 (단, 줄이 매우 깁니다).",
          "마드리드는 저녁 식사를 21:00~22:00에 시작하는 현지 문화가 있습니다.",
          "마드리드에서 톨레도·세고비아는 고속열차로 30분이라 당일치기가 완벽합니다.",
        ],
      },
      {
        slug: "andalusia",
        name: "안달루시아",
        nameEn: "Andalusia",
        icon: "💃",
        gradient: "from-orange-500 to-red-700",
        description:
          "플라멩코의 본고장이자 이슬람 문화의 꽃이 피었던 스페인 남부. 알함브라 궁전, 세비야 알카사르, 코르도바 메스키타가 만드는 무데하르 건축의 향연과 뜨거운 태양이 기다립니다.",
        cities: [
          {
            name: "세비야",
            nameEn: "Seville",
            description: "안달루시아의 수도이자 플라멩코의 본고장. 알카사르, 대성당, 스페인 광장이 압권입니다.",
            gradient: "from-orange-500 to-red-700",
            highlights: ["알카사르", "세비야 대성당", "스페인 광장", "트리아나 지구"],
          },
          {
            name: "그라나다",
            nameEn: "Granada",
            description: "이슬람 건축의 최고 걸작 알함브라 궁전의 도시. 무료 타파스 문화도 유명합니다.",
            gradient: "from-red-700 to-amber-600",
            highlights: ["알함브라", "알바이신", "사크로몬테 플라멩코"],
          },
          {
            name: "코르도바",
            nameEn: "Cordoba",
            description: "856개 기둥의 메스키타와 꽃 장식 파티오가 아름다운 UNESCO 세계유산 도시.",
            gradient: "from-red-600 to-amber-700",
            highlights: ["메스키타", "알카사르", "로마 다리"],
          },
          {
            name: "말라가",
            nameEn: "Malaga",
            description: "피카소의 고향이자 코스타 델 솔의 관문. 지중해 해변과 알카사바가 매력적.",
            gradient: "from-blue-400 to-amber-600",
            highlights: ["알카사바", "피카소 미술관", "히브랄파로 성"],
          },
        ],
        tips: [
          "알함브라 티켓은 2개월 전에 매진되니 여행 확정 즉시 예약하세요.",
          "여름(6~8월) 세비야는 45°C를 넘기므로 이른 아침과 저녁에만 활동하세요.",
          "메스키타 무료 입장은 월~토 08:30~09:30이니 일찍 도착하세요.",
        ],
      },
      {
        slug: "basque-north",
        name: "바스크 & 북부",
        nameEn: "Basque Country & North",
        icon: "🍽️",
        gradient: "from-teal-500 to-blue-800",
        description:
          "세계 최고의 미식 문화가 숨어 있는 스페인 북부. 산 세바스티안의 핀초스 바, 빌바오의 구겐하임 미술관, 바스크 특유의 독립적 문화가 다른 스페인과는 전혀 다른 경험을 선사합니다.",
        cities: [
          {
            name: "산 세바스티안",
            nameEn: "San Sebastian",
            description: "인구 대비 미슐랭 스타 밀도 세계 최고의 미식 도시. 라 콘차 해변이 절경.",
            gradient: "from-teal-500 to-blue-800",
            highlights: ["라 콘차 해변", "파르테 비에하 핀초스 바", "몬테 이겔도"],
          },
          {
            name: "빌바오",
            nameEn: "Bilbao",
            description: "구겐하임 미술관 하나로 도시가 변모한 '빌바오 효과'의 주인공.",
            gradient: "from-gray-500 to-gray-800",
            highlights: ["구겐하임 미술관", "카스코 비에호", "비스카야 다리"],
          },
        ],
        tips: [
          "핀초스 바 호핑은 파르테 비에하에서 시작해 한 곳에서 1~2개씩 이동하세요.",
          "미슐랭 레스토랑 예약은 최소 1개월 전에 해야 합니다.",
          "구겐하임 미술관은 화요일 비수기에 무료 입장이 가능합니다.",
        ],
      },
      {
        slug: "valencia-east",
        name: "발렌시아 & 동부",
        nameEn: "Valencia & East",
        icon: "🥘",
        gradient: "from-orange-400 to-blue-600",
        description:
          "빠에야의 원조 도시이자 미래지향적 건축의 도시 발렌시아. 예술과학도시의 초현대식 건축과 3월 라스 파야스 축제가 유명하며, 지중해의 온화한 기후가 연중 방문객을 맞이합니다.",
        cities: [
          {
            name: "발렌시아",
            nameEn: "Valencia",
            description: "빠에야 원조 도시. 예술과학도시의 미래형 건축과 중앙시장의 활기가 공존합니다.",
            gradient: "from-orange-400 to-blue-600",
            highlights: ["예술과학도시", "중앙시장", "실크 거래소", "빠에야 레스토랑"],
          },
        ],
        tips: [
          "3월 라스 파야스 축제는 발렌시아 최대 행사로 숙소를 미리 예약하세요.",
          "정통 빠에야는 해산물이 아닌 토끼+닭+채소 버전이 원조입니다.",
          "발렌비시(공유자전거)로 투리아 정원을 달리는 코스를 강력 추천합니다.",
        ],
      },
    ],
    foods: [
      {
        name: "빠에야",
        emoji: "🥘",
        description: "발렌시아 원조 쌀 요리. 토끼·닭·채소가 정통이며, 해산물 버전도 인기. 온 가족이 나눠 먹는 이탈리아의 피자 같은 존재.",
      },
      {
        name: "하몽 이베리코",
        emoji: "🥓",
        description: "도토리를 먹여 키운 이베리코 돼지의 생햄. 스페인 미식의 정수로, 얇게 슬라이스해 그대로 즐깁니다.",
      },
      {
        name: "핀초스",
        emoji: "🍢",
        description: "바스크식 타파스. 바게트 위에 다양한 재료를 올린 한입 크기 요리. 바마다 자신만의 시그니처 핀초스가 있습니다.",
      },
      {
        name: "가스파초",
        emoji: "🍅",
        description: "토마토·오이·피망·마늘을 갈아 만든 안달루시아식 냉수프. 여름철 지중해 더위를 식혀주는 최고의 음식.",
      },
      {
        name: "추로스 콘 초콜라테",
        emoji: "🍫",
        description: "진한 핫초코에 추로스를 찍어 먹는 스페인의 아침 간식. 마드리드 산 히네스가 100년 전통 명소.",
      },
      {
        name: "크레마 카탈라나",
        emoji: "🍮",
        description: "카탈루냐식 크렘 브륄레. 시나몬과 레몬 향이 특징이며 프랑스 버전보다 더 가벼운 질감.",
      },
    ],
    tips: [
      "스페인의 점심(14:00~16:00)은 하루 중 가장 큰 식사입니다. 레스토랑 메뉴 델 디아(오늘의 런치 세트)를 이용하면 저렴하게 풀코스를 즐길 수 있습니다.",
      "저녁 식사는 21:00 이후가 현지 문화입니다. 19:00~20:00에 레스토랑에 가면 빈 가게가 많습니다.",
      "여름(7~8월) 남부 스페인(세비야, 코르도바)은 40~45°C까지 올라갑니다. 시에스타(14:00~17:00)에는 실내에서 쉬세요.",
      "AVE 고속열차로 마드리드↔바르셀로나(약 2.5시간), 마드리드↔세비야(약 2.5시간)를 빠르게 이동할 수 있습니다.",
      "타파스 바에서는 한 곳에 오래 있기보다 여러 곳을 이동하며 즐기는 문화입니다.",
      "스페인 국립박물관(프라도, 레이나 소피아 등)은 저녁 무료 입장 시간을 적극 활용하세요.",
      "소매치기는 바르셀로나 람블라스, 마드리드 지하철에서 자주 발생합니다. 가방은 항상 앞에 메세요.",
    ],
  },

  portugal: {
    heroGradient: "from-green-700 via-red-600 to-yellow-400",
    intro:
      "포르투갈은 대항해시대의 낭만이 살아 숨 쉬는 나라입니다. 아줄레주 타일로 장식된 파사드, 파두 음악의 애수, 에그타르트의 달콤함, 그리고 알가르브의 황금빛 절벽 해안까지 — 소박하면서도 깊은 매력이 있는 서유럽의 숨겨진 보석입니다.",
    capital: "리스본 (Lisbon)",
    currency: "유로 (EUR, €)",
    timezone: "한국보다 9시간 느림 (서머타임 시 8시간)",
    bestSeason: "4월 ~ 10월",
    flightTime: "직항 없음, 경유 약 14~16시간",
    visa: "무비자 90일",
    recommendedDays: "7~10일",
    dailyBudget: "약 7~12만원",
    regions: [
      {
        slug: "lisbon-region",
        name: "리스본 & 근교",
        nameEn: "Lisbon Region",
        icon: "🚋",
        gradient: "from-yellow-500 to-red-700",
        description:
          "7개의 언덕 위에 세워진 포르투갈의 수도 리스본. 아줄레주 타일, 파두 음악, 28번 트램, 에그타르트의 도시이며 근교에는 동화 같은 신트라와 해변 휴양지 카스카이스가 있습니다.",
        cities: [
          {
            name: "리스본",
            nameEn: "Lisbon",
            description: "파두와 아줄레주, 에그타르트의 도시. 벨렝 탑, 제로니무스 수도원 등 대항해시대 유산이 풍성.",
            gradient: "from-yellow-500 to-red-700",
            highlights: ["벨렝 탑", "제로니무스 수도원", "알파마 지구", "LX 팩토리"],
          },
          {
            name: "신트라",
            nameEn: "Sintra",
            description: "숲속에 동화 같은 궁전이 흩어진 UNESCO 세계유산 마을. 페나 궁전의 알록달록한 색채가 압권.",
            gradient: "from-purple-400 to-pink-700",
            highlights: ["페나 궁전", "킨타 다 레갈레이라", "무어인 성"],
          },
          {
            name: "카스카이스",
            nameEn: "Cascais",
            description: "리스본 근교 우아한 해변 도시. 19세기 왕실 여름 별장지로 해안 절벽 산책로가 유명.",
            gradient: "from-cyan-400 to-blue-700",
            highlights: ["보카 두 인페르누", "해안 산책로", "기슈 해변"],
          },
        ],
        tips: [
          "리스보아 카드(24/48/72시간)로 대중교통 무료 + 주요 관광지 할인.",
          "28번 트램은 소매치기가 많으니 가방을 몸 앞에 메고 타세요.",
          "신트라는 오전 일찍 출발해야 페나 궁전과 킨타 다 레갈레이라를 모두 볼 수 있습니다.",
        ],
      },
      {
        slug: "porto-north",
        name: "포르투 & 북부",
        nameEn: "Porto & North Portugal",
        icon: "🍷",
        gradient: "from-blue-600 to-indigo-900",
        description:
          "포트 와인의 본고장이자 유네스코 세계유산 도시 포르투. 도우루 강변의 색채, 렐루 서점, 아줄레주 기차역이 아름다우며 북쪽으로 가면 봉 제수스와 기마랑이스 등 종교적 성지도 있습니다.",
        cities: [
          {
            name: "포르투",
            nameEn: "Porto",
            description: "포트 와인의 도시이자 포르투갈 제2의 도시. 렐루 서점, 동 루이스 1세 다리, 아줄레주가 압권.",
            gradient: "from-blue-600 to-indigo-900",
            highlights: ["렐루 서점", "동 루이스 1세 다리", "상벤투 기차역", "포트 와인 셀러"],
          },
          {
            name: "도우루 밸리",
            nameEn: "Douro Valley",
            description: "세계 최초 공식 와인 산지(1756년). 계단식 포도밭과 와이너리가 UNESCO 세계유산.",
            gradient: "from-amber-500 to-orange-800",
            highlights: ["와인 크루즈", "퀸타 와이너리 투어", "피냥 기차역"],
          },
          {
            name: "브라가",
            nameEn: "Braga",
            description: "포르투갈에서 가장 오래된 도시 중 하나. 봉 제수스 두 몬치 바로크 성지가 유명합니다.",
            gradient: "from-green-500 to-emerald-800",
            highlights: ["봉 제수스 두 몬치", "브라가 대성당"],
          },
        ],
        tips: [
          "포르투 카드(1~4일)로 대중교통 + 관광지 할인을 받으세요.",
          "렐루 서점은 온라인 사전 예약이 필수입니다.",
          "도우루 라인 기차에서 강변 뷰는 우측 좌석에서 더 잘 보입니다.",
        ],
      },
      {
        slug: "algarve",
        name: "알가르브",
        nameEn: "Algarve",
        icon: "🏖️",
        gradient: "from-teal-400 to-blue-700",
        description:
          "포르투갈 남부의 황금빛 해안 지대. 황금빛 석회암 절벽, 숨겨진 해식 동굴, 투명한 지중해가 어우러진 유럽 최고의 해변 목적지입니다. 파루에서 사그레스까지 이어지는 해안선이 장관입니다.",
        cities: [
          {
            name: "파루",
            nameEn: "Faro",
            description: "알가르브 지방의 수도. 리아 포르모사 자연공원과 중세 성벽 구시가지가 볼거리.",
            gradient: "from-teal-400 to-blue-700",
            highlights: ["리아 포르모사 자연공원", "파루 대성당", "뼈 예배당"],
          },
          {
            name: "라구스",
            nameEn: "Lagos",
            description: "알가르브에서 가장 아름다운 해안 도시. 폰타 다 피에다드의 황금 절벽과 동굴이 압권.",
            gradient: "from-amber-400 to-orange-700",
            highlights: ["폰타 다 피에다드", "카밀루 해변", "동굴 보트 투어"],
          },
        ],
        tips: [
          "알가르브는 렌터카가 가장 편리합니다. 버스 연결이 제한적입니다.",
          "폰타 다 피에다드 보트 투어는 마리나에서 출발하며 사전 예약 권장.",
          "여름 주말 해변은 극도로 혼잡하므로 평일 방문을 추천합니다.",
        ],
      },
    ],
    foods: [
      {
        name: "파스텔 드 나타",
        emoji: "🥧",
        description: "바삭한 페이스트리에 커스터드 크림을 채운 에그타르트의 원조. 벨렝의 파스테이스 드 벨렝이 원조 명소.",
      },
      {
        name: "바칼랴우",
        emoji: "🐟",
        description: "소금에 절인 대구 요리. '포르투갈에는 365가지 바칼랴우 요리가 있다'고 할 만큼 다양하게 즐깁니다.",
      },
      {
        name: "프란세지냐",
        emoji: "🥪",
        description: "포르투 명물. 고기·치즈·소시지를 쌓고 맥주 소스를 부은 거대한 토스트. 칼로리의 폭탄이지만 한 번은 꼭 먹어야 합니다.",
      },
      {
        name: "포트 와인",
        emoji: "🍷",
        description: "도우루 밸리에서 생산되는 세계적인 강화 와인. 빌라 노바 드 가이아의 셀러에서 무료 시음이 가능한 곳이 많습니다.",
      },
      {
        name: "카타플라나",
        emoji: "🦞",
        description: "해산물과 소시지를 구리 냄비에 찐 알가르브 전통 요리. 두 명이 나눠 먹는 요리로 새우·조개·생선이 들어갑니다.",
      },
    ],
    tips: [
      "리스본·포르투는 언덕이 많아 편한 신발이 필수입니다. 미끄러운 아줄레주 타일 포장에도 주의하세요.",
      "28번 트램(리스본)과 포르투 역사 트램은 소매치기 핫스팟입니다. 귀중품 관리에 주의하세요.",
      "파두 공연은 알파마의 소규모 레스토랑이 관광지 쇼보다 더 정통입니다.",
      "포르투갈 음식은 양이 많은 편입니다. 2인이 1인분을 나눠 먹어도 충분한 경우가 많습니다.",
      "리스본·포르투는 영어 소통이 잘 되는 편입니다. 포르투갈어 몇 마디(오브리가두=감사합니다)를 알아두면 현지인들이 좋아합니다.",
      "스페인 마드리드에서 포르투갈 리스본까지 야간 기차(Lusitânia Comboio Hotel)를 이용하면 이동과 숙박을 동시에 해결할 수 있습니다.",
    ],
  },

  greece: {
    heroGradient: "from-blue-600 via-white to-blue-600",
    intro:
      "서양 문명의 요람 그리스. 아크로폴리스의 파르테논, 산토리니의 일몰, 메테오라의 공중 수도원, 크레타의 미노아 문명까지 — 3,000년 역사가 에게해의 눈부신 햇살 속에 살아 숨 쉬는 나라입니다. 섬마다 다른 개성, 고대 유적과 지중해 자연의 조화가 매력입니다.",
    capital: "아테네 (Athens)",
    currency: "유로 (EUR, €)",
    timezone: "한국보다 7시간 느림 (서머타임 시 6시간)",
    bestSeason: "4월 ~ 6월, 9월 ~ 10월",
    flightTime: "직항 없음, 경유 약 13~15시간",
    visa: "무비자 90일",
    recommendedDays: "10~14일",
    dailyBudget: "약 8~15만원",
    regions: [
      {
        slug: "athens-mainland",
        name: "아테네 & 본토",
        nameEn: "Athens & Mainland",
        icon: "🏛️",
        gradient: "from-blue-600 to-amber-500",
        description:
          "서양 문명의 발상지 아테네와 그리스 본토. 아크로폴리스를 중심으로 3,000년 역사가 펼쳐지며, 델피의 신탁소, 메테오라의 공중 수도원까지 그리스 본토의 역사적 하이라이트가 가득합니다.",
        cities: [
          {
            name: "아테네",
            nameEn: "Athens",
            description: "서양 문명의 발상지. 아크로폴리스를 중심으로 고대 유적과 현대 도시가 공존합니다.",
            gradient: "from-blue-600 to-amber-500",
            highlights: ["아크로폴리스", "아크로폴리스 박물관", "플라카 지구", "고대 아고라"],
          },
          {
            name: "델피",
            nameEn: "Delphi",
            description: "고대 그리스인이 '세계의 중심'으로 여겼던 아폴론 신탁소. UNESCO 세계유산.",
            gradient: "from-emerald-500 to-stone-700",
            highlights: ["델피 고고학 유적지", "델피 박물관", "아테나 신전"],
          },
          {
            name: "메테오라",
            nameEn: "Meteora",
            description: "거대한 바위 기둥 위에 세워진 수도원들의 장관. '공중에 떠 있는 수도원'이라 불립니다.",
            gradient: "from-stone-500 to-sky-600",
            highlights: ["대 메테오론 수도원", "바를라암 수도원", "일몰 전망대"],
          },
        ],
        tips: [
          "아크로폴리스 콤비 티켓(€30)으로 7개 유적지를 5일간 방문할 수 있습니다.",
          "여름(7~8월)은 40°C에 달하므로 모자·물·선크림은 필수입니다.",
          "메테오라 수도원은 복장 규정(어깨·무릎 가림)이 엄격합니다.",
        ],
      },
      {
        slug: "cyclades",
        name: "키클라데스 제도",
        nameEn: "Cyclades Islands",
        icon: "🌊",
        gradient: "from-blue-400 to-white",
        description:
          "에게해 한가운데 떠 있는 하얀 집들의 섬 군도. 산토리니의 세계 최고 일몰, 미코노스의 화려한 파티 씬, 델로스의 신화적 유적 — 그리스 하면 가장 먼저 떠오르는 이미지들이 이곳에 있습니다.",
        cities: [
          {
            name: "산토리니",
            nameEn: "Santorini",
            description: "화산 칼데라 위 하얀 마을과 세계 3대 일몰. 꿈의 신혼여행지이자 그리스의 아이콘.",
            gradient: "from-blue-400 to-white",
            highlights: ["이아 일몰", "피라", "레드 비치", "아크로티리 유적"],
          },
          {
            name: "미코노스",
            nameEn: "Mykonos",
            description: "에게해의 파티 아일랜드. 리틀 베니스의 일몰, 풍차, 하얀 골목과 활기찬 클럽 문화.",
            gradient: "from-cyan-400 to-blue-700",
            highlights: ["리틀 베니스", "카토 밀리 풍차", "파라다이스 비치"],
          },
        ],
        tips: [
          "산토리니 7~8월 극성수기에는 숙소 가격이 3~4배 오릅니다. 봄·가을을 노리세요.",
          "이아 일몰은 1~2시간 전부터 자리 경쟁이 치열합니다.",
          "섬 간 이동은 페리로 하며, 고속 페리는 사전 예약 권장.",
        ],
      },
      {
        slug: "crete",
        name: "크레타",
        nameEn: "Crete",
        icon: "🫒",
        gradient: "from-amber-500 to-blue-600",
        description:
          "그리스 최대의 섬이자 유럽 최초 문명 미노아의 발원지. 크노소스 궁전의 신비, 사마리아 협곡 트레킹, 하니아 베네치아 항구의 낭만, 크레타 올리브유의 풍미가 기다립니다.",
        cities: [
          {
            name: "이라클리오",
            nameEn: "Heraklion",
            description: "크레타의 수도. 크노소스 궁전과 세계 최대 미노아 유물 컬렉션의 고고학 박물관이 있습니다.",
            gradient: "from-amber-500 to-blue-600",
            highlights: ["크노소스 궁전", "이라클리오 고고학 박물관", "코울레스 요새"],
          },
          {
            name: "하니아",
            nameEn: "Chania",
            description: "크레타에서 가장 아름다운 도시. 베네치아 항구와 등대, '크레타의 베네치아'라 불립니다.",
            gradient: "from-rose-400 to-amber-500",
            highlights: ["베네치아 항구", "하니아 시장", "사마리아 협곡"],
          },
        ],
        tips: [
          "크레타는 그리스에서 가장 큰 섬이므로 렌터카가 가장 효율적입니다.",
          "크노소스 궁전은 오전 일찍 가야 크루즈 단체를 피할 수 있습니다.",
          "사마리아 협곡 트레킹은 5~10월만 가능하며 5~7시간 소요됩니다.",
        ],
      },
      {
        slug: "other-islands",
        name: "기타 섬",
        nameEn: "Other Islands",
        icon: "🏝️",
        gradient: "from-amber-400 to-rose-600",
        description:
          "키클라데스 외에도 그리스에는 개성 넘치는 섬들이 가득합니다. 중세 기사단의 성이 남아있는 로도스, 영국·베네치아 문화가 혼재하는 이오니아 해의 녹색 보석 코르푸가 대표적입니다.",
        cities: [
          {
            name: "로도스",
            nameEn: "Rhodes",
            description: "중세 기사단의 성이 남아있는 유네스코 세계유산 구시가지. 고대 세계 7대 불가사의의 섬.",
            gradient: "from-amber-400 to-rose-600",
            highlights: ["그랜드 마스터 궁전", "기사단 거리", "린도스 아크로폴리스"],
          },
          {
            name: "코르푸",
            nameEn: "Corfu",
            description: "이오니아 해의 녹색 보석. 영국·프랑스·베네치아 건축 유산이 혼재하는 UNESCO 올드타운.",
            gradient: "from-emerald-400 to-blue-500",
            highlights: ["코르푸 올드타운", "팔레오카스트리차", "아킬레이온 궁전"],
          },
        ],
        tips: [
          "로도스 올드타운 골목은 미로처럼 되어 있으니 지도 앱을 활용하세요.",
          "코르푸에서 렌터카를 빌려 섬 북쪽 해변도 둘러보세요.",
          "섬 여행은 아테네에서 국내선 또는 페리를 이용해 이동합니다.",
        ],
      },
    ],
    foods: [
      {
        name: "무사카",
        emoji: "🍆",
        description: "가지·감자·다진 고기에 베샤멜 소스를 올려 구운 그리스 대표 요리. 그리스 가정식의 정수.",
      },
      {
        name: "수블라키",
        emoji: "🥙",
        description: "꼬치에 꿴 구운 고기를 피타 빵에 싸먹는 그리스식 스트리트 푸드. 어느 도시에서나 빠르고 맛있게 즐길 수 있습니다.",
      },
      {
        name: "스파나코피타",
        emoji: "🥧",
        description: "시금치와 페타 치즈를 필로 반죽에 싸서 구운 그리스 전통 파이. 아침 식사나 간식으로 즐깁니다.",
      },
      {
        name: "그릭 샐러드",
        emoji: "🥗",
        description: "토마토·오이·올리브·페타 치즈·올리브오일로 만드는 상큼한 전통 샐러드. 어떤 식사와도 잘 어울립니다.",
      },
      {
        name: "바클라바",
        emoji: "🍯",
        description: "꿀과 견과류를 넣은 바삭한 필로 페이스트리. 그리스·튀르키예 공통 디저트로 진한 달콤함이 특징.",
      },
    ],
    tips: [
      "아크로폴리스 콤비 티켓(€30, 5일 유효)으로 아테네 주요 유적 7곳을 모두 방문할 수 있습니다.",
      "그리스 섬은 페리로 연결됩니다. 아테네 피레에프스 항구에서 출발하는 페리 스케줄을 미리 확인하세요.",
      "여름(7~8월)은 에게해 특성상 강한 북풍(멜테미)이 불어 페리가 결항되는 경우가 있습니다.",
      "산토리니·미코노스는 7~8월 극성수기를 피하면 가격이 크게 저렴해집니다. 5~6월 또는 9~10월을 노리세요.",
      "타베르나에서 식사 후 계산서를 요청하기 전까지 기다려주는 문화입니다. 서두르지 마세요.",
      "수도원 방문 시 어깨와 무릎을 가리는 복장이 필수입니다. 스카프나 긴 바지를 챙기세요.",
      "그리스 최대의 명절인 부활절(Orthodox Easter)에는 전국적으로 축제 분위기이지만 대부분의 상점이 문을 닫습니다.",
    ],
  },

  malta: {
    heroGradient: "from-red-700 via-white to-red-700",
    intro:
      "지중해의 작은 보석 몰타. 도시 전체가 UNESCO 세계유산인 발레타, '침묵의 도시' 므디나, 투명한 블루 라군을 품은 코미노 섬 — 면적은 작지만 역사와 자연의 밀도는 유럽 어느 나라에도 뒤지지 않습니다. 영어가 공용어여서 한국인 여행자도 소통이 편리합니다.",
    capital: "발레타 (Valletta)",
    currency: "유로 (EUR, €)",
    timezone: "한국보다 8시간 느림 (서머타임 시 7시간)",
    bestSeason: "4월 ~ 6월, 9월 ~ 11월",
    flightTime: "직항 없음, 경유 약 14~16시간",
    visa: "무비자 90일",
    recommendedDays: "4~7일",
    dailyBudget: "약 7~12만원",
    regions: [
      {
        slug: "malta-main",
        name: "몰타 본섬",
        nameEn: "Malta Main Island",
        icon: "⛪",
        gradient: "from-amber-500 to-yellow-800",
        description:
          "성 요한 기사단의 유산이 가득한 몰타 본섬. UNESCO 세계유산 발레타의 바로크 건축, '침묵의 도시' 므디나의 중세 분위기, 현대적 관광 거점 슬리마까지 다양한 매력이 공존합니다.",
        cities: [
          {
            name: "발레타",
            nameEn: "Valletta",
            description: "유럽에서 가장 작은 수도이자 도시 전체가 UNESCO 세계유산. 바로크 건축과 지중해가 어우러집니다.",
            gradient: "from-amber-500 to-yellow-800",
            highlights: ["성 요한 대성당", "어퍼 바라카 가든", "대궁전", "국립전쟁박물관"],
          },
          {
            name: "므디나",
            nameEn: "Mdina",
            description: "'침묵의 도시'로 불리는 몰타의 옛 수도. 차량이 통제된 중세 성벽 도시.",
            gradient: "from-stone-500 to-stone-800",
            highlights: ["므디나 구시가지", "성 바오로 대성당", "바스티온 광장 전망대"],
          },
          {
            name: "슬리마",
            nameEn: "Sliema",
            description: "발레타 맞은편의 현대적 해안 도시. 쇼핑·레스토랑·숙박의 편리한 관광 거점.",
            gradient: "from-sky-400 to-blue-700",
            highlights: ["슬리마 워터프론트", "발레타 전망", "블루 라군 보트 투어"],
          },
        ],
        tips: [
          "탈봇 버스 터미널에서 몰타 전역으로 버스가 연결됩니다. 탈린자 카드를 사면 교통비 절약.",
          "발레타에서 므디나까지 버스로 약 30분. 당일치기로 충분합니다.",
          "정오 살루팅 배터리 대포 의식은 발레타 어퍼 바라카 가든에서 무료로 관람 가능.",
        ],
      },
      {
        slug: "gozo",
        name: "고조 섬",
        nameEn: "Gozo Island",
        icon: "🏰",
        gradient: "from-orange-500 to-red-800",
        description:
          "몰타 본섬 북쪽의 작고 평화로운 섬. 세계에서 가장 오래된 건축물 잔티야 신전, 언덕 위 치타델라 요새, 그리고 시간이 느리게 흐르는 고즈넉한 시골 풍경이 몰타와는 또 다른 매력을 선사합니다.",
        cities: [
          {
            name: "빅토리아",
            nameEn: "Victoria",
            description: "고조 섬의 수도. 언덕 위 치타델라에서 섬 전체와 지중해를 360도로 조망할 수 있습니다.",
            gradient: "from-orange-500 to-red-800",
            highlights: ["치타델라", "고조 대성당", "잔티야 신전", "드웨이라 내해"],
          },
        ],
        tips: [
          "고조 페리는 체르케우아(몰타) → 므가르(고조) 약 25분. 요금은 복편만 징수됩니다.",
          "고조는 렌터카나 투어 버스를 이용하는 것이 버스보다 훨씬 편리합니다.",
          "치타델라는 무료 입장이며 내부 박물관은 별도 요금입니다.",
        ],
      },
    ],
    foods: [
      {
        name: "파스티치",
        emoji: "🥧",
        description: "리코타 치즈 또는 완두콩을 넣은 몰타식 페이스트리. 아침 간식으로 인기 있으며 어느 빵집에서나 찾을 수 있습니다.",
      },
      {
        name: "토끼 스튜 (펜카타)",
        emoji: "🍲",
        description: "몰타 국민 요리. 토끼를 와인과 허브에 푹 끓인 전통 스튜로, 몰타에서 토끼는 치킨처럼 흔히 먹는 식재료입니다.",
      },
      {
        name: "킨니",
        emoji: "🍊",
        description: "쓴 오렌지로 만든 몰타 고유의 탄산 음료. 지중해 햇살 아래 마시는 킨니 한 잔은 코카콜라와 다른 청량감.",
      },
      {
        name: "프티라",
        emoji: "🫓",
        description: "고조 특산 납작 빵에 토마토·올리브유·케이퍼 등을 올린 전통 간식. 고조 섬 여행에서 꼭 맛봐야 할 음식.",
      },
      {
        name: "람푸키 파이",
        emoji: "🐟",
        description: "가을 시즌 몰타 근해에서 잡히는 람푸키(만새기) 생선으로 만든 전통 파이. 가을 방문 시 꼭 맛보세요.",
      },
    ],
    tips: [
      "몰타는 영어가 공용어이므로 의사소통이 매우 편리합니다. 영어 간판과 메뉴가 기본입니다.",
      "몰타는 UK처럼 좌측통행입니다. 렌터카를 이용할 경우 미리 숙지하세요.",
      "여름(7~8월)은 40도에 가까운 폭염이 잦으니 수분 보충과 자외선 차단에 신경 쓰세요.",
      "발레타 구시가지는 도보로 2~3시간이면 충분히 둘러볼 수 있습니다. 발레타는 매우 작습니다.",
      "코미노 섬 블루 라군은 7~8월에 극도로 혼잡합니다. 이른 오전에 가거나 봄·가을을 노리세요.",
      "몰타는 유럽에서 일조량이 가장 많은 나라 중 하나로, 연중 온화한 기후를 자랑합니다.",
    ],
  },
};
