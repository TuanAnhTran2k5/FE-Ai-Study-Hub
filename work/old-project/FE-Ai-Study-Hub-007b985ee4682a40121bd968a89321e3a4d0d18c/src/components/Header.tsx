import { NAVIGATE_KEY } from "@/configs/router";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ROUTE } from "@/models/routePath";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-10 shadow-sm">
      {/* logo 1/4 */}
      <div className="w-1/4 flex justify-start">
        <div className="flex items-center">
          <img
            src="/img/LOGO.png"
            alt="ASH Logo"
            className="h-14 w-auto object-contain hover:scale-105 transition duration-300"
          />

          <h1 className="ml-3 text-[28px] font-bold text-sky-700">
            AI Study Hub
          </h1>
        </div>
      </div>

      {/* navbar 2/4 */}
      <nav className="w-1/2 flex justify-center items-center">
        <ul className="flex items-center gap-8 text-[15px] font-semibold text-slate-600">
          {NAVIGATE_KEY.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative transition-all duration-300 hover:text-sky-600
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-sky-600 after:transition-all after:duration-300
            hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* menu 1/4 */}
      <div className="flex items-center gap-3">
  {/* Login */}
  <Button
    onClick={() => navigate(`${ROUTE.AUTH}/${ROUTE.LOGIN}`)}
    className="
      rounded-full
      bg-gradient-to-r from-sky-600 to-blue-700
      px-7 py-2.5
      text-sm font-semibold text-white
      shadow-md
      transition-all duration-300
      hover:scale-105
    "
  >
    Login
  </Button>

  {/* Register */}
  <Button
    onClick={() => navigate(`${ROUTE.AUTH}/${ROUTE.REGISTER}`)}
    className="
      rounded-full
      bg-gradient-to-r from-emerald-500 to-green-600
      px-7 py-2.5
      text-sm font-semibold text-white
      shadow-md
      transition-all duration-300
      hover:scale-105
      hover:from-emerald-600
      hover:to-green-700
    "
  >
    Register
  </Button>
</div>
    </header>
  );
}

export default Header;
