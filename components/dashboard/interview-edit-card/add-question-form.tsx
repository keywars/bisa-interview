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
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import {
  TQuestionSchema,
  questionSchema,
} from "@/lib/validation/question.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import rehypeSanitize from "rehype-sanitize";

interface AddQuestionFormProps {
  interviewId: string;
}

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[121px]" />,
});

const AddQuestionForm = ({ interviewId }: AddQuestionFormProps) => {
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
    startTransition(async () => {
      await fetch(`/api/interview/${interviewId}/question/`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          toast({
            title: "Create Question",
            description: "new question created successfully",
          });

          form.reset();
          router.refresh();
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Create Question",
            description: "new question created successfully",
          });
        });
    });
  };

  return (
    <Card className="bg-gray-50 max-w-screen-md">
      <CardHeader>
        <h1 className="font-bold text-lg">Add new question</h1>
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
                      <MDEditor
                        previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
                        placeholder="write a question"
                        {...field}
                      />
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
