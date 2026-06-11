import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";
import { ROUTE } from "@/models/routePath";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const navigate = useNavigate();

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(ROUTE.PROFILE);
  };

  return (
    <div className="flex h-full w-full items-center justify-center px-12 bg-[rgb(196,226,245)]">
      <div className="w-full max-w-[430px]">
        {/* Title */}
        <div className="mb-9">
          <h1 className="text-4xl font-bold text-black">Welcome Back!</h1>
          <p className="mt-2 text-sm text-black">
            Log in to continue your learning journey.
          </p>
        </div>

        <form onSubmit={handleLoginSubmit} className="w-full space-y-6">
          {/* Email */}
          <Field>
            <FieldLabel className="mb-2 text-sm font-medium text-black">
              Email
            </FieldLabel>

            <Input
              name="email"
              type="email"
              placeholder="name@university.edu"
              className="h-14 rounded-xl border border-slate-300 bg-white px-5 text-sm shadow-sm placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
            />
          </Field>

          {/* Password */}
          <Field>
            <div className="mb-2 flex items-center justify-between">
              <FieldLabel className="text-sm font-medium text-black">
                Password
              </FieldLabel>

              <button
                type="button"
                className="text-xs font-medium text-blue-700 hover:text-blue-800 cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              className="h-14 rounded-xl border border-slate-300 bg-white px-5 text-sm shadow-sm placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
            />
          </Field>

          {/* Login */}
          <Button
            type="submit"
            className="h-14 w-full rounded-xl bg-gradient-to-r from-blue-500 to-sky-700 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] hover:shadow-lg cursor-pointer"
          >
            Login <TbLogin2 />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-300" />
          <span className="text-xs font-medium text-slate-500">
            OR LOGIN WITH
          </span>
          <div className="h-px flex-1 bg-slate-300" />
        </div>

        {/* GG */}

        <Button
          type="button"
          variant="outline"
          className="
            h-14
            w-full
            rounded-xl
            border border-slate-300
            bg-white
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:border-blue-400
            hover:bg-slate-50
            hover:shadow-md cursor-pointer"
        >
          <FcGoogle className="mr-3 h-5 w-5" />
          Continue with Google
        </Button>

        {/* Sign up */}
        <p className="mt-10 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <span className="cursor-pointer font-semibold text-blue-600 hover:underline">
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
