import { Code2, FileCode2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { topContributors, trendingSubjects } from '@/data/community';
import { subjects } from '@/data/subjects';
import type { CommunityRatingFilter } from '@/hooks/useCommunityFilters';
import { semesterOptions } from '@/models/documentConstants';

const documentTypes = ['Lecture Notes', 'Assignment', 'Project Guide', 'Summary', 'Template'];
const fileTypes = ['PDF', 'DOC/DOCX', 'PPT/PPTX', 'XLS/XLSX', 'TXT'];

type CommunitySidebarProps = {
  selectedDocumentType: string;
  selectedFileType: string;
  selectedRating: CommunityRatingFilter;
  selectedSemester: string;
  selectedSubject: string;
  onDocumentTypeChange: (value: string) => void;
  onFileTypeChange: (value: string) => void;
  onRatingChange: (value: CommunityRatingFilter) => void;
  onReset: () => void;
  onSemesterChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
};

export function CommunitySidebar({
  selectedDocumentType,
  selectedFileType,
  selectedRating,
  selectedSemester,
  selectedSubject,
  onDocumentTypeChange,
  onFileTypeChange,
  onRatingChange,
  onReset,
  onSemesterChange,
  onSubjectChange,
}: CommunitySidebarProps) {
  return (
    <aside className="community-side">
      <section className="community-card filter-card">
        <div className="community-card-heading">
          <h2>Filter</h2>
          <button type="button" onClick={onReset}>
            Reset
          </button>
        </div>
        <label>
          Subjects
          <Select value={selectedSubject} onChange={(event) => onSubjectChange(event.target.value)}>
            <option value="all-subjects">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject.code} value={subject.code}>
                {subject.code} - {subject.name}
              </option>
            ))}
          </Select>
        </label>
        <label>
          Semesters
          <Select value={selectedSemester} onChange={(event) => onSemesterChange(event.target.value)}>
            <option value="all-semesters">All Semesters</option>
            {semesterOptions.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </Select>
        </label>
        <label>
          Document Type
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
        </label>
        <label>
          File Type
          <Select value={selectedFileType} onChange={(event) => onFileTypeChange(event.target.value)}>
            <option value="all-file-types">All File Types</option>
            {fileTypes.map((type) => (
              <option key={type} value={type.toLowerCase().replace(/\//g, '-')}>
                {type}
              </option>
            ))}
          </Select>
        </label>
        <div className="rating-filters">
          <span>Rating</span>
          <div>
            <button
              className={selectedRating === '5' ? 'active' : ''}
              type="button"
              onClick={() => onRatingChange('5')}
            >
              ★ 5
            </button>
            <button
              className={selectedRating === '4' ? 'active' : ''}
              type="button"
              onClick={() => onRatingChange('4')}
            >
              ★ 4 & up
            </button>
            <button
              className={selectedRating === '3' ? 'active' : ''}
              type="button"
              onClick={() => onRatingChange('3')}
            >
              ★ 3 & up
            </button>
            <button
              className={selectedRating === 'all' ? 'active' : ''}
              type="button"
              onClick={() => onRatingChange('all')}
            >
              All
            </button>
          </div>
        </div>
        <Button type="button">Apply Filters</Button>
      </section>

      <section className="community-card">
        <div className="community-card-heading">
          <h2>Trending Subjects</h2>
          <button type="button">View all</button>
        </div>
        <div className="trending-list">
          {trendingSubjects.map((subject) => (
            <div className="trending-item" key={subject.code}>
              <span>
                <Code2 size={15} />
              </span>
              <strong>
                {subject.code} - {subject.name}
              </strong>
              <small>{subject.count}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="community-card">
        <div className="community-card-heading">
          <h2>Top Contributors This Week</h2>
          <button type="button">View all</button>
        </div>
        <div className="contributors-list">
          {topContributors.map((contributor, index) => (
            <div className="contributor-item" key={contributor.name}>
              <span className="rank">{index + 1}</span>
              <span className="mini-avatar">
                <FileCode2 size={16} />
              </span>
              <div>
                <strong>{contributor.name}</strong>
                <small>{contributor.badge}</small>
              </div>
              <strong>{contributor.points}</strong>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
