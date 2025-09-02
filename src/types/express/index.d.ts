import "express";
declare module "express" {
  interface Request {
    pagination?: {
      page: number;
      limit: number;
      skip: number;
    };
  }
}