import { z } from "zod";
export declare const createNiveauSchema: z.ZodObject<{
    libelle: z.ZodString;
    rang: z.ZodNumber;
}, z.core.$strip>;
export type CreateNiveauInput = z.infer<typeof createNiveauSchema>;
//# sourceMappingURL=niveau.validator.d.ts.map