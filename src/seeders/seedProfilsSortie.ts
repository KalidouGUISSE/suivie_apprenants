import prisma from "../services/prismaService.js";

export async function seedProfilSortie() {
  console.log("Seeding ProfilSortie...");

  const profilsSortieData = [
    { libelle: "Développeur Frontend" },
    { libelle: "Développeur Backend" },
    { libelle: "Data Analyst" },
  ];

  for (const p of profilsSortieData) {
    await prisma.profilSortie.upsert({
      where: { libelle: p.libelle },
      update: {},
      create: p,
    });
  }

  console.log("ProfilSortie seeded.");
}
