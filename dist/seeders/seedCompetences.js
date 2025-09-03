import prisma from "./../services/prismaService.js";
export async function seedCompetences() {
    console.log("Seeding Competences...");
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
    console.log("Competences seeded.");
}
//# sourceMappingURL=seedCompetences.js.map