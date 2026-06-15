import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { subjects } from '@/data/subjects';
import { semesterOptions } from '@/models/documentConstants';

const documentTypes = ['Lecture Notes', 'Assignment', 'Project Guide', 'Summary', 'Template'];

type CommunityFiltersProps = {
  searchTerm: string;
  selectedDocumentType: string;
  selectedSemester: string;
  selectedSubject: string;
  onDocumentTypeChange: (value: string) => void;
  onSearchTermChange: (value: string) => void;
  onSemesterChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
};

export function CommunityFilters({
  searchTerm,
  selectedDocumentType,
  selectedSemester,
  selectedSubject,
  onDocumentTypeChange,
  onSearchTermChange,
  onSemesterChange,
  onSubjectChange,
}: CommunityFiltersProps) {
  return (
    <div className="community-filters">
      <label className="search-field">
        <Input
          className="search-input"
          placeholder="Search documents..."
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
        <Search size={19} />
      </label>
      <Select value={selectedSubject} onChange={(event) => onSubjectChange(event.target.value)}>
        <option value="all-subjects">All Subjects</option>
        {subjects.map((subject) => (
          <option key={subject.code} value={subject.code}>
            {subject.code} - {subject.name}
          </option>
        ))}
      </Select>
      <Select value={selectedSemester} onChange={(event) => onSemesterChange(event.target.value)}>
        <option value="all-semesters">All Semesters</option>
        {semesterOptions.map((semester) => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </Select>
      <Select
        value={selectedDocumentType}
        onChange={(event) => onDocumentTypeChange(event.target.value)}
      >
        <option value="all-types">All Types</option>
        {documentTypes.map((type) => (
          <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
            {type}
          </option>
        ))}
      </Select>
      <Select defaultValue="newest">
        <option value="newest">Sort by: Newest</option>
      </Select>
    </div>
  );
}
