import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class UserService {
    static async create(data) {
        return prisma.users.create({ data });
    }
    static async getAll() {
        return prisma.users.findMany();
    }
    static async getOne(id) {
        return prisma.users.findUnique({ where: { id } });
    }
    static async update(id, data) {
        return prisma.users.update({ where: { id }, data });
    }
    static async delete(id) {
        return prisma.users.delete({ where: { id } });
    }
}
//# sourceMappingURL=user.service.js.map