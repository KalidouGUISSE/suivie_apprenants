import { z } from "zod";
// Regex simple pour valider un email basique
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const schemaAuth = z.object({
    email: z.string()
        .regex(emailRegex, { message: "Email invalide" }),
    password: z.string()
        .min(6, { message: "Mot de passe trop court" })
});
//# sourceMappingURL=auth.validator.js.map