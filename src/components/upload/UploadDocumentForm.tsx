import { Globe2, Lock, UploadCloud } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { subjects } from '@/data/subjects';
import type { DocumentVisibility } from '@/models/document';

type UploadDocumentFormProps = {
  semester: string;
  subject: string;
  title: string;
  visibility: DocumentVisibility;
  onCancel: () => void;
  onSemesterChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  onUpload: () => void;
  onVisibilityChange: (value: DocumentVisibility) => void;
};

export function UploadDocumentForm({
  semester,
  subject,
  title,
  visibility,
  onCancel,
  onSemesterChange,
  onSubjectChange,
  onTitleChange,
  onUpload,
  onVisibilityChange,
}: UploadDocumentFormProps) {
  return (
    <section className="upload-card">
      <h2>Document Information</h2>

      <div className="form-grid">
        <label>
          Title <span>*</span>
          <Input
            placeholder="Enter document title"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
          />
        </label>
        <label>
          Subject <span>*</span>
          <Select value={subject} onChange={(event) => onSubjectChange(event.target.value)}>
            <option value="" disabled>
              Select subject
            </option>
            {subjects.map((item) => (
              <option key={item.code} value={item.code}>
                {item.code} - {item.name}
              </option>
            ))}
          </Select>
        </label>
        <label>
          Semester <span>*</span>
          <Select value={semester} onChange={(event) => onSemesterChange(event.target.value)}>
            <option value="" disabled>
              Select semester
            </option>
            {Array.from({ length: 9 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Select>
        </label>
        <label>
          Document Type <span>*</span>
          <Select defaultValue="">
            <option value="" disabled>
              Select type
            </option>
            <option value="pdf">PDF</option>
            <option value="doc">DOC/DOCX</option>
            <option value="ppt">PPT/PPTX</option>
          </Select>
        </label>
      </div>

      <label className="full-field">
        Description <span>*</span>
        <textarea
          placeholder="Describe what this document contains, what topics it covers, and who it might help..."
          maxLength={500}
        />
        <small>0 / 500</small>
      </label>

      <div className="visibility-section">
        <p>
          Visibility <span>*</span>
        </p>
        <div className="visibility-options">
          <button
            className={`visibility-card ${visibility === 'Public' ? 'active' : ''}`}
            type="button"
            onClick={() => onVisibilityChange('Public')}
            aria-pressed={visibility === 'Public'}
          >
            <Globe2 size={25} />
            <span>
              <strong>Public</strong>
              Visible to everyone
              <small>Earn more reputation points</small>
            </span>
          </button>
          <button
            className={`visibility-card ${visibility === 'Private' ? 'active' : ''}`}
            type="button"
            onClick={() => onVisibilityChange('Private')}
            aria-pressed={visibility === 'Private'}
          >
            <Lock size={25} />
            <span>
              <strong>Private</strong>
              Only visible to you
              <small>Not publicly accessible</small>
            </span>
          </button>
        </div>
      </div>

      <label className="full-field">
        Tags
        <Input placeholder="Add tags (e.g., tutorial, lecture, exercises...)" />
        <small>Add relevant tags to help others find your document easily.</small>
      </label>

      <div className="upload-actions">
        <Button type="button" onClick={onUpload}>
          <UploadCloud size={18} />
          Upload Document
        </Button>
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </section>
  );
}
