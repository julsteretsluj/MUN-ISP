"use client";

export function Wallpaper() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={{
          background: `
            radial-gradient(1000px 700px at 20% 15%, rgba(138, 180, 255, 0.12), transparent 55%),
            radial-gradient(900px 600px at 85% 30%, rgba(138, 180, 255, 0.06), transparent 50%),
            linear-gradient(165deg, #1a1e26 0%, #222831 45%, #1e222a 100%)
          `,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[48px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%,rgba(0,0,0,0.35))]" />
    </div>
  );
}
