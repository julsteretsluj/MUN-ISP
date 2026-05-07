import { ArrowDown, ArrowLeft, ArrowRight, CalendarDays, Star } from "lucide-react";
import { topicsForConference } from "@/lib/conference-topics";

type AwardCode = "BD" | "BPP" | "VC" | "HM";

type TimelineItem = {
  order: number;
  conference: string;
  committee: string;
  allocation: string;
  date: string;
  awards?: AwardCode[];
};

const TIMELINE: TimelineItem[] = [
  {
    order: 1,
    conference: "THAIMUN XII",
    committee: "UNODC",
    allocation: "Nicaragua",
    date: "22-24 March 2025",
  },
  {
    order: 2,
    conference: "NISMUN III",
    committee: "ECOSOC",
    allocation: "USA",
    date: "7 June 2025",
  },
  {
    order: 3,
    conference: "Regents MUN I",
    committee: "USCC",
    allocation: "Senator Elizabeth Warren",
    date: "20 September 2025",
    awards: ["BD"],
  },
  {
    order: 4,
    conference: "CISMUN IV",
    committee: "WHO",
    allocation: "Belgium",
    date: "25-26 October 2025",
  },
  {
    order: 5,
    conference: "STAMUN XI",
    committee: "WHO",
    allocation: "New Zealand",
    date: "16 November 2025",
    awards: ["BPP"],
  },
  {
    order: 6,
    conference: "SISBMUN III",
    committee: "UNOOSA",
    allocation: "Israel",
    date: "9-11 January 2026",
  },
  {
    order: 7,
    conference: "TSIMUN I",
    committee: "CSTD",
    allocation: "Germany",
    date: "31 January 2026",
    awards: ["BPP"],
  },
  {
    order: 8,
    conference: "NewtonMUN I",
    committee: "WHO",
    allocation: "Afghanistan",
    date: "14-15 February 2026",
    awards: ["VC"],
  },
  {
    order: 9,
    conference: "MUN07 IV",
    committee: "INTERPOL",
    allocation: "France",
    date: "7 March 2026",
    awards: ["BD", "BPP"],
  },
  {
    order: 10,
    conference: "THAIMUN XIII",
    committee: "USCC",
    allocation: "Ted Cruz (TX, Republican)",
    date: "20-22 March 2026",
  },
  {
    order: 11,
    conference: "HEXAMUN '26",
    committee: "HCC",
    allocation: "Pierre Mendes France",
    date: "25 April 2026",
    awards: ["HM"],
  },
];

const AWARD_LABELS: Record<AwardCode, string> = {
  BD: "Best Delegate",
  BPP: "Best Position Paper",
  VC: "Verbal Commendation",
  HM: "Honorable Mention",
};

function chunk<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) result.push(items.slice(i, i + size));
  return result;
}

