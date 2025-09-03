import prisma from "./prismaService.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { email } from "zod";
import { ExpiresIn, Message } from "../enums/Message.js";
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;
export class AuthService {
    static async login(email, password) {
        const user = await prisma.users.findUnique({
            where: { email: email, password: password }
        });
        if (!user)
            throw new Error(Message.USER_NOT_FOUND);
        // const isMatch = bcrypt.compare(password,user.password);
        // if(!isMatch) throw new Error("Mot de passe incorrect");
        const accessToken = jwt.sign({
            userId: user.id,
            email: user.email,
            role: user.profilId
        }, ACCESS_SECRET, {
            expiresIn: ExpiresIn._1H
        });
        const refreshToken = jwt.sign({
            userId: user.id,
            email: user.email
        }, REFRESH_SECRET, {
            expiresIn: ExpiresIn._24H
        });
        return { accessToken, refreshToken };
    }
    static async refreshAccessToken(refreshToken) {
        try {
            // Vérification du refresh token
            const payload = jwt.verify(refreshToken, REFRESH_SECRET);
            // Génération d'un nouveau accessToken
            const newAccessToken = jwt.sign({ userId: payload.userId, email: payload.email }, ACCESS_SECRET, { expiresIn: ExpiresIn._1H });
            return newAccessToken;
        }
        catch (err) {
            throw new Error(Message.TOKEN_INVALIDE_OR_EXPIRE);
        }
    }
}
//# sourceMappingURL=auth.service.js.map