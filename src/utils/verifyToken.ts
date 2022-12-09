import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { createError } from "./error";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;
  const secret = process.env.JWT_SECRET || "secretkey";

  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, secret, (err, user) => {
    if (err) return next(createError(401, "Invalid credentials."));

    req.user = user;
    next();
  });
};
