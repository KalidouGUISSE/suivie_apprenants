import prisma from "../services/prismaService.js";

export async function seedUsers() {
  console.log("Seeding Users...");

  const profils = await prisma.profil.findMany();

  const usersData = [
    { nom: "Gueye", prenom: "Ramatoulaye", email: "rama@example.com", login: "rama", password: "password123", profilLibelle: "Admin" },
    { nom: "Diallo", prenom: "Mamadou", email: "mamadou@example.com", login: "mamadou", password: "password123", profilLibelle: "Formateur" },
  ];

  for (const u of usersData) {
    const profil = profils.find((p) => p.libelle === u.profilLibelle);
    if (!profil) continue;

    await prisma.users.upsert({
      where: { email: u.email },
      update: {},
      create: {
        nom: u.nom,
        prenom: u.prenom,
        email: u.email,
        login: u.login,
        password: u.password,
        profilId: profil.id,
      },
    });
  }

  console.log("Users seeded.");
}
