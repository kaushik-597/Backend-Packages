import { Mail } from "../models/mails.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendMail } from "../utils/mailer.js";

export const sendTestMail = asyncHandler(async (req, res) => {
  const { to, subject, text, html } = req.validatedData;

  const mailLog = await Mail.create({
    to,
    subject,
    text,
    html,
    status: "pending",
  });

  try {
    const info = await sendMail({
      to,
      subject,
      text,
      html,
    });

    mailLog.status = "sent";
    mailLog.messageId = info.messageId;
    await mailLog.save();

    return res.json(new ApiResponse(200, mailLog, "Mail sent successfully"));
  } catch (error) {
    mailLog.status = "failed";
    mailLog.errorMessage = error.message;
    await mailLog.save();

    return res
      .status(500)
      .json(new ApiResponse(500, mailLog, "Mail sending failed"));
  }
});

export const getMails = asyncHandler(async (req, res) => {
  const mails = await Mail.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, mails, "Mails fetched successfully"));
});

export const deleteMail = asyncHandler(async (req, res) => {
  const mail = await Mail.findByIdAndDelete(req.params.id);

  if (!mail) {
    throw new ApiError(404, "Mail not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, mail, "Mail deleted successfully"));
});
