import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { configs } from "../config/config";

  const poolConnection = mysql.createPool({
    host: configs.db_host,
    user: configs.db_user,
    password: configs.db_password,
    database: configs.db_name,
    port: configs.db_port,
});

export const db = drizzle(poolConnection);
