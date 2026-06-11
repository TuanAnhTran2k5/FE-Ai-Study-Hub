import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";

type NotificationPaginationProps = {
  currentPage: number;
  isDarkMode: boolean;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

export function NotificationPagination({
  currentPage,
  isDarkMode,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: NotificationPaginationProps) {
  const [draftPageSize, setDraftPageSize] = useState(String(pageSize));
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    setDraftPageSize(String(pageSize));
  }, [pageSize]);

  const applyDraftPageSize = () => {
    const nextPageSize = Number(draftPageSize);

    if (Number.isInteger(nextPageSize) && nextPageSize > 0) {
      onPageSizeChange(nextPageSize);
    }
  };

  const handlePageSizeKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      applyDraftPageSize();
    }
  };

  return (
    <div className="flex flex-col gap-4 pt-2 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p className={isDarkMode ? "text-slate-400" : "text-slate-500"}>
        Showing {startItem} to {endItem} of {totalItems} notifications
      </p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`h-9 w-9 rounded-lg border disabled:cursor-not-allowed disabled:opacity-40 ${
            isDarkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          ‹
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`h-9 w-9 rounded-lg font-semibold ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : isDarkMode
                  ? "border border-slate-700 text-slate-200"
                  : "border border-slate-200 text-slate-900"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => onPageChange(currentPage + 1)}
          className={`h-9 w-9 rounded-lg border disabled:cursor-not-allowed disabled:opacity-40 ${
            isDarkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          ›
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>Show</span>
        <input
          type="number"
          min={1}
          value={draftPageSize}
          onBlur={applyDraftPageSize}
          onChange={(event) => setDraftPageSize(event.target.value)}
          onKeyDown={handlePageSizeKeyDown}
          className={`h-9 w-20 rounded-lg border px-3 text-sm outline-none ${
            isDarkMode ? "border-slate-700 bg-slate-950" : "border-slate-200 bg-white"
          }`}
        />
        <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>per page</span>
      </div>
    </div>
  );
}
