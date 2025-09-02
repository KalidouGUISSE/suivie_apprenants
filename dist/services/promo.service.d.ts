import type { CreatePromoInput } from "../validators/promo.validator.js";
export declare class PromoService {
    static createPromo(data: CreatePromoInput): Promise<{
        id: number;
        libelle: string;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }>;
    static getAllPromos(): Promise<{
        id: number;
        libelle: string;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }[]>;
    static getPromoById(id: number): Promise<{
        id: number;
        libelle: string;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    } | null>;
    static updatePromo(id: number, data: CreatePromoInput): Promise<{
        id: number;
        libelle: string;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }>;
    static deletePromo(id: number): Promise<{
        id: number;
        libelle: string;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }>;
}
//# sourceMappingURL=promo.service.d.ts.map