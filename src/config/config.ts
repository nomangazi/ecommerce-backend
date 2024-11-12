import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const configs = {
  port: process.env.PORT,
  db_host: process.env.DB_HOST as string,
  db_user: process.env.DB_USER as string,
  db_password: process.env.DB_PASSWORD as string,
  db_name: process.env.DB_NAME as string,
  db_port: parseInt(process.env.DB_PORT as string),
};
