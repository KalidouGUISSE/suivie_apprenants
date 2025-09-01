import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { formatError } from "../utils/responseFormatter.js";

export const validateBody = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    
    if (!result.success) {
      const errors = result.error.issues.map((err: any) => `${err.path.join('.')}: ${err.message}`);
      const errorMessage = `Erreurs de validation: ${errors.join(', ')}`;
      return res.status(400).json(formatError(400, errorMessage));
    }
    
    next();
  };
};
