import { ProgressStats } from '../ProgressStats'

export default function ProgressStatsExample() {
  return (
    <ProgressStats
      streakDays={7}
      lessonsCompleted={24}
      totalLessons={120}
      skillLevel="Intermediate"
    />
  )
}
