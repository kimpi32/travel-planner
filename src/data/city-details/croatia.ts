import type { CityDetail, AttractionDetail } from "../city-details";

export const croatiaCityDetails: Record<string, CityDetail> = {
  // ===== DUBROVNIK & SOUTH =====
  "croatia/dubrovnik-south/dubrovnik": {
    heroGradient: "from-orange-500 to-red-800",
    description: "아드리아해의 진주로 불리는 크로아티아 최고의 관광 도시. 유네스코 세계유산인 구시가지 성벽, 대리석 거리 스트라둔, 그리고 왕좌의 게임 촬영지로 전 세계 여행자를 매료시킵니다.",
    bestTime: "5~6월, 9~10월 (7~8월 극성수기 피하기)",
    stayArea: "구시가지 내부 또는 플로체 지구",
    transport: "구시가지 도보 / 시내버스 (Libertas)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "성벽으로 둘러싸인 역사 지구로 스트라둔 대로와 주요 명소가 밀집.", highlights: ["스트라둔", "성벽 투어", "렉터 궁전", "오노프리오 분수"] },
      { name: "플로체", nameEn: "Ploče", description: "구시가지 동쪽의 해변 지구로 반제 비치와 고급 호텔이 위치.", highlights: ["반제 비치", "케이블카 승강장", "레부린 요새"] },
      { name: "라파드", nameEn: "Lapad", description: "현지인 거주 지역으로 해변과 합리적 숙소가 많은 반도.", highlights: ["라파드 해변", "그루즈 항구", "산책로"] },
    ],
    attractions: [
      { name: "구시가지 성벽", nameEn: "Old Town Walls", description: "총 길이 약 2km의 중세 성벽으로 아드리아해와 붉은 지붕의 파노라마를 즐길 수 있습니다.", category: "역사", tip: "오전 8시 개장 직후 방문하면 인파를 피할 수 있습니다." },
      { name: "스트라둔", nameEn: "Stradun", description: "구시가지를 관통하는 300m 대리석 거리로 카페, 상점, 역사 건물이 늘어서 있습니다.", category: "거리", tip: "해질녘과 야간에 특히 아름답습니다." },
      { name: "로크룸 섬", nameEn: "Lokrum Island", description: "구항구에서 페리로 15분 거리의 자연 섬으로 식물원, 사해 호수, 왕좌의 게임 전시가 있습니다.", category: "자연", tip: "마지막 페리 시간을 반드시 확인하세요." },
      { name: "스르지 산 케이블카", nameEn: "Srđ Cable Car", description: "두브로브니크 전경을 한눈에 볼 수 있는 산 정상 전망대.", category: "전망대" },
      { name: "렉터 궁전", nameEn: "Rector's Palace", description: "고딕-르네상스 양식의 옛 총독 관저로 현재 역사 박물관.", category: "박물관" },
      { name: "레부린 요새", nameEn: "Fort Revelin", description: "16세기 요새로 여름에는 야외 클럽과 공연장으로 변신합니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "엘라피티 제도", nameEn: "Elaphiti Islands", description: "세 개의 아름다운 섬(코로출라, 로푸드, 시판)을 도는 보트 투어.", travelTime: "페리 약 1시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "모스타르", nameEn: "Mostar", description: "보스니아 헤르체고비나의 오래된 다리 마을, 국경 넘는 당일치기.", travelTime: "버스 약 2.5시간", gradient: "from-emerald-400 to-teal-700" },
    ],
    localFood: [
      { name: "검은 리소토", description: "오징어 먹물로 만든 크로아티아 대표 해산물 리소토.", emoji: "🍚" },
      { name: "부자라", description: "새우를 마늘·와인·빵가루와 함께 조리한 달마티아 해안 요리.", emoji: "🦐" },
      { name: "로주타", description: "장미 모양의 전통 튀김 디저트, 설탕을 듬뿍 뿌려 먹습니다.", emoji: "🌹" },
    ],
    tips: [
      "두브로브니크 카드(1/3/7일)로 성벽·박물관·버스 이용이 가능합니다.",
      "크루즈선이 입항하는 10시~16시는 구시가지가 매우 혼잡합니다.",
      "성벽 투어는 약 1.5~2시간 소요, 물과 모자를 반드시 챙기세요.",
      "여름 성수기 숙소는 최소 2~3개월 전 예약이 필수입니다.",
    ],
  },
  "croatia/dubrovnik-south/split": {
    heroGradient: "from-sky-500 to-indigo-800",
    description: "크로아티아 제2의 도시이자 달마티아 해안의 중심. 로마 황제 디오클레티아누스의 궁전이 도심 그 자체인 독특한 도시로, 아드리아해 섬 여행의 관문입니다.",
    bestTime: "5~6월, 9~10월",
    stayArea: "디오클레티아누스 궁전 내부 또는 리바 해변가",
    transport: "도보 / 시내버스 (Promet Split)",
    districts: [
      { name: "궁전 지구", nameEn: "Diocletian's Palace", description: "로마 시대 궁전 내부에 형성된 생활 공간으로 레스토랑, 상점, 주거지가 공존.", highlights: ["페리스틸", "대성당", "지하궁전", "황금 문"] },
      { name: "리바", nameEn: "Riva", description: "바다를 따라 이어지는 해안 산책로로 카페와 야자수가 어우러진 스플리트의 거실.", highlights: ["리바 산책로", "카페 거리", "항구 전경"] },
    ],
    attractions: [
      { name: "디오클레티아누스 궁전", nameEn: "Diocletian's Palace", description: "AD 305년 건설된 로마 황제의 은퇴 궁전으로 유네스코 세계유산. 궁전 안에 도시가 살아 숨 쉽니다.", category: "역사", tip: "지하궁전(Substructures)은 반드시 입장하세요. 왕좌의 게임 촬영지이기도 합니다." },
      { name: "마르얀 언덕", nameEn: "Marjan Hill", description: "스플리트 서쪽의 자연 공원으로 산책로, 전망대, 해변이 있는 도시의 허파.", category: "자연", tip: "정상까지 약 30분 하이킹, 일몰 시간에 맞춰 방문 추천." },
      { name: "성 도미니우스 대성당", nameEn: "Cathedral of Saint Domnius", description: "디오클레티아누스의 영묘를 개조한 세계에서 가장 오래된 대성당 건물 중 하나.", category: "종교" },
      { name: "그레고리우스 닌 동상", nameEn: "Gregory of Nin Statue", description: "이반 메슈트로비치 작품, 엄지발가락을 만지면 행운이 온다는 전설.", category: "랜드마크", tip: "황금 문 밖에 위치, 반짝이는 엄지발가락이 인증샷 포인트!" },
    ],
    dayTrips: [
      { name: "흐바르 섬", nameEn: "Hvar Island", description: "라벤더 향기와 고급 리조트로 유명한 아드리아해의 보석.", travelTime: "카타마란 약 1시간", gradient: "from-violet-400 to-purple-700" },
    ],
    localFood: [
      { name: "파슈티차다", description: "소고기를 프룬·와인과 함께 장시간 끓인 달마티아 전통 스튜.", emoji: "🍲" },
      { name: "소파르니크", description: "근대(시금치류)를 넣은 얇은 파이, 스플리트 주변 전통 음식.", emoji: "🥧" },
    ],
    tips: [
      "스플리트는 흐바르·브라치·비스 등 섬 여행의 페리 허브입니다.",
      "궁전 지하궁전과 대성당 종탑은 유료 입장이며 콤보 티켓이 있습니다.",
      "리바 해변가에서 저녁 산책(코르소)은 현지인의 일상입니다.",
    ],
  },
  // ===== ZAGREB & INLAND =====
  "croatia/zagreb-inland/zagreb": {
    heroGradient: "from-blue-600 to-slate-800",
    description: "크로아티아의 수도이자 문화 예술의 중심지. 오스트리아-헝가리 제국의 영향을 받은 건축물, 활기찬 카페 문화, 독특한 박물관이 매력적인 중부 유럽풍 도시입니다.",
    bestTime: "4~10월 (12월 크리스마스 마켓)",
    stayArea: "반 옐라치치 광장 주변",
    transport: "트램, 버스 (ZET) / 푸니쿨라",
    districts: [
      { name: "고르니그라드", nameEn: "Upper Town (Gornji Grad)", description: "중세 역사 지구로 성 마르크 교회, 로트르슈차크 탑 등 주요 명소 밀집.", highlights: ["성 마르크 교회", "로트르슈차크 탑", "돌라츠 시장", "석문"] },
      { name: "도니그라드", nameEn: "Lower Town (Donji Grad)", description: "19세기 도시 계획으로 조성된 녹지대와 박물관, 극장이 밀집한 문화 지구.", highlights: ["반 옐라치치 광장", "토미슬라프 광장", "예술 파빌리온"] },
      { name: "트칼치체바 거리", nameEn: "Tkalčićeva Street", description: "카페, 바, 레스토랑이 밀집한 자그레브 최고의 유흥 거리.", highlights: ["노천 카페", "스트리트 아트", "라이브 음악"] },
    ],
    attractions: [
      { name: "고르니그라드 (어퍼타운)", nameEn: "Upper Town", description: "푸니쿨라나 계단으로 올라가는 중세 언덕 위 구시가지. 성 마르크 교회의 모자이크 지붕이 상징입니다.", category: "역사지구", tip: "세계에서 가장 짧은 푸니쿨라(66m)를 타고 올라가세요." },
      { name: "실연 박물관", nameEn: "Museum of Broken Relationships", description: "전 세계에서 기증받은 이별의 유품을 전시하는 독특한 박물관으로 자그레브 필수 코스.", category: "박물관", tip: "오디오 가이드를 빌리면 각 유품의 사연을 더 깊이 느낄 수 있습니다." },
      { name: "돌라츠 시장", nameEn: "Dolac Market", description: "자그레브의 배꼽이라 불리는 야외 시장으로 신선한 과일, 치즈, 꿀 등을 판매.", category: "시장" },
      { name: "미로슬라프 크를레자 미술관", nameEn: "Mimara Museum", description: "라파엘로, 렘브란트 등 3,700여 점의 유럽 미술 컬렉션.", category: "미술관" },
      { name: "성 마르크 교회", nameEn: "St. Mark's Church", description: "크로아티아와 자그레브 문장이 새겨진 화려한 모자이크 지붕이 상징.", category: "종교" },
    ],
    dayTrips: [
      { name: "플리트비체 호수", nameEn: "Plitvice Lakes", description: "16개 호수와 폭포가 연결된 크로아티아 최고의 자연 유산.", travelTime: "버스 약 2~2.5시간", gradient: "from-emerald-500 to-green-800" },
      { name: "라스토케", nameEn: "Rastoke", description: "코라나 강의 폭포 위에 세워진 동화 같은 물레방아 마을.", travelTime: "버스 약 1.5시간", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "슈트루클리", description: "코티지 치즈를 넣은 구운 페이스트리, 자그레브 대표 음식.", emoji: "🥐" },
      { name: "체바프치치", description: "다진 고기 꼬치구이로 양파·아이바르 소스와 함께 빵에 싸 먹습니다.", emoji: "🥙" },
      { name: "크렘슈니테", description: "바닐라 커스터드 크림 케이크, 사모보르 지역 명물.", emoji: "🍰" },
    ],
    tips: [
      "자그레브 카드(24/72시간)로 트램·박물관·레스토랑 할인을 받으세요.",
      "매일 정오에 로트르슈차크 탑에서 대포가 발사됩니다(1877년 전통).",
      "트칼치체바 거리는 낮에는 카페, 밤에는 바 거리로 변신합니다.",
      "12월 크리스마스 마켓(Advent in Zagreb)은 유럽 최고 중 하나로 선정된 바 있습니다.",
    ],
  },
  "croatia/zagreb-inland/plitvice-lakes": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "크로아티아 최고의 자연 유산이자 유네스코 세계유산. 16개의 계단식 호수가 92개의 폭포로 연결된 장관으로, 에메랄드빛과 코발트빛 호수가 계절마다 색을 바꿉니다.",
    bestTime: "4~6월, 9~10월 (여름 극성수기 피하기)",
    stayArea: "국립공원 입구 1 또는 2 주변 숙소",
    transport: "자그레브/스플리트에서 버스 / 렌터카",
    districts: [
      { name: "상부 호수", nameEn: "Upper Lakes", description: "프로슈칸스코 호수를 포함한 12개 호수로 울창한 숲과 작은 폭포가 이어지는 코스.", highlights: ["프로슈칸스코 호수", "목재 산책로", "숲속 폭포"] },
      { name: "하부 호수", nameEn: "Lower Lakes", description: "대폭포(78m)가 있는 4개 호수로 가장 극적인 경관을 자랑.", highlights: ["대폭포", "코지악 호수", "보트 탑승"] },
    ],
    attractions: [
      { name: "플리트비체 국립공원", nameEn: "Plitvice Lakes National Park", description: "16개 호수와 92개 폭포로 이루어진 크로아티아 최고의 자연 경관. 나무 산책로를 따라 호수 위를 걸을 수 있습니다.", category: "자연", tip: "입구 1에서 시작하는 코스 C·H가 가장 인기 있으며, 4~6시간 소요됩니다." },
      { name: "대폭포", nameEn: "Veliki Slap", description: "높이 78m의 플리트비체 최대 폭포로 하부 호수의 하이라이트.", category: "자연" },
      { name: "코지악 호수 보트", nameEn: "Kozjak Lake Boat", description: "상부와 하부 호수를 연결하는 전기 보트로 호수 한가운데를 가로지릅니다.", category: "체험", tip: "보트는 입장권에 포함되어 있습니다." },
    ],
    dayTrips: [
      { name: "라스토케", nameEn: "Rastoke", description: "폭포 위의 물레방아 마을, 공원 가는 길에 들르기 좋습니다.", travelTime: "차량 약 30분", gradient: "from-teal-400 to-cyan-700" },
    ],
    localFood: [
      { name: "구운 송어", description: "플리트비체 주변 레스토랑의 명물, 맑은 호수에서 잡은 민물 송어.", emoji: "🐟" },
      { name: "양고기 꼬치", description: "리카 지역 전통 양고기 구이, 숯불에 천천히 굽습니다.", emoji: "🍖" },
    ],
    tips: [
      "여름(7~8월)은 하루 방문객 제한이 있으므로 온라인 사전 예약이 필수입니다.",
      "방수 운동화를 꼭 신으세요. 나무 산책로가 젖으면 미끄럽습니다.",
      "자그레브↔스플리트 이동 중간에 들르면 효율적입니다.",
    ],
  },
  // ===== ISTRIA =====
  "croatia/istria/rovinj": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "이스트리아 반도의 보석으로 불리는 로맨틱한 어항 도시. 파스텔 색상의 건물이 바다를 향해 솟아오른 구시가지와 좁은 골목길이 이탈리아 감성을 물씬 풍깁니다.",
    bestTime: "5~9월",
    stayArea: "구시가지 내부 또는 항구 주변",
    transport: "도보 (구시가지 차량 진입 불가)",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "반도 위에 형성된 중세 어촌 마을로 좁은 골목과 파스텔 건물이 매력.", highlights: ["성 유페미아 교회", "그리시아 거리", "발비 아치"] },
    ],
    attractions: [
      { name: "로비니 구시가지", nameEn: "Rovinj Old Town", description: "아드리아해를 향해 솟아오른 반도 위의 중세 마을. 미로 같은 골목과 파스텔 건물, 바다 뷰 카페가 감동을 줍니다.", category: "역사지구", tip: "성 유페미아 교회 종탑에 오르면 이스트리아 반도와 섬들이 한눈에 보입니다." },
      { name: "그리시아 거리", nameEn: "Grisia Street", description: "화가와 공예가들이 작품을 전시하는 예술의 거리, 매년 여름 오픈 에어 갤러리가 열립니다.", category: "거리" },
      { name: "성 유페미아 교회", nameEn: "St. Euphemia's Church", description: "로비니 최고점에 위치한 바로크 교회로 61m 종탑에서 360도 파노라마 전망.", category: "종교" },
      { name: "골든 케이프 공원", nameEn: "Golden Cape Park (Zlatni Rt)", description: "구시가지 남쪽의 삼림 공원으로 수영, 하이킹, 사이클링이 가능한 자연 명소.", category: "자연" },
    ],
    dayTrips: [
      { name: "풀라", nameEn: "Pula", description: "로마 원형경기장이 있는 이스트리아 최대 도시.", travelTime: "버스 약 45분", gradient: "from-yellow-500 to-amber-700" },
    ],
    localFood: [
      { name: "이스트리아 트러플 파스타", description: "세계적 트러플 산지인 이스트리아의 명물, 풍미 가득한 파스타.", emoji: "🍝" },
      { name: "프리톨레", description: "이스트리아식 생선 튀김, 갓 잡은 해산물로 만듭니다.", emoji: "🐠" },
    ],
    tips: [
      "로비니는 이탈리아어 병용 지역으로 메뉴판에 이탈리아어가 함께 표기됩니다.",
      "해질녘 구시가지 서쪽 바위에 앉아 보는 일몰이 압권입니다.",
      "여름에는 보트를 타고 근처 섬(붉은 섬, 성 안드레아)을 방문해보세요.",
    ],
  },
  "croatia/istria/pula": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "이스트리아 반도의 최대 도시이자 로마 유적의 보고. 세계에서 가장 잘 보존된 로마 원형경기장 중 하나인 풀라 아레나가 도심 한가운데 우뚝 서 있습니다.",
    bestTime: "5~9월",
    stayArea: "아레나 주변 / 구시가지",
    transport: "도보 / 시내버스",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "아레나에서 시작해 포럼 광장까지 이어지는 로마·베네치아 시대 유적 지구.", highlights: ["풀라 아레나", "세르기우스 개선문", "아우구스투스 신전"] },
    ],
    attractions: [
      { name: "풀라 아레나", nameEn: "Pula Arena", description: "1세기에 건설된 로마 원형경기장으로 2만명 수용 규모. 여름에는 콘서트와 영화제가 열립니다.", category: "역사", tip: "여름 저녁 아레나에서 열리는 공연 일정을 확인해보세요." },
      { name: "세르기우스 개선문", nameEn: "Arch of the Sergii", description: "기원전 27년에 세워진 로마 개선문, 구시가지 입구의 랜드마크.", category: "역사" },
      { name: "아우구스투스 신전", nameEn: "Temple of Augustus", description: "포럼 광장에 위치한 기원전 로마 신전으로 놀라운 보존 상태.", category: "역사" },
      { name: "제로스트라세 터널", nameEn: "Zerostrasse Tunnels", description: "제1차 세계대전 당시 방공호로 사용된 지하 터널, 현재 전시 공간.", category: "역사", tip: "여름에도 시원해서 더위를 피하기 좋습니다." },
    ],
    dayTrips: [
      { name: "브리유니 제도", nameEn: "Brijuni Islands", description: "국립공원으로 지정된 섬으로 사파리 공원과 로마 유적이 공존.", travelTime: "파줌→페리 약 15분", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "이스트리아 말바지야 와인", description: "이스트리아 토착 품종으로 만든 화이트 와인, 해산물과 완벽한 궁합.", emoji: "🍷" },
      { name: "푸지", description: "이스트리아 전통 수제 파스타, 트러플이나 굴라시와 함께.", emoji: "🍝" },
    ],
    tips: [
      "풀라 아레나 + 주요 유적 콤보 티켓을 구매하면 저렴합니다.",
      "아레나 지하에 올리브 오일·와인 생산 역사 전시가 있습니다.",
      "풀라 공항은 유럽 저가항공이 취항해 이스트리아 여행의 관문입니다.",
    ],
  },
};

