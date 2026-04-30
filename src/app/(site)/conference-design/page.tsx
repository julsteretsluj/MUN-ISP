import { PageIntro } from "@/components/site/Prose";

export const metadata = {
  title: "My conference design",
};

export default function ConferenceDesignPage() {
  return (
    <>
      <PageIntro eyebrow="Page 6 · Apply learning" title="My conference design">
        <p>
          This page uses my actual planning brief for{" "}
          <strong className="text-[rgba(15,23,42,0.92)]">SEAMUN I</strong>, including strategy,
          operations, academic structure, and delegate systems. The conference model is
          built as a non-profit, tech-forward format designed for accessibility and
          academic rigor.
        </p>
      </PageIntro>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="neu-inset p-3">
          <p className="px-2 py-2 text-[11px] font-semibold uppercase tracking-wide text-[rgba(100,116,139,0.45)]">
            Folders
          </p>
          <div className="space-y-1">
            {[
              "SEAMUN I Overview",
              "Planning Overview",
              "Committees & Structure",
              "Committees & Topics",
              "2-Day Schedule",
              "Digital Systems",
              "Why These Decisions",
              "Planning Documents",
            ].map((item, i) => (
              <button
                key={item}
                type="button"
                className={`flex w-full items-center rounded-xl px-3 py-2 text-left text-[13px] transition ${
                  i === 0
                    ? "neu-inset text-[var(--foreground)]"
                    : "text-[rgba(100,116,139,0.65)] hover:bg-[var(--neu-elevated)] hover:text-[var(--foreground)] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.35)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div className="neu-inset p-1">
          <article
            className="rounded-[0.875rem] text-[#1f1f22]"
            style={{
              background: "#ebe4d8",
              boxShadow:
                "inset 4px 4px 10px rgba(0,0,0,0.08), inset -3px -3px 8px rgba(255,255,255,0.6)",
            }}
          >
            <header className="border-b border-black/10 px-6 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Note · Conference Planning
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-black/90">
                SEAMUN I — The Conference
              </h2>
              <p className="mt-2 text-[13px] text-black/60">
                Policies with a Purpose · 16-17 January 2027 · 2-day conference
              </p>
            </header>

            <div className="space-y-8 px-6 py-6 text-[15px] leading-relaxed text-black/75">
              <section>
                <h3 className="text-lg font-semibold text-black/85">Conference idea</h3>
                <p className="mt-2">
                  SEAMUN I is designed as a non-profit, high-standards conference that
                  combines academic rigor with delegate accessibility. The model centers
                  on sustainability, professionalism, and meaningful outcomes.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">Planning overview</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-black/10 bg-white/70">
                  <table className="w-full border-collapse text-left text-[14px]">
                    <thead className="bg-black/[0.04] text-[11px] uppercase tracking-wide text-black/50">
                      <tr>
                        <th className="px-4 py-2.5 font-medium">Track</th>
                        <th className="px-4 py-2.5 font-medium">SEAMUN plan</th>
                        <th className="px-4 py-2.5 font-medium">Why it matters</th>
                      </tr>
                    </thead>
                    <tbody className="text-black/75">
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Scale</td>
                        <td className="px-4 py-2.5">15 committees, 2 conference days, venue TBD</td>
                        <td className="px-4 py-2.5">Enables broad pathways from beginner to advanced</td>
                      </tr>
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Access</td>
                        <td className="px-4 py-2.5">Delegate fee 2500 THB, chair fee 800 THB</td>
                        <td className="px-4 py-2.5">Clear affordability model + planning certainty</td>
                      </tr>
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Academics</td>
                        <td className="px-4 py-2.5">33 chairs + 10 advisors, 10+ study guides, PP portal</td>
                        <td className="px-4 py-2.5">Protects quality and consistency across committees</td>
                      </tr>
                      <tr className="border-t border-black/10">
                        <td className="px-4 py-2.5">Operations</td>
                        <td className="px-4 py-2.5">21-room model, AV setup, registration desk, secretariat room</td>
                        <td className="px-4 py-2.5">Reduces day-of bottlenecks and procedural delays</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">Committees & structure</h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  <li className="rounded-xl border border-black/10 bg-emerald-100/45 p-3">
                    <strong className="text-black/85">Beginner stream</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      ECOSOC, F1, Press Corps, UNICEF (ESL)
                    </p>
                  </li>
                  <li className="rounded-xl border border-black/10 bg-amber-100/45 p-3">
                    <strong className="text-black/85">Intermediate stream</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      EU, UNESCO, UNHRC (ESL), UNODC, UNSC (Crisis), UN Women
                    </p>
                  </li>
                  <li className="rounded-xl border border-black/10 bg-rose-100/45 p-3">
                    <strong className="text-black/85">Advanced / crisis stream</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      DISEC, FWC (Crisis), HSC (Crisis), INTERPOL, WHO
                    </p>
                  </li>
                  <li className="rounded-xl border border-black/10 bg-slate-100/60 p-3">
                    <strong className="text-black/85">Awards & outcomes</strong>
                    <p className="mt-1 text-[13px] text-black/70">
                      Overall awards, committee awards, chair awards, structured closing.
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">Committees & topics</h3>
                <div className="mt-4 space-y-6">
          <CommitteeBlock
            title="Beginner"
            rows={[
              {
                committee: "ECOSOC",
                topics: [
                  "The Question of Implementing a Globally Coordinated Universal Basic Income (UBI) Programme as a Strategy for Poverty Eradication and Economic Stability",
                  "The Question of Exploring International Mechanisms for Reallocating Military Expenditures Towards the Development and Strengthening of Global Public Health Systems",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "F1",
                topics: [
                  "The Question of Implementing Durability and Longevity Standards for Critical Car Components to Optimize Component Lifecycles and Minimize Material and Energy Waste",
                  "The Question of Analyzing the Socio-Economic and Infrastructure Impacts of Hosting a New Grand Prix, with a Focus on Mitigating Urban Congestion and Logistics in Highly Populated Cities With a Focus on the Possible F1 Grand Prix of 2028 in Bangkok",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "Press Corps",
                topics: [
                  "The Question of Determining Journalistic Ethics in Reporting on Public Health and Global Affairs",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UNICEF (ESL)",
                topics: [
                  "The Question of Strengthening Maternal, Neo-Natal, and Post-Partum Healthcare Systems to Significantly Reduce Preventable Maternal and Infant Mortality and Morbidity",
                  "The Question of Recommending Policy Frameworks to Encourage Employer-Supported Flexible Work Arrangements and Parental Leave to Facilitate Early Childhood Development and Strengthen Parent-Child Bonding",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
            ]}
          />

          <CommitteeBlock
            title="Intermediate"
            rows={[
              {
                committee: "EU",
                topics: [
                  "The Question of Addressing the Socio-Economic Impact of Inflation and the Rising Cost of Living on Vulnerable Populations across Europe",
                  "The Question of Standardization in Policies Across Europe to Prevent Poverty Driven Cycles of Crime",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UNESCO",
                topics: [
                  "The Question of Developing and Standardizing Inclusive Education Policies and Necessary Accommodations to Ensure Full and Equitable Access to Learning for Neurodivergent Students",
                  "The Question of Establishing Guidelines for the Mandatory and Comprehensive Integration of Historical Failures, Atrocities, and Human Rights Violations into National Education Curricula to Promote Reconciliation and Prevent Future Recurrence",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UNHRC (ESL)",
                topics: [
                  "The Question of Promoting the Standardised Regulation of the Death Penalty and Respect for the Right to Life",
                  "The Question of the Obligation to Prevent Cruel, Inhuman, or Degrading Treatments Arising from Deficiencies in the Prison Administrations and Justice Systems",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "UNODC",
                topics: [
                  "The Question of Policy Analysis of Alternatives to Conviction and Punishment for Drug Possession for Personal Use",
                  "The Question of Addressing the Inter-generational Impact of Substance Abuse and Addiction",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "UNSC (Crisis)",
                topics: [
                  "The Question of Developing and Standardising Best Practices for Peacekeeping Operations to Ensure Scalable and Sustainable Global Implementation",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "UN Women",
                topics: [
                  "The Question of Affirming and Guaranteeing Women’s Reproductive Autonomy by Establishing International Legal Standards on Access to Safe and Legal Abortion",
                  "The Question of Examining the Recognition of Universal Childcare as a Fundamental Human Right and Its Role in Addressing Declining Birth Rates",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
            ]}
          />

          <CommitteeBlock
            title="Advanced"
            rows={[
              {
                committee: "DISEC",
                topics: [
                  "The Question of Strengthening International Protocols and Logistics for Securing the Cross-Border Transport of Lethal Weapons and Related Materials",
                  "The Question of Developing Mechanisms to Prevent the Diversion of Legally Traded Conventional Arms to Illicit Markets and Non-State Actors",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "FWC (Crisis)",
                topics: [
                  "The Question of Preventing Harm Caused by Psychic/Psychokinetic Child Experimentation and Ensuring the Protection and Rehabilitation of Gifted Minors",
                  "The Question of Addressing the Weaponization of the Human Mind and Establishing International Protocols for the Containment and Non-Proliferation of Psychic Technologies",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "HSC (Crisis)",
                topics: [
                  "SARS Outbreak (2002-2004)",
                  "The Black Death (1346-1353)",
                ],
                gradeRange: "Grade 7-12 · Year 8-13",
              },
              {
                committee: "Interpol",
                topics: [
                  "The Question of Combating Transnational Organized Crime in Underground Medical Markets and Unregulated Surgical Practices",
                  "The Question of Strengthening Cross-Border Security Frameworks to Mitigate the Nexus of Narcotic Trafficking with a Focus on the Schengen Area and the Golden Triangle",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
              {
                committee: "WHO",
                topics: [
                  "The Question of Examining the Ethical and Regulatory Landscape for the Clinical Use of Psychedelic Drugs in the Treatment of Trauma-Based Mental Health Conditions",
                  "The Question of Examining Measures for Combating, Addressing, and Recovering from Pandemics or Severe Outbreaks",
                ],
                gradeRange: "Grade 9-12 · Year 10-13",
              },
            ]}
          />

                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">2-day schedule</h3>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[14px]">
                  <li>Day 1: registration, opening, icebreakers, three committee blocks.</li>
                  <li>Day 2: four committee blocks, voting procedures, closing ceremony.</li>
                  <li>Built-in buffer windows for transitions, photos, and submission deadlines.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">Digital-first systems</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px]">
                  <li>Digital note passing with moderation and reporting channels.</li>
                  <li>Live voting states for motions, amendments, and resolutions.</li>
                  <li>Delegate workspace tabs for guides, docs, stances, and speech notes.</li>
                  <li>Paper-light infrastructure to improve sustainability and clarity.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">Why these decisions</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px]">
                  <li>Tiered committee difficulty + ESL access lowers barriers to entry.</li>
                  <li>Chair training + handbook standards improve consistency and fairness.</li>
                  <li>Prep-to-wrap operations checklist protects delivery and impact.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black/85">Planning documents</h3>
                <p className="mt-2 text-[14px] text-black/75">
                  Planning files are intentionally not linked publicly because they include
                  sensitive details (including contact information). A redacted version can
                  be shared on request.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

function CommitteeBlock({
  title,
  rows,
}: {
  title: string;
  rows: { committee: string; topics: string[]; gradeRange: string }[];
}) {
  const tint =
    title === "Beginner"
      ? "from-emerald-500/20 to-emerald-300/5"
      : title === "Intermediate"
        ? "from-amber-400/20 to-amber-300/5"
        : "from-rose-400/20 to-rose-300/5";

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
      <div className={`bg-gradient-to-r ${tint} px-4 py-2.5`}>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-black/70">
          {title}
        </h3>
      </div>
      <div className="divide-y divide-black/10">
        {rows.map((row) => (
          <article key={row.committee} className="grid gap-3 px-4 py-4 md:grid-cols-[200px_1fr_170px]">
            <div className="text-[14px] font-semibold text-black/85">{row.committee}</div>
            <ol className="list-decimal space-y-1 pl-5 text-[13px] leading-relaxed text-black/75">
              {row.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ol>
            <div className="text-[12px] text-black/55 md:text-right">{row.gradeRange}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
