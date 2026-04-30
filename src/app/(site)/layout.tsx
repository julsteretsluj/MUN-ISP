import { SiteFooter } from "@/components/site/SiteFooter";
import { NotesSidebar } from "@/components/site/NotesSidebar";
import { SiteNav } from "@/components/site/SiteNav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--neu-canvas)] px-3 py-3 sm:px-4">
      <div className="neu-raised mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-[1400px] overflow-hidden rounded-[1.75rem]">
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
