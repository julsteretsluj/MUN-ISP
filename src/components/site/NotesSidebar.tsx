"use client";

import Link from "next/link";
import { Award, BookOpen, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavTabIcon } from "./nav-tab-icons";
import { SITE_LINKS } from "./site-links";

export function NotesSidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative hidden w-72 shrink-0 border-r border-[rgba(148,163,184,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,255,0.96))] p-3 lg:block">
      <div
        className="pointer-events-none absolute inset-y-8 right-0 w-px opacity-60"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(99,102,241,0.35), rgba(14,165,233,0.2), transparent)",
        }}
        aria-hidden
      />
      <div className="neu-inset relative mb-3 overflow-hidden px-3 py-3">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)",
          }}
          aria-hidden
        />
        <p className="graphic-eyebrow inline-flex px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(67,56,202,0.92)]">
          Sections
        </p>
        <p className="relative z-[1] mt-2 flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--foreground)]">
          <span className="neu-chip grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)]">
            <BookOpen className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-lg leading-none" aria-hidden>
            📓
          </span>
          MUN Portfolio
        </p>
        <div className="graphic-rule relative z-[1] mt-3 max-w-[5.5rem]" />
      </div>

      <nav className="space-y-1.5">
        {SITE_LINKS.map(({ href, label, emoji }, idx) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] transition ${
                active
                  ? "neu-inset font-medium text-[var(--foreground)] shadow-[0_10px_22px_rgba(79,70,229,0.12)] ring-1 ring-[rgba(99,102,241,0.22)]"
                  : "text-[rgba(71,85,105,0.7)] hover:bg-[var(--neu-elevated)] hover:text-[var(--foreground)] hover:shadow-[0_8px_18px_rgba(15,23,42,0.06)]"
              }`}
            >
              <span className="text-[11px] tabular-nums text-[rgba(100,116,139,0.35)]">
                {idx + 1}
              </span>
              <span className="neu-chip grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[var(--neu-accent)] [&_svg]:h-3.5 [&_svg]:w-3.5">
                <NavTabIcon href={href} />
              </span>
              <span className="text-[15px] leading-none" aria-hidden>
                {emoji}
              </span>
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="neu-inset mt-5 space-y-2 p-3">
        <Link
          href="/#start-here"
          className="neu-chip flex items-center justify-center gap-2 rounded-xl px-2.5 py-2 text-center text-[12px] text-[rgba(30,41,59,0.85)]"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--neu-accent)]" aria-hidden />
          <span aria-hidden>✨</span>
          Start here pathway
        </Link>
        <Link
          href="/#certificates"
          className="neu-chip flex items-center justify-center gap-2 rounded-xl px-2.5 py-2 text-center text-[12px] text-[rgba(30,41,59,0.85)]"
        >
          <Award className="h-3.5 w-3.5 text-[var(--neu-accent)]" aria-hidden />
          <span aria-hidden>🎖️</span>
          Certificates wall
        </Link>
        <Link
          href="/resources"
          className="neu-accent-chip flex items-center justify-center gap-2 rounded-xl px-2.5 py-2 text-center text-[12px] font-medium"
        >
          <BookOpen className="h-3.5 w-3.5 opacity-95" aria-hidden />
          <span aria-hidden>📚</span>
          Open all files
        </Link>
      </div>
    </aside>
  );
}
