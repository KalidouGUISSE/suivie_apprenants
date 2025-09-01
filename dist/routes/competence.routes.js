import { Router } from "express";
import { CompetenceController } from "../controllers/competence.controller.js";
import { createCompetenceSchema } from "../validators/competence.validator.js";
import { validateBody } from "../middlewares/validation.middleware.js";
const router = Router();
// router.post("/", CompetenceController.create);
router.post("/", validateBody(createCompetenceSchema), CompetenceController.create);
router.get("/", CompetenceController.getAll);
router.get("/:id", CompetenceController.getOne);
router.put("/:id", validateBody(createCompetenceSchema), CompetenceController.update);
router.delete("/:id", CompetenceController.delete);
// Dans competence.routes.ts
router.get("/:id/niveaux", CompetenceController.getNiveaux);
export default router;
//# sourceMappingURL=competence.routes.js.map