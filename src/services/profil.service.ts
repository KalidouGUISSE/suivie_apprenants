import prisma from "./prismaService.js";
import type { CreateProfileInput } from "../validators/profil.validator.js";

export class ProfileService {
  static async createProfile(data: CreateProfileInput) {
    return prisma.profil.create({
      data: {
        libelle: data.libelle,
      },
    });
  }

  static async getAllProfiles() {
    return prisma.profil.findMany();
  }

  static async getProfileById(id: number) {
    return prisma.profil.findUnique({ where: { id } });
  }

  static async updateProfile(id: number, data: CreateProfileInput) {
    return prisma.profil.update({
      where: { id },
      data: {
        libelle: data.libelle,
      },
    });
  }
 
  static async deleteProfile(id: number) {
    return prisma.profil.delete({ where: { id } });
  }
}