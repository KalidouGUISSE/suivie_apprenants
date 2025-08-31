import { z } from "zod";

export const createProfilSortieSchema = z.object({
  libelle: z.string().min(1, "Libellé obligatoire"),
});

export type CreateProfilSortieInput = z.infer<typeof createProfilSortieSchema>;
