import "express";
declare module "express" {
  interface Request {
    sorting?: {
      orderBy: string;
      order: "asc" | "desc";
    };
    pagination?: {
      page: number;
      limit: number;
      skip: number;
    };
  }
}