import prisma from "./prismaService.js";
export class NiveauService {
    static async createNiveau(data) {
        return prisma.niveau.create({
            data: {
                libelle: data.libelle,
                rang: data.rang,
            },
        });
    }
    static async getAllNiveaux() {
        return prisma.niveau.findMany();
    }
    static async getNiveauById(id) {
        return prisma.niveau.findUnique({
            where: { id },
        });
    }
    static async updateNiveau(id, data) {
        return prisma.niveau.update({
            where: { id },
            data: {
                libelle: data.libelle,
                rang: data.rang,
            },
        });
    }
    static async deleteNiveau(id) {
        return prisma.niveau.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=niveau.service.js.map