import { Router } from "express";
import { ProfileController } from "../controllers/profile.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { createProfileSchema, updateProfileSchema } from "../validators/profile.validator.js";
const router = Router();
router.post("/", validateBody(createProfileSchema), ProfileController.createProfile);
router.get("/", ProfileController.getProfiles);
router.get("/:id", ProfileController.getProfileById);
router.put("/:id", validateBody(updateProfileSchema), ProfileController.updateProfile);
router.delete("/:id", ProfileController.deleteProfile);
export default router;
//# sourceMappingURL=profile.routes.js.map