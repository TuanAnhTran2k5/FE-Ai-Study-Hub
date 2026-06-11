import { Bookmark, Download, Star } from "lucide-react";
import type { LeaderboardItem } from "./leaderboardData";

type LeaderboardTableProps = {
  isDarkMode: boolean;
  items: LeaderboardItem[];
};

export function LeaderboardTable({ isDarkMode, items }: LeaderboardTableProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <div className={`grid grid-cols-[72px_minmax(0,1fr)_120px_120px_120px] gap-4 border-b px-5 py-4 text-xs font-bold uppercase tracking-wide ${
        isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
      }`}>
        <span>Rank</span>
        <span>User</span>
        <span>Downloads</span>
        <span>Bookmarks</span>
        <span>Score</span>
      </div>

      <div className={isDarkMode ? "divide-y divide-slate-800" : "divide-y divide-slate-100"}>
        {items.map((item) => (
          <div
            key={`${item.name}-${item.rank}`}
            className={`grid grid-cols-[72px_minmax(0,1fr)_120px_120px_120px] items-center gap-4 px-5 py-4 ${
              isDarkMode ? "hover:bg-slate-950" : "hover:bg-slate-50"
            }`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
              item.rank <= 3 ? "bg-blue-600 text-white" : isDarkMode ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-700"
            }`}>
              #{item.rank}
            </div>

            <div>
              <p className="font-bold">{item.name}</p>
              <div className={isDarkMode ? "mt-1 flex flex-wrap gap-2 text-xs text-slate-400" : "mt-1 flex flex-wrap gap-2 text-xs text-slate-500"}>
                <span>{item.title}</span>
                <span>|</span>
                <span>{item.badge}</span>
                <span>|</span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  {item.rating}
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <Download className="h-4 w-4 text-blue-600" />
              {item.downloads}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <Bookmark className="h-4 w-4 text-emerald-600" />
              {item.bookmarks}
            </span>
            <span className="text-lg font-bold text-blue-600">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
