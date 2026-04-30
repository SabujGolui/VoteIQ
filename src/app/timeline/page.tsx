import { ElectionTimeline } from '@/components/timeline/ElectionTimeline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Election Timeline | VoteIQ',
  description: 'Interactive guide to the phases of the Indian electoral process.',
}

export default function TimelinePage() {
  return (
    <main>
      <ElectionTimeline />
    </main>
  )
}
