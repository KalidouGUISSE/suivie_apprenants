import { z } from "zod";
export const createNiveauSchema = z.object({
    libelle: z.string().min(1, "Libellé obligatoire"),
    rang: z.number().int().positive("Le rang doit être positif"),
});
//# sourceMappingURL=niveau.validator.js.map