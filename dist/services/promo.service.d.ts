import type { CreatePromoInput } from "../validators/promo.validator.js";
export declare class PromoService {
    static createPromo(data: CreatePromoInput): Promise<{
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    static getAllPromos(): Promise<{
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    static getPromoById(id: number): Promise<{
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null>;
    static updatePromo(id: number, data: CreatePromoInput): Promise<{
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    static deletePromo(id: number): Promise<{
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
//# sourceMappingURL=promo.service.d.ts.map