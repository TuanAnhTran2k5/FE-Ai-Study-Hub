import {
  AtSign,
  Bell,
  Bookmark,
  CloudUpload,
  FileText,
  MessageSquare,
  ShieldCheck,
  Star,
} from "lucide-react";

export const notificationTabLabels = ["All", "Unread", "Mentions", "System", "Updates"];

export const notifications = [
  {
    group: "Today",
    items: [
      {
        id: "document-viewed-oop-java",
        title: 'Your document "OOP in Java - Complete Guide.pdf" was viewed by 12 users.',
        person: "System Activity",
        time: "10:30 AM",
        category: "Document",
        content:
          'Your public document "OOP in Java - Complete Guide.pdf" received 12 new views today. This interaction contributes to your weekly visibility and helps your documents rank higher in search.',
        icon: FileText,
        color: "bg-violet-50 text-violet-600",
        unread: true,
      },
      {
        id: "comment-database-normalization",
        title: 'Le Minh Anh commented on your document "Database Normalization Notes.docx".',
        person: "Le Minh Anh",
        time: "09:15 AM",
        category: "Comment",
        content:
          'Le Minh Anh left a new comment asking for clarification about third normal form in your document "Database Normalization Notes.docx".',
        icon: MessageSquare,
        color: "bg-emerald-50 text-emerald-600",
        unread: false,
      },
      {
        id: "rating-ai-summary-guide",
        title: 'Your document "AI Summary Guide.pdf" received a 5-star rating.',
        person: "Tran Minh K",
        time: "09:00 AM",
        category: "Achievement",
        content:
          'Tran Minh K rated your document "AI Summary Guide.pdf" 5 stars. High ratings help improve your reputation score and document visibility.',
        icon: Star,
        color: "bg-amber-50 text-amber-600",
        unread: true,
      },
      {
        id: "earned-50-reputation",
        title: "Congratulations! You earned 50 reputation points.",
        person: "AI Study Hub",
        time: "08:45 AM",
        category: "Achievement",
        content:
          "You earned 50 reputation points from recent document downloads, bookmarks, and positive ratings. Keep contributing quality study materials to unlock more rewards.",
        icon: Star,
        color: "bg-amber-50 text-amber-600",
        unread: false,
      },
    ],
  },
  {
    group: "Yesterday",
    items: [
      {
        id: "software-testing-approved",
        title: 'Your document "Software Testing Basics.pptx" has been approved and is now public.',
        person: "Moderation System",
        time: "Yesterday, 04:30 PM",
        category: "System",
        content:
          'Your upload "Software Testing Basics.pptx" passed moderation and is now visible to other students in the public document hub.',
        icon: CloudUpload,
        color: "bg-blue-50 text-blue-600",
        unread: true,
      },
      {
        id: "mentioned-by-pham-hoang-nam",
        title: "Pham Hoang Nam mentioned you in a comment.",
        person: "Pham Hoang Nam",
        time: "Yesterday, 02:20 PM",
        category: "Mention",
        content:
          "Pham Hoang Nam mentioned you in a discussion thread and asked for your opinion about preparing for the SWP391 final project.",
        icon: AtSign,
        color: "bg-purple-50 text-purple-600",
        unread: false,
      },
      {
        id: "bookmark-database-notes",
        title: 'Your document "Database Normalization Notes.docx" was bookmarked by 5 students.',
        person: "Document Hub",
        time: "Yesterday, 01:10 PM",
        category: "Update",
        content:
          'Five students bookmarked your document "Database Normalization Notes.docx". Bookmarks add reputation points and show that your content is useful.',
        icon: Bookmark,
        color: "bg-emerald-50 text-emerald-600",
        unread: true,
      },
      {
        id: "bookmarked-polymorphism",
        title: 'You bookmarked "What is Polymorphism in Java?".',
        person: "You",
        time: "Yesterday, 11:05 AM",
        category: "Update",
        content:
          'The document "What is Polymorphism in Java?" was added to your bookmarks so you can quickly access it later.',
        icon: Bookmark,
        color: "bg-emerald-50 text-emerald-600",
        unread: false,
      },
    ],
  },
  {
    group: "This Week",
    items: [
      {
        id: "java-21-features-added",
        title: 'New document "Java 21 Features Overview.pdf" added in Web Development.',
        person: "Document Hub",
        time: "May 12, 2024, 10:30 AM",
        category: "Update",
        content:
          'A new public document, "Java 21 Features Overview.pdf", was added to the Web Development category.',
        icon: FileText,
        color: "bg-orange-50 text-orange-600",
        unread: false,
      },
      {
        id: "weekly-top-three-warning",
        title: "You are close to the Top 3 weekly contributors.",
        person: "Leaderboard System",
        time: "May 12, 2024, 08:00 AM",
        category: "System",
        content:
          "Your weekly score is close to the current Top 3. More downloads, bookmarks, or strong ratings can help you earn the Top Weekly Contributor badge.",
        icon: ShieldCheck,
        color: "bg-blue-50 text-blue-600",
        unread: true,
      },
      {
        id: "swp391-report-ready",
        title: 'Your report "SWP391 - Final Project Guide.pdf" is ready to download.',
        person: "Report System",
        time: "May 11, 2024, 09:15 AM",
        category: "System",
        content:
          'Your generated report "SWP391 - Final Project Guide.pdf" is complete and ready to download from your document workspace.',
        icon: ShieldCheck,
        color: "bg-blue-50 text-blue-600",
        unread: false,
      },
    ],
  },
  {
    group: "Earlier",
    items: [
      {
        id: "welcome-complete-profile",
        title: "Welcome to AI Study Hub! Complete your profile to get started.",
        person: "AI Study Hub",
        time: "May 5, 2024, 10:00 AM",
        category: "System",
        content:
          "Welcome to AI Study Hub. Complete your profile to help the community recognize your contributions and unlock reputation rewards.",
        icon: Bell,
        color: "bg-slate-100 text-slate-600",
        unread: false,
      },
    ],
  },
];

