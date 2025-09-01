import { z } from "zod";
import { formatError } from "../utils/responseFormatter.js";
export const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);
            const errorMessage = `Erreurs de validation: ${errors.join(', ')}`;
            return res.status(400).json(formatError(400, errorMessage));
        }
        next();
    };
};
//# sourceMappingURL=validation.middleware.js.map