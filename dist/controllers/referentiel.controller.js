import { ReferentielService } from "../services/referentiel.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";
export class ReferentielController {
    static async getAll(req, res) {
        try {
            const data = await ReferentielService.getAll();
            res.json(formatSuccess(data));
        }
        catch (error) {
            res.json(formatError(404, "not found"));
        }
    }
    static async getCompetencesByReferentiel(req, res) {
        try {
            const id = Number(req.params.id);
            const data = await ReferentielService.getCompetencesByReferentiel(id);
            res.json(formatSuccess(data));
        }
        catch (error) {
            res.json(formatError(404, "not found"));
        }
    }
}
//# sourceMappingURL=referentiel.controller.js.map