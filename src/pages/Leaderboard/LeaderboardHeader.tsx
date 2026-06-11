import { Trophy } from "lucide-react";

type LeaderboardView = "weekly" | "contributors";

type LeaderboardHeaderProps = {
  activeView: LeaderboardView;
  isDarkMode: boolean;
  onViewChange: (view: LeaderboardView) => void;
};

export function LeaderboardHeader({ activeView, isDarkMode, onViewChange }: LeaderboardHeaderProps) {
  return (
    <section className={`rounded-2xl border p-6 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
            <p className={isDarkMode ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>
              Rank users by reputation score from downloads, bookmarks, quality ratings, and reports.
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-2 rounded-xl p-1 ${
          isDarkMode ? "bg-slate-950" : "bg-slate-100"
        }`}>
          <TabButton active={activeView === "weekly"} isDarkMode={isDarkMode} onClick={() => onViewChange("weekly")}>
            Weekly
          </TabButton>
          <TabButton active={activeView === "contributors"} isDarkMode={isDarkMode} onClick={() => onViewChange("contributors")}>
            Top Contributor
          </TabButton>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  children,
  isDarkMode,
  onClick,
}: {
  active: boolean;
  children: string;
  isDarkMode: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 rounded-lg px-5 text-sm font-semibold transition ${
        active
          ? "bg-blue-600 text-white shadow-sm"
          : isDarkMode
            ? "text-slate-300 hover:bg-slate-800"
            : "text-slate-600 hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}
