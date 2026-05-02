import z from "zod";

export const userBaseSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(6, "Fullname must be at least 6 characters long..."),
  email: z.string().trim().email("Valid Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long...")
    .regex(/[a-z]/, "Must contain at least one alphabet")
    .regex(/[0-9]/, "Must contain at least one number"),
});

export const registerSchema = userBaseSchema;
export const loginSchema = userBaseSchema.pick({
  email: true,
  password: true,
});
