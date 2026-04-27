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
    <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.08)] px-6 py-6 shadow-inner">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f7d58c]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      <div className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/75">
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
    <section className="mb-12 rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] px-6 py-5">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-white/70">
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
    <aside className="rounded-2xl border border-[#f3c76a]/35 bg-[#f3c76a]/12 px-5 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffd98a]">
        {title}
      </p>
      <div className="mt-2 text-[14px] leading-relaxed text-white/85">{children}</div>
    </aside>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="rounded-r-xl border-l-2 border-[#ffd98a] bg-white/[0.03] py-2 pl-5 text-[16px] font-medium leading-snug text-white/90">
      {children}
    </blockquote>
  );
}

export function NoteCard({ children }: { children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] p-5 shadow-inner">
      {children}
    </article>
  );
}

export function PinnedMeta({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1 text-[11px] text-white/65">
      <span className="text-[#f7d58c]">●</span>
      <span>{children}</span>
    </div>
  );
}

export function LastEditedRow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-white/45">
      Last edited {children}
    </p>
  );
}
