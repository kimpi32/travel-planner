import type { CityDetail, AttractionDetail } from "../city-details";

export const vietnamCityDetails: Record<string, CityDetail> = {
  // ===== HANOI & NORTH =====
  "vietnam/hanoi-north/hanoi": {
    heroGradient: "from-red-600 to-yellow-500",
    description: "천년 고도 베트남의 수도. 호안끼엠 호수를 중심으로 구시가지의 활기찬 거리, 프랑스 식민지 건축물, 노천 카페가 어우러진 동남아시아에서 가장 매력적인 도시 중 하나입니다.",
    bestTime: "10~12월, 3~4월 (봄·가을 선선한 시기)",
    stayArea: "호안끼엠 호수 / 구시가지 주변",
    transport: "택시, Grab, 시내버스, 오토바이",
    districts: [
      { name: "구시가지", nameEn: "Old Quarter", description: "36개 거리마다 다른 상품을 파는 1,000년 역사의 상업 지구.", highlights: ["항다오 거리", "항마 거리", "동쑤안 시장", "야시장"] },
      { name: "호안끼엠", nameEn: "Hoan Kiem", description: "호안끼엠 호수를 중심으로 한 하노이의 문화적 심장부.", highlights: ["호안끼엠 호수", "응옥선 사당", "하노이 오페라하우스"] },
      { name: "바딘", nameEn: "Ba Dinh", description: "호찌민 묘소와 정부 청사가 위치한 정치 중심 지역.", highlights: ["호찌민 묘소", "주석궁", "한기둥 사원"] },
    ],
    attractions: [
      { name: "호안끼엠 호수", nameEn: "Hoan Kiem Lake", description: "하노이의 심장부에 자리한 아름다운 호수로 전설의 거북이 이야기가 깃들어 있습니다.", category: "호수", tip: "이른 아침이나 주말 저녁 보행자 거리 시간에 방문하세요." },
      { name: "구시가지", nameEn: "Old Quarter", description: "1,000년 역사의 36개 거리로 이루어진 하노이에서 가장 활기찬 지역.", category: "거리", tip: "금~일 야시장은 19시부터 시작됩니다." },
      { name: "호찌민 묘소", nameEn: "Ho Chi Minh Mausoleum", description: "베트남 건국의 아버지 호찌민이 안치된 국가적 성지.", category: "역사", tip: "월·금 오후 휴관, 반바지·민소매 입장 불가." },
      { name: "문묘", nameEn: "Temple of Literature", description: "1070년 설립된 베트남 최초의 대학으로 유교 사원의 아름다운 건축이 인상적입니다.", category: "사원" },
      { name: "탕롱 수상인형극", nameEn: "Thang Long Water Puppet Theatre", description: "천년 전통의 베트남 수상인형극을 감상할 수 있는 극장.", category: "문화", tip: "좌석이 빨리 매진되니 오전에 미리 예매하세요." },
    ],
    dayTrips: [
      { name: "하롱베이", nameEn: "Ha Long Bay", description: "세계자연유산, 기암괴석 사이로 크루즈 여행.", travelTime: "차량 약 2.5~3시간", gradient: "from-emerald-400 to-teal-700" },
      { name: "닌빈", nameEn: "Ninh Binh", description: "'육지의 하롱베이'로 불리는 석회암 절경과 보트 투어.", travelTime: "차량 약 2시간", gradient: "from-lime-400 to-green-700" },
    ],
    localFood: [
      { name: "쌀국수(퍼)", description: "하노이식 쌀국수, 맑은 소고기 육수에 담백한 맛이 특징.", emoji: "🍜" },
      { name: "분짜", description: "숯불 돼지고기와 쌀국수를 느억맘 소스에 찍어 먹는 하노이 대표 음식.", emoji: "🥘" },
      { name: "에그커피", description: "달걀 노른자를 거품 낸 하노이 명물 커피.", emoji: "☕" },
    ],
    tips: [
      "Grab 앱은 택시·오토바이 이동에 필수입니다.",
      "구시가지 횡단보도에서는 일정 속도로 걸으면 오토바이가 피해갑니다.",
      "호안끼엠 호수 주변은 금~일 저녁 차량 통제, 보행자 천국이 됩니다.",
      "현지 식당은 점심 11~13시, 저녁 17~19시가 피크타임입니다.",
    ],
  },
  "vietnam/hanoi-north/ha-long-bay": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "약 1,600개의 석회암 섬과 기암괴석이 에메랄드빛 바다 위에 솟아 있는 세계자연유산. 크루즈를 타고 동굴, 카약, 수상마을을 탐험하는 것이 하이라이트입니다.",
    bestTime: "10~12월, 3~5월 (맑고 선선한 시기)",
    stayArea: "크루즈 선상 숙박 / 하롱시 바이차이",
    transport: "하노이에서 셔틀버스 또는 리무진밴",
    districts: [
      { name: "바이차이", nameEn: "Bai Chay", description: "하롱베이 관광의 거점 지역으로 호텔과 선착장이 밀집.", highlights: ["하롱 국제 크루즈 터미널", "바이차이 해변", "하롱 야시장"] },
    ],
    attractions: [
      { name: "하롱베이 크루즈", nameEn: "Ha Long Bay Cruise", description: "1박 2일 또는 2박 3일 크루즈로 석회암 섬 사이를 항해하며 동굴·카약·수영을 즐깁니다.", category: "크루즈", tip: "1박 크루즈가 가성비 최고, 2박이면 란하베이까지 탐험 가능." },
      { name: "승솟동굴", nameEn: "Sung Sot Cave", description: "하롱베이 최대 규모의 석회암 동굴로 환상적인 종유석이 가득합니다.", category: "동굴" },
      { name: "티톱 섬", nameEn: "Ti Top Island", description: "정상까지 올라가면 하롱베이 360도 파노라마를 감상할 수 있습니다.", category: "섬", tip: "400계단을 올라야 하니 편한 신발 필수." },
    ],
    dayTrips: [
      { name: "깟바 섬", nameEn: "Cat Ba Island", description: "하롱베이 최대의 섬으로 국립공원과 란하베이 카약이 유명.", travelTime: "크루즈 또는 쾌속선 약 1시간", gradient: "from-cyan-400 to-blue-700" },
    ],
    localFood: [
      { name: "해산물 구이", description: "갓 잡은 새우, 오징어, 조개를 숯불에 구운 하롱베이 명물.", emoji: "🦐" },
      { name: "차까(생선전)", description: "흰살 생선을 튀겨 쌀국수·딜과 함께 먹는 북부 요리.", emoji: "🐟" },
    ],
    tips: [
      "크루즈는 최소 1주 전 온라인 예약을 권장합니다.",
      "멀미약을 미리 준비하세요, 파도가 있는 날이 있습니다.",
      "6~8월 우기에는 태풍으로 크루즈 취소 가능성이 있습니다.",
    ],
  },
  "vietnam/hanoi-north/sapa": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "해발 1,600m에 위치한 산악 도시. 계단식 논이 산비탈을 따라 펼쳐진 장관, 소수민족 마을 트레킹, 판시판 산 정복이 매력인 베트남 북부 대표 여행지입니다.",
    bestTime: "9~11월 (황금빛 벼 수확), 3~5월 (초록 논밭)",
    stayArea: "사파 타운 센터 / 홈스테이",
    transport: "하노이에서 야간열차+버스 또는 리무진 약 5~6시간",
    districts: [
      { name: "사파 타운", nameEn: "Sapa Town", description: "프랑스 식민지 시대에 만들어진 산악 휴양 도시의 중심.", highlights: ["사파 성당", "사파 시장", "함롱산"] },
    ],
    attractions: [
      { name: "사파 계단식 논", nameEn: "Sapa Rice Terraces", description: "산비탈을 따라 층층이 펼쳐진 계단식 논으로 베트남에서 가장 아름다운 풍경 중 하나.", category: "자연", tip: "9~10월 수확철 황금빛 논이 가장 장관입니다." },
      { name: "판시판 산", nameEn: "Fansipan Mountain", description: "해발 3,143m '인도차이나의 지붕'으로 케이블카 또는 트레킹으로 정상에 오를 수 있습니다.", category: "산", tip: "케이블카 왕복 약 700,000₫, 트레킹은 1~2일 소요." },
      { name: "깟깟 마을", nameEn: "Cat Cat Village", description: "흑몽족 소수민족 마을로 전통 가옥, 직물 공예, 폭포를 만나볼 수 있습니다.", category: "마을" },
    ],
    dayTrips: [
      { name: "따반 마을", nameEn: "Ta Van Village", description: "자이족 마을에서 홈스테이하며 소수민족 문화 체험.", travelTime: "도보 또는 차량 약 1시간", gradient: "from-yellow-400 to-amber-700" },
    ],
    localFood: [
      { name: "탕코(훈제 물소고기)", description: "사파 특산 훈제 물소고기로 쫄깃하고 풍미가 깊습니다.", emoji: "🥩" },
      { name: "따우푸 사파", description: "사파식 두부 구이, 새우젓 소스에 찍어 먹습니다.", emoji: "🫘" },
    ],
    tips: [
      "사파는 연중 쌀쌀하니 긴팔 옷과 우비를 준비하세요.",
      "트레킹 시 현지 가이드를 고용하면 소수민족 마을 방문이 더 풍부해집니다.",
      "주말 사파 시장에서 소수민족 수공예품을 구매할 수 있습니다.",
    ],
  },

  // ===== CENTRAL =====
  "vietnam/central/hue": {
    heroGradient: "from-purple-500 to-indigo-800",
    description: "응우옌 왕조의 수도였던 고도. 흐엉강을 따라 펼쳐진 황궁, 왕릉, 사원이 유네스코 세계문화유산으로 지정되어 있으며 베트남 궁중 문화의 정수를 느낄 수 있습니다.",
    bestTime: "2~4월 (건기, 선선한 시기)",
    stayArea: "흐엉강 남쪽 / 구시가지",
    transport: "택시, Grab, 자전거, 오토바이",
    districts: [
      { name: "시타델 지구", nameEn: "Citadel Area", description: "황궁과 왕성이 있는 후에의 역사적 핵심 지역.", highlights: ["대내(황궁)", "오문", "태화전"] },
      { name: "흐엉강 남안", nameEn: "South Bank", description: "흐엉강 남쪽의 현대적 시가지와 레스토랑, 카페 밀집 지역.", highlights: ["동바 시장", "안딘궁", "후에 야시장"] },
    ],
    attractions: [
      { name: "후에 황궁", nameEn: "Imperial Citadel", description: "응우옌 왕조 13대 황제의 거처로 베이징 자금성을 모델로 건설된 대규모 성채 단지.", category: "궁전", tip: "가이드 투어를 이용하면 역사적 맥락을 더 깊이 이해할 수 있습니다." },
      { name: "티엔무 사원", nameEn: "Thien Mu Pagoda", description: "흐엉강변에 우뚝 선 7층 탑으로 후에의 상징이자 400년 역사의 불교 사원.", category: "사원", tip: "보트를 타고 흐엉강에서 접근하면 가장 아름답습니다." },
      { name: "카이딘 왕릉", nameEn: "Khai Dinh Tomb", description: "동서양 건축이 융합된 독특한 왕릉으로 화려한 모자이크 장식이 인상적.", category: "왕릉" },
      { name: "민망 왕릉", nameEn: "Minh Mang Tomb", description: "자연과 조화를 이룬 아름다운 정원 속 왕릉으로 후에 왕릉 중 가장 웅장합니다.", category: "왕릉" },
    ],
    dayTrips: [
      { name: "다낭 / 호이안", nameEn: "Da Nang / Hoi An", description: "하이반 고개를 넘어 다낭과 호이안까지 당일치기 여행.", travelTime: "차량 약 2~3시간", gradient: "from-orange-400 to-red-700" },
    ],
    localFood: [
      { name: "분보후에", description: "매콤한 소고기 쌀국수로 후에를 대표하는 향토 음식.", emoji: "🍜" },
      { name: "반베오", description: "쌀떡 위에 새우가루를 올린 후에식 찐떡 요리.", emoji: "🥟" },
      { name: "넴루이", description: "허브와 함께 라이스페이퍼에 싸 먹는 후에식 돼지고기 완자.", emoji: "🌯" },
    ],
    tips: [
      "후에 유적지 통합 티켓(530,000₫)을 구매하면 여러 곳을 저렴하게 방문할 수 있습니다.",
      "흐엉강 보트 투어로 티엔무 사원과 왕릉을 함께 둘러보세요.",
      "9~11월은 우기로 폭우가 잦으니 피하는 것이 좋습니다.",
      "후에 궁중 음식 체험은 고급 레스토랑에서 코스로 즐길 수 있습니다.",
    ],
  },
  "vietnam/central/da-nang": {
    heroGradient: "from-sky-400 to-blue-700",
    description: "베트남 중부 최대 도시이자 해변 휴양의 거점. 미케 해변, 바나힐 골든브릿지, 오행산 등 자연과 도시가 조화를 이루며 최근 급성장하는 관광 도시입니다.",
    bestTime: "3~8월 (건기, 해변 시즌)",
    stayArea: "미케 해변 / 한강 주변",
    transport: "택시, Grab, 오토바이",
    districts: [
      { name: "한강변", nameEn: "Han River Area", description: "다낭의 중심부로 야경이 아름다운 한강 다리들이 명소.", highlights: ["용다리", "한강다리", "다낭 대성당"] },
      { name: "미케 해변", nameEn: "My Khe Beach", description: "포브스 선정 세계 6대 해변 중 하나로 리조트와 해산물 식당이 줄지어 있습니다.", highlights: ["미케 해변", "논느억 해변", "해변 리조트"] },
    ],
    attractions: [
      { name: "골든 브릿지 바나힐", nameEn: "Golden Bridge Ba Na Hills", description: "거대한 두 손이 다리를 떠받치는 형상의 세계적으로 유명한 포토스팟. 바나힐 테마파크 내 위치.", category: "전망대", tip: "평일 오전 일찍 가야 사진 촬영 대기 시간이 짧습니다." },
      { name: "오행산", nameEn: "Marble Mountains", description: "다섯 개의 석회암·대리석 언덕에 불교 동굴 사원이 자리한 신비로운 명소.", category: "자연", tip: "엘리베이터로 올라가서 계단으로 내려오는 코스를 추천합니다." },
      { name: "용다리", nameEn: "Dragon Bridge", description: "길이 666m의 용 형상 다리로 주말 밤 불과 물을 뿜는 쇼가 인기.", category: "다리", tip: "토·일 21시에 불쇼가 진행됩니다." },
    ],
    dayTrips: [
      { name: "호이안", nameEn: "Hoi An", description: "등불의 도시 호이안 구시가지 당일치기.", travelTime: "차량 약 30~40분", gradient: "from-amber-400 to-orange-700" },
    ],
    localFood: [
      { name: "미꽝", description: "다낭 대표 비빔 쌀국수로 쫄깃한 면에 다양한 토핑이 올라갑니다.", emoji: "🍜" },
      { name: "반쎄오", description: "바삭한 베트남식 부침개로 새우와 숙주가 들어갑니다.", emoji: "🥞" },
      { name: "해산물 구이", description: "미케 해변가 해산물 식당에서 즐기는 신선한 해산물 바비큐.", emoji: "🦀" },
    ],
    tips: [
      "바나힐은 하루 일정을 잡고 오전 일찍 출발하세요.",
      "용다리 불쇼는 토·일 21시, 다리 동쪽에서 관람이 좋습니다.",
      "다낭~호이안은 Grab으로 약 150,000₫이면 이동 가능합니다.",
    ],
  },
  "vietnam/central/hoi-an": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "16~17세기 국제 무역항으로 번성했던 등불의 도시. 유네스코 세계문화유산으로 지정된 구시가지에 중국, 일본, 베트남 건축이 어우러져 독특한 분위기를 자아냅니다.",
    bestTime: "2~5월 (건기, 쾌적한 날씨)",
    stayArea: "구시가지 / 안방 해변",
    transport: "자전거, 도보, Grab",
    districts: [
      { name: "구시가지", nameEn: "Ancient Town", description: "유네스코 세계문화유산 지역으로 등불이 밝혀진 거리와 전통 건축이 가득.", highlights: ["내원교", "복건회관", "떤키 고가"] },
      { name: "안방 해변", nameEn: "An Bang Beach", description: "호이안 구시가지에서 자전거로 15분 거리의 아름다운 해변.", highlights: ["안방 해변", "비치 카페", "서핑 스쿨"] },
    ],
    attractions: [
      { name: "호이안 구시가지", nameEn: "Ancient Town", description: "등불이 밝혀진 거리, 전통 가옥, 사원, 회관이 밀집한 유네스코 세계문화유산 지역.", category: "구시가지", tip: "매월 음력 14일 등불 축제 때 가장 환상적입니다." },
      { name: "내원교(일본교)", nameEn: "Japanese Bridge", description: "1593년 일본 상인들이 건설한 호이안의 상징적 다리로 20,000₫ 지폐에도 새겨져 있습니다.", category: "다리", tip: "이른 아침이 사진 촬영에 가장 좋습니다." },
      { name: "복건회관", nameEn: "Fujian Assembly Hall", description: "중국 복건성 출신 상인들이 세운 화려한 중국식 사원 겸 회관.", category: "사원" },
      { name: "떤키 고가", nameEn: "Tan Ky Old House", description: "200년 된 상인 가옥으로 중국·일본·베트남 건축 양식이 융합된 대표적 유적.", category: "고가" },
    ],
    dayTrips: [
      { name: "미선 유적지", nameEn: "My Son Sanctuary", description: "참파 왕국의 힌두교 사원 유적으로 유네스코 세계문화유산.", travelTime: "차량 약 1시간", gradient: "from-red-400 to-brown-700" },
      { name: "참섬", nameEn: "Cham Islands", description: "스노클링과 다이빙이 가능한 아름다운 해양보호구역.", travelTime: "쾌속선 약 20분", gradient: "from-cyan-400 to-teal-700" },
    ],
    localFood: [
      { name: "까오라우", description: "호이안에서만 먹을 수 있는 특산 비빔 쌀국수, 쫄깃한 두꺼운 면이 특징.", emoji: "🍜" },
      { name: "화이트로즈", description: "새우를 쌀떡으로 감싼 호이안식 만두, 하얀 장미 모양.", emoji: "🥟" },
      { name: "반미", description: "호이안 반미 거리의 원조 베트남 바게트 샌드위치.", emoji: "🥖" },
    ],
    tips: [
      "구시가지 통합 티켓(120,000₫)으로 5곳을 선택해 입장할 수 있습니다.",
      "맞춤 옷(아오자이, 정장)은 24시간 내 제작 가능, 가격 흥정은 필수.",
      "매월 음력 14일 풀문 페스티벌 때 전기를 끄고 등불만 밝히는 환상적인 야경.",
      "자전거 대여(20,000~30,000₫/일)가 가장 편한 이동 수단입니다.",
    ],
  },

  // ===== HO CHI MINH CITY & SOUTH =====
  "vietnam/hcmc-south/ho-chi-minh-city": {
    heroGradient: "from-rose-500 to-red-800",
    description: "사이공으로도 불리는 베트남 최대 경제 도시. 프랑스 식민지 건축과 초고층 빌딩이 공존하며, 전쟁 역사와 활기찬 길거리 음식 문화가 어우러진 열정적인 도시입니다.",
    bestTime: "12~4월 (건기)",
    stayArea: "1군(벤탄시장 주변) / 3군",
    transport: "택시, Grab, 오토바이, 메트로(1호선)",
    districts: [
      { name: "1군", nameEn: "District 1", description: "사이공의 중심부로 관광 명소, 쇼핑, 레스토랑이 밀집.", highlights: ["벤탄시장", "노트르담 대성당", "중앙우체국", "응우옌후에 보행거리"] },
      { name: "3군", nameEn: "District 3", description: "현지인의 일상을 느낄 수 있는 카페와 로컬 식당이 가득한 지역.", highlights: ["전쟁증적박물관", "통일궁", "사이공 카페 거리"] },
      { name: "투덕", nameEn: "Thu Duc", description: "신도시 개발 지역으로 랜드마크 81 초고층 빌딩이 위치.", highlights: ["랜드마크 81", "빈홈 센트럴파크"] },
    ],
    attractions: [
      { name: "전쟁증적박물관", nameEn: "War Remnants Museum", description: "베트남 전쟁의 참상을 생생히 전하는 박물관으로 매년 100만명 이상이 방문합니다.", category: "박물관", tip: "내용이 충격적일 수 있으니 마음의 준비를 하세요." },
      { name: "벤탄 시장", nameEn: "Ben Thanh Market", description: "사이공의 상징적 재래시장으로 기념품, 먹거리, 의류를 한자리에서 만날 수 있습니다.", category: "시장", tip: "가격 흥정은 처음 제시가의 50~60%부터 시작하세요." },
      { name: "꾸찌 터널", nameEn: "Cu Chi Tunnels", description: "베트남 전쟁 당시 게릴라전에 사용된 지하 터널 네트워크로 직접 들어가볼 수 있습니다.", category: "역사", tip: "벤즈억 구역이 관광객이 적고 더 원형에 가깝습니다." },
      { name: "통일궁", nameEn: "Reunification Palace", description: "남베트남 대통령궁으로 1975년 사이공 함락의 역사적 현장.", category: "역사" },
      { name: "노트르담 대성당", nameEn: "Notre-Dame Cathedral", description: "1880년 프랑스 식민지 시기에 건설된 로마네스크 양식의 벽돌 성당.", category: "성당" },
      { name: "중앙우체국", nameEn: "Central Post Office", description: "에펠탑 설계자 구스타브 에펠이 디자인한 프랑스 식민지 건축물.", category: "건축물" },
    ],
    dayTrips: [
      { name: "메콩 델타", nameEn: "Mekong Delta", description: "수상시장과 열대 과일 농장을 보트로 탐험하는 남부의 하이라이트.", travelTime: "차량 약 1.5~2시간", gradient: "from-green-400 to-emerald-700" },
    ],
    localFood: [
      { name: "반미", description: "바게트에 고기, 파테, 채소를 넣은 베트남 대표 길거리 음식.", emoji: "🥖" },
      { name: "껌땀", description: "부러진 쌀로 지은 밥 위에 숯불 돼지갈비를 올린 사이공 소울푸드.", emoji: "🍚" },
      { name: "고이꾸온", description: "신선한 채소와 새우를 라이스페이퍼로 감싼 월남쌈.", emoji: "🥗" },
    ],
    tips: [
      "1군 중심부는 도보로 충분히 돌아볼 수 있습니다.",
      "Grab 바이크는 택시보다 빠르고 저렴한 이동 수단입니다.",
      "꾸찌 터널은 반나절 투어(오전 추천)로 충분합니다.",
      "벤탄시장 옆 야시장은 18시부터 열리며 길거리 음식이 풍부합니다.",
    ],
  },
  "vietnam/hcmc-south/mekong-delta": {
    heroGradient: "from-green-400 to-emerald-700",
    description: "메콩강이 남중국해로 흘러가기 전 9개의 지류로 갈라지는 광대한 삼각주 지역. 수상시장, 열대 과일 농장, 코코넛 캔디 공장 등 물 위의 삶을 체험할 수 있습니다.",
    bestTime: "12~5월 (건기)",
    stayArea: "껀터 시내 / 빈롱",
    transport: "호찌민에서 투어 버스 또는 Grab",
    districts: [
      { name: "껀터", nameEn: "Can Tho", description: "메콩 델타 최대 도시로 까이랑 수상시장의 거점.", highlights: ["까이랑 수상시장", "빈투이 과일 정원", "껀터 야시장"] },
    ],
    attractions: [
      { name: "까이랑 수상시장", nameEn: "Cai Rang Floating Market", description: "메콩 델타 최대의 수상시장으로 새벽부터 보트 위에서 과일과 농산물을 거래합니다.", category: "시장", tip: "새벽 5~6시에 출발해야 가장 활기찬 모습을 볼 수 있습니다." },
      { name: "코코넛 캔디 공장", nameEn: "Coconut Candy Workshop", description: "코코넛으로 캔디를 만드는 전 과정을 견학하고 시식할 수 있습니다.", category: "체험" },
      { name: "수로 보트 투어", nameEn: "Canal Boat Tour", description: "좁은 수로를 작은 보트로 누비며 열대 정글 속 현지인의 삶을 엿보는 투어.", category: "투어" },
    ],
    dayTrips: [
      { name: "빈롱", nameEn: "Vinh Long", description: "조용한 메콩 삼각주 마을에서 홈스테이와 농촌 체험.", travelTime: "차량 약 1시간", gradient: "from-lime-400 to-green-700" },
    ],
    localFood: [
      { name: "후띠에우", description: "메콩 델타 대표 돼지고기 쌀국수로 맑은 국물이 특징.", emoji: "🍜" },
      { name: "반쏘이쩨", description: "코코넛 밀크와 타로, 바나나가 들어간 달콤한 디저트 수프.", emoji: "🥥" },
    ],
    tips: [
      "수상시장은 새벽이 핵심! 7시 이후에는 대부분 철수합니다.",
      "호찌민에서 1일 투어도 가능하지만 1박이면 더 여유롭게 즐길 수 있습니다.",
      "모기가 많으니 벌레 퇴치제를 꼭 준비하세요.",
    ],
  },
};

