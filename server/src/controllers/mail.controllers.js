import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendMail } from "../utils/mailer.js";

export const sendTestMail = asyncHandler(async (req, res) => {
  const { to, subject, text, html } = req.body;
  const info = await sendMail({
    to,
    subject,
    text,
    html,
  });

  return res.json(
    new ApiResponse(
      200,
      {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      },
      "Mail sent successfully",
    ),
  );
});
