import prisma from "./../services/prismaService.js";


export async function seedProfils() {
  console.log("Seeding Profils...");

const profilsData = [
  { libelle: "ADMIN" },
  { libelle: "MANAGER" },
  { libelle: "CM" },
  { libelle: "APPRENANT" },
];


  for (const p of profilsData) {
    await prisma.profil.upsert({
      where: { libelle: p.libelle },
      update: {},
      create: p,
    });
  }

  console.log("Profils seeded.");
}
