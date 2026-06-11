import { NAVIGATE_KEY } from "@/configs/router";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ROUTE } from "@/models/routePath";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/img/LOGO.png"
            alt="ASH Logo"
            className="h-9 w-auto object-contain"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-slate-950">AI StudyHub</p>
            <p className="text-[11px] text-slate-500">Smart learning workspace</p>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-[13px] font-medium text-slate-500">
            {NAVIGATE_KEY.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative transition-colors duration-200 hover:text-sky-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          onClick={() => navigate(`${ROUTE.AUTH}/${ROUTE.LOGIN}`)}
          className="rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,0.25)] transition hover:scale-[1.02]"
        >
          Started
        </Button>
      </div>
    </header>
  );
}

export default Header;
