import { hash } from "crypto";
import { sql } from "drizzle-orm";
import {
  decimal,
  geometry,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
import { User } from "lucide-react";
export { pgTable } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("role", ["provider", "ranter", "admin"]);
export const AvailabilityEnum = pgEnum("Availability", [
  "available",
  "unavailable",
]);

export const Users = pgTable("users", {
  id: uuid("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).unique(),
  password: varchar("password", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  addressId: uuid("address_id")
    .references(() => Address.id, {
      onDelete: "set null",
    })
    .notNull(),
  role: userRoleEnum("role"),
  profilePictureUrl: varchar("profile_pricture_url", { length: 255 }).default(
    "null"
  ),
  createdAt: timestamp("creatd_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),

  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

export const Address = pgTable("addresses", {
  id: uuid("id").primaryKey(),
  addressLine1: varchar("address_line1", {
    length: 255,
  }).notNull(),
  addressLine2: varchar("address_line2", {
    length: 255,
  }).default("null"),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  postalCode: varchar("postal_code", { length: 20 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const Services = pgTable("service", {
  id: uuid("id").primaryKey(),
  userId: uuid("userId").references(() => Users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }),
  description: text("description"),
  priceParDay: decimal("price_per_day", { precision: 10, scale: 2 }).notNull(),
  categoryId: uuid("category_id")
    .references(() => Categories.id)
    .notNull(),
  availability: AvailabilityEnum("availability").notNull(),
  location: geometry("location"),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" }),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }),
});

export const Categories = pgTable("categories", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});
