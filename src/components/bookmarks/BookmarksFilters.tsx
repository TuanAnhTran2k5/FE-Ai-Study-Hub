import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { subjects } from '@/data/subjects';
import { semesterOptions } from '@/models/documentConstants';

const bookmarkTypes = ['Document', 'Article', 'Video', 'Link'];

type BookmarksFiltersProps = {
  searchTerm: string;
  selectedSemester: string;
  selectedSubject: string;
  selectedType: string;
  onSearchTermChange: (value: string) => void;
  onSemesterChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onTypeChange: (value: string) => void;
};

export function BookmarksFilters({
  searchTerm,
  selectedSemester,
  selectedSubject,
  selectedType,
  onSearchTermChange,
  onSemesterChange,
  onSubjectChange,
  onTypeChange,
}: BookmarksFiltersProps) {
  return (
    <div className="bookmarks-filters">
      <label className="search-field">
        <Input
          className="search-input"
          placeholder="Search bookmarks..."
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
        <Search size={19} />
      </label>
      <Select value={selectedType} onChange={(event) => onTypeChange(event.target.value)}>
        <option value="all-types">All Types</option>
        {bookmarkTypes.map((type) => (
          <option key={type} value={type.toLowerCase()}>
            {type}
          </option>
        ))}
      </Select>
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
      <Select defaultValue="newest">
        <option value="newest">Sort by: Newest</option>
      </Select>
    </div>
  );
}
