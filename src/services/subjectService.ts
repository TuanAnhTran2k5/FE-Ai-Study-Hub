import { subjects } from '@/data/subjects';
import type { Subject } from '@/data/subjects';

const MOCK_DELAY_MS = 250;

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export async function getSubjects(): Promise<Subject[]> {
  await wait(MOCK_DELAY_MS);
  return subjects;
}

export async function getSubjectsBySemester(semester: string): Promise<Subject[]> {
  await wait(MOCK_DELAY_MS);

  if (semester === 'all-semesters') {
    return subjects;
  }

  return subjects.filter((subject) => subject.semester === semester);
}
