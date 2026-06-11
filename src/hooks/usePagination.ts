import { useEffect, useMemo, useState } from 'react';

type UsePaginationOptions = {
  pageSize?: number;
};

export function usePagination<T>(items: T[], options: UsePaginationOptions = {}) {
  const pageSize = options.pageSize ?? 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;

    return items.slice(startIndex, startIndex + pageSize);
  }, [currentPage, items, pageSize]);

  const firstVisibleItem = items.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const lastVisibleItem = Math.min(currentPage * pageSize, items.length);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    currentPage,
    firstVisibleItem,
    lastVisibleItem,
    pageSize,
    paginatedItems,
    setCurrentPage,
    totalPages,
  };
}
