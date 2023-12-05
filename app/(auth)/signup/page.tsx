"use client";
import HomeIcon from "@/components/navbar/HomeIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { TAuthCredValidator, authCredValitator } from "../../../lib/validators/account-cred-validator";
import { trpc } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


function page() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredValidator>({resolver:zodResolver(authCredValitator),
  });
  const {mutate,isLoading} = trpc.createUser.useMutation({})
  const onSubmit = ({email,password}:TAuthCredValidator)=>{
    mutate({email,password})
    }

  return (
    <div className="mt-5 relative container w-full flex flex-col items-center justify-center ">
      <div className="mx-auto flex w-full flex-col justify-center items-center">
        <HomeIcon width={50} height={50} />
        <h1 className="text-2xl">Create Account</h1>
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "text-muted-foreground",
          })}
          href="/signin"
        >
          {" "}
          <p>
            Already have an account ?{" "}
            <span className="relative font-bold underline">Sign in &rarr;</span>
          </p>
        </Link>
      </div>
      <form className="grid gap-4 w-full md:w-1/2 grid-flow-row" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <Label>Email</Label>
          <Input {...register('email')}
            className={`placeholder:text-muted ${errors.email ? "focus-visible:ring-red-900" : ""}`}
            placeholder="youremail@example.com"
          />
        </div>
        <Separator className=" self-center w-5/6" />
        <div>
          <Label>Password</Label>
          <Input {...register('password')}
            type="password"
            className={`placeholder:text-muted ${errors.password ? "focus-visible:ring-red-900" : ""}`}
            placeholder="Your password"
          />
        </div>
        <Button
          className=" sm:w-1/2 sm:justify-self-center"
          variant={"default"}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default page;
