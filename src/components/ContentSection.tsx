
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

interface ContentSectionProps {
  id: string;
  title: string;
  emoji?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ id, title, emoji, children, className }: ContentSectionProps) {
  return (
    <section id={id} className={cn("section-container", className)}>
      <div className="animate-fade-up">
        <SectionHeading>
          {emoji && <span className="mr-2">{emoji}</span>}
          {title}
        </SectionHeading>
        <div className="text-muted-foreground space-y-4">{children}</div>
      </div>
    </section>
  );
}
