# VoteIQ — Antigravity IDE Build Prompt
> An interactive assistant that helps Indian citizens understand the election process, timelines, voter registration, and civic knowledge.

---

## 🛠️ TECH STACK

| Layer | Choice |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **UI Library** | Mantine UI v7 (Light default + Dark toggle) |
| **Animation** | Framer Motion |
| **AI** | Google Gemini Flash API (Free) |
| **State** | Zustand |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Fonts** | Plus Jakarta Sans + Tiro Devanagari (Google Fonts) |

---

## 📁 PROJECT STRUCTURE

```
/app
  /page.tsx                        → Home
  /timeline/page.tsx               → Interactive Election Timeline
  /registration/page.tsx           → Voter Registration Guide
  /elections/page.tsx              → Types of Elections
  /assistant/page.tsx              → AI Chat Assistant
  /quiz/page.tsx                   → Knowledge Quiz
  /glossary/page.tsx               → Key Terms Glossary
  /api/chat/route.ts               → Gemini API server route

/components
  /layout
    Navbar.tsx                     → Top nav with theme toggle
    Footer.tsx
  /home
    HeroSection.tsx
    HowItWorks.tsx
    QuickStats.tsx
    UpcomingElections.tsx
    FeaturedArticle.tsx
    QuickNav.tsx
  /timeline
    ElectionTimeline.tsx
  /registration
    RegistrationStepper.tsx
  /elections
    ElectionTypeCard.tsx
  /assistant
    ChatInterface.tsx
    MessageBubble.tsx
  /quiz
    QuizCard.tsx
    ScoreBoard.tsx
  /glossary
    GlossarySearch.tsx
    TermCard.tsx

/lib
  gemini.ts                        → Gemini API client
  store.ts                         → Zustand store

/styles
  globals.css

.env.local                         → GEMINI_API_KEY
```

---

## 🎨 DESIGN SYSTEM

### Color Palette (Mantine Custom Theme)

| Token | Color | Hex |
|---|---|---|
| Primary | Deep Saffron | `#FF6B00` |
| Secondary | India Blue | `#1A3A6B` |
| Accent | Ashoka Chakra Blue | `#0057A8` |
| Background Light | Off White | `#FAFAF8` |
| Background Dark | Deep Navy | `#0F1923` |
| Surface Light | White | `#FFFFFF` |
| Surface Dark | Dark Card | `#1A2535` |
| Text Light | Dark Navy | `#1A1A2E` |
| Text Dark | Light Blue White | `#F0F4FF` |
| Success | Green | `#2D9B5A` |
| Warning | Amber | `#F5A623` |

### Typography
- **Display / Headings:** Plus Jakarta Sans (weight 800)
- **Body:** Plus Jakarta Sans (weight 400, 500)
- **Hindi Accent Text:** Tiro Devanagari
- **Base Size:** 16px, scale ratio 1.25

### Component Tokens
- Border radius: `md` (8px) for cards, `xl` (16px) for modals
- Shadow: `0 2px 12px rgba(0,0,0,0.08)`
- Spacing: Mantine default scale (xs=4, sm=8, md=16, lg=24, xl=32)

---

## ⚙️ MANTINE THEME SETUP

```tsx
// app/layout.tsx
import { MantineProvider, createTheme, ColorSchemeScript } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'orange',
  colors: {
    orange: ['#FFF4E6','#FFE8CC','#FFD8A8','#FFC078','#FFA94D',
             '#FF922B','#FF6B00','#E85D00','#C94F00','#A84300'],
    navy:   ['#E8EDF5','#C5D0E8','#9BAED4','#7189BC','#4E6BA3',
             '#2E4F8A','#1A3A6B','#132D54','#0D213E','#081629'],
  },
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  headings: { fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '800' },
  defaultRadius: 'md',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
```

---

## 📄 PAGE SPECIFICATIONS

---

### 1. 🏠 HOME PAGE (`/`)

#### Hero Section
- Full-width hero with India-map SVG background (subtle, low opacity)
- Large headline: **"Understand Every Vote. Every Step."** in Plus Jakarta Sans 800
- Subheading: *"India's most interactive guide to elections, voting rights, and civic participation"*
- Hindi subtitle in Tiro Devanagari: **"जानिए अपने मत की शक्ति"**
- Two CTA buttons: `Explore Timeline` (primary/saffron) + `Ask AI Assistant` (outline/navy)
- Mantine Badge at top: `🗳️ 2024 General Elections Guide`
- Framer Motion: staggered fade-up animation on load (0.1s delay between elements)

#### How It Works (3 Steps)
- Three Mantine Cards in a row with step numbers
  - **Step 1 — Explore:** Learn the election process visually
  - **Step 2 — Understand:** Dive deep into registration & types
  - **Step 3 — Participate:** Use AI assistant to get answers
- Framer Motion: slide-in from left on scroll

#### Quick Stats Section
- 4 animated stat cards:
  - `96.8 Crore` — Registered Voters (2024)
  - `543` — Lok Sabha Seats
  - `65.79%` — Voter Turnout 2024
  - `28 States + 8 UTs` — Coverage
