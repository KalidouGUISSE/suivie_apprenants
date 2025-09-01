export declare class UserService {
    static create(data: any): Promise<{
        nom: string;
        prenom: string;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    static getAll(): Promise<{
        nom: string;
        prenom: string;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    static getOne(id: number): Promise<{
        nom: string;
        prenom: string;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null>;
    static update(id: number, data: any): Promise<{
        nom: string;
        prenom: string;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    static delete(id: number): Promise<{
        nom: string;
        prenom: string;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map