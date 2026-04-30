import Link from "next/link";
import {
  Callout,
  LastEditedRow,
  NoteCard,
  PageIntro,
  PinnedMeta,
  Section,
} from "@/components/site/Prose";

export const metadata = {
  title: "Resources for delegates",
};

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Page 7 · Help others succeed" title="Resources for delegates">
        <p>
          These guides are written from practice — mistakes included — so they’re meant
          to be reused. Pair them with the interactive{" "}
          <Link href="/mun-os" className="neu-link font-medium underline decoration-[var(--neu-accent)]/40">
            MUN-OS
          </Link>{" "}
          workspace for files, planning matrices, and community-style tiles.
        </p>
      </PageIntro>
      <PinnedMeta>Pinned note · Reusable prep systems for newer delegates</PinnedMeta>

      <div className="grid gap-6 lg:grid-cols-2">
        <NoteCard>
          <LastEditedRow>Apr 2026 · starter strategy pass</LastEditedRow>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Position papers</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(232,236,244,0.7)] marker:text-[var(--neu-accent)]">
            <li>
              <strong className="text-[rgba(232,236,244,0.85)]">Beginners:</strong> Use the “constraint
              paragraph” — economy, geography, politics — before solutions.
            </li>
            <li>
              <strong className="text-[rgba(232,236,244,0.85)]">Experienced:</strong> Spend half your prep
              finding <em>negotiable</em> clauses allies can say yes to — not only critique.
            </li>
          </ul>
          <p className="mt-4 text-[13px] text-[rgba(232,236,244,0.45)]">
            Based on revision patterns where strong draft resolutions failed because PPs
            didn’t anticipate coalition seams.
          </p>
        </NoteCard>

        <NoteCard>
          <LastEditedRow>Apr 2026 · caucus prompts improved</LastEditedRow>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Debate & caucus</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(232,236,244,0.7)] marker:text-[rgba(196,160,255,0.75)]">
            <li>
              Replace monologue with <strong className="text-[rgba(232,236,244,0.85)]">three questions</strong>{" "}
              you’ll ask in unmoderated caucus before you enter the room.
            </li>
            <li>
              Build a <strong className="text-[rgba(232,236,244,0.85)]">merge map</strong>: who needs what
              phrase to go home without embarrassment — coalition stability is language
              stability.
            </li>
          </ul>
        </NoteCard>

        <NoteCard>
          <LastEditedRow>Apr 2026 · sourcing checklist updated</LastEditedRow>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Evidence habits</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(232,236,244,0.7)] marker:text-[rgba(255,180,120,0.85)]">
            <li>
              Triangulate: official government / UN technical / one independent watchdog.
            </li>
            <li>
              Translate statistics into mechanisms — budgets, timelines, verification hooks.
            </li>
          </ul>
        </NoteCard>

        <NoteCard>
          <LastEditedRow>Apr 2026 · examples expanded</LastEditedRow>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Examples</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[rgba(232,236,244,0.7)]">
            Place anonymized excerpts in your final portfolio: one strong operative
            paragraph, one weaker excerpt with annotations on why it fails, and one revised
            paragraph — readers learn faster from contrast than from polish alone.
          </p>
          <Link
            href="/best-work"
            className="neu-link mt-4 inline-flex text-[14px] font-medium"
          >
            See “My best work” structure →
          </Link>
        </NoteCard>
      </div>

      <Callout title="Level 6 · Different audiences, same honesty">
        <p>
          Beginners need scaffolding and repetition; advanced delegates need constraint
          and coalition psychology. The advice differs — the ethic doesn’t: cite sources
          you’d stake your reputation on, and build arguments others can reuse without
          copying your country’s circumstances blindly.
        </p>
      </Callout>

      <Section title="Digital toolkit">
        <LastEditedRow>Apr 2026 · prep PDFs consolidated</LastEditedRow>
        <p>
          Use{" "}
          <Link href="/mun-os" className="neu-link font-medium">
            MUN-OS
          </Link>{" "}
          for a Finder-style prep catalog (including{" "}
          <strong className="text-[rgba(232,236,244,0.85)]">Certificates</strong> and{" "}
          <strong className="text-[rgba(232,236,244,0.85)]">Resolutions</strong> PDFs), logistics views,
          packet simulations, and community tiles — it
          keeps evidence organised when nerves spike before session.
        </p>
        <p>
          Added prep document:{" "}
          <Link
            href="/mun/cismun-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            CISMUN Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/hexamun-26-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            HEXAMUN_26 Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/mun07-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            MUN07 Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/newton-mun-i-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            Newton MUN I Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/regents-mun-i-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            Regents MUN I Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/sisbmun-iii-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            SISBMUN III Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/stamun-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            StaMUN Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/thaimun-xii-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            THAIMUN XII Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/thaimun-xiii-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            THAIMUN XIII Prep.pdf
          </Link>{" "}
          and{" "}
          <Link
            href="/mun/tsimun-i-prep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-link font-medium"
          >
            TSIMUN I Prep.pdf
          </Link>{" "}
          (your reusable delegate template, indexed in Finder and Spotlight under
          Research).
        </p>
      </Section>
    </>
  );
}
