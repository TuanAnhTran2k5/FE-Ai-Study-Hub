import LoginForm from "@/components/LoginForm";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import { ROUTE } from "@/models/routePath";
import HomePage from "@/pages/HomePage";
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
    path: ROUTE.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE.LOGIN,
        element: <LoginForm />,
      },
    ],
  },
]);

export const NAVIGATE_KEY = [
  {
    name: "About",
    path: <div></div>,
  },
  {
    name: "Contact",
    path: <div></div>,
  },
  {
    name: "Blog",
    path: <div></div>,
  },
];
