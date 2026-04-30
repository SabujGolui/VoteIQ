import { QuizApp } from '@/components/quiz/QuizApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Quiz | VoteIQ',
  description: 'Test your knowledge about Indian elections, voter rights, and the Constitution.',
}

export default function QuizPage() {
  return (
    <main>
      <QuizApp />
    </main>
  )
}
