import type { CityDetail, AttractionDetail } from "../city-details";

export const albaniaCityDetails: Record<string, CityDetail> = {
  // ===== CENTRAL ALBANIA =====
  "albania/central/tirana": {
    heroGradient: "from-red-500 to-rose-800",
    description:
      "알바니아의 수도이자 최대 도시. 오스만 제국과 공산주의 시대를 거쳐 현재는 활기찬 변화를 겪고 있는 도시로, 화려한 색상의 건물과 넓은 광장, 카페 문화가 매력적입니다. 유럽에서 가장 저렴한 여행지 중 하나로 배낭여행자들에게 인기가 높습니다.",
    bestTime: "4~6월, 9~10월 (여름은 매우 더움)",
    stayArea: "스칸데르베그 광장 주변 / 블로쿠 지구",
    transport: "시내버스 / 도보 (중심부 컴팩트)",
    districts: [
      {
        name: "스칸데르베그 광장",
        nameEn: "Skanderbeg Square",
        description:
          "티라나의 심장부로 국립역사박물관, 에뎀 베이 모스크, 시계탑이 둘러싼 거대한 광장.",
        highlights: ["국립역사박물관", "에뎀 베이 모스크", "시계탑", "오페라 극장"],
      },
      {
        name: "블로쿠",
        nameEn: "Blloku",
        description:
          "공산주의 시절 고위 간부 전용 구역이었으나 현재는 트렌디한 카페, 바, 레스토랑이 밀집한 핫플레이스.",
        highlights: ["카페 거리", "루프탑 바", "부티크 숍", "스트리트 아트"],
      },
      {
        name: "신시장 지구",
        nameEn: "New Bazaar (Pazari i Ri)",
        description:
          "전통 시장을 현대적으로 리모델링한 공간으로 신선한 농산물, 레스토랑, 카페가 어우러진 미식 지구.",
        highlights: ["신시장(파자리 이 리)", "현지 식재료", "전통 음식점"],
      },
    ],
    attractions: [
      {
        name: "스칸데르베그 광장",
        nameEn: "Skanderbeg Square",
        description:
          "알바니아 국가 영웅의 이름을 딴 거대한 중앙 광장으로 주변에 주요 건물이 밀집해 있습니다.",
        category: "광장",
        tip: "광장 중앙의 스칸데르베그 기마상이 인증샷 포인트입니다.",
      },
      {
        name: "국립역사박물관",
        nameEn: "National History Museum",
        description:
          "알바니아의 고대부터 현대까지 역사를 총망라하는 박물관으로 정면의 거대한 모자이크 벽화가 상징적입니다.",
        category: "박물관",
        tip: "공산주의 시대 전시실이 특히 인상적입니다.",
      },
      {
        name: "다이티 산 케이블카",
        nameEn: "Dajti Ekspres",
        description:
          "티라나 동쪽 다이티 산(해발 1,613m)까지 오르는 케이블카로 도시 전경과 알바니아 산맥을 조망할 수 있습니다.",
        category: "전망대",
        tip: "맑은 날에는 아드리아해까지 보입니다. 산 정상 레스토랑에서 점심 추천.",
      },
      {
        name: "번커아트 2",
        nameEn: "BunkArt 2",
        description:
          "공산주의 시대 핵 방공호를 개조한 박물관으로 공포정치와 감시 사회의 역사를 전시합니다.",
        category: "박물관",
        tip: "스칸데르베그 광장 바로 옆에 위치해 접근이 편리합니다.",
      },
    ],
    dayTrips: [
      {
        name: "베라트",
        nameEn: "Berat",
        description: "'천 개의 창문 도시'로 불리는 유네스코 세계유산 도시. 오스만 시대 건축이 잘 보존되어 있습니다.",
        travelTime: "버스 약 2.5시간",
        gradient: "from-amber-400 to-orange-700",
      },
      {
        name: "크루야",
        nameEn: "Kruja",
        description: "알바니아 국가 영웅 스칸데르베그의 성이 있는 역사 도시. 전통 바자르가 유명합니다.",
        travelTime: "버스 약 1시간",
        gradient: "from-stone-400 to-stone-700",
      },
    ],
    localFood: [
      { name: "타베 코시", description: "양고기를 요거트 소스와 함께 오븐에 구운 알바니아 대표 요리.", emoji: "🍖" },
      { name: "뵈렉", description: "필로 반죽에 치즈, 시금치, 고기 등을 넣어 구운 파이.", emoji: "🥧" },
      { name: "라키", description: "포도로 만든 알바니아 전통 증류주로 식전주로 즐깁니다.", emoji: "🍶" },
    ],
    tips: [
      "알바니아 화폐는 레크(Lek)이며, 유로도 많은 곳에서 통용됩니다.",
      "물가가 유럽에서 가장 저렴한 수준으로 식사 1끼 €3~5 정도입니다.",
      "택시는 미터기 사용을 확인하거나 사전에 요금을 합의하세요.",
      "블로쿠 지구의 밤 문화는 유럽 어느 도시 못지않게 활기찹니다.",
    ],
  },
  // ===== SOUTHERN ALBANIA =====
  "albania/southern/berat": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "유네스코 세계유산에 등재된 '천 개의 창문 도시'. 오수미 강 양쪽으로 오스만 시대 하얀 집들이 언덕을 따라 빼곡히 들어서 있으며, 2,400년 역사의 베라트 성채가 도시를 내려다봅니다. 알바니아에서 가장 아름다운 도시로 꼽힙니다.",
    bestTime: "4~10월 (5~6월 최적)",
    stayArea: "만갈렘 지구 또는 구시가지 내",
    transport: "도보 (도시 중심부 컴팩트)",
    districts: [
      {
        name: "만갈렘",
        nameEn: "Mangalem",
        description:
          "강 동쪽 언덕에 위치한 무슬림 지구로 하얀 오스만 가옥이 층층이 이어지는 '천 개의 창문' 풍경의 중심.",
        highlights: ["오스만 가옥", "바첼러 모스크", "킹 모스크"],
      },
      {
        name: "고리차",
        nameEn: "Gorica",
        description:
          "강 서쪽 기독교 지구로 성 스피리돈 교회와 민족지학 박물관이 위치. 만갈렘의 전경을 감상하기 좋은 곳.",
        highlights: ["고리차 다리", "성 스피리돈 교회", "만갈렘 전경 뷰포인트"],
      },
    ],
    attractions: [
      {
        name: "베라트 성채",
        nameEn: "Berat Castle (Kalaja)",
        description:
          "해발 214m 언덕 위에 자리한 고대 성채로 성 안에 아직도 주민이 거주하는 살아있는 요새입니다.",
        category: "고성",
        tip: "성 안의 오눌프리 교회에 있는 비잔틴 아이콘 컬렉션은 필수 관람입니다.",
      },
      {
        name: "오눌프리 아이콘 박물관",
        nameEn: "Onufri Museum",
        description:
          "16세기 알바니아 화가 오눌프리의 비잔틴 아이콘 걸작을 소장한 박물관으로 성채 내 교회에 위치합니다.",
        category: "박물관",
      },
      {
        name: "만갈렘 전망대",
        nameEn: "Mangalem Viewpoint",
        description:
          "고리차 다리에서 바라보는 만갈렘 지구의 하얀 오스만 가옥 파노라마가 베라트의 상징적 풍경입니다.",
        category: "전망대",
        tip: "일몰 시 창문에 반사되는 황금빛 풍경이 특히 아름답습니다.",
      },
    ],
    dayTrips: [
      {
        name: "티라나",
        nameEn: "Tirana",
        description: "알바니아의 수도로 국립박물관과 블로쿠 지구의 활기찬 카페 문화를 체험할 수 있습니다.",
        travelTime: "버스 약 2.5시간",
        gradient: "from-red-400 to-rose-700",
      },
    ],
    localFood: [
      { name: "타베 엘바산", description: "양고기와 요거트를 겹겹이 쌓아 오븐에 구운 전통 캐서롤.", emoji: "🍲" },
      { name: "코르체 맥주", description: "알바니아 대표 맥주 브랜드로 현지에서 가장 인기 있는 맥주.", emoji: "🍺" },
    ],
    tips: [
      "베라트 성채까지 오르막이 가파르니 편한 신발을 신으세요.",
      "만갈렘과 고리차 두 지구를 연결하는 고리차 다리에서 양쪽 풍경을 모두 감상할 수 있습니다.",
      "티라나에서 당일치기로 가능하지만 1박하면 야경까지 즐길 수 있습니다.",
    ],
  },
  "albania/southern/saranda": {
    heroGradient: "from-cyan-400 to-blue-700",
    description:
      "알바니아 남부 이오니아해 해안의 리조트 도시. 코르푸 섬이 바로 건너편에 보이는 해변 도시로 부트린트 유적지와 블루아이 자연 명소의 관문입니다. 그리스 코르푸에서 페리로 30분이면 도착하는 접근성도 매력 포인트입니다.",
    bestTime: "6~9월 (해수욕 시즌)",
    stayArea: "해변가 프롬나드 주변",
    transport: "도보 / 미니버스 (시외 이동 시 퍼르곤)",
    districts: [
      {
        name: "해변가",
        nameEn: "Waterfront",
        description:
          "이오니아해를 따라 이어지는 해안 산책로로 호텔, 레스토랑, 바가 밀집한 사란다의 중심.",
        highlights: ["해안 프롬나드", "사란다 비치", "항구", "일몰 뷰"],
      },
      {
        name: "크사밀",
        nameEn: "Ksamil",
        description:
          "사란다 남쪽 15km에 위치한 알바니아의 몰디브로 불리는 해변 마을. 에메랄드빛 바다와 작은 섬들이 매력적.",
        highlights: ["크사밀 비치", "삼쌍둥이 섬", "미러 비치"],
      },
    ],
    attractions: [
      {
        name: "부트린트 유적지",
        nameEn: "Butrint National Park",
        description:
          "유네스코 세계유산에 등재된 고대 도시 유적으로 그리스, 로마, 비잔틴, 베네치아 시대의 유적이 층층이 쌓여 있습니다.",
        category: "유적지",
        tip: "사란다에서 미니버스로 30분. 최소 2시간 이상 여유를 잡으세요.",
      },
      {
        name: "블루아이",
        nameEn: "Blue Eye (Syri i Kalter)",
        description:
          "깊이를 알 수 없는 신비로운 파란 샘물이 솟아나는 자연 명소. 수온이 연중 10도로 매우 차갑습니다.",
        category: "자연",
        tip: "입장료가 있으며, 수영은 금지입니다. 사란다에서 택시 또는 투어로 방문.",
      },
      {
        name: "레카니 성",
        nameEn: "Lekursi Castle",
        description:
          "사란다 남쪽 언덕 위에 위치한 성으로 사란다만, 코르푸 섬, 부트린트 호수의 파노라마 전망을 즐길 수 있습니다.",
        category: "전망대",
        tip: "성 안의 레스토랑에서 일몰을 보며 식사하는 것을 추천합니다.",
      },
    ],
    dayTrips: [
      {
        name: "코르푸 섬 (그리스)",
        nameEn: "Corfu Island",
        description: "사란다에서 페리로 30분이면 도착하는 그리스의 아름다운 이오니아 섬.",
        travelTime: "페리 약 30분",
        gradient: "from-blue-400 to-indigo-700",
      },
      {
        name: "지로카스터",
        nameEn: "Gjirokastra",
        description: "유네스코 세계유산 '돌의 도시'로 오스만 시대 석조 건축물이 잘 보존된 역사 도시.",
        travelTime: "버스 약 1시간",
        gradient: "from-stone-500 to-stone-800",
      },
    ],
    localFood: [
      { name: "해산물 그릴", description: "이오니아해에서 잡은 신선한 생선과 해산물을 숯불에 구운 요리.", emoji: "🐟" },
      { name: "바클라바", description: "꿀과 호두를 넣은 필로 페이스트리 디저트, 알바니아 남부 스타일.", emoji: "🍯" },
      { name: "그리스 샐러드", description: "그리스와 가까운 지리적 영향으로 신선한 지중해식 샐러드가 일상적.", emoji: "🥗" },
    ],
    tips: [
      "그리스 코르푸에서 사란다로 들어오는 페리 여행이 인기 있는 루트입니다.",
      "크사밀 해변은 여름 성수기에 매우 붐비므로 아침 일찍 방문하세요.",
      "사란다~부트린트~블루아이를 묶어서 하루에 돌아볼 수 있습니다.",
      "알바니아 리비에라(Albanian Riviera) 해안도로 드라이브가 절경입니다.",
    ],
  },
};

