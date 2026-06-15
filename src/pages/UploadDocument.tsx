import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DocumentsSidebar } from '@/components/documents/DocumentsSidebar';
import { DocumentsTopbar } from '@/components/documents/DocumentsTopbar';
import { UploadDocumentForm } from '@/components/upload/UploadDocumentForm';
import { UploadDropzone } from '@/components/upload/UploadDropzone';
import { UploadNotice } from '@/components/upload/UploadNotice';
import { UploadPageHeader } from '@/components/upload/UploadPageHeader';
import { UploadSidePanel } from '@/components/upload/UploadSidePanel';
import type { DocumentVisibility } from '@/models/document';
import { routePath } from '@/models/routePath';
import { uploadMockDocument } from '@/services/documentService';

const allowedFileTypes = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt'];
const maxFileSize = 50 * 1024 * 1024;

export function UploadDocument() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [semester, setSemester] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [visibility, setVisibility] = useState<DocumentVisibility>('Public');

  function handleFileChange(file: File | undefined) {
    if (!file) {
      return;
    }

    const extension = file.name.split('.').pop()?.toLowerCase() ?? '';

    if (!allowedFileTypes.includes(extension)) {
      setUploadError(
        'Unsupported file format. Please choose PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, or TXT.',
      );
      return;
    }

    if (file.size > maxFileSize) {
      setUploadError('File is too large. Maximum file size is 50MB.');
      return;
    }

    setSelectedFile(file);
    setUploadError('');

    if (!title) {
      setTitle(file.name);
    }
  }

  function handleMockUpload() {
    if (!selectedFile) {
      setUploadError('Please choose a file before uploading.');
      return;
    }

    if (!title.trim() || !subject || !semester) {
      setUploadError('Please fill in title, subject, and semester.');
      return;
    }

    uploadMockDocument({
      file: selectedFile,
      title: title.trim(),
      subject,
      semester,
      visibility,
    });

    navigate(routePath.documents);
  }

  return (
    <div className="dashboard">
      <DocumentsSidebar activeItem="Upload Document" />

      <main className="documents-page">
        <DocumentsTopbar />

        <section className="content upload-page">
          <UploadPageHeader />

          <div className="upload-grid">
            <div className="upload-main">
              <UploadDropzone
                error={uploadError}
                fileInputRef={fileInputRef}
                selectedFile={selectedFile}
                onFileChange={handleFileChange}
              />
              <UploadDocumentForm
                semester={semester}
                subject={subject}
                title={title}
                visibility={visibility}
                onCancel={() => navigate(routePath.documents)}
                onSemesterChange={setSemester}
                onSubjectChange={setSubject}
                onTitleChange={setTitle}
                onUpload={handleMockUpload}
                onVisibilityChange={setVisibility}
              />
            </div>

            <UploadSidePanel />
          </div>

          <UploadNotice />
        </section>
      </main>
    </div>
  );
}
