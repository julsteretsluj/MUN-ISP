import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  emoji,
  icon,
  children,
}: {
  eyebrow?: string;
  title: string;
  /** Decorative emoji shown beside the title (kept out of the document outline). */
  emoji?: string;
  /** Optional Lucide (or other) icon — pass e.g. <Compass className="h-7 w-7" />. */
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="neu-raised relative mb-10 overflow-hidden px-6 py-6 sm:px-7 sm:py-8">
      <div
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(99,102,241,0.22), transparent 62%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 65% 65%, rgba(14,165,233,0.16), transparent 58%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1]">
        {eyebrow ? (
          <p className="graphic-eyebrow px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(67,56,202,0.95)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 flex max-w-4xl flex-wrap items-start gap-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2.35rem] sm:leading-[1.12]">
          {icon ? (
            <span
              className="neu-chip grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-[var(--neu-accent)] [&_svg]:h-7 [&_svg]:w-7"
              aria-hidden
            >
              {icon}
            </span>
          ) : null}
          {emoji ? (
            <span
              className="select-none text-[2.35rem] leading-none sm:text-[2.65rem]"
              aria-hidden
            >
              {emoji}
            </span>
          ) : null}
          <span className="min-w-0 flex-1">{title}</span>
        </h1>
        <div className="graphic-rule mt-4" />
        <div className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[rgba(51,65,85,0.72)]">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Section({
  title,
  emoji,
  icon,
  children,
}: {
  title: string;
  emoji?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="neu-raised relative mb-12 px-6 py-5 sm:px-7 sm:py-6">
      <div className="relative z-[1]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[1.35rem]">
            {icon ? (
              <span
                className="neu-chip grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5"
                aria-hidden
              >
                {icon}
              </span>
            ) : null}
            {emoji ? (
              <span className="select-none text-[1.35rem] leading-none" aria-hidden>
                {emoji}
              </span>
            ) : null}
            <span className="min-w-0">{title}</span>
          </h2>
          <span
            className="hidden h-px flex-1 translate-y-[-6px] sm:ml-6 sm:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.35), rgba(14,165,233,0.2), transparent)",
            }}
            aria-hidden
          />
        </div>
        <div className="graphic-rule mt-3 sm:mt-4" />
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[rgba(51,65,85,0.82)]">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Callout({
  title,
  emoji,
  icon,
  children,
}: {
  title: string;
  emoji?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <aside className="relative mb-10 overflow-hidden rounded-2xl border border-[rgba(99,102,241,0.32)] px-5 py-5 shadow-[0_16px_40px_rgba(79,70,229,0.14)] sm:px-6 sm:py-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.97]"
        style={{
          background: `
            linear-gradient(125deg, rgba(99,102,241,0.16) 0%, rgba(14,165,233,0.1) 42%, rgba(236,72,153,0.1) 100%),
            repeating-linear-gradient(
              -12deg,
              rgba(255,255,255,0.055) 0 1px,
              transparent 1px 14px
            )
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(251,113,133,0.35), transparent 68%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1]">
        <p className="graphic-eyebrow inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(67,56,202,0.98)]">
          {icon ? (
            <span
              className="grid h-7 w-7 place-items-center rounded-lg bg-white/80 text-[var(--neu-accent)] shadow-[0_2px_8px_rgba(79,70,229,0.12)] [&_svg]:h-4 [&_svg]:w-4"
              aria-hidden
            >
              {icon}
            </span>
          ) : null}
          {emoji ? (
            <span className="text-[13px] normal-case tracking-normal" aria-hidden>
              {emoji}
            </span>
          ) : null}
          <span>{title}</span>
        </p>
        <div className="mt-3 text-[14px] leading-relaxed text-[rgba(30,41,59,0.92)]">
          {children}
        </div>
      </div>
    </aside>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative overflow-hidden rounded-r-2xl border border-[rgba(148,163,184,0.28)] bg-[linear-gradient(180deg,#f8faff,#f3f6ff)] py-4 pl-7 pr-4 text-[16px] font-medium leading-snug text-[rgba(15,23,42,0.92)] shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
      <span
        className="pointer-events-none absolute bottom-3 left-2 top-3 w-1 rounded-full bg-[linear-gradient(180deg,#6366f1,#0ea5e9,#e879f9)] opacity-95"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute left-4 top-2 font-serif text-[3.25rem] leading-none text-[rgba(99,102,241,0.14)]"
        aria-hidden
      >
        “
      </span>
      <span className="relative z-[1] block pl-3">{children}</span>
    </blockquote>
  );
}

export function NoteCard({ children }: { children: ReactNode }) {
  return (
    <article className="neu-raised p-5">{children}</article>
  );
}

export function PinnedMeta({
  children,
  emoji = "📌",
  icon,
}: {
  children: ReactNode;
  emoji?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.28)] bg-white px-3 py-1.5 text-[11px] text-[rgba(71,85,105,0.72)] shadow-[0_6px_14px_rgba(15,23,42,0.06)]">
      {icon ? (
        <span
          className="grid h-6 w-6 place-items-center rounded-md bg-[rgba(79,70,229,0.08)] text-[var(--neu-accent)] [&_svg]:h-3.5 [&_svg]:w-3.5"
          aria-hidden
        >
          {icon}
        </span>
      ) : (
        <span className="text-[13px] leading-none" aria-hidden>
          {emoji}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

export function LastEditedRow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-[rgba(100,116,139,0.58)]">
      Last edited {children}
    </p>
  );
}
