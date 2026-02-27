import type { CityDetail, AttractionDetail } from "../city-details";

export const swedenCityDetails: Record<string, CityDetail> = {
  // ===== STOCKHOLM CENTRAL =====
  "sweden/stockholm-central/stockholm": {
    heroGradient: "from-blue-600 to-yellow-500",
    description: "14개 섬 위에 세워진 북유럽의 베네치아. 노벨상 시상식이 열리는 스웨덴의 수도로, 중세 구시가지 감라 스탄과 세계적인 박물관들, 그리고 깨끗한 수로가 어우러진 아름다운 도시입니다.",
    bestTime: "6~8월 (백야 시즌) / 12월 (크리스마스 마켓)",
    stayArea: "노르말름 / 감라 스탄 주변",
    transport: "T-bana (지하철), 버스, 트램, 페리 (SL 교통카드)",
    districts: [
      { name: "감라 스탄", nameEn: "Gamla Stan", description: "13세기부터 이어진 스톡홀름의 구시가지로 좁은 골목과 색색의 건물이 매력적.", highlights: ["왕궁", "스토르토르겟 광장", "노벨 박물관", "대성당"] },
      { name: "노르말름", nameEn: "Norrmalm", description: "스톡홀름의 상업 중심지로 쇼핑과 문화시설이 밀집한 현대적 지역.", highlights: ["세르옐 광장", "NK 백화점", "문화의 집"] },
      { name: "유르고르덴", nameEn: "Djurgarden", description: "박물관과 공원이 모여 있는 녹색 섬으로 바사 박물관, ABBA 박물관이 위치.", highlights: ["바사 박물관", "ABBA 박물관", "스칸센 야외 박물관"] },
    ],
    attractions: [
      { name: "감라 스탄", nameEn: "Gamla Stan", description: "13세기에 형성된 스톡홀름의 구시가지로 중세 골목과 알록달록한 건물이 인상적.", category: "역사지구", tip: "모르텐 트로치그 그랜드(가장 좁은 골목)를 찾아보세요." },
      { name: "바사 박물관", nameEn: "Vasa Museum", description: "1628년 침몰한 전함 바사호를 거의 완벽하게 복원해 전시하는 세계 유일의 박물관.", category: "박물관", tip: "오디오 가이드(한국어 있음)를 꼭 이용하세요." },
      { name: "ABBA 뮤지엄", nameEn: "ABBA The Museum", description: "전설적인 팝 그룹 ABBA의 역사와 음악을 인터랙티브로 체험할 수 있는 박물관.", category: "박물관", tip: "현장 매진이 잦으니 온라인 사전 예약 권장." },
      { name: "스톡홀름 시청사", nameEn: "Stockholm City Hall", description: "노벨상 만찬이 열리는 붉은 벽돌 건물로 황금의 방 모자이크가 유명합니다.", category: "건축물", tip: "내부는 가이드 투어로만 관람 가능, 탑에서 시내 전경 조망." },
      { name: "스칸센 야외 박물관", nameEn: "Skansen", description: "1891년 개관한 세계 최초의 야외 박물관으로 스웨덴 전통 가옥 160채를 재현.", category: "박물관" },
      { name: "스톡홀름 왕궁", nameEn: "Royal Palace", description: "608개 객실을 가진 유럽 최대 규모의 현역 왕궁으로 매일 근위병 교대식이 열립니다.", category: "궁전", tip: "근위병 교대식은 매일 12:15(일요일 13:15) 시작." },
    ],
    dayTrips: [
      { name: "웁살라", nameEn: "Uppsala", description: "스웨덴 최고(最古) 대학 도시이자 바이킹 역사의 중심지.", travelTime: "기차 약 40분", gradient: "from-rose-400 to-pink-700" },
      { name: "드로트닝홀름 궁전", nameEn: "Drottningholm Palace", description: "UNESCO 세계유산, 스웨덴 왕실의 현 거주 궁전.", travelTime: "페리 약 1시간", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "쇼트불라르", description: "스웨덴식 미트볼, 링곤베리 잼과 크림소스 곁들임.", emoji: "🍖" },
      { name: "그라블락스", description: "딜과 설탕, 소금에 절인 연어로 스웨덴의 대표 전채.", emoji: "🐟" },
      { name: "카넬불레", description: "시나몬 향이 가득한 스웨덴식 시나몬 롤, 피카의 필수템.", emoji: "🍩" },
    ],
    tips: [
      "스톡홀름 패스로 80개 이상 박물관·관광지 무료 입장 + 보트 투어가 가능합니다.",
      "피카(Fika)는 스웨덴의 커피 타임 문화로, 카페에서 카넬불레와 함께 즐겨보세요.",
      "여름 백야 시즌에는 밤 10시까지 밝아 관광 시간이 넉넉합니다.",
      "감라 스탄은 저녁 시간대에 방문하면 인파가 줄어 한결 여유롭습니다.",
    ],
  },
  "sweden/stockholm-central/uppsala": {
    heroGradient: "from-rose-400 to-pink-700",
    description: "1477년 설립된 북유럽 최고(最古) 대학 웁살라 대학교가 있는 학문의 도시. 바이킹 시대 유적과 스칸디나비아 최대의 고딕 대성당이 공존하는 역사 깊은 도시입니다.",
    bestTime: "5~9월 / 4월 말 발보리 축제",
    stayArea: "중앙역 / 대성당 주변",
    transport: "스톡홀름에서 기차 약 40분, 시내 버스",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "대성당과 웁살라 성이 위치한 역사 지구로 학술적 분위기가 물씬.", highlights: ["웁살라 대성당", "웁살라 성", "구스타비아눔 박물관"] },
    ],
    attractions: [
      { name: "웁살라 대성당", nameEn: "Uppsala Cathedral", description: "스칸디나비아 최대의 고딕 성당으로 높이 118.7m의 쌍탑이 인상적. 칼 린네의 묘소가 있습니다.", category: "성당", tip: "무료 입장이며 탑 투어는 여름 시즌에만 운영." },
      { name: "웁살라 성", nameEn: "Uppsala Castle", description: "16세기에 건설된 르네상스 양식의 분홍빛 성으로 도시를 한눈에 조망할 수 있습니다.", category: "고성" },
      { name: "감라 웁살라", nameEn: "Gamla Uppsala", description: "바이킹 왕들의 고분군이 남아있는 고대 스웨덴의 종교·정치 중심지.", category: "유적지", tip: "감라 웁살라 박물관에서 바이킹 역사를 먼저 학습하면 좋습니다." },
    ],
    dayTrips: [
      { name: "시그투나", nameEn: "Sigtuna", description: "스웨덴 최초의 도시(970년)로 룬스톤과 중세 교회 유적이 남아있는 작은 마을.", travelTime: "버스 약 40분", gradient: "from-amber-400 to-orange-600" },
    ],
    localFood: [
      { name: "웁살라 학생 맥주", description: "웁살라 대학 전통의 양조 맥주, Nation(학생 클럽)에서 맛볼 수 있음.", emoji: "🍺" },
      { name: "쇼트불라르", description: "링곤베리 잼과 감자 퓌레를 곁들인 스웨덴 전통 미트볼.", emoji: "🍖" },
    ],
    tips: [
      "스톡홀름에서 당일치기가 가능하며 기차로 40분이면 도착합니다.",
      "4월 30일 발보리(Valborg) 축제는 학생들의 봄맞이 대축제로 볼거리가 풍성합니다.",
      "웁살라 대학의 Nation(학생 클럽)은 여행자도 방문 가능한 곳이 있으니 확인해보세요.",
    ],
  },

  // ===== GOTHENBURG WEST =====
  "sweden/gothenburg-west/gothenburg": {
    heroGradient: "from-teal-500 to-blue-700",
    description: "스웨덴 제2의 도시이자 서해안 최대 항구 도시. 북유럽 최대의 놀이공원 리세베리와 아기자기한 하가 지구, 신선한 해산물이 유명합니다. 스톡홀름보다 여유롭고 친근한 분위기가 매력.",
    bestTime: "6~8월 / 12월 (크리스마스 시즌)",
    stayArea: "중앙역 / 리네 거리 주변",
    transport: "트램, 버스, 페리 (Vastrafik 교통카드)",
    districts: [
      { name: "하가", nameEn: "Haga", description: "19세기 목조 건물이 늘어선 예테보리에서 가장 아기자기한 동네로 카페와 빈티지 숍이 가득.", highlights: ["하가니간 거리", "카페 후세트", "스칸센 크로난 요새"] },
      { name: "리네스타덴", nameEn: "Linnestaaden", description: "트렌디한 레스토랑과 부티크가 모인 젊은 감각의 지역.", highlights: ["리네 거리", "슬로츠코겐 공원"] },
      { name: "예테보리 군도", nameEn: "Gothenburg Archipelago", description: "차 없는 섬들로 이루어진 서해안 군도, 여름 해수욕과 해산물의 천국.", highlights: ["스튀르쇠 섬", "브뢴뇌 섬", "해산물 레스토랑"] },
    ],
    attractions: [
      { name: "리세베리", nameEn: "Liseberg", description: "1923년 개장한 북유럽 최대의 놀이공원으로 롤러코스터와 계절별 테마 행사가 인기.", category: "놀이공원", tip: "할로윈(10월)과 크리스마스(11~12월) 시즌이 특히 인기." },
      { name: "하가 지구", nameEn: "Haga District", description: "코블스톤 골목에 아기자기한 카페와 빈티지 숍이 늘어선 예테보리의 보석 같은 동네.", category: "거리", tip: "하가의 카페에서 거대한 카넬불레(시나몬 롤)를 꼭 맛보세요." },
      { name: "피스케코르카", nameEn: "Feskekörka", description: "'생선 교회'라는 별명의 고딕 양식 해산물 시장으로 최고급 신선 해산물을 판매.", category: "시장", tip: "2층 레스토랑에서 해산물 플래터를 즐겨보세요." },
      { name: "예테보리 미술관", nameEn: "Gothenburg Museum of Art", description: "스칸디나비아 최고의 미술 컬렉션을 소장한 북유럽 대표 미술관.", category: "미술관" },
      { name: "스칸센 크로난", nameEn: "Skansen Kronan", description: "하가 언덕 위의 17세기 요새로 예테보리 시내 전경을 한눈에 조망 가능.", category: "요새" },
    ],
    dayTrips: [
      { name: "예테보리 군도", nameEn: "Gothenburg Archipelago", description: "차 없는 평화로운 섬들에서 해수욕과 신선한 해산물을 즐길 수 있는 서해안 군도.", travelTime: "페리 약 30~90분", gradient: "from-cyan-400 to-blue-600" },
    ],
    localFood: [
      { name: "새우 샌드위치", description: "예테보리 명물, 탱글탱글한 새우를 듬뿍 올린 오픈 샌드위치(레크마르게스).", emoji: "🦐" },
      { name: "피시 수프", description: "서해안 전통 크림 피시 수프로 다양한 해산물이 가득.", emoji: "🍲" },
      { name: "카넬불레", description: "하가 지구의 특대형 시나몬 롤, 피카 필수 메뉴.", emoji: "🍩" },
    ],
    tips: [
      "예테보리 시티카드로 대중교통, 리세베리, 박물관 등 이용이 가능합니다.",
      "서해안 해산물은 스웨덴 최고 수준으로 피스케코르카 방문을 추천합니다.",
      "하가 지구는 오전에 방문하면 한적하게 카페 투어를 즐길 수 있습니다.",
      "여름에는 예테보리 군도 섬 투어를 꼭 일정에 넣으세요.",
    ],
  },

  // ===== LAPLAND NORTH =====
  "sweden/lapland-north/kiruna": {
    heroGradient: "from-indigo-600 to-purple-900",
    description: "북극권 위에 위치한 스웨덴 최북단 도시. 세계적으로 유명한 아이스호텔과 오로라 관측의 메카로, 겨울에는 개썰매·스노모빌 등 북극 액티비티를 체험할 수 있습니다.",
    bestTime: "12~3월 (오로라·겨울 액티비티) / 6~7월 (백야)",
    stayArea: "키루나 시내 / 아이스호텔 (유카스예르비)",
    transport: "스톡홀름에서 항공 약 1.5시간, 야간열차 약 17시간",
    districts: [
      { name: "키루나 시내", nameEn: "Kiruna Center", description: "광산 도시로 시작된 키루나의 중심부. 도시 이전 프로젝트가 진행 중인 독특한 도시.", highlights: ["키루나 교회", "키루나 광산", "새 시청사"] },
      { name: "유카스예르비", nameEn: "Jukkasjarvi", description: "세계 최초의 아이스호텔이 있는 작은 마을로 토르네 강변에 위치.", highlights: ["아이스호텔", "사미 문화 체험", "토르네 강"] },
    ],
    attractions: [
      { name: "아이스호텔", nameEn: "ICEHOTEL", description: "매년 겨울 새롭게 건축되는 세계 최초의 얼음 호텔. 예술가들이 조각한 얼음 스위트룸에서 숙박 가능.", category: "호텔/명소", tip: "ICEHOTEL 365는 연중 운영되므로 여름에도 방문 가능합니다." },
      { name: "오로라 스카이 스테이션", nameEn: "Aurora Sky Station", description: "아비스코 국립공원 내 해발 900m에 위치한 세계 최고의 오로라 관측소.", category: "전망대", tip: "체어리프트로 올라가며 맑은 날 오로라 확률이 매우 높습니다." },
      { name: "키루나 광산", nameEn: "LKAB Mine", description: "세계 최대의 지하 철광석 광산으로 지하 540m까지 내려가는 투어가 인기.", category: "산업관광", tip: "투어는 사전 예약 필수, 방한복 준비하세요." },
      { name: "키루나 교회", nameEn: "Kiruna Church", description: "스웨덴에서 가장 아름다운 건물로 선정된 적 있는 네오고딕 양식의 목조 교회.", category: "교회" },
    ],
    dayTrips: [
      { name: "아비스코 국립공원", nameEn: "Abisko National Park", description: "오로라 관측과 하이킹의 성지, 쿵스레덴 트레일의 출발점.", travelTime: "기차 약 1시간", gradient: "from-green-500 to-emerald-800" },
    ],
    localFood: [
      { name: "순록 스튜", description: "라플란드 전통 순록 고기 스튜, 매시드 포테이토와 링곤베리 곁들임.", emoji: "🦌" },
      { name: "북극 곤들매기 구이", description: "라플란드 청정 호수에서 잡은 민물고기 요리.", emoji: "🐟" },
    ],
    tips: [
      "겨울 방문 시 영하 30도 이하로 내려가므로 극한 방한 장비가 필수입니다.",
      "오로라는 9월~3월에 관측 가능하며, 12~1월이 확률이 가장 높습니다.",
      "키루나는 광산 침하로 도시 전체가 3km 동쪽으로 이전 중인 독특한 도시입니다.",
      "아이스호텔 숙박 시 침낭이 제공되며 실내 온도는 영하 5도 내외입니다.",
    ],
  },
  "sweden/lapland-north/abisko": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "스웨덴 최북단 국립공원이 있는 작은 마을로, '블루홀'이라 불리는 특수 기상 현상 덕분에 세계 최고의 오로라 관측지로 손꼽힙니다. 여름에는 쿵스레덴(왕의 길) 트레킹의 출발점.",
    bestTime: "12~3월 (오로라) / 6~8월 (트레킹·백야)",
    stayArea: "아비스코 투리스트스타션 / STF 호스텔",
    transport: "키루나에서 기차 약 1시간, 버스 약 1.5시간",
    districts: [
      { name: "아비스코 외위레", nameEn: "Abisko Ostra", description: "기차역과 소규모 숙소가 있는 아비스코 동쪽 마을.", highlights: ["아비스코 기차역", "토르네트레스크 호수"] },
    ],
    attractions: [
      { name: "아비스코 국립공원", nameEn: "Abisko National Park", description: "77km² 면적의 북극권 국립공원으로 토르네트레스크 호수와 협곡, 자작나무 숲이 장관.", category: "국립공원", tip: "여름엔 24시간 해가 지지 않는 백야를 경험할 수 있습니다." },
      { name: "쿵스레덴 트레일", nameEn: "Kungsleden Trail", description: "아비스코에서 시작하는 440km 스웨덴 대표 장거리 트레킹 코스(왕의 길).", category: "트레킹", tip: "전 구간은 2~3주 소요되지만 아비스코~케브네카이세 구간(약 6일)이 가장 인기." },
      { name: "오로라 스카이 스테이션", nameEn: "Aurora Sky Station", description: "체어리프트로 올라가는 해발 900m 오로라 전망대. 맑은 밤 환상적인 오로라를 볼 수 있습니다.", category: "전망대" },
    ],
    dayTrips: [
      { name: "키루나", nameEn: "Kiruna", description: "아이스호텔과 세계 최대 지하 철광 광산이 있는 북극권 도시.", travelTime: "기차 약 1시간", gradient: "from-indigo-600 to-purple-900" },
    ],
    localFood: [
      { name: "수바스", description: "사미족 전통 순록 고기 수프, 야외에서 모닥불에 끓여 먹는 별미.", emoji: "🍲" },
      { name: "칼키타카", description: "연어를 통나무 불 옆에서 천천히 훈제 구이한 사미족 전통 요리.", emoji: "🐟" },
    ],
    tips: [
      "아비스코는 '블루홀' 현상으로 주변보다 맑은 날이 많아 오로라 확률이 높습니다.",
      "여름 트레킹 시 모기가 극성이므로 헤드넷과 방충제를 반드시 준비하세요.",
      "STF(스웨덴 관광협회) 산장에서 숙박하면 쿵스레덴 트레킹이 한결 편리합니다.",
    ],
  },
};

