'use client'

import { useState } from 'react'
import { Container, Card, Title, Text, Button, Group, Progress, Stack, Badge, ThemeIcon, Alert } from '@mantine/core'
import { motion } from 'framer-motion'
import { Check, X, RefreshCcw, Award, Info, Share2, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const questions = [
  {
    q: "Who conducts elections in India?",
    options: ["Supreme Court of India", "Election Commission of India", "President of India", "Parliament"],
    correct: 1,
    explanation: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India."
  },
  {
    q: "What is the minimum age to vote in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correct: 1,
    explanation: "The 61st Constitutional Amendment Act of 1988 lowered the voting age from 21 to 18 years."
  },
  {
    q: "How many elected seats are there in the Lok Sabha?",
    options: ["543", "545", "550", "250"],
    correct: 0,
    explanation: "The Lok Sabha currently has 543 elected seats. The provision for 2 nominated Anglo-Indian members was abolished in 2020."
  },
  {
    q: "What does NOTA stand for?",
    options: ["None Of The Above", "No Other True Alternative", "Not On The Agenda", "New Options To Apply"],
    correct: 0,
    explanation: "NOTA stands for 'None Of The Above', allowing voters to reject all candidates on the ballot."
  },
  {
    q: "How often is the Lok Sabha normally elected?",
    options: ["Every 4 years", "Every 5 years", "Every 6 years", "Varies by Prime Minister"],
    correct: 1,
    explanation: "The normal term of the Lok Sabha is 5 years, after which it is dissolved and fresh elections are held."
  },
  {
    q: "What is VVPAT?",
    options: ["Voter Verification Process And Technology", "Voter Verifiable Paper Audit Trail", "Verified Voting Pattern And Tracking", "Visual Voting Proof And Testing"],
    correct: 1,
    explanation: "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing the candidate voted for, visible to the voter for 7 seconds before dropping into a sealed box."
  },
  {
    q: "Who appoints the Chief Election Commissioner of India?",
    options: ["Prime Minister", "Chief Justice of India", "President of India", "Parliamentary Committee"],
    correct: 2,
    explanation: "The President of India appoints the Chief Election Commissioner and other Election Commissioners."
  },
  {
    q: "What is Form 6 used for in the electoral process?",
    options: ["Filing nomination", "Complaining about EVMs", "New voter registration", "Removing a name from the voter list"],
    correct: 2,
    explanation: "Form 6 is the application for inclusion of a name in the electoral roll for first-time voters or when changing constituency."
  },
  {
    q: "What does MCC stand for in the context of elections?",
    options: ["Maximum Campaign Cost", "Model Code of Conduct", "Ministry of Civic Committees", "Multiple Candidate Constituency"],
    correct: 1,
    explanation: "The Model Code of Conduct is a set of guidelines issued by the ECI to regulate political parties and candidates prior to elections."
  },
  {
    q: "What does EPIC stand for?",
    options: ["Electoral Photo Identity Card", "Election Process In India Commission", "Electronic Polling Interface Controller", "Elector's Photo Identity Card"],
    correct: 3,
    explanation: "EPIC stands for Elector's Photo Identity Card, commonly known as the Voter ID card issued by the ECI."
  }
]

export function QuizApp() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (idx: number) => {
    if (isAnswered) return
    setSelectedOption(idx)
    setIsAnswered(true)
    if (idx === questions[currentIdx].correct) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(c => c + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentIdx(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setShowResult(false)
  }

  const getBadge = () => {
    if (score <= 4) return { label: 'Novice Voter', color: 'gray' }
    if (score <= 7) return { label: 'Informed Citizen', color: 'blue' }
    if (score <= 9) return { label: 'Election Enthusiast', color: 'teal' }
    return { label: '🏆 Election Expert', color: 'orange' }
  }

  // ── Results Screen ──────────────────────────────────────────────────
  if (showResult) {
    const badge = getBadge()
    return (
      <Container size="sm" py={60}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
          <Card withBorder shadow="md" radius="md" p="xl" ta="center">
            {/* Tricolor accent */}
            <div style={{ height: 4, background: 'linear-gradient(to right, #FF9933 33.33%, #fff 33.33%, #fff 66.66%, #138808 66.66%)', margin: '-32px -32px 32px -32px', borderRadius: '8px 8px 0 0' }} />

            <ThemeIcon size={90} radius="100%" color={badge.color} variant="light" mx="auto" mb="lg">
              <Award size={44} />
            </ThemeIcon>
            <Title order={2} mb="xs">Quiz Complete!</Title>
            <Text size="xl" fw={700} c="dimmed" mb="md">
              You scored <Text component="span" c="orange" fw={800}>{score}</Text> out of {questions.length}
            </Text>

            <Badge size="xl" color={badge.color} variant="filled" mb="xl" radius="xl" style={{ padding: '10px 20px', fontSize: '14px' }}>
              {badge.label}
            </Badge>

            <div style={{ background: 'var(--mantine-color-gray-0)', borderRadius: 12, padding: '16px', marginBottom: 24 }}>
              <Progress value={(score / questions.length) * 100} color="orange" size="lg" radius="xl" />
              <Text size="sm" c="dimmed" mt="xs">{Math.round((score / questions.length) * 100)}% correct</Text>
            </div>

            <Group grow>
              <Button variant="default" leftSection={<RefreshCcw size={16} />} onClick={resetQuiz} radius="md">
                Retry Quiz
              </Button>
              <Button color="orange" leftSection={<Share2 size={16} />} radius="md"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'VoteIQ Quiz', text: `I scored ${score}/${questions.length} on the VoteIQ Civic Knowledge Quiz! Try it at VoteIQ.` })
                  } else {
                    alert(`Share your score: ${score}/${questions.length}`)
                  }
                }}>
                Share Score
              </Button>
            </Group>

            <Button component={Link} href="/glossary" variant="subtle" color="gray" mt="md" rightSection={<ArrowRight size={16} />} fullWidth>
              Explore Glossary to learn more
            </Button>
          </Card>
        </motion.div>
      </Container>
    )
  }

  // ── Quiz Screen ─────────────────────────────────────────────────────
  const currentQ = questions[currentIdx]
  const isCorrect = selectedOption === currentQ.correct

  return (
    <Container size="md" py={60}>
      <Title order={1} mb="xs" ta="center" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        Civic Knowledge Quiz
      </Title>
      <Text ta="center" c="dimmed" mb="xl">Test your knowledge about Indian elections and democracy.</Text>

      <motion.div
        key={currentIdx}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card withBorder shadow="sm" radius="md" p="xl" style={{ overflow: 'hidden' }}>
          {/* Tricolor top bar */}
          <div style={{ height: 4, background: 'linear-gradient(to right, #FF9933 33.33%, #e8e8e8 33.33%, #e8e8e8 66.66%, #138808 66.66%)', margin: '-24px -24px 24px -24px' }} />

          {/* Header */}
          <Group justify="space-between" mb="xs">
            <Text fw={600} size="sm" c="dimmed">Question {currentIdx + 1} / {questions.length}</Text>
            <Badge color="orange" variant="light" size="lg">Score: {score}</Badge>
          </Group>
          <Progress value={((currentIdx) / questions.length) * 100} color="orange" size="sm" radius="xl" mb="xl" />

          {/* Question */}
          <Title order={3} mb="xl" lh={1.5}>
            {currentQ.q}
          </Title>

          {/* Options */}
          <Stack gap="sm" mb="xl">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx
              const isCorrectAnswer = idx === currentQ.correct

              let variant: 'default' | 'filled' | 'light' | 'outline' = 'default'
              let color = 'gray'
              let icon = null

              if (isAnswered) {
                if (isCorrectAnswer) {
                  variant = 'light'
                  color = 'green'
                  icon = <Check size={18} />
                } else if (isSelected) {
                  variant = 'light'
                  color = 'red'
                  icon = <X size={18} />
                }
              } else if (isSelected) {
                variant = 'filled'
                color = 'orange'
              }

              return (
                <Button
                  key={idx}
                  variant={variant}
                  color={color}
                  size="md"
                  fullWidth
                  justify="space-between"
                  rightSection={icon}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered && !isCorrectAnswer && !isSelected}
                  radius="md"
                  style={{
                    height: 'auto',
                    minHeight: 52,
                    padding: '12px 16px',
                    textAlign: 'left',
                    whiteSpace: 'normal',
                    lineHeight: 1.4,
                    cursor: isAnswered ? 'default' : 'pointer',
                    border: isAnswered && isCorrectAnswer
                      ? '2px solid var(--mantine-color-green-5)'
                      : isAnswered && isSelected && !isCorrectAnswer
                      ? '2px solid var(--mantine-color-red-4)'
                      : undefined,
                  }}
                >
                  <Group gap="sm" wrap="nowrap" style={{ flex: 1, minWidth: 0 }}>
                    <Text
                      size="sm"
                      fw={600}
                      c={isAnswered ? (isCorrectAnswer ? 'green' : isSelected ? 'red' : 'dimmed') : 'inherit'}
                      style={{ flexShrink: 0 }}
                    >
                      {String.fromCharCode(65 + idx)}.
                    </Text>
                    <Text size="sm" ta="left" style={{ flex: 1, wordBreak: 'break-word' }}>
                      {opt}
                    </Text>
                  </Group>
                </Button>
              )
            })}
          </Stack>

          {/* Explanation + Next button */}
          {isAnswered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Alert
                color={isCorrect ? 'green' : 'blue'}
                title={isCorrect ? '✓ Correct!' : '✗ Not quite — here\'s why:'}
                icon={isCorrect ? <Check size={16} /> : <Info size={16} />}
                radius="md"
                mb="lg"
              >
                {currentQ.explanation}
              </Alert>

              <Group justify="flex-end">
                <Button
                  color="orange"
                  size="md"
                  onClick={handleNext}
                  rightSection={currentIdx === questions.length - 1 ? <Award size={16} /> : <ChevronRight size={16} />}
                  radius="md"
                >
                  {currentIdx === questions.length - 1 ? 'See Results' : 'Next Question'}
                </Button>
              </Group>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </Container>
  )
}
