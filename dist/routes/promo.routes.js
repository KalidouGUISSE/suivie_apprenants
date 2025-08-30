import { Router } from "express";
import { PromoController } from "../controllers/promo.controller.js";
import { createPromoSchema } from "../validators/promo.validator.js";
const router = Router();
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.getOne);
// router.put("/:id", validateBody(createPromoSchema), PromoController.update);
router.delete("/:id", PromoController.delete);
export default router;
//# sourceMappingURL=promo.routes.js.map