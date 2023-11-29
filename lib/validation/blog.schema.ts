import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 2; // 2 mb
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

export const blogSchema = z.object({
  title: z.string().min(6),
  body: z.string().min(12),
  //   tags: z.array(z.string()),
  status: z.enum(["publish", "draft"]),
  banner: z
    .custom<File | undefined>()
    .refine((file) => file?.size! <= MAX_FILE_SIZE, {
      message: `File size should be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`,
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type!), {
      message: `Only the following image types are allowed: ${ACCEPTED_IMAGE_TYPES.join(
        ", "
      )}`,
    }),
});

export type TBlogSchema = z.infer<typeof blogSchema>;
