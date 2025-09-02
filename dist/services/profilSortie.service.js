import prisma from "./prismaService.js";
export class ProfilSortieService {
    static async create(data) {
        return prisma.profilSortie.create({ data });
    }
    static async getAll() {
        return prisma.profilSortie.findMany();
    }
    static async getById(id) {
        return prisma.profilSortie.findUnique({ where: { id } });
    }
    static async update(id, data) {
        return prisma.profilSortie.update({ where: { id }, data });
    }
    static async delete(id) {
        return prisma.profilSortie.delete({ where: { id } });
    }
}
//# sourceMappingURL=profilSortie.service.js.map