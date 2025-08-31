import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
import { formatError } from "../responseFormatter.js";

export const validateBody =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json(formatError(400, "Validation échouée", result.error.issues));
    }
    req.body = result.data;
    next();
  };
