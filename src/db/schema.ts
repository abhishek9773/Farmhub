import { hash } from "crypto";
import { sql } from "drizzle-orm";
import { boolean, integer } from "drizzle-orm/pg-core";
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

export const statusEnum = pgEnum("status", [
  "pending",
  "completed",
  "canceled",
]);
export const paymentMethod = pgEnum("payment_method", [
  "credit_card",
  "paypal",
  "crypto",
]);
export const notificationTypeEnum = pgEnum("notificationType", [
  "rental",
  "transaction",
  "review",
  "system",
]);

export const rentalStatus = pgEnum("status", [
  "pending",
  "approved",
  "rejected",
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
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
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
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const RentalPeriods = pgTable("rentalPeriods", {
  id: uuid("id").primaryKey(),
  serviceId: uuid("service_id").references(() => Services.id),
  renterId: uuid("renter_id").references(() => Users.id),
  startDate: timestamp("start_date", { withTimezone: true }).default(
    sql`now()`
  ),
  endDate: timestamp("end_date", { withTimezone: true }).default(sql`now()`),
  extended: boolean("extended").default(false),
  extensionRequested: boolean("extension_requested").default(false),
  extensionApproved: boolean("extension_approved").default(false),
  extensionApprovedBy: boolean("extension_approved_by").default(false),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

export const Transactions = pgTable("transaction", {
  id: uuid("id").primaryKey(),
  rentalPeriodId: uuid("rental_period_id")
    .references(() => RentalPeriods.id)
    .notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: statusEnum("status"),
  transationDate: timestamp("transation_date").default(sql`now()`),
  paymentMethod: paymentMethod("payment_method"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export const Reviews = pgTable("reviews", {
  id: uuid("id").primaryKey(),
  serviceId: uuid("service_id").references(() => Services.id),
  userId: uuid("user_id").references(() => Users.id),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  created_at: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

export const ServiceImages = pgTable("serviceImages", {
  id: uuid("id").primaryKey(),
  serviceId: uuid("service_id").references(() => Services.id),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

export const Notifications = pgTable("notifications", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id").references(() => Users.id),
  messgae: text("message"),
  type: notificationTypeEnum("type"),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

export const ServiceAvailability = pgTable("serviceAvailability", {
  id: uuid("id").primaryKey(),
  serviceId: uuid("service_id")
    .references(() => Services.id)
    .notNull(),
  date: timestamp("date", { withTimezone: true, mode: "date" })
    .default(sql`now()`)
    .notNull(),
  available: boolean("available").default(false),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

//For keyword-based search)
export const ServiceTags = pgTable("serviceTags", {
  id: uuid("id").primaryKey(),
  serviceId: uuid("service_id")
    .references(() => Services.id)
    .notNull(),
  tag: varchar("tag", { length: 100 }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
});

export const RentalRequests = pgTable("rentalRequests", {
  id: uuid("id").primaryKey(),
  serviceId: uuid("service_id").references(() => Services.id),
  renterId: uuid("renter_id").references(() => Users.id),
  requestDate: timestamp("request_date", {
    withTimezone: true,
    mode: "string",
  }).default(sql`now()`),
  status: rentalStatus("status").notNull(),
  responseDate: timestamp("response_date"),

  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }), // Set to current timestamp by default
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});
