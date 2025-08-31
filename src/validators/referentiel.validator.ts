import {z} from "zod"

export const createReferentielSchema= z.object({
    libelle : z.string()
                .min(5,{ message: "Le libellé doit contenir au moins 5 caractères" })
                .max(20,{message: "Le libellé doit contenir au moins 6 caractères" }),
    competences : z.array(
        z.object({
      libellet: z.string().min(3, { message: "Libellé de la competence est trop court" }),
      niveau: z.array(
        z.object({
             libellet: z.string().min(3, { message: "Libellé du niveau trop court" }),
            rang: z.number().int().min(1).max(3)
        })
      )
    })
    )
    
})

export type CreateReferentielInput = z.infer<typeof createReferentielSchema>;