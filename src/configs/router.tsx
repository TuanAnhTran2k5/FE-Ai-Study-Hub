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
      },
    ],
  },
]);
