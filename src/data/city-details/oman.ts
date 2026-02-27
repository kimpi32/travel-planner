import type { CityDetail, AttractionDetail } from "../city-details";

export const omanCityDetails: Record<string, CityDetail> = {
  // ===== MUSCAT =====
  "oman/muscat/muscat": {
    heroGradient: "from-emerald-600 to-teal-900",
    description:
      "아라비아 반도 동쪽 끝, 하자르 산맥과 오만 만이 만나는 곳에 자리한 오만의 수도. 화려하지만 절제된 아름다움의 술탄 카부스 그랜드 모스크, 활기 넘치는 무트라 수크, 그리고 현대와 전통이 조화를 이루는 품격 있는 도시입니다.",
    bestTime: "10~3월 (겨울 건기, 쾌적한 기후. 여름은 40°C 이상)",
    stayArea: "쿠룸 / 알 모즈 / 무트라 지역",
    transport: "택시, 우버/카림, 렌터카 (대중교통 매우 제한적)",
    districts: [
      {
        name: "올드 무스카트",
        nameEn: "Old Muscat",
        description:
          "알 알람 궁전과 두 개의 포르투갈 요새(잘랄리, 미라니)가 자리한 역사적 중심지.",
        highlights: ["알 알람 궁전", "잘랄리 요새", "미라니 요새", "국립 박물관"],
      },
      {
        name: "무트라",
        nameEn: "Muttrah",
        description:
          "코르니쉬 해안 산책로와 전통 수크가 어우러진 무스카트의 가장 매력적인 지구.",
        highlights: ["무트라 수크", "코르니쉬 산책로", "무트라 포트", "생선 시장"],
      },
      {
        name: "쿠룸 & 알 모즈",
        nameEn: "Qurum & Al Mouj",
        description:
          "현대적인 쇼핑몰, 레스토랑, 해변이 있는 무스카트의 신시가지 지역.",
        highlights: ["쿠룸 비치", "로열 오페라 하우스", "쿠룸 자연공원"],
      },
    ],
    attractions: [
      {
        name: "술탄 카부스 그랜드 모스크",
        nameEn: "Sultan Qaboos Grand Mosque",
        description:
          "오만 최대의 모스크이자 이슬람 건축의 걸작. 세계에서 두 번째로 큰 수제 페르시안 카펫과 스와로브스키 크리스탈 샹들리에가 경이롭습니다.",
        category: "모스크",
        tip: "비무슬림은 토~목 08:00~11:00에만 입장 가능. 긴 옷과 머리 스카프를 착용하세요.",
      },
      {
        name: "무트라 수크",
        nameEn: "Muttrah Souq",
        description:
          "오만에서 가장 오래된 전통 시장. 유향, 향신료, 은세공품, 전통 의상 등이 미로 같은 골목에 가득합니다.",
        category: "시장",
        tip: "흥정은 필수입니다. 처음 제시된 가격의 50~60%부터 시작하세요.",
      },
      {
        name: "알 알람 궁전",
        nameEn: "Al Alam Palace",
        description:
          "술탄의 공식 의전 궁전. 푸른색과 금색의 화려한 외관이 인상적이며, 양쪽의 포르투갈 요새와 함께 사진 촬영 명소.",
        category: "궁전",
        tip: "내부 입장 불가. 외부에서 촬영만 가능하며, 잘랄리 요새와 함께 둘러보세요.",
      },
      {
        name: "로열 오페라 하우스",
        nameEn: "Royal Opera House Muscat",
        description:
          "아라비아 반도 최초의 오페라 하우스. 이슬람 전통 건축과 현대적 디자인이 조화된 문화 공간.",
        category: "문화",
      },
      {
        name: "무트라 코르니쉬",
        nameEn: "Muttrah Corniche",
        description:
          "무트라 항구를 따라 이어지는 해안 산책로. 전통 다우(dhow) 범선과 산 위의 요새가 어우러진 풍경이 아름답습니다.",
        category: "산책로",
      },
    ],
    dayTrips: [
      {
        name: "다이마니야트 제도",
        nameEn: "Daymaniyat Islands",
        description:
          "무스카트 해안에서 보트로 1시간. 맑은 바다에서 스노클링과 다이빙을 즐기는 자연보호구역.",
        travelTime: "보트 약 1시간",
        gradient: "from-blue-400 to-cyan-700",
      },
      {
        name: "와히바 샌즈",
        nameEn: "Wahiba Sands",
        description:
          "끝없이 펼쳐진 황금빛 사막. 듄배싱과 베두인 캠프 체험이 가능합니다.",
        travelTime: "차량 약 3시간",
        gradient: "from-yellow-400 to-orange-700",
      },
    ],
    localFood: [
      {
        name: "슈와",
        description:
          "오만의 국민 요리. 양고기를 바나나 잎에 싸서 지하 화덕에 24~48시간 천천히 익힌 전통 축제 음식.",
        emoji: "🍖",
      },
      {
        name: "할와",
        description:
          "장미수, 사프란, 카르다몸으로 맛을 낸 오만 전통 젤리형 디저트. 환대의 상징으로 커피와 함께 제공.",
        emoji: "🍮",
      },
      {
        name: "오만 카와",
        description:
          "카르다몸과 장미수를 넣은 오만식 아랍 커피. 대추야자와 함께 마시는 환대의 음료.",
        emoji: "☕",
      },
    ],
    tips: [
      "현지 통화는 오만 리알(OMR)이며 1리알 ≈ 약 3,400원으로 고액 화폐입니다.",
      "모스크 방문 시 남녀 모두 긴 옷을 착용해야 하며, 여성은 머리 스카프가 필수입니다.",
      "오만은 렌터카 여행이 가장 편리합니다. 국제면허증을 준비하세요.",
      "금요일은 대부분 시설이 오후에만 운영됩니다.",
    ],
  },

  // ===== INTERIOR: NIZWA =====
  "oman/interior/nizwa": {
    heroGradient: "from-amber-500 to-yellow-800",
    description:
      "오만 내륙의 고대 수도이자 학문과 종교의 중심지. 거대한 원형 탑의 니즈와 요새, 금요 가축 시장, 그리고 주변 하자르 산맥의 장엄한 풍경이 어우러진 진정한 오만의 심장부입니다.",
    bestTime: "10~3월 (겨울 시즌, 쾌적한 기후)",
    stayArea: "니즈와 구시가지 / 니즈와 요새 주변",
    transport: "무스카트에서 차량 약 1시간 40분",
    districts: [
      {
        name: "니즈와 구시가지",
        nameEn: "Nizwa Old Town",
        description:
          "니즈와 요새와 수크, 전통 팔라즈(관개 수로)가 보존된 역사 지구.",
        highlights: ["니즈와 요새", "니즈와 수크", "팔라즈 수로", "술탄 카부스 모스크"],
      },
    ],
    attractions: [
      {
        name: "니즈와 요새",
        nameEn: "Nizwa Fort",
        description:
          "17세기에 건설된 오만 최대의 요새. 직경 36m, 높이 30m의 거대한 원형 탑이 특징이며, 내부에는 방어 시설과 전시관이 잘 보존되어 있습니다.",
        category: "요새",
        tip: "금요일 오전에 요새 근처에서 열리는 전통 가축 시장을 놓치지 마세요.",
      },
      {
        name: "니즈와 수크",
        nameEn: "Nizwa Souq",
        description:
          "은세공품, 도자기, 대추야자 등 오만 전통 공예품이 풍부한 시장. 금요 가축 시장이 특히 유명합니다.",
        category: "시장",
        tip: "금요 오전 가축 경매는 현지 베두인 문화를 생생하게 체험할 수 있는 기회입니다.",
      },
      {
        name: "바흘라 요새",
        nameEn: "Bahla Fort",
        description:
          "니즈와 인근의 유네스코 세계유산 요새. 12km의 성벽으로 둘러싸인 오만에서 가장 오래된 요새 중 하나.",
        category: "요새",
      },
      {
        name: "자블린 성",
        nameEn: "Jabreen Castle",
        description:
          "17세기에 건설된 오만에서 가장 아름다운 성. 이슬람 학문의 중심지였으며, 천장 벽화와 조각이 정교합니다.",
        category: "고성",
        tip: "바흘라 요새와 함께 니즈와 당일치기 코스로 인기 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "제벨 아크다르",
        nameEn: "Jebel Akhdar",
        description:
          "해발 2,000m의 '녹색 산'. 장미 테라스와 계단식 농장, 시원한 기후로 유명한 하자르 산맥의 보석.",
        travelTime: "차량 약 45분 (4WD 필수)",
        gradient: "from-green-500 to-emerald-800",
      },
      {
        name: "와디 바니 하빕",
        nameEn: "Wadi Bani Habib",
        description:
          "제벨 아크다르 산중의 버려진 석조 마을. 트레킹과 사진 촬영의 명소.",
        travelTime: "차량 약 1시간 + 트레킹",
        gradient: "from-stone-400 to-stone-700",
      },
    ],
    localFood: [
      {
        name: "슈와",
        description:
          "양고기를 바나나 잎에 감싸 지하 화덕에서 하루 이상 천천히 익힌 오만의 대표 전통 요리.",
        emoji: "🍖",
      },
      {
        name: "니즈와 대추야자",
        description:
          "오만 최고 품질의 대추야자. 수크에서 다양한 종류를 시식하고 구매할 수 있습니다.",
        emoji: "🌴",
      },
      {
        name: "하리스",
        description:
          "밀과 고기를 오랜 시간 끓여 걸쭉하게 만든 전통 죽. 라마단 기간에 특히 인기.",
        emoji: "🥣",
      },
    ],
    tips: [
      "금요일 오전 가축 시장은 07:00~10:00에 열리며, 일찍 갈수록 활기 넘칩니다.",
      "니즈와-바흘라-자블린을 하루에 돌아보는 요새 루트가 인기입니다.",
      "내륙이라 해안보다 기온 차가 크므로 겨울 아침에는 겉옷을 준비하세요.",
      "현지인에게 사진 촬영 허가를 반드시 구하세요. 특히 여성 촬영은 금기입니다.",
    ],
  },

  // ===== INTERIOR: JEBEL AKHDAR =====
  "oman/interior/jebel-akhdar": {
    heroGradient: "from-green-500 to-emerald-800",
    description:
      "해발 2,000m에 위치한 '녹색 산'이라는 뜻의 하자르 산맥의 보석. 장미 테라스와 계단식 농장, 고대 석조 마을, 그리고 그랜드 캐니언을 연상시키는 장엄한 계곡 전망이 펼쳐지는 오만의 숨겨진 보석입니다.",
    bestTime: "10~4월 (3~4월 장미 수확 시즌, 여름도 시원함)",
    stayArea: "제벨 아크다르 리조트 (알릴라, 아난타라 등)",
    transport: "니즈와에서 4WD 차량 약 45분 (4WD 필수, 검문소 확인)",
    districts: [
      {
        name: "사이크 고원",
        nameEn: "Sayq Plateau",
        description:
          "장미 정원과 전통 마을이 위치한 제벨 아크다르의 중심 고원. 리조트와 전망대가 모여 있습니다.",
        highlights: ["장미 테라스", "다이아나 포인트 전망대", "사이크 마을"],
      },
    ],
    attractions: [
      {
        name: "다이아나 포인트",
        nameEn: "Diana's Point",
        description:
          "다이애나 왕세자비가 방문했던 전망대. 깊은 와디 계곡과 계단식 마을의 장엄한 파노라마를 감상할 수 있습니다.",
        category: "전망대",
        tip: "일출 시 방문하면 산맥에 걸리는 운해와 금빛 빛줄기를 볼 수 있습니다.",
      },
      {
        name: "장미 테라스",
        nameEn: "Rose Terraces",
        description:
          "다마스크 장미를 재배하는 계단식 정원. 3~4월 수확 시즌에는 장미수 증류 과정을 직접 볼 수 있습니다.",
        category: "농원",
        tip: "장미수와 장미 오일은 니즈와 수크보다 이곳에서 더 신선한 제품을 구매할 수 있습니다.",
      },
      {
        name: "버려진 마을 트레킹",
        nameEn: "Abandoned Village Trek",
        description:
          "산중에 버려진 고대 석조 마을을 지나는 트레킹 코스. 팔라즈(관개 수로)와 계단식 농장의 흔적을 따라 걸을 수 있습니다.",
        category: "트레킹",
      },
    ],
    dayTrips: [
      {
        name: "니즈와",
        nameEn: "Nizwa",
        description:
          "니즈와 요새와 전통 수크가 있는 오만 내륙의 고대 수도.",
        travelTime: "4WD 차량 약 45분",
        gradient: "from-amber-500 to-yellow-800",
      },
    ],
    localFood: [
      {
        name: "장미수 음료",
        description:
          "제벨 아크다르 특산 다마스크 장미로 만든 향긋한 장미수 음료. 시원하게 마시면 일품.",
        emoji: "🌹",
      },
      {
        name: "산지 꿀",
        description:
          "하자르 산맥의 야생화에서 채취한 천연 꿀. 오만 전통 의학에서도 사용됩니다.",
        emoji: "🍯",
      },
    ],
    tips: [
      "4WD 차량만 산에 오를 수 있으며, 검문소에서 차량을 확인합니다.",
      "해발 2,000m로 무스카트보다 10~15°C 낮으니 겉옷을 꼭 준비하세요.",
      "3~4월 장미 수확 시즌에 방문하면 장미수 증류 과정을 체험할 수 있습니다.",
    ],
  },

  // ===== COAST: SUR =====
  "oman/coast/sur": {
    heroGradient: "from-blue-500 to-indigo-800",
    description:
      "오만 동쪽 해안의 역사적인 항구 도시. 한때 동아프리카와의 해상 무역으로 번성했던 도시로, 전통 다우(dhow) 범선 조선소, 바다 거북 산란지, 그리고 아름다운 해안 풍경이 매력적인 곳입니다.",
    bestTime: "10~4월 (6~8월 거북 산란 시즌은 라스 알 진즈 방문 적기)",
    stayArea: "수르 시내 / 라스 알 진즈 (거북 산란 관찰)",
    transport: "무스카트에서 차량 약 2시간 30분",
    districts: [
      {
        name: "수르 항구",
        nameEn: "Sur Harbor",
        description:
          "전통 다우 조선소와 등대가 있는 수르의 역사적 해안 지구.",
        highlights: ["다우 조선소", "수르 등대", "알 아이자 해변"],
      },
      {
        name: "아이야",
        nameEn: "Ayjah",
        description:
          "수르 항구 건너편의 옛 어촌 마을. 워치타워와 옛 상인 가옥이 보존되어 있습니다.",
        highlights: ["아이야 워치타워", "석조 상인 가옥", "생선 시장"],
      },
    ],
    attractions: [
      {
        name: "다우 조선소",
        nameEn: "Dhow Shipyard",
        description:
          "오만 전통 목조 범선 다우를 수작업으로 건조하는 마지막 남은 조선소 중 하나. 수백 년 이어진 전통 기술을 직접 관찰할 수 있습니다.",
        category: "전통공방",
        tip: "오전에 방문하면 장인들이 작업하는 모습을 볼 수 있습니다.",
      },
      {
        name: "라스 알 진즈 거북 보호구역",
        nameEn: "Ras Al Jinz Turtle Reserve",
        description:
          "멸종위기 초록바다거북이 산란하러 오는 해변. 야간 투어로 산란 과정을 관찰할 수 있는 세계적인 자연 보호구역.",
        category: "자연",
        tip: "야간 투어(21:00)와 새벽 투어(04:00) 중 선택 가능하며 사전 예약 필수입니다.",
      },
      {
        name: "와디 샤브",
        nameEn: "Wadi Shab",
        description:
          "에메랄드빛 물웅덩이와 폭포가 숨겨진 아름다운 와디. 수영과 트레킹을 결합한 모험적인 코스.",
        category: "자연",
        tip: "방수 가방을 준비하고, 수영 구간이 있으므로 수영 실력이 필요합니다.",
      },
      {
        name: "비마 싱크홀",
        nameEn: "Bimmah Sinkhole",
        description:
          "무스카트-수르 간 해안도로에 위치한 천연 석회암 싱크홀. 터키블루 물에서 수영이 가능합니다.",
        category: "자연",
      },
    ],
    dayTrips: [
      {
        name: "와디 타브",
        nameEn: "Wadi Tiwi",
        description:
          "대추야자와 바나나 농장이 있는 그림 같은 계곡. 와디 샤브보다 한적한 오아시스.",
        travelTime: "차량 약 40분",
        gradient: "from-emerald-400 to-green-700",
      },
    ],
    localFood: [
      {
        name: "마슈아이",
        description:
          "통 양고기를 숯불에 구운 오만의 축제 요리. 수르 지역의 해산물 그릴도 일품.",
        emoji: "🐑",
      },
      {
        name: "신선한 해산물",
        description:
          "아침 생선 시장에서 바로 잡은 생선으로 만든 그릴과 카레. 킹피시와 참치가 대표적.",
        emoji: "🐟",
      },
    ],
    tips: [
      "무스카트에서 수르로 가는 해안도로가 매우 아름다우니 여유 있게 드라이브하세요.",
      "라스 알 진즈 거북 투어는 반드시 사전 예약이 필요합니다.",
      "와디 샤브은 보트 + 트레킹 + 수영이 결합된 코스로 3~4시간 소요됩니다.",
      "해안 지역이라 겨울에도 온화하지만 밤에는 선선해질 수 있습니다.",
    ],
  },

  // ===== COAST: WAHIBA SANDS =====
  "oman/coast/wahiba-sands": {
    heroGradient: "from-yellow-500 to-orange-800",
    description:
      "오만 동부에 펼쳐진 거대한 사막 지대. 높이 100m가 넘는 황금빛 모래 언덕과 베두인 유목민의 전통이 살아 있는 곳으로, 듄배싱, 낙타 트레킹, 사막 캠핑 등 아라비안 사막의 진수를 체험할 수 있습니다.",
    bestTime: "10~3월 (겨울 시즌, 여름은 50°C 이상으로 극도로 더움)",
    stayArea: "사막 캠프 (1000 Nights Camp, Desert Nights Camp 등)",
    transport: "무스카트에서 차량 약 3시간, 니즈와에서 약 2시간",
    districts: [
      {
        name: "사막 캠프 지역",
        nameEn: "Desert Camp Area",
        description:
          "와히바 샌즈 북쪽 진입로 부근에 다양한 사막 캠프가 밀집한 지역.",
        highlights: ["모래 언덕 듄배싱", "낙타 트레킹", "베두인 텐트"],
      },
    ],
    attractions: [
      {
        name: "와히바 샌즈 사막 체험",
        nameEn: "Wahiba Sands Desert Experience",
        description:
          "끝없이 펼쳐진 황금빛 모래 사막에서 4WD 듄배싱, 샌드보딩, 낙타 트레킹 등 다양한 사막 어드벤처를 즐길 수 있습니다. 밤에는 별이 쏟아지는 사막 캠프에서 전통 음식과 함께 잊을 수 없는 밤을 보냅니다.",
        category: "체험",
        tip: "듄배싱은 전문 드라이버와 함께 하며, 멀미가 심한 분은 주의하세요.",
      },
      {
        name: "베두인 마을 방문",
        nameEn: "Bedouin Village Visit",
        description:
          "사막에서 전통 생활을 이어가는 베두인 유목민 가정을 방문하여 낙타 우유와 커피를 나누며 유목 문화를 체험합니다.",
        category: "문화",
        tip: "현지 가이드를 통해 방문하며, 선물(과일, 생필품)을 가져가면 환영받습니다.",
      },
      {
        name: "사막 일출 & 일몰",
        nameEn: "Desert Sunrise & Sunset",
        description:
          "높은 모래 언덕 위에서 감상하는 사막의 일출과 일몰. 황금빛에서 붉은빛으로 변하는 모래 언덕의 색감이 장관입니다.",
        category: "자연",
      },
    ],
    dayTrips: [
      {
        name: "와디 바니 칼리드",
        nameEn: "Wadi Bani Khalid",
        description:
          "사막 한가운데 숨겨진 에메랄드빛 오아시스. 수영과 트레킹이 가능한 천연 풀장.",
        travelTime: "차량 약 1시간",
        gradient: "from-teal-400 to-emerald-700",
      },
    ],
    localFood: [
      {
        name: "베두인 바비큐",
        description:
          "모닥불 위에서 양고기와 닭고기를 구운 사막식 바비큐. 향신료와 쌀 요리가 함께 제공.",
        emoji: "🔥",
      },
      {
        name: "낙타 우유",
        description:
          "베두인 가정에서 마실 수 있는 신선한 낙타 우유. 비타민C가 풍부하고 독특한 맛.",
        emoji: "🥛",
      },
      {
        name: "카와 & 대추야자",
        description:
          "카르다몸 향의 아랍 커피와 달콤한 대추야자의 조합. 사막 환대의 상징.",
        emoji: "☕",
      },
    ],
    tips: [
      "4WD 차량만 사막 진입이 가능합니다. 렌터카 시 반드시 4WD를 선택하세요.",
      "사막 캠프 예약 시 듄배싱, 낙타 트레킹 포함 패키지가 효율적입니다.",
      "여름(5~9월)은 50°C를 넘기도 하므로 반드시 10~3월에 방문하세요.",
      "사막에서는 휴대폰 신호가 불안정하니 오프라인 지도와 보조 배터리를 준비하세요.",
    ],
  },
};

