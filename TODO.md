# 여행 정보 사이트 - TODO

## 프로젝트 개요
- **목적:** 국내/해외 여행 정보 종합 사이트 (취미 프로젝트)
- **핵심 컨셉:** 육각 타일 드릴다운 네비게이션 + AI 여행 견적 에이전트
- **네비게이션 흐름:** 대륙 → 권역 → 국가 → 여행지 상세
- **월 비용:** $0~10 (AI API 사용량에 따라)

---

## Done (완료)

### 기획 & 자료조사
- [x] 프로젝트 방향 설정 (육각 타일 네비게이션 + AI 견적 에이전트)
- [x] 기술 스택 결정 (Next.js 15, Tailwind, shadcn/ui, Supabase, Drizzle, Vercel AI SDK)
- [x] 기술 조사 문서 작성 (RESEARCH_FINDINGS.md) — DB, ORM, UI 라이브러리, 상태관리, AI 프로바이더 비교
- [x] 기능 명세서 작성 (FEATURE_BREAKDOWN.md) — 여행지 정보, 플래너, 커뮤니티, API 목록
- [x] 육각 타일 구현 조사 (HEX_TILE_RESEARCH.md) — CSS clip-path, Framer Motion, 데이터 구조, 반응형
- [x] 육각 타일 계층 구조 정의 (해외 9개 대륙→권역→국가, 국내 6개 권역→시도)
- [x] AI 견적 에이전트 아키텍처 설계 (도구 목록, 견적서 UI, 비용 관리 전략)
- [x] Phase 1~3 로드맵 수립
- [x] Git 저장소 초기화

### 프로젝트 초기 설정
- [x] Next.js 15 프로젝트 생성 (TypeScript, Tailwind, App Router, src-dir)
- [x] shadcn/ui 초기화 (components.json, utils.ts)
- [x] 핵심 의존성 설치 (zustand, tanstack-query, zod, drizzle, framer-motion, ai-sdk, dnd-kit, supabase)
- [x] ESLint + Prettier 설정
- [x] 프로젝트 디렉토리 구조 세팅 (components, lib, hooks, types, actions, data)
- [x] 환경 변수 설정 (.env.local — 서버, Supabase, AI, API 키)
- [x] 타입 정의 (geography.ts — GeoNode, TravelEstimate, BudgetBreakdown 등)
- [x] 지리 데이터 구축 (geography.ts — 해외 9대륙+권역+60개국, 국내 6권역+17시도)
- [x] geo-tree 유틸리티 (buildGeoTree, getChildren, getAncestors, getBreadcrumbs)
- [x] Supabase 클라이언트 설정 (supabase.ts)
- [x] AI 에이전트 기본 설정 (agent.ts — 모델, 시스템 프롬프트)
- [x] 빌드 성공 확인

---

## 기술 스택
| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) + TypeScript |
| 스타일링 | Tailwind CSS + shadcn/ui |
| 네비게이션 UI | CSS clip-path 육각 타일 + Framer Motion |
| AI 에이전트 | Vercel AI SDK + Claude API (Anthropic) |
| DB/Auth/Storage | Supabase (PostgreSQL) |
| ORM | Drizzle ORM |
| 상태관리 | Zustand + TanStack Query v5 |
| 유효성검증 | Zod |
| 드래그&드롭 | @dnd-kit/core |
| 배포 | Vercel (무료) |

## 육각 타일 계층 구조 (해외)
```
대륙 (9개)
├── 유럽 → 남유럽, 북유럽, 동유럽, 서유럽, 중유럽, 발칸
│            └── 중유럽 → 체코, 독일, 오스트리아, 스위스, 폴란드, 헝가리 ...
├── 동아시아 → 일본, 중국, 대만, 몽골
├── 동남아시아 → 태국, 베트남, 인도네시아, 필리핀, 말레이시아 ...
├── 중동 → UAE, 터키, 이스라엘, 요르단, 오만 ...
├── 아프리카 → 북아프리카, 동아프리카, 서아프리카, 남아프리카
├── 북미 → 미국, 캐나다
├── 중미 → 멕시코, 쿠바, 코스타리카 ...
├── 남미 → 브라질, 아르헨티나, 페루, 칠레, 콜롬비아 ...
└── 오세아니아 → 호주, 뉴질랜드, 피지 ...
```

## 육각 타일 계층 구조 (국내)
```
국내여행
├── 수도권 → 서울, 경기, 인천
├── 강원 → 강원
├── 충청 → 대전, 세종, 충북, 충남
├── 전라 → 광주, 전북, 전남
├── 경상 → 부산, 대구, 울산, 경북, 경남
└── 제주 → 제주
```

---

## Phase 1: MVP (~3-4개월)

