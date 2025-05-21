"use client";

import React, { useState } from "react";
import LrryJhn from "@/src/img/LJA_icon.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type MessageFormData = z.infer<typeof messageSchema>;

const messageSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Enter a valid email address"),
});

const messageMe = () => {
  const [email, setEmail] = useState("");
  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const onSubmit = (data: MessageFormData) => {
    console.log("Form Data:", data);
    // Add your send logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full px-6 py-6 flex justify-center">
        <Link href="/" className="flex justify-center items-center gap-4">
          <Image
            src={LrryJhn}
            width={50}
            height={50}
            alt="lrry logo"
            loading="lazy"
            className=""
          ></Image>
          <h2 className="medium font-krona uppercase">lrry jhn</h2>
        </Link>
      </div>
      <div className="flex justify-center min-h-full py-5  my-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border-teal-700/20 dark:shadow-white/10 w-full sm:max-w-screen-lg p-0 lg:p-5">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-xl uppercase font-black">
              Send me a Message
            </CardTitle>
            <CardDescription>
              Feel free to reach out—I'm open to new opportunities and
              collaborations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row lg:gap-10 gap-5 justify-center ">
              <div className="w-full">
                {" "}
                <Textarea placeholder="Type your message here." />
              </div>
              <div className="w-full">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
                  >
                    <div className="flex gap-4 flex-col lg:flex-row">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Larry John" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Andonga" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="your_email_here@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="">
                      <Button className="w-full mt-6">Submit</Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default messageMe;
