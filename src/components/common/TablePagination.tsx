import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

type TablePaginationProps = {
  currentPage: number;
  firstVisibleItem: number;
  itemLabel: string;
  lastVisibleItem: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function TablePagination({
  currentPage,
  firstVisibleItem,
  itemLabel,
  lastVisibleItem,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
}: TablePaginationProps) {
  return (
    <div className="table-footer">
      <span>
        Showing {firstVisibleItem} to {lastVisibleItem} of {totalItems} {itemLabel}
      </span>
      <div className="pagination">
        <Button
          variant="ghost"
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        >
          &lt;
        </Button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Button
            className={page === currentPage ? 'active' : ''}
            key={page}
            variant="ghost"
            type="button"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="ghost"
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        >
          &gt;
        </Button>
      </div>
      <label>
        Show
        <Select value={String(pageSize)} disabled>
          <option value={String(pageSize)}>{pageSize}</option>
        </Select>
        per page
      </label>
    </div>
  );
}
