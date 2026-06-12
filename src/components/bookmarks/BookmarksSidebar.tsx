import { Bookmark, FileText, Link, Newspaper, PlayCircle } from 'lucide-react';

import { bookmarkCategories, bookmarks, bookmarkTopSubjects } from '@/data/bookmarks';

const categoryIcons = [Bookmark, FileText, Newspaper, PlayCircle, Link];

export function BookmarksSidebar() {
  return (
    <aside className="bookmarks-side">
      <section className="bookmarks-card">
        <h2>Categories</h2>
        <div className="bookmark-category-list">
          {bookmarkCategories.map((category, index) => {
            const Icon = categoryIcons[index];

            return (
              <div className="bookmark-category" key={category.label}>
                <span>
                  <Icon size={17} />
                  {category.label}
                </span>
                <strong>{category.count}</strong>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bookmarks-card">
        <h2>Top Subjects</h2>
        <div className="bookmark-subject-list">
          {bookmarkTopSubjects.map((subject) => (
            <div className="bookmark-subject" key={subject.label}>
              <span>{subject.label}</span>
              <strong>{subject.count}</strong>
            </div>
          ))}
        </div>
        <button className="view-all-button" type="button">
          View All Subjects
        </button>
      </section>

      <section className="bookmarks-card">
        <h2>Recently Bookmarked</h2>
        <div className="recent-bookmarks">
          {bookmarks.slice(0, 3).map((bookmark) => (
            <div className="recent-bookmark" key={bookmark.title}>
              <span className={`file-icon file-${bookmark.fileType.toLowerCase()}`}>
                {bookmark.fileType}
              </span>
              <div>
                <strong>{bookmark.title}</strong>
                <small>
                  {bookmark.bookmarkedDate} · {bookmark.bookmarkedTime}
                </small>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-button" type="button">
          View All
        </button>
      </section>
    </aside>
  );
}
