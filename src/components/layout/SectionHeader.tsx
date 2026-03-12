import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?:      string;
  title:        string;
  description?: string;
  align?:       "left" | "center";
  className?:   string;
}

export function SectionHeader({ kicker, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", align === "center" && "text-center", className)}>
      {kicker && (
        <p className="section-eyebrow mb-3">{kicker}</p>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-3 max-w-[520px] text-[18px] leading-[1.65] text-ink/55">
          {description}
        </p>
      )}
    </div>
  );
}
