import {
  FileArchive,
  FileSpreadsheet,
  FileText,
  FileType,
} from 'lucide-react';

import type { DocumentFileType, DocumentStatus } from '@/models/document';

export const semesterOptions = Array.from({ length: 9 }, (_, index) => String(index + 1));

export const statusOptions: DocumentStatus[] = ['Public', 'Private', 'Pending'];

export const fileIcons = {
  PDF: FileType,
  W: FileText,
  P: FileArchive,
  X: FileSpreadsheet,
} satisfies Record<DocumentFileType, typeof FileText>;
