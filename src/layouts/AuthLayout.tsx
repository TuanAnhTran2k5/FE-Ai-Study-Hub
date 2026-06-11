import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="min-h-screen bg-[rgb(196,226,255)]">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center px-6 lg:grid-cols-[45%_55%]">
        <Outlet />
      </section>
    </main>
  );
}

export default AuthLayout;
