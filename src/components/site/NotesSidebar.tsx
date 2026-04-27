"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_LINKS } from "./site-links";

export function NotesSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/[0.08] bg-[rgba(33,35,41,0.92)] p-3 lg:block">
      <div className="mb-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5">
        <p className="text-[11px] uppercase tracking-wide text-white/45">Notes folder</p>
        <p className="mt-1 text-sm font-semibold text-white/90">MUN Portfolio</p>
      </div>

      <nav className="space-y-1">
        {SITE_LINKS.map(({ href, label }, idx) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition ${
                active
                  ? "bg-[#007AFF]/20 text-white ring-1 ring-[#007AFF]/35"
                  : "text-white/70 hover:bg-white/[0.06] hover:text-white/95"
              }`}
            >
              <span className="text-[11px] tabular-nums text-white/35">{idx + 1}</span>
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-5 space-y-2 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
        <Link
          href="/#start-here"
          className="block rounded-md bg-white/[0.06] px-2.5 py-2 text-[12px] text-white/80 hover:bg-white/[0.1]"
        >
          Start here pathway
        </Link>
        <Link
          href="/#certificates"
          className="block rounded-md bg-white/[0.06] px-2.5 py-2 text-[12px] text-white/80 hover:bg-white/[0.1]"
        >
          Certificates wall
        </Link>
        <Link
          href="/mun-os"
          className="block rounded-md bg-[#007AFF]/20 px-2.5 py-2 text-[12px] text-sky-200 ring-1 ring-[#007AFF]/30 hover:bg-[#007AFF]/30"
        >
          Open MUN-OS
        </Link>
      </div>
    </aside>
  );
}

