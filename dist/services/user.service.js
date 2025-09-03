import prisma from "./prismaService.js";
export class UserService {
    static async create(data) {
        return prisma.users.create({
            data: {
                nom: data.nom,
                prenom: data.prenom,
                email: data.email,
                login: data.login,
                password: data.password,
                telephone: data.telephone,
                adresse: data.adresse,
                profilId: data.profilId,
            },
            include: {
                profil: true,
            },
        });
    }
    static async getAll() {
        return prisma.users.findMany({
            include: {
                profil: true,
            },
        });
    }
    static async getOne(id) {
        return prisma.users.findUnique({
            where: { id },
            include: {
                profil: true,
            },
        });
    }
    static async update(id, data) {
        return prisma.users.update({
            where: { id },
            data: {
                nom: data.nom,
                prenom: data.prenom,
                email: data.email,
                login: data.login,
                password: data.password,
                telephone: data.telephone,
                adresse: data.adresse,
                profilId: data.profilId,
            },
            include: {
                profil: true,
            },
        });
    }
    static async delete(id) {
        return prisma.users.delete({
            where: { id },
            include: {
                profil: true,
            },
        });
    }
}
//# sourceMappingURL=user.service.js.map