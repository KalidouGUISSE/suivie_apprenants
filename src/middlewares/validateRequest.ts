import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

export const validateBody = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsed = schema.parse(req.body);
    req.body = parsed;
    next();
  } catch (err: any) {
    const msg = err.errors?.[0]?.message || "Validation error";
    return res.status(400).json({ data: null, statut: "error", code: 400, message: msg });
  }
};
