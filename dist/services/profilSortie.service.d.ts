import type { CreateProfilSortieInput } from "../validators/profilSortie.validator.js";
export declare class ProfilSortieService {
    static create(data: CreateProfilSortieInput): Promise<{
        id: number;
        libelle: string;
    }>;
    static getAll(): Promise<{
        id: number;
        libelle: string;
    }[]>;
    static getById(id: number): Promise<{
        id: number;
        libelle: string;
    } | null>;
    static update(id: number, data: CreateProfilSortieInput): Promise<{
        id: number;
        libelle: string;
    }>;
    static delete(id: number): Promise<{
        id: number;
        libelle: string;
    }>;
}
//# sourceMappingURL=profilSortie.service.d.ts.map