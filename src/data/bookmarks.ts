import type { DocumentFileType } from '@/models/document';

export type BookmarkType = 'Document' | 'Article' | 'Video' | 'Link';

export type BookmarkItem = {
  fileType: DocumentFileType;
  title: string;
  meta: string;
  type: BookmarkType;
  subject: string;
  semester: string;
  bookmarkedDate: string;
  bookmarkedTime: string;
};

export const bookmarks: BookmarkItem[] = [
  {
    fileType: 'PDF',
    title: 'OOP in Java - Complete Guide.pdf',
    meta: '2.4 MB · Page 1-45',
    type: 'Document',
    subject: 'SWT301',
    semester: '2',
    bookmarkedDate: 'May 12, 2024',
    bookmarkedTime: '10:30 AM',
  },
  {
    fileType: 'W',
    title: 'Database Normalization Notes.docx',
    meta: '1.8 MB · Page 1-23',
    type: 'Document',
    subject: 'SWR302',
    semester: '5',
    bookmarkedDate: 'May 11, 2024',
    bookmarkedTime: '09:15 AM',
  },
  {
    fileType: 'P',
    title: 'Software Testing Basics.pptx',
    meta: '3.2 MB · Page 1-18',
    type: 'Document',
    subject: 'SWT301',
    semester: '5',
    bookmarkedDate: 'May 10, 2024',
    bookmarkedTime: '04:45 PM',
  },
  {
    fileType: 'X',
    title: 'What is Polymorphism in Java?',
    meta: 'Article',
    type: 'Article',
    subject: 'SWT301',
    semester: '5',
    bookmarkedDate: 'May 9, 2024',
    bookmarkedTime: '02:20 PM',
  },
  {
    fileType: 'P',
    title: 'OOP Concepts Explained',
    meta: 'Video · 15:32',
    type: 'Video',
    subject: 'SWT301',
    semester: '5',
    bookmarkedDate: 'May 8, 2024',
    bookmarkedTime: '11:05 AM',
  },
  {
    fileType: 'X',
    title: 'Java Official Documentation - OOP',
    meta: 'External Link',
    type: 'Link',
    subject: 'SWT301',
    semester: '-',
    bookmarkedDate: 'May 7, 2024',
    bookmarkedTime: '08:50 AM',
  },
  {
    fileType: 'X',
    title: 'Difference between Abstract Class and Interface',
    meta: 'Article',
    type: 'Article',
    subject: 'SWT301',
    semester: '5',
    bookmarkedDate: 'May 6, 2024',
    bookmarkedTime: '03:30 PM',
  },
  {
    fileType: 'W',
    title: 'Project Management Steps.docx',
    meta: '1.6 MB · Page 1-12',
    type: 'Document',
    subject: 'PRJ301',
    semester: '4',
    bookmarkedDate: 'May 5, 2024',
    bookmarkedTime: '10:10 AM',
  },
];

export const bookmarkCategories = [
  { label: 'All Bookmarks', count: 28 },
  { label: 'Documents', count: 16 },
  { label: 'Articles', count: 6 },
  { label: 'Videos', count: 3 },
  { label: 'Links', count: 3 },
];

export const bookmarkTopSubjects = [
  { label: 'SWT301 - Software Testing', count: 12 },
  { label: 'SWR302 - Database Systems', count: 5 },
  { label: 'PRJ301 - Project Management', count: 4 },
  { label: 'SWT302 - Web Development', count: 3 },
  { label: 'Others', count: 4 },
];
