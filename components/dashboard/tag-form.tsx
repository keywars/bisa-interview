"use client";

import { tagSchema, type TTagSchema } from "@/lib/validation/tag,schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
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
import { useToast } from "../ui/use-toast";

const TagForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<TTagSchema>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: TTagSchema) => {
    startTransition(async () => {
      await fetch("/api/tags", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          toast({
            title: "Create Tag",
            description: "Create new tag successfully",
          });

          form.reset();
          router.refresh();
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Create Tag",
            description: "Create new tag failed",
          });
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Rust" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button size="sm" type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default TagForm;
