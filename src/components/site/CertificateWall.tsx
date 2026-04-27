"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { certificateGalleryItems } from "@/lib/mun-resources";

export function CertificateWall() {
  const items = certificateGalleryItems();
  const listRef = useRef<HTMLUListElement | null>(null);

  const scrollByCards = (direction: "left" | "right") => {
    if (!listRef.current) return;
    const amount = 300;
    listRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div id="certificates" className="scroll-mt-28 mt-12">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Certificates & evidence
          </h2>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-white/55">
            Ten official certificates from six conferences — participation and awards.
            Open any tile to view the scan; full-screen previews also live in{" "}
            <Link href="/mun-os" className="text-sky-300 underline decoration-sky-500/35">
              MUN-OS Finder
            </Link>
            .
          </p>
        </div>
        <span className="text-[12px] font-medium tabular-nums text-white/45">
          {items.length} files
        </span>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-2 top-2 z-20 hidden items-start gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/80 transition hover:bg-black/65"
            aria-label="Scroll certificates left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/80 transition hover:bg-black/65"
            aria-label="Scroll certificates right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#131519] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#131519] to-transparent"
        />
        <ul
          ref={listRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-2"
        >
          {items.map((c) => (
            <li key={c.id} className="w-[280px] shrink-0 snap-start">
              <Link
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] ring-1 ring-black/30 transition hover:border-sky-400/25 hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.url}
                    alt=""
                    className="h-full w-full object-contain opacity-95 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                  />
                </div>
                <p className="border-t border-white/[0.06] px-3 py-3 text-[12px] leading-snug text-white/75 transition group-hover:text-white/90">
                  {c.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
