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
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

const InterviewForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<TInterviewCreateSchema>({
    resolver: zodResolver(interviewCreateSchema),
    defaultValues: {
      title: "",
    },
  });

  const handleInterviewSubmit = (values: TInterviewCreateSchema) => {
    startTransition(async () => {
      await fetch("/api/interview", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          const res = await response.json();
          const id = res.data;

          toast({
            title: "Create Interview",
            description: "Interview created successfully.",
          });

          router.push(`/dashboard/interviews/${id}/edit`);
        })
        .catch((error) => {
          console.error(error);
        });
    });
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
          disabled={isPending}
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
              <Button type="button" variant="secondary" disabled={isPending}>
                Close
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              Continue
            </Button>
          </div>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default InterviewForm;
