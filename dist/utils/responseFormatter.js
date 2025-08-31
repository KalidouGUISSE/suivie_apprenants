<<<<<<< HEAD
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
=======
export const formatSuccess = (data, code = 200, message = "ok") => ({
    data, statut: "success", code, message
});
export const formatError = (code, message) => ({
    data: null, statut: "error", code, message
});
>>>>>>> 7cce4fc1f9d7c0d3a046be61d9965a32f61dc7cd
//# sourceMappingURL=responseFormatter.js.map