import type { CityDetail, AttractionDetail } from "../city-details";

export const nepalCityDetails: Record<string, CityDetail> = {
  // ===== KATHMANDU =====
  "nepal/kathmandu-valley/kathmandu": {
    heroGradient: "from-orange-500 to-red-800",
    description:
      "히말라야의 관문이자 네팔의 수도. 유네스코 세계유산으로 지정된 더르바르 광장과 보드나트 스투파, 파슈파티나트 사원 등 힌두교와 불교가 공존하는 신비로운 문화 도시입니다. 좁은 골목마다 사원과 신상이 숨어 있는 살아 있는 박물관 같은 도시.",
    bestTime: "10~12월, 3~4월 (건기, 히말라야 조망 최적)",
    stayArea: "타멜(Thamel) 지구",
    transport: "택시, 로컬 버스, 릭샤 (교통 혼잡 주의)",
    districts: [
      {
        name: "타멜",
        nameEn: "Thamel",
        description:
          "카트만두 최대의 관광 거리. 게스트하우스, 트레킹 장비점, 레스토랑, 카페가 밀집한 배낭여행자의 메카.",
        highlights: ["트레킹 장비 쇼핑", "루프탑 레스토랑", "나이트라이프"],
      },
      {
        name: "더르바르 광장 지구",
        nameEn: "Durbar Square Area",
        description:
          "옛 왕궁과 수십 개의 사원이 밀집한 카트만두의 역사적 심장부. 유네스코 세계유산.",
        highlights: ["카스타만다프 사원", "쿠마리의 집", "하누만 도카 왕궁"],
      },
      {
        name: "보드나트 지구",
        nameEn: "Boudha Area",
        description:
          "세계 최대의 불교 스투파인 보드나트를 중심으로 티베트 불교 문화가 살아 숨 쉬는 지역.",
        highlights: ["보드나트 스투파", "티베트 수도원", "만트라 상점"],
      },
    ],
    attractions: [
      {
        name: "보드나트 스투파",
        nameEn: "Boudhanath Stupa",
        description:
          "세계 최대 규모의 불교 스투파로 유네스코 세계유산. 거대한 만다라 구조 위에 부처의 지혜의 눈이 사방을 바라보고 있으며, 티베트 불교 순례자들이 코라(순례 행렬)를 도는 성스러운 장소.",
        category: "사원",
        tip: "석양 무렵 루프탑 카페에서 스투파를 바라보며 차를 마시면 최고의 분위기를 느낄 수 있습니다.",
      },
      {
        name: "파슈파티나트 사원",
        nameEn: "Pashupatinath Temple",
        description:
          "바그마티 강변에 자리한 네팔 최대의 힌두교 성지. 시바 신을 모시는 사원으로 화장 가트(장례 의식장)를 볼 수 있으며, 삶과 죽음이 공존하는 신비로운 분위기.",
        category: "사원",
        tip: "힌두교 신자가 아니면 본당 내부 입장은 불가합니다. 강 건너편에서 관람하세요.",
      },
      {
        name: "더르바르 광장",
        nameEn: "Durbar Square",
        description:
          "말라 왕조와 샤 왕조의 왕궁이 있던 광장으로 수십 개의 사원과 조각상이 밀집한 유네스코 세계유산. 2015년 지진 이후 복원 작업이 진행 중.",
        category: "유적",
        tip: "입장료를 내면 당일 재입장이 가능합니다. 영수증을 보관하세요.",
      },
      {
        name: "스와얌부나트",
        nameEn: "Swayambhunath",
        description:
          "'원숭이 사원'으로 불리는 언덕 위의 불교 사원. 카트만두 분지 전체를 조망할 수 있는 최고의 전망대.",
        category: "사원",
        tip: "365개 계단을 오르는 대신 택시로 뒷길 입구까지 가면 편하게 올라갈 수 있습니다.",
      },
      {
        name: "타멜 거리",
        nameEn: "Thamel Street",
        description:
          "카트만두 최대의 관광 거리로 트레킹 장비점, 기념품 가게, 다양한 국적의 레스토랑이 밀집한 활기 넘치는 지역.",
        category: "거리",
      },
    ],
    dayTrips: [
      {
        name: "박타푸르",
        nameEn: "Bhaktapur",
        description:
          "중세 네와르 건축의 보고. 도자기 광장과 55창문 궁전이 유명한 고도시.",
        travelTime: "버스 약 1시간",
        gradient: "from-amber-600 to-red-700",
      },
      {
        name: "나가르코트",
        nameEn: "Nagarkot",
        description:
          "해발 2,175m에서 에베레스트를 포함한 히말라야 연봉을 조망하는 전망대 마을.",
        travelTime: "차량 약 1시간 30분",
        gradient: "from-sky-400 to-blue-800",
      },
    ],
    localFood: [
      {
        name: "달밧(Dal Bhat)",
        description:
          "렌틸콩 수프, 밥, 채소 반찬으로 구성된 네팔의 국민 식사. 리필이 무한.",
        emoji: "🍛",
      },
      {
        name: "모모",
        description:
          "네팔식 만두로 물소고기, 닭고기, 채소 등 다양한 속을 넣어 찐 간식.",
        emoji: "🥟",
      },
      {
        name: "네와리 세트",
        description:
          "카트만두 원주민 네와르족의 전통 식사. 다양한 반찬이 한 접시에 담김.",
        emoji: "🍽️",
      },
    ],
    tips: [
      "고도(약 1,400m)로 인해 도착 첫날은 무리하지 말고 적응 시간을 가지세요.",
      "택시 이용 시 반드시 미터기 사용을 요구하거나 사전에 가격을 협상하세요.",
      "사원 입장 시 신발을 벗어야 하는 곳이 많으니 슬리퍼를 챙기면 편리합니다.",
      "물은 반드시 생수를 구입하여 마시고, 길거리 음식은 위생에 주의하세요.",
    ],
  },

  // ===== BHAKTAPUR =====
  "nepal/kathmandu-valley/bhaktapur": {
    heroGradient: "from-amber-600 to-red-700",
    description:
      "카트만두 분지의 세 고대 왕국 중 하나로 중세 네와르 건축이 가장 잘 보존된 도시. '신의 도시'라는 별명처럼 골목마다 정교한 목조 사원과 조각이 가득하며, 도자기 광장에서는 전통 방식 그대로 도자기를 빚는 장인들을 만날 수 있습니다.",
    bestTime: "10~12월, 3~4월 (건기)",
    stayArea: "더르바르 광장 / 타우마디 광장 주변",
    transport: "카트만두에서 로컬 버스 약 1시간, 택시 약 40분",
    districts: [
      {
        name: "더르바르 광장",
        nameEn: "Durbar Square",
        description:
          "박타푸르의 역사적 중심지. 55창문 궁전과 황금문이 있는 왕궁 광장으로 유네스코 세계유산.",
        highlights: ["55창문 궁전", "황금문", "바츠살라 사원"],
      },
      {
        name: "타우마디 광장",
        nameEn: "Taumadhi Square",
        description:
          "5층 높이의 냐타폴라 사원이 우뚝 선 광장. 박타푸르에서 가장 높은 사원이 있는 랜드마크.",
        highlights: ["냐타폴라 사원", "바이라브나트 사원", "전통 카페"],
      },
    ],
    attractions: [
      {
        name: "박타푸르 더르바르 광장",
        nameEn: "Bhaktapur Durbar Square",
        description:
          "말라 왕조의 왕궁과 사원이 밀집한 유네스코 세계유산. 55창문 궁전의 정교한 목조 창문과 황금문의 섬세한 금속 공예가 압권.",
        category: "유적",
        tip: "입장권은 1주일간 유효하니 며칠에 걸쳐 여유롭게 둘러보세요.",
      },
      {
        name: "냐타폴라 사원",
        nameEn: "Nyatapola Temple",
        description:
          "네팔에서 가장 높은 5층 탑 사원(30m). 각 층에 힌두교 수호신 조각이 좌우로 배치된 웅장한 파고다 건축.",
        category: "사원",
      },
      {
        name: "도자기 광장",
        nameEn: "Pottery Square",
        description:
          "전통 방식 그대로 도자기를 빚고 햇볕에 말리는 장인들의 작업장. 직접 체험도 가능.",
        category: "문화",
        tip: "도자기 체험은 사전 협의 없이도 소정의 비용을 내면 가능합니다.",
      },
    ],
    dayTrips: [
      {
        name: "카트만두",
        nameEn: "Kathmandu",
        description:
          "보드나트 스투파, 파슈파티나트 사원 등 세계유산이 가득한 네팔의 수도.",
        travelTime: "버스 약 1시간",
        gradient: "from-orange-500 to-red-800",
      },
      {
        name: "나가르코트",
        nameEn: "Nagarkot",
        description:
          "히말라야 일출을 감상할 수 있는 해발 2,175m의 전망대 마을.",
        travelTime: "차량 약 40분",
        gradient: "from-sky-400 to-blue-800",
      },
    ],
    localFood: [
      {
        name: "주주다우",
        description:
          "'왕의 요거트'라 불리는 박타푸르 명물 수제 요거트. 진하고 크리미한 맛.",
        emoji: "🥛",
      },
      {
        name: "모모",
        description: "물소고기 또는 채소를 넣은 네팔식 찐만두. 토마토 처트니와 함께.",
        emoji: "🥟",
      },
    ],
    tips: [
      "박타푸르 입장료(NPR 1,800)는 비자 복사본과 여권을 가져가면 1주일 유효 티켓으로 발급받을 수 있습니다.",
      "골목골목 숨어 있는 작은 사원과 조각을 발견하는 재미가 있으니 천천히 걸어 다니세요.",
      "카트만두보다 관광객이 적고 조용하여 숙박하며 여유롭게 즐기는 것을 추천합니다.",
    ],
  },

  // ===== PATAN =====
  "nepal/kathmandu-valley/patan": {
    heroGradient: "from-yellow-500 to-amber-800",
    description:
      "'예술의 도시'로 불리는 카트만두 분지의 세 번째 고대 왕국. 정교한 금속 공예와 목조 건축의 진수를 보여주는 도시로, 더르바르 광장의 크리슈나 만디르와 파탄 박물관은 네와르 예술의 정수입니다.",
    bestTime: "10~12월, 3~4월 (건기)",
    stayArea: "파탄 더르바르 광장 주변 / 망갈 바자르",
    transport: "카트만두에서 택시 약 20분, 로컬 버스 약 40분",
    districts: [
      {
        name: "더르바르 광장",
        nameEn: "Durbar Square",
        description:
          "카트만두 분지 3개 더르바르 광장 중 가장 아름다운 곳. 크리슈나 만디르와 파탄 박물관이 위치.",
        highlights: ["크리슈나 만디르", "파탄 박물관", "황금 사원"],
      },
    ],
    attractions: [
      {
        name: "파탄 더르바르 광장",
        nameEn: "Patan Durbar Square",
        description:
          "네와르 건축의 정수를 보여주는 유네스코 세계유산. 크리슈나 만디르의 섬세한 석조 조각은 네팔 건축의 최고 걸작으로 평가됨.",
        category: "유적",
        tip: "파탄 박물관은 별도 입장료가 있지만 네팔 최고의 박물관으로 꼭 방문하세요.",
      },
      {
        name: "황금 사원",
        nameEn: "Golden Temple",
        description:
          "12세기에 건립된 불교 사원으로 금박으로 장식된 정교한 외관이 돋보이는 파탄의 숨은 보석.",
        category: "사원",
      },
      {
        name: "마하부다 사원",
        nameEn: "Mahabouddha Temple",
        description:
          "수천 개의 테라코타 타일에 부처 이미지가 새겨진 독특한 사원. 좁은 골목 안에 숨어 있음.",
        category: "사원",
        tip: "골목이 복잡하니 현지인에게 길을 물어보세요.",
      },
    ],
    dayTrips: [
      {
        name: "카트만두",
        nameEn: "Kathmandu",
        description:
          "보드나트, 파슈파티나트, 스와얌부나트 등 세계유산이 밀집한 수도.",
        travelTime: "택시 약 20분",
        gradient: "from-orange-500 to-red-800",
      },
    ],
    localFood: [
      {
        name: "네와리 콰티",
        description:
          "9가지 콩을 혼합하여 끓인 전통 수프. 축제 기간에 특히 즐겨 먹는 보양식.",
        emoji: "🥣",
      },
      {
        name: "차타마리",
        description:
          "'네팔식 피자'로 불리는 쌀가루 크레이프에 다진 고기와 계란을 올린 요리.",
        emoji: "🫓",
      },
    ],
    tips: [
      "카트만두에서 가까워 당일치기도 가능하지만, 조용한 분위기에서 숙박도 추천합니다.",
      "금속 공예품(동, 놋쇠)을 구입하기 좋은 도시입니다. 가격 흥정은 필수.",
      "파탄 박물관은 네팔 최고 수준의 박물관으로 최소 1시간은 할애하세요.",
    ],
  },

  // ===== POKHARA =====
  "nepal/pokhara/pokhara": {
    heroGradient: "from-cyan-500 to-blue-800",
    description:
      "안나푸르나 히말라야를 배경으로 페와 호수가 펼쳐진 네팔 제2의 도시. 트레킹의 베이스캠프이자 패러글라이딩, 래프팅 등 어드벤처 액티비티의 중심지. 카트만두와 달리 여유롭고 평화로운 분위기로 '네팔의 휴양 도시'로 사랑받습니다.",
    bestTime: "10~11월, 3~4월 (히말라야 조망 최적기)",
    stayArea: "레이크사이드(Lakeside) 지구",
    transport: "카트만두에서 국내선 약 25분, 투어리스트 버스 약 7시간",
    districts: [
      {
        name: "레이크사이드",
        nameEn: "Lakeside",
        description:
          "페와 호수를 따라 형성된 포카라 최대의 관광 지구. 호텔, 레스토랑, 트레킹 장비점이 밀집.",
        highlights: ["페와 호수", "보트 선착장", "레이크사이드 레스토랑 거리"],
      },
      {
        name: "댐사이드",
        nameEn: "Damside",
        description:
          "레이크사이드보다 조용한 분위기의 숙박 지역. 데비스 폭포와 가까움.",
        highlights: ["데비스 폭포", "굽테스워 동굴", "티베트 난민촌"],
      },
    ],
    attractions: [
      {
        name: "페와 호수",
        nameEn: "Phewa Lake",
        description:
          "안나푸르나 연봉과 마차푸차레(피쉬테일)가 호면에 비치는 포카라의 상징. 보트를 타고 호수 가운데의 탈 바라히 사원까지 갈 수 있습니다.",
        category: "자연",
        tip: "이른 아침에 호수를 방문하면 히말라야가 호수에 비치는 최고의 풍경을 볼 수 있습니다.",
      },
      {
        name: "사랑코트 전망대",
        nameEn: "Sarangkot Viewpoint",
        description:
          "해발 1,592m에서 안나푸르나, 마차푸차레 등 히말라야 파노라마를 감상하는 일출 명소. 패러글라이딩 출발점이기도 합니다.",
        category: "전망대",
        tip: "일출을 보려면 새벽 5시경 출발해야 합니다. 택시 사전 예약을 추천.",
      },
      {
        name: "세계평화탑",
        nameEn: "World Peace Pagoda",
        description:
          "페와 호수 남쪽 언덕 위의 일본식 불교 탑. 포카라 시내와 호수, 히말라야를 한눈에 조망.",
        category: "사원",
      },
      {
        name: "데비스 폭포",
        nameEn: "Devi's Falls",
        description:
          "페와 호수 물이 지하 동굴로 빨려 들어가며 만드는 폭포. 우기에 수량이 풍부하면 장관.",
        category: "자연",
      },
      {
        name: "패러글라이딩",
        nameEn: "Paragliding",
        description:
          "사랑코트에서 이륙하여 안나푸르나 히말라야를 바라보며 하늘을 나는 체험. 포카라 최고 인기 액티비티.",
        category: "액티비티",
        tip: "날씨에 따라 취소될 수 있으니 일정 여유를 두고 예약하세요.",
      },
    ],
    dayTrips: [
      {
        name: "사랑코트",
        nameEn: "Sarangkot",
        description:
          "히말라야 일출 명소이자 패러글라이딩의 출발점.",
        travelTime: "택시 약 30분",
        gradient: "from-orange-400 to-pink-700",
      },
      {
        name: "베그나스 호수",
        nameEn: "Begnas Lake",
        description:
          "페와 호수보다 한적하고 조용한 자연 그대로의 호수. 카약과 수영이 가능.",
        travelTime: "버스 약 40분",
        gradient: "from-teal-400 to-cyan-700",
      },
    ],
    localFood: [
      {
        name: "달밧",
        description:
          "렌틸콩 수프, 밥, 채소 커리, 아차르(절임)로 구성된 네팔 국민 식사.",
        emoji: "🍛",
      },
      {
        name: "탕두리 피쉬",
        description:
          "페와 호수에서 잡은 민물고기를 탕두리 양념에 구운 포카라 별미.",
        emoji: "🐟",
      },
      {
        name: "티베트 빵",
        description:
          "티베트식 튀김빵에 꿀이나 야크 버터를 곁들인 간식.",
        emoji: "🫓",
      },
    ],
    tips: [
      "패러글라이딩은 날씨 영향이 크므로 2~3일 여유를 두고 일정을 잡으세요.",
      "레이크사이드에서 보트를 빌려 호수를 직접 노 저어 건너갈 수 있습니다(NPR 500~800).",
      "안나푸르나 트레킹을 계획 중이라면 포카라에서 TIMS 카드와 허가증을 발급받으세요.",
      "카트만두보다 물가가 저렴하고 공기가 깨끗합니다.",
    ],
  },

  // ===== NAMCHE BAZAAR =====
  "nepal/everest-region/namche-bazaar": {
    heroGradient: "from-indigo-500 to-slate-800",
    description:
      "해발 3,440m에 위치한 에베레스트 트레킹의 관문 도시. '셰르파의 수도'로 불리며, 반원형 계곡에 형성된 마을에서 에베레스트, 로체, 아마다블람 등 히말라야 거봉을 조망할 수 있습니다. 고소 적응의 필수 경유지.",
    bestTime: "10~11월, 3~5월 (트레킹 시즌)",
    stayArea: "남체 바자르 마을 중심부",
    transport: "루클라에서 트레킹 약 2일 (카트만두에서 루클라까지 경비행기 약 35분)",
    districts: [
      {
        name: "남체 마을 중심부",
        nameEn: "Namche Town Center",
        description:
          "로지, 레스토랑, 기념품 가게, 베이커리가 밀집한 남체 바자르의 핵심 지역. 토요 시장이 유명.",
        highlights: ["토요 시장", "셰르파 문화 박물관", "에베레스트 뷰 레스토랑"],
      },
    ],
    attractions: [
      {
        name: "에베레스트 뷰 포인트",
        nameEn: "Everest View Point",
        description:
          "남체 바자르 뒤편 언덕에서 에베레스트, 로체, 아마다블람을 한눈에 볼 수 있는 전망대. 고소 적응 하이킹 코스로도 이상적.",
        category: "전망대",
        tip: "아침 일찍 올라가야 구름이 없는 맑은 히말라야 조망을 볼 수 있습니다.",
      },
      {
        name: "셰르파 문화 박물관",
        nameEn: "Sherpa Culture Museum",
        description:
          "셰르파족의 역사, 문화, 에베레스트 등반 역사를 전시하는 박물관. 텐징 노르게이의 업적도 소개.",
        category: "박물관",
      },
      {
        name: "토요 시장",
        nameEn: "Saturday Market",
        description:
          "매주 토요일 열리는 남체 최대의 재래시장. 인근 마을 주민들이 가져온 식료품과 생필품을 거래하는 활기찬 시장.",
        category: "시장",
        tip: "토요일 오전에 방문하면 가장 활기찬 분위기를 경험할 수 있습니다.",
      },
    ],
    dayTrips: [
      {
        name: "에베레스트 뷰 호텔",
        nameEn: "Everest View Hotel",
        description:
          "해발 3,880m의 세계 최고 해발 호텔. 식사와 차 한 잔만으로도 방문 가능.",
        travelTime: "도보 약 2시간 (왕복)",
        gradient: "from-sky-400 to-indigo-800",
      },
    ],
    localFood: [
      {
        name: "셰르파 스튜",
        description:
          "감자, 채소, 고기를 넣고 끓인 고산지대의 든든한 보양식.",
        emoji: "🥘",
      },
      {
        name: "야크 스테이크",
        description:
          "히말라야 고산지대에서만 맛볼 수 있는 야크 고기 스테이크.",
        emoji: "🥩",
      },
      {
        name: "버터 차",
        description:
          "티베트식 야크 버터와 소금을 넣은 차. 고소 적응에 도움.",
        emoji: "🍵",
      },
    ],
    tips: [
      "고소 적응이 매우 중요합니다. 남체에서 최소 2박하며 적응 하이킹을 하세요.",
      "물가가 고도에 비례하여 비쌉니다. 카트만두에서 필요한 물품을 미리 구입하세요.",
      "루클라행 경비행기는 날씨에 따라 자주 결항되므로 일정 여유를 두세요.",
      "두통, 메스꺼움 등 고산병 증상이 나타나면 즉시 하산해야 합니다.",
    ],
  },
};

