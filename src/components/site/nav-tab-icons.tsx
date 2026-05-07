import type { LucideIcon } from "lucide-react";
import { Brain, Home, Rocket } from "lucide-react";

export const NAV_TAB_ICONS: Record<string, LucideIcon> = {
  "/": Home,
  "/experience-understanding": Brain,
  "/leadership-event-planning": Rocket,
};

export function NavTabIcon({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  const Icon = NAV_TAB_ICONS[href] ?? Home;
  return <Icon className={className} aria-hidden />;
}
