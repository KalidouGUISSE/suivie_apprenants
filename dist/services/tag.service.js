import prisma from "./prismaService.js";
// Importe les types TypeScript générés à partir des schémas Zod pour garantir la validité des données.
export class TagService {
    // Déclare une classe statique qui regroupe toutes les méthodes liées au modèle Tag.
    static async createTag(data) {
        return prisma.tag.create({ data });
    }
    // Crée un nouveau tag dans la base de données avec les données validées.
    static async getAllTags() {
        return prisma.tag.findMany();
    }
    // Récupère tous les tags présents dans la base de données.
    static async getTagById(id) {
        return prisma.tag.findUnique({ where: { id } });
    }
    // Récupère un tag précis selon son identifiant (id).
    static async updateTag(id, data) {
        return prisma.tag.update({ where: { id }, data: { "nom": data.nom } });
    }
    // Met à jour un tag existant selon son id et les nouvelles données.
    static async deleteTag(id) {
        return prisma.tag.delete({ where: { id } });
    }
}
//# sourceMappingURL=tag.service.js.map