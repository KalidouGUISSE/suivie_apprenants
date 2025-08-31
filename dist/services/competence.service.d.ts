import type { CreateCompetenceInput } from "../validators/competence.validator.js";
export declare class CompetenceService {
    static createCompetence(data: CreateCompetenceInput): Promise<{
        niveaux: {
            libelle: string;
            rang: number;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }>;
    static getAllCompetences(): Promise<({
        niveaux: {
            libelle: string;
            rang: number;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    })[]>;
    static getCompetenceById(id: number): Promise<({
        niveaux: {
            libelle: string;
            rang: number;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }) | null>;
    static updateCompetence(id: number, data: CreateCompetenceInput): Promise<{
        niveaux: {
            libelle: string;
            rang: number;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }>;
    static deleteCompetence(id: number): Promise<{
        libelle: string;
        id: number;
    }>;
    static getNiveauxByCompetenceId(competenceId: number): Promise<{
        libelle: string;
        rang: number;
        id: number;
    }[]>;
}
//# sourceMappingURL=competence.service.d.ts.map