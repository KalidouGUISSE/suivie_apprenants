import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { schemaAuth } from "../validators/auth.validator.js";

const router = Router();

router.post("/", validateBody(schemaAuth), AuthController.login);

// POST /auth/refresh
router.post("/refresh", AuthController.refreshToken);

export default router;
