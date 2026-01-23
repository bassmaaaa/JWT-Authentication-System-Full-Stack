import api from "./axios";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const register = async (data: { username: string; email: string; password: string }) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};


export const forgotPassword = async (data: { email: string, newPassword: string }) => {
  const response = await api.put("/auth/forgot-password", data);
  return response.data;
};