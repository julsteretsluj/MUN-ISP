import Link from "next/link";
import { Award, BookOpen, Compass, Tent } from "lucide-react";
import { PageIntro, Section } from "@/components/site/Prose";

export const metadata = {
  title: "Leadership & event planning",
};

export default function LeadershipEventPlanningPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tab 3 · Leadership / event planning"
        emoji="🚀"
        icon={<Compass className="h-7 w-7" strokeWidth={1.75} />}
        title="Leadership & event planning"
      >
        <p>
          This tab focuses on mentoring, conference design, and practical delegate
          resources. All supporting files are available directly in the resources library.
        </p>
      </PageIntro>

      <Section
        emoji="🗂️"
        icon={<Tent className="h-5 w-5" strokeWidth={1.75} />}
        title="Explore this tab"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/leader"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <Compass aria-hidden />
            </span>
            <span aria-hidden>🧭</span>
            Delegate to leader
          </Link>
          <Link
            href="/conference-design"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <Tent aria-hidden />
            </span>
            <span aria-hidden>🎪</span>
            Conference design
          </Link>
          <Link
            href="/resources"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <BookOpen aria-hidden />
            </span>
            <span aria-hidden>📚</span>
            Resources and full file library
          </Link>
          <Link
            href="/#certificates"
            className="neu-chip flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium"
          >
            <span className="neu-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-5 [&_svg]:w-5">
              <Award aria-hidden />
            </span>
            <span aria-hidden>🎖️</span>
            Certificate wall
          </Link>
        </div>
      </Section>
    </>
  );
}
