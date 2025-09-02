import { AuthService } from "../services/auth.service.js";
import type { Request,Response } from "express";
import { formatSuccess, formatError } from "../utils/responseFormatter.js";

export class AuthController {
    static async login(req:Request,res:Response){
        try {
            const {email,password} = req.body
            const tokens = AuthService.login(email,password)
            return res.json(formatSuccess(tokens))
        } catch (error) 
        {
            return res.json(formatError(401, "Identifiants invalides"))
        }

    }

}