import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Play } from "lucide-react";

interface TodayLessonCardProps {
  title: string;
  category: string;
  duration: number;
  thumbnail: string;
  onStart: () => void;
}

export function TodayLessonCard({ title, category, duration, thumbnail, onStart }: TodayLessonCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid="card-today-lesson">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge 
          variant="secondary" 
          className="absolute top-4 left-4"
          data-testid="badge-category"
        >
          {category}
        </Badge>
      </div>
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl font-display" data-testid="text-lesson-title">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span data-testid="text-duration">{duration} min</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          size="lg" 
          className="w-full gap-2" 
          onClick={onStart}
          data-testid="button-start-lesson"
        >
          <Play className="h-5 w-5" />
          Start Today's Lesson
        </Button>
      </CardContent>
    </Card>
  );
}
