import type { Request, Response } from "express";
import { CompetenceService } from "../services/competence.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";

export class CompetenceController {
    static async create(req: Request, res: Response){
        try{
            const competence = await CompetenceService.createCompetence(req.body);
            return res.status(201).json(formatSuccess(competence, 201, "Promo créée avec succès"))
        }catch(err: any){
            return res.status(500).json(formatError(500, err.message || "Erreur serveur"));
        }
    }
    static async getAll(req: Request, res: Response) {
        const competences = await CompetenceService.getAllCompetences();
        return res.json(formatSuccess(competences));
    }
    static async getOne(req: Request, res: Response){
        const competence = await CompetenceService.getCompetenceById(Number(req.params.id));
        if (!competence) return res.status(404).json(formatError(404, "Competence non trouvée"));
        return res.json(formatSuccess(competence))
    }
    static async update(req: Request, res: Response) {
        try {
            const promo = await CompetenceService.updateCompetence(Number(req.params.id), req.body);
            return res.json(formatSuccess(promo, 200, "Competence mise à jour"));
        } catch (err: any) {
            return res.status(400).json(formatError(400, err.message || "Erreur mise à jour"));
        }
    }
    static async delete(req: Request, res: Response) {
        try {
            await CompetenceService.deleteCompetence(Number(req.params.id));
            return res.json(formatSuccess(null, 200, "Competence supprimée"));
        } catch {
            return res.status(404).json(formatError(404, "Competence non trouvée"));
        }
    }
    static async getNiveaux(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const niveaux = await CompetenceService.getNiveauxByCompetenceId(id);
            res.json({ data: niveaux, statut: "success", code: 200 });
        } catch (err: any) {
            res.status(404).json({ data: null, statut: "error", code: 404, message: err.message });
        }
    }
}