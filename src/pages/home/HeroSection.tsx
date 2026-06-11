import { ArrowRight } from "lucide-react";

type HomeSectionProps = {
  onLoginClick: () => void;
};

const heroStats = [
  { value: "12K+", label: "Documents" },
  { value: "5K+", label: "Users" },
  { value: "25K+", label: "AI Chats" },
];

export function HeroSection({ onLoginClick }: HomeSectionProps) {
  return (
    <section className="relative overflow-hidden pt-2 sm:pt-3">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_28%),linear-gradient(135deg,rgba(239,246,255,0.96),rgba(255,255,255,1))]" />
      <div className="grid items-start gap-8 rounded-[2.5rem] px-6 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-10">
        <div className="max-w-xl space-y-6 lg:pt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
            AI Study Hub
          </div>

          <div className="space-y-4">
            <h1 className="max-w-lg text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[3.7rem]">
              Learn Smarter with <span className="text-blue-700">AI Study Hub</span>
            </h1>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Upload, discover and learn from thousands of study materials. Get AI-powered help anytime,
              anywhere.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Explore Documents
            </button>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-3 pt-1">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-sky-100 bg-white p-3 text-left shadow-sm">
                <p className="text-lg font-bold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-sky-100 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:-mt-2">
          <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-blue-100/70 blur-2xl" />
          <div className="absolute right-10 top-10 h-16 w-16 rounded-full bg-sky-100/80 blur-2xl" />

          <div className="relative flex items-center justify-center rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(239,246,255,0.95),rgba(255,255,255,1))] p-3">
            <img
              src="https://multipurposethemes.com/wp-content/uploads/2023/01/full-4-1024x597.png"
              alt="AI chatbot dashboard preview"
              className="h-auto w-full rounded-[1.3rem] object-cover shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
