import { Router } from "express";
import { PromoController } from "../controllers/promo.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
<<<<<<< HEAD
import { createPromoSchema } from "../validators/promo.validator.js";
import { validateBody } from "../middlewares/validateRequest.js";
=======
import { createPromoSchema, updatePromoSchema } from "../validators/promo.validator.js";
>>>>>>> 19d41536abf142b1fa9ae94f69260118a3f7bcd9
const router = Router();
router.post("/", validateBody(createPromoSchema), PromoController.create);
<<<<<<< HEAD
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.getOne);
<<<<<<< HEAD
// router.put("/:id", validateBody(updatePromoSchema), PromoController.update);
=======
// router.post("/", PromoController.create);
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.getOne);
router.put("/:id", validateBody(createPromoSchema), PromoController.update);
>>>>>>> 525e28a50e29f1ae3047b950b5e101a7d5a432ad
=======
router.put("/:id", validateBody(updatePromoSchema), PromoController.update);
>>>>>>> 19d41536abf142b1fa9ae94f69260118a3f7bcd9
router.delete("/:id", PromoController.delete);
export default router;
//# sourceMappingURL=promo.routes.js.map