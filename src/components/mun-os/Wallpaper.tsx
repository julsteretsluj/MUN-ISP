"use client";

export function Wallpaper() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={{
          background: `
            radial-gradient(1200px 800px at 15% 20%, rgba(88, 142, 255, 0.55), transparent 55%),
            radial-gradient(900px 700px at 85% 25%, rgba(175, 82, 222, 0.45), transparent 50%),
            radial-gradient(800px 600px at 40% 90%, rgba(52, 199, 89, 0.35), transparent 50%),
            radial-gradient(700px 500px at 75% 75%, rgba(255, 149, 0, 0.35), transparent 55%),
            linear-gradient(165deg, #0c1220 0%, #141e33 38%, #1a1430 72%, #0f172a 100%)
          `,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[48px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%,rgba(0,0,0,0.35))]" />
    </div>
  );
}
