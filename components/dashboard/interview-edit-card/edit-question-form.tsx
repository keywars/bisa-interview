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
import { Question } from "@/db/schema";
import {
  editQuestionSchema,
  TQuestionSchema,
} from "@/lib/validation/question.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import rehypeSanitize from "rehype-sanitize";
import { Badge } from "@/components/ui/badge";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[121px]" />,
});

interface EditQuestionFormProps {
  initialValues: Question;
  id: string;
}

const EditQuestionForm = ({ initialValues, id }: EditQuestionFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<TQuestionSchema>({
    resolver: zodResolver(editQuestionSchema),
    defaultValues: {
      question: initialValues.inquiry,
      explanation: initialValues.answer,
    },
  });

  const isValueChanged = () => {
    return (
      JSON.stringify({
        question: initialValues.inquiry,
        explanation: initialValues.answer,
      }) === JSON.stringify(form.getValues())
    );
  };

  const onSubmit = (values: TQuestionSchema) => {
    try {
      startTransition(async () => {
        const response = await fetch(`/api/question/${id}`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast({
            title: "Update question",
            description: "Update question successfully",
          });

          router.refresh();
        } else {
          const message = await response.json();

          toast({
            variant: "destructive",
            title: "Update question",
            description: message.error,
          });
        }
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Update question",
        description: "Update question failed",
      });
    }
  };

  return (
    <Card className="bg-gray-50 dark:bg-zinc-900/70 max-w-screen-md">
      <CardHeader>
        <h1 className="font-bold text-lg">
          Edit question number{" "}
          <Badge className="text-xl">{initialValues.questionNumber}</Badge>
        </h1>
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

            <Button
              type="submit"
              size="sm"
              disabled={isPending || isValueChanged()}
            >
              {isPending ? "Updating..." : "Update"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditQuestionForm;
