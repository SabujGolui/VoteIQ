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
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in the environment variables.");
  }
  
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
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
  
  if (!response.ok) {
    console.error("Gemini API Error Response:", data);
    throw new Error(data.error?.message || "Error communicating with Gemini API");
  }
  
  if (!data.candidates || data.candidates.length === 0) {
    throw new Error("Gemini API returned an empty response.");
  }
  
  return data.candidates[0].content.parts[0].text
}
