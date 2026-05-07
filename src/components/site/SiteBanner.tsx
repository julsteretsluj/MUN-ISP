/**
 * Full-width hairline accent at the very top of every page.
 */
export function SiteBanner() {
  return (
    <div
      className="pointer-events-none h-[2px] w-full shrink-0 sm:h-[3px]"
      style={{ background: "var(--graphic-spectrum)" }}
      aria-hidden
    />
  );
}
