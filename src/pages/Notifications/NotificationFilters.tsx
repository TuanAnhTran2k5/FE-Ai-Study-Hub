import { Filter } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { NotificationFiltersValue } from "./notificationsData";

type NotificationFiltersProps = {
  filters: NotificationFiltersValue;
  isDarkMode: boolean;
  onApplyFilters: (filters: NotificationFiltersValue) => void;
  onResetFilters: () => void;
};

const filterGroups: Array<{
  field: keyof NotificationFiltersValue;
  label: string;
  options: string[];
}> = [
  { field: "type", label: "Type", options: ["All Types", "Unread", "Mentions", "System", "Updates"] },
  { field: "category", label: "Category", options: ["All Categories", "Document", "Comment", "Achievement", "Mention", "System", "Update"] },
  { field: "date", label: "Date", options: ["All Time", "Today", "Yesterday", "This Week", "Earlier"] },
];

export function NotificationFilters({
  filters,
  isDarkMode,
  onApplyFilters,
  onResetFilters,
}: NotificationFiltersProps) {
  const [draftFilters, setDraftFilters] = useState<NotificationFiltersValue>(filters);

  const updateDraftFilter = (field: keyof NotificationFiltersValue, value: string) => {
    setDraftFilters((currentFilters) => ({
      ...currentFilters,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApplyFilters(draftFilters);
  };

  const handleReset = () => {
    const nextFilters = {
      type: "All Types",
      category: "All Categories",
      date: "All Time",
    };

    setDraftFilters(nextFilters);
    onResetFilters();
  };

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl border p-5 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Notification Filters</h2>
        <button type="button" onClick={handleReset} className="text-sm font-semibold text-blue-700">
          Reset
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {filterGroups.map((group) => (
          <label key={group.label} className="block">
            <span className="text-sm font-semibold">{group.label}</span>
            <select
              value={draftFilters[group.field]}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => updateDraftFilter(group.field, event.target.value)}
              className={`mt-2 h-11 w-full rounded-lg border px-3 text-sm outline-none ${
                isDarkMode ? "border-slate-700 bg-slate-950 text-slate-100" : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {group.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700">
        <Filter className="h-4 w-4" />
        Apply Filters
      </button>
    </form>
  );
}
