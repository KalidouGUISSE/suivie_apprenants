import prisma from "./services/prismaService.js";

async function main() {
  console.log("Seeding database...");

  // 1. Seed Niveaux partagés
  const niveauxData = [
    { libelle: "Débutant", rang: 1 },
    { libelle: "Intermédiaire", rang: 2 },
    { libelle: "Avancé", rang: 3 },
  ];

  for (const n of niveauxData) {
      await prisma.niveau.upsert({
          where: { libelle: n.libelle }, // libelle est unique
          update: {},
          create: n,
      });
  }

  // 2. Seed Profils
  const profilsData = [
    { libelle: "Admin" },
    { libelle: "Formateur" },
    { libelle: "Apprenant" },
  ];

  for (const p of profilsData) {
    await prisma.profil.upsert({
      where: { libelle: p.libelle },
      update: {},
      create: p,
    });
  }

  // 3. Seed Competences exemple
  const niveaux = await prisma.niveau.findMany();
  await prisma.competence.upsert({
    where: { id: 1 },
    update: {},
    create: {
      libelle: "Programmation",
      niveaux: {
        connect: niveaux.map((n) => ({ id: n.id })),
      },
    },
  });
  

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
