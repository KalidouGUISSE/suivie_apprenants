import prisma from "../services/prismaService.js";

export async function seedPromos() {
  console.log("Seeding Promos...");

  const promosData = [
    { libelle: "Promo 2025", dateDebut: new Date("2025-09-01"), dateFin: new Date("2026-06-30") },
    { libelle: "Promo 2026", dateDebut: new Date("2026-09-01"), dateFin: new Date("2027-06-30") },
  ];

  for (const promo of promosData) {
    await prisma.promo.upsert({
      where: { libelle: promo.libelle },
      update: {},
      create: promo,
    });
  }

  console.log("Promos seeded.");
}
