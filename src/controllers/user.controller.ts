import type { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

export class UserController {
  static async create(req: Request, res: Response) {
    try {
      const user = await UserService.create(req.body);  
      console.log(user) 
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      const user = await UserService.getOne(Number(req.params.id));
      res.json(user);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const user = await UserService.update(Number(req.params.id), req.body);
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await UserService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
