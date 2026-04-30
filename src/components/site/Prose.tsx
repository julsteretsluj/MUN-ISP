import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="neu-raised mb-10 px-6 py-6 sm:px-7 sm:py-7">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--neu-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h1>
      <div className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[rgba(51,65,85,0.72)]">
        {children}
      </div>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="neu-inset mb-12 px-6 py-5 sm:px-7">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-[rgba(71,85,105,0.68)]">
        {children}
      </div>
    </section>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside
      className="rounded-2xl px-5 py-4"
      style={{
        background: "var(--neu-warm)",
        boxShadow:
          "8px 8px 18px rgba(0,0,0,0.35), -6px -6px 14px rgba(255,220,160,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffd49a]">
        {title}
      </p>
      <div className="mt-2 text-[14px] leading-relaxed text-[rgba(15,23,42,0.88)]">
        {children}
      </div>
    </aside>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="neu-inset rounded-r-xl border-l-[3px] border-[var(--neu-accent)] py-3 pl-5 text-[16px] font-medium leading-snug text-[rgba(15,23,42,0.92)]">
      {children}
    </blockquote>
  );
}

export function NoteCard({ children }: { children: ReactNode }) {
  return (
    <article className="neu-raised p-5">{children}</article>
  );
}

export function PinnedMeta({ children }: { children: ReactNode }) {
  return (
    <div className="neu-inset mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] text-[rgba(100,116,139,0.62)]">
      <span className="text-[var(--neu-accent)]">●</span>
      <span>{children}</span>
    </div>
  );
}

export function LastEditedRow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-[rgba(100,116,139,0.42)]">
      Last edited {children}
    </p>
  );
}
