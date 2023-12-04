import { db } from "@/db";
import { Tag, tags } from "@/db/schema";
import slugify from "@/lib/slugify";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const results = await db.query.tags.findMany();

    return NextResponse.json(
      { message: "operation complete", data: results },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Tag;

    const slug = slugify(body.name);

    const createTag = await db
      .insert(tags)
      .values({ slug, name: body.name })
      .onConflictDoNothing({ target: tags.slug });

    if (createTag.rowCount === 0) {
      return NextResponse.json(
        { error: "tag already exists" },
        { status: 409 }
      );
    }

    revalidateTag("tag");

    return NextResponse.json(
      { message: "create tag successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
