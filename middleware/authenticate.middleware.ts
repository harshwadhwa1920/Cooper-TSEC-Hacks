import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";
import { isJwtUserPayload } from "../utils/isJwtUserPayload";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // For now, bypass authentication and set dummy user
  req.user = {
    id: 2,
    email: "harsh@example.com"
  };
  next();
};
