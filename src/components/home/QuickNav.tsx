'use client'

import { Container, SimpleGrid, Card, Text, Group, ThemeIcon } from '@mantine/core'
import { motion } from 'framer-motion'
import { Map, BookCheck, Building2, Bot, BrainCircuit, Library } from 'lucide-react'
import Link from 'next/link'

const links = [
  { title: 'Interactive Timeline', icon: Map, color: 'orange', href: '/timeline' },
  { title: 'Voter Registration', icon: BookCheck, color: 'blue', href: '/registration' },
  { title: 'Types of Elections', icon: Building2, color: 'teal', href: '/elections' },
  { title: 'AI Assistant', icon: Bot, color: 'grape', href: '/assistant' },
  { title: 'Knowledge Quiz', icon: BrainCircuit, color: 'pink', href: '/quiz' },
  { title: 'Glossary', icon: Library, color: 'cyan', href: '/glossary' },
]

export function QuickNav() {
  return (
    <Container size="xl" py={40} mb={60}>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 6 }} spacing="md">
        {links.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Card
              component={Link}
              href={link.href}
              withBorder
              radius="md"
              p="md"
              shadow="sm"
              style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none' }}
            >
              <ThemeIcon size={48} radius="xl" variant="light" color={link.color} mb="sm">
                <link.icon size={24} />
              </ThemeIcon>
              <Text fw={600} size="sm" c="var(--mantine-color-text)">
                {link.title}
              </Text>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  )
}
