import type { CreateNiveauInput } from "../validators/niveau.validator.js";
export declare class NiveauService {
    static createNiveau(data: CreateNiveauInput): Promise<{
        id: number;
        libelle: string;
        rang: number;
    }>;
    static getAllNiveaux(skip?: number, take?: number): Promise<{
        id: number;
        libelle: string;
        rang: number;
    }[]>;
    static getNiveauById(id: number): Promise<{
        id: number;
        libelle: string;
        rang: number;
    } | null>;
    static updateNiveau(id: number, data: CreateNiveauInput): Promise<{
        id: number;
        libelle: string;
        rang: number;
    }>;
    static deleteNiveau(id: number): Promise<{
        id: number;
        libelle: string;
        rang: number;
    }>;
}
//# sourceMappingURL=niveau.service.d.ts.map