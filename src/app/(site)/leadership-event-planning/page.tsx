import Link from "next/link";
import { PageIntro, Section } from "@/components/site/Prose";

export const metadata = {
  title: "Leadership & event planning",
};

export default function LeadershipEventPlanningPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tab 3 · Leadership / event planning"
        title="Leadership & event planning"
      >
        <p>
          This tab focuses on mentoring, conference design, and practical delegate
          resources. All supporting files are available directly in the resources library.
        </p>
      </PageIntro>

      <Section title="Explore this tab">
        <div className="grid gap-3 md:grid-cols-2">
          <Link href="/leader" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            Delegate to leader
          </Link>
          <Link
            href="/conference-design"
            className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            Conference design
          </Link>
          <Link href="/resources" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            Resources and full file library
          </Link>
          <Link href="/#certificates" className="neu-chip rounded-xl px-4 py-3 text-[14px] font-medium">
            Certificate wall
          </Link>
        </div>
      </Section>
    </>
  );
}
