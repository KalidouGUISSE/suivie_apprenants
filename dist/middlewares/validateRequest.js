export const validateBody = (schema) => (req, res, next) => {
    try {
        const parsed = schema.parse(req.body);
        req.body = parsed;
        next();
    }
    catch (err) {
        const msg = err.errors?.[0]?.message || "Validation error";
        return res.status(400).json({ data: null, statut: "error", code: 400, message: msg });
    }
};
//# sourceMappingURL=validateRequest.js.map