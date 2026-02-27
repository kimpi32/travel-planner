import type { CityDetail, AttractionDetail } from "../city-details";

export const maltaCityDetails: Record<string, CityDetail> = {
  // ===== MALTA MAIN =====
  "malta/malta-main/valletta": {
    heroGradient: "from-amber-500 to-yellow-800",
    description:
      "유럽에서 가장 작은 수도이자 도시 전체가 유네스코 세계유산인 발레타. 성 요한 기사단이 건설한 요새 도시로, 바로크 건축물과 지중해의 푸른 바다가 어우러진 몰타의 심장입니다.",
    bestTime: "4~6월, 9~11월 (여름은 매우 더움, 2월 카니발 축제)",
    stayArea: "발레타 구시가지 / 슬리마 해안가",
    transport: "버스 (탈봇 버스 터미널 중심), 페리 (슬리마-발레타)",
    districts: [
      {
        name: "구시가지 중심부",
        nameEn: "Old Town Centre",
        description:
          "리퍼블릭 거리를 중심으로 성 요한 대성당, 대궁전, 주요 박물관이 밀집한 발레타의 핵심 역사 지구.",
        highlights: ["성 요한 대성당", "대궁전", "리퍼블릭 거리", "국립고고학박물관"],
      },
      {
        name: "그랜드 하버 지역",
        nameEn: "Grand Harbour Area",
        description:
          "어퍼 바라카 가든에서 내려다보는 웅장한 항구 전망. 대포 의식(Saluting Battery)이 매일 정오에 열립니다.",
        highlights: ["어퍼 바라카 가든", "살루팅 배터리", "로워 바라카 가든"],
      },
      {
        name: "워터프론트",
        nameEn: "Valletta Waterfront",
        description:
          "바로크 양식의 창고 건물을 개조한 레스토랑과 카페가 늘어선 항구변 산책로.",
        highlights: ["크루즈 터미널", "해안 레스토랑", "야경 산책"],
      },
    ],
    attractions: [
      {
        name: "성 요한 대성당",
        nameEn: "St John's Co-Cathedral",
        description:
          "1577년 완공된 성 요한 기사단의 수호 성당. 소박한 외관과 달리 내부는 카라바조의 걸작을 포함한 화려한 바로크 장식으로 가득합니다.",
        category: "성당",
        tip: "카라바조의 '세례자 요한의 참수'는 반드시 감상하세요. 오전에 방문하면 혼잡을 피할 수 있습니다.",
      },
      {
        name: "어퍼 바라카 가든",
        nameEn: "Upper Barrakka Gardens",
        description:
          "그랜드 하버와 쓰리 시티즈를 한눈에 내려다보는 발레타 최고의 전망 정원. 매일 정오와 오후 4시에 대포 의식이 열립니다.",
        category: "정원",
        tip: "정오 대포 발사 시간에 맞춰 방문하면 살루팅 배터리 의식을 볼 수 있습니다.",
      },
      {
        name: "대궁전",
        nameEn: "Grand Master's Palace",
        description:
          "16세기 성 요한 기사단 총장의 공식 관저로 건축된 궁전. 현재 몰타 대통령 집무실과 국회의사당으로 사용되며, 무기고와 일부 내부를 관람할 수 있습니다.",
        category: "궁전",
        tip: "무기고(Palace Armoury)는 별도 입장이며 기사단 시대의 갑옷과 무기 컬렉션이 인상적입니다.",
      },
      {
        name: "국립고고학박물관",
        nameEn: "National Museum of Archaeology",
        description:
          "몰타의 선사시대 거석 신전 유물을 전시하는 박물관. '잠자는 여인상'과 하갈 킴 신전 출토품이 대표 소장품입니다.",
        category: "박물관",
      },
      {
        name: "국립전쟁박물관",
        nameEn: "National War Museum",
        description:
          "2차 세계대전 당시 몰타의 영웅적 항전 역사를 다루는 박물관. 조지 크로스 훈장 원본이 전시되어 있습니다.",
        category: "박물관",
      },
    ],
    dayTrips: [
      {
        name: "므디나",
        nameEn: "Mdina",
        description:
          "'침묵의 도시'로 불리는 몰타의 옛 수도. 중세 성벽으로 둘러싸인 고즈넉한 도시.",
        travelTime: "버스 약 30분",
        gradient: "from-stone-500 to-stone-800",
      },
      {
        name: "쓰리 시티즈",
        nameEn: "Three Cities",
        description:
          "비르구, 셍글레아, 코스피쿠아로 이루어진 그랜드 하버 맞은편 역사 도시.",
        travelTime: "페리 약 10분",
        gradient: "from-blue-500 to-indigo-800",
      },
      {
        name: "블루 그로토",
        nameEn: "Blue Grotto",
        description:
          "지중해의 투명한 바닷물이 만들어내는 환상적인 푸른빛 해식 동굴.",
        travelTime: "버스 약 40분",
        gradient: "from-cyan-400 to-blue-700",
      },
    ],
    localFood: [
      {
        name: "파스티치",
        description:
          "리코타 치즈 또는 완두콩을 넣은 몰타식 페이스트리. 아침 간식으로 인기.",
        emoji: "🥧",
      },
      {
        name: "토끼 스튜 (펜카타)",
        description: "몰타 국민 요리로 토끼를 와인과 허브에 푹 끓인 전통 스튜.",
        emoji: "🍲",
      },
      {
        name: "킨니",
        description:
          "쓴 오렌지로 만든 몰타 고유의 탄산 음료. 지중해 햇살 아래 청량감 최고.",
        emoji: "🍊",
      },
    ],
    tips: [
      "몰타는 영어가 공용어이므로 의사소통이 매우 편리합니다.",
      "여름(7~8월)은 40도에 가까운 폭염이 잦으니 자외선 차단과 수분 보충에 신경 쓰세요.",
      "발레타 구시가지는 도보로 2~3시간이면 충분히 둘러볼 수 있습니다.",
      "탈봇 버스 터미널에서 몰타 전역으로 버스가 출발하며, 탈린자(Tallinja) 카드를 사면 교통비를 절약할 수 있습니다.",
    ],
  },

  "malta/malta-main/mdina": {
    heroGradient: "from-stone-500 to-stone-800",
    description:
      "'침묵의 도시(Silent City)'로 불리는 몰타의 옛 수도. 아랍 지배 시절 형성된 중세 성벽 도시로, 좁은 골목과 노르만 양식 건축물이 시간이 멈춘 듯한 분위기를 자아냅니다.",
    bestTime: "4~6월, 9~11월 (이른 아침 또는 저녁 방문 추천)",
    stayArea: "므디나 성벽 내 부티크 호텔 / 라바트 인근",
    transport: "발레타에서 버스 약 30분",
    districts: [
      {
        name: "므디나 구시가지",
        nameEn: "Mdina Old Town",
        description:
          "성벽 안쪽의 중세 도시. 노르만, 바로크 양식의 궁전과 교회, 좁은 골목이 미로처럼 이어집니다.",
        highlights: ["성 바오로 대성당", "메인 게이트", "바스티온 광장 전망대"],
      },
      {
        name: "라바트",
        nameEn: "Rabat",
        description:
          "므디나 성벽 바로 바깥의 마을. 성 바오로 지하 묘지와 로마 빌라 유적이 있습니다.",
        highlights: ["성 바오로 지하 묘지", "로마 도무스", "성 아가타 지하 묘지"],
      },
    ],
    attractions: [
      {
        name: "므디나 구시가지",
        nameEn: "Mdina Old City",
        description:
          "차량 통행이 제한된 성벽 도시 전체가 살아 있는 박물관. 좁은 석조 골목을 거닐며 수백 년 된 귀족 저택과 교회를 만날 수 있습니다.",
        category: "역사 도시",
        tip: "관광객이 적은 이른 아침이나 해 질 녘에 방문하면 '침묵의 도시' 분위기를 제대로 느낄 수 있습니다.",
      },
      {
        name: "성 바오로 대성당",
        nameEn: "St Paul's Cathedral",
        description:
          "12세기 노르만 양식으로 지어졌다 1693년 지진 후 바로크 양식으로 재건된 므디나의 주요 성당.",
        category: "성당",
      },
      {
        name: "바스티온 광장",
        nameEn: "Bastion Square",
        description:
          "므디나 성벽 위에서 몰타 섬 전경을 360도로 조망할 수 있는 전망 포인트.",
        category: "전망대",
        tip: "해 질 녘에 방문하면 몰타 섬 전체가 황금빛으로 물드는 절경을 감상할 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "발레타",
        nameEn: "Valletta",
        description:
          "유네스코 세계유산 도시이자 몰타의 현재 수도. 바로크 건축의 보고.",
        travelTime: "버스 약 30분",
        gradient: "from-amber-500 to-yellow-800",
      },
      {
        name: "디글리 클리프스",
        nameEn: "Dingli Cliffs",
        description:
          "몰타에서 가장 높은 해안 절벽으로 지중해의 탁 트인 절경을 감상할 수 있는 곳.",
        travelTime: "버스 약 15분",
        gradient: "from-emerald-500 to-teal-800",
      },
    ],
    localFood: [
      {
        name: "임카렛",
        description: "대추야자를 넣은 몰타 전통 다이아몬드 모양 쿠키.",
        emoji: "🍪",
      },
      {
        name: "호브자 비즈-제이트",
        description:
          "몰타식 빵에 토마토, 올리브유, 케이퍼, 참치 등을 얹은 간단한 전통 간식.",
        emoji: "🍞",
      },
      {
        name: "카놀리",
        description: "리코타 치즈를 채운 이탈리아 영향의 몰타식 튀김 과자.",
        emoji: "🧁",
      },
    ],
    tips: [
      "므디나 내부는 차량 통행이 제한되므로 도보로만 관광이 가능합니다.",
      "성벽 위 바스티온 광장에서 일몰을 감상하는 것을 강력히 추천합니다.",
      "므디나와 라바트를 합쳐 반나절이면 충분히 둘러볼 수 있습니다.",
    ],
  },

  "malta/malta-main/sliema": {
    heroGradient: "from-sky-400 to-blue-700",
    description:
      "발레타 맞은편에 위치한 현대적인 해안 도시. 쇼핑, 레스토랑, 호텔이 밀집한 몰타의 관광 거점으로, 해안 산책로를 따라 지중해의 아름다운 바다를 감상할 수 있습니다.",
    bestTime: "5~10월 (해수욕 시즌)",
    stayArea: "슬리마 해안가 / 타실비에니 지역",
    transport: "발레타에서 페리 약 10분 / 버스 약 20분",
    districts: [
      {
        name: "슬리마 워터프론트",
        nameEn: "Sliema Waterfront",
        description:
          "해안을 따라 이어지는 산책로로 카페, 레스토랑, 해수욕장이 늘어서 있는 슬리마의 중심 지역.",
        highlights: ["폰트 타실비에니", "타워 로드 산책로", "록 비치"],
      },
    ],
    attractions: [
      {
        name: "슬리마 워터프론트",
        nameEn: "Sliema Waterfront",
        description:
          "발레타의 스카이라인을 맞은편에서 감상하며 산책할 수 있는 해안 산책로. 수영, 일광욕, 조깅을 즐기는 현지인들의 일상을 만날 수 있습니다.",
        category: "해안",
        tip: "일몰 시간에 발레타 방향을 바라보며 산책하면 황금빛 스카이라인을 감상할 수 있습니다.",
      },
      {
        name: "타워 로드",
        nameEn: "Tower Road",
        description:
          "슬리마의 메인 해안 도로로 쇼핑몰, 브랜드숍, 레스토랑이 밀집한 상업 중심지.",
        category: "쇼핑",
      },
      {
        name: "폰트 타실비에니",
        nameEn: "Fond Ghadir / Tigne Point",
        description:
          "슬리마 끝자락의 쇼핑 복합단지로 더 포인트 쇼핑몰과 발레타 전망이 일품인 곳.",
        category: "쇼핑/전망",
      },
    ],
    dayTrips: [
      {
        name: "발레타",
        nameEn: "Valletta",
        description:
          "페리를 타고 10분이면 닿는 유네스코 세계유산 수도.",
        travelTime: "페리 약 10분",
        gradient: "from-amber-500 to-yellow-800",
      },
      {
        name: "코미노 섬 (블루 라군)",
        nameEn: "Comino Blue Lagoon",
        description:
          "투명한 터키색 바다로 유명한 코미노 섬의 블루 라군. 보트 투어로 방문.",
        travelTime: "보트 투어 약 1시간 30분",
        gradient: "from-teal-400 to-cyan-700",
      },
    ],
    localFood: [
      {
        name: "람푸키 파이",
        description:
          "가을 시즌 몰타 근해에서 잡히는 람푸키(만새기) 생선으로 만든 전통 파이.",
        emoji: "🐟",
      },
      {
        name: "젤라토",
        description: "이탈리아 영향을 받은 몰타식 수제 아이스크림. 해안 산책의 필수 동반자.",
        emoji: "🍨",
      },
    ],
    tips: [
      "슬리마에서 발레타까지 페리가 자주 운행되어 양쪽을 오가며 관광하기 편리합니다.",
      "몰타의 해수욕장은 대부분 록 비치(바위 해변)이므로 아쿠아 슈즈를 준비하세요.",
      "슬리마는 숙박비가 발레타보다 저렴하면서도 접근성이 좋아 베이스캠프로 추천합니다.",
    ],
  },

  // ===== GOZO =====
  "malta/gozo/victoria": {
    heroGradient: "from-orange-500 to-red-800",
    description:
      "고조 섬의 수도 빅토리아(옛 이름 라바트). 언덕 위의 치타델라 요새에서 고조 섬 전체와 지중해를 360도로 조망할 수 있는 고즈넉한 소도시입니다.",
    bestTime: "4~6월, 9~11월 (여름은 덥지만 관광 성수기)",
    stayArea: "빅토리아 중심부 / 마르사르폰 항구 인근",
    transport: "몰타 본섬 체르케우아 항구에서 고조 페리 약 25분 + 버스",
    districts: [
      {
        name: "치타델라",
        nameEn: "Citadella",
        description:
          "빅토리아 언덕 꼭대기의 중세 요새 도시. 고조 대성당과 박물관, 360도 파노라마 전망을 제공합니다.",
        highlights: ["고조 대성당", "치타델라 성벽", "파노라마 전망대", "옛 감옥"],
      },
      {
        name: "마르켓 광장",
        nameEn: "It-Tokk (Market Square)",
        description:
          "빅토리아 중심의 활기찬 광장. 매일 아침 열리는 재래시장에서 고조의 특산물을 만날 수 있습니다.",
        highlights: ["재래시장", "성 조지 바실리카", "오페라하우스"],
      },
    ],
    attractions: [
      {
        name: "치타델라",
        nameEn: "Citadella",
        description:
          "청동기 시대부터 사람이 살았던 고조의 상징적 요새. 성벽 위에서 고조 섬 전체와 몰타 본섬, 코미노 섬까지 360도 파노라마를 감상할 수 있습니다.",
        category: "요새",
        tip: "일몰 시간에 방문하면 지중해 너머로 지는 해를 감상할 수 있는 최고의 전망 포인트입니다.",
      },
      {
        name: "고조 대성당",
        nameEn: "Gozo Cathedral",
        description:
          "치타델라 내부에 자리한 바로크 양식의 성당. 돔이 없지만 천장에 트롱프뢰유 기법으로 그려진 가짜 돔 그림이 유명합니다.",
        category: "성당",
        tip: "천장의 착시 돔 그림은 성당 중앙에서 올려다봐야 가장 입체적으로 보입니다.",
      },
      {
        name: "잔티야 신전",
        nameEn: "Ggantija Temples",
        description:
          "기원전 3600년경 건축된 세계에서 가장 오래된 독립 석조 건축물 중 하나. 유네스코 세계유산.",
        category: "유적",
      },
      {
        name: "드웨이라 (내해)",
        nameEn: "Dwejra Inland Sea",
        description:
          "바위 터널을 통해 지중해와 연결된 내해. 소형 보트를 타고 터널을 통과하는 체험이 인기입니다.",
        category: "자연",
        tip: "보트 투어는 약 10분이며, 바람이 강한 날에는 운행이 중단될 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "코미노 섬 (블루 라군)",
        nameEn: "Comino Blue Lagoon",
        description:
          "고조와 몰타 사이의 작은 섬. 투명한 터키색 블루 라군이 유명.",
        travelTime: "보트 약 15분",
        gradient: "from-teal-400 to-cyan-700",
      },
      {
        name: "발레타",
        nameEn: "Valletta",
        description:
          "고조 페리 + 버스로 이동 가능한 몰타의 수도.",
        travelTime: "페리 + 버스 약 1시간 30분",
        gradient: "from-amber-500 to-yellow-800",
      },
    ],
    localFood: [
      {
        name: "프티라",
        description:
          "고조 특산 납작 빵에 토마토, 올리브유, 케이퍼 등을 올린 전통 간식.",
        emoji: "🫓",
      },
      {
        name: "고조 치즈 (줍비나)",
        description:
          "고조 섬에서 양젖으로 만드는 전통 치즈. 후추를 뿌린 숙성 치즈가 특히 유명.",
        emoji: "🧀",
      },
      {
        name: "카포나타",
        description: "몰타식 라타투이. 가지, 올리브, 케이퍼를 토마토 소스에 끓인 전통 반찬.",
        emoji: "🍆",
      },
    ],
    tips: [
      "고조 페리는 체르케우아(몰타)-므가르(고조) 구간으로, 약 25분 소요됩니다. 요금은 복편만 징수.",
      "고조 섬은 소규모이지만 버스 연결이 제한적이므로 렌터카나 투어 버스를 추천합니다.",
      "치타델라는 무료 입장이며, 내부 박물관은 별도 요금입니다.",
      "고조는 몰타 본섬보다 한적하고 자연이 풍부하여 1~2일 머물며 여유롭게 즐기기 좋습니다.",
    ],
  },
};