export const swedenAttractionDetails: Record<string, AttractionDetail> = {
  // ===== STOCKHOLM (Stockholm Central) =====
  "sweden/stockholm-central/stockholm/gamla-stan": {
    heroGradient: "from-amber-500 to-orange-700",
    description: "13세기에 형성된 스톡홀름의 구시가지로 스타스홀멘 섬 전체가 중세 분위기를 간직하고 있습니다. 좁은 자갈 골목, 알록달록한 건물, 왕궁, 노벨 박물관이 한데 어우러진 스톡홀름 여행의 하이라이트.",
    history: "1252년 스웨덴 건국의 아버지 비르예르 얄이 요새를 축조하면서 도시가 형성되었습니다. 중세부터 스웨덴의 정치·경제 중심지로 기능했으며, 스토르토르겟 광장에서는 1520년 '스톡홀름 피바다' 사건이 벌어지기도 했습니다.",
    visitInfo: {
      hours: "24시간 개방 (개별 시설 운영시간 상이)",
      admission: "거리 무료 / 왕궁 SEK 180, 노벨 박물관 SEK 130",
      address: "Gamla Stan, 111 29 Stockholm",
      website: "https://www.visitstockholm.com",
    },
    highlights: [
      "스토르토르겟 광장의 노벨 박물관과 색색의 건물",
      "모르텐 트로치그 그랜드 - 폭 90cm의 스톡홀름에서 가장 좁은 골목",
      "왕궁 근위병 교대식 (매일 12:15)",
      "대성당(스토르퀴르칸) - 성 이외르겐과 용 조각상",
    ],
    nearbyAttractions: ["스톡홀름 왕궁", "노벨 박물관", "스톡홀름 대성당", "리다르홀멘 교회"],
    photoTips: "스토르토르겟 광장은 오전 빛이 건물 정면을 비추는 시간대가 최고입니다. 모르텐 트로치그 그랜드는 위에서 내려다보는 앵글이 인기.",
    tips: [
      "감라 스탄은 주요 관광지가 밀집해 2~3시간이면 도보로 충분히 둘러볼 수 있습니다.",
      "관광객이 몰리는 낮 시간을 피해 이른 아침이나 저녁에 방문하면 한적합니다.",
      "겨울 크리스마스 마켓 시즌(11~12월)에는 스토르토르겟 광장이 특히 아름답습니다.",
    ],
  },
  "sweden/stockholm-central/stockholm/vasa-museum": {
    heroGradient: "from-amber-700 to-brown-900",
    description: "1628년 처녀 항해에서 침몰한 전함 바사호를 거의 완벽한 상태로 인양해 전시하는 세계 유일의 박물관. 333년간 해저에 잠겨 있던 69m 길이의 거대 전함을 눈앞에서 볼 수 있습니다.",
    history: "바사호는 구스타브 2세 아돌프 왕의 명으로 건조되었으나, 1628년 8월 10일 처녀 항해 중 1,300m도 못 가 침몰했습니다. 1961년 인양되어 1990년 현재의 박물관에서 공개되었습니다.",
    visitInfo: {
      hours: "매일 10:00~17:00 (수요일 ~20:00, 6~8월 08:30~18:00)",
      admission: "성인 SEK 190 / 18세 이하 무료",
      address: "Galärvarvsvägen 14, 115 21 Stockholm",
      website: "https://www.vasamuseet.se",
    },
    highlights: [
      "거의 완벽하게 보존된 17세기 전함 바사호 실물",
      "700개 이상의 조각 장식이 남아있는 선미",
      "침몰 원인 분석 및 인양 과정 전시",
      "선원들의 삶을 재현한 전시관",
    ],
    nearbyAttractions: ["ABBA 뮤지엄", "스칸센 야외 박물관", "노르디스카 박물관", "유니바켄"],
    photoTips: "1층에서 올려다보는 앵글이 전함의 위용을 가장 잘 담을 수 있습니다. 내부가 어두우므로 ISO를 높이거나 삼각대를 이용하세요.",
    tips: [
      "한국어 오디오 가이드가 제공되니 꼭 이용하세요.",
      "여름 시즌에는 매우 혼잡하므로 개관 직후 방문을 추천합니다.",
      "박물관 내부가 서늘하므로 여름에도 가벼운 겉옷을 준비하세요.",
    ],
  },
  "sweden/stockholm-central/stockholm/abba-the-museum": {
    heroGradient: "from-pink-500 to-purple-700",
    description: "전설적인 팝 그룹 ABBA의 모든 것을 인터랙티브로 체험할 수 있는 박물관. ABBA 멤버와 함께 무대에 서는 홀로그램 체험, 의상 전시, 레코딩 스튜디오 체험 등 팬이 아니어도 즐거운 공간.",
    visitInfo: {
      hours: "매일 10:00~18:00 (수~목 ~19:00, 동절기 단축 운영)",
      admission: "성인 SEK 250 / 어린이(7~15세) SEK 95",
      address: "Djurgårdsvägen 68, 115 21 Stockholm",
      website: "https://abbathemuseum.com",
    },
    highlights: [
      "ABBA 멤버 홀로그램과 함께하는 가상 무대 체험",
      "워털루부터 히트곡 탄생 과정 전시",
      "실제 의상과 골드 디스크 컬렉션",
      "베니 앤더슨의 피아노 - 그가 연주하면 박물관에서 실시간 재생",
    ],
    nearbyAttractions: ["바사 박물관", "스칸센 야외 박물관", "그뢰나 룬드 놀이공원"],
    tips: [
      "온라인 사전 예약이 필수이며 현장 티켓은 매진되는 경우가 많습니다.",
      "체험형 전시가 많아 최소 2시간은 잡고 방문하세요.",
      "유르고르덴 섬의 바사 박물관과 함께 방문하면 동선이 효율적입니다.",
    ],
  },
  "sweden/stockholm-central/stockholm/stockholm-city-hall": {
    heroGradient: "from-red-600 to-red-900",
    description: "노벨상 시상 만찬이 열리는 스톡홀름의 상징적 건축물. 800만 개의 금박 모자이크로 장식된 '황금의 방'과 멜라렌 호수가 내려다보이는 탑 전망대가 하이라이트.",
    history: "1911~1923년 건축가 라그나르 외스트베리의 설계로 건설되었습니다. 국민 로만틱 양식의 대표 건축물로 약 800만 개의 금박 모자이크 타일로 장식된 황금의 방이 유명합니다.",
    visitInfo: {
      hours: "가이드 투어: 매일 10:00~15:00 (30분 간격) / 탑: 5~9월 09:15~17:15",
      admission: "가이드 투어 SEK 130 / 탑 SEK 70",
      address: "Hantverkargatan 1, 111 52 Stockholm",
      website: "https://www.stockholm.se/stadshuset",
    },
    highlights: [
      "황금의 방 - 1,900만 개의 금박 모자이크 벽화",
      "블루 홀 - 노벨상 만찬이 열리는 대연회장",
      "106m 탑 전망대에서 스톡홀름 파노라마 조망",
      "시청사 정원에서 바라보는 멜라렌 호수와 리다르홀멘",
    ],
    nearbyAttractions: ["감라 스탄", "리다르홀멘", "쿵스홀멘 해변 산책로"],
    photoTips: "시청사 외관은 멜라렌 호수 건너편(쇠데르말름)에서 촬영하면 물에 반사된 모습이 아름답습니다.",
    tips: [
      "내부 관람은 가이드 투어로만 가능하며 약 45분 소요됩니다.",
      "탑 전망대는 여름 시즌에만 개방되며 엘리베이터 없이 계단으로 올라갑니다.",
      "6월 노벨 만찬 메뉴를 재현한 '노벨 디너'를 시청사 지하 레스토랑에서 맛볼 수 있습니다.",
    ],
  },

  // ===== GOTHENBURG (Gothenburg West) =====
  "sweden/gothenburg-west/gothenburg/liseberg": {
    heroGradient: "from-green-500 to-yellow-500",
    description: "1923년 개장한 북유럽 최대 규모의 놀이공원으로 스릴 넘치는 롤러코스터와 아름다운 정원이 공존합니다. 할로윈과 크리스마스 시즌에는 특별 테마 행사로 연간 300만 명이 방문.",
    history: "1923년 예테보리 건시 300주년을 기념해 개장했습니다. 100년이 넘는 역사를 자랑하며, 포브스가 선정한 세계 10대 놀이공원에 이름을 올린 북유럽의 자존심입니다.",
    visitInfo: {
      hours: "시즌별 상이 (4~9월, 할로윈 10월, 크리스마스 11~12월)",
      admission: "입장권 SEK 145~ / 놀이기구 패스 별도 SEK 420~",
      address: "Örgrytevägen 5, 402 22 Göteborg",
      website: "https://www.liseberg.se",
    },
    highlights: [
      "헤릭스(Helix) - 북유럽 최고의 롤러코스터",
      "아트모스피어(AtmosFear) - 유럽 최고 높이의 자유낙하",
      "크리스마스 시즌 500만 개 조명 일루미네이션",
      "할로윈 시즌 공포 체험 미로",
    ],
    nearbyAttractions: ["유니버시움 과학센터", "예테보리 미술관", "세계문화 박물관"],
    tips: [
      "리세베리 앱을 다운로드하면 실시간 대기 시간을 확인할 수 있습니다.",
      "크리스마스 시즌(11~12월)이 가장 인기 있으며, 주말은 매우 혼잡합니다.",
      "우천 시에도 대부분의 놀이기구가 운영되지만 일부는 중단될 수 있습니다.",
    ],
  },
  "sweden/gothenburg-west/gothenburg/haga-district": {
    heroGradient: "from-orange-400 to-rose-600",
    description: "19세기 목조 건물이 늘어선 예테보리에서 가장 매력적인 동네. 코블스톤 골목을 따라 개성 있는 카페, 빈티지 숍, 아트 갤러리가 이어지며, 거대한 카넬불레(시나몬 롤)로 유명한 피카의 성지.",
    history: "19세기 노동자 계층의 주거지역이었으나 1980년대부터 카페와 부티크가 들어서며 예테보리의 가장 트렌디한 동네로 변모했습니다. 현재 남아있는 목조 건물(란츠후스)은 문화유산으로 보호받고 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (개별 상점·카페 운영시간 상이)",
      admission: "무료",
      address: "Haga Nygata, 413 01 Göteborg",
    },
    highlights: [
      "하가니간 거리 - 카페와 빈티지 숍이 늘어선 메인 스트리트",
      "거대한 카넬불레(시나몬 롤)로 유명한 카페들",
      "19세기 목조 건물(란츠후스) 거리 풍경",
      "스칸센 크로난 요새까지 언덕 산책",
    ],
    nearbyAttractions: ["스칸센 크로난 요새", "슬로츠코겐 공원", "피스케코르카 해산물 시장"],
    photoTips: "하가니간 거리는 오전 빛이 좋으며, 크리스마스 시즌에는 장식이 가득해 야경도 아름답습니다.",
    tips: [
      "카페 후세트에서 얼굴만 한 카넬불레를 꼭 맛보세요.",
      "주말 오전에 방문하면 현지인들의 피카 문화를 자연스럽게 체험할 수 있습니다.",
      "하가에서 스칸센 크로난까지 도보 약 15분, 예테보리 전경을 조망할 수 있습니다.",
    ],
  },

  // ===== UPPSALA (Stockholm Central) =====
  "sweden/stockholm-central/uppsala/uppsala-cathedral": {
    heroGradient: "from-rose-500 to-red-800",
    description: "높이 118.7m의 쌍탑을 자랑하는 스칸디나비아 최대의 고딕 성당. 1435년 축성된 이래 스웨덴 대주교의 주교좌이자 왕들의 대관식이 거행된 스웨덴 정신적 중심지. 분류학의 아버지 칼 린네의 묘소가 있습니다.",
    history: "1270년 착공, 1435년 축성. 프랑스 고딕 양식으로 건축되었으며 여러 차례 화재와 복원을 거쳤습니다. 구스타브 1세 바사 왕, 칼 린네, 에마누엘 스베덴보리 등이 안장되어 있습니다.",
    visitInfo: {
      hours: "매일 08:00~18:00",
      admission: "무료 (탑 투어 SEK 80, 여름 시즌 한정)",
      address: "Domkyrkoplan 1, 753 10 Uppsala",
      website: "https://www.uppsaladomkyrka.se",
    },
    highlights: [
      "118.7m 쌍탑 - 스칸디나비아에서 가장 높은 교회 건물",
      "칼 린네의 묘소와 기념 예배당",
      "구스타브 1세 바사 왕의 무덤",
      "중세 직물 컬렉션과 교회 보물관",
    ],
    nearbyAttractions: ["웁살라 성", "구스타비아눔 박물관", "웁살라 대학 식물원"],
    photoTips: "성당 정면은 서쪽에서, 쌍탑 전체를 담으려면 퓌리스 강 건너편에서 촬영하세요.",
    tips: [
      "무료 입장이지만 기부함이 있으니 자유롭게 기부해도 좋습니다.",
      "여름 시즌 탑 투어에 참가하면 웁살라 시내를 한눈에 조망할 수 있습니다.",
      "웁살라 성에서 내려다보는 대성당 전경도 놓치지 마세요.",
    ],
  },

  // ===== KIRUNA (Lapland North) =====
  "sweden/lapland-north/kiruna/icehotel": {
    heroGradient: "from-cyan-400 to-blue-800",
    description: "매년 겨울 토르네 강의 얼음으로 새롭게 건축되는 세계 최초·최대의 얼음 호텔. 전 세계 예술가들이 조각한 얼음 스위트룸에서 숙박할 수 있으며, 아이스 바에서 얼음잔으로 칵테일을 즐길 수 있습니다.",
    history: "1989년 일본 예술가 전시회를 위해 이글루를 만든 것이 시초입니다. 1990년부터 매년 겨울 새롭게 건축되기 시작했으며, 2016년에는 태양열 냉각 시스템을 갖춘 연중 운영 시설 ICEHOTEL 365가 오픈했습니다.",
    visitInfo: {
      hours: "겨울 호텔: 12~4월 / ICEHOTEL 365: 연중 운영 / 비숙박 투어: 매일 10:00~18:00",
      admission: "비숙박 투어 SEK 250 / 숙박 SEK 3,600~(더블룸 기준)",
      address: "Marknadsvägen 63, 981 91 Jukkasjärvi",
      website: "https://www.icehotel.com",
    },
    highlights: [
      "매년 새롭게 디자인되는 아트 스위트룸",
      "얼음잔으로 칵테일을 마시는 아이스 바",
      "얼음 조각 워크숍 체험",
      "ICEHOTEL 365 - 연중 방문 가능한 상설 얼음 전시",
    ],
    nearbyAttractions: ["오로라 스카이 스테이션", "키루나 광산", "사미 문화 체험"],
    photoTips: "블루 아워(해 뜨기 직전/직후)에 호텔 외관을 촬영하면 환상적인 푸른빛을 담을 수 있습니다.",
    tips: [
      "숙박 시 침낭과 방한 장비가 제공되며, 실내 온도는 약 영하 5도입니다.",
      "숙박 전후로 이용할 수 있는 따뜻한 릴렉스 룸이 제공됩니다.",
      "비숙박자도 낮 시간 투어로 내부를 관람할 수 있습니다.",
      "예약은 최소 2~3개월 전에 하는 것을 권장합니다.",
    ],
  },
  "sweden/lapland-north/kiruna/aurora-sky-station": {
    heroGradient: "from-violet-600 to-indigo-900",
    description: "아비스코 국립공원 내 누올리야 산 해발 900m에 위치한 세계적 오로라 관측소. 체어리프트를 타고 올라가 '블루홀'이라 불리는 특수 기상 조건 덕분에 세계 최고의 오로라 관측 확률을 자랑합니다.",
    visitInfo: {
      hours: "오로라 투어: 21:00~01:00 (9~3월) / 낮 투어: 연중 운영",
      admission: "오로라 투어 SEK 795 (체어리프트 + 가이드 + 따뜻한 음료 포함)",
      address: "Abisko Turiststation, 981 07 Abisko",
      website: "https://www.auroraskystation.se",
    },
    highlights: [
      "세계 최고의 오로라 관측 확률",
      "체어리프트로 올라가는 야간 투어의 스릴",
      "산 위에서 바라보는 토르네트레스크 호수 파노라마",
      "따뜻한 사미 텐트(라부)에서의 휴식",
    ],
    nearbyAttractions: ["아비스코 국립공원", "쿵스레덴 트레일", "토르네트레스크 호수"],
    photoTips: "오로라 촬영을 위해 삼각대 필수. ISO 1600~3200, 셔터 스피드 10~25초, 조리개 f/2.8 이하 권장.",
    tips: [
      "오로라 투어는 날씨에 따라 취소될 수 있으므로 여러 날 일정을 잡으세요.",
      "영하 20~30도까지 떨어지므로 극한 방한 장비가 필수입니다.",
      "체어리프트가 개방형이므로 바람막이 고글과 넥워머를 준비하세요.",
      "키루나에서 당일치기도 가능하지만 아비스코에서 숙박하면 더 여유롭습니다.",
    ],
  },

  // ===== ABISKO (Lapland North) =====
  "sweden/lapland-north/abisko/abisko-national-park": {
    heroGradient: "from-green-600 to-teal-800",
    description: "북극권에 위치한 77km²의 국립공원으로 토르네트레스크 호수, 아비스코요크 협곡, 자작나무 숲이 어우러진 대자연의 보고. 여름에는 트레킹, 겨울에는 오로라 관측과 스키로 사계절 방문객을 맞이합니다.",
    history: "1909년 스웨덴 최초의 국립공원 9곳 중 하나로 지정되었습니다. 쿵스레덴(왕의 길) 트레킹 코스의 북쪽 출발점이자 북극권 생태계 연구의 중심지입니다.",
    visitInfo: {
      hours: "연중 개방 (나투름 방문자센터: 09:00~18:00, 시즌별 상이)",
      admission: "무료",
      address: "Abisko Nationalpark, 981 07 Abisko",
      website: "https://www.sverigesnationalparker.se/abisko",
    },
    highlights: [
      "아비스코요크 협곡 - 공원의 상징적인 자연 경관",
      "토르네트레스크 호수 - 스웨덴에서 6번째로 큰 호수",
      "쿵스레덴(왕의 길) 트레킹 코스 출발점",
      "여름 백야와 겨울 오로라의 대비되는 경험",
    ],
    nearbyAttractions: ["오로라 스카이 스테이션", "쿵스레덴 트레일", "키루나"],
    photoTips: "여름 백야 시즌에는 자정 태양 아래 토르네트레스크 호수가 황금빛으로 물듭니다. 겨울에는 오로라와 설경의 조합이 환상적.",
    tips: [
      "여름 방문 시 모기 대비(헤드넷, 방충제)는 필수입니다.",
      "겨울 방문 시 해가 뜨지 않는 극야 기간(12~1월)에도 푸른 빛의 트와일라잇이 아름답습니다.",
      "나투름 방문자센터에서 트레킹 코스 정보와 날씨를 확인하세요.",
      "야생 순록, 여우, 독수리 등을 만날 수 있으니 조용히 이동하세요.",
    ],
  },
};
