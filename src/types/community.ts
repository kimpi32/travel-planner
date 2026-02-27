export type PostType = "all" | "review" | "tip" | "qna";

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
  authId: string;
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
