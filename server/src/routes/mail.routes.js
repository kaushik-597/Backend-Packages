import { Router } from "express";
import { sendTestMail } from "../controllers/mail.controllers.js";
import { validate } from "../middlewares/validate.middleware.js";
import { mailSchema } from "../validators/mail.validators.js";

const router = Router();

router.route("/send").post(validate(mailSchema), sendTestMail);

export default router;