export const maltaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== VALLETTA ATTRACTIONS =====
  "malta/malta-main/valletta/st-johns-co-cathedral": {
    heroGradient: "from-amber-500 to-yellow-800",
    description:
      "1577년 성 요한 기사단을 위해 건축된 바로크 양식의 걸작. 소박한 석회암 외관과 극적으로 대비되는 내부는 금박 장식, 대리석 묘비 바닥, 카라바조의 걸작으로 가득 차 '유럽에서 가장 아름다운 성당 내부' 중 하나로 꼽힙니다.",
    history:
      "몰타 기사단(성 요한 기사단)의 수호 성당으로 1573~1577년 건축가 글로르무 카사르에 의해 건설되었습니다. 이후 마티아 프레티가 30년에 걸쳐 내부를 화려한 바로크 양식으로 장식했으며, 기사단 각 랑그(언어별 분파)가 자신의 예배당을 경쟁적으로 꾸미면서 지금의 모습이 되었습니다.",
    visitInfo: {
      hours: "월~금 09:30~16:30, 토 09:30~12:30, 일/공휴일 휴관",
      admission: "성인 15유로, 학생/시니어 12유로, 12세 이하 무료",
      address: "Triq San Gwann, Valletta VLT 1186, Malta",
      website: "https://www.stjohnscocathedral.com",
    },
    highlights: [
      "카라바조의 '세례자 요한의 참수' - 화가의 유일한 서명이 담긴 최대 걸작",
      "바닥 전체를 덮은 400개 이상의 대리석 묘비(기사단원 매장지)",
      "마티아 프레티가 그린 천장 벽화와 금박 장식의 압도적 내부",
      "8개 랑그(언어별 분파) 예배당 각각의 독특한 장식",
    ],
    nearbyAttractions: [
      "대궁전 (도보 2분)",
      "국립고고학박물관 (도보 3분)",
      "어퍼 바라카 가든 (도보 5분)",
    ],
    photoTips:
      "내부 촬영은 허용되나 플래시는 금지입니다. 입구에서 중앙 통로를 따라 제단을 바라보는 구도가 가장 인상적입니다.",
    tips: [
      "민소매, 반바지 등 노출이 심한 복장은 입장이 거부될 수 있으니 어깨와 무릎을 가리세요.",
      "오디오 가이드가 입장료에 포함되어 있으며 한국어는 미지원(영어 권장).",
      "토요일은 오전만 개방하고 일요일은 휴관이므로 평일 방문을 추천합니다.",
      "카라바조의 그림은 별도의 오라토리(Oratory)에 전시되어 있으니 놓치지 마세요.",
    ],
  },

  "malta/malta-main/valletta/upper-barrakka-gardens": {
    heroGradient: "from-green-500 to-emerald-800",
    description:
      "발레타 성벽 위에 자리한 몰타 최고의 전망 정원. 그랜드 하버와 쓰리 시티즈의 파노라마를 한눈에 담을 수 있으며, 매일 정오와 오후 4시에 울려 퍼지는 살루팅 배터리(대포 의식)가 명물입니다.",
    history:
      "1661년 이탈리아 기사 플라미니오 발뇨니가 기사단원들의 휴식 공간으로 조성했습니다. 원래는 기사단 이탈리아 랑그 전용 정원이었으나, 영국 식민 시대에 일반에 공개되었습니다. 아치형 테라스 구조는 원래 기사단의 훈련장 지붕이었습니다.",
    visitInfo: {
      hours: "07:00~22:00 (연중 개방)",
      admission: "무료 (살루팅 배터리 관람 포함)",
      address: "292 Triq Sant' Orsla, Valletta VLT 1150, Malta",
    },
    highlights: [
      "그랜드 하버와 쓰리 시티즈를 한눈에 담는 압도적인 파노라마 전망",
      "매일 정오/오후 4시의 살루팅 배터리(Saluting Battery) 대포 발사 의식",
      "아치형 테라스 아래의 조각상과 기념비",
      "고양이들이 한가로이 노는 평화로운 정원 분위기",
    ],
    nearbyAttractions: [
      "성 요한 대성당 (도보 5분)",
      "대궁전 (도보 5분)",
      "로워 바라카 가든 (도보 10분)",
    ],
    photoTips:
      "정원 테라스 난간에서 그랜드 하버를 내려다보는 파노라마 구도가 최고입니다. 정오 대포 발사 순간도 놓치지 마세요.",
    tips: [
      "정오 대포 발사를 보려면 11:45까지 살루팅 배터리 앞에 자리를 잡으세요.",
      "무료 엘리베이터로 항구 쪽에서 정원까지 올라올 수 있습니다.",
      "일몰 시간대에 방문하면 그랜드 하버의 황금빛 야경을 감상할 수 있습니다.",
      "정원 내 공공 화장실과 카페가 있어 쉬어가기 좋습니다.",
    ],
  },

  "malta/malta-main/valletta/grand-masters-palace": {
    heroGradient: "from-red-500 to-rose-800",
    description:
      "1571년 성 요한 기사단 총장의 관저로 건축된 발레타의 중심 궁전. 기사단 시대의 갑옷과 무기를 소장한 무기고(Palace Armoury)와 화려한 국가 접견실을 관람할 수 있으며, 현재도 몰타 대통령 집무실과 국회로 사용됩니다.",
    history:
      "1571년 기사단 총장 피에트로 델 몬테의 명으로 건축이 시작되어 이후 역대 총장들이 확장했습니다. 프랑스 나폴레옹의 점령, 영국 식민 통치를 거치며 각 시대의 역사가 층층이 쌓여 있습니다. 2차 세계대전 중에는 영국군 사령부로 사용되었습니다.",
    visitInfo: {
      hours: "10:00~16:30 (국가 행사 시 임시 휴관)",
      admission: "무기고: 성인 10유로, 국가 접견실: 성인 10유로, 통합 티켓 14유로",
      address: "Triq il-Merkanti, Valletta VLT 1171, Malta",
      website: "https://heritagemalta.mt",
    },
    highlights: [
      "5,000점 이상의 갑옷, 검, 대포를 소장한 유럽 최대 규모 무기고",
      "기사단 총장의 초상화가 걸린 화려한 국가 접견실",
      "넵튠의 안뜰과 프린스 알프레드 안뜰의 아름다운 정원",
      "복도를 장식하는 뤼네트 벽화(몰타 대포위 전투 장면)",
    ],
    nearbyAttractions: [
      "성 요한 대성당 (도보 2분)",
      "국립고고학박물관 (도보 3분)",
      "어퍼 바라카 가든 (도보 5분)",
    ],
    photoTips:
      "안뜰의 아치형 회랑과 정원 구도가 아름답습니다. 무기고 내부는 촬영이 가능하지만 플래시는 금지.",
    tips: [
      "국가 접견실은 정부 행사로 갑자기 휴관할 수 있으니 방문 전 확인하세요.",
      "무기고와 국가 접견실 통합 티켓이 따로 사는 것보다 저렴합니다.",
      "오디오 가이드를 대여하면 기사단 시대의 역사를 더 깊이 이해할 수 있습니다.",
      "소요 시간은 무기고 + 국가 접견실 합쳐 약 1시간 30분입니다.",
    ],
  },

  // ===== MDINA ATTRACTIONS =====
  "malta/malta-main/mdina/mdina-old-city": {
    heroGradient: "from-stone-500 to-stone-800",
    description:
      "'침묵의 도시'로 불리는 몰타의 옛 수도 전체가 하나의 거대한 관광 명소. 아랍 지배 시절에 형성된 성벽과 해자, 노르만 및 바로크 양식의 궁전, 좁은 미로 같은 골목이 중세의 시간 속으로 안내합니다.",
    history:
      "기원전 700년경 페니키아인이 처음 요새를 세운 이래, 로마, 아랍, 노르만 등 수많은 문명의 지배를 거쳤습니다. '므디나(Mdina)'라는 이름은 아랍어 '메디나(도시)'에서 유래했습니다. 1530년 기사단이 발레타로 수도를 옮기면서 '침묵의 도시'라는 별명을 얻었습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 도시)",
      admission: "무료 (개별 박물관 요금 별도)",
      address: "Mdina, Malta",
    },
    highlights: [
      "메인 게이트를 지나는 순간 중세로 시간 여행하는 듯한 분위기",
      "바스티온 광장에서 바라보는 몰타 섬 전경의 360도 파노라마",
      "좁은 석조 골목 사이로 드러나는 노르만 귀족 저택과 교회",
      "해 질 녘 성벽 위에서 감상하는 황금빛 몰타 풍경",
    ],
    nearbyAttractions: [
      "성 바오로 대성당 (도보 3분)",
      "라바트 - 성 바오로 지하 묘지 (도보 5분)",
      "므디나 던전 박물관 (도보 3분)",
    ],
    photoTips:
      "메인 게이트를 정면에서 촬영하거나, 좁은 골목에서 원근감을 살린 구도가 인기입니다. 해 질 녘 바스티온 광장의 풍경은 몰타 최고의 포토 스폿 중 하나입니다.",
    tips: [
      "관광객이 적은 이른 아침(8~9시)이나 저녁(18시 이후)에 방문하면 진정한 '침묵의 도시'를 느낄 수 있습니다.",
      "며느리도 모르게 일어나는 TV 촬영을 만날 수 있습니다. 왕좌의 게임(Game of Thrones) 촬영지로도 유명합니다.",
      "도시 규모가 작아 1~2시간이면 충분히 둘러볼 수 있습니다.",
      "라바트의 성 바오로 지하 묘지와 함께 방문하면 반나절 코스로 좋습니다.",
    ],
  },

  // ===== VICTORIA (GOZO) ATTRACTIONS =====
  "malta/gozo/victoria/citadella": {
    heroGradient: "from-orange-500 to-red-800",
    description:
      "고조 섬의 상징이자 역사적 중심지인 치타델라. 청동기 시대부터 사람이 살았던 이 요새는 고조 대성당, 박물관, 옛 감옥 등을 품고 있으며, 성벽 위에서 고조 섬 전체와 몰타, 코미노까지 아우르는 360도 파노라마를 제공합니다.",
    history:
      "청동기 시대(기원전 1500년경)부터 요새로 사용되었으며, 페니키아, 로마, 아랍, 노르만 시대를 거치며 확장되었습니다. 1551년 오스만 해적의 침공으로 고조 주민 대부분이 노예로 끌려간 비극의 역사가 있습니다. 이후 기사단이 재건하여 현재의 모습을 갖추었습니다.",
    visitInfo: {
      hours: "상시 개방 (요새 자체), 박물관: 09:00~17:00",
      admission: "요새 입장 무료, 박물관 통합 티켓 성인 5유로",
      address: "Citadella, Victoria (Rabat), Gozo, Malta",
      website: "https://heritagemalta.mt",
    },
    highlights: [
      "성벽 위 360도 파노라마 - 고조, 몰타, 코미노 섬이 한눈에",
      "고조 대성당의 트롱프뢰유(착시) 돔 천장화",
      "옛 감옥(Old Prison)에 남아 있는 수감자들의 벽면 낙서",
      "고고학 박물관과 자연사 박물관의 고조 역사 전시",
    ],
    nearbyAttractions: [
      "잇톡 광장 재래시장 (도보 5분)",
      "성 조지 바실리카 (도보 7분)",
      "잔티야 신전 (버스 약 10분)",
    ],
    photoTips:
      "성벽 위 남쪽 전망대에서 고조의 계단식 밭과 지중해를 배경으로 한 파노라마가 최고의 촬영 포인트입니다. 일몰 시간대가 가장 아름답습니다.",
    tips: [
      "요새 자체는 무료이므로 부담 없이 방문하세요. 박물관은 통합 티켓이 유리합니다.",
      "계단과 경사로가 많으니 편한 신발을 착용하세요.",
      "여름에는 그늘이 거의 없으니 모자와 물을 꼭 챙기세요.",
      "빅토리아 시내 잇톡 광장에서 치타델라까지 도보 약 10분(오르막)입니다.",
    ],
  },

  // ===== SLIEMA ATTRACTIONS =====
  "malta/malta-main/sliema/sliema-waterfront": {
    heroGradient: "from-sky-400 to-blue-700",
    description:
      "슬리마 해안을 따라 이어지는 산책로로, 맞은편 발레타의 스카이라인을 감상하며 걷는 몰타 최고의 해안 산책 코스. 록 비치에서의 수영, 카페에서의 여유, 일몰 감상까지 몰타 현지인의 일상을 함께할 수 있습니다.",
    history:
      "슬리마는 19세기까지 작은 어촌이었으나, 영국 식민 시대에 군인과 상인이 모여들며 급성장했습니다. 20세기 후반 관광업 발전과 함께 몰타 최대의 상업 및 관광 중심지로 변모했습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 산책로)",
      admission: "무료",
      address: "Tower Road / The Strand, Sliema, Malta",
    },
    highlights: [
      "발레타 스카이라인을 배경으로 한 해안 산책",
      "폰트 타실비에니에서 바라보는 발레타 일몰",
      "여름 록 비치에서의 지중해 수영",
      "해안가 카페에서의 여유로운 몰타 일상 체험",
    ],
    nearbyAttractions: [
      "더 포인트 쇼핑몰 (도보 5분)",
      "발레타 (페리 10분)",
      "세인트 줄리안스 (도보 20분)",
    ],
    photoTips:
      "일몰 시간에 발레타 방향을 바라보며 촬영하면 황금빛 스카이라인을 담을 수 있습니다. 해안가 벤치나 록 비치에서의 시선 높이 구도도 추천합니다.",
    tips: [
      "록 비치는 모래가 아닌 바위이므로 아쿠아 슈즈를 가져가세요.",
      "슬리마-발레타 페리는 편도 약 1.50유로로 저렴하고 전망도 좋습니다.",
      "타워 로드를 따라 세인트 줄리안스까지 해안 산책을 이어갈 수 있습니다 (약 30분).",
      "여름 저녁에는 해안가가 현지인들로 붐비며 활기찬 분위기를 즐길 수 있습니다.",
    ],
  },
};
