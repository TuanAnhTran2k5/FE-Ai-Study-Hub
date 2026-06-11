import { steps } from "./homeData";

type StepsSectionProps = {
  onLoginClick: () => void;
};

export function StepsSection({ onLoginClick }: StepsSectionProps) {
  return (
    <section className="mt-12 bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Master Your Studies in 4 Steps
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <button
                key={step.title}
                type="button"
                onClick={onLoginClick}
                className="cursor-pointer rounded-2xl bg-transparent px-4 py-2 text-center transition hover:-translate-y-0.5"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-slate-900">{step.title}</p>
                  <p className="mx-auto max-w-[220px] text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
                <span className="sr-only">Step {index + 1} login</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
