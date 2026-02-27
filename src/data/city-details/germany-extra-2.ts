import type { CityDetail, AttractionDetail } from "../city-details";

export const germanyCityDetails3: Record<string, CityDetail> = {
  // ===== RHINELAND & WEST =====
  "germany/rhineland-west/aachen": {
    heroGradient: "from-amber-500 to-yellow-800",
    description: "카를 대제(샤를마뉴)의 수도였던 서독 최서단 도시. 독일 최초의 UNESCO 세계유산인 아헨 대성당과 천연 온천, 그리고 전통 프린텐 쿠키로 유명합니다. 벨기에·네덜란드 국경이 바로 옆에 있어 3국 접경 여행도 가능합니다.",
    bestTime: "5~9월 / 11~12월 (크리스마스 마켓)",
    stayArea: "구시가지 (마르크트 광장 주변)",
    transport: "버스 (ASEAG), 도보로 구시가지 관광 충분",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "아헨 대성당과 시청사를 중심으로 한 역사 지구. 카를 대제의 유산이 곳곳에 남아 있습니다.", highlights: ["아헨 대성당", "시청사(라트하우스)", "마르크트 광장", "엘리젠브루넨 온천"] },
      { name: "부르트샤이트", nameEn: "Burtscheid", description: "아헨 남쪽의 온천 지구. 카롤루스 테르메 등 온천 시설이 밀집해 있습니다.", highlights: ["카롤루스 테르메", "부르트샤이트 수도원", "온천 공원"] },
    ],
    attractions: [
      { name: "아헨 대성당", nameEn: "Aachen Cathedral", description: "805년 카를 대제가 건립한 팔각형 궁정 예배당. 독일 최초의 UNESCO 세계유산(1978)입니다.", category: "성당", tip: "대성당 보물관(Domschatzkammer)은 중세 교회 보물의 최고 컬렉션입니다." },
      { name: "아헨 시청사", nameEn: "Aachen Town Hall", description: "카를 대제 궁전 터에 세워진 14세기 고딕 시청사. 대관식 홀이 볼거리입니다.", category: "역사건축", tip: "대관식 홀의 19세기 프레스코화가 인상적입니다." },
      { name: "카롤루스 테르메", nameEn: "Carolus Thermen", description: "아헨의 천연 온천수를 이용한 현대식 스파 시설. 실내외 풀과 사우나 구역.", category: "온천", tip: "저녁 요금이 더 저렴합니다. 수영복 필수(사우나 구역 제외)." },
      { name: "엘리젠브루넨", nameEn: "Elisenbrunnen", description: "신고전주의 양식의 온천 파빌리온. 52°C 온천수를 무료로 맛볼 수 있습니다.", category: "랜드마크" },
      { name: "3국 접경점", nameEn: "Drielandenpunt", description: "독일·벨기에·네덜란드 3국 국경이 만나는 지점. 발스베르크 전망탑에서 3국 조망.", category: "전망대", tip: "아헨에서 버스로 약 40분. 맑은 날 방문 추천." },
    ],
    dayTrips: [
      { name: "마스트리흐트", nameEn: "Maastricht", description: "네덜란드 남부의 아름다운 중세 도시. 뵘홀 동굴과 프라이트호프 광장.", travelTime: "기차 약 35분", gradient: "from-orange-400 to-red-700" },
      { name: "리에주", nameEn: "Liège", description: "벨기에 왈로니아의 활기찬 도시. 와플과 몽타뉴 드 뷰랑 계단.", travelTime: "기차 약 50분", gradient: "from-red-400 to-rose-700" },
    ],
    localFood: [
      { name: "아헨 프린텐", description: "꿀과 향신료로 만든 아헨 전통 쿠키. 부드러운 것부터 딱딱한 것까지 다양.", emoji: "🍪" },
      { name: "라이스플라멘", description: "라인란트 지방의 달콤한 쌀 팬케이크. 사과소스나 설탕을 뿌려 먹습니다.", emoji: "🥞" },
      { name: "아헨 온천수 사탕", description: "아헨 온천수를 이용해 만든 전통 캔디. 독특한 유황 향미.", emoji: "🍬" },
    ],
    tips: [
      "쾰른에서 기차로 약 50분, 당일치기로 충분히 둘러볼 수 있습니다.",
      "RWTH 아헨 공대 덕분에 젊고 활기찬 학생 도시 분위기입니다.",
      "카를 대제 경로(Karlsroute)를 따라 구시가지 명소를 효율적으로 둘러보세요.",
      "벨기에·네덜란드가 바로 옆이라 국제 로밍이나 현금 준비를 확인하세요.",
    ],
  },
  "germany/rhineland-west/muenster": {
    heroGradient: "from-green-500 to-teal-800",
    description: "독일 최고의 자전거 도시이자 1648년 베스트팔렌 조약(30년 전쟁 종결)이 체결된 평화의 도시. 프린치팔마르크트의 아름다운 아케이드 건물과 아제 호수, 활기찬 대학 문화가 매력적입니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 (프린치팔마르크트 주변)",
    transport: "자전거 (Stadtrad 공유 자전거), 버스",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "프린치팔마르크트와 성 바울루스 대성당을 중심으로 한 역사 중심 지구.", highlights: ["프린치팔마르크트", "성 바울루스 대성당", "평화의 홀", "람베르티 교회"] },
      { name: "하펜", nameEn: "Hafen", description: "옛 항구를 재개발한 트렌디한 문화·미식 지구. 레스토랑과 바가 밀집.", highlights: ["크리에이티브카이", "핫 재즈 클럽", "하펜 레스토랑 거리"] },
      { name: "아제 호수", nameEn: "Aasee", description: "시민의 휴식처인 인공 호수. 산책, 조정, 보트 타기 등 여가활동의 중심.", highlights: ["아제 호수 산책로", "뮌스터 동물원", "뮐렌호프 야외박물관"] },
    ],
    attractions: [
      { name: "프린치팔마르크트", nameEn: "Prinzipalmarkt", description: "뮌스터의 '거실'로 불리는 아케이드 거리. 르네상스 삼각지붕 건물이 줄지어 있습니다.", category: "거리", tip: "토요일 오전 시장이 열리며 현지 분위기를 느끼기 좋습니다." },
      { name: "평화의 홀", nameEn: "Hall of Peace", description: "1648년 베스트팔렌 조약이 체결된 역사적 장소. 시청사 내부에 위치.", category: "역사", tip: "시청사 내부 관람은 무료입니다." },
      { name: "성 바울루스 대성당", nameEn: "St. Paulus Dom", description: "13세기 로마네스크-고딕 양식의 대성당. 천문시계(1540년)가 유명합니다.", category: "성당", tip: "매일 12시에 천문시계의 글로켄슈필이 작동합니다." },
      { name: "람베르티 교회", nameEn: "St. Lamberti Church", description: "프린치팔마르크트의 고딕 교회. 탑에 걸린 3개의 철제 새장이 역사적 상징물.", category: "교회" },
      { name: "피카소 미술관", nameEn: "Picasso Museum", description: "피카소의 석판화 컬렉션을 소장한 전문 미술관.", category: "미술관" },
    ],
    dayTrips: [
      { name: "오스나브뤼크", nameEn: "Osnabrück", description: "베스트팔렌 조약의 다른 체결지. 에리히 마리아 레마르크 기념관.", travelTime: "기차 약 35분", gradient: "from-teal-400 to-green-700" },
    ],
    localFood: [
      { name: "뮌스터랜더 퇴테", description: "뮌스터란트 지방의 전통 소시지 요리. 메밀 팬케이크와 함께.", emoji: "🌭" },
      { name: "슈트루벤", description: "뮌스터 지방 전통 효모 튀김 빵. 버터와 가루설탕을 뿌려 먹습니다.", emoji: "🍩" },
      { name: "알트비어", description: "뮌스터에서 즐기는 상면발효 전통 다크 맥주.", emoji: "🍺" },
    ],
    tips: [
      "자전거 도시답게 자전거 대여(Stadtrad)로 도시를 둘러보는 것이 가장 효율적입니다.",
      "프린치팔마르크트는 2차대전 후 원형 그대로 복원한 건물들입니다.",
      "람베르티 교회 탑의 철제 새장은 1536년 재세례파 반란 지도자의 시신이 걸렸던 곳입니다.",
      "매주 토요일 돔플라츠에서 열리는 주간 시장은 현지인 분위기를 느끼기 좋습니다.",
    ],
  },
  "germany/rhineland-west/trier": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "기원전 16년 아우구스투스 황제 시대에 건설된 독일에서 가장 오래된 도시. 로마 제국 북부의 수도였던 역사가 포르타 니그라, 황제 목욕탕, 원형극장 등 9개 UNESCO 유산에 고스란히 남아 있습니다. 칼 마르크스의 출생지이기도 합니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 (하우프트마르크트 주변)",
    transport: "버스, 도보 (구시가지 컴팩트)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "포르타 니그라에서 하우프트마르크트까지 이어지는 로마 유적과 중세 건물의 역사 지구.", highlights: ["포르타 니그라", "하우프트마르크트", "트리어 대성당", "리프프라우엔 교회"] },
      { name: "카를 마르크스 지구", nameEn: "Karl-Marx-Viertel", description: "칼 마르크스 생가와 주변의 역사적 거리.", highlights: ["칼 마르크스 생가", "브뤼켄슈트라세", "시메온슈트라세 쇼핑거리"] },
    ],
    attractions: [
      { name: "포르타 니그라", nameEn: "Porta Nigra", description: "2세기에 건설된 로마 시대 성문. '검은 문'이라는 뜻으로 시간이 지나며 검게 변한 사암이 특징.", category: "유적", tip: "오디오 가이드를 이용하면 로마 시대 역사를 생생하게 체험할 수 있습니다." },
      { name: "트리어 대성당", nameEn: "Trier Cathedral", description: "독일에서 가장 오래된 대성당(4세기). 예수의 성의(聖衣)를 소장하고 있습니다.", category: "성당", tip: "인접한 리프프라우엔 교회(독일 최초 고딕 교회)도 함께 방문하세요." },
      { name: "황제 목욕탕", nameEn: "Imperial Baths", description: "4세기 로마 황제의 대규모 목욕 시설 유적. 지하 통로 탐험이 가능합니다.", category: "유적", tip: "지하 서비스 통로를 걸어볼 수 있어 아이들도 좋아합니다." },
      { name: "칼 마르크스 생가", nameEn: "Karl Marx House", description: "1818년 칼 마르크스가 태어난 집. 현재는 그의 생애와 사상을 소개하는 박물관.", category: "박물관" },
      { name: "바실리카(콘스탄틴 대제 알현실)", nameEn: "Basilica of Constantine", description: "4세기 로마 황제 콘스탄틴의 알현실로 현존하는 최대의 고대 로마 단일 건축 공간.", category: "유적" },
    ],
    dayTrips: [
      { name: "룩셈부르크", nameEn: "Luxembourg City", description: "계곡 위 요새 도시 룩셈부르크. 보크 포대와 그랑뒤칼 궁전.", travelTime: "기차 약 50분", gradient: "from-sky-400 to-blue-700" },
    ],
    localFood: [
      { name: "모젤 와인", description: "모젤강 유역의 급경사 포도밭에서 생산되는 세계적 리슬링 화이트 와인.", emoji: "🍷" },
      { name: "트리어 피에르첸", description: "트리어 전통 감자 팬케이크. 사과소스와 함께 제공.", emoji: "🥔" },
      { name: "자우마겐", description: "팔츠 지방의 돼지 위장에 고기와 감자를 채운 전통 요리.", emoji: "🍖" },
    ],
    tips: [
      "앤티크 카드(Antique Card)로 모든 로마 유적 입장 할인을 받으세요.",
      "모젤강변 산책로를 따라 걸으며 포도밭 풍경을 감상하세요.",
      "하우프트마르크트 광장에는 1000년 역사의 시장이 열립니다.",
      "룩셈부르크 당일치기가 쉬우므로 일정에 포함하면 좋습니다.",
    ],
  },
  "germany/rhineland-west/dortmund": {
    heroGradient: "from-yellow-500 to-yellow-800",
    description: "보루시아 도르트문트(BVB)의 홈구장 시그널 이두나 파크(8만석)가 있는 축구의 도시. 과거 루르 공업지대의 중심지였으며, 현재는 독일 축구 박물관, 베스트팔렌 공원, 그리고 독일 최대의 맥주 도시 중 하나로 변모했습니다.",
    bestTime: "5~9월 / 분데스리가 시즌 (8월~5월)",
    stayArea: "시내 중심부 / 중앙역 주변",
    transport: "U-Bahn, S-Bahn, 버스, 트램",
    districts: [
      { name: "시내 중심부", nameEn: "Innenstadt", description: "알터 마르크트 광장과 쇼핑 거리, 우 타워가 있는 도심 핵심 지역.", highlights: ["알터 마르크트", "우 타워", "라인올디 교회", "베스트헬렌할렌 광장"] },
      { name: "크로이츠피어텔", nameEn: "Kreuzviertel", description: "카페와 부티크가 모인 아기자기한 주거·문화 지구. 현지인의 일상을 엿볼 수 있는 곳.", highlights: ["빈터가르텐 거리", "독립 카페", "주간 시장"] },
    ],
    attractions: [
      { name: "시그널 이두나 파크", nameEn: "Signal Iduna Park", description: "유럽 최대의 스탠딩 테라스(남쪽 트리뷴, 25,000석)를 보유한 BVB 홈구장. '노란 벽'의 함성.", category: "경기장", tip: "경기일이 아닐 때 스타디움 투어를 예약할 수 있습니다." },
      { name: "독일 축구 박물관", nameEn: "German Football Museum", description: "독일 축구의 역사를 총망라하는 인터랙티브 박물관. 2014 월드컵 트로피 전시.", category: "박물관", tip: "중앙역 바로 앞에 위치해 접근이 매우 편리합니다." },
      { name: "우 타워", nameEn: "Dortmunder U", description: "옛 유니온 양조장 건물을 개조한 예술·문화 센터. 옥상에서 도시 전경 조망.", category: "문화시설", tip: "옥상 라운지에서 무료로 시내 전경을 감상할 수 있습니다." },
      { name: "베스트팔렌 공원", nameEn: "Westfalenpark", description: "70헥타르 규모의 시민 공원. 플로리안 TV 타워에서 360도 파노라마 뷰.", category: "공원" },
      { name: "광산 박물관 졸페라인", nameEn: "Zollern Colliery", description: "아르누보 양식의 아름다운 옛 탄광. 루르 산업 유산을 보여주는 박물관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "에센 졸페라인", nameEn: "Essen Zollverein", description: "UNESCO 세계유산 졸페라인 탄광. 루르 공업지대 산업 유산의 상징.", travelTime: "S-Bahn 약 25분", gradient: "from-gray-500 to-gray-800" },
    ],
    localFood: [
      { name: "도르트문더 맥주", description: "도르트문트 전통 엑스포트 라거. DAB, 크로넨 등 현지 양조장.", emoji: "🍺" },
      { name: "퓌플슈테인", description: "도르트문트식 커리부어스트. 5가지 양념이 올라간 변형 버전.", emoji: "🌭" },
      { name: "팔트겔트", description: "루르 지방의 전통 감자 팬케이크. 사과소스나 당밀과 함께.", emoji: "🥔" },
    ],
    tips: [
      "BVB 경기 티켓은 매우 구하기 어려우므로 공식 사이트에서 미리 확인하세요.",
      "루르 지역 패스(RuhrTOPCard)로 박물관과 대중교통 할인을 받을 수 있습니다.",
      "크리스마스 마켓 시즌에는 시내 중심부가 대규모 마켓으로 변신합니다.",
      "스타디움 투어는 경기 없는 날에만 가능하며 온라인 사전 예약이 필요합니다.",
    ],
  },

  // ===== SOUTHWEST =====
  "germany/southwest/konstanz": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "보덴제(콘스탄츠 호수) 호반의 아름다운 도시. 2차대전 때 스위스와의 국경 도시라 폭격을 피해 중세 구시가지가 그대로 보존되었습니다. 마이나우 꽃의 섬, 임페리아 동상, 그리고 스위스 바로 건너편이라는 독특한 위치가 매력입니다.",
    bestTime: "5~9월 (특히 6~8월 호수 수영 가능)",
    stayArea: "구시가지 / 항구 주변",
    transport: "버스, 페리 (보덴제 유람선), 자전거",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "중세 건물과 프레스코화로 장식된 건물이 줄지어 있는 구시가지.", highlights: ["뮌스터 대성당", "오버마르크트", "라인강 다리", "니더부르크 지구"] },
      { name: "항구 지구", nameEn: "Hafen", description: "임페리아 동상과 콘실 건물이 있는 호수변 항구. 유람선 출발지.", highlights: ["임페리아 동상", "콘실 건물", "보덴제 유람선 선착장"] },
      { name: "크로이츨링엔 (스위스)", nameEn: "Kreuzlingen", description: "콘스탄츠와 사실상 하나의 도시인 스위스 쪽 마을. 국경이 도시를 관통.", highlights: ["해양생물관(Sea Life)", "스위스 쇼핑", "보덴제 호반 산책로"] },
    ],
    attractions: [
      { name: "임페리아 동상", nameEn: "Imperia Statue", description: "항구에 서 있는 9m 높이의 회전 동상. 콘스탄츠 공의회(1414~1418)를 풍자한 작품.", category: "랜드마크", tip: "4분에 한 바퀴 회전하므로 천천히 감상하세요." },
      { name: "마이나우 꽃의 섬", nameEn: "Mainau Island", description: "보덴제 위의 열대 정원 섬. 사계절 꽃이 만발하며 나비 온실이 유명.", category: "정원", tip: "오후보다 오전에 방문하면 인파가 적고 꽃도 더 싱싱합니다." },
      { name: "콘스탄츠 뮌스터", nameEn: "Konstanz Minster", description: "1,000년 역사의 대성당. 탑 전망대에서 보덴제와 알프스를 한눈에 조망.", category: "성당" },
      { name: "니더부르크", nameEn: "Niederburg", description: "콘스탄츠에서 가장 오래된 지구. 좁은 골목과 중세 건물이 잘 보존되어 있습니다.", category: "지구" },
      { name: "보덴제 호수 크루즈", nameEn: "Lake Constance Cruise", description: "콘스탄츠에서 메어스부르크, 린다우, 프리드리히스하펜 등으로 유람선 여행.", category: "유람선" },
    ],
    dayTrips: [
      { name: "메어스부르크", nameEn: "Meersburg", description: "보덴제 북쪽의 와인 마을. 독일에서 가장 오래된 거주 성.", travelTime: "페리 약 30분", gradient: "from-purple-400 to-indigo-700" },
      { name: "린다우", nameEn: "Lindau", description: "보덴제 동쪽의 섬 도시. 항구의 사자상과 등대가 유명.", travelTime: "유람선 약 3시간 / 기차 약 1.5시간", gradient: "from-blue-400 to-cyan-700" },
    ],
    localFood: [
      { name: "보덴제 펠헨", description: "보덴제 특산 민물생선(화이트피시). 구이나 훈제로 즐깁니다.", emoji: "🐟" },
      { name: "비벨레스퀴헬레", description: "슈바벤 지방의 전통 수프 만두. 쫄깃한 식감.", emoji: "🥟" },
      { name: "바덴 와인", description: "독일 최남단 바덴 와인 지역의 화이트·로제 와인.", emoji: "🍷" },
    ],
    tips: [
      "스위스 크로이츨링엔과 국경이 바로 붙어있어 도보로 국경을 넘을 수 있습니다.",
      "보덴제 에를레브니스카르테(체험카드)로 유람선과 관광지 할인을 받으세요.",
      "마이나우 섬은 오후 4시 이후 할인 입장이 가능합니다.",
      "여름에는 호수에서 수영이 가능하며 '슈트란트바트 호른'이 인기 수영장입니다.",
    ],
  },
  "germany/southwest/tuebingen": {
    heroGradient: "from-rose-500 to-rose-800",
    description: "네카어강변의 로맨틱한 대학 도시. 알록달록한 목조 건물이 강변에 비치는 풍경이 그림 같으며, 전통 슈토허칸(평저선) 보트 체험이 명물입니다. 헤르만 헤세, 횔덜린, 헤겔 등 독일 문학·철학의 거장들이 머물렀던 도시입니다.",
    bestTime: "4~10월 (슈토허칸 시즌)",
    stayArea: "구시가지 (마르크트 광장 주변)",
    transport: "버스, 도보 (구시가지 컴팩트)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "마르크트 광장, 시청사, 대학 건물이 모인 언덕 위의 구시가지. 좁은 골목과 계단 거리가 매력적.", highlights: ["마르크트 광장", "시청사(천문시계)", "슈티프츠 교회", "코른하우스"] },
      { name: "네카어 프론트", nameEn: "Neckarfront", description: "네카어강을 따라 색색의 목조 건물이 줄지어 있는 튀빙엔의 상징적 풍경.", highlights: ["플라타너스 가로수길", "횔덜린 탑", "에버하르트 다리"] },
    ],
    attractions: [
      { name: "횔덜린 탑", nameEn: "Hölderlin Tower", description: "시인 프리드리히 횔덜린이 36년간(1807~1843) 살았던 네카어강변의 노란 탑. 현재 박물관.", category: "박물관", tip: "네카어강 쪽에서 바라보는 탑의 전경이 가장 아름답습니다." },
      { name: "슈토허칸 보트", nameEn: "Stocherkahn Punting", description: "튀빙엔 전통 평저선을 타고 네카어강을 따라 유유히 이동하는 체험. 캠브리지 펀팅과 유사.", category: "체험", tip: "5~9월 운행하며 예약이 권장됩니다. 6월 슈토허칸 레이스는 축제 분위기." },
      { name: "튀빙엔 성", nameEn: "Tübingen Castle (Hohentübingen)", description: "16세기 르네상스 성. 대학 고고학 박물관과 세계에서 가장 오래된 예술 작품 중 하나인 보겔헤르트 조각 소장.", category: "고성" },
      { name: "마르크트 광장", nameEn: "Marktplatz", description: "천문시계가 있는 르네상스 시청사와 넵튠 분수대가 중심인 아담한 광장.", category: "광장", tip: "월·수·금 오전에 농산물 시장이 열립니다." },
    ],
    dayTrips: [
      { name: "슈투트가르트", nameEn: "Stuttgart", description: "메르세데스-벤츠와 포르셰 박물관이 있는 바덴뷔르템베르크 주도.", travelTime: "기차 약 45분", gradient: "from-gray-500 to-slate-800" },
    ],
    localFood: [
      { name: "마울타셴", description: "슈바벤식 대형 만두. 고기와 시금치 속을 밀가루 반죽으로 감쌉니다.", emoji: "🥟" },
      { name: "슈페츨레", description: "슈바벤 지방의 전통 달걀 면. 치즈를 얹은 케제슈페츨레가 유명.", emoji: "🍝" },
      { name: "트롤링거 와인", description: "뷔르템베르크 지방의 가벼운 레드 와인. 현지에서 가장 많이 마시는 와인.", emoji: "🍷" },
    ],
    tips: [
      "네카어 프론트는 이른 아침이나 석양 무렵에 가장 아름답습니다.",
      "슈투트가르트에서 기차로 45분이라 당일치기가 쉽습니다.",
      "대학 도시라 학기 중(10~2월, 4~7월)에 더 활기찹니다.",
      "구시가지는 언덕 위에 있으므로 편한 신발을 신으세요.",
    ],
  },
  "germany/southwest/baden-baden": {
    heroGradient: "from-emerald-400 to-emerald-800",
    description: "유럽 최고의 온천 도시로 로마 시대부터 2,000년 온천 역사를 자랑합니다. 카라칼라 테르메와 프리드리히스바트 로마식 목욕탕, 세계적 카지노, 리히텐탈러 알레의 우아한 산책로가 어우러진 고급 휴양지입니다. 2021년 UNESCO 세계유산에 등재되었습니다.",
    bestTime: "4~10월 (온천은 연중 가능)",
    stayArea: "쿠어하우스 / 리히텐탈러 알레 주변",
    transport: "버스, 도보 (도심 컴팩트)",
    districts: [
      { name: "쿠어 지구", nameEn: "Kurviertel", description: "쿠어하우스 카지노, 온천 시설, 트링크할레(온천수 음수대)가 모인 바덴바덴의 핵심 휴양 지구.", highlights: ["쿠어하우스 카지노", "트링크할레", "카라칼라 테르메", "프리드리히스바트"] },
      { name: "리히텐탈러 알레", nameEn: "Lichtentaler Allee", description: "오스 강변을 따라 3.5km 이어지는 우아한 공원 산책로. 유럽 귀족들이 사랑한 산책 코스.", highlights: ["장미 정원", "뮤제움 프리더 부르다", "곤넨바인 잔디밭"] },
    ],
    attractions: [
      { name: "카라칼라 테르메", nameEn: "Caracalla Therme", description: "현대식 온천 스파. 실내외 풀, 야외 수영장, 사우나 구역 등 다양한 시설.", category: "온천", tip: "수영복을 착용하는 구역과 사우나(나체) 구역이 구분됩니다." },
      { name: "프리드리히스바트", nameEn: "Friedrichsbad", description: "1877년 개장한 르네상스 양식의 로마-아일랜드식 전통 목욕탕. 17단계 입욕 코스.", category: "온천", tip: "완전 나체 입욕이며 2,000년 전통의 정통 로마식 목욕 체험입니다." },
      { name: "쿠어하우스 카지노", nameEn: "Kurhaus Casino", description: "마를렌 디트리히가 '세계에서 가장 아름다운 카지노'라 칭한 화려한 카지노. 내부 투어 가능.", category: "카지노", tip: "카지노 입장은 정장(남성 재킷) 착용 필수. 투어는 캐주얼 가능." },
      { name: "리히텐탈러 알레", nameEn: "Lichtentaler Allee", description: "오스 강변의 3.5km 산책로. 300년 된 나무와 장미 정원이 어우러진 힐링 코스.", category: "산책로" },
      { name: "네로베르크 케이블카", nameEn: "Merkur Mountain Cable Car", description: "메르쿠어 산 정상(668m)까지 올라가는 케이블카. 블랙포레스트와 라인 평원 조망.", category: "전망대", tip: "맑은 날에는 프랑스 보주 산맥까지 보입니다." },
    ],
    dayTrips: [
      { name: "슈트라스부르", nameEn: "Strasbourg", description: "프랑스 알자스의 수도. 프티트 프랑스 지구와 대성당.", travelTime: "기차 약 30분", gradient: "from-blue-400 to-indigo-700" },
      { name: "하이델베르크", nameEn: "Heidelberg", description: "네카어강변의 낭만적 대학 도시. 하이델베르크 성 폐허.", travelTime: "기차 약 1시간", gradient: "from-rose-400 to-red-700" },
    ],
    localFood: [
      { name: "블랙포레스트 케이크", description: "초콜릿 스펀지, 체리, 키르시 리큐어, 생크림의 전설적 케이크.", emoji: "🍰" },
      { name: "블랙포레스트 햄", description: "전나무 칩으로 훈제한 검은 껍질의 전통 햄.", emoji: "🥓" },
      { name: "바덴 와인", description: "바덴 와인 지역의 슈페트부르군더(피노 누아) 레드 와인.", emoji: "🍷" },
    ],
    tips: [
      "프리드리히스바트는 나체 입욕이 기본이니 마음의 준비를 하세요.",
      "카라칼라 테르메는 3시간 기본 요금으로 충분히 즐길 수 있습니다.",
      "리히텐탈러 알레 산책은 무료이며 바덴바덴의 정수를 느낄 수 있습니다.",
      "프랑스 스트라스부르가 기차로 30분이라 한나절 여행을 추가하면 좋습니다.",
    ],
  },

  // ===== CENTRAL =====
  "germany/central/kassel": {
    heroGradient: "from-violet-500 to-purple-800",
    description: "5년마다 열리는 세계 최대 현대미술 전시회 '도쿠멘타'의 개최지. 유네스코 세계유산 빌헬름스회에 공원의 헤라클레스 상과 수경(水景) 쇼, 그림 형제 박물관이 있는 문화도시입니다.",
    bestTime: "5~9월 / 도쿠멘타 해 (다음 개최: 2027년)",
    stayArea: "시내 중심부 / 빌헬름스회에 공원 근처",
    transport: "트램, 버스 (KVG)",
    districts: [
      { name: "시내 중심부", nameEn: "Innenstadt", description: "프리데리치아눔(도쿠멘타 주요 전시장)과 그림 형제 광장이 있는 카셀의 핵심.", highlights: ["프리데리치아눔", "그림 형제 박물관", "카를스 아우에 공원", "오랑주리"] },
      { name: "빌헬름스회에", nameEn: "Wilhelmshöhe", description: "유네스코 세계유산 산악 공원이 있는 서쪽 지구. 빌헬름스회에 궁전 포함.", highlights: ["헤라클레스 동상", "수경 쇼", "빌헬름스회에 궁전", "뢰벤부르크 성"] },
    ],
    attractions: [
      { name: "빌헬름스회에 산악공원", nameEn: "Bergpark Wilhelmshöhe", description: "유네스코 세계유산. 유럽 최대의 산악 공원으로 헤라클레스 동상에서 시작되는 수경 쇼가 압권.", category: "공원", tip: "수경 쇼는 5~10월 수·일·공휴일 14:30에 시작됩니다. 헤라클레스에서 출발!" },
      { name: "헤라클레스 동상", nameEn: "Hercules Monument", description: "카셀의 상징. 70m 높이의 피라미드 위에 서 있는 구리 헤라클레스상. 시내 전경 조망 가능.", category: "랜드마크" },
      { name: "그림 형제 박물관", nameEn: "Grimmwelt Kassel", description: "그림 형제의 생애와 작품, 언어학 업적을 소개하는 현대적 박물관. 동화 원본 전시.", category: "박물관", tip: "옥상 테라스에서 카셀 시내 전경을 무료로 감상할 수 있습니다." },
      { name: "빌헬름스회에 궁전", nameEn: "Wilhelmshöhe Palace", description: "나폴레옹의 동생 제롬이 거주했던 신고전주의 궁전. 렘브란트 컬렉션이 유명.", category: "궁전" },
    ],
    dayTrips: [
      { name: "괴팅겐", nameEn: "Göttingen", description: "노벨상 수상자를 다수 배출한 대학 도시. 거위 소녀 분수.", travelTime: "기차 약 20분", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "아헬레 부어스트", description: "카셀 전통 훈제 소시지. 낮은 온도에서 오래 훈제한 독특한 풍미.", emoji: "🌭" },
      { name: "그뤼네 조세", description: "7가지 허브를 넣은 프랑크푸르트식 그린 소스. 삶은 달걀과 감자에 곁들임.", emoji: "🥚" },
    ],
    tips: [
      "수경 쇼(워터 피처)는 헤라클레스에서 시작하여 아래로 내려가므로 동선을 따라 이동하세요.",
      "도쿠멘타 해(5년마다)에 방문하면 도시 전체가 거대한 미술관이 됩니다.",
      "빌헬름스회에 공원은 넓으니 편한 신발과 충분한 시간을 확보하세요.",
      "ICE 고속열차 정차역(카셀-빌헬름스회에역)이 있어 접근이 편리합니다.",
    ],
  },
  "germany/central/marburg": {
    heroGradient: "from-indigo-400 to-indigo-800",
    description: "언덕 위의 동화 같은 대학 도시. 그림 형제가 대학 시절을 보내며 동화를 수집하기 시작한 곳으로, 가파른 계단 거리와 목조 건물이 중세 분위기를 그대로 간직하고 있습니다. 성 엘리자베트 교회는 독일 최초의 순수 고딕 교회입니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 (마르크트 광장 주변) / 엘리자베트 교회 근처",
    transport: "버스, 도보 (도시 엘리베이터 이용 가능)",
    districts: [
      { name: "오버슈타트", nameEn: "Oberstadt", description: "란트그라프 성에서 마르크트 광장까지 이어지는 언덕 위 구시가지. 계단 거리와 목조 건물의 동화적 풍경.", highlights: ["란트그라프 성", "마르크트 광장", "라트하우스(시청사)", "루터 교회"] },
      { name: "운터슈타트", nameEn: "Unterstadt", description: "란강변의 하부 도시. 성 엘리자베트 교회와 기차역이 위치.", highlights: ["성 엘리자베트 교회", "대학 식물원", "란 강변 산책로"] },
    ],
    attractions: [
      { name: "란트그라프 성", nameEn: "Marburg Castle (Landgrafenschloss)", description: "11세기부터 이어진 언덕 위의 성. 고딕 기사의 홀과 마르부르크 전경 조망.", category: "고성", tip: "성까지 걸어 올라가는 길의 풍경도 놓치지 마세요." },
      { name: "성 엘리자베트 교회", nameEn: "St. Elizabeth's Church", description: "1235~1283년 건립된 독일 최초의 순수 고딕 양식 교회. 헝가리 공주 엘리자베트의 무덤.", category: "교회", tip: "내부 스테인드글라스와 엘리자베트 성녀의 성유물함이 볼거리입니다." },
      { name: "구시가지 계단 거리", nameEn: "Old Town Staircase Streets", description: "마르부르크의 특징인 가파른 계단 골목들. 목조 건물 사이로 올라가는 중세 분위기.", category: "거리" },
      { name: "마르크트 광장", nameEn: "Marktplatz", description: "르네상스 시청사와 목조 건물이 둘러싼 구시가지 중심 광장.", category: "광장", tip: "시청사 시계가 매 정시에 수탉 울음소리를 냅니다." },
    ],
    dayTrips: [
      { name: "카셀", nameEn: "Kassel", description: "그림 형제 박물관과 빌헬름스회에 공원의 수경 쇼.", travelTime: "기차 약 1시간", gradient: "from-violet-400 to-purple-700" },
    ],
    localFood: [
      { name: "마르부르크 슈니첼", description: "현지 식당의 두툼한 슈니첼. 대학 도시답게 넉넉한 양.", emoji: "🥩" },
      { name: "한트케제", description: "헤센 지방 전통 수제 치즈. 식초·양파 드레싱의 '무지크(Musik)' 스타일이 유명.", emoji: "🧀" },
      { name: "애플와인", description: "헤센 지방의 전통 사과주(Apfelwein). 독특한 도자기 잔에 마십니다.", emoji: "🍎" },
    ],
    tips: [
      "구시가지는 경사가 급하므로 편한 신발은 필수입니다.",
      "오버슈타트까지 도시 엘리베이터를 이용하면 편리합니다.",
      "그림 형제 동화 루트(Deutsche Märchenstraße)의 주요 거점 도시입니다.",
      "소도시라 반나절이면 주요 명소를 둘러볼 수 있지만, 분위기를 즐기려면 하루 추천.",
    ],
  },
  "germany/central/wiesbaden": {
    heroGradient: "from-sky-500 to-sky-800",
    description: "헤센주의 주도이자 26개 온천이 솟아나는 독일 대표 온천 도시. 우아한 빌헬름 양식 건물, 쿠어하우스 카지노, 네로베르크 언덕의 러시아 정교회 등이 어우러진 세련된 도시입니다. 라인가우 와인 지역의 관문이기도 합니다.",
    bestTime: "4~10월 / 12월 (크리스마스 마켓)",
    stayArea: "시내 중심부 (쿠어하우스 주변)",
    transport: "버스 (ESWE), 도보",
    districts: [
      { name: "시내 중심부", nameEn: "Innenstadt", description: "쿠어하우스, 마르크트 교회, 쇼핑거리가 모인 비스바덴의 핵심 지역.", highlights: ["쿠어하우스", "마르크트 교회", "빌헬름 거리 쇼핑", "코흐브루넨 온천"] },
      { name: "네로베르크", nameEn: "Neroberg", description: "비스바덴을 내려다보는 언덕 위 지역. 러시아 정교회, 야외 수영장, 포도밭.", highlights: ["네로베르크반(케이블카)", "러시아 정교회", "오페르바트 수영장", "포도밭"] },
      { name: "비비리히", nameEn: "Biebrich", description: "라인강변에 위치한 바로크 비비리히 궁전과 넓은 슐로스파크가 있는 남쪽 지구.", highlights: ["비비리히 궁전", "슐로스파크", "라인강 산책로"] },
    ],
    attractions: [
      { name: "쿠어하우스", nameEn: "Kurhaus", description: "1907년 빌헬름 2세가 건설한 신고전주의 양식의 온천 휴양 건물. 내부 카지노가 유명.", category: "역사건축", tip: "카지노 투어(영어)를 통해 화려한 내부를 구경할 수 있습니다." },
      { name: "네로베르크반", nameEn: "Nerobergbahn", description: "1888년부터 운행 중인 수력 구동 케이블카. 네로베르크 언덕까지 3.5분.", category: "교통", tip: "편도로 올라가서 포도밭 사이 산책로로 내려오는 코스가 인기." },
      { name: "러시아 정교회", nameEn: "Russian Orthodox Church", description: "네로베르크 위의 금빛 양파돔 교회. 1855년 나사우 공작이 러시아 아내를 기리며 건립.", category: "교회" },
      { name: "코흐브루넨", nameEn: "Kochbrunnen", description: "66°C의 뜨거운 온천수가 솟아나는 비스바덴 최대의 온천. 무료로 온천수 맛보기 가능.", category: "온천", tip: "온천수 맛은 철분과 소금기가 강하니 각오하세요." },
      { name: "카이저 프리드리히 테르메", nameEn: "Kaiser Friedrich Therme", description: "1913년 아르누보 양식으로 지어진 로마식 전통 온천 목욕탕.", category: "온천" },
    ],
    dayTrips: [
      { name: "라인가우 와인 루트", nameEn: "Rheingau Wine Route", description: "리슬링 포도밭 사이의 와이너리 투어. 에버바흐 수도원, 뤼데스하임.", travelTime: "기차 약 25분 (뤼데스하임)", gradient: "from-lime-400 to-green-700" },
      { name: "프랑크푸르트", nameEn: "Frankfurt", description: "유럽 금융의 중심지. 뢰머 광장과 마인강변의 박물관 거리.", travelTime: "S-Bahn 약 40분", gradient: "from-slate-500 to-slate-800" },
    ],
    localFood: [
      { name: "라인가우 리슬링", description: "비스바덴 바로 옆 라인가우 지역의 세계적인 리슬링 화이트 와인.", emoji: "🍷" },
      { name: "그뤼네 조세", description: "7가지 허브 소스. 삶은 달걀·감자와 함께 헤센 전통 요리.", emoji: "🌿" },
      { name: "한트케제 미트 무지크", description: "식초·양파 드레싱의 헤센 전통 수제 치즈 샐러드.", emoji: "🧀" },
    ],
    tips: [
      "프랑크푸르트에서 S-Bahn으로 40분이라 당일치기가 매우 쉽습니다.",
      "빌헬름 거리(Wilhelmstraße)는 비스바덴의 메인 쇼핑 거리입니다.",
      "네로베르크반은 4~10월에만 운행하니 방문 시기를 확인하세요.",
      "라인가우 와인 축제(8월)는 세계 최대 와인 축제로 꼭 체험할 만합니다.",
    ],
  },
};