### 1. 프로젝트 초기 설정
- [x] Next.js 프로젝트 생성 (TypeScript, Tailwind, App Router)
- [x] shadcn/ui 초기화 및 기본 컴포넌트 설치
- [ ] Supabase 프로젝트 생성 및 연동
- [ ] Drizzle ORM 설정 및 DB 스키마 정의
- [ ] Supabase Auth 설정 (이메일, Kakao, Google 로그인)
- [x] 프로젝트 디렉토리 구조 세팅
- [x] ESLint, Prettier 설정
- [x] Git 저장소 초기화

### 2. 육각 타일 네비게이션
- [ ] HexTile 컴포넌트 (CSS clip-path, 배경 이미지, 그라데이션 오버레이)
- [ ] HexGrid 컴포넌트 (벌집 배열 레이아웃, flex-wrap)
- [ ] HexNavigator 상위 컴포넌트 (드릴다운 상태 관리)
- [ ] HexBreadcrumb 컴포넌트 (유럽 > 중유럽 > 체코)
- [ ] 지리 데이터 구조 정의 (GeoNode: id, name, level, parentId, imageUrl)
- [ ] 트리 유틸리티 (getChildren, getAncestors, getBreadcrumbs)
- [ ] Framer Motion 애니메이션 (stagger 입장, 호버 확대, 레벨 전환)
- [ ] 국내/해외 최상위 토글
- [ ] 대륙 → 권역 → 국가 드릴다운 데이터 구축
- [ ] 국내 권역 → 시/도 드릴다운 데이터 구축
- [ ] 국가/시도 클릭 시 여행지 상세 페이지로 이동
- [ ] 반응형 (데스크탑: 180px 타일 / 태블릿: 140px / 모바일: 110px)
- [ ] 검색바 + 자동완성 (타일 네비게이션 건너뛰고 바로 이동)

### 3. 여행지 정보
- [ ] 여행지 상세 페이지 (탭 레이아웃: 개요/관광지/맛집/숙소)
- [ ] 한국관광공사 TourAPI 연동 (areaBasedList, searchKeyword, detailCommon 등)
- [ ] 날씨 위젯 (국내: 기상청 API / 해외: OpenWeatherMap)
- [ ] 환율 계산기 (해외, Frankfurter API)
- [ ] 기본 비자/안전 정보 (해외, 정적 데이터)
- [ ] 사진 갤러리 (TourAPI 이미지)
- [ ] data.go.kr TourAPI 키 발급

### 4. AI 여행 견적 에이전트 (핵심 기능)
- [ ] Vercel AI SDK 설치 (ai, @ai-sdk/react, @ai-sdk/anthropic)
- [ ] AI 채팅 API 라우트 설정 (/api/chat/route.ts, streamText)
- [ ] useChat 훅으로 채팅 UI 구현
- [ ] 여행 견적 전문 시스템 프롬프트 작성
- [ ] 견적 입력 폼 (목적지, 날짜, 인원, 예산 범위, 여행 스타일)
- [ ] AI 도구 구현:
  - [ ] searchFlights — 항공권 검색 (Amadeus API / 스크래핑)
  - [ ] searchAccommodation — 숙소 검색 및 가격 비교
  - [ ] createItinerary — Day-by-Day 일정 생성
  - [ ] estimateBudget — 항목별 예산 산출 (항공/숙박/식비/교통/입장료/쇼핑)
  - [ ] getWeather — 여행 기간 날씨 예보
  - [ ] getExchangeRate — 현지 환율 조회
  - [ ] searchRestaurants — 맛집 추천
  - [ ] getVisaInfo — 비자/입국 요건 조회
- [ ] **견적서 UI 컴포넌트** (AI 응답을 구조화된 카드로 렌더링):
  - [ ] 항공권 카드 (출발/도착, 시간, 가격, 항공사, 직항/경유)
  - [ ] 숙소 카드 (이름, 가격/박, 위치, 평점)
  - [ ] 일정 타임라인 (Day 1, Day 2... 활동별 시간/비용)
  - [ ] 예산 요약표 (카테고리별 합계, 총 예상 비용, 1인당 비용)
  - [ ] 환율 정보 바
- [ ] 견적서 저장 기능 (Supabase에 저장, 나중에 다시 보기)
- [ ] 견적서 공유 링크 생성
- [ ] 견적서 PDF 내보내기
- [ ] 대화형 수정 ("숙소를 좀 더 저렴한 걸로 바꿔줘", "하루 더 추가해줘")
- [ ] 추천 프롬프트 ("프라하 3박4일 2인 150만원 견적", "제주 가족여행 견적")
- [ ] 속도 제한 (in-memory, 시간당 N회)

