import { Link } from "react-router-dom";
import { Lock, Eye, ArrowRight, Mail, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mx-auto h-full w-full max-w-[430px] py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-xl font-bold text-slate-950">
          Login to <span className="text-blue-600">AI Study Hub</span>
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Welcome back! Please enter your details.
        </p>
      </div>

      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-900">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-lg border-slate-200 pl-11 text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-900">
            Password
          </label>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="h-12 rounded-lg border-slate-200 px-11 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="size-4 rounded border-slate-300"
            />
            Remember me
          </label>

          <Link
            to="/auth/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="h-12 w-full cursor-pointer rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Login
          <ArrowRight className="ml-2 size-4" />
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">or continue with</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Google */}
        <Button
          type="button"
          variant="secondary"
          className="h-12 w-full cursor-pointer rounded-lg border-slate-200 bg-white text-[16px] font-medium text-slate-700 hover:bg-slate-50"
        >
          <span className="grid size-7 place-items-center rounded-full bg-white text-lg font-bold text-blue-600">
            G
          </span>
          Continue with Google
        </Button>

        {/* Register */}
        <p className="pt-4 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