export const germanyAttractionDetails3: Record<string, AttractionDetail> = {
  // ===== AACHEN (Rhineland-West) =====
  "germany/rhineland-west/aachen/aachen-cathedral": {
    heroGradient: "from-amber-500 to-yellow-800",
    description: "805년 카를 대제(샤를마뉴)가 건립한 팔각형 궁정 예배당을 중심으로 한 대성당. 936년부터 1531년까지 약 600년간 30명 이상의 신성로마제국 황제가 이곳에서 대관식을 거행했습니다. 1978년 독일 최초로 UNESCO 세계유산에 등재되었으며, 비잔틴·서프랑크·게르만 건축 양식이 독창적으로 융합된 걸작입니다.",
    history: "786~805년 카를 대제의 명으로 건축가 오도 폰 메츠가 설계하여 팔각형 궁정 예배당을 완성했습니다. 이후 중세~근세에 걸쳐 고딕 양식의 유리의 집(Glashaus), 합창단석 등이 증축되었습니다. 2차대전 폭격에도 기적적으로 핵심 구조가 보존되어 오늘날까지 1,200년 역사를 이어오고 있습니다.",
    visitInfo: {
      hours: "매일 07:00~19:00 (미사 시간 관광 제한)",
      admission: "대성당 무료 / 보물관 €5 / 가이드 투어 €5",
      address: "Domhof 1, 52062 Aachen",
      website: "https://www.aachenerdom.de",
    },
    highlights: [
      "팔각형 궁정 예배당 - 카를 대제 시대 원형이 그대로 보존",
      "카를 대제의 대리석 왕좌 (가이드 투어에서만 관람 가능)",
      "바르바로사 샹들리에 - 직경 4.2m의 거대한 중세 샹들리에",
      "고딕 양식의 유리의 집(Glashaus) 스테인드글라스",
      "보물관(Domschatzkammer) - 카를 대제의 흉상 성유물함 등 중세 최고 교회 보물",
    ],
    nearbyAttractions: ["아헨 시청사(라트하우스)", "엘리젠브루넨", "쿠어파크"],
    photoTips: "대성당 외관은 카트슈호프(Katschhof) 광장에서 촬영하면 전체를 담기 좋습니다. 내부 팔각형 돔은 광각 렌즈가 필수입니다.",
    tips: [
      "가이드 투어를 신청해야 카를 대제의 왕좌와 2층 갤러리를 볼 수 있습니다.",
      "보물관(Domschatzkammer)은 별도 입장이며 반드시 함께 관람하세요.",
      "미사 시간(특히 일요일 오전)에는 관광 입장이 제한되니 시간을 확인하세요.",
      "크리스마스 마켓 시즌(11~12월)에는 대성당 앞이 마켓으로 변신합니다.",
    ],
  },
  "germany/rhineland-west/aachen/carolus-thermen": {
    heroGradient: "from-cyan-400 to-teal-700",
    description: "아헨의 2,000년 온천 전통을 이어가는 현대식 스파 시설. 천연 온천수(74°C 원천)를 이용한 실내외 풀, 다양한 사우나, 웰니스 프로그램을 제공합니다. 로마 시대부터 켈트족과 로마인이 이용했던 아헨 온천의 현대적 해석입니다.",
    visitInfo: {
      hours: "매일 09:00~23:00",
      admission: "온천 2.5시간 €19.50, 종일 €28 / 사우나 구역 추가 €8",
      address: "Passstraße 79, 52070 Aachen",
      website: "https://www.carolus-thermen.de",
    },
    highlights: [
      "천연 온천수(약 33~38°C)를 이용한 실내외 다양한 풀",
      "야외 온천 풀에서 계절에 따른 노천 온천 체험",
      "6종류의 테마 사우나 (핀란드식, 크리스탈, 아로마 등)",
      "정기적인 아우프구스(Aufguss) 사우나 이벤트",
    ],
    nearbyAttractions: ["부르트샤이트 수도원", "엘리젠브루넨", "아헨 대성당"],
    tips: [
      "수영복은 온천 구역에서 필수, 사우나 구역은 나체가 기본입니다.",
      "저녁 6시 이후 입장하면 할인 요금이 적용됩니다.",
      "수건, 가운, 슬리퍼는 현장 대여 가능하지만 개인 지참이 경제적입니다.",
      "주말은 붐비므로 평일 오전이 가장 여유롭습니다.",
    ],
  },
  "germany/rhineland-west/aachen/aachen-town-hall": {
    heroGradient: "from-amber-600 to-orange-800",
    description: "카를 대제 궁전의 기초 위에 14세기에 건설된 고딕 양식의 시청사. 내부의 대관식 홀(Krönungssaal)에는 알프레드 레텔의 프레스코화가 카를 대제의 일대기를 생생하게 묘사하고 있습니다. 매년 카를 대제상(Karlspreis) 시상식이 이곳에서 열립니다.",
    history: "1330~1349년에 카를 대제 궁전의 아울라 레기아(Aula Regia, 왕의 홀) 터 위에 건설되었습니다. 1656년 대화재와 2차대전 폭격으로 피해를 입었지만 복원되어 오늘날 아헨의 상징적 건물로 유지되고 있습니다.",
    visitInfo: {
      hours: "매일 10:00~18:00",
      admission: "€6 (학생 €3)",
      address: "Markt 39, 52062 Aachen",
    },
    highlights: [
      "대관식 홀(Krönungssaal)의 카를 대제 프레스코화",
      "황제 대관식에 사용된 복제 왕관 보석 전시",
      "카를 대제상(Karlspreis) 역대 수상자 전시",
      "고딕 파사드의 50개 왕과 황제 조각상",
    ],
    nearbyAttractions: ["아헨 대성당", "마르크트 광장", "쿠어파크"],
    tips: [
      "카를 대제 프레스코화는 대관식 홀 내부에서만 볼 수 있으니 입장하세요.",
      "시청사 앞 마르크트 광장에서 바라보는 파사드가 가장 인상적입니다.",
      "크리스마스 시즌에는 시청사 앞에 대규모 크리스마스 마켓이 열립니다.",
    ],
  },

  // ===== MÜNSTER (Rhineland-West) =====
  "germany/rhineland-west/muenster/prinzipalmarkt": {
    heroGradient: "from-green-500 to-teal-800",
    description: "뮌스터의 상징적 거리이자 도시의 '거실'로 불리는 아케이드 쇼핑 거리. 르네상스 양식의 삼각지붕 건물이 양쪽으로 줄지어 있으며, 2차 세계대전 폭격으로 완파된 후 원형 그대로 꼼꼼하게 복원되었습니다. 시청사, 람베르티 교회 등 역사적 건물이 줄지어 있습니다.",
    history: "중세 시대부터 뮌스터의 상업 중심지였으며, 1648년 베스트팔렌 조약 당시 외교관들이 이 거리를 오갔습니다. 1945년 폭격으로 91% 파괴되었으나, 시민들의 의지로 역사적 파사드를 충실하게 재건했습니다.",
    visitInfo: {
      hours: "거리 24시간 개방 / 상점 월~토 10:00~20:00",
      admission: "무료",
      address: "Prinzipalmarkt, 48143 Münster",
    },
    highlights: [
      "르네상스 삼각지붕 건물의 아름다운 아케이드 거리",
      "시청사 내 평화의 홀 - 베스트팔렌 조약 체결 장소",
      "람베르티 교회 탑의 3개 철제 새장(재세례파 반란 역사)",
      "토요일 오전 주간 시장의 활기찬 현지 분위기",
    ],
    nearbyAttractions: ["성 바울루스 대성당", "평화의 홀(시청사)", "피카소 미술관"],
    photoTips: "삼각지붕 건물을 대칭으로 담으려면 거리 중앙에서 양쪽을 잡으세요. 비 온 뒤 아케이드 바닥에 반영이 비치는 모습도 좋습니다.",
    tips: [
      "토요일 오전 시장(Wochenmarkt)에서 현지 치즈, 빵, 꽃을 구경하세요.",
      "평화의 홀(시청사 내부)은 무료 입장이 가능합니다.",
      "람베르티 교회 탑의 철제 새장 이야기를 미리 알고 가면 더 흥미롭습니다.",
      "크리스마스 마켓 시즌에는 프린치팔마르크트 전체가 마켓으로 변신합니다.",
    ],
  },
  "germany/rhineland-west/muenster/st-paulus-dom": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "13세기에 건립된 뮌스터의 로마네스크-고딕 양식 대성당. 1540년에 제작된 천문시계(Astronomische Uhr)가 매일 정오에 글로켄슈필을 연주하며, 내부의 '낙원 현관(Paradies)' 조각은 중세 석조 예술의 걸작으로 평가됩니다.",
    history: "805년 첫 성당이 세워진 이래 현재 건물은 1225~1264년에 건립된 세 번째 성당입니다. 1534년 재세례파가 장악했을 때 내부가 파괴되었고, 2차대전에서도 큰 피해를 입었지만 충실하게 복원되었습니다.",
    visitInfo: {
      hours: "매일 06:30~19:00 (일요일 06:30~19:30)",
      admission: "무료 (천문시계 글로켄슈필: 매일 12:00)",
      address: "Domplatz 28, 48143 Münster",
    },
    highlights: [
      "천문시계(1540년) - 매일 12시 글로켄슈필 연주",
      "'낙원 현관(Paradies)' 13세기 석조 조각군",
      "대성당 회랑(Kreuzgang)의 고요한 중정",
      "돔플라츠에서 바라보는 대성당 전경",
    ],
    nearbyAttractions: ["프린치팔마르크트", "LWL 미술문화사박물관", "비숍스 팰리스 정원"],
    tips: [
      "천문시계 글로켄슈필은 매일 12시에 작동하므로 11:45까지 자리를 잡으세요.",
      "대성당 회랑(Kreuzgang)은 조용히 명상하기 좋은 숨은 공간입니다.",
      "매주 수·토요일 돔플라츠에서 열리는 주간 시장과 함께 방문하면 좋습니다.",
      "미사 시간에는 관광 입장이 제한되니 일정을 확인하세요.",
    ],
  },
  "germany/rhineland-west/muenster/hall-of-peace": {
    heroGradient: "from-blue-500 to-blue-800",
    description: "1648년 30년 전쟁을 종결시킨 베스트팔렌 조약이 체결된 역사적 장소. 뮌스터 시청사 내부에 위치하며, 원래의 오크 패널 벽장식과 각국 대사들의 초상화가 그대로 보존되어 있습니다. 유럽 평화 외교의 상징적 공간입니다.",
    history: "1648년 10월 24일, 이 홀에서 스페인과 네덜란드 공화국 간의 평화 조약이 체결되어 30년 전쟁이 종결되었습니다. 동시에 오스나브뤼크에서도 별도 조약이 체결되었으며, 이를 통칭 베스트팔렌 조약이라 합니다.",
    visitInfo: {
      hours: "화~금 10:00~17:00, 토~일 10:00~16:00 (월 휴관)",
      admission: "무료",
      address: "Prinzipalmarkt 10, 48143 Münster",
    },
    highlights: [
      "원본 오크 패널 벽장식(1577년)이 그대로 보존된 내부",
      "조약 체결 당시 각국 대사들의 초상화",
      "베스트팔렌 조약 원본 문서 복사본 전시",
      "유럽 근대 외교사의 출발점이 된 역사적 공간",
    ],
    nearbyAttractions: ["프린치팔마르크트", "람베르티 교회", "성 바울루스 대성당"],
    tips: [
      "무료 입장이므로 프린치팔마르크트 산책 중 잠깐 들러보세요.",
      "오디오 가이드를 이용하면 조약의 역사적 배경을 잘 이해할 수 있습니다.",
      "시청사 외관의 고딕 파사드도 놓치지 마세요.",
    ],
  },

  // ===== TRIER (Rhineland-West) =====
  "germany/rhineland-west/trier/porta-nigra": {
    heroGradient: "from-stone-600 to-stone-900",
    description: "서기 170년경 건설된 로마 시대 성문으로 '검은 문'이라는 뜻. 알프스 이북에서 가장 잘 보존된 로마 건축물 중 하나이며, 시간이 지나며 사암이 산화되어 검게 변한 것이 이름의 유래입니다. 트리어의 9개 유네스코 세계유산 중 하나입니다.",
    history: "170년경 로마 시대 방어 성문으로 건설되었으며, 중세에는 은둔자 시메온이 이곳에 거주하면서 교회로 개조되었습니다. 1804년 나폴레옹의 명으로 교회 구조물이 제거되어 로마 시대 원형이 다시 드러났습니다.",
    visitInfo: {
      hours: "4~9월 09:00~18:00, 10~3월 09:00~17:00 (11~2월 ~16:00)",
      admission: "€5 (학생 €2.50) / 앤티크 카드(Antique Card) €12로 전체 유적 통합 입장",
      address: "Porta-Nigra-Platz, 54290 Trier",
      website: "https://www.zentrum-der-antike.de",
    },
    highlights: [
      "2세기 로마 원형 그대로 보존된 이중 아치 성문",
      "검게 산화된 사암 블록의 독특한 외관",
      "상부 전망대에서 트리어 시내와 시메온 거리 조망",
      "7,200개 사암 블록이 금속 고리로만 결합된 접착제 없는 건축 기법",
    ],
    nearbyAttractions: ["시메온슈트라세 쇼핑 거리", "하우프트마르크트", "카를 마르크스 생가"],
    photoTips: "정면에서 전체를 담는 것도 좋지만, 측면에서 촬영하면 두께와 규모감이 잘 드러납니다. 오후 햇살에 사암의 질감이 가장 잘 보입니다.",
    tips: [
      "앤티크 카드(€12)를 구매하면 포르타 니그라 포함 모든 로마 유적에 입장할 수 있습니다.",
      "내부 계단을 올라 상층부에서 트리어 시내를 조망하세요.",
      "오디오 가이드(포함)가 로마 역사를 생생하게 전달합니다.",
      "야간 조명이 켜진 포르타 니그라도 매우 인상적입니다.",
    ],
  },
  "germany/rhineland-west/trier/trier-cathedral": {
    heroGradient: "from-rose-600 to-red-900",
    description: "독일에서 가장 오래된 대성당으로 서기 4세기 콘스탄틴 대제 시대에 건립되었습니다. 로마네스크, 고딕, 바로크 양식이 1,700년에 걸쳐 층층이 쌓인 건축사의 교과서입니다. 예수의 성의(聖衣, Heiliger Rock)를 소장하고 있는 것으로도 유명합니다.",
    history: "326년경 콘스탄틴 대제의 어머니 헬레나가 자신의 궁전을 교회에 기증하여 건립이 시작되었습니다. 현재 대성당의 핵심 구조는 11세기 로마네스크 재건 때 형성되었으며, 이후 고딕·바로크 증축을 거쳐 오늘에 이르고 있습니다.",
    visitInfo: {
      hours: "매일 06:30~18:00 (11~3월 ~17:30)",
      admission: "무료 (보물관 €2)",
      address: "Domfreihof 1, 54290 Trier",
    },
    highlights: [
      "4세기 로마 시대 기초 위에 세워진 1,700년 역사",
      "예수의 성의(聖衣) 보관 - 불정기 공개",
      "인접한 리프프라우엔 교회(독일 최초 고딕 교회)와 연결 통로",
      "로마네스크·고딕·바로크 양식이 혼재된 건축",
    ],
    nearbyAttractions: ["리프프라우엔 교회", "하우프트마르크트", "포르타 니그라"],
    tips: [
      "인접한 리프프라우엔 교회(독일 최초 순수 고딕 교회)를 함께 방문하세요.",
      "대성당 보물관(Domschatzkammer)에 귀중한 성유물이 전시되어 있습니다.",
      "미사 시간을 피해 방문하면 내부를 여유롭게 관람할 수 있습니다.",
      "지하에 로마 시대 건물 기초가 남아있으니 가이드 투어를 추천합니다.",
    ],
  },
  "germany/rhineland-west/trier/imperial-baths": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "4세기 로마 황제의 대규모 공중 목욕 시설 유적. 콘스탄틴 대제 시대에 건설이 시작되었으나 완공 전 수도가 이전되면서 군사 시설로 전용되었습니다. 지하 서비스 통로를 직접 걸어볼 수 있어 로마 엔지니어링의 규모를 체감할 수 있습니다.",
    history: "300년경 콘스탄틴 대제 시대에 로마 제국 황제의 목욕 시설로 건설이 시작되었습니다. 그러나 완공 전 수도가 콘스탄티노폴리스로 이전되면서 병영과 성벽 등 군사 시설로 전용되었습니다. 중세에는 성벽의 일부로 사용되었습니다.",
    visitInfo: {
      hours: "4~9월 09:00~18:00, 10~3월 09:00~17:00 (11~2월 ~16:00)",
      admission: "€4 (학생 €2.50) / 앤티크 카드(Antique Card) €12로 전체 유적 통합 입장",
      address: "Weimarer Allee 2, 54290 Trier",
    },
    highlights: [
      "지하 서비스 통로(하이포카우스트 난방 시스템) 직접 탐험",
      "칼다리움(온탕), 테피다리움(미온탕), 프리기다리움(냉탕) 유적",
      "로마 엔지니어링의 규모를 체감하는 거대한 벽 잔해",
      "중세 성벽으로 재활용된 로마 건축의 흔적",
    ],
    nearbyAttractions: ["바실리카(콘스탄틴 알현실)", "라인 주립박물관", "선제후 궁전 정원"],
    tips: [
      "지하 통로는 좁고 어두우므로 밝은 신발과 손전등(스마트폰 라이트)을 준비하세요.",
      "앤티크 카드를 구매했다면 바로 옆 바실리카와 함께 둘러보세요.",
      "여름에는 유적 내에서 야외 공연이 열리기도 합니다.",
      "아이들도 지하 통로 탐험을 매우 좋아합니다.",
    ],
  },

  // ===== DORTMUND (Rhineland-West) =====
  "germany/rhineland-west/dortmund/signal-iduna-park": {
    heroGradient: "from-yellow-500 to-yellow-800",
    description: "보루시아 도르트문트(BVB)의 홈구장으로 독일 최대의 축구 경기장(81,365석). 남쪽 스탠딩 테라스 '쥐트트리뷔네'는 25,000명을 수용하는 유럽 최대의 스탠딩 구역으로, '노란 벽(Gelbe Wand)'이라는 별명으로 전 세계 축구팬에게 알려져 있습니다.",
    history: "1974년 FIFA 월드컵을 위해 베스트팔렌슈타디온이라는 이름으로 건설되었습니다. 이후 여러 차례 증축을 거쳐 현재 81,365석 규모가 되었으며, 2005년부터 시그널 이두나 파크로 명명되었습니다. 2006 월드컵에서도 경기장으로 사용되었습니다.",
    visitInfo: {
      hours: "스타디움 투어: 경기 없는 날 매일, 사전 예약 필요",
      admission: "스타디움 투어 €17 (학생 €14)",
      address: "Strobelallee 50, 44139 Dortmund",
      website: "https://www.bvb.de",
    },
    highlights: [
      "'노란 벽(Gelbe Wand)' - 25,000명 스탠딩 테라스의 압도적 분위기",
      "라커룸, 선수 터널, 벤치 등 비하인드 씬 스타디움 투어",
      "BVB 팬숍에서 기념품 쇼핑",
      "경기일 8만 관중이 부르는 'You'll Never Walk Alone'",
    ],
    nearbyAttractions: ["독일 축구 박물관", "베스트팔렌 공원", "도르트문트 동물원"],
    photoTips: "경기장 외관은 남동쪽에서 촬영하면 시그널 이두나 파크 간판과 함께 전체를 담을 수 있습니다.",
    tips: [
      "경기 티켓은 시즌 회원에게 우선 판매되어 일반 구매가 매우 어렵습니다.",
      "스타디움 투어는 경기 없는 날에만 가능하며 온라인 사전 예약이 필수입니다.",
      "BVB 팬숍은 투어 없이도 방문 가능합니다.",
      "경기일에는 대중교통(U45, U46)이 증편되며 주변 주차는 거의 불가능합니다.",
    ],
  },
  "germany/rhineland-west/dortmund/german-football-museum": {
    heroGradient: "from-green-600 to-emerald-900",
    description: "독일 축구의 역사를 총망라하는 인터랙티브 박물관. 2015년 도르트문트 중앙역 바로 앞에 개관했으며, 1954년 '베른의 기적'부터 2014년 브라질 월드컵 우승까지 독일 축구의 주요 순간을 체험할 수 있습니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00 (월요일 휴관)",
      admission: "성인 €19, 학생 €14, 가족 티켓 €45",
      address: "Platz der Deutschen Einheit 1, 44137 Dortmund",
      website: "https://www.fussballmuseum.de",
    },
    highlights: [
      "2014 브라질 월드컵 우승 트로피 실물 전시",
      "1954 '베른의 기적' 결승전 재현 체험",
      "인터랙티브 슛팅, 드리블 등 축구 체험 존",
      "분데스리가 역대 명장면 하이라이트 극장",
      "독일 축구 역사 연대기 전시",
    ],
    nearbyAttractions: ["도르트문트 중앙역", "우 타워", "시그널 이두나 파크"],
    tips: [
      "중앙역 바로 앞이라 도착하자마자 또는 출발 전에 방문하기 좋습니다.",
      "인터랙티브 체험 존은 아이들과 어른 모두 즐길 수 있습니다.",
      "화요일은 상대적으로 한산하여 여유롭게 관람 가능합니다.",
      "축구에 큰 관심이 없어도 독일 현대사의 한 단면으로서 흥미롭습니다.",
    ],
  },
  "germany/rhineland-west/dortmund/dortmunder-u": {
    heroGradient: "from-amber-500 to-amber-800",
    description: "1926~1927년에 건설된 옛 유니온(Union) 양조장의 발효·저장 건물을 2010년 현대 예술·문화 센터로 재탄생시킨 공간. 옥상의 거대한 금색 'U' 글자와 LED 아트 설치물이 도르트문트의 새로운 랜드마크가 되었습니다.",
    visitInfo: {
      hours: "화~수, 토~일 11:00~18:00, 목~금 11:00~20:00 (월 휴관)",
      admission: "무료 (특별 전시 유료)",
      address: "Leonie-Reygers-Terrasse 2, 44137 Dortmund",
      website: "https://www.dortmunder-u.de",
    },
    highlights: [
      "옥상 LED 아트 설치물 '플루타(Fluter)' - 밤에 더 인상적",
      "HMKV(하트웨어 미디어 쿤스트 페어라인) 미디어 아트 전시",
      "Museum Ostwall 현대미술 컬렉션",
      "무료 옥상 라운지에서 도르트문트 시내 전경 조망",
    ],
    nearbyAttractions: ["도르트문트 중앙역", "독일 축구 박물관", "알터 마르크트"],
    tips: [
      "옥상 라운지(무료)에서 시내 전경을 감상하며 커피를 마셔보세요.",
      "목~금 저녁 시간 연장 운영을 활용하면 야간 LED 아트도 볼 수 있습니다.",
      "중앙역에서 도보 5분이라 접근이 매우 편리합니다.",
    ],
  },

  // ===== KONSTANZ (Southwest) =====
  "germany/southwest/konstanz/imperia-statue": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "콘스탄츠 항구에 서 있는 높이 9m, 무게 18톤의 회전하는 콘크리트 동상. 조각가 페터 렝크의 작품으로, 1414~1418년 콘스탄츠 공의회를 풍자하고 있습니다. 두 손에 각각 교황과 황제의 미니어처를 들고 4분에 한 바퀴 회전합니다.",
    history: "1993년 페터 렝크가 오노레 드 발자크의 단편소설에 등장하는 창부 임페리아를 모티브로 제작했습니다. 콘스탄츠 공의회(1414~1418) 당시 교황과 황제가 창부의 손바닥 위에서 놀아났다는 풍자적 의미를 담고 있습니다.",
    visitInfo: {
      hours: "24시간 (야외 조형물)",
      admission: "무료",
      address: "Hafenstraße, 78462 Konstanz",
    },
    highlights: [
      "4분에 한 바퀴 회전하는 18톤 동상의 엔지니어링",
      "교황과 황제 미니어처를 든 풍자적 의미",
      "보덴제 호수와 알프스를 배경으로 한 풍경",
      "콘스탄츠 항구의 상징적 랜드마크",
    ],
    nearbyAttractions: ["콘실 건물", "보덴제 유람선 선착장", "콘스탄츠 뮌스터"],
    photoTips: "유람선 선착장에서 임페리아 뒤로 보덴제 호수가 배경이 되도록 촬영하면 가장 인상적입니다. 일몰 시간이 특히 아름답습니다.",
    tips: [
      "회전이 느리므로(4분/1회전) 천천히 여러 각도에서 감상하세요.",
      "바로 옆 콘실 건물은 콘스탄츠 공의회의 실제 회의장이었습니다.",
      "항구 주변에 카페와 레스토랑이 많아 식사와 함께 즐기기 좋습니다.",
    ],
  },
  "germany/southwest/konstanz/mainau-island": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "보덴제 위의 45헥타르 열대 정원 섬. 온화한 호수 기후 덕분에 야자수, 감귤나무 등 아열대 식물이 자라며, 봄에는 100만 송이 튤립, 여름에는 장미 정원, 가을에는 달리아 축제로 연중 꽃이 만발합니다. 바로크 양식의 성과 나비 온실도 인기입니다.",
    visitInfo: {
      hours: "일출~일몰 (보통 09:00~19:00, 계절별 상이)",
      admission: "성인 €24 (동절기 할인), 오후 4시 이후 할인",
      address: "Insel Mainau 1, 78465 Konstanz",
      website: "https://www.mainau.de",
    },
    highlights: [
      "봄 100만 송이 튤립 축제 (3~5월)",
      "여름 장미 정원 - 1,200종 이상의 장미",
      "나비 온실 - 열대 나비 수백 마리가 날아다니는 체험",
      "가을 달리아 축제 (9~10월) - 12,000주 이상",
      "바로크 슐로스 교회와 베르나도테 가문의 성",
    ],
    nearbyAttractions: ["콘스탄츠 구시가지", "메어스부르크", "보덴제 크루즈"],
    photoTips: "이탈리아식 장미 계단(Italienische Rosengarten)에서 보덴제를 배경으로 촬영하면 꽃과 호수가 어우러진 환상적인 사진을 얻을 수 있습니다.",
    tips: [
      "오전에 방문하면 꽃이 더 싱싱하고 인파도 적습니다.",
      "오후 4시 이후 할인 입장이 가능하니 늦은 오후 방문도 전략적입니다.",
      "콘스탄츠에서 배 또는 자전거로 접근할 수 있습니다.",
      "5월 튤립 시즌과 10월 달리아 시즌이 가장 화려합니다.",
    ],
  },
  "germany/southwest/konstanz/konstanz-minster": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "콘스탄츠 구시가지 중심의 1,000년 역사 대성당. 로마네스크·고딕·바로크 양식이 층층이 쌓여 있으며, 탑 전망대에서 보덴제 호수, 알프스, 스위스까지 파노라마 조망이 가능합니다. 1414~1418년 콘스탄츠 공의회 기간 중 주요 회의장으로 사용되었습니다.",
    visitInfo: {
      hours: "매일 10:00~17:30 (일요일 12:00~)",
      admission: "대성당 무료 / 탑 전망대 €3",
      address: "Münsterplatz 1, 78462 Konstanz",
    },
    highlights: [
      "탑 전망대에서 보덴제·알프스·스위스 파노라마 조망",
      "고딕 성가대석의 정교한 목조 조각",
      "로마네스크 지하 납골당(크립트)",
      "콘스탄츠 공의회 역사 관련 전시",
    ],
    nearbyAttractions: ["니더부르크", "임페리아 동상", "오버마르크트"],
    tips: [
      "탑 전망대(193계단)에서의 조망은 콘스탄츠 최고의 뷰포인트입니다.",
      "지하 크립트도 꼭 내려가 보세요. 초기 기독교 시대 유적이 남아 있습니다.",
      "미사 시간을 피해 방문하면 내부를 천천히 둘러볼 수 있습니다.",
    ],
  },

  // ===== TÜBINGEN (Southwest) =====
  "germany/southwest/tuebingen/hoelderlin-tower": {
    heroGradient: "from-rose-500 to-rose-800",
    description: "독일 낭만주의 시인 프리드리히 횔덜린(1770~1843)이 정신질환을 앓으며 36년간(1807~1843) 거주했던 네카어강변의 노란 탑. 목수 에른스트 치머 가족의 보살핌 속에서 말년을 보냈으며, 현재는 횔덜린의 생애와 작품을 소개하는 박물관으로 운영됩니다.",
    history: "1807년 횔덜린은 정신질환 진단을 받은 후 튀빙엔의 목수 에른스트 치머의 집으로 옮겨졌습니다. 네카어강변의 이 탑에서 36년간 생활하며 후기 시편을 남겼고, 1843년 이곳에서 생을 마감했습니다. 1984년 박물관으로 개관했습니다.",
    visitInfo: {
      hours: "화~금 10:00~12:00, 15:00~17:00 / 토~일 10:00~17:00 (월 휴관)",
      admission: "€5 (학생 €2.50)",
      address: "Bursagasse 6, 72070 Tübingen",
    },
    highlights: [
      "횔덜린이 살았던 작은 방과 네카어강 전망 창문",
      "시인의 필사본과 편지 원본 전시",
      "네카어강에서 바라보는 노란 탑의 상징적 풍경",
      "횔덜린 후기 시편의 배경이 된 공간",
    ],
    nearbyAttractions: ["네카어 프론트", "에버하르트 다리", "슈티프츠 교회"],
    photoTips: "에버하르트 다리(Eberhardsbrücke)에서 네카어강 너머로 바라보는 횔덜린 탑이 가장 클래식한 구도입니다. 오전 빛이 탑의 노란색을 가장 잘 살립니다.",
    tips: [
      "소규모 박물관이라 30~45분이면 충분히 관람할 수 있습니다.",
      "네카어 프론트 산책과 함께 코스를 짜면 효율적입니다.",
      "독문학에 관심이 있다면 사전에 횔덜린의 시를 읽어보고 가면 감동이 배가됩니다.",
    ],
  },
  "germany/southwest/tuebingen/stocherkahn-punting": {
    heroGradient: "from-blue-400 to-cyan-700",
    description: "튀빙엔 전통 평저선(슈토허칸)을 타고 네카어강을 유유히 떠다니는 체험. 영국 캠브리지·옥스퍼드의 펀팅과 유사하지만, 튀빙엔만의 독특한 전통으로 대학생들이 관광객을 태우고 강을 안내합니다. 매년 6월에는 대학 간 슈토허칸 레이스가 축제 분위기로 열립니다.",
    visitInfo: {
      hours: "5~9월, 날씨에 따라 운항 (에버하르트 다리 부근 승선)",
      admission: "1인 약 €8~10 (단체/개인 투어별 상이)",
      address: "Eberhardsbrücke, 72072 Tübingen",
    },
    highlights: [
      "네카어강 위에서 바라보는 구시가지와 목조 건물 풍경",
      "횔덜린 탑과 네카어 프론트를 수상에서 감상",
      "대학생 가이드의 재치 있는 해설",
      "6월 슈토허칸 레이스(Stocherkahnrennen) - 코스튬 입은 대학생들의 레이스",
    ],
    nearbyAttractions: ["횔덜린 탑", "플라타너스 가로수길(Platanenallee)", "구시가지"],
    tips: [
      "에버하르트 다리 부근에서 승선하며, 사전 예약이 권장됩니다.",
      "날씨에 따라 운항이 취소될 수 있으니 맑은 날을 골라가세요.",
      "6월 슈토허칸 레이스는 코스튬을 입은 대학생들의 축제로 매우 즐겁습니다.",
      "약 45분~1시간 소요되며 여유로운 오후 일정으로 완벽합니다.",
    ],
  },
  "germany/southwest/tuebingen/tuebingen-castle": {
    heroGradient: "from-amber-500 to-amber-800",
    description: "구시가지 위 언덕에 자리한 16세기 르네상스 성. 현재 튀빙엔 대학 고고학 박물관으로 사용되며, 세계에서 가장 오래된 비너스 조각상(약 4만 년 전) 등 빙하기 예술품을 소장하고 있습니다. 성벽에서 네카어강과 구시가지의 환상적인 전경을 감상할 수 있습니다.",
    visitInfo: {
      hours: "수~일 10:00~17:00 (목 ~19:00, 월~화 휴관)",
      admission: "€5 (학생 €3)",
      address: "Burgsteige 11, 72070 Tübingen",
    },
    highlights: [
      "보겔헤르트 동굴 출토 빙하기 조각상(약 4만 년 전)",
      "성벽 테라스에서 네카어강과 구시가지 파노라마 조망",
      "고대 이집트·그리스·로마 유물 컬렉션",
      "르네상스 양식의 아름다운 성 안뜰",
    ],
    nearbyAttractions: ["마르크트 광장", "슈티프츠 교회", "구시가지 계단 거리"],
    tips: [
      "성까지 올라가는 부르크슈타이게(Burgsteige) 거리의 풍경도 아름답습니다.",
      "성벽 테라스에서의 전경 감상은 무료입니다.",
      "고고학에 관심이 없더라도 성 자체의 분위기와 전망만으로 방문 가치가 있습니다.",
    ],
  },

  // ===== BADEN-BADEN (Southwest) =====
  "germany/southwest/baden-baden/caracalla-therme": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "바덴바덴의 천연 온천수(68°C 원천)를 이용한 현대식 스파 시설. 실내외 풀, 야외 온천, 다양한 사우나를 갖추고 있으며, 프리드리히스바트보다 캐주얼한 분위기로 가족 단위 방문객에게 인기입니다. 수영복 착용 구역과 사우나(나체) 구역이 구분되어 있습니다.",
    visitInfo: {
      hours: "매일 08:00~22:00 (마지막 입장 20:00)",
      admission: "2시간 €18, 3시간 €21, 종일 €27",
      address: "Römerplatz 1, 76530 Baden-Baden",
      website: "https://www.carasana.de",
    },
    highlights: [
      "천연 온천수를 이용한 실내외 다양한 온도의 풀",
      "야외 온천에서 블랙포레스트 산림 전망",
      "다양한 테마 사우나 (크리스탈, 허브, 핀란드식 등)",
      "정기적인 아우프구스(Aufguss) 사우나 이벤트",
    ],
    nearbyAttractions: ["프리드리히스바트", "로마 목욕탕 유적", "리히텐탈러 알레"],
    tips: [
      "온천 구역은 수영복 필수, 사우나 구역은 나체가 독일 문화입니다.",
      "3시간 요금이 가장 경제적이며 충분히 즐길 수 있습니다.",
      "평일 오전이 가장 한산하며 주말 오후는 매우 붐빕니다.",
      "바로 옆 로마 목욕탕 유적(무료)도 함께 둘러보세요.",
    ],
  },
  "germany/southwest/baden-baden/friedrichsbad": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "1877년 개장한 르네상스 양식의 전통 로마-아일랜드식 목욕탕. 마크 트웨인이 '10분이면 시간을 잊고, 20분이면 세상을 잊는다'고 극찬한 곳입니다. 17단계 입욕 코스를 3시간에 걸쳐 체험하며, 완전 나체 입욕이 기본입니다. 2,000년 바덴바덴 온천 전통의 정수를 느낄 수 있습니다.",
    history: "1869~1877년 카를 데른펠트가 설계하여 건립했습니다. 고대 로마 목욕 문화와 아일랜드식 증기 목욕을 결합한 독특한 형식으로, 개장 당시 유럽에서 가장 현대적인 목욕 시설이었습니다. 건물 아래에는 2,000년 된 로마 목욕탕 유적이 남아 있습니다.",
    visitInfo: {
      hours: "매일 09:00~22:00 (마지막 입장 19:00, 코스 약 3시간)",
      admission: "3시간 코스 €35 (비누 브러시 마사지 추가 €12)",
      address: "Römerplatz 1, 76530 Baden-Baden",
      website: "https://www.carasana.de",
    },
    highlights: [
      "17단계 로마-아일랜드식 입욕 코스 (샤워→온탕→증기실→냉탕→휴식 순환)",
      "르네상스 돔 아래 원형 풀의 장엄한 건축",
      "비누 브러시 마사지 체험 (추가 요금)",
      "건물 지하 2,000년 된 로마 목욕탕 유적",
    ],
    nearbyAttractions: ["카라칼라 테르메", "로마 목욕탕 유적", "트링크할레"],
    photoTips: "건물 내부는 촬영 금지입니다. 외관은 뢰머플라츠에서 르네상스 파사드를 담을 수 있습니다.",
    tips: [
      "완전 나체 입욕이 기본이므로 마음의 준비를 하세요. 타월만 제공됩니다.",
      "화·토·일·공휴일은 혼욕, 월·목은 남녀 분리입니다(수·금은 번갈아).",
      "17단계 코스를 따라 천천히 이동하면 약 3시간이 소요됩니다.",
      "비누 브러시 마사지(€12 추가)는 강력 추천합니다.",
    ],
  },
  "germany/southwest/baden-baden/kurhaus-casino": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "마를렌 디트리히가 '세계에서 가장 아름다운 카지노'라 극찬한 바덴바덴의 상징. 1824년 개장한 이래 유럽 귀족과 예술가들이 드나들던 사교 공간으로, 베르사유 궁전을 연상시키는 화려한 내부 장식이 압도적입니다.",
    history: "1824년 프랑스 건축가 프리드리히 바인브레너가 설계한 쿠어하우스 내에 개장했습니다. 도스토옙스키가 이곳에서 도박으로 전 재산을 잃고 소설 '도박꾼'을 집필한 일화가 유명합니다. 19세기 유럽 사교계의 중심이었습니다.",
    visitInfo: {
      hours: "카지노: 매일 14:00~02:00 / 가이드 투어: 10:00~11:30 (30분 간격)",
      admission: "카지노 입장 €5 (정장 필수) / 가이드 투어 €8",
      address: "Kaiserallee 1, 76530 Baden-Baden",
      website: "https://www.casino-baden-baden.de",
    },
    highlights: [
      "베르사유 궁전을 모델로 한 화려한 프렌치 룸",
      "붉은 살롱, 피렌체 살롱 등 테마별 게임 룸",
      "도스토옙스키의 '도박꾼' 배경이 된 역사적 공간",
      "쿠어하우스 건물 자체의 신고전주의 건축미",
    ],
    nearbyAttractions: ["트링크할레", "리히텐탈러 알레", "쿠어 공원"],
    tips: [
      "카지노 입장은 남성 재킷·넥타이 착용이 필수입니다(대여 가능).",
      "도박 없이 내부만 보고 싶다면 오전 가이드 투어(캐주얼 복장 가능)를 이용하세요.",
      "최소 베팅이 €5(슬롯)~€15(룰렛)로 유럽 카지노 치고는 합리적입니다.",
      "카지노 앞 쿠어 공원에서의 산책도 함께 즐기세요.",
    ],
  },

  // ===== KASSEL (Central) =====
  "germany/central/kassel/bergpark-wilhelmshoehe": {
    heroGradient: "from-violet-500 to-purple-800",
    description: "유네스코 세계유산(2013)에 등재된 유럽 최대의 산악 공원. 240헥타르 면적에 헤라클레스 동상, 대규모 수경(水景) 쇼, 빌헬름스회에 궁전, 인공 폐허 성 뢰벤부르크가 자리하고 있습니다. 300년에 걸쳐 조성된 바로크~영국 풍경식 정원의 걸작입니다.",
    history: "1696년 헤센-카셀 방백 카를이 이탈리아 건축가를 고용해 바로크 양식의 수경 시설을 설계했습니다. 이후 300년에 걸쳐 영국 풍경식 정원, 낭만주의 인공 폐허 등이 추가되며 현재의 모습이 되었습니다.",
    visitInfo: {
      hours: "공원: 연중 개방 / 수경 쇼: 5~10월 수·일·공휴일 14:30~15:30",
      admission: "공원 무료 / 빌헬름스회에 궁전 €6 / 헤라클레스 동상 전망대 €6",
      address: "Schlosspark 1, 34131 Kassel",
      website: "https://www.museum-kassel.de",
    },
    highlights: [
      "수경 쇼 - 헤라클레스에서 시작해 분수까지 350m 낙차를 흘러내리는 대규모 물의 쇼",
      "헤라클레스 동상(Herkules) - 카셀의 상징, 70m 피라미드 위의 구리 거상",
      "뢰벤부르크 성 - 18세기에 의도적으로 건설한 낭만주의 인공 폐허",
      "빌헬름스회에 궁전 - 렘브란트 컬렉션과 그리스 로마 유물",
      "대분수(Große Fontäne) - 50m 높이의 물줄기로 수경 쇼의 피날레",
    ],
    nearbyAttractions: ["카셀 시내 중심부", "그림 형제 박물관", "카를스 아우에 공원"],
    photoTips: "수경 쇼는 헤라클레스에서 시작하여 아래로 내려가므로, 각 단계에서 촬영 후 함께 이동하세요. 헤라클레스 전망대에서 카셀 시내 파노라마를 담을 수 있습니다.",
    tips: [
      "수경 쇼는 5~10월 수·일·공휴일 14:30에만 시작되므로 날짜를 꼭 확인하세요.",
      "헤라클레스에서 출발해 아래로 내려오며 쇼를 따라가는 것이 가장 좋은 동선입니다.",
      "공원이 매우 넓으므로 편한 신발과 충분한 시간(최소 3시간)을 확보하세요.",
      "트램 1번으로 빌헬름스회에역까지 쉽게 접근할 수 있습니다.",
    ],
  },
  "germany/central/kassel/grimmwelt": {
    heroGradient: "from-orange-400 to-orange-700",
    description: "그림 형제(야콥·빌헬름 그림)의 생애, 동화, 그리고 독일어 사전 편찬 업적을 소개하는 현대적 박물관. 2015년 개관한 모던 건축의 박물관으로, 인터랙티브 전시를 통해 '백설공주', '빨간 모자', '헨젤과 그레텔' 등 친숙한 동화의 원본 세계를 체험할 수 있습니다.",
    visitInfo: {
      hours: "화~일 10:00~18:00, 금 10:00~20:00 (월 휴관)",
      admission: "성인 €10, 학생 €7",
      address: "Weinbergstraße 21, 34117 Kassel",
      website: "https://www.grimmwelt.de",
    },
    highlights: [
      "그림 형제 동화 원본 필사본 전시",
      "독일어 사전(Deutsches Wörterbuch) 편찬 과정 체험",
      "인터랙티브 동화 체험 존 - 아이와 어른 모두 즐거운 공간",
      "옥상 테라스에서 카셀 시내와 빌헬름스회에 공원 조망",
    ],
    nearbyAttractions: ["빌헬름스회에 산악공원", "카를스 아우에 공원", "프리데리치아눔"],
    tips: [
      "옥상 테라스(무료)에서 카셀 시내 전경을 무료로 즐길 수 있습니다.",
      "어린이와 함께라면 인터랙티브 체험 존에서 시간이 오래 걸릴 수 있습니다.",
      "금요일 저녁 연장 운영(~20:00)을 활용하면 여유롭게 관람할 수 있습니다.",
      "독일 동화길(Deutsche Märchenstraße)의 핵심 거점 박물관입니다.",
    ],
  },

  // ===== MARBURG (Central) =====
  "germany/central/marburg/marburg-castle": {
    heroGradient: "from-indigo-400 to-indigo-800",
    description: "마르부르크 구시가지 꼭대기에 자리한 11세기 기원의 란트그라프 성. 고딕 양식의 기사의 홀(Rittersaal)은 독일에서 가장 큰 고딕 세속 홀 중 하나이며, 성벽 테라스에서 라인강 지류와 구시가지의 파노라마 전경을 감상할 수 있습니다.",
    history: "11세기부터 헤센 란트그라프(방백)의 거주지로 사용되었습니다. 1228~1231년 성 엘리자베트(헝가리 공주)가 이곳에 머물며 빈민 구호 활동을 펼쳤고, 1529년에는 마르틴 루터와 츠빙글리의 종교 토론(마르부르크 회담)이 열렸습니다.",
    visitInfo: {
      hours: "4~10월 화~일 10:00~18:00, 11~3월 10:00~16:00 (월 휴관)",
      admission: "€5 (학생 €3.50)",
      address: "Schloß 1, 35037 Marburg",
    },
    highlights: [
      "고딕 기사의 홀(Rittersaal) - 독일 최대급 고딕 세속 건축 공간",
      "성벽 테라스에서 란강 계곡과 구시가지 파노라마 조망",
      "마르부르크 대학 문화사 박물관(성 내부)",
      "루터와 츠빙글리의 마르부르크 회담 역사",
    ],
    nearbyAttractions: ["구시가지 계단 거리", "마르크트 광장", "루터 교회"],
    photoTips: "성까지 올라가는 길 중간중간에 구시가지 지붕을 내려다보는 뷰포인트가 있습니다. 성벽 테라스에서 파노라마를 담으세요.",
    tips: [
      "구시가지에서 성까지 도보 약 15~20분(오르막). 편한 신발 필수.",
      "도시 엘리베이터를 이용하면 구시가지 고지대까지 쉽게 올라갈 수 있습니다.",
      "기사의 홀 내부는 가이드 투어에서만 볼 수 있는 경우가 있으니 확인하세요.",
      "일몰 시간에 성벽 테라스에서 보는 노을이 특히 아름답습니다.",
    ],
  },
  "germany/central/marburg/st-elizabeths-church": {
    heroGradient: "from-rose-500 to-red-800",
    description: "1235~1283년에 건립된 독일 최초의 순수 고딕 양식 교회. 헝가리 공주 출신의 성 엘리자베트(튀링겐 방백비)를 기리기 위해 건설되었으며, 중세 순례지로서 큰 명성을 얻었습니다. 내부의 금도금 성유물함과 엘리자베트 묘소가 주요 볼거리입니다.",
    history: "1231년 24세의 나이로 세상을 떠난 엘리자베트는 빈민 구호와 병자 간호에 헌신한 삶으로 1235년 시성되었습니다. 같은 해 독일 기사단이 그녀를 기리기 위해 이 교회 건설을 시작했으며, 프랑스 고딕 양식을 독일에 처음 도입한 건물로 건축사적 의의가 큽니다.",
    visitInfo: {
      hours: "4~9월 09:00~18:00, 10~3월 09:00~17:00",
      admission: "무료 (보물관 €3)",
      address: "Elisabethstraße 3, 35037 Marburg",
    },
    highlights: [
      "독일 최초 순수 고딕 양식의 건축사적 의의",
      "금도금 성 엘리자베트 성유물함(13세기)",
      "엘리자베트의 석관과 란트그라프 가문의 묘소",
      "13세기 스테인드글라스와 벽화 프레스코",
    ],
    nearbyAttractions: ["대학 식물원", "란강변 산책로", "구시가지 입구"],
    tips: [
      "기차역에서 구시가지로 가는 길에 위치해 도착 직후 방문하기 좋습니다.",
      "보물관(Schatzkammer)에 귀중한 중세 성유물이 전시되어 있습니다.",
      "엘리자베트의 생애를 미리 알고 가면 감동이 배가됩니다.",
      "주변 엘리자베트 산책로를 따라 란강변까지 걸어볼 수 있습니다.",
    ],
  },

  // ===== WIESBADEN (Central) =====
  "germany/central/wiesbaden/kurhaus": {
    heroGradient: "from-sky-500 to-sky-800",
    description: "1907년 빌헬름 2세 황제가 건설한 비스바덴의 상징적 건물. 신고전주의 양식의 장엄한 외관과 화려한 내부 장식이 인상적이며, 내부에는 유럽에서 가장 오래된 카지노 중 하나가 운영되고 있습니다. 콘서트, 무도회, 국제 회의 등 다목적으로 사용됩니다.",
    history: "1810년 첫 쿠어하우스가 건립된 이래 1907년 현재 건물이 프리드리히 폰 틸 설계로 완공되었습니다. 빌헬름 2세 황제가 '세계에서 가장 아름다운 쿠어하우스'가 되기를 원했으며, 제2차 세계대전 이후 미군 장교 클럽으로 사용되기도 했습니다.",
    visitInfo: {
      hours: "카지노: 매일 14:30~02:00 / 가이드 투어: 매일 (문의)",
      admission: "카지노 입장 €3.50 (정장 필수) / 투어 별도",
      address: "Kurhausplatz 1, 65189 Wiesbaden",
      website: "https://www.spielbank-wiesbaden.de",
    },
    highlights: [
      "신고전주의 양식의 장엄한 기둥 현관과 돔",
      "화려한 내부 장식의 카지노 게임룸",
      "프리드리히 폰 틸러 홀의 콘서트·이벤트",
      "쿠어하우스 앞 쿠어 공원과 분수 광장",
    ],
    nearbyAttractions: ["쿠어 공원", "테아터 콜로나덴", "코흐브루넨 온천"],
    tips: [
      "카지노 입장은 정장(남성 재킷) 필수이며 18세 이상만 가능합니다.",
      "카지노에 관심이 없어도 건물 외관과 쿠어 공원 산책만으로 충분합니다.",
      "매년 5월 국제 5월 축제(Maifestspiele)가 쿠어하우스에서 열립니다.",
      "밤에 조명이 켜진 쿠어하우스가 특히 아름답습니다.",
    ],
  },
  "germany/central/wiesbaden/nerobergbahn": {
    heroGradient: "from-green-400 to-green-700",
    description: "1888년부터 운행 중인 수력 구동 케이블카로, 화석 연료 없이 물의 무게만으로 운행하는 친환경 교통수단입니다. 네로베르크 언덕(245m)까지 3.5분 만에 올라가며, 정상에서는 비스바덴 시내, 라인강, 타우누스 산맥까지 펼쳐지는 파노라마 전경을 감상할 수 있습니다.",
    history: "1888년 개통 당시의 수력 구동 시스템이 130년 이상 지금까지 유지되고 있습니다. 산 위 차량의 물탱크에 물을 채워 무게 차이로 반대편 차량을 끌어올리는 친환경 원리로, 동력원이 물뿐인 세계적으로 드문 교통수단입니다.",
    visitInfo: {
      hours: "4~10월 10:00~19:00 (수~일, 공휴일) / 동절기 운휴",
      admission: "편도 €3.50, 왕복 €6",
      address: "Wilhelminenstraße, 65193 Wiesbaden",
    },
    highlights: [
      "130년 이상 된 수력 구동 시스템의 친환경 엔지니어링",
      "네로베르크 정상에서 비스바덴·라인강·타우누스 파노라마 조망",
      "러시아 정교회(금빛 양파돔)까지 도보 5분",
      "네로베르크 야외 수영장(여름 시즌)과 포도밭 산책",
    ],
    nearbyAttractions: ["러시아 정교회", "네로베르크 야외 수영장", "네로탈 공원"],
    photoTips: "케이블카가 올라가는 도중 중간에서 비스바덴 시내를 배경으로 촬영하면 독특한 앵글을 얻을 수 있습니다.",
    tips: [
      "편도로 올라가서 포도밭 사이 산책로로 내려오는 코스가 인기입니다.",
      "4~10월에만 운행하므로 방문 시기를 꼭 확인하세요.",
      "러시아 정교회까지 도보 5분이니 함께 방문하세요.",
      "비 오는 날이나 강풍 시 운휴할 수 있습니다.",
    ],
  },
  "germany/central/wiesbaden/kochbrunnen": {
    heroGradient: "from-orange-400 to-red-700",
    description: "비스바덴에서 가장 뜨거운 온천(66°C)이 솟아나는 곳으로, 도심 한복판에서 무료로 온천수를 맛볼 수 있습니다. 철분과 나트륨이 풍부한 온천수는 치료 효능으로 유명하며, 주변에 아름다운 온천 광장과 카페가 조성되어 있습니다.",
    visitInfo: {
      hours: "24시간 (야외 온천 분수)",
      admission: "무료",
      address: "Kochbrunnenplatz, 65189 Wiesbaden",
    },
    highlights: [
      "66°C 천연 온천수가 솟아오르는 분수대에서 무료 음용",
      "철분이 풍부해 붉은 침전물이 형성되는 독특한 광경",
      "코흐브루넨 템펠(신고전주의 파빌리온)의 우아한 건축",
      "주변 카페에서 온천 광장 분위기를 즐기며 휴식",
    ],
    nearbyAttractions: ["카이저 프리드리히 테르메", "쿠어하우스", "빌헬름 거리 쇼핑"],
    tips: [
      "온천수를 마셔볼 수 있지만 철분·소금기가 매우 강하니 한 모금만 시도하세요.",
      "뜨거운 물이므로 손을 넣을 때 주의하세요.",
      "카이저 프리드리히 테르메가 바로 근처에 있어 온천 체험과 함께 코스를 짜면 좋습니다.",
      "아침 산책 코스로 쿠어하우스에서 코흐브루넨까지 걸어보세요.",
    ],
  },
};