export const omanAttractionDetails: Record<string, AttractionDetail> = {
  // ===== MUSCAT: SULTAN QABOOS GRAND MOSQUE =====
  "oman/muscat/muscat/sultan-qaboos-grand-mosque": {
    heroGradient: "from-emerald-600 to-teal-900",
    description:
      "오만 술탄국의 위엄과 이슬람 예술의 정수를 보여주는 걸작 건축물. 30만 개 이상의 톤으로 구성된 대리석 외관, 세계에서 두 번째로 큰 수제 페르시안 카펫(4,343㎡), 그리고 600,000개의 스와로브스키 크리스탈로 장식된 거대 샹들리에가 경이로움을 자아냅니다.",
    history:
      "술탄 카부스 빈 사이드가 오만의 이슬람 문화 유산을 기리기 위해 건설을 명령하여 2001년 완공되었습니다. 6년간의 건설 기간 동안 전 세계의 최고급 자재와 장인의 기술이 동원되었으며, 이란의 직조공 600명이 4년에 걸쳐 세계 최대의 수제 카펫을 제작했습니다. 2만 명을 수용할 수 있는 오만 최대의 모스크입니다.",
    visitInfo: {
      hours: "비무슬림 입장: 토~목 08:00~11:00",
      admission: "무료",
      address: "Sultan Qaboos St, Muscat, Oman",
      website: "https://www.sgm.om",
    },
    highlights: [
      "세계 두 번째 크기의 수제 페르시안 카펫 (4,343㎡, 무게 21톤)",
      "600,000개 스와로브스키 크리스탈의 거대 샹들리에 (높이 14m, 무게 8톤)",
      "30만 개 이상의 인도산 사암과 이탈리안 대리석 외관",
      "화려한 이슬람 기하학 문양의 천장과 아치 장식",
    ],
    nearbyAttractions: [
      "로열 오페라 하우스 (차량 10분)",
      "쿠룸 자연공원 (차량 15분)",
      "무트라 수크 (차량 20분)",
    ],
    photoTips:
      "메인 예배당 내부의 카펫과 샹들리에를 함께 담는 광각 촬영이 가장 인상적입니다. 외부는 정문 앞 정원에서 미나렛과 돔을 함께 담으세요.",
    tips: [
      "비무슬림 입장은 토~목 오전 8시~11시만 가능하며, 금요일은 입장 불가입니다.",
      "남성은 긴 바지와 긴 소매, 여성은 긴 치마/바지, 긴 소매, 머리 스카프를 착용해야 합니다.",
      "내부에서 사진 촬영은 허용되지만 예배 중인 사람을 촬영하지 마세요.",
      "입구에서 무료 가이드 투어가 제공되며, 약 45분 소요됩니다.",
    ],
  },

  // ===== MUSCAT: MUTTRAH SOUQ =====
  "oman/muscat/muscat/muttrah-souq": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "오만에서 가장 오래된 전통 시장으로 200년 이상의 역사를 자랑합니다. 유향과 몰약의 향이 가득한 미로 같은 골목에 은세공품, 전통 칸자르(단검), 향신료, 파슈미나 숄 등이 빼곡하게 늘어서 있어 아라비안 나이트의 세계에 들어온 듯한 기분을 선사합니다.",
    history:
      "고대부터 인도양 해상 무역의 중심지였던 무트라 항구에 형성된 전통 시장입니다. 유향, 향신료, 직물 등을 거래하던 무역 중심지로 수 세기에 걸쳐 발전했으며, 현재도 현지인과 관광객 모두에게 사랑받는 오만의 대표 시장입니다.",
    visitInfo: {
      hours: "09:00~13:00, 16:00~21:00 (토~목), 금요일 16:00~21:00",
      admission: "무료",
      address: "Muttrah Corniche, Muscat, Oman",
    },
    highlights: [
      "유향과 몰약 전문점에서 다양한 등급의 유향 향 체험",
      "은세공 장인이 만든 전통 오만 은 장신구",
      "전통 칸자르(단검)와 오만 전통 의상 디스다샤",
      "향신료, 장미수, 대추야자 등 오만 특산물 쇼핑",
    ],
    nearbyAttractions: [
      "무트라 코르니쉬 (도보 1분)",
      "무트라 생선 시장 (도보 5분)",
      "알 알람 궁전 (차량 5분)",
    ],
    photoTips:
      "수크 입구의 아치형 문과 향신료가 쌓인 노점이 가장 분위기 있는 촬영 포인트입니다. 저녁에 조명이 켜지면 더욱 이국적인 분위기가 납니다.",
    tips: [
      "흥정은 기본입니다. 처음 제시된 가격의 50~60%부터 시작하세요.",
      "유향은 등급에 따라 가격 차이가 크니, 여러 가게를 비교해보세요.",
      "오후 4시 이후에 방문하면 더위를 피하고 활기 넘치는 분위기를 즐길 수 있습니다.",
      "미로 같은 구조이니 입구 위치를 기억해두세요.",
    ],
  },

  // ===== NIZWA FORT =====
  "oman/interior/nizwa/nizwa-fort": {
    heroGradient: "from-amber-500 to-yellow-800",
    description:
      "17세기 야루비 왕조의 이맘 술탄 빈 사이프가 건설한 오만 최대의 요새. 직경 36m, 높이 30m의 거대한 원형 탑이 특징이며, 정교한 방어 시스템과 함정, 끓는 기름을 부을 수 있는 구멍 등 중세 군사 건축의 정수를 보여줍니다.",
    history:
      "1668년 포르투갈 세력을 축출한 후 야루비 왕조의 이맘 술탄 빈 사이프가 12년에 걸쳐 건설했습니다. 니즈와는 6~7세기 오만 최초의 수도였으며, 이슬람 학문과 종교의 중심지로 '이슬람의 진주'라 불렸습니다. 요새는 내륙 무역로를 방어하는 핵심 거점 역할을 했습니다.",
    visitInfo: {
      hours: "토~목 09:00~16:00, 금 09:00~11:30",
      admission: "성인 5OMR, 어린이 무료",
      address: "Nizwa Fort, Nizwa, Oman",
    },
    highlights: [
      "직경 36m 원형 탑 꼭대기에서 바라보는 니즈와 시내와 대추야자 오아시스 전경",
      "미로 같은 내부의 함정, 비밀 통로, 끓는 기름 구멍 등 방어 시스템",
      "요새 내 전시관의 전통 무기, 의복, 도자기 컬렉션",
      "금요일 오전 요새 앞 광장에서 열리는 전통 가축 시장",
    ],
    nearbyAttractions: [
      "니즈와 수크 (도보 2분)",
      "바흘라 요새 (차량 40분)",
      "자블린 성 (차량 45분)",
    ],
    photoTips:
      "원형 탑 꼭대기에서 니즈와 시내와 하자르 산맥을 배경으로 한 파노라마 사진이 최고입니다. 오전 빛에서 요새의 황갈색 벽이 가장 아름답게 빛납니다.",
    tips: [
      "금요일 오전에 방문하면 요새와 가축 시장을 함께 둘러볼 수 있습니다.",
      "원형 탑 꼭대기까지 계단이 많으니 편한 신발을 착용하세요.",
      "요새 옆 니즈와 수크에서 은세공품과 대추야자를 쇼핑하세요.",
      "바흘라 요새, 자블린 성과 함께 '요새 루트' 당일치기를 추천합니다.",
    ],
  },

  // ===== WAHIBA SANDS: DESERT =====
  "oman/coast/wahiba-sands/wahiba-sands-desert": {
    heroGradient: "from-yellow-500 to-orange-800",
    description:
      "오만 동부에 12,500㎢에 걸쳐 펼쳐진 거대한 사막 지대. 높이 100m가 넘는 모래 언덕이 끝없이 이어지며, 베두인 유목민의 전통 생활이 여전히 살아 있는 아라비안 사막의 원형을 간직한 곳입니다.",
    history:
      "와히바 샌즈(현재 공식명 샤르키야 샌즈)는 수천 년간 베두인 유목민의 삶의 터전이었습니다. 1986년 영국 왕립 지리학회가 대규모 과학 탐사를 진행하여 150종 이상의 식물과 200종의 동물이 서식하는 놀라운 생태계를 발견했습니다. 현재도 일부 베두인 가정이 전통 방식으로 생활하고 있습니다.",
    visitInfo: {
      hours: "사막 캠프 체크인 14:00~15:00, 체크아웃 09:00~10:00",
      admission: "캠프 숙박비에 포함 (1인 약 30~100OMR)",
      address: "Sharqiya Sands (Wahiba Sands), Oman",
    },
    highlights: [
      "4WD 듄배싱으로 모래 언덕을 오르내리는 스릴 넘치는 체험",
      "낙타를 타고 사막을 횡단하는 전통 트레킹",
      "별이 가득한 사막 밤하늘 아래 모닥불 캠프파이어",
      "베두인 가정 방문과 낙타 우유, 전통 커피 체험",
    ],
    nearbyAttractions: [
      "와디 바니 칼리드 (차량 1시간)",
      "수르 (차량 2시간)",
      "니즈와 (차량 2시간)",
    ],
    photoTips:
      "일출과 일몰 시 모래 언덕의 그림자와 황금빛이 만들어내는 곡선이 최고의 촬영 포인트입니다. 높은 모래 언덕 위에서 넓은 사막을 배경으로 실루엣 사진도 인상적입니다.",
    tips: [
      "반드시 4WD 차량으로만 진입이 가능합니다. 일반 차량은 모래에 빠집니다.",
      "여름(5~9월)은 50°C를 넘기므로 절대 이 시기에는 방문을 피하세요.",
      "사막에서는 충분한 물(1인 최소 3리터)을 준비하세요.",
      "캠프 예약 시 듄배싱, 낙타 트레킹, 식사가 포함된 패키지를 선택하는 것이 효율적입니다.",
    ],
  },
};
