import { useState } from "react";
import { ProfileSidebar } from "@/pages/Profile/ProfileSidebar";
import { ProfileTopbar } from "@/pages/Profile/ProfileTopbar";
import { LeaderboardHeader } from "./LeaderboardHeader";
import { LeaderboardRewards } from "./LeaderboardRewards";
import { LeaderboardRules } from "./LeaderboardRules";
import { LeaderboardTable } from "./LeaderboardTable";
import { topContributorLeaderboard, weeklyLeaderboard } from "./leaderboardData";
import { profileUser } from "@/pages/Profile/profileData";

type LeaderboardView = "weekly" | "contributors";

function LeaderboardPage() {
  const [activeView, setActiveView] = useState<LeaderboardView>("weekly");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const leaderboard = activeView === "weekly" ? weeklyLeaderboard : topContributorLeaderboard;

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950"}`}>
      <div className="flex min-h-screen">
        <ProfileSidebar
          activeItem="Leaderboard"
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode((current) => !current)}
        />

        <div className="min-w-0 flex-1">
          <ProfileTopbar isDarkMode={isDarkMode} user={profileUser} />

          <main className="px-5 py-8 md:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
              <LeaderboardHeader
                activeView={activeView}
                isDarkMode={isDarkMode}
                onViewChange={setActiveView}
              />

              <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
                <LeaderboardTable isDarkMode={isDarkMode} items={leaderboard} />

                <aside className="space-y-6">
                  <LeaderboardRewards isDarkMode={isDarkMode} />
                  <LeaderboardRules isDarkMode={isDarkMode} />
                </aside>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;
