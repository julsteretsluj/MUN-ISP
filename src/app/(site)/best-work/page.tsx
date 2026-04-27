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
          <strong className="text-white/88">official scans</strong> for recognised position
          papers and other awards live in the{" "}
          <Link href="/#certificates" className="text-sky-300 hover:text-sky-200">
            certificate gallery
          </Link>{" "}
          and in{" "}
          <Link href="/mun-os" className="text-sky-300 hover:text-sky-200">
            MUN-OS Finder → Certificates
          </Link>
          . Full-text draft resolutions (PDF) are linked below and under{" "}
          <Link href="/mun-os" className="text-sky-300 hover:text-sky-200">
            Finder → Resolutions
          </Link>
          . <strong className="text-white/88">WHO · Afghanistan</strong>,{" "}
          <strong className="text-white/88">INTERPOL · France (MUN107 IV)</strong>,{" "}
          <strong className="text-white/88">CSTD · Germany</strong>,{" "}
          <strong className="text-white/88">UNOOSA · Israel (SISBMUN III)</strong>,{" "}
          <strong className="text-white/88">WHO · New Zealand (STAMUN)</strong>,{" "}
          <strong className="text-white/88">
            HCC · Pierre Mendès France (HEXAMUN &apos;26)
          </strong>
          , <strong className="text-white/88">WHO · Belgium</strong>,{" "}
          <strong className="text-white/88">UNODC · Nicaragua</strong>, and{" "}
          <strong className="text-white/88">USCC · Ted Cruz (THAIMUN XIII)</strong>{" "}
          position papers (PDF) are filed under{" "}
          <Link href="/mun-os" className="text-sky-300 hover:text-sky-200">
            Finder → Position Papers
          </Link>
          .
        </p>
      </PageIntro>
      <PinnedMeta>Pinned note · Artifacts with reflection + revision logic</PinnedMeta>

      <section className="mb-14">
        <LastEditedRow>Apr 2026 · all resolution uploads linked</LastEditedRow>
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-white">
          Draft resolutions — submitted PDFs
        </h2>
        <p className="mb-6 max-w-2xl text-[14px] leading-relaxed text-white/55">
          Nine committee resolutions as merged or co-sponsored drafts (WHO 1.2 draft and
          copy, CISMUN 1.1, UNOOSA, CSTD, ECOSOC, GA Bloc C, INTERPOL, UNODC). Open
          in-browser or preview inside{" "}
          <span className="text-white/75">MUN-OS Quick Look</span>.
        </p>
        <ul className="grid gap-4 md:grid-cols-3">
          {resolutions.map((r) => (
            <li key={r.id}>
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] p-5 shadow-inner">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/45">
                  PDF · Resolution 1.2
                </p>
                <p className="mt-2 flex-1 text-[15px] font-medium leading-snug text-white/90">
                  {r.label}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/[0.08] px-3 py-2 text-[13px] text-white/85 ring-1 ring-white/10 hover:bg-white/[0.12]"
                  >
                    Open PDF
                  </Link>
                  <Link
                    href="/mun-os"
                    className="rounded-lg bg-[#007AFF]/20 px-3 py-2 text-[13px] text-sky-200 ring-1 ring-[#007AFF]/30"
                  >
                    MUN-OS Finder
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <LastEditedRow>Apr 2026 · award scans curated</LastEditedRow>
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-white">
          Position paper awards — scanned certificates
        </h2>
        <p className="mb-6 max-w-2xl text-[14px] leading-relaxed text-white/55">
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
                className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition hover:border-emerald-400/25"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.url}
                    alt=""
                    className="h-full w-full object-cover object-top opacity-95 transition group-hover:opacity-100"
                  />
                </div>
                <p className="border-t border-white/[0.06] px-3 py-3 text-[12px] leading-snug text-white/75">
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
          <strong className="text-white/95">better mechanisms + harder tests for my own claims</strong>
          . The evidence sections became shorter but heavier: fewer quotes, more
          institution-grade references.
        </p>
      </Callout>

      <div className="grid gap-6">
        {PIECES.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-white/[0.08] bg-[rgba(246,242,233,0.06)] p-6 shadow-inner sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/55">
                {p.type}
              </span>
              <h2 className="text-xl font-semibold text-white">{p.title}</h2>
            </div>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                <span className="font-medium text-white/85">Evidence & craft: </span>
                {p.strength}
              </p>
              <p>
                <span className="font-medium text-white/85">Reflection: </span>
                {p.reflection}
              </p>
              <p>
                <span className="font-medium text-white/85">What I’d do differently now: </span>
                {p.evolve}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg border border-dashed border-white/20 px-3 py-2 text-[12px] text-white/45">
                Attach your PDF / link in your final version
              </span>
              <Link
                href="/mun-os"
                className="rounded-lg bg-[#007AFF]/20 px-3 py-2 text-[12px] text-sky-200 ring-1 ring-[#007AFF]/30"
              >
                Organize files in MUN-OS Finder
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Section title="How evidence strengthened arguments">
        <p>
          The strongest clauses I contributed weren’t emotionally loud — they were{" "}
          <strong className="text-white/88">specific enough to coordinate behavior</strong>
          : timelines, triggers, verification hooks, and dispute pathways. Evidence didn’t
          “win” alone; it gave allies something defensible back home.
        </p>
      </Section>
    </>
  );
}
