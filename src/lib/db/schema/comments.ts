import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { posts } from "./posts";

export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  parentCommentId: uuid("parent_comment_id"),
  body: text("body").notNull(),
  likeCount: integer("like_count").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
