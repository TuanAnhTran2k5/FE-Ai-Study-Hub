import { Award } from "lucide-react";
import { contributorRewards } from "./leaderboardData";

type LeaderboardRewardsProps = {
  isDarkMode: boolean;
};

export function LeaderboardRewards({ isDarkMode }: LeaderboardRewardsProps) {
  return (
    <section className={`rounded-2xl border p-5 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <Award className="h-5 w-5 text-amber-500" />
        Top Contributor Rewards
      </h2>
      <div className="mt-4 space-y-3 text-sm">
        {contributorRewards.map((item) => (
          <div key={item.rank} className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-amber-900">
            <p className="font-bold">{item.rank}</p>
            <p className="mt-1 text-xs">{item.reward}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
