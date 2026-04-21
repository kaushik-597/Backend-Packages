import { Router } from "express";
import { sendTestMail } from "../controllers/mail.controllers.js";

const router = Router();

router.route("/send").post(sendTestMail);

export default router;
