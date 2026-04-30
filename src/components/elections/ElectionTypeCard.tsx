'use client'

import { useState } from 'react'
import { Container, Title, Text, SimpleGrid, Card, Badge, Group, Button, Modal, Table, ThemeIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { Eye, CheckCircle2 } from 'lucide-react'

const electionTypes = [
  { id: 1, name: 'Lok Sabha', hindi: 'लोक सभा', frequency: 'Every 5 years', seats: '543', voters: 'General public', type: 'Direct', details: 'The lower house of India\'s bicameral Parliament. Members of Parliament (MPs) are elected directly by the people to represent their respective constituencies.' },
  { id: 2, name: 'Rajya Sabha', hindi: 'राज्य सभा', frequency: 'Every 6 years (staggered)', seats: '245', voters: 'MLAs', type: 'Indirect', details: 'The upper house of Parliament. Members are elected indirectly by the elected members of the State Legislative Assemblies. One-third of its members retire every two years.' },
  { id: 3, name: 'Vidhan Sabha', hindi: 'विधान सभा', frequency: 'Every 5 years', seats: 'State dependent', voters: 'General public', type: 'Direct', details: 'The lower house of the State Legislature. Members of Legislative Assembly (MLAs) are directly elected by the people of the respective state.' },
  { id: 4, name: 'Vidhan Parishad', hindi: 'विधान परिषद', frequency: 'Every 6 years (staggered)', seats: 'State dependent', voters: 'Mixed', type: 'Indirect', details: 'The upper house in states with a bicameral legislature. Members are elected by local bodies, graduates, teachers, and MLAs.' },
  { id: 5, name: 'Presidential Election', hindi: 'राष्ट्रपति चुनाव', frequency: 'Every 5 years', seats: '1', voters: 'MPs + MLAs', type: 'Indirect', details: 'The President of India is elected by an electoral college consisting of elected members of both houses of Parliament and elected members of the Legislative Assemblies of all states.' },
  { id: 6, name: 'Vice Presidential', hindi: 'उपराष्ट्रपति चुनाव', frequency: 'Every 5 years', seats: '1', voters: 'MPs', type: 'Indirect', details: 'The Vice President is elected by an electoral college consisting of all members (elected and nominated) of both houses of Parliament.' },
  { id: 7, name: 'Panchayati Raj', hindi: 'पंचायती राज', frequency: 'Every 5 years', seats: 'Varies', voters: 'General public', type: 'Direct', details: 'Elections for local self-government in rural areas, including Gram Panchayats, Panchayat Samitis, and Zila Parishads.' },
  { id: 8, name: 'Municipal / ULB', hindi: 'नगर पालिका', frequency: 'Every 5 years', seats: 'Varies', voters: 'General public', type: 'Direct', details: 'Elections for Urban Local Bodies (ULBs) like Municipal Corporations, Municipal Councils, and Nagar Panchayats.' },
]

export function ElectionTypeCard() {
  const [opened, { open, close }] = useDisclosure(false)
  const [selectedElection, setSelectedElection] = useState(electionTypes[0])

  const handleOpen = (election: any) => {
    setSelectedElection(election)
    open()
  }

  const rows = electionTypes.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td fw={500}>{element.name}</Table.Td>
      <Table.Td>{element.frequency}</Table.Td>
      <Table.Td>{element.seats}</Table.Td>
      <Table.Td>{element.voters}</Table.Td>
      <Table.Td>
        <Badge color={element.type === 'Direct' ? 'green' : 'blue'} variant="light">
          {element.type}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Container size="xl" py={40}>
      <Title order={1} mb="md" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        Types of Elections in India
      </Title>
      <Text c="dimmed" size="lg" mb={40}>
        India has a multi-tiered democratic structure. Learn about the different types of elections held at the national, state, and local levels.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg" mb={60}>
        {electionTypes.map((election, index) => (
          <motion.div
            key={election.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card withBorder radius="md" p="md" shadow="sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Group justify="space-between" mb="xs">
                <Text fw={800} size="lg">{election.name}</Text>
                <Badge color={election.type === 'Direct' ? 'green' : 'blue'} variant="light">
                  {election.type}
                </Badge>
              </Group>
              
              <Text c="dimmed" size="sm" mb="md" style={{ fontFamily: 'var(--font-tiro)' }}>
                {election.hindi}
              </Text>

              <Group gap="xs" mb="xs" mt="auto">
                <ThemeIcon size={20} variant="light" color="gray" radius="xl"><CheckCircle2 size={12} /></ThemeIcon>
                <Text size="sm"><strong>Frequency:</strong> {election.frequency}</Text>
              </Group>
              
              <Group gap="xs" mb="lg">
                <ThemeIcon size={20} variant="light" color="gray" radius="xl"><CheckCircle2 size={12} /></ThemeIcon>
                <Text size="sm"><strong>Voters:</strong> {election.voters}</Text>
              </Group>

              <Button variant="light" color="orange" fullWidth leftSection={<Eye size={16} />} onClick={() => handleOpen(election)}>
                View Details
              </Button>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>

      <Title order={2} mb="lg" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        Comparison Summary
      </Title>
      
      <Card withBorder shadow="sm" radius="md" p={0} style={{ overflowX: 'auto' }}>
        <Table striped highlightOnHover verticalSpacing="md" horizontalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Election Name</Table.Th>
              <Table.Th>Frequency</Table.Th>
              <Table.Th>Total Seats</Table.Th>
              <Table.Th>Who Votes?</Table.Th>
              <Table.Th>Type</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>

      <Modal opened={opened} onClose={close} title={selectedElection.name} centered size="lg" radius="md">
        <Group mb="md">
          <Badge size="lg" color={selectedElection.type === 'Direct' ? 'green' : 'blue'}>
            {selectedElection.type} Election
          </Badge>
          <Text c="dimmed" style={{ fontFamily: 'var(--font-tiro)' }}>{selectedElection.hindi}</Text>
        </Group>

        <Text mb="lg" lh={1.6}>{selectedElection.details}</Text>

        <SimpleGrid cols={2} spacing="md">
          <Card bg="var(--mantine-color-gray-0)" p="sm" radius="md">
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">Frequency</Text>
            <Text fw={600}>{selectedElection.frequency}</Text>
          </Card>
          <Card bg="var(--mantine-color-gray-0)" p="sm" radius="md">
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">Total Seats</Text>
            <Text fw={600}>{selectedElection.seats}</Text>
          </Card>
          <Card bg="var(--mantine-color-gray-0)" p="sm" radius="md">
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">Who Votes</Text>
            <Text fw={600}>{selectedElection.voters}</Text>
          </Card>
        </SimpleGrid>
      </Modal>
    </Container>
  )
}
