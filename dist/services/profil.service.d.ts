import type { CreateProfileInput } from "../validators/profil.validator.js";
export declare class ProfileService {
    static createProfile(data: CreateProfileInput): Promise<{
        id: number;
        libelle: string;
    }>;
    static getAllProfiles(): Promise<{
        id: number;
        libelle: string;
    }[]>;
    static getProfileById(id: number): Promise<{
        id: number;
        libelle: string;
    } | null>;
    static updateProfile(id: number, data: CreateProfileInput): Promise<{
        id: number;
        libelle: string;
    }>;
    static deleteProfile(id: number): Promise<{
        id: number;
        libelle: string;
    }>;
}
//# sourceMappingURL=profil.service.d.ts.map