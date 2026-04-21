import { z } from "zod";

export const mailSchema = z.object({
  body: z.object({
    to: z.string().email("Valid Email is required"),
    subject: z.string().min(1, "Subject is required"),
    text: z.string().optional(),
    html: z.string().optional(),
  }),
});
