'use client'

import { Container, Title, Timeline, Text, Badge, Card, Group, Alert, Grid, Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { Info, CheckCircle2, Clock, Calendar } from 'lucide-react'

const phases = [
  {
    title: 'Phase 1: Election Announcement',
    dates: 'T-60 Days',
    status: 'Past',
    color: 'gray',
    details: 'The Election Commission of India (ECI) announces the poll dates. The Model Code of Conduct (MCC) comes into effect immediately to ensure a level playing field.',
    law: 'Representation of the People Act, 1951',
    fact: 'Once MCC is applied, the ruling government cannot announce new schemes or projects that might influence voters.',
    icon: Calendar,
  },
  {
    title: 'Phase 2: Voter List Finalization',
    dates: 'T-45 Days',
    status: 'Past',
    color: 'gray',
    details: 'The electoral rolls are updated and published. Citizens can check their names, and new voters can register until the last date of nomination.',
    law: 'Registration of Electors Rules, 1960',
    fact: 'India has over 96.8 crore registered voters, making it the largest electorate in the world.',
    icon: CheckCircle2,
  },
  {
    title: 'Phase 3: Nomination of Candidates',
    dates: 'T-30 Days',
    status: 'Past',
    color: 'gray',
    details: 'Candidates file their nomination papers along with affidavits detailing their assets, liabilities, and criminal records (if any).',
    law: 'Section 33 of RP Act, 1951',
    fact: 'The security deposit for Lok Sabha election is ₹25,000 for general candidates and ₹12,500 for SC/ST candidates.',
    icon: Clock,
  },
  {
    title: 'Phase 4: Scrutiny of Nominations',
    dates: 'T-28 Days',
    status: 'Past',
    color: 'gray',
    details: 'The Returning Officer (RO) examines the nomination papers to ensure they are valid and meet all legal requirements.',
    law: 'Section 36 of RP Act, 1951',
    fact: 'A candidate\'s nomination can be rejected if their affidavit is found to be incomplete or false.',
    icon: Clock,
  },
  {
    title: 'Phase 5: Withdrawal of Candidature',
    dates: 'T-26 Days',
    status: 'Past',
    color: 'gray',
    details: 'Candidates are given a few days to withdraw their nominations if they decide not to contest the election.',
    law: 'Section 37 of RP Act, 1951',
    fact: 'After this date, the final list of contesting candidates is published and symbols are allotted.',
    icon: Clock,
  },
  {
    title: 'Phase 6: Election Campaign',
    dates: 'T-25 to T-2 Days',
    status: 'Current',
    color: 'blue',
    details: 'Political parties and candidates hold rallies, roadshows, and public meetings. Campaigning stops 48 hours before the polling day.',
    law: 'Section 126 of RP Act, 1951',
    fact: 'The 48-hour period before polling is known as the "Silence Period" where no active campaigning is allowed.',
    icon: Info,
  },
  {
    title: 'Phase 7: Voting Day',
    dates: 'T-0 Days',
    status: 'Upcoming',
    color: 'orange',
    details: 'Registered voters cast their votes at designated polling booths using Electronic Voting Machines (EVMs) and VVPATs.',
    law: 'Conduct of Elections Rules, 1961',
    fact: 'The ECI ensures that no voter has to travel more than 2 km to reach a polling station.',
    icon: Clock,
  },
  {
    title: 'Phase 8: Counting & Result',
    dates: 'T+3 Days',
    status: 'Upcoming',
    color: 'orange',
    details: 'Votes are counted under tight security. The candidate with the highest number of valid votes in a constituency is declared the winner.',
    law: 'Section 64 of RP Act, 1951',
    fact: 'In case of a tie, the winner is decided by drawing lots by the Returning Officer.',
    icon: Clock,
  },
]

export function ElectionTimeline() {
  return (
    <Container size="xl" py={40}>
      <Title order={1} mb="md" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        The Election Timeline
      </Title>
      <Text c="dimmed" size="lg" mb={40}>
        Understand the 8 major phases of the Indian electoral process.
      </Text>

      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Timeline active={5} bulletSize={30} lineWidth={3}>
            {phases.map((phase, index) => (
              <Timeline.Item
                key={phase.title}
                title={<Text fw={800} size="xl">{phase.title}</Text>}
                bullet={<phase.icon size={16} />}
                color={phase.color}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Card withBorder shadow="sm" radius="md" mt="md" mb="xl">
                    <Group justify="space-between" mb="sm">
                      <Badge variant="light" color={phase.color} size="lg">
                        {phase.dates}
                      </Badge>
                      <Badge color={phase.color} variant={phase.status === 'Current' ? 'filled' : 'outline'}>
                        {phase.status}
                      </Badge>
                    </Group>
                    
                    <Text mb="md" lh={1.6}>
                      {phase.details}
                    </Text>

                    <Text size="sm" c="dimmed" mb="md">
                      <strong>Legal Reference:</strong> {phase.law}
                    </Text>

                    <Alert variant="light" color="orange" title="Did you know?" icon={<Info size={16} />}>
                      {phase.fact}
                    </Alert>
                  </Card>
                </motion.div>
              </Timeline.Item>
            ))}
          </Timeline>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Box style={{ position: 'sticky', top: '100px' }}>
            <Card withBorder radius="md" shadow="sm" p="xl">
              <Title order={4} mb="md">Current Phase Status</Title>
              <Text c="dimmed" size="sm" mb="lg">
                The mock election timeline is currently in <strong>Phase 6: Election Campaign</strong>.
              </Text>
              
              <Group gap="xs" mb="xs">
                <Badge color="gray">Past Phases: 5</Badge>
              </Group>
              <Group gap="xs" mb="xs">
                <Badge color="blue">Active Phase: 1</Badge>
              </Group>
              <Group gap="xs">
                <Badge color="orange">Upcoming Phases: 2</Badge>
              </Group>
            </Card>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
