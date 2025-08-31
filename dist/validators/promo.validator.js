import { z } from "zod";
export const createPromoSchema = z.object({
    libelle: z.string().min(6, "Libellé obligatoire"),
    dateDebut: z.string().refine(d => !isNaN(Date.parse(d)), { message: "Date de début invalide" }),
    dateFin: z.string().refine(d => !isNaN(Date.parse(d)), { message: "Date de fin invalide" }),
});
//# sourceMappingURL=promo.validator.js.map