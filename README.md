# VoteIQ 🗳️

### India's Interactive Election Assistant

> Empowering every Indian citizen to understand their vote — step by step, in simple language.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Mantine](https://img.shields.io/badge/Mantine-v7-339AF0?style=flat-square&logo=mantine)](https://mantine.dev/)
[![Gemini](https://img.shields.io/badge/Gemini-Flash_API-4285F4?style=flat-square&logo=google)](https://aistudio.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🌐 Live Demo

🔗 **[https://voteiq-719773878620.asia-south1.run.app](https://voteiq-719773878620.asia-south1.run.app)**

---

## 📌 About VoteIQ

India has **96.8 crore registered voters** — yet many citizens don't fully understand how elections work, how to register, or what their rights are.

**VoteIQ** is an AI-powered civic education platform that makes the Indian election process interactive, accessible, and easy to understand for every citizen — from first-time voters to curious students.

Built for the **Hack2skill x Google Cloud Hackathon**, VoteIQ combines the power of **Google Gemini Flash API** with a modern, responsive web experience to bring civic awareness to everyone.

---

## ✨ Features

### 🏠 Home

- Hero section with India-themed design
- Quick stats — registered voters, Lok Sabha seats, voter turnout
- Upcoming elections widget
- How it works — 3 step visual guide
- Featured article card
- Quick navigation to all sections

### 🗓️ Interactive Election Timeline

- 8-phase visual timeline from announcement to result
- Expandable phase details with key rules and laws
- "Did you know?" callouts per phase
- Sticky scroll progress indicator

### 📋 Voter Registration Guide

- 6-step guided registration walkthrough
- Eligibility checker (age + citizenship)
- Document checklist with Form 6 explanation
- Official portal links (NVSP, ECI)
- FAQ accordion — 10 common questions

### 🏛️ Types of Elections

- All 8 election types explained — Lok Sabha to Panchayat
- Direct vs Indirect election comparison
- Seat counts, frequency, and voter eligibility
- Side-by-side comparison table

### 🤖 AI Chat Assistant

- Powered by **Google Gemini 1.5 Flash**
- Answers questions on elections, voter rights, EVM, MCC, and more
- Suggested starter questions
- Bilingual awareness (English + Hindi terms)
- Scoped strictly to Indian elections and civics

### 🧠 Knowledge Quiz

- 20 questions across 4 categories
- Performance badges: Novice → Informed Citizen → Election Expert
- Explanation after every answer
- Shareable score card

### 📖 Key Terms Glossary

- 40+ terms with Hindi translations
- Live search + category filters
- A–Z alphabetical index
- Term of the Day feature

---

## 🛠️ Tech Stack

| Layer                | Technology                          |
| -------------------- | ----------------------------------- |
| **Framework**        | Next.js 14 (App Router)             |
| **UI Library**       | Mantine UI v7                       |
| **AI Model**         | Google Gemini 1.5 Flash             |
| **Animation**        | Framer Motion                       |
| **State Management** | Zustand                             |
| **Icons**            | Lucide React                        |
| **Charts**           | Recharts                            |
| **Fonts**            | Plus Jakarta Sans + Tiro Devanagari |
| **Deployment**       | Google Cloud Run                    |
| **CSS**              | Mantine CSS + CSS Modules           |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A free Gemini API key from [aistudio.google.com](https://aistudio.google.com)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/voteiq.git
cd voteiq
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**4. Run the development server**

```bash
npm run dev
```

**5. Open in browser**

```
http://localhost:3000
```

---

## 🔑 Get Your Free Gemini API Key

1. Visit **[aistudio.google.com](https://aistudio.google.com)**
2. Sign in with your Google account
3. Click **"Get API Key"** → **"Create API Key"**
4. Copy and paste into `.env.local`

> ✅ Free tier: 1,500 requests/day — no credit card required

---

## 📁 Project Structure

```
voteiq/
├── app/
│   ├── page.tsx                 # Home page
│   ├── timeline/page.tsx        # Election Timeline
│   ├── registration/page.tsx    # Voter Registration Guide
│   ├── elections/page.tsx       # Types of Elections
│   ├── assistant/page.tsx       # AI Chat Assistant
│   ├── quiz/page.tsx            # Knowledge Quiz
│   ├── glossary/page.tsx        # Key Terms Glossary
│   └── api/chat/route.ts        # Gemini API server route
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── home/                    # Home page sections
│   ├── timeline/                # Timeline components
│   ├── registration/            # Stepper components
│   ├── elections/               # Election type cards
│   ├── assistant/               # Chat UI components
│   ├── quiz/                    # Quiz components
│   └── glossary/                # Glossary components
├── lib/
│   ├── gemini.ts                # Gemini API client
│   └── store.ts                 # Zustand global store
├── docs/
│   ├── prompt.md                # Antigravity IDE build prompt
│   └── architecture.md          # Architecture documentation
├── styles/
│   └── globals.css
├── .env.local                   # ← Create this (not committed)
├── .gitignore
└── README.md
```

---

## 🌍 Deployment on Google Cloud Run

```bash
# Login to Google Cloud
gcloud auth login

# Set your project
gcloud config set project YOUR_PROJECT_ID

# Enable required services
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Deploy from source (no Docker needed)
gcloud run deploy voteiq \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=your_key_here
```

---

## 📸 Screenshots

| Home                               | Timeline                                   | AI Assistant                                 |
| ---------------------------------- | ------------------------------------------ | -------------------------------------------- |
| ![Home](docs/screenshots/home.png) | ![Timeline](docs/screenshots/timeline.png) | ![Assistant](docs/screenshots/assistant.png) |

---

## 🤝 Official Resources

- 🏛️ [Election Commission of India](https://eci.gov.in)
- 📝 [National Voters' Service Portal](https://nvsp.in)
- 📱 [Voter Helpline App](https://play.google.com/store/apps/details?id=com.eci.citizen)
- 🔍 [Know Your Candidate](https://myneta.info)

---

## ⚠️ Disclaimer

VoteIQ is an **independent educational platform** built for civic awareness. It is not affiliated with the Election Commission of India or any government body. For official election information, always refer to **[eci.gov.in](https://eci.gov.in)**.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Built By

**Sabuj** — Built with ❤️ for Indian Democracy 🇮🇳

> _"The vote is the most powerful instrument ever devised by man for breaking down injustice."_ — Lyndon B. Johnson

---

_Built for Hack2skill x Google Cloud Hackathon_
