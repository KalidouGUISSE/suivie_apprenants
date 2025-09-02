// import { Router } from "express";
// import { ProfilSortieController } from "../controllers/profilSortie.controller.js";

// const router = Router();

// router.post("/", ProfilSortieController.create);
// router.get("/", ProfilSortieController.getAll);
// router.get("/:id", ProfilSortieController.getOne);
// router.put("/:id", ProfilSortieController.update);
// router.delete("/:id", ProfilSortieController.delete);

// export default router;

import { Router } from "express";
import { ProfilSortieController } from "../controllers/profilSortie.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { createProfilSortieSchema, updateProfilSortieSchema } from "../validators/profilSortie.validator.js";

const router = Router();

router.post("/", validateBody(createProfilSortieSchema), ProfilSortieController.create);
router.get("/", ProfilSortieController.getAll);
router.get("/:id", ProfilSortieController.getOne);
router.put("/:id", validateBody(updateProfilSortieSchema), ProfilSortieController.update);
router.delete("/:id", ProfilSortieController.delete);

export default router;
