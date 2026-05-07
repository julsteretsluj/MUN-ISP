"use client";

import dynamic from "next/dynamic";
import { Flag, Globe2, Star } from "lucide-react";
import { topicsForConference } from "@/lib/conference-topics";

type CountryPoint = {
  id: string;
  country: string;
  conference: string;
  committee: string;
  allocation: string;
  awards?: string;
  lat: number;
  lng: number;
};

const COUNTRY_POINTS: CountryPoint[] = [
  {
    id: "nicaragua",
    country: "Nicaragua",
    conference: "THAIMUN XII",
    committee: "UNODC",
    allocation: "Nicaragua",
    lat: 12.9,
    lng: -85.0,
  },
  {
    id: "usa",
    country: "USA",
    conference: "NISMUN III",
    committee: "ECOSOC",
    allocation: "USA",
    lat: 39.8,
    lng: -98.6,
  },
  {
    id: "belgium",
    country: "Belgium",
    conference: "CISMUN IV",
    committee: "WHO",
    allocation: "Belgium",
    lat: 50.8,
    lng: 4.5,
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    conference: "STAMUN XI",
    committee: "WHO",
    allocation: "New Zealand",
    awards: "Best Position Paper",
    lat: -41.2,
    lng: 174.8,
  },
  {
    id: "israel",
    country: "Israel",
    conference: "SISBMUN III",
    committee: "UNOOSA",
    allocation: "Israel",
    lat: 31.0,
    lng: 35.0,
  },
  {
    id: "germany",
    country: "Germany",
    conference: "TSIMUN I",
    committee: "CSTD",
    allocation: "Germany",
    awards: "Best Position Paper",
    lat: 51.2,
    lng: 10.4,
  },
  {
    id: "afghanistan",
    country: "Afghanistan",
    conference: "NewtonMUN I",
    committee: "WHO",
    allocation: "Afghanistan",
    awards: "Verbal Commendation",
    lat: 33.9,
    lng: 67.7,
  },
  {
    id: "france",
    country: "France",
    conference: "MUN07 IV",
    committee: "INTERPOL",
    allocation: "France",
    awards: "Best Delegate + Best Position Paper",
    lat: 46.2,
    lng: 2.2,
  },
];

const NON_COUNTRY_ALLOCATIONS = [
  {
    conference: "Regents MUN I",
    committee: "US Congress",
    allocation: "Senator Elizabeth Warren",
    awards: "Best Delegate",
  },
  {
    conference: "THAIMUN XIII",
    committee: "USCC",
    allocation: "Ted Cruz (TX, Republican)",
  },
  {
    conference: "HEXAMUN '26",
    committee: "HCC",
    allocation: "Pierre Mendes France",
    awards: "Honorable Mention",
  },
];

const LeafletConferenceMap = dynamic(
  () =>
    import("./LeafletConferenceMap").then((mod) => mod.LeafletConferenceMap),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full w-full place-items-center bg-[linear-gradient(180deg,rgba(239,246,255,0.9),rgba(224,231,255,0.7))] text-[13px] text-[rgba(71,85,105,0.8)]">
        Loading map...
      </div>
    ),
  }
);

export function CountriesMap() {
  return (
    <section className="mb-12">
      <h2 className="mb-3 flex flex-wrap items-center gap-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
        <span className="neu-chip grid h-11 w-11 shrink-0 place-items-center rounded-2xl">
          <Globe2 className="h-5 w-5 text-[var(--neu-accent)]" aria-hidden />
        </span>
        <span>
          <span className="mr-2" aria-hidden>
            🗺️
          </span>
          Countries represented map
        </span>
      </h2>
      <p className="mb-5 max-w-3xl text-[14px] leading-relaxed text-[rgba(31,41,55,0.68)]">
        A digital snapshot of country allocations across conferences. Star markers indicate
        conferences where the allocation earned an award.
      </p>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <div className="neu-raised relative overflow-hidden p-4 sm:p-5">
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.26)]">
            <LeafletConferenceMap points={COUNTRY_POINTS} />
          </div>
          <div className="neu-inset mt-3 rounded-xl p-3 text-[12px] text-[rgba(31,41,55,0.78)]">
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

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {COUNTRY_POINTS.map((point) => (
            <article key={`card-${point.id}`} className="neu-inset rounded-2xl p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--neu-accent)]">
                  {point.conference}
                </p>
                <span className="neu-chip grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[var(--neu-accent)] [&_svg]:h-4 [&_svg]:w-4">
                  <Flag aria-hidden />
                </span>
              </div>
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
