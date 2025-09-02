export function sortMiddleware(req, res, next) {
    req.sorting = {
        orderBy: req.query.orderBy || "id",
        order: req.query.order?.toLowerCase() === "desc" ? "desc" : "asc"
    };
    next();
}
//# sourceMappingURL=sort.middleware.js.map