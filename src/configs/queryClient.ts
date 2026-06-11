<<<<<<< HEAD
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
=======
import { QueryClient } from "@tanstack/react-query";
// 1. Khởi tạo QueryClient bên ngoài component để tránh re-create khi App re-render
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
    },
  },
});
