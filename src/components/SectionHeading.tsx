
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 
      className={cn(
        "text-2xl md:text-3xl font-semibold mb-6 inline-block",
        "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h2>
  );
}
