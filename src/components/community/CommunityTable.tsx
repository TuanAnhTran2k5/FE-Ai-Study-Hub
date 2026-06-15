import { Star } from 'lucide-react';

import { ActionMenuButton } from '@/components/common/ActionMenuButton';
import { TablePagination } from '@/components/common/TablePagination';
import { usePagination } from '@/hooks/usePagination';
import { fileIcons } from '@/models/documentConstants';
import type { CommunityDocument } from '@/data/community';

type CommunityTableProps = {
  documents: CommunityDocument[];
};

export function CommunityTable({ documents }: CommunityTableProps) {
  const pagination = usePagination(documents);

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
            {pagination.paginatedItems.map((document) => (
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
        <ActionMenuButton />
      </td>
    </tr>
  );
}
