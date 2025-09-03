import { AuthService } from "../services/auth.service.js";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";
import { HttpStatus } from "../enums/httpStatus.js";
import { KEY, Message } from "../enums/Message.js";
import { CookieHelper } from "../utils/cookieHelper.js";
export class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const { accessToken, refreshToken } = await AuthService.login(email, password);
            // ✅ Utilisation du helper
            CookieHelper.setRefreshToken(res, refreshToken);
            return res.status(HttpStatus.OK).json(formatSuccess({ accessToken, refreshToken }));
        }
        catch (error) {
            return res.json(formatError(HttpStatus.UNAUTHORIZED, Message.IDENTIFIANTS_INVALIDE));
        }
    }
    static async refreshToken(req, res) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken)
                res.status(HttpStatus.BAD_REQUEST).json(formatError(HttpStatus.BAD_REQUEST, Message.REFREAH_TOKEN_MANQANT));
            const newAccessToken = await AuthService.refreshAccessToken(refreshToken);
            return res.json(formatSuccess({ accessToken: newAccessToken }));
        }
        catch (error) {
            return res.status(HttpStatus.UNAUTHORIZED).json(formatError(HttpStatus.UNAUTHORIZED, error.message || Message.REFREAH_TOKEN_INVALIDE));
        }
    }
    //fonction pour la deconnection
    static async logout(req, res) {
        CookieHelper.clearRefreshToken(res);
        return res.status(HttpStatus.OK).json(formatSuccess({ message: "Déconnexion réussie" }));
    }
}
//# sourceMappingURL=auth.controller.js.map