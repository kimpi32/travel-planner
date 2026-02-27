import { pgEnum } from "drizzle-orm/pg-core";

export const tripStatusEnum = pgEnum("trip_status", [
  "planning",
  "upcoming",
  "ongoing",
  "completed",
  "cancelled",
]);

export const postTypeEnum = pgEnum("post_type", [
  "review",
  "tip",
  "itinerary",
  "question",
  "general",
  "buddy",
]);

export const budgetCategoryEnum = pgEnum("budget_category", [
  "accommodation",
  "transportation",
  "food",
  "activity",
  "shopping",
  "other",
]);

export const bookmarkTargetEnum = pgEnum("bookmark_target", [
  "post",
  "trip",
  "destination",
]);

export const likeTargetEnum = pgEnum("like_target", ["post", "comment"]);

export const notificationTypeEnum = pgEnum("notification_type", [
  "like",
  "comment",
  "follow",
  "mention",
]);

export const tripItemCategoryEnum = pgEnum("trip_item_category", [
  "accommodation",
  "transportation",
  "attraction",
  "restaurant",
  "activity",
  "other",
]);
