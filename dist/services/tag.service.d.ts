import type { CreateTagInput, UpdateTagInput } from "../validators/tag.validator.js";
export declare class TagService {
    static createTag(data: CreateTagInput): Promise<{
        id: number;
        nom: string;
    }>;
    static getAllTags(): Promise<{
        id: number;
        nom: string;
    }[]>;
    static getTagById(id: number): Promise<{
        id: number;
        nom: string;
    } | null>;
    static updateTag(id: number, data: UpdateTagInput): Promise<{
        id: number;
        nom: string;
    }>;
    static deleteTag(id: number): Promise<{
        id: number;
        nom: string;
    }>;
}
//# sourceMappingURL=tag.service.d.ts.map