import type  { Request, Response } from "express";
import { ProfileService } from "../services/profil.service.js";
import { createProfileSchema } from "../validators/profil.validator.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";

export class ProfileController {
  static async getProfiles(_: Request, res: Response) {
    try {
      const profiles = await ProfileService.getAllProfiles();
      return res.json(formatSuccess(profiles))
    } catch (error) {
      return res.json(formatError(404,'not found'));
    }
  }

  static async createProfile(req: Request, res: Response) {
    try {
      const validation = createProfileSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Libellé invalide" });
      }
      const profile = await ProfileService.createProfile(validation.data);
      return res.status(201).json(profile);
    } catch (error) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async getProfileById(req: Request, res: Response) {
    try {
      const profile = await ProfileService.getProfileById(Number(req.params.id));
      if (!profile) {
        return res.status(404).json({ message: "Profil non trouvé" });
      }
      return res.status(200).json(profile);
    } catch (error) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async updateProfile(req: Request, res: Response) {
    try {
      const validation = createProfileSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Libellé invalide" });
      }
      const profile = await ProfileService.updateProfile(
        Number(req.params.id),
        validation.data
      );
      return res.status(200).json(profile);
    } catch (error) {
      return res.status(404).json({ message: "Profil non trouvé" });
    }
  }

  static async deleteProfile(req: Request, res: Response) {
    try {
      await ProfileService.deleteProfile(Number(req.params.id));
      return res.status(200).json({ message: "Profil supprimé" });
    } catch (error) {
      return res.status(404).json({ message: "Profil non trouvé" });
    }
  }
}