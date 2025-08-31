import type { CreatePromoInput } from "../validators/promo.validator.js";
export declare class PromoService {
    static createPromo(data: CreatePromoInput): Promise<{
        libelle: string;
        id: number;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static getAllPromos(): Promise<{
        libelle: string;
        id: number;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    static getPromoById(id: number): Promise<{
        libelle: string;
        id: number;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    static updatePromo(id: number, data: CreatePromoInput): Promise<{
        libelle: string;
        id: number;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deletePromo(id: number): Promise<{
        libelle: string;
        id: number;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=promo.service.d.ts.map