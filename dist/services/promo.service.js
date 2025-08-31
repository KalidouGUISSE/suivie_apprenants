import prisma from "./prismaService.js";
export class PromoService {
    static async createPromo(data) {
        return prisma.promo.create({
            data: {
                libelle: data.libelle,
                dateDebut: new Date(data.dateDebut),
                dateFin: new Date(data.dateFin),
            },
        });
    }
    static async getAllPromos() { return prisma.promo.findMany(); }
    static async getPromoById(id) { return prisma.promo.findUnique({ where: { id } }); }
    static async updatePromo(id, data) {
        return prisma.promo.update({
            where: { id },
            data: {
                libelle: data.libelle,
                dateDebut: new Date(data.dateDebut),
                dateFin: new Date(data.dateFin),
            },
        });
    }
    static async deletePromo(id) { return prisma.promo.delete({ where: { id } }); }
}
//# sourceMappingURL=promo.service.js.map