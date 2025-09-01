import prisma from "./prismaService.js";
// Importe l’instance Prisma pour interagir avec la base de données.

import type { CreateTagInput, UpdateTagInput } from "../validators/tag.validator.js";
// Importe les types TypeScript générés à partir des schémas Zod pour garantir la validité des données.

export class TagService {
// Déclare une classe statique qui regroupe toutes les méthodes liées au modèle Tag.

  static async createTag(data: CreateTagInput) {
    return prisma.tag.create({ data });
  }
  // Crée un nouveau tag dans la base de données avec les données validées.

  static async getAllTags() {
    return prisma.tag.findMany();
  }
  // Récupère tous les tags présents dans la base de données.

  static async getTagById(id: number) {
    return prisma.tag.findUnique({ where: { id } });
  }
  // Récupère un tag précis selon son identifiant (id).

  static async updateTag(id: number, data: UpdateTagInput) {
    return prisma.tag.update({ where: { id }, data:{ "nom": data.nom!} });
  }
  // Met à jour un tag existant selon son id et les nouvelles données.

  static async deleteTag(id: number) {
    return prisma.tag.delete({ where: { id } });
  }
  // Supprime un tag selon son id.
}