export const nepalAttractionDetails: Record<string, AttractionDetail> = {
  // ===== KATHMANDU ATTRACTIONS =====
  "nepal/kathmandu-valley/kathmandu/boudhanath-stupa": {
    heroGradient: "from-yellow-500 to-orange-800",
    description:
      "세계 최대 규모의 불교 스투파(높이 36m)로 유네스코 세계유산. 거대한 만다라 형태의 기단 위에 반구형 돔이 얹혀 있고, 13단의 탑 위에 부처의 전지전능한 눈이 네 방향을 바라봅니다. 티베트 불교 순례자들이 끊임없이 코라(시계 방향 순례)를 도는 성스러운 장소.",
    history:
      "5세기경 건립된 것으로 추정되며, 티베트 불교 4대 성지 중 하나입니다. 1959년 티베트 망명자들이 대거 정착하면서 주변에 50여 개의 티베트 수도원이 세워졌습니다. 2015년 지진으로 상부가 손상되었으나 신속히 복원되었습니다.",
    visitInfo: {
      hours: "06:00~21:00 (연중 개방)",
      admission: "외국인 NPR 400",
      address: "Boudha, Kathmandu",
    },
    highlights: [
      "스투파 주위를 시계 방향으로 도는 코라(순례 행렬) 체험",
      "108개의 작은 부처상이 새겨진 벽감(壁龕)",
      "해질녘 조명이 켜진 스투파의 신비로운 분위기",
      "주변 티베트 수도원에서 울려 퍼지는 독경 소리",
    ],
    nearbyAttractions: [
      "파슈파티나트 사원 (택시 10분)",
      "코파 수도원 (도보 5분)",
      "셰첸 수도원 (도보 3분)",
    ],
    photoTips:
      "스투파 주변 루프탑 레스토랑에서 일몰 시간에 촬영하면 황금빛으로 물든 스투파와 히말라야 배경을 동시에 담을 수 있습니다.",
    tips: [
      "순례자의 흐름에 따라 시계 방향으로 돌아야 합니다(반시계 방향 금지).",
      "이른 아침과 해질녘에 경건한 분위기가 가장 좋습니다.",
      "마니차(기도 바퀴)를 돌리며 걸으면 현지 문화를 체험할 수 있습니다.",
      "주변 루프탑 카페에서 스투파 전경을 감상하며 차를 마시는 것을 추천합니다.",
    ],
  },

  "nepal/kathmandu-valley/kathmandu/pashupatinath-temple": {
    heroGradient: "from-red-600 to-orange-900",
    description:
      "바그마티 강변에 자리한 네팔 최대이자 최고의 힌두교 성지. 시바 신의 화신 파슈파티(동물의 군주)를 모시는 사원으로, 강가의 화장 가트에서는 힌두교 장례 의식이 일상적으로 행해집니다. 삶과 죽음이 공존하는 깊은 영적 분위기.",
    history:
      "5세기에 건립된 것으로 기록되나 기원은 그보다 훨씬 오래된 것으로 추정됩니다. 현재의 2층 파고다 양식 본당은 17세기에 재건된 것이며, 지붕은 순금으로 장식되어 있습니다. 인도 아대륙 4대 시바 성지(차르담) 중 하나.",
    visitInfo: {
      hours: "04:00~21:00 (연중 개방)",
      admission: "외국인 NPR 1,000 (본당 내부는 힌두교 신자만 입장 가능)",
      address: "Pashupati Nath Road, Kathmandu",
      website: "https://www.pashupatinathtemple.org",
    },
    highlights: [
      "바그마티 강변의 화장 가트(아르야 가트)에서의 장례 의식",
      "순금 지붕의 본당 파고다(외부에서 관람)",
      "강 건너편 사두(수행자)들의 모습",
      "경내에 산재한 수백 개의 작은 힌두 사원과 링가(시바 상징물)",
    ],
    nearbyAttractions: [
      "보드나트 스투파 (택시 10분)",
      "구혜스워리 사원 (도보 15분)",
    ],
    photoTips:
      "강 건너편(동쪽)에서 화장 가트와 사원 전경을 촬영할 수 있습니다. 화장 의식은 가까이서 촬영하는 것은 실례이니 적절한 거리를 유지하세요.",
    tips: [
      "힌두교 신자가 아니면 본당 내부 입장은 불가합니다.",
      "화장 의식을 볼 때는 경건한 태도를 유지하고 가까이 다가가지 마세요.",
      "원숭이가 많으니 음식물과 소지품을 잘 관리하세요.",
      "사두(수행자)를 촬영할 때는 먼저 허락을 구하세요. 팁(NPR 100~200)을 기대합니다.",
    ],
  },

  "nepal/kathmandu-valley/kathmandu/durbar-square": {
    heroGradient: "from-orange-500 to-red-700",
    description:
      "말라 왕조와 샤 왕조의 궁궐이 있던 카트만두의 역사적 심장부. 수십 개의 힌두·불교 사원, 살아 있는 여신 쿠마리의 거처, 하누만 도카 왕궁 등이 밀집한 유네스코 세계유산. 2015년 대지진으로 일부 건물이 무너졌으나 복원이 진행 중.",
    history:
      "12세기부터 18세기까지 카트만두 왕국의 중심이었던 곳입니다. 리추하비 왕조를 거쳐 말라 왕조 시대에 대부분의 사원과 궁전이 건립되었으며, 1768년 고르카의 프리트비 나라얀 샤가 통일 후 왕궁으로 사용했습니다.",
    visitInfo: {
      hours: "07:00~19:00 (연중 개방)",
      admission: "외국인 NPR 1,000 (당일 재입장 가능, 영수증 보관)",
      address: "Durbar Square, Kathmandu",
    },
    highlights: [
      "살아 있는 여신 쿠마리가 거주하는 쿠마리 체(Kumari Chhe)",
      "하누만 도카 왕궁의 나살 촉(중정)과 박물관",
      "카스타만다프 사원 - 카트만두 도시명의 유래",
      "칼 바이라브 석상 - 거대한 시바 신의 분노상",
    ],
    nearbyAttractions: [
      "타멜 (도보 15분)",
      "아산 바자르 (도보 10분)",
      "스와얌부나트 (택시 15분)",
    ],
    photoTips:
      "마주 데발 사원 계단에 앉아 광장 전체를 조망하는 구도가 인기입니다. 쿠마리가 창문에 나타나는 순간을 기다려 보세요(촬영 금지).",
    tips: [
      "입장료 영수증을 보관하면 당일 재입장이 가능합니다.",
      "비공인 가이드가 접근할 수 있으니 필요하면 공식 가이드를 이용하세요.",
      "2015년 지진 복원 작업이 일부 진행 중이므로 일부 구역은 출입이 제한될 수 있습니다.",
      "쿠마리의 얼굴을 직접 볼 수 있지만 사진 촬영은 엄격히 금지됩니다.",
    ],
  },

  // ===== BHAKTAPUR ATTRACTIONS =====
  "nepal/kathmandu-valley/bhaktapur/bhaktapur-durbar-square": {
    heroGradient: "from-amber-600 to-red-800",
    description:
      "카트만두 분지 3개 더르바르 광장 중 가장 잘 보존된 중세 광장. 55창문 궁전의 정교한 목조 창문, 금박 장식의 황금문, 바츠살라 사원의 종 등 네와르 건축과 예술의 최고봉을 한자리에서 감상할 수 있습니다.",
    history:
      "12세기부터 말라 왕조의 왕궁으로 사용되었으며, 15~18세기에 현재의 모습이 완성되었습니다. 부파틴드라 말라 왕(1696~1722) 시대에 55창문 궁전, 황금문 등 주요 건축물이 세워졌습니다.",
    visitInfo: {
      hours: "상시 개방 (야외 광장)",
      admission: "박타푸르 입장료 NPR 1,800에 포함",
      address: "Durbar Square, Bhaktapur",
    },
    highlights: [
      "55개의 정교하게 조각된 목조 창문이 있는 55창문 궁전",
      "네팔 최고의 금속 공예 걸작 황금문(Sun Dhoka)",
      "바츠살라 사원의 '개 짖는 종' - 울리면 개가 짖는다는 전설의 종",
      "부파틴드라 말라 왕의 기도하는 동상이 올라선 석주",
    ],
    nearbyAttractions: [
      "냐타폴라 사원 (도보 5분)",
      "도자기 광장 (도보 8분)",
      "타우마디 광장 (도보 5분)",
    ],
    photoTips:
      "55창문 궁전을 정면에서 촬영할 때 오후 빛이 황금문을 비추는 시간이 가장 좋습니다. 광장 반대편에서 전체 파노라마 구도를 잡으세요.",
    tips: [
      "박타푸르 입장권(NPR 1,800)은 여권과 비자 복사본을 제시하면 1주일간 유효합니다.",
      "이른 아침이나 늦은 오후에 방문하면 관광객이 적어 여유롭게 감상할 수 있습니다.",
      "광장 주변 카페 2층에서 광장 전경을 내려다보며 쉴 수 있습니다.",
      "지진 복원 작업이 일부 진행 중이므로 공사 구역을 피해 관람하세요.",
    ],
  },

  // ===== POKHARA ATTRACTIONS =====
  "nepal/pokhara/pokhara/phewa-lake": {
    heroGradient: "from-cyan-500 to-blue-800",
    description:
      "안나푸르나 연봉과 마차푸차레(피쉬테일, 6,993m)가 잔잔한 호면에 비치는 포카라의 상징. 네팔에서 두 번째로 큰 호수(약 4.4km²)로, 보트를 타고 호수 가운데의 탈 바라히 사원까지 갈 수 있습니다.",
    history:
      "자연적으로 형성된 담수호로, 세티 강의 물이 유입됩니다. 호수 가운데 섬에 자리한 탈 바라히 사원은 힌두교 비슈누 신의 화신 바라히를 모시며, 매주 토요일 동물 제물 의식이 행해집니다.",
    visitInfo: {
      hours: "상시 개방 (자연 호수)",
      admission: "무료 (보트 대여 NPR 500~800/시간)",
      address: "Lakeside, Pokhara",
    },
    highlights: [
      "안나푸르나와 마차푸차레가 호수에 비치는 거울 같은 반영",
      "나무 보트를 타고 호수 위에서 즐기는 여유로운 시간",
      "탈 바라히 사원(호수 가운데 섬 사원)으로 보트 여행",
      "레이크사이드 카페에서 바라보는 호수와 히말라야 일몰",
    ],
    nearbyAttractions: [
      "세계평화탑 (보트 + 도보 약 40분)",
      "데비스 폭포 (도보 20분)",
      "사랑코트 전망대 (택시 30분)",
    ],
    photoTips:
      "이른 아침(6~7시)에 호수 북쪽 끝에서 히말라야가 호수에 반영되는 사진을 찍을 수 있습니다. 바람이 없는 날이 최적입니다.",
    tips: [
      "보트 가격은 흥정이 가능합니다. 1시간 기준 NPR 500~800이 적정선.",
      "이른 아침에 방문하면 히말라야 반영을 볼 확률이 높습니다.",
      "호수 수영은 가능하지만 수질이 좋지 않으므로 권장하지 않습니다.",
      "우기(6~9월)에는 호수 수위가 높아지고 보트 운행이 제한될 수 있습니다.",
    ],
  },

  // ===== NAMCHE ATTRACTIONS =====
  "nepal/everest-region/namche-bazaar/everest-view-point": {
    heroGradient: "from-indigo-500 to-blue-900",
    description:
      "남체 바자르 뒷산(해발 약 3,800m)에서 에베레스트(8,849m), 로체(8,516m), 아마다블람(6,812m) 등 히말라야 거봉을 한눈에 조망하는 전망대. 고소 적응 하이킹 코스로도 최적이며, 에베레스트 뷰 호텔까지 연장할 수 있습니다.",
    history:
      "남체 바자르가 에베레스트 트레킹의 핵심 경유지로 발전하면서 자연스럽게 형성된 전망대입니다. 1971년 일본이 건설한 에베레스트 뷰 호텔(세계 최고 해발 호텔)이 인근에 있어 더욱 유명해졌습니다.",
    visitInfo: {
      hours: "상시 개방 (자연 전망대)",
      admission: "무료",
      address: "남체 바자르 북쪽 언덕, Solukhumbu",
    },
    highlights: [
      "에베레스트, 로체, 아마다블람 등 히말라야 8,000m급 거봉 파노라마",
      "맑은 날 눈에 덮인 봉우리가 아침 햇살에 황금빛으로 물드는 장면",
      "고소 적응 하이킹과 전망 감상을 동시에",
      "에베레스트 뷰 호텔까지 연장 하이킹(편도 약 1시간 추가)",
    ],
    nearbyAttractions: [
      "에베레스트 뷰 호텔 (도보 1시간)",
      "셰르파 문화 박물관 (남체 시내, 도보 30분)",
      "쿤데·쿰중 마을 (도보 2시간)",
    ],
    photoTips:
      "이른 아침(6~7시)에 도착하면 구름 없이 맑은 히말라야 전경을 촬영할 수 있습니다. 광각 렌즈로 파노라마를 담으세요.",
    tips: [
      "해발 3,800m이므로 천천히 걸으며 호흡을 조절하세요.",
      "아침 일찍 올라가야 구름 없는 맑은 조망을 볼 수 있습니다.",
      "방풍 재킷과 선글라스는 필수입니다. 자외선이 매우 강합니다.",
      "고산병 증상(두통, 어지러움)이 심해지면 무리하지 말고 하산하세요.",
      "남체에서 왕복 약 2~3시간, 에베레스트 뷰 호텔까지는 4~5시간 소요.",
    ],
  },
};
