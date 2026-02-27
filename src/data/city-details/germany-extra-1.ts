import type { CityDetail, AttractionDetail } from "../city-details";

export const germanyCityDetails2: Record<string, CityDetail> = {
  // ===== BAVARIA =====
  "germany/bavaria/augsburg": {
    heroGradient: "from-amber-500 to-red-700",
    description: "2,000년 역사를 가진 독일에서 가장 오래된 도시 중 하나. 로마 시대 아우구스타 빈델리코룸에서 시작되어, 르네상스 시대 푸거 가문의 금융 중심지로 번성했습니다. 세계 최초의 사회주택 푸게라이, 화려한 르네상스 시청사, 모차르트 아버지의 생가가 있는 문화의 도시입니다.",
    bestTime: "5~9월 (크리스마스 마켓: 11월 말~12월)",
    stayArea: "구시가지 중심부 (막시밀리안 거리 주변)",
    transport: "트램, 버스 (AVV 통합 티켓)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "르네상스 시청사와 막시밀리안 거리를 중심으로 한 역사 지구.", highlights: ["시청사 황금홀", "막시밀리안 거리", "성 울리히 교회"] },
      { name: "푸게라이 지구", nameEn: "Fuggerei Quarter", description: "1521년 설립된 세계 최초의 사회주택 단지가 있는 지역.", highlights: ["푸게라이", "푸거 박물관", "방커 전시관"] },
      { name: "레히 지구", nameEn: "Lechviertel", description: "레히 운하를 따라 중세 수공업 장인들이 살았던 아름다운 운하 지구.", highlights: ["레히 운하 산책로", "수공업자 거리", "물레방아"] },
    ],
    attractions: [
      { name: "푸게라이", nameEn: "Fuggerei", description: "1521년 야콥 푸거가 설립한 세계 최초의 사회주택 단지. 현재도 연 임대료 0.88유로에 입주 가능합니다.", category: "역사", tip: "모차르트의 증조부가 살았던 집이 박물관으로 운영됩니다." },
      { name: "시청사 황금홀", nameEn: "Augsburg Town Hall Golden Hall", description: "엘리아스 홀이 설계한 르네상스 시청사의 하이라이트. 14m 높이 천장의 황금 장식이 압도적입니다.", category: "건축", tip: "행사가 없는 날에만 내부 관람이 가능하니 사전 확인하세요." },
      { name: "모차르트 하우스", nameEn: "Mozart House Augsburg", description: "레오폴트 모차르트(볼프강의 아버지)가 태어난 집으로 모차르트 가문의 역사를 전시합니다.", category: "박물관" },
      { name: "성 울리히 & 아프라 교회", nameEn: "St. Ulrich and Afra", description: "가톨릭 바실리카와 개신교 교회가 나란히 서 있는 독특한 종교 화합의 상징.", category: "교회" },
      { name: "아우크스부르크 대성당", nameEn: "Augsburg Cathedral", description: "9세기에 기원한 로마네스크-고딕 대성당. 세계에서 가장 오래된 스테인드글라스 창(12세기)이 있습니다.", category: "성당", tip: "남쪽 회랑의 로마네스크 청동 문도 놓치지 마세요." },
    ],
    dayTrips: [
      { name: "뮌헨", nameEn: "Munich", description: "바이에른의 수도, 마리엔 광장과 영국 정원.", travelTime: "기차 약 30분", gradient: "from-blue-500 to-blue-800" },
      { name: "란츠베르크 암 레히", nameEn: "Landsberg am Lech", description: "레히강변의 그림 같은 바이에른 소도시.", travelTime: "기차 약 50분", gradient: "from-cyan-400 to-teal-700" },
    ],
    localFood: [
      { name: "츠비벨쿠헨", description: "양파를 듬뿍 올린 바이에른 전통 양파 타르트, 신선한 와인과 함께.", emoji: "🥧" },
      { name: "다첼", description: "아우크스부르크 특산 밀가루 만두, 다양한 소스와 곁들임.", emoji: "🥟" },
      { name: "리거레 맥주", description: "아우크스부르크 전통 양조장 리거레의 500년 역사 맥주.", emoji: "🍺" },
    ],
    tips: [
      "뮌헨에서 기차 30분 거리로 당일치기가 매우 편리합니다.",
      "푸게라이는 오후 늦게 방문하면 관광객이 적어 여유롭게 둘러볼 수 있습니다.",
      "레히 지구 운하 산책은 이른 아침이 가장 분위기 있습니다.",
      "아우크스부르크 인형극 박물관(Puppenkiste)은 아이와 함께라면 필수 방문지입니다.",
    ],
  },
  "germany/bavaria/bamberg": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "UNESCO 세계유산으로 지정된 중세 도시. 7개 언덕 위에 세워져 '프랑켄의 로마'로 불리며, 강 위에 지어진 구시청사, '작은 베네치아' 어부 지구, 그리고 독일 유일의 훈제 맥주 라우흐비어로 유명합니다. 2차 세계대전 폭격을 피해 중세 건축이 완벽히 보존된 보석 같은 도시입니다.",
    bestTime: "5~9월 (맥주 축제: 8월)",
    stayArea: "구시가지 중심부 (인젤슈타트 또는 베르크슈타트)",
    transport: "도보 (구시가지 전체 도보 가능)",
    districts: [
      { name: "인젤슈타트", nameEn: "Inselstadt", description: "레그니츠 강 사이 섬 위에 자리한 시민 상업 지구.", highlights: ["구시청사", "그뤼너 마르크트", "넵튠 분수"] },
      { name: "베르크슈타트", nameEn: "Bergstadt", description: "대성당과 주교 관저가 있는 언덕 위의 교회 지구.", highlights: ["밤베르크 대성당", "구궁전", "신궁전 장미 정원"] },
      { name: "작은 베네치아", nameEn: "Klein Venedig", description: "레그니츠 강변에 중세 어부들의 목조 가옥이 늘어선 그림 같은 지역.", highlights: ["목조 가옥 파노라마", "강변 산책로", "곤돌라 투어"] },
    ],
    attractions: [
      { name: "구시청사", nameEn: "Altes Rathaus Bamberg", description: "레그니츠 강 위 다리 한가운데 세워진 밤베르크의 상징. 벽면의 트롱프뢰유 프레스코화가 인상적입니다.", category: "건축", tip: "하류 쪽 다리에서 바라보면 가장 아름다운 전경을 담을 수 있습니다." },
      { name: "밤베르크 대성당", nameEn: "Bamberg Cathedral", description: "13세기 로마네스크-고딕 양식의 대성당. 유명한 밤베르크 기사상과 교황 클레멘스 2세의 유일한 독일 소재 교황 묘소가 있습니다.", category: "성당" },
      { name: "신궁전 장미 정원", nameEn: "Rose Garden Neue Residenz", description: "신궁전 뒤편 언덕 위의 장미 정원에서 밤베르크 구시가지 전체를 조망할 수 있습니다.", category: "정원", tip: "여름 장미 만개 시기(6~7월)에 방문하면 최고입니다." },
      { name: "슐렌켈라 양조장", nameEn: "Schlenkerla Brewery", description: "1405년부터 이어져 온 훈제 맥주(라우흐비어) 양조장. 너도밤나무 장작으로 훈연한 독특한 맛의 맥주를 맛볼 수 있습니다.", category: "맥주", tip: "라우흐비어 메르첸(Märzen)이 가장 대표적인 맛입니다." },
      { name: "작은 베네치아", nameEn: "Klein Venedig", description: "레그니츠 강변을 따라 중세 어부들의 반목조 가옥이 줄지어 있는 아름다운 경관. 강 건너편에서 바라보는 풍경이 특히 그림 같습니다.", category: "경관" },
    ],
    dayTrips: [
      { name: "뉘른베르크", nameEn: "Nuremberg", description: "카이저부르크 성과 크리스마스 마켓으로 유명한 프랑켄 최대 도시.", travelTime: "기차 약 40분", gradient: "from-amber-600 to-red-800" },
      { name: "뷔르츠부르크", nameEn: "Würzburg", description: "레지덴츠 궁전과 프랑켄 와인의 도시.", travelTime: "기차 약 1시간", gradient: "from-purple-400 to-violet-700" },
    ],
    localFood: [
      { name: "라우흐비어", description: "너도밤나무 장작으로 맥아를 훈연한 밤베르크 고유의 훈제 맥주.", emoji: "🍺" },
      { name: "밤베르거 횐라", description: "양파와 맥주 소스에 조린 밤베르크식 소시지 요리.", emoji: "🌭" },
      { name: "프랑켄 와인", description: "프랑켄 지방 특유의 복스보이텔 둥근 병에 담긴 드라이한 화이트 와인.", emoji: "🍷" },
    ],
    tips: [
      "뉘른베르크에서 기차 40분으로 당일치기에 완벽한 도시입니다.",
      "슐렌켈라에서 라우흐비어를 처음 마시면 독특한 훈제향에 놀랄 수 있지만, 두세 잔 마시면 중독됩니다.",
      "작은 베네치아 전경은 운터레 다리(Untere Brücke)에서 바라보는 것이 최고입니다.",
      "구시가지 전체가 걸어서 둘러볼 수 있는 아담한 규모로, 반나절이면 주요 명소를 모두 볼 수 있습니다.",
    ],
  },
  "germany/bavaria/garmisch-partenkirchen": {
    heroGradient: "from-sky-400 to-blue-900",
    description: "독일 최고봉 추크슈피체(2,962m) 기슭의 알프스 휴양 도시. 1936년 동계 올림픽 개최지이며, 파르트나흐 협곡의 장엄한 자연, 겨울 스키와 여름 하이킹의 천국입니다. 바이에른 전통 건축의 뤼프틀말라이(벽화) 장식 가옥들이 알프스 풍경과 어우러져 그림엽서 같은 마을을 이루고 있습니다.",
    bestTime: "12~3월 (스키) / 6~9월 (하이킹)",
    stayArea: "가르미슈 또는 파르텐키르헨 구시가지",
    transport: "버스, 케이블카 (뮌헨에서 기차 약 1시간 20분)",
    districts: [
      { name: "가르미슈", nameEn: "Garmisch", description: "상업과 관광의 중심지로 쇼핑거리와 레스토랑이 밀집.", highlights: ["리하르트 슈트라우스 광장", "카지노", "올림픽 스키 스타디움"] },
      { name: "파르텐키르헨", nameEn: "Partenkirchen", description: "전통 바이에른 가옥의 벽화(뤼프틀말라이)가 아름다운 구시가지.", highlights: ["루트비히 거리 벽화 가옥", "성 안톤 교회", "필로조펜베크 산책로"] },
    ],
    attractions: [
      { name: "추크슈피체", nameEn: "Zugspitze", description: "해발 2,962m 독일 최고봉. 정상에서 독일, 오스트리아, 이탈리아, 스위스 4개국 알프스를 조망합니다.", category: "자연", tip: "톱니바퀴 열차+케이블카 콤비 티켓을 추천합니다." },
      { name: "파르트나흐 협곡", nameEn: "Partnach Gorge", description: "700m 길이의 깊은 협곡 사이로 폭포가 쏟아지는 장관. 겨울에는 고드름이 장관을 이룹니다.", category: "자연", tip: "방수 재킷을 준비하세요. 동굴 통로에서 물이 떨어집니다." },
      { name: "알프슈피체", nameEn: "Alpspitze", description: "가르미슈 바로 위 알프스 봉우리로 알프스픽스 전망대에서 스릴 넘치는 절벽 뷰를 감상할 수 있습니다.", category: "자연" },
      { name: "올림픽 스키 스타디움", nameEn: "Olympic Ski Stadium", description: "1936년 동계 올림픽 경기장. 매년 새해 스키 점프 대회(노이야르스슈프링엔)가 열립니다.", category: "스포츠" },
      { name: "아이프 호수", nameEn: "Eibsee", description: "추크슈피체 기슭의 에메랄드빛 산정 호수. 카리브해를 연상시키는 맑은 물빛이 인상적입니다.", category: "자연", tip: "호수 일주 산책로(약 7km, 2시간)를 강력 추천합니다." },
    ],
    dayTrips: [
      { name: "미텐발트", nameEn: "Mittenwald", description: "바이올린 제조로 유명한 알프스 소도시, 화려한 벽화 가옥.", travelTime: "기차 약 20분", gradient: "from-green-400 to-emerald-700" },
      { name: "린더호프 궁전", nameEn: "Linderhof Palace", description: "루트비히 2세의 로코코 소궁전과 비너스 동굴.", travelTime: "버스 약 40분", gradient: "from-amber-400 to-yellow-700" },
    ],
    localFood: [
      { name: "카이저슈마른", description: "찢어진 팬케이크에 가루설탕을 뿌린 알프스 전통 디저트.", emoji: "🥞" },
      { name: "카세슈페츨레", description: "치즈와 볶은 양파를 올린 독일식 수제비, 산악 지방의 소울푸드.", emoji: "🧀" },
      { name: "슈바인스학세", description: "바이에른식 바삭하게 구운 돼지 족발, 크니델과 함께.", emoji: "🍖" },
    ],
    tips: [
      "추크슈피체 왕복 티켓(€72)은 톱니바퀴 열차 상행 + 케이블카 하행(또는 반대)으로 두 가지 경험이 가능합니다.",
      "파르트나흐 협곡은 오전 일찍 방문하면 인파를 피할 수 있습니다.",
      "뮌헨에서 바이에른 티켓(€29~)을 사용하면 기차 왕복이 매우 저렴합니다.",
      "겨울 스키 시즌에는 가르미슈-클래식, 추크슈피체 두 스키장 이용이 가능합니다.",
    ],
  },

  // ===== BERLIN & EAST =====
  "germany/berlin-east/erfurt": {
    heroGradient: "from-rose-500 to-red-800",
    description: "튀링겐주의 주도로 독일에서 가장 잘 보존된 중세 도시 중 하나입니다. 사람이 사는 다리 크레머브뤼케, 웅장한 대성당과 세베리 교회, 그리고 마르틴 루터가 수도사 생활을 했던 아우구스티너 수도원이 있는 깊은 역사의 도시입니다.",
    bestTime: "5~9월 (크리스마스 마켓: 11월 말~12월)",
    stayArea: "구시가지 중심 (피셔마르크트 / 앙거 광장 주변)",
    transport: "트램, 버스 (EVAG)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "대성당과 크레머브뤼케를 중심으로 한 중세 핵심 지구.", highlights: ["크레머브뤼케", "에르푸르트 대성당", "피셔마르크트"] },
      { name: "안드레아스 지구", nameEn: "Andreasviertel", description: "좁은 골목과 목조 가옥이 밀집한 분위기 있는 주거 지역.", highlights: ["안드레아스 교회", "중세 목조 가옥", "갤러리 골목"] },
      { name: "페터스베르크", nameEn: "Petersberg", description: "대성당 맞은편 언덕 위의 요새로 도시 전체를 조망할 수 있는 지역.", highlights: ["페터스베르크 요새", "시타델 공원", "파노라마 전망대"] },
    ],
    attractions: [
      { name: "크레머브뤼케", nameEn: "Krämerbrücke", description: "알프스 북쪽에서 가장 긴 주거용 다리. 32채의 목조 가옥이 다리 위에 세워져 있어 다리 위를 걷고 있다는 사실을 모를 정도입니다.", category: "랜드마크", tip: "다리 동쪽 끝 탑에 올라가면 지붕 너머로 도시 전경이 보입니다." },
      { name: "에르푸르트 대성당", nameEn: "Erfurt Cathedral", description: "1154년 건립된 고딕 대성당으로 70개 계단 위 돔플라츠에서 우뚝 서 있습니다. 세계에서 가장 큰 중세 교회종 글로리오사가 유명합니다.", category: "성당" },
      { name: "세베리 교회", nameEn: "Severikirche", description: "대성당 바로 옆에 나란히 서 있는 고딕 교회로, 두 교회의 실루엣이 에르푸르트의 상징적 스카이라인을 형성합니다.", category: "교회" },
      { name: "아우구스티너 수도원", nameEn: "Augustinian Monastery", description: "마르틴 루터가 1505~1511년 수도사로 생활했던 수도원. 종교개혁 역사의 중요한 현장입니다.", category: "역사" },
      { name: "페터스베르크 요새", nameEn: "Petersberg Citadel", description: "유럽에서 가장 잘 보존된 바로크 성채 중 하나. 도시 전체를 조망하는 최고의 전망 포인트입니다.", category: "요새", tip: "무료로 입장 가능하며, 지하 통로 가이드 투어도 있습니다." },
    ],
    dayTrips: [
      { name: "바이마르", nameEn: "Weimar", description: "괴테와 실러의 도시, 바우하우스의 발상지.", travelTime: "기차 약 15분", gradient: "from-emerald-500 to-green-800" },
      { name: "아이제나흐", nameEn: "Eisenach", description: "바르트부르크 성과 바흐의 출생지.", travelTime: "기차 약 50분", gradient: "from-stone-400 to-stone-700" },
    ],
    localFood: [
      { name: "튀링거 브라트부어스트", description: "마요람 향이 특징인 튀링겐 전통 숯불 소시지, 머스타드와 함께.", emoji: "🌭" },
      { name: "튀링거 클뢰세", description: "감자를 반죽해 만든 큼직한 감자 만두, 고기 요리의 단짝.", emoji: "🥔" },
      { name: "로스트브레텔", description: "튀링겐식 양념 구이 빵, 간식으로 인기.", emoji: "🍞" },
    ],
    tips: [
      "베를린에서 ICE로 약 2시간, 뮌헨에서도 약 2.5시간으로 접근성이 좋습니다.",
      "크레머브뤼케 축제(매년 6월 셋째 주말)에는 중세 분위기의 거리 축제가 열립니다.",
      "에르푸르트 크리스마스 마켓은 독일에서 가장 아름다운 마켓 중 하나로 꼽힙니다.",
      "바이마르까지 기차 15분이므로 두 도시를 하루에 묶어서 방문하는 것을 추천합니다.",
    ],
  },
  "germany/berlin-east/schwerin": {
    heroGradient: "from-blue-400 to-indigo-800",
    description: "메클렌부르크-포어포메른주의 주도로, 호수 위의 섬에 세워진 동화 같은 슈베린 성이 도시의 상징입니다. '호수의 도시'라는 별명답게 12개의 호수에 둘러싸여 있으며, 독일에서 가장 인구가 적은 주도이지만 그만큼 한적하고 아름다운 풍경을 자랑합니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 / 슈베린 성 주변",
    transport: "트램, 버스, 유람선",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "마르크트 광장과 대성당을 중심으로 한 소박한 구시가지.", highlights: ["마르크트 광장", "슈베린 대성당", "시립극장"] },
      { name: "슐로스 지구", nameEn: "Schloss Quarter", description: "슈베린 성과 성 정원, 주립박물관이 있는 호숫가 지역.", highlights: ["슈베린 성", "부르크 정원", "주립박물관"] },
    ],
    attractions: [
      { name: "슈베린 성", nameEn: "Schwerin Castle", description: "슈베리너 호수 위 섬에 세워진 동화 같은 궁전. 프랑스 샹보르 성에서 영감받은 로맨틱 역사주의 건축으로 현재 주 의회 건물로 사용됩니다.", category: "궁전", tip: "성 뒤편 부르크 정원에서 호수와 함께 성 전체를 담을 수 있습니다." },
      { name: "슈베린 대성당", nameEn: "Schwerin Cathedral", description: "14세기 북독일 고딕 양식의 대성당. 117m 높이의 탑 전망대에서 호수 도시 파노라마를 감상할 수 있습니다.", category: "성당", tip: "탑 전망대(220개 계단)에서의 조망이 압도적입니다." },
      { name: "부르크 정원", nameEn: "Burggarten", description: "슈베린 성을 둘러싼 아름다운 바로크식 정원. 조각상과 오랑주리, 그로토가 있습니다.", category: "정원" },
      { name: "주립박물관", nameEn: "Staatliches Museum Schwerin", description: "17세기 네덜란드 및 플랑드르 거장들의 회화 컬렉션이 뛰어난 미술관.", category: "박물관" },
    ],
    dayTrips: [
      { name: "비스마르", nameEn: "Wismar", description: "UNESCO 세계유산 한자동맹 도시, 북독일 고딕 벽돌 건축.", travelTime: "기차 약 30분", gradient: "from-red-400 to-red-700" },
    ],
    localFood: [
      { name: "메클렌부르거 리펜브라텐", description: "천천히 구운 돼지 갈비 요리, 북독일 전통 가정식.", emoji: "🍖" },
      { name: "피슈브뢰트헨", description: "신선한 훈제 생선을 넣은 북독일식 생선 롤빵.", emoji: "🐟" },
    ],
    tips: [
      "함부르크에서 기차 약 1시간 30분, 베를린에서 약 2시간 거리입니다.",
      "슈베린 성은 오전에 방문하면 역광 없이 사진 촬영이 좋습니다.",
      "여름에는 호수 유람선을 타고 성과 도시를 물 위에서 감상할 수 있습니다.",
    ],
  },
  "germany/berlin-east/rostock": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "발트해 연안 최대의 항구도시이자 한자동맹의 중심지였던 역사적인 도시입니다. 인근 바르네뮌데 해변 리조트는 독일에서 가장 인기 있는 해변 휴양지 중 하나이며, 성 마리엔 교회의 중세 천문시계, 대학도시로서의 활기가 어우러진 매력적인 도시입니다.",
    bestTime: "6~9월 (한자세일 축제: 8월)",
    stayArea: "구시가지 중심부 / 바르네뮌데",
    transport: "트램, S-Bahn, 버스 (RSAG)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "한자동맹 시대의 고딕 벽돌 건축이 남아있는 역사 중심지.", highlights: ["성 마리엔 교회", "노이어 마르크트", "크뢰펠리너 거리"] },
      { name: "바르네뮌데", nameEn: "Warnemünde", description: "로스토크 북쪽의 발트해 해변 리조트, 넓은 백사장과 등대.", highlights: ["바르네뮌데 해변", "등대", "알터 슈트롬 어항"] },
      { name: "시내 항구", nameEn: "Stadthafen", description: "크루즈선과 역사적 범선이 정박하는 현대적 항구 지구.", highlights: ["크루즈 터미널", "IGA 공원", "항구 산책로"] },
    ],
    attractions: [
      { name: "성 마리엔 교회", nameEn: "St. Mary's Church Rostock", description: "13세기 북독일 고딕 벽돌 교회. 1472년 제작된 천문시계가 현재까지 작동하며 매일 정오에 12사도 퍼레이드를 보여줍니다.", category: "교회", tip: "정오 직전에 입장하면 천문시계의 12사도 행렬을 볼 수 있습니다." },
      { name: "바르네뮌데 해변", nameEn: "Warnemünde Beach", description: "독일에서 가장 넓은 백사장 해변(폭 150m). 여름이면 슈트란트코르프(지붕 달린 비치 의자)가 해변을 가득 채웁니다.", category: "해변" },
      { name: "바르네뮌데 등대", nameEn: "Warnemünde Lighthouse", description: "1897년 건설된 37m 높이의 등대. 전망대에서 발트해와 해변의 탁 트인 경관을 감상할 수 있습니다.", category: "랜드마크", tip: "티팟(Teepott) 건물과 함께 촬영하면 상징적인 사진을 얻을 수 있습니다." },
      { name: "크뢰펠리너 거리", nameEn: "Kröpeliner Strasse", description: "구시가지의 주요 보행자 거리로 한자동맹 시대 상인 가옥과 로스토크 대학교가 자리합니다.", category: "거리" },
    ],
    dayTrips: [
      { name: "슈트랄준트", nameEn: "Stralsund", description: "UNESCO 세계유산 한자 도시, 독일 해양박물관.", travelTime: "기차 약 1시간", gradient: "from-blue-400 to-blue-700" },
      { name: "뤼겐 섬", nameEn: "Rügen Island", description: "독일 최대의 섬, 하얀 절벽과 해변 리조트.", travelTime: "기차 약 1시간 30분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "피슈브뢰트헨", description: "신선한 청어, 훈제 생선 등을 넣은 발트해식 생선 롤빵.", emoji: "🐟" },
      { name: "로스토커 필스너", description: "로스토크 전통 양조장의 청량한 필스너 맥주.", emoji: "🍺" },
      { name: "산도른 요리", description: "발트해 연안 특산 산자나무 열매로 만든 잼, 주스, 리큐르.", emoji: "🍊" },
    ],
    tips: [
      "베를린에서 ICE로 약 2시간, 함부르크에서 약 2시간 거리입니다.",
      "한자세일(Hanse Sail, 매년 8월)은 세계 최대 전통 범선 축제로 100만 명이 방문합니다.",
      "구시가지에서 바르네뮌데까지 S-Bahn으로 약 20분이면 도착합니다.",
      "여름 성수기 바르네뮌데 해변은 슈트란트코르프(비치 의자) 예약을 추천합니다.",
    ],
  },

  // ===== NORTH =====
  "germany/north/hanover": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "니더작센주의 주도이자 세계적인 산업 박람회 도시. 헤렌하우젠 왕실 정원은 유럽에서 가장 중요한 바로크 정원 중 하나이며, 마쉬 호수와 구시가지의 목조 가옥, 신시청사의 독특한 아치형 엘리베이터가 인상적인 도시입니다.",
    bestTime: "5~9월 (하노버 슈첸페스트: 7월)",
    stayArea: "구시가지 / 중앙역 주변",
    transport: "U-Bahn, 트램, 버스 (GVH)",
    districts: [
      { name: "알트슈타트", nameEn: "Altstadt", description: "중세 목조 가옥과 마르크트 교회가 있는 구시가지 핵심 지역.", highlights: ["마르크트 교회", "구시청사", "라이네 궁전"] },
      { name: "헤렌하우젠", nameEn: "Herrenhausen", description: "왕실 정원과 빌헬름 라이프니츠 대학이 있는 서쪽 지역.", highlights: ["그로서 가르텐", "베르크 정원", "빌헬름 부슈 박물관"] },
      { name: "마쉬 호수", nameEn: "Maschsee", description: "시민 휴식처인 인공 호수 주변의 녹지 지역.", highlights: ["마쉬 호수 산책로", "슈프렝겔 미술관", "니더작센 주립박물관"] },
    ],
    attractions: [
      { name: "헤렌하우젠 왕실 정원", nameEn: "Herrenhausen Royal Gardens", description: "유럽에서 가장 중요한 바로크 정원 중 하나. 대분수, 미로 정원, 그로토가 있는 그로서 가르텐과 영국식 베르크 정원으로 구성됩니다.", category: "정원", tip: "여름 저녁 분수쇼와 불꽃 축제가 열리니 일정을 확인하세요." },
      { name: "신시청사", nameEn: "New Town Hall Hanover", description: "1913년 완공된 웅장한 시청사. 유럽에서 유일한 아치형 엘리베이터로 돔 전망대에 올라갈 수 있습니다.", category: "건축", tip: "아치형 엘리베이터(€3.50)는 비스듬히 올라가는 독특한 경험입니다." },
      { name: "마쉬 호수", nameEn: "Maschsee Lake", description: "시내 중심의 인공 호수로 보트, 카약, 호수 축제가 열리는 시민 휴식 공간입니다.", category: "호수" },
      { name: "슈프렝겔 미술관", nameEn: "Sprengel Museum", description: "20세기 현대미술 전문 미술관. 피카소, 클레, 니키 드 생팔의 작품이 소장되어 있습니다.", category: "박물관" },
      { name: "니키 드 생팔 산책로", nameEn: "Nanas by Niki de Saint Phalle", description: "도심 곳곳에 설치된 니키 드 생팔의 알록달록한 나나 조각상. 하노버의 상징적 공공미술입니다.", category: "예술" },
    ],
    dayTrips: [
      { name: "하멜른", nameEn: "Hamelin", description: "피리 부는 사나이(하멜른의 쥐잡이) 전설의 도시.", travelTime: "S-Bahn 약 45분", gradient: "from-amber-400 to-orange-700" },
      { name: "힐데스하임", nameEn: "Hildesheim", description: "UNESCO 세계유산 성 미하엘 교회와 1,000년 된 장미 넝쿨.", travelTime: "S-Bahn 약 30분", gradient: "from-rose-400 to-rose-700" },
    ],
    localFood: [
      { name: "하노버 리벤", description: "겨자와 식초에 절인 돼지 갈비, 하노버 전통 요리.", emoji: "🍖" },
      { name: "뤼텐예버 맥주", description: "하노버 전통 양조장 뤼텐예버의 필스너.", emoji: "🍺" },
      { name: "칼렌베르거 지방 요리", description: "채소와 돼지고기를 넣은 하노버식 스튜.", emoji: "🥘" },
    ],
    tips: [
      "빨간 실(Roter Faden) 표시를 따라가면 36개 주요 관광지를 도보로 순회할 수 있습니다.",
      "하노버 슈첸페스트(7월)는 세계 최대의 사격 축제로 200만명이 방문합니다.",
      "마쉬 호수 축제(7~8월)에는 호수변에서 음악과 음식을 즐길 수 있습니다.",
      "ICE 주요 노선 정차역으로 프랑크푸르트(2.5시간), 베를린(1.5시간) 접근이 편리합니다.",
    ],
  },
  "germany/north/kiel": {
    heroGradient: "from-blue-500 to-slate-800",
    description: "슐레스비히-홀슈타인주의 주도이자 발트해 피오르드에 자리한 항구도시. 매년 6월 열리는 킬러 보헤(Kieler Woche)는 세계 최대의 요트 축제로, 전 세계에서 500만 명이 방문합니다. 해군 역사와 북유럽으로 향하는 페리의 출발지로서의 역할도 매력적입니다.",
    bestTime: "6~9월 (킬러 보헤: 6월 마지막 주)",
    stayArea: "구시가지 / 킬 피오르드 연안",
    transport: "버스, 페리 (KVG)",
    districts: [
      { name: "구시가지", nameEn: "Altstadt", description: "알터 마르크트와 니콜라이 교회를 중심으로 한 시내 핵심 지역.", highlights: ["알터 마르크트", "니콜라이 교회", "킬 오페라"] },
      { name: "킬리니", nameEn: "Kiellinie", description: "킬 피오르드 서안을 따라 이어지는 해안 산책로 지역.", highlights: ["힌덴부르크 강변", "아쿠아리움", "킬 요트 클럽"] },
    ],
    attractions: [
      { name: "킬 피오르드", nameEn: "Kiel Fjord", description: "도시를 가로지르는 발트해 피오르드. 대형 크루즈선, 요트, 페리가 오가는 역동적인 항구 풍경을 감상할 수 있습니다.", category: "자연" },
      { name: "라보에 해군 기념관", nameEn: "Laboe Naval Memorial", description: "85m 높이의 해군 기념탑과 2차대전 잠수함 U-995가 전시된 해군 역사 공간.", category: "기념관", tip: "탑 꼭대기에서 킬 피오르드와 발트해 전경을 한눈에 볼 수 있습니다." },
      { name: "킬 해양박물관", nameEn: "Schifffahrtsmuseum Kiel", description: "옛 생선 경매장 건물에 자리한 해양 역사 박물관. 킬의 조선업과 해양 역사를 전시합니다.", category: "박물관" },
      { name: "킬 아쿠아리움", nameEn: "Aquarium GEOMAR", description: "발트해와 북해 해양 생물을 전시하는 수족관. 물범 먹이주기가 인기입니다.", category: "수족관" },
    ],
    dayTrips: [
      { name: "뤼벡", nameEn: "Lübeck", description: "UNESCO 세계유산 한자 도시, 홀스텐 문과 마르치판의 본고장.", travelTime: "기차 약 1시간 15분", gradient: "from-red-500 to-red-800" },
    ],
    localFood: [
      { name: "키엘러 슈프로텐", description: "킬 특산 훈제 작은 청어, 발트해의 맛.", emoji: "🐟" },
      { name: "라프스쿠스", description: "소금에 절인 쇠고기와 비트, 감자를 섞은 북독일 전통 선원 요리.", emoji: "🥘" },
      { name: "킬 맥주", description: "킬 지역 양조장의 신선한 필스너와 라거.", emoji: "🍺" },
    ],
    tips: [
      "킬러 보헤(6월 마지막 주)는 요트 레이스와 함께 도시 전체가 축제 분위기로 물듭니다.",
      "함부르크에서 기차 약 1시간 15분으로 당일치기가 가능합니다.",
      "라보에 기념관까지는 킬 항구에서 페리로 이동하면 피오르드 크루즈를 겸할 수 있습니다.",
      "스칸디나비아(노르웨이, 스웨덴)행 페리가 킬에서 출발하므로 북유럽 여행 연계가 가능합니다.",
    ],
  },
  "germany/north/sylt": {
    heroGradient: "from-amber-300 to-cyan-700",
    description: "독일 최북단 북해의 럭셔리 섬. 40km에 달하는 끝없는 백사장, 붉은 절벽(로테 클리프), 초가지붕 프리지아 전통 가옥이 어우러진 독일 최고급 휴양지입니다. 독일의 생트로페로 불리며 셀러브리티와 부유층이 즐겨 찾지만, 자연 그대로의 거친 북해 풍경은 누구에게나 감동을 줍니다.",
    bestTime: "6~9월 (해수욕) / 10~11월 (가을 폭풍 관광)",
    stayArea: "베스터란트 / 캄펜",
    transport: "버스, 자전거 (본토에서 기차로 힌덴부르크 댐 경유)",
    districts: [
      { name: "베스터란트", nameEn: "Westerland", description: "쥘트의 중심 마을로 해변, 쇼핑, 레스토랑이 밀집.", highlights: ["베스터란트 해변", "쿠어 프롬나드", "실트 뮤지엄"] },
      { name: "캄펜", nameEn: "Kampen", description: "독일 최고급 리조트 마을. 초가지붕 가옥과 고급 부티크.", highlights: ["로테 클리프", "우베 뒤네", "위스키 마일"] },
      { name: "리스트", nameEn: "List", description: "독일 최북단 마을로 이동 사구와 굴 양식장이 유명.", highlights: ["엘렌보겐 곶", "이동 사구", "굴 양식장"] },
    ],
    attractions: [
      { name: "로테 클리프", nameEn: "Red Cliff", description: "캄펜의 상징인 붉은 점토 절벽. 일몰 시 붉게 물드는 절벽과 북해의 풍경이 장관입니다.", category: "자연", tip: "일몰 시간에 맞춰 방문하면 절벽이 붉게 타오르는 장관을 볼 수 있습니다." },
      { name: "베스터란트 해변", nameEn: "Westerland Beach", description: "쥘트에서 가장 크고 유명한 해변. 슈트란트코르프(지붕 달린 비치 의자)가 늘어선 전형적인 북독일 해변 풍경.", category: "해변" },
      { name: "우베 뒤네", nameEn: "Uwe Dune", description: "캄펜 인근 해발 52.5m의 쥘트 최고점. 나무 전망대에서 섬 전체와 북해를 360도 조망합니다.", category: "전망대" },
      { name: "리스트 이동 사구", nameEn: "Wandering Dunes List", description: "유럽에서 가장 큰 이동 사구 중 하나. 바람에 따라 매년 모양이 변하는 살아있는 사막 풍경입니다.", category: "자연" },
      { name: "초가지붕 가옥 마을", nameEn: "Thatched-Roof Houses", description: "캄펜과 케이툼 마을의 프리지아 전통 초가지붕 가옥들. 독일 북해안의 대표적 건축 양식입니다.", category: "건축" },
    ],
    dayTrips: [
      { name: "아이랜드 푀어", nameEn: "Island of Föhr", description: "쥘트 남쪽의 '프리지아의 녹색 섬', 자전거 여행의 천국.", travelTime: "페리 약 45분", gradient: "from-green-400 to-teal-700" },
    ],
    localFood: [
      { name: "쥘터 로열 굴", description: "리스트 갯벌에서 양식한 쥘트 특산 굴, 레몬 즙과 함께.", emoji: "🦪" },
      { name: "프리지아 차 문화", description: "크림과 클룬체(설탕 사탕)를 넣어 마시는 북프리지아 전통 차.", emoji: "🍵" },
      { name: "크라벤브뢰트헨", description: "북해산 새우를 듬뿍 올린 오픈 샌드위치.", emoji: "🦐" },
    ],
    tips: [
      "쥘트까지는 함부르크에서 기차로 약 3시간(힌덴부르크 댐 경유). 자동차는 열차에 싣고 건너갑니다.",
      "자전거가 최고의 이동 수단입니다. 렌탈 숍이 곳곳에 있습니다.",
      "여름 성수기(7~8월)에는 숙소 예약이 필수이며 가격이 매우 높습니다.",
      "가을 폭풍(10~11월) 시기 거친 북해를 감상하는 '폭풍 관광'도 인기입니다.",
    ],
  },
};

