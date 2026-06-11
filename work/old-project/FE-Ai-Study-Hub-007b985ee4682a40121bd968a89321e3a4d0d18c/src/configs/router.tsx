
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import { ROUTE } from "@/models/routePath";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
    ],
  },
  {
    path: ROUTE.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE.LOGIN,
        element: <LoginPage/>
      },
      {
        path: ROUTE.REGISTER,
        element: <RegisterPage/>
      },
    ],
  },
]);

export const NAVIGATE_KEY = [
  {
    name: "Documents",
    path: <div></div>,
  },
  {
    name: "Community",
    path: <div></div>,
  },
  {
    name: "AI Chat",
    path: <div></div>,
  },
  {
    name: "Leaderboard",
    path: <div></div>,
  },
];
