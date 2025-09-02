import type { Request, Response } from "express";
export declare class ReferentielService {
    static getAll(): Promise<{
        id: number;
        libelle: string;
    }[]>;
    static getCompetencesByReferentiel(idRerentiel: number): Promise<({
        competences: {
            id: number;
            libelle: string;
        }[];
    } & {
        id: number;
        libelle: string;
    }) | null>;
    static addCompetenceToReferentiel(req: Request, res: Response): Promise<{
        competences: {
            id: number;
            libelle: string;
        }[];
    } & {
        id: number;
        libelle: string;
    }>;
}
//# sourceMappingURL=referentiel.service.d.ts.map