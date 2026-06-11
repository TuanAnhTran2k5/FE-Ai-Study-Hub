import { ArrowRight, Search } from "lucide-react";
import type { FormEvent } from "react";
import { DocumentCard } from "./DocumentCard";
import { popularSubjects } from "./homeData";
import type { StudyDocument, StudySubject } from "./types";

type DocumentHubSectionProps = {
  availableSubjects: StudySubject[];
  filteredDocuments: StudyDocument[];
  searchQuery: string;
  searchValue: string;
  selectedSemester: string;
  selectedSubject: string;
  onLoginClick: () => void;
  onSearchSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSearchValueChange: (value: string) => void;
  onSearchQueryChange: (value: string) => void;
  onSelectedSemesterChange: (value: string) => void;
  onSelectedSubjectChange: (value: string) => void;
};

export function DocumentHubSection({
  availableSubjects,
  filteredDocuments,
  searchQuery,
  searchValue,
  selectedSemester,
  selectedSubject,
  onLoginClick,
  onSearchSubmit,
  onSearchValueChange,
  onSearchQueryChange,
  onSelectedSemesterChange,
  onSelectedSubjectChange,
}: DocumentHubSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Document Hub
        </h2>

        <div className="mx-auto mt-6 w-full max-w-5xl rounded-[1.75rem] border border-slate-100 bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-5">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-700">
            <Search className="h-4 w-4 text-blue-600" />
            Search Documents
          </div>

          <form onSubmit={onSearchSubmit} className="mt-4 grid gap-3 lg:grid-cols-[1.5fr_0.9fr_0.9fr_auto]">
            <label className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-blue-300 focus-within:shadow-md lg:col-span-1">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchValue}
                onChange={(event) => onSearchValueChange(event.target.value)}
                placeholder="Search documents, subjects, or uploader..."
                className="h-full w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>

            <select
              value={selectedSubject}
              onChange={(event) => onSelectedSubjectChange(event.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-300 focus:shadow-md"
            >
              <option value="all">All Subjects</option>
              {availableSubjects.map((subject) => (
                <option key={subject.code} value={subject.code}>
                  {subject.code}
                </option>
              ))}
            </select>

            <select
              value={selectedSemester}
              onChange={(event) => onSelectedSemesterChange(event.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-300 focus:shadow-md"
            >
              <option value="all">All Semesters</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <button
              type="submit"
              className="h-12 cursor-pointer rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] transition hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-medium text-slate-500">Popular:</span>
            {popularSubjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => {
                  onSearchValueChange(subject);
                  onSearchQueryChange(subject);
                }}
                className="cursor-pointer rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          {searchQuery.trim()
            ? `Showing ${filteredDocuments.length} result${filteredDocuments.length === 1 ? "" : "s"} for "${searchQuery.trim()}"`
            : `Showing ${filteredDocuments.length} subjects`}
        </p>
        <button
          type="button"
          onClick={onLoginClick}
          className="cursor-pointer text-sm font-medium text-blue-700 transition hover:text-blue-800"
        >
          View All Documents <ArrowRight className="inline-block h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {filteredDocuments.map((document) => (
          <DocumentCard key={document.title} document={document} onLoginClick={onLoginClick} />
        ))}

        {filteredDocuments.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500 lg:col-span-3">
            No documents match your search.
          </div>
        ) : null}
      </div>
    </section>
  );
}
