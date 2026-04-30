import { RegistrationStepper } from '@/components/registration/RegistrationStepper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voter Registration | VoteIQ',
  description: 'A step-by-step guide to registering as a voter in India.',
}

export default function RegistrationPage() {
  return (
    <main>
      <RegistrationStepper />
    </main>
  )
}
