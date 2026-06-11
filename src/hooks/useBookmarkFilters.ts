import { useMemo, useState } from 'react';

import { bookmarks } from '@/data/bookmarks';

export function useBookmarkFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all-types');
  const [selectedSubject, setSelectedSubject] = useState('all-subjects');
  const [selectedSemester, setSelectedSemester] = useState('all-semesters');

  const filteredBookmarks = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return bookmarks.filter((bookmark) => {
      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        [bookmark.title, bookmark.subject, bookmark.meta]
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearchTerm);
      const matchesType =
        selectedType === 'all-types' || bookmark.type.toLowerCase() === selectedType;
      const matchesSubject =
        selectedSubject === 'all-subjects' || bookmark.subject === selectedSubject;
      const matchesSemester =
        selectedSemester === 'all-semesters' || bookmark.semester === selectedSemester;

      return matchesSearch && matchesType && matchesSubject && matchesSemester;
    });
  }, [searchTerm, selectedSemester, selectedSubject, selectedType]);

  return {
    filteredBookmarks,
    searchTerm,
    selectedSemester,
    selectedSubject,
    selectedType,
    setSearchTerm,
    setSelectedSemester,
    setSelectedSubject,
    setSelectedType,
  };
}
