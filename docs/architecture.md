# VoteIQ — Architecture

## Tech Stack
- Framework: Next.js 14 (App Router)
- UI Library: Mantine UI v7
- AI: Google Gemini Flash API
- Animation: Framer Motion
- State: Zustand
- Icons: Lucide React
- Charts: Recharts
- Fonts: Plus Jakarta Sans + Tiro Devanagari

## Project Structure
- /app → Next.js App Router pages
- /components → Reusable UI components
- /lib → Gemini API client + Zustand store
- /docs → Prompt documentation

## AI Integration
- Model: gemini-1.5-flash
- API Route: /app/api/chat/route.ts
- Scoped to: Indian election & civic queries only