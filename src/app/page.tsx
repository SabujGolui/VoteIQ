import { HeroSection } from '@/components/home/HeroSection'
import { QuickStats } from '@/components/home/QuickStats'
import { HowItWorks } from '@/components/home/HowItWorks'
import { UpcomingElections } from '@/components/home/UpcomingElections'
import { FeaturedArticle } from '@/components/home/FeaturedArticle'
import { QuickNav } from '@/components/home/QuickNav'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QuickStats />
      <HowItWorks />
      <UpcomingElections />
      <FeaturedArticle />
      <QuickNav />
    </main>
  )
}
