import { z } from "zod";
export const createUserSchema = z.object({
    nom: z.string().min(2, "Nom trop court"),
    prenom: z.string().min(2, "Prénom trop court"),
    email: z.string().email("Email invalide"),
    login: z.string().min(2, "Login trop court"),
    password: z.string().min(6, "Mot de passe trop court"),
    telephone: z.string().optional(),
    role: z.string(),
    adresse: z.string().optional(),
});
//# sourceMappingURL=user.validator.js.map