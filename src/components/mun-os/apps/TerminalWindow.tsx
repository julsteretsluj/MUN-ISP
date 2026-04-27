"use client";

import { Activity, Cpu, Radio } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { OsWindow } from "@/store/desktop-store";
import { WindowShell } from "../WindowShell";

type Packet = {
  id: string;
  t: string;
  topic: string;
  payload: string;
};

const TOPICS = [
  "delegate.presence",
  "committee.motion",
  "crisis.inject",
  "vote.tally",
  "live.timer",
];

export function TerminalWindow({ win }: { win: OsWindow }) {
  const [packets, setPackets] = useState<Packet[]>([]);

  useEffect(() => {
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      const topic = TOPICS[n % TOPICS.length];
      const pkt: Packet = {
        id: `pkt-${Date.now()}-${n}`,
        t: new Date().toISOString().split("T")[1].slice(0, 12),
        topic,
        payload: samplePayload(topic),
      };
      setPackets((prev) => [pkt, ...prev].slice(0, 42));
    }, 720);
    return () => window.clearInterval(id);
  }, []);

  const sidebar = (
    <div className="flex flex-col gap-3 pr-1">
      <div className="px-2 text-[11px] font-semibold uppercase tracking-wide text-white/35">
        Sessions
      </div>
      <div className="rounded-xl border border-white/[0.06] bg-black/30 p-3">
        <div className="flex items-center gap-2 text-[12px] font-medium text-white/85">
          <Radio className="h-4 w-4 text-[#FF9500]" />
          Live bus
        </div>
        <p className="mt-2 text-[11px] leading-snug text-white/45">
          Simulated packets visualize how telemetry flows through the digital
          spine during committee hours.
        </p>
      </div>
      <div className="rounded-xl border border-white/[0.06] bg-black/30 p-3">
        <div className="flex items-center gap-2 text-[12px] font-medium text-white/85">
          <Cpu className="h-4 w-4 text-emerald-300/90" />
          Edge node
        </div>
        <p className="mt-2 font-mono text-[11px] text-white/45">
          mun-edge-01 · ws://cluster.local/mun/stream
        </p>
      </div>
    </div>
  );

  const headerLines = useMemo(
    () => [
      "MUN Digital Systems — real-time telemetry prototype",
      "Type: WebSocket fan-out · JSON envelopes · idempotent handlers",
      "Press anywhere in this window to focus the packet stream.",
    ],
    []
  );

  return (
    <WindowShell win={win} accent="#FF9500" sidebar={sidebar}>
      <div className="flex h-full flex-col bg-[#0b0d12] font-mono text-[12px] leading-relaxed text-emerald-100/90">
        <div className="border-b border-white/[0.06] px-4 py-3 text-[11px] text-white/45">
          <div className="flex items-center gap-2 text-white/70">
            <Activity className="h-4 w-4 text-[#FF9500]" />
            munctl stream — session alpha
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden px-4 py-3">
          <div className="mb-4 space-y-1 text-[11px] text-emerald-200/75">
            {headerLines.map((line) => (
              <div key={line}># {line}</div>
            ))}
          </div>
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] uppercase tracking-wide text-white/35">
            <span>Topic</span>
            <span className="hidden sm:inline">Timestamp</span>
            <span className="text-right">Payload</span>
          </div>
          <div className="relative mt-2 h-[min(52vh,420px)] overflow-hidden rounded-lg border border-white/[0.06] bg-black/40">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,149,0,0.06),transparent_40%)]" />
            <div className="relative h-full overflow-auto px-2 py-2">
              <AnimatePresence initial={false}>
                {packets.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-white/[0.04] py-2 text-[11px] sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
                  >
                    <span className="truncate text-sky-200/90">{p.topic}</span>
                    <span className="hidden tabular-nums text-white/35 sm:block">
                      {p.t}
                    </span>
                    <span className="col-span-2 truncate text-right text-emerald-100/85 sm:col-span-1 sm:text-left">
                      {p.payload}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

function samplePayload(topic: string): string {
  const samples: Record<string, string> = {
    "delegate.presence":
      '{"delegation":"SG-04","state":"floor","confidence":0.98}',
    "committee.motion":
      '{"motion":"mod-caucus","durationMin":10,"sponsors":3}',
    "crisis.inject":
      '{"lane":"economic","severity":2,"requiresVote":false}',
    "vote.tally":
      '{"question":"SUBS-AMND-2","yes":22,"no":7,"abstain":4}',
    "live.timer":
      '{"phase":"speakers-list","remainingSec":184,"extension":false}',
  };
  return samples[topic] ?? '{"ok":true}';
}
