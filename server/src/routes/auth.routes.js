import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";
import { verifySession } from "../middlewares/verifySession.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validators/user.validators.js";

const router = Router();

router.route("/login").post(validate(loginSchema), login);
router.route("/register").post(validate(registerSchema), register);
router.route("/logout").post(verifySession, logout);

export default router;
