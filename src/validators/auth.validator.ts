import {z} from "zod"

export const schemaAuth = z.object({
    login:z.string().email({message:"Email Invalide"}),
    password :z.string().min(6, { message: "Mot de passe trop court" })
})

