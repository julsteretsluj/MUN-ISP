import { UsersRound } from "lucide-react";
import { Callout, PageIntro, Section } from "@/components/site/Prose";

export const metadata = {
  title: "From delegate to leader",
};

export default function LeaderPage() {
  return (
    <>
      <PageIntro
        eyebrow="Page 5 · The bridge"
        emoji="🧭"
        icon={<UsersRound className="h-7 w-7" strokeWidth={1.75} />}
        title="From delegate → leader"
      >
        <p>
          Leadership in MUN isn’t a title — it’s a habit of translating experience into
          systems others can use. This page names problems I noticed, what worked, what
          didn’t — and the through-line from experience to insight to action.
        </p>
      </PageIntro>

      <Section emoji="⚠️" title="Problems I noticed at conferences">
        <ul className="list-disc space-y-2 pl-5 marker:text-amber-300/80">
          <li>
            <strong className="text-white/88">Unequal prep support:</strong> some schools
            arrive camera-ready while others barely get faculty time — the advantage
            compounds in crisis and fast debate.
          </li>
          <li>
            <strong className="text-white/88">Performative debate:</strong> speeches
            that sound strong but don’t survive a request for operative language — wasted
            energy for delegates who needed real merges.
          </li>
          <li>
            <strong className="text-white/88">Procedural confusion under stress:</strong>
            chairs and delegates both suffer when RoP isn’t modeled as a tool for fairness
            (not theatrics).
          </li>
        </ul>
        <Callout emoji="💬" title="Why these problems matter">
          They don’t just “ruin fun” — they reproduce exclusion. The students who most
          need transferable skills (research, negotiation, literacy) are the ones most
          likely to get shut out when prep is uneven or debate rewards performance over
          text.
        </Callout>
      </Section>

      <Section emoji="✅" title="What worked well">
        <ul className="space-y-3">
          <li className="rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-3 text-[15px] text-[rgba(71,85,105,0.8)]">
            <strong className="text-[rgba(30,41,59,0.92)]">Micro-clinics:</strong> 20-minute
            rotations on sourcing, clause drafting, and caucus questions — fast feedback
            beats one long lecture.
          </li>
          <li className="rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-3 text-[15px] text-[rgba(71,85,105,0.8)]">
            <strong className="text-[rgba(30,41,59,0.92)]">Shared exemplars:</strong> anonymized
            good/bad operative paragraphs — delegates improve fastest with contrast.
          </li>
        </ul>
      </Section>

      <Section emoji="📉" title="What didn’t work">
        <ul className="space-y-3">
          <li className="neu-inset rounded-xl px-4 py-3">
            Generic “research tips” without exemplars — too abstract for tired brains.
          </li>
          <li className="neu-inset rounded-xl px-4 py-3">
            Giant binder packs with no prioritization — overwhelmed newer delegates.
          </li>
        </ul>
      </Section>

      <Callout emoji="🌉" title="Level 6 · Experience → Insight → Solution">
        <p className="mb-4">
          <strong className="text-white/95">Experience:</strong> I watched confident
          speakers lose the room when they couldn’t answer implementation questions.
        </p>
        <p className="mb-4">
          <strong className="text-white/95">Insight:</strong> Delegates don’t only need
          motivation — they need <em>templates</em> that make good prep legible and
          repeatable under time pressure.
        </p>
        <p>
          <strong className="text-white/95">Solution:</strong> Short, modular resources
          (clause patterns, caucus prompts, verification checklists) and peer coaching
          that practices <em>questions</em>, not speeches. That’s the bridge into
          conference design and the resources section of this site.
        </p>
      </Callout>

      <Section emoji="🧩" title="How experiences shaped my ideas">
        <p>
          Every time I lost a clause fight because my coalition couldn’t coordinate
          amendments, I walked away with a sharper sense of what student organizers can
          fix: clearer caucus agendas, structured merge time, and chairs trained to
          protect minority voices without losing momentum.
        </p>
      </Section>
    </>
  );
}
