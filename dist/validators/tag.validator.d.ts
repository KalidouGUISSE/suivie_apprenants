import { z } from "zod";
export declare const createTagSchema: z.ZodObject<{
    nom: z.ZodString;
}, z.core.$strip>;
export declare const updateTagSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTagInput = z.infer<typeof createTagSchema>;
export type UpdateTagInput = z.infer<typeof updateTagSchema>;
//# sourceMappingURL=tag.validator.d.ts.map