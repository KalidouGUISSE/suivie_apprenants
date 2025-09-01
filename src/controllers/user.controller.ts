import type { Request, Response } from "express";
import { UserService } from "../services/user.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";

export class UserController {
  static async create(req: Request, res: Response) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(formatSuccess(user));
    } catch (error: any) {
      res.status(400).json(formatError(400, error.message));
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.json(formatSuccess(users));
    } catch (error: any) {
      res.status(500).json(formatError(500, error.message));
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      const user = await UserService.getOne(Number(req.params.id));
      if (!user) {
        return res.status(404).json(formatError(404, "User not found"));
      }
      res.json(formatSuccess(user));
    } catch (error: any) {
      res.status(400).json(formatError(400, error.message));
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const user = await UserService.update(Number(req.params.id), req.body);
      res.json(formatSuccess(user));
    } catch (error: any) {
      res.status(400).json(formatError(400, error.message));
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await UserService.delete(Number(req.params.id));
      res.status(204).json(formatSuccess(null,200, "User deleted successfully"));
    } catch (error: any) {
      res.status(400).json(formatError(400, error.message));
    }
  }
}
