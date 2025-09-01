import { z } from "zod";
export declare const createPromoSchema: z.ZodObject<{
    libelle: z.ZodString;
    dateDebut: z.ZodString;
    dateFin: z.ZodString;
}, z.core.$strip>;
export declare const updatePromoSchema: z.ZodObject<{
    libelle: z.ZodOptional<z.ZodString>;
    dateDebut: z.ZodOptional<z.ZodString>;
    dateFin: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreatePromoInput = z.infer<typeof createPromoSchema>;
export type UpdatePromoInput = z.infer<typeof updatePromoSchema>;
//# sourceMappingURL=promo.validator.d.ts.map