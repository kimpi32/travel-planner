import { mysqlTable, varchar, text, int, boolean, timestamp, date, time, mysqlEnum } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { TRIP_STATUS, BUDGET_CATEGORY, TRIP_ITEM_CATEGORY } from "./enums";

export const trips = mysqlTable("trips", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 500 }).notNull(),
  destination: varchar("destination", { length: 500 }).notNull(),
  destinationId: varchar("destination_id", { length: 255 }),
  coverImage: text("cover_image"),
  status: mysqlEnum("status", TRIP_STATUS).default("planning").notNull(),
  startDate: date("start_date"),
  endDate: date("end_date"),
  notes: text("notes"),
  isPublic: boolean("is_public").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tripDays = mysqlTable("trip_days", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  tripId: varchar("trip_id", { length: 36 })
    .notNull()
    .references(() => trips.id, { onDelete: "cascade" }),
  dayNumber: int("day_number").notNull(),
  date: date("date"),
  title: varchar("title", { length: 500 }),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tripItems = mysqlTable("trip_items", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  tripDayId: varchar("trip_day_id", { length: 36 })
    .notNull()
    .references(() => tripDays.id, { onDelete: "cascade" }),
  category: mysqlEnum("category", TRIP_ITEM_CATEGORY).default("other").notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description"),
  location: varchar("location", { length: 500 }),
  address: varchar("address", { length: 500 }),
  startTime: time("start_time"),
  endTime: time("end_time"),
  cost: int("cost"),
  currency: varchar("currency", { length: 10 }).default("KRW"),
  reservationNumber: varchar("reservation_number", { length: 255 }),
  url: text("url"),
  notes: text("notes"),
  sortOrder: int("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const budgetItems = mysqlTable("budget_items", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  tripId: varchar("trip_id", { length: 36 })
    .notNull()
    .references(() => trips.id, { onDelete: "cascade" }),
  category: mysqlEnum("category", BUDGET_CATEGORY).default("other").notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  amount: int("amount").notNull(),
  currency: varchar("currency", { length: 10 }).default("KRW").notNull(),
  isPaid: boolean("is_paid").default(false).notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
