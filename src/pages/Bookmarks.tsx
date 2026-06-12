import { BookmarksFilters } from '@/components/bookmarks/BookmarksFilters';
import { BookmarksPageHeader } from '@/components/bookmarks/BookmarksPageHeader';
import { BookmarksSidebar } from '@/components/bookmarks/BookmarksSidebar';
import { BookmarksTable } from '@/components/bookmarks/BookmarksTable';
import { BookmarksTip } from '@/components/bookmarks/BookmarksTip';
import { DocumentsSidebar } from '@/components/documents/DocumentsSidebar';
import { DocumentsTopbar } from '@/components/documents/DocumentsTopbar';
import { useBookmarkFilters } from '@/hooks/useBookmarkFilters';

export function Bookmarks() {
  const {
    filteredBookmarks,
    searchTerm,
    selectedSemester,
    selectedSubject,
    selectedType,
    setSearchTerm,
    setSelectedSemester,
    setSelectedSubject,
    setSelectedType,
  } = useBookmarkFilters();

  return (
    <div className="dashboard">
      <DocumentsSidebar activeItem="Bookmarks" />

      <main className="documents-page">
        <DocumentsTopbar />

        <section className="content bookmarks-page">
          <div className="bookmarks-layout">
            <div className="bookmarks-main">
              <BookmarksPageHeader />
              <BookmarksFilters
                searchTerm={searchTerm}
                selectedSemester={selectedSemester}
                selectedSubject={selectedSubject}
                selectedType={selectedType}
                onSearchTermChange={setSearchTerm}
                onSemesterChange={setSelectedSemester}
                onSubjectChange={setSelectedSubject}
                onTypeChange={setSelectedType}
              />
              <BookmarksTable filteredBookmarks={filteredBookmarks} />
              <BookmarksTip />
            </div>

            <BookmarksSidebar />
          </div>
        </section>
      </main>
    </div>
  );
}
