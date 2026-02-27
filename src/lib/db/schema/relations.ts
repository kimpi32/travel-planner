import { relations } from "drizzle-orm";
import { users } from "./users";
import { trips, tripDays, tripItems, budgetItems } from "./trips";
import { posts } from "./posts";
import { comments } from "./comments";
import { bookmarks, collections, likes, follows, notifications, userBadges, reports } from "./social";

// Users relations
export const usersRelations = relations(users, ({ many }) => ({
  trips: many(trips),
  posts: many(posts),
  comments: many(comments),
  bookmarks: many(bookmarks),
  collections: many(collections),
  likes: many(likes),
  followers: many(follows, { relationName: "userFollowers" }),
  following: many(follows, { relationName: "userFollowing" }),
  notifications: many(notifications, { relationName: "userNotifications" }),
  actedNotifications: many(notifications, { relationName: "actorNotifications" }),
  badges: many(userBadges),
  reports: many(reports, { relationName: "userReports" }),
}));

// Trips relations
export const tripsRelations = relations(trips, ({ one, many }) => ({
  user: one(users, {
    fields: [trips.userId],
    references: [users.id],
  }),
  days: many(tripDays),
  budgetItems: many(budgetItems),
}));

// TripDays relations
export const tripDaysRelations = relations(tripDays, ({ one, many }) => ({
  trip: one(trips, {
    fields: [tripDays.tripId],
    references: [trips.id],
  }),
  items: many(tripItems),
}));

// TripItems relations
export const tripItemsRelations = relations(tripItems, ({ one }) => ({
  day: one(tripDays, {
    fields: [tripItems.tripDayId],
    references: [tripDays.id],
  }),
}));

// BudgetItems relations
export const budgetItemsRelations = relations(budgetItems, ({ one }) => ({
  trip: one(trips, {
    fields: [budgetItems.tripId],
    references: [trips.id],
  }),
}));

// Posts relations
export const postsRelations = relations(posts, ({ one, many }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
  comments: many(comments),
}));

// Comments relations (self-referential for replies)
export const commentsRelations = relations(comments, ({ one, many }) => ({
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
  }),
  parentComment: one(comments, {
    fields: [comments.parentCommentId],
    references: [comments.id],
    relationName: "commentReplies",
  }),
  replies: many(comments, {
    relationName: "commentReplies",
  }),
}));

// Bookmarks relations
export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(users, {
    fields: [bookmarks.userId],
    references: [users.id],
  }),
  collection: one(collections, {
    fields: [bookmarks.collectionId],
    references: [collections.id],
  }),
}));

// Collections relations
export const collectionsRelations = relations(collections, ({ one, many }) => ({
  user: one(users, {
    fields: [collections.userId],
    references: [users.id],
  }),
  bookmarks: many(bookmarks),
}));

// Likes relations
export const likesRelations = relations(likes, ({ one }) => ({
  user: one(users, {
    fields: [likes.userId],
    references: [users.id],
  }),
}));

// Follows relations
export const followsRelations = relations(follows, ({ one }) => ({
  follower: one(users, {
    fields: [follows.followerId],
    references: [users.id],
    relationName: "userFollowing",
  }),
  following: one(users, {
    fields: [follows.followingId],
    references: [users.id],
    relationName: "userFollowers",
  }),
}));

// Notifications relations
export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
    relationName: "userNotifications",
  }),
  actor: one(users, {
    fields: [notifications.actorId],
    references: [users.id],
    relationName: "actorNotifications",
  }),
  post: one(posts, {
    fields: [notifications.postId],
    references: [posts.id],
  }),
  comment: one(comments, {
    fields: [notifications.commentId],
    references: [comments.id],
  }),
}));

// UserBadges relations
export const userBadgesRelations = relations(userBadges, ({ one }) => ({
  user: one(users, {
    fields: [userBadges.userId],
    references: [users.id],
  }),
}));

// Reports relations
export const reportsRelations = relations(reports, ({ one }) => ({
  reporter: one(users, {
    fields: [reports.reporterId],
    references: [users.id],
    relationName: "userReports",
  }),
}));
