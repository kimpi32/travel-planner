import { mysqlTable, varchar, text, timestamp, boolean, uniqueIndex, mysqlEnum } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { BOOKMARK_TARGET, LIKE_TARGET, NOTIFICATION_TYPE } from "./enums";
import { posts } from "./posts";
import { comments } from "./comments";

export const bookmarks = mysqlTable(
  "bookmarks",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    targetType: mysqlEnum("target_type", BOOKMARK_TARGET).notNull(),
    targetId: varchar("target_id", { length: 255 }).notNull(),
    collectionId: varchar("collection_id", { length: 36 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("bookmarks_user_target_unique").on(
      table.userId,
      table.targetType,
      table.targetId
    ),
  ]
);

export const collections = mysqlTable("collections", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  coverImage: text("cover_image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const follows = mysqlTable(
  "follows",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    followerId: varchar("follower_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    followingId: varchar("following_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("follows_follower_following_unique").on(
      table.followerId,
      table.followingId
    ),
  ]
);

export const notifications = mysqlTable("notifications", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: mysqlEnum("type", NOTIFICATION_TYPE).notNull(),
  actorId: varchar("actor_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  postId: varchar("post_id", { length: 36 }).references(() => posts.id, { onDelete: "cascade" }),
  commentId: varchar("comment_id", { length: 36 }).references(() => comments.id, { onDelete: "cascade" }),
  read: boolean("read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const likes = mysqlTable(
  "likes",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    targetType: mysqlEnum("target_type", LIKE_TARGET).notNull(),
    targetId: varchar("target_id", { length: 36 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("likes_user_target_unique").on(
      table.userId,
      table.targetType,
      table.targetId
    ),
  ]
);

// ─── 배지 ────────────────────────────────────────────────────────────────────

export const userBadges = mysqlTable(
  "user_badges",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    badgeId: varchar("badge_id", { length: 255 }).notNull(),
    earnedAt: timestamp("earned_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("user_badges_user_badge_unique").on(table.userId, table.badgeId),
  ]
);

// ─── 신고 ────────────────────────────────────────────────────────────────────

export const reports = mysqlTable("reports", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  reporterId: varchar("reporter_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  targetType: mysqlEnum("target_type", ["post", "comment"]).notNull(),
  targetId: varchar("target_id", { length: 255 }).notNull(),
  reason: text("reason").notNull(),
  status: mysqlEnum("status", ["pending", "reviewed", "dismissed"]).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
