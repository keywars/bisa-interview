import { z } from "zod";

export const questionSchema = z.object({
  question: z.string().min(6),
  explanation: z.string().min(3),
});

export const editQuestionSchema = questionSchema.extend({});

export type TQuestionSchema = z.infer<typeof questionSchema>;
