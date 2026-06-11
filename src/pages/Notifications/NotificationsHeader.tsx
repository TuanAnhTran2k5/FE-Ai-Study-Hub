import { CheckCircle2, Settings } from "lucide-react";

type NotificationsHeaderProps = {
  isDarkMode: boolean;
};

export function NotificationsHeader({ isDarkMode }: NotificationsHeaderProps) {
  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          Notifications
        </h1>
        <p className={isDarkMode ? "mt-2 text-sm text-slate-400" : "mt-2 text-sm text-slate-500"}>
          Stay updated with the latest activities and important updates.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
          <CheckCircle2 className="h-4 w-4" />
          Mark all as read
        </button>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </div>
    </section>
  );
}
