import type { CityDetail, AttractionDetail } from "../city-details";

export const greeceCityDetails: Record<string, CityDetail> = {
  // ===== ATHENS & MAINLAND =====
  "greece/athens-mainland/athens": {
    heroGradient: "from-blue-600 to-amber-500",
    description: "서양 문명의 발상지이자 그리스의 수도. 아크로폴리스를 중심으로 3,000년 역사가 살아 숨 쉬며, 플라카 구시가지의 골목과 현대적 카페 문화가 어우러지는 매력적인 도시입니다.",
    bestTime: "4~6월, 9~10월 (여름은 매우 더움)",
    stayArea: "플라카 / 모나스티라키 / 신타그마 광장 주변",
    transport: "메트로 3개 노선, 트램, 버스",
    districts: [
      { name: "플라카", nameEn: "Plaka", description: "아크로폴리스 기슭의 가장 오래된 거주 지역으로 좁은 골목과 네오클래식 건축이 매력적.", highlights: ["아나피오티카 마을", "아드리아누 거리", "전통 타베르나"] },
      { name: "모나스티라키", nameEn: "Monastiraki", description: "벼룩시장과 거리 음식이 가득한 활기찬 지역.", highlights: ["모나스티라키 벼룩시장", "체리미키스 모스크", "아고라 전경"] },
      { name: "신타그마", nameEn: "Syntagma", description: "국회의사당과 근위병 교대식이 열리는 아테네의 중심 광장.", highlights: ["근위병 교대식", "국립정원", "에르무 거리 쇼핑"] },
    ],
    attractions: [
      { name: "아크로폴리스", nameEn: "Acropolis", description: "파르테논 신전이 서 있는 아테네의 상징, 유네스코 세계유산.", category: "유적지", tip: "이른 아침이나 늦은 오후에 방문하면 인파와 더위를 피할 수 있습니다." },
      { name: "아크로폴리스 박물관", nameEn: "Acropolis Museum", description: "아크로폴리스 출토 유물 4,000여점을 전시하는 현대식 박물관.", category: "박물관", tip: "유리 바닥 아래 고대 유적을 내려다볼 수 있습니다." },
      { name: "플라카 지구", nameEn: "Plaka District", description: "아테네에서 가장 그림 같은 구시가지로 전통 타베르나와 기념품 가게가 즐비.", category: "거리" },
      { name: "올림피아 제우스 신전", nameEn: "Temple of Olympian Zeus", description: "고대 그리스 최대의 신전 유적. 원래 104개 기둥 중 15개가 남아있습니다.", category: "유적지", tip: "하드리아누스 개선문과 함께 둘러보세요." },
      { name: "고대 아고라", nameEn: "Ancient Agora", description: "소크라테스가 걸었던 고대 아테네의 시장터이자 정치의 중심지.", category: "유적지" },
      { name: "리카비토스 언덕", nameEn: "Lycabettus Hill", description: "아테네 시내 최고봉으로 도시 전체와 아크로폴리스 파노라마 뷰.", category: "전망대" },
    ],
    dayTrips: [
      { name: "수니온 곶", nameEn: "Cape Sounion", description: "포세이돈 신전이 서 있는 에게해 절벽의 일몰 명소.", travelTime: "버스 약 1.5시간", gradient: "from-orange-400 to-rose-600" },
      { name: "에기나 섬", nameEn: "Aegina Island", description: "피스타치오와 아파이아 신전으로 유명한 사로닉 만의 섬.", travelTime: "페리 약 1시간", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "무사카", description: "가지, 감자, 다진 고기에 베샤멜 소스를 올려 구운 그리스 대표 요리.", emoji: "🍆" },
      { name: "수블라키", description: "꼬치에 꿴 구운 고기를 피타 빵에 싸먹는 그리스식 스트리트 푸드.", emoji: "🥙" },
      { name: "그릭 샐러드", description: "토마토, 오이, 올리브, 페타 치즈로 만든 상큼한 전통 샐러드.", emoji: "🥗" },
    ],
    tips: [
      "아크로폴리스 콤비 티켓(€30)으로 7개 유적지를 5일간 방문할 수 있습니다.",
      "여름(7~8월)은 40°C에 달하므로 모자와 물을 반드시 챙기세요.",
      "지하철 타 중 소매치기에 주의하세요. 특히 오모니아역 주변.",
      "일요일에는 모나스티라키 벼룩시장이 가장 활발합니다.",
    ],
  },
  "greece/athens-mainland/delphi": {
    heroGradient: "from-emerald-500 to-stone-700",
    description: "고대 그리스인들이 '세계의 중심(배꼽)'이라 여겼던 성지. 파르나소스 산 기슭에 자리한 아폴론 신전과 극장은 유네스코 세계유산으로, 올리브 나무 숲이 바다까지 펼쳐지는 장관이 압도적입니다.",
    bestTime: "4~6월, 9~10월",
    stayArea: "델피 마을 중심부",
    transport: "아테네에서 버스 약 2.5시간",
    districts: [
      { name: "고고학 유적지", nameEn: "Archaeological Site", description: "아폴론 신전, 극장, 스타디움이 있는 유적 지구.", highlights: ["아폴론 신전", "고대 극장", "스타디움"] },
      { name: "델피 마을", nameEn: "Delphi Town", description: "유적지 아래에 위치한 현대 마을로 타베르나와 숙소가 밀집.", highlights: ["파르나소스 산 전망", "올리브 계곡 뷰", "전통 타베르나"] },
    ],
    attractions: [
      { name: "델피 고고학 유적지", nameEn: "Delphi Archaeological Site", description: "고대 그리스의 신탁소로 아폴론 신전, 보물창고, 극장이 산비탈에 펼쳐져 있습니다.", category: "유적지", tip: "아침 일찍 도착하면 단체 관광객을 피할 수 있습니다." },
      { name: "델피 박물관", nameEn: "Delphi Museum", description: "청동 마부상(Charioteer) 등 델피 출토 유물을 전시하는 중요 박물관.", category: "박물관" },
      { name: "아테나 프로나이아 토로스", nameEn: "Tholos of Athena Pronaia", description: "델피에서 가장 사진이 많이 찍히는 원형 신전 유적.", category: "유적지" },
    ],
    dayTrips: [
      { name: "아라호바", nameEn: "Arachova", description: "파르나소스 산 기슭의 돌로 지은 예쁜 산악 마을.", travelTime: "버스 약 20분", gradient: "from-stone-400 to-amber-600" },
    ],
    localFood: [
      { name: "포르말렐라 치즈", description: "파르나소스 산지에서 생산되는 전통 그리스 치즈.", emoji: "🧀" },
      { name: "양고기 클레프티코", description: "종이에 싸서 오래 구운 전통 양고기 요리.", emoji: "🍖" },
    ],
    tips: [
      "유적지와 박물관 콤비 티켓(€12)을 구매하세요.",
      "산비탈 유적지이므로 편한 신발을 신으세요.",
      "아테네에서 당일치기가 가능하지만, 1박 하면 여유롭게 즐길 수 있습니다.",
    ],
  },
  "greece/athens-mainland/meteora": {
    heroGradient: "from-stone-500 to-sky-600",
    description: "거대한 바위 기둥 위에 세워진 수도원들이 장관을 이루는 유네스코 세계유산. '공중에 떠 있는 수도원'이라는 뜻으로, 기독교 정교회 수도승들의 경이로운 건축이 자연과 조화를 이룹니다.",
    bestTime: "4~5월, 9~10월 (봄가을 날씨 최적)",
    stayArea: "칼람바카 마을",
    transport: "아테네에서 기차 약 4시간",
    districts: [
      { name: "칼람바카", nameEn: "Kalambaka", description: "메테오라 관광의 거점 도시로 바위 절벽 아래에 자리잡은 마을.", highlights: ["메테오라 뷰 포인트", "비잔틴 교회", "전통 식당"] },
      { name: "카스트라키", nameEn: "Kastraki", description: "칼람바카 옆 작은 마을로 메테오라 바위에 둘러싸인 고즈넉한 분위기.", highlights: ["바위 파노라마", "트레킹 코스 출발점", "조용한 숙소"] },
    ],
    attractions: [
      { name: "메테오라 수도원군", nameEn: "Meteora Monasteries", description: "높이 600m 바위 기둥 위에 세워진 6개의 현존 수도원. 14세기부터 수도승들이 은둔 생활을 해왔습니다.", category: "종교/유적", tip: "하루에 3~4개 수도원 방문이 적당합니다." },
      { name: "대 메테오론 수도원", nameEn: "Great Meteoron", description: "메테오라에서 가장 크고 오래된 수도원(14세기). 바위 꼭대기에서 360도 파노라마를 감상할 수 있습니다.", category: "수도원", tip: "계단이 많으므로 체력을 배분하세요." },
      { name: "바를라암 수도원", nameEn: "Varlaam Monastery", description: "대 메테오론 다음으로 큰 수도원으로 프레스코 벽화가 특히 아름답습니다.", category: "수도원" },
      { name: "일몰 전망대", nameEn: "Sunset Viewpoint", description: "메테오라 바위와 수도원이 황금빛으로 물드는 최고의 일몰 포인트.", category: "전망대" },
    ],
    dayTrips: [
      { name: "트리칼라", nameEn: "Trikala", description: "메테오라 인근의 활기찬 대학 도시로 구시가지 산책이 즐거운 곳.", travelTime: "버스 약 30분", gradient: "from-green-400 to-emerald-600" },
    ],
    localFood: [
      { name: "치즈 파이(티로피타)", description: "바삭한 필로 반죽 안에 페타 치즈를 넣은 그리스 전통 파이.", emoji: "🥧" },
      { name: "칼람바카 꿀 디저트", description: "지역 특산 꿀로 만든 바클라바와 전통 디저트류.", emoji: "🍯" },
      { name: "수블라키", description: "어디서나 사랑받는 그리스 대표 스트리트 푸드.", emoji: "🥙" },
    ],
    tips: [
      "수도원마다 휴무일이 다르므로 사전에 확인하세요.",
      "어깨와 무릎을 가리는 복장이 필수입니다 (수도원 입장 시).",
      "렌터카가 있으면 자유롭게 이동 가능하고, 없으면 칼람바카에서 투어 이용.",
      "일출과 일몰 시간의 메테오라가 가장 아름답습니다.",
    ],
  },

  // ===== CYCLADES =====
  "greece/cyclades/santorini": {
    heroGradient: "from-blue-400 to-white",
    description: "화산 폭발로 형성된 칼데라 절벽 위에 하얀 집들이 늘어선 세계에서 가장 로맨틱한 섬. 이아 마을의 일몰은 세계 3대 일몰로 꼽히며, 화산 해변과 와이너리도 매력적입니다.",
    bestTime: "5~6월, 9~10월 (7~8월은 극성수기)",
    stayArea: "피라 / 이아 / 이메로비글리",
    transport: "ATV, 렌터카, 로컬 버스",
    districts: [
      { name: "이아", nameEn: "Oia", description: "세계적으로 유명한 일몰 명소로 파란 돔 교회와 럭셔리 동굴 호텔이 밀집.", highlights: ["이아 일몰", "파란 돔 교회", "아무디 베이"] },
      { name: "피라", nameEn: "Fira", description: "산토리니의 수도로 칼데라 절벽을 따라 레스토랑과 상점이 늘어선 중심지.", highlights: ["칼데라 전망", "선사시대 박물관", "케이블카"] },
      { name: "이메로비글리", nameEn: "Imerovigli", description: "산토리니에서 가장 높은 마을로 스카로스 바위 트레킹이 유명.", highlights: ["스카로스 바위", "칼데라 최고 뷰", "허니문 호텔"] },
    ],
    attractions: [
      { name: "이아 일몰", nameEn: "Oia Sunset", description: "산토리니의 하이라이트. 하얀 마을 너머로 에게해에 빠지는 황금빛 일몰은 세계 최고로 평가됩니다.", category: "자연/뷰", tip: "일몰 1~2시간 전에 자리를 잡으세요. 성 근처가 명당입니다." },
      { name: "피라", nameEn: "Fira", description: "칼데라 절벽을 따라 걷는 산책로와 쇼핑, 레스토랑이 즐비한 산토리니의 수도.", category: "마을", tip: "피라에서 이아까지 칼데라 트레킹 코스(약 3시간)를 추천합니다." },
      { name: "레드 비치", nameEn: "Red Beach", description: "붉은 화산 절벽이 인상적인 산토리니 대표 해변.", category: "해변" },
      { name: "아크로티리 유적지", nameEn: "Akrotiri", description: "화산재에 묻힌 미노아 문명 유적으로 '에게해의 폼페이'라 불립니다.", category: "유적지" },
    ],
    dayTrips: [
      { name: "네아 카메니 화산", nameEn: "Nea Kameni Volcano", description: "산토리니 칼데라 중앙의 활화산 섬 트레킹.", travelTime: "보트 약 20분", gradient: "from-red-500 to-stone-700" },
    ],
    localFood: [
      { name: "토마토 케프테데스", description: "산토리니 체리 토마토로 만든 튀긴 토마토 전.", emoji: "🍅" },
      { name: "파바", description: "산토리니 특산 노란 완두콩 퓌레.", emoji: "🫘" },
      { name: "빈산토 와인", description: "화산 토양에서 자란 포도로 만든 달콤한 디저트 와인.", emoji: "🍷" },
    ],
    tips: [
      "7~8월 극성수기에는 숙소 가격이 3~4배 뛰니 봄/가을 시즌을 노리세요.",
      "피라↔이아 칼데라 트레킹은 반드시 선크림, 모자, 물을 챙기세요.",
      "렌터카보다 ATV가 좁은 골목에서 편리하지만, 도로 사고에 주의.",
      "공항/항구에서 숙소 셔틀을 미리 예약하면 바가지를 피할 수 있습니다.",
    ],
  },
  "greece/cyclades/mykonos": {
    heroGradient: "from-cyan-400 to-blue-700",
    description: "에게해의 파티 아일랜드이자 세련된 코스모폴리탄 섬. 리틀 베니스의 해변 바, 풍차, 하얀 골목이 조화를 이루며 낮에는 해변, 밤에는 클럽 문화가 펼쳐집니다.",
    bestTime: "6~9월 (파티 시즌) / 5월, 10월 (한적한 여행)",
    stayArea: "미코노스 타운 / 플라티스 얄로스",
    transport: "로컬 버스, ATV, 수상택시",
    districts: [
      { name: "미코노스 타운(호라)", nameEn: "Mykonos Town (Hora)", description: "하얀 미로 골목과 부티크 상점이 밀집한 섬의 중심지.", highlights: ["리틀 베니스", "카토 밀리 풍차", "파라포르티아니 교회"] },
      { name: "해변 지구", nameEn: "Beach Area", description: "파라다이스, 슈퍼 파라다이스 등 유명 해변이 연달아 이어지는 남쪽 해안.", highlights: ["파라다이스 비치", "엘리아 비치", "비치 클럽"] },
    ],
    attractions: [
      { name: "리틀 베니스", nameEn: "Little Venice", description: "바다 바로 위에 지어진 18세기 선장들의 집이 늘어선 미코노스의 상징적 풍경.", category: "거리/뷰", tip: "일몰 시간에 해변 바에서 칵테일과 함께 즐기세요." },
      { name: "카토 밀리 풍차", nameEn: "Kato Mili Windmills", description: "미코노스의 아이콘인 16세기 풍차 5기. 리틀 베니스 바로 옆에 위치.", category: "랜드마크" },
      { name: "파라포르티아니 교회", nameEn: "Paraportiani Church", description: "5개 예배당이 합쳐진 독특한 형태의 새하얀 교회.", category: "건축" },
    ],
    dayTrips: [
      { name: "델로스 섬", nameEn: "Delos Island", description: "아폴론 탄생 신화의 섬, 유네스코 세계유산 고대 유적지.", travelTime: "보트 약 30분", gradient: "from-amber-400 to-stone-600" },
    ],
    localFood: [
      { name: "루자", description: "미코노스 전통 훈제 돼지고기 햄.", emoji: "🥓" },
      { name: "코펠로", description: "아몬드와 오렌지 꽃물로 만든 미코노스 전통 과자.", emoji: "🍬" },
    ],
    tips: [
      "미코노스 타운 골목은 일부러 미로처럼 만들었으니 길을 잃어도 즐기세요.",
      "비치 클럽 선베드는 사전 예약이 필수인 곳이 많습니다.",
      "델로스 섬은 오전 투어로 다녀오는 것이 일반적입니다 (숙박 불가).",
    ],
  },

  // ===== CRETE =====
  "greece/crete/heraklion": {
    heroGradient: "from-amber-500 to-blue-600",
    description: "그리스 최대의 섬 크레타의 수도이자 미노아 문명의 중심지. 크노소스 궁전과 고고학 박물관에서 유럽 최초의 문명을 만날 수 있으며, 활기찬 시장과 베네치아 요새도 볼거리입니다.",
    bestTime: "4~6월, 9~10월",
    stayArea: "구시가지 / 베네치아 항구 주변",
    transport: "시내 버스, 렌터카 추천 (섬 투어 시)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "베네치아 성벽으로 둘러싸인 역사 지구로 시장과 분수가 있는 곳.", highlights: ["모로시니 분수", "성 미나스 대성당", "1866 거리 시장"] },
      { name: "코울레스 요새", nameEn: "Koules Fortress Area", description: "베네치아 시대의 항구와 요새가 자리한 해안 지역.", highlights: ["코울레스 요새", "구항구 산책로", "해산물 레스토랑"] },
    ],
    attractions: [
      { name: "크노소스 궁전", nameEn: "Knossos Palace", description: "미노아 문명의 중심지로 유럽에서 가장 오래된 궁전 유적(기원전 1900년). 미노타우로스 미궁의 전설이 서린 곳.", category: "유적지", tip: "가이드 투어를 추천합니다. 폐허만으로는 이해하기 어렵습니다." },
      { name: "이라클리오 고고학 박물관", nameEn: "Heraklion Archaeological Museum", description: "미노아 문명 유물의 세계 최대 컬렉션. 파이스토스 원반, 뱀 여신상 등.", category: "박물관" },
      { name: "코울레스 요새", nameEn: "Koules Fortress", description: "베네치아 시대에 건설된 항구 요새로 이라클리오의 상징.", category: "요새" },
    ],
    dayTrips: [
      { name: "스피날롱가 섬", nameEn: "Spinalonga Island", description: "베네치아 요새와 나환자 수용소 역사가 있는 작은 섬.", travelTime: "차+보트 약 1.5시간", gradient: "from-teal-400 to-blue-700" },
      { name: "마탈라 해변", nameEn: "Matala Beach", description: "히피 문화의 성지로 해변 동굴이 유명.", travelTime: "버스 약 2시간", gradient: "from-amber-400 to-orange-600" },
    ],
    localFood: [
      { name: "다코스", description: "보리 러스크 위에 토마토, 페타 치즈, 올리브유를 올린 크레타 전통 전채.", emoji: "🫓" },
      { name: "칼리추냐", description: "크레타산 달팽이를 올리브유에 튀긴 전통 요리.", emoji: "🐌" },
      { name: "라키", description: "크레타 전통 포도 증류주, 식후에 무료로 제공되기도.", emoji: "🥃" },
    ],
    tips: [
      "크노소스 궁전은 오전 일찍 가면 크루즈 단체 관광객을 피할 수 있습니다.",
      "크레타는 그리스에서 가장 큰 섬이므로 렌터카가 가장 효율적입니다.",
      "해변 리조트를 원하면 이라클리오보다 동쪽의 아기오스 니콜라오스가 좋습니다.",
    ],
  },
  "greece/crete/chania": {
    heroGradient: "from-rose-400 to-amber-500",
    description: "크레타에서 가장 아름다운 도시로 베네치아 항구와 등대가 상징적. 올드타운의 색색 건물, 좁은 골목, 가죽 공방 거리가 어우러져 '크레타의 베네치아'라 불립니다.",
    bestTime: "5~10월",
    stayArea: "베네치아 항구 주변 올드타운",
    transport: "시내 도보, 섬 내 이동은 버스/렌터카",
    districts: [
      { name: "올드타운", nameEn: "Old Town", description: "베네치아-오스만 시대 건축이 남아있는 역사 지구.", highlights: ["베네치아 항구", "등대", "가죽 공방 거리"] },
      { name: "스플란치아", nameEn: "Splantzia", description: "현지인들의 생활 지역으로 조용한 광장과 카페가 있는 곳.", highlights: ["1821 광장", "아기오스 니콜라오스 교회", "로컬 타베르나"] },
    ],
    attractions: [
      { name: "베네치아 항구", nameEn: "Venetian Harbour", description: "14세기 베네치아인들이 건설한 항구와 이집트 스타일 등대. 일몰에 가장 아름답습니다.", category: "항구/역사", tip: "등대까지 걸어가면 하니아 올드타운 전경을 감상할 수 있습니다." },
      { name: "하니아 시장(아고라)", nameEn: "Chania Market", description: "십자형 실내 시장으로 크레타 특산물과 향신료를 판매.", category: "시장" },
      { name: "해양 박물관", nameEn: "Maritime Museum", description: "크레타의 해양 역사와 미노아 시대 선박 모형을 전시.", category: "박물관" },
    ],
    dayTrips: [
      { name: "사마리아 협곡", nameEn: "Samaria Gorge", description: "유럽에서 가장 긴 협곡(16km) 트레킹으로 크레타 최고의 자연 체험.", travelTime: "버스 약 1시간", gradient: "from-green-500 to-stone-600" },
    ],
    localFood: [
      { name: "부레키", description: "감자와 주키니, 미지트라 치즈를 넣은 하니아식 파이.", emoji: "🥧" },
      { name: "크레타 올리브유", description: "세계 최고 품질의 엑스트라 버진 올리브유. 모든 요리의 기본.", emoji: "🫒" },
    ],
    tips: [
      "베네치아 항구의 등대까지 산책로는 왕복 약 30분입니다.",
      "사마리아 협곡 트레킹은 5~10월만 가능하며 5~7시간 소요됩니다.",
      "올드타운 레스토랑은 항구 최전방보다 한 블록 안쪽이 맛과 가격 모두 좋습니다.",
      "가죽 공방 거리(오도스 스키달로프)에서 수제 샌들을 맞출 수 있습니다.",
    ],
  },

  // ===== OTHER ISLANDS =====
  "greece/other-islands/rhodes": {
    heroGradient: "from-amber-400 to-rose-600",
    description: "도데카니사 제도의 중심 섬으로 중세 기사단의 성이 남아있는 유네스코 세계유산 구시가지가 최대 볼거리. 고대 세계 7대 불가사의 '로도스의 거상'이 서 있었던 섬입니다.",
    bestTime: "5~10월",
    stayArea: "로도스 올드타운 / 신시가지",
    transport: "시내 도보, 섬 내 버스/렌터카",
    districts: [
      { name: "올드타운", nameEn: "Old Town", description: "유네스코 세계유산에 등재된 중세 성벽 도시. 기사단 거리와 골목이 미로처럼 이어집니다.", highlights: ["기사단 거리", "술레이만 모스크", "성벽 산책"] },
      { name: "만드라키 항구", nameEn: "Mandraki Harbour", description: "고대 거상이 서 있었다는 전설의 항구. 사슴 동상이 입구를 지킵니다.", highlights: ["사슴 동상", "성 니콜라스 요새", "풍차"] },
    ],
    attractions: [
      { name: "그랜드 마스터 궁전", nameEn: "Palace of the Grand Master", description: "요한 기사단의 본거지였던 중세 궁전. 고딕 건축과 모자이크 바닥이 인상적입니다.", category: "궁전/성", tip: "2층 모자이크 홀이 하이라이트. 오디오 가이드를 추천합니다." },
      { name: "기사단 거리", nameEn: "Street of the Knights", description: "유럽에서 가장 잘 보존된 중세 거리로 기사단 숙소(인)가 양쪽에 늘어서 있습니다.", category: "거리/역사" },
      { name: "린도스 아크로폴리스", nameEn: "Lindos Acropolis", description: "해안 절벽 위의 고대 유적과 중세 성이 어우러진 로도스 남부의 하이라이트.", category: "유적지" },
    ],
    dayTrips: [
      { name: "시미 섬", nameEn: "Symi Island", description: "파스텔 색상의 신고전주의 건축이 아름다운 작은 섬.", travelTime: "페리 약 1시간", gradient: "from-pink-400 to-amber-500" },
    ],
    localFood: [
      { name: "피타리디아", description: "수제 파스타에 토마토소스와 치즈를 올린 로도스 전통 요리.", emoji: "🍝" },
      { name: "멜레쿠니", description: "꿀과 참깨로 만든 로도스 전통 웨딩 과자.", emoji: "🍯" },
    ],
    tips: [
      "올드타운은 골목이 미로처럼 되어 있으니 지도 앱을 활용하세요.",
      "린도스는 로도스 타운에서 버스로 약 1시간, 당일치기 필수 코스입니다.",
      "성벽 위를 걷는 투어(화, 토요일)가 있으니 시간을 맞춰보세요.",
    ],
  },
  "greece/other-islands/corfu": {
    heroGradient: "from-emerald-400 to-blue-500",
    description: "이오니아 해의 녹색 보석. 영국·프랑스·베네치아의 지배를 받아 다채로운 건축 유산이 남아있으며, 올드타운은 유네스코 세계유산입니다. 초록빛 올리브 숲과 에메랄드 해변이 인상적.",
    bestTime: "5~10월",
    stayArea: "코르푸 타운 올드타운 / 팔레오카스트리차",
    transport: "시내 도보, 섬 내 버스/렌터카",
    districts: [
      { name: "올드타운", nameEn: "Old Town", description: "베네치아·영국·프랑스 건축이 혼재된 유네스코 세계유산 지구.", highlights: ["리스톤 아케이드", "성 스피리돈 교회", "올드 포트리스"] },
      { name: "팔레오카스트리차", nameEn: "Paleokastritsa", description: "에메랄드빛 만과 동굴이 있는 코르푸 최고의 해변 지역.", highlights: ["수도원", "해변 동굴 보트투어", "스노클링"] },
    ],
    attractions: [
      { name: "코르푸 올드타운", nameEn: "Corfu Old Town", description: "베네치아 시대 골목(칸투니아)이 미로처럼 이어지는 유네스코 세계유산. 리스톤 아케이드에서 카페를 즐기세요.", category: "구시가지", tip: "아침 일찍 거닐면 현지인들의 일상을 엿볼 수 있습니다." },
      { name: "올드 포트리스", nameEn: "Old Fortress", description: "베네치아인들이 건설한 해안 요새로 코르푸 타운과 해안 파노라마 뷰.", category: "요새" },
      { name: "아킬레이온 궁전", nameEn: "Achilleion Palace", description: "오스트리아 엘리자베스 황후(시시)가 지은 신고전주의 궁전.", category: "궁전" },
    ],
    dayTrips: [
      { name: "팍시 섬", nameEn: "Paxos Island", description: "올리브 숲과 해안 동굴이 아름다운 작고 한적한 섬.", travelTime: "페리 약 1시간", gradient: "from-teal-400 to-emerald-600" },
    ],
    localFood: [
      { name: "소프리토", description: "얇게 자른 소고기를 마늘 화이트소스로 조린 코르푸 대표 요리.", emoji: "🥩" },
      { name: "파스티차다", description: "토마토소스에 조린 소고기와 수제 파스타. 코르푸의 선데이 디쉬.", emoji: "🍝" },
      { name: "쿰쿠아트 리큐어", description: "코르푸 특산 금귤로 만든 달콤한 리큐어.", emoji: "🍊" },
    ],
    tips: [
      "리스톤 아케이드 카페에서 진저비어(코르푸 특산 음료)를 맛보세요.",
      "팔레오카스트리차 해변 동굴 보트투어는 €10 정도로 가성비 좋습니다.",
      "코르푸 타운에서 렌터카를 빌려 섬 북쪽 해변도 둘러보세요.",
      "이탈리아 영향이 강해 다른 그리스 섬과 음식 맛이 다릅니다.",
    ],
  },
};

