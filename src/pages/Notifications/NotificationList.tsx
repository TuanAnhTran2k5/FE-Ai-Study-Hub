import { MoreVertical } from "lucide-react";
import { useState } from "react";
import type { NotificationGroup } from "./notificationsData";

type NotificationListProps = {
  groups: NotificationGroup[];
  isDarkMode: boolean;
  readNotificationIds: string[];
  onDeleteNotification: (notificationId: string) => void;
  onOpenNotification: (notificationId: string) => void;
};

export function NotificationList({
  groups,
  isDarkMode,
  readNotificationIds,
  onDeleteNotification,
  onOpenNotification,
}: NotificationListProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  if (groups.length === 0) {
    return (
      <div className={`rounded-xl border px-6 py-12 text-center text-sm ${
        isDarkMode ? "border-slate-800 bg-slate-900 text-slate-400" : "border-slate-200 bg-white text-slate-500"
      }`}>
        No notifications match this tab.
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {groups.map((group) => (
        <div key={group.group}>
          <h2 className={`mb-2 text-sm font-bold ${isDarkMode ? "text-slate-200" : "text-slate-900"}`}>
            {group.group}
          </h2>

          <div className={`rounded-xl border ${
            isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
          }`}>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isUnread = item.unread && !readNotificationIds.includes(item.id);

              return (
                <div
                  key={item.title}
                  onClick={() => onOpenNotification(item.id)}
                  className={`relative flex items-center gap-4 border-b px-5 py-4 last:border-b-0 ${
                    isDarkMode ? "border-slate-800" : "border-slate-100"
                  } w-full cursor-pointer text-left transition ${isDarkMode ? "hover:bg-slate-950" : "hover:bg-slate-50"}`}
                >
                  {isUnread ? <span className="absolute left-0 h-2 w-2 rounded-full bg-blue-600" /> : null}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-950"}`}>
                      {item.title}
                    </p>
                    <p className={isDarkMode ? "mt-1 text-xs text-slate-400" : "mt-1 text-xs text-slate-500"}>
                      {item.time}
                    </p>
                  </div>

                  <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.category}
                  </span>
                  <span
                    className="relative"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenMenuId((currentId) => (currentId === item.id ? null : item.id))}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                        isDarkMode
                          ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                          : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                      }`}
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>

                    {openMenuId === item.id ? (
                      <span className={`absolute right-0 top-9 z-30 w-44 rounded-xl border p-2 shadow-[0_16px_36px_rgba(15,23,42,0.16)] ${
                        isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
                      }`}>
                        <button
                          type="button"
                          onClick={() => {
                            onDeleteNotification(item.id);
                            setOpenMenuId(null);
                          }}
                          className={`flex h-9 w-full items-center rounded-lg px-3 text-left text-sm font-semibold ${
                            isDarkMode ? "text-rose-300 hover:bg-slate-800" : "text-rose-600 hover:bg-rose-50"
                          }`}
                        >
                          Delete notification
                        </button>
                      </span>
                    ) : null}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
