import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { CertificateWall } from "@/components/site/CertificateWall";
import { Callout, PageIntro, PullQuote, Section } from "@/components/site/Prose";

export default function HomePage() {
  return (
    <>
      <PageIntro eyebrow="Page 1 · Home" title="Your MUN story at a glance">
        <p>
          This site is a <strong className="text-white/90">learning portfolio</strong>{" "}
          and <strong className="text-white/90">open resource</strong>: it explains how
          Model UN shaped my thinking, shows evidence of growth, and shares practical
          tools so other delegates can prepare faster and debate with more clarity.
        </p>
      </PageIntro>

      <div
        id="start-here"
        className="scroll-mt-28 rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.08)] p-6 shadow-inner sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-black/30 ring-1 ring-white/10">
              <Compass className="h-5 w-5 text-sky-300" aria-hidden />
            </span>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-sky-200/90">
                Start here
              </p>
              <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-white/75">
                New here? Follow this path once — then bookmark the pages you revisit
                most. Each section builds on the last: story → thinking → evidence →
                leadership → design → resources → reflection.
              </p>
            </div>
          </div>
        </div>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { n: 1, href: "/", label: "Home — orientation", here: true },
            { n: 2, href: "/journey", label: "My MUN journey (compare)" },
            { n: 3, href: "/thinking", label: "How I think like a delegate" },
            { n: 4, href: "/best-work", label: "My best work (evidence)" },
            { n: 5, href: "/leader", label: "From delegate → leader" },
            { n: 6, href: "/conference-design", label: "Conference design" },
            { n: 7, href: "/resources", label: "Resources for delegates" },
            { n: 8, href: "/reflection", label: "Final reflection" },
          ].map((step) => (
            <li key={step.href}>
              {step.here ? (
                <span className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[14px] text-white/85">
                  <span className="font-mono text-[12px] text-white/45">
                    {step.n}.
                  </span>
                  {step.label}
                </span>
              ) : (
                <Link
                  href={step.href}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-[14px] text-white/80 transition hover:border-sky-400/25 hover:bg-white/[0.05]"
                >
                  <span className="font-mono text-[12px] text-white/45">
                    {step.n}.
                  </span>
                  {step.label}
                  <ArrowRight className="ml-auto h-4 w-4 text-white/35" />
                </Link>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-[13px] font-medium text-white ring-1 ring-white/10 transition hover:bg-white/[0.12]"
          >
            Continue to My journey
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/mun-os"
            className="inline-flex items-center gap-2 rounded-full bg-[#007AFF]/25 px-4 py-2 text-[13px] font-medium text-sky-100 ring-1 ring-[#007AFF]/35"
          >
            Open MUN-OS workspace
            <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] p-6">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-white/45">
            Conferences represented
          </p>
          <p className="mt-2 text-4xl font-semibold tabular-nums text-white">11</p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/55">
            THAIMUN XII & XIII, NISMUN III, Regents MUN I, CISMUN IV, STAMUN XI,
            SISBMUN III, TSIMUN I, NewtonMUN I, MUN07 IV, HEXAMUN &apos;26 — see{" "}
            <Link href="/journey" className="text-sky-300 hover:text-sky-200">
              Journey
            </Link>
            .
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] p-6">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-white/45">
            Competitive awards
          </p>
          <p className="mt-2 text-4xl font-semibold tabular-nums text-white">6</p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/55">
            Honorable Mention (HCC), Best Delegate ×2, Best Position Paper ×3 — backed by
            scans below.
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] p-6">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-white/45">
            Roles & committees
          </p>
          <ul className="mt-3 space-y-2 text-[14px] text-white/75">
            <li>Delegate — Historical Crisis (HEXA)</li>
            <li>Delegate — UNODC, ECOSOC, USCC, WHO, UNOOSA, CSTD, INTERPOL, HCC</li>
            <li>
              Certificates on file:{" "}
              <Link
                href="#certificates"
                className="text-sky-300 hover:text-sky-200"
              >
                10 scans
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <CertificateWall />

      <Section title="My MUN journey in one breath">
        <p>
          I started MUN wanting polished speeches. I stayed because it forced me to
          read treaties like a practitioner, not a spectator — connecting domestic
          policy constraints to multilateral bargaining in real time.
        </p>
        <p>
          Across committees, the recurring lesson was simple:{" "}
          <strong className="text-white/90">power is procedural as much as rhetorical</strong>
          . Understanding rules of procedure became a strategy for inclusion — who
          gets recognized, what gets voted on, and what evidence counts as “in order.”
        </p>
      </Section>

      <Callout title="Level 6 · How MUN changed my thinking">
        <p>
          MUN didn’t just teach me “both sides.” It trained me to ask what institutions
          can realistically deliver under time pressure, contested facts, and unequal
          capacity. I stopped treating global issues as purely moral questions and
          started treating them as{" "}
          <strong className="text-white/95">coordination problems</strong> — where
          incentives, enforcement, and legitimacy matter as much as intent.
        </p>
      </Callout>

      <Section title="Who this site is for">
        <ul className="list-disc space-y-2 pl-5 marker:text-sky-400/80">
          <li>
            <strong className="text-white/88">New delegates</strong> who want a
            repeatable prep system (research → arguments → caucus strategy).
          </li>
          <li>
            <strong className="text-white/88">Experienced delegates</strong> who want
            sharper comparison across committees and stronger evidence habits.
          </li>
          <li>
            <strong className="text-white/88">Student leaders</strong> designing
            conferences or mentoring younger delegations — see “Conference design” and
            “Resources.”
          </li>
        </ul>
        <PullQuote>
          This portfolio is meant to be used — not just read. If one section saves you
          a wasted night of panic-searching sources, it did its job.
        </PullQuote>
      </Section>
    </>
  );
}
