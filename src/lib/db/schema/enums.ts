// MySQL은 pgEnum 같은 별도 타입이 없으므로,
// 각 테이블 컬럼에서 mysqlEnum을 직접 사용합니다.
// 이 파일은 타입 참조용 상수로만 유지합니다.

export const TRIP_STATUS = ["planning", "upcoming", "ongoing", "completed", "cancelled"] as const;
export type TripStatus = (typeof TRIP_STATUS)[number];

export const POST_TYPE = ["review", "tip", "itinerary", "question", "general", "buddy"] as const;
export type PostType = (typeof POST_TYPE)[number];

export const BUDGET_CATEGORY = ["accommodation", "transportation", "food", "activity", "shopping", "other"] as const;
export type BudgetCategory = (typeof BUDGET_CATEGORY)[number];

export const BOOKMARK_TARGET = ["post", "trip", "destination"] as const;
export type BookmarkTarget = (typeof BOOKMARK_TARGET)[number];

export const LIKE_TARGET = ["post", "comment"] as const;
export type LikeTarget = (typeof LIKE_TARGET)[number];

export const NOTIFICATION_TYPE = ["like", "comment", "follow", "mention"] as const;
export type NotificationType = (typeof NOTIFICATION_TYPE)[number];

export const TRIP_ITEM_CATEGORY = ["accommodation", "transportation", "attraction", "restaurant", "activity", "other"] as const;
export type TripItemCategory = (typeof TRIP_ITEM_CATEGORY)[number];

export const USER_ROLE = ["user", "admin"] as const;
export type UserRole = (typeof USER_ROLE)[number];