export const greeceAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ATHENS =====
  "greece/athens-mainland/athens/acropolis": {
    heroGradient: "from-amber-500 to-blue-700",
    description: "아테네의 상징이자 서양 문명의 심장. 해발 150m 석회암 언덕 위에 파르테논 신전, 에레크테이온, 프로필라이아 등 기원전 5세기 건축물이 모여 있으며, 유네스코 세계유산으로 매년 300만명이 방문합니다.",
    history: "기원전 5세기 페리클레스 시대에 황금기를 맞아 파르테논 신전 등이 건설되었습니다. 이후 교회, 모스크, 탄약고 등으로 사용되었으며, 1687년 베네치아 포격으로 큰 피해를 입었습니다.",
    visitInfo: {
      hours: "4~10월: 08:00~20:00 / 11~3월: 08:00~17:00",
      admission: "€20 (콤비 티켓 €30, 7개 유적지 5일간)",
      address: "Athens 105 58, Greece",
      website: "https://www.acropolisofathens.gr",
    },
    highlights: [
      "파르테논 신전 - 아테나 여신에게 봉헌된 도리스 양식의 걸작",
      "에레크테이온 - 카리아티드(여인상 기둥)가 유명한 이오니아식 신전",
      "프로필라이아 - 아크로폴리스 입구의 기념비적 관문",
      "디오니소스 극장 - 서양 연극의 탄생지",
    ],
    nearbyAttractions: ["아크로폴리스 박물관", "플라카 지구", "고대 아고라", "아레오파고스 언덕"],
    photoTips: "아레오파고스 언덕에서 아크로폴리스 전체를 담을 수 있습니다. 일출 직후나 야간 조명(외부에서) 시간이 베스트.",
    tips: [
      "콤비 티켓(€30)을 구매하면 고대 아고라, 올림피아 제우스 신전 등 6개 추가 유적지를 무료 입장합니다.",
      "오전 8시 개장 직후가 인파가 가장 적습니다.",
      "대리석 바닥이 매우 미끄러우니 바닥이 고무인 편한 신발을 신으세요.",
      "여름에는 모자, 선크림, 물이 필수입니다. 그늘이 거의 없습니다.",
    ],
  },
  "greece/athens-mainland/athens/acropolis-museum": {
    heroGradient: "from-slate-500 to-blue-600",
    description: "2009년 개관한 최첨단 박물관으로 아크로폴리스 출토 유물 4,000여점을 전시합니다. 유리 바닥 아래 고대 유적이 보이고, 최상층에서는 파르테논 신전이 눈앞에 펼쳐집니다.",
    history: "영국 대영박물관에 보관 중인 엘긴 마블의 반환을 위해 건설된 세계적 수준의 박물관입니다. 베르나르 추미가 설계하여 2009년 개관했습니다.",
    visitInfo: {
      hours: "월 08:00~16:00 / 화~일 08:00~20:00 (금 ~22:00)",
      admission: "€15 (11~3월 €10)",
      address: "Dionysiou Areopagitou 15, Athens 117 42",
      website: "https://www.theacropolismuseum.gr",
    },
    highlights: [
      "파르테논 갤러리 - 실물 크기로 재현된 프리즈와 메토프",
      "카리아티드 원본 5기 (1기는 대영박물관)",
      "고졸기(아르카익) 미소를 띤 코레 석상들",
      "유리 바닥 아래 보이는 고대 아테네 주거지 유적",
    ],
    nearbyAttractions: ["아크로폴리스", "디오니소스 극장", "플라카 지구", "올림피아 제우스 신전"],
    photoTips: "3층 파르테논 갤러리에서 창을 통해 실제 파르테논과 전시물을 한 프레임에 담을 수 있습니다.",
    tips: [
      "금요일 야간 개장(~22:00)에는 조명이 멋지고 한산합니다.",
      "2층 레스토랑에서 아크로폴리스를 바라보며 식사가 가능합니다.",
      "오디오 가이드(€5)를 꼭 빌리세요. 유물 이해도가 크게 달라집니다.",
      "입구에서 큰 가방은 무료 보관됩니다.",
    ],
  },
  "greece/athens-mainland/athens/plaka-district": {
    heroGradient: "from-orange-400 to-rose-500",
    description: "아크로폴리스 기슭에 펼쳐진 아테네에서 가장 오래된 거주 지역. 네오클래식 건물 사이로 타베르나, 기념품 가게, 카페가 늘어선 좁은 골목이 매력적이며, 아나피오티카 마을의 하얀 집들은 키클라데스 섬 같은 분위기입니다.",
    visitInfo: {
      hours: "24시간 (상점은 보통 10:00~22:00)",
      admission: "무료",
      address: "Plaka, Athens 105 56",
    },
    highlights: [
      "아나피오티카 - 키클라데스풍 하얀 집이 모여있는 언덕 마을",
      "아드리아누 거리 - 플라카 메인 쇼핑 스트리트",
      "리시크라테스 기념비 - 기원전 334년 건립된 원형 기념물",
      "전통 타베르나에서 라이브 그리스 음악",
    ],
    nearbyAttractions: ["아크로폴리스", "아크로폴리스 박물관", "로만 아고라", "하드리아누스 도서관"],
    photoTips: "아나피오티카의 하얀 골목에서 아크로폴리스를 배경으로 촬영하면 그리스다운 사진을 얻을 수 있습니다.",
    tips: [
      "관광객용 식당보다 골목 안쪽 현지인이 가는 타베르나가 맛과 가격 모두 좋습니다.",
      "아나피오티카는 표지판이 없으니 구글맵을 참고하세요.",
      "저녁에 라이브 부주키(그리스 전통 악기) 공연이 있는 타베르나를 찾아보세요.",
      "플라카 위쪽 골목은 경사가 급하니 편한 신발을 추천합니다.",
    ],
  },
  "greece/athens-mainland/athens/temple-of-olympian-zeus": {
    heroGradient: "from-amber-400 to-stone-600",
    description: "고대 그리스 최대의 신전으로 건설에 약 700년이 걸렸습니다. 원래 104개의 코린트식 기둥 중 15개가 남아있으며, 하나의 쓰러진 기둥이 그 세월을 말해줍니다.",
    history: "기원전 6세기 참주 페이시스트라토스가 착공했으나 자금 부족으로 중단. 이후 로마 황제 하드리아누스가 서기 131년에 완공했습니다. 중세에 지진과 약탈로 대부분 파괴되었습니다.",
    visitInfo: {
      hours: "08:00~19:00 (동절기 ~17:00)",
      admission: "€8 (아크로폴리스 콤비 티켓에 포함)",
      address: "Vasilissis Olgas, Athens 105 57",
    },
    highlights: [
      "15개의 거대한 코린트식 기둥 (높이 17m)",
      "쓰러진 기둥 - 1852년 폭풍에 무너진 기둥",
      "하드리아누스 개선문 바로 옆 위치",
      "아크로폴리스와 한 프레임에 담기는 포토스팟",
    ],
    nearbyAttractions: ["하드리아누스 개선문", "국립정원", "파나테나이크 스타디움", "아크로폴리스"],
    photoTips: "하드리아누스 개선문 아치를 통해 기둥을 담으면 멋진 프레이밍이 됩니다.",
    tips: [
      "아크로폴리스 콤비 티켓(€30)에 포함되어 있으니 별도 구매 불필요합니다.",
      "넓은 부지이지만 30분이면 충분히 둘러볼 수 있습니다.",
      "울타리 밖 바실리시스 올가스 대로에서도 기둥을 잘 볼 수 있습니다.",
    ],
  },

  // ===== SANTORINI =====
  "greece/cyclades/santorini/oia-sunset": {
    heroGradient: "from-orange-400 to-purple-600",
    description: "세계 3대 일몰로 꼽히는 산토리니 이아 마을의 일몰. 하얀 건물과 파란 돔이 황금빛으로 물들고, 에게해 수평선 아래로 태양이 사라지는 순간 관중들의 박수가 터져 나옵니다.",
    visitInfo: {
      hours: "24시간 (일몰 시간은 계절에 따라 변동)",
      admission: "무료",
      address: "Oia, Santorini 847 02",
    },
    highlights: [
      "이아 성(Castle of Oia)에서의 일몰 뷰 (가장 인기 있는 명당)",
      "파란 돔 교회가 황금빛으로 물드는 순간",
      "일몰 후 마을 야경과 별",
      "아무디 베이로 내려가는 300계단에서의 뷰",
    ],
    nearbyAttractions: ["이아 마을 골목", "아무디 베이", "파란 돔 교회", "해양 박물관"],
    photoTips: "일몰 1~2시간 전에 성 근처에 자리를 잡으세요. 삼각대 사용 시 다른 관광객에게 방해되지 않게 주의.",
    tips: [
      "성수기(7~8월)에는 일몰 2시간 전에 자리를 잡아야 합니다.",
      "이아 성(카스트로) 외에도 이아 마을 어디서든 일몰은 아름답습니다.",
      "일몰 후 레스토랑 예약이 몰리므로 미리 예약하세요.",
      "이아 방문은 피라에서 버스(약 25분)나 택시를 이용합니다.",
    ],
  },
  "greece/cyclades/santorini/fira": {
    heroGradient: "from-white to-blue-500",
    description: "산토리니의 수도로 칼데라 절벽 위에 자리잡은 중심 마을. 올드 포트에서 케이블카를 타고 올라오면 화산섬의 드라마틱한 지형이 한눈에 펼쳐지며, 쇼핑과 나이트라이프도 활발합니다.",
    visitInfo: {
      hours: "24시간 (케이블카: 07:00~22:00)",
      admission: "마을 무료 / 케이블카 €6",
      address: "Fira, Santorini 847 00",
    },
    highlights: [
      "칼데라 전망 레스토랑에서의 식사",
      "케이블카 또는 당나귀 타고 올드 포트 이동",
      "피라~이아 칼데라 트레킹 코스 (약 10km, 3시간)",
      "선사시대 테라 박물관",
    ],
    nearbyAttractions: ["이메로비글리", "선사시대 박물관", "올드 포트", "네아 카메니 화산"],
    photoTips: "칼데라 뷰 카페에서 음료를 시키면 천천히 사진을 찍을 수 있습니다. 일몰 시간도 피라에서 충분히 아름답습니다.",
    tips: [
      "올드 포트에서 당나귀 타기는 동물 복지 문제로 논란이 있으니 케이블카를 추천합니다.",
      "이아보다 숙소 가격이 저렴하면서도 교통 중심지라 편리합니다.",
      "피라~이아 트레킹 시 물과 선크림을 반드시 준비하세요.",
    ],
  },

  // ===== MYKONOS =====
  "greece/cyclades/mykonos/little-venice": {
    heroGradient: "from-cyan-400 to-orange-500",
    description: "18세기 선장들의 집이 바다 바로 위에 지어져 파도가 발코니를 때리는 미코노스의 가장 낭만적인 풍경. 칵테일 바와 레스토랑이 밀집해 있어 일몰 시간에 최고의 분위기를 자아냅니다.",
    visitInfo: {
      hours: "24시간 (바/레스토랑: 보통 11:00~02:00)",
      admission: "무료",
      address: "Little Venice, Mykonos Town 846 00",
    },
    highlights: [
      "바다 위 발코니에서의 칵테일과 일몰",
      "18세기 선장들의 집 건축",
      "바로 옆 카토 밀리 풍차와의 조합",
      "야경과 조명이 반사되는 바다",
    ],
    nearbyAttractions: ["카토 밀리 풍차", "파라포르티아니 교회", "미코노스 타운 골목", "마토야니 거리"],
    photoTips: "풍차 쪽에서 리틀 베니스 방향으로 촬영하면 해질녘에 최고의 사진을 얻을 수 있습니다.",
    tips: [
      "일몰 시간 바는 매우 혼잡하고 음료값이 비싸지만 그만한 가치가 있습니다.",
      "첫 줄 바 좌석은 예약이 안 되므로 일찍 가서 자리를 잡으세요.",
      "바람이 강할 때는 파도가 테라스까지 올라오니 전자기기 주의.",
      "미코노스 타운 골목을 거닐다 보면 자연스럽게 도달합니다.",
    ],
  },

  // ===== METEORA =====
  "greece/athens-mainland/meteora/meteora-monasteries": {
    heroGradient: "from-stone-500 to-sky-600",
    description: "높이 600m 사암 기둥 위에 세워진 수도원군으로 유네스코 세계유산. 14세기부터 정교회 수도승들이 밧줄 사다리와 그물로 자재를 올려 건설했으며, 현재 6개 수도원이 운영 중입니다.",
    history: "11세기부터 은둔자들이 동굴에서 수도 생활을 시작했으며, 14세기 성 아타나시오스가 대 메테오론 수도원을 설립하면서 본격적인 수도원 공동체가 형성되었습니다.",
    visitInfo: {
      hours: "수도원마다 다름, 보통 09:00~17:00 (동절기 ~15:00)",
      admission: "수도원당 €3",
      address: "Meteora, Kalambaka 422 00",
    },
    highlights: [
      "대 메테오론 - 가장 크고 오래된 수도원",
      "바를라암 수도원 - 아름다운 프레스코 벽화",
      "루사누 수도원 - 바위 위의 극적인 위치",
      "성 삼위일체 수도원 - 007 영화 촬영지",
    ],
    nearbyAttractions: ["칼람바카 마을", "카스트라키 마을", "테오페트라 동굴", "일몰 전망대"],
    photoTips: "해질녘에 전망대에서 촬영하면 바위와 수도원이 황금빛으로 물듭니다. 드론 사용은 금지입니다.",
    tips: [
      "6개 수도원 모두 방문하려면 2일이 필요합니다. 하루라면 3~4개가 적당.",
      "각 수도원 휴무일이 다르므로 반드시 사전 확인하세요.",
      "어깨와 무릎을 덮는 복장 필수 (입구에서 천을 빌려줍니다).",
      "렌터카 없이는 칼람바카에서 투어를 이용하는 것이 편리합니다.",
    ],
  },
  "greece/athens-mainland/meteora/great-meteoron": {
    heroGradient: "from-stone-600 to-amber-500",
    description: "메테오라에서 가장 크고 높은 곳에 위치한 수도원. 14세기 성 아타나시오스가 설립했으며, 해발 613m 바위 위에서 테살리아 평원의 360도 파노라마를 감상할 수 있습니다.",
    history: "1340년경 성 아타나시오스가 설립하고, 세르비아 왕 요아사프가 확장했습니다. 16세기 전성기에는 300명 이상의 수도승이 거주했습니다.",
    visitInfo: {
      hours: "하절기 09:00~17:00 / 동절기 09:00~15:00",
      admission: "€3",
      address: "Great Meteoron Monastery, Meteora 422 00",
    },
    highlights: [
      "변용 대성당의 14세기 프레스코 벽화",
      "수도원 박물관의 비잔틴 유물 컬렉션",
      "옛 부엌과 포도주 양조실",
      "바위 꼭대기에서 바라보는 테살리아 평원 파노라마",
    ],
    nearbyAttractions: ["바를라암 수도원", "루사누 수도원", "성 니콜라오스 수도원", "일몰 전망대"],
    photoTips: "반대편 바위 전망대에서 수도원 전체를 담을 수 있습니다.",
    tips: [
      "입구까지 약 300계단을 올라야 하므로 체력을 배분하세요.",
      "화요일 휴무 (동절기는 화·수 휴무).",
      "바를라암 수도원과 가까우므로 함께 방문하세요.",
    ],
  },

  // ===== DELPHI =====
  "greece/athens-mainland/delphi/delphi-archaeological-site": {
    heroGradient: "from-emerald-500 to-stone-700",
    description: "고대 그리스인들이 '세계의 배꼽(옴팔로스)'이라 여겼던 신성한 곳. 아폴론 신전의 신탁(피티아)이 고대 세계를 좌우했으며, 파르나소스 산 비탈에 신전, 극장, 보물창고가 장엄하게 펼쳐져 있습니다.",
    history: "기원전 8세기부터 그리스 전역에서 신탁을 구하러 순례자들이 모여들었습니다. 도시국가들은 감사의 뜻으로 보물창고를 건설했고, 4년마다 피티아 경기가 열렸습니다.",
    visitInfo: {
      hours: "08:00~20:00 (동절기 ~15:00)",
      admission: "유적지+박물관 콤비 €12",
      address: "Delphi 330 54, Greece",
      website: "https://whc.unesco.org/en/list/393",
    },
    highlights: [
      "아폴론 신전 - 6개의 재건된 도리스 기둥",
      "아테네인의 보물창고 - 가장 잘 복원된 건물",
      "고대 극장 - 5,000석 규모, 델피 계곡 전망",
      "스타디움 - 고대 피티아 경기가 열렸던 곳",
    ],
    nearbyAttractions: ["델피 박물관", "아테나 프로나이아 토로스", "카스탈리아 샘", "아라호바 마을"],
    photoTips: "아폴론 신전 아래 계단에서 올려다보면 기둥과 파르나소스 산을 함께 담을 수 있습니다.",
    tips: [
      "유적지는 산비탈이므로 편한 신발과 충분한 물을 준비하세요.",
      "아침 일찍 도착하면 관광버스 단체를 피할 수 있습니다.",
      "박물관을 먼저 보고 유적지를 방문하면 이해가 더 깊어집니다.",
      "토로스(원형 신전)는 유적지 밖에 있으니 별도로 방문하세요.",
    ],
  },

  // ===== CRETE =====
  "greece/crete/heraklion/knossos-palace": {
    heroGradient: "from-amber-500 to-red-700",
    description: "유럽 최초의 문명인 미노아 문명의 중심지로, 기원전 1900년경 건설된 거대 궁전 유적입니다. 미노타우로스 미궁의 전설이 서린 곳으로, 아서 에반스 경이 20세기 초에 발굴·복원했습니다.",
    history: "기원전 7000년부터 인류가 거주했으며, 기원전 1900년경 최초의 궁전이 건설되었습니다. 기원전 1700년 지진으로 파괴 후 재건되었고, 기원전 1450년경 최종 파괴되었습니다.",
    visitInfo: {
      hours: "4~10월: 08:00~20:00 / 11~3월: 08:00~15:00",
      admission: "€15 (고고학 박물관 콤비 €20)",
      address: "Knossos, Heraklion 714 09, Crete",
      website: "https://www.heraklion.gr",
    },
    highlights: [
      "왕좌의 방 - 유럽 최초의 왕좌가 있는 곳",
      "돌고래 프레스코 - 여왕의 메가론 벽화",
      "대계단 - 4층 규모의 인상적 건축",
      "에반스 복원 구역 - 빨강·파랑 기둥이 특징적",
    ],
    nearbyAttractions: ["이라클리오 고고학 박물관", "코울레스 요새", "모로시니 분수", "1866 거리 시장"],
    photoTips: "빨간 기둥이 있는 에반스 복원 구역이 가장 포토제닉합니다.",
    tips: [
      "가이드 투어를 강력히 추천합니다. 폐허만으로는 이해하기 어렵습니다.",
      "오전 일찍 가면 크루즈 관광객을 피할 수 있습니다.",
      "이라클리오 시내에서 2번 버스로 약 20분이면 도착합니다.",
      "고고학 박물관 콤비 티켓(€20)이 훨씬 경제적입니다.",
    ],
  },

  // ===== CHANIA =====
  "greece/crete/chania/venetian-harbour": {
    heroGradient: "from-rose-400 to-amber-500",
    description: "14세기 베네치아인들이 건설한 아름다운 구항구로, 이집트 스타일 등대와 파스텔 색 건물이 그림 같은 풍경을 이룹니다. 하니아 올드타운 산책의 시작이자 끝이 되는 곳.",
    history: "1320년경 베네치아인들이 건설했으며, 오스만 제국 시기를 거쳐 현재에 이릅니다. 등대는 베네치아 시대에 처음 건설되었고, 이집트 스타일로 재건되었습니다.",
    visitInfo: {
      hours: "24시간 (등대 산책로 상시 개방)",
      admission: "무료",
      address: "Venetian Harbour, Chania 731 31, Crete",
    },
    highlights: [
      "이집트 스타일 등대 - 항구 입구의 상징적 랜드마크",
      "야니체리 모스크 - 크레타 최초의 오스만 모스크",
      "베네치아 조선소(네오리아) - 현재 전시 공간으로 활용",
      "항구를 따라 늘어선 레스토랑과 카페",
    ],
    nearbyAttractions: ["하니아 올드타운", "해양 박물관", "하니아 시장(아고라)", "스플란치아 지구"],
    photoTips: "이른 아침이나 일몰 시간에 등대 방향으로 촬영하면 최고의 사진을 얻을 수 있습니다.",
    tips: [
      "등대까지 방파제 위를 걸어서 왕복 약 30분입니다.",
      "항구 최전방 레스토랑은 뷰 값이 포함되어 비싸니, 한 블록 안쪽이 가성비 좋습니다.",
      "저녁 산책 시 야경이 매우 아름답습니다.",
      "항구 주변에서 보트 투어도 출발합니다.",
    ],
  },

  // ===== RHODES =====
  "greece/other-islands/rhodes/palace-of-the-grand-master": {
    heroGradient: "from-amber-400 to-stone-700",
    description: "성 요한 기사단의 본거지였던 웅장한 중세 궁전. 14세기에 건설되었으며, 이탈리아 지배기에 무솔리니의 별장으로 복원되었습니다. 150개 이상의 방과 헬레니즘~로마 시대 모자이크 바닥이 볼거리.",
    history: "14세기 성 요한 기사단이 건설했으며, 1856년 탄약 폭발로 파괴된 후 1930년대 이탈리아가 복원했습니다. 무솔리니와 이탈리아 국왕의 별장으로 사용될 예정이었습니다.",
    visitInfo: {
      hours: "화~일 08:00~20:00 (동절기 ~15:00), 월 휴무",
      admission: "€10",
      address: "Ippoton, Rhodes Old Town 851 00",
    },
    highlights: [
      "모자이크 홀 - 코스 섬에서 가져온 헬레니즘 시대 모자이크",
      "기사단 홀 - 거대한 벽난로와 무기 전시",
      "중세 로도스 역사 전시실",
      "탑에서 바라보는 올드타운과 항구 전경",
    ],
    nearbyAttractions: ["기사단 거리", "올드타운 성벽", "술레이만 모스크", "고고학 박물관"],
    photoTips: "입구 양쪽 원형 탑을 정면에서 촬영하면 중세 분위기가 잘 나옵니다.",
    tips: [
      "2층 모자이크 홀이 가장 인상적이니 반드시 올라가세요.",
      "오디오 가이드를 빌리면 기사단 역사를 더 깊이 이해할 수 있습니다.",
      "월요일 휴무이므로 방문 계획 시 주의하세요.",
      "기사단 거리를 따라 올라가면 자연스럽게 궁전에 도착합니다.",
    ],
  },

  // ===== CORFU =====
  "greece/other-islands/corfu/corfu-old-town": {
    heroGradient: "from-emerald-400 to-amber-500",
    description: "베네치아·영국·프랑스의 지배를 받으며 독특한 다문화 건축 유산을 간직한 유네스코 세계유산 구시가지. 좁은 칸투니아(골목)를 거닐며 프랑스풍 아케이드, 베네치아 건축, 영국식 궁전을 만날 수 있습니다.",
    history: "비잔틴, 베네치아(1386~1797), 프랑스, 영국을 거쳐 1864년 그리스에 합류했습니다. 베네치아 시대의 요새와 건축이 가장 많이 남아있습니다.",
    visitInfo: {
      hours: "24시간 (박물관/요새: 보통 08:00~20:00)",
      admission: "구시가지 무료 / 올드 포트리스 €6",
      address: "Old Town, Corfu 491 00",
    },
    highlights: [
      "리스톤 아케이드 - 파리 리볼리 거리를 모방한 우아한 아케이드",
      "성 스피리돈 교회 - 코르푸 수호성인의 은관이 안치된 곳",
      "올드 포트리스 - 베네치아 시대 해안 요새",
      "칸투니아(좁은 골목) 산책과 로컬 샵 탐방",
    ],
    nearbyAttractions: ["올드 포트리스", "뉴 포트리스", "아시아 미술 박물관", "에스플라나데 광장"],
    photoTips: "칸투니아 골목에서 빨래가 널린 장면을 담으면 지중해 감성의 사진을 얻을 수 있습니다.",
    tips: [
      "리스톤 아케이드 카페에서 코르푸 특산 진저비어를 맛보세요.",
      "골목이 미로처럼 되어 있으니 일부러 길을 잃어보는 것도 좋습니다.",
      "성 스피리돈 교회는 1년에 4번 성인 행렬이 열립니다.",
      "올드 포트리스 꼭대기에서 코르푸 타운 전체를 조망할 수 있습니다.",
    ],
  },
};
