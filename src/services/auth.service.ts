import  prisma from "./prismaService.js"
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
const ACCESS_SECRET = process.env.ACCESS_SECRET as string
const REFRESH_SECRET = process.env.REFRESH_SECRET as string
/* 
export class AuthService
{
    static async login(email:string , password:string)
    {
        const user = await prisma.users.findUnique({
            where:{email:email,password:password}
        })
        if (!user) throw new Error("Utilisateur introuvable");
     const isMatch = bcrypt.compare(password,user.password);
       if(!isMatch) throw new Error("Mot de passe incorrect");

        const accessToken = jwt.sign(
            {userId:user.id,email:user.email,profilId:user.profilId},
        ACCESS_SECRET,
             { expiresIn: "1h" }
        )
        const refreshToken = jwt.sign(
            {
                userId:user.id,
                email:user.email
            },
            REFRESH_SECRET,
            {expiresIn:"24h"}

        )
       

        
        return {accessToken,refreshToken}
    }
} */

export class AuthService {
  static async login(email: string, password: string) {
    // 1) trouver par email uniquement
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) throw new Error("Utilisateur introuvable");

    // 2) comparer le mot de passe hashé
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new Error("Mot de passe incorrect");

    // 3) inclure profilId dans le payload
    const payload = { userId: user.id, profilId: user.profilId, email: user.email };

    const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: "24h" });

    return { accessToken, refreshToken };
  }
}
