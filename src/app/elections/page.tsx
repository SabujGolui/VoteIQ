import { ElectionTypeCard } from '@/components/elections/ElectionTypeCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Elections | VoteIQ',
  description: 'Learn about the different types of elections in India, from Lok Sabha to Panchayati Raj.',
}

export default function ElectionsPage() {
  return (
    <main>
      <ElectionTypeCard />
    </main>
  )
}
