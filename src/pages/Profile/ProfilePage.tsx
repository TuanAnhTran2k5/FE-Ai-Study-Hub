import { useState } from "react";
import { ProfileDetailsForm } from "./ProfileDetailsForm";
import { ProfileHeaderCard } from "./ProfileHeaderCard";
import { ProfileRightPanel } from "./ProfileRightPanel";
import { ProfileSidebar } from "./ProfileSidebar";
import { ProfileStats } from "./ProfileStats";
import { ProfileTopbar } from "./ProfileTopbar";
import { profileUser } from "./profileData";
import type { ProfileUser } from "./profileData";

function ProfilePage() {
  const [user, setUser] = useState<ProfileUser>(profileUser);
  const [draftUser, setDraftUser] = useState<ProfileUser>(profileUser);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAvatarChange = (file: File) => {
    const nextAvatarUrl = URL.createObjectURL(file);
    setDraftUser((currentUser) => ({
      ...currentUser,
      avatarUrl: nextAvatarUrl,
    }));
  };

  const handleProfileSave = (updatedUser: ProfileUser) => {
    setUser(updatedUser);
    setDraftUser(updatedUser);
  };

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950"}`}>
      <div className="flex min-h-screen">
        <ProfileSidebar
          activeItem="Profile"
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode((current) => !current)}
        />

        <div className="min-w-0 flex-1">
          <ProfileTopbar isDarkMode={isDarkMode} user={user} />

          <main className="grid gap-8 px-5 py-8 md:px-8 xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0 space-y-6">
              <ProfileHeaderCard
                isDarkMode={isDarkMode}
                user={draftUser}
                onAvatarChange={handleAvatarChange}
              />
              <ProfileStats isDarkMode={isDarkMode} />
              <ProfileDetailsForm
                isDarkMode={isDarkMode}
                user={draftUser}
                onChange={setDraftUser}
                onSave={handleProfileSave}
              />
            </div>

            <ProfileRightPanel isDarkMode={isDarkMode} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
