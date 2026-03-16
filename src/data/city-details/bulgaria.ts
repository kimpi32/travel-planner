import type { CityDetail, AttractionDetail } from "../city-details";

export const bulgariaCityDetails: Record<string, CityDetail> = {
  // ===== SOFIA & CENTRAL =====
  "bulgaria/sofia-central/sofia": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "2,000년이 넘는 역사를 품은 불가리아의 수도. 알렉산더 네프스키 대성당의 황금 돔이 스카이라인을 장식하고, 로마 시대 유적과 오스만 모스크, 공산주의 시대 건축이 한 도시에 공존합니다. 유럽에서 가장 저렴한 수도 중 하나로 여행자에게 매력적입니다.",
    bestTime: "5~9월 (4월, 10월도 온화)",
    stayArea: "비토샤 대로 주변 또는 세르디카역 근처",
    transport: "지하철 / 트램 / 버스",
    districts: [
      { name: "시내 중심", nameEn: "City Center", description: "알렉산더 네프스키 대성당, 성 소피아 교회, 의회 건물이 있는 역사적 중심부.", highlights: ["알렉산더 네프스키 대성당", "성 소피아 교회", "대통령 궁", "성 게오르기 로마 원형교회"] },
      { name: "세르디카", nameEn: "Serdica", description: "로마 시대 세르디카 유적이 지하철역 공사 중 발견된 지역. 고대 로마 도시의 흔적이 노출 전시되어 있습니다.", highlights: ["세르디카 로마 유적", "바냐 바시 모스크", "중앙 할라 시장", "미네랄 온천수"] },
      { name: "비토샤 대로", nameEn: "Vitosha Boulevard", description: "소피아의 메인 보행자 전용 거리. 카페, 레스토랑, 상점이 늘어서 있으며 끝에서 비토샤 산이 보입니다.", highlights: ["비토샤 대로", "국립 문화 궁전(NDK)", "유젠 파크", "비토샤 산 전망"] },
    ],
    attractions: [
      { name: "알렉산더 네프스키 대성당", nameEn: "Alexander Nevsky Cathedral", description: "유럽 최대 정교회 성당 중 하나로 1882~1912년에 건축되었습니다. 5,000명을 수용하는 황금 돔의 네오비잔틴 양식 대성당으로 소피아의 상징입니다.", category: "종교", tip: "지하 크립트에 불가리아 최대의 이콘 컬렉션이 전시되어 있습니다." },
      { name: "보야나 교회", nameEn: "Boyana Church", description: "유네스코 세계유산. 13세기 프레스코화가 이탈리아 르네상스보다 앞선 사실적 표현으로 평가받는 중세 교회.", category: "종교", tip: "하루 방문객 수 제한이 있으므로 사전 예약이 필수입니다." },
      { name: "비토샤 산", nameEn: "Vitosha Mountain", description: "소피아 도심에서 30분 거리의 해발 2,290m 산. 하이킹, 스키, 피크닉을 즐길 수 있는 시민의 놀이터.", category: "자연", tip: "시내에서 버스로 30분. 여름에는 하이킹, 겨울에는 스키가 가능합니다." },
      { name: "성 게오르기 원형교회", nameEn: "Rotunda of St. George", description: "4세기에 건설된 소피아에서 가장 오래된 건물. 대통령궁 안뜰에 위치한 붉은 벽돌의 로마 시대 교회입니다.", category: "역사" },
      { name: "중앙 할라 시장", nameEn: "Central Market Hall", description: "1911년 개장한 신바로크 양식의 실내 시장. 치즈, 꿀, 향신료 등 불가리아 특산품을 구매할 수 있습니다.", category: "시장" },
    ],
    dayTrips: [
      { name: "릴라 수도원", nameEn: "Rila Monastery", description: "유네스코 세계유산. 발칸 반도 최대의 정교회 수도원으로 화려한 프레스코화가 압권입니다.", travelTime: "버스 약 2시간", gradient: "from-emerald-600 to-green-900" },
      { name: "보야나 교회", nameEn: "Boyana Church", description: "유네스코 세계유산의 13세기 프레스코화. 소피아 외곽 비토샤 산 기슭에 위치.", travelTime: "버스 약 30분", gradient: "from-amber-500 to-orange-700" },
    ],
    localFood: [
      { name: "쇼프스카 샐러드", description: "토마토, 오이, 피망에 시레네(화이트 치즈)를 갈아 얹은 불가리아 국민 샐러드.", emoji: "🥗" },
      { name: "바니차", description: "필로 페이스트리에 치즈와 달걀을 넣어 구운 전통 파이. 아침 식사의 정석.", emoji: "🥐" },
      { name: "타라토르", description: "요거트, 오이, 마늘, 호두로 만든 차가운 수프. 여름 필수 메뉴.", emoji: "🥣" },
      { name: "카바르마", description: "돼지고기, 양파, 버섯을 테라코타 냄비에 넣고 구운 전통 스튜.", emoji: "🍖" },
    ],
    tips: [
      "소피아 프리 워킹 투어는 도시 이해에 매우 효과적입니다. 매일 출발합니다.",
      "알렉산더 네프스키 대성당은 무료 입장이며 일요일 미사 시 내부가 가장 아름답습니다.",
      "세르디카역 앞 노천 온천수(무료)에서 물을 맛볼 수 있습니다. 미네랄이 풍부합니다.",
      "불가리아 레프는 유로에 고정 환율(1 EUR = 약 1.96 BGN)입니다.",
      "소피아의 물가는 서유럽의 1/3~1/4 수준으로 매우 저렴합니다.",
    ],
  },
  "bulgaria/sofia-central/rila-monastery": {
    heroGradient: "from-emerald-600 to-green-900",
    description: "릴라 산맥 깊은 곳, 해발 1,147m에 자리한 발칸 반도 최대이자 가장 아름다운 동방정교회 수도원. 유네스코 세계유산으로 화려한 프레스코화로 뒤덮인 교회와 후렐료 탑이 불가리아 정신 문화의 요람입니다.",
    bestTime: "5~10월",
    stayArea: "수도원 숙소 또는 릴라 마을",
    transport: "소피아에서 버스 / 렌터카",
    districts: [
      { name: "수도원 단지", nameEn: "Monastery Complex", description: "성벽으로 둘러싸인 수도원 건물군. 중앙 교회, 후렐료 탑, 수도승 숙소, 박물관이 위치.", highlights: ["릴라 수도원 교회", "후렐료 탑", "수도원 박물관", "프레스코화 회랑"] },
    ],
    attractions: [
      { name: "릴라 수도원 교회", nameEn: "Church of the Nativity", description: "수도원의 중심 건물로 외벽과 내벽 전체가 화려한 프레스코화로 뒤덮여 있습니다. 36개의 장면이 천국과 지옥을 묘사합니다.", category: "종교", tip: "내부 사진 촬영은 금지이지만 외부 회랑의 프레스코화는 촬영 가능합니다." },
      { name: "후렐료 탑", nameEn: "Hrelyova Tower", description: "1335년에 건설된 수도원에서 가장 오래된 건축물. 5층 높이의 중세 탑입니다.", category: "역사" },
      { name: "수도원 박물관", nameEn: "Monastery Museum", description: "라파엘 수도사가 12년간 조각한 십자가(1.5cm 속에 104개 장면)가 최대 볼거리입니다.", category: "박물관", tip: "라파엘 수도사의 미니어처 십자가는 반드시 봐야 할 걸작입니다." },
    ],
    dayTrips: [
      { name: "릴라 7대 호수", nameEn: "Seven Rila Lakes", description: "릴라 산맥의 빙하 호수군으로 하이킹 코스가 유명합니다.", travelTime: "차량 약 30분 + 리프트", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "수도원 빵", description: "수도승들이 전통 방식으로 구운 빵. 수도원 내에서 구매할 수 있습니다.", emoji: "🍞" },
      { name: "불가리아 요거트", description: "독특한 유산균으로 만든 세계 최고의 요거트. 현지에서 더욱 진한 맛.", emoji: "🥛" },
    ],
    tips: [
      "소피아에서 당일치기 가능하지만, 수도원 숙소(1박 약 30~50 BGN)에 머물면 아침의 고요한 분위기를 즐길 수 있습니다.",
      "수도원 내부에서는 조용히 해야 하며, 반바지·민소매 착용은 삼가세요.",
      "릴라 7대 호수 하이킹을 결합하면 자연과 문화를 모두 경험할 수 있습니다.",
      "겨울에는 접근 도로가 눈으로 막힐 수 있으니 사전 확인이 필요합니다.",
    ],
  },
  // ===== PLOVDIV & THRACE =====
  "bulgaria/plovdiv-thrace/plovdiv": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "8,000년 이상의 역사를 가진 세계에서 가장 오래된 연속 거주 도시 중 하나. 7개 언덕 위에 세워진 구시가지에 로마 원형극장, 오스만 모스크, 불가리아 민족 부흥 시대의 화려한 저택들이 시대를 초월해 공존합니다. 2019년 유럽 문화 수도.",
    bestTime: "4~10월",
    stayArea: "구시가지 또는 카파나 지구",
    transport: "도보 (중심부) / 시내버스",
    districts: [
      { name: "구시가지", nameEn: "Old Town", description: "언덕 위의 역사 지구. 민족 부흥 시대(19세기) 저택, 로마 유적, 교회가 밀집한 플로브디프의 하이라이트.", highlights: ["로마 원형극장", "히사르 카피아(동쪽 문)", "에트노그래프 박물관", "민족 부흥 시대 저택"] },
      { name: "카파나", nameEn: "Kapana", description: "한때 장인의 거리였던 곳이 현재 트렌디한 카페, 갤러리, 바가 밀집한 창작 예술 지구로 변신.", highlights: ["스트리트 아트", "독립 갤러리", "크래프트 바", "주말 아트 마켓"] },
      { name: "중심가", nameEn: "Central Plovdiv", description: "크냐즈 알렉산더 1세 보행자 거리를 중심으로 로마 유적(스타디움, 포럼)이 노출 전시된 현대 도심.", highlights: ["로마 스타디움", "주마야 모스크", "크냐즈 알렉산더 거리", "중앙 광장"] },
    ],
    attractions: [
      { name: "로마 원형극장", nameEn: "Ancient Roman Theatre", description: "2세기에 건설된 7,000석 규모의 로마 원형극장. 현재도 여름에 오페라와 콘서트가 열리는 살아있는 유적지입니다.", category: "역사", tip: "여름 저녁 공연 일정을 확인해보세요. 고대 극장에서의 공연은 잊지 못할 경험입니다." },
      { name: "구시가지", nameEn: "Plovdiv Old Town", description: "언덕 위의 역사 지구. 19세기 민족 부흥 시대의 화려한 목조 저택들이 좁은 자갈길 양쪽에 늘어서 있습니다.", category: "역사지구", tip: "에트노그래프 박물관(1847년 건축)은 구시가지 건축의 백미입니다." },
      { name: "카파나 아트 지구", nameEn: "Kapana Creative District", description: "장인의 거리에서 예술가의 거리로 변신한 플로브디프의 힙스터 지구. 스트리트 아트, 갤러리, 카페가 가득.", category: "예술", tip: "매월 첫 번째 토요일에 카파나 아트 페스트가 열립니다." },
      { name: "네벳 테페", nameEn: "Nebet Tepe", description: "플로브디프 7개 언덕 중 가장 오래된 정착지. 트라키아 시대부터의 유적과 도시 전망을 즐길 수 있습니다.", category: "전망대" },
      { name: "로마 스타디움", nameEn: "Roman Stadium", description: "2세기에 건설된 30,000석 규모의 로마 경기장. 크냐즈 알렉산더 거리 지하에서 일부가 노출 전시되어 있습니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "바치코보 수도원", nameEn: "Bachkovo Monastery", description: "불가리아에서 두 번째로 큰 정교회 수도원. 11세기 설립으로 아름다운 프레스코화가 있습니다.", travelTime: "버스 약 30분", gradient: "from-emerald-500 to-green-800" },
      { name: "장미 계곡", nameEn: "Rose Valley (Kazanlak)", description: "세계 최대 장미 오일 생산지. 5~6월 장미 축제 시즌에 방문하면 장미꽃밭을 체험할 수 있습니다.", travelTime: "차량 약 1.5시간", gradient: "from-pink-400 to-rose-700" },
    ],
    localFood: [
      { name: "쇼프스카 샐러드", description: "토마토, 오이, 피망에 시레네(화이트 치즈)를 듬뿍 갈아 얹은 국민 샐러드.", emoji: "🥗" },
      { name: "카바르마", description: "돼지고기와 채소를 테라코타 냄비에서 구운 전통 스튜 요리.", emoji: "🍖" },
      { name: "메체나 라키야", description: "꿀을 넣어 숙성시킨 과일 브랜디. 불가리아의 대표 전통주.", emoji: "🍯" },
      { name: "불가리아 요거트", description: "락토바실루스 불가리쿠스로 만든 세계 최고의 요거트.", emoji: "🥛" },
    ],
    tips: [
      "플로브디프는 소피아에서 기차로 약 2시간, 당일치기 또는 1~2박이 적당합니다.",
      "카파나 지구의 스트리트 아트는 인스타그램 포토스팟으로 인기입니다.",
      "로마 원형극장에서 여름 저녁 공연을 관람하는 것은 잊지 못할 경험입니다.",
      "구시가지 언덕은 자갈길이 가파르므로 편한 신발이 필수입니다.",
      "플로브디프의 물가는 소피아보다도 저렴하여 유럽에서 가장 경제적인 여행지 중 하나입니다.",
    ],
  },
};

