import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileSidebar } from "@/pages/Profile/ProfileSidebar";
import { ProfileTopbar } from "@/pages/Profile/ProfileTopbar";
import { profileUser } from "@/pages/Profile/profileData";
import { NotificationDetailContent } from "./NotificationDetailContent";
import { getNotificationById, getUnreadNotificationCount } from "./notificationsData";

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

function NotificationDetailPage() {
  const navigate = useNavigate();
  const { notificationId } = useParams();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [readNotificationIds, setReadNotificationIds] = useState<string[]>(getStoredReadNotificationIds);
  const notification = useMemo(
    () => (notificationId ? getNotificationById(notificationId) : undefined),
    [notificationId],
  );

  useEffect(() => {
    if (!notificationId) {
      return;
    }

    setReadNotificationIds((currentIds) => {
      if (currentIds.includes(notificationId)) {
        return currentIds;
      }

      const nextIds = [...currentIds, notificationId];
      window.localStorage.setItem(readNotificationsStorageKey, JSON.stringify(nextIds));
      return nextIds;
    });
  }, [notificationId]);

  const unreadNotificationCount = getUnreadNotificationCount(readNotificationIds);
  const handleReadNotification = (nextNotificationId: string) => {
    setReadNotificationIds((currentIds) => {
      if (currentIds.includes(nextNotificationId)) {
        return currentIds;
      }

      const nextIds = [...currentIds, nextNotificationId];
      window.localStorage.setItem(readNotificationsStorageKey, JSON.stringify(nextIds));
      return nextIds;
    });
  };

  if (!notification) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-lg font-bold text-slate-950">Notification not found</p>
          <button
            type="button"
            onClick={() => navigate("/notifications")}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Back to notifications
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950"}`}>
      <div className="flex min-h-screen">
        <ProfileSidebar
          activeItem="Notifications"
          isDarkMode={isDarkMode}
          notificationCount={unreadNotificationCount}
          onThemeToggle={() => setIsDarkMode((current) => !current)}
        />

        <div className="min-w-0 flex-1">
          <ProfileTopbar
            isDarkMode={isDarkMode}
            notificationCount={unreadNotificationCount}
            readNotificationIds={readNotificationIds}
            onNotificationRead={handleReadNotification}
            user={profileUser}
          />

          <main className="px-5 py-8 md:px-8">
            <div className="mx-auto max-w-4xl">
              <NotificationDetailContent isDarkMode={isDarkMode} notification={notification} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetailPage;
