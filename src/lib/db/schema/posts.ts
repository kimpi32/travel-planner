import { mysqlTable, varchar, text, int, timestamp, mysqlEnum } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { POST_TYPE } from "./enums";

export const posts = mysqlTable("posts", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: mysqlEnum("type", POST_TYPE).default("general").notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  body: text("body").notNull(),
  destinationId: varchar("destination_id", { length: 255 }),
  rating: int("rating"),
  likeCount: int("like_count").default(0).notNull(),
  commentCount: int("comment_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
