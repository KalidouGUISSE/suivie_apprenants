import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateBody = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    
    if (!result.success) {
      
      const errors: Record<string, string[]> = {};
      result.error.issues.forEach(err => {
        const key = err.path.join('.') || 'body';
        if (!errors[key]) errors[key] = [];
        errors[key].push(err.message);
      });

      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Validation échouée",
        errors, 
        data: null
      });
    }
    
    next();
  };
};
