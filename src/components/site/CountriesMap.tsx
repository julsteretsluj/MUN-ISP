import { Star } from "lucide-react";
import { topicsForConference } from "@/lib/conference-topics";

type CountryPoint = {
  id: string;
  country: string;
  conference: string;
  committee: string;
  allocation: string;
  awards?: string;
  x: number;
  y: number;
};

const COUNTRY_POINTS: CountryPoint[] = [
  {
    id: "usa",
    country: "USA",
    conference: "NISMUN III",
    committee: "ECOSOC",
    allocation: "USA",
    x: 18,
    y: 40,
  },
  {
    id: "france",
    country: "France",
    conference: "MUN07 IV",
    committee: "INTERPOL",
    allocation: "France",
    awards: "Best Delegate + Best Position Paper",
    x: 45,
    y: 34,
  },
  {
    id: "belgium",
    country: "Belgium",
    conference: "CISMUN IV",
    committee: "WHO",
    allocation: "Belgium",
    x: 47,
    y: 32,
  },
  {
    id: "germany",
    country: "Germany",
    conference: "TSIMUN I",
    committee: "CSTD",
    allocation: "Germany",
    awards: "Best Position Paper",
    x: 50,
    y: 30,
  },
  {
    id: "afghanistan",
    country: "Afghanistan",
    conference: "NewtonMUN I",
    committee: "WHO",
    allocation: "Afghanistan",
    x: 61,
    y: 43,
  },
  {
    id: "israel",
    country: "Israel",
    conference: "SISBMUN III",
    committee: "UNOOSA",
    allocation: "Israel",
    x: 56,
    y: 44,
  },
  {
    id: "nicaragua",
    country: "Nicaragua",
    conference: "THAIMUN XII",
    committee: "UNODC",
    allocation: "Nicaragua",
    x: 24,
    y: 54,
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    conference: "STAMUN XI",
    committee: "WHO",
    allocation: "New Zealand",
    awards: "Best Position Paper",
    x: 86,
    y: 78,
  },
];

const NON_COUNTRY_ALLOCATIONS = [
  {
    conference: "HEXAMUN '26",
    committee: "HCC",
    allocation: "Pierre Mendes France",
    awards: "Honorable Mention",
  },
  {
    conference: "THAIMUN XIII",
    committee: "USCC",
    allocation: "Ted Cruz (TX, Republican)",
  },
  {
    conference: "Regents MUN I",
    committee: "US Congress",
    allocation: "Senator Elizabeth Warren",
    awards: "Best Delegate",
  },
  {
    conference: "MUN07 IV",
    committee: "INTERPOL",
    allocation: "Open Delegate allocation",
  },
];

export function CountriesMap() {
  return (
    <section className="mb-12">
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
        Countries represented map
      </h2>
      <p className="mb-5 max-w-3xl text-[14px] leading-relaxed text-[rgba(31,41,55,0.68)]">
        A digital snapshot of country allocations across conferences. Star markers indicate
        conferences where the allocation earned an award.
      </p>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <div className="neu-raised relative overflow-hidden p-4 sm:p-5">
          <div className="relative h-[360px] rounded-2xl bg-[linear-gradient(180deg,rgba(191,219,254,0.45),rgba(224,242,254,0.5))]">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(37,99,235,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.09)_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="absolute left-[7%] top-[22%] h-24 w-40 rounded-full bg-[rgba(52,211,153,0.22)] blur-sm" />
            <div className="absolute left-[42%] top-[18%] h-20 w-28 rounded-full bg-[rgba(168,85,247,0.2)] blur-sm" />
            <div className="absolute left-[55%] top-[44%] h-24 w-32 rounded-full bg-[rgba(59,130,246,0.18)] blur-sm" />
            <div className="absolute left-[18%] top-[52%] h-20 w-28 rounded-full bg-[rgba(250,204,21,0.2)] blur-sm" />
            <div className="absolute left-[79%] top-[70%] h-16 w-20 rounded-full bg-[rgba(244,114,182,0.2)] blur-sm" />

            {COUNTRY_POINTS.map((point) => (
              <div
                key={point.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <div className="neu-chip flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold text-[var(--foreground)]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--neu-accent)]" />
                  {point.country}
                  {point.awards ? (
                    <Star className="h-3.5 w-3.5 fill-[rgb(251,191,36)] text-[rgb(251,191,36)]" />
                  ) : null}
                </div>
              </div>
            ))}

            <div className="neu-inset absolute bottom-3 right-3 max-w-[280px] rounded-xl p-3 text-[12px] text-[rgba(31,41,55,0.78)]">
              <p className="mb-2 font-semibold text-[var(--foreground)]">
                Non-country allocations
              </p>
              <ul className="space-y-1.5">
                {NON_COUNTRY_ALLOCATIONS.map((item) => (
                  <li key={`${item.conference}-${item.allocation}`}>
                    <span className="font-semibold text-[var(--foreground)]">
                      {item.committee}
                    </span>{" "}
                    · {item.allocation}
                    {item.awards ? (
                      <span className="inline-flex items-center gap-1 pl-1 text-[rgb(180,83,9)]">
                        <Star className="h-3 w-3 fill-[rgb(251,191,36)] text-[rgb(251,191,36)]" />
                        {item.awards}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {COUNTRY_POINTS.map((point) => (
            <article key={`card-${point.id}`} className="neu-inset rounded-2xl p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--neu-accent)]">
                {point.conference}
              </p>
              <h3 className="mt-1 text-[17px] font-semibold text-[var(--foreground)]">
                {point.country}
              </h3>
              <p className="mt-2 text-[13px] text-[rgba(31,41,55,0.78)]">
                <span className="font-medium text-[var(--foreground)]">Committee:</span>{" "}
                {point.committee}
              </p>
              <p className="text-[13px] text-[rgba(31,41,55,0.78)]">
                <span className="font-medium text-[var(--foreground)]">Allocation:</span>{" "}
                {point.allocation}
              </p>
              {topicsForConference(point.conference).length ? (
                <p className="mt-1 text-[13px] text-[rgba(31,41,55,0.78)]">
                  <span className="font-medium text-[var(--foreground)]">Topic:</span>{" "}
                  {topicsForConference(point.conference)[0]}
                </p>
              ) : null}
              {point.awards ? (
                <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-[rgba(250,204,21,0.25)] px-2 py-1 text-[12px] font-medium text-[rgb(146,64,14)]">
                  <Star className="h-3.5 w-3.5 fill-[rgb(251,191,36)] text-[rgb(251,191,36)]" />
                  {point.awards}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
