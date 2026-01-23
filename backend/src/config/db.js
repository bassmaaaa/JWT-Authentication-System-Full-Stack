import mysql from "mysql2/promise";
import  env  from "./env.js";

export let db;

export const connectDB = async () => {
  try {
    db = await mysql.createConnection({
      host: env.db.host,
      user: env.db.user,
      password: env.db.password,
      database: env.db.database,
    });
    console.log("MySQL connected successfully");
  } catch (error) {
    console.error("MySQL connection failed:", error);
    process.exit(1);
  }
};
