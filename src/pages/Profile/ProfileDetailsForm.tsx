import { CalendarDays, Link, MapPin, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ReactNode } from "react";
import type { ProfileUser } from "./profileData";

const tabs = ["Profile Information", "Account Settings", "Security", "Preferences"];

type ProfileDetailsFormProps = {
  isDarkMode: boolean;
  user: ProfileUser;
  onChange: (user: ProfileUser) => void;
  onSave: (user: ProfileUser) => void;
};

export function ProfileDetailsForm({ isDarkMode, user, onChange, onSave }: ProfileDetailsFormProps) {
  const [isSaving, setIsSaving] = useState(false);

  const updateDraft = (field: keyof ProfileUser, value: string) => {
    onChange({
      ...user,
      [field]: value,
    });
  };

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);

    window.setTimeout(() => {
      onSave(user);
      setIsSaving(false);
    }, 500);
  };

  return (
    <>
      <section className={`rounded-xl border shadow-sm ${
        isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
      }`}>
        <div className={`grid border-b text-sm font-semibold sm:grid-cols-4 ${
          isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
        }`}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`h-14 border-b-2 px-4 text-left sm:text-center ${
                index === 0 ? "border-blue-600 text-blue-700" : "border-transparent hover:text-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSave} className="grid gap-6 p-6 lg:grid-cols-2">
          <Field isDarkMode={isDarkMode} label="Full Name" value={user.name} onChange={(value) => updateDraft("name", value)} />
          <Field isDarkMode={isDarkMode} label="Username" value={user.username} onChange={(value) => updateDraft("username", value)} />
          <Field isDarkMode={isDarkMode} label="Email Address" value={user.email} onChange={(value) => updateDraft("email", value)} />
          <Field isDarkMode={isDarkMode} label="Title" value={user.title} onChange={(value) => updateDraft("title", value)} />

          <label className="lg:col-span-1">
            <span className={`text-sm font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>Bio</span>
            <textarea
              value={user.bio}
              onChange={(event) => updateDraft("bio", event.target.value)}
              maxLength={200}
              className={`mt-2 min-h-20 w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-300 ${
                isDarkMode ? "border-slate-700 bg-slate-950 text-slate-100" : "border-slate-200 bg-white text-slate-700"
              }`}
            />
            <span className="mt-1 block text-right text-xs text-slate-400">{user.bio.length} / 200</span>
          </label>

          <Field isDarkMode={isDarkMode} label="Phone Number" value={user.phone} onChange={(value) => updateDraft("phone", value)} />
          <Field isDarkMode={isDarkMode} label="Location" value={user.location} onChange={(value) => updateDraft("location", value)} icon={<MapPin className="h-4 w-4 text-slate-400" />} />
          <Field isDarkMode={isDarkMode} label="Website" value={user.website} onChange={(value) => updateDraft("website", value)} icon={<Link className="h-4 w-4 text-slate-400" />} trailing={<CalendarDays className="h-4 w-4 text-slate-400" />} />

          <div className="lg:col-span-2">
            <button
              type="submit"
              disabled={isSaving}
              className="h-11 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.25)] hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </section>

      <div className={`flex items-center gap-3 rounded-lg border px-5 py-4 text-sm ${
        isDarkMode ? "border-blue-900/60 bg-blue-950/40 text-slate-300" : "border-blue-100 bg-blue-50 text-slate-600"
      }`}>
        <ShieldCheck className="h-5 w-5 text-blue-600" />
        Keep your profile updated to build trust in the community and unlock more opportunities!
      </div>
    </>
  );
}

function Field({
  label,
  value,
  isDarkMode,
  onChange,
  icon,
  trailing,
}: {
  label: string;
  value: string;
  isDarkMode: boolean;
  onChange: (value: string) => void;
  icon?: ReactNode;
  trailing?: ReactNode;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label>
      <span className={`text-sm font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>{label}</span>
      <span className={`mt-2 flex h-11 items-center gap-2 rounded-lg border px-4 text-sm focus-within:border-blue-300 ${
        isDarkMode ? "border-slate-700 bg-slate-950 text-slate-100" : "border-slate-200 bg-white text-slate-700"
      }`}>
        {icon}
        <input value={value} onChange={handleChange} className="h-full min-w-0 flex-1 bg-transparent outline-none" />
        {trailing}
      </span>
    </label>
  );
}
