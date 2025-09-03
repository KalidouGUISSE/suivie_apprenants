import prisma from "../services/prismaService.js";
export async function seedReferentiels() {
    console.log("Seeding Referentiels...");
    const competences = await prisma.competence.findMany();
    const referentielsData = [
        { libelle: "Développement Web", competencesIds: competences.map(c => c.id) },
        { libelle: "Data Science", competencesIds: [] },
    ];
    for (const r of referentielsData) {
        await prisma.referentiel.upsert({
            where: { libelle: r.libelle },
            create: {
                libelle: r.libelle,
                competences: {
                    connect: r.competencesIds.map((id) => ({ id })),
                },
            },
            update: {},
        });
    }
    console.log("Referentiels seeded.");
}
//# sourceMappingURL=seedReferentiels.js.map