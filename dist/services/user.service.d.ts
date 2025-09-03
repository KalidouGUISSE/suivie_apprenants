export declare class UserService {
    static create(data: any): Promise<{
        profil: {
            id: number;
            libelle: string;
        };
    } & {
        id: number;
        email: string;
        login: string;
        nom: string;
        prenom: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        profilId: number;
    }>;
    static getAll(): Promise<({
        profil: {
            id: number;
            libelle: string;
        };
    } & {
        id: number;
        email: string;
        login: string;
        nom: string;
        prenom: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        profilId: number;
    })[]>;
    static getOne(id: number): Promise<({
        profil: {
            id: number;
            libelle: string;
        };
    } & {
        id: number;
        email: string;
        login: string;
        nom: string;
        prenom: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        profilId: number;
    }) | null>;
    static update(id: number, data: any): Promise<{
        profil: {
            id: number;
            libelle: string;
        };
    } & {
        id: number;
        email: string;
        login: string;
        nom: string;
        prenom: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        profilId: number;
    }>;
    static delete(id: number): Promise<{
        profil: {
            id: number;
            libelle: string;
        };
    } & {
        id: number;
        email: string;
        login: string;
        nom: string;
        prenom: string;
        password: string;
        telephone: string | null;
        role: string;
        adresse: string | null;
        createdAt: Date;
        updatedAt: Date;
        profilId: number;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map