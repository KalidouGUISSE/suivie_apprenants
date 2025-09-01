import prisma from "./prismaService.js";
import type { CreateProfilSortieInput } from "../validators/profilSortie.validator.js";

export class ProfilSortieService {
  static async create(data: CreateProfilSortieInput) {
    return prisma.profilSortie.create({ data });
  }

  static async getAll() {
    return prisma.profilSortie.findMany();
  }

  static async getById(id: number) {
    return prisma.profilSortie.findUnique({ where: { id } });
  }

  static async update(id: number, data: CreateProfilSortieInput) {
    return prisma.profilSortie.update({ where: { id }, data });
  }

  static async delete(id: number) {
    return prisma.profilSortie.delete({ where: { id } });
  }
}
