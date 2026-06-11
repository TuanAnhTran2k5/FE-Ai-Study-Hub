import { reputationRules } from "./leaderboardData";

type LeaderboardRulesProps = {
  isDarkMode: boolean;
};

export function LeaderboardRules({ isDarkMode }: LeaderboardRulesProps) {
  return (
    <section className={`rounded-2xl border p-5 ${
      isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
    }`}>
      <h2 className="text-lg font-bold">Reputation Rules</h2>
      <div className="mt-4 space-y-3">
        {reputationRules.map((rule) => (
          <div key={rule.action} className="flex items-center justify-between gap-4 text-sm">
            <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{rule.action}</span>
            <span className={`font-bold ${rule.points.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>
              {rule.points}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