export type NotificationGroup = (typeof notifications)[number];
export type NotificationItem = NotificationGroup["items"][number];
export type NotificationFiltersValue = {
  type: string;
  category: string;
  date: string;
};

export function getAllNotifications() {
  return notifications.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      group: group.group,
    })),
  );
}

export function getNotificationById(notificationId: string) {
  return getAllNotifications().find((item) => item.id === notificationId);
}

const categoryByTab: Record<string, string[]> = {
  Mentions: ["Mention"],
  System: ["System"],
  Updates: ["Update"],
};

export function filterNotificationsByTab(activeTab: string) {
  return filterNotifications(activeTab, {
    type: "All Types",
    category: "All Categories",
    date: "All Time",
  });
}

export function filterNotifications(
  activeTab: string,
  filters: NotificationFiltersValue,
  readNotificationIds: string[] = [],
  deletedNotificationIds: string[] = [],
) {
  return notifications
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (deletedNotificationIds.includes(item.id)) {
          return false;
        }

        const isUnread = item.unread && !readNotificationIds.includes(item.id);
        const tabMatches =
          activeTab === "All" ||
          (activeTab === "Unread" && isUnread) ||
          (categoryByTab[activeTab]?.includes(item.category) ?? false);
        const typeMatches =
          filters.type === "All Types" ||
          (filters.type === "Unread" && isUnread) ||
          (categoryByTab[filters.type]?.includes(item.category) ?? false);
        const categoryMatches =
          filters.category === "All Categories" || item.category === filters.category;
        const dateMatches = filters.date === "All Time" || group.group === filters.date;

        if (!tabMatches) {
          return false;
        }

        return typeMatches && categoryMatches && dateMatches;
      }),
    }))
    .filter((group) => group.items.length > 0);
}

export function getNotificationTabCounts() {
  return getNotificationTabCountsByReadIds([]);
}

export function getNotificationTabCountsByReadIds(
  readNotificationIds: string[],
  deletedNotificationIds: string[] = [],
) {
  const allItems = notifications
    .flatMap((group) => group.items)
    .filter((item) => !deletedNotificationIds.includes(item.id));

  return notificationTabLabels.map((label) => {
    if (label === "All") {
      return { label, count: allItems.length };
    }

    if (label === "Unread") {
      return {
        label,
        count: allItems.filter((item) => item.unread && !readNotificationIds.includes(item.id)).length,
      };
    }

    const categories = categoryByTab[label] ?? [];
    return {
      label,
      count: allItems.filter((item) => categories.includes(item.category)).length,
    };
  });
}

export function getUnreadNotificationCount(readNotificationIds: string[]) {
  return getNotificationTabCountsByReadIds(readNotificationIds).find((tab) => tab.label === "Unread")?.count ?? 0;
}

export function getNotificationSummary(groups: NotificationGroup[], readNotificationIds: string[]) {
  const allItems = groups.flatMap((group) => group.items);
  const total = allItems.length;
  const getPercentage = (count: number) => (total === 0 ? "0.0" : ((count / total) * 100).toFixed(1));
  const getValue = (count: number) => `${count} (${getPercentage(count)}%)`;
  const unreadCount = allItems.filter((item) => item.unread && !readNotificationIds.includes(item.id)).length;
  const mentionCount = allItems.filter((item) => item.category === "Mention").length;
  const systemCount = allItems.filter((item) => item.category === "System").length;
  const updateCount = allItems.filter((item) => item.category === "Update").length;
  const knownCount = unreadCount + mentionCount + systemCount + updateCount;
  const otherCount = Math.max(total - knownCount, 0);

  return {
    total,
    items: [
      { label: "Unread", value: getValue(unreadCount), count: unreadCount, color: "bg-blue-600" },
      { label: "Mentions", value: getValue(mentionCount), count: mentionCount, color: "bg-purple-500" },
      { label: "System", value: getValue(systemCount), count: systemCount, color: "bg-indigo-500" },
      { label: "Updates", value: getValue(updateCount), count: updateCount, color: "bg-emerald-500" },
      { label: "Others", value: getValue(otherCount), count: otherCount, color: "bg-amber-400" },
    ],
  };
}
