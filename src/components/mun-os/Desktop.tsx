"use client";

import { useDesktopStore } from "@/store/desktop-store";
import { AppStoreWindow } from "./apps/AppStoreWindow";
import { ArchitectWindow } from "./apps/ArchitectWindow";
import { FinderWindow } from "./apps/FinderWindow";
import { TerminalWindow } from "./apps/TerminalWindow";
import { Dock } from "./Dock";
import { MenuBar } from "./MenuBar";
import { Spotlight } from "./Spotlight";
import { Wallpaper } from "./Wallpaper";

export function Desktop() {
  const windows = useDesktopStore((s) => s.windows);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-sans text-white selection:bg-sky-500/35">
      <Wallpaper />
      <MenuBar />
      <Dock />
      <Spotlight />
      {windows.map((w) => {
        switch (w.appId) {
          case "finder":
            return <FinderWindow key={w.id} win={w} />;
          case "architect":
            return <ArchitectWindow key={w.id} win={w} />;
          case "terminal":
            return <TerminalWindow key={w.id} win={w} />;
          case "appstore":
            return <AppStoreWindow key={w.id} win={w} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
