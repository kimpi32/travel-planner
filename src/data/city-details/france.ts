import type { CityDetail, AttractionDetail } from "../city-details";

export const franceCityDetails: Record<string, CityDetail> = {
  // ===== PARIS & ILE-DE-FRANCE =====
  "france/paris-ile-de-france/paris": {
    heroGradient: "from-pink-500 to-violet-700",
    description: "빛의 도시 파리는 에펠탑, 루브르, 오르세 미술관 등 세계적인 문화유산이 밀집한 프랑스의 심장입니다. 센 강을 따라 펼쳐지는 아름다운 건축물과 골목마다 숨겨진 카페, 부티크가 여행자에게 끝없는 영감을 줍니다.",
    bestTime: "4~6월, 9~10월 (봄과 가을이 가장 쾌적)",
    stayArea: "마레 지구 / 생제르맹 데 프레 / 오페라 지구",
    transport: "메트로, RER, 버스 (나비고 이지 교통카드)",
    districts: [
      { name: "마레 지구", nameEn: "Le Marais", description: "중세 건축과 트렌디한 카페, 갤러리가 공존하는 파리에서 가장 활기찬 지구.", highlights: ["보주 광장", "피카소 미술관", "카르나발레 박물관", "팔라펠 거리"] },
      { name: "몽마르트르", nameEn: "Montmartre", description: "사크레쾨르 대성당이 자리한 예술가의 언덕. 좁은 골목과 카페가 보헤미안 분위기를 자아냅니다.", highlights: ["사크레쾨르 대성당", "테르트르 광장", "물랭 루주", "포도밭"] },
      { name: "생제르맹 데 프레", nameEn: "Saint-Germain-des-Prés", description: "문학과 철학의 거리로 카페 드 플로르, 레 되 마고 등 역사적 카페가 유명합니다.", highlights: ["카페 드 플로르", "뤽상부르 공원", "생쉘피스 교회", "오르세 미술관"] },
      { name: "라틴 지구", nameEn: "Latin Quarter", description: "소르본 대학을 중심으로 한 학생가로 저렴한 레스토랑과 서점이 밀집해 있습니다.", highlights: ["판테온", "소르본 대학교", "뮈프타르 거리", "클뤼니 중세미술관"] },
      { name: "샹젤리제 & 개선문", nameEn: "Champs-Élysées", description: "세계에서 가장 아름다운 거리로 불리는 샹젤리제 대로와 개선문이 있는 파리의 상징적 지구.", highlights: ["개선문", "그랑 팔레", "프티 팔레", "콩코르드 광장"] },
    ],
    attractions: [
      { name: "에펠탑", nameEn: "Eiffel Tower", description: "1889년 만국박람회를 위해 건설된 파리의 상징. 높이 330m의 철탑에서 파리 시내를 한눈에 조망할 수 있습니다.", category: "랜드마크", tip: "온라인 사전 예약 필수! 야간 매시 정각 반짝이는 조명쇼를 놓치지 마세요." },
      { name: "루브르 박물관", nameEn: "Louvre Museum", description: "세계 최대의 미술관으로 모나리자, 밀로의 비너스, 사모트라케의 니케 등 38만점 소장.", category: "박물관", tip: "수·금요일 야간 개관(21:45까지)을 이용하면 한적하게 관람 가능합니다." },
      { name: "몽마르트르 & 사크레쾨르", nameEn: "Montmartre & Sacré-Cœur", description: "파리 최고 지점에 자리한 하얀 대성당에서 파리 시내 전경을 감상할 수 있습니다.", category: "성당", tip: "푸니쿨라로 올라가면 편하고, 테르트르 광장의 화가들도 구경하세요." },
      { name: "노트르담 대성당", nameEn: "Notre-Dame Cathedral", description: "850년 역사의 고딕 건축 걸작으로 2019년 화재 후 복원되어 2024년 재개장했습니다.", category: "성당", tip: "시테 섬에 위치하며 주변 센 강변 산책과 함께 즐기세요." },
      { name: "개선문", nameEn: "Arc de Triomphe", description: "나폴레옹의 승전을 기념해 건설된 50m 높이의 개선문. 옥상에서 12개 대로가 뻗어나가는 에투알 광장 전경이 장관.", category: "랜드마크", tip: "옥상 전망대에서 에펠탑과 샹젤리제를 한눈에 볼 수 있습니다." },
      { name: "오르세 미술관", nameEn: "Musée d'Orsay", description: "옛 기차역을 개조한 미술관으로 인상파 걸작이 총집합. 모네, 르누아르, 고흐, 드가 등의 명작을 소장.", category: "박물관", tip: "목요일 야간 개관(21:45까지)을 활용하고, 5층 시계 뒤 전망도 놓치지 마세요." },
    ],
    dayTrips: [
      { name: "베르사유 궁전", nameEn: "Palace of Versailles", description: "루이 14세의 화려한 절대왕정을 상징하는 세계문화유산.", travelTime: "RER C선 약 40분", gradient: "from-amber-400 to-yellow-700" },
      { name: "지베르니", nameEn: "Giverny", description: "모네의 정원과 수련 연못이 있는 인상파의 성지.", travelTime: "기차+버스 약 1시간 30분", gradient: "from-green-400 to-emerald-600" },
      { name: "디즈니랜드 파리", nameEn: "Disneyland Paris", description: "유럽 유일의 디즈니 리조트로 두 개의 테마파크.", travelTime: "RER A선 약 40분", gradient: "from-blue-400 to-purple-600" },
    ],
    localFood: [
      { name: "크루아상 & 팽 오 쇼콜라", description: "동네 불랑주리에서 갓 구운 버터 향 가득한 프랑스식 아침.", emoji: "🥐" },
      { name: "스테이크 프리트", description: "스테이크에 바삭한 감자튀김을 곁들인 파리지앵의 비스트로 단골 메뉴.", emoji: "🥩" },
      { name: "크렘 브륄레", description: "바닐라 커스터드 위 캐러멜 층이 매력적인 프렌치 디저트의 정수.", emoji: "🍮" },
      { name: "에스카르고", description: "마늘 버터와 파슬리로 구운 달팽이 요리, 프랑스 전채의 대명사.", emoji: "🐌" },
    ],
    tips: [
      "파리 뮤지엄 패스(2·4·6일권)로 루브르, 오르세, 베르사유 등 60개 이상 박물관을 자유 입장할 수 있습니다.",
      "메트로 소매치기가 빈번하므로 가방은 앞으로 메고 귀중품은 숙소 금고에 보관하세요.",
      "레스토랑에서 'Une carafe d'eau'라고 하면 무료 물을 제공합니다.",
      "일요일 마르셰(재래시장)에서 치즈, 과일, 빵을 사서 센 강변 피크닉을 즐겨보세요.",
      "매월 첫째 일요일에는 많은 박물관이 무료 입장이니 일정을 맞춰 보세요.",
    ],
  },
  "france/paris-ile-de-france/versailles": {
    heroGradient: "from-amber-400 to-yellow-700",
    description: "베르사유 궁전은 루이 14세의 화려한 절대왕정을 상징하는 세계문화유산으로, 거대한 거울의 방과 광활한 정원이 압도적입니다. 궁전 내부의 호화로운 장식과 천장화는 바로크 예술의 정수를 보여줍니다.",
    bestTime: "4~6월, 9~10월 (봄·가을 정원이 가장 아름다움)",
    stayArea: "베르사유 시내 / 파리에서 당일치기",
    transport: "파리 RER C선 (Versailles Château Rive Gauche역)",
    districts: [
      { name: "궁전 지구", nameEn: "Palace Quarter", description: "베르사유 궁전과 정원을 중심으로 한 핵심 관광 지역.", highlights: ["거울의 방", "왕실 정원", "그랑 트리아농", "프티 트리아농"] },
      { name: "베르사유 시내", nameEn: "Versailles Town", description: "궁전 앞 노트르담 지구에 레스토랑과 카페, 재래시장이 위치.", highlights: ["노트르담 시장", "생루이 대성당", "왕의 채소밭"] },
    ],
    attractions: [
      { name: "베르사유 궁전", nameEn: "Palace of Versailles", description: "700개 이상의 방을 가진 세계에서 가장 화려한 궁전. 거울의 방은 357개 거울로 장식된 걸작.", category: "궁전", tip: "화요일 휴관, 오전 9시 개장 직후 방문하면 인파를 피할 수 있습니다." },
      { name: "왕실 정원", nameEn: "Gardens of Versailles", description: "800ha 규모의 프랑스식 정원으로 분수, 조각, 화단이 기하학적으로 배치.", category: "정원", tip: "4~10월 주말 음악 분수 쇼가 열립니다 (별도 입장료)." },
      { name: "마리 앙투아네트 영지", nameEn: "Marie Antoinette's Estate", description: "왕비가 소박한 시골 생활을 즐기던 전원 마을과 프티 트리아농 궁전.", category: "궁전" },
    ],
    dayTrips: [
      { name: "파리", nameEn: "Paris", description: "빛의 도시 파리로 돌아가 에펠탑과 루브르를 즐기세요.", travelTime: "RER C선 약 40분", gradient: "from-pink-500 to-violet-700" },
    ],
    localFood: [
      { name: "갈레트 데 루아", description: "아몬드 크림이 들어간 파이로, 프랑스 신년 전통 디저트.", emoji: "🥧" },
      { name: "프랑스식 정찬 코스", description: "전채, 메인, 치즈, 디저트로 이어지는 전통 프렌치 코스 요리.", emoji: "🍽️" },
    ],
    tips: [
      "파리 뮤지엄 패스로 베르사유 궁전 무료 입장이 가능하며 별도 줄에서 빠르게 입장합니다.",
      "정원만 관람할 경우 분수 쇼 없는 날은 무료 입장입니다.",
      "전체 관람에 최소 반나절~하루가 필요하니 충분한 시간을 확보하세요.",
    ],
  },
  "france/paris-ile-de-france/disneyland-paris": {
    heroGradient: "from-blue-400 to-purple-600",
    description: "유럽 유일의 디즈니 리조트로, 디즈니랜드 파크와 월트 디즈니 스튜디오 두 개의 테마파크로 구성되어 있습니다. 동화 속 잠자는 숲속의 공주 성을 중심으로 다양한 어트랙션이 가족 여행객에게 마법 같은 경험을 선사합니다.",
    bestTime: "4~6월, 9~10월 (성수기 인파 피하기)",
    stayArea: "디즈니 리조트 내 호텔 / 파리에서 당일치기",
    transport: "파리 RER A선 (Marne-la-Vallée Chessy역, 약 40분)",
    districts: [
      { name: "디즈니랜드 파크", nameEn: "Disneyland Park", description: "클래식 디즈니 테마파크로 잠자는 숲속의 공주 성이 중심.", highlights: ["잠자는 숲속의 공주 성", "빅 썬더 마운틴", "스페이스 마운틴", "일루미네이션 쇼"] },
      { name: "월트 디즈니 스튜디오", nameEn: "Walt Disney Studios", description: "영화 제작 테마의 파크로 어벤져스 캠퍼스가 인기.", highlights: ["어벤져스 캠퍼스", "크러쉬 코스터", "렌미의 어드벤처"] },
    ],
    attractions: [
      { name: "잠자는 숲속의 공주 성", nameEn: "Sleeping Beauty Castle", description: "디즈니랜드 파리의 상징으로 내부에 동화 스테인드글라스와 용의 동굴이 있습니다.", category: "랜드마크" },
      { name: "빅 썬더 마운틴", nameEn: "Big Thunder Mountain", description: "광산 열차 테마의 롤러코스터로 온 가족이 즐길 수 있는 인기 어트랙션.", category: "어트랙션", tip: "대기 시간이 길므로 오전 일찍 또는 퍼레이드 시간에 탑승하세요." },
    ],
    dayTrips: [],
    localFood: [
      { name: "디즈니 테마 간식", description: "미키 모양 와플, 츄러스 등 디즈니 캐릭터 테마의 스낵.", emoji: "🧇" },
      { name: "프렌치 크레페", description: "파크 내 크레페 스탠드에서 누텔라, 설탕 레몬 크레페를 즐기세요.", emoji: "🥞" },
    ],
    tips: [
      "디즈니 프리미어 액세스(유료 패스트패스)를 구매하면 대기 시간을 크게 줄일 수 있습니다.",
      "두 파크 모두 방문하려면 이틀 이상 일정을 권장합니다.",
      "파리 시내에서 RER A선으로 약 40분이면 도착합니다.",
    ],
  },
  "france/paris-ile-de-france/fontainebleau": {
    heroGradient: "from-emerald-500 to-teal-700",
    description: "퐁텐블로 궁전은 나폴레옹이 사랑한 궁전으로, 12세기부터 프랑스 왕들의 거처로 사용되어 다양한 건축 양식이 공존합니다. 베르사유보다 한적하면서도 깊은 역사적 가치를 지녀 여유로운 관람이 가능합니다.",
    bestTime: "4~10월 (봄~가을)",
    stayArea: "퐁텐블로 시내 / 파리에서 당일치기",
    transport: "파리 Gare de Lyon에서 Transilien R선 약 40분 + 버스",
    districts: [
      { name: "궁전 지구", nameEn: "Palace Area", description: "퐁텐블로 궁전과 정원이 있는 중심 관광 지역.", highlights: ["퐁텐블로 궁전", "영국식 정원", "잉어 연못"] },
      { name: "퐁텐블로 숲", nameEn: "Fontainebleau Forest", description: "25,000ha 규모의 광대한 숲으로 하이킹과 암벽등반의 명소.", highlights: ["바르비종 화가 마을", "하이킹 트레일", "볼더링 코스"] },
    ],
    attractions: [
      { name: "퐁텐블로 궁전", nameEn: "Palace of Fontainebleau", description: "르네상스부터 나폴레옹 시대까지 800년 역사를 품은 왕실 궁전. 1,500개 이상의 방.", category: "궁전", tip: "나폴레옹 1세 박물관과 중국 박물관도 함께 관람하세요." },
      { name: "퐁텐블로 숲", nameEn: "Fontainebleau Forest", description: "인상파 화가들이 사랑한 숲으로 바르비종 화파의 탄생지.", category: "자연" },
    ],
    dayTrips: [
      { name: "바르비종", nameEn: "Barbizon", description: "밀레, 루소 등 바르비종 화파의 화가 마을.", travelTime: "버스 약 15분", gradient: "from-green-500 to-lime-700" },
    ],
    localFood: [
      { name: "브리 치즈", description: "일드프랑스 지역 특산 부드러운 흰곰팡이 치즈.", emoji: "🧀" },
      { name: "파테 앙 크루트", description: "파이 반죽으로 감싼 고기 파테, 프랑스 전통 전채.", emoji: "🥧" },
    ],
    tips: [
      "베르사유에 비해 관광객이 적어 여유롭게 관람할 수 있습니다.",
      "궁전 관람 후 퐁텐블로 숲에서 산책이나 하이킹을 즐겨보세요.",
      "매월 첫째 일요일 무료 입장입니다.",
    ],
  },

  // ===== PROVENCE & COTE D'AZUR =====
  "france/provence-cote-dazur/nice": {
    heroGradient: "from-cyan-400 to-blue-600",
    description: "코트다쥐르의 중심 도시 니스는 프롬나드 데 장글레를 따라 펼쳐지는 아름다운 지중해 해변으로 유명합니다. 구시가지의 좁은 골목에는 꽃시장과 해산물 레스토랑이 가득하며, 마티스와 샤갈 미술관 등 예술적 명소도 풍부합니다.",
    bestTime: "5~10월 (여름 해변, 봄·가을 쾌적한 관광)",
    stayArea: "구시가지 (비외 니스) / 프롬나드 데 장글레 주변",
    transport: "트램, 버스 (리뉴 다쥐르 교통권)",
    districts: [
      { name: "비외 니스", nameEn: "Vieux Nice", description: "좁은 골목과 색색의 건물, 꽃시장이 있는 구시가지 핵심 지역.", highlights: ["살레야 광장 꽃시장", "니스 대성당", "성 레파라트 성당", "아이스크림 가게 페노키오"] },
      { name: "프롬나드 데 장글레", nameEn: "Promenade des Anglais", description: "7km 해안 산책로로 니스의 상징. 푸른 의자와 지중해가 어우러진 풍경.", highlights: ["영국인 산책로", "네그레스코 호텔", "해변 레스토랑"] },
      { name: "시미에 언덕", nameEn: "Cimiez", description: "마티스 미술관과 로마 유적이 있는 고급 주거 지역.", highlights: ["마티스 미술관", "로마 유적", "시미에 수도원 정원"] },
    ],
    attractions: [
      { name: "프롬나드 데 장글레", nameEn: "Promenade des Anglais", description: "니스의 상징인 7km 해안 산책로. 지중해의 코발트빛 바다와 조약돌 해변이 아름답습니다.", category: "산책로", tip: "일몰 시간대에 산책하면 황금빛 지중해를 만끽할 수 있습니다." },
      { name: "니스 구시가지", nameEn: "Old Town Nice", description: "이탈리아풍 바로크 건축과 좁은 골목, 살레야 꽃시장이 매력적인 구시가지.", category: "구시가지", tip: "살레야 시장은 월요일 골동품 시장, 화~일 꽃·식품 시장입니다." },
      { name: "성 언덕", nameEn: "Castle Hill", description: "니스 구시가지 동쪽 끝 언덕으로 니스 해변과 구항구의 파노라마 전망을 제공합니다.", category: "전망대", tip: "엘리베이터로 올라갈 수 있으며, 폭포 공원도 볼거리입니다." },
      { name: "샤갈 국립미술관", nameEn: "Musée Chagall", description: "샤갈의 성서 메시지 연작 17점이 전시된 국립미술관.", category: "미술관" },
    ],
    dayTrips: [
      { name: "모나코", nameEn: "Monaco", description: "F1 그랑프리와 몬테카를로 카지노의 초소형 공국.", travelTime: "기차 약 20분", gradient: "from-red-500 to-rose-700" },
      { name: "에즈", nameEn: "Èze", description: "절벽 위의 중세 마을로 지중해 파노라마가 장관.", travelTime: "버스 약 30분", gradient: "from-amber-400 to-orange-600" },
      { name: "칸", nameEn: "Cannes", description: "칸 영화제로 유명한 해안 도시.", travelTime: "기차 약 30분", gradient: "from-yellow-400 to-amber-600" },
    ],
    localFood: [
      { name: "소카", description: "병아리콩 가루로 만든 니스 전통 팬케이크, 바삭한 식감.", emoji: "🥞" },
      { name: "니스 샐러드", description: "참치, 올리브, 안초비, 달걀, 토마토가 들어간 니스 원조 샐러드.", emoji: "🥗" },
      { name: "라따뚜이", description: "가지, 호박, 토마토 등 프로방스 채소를 올리브유로 조리한 스튜.", emoji: "🍆" },
      { name: "피사라디에르", description: "양파 잼, 올리브, 안초비를 올린 니스식 피자.", emoji: "🍕" },
    ],
    tips: [
      "니스 해변은 자갈 해변이므로 아쿠아슈즈를 준비하면 편리합니다.",
      "프렌치 리비에라 패스로 교통 및 주요 관광지 할인 혜택을 받을 수 있습니다.",
      "구시가지에서 아이스크림 맛집 페노키오(Fenocchio)의 특이한 맛을 꼭 시도해보세요.",
      "니스에서 모나코, 칸, 에즈 등 주변 도시로 당일치기가 편리합니다.",
    ],
  },
  "france/provence-cote-dazur/marseille": {
    heroGradient: "from-sky-400 to-indigo-600",
    description: "프랑스 제2의 도시이자 최대 항구도시인 마르세유는 2,600년 역사를 지닌 다문화 도시입니다. 구항구를 중심으로 활기찬 어시장과 레스토랑이 즐비하며, 부야베스의 발상지로 유명합니다.",
    bestTime: "5~10월 (지중해성 기후로 연중 온화)",
    stayArea: "구항구 (비외 포르) 주변 / 르 파니에 지구",
    transport: "메트로, 트램, 버스, 페리",
    districts: [
      { name: "비외 포르", nameEn: "Vieux-Port", description: "마르세유의 심장부인 구항구. 어시장과 레스토랑, 카페가 즐비합니다.", highlights: ["어시장", "포르 생장", "포르 생니콜라", "뮈셈"] },
      { name: "르 파니에", nameEn: "Le Panier", description: "마르세유에서 가장 오래된 지구로 다채로운 벽화와 공방이 있는 예술적 골목.", highlights: ["비에이유 샤리테", "거리 예술", "수제 비누 가게"] },
      { name: "노트르담 드 라 가르드", nameEn: "Notre-Dame de la Garde", description: "도시를 내려다보는 언덕 위의 대성당이 있는 지역.", highlights: ["노트르담 드 라 가르드 대성당", "파노라마 전망", "마르세유 전경"] },
    ],
    attractions: [
      { name: "구항구", nameEn: "Old Port", description: "2,600년 역사의 마르세유 발상지. 매일 아침 열리는 어시장과 요트가 가득한 항구 풍경이 인상적.", category: "항구", tip: "매일 오전에 열리는 어시장에서 신선한 해산물을 구경하세요." },
      { name: "칼랑크 국립공원", nameEn: "Calanques National Park", description: "석회암 절벽과 에메랄드빛 바다가 만드는 장엄한 자연 경관. 하이킹과 보트투어 가능.", category: "자연", tip: "카시스에서 출발하는 보트 투어가 가장 인기이며, 여름에는 산불 위험으로 입장이 제한됩니다." },
      { name: "노트르담 드 라 가르드", nameEn: "Notre-Dame de la Garde", description: "마르세유 최고 지점에 위치한 대성당으로 도시와 바다를 360도 조망.", category: "성당" },
      { name: "뮈셈", nameEn: "MuCEM", description: "유럽지중해문명박물관으로 현대적 건축과 전시가 인상적인 마르세유의 랜드마크.", category: "박물관" },
    ],
    dayTrips: [
      { name: "카시스", nameEn: "Cassis", description: "칼랑크 보트투어의 출발점인 아름다운 어촌 마을.", travelTime: "버스 약 40분", gradient: "from-teal-400 to-cyan-600" },
      { name: "이프 섬", nameEn: "Château d'If", description: "몬테크리스토 백작의 배경이 된 섬 요새.", travelTime: "페리 약 20분", gradient: "from-blue-400 to-indigo-600" },
    ],
    localFood: [
      { name: "부야베스", description: "마르세유 전통 해물 스튜로, 다양한 생선과 사프란이 들어간 진한 국물.", emoji: "🍲" },
      { name: "파니스", description: "병아리콩 가루로 만든 튀김, 구항구 노점에서 즐기는 간식.", emoji: "🍟" },
      { name: "마르세유 비누", description: "올리브유로 만든 전통 비누. 먹는 것은 아니지만 마르세유의 상징적 특산품.", emoji: "🧼" },
    ],
    tips: [
      "칼랑크 하이킹은 여름에 산불 방지를 위해 입장이 제한될 수 있으니 사전 확인이 필요합니다.",
      "부야베스는 최소 2인분 이상 주문해야 하며, 정통 부야베스 레스토랑을 선택하세요.",
      "르 파니에 지구는 밤에 한적해질 수 있으니 저녁에는 구항구 중심으로 활동하세요.",
    ],
  },
  "france/provence-cote-dazur/avignon": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "교황청이 있던 중세 도시 아비뇽은 거대한 교황 궁전과 반쪽만 남은 생베네제 다리로 유명합니다. 성벽으로 둘러싸인 구시가지는 유네스코 세계문화유산으로 지정되어 있으며, 매년 7월 아비뇽 연극 축제가 열립니다.",
    bestTime: "4~10월 (7월 연극 축제 시즌)",
    stayArea: "성벽 안 구시가지",
    transport: "도보 (구시가지 컴팩트) / TGV역에서 셔틀버스",
    districts: [
      { name: "교황 궁전 지구", nameEn: "Papal Palace Quarter", description: "교황 궁전과 프티 팔레 미술관이 있는 구시가지의 핵심 지역.", highlights: ["교황 궁전", "프티 팔레 미술관", "돔 대성당", "로셰 데 돔 정원"] },
      { name: "생베네제 다리", nameEn: "Pont Saint-Bénézet Area", description: "유명한 아비뇽의 다리와 론 강변 산책로가 있는 지역.", highlights: ["생베네제 다리", "론 강변 산책", "바르틀라스 섬 전망"] },
    ],
    attractions: [
      { name: "교황 궁전", nameEn: "Palais des Papes", description: "14세기 교황청이 아비뇽에 있던 시기에 건설된 유럽 최대의 고딕 궁전.", category: "궁전", tip: "태블릿 AR 가이드가 포함된 입장권으로 당시의 화려함을 체험하세요." },
      { name: "생베네제 다리", nameEn: "Pont Saint-Bénézet", description: "동요 '아비뇽의 다리 위에서'로 유명한 12세기 다리. 현재 4개 아치만 남아있습니다.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "발랑솔 라벤더", nameEn: "Valensole Lavender Fields", description: "6~7월 보라색 라벤더 밭이 장관인 프로방스 고원.", travelTime: "차량 약 1시간 30분", gradient: "from-purple-400 to-violet-600" },
      { name: "퐁 뒤 가르", nameEn: "Pont du Gard", description: "고대 로마 수도교로 유네스코 세계유산.", travelTime: "버스 약 45분", gradient: "from-amber-400 to-stone-600" },
    ],
    localFood: [
      { name: "도피누아 그라탕", description: "감자, 크림, 치즈를 겹겹이 쌓아 오븐에 구운 프로방스 가정식.", emoji: "🥘" },
      { name: "칼리송", description: "아몬드와 설탕과일로 만든 엑상프로방스 전통 과자.", emoji: "🍬" },
    ],
    tips: [
      "7월 아비뇽 연극 축제 기간에는 숙소가 빨리 차니 최소 3개월 전 예약하세요.",
      "로셰 데 돔 정원에서 론 강과 빌뇌브 레 자비뇽의 전경을 감상하세요.",
      "라벤더 시즌(6월 중순~7월 말)에 방문하면 프로방스의 진수를 경험할 수 있습니다.",
    ],
  },
  "france/provence-cote-dazur/aix-en-provence": {
    heroGradient: "from-yellow-400 to-amber-600",
    description: "폴 세잔의 고향인 엑상프로방스는 우아한 가로수길과 분수가 어우러진 아름다운 대학 도시입니다. 쿠르 미라보 거리의 노천 카페에서 여유로운 오후를 보내며 프로방스 특유의 느긋한 삶을 체험할 수 있습니다.",
    bestTime: "4~10월",
    stayArea: "쿠르 미라보 거리 주변 / 구시가지",
    transport: "도보 (시내 중심부 컴팩트)",
    districts: [
      { name: "쿠르 미라보", nameEn: "Cours Mirabeau", description: "플라타너스 가로수길과 분수, 카페가 늘어선 엑상프로방스의 대표 거리.", highlights: ["로통드 분수", "카페 레 되 가르송", "이끼 분수"] },
      { name: "구시가지", nameEn: "Vieil Aix", description: "좁은 골목과 광장, 시장이 어우러진 매력적인 구시가지.", highlights: ["시청 광장", "재래시장", "생소뵈르 대성당"] },
    ],
    attractions: [
      { name: "세잔 아틀리에", nameEn: "Atelier Cézanne", description: "세잔이 말년에 작업하던 화실이 그대로 보존되어 있습니다.", category: "미술관", tip: "세잔이 그린 생트빅투아르 산 전망 포인트도 함께 방문하세요." },
      { name: "쿠르 미라보", nameEn: "Cours Mirabeau", description: "17세기부터 엑상프로방스의 중심 거리로 분수와 카페가 이어지는 산책 명소.", category: "거리" },
    ],
    dayTrips: [
      { name: "생트빅투아르 산", nameEn: "Montagne Sainte-Victoire", description: "세잔이 80번 이상 그린 석회암 산으로 하이킹 명소.", travelTime: "차량 약 20분", gradient: "from-slate-400 to-blue-600" },
    ],
    localFood: [
      { name: "칼리송 다엑스", description: "아몬드 페이스트와 설탕과일로 만든 엑스 전통 과자.", emoji: "🍬" },
      { name: "프로방스 로제 와인", description: "연한 핑크빛의 상큼한 프로방스 로제 와인, 여름에 제격.", emoji: "🍷" },
    ],
    tips: [
      "토요일 오전 재래시장에서 프로방스 허브, 올리브, 치즈 등을 구입하세요.",
      "세잔 아틀리에는 사전 예약을 권장합니다.",
      "마르세유에서 버스로 약 30분이면 도착합니다.",
    ],
  },
  "france/provence-cote-dazur/monaco": {
    heroGradient: "from-red-500 to-rose-700",
    description: "지중해 연안의 초소형 독립 공국 모나코는 세계적인 부유층의 휴양지이자 F1 그랑프리의 무대입니다. 몬테카를로 카지노의 화려함과 왕궁의 위엄, 해양 박물관의 볼거리가 작은 면적에 밀집해 있습니다.",
    bestTime: "4~10월 (5월 F1 그랑프리 시즌)",
    stayArea: "몬테카를로 / 니스에서 당일치기",
    transport: "버스, 공공 엘리베이터 (니스에서 기차 20분)",
    districts: [
      { name: "몬테카를로", nameEn: "Monte Carlo", description: "세계적인 카지노와 고급 호텔, 부티크가 밀집한 모나코의 중심.", highlights: ["몬테카를로 카지노", "오텔 드 파리", "카페 드 파리"] },
      { name: "모나코빌", nameEn: "Monaco-Ville", description: "왕궁과 대성당이 있는 바위 위의 구시가지.", highlights: ["모나코 왕궁", "대성당", "해양 박물관", "근위병 교대식"] },
    ],
    attractions: [
      { name: "몬테카를로 카지노", nameEn: "Monte Carlo Casino", description: "1863년 개장한 벨 에포크 양식의 세계에서 가장 유명한 카지노.", category: "랜드마크", tip: "카지노 내부 관람만 할 경우 오전에 방문하며 단정한 복장이 필요합니다." },
      { name: "모나코 왕궁", nameEn: "Prince's Palace of Monaco", description: "13세기부터 그리말디 왕가의 거처로 매일 11:55에 근위병 교대식이 열립니다.", category: "궁전" },
      { name: "해양 박물관", nameEn: "Oceanographic Museum", description: "자크 쿠스토가 관장을 역임한 100년 역사의 해양 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "니스", nameEn: "Nice", description: "코트다쥐르의 중심 도시, 프롬나드 데 장글레 해변.", travelTime: "기차 약 20분", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "바르바주앙", description: "스위스 근대와 리코타 치즈를 넣은 모나코 전통 만두.", emoji: "🥟" },
      { name: "소카", description: "병아리콩 반죽을 구운 리비에라 전통 간식.", emoji: "🥞" },
    ],
    tips: [
      "니스에서 기차로 20분이면 도착하므로 당일치기가 가장 효율적입니다.",
      "근위병 교대식은 매일 11:55에 시작하니 10분 전에 왕궁 앞에 도착하세요.",
      "카지노 입장 시 여권이 필요하며, 18세 이상만 입장 가능합니다.",
    ],
  },

  // ===== LOIRE VALLEY & CENTRAL =====
  "france/loire-valley-central/tours": {
    heroGradient: "from-green-400 to-emerald-600",
    description: "루아르 계곡 여행의 중심 거점 도시인 투르는 중세 구시가지와 활기찬 광장이 매력적인 대학 도시입니다. 루아르 와인의 본고장답게 훌륭한 레스토랑과 와이너리가 많으며, 주변 고성으로의 접근성이 뛰어납니다.",
    bestTime: "4~10월 (봄~가을)",
    stayArea: "플뤼메로 구시가지 / 기차역 주변",
    transport: "도보 + 고성 투어 미니버스 / TER 기차",
    districts: [
      { name: "플뤼메로 구시가지", nameEn: "Vieux Tours (Plumereau)", description: "중세 목조 건물과 노천 카페가 늘어선 투르의 핵심 관광 지구.", highlights: ["플뤼메로 광장", "목조 건물 거리", "카페 & 레스토랑"] },
      { name: "대성당 지구", nameEn: "Cathedral Quarter", description: "생가티앵 대성당과 미술관이 있는 문화 중심 지구.", highlights: ["생가티앵 대성당", "투르 미술관", "샤를마뉴 탑"] },
    ],
    attractions: [
      { name: "생가티앵 대성당", nameEn: "Tours Cathedral", description: "13~16세기에 걸쳐 건축된 고딕 대성당으로 아름다운 스테인드글라스가 유명합니다.", category: "성당" },
      { name: "플뤼메로 광장", nameEn: "Place Plumereau", description: "15세기 목조 건물로 둘러싸인 활기찬 광장으로 노천 카페의 중심.", category: "광장" },
    ],
    dayTrips: [
      { name: "샹보르 성", nameEn: "Château de Chambord", description: "루아르에서 가장 크고 웅장한 르네상스 성.", travelTime: "차량 약 1시간", gradient: "from-slate-400 to-zinc-600" },
      { name: "슈농소 성", nameEn: "Château de Chenonceau", description: "쉐르 강 위에 걸쳐진 '여인들의 성'.", travelTime: "기차 약 30분", gradient: "from-rose-400 to-pink-600" },
    ],
    localFood: [
      { name: "리예트 드 투르", description: "돼지고기를 장시간 조려 만든 투르 전통 스프레드.", emoji: "🥖" },
      { name: "부브레 와인", description: "루아르 계곡 대표 화이트 와인, 슈냉 블랑 품종.", emoji: "🍷" },
      { name: "타르트 타탱", description: "사과를 캐러멜라이즈하여 뒤집어 구운 프랑스 전통 파이.", emoji: "🥧" },
    ],
    tips: [
      "투르를 거점으로 미니버스 투어를 이용하면 하루에 2~3개 고성을 효율적으로 방문할 수 있습니다.",
      "화요일에 휴관하는 성이 많으니 방문 전 확인하세요.",
      "파리 몽파르나스역에서 TGV로 약 1시간 15분이면 도착합니다.",
    ],
  },
  "france/loire-valley-central/amboise": {
    heroGradient: "from-teal-400 to-cyan-600",
    description: "루아르 강변의 작은 마을 앙부아즈는 레오나르도 다 빈치가 말년을 보낸 곳으로, 클로 뤼세 성에서 그의 천재성을 엿볼 수 있습니다. 앙부아즈 왕성에서 내려다보는 루아르 강 파노라마가 장관입니다.",
    bestTime: "4~10월",
    stayArea: "앙부아즈 시내 (도보 관광 가능)",
    transport: "투르에서 기차 약 20분 / 도보",
    districts: [
      { name: "왕성 주변", nameEn: "Royal Castle Area", description: "앙부아즈 왕성과 루아르 강이 만나는 마을의 중심.", highlights: ["앙부아즈 왕성", "생위베르 예배당", "루아르 강변 산책로"] },
      { name: "클로 뤼세", nameEn: "Clos Lucé", description: "다 빈치가 3년간 거주한 저택과 정원으로 발명품 모형이 전시.", highlights: ["클로 뤼세 성", "다 빈치 정원", "발명품 전시"] },
    ],
    attractions: [
      { name: "앙부아즈 왕성", nameEn: "Château d'Amboise", description: "프랑스 왕들의 거처였던 루아르 강 위의 왕성. 다 빈치의 무덤이 있는 생위베르 예배당.", category: "고성" },
      { name: "클로 뤼세 성", nameEn: "Château du Clos Lucé", description: "다 빈치가 마지막 3년을 보낸 저택으로 그의 발명품 모형이 정원에 전시.", category: "박물관", tip: "앙부아즈 왕성과 도보 5분 거리로 함께 방문하세요." },
    ],
    dayTrips: [
      { name: "슈농소 성", nameEn: "Château de Chenonceau", description: "쉐르 강 위의 '여인들의 성'으로 루아르에서 가장 우아한 성.", travelTime: "차량 약 15분", gradient: "from-rose-400 to-pink-600" },
    ],
    localFood: [
      { name: "루아르 화이트 와인", description: "앙부아즈 주변 포도밭에서 생산되는 신선한 슈냉 블랑.", emoji: "🍷" },
      { name: "푸아르 타파", description: "배를 타르트에 올려 구운 루아르 전통 디저트.", emoji: "🍐" },
    ],
    tips: [
      "앙부아즈 왕성과 클로 뤼세는 도보 5분 거리이므로 함께 방문하세요.",
      "여름 저녁에는 왕성에서 야간 조명 쇼가 열립니다.",
    ],
  },
  "france/loire-valley-central/chambord": {
    heroGradient: "from-slate-400 to-zinc-600",
    description: "샹보르 성은 루아르 계곡에서 가장 크고 웅장한 르네상스 성으로, 프랑수아 1세가 사냥용 별장으로 건축했습니다. 다 빈치가 설계에 참여한 것으로 전해지는 이중 나선형 계단이 대표적인 볼거리입니다.",
    bestTime: "4~10월 (여름 야간 조명 쇼)",
    stayArea: "블루아에서 당일치기 / 샹보르 인근 숙소",
    transport: "블루아에서 셔틀버스 약 30분 / 차량",
    districts: [
      { name: "샹보르 성", nameEn: "Château de Chambord", description: "440개의 방과 광대한 사슴 공원으로 둘러싸인 르네상스 걸작.", highlights: ["이중 나선형 계단", "옥상 테라스", "사슴 공원", "야간 조명 쇼"] },
    ],
    attractions: [
      { name: "샹보르 성", nameEn: "Château de Chambord", description: "루아르 최대 규모의 성으로 440개의 방, 365개의 벽난로를 갖추고 있습니다.", category: "고성", tip: "옥상 테라스에 올라가면 광대한 영지와 숲의 전경을 감상할 수 있습니다." },
      { name: "이중 나선형 계단", nameEn: "Double Helix Staircase", description: "다 빈치가 설계한 것으로 전해지는 두 사람이 만나지 않고 오르내릴 수 있는 계단.", category: "건축물" },
    ],
    dayTrips: [
      { name: "블루아", nameEn: "Blois", description: "네 가지 건축 양식이 공존하는 왕성의 도시.", travelTime: "셔틀버스 약 30분", gradient: "from-indigo-400 to-blue-600" },
      { name: "슈베르니 성", nameEn: "Château de Cheverny", description: "틴틴의 물랭사르 성의 모델이 된 고전주의 양식 성.", travelTime: "차량 약 20분", gradient: "from-green-400 to-emerald-600" },
    ],
    localFood: [
      { name: "사슴고기 요리", description: "샹보르 숲에서 잡힌 사슴으로 만든 계절 특선 요리.", emoji: "🦌" },
      { name: "루아르 와인", description: "인근 포도밭의 소비뇽 블랑과 카베르네 프랑.", emoji: "🍷" },
    ],
    tips: [
      "블루아역에서 고성 셔틀버스로 샹보르, 슈베르니, 쇼몽을 하루에 둘러볼 수 있습니다.",
      "여름 저녁 야간 조명 쇼는 성벽에 투사되는 환상적인 볼거리입니다.",
      "자전거 대여도 가능하며, 숲길을 따라 사이클링하기에 좋습니다.",
    ],
  },
  "france/loire-valley-central/blois": {
    heroGradient: "from-indigo-400 to-blue-600",
    description: "블루아 성은 고딕, 르네상스, 고전주의 등 네 가지 건축 양식이 하나의 건물에 공존하는 독특한 왕성입니다. 구시가지의 경사진 골목길과 루아르 강 위의 다리에서 바라보는 성의 전경이 아름답습니다.",
    bestTime: "4~10월",
    stayArea: "블루아 구시가지 / 성 주변",
    transport: "파리 오스테를리츠역에서 기차 약 1시간 30분 / 도보",
    districts: [
      { name: "왕성 지구", nameEn: "Castle Quarter", description: "블루아 왕성과 주변 중세 골목이 있는 구시가지.", highlights: ["블루아 왕성", "르네상스 계단", "기즈 공작의 방"] },
      { name: "루아르 강변", nameEn: "Loire Riverbank", description: "자크 가브리엘 다리에서 바라보는 블루아 성과 구시가지 전경.", highlights: ["자크 가브리엘 다리", "강변 산책로", "루아르 전경"] },
    ],
    attractions: [
      { name: "블루아 왕성", nameEn: "Château de Blois", description: "프랑스 역사의 주요 사건들이 펼쳐진 왕성으로, 프랑수아 1세의 르네상스 계단이 백미.", category: "고성", tip: "여름 저녁 사운드 & 라이트 쇼가 성의 역사를 생생하게 보여줍니다." },
    ],
    dayTrips: [
      { name: "샹보르 성", nameEn: "Château de Chambord", description: "루아르 최대의 르네상스 성.", travelTime: "셔틀버스 약 30분", gradient: "from-slate-400 to-zinc-600" },
    ],
    localFood: [
      { name: "루아르 민물고기", description: "루아르 강에서 잡힌 창꼬치(브로셰) 요리.", emoji: "🐟" },
      { name: "포야르 다세 치즈", description: "루아르 계곡의 산양 치즈.", emoji: "🧀" },
    ],
    tips: [
      "블루아를 거점으로 샹보르, 슈베르니, 쇼몽 성을 당일치기로 방문할 수 있습니다.",
      "고성 셔틀버스(나베트 데 샤토) 1일권이 편리합니다.",
    ],
  },
  "france/loire-valley-central/orl-ans": {
    heroGradient: "from-yellow-500 to-orange-600",
    description: "잔 다르크가 영국군으로부터 해방시킨 역사적인 도시 오를레앙은 루아르 계곡의 북쪽 관문입니다. 매년 5월에 열리는 잔 다르크 축제가 도시 최대의 행사이며, 파리에서 기차로 약 1시간으로 접근성이 뛰어납니다.",
    bestTime: "5~10월 (5월 잔 다르크 축제)",
    stayArea: "구시가지 / 대성당 주변",
    transport: "파리에서 기차 약 1시간 / 트램, 도보",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "잔 다르크 광장과 대성당을 중심으로 한 역사적 중심부.", highlights: ["잔 다르크 광장", "생트크루아 대성당", "그로 거리"] },
    ],
    attractions: [
      { name: "생트크루아 대성당", nameEn: "Orléans Cathedral", description: "13세기부터 건축된 고딕 대성당으로 잔 다르크의 스테인드글라스가 유명합니다.", category: "성당" },
      { name: "잔 다르크의 집", nameEn: "Maison de Jeanne d'Arc", description: "잔 다르크가 오를레앙 해방 당시 머물렀던 곳을 복원한 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "샹보르 성", nameEn: "Château de Chambord", description: "루아르 최대의 르네상스 성.", travelTime: "차량 약 50분", gradient: "from-slate-400 to-zinc-600" },
    ],
    localFood: [
      { name: "오를레앙 식초", description: "14세기부터 이어진 전통 방식으로 숙성시킨 고급 와인 식초.", emoji: "🫙" },
      { name: "코티냑 도를레앙", description: "모과로 만든 오를레앙 전통 젤리 과자.", emoji: "🍬" },
    ],
    tips: [
      "파리에서 기차로 약 1시간이면 도착해 당일치기로 적합합니다.",
      "5월 잔 다르크 축제 기간에는 중세 퍼레이드와 다양한 행사가 열립니다.",
    ],
  },

  // ===== NORMANDY & BRITTANY =====
  "france/normandy-brittany/mont-saint-michel": {
    heroGradient: "from-gray-500 to-blue-700",
    description: "바다 위에 떠 있는 듯한 수도원 몽생미셸은 프랑스에서 가장 경이로운 유네스코 세계문화유산 중 하나입니다. 밀물 때 섬이 되고 썰물 때 육지와 연결되는 극적인 풍경이 천 년 넘게 순례자와 여행자를 매료시켜 왔습니다.",
    bestTime: "5~9월 (대조 시 밀물 체험 추천)",
    stayArea: "몽생미셸 섬 내부 / 본토 쪽 호텔",
    transport: "파리 몽파르나스역에서 TGV+버스 약 4시간 / 셔틀버스",
    districts: [
      { name: "수도원", nameEn: "Abbey", description: "섬 꼭대기에 위치한 베네딕도회 수도원으로 몽생미셸의 핵심.", highlights: ["수도원 회랑", "경이로운 방", "성 미카엘 예배당", "옥상 테라스 전망"] },
      { name: "그랑 뤼", nameEn: "Grande Rue", description: "수도원으로 올라가는 좁은 골목으로 기념품점과 레스토랑이 줄지어 있습니다.", highlights: ["라 메르 풀라르", "중세 건물", "성벽 전망대"] },
    ],
    attractions: [
      { name: "몽생미셸 수도원", nameEn: "Mont-Saint-Michel Abbey", description: "8세기부터 건설된 베네딕도회 수도원으로 로마네스크와 고딕 양식이 공존하는 건축의 경이.", category: "수도원", tip: "야간 개장 시 조명이 비치는 수도원이 특히 아름답습니다." },
      { name: "만조 체험", nameEn: "Bay Walk", description: "유럽 최대의 조수간만 차이(최대 15m)를 가이드와 함께 체험하는 갯벌 워킹 투어.", category: "체험", tip: "반드시 공인 가이드와 함께 참여하세요. 유사에 빠질 위험이 있습니다." },
    ],
    dayTrips: [
      { name: "생말로", nameEn: "Saint-Malo", description: "브르타뉴의 성벽 항구 도시.", travelTime: "버스 약 1시간", gradient: "from-blue-500 to-cyan-700" },
    ],
    localFood: [
      { name: "라 메르 풀라르 오믈렛", description: "1888년부터 이어진 명물 수플레 오믈렛, 몽생미셸의 상징적 요리.", emoji: "🍳" },
      { name: "프레살레 양고기", description: "바닷바람 맞으며 자란 양의 고기로 은은한 짠맛이 특징.", emoji: "🐑" },
      { name: "갈레트 & 시드르", description: "메밀 크레페와 사과주의 브르타뉴식 조합.", emoji: "🥞" },
    ],
    tips: [
      "조수 시간표를 확인하고 대조 시 방문하면 밀물의 극적인 장면을 볼 수 있습니다.",
      "섬 내부 숙소에 묵으면 관광객이 떠난 저녁과 이른 아침의 고요한 몽생미셸을 경험할 수 있습니다.",
      "본토 주차장에서 무료 셔틀버스 또는 도보(약 40분)로 섬에 접근합니다.",
      "라 메르 풀라르 오믈렛은 비싸니(약 40유로) 골목 다른 식당에서도 맛볼 수 있습니다.",
    ],
  },
  "france/normandy-brittany/rouen": {
    heroGradient: "from-stone-400 to-slate-600",
    description: "노르망디의 수도 루앙은 모네가 연작으로 그린 대성당과 잔 다르크의 최후 장소로 유명한 중세 도시입니다. 목조 가옥이 즐비한 구시가지의 대시계와 골목의 앤티크 숍이 매력적입니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 (대성당 주변)",
    transport: "파리 생라자르역에서 기차 약 1시간 30분 / 도보",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "목조 건물과 대성당, 대시계가 있는 중세 분위기의 핵심 지역.", highlights: ["루앙 대성당", "대시계 거리", "잔 다르크 광장", "구시장"] },
    ],
    attractions: [
      { name: "루앙 대성당", nameEn: "Rouen Cathedral", description: "모네가 30점 이상의 연작을 그린 고딕 대성당으로 프랑스에서 가장 높은 첨탑(151m).", category: "성당", tip: "여름 저녁 대성당 파사드에 투사되는 빛의 쇼를 놓치지 마세요." },
      { name: "대시계 거리", nameEn: "Gros-Horloge", description: "14세기 대형 천문시계가 설치된 아치와 보행자 거리로 루앙의 상징.", category: "랜드마크" },
      { name: "잔 다르크 교회", nameEn: "Church of Joan of Arc", description: "잔 다르크가 화형당한 자리에 세워진 현대적 교회로 16세기 스테인드글라스.", category: "교회" },
    ],
    dayTrips: [
      { name: "에트르타", nameEn: "Étretat", description: "코끼리 모양의 석회암 절벽으로 유명한 해안 마을.", travelTime: "차량 약 1시간 30분", gradient: "from-emerald-400 to-teal-600" },
    ],
    localFood: [
      { name: "카망베르 치즈", description: "노르망디가 원산지인 세계적으로 유명한 부드러운 치즈.", emoji: "🧀" },
      { name: "칼바도스", description: "노르망디 사과로 만든 브랜디, 식후주로 인기.", emoji: "🍎" },
    ],
    tips: [
      "파리에서 기차로 약 1시간 30분이면 도착해 당일치기가 가능합니다.",
      "구시가지의 목조 건물 골목을 걸으며 중세 분위기를 만끽하세요.",
      "여름 저녁 대성당 빛의 쇼는 무료이며, 21시 이후에 시작됩니다.",
    ],
  },
  "france/normandy-brittany/saint-malo": {
    heroGradient: "from-blue-500 to-cyan-700",
    description: "브르타뉴 북부 해안의 성벽 도시 생말로는 과거 해적과 탐험가의 도시로 번성했던 역사를 간직하고 있습니다. 완벽하게 복원된 중세 성벽 위를 걸으며 에메랄드빛 바다를 감상할 수 있습니다.",
    bestTime: "5~9월",
    stayArea: "성벽 안 인트라무로스",
    transport: "파리 몽파르나스역에서 TGV 약 2시간 30분 / 도보",
    districts: [
      { name: "인트라무로스", nameEn: "Intra-Muros", description: "성벽으로 둘러싸인 구시가지로 호텔, 레스토랑, 상점이 밀집.", highlights: ["성벽 산책로", "대성당", "생말로 성"] },
      { name: "해변 지구", nameEn: "Beach Area", description: "그랑 베, 플라주 뒤 시용 등 넓은 해변이 펼쳐진 지역.", highlights: ["그랑 베 해변", "조수 썰물 시 그랑 베 섬 도보", "서핑"] },
    ],
    attractions: [
      { name: "성벽 산책", nameEn: "Ramparts Walk", description: "생말로 구시가지를 둘러싼 성벽 위를 일주하며 바다와 도시를 조망하는 산책 코스.", category: "산책", tip: "밀물 시 파도가 성벽을 때리는 장관을 볼 수 있습니다." },
      { name: "그랑 베 해변", nameEn: "Grand Bé Beach", description: "썰물 때만 걸어갈 수 있는 섬으로 샤토브리앙의 무덤이 있습니다.", category: "해변", tip: "조수 시간을 반드시 확인하세요. 밀물 시 고립될 수 있습니다." },
    ],
    dayTrips: [
      { name: "몽생미셸", nameEn: "Mont-Saint-Michel", description: "바다 위의 수도원, 프랑스의 경이.", travelTime: "버스 약 1시간", gradient: "from-gray-500 to-blue-700" },
      { name: "디낭", nameEn: "Dinan", description: "중세 성벽과 목조 건물이 보존된 브르타뉴의 보석 같은 마을.", travelTime: "버스 약 1시간", gradient: "from-amber-400 to-stone-600" },
    ],
    localFood: [
      { name: "갈레트 (메밀 크레페)", description: "메밀가루로 만든 짭짤한 브르타뉴식 크레페, 햄·치즈·달걀 토핑.", emoji: "🥞" },
      { name: "해산물 플래터", description: "굴, 랑구스틴, 게, 소라 등을 접시에 가득 담은 해산물 모둠.", emoji: "🦀" },
      { name: "시드르", description: "브르타뉴 전통 사과 발효주로 갈레트와 최고의 궁합.", emoji: "🍎" },
    ],
    tips: [
      "성벽 위 일주는 약 1시간이 소요되며 무료입니다.",
      "썰물 때 그랑 베 섬이나 포르 나시오날까지 걸어갈 수 있지만 조수 시간을 꼭 확인하세요.",
      "해산물 레스토랑은 항구 근처보다 성벽 안쪽이 가성비가 좋습니다.",
    ],
  },
  "france/normandy-brittany/honfleur": {
    heroGradient: "from-amber-400 to-orange-600",
    description: "센 강 하구의 작은 항구 마을 옹플뢰르는 인상파 화가들이 사랑한 빛과 색채의 도시입니다. 비외 바생(구항구)의 좁고 높은 석조 건물이 물에 비치는 풍경은 그림엽서 그 자체입니다.",
    bestTime: "5~9월",
    stayArea: "구항구 주변",
    transport: "르아브르 또는 캉에서 버스 / 차량",
    districts: [
      { name: "비외 바생", nameEn: "Vieux Bassin", description: "옹플뢰르의 상징인 구항구로 좁고 높은 건물이 물에 반사되는 그림 같은 풍경.", highlights: ["구항구 풍경", "해산물 레스토랑", "갤러리"] },
    ],
    attractions: [
      { name: "비외 바생", nameEn: "Vieux Bassin", description: "인상파 화가들의 영감이 된 구항구. 요트와 석조 건물이 물에 비치는 풍경이 매혹적.", category: "항구" },
      { name: "생카트린 교회", nameEn: "Church of Saint Catherine", description: "프랑스에서 가장 큰 목조 교회로 배 목수들이 지었습니다.", category: "교회" },
      { name: "외젠 부댕 미술관", nameEn: "Eugène Boudin Museum", description: "인상파의 선구자 부댕의 작품과 노르망디 풍경화 컬렉션.", category: "미술관" },
    ],
    dayTrips: [
      { name: "에트르타", nameEn: "Étretat", description: "코끼리 코 모양의 석회암 절벽이 유명한 해안.", travelTime: "차량 약 45분", gradient: "from-emerald-400 to-teal-600" },
    ],
    localFood: [
      { name: "홍합 & 감자튀김", description: "냄비 가득 홍합과 바삭한 감자튀김, 노르망디 해안의 정석 메뉴.", emoji: "🦪" },
      { name: "크렘 노르망드", description: "노르망디 크림과 사과를 사용한 디저트.", emoji: "🍮" },
    ],
    tips: [
      "옹플뢰르는 차량 접근이 가장 편리하며, 주차장은 마을 입구에 있습니다.",
      "구항구 카페에서 여유롭게 앉아 풍경을 감상하는 것이 옹플뢰르의 핵심 경험입니다.",
      "주말에는 관광객이 많으니 평일 방문을 추천합니다.",
    ],
  },

  // ===== ALSACE & EAST =====
  "france/alsace-east/strasbourg": {
    heroGradient: "from-red-500 to-pink-700",
    description: "유럽의회가 위치한 스트라스부르는 프랑스와 독일 문화의 교차점에 있는 국제도시입니다. 유네스코 세계문화유산인 그랑딜 구시가지의 쁘띠 프랑스 지구는 운하를 따라 늘어선 하프팀버 건물이 동화 같은 풍경을 만들어냅니다.",
    bestTime: "5~9월 / 11~12월 (크리스마스 마켓)",
    stayArea: "그랑딜 (구시가지 섬) 내부",
    transport: "트램, 도보 (파리에서 TGV 약 1시간 50분)",
    districts: [
      { name: "쁘띠 프랑스", nameEn: "Petite France", description: "운하를 따라 하프팀버 건물이 늘어선 스트라스부르에서 가장 그림 같은 지구.", highlights: ["쿠베르 다리", "물레방아 건물", "운하 보트투어", "타너 거리"] },
      { name: "대성당 광장", nameEn: "Cathedral Square", description: "스트라스부르 대성당을 중심으로 한 구시가지의 핵심.", highlights: ["대성당", "카멜젤의 집", "천문시계", "광장 카페"] },
    ],
    attractions: [
      { name: "스트라스부르 대성당", nameEn: "Strasbourg Cathedral", description: "142m 높이의 첨탑을 가진 고딕 걸작으로 외벽의 정교한 조각과 천문시계가 유명합니다.", category: "성당", tip: "매일 12:30 천문시계 작동을 볼 수 있으며, 전망대(332계단)에서 도시 전경 감상 가능." },
      { name: "쁘띠 프랑스", nameEn: "Petite France", description: "중세 가죽 장인의 지구였던 운하변 하프팀버 마을. 스트라스부르의 대표 포토 스팟.", category: "구시가지", tip: "보트 투어로 운하에서 쁘띠 프랑스를 감상하면 색다른 경험입니다." },
      { name: "유럽의회", nameEn: "European Parliament", description: "EU 유럽의회 본회의장으로 무료 가이드 투어 제공.", category: "랜드마크" },
    ],
    dayTrips: [
      { name: "콜마르", nameEn: "Colmar", description: "미녀와 야수의 배경이 된 동화 같은 알자스 마을.", travelTime: "기차 약 30분", gradient: "from-fuchsia-400 to-purple-600" },
      { name: "알자스 와인 루트", nameEn: "Alsace Wine Route", description: "리슬링, 게뷔르츠트라미너 와인 산지 170km의 와인 루트.", travelTime: "차량 이용", gradient: "from-green-400 to-lime-600" },
    ],
    localFood: [
      { name: "슈크루트", description: "발효 양배추에 소시지와 돼지고기를 올린 알자스 대표 요리.", emoji: "🥬" },
      { name: "타르트 플랑베", description: "얇은 반죽에 크림, 양파, 베이컨을 올린 알자스식 피자.", emoji: "🍕" },
      { name: "쿠글로프", description: "건포도와 아몬드가 들어간 알자스 전통 빵.", emoji: "🍞" },
      { name: "리슬링 와인", description: "알자스 대표 화이트 와인으로 과일향과 미네랄이 풍부.", emoji: "🍷" },
    ],
    tips: [
      "11월 말~12월 크리스마스 마켓은 유럽에서 가장 오래되고 아름다운 것으로 유명합니다.",
      "스트라스부르 패스(1·2·3일권)로 보트투어, 대성당 전망대 등을 할인받을 수 있습니다.",
      "뱅쇼(따뜻한 와인)와 브레델레(크리스마스 쿠키)는 겨울 필수 체험입니다.",
    ],
  },
  "france/alsace-east/colmar": {
    heroGradient: "from-fuchsia-400 to-purple-600",
    description: "알자스 와인 루트의 중심에 위치한 콜마르는 디즈니 영화 '미녀와 야수'의 배경으로 알려진 동화 같은 마을입니다. 색색의 하프팀버 건물이 운하를 따라 늘어선 쁘띠 브니즈가 대표 명소입니다.",
    bestTime: "5~9월 / 11~12월 (크리스마스 마켓)",
    stayArea: "구시가지 내부",
    transport: "스트라스부르에서 기차 약 30분 / 도보",
    districts: [
      { name: "쁘띠 브니즈", nameEn: "Petite Venise", description: "운하를 따라 색색의 건물이 늘어선 '작은 베네치아' 지구.", highlights: ["운하 보트 투어", "어부의 부두", "꽃장식 다리"] },
      { name: "구시가지", nameEn: "Old Town", description: "하프팀버 건물과 광장이 이어지는 중세 마을.", highlights: ["머리의 집", "운터린덴 미술관", "프피스터의 집"] },
    ],
    attractions: [
      { name: "쁘띠 브니즈", nameEn: "Petite Venise", description: "콜마르의 하이라이트로 라우흐 강을 따라 알록달록한 건물이 늘어선 동화 같은 풍경.", category: "구시가지", tip: "작은 보트를 타고 운하를 따라 마을을 둘러보세요." },
      { name: "운터린덴 미술관", nameEn: "Musée Unterlinden", description: "이젠하임 제단화로 유명한 미술관으로 중세~현대 예술 소장.", category: "미술관" },
      { name: "메종 데 테트", nameEn: "Maison des Têtes", description: "외벽에 106개의 인물 두상이 조각된 17세기 르네상스 건물.", category: "건축물" },
    ],
    dayTrips: [
      { name: "에기스하임", nameEn: "Eguisheim", description: "프랑스에서 가장 아름다운 마을로 선정된 동심원 구조의 와인 마을.", travelTime: "버스 약 15분", gradient: "from-amber-400 to-rose-600" },
      { name: "리크위르", nameEn: "Riquewihr", description: "알자스 와인 루트의 보석으로 불리는 중세 마을.", travelTime: "버스 약 30분", gradient: "from-yellow-400 to-amber-600" },
    ],
    localFood: [
      { name: "바쿠오프", description: "감자, 양파, 돼지고기, 소고기, 양고기를 화이트 와인으로 푹 끓인 알자스 스튜.", emoji: "🥘" },
      { name: "게뷔르츠트라미너 와인", description: "리치와 장미 향이 나는 알자스 대표 화이트 와인.", emoji: "🍷" },
      { name: "브레첼", description: "독일 문화 영향을 받은 알자스식 대형 프레첼.", emoji: "🥨" },
    ],
    tips: [
      "크리스마스 마켓 시즌(11월 말~12월)에 방문하면 동화 속 크리스마스를 경험할 수 있습니다.",
      "알자스 와인 루트 마을들(에기스하임, 리크위르, 카이제르스베르크)을 함께 둘러보세요.",
      "콜마르는 프랑스에서 강수량이 가장 적은 도시 중 하나로 날씨가 좋은 편입니다.",
    ],
  },
  "france/alsace-east/dijon": {
    heroGradient: "from-yellow-600 to-amber-800",
    description: "부르고뉴 지방의 수도 디종은 세계적인 머스터드의 산지이자 부르고뉴 와인의 관문 도시입니다. 올빼미 트레일을 따라 구시가지의 주요 명소를 편리하게 둘러볼 수 있습니다.",
    bestTime: "5~10월",
    stayArea: "구시가지 (다르시 광장~리베라시옹 광장)",
    transport: "파리에서 TGV 약 1시간 35분 / 트램, 도보",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "부르고뉴 공작 궁전과 올빼미 트레일이 이어지는 역사 지구.", highlights: ["부르고뉴 공작 궁전", "노트르담 교회", "올빼미 조각상", "리베라시옹 광장"] },
    ],
    attractions: [
      { name: "부르고뉴 공작 궁전", nameEn: "Palace of the Dukes of Burgundy", description: "디종 미술관이 입주한 중세 궁전으로 필리프 선량공의 무덤이 유명합니다.", category: "궁전" },
      { name: "올빼미 트레일", nameEn: "Owl Trail", description: "땅에 박힌 올빼미 표지를 따라가면 구시가지의 22개 주요 명소를 둘러볼 수 있는 산책 코스.", category: "산책", tip: "관광안내소에서 올빼미 트레일 지도를 무료로 받을 수 있습니다." },
      { name: "디종 재래시장", nameEn: "Les Halles de Dijon", description: "에펠이 설계한 철골 구조의 시장으로 부르고뉴 식재료의 보고.", category: "시장" },
    ],
    dayTrips: [
      { name: "보 성", nameEn: "Hospices de Beaune", description: "부르고뉴 와인의 중심지 본의 15세기 자선 병원.", travelTime: "기차 약 20분", gradient: "from-purple-500 to-red-700" },
    ],
    localFood: [
      { name: "부프 부르기뇽", description: "부르고뉴 레드 와인에 소고기를 푹 조린 프랑스 대표 가정식.", emoji: "🥩" },
      { name: "에스카르고", description: "마늘 버터로 구운 부르고뉴식 달팽이 요리.", emoji: "🐌" },
      { name: "에푸아스 치즈", description: "냄새는 강하지만 맛이 깊은 부르고뉴 대표 워시드 린드 치즈.", emoji: "🧀" },
      { name: "디종 머스터드", description: "세계적으로 유명한 디종산 겨자, 강하면서도 섬세한 풍미.", emoji: "🫙" },
    ],
    tips: [
      "디종에서 본(Beaune)까지 기차로 20분이니 와이너리 투어를 겸하세요.",
      "올빼미 트레일 산책은 약 1시간 30분이 소요되며 무료입니다.",
      "레 알 시장은 화·금·토요일 오전이 가장 활기찹니다.",
    ],
  },
  "france/alsace-east/lyon": {
    heroGradient: "from-rose-500 to-red-700",
    description: "프랑스 미식의 수도로 불리는 리옹은 세계적인 셰프 폴 보퀴즈의 도시이자 유네스코 세계문화유산 구시가지를 가진 문화 도시입니다. 비외 리옹의 르네상스 건축물과 비밀 통로 트라불, 전통 부숑에서의 미식 체험이 매력적입니다.",
    bestTime: "5~10월 (12월 빛의 축제)",
    stayArea: "프레스킬 (벨쿠르 광장) / 비외 리옹",
    transport: "메트로, 트램, 버스, 푸니쿨라 (TCL 교통권)",
    districts: [
      { name: "비외 리옹", nameEn: "Vieux Lyon", description: "유럽에서 가장 큰 르네상스 구시가지로 비밀 통로 트라불이 유명합니다.", highlights: ["생장 대성당", "트라불 비밀 통로", "르네상스 건축물", "부숑 레스토랑"] },
      { name: "푸르비에르", nameEn: "Fourvière", description: "리옹을 내려다보는 언덕 위에 대성당과 로마 극장이 있는 지역.", highlights: ["푸르비에르 대성당", "로마 극장", "파노라마 전망대"] },
      { name: "프레스킬", nameEn: "Presqu'île", description: "소울 강과 론 강 사이의 반도 지역으로 리옹의 상업과 문화의 중심.", highlights: ["벨쿠르 광장", "테로 광장", "오페라 극장", "폴 보퀴즈 시장"] },
    ],
    attractions: [
      { name: "비외 리옹", nameEn: "Vieux Lyon", description: "유네스코 세계문화유산 르네상스 구시가지로 300개 이상의 트라불(비밀 통로)이 숨겨져 있습니다.", category: "구시가지", tip: "트라불은 입구에 표시가 있으며, 주민 배려를 위해 조용히 통과하세요." },
      { name: "푸르비에르 대성당", nameEn: "Basilica of Fourvière", description: "리옹의 상징인 언덕 위 대성당으로 비잔틴과 로마네스크 양식이 혼합된 화려한 내부.", category: "성당", tip: "푸니쿨라로 올라가면 편하고, 전망대에서 리옹 시내와 알프스를 조망할 수 있습니다." },
      { name: "프레스킬", nameEn: "Presqu'île", description: "벨쿠르 광장과 폴 보퀴즈 시장이 있는 리옹의 중심부로 쇼핑과 미식의 거리.", category: "지구", tip: "폴 보퀴즈 시장(Les Halles)에서 리옹의 미식 재료를 구경하고 시식하세요." },
      { name: "폴 보퀴즈 시장", nameEn: "Les Halles de Lyon Paul Bocuse", description: "리옹 미식의 정수를 맛볼 수 있는 실내 식품 시장으로 48개 상점 입주.", category: "시장" },
    ],
    dayTrips: [
      { name: "페루주", nameEn: "Pérouges", description: "중세 성벽 마을로 프랑스에서 가장 아름다운 마을 중 하나.", travelTime: "기차+버스 약 40분", gradient: "from-amber-400 to-stone-600" },
      { name: "보졸레 와인 지역", nameEn: "Beaujolais", description: "보졸레 누보로 유명한 와인 산지.", travelTime: "차량 약 40분", gradient: "from-purple-400 to-rose-600" },
    ],
    localFood: [
      { name: "크넬", description: "브로셰(창꼬치) 무스를 크림 소스에 오븐 구이한 리옹의 대표 요리.", emoji: "🐟" },
      { name: "리옹 소시지", description: "돼지고기와 피스타치오가 들어간 굵은 리옹식 소시지.", emoji: "🌭" },
      { name: "프랄린 타르트", description: "분홍빛 프랄린 아몬드를 올린 리옹 전통 디저트.", emoji: "🥧" },
      { name: "코코뱅", description: "부르고뉴 레드 와인에 닭고기를 조린 프랑스 가정식의 정수.", emoji: "🍗" },
    ],
    tips: [
      "부숑(Bouchon) 레스토랑에서 점심 코스를 즐기면 합리적인 가격에 리옹 미식을 경험할 수 있습니다.",
      "12월 빛의 축제(Fête des Lumières) 기간에는 도시 전체가 빛의 예술로 물듭니다.",
      "리옹 시티카드(1·2·3일)로 대중교통, 박물관, 보트투어를 포함하여 이용할 수 있습니다.",
      "비외 리옹의 트라불은 대부분 오전 8시~저녁 7시 30분까지만 열려 있습니다.",
    ],
  },

  // ===== SOUTHWEST & BORDEAUX =====
  "france/southwest-bordeaux/bordeaux": {
    heroGradient: "from-purple-500 to-red-700",
    description: "세계 와인의 수도 보르도는 18세기 고전주의 건축물이 가득한 '달의 항구' 유네스코 세계문화유산 도시입니다. 가론 강변의 물의 거울 광장은 세계에서 가장 큰 수반사 조형물로 인기 촬영 명소입니다.",
    bestTime: "5~10월 (9~10월 포도 수확 시즌)",
    stayArea: "생피에르 지구 / 생카트린 거리 주변",
    transport: "트램, 버스 (TBM 교통권) / 파리에서 TGV 약 2시간",
    districts: [
      { name: "생피에르 지구", nameEn: "Saint-Pierre", description: "보르도 구시가지의 핵심으로 좁은 골목과 와인 바가 밀집.", highlights: ["부르스 광장", "물의 거울", "생피에르 교회", "와인 바"] },
      { name: "샤르트롱", nameEn: "Chartrons", description: "과거 와인 상인들의 지구로 현재는 앤티크 숍과 갤러리가 모인 트렌디한 지역.", highlights: ["앤티크 숍 거리", "시테 뒤 뱅", "가론 강변 산책"] },
    ],
    attractions: [
      { name: "부르스 광장 & 물의 거울", nameEn: "Place de la Bourse & Miroir d'Eau", description: "18세기 부르스 광장 앞 세계 최대의 수반사 조형물. 저녁에 조명이 반사되는 풍경이 환상적.", category: "광장", tip: "여름 저녁에 방문하면 물안개와 반사 효과가 번갈아 나타나 최고의 포토 스팟." },
      { name: "시테 뒤 뱅", nameEn: "Cité du Vin", description: "와인을 주제로 한 체험형 박물관으로 전시관 관람 후 8층 전망대에서 와인 한 잔을 즐길 수 있습니다.", category: "박물관", tip: "입장권에 8층 벨베데르 와인 시음이 포함되어 있습니다." },
      { name: "생탄드레 대성당", nameEn: "Bordeaux Cathedral", description: "유네스코 세계유산 산티아고 순례길의 일부인 11세기 로마네스크-고딕 대성당.", category: "성당" },
      { name: "생카트린 거리", nameEn: "Rue Sainte-Catherine", description: "유럽에서 가장 긴 보행자 쇼핑 거리(약 1.2km).", category: "쇼핑" },
    ],
    dayTrips: [
      { name: "생테밀리옹", nameEn: "Saint-Émilion", description: "유네스코 세계유산 와인 마을로 보르도 와인의 정수.", travelTime: "기차 약 35분", gradient: "from-red-500 to-rose-700" },
      { name: "메독 와이너리", nameEn: "Médoc Wineries", description: "마고, 라피트, 무통 로칠드 등 그랑크뤼 와이너리.", travelTime: "차량 약 1시간", gradient: "from-purple-500 to-indigo-700" },
      { name: "아르카숑 만", nameEn: "Arcachon Bay", description: "필라 사구(유럽 최대 모래 언덕)와 굴 양식장.", travelTime: "기차 약 50분", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "까눌레", description: "바닐라와 럼이 향기로운 보르도 전통 구리 틀 구움과자.", emoji: "🧁" },
      { name: "앙트르코트 보르들레즈", description: "보르도 와인 소스와 샬롯을 곁들인 스테이크.", emoji: "🥩" },
      { name: "보르도 와인", description: "메독, 생테밀리옹, 포므롤 등 세계 최고의 와인 산지.", emoji: "🍷" },
      { name: "굴", description: "아르카숑 만에서 양식한 신선한 굴, 화이트 와인과 함께.", emoji: "🦪" },
    ],
    tips: [
      "보르도 시티패스로 트램, 시테 뒤 뱅, 보트투어 등을 포함하여 이용 가능합니다.",
      "와이너리 투어는 사전 예약이 필수이며, 생테밀리옹은 기차로 접근 가능합니다.",
      "트램은 구시가지 구간에서 경관 보호를 위해 전선 없이 지상 전력으로 운행됩니다.",
      "물의 거울은 여름 오후~저녁이 가장 아름답습니다.",
    ],
  },
  "france/southwest-bordeaux/toulouse": {
    heroGradient: "from-rose-400 to-pink-600",
    description: "장밋빛 도시(La Ville Rose)라는 별명을 가진 툴루즈는 붉은 벽돌 건물이 석양에 물들어 아름다운 남서부 최대 도시입니다. 에어버스 본사가 있어 항공우주 박물관이 특별한 볼거리이며, 활기찬 학생 도시의 에너지를 느낄 수 있습니다.",
    bestTime: "4~10월",
    stayArea: "카피톨 광장 주변 / 생시프리앵 지구",
    transport: "메트로, 트램, 버스",
    districts: [
      { name: "카피톨 지구", nameEn: "Capitole Quarter", description: "툴루즈의 심장부로 시청과 카페, 상점이 밀집한 활기찬 광장.", highlights: ["카피톨 광장", "시청 내부 오페라 극장", "생세르냉 바실리카"] },
    ],
    attractions: [
      { name: "카피톨 광장", nameEn: "Place du Capitole", description: "툴루즈의 중심 광장으로 붉은 벽돌 시청과 노천 카페가 어우러진 활기찬 공간.", category: "광장" },
      { name: "시테 드 레스파스", nameEn: "Cité de l'Espace", description: "에어버스 도시답게 우주항공을 체험할 수 있는 테마파크형 박물관.", category: "박물관", tip: "아리안 5 로켓 실물 모형과 미르 우주정거장 체험이 하이라이트." },
      { name: "생세르냉 바실리카", nameEn: "Basilique Saint-Sernin", description: "유럽 최대의 로마네스크 교회로 산티아고 순례길의 주요 정류장.", category: "교회" },
    ],
    dayTrips: [
      { name: "카르카손", nameEn: "Carcassonne", description: "이중 성벽의 중세 요새 도시.", travelTime: "기차 약 50분", gradient: "from-stone-500 to-amber-700" },
      { name: "알비", nameEn: "Albi", description: "툴루즈 로트렉의 고향이자 붉은 벽돌 대성당의 도시.", travelTime: "기차 약 1시간", gradient: "from-red-500 to-rose-700" },
    ],
    localFood: [
      { name: "카술레", description: "오리 콩피, 소시지, 흰 콩을 오래 끓인 남서부 전통 스튜.", emoji: "🥘" },
      { name: "소시스 드 툴루즈", description: "거친 돼지고기로 만든 두꺼운 툴루즈식 소시지.", emoji: "🌭" },
      { name: "바이올렛 디저트", description: "툴루즈의 상징인 제비꽃으로 만든 캔디와 디저트.", emoji: "💜" },
    ],
    tips: [
      "카피톨 광장에서 석양에 붉게 물드는 건물을 감상하세요.",
      "미디 운하를 따라 자전거를 타거나 산책하는 것도 추천합니다.",
      "시테 드 레스파스는 반나절 이상 소요되니 충분한 시간을 확보하세요.",
    ],
  },
  "france/southwest-bordeaux/carcassonne": {
    heroGradient: "from-stone-500 to-amber-700",
    description: "유럽에서 가장 완벽하게 보존된 중세 요새 도시 카르카손은 이중 성벽과 52개의 탑이 장관을 이루는 유네스코 세계문화유산입니다. 마치 중세 시대로 시간 여행을 떠나온 듯한 성벽 위 산책이 압도적입니다.",
    bestTime: "4~10월 (7월 14일 불꽃축제)",
    stayArea: "시테 (성벽 안) / 바스티드 생루이 (신시가지)",
    transport: "파리에서 TGV 약 5시간 / 툴루즈에서 기차 약 50분",
    districts: [
      { name: "시테", nameEn: "La Cité", description: "이중 성벽으로 둘러싸인 중세 요새 도시로 호텔, 레스토랑, 상점이 입주.", highlights: ["이중 성벽", "콩탈 성", "생나제르 대성당", "성벽 산책로"] },
      { name: "바스티드 생루이", nameEn: "Bastide Saint-Louis", description: "성벽 밖 신시가지로 현지인들의 생활 중심지.", highlights: ["카르노 광장 시장", "카날 뒤 미디", "레스토랑"] },
    ],
    attractions: [
      { name: "시테 드 카르카손", nameEn: "Cité de Carcassonne", description: "3km 이중 성벽과 52개 탑으로 이루어진 유럽 최대의 중세 요새 도시.", category: "요새", tip: "성벽 위 산책은 무료이며, 콩탈 성 내부 입장은 유료입니다." },
      { name: "콩탈 성", nameEn: "Château Comtal", description: "시테 내부의 12세기 백작의 성으로 성벽과 탑에서 피레네 산맥 조망 가능.", category: "고성" },
    ],
    dayTrips: [
      { name: "카날 뒤 미디", nameEn: "Canal du Midi", description: "유네스코 세계유산 운하를 따라 보트 또는 자전거 여행.", travelTime: "도보 접근 가능", gradient: "from-green-400 to-teal-600" },
    ],
    localFood: [
      { name: "카술레", description: "오리 콩피, 소시지, 흰 콩을 토기에 담아 오래 끓인 카르카손의 대표 요리.", emoji: "🥘" },
      { name: "오리 콩피", description: "오리 다리를 오리 기름에 천천히 조린 남서부 전통 요리.", emoji: "🦆" },
    ],
    tips: [
      "시테 내부는 낮에 관광객으로 붐비므로 이른 아침이나 저녁에 방문하면 한적합니다.",
      "7월 14일 혁명 기념일에는 시테 위로 장관의 불꽃놀이가 펼쳐집니다.",
      "신시가지의 카르노 광장 시장(화·토)에서 현지 식재료를 구경하세요.",
    ],
  },
  "france/southwest-bordeaux/biarritz": {
    heroGradient: "from-teal-400 to-blue-600",
    description: "대서양 연안의 고급 해양 리조트 비아리츠는 유럽 서핑의 메카이자 나폴레옹 3세의 아내가 사랑한 휴양지입니다. 그랑드 플라주 해변과 성모 바위 전망대에서 바라보는 대서양이 장관입니다.",
    bestTime: "6~9월 (해변 & 서핑 시즌)",
    stayArea: "그랑드 플라주 주변 / 시내 중심부",
    transport: "보르도에서 TGV 약 2시간 / 시내 도보+버스",
    districts: [
      { name: "그랑드 플라주", nameEn: "Grande Plage", description: "비아리츠 중심부의 대형 해변으로 서핑과 해수욕의 중심.", highlights: ["서핑", "해변 카페", "카지노", "호텔 뒤 팔레"] },
      { name: "성모 바위", nameEn: "Rocher de la Vierge", description: "바위 위 성모상이 있는 전망대로 대서양 파노라마가 장관.", highlights: ["성모 바위 전망대", "철교", "대서양 파도"] },
    ],
    attractions: [
      { name: "그랑드 플라주", nameEn: "Grande Plage", description: "비아리츠의 대표 해변으로 서핑 초보자부터 상급자까지 즐길 수 있습니다.", category: "해변", tip: "서핑 레슨은 해변 근처 서핑 학교에서 반나절 코스로 가능합니다." },
      { name: "성모 바위", nameEn: "Rocher de la Vierge", description: "나폴레옹 3세가 건설한 철교로 연결된 바위 위 전망대. 대서양의 파도가 장관.", category: "전망대" },
      { name: "해양 박물관", nameEn: "Aquarium de Biarritz", description: "비스케이만 해양 생태를 소개하는 수족관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "산세바스티안", nameEn: "San Sebastián", description: "스페인 바스크 지방의 미식 도시, 핀초스의 본고장.", travelTime: "차량 약 40분 (국경 넘기)", gradient: "from-red-400 to-orange-600" },
      { name: "바이욘", nameEn: "Bayonne", description: "바스크 초콜릿의 도시이자 바스크 문화의 중심지.", travelTime: "기차 약 10분", gradient: "from-green-500 to-emerald-700" },
    ],
    localFood: [
      { name: "바스크 케이크", description: "체리잼 또는 커스터드 크림이 들어간 바스크 전통 타르트.", emoji: "🥧" },
      { name: "치피론", description: "잉크 소스로 조리한 바스크식 오징어 요리.", emoji: "🦑" },
      { name: "바이욘 초콜릿", description: "프랑스에서 가장 오래된 초콜릿 생산지인 인근 바이욘의 초콜릿.", emoji: "🍫" },
      { name: "핀초스", description: "스페인 바스크의 영향을 받은 작은 타파스 스타일 안주.", emoji: "🍢" },
    ],
    tips: [
      "여름 성수기에는 해변이 매우 붐비므로 오전 일찍 자리를 잡으세요.",
      "산세바스티안까지 차로 40분이니 스페인 바스크 당일치기를 추천합니다.",
      "비아리츠는 대서양 기후로 여름에도 선선할 수 있으니 가벼운 겉옷을 챙기세요.",
    ],
  },
};

