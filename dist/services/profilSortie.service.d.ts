import type { CreateProfilSortieInput } from "../validators/profilSortie.validator.js";
export declare class ProfilSortieService {
    static create(data: CreateProfilSortieInput): Promise<{
        libelle: string;
        id: number;
    }>;
    static getAll(): Promise<{
        libelle: string;
        id: number;
    }[]>;
    static getById(id: number): Promise<{
        libelle: string;
        id: number;
    } | null>;
    static update(id: number, data: CreateProfilSortieInput): Promise<{
        libelle: string;
        id: number;
    }>;
    static delete(id: number): Promise<{
        libelle: string;
        id: number;
    }>;
}
//# sourceMappingURL=profilSortie.service.d.ts.map