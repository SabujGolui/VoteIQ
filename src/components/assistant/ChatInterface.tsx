'use client'

import { useState, useRef, useEffect } from 'react'
import { Container, Grid, Card, Title, Text, Stack, TextInput, ActionIcon, Group, ScrollArea, Button, Loader, CopyButton, Tooltip, Avatar } from '@mantine/core'
import { Send, Bot, User, Copy, Check, RefreshCw, Trash } from 'lucide-react'
import { useStore } from '@/lib/store'
import ReactMarkdown from 'react-markdown'

const suggestedQuestions = [
  "How do I register to vote?",
  "What is Model Code of Conduct?",
  "How does EVM work?",
  "What is NOTA?",
  "Difference between Lok Sabha and Rajya Sabha?",
  "What happens if I miss voting?"
]

export function ChatInterface() {
  const { chatHistory, addMessage, clearChat } = useStore()
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatHistory])

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return
    
    const userMsg = text.trim()
    setInput('')
    setError(null)
    addMessage({ role: 'user', content: userMsg })
    setIsLoading(true)

    // Prepare messages for API (exclude id/timestamp)
    const apiMessages = [...chatHistory, { role: 'user', content: userMsg }].map(m => ({
      role: m.role,
      content: m.content
    }))

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch response')
      }

      addMessage({ role: 'assistant', content: data.reply })
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container size="xl" py={40}>
      <Grid>
        {/* Sidebar */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="md" p="xl" shadow="sm">
            <Group mb="lg">
              <Bot size={28} color="var(--mantine-color-orange-6)" />
              <Title order={3} style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
                VoteIQ Assistant
              </Title>
            </Group>
            
            <Text size="sm" c="dimmed" mb="xl">
              I'm an AI assistant trained on Indian elections, voting rights, and constitutional provisions. Ask me anything!
            </Text>

            <Title order={5} mb="md">Suggested Questions</Title>
            <Stack gap="sm">
              {suggestedQuestions.map((q, idx) => (
                <Button 
                  key={idx} 
                  variant="light" 
                  color="gray" 
                  fullWidth 
                  justify="flex-start" 
                  style={{ whiteSpace: 'normal', height: 'auto', padding: '10px' }}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                >
                  <Text size="sm" ta="left">{q}</Text>
                </Button>
              ))}
            </Stack>

            <Button 
              variant="subtle" 
              color="red" 
              fullWidth 
              mt="xl" 
              leftSection={<Trash size={16} />}
              onClick={clearChat}
              disabled={chatHistory.length === 0 || isLoading}
            >
              Clear Chat History
            </Button>
          </Card>
        </Grid.Col>

        {/* Chat Area */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card withBorder radius="md" shadow="sm" p={0} style={{ display: 'flex', flexDirection: 'column', height: '70vh', minHeight: '500px' }}>
            <ScrollArea style={{ flex: 1, padding: '20px' }}>
              {chatHistory.length === 0 ? (
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--mantine-color-dimmed)' }}>
                  <Bot size={60} opacity={0.2} />
                  <Text mt="md" fw={500}>How can I help you today?</Text>
                </div>
              ) : (
                <Stack gap="xl">
                  {chatHistory.map((msg) => (
                    <Group key={msg.id} align="flex-start" wrap="nowrap" dir={msg.role === 'user' ? 'rtl' : 'ltr'}>
                      <Avatar color={msg.role === 'user' ? 'orange' : 'navy'} radius="xl">
                        {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                      </Avatar>
                      <Card 
                        withBorder 
                        radius="md" 
                        p="md" 
                        bg={msg.role === 'user' ? 'var(--mantine-color-orange-0)' : 'var(--mantine-color-gray-0)'}
                        style={{ maxWidth: '80%', borderTopRightRadius: msg.role === 'user' ? 0 : 'var(--mantine-radius-md)', borderTopLeftRadius: msg.role === 'assistant' ? 0 : 'var(--mantine-radius-md)' }}
                        dir="ltr"
                      >
                        {msg.role === 'user' ? (
                          <Text size="sm" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{msg.content}</Text>
                        ) : (
                          <div style={{ fontSize: 'var(--mantine-font-size-sm)', lineHeight: 1.6 }}>
                            <ReactMarkdown
                              components={{
                                p: ({node, ...props}) => <p style={{ margin: '0 0 10px 0' }} {...props} />,
                                ul: ({node, ...props}) => <ul style={{ margin: '0 0 10px 0', paddingLeft: '20px' }} {...props} />,
                                ol: ({node, ...props}) => <ol style={{ margin: '0 0 10px 0', paddingLeft: '20px' }} {...props} />,
                                li: ({node, ...props}) => <li style={{ marginBottom: '4px' }} {...props} />,
                                h1: ({node, ...props}) => <h1 style={{ fontSize: '1.2em', margin: '10px 0' }} {...props} />,
                                h2: ({node, ...props}) => <h2 style={{ fontSize: '1.1em', margin: '10px 0' }} {...props} />,
                                h3: ({node, ...props}) => <h3 style={{ fontSize: '1em', margin: '10px 0' }} {...props} />,
                                a: ({node, ...props}) => <a style={{ color: 'var(--mantine-color-orange-6)' }} {...props} />,
                                code: ({node, ...props}) => <code style={{ backgroundColor: 'var(--mantine-color-gray-2)', padding: '2px 4px', borderRadius: '4px' }} {...props} />,
                              }}
                            >
                              {msg.content}
                            </ReactMarkdown>
                          </div>
                        )}
                        
                        {msg.role === 'assistant' && (
                          <Group justify="flex-end" mt="xs">
                            <CopyButton value={msg.content} timeout={2000}>
                              {({ copied, copy }) => (
                                <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                  <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                    {copied ? <Check size={14} /> : <Copy size={14} />}
                                  </ActionIcon>
                                </Tooltip>
                              )}
                            </CopyButton>
                          </Group>
                        )}
                      </Card>
                    </Group>
                  ))}
                  
                  {isLoading && (
                    <Group align="flex-start" wrap="nowrap">
                      <Avatar color="navy" radius="xl">
                        <Bot size={20} />
                      </Avatar>
                      <Card withBorder radius="md" p="md" bg="var(--mantine-color-gray-0)" style={{ borderTopLeftRadius: 0 }}>
                        <Loader color="navy" size="sm" type="dots" />
                      </Card>
                    </Group>
                  )}
                  
                  {error && (
                    <Group justify="center" mt="md">
                      <Text c="red" size="sm">{error}</Text>
                      <Button size="xs" variant="light" color="red" leftSection={<RefreshCw size={14} />} onClick={() => handleSend(chatHistory[chatHistory.length - 1]?.content || '')}>
                        Retry
                      </Button>
                    </Group>
                  )}
                  <div ref={scrollRef} />
                </Stack>
              )}
            </ScrollArea>

            <div style={{ padding: '20px', borderTop: '1px solid var(--mantine-color-default-border)' }}>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }}>
                <TextInput
                  placeholder="Ask a question about elections..."
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value)}
                  disabled={isLoading}
                  radius="md"
                  size="md"
                  rightSection={
                    <ActionIcon 
                      type="submit" 
                      color="orange" 
                      variant="filled" 
                      radius="md" 
                      size="lg"
                      disabled={!input.trim() || isLoading}
                    >
                      <Send size={18} />
                    </ActionIcon>
                  }
                  rightSectionWidth={50}
                />
              </form>
            </div>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
