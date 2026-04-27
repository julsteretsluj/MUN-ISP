import { SiteFooter } from "@/components/site/SiteFooter";
import { NotesSidebar } from "@/components/site/NotesSidebar";
import { SiteNav } from "@/components/site/SiteNav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#131519] px-3 py-3 sm:px-4">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-[1400px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(24,26,31,0.95)] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <NotesSidebar />
        <div className="min-w-0 flex-1">
          <SiteNav />
          <main className="px-4 pb-16 pt-8 sm:px-8">{children}</main>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
