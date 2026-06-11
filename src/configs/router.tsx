<<<<<<< HEAD
import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { Bookmarks } from '@/pages/Bookmarks';
import { Community } from '@/pages/Community';
import { MyDocument } from '@/pages/MyDocument';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UploadDocument } from '@/pages/UploadDocument';
import { routePath } from '@/models/routePath';

export const router = createBrowserRouter([
  {
    path: routePath.home,
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routePath.documents.slice(1),
        element: <MyDocument />,
      },
      {
        path: routePath.upload.slice(1),
        element: <UploadDocument />,
      },
      {
        path: routePath.community.slice(1),
        element: <Community />,
      },
      {
        path: routePath.bookmarks.slice(1),
        element: <Bookmarks />,
=======

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
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
      },
    ],
  },
]);
<<<<<<< HEAD
=======

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
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
