'use client'

import { Container, Title, Text, SimpleGrid, Card, ThemeIcon } from '@mantine/core'
import { motion } from 'framer-motion'
import { Compass, BookOpen, MessageSquare } from 'lucide-react'

const steps = [
  {
    title: 'Step 1 — Explore',
    description: 'Learn the election process visually through our interactive timeline mapping every phase from announcement to results.',
    icon: Compass,
    color: 'orange',
  },
  {
    title: 'Step 2 — Understand',
    description: 'Dive deep into voter registration steps, required documents, and the various types of elections held across India.',
    icon: BookOpen,
    color: 'blue',
  },
  {
    title: 'Step 3 — Participate',
    description: 'Use our AI-powered assistant to get instant, accurate answers to any questions you have about voting and civics.',
    icon: MessageSquare,
    color: 'teal',
  },
]

export function HowItWorks() {
  return (
    <Container size="xl" py={80}>
      <Title order={2} ta="center" mb="xl" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        How VoteIQ Works
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Card shadow="sm" padding="xl" radius="md" withBorder style={{ height: '100%' }}>
              <ThemeIcon size={60} radius="md" color={step.color} variant="light" mb="md">
                <step.icon size={30} />
              </ThemeIcon>
              <Text fw={700} size="lg" mb="sm">
                {step.title}
              </Text>
              <Text c="dimmed" size="sm" lh={1.6}>
                {step.description}
              </Text>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  )
}
