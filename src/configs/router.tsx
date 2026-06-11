import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import { ROUTE } from "@/models/routePath";
import HomePage from "@/pages/HomePage";
import LeaderboardPage from "@/pages/Leaderboard/LeaderboardPage";
import LoginPage from "@/pages/LoginPage";
import NotificationDetailPage from "@/pages/Notifications/NotificationDetailPage";
import NotificationsPage from "@/pages/Notifications/NotificationsPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: ROUTE.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: ROUTE.LEADERBOARD,
    element: <LeaderboardPage />,
  },
  {
    path: ROUTE.NOTIFICATIONS,
    element: <NotificationsPage />,
  },
  {
    path: ROUTE.NOTIFICATION_DETAIL,
    element: <NotificationDetailPage />,
  },
  {
    path: ROUTE.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);

export const NAVIGATE_KEY = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
];
