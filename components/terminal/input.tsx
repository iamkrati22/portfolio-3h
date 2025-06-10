"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface TerminalInputProps {
  onExecuteCommand: (command: string) => void
  availableCommands: string[]
}

export default function TerminalInput({ onExecuteCommand, availableCommands }: TerminalInputProps) {
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    if (value.trim()) {
      const filtered = availableCommands.filter((cmd) => cmd.toLowerCase().startsWith(value.toLowerCase()))
      setSuggestions(filtered)
      setShowSuggestions(filtered.length > 0 && value !== filtered[0])
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onExecuteCommand(input)
      setInput("")
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setShowSuggestions(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-cyan-500/20 p-4">
      {showSuggestions && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 flex flex-wrap gap-2"
        >
          {suggestions.map((suggestion) => (
            <motion.button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors text-sm font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {suggestion}
            </motion.button>
          ))}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-sm">krati@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none placeholder-slate-500"
          placeholder="Type a command... (try 'help')"
          autoComplete="off"
        />
        <motion.div
          className="w-2 h-4 bg-green-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </form>
    </div>
  )
}
