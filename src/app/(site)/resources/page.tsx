import Link from "next/link";
import { BookOpen, Pin } from "lucide-react";
import {
  Callout,
  LastEditedRow,
  NoteCard,
  PageIntro,
  PinnedMeta,
  Section,
} from "@/components/site/Prose";
import { FINDER_RESOURCES } from "@/lib/mun-resources";

export const metadata = {
  title: "Resources for delegates",
};

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Page 7 · Help others succeed"
        emoji="📚"
        icon={<BookOpen className="h-7 w-7" strokeWidth={1.75} />}
        title="Resources for delegates"
      >
        <p>
          These guides are written from practice — mistakes included — so they’re meant
          to be reused. All portfolio files are now integrated directly into this site,
          so you can open prep documents, position papers, resolutions, and certificates
          from one place.
        </p>
      </PageIntro>
      <PinnedMeta icon={<Pin className="h-3.5 w-3.5" strokeWidth={2} />}>
        Pinned note · Reusable prep systems for newer delegates
      </PinnedMeta>

      <div className="grid gap-6 lg:grid-cols-2">
        <NoteCard>
          <LastEditedRow>Apr 2026 · starter strategy pass</LastEditedRow>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
            <span aria-hidden>📄</span>
            Position papers
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(71,85,105,0.7)] marker:text-[var(--neu-accent)]">
            <li>
              <strong className="text-[rgba(30,41,59,0.85)]">Beginners:</strong> Use the “constraint
              paragraph” — economy, geography, politics — before solutions.
            </li>
            <li>
              <strong className="text-[rgba(30,41,59,0.85)]">Experienced:</strong> Spend half your prep
              finding <em>negotiable</em> clauses allies can say yes to — not only critique.
            </li>
          </ul>
          <p className="mt-4 text-[13px] text-[rgba(100,116,139,0.45)]">
            Based on revision patterns where strong draft resolutions failed because PPs
            didn’t anticipate coalition seams.
          </p>
        </NoteCard>

        <NoteCard>
          <LastEditedRow>Apr 2026 · caucus prompts improved</LastEditedRow>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
            <span aria-hidden>🎤</span>
            Debate & caucus
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(71,85,105,0.7)] marker:text-[rgba(196,160,255,0.75)]">
            <li>
              Replace monologue with <strong className="text-[rgba(30,41,59,0.85)]">three questions</strong>{" "}
              you’ll ask in unmoderated caucus before you enter the room.
            </li>
            <li>
              Build a <strong className="text-[rgba(30,41,59,0.85)]">merge map</strong>: who needs what
              phrase to go home without embarrassment — coalition stability is language
              stability.
            </li>
          </ul>
        </NoteCard>

        <NoteCard>
          <LastEditedRow>Apr 2026 · sourcing checklist updated</LastEditedRow>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
            <span aria-hidden>🔗</span>
            Evidence habits
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(71,85,105,0.7)] marker:text-[rgba(255,180,120,0.85)]">
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
          <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
            <span aria-hidden>✂️</span>
            Examples
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[rgba(71,85,105,0.7)]">
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

      <Callout emoji="🎯" title="Level 6 · Different audiences, same honesty">
        <p>
          Beginners need scaffolding and repetition; advanced delegates need constraint
          and coalition psychology. The advice differs — the ethic doesn’t: cite sources
          you’d stake your reputation on, and build arguments others can reuse without
          copying your country’s circumstances blindly.
        </p>
      </Callout>

      <Section emoji="🛠️" title="Digital toolkit">
        <LastEditedRow>Apr 2026 · prep PDFs consolidated</LastEditedRow>
        <p>
          This site includes a full prep catalog (including{" "}
          <strong className="text-[rgba(30,41,59,0.85)]">Certificates</strong> and{" "}
          <strong className="text-[rgba(30,41,59,0.85)]">Resolutions</strong> PDFs) and it
          keeps evidence organised when nerves spike before session. Prep PDFs appear in
          the <strong className="text-[rgba(30,41,59,0.85)]">Prep documents</strong>{" "}
          section of the file index below.
        </p>
      </Section>

      <Section emoji="📂" title="All portfolio files">
        <LastEditedRow>Apr 2026 · unified file index</LastEditedRow>
        {(["research", "position-papers", "resolutions", "certificates"] as const).map(
          (category) => {
            const items = FINDER_RESOURCES.filter((r) => r.category === category);
            if (!items.length) return null;
            const label =
              category === "research"
                ? "Prep documents"
                : category === "position-papers"
                  ? "Position papers"
                  : category === "resolutions"
                    ? "Draft resolutions"
                    : "Certificates";
            const catEmoji =
              category === "research"
                ? "📋"
                : category === "position-papers"
                  ? "📄"
                  : category === "resolutions"
                    ? "📜"
                    : "🎖️";
            return (
              <div key={category} className="mb-7">
                <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-[var(--foreground)]">
                  <span aria-hidden>{catEmoji}</span>
                  {label}
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-chip flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] text-[rgba(30,41,59,0.85)]"
                      >
                        <span className="text-[15px] leading-none opacity-80" aria-hidden>
                          {catEmoji}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
        )}
      </Section>
    </>
  );
}
