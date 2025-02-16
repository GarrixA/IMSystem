import Cookies from "js-cookie";
import { decodeToken } from "./decode";

interface DecodedToken {
  role: string;
}

export const isAdmin = (): boolean => {
  const token = Cookies.get("access_token");
  if (!token) return false;

  try {
    const decoded: DecodedToken = decodeToken(token);
    return decoded.role === "ADMIN";
  } catch (error) {
    console.error("Token decode error:", error);
    return false;
  }
};

export const isManager = (): boolean => {
  const token = Cookies.get("access_token");
  if (!token) return false;

  try {
    const decoded: DecodedToken = decodeToken(token);
    return decoded.role === "MANAGER";
  } catch (error) {
    console.error("Token decode error:", error);
    return false;
  }
};
