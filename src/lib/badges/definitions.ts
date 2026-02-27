export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  emoji: string;
  /** 조건 설명 (UI 표시용) */
  conditionLabel: string;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: "first-post",
    name: "첫 발걸음",
    description: "처음으로 게시글을 작성했습니다.",
    emoji: "✍️",
    conditionLabel: "게시글 1개 작성",
  },
  {
    id: "active-writer",
    name: "활발한 작가",
    description: "게시글을 10개 이상 작성했습니다.",
    emoji: "📝",
    conditionLabel: "게시글 10개 작성",
  },
  {
    id: "popular",
    name: "인기 여행자",
    description: "게시글에 좋아요를 50개 이상 받았습니다.",
    emoji: "❤️",
    conditionLabel: "좋아요 50개 받기",
  },
  {
    id: "globetrotter",
    name: "글로브트로터",
    description: "5개국 이상의 여행 후기를 작성했습니다.",
    emoji: "🌍",
    conditionLabel: "5개국 이상 여행 후기",
  },
  {
    id: "helpful",
    name: "도움이 되는 여행자",
    description: "댓글을 20개 이상 작성했습니다.",
    emoji: "💬",
    conditionLabel: "댓글 20개 이상 작성",
  },
  {
    id: "early-bird",
    name: "얼리버드",
    description: "가입 후 7일 이내에 첫 게시글을 작성했습니다.",
    emoji: "🐦",
    conditionLabel: "가입 후 7일 내 첫 게시글",
  },
  {
    id: "photographer",
    name: "여행 사진가",
    description: "사진이 포함된 게시글을 5개 이상 작성했습니다.",
    emoji: "📷",
    conditionLabel: "사진 포함 게시글 5개",
  },
  {
    id: "travel-guru",
    name: "여행 구루",
    description: "게시글 50개 이상, 좋아요 200개 이상을 달성했습니다.",
    emoji: "🏆",
    conditionLabel: "게시글 50개 + 좋아요 200개",
  },
];

export const BADGE_MAP = new Map<string, BadgeDefinition>(
  BADGE_DEFINITIONS.map((b) => [b.id, b])
);

export function getBadge(id: string): BadgeDefinition | undefined {
  return BADGE_MAP.get(id);
}
