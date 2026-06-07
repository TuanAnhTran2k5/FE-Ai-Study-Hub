import React from "react";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";

function LoginForm() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#c4e2f5] px-10">
      <div className="w-full max-w-[428px] tracking-normal">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[40px] font-bold leading-tight tracking-tight text-black">
            Welcome Back!
          </h1>
          <p className="mt-2 text-[15px] font-normal leading-6 tracking-normal text-black">
            Log in to continue your learning journey.
          </p>
        </div>

        <form className="w-full space-y-6">
          {/* Email */}
          <Field>
            <FieldLabel className="mb-2 text-[15px] font-medium leading-none tracking-normal text-black">
              Email
            </FieldLabel>

            <Input
              name="email"
              type="email"
              placeholder="name@university.edu"
              className="h-14 rounded-xl border border-slate-300 bg-white px-5 text-[15px] font-normal tracking-normal shadow-sm placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
            />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel className="mb-2 text-[15px] font-medium leading-none tracking-normal text-black">
              Password
            </FieldLabel>

            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              className="h-14 rounded-xl border border-slate-300 bg-white px-5 text-[15px] font-normal tracking-normal shadow-sm placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
            />

            <div className="mt-2 flex justify-end">
              <button
                type="button"
                className="cursor-pointer text-[13px] font-medium leading-none tracking-normal text-blue-700 hover:text-blue-800"
              >
                Forgot password?
              </button>
            </div>
          </Field>

          {/* Login */}
          <Button
            type="submit"
            className="h-14 w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-sky-700 text-[15px] font-semibold tracking-normal text-white shadow-md transition hover:scale-[1.01] hover:shadow-lg"
          >
            Login <TbLogin2 className="ml-1 h-5 w-5" />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-5">
          <div className="h-px flex-1 bg-slate-300" />
          <span className="text-[12px] font-medium leading-none tracking-normal text-slate-500">
            OR LOGIN WITH
          </span>
          <div className="h-px flex-1 bg-slate-300" />
        </div>

        {/* Google */}
        <Button
          type="button"
          variant="outline"
          className="h-14 w-full cursor-pointer rounded-xl border border-slate-300 bg-white text-[15px] font-semibold tracking-normal text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-slate-50 hover:shadow-md"
        >
          <FcGoogle className="mr-3 h-5 w-5" />
          Continue with Google
        </Button>

        {/* Sign up */}
        <p className="mt-5 text-center text-[15px] font-normal leading-6 tracking-normal text-slate-600">
          Don&apos;t have an account?{" "}
          <span className="cursor-pointer font-semibold tracking-normal text-blue-600 hover:underline">
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;