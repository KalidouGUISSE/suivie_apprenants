import { NiveauService } from "../services/niveau.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";
export class NiveauController {
    static async create(req, res) {
        try {
            const niveau = await NiveauService.createNiveau(req.body);
            return res
                .status(201)
                .json(formatSuccess(niveau, 201, "Niveau créé avec succès"));
        }
        catch (err) {
            return res
                .status(500)
                .json(formatError(500, err.message || "Erreur serveur"));
        }
    }
    static async getAll(req, res) {
        const niveaux = await NiveauService.getAllNiveaux();
        return res.json(formatSuccess(niveaux));
    }
    static async getOne(req, res) {
        const niveau = await NiveauService.getNiveauById(Number(req.params.id));
        if (!niveau)
            return res.status(404).json(formatError(404, "Niveau non trouvé"));
        return res.json(formatSuccess(niveau));
    }
    static async update(req, res) {
        try {
            const niveau = await NiveauService.updateNiveau(Number(req.params.id), req.body);
            return res.json(formatSuccess(niveau, 200, "Niveau mis à jour"));
        }
        catch (err) {
            return res
                .status(400)
                .json(formatError(400, err.message || "Erreur mise à jour"));
        }
    }
    static async delete(req, res) {
        try {
            await NiveauService.deleteNiveau(Number(req.params.id));
            return res.json(formatSuccess(null, 200, "Niveau supprimé"));
        }
        catch {
            return res.status(404).json(formatError(404, "Niveau non trouvé"));
        }
    }
}
//# sourceMappingURL=niveau.controller.js.map