"use client";

export function Wallpaper() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={{
          background: `
            radial-gradient(1100px 760px at 14% 20%, rgba(88, 204, 2, 0.25), transparent 55%),
            radial-gradient(1000px 700px at 82% 24%, rgba(28, 176, 246, 0.2), transparent 50%),
            radial-gradient(800px 620px at 68% 78%, rgba(255, 180, 0, 0.2), transparent 55%),
            linear-gradient(165deg, #f5ffe8 0%, #e9ffd0 45%, #f0ffd8 100%)
          `,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),transparent_35%,rgba(114,167,61,0.16))]" />
    </div>
  );
}
