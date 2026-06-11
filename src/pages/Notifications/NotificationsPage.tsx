import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileSidebar } from "@/pages/Profile/ProfileSidebar";
import { ProfileTopbar } from "@/pages/Profile/ProfileTopbar";
import { profileUser } from "@/pages/Profile/profileData";
import { NotificationFilters } from "./NotificationFilters";
import { NotificationList } from "./NotificationList";
import { NotificationPagination } from "./NotificationPagination";
import { NotificationSummary } from "./NotificationSummary";
import { NotificationTabs } from "./NotificationTabs";
import { NotificationsHeader } from "./NotificationsHeader";
import { filterNotifications, getUnreadNotificationCount } from "./notificationsData";
import type { NotificationFiltersValue, NotificationGroup } from "./notificationsData";

const defaultFilters: NotificationFiltersValue = {
  type: "All Types",
  category: "All Categories",
  date: "All Time",
};

const readNotificationsStorageKey = "ai-study-hub-read-notifications";
const deletedNotificationsStorageKey = "ai-study-hub-deleted-notifications";

function getStoredNotificationIds(storageKey: string) {
  const storedValue = window.localStorage.getItem(storageKey);

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

function NotificationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [filters, setFilters] = useState<NotificationFiltersValue>(defaultFilters);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [readNotificationIds, setReadNotificationIds] = useState<string[]>(() => getStoredNotificationIds(readNotificationsStorageKey));
  const [deletedNotificationIds, setDeletedNotificationIds] = useState<string[]>(() => getStoredNotificationIds(deletedNotificationsStorageKey));
  const unreadNotificationCount = getUnreadNotificationCount(readNotificationIds);
  const filteredNotificationGroups = filterNotifications(activeTab, filters, readNotificationIds, deletedNotificationIds);
  const flattenedNotifications = filteredNotificationGroups.flatMap((group) =>
    group.items.map((item) => ({
      group: group.group,
      item,
    })),
  );
  const totalNotifications = flattenedNotifications.length;
  const totalPages = Math.max(1, Math.ceil(totalNotifications / pageSize));
  const normalizedCurrentPage = Math.min(currentPage, totalPages);
  const paginatedNotificationGroups = useMemo(() => {
    const startIndex = (normalizedCurrentPage - 1) * pageSize;
    const pageItems = flattenedNotifications.slice(startIndex, startIndex + pageSize);

    return pageItems.reduce<NotificationGroup[]>((groups, entry) => {
      const existingGroup = groups.find((group) => group.group === entry.group);

      if (existingGroup) {
        existingGroup.items.push(entry.item);
        return groups;
      }

      groups.push({
        group: entry.group,
        items: [entry.item],
      });
      return groups;
    }, []);
  }, [flattenedNotifications, normalizedCurrentPage, pageSize]);

  const handleOpenNotification = (notificationId: string) => {
    handleReadNotification(notificationId);
    navigate(`/notifications/${notificationId}`);
  };

  const handleReadNotification = (notificationId: string) => {
    const nextReadNotificationIds = readNotificationIds.includes(notificationId)
      ? readNotificationIds
      : [...readNotificationIds, notificationId];

    setReadNotificationIds(nextReadNotificationIds);
    window.localStorage.setItem(readNotificationsStorageKey, JSON.stringify(nextReadNotificationIds));
  };

  const handleDeleteNotification = (notificationId: string) => {
    const nextDeletedNotificationIds = deletedNotificationIds.includes(notificationId)
      ? deletedNotificationIds
      : [...deletedNotificationIds, notificationId];
    const nextReadNotificationIds = readNotificationIds.includes(notificationId)
      ? readNotificationIds
      : [...readNotificationIds, notificationId];

    setDeletedNotificationIds(nextDeletedNotificationIds);
    setReadNotificationIds(nextReadNotificationIds);
    window.localStorage.setItem(deletedNotificationsStorageKey, JSON.stringify(nextDeletedNotificationIds));
    window.localStorage.setItem(readNotificationsStorageKey, JSON.stringify(nextReadNotificationIds));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleApplyFilters = (nextFilters: NotificationFiltersValue) => {
    setFilters(nextFilters);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (nextPageSize: number) => {
    setPageSize(nextPageSize);
    setCurrentPage(1);
  };

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
            <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="min-w-0 space-y-6">
                <NotificationsHeader isDarkMode={isDarkMode} />
                <NotificationTabs
                  activeTab={activeTab}
                  deletedNotificationIds={deletedNotificationIds}
                  isDarkMode={isDarkMode}
                  readNotificationIds={readNotificationIds}
                  onTabChange={handleTabChange}
                />
                <NotificationList
                  groups={paginatedNotificationGroups}
                  isDarkMode={isDarkMode}
                  readNotificationIds={readNotificationIds}
                  onDeleteNotification={handleDeleteNotification}
                  onOpenNotification={handleOpenNotification}
                />
                <NotificationPagination
                  currentPage={normalizedCurrentPage}
                  isDarkMode={isDarkMode}
                  pageSize={pageSize}
                  totalItems={totalNotifications}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  onPageSizeChange={handlePageSizeChange}
                />
              </div>

              <aside className="space-y-6">
                <NotificationFilters
                  filters={filters}
                  isDarkMode={isDarkMode}
                  onApplyFilters={handleApplyFilters}
                  onResetFilters={() => handleApplyFilters(defaultFilters)}
                />
                <NotificationSummary
                  groups={filteredNotificationGroups}
                  isDarkMode={isDarkMode}
                  readNotificationIds={readNotificationIds}
                />
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;
