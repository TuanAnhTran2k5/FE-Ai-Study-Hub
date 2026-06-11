import { MoreVertical } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { bookmarks } from '@/data/bookmarks';
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
            {filteredBookmarks.map((bookmark) => (
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

      <div className="table-footer">
        <span>
          Showing {filteredBookmarks.length === 0 ? 0 : 1} to {filteredBookmarks.length} of{' '}
          {bookmarks.length} bookmarks
        </span>
        <div className="pagination">
          <Button variant="ghost" type="button">
            &lt;
          </Button>
          {[1, 2, 3, 4].map((page) => (
            <Button className={page === 1 ? 'active' : ''} key={page} variant="ghost" type="button">
              {page}
            </Button>
          ))}
          <Button variant="ghost" type="button">
            &gt;
          </Button>
        </div>
        <label>
          Show
          <Select defaultValue="8">
            <option value="8">8</option>
          </Select>
          per page
        </label>
      </div>
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
        <Button className="more-button" variant="ghost" type="button" aria-label="Open actions">
          <MoreVertical size={20} />
        </Button>
      </td>
    </tr>
  );
}
