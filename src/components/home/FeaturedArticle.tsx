'use client'

import { Container, Text, Button } from '@mantine/core'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function FeaturedArticle() {
  return (
    <Container size="xl" py={60}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div style={{
          border: '1px solid var(--mantine-color-default-border)',
          borderRadius: 'var(--mantine-radius-md)',
          boxShadow: 'var(--mantine-shadow-md)',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {/* Illustration panel — full width on mobile, auto on desktop */}
          <div className="featured-article-image" style={{
            flex: '0 0 100%',
            backgroundColor: 'var(--mantine-color-orange-1)',
            padding: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none"
              stroke="var(--mantine-color-orange-6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" />
              <path d="M7 8h.01M7 12h.01M7 16h.01M17 8h.01M17 12h.01M17 16h.01" />
            </svg>
          </div>

          {/* Text panel */}
          <div style={{
            flex: '1 1 260px',
            padding: 'var(--mantine-spacing-xl)',
            backgroundColor: 'var(--mantine-color-body)',
          }}>
            <Text tt="uppercase" c="orange" fw={700} size="xs" mb="xs">
              Featured Guide
            </Text>
            <Text fw={800} size="xl" mb="md" style={{ fontFamily: 'var(--mantine-font-family-headings)', lineHeight: 1.3 }}>
              How India's Electronic Voting Machines (EVMs) Work
            </Text>
            <Text c="dimmed" mb="xl" lh={1.6} size="sm">
              Discover the technology behind the world's largest democratic exercise. Learn about the security features, VVPAT verification, and how your vote is accurately recorded and counted.
            </Text>
            <Button component={Link} href="/glossary" variant="light" color="orange" rightSection={<ArrowRight size={16} />} fullWidth>
              Read More
            </Button>
          </div>
        </div>

        {/* Inline responsive override: side-by-side on sm+ screens */}
        <style>{`
          @media (min-width: 640px) {
            .featured-article-image {
              flex: 0 0 260px !important;
            }
          }
        `}</style>
      </motion.div>
    </Container>
  )
}
