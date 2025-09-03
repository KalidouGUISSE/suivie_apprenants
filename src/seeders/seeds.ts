import { seedNiveaux } from "./seedNiveaux.js";
import { seedProfils } from "./seedProfils.js";
import { seedPermissions } from "./seedPermissions.js";
import { seedCompetences } from "./seedCompetences.js";
import { seedPromos } from "./seedPromo.js";
import { seedReferentiels } from "./seedReferentiels.js";
import { seedProfilSortie } from "./seedProfilsSortie.js";
import { seedUsers } from "./seedUsers.js";
import prisma from "../services/prismaService.js";

async function main() {
  console.log("Seeding database...");

  await seedNiveaux();
  await seedProfils();
  await seedPermissions();
  await seedCompetences();
  await seedPromos();
  await seedReferentiels();
  await seedProfilSortie();
  await seedUsers();

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