export const croatiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== DUBROVNIK =====
  "croatia/dubrovnik-south/dubrovnik/old-town-walls": {
    heroGradient: "from-orange-500 to-red-800",
    description: "총 길이 약 1,940m의 중세 성벽으로 아드리아해와 붉은 지붕의 파노라마를 즐길 수 있습니다. 13세기부터 17세기까지 점진적으로 확장되었으며 오스만 제국의 위협에 대비해 강화되었습니다.",
    history: "두브로브니크 성벽은 13세기부터 17세기까지 점진적으로 확장되었으며, 높이 최대 25m에 달합니다. 1990년대 내전 피해 후 복원되었습니다.",
    visitInfo: { hours: "08:00~19:30 (계절별 변동, 연중무휴)", admission: "€35", address: "Ul. Svetog Dominika 2, 20000 Dubrovnik", website: "https://wallsofdubrovnik.com" },
    highlights: ["민체타 탑에서 가장 높은 전망", "보카르 요새에서 로브리예나츠 성 뷰", "구항구가 보이는 동쪽 구간 파노라마"],
    nearbyAttractions: ["스트라둔", "렉터 궁전", "로브리예나츠 요새", "오노프리오 분수"],
    photoTips: "민체타 탑 정상, 구항구가 보이는 동쪽 구간, 로브리예나츠 성이 보이는 서쪽 구간이 인기 포토스팟입니다.",
    tips: [
      "필레 문(서쪽) 입구에서 시작하면 반시계 방향으로 돌게 됩니다.",
      "오전 8시 개장 직후 방문하면 인파를 피할 수 있습니다.",
      "전체 코스는 약 1.5~2시간 소요됩니다. 물과 모자를 반드시 챙기세요.",
    ],
  },
  "croatia/dubrovnik-south/dubrovnik/stradun": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "플라차(Placa)라고도 불리는 두브로브니크 구시가지의 메인 거리로, 필레 문에서 시계탑까지 약 300m 이어집니다. 대리석 바닥이 수백 년의 발걸음으로 반질반질 빛납니다.",
    history: "1667년 대지진 후 재건된 통일된 바로크 건축물이 양쪽에 늘어서 있으며, 13세기부터 두브로브니크의 중심 거리 역할을 해왔습니다.",
    visitInfo: { hours: "24시간 (야외 거리)", admission: "무료", address: "Stradun, 20000 Dubrovnik" },
    highlights: ["오노프리오 대분수 (서쪽)", "시계탑 (동쪽)", "스폰자 궁전", "프란체스코 수도원 약국 (유럽에서 3번째로 오래된 약국)"],
    nearbyAttractions: ["구시가지 성벽", "렉터 궁전", "성 블라이세 교회"],
    photoTips: "해질녘과 야간에 조명이 켜진 대리석 거리가 특히 아름답습니다.",
    tips: [
      "1667년 대지진 후 재건된 통일된 바로크 건축물이 양쪽에 늘어서 있습니다.",
      "크루즈선 입항 시간(10시~16시)을 피해 아침 일찍 또는 저녁에 산책하세요.",
    ],
  },
  "croatia/dubrovnik-south/dubrovnik/lokrum-island": {
    heroGradient: "from-green-500 to-teal-800",
    description: "두브로브니크 앞바다 600m에 위치한 무인도로, 11세기 베네딕트 수도원 유적과 식물원, 사해(Dead Sea) 호수가 있습니다. 공작새가 자유롭게 돌아다니는 것으로 유명합니다.",
    history: "11세기 베네딕트 수도원이 세워진 이래 오랜 역사를 지닌 섬으로, 맥시밀리안 대공이 별장을 지었으며 현재 왕좌의 게임 철왕좌 복제품이 전시되어 있습니다.",
    visitInfo: { hours: "09:00~18:00 (계절별 변동, 페리 포함)", admission: "€27 (왕복 페리 포함)", address: "Lokrum Island, 20000 Dubrovnik" },
    highlights: ["사해(Dead Sea) 호수 수영", "베네딕트 수도원 유적", "왕좌의 게임 철왕좌 복제품", "식물원과 공작새"],
    nearbyAttractions: ["두브로브니크 구항구", "구시가지 성벽", "레부린 요새"],
    photoTips: "맥시밀리안 대공 별장의 철왕좌와 최남단 전망대에서의 바다 뷰가 인기 포토스팟입니다.",
    tips: [
      "구항구에서 페리로 약 15분. 수영복과 타월을 챙기세요.",
      "마지막 페리 시간을 반드시 확인하세요.",
      "추천 코스: 페리 하선 → 식물원 → 사해 호수 수영 → 수도원 유적 → 최남단 전망대. 약 3~4시간 소요.",
      "11~3월 동절기에는 운휴합니다.",
    ],
  },
  // ===== SPLIT =====
  "croatia/dubrovnik-south/split/diocletians-palace": {
    heroGradient: "from-sky-500 to-indigo-800",
    description: "로마 황제 디오클레티아누스가 은퇴 후 거처로 305년에 완공한 궁전입니다. 면적 약 3만m²로 성벽, 탑, 신전, 영묘 등이 포함된 거대한 복합 단지였으며, 이후 주민들이 정착하면서 도시가 되었습니다.",
    history: "AD 295~305년에 건설되었으며, 유네스코 세계유산으로 등재되어 있습니다. 궁전 내부에 실제로 주민이 살고, 레스토랑과 상점이 영업 중인 살아있는 유적지입니다.",
    visitInfo: { hours: "24시간 (야외 구역) / 지하궁전 08:30~21:00", admission: "무료 (야외) / 지하궁전 유료", address: "Dioklecijanova ul. 1, 21000 Split", website: "https://diocletianspalace.org" },
    highlights: ["페리스틸 (중앙 광장)", "지하궁전 (Substructures)", "대성당 종탑 전망", "황금 문·은문·철문·동문 4개의 성문"],
    nearbyAttractions: ["마르얀 언덕", "리바 해안 산책로", "그레고리우스 닌 동상"],
    photoTips: "페리스틸 광장에서 올려다보는 종탑과 지하궁전의 아치 구조가 인기 촬영 포인트입니다.",
    tips: [
      "지하궁전은 왕좌의 게임 드래곤 장면 촬영지이므로 반드시 입장하세요.",
      "궁전 지하궁전과 대성당 종탑은 유료 입장이며 콤보 티켓이 있습니다.",
      "궁전 내부에 실제 주민이 거주하고 있으니 조용히 관람하세요.",
    ],
  },
  "croatia/dubrovnik-south/split/marjan-hill": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "해발 178m의 언덕으로 스플리트 시민들의 쉼터입니다. 소나무 숲 사이로 산책로와 자전거 도로가 나 있으며, 남쪽 해안에는 수영 스팟이 있습니다.",
    history: "고대부터 스플리트의 상징적 언덕이었으며, 1964년에 공원으로 공식 지정되었습니다.",
    visitInfo: { hours: "24시간 (야외)", admission: "무료", address: "Šetalište Ivana Meštrovića, 21000 Split" },
    highlights: ["정상 전망대(Telegrin)에서 360도 파노라마", "소나무 숲 산책로", "남쪽 해안 수영 스팟", "자전거 하이킹 코스"],
    nearbyAttractions: ["디오클레티아누스 궁전", "리바 해안 산책로", "카슈니 비치"],
    photoTips: "정상에서 스플리트 구시가지, 섬들, 달마티아 해안이 파노라마로 펼쳐져 일몰 시간이 최고입니다.",
    tips: [
      "구시가지 서쪽 끝에서 계단으로 올라갈 수 있습니다. 운동화 추천.",
      "정상 전망대(Telegrin)까지는 약 30~40분 소요됩니다.",
      "일몰 시간에 맞춰 방문하는 것을 강력 추천합니다.",
    ],
  },
  // ===== ZAGREB =====
  "croatia/zagreb-inland/zagreb/upper-town": {
    heroGradient: "from-blue-600 to-slate-800",
    description: "자그레브의 역사적 심장부로 중세 시대부터 형성된 언덕 위의 구시가지입니다. 성 마르크 교회, 크로아티아 의회, 실연 박물관, 로트르슈차크 탑 등이 이 지역에 있습니다.",
    history: "11세기부터 형성된 자그레브의 원래 중심지로, 중세 성곽 도시의 면모를 간직하고 있습니다.",
    visitInfo: { hours: "24시간 (야외 지역)", admission: "무료", address: "Gornji Grad, 10000 Zagreb" },
    highlights: ["성 마르크 교회의 모자이크 타일 지붕", "로트르슈차크 탑 (매일 정오 대포 발사)", "세계에서 가장 짧은 푸니쿨라 (66m, 55초)", "석문 (Kamenita Vrata)"],
    nearbyAttractions: ["실연 박물관", "돌라츠 시장", "반 옐라치치 광장", "트칼치체바 거리"],
    photoTips: "성 마르크 교회의 모자이크 지붕은 위에서 내려다보는 각도가 가장 아름답습니다. 로트르슈차크 탑 전망대에서 시내 조망도 추천.",
    tips: [
      "일리차 거리에서 세계에서 가장 짧은 푸니쿨라(55초)를 타고 올라가세요.",
      "매일 정오에 로트르슈차크 탑에서 대포가 발사됩니다 (1877년 전통).",
      "성 마르크 교회 내부는 불규칙하게 공개되므로 외관 감상이 기본입니다.",
    ],
  },
  "croatia/zagreb-inland/zagreb/museum-of-broken-relationships": {
    heroGradient: "from-rose-400 to-pink-700",
    description: "전 세계에서 기증받은 이별의 유품을 전시하는 독특한 박물관으로 자그레브 필수 코스입니다. 2006년 크로아티아 예술가 커플의 이별에서 시작되어 2010년 상설 전시관을 열었습니다.",
    history: "2006년 크로아티아 예술가 커플이 자신들의 이별 후 소장품을 전시한 것에서 시작, 2010년 고르니그라드에 상설 개관하였습니다.",
    visitInfo: { hours: "09:00~21:00 (6~9월) / 09:00~19:00 (10~5월)", admission: "€7", address: "Ćirilometodska ul. 2, 10000 Zagreb", website: "https://brokenships.com" },
    highlights: ["전 세계에서 기증받은 이별 유품 전시", "감동적인 사연이 담긴 짧은 글", "위트 있는 이별 테마 기념품 가게"],
    nearbyAttractions: ["성 마르크 교회", "로트르슈차크 탑", "고르니그라드 전망대"],
    tips: [
      "한국어 오디오 가이드는 없지만 영어 설명이 잘 되어 있습니다.",
      "기념품 가게에서 지우개('나쁜 기억을 지우세요') 등 위트 있는 상품을 판매합니다.",
      "연중무휴이며 관람 시간은 약 1~1.5시간입니다.",
    ],
  },
  // ===== PLITVICE =====
  "croatia/zagreb-inland/plitvice-lakes/plitvice-lakes-national-park": {
    heroGradient: "from-emerald-500 to-green-800",
    description: "총 면적 296.85km²에 16개의 계단식 호수와 92개의 폭포가 석회암 지형 위에 형성되어 있습니다. 호수의 색은 미네랄 함량, 유기물, 빛의 각도에 따라 에메랄드·코발트·그린·그레이로 시시각각 변합니다.",
    history: "1949년 국립공원으로 지정되었으며 1979년 유네스코 세계유산에 등재되었습니다.",
    visitInfo: { hours: "07:00~19:00 (성수기) / 08:00~16:00 (비수기)", admission: "€10~40 (계절별 변동)", address: "Znanstveno-stručni centar Dr. Ivo Pevalek, 53231 Plitvička Jezera", website: "https://np-plitvicka-jezera.hr" },
    highlights: ["16개 계단식 호수와 92개 폭포", "대폭포 (Veliki Slap, 78m)", "코지악 호수 전기 보트 횡단", "나무 산책로 위 호수 걷기"],
    nearbyAttractions: ["라스토케 물레방아 마을", "바라나츠 동굴"],
    photoTips: "상부 호수의 에메랄드빛 물과 나무 산책로의 조합, 대폭포 전경이 최고의 촬영 포인트입니다.",
    tips: [
      "성수기(6~9월) 입장료 €40, 비수기 €10~20으로 차이가 큽니다. 비수기 방문 추천.",
      "코스 C (4~6시간): 입구 1 출발 → 하부 호수 도보 → 보트 횡단 → 상부 호수 → 열차 복귀.",
      "방수 운동화를 꼭 신으세요. 나무 산책로가 젖으면 미끄럽습니다.",
      "호수에 발을 담그거나 수영은 금지. 드론 비행 불가. 산책로를 벗어나면 안 됩니다.",
      "여름(7~8월)은 방문객 제한이 있으므로 온라인 사전 예약이 필수입니다.",
    ],
  },
  // ===== ROVINJ =====
  "croatia/istria/rovinj/rovinj-old-town": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "아드리아해를 향해 솟아오른 반도 위에 형성된 중세 어촌 마을입니다. 파스텔 색상의 건물, 좁은 골목, 빨래가 널린 창가가 이탈리아 어촌을 연상시키며 크로아티아에서 가장 로맨틱한 도시로 꼽힙니다.",
    history: "중세~베네치아 공화국 시대에 형성되었으며, 원래 섬이었으나 1763년에 육지와 연결되었습니다.",
    visitInfo: { hours: "24시간 (야외 지역)", admission: "무료", address: "Stari Grad, 52210 Rovinj" },
    highlights: ["미로 같은 중세 골목과 파스텔 건물", "그리시아 거리 (예술의 거리)", "성 유페미아 교회 61m 종탑 전망", "서쪽 해안 바위 일몰"],
    nearbyAttractions: ["골든 케이프 공원 (Zlatni Rt)", "붉은 섬", "성 안드레아 섬"],
    photoTips: "구시가지 서쪽 해안의 바위에 앉아 보는 일몰이 로비니 최고의 순간입니다.",
    tips: [
      "골목이 미로처럼 복잡하니 길을 잃는 것 자체를 즐기세요.",
      "매년 8월 둘째 주 일요일 'Grisia Art Festival'에는 거리 전체가 야외 미술관이 됩니다.",
      "성 유페미아 교회 종탑에 오르면 이스트리아 반도와 섬들이 한눈에 보입니다.",
    ],
  },
  // ===== PULA =====
  "croatia/istria/pula/pula-arena": {
    heroGradient: "from-yellow-500 to-amber-700",
    description: "1세기 아우구스투스 황제 시대에 건설이 시작되어 베스파시아누스 황제 때 완공된 로마 원형경기장입니다. 최대 2만 3천명을 수용할 수 있었으며 세계에서 6번째로 큰 규모입니다.",
    history: "AD 27~68년경에 건설된 로마 원형경기장으로, 검투사 경기와 해전 재현이 열렸습니다. 현재까지 놀라운 보존 상태를 유지하고 있습니다.",
    visitInfo: { hours: "08:00~21:00 (성수기) / 09:00~17:00 (비수기)", admission: "€10", address: "Flavijevska ul. 6, 52100 Pula", website: "https://pulainfo.hr" },
    highlights: ["2만 3천명 규모의 로마 원형경기장", "여름 콘서트 및 영화제 공연", "지하 올리브유·와인 역사 전시", "고대 암포라와 올리브 압착기"],
    nearbyAttractions: ["세르기우스 개선문", "아우구스투스 신전", "제로스트라세 터널"],
    photoTips: "아레나 내부 중앙에서 올려다보는 벽면 전경과 석양 빛이 들어오는 아치가 최고의 앵글입니다.",
    tips: [
      "여름 저녁 아레나에서 열리는 콘서트·영화제 일정을 확인해보세요.",
      "풀라 아레나 + 주요 유적 콤보 티켓을 구매하면 저렴합니다.",
      "지하 통로의 올리브유·와인 역사 전시도 놓치지 마세요.",
      "공연 시 일반 관람이 제한될 수 있으니 사전 확인이 필요합니다.",
    ],
  },
};
