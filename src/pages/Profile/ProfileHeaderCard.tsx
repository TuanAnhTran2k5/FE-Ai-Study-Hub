import { BadgeCheck, CalendarDays, Camera, KeyRound, Mail, Star, User } from "lucide-react";
import type { ChangeEvent } from "react";
import type { ProfileUser } from "./profileData";

type ProfileHeaderCardProps = {
  isDarkMode: boolean;
  user: ProfileUser;
  onAvatarChange: (file: File) => void;
};

export function ProfileHeaderCard({ isDarkMode, user, onAvatarChange }: ProfileHeaderCardProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      onAvatarChange(file);
    }
  };

  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <User className="mt-1 h-8 w-8 text-slate-500" />
          <div>
            <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>My Profile</h1>
            <p className={isDarkMode ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>
              Manage your personal information and account settings.
            </p>
          </div>
        </div>
        <button className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-semibold shadow-sm ${
          isDarkMode
            ? "border-slate-700 bg-slate-900 text-blue-300 hover:bg-slate-800"
            : "border-slate-200 bg-white text-blue-700 hover:bg-blue-50"
        }`}>
          <KeyRound className="h-4 w-4" />
          Change Password
        </button>
      </div>

      <div className={`mt-6 rounded-xl border p-6 ${
        isDarkMode ? "border-slate-700 bg-slate-900" : "border-blue-100 bg-blue-50/70"
      }`}>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-32 w-32 shrink-0">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-sm"
              />
              <label className="absolute bottom-2 right-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm hover:bg-blue-50">
                <Camera className="h-4 w-4" />
                <input type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
              </label>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-950"}`}>{user.name}</h2>
                <BadgeCheck className="h-5 w-5 fill-blue-600 text-white" />
              </div>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-amber-600">
                <Star className="h-4 w-4" />
                {user.title}
              </p>
              <p className={`mt-4 flex items-center gap-2 text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                <Mail className="h-4 w-4" />
                {user.email}
              </p>
              <p className={`mt-3 flex items-center gap-2 text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                <CalendarDays className="h-4 w-4" />
                Joined {user.joinedDate}
              </p>
            </div>
          </div>

          <blockquote className={`max-w-sm text-right text-lg font-semibold leading-7 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
            "{user.quote}"
            <footer className={isDarkMode ? "mt-3 text-sm font-normal text-slate-400" : "mt-3 text-sm font-normal text-slate-500"}>
              - {user.quoteAuthor}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
