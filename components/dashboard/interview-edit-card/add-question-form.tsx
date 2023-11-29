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
import {
  TQuestionSchema,
  questionSchema,
} from "@/lib/validation/question.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";

const AddQuestionForm = () => {
  const form = useForm<TQuestionSchema>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
      explanation: "",
    },
  });

  const onSubmit = (values: TQuestionSchema) => {
    console.log(values);
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input placeholder="write a question" {...field} />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="explanation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Explanation</FormLabel>
                    <FormControl>
                      <SimpleMDE placeholder="write explanations" {...field} />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="sm">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddQuestionForm;
