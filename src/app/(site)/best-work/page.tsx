import Link from "next/link";
import {
  Callout,
  LastEditedRow,
  PageIntro,
  PinnedMeta,
  Section,
} from "@/components/site/Prose";
import {
  certificateGalleryItems,
  resolutionPdfItems,
} from "@/lib/mun-resources";

const PIECES = [
  {
    type: "Position paper",
    title: "WHO — equitable vaccine access",
    strength:
      "Grounded financing in phased manufacturing milestones; cited delivery delays as evidence, not moral outrage.",
    reflection:
      "Earlier drafts leaned on slogans. This version improved because I tied obligations to observable logistics — easier for allies to co-sponsor.",
    evolve:
      "Today I’d add one paragraph explicitly addressing intellectual property friction — acknowledging trade-offs rather than dodging them.",
  },
  {
    type: "Position paper",
    title: "UNEP — adaptation vs. disaster response",
    strength:
      "Separated humanitarian rapid response from structural resilience funding — clarified governance to reduce pledge ambiguity.",
    reflection:
      "Growth moment: learning that clarity isn’t cold — it prevents wasted debate on duplicated mandates.",
    evolve:
      "I’d integrate one disaggregated indicator example (gender/education) to show how adaptation intersects inclusion metrics.",
  },
  {
    type: "Draft resolution excerpt",
    title: "Verification annex (security scenario)",
    strength:
      "Defined escalation thresholds tied to monitoring reports — created space for negotiation without pretending enforcement is automatic.",
    reflection:
      "Evidence mattered less than sequencing — delegates feared accidental escalation more than bad optics.",
    evolve:
      "I’d workshop the annex with a ‘bad-faith delegate’ stress-test earlier in caucus.",
  },
  {
    type: "Draft resolution excerpt",
    title: "Education financing clause (development committee)",
    strength:
      "Linked disbursements to attendance + literacy outcomes without punishing disrupted regions — blended accountability with realism.",
    reflection:
      "Improved because I stopped treating indicators as punishments and framed them as shared diagnostics.",
    evolve:
      "Add clearer dispute-resolution language for data disagreements between ministries and NGOs.",
  },
] as const;

export const metadata = {
  title: "My best work",
};

