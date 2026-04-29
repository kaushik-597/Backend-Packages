import { Router } from "express";
import { sendTestMail } from "../controllers/mail.controllers.js";
import { validate } from "../middlewares/validate.middleware.js";
import { mailSchema } from "../validators/mail.validators.js";
import { mailRateLimiter } from "../middlewares/mailRateLimiter.js";

const router = Router();

router.route("/send").post(mailRateLimiter, validate(mailSchema), sendTestMail);

export default router;
