"use client";

import { CalendarRange, LayoutGrid } from "lucide-react";
import { useState } from "react";
import {
  CONFERENCE_TIMELINE,
  LOGISTICS_MATRIX,
} from "@/lib/mun-resources";
import type { OsWindow } from "@/store/desktop-store";
import { WindowShell } from "../WindowShell";

type View = "matrix" | "timeline";

export function ArchitectWindow({ win }: { win: OsWindow }) {
  const [view, setView] = useState<View>("matrix");

  const sidebar = (
    <div className="flex flex-col gap-1 pr-1">
      <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-white/35">
        Secretariat
      </div>
      <button
        type="button"
        onClick={() => setView("matrix")}
        className={`flex items-center gap-2 rounded-lg px-2 py-2 text-left text-[13px] transition ${
          view === "matrix"
            ? "bg-[#AF52DE]/25 text-white ring-1 ring-[#AF52DE]/35"
            : "text-white/65 hover:bg-white/[0.05]"
        }`}
      >
        <LayoutGrid className="h-4 w-4" />
        Logistics Matrix
      </button>
      <button
        type="button"
        onClick={() => setView("timeline")}
        className={`flex items-center gap-2 rounded-lg px-2 py-2 text-left text-[13px] transition ${
          view === "timeline"
            ? "bg-[#AF52DE]/25 text-white ring-1 ring-[#AF52DE]/35"
            : "text-white/65 hover:bg-white/[0.05]"
        }`}
      >
        <CalendarRange className="h-4 w-4" />
        Timeline
      </button>
      <p className="mt-4 px-2 text-[11px] leading-snug text-white/40">
        Conference planning & logistics — Numbers-style tables and a lifecycle
        timeline from concept to closing ceremony.
      </p>
    </div>
  );

  return (
    <WindowShell win={win} accent="#AF52DE" sidebar={sidebar}>
      <div className="flex h-full flex-col bg-gradient-to-b from-black/25 to-transparent">
        <div className="border-b border-white/[0.06] px-4 py-3">
          <div className="text-[12px] font-medium text-white/85">
            Architect — Secretariat perspective
          </div>
          <div className="mt-1 text-[11px] text-white/45">
            {view === "matrix"
              ? "Operational readiness across owners and runway."
              : "Lifecycle narrative from mandate to retrospective."}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto px-4 pb-4 pt-4">
          {view === "matrix" ? <LogisticsTable /> : <TimelineBoard />}
        </div>
      </div>
    </WindowShell>
  );
}

function LogisticsTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] shadow-inner">
      <table className="w-full border-collapse text-[13px]">
        <thead className="bg-white/[0.06] text-left text-[11px] uppercase tracking-wide text-white/45">
          <tr>
            <th className="px-4 py-3 font-medium">Workstream</th>
            <th className="px-4 py-3 font-medium">Owner</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Due</th>
          </tr>
        </thead>
        <tbody>
          {LOGISTICS_MATRIX.map((row, idx) => (
            <tr
              key={row.workstream}
              className={`border-t border-white/[0.05] ${
                idx % 2 === 0 ? "bg-black/15" : "bg-black/05"
              }`}
            >
              <td className="px-4 py-3 font-medium text-white/90">
                {row.workstream}
              </td>
              <td className="px-4 py-3 text-white/65">{row.owner}</td>
              <td className="px-4 py-3">
                <StatusPill status={row.status} />
              </td>
              <td className="px-4 py-3 tabular-nums text-white/55">
                {row.due}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusPill({
  status,
}: {
  status: "On track" | "Risk" | "Done";
}) {
  const cls =
    status === "Done"
      ? "bg-emerald-400/15 text-emerald-200 ring-emerald-400/25"
      : status === "Risk"
        ? "bg-amber-400/15 text-amber-100 ring-amber-400/25"
        : "bg-sky-400/15 text-sky-100 ring-sky-400/25";
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${cls}`}
    >
      {status}
    </span>
  );
}

function TimelineBoard() {
  return (
    <div className="relative pl-4">
      <div className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-[#AF52DE]/60 via-white/25 to-emerald-300/40" />
      <ol className="space-y-5">
        {CONFERENCE_TIMELINE.map((t) => (
          <li key={t.phase} className="relative pl-8">
            <span className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-[#AF52DE]/25 text-[11px] font-semibold text-white/90 shadow-inner ring-2 ring-black/40">
              •
            </span>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-[14px] font-semibold text-white/90">
                  {t.phase}
                </div>
                <div className="text-[11px] tabular-nums text-white/45">
                  {t.window}
                </div>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                {t.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
