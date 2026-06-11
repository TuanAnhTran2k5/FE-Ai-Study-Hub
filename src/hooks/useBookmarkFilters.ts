import { useMemo, useState } from 'react';

import { bookmarks } from '@/data/bookmarks';
import { includesSearchTerm, matchesSelectFilter } from '@/lib/filterUtils';

export function useBookmarkFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all-types');
  const [selectedSubject, setSelectedSubject] = useState('all-subjects');
  const [selectedSemester, setSelectedSemester] = useState('all-semesters');

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter((bookmark) => {
      const matchesSearch = includesSearchTerm(
        [bookmark.title, bookmark.subject, bookmark.meta],
        searchTerm,
      );
      const matchesType = matchesSelectFilter(
        selectedType,
        'all-types',
        bookmark.type.toLowerCase(),
      );
      const matchesSubject = matchesSelectFilter(selectedSubject, 'all-subjects', bookmark.subject);
      const matchesSemester = matchesSelectFilter(
        selectedSemester,
        'all-semesters',
        bookmark.semester,
      );

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
