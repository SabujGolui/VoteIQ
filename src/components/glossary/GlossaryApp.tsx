'use client'

import { useState } from 'react'
import { Container, Title, Text, TextInput, SegmentedControl, Card, Group, Badge, Accordion, ActionIcon } from '@mantine/core'
import { Search, Sparkles } from 'lucide-react'

const terms = [
  { term: 'EVM', hindi: 'इलेक्ट्रॉनिक वोटिंग मशीन', category: 'Technical', def: 'Electronic Voting Machine used to record votes. It consists of a Control Unit and a Balloting Unit.', details: 'Introduced to replace paper ballots, EVMs are tamper-proof and standalone machines not connected to any network. A single EVM can record a maximum of 2000 votes.' },
  { term: 'VVPAT', hindi: 'वीवीपैट', category: 'Technical', def: 'Voter Verifiable Paper Audit Trail. A slip generated for the voter to verify their vote.', details: 'When a vote is cast on the EVM, the VVPAT prints a slip containing the serial number, name, and symbol of the chosen candidate. It is visible for 7 seconds before dropping into a sealed box.' },
  { term: 'MCC', hindi: 'आदर्श आचार संहिता', category: 'Process', def: 'Model Code of Conduct. Guidelines issued by the ECI to regulate political parties and candidates.', details: 'The MCC comes into force immediately after the election dates are announced and remains in effect until the results are declared. It aims to ensure free and fair elections.' },
  { term: 'EPIC', hindi: 'मतदाता पहचान पत्र', category: 'Process', def: 'Elector\'s Photo Identity Card, commonly known as the Voter ID card.', details: 'Issued by the ECI to all eligible voters. While it is the primary document for establishing identity at the polling station, other approved documents can also be used if the name is on the electoral roll.' },
  { term: 'NVSP', hindi: 'राष्ट्रीय मतदाता सेवा पोर्टल', category: 'Bodies', def: 'National Voters\' Service Portal, a single window for voter services.', details: 'A portal where citizens can apply for new registration, make corrections, track application status, and download their e-EPIC.' },
  { term: 'NOTA', hindi: 'इनमें से कोई नहीं', category: 'Constitutional', def: 'None Of The Above. An option on the ballot allowing voters to reject all candidates.', details: 'Introduced following a Supreme Court directive in 2013. Even if NOTA gets the highest votes, the candidate with the next highest votes is declared the winner.' },
  { term: 'Delimitation', hindi: 'परिसीमन', category: 'Constitutional', def: 'The act of redrawing the boundaries of an assembly or Lok Sabha constituency.', details: 'Carried out by a Delimitation Commission to represent changes in population. It ensures that every constituency has roughly an equal number of voters.' },
  { term: 'Constituency', hindi: 'निर्वाचन क्षेत्र', category: 'Constitutional', def: 'A specific geographical area that elects a representative to a legislative body.', details: 'India is divided into 543 parliamentary constituencies for Lok Sabha elections, and smaller state assembly constituencies for state elections.' },
  { term: 'Returning Officer', hindi: 'निर्वाचन अधिकारी', category: 'Bodies', def: 'The officer responsible for overseeing the election in a constituency.', details: 'Appointed by the ECI. They are responsible for receiving nominations, scrutinizing them, allotting symbols, and declaring the result.' },
  { term: 'Postal Ballot', hindi: 'डाक मतपत्र', category: 'Process', def: 'Voting by post for electors unable to visit polling stations.', details: 'Available to service voters (armed forces), election duty staff, and recently extended to senior citizens (80+) and persons with disabilities.' },
  { term: 'By-election', hindi: 'उपचुनाव', category: 'Process', def: 'An election held to fill a political office that has become vacant between general elections.', details: 'Usually occurs when the incumbent dies, resigns, or is disqualified. It must be held within 6 months of the vacancy.' },
  { term: 'Hung Parliament', hindi: 'त्रिशंकु संसद', category: 'Constitutional', def: 'A situation where no single political party or pre-poll alliance secures an absolute majority.', details: 'The President then invites the leader of the single largest party or coalition to try and form a government and prove their majority on the floor of the house.' },
  { term: 'Anti-defection Law', hindi: 'दल-बदल विरोधी कानून', category: 'Constitutional', def: 'Law preventing elected members from changing parties after being elected.', details: 'Contained in the 10th Schedule of the Constitution. A member can be disqualified if they voluntarily give up membership of their party or vote contrary to party whips.' },
]

export function GlossaryApp() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredTerms = terms.filter(t => {
    const matchesSearch = t.term.toLowerCase().includes(search.toLowerCase()) || t.hindi.includes(search) || t.def.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || t.category === category
    return matchesSearch && matchesCategory
  }).sort((a, b) => a.term.localeCompare(b.term))

  const termOfTheDay = terms.find(t => t.term === 'VVPAT')

  return (
    <Container size="md" py={60}>
      <Title order={1} mb="xs" style={{ fontFamily: 'var(--mantine-font-family-headings)' }}>
        Key Terms Glossary
      </Title>
      <Text c="dimmed" mb={40}>Explore and understand the terminology used in Indian elections and the Constitution.</Text>

      {termOfTheDay && !search && category === 'All' && (
        <Card withBorder radius="md" p="xl" bg="var(--mantine-color-orange-0)" mb="xl">
          <Group mb="md">
            <Sparkles size={24} color="var(--mantine-color-orange-6)" />
            <Text fw={800} c="orange.9">Term of the Day</Text>
          </Group>
          <Group justify="space-between" mb="xs">
            <Group>
              <Title order={3}>{termOfTheDay.term}</Title>
              <Text c="dimmed" style={{ fontFamily: 'var(--font-tiro)', fontSize: '20px' }}>{termOfTheDay.hindi}</Text>
            </Group>
            <Badge color="blue" variant="outline">{termOfTheDay.category}</Badge>
          </Group>
          <Text fw={500} mb="sm">{termOfTheDay.def}</Text>
          <Text size="sm" c="dimmed">{termOfTheDay.details}</Text>
        </Card>
      )}

      <Group mb="xl" grow>
        <TextInput
          placeholder="Search for a term (e.g., EVM, NOTA)..."
          size="md"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          leftSection={<Search size={18} />}
          style={{ flex: 1 }}
        />
      </Group>

      <SegmentedControl
        value={category}
        onChange={setCategory}
        data={['All', 'Constitutional', 'Technical', 'Process', 'Bodies']}
        fullWidth
        mb="xl"
        size="md"
        color="orange"
      />

      {filteredTerms.length === 0 ? (
        <Text ta="center" c="dimmed" py="xl">No terms found matching your search criteria.</Text>
      ) : (
        <Accordion variant="separated" radius="md">
          {filteredTerms.map((t) => (
            <Accordion.Item value={t.term} key={t.term}>
              <Accordion.Control>
                <Group justify="space-between" style={{ width: '100%' }}>
                  <Group>
                    <Text fw={700} size="lg">{t.term}</Text>
                    <Text c="dimmed" style={{ fontFamily: 'var(--font-tiro)' }}>{t.hindi}</Text>
                  </Group>
                  <Badge 
                    color={
                      t.category === 'Technical' ? 'grape' : 
                      t.category === 'Constitutional' ? 'blue' : 
                      t.category === 'Process' ? 'orange' : 'teal'
                    }
                    variant="light"
                  >
                    {t.category}
                  </Badge>
                </Group>
                <Text size="sm" mt="xs">{t.def}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Card bg="var(--mantine-color-gray-0)" p="md" radius="sm">
                  <Text size="sm" lh={1.6}>{t.details}</Text>
                </Card>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  )
}
