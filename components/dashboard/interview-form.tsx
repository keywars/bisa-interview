"use client";

import {
  TInterviewCreateSchema,
  interviewCreateSchema,
} from "@/lib/validation/interview.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const InterviewForm = () => {
  const router = useRouter();
  const form = useForm<TInterviewCreateSchema>({
    resolver: zodResolver(interviewCreateSchema),
    defaultValues: {
      title: "",
    },
  });

  const handleInterviewSubmit = (values: TInterviewCreateSchema) => {
    console.log("submitted...");
    console.log(values);
    console.log("redirect...");
    router.push("/dashboard/interviews/1234-abcd/edit");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleInterviewSubmit)}
        className="space-y-7"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="top 50 git interview question"
                  className="placeholder:capitalize"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        <DialogFooter className="sm:justify-end">
          <div className="space-x-4">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Continue</Button>
          </div>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default InterviewForm;
