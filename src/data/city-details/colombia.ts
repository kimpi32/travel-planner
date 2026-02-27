import type { CityDetail, AttractionDetail } from "../city-details";

export const colombiaCityDetails: Record<string, CityDetail> = {
  // ===== CARIBBEAN =====
  "colombia/caribbean/cartagena": {
    heroGradient: "from-yellow-400 to-orange-700",
    description: "카리브해를 바라보는 황금빛 유네스코 세계유산 도시, 카르타헤나. 16세기 스페인이 건설한 거대한 성벽과 알록달록한 꽃이 드리운 발코니, 코블스톤 거리가 동화 같은 분위기를 만듭니다. 남미에서 가장 로맨틱하고 아름다운 구시가지를 자랑합니다.",
    bestTime: "12~4월 (건기, 맑고 화창)",
    stayArea: "구시가지 (시우다드 아무라야다) / 힐 지구 (헤체마네마)",
    transport: "도보, 택시, 투크투크, 우버",
    districts: [
      { name: "구시가지 (Ciudad Amurallada)", nameEn: "Walled City", description: "16세기 스페인 성벽으로 둘러싸인 유네스코 세계유산 역사 지구. 알록달록한 꽃으로 장식된 발코니와 식민지 건물이 가득.", highlights: ["볼리바르 광장", "산토 도밍고 광장", "황금 박물관"] },
      { name: "헤체마네마 지구", nameEn: "Getsemani", description: "성벽 바깥의 옛 서민 지구가 힙한 예술 동네로 변신. 벽화와 바, 레스토랑이 가득한 보헤미안 분위기.", highlights: ["트리니다드 광장", "벽화 거리", "야외 바"] },
    ],
    attractions: [
      { name: "카르타헤나 성벽 (무라야)", nameEn: "Las Murallas (City Walls)", description: "16~17세기에 걸쳐 건설된 11km의 거대한 식민지 성벽. 해질녘 성벽 위를 걷거나 마차를 타고 카리브해 노을을 감상하는 것이 최고의 경험입니다.", category: "역사", tip: "일몰 시간에 성벽 위를 걸으세요. 카리브해와 도시 전경이 황금빛으로 물듭니다." },
      { name: "카스티요 산 펠리페", nameEn: "Castillo San Felipe de Barajas", description: "16세기에 축성된 스페인 식민지 시대 요새의 걸작. 지하 터널 네트워크와 전략적 설계가 놀랍습니다.", category: "역사", tip: "아침 이른 시간이 날씨도 선선하고 인파도 적습니다." },
      { name: "로사리오 군도", nameEn: "Islas del Rosario", description: "카르타헤나에서 보트로 45분 거리의 산호초 군도. 스노클링과 다이빙, 해변 일광욕을 즐기는 섬 투어.", category: "자연", tip: "보트는 아침 8시에 출발합니다. 뱃멀미 약을 미리 먹으세요." },
      { name: "팔라시오 데 라 인키시시온", nameEn: "Palace of the Inquisition", description: "스페인 종교재판소 건물로 현재 역사 박물관. 식민지 시대 카르타헤나의 역사를 알 수 있습니다.", category: "역사" },
    ],
    dayTrips: [
      { name: "로사리오 군도", nameEn: "Islas del Rosario", description: "투명한 카리브해 바닷속을 감상하는 스노클링과 스쿠버 다이빙 명소.", travelTime: "보트 45분~1시간", gradient: "from-cyan-400 to-blue-700" },
      { name: "무르드로 데 라 파파야", nameEn: "Playa Blanca", description: "카르타헤나 근교의 아름다운 화이트 샌드 해변.", travelTime: "보트 1시간 30분", gradient: "from-yellow-300 to-amber-600" },
    ],
    localFood: [
      { name: "아레파 데 우에보", description: "옥수수 반죽 속에 달걀을 품어 튀긴 카르타헤나 아침 식사의 정수.", emoji: "🥚" },
      { name: "세비체 데 카마론", description: "카리브해 신선한 새우로 만든 콜롬비아식 세비체.", emoji: "🦐" },
      { name: "코코 라이스", description: "코코넛 밀크로 지은 카리브해 스타일 쌀 요리.", emoji: "🥥" },
    ],
    tips: [
      "구시가지는 걸어서 충분히 탐방 가능합니다. 미로 같은 골목을 헤매는 것 자체가 즐거움.",
      "카르타헤나는 습하고 더운 날씨입니다. 이른 아침이나 저녁에 관광하세요.",
      "로사리오 군도 투어는 하루를 투자하세요. 투명한 카리브해 물속이 잊지 못할 경험.",
      "구시가지 식당보다 헤체마네마 지구가 더 저렴하고 현지스럽습니다.",
    ],
  },

  // ===== ANDEAN =====
  "colombia/andean/bogota": {
    heroGradient: "from-yellow-500 to-red-700",
    description: "해발 2,600m의 안데스 고원에 자리한 콜롬비아의 수도, 보고타. 라 칸델라리아 역사 지구의 식민지 건물, 세계적인 금박물관과 보테로 박물관, 활기찬 미식 씬이 공존합니다. 콜롬비아 문화의 심장으로 최근 도시 재생으로 눈부신 변화를 이루고 있습니다.",
    bestTime: "12~3월 / 7~8월 (건기)",
    stayArea: "라 칸델라리아 / 우살라쿤 / 폴리폰드로",
    transport: "트랜스밀레니오 BRT, 서클버스, 자전거(시클로비아 일요일), 택시, 우버",
    districts: [
      { name: "라 칸델라리아", nameEn: "La Candelaria", description: "보고타 역사 지구. 시몬 볼리바르 광장을 중심으로 식민지 시대 건물, 박물관, 거리 예술이 밀집.", highlights: ["플라사 볼리바르", "콜롬비아 국립박물관", "금박물관"] },
      { name: "폴리폰드로 (사포가이 지구)", nameEn: "Zona Rosa - Chapinero", description: "보고타의 트렌디한 레스토랑·바·나이트라이프 지구.", highlights: ["파크웨이 산책로", "우살라쿤 카페 거리", "국제 레스토랑"] },
    ],
    attractions: [
      { name: "골드 박물관 (무세오 델 오로)", nameEn: "Gold Museum", description: "55,000점의 황금 유물을 소장한 세계 최고의 선콜럼비아 황금 유물 박물관. 엘도라도(황금의 땅) 전설의 실체가 담겨 있습니다.", category: "박물관", tip: "화요일은 입장 무료입니다. 무이스카 황금 뗏목 복제품이 하이라이트." },
      { name: "보테로 박물관", nameEn: "Botero Museum", description: "콜롬비아 출신 세계적 화가 보테로의 뚱뚱한 인물화 123점과 기증 작품들이 전시된 박물관. 무료 입장.", category: "박물관", tip: "광장 앞 야외에도 보테로 조각들이 전시되어 있습니다." },
      { name: "몬세라테 산", nameEn: "Cerro de Monserrate", description: "해발 3,152m에서 보고타 전체를 내려다보는 전망대. 케이블카나 도보로 오르며 정상에 성당이 있습니다.", category: "자연", tip: "일요일 아침은 가족 나들이 인파로 매우 붐빕니다. 평일을 추천합니다." },
      { name: "라 칸델라리아 역사 지구", nameEn: "La Candelaria", description: "식민지 시대 건물과 현대 그래피티 예술이 공존하는 보고타의 역사 심장부.", category: "역사" },
    ],
    dayTrips: [
      { name: "소금 성당 (시파키라)", nameEn: "Salt Cathedral Zipaquira", description: "소금 광산 지하에 건설된 세계 유일의 지하 소금 성당. UNESCO 세계 문화유산 후보.", travelTime: "버스 약 1시간 30분", gradient: "from-slate-400 to-gray-700" },
      { name: "라구나 구아타비타", nameEn: "Laguna de Guatavita", description: "엘도라도 전설의 발원지인 화산 분화구 호수. 무이스카 부족의 성스러운 의식지.", travelTime: "차 약 2시간", gradient: "from-blue-400 to-green-600" },
    ],
    localFood: [
      { name: "아히아코", description: "세 종류의 감자와 닭고기, 옥수수로 끓인 보고타 전통 수프. 크림과 케이퍼를 곁들입니다.", emoji: "🍲" },
      { name: "반데하 파이사", description: "볶은 콩, 치차론, 소고기, 달걀, 아레파가 한 접시에 담긴 콜롬비아 국민 요리.", emoji: "🍽️" },
      { name: "아구아판엘라", description: "사탕수수 즙을 끓여 만든 따뜻한 콜롬비아 전통 음료.", emoji: "🍵" },
    ],
    tips: [
      "보고타는 해발 2,600m로 고도가 높습니다. 첫날은 무리하지 말고 천천히 적응하세요.",
      "시클로비아(일요일 자전거 도로)는 도시 주요 도로가 차 없는 자전거 길로 바뀌는 보고타 특별 행사입니다.",
      "라 칸델라리아는 낮에 여러 사람이 있을 때 방문하세요. 저녁에는 조심이 필요합니다.",
      "콜롬비아 커피는 세계적 수준입니다. 카페 투어를 즐겨보세요.",
    ],
  },
  "colombia/andean/medellin": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "꽃의 도시에서 혁신의 도시로 거듭난 메데인. 불과 30년 전 세계에서 가장 위험한 도시 중 하나였지만, 도시 재생과 교육으로 성공적 변신을 이뤄낸 21세기의 기적. 메트로케이블, 에스칼라토르, 코무나 13의 변신은 세계 도시 계획의 모범이 됩니다.",
    bestTime: "연중 봄 날씨 (메데인은 '영원한 봄의 도시')",
    stayArea: "엘 포블라도 / 로렐 / 라우레레스",
    transport: "메트로(지하철), 메트로케이블, 메트로플러스, 우버",
    districts: [
      { name: "엘 포블라도", nameEn: "El Poblado", description: "메데인의 안전하고 트렌디한 고급 지구. 레스토랑, 바, 부티크 호텔이 집중된 여행자 거점.", highlights: ["파르케 포블라도", "비아 프리마베라", "국제 레스토랑 거리"] },
      { name: "코무나 13", nameEn: "Comuna 13", description: "과거 가장 위험했던 빈민가가 야외 갤러리로 변신한 도시 재생의 상징. 세계 최고의 그래피티 아트.", highlights: ["그래피티 투어", "실외 에스칼라토르", "힙합 문화"] },
    ],
    attractions: [
      { name: "코무나 13 그래피티 투어", nameEn: "Comuna 13 Graffiti Tour", description: "과거 범죄의 온상이었던 가파른 빈민 언덕이 세계적인 야외 그래피티 갤러리로 변신. 무장 조직과 군의 전쟁으로 피해를 받은 주민들의 이야기가 벽화에 담겨 있습니다.", category: "예술", tip: "현지 가이드와 함께하는 투어를 추천합니다. 영어 투어도 운영됩니다." },
      { name: "몬세라테 메트로케이블", nameEn: "Metrocable Santo Domingo", description: "달동네를 연결하는 메트로케이블에서 메데인의 분지 지형과 도시 전경을 감상합니다. 가난한 지역에 대중교통을 연결한 혁신적 인프라입니다.", category: "랜드마크", tip: "파르케 아르비 행 케이블카를 계속 타면 울창한 자연림에 도착합니다." },
      { name: "보테로 광장", nameEn: "Plaza Botero", description: "메데인 출신의 화가·조각가 보테로의 뚱뚱한 청동 조각 23점이 광장을 가득 채웁니다. 안티오키아 박물관과 인접.", category: "예술", tip: "보테로 조각상 23점과 안티오키아 박물관을 함께 둘러보세요." },
    ],
    dayTrips: [
      { name: "과타페", nameEn: "Guatape", description: "알록달록한 색의 조크갈로(벽 장식)로 유명한 아름다운 호수 마을. 라 피에드라 바위(해발 200m 계단 760개)가 명소.", travelTime: "버스 약 2시간", gradient: "from-orange-400 to-yellow-600" },
    ],
    localFood: [
      { name: "반데하 파이사", description: "안티오키아 지방의 풍성한 전통 한 상 차림. 콩·소고기·치차론·아레파·달걀·파티코가 한 접시에.", emoji: "🍽️" },
      { name: "아레파 파이사", description: "안티오키아 지방 특유의 얇고 바삭한 흰 옥수수 아레파.", emoji: "🫓" },
      { name: "치차론", description: "바삭하게 튀긴 돼지 껍데기. 안티오키아 지방의 국민 간식.", emoji: "🥓" },
    ],
    tips: [
      "메데인은 '영원한 봄의 도시'로 연중 20~25°C의 쾌적한 날씨를 자랑합니다.",
      "코무나 13은 낮에 방문하고 혼자 다니지 마세요. 그룹 투어를 이용하세요.",
      "메트로카드(미덴+)를 구입하면 지하철, 케이블카를 통합 이용할 수 있습니다.",
      "8월 꽃 축제(페리아 데 라스 플로레스)는 메데인 최대 행사입니다.",
    ],
  },
};

