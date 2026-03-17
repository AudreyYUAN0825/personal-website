import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface SectionProps {
  id?:        string;
  className?: string;
  style?:     CSSProperties;
  children:   React.ReactNode;
}

export function Section({ id, className, style, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full snap-start", className)} style={style}>
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
