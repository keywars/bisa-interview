import { z } from "zod";

export const interviewCreateSchema = z.object({
  title: z.string().min(6, {
    message: "Interview title must contain at least 6 charachter(s)",
  }),
});

export const interviewSchema = interviewCreateSchema.extend({
  description: z.string().min(6),
  status: z.enum(["draft", "published"], {
    required_error: "you need to select a interview status",
  }),
});

export type TInterviewCreateSchema = z.infer<typeof interviewCreateSchema>;
export type TInterviewSchema = Partial<z.infer<typeof interviewSchema>>;
