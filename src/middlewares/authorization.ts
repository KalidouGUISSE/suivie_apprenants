import type{ Request, Response, NextFunction } from "express";
import prisma from "../services/prismaService.js";

export const authorize =
  (requiredPermission: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = await req.users?.id; // ton middleware d’auth doit remplir req.user
      if (!userId) return res.status(401).json({ error: "Non authentifié" });

      const user = await prisma.users.findUnique({
        where: { id: userId },
        include: { profil: { include: { permissions: true } } },
      });

      if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });

      const userPermissions = user.profil.permissions.map((p) => p.action);

      if (!userPermissions.includes(requiredPermission)) {
        return res.status(403).json({ error: "Accès refusé" });
      }q

      next();
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  };
