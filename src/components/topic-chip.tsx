"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TopicChipProps = {
  children: ReactNode;
  variant?: "neon-outline" | "cream-solid";
  className?: string;
  icon?: ReactNode;
  title?: string; // tooltip/title
};

export const TopicChip = ({ children, variant = "neon-outline", className, icon, title }: TopicChipProps) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--neon-cyan)] ring-offset-[var(--bg-900)]";

  const styles =
    variant === "cream-solid"
      ? "bg-[var(--paper-cream)] text-black shadow-sm"
      : "border border-[var(--neon-cyan)]/60 text-white/90 hover:bg-[var(--neon-cyan)]/10";

  return (
    <span className={cn(base, styles, className)} title={title}>
      {icon && <span aria-hidden>{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default TopicChip;