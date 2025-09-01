import type { CreatePromoInput } from "../validators/promo.validator.js";
export declare class PromoService {
    static createPromo(data: CreatePromoInput): Promise<{
<<<<<<< HEAD
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
=======
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
>>>>>>> 04683e3bf7822c808d5d428f53c27337d073c9f5
    }>;
}
//# sourceMappingURL=promo.service.d.ts.map