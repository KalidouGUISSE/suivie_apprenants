import { PromoService } from "../services/promo.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";
export class PromoController {
    static async create(req, res) {
        try {
            const promo = await PromoService.createPromo(req.body);
            return res.status(201).json(formatSuccess(promo, 201, "Promo créée avec succès"));
        }
        catch (err) {
            return res.status(500).json(formatError(500, err.message || "Erreur serveur"));
        }
    }
    static async getAll(req, res) {
        const promos = await PromoService.getAllPromos();
        return res.json(formatSuccess(promos));
    }
    static async getOne(req, res) {
        const promo = await PromoService.getPromoById(Number(req.params.id));
        if (!promo)
            return res.status(404).json(formatError(404, "Promo non trouvée"));
        return res.json(formatSuccess(promo));
    }
    static async update(req, res) {
        try {
            const promo = await PromoService.updatePromo(Number(req.params.id), req.body);
            return res.json(formatSuccess(promo, 200, "Promo mise à jour"));
        }
        catch (err) {
            return res.status(400).json(formatError(400, err.message || "Erreur mise à jour"));
        }
    }
    static async delete(req, res) {
        try {
            await PromoService.deletePromo(Number(req.params.id));
            return res.json(formatSuccess(null, 200, "Promo supprimée"));
        }
        catch {
            return res.status(404).json(formatError(404, "Promo non trouvée"));
        }
    }
}
//# sourceMappingURL=promo.controller.js.map