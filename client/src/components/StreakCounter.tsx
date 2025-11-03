import { Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StreakCounterProps {
  count: number;
}

export function StreakCounter({ count }: StreakCounterProps) {
  return (
    <Badge variant="secondary" className="gap-1 px-3 py-1.5" data-testid="badge-streak">
      <Flame className="h-4 w-4 text-orange-500" />
      <span className="font-semibold" data-testid="text-streak-count">{count} day streak</span>
    </Badge>
  );
}
