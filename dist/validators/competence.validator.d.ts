import { z } from "zod";
export declare const createCompetenceSchema: z.ZodObject<{
    libelle: z.ZodString;
    niveaux: z.ZodOptional<z.ZodArray<z.ZodObject<{
        libellet: z.ZodString;
        rang: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type CreateCompetenceInput = z.infer<typeof createCompetenceSchema>;
//# sourceMappingURL=competence.validator.d.ts.map