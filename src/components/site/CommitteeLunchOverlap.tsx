"use client";

import { useMemo, useState } from "react";

type LunchWindow = { start: string; end: string };
type CommitteeLunch = {
  committee: string;
  day1: LunchWindow;
  day2: LunchWindow;
};

const COMMITTEE_LUNCH_WINDOWS: CommitteeLunch[] = [
  { committee: "ECOSOC", day1: { start: "11:00", end: "12:00" }, day2: { start: "12:30", end: "13:30" } },
  { committee: "UNICEF", day1: { start: "11:00", end: "12:00" }, day2: { start: "12:30", end: "13:30" } },
  { committee: "F1", day1: { start: "11:00", end: "12:00" }, day2: { start: "12:30", end: "13:30" } },
  { committee: "Press Corps", day1: { start: "11:00", end: "12:00" }, day2: { start: "12:30", end: "13:30" } },
  { committee: "WHO", day1: { start: "11:30", end: "12:30" }, day2: { start: "12:15", end: "13:15" } },
  { committee: "INTERPOL", day1: { start: "11:30", end: "12:30" }, day2: { start: "12:15", end: "13:15" } },
  { committee: "HSC", day1: { start: "11:30", end: "12:30" }, day2: { start: "12:15", end: "13:15" } },
  { committee: "UNSC", day1: { start: "11:30", end: "12:30" }, day2: { start: "12:15", end: "13:15" } },
  { committee: "UNODC", day1: { start: "12:00", end: "13:00" }, day2: { start: "12:00", end: "13:00" } },
  { committee: "UN Women", day1: { start: "12:00", end: "13:00" }, day2: { start: "12:00", end: "13:00" } },
  { committee: "DISEC", day1: { start: "12:00", end: "13:00" }, day2: { start: "12:00", end: "13:00" } },
  { committee: "FWC", day1: { start: "12:00", end: "13:00" }, day2: { start: "12:00", end: "13:00" } },
  { committee: "EU Parliament", day1: { start: "12:30", end: "13:30" }, day2: { start: "11:45", end: "12:45" } },
  { committee: "UNESCO", day1: { start: "12:30", end: "13:30" }, day2: { start: "11:45", end: "12:45" } },
  { committee: "UNHRC", day1: { start: "12:30", end: "13:30" }, day2: { start: "11:45", end: "12:45" } },
];

const MINUTES_START = 11 * 60;
const MINUTES_END = 13 * 60 + 30;
const RANGE = MINUTES_END - MINUTES_START;

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function barStyle(window: LunchWindow) {
  const start = toMinutes(window.start);
  const end = toMinutes(window.end);
  const leftPct = ((start - MINUTES_START) / RANGE) * 100;
  const widthPct = ((end - start) / RANGE) * 100;
  return { left: `${leftPct}%`, width: `${widthPct}%` };
}

export function CommitteeLunchOverlap() {
  const [selected, setSelected] = useState<string[]>([
    "ECOSOC",
    "WHO",
    "UNODC",
    "EU Parliament",
  ]);

  const selectedCommittees = useMemo(
    () => COMMITTEE_LUNCH_WINDOWS.filter((c) => selected.includes(c.committee)),
    [selected]
  );

  const toggle = (committee: string) => {
    setSelected((curr) => {
      if (curr.includes(committee)) return curr.filter((c) => c !== committee);
      if (curr.length >= 5) return curr;
      return [...curr, committee];
    });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-black/10 bg-white/70 p-3">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-black/60">
          Committee selector (up to 5)
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {COMMITTEE_LUNCH_WINDOWS.map((item) => {
            const checked = selected.includes(item.committee);
            const disabled = !checked && selected.length >= 5;
            return (
              <label
                key={item.committee}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] ${
                  checked
                    ? "bg-indigo-100/65 text-indigo-800"
                    : "bg-black/[0.03] text-black/70"
                } ${disabled ? "opacity-45" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  onChange={() => toggle(item.committee)}
                />
                <span>{item.committee}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-black/10 bg-white/70 p-3">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-black/60">
          Lunch overlap timeline (11:00-13:30)
        </p>
        <div className="mt-2 space-y-3">
          {selectedCommittees.map((item) => (
            <article key={`timeline-${item.committee}`} className="rounded-lg bg-black/[0.03] p-3">
              <p className="text-[13px] font-semibold text-black/80">{item.committee}</p>
              <div className="mt-2 space-y-2">
                <TimelineRow label="Day 1" window={item.day1} />
                <TimelineRow label="Day 2" window={item.day2} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineRow({ label, window }: { label: string; window: LunchWindow }) {
  const style = barStyle(window);
  return (
    <div className="grid grid-cols-[56px_1fr_120px] items-center gap-2 text-[12px]">
      <span className="font-medium text-black/70">{label}</span>
      <div className="relative h-6 rounded bg-white">
        <div className="absolute inset-y-1 rounded bg-indigo-300/80" style={style} />
      </div>
      <span className="text-black/65">
        {window.start}-{window.end}
      </span>
    </div>
  );
}
