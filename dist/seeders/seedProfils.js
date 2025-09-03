import prisma from "./../services/prismaService.js";
export async function seedProfils() {
    console.log("Seeding Profils...");
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
    console.log("Profils seeded.");
}
//# sourceMappingURL=seedProfils.js.map