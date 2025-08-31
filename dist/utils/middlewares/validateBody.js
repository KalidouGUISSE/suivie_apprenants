import { formatError } from "../responseFormatter.js";
export const validateBody = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res
            .status(400)
            .json(formatError(400, "Validation échouée", result.error.issues));
    }
    req.body = result.data;
    next();
};
//# sourceMappingURL=validateBody.js.map