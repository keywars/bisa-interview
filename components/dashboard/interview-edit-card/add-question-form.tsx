"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import {
  questionSchema,
  TQuestionSchema,
} from "@/lib/validation/question.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import rehypeSanitize from "rehype-sanitize";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface AddQuestionFormProps {
  interviewId: string;
  totalQuestion: number;
}

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[121px]" />,
});

const AddQuestionForm = ({
  interviewId,
  totalQuestion,
}: AddQuestionFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<TQuestionSchema>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
      explanation: "",
    },
  });

  const onSubmit = (values: TQuestionSchema) => {
    try {
      startTransition(async () => {
        const response = await fetch(`/api/interview/${interviewId}/question`, {
          method: "POST",
          body: JSON.stringify({
            ...values,
            questionNumber: totalQuestion + 1,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast({
            title: "Create Question",
            description: "New question created successfully",
          });

          form.reset();
          router.refresh();
        } else {
          const message = await response.json();
          toast({
            variant: "destructive",
            title: "Create Question",
            description: message.error,
          });
        }
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Create Question",
        description: "Create question failed",
      });
    }
  };

  return (
    <Card className="max-w-screen-md bg-gray-50 dark:bg-zinc-900/70">
      <CardHeader>
        <h2 className="text-lg font-bold">
          Add new question for number{" "}
          <Badge className="text-xl">{totalQuestion + 1}</Badge>
        </h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="question"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Write a question" />
                      {/*<MDEditor*/}
                      {/*  previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}*/}
                      {/*  placeholder="write a question"*/}
                      {/*  {...field}*/}
                      {/*/>*/}
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="explanation"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Explanation</FormLabel>
                    <FormControl>
                      <MDEditor
                        className="dark:bg-zinc-900/70 dark:text-gray-200"
                        previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
                        placeholder="write explanations"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="sm" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddQuestionForm;
