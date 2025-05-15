
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImaginationCardProps {
  title: string;
  className?: string;
}

export function ImaginationCard({ title, className }: ImaginationCardProps) {
  return (
    <Card className={cn("border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>Exploring possibilities...</p>
      </CardContent>
    </Card>
  );
}
