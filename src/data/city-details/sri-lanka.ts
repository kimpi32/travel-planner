import type { CityDetail, AttractionDetail } from "../city-details";

export const sriLankaCityDetails: Record<string, CityDetail> = {
  // ===== COLOMBO =====
  "sri-lanka/colombo-west/colombo": {
    heroGradient: "from-emerald-500 to-teal-800",
    description:
      "인도양에 면한 스리랑카의 경제 수도이자 최대 도시. 포르투갈, 네덜란드, 영국 식민 시대의 건축물과 불교 사원, 힌두 사원, 모스크가 공존하는 다문화 도시. 콜롬보 포트에서 갈레 페이스 그린까지 해안 산책로가 이어지며, 활기찬 페타 시장은 현지 생활을 엿볼 수 있는 곳.",
    bestTime: "11~4월 (서부 해안 건기)",
    stayArea: "콜롬보 7 (시나몬 가든) / 갈레 페이스 주변",
    transport: "투크투크, 택시, 시내버스, 트라이시클",
    districts: [
      {
        name: "콜롬보 포트",
        nameEn: "Colombo Fort",
        description:
          "식민 시대 건축물이 밀집한 비즈니스 중심 지구. 올드 더치 병원, 라이트하우스 시계탑이 위치.",
        highlights: ["올드 더치 병원", "라이트하우스 시계탑", "세계무역센터"],
      },
      {
        name: "페타",
        nameEn: "Pettah",
        description:
          "콜롬보에서 가장 활기찬 재래시장 지구. 향신료, 직물, 전자제품 등 다양한 상점이 좁은 골목에 빼곡히 들어서 있음.",
        highlights: ["페타 시장", "자미 울 알파르 모스크", "더치 시대 박물관"],
      },
      {
        name: "갈레 페이스",
        nameEn: "Galle Face",
        description:
          "인도양을 따라 펼쳐진 넓은 잔디 해안 공원. 석양 무렵 현지인과 관광객으로 가득 차는 콜롬보의 대표적 휴식 공간.",
        highlights: ["갈레 페이스 그린", "석양 관람", "길거리 음식 노점"],
      },
    ],
    attractions: [
      {
        name: "간가라마야 사원",
        nameEn: "Gangaramaya Temple",
        description:
          "스리랑카, 태국, 인도, 중국 등 다양한 아시아 불교 양식이 혼합된 독특한 사원. 박물관급 소장품이 가득하며, 매년 2월 나밤 페라헤라 축제의 출발점.",
        category: "사원",
        tip: "베이라 호수에 떠 있는 시마 말라카야(명상 홀)도 함께 방문하세요.",
      },
      {
        name: "페타 시장",
        nameEn: "Pettah Market",
        description:
          "콜롬보에서 가장 크고 활기찬 재래시장. 향신료, 직물, 보석, 전자제품 등이 거리별로 전문화되어 있어 현지 생활을 생생하게 체험할 수 있음.",
        category: "시장",
        tip: "오전에 방문하면 덜 혼잡하고 상인들과 흥정하기 좋습니다.",
      },
      {
        name: "갈레 페이스 그린",
        nameEn: "Galle Face Green",
        description:
          "인도양을 따라 펼쳐진 5헥타르의 해안 공원. 석양 무렵 연날리기와 크리켓을 즐기는 현지인들과 길거리 음식 노점이 활기를 띰.",
        category: "공원",
      },
      {
        name: "콜롬보 국립박물관",
        nameEn: "National Museum of Colombo",
        description:
          "1877년 개관한 스리랑카 최대 박물관. 싱할라 왕조의 보물, 고대 불교 조각, 식민 시대 유물 등 스리랑카 역사 전반을 아우르는 소장품.",
        category: "박물관",
        tip: "캔디 왕국의 왕관과 왕좌가 주요 하이라이트입니다.",
      },
    ],
    dayTrips: [
      {
        name: "네곰보",
        nameEn: "Negombo",
        description:
          "콜롬보 북쪽의 어촌 마을. 네곰보 라군과 어시장이 유명.",
        travelTime: "버스 약 1시간 30분",
        gradient: "from-sky-400 to-blue-700",
      },
      {
        name: "갈레",
        nameEn: "Galle",
        description:
          "남쪽 해안의 유네스코 세계유산 요새 도시. 네덜란드 식민 시대 건축물이 인상적.",
        travelTime: "기차 약 2시간 30분 (해안 열차)",
        gradient: "from-amber-500 to-orange-700",
      },
    ],
    localFood: [
      {
        name: "코투로티",
        description:
          "로티 빵을 잘게 다져 채소, 고기, 향신료와 함께 볶은 스리랑카 대표 길거리 음식.",
        emoji: "🫓",
      },
      {
        name: "호퍼(아파)",
        description:
          "쌀가루와 코코넛 밀크로 만든 그릇 모양의 크레이프. 계란을 올린 에그 호퍼가 인기.",
        emoji: "🥚",
      },
      {
        name: "라이스 & 커리",
        description:
          "밥에 5~6가지 커리와 삼볼(매운 양념)을 곁들인 스리랑카의 국민 식사.",
        emoji: "🍛",
      },
    ],
    tips: [
      "투크투크 이용 시 반드시 미터기 사용을 요구하거나 사전 가격 흥정을 하세요.",
      "갈레 페이스 그린에서 석양 시간에 길거리 음식을 즐기는 것이 콜롬보 필수 코스입니다.",
      "페타 시장은 일요일에 대부분 휴업하니 평일에 방문하세요.",
      "콜롬보에서 갈레까지 해안 열차는 스리랑카에서 가장 아름다운 기차 구간입니다.",
    ],
  },

  // ===== NEGOMBO =====
  "sri-lanka/colombo-west/negombo": {
    heroGradient: "from-sky-400 to-blue-700",
    description:
      "반다라나이케 국제공항에서 가장 가까운 해안 마을로 스리랑카 여행의 첫 번째 또는 마지막 경유지. 네곰보 라군에서 어부들이 전통 카타마란 보트로 고기잡이하는 풍경이 인상적이며, 네덜란드 운하, 가톨릭 교회 등 독특한 문화가 공존합니다.",
    bestTime: "11~4월 (서부 해안 건기)",
    stayArea: "비치 로드 / 루이스 플레이스 주변",
    transport: "공항에서 택시 약 20분, 콜롬보에서 버스 약 1시간 30분",
    districts: [
      {
        name: "비치 로드",
        nameEn: "Beach Road",
        description:
          "네곰보 해변을 따라 호텔과 레스토랑이 늘어선 주요 관광 지역.",
        highlights: ["네곰보 해변", "해산물 레스토랑", "서핑 포인트"],
      },
      {
        name: "네곰보 타운",
        nameEn: "Negombo Town",
        description:
          "어시장, 네덜란드 운하, 가톨릭 교회가 밀집한 현지인 생활 지구.",
        highlights: ["네곰보 어시장", "네덜란드 운하", "성 마리아 교회"],
      },
    ],
    attractions: [
      {
        name: "네곰보 어시장",
        nameEn: "Negombo Fish Market",
        description:
          "매일 새벽부터 활기를 띠는 대규모 어시장. 참치, 새우, 오징어 등을 경매하는 장면이 인상적. 아침 일찍 방문해야 활기찬 모습을 볼 수 있음.",
        category: "시장",
        tip: "새벽 6시 이전에 방문해야 경매와 건조 작업을 볼 수 있습니다.",
      },
      {
        name: "네덜란드 운하",
        nameEn: "Dutch Canal",
        description:
          "네덜란드 식민 시대에 건설된 운하. 보트를 타고 맹그로브 숲과 현지 생활을 감상하는 투어가 인기.",
        category: "역사",
        tip: "보트 투어는 약 2시간 소요되며 이른 아침에 새들이 가장 활발합니다.",
      },
      {
        name: "네곰보 라군",
        nameEn: "Negombo Lagoon",
        description:
          "전통 카타마란 보트가 오가는 거대한 라군. 새벽 어부들의 출항 장면과 석양이 아름다움.",
        category: "자연",
      },
    ],
    dayTrips: [
      {
        name: "콜롬보",
        nameEn: "Colombo",
        description:
          "스리랑카의 경제 수도. 간가라마야 사원, 페타 시장 등 볼거리가 풍부.",
        travelTime: "버스 약 1시간 30분",
        gradient: "from-emerald-500 to-teal-800",
      },
    ],
    localFood: [
      {
        name: "해산물 플래터",
        description:
          "네곰보 해변 레스토랑에서 즐기는 신선한 새우, 게, 생선 구이 모둠.",
        emoji: "🦐",
      },
      {
        name: "피시 커리",
        description:
          "코코넛 밀크, 고춧가루, 카레 잎으로 맛을 낸 스리랑카식 생선 커리.",
        emoji: "🐟",
      },
    ],
    tips: [
      "공항과 가까워 도착 당일이나 출발 전날 숙박지로 적합합니다.",
      "해변은 파도가 셀 수 있으니 수영 시 주의하세요.",
      "어시장은 냄새가 강하니 민감한 분은 마스크를 챙기세요.",
    ],
  },

  // ===== SIGIRIYA =====
  "sri-lanka/cultural-triangle/sigiriya": {
    heroGradient: "from-orange-500 to-red-700",
    description:
      "5세기 카샤파 왕이 거대한 바위산(해발 370m) 꼭대기에 건설한 공중 궁전 유적. '사자의 바위'라는 뜻의 시기리야는 유네스코 세계유산으로, 바위에 그려진 프레스코 벽화 '시기리야 아가씨들'과 거울 벽, 정교한 물의 정원이 고대 스리랑카 문명의 놀라운 수준을 보여줍니다.",
    bestTime: "1~4월, 7~9월 (건기)",
    stayArea: "시기리야 마을 / 담불라 주변",
    transport: "담불라에서 버스 약 45분, 콜롬보에서 버스 약 5시간",
    districts: [
      {
        name: "시기리야 유적 단지",
        nameEn: "Sigiriya Heritage Site",
        description:
          "시기리야 바위와 물의 정원, 볼더 정원, 테라스 정원을 포함하는 유네스코 세계유산 단지.",
        highlights: ["시기리야 록 포트리스", "물의 정원", "시기리야 프레스코"],
      },
    ],
    attractions: [
      {
        name: "시기리야 록 포트리스",
        nameEn: "Sigiriya Rock Fortress",
        description:
          "해발 370m의 거대한 바위 꼭대기에 세워진 5세기 공중 궁전. 1,200개의 계단을 올라 정상에 서면 스리랑카 중부 밀림의 끝없는 지평선이 펼쳐집니다. 유네스코 세계유산.",
        category: "유적",
        tip: "오전 일찍(7시 개장) 방문하면 더위를 피하고 관광객이 적어 여유롭게 올라갈 수 있습니다.",
      },
      {
        name: "피두랑갈라 바위",
        nameEn: "Pidurangala Rock",
        description:
          "시기리야 바위 전체를 조망할 수 있는 인근의 바위산. 일출 명소로 인기.",
        category: "자연",
        tip: "일출을 보려면 새벽 5시경 등반을 시작하세요. 헤드랜턴 필수.",
      },
      {
        name: "시기리야 박물관",
        nameEn: "Sigiriya Museum",
        description:
          "시기리야 유적지 입구에 위치한 박물관. 프레스코 복제본과 발굴 유물, 궁전 복원 모형을 전시.",
        category: "박물관",
      },
    ],
    dayTrips: [
      {
        name: "담불라",
        nameEn: "Dambulla",
        description:
          "2,000년 역사의 황금 석굴 사원이 있는 문화 삼각지대의 거점 도시.",
        travelTime: "버스 약 45분",
        gradient: "from-yellow-500 to-amber-700",
      },
      {
        name: "폴론나루와",
        nameEn: "Polonnaruwa",
        description:
          "10~12세기 싱할라 왕국의 두 번째 수도. 유네스코 세계유산.",
        travelTime: "버스 약 2시간",
        gradient: "from-stone-500 to-stone-800",
      },
    ],
    localFood: [
      {
        name: "코투로티",
        description:
          "잘게 다진 로티에 채소와 향신료를 볶은 스리랑카 대표 요리.",
        emoji: "🫓",
      },
      {
        name: "킹 코코넛",
        description:
          "스리랑카 특산의 황금색 코코넛 워터. 더운 날 갈증 해소에 최고.",
        emoji: "🥥",
      },
    ],
    tips: [
      "1,200계단 등반에 약 1시간 30분~2시간 소요. 충분한 물을 준비하세요.",
      "말벌 군락지가 있어 향수와 밝은 색 옷은 피하는 것이 좋습니다.",
      "피두랑갈라 바위에서 일출 시 시기리야 전체를 조망하는 사진을 찍을 수 있습니다.",
      "입장료가 비싼 편(USD 30)이니 충분한 시간을 두고 방문하세요.",
    ],
  },

  // ===== KANDY =====
  "sri-lanka/cultural-triangle/kandy": {
    heroGradient: "from-green-600 to-emerald-800",
    description:
      "스리랑카 중부 고원(해발 500m)에 자리한 마지막 싱할라 왕국의 수도. 부처의 치아 사리를 모신 불치사(Temple of the Tooth)가 캔디 호수 옆에 자리하며, 매년 7~8월 에살라 페라헤라 축제 때 화려한 코끼리 행렬이 이어집니다. 유네스코 세계유산.",
    bestTime: "1~4월 (건기), 7~8월 (에살라 페라헤라 축제)",
    stayArea: "캔디 호수 주변 / 페라데니야 방면",
    transport: "콜롬보에서 기차 약 3시간 (경치 좋은 기차 노선), 버스 약 3시간 30분",
    districts: [
      {
        name: "캔디 시내",
        nameEn: "Kandy City Center",
        description:
          "불치사와 캔디 호수를 중심으로 한 역사 지구. 시장, 상점, 식당이 밀집.",
        highlights: ["불치사", "캔디 호수", "캔디 시장"],
      },
      {
        name: "페라데니야",
        nameEn: "Peradeniya",
        description:
          "캔디 외곽의 왕립 식물원이 있는 지역. 다양한 열대 식물과 거대한 나무들이 인상적.",
        highlights: ["왕립 식물원", "마하웰리 강", "페라데니야 대학교"],
      },
    ],
    attractions: [
      {
        name: "불치사",
        nameEn: "Temple of the Tooth",
        description:
          "부처의 치아 사리를 모신 스리랑카 불교 최고의 성지. 유네스코 세계유산인 캔디 시의 핵심. 매일 세 차례 사리함 공개 의식(푸자)이 진행됩니다.",
        category: "사원",
        tip: "하얀 옷을 입으면 현지 분위기에 어울리며, 어깨와 무릎을 가리는 복장이 필수입니다.",
      },
      {
        name: "캔디 호수",
        nameEn: "Kandy Lake",
        description:
          "마지막 캔디 왕 스리 위크라마 라자싱헤가 1807년 조성한 인공 호수. 불치사와 함께 캔디의 상징적 풍경을 만듦.",
        category: "자연",
      },
      {
        name: "왕립 식물원",
        nameEn: "Royal Botanical Garden",
        description:
          "1821년 설립된 아시아 최고의 식물원(60헥타르). 4,000종 이상의 식물, 거대한 자바 무화과나무, 난초관이 유명.",
        category: "정원",
        tip: "넓으니 최소 2시간은 할애하세요. 난초관은 오전에 꽃이 가장 활짝 핍니다.",
      },
      {
        name: "캔디 문화 공연",
        nameEn: "Kandy Cultural Show",
        description:
          "전통 캔디안 댄스, 불쇼, 드럼 공연을 한 시간 동안 선보이는 문화 체험 프로그램.",
        category: "공연",
        tip: "매일 오후 5시 캔디 호수 옆 공연장에서 열립니다. 사전 도착 추천.",
      },
    ],
    dayTrips: [
      {
        name: "시기리야",
        nameEn: "Sigiriya",
        description:
          "5세기 공중 궁전 유적이 있는 거대한 바위산. 유네스코 세계유산.",
        travelTime: "차량 약 2시간 30분",
        gradient: "from-orange-500 to-red-700",
      },
      {
        name: "누와라 엘리야",
        nameEn: "Nuwara Eliya",
        description:
          "해발 1,868m '작은 영국'으로 불리는 차밭의 고원 도시.",
        travelTime: "기차 약 3시간 (세계에서 가장 아름다운 기차 구간)",
        gradient: "from-green-400 to-emerald-700",
      },
    ],
    localFood: [
      {
        name: "밀크 라이스",
        description:
          "코코넛 밀크로 지은 밥에 삼볼(매운 양념)을 곁들인 축일 음식.",
        emoji: "🍚",
      },
      {
        name: "스트링 호퍼",
        description:
          "쌀가루로 만든 가느다란 국수를 둥글게 찐 요리. 커리와 함께 먹음.",
        emoji: "🍜",
      },
      {
        name: "세이론 티",
        description:
          "캔디 주변 고원에서 재배한 세계적으로 유명한 세이론 홍차.",
        emoji: "🍵",
      },
    ],
    tips: [
      "불치사 방문 시 어깨와 무릎을 가리는 복장이 필수이며, 신발은 벗어야 합니다.",
      "콜롬보~캔디 기차는 경치가 아름답고 1등석 예약을 추천합니다.",
      "에살라 페라헤라 축제(7~8월) 기간에는 숙소를 최소 1개월 전에 예약하세요.",
      "캔디~누와라 엘리야 기차 구간은 세계에서 가장 아름다운 기차 여행 중 하나입니다.",
    ],
  },

  // ===== DAMBULLA =====
  "sri-lanka/cultural-triangle/dambulla": {
    heroGradient: "from-yellow-500 to-amber-700",
    description:
      "2,000년 이상의 역사를 지닌 황금 석굴 사원이 있는 문화 삼각지대의 중심 도시. 해발 160m 바위산 내부에 5개의 석굴이 있으며, 153개의 불상과 천장 가득 그려진 벽화가 유네스코 세계유산으로 지정되어 있습니다.",
    bestTime: "1~4월, 7~9월 (건기)",
    stayArea: "담불라 시내 / 시기리야 방면",
    transport: "캔디에서 버스 약 2시간, 콜롬보에서 버스 약 4시간 30분",
    districts: [
      {
        name: "석굴 사원 지구",
        nameEn: "Cave Temple Area",
        description:
          "담불라 석굴 사원과 황금 불탑이 있는 바위산 일대. 계단을 올라 석굴에 도달.",
        highlights: ["담불라 석굴 사원", "황금 불탑", "정상 전망대"],
      },
    ],
    attractions: [
      {
        name: "담불라 석굴 사원",
        nameEn: "Dambulla Cave Temple",
        description:
          "기원전 1세기부터 조성된 5개의 석굴 사원. 153개의 불상과 2,100㎡의 천장 벽화가 있는 스리랑카 최대의 석굴 사원. 유네스코 세계유산.",
        category: "사원",
        tip: "석굴 입구에서 신발을 벗어야 하니 바닥이 뜨거울 수 있는 한낮은 피하세요.",
      },
      {
        name: "담불라 채소·과일 시장",
        nameEn: "Dambulla Wholesale Market",
        description:
          "스리랑카 최대의 채소·과일 도매시장. 새벽부터 활기를 띠며 현지 생활을 엿볼 수 있는 곳.",
        category: "시장",
      },
      {
        name: "담불라 황금 사원",
        nameEn: "Golden Temple of Dambulla",
        description:
          "바위산 입구에 세워진 거대한 황금 불상과 현대식 사원 건물. 석굴 사원과는 별개의 시설.",
        category: "사원",
        tip: "석굴 사원으로 올라가는 길 입구에 있어 먼저 들러보세요.",
      },
    ],
    dayTrips: [
      {
        name: "시기리야",
        nameEn: "Sigiriya",
        description:
          "5세기 바위산 위의 공중 궁전 유적. 유네스코 세계유산.",
        travelTime: "버스 약 45분",
        gradient: "from-orange-500 to-red-700",
      },
      {
        name: "캔디",
        nameEn: "Kandy",
        description:
          "부처의 치아 사리를 모신 불치사가 있는 마지막 싱할라 왕국의 수도.",
        travelTime: "버스 약 2시간",
        gradient: "from-green-600 to-emerald-800",
      },
    ],
    localFood: [
      {
        name: "우드 애플 주스",
        description:
          "담불라 인근에서 자생하는 우드 애플로 만든 새콤달콤한 음료.",
        emoji: "🍹",
      },
      {
        name: "커드 & 트리클",
        description:
          "물소 요거트에 팜 시럽(키툴 꿀)을 뿌린 스리랑카식 디저트.",
        emoji: "🍯",
      },
    ],
    tips: [
      "석굴 사원까지 계단을 약 15~20분 올라야 하니 편한 신발과 물을 준비하세요.",
      "신발을 벗어야 하므로 한낮에는 바닥이 뜨겁습니다. 오전이나 오후 늦게 방문 추천.",
      "원숭이가 많으니 음식물과 소지품을 잘 관리하세요.",
      "시기리야와 함께 당일 코스로 묶어 방문하기 좋습니다.",
    ],
  },

  // ===== GALLE =====
  "sri-lanka/south-coast/galle": {
    heroGradient: "from-amber-500 to-orange-700",
    description:
      "스리랑카 남쪽 해안의 유네스코 세계유산 요새 도시. 16세기 포르투갈이 건설하고 17세기 네덜란드가 확장한 갈레 포트는 동남아시아에 현존하는 가장 잘 보존된 유럽 요새. 성벽 위에서 바라보는 인도양 일몰이 장관이며, 성벽 안쪽에는 부티크 호텔, 카페, 갤러리가 들어선 세련된 분위기.",
    bestTime: "11~4월 (남부 해안 건기)",
    stayArea: "갈레 포트 내부 / 운나와투나 해변",
    transport: "콜롬보에서 기차 약 2시간 30분 (해안 열차), 고속도로 버스 약 2시간",
    districts: [
      {
        name: "갈레 포트",
        nameEn: "Galle Fort",
        description:
          "유네스코 세계유산인 네덜란드 식민 시대 요새. 성벽 안에 부티크 호텔, 카페, 갤러리가 밀집.",
        highlights: ["성벽 산책로", "등대", "더치 교회", "역사 박물관"],
      },
      {
        name: "운나와투나",
        nameEn: "Unawatuna",
        description:
          "갈레 근처의 아름다운 해변 마을. 수영, 스노클링, 다이빙에 적합한 만(灣)형 해변.",
        highlights: ["운나와투나 비치", "일본 평화 탑", "정글 비치"],
      },
    ],
    attractions: [
      {
        name: "갈레 포트",
        nameEn: "Galle Fort",
        description:
          "1588년 포르투갈이 건설하고 1649년 네덜란드가 대대적으로 확장한 요새. 동남아시아에 현존하는 가장 잘 보존된 유럽 요새로 유네스코 세계유산. 성벽 위 산책과 일몰이 하이라이트.",
        category: "유적",
        tip: "성벽 위에서 바라보는 일몰이 최고입니다. 등대 주변이 인기 일몰 포인트.",
      },
      {
        name: "더치 개혁 교회",
        nameEn: "Dutch Reformed Church",
        description:
          "1755년 건립된 네덜란드 개혁교회. 바닥에 네덜란드 시대 묘비석이 깔린 독특한 내부.",
        category: "교회",
      },
      {
        name: "갈레 등대",
        nameEn: "Galle Lighthouse",
        description:
          "1939년 건립된 하얀 등대. 갈레 포트 남쪽 끝에 서서 인도양을 바라보는 포토 스폿.",
        category: "랜드마크",
      },
      {
        name: "해양박물관",
        nameEn: "Maritime Museum",
        description:
          "네덜란드 식민 시대 창고를 개조한 박물관. 스리랑카 해양 역사와 산호 표본을 전시.",
        category: "박물관",
      },
    ],
    dayTrips: [
      {
        name: "미리싸",
        nameEn: "Mirissa",
        description:
          "고래 관찰 투어와 아름다운 해변으로 유명한 남부 해안 마을.",
        travelTime: "버스 약 40분",
        gradient: "from-blue-400 to-indigo-700",
      },
      {
        name: "콜롬보",
        nameEn: "Colombo",
        description:
          "스리랑카의 경제 수도. 해안 열차로 아름다운 풍경을 감상하며 이동.",
        travelTime: "기차 약 2시간 30분",
        gradient: "from-emerald-500 to-teal-800",
      },
    ],
    localFood: [
      {
        name: "피시 앰불 티얄",
        description:
          "고르카(감빗)와 향신료로 맛을 낸 갈레 지역 특산 생선 커리. 진하고 매콤.",
        emoji: "🐟",
      },
      {
        name: "코코넛 로티",
        description:
          "코코넛 과육을 넣고 구운 납작한 빵. 커리와 삼볼에 곁들여 먹는 남부 스리랑카 주식.",
        emoji: "🫓",
      },
      {
        name: "킹 코코넛",
        description:
          "스리랑카 특산의 주황색 코코넛 워터. 더운 날 성벽 위에서 마시면 최고.",
        emoji: "🥥",
      },
    ],
    tips: [
      "성벽 위 산책은 해질 무렵이 가장 좋습니다. 등대 근처에서 일몰을 감상하세요.",
      "포트 내부 도로는 차량이 다니니 골목 걸을 때 주의하세요.",
      "콜롬보~갈레 해안 열차는 스리랑카 여행의 하이라이트 중 하나입니다.",
      "포트 안쪽 부티크 숍에서 스리랑카 보석과 수공예품을 구입할 수 있습니다.",
    ],
  },

  // ===== MIRISSA =====
  "sri-lanka/south-coast/mirissa": {
    heroGradient: "from-blue-400 to-indigo-700",
    description:
      "스리랑카 남부 해안의 작은 어촌 마을로 대왕고래 관찰 투어와 아름다운 해변으로 유명합니다. 코코넛 야자수가 드리운 초승달 모양의 해변에서 서핑과 스노클링을 즐기고, 시즌(11~4월)에는 인도양에서 대왕고래와 혹등고래를 만날 수 있습니다.",
    bestTime: "11~4월 (건기, 고래 관찰 시즌)",
    stayArea: "미리싸 해변 주변",
    transport: "갈레에서 버스 약 40분, 콜롬보에서 기차+버스 약 3시간 30분",
    districts: [
      {
        name: "미리싸 해변",
        nameEn: "Mirissa Beach",
        description:
          "코코넛 야자수가 드리운 초승달형 해변. 서핑, 스노클링, 해변 바(bar)가 인기.",
        highlights: ["미리싸 비치", "코코넛 트리 힐", "서핑 포인트"],
      },
    ],
    attractions: [
      {
        name: "고래 관찰 투어",
        nameEn: "Whale Watching Tour",
        description:
          "11~4월 시즌에 미리싸 항구에서 출발하여 대왕고래, 혹등고래, 돌고래를 만나는 투어. 운이 좋으면 세계 최대 동물인 대왕고래를 눈앞에서 볼 수 있음.",
        category: "액티비티",
        tip: "멀미약을 미리 복용하세요. 이른 아침 6시경 출발하며 약 4~5시간 소요.",
      },
      {
        name: "코코넛 트리 힐",
        nameEn: "Coconut Tree Hill",
        description:
          "해변 끝 언덕 위에 코코넛 야자수가 줄지어 선 인스타그램 핫스팟. 인도양의 탁 트인 전망.",
        category: "전망대",
      },
      {
        name: "미리싸 해변",
        nameEn: "Mirissa Beach",
        description:
          "초승달 모양의 아름다운 해변으로 수영, 서핑, 스노클링이 가능. 석양 시간의 비치 바 분위기가 매력적.",
        category: "해변",
      },
    ],
    dayTrips: [
      {
        name: "갈레",
        nameEn: "Galle",
        description:
          "유네스코 세계유산인 네덜란드 식민 시대 요새 도시.",
        travelTime: "버스 약 40분",
        gradient: "from-amber-500 to-orange-700",
      },
    ],
    localFood: [
      {
        name: "그릴드 씨푸드",
        description:
          "해변 레스토랑에서 즐기는 당일 잡은 신선한 해산물 그릴 모둠.",
        emoji: "🦞",
      },
      {
        name: "코티아팜 주스",
        description:
          "스리랑카에서 즐겨 마시는 열대 과일 믹스 주스.",
        emoji: "🍹",
      },
    ],
    tips: [
      "고래 관찰 시즌은 11~4월입니다. 1~3월이 목격 확률이 가장 높습니다.",
      "해변 물건 도난에 주의하세요. 귀중품은 숙소에 보관하세요.",
      "서핑 초보자도 레슨을 받을 수 있으며 보드 대여가 가능합니다.",
    ],
  },
};

