import { Router } from "express";
// Importe la fonction Router d’Express pour créer un groupe de routes.

import { TagController } from "../controllers/tag.controller.js";
// Importe le contrôleur qui gère la logique des routes Tag.

import { validateBody } from "../middlewares/validation.middleware.js";
// Importe le middleware de validation pour vérifier les données envoyées dans le corps des requêtes.

import { createTagSchema, updateTagSchema } from "../validators/tag.validator.js";
// Importe les schémas de validation Zod pour la création et la modification d’un tag.

const router = Router();
// Crée une nouvelle instance de routeur Express.

router.post("/", validateBody(createTagSchema), TagController.create);
// Route POST /tags : crée un tag après validation des données.

router.get("/", TagController.getAll);
// Route GET /tags : récupère tous les tags.

router.get("/:id", TagController.getOne);
// Route GET /tags/:id : récupère un tag par son id.

router.put("/:id", validateBody(updateTagSchema), TagController.update);
// Route PUT /tags/:id : modifie un tag après validation des données.

router.delete("/:id", TagController.delete);
// Route DELETE /tags/:id : supprime un tag par son id.

export default router;
// Exporte le routeur pour l’utiliser dans le serveur principal.