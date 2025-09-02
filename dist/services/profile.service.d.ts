import type { CreateProfileInput } from "../validators/profile.validator.js";
export declare class ProfileService {
    static createProfile(data: CreateProfileInput): Promise<{
        libelle: string;
        id: number;
    }>;
    static getAllProfiles(): Promise<{
        libelle: string;
        id: number;
    }[]>;
    static getProfileById(id: number): Promise<{
        libelle: string;
        id: number;
    } | null>;
    static updateProfile(id: number, data: CreateProfileInput): Promise<{
        libelle: string;
        id: number;
    }>;
    static deleteProfile(id: number): Promise<{
        libelle: string;
        id: number;
    }>;
}
//# sourceMappingURL=profile.service.d.ts.map