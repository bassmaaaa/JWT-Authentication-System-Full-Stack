import { findUserByUsername,findUserByEmail, createUser } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import env from '../config/env.js';

//register 
export const registerUser = async (username, email, password) => {
  const existingUser = await findUserByEmail(email);
  const existingUsername = await findUserByUsername(username);
  if (existingUser) throw new Error("Email already registered");
  if (existingUsername) throw new Error("Username already registered");

  const newUser = await createUser(username, email, password);
  return newUser;
};


//login
export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign({ id: user.id, email: user.email }, env.jwt.secret, { expiresIn: "1h" });
  return { user: { id: user.id, email: user.email}, token };
};




// generate token 
/**
 * @desc Authentication Token Generator
 * Uses values from your config/env.js for consistency
 */
export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email 
    },
    env.jwt.secret, 
    { 
      expiresIn: env.jwt.expires 
    }
  );    
};