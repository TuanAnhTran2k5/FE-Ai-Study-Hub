import { MoreVertical, Star } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { fileIcons } from '@/models/documentConstants';
import type { CommunityDocument } from '@/data/community';

type CommunityTableProps = {
  documents: CommunityDocument[];
};

export function CommunityTable({ documents }: CommunityTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(documents.length / pageSize));

  const paginatedDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;

    return documents.slice(startIndex, startIndex + pageSize);
  }, [currentPage, documents]);

  const firstVisibleItem = documents.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const lastVisibleItem = Math.min(currentPage * pageSize, documents.length);

  return (
    <div className="documents-table-card community-table-card">
      <div className="table-wrap">
        <table className="documents-table community-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Subject</th>
              <th>Semester</th>
              <th>Rating</th>
              <th>Views</th>
              <th>Downloads</th>
              <th>Uploaded by</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {paginatedDocuments.map((document) => (
              <CommunityRow document={document} key={document.title} />
            ))}
            {documents.length === 0 ? (
              <tr>
                <td className="empty-table" colSpan={8}>
                  No community documents match these filters.
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

type CommunityRowProps = {
  document: CommunityDocument;
};

function CommunityRow({ document }: CommunityRowProps) {
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
            <small className="community-uploaded-at">{document.uploadedAt}</small>
          </div>
        </div>
      </td>
      <td>{document.subject}</td>
      <td>{document.semester}</td>
      <td>
        <span className="rating-cell">
          <Star size={15} />
          <strong>{document.rating}</strong>
          <small>({document.ratingCount})</small>
        </span>
      </td>
      <td>{document.views}</td>
      <td>{document.downloads}</td>
      <td>
        <div className="uploader-cell">
          <span className="mini-avatar">{document.uploader.slice(0, 1)}</span>
          <div>
            <strong>{document.uploader}</strong>
            <span>{document.badge}</span>
          </div>
        </div>
      </td>
      <td>
        <Button className="more-button" variant="ghost" type="button" aria-label="Open actions">
          <MoreVertical size={20} />
        </Button>
      </td>
    </tr>
  );
}
