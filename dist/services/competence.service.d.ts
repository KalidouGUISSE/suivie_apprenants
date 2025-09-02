import type { CreateCompetenceInput } from "../validators/competence.validator.js";
export declare class CompetenceService {
    static createCompetence(data: CreateCompetenceInput): Promise<{
        niveaux: {
            id: number;
            libelle: string;
            rang: number;
        }[];
    } & {
        id: number;
        libelle: string;
    }>;
    static getAllCompetences(): Promise<({
        niveaux: {
            id: number;
            libelle: string;
            rang: number;
        }[];
    } & {
        id: number;
        libelle: string;
    })[]>;
    static getCompetenceById(id: number): Promise<({
        niveaux: {
            id: number;
            libelle: string;
            rang: number;
        }[];
    } & {
        id: number;
        libelle: string;
    }) | null>;
    static updateCompetence(id: number, data: CreateCompetenceInput): Promise<{
        niveaux: {
            id: number;
            libelle: string;
            rang: number;
        }[];
    } & {
        id: number;
        libelle: string;
    }>;
    static deleteCompetence(id: number): Promise<{
        id: number;
        libelle: string;
    }>;
    static getNiveauxByCompetenceId(competenceId: number): Promise<{
        id: number;
        libelle: string;
        rang: number;
    }[]>;
}
//# sourceMappingURL=competence.service.d.ts.map