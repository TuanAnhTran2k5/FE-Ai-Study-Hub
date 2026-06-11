import { ArrowRight } from "lucide-react";
import { DocumentCard } from "./DocumentCard";
import { topRatedDocuments } from "./homeData";

type TopRatedDocumentsSectionProps = {
  onLoginClick: () => void;
};

export function TopRatedDocumentsSection({ onLoginClick }: TopRatedDocumentsSectionProps) {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Top Rated Documents</h2>
        <button
          type="button"
          onClick={onLoginClick}
          className="cursor-pointer text-sm font-medium text-blue-700 transition hover:text-blue-800"
        >
          View All <ArrowRight className="inline-block h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {topRatedDocuments.map((document) => (
          <DocumentCard key={document.title} document={document} onLoginClick={onLoginClick} />
        ))}
      </div>
    </section>
  );
}