export const sriLankaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== SIGIRIYA ATTRACTIONS =====
  "sri-lanka/cultural-triangle/sigiriya/sigiriya-rock-fortress": {
    heroGradient: "from-orange-600 to-red-800",
    description:
      "5세기 카샤파 1세가 부왕을 살해하고 동생의 복수를 피해 거대한 화강암 바위(높이 200m) 꼭대기에 건설한 공중 궁전. 1,200개의 계단을 올라 정상에 서면 왕궁 터, 수영장, 정원의 흔적과 함께 스리랑카 중부 밀림의 끝없는 지평선이 펼쳐집니다.",
    history:
      "기원전 3세기부터 불교 수도원으로 사용되었으나, 477년 카샤파 1세가 부왕 다투세나를 살해한 뒤 이곳에 새로운 수도를 건설했습니다. 11년간의 통치 후 동생 모갈라나에게 패해 자결했으며, 이후 다시 수도원으로 사용되었습니다. 1982년 유네스코 세계유산 등재.",
    visitInfo: {
      hours: "07:00~17:30 (연중 개방)",
      admission: "외국인 USD 30 / LKR 약 9,750 (시기리야 박물관 포함)",
      address: "Sigiriya, Matale District",
      website: "https://www.sigiriya.info",
    },
    highlights: [
      "바위 중턱의 프레스코 벽화 '시기리야 아가씨들' (5세기 원작)",
      "글을 새긴 거울 벽(Mirror Wall) - 세계에서 가장 오래된 낙서",
      "사자 발톱 조각이 남아 있는 사자문(Lion Gate) 테라스",
      "정상의 왕궁 터와 수영장, 360도 파노라마 정글 전망",
      "정교한 수리 시스템을 갖춘 물의 정원(Water Garden)",
    ],
    nearbyAttractions: [
      "피두랑갈라 바위 (도보 30분)",
      "시기리야 박물관 (입구, 도보 5분)",
      "담불라 석굴 사원 (버스 45분)",
    ],
    photoTips:
      "시기리야 자체 촬영은 피두랑갈라 바위에서 일출 시간에 찍는 것이 최고입니다. 정상에서는 광각 렌즈로 360도 정글 파노라마를 담으세요.",
    tips: [
      "오전 7시 개장과 동시에 입장하면 더위와 인파를 피할 수 있습니다.",
      "1,200계단 등반에 약 1시간 30분~2시간 소요. 물 1리터 이상 준비.",
      "말벌 구역이 있으므로 향수, 밝은 색 옷, 큰 소리를 피하세요.",
      "프레스코 벽화 촬영은 금지(플래시 없이도 불가)입니다.",
      "신발은 편한 운동화를 착용하세요. 슬리퍼는 위험합니다.",
    ],
  },

  // ===== KANDY ATTRACTIONS =====
  "sri-lanka/cultural-triangle/kandy/temple-of-the-tooth": {
    heroGradient: "from-yellow-600 to-amber-800",
    description:
      "부처의 좌측 송곳니 사리를 모신 스리랑카 불교 최고의 성지. 캔디 호수 옆에 자리한 왕궁 건물 내에 위치하며, 금·상아·보석으로 장식된 사리함이 안치되어 있습니다. 매일 세 차례 푸자(공양 의식)가 열리며 북소리와 함께 사리함이 공개됩니다.",
    history:
      "부처의 치아 사리는 4세기 인도에서 스리랑카로 전해졌으며, 왕권의 정통성을 상징합니다. 현재의 사원 건물은 17~18세기 캔디 왕국 시대에 건립되었습니다. 1998년 LTTE의 폭탄 공격으로 일부 손상되었으나 복원되었습니다.",
    visitInfo: {
      hours: "05:30~20:00 (푸자 시간: 05:30, 09:30, 18:30)",
      admission: "외국인 LKR 2,000",
      address: "Sri Dalada Veediya, Kandy",
      website: "https://sridaladamaligawa.lk",
    },
    highlights: [
      "금·상아·보석으로 장식된 다층 사리함(실제 치아는 비공개)",
      "매일 세 차례 열리는 푸자(공양 의식) - 북과 피리 연주와 함께 사리함 공개",
      "옥타곤(Octagon) - 영국 식민 시대에 추가된 팔각형 왕실 도서관",
      "사원 내부의 정교한 캔디안 양식 벽화와 목조 장식",
    ],
    nearbyAttractions: [
      "캔디 호수 (바로 앞)",
      "캔디 문화 공연장 (도보 5분)",
      "캔디 시장 (도보 10분)",
    ],
    photoTips:
      "사원 내부는 촬영이 가능하지만 플래시 사용은 금지입니다. 캔디 호수 건너편에서 사원 전경과 호수를 함께 담는 구도가 좋습니다.",
    tips: [
      "어깨와 무릎을 가리는 흰색 또는 밝은 색 복장이 좋습니다. 반바지/민소매 불가.",
      "신발은 입구에서 벗어야 합니다. 양말을 신어가면 바닥이 뜨겁지 않습니다.",
      "18:30 저녁 푸자 시간이 가장 분위기 있고 북소리가 장엄합니다.",
      "주말과 보름달 날(포야데이)에는 현지 순례자가 매우 많으니 평일 방문 추천.",
    ],
  },

  // ===== GALLE ATTRACTIONS =====
  "sri-lanka/south-coast/galle/galle-fort": {
    heroGradient: "from-amber-500 to-orange-800",
    description:
      "1588년 포르투갈이 처음 건설하고 1649년 네덜란드 동인도회사(VOC)가 대대적으로 확장한 해안 요새. 동남아시아에 현존하는 가장 잘 보존된 유럽 식민지 요새로, 인도양을 향해 돌출된 반도 전체를 성벽이 둘러싸고 있습니다.",
    history:
      "1505년 포르투갈 선원들이 처음 도착한 이래 1588년 요새를 건설했습니다. 1640년 네덜란드가 점령 후 현재의 규모로 확장했으며, 1796년 영국이 인수했습니다. 2004년 쓰나미에도 성벽 안쪽은 피해가 적어 요새의 견고함이 입증되었습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 요새)",
      admission: "무료 (개별 시설 요금 별도)",
      address: "Galle Fort, Galle",
    },
    highlights: [
      "성벽 위를 걸으며 바라보는 인도양 일몰",
      "하얀 갈레 등대와 포인트 우트레흐트 요새",
      "네덜란드 개혁교회와 바닥의 식민 시대 묘비석",
      "성벽 안쪽의 세련된 부티크 호텔, 카페, 갤러리 골목",
      "플래그 록(Flag Rock)에서 현지 소년들의 다이빙 구경",
    ],
    nearbyAttractions: [
      "운나와투나 비치 (투크투크 10분)",
      "정글 비치 (투크투크 15분)",
      "일본 평화 탑 (투크투크 10분)",
    ],
    photoTips:
      "등대 근처에서 일몰을 배경으로 촬영하는 것이 가장 인기 있는 구도입니다. 성벽 위에서 아래 파도를 내려다보는 앵글도 인상적.",
    tips: [
      "성벽 산책은 해질 무렵이 최적입니다. 약 1시간이면 전체를 돌 수 있습니다.",
      "포트 내부 도로에 차량이 다니니 좁은 골목에서 주의하세요.",
      "보석 가게가 많지만 가품도 있으니 신뢰할 수 있는 곳에서 구입하세요.",
      "콜롬보~갈레 해안 열차는 스리랑카 여행 하이라이트이니 편도는 꼭 기차로!",
    ],
  },

  // ===== COLOMBO ATTRACTIONS =====
  "sri-lanka/colombo-west/colombo/gangaramaya-temple": {
    heroGradient: "from-yellow-500 to-orange-700",
    description:
      "19세기 후반에 건립된 콜롬보의 대표적 불교 사원. 스리랑카, 태국, 인도, 중국, 일본 등 다양한 아시아 불교 양식이 혼합된 독특한 건축이 특징이며, 박물관급의 방대한 소장품(불상, 보석, 골동품)이 가득합니다.",
    history:
      "19세기 후반 히카두웨 스리 수망갈라 나야카 테로 스님이 작은 숲 속 암자에서 시작하여 현재의 거대한 사원 복합 단지로 발전시켰습니다. 매년 2월 보름(나밤 포야데이)에 열리는 나밤 페라헤라 축제는 콜롬보 최대의 불교 행사입니다.",
    visitInfo: {
      hours: "06:00~22:00 (연중 개방)",
      admission: "외국인 LKR 500",
      address: "61 Sri Jinarathana Road, Colombo 02",
      website: "https://gangaramaya.com",
    },
    highlights: [
      "다양한 아시아 불교 양식이 혼합된 독특한 건축 양식",
      "수천 점의 불상, 보석, 골동품이 가득한 박물관급 소장품",
      "베이라 호수 위에 떠 있는 시마 말라카야(명상 홀) - 제프리 바와 설계",
      "매년 2월 나밤 페라헤라 축제의 출발점",
    ],
    nearbyAttractions: [
      "시마 말라카야 (도보 5분)",
      "베이라 호수 (도보 3분)",
      "갈레 페이스 그린 (도보 15분)",
    ],
    photoTips:
      "사원 내부의 다양한 불상 컬렉션과 정교한 장식이 인상적입니다. 시마 말라카야는 석양 시간에 베이라 호수에 반영되는 모습이 아름답습니다.",
    tips: [
      "어깨와 무릎을 가리는 복장이 필수입니다.",
      "신발은 입구에서 벗어야 합니다.",
      "시마 말라카야(베이라 호수 명상 홀)는 별도로 방문해야 하니 놓치지 마세요.",
      "2월 나밤 페라헤라 축제 기간에는 화려한 코끼리 행렬을 볼 수 있습니다.",
    ],
  },

  "sri-lanka/colombo-west/colombo/pettah-market": {
    heroGradient: "from-red-500 to-rose-800",
    description:
      "콜롬보에서 가장 크고 오래된 재래시장. 좁은 골목마다 향신료, 직물, 보석, 전자제품, 과일 등 전문 거리가 형성되어 있으며, 싱할라, 타밀, 무슬림 상인들이 어우러져 스리랑카의 다문화적 면모를 생생하게 보여줍니다.",
    history:
      "네덜란드 식민 시대(17세기)부터 상업 중심지로 발전했으며, 포르투갈어 '페타(입구)'에서 이름이 유래했습니다. 콜롬보 포트 바로 옆에 위치하여 항구를 통한 무역의 중심지였습니다.",
    visitInfo: {
      hours: "월~토 08:00~18:00 (일요일 대부분 휴업)",
      admission: "무료 (공개 시장)",
      address: "Pettah, Colombo 11",
    },
    highlights: [
      "거리별로 전문화된 상점 구역 (향신료 거리, 직물 거리, 전자 거리)",
      "빨간색과 흰색 줄무늬의 자미 울 알파르 모스크 (포토 스폿)",
      "세인트 앤서니 교회와 힌두 사원이 공존하는 다종교 풍경",
      "신선한 열대 과일과 향신료를 저렴하게 구입",
    ],
    nearbyAttractions: [
      "콜롬보 포트 (도보 5분)",
      "올드 더치 병원 (도보 10분)",
      "간가라마야 사원 (도보 20분)",
    ],
    photoTips:
      "자미 울 알파르 모스크의 빨간색-흰색 줄무늬 외관이 가장 유명한 포토 스폿입니다. 시장 골목의 활기찬 분위기도 좋은 피사체.",
    tips: [
      "일요일에는 대부분 문을 닫으니 평일 오전에 방문하세요.",
      "소매치기에 주의하고 귀중품은 호텔에 보관하세요.",
      "가격 흥정은 필수입니다. 처음 제시 가격의 절반 정도에서 시작하세요.",
      "더운 날씨에 걷는 시간이 길어지므로 물을 충분히 준비하세요.",
    ],
  },

  // ===== DAMBULLA ATTRACTIONS =====
  "sri-lanka/cultural-triangle/dambulla/dambulla-cave-temple": {
    heroGradient: "from-yellow-600 to-amber-800",
    description:
      "해발 160m 바위산 내부에 자리한 5개의 석굴 사원으로, 기원전 1세기 와라감바후 왕이 피신처로 사용한 것이 시초입니다. 153개의 불상과 2,100㎡에 달하는 천장 벽화가 있으며, 스리랑카에서 가장 크고 가장 잘 보존된 석굴 사원. 유네스코 세계유산.",
    history:
      "기원전 1세기 와라감바후 왕이 남인도 침략자에게 쫓겨 이 동굴에 14년간 피신한 뒤, 왕위를 되찾고 감사의 뜻으로 석굴 사원을 봉헌했습니다. 이후 12세기, 18세기에 걸쳐 벽화와 불상이 추가되었습니다.",
    visitInfo: {
      hours: "07:00~19:00 (연중 개방)",
      admission: "외국인 LKR 2,500",
      address: "Kandy-Jaffna Highway, Dambulla",
    },
    highlights: [
      "제1굴 '신들의 왕의 동굴' - 14m 길이의 와불",
      "제2굴 '위대한 왕의 동굴' - 가장 크고 인상적인 석굴, 56개 불상",
      "천장 전체를 뒤덮은 2,000년 역사의 벽화",
      "자연 암석의 곡면을 따라 그려진 천장화의 입체적 효과",
      "석굴 입구에서 바라보는 시기리야 방향의 정글 전망",
    ],
    nearbyAttractions: [
      "담불라 황금 사원 (바위산 입구, 도보 5분)",
      "시기리야 록 포트리스 (버스 45분)",
      "담불라 도매시장 (도보 15분)",
    ],
    photoTips:
      "석굴 내부는 어둡지만 플래시 없이도 입구에서 들어오는 자연광으로 신비로운 분위기를 촬영할 수 있습니다. 와불 전경은 광각 렌즈가 필요합니다.",
    tips: [
      "신발을 벗어야 하므로 한낮에는 바위 바닥이 매우 뜨겁습니다. 오전 또는 오후 늦게 방문 추천.",
      "계단을 약 15~20분 올라야 하니 물과 편한 신발을 준비하세요.",
      "원숭이가 많으니 음식물과 물병을 잘 관리하세요.",
      "어깨와 무릎을 가리는 복장이 필수입니다.",
      "아래쪽의 황금 사원(현대 건물)과 윗쪽의 석굴 사원(유네스코)을 혼동하지 마세요.",
    ],
  },
};
