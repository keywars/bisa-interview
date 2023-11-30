import { z } from "zod";

export const tagSchema = z.object({
  name: z.string().min(1),
});

export type TTagSchema = z.infer<typeof tagSchema>;
