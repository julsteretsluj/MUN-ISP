"use client";

import {
  Award,
  ChevronRight,
  FileStack,
  FileText,
  FolderSearch,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { OsWindow } from "@/store/desktop-store";
import {
  FINDER_RESOURCES,
  type FinderCategory,
  type FinderResource,
} from "@/lib/mun-resources";
import { QuickLook } from "../QuickLook";
import { WindowShell } from "../WindowShell";

const CAT_META: Record<
  FinderCategory,
  { title: string; icon: typeof FolderSearch }
> = {
  research: { title: "Research Folders", icon: FolderSearch },
  "position-papers": { title: "Position Papers", icon: FileText },
  "speech-drafts": { title: "Speech Drafts", icon: FileStack },
  resolutions: { title: "Resolutions", icon: ScrollText },
  certificates: { title: "Certificates", icon: Award },
};

export function FinderWindow({ win }: { win: OsWindow }) {
  const [cat, setCat] = useState<FinderCategory>("research");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [preview, setPreview] = useState<FinderResource | null>(null);

  const rows = useMemo(
    () => FINDER_RESOURCES.filter((r) => r.category === cat),
    [cat]
  );

  const selected = useMemo(() => {
    if (selectedId) {
      const hit = rows.find((r) => r.id === selectedId);
      if (hit) return hit;
    }
    return rows[0] ?? null;
  }, [rows, selectedId]);

  const selectCategory = useCallback((c: FinderCategory) => {
    setCat(c);
    setSelectedId(null);
  }, []);

  const openQuickLook = useCallback((r: FinderResource) => {
    setPreview(r);
  }, []);

  useEffect(() => {
    if (preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
      if (selected) openQuickLook(selected);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, openQuickLook, preview]);

  const sidebar = (
    <div className="flex flex-col gap-1 pr-1">
      <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-white/35">
        Library
      </div>
      {(Object.keys(CAT_META) as FinderCategory[]).map((key) => {
        const meta = CAT_META[key];
        const Icon = meta.icon;
        const active = cat === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => selectCategory(key)}
            className={`flex items-center gap-2 rounded-lg px-2 py-2 text-left text-[13px] transition ${
              active
                ? "bg-[#007AFF]/25 text-white ring-1 ring-[#007AFF]/35"
                : "text-white/65 hover:bg-white/[0.05]"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0 opacity-90" />
            <span className="min-w-0 flex-1 truncate">{meta.title}</span>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-35" />
          </button>
        );
      })}
      <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
        <div className="flex items-center gap-2 text-[12px] font-medium text-white/85">
          <Sparkles className="h-4 w-4 text-[#007AFF]" />
          Quick Look
        </div>
        <p className="mt-2 text-[11px] leading-snug text-white/45">
          Select a file, press Space for a fullscreen preview — inspired by
          macOS Quick Look.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <WindowShell win={win} accent="#007AFF" sidebar={sidebar}>
        <div className="flex h-full flex-col bg-gradient-to-b from-black/30 to-transparent">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
            <div className="text-[12px] text-white/45">
              Delegate Prep Catalog
            </div>
            <div className="text-[11px] text-white/35">
              {rows.length} items
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-2 pb-3 pt-2">
            <table className="w-full border-collapse text-[13px]">
              <thead className="sticky top-0 bg-black/55 backdrop-blur-md">
                <tr className="border-b border-white/[0.06] text-left text-[11px] uppercase tracking-wide text-white/35">
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="hidden px-3 py-2 font-medium sm:table-cell">
                    Kind
                  </th>
                  <th className="hidden px-3 py-2 text-right font-medium md:table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const active = selected?.id === r.id;
                  return (
                    <tr
                      key={r.id}
                      className={`cursor-pointer border-b border-white/[0.04] transition hover:bg-white/[0.04] ${
                        active ? "bg-[#007AFF]/15" : ""
                      }`}
                      onClick={() => setSelectedId(r.id)}
                      onDoubleClick={() => openQuickLook(r)}
                    >
                      <td className="px-3 py-2.5 font-medium text-white/90">
                        {r.label}
                      </td>
                      <td className="hidden px-3 py-2.5 text-white/45 sm:table-cell">
                        {r.kind === "image"
                          ? "Image"
                          : r.kind === "pdf"
                            ? "PDF"
                            : "Markdown"}
                      </td>
                      <td className="hidden px-3 py-2.5 text-right md:table-cell">
                        <button
                          type="button"
                          className="rounded-lg bg-white/[0.06] px-2 py-1 text-[11px] text-white/75 ring-1 ring-white/10 hover:bg-white/[0.09]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openQuickLook(r);
                          }}
                        >
                          Preview
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </WindowShell>
      <QuickLook resource={preview} onClose={() => setPreview(null)} />
    </>
  );
}
