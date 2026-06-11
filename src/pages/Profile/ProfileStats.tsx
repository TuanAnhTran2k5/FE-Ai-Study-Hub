import { profileStats } from "./profileData";

type ProfileStatsProps = {
  isDarkMode: boolean;
};

export function ProfileStats({ isDarkMode }: ProfileStatsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {profileStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`rounded-xl border p-5 shadow-sm ${
              isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-11 w-11 items-center justify-center rounded-full ${stat.bg} ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-950"}`}>{stat.value}</p>
                <p className={isDarkMode ? "text-sm text-slate-400" : "text-sm text-slate-500"}>{stat.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
