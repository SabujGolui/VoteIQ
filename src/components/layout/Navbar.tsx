'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container, Group, Burger, Drawer, ActionIcon, useMantineColorScheme, Text, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Vote, Sun, Moon } from 'lucide-react'
import classes from './Navbar.module.css'

const links = [
  { link: '/', label: 'Home' },
  { link: '/timeline', label: 'Timeline' },
  { link: '/registration', label: 'Registration' },
  { link: '/elections', label: 'Elections' },
  { link: '/assistant', label: 'Assistant' },
  { link: '/quiz', label: 'Quiz' },
  { link: '/glossary', label: 'Glossary' },
]

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false)
  const pathname = usePathname()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const items = links.map((link) => {
    const isActive = pathname === link.link || (link.link !== '/' && pathname.startsWith(link.link))
    
    return (
      <Link
        key={link.label}
        href={link.link}
        className={isActive ? `${classes.link} ${classes.active}` : classes.link}
        onClick={() => close()}
      >
        {link.label}
      </Link>
    )
  })

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group gap="sm">
          <Vote size={28} color="var(--mantine-color-orange-6)" />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <Text fw={800} size="xl" component={Link} href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              VoteIQ
            </Text>
            <Text size="xs" c="dimmed" style={{ fontFamily: 'var(--font-tiro)', letterSpacing: 0.5 }}>
              मतदान जागरूकता
            </Text>
          </div>
        </Group>

        <Group gap={5} visibleFrom="md">
          {items}
        </Group>

        <Group>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            variant="default"
            aria-label="Toggle color scheme"
          >
            {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <Stack gap="md">
          {items}
        </Stack>
      </Drawer>
    </header>
  )
}
