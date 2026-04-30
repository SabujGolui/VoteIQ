'use client'

import { useState } from 'react'
import { Container, Title, Stepper, Button, Group, Text, Card, NumberInput, Switch, Badge, Alert, Checkbox, Anchor, Accordion, List, ThemeIcon } from '@mantine/core'
import { Check, X, AlertTriangle, Download, Link as LinkIcon } from 'lucide-react'

const faqs = [
  { q: "Can I register to vote if I am living in another state?", a: "Yes, you can register as a general voter at your place of ordinary residence. If you are a student, you have the option to register at your native place or where you are studying." },
  { q: "What is the qualifying date for age?", a: "There are four qualifying dates now: 1st January, 1st April, 1st July, and 1st October. You can apply in advance if turning 18 on any of these dates." },
  { q: "Do I need Aadhaar to register?", a: "Providing an Aadhaar number is optional but recommended for authentication." },
  { q: "How long does it take to get the EPIC card?", a: "It usually takes 30-45 days after the Booth Level Officer (BLO) verifies your application." },
  { q: "What if my application is rejected?", a: "You can track the status and if rejected, the reason is provided. You can correct the issue and reapply." }
]

export function RegistrationStepper() {
  const [active, setActive] = useState(0)
  
  // Eligibility Checker State
  const [age, setAge] = useState<number | string>('')
  const [isCitizen, setIsCitizen] = useState(true)

  const isEligible = typeof age === 'number' && age >= 18 && isCitizen
  const eligibilityChecked = typeof age === 'number'

  return (
    <Container size="xl" py={40}>
      <Title order={1} mb="md" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        Voter Registration Guide
      </Title>
      <Text c="dimmed" size="lg" mb={40}>
        Follow these simple steps to enroll as a voter in India.
      </Text>

      <Card withBorder shadow="sm" radius="md" p="xl" mb={40}>
        <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} color="orange">
          <Stepper.Step label="Step 1" description="Check Eligibility">
            <Title order={3} mb="md" mt="xl">Check Your Eligibility</Title>
            <Text mb="lg">You must be at least 18 years old and an Indian citizen to vote.</Text>
            
            <Card bg="var(--mantine-color-gray-0)" withBorder>
              <Group grow align="flex-end" mb="md">
                <NumberInput 
                  label="Enter your age" 
                  placeholder="e.g. 18" 
                  value={age} 
                  onChange={setAge}
                  min={0}
                  max={120}
                />
                <Switch 
                  label="I am an Indian Citizen" 
                  checked={isCitizen} 
                  onChange={(event) => setIsCitizen(event.currentTarget.checked)}
                  color="orange"
                  size="md"
                />
              </Group>

              {eligibilityChecked && (
                <Alert 
                  color={isEligible ? "green" : "red"} 
                  icon={isEligible ? <Check size={16} /> : <X size={16} />}
                  title={isEligible ? "You are Eligible!" : "Not Eligible"}
                >
                  {isEligible 
                    ? "Great! You meet the basic criteria. Proceed to the next step to gather your documents." 
                    : "You must be an Indian citizen and at least 18 years old by the qualifying date to register."}
                </Alert>
              )}
            </Card>
          </Stepper.Step>

          <Stepper.Step label="Step 2" description="Gather Documents">
            <Title order={3} mb="md" mt="xl">Document Checklist</Title>
            <Group justify="space-between" mb="lg">
              <Text>Keep these scanned documents ready before applying online.</Text>
              <Button variant="light" color="orange" size="xs" leftSection={<Download size={14} />}>
                Download Checklist
              </Button>
            </Group>

            <List spacing="md" size="sm" center icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <Check size={16} />
              </ThemeIcon>
            }>
              <List.Item>
                <strong>Passport size photograph</strong> (Format: JPG/JPEG, Max size: 2MB, White background)
              </List.Item>
              <List.Item>
                <strong>Age Proof</strong> (Birth Certificate, PAN Card, Aadhaar Card, or Class 10/12 mark sheet)
              </List.Item>
              <List.Item>
                <strong>Address Proof</strong> (Aadhaar Card, Water/Electricity Bill, Passport, or Bank Passbook)
              </List.Item>
            </List>

            <Alert variant="light" color="blue" title="Common Mistake" icon={<AlertTriangle size={16} />} mt="xl">
              Ensure your name matches exactly across all documents to avoid rejection.
            </Alert>
          </Stepper.Step>

          <Stepper.Step label="Step 3" description="Fill Form 6">
            <Title order={3} mb="md" mt="xl">Understanding Form 6</Title>
            <Text mb="lg">Form 6 is used for the inclusion of a name in the electoral roll for the first time.</Text>
            
            <List type="ordered" spacing="sm">
              <List.Item>Select your State, District, and Assembly Constituency.</List.Item>
              <List.Item>Enter personal details (Name, Surname, Relative's name).</List.Item>
              <List.Item>Provide contact details (Mobile number is highly recommended for OTPs and tracking).</List.Item>
              <List.Item>Enter Aadhaar details (Optional but recommended).</List.Item>
              <List.Item>Fill ordinary residence address and upload address proof.</List.Item>
              <List.Item>Enter Date of Birth and upload age proof.</List.Item>
              <List.Item>Declaration (Place, Date).</List.Item>
            </List>
          </Stepper.Step>

          <Stepper.Step label="Step 4" description="Submit Online">
            <Title order={3} mb="md" mt="xl">Official Portals</Title>
            <Text mb="lg">You can submit your application via the official web portal or mobile app.</Text>

            <Group gap="md">
              <Button component="a" href="https://voters.eci.gov.in/" target="_blank" color="navy" leftSection={<LinkIcon size={16} />}>
                Voter Service Portal (Web)
              </Button>
              <Button component="a" href="https://play.google.com/store/apps/details?id=com.eci.citizen" target="_blank" color="orange" leftSection={<LinkIcon size={16} />}>
                Voter Helpline App (Mobile)
              </Button>
            </Group>

            <Alert variant="light" color="yellow" title="Note" mt="xl">
              You will need to register an account with your mobile number to access the portal.
            </Alert>
          </Stepper.Step>

          <Stepper.Step label="Step 5" description="Track Status">
            <Title order={3} mb="md" mt="xl">Tracking Your Application</Title>
            <Text mb="lg">After submission, you will receive a Reference ID via SMS.</Text>
            
            <Card bg="var(--mantine-color-blue-0)" withBorder>
              <Text fw={700} mb="xs">Keep your Reference ID safe!</Text>
              <Text size="sm">You can use this ID on the Voter Service Portal to track whether your application is: Submitted {'->'} BLO Appointed {'->'} Field Verified {'->'} Accepted/Rejected.</Text>
            </Card>
          </Stepper.Step>

          <Stepper.Completed>
            <Title order={3} mb="md" mt="xl">Step 6: Receive Voter ID</Title>
            <Alert color="green" icon={<Check size={16} />} title="Success!">
              Once accepted, your EPIC number will be generated. You can download the e-EPIC immediately and the physical card will be delivered to your address by post.
            </Alert>
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button variant="default" onClick={() => setActive((current) => (current > 0 ? current - 1 : current))} disabled={active === 0}>
            Back
          </Button>
          <Button color="orange" onClick={() => setActive((current) => (current < 6 ? current + 1 : current))} disabled={active === 6}>
            Next Step
          </Button>
        </Group>
      </Card>

      <Title order={2} mb="lg" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        Frequently Asked Questions
      </Title>
      <Accordion variant="separated" radius="md">
        {faqs.map((faq, index) => (
          <Accordion.Item value={`faq-${index}`} key={index}>
            <Accordion.Control>
              <Text fw={600}>{faq.q}</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text c="dimmed" size="sm">{faq.a}</Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}
