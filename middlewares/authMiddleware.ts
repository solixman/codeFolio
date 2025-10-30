// middleware/authMiddleware.ts
import jwt from "jsonwebtoken";
import blacklistedToken from "../models/BlacklistedToken";

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET!;

async function isTokenBlacklisted(token: string) {
  return await blacklistedToken.exists({ token });
}


export async function requireAuth(req: any) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];

  const blacklisted = await isTokenBlacklisted(token);
  if (blacklisted) {
    throw new Error("Token is blacklisted");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { user: decoded, token };
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
}
