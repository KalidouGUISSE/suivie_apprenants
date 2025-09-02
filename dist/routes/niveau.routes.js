import { Router } from "express";
import { NiveauController } from "../controllers/niveau.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { createNiveauSchema } from "../validators/niveau.validator.js";
const router = Router();
router.post("/", validateBody(createNiveauSchema), NiveauController.create);
router.get("/", NiveauController.getAll);
router.get("/:id", NiveauController.getOne);
router.put("/:id", NiveauController.update);
router.delete("/:id", NiveauController.delete);
export default router;
//# sourceMappingURL=niveau.routes.js.map