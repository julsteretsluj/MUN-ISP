"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE_LINKS } from "./site-links";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current =
    SITE_LINKS.find((l) =>
      l.href === "/"
        ? pathname === "/"
        : pathname === l.href || pathname.startsWith(`${l.href}/`)
    ) ?? SITE_LINKS[0];

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,0.05)] bg-[var(--neu-surface)]/92 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 font-semibold tracking-tight text-[var(--foreground)]"
        >
          <span className="neu-inset grid h-9 w-9 place-items-center rounded-xl transition">
            <span className="text-[13px] text-[var(--neu-accent)]">MUN</span>
          </span>
          <span className="hidden text-[15px] sm:inline">Portfolio</span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <p className="neu-inset truncate px-3 py-2 text-[13px] text-[rgba(51,65,85,0.75)]">
            {current.label}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/resources"
            className="neu-accent-chip hidden rounded-full px-3 py-2 text-[12px] font-medium transition hover:brightness-110 sm:inline-block"
          >
            Documents
          </Link>
          <button
            type="button"
            className="neu-chip rounded-xl p-2 text-[rgba(30,41,59,0.85)] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="neu-inset mx-3 mb-3 border-0 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {SITE_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[14px] text-[rgba(15,23,42,0.88)] transition hover:bg-[var(--neu-elevated)]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/resources"
              onClick={() => setOpen(false)}
              className="neu-accent-chip mt-2 rounded-xl px-3 py-2.5 text-center text-[14px] font-medium"
            >
              Open document library
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
