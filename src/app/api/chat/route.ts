import { askGemini } from '@/lib/gemini'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    const reply = await askGemini(messages)
    return NextResponse.json({ reply })
  } catch (error: any) {
    console.error('Gemini API Error:', error)
    return NextResponse.json({ error: error.message || 'Failed to fetch response' }, { status: 500 })
  }
}
