"use client";

import {
  ChevronDown,
  Globe2,
  Search,
  Signal,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { useDesktopStore } from "@/store/desktop-store";
import { useEffect, useState } from "react";

export function MenuBar() {
  const setSpotlightOpen = useDesktopStore((s) => s.setSpotlightOpen);
  const [time, setTime] = useState("");
  const [statusOpen, setStatusOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date())
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[5000] flex h-10 items-center justify-between border-b border-white/[0.06] bg-[rgba(0,0,0,0.45)] px-4 text-[13px] text-white/85 backdrop-blur-[20px]">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
            <Globe2 className="h-4 w-4 text-sky-300" aria-hidden />
          </span>
          <span>MUN-OS</span>
        </div>
        <nav className="hidden items-center gap-4 text-[12px] text-white/55 sm:flex">
          <Link href="/" className="transition hover:text-white/90">
            Learning site
          </Link>
          <Link href="/resources" className="transition hover:text-white/90">
            Resources
          </Link>
          <Link href="/#start-here" className="transition hover:text-white/90">
            Start here
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => setSpotlightOpen(true)}
          className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[12px] text-white/65 transition hover:bg-white/[0.06] hover:text-white"
          title="Spotlight Search (⌘K)"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search</span>
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={() => setStatusOpen((o) => !o)}
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] text-white/75 transition hover:bg-white/[0.06] hover:text-white"
          >
            System Status
            <ChevronDown className="h-3.5 w-3.5 opacity-70" />
          </button>
          {statusOpen ? (
            <>
              <button
                type="button"
                aria-label="Dismiss menu"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setStatusOpen(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-1 w-56 overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(0,0,0,0.55)] py-2 text-[12px] shadow-2xl backdrop-blur-[20px]">
                <div className="px-3 py-2 text-[11px] uppercase tracking-wide text-white/45">
                  Services
                </div>
                <StatusRow icon={Wifi} label="Conference edge" value="Nominal" />
                <StatusRow icon={Signal} label="Telemetry bus" value="Healthy" />
                <div className="my-2 h-px bg-white/[0.06]" />
                <div className="px-3 py-2 text-[11px] text-white/50">
                  All systems nominal. Crisis sim idle.
                </div>
              </div>
            </>
          ) : null}
        </div>
        <time className="tabular-nums text-white/85">{time}</time>
      </div>
    </header>
  );
}

function StatusRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 text-white/85">
      <Icon className="h-4 w-4 text-emerald-300/90" />
      <div className="flex min-w-0 flex-1 flex-col leading-tight">
        <span className="text-[11px] text-white/55">{label}</span>
        <span className="truncate text-[12px]">{value}</span>
      </div>
    </div>
  );
}