- Framer Motion: count-up animation when scrolled into view

#### Upcoming Elections Widget
- Mantine Timeline showing next 3–4 scheduled elections
- Each item: State name, election type, date, status badge (`Scheduled` / `Announced` / `Completed`)
- Data hardcoded with real upcoming state elections

#### Featured Article Card
- Wide card with civic-themed SVG illustration
- Title: *"How India's Electronic Voting Machines Work"*
- Short 2-line description + `Read More` button

#### Quick Nav Grid
- 6 icon cards linking to all main pages
- Icons from Lucide React
- Hover: lift effect with Framer Motion

---

### 2. 🗓️ INTERACTIVE ELECTION TIMELINE (`/timeline`)

- Full vertical timeline using Mantine Timeline component
- **8 phases**, each expandable:
  1. Election Announcement *(Model Code of Conduct begins)*
  2. Voter List Finalization
  3. Nomination of Candidates
  4. Scrutiny of Nominations
  5. Withdrawal of Candidature
  6. Election Campaign
  7. Voting Day
  8. Counting & Result Declaration

- Each phase includes:
  - Phase title + general date range
  - Expanded detail: what happens, who is involved, key rules
  - Relevant law/article reference *(e.g., Representation of the People Act)*
  - Color-coded status: `Past` / `Current` / `Upcoming`
  - "Did you know?" callout box

- Framer Motion: animate each phase on scroll
- Sticky progress indicator on right showing active phase

---

### 3. 📋 VOTER REGISTRATION GUIDE (`/registration`)

- Mantine Stepper — **6 steps:**
  1. Check Eligibility *(Age 18+, Indian Citizen, Resident)*
  2. Gather Documents *(Aadhaar, Address Proof, Photo)*
  3. Fill Form 6 *(explained field by field)*
  4. Submit Online via NVSP / Voter Helpline App
  5. Track Application Status
  6. Receive Voter ID *(EPIC Card)*

- Each step includes:
  - Clear instructions in simple English
  - Document checklist with Mantine Checkbox
  - Official portal links: `nvsp.in`, `voters.eci.gov.in`
  - Common mistakes callout

- **Eligibility Checker:** Age input + citizenship toggle → eligible/not eligible result
- **Download Checklist** button (printable list)
- FAQ accordion at the bottom *(10 common registration questions)*

---

### 4. 🏛️ TYPES OF ELECTIONS (`/elections`)

Grid of election type cards:

| # | Election | Frequency | Voters |
|---|---|---|---|
| 1 | Lok Sabha | Every 5 years | General public |
| 2 | Rajya Sabha | Every 6 years (staggered) | MLAs |
| 3 | Vidhan Sabha | Every 5 years | General public |
| 4 | Vidhan Parishad | Every 6 years (staggered) | Mixed |
| 5 | Presidential Election | Every 5 years | MPs + MLAs |
| 6 | Vice Presidential | Every 5 years | MPs |
| 7 | Panchayati Raj | Every 5 years | General public |
| 8 | Municipal/ULB | Every 5 years | General public |

- Each card shows: English + Hindi name, frequency, total seats, who votes, Mantine Badge (`Direct` / `Indirect`)
- Expandable modal for full details
- Comparison table at bottom: all types side by side
- Framer Motion: card hover lift + entrance animation

---

### 5. 🤖 AI CHAT ASSISTANT (`/assistant`)

#### Gemini API Integration

```ts
// lib/gemini.ts
const SYSTEM_PROMPT = `You are VoteIQ Assistant, an expert on Indian elections,
voting processes, the Election Commission of India, constitutional provisions,
and civic participation. You help Indian citizens understand:
- The election process and timelines
- Voter registration and rights
- Types of elections (Lok Sabha, Rajya Sabha, Vidhan Sabha etc.)
- Electoral laws and the Model Code of Conduct
- EVM, VVPAT, and election technology
- Political parties, symbols, and candidate processes
- Historical election data and facts

Always respond in clear, simple English. When relevant, include the Hindi
term in parentheses. Be factual, neutral, and cite relevant laws or ECI
guidelines where applicable. If asked about something outside Indian elections
and civics, politely redirect to election-related topics.`

export async function askGemini(messages: {role: string, content: string}[]) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
      })
    }
  )
  const data = await response.json()
  return data.candidates[0].content.parts[0].text
}
```

#### API Route (Server-side — protects API key)

```ts
// app/api/chat/route.ts
import { askGemini } from '@/lib/gemini'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const reply = await askGemini(messages)
  return NextResponse.json({ reply })
}
```

#### Chat UI Features
- Split layout: sidebar (suggested questions) + main chat area
- Message bubbles: user (saffron/right) + AI (navy/left)
- Suggested starter questions:
  - *"How do I register to vote?"*
  - *"What is Model Code of Conduct?"*
  - *"How does EVM work?"*
  - *"What is NOTA?"*
  - *"Difference between Lok Sabha and Rajya Sabha?"*
  - *"What happens if I miss voting?"*
- Typing indicator (animated dots) while Gemini responds
- Copy message button on each AI response
- Chat history persisted in Zustand store (session only)
- Error handling: rate limit message + retry button
- Clear chat button

