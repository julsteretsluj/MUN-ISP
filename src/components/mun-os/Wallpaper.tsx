"use client";

export function Wallpaper() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={{
          background: `
            radial-gradient(1100px 760px at 14% 20%, rgba(37, 99, 235, 0.2), transparent 55%),
            radial-gradient(1000px 700px at 82% 24%, rgba(139, 92, 246, 0.18), transparent 50%),
            radial-gradient(800px 620px at 68% 78%, rgba(251, 113, 133, 0.16), transparent 55%),
            radial-gradient(700px 520px at 30% 84%, rgba(245, 158, 11, 0.14), transparent 50%),
            linear-gradient(165deg, #ffffff 0%, #f8fbff 46%, #fdf7ff 100%)
          `,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.44),transparent_34%,rgba(148,163,184,0.16))]" />
    </div>
  );
}
