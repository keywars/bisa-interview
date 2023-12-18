"use client";

import MaterialSymbolsCloseSmall from "@/components/icons/MaterialSymbolsCloseSmall";
import { blogSchema, TBlogSchema } from "@/lib/validation/blog.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useTransition } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[121px]" />,
});

const BlogForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [preview, setPreview] = useState<string>("");
  const form = useForm<TBlogSchema>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      body: "",
      status: "draft",
      banner: undefined,
    },
  });

  const handleRemoveBanner = () => {
    form.setValue("banner", undefined);
    setPreview((prevew) => "");
  };

  const onSubmit = (values: TBlogSchema) => {
    startTransition(async () => {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("body", values.body);
      formData.append("status", values.status);
      formData.append("image", values.banner as File);

      await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            toast({
              title: "Create new post",
              description: "Create new post successfully",
            });

            form.reset();
            router.push("/dashboard/blog");
          } else {
            toast({
              title: "Create new post",
              variant: "destructive",
              description: "Failed to create new post",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          toast({
            title: "Create new post",
            variant: "destructive",
            description: `failed to create new post: ${
              (error as Error).message
            }`,
          });
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            disabled={isPending}
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
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <MDEditor
                    className="dark:bg-zinc-900/70 dark:text-gray-200"
                    placeholder="Crafting a lasting impression in a job interview is crucial for securing..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="banner"
            disabled={isPending}
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Banner</FormLabel>
                {form.getValues("banner") ? (
                  <div className="my-0.5 max-w-xs">
                    <div className="relative aspect-video">
                      <Image
                        fill
                        src={preview}
                        alt={form.getValues("banner")?.name as string}
                        quality={75}
                        className="rounded-md object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => URL.revokeObjectURL(preview)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 text-rose-500 transition-all duration-300 hover:bg-transparent hover:text-rose-600"
                        onClick={handleRemoveBanner}
                      >
                        <MaterialSymbolsCloseSmall className="h-6 w-6" />
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
            disabled={isPending}
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
                        <RadioGroupItem value="published" />
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

        <Button type="submit" size="sm" disabled={isPending}>
          {isPending ? "Submitting..." : "Create"}
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
