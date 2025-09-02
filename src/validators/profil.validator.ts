import { z } from "zod";

export const createProfileSchema = z.object({
  libelle: z.string().min(3).max(50),
});

export const updateProfileSchema = createProfileSchema;

export type CreateProfileInput = z.infer<typeof createProfileSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;