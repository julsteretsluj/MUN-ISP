import { Callout, PageIntro, PullQuote, Section } from "@/components/site/Prose";

export const metadata = {
  title: "How I think like a delegate",
};

export default function ThinkingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Page 3 · Explain your thinking"
        title="How I think like a delegate"
      >
        <p>
          Strong delegates aren’t random readers — they build a repeatable pipeline:
          country constraints → institutional levers → debate moves that fit the room.
          Below is my pipeline, with <strong className="text-white/90">why</strong> it
          works and <strong className="text-white/90">when</strong> I adapt it.
        </p>
      </PageIntro>

      <Section title="How I research a country">
        <ol className="list-decimal space-y-4 pl-5 marker:text-sky-400/90">
          <li>
            <strong className="text-white/88">Start with constraints, not adjectives.</strong>{" "}
            I read budget lines, trade dependence, recent treaty positions, and domestic
            politics in one paragraph — so my country isn’t “compassionate,” it’s
            “coal-dependent with an election in 11 months.”
          </li>
          <li>
            <strong className="text-white/88">Triangulate sources.</strong> Government
            white papers + UN agency technical notes + one credible NGO critique. If all
            three agree, it’s probably stable enough to stake language on.
          </li>
          <li>
            <strong className="text-white/88">Write three “hard truths.”</strong>{" "}
            Internal bullets my delegation can defend under pressure — because caucus is
            where optimistic PP language dies.
          </li>
        </ol>
        <Callout title="Why this strategy works">
          Committees reward delegates who can connect national interest to{" "}
          <em>draftable</em> mechanisms. Research that stops at vibe-check adjectives
          collapses the moment someone asks, “What funding clause supports that?”
        </Callout>
      </Section>

      <Section title="How I build arguments">
        <ul className="space-y-3">
          <li className="rounded-xl border border-white/[0.06] bg-black/25 px-4 py-3">
            <strong className="text-white/88">Claim → Mechanism → Evidence → Failure mode.</strong>{" "}
            For each operative paragraph I ask what breaks if enforcement is weak — and
            patch it early.
          </li>
          <li className="rounded-xl border border-white/[0.06] bg-black/25 px-4 py-3">
            <strong className="text-white/88">Bloc compatibility test.</strong> Before I
            fight for a clause, I check whether two plausible allies can say yes without
            contradicting their own constituencies.
          </li>
        </ul>
      </Section>

      <Section title="How I speak & negotiate">
        <p>
          Speeches open doors; caucus builds text. In moderated debate I aim for{" "}
          <strong className="text-white/88">one memorable mechanism + one cooperative offer</strong>
          . In unmoderated caucus I shift to questions: “What verification timeline can
          you accept?” — because questions force specifics faster than speeches.
        </p>
        <PullQuote>
          Adaptation rule: in fast rooms, I shorten analysis and trade detail; in slow
          rooms, I earn trust with procedural discipline and predictable follow-through.
        </PullQuote>
      </Section>

      <Callout title="Level 6 · Real conference examples">
        <p className="mb-3">
          At a WHO-style committee, a speech about “solidarity” didn’t move the bloc;
          what moved it was a{" "}
          <strong className="text-white/95">tiered financing schedule</strong> tied to
          regional production milestones — evidence from a missed delivery season the
          year prior.
        </p>
        <p>
          In a security simulation, my most useful moment wasn’t rhetoric — it was a
          two-step fallback: humanitarian access if monitors report X; sanctions
          escalation only if Y. That created a corridor for negotiation without pretending
          risk disappears.
        </p>
      </Callout>

      <Section title="Why I change tactics by situation">
        <p>
          Crisis arcs reward speed and narrative; specialized agencies reward precision
          and monitoring language. The thinking doesn’t change — only the tempo and the
          shape of acceptable evidence. The goal stays: make cooperation easier than
          performative deadlock.
        </p>
      </Section>
    </>
  );
}
