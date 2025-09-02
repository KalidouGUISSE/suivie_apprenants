import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
export declare const validateBody: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validateBody.d.ts.map