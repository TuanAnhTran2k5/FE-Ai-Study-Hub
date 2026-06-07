import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="flex h-screen items-center justify-center">
      <section className="mx-auto grid h-5/6 w-2/4 grid-cols-[3fr_4fr] overflow-hidden rounded-[28px] shadow-2xl">
        {/* Left side */}
        <div className="relative h-full overflow-hidden">
          <img
            src="/img/auth-bg.jpg"
            alt="Auth Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          {/* Logo */}
          <img
            src="/img/LOGO.png"
            alt="ASH Logo"
            className="absolute left-8 top-8 h-16"
          />

          {/* Content */}
          <div className="absolute bottom-16 left-8 right-8 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white">
              Manage, Share, and Learn Smarter with AI Study Hub.
            </h2>

            <p className="mt-4 text-white/80">
              Secure cloud storage, intelligent chatbot assistance, and
              community-driven knowledge sharing for all academic fields.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="h-full bg-background flex justify-center items-center">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;
