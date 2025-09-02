
import prisma  from "./prismaService.js";
import type { Request,Response } from "express";
export class ReferentielService{

    static async getAll(){
        return (await prisma.referentiel.findMany())
    }
    
    static async getCompetencesByReferentiel(idRerentiel:number){
        return prisma.referentiel.findUnique({
            where:{id:idRerentiel},
            include:{competences:true}

        })

    }

    static async addCompetenceToReferentiel(req:Request,res:Response)
    {
        const id = Number(req.params.id)
        const {competences} = req.body
       return await prisma.referentiel.update(
        {
            where:{id},
            data:{
                competences:{
                    connect:competences.map((id:number) => ({ id: id }))
                }
            },
             include: { competences: true }
        }
       )

    }
}
