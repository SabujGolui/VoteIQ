import { GlossaryApp } from '@/components/glossary/GlossaryApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Key Terms Glossary | VoteIQ',
  description: 'Dictionary of election terminology, constitutional terms, and civic definitions.',
}

export default function GlossaryPage() {
  return (
    <main>
      <GlossaryApp />
    </main>
  )
}
