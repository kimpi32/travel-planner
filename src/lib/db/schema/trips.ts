import { pgTable, uuid, text, integer, boolean, timestamp, date, time } from "drizzle-orm/pg-core";
import { users } from "./users";
import { tripStatusEnum, budgetCategoryEnum, tripItemCategoryEnum } from "./enums";

export const trips = pgTable("trips", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  destination: text("destination").notNull(),
  destinationId: text("destination_id"),
  coverImage: text("cover_image"),
  status: tripStatusEnum("status").default("planning").notNull(),
  startDate: date("start_date"),
  endDate: date("end_date"),
  notes: text("notes"),
  isPublic: boolean("is_public").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const tripDays = pgTable("trip_days", {
  id: uuid("id").primaryKey().defaultRandom(),
  tripId: uuid("trip_id")
    .notNull()
    .references(() => trips.id, { onDelete: "cascade" }),
  dayNumber: integer("day_number").notNull(),
  date: date("date"),
  title: text("title"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const tripItems = pgTable("trip_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  tripDayId: uuid("trip_day_id")
    .notNull()
    .references(() => tripDays.id, { onDelete: "cascade" }),
  category: tripItemCategoryEnum("category").default("other").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  location: text("location"),
  address: text("address"),
  startTime: time("start_time"),
  endTime: time("end_time"),
  cost: integer("cost"),
  currency: text("currency").default("KRW"),
  reservationNumber: text("reservation_number"),
  url: text("url"),
  notes: text("notes"),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const budgetItems = pgTable("budget_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  tripId: uuid("trip_id")
    .notNull()
    .references(() => trips.id, { onDelete: "cascade" }),
  category: budgetCategoryEnum("category").default("other").notNull(),
  title: text("title").notNull(),
  amount: integer("amount").notNull(),
  currency: text("currency").default("KRW").notNull(),
  isPaid: boolean("is_paid").default(false).notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
