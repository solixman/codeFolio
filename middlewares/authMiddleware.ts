import { JwtPayload } from './../node_modules/@types/jsonwebtoken/index.d';
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
        const decoded: any = jwt.verify(token, JWT_SECRET);
        console.log('authenticated')
        return {
            user: {
                id: decoded.id!,
                email: decoded.email,
                role: decoded.role,
                name: decoded.name
            }, token
        };
    } catch (err) {
        throw new Error("Invalid or expired token");
    }
}
