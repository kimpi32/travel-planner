import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { postTypeEnum } from "./enums";

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: postTypeEnum("type").default("general").notNull(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  destinationId: text("destination_id"),
  rating: integer("rating"),
  likeCount: integer("like_count").default(0).notNull(),
  commentCount: integer("comment_count").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
