import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?:     string;
  title:       string;
  description?: string;
  align?:      "left" | "center";
  className?:  string;
}

export function SectionHeader({ kicker, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", align === "center" && "text-center", className)}>
      {kicker && (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
          {kicker}
        </p>
      )}
      <h2 className="gradient-heading font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
      )}
    </div>
  );
}
