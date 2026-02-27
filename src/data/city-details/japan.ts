import type { CityDetail, AttractionDetail } from "../city-details";

export const japanCityDetails: Record<string, CityDetail> = {
  // ===== TOKYO-KANTO =====
  "japan/tokyo-kanto/tokyo": {
    heroGradient: "from-red-500 to-pink-800",
    description: "일본의 수도이자 세계 최대 도시권. 첨단 기술과 전통 문화가 공존하며, 시부야 스크램블 교차로, 센소지, 도쿄 스카이트리 등 상징적 명소가 가득합니다.",
    bestTime: "3~5월 (벚꽃) / 10~11월 (단풍)",
    stayArea: "신주쿠 / 시부야 / 아사쿠사",
    transport: "JR야마노테선, 도쿄메트로, 도에이 지하철 (Suica/Pasmo 카드)",
    districts: [
      { name: "아사쿠사", nameEn: "Asakusa", description: "센소지를 중심으로 한 도쿄의 전통 하마치 분위기가 남아있는 지역.", highlights: ["센소지", "나카미세 거리", "스미다강 크루즈"] },
      { name: "시부야·하라주쿠", nameEn: "Shibuya-Harajuku", description: "젊은 문화와 패션의 중심지로 스크램블 교차로가 유명.", highlights: ["시부야 스크램블 교차로", "하라주쿠 다케시타 거리", "메이지 신궁"] },
      { name: "신주쿠", nameEn: "Shinjuku", description: "세계 최대 터미널역을 중심으로 한 번화가와 가부키초.", highlights: ["도쿄 도청 전망대", "가부키초", "신주쿠 교엔"] },
    ],
    attractions: [
      { name: "센소지", nameEn: "Senso-ji Temple", description: "628년 창건된 도쿄에서 가장 오래된 사원으로 가미나리몬이 상징.", category: "사원", tip: "이른 아침(6시)에 방문하면 인파 없이 고즈넉한 분위기를 즐길 수 있습니다." },
      { name: "시부야 스크램블 교차로", nameEn: "Shibuya Crossing", description: "한 번에 최대 3,000명이 건너는 세계에서 가장 유명한 교차로.", category: "랜드마크", tip: "시부야 스카이 전망대에서 위에서 내려다보는 뷰가 압권." },
      { name: "메이지 신궁", nameEn: "Meiji Shrine", description: "메이지 천황을 모신 신사로 도심 속 거대한 숲에 둘러싸여 있습니다.", category: "신사", tip: "하라주쿠역에서 도보 1분, 무료 입장입니다." },
      { name: "도쿄 스카이트리", nameEn: "Tokyo Skytree", description: "634m 높이의 세계에서 가장 높은 전파탑으로 전망대에서 도쿄 전경 조망.", category: "전망대", tip: "맑은 날에는 후지산까지 보입니다. 온라인 예약 시 할인." },
      { name: "츠키지 장외시장", nameEn: "Tsukiji Outer Market", description: "신선한 해산물과 길거리 음식의 천국으로 이른 아침이 활기찹니다.", category: "시장", tip: "도요스 시장(경매)과 별개이니 혼동하지 마세요." },
      { name: "신주쿠 교엔", nameEn: "Shinjuku Gyoen", description: "일본식·영국식·프랑스식 정원을 갖춘 도심 속 오아시스.", category: "공원" },
    ],
    dayTrips: [
      { name: "가마쿠라", nameEn: "Kamakura", description: "대불과 해안 사원이 있는 옛 무사 정권의 수도.", travelTime: "JR 요코스카선 약 1시간", gradient: "from-green-400 to-teal-700" },
      { name: "닛코", nameEn: "Nikko", description: "도쿠가와 이에야스를 모신 화려한 도쇼구가 있는 산중 도시.", travelTime: "도부닛코선 약 2시간", gradient: "from-orange-400 to-red-700" },
    ],
    localFood: [
      { name: "에도마에 스시", description: "츠키지·도요스 인근의 신선한 에도마에 스시를 꼭 맛보세요.", emoji: "🍣" },
      { name: "쇼유 라멘", description: "도쿄 특유의 간장(쇼유) 베이스 라멘이 대표적.", emoji: "🍜" },
      { name: "몬자야키", description: "도쿄 서민 음식, 츠키시마 거리에서 즐기는 철판 요리.", emoji: "🥘" },
    ],
    tips: [
      "Suica/Pasmo 카드 하나면 전철·버스·편의점 결제가 모두 가능합니다.",
      "도쿄 도청 전망대는 무료로 도쿄 야경을 감상할 수 있는 명소입니다.",
      "벚꽃 시즌(3월 말~4월 초)에는 우에노 공원, 메구로강이 최고의 명소.",
      "식당에서 팁 문화가 없으며 오히려 실례가 될 수 있습니다.",
    ],
  },
  "japan/tokyo-kanto/kamakura": {
    heroGradient: "from-green-400 to-teal-700",
    description: "12세기 가마쿠라 막부의 수도였던 역사 도시. 대불, 해안 사원, 하이킹 코스가 어우러져 도쿄에서 당일치기로 인기 있는 여행지입니다.",
    bestTime: "3~5월 (벚꽃·수국) / 10~11월 (단풍)",
    stayArea: "가마쿠라역 주변",
    transport: "에노덴 전철, 도보",
    districts: [
      { name: "가마쿠라역 주변", nameEn: "Kamakura Station Area", description: "고마치도리 쇼핑 거리와 쓰루가오카 하치만궁이 있는 중심지.", highlights: ["고마치도리", "쓰루가오카 하치만궁"] },
    ],
    attractions: [
      { name: "가마쿠라 대불", nameEn: "Great Buddha", description: "고토쿠인의 높이 13.35m 청동 아미타불상으로 1252년 주조.", category: "사원", tip: "¥20 추가로 대불 내부에 들어갈 수 있습니다." },
      { name: "쓰루가오카 하치만궁", nameEn: "Tsurugaoka Hachimangu", description: "가마쿠라 막부의 수호 신사로 웅장한 본전과 연못 정원.", category: "신사" },
      { name: "하세데라", nameEn: "Hasedera Temple", description: "거대한 목조 관음상과 바다 전망이 아름다운 사원.", category: "사원" },
    ],
    dayTrips: [
      { name: "에노시마", nameEn: "Enoshima", description: "에노덴 전철로 연결되는 작은 섬으로 해산물과 전망이 매력.", travelTime: "에노덴 약 25분", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "시라스동", description: "가마쿠라 명물 생멸치 덮밥, 에노시마에서도 인기.", emoji: "🐟" },
      { name: "가마쿠라 맥주", description: "지역 크래프트 맥주로 산책 후 한 잔에 딱.", emoji: "🍺" },
    ],
    tips: [
      "에노덴 1일 패스(¥800)로 가마쿠라~에노시마 구간을 자유롭게 이동하세요.",
      "주말에는 매우 혼잡하므로 평일 방문을 추천합니다.",
      "다이부쓰 하이킹 코스(대불~겐초지)가 인기입니다.",
    ],
  },
  "japan/tokyo-kanto/hakone": {
    heroGradient: "from-purple-400 to-indigo-700",
    description: "후지산 조망과 온천으로 유명한 도쿄 근교 최고의 휴양지. 하코네 프리패스로 로프웨이, 해적선, 등산철도를 모두 이용할 수 있습니다.",
    bestTime: "10~11월 (단풍) / 연중 온천",
    stayArea: "하코네유모토 / 고라 온천",
    transport: "하코네 프리패스 (오다큐 전철에서 구매)",
    districts: [
      { name: "하코네유모토", nameEn: "Hakone-Yumoto", description: "하코네의 관문으로 온천 료칸과 상점가가 밀집.", highlights: ["온천 거리", "하코네유모토역"] },
      { name: "고라·오와쿠다니", nameEn: "Gora-Owakudani", description: "로프웨이로 연결되는 화산 지대와 온천 지역.", highlights: ["오와쿠다니", "고라 공원", "로프웨이"] },
    ],
    attractions: [
      { name: "하코네 야외미술관", nameEn: "Hakone Open Air Museum", description: "자연과 조각이 어우러진 일본 최초의 야외미술관. 피카소관도 소장.", category: "미술관", tip: "비 오는 날에도 즐길 수 있는 실내 전시관이 있습니다." },
      { name: "오와쿠다니", nameEn: "Owakudani", description: "활화산 지대로 유황 연기가 피어오르는 장관, 검은 달걀이 명물.", category: "자연" },
      { name: "아시노코 해적선", nameEn: "Lake Ashi Pirate Ship", description: "아시노코 호수를 유람하며 후지산 전경을 감상하는 크루즈.", category: "크루즈" },
    ],
    dayTrips: [
      { name: "고텐바 아울렛", nameEn: "Gotemba Premium Outlets", description: "후지산을 배경으로 쇼핑을 즐기는 대형 아울렛.", travelTime: "버스 약 1시간", gradient: "from-blue-400 to-sky-700" },
    ],
    localFood: [
      { name: "검은 달걀", description: "오와쿠다니 명물, 유황 온천에 삶아 수명이 7년 늘어난다는 전설.", emoji: "🥚" },
      { name: "하코네 두부요리", description: "맑은 물로 만든 부드러운 두부 코스 요리.", emoji: "🍲" },
    ],
    tips: [
      "하코네 프리패스(2일 ¥6,100)는 거의 모든 교통수단을 포함해 매우 경제적.",
      "오와쿠다니는 화산 가스로 인해 폐쇄될 수 있으니 사전 확인 필수.",
      "후지산 조망은 오전이 가장 맑으니 일찍 출발하세요.",
    ],
  },
  "japan/tokyo-kanto/nikko": {
    heroGradient: "from-orange-400 to-red-700",
    description: "도쿠가와 이에야스를 모신 도쇼구 신사가 있는 UNESCO 세계유산 도시. 화려한 건축과 자연경관이 어우러진 일본 최고의 문화유산 명소입니다.",
    bestTime: "10~11월 (단풍) / 5~6월 (신록)",
    stayArea: "닛코역 주변 / 주젠지코 호수",
    transport: "도부닛코선, 닛코 버스 프리패스",
    districts: [
      { name: "신사·사원 지구", nameEn: "Shrine-Temple Area", description: "도쇼구, 린노지, 후타라산 신사가 모여있는 세계유산 핵심 지역.", highlights: ["도쇼구", "린노지", "후타라산 신사"] },
    ],
    attractions: [
      { name: "닛코 도쇼구", nameEn: "Toshogu Shrine", description: "도쿠가와 이에야스를 모신 화려한 신사로 '세 원숭이' 조각이 유명.", category: "신사", tip: "네무리네코(잠자는 고양이) 조각도 놓치지 마세요." },
      { name: "게곤 폭포", nameEn: "Kegon Falls", description: "97m 높이에서 떨어지는 일본 3대 폭포 중 하나.", category: "자연" },
      { name: "주젠지코 호수", nameEn: "Lake Chuzenji", description: "해발 1,269m에 위치한 아름다운 고산 호수.", category: "자연" },
    ],
    dayTrips: [
      { name: "기누가와 온천", nameEn: "Kinugawa Onsen", description: "계곡을 따라 온천 료칸이 늘어선 온천 마을.", travelTime: "전철 약 30분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "유바", description: "닛코 명물 두부 껍질 요리, 유바소바·유바만주 등 다양한 변주.", emoji: "🫘" },
      { name: "닛코 카스텔라", description: "포르투갈에서 전해진 전통 카스텔라 과자.", emoji: "🍰" },
    ],
    tips: [
      "닛코 세계유산 프리패스로 교통비를 절약하세요.",
      "도쇼구 관람은 2시간 이상 여유를 두세요.",
      "가을 단풍 시즌(10월 중순~11월 초)에는 이로하자카 도로가 절경입니다.",
    ],
  },

  // ===== KANSAI =====
  "japan/kansai/osaka": {
    heroGradient: "from-orange-500 to-yellow-700",
    description: "일본의 부엌이라 불리는 미식의 도시. 도톤보리의 화려한 네온과 오사카성, 그리고 친근한 오사카 사람들의 유머가 매력적인 간사이 최대 도시입니다.",
    bestTime: "3~5월 (벚꽃) / 10~11월 (단풍)",
    stayArea: "난바 / 신사이바시 / 우메다",
    transport: "오사카 메트로, JR, 난카이선 (ICOCA 카드)",
    districts: [
      { name: "도톤보리·난바", nameEn: "Dotonbori-Namba", description: "오사카의 상징적인 번화가로 글리코 간판과 먹거리가 가득.", highlights: ["글리코 간판", "구이다오레 거리", "호젠지 골목"] },
      { name: "신사이바시", nameEn: "Shinsaibashi", description: "쇼핑과 젊은 문화의 중심지.", highlights: ["신사이바시 상점가", "아메리카무라", "오렌지 스트리트"] },
      { name: "오사카성 주변", nameEn: "Osaka Castle Area", description: "오사카성과 넓은 공원이 있는 역사 지구.", highlights: ["오사카성", "오사카성 공원", "조폐국 벚꽃길"] },
    ],
    attractions: [
      { name: "도톤보리", nameEn: "Dotonbori", description: "글리코 간판과 화려한 네온사인이 빛나는 오사카의 상징적 번화가.", category: "번화가", tip: "에비스바시에서 글리코 간판 사진을 찍고 주변 골목 먹거리를 탐방하세요." },
      { name: "오사카성", nameEn: "Osaka Castle", description: "도요토미 히데요시가 축성한 일본의 대표적 성곽으로 천수각에서 시내 조망.", category: "성곽", tip: "벚꽃 시즌(4월 초)에 오사카성 공원이 최고로 아름답습니다." },
      { name: "구로몬 시장", nameEn: "Kuromon Market", description: "오사카의 부엌이라 불리는 재래시장으로 신선한 해산물 먹거리.", category: "시장" },
      { name: "신세카이", nameEn: "Shinsekai", description: "레트로 분위기의 서민 번화가와 츠텐카쿠 전망탑.", category: "번화가" },
    ],
    dayTrips: [
      { name: "교토", nameEn: "Kyoto", description: "천년 고도의 수천 개 사원과 신사가 기다리는 전통문화의 수도.", travelTime: "JR 신쾌속 약 30분", gradient: "from-red-400 to-rose-700" },
      { name: "나라", nameEn: "Nara", description: "사슴 공원과 도다이지의 대불로 유명한 고대 수도.", travelTime: "긴테쓰 약 35분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "타코야키", description: "오사카의 소울푸드, 바삭하고 쫄깃한 문어 볼.", emoji: "🐙" },
      { name: "오코노미야키", description: "오사카식 철판 부침개, 소스와 마요네즈가 포인트.", emoji: "🥞" },
      { name: "쿠시카츠", description: "꼬치 튀김 오사카 서민 음식, 소스 이중 찍기 금지!", emoji: "🍢" },
    ],
    tips: [
      "오사카 주유패스(1일 ¥2,800)로 주요 관광지 무료 입장 + 교통 무제한.",
      "도톤보리는 저녁에 네온이 켜진 후가 가장 화려합니다.",
      "간사이 공항에서 난바까지 난카이 라피트 약 34분.",
      "쿠시카츠 집에서 소스 2번 찍기는 금기사항입니다!",
    ],
  },
  "japan/kansai/kyoto": {
    heroGradient: "from-red-400 to-rose-700",
    description: "794년부터 천년 넘게 일본의 수도였던 전통문화의 중심지. 2,000개 이상의 사원과 신사, 게이샤 문화, 전통 정원이 살아 숨 쉬는 일본의 영혼입니다.",
    bestTime: "3~4월 (벚꽃) / 11월 (단풍)",
    stayArea: "기온 / 교토역 주변 / 가와라마치",
    transport: "시버스, 지하철, 자전거 (버스 1일 패스 ¥700)",
    districts: [
      { name: "기온·히가시야마", nameEn: "Gion-Higashiyama", description: "게이샤(마이코)를 만날 수 있는 전통 거리와 사원이 밀집한 지역.", highlights: ["기온 하나미코지", "야사카 신사", "기요미즈데라"] },
      { name: "아라시야마", nameEn: "Arashiyama", description: "대나무숲과 도게쓰교가 아름다운 서쪽 관광 명소.", highlights: ["대나무숲", "도게쓰교", "텐류지"] },
      { name: "후시미", nameEn: "Fushimi", description: "수천 개의 붉은 도리이가 이어지는 후시미이나리가 있는 남쪽 지역.", highlights: ["후시미이나리 신사", "후시미 사케 거리"] },
    ],
    attractions: [
      { name: "후시미이나리 신사", nameEn: "Fushimi Inari Shrine", description: "약 10,000개의 주홍색 도리이가 산 정상까지 이어지는 압도적 신사.", category: "신사", tip: "새벽이나 해질녘에 방문하면 사진 명소를 독차지할 수 있습니다." },
      { name: "킨카쿠지", nameEn: "Kinkaku-ji", description: "금박으로 덮인 누각이 연못에 비치는 교토의 상징적 사원.", category: "사원", tip: "오전 일찍 방문하면 역광 없이 금각 반영 사진을 찍을 수 있습니다." },
      { name: "아라시야마 대나무숲", nameEn: "Arashiyama Bamboo Grove", description: "하늘을 가리는 대나무가 만드는 초록빛 터널로 교토의 인기 명소.", category: "자연", tip: "이른 아침(7시 전)에 방문해야 사람 없는 사진을 찍을 수 있습니다." },
      { name: "기요미즈데라", nameEn: "Kiyomizu-dera", description: "139개 기둥이 지탱하는 무대에서 교토 시내를 조망하는 UNESCO 유산.", category: "사원", tip: "야간 특별관람 시즌(봄·가을)의 라이트업이 환상적입니다." },
      { name: "니조성", nameEn: "Nijo Castle", description: "도쿠가와 막부의 교토 거점으로 '울음새 복도'와 화려한 장벽화가 유명.", category: "성곽" },
      { name: "기온 거리", nameEn: "Gion District", description: "전통 목조 마치야가 늘어선 게이샤·마이코의 거리.", category: "거리" },
    ],
    dayTrips: [
      { name: "나라", nameEn: "Nara", description: "도다이지 대불과 자유롭게 돌아다니는 사슴이 매력적인 고대 수도.", travelTime: "긴테쓰 약 45분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "유도후", description: "교토 전통 두부 요리, 난젠지 근처에서 맛볼 수 있습니다.", emoji: "🍲" },
      { name: "말차 디저트", description: "말차 파르페, 말차 떡 등 교토의 녹차 문화.", emoji: "🍵" },
      { name: "가이세키 요리", description: "교토 전통 코스 요리로 계절감이 돋보이는 미식의 정수.", emoji: "🍱" },
    ],
    tips: [
      "벚꽃 시즌에는 숙소를 3개월 전에 예약해야 합니다.",
      "시버스 1일 패스(¥700)로 주요 관광지를 효율적으로 이동하세요.",
      "기온에서 마이코를 만나도 길을 막지 마세요.",
      "자전거 렌탈(¥1,000/일)이 교토를 가장 효율적으로 돌아다니는 방법입니다.",
    ],
  },
  "japan/kansai/nara": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "710년 일본 최초의 본격적 수도가 세워진 고대 도시. 나라공원의 1,200마리 사슴과 세계 최대 목조건축 도다이지가 상징입니다.",
    bestTime: "3~5월 (벚꽃) / 10~11월 (단풍)",
    stayArea: "긴테쓰나라역 주변",
    transport: "도보, 나라 순환 버스",
    districts: [
      { name: "나라공원 지구", nameEn: "Nara Park Area", description: "사슴이 자유롭게 돌아다니는 광대한 공원과 주요 사원·신사가 밀집.", highlights: ["도다이지", "가스가타이샤", "나라공원 사슴"] },
    ],
    attractions: [
      { name: "도다이지", nameEn: "Todai-ji Temple", description: "세계 최대 목조 건축물에 안치된 높이 15m의 비로자나 대불.", category: "사원", tip: "대불전 기둥의 구멍을 통과하면 복이 온다는 전설이 있습니다." },
      { name: "가스가타이샤", nameEn: "Kasuga Taisha", description: "3,000개의 석등과 청동 등롱이 줄지어 있는 나라의 수호 신사.", category: "신사" },
      { name: "나라공원 사슴", nameEn: "Nara Park Deer", description: "국가 천연기념물인 사슴 1,200마리가 자유롭게 돌아다니는 공원.", category: "자연" },
    ],
    dayTrips: [
      { name: "호류지", nameEn: "Horyu-ji", description: "세계에서 가장 오래된 목조 건축물로 UNESCO 세계유산.", travelTime: "JR 약 15분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "가키노하 스시", description: "감잎으로 감싼 나라 전통 압착 스시.", emoji: "🍣" },
      { name: "사슴 센베이", description: "사슴에게 주는 쌀 과자, ¥200에 공원 매점에서 구입.", emoji: "🦌" },
    ],
    tips: [
      "사슴에게 먹이를 줄 때 빈손을 보여주면 고개를 숙여 인사합니다.",
      "교토·오사카에서 당일치기가 가능하지만 1박하면 조용한 저녁 산책이 매력적.",
      "나라공원은 무료이며, 도다이지 입장료는 ¥600입니다.",
    ],
  },
  "japan/kansai/kobe": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "이국적인 항구 도시로 고베 소고기, 야경, 기타노 이진칸 거리의 서양식 저택이 매력적. 오사카에서 전철 20분 거리입니다.",
    bestTime: "3~5월 / 10~12월",
    stayArea: "산노미야역 주변",
    transport: "시영지하철, 포트라이너, 시버스",
    districts: [
      { name: "기타노", nameEn: "Kitano", description: "메이지 시대 외국인 저택이 늘어선 이국적 거리.", highlights: ["이진칸 거리", "풍향계의 집", "우로코의 집"] },
      { name: "하버랜드", nameEn: "Harborland", description: "고베 항구의 워터프론트 상업지구로 야경이 아름다운 곳.", highlights: ["고베 포트타워", "메리켄파크", "모자이크 몰"] },
    ],
    attractions: [
      { name: "기타노 이진칸", nameEn: "Kitano Ijinkan", description: "메이지 시대 외국인 거류지의 서양식 저택이 보존된 이국적 거리.", category: "거리" },
      { name: "고베 포트타워", nameEn: "Kobe Port Tower", description: "고베항의 상징으로 야간 조명이 아름다운 전망탑.", category: "전망대" },
      { name: "롯코산", nameEn: "Mount Rokko", description: "고베 시내와 오사카만의 야경을 한눈에 볼 수 있는 산.", category: "자연" },
    ],
    dayTrips: [
      { name: "히메지성", nameEn: "Himeji Castle", description: "일본에서 가장 아름다운 성으로 백로성이라 불리는 UNESCO 세계유산.", travelTime: "JR 신쾌속 약 40분", gradient: "from-slate-300 to-gray-600" },
    ],
    localFood: [
      { name: "고베 소고기", description: "세계적으로 유명한 와규의 최고봉, 입에서 녹는 마블링.", emoji: "🥩" },
      { name: "소바메시", description: "볶음밥과 야키소바를 합친 고베 서민 음식.", emoji: "🍳" },
    ],
    tips: [
      "고베 소고기는 스테이크랜드 등 철판야키 레스토랑에서 합리적으로 맛볼 수 있습니다.",
      "롯코산 야경은 '1,000만 달러의 야경'이라 불릴 정도로 유명합니다.",
      "오사카에서 JR 신쾌속으로 20분이면 도착, 당일치기 최적.",
    ],
  },

  // ===== CHUBU =====
  "japan/chubu/nagoya": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "일본 3대 도시 중 하나로 나고야성과 독자적 음식 문화 '나고야 메시'가 유명. 도쿄와 오사카 사이의 전략적 거점 도시입니다.",
    bestTime: "3~5월 / 10~11월",
    stayArea: "나고야역 / 사카에 주변",
    transport: "나고야 시영지하철, JR, 메이테쓰",
    districts: [
      { name: "사카에", nameEn: "Sakae", description: "나고야 최대 번화가로 오아시스21이 랜드마크.", highlights: ["오아시스21", "나고야 TV타워", "히사야오도리 공원"] },
      { name: "나고야성 주변", nameEn: "Nagoya Castle Area", description: "나고야성과 혼마루어전이 있는 역사 지구.", highlights: ["나고야성", "혼마루어전", "메이조공원"] },
    ],
    attractions: [
      { name: "나고야성", nameEn: "Nagoya Castle", description: "도쿠가와 이에야스가 축성한 금빛 샤치호코 장식의 대성곽.", category: "성곽", tip: "복원된 혼마루어전의 화려한 장벽화는 꼭 감상하세요." },
      { name: "아쓰타 신궁", nameEn: "Atsuta Shrine", description: "삼종신기 중 하나인 구사나기노쓰루기를 모신 일본 3대 신궁.", category: "신사" },
      { name: "오아시스21", nameEn: "Oasis 21", description: "유리 지붕의 미래적 건축물로 사카에의 랜드마크.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "다카야마", nameEn: "Takayama", description: "에도 시대 거리가 보존된 히다 지방의 소교토.", travelTime: "JR 와이드뷰 히다 약 2.5시간", gradient: "from-amber-400 to-brown-700" },
    ],
    localFood: [
      { name: "히츠마부시", description: "나고야 명물 장어덮밥을 세 가지 방법으로 즐기는 요리.", emoji: "🐟" },
      { name: "미소카츠", description: "달콤한 핫초미소 소스를 뿌린 돈카츠.", emoji: "🍖" },
      { name: "테바사키", description: "바삭하고 매콤달콤한 나고야식 닭날개 튀김.", emoji: "🍗" },
    ],
    tips: [
      "나고야 메시(나고야 음식)는 독특한 맛이 많으니 꼭 여러 종류를 시도하세요.",
      "도쿄~나고야 신칸센 약 1시간 40분, 오사카~나고야 약 50분.",
      "나고야역 지하상가 '메이치카'에서 쇼핑과 식사를 한번에 해결 가능.",
    ],
  },
  "japan/chubu/takayama": {
    heroGradient: "from-amber-400 to-brown-700",
    description: "에도 시대 거리가 완벽하게 보존된 '히다의 소교토'. 전통 목조 건축, 아침 시장, 히다 소고기, 그리고 일본 알프스로의 관문입니다.",
    bestTime: "4월 (봄 축제) / 10월 (가을 축제) / 1~2월 (눈 풍경)",
    stayArea: "산마치 거리 주변 / 다카야마역 근처",
    transport: "도보 (구시가지), 노히 버스 (시라카와고행)",
    districts: [
      { name: "산마치 거리", nameEn: "Sanmachi Suji", description: "에도 시대 목조 건물이 보존된 다카야마의 핵심 관광 거리.", highlights: ["전통 사케 양조장", "미타라시당고", "소목공예품 가게"] },
    ],
    attractions: [
      { name: "다카야마 올드타운", nameEn: "Takayama Old Town", description: "에도 시대의 목조 가옥, 사케 양조장, 전통 공예품 가게가 늘어선 산마치 거리.", category: "거리", tip: "양조장 앞에 삼나무 공(스기다마)이 걸려 있으면 햇술이 나온 신호입니다." },
      { name: "다카야마 아침시장", nameEn: "Takayama Morning Market", description: "미야가와 강변에 열리는 전통 아침 시장으로 신선한 농산물과 공예품.", category: "시장" },
      { name: "히다민속촌", nameEn: "Hida Folk Village", description: "갓쇼즈쿠리(합장조) 민가를 이전·복원한 야외박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "시라카와고", nameEn: "Shirakawa-go", description: "UNESCO 세계유산 갓쇼즈쿠리 합장마을, 겨울 라이트업이 환상적.", travelTime: "노히 버스 약 50분", gradient: "from-sky-300 to-blue-600" },
    ],
    localFood: [
      { name: "히다 소고기", description: "고베 소고기와 쌍벽을 이루는 일본 최고급 와규.", emoji: "🥩" },
      { name: "호바미소", description: "호박잎 위에 미소·버섯·채소를 올려 구운 향토 요리.", emoji: "🍃" },
      { name: "미타라시 당고", description: "간장 양념의 구운 떡 꼬치, 산마치 거리 명물 간식.", emoji: "🍡" },
    ],
    tips: [
      "다카야마 축제(4월·10월)는 일본 3대 축제 중 하나, 이 시기 숙소 예약 필수.",
      "시라카와고 겨울 라이트업(1~2월)은 사전 예약제입니다.",
      "사케 양조장 무료 시음이 가능한 곳이 산마치 거리에 여러 곳 있습니다.",
    ],
  },
  "japan/chubu/kanazawa": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "가가백만석의 성하마을로 일본 3대 정원 겐로쿠엔, 게이샤 거리, 현대미술관이 어우러진 문화 도시. 에도 시대의 풍취가 남아있습니다.",
    bestTime: "3~5월 (벚꽃) / 11~12월 (유키즈리 설치)",
    stayArea: "가나자와역 / 가타마치 주변",
    transport: "가나자와 루프버스, 도보",
    districts: [
      { name: "히가시차야 거리", nameEn: "Higashi Chaya District", description: "에도 시대 게이샤 마을의 격자 목조 건물이 보존된 거리.", highlights: ["게이샤 찻집", "금박 소프트크림", "시마 찻집"] },
      { name: "겐로쿠엔 주변", nameEn: "Kenroku-en Area", description: "겐로쿠엔 정원과 가나자와성이 인접한 중심 관광 지구.", highlights: ["겐로쿠엔", "가나자와성 공원", "21세기 미술관"] },
    ],
    attractions: [
      { name: "겐로쿠엔", nameEn: "Kenroku-en Garden", description: "일본 3대 정원 중 하나로 사계절마다 다른 아름다움을 보여주는 회유식 정원.", category: "정원", tip: "겨울 유키즈리(나무 눈대비 밧줄)가 설치된 풍경이 가장 상징적입니다." },
      { name: "21세기 미술관", nameEn: "21st Century Museum", description: "레안드로 에를리치의 '수영장' 작품으로 유명한 현대미술관.", category: "미술관", tip: "무료 구역만으로도 충분히 즐길 수 있습니다." },
      { name: "히가시차야 거리", nameEn: "Higashi Chaya District", description: "에도 시대 게이샤 문화가 남아있는 전통 찻집 거리.", category: "거리" },
    ],
    dayTrips: [
      { name: "시라카와고", nameEn: "Shirakawa-go", description: "합장조 마을 UNESCO 세계유산, 다카야마와 함께 방문 가능.", travelTime: "노히 버스 약 1시간 15분", gradient: "from-sky-300 to-blue-600" },
    ],
    localFood: [
      { name: "가이센동", description: "동해 신선 해산물이 가득 올라간 해물 덮밥.", emoji: "🍣" },
      { name: "지부니", description: "오리고기와 채소를 조린 가나자와 전통 향토 요리.", emoji: "🍲" },
      { name: "금박 소프트크림", description: "가나자와 금박을 올린 인스타 감성 아이스크림.", emoji: "🍦" },
    ],
    tips: [
      "오미초 시장에서 해산물 아침식사를 즐겨보세요.",
      "가나자와는 비가 자주 내리므로 우산을 꼭 챙기세요.",
      "도쿄에서 호쿠리쿠 신칸센으로 약 2.5시간, JR패스 이용 가능.",
    ],
  },

  // ===== HOKKAIDO =====
  "japan/hokkaido/sapporo": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "홋카이도의 수도이자 일본 5대 도시. 삿포로 눈축제, 신선한 해산물, 맥주, 라멘이 유명하며 여름에도 선선해 피서지로 인기입니다.",
    bestTime: "2월 (눈축제) / 7~8월 (피서·라벤더)",
    stayArea: "삿포로역 / 스스키노 주변",
    transport: "삿포로 시영지하철, 시영전차, JR",
    districts: [
      { name: "오도리 공원", nameEn: "Odori Park Area", description: "삿포로 눈축제의 메인 회장이자 도심의 녹지 벨트.", highlights: ["오도리 공원", "삿포로 TV타워", "시계탑"] },
      { name: "스스키노", nameEn: "Susukino", description: "먹거리와 유흥이 가득한 번화가.", highlights: ["스스키노 네온 거리", "라멘 골목", "니카 바"] },
    ],
    attractions: [
      { name: "삿포로 맥주박물관", nameEn: "Sapporo Beer Museum", description: "일본 유일의 맥주박물관으로 삿포로 맥주의 역사와 시음 체험.", category: "박물관", tip: "프리미엄 투어(¥500)를 예약하면 한정 맥주를 시음할 수 있습니다." },
      { name: "오도리 공원", nameEn: "Odori Park", description: "1.5km에 달하는 도심 공원으로 눈축제·맥주축제 등 각종 행사의 무대.", category: "공원" },
      { name: "삿포로 시계탑", nameEn: "Sapporo Clock Tower", description: "1878년에 세워진 삿포로의 상징적 건축물.", category: "랜드마크" },
      { name: "니조 시장", nameEn: "Nijo Market", description: "신선한 해산물을 현장에서 맛볼 수 있는 삿포로의 재래시장.", category: "시장" },
    ],
    dayTrips: [
      { name: "오타루", nameEn: "Otaru", description: "운하와 유리공예, 오르골로 유명한 낭만적인 항구 도시.", travelTime: "JR 약 35분", gradient: "from-indigo-300 to-blue-600" },
      { name: "후라노·비에이", nameEn: "Furano-Biei", description: "라벤더 밭과 패치워크 언덕이 펼쳐지는 홋카이도의 전원 풍경.", travelTime: "JR 약 2시간", gradient: "from-purple-400 to-violet-700" },
    ],
    localFood: [
      { name: "삿포로 미소라멘", description: "진한 미소 스프에 버터·옥수수를 올린 홋카이도식 라멘.", emoji: "🍜" },
      { name: "징기스칸", description: "양고기 BBQ, 삿포로 맥주원에서 맥주와 함께 즐기는 명물.", emoji: "🐑" },
      { name: "해산물동", description: "게, 성게, 연어알이 가득한 홋카이도 해물 덮밥.", emoji: "🦀" },
    ],
    tips: [
      "삿포로 눈축제(2월 초)는 세계적 행사로 숙소를 일찍 예약하세요.",
      "삿포로 맥주원에서 징기스칸+맥주 무한리필을 즐겨보세요.",
      "여름(7~8월)에도 평균 기온이 20~25도로 쾌적합니다.",
      "겨울에는 -10도 이하로 떨어지므로 방한 대비를 철저히 하세요.",
    ],
  },
  "japan/hokkaido/otaru": {
    heroGradient: "from-indigo-300 to-blue-600",
    description: "아름다운 운하와 유리공예, 오르골당으로 유명한 낭만적 항구 도시. 삿포로에서 기차로 35분 거리로 당일치기 인기 여행지입니다.",
    bestTime: "2월 (눈빛의 길) / 7~8월",
    stayArea: "오타루역 주변 / 운하 근처",
    transport: "도보 (주요 관광지 도보권)",
    districts: [
      { name: "오타루 운하", nameEn: "Otaru Canal Area", description: "가스등이 켜지는 운하와 석조 창고가 어우러진 핵심 관광 지구.", highlights: ["오타루 운하", "석조 창고군", "사카이마치 거리"] },
    ],
    attractions: [
      { name: "오타루 운하", nameEn: "Otaru Canal", description: "1923년 완공된 역사적 운하로 가스등이 비추는 야경이 로맨틱.", category: "랜드마크", tip: "야간에 가스등이 켜진 후(17시~)가 가장 아름답습니다." },
      { name: "오타루 오르골당", nameEn: "Otaru Music Box Museum", description: "25,000개 이상의 오르골을 전시·판매하는 아름다운 박물관.", category: "박물관" },
      { name: "기타이치 유리", nameEn: "Kitaichi Glass", description: "오타루 유리공예의 대표 브랜드로 유리 만들기 체험도 가능.", category: "공방" },
    ],
    dayTrips: [
      { name: "삿포로", nameEn: "Sapporo", description: "홋카이도의 수도, 맥주·라멘·눈축제의 도시.", travelTime: "JR 약 35분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "오타루 스시", description: "항구 도시답게 신선한 스시를 합리적 가격에 즐길 수 있는 스시 거리.", emoji: "🍣" },
      { name: "르타오 치즈케이크", description: "오타루 발 명품 디저트, 본점 한정 메뉴가 인기.", emoji: "🍰" },
    ],
    tips: [
      "삿포로에서 JR로 35분, 당일치기로 충분히 즐길 수 있습니다.",
      "'눈빛의 길'(2월)에는 운하와 거리에 촛불이 켜져 환상적입니다.",
      "사카이마치 거리에서 유리공예·오르골 쇼핑을 즐기세요.",
    ],
  },

  // ===== KYUSHU-OKINAWA =====
  "japan/kyushu-okinawa/fukuoka": {
    heroGradient: "from-red-400 to-orange-700",
    description: "규슈 최대 도시이자 일본에서 가장 살기 좋은 도시. 하카타 라멘과 야타이(포장마차) 문화가 유명하며 한국에서 가장 가까운 일본 대도시입니다.",
    bestTime: "3~5월 / 10~11월",
    stayArea: "하카타역 / 텐진 / 나카스",
    transport: "후쿠오카 시영지하철, 니시테쓰 전철",
    districts: [
      { name: "텐진·나카스", nameEn: "Tenjin-Nakasu", description: "후쿠오카 최대 번화가와 야타이가 모여있는 나카스 강변.", highlights: ["텐진 지하상가", "나카스 야타이 거리", "캐널시티"] },
      { name: "하카타", nameEn: "Hakata", description: "신칸센 역이 있는 하카타는 후쿠오카의 전통적 중심지.", highlights: ["하카타역", "구시다 신사", "하카타 마치야 민속관"] },
    ],
    attractions: [
      { name: "다자이후 텐만구", nameEn: "Dazaifu Tenmangu", description: "학문의 신 스가와라노 미치자네를 모신 신사로 수험생의 성지.", category: "신사", tip: "참배길의 우메가에모치(매화 떡)를 꼭 맛보세요." },
      { name: "나카스 야타이", nameEn: "Nakasu Yatai", description: "나카가와 강변 포장마차 거리에서 하카타 라멘과 꼬치를 즐기는 로컬 체험.", category: "먹거리" },
      { name: "캐널시티 하카타", nameEn: "Canal City Hakata", description: "운하가 흐르는 대형 복합 쇼핑·엔터테인먼트 시설.", category: "쇼핑" },
    ],
    dayTrips: [
      { name: "나가사키", nameEn: "Nagasaki", description: "이국적 역사와 평화공원이 있는 항구도시.", travelTime: "JR 가모메 약 1시간 25분", gradient: "from-blue-400 to-indigo-700" },
    ],
    localFood: [
      { name: "하카타 라멘", description: "돈코츠 베이스의 진한 국물과 가는 면, 카에다마(면 추가) 문화.", emoji: "🍜" },
      { name: "모츠나베", description: "소 곱창 전골, 마늘과 고추의 깊은 맛.", emoji: "🍲" },
      { name: "야타이 먹거리", description: "포장마차에서 라멘·교자·꼬치를 즐기는 후쿠오카의 밤문화.", emoji: "🏮" },
    ],
    tips: [
      "나카스 야타이는 18시부터 영업, 인기 가게는 줄을 서야 합니다.",
      "부산에서 제트포일로 약 3시간, 한국에서 가장 가까운 일본 대도시.",
      "후쿠오카 공항에서 시내까지 지하철 약 5분, 접근성 최고.",
    ],
  },
  "japan/kyushu-okinawa/nagasaki": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "포르투갈·네덜란드·중국 문화가 융합된 이국적 항구도시. 원폭의 비극과 평화의 메시지, 그리고 야경이 아름다운 도시입니다.",
    bestTime: "3~5월 / 10~12월 (란탄페스티벌: 1~2월)",
    stayArea: "나가사키역 / 하마마치 주변",
    transport: "나가사키 노면전차 (1회 ¥140)",
    districts: [
      { name: "평화공원 지구", nameEn: "Peace Park Area", description: "원폭 관련 시설이 모여있는 추모와 평화의 지역.", highlights: ["평화공원", "원폭자료관", "폭심지 공원"] },
      { name: "글러버 가든", nameEn: "Glover Garden Area", description: "서양식 저택과 항구 전망이 어우러진 남부 지역.", highlights: ["글러버 가든", "오우라 천주당", "차이나타운"] },
    ],
    attractions: [
      { name: "나가사키 평화공원", nameEn: "Nagasaki Peace Park", description: "1945년 원폭 투하지 인근에 조성된 평화 기원 공원. 평화기념상이 상징.", category: "공원", tip: "원폭자료관과 함께 방문하면 평화의 의미를 깊이 느낄 수 있습니다." },
      { name: "글러버 가든", nameEn: "Glover Garden", description: "일본에서 가장 오래된 서양식 목조건물이 있는 정원으로 항구 전망이 절경.", category: "정원" },
      { name: "이나사산 야경", nameEn: "Mount Inasa Night View", description: "일본 신3대 야경 중 하나로 꼽히는 나가사키 항구의 파노라마.", category: "전망대" },
    ],
    dayTrips: [
      { name: "하우스텐보스", nameEn: "Huis Ten Bosch", description: "네덜란드를 재현한 테마파크로 꽃과 일루미네이션이 매력.", travelTime: "JR 약 1시간 30분", gradient: "from-orange-300 to-yellow-600" },
    ],
    localFood: [
      { name: "짬뽕", description: "나가사키식 중화면으로 해산물과 채소가 듬뿍 들어간 국물 면.", emoji: "🍜" },
      { name: "카스텔라", description: "포르투갈에서 전래된 나가사키의 대표 과자, 후쿠사야가 원조.", emoji: "🍰" },
    ],
    tips: [
      "노면전차 1일 패스(¥600)로 주요 관광지를 편리하게 이동하세요.",
      "이나사산 야경은 로프웨이(¥1,250 왕복)를 이용하면 편리합니다.",
      "란탄페스티벌(1~2월 설 연휴)은 1만 5천 개의 등불이 장관입니다.",
    ],
  },
  "japan/kyushu-okinawa/okinawa": {
    heroGradient: "from-cyan-400 to-teal-700",
    description: "일본 최남단 열대 휴양지로 에메랄드빛 바다, 독자적 류큐 문화, 미군 기지 영향의 독특한 문화가 공존하는 일본 속 이국.",
    bestTime: "4~6월 (장마 전) / 9~11월",
    stayArea: "나하 고쿠사이도리 / 차탄·온나",
    transport: "유이레일(나하 모노레일), 렌터카 필수",
    districts: [
      { name: "나하", nameEn: "Naha", description: "오키나와의 수도로 고쿠사이도리 거리와 슈리성이 위치.", highlights: ["고쿠사이도리", "슈리성", "마키시 공설시장"] },
      { name: "중부", nameEn: "Central Okinawa", description: "아메리칸 빌리지와 리조트 해변이 있는 중부 지역.", highlights: ["아메리칸 빌리지", "만자모", "잔파곶"] },
    ],
    attractions: [
      { name: "슈리성", nameEn: "Shuri Castle", description: "류큐 왕국의 왕궁으로 UNESCO 세계유산. 2019년 화재 후 복원 중.", category: "성곽", tip: "복원 과정 자체가 하나의 볼거리입니다." },
      { name: "추라우미 수족관", nameEn: "Churaumi Aquarium", description: "거대한 고래상어와 만타가 헤엄치는 세계적 수족관.", category: "수족관", tip: "16시 이후 할인 입장이 가능합니다." },
      { name: "고쿠사이도리", nameEn: "Kokusai Street", description: "나하 최대 번화가로 오키나와 기념품과 먹거리가 가득한 1.6km 거리.", category: "거리" },
    ],
    dayTrips: [
      { name: "게라마 제도", nameEn: "Kerama Islands", description: "세계적 투명도의 케라마 블루 바다로 스노클링·다이빙의 천국.", travelTime: "나하에서 페리 약 50분", gradient: "from-blue-300 to-cyan-600" },
    ],
    localFood: [
      { name: "오키나와 소바", description: "밀가루 면에 돼지뼈 국물, 삼겹살(소키)을 올린 오키나와식 소바.", emoji: "🍜" },
      { name: "타코라이스", description: "타코 시즈닝 고기를 밥 위에 올린 오키나와 창작 요리.", emoji: "🌮" },
      { name: "사타안다기", description: "오키나와식 도넛, 바삭하고 달콤한 전통 간식.", emoji: "🍩" },
    ],
    tips: [
      "렌터카가 거의 필수! 나하 외 지역은 대중교통이 매우 불편합니다.",
      "자외선이 매우 강하니 자외선 차단제 SPF50+를 꼭 챙기세요.",
      "태풍 시즌(8~9월)을 피해 여행 계획을 세우세요.",
    ],
  },
};

export const japanAttractionDetails: Record<string, AttractionDetail> = {
  // ===== TOKYO =====
  "japan/tokyo-kanto/tokyo/senso-ji-temple": {
    heroGradient: "from-red-500 to-pink-800",
    description: "628년 창건된 도쿄에서 가장 오래된 사찰로, 거대한 카미나리몬(뇌문)의 붉은 등과 나카미세 거리의 전통 상점이 상징입니다. 연간 약 3,000만 명이 방문합니다.",
    history: "628년 스미다강에서 어부가 건져올린 관음상을 모시기 위해 창건. 도쿠가와 이에야스의 기원 사찰로 번성했으나 1945년 대공습으로 소실, 1958년 재건되었습니다.",
    visitInfo: {
      hours: "본당 06:00~17:00 (10~3월 06:30~), 경내 24시간 개방",
      admission: "무료",
      address: "2-3-1 Asakusa, Taito-ku, Tokyo",
      website: "https://www.senso-ji.jp",
    },
    highlights: [
      "카미나리몬(뇌문)의 거대한 붉은 등롱",
      "나카미세 거리 약 90개 전통 상점",
      "오층탑과 본당의 웅장한 건축",
      "아사쿠사 신사(산자마츠리 축제의 무대)",
    ],
    nearbyAttractions: ["도쿄 스카이트리", "스미다강 크루즈", "갓파바시 도구거리", "아사쿠사 신사"],
    photoTips: "카미나리몬은 정면에서, 나카미세 거리는 스카이트리를 배경으로 촬영하면 인상적입니다.",
    tips: [
      "이른 아침(6시)에 방문하면 인파 없이 고즈넉한 분위기를 즐길 수 있습니다.",
      "나카미세 거리의 닌교야키·아게만주는 필수 간식입니다.",
      "5월 산자마츠리 기간에는 가마 행렬로 엄청난 인파가 모입니다.",
    ],
  },
  "japan/tokyo-kanto/tokyo/shibuya-crossing": {
    heroGradient: "from-purple-500 to-fuchsia-700",
    description: "한 번에 최대 3,000명이 사방에서 건너는 세계에서 가장 유명한 스크램블 교차로. 도쿄의 에너지와 역동성을 상징하는 랜드마크입니다.",
    visitInfo: {
      hours: "24시간 (러시아워 17:00~20:00이 가장 역동적)",
      admission: "무료",
      address: "Shibuya Station Hachiko Exit, Shibuya-ku, Tokyo",
    },
    highlights: [
      "신호가 바뀌면 사방에서 쏟아지는 보행자의 물결",
      "시부야 스카이(SHIBUYA SKY) 230m 옥상 전망대",
      "하치코 동상 - 일본에서 가장 유명한 만남의 장소",
      "대형 LED 스크린들의 화려한 네온사인",
    ],
    nearbyAttractions: ["시부야 스카이", "하치코 동상", "시부야 109", "미야시타 파크"],
    photoTips: "시부야 스카이 전망대에서 내려다보는 구도가 가장 압도적이며, 마그넷 바이 시부야109 2층 스타벅스에서도 좋은 앵글을 잡을 수 있습니다.",
    tips: [
      "시부야 스카이 전망대(¥2,000)는 온라인 사전 예약이 필수입니다.",
      "금요일·토요일 저녁이 교차로가 가장 붐비는 시간입니다.",
      "하치코 동상 앞은 약속 장소로 항상 인파가 몰리니 참고하세요.",
    ],
  },
  "japan/tokyo-kanto/tokyo/meiji-shrine": {
    heroGradient: "from-green-600 to-emerald-800",
    description: "메이지 천황과 쇼켄 황태후를 모신 신사로, 도심 한가운데 70만m²의 울창한 숲에 둘러싸여 있습니다. 새해 참배 인파가 일본 최다(연간 300만 명)입니다.",
    history: "1920년 창건되었으며, 전국에서 기증받은 10만 그루의 나무로 인공림이 조성되었습니다. 1945년 공습으로 소실 후 1958년 재건되었습니다.",
    visitInfo: {
      hours: "일출~일몰 (월별 상이, 약 06:00~17:00)",
      admission: "무료 (내원 보물전 ¥500)",
      address: "1-1 Yoyogikamizonocho, Shibuya-ku, Tokyo",
      website: "https://www.meijijingu.or.jp",
    },
    highlights: [
      "높이 12m의 거대한 목조 도리이(일본 최대급)",
      "소원을 적는 에마(絵馬) 봉납",
      "내원의 이리스(꽃창포) 정원 (6월 절정)",
      "전통 신사 결혼식 행렬 목격 가능",
    ],
    nearbyAttractions: ["하라주쿠 다케시타 거리", "요요기 공원", "오모테산도 힐즈", "캣스트리트"],
    photoTips: "참도의 거대한 도리이를 프레임 삼아 숲길을 촬영하면 신비로운 분위기가 납니다.",
    tips: [
      "하라주쿠역에서 도보 1분, 방문 후 다케시타 거리와 세트로 관광하세요.",
      "새해(1월 1~3일)에는 300만 명 이상이 방문하므로 피하는 것이 좋습니다.",
      "참도에서는 중앙을 피하고 가장자리를 걸으세요(중앙은 신의 길).",
    ],
  },
  "japan/tokyo-kanto/tokyo/tokyo-skytree": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "634m 높이의 세계에서 가장 높은 자립식 전파탑. 지상 350m와 450m 두 개의 전망대에서 도쿄 전경과 맑은 날 후지산까지 조망할 수 있습니다.",
    history: "2012년 개업. 높이 634m는 일본 옛 지역명 '무사시(ムサシ=634)'에서 유래했습니다. 도쿄타워를 대체하는 전파탑 기능과 관광 명소를 겸합니다.",
    visitInfo: {
      hours: "10:00~21:00 (최종 입장 20:00)",
      admission: "텐보데크(350m) ¥2,100 / 텐보갤러리(450m) 추가 ¥1,000",
      address: "1-1-2 Oshiage, Sumida-ku, Tokyo",
      website: "https://www.tokyo-skytree.jp",
    },
    highlights: [
      "350m 텐보데크에서 360도 파노라마 뷰",
      "450m 텐보갤러리의 나선형 슬로프 산책",
      "맑은 날 후지산과 간토 평야 조망",
      "야간 라이트업 (이키·미야비·노보리 3가지 패턴)",
    ],
    nearbyAttractions: ["센소지", "스미다 수족관", "도쿄 소라마치", "스미다강"],
    photoTips: "스미다강 건너편 주바시(十間橋)에서 스카이트리와 수면 반영을 함께 담을 수 있습니다.",
    tips: [
      "온라인 사전 예약 시 할인되며 대기 시간도 줄어듭니다.",
      "맑은 날 오전이 후지산 조망 확률이 가장 높습니다.",
      "소라마치(쇼핑몰)에서 식사와 쇼핑을 함께 즐기세요.",
    ],
  },
  "japan/tokyo-kanto/tokyo/tsukiji-outer-market": {
    heroGradient: "from-orange-400 to-red-600",
    description: "도요스로 이전한 수산시장과 별개로 남아있는 장외시장. 400개 이상의 상점에서 신선한 해산물, 계란말이, 길거리 음식을 즐길 수 있는 도쿄 최고의 먹거리 명소입니다.",
    visitInfo: {
      hours: "상점별 상이 (대부분 05:00~14:00, 일·공휴일·수요일 일부 휴무)",
      admission: "무료",
      address: "4-16-2 Tsukiji, Chuo-ku, Tokyo",
    },
    highlights: [
      "참치 꼬치, 계란말이, 해산물동 등 길거리 음식 투어",
      "신선한 해산물을 현장에서 맛보는 스시 오마카세",
      "다마고야키(계란말이) 전문점 줄서기",
      "일본 칼, 주방용품 전문점",
    ],
    nearbyAttractions: ["하마리큐 정원", "긴자", "가부키좌", "츠키지혼간지"],
    tips: [
      "이른 아침(7~9시)에 방문하면 가장 활기찬 분위기를 느낄 수 있습니다.",
      "일요일·공휴일·수요일에는 문을 닫는 가게가 많으니 확인하세요.",
      "도요스 시장(경매 견학)과는 별개이니 혼동하지 마세요.",
    ],
  },

  // ===== KYOTO =====
  "japan/kansai/kyoto/fushimi-inari-shrine": {
    heroGradient: "from-red-600 to-orange-700",
    description: "약 10,000개의 주홍색 도리이가 이나리산 정상까지 4km에 걸쳐 이어지는 장관. 오곡풍양과 상업 번성의 신 이나리를 모신 전국 3만 이나리 신사의 총본산입니다.",
    history: "711년 창건된 일본에서 가장 오래된 이나리 신사. 에도 시대부터 소원 성취를 기원하며 도리이를 봉납하는 전통이 이어져 현재의 장관이 만들어졌습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "68 Fukakusa Yabunouchicho, Fushimi-ku, Kyoto",
      website: "https://inari.jp",
    },
    highlights: [
      "센본도리이(천 개의 도리이) 터널",
      "이나리산 정상까지 약 2시간 왕복 등산",
      "여우(키츠네) 수호신 석상",
      "요츠츠지(사거리 전망대)에서 교토 시내 조망",
    ],
    nearbyAttractions: ["도후쿠지", "교토역", "히가시야마 지구"],
    photoTips: "새벽이나 해질녘에 방문하면 사람 없는 도리이 터널 사진을 찍을 수 있습니다. 인스타 감성 포인트는 센본도리이 입구입니다.",
    tips: [
      "정상 왕복 약 2시간, 체력에 따라 요츠츠지(중간)에서 돌아와도 됩니다.",
      "새벽 또는 야간 방문이 인파를 피하는 최고의 방법입니다.",
      "산 중턱 찻집에서 키츠네우동(여우우동)을 맛보세요.",
    ],
  },
  "japan/kansai/kyoto/kinkaku-ji": {
    heroGradient: "from-yellow-400 to-amber-700",
    description: "금박으로 덮인 3층 누각이 교코치(거울 연못)에 비치는 교토의 상징적 사원. 무로마치 시대 쇼군 아시카가 요시미츠의 별장으로 지어졌습니다.",
    history: "1397년 아시카가 요시미츠가 별장으로 건설. 1950년 수련승의 방화로 소실되어 미시마 유키오의 소설 '금각사'의 소재가 되었으며, 1955년 재건되었습니다.",
    visitInfo: {
      hours: "09:00~17:00",
      admission: "¥500",
      address: "1 Kinkakujicho, Kita-ku, Kyoto",
      website: "https://www.shokoku-ji.jp/kinkakuji/",
    },
    highlights: [
      "금박으로 덮인 3층 누각의 거울 연못 반영",
      "일본식 회유식 정원 산책",
      "부동당에서의 말차 체험",
      "겨울 설경의 금각사 (희귀하지만 최고의 풍경)",
    ],
    nearbyAttractions: ["류안지(석정)", "닌나지", "기타노텐만구"],
    photoTips: "오전 일찍 방문하면 역광 없이 금각이 연못에 선명하게 반영된 사진을 찍을 수 있습니다.",
    tips: [
      "입장 시 받는 부적 형태의 입장권이 독특한 기념품이 됩니다.",
      "인근 류안지(석정)와 세트로 방문하면 효율적입니다.",
      "가을 단풍·겨울 눈 덮인 금각사가 특히 아름답습니다.",
    ],
  },
  "japan/kansai/kyoto/arashiyama-bamboo-grove": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "하늘을 가리는 수만 그루의 대나무가 만드는 초록빛 터널. 바람에 흔들리는 대나무 소리는 일본 환경성이 선정한 '일본의 소리 풍경 100선'에 포함되어 있습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Sagatenryuji Susukinobabacho, Ukyo-ku, Kyoto",
    },
    highlights: [
      "하늘을 가리는 대나무 터널 산책",
      "바람에 흔들리는 대나무 소리의 힐링",
      "노노미야 신사 (인연·학업의 신)",
      "인력거 타고 대나무숲 관광",
    ],
    nearbyAttractions: ["텐류지", "도게쓰교", "원숭이공원 이와타야마", "노노미야 신사"],
    photoTips: "이른 아침 7시 전에 방문해야 사람 없는 대나무숲 사진을 찍을 수 있습니다. 위를 올려다보는 앵글이 대나무의 높이감을 살려줍니다.",
    tips: [
      "이른 아침(7시 전) 방문이 인파 없는 사진의 유일한 기회입니다.",
      "텐류지 정원 → 대나무숲 → 도게쓰교 순서로 동선을 짜세요.",
      "인력거(약 ¥5,000~)를 타면 가이드 해설과 함께 사진 명소를 안내받을 수 있습니다.",
    ],
  },
  "japan/kansai/kyoto/kiyomizu-dera": {
    heroGradient: "from-orange-500 to-red-700",
    description: "778년 창건된 교토 최고의 사원으로, 못을 하나도 쓰지 않고 139개 기둥이 지탱하는 '기요미즈의 무대'에서 교토 시내를 한눈에 내려다볼 수 있습니다.",
    history: "778년 승려 엔친이 오토와 폭포를 발견하고 창건. '기요미즈(맑은 물)'라는 이름은 오토와 폭포에서 유래. 현재 건물은 1633년 도쿠가와 이에미츠 시대에 재건되었습니다.",
    visitInfo: {
      hours: "06:00~18:00 (계절별 야간 특별관람 있음)",
      admission: "¥400",
      address: "1-294 Kiyomizu, Higashiyama-ku, Kyoto",
      website: "https://www.kiyomizudera.or.jp",
    },
    highlights: [
      "기요미즈의 무대 - 못 없이 139개 기둥이 지탱하는 건축 걸작",
      "오토와 폭포 - 3줄기 물(학업·연애·장수)에서 소원 빌기",
      "봄 벚꽃·가을 단풍의 야간 라이트업",
      "산넨자카·니넨자카 전통 거리 산책",
    ],
    nearbyAttractions: ["산넨자카·니넨자카", "야사카 탑", "고다이지", "기온"],
    photoTips: "무대에서의 전경도 좋지만, 오쿠노인에서 본당 무대를 단풍·벚꽃과 함께 담는 것이 명작 구도입니다.",
    tips: [
      "야간 특별관람(봄·가을)의 라이트업은 별도 입장권이 필요합니다.",
      "오토와 폭포에서 물을 마실 때 세 줄기 중 하나만 선택하세요(욕심부리면 안 됩니다).",
      "산넨자카에서 넘어지면 3년 안에 불행이 온다는 미신이 있으니 조심하세요!",
    ],
  },

  // ===== OSAKA =====
  "japan/kansai/osaka/dotonbori": {
    heroGradient: "from-orange-500 to-yellow-700",
    description: "글리코 달리는 남자 간판, 거대한 게·교자 입체 간판이 가득한 오사카의 상징적 번화가. 도톤보리강을 따라 화려한 네온과 먹거리가 넘쳐나는 오사카 여행의 필수 코스입니다.",
    history: "1612년 도톤이라는 상인이 사재를 털어 운하를 개통한 것이 시초. 에도 시대부터 극장과 음식점이 밀집한 오사카 최대 번화가로 발전했습니다.",
    visitInfo: {
      hours: "24시간 (대부분 음식점 11:00~23:00)",
      admission: "무료",
      address: "Dotonbori, Chuo-ku, Osaka",
    },
    highlights: [
      "글리코 달리는 남자 네온 간판 (에비스바시에서 촬영)",
      "거대한 게·교자·후구 입체 간판들",
      "도톤보리강 크루즈 (약 20분, ¥1,000)",
      "호젠지 골목의 이끼 낀 부동존",
    ],
    nearbyAttractions: ["호젠지 골목", "신사이바시 상점가", "구로몬 시장", "난바 그랜드 카이게츠"],
    photoTips: "에비스바시 위에서 글리코 간판을 배경으로 양팔을 벌린 포즈가 정석입니다. 야간이 네온이 화려해 사진이 가장 잘 나옵니다.",
    tips: [
      "저녁 시간대(18시~)에 네온이 모두 켜진 후가 가장 화려합니다.",
      "타코야키는 '와나카', 교자는 '오사카 오쇼'가 현지인 인기 맛집입니다.",
      "호젠지 골목의 미즈카게 부동존에 물을 끼얹으며 소원을 비세요.",
    ],
  },
  "japan/kansai/osaka/osaka-castle": {
    heroGradient: "from-green-500 to-teal-700",
    description: "1583년 도요토미 히데요시가 축성한 일본 3대 성 중 하나. 8층 천수각 전망대에서 오사카 시내를 360도 조망할 수 있으며, 봄에는 3,000그루 벚꽃이 만개합니다.",
    history: "1583년 도요토미 히데요시가 축성. 오사카 여름 전투(1615년)로 소실 후 도쿠가와 막부가 재건했으나 다시 소실. 현재 천수각은 1931년 콘크리트로 재건된 것입니다.",
    visitInfo: {
      hours: "09:00~17:00 (최종 입장 16:30)",
      admission: "¥600",
      address: "1-1 Osakajo, Chuo-ku, Osaka",
      website: "https://www.osakacastle.net",
    },
    highlights: [
      "8층 천수각 전망대에서 360도 오사카 시내 조망",
      "도요토미 히데요시 관련 역사 전시",
      "봄 벚꽃(니시노마루 정원 약 600그루)",
      "거대한 돌담과 해자의 스케일",
    ],
    nearbyAttractions: ["조폐국 벚꽃길", "오사카 역사박물관", "오사카 비즈니스파크"],
    photoTips: "니시노마루 정원에서 벚꽃과 천수각을 함께 담는 구도가 가장 아름답습니다.",
    tips: [
      "벚꽃 시즌(3월 말~4월 초) 니시노마루 정원 야간 라이트업은 놓치지 마세요.",
      "오사카 주유패스 소지자는 천수각 무료 입장이 가능합니다.",
      "성까지 도보가 길므로 가장 가까운 역(모리노미야역 또는 다니마치4초메역)을 확인하세요.",
    ],
  },

  // ===== NARA =====
  "japan/kansai/nara/todai-ji-temple": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "세계 최대 목조 건축물인 대불전에 높이 15m의 비로자나 대불이 안치된 나라 최고의 사원. 유네스코 세계유산으로 나라공원의 사슴과 함께 방문하는 필수 명소입니다.",
    history: "752년 쇼무 천황의 발원으로 건립. 대불(비로자나불)은 높이 약 15m, 무게 약 250톤. 현재 대불전은 1709년 재건된 것으로 원래 크기의 2/3이지만 여전히 세계 최대 목조 건축입니다.",
    visitInfo: {
      hours: "07:30~17:30 (11~3월 08:00~17:00)",
      admission: "¥600",
      address: "406-1 Zoshicho, Nara",
      website: "https://www.todaiji.or.jp",
    },
    highlights: [
      "높이 15m의 비로자나 대불(세계 최대 청동불상 중 하나)",
      "대불전 - 세계 최대 목조 건축물",
      "기둥 구멍 통과하기(대불의 콧구멍 크기, 복이 온다는 전설)",
      "남대문의 금강역사상(운케이·카이케이 작)",
    ],
    nearbyAttractions: ["나라공원 사슴", "가스가타이샤", "니가츠도", "나라국립박물관"],
    photoTips: "남대문 프레임으로 대불전을 담는 구도가 스케일감을 잘 표현합니다. 거울 연못에서의 반영도 아름답습니다.",
    tips: [
      "기둥 구멍 통과는 줄이 길 수 있으니 아침 일찍 방문하세요.",
      "니가츠도(이월당) 발코니에서 나라 시내 전경을 무료로 감상할 수 있습니다.",
      "나라공원~도다이지~가스가타이샤를 도보로 세트 관광하세요.",
    ],
  },

  // ===== KAMAKURA =====
  "japan/tokyo-kanto/kamakura/great-buddha": {
    heroGradient: "from-green-400 to-teal-700",
    description: "고토쿠인(高徳院)에 안치된 높이 13.35m, 무게 121톤의 청동 아미타여래 좌상. 1252년부터 770년 이상 야외에 앉아 계신 가마쿠라의 상징입니다.",
    history: "1252년 주조 시작. 원래 대불전 안에 모셔져 있었으나 1498년 대해일(쓰나미)로 전각이 유실되어 이후 노천에 안치. 국보로 지정되어 있습니다.",
    visitInfo: {
      hours: "08:00~17:30 (10~3월 ~17:00)",
      admission: "¥300 (대불 내부 추가 ¥20)",
      address: "4-2-28 Hase, Kamakura, Kanagawa",
    },
    highlights: [
      "높이 13.35m 청동 아미타불 좌상 (국보)",
      "대불 내부 견학 (¥20 추가)",
      "대불 뒤편의 거대한 짚신 봉납물",
      "벚꽃·단풍 시즌의 아름다운 경내",
    ],
    nearbyAttractions: ["하세데라", "에노덴 전철", "유이가하마 해변", "가마쿠라 문학관"],
    photoTips: "정면에서 약간 옆으로 비스듬한 각도가 대불의 입체감을 가장 잘 살려줍니다.",
    tips: [
      "¥20으로 대불 내부에 들어갈 수 있으니 꼭 체험하세요.",
      "에노덴 하세역에서 도보 약 7분입니다.",
      "인근 하세데라와 세트로 방문하면 효율적입니다.",
    ],
  },

  // ===== HAKONE =====
  "japan/tokyo-kanto/hakone/hakone-open-air-museum": {
    heroGradient: "from-purple-400 to-indigo-700",
    description: "7만m²의 야외 전시장에 로댕, 무어, 미로 등 120점 이상의 조각 작품이 하코네의 산과 하늘을 배경으로 전시된 일본 최초의 야외미술관입니다.",
    history: "1969년 개관한 일본 최초의 야외미술관. 피카소관에는 319점의 피카소 컬렉션이 소장되어 있으며, 자연과 예술의 조화를 콘셉트로 국내외 거장의 작품을 전시합니다.",
    visitInfo: {
      hours: "09:00~17:00 (최종 입장 16:30)",
      admission: "¥1,600",
      address: "1121 Ninotaira, Hakone, Ashigarashimo-gun, Kanagawa",
      website: "https://www.hakone-oam.or.jp",
    },
    highlights: [
      "하코네의 산을 배경으로 한 120점 이상의 야외 조각",
      "피카소관 - 319점의 피카소 컬렉션",
      "스테인드글라스로 장식된 '행복을 부르는 심포니' 탑",
      "족욕탕에서 쉬며 감상하는 조각 작품",
    ],
    nearbyAttractions: ["고라 공원", "오와쿠다니", "하코네 등산철도", "폴라 미술관"],
    photoTips: "'행복을 부르는 심포니' 탑 내부의 스테인드글라스가 인스타 감성 최고 포인트입니다.",
    tips: [
      "비 오는 날에도 피카소관 등 실내 전시가 있어 충분히 즐길 수 있습니다.",
      "하코네 프리패스로 할인 입장이 가능합니다.",
      "미술관 내 족욕탕에서 피로를 풀며 작품을 감상하세요.",
    ],
  },

  // ===== SAPPORO =====
  "japan/hokkaido/sapporo/sapporo-beer-museum": {
    heroGradient: "from-amber-500 to-yellow-700",
    description: "1987년 개관한 일본 유일의 맥주박물관. 붉은 벽돌의 역사적 건물에서 삿포로 맥주 140년 역사를 배우고, 한정 생맥주를 시음할 수 있습니다.",
    history: "1890년 제당 공장으로 건설된 붉은 벽돌 건물을 1987년 맥주박물관으로 리모델링. 삿포로 맥주는 1876년 '가이타쿠시 맥주양조소'에서 시작된 일본 최초의 맥주 브랜드입니다.",
    visitInfo: {
      hours: "11:00~18:00 (수요일 휴관)",
      admission: "무료 (프리미엄 투어 ¥500 / 시음 ¥200~)",
      address: "9-1-1 Kita 7-jo Higashi, Higashi-ku, Sapporo",
      website: "https://www.sapporobeer.jp/brewery/s_museum/",
    },
    highlights: [
      "붉은 벽돌 건물의 클래식한 외관",
      "삿포로 맥주 140년 역사 전시",
      "프리미엄 투어 한정 '복극성(北極星)' 맥주 시음",
      "삿포로 맥주원에서 징기스칸(양고기 BBQ)+생맥주",
    ],
    nearbyAttractions: ["삿포로 맥주원(징기스칸)", "아리오 삿포로", "삿포로 팩토리"],
    tips: [
      "프리미엄 투어(¥500)를 예약하면 한정 맥주를 시음할 수 있습니다.",
      "인접한 삿포로 맥주원에서 징기스칸+맥주 무한리필을 꼭 즐기세요.",
      "삿포로역에서 버스 약 10분 또는 도보 약 20분입니다.",
    ],
  },

  // ===== FUKUOKA =====
  "japan/kyushu-okinawa/fukuoka/dazaifu-tenmangu": {
    heroGradient: "from-pink-500 to-red-700",
    description: "학문의 신 스가와라노 미치자네를 모신 전국 12,000개 텐만구 신사의 총본산. 매화꽃과 합격 기원으로 유명하며 연간 1,000만 명이 방문합니다.",
    history: "919년 창건. 스가와라노 미치자네(845~903)는 학문에 뛰어난 관료였으나 정쟁에 휘말려 다자이후로 좌천, 이곳에서 생을 마감했습니다. 사후 학문의 신으로 추앙받게 되었습니다.",
    visitInfo: {
      hours: "06:30~19:00 (계절별 상이)",
      admission: "무료 (보물전 ¥500)",
      address: "4-7-1 Saifu, Dazaifu, Fukuoka",
      website: "https://www.dazaifutenmangu.or.jp",
    },
    highlights: [
      "본전 앞 6,000그루 매화나무 (2~3월 절정)",
      "합격·학업 성취 기원 에마(소원패) 봉납",
      "구마에 모치(매화 떡) - 참배길 명물 간식",
      "구마모토 켄고 설계의 스타벅스 다자이후점",
    ],
    nearbyAttractions: ["규슈국립박물관", "고묘젠지(이끼 정원)", "다자이후 정청 유적"],
    photoTips: "본전과 다이코바시(태고교)를 함께 담은 구도가 정석입니다. 매화 시즌이 가장 포토제닉합니다.",
    tips: [
      "참배길의 우메가에모치(매화 떡)는 다자이후 필수 간식입니다.",
      "구마 켄고 설계 스타벅스는 건축 애호가 필수 방문 명소.",
      "후쿠오카 텐진역에서 니시테쓰 전철로 약 30분입니다.",
    ],
  },

  // ===== KANAZAWA =====
  "japan/chubu/kanazawa/kenroku-en-garden": {
    heroGradient: "from-teal-400 to-cyan-700",
    description: "일본 3대 정원 중 하나로 11.4만m²의 광대한 회유식 정원. 겐로쿠(6가지 조건: 광활함·유수·오래됨·조망·그윽함·인공)를 모두 갖춘 완벽한 정원입니다.",
    history: "1676년 가가번 5대 번주 마에다 쓰나노리가 조성을 시작. 약 180년에 걸쳐 역대 번주들이 확장하여 현재 모습이 완성되었습니다.",
    visitInfo: {
      hours: "07:00~18:00 (10~2월 08:00~17:00)",
      admission: "¥320",
      address: "1 Kenrokumachi, Kanazawa, Ishikawa",
      website: "https://www.pref.ishikawa.jp/siro-niwa/kenrokuen/",
    },
    highlights: [
      "고토지 석등 - 겐로쿠엔의 상징적 풍경",
      "겨울 유키즈리(눈대비 밧줄) - 겐로쿠엔 최고의 풍경",
      "가스미가이케(안개 연못)의 사계절 변화",
      "약 420종 8,750그루의 수목과 정원",
    ],
    nearbyAttractions: ["가나자와성 공원", "21세기 미술관", "나가마치 무사 거리", "오미초 시장"],
    photoTips: "고토지 석등과 가스미가이케 연못을 함께 담는 것이 가장 대표적인 구도입니다. 겨울 유키즈리 설치 풍경이 가장 인상적.",
    tips: [
      "이른 아침 무료 개방 시간(계절별 상이)을 활용하세요.",
      "가나자와성 공원과 연결되어 있어 세트 관광이 편리합니다.",
      "겨울 유키즈리 설치(11~12월)와 라이트업이 겐로쿠엔 최고의 풍경입니다.",
    ],
  },

  // ===== NIKKO =====
  "japan/tokyo-kanto/nikko/toshogu-shrine": {
    heroGradient: "from-orange-400 to-red-700",
    description: "도쿠가와 이에야스를 모신 화려한 신사로 UNESCO 세계유산. '보지도 듣지도 말하지도 않는 세 원숭이'와 '잠자는 고양이(네무리네코)' 조각으로 유명합니다.",
    history: "1617년 도쿠가와 이에야스의 유언에 따라 창건. 1636년 3대 쇼군 이에미츠가 대규모 증축하여 현재의 화려한 모습이 완성. 건물에는 5,000점 이상의 조각이 있습니다.",
    visitInfo: {
      hours: "08:00~17:00 (11~3월 ~16:00)",
      admission: "¥1,300",
      address: "2301 Sannai, Nikko, Tochigi",
      website: "https://www.toshogu.jp",
    },
    highlights: [
      "'보지도 듣지도 말하지도 않는' 세 원숭이 조각",
      "네무리네코(잠자는 고양이) - 히다리 진고로 작",
      "요메이몬(양명문) - 500개 이상의 정교한 조각",
      "나키류(울음 용) - 천장 아래서 박수를 치면 울림이 들린다",
    ],
    nearbyAttractions: ["린노지", "후타라산 신사", "신쿄(신교)", "다이유인"],
    photoTips: "요메이몬을 정면에서, 세 원숭이 조각을 클로즈업으로 촬영하세요. 삼나무 참도의 분위기도 훌륭합니다.",
    tips: [
      "관람에 최소 2시간을 잡으세요. 디테일을 보려면 3시간 이상 필요합니다.",
      "도쿄 아사쿠사에서 도부닛코선 특급으로 약 2시간입니다.",
      "세트 입장권(도쇼구+린노지+후타라산 신사)이 경제적입니다.",
    ],
  },

  // ===== NAGASAKI =====
  "japan/kyushu-okinawa/nagasaki/nagasaki-peace-park": {
    heroGradient: "from-blue-400 to-indigo-700",
    description: "1945년 8월 9일 원자폭탄 투하지 인근에 조성된 평화 공원. 오른손은 원폭을, 왼손은 평화를 가리키는 10m 높이의 평화기념상이 세계 평화를 호소하고 있습니다.",
    history: "1945년 8월 9일 오전 11시 2분, 나가사키에 플루토늄 원자폭탄 '팻맨'이 투하되어 약 7만 명이 사망. 1955년 평화기념상이 건립되고 공원이 정비되었습니다.",
    visitInfo: {
      hours: "공원 24시간 / 원폭자료관 08:30~17:30 (8월은 ~18:30)",
      admission: "공원 무료 / 원폭자료관 ¥200",
      address: "7-8 Matsuyamamachi, Nagasaki",
    },
    highlights: [
      "평화기념상 - 높이 10m의 상징적 청동상",
      "나가사키 원폭자료관 - 원폭의 실상을 전하는 전시",
      "폭심지 공원 - 원폭 투하 지점의 검은 석비",
      "평화의 샘 - 원폭 희생자를 추모하는 분수",
    ],
    nearbyAttractions: ["원폭자료관", "폭심지 공원", "우라카미 성당", "야마자토 초등학교 유적"],
    tips: [
      "원폭자료관과 함께 방문하면 평화의 의미를 깊이 느낄 수 있습니다.",
      "매년 8월 9일 평화기념식이 열려 전 세계에서 추모객이 모입니다.",
      "노면전차 '평화공원' 정류장에서 도보 5분입니다.",
    ],
  },

  // ===== TAKAYAMA =====
  "japan/chubu/takayama/takayama-old-town": {
    heroGradient: "from-amber-400 to-brown-700",
    description: "에도 시대(1600~1868)의 목조 건축이 완벽하게 보존된 산마치 거리. 전통 사케 양조장, 소목공예품 가게, 미타라시 당고 가판대가 늘어선 히다 지방의 소교토입니다.",
    visitInfo: {
      hours: "거리 24시간 / 상점 대부분 09:00~17:00",
      admission: "무료 (개별 시설 별도)",
      address: "Kamiichinomachi ~ Kamisannomachi, Takayama, Gifu",
    },
    highlights: [
      "산마치 거리의 에도 시대 목조 건물 거리풍경",
      "전통 사케 양조장 무료 시음",
      "히다 소고기 스시·꼬치 길거리 음식",
      "미야가와 아침시장 (06:00~12:00)",
    ],
    nearbyAttractions: ["다카야마 아침시장", "히다민속촌", "다카야마 진야(관청)", "구사카베 민예관"],
    photoTips: "산마치 거리는 이른 아침에 관광객이 없어 전통 거리의 고즈넉한 분위기를 담을 수 있습니다.",
    tips: [
      "양조장 앞 스기다마(삼나무 공)가 초록이면 햇술이 나온 신호입니다.",
      "히다 소고기 스시(¥800~)는 산마치 거리 곳곳에서 맛볼 수 있습니다.",
      "다카야마 축제(4월 14~15일, 10월 9~10일)는 화려한 다시(수레) 행렬이 장관입니다.",
    ],
  },
};
