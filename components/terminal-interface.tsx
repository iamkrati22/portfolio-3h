"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TerminalHeader from "./terminal-header"
import TerminalContent from "./terminal-content"
import TerminalInput from "./terminal-input"

export default function TerminalInterface() {
  const [currentSection, setCurrentSection] = useState("welcome")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const availableCommands = {
    help: "Show available commands",
    about: "Display information about Krati",
    skills: "List technical skills and expertise",
    experience: "Show work experience and achievements",
    projects: "Display featured projects",
    contact: "Get contact information",
    clear: "Clear terminal screen",
    whoami: "Display current user info",
  }

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()
    setCommandHistory((prev) => [...prev, `$ ${command}`])

    if (cmd in availableCommands) {
      setCurrentSection(cmd)
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 1000)
    } else if (cmd === "clear") {
      setCommandHistory([])
      setCurrentSection("welcome")
    } else if (cmd === "") {
      // Do nothing for empty command
    } else {
      setCommandHistory((prev) => [...prev, `Command not found: ${command}. Type 'help' for available commands.`])
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, currentSection])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl h-[90vh] bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl">
        <TerminalHeader />

        <div ref={terminalRef} className="h-full overflow-y-auto p-6 pb-20">
          {/* Command History */}
          <div className="space-y-2 mb-4">
            {commandHistory.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`font-mono text-sm ${line.startsWith("$") ? "text-cyan-400" : "text-red-400"}`}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Current Section Content */}
          <AnimatePresence mode="wait">
            <TerminalContent key={currentSection} section={currentSection} isTyping={isTyping} />
          </AnimatePresence>
        </div>

        <TerminalInput onExecuteCommand={executeCommand} availableCommands={Object.keys(availableCommands)} />
      </div>
    </motion.div>
  )
}
