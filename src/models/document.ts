import type { LucideIcon } from 'lucide-react';

export type DocumentStatus = 'Public' | 'Private' | 'Pending';

export type DocumentVisibility = 'Public' | 'Private';

export type DocumentFileType = 'PDF' | 'W' | 'P' | 'X';

export type StudyDocument = {
  type: DocumentFileType;
  title: string;
  size: string;
  subject: string;
  semester: string;
  status: DocumentStatus;
  visibility: DocumentVisibility;
  views: string;
  downloads: string;
  uploadedAt: string;
};

export type SidebarItem = {
  label: string;
  icon: LucideIcon;
};
