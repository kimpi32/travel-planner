export interface CountryDetail {
  heroGradient: string;
  intro: string;
  capital: string;
  currency: string;
  timezone: string;
  bestSeason: string;
  flightTime: string;
  visa: string;
  recommendedDays: string;
  dailyBudget: string;
  spots: {
    name: string;
    nameEn: string;
    description: string;
    gradient: string;
  }[];
  foods: {
    name: string;
    emoji: string;
    description: string;
  }[];
  tips: string[];
}

export const countryDetails: Record<string, CountryDetail> = {
  germany: {
    heroGradient: "from-gray-900 via-red-900 to-yellow-700",
    intro:
      "독일은 풍부한 역사와 현대적인 문화가 공존하는 유럽의 심장입니다. 중세 고성, 세계적인 맥주 문화, 뛰어난 자동차 산업, 그리고 베를린의 자유로운 예술 씬까지 — 다채로운 매력으로 가득한 나라입니다.",
    capital: "베를린 (Berlin)",
    currency: "유로 (EUR, €)",
    timezone: "한국보다 8시간 느림",
    bestSeason: "5월 ~ 9월",
    flightTime: "직항 약 11시간",
    visa: "무비자 90일",
    recommendedDays: "7~14일",
    dailyBudget: "약 10~15만원",
    spots: [
      {
        name: "베를린",
        nameEn: "Berlin",
        description:
          "독일의 수도이자 역사와 예술의 도시. 브란덴부르크 문, 베를린 장벽 기념관, 박물관 섬, 그리고 활기찬 나이트라이프까지 즐길 수 있습니다.",
        gradient: "from-gray-600 to-gray-900",
      },
      {
        name: "뮌헨",
        nameEn: "Munich",
        description:
          "바이에른주의 주도로 옥토버페스트의 본고장. 마리엔 광장, 님펜부르크 궁전, BMW 박물관 등이 있으며 알프스 근교 여행의 거점이기도 합니다.",
        gradient: "from-blue-500 to-blue-800",
      },
      {
        name: "노이슈반슈타인 성",
        nameEn: "Neuschwanstein Castle",
        description:
          "디즈니 성의 모델이 된 동화 같은 고성. 바이에른 알프스를 배경으로 한 환상적인 경관이 세계적으로 유명합니다.",
        gradient: "from-indigo-400 to-purple-700",
      },
      {
        name: "하이델베르크",
        nameEn: "Heidelberg",
        description:
          "독일에서 가장 오래된 대학도시. 네카어강 위의 고성, 구시가지의 붉은 지붕들, 철학자의 길이 로맨틱한 분위기를 자아냅니다.",
        gradient: "from-rose-500 to-red-800",
      },
      {
        name: "함부르크",
        nameEn: "Hamburg",
        description:
          "독일 최대의 항구도시. 엘베 필하모니, 미니어처 원더랜드, 레퍼반 거리 등 독특한 해양 문화와 엔터테인먼트의 도시입니다.",
        gradient: "from-teal-500 to-cyan-800",
      },
      {
        name: "로만틱 가도",
        nameEn: "Romantic Road",
        description:
          "뷔르츠부르크에서 퓌센까지 약 350km에 이르는 독일 최고의 관광 루트. 중세 마을, 성, 포도밭이 이어지는 환상적인 드라이브 코스입니다.",
        gradient: "from-amber-400 to-orange-700",
      },
    ],
    foods: [
      {
        name: "슈바인스학세 (Schweinshaxe)",
        emoji: "🍖",
        description:
          "바삭하게 구운 돼지 족발. 바이에른 지방의 대표 요리로 맥주와 최고의 궁합을 자랑합니다.",
      },
      {
        name: "브라트부어스트 (Bratwurst)",
        emoji: "🌭",
        description:
          "독일식 구운 소시지. 지역마다 고유한 레시피가 있으며 머스타드와 함께 빵에 끼워 먹습니다.",
      },
      {
        name: "프레첼 (Bretzel)",
        emoji: "🥨",
        description:
          "독일의 상징적인 빵. 바삭한 겉면에 소금을 뿌려 맥주 안주로도, 간식으로도 완벽합니다.",
      },
      {
        name: "슈니첼 (Schnitzel)",
        emoji: "🥩",
        description:
          "얇게 펴서 튀긴 돈까스. 레몬을 짜서 감자 샐러드와 함께 먹는 독일-오스트리아의 국민 음식입니다.",
      },
      {
        name: "아펠슈트루델 (Apfelstrudel)",
        emoji: "🍎",
        description:
          "사과를 넣은 페이스트리 디저트. 바닐라 소스나 아이스크림과 함께 제공됩니다.",
      },
      {
        name: "독일 맥주 (Bier)",
        emoji: "🍺",
        description:
          "맥주 순수령에 따라 만든 세계 최고의 맥주. 필스너, 바이쩬, 둔켈 등 수천 가지 종류가 있습니다.",
      },
    ],
    tips: [
      "대중교통은 도이칠란드 티켓(Deutschland-Ticket, 월 49유로)으로 전국 지역 교통 무제한 이용 가능합니다.",
      "일요일에는 거의 모든 상점이 문을 닫습니다. 쇼핑은 평일이나 토요일에 하세요.",
      "현금 문화가 강합니다. 소규모 가게나 식당에서는 카드가 안 되는 곳이 많으니 현금을 챙기세요.",
      "맥주집(Biergarten)에서는 셀프서비스가 기본입니다. 음식을 직접 가져가세요.",
      "독일의 자전거 도로는 잘 정비되어 있어 자전거 여행도 추천합니다.",
      "팁은 보통 계산서의 5~10% 정도를 남기며, 'Stimmt so'(거스름돈 됐어요)라고 말하면 됩니다.",
      "뮌헨에서 노이슈반슈타인 성까지는 바이에른 티켓으로 기차+버스 당일치기가 가능합니다.",
      "10~12월에 방문한다면 크리스마스 마켓(Weihnachtsmarkt)은 필수 코스입니다.",
    ],
  },
};
