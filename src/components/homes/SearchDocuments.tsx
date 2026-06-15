import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchDocuments() {
  return (
    <section className="py-8">
      <div className="bg-card p-6 shadow-sm">
        {/* Title */}
        <div className="mb-5 flex items-center justify-center gap-2">
          <Search className="size-5 text-primary" />
          <h2 className="text-xl font-bold text-card-foreground">
            Search Documents
          </h2>
        </div>

        {/* Search Form */}
        <div className="grid gap-4 lg:grid-cols-[1fr_280px_280px_120px]">
          <Input
            placeholder="Search documents, subjects, or uploader..."
            className="h-14 rounded-2xl"
          />

          <select className="h-14 rounded-2xl border border-border bg-card px-4 text-card-foreground outline-none">
            <option>All Subjects</option>
            <option>SWP391</option>
            <option>SWR302</option>
            <option>DBI202</option>
            <option>OOP</option>
          </select>

          <select className="h-14 rounded-2xl border border-border bg-card px-4 text-card-foreground outline-none">
            <option>All Semesters</option>
            <option>Summer 2026</option>
            <option>Spring 2026</option>
            <option>Fall 2025</option>
          </select>

          <Button className="h-14 rounded-2xl bg-gradient-to-r from-primary-start to-primary-end font-bold text-primary-foreground">
            Search
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="font-semibold text-muted-foreground">Popular:</span>

          {["SWP391", "SWR302", "Database", "OOP Java", "AI", "Network"].map(
            (tag) => (
              <button
                key={tag}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition hover:bg-primary-bg-hover hover:text-primary"
              >
                {tag}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchDocuments;
