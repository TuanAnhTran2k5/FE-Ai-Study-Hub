import { useEffect, useMemo, useState } from 'react';

import type { Subject } from '@/data/subjects';
import { getMockDocuments } from '@/services/documentService';
import { getSubjects } from '@/services/subjectService';

export function useDocumentFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all-semesters');
  const [selectedSubject, setSelectedSubject] = useState('all-subjects');
  const [selectedStatus, setSelectedStatus] = useState('all-status');
  const [documents, setDocuments] = useState(() => getMockDocuments());
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoadingSubjects, setIsLoadingSubjects] = useState(true);

  useEffect(() => {
    async function loadSubjects() {
      const subjectData = await getSubjects();

      setSubjects(subjectData);
      setIsLoadingSubjects(false);
    }

    void loadSubjects();
  }, []);

  useEffect(() => {
    function refreshDocuments() {
      setDocuments(getMockDocuments());
    }

    window.addEventListener('focus', refreshDocuments);

    return () => {
      window.removeEventListener('focus', refreshDocuments);
    };
  }, []);

  const subjectOptions = useMemo(() => {
    if (selectedSemester === 'all-semesters') {
      return subjects;
    }

    return subjects.filter((subject) => subject.semester === selectedSemester);
  }, [selectedSemester, subjects]);

  const subjectByCode = useMemo(() => {
    return new Map(subjects.map((subject) => [subject.code, subject]));
  }, [subjects]);

  const filteredDocuments = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return documents.filter((document) => {
      const subject = subjectByCode.get(document.subject);
      const searchableText = [document.title, document.subject, subject?.name ?? '']
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        normalizedSearchTerm.length === 0 || searchableText.includes(normalizedSearchTerm);
      const matchesSemester =
        selectedSemester === 'all-semesters' || document.semester === selectedSemester;
      const matchesSubject =
        selectedSubject === 'all-subjects' || document.subject === selectedSubject;
      const matchesStatus =
        selectedStatus === 'all-status' || document.status === selectedStatus;

      return matchesSearch && matchesSemester && matchesSubject && matchesStatus;
    });
  }, [documents, searchTerm, selectedSemester, selectedSubject, selectedStatus, subjectByCode]);

  function handleSemesterChange(semester: string) {
    setSelectedSemester(semester);
    setSelectedSubject('all-subjects');
  }

  return {
    documents,
    filteredDocuments,
    isLoadingSubjects,
    searchTerm,
    selectedSemester,
    selectedStatus,
    selectedSubject,
    setSearchTerm,
    setSelectedStatus,
    setSelectedSubject,
    subjectOptions,
    handleSemesterChange,
  };
}
