"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_LINKS } from "./site-links";

export function NotesSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-[rgba(255,255,255,0.04)] bg-[var(--neu-surface)] p-3 lg:block">
      <div className="neu-inset mb-3 px-3 py-2.5">
        <p className="text-[11px] uppercase tracking-wide text-[rgba(232,236,244,0.45)]">
          Notes folder
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">MUN Portfolio</p>
      </div>

      <nav className="space-y-1.5">
        {SITE_LINKS.map(({ href, label }, idx) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] transition ${
                active
                  ? "neu-inset text-[var(--foreground)]"
                  : "text-[rgba(232,236,244,0.7)] hover:bg-[var(--neu-elevated)] hover:text-[var(--foreground)] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.35),-2px_-2px_8px_rgba(255,255,255,0.05)]"
              }`}
            >
              <span className="text-[11px] tabular-nums text-[rgba(232,236,244,0.35)]">
                {idx + 1}
              </span>
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="neu-inset mt-5 space-y-2 p-3">
        <Link
          href="/#start-here"
          className="neu-chip block rounded-xl px-2.5 py-2 text-center text-[12px] text-[rgba(232,236,244,0.85)]"
        >
          Start here pathway
        </Link>
        <Link
          href="/#certificates"
          className="neu-chip block rounded-xl px-2.5 py-2 text-center text-[12px] text-[rgba(232,236,244,0.85)]"
        >
          Certificates wall
        </Link>
        <Link
          href="/resources"
          className="neu-accent-chip block rounded-xl px-2.5 py-2 text-center text-[12px] font-medium"
        >
          Open all files
        </Link>
      </div>
    </aside>
  );
}
