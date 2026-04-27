"use client";

import { BookOpen, Globe2, Mic, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { COMMUNITY_CARDS, type CommunityCard } from "@/lib/mun-resources";
import type { OsWindow } from "@/store/desktop-store";
import { WindowShell } from "../WindowShell";

const ICONS = {
  users: Users,
  mic: Mic,
  globe: Globe2,
  book: BookOpen,
} as const;

export function AppStoreWindow({ win }: { win: OsWindow }) {
  const sidebar = (
    <div className="flex flex-col gap-2 pr-1">
      <div className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wide text-white/35">
        Discover
      </div>
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-[12px] text-white/75 ring-1 ring-[#34C759]/25">
        Community Initiatives
      </div>
      <div className="rounded-xl border border-white/[0.06] bg-black/25 px-3 py-2 text-[12px] text-white/55">
        Workshops & tutoring tracks designed for measurable delegate growth.
      </div>
    </div>
  );

  return (
    <WindowShell win={win} accent="#34C759" sidebar={sidebar}>
      <div className="flex h-full flex-col bg-gradient-to-b from-black/25 to-transparent">
        <div className="border-b border-white/[0.06] px-4 py-3">
          <div className="text-[12px] font-medium text-white/85">
            Community programs
          </div>
          <div className="mt-1 text-[11px] text-white/45">
            Tap a tile — flip for impact metrics and delegate voices.
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-auto px-4 pb-6 pt-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {COMMUNITY_CARDS.map((card, i) => (
              <ImpactCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

function ImpactCard({
  card,
  index,
}: {
  card: CommunityCard;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = ICONS[card.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 380 }}
      className="h-44 [perspective:1200px]"
    >
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="relative h-full w-full text-left outline-none"
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: `linear-gradient(165deg, ${card.color}33, rgba(0,0,0,0.55))`,
            }}
          >
            <div className="flex h-full flex-col p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-black/35 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-[15px] font-semibold text-white">
                    {card.title}
                  </div>
                  <div className="truncate text-[12px] text-white/55">
                    {card.subtitle}
                  </div>
                </div>
              </div>
              <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-white/70">
                {card.frontBlurb}
              </p>
              <div className="mt-auto pt-3 text-[11px] text-white/40">
                Tap to flip — impact
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(0,0,0,0.72)] shadow-inner"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="flex h-full flex-col justify-between p-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-white/45">
                  Impact
                </div>
                <div className="mt-2 text-[14px] font-semibold leading-snug text-emerald-200/95">
                  {card.impactStat}
                </div>
              </div>
              <blockquote className="border-l-2 border-white/15 pl-3 text-[13px] italic leading-relaxed text-white/75">
                {card.testimonial}
              </blockquote>
              <div className="text-[11px] text-white/40">Tap to flip back</div>
            </div>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}