export default function BestWorkPage() {
  const resolutions = resolutionPdfItems();
  const positionPaperAwards = certificateGalleryItems().filter((c) =>
    /Best Position Paper/i.test(c.label)
  );

  return (
    <>
      <PageIntro eyebrow="Page 4 · Evidence of growth" title="My best work">
        <p>
          Draft reflections below are templates you can swap for PDFs — meanwhile,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">official scans</strong> for recognised position
          papers and other awards live in the{" "}
          <Link href="/#certificates" className="neu-link font-medium">
            certificate gallery
          </Link>
          . Full-text draft resolutions (PDF) are linked below and in the{" "}
          <Link href="/resources" className="neu-link font-medium">
            Resources page
          </Link>
          . <strong className="text-[rgba(15,23,42,0.88)]">WHO · Afghanistan</strong>,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">INTERPOL · France (MUN107 IV)</strong>,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">CSTD · Germany</strong>,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">UNOOSA · Israel (SISBMUN III)</strong>,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">WHO · New Zealand (STAMUN)</strong>,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">
            HCC · Pierre Mendès France (HEXAMUN &apos;26)
          </strong>
          , <strong className="text-[rgba(15,23,42,0.88)]">WHO · Belgium</strong>,{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">UNODC · Nicaragua</strong>, and{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">USCC · Ted Cruz (THAIMUN XIII)</strong>{" "}
          position papers (PDF) are listed in{" "}
          <Link href="/resources" className="neu-link font-medium">
            Resources
          </Link>
          .
        </p>
      </PageIntro>
      <PinnedMeta>Pinned note · Artifacts with reflection + revision logic</PinnedMeta>

      <section className="mb-14">
        <LastEditedRow>Apr 2026 · all resolution uploads linked</LastEditedRow>
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Draft resolutions — submitted PDFs
        </h2>
        <p className="mb-6 max-w-2xl text-[14px] leading-relaxed text-[rgba(100,116,139,0.55)]">
          Nine committee resolutions as merged or co-sponsored drafts (WHO 1.2 draft and
          copy, CISMUN 1.1, UNOOSA, CSTD, ECOSOC, GA Bloc C, INTERPOL, UNODC). Open
          directly in-browser.
        </p>
        <ul className="grid gap-4 md:grid-cols-3">
          {resolutions.map((r) => (
            <li key={r.id}>
              <div className="neu-inset flex h-full flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[rgba(100,116,139,0.45)]">
                  PDF · Resolution 1.2
                </p>
                <p className="mt-2 flex-1 text-[15px] font-medium leading-snug text-[rgba(15,23,42,0.9)]">
                  {r.label}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-chip rounded-xl px-3 py-2 text-[13px] text-[rgba(15,23,42,0.88)]"
                  >
                    Open PDF
                  </Link>
                  <Link
                    href="/resources"
                    className="neu-accent-chip rounded-xl px-3 py-2 text-[13px] font-medium"
                  >
                    All files
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <LastEditedRow>Apr 2026 · award scans curated</LastEditedRow>
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Position paper awards — scanned certificates
        </h2>
        <p className="mb-6 max-w-2xl text-[14px] leading-relaxed text-[rgba(100,116,139,0.55)]">
          Three conferences recognised Best Position Paper performance (INTERPOL, CSTD,
          WHO). Click a thumbnail to open the full-resolution image.
        </p>
        <ul className="grid gap-5 md:grid-cols-3">
          {positionPaperAwards.map((c) => (
            <li key={c.id}>
              <Link
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-raised group block overflow-hidden transition hover:brightness-[1.03]"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[var(--neu-canvas)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.url}
                    alt=""
                    className="h-full w-full object-cover object-top opacity-95 transition group-hover:opacity-100"
                  />
                </div>
                <p className="border-t border-[rgba(255,255,255,0.06)] px-3 py-3 text-[12px] leading-snug text-[rgba(51,65,85,0.75)]">
                  {c.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Callout title="Level 6 · Improvement over time">
        <LastEditedRow>Apr 2026 · reflection language tightened</LastEditedRow>
        <p>
          My early papers sounded confident but relied on thin sources. Over time, the
          improvement wasn’t “more words” — it was{" "}
          <strong className="text-[rgba(15,23,42,0.95)]">better mechanisms + harder tests for my own claims</strong>
          . The evidence sections became shorter but heavier: fewer quotes, more
          institution-grade references.
        </p>
      </Callout>

      <div className="grid gap-6">
        {PIECES.map((p) => (
          <article
            key={p.title}
            className="neu-inset p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="neu-chip rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[rgba(100,116,139,0.55)]">
                {p.type}
              </span>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{p.title}</h2>
            </div>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[rgba(71,85,105,0.7)]">
              <p>
                <span className="font-medium text-[rgba(30,41,59,0.85)]">Evidence & craft: </span>
                {p.strength}
              </p>
              <p>
                <span className="font-medium text-[rgba(30,41,59,0.85)]">Reflection: </span>
                {p.reflection}
              </p>
              <p>
                <span className="font-medium text-[rgba(30,41,59,0.85)]">What I’d do differently now: </span>
                {p.evolve}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="neu-inset rounded-xl border border-dashed border-[rgba(255,255,255,0.08)] px-3 py-2 text-[12px] text-[rgba(100,116,139,0.45)]">
                Attach your PDF / link in your final version
              </span>
              <Link
                href="/resources"
                className="neu-accent-chip rounded-xl px-3 py-2 text-[12px] font-medium"
              >
                Open full file library
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Section title="How evidence strengthened arguments">
        <p>
          The strongest clauses I contributed weren’t emotionally loud — they were{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">specific enough to coordinate behavior</strong>
          : timelines, triggers, verification hooks, and dispute pathways. Evidence didn’t
          “win” alone; it gave allies something defensible back home.
        </p>
      </Section>
    </>
  );
}
