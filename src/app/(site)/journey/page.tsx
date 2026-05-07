import Link from "next/link";
import { CountriesMap } from "@/components/site/CountriesMap";
import {
  Callout,
  LastEditedRow,
  NoteCard,
  PageIntro,
  PinnedMeta,
  Section,
} from "@/components/site/Prose";
import { topicsForConference } from "@/lib/conference-topics";

const THEMES = [
  {
    name: "Crisis, justice & security institutions",
    blurb:
      "From historical cabinet logic to police cooperation — arguing under pressure when the mandate mixes sovereignty, intervention, and institutional credibility.",
    items: [
      {
        conference: "THAIMUN XII",
        committee: "UNODC",
        country: "Nicaragua",
        issue:
          "Transnational crime coordination with uneven domestic enforcement capacity",
        argued:
          "I pushed cooperation models that balanced intelligence-sharing with sovereignty safeguards, so implementation stayed realistic for lower-capacity states.",
      },
      {
        conference: "HEXA Model United Nations — Bangkok, 25 Apr 2026",
        committee: "HCC (Historical Crisis Committee)",
        country: "Pierre Mendès France",
        issue:
          "Crisis arcs requiring cabinet-level negotiation under shifting intelligence and alliance constraints",
        argued:
          "I prioritised verifiable de-escalation steps over rhetorical victories — historical committees punish vague bluster when chairs inject consequences.",
      },
      {
        conference:
          "MUN107 IV — St Andrews International School Sukhumvit 107 (7 Mar 2026)",
        committee: "INTERPOL",
        country: "Delegate",
        issue:
          "Cross-border enforcement cooperation, information sharing, and legitimacy of joint operations",
        argued:
          "Across sessions I pushed language that paired oversight with operational capacity — allies needed guarantees against misuse as much as ambition.",
      },
      {
        conference: "THAIMUN XIII",
        committee: "USCC",
        country: "Ted Cruz (TX, Republican)",
        issue:
          "Legislative bargaining under polarized constituencies and committee time pressure",
        argued:
          "I focused on coalition-feasible statute framing, where procedural timing and amendment strategy mattered as much as ideological positioning.",
      },
    ],
  },
  {
    name: "Health & science governance",
    blurb:
      "WHO-style committees reward delegates who connect epidemiology to financing and equity — not slogans.",
    items: [
      {
        conference: "CISMUN IV",
        committee: "WHO",
        country: "Belgium",
        issue:
          "Public-health coordination that balances rapid response with national legal constraints",
        argued:
          "I structured proposals around clear funding triggers and accountability hooks, so recommendations remained actionable beyond debate rhetoric.",
      },
      {
        conference:
          "Inaugural Newton Sixth Form Model United Nations Conference I — 14–15 Feb 2026",
        committee: "WHO",
        country: "Afghanistan",
        issue: "Global health priorities under resource constraints",
        argued:
          "I framed obligations as phased investments tied to delivery metrics — so developing and developed blocs could both defend the text domestically.",
      },
      {
        conference: "STAMUNXI — 16 Nov 2025",
        committee: "WHO",
        country: "New Zealand",
        issue: "Science-policy alignment and equitable implementation of health norms",
        argued:
          "Best Position Paper came from anchoring claims in agency guidance and domestic capacity — then showing how verification protects trust.",
      },
      {
        conference: "NISMUN III",
        committee: "ECOSOC",
        country: "USA",
        issue:
          "Development and social-policy outcomes under competing budget priorities",
        argued:
          "I argued for measurable social-impact frameworks so budget language could be defended with evidence rather than broad declarations.",
      },
    ],
  },
  {
    name: "Governance, development & norms",
    blurb:
      "US Congress simulations stress legislative bargaining; CSTD rewards evidence on technology, institutions, and enforcement.",
    items: [
      {
        conference: "Regent’s Model United Nations I — 2025",
        committee: "United States Congress",
        country: "Senator Elizabeth Warren (MA)",
        issue: "Domestic legislative coalitions and regulatory tools for national problems with global spillovers",
        argued:
          "I translated national progressive priorities into draftable statute-style provisions — balancing caucus politics with constitutional framing.",
      },
      {
        conference: "TSIMUN I — 31 Jan 2026",
        committee: "CSTD (Commission on Science and Technology for Development)",
        country: "Germany",
        issue: "Science & technology for development — institutions, access, and safeguards",
        argued:
          "Winning Best Position Paper required tying innovation pathways to monitoring and finance — not treating ‘tech transfer’ as a hollow headline.",
      },
      {
        conference: "SISBMUN III",
        committee: "UNOOSA",
        country: "Israel",
        issue:
          "Space governance and responsible-state behavior in emerging orbital domains",
        argued:
          "I emphasized verification and liability clarity so technical norms could move from principle to compliance practice.",
      },
    ],
  },
] as const;

export const metadata = {
  title: "My MUN journey",
};

