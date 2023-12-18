import { join } from "path";
import * as crypto from "crypto";
import slugify from "@/lib/slugify";
import { writeFile } from "fs/promises";

export default async function uploadImage(uploadPath: string, image: File) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const randomIds = crypto.randomBytes(20).toString("hex");

  const path = join(uploadPath, `${randomIds}-${image.name}`);

  try {
    await writeFile(path, buffer);

    return path;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error uploading image: ${(error as Error).message as string}`,
    );
  }
}