export const vietnamAttractionDetails: Record<string, AttractionDetail> = {
  // ===== HANOI =====
  "vietnam/hanoi-north/hanoi/hoan-kiem-lake": {
    heroGradient: "from-green-500 to-emerald-700",
    description: "하노이의 심장이자 영혼인 호수. '환검'(칼을 돌려준 호수)이라는 이름은 레러이 왕이 거북이에게 보검을 돌려준 전설에서 유래합니다. 호수 중앙의 거북탑과 북쪽의 응옥선 사당이 아름답습니다.",
    history: "15세기 레러이 왕이 명나라를 물리친 후 황금 거북이가 호수에서 나타나 보검을 가져갔다는 전설이 내려옵니다. 호수 한가운데 터틀타워(거북탑)가 이 전설을 기념합니다.",
    visitInfo: {
      hours: "호수: 24시간 개방 / 응옥선 사당: 07:00~18:00",
      admission: "호수 무료 / 응옥선 사당 30,000₫",
      address: "Hoàn Kiếm, Hà Nội",
    },
    highlights: [
      "응옥선 사당과 붉은 태훅 다리의 아름다운 전경",
      "주말 보행자 거리에서 현지인과 함께하는 여가 시간",
      "이른 아침 호수 주변 태극권 수련 풍경",
      "야간 조명에 비친 호수의 환상적 야경",
    ],
    nearbyAttractions: ["구시가지", "하노이 오페라하우스", "성 요셉 대성당", "동쑤안 시장"],
    photoTips: "태훅 다리 전경은 호수 동쪽에서 찍는 것이 가장 좋습니다. 이른 아침 안개 낀 호수도 인상적입니다.",
    tips: [
      "금~일 저녁 보행자 거리 시간에 방문하면 활기찬 분위기를 즐길 수 있습니다.",
      "호수 한 바퀴는 도보로 약 30분 소요됩니다.",
      "응옥선 사당은 오전 이른 시간이 한적합니다.",
    ],
  },
  "vietnam/hanoi-north/hanoi/old-quarter": {
    heroGradient: "from-red-500 to-amber-600",
    description: "1,000년 역사를 자랑하는 하노이의 상업 심장부. 36개 거리마다 실크, 은, 종이 등 특정 상품을 전문으로 파는 전통이 이어지며, 좁은 골목마다 노천 식당과 카페가 가득합니다.",
    history: "11세기 리 왕조 시대부터 형성된 상업 지구로, 각 거리 이름이 취급하는 상품(항 = 거리)을 나타냅니다. 항다오(실크), 항박(은), 항마(종이) 등 전통이 여전히 남아 있습니다.",
    visitInfo: {
      hours: "24시간 (야시장: 금~일 19:00~23:00)",
      admission: "무료",
      address: "Old Quarter, Hoàn Kiếm, Hà Nội",
    },
    highlights: [
      "36개 특화 거리에서의 쇼핑 체험",
      "금~일 야시장의 활기찬 분위기",
      "노천 비어호이(맥주집)에서의 저녁",
      "거리 음식 투어 (분짜, 쌀국수, 에그커피)",
    ],
    nearbyAttractions: ["호안끼엠 호수", "동쑤안 시장", "항다오 거리", "맥주 거리"],
    photoTips: "좁은 골목과 오토바이 행렬은 광각 렌즈로 담으면 역동적인 사진을 얻을 수 있습니다.",
    tips: [
      "길 건너기는 일정한 속도로 걸으면 오토바이가 알아서 피합니다.",
      "비어호이(생맥주)는 한 잔에 5,000~10,000₫(약 300~600원)으로 세계에서 가장 저렴합니다.",
      "소매치기 주의, 가방은 항상 앞으로 메세요.",
    ],
  },
  "vietnam/hanoi-north/hanoi/ho-chi-minh-mausoleum": {
    heroGradient: "from-red-700 to-yellow-500",
    description: "베트남 건국의 아버지 호찌민 주석이 유리관 안에 안치된 국가적 성지. 엄숙한 분위기 속에서 베트남 현대사의 핵심 인물을 만나볼 수 있습니다.",
    history: "1969년 서거한 호찌민 주석의 유해를 보존하기 위해 1973~1975년에 건설되었습니다. 레닌 묘소를 모델로 했으며, 매년 수백만 명의 베트남인과 관광객이 참배합니다.",
    visitInfo: {
      hours: "화~목 07:30~10:30, 토~일 07:30~11:00 (월·금 휴관, 10~11월 유지보수 휴관)",
      admission: "무료",
      address: "2 Hùng Vương, Ba Đình, Hà Nội",
    },
    highlights: [
      "호찌민 주석의 유리관 안치 묘소 참배",
      "주석궁과 호찌민의 소박한 고상가옥 관람",
      "한기둥 사원(못꼿 사원) 방문",
      "바딘 광장에서의 국기 게양·하강 의식",
    ],
    nearbyAttractions: ["주석궁", "한기둥 사원", "호찌민 박물관", "바딘 광장"],
    photoTips: "묘소 내부는 촬영 금지입니다. 외부 건물과 바딘 광장은 촬영 가능합니다.",
    tips: [
      "반바지, 민소매, 슬리퍼는 입장 불가합니다. 무릎 아래 옷을 착용하세요.",
      "가방, 카메라는 입구에서 보관해야 합니다.",
      "오전 일찍 갈수록 대기 줄이 짧습니다.",
      "묘소, 주석궁, 한기둥 사원을 합쳐 약 2시간이면 충분합니다.",
    ],
  },

  // ===== HA LONG BAY =====
  "vietnam/hanoi-north/ha-long-bay/ha-long-bay-cruise": {
    heroGradient: "from-emerald-400 to-teal-700",
    description: "에메랄드빛 바다 위에 약 1,600개의 석회암 섬이 솟아 있는 세계자연유산을 크루즈로 탐험합니다. 동굴 탐험, 카약, 수상마을 방문, 선상 석양 감상까지 잊을 수 없는 경험을 선사합니다.",
    history: "전설에 따르면 용의 어머니가 적을 물리치기 위해 입에서 보석을 내뿜었고, 그것이 바다에 떨어져 수천 개의 섬이 되었다고 합니다. 1994년 유네스코 세계자연유산에 등재되었습니다.",
    visitInfo: {
      hours: "크루즈 출발: 보통 11:30~12:00 (하롱 국제 터미널)",
      admission: "1박 크루즈 3,500,000~8,000,000₫ (등급별 상이)",
      address: "Ha Long International Cruise Port, Bãi Cháy, Hạ Long",
      website: "https://www.halongbay.com.vn",
    },
    highlights: [
      "석회암 기봉 사이를 누비는 환상적인 항해",
      "승솟동굴·티엔꿍동굴 탐험",
      "카약으로 숨겨진 석호 탐험",
      "선상에서 바라보는 일몰과 일출",
    ],
    nearbyAttractions: ["승솟동굴", "티톱 섬", "깟바 섬", "란하베이"],
    photoTips: "일출과 일몰 시간이 최고의 포토 타임입니다. 선상 갑판 최상층에서 파노라마를 촬영하세요.",
    tips: [
      "1박 2일 크루즈가 가성비 최고이며, 2박이면 한적한 란하베이까지 방문 가능합니다.",
      "6~8월 태풍 시즌에는 크루즈 취소 가능성이 있으니 여행자 보험을 가입하세요.",
      "멀미약과 자외선 차단제를 꼭 준비하세요.",
      "크루즈 등급(3~5성)에 따라 시설 차이가 크니 리뷰를 꼼꼼히 확인하세요.",
    ],
  },

  // ===== SAPA =====
  "vietnam/hanoi-north/sapa/sapa-rice-terraces": {
    heroGradient: "from-green-500 to-emerald-800",
    description: "해발 1,000~1,800m 산비탈을 따라 층층이 깎아 만든 계단식 논으로, 수백 년간 소수민족들이 일군 살아있는 예술 작품입니다. 계절마다 초록, 황금, 물거울 등 다채로운 풍경을 보여줍니다.",
    history: "흑몽족, 자이족 등 소수민족들이 수백 년에 걸쳐 산비탈을 개간하여 만든 계단식 논입니다. 무엉호아 계곡의 계단식 논은 베트남 국가 유산으로 지정되어 있습니다.",
    visitInfo: {
      hours: "24시간 개방 (트레킹: 일출 후~일몰 전 권장)",
      admission: "무엉호아 계곡 입장료 75,000₫",
      address: "Mường Hoa Valley, Sa Pa, Lào Cai",
    },
    highlights: [
      "9~10월 황금빛 벼 수확철의 장관",
      "3~5월 물을 댄 논에 비친 하늘 풍경",
      "소수민족 마을 트레킹과 홈스테이",
      "무엉호아 계곡의 파노라마 뷰포인트",
    ],
    nearbyAttractions: ["깟깟 마을", "판시판 산", "따반 마을", "은폭포"],
    photoTips: "이른 아침 안개가 걷히는 시간이 가장 드라마틱한 사진을 얻을 수 있습니다. 드론 촬영이 가능한 지역입니다.",
    tips: [
      "우기(6~8월)에는 길이 미끄러우니 트레킹화 필수입니다.",
      "현지 소수민족 가이드를 고용하면 숨겨진 뷰포인트를 안내받을 수 있습니다.",
      "수확철(9~10월)이 가장 아름답지만 관광객도 가장 많습니다.",
    ],
  },

  // ===== HUE =====
  "vietnam/central/hue/imperial-citadel": {
    heroGradient: "from-purple-500 to-indigo-800",
    description: "응우옌 왕조 13대 황제의 거처이자 베트남 마지막 왕조의 권력 중심지. 베이징 자금성을 모델로 건설된 이중 성벽 안에 태화전, 자금성, 정원 등이 펼쳐져 있습니다.",
    history: "1803년 자롱 황제가 건설을 시작하여 수십 년에 걸쳐 완성되었습니다. 1968년 베트남 전쟁 구정 대공세 때 심하게 파괴되었으나 지속적으로 복원 중이며, 1993년 유네스코 세계문화유산에 등재되었습니다.",
    visitInfo: {
      hours: "07:00~17:30 (하절기 ~18:00)",
      admission: "200,000₫ (통합 티켓 530,000₫)",
      address: "Thuận Thành, Huế",
      website: "https://www.huedisan.com.vn",
    },
    highlights: [
      "오문(정문)에서의 장엄한 입장",
      "태화전의 화려한 황실 건축",
      "자금성 내부 왕실 생활 공간",
      "구정 대공세 전쟁의 흔적이 남은 건물",
    ],
    nearbyAttractions: ["티엔무 사원", "동바 시장", "안딘궁", "카이딘 왕릉"],
    photoTips: "오문 앞 연못에 반영되는 건물이 아름답습니다. 오전 빛이 정문을 비출 때가 최적입니다.",
    tips: [
      "가이드 투어(약 200,000₫)를 이용하면 역사적 배경을 더 깊이 이해할 수 있습니다.",
      "전체 둘러보려면 최소 2~3시간은 필요합니다.",
      "통합 티켓을 구매하면 왕릉 2곳을 추가로 방문할 수 있습니다.",
      "한낮에는 매우 더우니 오전 일찍 방문하세요.",
    ],
  },
  "vietnam/central/hue/thien-mu-pagoda": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "흐엉강 북쪽 언덕 위에 우뚝 선 7층 팔각 석탑으로 후에의 비공식적 상징입니다. 1601년에 건립된 이래 400년 넘게 후에를 지켜온 불교 성지입니다.",
    history: "1601년 응우옌 호앙 영주가 건립했으며, 현재의 7층 탑은 1844년 티에우찌 황제가 세웠습니다. 1963년 불교 탄압에 항의하여 사이공에서 분신한 틱꽝득 스님이 이 사원을 떠날 때 탔던 자동차가 전시되어 있습니다.",
    visitInfo: {
      hours: "06:00~18:00",
      admission: "무료",
      address: "Kim Long, Huế",
    },
    highlights: [
      "21m 높이의 7층 팔각 석탑 '푸옥두옌'",
      "흐엉강이 내려다보이는 언덕 위 전망",
      "틱꽝득 스님의 자동차 전시",
      "고즈넉한 사원 정원 산책",
    ],
    nearbyAttractions: ["후에 황궁", "민망 왕릉", "카이딘 왕릉", "안딘궁"],
    photoTips: "흐엉강에서 보트를 타고 접근하면 강 위에서 탑 전경을 촬영할 수 있습니다.",
    tips: [
      "보트 투어로 방문하면 강에서 바라보는 사원의 아름다운 전경을 감상할 수 있습니다.",
      "사원이므로 단정한 복장이 필요합니다.",
      "후에 황궁에서 자전거로 약 20분 거리입니다.",
    ],
  },

  // ===== DA NANG =====
  "vietnam/central/da-nang/golden-bridge-ba-na-hills": {
    heroGradient: "from-yellow-400 to-amber-700",
    description: "해발 1,400m 바나힐 위에 거대한 두 손이 떠받치는 150m 길이의 황금빛 다리. 2018년 개장 이후 세계적인 화제가 된 포토스팟으로, 구름 위를 걷는 듯한 환상적인 경험을 선사합니다.",
    history: "2018년 6월 개장한 바나힐 선월드의 보행 전용 다리입니다. 이끼 낀 거대한 석조 손 위에 올려진 듯한 디자인은 산의 신이 황금 띠를 내민다는 콘셉트로, 개장 직후 전 세계 SNS에서 바이럴되었습니다.",
    visitInfo: {
      hours: "07:00~22:00 (바나힐 선월드 운영 시간)",
      admission: "바나힐 입장료 + 케이블카 포함 900,000₫ (성인)",
      address: "An Sơn, Hòa Ninh, Hòa Vang, Đà Nẵng",
      website: "https://www.banahills.com.vn",
    },
    highlights: [
      "거대한 두 손이 떠받치는 골든 브릿지 위 산책",
      "세계 최장 논스톱 케이블카(5,801m) 탑승",
      "프랑스 마을 테마파크 산책",
      "환상적인 산악 풍경과 구름 바다",
    ],
    nearbyAttractions: ["오행산", "미케 해변", "용다리", "참 조각 박물관"],
    photoTips: "오전 8~9시가 안개와 함께 가장 환상적인 사진을 얻을 수 있습니다. 사람이 적은 평일이 촬영에 유리합니다.",
    tips: [
      "하루 일정을 잡고 오전 일찍(7시 오픈) 출발하세요.",
      "산 위는 기온이 낮으니 긴팔을 준비하세요.",
      "골든 브릿지 외에도 놀이기구, 왁스 뮤지엄 등 즐길 거리가 많습니다.",
      "주말과 공휴일은 매우 혼잡하니 평일 방문을 추천합니다.",
    ],
  },

  // ===== HOI AN =====
  "vietnam/central/hoi-an/ancient-town": {
    heroGradient: "from-amber-400 to-orange-700",
    description: "16~17세기 동남아시아 최대 국제 무역항이었던 호이안의 구시가지. 중국, 일본, 베트남, 유럽 건축이 어우러진 독특한 거리에 밤이면 형형색색 등불이 밝혀져 환상적인 분위기를 연출합니다.",
    history: "16~17세기 중국, 일본, 포르투갈, 네덜란드 상인들이 교역하던 동남아 최대 무역항이었습니다. 18세기 이후 항구 기능이 쇠퇴하면서 오히려 옛 모습이 그대로 보존되었고, 1999년 유네스코 세계문화유산에 등재되었습니다.",
    visitInfo: {
      hours: "08:00~21:00 (구시가지 보행자 거리는 야간까지)",
      admission: "통합 티켓 120,000₫ (5곳 선택 입장)",
      address: "Phố cổ Hội An, Quảng Nam",
    },
    highlights: [
      "등불이 밝혀진 야간 거리 산책",
      "매월 음력 14일 풀문 페스티벌(등불 축제)",
      "투본강 위 소원 등불 띄우기",
      "전통 가옥, 회관, 사원 등 역사 건축 탐방",
    ],
    nearbyAttractions: ["내원교(일본교)", "복건회관", "떤키 고가", "안방 해변"],
    photoTips: "해 질 녘~밤 시간대가 등불 사진에 최적입니다. 투본강변에서 등불과 건물 반영을 함께 담으세요.",
    tips: [
      "통합 티켓은 구시가지 내 매표소에서 구매하며, 5곳을 선택해 입장합니다.",
      "음력 14일 풀문 페스티벌 때 전기를 끄고 등불만 밝히는 환상적 야경을 감상하세요.",
      "맞춤 옷 주문은 제작에 24시간 필요하니 도착 첫날 주문하세요.",
      "낮에는 매우 더우니 오전과 저녁 시간대에 집중 관광하세요.",
    ],
  },
  "vietnam/central/hoi-an/japanese-bridge": {
    heroGradient: "from-rose-400 to-red-700",
    description: "1593년 일본 상인들이 건설한 호이안의 상징적 다리. 일본인 거주지역과 중국인 거주지역을 잇는 지붕 덮인 다리로, 베트남 20,000₫ 지폐에도 새겨져 있을 만큼 대표적인 랜드마크입니다.",
    history: "1593년 일본 상인 공동체가 건설했으며, 이후 중국식·베트남식 요소가 추가되었습니다. 다리 양쪽에는 원숭이와 개 석상이 있는데, 건설이 원숭이의 해에 시작되어 개의 해에 완공되었다는 전설이 있습니다.",
    visitInfo: {
      hours: "08:00~21:00",
      admission: "호이안 구시가지 통합 티켓(120,000₫) 포함",
      address: "Nguyễn Thị Minh Khai, Hội An",
    },
    highlights: [
      "지붕 덮인 다리의 독특한 일본-베트남-중국 융합 건축",
      "다리 중앙의 작은 사원 참배",
      "양쪽 입구의 원숭이와 개 석상",
      "야간 조명에 비친 다리의 아름다운 모습",
    ],
    nearbyAttractions: ["호이안 구시가지", "복건회관", "떤키 고가", "투본강"],
    photoTips: "이른 아침 관광객이 없을 때가 가장 깨끗한 사진을 찍을 수 있습니다. 야간 조명도 아름답습니다.",
    tips: [
      "이른 아침(7~8시)이 사진 촬영 최적 시간입니다.",
      "통합 티켓의 5곳 중 하나로 입장 가능합니다.",
      "다리 위에서 투본강의 풍경을 감상하세요.",
    ],
  },

  // ===== HO CHI MINH CITY =====
  "vietnam/hcmc-south/ho-chi-minh-city/war-remnants-museum": {
    heroGradient: "from-gray-600 to-red-800",
    description: "베트남 전쟁의 참상을 실물 사진, 무기, 문서로 생생히 전하는 박물관. 에이전트 오렌지의 피해, 전쟁 포로의 고통, 종군 사진작가들의 기록을 통해 전쟁의 실체를 마주합니다.",
    history: "1975년 9월 개관한 박물관으로, 원래 '미국과 중국 전쟁범죄 전시관'이었다가 1995년 현재 이름으로 변경되었습니다. 매년 100만 명 이상이 방문하는 호찌민시 가장 인기 있는 박물관입니다.",
    visitInfo: {
      hours: "07:30~18:00 (연중무휴)",
      admission: "40,000₫",
      address: "28 Võ Văn Tần, Quận 3, TP. Hồ Chí Minh",
      website: "https://www.baotangchungtichchientranh.vn",
    },
    highlights: [
      "종군 사진작가 래리 버로우즈 등의 전쟁 사진 전시",
      "에이전트 오렌지(고엽제) 피해 전시실",
      "야외 전시된 전투기, 탱크, 포탄 등 실물 무기",
      "호아로 수용소 재현 감방",
    ],
    nearbyAttractions: ["통일궁", "노트르담 대성당", "중앙우체국", "벤탄시장"],
    photoTips: "야외 전시 무기와 전투기는 사진 촬영이 자유롭습니다. 실내 전시는 플래시 금지입니다.",
    tips: [
      "감정적으로 무거운 내용이 많으니 마음의 준비를 하세요.",
      "영어 설명이 잘 되어 있어 가이드 없이도 충분합니다.",
      "방문 소요 시간은 약 1.5~2시간입니다.",
      "통일궁과 함께 방문하면 동선이 효율적입니다.",
    ],
  },
  "vietnam/hcmc-south/ho-chi-minh-city/ben-thanh-market": {
    heroGradient: "from-orange-400 to-red-600",
    description: "사이공의 상징적 재래시장으로 100년 넘는 역사를 자랑합니다. 기념품, 의류, 먹거리, 커피 등 베트남의 모든 것을 한자리에서 만날 수 있으며, 야간에는 주변 거리가 야시장으로 변합니다.",
    history: "프랑스 식민지 시대인 1912년에 현재 위치에 건설되었으며, 시계탑이 있는 정문은 사이공의 아이콘이 되었습니다. 100년 넘게 현지인과 관광객 모두에게 사랑받는 시장입니다.",
    visitInfo: {
      hours: "시장: 06:00~18:00 / 야시장: 18:00~23:00",
      admission: "무료",
      address: "Chợ Bến Thành, Quận 1, TP. Hồ Chí Minh",
    },
    highlights: [
      "시장 내부 먹자골목에서 베트남 길거리 음식 체험",
      "베트남 커피, 건과일, 향신료 등 기념품 쇼핑",
      "야시장에서의 저녁 식사와 쇼핑",
      "시계탑 정문의 클래식한 외관",
    ],
    nearbyAttractions: ["응우옌후에 보행거리", "전쟁증적박물관", "통일궁", "사이공 스카이덱"],
    photoTips: "시장 정문 시계탑은 사이공의 아이콘입니다. 내부는 좁고 어두우니 밝은 렌즈가 유리합니다.",
    tips: [
      "가격 흥정은 처음 제시가의 50~60%부터 시작하세요.",
      "시장 내부 먹자골목의 음식은 관광지 가격이니 주변 노점이 더 저렴합니다.",
      "야시장은 18시부터 시장 주변 거리에서 열립니다.",
      "소매치기가 많으니 소지품을 주의하세요.",
    ],
  },
  "vietnam/hcmc-south/ho-chi-minh-city/cu-chi-tunnels": {
    heroGradient: "from-amber-700 to-green-800",
    description: "베트남 전쟁 당시 베트콩이 사용한 총 길이 250km에 달하는 지하 터널 네트워크. 좁은 터널에 직접 들어가보고, 부비트랩, 지하 병원, 회의실 등을 체험할 수 있는 생생한 전쟁 역사 현장입니다.",
    history: "1940년대 프랑스 식민지 시기부터 파기 시작하여 베트남 전쟁 동안 대규모로 확장되었습니다. 지하 3층 구조에 병원, 학교, 무기고까지 갖춘 도시를 이루었으며, 미군의 집중 폭격에도 불구하고 베트콩의 핵심 전략 거점이었습니다.",
    visitInfo: {
      hours: "07:00~17:00 (연중무휴)",
      admission: "벤딘: 110,000₫ / 벤즈억: 90,000₫",
      address: "Phú Hiệp, Củ Chi, TP. Hồ Chí Minh",
    },
    highlights: [
      "실제 터널에 들어가 기어가보는 체험",
      "부비트랩과 함정 시연 전시",
      "전쟁 당시 무기 제작 과정 재현",
      "AK-47 사격 체험(유료)",
    ],
    nearbyAttractions: ["전쟁증적박물관", "통일궁", "까오다이 사원"],
    photoTips: "터널 내부는 매우 어둡고 좁아 플래시 촬영이 필요합니다. 야외 전시물은 자유롭게 촬영 가능합니다.",
    tips: [
      "벤즈억(Ben Duoc) 구역이 관광객이 적고 더 원형에 가깝습니다.",
      "긴 바지와 운동화를 신으세요. 터널 내부는 좁고 습합니다.",
      "호찌민시에서 반나절 투어(오전 추천)로 충분합니다.",
      "폐소공포증이 있으면 넓힌 구간만 체험 가능합니다.",
    ],
  },
};
