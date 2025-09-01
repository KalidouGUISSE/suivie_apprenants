import type { Request, Response } from "express";


import { TagService } from "../services/tag.service.js";


import { formatSuccess, formatError } from "../utils/responseFormatter.js";


export class TagController {


  static async create(req: Request, res: Response) {
    try {
      const tag = await TagService.createTag(req.body);
      // Crée un tag avec les données reçues dans le corps de la requête.
      return res.status(201).json(formatSuccess(tag, 201, "Tag créé avec succès"));
      // Retourne le tag créé avec un message de succès.
    } catch (err: any) {
      return res.status(500).json(formatError(500, err.message || "Erreur serveur"));
      // En cas d’erreur, retourne un message d’erreur serveur.
    }
  }

  static async getAll(req: Request, res: Response) {
    const tags = await TagService.getAllTags();
    // Récupère tous les tags.
    return res.json(formatSuccess(tags));
    // Retourne la liste des tags.
  }

  static async getOne(req: Request, res: Response) {
    const tag = await TagService.getTagById(Number(req.params.id));
    // Récupère un tag par son id (depuis l’URL).
    if (!tag) return res.status(404).json(formatError(404, "Tag non trouvé"));
    // Si le tag n’existe pas, retourne une erreur 404.
    return res.json(formatSuccess(tag));
    // Sinon, retourne le tag trouvé.
  }

  static async update(req: Request, res: Response) {
    try {
      const tag = await TagService.updateTag(Number(req.params.id), req.body);
      // Met à jour le tag avec l’id donné et les nouvelles données.
      return res.json(formatSuccess(tag, 200, "Tag mis à jour"));
      // Retourne le tag mis à jour avec un message de succès.
    } catch (err: any) {
      return res.status(400).json(formatError(400, err.message || "Erreur mise à jour"));
      // En cas d’erreur, retourne un message d’erreur.
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await TagService.deleteTag(Number(req.params.id));
      // Supprime le tag avec l’id donné.
      return res.json(formatSuccess(null, 200, "Tag supprimé"));
      // Retourne un message de succès.
    } catch {
      return res.status(404).json(formatError(404, "Tag non trouvé"));
      // Si le tag n’existe pas, retourne une erreur 404.
    }
  }
}