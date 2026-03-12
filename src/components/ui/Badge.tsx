import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"   // 浅蓝 #7DACD6 — general tags
  | "policy"    // 淡紫 #C0B9DB — policy / strategy tags
  | "project"   // 柔粉 #E9B7D4 — project / deliverable tags
  | "blue"      // primary brand blue — emphasis chips
  | "rose"      // deep rose — strong emphasis
  // legacy aliases kept for backward compat
  | "featured" | "type" | "mint" | "gold" | "lavender" | "blue-light" | "pink";

interface BadgeProps {
  children:   React.ReactNode;
  variant?:   BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "chip",
        // ── Semantic three-type system ──────────────────────────────────────────
        (variant === "default" || variant === "blue-light") && "chip-default",
        (variant === "policy"  || variant === "lavender")   && "chip-policy",
        (variant === "project" || variant === "pink")       && "chip-project",
        variant === "blue"                                  && "chip-blue",
        variant === "rose"                                  && "chip-rose",
        // ── Legacy aliases ───────────────────────────────────────────────────────
        variant === "featured" && "chip-blue",
        variant === "type"     && "chip-policy",
        variant === "mint"     && "chip-policy",
        variant === "gold"     && "chip-project",
        className
      )}
    >
      {children}
    </span>
  );
}
