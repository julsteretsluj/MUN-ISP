import Link from "next/link";
import { Callout, PageIntro, PullQuote, Section } from "@/components/site/Prose";

export const metadata = {
  title: "Final reflection",
};

export default function ReflectionPage() {
  return (
    <>
      <PageIntro eyebrow="Page 8 · Deep learning" title="Final reflection">
        <p>
          This closing section connects the portfolio back to one question:{" "}
          <strong className="text-[rgba(15,23,42,0.9)]">
            what did I learn — and what will I carry forward?
          </strong>
        </p>
      </PageIntro>

      <Section title="What I learned about global politics">
        <p>
          Institutions move slowly for reasons that aren’t always cynicism — capacity,
          sovereignty, and contested facts all constrain speed. MUN helped me recognize
          when delays are bargainingposture versus when they signal real implementation
          risk (monitoring gaps, fiscal cliffs, fragile coalitions).
        </p>
        <Callout title="Thinking over time">
          Early debates trained me to pick “good countries” on vibes. Later debates trained
          me to ask about <em>budgets, treaties, domestic incentives</em>, and enforcement
          pathways — because those determine whether speeches become outcomes.
        </Callout>
      </Section>

      <Section title="How my communication improved">
        <ul className="space-y-3 text-[15px] leading-relaxed text-[rgba(71,85,105,0.7)]">
          <li>
            <strong className="text-[rgba(15,23,42,0.88)]">Listening became tactical:</strong> I track
            objections not to “win” the interrupt, but to revise language so allies stay
            inside the tent.
          </li>
          <li>
            <strong className="text-[rgba(15,23,42,0.88)]">Precision replaced volume:</strong> shorter
            sentences with clearer mechanisms survived caucus better than ornate rhetoric.
          </li>
        </ul>
      </Section>

      <Section title="What I learned about leadership">
        <p>
          Leadership isn’t owning the microphone — it’s raising the floor: making norms,
          examples, and procedures easier for others to succeed under pressure. Student
          leadership in MUN means protecting fairness without fetishizing procedure as
          punishment.
        </p>
      </Section>

      <div className="neu-raised mb-10 overflow-hidden p-5 sm:p-6">
        <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-400/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700">
          Core Principle
        </div>
        <PullQuote>
          If this portfolio has a spine, it’s simple: learn in public, credit sources,
          build reusable tools, and treat debate as preparation for coordination — not
          performance alone.
        </PullQuote>
      </div>

      <div className="neu-raised mb-10 p-5 sm:p-6">
      <Callout title="Level 6 · Connect the whole project">
        <p className="mb-3">
          <Link href="/journey" className="neu-link font-medium">
            Journey
          </Link>{" "}
          taught me comparison;{" "}
          <Link href="/thinking" className="neu-link font-medium">
            Thinking
          </Link>{" "}
          turned habits explicit;{" "}
          <Link href="/best-work" className="neu-link font-medium">
            Best work
          </Link>{" "}
          proved growth with evidence;{" "}
          <Link href="/leader" className="neu-link font-medium">
            Leader
          </Link>{" "}
          named systemic gaps;{" "}
          <Link href="/conference-design" className="neu-link font-medium">
            Conference design
          </Link>{" "}
          proposed a practical response;{" "}
          <Link href="/resources" className="neu-link font-medium">
            Resources
          </Link>{" "}
          tries to pay the learning forward.
        </p>
        <p>
          Together, those pages argue that MUN can be more than a weekend simulation — it
          can be training for ethical negotiation under imperfect information.
        </p>
      </Callout>
      </div>

      <Section title="Impact on my future">
        <p>
          I’ll carry forward a bias toward mechanisms I can defend, questions that expose
          hidden trade-offs, and the discipline to make resources others can actually use —
          whether in further study, civic engagement, or mentoring the next cohort of
          delegates.
        </p>
      </Section>
    </>
  );
}
