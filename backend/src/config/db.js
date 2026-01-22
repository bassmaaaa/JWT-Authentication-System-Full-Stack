import mysql from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../../.env";

export let db; 

export const connectDB = async () => {
  try {
    db = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
    console.log("MySQL database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
