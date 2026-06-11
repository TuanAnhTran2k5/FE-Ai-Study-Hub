type HomeFooterSectionProps = {
  onLoginClick: () => void;
};

export function HomeFooterSection({ onLoginClick }: HomeFooterSectionProps) {
  return (
    <section className="mt-10 border-t border-slate-200 py-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/img/LOGO.png" alt="ASH logo" className="h-8 w-8 object-contain" />
          <p className="text-xs text-slate-500">© 2026 AI Study Hub (ASH). All rights reserved.</p>
        </div>

        <div className="flex items-center gap-5 text-xs text-slate-500">
          <button
            type="button"
            onClick={onLoginClick}
            className="cursor-pointer transition hover:text-slate-700"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={onLoginClick}
            className="cursor-pointer transition hover:text-slate-700"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </section>
  );
}