export function ConferenceTimeline() {
  const rows = chunk(TIMELINE, 3);

  return (
    <section className="mb-12">
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
        Conference timeline
      </h2>
      <p className="mb-5 max-w-3xl text-[14px] leading-relaxed text-[rgba(31,41,55,0.68)]">
        A visual path of all conferences attended, inspired by your hand-drawn flow, now
        populated with your timeline dates.
      </p>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-[rgba(71,85,105,0.72)]">
          Start: March 2025
        </p>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-[rgba(71,85,105,0.72)]">
          End: April 2026
        </p>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {(Object.keys(AWARD_LABELS) as AwardCode[]).map((code) => (
          <span
            key={code}
            className="inline-flex items-center gap-1 rounded-full bg-[rgba(250,204,21,0.22)] px-2.5 py-1 text-[11px] font-medium text-[rgb(146,64,14)]"
          >
            <Star className="h-3.5 w-3.5 fill-[rgb(251,191,36)] text-[rgb(251,191,36)]" />
            {code} = {AWARD_LABELS[code]}
          </span>
        ))}
      </div>

      <div className="neu-raised space-y-4 p-4 sm:p-5">
        <div className="space-y-3 md:hidden">
          {TIMELINE.map((item) => {
            const topics = topicsForConference(item.conference);
            return (
              <article key={`mobile-${item.conference}`} className="neu-inset rounded-2xl p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--neu-accent)]">
                    {item.conference}
                  </p>
                  <span className="rounded-full bg-[rgba(59,130,246,0.14)] px-2 py-0.5 text-[10px] font-semibold text-[rgb(29,78,216)]">
                    #{String(item.order).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-[14px] font-medium text-[var(--foreground)]">
                  {item.committee} · {item.allocation}
                </p>
                {topics.length ? (
                  <p className="mt-2 text-[12px] leading-relaxed text-[rgba(71,85,105,0.78)]">
                    <span className="font-semibold text-[rgba(30,41,59,0.85)]">Topic:</span>{" "}
                    {topics[0]}
                  </p>
                ) : null}
                {item.awards?.length ? (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.awards.map((code) => (
                      <p
                        key={`mobile-${item.conference}-${code}`}
                        className="inline-flex items-center gap-1 rounded-full bg-[rgba(250,204,21,0.25)] px-2 py-1 text-[12px] font-medium text-[rgb(146,64,14)]"
                        title={AWARD_LABELS[code]}
                      >
                        <Star className="h-3.5 w-3.5 fill-[rgb(251,191,36)] text-[rgb(251,191,36)]" />
                        {code}
                      </p>
                    ))}
                  </div>
                ) : null}
                <div className="mt-3 rounded-xl border border-dashed border-[rgba(59,130,246,0.35)] bg-white/80 px-2.5 py-2 text-[12px] text-[rgba(30,41,59,0.75)]">
                  <span className="inline-flex items-center gap-1 font-medium text-[rgba(30,41,59,0.85)]">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Date:
                  </span>{" "}
                  {item.date}
                </div>
              </article>
            );
          })}
        </div>

        <div className="hidden space-y-4 md:block">
        {rows.map((row, rowIndex) => {
          const leftToRight = rowIndex % 2 === 0;
          const visualRow = leftToRight ? row : [...row].reverse();
          return (
            <div key={`row-${rowIndex}`}>
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                {visualRow.map((item, itemIndex) => {
                  const topics = topicsForConference(item.conference);
                  return (
                  <div
                    key={`${item.conference}-${item.committee}`}
                    className={itemIndex === 0 ? "md:col-start-1" : itemIndex === 1 ? "md:col-start-3" : "md:col-start-5"}
                  >
                    <article className="neu-inset h-full rounded-2xl p-4">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--neu-accent)]">
                          {item.conference}
                        </p>
                        <span className="rounded-full bg-[rgba(59,130,246,0.14)] px-2 py-0.5 text-[10px] font-semibold text-[rgb(29,78,216)]">
                          #{String(item.order).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1 text-[14px] font-medium text-[var(--foreground)]">
                        {item.committee} · {item.allocation}
                      </p>
                      {topics.length ? (
                        <p className="mt-2 text-[12px] leading-relaxed text-[rgba(71,85,105,0.78)]">
                          <span className="font-semibold text-[rgba(30,41,59,0.85)]">Topic:</span>{" "}
                          {topics[0]}
                        </p>
                      ) : null}
                      {item.awards?.length ? (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.awards.map((code) => (
                            <p
                              key={`${item.conference}-${code}`}
                              className="inline-flex items-center gap-1 rounded-full bg-[rgba(250,204,21,0.25)] px-2 py-1 text-[12px] font-medium text-[rgb(146,64,14)]"
                              title={AWARD_LABELS[code]}
                            >
                              <Star className="h-3.5 w-3.5 fill-[rgb(251,191,36)] text-[rgb(251,191,36)]" />
                              {code}
                            </p>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-3 rounded-xl border border-dashed border-[rgba(59,130,246,0.35)] bg-white/80 px-2.5 py-2 text-[12px] text-[rgba(30,41,59,0.75)]">
                        <span className="inline-flex items-center gap-1 font-medium text-[rgba(30,41,59,0.85)]">
                          <CalendarDays className="h-3.5 w-3.5" />
                          Date:
                        </span>{" "}
                        {item.date}
                      </div>
                    </article>
                  </div>
                )})}
                {visualRow.length > 1 ? (
                  <>
                    <div className="hidden place-content-center md:grid md:col-start-2">
                      {leftToRight ? (
                        <ArrowRight className="h-5 w-5 text-[rgba(59,130,246,0.85)]" />
                      ) : (
                        <ArrowLeft className="h-5 w-5 text-[rgba(59,130,246,0.85)]" />
                      )}
                    </div>
                    {visualRow.length > 2 ? (
                      <div className="hidden place-content-center md:grid md:col-start-4">
                        {leftToRight ? (
                          <ArrowRight className="h-5 w-5 text-[rgba(59,130,246,0.85)]" />
                        ) : (
                          <ArrowLeft className="h-5 w-5 text-[rgba(59,130,246,0.85)]" />
                        )}
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>

              {rowIndex < rows.length - 1 ? (
                <div className={`my-2 hidden md:flex ${leftToRight ? "justify-end pr-5" : "justify-start pl-5"}`}>
                  <ArrowDown className="h-5 w-5 text-[rgba(59,130,246,0.85)]" />
                </div>
              ) : null}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
