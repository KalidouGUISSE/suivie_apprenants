import type { CreatePromoInput } from "../validators/promo.validator.js";
export declare class PromoService {
    static createPromo(data: CreatePromoInput): Promise<{
        libelle: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }>;
    static getAllPromos(): Promise<{
        libelle: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }[]>;
    static getPromoById(id: number): Promise<{
        libelle: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    } | null>;
    static updatePromo(id: number, data: CreatePromoInput): Promise<{
        libelle: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }>;
    static deletePromo(id: number): Promise<{
        libelle: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: Date;
        dateFin: Date;
    }>;
}
//# sourceMappingURL=promo.service.d.ts.map