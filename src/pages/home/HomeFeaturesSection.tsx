import { Cloud } from "lucide-react";
import { features } from "./homeData";

type FeaturesSectionProps = {
  onLoginClick: () => void;
};

export function FeaturesSection({ onLoginClick }: FeaturesSectionProps) {
  return (
    <>
      <section className="mt-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Powerful Features for Modern Students
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
          Everything you need to master your curriculum using state-of-the-art artificial intelligence.
        </p>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        {features.slice(0, 1).map((feature) => {
          const Icon = feature.icon;

          return (
            <button
              key={feature.title}
              type="button"
              onClick={onLoginClick}
              className={`rounded-2xl border border-sky-100 bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] ${feature.className}`}
            >
              <div className="flex h-full flex-col justify-between gap-5">
                <div className="space-y-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-slate-950">{feature.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
                  </div>
                </div>

                {feature.body ? (
                  <div className="rounded-2xl bg-slate-100/80 p-6">
                    <div className="space-y-4">
                      <div className="mx-auto h-4 w-3/4 rounded-full bg-slate-200/90" />
                      <div className="mx-auto h-4 w-2/3 rounded-full bg-slate-200/70" />
                      <div className="mx-auto h-4 w-1/2 rounded-full bg-slate-200/70" />
                    </div>
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}

        <button
          type="button"
          onClick={onLoginClick}
          className="min-h-[270px] rounded-2xl border border-sky-100 bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
        >
          <div className="flex h-full flex-col gap-4">
            <div className="space-y-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Cloud className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-slate-950">Cloud Storage</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Access your study materials from any device, anywhere, anytime with secure encrypted storage.
                </p>
              </div>
            </div>

            <div className="mt-auto rounded-2xl bg-[linear-gradient(180deg,rgba(239,246,255,0.95),rgba(248,251,255,1))] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Sync</p>
                  <p className="mt-1 text-xs text-slate-500">Safe cloud backup</p>
                </div>
                <div className="rounded-full bg-white p-3 text-blue-600 shadow-sm">
                  <Cloud className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded-full bg-blue-100" />
                <div className="h-2 w-4/5 rounded-full bg-sky-100" />
                <div className="h-2 w-2/3 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </button>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {features.slice(2).map((feature) => {
            const Icon = feature.icon;

            return (
              <button
                key={feature.title}
                type="button"
                onClick={onLoginClick}
                className="rounded-2xl border border-sky-100 bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-full flex-col justify-between gap-4">
                  <div className="space-y-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-slate-950">{feature.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
