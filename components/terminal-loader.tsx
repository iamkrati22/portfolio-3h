"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TerminalLoaderProps {
  onComplete: () => void
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [currentLine, setCurrentLine] = useState(0)

  const bootSequence = [
    "Initializing Krati's Portfolio System...",
    "Loading user profile...",
    "Connecting to GitHub repositories...",
    "Fetching project data...",
    "Optimizing performance metrics...",
    "System ready. Welcome to the terminal.",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootSequence.length - 1) {
          return prev + 1
        } else {
          clearInterval(timer)
          setTimeout(onComplete, 1000)
          return prev
        }
      })
    }, 600)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/80 backdrop-blur-xl border border-green-500/30 rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-green-400 text-sm ml-4 font-mono">krati@portfolio:~$</span>
        </div>

        <div className="space-y-2 font-mono text-sm">
          {bootSequence.slice(0, currentLine + 1).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-400"
            >
              <span className="text-green-400">$</span> {line}
              {index === currentLine && (
                <motion.span
                  className="inline-block w-2 h-4 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
