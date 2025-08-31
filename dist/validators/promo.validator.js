import { z } from "zod";
export const createPromoSchema = z.object({
    libelle: z.string().min(6, "Libellé obligatoire"),
<<<<<<< HEAD
    dateDebut: z.string()
        .min(1, "Date de début obligatoire")
        .refine(d => !isNaN(Date.parse(d)), { message: "Date de début invalide" }),
    dateFin: z.string()
        .min(1, "Date de fin obligatoire")
        .refine(d => !isNaN(Date.parse(d)), { message: "Date de fin invalide" }),
=======
    dateDebut: z.string().refine(d => !isNaN(Date.parse(d)), { message: "Date de début invalide" }),
    dateFin: z.string().refine(d => !isNaN(Date.parse(d)), { message: "Date de fin invalide" }),
>>>>>>> 525e28a50e29f1ae3047b950b5e101a7d5a432ad
});
export const updatePromoSchema = z.object({
    libelle: z.string().min(6, "Libellé obligatoire").optional(),
    dateDebut: z.string()
        .min(1, "Date de début obligatoire")
        .refine(d => !isNaN(Date.parse(d)), { message: "Date de début invalide" })
        .optional(),
    dateFin: z.string()
        .min(1, "Date de fin obligatoire")
        .refine(d => !isNaN(Date.parse(d)), { message: "Date de fin invalide" })
        .optional(),
});
//# sourceMappingURL=promo.validator.js.map