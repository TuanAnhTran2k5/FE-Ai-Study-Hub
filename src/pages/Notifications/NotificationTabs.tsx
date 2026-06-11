import { getNotificationTabCountsByReadIds } from "./notificationsData";

type NotificationTabsProps = {
  activeTab: string;
  deletedNotificationIds: string[];
  isDarkMode: boolean;
  readNotificationIds: string[];
  onTabChange: (tab: string) => void;
};

export function NotificationTabs({
  activeTab,
  deletedNotificationIds,
  isDarkMode,
  readNotificationIds,
  onTabChange,
}: NotificationTabsProps) {
  const notificationTabs = getNotificationTabCountsByReadIds(readNotificationIds, deletedNotificationIds);

  return (
    <div className={`grid overflow-hidden rounded-xl border sm:grid-cols-5 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      {notificationTabs.map((tab) => (
        <button
          key={tab.label}
          type="button"
          onClick={() => onTabChange(tab.label)}
          className={`flex h-12 items-center justify-center gap-2 border-b text-sm font-semibold transition sm:border-b-0 sm:border-r last:border-r-0 ${
            activeTab === tab.label
              ? isDarkMode
                ? "bg-slate-800 text-blue-300"
                : "bg-blue-50 text-blue-700"
              : isDarkMode
                ? "border-slate-800 text-slate-300 hover:bg-slate-800"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          {tab.label}
          <span className={`rounded-full px-2 py-0.5 text-xs ${
            activeTab === tab.label ? "bg-blue-600 text-white" : isDarkMode ? "bg-slate-700 text-slate-200" : "bg-slate-100 text-slate-700"
          }`}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}
