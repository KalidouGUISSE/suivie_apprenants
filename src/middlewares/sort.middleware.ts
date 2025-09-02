import type { Request, Response, NextFunction } from "express";

export function sortMiddleware(req: Request, res: Response, next: NextFunction) {
  req.sorting = {
    orderBy: (req.query.orderBy as string) || "id",
    order: (req.query.order as string)?.toLowerCase() === "desc" ? "desc" : "asc"
  };
  next();
}