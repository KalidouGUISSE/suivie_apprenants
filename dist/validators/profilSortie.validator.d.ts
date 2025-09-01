import { z } from "zod";
export declare const createProfilSortieSchema: z.ZodObject<{
    libelle: z.ZodString;
}, z.core.$strip>;
export declare const updateProfilSortieSchema: z.ZodObject<{
    libelle: z.ZodString;
}, z.core.$strip>;
export type CreateProfilSortieInput = z.infer<typeof createProfilSortieSchema>;
export type UpdateProfilSortieInput = z.infer<typeof updateProfilSortieSchema>;
//# sourceMappingURL=profilSortie.validator.d.ts.map