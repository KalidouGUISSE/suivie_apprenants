import type { Request, Response, NextFunction } from "express";
import type  { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

type TokenPayload = JwtPayload & {
  userId: number;
  profilId: number;
  email: string;
};

export interface AuthRequest extends Request {
  user?: { userId: number; profilId: number; email: string };
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token manquant" });
  }
  const token = authHeader.slice(7);

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET as string) as TokenPayload;

    req.user = {
      userId: decoded.userId,
      profilId: decoded.profilId,
      email: decoded.email,
    };

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalide" });
  }
}
