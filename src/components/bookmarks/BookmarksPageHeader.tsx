import { Bookmark } from 'lucide-react';

export function BookmarksPageHeader() {
  return (
    <div className="page-heading bookmarks-heading">
      <div className="bookmarks-title">
        <Bookmark size={34} />
        <div>
          <h1>Bookmarks</h1>
          <p>Save important documents and resources for quick access later.</p>
        </div>
      </div>
    </div>
  );
}
