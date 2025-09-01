import { z } from "zod";
export const createProfileSchema = z.object({
    libelle: z.string().min(3).max(50),
});
export const updateProfileSchema = createProfileSchema;
//# sourceMappingURL=profil.validator.js.map