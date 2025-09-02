import prisma from "./prismaService.js";
import type { CreateNiveauInput } from "../validators/niveau.validator.js";

export class NiveauService {
  static async createNiveau(data: CreateNiveauInput) {
    return prisma.niveau.create({
      data: {
        libelle: data.libelle,
        rang: data.rang,
      },
    });
  }
//code ajouter
  static async getAllNiveaux(skip = 0, take = 10) {
    // return prisma.niveau.findMany();
     return prisma.niveau.findMany({
      skip,
      take,
    });
  }

  static async getNiveauById(id: number) {
    return prisma.niveau.findUnique({
      where: { id },
    });
  }

  static async updateNiveau(id: number, data: CreateNiveauInput) {
    return prisma.niveau.update({
      where: { id },
      data: {
        libelle: data.libelle,
        rang: data.rang,
      },
    });
  }

  static async deleteNiveau(id: number) {
    return prisma.niveau.delete({
      where: { id },
    });
  }
}
