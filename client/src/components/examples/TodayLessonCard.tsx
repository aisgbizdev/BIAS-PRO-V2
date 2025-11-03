import { TodayLessonCard } from '../TodayLessonCard'
import heroImage from '@assets/generated_images/Business_owner_learning_hero_9903806c.png'

export default function TodayLessonCardExample() {
  return (
    <TodayLessonCard
      title="Customer Retention Strategies That Work"
      category="Marketing"
      duration={5}
      thumbnail={heroImage}
      onStart={() => console.log('Start lesson triggered')}
    />
  )
}
