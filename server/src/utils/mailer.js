import nodemailer from "nodemailer";
import "dotenv/config";
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const verifyMailer = async () => {
  await transporter.verify();
};

export const sendMail = async ({ to, subject, text, html }) => {
  const info = await transporter.sendMail({
    from: `"My App" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });

  return info;
};
