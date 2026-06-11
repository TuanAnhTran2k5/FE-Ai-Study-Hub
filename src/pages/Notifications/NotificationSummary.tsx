import { getNotificationSummary } from "./notificationsData";
import type { NotificationGroup } from "./notificationsData";

type NotificationSummaryProps = {
  groups: NotificationGroup[];
  isDarkMode: boolean;
  readNotificationIds: string[];
};

export function NotificationSummary({ groups, isDarkMode, readNotificationIds }: NotificationSummaryProps) {
  const summary = getNotificationSummary(groups, readNotificationIds);

  return (
    <section className={`rounded-2xl border p-5 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <h2 className="text-lg font-bold">Notification Summary</h2>

      <div className="mt-5 flex items-center gap-5">
        <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full bg-[conic-gradient(#2563eb_0_33%,#8b5cf6_33%_42%,#6366f1_42%_75%,#34d399_75%_92%,#fbbf24_92%_100%)]">
          <div className={`grid h-20 w-20 place-items-center rounded-full text-center ${
            isDarkMode ? "bg-slate-950" : "bg-white"
          }`}>
            <div>
              <p className="text-xl font-bold">{summary.total}</p>
              <p className={isDarkMode ? "text-[11px] text-slate-400" : "text-[11px] text-slate-500"}>Total</p>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          {summary.items.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex min-w-0 items-center gap-2">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
                <span className="truncate">{item.label}</span>
              </span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
