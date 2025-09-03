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
  



  // 4. Seed Users exemple
const profils = await prisma.profil.findMany();

const usersData = [
  {
    nom: "Guissé",
    prenom: "Kalidou",
    email: "kalidou@example.com",
    login: "kalidou",
    password: "password123",
    telephone: "771234567",
    role: "admin",
    adresse: "Dakar",
    profilLibelle: "Admin", // on va chercher le profil correspondant
  },
  {
    nom: "Mamadou",
    prenom: "Diallo",
    email: "mamadou@example.com",
    login: "mamadou",
    password: "password123",
    telephone: "770987654",
    role: "formateur",
    adresse: "Saint-Louis",
    profilLibelle: "Formateur",
  },
  {
    nom: "Aissatou",
    prenom: "Sow",
    email: "aissatou@example.com",
    login: "aissatou",
    password: "password123",
    telephone: "776543210",
    role: "apprenant",
    adresse: "Thiès",
    profilLibelle: "Apprenant",
  },
];

for (const u of usersData) {
  const profil = profils.find((p) => p.libelle === u.profilLibelle);

  if (!profil) {
    console.warn(`Profil non trouvé pour ${u.nom}`);
    continue;
  }

  await prisma.users.upsert({
    where: { email: u.email }, // email unique
    update: {},
    create: {
      nom: u.nom,
      prenom: u.prenom,
      email: u.email,
      login: u.login,
      password: u.password,
      telephone: u.telephone,
      role: u.role,
      adresse: u.adresse,
      profilId: profil.id,
    },
  });
}






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