export const colombiaAttractionDetails: Record<string, AttractionDetail> = {
  // ===== CARTAGENA =====
  "colombia/caribbean/cartagena/ciudad-amurallada": {
    heroGradient: "from-yellow-400 to-orange-700",
    description: "16~17세기 스페인이 카리브해 황금 무역로를 방어하기 위해 건설한 11km의 거대한 성벽 도시. 유네스코 세계유산으로 지정된 이 역사 지구는 식민지 시대 건축, 알록달록한 꽃 장식 발코니, 코블스톤 거리가 동화 같은 세계를 만듭니다.",
    visitInfo: {
      hours: "24시간 (성벽 위 산책 무료)",
      admission: "구시가지 무료 / 카스티요 산 펠리페 성인 COP 35,000",
      address: "Ciudad Amurallada, Cartagena de Indias, Bolivar",
    },
    highlights: [
      "카리브해를 향해 뻗은 웅장한 식민지 성벽",
      "알록달록한 꽃 장식 발코니와 코블스톤 거리",
      "볼리바르 광장과 시청·대성당",
      "인키시시온 궁전 (종교재판 역사 박물관)",
      "일몰 시 황금빛으로 물드는 성벽 위 산책",
    ],
    nearbyAttractions: ["카스티요 산 펠리페 데 바라하스", "헤체마네마 지구", "카르타헤나 항구"],
    photoTips: "성벽 위에서 카리브해를 배경으로 일몰 사진을 찍으세요. 골목 깊은 곳의 알록달록한 꽃 발코니는 아침 빛이 드는 10~11시가 가장 아름답습니다.",
    tips: [
      "일몰 1시간 전에 성벽에 올라가 카리브해 노을을 감상하세요.",
      "카르타헤나는 습하고 더웁니다. 이른 아침이나 저녁 시간에 도보 관광을 추천합니다.",
      "성벽 구시가지 내 식당은 가격이 높습니다. 헤체마네마 지구가 더 저렴합니다.",
      "마차(코체) 투어로 구시가지를 돌아보는 것도 낭만적인 경험입니다.",
    ],
  },
  // ===== BOGOTA =====
  "colombia/andean/bogota/cerro-monserrate": {
    heroGradient: "from-gray-500 to-blue-800",
    description: "해발 3,152m에서 보고타 전체를 압도적으로 내려다보는 성지이자 전망 명소. 하얀 성당이 있는 정상까지 케이블카나 곤돌라, 또는 2.8km 도보 순례길로 오를 수 있습니다. 보고타의 250만 호 불빛이 분지를 가득 채우는 야경이 특히 아름답습니다.",
    visitInfo: {
      hours: "월~토 07:00~24:00 / 일 05:00~24:00",
      admission: "케이블카 왕복 성인 COP 29,500 / 아동 COP 20,400",
      address: "Cerro de Monserrate, Bogota, Cundinamarca",
      website: "https://cerromonserrate.com",
    },
    highlights: [
      "보고타 시내 전체를 조망하는 파노라마 전망",
      "해발 3,152m의 흰색 몬세라테 성당",
      "야경 - 250만 호 불빛이 가득한 분지 전경",
      "도보 순례길 (2.8km, 오르막)",
      "정상의 레스토랑과 카페",
    ],
    nearbyAttractions: ["라 칸델라리아 역사 지구", "금 박물관", "보테로 박물관"],
    photoTips: "일몰 후 야경이 가장 아름답습니다. 성당을 배경으로 보고타 전경을 광각으로 담으면 인상적입니다. 케이블카 안에서 도시가 멀어지는 장면도 좋은 사진이 됩니다.",
    tips: [
      "주말에는 케이블카 대기 시간이 길 수 있습니다. 평일 방문을 추천합니다.",
      "해발 3,152m로 보고타(2,600m)보다 더 높습니다. 두꺼운 옷을 준비하세요.",
      "도보 순례길은 왕복 2시간. 운동화와 물을 챙기세요.",
      "정상 레스토랑에서 식사하며 야경을 즐기는 것이 낭만적인 선택입니다.",
    ],
  },
  // ===== MEDELLIN =====
  "colombia/andean/medellin/comuna-13": {
    heroGradient: "from-pink-500 to-purple-700",
    description: "1990년대 메데인 최고의 위험 지역에서 세계가 주목하는 도시 재생의 기적으로 변신한 코무나 13. 외부 에스칼라토르 설치와 주민 주도 예술 프로젝트로 과거의 폭력을 창의적 에너지로 승화시켰습니다. 지금은 세계 최고 수준의 야외 그래피티 갤러리입니다.",
    visitInfo: {
      hours: "08:00~18:00",
      admission: "무료 (가이드 투어 유료 약 USD 15~25)",
      address: "Comuna 13, Medellin, Antioquia",
    },
    highlights: [
      "세계적 수준의 대형 그래피티 벽화들",
      "야외 무빙 에스칼라토르 (6개 구간)",
      "힙합·댄스·BMX 자전거 거리 문화",
      "주민들의 도시 재생 이야기가 담긴 벽화들",
      "파노라마 전망의 옥상 카페",
    ],
    nearbyAttractions: ["보테로 광장", "메트로케이블 산토 도밍고", "에스파냐 도서관"],
    photoTips: "컬러풀한 벽화들을 배경으로 촬영하되, 벽화 아티스트나 주민들의 이미지가 담길 경우 허락을 구하는 것이 예의입니다. 에스칼라토르 위에서 내려다보는 메데인 시내 전경도 좋습니다.",
    tips: [
      "현지 가이드와 함께하는 투어를 강력히 추천합니다. 지역의 역사와 이야기를 생생하게 들을 수 있습니다.",
      "낮(9~17시) 시간에만 방문하세요. 저녁에는 위험할 수 있습니다.",
      "에스칼라토르는 무료로 이용 가능합니다. 메트로 카드가 필요 없습니다.",
      "지역 주민들의 경제에 도움이 되도록 현지 상점에서 음료나 기념품을 구매하세요.",
    ],
  },
};
