import { ChatInterface } from '@/components/assistant/ChatInterface'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Assistant | VoteIQ',
  description: 'Ask questions about Indian elections, voting rights, and constitutional provisions.',
}

export default function AssistantPage() {
  return (
    <main>
      <ChatInterface />
    </main>
  )
}
