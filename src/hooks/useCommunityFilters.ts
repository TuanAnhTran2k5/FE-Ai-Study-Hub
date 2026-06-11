import { useMemo, useState } from 'react';

import { communityDocuments } from '@/data/community';

export type CommunityRatingFilter = 'all' | '5' | '4' | '3';

export function useCommunityFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all-subjects');
  const [selectedSemester, setSelectedSemester] = useState('all-semesters');
  const [selectedDocumentType, setSelectedDocumentType] = useState('all-types');
  const [selectedFileType, setSelectedFileType] = useState('all-file-types');
  const [selectedRating, setSelectedRating] = useState<CommunityRatingFilter>('all');

  const filteredDocuments = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return communityDocuments.filter((document) => {
      const searchableText = [document.title, document.subject, document.uploader]
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        normalizedSearchTerm.length === 0 || searchableText.includes(normalizedSearchTerm);
      const matchesSubject =
        selectedSubject === 'all-subjects' || document.subject === selectedSubject;
      const matchesSemester =
        selectedSemester === 'all-semesters' || document.semester === selectedSemester;
      const matchesDocumentType =
        selectedDocumentType === 'all-types' ||
        getDocumentType(document.title) === selectedDocumentType;
      const matchesFileType =
        selectedFileType === 'all-file-types' || getFileType(document.type) === selectedFileType;
      const matchesRating =
        selectedRating === 'all' || Number(document.rating) >= Number(selectedRating);

      return (
        matchesSearch &&
        matchesSubject &&
        matchesSemester &&
        matchesDocumentType &&
        matchesFileType &&
        matchesRating
      );
    });
  }, [
    searchTerm,
    selectedDocumentType,
    selectedFileType,
    selectedRating,
    selectedSemester,
    selectedSubject,
  ]);

  function resetFilters() {
    setSearchTerm('');
    setSelectedSubject('all-subjects');
    setSelectedSemester('all-semesters');
    setSelectedDocumentType('all-types');
    setSelectedFileType('all-file-types');
    setSelectedRating('all');
  }

  return {
    filteredDocuments,
    resetFilters,
    searchTerm,
    selectedDocumentType,
    selectedFileType,
    selectedRating,
    selectedSemester,
    selectedSubject,
    setSearchTerm,
    setSelectedDocumentType,
    setSelectedFileType,
    setSelectedRating,
    setSelectedSemester,
    setSelectedSubject,
  };
}

function getDocumentType(title: string) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('template')) {
    return 'template';
  }

  if (normalizedTitle.includes('guide')) {
    return 'project-guide';
  }

  if (normalizedTitle.includes('summary')) {
    return 'summary';
  }

  if (normalizedTitle.includes('requirement')) {
    return 'assignment';
  }

  return 'lecture-notes';
}

function getFileType(type: string) {
  if (type === 'PDF') {
    return 'pdf';
  }

  if (type === 'W') {
    return 'doc-docx';
  }

  if (type === 'P') {
    return 'ppt-pptx';
  }

  if (type === 'X') {
    return 'xls-xlsx';
  }

  return 'txt';
}
