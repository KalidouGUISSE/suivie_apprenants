export class CookieHelper {
    static setRefreshToken(res, token) {
        res.cookie("refreshToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // ⚠️ pas de dépendance directe à KEY ici
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000, // 24h
        });
    }
    static clearRefreshToken(res) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
    }
}
//# sourceMappingURL=cookieHelper.js.map