import { mysqlTable, varchar, text, int, timestamp } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { posts } from "./posts";

export const comments = mysqlTable("comments", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  postId: varchar("post_id", { length: 36 })
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  parentCommentId: varchar("parent_comment_id", { length: 36 }),
  body: text("body").notNull(),
  likeCount: int("like_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