---

### 6. 🧠 KNOWLEDGE QUIZ (`/quiz`)

- **20 questions** total, shown 10 at a time (two rounds)
- Categories: Election Process | Voter Rights | Constitutional Facts | ECI Rules
- Type: Multiple choice (4 options), one question at a time
- Progress bar at top
- After each answer: show correct/wrong with explanation
- **Score Board** at end:
  - Score out of 10
  - Performance badge: `Novice` / `Informed Citizen` / `Election Expert`
  - Share score button
  - Retry or explore related page CTA
- Framer Motion: slide transition between questions (AnimatePresence)

#### Sample Questions
1. Who conducts elections in India? → *Election Commission of India*
2. Minimum age to vote? → *18 years*
3. Total Lok Sabha seats? → *543*
4. What does NOTA stand for? → *None Of The Above*
5. How often is Lok Sabha elected? → *Every 5 years*
6. What is VVPAT? → *Voter Verifiable Paper Audit Trail*
7. Who appoints the Chief Election Commissioner? → *President of India*
8. What is Form 6 used for? → *New voter registration*
9. What is MCC? → *Model Code of Conduct*
10. What does EPIC stand for? → *Elector's Photo Identity Card*
*(10 more covering delimitation, election symbols, postal ballot, by-elections, etc.)*

---

### 7. 📖 KEY TERMS GLOSSARY (`/glossary`)

- Live search bar at top (filters as you type)
- Filter by category: `All` | `Constitutional` | `Technical` | `Process` | `Bodies`
- Alphabetical A–Z jump links
- **"Term of the Day"** featured card at top

#### 40+ Terms Including:

| Term | Hindi | Category |
|---|---|---|
| EVM | इलेक्ट्रॉनिक वोटिंग मशीन | Technical |
| VVPAT | वीवीपैट | Technical |
| MCC | आदर्श आचार संहिता | Process |
| EPIC | मतदाता पहचान पत्र | Process |
| NVSP | राष्ट्रीय मतदाता सेवा पोर्टल | Bodies |
| NOTA | इनमें से कोई नहीं | Constitutional |
| Delimitation | परिसीमन | Constitutional |
| Constituency | निर्वाचन क्षेत्र | Constitutional |
| Returning Officer | निर्वाचन अधिकारी | Bodies |
| Postal Ballot | डाक मतपत्र | Process |
| By-election | उपचुनाव | Process |
| Hung Parliament | त्रिशंकु संसद | Constitutional |
| Anti-defection Law | दल-बदल विरोधी कानून | Constitutional |

- Each term card: English name + Hindi name + category badge + 2–3 line definition + expandable "Learn More"

---

## 🧭 NAVBAR

- Logo: `VoteIQ` with ballot icon (Lucide)
- Hindi tagline: **"मतदान जागरूकता"** in Tiro Devanagari
- Nav links: `Home` | `Timeline` | `Registration` | `Elections` | `Assistant` | `Quiz` | `Glossary`
- Right side: Light/Dark toggle (Mantine ActionIcon + Lucide Sun/Moon icons)
- Mobile: Mantine Burger → Drawer with full nav links
- Sticky with backdrop blur on scroll
- Active link: saffron underline indicator

---

## 🔻 FOOTER

**Three columns:**
- About VoteIQ
- Quick Links
- Official Resources:
  - [Election Commission of India](https://eci.gov.in)
  - [National Voters' Service Portal](https://nvsp.in)
  - Voter Helpline App
  - [Know Your Candidate](https://myneta.info)

> ⚠️ **Disclaimer:** This is an educational platform. For official information, visit [eci.gov.in](https://eci.gov.in)

Bottom bar: Copyright + *"Made with ❤️ for Indian Democracy"*

---

## 🌀 ANIMATIONS (Framer Motion)

| Element | Animation |
|---|---|
| Page transitions | Fade + translateY(-10px) on route change |
| Hero section | Staggered children, 0.15s delay each |
| Cards | `whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}` |
| Stats | `useInView` + animated count-up |
| Timeline phases | Slide in from left on scroll |
| Quiz questions | `AnimatePresence` slide transitions |
| Scroll reveals | opacity 0→1 + y 20→0 |

---

## ✅ ADDITIONAL REQUIREMENTS

- Fully responsive: mobile-first, works 320px → 1440px
- `next/font` for Google Fonts (no external font loading)
- `Next.js Image` component for all images
- All Gemini API calls via `/app/api/chat/route.ts` — **never expose API key client-side**
- Mantine `Skeleton` loading states for async content
- Error boundaries on all pages
- Accessibility: `aria-labels` on all interactive elements, fully keyboard navigable
- SEO: `metadata` export on every page with relevant title + description
- No TypeScript errors — proper types throughout
- ESLint clean

---

## 🔐 ENVIRONMENT VARIABLES

Create `.env.local` in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ Add `.env.local` to `.gitignore` — never commit your API key to GitHub.

---

## 🚀 GETTING STARTED

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000
```

---

*Built for Indian Democracy 🇮🇳 — VoteIQ*