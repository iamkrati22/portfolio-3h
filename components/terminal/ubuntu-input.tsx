"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface UbuntuTerminalInputProps {
  onExecuteCommand: (command: string) => void
  availableCommands: string[]
  currentDirectory: string
}

export default function UbuntuTerminalInput({
  onExecuteCommand,
  availableCommands,
  currentDirectory,
}: UbuntuTerminalInputProps) {
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    setHistoryIndex(-1)

    if (value.trim()) {
      const filtered = availableCommands.filter((cmd) => cmd.toLowerCase().startsWith(value.toLowerCase()))
      setSuggestions(filtered)
      setShowSuggestions(filtered.length > 0 && value !== filtered[0])
    } else {
      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[0])
        setShowSuggestions(false)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setCommandHistory((prev) => [...prev, input])
      onExecuteCommand(input)
      setInput("")
      setShowSuggestions(false)
      setHistoryIndex(-1)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setShowSuggestions(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const getPrompt = () => {
    const user = "krati"
    const host = "portfolio"
    const dir = currentDirectory.replace("/home/krati", "~")
    return `${user}@${host}:${dir}$`
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm border-t border-orange-500/20 p-3 sm:p-4">
      {showSuggestions && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 flex flex-wrap gap-1.5 sm:gap-2"
        >
          {suggestions.map((suggestion) => (
            <motion.button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-2 sm:px-3 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500/30 hover:bg-orange-500/30 transition-colors text-xs sm:text-sm font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {suggestion}
            </motion.button>
          ))}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-1 sm:gap-2">
        <span className="text-green-400 font-mono text-xs sm:text-sm flex-shrink-0">{getPrompt()}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder-slate-500 min-w-0"
          placeholder="Type a command... (try 'help' or 'neofetch')"
          autoComplete="off"
        />
        <motion.div
          className="w-1.5 sm:w-2 h-3 sm:h-4 bg-green-400 flex-shrink-0"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </form>
    </div>
  )
}
