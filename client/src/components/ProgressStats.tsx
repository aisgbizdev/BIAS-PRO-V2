import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Flame, TrendingUp } from "lucide-react";

interface ProgressStatsProps {
  streakDays: number;
  lessonsCompleted: number;
  totalLessons: number;
  skillLevel: string;
}

export function ProgressStats({ streakDays, lessonsCompleted, totalLessons, skillLevel }: ProgressStatsProps) {
  const completionPercentage = Math.round((lessonsCompleted / totalLessons) * 100);

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card data-testid="card-streak-stat">
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
          <Flame className="h-5 w-5 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold" data-testid="text-streak-value">{streakDays}</div>
          <p className="text-xs text-muted-foreground">days in a row</p>
        </CardContent>
      </Card>

      <Card data-testid="card-completed-stat">
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
          <CheckCircle2 className="h-5 w-5 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold" data-testid="text-completed-value">{lessonsCompleted}</div>
          <p className="text-xs text-muted-foreground">{completionPercentage}% of total</p>
        </CardContent>
      </Card>

      <Card data-testid="card-level-stat">
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
          <TrendingUp className="h-5 w-5 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold" data-testid="text-level-value">{skillLevel}</div>
          <p className="text-xs text-muted-foreground">Keep learning!</p>
        </CardContent>
      </Card>
    </div>
  );
}
