import { ArrowLeft, CalendarDays, Tag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { getAllNotifications } from "./notificationsData";

type NotificationDetail = ReturnType<typeof getAllNotifications>[number];

type NotificationDetailContentProps = {
  isDarkMode: boolean;
  notification: NotificationDetail;
};

export function NotificationDetailContent({ isDarkMode, notification }: NotificationDetailContentProps) {
  const navigate = useNavigate();
  const Icon = notification.icon;

  return (
    <section className={`rounded-2xl border p-6 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <button
        type="button"
        onClick={() => navigate("/notifications")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to notifications
      </button>

      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${notification.color}`}>
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {notification.category}
            </span>
            <span className={isDarkMode ? "text-xs text-slate-400" : "text-xs text-slate-500"}>
              {notification.group}
            </span>
          </div>

          <h1 className={`mt-4 text-2xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>
            {notification.title}
          </h1>

          <div className={`mt-4 flex flex-wrap gap-4 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" />
              {notification.person}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {notification.time}
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {notification.category}
            </span>
          </div>

          <div className={`mt-8 rounded-xl border p-5 text-sm leading-7 ${
            isDarkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"
          }`}>
            {notification.content}
          </div>
        </div>
      </div>
    </section>
  );
}
