"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { getSession, signIn, useSession } from "next-auth/react";
import ProfileScetion from "./ProfileScetion";

const schema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
  password: z.string(),
});

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { data: session } = useSession();

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log("kkkkk", response);
    if (response?.ok) {
      const session = await getSession();
      reset();
    } else if (response?.error) {
      toast.error(response.error);
    }
  };
  return (
    <>
      <div className="bg-[url(/bgone.png)] bg-no-repeat  relative overflow-hidden">
        <div className="relative z-10">
          {/* Navbar */}
          <nav className="flex justify-between items-center p-4 md:p-6">
            <div className="text-2xl font-bold font-manrope">
              <span className="text-orange-500 font-manrope">Business</span>
              <span className="text-purple-700 font-manrope">Hub.</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="font-semibold text-sm font-manrope flex justify-center items-center gap-2"
              >
                Product
                <IoIosArrowDown
                  size={18}
                  className="text-black font-manrope font-semibold text-sm"
                />
              </a>
              <a
                href="#"
                className="font-semibold text-sm flex justify-center items-center gap-2 font-manrope"
              >
                Template
                <IoIosArrowDown size={18} className="font-bold text-black" />
              </a>
              <a href="#" className="font-manrope font-semibold text-sm">
                Blog
              </a>
              <a href="#" className="font-manrope font-semibold text-sm">
                Pricing
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {!session ? (
                <>
                  {" "}
                  <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={openLogin}
                        variant="ghost"
                        className="hidden md:inline-flex font-semibold text-sm font-manrope"
                      >
                        Sign In
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login Your Account</DialogTitle>
                      </DialogHeader>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-xs text-[#1D1D3E]"
                          >
                            Email
                          </Label>
                          <Input
                            // disabled={isPending}
                            {...register("email")}
                            type="email"
                            id="email"
                          />
                          {errors.email && (
                            <div className=" text-destructive mt-2">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="password"
                            className="text-xs text-[#1D1D3E]"
                          >
                            Password
                          </Label>

                          <Input
                            {...register("password")}
                            type="password"
                            id="password"
                            placeholder=" "
                          />
                          {errors.password && (
                            <div className=" text-destructive mt-2">
                              {errors.password.message}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2  mt-20">
                            <Checkbox
                              id="remember"
                              className="focus:ring-red-500"
                            />
                            <label
                              htmlFor="remember"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Remember me next time
                            </label>
                          </div>
                          <Button
                            variant="link"
                            className="p-0 underline text-[#2424d5] font-normal "
                          >
                            Forgot password?
                          </Button>
                        </div>
                        <Button className="w-full bg-[#4F46BA]" type="submit">
                          Login
                        </Button>
                      </form>
                      <div className="mt-4 text-center text-sm">
                        Dont have account?{" "}
                        <Button
                          variant="link"
                          className="p-0 text-[#2424d5]"
                          onClick={openSignUp}
                        >
                          Sign up
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={openSignUp}
                        className="bg-purple-600 text-white"
                      >
                        Start Free
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create Your Account</DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label
                              htmlFor="firstName"
                              className="text-xs text-[#1D1D3E]"
                            >
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="lastName"
                              className="text-xs text-[#1D1D3E]"
                            >
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              placeholder="Last Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="emailAddress"
                            className="text-xs text-[#1D1D3E]"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="emailAddress"
                            placeholder="Email Address"
                            type="email"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="newPassword"
                            className="text-xs text-[#1D1D3E]"
                          >
                            Password
                          </Label>
                          <Input
                            id="newPassword"
                            placeholder="Password"
                            type="password"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="confirmPassword"
                            className="text-xs text-[#1D1D3E]"
                          >
                            Confirm Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            required
                          />
                        </div>
                        <Button className="w-full bg-[#4F46BA]" type="submit">
                          Sign up
                        </Button>
                      </form>
                      <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Button
                          variant="link "
                          className="p-0 text-[#2424d5]"
                          onClick={openLogin}
                        >
                          Sign in
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <ProfileScetion />
              )}
            </div>
          </nav>

          {/* Main content */}
          <main className="container mx-auto lg:px-4 lg:py-12 md:py-24 flex flex-col md:flex-row items-center ">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4 p-2">
                Product Growth Solution in Single Platform.
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 p-2">
                Managing business payments has never been easier
              </h1>
              <p className="text-gray-600 mb-8 p-2">
                Never at water me might. On formed merits hunted unable merely
                by mr whence or. Possession the unpleasing simplicity her
                uncommonly.
              </p>
              <div className="bg-white flex justify-between items-center shadow p-4 ">
                <div className="flex flex-col gap-1 ">
                  <label className="font-normal text-base">
                    Stay connected & get updates
                  </label>
                  <label className="font-bold text-2xl">
                    shakir260@gmail.com
                  </label>
                </div>

                <Button type="submit" className="bg-[#1B1C31] text-white px-8">
                  Submit
                </Button>
                {/* <form className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="shakir260@gmail.com"
                    className="flex-grow"
                  />
                  <Button
                    type="submit"
                    className="bg-purple-600 text-white px-8"
                  >
                    Submit
                  </Button>
                </form> */}
              </div>

              <div className="flex items-center space-x-4 mt-6 p-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-3 h-3 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    Free Register
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-3 h-3 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    Great Service
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/bgherosection.png"
                alt="Business dashboard"
                width={600}
                height={400}
                className="rounded-lg min-w-full"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Header;
