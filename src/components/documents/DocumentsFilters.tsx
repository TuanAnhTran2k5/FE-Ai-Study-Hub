import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import type { Subject } from '@/data/subjects';
import { semesterOptions, statusOptions } from '@/models/documentConstants';

type DocumentsFiltersProps = {
  isLoadingSubjects: boolean;
  searchTerm: string;
  selectedSemester: string;
  selectedStatus: string;
  selectedSubject: string;
  subjectOptions: Subject[];
  onSearchTermChange: (value: string) => void;
  onSemesterChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
};

export function DocumentsFilters({
  isLoadingSubjects,
  searchTerm,
  selectedSemester,
  selectedStatus,
  selectedSubject,
  subjectOptions,
  onSearchTermChange,
  onSemesterChange,
  onStatusChange,
  onSubjectChange,
}: DocumentsFiltersProps) {
  return (
    <div className="filters">
      <label className="search-field">
        <Search size={19} />
        <Input
          className="search-input"
          placeholder="Search by document or subject..."
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </label>
      <Select
        value={selectedSubject}
        onChange={(event) => onSubjectChange(event.target.value)}
        disabled={isLoadingSubjects}
      >
        <option value="all-subjects">All Subjects</option>
        {subjectOptions.map((subject) => (
          <option key={subject.code} value={subject.code}>
            {subject.code} - {subject.name}
          </option>
        ))}
      </Select>
      <Select
        value={selectedSemester}
        onChange={(event) => onSemesterChange(event.target.value)}
        disabled={isLoadingSubjects}
      >
        <option value="all-semesters">All Semesters</option>
        {semesterOptions.map((semester) => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </Select>
      <Select value={selectedStatus} onChange={(event) => onStatusChange(event.target.value)}>
        <option value="all-status">All Status</option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Select>
      <Select defaultValue="newest">
        <option value="newest">Sort by: Newest</option>
      </Select>
    </div>
  );
}
