import { create } from 'zustand'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AppState {
  chatHistory: ChatMessage[]
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void
  clearChat: () => void
}

export const useStore = create<AppState>((set) => ({
  chatHistory: [],
  addMessage: (message) => 
    set((state) => ({
      chatHistory: [
        ...state.chatHistory, 
        { ...message, id: Math.random().toString(36).substring(7), timestamp: new Date() }
      ]
    })),
  clearChat: () => set({ chatHistory: [] }),
}))
