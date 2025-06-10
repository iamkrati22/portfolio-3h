"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import PortfolioMode from "@/components/portfolio-mode"
import TerminalMode from "@/components/terminal-mode"
import ModeToggle from "@/components/mode-toggle"
import TerminalLoader from "@/components/terminal-loader"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [isTerminalMode, setIsTerminalMode] = useState(false)

  const toggleMode = () => {
    if (!isTerminalMode) {
      // Switching to terminal mode - show loader
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setIsTerminalMode(true)
      }, 3000)
    } else {
      // Switching to portfolio mode - no loader
      setIsTerminalMode(false)
    }
  }

  if (loading) {
    return <TerminalLoader onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen relative">
      <ModeToggle isTerminalMode={isTerminalMode} onToggle={toggleMode} />

      <AnimatePresence mode="wait">
        {isTerminalMode ? <TerminalMode key="terminal" /> : <PortfolioMode key="portfolio" />}
      </AnimatePresence>
    </div>
  )
}
