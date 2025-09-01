import type { CreatePromoInput } from "../validators/promo.validator.js";
export declare class PromoService {
    static createPromo(data: CreatePromoInput): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
    }>;
    static getAllPromos(): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
    }[]>;
    static getPromoById(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
    } | null>;
    static updatePromo(id: number, data: CreatePromoInput): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
    }>;
    static deletePromo(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
    }>;
}
//# sourceMappingURL=promo.service.d.ts.map