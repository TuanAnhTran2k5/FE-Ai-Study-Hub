import { MoreVertical } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { fileIcons } from '@/models/documentConstants';
import type { StudyDocument } from '@/models/document';

type DocumentsTableProps = {
  documents: StudyDocument[];
  filteredDocuments: StudyDocument[];
};

export function DocumentsTable({ documents, filteredDocuments }: DocumentsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filteredDocuments.length / pageSize));

  const paginatedDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;

    return filteredDocuments.slice(startIndex, startIndex + pageSize);
  }, [currentPage, filteredDocuments]);

  const firstVisibleItem = filteredDocuments.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const lastVisibleItem = Math.min(currentPage * pageSize, filteredDocuments.length);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
            {paginatedDocuments.map((document) => (
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

      <div className="table-footer">
        <span>
          Showing {firstVisibleItem} to {lastVisibleItem} of {documents.length} documents
        </span>
        <div className="pagination">
          <Button
            variant="ghost"
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          >
            &lt;
          </Button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Button
              className={page === currentPage ? 'active' : ''}
              key={page}
              variant="ghost"
              type="button"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="ghost"
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          >
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
        <Button className="more-button" variant="ghost" type="button" aria-label="Open actions">
          <MoreVertical size={20} />
        </Button>
      </td>
    </tr>
  );
}
