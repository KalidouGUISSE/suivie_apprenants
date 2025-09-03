import prisma from "./../services/prismaService.js";

export async function seedPermissions() {
  console.log("Seeding Permissions...");

  const resources = [
    "user",
    "promo",
    "competence",
    "referentiel",
    "profil",
    "profilSortie",
  ];

  const actions = ["create", "read", "update", "delete"];

  // Génération des permissions
  const permissionsData = resources.flatMap((resource) =>
    actions.map((action) => ({ action: `${action}:${resource}` }))
  );

  // Insertion (upsert pour éviter doublons)
  for (const perm of permissionsData) {
    await prisma.permission.upsert({
      where: { action: perm.action },
      update: {},
      create: perm,
    });
  }

  console.log("✅ Permissions seeded successfully.");
}
