export const formatSuccess = (data, code = 200, message = "ok") => ({
    data, statut: "success", code, message
});
export const formatError = (code, message) => ({
    data: null, statut: "error", code, message
});
//# sourceMappingURL=responseFormatter.js.map