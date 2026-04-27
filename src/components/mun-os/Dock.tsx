"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  StickyNote,
  Store,
  TerminalSquare,
} from "lucide-react";
import type { AppId } from "@/store/desktop-store";
import { useDesktopStore } from "@/store/desktop-store";

const ITEMS: {
  id: AppId;
  label: string;
  icon: typeof FolderOpen;
  color: string;
}[] = [
  {
    id: "finder",
    label: "Finder",
    icon: FolderOpen,
    color: "#007AFF",
  },
  {
    id: "architect",
    label: "Notes",
    icon: StickyNote,
    color: "#AF52DE",
  },
  {
    id: "terminal",
    label: "Terminal",
    icon: TerminalSquare,
    color: "#FF9500",
  },
  {
    id: "appstore",
    label: "App Store",
    icon: Store,
    color: "#34C759",
  },
];

export function Dock() {
  const openApp = useDesktopStore((s) => s.openApp);

  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-[4000] flex -translate-x-1/2 justify-center px-4">
      <nav
        className="pointer-events-auto flex items-end gap-2 rounded-[22px] border border-white/[0.08] bg-[rgba(0,0,0,0.42)] px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-[20px]"
        aria-label="Application dock"
      >
        {ITEMS.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => openApp(item.id)}
            title={item.label}
            aria-label={`Open ${item.label}`}
            whileHover={{ scale: 1.14, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group relative flex flex-col items-center gap-1 outline-none"
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-[18px] shadow-inner ring-1 ring-black/25"
              style={{
                background: `linear-gradient(165deg, ${item.color}55, rgba(0,0,0,0.35))`,
              }}
            >
              <item.icon className="h-6 w-6 text-white drop-shadow-sm" />
            </span>
            <span className="pointer-events-none absolute -top-10 whitespace-nowrap rounded-lg border border-white/[0.08] bg-black/70 px-2 py-1 text-[11px] text-white/90 opacity-0 shadow-lg backdrop-blur-md transition group-hover:opacity-100">
              {item.label}
            </span>
          </motion.button>
        ))}
      </nav>
    </div>
  );
}
