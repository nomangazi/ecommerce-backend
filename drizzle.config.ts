import { defineConfig } from "drizzle-kit";
import { configs } from "./src/config/config";



export default defineConfig({
  schema: "./src/db/schema/*.schema.ts",
  out: "./src/db/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: configs.db_host,
    port: configs.db_port,
    user: configs.db_user,
    password: configs.db_password,
    database: configs.db_name,
    ssl: {
      rejectUnauthorized: false,
    }
  }
});
