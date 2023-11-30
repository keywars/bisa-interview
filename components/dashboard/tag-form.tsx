"use client";

import { tagSchema, type TTagSchema } from "@/lib/validation/tag,schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TagForm = () => {
  const form = useForm<TTagSchema>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: TTagSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button size="sm" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default TagForm;
