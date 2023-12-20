import { NextRequest, NextResponse } from "next/server";
import { blogs } from "@/db/schema";
import { db } from "@/db";
import getPostBySlug from "@/actions/blog/get-post-by-slug";
import slugify from "@/lib/slugify";
import uploadImage from "@/lib/upload-image";
import getCurrentUser from "@/actions/user/get-current-user";
import { revalidateTag } from "next/cache";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filterByStatus = searchParams.get("status");

  let whereClause;
  if (filterByStatus) {
    whereClause = eq(blogs.status, filterByStatus as "published" | "draft");
  }

  try {
    const posts = await db.query.blogs.findMany({
      where: whereClause,
      with: {
        author: true,
      },
      orderBy: (blogs, { desc }) => [desc(blogs.createdAt)],
    });

    return NextResponse.json({ data: posts }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "failed to get blogs" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const uploadPath = "public/blogs/images";
  const formData = await request.formData();

  const slug = slugify(formData.get("title") as string);

  // check if this post already in database
  const blogExists = await getPostBySlug(slug);

  if (blogExists) {
    return NextResponse.json(
      {
        message: "post already exists",
      },
      { status: 409 },
    );
  }

  // saving image to local storage
  const saveImage = await uploadImage(
    uploadPath,
    formData.get("image") as File,
  );

  try {
    await db.insert(blogs).values({
      slug,
      title: formData.get("title") as string,
      content: formData.get("body") as string,
      status: formData.get("status") as "published" | "draft",
      image: saveImage,
      authorId: currentUser?.id,
    });

    revalidateTag("blog");

    return NextResponse.json({
      message: "create blog successfully",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      message: (e as Error).message,
    });
  }
}