export const bulgariaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== ALEXANDER NEVSKY CATHEDRAL =====
  "bulgaria/sofia-central/sofia/alexander-nevsky-cathedral": {
    heroGradient: "from-blue-600 to-indigo-900",
    description: "유럽 최대 정교회 성당 중 하나이자 소피아의 상징. 1882~1912년에 건축된 네오비잔틴 양식의 대성당으로, 45m 높이의 황금 돔이 소피아 스카이라인을 지배합니다. 5,000명을 수용할 수 있으며 내부의 이탈리아 대리석, 브라질 오닉스, 알라바스터 장식이 압권입니다.",
    history: "1877~1878년 러시아-터키 전쟁에서 불가리아를 해방시킨 러시아 군인들에게 감사하는 마음으로 건축되었습니다. 13세기 러시아 영웅 알렉산더 네프스키의 이름을 딴 것입니다.",
    visitInfo: { hours: "07:00~19:00 (연중무휴)", admission: "무료 (지하 크립트 별도 10 BGN)", address: "pl. Sveti Aleksandar Nevski, Sofia 1000", website: "https://www.cathedral.bg" },
    highlights: ["45m 높이의 황금 돔과 12개의 종", "내부 대리석·오닉스·알라바스터 장식", "지하 크립트의 불가리아 최대 이콘 컬렉션", "광장의 벼룩시장 (이콘·골동품)"],
    nearbyAttractions: ["성 소피아 교회", "대통령궁 & 성 게오르기 원형교회", "의회 광장", "러시아 교회"],
    photoTips: "대성당 정면 광장에서 황금 돔을 배경으로 찍는 것이 정석입니다. 일몰 시 돔에 황금빛이 더해져 장관을 이룹니다.",
    tips: [
      "내부 사진 촬영은 금지이지만 외부는 자유입니다.",
      "지하 크립트의 이콘 컬렉션(별도 입장료)은 불가리아 중세 미술의 보고입니다.",
      "주말 오전에 광장에서 열리는 벼룩시장에서 옛 이콘과 골동품을 구경할 수 있습니다.",
      "일요일 오전 미사 시 내부가 가장 장엄하며 성가대 합창을 들을 수 있습니다.",
    ],
  },
  // ===== RILA MONASTERY =====
  "bulgaria/sofia-central/rila-monastery/rila-monastery": {
    heroGradient: "from-emerald-600 to-green-900",
    description: "10세기에 설립된 발칸 반도 최대의 동방정교회 수도원. 릴라 산맥 해발 1,147m에 자리하고 있으며, 1983년 유네스코 세계유산에 등재되었습니다. 교회 외벽과 회랑을 뒤덮은 1,200여 개의 프레스코화가 불가리아 미술의 정수를 보여줍니다.",
    history: "10세기 은둔 수도사 성 이반 릴스키(Ivan of Rila)가 산속에서 수행을 시작한 것이 기원입니다. 오스만 지배 500년간 불가리아 문화와 정체성을 보존한 영적 요람으로, 불가리아인에게 가장 성스러운 장소입니다.",
    visitInfo: { hours: "06:00~20:00 (연중무휴)", admission: "무료 (박물관 8 BGN, 후렐료 탑 5 BGN)", address: "Rila Monastery, 2643 Rila, Bulgaria", website: "https://www.rilamonastery.pmg-blg.com" },
    highlights: ["1,200여 개의 프레스코화 (천국과 지옥 묘사)", "라파엘 수도사의 미니어처 십자가 (104개 장면/1.5cm)", "후렐료 탑 (1335년, 수도원 최고(最古) 건축물)", "성 이반 릴스키 유해가 안치된 교회"],
    nearbyAttractions: ["릴라 7대 호수", "릴라 산맥 하이킹", "스토브 수도원"],
    photoTips: "수도원 안뜰에서 올려다보는 프레스코화 회랑과 후렐료 탑, 교회 돔의 조합이 최고의 앵글입니다.",
    tips: [
      "소피아에서 버스로 약 2시간. 당일치기 가능하지만 1박 추천.",
      "수도원 숙소(독실, 1박 약 30~50 BGN)에서 새벽 미사의 종소리를 경험해보세요.",
      "내부 교회는 사진 촬영 금지이지만, 외부 회랑 프레스코화는 촬영 가능합니다.",
      "겨울에는 접근 도로가 눈으로 막힐 수 있으므로 사전 도로 상황을 확인하세요.",
      "수도원 박물관의 라파엘 십자가는 반드시 봐야 할 걸작입니다.",
    ],
  },
  // ===== ROMAN THEATRE (PLOVDIV) =====
  "bulgaria/plovdiv-thrace/plovdiv/ancient-roman-theatre": {
    heroGradient: "from-amber-500 to-orange-800",
    description: "2세기 트라야누스 황제 시대에 건설된 7,000석 규모의 로마 원형극장. 플로브디프 구시가지 언덕 중턱에 위치하며, 무대 너머로 로도피 산맥이 펼쳐지는 절경을 배경으로 현재도 오페라, 콘서트, 연극이 공연됩니다.",
    history: "2세기 로마 제국 시대에 건설되어 검투사 경기와 연극이 열렸습니다. 1972년 우연히 발견되어 복원되었으며, 현재 불가리아에서 가장 잘 보존된 로마 유적 중 하나입니다.",
    visitInfo: { hours: "09:00~18:00 (4~10월) / 09:00~17:00 (11~3월)", admission: "5 BGN (약 $3)", address: "ul. Hemus 4, Plovdiv 4000" },
    highlights: ["7,000석 규모의 반원형 관람석", "로도피 산맥을 배경으로 한 무대", "여름 오페라·콘서트 공연", "로마 시대 대리석 좌석과 조각"],
    nearbyAttractions: ["플로브디프 구시가지", "에트노그래프 박물관", "히사르 카피아(동쪽 문)", "네벳 테페"],
    photoTips: "관람석 상단에서 무대와 로도피 산맥을 함께 담는 파노라마 앵글이 최고입니다.",
    tips: [
      "여름 저녁 공연(오페라, 클래식)은 고대 극장에서의 잊지 못할 경험입니다. 사전 예매 추천.",
      "구시가지 탐방 중 자연스럽게 방문할 수 있으며 관람 시간은 약 30분입니다.",
      "입장료가 매우 저렴하므로(약 $3) 반드시 들러보세요.",
      "공연이 있는 날 저녁에는 일반 관람이 제한될 수 있으니 사전 확인이 필요합니다.",
    ],
  },
};
