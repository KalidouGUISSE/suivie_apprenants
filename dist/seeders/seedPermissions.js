import prisma from "./../services/prismaService.js";
export async function seedPermissions() {
    console.log("Seeding Permissions...");
    const permissionsData = [
        { action: "create:user" },
        { action: "delete:promo" },
        { action: "update:competence" },
    ];
    for (const perm of permissionsData) {
        await prisma.permission.upsert({
            where: { action: perm.action },
            update: {},
            create: perm,
        });
    }
    console.log("Permissions seeded.");
}
//# sourceMappingURL=seedPermissions.js.map