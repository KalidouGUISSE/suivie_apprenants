import { ReferentielController } from "../controllers/referentiel.controller.js";
import { Router } from "express";
const router = Router();
router.get("/", ReferentielController.getAll);
router.get("/:id/competences", ReferentielController.getCompetencesByReferentiel);
export default router;
//# sourceMappingURL=referentiel.route.js.map