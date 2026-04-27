"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AppId } from "@/store/desktop-store";
import { buildSpotlightIndex } from "@/lib/mun-resources";
import { useDesktopStore } from "@/store/desktop-store";

function score(query: string, text: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 1;
  const t = text.toLowerCase();
  if (t === q) return 100;
  if (t.startsWith(q)) return 80;
  if (t.includes(q)) return 60;
  const qw = q.split(/\s+/).filter(Boolean);
  let pts = 0;
  for (const w of qw) {
    if (t.includes(w)) pts += 20;
  }
  return pts;
}

export function Spotlight() {
  const open = useDesktopStore((s) => s.spotlightOpen);
  const setOpen = useDesktopStore((s) => s.setSpotlightOpen);
  const openApp = useDesktopStore((s) => s.openApp);

  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildSpotlightIndex(), []);

  const results = useMemo(() => {
    const ranked = index
      .map((item) => {
        const blob = `${item.title} ${item.subtitle} ${item.keywords.join(" ")}`;
        const s = score(q, blob);
        return { item, s };
      })
      .filter((x) => x.s > 0 || !q.trim())
      .sort((a, b) => b.s - a.s);

    return (q.trim() ? ranked : index.map((item) => ({ item, s: 1 }))).slice(
      0,
      12
    );
  }, [index, q]);

  const pick = useCallback(
    (appId: AppId) => {
      openApp(appId);
      setOpen(false);
      setQ("");
    },
    [openApp, setOpen]
  );

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const s = useDesktopStore.getState();
        s.setSpotlightOpen(!s.spotlightOpen);
      }
      if (e.key === "Escape") {
        useDesktopStore.getState().setSpotlightOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[6000] flex items-start justify-center pt-[18vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close Spotlight"
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            onClick={() => {
              setOpen(false);
              setQ("");
            }}
          />
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(0,0,0,0.55)] shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-[20px]"
            role="dialog"
            aria-modal="true"
            aria-label="Spotlight Search"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-white/45" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search MUN resources…"
                className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/35"
              />
              <kbd className="hidden rounded-md border border-white/[0.08] bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] text-white/45 sm:inline">
                ⌘K
              </kbd>
            </div>
            <ul className="max-h-[min(52vh,420px)] overflow-auto py-2">
              {results.map(({ item }) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => pick(item.appId)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-white/[0.06]"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0 text-white/35" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[14px] text-white/90">
                        {item.title}
                      </div>
                      <div className="truncate text-[12px] text-white/45">
                        {item.subtitle}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/[0.06] px-4 py-2 text-center text-[11px] text-white/40">
              Select an item to jump to its app. Prep, planning, digital, community.
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
