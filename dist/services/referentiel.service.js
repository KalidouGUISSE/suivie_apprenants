import prisma from "./prismaService.js";
export class ReferentielService {
    static async getAll() {
        return (await prisma.referentiel.findMany());
    }
    static async getCompetencesByReferentiel(idRerentiel) {
        return prisma.referentiel.findUnique({
            where: { id: idRerentiel },
            include: { competences: true }
        });
    }
    static async addCompetenceToReferentiel(req, res) {
        const id = Number(req.params.id);
        const { competences } = req.body;
        return await prisma.referentiel.update({
            where: { id },
            data: {
                competences: {
                    connect: competences.map((id) => ({ id: id }))
                }
            },
            include: { competences: true }
        });
    }
}
//# sourceMappingURL=referentiel.service.js.map