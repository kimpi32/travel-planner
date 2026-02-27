import { pgTable, uuid, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { users } from "./users";
import { bookmarkTargetEnum, likeTargetEnum } from "./enums";

export const bookmarks = pgTable(
  "bookmarks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    targetType: bookmarkTargetEnum("target_type").notNull(),
    targetId: text("target_id").notNull(),
    collectionId: uuid("collection_id"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("bookmarks_user_target_unique").on(
      table.userId,
      table.targetType,
      table.targetId
    ),
  ]
);

export const collections = pgTable("collections", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  coverImage: text("cover_image"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const likes = pgTable(
  "likes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    targetType: likeTargetEnum("target_type").notNull(),
    targetId: uuid("target_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("likes_user_target_unique").on(
      table.userId,
      table.targetType,
      table.targetId
    ),
  ]
);
