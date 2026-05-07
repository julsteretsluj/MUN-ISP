"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavTabIcon } from "./nav-tab-icons";
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
    <header className="sticky top-0 z-40 bg-[var(--neu-surface)]/94 shadow-[0_1px_0_rgba(148,163,184,0.18)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 font-semibold tracking-tight text-[var(--foreground)]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(145deg,#6366f1,#4f46e5)] text-white shadow-[0_10px_22px_rgba(79,70,229,0.35)] ring-1 ring-white/25 transition group-hover:brightness-105">
            <span className="text-[11px] font-bold tracking-[0.08em]">MUN</span>
          </span>
          <span className="hidden text-[15px] sm:inline">Portfolio</span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <p className="neu-inset flex min-w-0 items-center gap-2 truncate px-3 py-2 text-[13px] text-[rgba(51,65,85,0.75)]">
            <span className="neu-chip grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[var(--neu-accent)] [&_svg]:h-3.5 [&_svg]:w-3.5">
              <NavTabIcon href={current.href} />
            </span>
            <span className="shrink-0 text-[15px] leading-none" aria-hidden>
              {current.emoji}
            </span>
            <span className="truncate">{current.label}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/resources"
            className="neu-accent-chip hidden items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-medium transition hover:brightness-110 sm:inline-flex"
          >
            <span aria-hidden>📎</span>
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
            {SITE_LINKS.map(({ href, label, emoji }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[14px] text-[rgba(15,23,42,0.88)] transition hover:bg-[var(--neu-elevated)]"
              >
                <span className="neu-chip grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[var(--neu-accent)] [&_svg]:h-4 [&_svg]:w-4">
                  <NavTabIcon href={href} />
                </span>
                <span className="text-[16px] leading-none" aria-hidden>
                  {emoji}
                </span>
                {label}
              </Link>
            ))}
            <Link
              href="/resources"
              onClick={() => setOpen(false)}
              className="neu-accent-chip mt-2 flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-center text-[14px] font-medium"
            >
              <span aria-hidden>📚</span>
              Open document library
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
