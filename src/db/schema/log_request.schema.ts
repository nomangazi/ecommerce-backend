import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { getCurrentTimestamp } from "../../utils/time";

export const log_request = mysqlTable("log_request", {
  id: int("id").primaryKey().autoincrement().notNull(),
  hostname: varchar("hostname", { length: 255 }).notNull(),
  method: varchar("method", { length: 20 }).notNull(),
  url: varchar("url", { length: 1000 }).notNull(),
  ip: varchar("ip", { length: 255 }).default("0").notNull(),
  createdAt: int("createdAt").default(getCurrentTimestamp()).notNull(),
  updatedAt: int("updatedAt").default(getCurrentTimestamp()).notNull(),
  deletedAt: int("deletedAt").default(0).notNull(),
});
