import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[rgba(255,255,255,0.05)] bg-[var(--neu-surface)]">
      <div className="px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[14px] font-semibold text-[var(--foreground)]">MUN Portfolio</p>
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[rgba(232,236,244,0.5)]">
              Built as a learning resource: navigate in order or jump to what you
              need. Replace sample details with your own evidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[13px]">
            <Link
              href="/#start-here"
              className="neu-chip rounded-xl px-3 py-2 text-[rgba(232,236,244,0.85)]"
            >
              Start here
            </Link>
            <Link
              href="/#certificates"
              className="neu-chip rounded-xl px-3 py-2 text-[rgba(232,236,244,0.85)]"
            >
              Certificates
            </Link>
            <Link
              href="/mun-os"
              className="neu-accent-chip rounded-xl px-3 py-2 font-medium"
            >
              MUN-OS tools
            </Link>
          </div>
        </div>
        <p className="mt-8 text-[12px] text-[rgba(232,236,244,0.38)]">
          © {new Date().getFullYear()} · Portfolio for learning · Not affiliated
          with any single conference secretariat.
        </p>
      </div>
    </footer>
  );
}
