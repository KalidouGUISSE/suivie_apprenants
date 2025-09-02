import type { Request, Response } from "express";
import { NiveauService } from "../services/niveau.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";

export class NiveauController {
  static async create(req: Request, res: Response) {
    try {
      const niveau = await NiveauService.createNiveau(req.body);
      return res
        .status(201)
        .json(formatSuccess(niveau, 201, "Niveau créé avec succès"));
    } catch (err: any) {
      return res
        .status(500)
        .json(formatError(500, err.message || "Erreur serveur"));
    }
  }

  static async getAll(req: Request, res: Response) {
    //j'ai ajouter ça 
    const { skip = 0, limit = 10 } = req.pagination || {};
    const niveaux = await NiveauService.getAllNiveaux(skip, limit);
    return res.json(formatSuccess(niveaux));
  }

  static async getOne(req: Request, res: Response) {
    const niveau = await NiveauService.getNiveauById(Number(req.params.id));
    if (!niveau)
      return res.status(404).json(formatError(404, "Niveau non trouvé"));
    return res.json(formatSuccess(niveau));
  }

  static async update(req: Request, res: Response) {
    try {
      const niveau = await NiveauService.updateNiveau(
        Number(req.params.id),
        req.body
      );
      return res.json(formatSuccess(niveau, 200, "Niveau mis à jour"));
    } catch (err: any) {
      return res
        .status(400)
        .json(formatError(400, err.message || "Erreur mise à jour"));
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await NiveauService.deleteNiveau(Number(req.params.id));
      return res.json(formatSuccess(null, 200, "Niveau supprimé"));
    } catch {
      return res.status(404).json(formatError(404, "Niveau non trouvé"));
    }
  }
}
