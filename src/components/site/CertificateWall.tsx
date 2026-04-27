import Link from "next/link";
import { certificateGalleryItems } from "@/lib/mun-resources";

export function CertificateWall() {
  const items = certificateGalleryItems();

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
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((c) => (
          <li key={c.id}>
            <Link
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] ring-1 ring-black/30 transition hover:border-sky-400/25 hover:bg-white/[0.05]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.url}
                  alt=""
                  className="h-full w-full object-cover object-top opacity-95 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
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
  );
}
