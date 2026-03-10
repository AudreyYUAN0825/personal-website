import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "featured" | "type";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        variant === "default" && "bg-ink/5 text-ink/70",
        variant === "featured" && "bg-accent/10 text-accent",
        variant === "type" && "bg-moss/10 text-moss",
        className
      )}
    >
      {children}
    </span>
  );
}
