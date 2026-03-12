import { cn } from "@/lib/utils";

interface CardProps {
  children:   React.ReactNode;
  className?: string;
  hover?:     boolean;
  padding?:   "sm" | "md" | "lg";
}

const paddingMap = {
  sm:  "p-5",
  md:  "p-6 md:p-7",
  lg:  "p-7 md:p-8",
};

export function Card({ children, className, hover = false, padding }: CardProps) {
  return (
    <div
      className={cn(
        "ui-card",
        padding && paddingMap[padding],
        hover && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