export default function JourneyPage() {
  const themeAccents = [
    "from-sky-500/20 to-cyan-400/5 text-sky-700",
    "from-emerald-500/20 to-lime-400/5 text-emerald-700",
    "from-violet-500/20 to-fuchsia-400/5 text-violet-700",
  ] as const;

  const topicFor = (conferenceLabel: string) => {
    if (conferenceLabel.includes("HEXA")) return topicsForConference("HEXAMUN '26")[0];
    if (conferenceLabel.includes("MUN107") || conferenceLabel.includes("MUN07")) {
      return topicsForConference("MUN07 IV")[0];
    }
    if (conferenceLabel.includes("Regent")) return topicsForConference("Regents MUN I")[0];
    if (conferenceLabel.includes("Newton")) return topicsForConference("NewtonMUN I")[0];
    if (conferenceLabel.includes("STAMUN")) return topicsForConference("STAMUN XI")[0];
    if (conferenceLabel.includes("TSIMUN")) return topicsForConference("TSIMUN I")[0];
    if (conferenceLabel.includes("SISBMUN")) return topicsForConference("SISBMUN III")[0];
    if (conferenceLabel.includes("THAIMUN XII")) return topicsForConference("THAIMUN XII")[0];
    if (conferenceLabel.includes("THAIMUN XIII")) return topicsForConference("THAIMUN XIII")[0];
    if (conferenceLabel.includes("NISMUN")) return topicsForConference("NISMUN III")[0];
    if (conferenceLabel.includes("CISMUN")) return topicsForConference("CISMUN IV")[0];
    return undefined;
  };

  return (
    <>
      <PageIntro eyebrow="Page 2 · Compare & analyse" title="My MUN journey">
        <p>
          Across several conferences, the same skill showed up again and again:{" "}
          <strong className="text-[rgba(15,23,42,0.9)]">
            translating national interests into negotiable text
          </strong>
          . Below I group conferences by <em>theme</em> — crisis/security, health/science,
          governance/development — so you can compare how committees shape what “good
          advocacy” looks like.
        </p>
      </PageIntro>
      <PinnedMeta>Pinned note · 11 conferences grouped by policy theme</PinnedMeta>

      <Callout title="Level 6 · Comparison across conferences">
        <LastEditedRow>Apr 2026 · conference reflections updated</LastEditedRow>
        <p>
          Early committees taught me confidence; later committees taught me constraint.
          The shift wasn’t abandoning values — it was learning to embed them in clauses
          that could survive cross-examination in unmoderated caucus. Evidence files for
          each event are collected on the{" "}
          <Link href="/#certificates" className="neu-link underline decoration-[var(--neu-accent)]/40">
            Home page certificate gallery
          </Link>
          .
        </p>
      </Callout>

      <Section title="Themes (not just a timeline)">
        <p>
          Grouping by theme answers:{" "}
          <strong className="text-[rgba(15,23,42,0.88)]">
            what transfers across committees — and what doesn’t?
          </strong>
        </p>
      </Section>

      <CountriesMap />

      <div className="space-y-14">
        {THEMES.map((theme, themeIndex) => {
          const accent = themeAccents[themeIndex % themeAccents.length];
          return (
            <section key={theme.name} className="neu-raised overflow-hidden p-5 sm:p-6">
              <div className={`mb-5 inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${accent}`}>
                Theme {String(themeIndex + 1).padStart(2, "0")}
              </div>
              <div className="mb-6 flex flex-col gap-2 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {theme.name}
                </h2>
                <p className="max-w-xl text-[14px] leading-relaxed text-[rgba(100,116,139,0.55)]">
                  {theme.blurb}
                </p>
              </div>
              <LastEditedRow>Apr 2026 · synthesis notes refined</LastEditedRow>
              <div className="grid gap-6 lg:grid-cols-2">
                {theme.items.map((c) => {
                  const agendaTopic = topicFor(c.conference);
                  return (
                    <NoteCard key={`${c.conference}-${c.committee}`}>
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--neu-accent)]">
                        {c.conference}
                      </p>
                      <p className="mt-2 text-[16px] font-semibold text-[var(--foreground)]">
                        {c.committee}{" "}
                        <span className="text-[rgba(100,116,139,0.45)]">·</span> {c.country}
                      </p>
                      <div className="mt-3 rounded-xl bg-[rgba(59,130,246,0.06)] px-3 py-2">
                        <p className="text-[13px] font-medium text-[rgba(30,41,59,0.88)]">
                          Key issue: {c.issue}
                        </p>
                      </div>
                      {agendaTopic ? (
                        <p className="mt-3 rounded-xl border border-dashed border-[rgba(59,130,246,0.3)] bg-white/75 px-3 py-2 text-[13px] leading-relaxed text-[rgba(71,85,105,0.78)]">
                          <span className="font-medium text-[rgba(30,41,59,0.85)]">
                            Agenda topic from conference docs:
                          </span>{" "}
                          {agendaTopic}
                        </p>
                      ) : null}
                      <p className="mt-4 border-t border-[rgba(148,163,184,0.2)] pt-4 text-[14px] leading-relaxed text-[rgba(100,116,139,0.65)]">
                        <span className="text-[rgba(100,116,139,0.45)]">What I argued: </span>
                        {c.argued}
                      </p>
                    </NoteCard>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <Section title="How different approaches met the same underlying challenge">
        <p>
          In INTERPOL-style rooms, credibility often hinges on safeguards and sequencing.
          In WHO rooms, metrics and financing timelines decide whether bold language
          survives contact with reality. In legislative simulations, coalition economics
          dominate — your job is to make allies look competent back home. My growth was
          learning to <strong className="text-[rgba(15,23,42,0.88)]">name those pressures early</strong>{" "}
          instead of pretending every committee rewards the same speech style.
        </p>
      </Section>
    </>
  );
}
