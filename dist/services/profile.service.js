import prisma from "./prismaService.js";
export class ProfileService {
    static async createProfile(data) {
        return prisma.profil.create({
            data: {
                libelle: data.libelle,
            },
        });
    }
    static async getAllProfiles() {
        return prisma.profil.findMany();
    }
    static async getProfileById(id) {
        return prisma.profil.findUnique({ where: { id } });
    }
    static async updateProfile(id, data) {
        return prisma.profil.update({
            where: { id },
            data: {
                libelle: data.libelle,
            },
        });
    }
    static async deleteProfile(id) {
        return prisma.profil.delete({ where: { id } });
    }
}
//# sourceMappingURL=profile.service.js.map