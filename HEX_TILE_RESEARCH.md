# 육각 타일 네비게이션 - 기술 조사

## 구현 방식: CSS clip-path (라이브러리 없음)

### 왜 라이브러리를 안 쓰는가
- react-hexgrid: 2022년 이후 유지보수 중단, 주간 다운로드 ~700건
- honeycomb-grid: 수학 라이브러리만 제공 (렌더링 없음), 게임용 좌표계 불필요
- 우리 용도는 게임 그리드가 아니라 **네비게이션 UI** → 6~12개 타일의 시각적 배치만 필요
- CSS clip-path로 충분하고, 표준 DOM 이벤트 + 배경 이미지 + 접근성 모두 지원

### 핵심 CSS

```css
/* 포인티탑 육각형 */
.hex-tile {
  --hex-size: 180px;
  width: var(--hex-size);
  height: calc(var(--hex-size) * 1.1547);
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  position: relative;
  cursor: pointer;
}
```

### 반응형 사이즈
- 데스크탑: `--hex-size: 180px` (한 줄 4~5개)
- 태블릿: `--hex-size: 140px` (한 줄 3~4개)
- 모바일: `--hex-size: 110px` (한 줄 2~3개)
- 100px 이하 시 리스트 레이아웃으로 폴백

### 애니메이션 (Framer Motion)
- **등장**: staggerChildren 0.08초, spring 물리 (scale 0.5→1, opacity 0→1)
- **호버**: scale 1.08, zIndex 10, 배경 이미지 scale 1.15
- **클릭**: scale 0.95 (탭 피드백)
- **레벨 전환**: AnimatePresence mode="wait", 이전 타일 shrink out → 새 타일 spring in
- **주의**: Next.js App Router와 AnimatePresence 충돌 → 클라이언트 상태로 드릴다운 관리 (라우트 변경 X)

### 데이터 구조

```typescript
type DrillLevel = 'continent' | 'subregion' | 'country' | 'city';

interface GeoNode {
  id: string;
  slug: string;
  name: string;       // 한국어
  nameEn: string;     // 영어
  level: DrillLevel;
  imageUrl: string;
  icon?: string;       // 이모지 국기 등
  parentId: string | null;
  childCount?: number;
}
```

- Flat Map<string, GeoNode> + parentId 참조 (중첩 트리 X)
- getChildren(tree, parentId) / getAncestors(tree, nodeId) 유틸리티

### 컴포넌트 구조
```
components/hex-navigation/
  HexNavigator.tsx    — 드릴다운 상태 관리 (useState)
  HexGrid.tsx         — 타일 배열 + AnimatePresence
  HexTile.tsx         — 개별 타일 (이미지, 라벨, 호버)
  HexBreadcrumb.tsx   — 경로 표시 (유럽 > 중유럽 > 체코)
```

### 디자인 팁
- 고화질 랜드마크/풍경 사진을 타일 배경으로
- 하단 그라데이션 오버레이로 텍스트 가독성 확보
- 이미지 색온도 통일 (filter: saturate(0.8) brightness(0.9))
- drop-shadow로 타일 테두리 효과 (clip-path는 border 무시)

### 참고 자료
- [Red Blob Games: Hexagonal Grids](https://www.redblobgames.com/grids/hexagons/)
- [CSS-Tricks: Hexagons and Beyond](https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/)
- [Clippy CSS clip-path maker](https://bennettfeely.com/clippy/)
- [Motion (Framer Motion) docs](https://motion.dev/docs/react-motion-component)
