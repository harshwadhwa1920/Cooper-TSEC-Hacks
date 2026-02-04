import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";
import { isJwtUserPayload } from "../utils/isJWTUserPayload";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const [scheme, token] = authHeader.split(" ");

    // 🔒 Validate scheme & token
    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({ message: "Invalid authorization format" });
    }

    // ✅ token is now guaranteed to be string
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!isJwtUserPayload(decoded)) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.user = {
      id: decoded.id,
      email: decoded.email
    };

    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
