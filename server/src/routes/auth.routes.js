import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controllers";
import { verifySession } from "../middlewares/verifySession.middleware";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").post(verifySession, logout);

export default router;
