import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-card shadow-soft",
        hover && "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
