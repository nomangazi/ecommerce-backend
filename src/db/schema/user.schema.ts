import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { getCurrentTimestamp } from "../../utils/time";

export const user = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement().notNull(),
  shopId: int("shopId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  nikeName: varchar("nikeName", { length: 255 }).notNull(),
  type: varchar("type", { length: 255, enum: ["admin", "seller", "customer"] })
    .default("customer")
    .notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  currency: varchar("currency", { length: 255 }).notNull(),
  photoUrl: varchar("photoUrl", { length: 1000 }).notNull(),
  permission: varchar("permission", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  localeLanguage: varchar("localeLanguage", { length: 255 }).notNull(),
  status: varchar("status", { length: 255, enum: ["active", "inactive", "pending", "suspend", "dominate", "deleted"] })
    .default("active")
    .notNull(),
  ipInfo: varchar("ipInfo", { length: 255 }).notNull(),
  creator: int("creator").default(0).notNull(),
  createdAt: int("createdAt").default(getCurrentTimestamp()).notNull(),
  updatedAt: int("updatedAt").default(getCurrentTimestamp()).notNull(),
  deletedAt: int("deletedAt").default(0).notNull(),
});

export type Country = typeof user.$inferSelect;
export type CountryInsert = typeof user.$inferInsert;
