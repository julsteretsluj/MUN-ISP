import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/[0.08] bg-[rgba(16,18,22,0.6)]">
      <div className="px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[14px] font-semibold text-white">MUN Portfolio</p>
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-white/50">
              Built as a learning resource: navigate in order or jump to what you
              need. Replace sample details with your own evidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[13px]">
            <Link
              href="/#start-here"
              className="rounded-lg bg-white/[0.06] px-3 py-2 text-white/80 ring-1 ring-white/10 hover:bg-white/[0.09]"
            >
              Start here
            </Link>
            <Link
              href="/#certificates"
              className="rounded-lg bg-white/[0.06] px-3 py-2 text-white/80 ring-1 ring-white/10 hover:bg-white/[0.09]"
            >
              Certificates
            </Link>
            <Link
              href="/mun-os"
              className="rounded-lg bg-[#007AFF]/20 px-3 py-2 text-sky-200 ring-1 ring-[#007AFF]/30 hover:bg-[#007AFF]/30"
            >
              MUN-OS tools
            </Link>
          </div>
        </div>
        <p className="mt-8 text-[12px] text-white/35">
          © {new Date().getFullYear()} · Portfolio for learning · Not affiliated
          with any single conference secretariat.
        </p>
      </div>
    </footer>
  );
}
