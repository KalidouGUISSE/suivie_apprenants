import { Router } from "express";
import { NiveauController } from "../controllers/niveau.controller.js";
import { createNiveauSchema } from "../validators/niveau.validator.js";
import { validateBody } from "../utils/middlewares/validateBody.js";

const router = Router();

router.post("/", validateBody(createNiveauSchema), NiveauController.create);
router.get("/", NiveauController.getAll);
router.get("/:id", NiveauController.getOne);
router.put("/:id", validateBody(createNiveauSchema), NiveauController.update);
router.delete("/:id", NiveauController.delete);

export default router;
