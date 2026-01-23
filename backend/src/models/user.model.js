import { db } from "../config/db.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

//create user
export const createUser = async (username, email, password = "user") => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const [result] = await db.execute(
    "INSERT INTO users (username, email, hashedPassword) VALUES (?, ?, ?)",
    [username, email, hashedPassword]
  );
  return result;
};
//find user by username
export const findUserByUsername = async (username) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE username = ?", [username]);
  return rows[0];
};

// find user by email
export const findUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};
