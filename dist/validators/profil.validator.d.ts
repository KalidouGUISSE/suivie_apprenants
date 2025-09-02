import { z } from "zod";
export declare const createProfileSchema: z.ZodObject<{
    libelle: z.ZodString;
}, z.core.$strip>;
export declare const updateProfileSchema: z.ZodObject<{
    libelle: z.ZodString;
}, z.core.$strip>;
export type CreateProfileInput = z.infer<typeof createProfileSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
//# sourceMappingURL=profil.validator.d.ts.map