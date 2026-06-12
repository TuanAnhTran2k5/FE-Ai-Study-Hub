import { CommunityFilters } from '@/components/community/CommunityFilters';
import { CommunityPageHeader } from '@/components/community/CommunityPageHeader';
import { CommunitySidebar } from '@/components/community/CommunitySidebar';
import { CommunityTable } from '@/components/community/CommunityTable';
import { CommunityUploadTip } from '@/components/community/CommunityUploadTip';
import { DocumentsSidebar } from '@/components/documents/DocumentsSidebar';
import { DocumentsTopbar } from '@/components/documents/DocumentsTopbar';
import { useCommunityFilters } from '@/hooks/useCommunityFilters';

export function Community() {
  const {
    filteredDocuments,
    resetFilters,
    searchTerm,
    selectedDocumentType,
    selectedFileType,
    selectedRating,
    selectedSemester,
    selectedSubject,
    setSearchTerm,
    setSelectedDocumentType,
    setSelectedFileType,
    setSelectedRating,
    setSelectedSemester,
    setSelectedSubject,
  } = useCommunityFilters();

  return (
    <div className="dashboard">
      <DocumentsSidebar activeItem="Community" />

      <main className="documents-page">
        <DocumentsTopbar />

        <section className="content community-page">
          <div className="community-layout">
            <div className="community-main">
              <CommunityPageHeader />
              <CommunityFilters
                searchTerm={searchTerm}
                selectedDocumentType={selectedDocumentType}
                selectedSemester={selectedSemester}
                selectedSubject={selectedSubject}
                onDocumentTypeChange={setSelectedDocumentType}
                onSearchTermChange={setSearchTerm}
                onSemesterChange={setSelectedSemester}
                onSubjectChange={setSelectedSubject}
              />
              <CommunityTable documents={filteredDocuments} />
              <CommunityUploadTip />
            </div>

            <CommunitySidebar
              selectedDocumentType={selectedDocumentType}
              selectedFileType={selectedFileType}
              selectedRating={selectedRating}
              selectedSemester={selectedSemester}
              selectedSubject={selectedSubject}
              onDocumentTypeChange={setSelectedDocumentType}
              onFileTypeChange={setSelectedFileType}
              onRatingChange={setSelectedRating}
              onReset={resetFilters}
              onSemesterChange={setSelectedSemester}
              onSubjectChange={setSelectedSubject}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
