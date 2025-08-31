import { Router } from "express";
import { PromoController } from "../controllers/promo.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { createPromoSchema } from "../validators/promo.validator.js";
const router = Router();
router.post("/", validateBody(createPromoSchema), PromoController.create);
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.getOne);
// router.put("/:id", validateBody(updatePromoSchema), PromoController.update);
router.delete("/:id", PromoController.delete);
export default router;
//# sourceMappingURL=promo.routes.js.map