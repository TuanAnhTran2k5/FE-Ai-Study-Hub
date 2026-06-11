import { ArrowRight, Star } from "lucide-react";
import { topContributors, weeklyLeaderboard } from "./homeData";

type RankingSectionProps = {
  onLoginClick: () => void;
};

export function RankingSection({ onLoginClick }: RankingSectionProps) {
  return (
    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white px-4 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">Ranking</h2>
          <p className="mt-1 text-sm text-slate-500">Top contributors and weekly leaderboard</p>
        </div>
        <button
          type="button"
          onClick={onLoginClick}
          className="cursor-pointer text-sm font-medium text-blue-700 transition hover:text-blue-800"
        >
          View all <ArrowRight className="inline-block h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.5rem] border border-blue-100 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-slate-950">Top Contributors</h3>
            <span className="text-xs font-medium text-blue-700">View leaderboard -&gt;</span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {topContributors.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={onLoginClick}
                className="cursor-pointer rounded-2xl border border-white bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>
                <p className="mt-4 text-xl font-semibold text-slate-950">{item.score}</p>
                <p className="text-xs text-slate-500">Reputation</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-blue-100 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-slate-950">Weekly Leaderboard</h3>
            <span className="text-xs font-medium text-blue-700">View all -&gt;</span>
          </div>

          <div className="mt-4 space-y-3">
            {weeklyLeaderboard.map(([rank, name, score]) => (
              <button
                key={name}
                type="button"
                onClick={onLoginClick}
                className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-white bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                    {rank}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{name}</p>
                    <p className="text-xs text-slate-500">Weekly contributor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  {score}
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
