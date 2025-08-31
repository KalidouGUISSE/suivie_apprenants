import prisma from "./prismaService.js";
import type { CreateCompetenceInput } from "../validators/competence.validator.js";

export class CompetenceService {
  // Crée une compétence et connecte les 3 niveaux partagés existants
  static async createCompetence(data: CreateCompetenceInput) {
    // Récupère les 3 niveaux partagés
    const niveauxPartages = await prisma.niveau.findMany({
      where: { rang: { in: [1, 2, 3] } } // suppose que Débutant=1, Intermédiaire=2, Avancé=3
    });

    return prisma.competence.create({
      data: {
        libelle: data.libelle,
        niveaux: {
          connect: niveauxPartages.map(n => ({ id: n.id })) // connecte aux niveaux existants
        }
      },
      include: { niveaux: true } // renvoie la compétence avec ses niveaux
    });
  }

  // Récupère toutes les compétences
  static async getAllCompetences() {
    return prisma.competence.findMany({ include: { niveaux: true } });
  }

  // Récupère une compétence par ID
  static async getCompetenceById(id: number) {
    return prisma.competence.findUnique({ where: { id }, include: { niveaux: true } });
  }

  // Met à jour uniquement le libelle de la compétence
  static async updateCompetence(id: number, data: CreateCompetenceInput) {
    return prisma.competence.update({
      where: { id },
      data: { libelle: data.libelle },
      include: { niveaux: true } // conserve les niveaux connectés
    });
  }

  // Supprime une compétence
  static async deleteCompetence(id: number) {
    return prisma.competence.delete({ where: { id } });
  }

  // Récupérer tous les niveaux associés à une compétence
static async getNiveauxByCompetenceId(competenceId: number) {
  const competence = await prisma.competence.findUnique({
    where: { id: competenceId },
    include: { niveaux: true } // récupère les niveaux liés
  });

  if (!competence) {
    throw new Error("Compétence non trouvée");
  }

  return competence.niveaux;
}
}
