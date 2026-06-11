import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { accountStatus, recentBadges, topContributors, weeklyRankingUsers } from "./profileData";

type ProfileRightPanelProps = {
  isDarkMode: boolean;
};

export function ProfileRightPanel({ isDarkMode }: ProfileRightPanelProps) {
  const [rankingView, setRankingView] = useState<"weekly" | "contributors">("weekly");
  const cardClassName = isDarkMode
    ? "rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm"
    : "rounded-xl border border-slate-200 bg-white p-5 shadow-sm";
  const titleClassName = isDarkMode ? "text-lg font-bold text-white" : "text-lg font-bold text-slate-950";
  const mutedTextClassName = isDarkMode ? "text-slate-400" : "text-slate-600";
  const strongTextClassName = isDarkMode ? "text-slate-100" : "text-slate-900";
  const panelButtonClassName = isDarkMode
    ? "mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 text-sm font-semibold text-blue-300 hover:bg-slate-800"
    : "mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-semibold text-blue-700 hover:bg-blue-50";

  return (
    <aside className="space-y-6">
      <section className={cardClassName}>
        <div className="flex items-center justify-between">
          <h2 className={titleClassName}>Account Status</h2>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">Active</span>
        </div>

        <div className="mt-5 space-y-4">
          {accountStatus.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 text-sm">
              <span className={mutedTextClassName}>{label}</span>
              <span className={`flex items-center gap-2 font-semibold ${strongTextClassName}`}>
                {value === "Verified" ? <CheckCircle2 className="h-4 w-4 fill-emerald-500 text-white" /> : value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={cardClassName}>
        <div className={`grid grid-cols-2 rounded-lg p-1 ${
          isDarkMode ? "bg-slate-950" : "bg-slate-100"
        }`}>
          <button
            type="button"
            onClick={() => setRankingView("weekly")}
            className={`h-10 rounded-md text-sm font-semibold transition ${
              rankingView === "weekly"
                ? "bg-blue-600 text-white shadow-sm"
                : isDarkMode
                  ? "text-slate-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-white"
            }`}
          >
            Weekly Ranking
          </button>
          <button
            type="button"
            onClick={() => setRankingView("contributors")}
            className={`h-10 rounded-md text-sm font-semibold transition ${
              rankingView === "contributors"
                ? "bg-blue-600 text-white shadow-sm"
                : isDarkMode
                  ? "text-slate-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-white"
            }`}
          >
            Top Contributors
          </button>
        </div>

        {rankingView === "weekly" ? (
          <>
            <div className="mt-5 space-y-3">
              {weeklyRankingUsers.map((user) => (
                <div
                  key={user.name}
                  className={`rounded-xl border p-3 ${
                    isDarkMode ? "border-slate-800 bg-slate-950" : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                        user.rank <= 3 ? "bg-blue-600 text-white" : isDarkMode ? "bg-slate-800 text-slate-300" : "bg-white text-slate-700"
                      }`}>
                        #{user.rank}
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${strongTextClassName}`}>{user.name}</p>
                        <p className={isDarkMode ? "text-xs text-slate-400" : "text-xs text-slate-500"}>{user.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${strongTextClassName}`}>{user.score}</p>
                      <p className={isDarkMode ? "text-xs text-slate-400" : "text-xs text-slate-500"}>Weekly score</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                    <span className={mutedTextClassName}>Downloads {user.downloads}</span>
                    <span className={mutedTextClassName}>Bookmarks {user.bookmarks}</span>
                    <span className={mutedTextClassName}>Rating +{user.ratingBonus}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className={panelButtonClassName}>
              View Ranking History
              <ArrowRight className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            <div className="mt-5 space-y-3">
              {topContributors.map((contributor) => (
                <div
                  key={contributor.name}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                    isDarkMode ? "border-slate-800 bg-slate-950" : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {contributor.rank}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${strongTextClassName}`}>{contributor.name}</p>
                      <p className={isDarkMode ? "text-xs text-slate-400" : "text-xs text-slate-500"}>{contributor.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${strongTextClassName}`}>{contributor.score}</p>
                    <p className={isDarkMode ? "text-xs text-slate-400" : "text-xs text-slate-500"}>{contributor.reward}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className={panelButtonClassName}>
              View All Contributors
              <ArrowRight className="h-4 w-4" />
            </button>
          </>
        )}
      </section>

      <section className={cardClassName}>
        <h2 className={titleClassName}>Recent Badges</h2>
        <div className="mt-5 space-y-4">
          {recentBadges.map((badge) => {
            const Icon = badge.icon;

            return (
              <div key={badge.title} className="flex gap-3">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${badge.bg} ${badge.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm font-bold ${strongTextClassName}`}>{badge.title}</p>
                  <p className={isDarkMode ? "mt-1 text-xs text-slate-400" : "mt-1 text-xs text-slate-500"}>{badge.description}</p>
                  <p className={isDarkMode ? "mt-1 text-xs text-slate-400" : "mt-1 text-xs text-slate-500"}>{badge.earned}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className={panelButtonClassName}>
          View All Badges
          <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </aside>
  );
}
