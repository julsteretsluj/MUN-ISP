"use client";

import { create } from "zustand";

export type AppId = "finder" | "architect" | "terminal" | "appstore";

export interface OsWindow {
  id: string;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
  /** Saved geometry before maximize */
  snap?: { x: number; y: number; w: number; h: number };
}

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `win-${idCounter}`;
}

const APP_DEFAULTS: Record<
  AppId,
  { title: string; w: number; h: number; offset: number }
> = {
  finder: { title: "Finder — Delegate Prep", w: 920, h: 560, offset: 0 },
  architect: { title: "Architect — Planning", w: 880, h: 600, offset: 28 },
  terminal: { title: "Terminal — Digital Systems", w: 720, h: 440, offset: 56 },
  appstore: { title: "Community Initiatives", w: 900, h: 620, offset: 84 },
};

interface DesktopState {
  windows: OsWindow[];
  foregroundId: string | null;
  maxZ: number;
  spotlightOpen: boolean;

  openApp: (appId: AppId) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  setWindowRect: (
    id: string,
    patch: Partial<Pick<OsWindow, "x" | "y" | "w" | "h">>
  ) => void;
  toggleMaximize: (id: string, vw: number, vh: number, menuBar: number) => void;
  toggleSpotlight: () => void;
  setSpotlightOpen: (open: boolean) => void;
}

export const useDesktopStore = create<DesktopState>((set, get) => ({
  windows: [],
  foregroundId: null,
  maxZ: 10,
  spotlightOpen: false,

  openApp: (appId) => {
    const existing = get().windows.find((w) => w.appId === appId && !w.minimized);
    if (existing) {
      get().bringToFront(existing.id);
      set({ foregroundId: existing.id });
      return;
    }

    const minimized = get().windows.find((w) => w.appId === appId && w.minimized);
    if (minimized) {
      set((s) => ({
        windows: s.windows.map((w) =>
          w.id === minimized.id ? { ...w, minimized: false } : w
        ),
        foregroundId: minimized.id,
        maxZ: s.maxZ + 1,
      }));
      get().bringToFront(minimized.id);
      return;
    }

    const def = APP_DEFAULTS[appId];
    const baseZ = get().maxZ + 1;
    const vw =
      typeof window !== "undefined" ? window.innerWidth : 1280;
    const vh =
      typeof window !== "undefined" ? window.innerHeight : 800;

    const x = Math.min(48 + def.offset, Math.max(24, vw - def.w - 24));
    const y = Math.min(88 + def.offset, Math.max(64, vh - def.h - 120));

    const win: OsWindow = {
      id: nextId(),
      appId,
      title: def.title,
      x,
      y,
      w: Math.min(def.w, vw - 48),
      h: Math.min(def.h, vh - 140),
      z: baseZ,
      minimized: false,
      maximized: false,
    };

    set((s) => ({
      windows: [...s.windows, win],
      foregroundId: win.id,
      maxZ: baseZ,
    }));
  },

  closeWindow: (id) =>
    set((s) => {
      const rest = s.windows.filter((w) => w.id !== id);
      const fg =
        s.foregroundId === id
          ? rest.length
            ? rest.reduce((a, b) => (a.z >= b.z ? a : b)).id
            : null
          : s.foregroundId;
      return { windows: rest, foregroundId: fg };
    }),

  minimizeWindow: (id) =>
    set((s) => ({
      windows: s.windows.map((w) =>
        w.id === id ? { ...w, minimized: true, maximized: false } : w
      ),
      foregroundId: s.foregroundId === id ? null : s.foregroundId,
    })),

  focusWindow: (id) => {
    get().bringToFront(id);
    set({ foregroundId: id });
  },

  bringToFront: (id) => {
    set((s) => {
      const nz = s.maxZ + 1;
      return {
        maxZ: nz,
        foregroundId: id,
        windows: s.windows.map((w) => (w.id === id ? { ...w, z: nz } : w)),
      };
    });
  },

  setWindowRect: (id, patch) =>
    set((s) => ({
      windows: s.windows.map((w) =>
        w.id === id ? { ...w, ...patch } : w
      ),
    })),

  toggleMaximize: (id, vw, vh, menuBar) => {
    const w = get().windows.find((x) => x.id === id);
    if (!w) return;
    if (w.maximized && w.snap) {
      const { snap } = w;
      set((s) => ({
        windows: s.windows.map((win) =>
          win.id === id
            ? {
                ...win,
                maximized: false,
                snap: undefined,
                x: snap.x,
                y: snap.y,
                w: snap.w,
                h: snap.h,
              }
            : win
        ),
      }));
      return;
    }
    set((s) => ({
      windows: s.windows.map((win) =>
        win.id === id
          ? {
              ...win,
              maximized: true,
              snap: { x: win.x, y: win.y, w: win.w, h: win.h },
              x: 0,
              y: menuBar,
              w: vw,
              h: vh - menuBar,
            }
          : win
      ),
    }));
  },

  toggleSpotlight: () =>
    set((s) => ({ spotlightOpen: !s.spotlightOpen })),

  setSpotlightOpen: (open) => set({ spotlightOpen: open }),
}));
