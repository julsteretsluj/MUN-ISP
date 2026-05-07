import Link from "next/link";
import { BookOpen, Lightbulb, Map, Star } from "lucide-react";
import { PageIntro, Section } from "@/components/site/Prose";
import { CountriesMap } from "@/components/site/CountriesMap";
import { ConferenceTimeline } from "@/components/site/ConferenceTimeline";

export const metadata = {
  title: "Experience & understanding",
};

export default function ExperienceUnderstandingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tab 2 · Experience & understanding"
        emoji="🧠"
        icon={<Lightbulb className="h-7 w-7" strokeWidth={1.75} />}
        title="Experience & understanding"
      >
        <p>
          This tab combines conference experience, delegate thinking, and evidence of
          learning progress. Use the quick links below to open full deep-dive sections.
        </p>
      </PageIntro>

      <CountriesMap />
      <ConferenceTimeline />

      <Section emoji="🧭" icon={<Map className="h-5 w-5" strokeWidth={1.75} />} title="Explore this tab">
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/journey"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <Map aria-hidden />
            </span>
            <span aria-hidden>🌍</span>
            My MUN journey
          </Link>
          <Link
            href="/thinking"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <Lightbulb aria-hidden />
            </span>
            <span aria-hidden>💡</span>
            How I think like a delegate
          </Link>
          <Link
            href="/best-work"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <Star aria-hidden />
            </span>
            <span aria-hidden>⭐</span>
            Best work and reflections
          </Link>
          <Link
            href="/reflection"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <BookOpen aria-hidden />
            </span>
            <span aria-hidden>🪞</span>
            Final reflection
          </Link>
        </div>
      </Section>
    </>
  );
}
