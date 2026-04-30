'use client'

import { Container, Grid, Paper, Text, ThemeIcon } from '@mantine/core'
import { motion } from 'framer-motion'
import { Users, Building, PieChart, Map } from 'lucide-react'
import classes from './QuickStats.module.css'

const stats = [
  { title: 'Registered Voters (State)', value: '18.5 Cr', icon: Users, color: 'orange' },
  { title: 'Upcoming Assembly Seats', value: '822', icon: Building, color: 'navy' },
  { title: 'Est. Voter Turnout', value: '72.5%', icon: PieChart, color: 'teal' },
  { title: 'Elections In', value: '4 + 1', suffix: 'States & UT', icon: Map, color: 'grape' },
]

export function QuickStats() {
  return (
    <Container size="xl" py="xl" className={classes.wrapper}>
      <Grid>
        {stats.map((stat, index) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={stat.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
              className={classes.motionWrapper}
            >
              <Paper withBorder p="md" radius="md" className={classes.card}>
                <ThemeIcon size="xl" radius="md" variant="light" color={stat.color}>
                  <stat.icon size={24} />
                </ThemeIcon>
                <Text c="dimmed" size="sm" tt="uppercase" fw={700} mt="md">
                  {stat.title}
                </Text>
                <Text className={classes.value}>
                  {stat.value}
                </Text>
                {stat.suffix && (
                  <Text size="sm" c="dimmed" mt="-5px">
                    {stat.suffix}
                  </Text>
                )}
              </Paper>
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
