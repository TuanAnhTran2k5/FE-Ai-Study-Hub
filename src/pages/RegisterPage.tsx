import RegisterForm from "@/components/auths/RegisterForm";
import RegisterHero from "@/components/auths/RegisterHero";
import React from "react";

function RegisterPage() {
  return (
    <>
      <aside className="hidden lg:block">
        <RegisterHero />
      </aside>

      <div className="flex w-full justify-center">
        <div className="w-full max-w-[760px] rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
