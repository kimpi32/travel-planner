import type { CityDetail, AttractionDetail } from "../city-details";

export const montenegroCityDetails: Record<string, CityDetail> = {
  // ===== COASTAL =====
  "montenegro/coastal/kotor": {
    heroGradient: "from-slate-600 to-blue-900",
    description:
      "코토르 만 깊숙한 곳에 자리한 유네스코 세계유산 도시. 피오르드를 연상시키는 드라마틱한 만과 중세 성벽으로 둘러싸인 구시가지가 만들어내는 풍경은 몬테네그로 최고의 절경입니다. 베네치아 공화국의 영향을 받은 건축미와 아드리아해의 아름다움이 공존합니다.",
    bestTime: "5~6월, 9~10월 (7~8월 크루즈선 극성수기)",
    stayArea: "구시가지 내부 또는 도브로타 지구",
    transport: "도보 (구시가지) / 시외 버스",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town",
        description:
          "중세 성벽으로 둘러싸인 역사 지구로 좁은 골목, 광장, 교회, 고양이들이 매력적인 미로 같은 공간.",
        highlights: ["성 트리폰 대성당", "무기 광장", "고양이 박물관", "해양 박물관"],
      },
      {
        name: "도브로타",
        nameEn: "Dobrota",
        description:
          "구시가지 북쪽의 해안 마을로 베네치아 시대 팔라초(저택)와 해변이 이어지는 한적한 지역.",
        highlights: ["성 에우스타시오 교회", "해안 산책로", "현지 레스토랑"],
      },
    ],
    attractions: [
      {
        name: "코토르 성벽",
        nameEn: "Kotor Fortress Walls",
        description:
          "구시가지 뒤편 산을 따라 해발 260m까지 이어지는 중세 성벽. 1,350개 계단을 오르면 코토르 만의 숨막히는 파노라마가 펼쳐집니다.",
        category: "역사",
        tip: "이른 아침 또는 일몰 전에 오르면 더위를 피하고 멋진 빛을 만날 수 있습니다.",
      },
      {
        name: "성 트리폰 대성당",
        nameEn: "Cathedral of Saint Tryphon",
        description:
          "1166년에 건설된 로마네스크 양식 대성당으로 코토르의 수호성인 성 트리폰의 유물을 보관하고 있습니다.",
        category: "종교",
        tip: "종탑에 올라가면 구시가지 지붕과 만의 전경을 감상할 수 있습니다.",
      },
      {
        name: "코토르 고양이 박물관",
        nameEn: "Cats Museum",
        description:
          "코토르의 비공식 마스코트인 고양이를 테마로 한 소규모 박물관. 구시가지 곳곳에서 고양이를 만날 수 있습니다.",
        category: "박물관",
      },
      {
        name: "해양 박물관",
        nameEn: "Maritime Museum",
        description:
          "코토르의 해양 역사와 베네치아 시대 무역의 역사를 전시하는 박물관으로 18세기 귀족 저택에 위치.",
        category: "박물관",
      },
    ],
    dayTrips: [
      {
        name: "페라스트 & 아워 레이디 오브 더 록",
        nameEn: "Perast & Our Lady of the Rocks",
        description: "코토르 만 내 바로크 마을과 인공 섬 위의 교회. 보트로 섬까지 이동합니다.",
        travelTime: "버스/차량 약 15분 + 보트 5분",
        gradient: "from-sky-400 to-blue-700",
      },
      {
        name: "부드바",
        nameEn: "Budva",
        description: "몬테네그로 최대의 해변 리조트 도시로 아름다운 구시가지와 해변이 공존.",
        travelTime: "버스 약 30분",
        gradient: "from-amber-400 to-orange-700",
      },
    ],
    localFood: [
      { name: "문어 샐러드", description: "삶은 문어를 올리브유, 레몬, 감자와 버무린 아드리아해 전통 전채.", emoji: "🐙" },
      { name: "검은 리소토", description: "오징어 먹물로 만든 아드리아해 해산물 리소토.", emoji: "🍚" },
      { name: "뉴글리 와인", description: "몬테네그로 토착 품종 뉴글리로 만든 레드 와인.", emoji: "🍷" },
    ],
    tips: [
      "크루즈선이 정박하는 9시~16시에는 구시가지가 매우 혼잡합니다. 이른 아침이나 저녁 방문을 추천합니다.",
      "성벽 하이킹은 약 1~1.5시간 소요되며, 물과 편한 신발이 필수입니다.",
      "구시가지 내 고양이에게 먹이를 줄 수 있는 전용 사료 자판기가 있습니다.",
      "두브로브니크에서 코토르까지 버스로 약 2시간이며, 국경 통과 시 여권이 필요합니다.",
    ],
  },
  "montenegro/coastal/budva": {
    heroGradient: "from-amber-400 to-orange-700",
    description:
      "몬테네그로 최대의 해변 리조트 도시이자 2,500년 역사의 구시가지를 품은 도시. 베네치아 양식 성벽 안의 아기자기한 구시가지와 아드리아해의 아름다운 해변이 만나는 곳으로, 여름에는 유럽 각지에서 휴양객이 몰려듭니다.",
    bestTime: "6~9월 (해수욕 시즌)",
    stayArea: "구시가지 주변 또는 슬로벤스카 해변가",
    transport: "도보 / 시내버스",
    districts: [
      {
        name: "구시가지",
        nameEn: "Old Town (Stari Grad)",
        description:
          "베네치아 양식의 성벽으로 둘러싸인 소규모 역사 지구. 좁은 골목, 교회, 광장, 카페가 밀집.",
        highlights: ["시타델라 요새", "성 요한 교회", "성벽 산책로", "해안 요새"],
      },
      {
        name: "슬로벤스카 해변",
        nameEn: "Slovenska Beach",
        description:
          "부드바 구시가지 바로 옆에 이어지는 1.6km 길이의 메인 해변. 호텔, 레스토랑, 바가 밀집.",
        highlights: ["슬로벤스카 비치", "비치바", "워터스포츠"],
      },
    ],
    attractions: [
      {
        name: "부드바 구시가지",
        nameEn: "Budva Old Town",
        description:
          "아드리아해로 돌출된 반도 위 베네치아 양식의 중세 성벽 도시. 좁은 돌담 골목과 교회, 카페가 어우러집니다.",
        category: "역사지구",
        tip: "성벽 위를 한 바퀴 도는 산책이 가능하며, 바다 위 일몰을 감상하기 좋습니다.",
      },
      {
        name: "모그렌 해변",
        nameEn: "Mogren Beach",
        description:
          "구시가지 서쪽 절벽 길을 따라가면 나오는 아름다운 해변. 절벽과 투명한 바다가 인상적입니다.",
        category: "해변",
        tip: "구시가지에서 해안 절벽길을 따라 도보 10분. 발레리나 동상이 포토스팟입니다.",
      },
      {
        name: "스베티 스테판",
        nameEn: "Sveti Stefan",
        description:
          "해변과 좁은 통로로 연결된 섬 위의 아만 리조트. 외부에서 바라보는 풍경이 몬테네그로의 상징적 이미지입니다.",
        category: "랜드마크",
        tip: "아만 리조트 투숙객만 섬 내부 진입이 가능합니다. 해변에서 바라보는 전경이 최고입니다.",
      },
      {
        name: "시타델라",
        nameEn: "Citadela",
        description:
          "구시가지 최고점에 위치한 중세 요새로 해양 박물관과 도서관이 있으며 바다 조망이 뛰어납니다.",
        category: "역사",
      },
    ],
    dayTrips: [
      {
        name: "코토르",
        nameEn: "Kotor",
        description: "코토르 만의 유네스코 세계유산 중세 도시. 성벽 하이킹과 구시가지 탐방.",
        travelTime: "버스 약 30분",
        gradient: "from-slate-500 to-blue-800",
      },
      {
        name: "로브첸 국립공원",
        nameEn: "Lovćen National Park",
        description: "몬테네그로의 상징인 로브첸 산과 네고시 영묘가 있는 국립공원.",
        travelTime: "차량 약 1시간",
        gradient: "from-green-500 to-emerald-800",
      },
    ],
    localFood: [
      { name: "니에구시 프로슈토", description: "로브첸 산 니에구시 마을에서 만드는 훈연 생햄, 몬테네그로 대표 특산품.", emoji: "🥓" },
      { name: "니에구시 치즈", description: "니에구시 마을 전통 반경성 치즈로 프로슈토와 함께 전채로 제공.", emoji: "🧀" },
      { name: "해산물 그릴", description: "아드리아해에서 잡은 신선한 생선과 해산물을 숯불에 구운 요리.", emoji: "🐟" },
    ],
    tips: [
      "7~8월 성수기에는 해변과 구시가지가 매우 붐비므로 6월이나 9월 방문을 추천합니다.",
      "스베티 스테판은 리조트 투숙객만 진입 가능하지만, 인접 해변에서 바라보는 풍경이 충분히 아름답습니다.",
      "부드바에서 코토르, 페라스트를 묶어 당일 투어가 인기 있습니다.",
      "밤에는 구시가지 광장에서 라이브 음악과 야외 바 문화를 즐길 수 있습니다.",
    ],
  },
  // ===== CENTRAL =====
  "montenegro/central/podgorica": {
    heroGradient: "from-gray-500 to-slate-800",
    description:
      "몬테네그로의 수도이자 최대 도시. 관광 목적지로 덜 알려져 있지만, 밀레니엄 브릿지와 모라차 강변 산책, 현대적 레스토랑과 카페가 매력적인 도시입니다. 해안 도시와 내륙 명소를 잇는 교통 허브로서의 역할이 큽니다.",
    bestTime: "4~6월, 9~10월 (여름 매우 더움)",
    stayArea: "시내 중심부 / 모라차 강변",
    transport: "시내버스 / 도보",
    districts: [
      {
        name: "시내 중심",
        nameEn: "City Center",
        description:
          "밀레니엄 브릿지, 독립 광장, 공화국 광장 등 주요 랜드마크가 밀집한 현대적 도심.",
        highlights: ["밀레니엄 브릿지", "독립 광장", "사하트 쿨라(시계탑)"],
      },
      {
        name: "스타라 바로시",
        nameEn: "Stara Varoš (Old Town)",
        description:
          "오스만 시대의 흔적이 남아 있는 구시가지로 모스크와 시계탑이 위치.",
        highlights: ["오스만 시계탑", "돌 다리", "모라차 강변"],
      },
    ],
    attractions: [
      {
        name: "밀레니엄 브릿지",
        nameEn: "Millennium Bridge",
        description:
          "모라차 강을 가로지르는 현대적 사장교로 포드고리차의 상징. 야간 조명이 인상적입니다.",
        category: "랜드마크",
      },
      {
        name: "그리스도 부활 대성당",
        nameEn: "Cathedral of the Resurrection",
        description:
          "2013년 완공된 세르비아 정교회 대성당으로 거대한 돔과 금색 모자이크가 특징입니다.",
        category: "종교",
        tip: "내부 프레스코화가 매우 인상적이며 무료 입장입니다.",
      },
      {
        name: "니아가라 폭포",
        nameEn: "Niagara Falls (Cijevna)",
        description:
          "포드고리차 근교 치예브나 강의 작은 폭포로 여름에 현지인들의 피서지. 이름만 니아가라일 뿐 소규모입니다.",
        category: "자연",
        tip: "시내에서 택시로 약 15분. 폭포 옆 레스토랑에서 식사를 즐길 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "스카다르 호수",
        nameEn: "Lake Skadar",
        description: "발칸 반도 최대 호수로 펠리컨과 수련이 있는 보트 투어가 유명합니다.",
        travelTime: "차량 약 40분",
        gradient: "from-emerald-400 to-green-700",
      },
      {
        name: "체티녜",
        nameEn: "Cetinje",
        description: "몬테네그로의 옛 수도로 궁전과 수도원이 있는 역사 도시.",
        travelTime: "버스 약 40분",
        gradient: "from-stone-400 to-stone-700",
      },
    ],
    localFood: [
      { name: "카차마크", description: "옥수수가루와 감자로 만든 걸쭉한 죽으로 카이막(크림)과 치즈를 곁들입니다.", emoji: "🍲" },
      { name: "치체바라", description: "달걀과 크림을 넣어 구운 몬테네그로 전통 오믈렛 파이.", emoji: "🥚" },
      { name: "니크시치 맥주", description: "몬테네그로 대표 맥주 브랜드로 현지에서 가장 인기.", emoji: "🍺" },
    ],
    tips: [
      "포드고리차는 교통 허브로 코토르, 부드바, 두르미토르로 가는 버스가 많습니다.",
      "여름(7~8월)에는 기온이 40도까지 올라가므로 한낮 외출 시 주의하세요.",
      "도시 자체 관광은 반나절이면 충분하며, 스카다르 호수와 결합하면 좋습니다.",
      "공항에서 시내까지 택시로 약 15분, 사전 가격 합의 추천.",
    ],
  },
};

