import rateLimit from "express-rate-limit";

export const mailRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests for sending mails",
  },
});
