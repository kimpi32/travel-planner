export interface CityInfo {
  name: string;
  nameEn: string;
  description: string;
  gradient: string;
  highlights: string[];
}

export interface RegionInfo {
  slug: string;
  name: string;
  nameEn: string;
  icon: string;
  gradient: string;
  description: string;
  cities: CityInfo[];
  tips: string[];
}

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
  regions: RegionInfo[];
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
    regions: [
      {
        slug: "bavaria",
        name: "바이에른",
        nameEn: "Bavaria",
        icon: "🏔️",
        gradient: "from-blue-500 to-blue-800",
        description:
          "독일 남부의 가장 큰 주로, 알프스 산맥과 중세 성, 맥주 문화의 본고장입니다. 옥토버페스트, 노이슈반슈타인 성, 로만틱 가도 등 독일의 대표적인 관광 명소가 집중되어 있습니다.",
        cities: [
          {
            name: "뮌헨",
            nameEn: "Munich",
            description:
              "바이에른주의 주도이자 독일 제3의 도시. 옥토버페스트의 본고장으로, 마리엔 광장의 시계탑, 님펜부르크 궁전, BMW 박물관이 있으며 알프스 근교 여행의 거점입니다.",
            gradient: "from-blue-500 to-blue-800",
            highlights: ["마리엔 광장", "님펜부르크 궁전", "BMW 박물관", "영국 정원", "옥토버페스트"],
          },
          {
            name: "노이슈반슈타인 성",
            nameEn: "Neuschwanstein Castle",
            description:
              "디즈니 성의 모델이 된 동화 같은 고성. 바이에른 알프스를 배경으로 한 환상적인 경관이 세계적으로 유명합니다. 뮌헨에서 당일치기 가능합니다.",
            gradient: "from-indigo-400 to-purple-700",
            highlights: ["마리엔 다리 전망대", "호엔슈반가우 성", "알프 호수", "퓌센 구시가지"],
          },
          {
            name: "뉘른베르크",
            nameEn: "Nuremberg",
            description:
              "중세 성벽이 남아있는 바이에른 제2의 도시. 크리스마스 마켓으로 유명하며, 뉘른베르크 소시지와 진저브레드의 본고장입니다.",
            gradient: "from-amber-600 to-red-800",
            highlights: ["카이저부르크 성", "크리스마스 마켓", "뉘른베르크 소시지", "게르만 국립박물관"],
          },
          {
            name: "로텐부르크",
            nameEn: "Rothenburg ob der Tauber",
            description:
              "로만틱 가도의 하이라이트. 완벽하게 보존된 중세 마을로, 색색의 목조 건물과 성벽 산책로가 동화 속 풍경을 선사합니다.",
            gradient: "from-orange-400 to-rose-700",
            highlights: ["플뢴라인", "성벽 산책", "크리스마스 박물관", "슈네발렌(눈덩이 과자)"],
          },
          {
            name: "레겐스부르크",
            nameEn: "Regensburg",
            description:
              "도나우강 위의 UNESCO 세계유산 도시. 2,000년 역사를 가진 돌다리와 고딕 대성당, 활기찬 대학도시 분위기가 매력적입니다.",
            gradient: "from-teal-500 to-emerald-800",
            highlights: ["슈타이너네 다리", "성 페터 대성당", "발할라 신전", "도나우 유람선"],
          },
        ],
        tips: [
          "바이에른 티켓(Bayern-Ticket)으로 하루 종일 지역 교통을 저렴하게 이용하세요.",
          "옥토버페스트는 9월 중순~10월 초. 숙소는 최소 6개월 전 예약 필수입니다.",
          "뮌헨 중앙역에서 노이슈반슈타인까지 기차+버스로 약 2시간 소요됩니다.",
        ],
      },
      {
        slug: "berlin-east",
        name: "베를린 & 동부",
        nameEn: "Berlin & East",
        icon: "🐻",
        gradient: "from-gray-600 to-gray-900",
        description:
          "독일의 수도 베를린과 구 동독 지역. 냉전의 역사부터 현대 예술, 클럽 문화까지 독일에서 가장 다이내믹한 지역입니다. 드레스덴의 바로크 건축과 라이프치히의 음악 전통도 놓칠 수 없습니다.",
        cities: [
          {
            name: "베를린",
            nameEn: "Berlin",
            description:
              "독일의 수도이자 역사와 예술의 도시. 브란덴부르크 문, 베를린 장벽 기념관, 박물관 섬, 그리고 유럽 최고의 나이트라이프까지 즐길 수 있습니다.",
            gradient: "from-gray-600 to-gray-900",
            highlights: ["브란덴부르크 문", "박물관 섬", "이스트사이드 갤러리", "체크포인트 찰리", "티어가르텐"],
          },
          {
            name: "드레스덴",
            nameEn: "Dresden",
            description:
              "엘베 강변의 '엘베 위의 피렌체'. 2차대전 폭격에서 복원된 프라우엔 교회와 츠빙거 궁전 등 바로크 건축의 정수를 보여줍니다.",
            gradient: "from-amber-500 to-amber-800",
            highlights: ["프라우엔 교회", "츠빙거 궁전", "젬퍼 오페라", "테라스 브뤼흘", "그린 볼트"],
          },
          {
            name: "라이프치히",
            nameEn: "Leipzig",
            description:
              "바흐와 멘델스존의 도시. 1989년 평화 혁명의 발원지이며, 현재는 신진 예술가들이 모여드는 독일의 뉴 베를린으로 불립니다.",
            gradient: "from-emerald-500 to-teal-800",
            highlights: ["성 토마스 교회(바흐)", "니콜라이 교회", "아우어바흐 켈러", "슈필네 코튼 공장"],
          },
          {
            name: "포츠담",
            nameEn: "Potsdam",
            description:
              "베를린 바로 옆의 UNESCO 도시. 프로이센 왕가의 상수시 궁전과 정원이 있어 베를린에서 반나절 당일치기로 완벽합니다.",
            gradient: "from-lime-500 to-green-800",
            highlights: ["상수시 궁전", "체칠리엔호프", "네덜란드 지구", "바벨스베르크"],
          },
        ],
        tips: [
          "베를린은 Welcome Card로 대중교통 + 박물관 할인을 동시에 해결하세요.",
          "베를린의 클럽은 보통 자정 이후에 열리며, 베르크하인은 금~월 논스톱입니다.",
          "드레스덴은 베를린에서 ICE로 약 2시간, 당일치기 가능합니다.",
        ],
      },
      {
        slug: "rhineland-west",
        name: "서부 & 라인란트",
        nameEn: "Rhineland & West",
        icon: "⛪",
        gradient: "from-purple-500 to-purple-800",
        description:
          "라인강을 따라 펼쳐지는 독일 서부. 쾰른 대성당, 뒤셀도르프의 세련된 거리, 본의 베토벤 하우스, 그리고 라인강 계곡의 고성들이 기다립니다.",
        cities: [
          {
            name: "쾰른",
            nameEn: "Cologne",
            description:
              "라인강 위의 대도시. 157m 높이의 고딕 대성당은 독일에서 가장 방문객이 많은 랜드마크입니다. 쾰른 맥주(쾰시)와 카니발로도 유명합니다.",
            gradient: "from-purple-500 to-purple-800",
            highlights: ["쾰른 대성당", "호엔촐레른 다리", "초콜릿 박물관", "쾰시 맥주 체험", "벨기쉬 지구"],
          },
          {
            name: "뒤셀도르프",
            nameEn: "Düsseldorf",
            description:
              "라인강변의 패션과 예술의 도시. 쾨니히스알레(명품거리), 알트슈타트(세계에서 가장 긴 바), 미디어하펜의 현대 건축이 인상적입니다.",
            gradient: "from-pink-500 to-rose-800",
            highlights: ["알트슈타트", "쾨니히스알레", "미디어하펜", "K20/K21 미술관"],
          },
          {
            name: "본",
            nameEn: "Bonn",
            description:
              "구 서독의 수도이자 베토벤의 출생지. 소박하지만 아름다운 도시로, 박물관 마일과 라인강 산책로가 매력적입니다.",
            gradient: "from-sky-500 to-blue-800",
            highlights: ["베토벤 하우스", "박물관 마일", "하리보 매장", "드라헨펠스"],
          },
          {
            name: "라인 계곡",
            nameEn: "Rhine Valley",
            description:
              "코블렌츠에서 뤼데스하임까지 이어지는 UNESCO 세계유산 구간. 40개 이상의 고성과 포도밭이 어우러진 유람선 코스가 환상적입니다.",
            gradient: "from-emerald-400 to-teal-700",
            highlights: ["로렐라이 바위", "마르크스부르크 성", "뤼데스하임", "라인강 유람선"],
          },
        ],
        tips: [
          "쾰른과 뒤셀도르프는 기차로 25분 거리. 하루에 두 도시를 둘러볼 수 있습니다.",
          "라인 계곡 유람선은 KD 라인이 가장 유명하며, 레일패스 소지자는 무료입니다.",
          "쾰른 카니발(2~3월)은 독일판 축제로, 거리 전체가 파티장이 됩니다.",
        ],
      },
      {
        slug: "north",
        name: "북부",
        nameEn: "Northern Germany",
        icon: "⚓",
        gradient: "from-teal-500 to-cyan-800",
        description:
          "북해와 발트해를 끼고 있는 해양 문화의 중심지. 함부르크의 항구 문화, 브레멘의 동화, 뤼벡의 마지팬, 그리고 해안가의 휴양 분위기가 독특합니다.",
        cities: [
          {
            name: "함부르크",
            nameEn: "Hamburg",
            description:
              "독일 최대의 항구도시이자 제2의 도시. 엘베 필하모니, 미니어처 원더랜드, 스파이허슈타트 창고지구 등 독특한 해양 문화를 체험할 수 있습니다.",
            gradient: "from-teal-500 to-cyan-800",
            highlights: ["엘베 필하모니", "미니어처 원더랜드", "스파이허슈타트", "레퍼반", "알스터 호수"],
          },
          {
            name: "브레멘",
            nameEn: "Bremen",
            description:
              "그림 동화 '브레멘 음악대'의 배경. 마르크트 광장의 시청사와 롤란드 상은 UNESCO 세계유산이며, 아기자기한 뵈트허 거리가 매력적입니다.",
            gradient: "from-red-500 to-rose-800",
            highlights: ["브레멘 음악대 동상", "마르크트 광장", "뵈트허 거리", "슈노어 지구"],
          },
          {
            name: "뤼벡",
            nameEn: "Lübeck",
            description:
              "한자동맹의 수도였던 역사도시. 홀슈텐 문, 붉은 벽돌 고딕 건축, 그리고 세계적으로 유명한 마지팬(Marzipan)의 본고장입니다.",
            gradient: "from-orange-500 to-amber-800",
            highlights: ["홀슈텐 문", "마지팬 카페", "부덴브로크 하우스", "성 마리엔 교회"],
          },
        ],
        tips: [
          "함부르크의 피쉬마르크트(일요 어시장)는 일요일 새벽 5시부터! 현지 분위기를 느끼기 좋습니다.",
          "함부르크에서 뤼벡까지 기차로 45분. 마지팬 카페는 필수 코스입니다.",
          "여름에는 북해의 섬(쥘트, 노르더나이)으로 해변 휴양을 즐겨보세요.",
        ],
      },
      {
        slug: "southwest",
        name: "남서부",
        nameEn: "Southwest Germany",
        icon: "🌲",
        gradient: "from-green-500 to-emerald-800",
        description:
          "흑림(슈바르츠발트)과 대학도시가 모여 있는 지역. 하이델베르크의 로맨틱한 풍경, 슈투트가르트의 자동차 문화, 프라이부르크의 친환경 도시, 그리고 뻐꾸기시계의 고향 흑림이 있습니다.",
        cities: [
          {
            name: "하이델베르크",
            nameEn: "Heidelberg",
            description:
              "독일에서 가장 오래된 대학도시. 네카어강 위의 고성 유적, 구시가지의 붉은 지붕들, 철학자의 길이 로맨틱한 분위기를 자아냅니다.",
            gradient: "from-rose-500 to-red-800",
            highlights: ["하이델베르크 성", "철학자의 길", "하우프트 거리", "학생 감옥", "옛 다리"],
          },
          {
            name: "슈투트가르트",
            nameEn: "Stuttgart",
            description:
              "메르세데스-벤츠와 포르쉐의 본사가 있는 자동차의 도시. 두 개의 자동차 박물관과 슐로스 광장, 인근의 포도밭 풍경이 매력적입니다.",
            gradient: "from-slate-500 to-gray-800",
            highlights: ["메르세데스-벤츠 박물관", "포르쉐 박물관", "슐로스 광장", "킬레스베르크 탑"],
          },
          {
            name: "프라이부르크",
            nameEn: "Freiburg",
            description:
              "흑림의 관문이자 독일의 태양의 도시. 대성당 광장의 아침 시장, 도시를 흐르는 작은 수로(베힐레), 그리고 친환경 도시 모델로 유명합니다.",
            gradient: "from-green-400 to-green-700",
            highlights: ["프라이부르크 대성당", "베힐레(수로)", "슐로스베르크", "흑림 입구"],
          },
          {
            name: "흑림 (슈바르츠발트)",
            nameEn: "Black Forest",
            description:
              "뻐꾸기시계, 흑림 케이크, 온천의 고향. 울창한 침엽수림 사이로 하이킹, 드라이브, 온천 마을 바덴바덴까지 다양한 즐길거리가 있습니다.",
            gradient: "from-green-700 to-emerald-950",
            highlights: ["트리베르크 폭포", "뻐꾸기시계 공방", "바덴바덴 온천", "흑림 케이크", "티티제 호수"],
          },
        ],
        tips: [
          "하이델베르크는 프랑크푸르트 공항에서 기차로 1시간. 입국 첫날 코스로 완벽합니다.",
          "흑림은 렌터카가 가장 편하지만, 프라이부르크에서 버스로도 접근 가능합니다.",
          "바덴바덴의 프리드리히스바드는 로마식 온천으로, 혼욕이므로 참고하세요.",
        ],
      },
      {
        slug: "central",
        name: "중부",
        nameEn: "Central Germany",
        icon: "🏛️",
        gradient: "from-amber-500 to-orange-800",
        description:
          "프랑크푸르트를 중심으로 한 독일의 교통 허브. 국제공항이 있어 여행의 시작점이 되는 경우가 많으며, 뷔르츠부르크에서 시작하는 로만틱 가도와 문화도시 바이마르가 있습니다.",
        cities: [
          {
            name: "프랑크푸르트",
            nameEn: "Frankfurt",
            description:
              "독일의 금융 수도이자 국제 관문. '마인하탄'이라 불리는 스카이라인, 뢰머 광장의 목조 건물, 박물관 강변이 대조적인 매력을 보여줍니다.",
            gradient: "from-sky-500 to-indigo-800",
            highlights: ["뢰머 광장", "마인 타워 전망대", "박물관 강변", "작센하우센 사과주 골목"],
          },
          {
            name: "뷔르츠부르크",
            nameEn: "Würzburg",
            description:
              "로만틱 가도의 시작점. UNESCO 세계유산 레지덴츠 궁전과 마리엔베르크 요새, 그리고 프랑켄 와인의 중심지입니다.",
            gradient: "from-violet-500 to-purple-800",
            highlights: ["레지덴츠 궁전", "마리엔베르크 요새", "옛 마인 다리", "프랑켄 와인"],
          },
          {
            name: "바이마르",
            nameEn: "Weimar",
            description:
              "괴테와 실러의 도시이자 바우하우스의 탄생지. 작지만 독일 문화사에서 가장 중요한 도시 중 하나로, 클래식과 모더니즘이 공존합니다.",
            gradient: "from-emerald-500 to-green-800",
            highlights: ["괴테 하우스", "바우하우스 박물관", "안나 아말리아 도서관", "부헨발트 기념관"],
          },
        ],
        tips: [
          "프랑크푸르트 공항은 독일 여행의 허브. 공항에서 바로 기차를 타고 각 도시로 이동하세요.",
          "작센하우센 지구에서 애플바인(사과주)을 꼭 맛보세요. 프랑크푸르트만의 특별한 음료입니다.",
          "로만틱 가도 버스(Romantic Road Coach)로 뷔르츠부르크~퓌센 전 구간 이동이 가능합니다.",
        ],
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
