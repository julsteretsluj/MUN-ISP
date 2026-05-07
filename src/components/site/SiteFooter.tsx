import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[var(--neu-surface)]">
      <div
        className="h-px w-full opacity-80"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.45), rgba(14,165,233,0.35), rgba(236,72,153,0.35), transparent)",
        }}
        aria-hidden
      />
      <div className="px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[14px] font-semibold text-[var(--foreground)]">MUN Portfolio</p>
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[rgba(100,116,139,0.5)]">
              Built as a learning resource: navigate in order or jump to what you
              need. Replace sample details with your own evidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[13px]">
            <Link
              href="/#start-here"
              className="neu-chip inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[rgba(30,41,59,0.85)]"
            >
              <span aria-hidden>✨</span>
              Start here
            </Link>
            <Link
              href="/#certificates"
              className="neu-chip inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[rgba(30,41,59,0.85)]"
            >
              <span aria-hidden>🎖️</span>
              Certificates
            </Link>
            <Link
              href="/resources"
              className="neu-accent-chip inline-flex items-center gap-1.5 rounded-xl px-3 py-2 font-medium"
            >
              <span aria-hidden>📚</span>
              All files
            </Link>
          </div>
        </div>
        <p className="mt-8 text-[12px] text-[rgba(100,116,139,0.38)]">
          © {new Date().getFullYear()} · Portfolio for learning · Not affiliated
          with any single conference secretariat.
        </p>
      </div>
    </footer>
  );
}
