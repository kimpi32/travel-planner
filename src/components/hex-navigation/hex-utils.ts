import type { GeoNode } from "@/types/geography";

/**
 * 아이템 목록을 벌집 패턴 행으로 분할
 * 홀수 행(1st, 3rd)은 넓게, 짝수 행(2nd, 4th)은 1개 적게 → 센터링하면 자연 오프셋
 */
export function splitIntoHoneycombRows<T>(items: T[]): T[][] {
  const count = items.length;
  if (count === 0) return [];
  if (count <= 3) return [items];

  const maxPerRow = count <= 4 ? 2 : count <= 6 ? 3 : count <= 8 ? 4 : 5;

  const rows: T[][] = [];
  let i = 0;
  let isWideRow = true;

  while (i < items.length) {
    const rowSize = isWideRow ? maxPerRow : Math.max(1, maxPerRow - 1);
    const slice = items.slice(i, i + Math.min(rowSize, items.length - i));
    if (slice.length > 0) rows.push(slice);
    i += slice.length;
    isWideRow = !isWideRow;
  }

  return rows;
}

/** 노드 ID 기반 플레이스홀더 그라데이션 색상 */
const GRADIENTS: Record<string, string> = {
  // 6대주
  asia: "from-rose-500 to-red-700",
  europe: "from-blue-500 to-indigo-700",
  africa: "from-yellow-500 to-amber-700",
  "north-america": "from-sky-400 to-blue-700",
  "south-america": "from-fuchsia-500 to-purple-700",
  oceania: "from-cyan-400 to-sky-700",
  // 아시아 권역
  "east-asia": "from-rose-400 to-red-600",
  "southeast-asia": "from-emerald-400 to-teal-700",
  "south-asia": "from-orange-400 to-rose-600",
  "central-asia": "from-amber-400 to-orange-600",
  "middle-east": "from-amber-500 to-orange-700",
  // 유럽 권역
  "western-europe": "from-blue-400 to-blue-600",
  "central-europe": "from-indigo-400 to-indigo-600",
  "southern-europe": "from-orange-400 to-red-600",
  "northern-europe": "from-sky-300 to-blue-600",
  "eastern-europe": "from-slate-400 to-slate-700",
  balkans: "from-teal-400 to-emerald-700",
  // 아프리카 권역
  "north-africa": "from-yellow-400 to-amber-600",
  "east-africa": "from-orange-400 to-amber-600",
  "west-africa": "from-amber-400 to-yellow-600",
  "southern-africa": "from-green-400 to-emerald-600",
  // 국내 권역
  "domestic-capital": "from-violet-500 to-purple-700",
  "domestic-gangwon": "from-emerald-500 to-green-700",
  "domestic-chungcheong": "from-blue-400 to-indigo-600",
  "domestic-jeolla": "from-green-400 to-teal-600",
  "domestic-gyeongsang": "from-rose-400 to-pink-600",
  "domestic-jeju": "from-orange-400 to-amber-600",
};

export function getPlaceholderGradient(node: GeoNode): string {
  if (GRADIENTS[node.id]) return GRADIENTS[node.id];
  if (node.parentId && GRADIENTS[node.parentId]) return GRADIENTS[node.parentId];

  // 해시 기반 폴백
  const hash = node.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const colors = [
    "from-blue-500 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-rose-500 to-pink-600",
    "from-amber-500 to-orange-600",
    "from-violet-500 to-purple-600",
    "from-cyan-500 to-sky-600",
  ];
  return colors[hash % colors.length];
}
