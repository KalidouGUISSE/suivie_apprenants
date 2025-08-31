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
}
//# sourceMappingURL=referentiel.service.js.map