export const germanyAttractionDetails2: Record<string, AttractionDetail> = {
  // ===== AUGSBURG =====
  "germany/bavaria/augsburg/fuggerei": {
    heroGradient: "from-amber-500 to-red-700",
    description: "1521년 대부호 야콥 푸거 2세가 설립한 세계 최초의 사회주택 단지입니다. 500년이 지난 지금도 67채의 가옥에 약 150명의 가난한 아우크스부르크 시민이 연간 임대료 0.88유로(당시 1라인 굴덴)에 거주하고 있습니다. 모차르트의 증조부 프란츠 모차르트가 살았던 집이 박물관으로 공개되어 있습니다.",
    history: "1521년 유럽 최대의 금융 가문 푸거의 야콥 2세가 가톨릭 신자 중 빈곤층을 위해 설립했습니다. 입주 조건은 아우크스부르크 시민일 것, 가톨릭 신자일 것, 매일 푸거 가문을 위해 기도할 것입니다. 2차대전 폭격으로 대부분 파괴되었으나 원래 설계 그대로 재건되었습니다.",
    visitInfo: {
      hours: "4~9월 08:00~20:00, 10~3월 09:00~18:00",
      admission: "성인 €6.50, 학생 €5.50",
      address: "Jakoberstraße 26, 86152 Augsburg",
      website: "https://www.fugger.de",
    },
    highlights: [
      "500년간 변하지 않은 연간 임대료 0.88유로의 사회주택",
      "모차르트 증조부의 집 내부 박물관",
      "2차대전 방공호(벙커) 전시관",
      "푸게라이 설립 역사와 푸거 가문 전시",
      "조용한 중정과 분수가 있는 마을 같은 분위기",
    ],
    nearbyAttractions: ["아우크스부르크 대성당", "시청사 황금홀", "막시밀리안 거리"],
    photoTips: "중정(Herrengasse)의 분수와 노란색 가옥이 어우러진 구도가 가장 아름답습니다. 오전 빛이 좋습니다.",
    tips: [
      "현재도 거주민이 생활하고 있으므로 조용히 관람해 주세요.",
      "오디오 가이드(독일어·영어)가 포함되어 있어 역사를 자세히 이해할 수 있습니다.",
      "벙커 전시관에서 2차대전 당시 폭격과 재건 과정을 볼 수 있습니다.",
      "구시가지에서 도보 10분 거리이며, 트램 1번 푸게라이슈트라세역 하차가 편리합니다.",
    ],
  },
  "germany/bavaria/augsburg/augsburg-town-hall": {
    heroGradient: "from-yellow-500 to-amber-800",
    description: "엘리아스 홀이 설계한 르네상스 건축의 걸작으로, 1620년 완공 당시 알프스 북쪽에서 가장 높은 세속 건물이었습니다. 3층의 황금홀(Goldener Saal)은 14m 높이의 천장에 금박 장식과 거대한 문장 그림이 장식된 경이로운 공간입니다.",
    history: "1615~1620년 엘리아스 홀의 설계로 건축되었습니다. 30년 전쟁 중 1635년 아우크스부르크 종교 화의가 이 건물에서 체결되었습니다. 1944년 2차대전 폭격으로 황금홀이 전소되었으나, 1980~1996년 원래 설계 도면에 따라 복원되었습니다.",
    visitInfo: {
      hours: "10:00~18:00 (행사 시 관람 불가, 사전 확인 필요)",
      admission: "성인 €6, 학생 €4",
      address: "Rathausplatz 2, 86150 Augsburg",
    },
    highlights: [
      "14m 높이 천장의 황금홀(Goldener Saal) 금박 장식",
      "황제의 간과 아우크스부르크 시 문장 대형 벽화",
      "르네상스 건축 양식의 대칭적 정면부",
      "광장의 아우구스투스 분수와 어우러진 전경",
    ],
    nearbyAttractions: ["페를라흐 탑", "막시밀리안 거리", "아우구스투스 분수"],
    photoTips: "광장 건너편에서 시청사와 페를라흐 탑을 함께 담으면 아우크스부르크를 대표하는 사진을 얻을 수 있습니다.",
    tips: [
      "행사(결혼식, 공식 행사 등)가 있으면 황금홀 관람이 불가하니 반드시 사전 확인하세요.",
      "바로 옆 페를라흐 탑(€2)에 올라가면 아우크스부르크 시내와 알프스 조망이 가능합니다.",
      "크리스마스 마켓 시즌에는 시청사 창문이 거대한 강림절 달력으로 변합니다.",
      "광장의 아우구스투스 분수도 르네상스 걸작이니 함께 감상하세요.",
    ],
  },
  "germany/bavaria/augsburg/augsburg-cathedral": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "9세기에 기원한 로마네스크-고딕 대성당으로, 세계에서 가장 오래된 스테인드글라스 창(12세기, 예언자 창)이 남아 있는 것으로 유명합니다. 11세기 로마네스크 청동 문과 한스 홀바인 장로의 제단화 등 천 년 이상의 예술 작품이 소장되어 있습니다.",
    history: "823년 주교좌 성당으로 축성되었으며, 현재 건물은 11~14세기에 걸쳐 건축되었습니다. 로마네스크 양식의 서쪽 부분과 고딕 양식의 동쪽 부분이 공존하는 독특한 구조입니다.",
    visitInfo: {
      hours: "월~토 07:00~18:00, 일·공휴일 12:00~18:00",
      admission: "무료 (기부 환영)",
      address: "Frauentorstraße 2, 86152 Augsburg",
    },
    highlights: [
      "12세기 '예언자 창' - 현존 세계 최고(最古)의 스테인드글라스",
      "11세기 로마네스크 청동 문 35개 패널",
      "한스 홀바인 장로의 성모 마리아 제단화",
      "로마네스크와 고딕이 공존하는 건축 양식",
      "지하 크립트의 초기 기독교 유물",
    ],
    nearbyAttractions: ["주교 관저", "모차르트 하우스", "푸게라이"],
    tips: [
      "예언자 스테인드글라스 창은 남쪽 익랑(翼廊)에 있으니 놓치지 마세요.",
      "미사 시간에는 관광이 제한될 수 있으니 시간을 확인하세요.",
      "로마네스크 청동 문은 남쪽 입구에 설치되어 있습니다.",
      "조용한 분위기에서 세밀하게 관람하려면 오전 시간을 추천합니다.",
    ],
  },

  // ===== BAMBERG =====
  "germany/bavaria/bamberg/altes-rathaus-bamberg": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "레그니츠 강 한가운데 다리 위에 세워진 밤베르크의 가장 상징적인 건축물입니다. 주교와 시민 어느 쪽에도 속하지 않는 중립 지대에 시청사를 세웠다는 전설이 전해지며, 벽면의 환상적인 트롱프뢰유(눈속임 그림) 프레스코화가 건물을 더욱 특별하게 만듭니다.",
    history: "14세기에 처음 건설되었으며, 1756년 바로크 양식으로 재건되었습니다. 전설에 따르면 주교가 시민에게 시청사 부지를 제공하길 거부하자, 시민들이 강 한가운데에 인공 섬을 만들어 건설했다고 합니다.",
    visitInfo: {
      hours: "루트비히 컬렉션: 화~일 10:00~18:00 (월요일 휴관)",
      admission: "성인 €7, 학생 €5 (루트비히 도자기 컬렉션 포함)",
      address: "Obere Brücke 1, 96047 Bamberg",
    },
    highlights: [
      "강 위 다리에 세워진 독특한 건축 구조",
      "벽면의 트롱프뢰유(눈속임) 바로크 프레스코화",
      "다리 아래로 지나가는 레그니츠 강물의 운치",
      "루트비히 도자기 컬렉션 상설 전시",
      "야간 조명으로 빛나는 환상적인 야경",
    ],
    nearbyAttractions: ["밤베르크 대성당", "작은 베네치아", "그뤼너 마르크트"],
    photoTips: "하류 쪽 운터레 다리(Untere Brücke)에서 시청사 전체를 강물과 함께 담을 수 있습니다. 야경 촬영은 삼각대 필수입니다.",
    tips: [
      "외부에서 감상하는 것이 하이라이트이며, 내부 도자기 전시는 선택 사항입니다.",
      "다리 위 시청사 아래 통로로 걸어가면 건물 구조를 가까이서 볼 수 있습니다.",
      "야경이 매우 아름다우니 저녁에 다시 방문하는 것을 추천합니다.",
      "다리 난간에 있는 작은 조각상들도 세심하게 살펴보세요.",
    ],
  },
  "germany/bavaria/bamberg/bamberg-cathedral": {
    heroGradient: "from-stone-500 to-amber-800",
    description: "밤베르크 언덕 위에 우뚝 솟은 4개의 첨탑이 인상적인 13세기 대성당입니다. 로마네스크와 고딕 양식이 공존하며, 유명한 '밤베르크 기사상'과 알프스 북쪽 유일의 교황 묘소(클레멘스 2세)가 있는 중요한 종교 건축물입니다.",
    history: "1004년 하인리히 2세가 밤베르크 교구를 설립하며 첫 성당을 건축했으나 화재로 소실되었고, 현재 건물은 1237년 완공되었습니다. 하인리히 2세와 쿠니군데 황후의 합장묘가 틸만 리멘슈나이더의 조각으로 유명합니다.",
    visitInfo: {
      hours: "4~10월 09:00~18:00, 11~3월 09:00~17:00",
      admission: "무료 (교구 박물관 별도 €5)",
      address: "Domplatz 2, 96049 Bamberg",
      website: "https://www.erzbistum-bamberg.de",
    },
    highlights: [
      "밤베르크 기사상(Bamberger Reiter) - 중세 조각의 걸작, 미스터리한 기사의 정체",
      "틸만 리멘슈나이더의 하인리히 2세 황제 부부 석관",
      "교황 클레멘스 2세 묘소 - 알프스 북쪽 유일의 교황 무덤",
      "4개의 대칭 첨탑이 이루는 장엄한 외관",
      "퓌르스텐포르탈(군주의 문)의 최후의 심판 조각",
    ],
    nearbyAttractions: ["신궁전 장미 정원", "구궁전", "교구 박물관"],
    tips: [
      "밤베르크 기사상은 북쪽 내부 기둥에 있으니 놓치지 마세요.",
      "미사 시간에는 관광이 제한되므로 방문 전 시간을 확인하세요.",
      "대성당 앞 돔플라츠에서 신궁전까지 한눈에 보이는 광장 뷰가 인상적입니다.",
      "교구 박물관에서 대성당 보물과 중세 직물을 관람할 수 있습니다.",
    ],
  },
  "germany/bavaria/bamberg/schlenkerla": {
    heroGradient: "from-amber-600 to-brown-800",
    description: "1405년부터 이어져 온 밤베르크의 전설적인 라우흐비어(훈제 맥주) 양조장 겸 레스토랑입니다. 너도밤나무 장작으로 맥아를 직접 훈연하여 만드는 독특한 풍미의 맥주는 세계 어디에서도 맛볼 수 없는 밤베르크만의 특별한 경험입니다.",
    history: "기록에 따르면 1405년부터 이 자리에서 양조가 시작되었습니다. '슐렌켈라'라는 이름은 이전 양조장 주인의 비틀거리는 걸음걸이(schlenkern)에서 유래했다고 전해집니다. 지하 돌 저장고에서 전통 방식 그대로 라우흐비어를 양조합니다.",
    visitInfo: {
      hours: "매일 09:30~23:30",
      admission: "무료 입장 (음식·음료 개별 구매)",
      address: "Dominikanerstraße 6, 96049 Bamberg",
      website: "https://www.schlenkerla.de",
    },
    highlights: [
      "너도밤나무 장작으로 훈연한 정통 라우흐비어 메르첸",
      "600년 이상 된 역사적 건물의 분위기 있는 실내",
      "지하 돌 저장고에서의 전통 양조 방식",
      "계절 한정 라우흐비어(바이첸, 우르복 등) 시음",
    ],
    nearbyAttractions: ["구시청사", "밤베르크 대성당", "그뤼너 마르크트"],
    tips: [
      "라우흐비어 메르첸(Märzen)이 가장 대표적이며, 처음에는 독특한 훈제향에 놀랄 수 있지만 곧 매력에 빠지게 됩니다.",
      "점심시간과 저녁에는 매우 붐비므로 오전이나 오후 이른 시간 방문을 추천합니다.",
      "프랑켄 전통 음식(학세, 소시지 등)과 함께 맥주를 즐기세요.",
      "여름에는 안뜰 비어가르텐 좌석이 분위기 있습니다.",
    ],
  },

  // ===== GARMISCH-PARTENKIRCHEN =====
  "germany/bavaria/garmisch-partenkirchen/zugspitze": {
    heroGradient: "from-sky-300 to-blue-900",
    description: "해발 2,962m의 독일 최고봉으로, 정상에서 독일, 오스트리아, 이탈리아, 스위스 4개국의 400개 이상 알프스 봉우리를 조망할 수 있습니다. 톱니바퀴 열차(자크반)와 케이블카 두 가지 방법으로 정상에 오를 수 있으며, 정상의 빙하 스키장은 연중 스키가 가능합니다.",
    history: "1820년 측량관 요제프 나우스가 최초 공식 등정에 성공했습니다. 1930년 바이에른 추크슈피체 철도가 개통되며 관광 명소가 되었고, 2017년 최신 케이블카 '자일반 추크슈피체'가 개통하여 접근성이 크게 향상되었습니다.",
    visitInfo: {
      hours: "첫차 08:00, 막차 16:30 (시즌별 변동)",
      admission: "왕복 성인 €72, 청소년 €41 (톱니바퀴 열차+케이블카 콤비)",
      address: "Olympiastraße 27, 82467 Garmisch-Partenkirchen",
      website: "https://zugspitze.de",
    },
    highlights: [
      "독일 최고봉 정상에서 4개국 알프스 360도 파노라마",
      "톱니바퀴 열차(자크반)의 알프스 산악 철도 체험",
      "2017년 개통 최신 케이블카의 스릴 넘치는 공중 여행",
      "정상 빙하 위 전망 플랫폼",
      "슈네페르너하우스 기상 관측소와 빙하 체험",
      "독일-오스트리아 국경의 금색 십자가 정상 표지",
    ],
    nearbyAttractions: ["아이프 호수", "파르트나흐 협곡", "알프슈피체"],
    photoTips: "정상의 금색 십자가 앞에서 기념 촬영이 필수입니다. 오전에 구름이 적어 조망이 좋습니다.",
    tips: [
      "톱니바퀴 열차로 올라가고 케이블카로 내려오면(또는 반대) 두 가지 경험을 모두 할 수 있습니다.",
      "정상은 평지보다 15~20도 낮으므로 여름에도 방한복이 필수입니다.",
      "맑은 날을 골라 방문하세요. 구름이 끼면 조망이 전혀 보이지 않습니다.",
      "바이에른 추크슈피체 카드(2일)를 구매하면 주변 리프트도 이용 가능합니다.",
    ],
  },
  "germany/bavaria/garmisch-partenkirchen/partnach-gorge": {
    heroGradient: "from-emerald-600 to-teal-900",
    description: "700m 길이의 깊은 석회암 협곡 사이로 파르트나흐 계곡의 물줄기가 쏟아지는 장관을 연출합니다. 바위를 깎아 만든 터널과 나무 산책로를 통해 협곡 내부를 걸으며, 머리 위로 떨어지는 폭포와 에메랄드빛 물웅덩이를 만날 수 있습니다. 겨울에는 거대한 고드름이 장관을 이룹니다.",
    history: "1912년 자연 기념물로 지정되었으며, 그 이전에도 목재 운반용 수로로 사용되었습니다. 현재의 관광 산책로는 바위를 관통하는 터널과 철제 난간으로 정비되어 안전하게 협곡을 탐방할 수 있습니다.",
    visitInfo: {
      hours: "여름 08:00~18:00, 겨울 09:00~18:00 (날씨에 따라 변동)",
      admission: "성인 €6, 어린이 €3",
      address: "Partnachklamm, 82467 Garmisch-Partenkirchen",
    },
    highlights: [
      "700m 암벽 사이를 걷는 협곡 터널 산책로",
      "머리 위에서 쏟아지는 폭포와 물안개",
      "에메랄드빛 투명한 계곡 물웅덩이",
      "겨울철 거대한 고드름과 얼어붙은 폭포의 장관",
    ],
    nearbyAttractions: ["올림픽 스키 스타디움", "추크슈피체", "가르미슈 구시가지"],
    photoTips: "방수 케이스를 준비하세요. 터널 내부에서 물방울이 떨어집니다. 광각 렌즈로 협곡의 깊이감을 담을 수 있습니다.",
    tips: [
      "방수 재킷과 미끄럼 방지 신발을 꼭 준비하세요.",
      "올림픽 스타디움 주차장에서 협곡 입구까지 도보 약 20분입니다.",
      "겨울 방문도 강력 추천합니다. 고드름으로 뒤덮인 협곡은 완전히 다른 매력입니다.",
      "이른 아침에 방문하면 인파를 피할 수 있습니다.",
    ],
  },
  "germany/bavaria/garmisch-partenkirchen/eibsee": {
    heroGradient: "from-cyan-400 to-blue-800",
    description: "추크슈피체 기슭 해발 1,000m에 자리한 에메랄드빛 산정 호수입니다. '바이에른의 카리브해'로 불릴 만큼 투명하고 맑은 물빛이 인상적이며, 호수를 한 바퀴 도는 7km 산책로에서 추크슈피체와 알프스 연봉을 배경으로 한 절경을 감상할 수 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (주차장 운영시간 내 접근 권장)",
      admission: "무료 (주차비 €5~8)",
      address: "Eibsee, 82491 Grainau",
    },
    highlights: [
      "카리브해를 연상시키는 에메랄드빛·터콰이즈 물빛",
      "호수 일주 산책로(7km, 약 2시간)에서의 알프스 조망",
      "호수 위 8개 작은 섬과 반도의 아름다운 풍경",
      "여름 수영, 스탠드업 패들보드, 보트 대여",
      "추크슈피체 케이블카 탑승장 인접",
    ],
    nearbyAttractions: ["추크슈피체", "그라이나우 마을", "회렌슈반트 전망대"],
    photoTips: "호수 남쪽 산책로에서 추크슈피체를 배경으로 담으면 최고의 구도입니다. 이른 아침 호수 안개가 걷힐 때 신비로운 사진을 얻을 수 있습니다.",
    tips: [
      "호수 일주 산책로는 평탄하여 누구나 걸을 수 있지만, 일부 구간은 뿌리가 많으니 운동화를 추천합니다.",
      "여름에는 주차장이 일찍 만차가 되므로 오전 9시 이전 도착을 권합니다.",
      "추크슈피체 케이블카와 같은 날 방문하면 효율적입니다.",
      "호수 수영은 무료이지만 물이 차갑습니다(여름에도 약 18~20도).",
    ],
  },

  // ===== ERFURT =====
  "germany/berlin-east/erfurt/kraemerbruecke": {
    heroGradient: "from-rose-500 to-red-800",
    description: "알프스 북쪽에서 가장 긴 주거용 다리로, 79m 길이의 다리 위에 32채의 반목조 가옥이 빼곡히 들어서 있습니다. 다리 위를 걷다 보면 다리인지 거리인지 구분이 되지 않을 정도로 자연스러우며, 작은 공방, 갤러리, 초콜릿 가게, 와인 바 등이 들어서 있어 독특한 쇼핑 체험이 가능합니다.",
    history: "1117년 최초의 나무 다리가 건설된 이래 여러 차례 화재로 소실되었고, 1325년 현재의 석조 기반 다리가 완성되었습니다. 원래 62채의 가옥이 있었으나 현재는 32채가 남아 있으며, 이탈리아 피렌체의 폰테 베키오에 비견됩니다.",
    visitInfo: {
      hours: "다리: 24시간 통행 가능 / 상점: 대체로 10:00~18:00",
      admission: "무료 (동쪽 탑 전망대 €2.50)",
      address: "Krämerbrücke, 99084 Erfurt",
    },
    highlights: [
      "32채 반목조 가옥이 즐비한 독특한 다리 거리 풍경",
      "공방, 갤러리, 초콜릿 가게 등 개성 있는 소규모 상점",
      "동쪽 끝 아에기디엔 교회 탑 전망대에서의 지붕 풍경",
      "게라 강변에서 바라본 다리 전경",
    ],
    nearbyAttractions: ["에르푸르트 대성당", "피셔마르크트", "안드레아스 지구"],
    photoTips: "다리 남쪽 게라 강변 아래로 내려가면 다리와 가옥 전체를 담을 수 있습니다. 동쪽 탑 전망대에서 지붕 너머 도시 풍경도 인상적입니다.",
    tips: [
      "다리 위 상점들은 소규모 수공예품점이 많아 기념품 쇼핑에 좋습니다.",
      "매년 6월 셋째 주말 크레머브뤼케 축제(Krämerbrückenfest)가 열립니다.",
      "동쪽 끝 아에기디엔 교회 탑(€2.50)에서의 전망을 놓치지 마세요.",
      "저녁에는 상점이 문을 닫지만 다리 자체의 고즈넉한 분위기를 즐길 수 있습니다.",
    ],
  },
  "germany/berlin-east/erfurt/erfurt-cathedral": {
    heroGradient: "from-gray-600 to-red-900",
    description: "에르푸르트의 상징인 돔플라츠 위에 우뚝 솟은 고딕 대성당입니다. 70개 계단 위에 자리한 웅장한 위치, 세계에서 가장 큰 중세 교회종 글로리오사(1497년, 11.4톤), 그리고 옆의 세베리 교회와 함께 이루는 실루엣이 에르푸르트의 대표적 스카이라인입니다.",
    history: "742년 선교사 보니파티우스에 의해 교구가 설립된 이래 여러 차례 재건되었으며, 현재 건물은 14~15세기 고딕 양식입니다. 마르틴 루터가 1507년 이곳에서 사제 서품을 받았습니다.",
    visitInfo: {
      hours: "월~토 09:30~17:00, 일 13:00~17:00 (11~4월 ~16:00)",
      admission: "무료 (가이드 투어 €5)",
      address: "Domstufen 1, 99084 Erfurt",
    },
    highlights: [
      "글로리오사 - 세계에서 가장 큰 중세 자유현가식 교회종(11.4톤)",
      "70개 돔 계단(Domstufen)과 돔플라츠의 웅장한 진입 경관",
      "15세기 고딕 스테인드글라스 창",
      "세베리 교회와 나란히 이루는 에르푸르트 대표 스카이라인",
      "마르틴 루터 사제 서품의 역사적 현장",
    ],
    nearbyAttractions: ["세베리 교회", "페터스베르크 요새", "크레머브뤼케"],
    photoTips: "돔플라츠 아래에서 70개 계단과 대성당·세베리 교회를 함께 올려다보는 구도가 가장 상징적입니다.",
    tips: [
      "여름 돔슈투펜 축제(DomStufen-Festspiele)에는 대성당 계단에서 오페라가 공연됩니다.",
      "글로리오사 종은 특별한 날에만 울리지만, 내부에서 종의 크기를 감상할 수 있습니다.",
      "대성당과 세베리 교회는 연결 통로로 이동 가능하니 함께 방문하세요.",
      "돔플라츠 크리스마스 마켓(12월)에는 거대한 크리스마스 트리가 세워집니다.",
    ],
  },
  "germany/berlin-east/erfurt/augustinian-monastery": {
    heroGradient: "from-stone-500 to-stone-800",
    description: "종교개혁의 아버지 마르틴 루터가 1505년부터 1511년까지 아우구스티노 수도회 수도사로 생활했던 역사적인 수도원입니다. 루터가 사용했던 수도실, 수도원 교회, 중세 회랑이 잘 보존되어 있어 종교개혁 역사의 생생한 현장을 체험할 수 있습니다.",
    history: "1277년에 설립된 아우구스티노 수도원으로, 마르틴 루터는 1505년 낙뢰를 맞을 뻔한 경험 후 법학을 포기하고 이곳에 입회했습니다. 6년간의 수도 생활이 후일 종교개혁 사상의 기초가 되었습니다. 현재는 루터 기념 시설과 호텔·회의장으로 운영됩니다.",
    visitInfo: {
      hours: "가이드 투어: 월~토 11:00, 14:00 / 일 14:00",
      admission: "가이드 투어 €8, 학생 €5",
      address: "Augustinerstraße 10, 99084 Erfurt",
      website: "https://www.augustinerkloster.de",
    },
    highlights: [
      "마르틴 루터의 수도실(Lutherzelle) 원형 보존",
      "14세기 고딕 수도원 교회",
      "중세 회랑과 명상 정원",
      "루터의 수도 생활과 종교개혁 태동 전시",
    ],
    nearbyAttractions: ["크레머브뤼케", "에르푸르트 대성당", "피셔마르크트"],
    tips: [
      "가이드 투어로만 루터 수도실 내부를 볼 수 있으니 시간을 맞춰 방문하세요.",
      "수도원 내 호텔에서 숙박하면 루터가 생활했던 공간에서 밤을 보내는 특별한 경험이 가능합니다.",
      "에르푸르트 대성당에서 도보 10분 거리이므로 함께 방문하기 좋습니다.",
      "독일어·영어 가이드 투어가 있으니 영어 시간을 확인하세요.",
    ],
  },

  // ===== SCHWERIN =====
  "germany/berlin-east/schwerin/schwerin-castle": {
    heroGradient: "from-blue-400 to-indigo-800",
    description: "슈베리너 호수 위 작은 섬에 세워진 동화 같은 궁전으로, 프랑스 루아르 계곡의 샹보르 성에서 영감받은 로맨틱 역사주의 건축의 걸작입니다. 금빛 돔과 수많은 첨탑이 호수에 반영되는 모습은 독일에서 가장 아름다운 궁전 풍경 중 하나로 꼽힙니다. 현재 메클렌부르크-포어포메른 주 의회 건물로 사용되고 있습니다.",
    history: "973년 슬라브족의 성채가 있던 자리에 세워졌으며, 현재의 건물은 1845~1857년 프리드리히 프란츠 2세 대공의 명으로 건축가 게오르크 아돌프 뎀러가 설계했습니다. 샹보르 성을 모델로 하되 독일 르네상스 요소를 결합한 독창적인 양식입니다.",
    visitInfo: {
      hours: "4~10월 10:00~18:00, 11~3월 10:00~17:00 (월요일 휴관, 10~3월)",
      admission: "성인 €8.50, 학생 €6",
      address: "Lennéstraße 1, 19053 Schwerin",
      website: "https://www.museum-schwerin.de",
    },
    highlights: [
      "호수 위 섬에 세워진 동화 같은 외관과 금빛 돔",
      "왕좌의 방(Thronsaal)의 화려한 네오르네상스 내부 장식",
      "선조 갤러리(Ahnengalerie)의 메클렌부르크 대공 가문 초상화",
      "부르크 정원의 바로크식 조경과 오랑주리",
      "호수에 비친 궁전의 반영",
    ],
    nearbyAttractions: ["부르크 정원", "주립박물관", "슈베린 대성당"],
    photoTips: "부르크 정원 다리에서 호수를 전경으로 놓고 성을 담으면 반영까지 포함한 완벽한 구도를 얻을 수 있습니다. 일몰 시 금빛 돔이 빛나는 순간이 최고입니다.",
    tips: [
      "부르크 정원에서 바라보는 성 뒷면 전경이 정면보다 더 아름답습니다.",
      "여름 시즌 슈로스페스트슈필레(궁전 축제)에서는 호수 위 무대에서 오페라가 공연됩니다.",
      "궁전 내부 관람 후 정원 산책까지 약 2~3시간을 계획하세요.",
      "주 의회 회의 중에도 박물관 구역은 관람 가능합니다.",
    ],
  },

  // ===== ROSTOCK =====
  "germany/berlin-east/rostock/st-marys-church-rostock": {
    heroGradient: "from-cyan-500 to-blue-800",
    description: "13세기에 건축된 북독일 고딕 벽돌 교회의 대표작으로, 1472년에 제작된 천문시계가 현재까지 작동하는 것이 가장 큰 볼거리입니다. 매일 정오에 12사도 인형이 행진하며 시간을 알리고, 시계판에는 달력, 달의 위상, 태양과 달의 위치 등이 정교하게 표시됩니다.",
    history: "1230년경 건축이 시작되어 15세기에 현재의 모습이 완성되었습니다. 천문시계는 1472년 한스 뒤링거가 제작했으며, 2017년까지 정확하게 작동하도록 설계된 달력판이 특징입니다. 2차대전 폭격에서 기적적으로 살아남았습니다.",
    visitInfo: {
      hours: "월~토 10:00~18:00, 일 11:15~17:00 (동절기 단축)",
      admission: "성인 €3, 학생 €2",
      address: "Am Ziegenmarkt 4, 18055 Rostock",
    },
    highlights: [
      "1472년 제작 천문시계와 매일 정오 12사도 행진",
      "2017년까지 정확한 달력을 표시하도록 설계된 달력판",
      "북독일 고딕 벽돌 건축의 장엄한 내부 공간",
      "바로크 오르간과 중세 세례반",
    ],
    nearbyAttractions: ["크뢰펠리너 거리", "노이어 마르크트", "로스토크 대학교"],
    photoTips: "천문시계는 정오 직전에 위치를 잡아야 12사도 행진을 촬영할 수 있습니다. 플래시 사용은 삼가세요.",
    tips: [
      "12사도 행진은 정오 정각에 시작되므로 11:45까지 입장하여 자리를 잡으세요.",
      "천문시계 외에도 바로크 오르간과 중세 세례반이 볼만합니다.",
      "교회 주변 노이어 마르크트 광장과 크뢰펠리너 거리 산책을 함께 계획하세요.",
      "구시가지 중심에 위치하여 도보 관광 동선에 자연스럽게 포함됩니다.",
    ],
  },
  "germany/berlin-east/rostock/warnemuende-beach": {
    heroGradient: "from-yellow-300 to-cyan-600",
    description: "독일에서 가장 넓은 백사장(폭 최대 150m)을 자랑하는 발트해의 대표 해변 리조트입니다. 수천 개의 슈트란트코르프(지붕 달린 비치 의자)가 늘어선 광활한 백사장, 1897년 건설된 등대, 그리고 알터 슈트롬 어항의 생선 레스토랑이 어우러진 전형적인 북독일 해변 휴양지입니다.",
    visitInfo: {
      hours: "24시간 개방 (시설별 운영시간 상이)",
      admission: "무료 (슈트란트코르프 대여 €8~15/일)",
      address: "Am Strand, 18119 Rostock-Warnemünde",
    },
    highlights: [
      "폭 150m의 독일 최대 백사장 해변",
      "수천 개의 슈트란트코르프(비치 의자)가 만드는 독특한 풍경",
      "1897년 건설 등대 전망대에서 발트해 조망",
      "알터 슈트롬 어항의 신선한 생선 레스토랑",
      "대형 크루즈선이 입항하는 항구 풍경",
    ],
    nearbyAttractions: ["바르네뮌데 등대", "알터 슈트롬", "티팟(Teepott)"],
    photoTips: "등대와 티팟 건물을 함께 담은 구도가 바르네뮌데의 상징적 사진입니다. 일몰 시 해변에서의 실루엣 촬영도 아름답습니다.",
    tips: [
      "로스토크 구시가지에서 S-Bahn으로 약 20분이면 도착합니다.",
      "여름 성수기에는 슈트란트코르프 조기 예약을 추천합니다.",
      "알터 슈트롬 어항의 피슈브뢰트헨(생선 롤빵)은 꼭 맛보세요.",
      "한자세일 축제(8월)에는 전통 범선이 가득 들어차는 장관을 볼 수 있습니다.",
    ],
  },

  // ===== HANOVER =====
  "germany/north/hanover/herrenhausen-gardens": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "유럽에서 가장 중요한 바로크 정원 중 하나로, 하노버의 자부심입니다. 50헥타르 규모의 그로서 가르텐(대정원)에는 유럽 최고 높이의 정원 분수(82m), 기하학적 화단, 미로 정원, 니키 드 생팔이 장식한 그로토가 있으며, 인접한 베르크 정원은 영국식 풍경 정원으로 조성되어 있습니다.",
    history: "1666년 하노버 선제후 에른스트 아우구스트의 부인 조피가 조성을 시작했습니다. 프랑스 베르사유에 필적하는 바로크 정원을 목표로, 철학자 라이프니츠도 정원 설계에 참여했습니다. 2차대전으로 궁전이 파괴되었으나 2013년 재건되었습니다.",
    visitInfo: {
      hours: "매일 09:00~일몰 (그로서 가르텐), 연중 개방 (베르크 정원)",
      admission: "그로서 가르텐 €8, 통합 티켓 €12",
      address: "Herrenhäuser Straße 4, 30419 Hannover",
      website: "https://www.herrenhaeuser-gaerten.de",
    },
    highlights: [
      "유럽 최고 높이(82m) 대분수의 수직 물줄기",
      "기하학적 바로크 화단과 미로 정원",
      "니키 드 생팔이 장식한 그로토(동굴) 내부",
      "재건된 궁전 건물의 현대적 전시 공간",
      "여름 저녁 분수쇼와 불꽃 축제",
    ],
    nearbyAttractions: ["빌헬름 부슈 박물관", "베르크 정원", "조르겐 궁전"],
    photoTips: "대분수가 최고 높이로 올라가는 순간을 포착하려면 정원 중앙 축선에서 기다리세요. 그로토 내부의 니키 드 생팔 모자이크도 촬영 포인트입니다.",
    tips: [
      "대분수는 여름 시즌 특정 시간에만 가동되니 사전에 스케줄을 확인하세요.",
      "여름 국제 불꽃 대회(5~9월)는 하노버의 대표 이벤트입니다.",
      "베르크 정원은 무료이며 산책만으로도 충분히 가치가 있습니다.",
      "트램 4/5번 헤렌호이저 가르텐역에서 도보 5분입니다.",
    ],
  },
  "germany/north/hanover/new-town-hall-hanover": {
    heroGradient: "from-stone-400 to-green-800",
    description: "1913년 빌헬름 2세 황제 참석 하에 개관한 하노버의 신시청사입니다. 에커슈타인 양식의 웅장한 건물 자체도 볼거리지만, 유럽에서 유일한 아치형 엘리베이터(비스듬히 올라가는 궁선형 승강기)를 타고 돔 전망대에 오르면 하노버 시내와 마쉬 호수, 헤렌하우젠 정원까지 360도 파노라마를 감상할 수 있습니다.",
    visitInfo: {
      hours: "전망대: 4~10월 10:00~18:00, 11~3월 11:00~16:00",
      admission: "아치형 엘리베이터 €3.50, 어린이 €2",
      address: "Trammplatz 2, 30159 Hannover",
    },
    highlights: [
      "유럽 유일의 아치형(궁선형) 엘리베이터 탑승 체험",
      "돔 전망대에서 하노버 시내 360도 파노라마",
      "로비의 하노버 도시 역사 모형 4개(중세~현대)",
      "마쉬 호수변에 자리한 웅장한 건축 외관",
    ],
    nearbyAttractions: ["마쉬 호수", "슈프렝겔 미술관", "니더작센 주립박물관"],
    photoTips: "마쉬 호수 건너편에서 시청사 전체가 호수에 반영되는 구도를 담을 수 있습니다.",
    tips: [
      "아치형 엘리베이터는 약 17도 각도로 비스듬히 올라가는 독특한 체험입니다.",
      "로비의 도시 모형(1689년, 1939년, 1945년, 현재)을 통해 하노버 역사를 한눈에 이해할 수 있습니다.",
      "시청사 내부는 무료로 관람할 수 있으며, 전망대 엘리베이터만 유료입니다.",
      "마쉬 호수 산책과 함께 코스를 잡으면 효율적입니다.",
    ],
  },

  // ===== KIEL =====
  "germany/north/kiel/laboe-naval-memorial": {
    heroGradient: "from-blue-500 to-slate-800",
    description: "킬 피오르드 입구에 세워진 85m 높이의 해군 기념탑과 2차대전 잠수함 U-995가 함께 전시된 해군 역사의 상징적 공간입니다. 기념탑 꼭대기에서 킬 피오르드, 발트해, 그리고 덴마크 해안선까지 한눈에 조망할 수 있으며, 잠수함 내부를 직접 탐방하는 체험은 어린이와 성인 모두에게 인기입니다.",
    history: "1927~1936년 건설된 해군 기념탑은 원래 1차대전 해군 전몰자를 기리기 위해 세워졌으나, 현재는 모든 해전 전몰자와 평화를 위한 기념관으로 성격이 바뀌었습니다. U-995 잠수함은 1943년 건조된 타입 VIIC/41 잠수함으로 1972년 이곳에 전시되었습니다.",
    visitInfo: {
      hours: "4~10월 09:30~18:00, 11~3월 09:30~16:00",
      admission: "기념탑+잠수함 통합 성인 €11, 학생 €7",
      address: "Strandstraße 92, 24235 Laboe",
      website: "https://www.deutscher-marinebund.de",
    },
    highlights: [
      "85m 기념탑 전망대에서 킬 피오르드와 발트해 파노라마",
      "U-995 잠수함 내부 탐방 - 어뢰실, 기관실, 함장실",
      "기념탑 지하 홀의 해군 역사 전시",
      "해안가 산책로와 라보에 해변",
    ],
    nearbyAttractions: ["라보에 해변", "킬 피오르드 페리", "킬 등대"],
    tips: [
      "킬 항구에서 페리(약 35분)로 이동하면 피오르드 크루즈를 겸할 수 있어 추천합니다.",
      "잠수함 내부는 공간이 매우 좁으니 폐소공포증이 있으면 주의하세요.",
      "기념탑 계단(341개)이 많으니 편한 신발을 준비하세요. 엘리베이터는 없습니다.",
      "인근 라보에 해변에서 해수욕도 함께 즐길 수 있습니다.",
    ],
  },

  // ===== SYLT =====
  "germany/north/sylt/red-cliff": {
    heroGradient: "from-amber-400 to-red-700",
    description: "캄펜 마을의 상징인 붉은 점토 절벽으로, 북해를 향해 약 30m 높이로 솟아 있습니다. 일몰 시 절벽이 붉게 타오르며 북해 수평선과 어우러지는 장관은 쥘트에서 가장 아름다운 풍경으로 꼽힙니다. 절벽 위 산책로를 따라 걸으며 끝없는 북해와 모래 해변을 내려다볼 수 있습니다.",
    visitInfo: {
      hours: "24시간 개방",
      admission: "무료",
      address: "Rotes Kliff, 25999 Kampen, Sylt",
    },
    highlights: [
      "일몰 시 붉게 물드는 절벽과 북해의 장관",
      "절벽 위 산책로에서 내려다보는 해변 풍경",
      "수천 년 침식이 만들어낸 독특한 지형",
      "캄펜 초가지붕 마을과 연결되는 산책 코스",
    ],
    nearbyAttractions: ["우베 뒤네", "캄펜 등대", "위스키 마일"],
    photoTips: "일몰 1시간 전부터 절벽 위에서 대기하면 시시각각 변하는 빛을 담을 수 있습니다. 삼각대를 가져오면 저녁 노을 장노출 촬영이 가능합니다.",
    tips: [
      "일몰 시간에 맞춰 방문하는 것이 가장 좋습니다.",
      "절벽 가장자리는 침식이 진행 중이므로 안전 거리를 유지하세요.",
      "캄펜에서 도보로 쉽게 접근 가능하며 우베 뒤네와 함께 산책 코스로 연결됩니다.",
      "바람이 강한 날이 많으니 방풍 재킷을 준비하세요.",
    ],
  },
  "germany/north/sylt/westerland-beach": {
    heroGradient: "from-yellow-300 to-cyan-600",
    description: "쥘트의 중심 마을 베스터란트의 대표 해변으로, 폭 80~100m의 넓은 백사장이 수 킬로미터에 걸쳐 펼쳐집니다. 줄지어 늘어선 알록달록한 슈트란트코르프(비치 의자)가 만드는 풍경은 북독일 해변의 전형적인 이미지이며, 해변 산책로(쿠어 프롬나드)를 따라 걸으며 북해의 거친 바람과 파도를 만끽할 수 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (인명구조원: 6~9월 09:00~18:00)",
      admission: "무료 (슈트란트코르프 대여 €8~15/일)",
      address: "Strandpromenade, 25980 Westerland, Sylt",
    },
    highlights: [
      "끝없이 펼쳐진 넓은 백사장과 북해 수평선",
      "알록달록한 슈트란트코르프가 만드는 전형적인 북독일 해변 풍경",
      "쿠어 프롬나드(해변 산책로)에서의 바다 산책",
      "서핑, 카이트서핑 등 해양 스포츠",
    ],
    nearbyAttractions: ["실트 뮤지엄", "베스터란트 쇼핑 거리", "아쿠아리움"],
    tips: [
      "북해 바람이 강하므로 슈트란트코르프를 빌리면 바람을 피해 편안하게 쉴 수 있습니다.",
      "여름에도 수온이 낮으므로(16~19도) 수영 시 참고하세요.",
      "해변 산책 시 방풍 재킷과 선크림을 모두 준비하세요.",
      "베스터란트 중심가에서 도보 5분 거리로 접근이 매우 편리합니다.",
    ],
  },
};
