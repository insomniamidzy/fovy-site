'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    difyChatbotConfig: {
      token: string
      baseUrl: string
    }
  }
}

export default function ChatbotScript() {
  useEffect(() => {
    // Configure Dify
    window.difyChatbotConfig = {
      token: 'ilTJQnFFcnP7Qa1o',
      baseUrl: 'http://localhost'
    }

    // Create and append script
    const script = document.createElement('script')
    script.src = 'http://localhost/embed.min.js'
    script.id = 'ilTJQnFFcnP7Qa1o'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return null
} 