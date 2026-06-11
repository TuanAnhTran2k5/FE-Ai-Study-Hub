import type { DocumentFileType } from '@/models/document';

export type CommunityDocument = {
  type: DocumentFileType;
  title: string;
  size: string;
  subject: string;
  semester: string;
  rating: string;
  ratingCount: string;
  views: string;
  downloads: string;
  uploader: string;
  badge: string;
  uploadedAt: string;
};

export const communityDocuments: CommunityDocument[] = [
  {
    type: 'PDF',
    title: 'SWP391 - Final Project Guide.pdf',
    size: '2.4 MB',
    subject: 'SWP391',
    semester: '5',
    rating: '4.8',
    ratingCount: '128',
    views: '1.2K',
    downloads: '456',
    uploader: 'Tran Quang Huy',
    badge: 'Elite Scholar',
    uploadedAt: 'Updated 2 days ago',
  },
  {
    type: 'W',
    title: 'Database Normalization Notes.docx',
    size: '1.8 MB',
    subject: 'SWR302',
    semester: '5',
    rating: '4.6',
    ratingCount: '96',
    views: '856',
    downloads: '312',
    uploader: 'Le Minh Anh',
    badge: 'Gold Mentor',
    uploadedAt: 'Updated 5 days ago',
  },
  {
    type: 'P',
    title: 'OOP in Java - Summary.pptx',
    size: '3.2 MB',
    subject: 'SWT301',
    semester: '2',
    rating: '4.7',
    ratingCount: '64',
    views: '623',
    downloads: '198',
    uploader: 'Pham Hoang Nam',
    badge: 'Gold Mentor',
    uploadedAt: 'Updated 1 week ago',
  },
  {
    type: 'PDF',
    title: 'Software Testing Basics.pdf',
    size: '2.1 MB',
    subject: 'SWT301',
    semester: '5',
    rating: '4.5',
    ratingCount: '32',
    views: '512',
    downloads: '150',
    uploader: 'Bui Thu Trang',
    badge: 'Silver Contributor',
    uploadedAt: 'Updated 1 week ago',
  },
  {
    type: 'W',
    title: 'PRJ301 - Requirement Document.docx',
    size: '1.6 MB',
    subject: 'PRJ301',
    semester: '4',
    rating: '4.9',
    ratingCount: '87',
    views: '1.1K',
    downloads: '276',
    uploader: 'Nguyen Van A',
    badge: 'Elite Scholar',
    uploadedAt: 'Updated 2 weeks ago',
  },
  {
    type: 'X',
    title: 'Project Plan Template.xlsx',
    size: '950 KB',
    subject: 'PRJ301',
    semester: '4',
    rating: '4.4',
    ratingCount: '23',
    views: '421',
    downloads: '98',
    uploader: 'Dang Quoc Bao',
    badge: 'Contributor',
    uploadedAt: 'Updated 2 weeks ago',
  },
  {
    type: 'PDF',
    title: 'UML Diagrams Guide.pdf',
    size: '2.7 MB',
    subject: 'SWP391',
    semester: '5',
    rating: '4.6',
    ratingCount: '156',
    views: '2.3K',
    downloads: '678',
    uploader: 'Vo Minh Khoa',
    badge: 'Elite Scholar',
    uploadedAt: 'Updated 3 weeks ago',
  },
  {
    type: 'P',
    title: 'System Design Presentation.pptx',
    size: '4.3 MB',
    subject: 'SWP391',
    semester: '5',
    rating: '4.3',
    ratingCount: '41',
    views: '389',
    downloads: '112',
    uploader: 'Phan Nhat Linh',
    badge: 'Contributor',
    uploadedAt: 'Updated 3 weeks ago',
  },
];

export const trendingSubjects = [
  { code: 'SWP391', name: 'Software Engineering', count: '1,234 docs' },
  { code: 'SWR302', name: 'Database Systems', count: '987 docs' },
  { code: 'SWT301', name: 'Software Testing', count: '876 docs' },
  { code: 'PRJ301', name: 'Project Management', count: '743 docs' },
  { code: 'OOP', name: 'Java Programming', count: '1,108 docs' },
];

export const topContributors = [
  { name: 'Tran Quang Huy', badge: 'Elite Scholar', points: '560 pts' },
  { name: 'Le Minh Anh', badge: 'Gold Mentor', points: '420 pts' },
  { name: 'Pham Hoang Nam', badge: 'Gold Mentor', points: '380 pts' },
];
