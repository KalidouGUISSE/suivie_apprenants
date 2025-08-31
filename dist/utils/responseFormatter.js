export const formatSuccess = (data, status = 200, message = "Succès") => {
    return {
        status,
        success: true,
        message,
        data,
    };
};
export const formatError = (status, message, errors = null) => {
    return {
        status,
        success: false,
        message,
        errors,
    };
};
//# sourceMappingURL=responseFormatter.js.map