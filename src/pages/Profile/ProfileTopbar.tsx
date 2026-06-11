import { Bell, ChevronDown, LogOut, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "@/models/routePath";
import { getAllNotifications } from "@/pages/Notifications/notificationsData";
import type { ProfileUser } from "./profileData";

type ProfileTopbarProps = {
  isDarkMode: boolean;
  notificationCount?: number;
  readNotificationIds?: string[];
  onNotificationRead?: (notificationId: string) => void;
  user: ProfileUser;
};

const readNotificationsStorageKey = "ai-study-hub-read-notifications";

function getStoredReadNotificationIds() {
  const storedValue = window.localStorage.getItem(readNotificationsStorageKey);

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function ProfileTopbar({
  isDarkMode,
  notificationCount,
  readNotificationIds,
  onNotificationRead,
  user,
}: ProfileTopbarProps) {
  const navigate = useNavigate();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [localReadNotificationIds, setLocalReadNotificationIds] = useState<string[]>(getStoredReadNotificationIds);
  const effectiveReadNotificationIds = readNotificationIds ?? localReadNotificationIds;
  const unreadNotifications = getAllNotifications().filter(
    (notification) => notification.unread && !effectiveReadNotificationIds.includes(notification.id),
  );
  const effectiveNotificationCount = notificationCount ?? unreadNotifications.length;

  const loginPath = `/${ROUTE.AUTH}/${ROUTE.LOGIN}`;

  const handleLogout = () => {
    navigate(loginPath);
  };

  const handleNotificationClick = (notificationId: string) => {
    if (onNotificationRead) {
      onNotificationRead(notificationId);
    } else {
      setLocalReadNotificationIds((currentIds) => {
        if (currentIds.includes(notificationId)) {
          return currentIds;
        }

        const nextIds = [...currentIds, notificationId];
        window.localStorage.setItem(readNotificationsStorageKey, JSON.stringify(nextIds));
        return nextIds;
      });
    }

    setIsNotificationsOpen(false);
    navigate(`/notifications/${notificationId}`);
  };

  return (
    <header className={`sticky top-0 z-20 flex h-[88px] items-center justify-between border-b px-5 backdrop-blur md:px-8 ${
      isDarkMode ? "border-slate-800 bg-slate-950/95" : "border-slate-200 bg-white/95"
    }`}>
      <label className={`flex h-11 w-full max-w-[620px] items-center gap-3 rounded-lg border px-4 shadow-sm focus-within:border-blue-300 ${
        isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
      }`}>
        <input
          type="text"
          placeholder="Search for documents, subjects, or users..."
          className={`h-full flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 ${
            isDarkMode ? "text-slate-100" : "text-slate-700"
          }`}
        />
        <Search className="h-5 w-5 text-slate-400" />
      </label>

      <div className="ml-4 flex items-center gap-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsNotificationsOpen((current) => !current);
              setIsUserMenuOpen(false);
            }}
            className={`relative hidden h-10 w-10 items-center justify-center rounded-full sm:flex ${
              isDarkMode ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Bell className="h-5 w-5" />
            {effectiveNotificationCount > 0 ? (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                {effectiveNotificationCount}
              </span>
            ) : null}
          </button>

          {isNotificationsOpen ? (
            <div className={`absolute right-0 top-12 z-30 w-80 overflow-hidden rounded-xl border shadow-[0_18px_48px_rgba(15,23,42,0.16)] ${
              isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
            }`}>
              <div className={`border-b px-4 py-3 ${
                isDarkMode ? "border-slate-700" : "border-slate-100"
              }`}>
                <p className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-950"}`}>Notifications</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {unreadNotifications.length === 0 ? (
                  <div className={isDarkMode ? "px-4 py-6 text-sm text-slate-400" : "px-4 py-6 text-sm text-slate-500"}>
                    No unread notifications.
                  </div>
                ) : null}

                {unreadNotifications.map((notification) => (
                  <button
                    key={notification.id}
                    type="button"
                    onClick={() => handleNotificationClick(notification.id)}
                    className={`block w-full px-4 py-3 text-left transition ${
                      isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-50"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
                      {notification.title}
                    </p>
                    <p className={isDarkMode ? "mt-1 text-xs text-slate-400" : "mt-1 text-xs text-slate-500"}>
                      {notification.content}
                    </p>
                    <p className="mt-2 text-xs font-medium text-blue-600">{notification.time}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => {
            setIsUserMenuOpen((current) => !current);
            setIsNotificationsOpen(false);
          }}
          className={`relative flex items-center gap-3 rounded-xl px-2 py-1.5 transition ${
            isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
          }`}
        >
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
          />
          <div className="hidden text-sm md:block">
            <p className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-950"}`}>{user.name}</p>
            <p className={isDarkMode ? "text-xs text-slate-400" : "text-xs text-slate-500"}>{user.title}</p>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </button>

        {isUserMenuOpen ? (
          <div className={`absolute right-5 top-[72px] z-30 w-44 rounded-xl border p-2 shadow-[0_18px_48px_rgba(15,23,42,0.16)] md:right-8 ${
            isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
          }`}>
            <button
              type="button"
              onClick={handleLogout}
              className={`flex h-10 w-full items-center gap-2 rounded-lg px-3 text-sm font-semibold transition ${
                isDarkMode ? "text-rose-300 hover:bg-slate-800" : "text-rose-600 hover:bg-rose-50"
              }`}
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
