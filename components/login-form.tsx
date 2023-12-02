"use client";

import { loginSchema, TLogin } from "@/lib/validation/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useReducer(
    (isLoading) => !isLoading,
    false
  );
  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: TLogin) => {
    setIsLoading(); // setloading to true
    signIn("credentials", {
      ...values,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast({
            variant: "destructive",
            title: "User Login",
            description: "Login Failed!!",
          });
        }

        if (callback?.ok && !callback?.error) {
          toast({
            title: "User Login",
            description: "Login Success!!",
          });
          router.push("/");
        }
      })
      .finally(() => {
        setIsLoading(); // set loading to false
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <div className="space-y-4">
          <FormField
            control={form.control}
            disabled={isLoading}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            disabled={isLoading}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
