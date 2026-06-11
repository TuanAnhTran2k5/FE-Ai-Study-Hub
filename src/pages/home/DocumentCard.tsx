import { Eye, FileText, Star } from "lucide-react";
import type { StudyDocument, TopRatedDocument } from "./types";

type DocumentCardProps = {
  document: StudyDocument | TopRatedDocument;
  onLoginClick: () => void;
};

function RatingStars() {
  return (
    <div className="flex items-center gap-0.5 text-blue-600">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  );
}

export function DocumentCard({ document, onLoginClick }: DocumentCardProps) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-blue-100 bg-white text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)]">
      <div className="h-44 bg-[linear-gradient(135deg,rgba(219,234,254,0.95),rgba(239,246,255,0.95))]" />

      <div className="space-y-4 p-5 text-slate-950">
        <div className="flex items-center justify-between gap-3">
          <RatingStars />

          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
            {document.subjectName}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-950">
            {document.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{document.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Uploaded by</p>
              <p className="font-medium text-slate-900">{document.uploader}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Semester</p>
            <p className="font-semibold text-slate-900">{document.semester}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onLoginClick}
          className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
        >
          <Eye className="h-4 w-4" />
          View Document
        </button>
      </div>
    </div>
  );
}
