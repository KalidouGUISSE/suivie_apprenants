import type { Request, Response } from "express";
export declare class ReferentielService {
    static getAll(): Promise<{
        libelle: string;
        id: number;
    }[]>;
    static getCompetencesByReferentiel(idRerentiel: number): Promise<({
        competences: {
            libelle: string;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }) | null>;
    static addCompetenceToReferentiel(req: Request, res: Response): Promise<{
        competences: {
            libelle: string;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }>;
}
//# sourceMappingURL=referentiel.service.d.ts.map