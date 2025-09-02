import type { CreateNiveauInput } from "../validators/niveau.validator.js";
export declare class NiveauService {
    static createNiveau(data: CreateNiveauInput): Promise<{
        libelle: string;
        rang: number;
        id: number;
    }>;
    static getAllNiveaux(): Promise<{
        libelle: string;
        rang: number;
        id: number;
    }[]>;
    static getNiveauById(id: number): Promise<{
        libelle: string;
        rang: number;
        id: number;
    } | null>;
    static updateNiveau(id: number, data: CreateNiveauInput): Promise<{
        libelle: string;
        rang: number;
        id: number;
    }>;
    static deleteNiveau(id: number): Promise<{
        libelle: string;
        rang: number;
        id: number;
    }>;
}
//# sourceMappingURL=niveau.service.d.ts.map