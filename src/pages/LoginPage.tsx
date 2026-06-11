import LoginForm from "@/components/auths/LoginForm";
import LoginHero from "@/components/auths/LoginHero";

function LoginPage() {
  return (
    <>
      <aside className="min-h-[650px]">
        <LoginHero />
      </aside>

      <div className="flex min-h-[650px] items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-2 shadow">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
