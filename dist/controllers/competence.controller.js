import { CompetenceService } from "../services/competence.service.js";
import { formatSuccess, formatError, buildMessage } from "../utils/responseFormatter.js";
import { HttpStatus } from "../enums/httpStatus.js";
import { Message, KEY } from "../enums/Message.js";
export class CompetenceController {
    static async create(req, res) {
        try {
            const competence = await CompetenceService.createCompetence(req.body);
            return res.status(HttpStatus.CREATED).json(formatSuccess(competence, HttpStatus.CREATED, buildMessage(KEY.COMPETENCE, Message.CREATED_SUCCESS)));
        }
        catch (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(formatError(HttpStatus.INTERNAL_SERVER_ERROR, err.message || Message.SERVER_ERROR));
        }
    }
    static async getAll(req, res) {
        const competences = await CompetenceService.getAllCompetences();
        return res.json(formatSuccess(competences));
    }
    static async getOne(req, res) {
        const competence = await CompetenceService.getCompetenceById(Number(req.params.id));
        if (!competence)
            return res.status(HttpStatus.NOT_FOUND).json(formatError(HttpStatus.NOT_FOUND, buildMessage(KEY.COMPETENCE, Message.NOT_FOUND)));
        return res.json(formatSuccess(competence));
    }
    static async update(req, res) {
        try {
            const promo = await CompetenceService.updateCompetence(Number(req.params.id), req.body);
            return res.json(formatSuccess(promo, HttpStatus.OK, buildMessage(KEY.COMPETENCE, Message.UPDATED_SUCCESS)));
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json(formatError(HttpStatus.BAD_REQUEST, err.message || Message.SERVER_ERROR));
        }
    }
    static async delete(req, res) {
        try {
            await CompetenceService.deleteCompetence(Number(req.params.id));
            return res.json(formatSuccess(null, HttpStatus.OK, buildMessage(KEY.COMPETENCE, Message.DELETED_SUCCESS)));
        }
        catch {
            return res.status(HttpStatus.NOT_FOUND).json(formatError(HttpStatus.NOT_FOUND, buildMessage(KEY.COMPETENCE, Message.NOT_FOUND)));
        }
    }
    static async getNiveaux(req, res) {
        try {
            const id = Number(req.params.id);
            const niveaux = await CompetenceService.getNiveauxByCompetenceId(id);
            res.json({ data: niveaux, statut: KEY.SUCCESS, code: HttpStatus.OK });
        }
        catch (err) {
            res.status(HttpStatus.NOT_FOUND).json({ data: null, statut: KEY.ERROR, code: HttpStatus.NOT_FOUND, message: err.message });
        }
    }
}
//# sourceMappingURL=competence.controller.js.map