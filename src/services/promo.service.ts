import prisma from "./prismaService.js";
import type { CreatePromoInput } from "../validators/promo.validator.js";

export class PromoService {
  static async createPromo(data: CreatePromoInput) {
    return prisma.promo.create({
      data: {
        libelle: data.libelle,
        dateDebut: new Date(data.dateDebut),
        dateFin: new Date(data.dateFin),
      },
    });
  }
  static async getAllPromos() { return prisma.promo.findMany(); }
  static async getPromoById(id: number) { return prisma.promo.findUnique({ where: { id } }); }
  static async updatePromo(id: number, data: CreatePromoInput) {
    return prisma.promo.update({
      where: { id },
      data: {
        libelle: data.libelle,
        dateDebut: new Date(data.dateDebut),
        dateFin: new Date(data.dateFin),
      },
    });
  }
  static async deletePromo(id: number) { return prisma.promo.delete({ where: { id } }); }
}
