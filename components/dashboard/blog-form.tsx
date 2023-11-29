"use client";

import MaterialSymbolsCloseSmall from "@/components/icons/MaterialSymbolsCloseSmall";
import { blogSchema, TBlogSchema } from "@/lib/validation/blog.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Skeleton } from "../ui/skeleton";
import UploadBanner from "./upload-banner";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[121px]" />,
});

const BlogForm = () => {
  const [preview, setPreview] = useState<string>("");
  const form = useForm<TBlogSchema>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      body: "",
      status: "draft",
      // tags: [],
      banner: undefined,
    },
  });

  const handleRemoveBanner = () => {
    form.setValue("banner", undefined);
    setPreview((prevew) => "");
  };

  const onSubmit = (values: TBlogSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="How to make a great impression in a job interview"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <MDEditor
                    placeholder="Crafting a lasting impression in a job interview is crucial for securing..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder="input tags" {...field} />
                </FormControl>
                <FormDescription>
                  You can insert or select multiple tag.
                </FormDescription>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="banner"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Banner</FormLabel>
                {form.getValues("banner") ? (
                  <div className="max-w-xs my-0.5">
                    <div className="relative aspect-video">
                      <Image
                        fill
                        src={preview}
                        alt={form.getValues("banner")?.name as string}
                        quality={75}
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => URL.revokeObjectURL(preview)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute top-1 right-1 text-rose-500 hover:bg-transparent hover:text-rose-600 transition-all duration-300"
                        onClick={handleRemoveBanner}
                      >
                        <MaterialSymbolsCloseSmall className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                ) : null}
                <FormControl>
                  <UploadBanner
                    onChange={onChange}
                    setPreview={setPreview}
                    preview={preview}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="draft" />
                      </FormControl>
                      <FormLabel className="font-normal">Draft</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="publish" />
                      </FormControl>
                      <FormLabel className="font-normal">Publish</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" size="sm">
          Upload image
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
