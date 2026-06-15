import { documents as seedDocuments } from '@/data/documents';
import type { DocumentFileType, DocumentVisibility, StudyDocument } from '@/models/document';

const MOCK_DOCUMENTS_KEY = 'ai-study-hub-documents';

export type MockUploadPayload = {
  file: File;
  title: string;
  subject: string;
  semester: string;
  visibility: DocumentVisibility;
};

export function getMockDocuments(): StudyDocument[] {
  const savedDocuments = window.localStorage.getItem(MOCK_DOCUMENTS_KEY);

  if (!savedDocuments) {
    return seedDocuments;
  }

  try {
    return JSON.parse(savedDocuments) as StudyDocument[];
  } catch {
    return seedDocuments;
  }
}

export function uploadMockDocument(payload: MockUploadPayload): StudyDocument {
  const document: StudyDocument = {
    type: getFileType(payload.file.name),
    title: payload.title,
    size: formatFileSize(payload.file.size),
    subject: payload.subject,
    semester: payload.semester,
    status: 'Pending',
    visibility: payload.visibility,
    views: '-',
    downloads: '-',
    uploadedAt: 'Just now',
  };

  const documents = [document, ...getMockDocuments()];
  window.localStorage.setItem(MOCK_DOCUMENTS_KEY, JSON.stringify(documents));

  return document;
}

function getFileType(fileName: string): DocumentFileType {
  const extension = fileName.split('.').pop()?.toLowerCase();

  if (extension === 'pdf') {
    return 'PDF';
  }

  if (extension === 'ppt' || extension === 'pptx') {
    return 'P';
  }

  if (extension === 'xls' || extension === 'xlsx') {
    return 'X';
  }

  return 'W';
}

function formatFileSize(size: number) {
  if (size < 1024 * 1024) {
    return `${Math.max(1, Math.round(size / 1024))} KB`;
  }

  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}
