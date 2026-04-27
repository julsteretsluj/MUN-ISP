"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { OsWindow } from "@/store/desktop-store";
import { useDesktopStore } from "@/store/desktop-store";
import { TrafficLights } from "./TrafficLights";

const MENU_BAR = 40;
const MIN_W = 380;
const MIN_H = 260;

type Props = {
  win: OsWindow;
  accent: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
};

export function WindowShell({ win, accent, children, sidebar }: Props) {
  const closeWindow = useDesktopStore((s) => s.closeWindow);
  const minimizeWindow = useDesktopStore((s) => s.minimizeWindow);
  const bringToFront = useDesktopStore((s) => s.bringToFront);
  const focusWindow = useDesktopStore((s) => s.focusWindow);
  const setWindowRect = useDesktopStore((s) => s.setWindowRect);
  const toggleMaximize = useDesktopStore((s) => s.toggleMaximize);

  const dragging = useRef(false);
  const resizing = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, wx: 0, wy: 0 });
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 });

  const [viewport, setViewport] = useState({ w: 1200, h: 800 });

  useEffect(() => {
    const r = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    r();
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  const clampToViewport = useCallback(
    (x: number, y: number, w: number, h: number) => {
      const maxX = Math.max(0, viewport.w - w);
      const maxY = Math.max(MENU_BAR, viewport.h - h);
      return {
        x: Math.min(Math.max(0, x), maxX),
        y: Math.min(Math.max(MENU_BAR, y), maxY),
      };
    },
    [viewport]
  );

  const onTitlePointerDown = (e: React.PointerEvent) => {
    if (win.maximized) return;
    e.preventDefault();
    dragging.current = true;
    bringToFront(win.id);
    focusWindow(win.id);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      wx: win.x,
      wy: win.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onTitlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || win.maximized) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const nx = dragStart.current.wx + dx;
    const ny = dragStart.current.wy + dy;
    const c = clampToViewport(nx, ny, win.w, win.h);
    setWindowRect(win.id, { x: c.x, y: c.y });
  };

  const onTitlePointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const onResizePointerDown = (e: React.PointerEvent) => {
    if (win.maximized) return;
    e.preventDefault();
    e.stopPropagation();
    resizing.current = true;
    bringToFront(win.id);
    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      w: win.w,
      h: win.h,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onResizePointerMove = (e: React.PointerEvent) => {
    if (!resizing.current || win.maximized) return;
    const dx = e.clientX - resizeStart.current.x;
    const dy = e.clientY - resizeStart.current.y;
    const nw = Math.max(MIN_W, resizeStart.current.w + dx);
    const nh = Math.max(MIN_H, resizeStart.current.h + dy);
    const maxW = viewport.w - win.x;
    const maxH = viewport.h - win.y;
    setWindowRect(win.id, {
      w: Math.min(nw, maxW),
      h: Math.min(nh, maxH),
    });
  };

  const onResizePointerUp = (e: React.PointerEvent) => {
    resizing.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const glass = useMemo(
    () =>
      "rounded-[14px] border border-white/[0.08] bg-[rgba(0,0,0,0.42)] shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-[20px]",
    []
  );

  if (win.minimized) return null;

  return (
    <motion.div
      layout
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 34 }}
      className="fixed overflow-hidden"
      style={{
        left: win.x,
        top: win.y,
        width: win.w,
        height: win.h,
        zIndex: win.z,
      }}
      onMouseDown={() => bringToFront(win.id)}
    >
      <div className={`flex h-full w-full flex-col ${glass}`}>
        <header
          className="relative flex cursor-default select-none items-center gap-3 border-b border-white/[0.06] px-3 py-2"
          style={{
            background: `linear-gradient(180deg, ${accent}22, transparent)`,
          }}
          onPointerDown={onTitlePointerDown}
          onPointerMove={onTitlePointerMove}
          onPointerUp={onTitlePointerUp}
          onPointerCancel={onTitlePointerUp}
        >
          <TrafficLights
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onZoom={() =>
              toggleMaximize(win.id, viewport.w, viewport.h, MENU_BAR)
            }
          />
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center text-center">
            <span className="truncate text-[13px] font-medium tracking-tight text-white/90">
              {win.title}
            </span>
          </div>
          <div className="w-[52px]" aria-hidden />
        </header>

        <div className="flex min-h-0 flex-1">
          {sidebar ? (
            <aside className="w-[196px] shrink-0 border-r border-white/[0.06] bg-black/25 py-3 pl-3 pr-2">
              {sidebar}
            </aside>
          ) : null}
          <div className="min-h-0 min-w-0 flex-1 overflow-hidden">
            {children}
          </div>
        </div>

        {!win.maximized ? (
          <button
            type="button"
            aria-label="Resize"
            className="absolute bottom-1 right-1 h-4 w-4 cursor-nwse-resize opacity-40 hover:opacity-90"
            onPointerDown={onResizePointerDown}
            onPointerMove={onResizePointerMove}
            onPointerUp={onResizePointerUp}
            onPointerCancel={onResizePointerUp}
          >
            <svg viewBox="0 0 12 12" className="text-white/80">
              <path
                d="M10 12h2v-2M6 12h2V8M2 12h2V4"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}
