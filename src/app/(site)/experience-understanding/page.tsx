import Link from "next/link";
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
        title="Experience & understanding"
      >
        <p>
          This tab combines conference experience, delegate thinking, and evidence of
          learning progress. Use the quick links below to open full deep-dive sections.
        </p>
      </PageIntro>

      <CountriesMap />
      <ConferenceTimeline />

      <Section title="Explore this tab">
        <div className="grid gap-3 md:grid-cols-2">
          <Link href="/journey" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            My MUN journey
          </Link>
          <Link href="/thinking" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            How I think like a delegate
          </Link>
          <Link href="/best-work" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            Best work and reflections
          </Link>
          <Link href="/reflection" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            Final reflection
          </Link>
        </div>
      </Section>
    </>
  );
}
