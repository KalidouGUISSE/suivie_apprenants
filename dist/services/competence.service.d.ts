import type { CreateCompetenceInput } from "../validators/competence.validator.js";
export declare class CompetenceService {
    static createCompetence(data: CreateCompetenceInput): Promise<{
        niveaux: {
            id: number;
            libellet: string;
            rang: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }>;
    static getAllCompetences(): Promise<({
        niveaux: {
            id: number;
            libellet: string;
            rang: number;
        }[];
    } & {
        libelle: string;
        id: number;
    })[]>;
    static getCompetenceById(id: number): Promise<({
        niveaux: {
            id: number;
            libellet: string;
            rang: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }) | null>;
    static updateCompetence(id: number, data: CreateCompetenceInput): Promise<{
        niveaux: {
            id: number;
            libellet: string;
            rang: number;
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
        id: number;
        libellet: string;
        rang: number;
    }[]>;
}
//# sourceMappingURL=competence.service.d.ts.map