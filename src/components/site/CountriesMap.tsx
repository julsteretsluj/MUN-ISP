"use client";

import { Star } from "lucide-react";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
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
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.26)]">
            <MapContainer
              center={[20, 10]}
              zoom={1.4}
              minZoom={1.2}
              maxZoom={5}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              {COUNTRY_POINTS.map((point) => (
                <CircleMarker
                  key={point.id}
                  center={[point.lat, point.lng]}
                  radius={point.awards ? 8 : 6}
                  pathOptions={{
                    color: point.awards ? "rgb(251,191,36)" : "rgb(79,70,229)",
                    fillColor: point.awards ? "rgb(251,191,36)" : "rgb(79,70,229)",
                    fillOpacity: 0.85,
                    weight: 2,
                  }}
                >
                  <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                    <div className="text-[12px] font-medium">
                      {point.country} · {point.committee}
                      {point.awards ? ` · ${point.awards}` : ""}
                    </div>
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>

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
