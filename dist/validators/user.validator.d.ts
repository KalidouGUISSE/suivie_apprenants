import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    nom: z.ZodString;
    prenom: z.ZodString;
    email: z.ZodString;
    login: z.ZodString;
    password: z.ZodString;
    telephone: z.ZodOptional<z.ZodString>;
    role: z.ZodString;
    adresse: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
//# sourceMappingURL=user.validator.d.ts.map