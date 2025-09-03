import prisma from "./../services/prismaService.js";
export async function seedNiveaux() {
    console.log("Seeding Niveaux...");
    const niveauxData = [
        { libelle: "Débutant", rang: 1 },
        { libelle: "Intermédiaire", rang: 2 },
        { libelle: "Avancé", rang: 3 },
    ];
    for (const n of niveauxData) {
        await prisma.niveau.upsert({
            where: { libelle: n.libelle },
            update: {},
            create: n,
        });
    }
    console.log("Niveaux seeded.");
}
//# sourceMappingURL=seedNiveaux.js.map