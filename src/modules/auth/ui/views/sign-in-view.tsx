"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import { authClient } from "@/lib/auth-client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { OctagonAlertIcon } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" })
});


const SignInView = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setLoading(true);

    await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    },
    {
      onSuccess: ()=>{
        router.push("/")
        setLoading(false)
      },
      onError: (error)=>{
        setError(error.error.message);
      }
    }
    );

    setLoading(false);
  }

  const onSocial = async (provider: "github" | "google") => {
    setError(null);
    setLoading(true);

    await authClient.signIn.social({
      provider: provider,
      callbackURL: "/",
    },
    {
      onSuccess: ()=>{
        setLoading(false) 
      },
      onError: (error)=>{
        setError(error.error.message);
      }
    }
    );

    setLoading(false);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-[60%] md:w-[30%] mb-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-2xl">Welcome Back!</h1>
            <p className="text-muted-foreground text-balance`">Login to your account</p>
          </div>
          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="david123@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            >
            </FormField>
      
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            >
            </FormField>
          </div>
          {!!error && (
            <Alert className="bg-destructive/20 border-none">
              <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <Button disabled={loading} className="cursor-pointer">
            Sign in
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:border-t-2">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              onClick={()=>onSocial("google")}
              variant={"outline"}
              className="w-full cursor-pointer hover:bg-gray-200"
            >
              <FcGoogle />
              Google
            </Button>
            <Button
              type="button"
              onClick={()=>onSocial("github")}
              variant={"outline"}
              className="w-full cursor-pointer hover:bg-gray-200"
            >
              <FaGithub />
              Github
            </Button>
          </div>
          <div className="text-sm text-center">
            Don&apos;t have an account? <Link className="underline underline-offset-4" href="/sign-up">Sign up</Link>
          </div>
        </div>
        </form>
      </Form>
      <div className="text-xs text-center text-balance text-muted-foreground *:[a]:hover:text-primary *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

export default SignInView;