import { z } from "zod";
export const createCompetenceSchema = z.object({
    libelle: z
        .string()
        .min(6, { message: "Le libellé doit contenir au moins 6 caractères" })
        .max(100, { message: "Le libellé ne peut pas dépasser 100 caractères" }),
    niveaux: z.array(z.object({
        libellet: z.string().min(3, { message: "Libellé du niveau trop court" }),
        rang: z.number().int().min(1).max(3)
    })).optional()
});
//# sourceMappingURL=competence.validator.js.map