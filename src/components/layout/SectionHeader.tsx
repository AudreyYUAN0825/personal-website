import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

interface SectionHeaderProps {
  kicker?:      string;
  title:        string;
  description?: string;
  align?:       "left" | "center";
  icon?:        string;
  className?:   string;
}

export function SectionHeader({ kicker, title, description, align = "left", icon, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", align === "center" && "text-center", className)}>
      {kicker && (
        <p className="section-eyebrow mb-3">{kicker}</p>
      )}
      <h2 className="section-title flex items-center gap-3">
        {icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon name={icon} className="h-4 w-4" />
          </span>
        )}
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-[520px] text-[18px] leading-[1.65] text-ink/55">
          {description}
        </p>
      )}
    </div>
  );
}
