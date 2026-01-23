import { loginUser,registerUser,generateToken} from "../services/auth.service.js";




export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const data = await registerUser(username, email, password);
    const token = generateToken(data);
    res.status(201).json({ message: "Registration successful", userId: data.insertId, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await loginUser(email, password);
 
    res.status(200).json({ message: "Login successful",...data });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


export const forgetpassword = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;
    await forgetpassword(email, newPassword);
    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};