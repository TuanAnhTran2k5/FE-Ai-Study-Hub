import type { studyDocuments, studySubjects, topRatedDocuments } from "./homeData";

export type StudyDocument = (typeof studyDocuments)[number];
export type StudySubject = (typeof studySubjects)[number];
export type TopRatedDocument = (typeof topRatedDocuments)[number];
