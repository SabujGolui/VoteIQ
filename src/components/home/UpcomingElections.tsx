'use client'

import { Container, Title, Timeline, Text, Badge, Card, Group } from '@mantine/core'
import { motion } from 'framer-motion'
import { CalendarCheck, MapPin } from 'lucide-react'

const upcoming = [
  {
    state: 'Assam & Kerala',
    type: 'Vidhan Sabha (Assembly)',
    date: 'April 9, 2026',
    status: 'Scheduled',
    color: 'orange',
  },
  {
    state: 'Puducherry',
    type: 'Legislative Assembly',
    date: 'April 9, 2026',
    status: 'Scheduled',
    color: 'orange',
  },
  {
    state: 'Tamil Nadu',
    type: 'Vidhan Sabha (Assembly)',
    date: 'April 23, 2026',
    status: 'Scheduled',
    color: 'orange',
  },
  {
    state: 'West Bengal',
    type: 'Vidhan Sabha (Assembly)',
    date: 'April 23 & 29, 2026',
    status: 'Scheduled',
    color: 'blue',
  },
]

export function UpcomingElections() {
  return (
    <Container size="md" py={60}>
      <Card withBorder radius="md" p="xl" shadow="sm">
        <Group mb="xl">
          <CalendarCheck size={28} color="var(--mantine-color-orange-6)" />
          <Title order={3} style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
            Upcoming State Elections
          </Title>
        </Group>

        <Timeline active={-1} bulletSize={24} lineWidth={2}>
          {upcoming.map((election, index) => (
            <Timeline.Item 
              key={election.state}
              title={<Text fw={700} size="lg">{election.state}</Text>}
              bullet={<MapPin size={12} />}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Text c="dimmed" size="sm" mt={4}>{election.type}</Text>
                <Group gap="xs" mt="xs">
                  <Badge variant="light" color="gray">{election.date}</Badge>
                  <Badge color={election.color}>{election.status}</Badge>
                </Group>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>
    </Container>
  )
}
