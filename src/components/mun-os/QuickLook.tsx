"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import type { FinderResource } from "@/lib/mun-resources";

type Props = {
  resource: FinderResource | null;
  onClose: () => void;
};

export function QuickLook({ resource, onClose }: Props) {
  return (
    <AnimatePresence>
      {resource ? (
        <motion.div
          className="fixed inset-0 z-[7000] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Quick Look"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            className="relative z-10 flex max-h-[min(85vh,820px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[rgba(0,0,0,0.65)] shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-[20px]"
          >
            <header className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <div className="min-w-0">
                <div className="truncate text-[14px] font-semibold text-white">
                  {resource.label}
                </div>
                <div className="truncate text-[12px] text-white/45">
                  Quick Look ·{" "}
                  {resource.kind === "pdf"
                    ? "PDF"
                    : resource.kind === "image"
                      ? "Image"
                      : "Markdown"}
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-[12px] text-white/80 ring-1 ring-white/10 transition hover:bg-white/[0.1]"
              >
                Done
              </button>
            </header>
            <div className="min-h-0 flex-1 overflow-auto">
              {resource.kind === "markdown" ? (
                <MarkdownPanel key={resource.url} url={resource.url} />
              ) : resource.kind === "image" ? (
                <div className="flex max-h-[min(78vh,900px)] justify-center overflow-auto bg-zinc-950/80 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element -- dynamic public assets */}
                  <img
                    src={resource.url}
                    alt={resource.label}
                    className="h-auto max-h-[min(72vh,880px)] w-full max-w-3xl object-contain object-top shadow-2xl"
                  />
                </div>
              ) : (
                <iframe
                  title={resource.label}
                  src={resource.url}
                  className="h-[min(72vh,720px)] w-full bg-white"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MarkdownPanel({ url }: { url: string }) {
  const [text, setText] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Could not load document");
        return r.text();
      })
      .then((t) => {
        if (alive) setText(t);
      })
      .catch((e: Error) => {
        if (alive) setErr(e.message);
      });
    return () => {
      alive = false;
    };
  }, [url]);

  if (err) {
    return (
      <div className="p-6 text-[13px] text-rose-300/90">{err}</div>
    );
  }
  if (text === null) {
    return (
      <div className="p-6 text-[13px] text-white/45">Loading…</div>
    );
  }

  return (
    <article className="max-w-none px-6 py-5">
      <Markdown components={mdComponents}>{text}</Markdown>
    </article>
  );
}

const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mb-3 mt-1 text-2xl font-semibold tracking-tight text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-2 mt-5 text-lg font-semibold text-white/95">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-4 text-base font-semibold text-white/90">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-3 text-[14px] leading-relaxed text-white/75">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-3 ml-5 list-disc space-y-1.5 text-[14px] text-white/75">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-3 ml-5 list-decimal space-y-1.5 text-[14px] text-white/75">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-white/95">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),
};
