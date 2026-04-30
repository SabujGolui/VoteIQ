'use client'

import { Container, Grid, Text, Anchor, Group, Divider, Badge } from '@mantine/core'
import { Vote } from 'lucide-react'
import Link from 'next/link'
import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group gap="xs" mb="xs">
              <Vote size={24} color="var(--mantine-color-orange-6)" />
              <Text fw={800} size="lg">VoteIQ</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              India's most interactive guide to elections, voting rights, and civic participation.
            </Text>
            <Badge color="orange" variant="light">🗳️ 2026 General Elections Guide</Badge>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Text fw={700} mb="sm">Quick Links</Text>
            <div className={classes.links}>
              <Anchor component={Link} href="/timeline" size="sm" c="dimmed">Interactive Timeline</Anchor>
              <Anchor component={Link} href="/registration" size="sm" c="dimmed">Voter Registration</Anchor>
              <Anchor component={Link} href="/elections" size="sm" c="dimmed">Types of Elections</Anchor>
              <Anchor component={Link} href="/assistant" size="sm" c="dimmed">AI Chat Assistant</Anchor>
              <Anchor component={Link} href="/quiz" size="sm" c="dimmed">Knowledge Quiz</Anchor>
              <Anchor component={Link} href="/glossary" size="sm" c="dimmed">Key Terms Glossary</Anchor>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Text fw={700} mb="sm">Official Resources</Text>
            <div className={classes.links}>
              <Anchor href="https://eci.gov.in" target="_blank" size="sm" c="dimmed">Election Commission of India</Anchor>
              <Anchor href="https://voters.eci.gov.in" target="_blank" size="sm" c="dimmed">Voter Service Portal</Anchor>
              <Anchor href="https://play.google.com/store/apps/details?id=com.eci.citizen" target="_blank" size="sm" c="dimmed">Voter Helpline App</Anchor>
              <Anchor href="https://myneta.info" target="_blank" size="sm" c="dimmed">Know Your Candidate</Anchor>
            </div>
          </Grid.Col>
        </Grid>

        <Divider my="xl" />

        <div className={classes.bottom}>
          <Text size="xs" c="dimmed">
            ⚠️ <strong>Disclaimer:</strong> This is an educational platform. For official information, visit <Anchor href="https://eci.gov.in" target="_blank" size="xs">eci.gov.in</Anchor>
          </Text>
          <Text size="sm" c="dimmed">
            Made with ❤️ for Indian Democracy
          </Text>
        </div>
      </Container>
    </footer>
  )
}
