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
                role: data.role,
                adresse: data.adresse,
            },
        });
    }
    static async getAll() {
        return prisma.users.findMany();
    }
    static async getOne(id) {
        return prisma.users.findUnique({ where: { id } });
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
                role: data.role,
                adresse: data.adresse,
            },
        });
    }
    static async delete(id) {
        return prisma.users.delete({ where: { id } });
    }
}
//# sourceMappingURL=user.service.js.map