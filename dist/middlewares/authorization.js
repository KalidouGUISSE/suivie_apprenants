// import type { Request, Response, NextFunction } from "express";
// import { prisma } from "../services/prismaService";
export {};
// export function authorize(requiredPermission: string) {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const userId = (req.user as any)?.id; // récupéré via JWT
//     if (!userId) {
//       return res.status(401).json({ message: "Non authentifié" });
//     }
//     const user = await prisma.users.findUnique({
//       where: { id: userId },
//       include: { profil: { include: { permissions: true } } },
//     });
//     const hasPermission = user?.profil?.permissions.some(
//       (perm) => perm.action === requiredPermission
//     );
//     if (!hasPermission) {
//       return res.status(403).json({ message: "Action non autorisée" });
//     }
//     next();
//   };
// }
//# sourceMappingURL=authorization.js.map