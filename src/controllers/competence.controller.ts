import type { Request, Response } from "express";
import { CompetenceService } from "../services/competence.service.js";
import { formatSuccess, formatError, buildMessage } from "../utils/responseFormatter.js";
import { HttpStatus } from "../enums/httpStatus.js";
import { SMS,KEY } from "../enums/sms.js";

export class CompetenceController {
    static async create(req: Request, res: Response){
        try{
            const competence = await CompetenceService.createCompetence(req.body);
            return res.status(HttpStatus.CREATED).json(formatSuccess(competence, HttpStatus.CREATED, buildMessage(KEY.COMPETENCE, SMS.CREATED_SUCCESS)))
        }catch(err: any){
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(formatError(HttpStatus.INTERNAL_SERVER_ERROR, err.message || SMS.SERVER_ERROR));
        }
    }
    static async getAll(req: Request, res: Response) {
        const competences = await CompetenceService.getAllCompetences();
        return res.json(formatSuccess(competences));
    }
    static async getOne(req: Request, res: Response){
        const competence = await CompetenceService.getCompetenceById(Number(req.params.id));
        if (!competence) return res.status(HttpStatus.NOT_FOUND).json(formatError(HttpStatus.NOT_FOUND, buildMessage(KEY.COMPETENCE, SMS.NOT_FOUND)));
        return res.json(formatSuccess(competence))
    }
    static async update(req: Request, res: Response) {
        try {
            const promo = await CompetenceService.updateCompetence(Number(req.params.id), req.body);
            return res.json(formatSuccess(promo, HttpStatus.OK,buildMessage(KEY.COMPETENCE, SMS.UPDATED_SUCCESS)));
        } catch (err: any) {
            return res.status(HttpStatus.BAD_REQUEST).json(formatError(HttpStatus.BAD_REQUEST, err.message || SMS.SERVER_ERROR));
        }
    }
    static async delete(req: Request, res: Response) {
        try {
            await CompetenceService.deleteCompetence(Number(req.params.id));
            return res.json(formatSuccess(null, HttpStatus.OK, buildMessage(KEY.COMPETENCE, SMS.DELETED_SUCCESS)));
        } catch {
            return res.status(HttpStatus.NOT_FOUND).json(formatError(HttpStatus.NOT_FOUND, buildMessage(KEY.COMPETENCE, SMS.NOT_FOUND)));
        }
    }
    static async getNiveaux(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const niveaux = await CompetenceService.getNiveauxByCompetenceId(id);
            res.json({ data: niveaux, statut: KEY.SUCCESS, code: HttpStatus.OK });
        } catch (err: any) {
            res.status(HttpStatus.NOT_FOUND).json({ data: null, statut: KEY.ERROR, code: HttpStatus.NOT_FOUND, message: err.message });
        }
    }
}