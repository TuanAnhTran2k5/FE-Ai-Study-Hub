import { DocumentsFilters } from '@/components/documents/DocumentsFilters';
import { DocumentsPageHeader } from '@/components/documents/DocumentsPageHeader';
import { DocumentsSidebar } from '@/components/documents/DocumentsSidebar';
import { DocumentsStats } from '@/components/documents/DocumentsStats';
import { DocumentsTable } from '@/components/documents/DocumentsTable';
import { DocumentsTip } from '@/components/documents/DocumentsTip';
import { DocumentsTopbar } from '@/components/documents/DocumentsTopbar';
import { useDocumentFilters } from '@/hooks/useDocumentFilters';

export function MyDocument() {
  const {
    documents,
    filteredDocuments,
    handleSemesterChange,
    isLoadingSubjects,
    searchTerm,
    selectedSemester,
    selectedStatus,
    selectedSubject,
    setSearchTerm,
    setSelectedStatus,
    setSelectedSubject,
    subjectOptions,
  } = useDocumentFilters();

  return (
    <div className="dashboard">
      <DocumentsSidebar activeItem="My Documents" />

      <main className="documents-page">
        <DocumentsTopbar />

        <section className="content">
          <DocumentsPageHeader />
          <DocumentsStats />
          <DocumentsFilters
            isLoadingSubjects={isLoadingSubjects}
            searchTerm={searchTerm}
            selectedSemester={selectedSemester}
            selectedStatus={selectedStatus}
            selectedSubject={selectedSubject}
            subjectOptions={subjectOptions}
            onSearchTermChange={setSearchTerm}
            onSemesterChange={handleSemesterChange}
            onStatusChange={setSelectedStatus}
            onSubjectChange={setSelectedSubject}
          />
          <DocumentsTable documents={documents} filteredDocuments={filteredDocuments} />
          <DocumentsTip />
        </section>
      </main>
    </div>
  );
}
