import { ChevronLeft, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "@/models/routePath";
import { profileNavItems } from "./profileData";

type ProfileSidebarProps = {
  activeItem?: string;
  isDarkMode: boolean;
  notificationCount?: number;
  onThemeToggle: () => void;
};

export function ProfileSidebar({
  activeItem = "Profile",
  isDarkMode,
  notificationCount,
  onThemeToggle,
}: ProfileSidebarProps) {
  const navigate = useNavigate();

  const handleNavClick = (label: string) => {
    if (label === "Profile") {
      navigate(ROUTE.PROFILE);
    }

    if (label === "Leaderboard") {
      navigate(ROUTE.LEADERBOARD);
    }

    if (label === "Notifications") {
      navigate(ROUTE.NOTIFICATIONS);
    }
  };

  return (
    <aside className={`hidden min-h-screen w-[292px] shrink-0 border-r px-4 py-6 shadow-[8px_0_30px_rgba(15,23,42,0.03)] lg:flex lg:flex-col ${
      isDarkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
    }`}>
      <div className="flex items-center gap-3 px-3">
        <img src="/img/LOGO.png" alt="ASH logo" className="h-10 w-auto object-contain" />
        <div className="leading-tight">
          <p className={`text-sm font-semibold tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>
            AI StudyHub
          </p>
          <p className={isDarkMode ? "text-[11px] text-slate-400" : "text-[11px] text-slate-500"}>
            Smart learning workspace
          </p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {profileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === activeItem;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.label)}
              className={`flex h-12 w-full items-center justify-between rounded-lg px-4 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)]"
                  : isDarkMode
                    ? "text-slate-300 hover:bg-slate-900 hover:text-blue-300"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                {item.label}
              </span>
              {(item.label === "Notifications" && notificationCount !== undefined && notificationCount > 0) ||
              (item.label !== "Notifications" && item.badge) ? (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-bold text-white">
                  {item.label === "Notifications" && notificationCount !== undefined ? notificationCount : item.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-5">
        <div className={`rounded-xl border p-4 shadow-sm ${
          isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
        }`}>
          <p className={isDarkMode ? "text-sm font-medium text-slate-300" : "text-sm font-medium text-slate-600"}>AI Usage This Month</p>
          <p className={isDarkMode ? "mt-4 text-xl font-bold text-white" : "mt-4 text-xl font-bold text-slate-950"}>28 / 50</p>
          <p className={isDarkMode ? "mt-1 text-xs text-slate-400" : "mt-1 text-xs text-slate-500"}>Chats Used</p>
          <div className="mt-4 flex items-center gap-3">
            <div className={isDarkMode ? "h-2 flex-1 rounded-full bg-slate-800" : "h-2 flex-1 rounded-full bg-slate-100"}>
              <div className="h-2 w-[56%] rounded-full bg-blue-600" />
            </div>
            <span className="text-xs text-slate-500">56%</span>
          </div>
        </div>

        <div className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
          isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
        }`}>
          <div className={`flex items-center gap-3 text-sm font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </div>
          <button
            type="button"
            aria-pressed={isDarkMode}
            onClick={onThemeToggle}
            className={`relative h-7 w-12 rounded-full transition ${
              isDarkMode ? "bg-blue-600" : "bg-slate-200"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
                isDarkMode ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>

        <button className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${
          isDarkMode ? "text-slate-400 hover:bg-slate-900" : "text-slate-500 hover:bg-slate-100"
        }`}>
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
