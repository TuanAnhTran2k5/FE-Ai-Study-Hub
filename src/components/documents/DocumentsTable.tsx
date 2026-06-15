import { ActionMenuButton } from '@/components/common/ActionMenuButton';
import { TablePagination } from '@/components/common/TablePagination';
import { usePagination } from '@/hooks/usePagination';
import { fileIcons } from '@/models/documentConstants';
import type { StudyDocument } from '@/models/document';

type DocumentsTableProps = {
  documents: StudyDocument[];
  filteredDocuments: StudyDocument[];
};

export function DocumentsTable({ documents, filteredDocuments }: DocumentsTableProps) {
  const pagination = usePagination(filteredDocuments);

  return (
    <div className="documents-table-card">
      <div className="table-wrap">
        <table className="documents-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Subject</th>
              <th>Semester</th>
              <th>Status</th>
              <th>Visibility</th>
              <th>Views</th>
              <th>Downloads</th>
              <th>Uploaded At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagination.paginatedItems.map((document) => (
              <DocumentRow document={document} key={document.title} />
            ))}
            {filteredDocuments.length === 0 ? (
              <tr>
                <td className="empty-table" colSpan={9}>
                  No documents found for this semester.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <TablePagination
        currentPage={pagination.currentPage}
        firstVisibleItem={pagination.firstVisibleItem}
        itemLabel="documents"
        lastVisibleItem={pagination.lastVisibleItem}
        pageSize={pagination.pageSize}
        totalItems={documents.length}
        totalPages={pagination.totalPages}
        onPageChange={pagination.setCurrentPage}
      />
    </div>
  );
}

type DocumentRowProps = {
  document: StudyDocument;
};

function DocumentRow({ document }: DocumentRowProps) {
  const DocumentIcon = fileIcons[document.type];

  return (
    <tr>
      <td>
        <div className="document-cell">
          <span className={`file-icon file-${document.type.toLowerCase()}`}>
            <DocumentIcon size={18} strokeWidth={2.5} />
          </span>
          <div>
            <strong>{document.title}</strong>
            <span>{document.size}</span>
          </div>
        </div>
      </td>
      <td>{document.subject}</td>
      <td>{document.semester}</td>
      <td>
        <span className={`status ${document.status.toLowerCase()}`}>{document.status}</span>
      </td>
      <td>
        <span className="visibility">{document.visibility}</span>
      </td>
      <td>{document.views}</td>
      <td>{document.downloads}</td>
      <td>{document.uploadedAt}</td>
      <td>
        <ActionMenuButton />
      </td>
    </tr>
  );
}
