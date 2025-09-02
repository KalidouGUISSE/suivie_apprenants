import { z } from "zod";
export declare const createReferentielSchema: z.ZodObject<{
    libelle: z.ZodString;
    competences: z.ZodArray<z.ZodObject<{
        libellet: z.ZodString;
        niveau: z.ZodArray<z.ZodObject<{
            libellet: z.ZodString;
            rang: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateReferentielInput = z.infer<typeof createReferentielSchema>;
//# sourceMappingURL=referentiel.validator.d.ts.map