export const franceAttractionDetails: Record<string, AttractionDetail> = {
  // ===== PARIS =====
  "france/paris-ile-de-france/paris/eiffel-tower": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "1889년 파리 만국박람회를 위해 구스타브 에펠이 설계한 높이 330m의 철탑. 건설 당시 세계에서 가장 높은 건축물이었으며, 현재 파리와 프랑스를 대표하는 상징입니다. 매년 약 700만 명이 방문하는 세계에서 가장 많은 관광객이 찾는 유료 기념물입니다.",
    history: "1889년 프랑스 혁명 100주년 기념 만국박람회를 위해 건설되었으며, 원래 20년 후 철거 예정이었으나 무선통신 안테나로 활용되면서 존속되었습니다. 처음에는 파리 시민들의 반대가 심했으나 지금은 프랑스의 가장 사랑받는 랜드마크가 되었습니다.",
    visitInfo: {
      hours: "매일 09:30~23:45 (여름 09:00~00:45)",
      admission: "엘리베이터 2층 €18.10, 정상 €28.30 / 계단 2층 €11.80",
      address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
      website: "https://www.toureiffel.paris",
    },
    highlights: [
      "2층 전망대에서 파리 시내 360도 파노라마",
      "정상(276m)에서 구스타브 에펠의 복원된 사무실 구경",
      "1층 투명 유리 바닥 체험",
      "매시 정각 5분간 반짝이는 야간 조명쇼",
      "트로카데로 광장에서 바라보는 에펠탑 전경",
    ],
    nearbyAttractions: ["트로카데로 광장", "샹 드 마르스 공원", "앵발리드 (나폴레옹 묘소)", "센 강 유람선"],
    photoTips: "트로카데로 광장에서 정면 사진이 가장 클래식하며, 비르하켐 다리에서 찍으면 에펠탑과 센 강을 함께 담을 수 있습니다. 야간 조명쇼는 매시 정각에 5분간 진행됩니다.",
    tips: [
      "온라인 사전 예약이 필수이며, 2~3개월 전에 예매해야 원하는 시간대를 확보할 수 있습니다.",
      "계단으로 2층까지 올라가면 대기 시간이 짧고 요금도 저렴합니다(674계단).",
      "일몰 1시간 전에 올라가면 낮과 야경을 모두 감상할 수 있습니다.",
      "에펠탑 야간 조명쇼 사진은 저작권이 있으므로 상업적 사용에 주의하세요.",
    ],
  },
  "france/paris-ile-de-france/paris/louvre-museum": {
    heroGradient: "from-amber-600 to-yellow-800",
    description: "세계 최대 규모의 미술관으로 38만점 이상의 작품을 소장하고 있으며, 그 중 약 35,000점이 상설 전시됩니다. 중세 요새에서 왕궁을 거쳐 미술관으로 변모한 800년 역사의 건물 자체도 볼거리입니다.",
    history: "12세기 필리프 2세가 요새로 건설한 후, 프랑수아 1세부터 왕궁으로 사용되었습니다. 1793년 프랑스 혁명 이후 공공 박물관으로 개방되었으며, 1989년 I.M. 페이가 설계한 유리 피라미드가 새로운 입구로 추가되었습니다.",
    visitInfo: {
      hours: "수~월 09:00~18:00 (수·금 야간 21:45까지) / 화요일 휴관",
      admission: "성인 €22 / 18세 미만 무료 / 매월 첫째 토요일 야간 무료",
      address: "Rue de Rivoli, 75001 Paris",
      website: "https://www.louvre.fr",
    },
    highlights: [
      "모나리자 (레오나르도 다 빈치)",
      "밀로의 비너스 (고대 그리스 조각)",
      "사모트라케의 니케 (승리의 여신상)",
      "나폴레옹 3세의 아파트먼트",
      "유리 피라미드와 역피라미드",
      "들라크루아의 '민중을 이끄는 자유의 여신'",
    ],
    nearbyAttractions: ["튀일리 정원", "팔레 루아얄", "오르세 미술관 (도보 15분)", "퐁네프 다리"],
    photoTips: "유리 피라미드는 해질녘이나 야간에 조명이 켜진 상태에서 촬영하면 가장 인상적입니다. 내부에서는 대계단의 니케 여신상과 모나리자 방이 포토 스팟입니다.",
    tips: [
      "수·금요일 야간 개관(21:45까지)을 이용하면 훨씬 한적하게 관람할 수 있습니다.",
      "모나리자는 항상 인파가 많으므로 개관 직후 또는 폐관 1시간 전에 방문하세요.",
      "전체 관람에 최소 반나절이 필요하며, 관심 분야를 미리 정해서 효율적으로 돌아보세요.",
      "파리 뮤지엄 패스 소지자는 별도 줄에서 빠르게 입장 가능합니다.",
    ],
  },
  "france/paris-ile-de-france/paris/montmartre-sacr--c-ur": {
    heroGradient: "from-white to-rose-300",
    description: "파리 북쪽 해발 130m 언덕 위에 자리한 사크레쾨르 대성당과 예술가의 마을 몽마르트르. 르누아르, 모딜리아니, 피카소 등 수많은 예술가가 거주하며 작품 활동을 한 보헤미안 문화의 성지입니다.",
    history: "19세기 말 보불전쟁과 파리 코뮌의 희생자를 추모하기 위해 1875년부터 1914년까지 건설되었습니다. 로마노-비잔틴 양식의 하얀 대성당은 트라베르틴 석회암으로 지어져 비가 올수록 하얗게 빛나는 특성이 있습니다.",
    visitInfo: {
      hours: "대성당 매일 06:00~22:30 / 돔 전망대 매일 10:00~18:30",
      admission: "대성당 무료 / 돔 전망대 €7",
      address: "35 Rue du Chevalier de la Barre, 75018 Paris",
    },
    highlights: [
      "대성당 앞 계단에서 파리 시내 전경 감상",
      "돔 전망대에서 300단 계단을 올라 파리 최고의 360도 전망",
      "테르트르 광장에서 거리 화가들의 초상화 그리기",
      "몽마르트르 포도밭 (10월 포도 수확 축제)",
      "물랭 루주 (외관 감상)",
    ],
    nearbyAttractions: ["테르트르 광장", "물랭 루주", "달리다 광장", "벽을 통과하는 남자 조각상"],
    photoTips: "대성당 정면 사진은 아래쪽 계단에서 올려다보며 찍으면 웅장함이 살아납니다. 테르트르 광장은 오전에 방문하면 인파 없이 촬영 가능합니다.",
    tips: [
      "푸니쿨라(케이블카)를 타면 언덕 아래에서 편하게 올라갈 수 있습니다(메트로 티켓 사용 가능).",
      "이 지역은 소매치기와 팔찌 사기꾼이 많으니 주의하세요.",
      "저녁에 대성당 계단에서 바라보는 파리 야경이 아름답습니다.",
    ],
  },
  "france/paris-ile-de-france/paris/notre-dame-cathedral": {
    heroGradient: "from-stone-500 to-gray-800",
    description: "파리 시테 섬에 위치한 850년 역사의 고딕 건축 걸작. 빅토르 위고의 소설 '노트르담의 꼽추'로 세계적으로 유명하며, 2019년 대화재를 겪은 후 복원되어 2024년 12월 재개장했습니다.",
    history: "1163년 착공하여 약 200년에 걸쳐 완공된 프랑스 고딕 건축의 정수입니다. 프랑스 혁명 시기 훼손되었다가 19세기에 비올레르뒤크에 의해 복원되었고, 2019년 4월 화재로 첨탑과 지붕이 소실된 후 5년간의 대규모 복원을 거쳐 재개장되었습니다.",
    visitInfo: {
      hours: "매일 08:00~19:00 (주말 ~19:30)",
      admission: "성당 내부 무료 / 탑 전망대 €16",
      address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris",
      website: "https://www.notredamedeparis.fr",
    },
    highlights: [
      "복원된 첨탑과 지붕의 새로운 모습",
      "서쪽 파사드의 세 개 포탈 조각",
      "장미 창(스테인드글라스) - 남쪽 13m 직경",
      "플라잉 버트레스 (외부 지지 구조)",
      "탑 전망대에서 키메라 조각과 파리 전경",
    ],
    nearbyAttractions: ["생트샤펠", "콩시에르주리", "셰익스피어 앤 컴퍼니 서점", "센 강 유람선"],
    photoTips: "센 강 건너편 생미셸 다리에서 바라보는 측면 전경이 가장 아름답습니다. 플라잉 버트레스는 뒤편 정원에서 잘 보입니다.",
    tips: [
      "화재 후 재개장으로 방문객이 매우 많으니 온라인 예약을 권장합니다.",
      "근처 생트샤펠의 스테인드글라스도 함께 방문하면 좋습니다.",
      "시테 섬 주변 센 강변 산책과 함께 여유롭게 즐기세요.",
    ],
  },
  "france/paris-ile-de-france/paris/arc-de-triomphe": {
    heroGradient: "from-gray-600 to-slate-800",
    description: "나폴레옹이 아우스터리츠 전투 승리를 기념하여 건설을 명한 50m 높이의 개선문. 12개 대로가 방사형으로 뻗어나가는 에투알 광장(현 샤를 드 골 광장)의 중심에 우뚝 서 있습니다.",
    history: "1806년 나폴레옹의 명으로 착공하여 1836년에 완공되었습니다. 개선문 아래에는 제1차 세계대전 무명용사의 무덤과 영원의 불꽃이 있으며, 매일 18:30에 헌화식이 거행됩니다.",
    visitInfo: {
      hours: "매일 10:00~23:00 (10~3월 ~22:30)",
      admission: "성인 €16 / 18세 미만 무료",
      address: "Place Charles de Gaulle, 75008 Paris",
      website: "https://www.paris-arc-de-triomphe.fr",
    },
    highlights: [
      "옥상 전망대에서 샹젤리제 대로와 에펠탑 조망",
      "12개 대로가 별 모양으로 뻗어나가는 에투알 광장 전경",
      "개선문 외벽의 대형 부조 조각",
      "무명용사의 무덤과 영원의 불꽃",
      "샹젤리제 대로에서 바라보는 개선문",
    ],
    nearbyAttractions: ["샹젤리제 대로", "그랑 팔레", "콩코르드 광장", "루이뷔통 재단 미술관"],
    photoTips: "샹젤리제 대로 중앙에서 개선문을 정면으로 촬영하는 것이 클래식합니다. 옥상에서는 에펠탑 방향으로 촬영하면 파리를 대표하는 사진을 얻을 수 있습니다.",
    tips: [
      "광장을 건너는 지하도를 이용해야 하며 절대 도로를 횡단하지 마세요.",
      "일몰 시간에 방문하면 샹젤리제 방향으로 석양이 지는 장관을 감상할 수 있습니다.",
      "파리 뮤지엄 패스로 무료 입장이 가능합니다.",
    ],
  },
  "france/paris-ile-de-france/paris/mus-e-d-orsay": {
    heroGradient: "from-indigo-400 to-purple-700",
    description: "1900년 만국박람회를 위해 건설된 오르세 기차역을 개조한 미술관으로, 1848~1914년의 인상파 및 후기 인상파 걸작을 세계 최대 규모로 소장하고 있습니다. 모네, 르누아르, 드가, 세잔, 고흐, 고갱 등의 명작이 총집합해 있습니다.",
    history: "1900년 만국박람회를 위한 철도역으로 건설되었으나 1939년 폐역된 후, 1986년 미술관으로 재개관했습니다. 보자르 양식의 기차역 건물을 살린 독특한 전시 공간이 특징입니다.",
    visitInfo: {
      hours: "화~일 09:30~18:00 (목 야간 21:45까지) / 월요일 휴관",
      admission: "성인 €16 / 18세 미만 무료 / 매월 첫째 일요일 무료",
      address: "1 Rue de la Légion d'Honneur, 75007 Paris",
      website: "https://www.musee-orsay.fr",
    },
    highlights: [
      "모네 '수련', '인상, 해돋이'",
      "르누아르 '물랭 드 라 갈레트의 무도회'",
      "고흐 '별이 빛나는 밤에', '오베르의 교회'",
      "드가 '무용 수업'",
      "5층 대형 시계 뒤편의 센 강 전망",
      "기차역을 개조한 독특한 건축 공간",
    ],
    nearbyAttractions: ["루브르 박물관 (도보 15분)", "오랑주리 미술관", "튀일리 정원", "로댕 미술관"],
    photoTips: "5층의 대형 시계 뒤편에서 센 강과 몽마르트르를 배경으로 시계를 프레임 삼아 찍는 사진이 인기입니다.",
    tips: [
      "목요일 야간 개관(21:45까지)을 이용하면 여유롭게 감상할 수 있습니다.",
      "5층부터 시작하여 내려오면서 관람하는 것이 효율적입니다.",
      "루브르와 달리 규모가 적당하여 반나절이면 주요 작품을 볼 수 있습니다.",
      "파리 뮤지엄 패스로 무료 입장이 가능합니다.",
    ],
  },

  // ===== NICE =====
  "france/provence-cote-dazur/nice/promenade-des-anglais": {
    heroGradient: "from-cyan-400 to-blue-600",
    description: "니스를 상징하는 7km 해안 산책로로 '영국인 산책로'라는 뜻입니다. 19세기 영국 상류층이 겨울 휴양지로 니스를 찾으며 조성되었으며, 코발트빛 지중해 바다와 조약돌 해변, 야자수가 어우러진 풍경이 아름답습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Promenade des Anglais, 06000 Nice",
    },
    highlights: [
      "7km 해안을 따라 이어지는 산책 및 조깅 코스",
      "유명한 파란 의자(Chaises Bleues)에 앉아 바다 감상",
      "네그레스코 호텔의 벨 에포크 건축",
      "일몰 시 황금빛으로 물드는 지중해",
    ],
    nearbyAttractions: ["니스 구시가지", "성 언덕", "마세나 광장", "니스 현대미술관"],
    photoTips: "일몰 시간에 파란 의자와 함께 지중해를 배경으로 촬영하면 니스의 감성을 담을 수 있습니다. 성 언덕에서 내려다보는 프롬나드 전경도 추천합니다.",
    tips: [
      "해변은 자갈이므로 아쿠아슈즈를 준비하세요.",
      "산책로를 따라 자전거 대여(Vélo Bleu) 스테이션이 곳곳에 있습니다.",
      "여름에는 이른 아침이나 저녁 산책이 시원하고 쾌적합니다.",
    ],
  },
  "france/provence-cote-dazur/nice/old-town-nice": {
    heroGradient: "from-orange-400 to-red-600",
    description: "비외 니스(Vieux Nice)라 불리는 구시가지는 이탈리아풍 바로크 건축물과 좁은 골목, 살레야 꽃시장이 어우러진 니스의 핵심 관광 지역입니다. 소카, 니스 샐러드 등 현지 음식을 맛볼 수 있는 레스토랑과 아이스크림 가게가 가득합니다.",
    visitInfo: {
      hours: "상시 개방 / 살레야 시장: 화~일 06:00~17:30, 월 골동품 시장",
      admission: "무료",
      address: "Vieux Nice, 06300 Nice",
    },
    highlights: [
      "살레야 광장 꽃·과일·채소 시장",
      "좁은 골목길의 바로크 건축물",
      "페노키오(Fenocchio) 아이스크림 100여 가지 맛",
      "성 레파라트 대성당",
      "현지 소카와 니스 샐러드 맛보기",
    ],
    nearbyAttractions: ["프롬나드 데 장글레", "성 언덕", "니스 대성당", "마세나 광장"],
    tips: [
      "살레야 시장은 화~일요일 오전이 가장 활기차며 월요일은 골동품 시장입니다.",
      "구시가지 골목의 소규모 레스토랑에서 소카와 니스 샐러드를 꼭 맛보세요.",
      "좁은 골목에서 소매치기에 주의하세요.",
    ],
  },
  "france/provence-cote-dazur/nice/castle-hill": {
    heroGradient: "from-green-500 to-teal-700",
    description: "니스 구시가지 동쪽 끝에 위치한 성 언덕(Colline du Château)은 니스에서 가장 높은 전망대로 프롬나드 데 장글레 해변, 구항구, 구시가지를 한눈에 조망할 수 있는 최고의 전망 포인트입니다.",
    visitInfo: {
      hours: "4~9월 08:00~20:00 / 10~3월 08:00~18:00",
      admission: "무료 / 엘리베이터 무료",
      address: "Colline du Château, 06300 Nice",
    },
    highlights: [
      "니스 해안선과 프롬나드 데 장글레 파노라마 전망",
      "구항구(Port Lympia)의 다채로운 건물 조망",
      "인공 폭포와 공원 산책",
      "고대 성터 유적",
    ],
    nearbyAttractions: ["니스 구시가지", "니스 구항구", "프롬나드 데 장글레"],
    photoTips: "서쪽 전망대에서 프롬나드 해변을, 동쪽 전망대에서 구항구를 촬영할 수 있습니다. 일몰 시간대에 방문하면 최고의 사진을 얻을 수 있습니다.",
    tips: [
      "구시가지에서 엘리베이터를 타면 편하게 올라갈 수 있습니다.",
      "도보로도 올라갈 수 있으며 계단길은 약 15~20분 소요됩니다.",
      "물을 미리 준비하세요. 여름에는 매우 더울 수 있습니다.",
    ],
  },

  // ===== MARSEILLE =====
  "france/provence-cote-dazur/marseille/old-port": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "마르세유의 역사가 시작된 2,600년 된 구항구(Vieux-Port). 기원전 600년 그리스 식민지 시절부터 항구로 사용되었으며, 현재는 어선과 요트가 정박한 마르세유의 사회적·문화적 중심지입니다.",
    visitInfo: {
      hours: "상시 개방 / 어시장: 매일 08:00~13:00",
      admission: "무료",
      address: "Vieux-Port, 13001 Marseille",
    },
    highlights: [
      "매일 아침 열리는 어부들의 어시장",
      "포르 생장과 포르 생니콜라",
      "노르만 포스터가 설계한 대형 반사 지붕(Ombrière)",
      "구항구에서 출발하는 칼랑크·이프 섬 페리",
    ],
    nearbyAttractions: ["뮈셈(MuCEM)", "르 파니에 지구", "노트르담 드 라 가르드", "칼랑크 국립공원"],
    tips: [
      "어시장은 오전 일찍 방문해야 신선한 해산물을 볼 수 있습니다.",
      "구항구 주변 레스토랑에서 정통 부야베스를 맛볼 수 있습니다(사전 예약 권장).",
      "구항구에서 이프 섬까지 페리로 약 20분이면 도착합니다.",
    ],
  },
  "france/provence-cote-dazur/marseille/calanques-national-park": {
    heroGradient: "from-emerald-400 to-cyan-700",
    description: "마르세유와 카시스 사이 20km에 걸쳐 펼쳐진 석회암 절벽과 에메랄드빛 바다가 만드는 장엄한 자연 경관. 하이킹, 수영, 카약, 암벽등반 등 다양한 야외 활동이 가능한 프랑스 본토 유일의 해양-육상 통합 국립공원입니다.",
    visitInfo: {
      hours: "일출~일몰 (여름 산불 위험 시 입장 제한, 사전 확인 필수)",
      admission: "무료 (보트 투어 별도)",
      address: "Parc National des Calanques, 13009 Marseille",
      website: "https://www.calanques-parcnational.fr",
    },
    highlights: [
      "칼랑크 드 소르미우(Sormiou) - 가장 크고 접근이 용이한 칼랑크",
      "칼랑크 당 보(En-Vau) - 에메랄드빛 바다의 보석 같은 만",
      "카시스에서 출발하는 보트 투어",
      "절벽 위 하이킹 트레일",
    ],
    nearbyAttractions: ["카시스 마을", "구항구", "노트르담 드 라 가르드"],
    photoTips: "칼랑크 당 보의 터키색 바다와 하얀 절벽의 대비가 가장 인상적입니다. 보트 투어로 바다에서 촬영하면 절벽의 스케일을 담을 수 있습니다.",
    tips: [
      "여름(6~9월)에는 산불 방지를 위해 접근이 제한될 수 있으니 당일 아침 확인 필수입니다.",
      "하이킹 시 충분한 물(1인당 최소 2L)과 자외선 차단제를 준비하세요.",
      "카시스에서 출발하는 보트 투어(1~3시간 코스)가 가장 편리합니다.",
      "좋은 등산화를 신고 가세요. 석회암 바위가 미끄러울 수 있습니다.",
    ],
  },

  // ===== LYON =====
  "france/alsace-east/lyon/vieux-lyon": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "유럽에서 가장 넓은 르네상스 구시가지로 유네스코 세계문화유산에 등재되어 있습니다. 15~17세기 르네상스 건축물과 300개 이상의 트라불(비밀 통로)이 미로처럼 이어져 있으며, 전통 부숑(리옹식 레스토랑)이 밀집해 있습니다.",
    visitInfo: {
      hours: "상시 개방 / 트라불: 대부분 08:00~19:30",
      admission: "무료",
      address: "Vieux Lyon, 69005 Lyon",
    },
    highlights: [
      "트라불(Traboules) - 건물 사이를 관통하는 비밀 통로 300여 개",
      "생장 대성당(Cathédrale Saint-Jean-Baptiste)",
      "르네상스 양식의 안뜰과 나선형 계단",
      "전통 부숑에서 리옹 미식 체험",
    ],
    nearbyAttractions: ["푸르비에르 대성당", "갈로로마 문명 박물관", "소울 강변"],
    tips: [
      "트라불은 사유지이므로 입구 표시를 확인하고 조용히 통과하세요.",
      "관광안내소에서 트라불 지도를 받아 주요 통로를 찾아보세요.",
      "점심에 부숑을 방문하면 합리적인 정식 코스를 즐길 수 있습니다.",
    ],
  },
  "france/alsace-east/lyon/fourvi-re": {
    heroGradient: "from-white to-blue-300",
    description: "리옹을 내려다보는 푸르비에르 언덕 위에 자리한 대성당은 1872~1884년에 건설되었으며, 비잔틴과 로마네스크 양식이 혼합된 화려한 내부 장식이 인상적입니다. 리옹 시민들에게 '기도하는 언덕'으로 불리며 도시의 수호 성당 역할을 합니다.",
    visitInfo: {
      hours: "대성당 매일 07:00~19:00 / 전망대 상시 개방",
      admission: "무료",
      address: "8 Place de Fourvière, 69005 Lyon",
    },
    highlights: [
      "금박 모자이크와 스테인드글라스로 장식된 화려한 내부",
      "전망대에서 리옹 시내, 론 강, 소울 강 파노라마",
      "맑은 날 알프스 몽블랑까지 조망 가능",
      "인접한 갈로로마 극장 유적",
    ],
    nearbyAttractions: ["비외 리옹", "갈로로마 극장", "갈로로마 문명 박물관"],
    photoTips: "전망대에서 리옹의 두 강이 합류하는 풍경을 촬영하면 리옹의 지형적 특성을 잘 담을 수 있습니다.",
    tips: [
      "비외 리옹에서 푸니쿨라(메트로 티켓 사용 가능)를 타면 편하게 올라갈 수 있습니다.",
      "인접한 갈로로마 극장과 박물관도 함께 방문하세요.",
      "일몰 시간에 방문하면 리옹 시내가 석양에 물드는 아름다운 풍경을 감상할 수 있습니다.",
    ],
  },
  "france/alsace-east/lyon/presqu--le": {
    heroGradient: "from-rose-400 to-red-600",
    description: "소울 강과 론 강 사이에 형성된 반도 지역으로 리옹의 상업, 문화, 미식의 중심지입니다. 벨쿠르 광장, 테로 광장, 오페라 극장, 폴 보퀴즈 시장이 이 지역에 위치하며, 쇼핑과 레스토랑이 밀집해 있습니다.",
    visitInfo: {
      hours: "상시 개방 / 폴 보퀴즈 시장: 화~토 07:00~22:30, 일 07:00~16:30, 월 휴무",
      admission: "무료 (시장 입장 무료, 구매 별도)",
      address: "Presqu'île, 69002 Lyon",
    },
    highlights: [
      "벨쿠르 광장 - 유럽에서 가장 큰 보행자 광장 중 하나",
      "폴 보퀴즈 시장(Les Halles) - 48개 상점의 미식 천국",
      "뤼 드 라 레퓌블리크 쇼핑 거리",
      "리옹 오페라 극장 (장 누벨 설계)",
    ],
    nearbyAttractions: ["비외 리옹", "크루아루스 언덕", "리옹 미술관"],
    tips: [
      "폴 보퀴즈 시장에서 리옹의 미식 재료를 구경하고 시식하는 것이 필수 코스입니다.",
      "벨쿠르 광장의 생텍쥐페리와 어린 왕자 동상도 찾아보세요.",
      "프레스킬은 저녁에 레스토랑과 바가 활기를 띱니다.",
    ],
  },

  // ===== STRASBOURG =====
  "france/alsace-east/strasbourg/strasbourg-cathedral": {
    heroGradient: "from-rose-600 to-red-800",
    description: "142m 높이의 단일 첨탑을 가진 고딕 건축의 걸작으로, 1647년부터 1874년까지 세계에서 가장 높은 건축물이었습니다. 외벽의 정교한 조각과 내부의 천문시계, 장미 창이 대표적인 볼거리입니다.",
    history: "1015년 착공하여 약 400년에 걸쳐 1439년에 현재의 모습으로 완공되었습니다. 붉은 사암으로 지어져 햇빛에 따라 색이 변하는 독특한 외관이 특징이며, 괴테는 이 성당을 '높이 솟은 넓게 퍼진 하느님의 나무'라고 찬미했습니다.",
    visitInfo: {
      hours: "성당 매일 07:00~11:15, 12:45~19:00 / 천문시계 매일 12:30 작동 / 전망대 10:00~18:15",
      admission: "성당 무료 / 전망대 €8 / 천문시계 작동 관람 €3",
      address: "Place de la Cathédrale, 67000 Strasbourg",
    },
    highlights: [
      "서쪽 파사드의 정교한 고딕 조각",
      "천문시계(Horloge Astronomique) - 매일 12:30 사도 행렬 작동",
      "전망대(332계단)에서 알자스 평원과 검은 숲(독일) 조망",
      "14m 직경의 장미 창 스테인드글라스",
      "천사의 기둥(Pilier des Anges)",
    ],
    nearbyAttractions: ["카멜젤의 집", "쁘띠 프랑스", "로앙 궁전"],
    tips: [
      "천문시계 작동은 12:30에 시작되므로 12시쯤 입장하여 자리를 잡으세요.",
      "전망대 332계단은 체력이 필요하지만 정상에서의 전망은 그만한 가치가 있습니다.",
      "야간 조명이 켜진 대성당도 아름다우니 저녁에도 방문해 보세요.",
    ],
  },
  "france/alsace-east/strasbourg/petite-france": {
    heroGradient: "from-teal-400 to-emerald-600",
    description: "일 강(Ill River)의 운하를 따라 16~17세기 하프팀버(목골조) 건물이 늘어선 스트라스부르에서 가장 그림 같은 지구. 과거 가죽 장인과 어부, 물레방아 장인들이 모여 살던 지역으로, 현재 유네스코 세계문화유산 그랑딜의 핵심입니다.",
    visitInfo: {
      hours: "상시 개방",
      admission: "무료",
      address: "Petite France, 67000 Strasbourg",
    },
    highlights: [
      "운하를 따라 늘어선 알록달록한 하프팀버 건물",
      "쿠베르 다리(Ponts Couverts)와 3개의 중세 탑",
      "보방 댐(Barrage Vauban) 전망 테라스",
      "타너 거리(Rue des Tanneurs)의 꽃장식 건물",
    ],
    nearbyAttractions: ["스트라스부르 대성당", "현대미술관", "보방 댐"],
    photoTips: "보방 댐 전망 테라스에서 쁘띠 프랑스 전체를 내려다보며 촬영하면 최고의 사진을 얻을 수 있습니다. 이른 아침에는 관광객 없이 고요한 운하 풍경을 담을 수 있습니다.",
    tips: [
      "보트 투어(Batorama)로 운하에서 쁘띠 프랑스를 감상하면 색다른 경험입니다.",
      "크리스마스 시즌에는 보방 댐에서 무료 전망을 즐길 수 있습니다.",
      "타르트 플랑베와 알자스 와인을 즐길 수 있는 레스토랑이 많습니다.",
    ],
  },

  // ===== BORDEAUX =====
  "france/southwest-bordeaux/bordeaux/place-de-la-bourse-miroir-d-eau": {
    heroGradient: "from-amber-400 to-purple-600",
    description: "18세기 고전주의 건축의 걸작인 부르스 광장과 그 앞에 설치된 세계 최대의 수반사 조형물 물의 거울(Miroir d'Eau). 3,450제곱미터의 얕은 물 위에 건물이 거울처럼 반사되는 풍경은 보르도에서 가장 인기 있는 포토 스팟입니다.",
    visitInfo: {
      hours: "물의 거울: 3~11월 10:00~22:00 (15분 반사, 3분 물안개 반복) / 겨울 운영 중단",
      admission: "무료",
      address: "Place de la Bourse, 33000 Bordeaux",
    },
    highlights: [
      "얕은 물 위에 비치는 건축물 반사 풍경",
      "3분마다 분사되는 물안개 효과",
      "18세기 부르스 광장의 고전주의 건축",
      "야간 조명에 반사되는 환상적 야경",
    ],
    nearbyAttractions: ["생피에르 지구", "가론 강변 산책로", "생탄드레 대성당", "그랑 테아트르"],
    photoTips: "여름 저녁 일몰 직후, 물 위에 건물과 하늘이 거울처럼 반사될 때가 최고의 촬영 타이밍입니다. 물안개가 분사될 때의 몽환적인 사진도 인기입니다.",
    tips: [
      "여름 저녁에 방문하면 물놀이를 즐기는 가족들과 함께 활기찬 분위기를 경험할 수 있습니다.",
      "겨울에는 물의 거울이 운영되지 않으니 주의하세요.",
      "근처 카페에서 보르도 와인 한 잔과 함께 야경을 감상하는 것을 추천합니다.",
    ],
  },
  "france/southwest-bordeaux/bordeaux/cit-du-vin": {
    heroGradient: "from-purple-500 to-red-700",
    description: "2016년 개관한 와인을 주제로 한 세계적인 체험형 박물관. 와인잔을 형상화한 곡선형 건축이 인상적이며, 와인의 역사, 문화, 제조 과정을 인터랙티브 전시로 체험할 수 있습니다. 8층 벨베데르 전망대에서 보르도 와인 한 잔을 즐기며 가론 강과 도시 전경을 감상합니다.",
    visitInfo: {
      hours: "매일 10:00~18:00 (성수기 ~19:00) / 월요일 휴관 (성수기 제외)",
      admission: "성인 €22 (8층 와인 시음 포함) / 6세 미만 무료",
      address: "134 Quai de Bacalan, 33300 Bordeaux",
      website: "https://www.laciteduvin.com",
    },
    highlights: [
      "20개 테마 인터랙티브 전시 (향기, 맛, 역사 등)",
      "8층 벨베데르 전망대에서 와인 시음",
      "곡선형 건축 외관 (XTU 아키텍츠 설계)",
      "와인 워크숍 및 테이스팅 코스",
    ],
    nearbyAttractions: ["샤르트롱 지구", "가론 강변", "부르스 광장"],
    tips: [
      "입장권에 8층 벨베데르 와인 시음이 포함되어 있으니 꼭 이용하세요.",
      "관람에 최소 2~3시간이 소요되니 충분한 시간을 확보하세요.",
      "트램 B선 La Cité du Vin 정류장에서 바로 접근 가능합니다.",
    ],
  },

  // ===== MONT-SAINT-MICHEL =====
  "france/normandy-brittany/mont-saint-michel/mont-saint-michel-abbey": {
    heroGradient: "from-gray-500 to-blue-700",
    description: "바다 위에 떠 있는 듯한 경이로운 수도원. 8세기 오베르 주교가 대천사 미카엘의 계시를 받아 건설을 시작한 이래 천 년에 걸쳐 로마네스크와 고딕 양식이 층층이 쌓아올려진 건축의 기적입니다. 유럽 최대의 조수간만 차이(최대 15m)로 밀물 때 섬이 되는 극적인 풍경이 세계적으로 유명합니다.",
    history: "708년 아브랑슈의 주교 오베르가 대천사 미카엘의 환시를 받아 예배당을 건립한 것이 시초입니다. 이후 베네딕도회 수도원으로 발전하였으며, 백년전쟁 때는 요새로, 프랑스 혁명 후에는 감옥으로 사용되었습니다. 1874년 역사기념물로 지정되고 1979년 유네스코 세계문화유산에 등재되었습니다.",
    visitInfo: {
      hours: "5~8월 09:00~19:00 / 9~4월 09:30~18:00 / 야간 개장 7~8월 금·토",
      admission: "성인 €13 / 18세 미만 무료 (EU 거주자 26세 미만 무료)",
      address: "50170 Mont-Saint-Michel",
      website: "https://www.abbaye-mont-saint-michel.fr",
    },
    highlights: [
      "경이로운 방(La Merveille) - 13세기 고딕 건축의 걸작",
      "수도원 회랑의 이중 열주와 정원",
      "성 미카엘 예배당",
      "밀물 때 섬이 되는 극적인 풍경",
      "야간 조명에 비치는 몽생미셸 실루엣",
    ],
    nearbyAttractions: ["그랑 뤼 골목", "생피에르 교회", "라 메르 풀라르 레스토랑"],
    photoTips: "본토 쪽 댐 길에서 바라보는 몽생미셸 전경이 가장 클래식한 앵글입니다. 밀물 시 바다에 둘러싸인 모습과 일몰·일출 시간대가 최고의 촬영 타이밍입니다.",
    tips: [
      "조수 시간표를 확인하여 대조 시 방문하면 밀물의 극적인 장면을 볼 수 있습니다.",
      "수도원 내부는 계단이 많으므로 편한 신발을 준비하세요.",
      "섬 내부 숙소에 묵으면 관광객이 떠난 저녁과 이른 아침의 고요한 모습을 경험할 수 있습니다.",
      "갯벌 워킹 투어는 반드시 공인 가이드와 함께 하세요.",
    ],
  },

  // ===== VERSAILLES =====
  "france/paris-ile-de-france/versailles/palace-of-versailles": {
    heroGradient: "from-amber-400 to-yellow-700",
    description: "루이 14세의 명으로 1661년부터 건설된 세계에서 가장 화려한 궁전. 700개 이상의 방, 2,153개의 창문, 1,250개의 벽난로를 갖추고 있으며, 거울의 방은 357개 거울로 장식된 바로크 건축의 정수입니다.",
    history: "루이 13세의 사냥 별장을 루이 14세가 1661년부터 대규모로 확장하여 1682년 프랑스 정부의 공식 소재지로 삼았습니다. 1789년 프랑스 혁명으로 왕실이 파리로 귀환할 때까지 프랑스 권력의 중심이었으며, 1919년에는 제1차 세계대전 종전 베르사유 조약이 체결되었습니다.",
    visitInfo: {
      hours: "화~일 09:00~18:30 (11~3월 ~17:30) / 월요일 휴관",
      admission: "궁전 €21 / 궁전+정원 패스포트 €27 (분수 쇼 포함 시 €30)",
      address: "Place d'Armes, 78000 Versailles",
      website: "https://www.chateauversailles.fr",
    },
    highlights: [
      "거울의 방(Galerie des Glaces) - 73m 길이, 357개 거울",
      "왕과 왕비의 대아파르트먼트",
      "왕실 예배당과 오페라 극장",
      "프랑스식 정원과 대운하",
      "음악 분수 쇼 (4~10월 주말)",
      "마리 앙투아네트의 프티 트리아농과 전원 마을",
    ],
    nearbyAttractions: ["그랑 트리아농", "프티 트리아농", "마리 앙투아네트 전원 마을", "왕의 채소밭"],
    photoTips: "거울의 방은 개관 직후가 인파가 적어 촬영에 유리합니다. 정원에서 궁전 전경을 배경으로 한 사진은 라톤 분수 근처가 최적의 위치입니다.",
    tips: [
      "파리 뮤지엄 패스로 궁전 무료 입장이 가능하며 별도 줄에서 빠르게 입장합니다.",
      "개관 시간(09:00) 직후 입장하면 거울의 방을 비교적 여유롭게 감상할 수 있습니다.",
      "정원만 관람할 경우 분수 쇼 없는 날은 무료 입장입니다.",
      "전체 관람(궁전+정원+트리아농)에 하루가 필요하니 여유 있게 계획하세요.",
    ],
  },

  // ===== OTHER CITIES - 1 EACH =====
  "france/provence-cote-dazur/avignon/palais-des-papes": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "14세기 교황청이 로마에서 아비뇽으로 이전한 시기(1309~1377)에 건설된 유럽 최대의 고딕 궁전. 25,000제곱미터 면적에 콘클라베(교황 선거) 방, 대예배당, 프레스코화가 남아있는 방들이 인상적입니다.",
    history: "1309년 클레멘스 5세가 교황청을 아비뇽으로 이전한 후, 베네딕트 12세와 클레멘스 6세에 의해 현재의 모습으로 건설되었습니다. 7명의 교황이 거주했으며, 1377년 교황청이 로마로 복귀한 후에도 분열 교황들이 사용했습니다.",
    visitInfo: {
      hours: "매일 09:00~19:00 (7~8월 ~20:30, 11~2월 ~17:00)",
      admission: "성인 €14.50 / 태블릿 AR 가이드 포함 €16.50",
      address: "Place du Palais des Papes, 84000 Avignon",
      website: "https://www.palais-des-papes.com",
    },
    highlights: [
      "대예배당(Grand Chapel) - 52m 길이의 장엄한 공간",
      "콘클라베(교황 선거) 방",
      "클레멘스 6세 방의 중세 프레스코화",
      "태블릿 AR 가이드로 복원된 14세기 궁전 모습 체험",
    ],
    nearbyAttractions: ["생베네제 다리", "돔 대성당", "로셰 데 돔 정원", "프티 팔레 미술관"],
    tips: [
      "태블릿 AR 가이드가 포함된 입장권을 추천합니다. 빈 궁전에 당시의 화려함을 재현해 줍니다.",
      "궁전 옥상에서 아비뇽 시내와 론 강 전경을 조망할 수 있습니다.",
      "생베네제 다리와 통합 입장권이 할인됩니다.",
    ],
  },
  "france/loire-valley-central/chambord/ch-teau-de-chambord": {
    heroGradient: "from-slate-500 to-zinc-700",
    description: "루아르 계곡에서 가장 크고 웅장한 르네상스 성으로, 440개의 방과 365개의 벽난로, 이중 나선형 계단이 대표적입니다. 프랑수아 1세가 사냥용 별장으로 건축했으며, 레오나르도 다 빈치가 설계에 참여한 것으로 전해집니다.",
    history: "1519년 프랑수아 1세의 명으로 착공하여 약 28년에 걸쳐 완성되었습니다. 왕은 실제로 이 성에 42일밖에 머물지 않았으며, 주로 사냥과 귀빈 접대용으로 사용되었습니다.",
    visitInfo: {
      hours: "매일 09:00~18:00 (10~3월 ~17:00)",
      admission: "성인 €16 / 26세 미만(EU 거주자) 무료",
      address: "41250 Chambord",
      website: "https://www.chambord.org",
    },
    highlights: [
      "이중 나선형 계단 - 두 사람이 만나지 않고 오르내릴 수 있는 구조",
      "옥상 테라스에서 5,440ha 영지와 숲 조망",
      "프랑수아 1세의 왕실 아파르트먼트",
      "여름 저녁 성벽 빛의 쇼",
    ],
    nearbyAttractions: ["슈베르니 성", "블루아 성", "쇼몽 쉬르 루아르 성"],
    tips: [
      "옥상 테라스는 무료이며 광활한 영지를 조망할 수 있는 최고의 스팟입니다.",
      "블루아역에서 셔틀버스로 접근 가능하며, 슈베르니와 함께 당일 투어가 편리합니다.",
      "가을 사슴 울음 시즌(9~10월)에는 숲에서 사슴 관찰 투어가 운영됩니다.",
    ],
  },
  "france/normandy-brittany/rouen/rouen-cathedral": {
    heroGradient: "from-stone-400 to-slate-600",
    description: "클로드 모네가 30점 이상의 연작을 그린 노르망디의 대표 고딕 대성당. 프랑스에서 가장 높은 첨탑(151m)을 자랑하며, 빛에 따라 변하는 파사드의 모습이 인상파 화가들에게 영감을 준 건축물입니다.",
    visitInfo: {
      hours: "화~토 09:00~19:00 / 일 08:00~18:00 / 월 14:00~19:00",
      admission: "무료",
      address: "Place de la Cathédrale, 76000 Rouen",
    },
    highlights: [
      "모네 연작의 모델이 된 서쪽 파사드",
      "프랑스 최고 높이의 첨탑(151m)",
      "여름 저녁 파사드 빛의 쇼",
      "리차드 사자왕의 심장이 안치된 무덤",
    ],
    nearbyAttractions: ["대시계 거리", "잔 다르크 교회", "루앙 미술관"],
    tips: [
      "여름 저녁(일몰 후) 대성당 파사드에 투사되는 무료 빛의 쇼를 놓치지 마세요.",
      "모네의 연작이 그려진 각도에서 대성당을 감상해 보세요.",
    ],
  },
  "france/alsace-east/colmar/petite-venise": {
    heroGradient: "from-fuchsia-400 to-purple-600",
    description: "라우흐 강을 따라 알록달록한 하프팀버 건물이 늘어선 콜마르의 대표 명소. '작은 베네치아'라는 별명처럼 운하와 꽃으로 장식된 건물, 작은 보트가 동화 같은 풍경을 만들어냅니다. 과거 포도주 상인들이 운하를 통해 와인을 운반하던 지역입니다.",
    visitInfo: {
      hours: "상시 개방 / 보트 투어: 3~10월 10:00~18:00",
      admission: "무료 / 보트 투어 성인 €7",
      address: "Petite Venise, 68000 Colmar",
    },
    highlights: [
      "운하를 따라 늘어선 알록달록한 하프팀버 건물",
      "어부의 부두(Quai de la Poissonnerie)",
      "작은 보트(바르크)로 운하 유람",
      "꽃으로 장식된 다리와 건물",
    ],
    nearbyAttractions: ["운터린덴 미술관", "메종 데 테트", "프피스터의 집"],
    photoTips: "투르넬 다리(Pont de la rue de Turenne)에서 촬영하면 운하 양쪽의 건물과 꽃장식을 함께 담을 수 있습니다.",
    tips: [
      "이른 아침이나 저녁에 방문하면 관광객 없이 고요한 운하 풍경을 즐길 수 있습니다.",
      "보트 투어는 성수기에 대기가 길 수 있으니 오전에 탑승하세요.",
      "크리스마스 시즌에는 운하 주변이 조명으로 장식되어 특히 아름답습니다.",
    ],
  },
  "france/southwest-bordeaux/toulouse/place-du-capitole": {
    heroGradient: "from-rose-400 to-pink-600",
    description: "툴루즈의 심장부이자 도시 생활의 중심인 카피톨 광장. 12,000제곱미터 면적의 광장을 18세기 분홍빛 벽돌 시청 건물이 감싸고 있으며, 노천 카페와 거리 공연이 활기를 더합니다.",
    visitInfo: {
      hours: "광장 상시 개방 / 시청 내부(앙리 마르탱 홀) 월~토 10:00~18:00",
      admission: "무료",
      address: "Place du Capitole, 31000 Toulouse",
    },
    highlights: [
      "분홍빛 벽돌 시청 건물(Le Capitole)",
      "시청 내 앙리 마르탱 홀의 인상파 벽화",
      "광장 바닥의 황도12궁 장식",
      "석양에 붉게 물드는 장밋빛 건물",
    ],
    nearbyAttractions: ["생세르냉 바실리카", "자코뱅 수도원", "미디 운하"],
    tips: [
      "석양 시간에 광장의 카페에 앉아 붉게 물드는 건물을 감상하는 것이 툴루즈의 대표 경험입니다.",
      "시청 내부의 앙리 마르탱 홀은 무료이며 인상파 벽화가 아름답습니다.",
    ],
  },
  "france/southwest-bordeaux/carcassonne/cit-de-carcassonne": {
    heroGradient: "from-stone-500 to-amber-700",
    description: "3km의 이중 성벽과 52개의 탑으로 이루어진 유럽 최대의 중세 요새 도시. 기원전 6세기부터 요새로 사용되었으며, 19세기 비올레르뒤크의 복원을 거쳐 현재의 모습을 갖추었습니다. 1997년 유네스코 세계문화유산에 등재되었습니다.",
    visitInfo: {
      hours: "성벽 산책 상시 무료 / 콩탈 성: 4~9월 10:00~18:30, 10~3월 09:30~17:00",
      admission: "성벽 산책 무료 / 콩탈 성 성인 €11",
      address: "1 Rue Viollet le Duc, 11000 Carcassonne",
      website: "https://www.remparts-carcassonne.fr",
    },
    highlights: [
      "3km 이중 성벽과 52개 탑의 중세 요새",
      "콩탈 성에서 피레네 산맥 조망",
      "생나제르 대성당의 스테인드글라스",
      "내부 골목의 중세 분위기",
    ],
    nearbyAttractions: ["바스티드 생루이 (신시가지)", "카날 뒤 미디"],
    tips: [
      "이른 아침이나 저녁에 방문하면 관광객 없이 중세 분위기를 만끽할 수 있습니다.",
      "성벽 위 산책은 무료이며 도시 전경을 감상하기에 좋습니다.",
      "7월 14일 불꽃축제는 카르카손 최대의 이벤트입니다.",
    ],
  },
  "france/provence-cote-dazur/aix-en-provence/atelier-c-zanne": {
    heroGradient: "from-yellow-400 to-amber-600",
    description: "폴 세잔이 1902년부터 1906년 사망할 때까지 작업한 화실로, 그가 사용하던 이젤, 팔레트, 정물 오브제가 그대로 보존되어 있습니다. 세잔이 그림을 그리던 당시의 빛과 분위기를 그대로 느낄 수 있는 예술적 순례지입니다.",
    visitInfo: {
      hours: "매일 10:00~12:00, 14:00~17:00 (7~8월 10:00~18:00)",
      admission: "성인 €6.50",
      address: "9 Avenue Paul Cézanne, 13100 Aix-en-Provence",
      website: "https://www.atelier-cezanne.com",
    },
    highlights: [
      "세잔이 사용하던 이젤과 그림 도구",
      "정물화에 등장하는 실제 오브제(사과, 두개골 등)",
      "북향 채광의 대형 창문",
      "정원에서 바라보는 생트빅투아르 산 방향",
    ],
    nearbyAttractions: ["쿠르 미라보", "생소뵈르 대성당", "그라네 미술관"],
    tips: [
      "화실 내부는 작으므로 소규모 그룹으로 입장합니다. 성수기에는 사전 예약을 권장합니다.",
      "세잔이 생트빅투아르 산을 그리던 전망 포인트(Terrain des Peintres)도 함께 방문하세요.",
    ],
  },
  "france/alsace-east/dijon/palace-of-the-dukes-of-burgundy": {
    heroGradient: "from-yellow-600 to-amber-800",
    description: "디종의 중심에 자리한 부르고뉴 공작들의 궁전으로, 현재 디종 미술관이 입주해 있습니다. 14~15세기 부르고뉴 공국의 전성기를 보여주는 궁전으로, 특히 필리프 선량공과 장 무외공의 정교한 무덤 조각이 유명합니다.",
    visitInfo: {
      hours: "수~월 10:00~18:00 / 화요일 휴관",
      admission: "상설 전시 무료 / 특별전 유료",
      address: "Place de la Libération, 21000 Dijon",
      website: "https://beaux-arts.dijon.fr",
    },
    highlights: [
      "필리프 선량공의 무덤 - 정교한 애도자 조각상 행렬",
      "위그 드 라 투르의 선량공 탑 전망대",
      "중세~현대 미술 컬렉션",
      "리베라시옹 광장(궁전 앞)의 반원형 광장",
    ],
    nearbyAttractions: ["노트르담 교회 올빼미", "디종 재래시장", "올빼미 트레일"],
    tips: [
      "상설 전시는 무료이니 부담 없이 방문하세요.",
      "선량공 탑(Tour Philippe le Bon) 전망대에서 디종 시내를 조망할 수 있습니다(별도 예약 필요).",
    ],
  },
};