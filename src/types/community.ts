export type PostType = "all" | "review" | "tip" | "itinerary" | "question" | "general" | "buddy";

export type TravelStyle = "budget" | "balanced" | "comfort" | "luxury";
export type GenderPreference = "any" | "same";

export interface BuddyMeta {
  startDate: string;       // "YYYY-MM-DD"
  endDate: string;         // "YYYY-MM-DD"
  headcount: number;       // 모집 인원 수
  travelStyle: TravelStyle;
  genderPreference: GenderPreference;
  contact: string;         // 연락 방법 (카카오ID, 오픈채팅 링크 등)
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  title?: string;
  activities: {
    time: string;
    title: string;
    place?: string;
    category: string;
    estimatedCost: number;
    notes?: string;
  }[];
}

export interface ItineraryMeta {
  startDate: string;
  endDate: string;
  travelers: number;
  days: ItineraryDay[];
  totalBudget?: number;
}

export interface Author {
  id: string;
  displayName: string;
  avatarUrl?: string;
}

export interface Post {
  id: string;
  type: Exclude<PostType, "all">;
  title: string;
  body: string;
  destination?: string;
  thumbnailUrl?: string;
  imageUrls?: string[];
  rating?: number;
  authorId: string;
  author: Author;
  likeCount: number;
  commentCount: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  body: string;
  authorId: string;
  author: Author;
  likeCount: number;
  isLiked?: boolean;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  displayName: string;
  bio?: string;
  avatarUrl?: string;
  visitedCountries: number;
  tripCount: number;
  postCount: number;
  createdAt: string;
}

export interface Bookmark {
  id: string;
  userId: string;
  postId: string;
  post: Post;
  createdAt: string;
}

export interface PostListParams {
  type?: PostType;
  sort?: "latest" | "popular" | "comments";
  destination?: string;
  userId?: string;
  cursor?: string;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  nextCursor?: string;
  hasMore: boolean;
  total?: number;
}
