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
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[rgba(24,26,31,0.9)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/[0.08] ring-1 ring-white/10 transition group-hover:bg-white/[0.12]">
            <span className="text-[13px] text-sky-300">MUN</span>
          </span>
          <span className="hidden text-[15px] sm:inline">Notes</span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <p className="truncate rounded-lg bg-white/[0.06] px-3 py-1.5 text-[13px] text-white/75 ring-1 ring-white/10">
            {current.label}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/mun-os"
            className="hidden rounded-full bg-[#007AFF]/25 px-3 py-1.5 text-[12px] font-medium text-sky-200 ring-1 ring-[#007AFF]/35 transition hover:bg-[#007AFF]/35 sm:inline-block"
          >
            MUN-OS
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-white/80 ring-1 ring-white/10 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-[rgba(24,26,31,0.95)] px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {SITE_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[14px] text-white/85 hover:bg-white/[0.06]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/mun-os"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[#007AFF]/20 px-3 py-2.5 text-[14px] font-medium text-sky-200"
            >
              Open MUN-OS experience
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
