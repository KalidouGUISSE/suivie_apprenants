import type { Request, Response } from "express";
import { ProfilSortieService } from "../services/profilSortie.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";

export class ProfilSortieController {
  static async create(req: Request, res: Response) {
    try {
      const profil = await ProfilSortieService.create(req.body);
      return res.status(201).json(formatSuccess(profil, 201, "Profil de sortie créé avec succès"));
    } catch (err: any) {
      return res.status(500).json(formatError(500, err.message || "Erreur serveur"));
    }
  }

  static async getAll(req: Request, res: Response) {
    const profils = await ProfilSortieService.getAll();
    return res.json(formatSuccess(profils));
  }

  static async getOne(req: Request, res: Response) {
    const profil = await ProfilSortieService.getById(Number(req.params.id));
    if (!profil) return res.status(404).json(formatError(404, "Profil de sortie non trouvé"));
    return res.json(formatSuccess(profil));
  }

  static async update(req: Request, res: Response) {
    try {
      const profil = await ProfilSortieService.update(Number(req.params.id), req.body);
      return res.json(formatSuccess(profil, 200, "Profil de sortie mis à jour"));
    } catch (err: any) {
      return res.status(400).json(formatError(400, err.message || "Erreur mise à jour"));
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await ProfilSortieService.delete(Number(req.params.id));
      return res.json(formatSuccess(null, 200, "Profil de sortie supprimé"));
    } catch {
      return res.status(404).json(formatError(404, "Profil de sortie non trouvé"));
    }
  }
}
