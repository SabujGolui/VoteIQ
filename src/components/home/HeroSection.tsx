'use client'

import { Container, Title, Text, Button, Group, Badge } from '@mantine/core'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bot, Map } from 'lucide-react'
import classes from './HeroSection.module.css'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className={classes.hero}>
      {/* Background radial glow */}
      <div className={classes.bgMap} />
      
      {/* Ashoka Chakra watermark SVG */}
      <svg className={classes.chakra} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000080" strokeWidth="1.5">
        <circle cx="50" cy="50" r="46" />
        <circle cx="50" cy="50" r="5" fill="#000080" stroke="none" />
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (i * 360) / 24
          const rad = (angle * Math.PI) / 180
          const x1 = 50 + 5 * Math.cos(rad)
          const y1 = 50 + 5 * Math.sin(rad)
          const x2 = 50 + 46 * Math.cos(rad)
          const y2 = 50 + 46 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </svg>
      
      <Container size="md" className={classes.inner}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={classes.content}>
          <motion.div variants={itemVariants}>
            <Badge size="lg" color="orange" variant="light" mb="xl">
              🗳️ 2026 State Elections Guide
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Title className={classes.title}>
              Understand Every Vote.<br />
              <Text component="span" c="orange" inherit>Every Step.</Text>
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Text className={classes.subtitle} mt="md">
              India's most interactive guide to elections, voting rights, and civic participation
            </Text>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Text className={classes.hindiText} mt="xs" c="dimmed">
              जानिए अपने मत की शक्ति
            </Text>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Group mt={40} justify="center">
              <Button component={Link} href="/timeline" size="xl" color="orange" className={classes.control} rightSection={<Map size={20} />}>
                Explore Timeline
              </Button>
              <Button component={Link} href="/assistant" size="xl" variant="outline" color="navy" className={classes.control} rightSection={<Bot size={20} />}>
                Ask AI Assistant
              </Button>
            </Group>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
