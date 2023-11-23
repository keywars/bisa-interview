import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(3).max(25),
});

export type TLogin = z.infer<typeof loginSchema>;
export type TRegister = z.infer<typeof registerSchema>;
