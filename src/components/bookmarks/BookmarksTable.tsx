import { ActionMenuButton } from '@/components/common/ActionMenuButton';
import { TablePagination } from '@/components/common/TablePagination';
import { bookmarks } from '@/data/bookmarks';
import { usePagination } from '@/hooks/usePagination';
import { fileIcons } from '@/models/documentConstants';
import type { BookmarkItem, BookmarkType } from '@/data/bookmarks';

const typeClass: Record<BookmarkType, string> = {
  Document: 'document',
  Article: 'article',
  Video: 'video',
  Link: 'link',
};

type BookmarksTableProps = {
  filteredBookmarks: BookmarkItem[];
};

export function BookmarksTable({ filteredBookmarks }: BookmarksTableProps) {
  const pagination = usePagination(filteredBookmarks);

  return (
    <div className="documents-table-card bookmarks-table-card">
      <div className="table-wrap">
        <table className="documents-table bookmarks-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Type</th>
              <th>Subject</th>
              <th>Semester</th>
              <th>Bookmarked At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagination.paginatedItems.map((bookmark) => (
              <BookmarkRow bookmark={bookmark} key={bookmark.title} />
            ))}
            {filteredBookmarks.length === 0 ? (
              <tr>
                <td className="empty-table" colSpan={6}>
                  No bookmarks match these filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <TablePagination
        currentPage={pagination.currentPage}
        firstVisibleItem={pagination.firstVisibleItem}
        itemLabel="bookmarks"
        lastVisibleItem={pagination.lastVisibleItem}
        pageSize={pagination.pageSize}
        totalItems={bookmarks.length}
        totalPages={pagination.totalPages}
        onPageChange={pagination.setCurrentPage}
      />
    </div>
  );
}

type BookmarkRowProps = {
  bookmark: BookmarkItem;
};

function BookmarkRow({ bookmark }: BookmarkRowProps) {
  const BookmarkIcon = fileIcons[bookmark.fileType];

  return (
    <tr>
      <td>
        <div className="document-cell">
          <span className={`file-icon file-${bookmark.fileType.toLowerCase()}`}>
            <BookmarkIcon size={18} strokeWidth={2.5} />
          </span>
          <div>
            <strong>{bookmark.title}</strong>
            <span>{bookmark.meta}</span>
          </div>
        </div>
      </td>
      <td>
        <span className={`bookmark-type ${typeClass[bookmark.type]}`}>{bookmark.type}</span>
      </td>
      <td>{bookmark.subject}</td>
      <td>{bookmark.semester}</td>
      <td>
        <span className="bookmarked-at">
          {bookmark.bookmarkedDate}
          <small>{bookmark.bookmarkedTime}</small>
        </span>
      </td>
      <td>
        <ActionMenuButton />
      </td>
    </tr>
  );
}