export const albaniaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== TIRANA =====
  "albania/central/tirana/skanderbeg-square": {
    heroGradient: "from-red-500 to-rose-800",
    description:
      "티라나의 중앙 광장으로 알바니아 국가 영웅 스칸데르베그의 기마상이 중앙에 서 있습니다. 면적 약 40,000m²로 국립역사박물관, 에뎀 베이 모스크, 오페라 극장, 시계탑 등 주요 건물에 둘러싸여 있습니다. 2017년 대대적인 재정비를 거쳐 보행자 친화적 공간으로 탈바꿈했습니다.",
    history:
      "오스만 시대부터 도시의 중심이었으며, 공산주의 시절에는 엔베르 호자의 거대 동상이 세워져 있다가 1991년 철거되었습니다. 현재의 광장은 2017년 재정비 후의 모습입니다.",
    visitInfo: {
      hours: "24시간 (야외 광장)",
      admission: "무료",
      address: "Sheshi Skenderbej, Tirana",
    },
    highlights: [
      "스칸데르베그 기마상",
      "국립역사박물관 정면 모자이크 벽화",
      "에뎀 베이 모스크 (1789년)",
      "시계탑 (35m, 전망대 개방)",
    ],
    nearbyAttractions: ["국립역사박물관", "에뎀 베이 모스크", "번커아트 2", "블로쿠 지구"],
    photoTips:
      "광장 남쪽에서 기마상과 국립역사박물관 모자이크를 함께 담는 구도가 가장 인기 있습니다.",
    tips: [
      "광장 주변 건물 내부(박물관, 모스크 등)는 각각 별도 입장입니다.",
      "저녁에는 분수와 조명이 어우러져 낮과는 다른 분위기를 즐길 수 있습니다.",
      "광장에서 블로쿠 지구까지 도보 10분이면 연결됩니다.",
    ],
  },
  // ===== BERAT =====
  "albania/southern/berat/berat-castle": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "해발 214m 언덕 위에 자리한 2,400년 역사의 성채입니다. 다른 성과 달리 성 내부에 아직도 주민이 거주하고 있어 '살아있는 성'으로 불립니다. 비잔틴 교회, 오스만 모스크, 오눌프리 아이콘 박물관 등 다양한 시대의 유적이 공존합니다.",
    history:
      "기원전 4세기 일리리아인이 처음 요새를 세운 이래, 로마, 비잔틴, 불가리아, 오스만 등 여러 제국의 지배를 거쳤습니다. 2008년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "08:00~20:00 (4~10월) / 08:00~17:00 (11~3월)",
      admission: "100 레크 (약 €1)",
      address: "Kalaja, Berat",
    },
    highlights: [
      "오눌프리 아이콘 박물관 (16세기 비잔틴 아이콘 걸작)",
      "성 삼위일체 교회",
      "성벽에서 바라보는 만갈렘·고리차 파노라마",
      "성 내부 거주민의 일상 풍경",
    ],
    nearbyAttractions: ["만갈렘 지구", "고리차 다리", "킹 모스크", "민족지학 박물관"],
    photoTips:
      "성벽 위에서 내려다보는 만갈렘의 하얀 집들과 오수미 강의 조합이 베라트 최고의 사진 포인트입니다.",
    tips: [
      "성까지 오르는 길이 가파르고 자갈길이므로 편한 운동화를 신으세요.",
      "성 안에서 현지인이 운영하는 작은 카페에서 터키식 커피를 마셔보세요.",
      "오눌프리 박물관은 성 안 교회 내에 있으며 별도 입장료가 있습니다.",
    ],
  },
  // ===== SARANDA =====
  "albania/southern/saranda/butrint-national-park": {
    heroGradient: "from-emerald-500 to-green-800",
    description:
      "알바니아 남부에 위치한 유네스코 세계유산으로, 기원전 7세기 그리스 식민지부터 베네치아 시대까지 2,500년 이상의 역사가 겹겹이 쌓인 고고학 유적지입니다. 지중해 습지와 숲으로 둘러싸인 반도에 위치해 자연 경관도 뛰어납니다.",
    history:
      "기원전 7세기 코르키라(코르푸) 그리스인이 세운 식민지에서 시작되어 로마, 비잔틴, 베네치아 시대를 거치며 발전했습니다. 1992년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "08:00~19:00 (4~9월) / 08:00~16:00 (10~3월)",
      admission: "1,000 레크 (약 €9)",
      address: "Butrint National Park, Sarandë",
      website: "https://butrint.al",
    },
    highlights: [
      "그리스 극장 (기원전 3세기, 1,500석 규모)",
      "비잔틴 세례당 (모자이크 바닥)",
      "로마 목욕탕 유적",
      "베네치아 삼각 요새 (전망대)",
      "부트린트 호수와 습지 생태계",
    ],
    nearbyAttractions: ["크사밀 해변", "블루아이", "사란다 해변가"],
    photoTips:
      "그리스 극장에서 호수 방향으로 찍는 사진과 베네치아 요새 꼭대기에서 내려다보는 유적지 파노라마가 추천 포인트입니다.",
    tips: [
      "사란다에서 미니버스(퍼르곤)로 약 30분, 택시로 약 20분 소요됩니다.",
      "최소 2~3시간 여유를 잡고 방문하세요. 유적지가 넓습니다.",
      "여름에는 그늘이 적으므로 모자, 물, 선크림을 챙기세요.",
      "영어 안내 표지판이 잘 되어 있어 오디오 가이드 없이도 충분합니다.",
    ],
  },
};