export const montenegroAttractionDetails: Record<string, AttractionDetail> = {
  // ===== KOTOR =====
  "montenegro/coastal/kotor/kotor-fortress-walls": {
    heroGradient: "from-slate-600 to-blue-900",
    description:
      "코토르 구시가지 뒤편 산을 따라 해발 260m의 성 요한 요새(San Giovanni Fortress)까지 이어지는 중세 성벽입니다. 총 길이 약 4.5km, 최대 높이 20m에 달하며 1,350개의 계단을 올라야 정상에 도달합니다. 정상에서 내려다보는 코토르 만과 구시가지의 파노라마는 몬테네그로 최고의 절경으로 꼽힙니다.",
    history:
      "9세기경부터 축조가 시작되어 베네치아 공화국 시대(15~18세기)에 현재의 규모로 완성되었습니다. 코토르 자연·문화역사지구의 일부로 1979년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: {
      hours: "08:00~20:00 (5~9월) / 08:00~15:00 (10~4월)",
      admission: "€8 (성수기) / €3 (비수기)",
      address: "Stari Grad, 85330 Kotor",
    },
    highlights: [
      "정상 성 요한 요새에서 코토르 만 파노라마",
      "중간 지점 성모 건강 교회 (Our Lady of Health)",
      "1,350개 계단의 역사적 성벽 하이킹",
      "구시가지 지붕과 크루즈선이 보이는 중간 전망대",
    ],
    nearbyAttractions: ["코토르 구시가지", "성 트리폰 대성당", "해양 박물관", "페라스트"],
    photoTips:
      "정상에서 코토르 만 전체가 담기는 파노라마 사진이 압권입니다. 중간 교회 지점에서 구시가지 지붕을 내려다보는 앵글도 인기입니다.",
    tips: [
      "약 1~1.5시간 소요되며, 물을 충분히 챙기고 편한 운동화를 신으세요.",
      "여름에는 직사광선이 강하므로 이른 아침(8시)이나 일몰 전(17시 이후)에 오르는 것을 추천합니다.",
      "중간에 성모 건강 교회에서 쉬어갈 수 있으며, 여기까지만 올라도 충분히 멋진 전망입니다.",
      "크루즈선 입항 시간에는 입구가 매우 혼잡합니다.",
    ],
  },
  // ===== BUDVA =====
  "montenegro/coastal/budva/budva-old-town": {
    heroGradient: "from-amber-400 to-orange-700",
    description:
      "아드리아해로 돌출된 반도 위에 자리한 2,500년 역사의 구시가지입니다. 베네치아 양식의 성벽으로 둘러싸여 있으며, 좁은 돌담 골목, 작은 광장, 교회, 카페가 밀집해 있습니다. 성벽 위를 한 바퀴 돌며 바다 전경을 감상할 수 있습니다.",
    history:
      "기원전 5세기 그리스 식민지로 시작되어 로마, 비잔틴, 베네치아 시대를 거쳤습니다. 현재의 성벽은 15세기 베네치아 시대에 완성되었으며, 1979년 지진 피해 후 복원되었습니다.",
    visitInfo: {
      hours: "24시간 (구시가지) / 성벽 산책 08:00~20:00",
      admission: "무료 (구시가지) / 성벽 €3.50",
      address: "Stari Grad, 85310 Budva",
    },
    highlights: [
      "성벽 위 해안 산책로 (아드리아해 파노라마)",
      "성 요한 교회 (7세기)",
      "시타델라 요새와 해양 박물관",
      "구시가지 내 아기자기한 골목과 광장",
    ],
    nearbyAttractions: ["모그렌 해변", "슬로벤스카 해변", "리차르다 극장", "스베티 스테판"],
    photoTips:
      "성벽 위에서 바다를 배경으로 구시가지 지붕을 내려다보는 사진이 최고입니다. 모그렌 해변으로 가는 절벽 길의 발레리나 동상도 인기 포토스팟.",
    tips: [
      "성벽 산책은 약 30분 소요되며, 일몰 시간에 맞추면 환상적인 바다 뷰를 감상할 수 있습니다.",
      "구시가지 내부 레스토랑은 관광지 가격이므로 성벽 밖 식당이 더 합리적입니다.",
      "여름 밤에는 구시가지 광장에서 라이브 음악 공연이 열립니다.",
    ],
  },
  "montenegro/coastal/kotor/our-lady-of-the-rocks": {
    heroGradient: "from-sky-400 to-blue-700",
    description:
      "코토르 만 내 페라스트 앞바다에 떠 있는 인공 섬 위의 교회입니다. 1452년부터 선원들이 바위와 침몰한 배를 쌓아 만든 섬으로, 15세기부터 봉헌된 성모 마리아 아이콘과 은판 봉헌물이 교회 내부를 가득 채우고 있습니다.",
    history:
      "전설에 따르면 1452년 어부가 바위 위에서 성모 마리아 아이콘을 발견한 후, 선원들이 돌을 쌓아 섬을 만들기 시작했습니다. 현재 교회는 1630년에 건설되었으며, 내부에는 2,500여 개의 은판 봉헌물이 벽을 장식하고 있습니다.",
    visitInfo: {
      hours: "09:00~18:00 (계절별 변동)",
      admission: "€2 (교회) + 보트 왕복 €5",
      address: "Our Lady of the Rocks, Perast, Kotor Bay",
    },
    highlights: [
      "2,500여 개의 은판 봉헌물로 장식된 내부",
      "트리포 코콜리아 화가의 천장 프레스코화",
      "페라스트와 코토르 만의 파노라마 전경",
      "매년 7월 22일 파시나타(돌 던지기) 축제",
    ],
    nearbyAttractions: ["페라스트 바로크 마을", "성 조지 섬 (자연섬)", "코토르 구시가지"],
    photoTips:
      "보트에서 접근하며 섬과 교회를 배경으로 코토르 만 산맥이 함께 담기는 사진이 가장 아름답습니다.",
    tips: [
      "페라스트 해안가에서 보트를 타고 약 5분이면 도착합니다.",
      "교회 내부 관람은 약 20~30분이면 충분합니다.",
      "바로 옆 성 조지 섬은 수도원이 있어 외부인 출입이 금지됩니다.",
      "페라스트 마을 자체도 바로크 건축이 아름다워 함께 둘러보세요.",
    ],
  },
};