### 5. 여행 플래너 (견적서 → 실제 계획)
- [ ] 견적서를 "내 여행"으로 전환하는 버튼
- [ ] Day-by-Day 타임라인 뷰
- [ ] 드래그 & 드롭 일정 수정 (@dnd-kit)
- [ ] 예산 실시간 추적 (견적 vs 실제 지출)
- [ ] 기본 체크리스트 (해변/도시/등산 템플릿)

### 6. 사용자 시스템
- [ ] 회원가입/로그인 (이메일 + Kakao/Google OAuth)
- [ ] 기본 프로필 (이름, 사진, 소개)
- [ ] 여행지/일정 북마크

### 7. 커뮤니티 (최소)
- [ ] 여행 후기 작성 (글 + 사진 + 여행지 태그 + 별점)
- [ ] 여행지별 후기 목록 조회
- [ ] 댓글 (단일 레벨)
- [ ] 좋아요

---

## Phase 2: 기능 강화 (~2-3개월)

### 육각 타일 개선
- [ ] 타일 호버 시 미니 정보 카드 (인구, 언어, 통화, 베스트 시즌)
- [ ] 라이트/다크 테마
- [ ] 타일 배경 이미지 계절별 변경
- [ ] 애니메이션 세분화 (확대 전환, 줌인 효과)

### AI 견적 에이전트 강화
- [ ] 모델 라우팅 (간단한 질문: 저렴한 모델 / 견적 생성: Claude)
- [ ] 프롬프트 캐싱 (비용 최적화)
- [ ] 대화 히스토리 저장 (Supabase)
- [ ] 견적 비교 기능 (같은 목적지 다른 예산/스타일로 2개 견적 비교)
- [ ] 견적서 버전 관리 ("v1: 호텔", "v2: 에어비앤비로 변경")
- [ ] 모바일 바텀시트 채팅 UX
- [ ] 항공권 가격 알림 (저장한 견적의 항공권 가격 변동 추적)

### 여행지 정보 확장
- [ ] 축제/행사 캘린더 (searchFestival)
- [ ] 숙박 리스팅 (searchStay)
- [ ] 반려동물 동반 필터 (detailPetTour)
- [ ] 연관 여행지 추천
- [ ] 해외 비자 상세 + 안전 정보 (외교부 API)

### 플래너 강화
- [ ] 활동별 시간 배정
- [ ] 경로 최적화 제안
- [ ] 예산 카테고리 파이차트
- [ ] 지출 내역 입력 (여행 중 실제 사용 금액 vs 견적 비교)
- [ ] 여행 공유 링크

### 커뮤니티 확장
- [ ] 전체 게시물 유형 (후기/팁/Q&A/포토/일정공유)
- [ ] 대댓글 (2단계)
- [ ] @멘션 + 알림
- [ ] 배지 & 레벨 시스템
- [ ] 컬렉션 (북마크 정리)
- [ ] 팔로우 + 피드
- [ ] 알림 센터

---

## Phase 3: 고급 기능 (~3-4개월)

### AI 견적 에이전트 고급
- [ ] 여행 스타일 학습 (사용자 히스토리 기반 개인화 견적)
- [ ] 그룹 여행 견적 (인원별 분담금 자동 계산)
- [ ] 시즌별 가격 비교 ("같은 일정 3월 vs 5월 얼마 차이?")
- [ ] 다국어 지원 (한/영/일)

### 고급 플래너
- [ ] 인기 일정 템플릿
- [ ] 실시간 공동 편집
- [ ] 일정 복제 & 수정
- [ ] 비용 분배 (누가 얼마 냈는지)
- [ ] 오프라인 일정 접근 (PWA)

### 커뮤니티 고급
- [ ] 동행 구하기
- [ ] 개인 여행 지도 (프로필)
- [ ] 여행 통계 대시보드
- [ ] 콘텐츠 모더레이션 시스템

### 플랫폼
- [ ] PWA + 푸시 알림
- [ ] 어필리에이트 링크 (호텔/항공)
- [ ] 프리미엄 기능 티어

---

## API 키 발급 체크리스트
- [ ] Anthropic API (AI 견적 에이전트) — console.anthropic.com
- [ ] Amadeus Self-Service API (항공권 검색) — developers.amadeus.com
- [ ] 공공데이터포털 TourAPI — data.go.kr
- [ ] 기상청 단기예보 API — data.go.kr
- [ ] Supabase 프로젝트 — supabase.com
- [ ] OpenWeatherMap (해외 날씨) — openweathermap.org
- [ ] Frankfurter (환율) — 키 불필요
- [ ] Kakao Developers (소셜 로그인용) — developers.kakao.com
- [ ] Vercel (배포) — vercel.com

---

## 참고 자료
- [기술 조사 문서](./RESEARCH_FINDINGS.md)
- [기능 명세서](./FEATURE_BREAKDOWN.md)
- [육각 타일 조사](./HEX_TILE_RESEARCH.md)
