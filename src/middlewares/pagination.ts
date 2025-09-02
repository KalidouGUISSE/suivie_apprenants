import type { Request, Response, NextFunction } from "express";

export function paginationMiddleware(req: Request, res: Response, next: NextFunction) {
  req.pagination = {
    page: parseInt(req.query.page as string) || 1,
    limit: parseInt(req.query.limit as string) || 10,
    skip: ((parseInt(req.query.page as string) || 1) - 1) * (parseInt(req.query.limit as string) || 10)
  };
  next();
}