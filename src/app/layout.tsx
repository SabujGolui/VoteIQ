import '@mantine/core/styles.css'
import './globals.css'
import { MantineProvider, createTheme, ColorSchemeScript, Box } from '@mantine/core'
import { Plus_Jakarta_Sans, Tiro_Devanagari_Hindi } from 'next/font/google'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '800'], 
  variable: '--font-jakarta' 
})

const tiro = Tiro_Devanagari_Hindi({ 
  subsets: ['devanagari'], 
  weight: ['400'], 
  variable: '--font-tiro' 
})

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

export const metadata: Metadata = {
  title: 'VoteIQ',
  description: "India's most interactive guide to elections, voting rights, and civic participation",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${tiro.variable}`} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Navbar />
          <Box style={{ minHeight: 'calc(100vh - 70px - 200px)' }}>
            {children}
          </Box>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
