import { z } from "zod";
export declare const createPromoSchema: z.ZodObject<{
    libelle: z.ZodString;
    dateDebut: z.ZodString;
    dateFin: z.ZodString;
}, z.core.$strip>;
export type CreatePromoInput = z.infer<typeof createPromoSchema>;
//# sourceMappingURL=promo.validator.d.ts.map